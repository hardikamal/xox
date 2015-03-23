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
    var __alloyId1136 = [];
    $.__views.__alloyId1137 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1137"
    });
    __alloyId1136.push($.__views.__alloyId1137);
    $.__views.__alloyId1138 = Ti.UI.createLabel({
=======
    var __alloyId652 = [];
    $.__views.__alloyId653 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId653"
    });
    __alloyId652.push($.__views.__alloyId653);
    $.__views.__alloyId654 = Ti.UI.createLabel({
>>>>>>> origin/master
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
        id: "__alloyId1138"
    });
    $.__views.__alloyId1137.add($.__views.__alloyId1138);
    $.__views.__alloyId1139 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1139"
    });
    __alloyId1136.push($.__views.__alloyId1139);
    $.__views.__alloyId1140 = Ti.UI.createLabel({
=======
        id: "__alloyId654"
    });
    $.__views.__alloyId653.add($.__views.__alloyId654);
    $.__views.__alloyId655 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId655"
    });
    __alloyId652.push($.__views.__alloyId655);
    $.__views.__alloyId656 = Ti.UI.createLabel({
>>>>>>> origin/master
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
        id: "__alloyId1140"
    });
    $.__views.__alloyId1139.add($.__views.__alloyId1140);
    $.__views.__alloyId1141 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1141"
    });
    __alloyId1136.push($.__views.__alloyId1141);
    $.__views.__alloyId1142 = Ti.UI.createLabel({
=======
        id: "__alloyId656"
    });
    $.__views.__alloyId655.add($.__views.__alloyId656);
    $.__views.__alloyId657 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId657"
    });
    __alloyId652.push($.__views.__alloyId657);
    $.__views.__alloyId658 = Ti.UI.createLabel({
>>>>>>> origin/master
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
        id: "__alloyId1142"
    });
    $.__views.__alloyId1141.add($.__views.__alloyId1142);
    $.__views.__alloyId1143 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1143"
    });
    __alloyId1136.push($.__views.__alloyId1143);
    $.__views.__alloyId1144 = Ti.UI.createLabel({
=======
        id: "__alloyId658"
    });
    $.__views.__alloyId657.add($.__views.__alloyId658);
    $.__views.__alloyId659 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId659"
    });
    __alloyId652.push($.__views.__alloyId659);
    $.__views.__alloyId660 = Ti.UI.createLabel({
>>>>>>> origin/master
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
        id: "__alloyId1144"
    });
    $.__views.__alloyId1143.add($.__views.__alloyId1144);
    $.__views.__alloyId1145 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1145"
    });
    __alloyId1136.push($.__views.__alloyId1145);
    $.__views.__alloyId1146 = Ti.UI.createLabel({
=======
        id: "__alloyId660"
    });
    $.__views.__alloyId659.add($.__views.__alloyId660);
    $.__views.__alloyId661 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId661"
    });
    __alloyId652.push($.__views.__alloyId661);
    $.__views.__alloyId662 = Ti.UI.createLabel({
>>>>>>> origin/master
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
        id: "__alloyId1146"
    });
    $.__views.__alloyId1145.add($.__views.__alloyId1146);
    $.__views.__alloyId1147 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1147"
    });
    __alloyId1136.push($.__views.__alloyId1147);
    $.__views.__alloyId1148 = Ti.UI.createLabel({
=======
        id: "__alloyId662"
    });
    $.__views.__alloyId661.add($.__views.__alloyId662);
    $.__views.__alloyId663 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId663"
    });
    __alloyId652.push($.__views.__alloyId663);
    $.__views.__alloyId664 = Ti.UI.createLabel({
>>>>>>> origin/master
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
        id: "__alloyId1148"
    });
    $.__views.__alloyId1147.add($.__views.__alloyId1148);
    $.__views.__alloyId1149 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1149"
    });
    __alloyId1136.push($.__views.__alloyId1149);
    $.__views.__alloyId1150 = Ti.UI.createLabel({
=======
        id: "__alloyId664"
    });
    $.__views.__alloyId663.add($.__views.__alloyId664);
    $.__views.__alloyId665 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId665"
    });
    __alloyId652.push($.__views.__alloyId665);
    $.__views.__alloyId666 = Ti.UI.createLabel({
>>>>>>> origin/master
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
        id: "__alloyId1150"
    });
    $.__views.__alloyId1149.add($.__views.__alloyId1150);
    $.__views.__alloyId1151 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1151"
    });
    __alloyId1136.push($.__views.__alloyId1151);
    $.__views.__alloyId1152 = Ti.UI.createLabel({
=======
        id: "__alloyId666"
    });
    $.__views.__alloyId665.add($.__views.__alloyId666);
    $.__views.__alloyId667 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId667"
    });
    __alloyId652.push($.__views.__alloyId667);
    $.__views.__alloyId668 = Ti.UI.createLabel({
>>>>>>> origin/master
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
        id: "__alloyId1152"
    });
    $.__views.__alloyId1151.add($.__views.__alloyId1152);
    $.__views.__alloyId1153 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1153"
    });
    __alloyId1136.push($.__views.__alloyId1153);
    $.__views.__alloyId1154 = Ti.UI.createLabel({
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
        id: "__alloyId1154"
    });
    $.__views.__alloyId1153.add($.__views.__alloyId1154);
    $.__views.__alloyId1135 = Ti.UI.createTableView({
=======
        id: "__alloyId668"
    });
    $.__views.__alloyId667.add($.__views.__alloyId668);
    $.__views.__alloyId651 = Ti.UI.createTableView({
>>>>>>> origin/master
        separatorColor: "#454545",
        backgroundColor: "#262626",
        top: 50,
        separatorInsets: {
            left: 0,
            right: 0
        },
<<<<<<< HEAD
        data: __alloyId1136,
        id: "__alloyId1135"
    });
    $.__views.menu.add($.__views.__alloyId1135);
    navMenu ? $.__views.__alloyId1135.addEventListener("click", navMenu) : __defers["$.__views.__alloyId1135!click!navMenu"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId1135!click!navMenu"] && $.__views.__alloyId1135.addEventListener("click", navMenu);
=======
        data: __alloyId652,
        id: "__alloyId651"
    });
    $.__views.menu.add($.__views.__alloyId651);
    navMenu ? $.__views.__alloyId651.addEventListener("click", navMenu) : __defers["$.__views.__alloyId651!click!navMenu"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId651!click!navMenu"] && $.__views.__alloyId651.addEventListener("click", navMenu);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;