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
<<<<<<< HEAD
    $.__views.__alloyId501 = Alloy.createController("_header", {
        id: "__alloyId501",
        __parentSymbol: $.__views.home
    });
    $.__views.__alloyId501.setParent($.__views.home);
=======
    $.__views.__alloyId465 = Alloy.createController("_header", {
        id: "__alloyId465",
        __parentSymbol: $.__views.home
    });
    $.__views.__alloyId465.setParent($.__views.home);
>>>>>>> origin/master
    $.__views.login = Ti.UI.createView({
        id: "login",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.home.add($.__views.login);
<<<<<<< HEAD
    $.__views.__alloyId502 = Ti.UI.createView({
=======
    $.__views.__alloyId466 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        width: "90%",
        height: Ti.UI.SIZE,
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId502"
    });
    $.__views.login.add($.__views.__alloyId502);
    $.__views.__alloyId503 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId503"
    });
    $.__views.__alloyId502.add($.__views.__alloyId503);
    $.__views.__alloyId504 = Ti.UI.createImageView({
=======
        id: "__alloyId466"
    });
    $.__views.login.add($.__views.__alloyId466);
    $.__views.__alloyId467 = Ti.UI.createView({
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId467"
    });
    $.__views.__alloyId466.add($.__views.__alloyId467);
    $.__views.__alloyId468 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        top: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId504"
    });
    $.__views.__alloyId503.add($.__views.__alloyId504);
    close ? $.__views.__alloyId504.addEventListener("click", close) : __defers["$.__views.__alloyId504!click!close"] = true;
    $.__views.__alloyId505 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId505"
    });
    $.__views.__alloyId502.add($.__views.__alloyId505);
    $.__views.__alloyId506 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId506"
    });
    $.__views.__alloyId505.add($.__views.__alloyId506);
    $.__views.__alloyId507 = Ti.UI.createLabel({
=======
        id: "__alloyId468"
    });
    $.__views.__alloyId467.add($.__views.__alloyId468);
    close ? $.__views.__alloyId468.addEventListener("click", close) : __defers["$.__views.__alloyId468!click!close"] = true;
    $.__views.__alloyId469 = Ti.UI.createView({
        height: "25%",
        width: Ti.UI.FILL,
        id: "__alloyId469"
    });
    $.__views.__alloyId466.add($.__views.__alloyId469);
    $.__views.__alloyId470 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId470"
    });
    $.__views.__alloyId469.add($.__views.__alloyId470);
    $.__views.__alloyId471 = Ti.UI.createLabel({
>>>>>>> origin/master
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "Username",
<<<<<<< HEAD
        id: "__alloyId507"
    });
    $.__views.__alloyId506.add($.__views.__alloyId507);
=======
        id: "__alloyId471"
    });
    $.__views.__alloyId470.add($.__views.__alloyId471);
>>>>>>> origin/master
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
<<<<<<< HEAD
    $.__views.__alloyId506.add($.__views.username);
    $.__views.__alloyId508 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId508"
    });
    $.__views.__alloyId502.add($.__views.__alloyId508);
    $.__views.__alloyId509 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId509"
    });
    $.__views.__alloyId508.add($.__views.__alloyId509);
    $.__views.__alloyId510 = Ti.UI.createLabel({
=======
    $.__views.__alloyId470.add($.__views.username);
    $.__views.__alloyId472 = Ti.UI.createView({
        height: "25%",
        width: Ti.UI.FILL,
        id: "__alloyId472"
    });
    $.__views.__alloyId466.add($.__views.__alloyId472);
    $.__views.__alloyId473 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId473"
    });
    $.__views.__alloyId472.add($.__views.__alloyId473);
    $.__views.__alloyId474 = Ti.UI.createLabel({
>>>>>>> origin/master
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "Password",
<<<<<<< HEAD
        id: "__alloyId510"
    });
    $.__views.__alloyId509.add($.__views.__alloyId510);
=======
        id: "__alloyId474"
    });
    $.__views.__alloyId473.add($.__views.__alloyId474);
