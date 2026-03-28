/**
 * DejaDo Loop — Onboarding Screen
 * Shown on first launch. Three swipeable slides → name → first habit pick.
 */

import React, { FC, useRef, useState } from "react"
import {
  View,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
} from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing } from "app/theme"
import { Text } from "app/components"

const { width } = Dimensions.get("window")

const slides = [
  {
    emoji: "🔁",
    title: "Build Loops That Stick",
    body: "DejaDo Loop helps you lock in daily habits with streaks, reminders, and AI-powered nudges so you never break the chain.",
  },
  {
    emoji: "🔥",
    title: "Streaks Motivate",
    body: "Every day you complete your habits, your streak grows. Miss a day and get a smart recovery nudge — not guilt.",
  },
  {
    emoji: "🤖",
    title: "Your AI Habit Coach",
    body: "Get a personalized daily affirmation and check-in message every morning. We celebrate your wins, big and small.",
  },
]

const starterHabits = [
  { emoji: "💧", label: "Drink Water" },
  { emoji: "🏃", label: "Exercise" },
  { emoji: "📖", label: "Read" },
  { emoji: "🧘", label: "Meditate" },
  { emoji: "😴", label: "Sleep 8hrs" },
  { emoji: "🥗", label: "Eat Healthy" },
]

interface OnboardingScreenProps {
  onComplete: (name: string, habits: string[]) => void
}

