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
    var __alloyId1160 = [];
    $.__views.__alloyId1161 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1161"
    });
    __alloyId1160.push($.__views.__alloyId1161);
    $.__views.__alloyId1162 = Ti.UI.createLabel({
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
        id: "__alloyId1162"
    });
    $.__views.__alloyId1161.add($.__views.__alloyId1162);
    $.__views.__alloyId1163 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1163"
    });
    __alloyId1160.push($.__views.__alloyId1163);
    $.__views.__alloyId1164 = Ti.UI.createLabel({
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
        id: "__alloyId1164"
    });
    $.__views.__alloyId1163.add($.__views.__alloyId1164);
    $.__views.__alloyId1165 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1165"
    });
    __alloyId1160.push($.__views.__alloyId1165);
    $.__views.__alloyId1166 = Ti.UI.createLabel({
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
        id: "__alloyId1166"
    });
    $.__views.__alloyId1165.add($.__views.__alloyId1166);
    $.__views.__alloyId1167 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1167"
    });
    __alloyId1160.push($.__views.__alloyId1167);
    $.__views.__alloyId1168 = Ti.UI.createLabel({
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
        id: "__alloyId1168"
    });
    $.__views.__alloyId1167.add($.__views.__alloyId1168);
    $.__views.__alloyId1169 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1169"
    });
    __alloyId1160.push($.__views.__alloyId1169);
    $.__views.__alloyId1170 = Ti.UI.createLabel({
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
        id: "__alloyId1170"
    });
    $.__views.__alloyId1169.add($.__views.__alloyId1170);
    $.__views.__alloyId1171 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1171"
    });
    __alloyId1160.push($.__views.__alloyId1171);
    $.__views.__alloyId1172 = Ti.UI.createLabel({
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
        id: "__alloyId1172"
    });
    $.__views.__alloyId1171.add($.__views.__alloyId1172);
    $.__views.__alloyId1173 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1173"
    });
    __alloyId1160.push($.__views.__alloyId1173);
    $.__views.__alloyId1174 = Ti.UI.createLabel({
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
        id: "__alloyId1174"
    });
    $.__views.__alloyId1173.add($.__views.__alloyId1174);
    $.__views.__alloyId1175 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1175"
    });
    __alloyId1160.push($.__views.__alloyId1175);
    $.__views.__alloyId1176 = Ti.UI.createLabel({
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
        id: "__alloyId1176"
    });
    $.__views.__alloyId1175.add($.__views.__alloyId1176);
    $.__views.__alloyId1177 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1177"
    });
    __alloyId1160.push($.__views.__alloyId1177);
    $.__views.__alloyId1178 = Ti.UI.createLabel({
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
        id: "__alloyId1178"
    });
    $.__views.__alloyId1177.add($.__views.__alloyId1178);
    $.__views.__alloyId1159 = Ti.UI.createTableView({
        separatorColor: "#454545",
        backgroundColor: "#262626",
        top: 50,
        separatorInsets: {
            left: 0,
            right: 0
        },
        data: __alloyId1160,
        id: "__alloyId1159"
    });
    $.__views.menu.add($.__views.__alloyId1159);
    navMenu ? $.__views.__alloyId1159.addEventListener("click", navMenu) : __defers["$.__views.__alloyId1159!click!navMenu"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId1159!click!navMenu"] && $.__views.__alloyId1159.addEventListener("click", navMenu);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;