>>>>>>> origin/master
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
<<<<<<< HEAD
    $.__views.__alloyId509.add($.__views.password);
    $.__views.__alloyId511 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId511"
    });
    $.__views.__alloyId502.add($.__views.__alloyId511);
    $.__views.__alloyId512 = Ti.UI.createButton({
=======
    $.__views.__alloyId473.add($.__views.password);
    $.__views.__alloyId475 = Ti.UI.createView({
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId475"
    });
    $.__views.__alloyId466.add($.__views.__alloyId475);
    $.__views.__alloyId476 = Ti.UI.createButton({
>>>>>>> origin/master
        title: "Login",
        color: "#44C7D6",
        borderColor: "#44C7D6",
        height: "80%",
        width: "60%",
        backgroundColor: "white",
        borderRadius: "20",
<<<<<<< HEAD
        id: "__alloyId512"
    });
    $.__views.__alloyId511.add($.__views.__alloyId512);
    login ? $.__views.__alloyId512.addEventListener("click", login) : __defers["$.__views.__alloyId512!click!login"] = true;
    $.__views.__alloyId513 = Ti.UI.createView({
        height: "50",
        layout: "vertical",
        width: Ti.UI.FILL,
        id: "__alloyId513"
    });
    $.__views.__alloyId502.add($.__views.__alloyId513);
    $.__views.forgotText = Ti.UI.createLabel({
        width: "205",
=======
        id: "__alloyId476"
    });
    $.__views.__alloyId475.add($.__views.__alloyId476);
    login ? $.__views.__alloyId476.addEventListener("click", login) : __defers["$.__views.__alloyId476!click!login"] = true;
    $.__views.__alloyId477 = Ti.UI.createView({
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId477"
    });
    $.__views.__alloyId466.add($.__views.__alloyId477);
    $.__views.__alloyId478 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
>>>>>>> origin/master
        height: Ti.UI.SIZE,
        color: "#44C7D6",
        font: {
            fontSize: 14
        },
        text: "Forgot Username & Password?",
        id: "forgotText",
        textAlign: "center"
    });
    $.__views.__alloyId513.add($.__views.forgotText);
    forgot ? $.__views.forgotText.addEventListener("click", forgot) : __defers["$.__views.forgotText!click!forgot"] = true;
    $.__views.forgotLine = Ti.UI.createView({
        id: "forgotLine",
        backgroundColor: "#44C7D6",
        height: "1"
    });
    $.__views.__alloyId513.add($.__views.forgotLine);
    $.__views.__alloyId514 = Ti.UI.createView({
        height: "50",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        id: "__alloyId514"
    });
    $.__views.__alloyId502.add($.__views.__alloyId514);
    $.__views.__alloyId515 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "Not Registered yet?",
<<<<<<< HEAD
        textAlign: "center",
        id: "__alloyId515"
    });
    $.__views.__alloyId514.add($.__views.__alloyId515);
    $.__views.__alloyId516 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId516"
    });
    $.__views.__alloyId514.add($.__views.__alloyId516);
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
    $.__views.__alloyId516.add($.__views.registerText);
    register ? $.__views.registerText.addEventListener("click", register) : __defers["$.__views.registerText!click!register"] = true;
    $.__views.registerLine = Ti.UI.createView({
        id: "registerLine",
        backgroundColor: "#44C7D6",
        height: "1"
    });
    $.__views.__alloyId516.add($.__views.registerLine);
    $.__views.__alloyId517 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "now.",
        textAlign: "center",
        id: "__alloyId517"
    });
    $.__views.__alloyId514.add($.__views.__alloyId517);
=======
        id: "__alloyId478"
    });
    $.__views.__alloyId477.add($.__views.__alloyId478);
    register ? $.__views.__alloyId478.addEventListener("click", register) : __defers["$.__views.__alloyId478!click!register"] = true;
>>>>>>> origin/master
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
<<<<<<< HEAD
    $.__views.__alloyId518 = Ti.UI.createView({
=======
    $.__views.__alloyId479 = Ti.UI.createView({
>>>>>>> origin/master
        width: "100%",
        height: "33%",
        backgroundColor: "red",
        backgroundImage: "/images/button_01.png",
        bottom: "5",
<<<<<<< HEAD
        id: "__alloyId518"
    });
    $.__views.scrollView.add($.__views.__alloyId518);
    myAccount ? $.__views.__alloyId518.addEventListener("click", myAccount) : __defers["$.__views.__alloyId518!click!myAccount"] = true;
    $.__views.__alloyId519 = Ti.UI.createView({
=======
        id: "__alloyId479"
    });
    $.__views.scrollView.add($.__views.__alloyId479);
    myAccount ? $.__views.__alloyId479.addEventListener("click", myAccount) : __defers["$.__views.__alloyId479!click!myAccount"] = true;
    $.__views.__alloyId480 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "33%",
        width: "100%",
        top: "5",
        bottom: "5",
<<<<<<< HEAD
        id: "__alloyId519"
    });
    $.__views.scrollView.add($.__views.__alloyId519);
    $.__views.__alloyId520 = Ti.UI.createView({
=======
        id: "__alloyId480"
    });
    $.__views.scrollView.add($.__views.__alloyId480);
    $.__views.__alloyId481 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: "49%",
        right: "5",
        backgroundColor: "blue",
        backgroundImage: "/images/button_02.png",
