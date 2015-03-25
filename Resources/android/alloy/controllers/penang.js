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
        DRAWER.navigation("onlinePurchases", 1);
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
    this.__controllerPath = "penang";
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
    $.__views.penang = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "penang"
    });
    $.__views.penang && $.addTopLevelView($.__views.penang);
    $.__views.__alloyId1738 = Alloy.createController("_header", {
        id: "__alloyId1738",
        __parentSymbol: $.__views.penang
    });
    $.__views.__alloyId1738.setParent($.__views.penang);
    $.__views.__alloyId1739 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1739"
    });
    $.__views.penang.add($.__views.__alloyId1739);
    $.__views.__alloyId1740 = Ti.UI.createLabel({
        text: "PENANG PACK UNITED PACK SIGNATURE BASIC",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1740"
    });
    $.__views.__alloyId1739.add($.__views.__alloyId1740);
    $.__views.__alloyId1741 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1741"
    });
    $.__views.__alloyId1739.add($.__views.__alloyId1741);
    back ? $.__views.__alloyId1741.addEventListener("click", back) : __defers["$.__views.__alloyId1741!click!back"] = true;
    $.__views.menu = Ti.UI.createView({
        id: "menu",
        layout: "horizontal",
        height: "50",
        width: "100%"
    });
    $.__views.penang.add($.__views.menu);
    $.__views.lbl1 = Ti.UI.createLabel({
        text: "United\nPack",
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
    $.__views.__alloyId1742 = Ti.UI.createView({
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId1742"
    });
    $.__views.menu.add($.__views.__alloyId1742);
    $.__views.lbl2 = Ti.UI.createLabel({
        text: "Signature\nPack",
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
    $.__views.__alloyId1743 = Ti.UI.createView({
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId1743"
    });
    $.__views.menu.add($.__views.__alloyId1743);
    $.__views.lbl3 = Ti.UI.createLabel({
        text: "Penang\nPlan",
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
    var __alloyId1744 = [];
    $.__views.__alloyId1745 = Alloy.createController("penang1", {
        id: "__alloyId1745",
        __parentSymbol: __parentSymbol
    });
    __alloyId1744.push($.__views.__alloyId1745.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId1746 = Alloy.createController("penang2", {
        id: "__alloyId1746",
        __parentSymbol: __parentSymbol
    });
    __alloyId1744.push($.__views.__alloyId1746.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId1747 = Alloy.createController("penang3", {
        id: "__alloyId1747",
        __parentSymbol: __parentSymbol
    });
    __alloyId1744.push($.__views.__alloyId1747.getViewEx({
        recurse: true
    }));
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId1744,
        id: "scrollableView",
        showPagingControl: "false",
        scrollingEnabled: "false"
    });
    $.__views.penang.add($.__views.scrollableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1741!click!back"] && $.__views.__alloyId1741.addEventListener("click", back);
    __defers["$.__views.lbl1!touchend!goSlide"] && $.__views.lbl1.addEventListener("touchend", goSlide);
    __defers["$.__views.lbl2!touchend!goSlide"] && $.__views.lbl2.addEventListener("touchend", goSlide);
    __defers["$.__views.lbl3!touchend!goSlide"] && $.__views.lbl3.addEventListener("touchend", goSlide);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;