/**
 * DejaDo Loop — Firebase Configuration
 *
 * SETUP INSTRUCTIONS:
 * 1. Go to https://console.firebase.google.com
 * 2. Create project "dejado-loop"
 * 3. Add Android app (com.dejadoloop) and iOS app (com.dejadoloop)
 * 4. Copy your firebaseConfig object from Project Settings → General
 * 5. Replace the placeholder values below with your real config
 * 6. Enable: Authentication (Email/Password + Google), Firestore, Analytics
 *
 * Install required packages:
 *   npx expo install firebase @react-native-firebase/app @react-native-firebase/auth
 *   npx expo install @react-native-firebase/firestore
 */

// ─── Paste your Firebase config here ─────────────────────────────────────────
export const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "dejado-loop.firebaseapp.com",
  projectId: "dejado-loop",
  storageBucket: "dejado-loop.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID",
}

// ─── Firestore collection names ───────────────────────────────────────────────
export const COLLECTIONS = {
  USERS: "users",
  HABITS: "habits",       // users/{uid}/habits/{habitId}
  COMPLETIONS: "completions", // users/{uid}/habits/{habitId}/completions/{date}
  AFFIRMATIONS: "affirmations", // cached AI affirmations
} as const
