function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function navMenu(e) {
        switch (e.index) {
          case 0:
            DRAWER.navigation("myAccount", 2);
            break;

          case 1:
            DRAWER.navigation("promo", 2);
            break;

          case 2:
            DRAWER.navigation("products", 2);
            break;

          case 3:
            DRAWER.navigation("onlinePurchases", 2);
            break;

          case 4:
            DRAWER.navigation("orderHistory", 2);
            break;

          case 5:
            DRAWER.navigation("contact", 2);
            break;

          case 6:
            DRAWER.navigation("settings", 2);
            break;

          case 7:
            DRAWER.navigation("home", 2);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu";
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
    $.__views.menu = Ti.UI.createView({
        backgroundColor: "#262626",
        id: "menu"
    });
    $.__views.menu && $.addTopLevelView($.__views.menu);
    var __alloyId52 = [];
    $.__views.__alloyId53 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId53"
    });
    __alloyId52.push($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        left: 20,
        color: "#ffffff",
        font: {
            fontSize: "12dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "My Account",
        apiName: "Button",
        id: "__alloyId54"
    });
    $.__views.__alloyId53.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId55"
    });
    __alloyId52.push($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        left: 20,
        color: "#ffffff",
        font: {
            fontSize: "12dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "Promo / News",
        apiName: "Button",
        id: "__alloyId56"
    });
    $.__views.__alloyId55.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId57"
    });
    __alloyId52.push($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        left: 20,
        color: "#ffffff",
        font: {
            fontSize: "12dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "Products",
        apiName: "Button",
        id: "__alloyId58"
    });
    $.__views.__alloyId57.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId59"
    });
    __alloyId52.push($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        left: 20,
        color: "#ffffff",
        font: {
            fontSize: "12dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "Online Purchases",
        apiName: "Button",
        id: "__alloyId60"
    });
    $.__views.__alloyId59.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId61"
    });
    __alloyId52.push($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        left: 20,
        color: "#ffffff",
        font: {
            fontSize: "12dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "Ordering History",
        apiName: "Button",
        id: "__alloyId62"
    });
    $.__views.__alloyId61.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId63"
    });
    __alloyId52.push($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        left: 20,
        color: "#ffffff",
        font: {
            fontSize: "12dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "Contact",
        apiName: "Button",
        id: "__alloyId64"
    });
    $.__views.__alloyId63.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId65"
    });
    __alloyId52.push($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        left: 20,
        color: "#ffffff",
        font: {
            fontSize: "12dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "Settings",
        apiName: "Button",
        id: "__alloyId66"
    });
    $.__views.__alloyId65.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId67"
    });
    __alloyId52.push($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        left: 20,
        color: "#ffffff",
        font: {
            fontSize: "12dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "Home",
        apiName: "Button",
        id: "__alloyId68"
    });
    $.__views.__alloyId67.add($.__views.__alloyId68);
    $.__views.__alloyId51 = Ti.UI.createTableView({
        separatorColor: "#454545",
        backgroundColor: "#262626",
        top: 50,
        separatorInsets: {
            left: 0,
            right: 0
        },
        data: __alloyId52,
        id: "__alloyId51"
    });
    $.__views.menu.add($.__views.__alloyId51);
    navMenu ? $.__views.__alloyId51.addEventListener("click", navMenu) : __defers["$.__views.__alloyId51!click!navMenu"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId51!click!navMenu"] && $.__views.__alloyId51.addEventListener("click", navMenu);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;