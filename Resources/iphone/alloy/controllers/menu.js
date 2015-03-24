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
<<<<<<< HEAD
    var __alloyId1090 = [];
    $.__views.__alloyId1091 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1091"
    });
    __alloyId1090.push($.__views.__alloyId1091);
    $.__views.__alloyId1092 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    var __alloyId1136 = [];
    $.__views.__alloyId1137 = Ti.UI.createTableViewRow({
=======
    var __alloyId1090 = [];
    $.__views.__alloyId1091 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "50",
        id: "__alloyId1091"
    });
<<<<<<< HEAD
    __alloyId1136.push($.__views.__alloyId1137);
    $.__views.__alloyId1138 = Ti.UI.createLabel({
=======
    __alloyId1090.push($.__views.__alloyId1091);
    $.__views.__alloyId1092 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
        id: "__alloyId1092"
=======
<<<<<<< HEAD
        id: "__alloyId1138"
=======
        id: "__alloyId1092"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId1091.add($.__views.__alloyId1092);
    $.__views.__alloyId1093 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1093"
    });
<<<<<<< HEAD
    __alloyId1090.push($.__views.__alloyId1093);
    $.__views.__alloyId1094 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    __alloyId1136.push($.__views.__alloyId1139);
    $.__views.__alloyId1140 = Ti.UI.createLabel({
=======
    __alloyId1090.push($.__views.__alloyId1093);
    $.__views.__alloyId1094 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
        id: "__alloyId1094"
=======
<<<<<<< HEAD
        id: "__alloyId1140"
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId1093.add($.__views.__alloyId1094);
    $.__views.__alloyId1095 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1095"
    });
<<<<<<< HEAD
    __alloyId1090.push($.__views.__alloyId1095);
    $.__views.__alloyId1096 = Ti.UI.createLabel({
=======
    __alloyId1136.push($.__views.__alloyId1141);
    $.__views.__alloyId1142 = Ti.UI.createLabel({
=======
        id: "__alloyId1094"
    });
    $.__views.__alloyId1093.add($.__views.__alloyId1094);
    $.__views.__alloyId1095 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1095"
    });
    __alloyId1090.push($.__views.__alloyId1095);
    $.__views.__alloyId1096 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
        id: "__alloyId1096"
=======
<<<<<<< HEAD
        id: "__alloyId1142"
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId1095.add($.__views.__alloyId1096);
    $.__views.__alloyId1097 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1097"
    });
<<<<<<< HEAD
    __alloyId1090.push($.__views.__alloyId1097);
    $.__views.__alloyId1098 = Ti.UI.createLabel({
=======
    __alloyId1136.push($.__views.__alloyId1143);
    $.__views.__alloyId1144 = Ti.UI.createLabel({
=======
        id: "__alloyId1096"
    });
    $.__views.__alloyId1095.add($.__views.__alloyId1096);
    $.__views.__alloyId1097 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1097"
    });
    __alloyId1090.push($.__views.__alloyId1097);
    $.__views.__alloyId1098 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
        id: "__alloyId1098"
=======
<<<<<<< HEAD
        id: "__alloyId1144"
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId1097.add($.__views.__alloyId1098);
    $.__views.__alloyId1099 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1099"
    });
<<<<<<< HEAD
    __alloyId1090.push($.__views.__alloyId1099);
    $.__views.__alloyId1100 = Ti.UI.createLabel({
=======
    __alloyId1136.push($.__views.__alloyId1145);
    $.__views.__alloyId1146 = Ti.UI.createLabel({
=======
        id: "__alloyId1098"
    });
    $.__views.__alloyId1097.add($.__views.__alloyId1098);
    $.__views.__alloyId1099 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1099"
    });
    __alloyId1090.push($.__views.__alloyId1099);
    $.__views.__alloyId1100 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
        id: "__alloyId1100"
=======
<<<<<<< HEAD
        id: "__alloyId1146"
