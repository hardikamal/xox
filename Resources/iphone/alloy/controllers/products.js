function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function prepaidPlus() {
        DRAWER.navigation("prepaidPlus", 2);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "products";
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
    $.__views.products = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "products"
    });
    $.__views.products && $.addTopLevelView($.__views.products);
    $.__views.__alloyId229 = Alloy.createController("_header", {
        id: "__alloyId229",
        __parentSymbol: $.__views.products
    });
    $.__views.__alloyId229.setParent($.__views.products);
    $.__views.__alloyId230 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#FBB62D",
        id: "__alloyId230"
    });
    $.__views.products.add($.__views.__alloyId230);
    $.__views.__alloyId231 = Ti.UI.createLabel({
        text: "Products",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId231"
    });
    $.__views.__alloyId230.add($.__views.__alloyId231);
    $.__views.__alloyId232 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId232"
    });
    $.__views.products.add($.__views.__alloyId232);
    $.__views.__alloyId233 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId233"
    });
    $.__views.__alloyId232.add($.__views.__alloyId233);
    prepaidPlus ? $.__views.__alloyId233.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId233!click!prepaidPlus"] = true;
    $.__views.__alloyId234 = Ti.UI.createImageView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId234"
    });
    $.__views.__alloyId233.add($.__views.__alloyId234);
    $.__views.__alloyId235 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId235"
    });
    $.__views.__alloyId233.add($.__views.__alloyId235);
    $.__views.__alloyId236 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId236"
    });
    $.__views.__alloyId232.add($.__views.__alloyId236);
    prepaidPlus ? $.__views.__alloyId236.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId236!click!prepaidPlus"] = true;
    $.__views.__alloyId237 = Ti.UI.createImageView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId237"
    });
    $.__views.__alloyId236.add($.__views.__alloyId237);
    $.__views.__alloyId238 = Ti.UI.createLabel({
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId238"
    });
    $.__views.__alloyId236.add($.__views.__alloyId238);
    $.__views.__alloyId239 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId239"
    });
    $.__views.__alloyId232.add($.__views.__alloyId239);
    prepaidPlus ? $.__views.__alloyId239.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId239!click!prepaidPlus"] = true;
    $.__views.__alloyId240 = Ti.UI.createImageView({
        backgroundColor: "#134D5B",
        height: "100%",
        width: "25%",
        id: "__alloyId240"
    });
    $.__views.__alloyId239.add($.__views.__alloyId240);
    $.__views.__alloyId241 = Ti.UI.createLabel({
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId241"
    });
    $.__views.__alloyId239.add($.__views.__alloyId241);
    $.__views.__alloyId242 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#28404C",
        id: "__alloyId242"
    });
    $.__views.__alloyId232.add($.__views.__alloyId242);
    prepaidPlus ? $.__views.__alloyId242.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId242!click!prepaidPlus"] = true;
    $.__views.__alloyId243 = Ti.UI.createImageView({
        backgroundColor: "#1A2D34",
        height: "100%",
        width: "25%",
        id: "__alloyId243"
    });
    $.__views.__alloyId242.add($.__views.__alloyId243);
    $.__views.__alloyId244 = Ti.UI.createLabel({
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId244"
    });
    $.__views.__alloyId242.add($.__views.__alloyId244);
    $.__views.__alloyId245 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#646461",
        id: "__alloyId245"
    });
    $.__views.__alloyId232.add($.__views.__alloyId245);
    prepaidPlus ? $.__views.__alloyId245.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId245!click!prepaidPlus"] = true;
    $.__views.__alloyId246 = Ti.UI.createImageView({
        backgroundColor: "#454543",
        height: "100%",
        width: "25%",
        id: "__alloyId246"
    });
    $.__views.__alloyId245.add($.__views.__alloyId246);
    $.__views.__alloyId247 = Ti.UI.createLabel({
        text: "IDD",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId247"
    });
    $.__views.__alloyId245.add($.__views.__alloyId247);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId233!click!prepaidPlus"] && $.__views.__alloyId233.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId236!click!prepaidPlus"] && $.__views.__alloyId236.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId239!click!prepaidPlus"] && $.__views.__alloyId239.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId242!click!prepaidPlus"] && $.__views.__alloyId242.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId245!click!prepaidPlus"] && $.__views.__alloyId245.addEventListener("click", prepaidPlus);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;