<<<<<<< HEAD
        id: "__alloyId520"
    });
    $.__views.__alloyId519.add($.__views.__alloyId520);
    promoNews ? $.__views.__alloyId520.addEventListener("click", promoNews) : __defers["$.__views.__alloyId520!click!promoNews"] = true;
    $.__views.__alloyId521 = Ti.UI.createView({
=======
        id: "__alloyId481"
    });
    $.__views.__alloyId480.add($.__views.__alloyId481);
    promoNews ? $.__views.__alloyId481.addEventListener("click", promoNews) : __defers["$.__views.__alloyId481!click!promoNews"] = true;
    $.__views.__alloyId482 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: "auto",
        left: "5",
        backgroundColor: "orange",
        backgroundImage: "/images/button_03.png",
<<<<<<< HEAD
        id: "__alloyId521"
    });
    $.__views.__alloyId519.add($.__views.__alloyId521);
    product ? $.__views.__alloyId521.addEventListener("click", product) : __defers["$.__views.__alloyId521!click!product"] = true;
    $.__views.__alloyId522 = Ti.UI.createView({
=======
        id: "__alloyId482"
    });
    $.__views.__alloyId480.add($.__views.__alloyId482);
    product ? $.__views.__alloyId482.addEventListener("click", product) : __defers["$.__views.__alloyId482!click!product"] = true;
    $.__views.__alloyId483 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "33%",
        width: "100%",
        top: "5",
<<<<<<< HEAD
        id: "__alloyId522"
    });
    $.__views.scrollView.add($.__views.__alloyId522);
    $.__views.__alloyId523 = Ti.UI.createView({
=======
        id: "__alloyId483"
    });
    $.__views.scrollView.add($.__views.__alloyId483);
    $.__views.__alloyId484 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: "49%",
        right: "5",
        backgroundColor: "pink",
        backgroundImage: "/images/button_04.png",
<<<<<<< HEAD
        id: "__alloyId523"
    });
    $.__views.__alloyId522.add($.__views.__alloyId523);
    online ? $.__views.__alloyId523.addEventListener("click", online) : __defers["$.__views.__alloyId523!click!online"] = true;
    $.__views.__alloyId524 = Ti.UI.createView({
=======
        id: "__alloyId484"
    });
    $.__views.__alloyId483.add($.__views.__alloyId484);
    online ? $.__views.__alloyId484.addEventListener("click", online) : __defers["$.__views.__alloyId484!click!online"] = true;
    $.__views.__alloyId485 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: "100%",
        width: "auto",
        left: "5",
<<<<<<< HEAD
        id: "__alloyId524"
    });
    $.__views.__alloyId522.add($.__views.__alloyId524);
    $.__views.__alloyId525 = Ti.UI.createView({
=======
        id: "__alloyId485"
    });
    $.__views.__alloyId483.add($.__views.__alloyId485);
    $.__views.__alloyId486 = Ti.UI.createView({
>>>>>>> origin/master
        height: "49%",
        width: "100%",
        bottom: "5",
        backgroundColor: "green",
        backgroundImage: "/images/button_05.png",
<<<<<<< HEAD
        id: "__alloyId525"
    });
    $.__views.__alloyId524.add($.__views.__alloyId525);
    history ? $.__views.__alloyId525.addEventListener("click", history) : __defers["$.__views.__alloyId525!click!history"] = true;
    $.__views.__alloyId526 = Ti.UI.createView({
=======
        id: "__alloyId486"
    });
    $.__views.__alloyId485.add($.__views.__alloyId486);
    history ? $.__views.__alloyId486.addEventListener("click", history) : __defers["$.__views.__alloyId486!click!history"] = true;
    $.__views.__alloyId487 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "auto",
        width: "100%",
        top: "5",
