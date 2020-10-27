import { BrowserWindow, ipcMain, ipcRenderer } from "electron"

export default class Application {
    private mainWindow: BrowserWindow;

    constructor(window: BrowserWindow) {
        this.mainWindow = window;
    }

    //Application startup
    public async setUp(): Promise<void> {
        //this.mainWindow.setMenu(null)

        await this.setUpDefaultListener()
    }

    //Creates all default listeners
    private async setUpDefaultListener(): Promise<void> {
        ipcMain.on('app_exit', (event: Electron.IpcMainEvent, payload: any) => {
            this.mainWindow.close()
        })
        ipcMain.on('app_fullscreen', (event: Electron.IpcMainEvent, payload: any) => {
            if (this.mainWindow.isMaximized()) {
                this.mainWindow.unmaximize()
                return
            } 

            this.mainWindow.maximize()
        })
        ipcMain.on('app_minimize', (event: Electron.IpcMainEvent, payload: any) => {
            this.mainWindow.minimize()
        })
    }

}