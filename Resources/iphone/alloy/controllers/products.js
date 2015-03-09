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
        DRAWER.navigation("home", 2);
    }
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
    $.__views.__alloyId141 = Ti.UI.createView({
        height: "50",
        backgroundColor: "black",
        id: "__alloyId141"
    });
    $.__views.products.add($.__views.__alloyId141);
    $.__views.__alloyId142 = Ti.UI.createView({
        left: "10",
        backgroundColor: "white",
        width: "40",
        height: "40",
        id: "__alloyId142"
    });
    $.__views.__alloyId141.add($.__views.__alloyId142);
    back ? $.__views.__alloyId142.addEventListener("click", back) : __defers["$.__views.__alloyId142!click!back"] = true;
    $.__views.__alloyId143 = Ti.UI.createLabel({
        text: "XOX",
        color: "white",
        id: "__alloyId143"
    });
    $.__views.__alloyId141.add($.__views.__alloyId143);
    $.__views.__alloyId144 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#FBB62D",
        id: "__alloyId144"
    });
    $.__views.products.add($.__views.__alloyId144);
    $.__views.__alloyId145 = Ti.UI.createLabel({
        text: "Products",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId145"
    });
    $.__views.__alloyId144.add($.__views.__alloyId145);
    $.__views.__alloyId146 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId146"
    });
    $.__views.products.add($.__views.__alloyId146);
    $.__views.__alloyId147 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId147"
    });
    $.__views.__alloyId146.add($.__views.__alloyId147);
    prepaidPlus ? $.__views.__alloyId147.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId147!click!prepaidPlus"] = true;
    $.__views.__alloyId148 = Ti.UI.createImageView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId148"
    });
    $.__views.__alloyId147.add($.__views.__alloyId148);
    $.__views.__alloyId149 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId149"
    });
    $.__views.__alloyId147.add($.__views.__alloyId149);
    $.__views.__alloyId150 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId150"
    });
    $.__views.__alloyId146.add($.__views.__alloyId150);
    prepaidPlus ? $.__views.__alloyId150.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId150!click!prepaidPlus"] = true;
    $.__views.__alloyId151 = Ti.UI.createImageView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId151"
    });
    $.__views.__alloyId150.add($.__views.__alloyId151);
    $.__views.__alloyId152 = Ti.UI.createLabel({
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId152"
    });
    $.__views.__alloyId150.add($.__views.__alloyId152);
    $.__views.__alloyId153 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId153"
    });
    $.__views.__alloyId146.add($.__views.__alloyId153);
    prepaidPlus ? $.__views.__alloyId153.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId153!click!prepaidPlus"] = true;
    $.__views.__alloyId154 = Ti.UI.createImageView({
        backgroundColor: "#134D5B",
        height: "100%",
        width: "25%",
        id: "__alloyId154"
    });
    $.__views.__alloyId153.add($.__views.__alloyId154);
    $.__views.__alloyId155 = Ti.UI.createLabel({
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId155"
    });
    $.__views.__alloyId153.add($.__views.__alloyId155);
    $.__views.__alloyId156 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#28404C",
        id: "__alloyId156"
    });
    $.__views.__alloyId146.add($.__views.__alloyId156);
    prepaidPlus ? $.__views.__alloyId156.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId156!click!prepaidPlus"] = true;
    $.__views.__alloyId157 = Ti.UI.createImageView({
        backgroundColor: "#1A2D34",
        height: "100%",
        width: "25%",
        id: "__alloyId157"
    });
    $.__views.__alloyId156.add($.__views.__alloyId157);
    $.__views.__alloyId158 = Ti.UI.createLabel({
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId158"
    });
    $.__views.__alloyId156.add($.__views.__alloyId158);
    $.__views.__alloyId159 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#646461",
        id: "__alloyId159"
    });
    $.__views.__alloyId146.add($.__views.__alloyId159);
    prepaidPlus ? $.__views.__alloyId159.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId159!click!prepaidPlus"] = true;
    $.__views.__alloyId160 = Ti.UI.createImageView({
        backgroundColor: "#454543",
        height: "100%",
        width: "25%",
        id: "__alloyId160"
    });
    $.__views.__alloyId159.add($.__views.__alloyId160);
    $.__views.__alloyId161 = Ti.UI.createLabel({
        text: "IDD",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId161"
    });
    $.__views.__alloyId159.add($.__views.__alloyId161);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId142!click!back"] && $.__views.__alloyId142.addEventListener("click", back);
    __defers["$.__views.__alloyId147!click!prepaidPlus"] && $.__views.__alloyId147.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId150!click!prepaidPlus"] && $.__views.__alloyId150.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId153!click!prepaidPlus"] && $.__views.__alloyId153.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId156!click!prepaidPlus"] && $.__views.__alloyId156.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId159!click!prepaidPlus"] && $.__views.__alloyId159.addEventListener("click", prepaidPlus);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;