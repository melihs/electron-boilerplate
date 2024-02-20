export interface DarkMode {
  toggle(): void;
}

declare global {
  interface Window {
    darkMode?: DarkMode;
  }
}
