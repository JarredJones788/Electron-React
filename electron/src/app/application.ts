import { exec } from "child_process";
import { BrowserWindow } from "electron"

export default class Application {
    private mainWindow: BrowserWindow;

    constructor(window: BrowserWindow) {
        this.mainWindow = window;
    }

    public setUp() {
        
    }
}