=======
        id: "__alloyId1100"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId1099.add($.__views.__alloyId1100);
    $.__views.__alloyId1101 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1101"
    });
<<<<<<< HEAD
    __alloyId1090.push($.__views.__alloyId1101);
    $.__views.__alloyId1102 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    __alloyId1136.push($.__views.__alloyId1147);
    $.__views.__alloyId1148 = Ti.UI.createLabel({
=======
    __alloyId1090.push($.__views.__alloyId1101);
    $.__views.__alloyId1102 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
        id: "__alloyId1102"
=======
<<<<<<< HEAD
        id: "__alloyId1148"
=======
        id: "__alloyId1102"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId1101.add($.__views.__alloyId1102);
    $.__views.__alloyId1103 = Ti.UI.createTableViewRow({
        height: "50",
<<<<<<< HEAD
        id: "__alloyId1103"
    });
    __alloyId1090.push($.__views.__alloyId1103);
    $.__views.__alloyId1104 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1149"
    });
    __alloyId1136.push($.__views.__alloyId1149);
    $.__views.__alloyId1150 = Ti.UI.createLabel({
=======
        id: "__alloyId1103"
    });
    __alloyId1090.push($.__views.__alloyId1103);
    $.__views.__alloyId1104 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
        id: "__alloyId1104"
=======
<<<<<<< HEAD
        id: "__alloyId1150"
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId1103.add($.__views.__alloyId1104);
    $.__views.__alloyId1105 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1105"
    });
<<<<<<< HEAD
    __alloyId1090.push($.__views.__alloyId1105);
    $.__views.__alloyId1106 = Ti.UI.createLabel({
=======
    __alloyId1136.push($.__views.__alloyId1151);
    $.__views.__alloyId1152 = Ti.UI.createLabel({
=======
        id: "__alloyId1104"
    });
    $.__views.__alloyId1103.add($.__views.__alloyId1104);
    $.__views.__alloyId1105 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1105"
    });
    __alloyId1090.push($.__views.__alloyId1105);
    $.__views.__alloyId1106 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
        id: "__alloyId1106"
=======
<<<<<<< HEAD
        id: "__alloyId1152"
=======
        id: "__alloyId1106"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
    $.__views.__alloyId1107.add($.__views.__alloyId1108);
    $.__views.__alloyId1089 = Ti.UI.createTableView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1153.add($.__views.__alloyId1154);
    $.__views.__alloyId1135 = Ti.UI.createTableView({
=======
    $.__views.__alloyId1107.add($.__views.__alloyId1108);
    $.__views.__alloyId1089 = Ti.UI.createTableView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        separatorColor: "#454545",
        backgroundColor: "#262626",
        top: 50,
        separatorInsets: {
            left: 0,
            right: 0
        },
<<<<<<< HEAD
        data: __alloyId1090,
        id: "__alloyId1089"
=======
<<<<<<< HEAD
        data: __alloyId1136,
        id: "__alloyId1135"
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.menu.add($.__views.__alloyId1089);
    navMenu ? $.__views.__alloyId1089.addEventListener("click", navMenu) : __defers["$.__views.__alloyId1089!click!navMenu"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
<<<<<<< HEAD
    __defers["$.__views.__alloyId1089!click!navMenu"] && $.__views.__alloyId1089.addEventListener("click", navMenu);
=======
    __defers["$.__views.__alloyId1135!click!navMenu"] && $.__views.__alloyId1135.addEventListener("click", navMenu);
=======
        data: __alloyId1090,
        id: "__alloyId1089"
    });
    $.__views.menu.add($.__views.__alloyId1089);
    navMenu ? $.__views.__alloyId1089.addEventListener("click", navMenu) : __defers["$.__views.__alloyId1089!click!navMenu"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId1089!click!navMenu"] && $.__views.__alloyId1089.addEventListener("click", navMenu);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;