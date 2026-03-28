# Privacy Policy — DejaDo Loop

**Last Updated: March 28, 2026**

---

## 1. Introduction

DejaDo Loop ("the app," "we," "us") is built and maintained by Robert, an independent developer (contact: boulder257@gmail.com). This privacy policy explains what information DejaDo Loop collects, why it collects it, how it is stored and protected, and what rights you have over your data.

We designed this policy to be readable. If something is unclear, please reach out — you can find contact details at the bottom.

By using DejaDo Loop, you agree to the practices described here.

---

## 2. Information We Collect

### 2.1 Information You Provide

| Data | When it's collected | Required? |
|---|---|---|
| **Name** | When you create an account | No — optional |
| **Email address** | When you register for an account | No — you can use the app without an account |
| **Habits and completion data** | When you log habits in the app | Yes — this is the core function of the app |
| **Streak data** | Automatically calculated from your habit logs | Yes |

### 2.2 Information Collected Automatically

| Data | Purpose |
|---|---|
| **Push notification token** | To send you habit reminders (only if you grant permission) |
| **Subscription status** | To determine whether you have access to Pro features |
| **Anonymous analytics events** | To understand how the app is used in aggregate (e.g., which screens are visited, feature adoption) |

### 2.3 Information We Do NOT Collect

To be explicit about what we do **not** access:

- Location
- Contacts or address book
- Camera or microphone
- Payment card details (these are handled entirely by Apple, Google, and RevenueCat — we never see your card number or billing details)

---

## 3. How We Use Your Information

We use the information we collect for the following purposes:

- **To provide the app's core features** — tracking your habits, streaks, and progress.
- **To sync your data across devices** (Pro users) — your habits and completion data are stored in the cloud so you can access them on multiple devices.
- **To send you habit reminders** — only if you have enabled push notifications.
- **To manage your subscription** — so we know whether you have access to Pro features.
- **To generate AI affirmations** (Pro users only) — your habit data may be sent to OpenAI's API to generate personalized motivational messages. See Section 5 for details.
- **To improve the app** — anonymous, aggregated analytics help us understand what's working and what to fix.
- **To respond to support requests** — if you contact us, we use the information you share to help you.

We do not sell your personal data. We do not use your data for advertising.

---

## 4. Data Storage and Security

### Where your data lives

- **Free / v1 users:** Your data is stored locally on your device only. We do not transmit it to any server.
- **Pro / v2 users:** Your data is synced to Firebase Firestore, a cloud database operated by Google. Your data is stored on Google's servers and subject to Google's security infrastructure.

### How we protect it

- All data transmitted between the app and Firebase is encrypted in transit using HTTPS/TLS.
- Firebase Firestore enforces security rules so that each user can only access their own data.
- We use Firebase Authentication to verify your identity.

### How long we keep your data

We retain your data for as long as your account is active, or until you request deletion. If you delete your account or request data erasure (see Section 9), we will delete your data promptly.

---

## 5. Third-Party Services

DejaDo Loop relies on the following third-party services. Each has its own privacy policy.

### Firebase (Google)
We use Firebase for:
- **Authentication** — to manage user accounts and sign-in
- **Firestore** — to store and sync your data in the cloud (Pro users)
- **Analytics** — to collect anonymous usage events

