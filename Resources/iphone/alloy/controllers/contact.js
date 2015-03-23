function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function goSlide(event) {
        var index = event.source.mod;
        var arrViews = $.scrollableView.getViews();
        switch (index) {
          case "0":
            $.lbl1.backgroundColor = "#453363";
            $.lbl1.color = "#AA9DB6";
            $.lbl2.backgroundColor = "#E6E7E9";
            $.lbl2.color = "#4CC4D2";
            $.lbl3.backgroundColor = "#E6E7E9";
            $.lbl3.color = "#4CC4D2";
            break;

          case "1":
            $.lbl1.backgroundColor = "#E6E7E9";
            $.lbl1.color = "#4CC4D2";
            $.lbl2.backgroundColor = "#453363";
            $.lbl2.color = "#AA9DB6";
            $.lbl3.backgroundColor = "#E6E7E9";
            $.lbl3.color = "#4CC4D2";
            break;

          case "2":
            $.lbl1.backgroundColor = "#E6E7E9";
            $.lbl1.color = "#4CC4D2";
            $.lbl2.backgroundColor = "#E6E7E9";
            $.lbl2.color = "#4CC4D2";
            $.lbl3.backgroundColor = "#453363";
            $.lbl3.color = "#AA9DB6";
        }
        $.scrollableView.scrollToView(arrViews[index]);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "contact";
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
    $.__views.win = Ti.UI.createView({
        layout: "vertical",
        id: "win",
        backgroundColor: "white"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.__alloyId45 = Alloy.createController("_header", {
        id: "__alloyId45",
        __parentSymbol: $.__views.win
    });
    $.__views.__alloyId45.setParent($.__views.win);
    $.__views.__alloyId46 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#836EAF",
        id: "__alloyId46"
    });
    $.__views.win.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createLabel({
        text: "Contact us",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId47"
    });
    $.__views.__alloyId46.add($.__views.__alloyId47);
    $.__views.menu = Ti.UI.createView({
        id: "menu",
        layout: "horizontal",
        height: "50",
        width: "100%"
    });
    $.__views.win.add($.__views.menu);
    $.__views.lbl1 = Ti.UI.createLabel({
        text: "Our Offices",
        id: "lbl1",
        mod: "0",
        height: "100%",
        width: "33%",
        textAlign: "center",
        backgroundColor: "#453363",
        color: "#AA9DB6"
    });
    $.__views.menu.add($.__views.lbl1);
    goSlide ? $.__views.lbl1.addEventListener("touchend", goSlide) : __defers["$.__views.lbl1!touchend!goSlide"] = true;
    $.__views.__alloyId48 = Ti.UI.createView({
        backgroundColor: "#4CC4D2",
        height: "100%",
        width: "0.45%",
        id: "__alloyId48"
    });
    $.__views.menu.add($.__views.__alloyId48);
    $.__views.lbl2 = Ti.UI.createLabel({
        text: "Care Center",
        id: "lbl2",
        mod: "1",
        height: "100%",
        width: "33%",
        textAlign: "center",
        backgroundColor: "#E6E7E9",
        color: "#4CC4D2"
    });
    $.__views.menu.add($.__views.lbl2);
    goSlide ? $.__views.lbl2.addEventListener("touchend", goSlide) : __defers["$.__views.lbl2!touchend!goSlide"] = true;
    $.__views.__alloyId49 = Ti.UI.createView({
        backgroundColor: "#4CC4D2",
        height: "100%",
        width: "0.45%",
        id: "__alloyId49"
    });
    $.__views.menu.add($.__views.__alloyId49);
    $.__views.lbl3 = Ti.UI.createLabel({
        text: "XOX Dealers",
        id: "lbl3",
        mod: "2",
        height: "100%",
        width: "33%",
        textAlign: "center",
        backgroundColor: "#E6E7E9",
        color: "#4CC4D2"
    });
    $.__views.menu.add($.__views.lbl3);
    goSlide ? $.__views.lbl3.addEventListener("touchend", goSlide) : __defers["$.__views.lbl3!touchend!goSlide"] = true;
    var __alloyId50 = [];
    $.__views.__alloyId51 = Alloy.createController("contact1", {
        id: "__alloyId51",
        __parentSymbol: __parentSymbol
    });
    __alloyId50.push($.__views.__alloyId51.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId52 = Alloy.createController("contact2", {
        id: "__alloyId52",
        __parentSymbol: __parentSymbol
    });
    __alloyId50.push($.__views.__alloyId52.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId53 = Alloy.createController("contact3", {
        id: "__alloyId53",
        __parentSymbol: __parentSymbol
    });
    __alloyId50.push($.__views.__alloyId53.getViewEx({
        recurse: true
    }));
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId50,
        id: "scrollableView",
        showPagingControl: "false",
        scrollingEnabled: "false"
    });
    $.__views.win.add($.__views.scrollableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.lbl1!touchend!goSlide"] && $.__views.lbl1.addEventListener("touchend", goSlide);
    __defers["$.__views.lbl2!touchend!goSlide"] && $.__views.lbl2.addEventListener("touchend", goSlide);
    __defers["$.__views.lbl3!touchend!goSlide"] && $.__views.lbl3.addEventListener("touchend", goSlide);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;