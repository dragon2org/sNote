import { app, BrowserWindow } from "electron";
import * as path from "path";

let mainWindow: Electron.BrowserWindow;

function createWindow() : void {
    mainWindow = new BrowserWindow({
        height: 400,
        width: 800
    });

    mainWindow.loadFile(path.join(__dirname, "../src/views/index.html"));
}

app.on("ready", createWindow)