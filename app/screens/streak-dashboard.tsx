/**
 * DejaDo Loop — Streak Dashboard Screen
 * Shows overall stats: current streak, longest streak, completion rate,
 * weekly heatmap, and per-habit breakdowns.
 */

import React, { FC } from "react"
import {
  View,
  ViewStyle,
  TextStyle,
  ScrollView,
} from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing } from "app/theme"
import { Text, Screen } from "app/components"

// ─── Mock data (replace with MobX store in v2) ───────────────────────────────

const mockStats = {
  currentStreak: 14,
  longestStreak: 21,
  totalCompleted: 112,
  completionRate: 78, // percent
  weeklyData: [1, 1, 0, 1, 1, 1, 0], // Mon-Sun: 1=done, 0=missed
  habits: [
    { emoji: "💧", name: "Drink Water", streak: 14, rate: 95 },
    { emoji: "🏃", name: "Exercise", streak: 7, rate: 72 },
    { emoji: "📖", name: "Read", streak: 3, rate: 55 },
    { emoji: "🧘", name: "Meditate", streak: 14, rate: 88 },
  ],
}

const DAYS_ABBR = ["M", "T", "W", "T", "F", "S", "S"]

// ─── Sub-components ──────────────────────────────────────────────────────────

const StatCard = ({ value, label, color }: { value: string; label: string; color?: string }) => (
  <View style={$statCard}>
    <Text text={value} style={[$statValue, color ? { color } : {}]} />
    <Text text={label} style={$statLabel} />
  </View>
)

const WeekRow = ({ data }: { data: number[] }) => (
  <View style={$weekRow}>
    {data.map((done, i) => (
      <View key={i} style={$weekDayCol}>
        <View style={[$weekDot, done ? $weekDotDone : $weekDotMissed]} />
        <Text text={DAYS_ABBR[i]} style={$weekDayLabel} />
      </View>
    ))}
  </View>
)

const HabitRow = ({
  emoji,
  name,
  streak,
  rate,
}: {
  emoji: string
  name: string
  streak: number
  rate: number
}) => (
  <View style={$habitRow}>
    <View style={$habitLeft}>
      <View style={$habitEmojiBadge}>
        <Text text={emoji} style={$habitEmojiText} />
      </View>
      <View>
        <Text text={name} style={$habitName} />
        <Text text={`🔥 ${streak}-day streak`} style={$habitStreak} />
      </View>
    </View>
    <View style={$habitRight}>
      <View style={$rateBarBg}>
        <View style={[$rateBarFill, { width: `${rate}%` as any }]} />
      </View>
      <Text text={`${rate}%`} style={$rateText} />
    </View>
  </View>
)

// ─── Main Screen ─────────────────────────────────────────────────────────────

interface DashboardScreenProps {}

export const StreakDashboardScreen: FC<DashboardScreenProps> = observer(function StreakDashboard() {
  const { currentStreak, longestStreak, completionRate, totalCompleted, weeklyData, habits } =
    mockStats

  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      {/* Header */}
      <Text text="Your Loop Stats" preset="heading" style={$heading} />
      <Text text="Keep the momentum going 🔥" style={$subheading} />

      {/* Streak Banner */}
      <View style={$streakBanner}>
        <Text text="🔥" style={$streakFire} />
        <View>
          <Text text={`${currentStreak} Days`} style={$streakNumber} />
          <Text text="Current Streak" style={$streakSub} />
        </View>
      </View>

      {/* Stats Row */}
      <View style={$statsRow}>
        <StatCard value={`${longestStreak}d`} label="Longest" color={colors.tint} />
        <StatCard value={`${completionRate}%`} label="Completion" color={colors.streak} />
        <StatCard value={`${totalCompleted}`} label="Total Done" />
      </View>

      {/* Weekly Heatmap */}
      <View style={$section}>
        <Text text="This Week" style={$sectionTitle} />
        <WeekRow data={weeklyData} />
      </View>

      {/* Habit Breakdown */}
      <View style={$section}>
        <Text text="By Habit" style={$sectionTitle} />
        {habits.map((h) => (
          <HabitRow key={h.name} {...h} />
        ))}
      </View>
    </Screen>
  )
})

