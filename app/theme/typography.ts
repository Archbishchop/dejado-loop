// DejaDo Loop — Typography
// Heading: Nunito (rounded, friendly, motivating)
// Body: Inter (clean, readable)

import { Platform } from "react-native"

const fonts = {
  nunito: {
    light: "Nunito-Light",
    normal: "Nunito-Regular",
    medium: "Nunito-Medium",
    semiBold: "Nunito-SemiBold",
    bold: "Nunito-Bold",
    extraBold: "Nunito-ExtraBold",
  },
  inter: {
    light: "Inter-Light",
    normal: "Inter-Regular",
    medium: "Inter-Medium",
    semiBold: "Inter-SemiBold",
    bold: "Inter-Bold",
  },
  helveticaNeue: {
    thin: "HelveticaNeue-Thin",
    light: "HelveticaNeue-Light",
    normal: "Helvetica Neue",
    medium: "HelveticaNeue-Medium",
  },
  courier: {
    normal: "Courier",
  },
  sansSerif: {
    thin: "sans-serif-thin",
    light: "sans-serif-light",
    normal: "sans-serif",
    medium: "sans-serif-medium",
  },
}

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary font. Used in most places.
   */
  primary: Platform.select({ ios: fonts.nunito, android: fonts.nunito })!,
  /**
   * An alternate font used for body copy and labels.
   */
  secondary: Platform.select({ ios: fonts.inter, android: fonts.inter })!,
  /**
   * Lets you specify absolute font URLs from the file system, or URLs from the web.
   */
  code: Platform.select({ ios: fonts.courier, android: fonts.sansSerif })!,
}
