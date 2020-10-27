import { app, BrowserWindow } from 'electron'

import path from 'path'
import url from 'url'
import Application from '../app/application';

let mainWindow: BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
    frame: true
  })

  mainWindow.loadURL(
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, '../client/build/index.html'),
      protocol: 'file:',
      slashes: true,
    })
  )

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  //Load the application
  new Application(mainWindow).setUp()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})