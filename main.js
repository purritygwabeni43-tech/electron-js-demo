// main.js
// This file controls the main Electron process.
// Its job is to create the desktop app window and load our HTML file.

// Import the app and BrowserWindow tools from Electron.
const { app, BrowserWindow } = require("electron");

// Import Node's path module.
// This helps us safely find files in our project folder.
const path = require("path");

// This function creates the main desktop window.
function createWindow() {
  // Create a new browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 650,
    minWidth: 700,
    minHeight: 500,
    title: "Bestie Chat",
    webPreferences: {
      // We are keeping this beginner-friendly.
      // Advanced Electron security concepts like preload scripts
      // will be covered in a future session.
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // Load our index.html file into the desktop window.
  mainWindow.loadFile(path.join(__dirname, "index.html"));
}

// When Electron is ready, create the app window.
app.whenReady().then(() => {
  createWindow();

  // On macOS, apps often recreate a window when the dock icon is clicked.
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit the app when all windows are closed.
// On macOS, apps usually stay open until the user quits fully,
// so we check that the platform is not macOS.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});