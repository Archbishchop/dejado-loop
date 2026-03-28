/**
 * DejaDo Loop — Auth Service
 *
 * Wraps Firebase Authentication.
 * v1: No auth (local-only). v2: Enable Firebase Auth below.
 *
 * SETUP:
 * 1. Enable Email/Password auth in Firebase Console → Authentication
 * 2. Optionally enable Google Sign-In
 * 3. Install: npx expo install firebase
 * 4. Uncomment the v2 section below
 */

// ─── v1: Anonymous/local mode ─────────────────────────────────────────────────

export const authService = {
  /**
   * Returns a local user ID (device-based, no real auth).
   * Replace with Firebase UID in v2.
   */
  async getLocalUserId(): Promise<string> {
    const { default: AsyncStorage } = await import(
      "@react-native-async-storage/async-storage"
    )
    let uid = await AsyncStorage.getItem("@dejado_uid")
    if (!uid) {
      uid = `local_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
      await AsyncStorage.setItem("@dejado_uid", uid)
    }
    return uid
  },

  isAuthenticated: false,
  currentUser: null as null | { uid: string; email: string; displayName: string },
}

// ─── v2: Firebase Auth — uncomment when ready ────────────────────────────────
//
// import { initializeApp, getApps } from "firebase/app"
// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
//   GoogleAuthProvider,
//   signInWithPopup,
//   User,
// } from "firebase/auth"
// import { FIREBASE_CONFIG } from "./firebaseConfig"
//
// if (!getApps().length) initializeApp(FIREBASE_CONFIG)
// const auth = getAuth()
//
// export const firebaseAuth = {
//   signIn: (email: string, password: string) =>
//     signInWithEmailAndPassword(auth, email, password),
//
//   signUp: (email: string, password: string) =>
//     createUserWithEmailAndPassword(auth, email, password),
//
//   signOut: () => signOut(auth),
//
//   signInWithGoogle: () => signInWithPopup(auth, new GoogleAuthProvider()),
//
//   onAuthChange: (callback: (user: User | null) => void) =>
//     onAuthStateChanged(auth, callback),
//
//   get currentUser() {
//     return auth.currentUser
//   },
// }
