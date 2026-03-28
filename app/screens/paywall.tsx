/**
 * DejaDo Loop — Paywall Screen
 * Shown when free users try to access a Pro feature.
 * Integrates with RevenueCat for purchases.
 */

import React, { FC, useState } from "react"
import {
  View,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing } from "app/theme"
import { Text } from "app/components"
import { paymentsService, RC_PRODUCTS } from "app/services/payments/revenueCatService"
import { useStores } from "app/models"

// ─── Feature list ─────────────────────────────────────────────────────────────

const FREE_FEATURES = [
  "✅ Up to 3 habits",
  "✅ Streak tracking",
  "✅ Daily check-ins",
  "✅ Offline affirmations",
  "✅ Basic dashboard",
]

const PRO_FEATURES = [
  "🔁 Unlimited habits",
  "🤖 AI-personalized affirmations",
  "☁️ Cloud sync across devices",
  "📊 30/60/90-day analytics",
  "🎨 Custom themes",
  "🏠 Home screen widgets",
  "💬 Priority support",
]

const PLANS = [
  {
    id: RC_PRODUCTS.MONTHLY,
    label: "Monthly",
    price: "$2.99",
    period: "/ month",
    badge: null,
  },
  {
    id: RC_PRODUCTS.ANNUAL,
    label: "Annual",
    price: "$14.99",
    period: "/ year",
    badge: "Best Value 🔥",
    perMonth: "$1.25/mo",
  },
  {
    id: RC_PRODUCTS.LIFETIME,
    label: "Lifetime",
    price: "$9.99",
    period: "one-time",
    badge: "Popular",
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

interface PaywallScreenProps {
  triggerFeature?: string
  onDismiss: () => void
  onSuccess: () => void
}

export const PaywallScreen: FC<PaywallScreenProps> = observer(
  ({ triggerFeature, onDismiss, onSuccess }) => {
    const { user } = useStores()
    const [selectedPlan, setSelectedPlan] = useState(RC_PRODUCTS.ANNUAL)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [restoring, setRestoring] = useState(false)

    const handlePurchase = async () => {
      setLoading(true)
      setError("")
      try {
        const result = await paymentsService.purchase(selectedPlan)
        if (result.success) {
          // Activate pro in user model
          const expiresAt =
            selectedPlan === RC_PRODUCTS.LIFETIME
              ? "2099-01-01T00:00:00.000Z"
              : selectedPlan === RC_PRODUCTS.ANNUAL
              ? new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
              : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()

          user.activatePro(expiresAt)
          onSuccess()
        } else {
          setError(result.error === "cancelled" ? "" : result.error ?? "Purchase failed")
        }
      } catch (e) {
        setError("Something went wrong. Please try again.")
      } finally {
        setLoading(false)
      }
    }

    const handleRestore = async () => {
      setRestoring(true)
      try {
        const result = await paymentsService.restorePurchases()
        if (result.isPro) {
          user.activatePro("2099-01-01T00:00:00.000Z")
          onSuccess()
        } else {
          setError("No previous purchases found.")
        }
      } catch {
        setError("Restore failed. Try again.")
      } finally {
        setRestoring(false)
      }
    }

    return (
      <ScrollView style={$scroll} contentContainerStyle={$container}>
        {/* Header */}
        <TouchableOpacity style={$closeBtn} onPress={onDismiss}>
          <Text text="✕" style={$closeText} />
        </TouchableOpacity>

        <Text text="🔁" style={$logo} />
        <Text text="DejaDo Pro" preset="heading" style={$title} />
        {triggerFeature ? (
          <Text text={`Unlock ${triggerFeature} and everything below`} style={$subtitle} />
        ) : (
          <Text text="Unlock the full loop experience" style={$subtitle} />
        )}

        {/* Feature comparison */}
        <View style={$featureSection}>
          <View style={$featureCol}>
            <Text text="Free" style={$featureColHeader} />
            {FREE_FEATURES.map((f) => (
              <Text key={f} text={f} style={$featureItem} />
            ))}
          </View>
          <View style={[$featureCol, $featureColPro]}>
            <Text text="Pro" style={[$featureColHeader, $proHeader]} />
            {PRO_FEATURES.map((f) => (
              <Text key={f} text={f} style={[$featureItem, $proItem]} />
            ))}
          </View>
        </View>

        {/* Plan selector */}
        <View style={$plansContainer}>
          {PLANS.map((plan) => (
            <TouchableOpacity
              key={plan.id}
              style={[$planCard, selectedPlan === plan.id && $planCardSelected]}
              onPress={() => setSelectedPlan(plan.id)}
            >
              {plan.badge && (
                <View style={$badge}>
                  <Text text={plan.badge} style={$badgeText} />
                </View>
              )}
              <Text text={plan.label} style={$planLabel} />
              <View style={$planPriceRow}>
                <Text text={plan.price} style={[$planPrice, selectedPlan === plan.id && $planPriceSelected]} />
                <Text text={plan.period} style={$planPeriod} />
              </View>
              {plan.perMonth && <Text text={plan.perMonth} style={$planPerMonth} />}
            </TouchableOpacity>
          ))}
        </View>

        {/* Error */}
        {!!error && <Text text={error} style={$error} />}

        {/* CTA */}
        <TouchableOpacity
          style={[$ctaBtn, loading && $ctaBtnDisabled]}
          onPress={handlePurchase}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text text="Start Pro 🚀" style={$ctaBtnText} />
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRestore} disabled={restoring} style={$restoreBtn}>
          <Text
            text={restoring ? "Restoring..." : "Restore Purchases"}
            style={$restoreText}
          />
        </TouchableOpacity>

        <Text
          text="Cancel anytime. Billed through your App Store account."
          style={$legalText}
        />
      </ScrollView>
    )
  },
)

// ─── Styles ───────────────────────────────────────────────────────────────────

const $scroll = { flex: 1, backgroundColor: colors.backgroundDark }

const $container: ViewStyle = {
  paddingHorizontal: spacing.lg,
  paddingBottom: spacing.xxl,
  paddingTop: spacing.xl,
  alignItems: "center",
  gap: spacing.lg,
}

const $closeBtn: ViewStyle = { alignSelf: "flex-end" }

const $closeText: TextStyle = { color: colors.palette.neutral400, fontSize: 18 }

const $logo: TextStyle = { fontSize: 56, marginBottom: -spacing.sm }

const $title: TextStyle = { color: colors.textLight, textAlign: "center" }

const $subtitle: TextStyle = {
  color: colors.palette.neutral400,
  textAlign: "center",
  fontSize: 15,
  marginTop: -spacing.md,
}

const $featureSection: ViewStyle = {
  flexDirection: "row",
  gap: spacing.md,
  width: "100%",
}

const $featureCol: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.neutral700,
  borderRadius: 16,
  padding: spacing.md,
  gap: spacing.sm,
}

