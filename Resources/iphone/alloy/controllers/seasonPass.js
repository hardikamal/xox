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
<<<<<<< HEAD
    $.__views.__alloyId626 = Alloy.createController("_header", {
        id: "__alloyId626",
        __parentSymbol: $.__views.seasonPass
    });
    $.__views.__alloyId626.setParent($.__views.seasonPass);
    $.__views.__alloyId627 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId627"
    });
    $.__views.seasonPass.add($.__views.__alloyId627);
    $.__views.__alloyId628 = Ti.UI.createLabel({
=======
    $.__views.__alloyId997 = Alloy.createController("_header", {
        id: "__alloyId997",
        __parentSymbol: $.__views.seasonPass
    });
    $.__views.__alloyId997.setParent($.__views.seasonPass);
    $.__views.__alloyId998 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId998"
    });
    $.__views.seasonPass.add($.__views.__alloyId998);
    $.__views.__alloyId999 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Season Pass",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId628"
    });
    $.__views.__alloyId627.add($.__views.__alloyId628);
    $.__views.__alloyId629 = Ti.UI.createImageView({
=======
        id: "__alloyId999"
    });
    $.__views.__alloyId998.add($.__views.__alloyId999);
    $.__views.__alloyId1000 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId629"
    });
    $.__views.__alloyId627.add($.__views.__alloyId629);
    back ? $.__views.__alloyId629.addEventListener("click", back) : __defers["$.__views.__alloyId629!click!back"] = true;
=======
        id: "__alloyId1000"
    });
    $.__views.__alloyId998.add($.__views.__alloyId1000);
    back ? $.__views.__alloyId1000.addEventListener("click", back) : __defers["$.__views.__alloyId1000!click!back"] = true;
>>>>>>> origin/master
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
<<<<<<< HEAD
    $.__views.__alloyId630 = Ti.UI.createView({
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId630"
    });
    $.__views.menu.add($.__views.__alloyId630);
=======
    $.__views.__alloyId1001 = Ti.UI.createView({
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId1001"
    });
    $.__views.menu.add($.__views.__alloyId1001);
>>>>>>> origin/master
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
<<<<<<< HEAD
    $.__views.__alloyId631 = Ti.UI.createView({
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId631"
    });
    $.__views.menu.add($.__views.__alloyId631);
=======
    $.__views.__alloyId1002 = Ti.UI.createView({
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId1002"
    });
    $.__views.menu.add($.__views.__alloyId1002);
>>>>>>> origin/master
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
<<<<<<< HEAD
    var __alloyId632 = [];
    $.__views.__alloyId633 = Alloy.createController("seasonPass1", {
        id: "__alloyId633",
        __parentSymbol: __parentSymbol
    });
    __alloyId632.push($.__views.__alloyId633.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId634 = Alloy.createController("seasonPass2", {
        id: "__alloyId634",
        __parentSymbol: __parentSymbol
    });
    __alloyId632.push($.__views.__alloyId634.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId635 = Alloy.createController("seasonPass3", {
        id: "__alloyId635",
        __parentSymbol: __parentSymbol
    });
    __alloyId632.push($.__views.__alloyId635.getViewEx({
        recurse: true
    }));
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId632,
=======
    var __alloyId1003 = [];
    $.__views.__alloyId1004 = Alloy.createController("seasonPass1", {
        id: "__alloyId1004",
        __parentSymbol: __parentSymbol
    });
    __alloyId1003.push($.__views.__alloyId1004.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId1005 = Alloy.createController("seasonPass2", {
        id: "__alloyId1005",
        __parentSymbol: __parentSymbol
    });
    __alloyId1003.push($.__views.__alloyId1005.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId1006 = Alloy.createController("seasonPass3", {
        id: "__alloyId1006",
        __parentSymbol: __parentSymbol
    });
    __alloyId1003.push($.__views.__alloyId1006.getViewEx({
        recurse: true
    }));
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId1003,
>>>>>>> origin/master
        id: "scrollableView",
        showPagingControl: "false",
        scrollingEnabled: "false"
    });
    $.__views.seasonPass.add($.__views.scrollableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
<<<<<<< HEAD
    __defers["$.__views.__alloyId629!click!back"] && $.__views.__alloyId629.addEventListener("click", back);
=======
    __defers["$.__views.__alloyId1000!click!back"] && $.__views.__alloyId1000.addEventListener("click", back);
>>>>>>> origin/master
    __defers["$.__views.lbl1!touchend!goSlide"] && $.__views.lbl1.addEventListener("touchend", goSlide);
    __defers["$.__views.lbl2!touchend!goSlide"] && $.__views.lbl2.addEventListener("touchend", goSlide);
    __defers["$.__views.lbl3!touchend!goSlide"] && $.__views.lbl3.addEventListener("touchend", goSlide);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;