Firebase is operated by Google LLC. Your data may be stored on Google's servers in the United States or other countries.
Privacy policy: [https://firebase.google.com/support/privacy](https://firebase.google.com/support/privacy)

### RevenueCat
We use RevenueCat to manage in-app subscriptions and verify purchase status. RevenueCat receives your subscription information but does not receive your habit data. Payment processing itself is handled by Apple (App Store) or Google (Play Store) — RevenueCat never handles your payment card details.
Privacy policy: [https://www.revenuecat.com/privacy](https://www.revenuecat.com/privacy)

### OpenAI (Pro users only)
If you are a Pro subscriber and use the AI affirmations feature, your habit names and related context are sent to OpenAI's API to generate personalized motivational content. This data is transmitted to OpenAI's servers. We do not send your name, email, or any other identifying information to OpenAI — only the habit data needed to generate the affirmation.

OpenAI's API data usage policies apply. As of the date of this policy, OpenAI does not use API inputs to train its models by default.
Privacy policy: [https://openai.com/policies/privacy-policy](https://openai.com/policies/privacy-policy)

### Expo (Push Notifications)
We use Expo's push notification service to deliver habit reminders. This requires your device's push notification token. See Section 6 for more details.
Privacy policy: [https://expo.dev/privacy](https://expo.dev/privacy)

---

## 6. Push Notifications

If you grant permission, DejaDo Loop will send you push notifications to remind you of your habits.

- Your device's push notification token is collected and stored solely to deliver these reminders.
- You can disable push notifications at any time through your device's settings (iOS: Settings > Notifications > DejaDo Loop; Android: Settings > Apps > DejaDo Loop > Notifications).
- Disabling notifications does not affect your data or subscription.

---

## 7. Subscriptions and Payments

DejaDo Loop offers a Pro subscription with additional features.

- Subscriptions are processed by Apple (App Store) or Google (Play Store). We never receive your payment card number or billing address.
- RevenueCat is used to verify and manage subscription status.
- If you have questions about billing, refunds, or cancellations, those are governed by Apple's or Google's respective refund policies.

---

## 8. Children's Privacy

DejaDo Loop is not directed at or intended for children under the age of 13. We do not knowingly collect personal information from children under 13.

If you believe a child under 13 has provided personal information through the app, please contact us at boulder257@gmail.com and we will delete it promptly.

If you are located in the European Union, this restriction applies to children under the age of 16 (or a lower age if permitted by local law in your EU member state).

---

## 9. Your Rights

You have the following rights regarding your personal data. To exercise any of them, email us at boulder257@gmail.com with a description of your request. We will respond within 30 days.

### Right to Access
You can request a copy of all personal data we hold about you.

### Right to Deletion
You can request that we delete your account and all associated data at any time. We will process deletion requests promptly. Note that some residual data may remain in backups for a short period before being purged.

### Right to Correction
If any information we hold about you is inaccurate or incomplete, you can ask us to correct it.

### Right to Export
You can request an export of your habit and completion data in a portable format.

### California Residents (CCPA/CPRA)
If you are a California resident, you have additional rights under the California Consumer Privacy Act:
- The right to know what personal information is collected, used, shared, or sold
- The right to delete personal information we hold about you
- The right to opt out of the sale of your personal information (note: we do not sell personal information)
- The right to non-discrimination for exercising your privacy rights

### EU/EEA and UK Residents (GDPR)
If you are in the European Union, European Economic Area, or United Kingdom, your rights include access, rectification, erasure, restriction of processing, data portability, and the right to object to processing. You also have the right to lodge a complaint with your local data protection authority.

The legal bases we rely on for processing your personal data are:
- **Contract performance** — to provide you with the app's features you signed up for
- **Legitimate interests** — for anonymous analytics to improve the app
- **Consent** — for push notifications (which you can withdraw at any time)

---

## 10. Changes to This Policy

We may update this privacy policy from time to time. When we do:

- We will update the "Last Updated" date at the top of this document.
- If the changes are significant, we will notify you via a notice in the app or by email (if you have provided one).

Your continued use of DejaDo Loop after any changes constitutes your acceptance of the updated policy.

---

## 11. Contact Us

If you have any questions, concerns, or requests regarding this privacy policy or your personal data, please contact:

**Robert**
Independent Developer, DejaDo Loop
Email: [boulder257@gmail.com](mailto:boulder257@gmail.com)

We aim to respond to all inquiries within 5 business days.

---

*DejaDo Loop is an independent app developed by a solo developer. Thank you for trusting us with your data — we take that responsibility seriously.*
