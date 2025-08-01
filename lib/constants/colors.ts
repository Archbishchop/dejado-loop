export const NAV_THEME = {
  light: {
    background: "hsl(0 0% 100%)", // background
    border: "hsl(240 5.9% 90%)", // border
    card: "hsl(0 0% 100%)", // card
    notification: "hsl(0 84.2% 60.2%)", // destructive
    primary: "hsl(240 5.9% 10%)", // primary
    text: "hsl(240 10% 3.9%)", // foreground
  },
  dark: {
    background: "hsl(240 10% 3.9%)", // background
    border: "hsl(240 3.7% 15.9%)", // border
    card: "hsl(240 10% 3.9%)", // card
    notification: "hsl(0 72% 51%)", // destructive
    primary: "hsl(0 0% 98%)", // primary
    text: "hsl(0 0% 98%)", // foreground
  },
};

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const colors = {
  light: {
    text: "#11181C",
    background: "#F4F2F1",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};

// TODO: write documentation for colors and palette in own markdown file and add links from here

// const palette = {
//   neutral100: "#FFFFFF",
//   neutral200: "#F4F2F1",
//   neutral300: "#D7CEC9",
//   neutral400: "#B6ACA6",
//   neutral500: "#978F8A",
//   neutral600: "#564E4A",
//   neutral700: "#3C3836",
//   neutral800: "#191015",
//   neutral900: "#000000",

//   primary100: "#F4E0D9",
//   primary200: "#E8C1B4",
//   primary300: "#DDA28E",
//   primary400: "#D28468",
//   primary500: "#C76542",
//   primary600: "#A54F31",

//   secondary100: "#DCDDE9",
//   secondary200: "#BCC0D6",
//   secondary300: "#9196B9",
//   secondary400: "#626894",
//   secondary500: "#41476E",

//   accent100: "#FFEED4",
//   accent200: "#FFE1B2",
//   accent300: "#FDD495",
//   accent400: "#FBC878",
//   accent500: "#FFBB50",

//   angry100: "#F2D6CD",
//   angry500: "#C03403",

//   success: "#56C568",

//   overlay20: "rgba(25, 16, 21, 0.2)",
//   overlay50: "rgba(25, 16, 21, 0.5)",
// } as const

// export const colors = {
//   /**
//    * The palette is available to use, but prefer using the name.
//    * This is only included for rare, one-off cases. Try to use
//    * semantic names as much as possible.
//    */
//   palette,
//   /**
//    * A helper for making something see-thru.
//    */
//   transparent: "rgba(0, 0, 0, 0)",
//   /**
//    * The default text color in many components.
//    */
//   text: palette.neutral800,
//   /**
//    * Secondary text information.
//    */
//   textDim: palette.neutral600,
//   /**
//    * The default color of the screen background.
//    */
//   background: palette.neutral200,
//   /**
//    * The default border color.
//    */
//   border: palette.neutral400,
//   /**
//    * The main tinting color.
//    */
//   tint: palette.primary500,
//   /**
//    * A subtle color used for lines.
//    */
//   separator: palette.neutral300,
//   /**
//    * Error messages.
//    */
//   error: palette.angry500,
//   /**
//    * Error Background.
//    *
//    */
//   errorBackground: palette.angry100,
//   /**
//    * Success messages
//    */
//   success: palette.success,
// }
