import { app, ipcMain, nativeTheme, BrowserWindow } from "electron";

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

const isDevelopment = process.env.NODE_ENV === "development";

if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = (): void => {
  const mainWindow: BrowserWindow = new BrowserWindow({
    height: 600,
    width: 800,
    icon: "./src/assets/icon.png",
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      devTools: isDevelopment,
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.webContents.openDevTools();
};

ipcMain.handle("dark-mode:toggle", () => {
  nativeTheme.themeSource = nativeTheme.shouldUseDarkColors ? "light" : "dark";
  return nativeTheme.shouldUseDarkColors;
});

ipcMain.handle("dark-mode:system", (): void => {
  nativeTheme.themeSource = "system";
});

app.on("ready", createWindow);

app.on("window-all-closed", (): void => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", (): void => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
