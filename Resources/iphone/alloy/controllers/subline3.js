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
        DRAWER.navigation("subline", 1);
    }
    function goSlide(event) {
        var index = event.source.mod;
        var arrViews = $.scrollableView.getViews();
        switch (index) {
          case "0":
            $.lbl1.backgroundColor = "#FFFFFF";
            $.lbl2.backgroundColor = "#F5F5F5";
            break;

          case "1":
            $.lbl1.backgroundColor = "#F5F5F5";
            $.lbl2.backgroundColor = "#FFFFFF";
        }
        $.scrollableView.scrollToView(arrViews[index]);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "subline3";
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
    $.__views.subline3 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "subline3"
    });
    $.__views.subline3 && $.addTopLevelView($.__views.subline3);
    $.__views.__alloyId2623 = Alloy.createController("_header", {
        id: "__alloyId2623",
        __parentSymbol: $.__views.subline3
    });
    $.__views.__alloyId2623.setParent($.__views.subline3);
    $.__views.__alloyId2624 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2624"
    });
    $.__views.subline3.add($.__views.__alloyId2624);
    $.__views.__alloyId2625 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2625"
    });
    $.__views.__alloyId2624.add($.__views.__alloyId2625);
    $.__views.__alloyId2626 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2626"
    });
    $.__views.__alloyId2624.add($.__views.__alloyId2626);
    back ? $.__views.__alloyId2626.addEventListener("click", back) : __defers["$.__views.__alloyId2626!click!back"] = true;
    $.__views.menu = Ti.UI.createView({
        id: "menu",
        layout: "horizontal",
        height: "50",
        width: "100%"
    });
    $.__views.subline3.add($.__views.menu);
    $.__views.lbl1 = Ti.UI.createLabel({
        text: "Account Details",
        id: "lbl1",
        mod: "0",
        height: "100%",
        width: "49.5%",
        textAlign: "center",
        backgroundColor: "#FFFFFF",
        color: "black"
    });
    $.__views.menu.add($.__views.lbl1);
    goSlide ? $.__views.lbl1.addEventListener("touchend", goSlide) : __defers["$.__views.lbl1!touchend!goSlide"] = true;
    $.__views.__alloyId2627 = Ti.UI.createView({
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "1%",
        id: "__alloyId2627"
    });
    $.__views.menu.add($.__views.__alloyId2627);
    $.__views.lbl2 = Ti.UI.createLabel({
        text: "My Profile",
        id: "lbl2",
        mod: "1",
        height: "100%",
        width: "49.5%",
        textAlign: "center",
        backgroundColor: "#F5F5F5",
        color: "black"
    });
    $.__views.menu.add($.__views.lbl2);
    goSlide ? $.__views.lbl2.addEventListener("touchend", goSlide) : __defers["$.__views.lbl2!touchend!goSlide"] = true;
    var __alloyId2628 = [];
    $.__views.__alloyId2629 = Alloy.createController("sublineDetails1", {
        id: "__alloyId2629",
        __parentSymbol: __parentSymbol
    });
    __alloyId2628.push($.__views.__alloyId2629.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId2630 = Alloy.createController("sublineDetails2", {
        id: "__alloyId2630",
        __parentSymbol: __parentSymbol
    });
    __alloyId2628.push($.__views.__alloyId2630.getViewEx({
        recurse: true
    }));
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId2628,
        id: "scrollableView",
        showPagingControl: "false",
        scrollingEnabled: "false"
    });
    $.__views.subline3.add($.__views.scrollableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2626!click!back"] && $.__views.__alloyId2626.addEventListener("click", back);
    __defers["$.__views.lbl1!touchend!goSlide"] && $.__views.lbl1.addEventListener("touchend", goSlide);
    __defers["$.__views.lbl2!touchend!goSlide"] && $.__views.lbl2.addEventListener("touchend", goSlide);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;