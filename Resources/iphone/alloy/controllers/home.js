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
    $.__views.__alloyId463 = Alloy.createController("_header", {
        id: "__alloyId463",
        __parentSymbol: $.__views.home
    });
    $.__views.__alloyId463.setParent($.__views.home);
    $.__views.login = Ti.UI.createView({
        id: "login",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.home.add($.__views.login);
    $.__views.__alloyId464 = Ti.UI.createView({
        layout: "vertical",
        width: "90%",
        height: "50%",
        backgroundColor: "white",
        id: "__alloyId464"
    });
    $.__views.login.add($.__views.__alloyId464);
    $.__views.__alloyId465 = Ti.UI.createView({
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId465"
    });
    $.__views.__alloyId464.add($.__views.__alloyId465);
    $.__views.__alloyId466 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        top: "10",
        image: "/images/close_icon.png",
        id: "__alloyId466"
    });
    $.__views.__alloyId465.add($.__views.__alloyId466);
    close ? $.__views.__alloyId466.addEventListener("click", close) : __defers["$.__views.__alloyId466!click!close"] = true;
    $.__views.__alloyId467 = Ti.UI.createView({
        height: "25%",
        width: Ti.UI.FILL,
        id: "__alloyId467"
    });
    $.__views.__alloyId464.add($.__views.__alloyId467);
    $.__views.__alloyId468 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId468"
    });
    $.__views.__alloyId467.add($.__views.__alloyId468);
    $.__views.__alloyId469 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "Username",
        id: "__alloyId469"
    });
    $.__views.__alloyId468.add($.__views.__alloyId469);
    $.__views.username = Ti.UI.createTextField({
        id: "username",
        width: "90%",
        height: "50%",
        value: "username",
        backgroundColor: "#E6E7E9",
        textAlign: "center",
        hintText: "someone@example.com",
        color: "black",
        borderRadius: "15"
    });
    $.__views.__alloyId468.add($.__views.username);
    $.__views.__alloyId470 = Ti.UI.createView({
        height: "25%",
        width: Ti.UI.FILL,
        id: "__alloyId470"
    });
    $.__views.__alloyId464.add($.__views.__alloyId470);
    $.__views.__alloyId471 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId471"
    });
    $.__views.__alloyId470.add($.__views.__alloyId471);
    $.__views.__alloyId472 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "Password",
        id: "__alloyId472"
    });
    $.__views.__alloyId471.add($.__views.__alloyId472);
    $.__views.password = Ti.UI.createTextField({
        id: "password",
        width: "90%",
        height: "50%",
        value: "password",
        backgroundColor: "#E6E7E9",
        textAlign: "center",
        hintText: "********",
        color: "black",
        passwordMask: "true",
        borderRadius: "15"
    });
    $.__views.__alloyId471.add($.__views.password);
    $.__views.__alloyId473 = Ti.UI.createView({
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId473"
    });
    $.__views.__alloyId464.add($.__views.__alloyId473);
    $.__views.__alloyId474 = Ti.UI.createButton({
        title: "Login",
        color: "#44C7D6",
        borderColor: "#44C7D6",
        height: "80%",
        width: "60%",
        backgroundColor: "white",
        borderRadius: "20",
        id: "__alloyId474"
    });
    $.__views.__alloyId473.add($.__views.__alloyId474);
    login ? $.__views.__alloyId474.addEventListener("click", login) : __defers["$.__views.__alloyId474!click!login"] = true;
    $.__views.__alloyId475 = Ti.UI.createView({
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId475"
    });
    $.__views.__alloyId464.add($.__views.__alloyId475);
    $.__views.__alloyId476 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#44C7D6",
        font: {
            fontSize: 14
        },
        text: "Not Registered yet?",
        id: "__alloyId476"
    });
    $.__views.__alloyId475.add($.__views.__alloyId476);
    register ? $.__views.__alloyId476.addEventListener("click", register) : __defers["$.__views.__alloyId476!click!register"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "black",
        top: "60",
        left: "10",
        right: "10",
        bottom: "10",
        zIndex: "1"
    });
    $.__views.home.add($.__views.scrollView);
    $.__views.__alloyId477 = Ti.UI.createView({
        width: "100%",
        height: "33%",
        backgroundColor: "red",
        backgroundImage: "/images/button_01.png",
        bottom: "5",
        id: "__alloyId477"
    });
    $.__views.scrollView.add($.__views.__alloyId477);
    myAccount ? $.__views.__alloyId477.addEventListener("click", myAccount) : __defers["$.__views.__alloyId477!click!myAccount"] = true;
    $.__views.__alloyId478 = Ti.UI.createView({
        layout: "horizontal",
        height: "33%",
        width: "100%",
        top: "5",
        bottom: "5",
        id: "__alloyId478"
    });
    $.__views.scrollView.add($.__views.__alloyId478);
    $.__views.__alloyId479 = Ti.UI.createView({
        height: "100%",
        width: "49%",
        right: "5",
        backgroundColor: "blue",
        backgroundImage: "/images/button_02.png",
        id: "__alloyId479"
    });
    $.__views.__alloyId478.add($.__views.__alloyId479);
    promoNews ? $.__views.__alloyId479.addEventListener("click", promoNews) : __defers["$.__views.__alloyId479!click!promoNews"] = true;
    $.__views.__alloyId480 = Ti.UI.createView({
        height: "100%",
        width: "auto",
        left: "5",
        backgroundColor: "orange",
        backgroundImage: "/images/button_03.png",
        id: "__alloyId480"
    });
    $.__views.__alloyId478.add($.__views.__alloyId480);
    product ? $.__views.__alloyId480.addEventListener("click", product) : __defers["$.__views.__alloyId480!click!product"] = true;
    $.__views.__alloyId481 = Ti.UI.createView({
        layout: "horizontal",
        height: "33%",
        width: "100%",
        top: "5",
        id: "__alloyId481"
    });
    $.__views.scrollView.add($.__views.__alloyId481);
    $.__views.__alloyId482 = Ti.UI.createView({
        height: "100%",
        width: "49%",
        right: "5",
        backgroundColor: "pink",
        backgroundImage: "/images/button_04.png",
        id: "__alloyId482"
    });
    $.__views.__alloyId481.add($.__views.__alloyId482);
    online ? $.__views.__alloyId482.addEventListener("click", online) : __defers["$.__views.__alloyId482!click!online"] = true;
    $.__views.__alloyId483 = Ti.UI.createView({
        layout: "vertical",
        height: "100%",
        width: "auto",
        left: "5",
        id: "__alloyId483"
    });
    $.__views.__alloyId481.add($.__views.__alloyId483);
    $.__views.__alloyId484 = Ti.UI.createView({
        height: "49%",
        width: "100%",
        bottom: "5",
        backgroundColor: "green",
        backgroundImage: "/images/button_05.png",
        id: "__alloyId484"
    });
    $.__views.__alloyId483.add($.__views.__alloyId484);
    history ? $.__views.__alloyId484.addEventListener("click", history) : __defers["$.__views.__alloyId484!click!history"] = true;
    $.__views.__alloyId485 = Ti.UI.createView({
        layout: "horizontal",
        height: "auto",
        width: "100%",
        top: "5",
        id: "__alloyId485"
    });
    $.__views.__alloyId483.add($.__views.__alloyId485);
    $.__views.__alloyId486 = Ti.UI.createView({
        height: "100%",
        width: "49%",
        right: "5",
        backgroundColor: "purple",
        backgroundImage: "/images/button_06.png",
        id: "__alloyId486"
    });
    $.__views.__alloyId485.add($.__views.__alloyId486);
    contact ? $.__views.__alloyId486.addEventListener("click", contact) : __defers["$.__views.__alloyId486!click!contact"] = true;
    $.__views.__alloyId487 = Ti.UI.createView({
        height: "100%",
        width: "auto",
        left: "5",
        backgroundColor: "gray",
        backgroundImage: "/images/button_07.png",
        id: "__alloyId487"
    });
    $.__views.__alloyId485.add($.__views.__alloyId487);
    setting ? $.__views.__alloyId487.addEventListener("click", setting) : __defers["$.__views.__alloyId487!click!setting"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    Ti.App.Properties.setString("root", "1");
    Ti.Platform.displayCaps.platformHeight;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER;
        var first = true;
        $.username.addEventListener("focus", function f() {
            if (first) {
                first = false;
                $.username.blur();
                $.password.blur();
            } else $.username.removeEventListener("focus", f);
        });
    }
    __defers["$.__views.__alloyId466!click!close"] && $.__views.__alloyId466.addEventListener("click", close);
    __defers["$.__views.__alloyId474!click!login"] && $.__views.__alloyId474.addEventListener("click", login);
    __defers["$.__views.__alloyId476!click!register"] && $.__views.__alloyId476.addEventListener("click", register);
    __defers["$.__views.__alloyId477!click!myAccount"] && $.__views.__alloyId477.addEventListener("click", myAccount);
    __defers["$.__views.__alloyId479!click!promoNews"] && $.__views.__alloyId479.addEventListener("click", promoNews);
    __defers["$.__views.__alloyId480!click!product"] && $.__views.__alloyId480.addEventListener("click", product);
    __defers["$.__views.__alloyId482!click!online"] && $.__views.__alloyId482.addEventListener("click", online);
    __defers["$.__views.__alloyId484!click!history"] && $.__views.__alloyId484.addEventListener("click", history);
    __defers["$.__views.__alloyId486!click!contact"] && $.__views.__alloyId486.addEventListener("click", contact);
    __defers["$.__views.__alloyId487!click!setting"] && $.__views.__alloyId487.addEventListener("click", setting);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;