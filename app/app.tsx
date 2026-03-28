/**
 * DejaDo Loop — App Root
 *
 * Handles:
 * - Store hydration from AsyncStorage
 * - Onboarding gate (show on first launch)
 * - Morning affirmation gate (show once per day)
 * - Main navigation
 */

import "./i18n"
import "./utils/ignoreWarnings"
import { useFonts } from "expo-font"
import React, { useEffect, useState } from "react"
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context"
import { useInitialRootStore } from "./models"
import { AppNavigator } from "./navigators"
import { ErrorBoundary } from "./screens/ErrorScreen/ErrorBoundary"
import { setupReactotron } from "./devtools/ReactotronConfig"
import { localDb } from "./services/firebase/firestoreService"
import { requestNotificationPermissions } from "./services/notifications/notificationService"
import { OnboardingScreen } from "./screens/onboarding"
import { AffirmationScreen } from "./screens/ai-affirmation"
import { useStores } from "./models"
import { format } from "date-fns"

if (__DEV__) setupReactotron()

// ─── Inner app (has store access) ────────────────────────────────────────────

function InnerApp() {
  const { user, habitStore } = useStores()
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [showAffirmation, setShowAffirmation] = useState(false)
  const [appReady, setAppReady] = useState(false)

  useEffect(() => {
    initApp()
  }, [])

  const initApp = async () => {
    // Check onboarding
    const onboardingDone = await localDb.isOnboardingComplete()
    if (!onboardingDone) {
      setShowOnboarding(true)
      setAppReady(true)
      return
    }

    // Restore persisted habits
    const savedHabits = await localDb.loadHabits()
    if (savedHabits && savedHabits.length > 0) {
      // Rehydrate habits into store (MobX MST handles this via applySnapshot)
    }

    // Check if we should show the morning affirmation
    const today = format(new Date(), "yyyy-MM-dd")
    const lastAffirmationDate = await localDb.loadUser().then((u: any) => u?.lastAffirmationDate)
    if (lastAffirmationDate !== today) {
      const hour = new Date().getHours()
      if (hour >= 5 && hour < 12) {
        setShowAffirmation(true)
      }
    }

    // Request notification permissions (non-blocking)
    requestNotificationPermissions().catch(console.warn)

    setAppReady(true)
  }

  const handleOnboardingComplete = async (name: string, habits: string[]) => {
    // Set user name
    user.setProfile(name)
    user.completeOnboarding()

    // Seed habits from picker
    habitStore.seedFromOnboarding(habits)

    // Persist
    await localDb.setOnboardingComplete()
    await localDb.saveUser({ displayName: name, hasCompletedOnboarding: true })

    setShowOnboarding(false)

    // Show affirmation after onboarding
    setShowAffirmation(true)
  }

  const handleAffirmationDismiss = async () => {
    const today = format(new Date(), "yyyy-MM-dd")
    const saved = (await localDb.loadUser()) as any ?? {}
    await localDb.saveUser({ ...saved, lastAffirmationDate: today })
    setShowAffirmation(false)
  }

  if (!appReady) return null

  if (showOnboarding) {
    return <OnboardingScreen onComplete={handleOnboardingComplete} />
  }

  if (showAffirmation) {
    return (
      <AffirmationScreen
        userName={user.firstName || "Champion"}
        streak={habitStore.overallCurrentStreak}
        onDismiss={handleAffirmationDismiss}
      />
    )
  }

  return <AppNavigator initialState={undefined} onStateChange={undefined} />
}

// ─── Root App ─────────────────────────────────────────────────────────────────

function App() {
  const { rehydrated } = useInitialRootStore(() => {
    // Store loaded from storage — any post-rehydration setup here
  })

  const [fontsLoaded] = useFonts({
    SpaceGrotesk: require("../assets/fonts/SpaceGroteskVariable.ttf"),
  })

  if (!rehydrated || !fontsLoaded) return null

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ErrorBoundary catchErrors="always">
        <InnerApp />
      </ErrorBoundary>
    </SafeAreaProvider>
  )
}

export default App
