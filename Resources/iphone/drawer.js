function createMyDrawer(leftMenuWindow) {
    nappDrawer = NappDrawerModule.createDrawer({
        fullscreen: true,
        leftWindow: leftMenuWindow,
        centerWindow: createCenterNavWindow(),
        openDrawerGestureMode: NappDrawerModule.OPEN_MODE_ALL,
        showShadow: false,
        leftDrawerWidth: 200,
        animationMode: NappDrawerModule.ANIMATION_NONE,
        statusBarStyle: NappDrawerModule.STATUSBAR_WHITE,
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT ]
    });
    "iphone" == Ti.Platform.osname && nappDrawer.setCloseDrawerGestureMode(NappDrawerModule.CLOSE_MODE_ALL);
    nappDrawer.addEventListener("windowDidOpen", function() {
        drawerFlag = 1;
    });
    nappDrawer.addEventListener("windowDidClose", function() {
        drawerFlag = 0;
    });
    nappDrawer.addEventListener("android:back", function() {
        var mod = Ti.App.Properties.getString("module");
        if ("" != mod) {
            Ti.App.Properties.setString("module", "");
            navigation(mod, 1);
        } else if (1 == drawerFlag) {
            var dialog = Ti.UI.createAlertDialog({
                cancel: 1,
                buttonNames: [ "Cancel", "Confirm" ],
                message: "Would you like to exit EQSport?",
                title: "Exit app"
            });
            dialog.addEventListener("click", function(e) {
                e.index === e.source.cancel;
                if (1 === e.index) {
                    Ti.App.Properties.removeProperty("oddEnabled");
                    var activity = Titanium.Android.currentActivity;
                    activity.finish();
                }
            });
            dialog.show();
        } else nappDrawer.toggleLeftWindow();
        return false;
    });
}

function refreshMenu() {
    nappDrawer = null;
    createMyDrawer(Alloy.createController("menu").getView());
    nappDrawer.open();
}

var NappDrawerModule = require("dk.napp.drawer");

var drawerFlag = 0;

var nappDrawer = null;

var menu_no = "1";

var createCenterNavWindow = function() {
    var leftBtn = Ti.UI.createButton();
    leftBtn.addEventListener("click", function() {
        nappDrawer.toggleLeftWindow();
    });
    var navController = openNewNavWindow("home");
    return navController;
};

var openNewNavWindow = function(target, param) {
    if ("" == param) var win = Alloy.createController(target).getView(); else var win = Alloy.createController(target, param).getView();
    var navController;
    var myWin = Ti.UI.createWindow({
        navBarHidden: true
    });
    myWin.add(win);
    var navController = Ti.UI.iOS.createNavigationWindow({
        window: myWin
    });
    return navController;
};

var navigation = function(target, skipToggle, param) {
    Ti.App.fireEvent("clearObject");
    var newWin = openNewNavWindow(target, param);
    nappDrawer.setCenterWindow(newWin);
    1 != skipToggle && nappDrawer.toggleLeftWindow();
};

exports.initDrawer = function() {
    refreshMenu();
};

exports.navigation = function(target, isSkipToggle, param) {
    navigation(target, isSkipToggle, param);
};

exports.closeToggle = function() {
    nappDrawer.toggleLeftWindow();
};

exports.initMenu = function() {
    refreshMenu();
    navigation("member", 1);
};

exports.isDrawerOpen = function() {
    return drawerFlag;
};

exports.closeDrawer = function() {
    nappDrawer.close();
};

exports.logout = function() {
    refreshMenu();
    navigation("home", 1);
};