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
        DRAWER.navigation("onlinePurchases", 2);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "prepaidPack";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
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
    $.__views.prepaidPack = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaidPack"
    });
    $.__views.prepaidPack && $.addTopLevelView($.__views.prepaidPack);
    $.__views.__alloyId87 = Ti.UI.createView({
        height: "50",
        backgroundColor: "black",
        id: "__alloyId87"
    });
    $.__views.prepaidPack.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createView({
        left: "10",
        backgroundColor: "white",
        width: "40",
        height: "40",
        id: "__alloyId88"
    });
    $.__views.__alloyId87.add($.__views.__alloyId88);
    back ? $.__views.__alloyId88.addEventListener("click", back) : __defers["$.__views.__alloyId88!click!back"] = true;
    $.__views.__alloyId89 = Ti.UI.createLabel({
        text: "XOX",
        color: "white",
        id: "__alloyId89"
    });
    $.__views.__alloyId87.add($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId90"
    });
    $.__views.prepaidPack.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId91"
    });
    $.__views.__alloyId90.add($.__views.__alloyId91);
    $.__views.__alloyId92 = Ti.UI.createView({
        backgroundColor: "black",
        width: "40",
        height: "40",
        right: "10",
        id: "__alloyId92"
    });
    $.__views.__alloyId90.add($.__views.__alloyId92);
    back ? $.__views.__alloyId92.addEventListener("click", back) : __defers["$.__views.__alloyId92!click!back"] = true;
    $.__views.__alloyId93 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId93"
    });
    $.__views.prepaidPack.add($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createLabel({
        text: "Step 1 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId94"
    });
    $.__views.__alloyId93.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createLabel({
        text: "ORDERING",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId95"
    });
    $.__views.__alloyId93.add($.__views.__alloyId95);
    $.__views.__alloyId96 = Ti.UI.createView({
        layout: "vertical",
        width: "90%",
        backgroundColor: "red",
        id: "__alloyId96"
    });
    $.__views.prepaidPack.add($.__views.__alloyId96);
    $.__views.__alloyId97 = Ti.UI.createView({
        layout: "horizontal",
        height: "100",
        backgroundColor: "green",
        id: "__alloyId97"
    });
    $.__views.__alloyId96.add($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createLabel({
        text: "Sim Type",
        color: "black",
        width: "40%",
        id: "__alloyId98"
    });
    $.__views.__alloyId97.add($.__views.__alloyId98);
    $.__views.picker = Ti.UI.createView({
        id: "picker",
        width: "60%"
    });
    $.__views.__alloyId97.add($.__views.picker);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId88!click!back"] && $.__views.__alloyId88.addEventListener("click", back);
    __defers["$.__views.__alloyId92!click!back"] && $.__views.__alloyId92.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;