const { app, BrowserWindow } = require("electron");
const url = require('url');
const path = require('path');

var win;
app.on("ready", function() {
    win = new BrowserWindow({
        width: 1200, // 窗口宽度
        height: 600, // 窗口高度
        fullscreen: false, // 不允许全屏
        resizable: false // 不允许改变窗口size，不然布局就乱了啊
    });
    win.loadURL(
        url.format({
            // 加载本地的文件
            pathname: path.join(__dirname, "window/formatLog", "index.html"),
            protocol: "file",
            slashes: true
        })
    );
    win.on('close', function() {
        win.destroy();
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit(); // 退出应用
    }
});
