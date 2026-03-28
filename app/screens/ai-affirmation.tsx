/**
 * DejaDo Loop — AI Daily Affirmation Screen
 * Shown each morning. Calls a serverless function (Firebase/OpenAI) to
 * generate a personalized affirmation based on the user's streak + habits.
 *
 * For v1 (offline/no API key): uses a curated local pool of affirmations.
 * For v2 (API connected): calls the /affirmation cloud function.
 */

import React, { FC, useEffect, useState } from "react"
import {
  View,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  ActivityIndicator,
  Animated,
} from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing } from "app/theme"
import { Text } from "app/components"

// ─── Offline affirmation pool (v1) ─────────────────────────────────────────

const AFFIRMATIONS = [
  "Every rep, every check, every day — you're building the person you want to become.",
  "Small actions today, massive results tomorrow. Your loop is working.",
  "Streaks don't care about motivation. They care about showing up. And you did.",
  "You're not trying to be perfect. You're trying to be consistent. Big difference.",
  "Progress lives in the mundane. Every check-in is a vote for your future self.",
  "Other people are still thinking about starting. You already did.",
  "The version of you from 30 days ago would be proud of where you are today.",
  "Discipline isn't punishment — it's you investing in your own freedom.",
  "Today is another link in your chain. Make it strong.",
  "You don't need a perfect day. You need a consistent one.",
]

const getRandomAffirmation = (streak: number): string => {
  // Seed selection slightly by streak so it feels personalized
  const idx = (streak + new Date().getDate()) % AFFIRMATIONS.length
  return AFFIRMATIONS[idx]
}

// ─── Component ──────────────────────────────────────────────────────────────

interface AffirmationScreenProps {
  userName?: string
  streak?: number
  onDismiss: () => void
}

export const AffirmationScreen: FC<AffirmationScreenProps> = observer(
  ({ userName = "Champion", streak = 0, onDismiss }) => {
    const [affirmation, setAffirmation] = useState("")
    const [loading, setLoading] = useState(true)
    const fadeAnim = React.useRef(new Animated.Value(0)).current

    useEffect(() => {
      // Simulate async fetch (swap with real API call in v2)
      const timer = setTimeout(() => {
        const text = getRandomAffirmation(streak)
        setAffirmation(text)
        setLoading(false)
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }).start()
      }, 800)
      return () => clearTimeout(timer)
    }, [])

    const greeting = getGreeting()
    const streakLabel = streak > 0 ? `🔥 ${streak}-day streak` : "Day 1 — start your streak!"

    return (
      <View style={$container}>
        <View style={$card}>
          <Text text={`${greeting},`} style={$greeting} />
          <Text text={userName} style={$name} />
          <Text text={streakLabel} style={$streakLabel} />

          <View style={$divider} />

          {loading ? (
            <ActivityIndicator color={colors.tint} size="large" style={{ marginVertical: 40 }} />
          ) : (
            <Animated.View style={{ opacity: fadeAnim }}>
              <Text text="✨ Today's Affirmation" style={$affirmationLabel} />
              <Text text={`"${affirmation}"`} style={$affirmationText} />
            </Animated.View>
          )}

          <View style={$divider} />

          <TouchableOpacity style={$ctaBtn} onPress={onDismiss}>
            <Text text="Let's Do This 💪" style={$ctaBtnText} />
          </TouchableOpacity>

          <TouchableOpacity onPress={onDismiss} style={$skipBtn}>
            <Text text="Skip for now" style={$skipText} />
          </TouchableOpacity>
        </View>
      </View>
    )
  },
)

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return "Good morning"
  if (hour < 17) return "Good afternoon"
  return "Good evening"
}

// ─── Styles ─────────────────────────────────────────────────────────────────

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.backgroundDark,
  alignItems: "center",
  justifyContent: "center",
  padding: spacing.lg,
}

const $card: ViewStyle = {
  backgroundColor: colors.palette.neutral700,
  borderRadius: 24,
  padding: spacing.xl,
  width: "100%",
  alignItems: "center",
  gap: spacing.md,
}

const $greeting: TextStyle = {
  color: colors.palette.neutral400,
  fontSize: 16,
  marginBottom: -8,
}

const $name: TextStyle = {
  color: colors.textLight,
  fontSize: 28,
  fontWeight: "800",
}

const $streakLabel: TextStyle = {
  color: colors.streak,
  fontSize: 14,
  fontWeight: "700",
  letterSpacing: 0.5,
}

const $divider: ViewStyle = {
  height: 1,
  backgroundColor: colors.palette.neutral600,
  width: "100%",
  marginVertical: spacing.xs,
}

const $affirmationLabel: TextStyle = {
  color: colors.tint,
  fontSize: 11,
  fontWeight: "700",
  letterSpacing: 1.2,
  textTransform: "uppercase",
  textAlign: "center",
  marginBottom: spacing.sm,
}

const $affirmationText: TextStyle = {
  color: colors.textLight,
  fontSize: 17,
  lineHeight: 26,
  textAlign: "center",
  fontStyle: "italic",
  fontWeight: "500",
}

const $ctaBtn: ViewStyle = {
  backgroundColor: colors.tint,
  paddingVertical: spacing.md,
  paddingHorizontal: spacing.xxl,
  borderRadius: 99,
  marginTop: spacing.sm,
}

const $ctaBtnText: TextStyle = {
  color: colors.textLight,
  fontWeight: "700",
  fontSize: 16,
}

const $skipBtn: ViewStyle = {
  paddingVertical: spacing.sm,
}

const $skipText: TextStyle = {
  color: colors.palette.neutral500,
  fontSize: 13,
}
