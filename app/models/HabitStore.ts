/**
 * DejaDo Loop — HabitStore
 * Central store for all habits. Handles CRUD, persistence, and aggregated stats.
 */

import { Instance, SnapshotIn, SnapshotOut, types, flow } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { HabitModel } from "./HabitModel"
import { format } from "date-fns"

// Unique ID generator
const generateId = () => `habit_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`

export const HabitStoreModel = types
  .model("HabitStore", {
    habits: types.optional(types.array(HabitModel), []),
    isLoading: types.optional(types.boolean, false),
    lastSyncedAt: types.optional(types.string, ""),
  })
  .actions(withSetPropAction)
  .actions((self) => ({
    // ── CRUD ──────────────────────────────────────────────────────────────────

    addHabit(snapshot: {
      name: string
      emoji?: string
      description?: string
      scheduleDays?: number[]
      reminderTime?: string
      reminderEnabled?: boolean
      color?: string
    }) {
      const newHabit = HabitModel.create({
        id: generateId(),
        name: snapshot.name,
        emoji: snapshot.emoji ?? "⭐",
        description: snapshot.description ?? "",
        scheduleDays: snapshot.scheduleDays ?? [0, 1, 2, 3, 4, 5, 6],
        reminderTime: snapshot.reminderTime ?? "",
        reminderEnabled: snapshot.reminderEnabled ?? false,
        color: snapshot.color ?? "#00B4A6",
        completions: [],
        createdAt: new Date().toISOString(),
        isArchived: false,
      })
      self.habits.push(newHabit)
      return newHabit
    },

    removeHabit(id: string) {
      const idx = self.habits.findIndex((h) => h.id === id)
      if (idx !== -1) self.habits.splice(idx, 1)
    },

    // Seed starter habits from onboarding selections
    seedFromOnboarding(
      habitLabels: string[],
      emojiMap: Record<string, string> = {},
    ) {
      const defaults: Record<string, { emoji: string; color: string }> = {
        "Drink Water": { emoji: "💧", color: "#3EC9BD" },
        Exercise: { emoji: "🏃", color: "#F5C518" },
        Read: { emoji: "📖", color: "#5C6DD8" },
        Meditate: { emoji: "🧘", color: "#2ECC71" },
        "Sleep 8hrs": { emoji: "😴", color: "#8A97E4" },
        "Eat Healthy": { emoji: "🥗", color: "#56C568" },
      }

      for (const label of habitLabels) {
        const meta = defaults[label] ?? { emoji: emojiMap[label] ?? "⭐", color: "#00B4A6" }
        this.addHabit({ name: label, emoji: meta.emoji, color: meta.color })
      }
    },
  }))
  .views((self) => ({
    // ── Filtered views ────────────────────────────────────────────────────────

    get activeHabits() {
      return self.habits.filter((h) => !h.isArchived)
    },

    get archivedHabits() {
      return self.habits.filter((h) => h.isArchived)
    },

    /**
     * Habits scheduled for today (by day of week).
     */
    get todayHabits() {
      const todayDow = new Date().getDay() // 0=Sun
      return self.habits.filter(
        (h) => !h.isArchived && h.scheduleDays.includes(todayDow),
      )
    },

    /**
     * How many today's habits are done.
     */
    get todayProgress(): { done: number; total: number; percent: number } {
      const todayDow = new Date().getDay()
      const todayHabits = self.habits.filter(
        (h) => !h.isArchived && h.scheduleDays.includes(todayDow),
      )
      const done = todayHabits.filter((h) => h.isCompletedToday).length
      const total = todayHabits.length
      return {
        done,
        total,
        percent: total === 0 ? 0 : Math.round((done / total) * 100),
      }
    },

    /**
     * Aggregate current streak across ALL habits (max streak).
     */
    get overallCurrentStreak(): number {
      if (self.habits.length === 0) return 0
      return Math.max(...self.habits.map((h) => h.currentStreak))
    },

    /**
     * Aggregate longest streak ever.
     */
    get overallLongestStreak(): number {
      if (self.habits.length === 0) return 0
      return Math.max(...self.habits.map((h) => h.longestStreak))
    },

    /**
     * Average 30-day completion rate across all active habits.
     */
    get averageCompletionRate(): number {
      const active = self.habits.filter((h) => !h.isArchived)
      if (active.length === 0) return 0
      const sum = active.reduce((acc, h) => acc + h.completionRate30d, 0)
      return Math.round(sum / active.length)
    },

    /**
     * Total completions ever logged.
     */
    get totalCompletions(): number {
      return self.habits.reduce((acc, h) => acc + h.completions.length, 0)
    },
  }))

export interface HabitStore extends Instance<typeof HabitStoreModel> {}
export interface HabitStoreSnapshotIn extends SnapshotIn<typeof HabitStoreModel> {}
export interface HabitStoreSnapshotOut extends SnapshotOut<typeof HabitStoreModel> {}
