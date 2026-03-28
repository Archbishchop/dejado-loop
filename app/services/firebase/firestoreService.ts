/**
 * DejaDo Loop — Firestore Service
 *
 * Handles all Firestore read/write operations.
 * v1: Uses AsyncStorage (offline). v2: Replace with Firestore calls below.
 *
 * ARCHITECTURE:
 *   users/{uid}/
 *     profile (doc)
 *     habits/{habitId} (collection)
 *       completions/{date} (collection)
 *
 * To enable cloud sync (v2):
 * 1. Install firebase: npx expo install firebase
 * 2. Uncomment the imports and live functions below
 * 3. Set your FIREBASE_CONFIG values in firebaseConfig.ts
 */

import AsyncStorage from "@react-native-async-storage/async-storage"
import { HabitSnapshotIn } from "app/models/HabitModel"

const STORAGE_KEYS = {
  HABITS: "@dejado_habits",
  USER: "@dejado_user",
  ONBOARDING_DONE: "@dejado_onboarding",
}

// ─── v1: AsyncStorage (local persistence) ────────────────────────────────────

export const localDb = {
  async saveHabits(habits: HabitSnapshotIn[]) {
    await AsyncStorage.setItem(STORAGE_KEYS.HABITS, JSON.stringify(habits))
  },

  async loadHabits(): Promise<HabitSnapshotIn[] | null> {
    const raw = await AsyncStorage.getItem(STORAGE_KEYS.HABITS)
    return raw ? JSON.parse(raw) : null
  },

  async saveUser(user: object) {
    await AsyncStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user))
  },

  async loadUser(): Promise<object | null> {
    const raw = await AsyncStorage.getItem(STORAGE_KEYS.USER)
    return raw ? JSON.parse(raw) : null
  },

  async setOnboardingComplete() {
    await AsyncStorage.setItem(STORAGE_KEYS.ONBOARDING_DONE, "true")
  },

  async isOnboardingComplete(): Promise<boolean> {
    const val = await AsyncStorage.getItem(STORAGE_KEYS.ONBOARDING_DONE)
    return val === "true"
  },

  async clearAll() {
    await AsyncStorage.multiRemove(Object.values(STORAGE_KEYS))
  },
}

// ─── v2: Firestore (cloud sync) ──────────────────────────────────────────────
// Firebase is configured. Install the SDK then uncomment:
//   npx expo install firebase

// import { initializeApp, getApps } from "firebase/app"
// import {
//   getFirestore,
//   doc,
//   collection,
//   setDoc,
//   getDocs,
//   deleteDoc,
//   onSnapshot,
//   serverTimestamp,
// } from "firebase/firestore"
// import { FIREBASE_CONFIG, COLLECTIONS } from "./firebaseConfig"
//
// if (!getApps().length) initializeApp(FIREBASE_CONFIG)
// const db = getFirestore()
//
// export const cloudDb = {
//   async saveHabit(uid: string, habit: HabitSnapshotIn) {
//     const ref = doc(db, COLLECTIONS.USERS, uid, COLLECTIONS.HABITS, habit.id)
//     await setDoc(ref, { ...habit, updatedAt: serverTimestamp() }, { merge: true })
//   },
//
//   async loadHabits(uid: string): Promise<HabitSnapshotIn[]> {
//     const snap = await getDocs(
//       collection(db, COLLECTIONS.USERS, uid, COLLECTIONS.HABITS)
//     )
//     return snap.docs.map((d) => d.data() as HabitSnapshotIn)
//   },
//
//   async deleteHabit(uid: string, habitId: string) {
//     await deleteDoc(
//       doc(db, COLLECTIONS.USERS, uid, COLLECTIONS.HABITS, habitId)
//     )
//   },
//
//   subscribeToHabits(uid: string, callback: (habits: HabitSnapshotIn[]) => void) {
//     return onSnapshot(
//       collection(db, COLLECTIONS.USERS, uid, COLLECTIONS.HABITS),
//       (snap) => callback(snap.docs.map((d) => d.data() as HabitSnapshotIn))
//     )
//   },
// }
