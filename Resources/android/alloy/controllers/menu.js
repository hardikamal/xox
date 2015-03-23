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
<<<<<<< Updated upstream
            break;

          case 8:
            DRAWER.navigation("familyFriend", 2);
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< HEAD
    var __alloyId1146 = [];
    $.__views.__alloyId1147 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1147"
    });
    __alloyId1146.push($.__views.__alloyId1147);
    $.__views.__alloyId1148 = Ti.UI.createLabel({
=======
    var __alloyId978 = [];
    $.__views.__alloyId979 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId979"
    });
    __alloyId978.push($.__views.__alloyId979);
    $.__views.__alloyId980 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    var __alloyId266 = [];
    $.__views.__alloyId267 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId267"
    });
    __alloyId266.push($.__views.__alloyId267);
    $.__views.__alloyId268 = Ti.UI.createLabel({
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1148"
    });
    $.__views.__alloyId1147.add($.__views.__alloyId1148);
    $.__views.__alloyId1149 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1149"
    });
    __alloyId1146.push($.__views.__alloyId1149);
    $.__views.__alloyId1150 = Ti.UI.createLabel({
=======
        id: "__alloyId980"
    });
    $.__views.__alloyId979.add($.__views.__alloyId980);
    $.__views.__alloyId981 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId981"
    });
    __alloyId978.push($.__views.__alloyId981);
    $.__views.__alloyId982 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId268"
    });
    $.__views.__alloyId267.add($.__views.__alloyId268);
    $.__views.__alloyId269 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId269"
    });
    __alloyId266.push($.__views.__alloyId269);
    $.__views.__alloyId270 = Ti.UI.createLabel({
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1150"
    });
    $.__views.__alloyId1149.add($.__views.__alloyId1150);
    $.__views.__alloyId1151 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1151"
    });
    __alloyId1146.push($.__views.__alloyId1151);
    $.__views.__alloyId1152 = Ti.UI.createLabel({
=======
        id: "__alloyId982"
    });
    $.__views.__alloyId981.add($.__views.__alloyId982);
    $.__views.__alloyId983 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId983"
    });
    __alloyId978.push($.__views.__alloyId983);
    $.__views.__alloyId984 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId270"
    });
    $.__views.__alloyId269.add($.__views.__alloyId270);
    $.__views.__alloyId271 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId271"
    });
    __alloyId266.push($.__views.__alloyId271);
    $.__views.__alloyId272 = Ti.UI.createLabel({
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1152"
    });
    $.__views.__alloyId1151.add($.__views.__alloyId1152);
    $.__views.__alloyId1153 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1153"
    });
    __alloyId1146.push($.__views.__alloyId1153);
    $.__views.__alloyId1154 = Ti.UI.createLabel({
=======
        id: "__alloyId984"
    });
    $.__views.__alloyId983.add($.__views.__alloyId984);
    $.__views.__alloyId985 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId985"
    });
    __alloyId978.push($.__views.__alloyId985);
    $.__views.__alloyId986 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId272"
    });
    $.__views.__alloyId271.add($.__views.__alloyId272);
    $.__views.__alloyId273 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId273"
    });
    __alloyId266.push($.__views.__alloyId273);
    $.__views.__alloyId274 = Ti.UI.createLabel({
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1154"
    });
    $.__views.__alloyId1153.add($.__views.__alloyId1154);
    $.__views.__alloyId1155 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1155"
    });
    __alloyId1146.push($.__views.__alloyId1155);
    $.__views.__alloyId1156 = Ti.UI.createLabel({
=======
        id: "__alloyId986"
    });
    $.__views.__alloyId985.add($.__views.__alloyId986);
    $.__views.__alloyId987 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId987"
    });
    __alloyId978.push($.__views.__alloyId987);
    $.__views.__alloyId988 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId274"
    });
    $.__views.__alloyId273.add($.__views.__alloyId274);
    $.__views.__alloyId275 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId275"
    });
    __alloyId266.push($.__views.__alloyId275);
    $.__views.__alloyId276 = Ti.UI.createLabel({
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1156"
    });
    $.__views.__alloyId1155.add($.__views.__alloyId1156);
    $.__views.__alloyId1157 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1157"
    });
    __alloyId1146.push($.__views.__alloyId1157);
    $.__views.__alloyId1158 = Ti.UI.createLabel({
=======
        id: "__alloyId988"
    });
    $.__views.__alloyId987.add($.__views.__alloyId988);
    $.__views.__alloyId989 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId989"
    });
    __alloyId978.push($.__views.__alloyId989);
    $.__views.__alloyId990 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId276"
    });
    $.__views.__alloyId275.add($.__views.__alloyId276);
    $.__views.__alloyId277 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId277"
    });
    __alloyId266.push($.__views.__alloyId277);
    $.__views.__alloyId278 = Ti.UI.createLabel({
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1158"
    });
    $.__views.__alloyId1157.add($.__views.__alloyId1158);
    $.__views.__alloyId1159 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1159"
    });
    __alloyId1146.push($.__views.__alloyId1159);
    $.__views.__alloyId1160 = Ti.UI.createLabel({
=======
        id: "__alloyId990"
    });
    $.__views.__alloyId989.add($.__views.__alloyId990);
    $.__views.__alloyId991 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId991"
    });
    __alloyId978.push($.__views.__alloyId991);
    $.__views.__alloyId992 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId278"
    });
    $.__views.__alloyId277.add($.__views.__alloyId278);
    $.__views.__alloyId279 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId279"
    });
    __alloyId266.push($.__views.__alloyId279);
    $.__views.__alloyId280 = Ti.UI.createLabel({
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1160"
    });
    $.__views.__alloyId1159.add($.__views.__alloyId1160);
    $.__views.__alloyId1161 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1161"
    });
    __alloyId1146.push($.__views.__alloyId1161);
    $.__views.__alloyId1162 = Ti.UI.createLabel({
=======
        id: "__alloyId992"
    });
    $.__views.__alloyId991.add($.__views.__alloyId992);
    $.__views.__alloyId993 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId993"
    });
    __alloyId978.push($.__views.__alloyId993);
    $.__views.__alloyId994 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId280"
    });
    $.__views.__alloyId279.add($.__views.__alloyId280);
    $.__views.__alloyId281 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId281"
    });
    __alloyId266.push($.__views.__alloyId281);
    $.__views.__alloyId282 = Ti.UI.createLabel({
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1162"
    });
    $.__views.__alloyId1161.add($.__views.__alloyId1162);
    $.__views.__alloyId1163 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId1163"
    });
    __alloyId1146.push($.__views.__alloyId1163);
    $.__views.__alloyId1164 = Ti.UI.createLabel({
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
        id: "__alloyId1164"
    });
    $.__views.__alloyId1163.add($.__views.__alloyId1164);
    $.__views.__alloyId1145 = Ti.UI.createTableView({
=======
        id: "__alloyId994"
    });
    $.__views.__alloyId993.add($.__views.__alloyId994);
    $.__views.__alloyId977 = Ti.UI.createTableView({
>>>>>>> origin/master
=======
        id: "__alloyId282"
    });
    $.__views.__alloyId281.add($.__views.__alloyId282);
    $.__views.__alloyId265 = Ti.UI.createTableView({
>>>>>>> Stashed changes
        separatorColor: "#454545",
        backgroundColor: "#262626",
        top: 50,
        separatorInsets: {
            left: 0,
            right: 0
        },
<<<<<<< Updated upstream
<<<<<<< HEAD
        data: __alloyId1146,
        id: "__alloyId1145"
    });
    $.__views.menu.add($.__views.__alloyId1145);
    navMenu ? $.__views.__alloyId1145.addEventListener("click", navMenu) : __defers["$.__views.__alloyId1145!click!navMenu"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId1145!click!navMenu"] && $.__views.__alloyId1145.addEventListener("click", navMenu);
=======
        data: __alloyId978,
        id: "__alloyId977"
    });
    $.__views.menu.add($.__views.__alloyId977);
    navMenu ? $.__views.__alloyId977.addEventListener("click", navMenu) : __defers["$.__views.__alloyId977!click!navMenu"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId977!click!navMenu"] && $.__views.__alloyId977.addEventListener("click", navMenu);
>>>>>>> origin/master
=======
        data: __alloyId266,
        id: "__alloyId265"
    });
    $.__views.menu.add($.__views.__alloyId265);
    navMenu ? $.__views.__alloyId265.addEventListener("click", navMenu) : __defers["$.__views.__alloyId265!click!navMenu"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId265!click!navMenu"] && $.__views.__alloyId265.addEventListener("click", navMenu);
>>>>>>> Stashed changes
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;