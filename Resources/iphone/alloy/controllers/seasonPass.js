function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function back() {
        DRAWER.navigation("myAccount", 2);
    }
    function goSlide(event) {
        var index = event.source.mod;
        var arrViews = $.scrollableView.getViews();
        switch (index) {
          case "0":
            $.lbl1.backgroundColor = "#FFFFFF";
            $.lbl2.backgroundColor = "#F5F5F5";
            $.lbl3.backgroundColor = "#F5F5F5";
            break;

          case "1":
            $.lbl1.backgroundColor = "#F5F5F5";
            $.lbl2.backgroundColor = "#FFFFFF";
            $.lbl3.backgroundColor = "#F5F5F5";
            break;

          case "2":
            $.lbl1.backgroundColor = "#F5F5F5";
            $.lbl2.backgroundColor = "#F5F5F5";
            $.lbl3.backgroundColor = "#FFFFFF";
        }
        $.scrollableView.scrollToView(arrViews[index]);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "seasonPass";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.seasonPass = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "seasonPass"
    });
    $.__views.seasonPass && $.addTopLevelView($.__views.seasonPass);
    $.__views.__alloyId1355 = Alloy.createController("_header", {
        id: "__alloyId1355",
        __parentSymbol: $.__views.seasonPass
    });
    $.__views.__alloyId1355.setParent($.__views.seasonPass);
    $.__views.__alloyId1356 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1356"
    });
    $.__views.seasonPass.add($.__views.__alloyId1356);
    $.__views.__alloyId1357 = Ti.UI.createLabel({
        text: "Season Pass",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1357"
    });
    $.__views.__alloyId1356.add($.__views.__alloyId1357);
    $.__views.__alloyId1358 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1358"
    });
    $.__views.__alloyId1356.add($.__views.__alloyId1358);
    back ? $.__views.__alloyId1358.addEventListener("click", back) : __defers["$.__views.__alloyId1358!click!back"] = true;
    $.__views.menu = Ti.UI.createView({
        id: "menu",
        layout: "horizontal",
        height: "50",
        width: "100%"
    });
    $.__views.seasonPass.add($.__views.menu);
    $.__views.lbl1 = Ti.UI.createLabel({
        text: "VOICE PACKAGE",
        id: "lbl1",
        mod: "0",
        height: "100%",
        width: "33%",
        textAlign: "center",
        backgroundColor: "#FFFFFF",
        color: "black"
    });
    $.__views.menu.add($.__views.lbl1);
    goSlide ? $.__views.lbl1.addEventListener("touchend", goSlide) : __defers["$.__views.lbl1!touchend!goSlide"] = true;
    $.__views.__alloyId1359 = Ti.UI.createView({
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId1359"
    });
    $.__views.menu.add($.__views.__alloyId1359);
    $.__views.lbl2 = Ti.UI.createLabel({
        text: "DATA PACKAGE",
        id: "lbl2",
        mod: "1",
        height: "100%",
        width: "33%",
        textAlign: "center",
        backgroundColor: "#F5F5F5",
        color: "black"
    });
    $.__views.menu.add($.__views.lbl2);
    goSlide ? $.__views.lbl2.addEventListener("touchend", goSlide) : __defers["$.__views.lbl2!touchend!goSlide"] = true;
    $.__views.__alloyId1360 = Ti.UI.createView({
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId1360"
    });
    $.__views.menu.add($.__views.__alloyId1360);
    $.__views.lbl3 = Ti.UI.createLabel({
        text: "COMBO PACKAGE",
        id: "lbl3",
        mod: "2",
        height: "100%",
        width: "33%",
        textAlign: "center",
        backgroundColor: "#F5F5F5",
        color: "black"
    });
    $.__views.menu.add($.__views.lbl3);
    goSlide ? $.__views.lbl3.addEventListener("touchend", goSlide) : __defers["$.__views.lbl3!touchend!goSlide"] = true;
    var __alloyId1361 = [];
    $.__views.__alloyId1362 = Alloy.createController("seasonPass1", {
        id: "__alloyId1362",
        __parentSymbol: __parentSymbol
    });
    __alloyId1361.push($.__views.__alloyId1362.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId1363 = Alloy.createController("seasonPass2", {
        id: "__alloyId1363",
        __parentSymbol: __parentSymbol
    });
    __alloyId1361.push($.__views.__alloyId1363.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId1364 = Alloy.createController("seasonPass3", {
        id: "__alloyId1364",
        __parentSymbol: __parentSymbol
    });
    __alloyId1361.push($.__views.__alloyId1364.getViewEx({
        recurse: true
    }));
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId1361,
        id: "scrollableView",
        showPagingControl: "false",
        scrollingEnabled: "false"
    });
    $.__views.seasonPass.add($.__views.scrollableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1358!click!back"] && $.__views.__alloyId1358.addEventListener("click", back);
    __defers["$.__views.lbl1!touchend!goSlide"] && $.__views.lbl1.addEventListener("touchend", goSlide);
    __defers["$.__views.lbl2!touchend!goSlide"] && $.__views.lbl2.addEventListener("touchend", goSlide);
    __defers["$.__views.lbl3!touchend!goSlide"] && $.__views.lbl3.addEventListener("touchend", goSlide);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;