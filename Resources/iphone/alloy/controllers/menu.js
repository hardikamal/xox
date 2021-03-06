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
    var __alloyId1203 = [];
    $.__views.__alloyId1204 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1204"
    });
    __alloyId1203.push($.__views.__alloyId1204);
    $.__views.__alloyId1205 = Ti.UI.createLabel({
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
        id: "__alloyId1205"
    });
    $.__views.__alloyId1204.add($.__views.__alloyId1205);
    $.__views.__alloyId1206 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1206"
    });
    __alloyId1203.push($.__views.__alloyId1206);
    $.__views.__alloyId1207 = Ti.UI.createLabel({
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
        id: "__alloyId1207"
    });
    $.__views.__alloyId1206.add($.__views.__alloyId1207);
    $.__views.__alloyId1208 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1208"
    });
    __alloyId1203.push($.__views.__alloyId1208);
    $.__views.__alloyId1209 = Ti.UI.createLabel({
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
        id: "__alloyId1209"
    });
    $.__views.__alloyId1208.add($.__views.__alloyId1209);
    $.__views.__alloyId1210 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1210"
    });
    __alloyId1203.push($.__views.__alloyId1210);
    $.__views.__alloyId1211 = Ti.UI.createLabel({
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
        id: "__alloyId1211"
    });
    $.__views.__alloyId1210.add($.__views.__alloyId1211);
    $.__views.__alloyId1212 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1212"
    });
    __alloyId1203.push($.__views.__alloyId1212);
    $.__views.__alloyId1213 = Ti.UI.createLabel({
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
        id: "__alloyId1213"
    });
    $.__views.__alloyId1212.add($.__views.__alloyId1213);
    $.__views.__alloyId1214 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1214"
    });
    __alloyId1203.push($.__views.__alloyId1214);
    $.__views.__alloyId1215 = Ti.UI.createLabel({
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
        id: "__alloyId1215"
    });
    $.__views.__alloyId1214.add($.__views.__alloyId1215);
    $.__views.__alloyId1216 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1216"
    });
    __alloyId1203.push($.__views.__alloyId1216);
    $.__views.__alloyId1217 = Ti.UI.createLabel({
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
        id: "__alloyId1217"
    });
    $.__views.__alloyId1216.add($.__views.__alloyId1217);
    $.__views.__alloyId1218 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1218"
    });
    __alloyId1203.push($.__views.__alloyId1218);
    $.__views.__alloyId1219 = Ti.UI.createLabel({
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
        id: "__alloyId1219"
    });
    $.__views.__alloyId1218.add($.__views.__alloyId1219);
    $.__views.__alloyId1220 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1220"
    });
    __alloyId1203.push($.__views.__alloyId1220);
    $.__views.__alloyId1221 = Ti.UI.createLabel({
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
        id: "__alloyId1221"
    });
    $.__views.__alloyId1220.add($.__views.__alloyId1221);
    $.__views.__alloyId1202 = Ti.UI.createTableView({
        separatorColor: "#454545",
        backgroundColor: "#262626",
        top: 50,
        separatorInsets: {
            left: 0,
            right: 0
        },
        data: __alloyId1203,
        id: "__alloyId1202"
    });
    $.__views.menu.add($.__views.__alloyId1202);
    navMenu ? $.__views.__alloyId1202.addEventListener("click", navMenu) : __defers["$.__views.__alloyId1202!click!navMenu"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId1202!click!navMenu"] && $.__views.__alloyId1202.addEventListener("click", navMenu);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;