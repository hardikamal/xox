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
        DRAWER.navigation("register", 2);
    }
    function forgot() {
        $.username.value = "";
        $.username.blur();
        $.password.value = "";
        $.password.blur();
        $.login.zIndex = 0;
        DRAWER.navigation("forgot", 2);
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
    $.__views.__alloyId452 = Alloy.createController("_header", {
        id: "__alloyId452",
        __parentSymbol: $.__views.home
    });
    $.__views.__alloyId452.setParent($.__views.home);
    $.__views.login = Ti.UI.createView({
        id: "login",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.home.add($.__views.login);
    $.__views.__alloyId453 = Ti.UI.createView({
        layout: "vertical",
        width: "90%",
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId453"
    });
    $.__views.login.add($.__views.__alloyId453);
    $.__views.__alloyId454 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId454"
    });
    $.__views.__alloyId453.add($.__views.__alloyId454);
    $.__views.__alloyId455 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        top: "10",
        image: "/images/close_icon.png",
        id: "__alloyId455"
    });
    $.__views.__alloyId454.add($.__views.__alloyId455);
    close ? $.__views.__alloyId455.addEventListener("click", close) : __defers["$.__views.__alloyId455!click!close"] = true;
    $.__views.__alloyId456 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId456"
    });
    $.__views.__alloyId453.add($.__views.__alloyId456);
    $.__views.__alloyId457 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId457"
    });
    $.__views.__alloyId456.add($.__views.__alloyId457);
    $.__views.__alloyId458 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "Username",
        id: "__alloyId458"
    });
    $.__views.__alloyId457.add($.__views.__alloyId458);
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
    $.__views.__alloyId457.add($.__views.username);
    $.__views.__alloyId459 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId459"
    });
    $.__views.__alloyId453.add($.__views.__alloyId459);
    $.__views.__alloyId460 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId460"
    });
    $.__views.__alloyId459.add($.__views.__alloyId460);
    $.__views.__alloyId461 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "Password",
        id: "__alloyId461"
    });
    $.__views.__alloyId460.add($.__views.__alloyId461);
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
    $.__views.__alloyId460.add($.__views.password);
    $.__views.__alloyId462 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId462"
    });
    $.__views.__alloyId453.add($.__views.__alloyId462);
    $.__views.__alloyId463 = Ti.UI.createButton({
        title: "Login",
        color: "#44C7D6",
        borderColor: "#44C7D6",
        height: "80%",
        width: "60%",
        backgroundColor: "white",
        borderRadius: "20",
        id: "__alloyId463"
    });
    $.__views.__alloyId462.add($.__views.__alloyId463);
    login ? $.__views.__alloyId463.addEventListener("click", login) : __defers["$.__views.__alloyId463!click!login"] = true;
    $.__views.__alloyId464 = Ti.UI.createView({
        height: "50",
        layout: "vertical",
        width: Ti.UI.FILL,
        id: "__alloyId464"
    });
    $.__views.__alloyId453.add($.__views.__alloyId464);
    $.__views.forgotText = Ti.UI.createLabel({
        width: "205",
        height: Ti.UI.SIZE,
        color: "#44C7D6",
        font: {
            fontSize: 14
        },
        text: "Forgot Username & Password?",
        id: "forgotText",
        textAlign: "center"
    });
    $.__views.__alloyId464.add($.__views.forgotText);
    forgot ? $.__views.forgotText.addEventListener("click", forgot) : __defers["$.__views.forgotText!click!forgot"] = true;
    $.__views.forgotLine = Ti.UI.createView({
        id: "forgotLine",
        backgroundColor: "#44C7D6",
        height: "1"
    });
    $.__views.__alloyId464.add($.__views.forgotLine);
    $.__views.__alloyId465 = Ti.UI.createView({
        height: "50",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        id: "__alloyId465"
    });
    $.__views.__alloyId453.add($.__views.__alloyId465);
    $.__views.__alloyId466 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "Not Registered yet?",
        textAlign: "center",
        id: "__alloyId466"
    });
    $.__views.__alloyId465.add($.__views.__alloyId466);
    $.__views.__alloyId467 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId467"
    });
    $.__views.__alloyId465.add($.__views.__alloyId467);
    $.__views.registerText = Ti.UI.createLabel({
        width: "50",
        height: Ti.UI.SIZE,
        color: "#44C7D6",
        font: {
            fontSize: 14
        },
        text: "Sign up",
        id: "registerText",
        textAlign: "center"
    });
    $.__views.__alloyId467.add($.__views.registerText);
    register ? $.__views.registerText.addEventListener("click", register) : __defers["$.__views.registerText!click!register"] = true;
    $.__views.registerLine = Ti.UI.createView({
        id: "registerLine",
        backgroundColor: "#44C7D6",
        height: "1"
    });
    $.__views.__alloyId467.add($.__views.registerLine);
    $.__views.__alloyId468 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "now.",
        textAlign: "center",
        id: "__alloyId468"
    });
    $.__views.__alloyId465.add($.__views.__alloyId468);
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
    $.__views.__alloyId469 = Ti.UI.createView({
        width: "100%",
        height: "33%",
        backgroundColor: "red",
        backgroundImage: "/images/button_01.png",
        bottom: "5",
        id: "__alloyId469"
    });
    $.__views.scrollView.add($.__views.__alloyId469);
    myAccount ? $.__views.__alloyId469.addEventListener("click", myAccount) : __defers["$.__views.__alloyId469!click!myAccount"] = true;
    $.__views.__alloyId470 = Ti.UI.createView({
        layout: "horizontal",
        height: "33%",
        width: "100%",
        top: "5",
        bottom: "5",
        id: "__alloyId470"
    });
    $.__views.scrollView.add($.__views.__alloyId470);
    $.__views.__alloyId471 = Ti.UI.createView({
        height: "100%",
        width: "49%",
        right: "5",
        backgroundColor: "blue",
        backgroundImage: "/images/button_02.png",
        id: "__alloyId471"
    });
    $.__views.__alloyId470.add($.__views.__alloyId471);
    promoNews ? $.__views.__alloyId471.addEventListener("click", promoNews) : __defers["$.__views.__alloyId471!click!promoNews"] = true;
    $.__views.__alloyId472 = Ti.UI.createView({
        height: "100%",
        width: "auto",
        left: "5",
        backgroundColor: "orange",
        backgroundImage: "/images/button_03.png",
        id: "__alloyId472"
    });
    $.__views.__alloyId470.add($.__views.__alloyId472);
    product ? $.__views.__alloyId472.addEventListener("click", product) : __defers["$.__views.__alloyId472!click!product"] = true;
    $.__views.__alloyId473 = Ti.UI.createView({
        layout: "horizontal",
        height: "33%",
        width: "100%",
        top: "5",
        id: "__alloyId473"
    });
    $.__views.scrollView.add($.__views.__alloyId473);
    $.__views.__alloyId474 = Ti.UI.createView({
        height: "100%",
        width: "49%",
        right: "5",
        backgroundColor: "pink",
        backgroundImage: "/images/button_04.png",
        id: "__alloyId474"
    });
    $.__views.__alloyId473.add($.__views.__alloyId474);
    online ? $.__views.__alloyId474.addEventListener("click", online) : __defers["$.__views.__alloyId474!click!online"] = true;
    $.__views.__alloyId475 = Ti.UI.createView({
        layout: "vertical",
        height: "100%",
        width: "auto",
        left: "5",
        id: "__alloyId475"
    });
    $.__views.__alloyId473.add($.__views.__alloyId475);
    $.__views.__alloyId476 = Ti.UI.createView({
        height: "49%",
        width: "100%",
        bottom: "5",
        backgroundColor: "green",
        backgroundImage: "/images/button_05.png",
        id: "__alloyId476"
    });
    $.__views.__alloyId475.add($.__views.__alloyId476);
    history ? $.__views.__alloyId476.addEventListener("click", history) : __defers["$.__views.__alloyId476!click!history"] = true;
    $.__views.__alloyId477 = Ti.UI.createView({
        layout: "horizontal",
        height: "auto",
        width: "100%",
        top: "5",
        id: "__alloyId477"
    });
    $.__views.__alloyId475.add($.__views.__alloyId477);
    $.__views.__alloyId478 = Ti.UI.createView({
        height: "100%",
        width: "49%",
        right: "5",
        backgroundColor: "purple",
        backgroundImage: "/images/button_06.png",
        id: "__alloyId478"
    });
    $.__views.__alloyId477.add($.__views.__alloyId478);
    contact ? $.__views.__alloyId478.addEventListener("click", contact) : __defers["$.__views.__alloyId478!click!contact"] = true;
    $.__views.__alloyId479 = Ti.UI.createView({
        height: "100%",
        width: "auto",
        left: "5",
        backgroundColor: "gray",
        backgroundImage: "/images/button_07.png",
        id: "__alloyId479"
    });
    $.__views.__alloyId477.add($.__views.__alloyId479);
    setting ? $.__views.__alloyId479.addEventListener("click", setting) : __defers["$.__views.__alloyId479!click!setting"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    Ti.App.Properties.setString("root", "1");
    Ti.Platform.displayCaps.platformHeight;
    $.forgotLine.width = $.forgotText.getWidth();
    $.registerLine.width = $.registerText.getWidth();
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
    __defers["$.__views.__alloyId455!click!close"] && $.__views.__alloyId455.addEventListener("click", close);
    __defers["$.__views.__alloyId463!click!login"] && $.__views.__alloyId463.addEventListener("click", login);
    __defers["$.__views.forgotText!click!forgot"] && $.__views.forgotText.addEventListener("click", forgot);
    __defers["$.__views.registerText!click!register"] && $.__views.registerText.addEventListener("click", register);
    __defers["$.__views.__alloyId469!click!myAccount"] && $.__views.__alloyId469.addEventListener("click", myAccount);
    __defers["$.__views.__alloyId471!click!promoNews"] && $.__views.__alloyId471.addEventListener("click", promoNews);
    __defers["$.__views.__alloyId472!click!product"] && $.__views.__alloyId472.addEventListener("click", product);
    __defers["$.__views.__alloyId474!click!online"] && $.__views.__alloyId474.addEventListener("click", online);
    __defers["$.__views.__alloyId476!click!history"] && $.__views.__alloyId476.addEventListener("click", history);
    __defers["$.__views.__alloyId478!click!contact"] && $.__views.__alloyId478.addEventListener("click", contact);
    __defers["$.__views.__alloyId479!click!setting"] && $.__views.__alloyId479.addEventListener("click", setting);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;