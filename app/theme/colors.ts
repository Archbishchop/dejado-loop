// DejaDo Loop — Brand Color System
// Primary: Deep Navy + Electric Teal + Warm Gold
// Tone: Focused, motivating, modern dark-light hybrid

const palette = {
  // Neutrals (dark to light)
  neutral100: "#FFFFFF",
  neutral200: "#F0F4F8",
  neutral300: "#D1DCE8",
  neutral400: "#9AAFC4",
  neutral500: "#5C7A99",
  neutral600: "#354B61",
  neutral700: "#1E3148",
  neutral800: "#0D1B2A",
  neutral900: "#060D14",

  // Primary — Electric Teal (action, streaks, progress)
  primary100: "#D6F5F2",
  primary200: "#AEEAE5",
  primary300: "#74D9D0",
  primary400: "#3EC9BD",
  primary500: "#00B4A6",
  primary600: "#008F84",

  // Secondary — Deep Indigo (accents, badges)
  secondary100: "#E0E4F8",
  secondary200: "#BDC5F0",
  secondary300: "#8A97E4",
  secondary400: "#5C6DD8",
  secondary500: "#3A4BC4",

  // Accent — Warm Gold (streaks, rewards, highlights)
  accent100: "#FFF8E1",
  accent200: "#FDEDB0",
  accent300: "#FBE07A",
  accent400: "#F9D240",
  accent500: "#F5C518",

  // State
  angry100: "#FDECEA",
  angry500: "#D32F2F",

  success: "#2ECC71",
  warning: "#F39C12",

  overlay20: "rgba(13, 27, 42, 0.2)",
  overlay50: "rgba(13, 27, 42, 0.5)",
} as const

export const colors = {
  palette,
  transparent: "rgba(0, 0, 0, 0)",
  text: palette.neutral800,
  textDim: palette.neutral600,
  textLight: palette.neutral100,
  background: palette.neutral200,
  backgroundDark: palette.neutral800,
  border: palette.neutral300,
  tint: palette.primary500,
  tintDark: palette.primary600,
  separator: palette.neutral300,
  error: palette.angry500,
  errorBackground: palette.angry100,
  success: palette.success,
  warning: palette.warning,
  streak: palette.accent500,
  streakBg: palette.accent100,
}
