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
<<<<<<< HEAD
    var __alloyId377 = [];
    $.__views.__alloyId378 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId378"
    });
    __alloyId377.push($.__views.__alloyId378);
    $.__views.__alloyId379 = Ti.UI.createLabel({
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
        id: "__alloyId379"
    });
    $.__views.__alloyId378.add($.__views.__alloyId379);
    $.__views.__alloyId380 = Ti.UI.createTableViewRow({
=======
    var __alloyId267 = [];
    $.__views.__alloyId268 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "50",
        id: "__alloyId380"
    });
<<<<<<< HEAD
    __alloyId377.push($.__views.__alloyId380);
    $.__views.__alloyId381 = Ti.UI.createLabel({
=======
    __alloyId267.push($.__views.__alloyId268);
    $.__views.__alloyId269 = Ti.UI.createLabel({
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
        id: "__alloyId381"
    });
    $.__views.__alloyId380.add($.__views.__alloyId381);
    $.__views.__alloyId382 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId382"
    });
<<<<<<< HEAD
    __alloyId377.push($.__views.__alloyId382);
    $.__views.__alloyId383 = Ti.UI.createLabel({
=======
    __alloyId267.push($.__views.__alloyId270);
    $.__views.__alloyId271 = Ti.UI.createLabel({
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
        id: "__alloyId383"
    });
    $.__views.__alloyId382.add($.__views.__alloyId383);
    $.__views.__alloyId384 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId384"
    });
<<<<<<< HEAD
    __alloyId377.push($.__views.__alloyId384);
    $.__views.__alloyId385 = Ti.UI.createLabel({
=======
    __alloyId267.push($.__views.__alloyId272);
    $.__views.__alloyId273 = Ti.UI.createLabel({
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
        id: "__alloyId385"
    });
    $.__views.__alloyId384.add($.__views.__alloyId385);
    $.__views.__alloyId386 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId386"
    });
<<<<<<< HEAD
    __alloyId377.push($.__views.__alloyId386);
    $.__views.__alloyId387 = Ti.UI.createLabel({
=======
    __alloyId267.push($.__views.__alloyId274);
    $.__views.__alloyId275 = Ti.UI.createLabel({
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
        id: "__alloyId387"
    });
    $.__views.__alloyId386.add($.__views.__alloyId387);
    $.__views.__alloyId388 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId388"
    });
<<<<<<< HEAD
    __alloyId377.push($.__views.__alloyId388);
    $.__views.__alloyId389 = Ti.UI.createLabel({
=======
    __alloyId267.push($.__views.__alloyId276);
    $.__views.__alloyId277 = Ti.UI.createLabel({
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
        id: "__alloyId389"
    });
    $.__views.__alloyId388.add($.__views.__alloyId389);
    $.__views.__alloyId390 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId390"
    });
<<<<<<< HEAD
    __alloyId377.push($.__views.__alloyId390);
    $.__views.__alloyId391 = Ti.UI.createLabel({
=======
    __alloyId267.push($.__views.__alloyId278);
    $.__views.__alloyId279 = Ti.UI.createLabel({
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
        id: "__alloyId391"
    });
    $.__views.__alloyId390.add($.__views.__alloyId391);
    $.__views.__alloyId392 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId392"
    });
<<<<<<< HEAD
    __alloyId377.push($.__views.__alloyId392);
    $.__views.__alloyId393 = Ti.UI.createLabel({
=======
    __alloyId267.push($.__views.__alloyId280);
    $.__views.__alloyId281 = Ti.UI.createLabel({
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
        id: "__alloyId393"
    });
<<<<<<< HEAD
    $.__views.__alloyId392.add($.__views.__alloyId393);
    $.__views.__alloyId376 = Ti.UI.createTableView({
=======
    $.__views.__alloyId280.add($.__views.__alloyId281);
    $.__views.__alloyId282 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId282"
    });
    __alloyId267.push($.__views.__alloyId282);
    $.__views.__alloyId283 = Ti.UI.createLabel({
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
        id: "__alloyId283"
    });
    $.__views.__alloyId282.add($.__views.__alloyId283);
    $.__views.__alloyId266 = Ti.UI.createTableView({
>>>>>>> origin/master
        separatorColor: "#454545",
        backgroundColor: "#262626",
        top: 50,
        separatorInsets: {
            left: 0,
            right: 0
        },
<<<<<<< HEAD
        data: __alloyId377,
        id: "__alloyId376"
    });
    $.__views.menu.add($.__views.__alloyId376);
    navMenu ? $.__views.__alloyId376.addEventListener("click", navMenu) : __defers["$.__views.__alloyId376!click!navMenu"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId376!click!navMenu"] && $.__views.__alloyId376.addEventListener("click", navMenu);
=======
        data: __alloyId267,
        id: "__alloyId266"
    });
    $.__views.menu.add($.__views.__alloyId266);
    navMenu ? $.__views.__alloyId266.addEventListener("click", navMenu) : __defers["$.__views.__alloyId266!click!navMenu"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId266!click!navMenu"] && $.__views.__alloyId266.addEventListener("click", navMenu);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;