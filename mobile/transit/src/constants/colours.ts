// Includes a list of colour palettes each with 8 colours
// Colours for light and dark modes added first
// Each palette is an array of strings representing hex colour codes

// Common colour constants
export const brightRed = "#ff161e";

// Light mode colour constants
export const warmBeige = "#f0dcb6";
export const creamYellow = "#fbf0ce";
export const mintGreen = "#e5f9f5";
export const skyBlue = "#9de9ff";

// Light mode colours
export const lightModeColors = [warmBeige, creamYellow, mintGreen, skyBlue];

// Dark mode colour constants
export const lightBlue = "#86cbff";
export const charcoalBlack = "#1e1e1e";
export const mediumGray = "#434343";
export const darkGray = "#333333";

// Dark mode colours
export const darkModeColors = [lightBlue, charcoalBlack, mediumGray, darkGray];

// Combined color palette
export const colorPalette = {
  light: lightModeColors,
  dark: darkModeColors,
};
