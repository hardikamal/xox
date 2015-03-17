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
    $.__views.__alloyId592 = Alloy.createController("_header", {
        id: "__alloyId592",
        __parentSymbol: $.__views.seasonPass
    });
    $.__views.__alloyId592.setParent($.__views.seasonPass);
    $.__views.__alloyId593 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId593"
    });
    $.__views.seasonPass.add($.__views.__alloyId593);
    $.__views.__alloyId594 = Ti.UI.createLabel({
        text: "Season Pass",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId594"
    });
    $.__views.__alloyId593.add($.__views.__alloyId594);
    $.__views.__alloyId595 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId595"
    });
    $.__views.__alloyId593.add($.__views.__alloyId595);
    back ? $.__views.__alloyId595.addEventListener("click", back) : __defers["$.__views.__alloyId595!click!back"] = true;
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
    $.__views.__alloyId596 = Ti.UI.createView({
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId596"
    });
    $.__views.menu.add($.__views.__alloyId596);
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
    $.__views.__alloyId597 = Ti.UI.createView({
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId597"
    });
    $.__views.menu.add($.__views.__alloyId597);
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
    var __alloyId598 = [];
    $.__views.__alloyId599 = Alloy.createController("seasonPass1", {
        id: "__alloyId599",
        __parentSymbol: __parentSymbol
    });
    __alloyId598.push($.__views.__alloyId599.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId600 = Alloy.createController("seasonPass2", {
        id: "__alloyId600",
        __parentSymbol: __parentSymbol
    });
    __alloyId598.push($.__views.__alloyId600.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId601 = Alloy.createController("seasonPass3", {
        id: "__alloyId601",
        __parentSymbol: __parentSymbol
    });
    __alloyId598.push($.__views.__alloyId601.getViewEx({
        recurse: true
    }));
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId598,
        id: "scrollableView",
        showPagingControl: "false",
        scrollingEnabled: "false"
    });
    $.__views.seasonPass.add($.__views.scrollableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId595!click!back"] && $.__views.__alloyId595.addEventListener("click", back);
    __defers["$.__views.lbl1!touchend!goSlide"] && $.__views.lbl1.addEventListener("touchend", goSlide);
    __defers["$.__views.lbl2!touchend!goSlide"] && $.__views.lbl2.addEventListener("touchend", goSlide);
    __defers["$.__views.lbl3!touchend!goSlide"] && $.__views.lbl3.addEventListener("touchend", goSlide);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;