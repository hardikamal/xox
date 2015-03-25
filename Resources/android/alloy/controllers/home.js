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
        DRAWER.navigation("promo", 1);
    }
    function product() {
        DRAWER.navigation("products", 1);
    }
    function online() {
        DRAWER.navigation("onlinePurchases", 1);
    }
    function contact() {
        DRAWER.navigation("contact", 1);
    }
    function setting() {
        DRAWER.navigation("settings", 1);
    }
    function support() {
        DRAWER.navigation("support", 1);
    }
    function register() {
        $.username.value = "";
        $.username.blur();
        $.password.value = "";
        $.password.blur();
        $.login.zIndex = 0;
        DRAWER.navigation("register", 1);
    }
    function forgot() {
        $.username.value = "";
        $.username.blur();
        $.password.value = "";
        $.password.blur();
        $.login.zIndex = 0;
        DRAWER.navigation("forgot", 1);
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
            DRAWER.navigation("myAccount", 1);
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
    $.__views.__alloyId521 = Alloy.createController("_header", {
        id: "__alloyId521",
        __parentSymbol: $.__views.home
    });
    $.__views.__alloyId521.setParent($.__views.home);
    $.__views.login = Ti.UI.createView({
        id: "login",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.home.add($.__views.login);
    $.__views.__alloyId522 = Ti.UI.createView({
        layout: "vertical",
        width: "90%",
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId522"
    });
    $.__views.login.add($.__views.__alloyId522);
    $.__views.__alloyId523 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId523"
    });
    $.__views.__alloyId522.add($.__views.__alloyId523);
    $.__views.__alloyId524 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        top: "10",
        image: "/images/close_icon.png",
        id: "__alloyId524"
    });
    $.__views.__alloyId523.add($.__views.__alloyId524);
    close ? $.__views.__alloyId524.addEventListener("click", close) : __defers["$.__views.__alloyId524!click!close"] = true;
    $.__views.__alloyId525 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId525"
    });
    $.__views.__alloyId522.add($.__views.__alloyId525);
    $.__views.__alloyId526 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId526"
    });
    $.__views.__alloyId525.add($.__views.__alloyId526);
    $.__views.__alloyId527 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "Username",
        id: "__alloyId527"
    });
    $.__views.__alloyId526.add($.__views.__alloyId527);
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
    $.__views.__alloyId526.add($.__views.username);
    $.__views.__alloyId528 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId528"
    });
    $.__views.__alloyId522.add($.__views.__alloyId528);
    $.__views.__alloyId529 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId529"
    });
    $.__views.__alloyId528.add($.__views.__alloyId529);
    $.__views.__alloyId530 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "Password",
        id: "__alloyId530"
    });
    $.__views.__alloyId529.add($.__views.__alloyId530);
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
    $.__views.__alloyId529.add($.__views.password);
    $.__views.__alloyId531 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId531"
    });
    $.__views.__alloyId522.add($.__views.__alloyId531);
    $.__views.__alloyId532 = Ti.UI.createButton({
        title: "Login",
        color: "#44C7D6",
        borderColor: "#44C7D6",
        height: "80%",
        width: "60%",
        backgroundColor: "white",
        borderRadius: "20",
        id: "__alloyId532"
    });
    $.__views.__alloyId531.add($.__views.__alloyId532);
    login ? $.__views.__alloyId532.addEventListener("click", login) : __defers["$.__views.__alloyId532!click!login"] = true;
    $.__views.__alloyId533 = Ti.UI.createView({
        height: "50",
        layout: "vertical",
        width: Ti.UI.FILL,
        id: "__alloyId533"
    });
    $.__views.__alloyId522.add($.__views.__alloyId533);
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
    $.__views.__alloyId533.add($.__views.forgotText);
    forgot ? $.__views.forgotText.addEventListener("click", forgot) : __defers["$.__views.forgotText!click!forgot"] = true;
    $.__views.forgotLine = Ti.UI.createView({
        id: "forgotLine",
        backgroundColor: "#44C7D6",
        height: "1"
    });
    $.__views.__alloyId533.add($.__views.forgotLine);
    $.__views.__alloyId534 = Ti.UI.createView({
        height: "50",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        id: "__alloyId534"
    });
    $.__views.__alloyId522.add($.__views.__alloyId534);
    $.__views.__alloyId535 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "Not Registered yet?",
        textAlign: "center",
        id: "__alloyId535"
    });
    $.__views.__alloyId534.add($.__views.__alloyId535);
    $.__views.__alloyId536 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId536"
    });
    $.__views.__alloyId534.add($.__views.__alloyId536);
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
    $.__views.__alloyId536.add($.__views.registerText);
    register ? $.__views.registerText.addEventListener("click", register) : __defers["$.__views.registerText!click!register"] = true;
    $.__views.registerLine = Ti.UI.createView({
        id: "registerLine",
        backgroundColor: "#44C7D6",
        height: "1"
    });
    $.__views.__alloyId536.add($.__views.registerLine);
    $.__views.__alloyId537 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "now.",
        textAlign: "center",
        id: "__alloyId537"
    });
    $.__views.__alloyId534.add($.__views.__alloyId537);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "black",
        top: "51",
        bottom: "1",
        left: "1",
        right: "1",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        contentHeight: "auto",
        zIndex: "1"
    });
    $.__views.home.add($.__views.scrollView);
    $.__views.__alloyId538 = Ti.UI.createView({
        layout: "horizontal",
        height: "26%",
        width: Ti.UI.FILL,
        id: "__alloyId538"
    });
    $.__views.scrollView.add($.__views.__alloyId538);
    $.__views.__alloyId539 = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: "50%",
        bottom: "1",
        backgroundColor: "red",
        backgroundImage: "/images/button_01.png",
        id: "__alloyId539"
    });
    $.__views.__alloyId538.add($.__views.__alloyId539);
    myAccount ? $.__views.__alloyId539.addEventListener("click", myAccount) : __defers["$.__views.__alloyId539!click!myAccount"] = true;
    $.__views.__alloyId540 = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: "auto",
        bottom: "1",
        left: "1",
        backgroundColor: "blue",
        backgroundImage: "/images/button_02.png",
        id: "__alloyId540"
    });
    $.__views.__alloyId538.add($.__views.__alloyId540);
    promoNews ? $.__views.__alloyId540.addEventListener("click", promoNews) : __defers["$.__views.__alloyId540!click!promoNews"] = true;
    $.__views.__alloyId541 = Ti.UI.createView({
        layout: "horizontal",
        height: "26%",
        width: Ti.UI.FILL,
        id: "__alloyId541"
    });
    $.__views.scrollView.add($.__views.__alloyId541);
    $.__views.__alloyId542 = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: "50%",
        bottom: "1",
        backgroundColor: "orange",
        backgroundImage: "/images/button_03.png",
        id: "__alloyId542"
    });
    $.__views.__alloyId541.add($.__views.__alloyId542);
    product ? $.__views.__alloyId542.addEventListener("click", product) : __defers["$.__views.__alloyId542!click!product"] = true;
    $.__views.__alloyId543 = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: "auto",
        bottom: "1",
        left: "1",
        backgroundColor: "pink",
        backgroundImage: "/images/button_04.png",
        id: "__alloyId543"
    });
    $.__views.__alloyId541.add($.__views.__alloyId543);
    online ? $.__views.__alloyId543.addEventListener("click", online) : __defers["$.__views.__alloyId543!click!online"] = true;
    $.__views.__alloyId544 = Ti.UI.createView({
        layout: "horizontal",
        height: "26%",
        width: Ti.UI.FILL,
        id: "__alloyId544"
    });
    $.__views.scrollView.add($.__views.__alloyId544);
    $.__views.__alloyId545 = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: "50%",
        bottom: "1",
        backgroundColor: "green",
        id: "__alloyId545"
    });
    $.__views.__alloyId544.add($.__views.__alloyId545);
    $.__views.__alloyId546 = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: "auto",
        bottom: "1",
        left: "1",
        backgroundColor: "purple",
        backgroundImage: "/images/button_06.png",
        id: "__alloyId546"
    });
    $.__views.__alloyId544.add($.__views.__alloyId546);
    contact ? $.__views.__alloyId546.addEventListener("click", contact) : __defers["$.__views.__alloyId546!click!contact"] = true;
    $.__views.__alloyId547 = Ti.UI.createView({
        layout: "horizontal",
        height: "26%",
        width: Ti.UI.FILL,
        id: "__alloyId547"
    });
    $.__views.scrollView.add($.__views.__alloyId547);
    $.__views.__alloyId548 = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: "50%",
        bottom: "1",
        backgroundColor: "yellow",
        id: "__alloyId548"
    });
    $.__views.__alloyId547.add($.__views.__alloyId548);
    support ? $.__views.__alloyId548.addEventListener("click", support) : __defers["$.__views.__alloyId548!click!support"] = true;
    $.__views.__alloyId549 = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: "auto",
        bottom: "1",
        left: "1",
        backgroundColor: "gray",
        backgroundImage: "/images/button_07.png",
        id: "__alloyId549"
    });
    $.__views.__alloyId547.add($.__views.__alloyId549);
    setting ? $.__views.__alloyId549.addEventListener("click", setting) : __defers["$.__views.__alloyId549!click!setting"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    Ti.App.Properties.setString("root", "1");
    Ti.Platform.displayCaps.platformHeight;
    $.forgotLine.width = $.forgotText.getWidth();
    $.registerLine.width = $.registerText.getWidth();
    var first = true;
    $.username.addEventListener("focus", function f() {
        if (first) {
            first = false;
            $.username.blur();
            $.password.blur();
        } else $.username.removeEventListener("focus", f);
    });
    __defers["$.__views.__alloyId524!click!close"] && $.__views.__alloyId524.addEventListener("click", close);
    __defers["$.__views.__alloyId532!click!login"] && $.__views.__alloyId532.addEventListener("click", login);
    __defers["$.__views.forgotText!click!forgot"] && $.__views.forgotText.addEventListener("click", forgot);
    __defers["$.__views.registerText!click!register"] && $.__views.registerText.addEventListener("click", register);
    __defers["$.__views.__alloyId539!click!myAccount"] && $.__views.__alloyId539.addEventListener("click", myAccount);
    __defers["$.__views.__alloyId540!click!promoNews"] && $.__views.__alloyId540.addEventListener("click", promoNews);
    __defers["$.__views.__alloyId542!click!product"] && $.__views.__alloyId542.addEventListener("click", product);
    __defers["$.__views.__alloyId543!click!online"] && $.__views.__alloyId543.addEventListener("click", online);
    __defers["$.__views.__alloyId546!click!contact"] && $.__views.__alloyId546.addEventListener("click", contact);
    __defers["$.__views.__alloyId548!click!support"] && $.__views.__alloyId548.addEventListener("click", support);
    __defers["$.__views.__alloyId549!click!setting"] && $.__views.__alloyId549.addEventListener("click", setting);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;