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
    var __alloyId433 = [];
    $.__views.__alloyId434 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId434"
    });
    __alloyId433.push($.__views.__alloyId434);
    $.__views.__alloyId435 = Ti.UI.createLabel({
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
        id: "__alloyId435"
    });
    $.__views.__alloyId434.add($.__views.__alloyId435);
    $.__views.__alloyId436 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId436"
    });
    __alloyId433.push($.__views.__alloyId436);
    $.__views.__alloyId437 = Ti.UI.createLabel({
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
        id: "__alloyId437"
    });
    $.__views.__alloyId436.add($.__views.__alloyId437);
    $.__views.__alloyId438 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId438"
    });
    __alloyId433.push($.__views.__alloyId438);
    $.__views.__alloyId439 = Ti.UI.createLabel({
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
        id: "__alloyId439"
    });
    $.__views.__alloyId438.add($.__views.__alloyId439);
    $.__views.__alloyId440 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId440"
    });
    __alloyId433.push($.__views.__alloyId440);
    $.__views.__alloyId441 = Ti.UI.createLabel({
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
        id: "__alloyId441"
    });
    $.__views.__alloyId440.add($.__views.__alloyId441);
    $.__views.__alloyId442 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId442"
    });
    __alloyId433.push($.__views.__alloyId442);
    $.__views.__alloyId443 = Ti.UI.createLabel({
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
        id: "__alloyId443"
    });
    $.__views.__alloyId442.add($.__views.__alloyId443);
    $.__views.__alloyId444 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId444"
    });
    __alloyId433.push($.__views.__alloyId444);
    $.__views.__alloyId445 = Ti.UI.createLabel({
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
        id: "__alloyId445"
    });
    $.__views.__alloyId444.add($.__views.__alloyId445);
    $.__views.__alloyId446 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId446"
    });
    __alloyId433.push($.__views.__alloyId446);
    $.__views.__alloyId447 = Ti.UI.createLabel({
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
        id: "__alloyId447"
    });
    $.__views.__alloyId446.add($.__views.__alloyId447);
    $.__views.__alloyId448 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId448"
    });
    __alloyId433.push($.__views.__alloyId448);
    $.__views.__alloyId449 = Ti.UI.createLabel({
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
        id: "__alloyId449"
    });
    $.__views.__alloyId448.add($.__views.__alloyId449);
    $.__views.__alloyId432 = Ti.UI.createTableView({
        separatorColor: "#454545",
        backgroundColor: "#262626",
        top: 50,
        separatorInsets: {
            left: 0,
            right: 0
        },
        data: __alloyId433,
        id: "__alloyId432"
    });
    $.__views.menu.add($.__views.__alloyId432);
    navMenu ? $.__views.__alloyId432.addEventListener("click", navMenu) : __defers["$.__views.__alloyId432!click!navMenu"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId432!click!navMenu"] && $.__views.__alloyId432.addEventListener("click", navMenu);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;