<<<<<<< HEAD
        id: "__alloyId526"
    });
    $.__views.__alloyId524.add($.__views.__alloyId526);
    $.__views.__alloyId527 = Ti.UI.createView({
=======
        id: "__alloyId487"
    });
    $.__views.__alloyId485.add($.__views.__alloyId487);
    $.__views.__alloyId488 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: "49%",
        right: "5",
        backgroundColor: "purple",
        backgroundImage: "/images/button_06.png",
<<<<<<< HEAD
        id: "__alloyId527"
    });
    $.__views.__alloyId526.add($.__views.__alloyId527);
    contact ? $.__views.__alloyId527.addEventListener("click", contact) : __defers["$.__views.__alloyId527!click!contact"] = true;
    $.__views.__alloyId528 = Ti.UI.createView({
=======
        id: "__alloyId488"
    });
    $.__views.__alloyId487.add($.__views.__alloyId488);
    contact ? $.__views.__alloyId488.addEventListener("click", contact) : __defers["$.__views.__alloyId488!click!contact"] = true;
    $.__views.__alloyId489 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: "auto",
        left: "5",
        backgroundColor: "gray",
        backgroundImage: "/images/button_07.png",
<<<<<<< HEAD
        id: "__alloyId528"
    });
    $.__views.__alloyId526.add($.__views.__alloyId528);
    setting ? $.__views.__alloyId528.addEventListener("click", setting) : __defers["$.__views.__alloyId528!click!setting"] = true;
=======
        id: "__alloyId489"
    });
    $.__views.__alloyId487.add($.__views.__alloyId489);
    setting ? $.__views.__alloyId489.addEventListener("click", setting) : __defers["$.__views.__alloyId489!click!setting"] = true;
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    Ti.App.Properties.setString("root", "1");
    Ti.Platform.displayCaps.platformHeight;
    $.forgotLine.width = $.forgotText.getWidth();
    $.registerLine.width = $.registerText.getWidth();
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
<<<<<<< HEAD
    __defers["$.__views.__alloyId504!click!close"] && $.__views.__alloyId504.addEventListener("click", close);
    __defers["$.__views.__alloyId512!click!login"] && $.__views.__alloyId512.addEventListener("click", login);
    __defers["$.__views.forgotText!click!forgot"] && $.__views.forgotText.addEventListener("click", forgot);
    __defers["$.__views.registerText!click!register"] && $.__views.registerText.addEventListener("click", register);
    __defers["$.__views.__alloyId518!click!myAccount"] && $.__views.__alloyId518.addEventListener("click", myAccount);
    __defers["$.__views.__alloyId520!click!promoNews"] && $.__views.__alloyId520.addEventListener("click", promoNews);
    __defers["$.__views.__alloyId521!click!product"] && $.__views.__alloyId521.addEventListener("click", product);
    __defers["$.__views.__alloyId523!click!online"] && $.__views.__alloyId523.addEventListener("click", online);
    __defers["$.__views.__alloyId525!click!history"] && $.__views.__alloyId525.addEventListener("click", history);
    __defers["$.__views.__alloyId527!click!contact"] && $.__views.__alloyId527.addEventListener("click", contact);
    __defers["$.__views.__alloyId528!click!setting"] && $.__views.__alloyId528.addEventListener("click", setting);
=======
    __defers["$.__views.__alloyId468!click!close"] && $.__views.__alloyId468.addEventListener("click", close);
    __defers["$.__views.__alloyId476!click!login"] && $.__views.__alloyId476.addEventListener("click", login);
    __defers["$.__views.__alloyId478!click!register"] && $.__views.__alloyId478.addEventListener("click", register);
    __defers["$.__views.__alloyId479!click!myAccount"] && $.__views.__alloyId479.addEventListener("click", myAccount);
    __defers["$.__views.__alloyId481!click!promoNews"] && $.__views.__alloyId481.addEventListener("click", promoNews);
    __defers["$.__views.__alloyId482!click!product"] && $.__views.__alloyId482.addEventListener("click", product);
    __defers["$.__views.__alloyId484!click!online"] && $.__views.__alloyId484.addEventListener("click", online);
    __defers["$.__views.__alloyId486!click!history"] && $.__views.__alloyId486.addEventListener("click", history);
    __defers["$.__views.__alloyId488!click!contact"] && $.__views.__alloyId488.addEventListener("click", contact);
    __defers["$.__views.__alloyId489!click!setting"] && $.__views.__alloyId489.addEventListener("click", setting);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;