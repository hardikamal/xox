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
    $.__views.__alloyId94 = Alloy.createController("_header", {
        id: "__alloyId94",
        __parentSymbol: $.__views.home
    });
    $.__views.__alloyId94.setParent($.__views.home);
    $.__views.login = Ti.UI.createView({
        layout: "vertical",
        id: "login",
        width: "90%",
        height: "50%",
        backgroundColor: "white",
        zIndex: "0"
    });
    $.__views.home.add($.__views.login);
    $.__views.__alloyId95 = Ti.UI.createView({
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId95"
    });
    $.__views.login.add($.__views.__alloyId95);
    $.__views.__alloyId96 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        top: "10",
        image: "/images/close_icon.png",
        id: "__alloyId96"
    });
    $.__views.__alloyId95.add($.__views.__alloyId96);
    close ? $.__views.__alloyId96.addEventListener("click", close) : __defers["$.__views.__alloyId96!click!close"] = true;
    $.__views.__alloyId97 = Ti.UI.createView({
        height: "25%",
        width: Ti.UI.FILL,
        id: "__alloyId97"
    });
    $.__views.login.add($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId98"
    });
    $.__views.__alloyId97.add($.__views.__alloyId98);
    $.__views.__alloyId99 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "Username",
        id: "__alloyId99"
    });
    $.__views.__alloyId98.add($.__views.__alloyId99);
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
    $.__views.__alloyId98.add($.__views.username);
    $.__views.__alloyId100 = Ti.UI.createView({
        height: "25%",
        width: Ti.UI.FILL,
        id: "__alloyId100"
    });
    $.__views.login.add($.__views.__alloyId100);
    $.__views.__alloyId101 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId101"
    });
    $.__views.__alloyId100.add($.__views.__alloyId101);
    $.__views.__alloyId102 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "Password",
        id: "__alloyId102"
    });
    $.__views.__alloyId101.add($.__views.__alloyId102);
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
    $.__views.__alloyId101.add($.__views.password);
    $.__views.__alloyId103 = Ti.UI.createView({
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId103"
    });
    $.__views.login.add($.__views.__alloyId103);
    $.__views.__alloyId104 = Ti.UI.createButton({
        title: "Login",
        color: "#44C7D6",
        borderColor: "#44C7D6",
        height: "80%",
        width: "60%",
        borderRadius: "20",
        id: "__alloyId104"
    });
    $.__views.__alloyId103.add($.__views.__alloyId104);
    login ? $.__views.__alloyId104.addEventListener("click", login) : __defers["$.__views.__alloyId104!click!login"] = true;
    $.__views.__alloyId105 = Ti.UI.createView({
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId105"
    });
    $.__views.login.add($.__views.__alloyId105);
    $.__views.__alloyId106 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#44C7D6",
        font: {
            fontSize: 14
        },
        text: "Not Registered yet?",
        id: "__alloyId106"
    });
    $.__views.__alloyId105.add($.__views.__alloyId106);
    register ? $.__views.__alloyId106.addEventListener("click", register) : __defers["$.__views.__alloyId106!click!register"] = true;
    $.__views.__alloyId107 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "black",
        top: "60",
        left: "10",
        right: "10",
        bottom: "10",
        zIndex: "1",
        id: "__alloyId107"
    });
    $.__views.home.add($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createView({
        width: "100%",
        height: "33%",
        backgroundColor: "red",
        bottom: "5",
        id: "__alloyId108"
    });
    $.__views.__alloyId107.add($.__views.__alloyId108);
    myAccount ? $.__views.__alloyId108.addEventListener("click", myAccount) : __defers["$.__views.__alloyId108!click!myAccount"] = true;
    $.__views.__alloyId109 = Ti.UI.createView({
        layout: "horizontal",
        height: "33%",
        width: "100%",
        top: "5",
        bottom: "5",
        id: "__alloyId109"
    });
    $.__views.__alloyId107.add($.__views.__alloyId109);
    $.__views.__alloyId110 = Ti.UI.createView({
        height: "100%",
        width: "49%",
        right: "5",
        backgroundColor: "blue",
        id: "__alloyId110"
    });
    $.__views.__alloyId109.add($.__views.__alloyId110);
    promoNews ? $.__views.__alloyId110.addEventListener("click", promoNews) : __defers["$.__views.__alloyId110!click!promoNews"] = true;
    $.__views.__alloyId111 = Ti.UI.createView({
        height: "100%",
        width: "auto",
        left: "5",
        backgroundColor: "orange",
        id: "__alloyId111"
    });
    $.__views.__alloyId109.add($.__views.__alloyId111);
    product ? $.__views.__alloyId111.addEventListener("click", product) : __defers["$.__views.__alloyId111!click!product"] = true;
    $.__views.__alloyId112 = Ti.UI.createView({
        layout: "horizontal",
        height: "33%",
        width: "100%",
        top: "5",
        id: "__alloyId112"
    });
    $.__views.__alloyId107.add($.__views.__alloyId112);
    $.__views.__alloyId113 = Ti.UI.createView({
        height: "100%",
        width: "49%",
        right: "5",
        backgroundColor: "pink",
        id: "__alloyId113"
    });
    $.__views.__alloyId112.add($.__views.__alloyId113);
    online ? $.__views.__alloyId113.addEventListener("click", online) : __defers["$.__views.__alloyId113!click!online"] = true;
    $.__views.__alloyId114 = Ti.UI.createView({
        layout: "vertical",
        height: "100%",
        width: "auto",
        left: "5",
        id: "__alloyId114"
    });
    $.__views.__alloyId112.add($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createView({
        height: "49%",
        width: "100%",
        bottom: "5",
        backgroundColor: "green",
        id: "__alloyId115"
    });
    $.__views.__alloyId114.add($.__views.__alloyId115);
    history ? $.__views.__alloyId115.addEventListener("click", history) : __defers["$.__views.__alloyId115!click!history"] = true;
    $.__views.__alloyId116 = Ti.UI.createView({
        layout: "horizontal",
        height: "auto",
        width: "100%",
        top: "5",
        id: "__alloyId116"
    });
    $.__views.__alloyId114.add($.__views.__alloyId116);
    $.__views.__alloyId117 = Ti.UI.createView({
        height: "100%",
        width: "49%",
        right: "5",
        backgroundColor: "purple",
        id: "__alloyId117"
    });
    $.__views.__alloyId116.add($.__views.__alloyId117);
    contact ? $.__views.__alloyId117.addEventListener("click", contact) : __defers["$.__views.__alloyId117!click!contact"] = true;
    $.__views.__alloyId118 = Ti.UI.createView({
        height: "100%",
        width: "auto",
        left: "5",
        backgroundColor: "gray",
        id: "__alloyId118"
    });
    $.__views.__alloyId116.add($.__views.__alloyId118);
    setting ? $.__views.__alloyId118.addEventListener("click", setting) : __defers["$.__views.__alloyId118!click!setting"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    Ti.App.Properties.setString("root", "1");
    Ti.Platform.displayCaps.platformHeight;
    __defers["$.__views.__alloyId96!click!close"] && $.__views.__alloyId96.addEventListener("click", close);
    __defers["$.__views.__alloyId104!click!login"] && $.__views.__alloyId104.addEventListener("click", login);
    __defers["$.__views.__alloyId106!click!register"] && $.__views.__alloyId106.addEventListener("click", register);
    __defers["$.__views.__alloyId108!click!myAccount"] && $.__views.__alloyId108.addEventListener("click", myAccount);
    __defers["$.__views.__alloyId110!click!promoNews"] && $.__views.__alloyId110.addEventListener("click", promoNews);
    __defers["$.__views.__alloyId111!click!product"] && $.__views.__alloyId111.addEventListener("click", product);
    __defers["$.__views.__alloyId113!click!online"] && $.__views.__alloyId113.addEventListener("click", online);
    __defers["$.__views.__alloyId115!click!history"] && $.__views.__alloyId115.addEventListener("click", history);
    __defers["$.__views.__alloyId117!click!contact"] && $.__views.__alloyId117.addEventListener("click", contact);
    __defers["$.__views.__alloyId118!click!setting"] && $.__views.__alloyId118.addEventListener("click", setting);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;