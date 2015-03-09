function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function promoNews() {
        DRAWER.navigation("promo", 2);
    }
    function product() {
        DRAWER.navigation("products", 2);
    }
    function online() {
        DRAWER.navigation("onlinePurchases", 2);
    }
    function history() {
        DRAWER.navigation("orderHistory", 2);
    }
    function contact() {
        DRAWER.navigation("contact", 2);
    }
    function setting() {
        DRAWER.navigation("settings", 2);
    }
    function register() {
        $.username.value = "";
        $.username.blur();
        $.password.value = "";
        $.password.blur();
        $.login.zIndex = 0;
        console.log("to register page");
    }
    function close() {
        $.username.value = "";
        $.username.blur();
        $.password.value = "";
        $.password.blur();
        $.login.zIndex = 0;
    }
    function myAccount() {
        console.log("myAccount");
        $.login.zIndex = 2;
    }
    function login() {
        if ("" == $.username.value && "" == $.password.value) alert("Please enter all fields"); else if ("" == $.username.value) alert("Please enter username"); else if ("" == $.password.value) alert("Please enter password"); else {
            $.username.value = "";
            $.username.blur();
            $.password.value = "";
            $.password.blur();
            $.login.zIndex = 0;
            console.log("login");
            DRAWER.navigation("myAccount", 2);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
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
    $.__views.home = Ti.UI.createView({
        backgroundColor: "black",
        layout: "composite",
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    $.__views.__alloyId2 = Alloy.createController("_header", {
        id: "__alloyId2",
        __parentSymbol: $.__views.home
    });
    $.__views.__alloyId2.setParent($.__views.home);
    $.__views.login = Ti.UI.createView({
        layout: "vertical",
        id: "login",
        width: "90%",
        height: "50%",
        backgroundColor: "white",
        zIndex: "0"
    });
    $.__views.home.add($.__views.login);
    $.__views.__alloyId3 = Ti.UI.createView({
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId3"
    });
    $.__views.login.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createView({
        height: "40",
        width: "40",
        right: "10",
        backgroundColor: "black",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    close ? $.__views.__alloyId4.addEventListener("click", close) : __defers["$.__views.__alloyId4!click!close"] = true;
    $.__views.__alloyId5 = Ti.UI.createView({
        height: "25%",
        width: Ti.UI.FILL,
        id: "__alloyId5"
    });
    $.__views.login.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "Username",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.username = Ti.UI.createTextField({
        id: "username",
        width: "90%",
        height: "50%",
        value: "username",
        backgroundColor: "#E6E7E9",
        textAlign: "center",
        hintText: "someone@example.com",
        borderRadius: "15"
    });
    $.__views.__alloyId6.add($.__views.username);
    $.__views.__alloyId8 = Ti.UI.createView({
        height: "25%",
        width: Ti.UI.FILL,
        id: "__alloyId8"
    });
    $.__views.login.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "Password",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.password = Ti.UI.createTextField({
        id: "password",
        width: "90%",
        height: "50%",
        value: "password",
        backgroundColor: "#E6E7E9",
        textAlign: "center",
        hintText: "********",
        passwordMask: "true",
        borderRadius: "15"
    });
    $.__views.__alloyId9.add($.__views.password);
    $.__views.__alloyId11 = Ti.UI.createView({
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId11"
    });
    $.__views.login.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createButton({
        title: "Login",
        color: "#44C7D6",
        borderColor: "#44C7D6",
        height: "80%",
        width: "60%",
        borderRadius: "20",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    login ? $.__views.__alloyId12.addEventListener("click", login) : __defers["$.__views.__alloyId12!click!login"] = true;
    $.__views.__alloyId13 = Ti.UI.createView({
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId13"
    });
    $.__views.login.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#44C7D6",
        font: {
            fontSize: 14
        },
        text: "Not Registered yet?",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    register ? $.__views.__alloyId14.addEventListener("click", register) : __defers["$.__views.__alloyId14!click!register"] = true;
    $.__views.__alloyId15 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "black",
        top: "60",
        left: "10",
        right: "10",
        bottom: "10",
        zIndex: "1",
        id: "__alloyId15"
    });
    $.__views.home.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createView({
        width: "100%",
        height: "33%",
        backgroundColor: "red",
        bottom: "5",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    myAccount ? $.__views.__alloyId16.addEventListener("click", myAccount) : __defers["$.__views.__alloyId16!click!myAccount"] = true;
    $.__views.__alloyId17 = Ti.UI.createView({
        layout: "horizontal",
        height: "33%",
        width: "100%",
        top: "5",
        bottom: "5",
        id: "__alloyId17"
    });
    $.__views.__alloyId15.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createView({
        height: "100%",
        width: "49%",
        right: "5",
        backgroundColor: "blue",
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    promoNews ? $.__views.__alloyId18.addEventListener("click", promoNews) : __defers["$.__views.__alloyId18!click!promoNews"] = true;
    $.__views.__alloyId19 = Ti.UI.createView({
        height: "100%",
        width: "auto",
        left: "5",
        backgroundColor: "orange",
        id: "__alloyId19"
    });
    $.__views.__alloyId17.add($.__views.__alloyId19);
    product ? $.__views.__alloyId19.addEventListener("click", product) : __defers["$.__views.__alloyId19!click!product"] = true;
    $.__views.__alloyId20 = Ti.UI.createView({
        layout: "horizontal",
        height: "33%",
        width: "100%",
        top: "5",
        id: "__alloyId20"
    });
    $.__views.__alloyId15.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createView({
        height: "100%",
        width: "49%",
        right: "5",
        backgroundColor: "pink",
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    online ? $.__views.__alloyId21.addEventListener("click", online) : __defers["$.__views.__alloyId21!click!online"] = true;
    $.__views.__alloyId22 = Ti.UI.createView({
        layout: "vertical",
        height: "100%",
        width: "auto",
        left: "5",
        id: "__alloyId22"
    });
    $.__views.__alloyId20.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createView({
        height: "49%",
        width: "100%",
        bottom: "5",
        backgroundColor: "green",
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    history ? $.__views.__alloyId23.addEventListener("click", history) : __defers["$.__views.__alloyId23!click!history"] = true;
    $.__views.__alloyId24 = Ti.UI.createView({
        layout: "horizontal",
        height: "auto",
        width: "100%",
        top: "5",
        id: "__alloyId24"
    });
    $.__views.__alloyId22.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createView({
        height: "100%",
        width: "49%",
        right: "5",
        backgroundColor: "purple",
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    contact ? $.__views.__alloyId25.addEventListener("click", contact) : __defers["$.__views.__alloyId25!click!contact"] = true;
    $.__views.__alloyId26 = Ti.UI.createView({
        height: "100%",
        width: "auto",
        left: "5",
        backgroundColor: "gray",
        id: "__alloyId26"
    });
    $.__views.__alloyId24.add($.__views.__alloyId26);
    setting ? $.__views.__alloyId26.addEventListener("click", setting) : __defers["$.__views.__alloyId26!click!setting"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    Ti.App.Properties.setString("root", "1");
    Ti.Platform.displayCaps.platformHeight;
    __defers["$.__views.__alloyId4!click!close"] && $.__views.__alloyId4.addEventListener("click", close);
    __defers["$.__views.__alloyId12!click!login"] && $.__views.__alloyId12.addEventListener("click", login);
    __defers["$.__views.__alloyId14!click!register"] && $.__views.__alloyId14.addEventListener("click", register);
    __defers["$.__views.__alloyId16!click!myAccount"] && $.__views.__alloyId16.addEventListener("click", myAccount);
    __defers["$.__views.__alloyId18!click!promoNews"] && $.__views.__alloyId18.addEventListener("click", promoNews);
    __defers["$.__views.__alloyId19!click!product"] && $.__views.__alloyId19.addEventListener("click", product);
    __defers["$.__views.__alloyId21!click!online"] && $.__views.__alloyId21.addEventListener("click", online);
    __defers["$.__views.__alloyId23!click!history"] && $.__views.__alloyId23.addEventListener("click", history);
    __defers["$.__views.__alloyId25!click!contact"] && $.__views.__alloyId25.addEventListener("click", contact);
    __defers["$.__views.__alloyId26!click!setting"] && $.__views.__alloyId26.addEventListener("click", setting);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;