/**
 * DejaDo Loop — RevenueCat Payments Service
 *
 * Handles the paywall, subscription status, and purchase restoration.
 *
 * PRODUCTS TO CREATE IN REVENUE CAT:
 * ┌─────────────────────────────────┬──────────┬──────────────────────┐
 * │ Product ID                      │ Type     │ Price                │
 * ├─────────────────────────────────┼──────────┼──────────────────────┤
 * │ dejadoloop_pro_monthly          │ Sub      │ $2.99/month          │
 * │ dejadoloop_pro_annual           │ Sub      │ $14.99/year          │
 * │ dejadoloop_lifetime             │ One-time │ $9.99 lifetime       │
 * └─────────────────────────────────┴──────────┴──────────────────────┘
 *
 * FREE TIER features:
 *   - Up to 3 habits
 *   - Local streak tracking
 *   - Offline affirmations (curated)
 *   - Basic dashboard
 *
 * PRO features (unlocked by any paid product):
 *   - Unlimited habits
 *   - AI-personalized affirmations (GPT-4o)
 *   - Cloud sync across devices
 *   - Home screen widgets
 *   - Advanced 30/60/90-day analytics
 *   - Custom themes
 *   - Priority support
 *
 * SETUP INSTRUCTIONS:
 * 1. Create account at https://www.revenuecat.com
 * 2. Create new project "DejaDo Loop"
 * 3. Add iOS app (com.dejadoloop) and Android app (com.dejadoloop)
 * 4. Create the products listed above in App Store Connect + Google Play Console
 * 5. Add products to RevenueCat and create Entitlement "pro"
 * 6. Install SDK: npx expo install react-native-purchases
 * 7. Replace REVENUECAT_API_KEYS below with your real keys
 * 8. Uncomment the v2 section
 */

// ─── Config ───────────────────────────────────────────────────────────────────

export const REVENUECAT_API_KEYS = {
  ios: "YOUR_RC_IOS_API_KEY",
  android: "YOUR_RC_ANDROID_API_KEY",
}

export const RC_ENTITLEMENTS = {
  PRO: "pro",
} as const

export const RC_PRODUCTS = {
  MONTHLY: "dejadoloop_pro_monthly",
  ANNUAL: "dejadoloop_pro_annual",
  LIFETIME: "dejadoloop_lifetime",
} as const

// ─── v1: Mock payments (no real billing) ─────────────────────────────────────

export const paymentsService = {
  /**
   * Check if user has pro entitlement.
   * v1: Always returns false (free tier).
   */
  async checkProStatus(): Promise<boolean> {
    return false
  },

  /**
   * Purchase a product.
   * v1: Returns mock success for testing UI flow.
   */
  async purchase(_productId: string): Promise<{ success: boolean; error?: string }> {
    console.log("[RevenueCat] Mock purchase — wire up real SDK for production")
    return { success: true }
  },

  /**
   * Restore previous purchases.
   */
  async restorePurchases(): Promise<{ success: boolean; isPro: boolean }> {
    return { success: true, isPro: false }
  },
}

// ─── v2: Real RevenueCat SDK — uncomment when ready ──────────────────────────
//
// import Purchases, { LOG_LEVEL, PurchasesPackage } from "react-native-purchases"
// import { Platform } from "react-native"
//
// export const initRevenueCat = (userId?: string) => {
//   Purchases.setLogLevel(LOG_LEVEL.VERBOSE)
//   Purchases.configure({
//     apiKey: Platform.OS === "ios" ? REVENUECAT_API_KEYS.ios : REVENUECAT_API_KEYS.android,
//     appUserID: userId,
//   })
// }
//
// export const paymentsService = {
//   async checkProStatus(): Promise<boolean> {
//     const info = await Purchases.getCustomerInfo()
//     return RC_ENTITLEMENTS.PRO in info.entitlements.active
//   },
//
//   async getOfferings() {
//     const offerings = await Purchases.getOfferings()
//     return offerings.current?.availablePackages ?? []
//   },
//
//   async purchase(pkg: PurchasesPackage) {
//     try {
//       const { customerInfo } = await Purchases.purchasePackage(pkg)
//       const isPro = RC_ENTITLEMENTS.PRO in customerInfo.entitlements.active
//       return { success: true, isPro }
//     } catch (e: any) {
//       if (!e.userCancelled) return { success: false, error: e.message }
//       return { success: false, error: "cancelled" }
//     }
//   },
//
//   async restorePurchases() {
//     const info = await Purchases.restorePurchases()
//     const isPro = RC_ENTITLEMENTS.PRO in info.entitlements.active
//     return { success: true, isPro }
//   },
// }
