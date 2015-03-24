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
            break;

          case 8:
            DRAWER.navigation("familyFriend", 2);
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
    var __alloyId1090 = [];
    $.__views.__alloyId1091 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1091"
    });
    __alloyId1090.push($.__views.__alloyId1091);
    $.__views.__alloyId1092 = Ti.UI.createLabel({
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
        id: "__alloyId1092"
    });
    $.__views.__alloyId1091.add($.__views.__alloyId1092);
    $.__views.__alloyId1093 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1093"
    });
    __alloyId1090.push($.__views.__alloyId1093);
    $.__views.__alloyId1094 = Ti.UI.createLabel({
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
        id: "__alloyId1094"
    });
    $.__views.__alloyId1093.add($.__views.__alloyId1094);
    $.__views.__alloyId1095 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1095"
    });
    __alloyId1090.push($.__views.__alloyId1095);
    $.__views.__alloyId1096 = Ti.UI.createLabel({
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
        id: "__alloyId1096"
    });
    $.__views.__alloyId1095.add($.__views.__alloyId1096);
    $.__views.__alloyId1097 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1097"
    });
    __alloyId1090.push($.__views.__alloyId1097);
    $.__views.__alloyId1098 = Ti.UI.createLabel({
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
        id: "__alloyId1098"
    });
    $.__views.__alloyId1097.add($.__views.__alloyId1098);
    $.__views.__alloyId1099 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1099"
    });
    __alloyId1090.push($.__views.__alloyId1099);
    $.__views.__alloyId1100 = Ti.UI.createLabel({
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
        id: "__alloyId1100"
    });
    $.__views.__alloyId1099.add($.__views.__alloyId1100);
    $.__views.__alloyId1101 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1101"
    });
    __alloyId1090.push($.__views.__alloyId1101);
    $.__views.__alloyId1102 = Ti.UI.createLabel({
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
        id: "__alloyId1102"
    });
    $.__views.__alloyId1101.add($.__views.__alloyId1102);
    $.__views.__alloyId1103 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1103"
    });
    __alloyId1090.push($.__views.__alloyId1103);
    $.__views.__alloyId1104 = Ti.UI.createLabel({
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
        id: "__alloyId1104"
    });
    $.__views.__alloyId1103.add($.__views.__alloyId1104);
    $.__views.__alloyId1105 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1105"
    });
    __alloyId1090.push($.__views.__alloyId1105);
    $.__views.__alloyId1106 = Ti.UI.createLabel({
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
        id: "__alloyId1106"
    });
    $.__views.__alloyId1105.add($.__views.__alloyId1106);
    $.__views.__alloyId1107 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1107"
    });
    __alloyId1090.push($.__views.__alloyId1107);
    $.__views.__alloyId1108 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        left: 20,
        color: "#ffffff",
        font: {
            fontSize: "12dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "New",
        apiName: "Button",
        id: "__alloyId1108"
    });
    $.__views.__alloyId1107.add($.__views.__alloyId1108);
    $.__views.__alloyId1089 = Ti.UI.createTableView({
        separatorColor: "#454545",
        backgroundColor: "#262626",
        top: 50,
        separatorInsets: {
            left: 0,
            right: 0
        },
        data: __alloyId1090,
        id: "__alloyId1089"
    });
    $.__views.menu.add($.__views.__alloyId1089);
    navMenu ? $.__views.__alloyId1089.addEventListener("click", navMenu) : __defers["$.__views.__alloyId1089!click!navMenu"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId1089!click!navMenu"] && $.__views.__alloyId1089.addEventListener("click", navMenu);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;