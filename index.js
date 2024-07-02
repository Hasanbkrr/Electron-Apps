const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');

const { app, BrowserWindow, ipcMain } = electron;

let mainwindow;

app.on('ready', () => {
    mainwindow =new BrowserWindow({});
    mainwindow.loadURL('file:///C:/Users/hasan/electron/index.html');

});
ipcMain.on('videosubmitted', (event, path) => {
    ffmpeg.ffprobe(path,(err,metadata) => {
        mainwindow.webContents.send('video:data',metadata.format.duration);
    })
})