// ─── Styles ──────────────────────────────────────────────────────────────────

const $container: ViewStyle = {
  paddingHorizontal: spacing.lg,
  paddingBottom: spacing.xxl,
  gap: spacing.lg,
  backgroundColor: colors.background,
}

const $heading: TextStyle = {
  color: colors.text,
  marginTop: spacing.lg,
}

const $subheading: TextStyle = {
  color: colors.textDim,
  marginTop: -spacing.md,
}

const $streakBanner: ViewStyle = {
  backgroundColor: colors.backgroundDark,
  borderRadius: 20,
  padding: spacing.lg,
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.lg,
}

const $streakFire: TextStyle = {
  fontSize: 52,
}

const $streakNumber: TextStyle = {
  color: colors.streak,
  fontSize: 36,
  fontWeight: "800",
}

const $streakSub: TextStyle = {
  color: colors.palette.neutral400,
  fontSize: 13,
}

const $statsRow: ViewStyle = {
  flexDirection: "row",
  gap: spacing.sm,
}

const $statCard: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.neutral100,
  borderRadius: 16,
  padding: spacing.md,
  alignItems: "center",
  gap: 4,
}

const $statValue: TextStyle = {
  fontSize: 22,
  fontWeight: "800",
  color: colors.text,
}

const $statLabel: TextStyle = {
  fontSize: 11,
  color: colors.textDim,
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: 0.5,
}

const $section: ViewStyle = {
  gap: spacing.sm,
}

const $sectionTitle: TextStyle = {
  fontSize: 14,
  fontWeight: "700",
  color: colors.textDim,
  textTransform: "uppercase",
  letterSpacing: 0.8,
}

const $weekRow: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: colors.palette.neutral100,
  borderRadius: 16,
  padding: spacing.md,
}

const $weekDayCol: ViewStyle = {
  alignItems: "center",
  gap: 6,
}

const $weekDot: ViewStyle = {
  width: 28,
  height: 28,
  borderRadius: 14,
}

const $weekDotDone: ViewStyle = {
  backgroundColor: colors.tint,
}

const $weekDotMissed: ViewStyle = {
  backgroundColor: colors.palette.neutral300,
}

const $weekDayLabel: TextStyle = {
  fontSize: 11,
  color: colors.textDim,
  fontWeight: "600",
}

const $habitRow: ViewStyle = {
  backgroundColor: colors.palette.neutral100,
  borderRadius: 16,
  padding: spacing.md,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
}

const $habitLeft: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.sm,
}

const $habitEmojiBadge: ViewStyle = {
  width: 44,
  height: 44,
  borderRadius: 22,
  backgroundColor: colors.palette.neutral200,
  alignItems: "center",
  justifyContent: "center",
}

const $habitEmojiText: TextStyle = {
  fontSize: 22,
}

const $habitName: TextStyle = {
  fontSize: 14,
  fontWeight: "700",
  color: colors.text,
}

const $habitStreak: TextStyle = {
  fontSize: 12,
  color: colors.streak,
}

const $habitRight: ViewStyle = {
  alignItems: "flex-end",
  gap: 4,
  minWidth: 80,
}

const $rateBarBg: ViewStyle = {
  width: 80,
  height: 6,
  backgroundColor: colors.palette.neutral300,
  borderRadius: 3,
  overflow: "hidden",
}

const $rateBarFill: ViewStyle = {
  height: "100%",
  backgroundColor: colors.tint,
  borderRadius: 3,
}

const $rateText: TextStyle = {
  fontSize: 11,
  color: colors.textDim,
  fontWeight: "600",
}
