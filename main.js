const { app, BrowserWindow, ipcMain, screen } = require('electron');

let win;

app.whenReady().then(() => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  win = new BrowserWindow({
    width: 420,
    height: 540,
    x: width - 440,
    y: 40,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    skipTaskbar: false,
    hasShadow: false,
    resizable: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
});

// Opacity control
ipcMain.on('set-opacity', (e, val) => {
  if (win) win.setOpacity(val);
});

// Window drag (frameless)
ipcMain.on('start-drag', () => {
  if (win) win.webContents.executeJavaScript('void 0');
});

// Close / minimize
ipcMain.on('close', () => app.quit());
ipcMain.on('minimize', () => win && win.minimize());
ipcMain.on('toggle-top', (e, val) => win && win.setAlwaysOnTop(val));

app.on('window-all-closed', () => app.quit());
