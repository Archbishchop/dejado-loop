# DejaDo Loop — Developer Setup Guide

Complete this checklist to go from fork → live app on both stores.

---

## 1. Local Dev Environment

```bash
# Prerequisites
node >= 20
yarn (npm install -g yarn)
npx expo-cli (npm install -g eas-cli)

# Install dependencies
cd dejado-loop
yarn install

# Start dev server
npx expo start
```

---

## 2. Firebase Setup (v2 — cloud sync)

1. Go to https://console.firebase.google.com
2. Create project: **dejado-loop**
3. Add apps:
   - Android: `com.dejadoloop`
   - iOS: `com.dejadoloop`
4. Enable services:
   - **Authentication** → Email/Password + Google Sign-In
   - **Firestore Database** → Start in production mode
   - **Analytics** → Enable
   - **Crashlytics** → Enable
5. Copy your config from Project Settings → General → Your apps → SDK setup
6. Paste into `app/services/firebase/firebaseConfig.ts`
7. Uncomment v2 code in `firestoreService.ts` and `authService.ts`

```bash
# Install Firebase SDK
npx expo install firebase
```

---

## 3. RevenueCat Setup (payments)

1. Create account at https://www.revenuecat.com
2. Create project: **DejaDo Loop**
3. Add platforms:
   - iOS app → Bundle ID: `com.dejadoloop`
   - Android app → Package: `com.dejadoloop`

### Create products in stores first:
**App Store Connect** (https://appstoreconnect.apple.com):
- `dejadoloop_pro_monthly` → Auto-renewable subscription $2.99/mo
- `dejadoloop_pro_annual`  → Auto-renewable subscription $14.99/yr
- `dejadoloop_lifetime`    → Non-consumable $9.99

**Google Play Console** (https://play.google.com/console):
- Same product IDs, same prices

### Then in RevenueCat dashboard:
- Add products under each platform
- Create Entitlement: **pro**
- Attach all 3 products to the **pro** entitlement
- Create Offering: **default** with all 3 packages
- Copy API keys to `app/services/payments/revenueCatService.ts`
- Uncomment v2 code in `revenueCatService.ts`

```bash
# Install RevenueCat SDK
npx expo install react-native-purchases
```

---

## 4. Push Notifications

```bash
npx expo install expo-notifications
```

Add to `app.json` plugins array:
```json
"expo-notifications"
```

Already implemented in `app/services/notifications/notificationService.ts`.

---

## 5. EAS Build (App Store + Play Store)

```bash
# Install EAS CLI
npm install -g eas-cli

# Login
eas login

# Configure (first time)
eas build:configure

# Build for Android
eas build --platform android --profile production

# Build for iOS
eas build --platform ios --profile production

# Submit to stores
eas submit --platform android
eas submit --platform ios
```

---

## 6. App Store Listing Checklist

### Google Play Console
- [ ] App name: **DejaDo Loop**
- [ ] Short description (80 chars): "Build habits that stick. AI affirmations + streaks."
- [ ] Full description: See `STORE_COPY.md`
- [ ] Category: Health & Fitness
- [ ] Screenshots: 2-8 phone screenshots (1080x1920 or 1080x2340)
- [ ] Feature graphic: 1024x500
- [ ] App icon: 512x512 PNG
- [ ] Content rating questionnaire
- [ ] Privacy policy URL (required)
- [ ] Price: Free (with in-app purchases)

### Apple App Store Connect
- [ ] App name: **DejaDo Loop**
- [ ] Subtitle: "Habits, Streaks & AI Coach"
- [ ] Keywords: habit tracker, streaks, daily routine, productivity, wellness
- [ ] Description: See `STORE_COPY.md`
- [ ] Category: Health & Fitness
- [ ] Screenshots: iPhone 6.7" required (6.5", 5.5" optional)
- [ ] App Preview video (optional but boosts conversion)
- [ ] Privacy policy URL (required)
- [ ] Age rating: 4+

---

## 7. Privacy Policy

Required by both stores. Generate one at:
- https://www.freeprivacypolicy.com/free-privacy-policy-generator/
- https://app.termly.io

Host it at: `https://dejadoloop.app/privacy` (or GitHub Pages)

---

## 8. Launch Checklist

- [ ] Firebase configured and tested
- [ ] RevenueCat products live in both stores
- [ ] Push notifications tested on real device
- [ ] Onboarding flow QA'd
- [ ] Paywall tested (sandbox mode)
- [ ] Streak logic QA'd (break + recovery)
- [ ] AI affirmations working (v1 offline pool)
- [ ] App icon + splash screen final
- [ ] Screenshots taken on real device
- [ ] Store listings complete
- [ ] EAS production build submitted
- [ ] TestFlight beta live (iOS)
- [ ] Google Play internal testing live (Android)

---

## Key Files Reference

| File | Purpose |
|---|---|
| `app/models/HabitModel.ts` | Habit data + streak logic |
| `app/models/HabitStore.ts` | Habit CRUD + aggregated stats |
| `app/models/UserModel.ts` | User profile + subscription |
| `app/models/RootStore.ts` | App root store |
| `app/services/firebase/firebaseConfig.ts` | Firebase credentials |
| `app/services/firebase/firestoreService.ts` | Local + cloud persistence |
| `app/services/firebase/authService.ts` | Authentication |
| `app/services/payments/revenueCatService.ts` | Subscription payments |
| `app/services/notifications/notificationService.ts` | Push notifications |
| `app/screens/onboarding.tsx` | First-launch flow |
| `app/screens/ai-affirmation.tsx` | Morning affirmation |
| `app/screens/streak-dashboard.tsx` | Stats + heatmap |
| `app/screens/paywall.tsx` | Upgrade screen |
