'use strict';
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {

  const mainWindow = new BrowserWindow({
    width: 600,
    height: 600,
    show: false, // show at did-finish-load event
  });
  mainWindow.loadURL('file://' + __dirname+ '/main.html');

  mainWindow.webContents.on('did-finish-load', function() {
    mainWindow.show();
    mainWindow.focus();
  });

});