export const OnboardingScreen: FC<OnboardingScreenProps> = observer(({ onComplete }) => {
  const scrollRef = useRef<ScrollView>(null)
  const [step, setStep] = useState(0) // 0-2 = slides, 3 = name, 4 = habit picker
  const [userName, setUserName] = useState("")
  const [selectedHabits, setSelectedHabits] = useState<string[]>([])

  const goNext = () => {
    if (step < 2) {
      const nextStep = step + 1
      setStep(nextStep)
      scrollRef.current?.scrollTo({ x: nextStep * width, animated: true })
    } else if (step === 2) {
      setStep(3)
    }
  }

  const toggleHabit = (label: string) => {
    setSelectedHabits((prev) =>
      prev.includes(label) ? prev.filter((h) => h !== label) : [...prev, label],
    )
  }

  const handleFinish = () => {
    if (userName.trim() && selectedHabits.length > 0) {
      onComplete(userName.trim(), selectedHabits)
    }
  }

  // Name entry step
  if (step === 3) {
    return (
      <View style={$fullScreen}>
        <View style={$centerContent}>
          <Text text="👋" style={$bigEmoji} />
          <Text text="What should we call you?" preset="heading" style={$slideTitle} />
          <Text
            text="We'll personalize your daily affirmations just for you."
            style={$slideBody}
          />
          <TextInput
            style={$nameInput}
            placeholder="Your first name"
            placeholderTextColor={colors.textDim}
            value={userName}
            onChangeText={setUserName}
            autoFocus
            autoCapitalize="words"
          />
          <TouchableOpacity
            style={[$nextBtn, !userName.trim() && $btnDisabled]}
            onPress={() => setStep(4)}
            disabled={!userName.trim()}
          >
            <Text text="Continue →" style={$nextBtnText} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  // Habit picker step
  if (step === 4) {
    return (
      <View style={$fullScreen}>
        <View style={$centerContent}>
          <Text text={`Pick your first habits, ${userName} 🎯`} preset="heading" style={$slideTitle} />
          <Text text="Start with 1–3. You can always add more later." style={$slideBody} />
          <View style={$habitGrid}>
            {starterHabits.map((h) => {
              const selected = selectedHabits.includes(h.label)
              return (
                <TouchableOpacity
                  key={h.label}
                  style={[$habitChip, selected && $habitChipSelected]}
                  onPress={() => toggleHabit(h.label)}
                >
                  <Text text={h.emoji} style={$habitEmoji} />
                  <Text
                    text={h.label}
                    style={[$habitChipText, selected && $habitChipTextSelected]}
                  />
                </TouchableOpacity>
              )
            })}
          </View>
          <TouchableOpacity
            style={[$nextBtn, selectedHabits.length === 0 && $btnDisabled]}
            onPress={handleFinish}
            disabled={selectedHabits.length === 0}
          >
            <Text text="Start My Loop 🔁" style={$nextBtnText} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  // Slides 0–2
  return (
    <View style={$fullScreen}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
      >
        {slides.map((slide, i) => (
          <View key={i} style={[$slide, { width }]}>
            <Text text={slide.emoji} style={$bigEmoji} />
            <Text text={slide.title} preset="heading" style={$slideTitle} />
            <Text text={slide.body} style={$slideBody} />
          </View>
        ))}
      </ScrollView>

      {/* Dots */}
      <View style={$dotsContainer}>
        {slides.map((_, i) => (
          <View key={i} style={[$dot, step === i && $dotActive]} />
        ))}
      </View>

      <TouchableOpacity style={$nextBtn} onPress={goNext}>
        <Text text={step === 2 ? "Let's Go 🚀" : "Next →"} style={$nextBtnText} />
      </TouchableOpacity>
    </View>
  )
})

// ─── Styles ────────────────────────────────────────────────────────────────

const $fullScreen: ViewStyle = {
  flex: 1,
  backgroundColor: colors.backgroundDark,
  alignItems: "center",
  justifyContent: "flex-end",
  paddingBottom: spacing.xxl,
}

const $centerContent: ViewStyle = {
  flex: 1,
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: spacing.xl,
}

const $slide: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: spacing.xl,
  paddingBottom: 120,
}

const $bigEmoji: TextStyle = {
  fontSize: 72,
  marginBottom: spacing.lg,
}

const $slideTitle: TextStyle = {
  color: colors.textLight,
  textAlign: "center",
  marginBottom: spacing.md,
  fontSize: 26,
}

const $slideBody: TextStyle = {
  color: colors.palette.neutral400,
  textAlign: "center",
  lineHeight: 24,
  fontSize: 15,
}

const $dotsContainer: ViewStyle = {
  flexDirection: "row",
  gap: 8,
  marginBottom: spacing.xl,
}

const $dot: ViewStyle = {
  width: 8,
  height: 8,
  borderRadius: 4,
  backgroundColor: colors.palette.neutral600,
}

const $dotActive: ViewStyle = {
  backgroundColor: colors.tint,
  width: 24,
}

const $nextBtn: ViewStyle = {
  backgroundColor: colors.tint,
  paddingVertical: spacing.md,
  paddingHorizontal: spacing.xxl,
  borderRadius: 99,
  alignItems: "center",
}

const $btnDisabled: ViewStyle = {
  opacity: 0.4,
}

const $nextBtnText: TextStyle = {
  color: colors.textLight,
  fontWeight: "700",
  fontSize: 16,
}

const $nameInput: TextStyle = {
  backgroundColor: colors.palette.neutral700,
  color: colors.textLight,
  borderRadius: spacing.sm,
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.sm,
  fontSize: 18,
  width: "100%",
  marginVertical: spacing.lg,
}

const $habitGrid: ViewStyle = {
  flexDirection: "row",
  flexWrap: "wrap",
  gap: 12,
  justifyContent: "center",
  marginVertical: spacing.lg,
}

const $habitChip: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: 8,
  backgroundColor: colors.palette.neutral700,
  paddingVertical: spacing.sm,
  paddingHorizontal: spacing.md,
  borderRadius: 99,
  borderWidth: 1.5,
  borderColor: "transparent",
}

const $habitChipSelected: ViewStyle = {
  borderColor: colors.tint,
  backgroundColor: colors.palette.primary600,
}

const $habitEmoji: TextStyle = {
  fontSize: 18,
}

const $habitChipText: TextStyle = {
  color: colors.palette.neutral400,
  fontSize: 14,
  fontWeight: "600",
}

const $habitChipTextSelected: TextStyle = {
  color: colors.textLight,
}
