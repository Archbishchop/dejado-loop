# 🔁 DejaDo Loop

> **Build habits that actually stick.**  
> DejaDo Loop is a premium habit-tracking app with streak-based motivation, daily AI affirmations, and a beautiful dashboard — built with React Native + Expo.

---

## 📱 App Overview

DejaDo Loop helps users build and maintain daily habits through:

- **Streaks** — visual chain-building that makes missing feel costly
- **AI Daily Affirmations** — personalized motivational messages each morning
- **Weekly Heatmap & Dashboard** — per-habit completion rates and streak history
- **Smart Recovery Nudges** — if you miss a day, we encourage you back (no guilt)
- **One-tap Check-ins** — frictionless daily completion flow

---

## 🧱 Tech Stack

| Layer | Tech |
|---|---|
| Framework | React Native + Expo (managed workflow) |
| Language | TypeScript |
| State | MobX State Tree |
| Navigation | React Navigation |
| Storage (v1) | AsyncStorage (local) |
| Storage (v2) | Firebase Firestore (cloud sync) |
| Auth (v2) | Firebase Auth |
| Payments | RevenueCat |
| AI Affirmations (v2) | OpenAI GPT-4o via Firebase Cloud Functions |
| Analytics | Firebase Analytics + Crashlytics |

---

## 🗺️ Screens

| Screen | Purpose |
|---|---|
| `onboarding.tsx` | 3-slide intro → name → habit picker |
| `home.tsx` | Daily check-in hub with week view |
| `streak-dashboard.tsx` | Stats, heatmap, per-habit breakdown |
| `ai-affirmation.tsx` | Morning affirmation modal |
| `create-habit.tsx` | Add new habit with emoji + schedule |
| `edit-habit.tsx` | Edit existing habit |
| `settings.tsx` | Notifications, theme, account |

---

## 💰 Monetization Plan

**v1 — One-time purchase: $0.99**
- Unlimited habits
- Full streak tracking
- Offline AI affirmations (curated pool)

**v2 — DejaDo Pro: $2.99/month or $14.99/year**
- Live AI affirmations (GPT-4o personalized)
- Cloud sync across devices
- Home screen widgets
- Advanced analytics (30/60/90-day views)
- Custom themes

---

## 🚀 Getting Started

```bash
# Install dependencies
yarn install

# Start dev server
npx expo start

# Run on Android
npx expo run:android

# Run on iOS
npx expo run:ios
```

---

## 📦 Deployment

- **Android**: Google Play Store via EAS Build
- **iOS**: Apple App Store via EAS Build + TestFlight

```bash
# Build for production
eas build --platform android --profile production
eas build --platform ios --profile production
```

---

## 🧠 AI Affirmations — v2 Architecture

1. User opens app each morning
2. App sends `{ userName, streak, habits[] }` to Firebase Cloud Function
3. Function calls OpenAI GPT-4o with personalized prompt
4. Affirmation streamed back and displayed with fade-in animation
5. Fallback to local pool if offline or API unavailable

---

## 📋 Roadmap

- [x] Brand & color system
- [x] Onboarding flow (slides → name → habit picker)
- [x] AI affirmation screen
- [x] Streak dashboard
- [ ] Firebase Auth integration
- [ ] Firestore data sync
- [ ] RevenueCat paywall
- [ ] Push notifications (streak reminders)
- [ ] Home screen widgets
- [ ] App Store / Google Play submission

---

## 📄 License

MIT — forked from [takanome-dev/habit-tracker-app](https://github.com/takanome-dev/habit-tracker-app).  
DejaDo Loop modifications © 2026 — All rights reserved.

---

*Built with ❤️ and AI by the DejaDo team.*
