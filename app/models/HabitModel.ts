/**
 * DejaDo Loop — HabitModel
 * A single habit with schedule, streak, and completion history.
 */

import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { format, isToday, isYesterday, differenceInCalendarDays } from "date-fns"

// ─── Completion Entry ─────────────────────────────────────────────────────────

export const CompletionModel = types.model("Completion", {
  date: types.string, // ISO date string "yyyy-MM-dd"
  completedAt: types.string, // ISO datetime
})

// ─── Habit Model ──────────────────────────────────────────────────────────────

export const HabitModel = types
  .model("Habit", {
    id: types.identifier,
    emoji: types.optional(types.string, "⭐"),
    name: types.string,
    description: types.optional(types.string, ""),
    // Schedule: which days of week (0=Sun, 1=Mon ... 6=Sat)
    scheduleDays: types.optional(types.array(types.number), [0, 1, 2, 3, 4, 5, 6]),
    reminderTime: types.optional(types.string, ""), // "HH:mm" e.g. "08:00"
    reminderEnabled: types.optional(types.boolean, false),
    completions: types.optional(types.array(CompletionModel), []),
    createdAt: types.optional(types.string, () => new Date().toISOString()),
    isArchived: types.optional(types.boolean, false),
    color: types.optional(types.string, "#00B4A6"), // teal default
  })
  .actions(withSetPropAction)
  .actions((self) => ({
    /**
     * Mark today as complete (idempotent).
     */
    markComplete() {
      const today = format(new Date(), "yyyy-MM-dd")
      const alreadyDone = self.completions.some((c) => c.date === today)
      if (!alreadyDone) {
        self.completions.push({
          date: today,
          completedAt: new Date().toISOString(),
        })
      }
    },

    /**
     * Unmark today's completion.
     */
    markIncomplete() {
      const today = format(new Date(), "yyyy-MM-dd")
      const idx = self.completions.findIndex((c) => c.date === today)
      if (idx !== -1) self.completions.splice(idx, 1)
    },

    archive() {
      self.isArchived = true
    },

    unarchive() {
      self.isArchived = false
    },
  }))
  .views((self) => ({
    /**
     * Was this habit completed today?
     */
    get isCompletedToday(): boolean {
      const today = format(new Date(), "yyyy-MM-dd")
      return self.completions.some((c) => c.date === today)
    },

    /**
     * Current streak — consecutive days completed (counting backwards from today).
     */
    get currentStreak(): number {
      if (self.completions.length === 0) return 0

      const sortedDates = self.completions
        .map((c) => c.date)
        .sort()
        .reverse()

      let streak = 0
      let checkDate = new Date()

      // Allow today or yesterday as starting point
      const mostRecent = sortedDates[0]
      const mostRecentDate = new Date(mostRecent)

      if (!isToday(mostRecentDate) && !isYesterday(mostRecentDate)) {
        return 0 // streak broken
      }

      if (isYesterday(mostRecentDate)) {
        checkDate = mostRecentDate
      }

      for (const dateStr of sortedDates) {
        const d = new Date(dateStr)
        const diff = differenceInCalendarDays(checkDate, d)
        if (diff === 0) {
          streak++
          checkDate = new Date(d)
          checkDate.setDate(checkDate.getDate() - 1)
        } else {
          break
        }
      }

      return streak
    },

    /**
     * Longest streak ever.
     */
    get longestStreak(): number {
      if (self.completions.length === 0) return 0

      const sortedDates = self.completions
        .map((c) => c.date)
        .sort()

      let longest = 1
      let current = 1

      for (let i = 1; i < sortedDates.length; i++) {
        const prev = new Date(sortedDates[i - 1])
        const curr = new Date(sortedDates[i])
        if (differenceInCalendarDays(curr, prev) === 1) {
          current++
          longest = Math.max(longest, current)
        } else {
          current = 1
        }
      }

      return longest
    },

    /**
     * Completion rate over last 30 days (%).
     */
    get completionRate30d(): number {
      const thirtyDaysAgo = new Date()
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

      const completionsInPeriod = self.completions.filter(
        (c) => new Date(c.date) >= thirtyDaysAgo,
      ).length

      return Math.round((completionsInPeriod / 30) * 100)
    },

    /**
     * Which days in the current week (Mon-Sun) were completed?
     * Returns array of 7 booleans.
     */
    get weeklyProgress(): boolean[] {
      const result: boolean[] = []
      const today = new Date()
      const dayOfWeek = today.getDay() // 0=Sun
      // Normalize to Mon-first
      const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek
      const monday = new Date(today)
      monday.setDate(today.getDate() + mondayOffset)

      for (let i = 0; i < 7; i++) {
        const d = new Date(monday)
        d.setDate(monday.getDate() + i)
        const dateStr = format(d, "yyyy-MM-dd")
        result.push(self.completions.some((c) => c.date === dateStr))
      }

      return result
    },
  }))

export interface Habit extends Instance<typeof HabitModel> {}
export interface HabitSnapshotIn extends SnapshotIn<typeof HabitModel> {}
export interface HabitSnapshotOut extends SnapshotOut<typeof HabitModel> {}
