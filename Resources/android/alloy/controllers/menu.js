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

          case 5:
            DRAWER.navigation("contact", 2);
            break;

          case 6:
            DRAWER.navigation("support", 2);
            break;

          case 7:
            DRAWER.navigation("settings", 2);
            break;

          case 8:
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
    var __alloyId1232 = [];
    $.__views.__alloyId1233 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1233"
    });
    __alloyId1232.push($.__views.__alloyId1233);
    $.__views.__alloyId1234 = Ti.UI.createLabel({
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
        id: "__alloyId1234"
    });
    $.__views.__alloyId1233.add($.__views.__alloyId1234);
    $.__views.__alloyId1235 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1235"
    });
    __alloyId1232.push($.__views.__alloyId1235);
    $.__views.__alloyId1236 = Ti.UI.createLabel({
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
        id: "__alloyId1236"
    });
    $.__views.__alloyId1235.add($.__views.__alloyId1236);
    $.__views.__alloyId1237 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1237"
    });
    __alloyId1232.push($.__views.__alloyId1237);
    $.__views.__alloyId1238 = Ti.UI.createLabel({
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
        id: "__alloyId1238"
    });
    $.__views.__alloyId1237.add($.__views.__alloyId1238);
    $.__views.__alloyId1239 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1239"
    });
    __alloyId1232.push($.__views.__alloyId1239);
    $.__views.__alloyId1240 = Ti.UI.createLabel({
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
        id: "__alloyId1240"
    });
    $.__views.__alloyId1239.add($.__views.__alloyId1240);
    $.__views.__alloyId1241 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1241"
    });
    __alloyId1232.push($.__views.__alloyId1241);
    $.__views.__alloyId1242 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        left: 20,
        color: "#ffffff",
        font: {
            fontSize: "12dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "MNP",
        apiName: "Button",
        id: "__alloyId1242"
    });
    $.__views.__alloyId1241.add($.__views.__alloyId1242);
    $.__views.__alloyId1243 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1243"
    });
    __alloyId1232.push($.__views.__alloyId1243);
    $.__views.__alloyId1244 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        left: 20,
        color: "#ffffff",
        font: {
            fontSize: "12dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "Contact Us",
        apiName: "Button",
        id: "__alloyId1244"
    });
    $.__views.__alloyId1243.add($.__views.__alloyId1244);
    $.__views.__alloyId1245 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1245"
    });
    __alloyId1232.push($.__views.__alloyId1245);
    $.__views.__alloyId1246 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        left: 20,
        color: "#ffffff",
        font: {
            fontSize: "12dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "Support",
        apiName: "Button",
        id: "__alloyId1246"
    });
    $.__views.__alloyId1245.add($.__views.__alloyId1246);
    $.__views.__alloyId1247 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1247"
    });
    __alloyId1232.push($.__views.__alloyId1247);
    $.__views.__alloyId1248 = Ti.UI.createLabel({
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
        id: "__alloyId1248"
    });
    $.__views.__alloyId1247.add($.__views.__alloyId1248);
    $.__views.__alloyId1249 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1249"
    });
    __alloyId1232.push($.__views.__alloyId1249);
    $.__views.__alloyId1250 = Ti.UI.createLabel({
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
        id: "__alloyId1250"
    });
    $.__views.__alloyId1249.add($.__views.__alloyId1250);
    $.__views.__alloyId1231 = Ti.UI.createTableView({
        separatorColor: "#454545",
        backgroundColor: "#262626",
        top: 50,
        separatorInsets: {
            left: 0,
            right: 0
        },
        data: __alloyId1232,
        id: "__alloyId1231"
    });
    $.__views.menu.add($.__views.__alloyId1231);
    navMenu ? $.__views.__alloyId1231.addEventListener("click", navMenu) : __defers["$.__views.__alloyId1231!click!navMenu"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId1231!click!navMenu"] && $.__views.__alloyId1231.addEventListener("click", navMenu);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;