const $featureColPro: ViewStyle = {
  backgroundColor: colors.palette.primary600,
}

const $featureColHeader: TextStyle = {
  color: colors.palette.neutral400,
  fontWeight: "700",
  fontSize: 12,
  textTransform: "uppercase",
  letterSpacing: 1,
  marginBottom: spacing.xs,
}

const $proHeader: TextStyle = { color: colors.palette.primary200 }

const $featureItem: TextStyle = {
  color: colors.palette.neutral300,
  fontSize: 13,
  lineHeight: 20,
}

const $proItem: TextStyle = { color: colors.textLight }

const $plansContainer: ViewStyle = {
  flexDirection: "row",
  gap: spacing.sm,
  width: "100%",
}

const $planCard: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.neutral700,
  borderRadius: 16,
  padding: spacing.md,
  alignItems: "center",
  gap: 4,
  borderWidth: 2,
  borderColor: "transparent",
}

const $planCardSelected: ViewStyle = {
  borderColor: colors.tint,
  backgroundColor: colors.palette.neutral800,
}

const $badge: ViewStyle = {
  backgroundColor: colors.streak,
  borderRadius: 99,
  paddingHorizontal: 8,
  paddingVertical: 2,
  marginBottom: spacing.xs,
}

const $badgeText: TextStyle = { fontSize: 10, fontWeight: "700", color: colors.neutral900 } as any

const $planLabel: TextStyle = {
  color: colors.palette.neutral300,
  fontSize: 12,
  fontWeight: "600",
}

const $planPriceRow: ViewStyle = { flexDirection: "row", alignItems: "flex-end", gap: 2 }

const $planPrice: TextStyle = {
  color: colors.textLight,
  fontSize: 20,
  fontWeight: "800",
}

const $planPriceSelected: TextStyle = { color: colors.tint }

const $planPeriod: TextStyle = {
  color: colors.palette.neutral400,
  fontSize: 11,
  marginBottom: 2,
}

const $planPerMonth: TextStyle = {
  color: colors.tint,
  fontSize: 11,
  fontWeight: "600",
}

const $error: TextStyle = { color: colors.error, fontSize: 13, textAlign: "center" }

const $ctaBtn: ViewStyle = {
  backgroundColor: colors.tint,
  paddingVertical: spacing.md,
  paddingHorizontal: spacing.xxl,
  borderRadius: 99,
  width: "100%",
  alignItems: "center",
}

const $ctaBtnDisabled: ViewStyle = { opacity: 0.5 }

const $ctaBtnText: TextStyle = { color: colors.textLight, fontWeight: "700", fontSize: 16 }

const $restoreBtn: ViewStyle = { paddingVertical: spacing.sm }

const $restoreText: TextStyle = {
  color: colors.palette.neutral400,
  fontSize: 13,
  textDecorationLine: "underline",
}

const $legalText: TextStyle = {
  color: colors.palette.neutral600,
  fontSize: 11,
  textAlign: "center",
  lineHeight: 16,
}
