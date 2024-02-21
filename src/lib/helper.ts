export const handleIconColor = (
  isDarkMode: boolean,
  darkColor = "#02C9D6",
  lightColor = "#343a40",
): string => {
  return isDarkMode ? darkColor : lightColor;
};
