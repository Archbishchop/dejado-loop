/**
 * DejaDo Loop — Push Notification Service
 *
 * Handles:
 *   1. Daily habit reminders (per-habit, at user-set time)
 *   2. Streak saver nudges (if a habit isn't done by 8pm)
 *   3. Morning affirmation delivery
 *
 * SETUP:
 *   npx expo install expo-notifications
 *   Add to app.json plugins: ["expo-notifications"]
 */

import * as Notifications from "expo-notifications"
import { Platform } from "react-native"
import { format, parse, addDays } from "date-fns"

// Configure foreground behavior
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
})

// ─── Permission request ───────────────────────────────────────────────────────

export async function requestNotificationPermissions(): Promise<boolean> {
  const { status: existingStatus } = await Notifications.getPermissionsAsync()
  let finalStatus = existingStatus

  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync()
    finalStatus = status
  }

  if (finalStatus !== "granted") {
    console.log("[Notifications] Permission denied")
    return false
  }

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("habit-reminders", {
      name: "Habit Reminders",
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#00B4A6",
    })
    await Notifications.setNotificationChannelAsync("streak-saver", {
      name: "Streak Saver",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 500, 250, 500],
      lightColor: "#F5C518",
    })
    await Notifications.setNotificationChannelAsync("affirmations", {
      name: "Daily Affirmations",
      importance: Notifications.AndroidImportance.DEFAULT,
      lightColor: "#5C6DD8",
    })
  }

  return true
}

// ─── Schedule a daily habit reminder ─────────────────────────────────────────

export async function scheduleHabitReminder(habit: {
  id: string
  name: string
  emoji: string
  reminderTime: string // "HH:mm"
}): Promise<string | null> {
  try {
    const [hours, minutes] = habit.reminderTime.split(":").map(Number)

    const identifier = await Notifications.scheduleNotificationAsync({
      content: {
        title: `${habit.emoji} Time for ${habit.name}!`,
        body: "Tap to check in and keep your streak alive 🔥",
        data: { habitId: habit.id, type: "reminder" },
        categoryIdentifier: "habit-reminders",
      },
      trigger: {
        hour: hours,
        minute: minutes,
        repeats: true,
      } as any,
    })

    return identifier
  } catch (e) {
    console.error("[Notifications] scheduleHabitReminder failed", e)
    return null
  }
}

// ─── Schedule streak saver (8pm nudge if not done) ───────────────────────────

export async function scheduleStreakSaver(habit: {
  id: string
  name: string
  emoji: string
  streak: number
}): Promise<string | null> {
  try {
    // Fire at 8pm daily — the app should cancel this if the habit was completed
    const identifier = await Notifications.scheduleNotificationAsync({
      content: {
        title: `⚡ Don't break your ${habit.streak}-day streak!`,
        body: `${habit.emoji} ${habit.name} — you still have time today.`,
        data: { habitId: habit.id, type: "streak-saver" },
        categoryIdentifier: "streak-saver",
      },
      trigger: {
        hour: 20,
        minute: 0,
        repeats: true,
      } as any,
    })

    return identifier
  } catch (e) {
    console.error("[Notifications] scheduleStreakSaver failed", e)
    return null
  }
}

// ─── Schedule morning affirmation ─────────────────────────────────────────────

export async function scheduleMorningAffirmation(hour = 8, minute = 0): Promise<string | null> {
  try {
    const identifier = await Notifications.scheduleNotificationAsync({
      content: {
        title: "✨ Your daily affirmation is ready",
        body: "Open DejaDo Loop to see today's message 🔁",
        data: { type: "affirmation" },
        categoryIdentifier: "affirmations",
      },
      trigger: {
        hour,
        minute,
        repeats: true,
      } as any,
    })

    return identifier
  } catch (e) {
    console.error("[Notifications] scheduleMorningAffirmation failed", e)
    return null
  }
}

// ─── Cancel a specific notification ──────────────────────────────────────────

export async function cancelNotification(identifier: string) {
  await Notifications.cancelScheduledNotificationAsync(identifier)
}

// ─── Cancel all DejaDo notifications ─────────────────────────────────────────

export async function cancelAllNotifications() {
  await Notifications.cancelAllScheduledNotificationsAsync()
}

// ─── Get push token (for server-side sends in v2) ────────────────────────────

export async function getExpoPushToken(): Promise<string | null> {
  try {
    const token = await Notifications.getExpoPushTokenAsync()
    return token.data
  } catch (e) {
    console.error("[Notifications] getExpoPushToken failed", e)
    return null
  }
}
