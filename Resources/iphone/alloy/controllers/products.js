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
    $.__views.__alloyId323 = Alloy.createController("_header", {
        id: "__alloyId323",
        __parentSymbol: $.__views.products
    });
    $.__views.__alloyId323.setParent($.__views.products);
    $.__views.__alloyId324 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#FBB62D",
        id: "__alloyId324"
    });
    $.__views.products.add($.__views.__alloyId324);
    $.__views.__alloyId325 = Ti.UI.createLabel({
        text: "Products",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId325"
    });
    $.__views.__alloyId324.add($.__views.__alloyId325);
    $.__views.__alloyId326 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId326"
    });
    $.__views.products.add($.__views.__alloyId326);
    $.__views.__alloyId327 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId327"
    });
    $.__views.__alloyId326.add($.__views.__alloyId327);
    prepaidPlus ? $.__views.__alloyId327.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId327!click!prepaidPlus"] = true;
    $.__views.__alloyId328 = Ti.UI.createImageView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId328"
    });
    $.__views.__alloyId327.add($.__views.__alloyId328);
    $.__views.__alloyId329 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId329"
    });
    $.__views.__alloyId327.add($.__views.__alloyId329);
    $.__views.__alloyId330 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId330"
    });
    $.__views.__alloyId326.add($.__views.__alloyId330);
    prepaidPlus ? $.__views.__alloyId330.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId330!click!prepaidPlus"] = true;
    $.__views.__alloyId331 = Ti.UI.createImageView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId331"
    });
    $.__views.__alloyId330.add($.__views.__alloyId331);
    $.__views.__alloyId332 = Ti.UI.createLabel({
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId332"
    });
    $.__views.__alloyId330.add($.__views.__alloyId332);
    $.__views.__alloyId333 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId333"
    });
    $.__views.__alloyId326.add($.__views.__alloyId333);
    prepaidPlus ? $.__views.__alloyId333.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId333!click!prepaidPlus"] = true;
    $.__views.__alloyId334 = Ti.UI.createImageView({
        backgroundColor: "#134D5B",
        height: "100%",
        width: "25%",
        id: "__alloyId334"
    });
    $.__views.__alloyId333.add($.__views.__alloyId334);
    $.__views.__alloyId335 = Ti.UI.createLabel({
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId335"
    });
    $.__views.__alloyId333.add($.__views.__alloyId335);
    $.__views.__alloyId336 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#28404C",
        id: "__alloyId336"
    });
    $.__views.__alloyId326.add($.__views.__alloyId336);
    prepaidPlus ? $.__views.__alloyId336.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId336!click!prepaidPlus"] = true;
    $.__views.__alloyId337 = Ti.UI.createImageView({
        backgroundColor: "#1A2D34",
        height: "100%",
        width: "25%",
        id: "__alloyId337"
    });
    $.__views.__alloyId336.add($.__views.__alloyId337);
    $.__views.__alloyId338 = Ti.UI.createLabel({
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId338"
    });
    $.__views.__alloyId336.add($.__views.__alloyId338);
    $.__views.__alloyId339 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#646461",
        id: "__alloyId339"
    });
    $.__views.__alloyId326.add($.__views.__alloyId339);
    prepaidPlus ? $.__views.__alloyId339.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId339!click!prepaidPlus"] = true;
    $.__views.__alloyId340 = Ti.UI.createImageView({
        backgroundColor: "#454543",
        height: "100%",
        width: "25%",
        id: "__alloyId340"
    });
    $.__views.__alloyId339.add($.__views.__alloyId340);
    $.__views.__alloyId341 = Ti.UI.createLabel({
        text: "IDD",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId341"
    });
    $.__views.__alloyId339.add($.__views.__alloyId341);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId327!click!prepaidPlus"] && $.__views.__alloyId327.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId330!click!prepaidPlus"] && $.__views.__alloyId330.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId333!click!prepaidPlus"] && $.__views.__alloyId333.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId336!click!prepaidPlus"] && $.__views.__alloyId336.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId339!click!prepaidPlus"] && $.__views.__alloyId339.addEventListener("click", prepaidPlus);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;