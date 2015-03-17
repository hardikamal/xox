var mainView = null;

exports.construct = function(mv) {
    mainView = mv;
};

exports.hideLoading = function() {
    mainView.activityIndicator.hide();
    mainView.loadingBar.opacity = "0";
    mainView.loadingBar.height = "0";
    mainView.loadingBar.top = "0";
};

exports.showLoading = function() {
    mainView.activityIndicator.show();
    mainView.loadingBar.opacity = "1";
    mainView.loadingBar.zIndex = "100";
    mainView.loadingBar.height = "120";
    mainView.loadingBar.top = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) / 2 - 50;
    mainView.activityIndicator.style = Ti.UI.ActivityIndicatorStyle.BIG;
    mainView.activityIndicator.top = 0;
};

exports.createAlert = function(tt, msg) {
    var box = Titanium.UI.createAlertDialog({
        title: tt,
        ok: "Okay",
        message: msg
    });
    box.show();
};

exports.popup = function(subView, config) {
    var popupWin = Ti.UI.createWindow({
        theme: "Theme.AppCompat.Translucent.NoTitleBar.Fullscreen",
        backgroundImage: "/images/Transparent.png",
        opacity: 0,
        id: "popupWin"
    });
    var popupView = Ti.UI.createView({
        width: config.width,
        height: config.height,
        backgroundColor: "#000000",
        borderRadius: 10,
        borderColor: "#565656",
        borderWidth: 1
    });
    popupView.add(subView);
    popupWin.add(popupView);
    popupWin.addEventListener("click", function(e) {
        null != e.source.id && popupWin.close();
    });
    var matrix = Ti.UI.create2DMatrix();
    matrix = matrix.scale(1.3, 1.3);
    popupWin.addEventListener("open", function() {
        popupWin.activity.actionBar.hide();
        var a = Ti.UI.createAnimation({
            transform: matrix,
            opacity: 1,
            duration: 500
        });
        popupWin.animate(a);
    });
    return popupWin;
};