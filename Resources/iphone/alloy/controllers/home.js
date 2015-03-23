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
    $.__views.__alloyId499 = Alloy.createController("_header", {
        id: "__alloyId499",
        __parentSymbol: $.__views.home
    });
    $.__views.__alloyId499.setParent($.__views.home);
=======
    $.__views.__alloyId333 = Alloy.createController("_header", {
        id: "__alloyId333",
        __parentSymbol: $.__views.home
    });
    $.__views.__alloyId333.setParent($.__views.home);
>>>>>>> origin/master
    $.__views.login = Ti.UI.createView({
        id: "login",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.home.add($.__views.login);
<<<<<<< HEAD
    $.__views.__alloyId500 = Ti.UI.createView({
=======
    $.__views.__alloyId334 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        width: "90%",
        height: Ti.UI.SIZE,
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId500"
    });
    $.__views.login.add($.__views.__alloyId500);
    $.__views.__alloyId501 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId501"
    });
    $.__views.__alloyId500.add($.__views.__alloyId501);
    $.__views.__alloyId502 = Ti.UI.createImageView({
=======
        id: "__alloyId334"
    });
    $.__views.login.add($.__views.__alloyId334);
    $.__views.__alloyId335 = Ti.UI.createView({
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId335"
    });
    $.__views.__alloyId334.add($.__views.__alloyId335);
    $.__views.__alloyId336 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        top: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId502"
    });
    $.__views.__alloyId501.add($.__views.__alloyId502);
    close ? $.__views.__alloyId502.addEventListener("click", close) : __defers["$.__views.__alloyId502!click!close"] = true;
    $.__views.__alloyId503 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId503"
    });
    $.__views.__alloyId500.add($.__views.__alloyId503);
    $.__views.__alloyId504 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId504"
    });
    $.__views.__alloyId503.add($.__views.__alloyId504);
    $.__views.__alloyId505 = Ti.UI.createLabel({
=======
        id: "__alloyId336"
    });
    $.__views.__alloyId335.add($.__views.__alloyId336);
    close ? $.__views.__alloyId336.addEventListener("click", close) : __defers["$.__views.__alloyId336!click!close"] = true;
    $.__views.__alloyId337 = Ti.UI.createView({
        height: "25%",
        width: Ti.UI.FILL,
        id: "__alloyId337"
    });
    $.__views.__alloyId334.add($.__views.__alloyId337);
    $.__views.__alloyId338 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId338"
    });
    $.__views.__alloyId337.add($.__views.__alloyId338);
    $.__views.__alloyId339 = Ti.UI.createLabel({
>>>>>>> origin/master
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "Username",
<<<<<<< HEAD
        id: "__alloyId505"
    });
    $.__views.__alloyId504.add($.__views.__alloyId505);
=======
        id: "__alloyId339"
    });
    $.__views.__alloyId338.add($.__views.__alloyId339);
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
    $.__views.__alloyId504.add($.__views.username);
    $.__views.__alloyId506 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId506"
    });
    $.__views.__alloyId500.add($.__views.__alloyId506);
    $.__views.__alloyId507 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId507"
    });
    $.__views.__alloyId506.add($.__views.__alloyId507);
    $.__views.__alloyId508 = Ti.UI.createLabel({
=======
    $.__views.__alloyId338.add($.__views.username);
    $.__views.__alloyId340 = Ti.UI.createView({
        height: "25%",
        width: Ti.UI.FILL,
        id: "__alloyId340"
    });
    $.__views.__alloyId334.add($.__views.__alloyId340);
    $.__views.__alloyId341 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId341"
    });
    $.__views.__alloyId340.add($.__views.__alloyId341);
    $.__views.__alloyId342 = Ti.UI.createLabel({
>>>>>>> origin/master
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "Password",
<<<<<<< HEAD
        id: "__alloyId508"
    });
    $.__views.__alloyId507.add($.__views.__alloyId508);
=======
        id: "__alloyId342"
    });
    $.__views.__alloyId341.add($.__views.__alloyId342);
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
    $.__views.__alloyId507.add($.__views.password);
    $.__views.__alloyId509 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId509"
    });
    $.__views.__alloyId500.add($.__views.__alloyId509);
    $.__views.__alloyId510 = Ti.UI.createButton({
=======
    $.__views.__alloyId341.add($.__views.password);
    $.__views.__alloyId343 = Ti.UI.createView({
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId343"
    });
    $.__views.__alloyId334.add($.__views.__alloyId343);
    $.__views.__alloyId344 = Ti.UI.createButton({
>>>>>>> origin/master
        title: "Login",
        color: "#44C7D6",
        borderColor: "#44C7D6",
        height: "80%",
        width: "60%",
        backgroundColor: "white",
        borderRadius: "20",
<<<<<<< HEAD
        id: "__alloyId510"
    });
    $.__views.__alloyId509.add($.__views.__alloyId510);
    login ? $.__views.__alloyId510.addEventListener("click", login) : __defers["$.__views.__alloyId510!click!login"] = true;
    $.__views.__alloyId511 = Ti.UI.createView({
        height: "50",
        layout: "vertical",
        width: Ti.UI.FILL,
        id: "__alloyId511"
    });
    $.__views.__alloyId500.add($.__views.__alloyId511);
    $.__views.forgotText = Ti.UI.createLabel({
        width: "205",
=======
        id: "__alloyId344"
    });
    $.__views.__alloyId343.add($.__views.__alloyId344);
    login ? $.__views.__alloyId344.addEventListener("click", login) : __defers["$.__views.__alloyId344!click!login"] = true;
    $.__views.__alloyId345 = Ti.UI.createView({
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId345"
    });
    $.__views.__alloyId334.add($.__views.__alloyId345);
    $.__views.__alloyId346 = Ti.UI.createLabel({
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
    $.__views.__alloyId511.add($.__views.forgotText);
    forgot ? $.__views.forgotText.addEventListener("click", forgot) : __defers["$.__views.forgotText!click!forgot"] = true;
    $.__views.forgotLine = Ti.UI.createView({
        id: "forgotLine",
        backgroundColor: "#44C7D6",
        height: "1"
    });
    $.__views.__alloyId511.add($.__views.forgotLine);
    $.__views.__alloyId512 = Ti.UI.createView({
        height: "50",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        id: "__alloyId512"
    });
    $.__views.__alloyId500.add($.__views.__alloyId512);
    $.__views.__alloyId513 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "Not Registered yet?",
<<<<<<< HEAD
        textAlign: "center",
        id: "__alloyId513"
    });
    $.__views.__alloyId512.add($.__views.__alloyId513);
    $.__views.__alloyId514 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId514"
    });
    $.__views.__alloyId512.add($.__views.__alloyId514);
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
    $.__views.__alloyId514.add($.__views.registerText);
    register ? $.__views.registerText.addEventListener("click", register) : __defers["$.__views.registerText!click!register"] = true;
    $.__views.registerLine = Ti.UI.createView({
        id: "registerLine",
        backgroundColor: "#44C7D6",
        height: "1"
    });
    $.__views.__alloyId514.add($.__views.registerLine);
    $.__views.__alloyId515 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "now.",
        textAlign: "center",
        id: "__alloyId515"
    });
    $.__views.__alloyId512.add($.__views.__alloyId515);
=======
        id: "__alloyId346"
    });
    $.__views.__alloyId345.add($.__views.__alloyId346);
    register ? $.__views.__alloyId346.addEventListener("click", register) : __defers["$.__views.__alloyId346!click!register"] = true;
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
    $.__views.__alloyId516 = Ti.UI.createView({
=======
    $.__views.__alloyId347 = Ti.UI.createView({
>>>>>>> origin/master
        width: "100%",
        height: "33%",
        backgroundColor: "red",
        backgroundImage: "/images/button_01.png",
        bottom: "5",
<<<<<<< HEAD
        id: "__alloyId516"
    });
    $.__views.scrollView.add($.__views.__alloyId516);
    myAccount ? $.__views.__alloyId516.addEventListener("click", myAccount) : __defers["$.__views.__alloyId516!click!myAccount"] = true;
    $.__views.__alloyId517 = Ti.UI.createView({
=======
        id: "__alloyId347"
    });
    $.__views.scrollView.add($.__views.__alloyId347);
    myAccount ? $.__views.__alloyId347.addEventListener("click", myAccount) : __defers["$.__views.__alloyId347!click!myAccount"] = true;
    $.__views.__alloyId348 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "33%",
        width: "100%",
        top: "5",
        bottom: "5",
<<<<<<< HEAD
        id: "__alloyId517"
    });
    $.__views.scrollView.add($.__views.__alloyId517);
    $.__views.__alloyId518 = Ti.UI.createView({
=======
        id: "__alloyId348"
    });
    $.__views.scrollView.add($.__views.__alloyId348);
    $.__views.__alloyId349 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: "49%",
        right: "5",
        backgroundColor: "blue",
        backgroundImage: "/images/button_02.png",
<<<<<<< HEAD
        id: "__alloyId518"
    });
    $.__views.__alloyId517.add($.__views.__alloyId518);
    promoNews ? $.__views.__alloyId518.addEventListener("click", promoNews) : __defers["$.__views.__alloyId518!click!promoNews"] = true;
    $.__views.__alloyId519 = Ti.UI.createView({
=======
        id: "__alloyId349"
    });
    $.__views.__alloyId348.add($.__views.__alloyId349);
    promoNews ? $.__views.__alloyId349.addEventListener("click", promoNews) : __defers["$.__views.__alloyId349!click!promoNews"] = true;
    $.__views.__alloyId350 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: "auto",
        left: "5",
        backgroundColor: "orange",
        backgroundImage: "/images/button_03.png",
<<<<<<< HEAD
        id: "__alloyId519"
    });
    $.__views.__alloyId517.add($.__views.__alloyId519);
    product ? $.__views.__alloyId519.addEventListener("click", product) : __defers["$.__views.__alloyId519!click!product"] = true;
    $.__views.__alloyId520 = Ti.UI.createView({
=======
        id: "__alloyId350"
    });
    $.__views.__alloyId348.add($.__views.__alloyId350);
    product ? $.__views.__alloyId350.addEventListener("click", product) : __defers["$.__views.__alloyId350!click!product"] = true;
    $.__views.__alloyId351 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "33%",
        width: "100%",
        top: "5",
<<<<<<< HEAD
        id: "__alloyId520"
    });
    $.__views.scrollView.add($.__views.__alloyId520);
    $.__views.__alloyId521 = Ti.UI.createView({
=======
        id: "__alloyId351"
    });
    $.__views.scrollView.add($.__views.__alloyId351);
    $.__views.__alloyId352 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: "49%",
        right: "5",
        backgroundColor: "pink",
        backgroundImage: "/images/button_04.png",
<<<<<<< HEAD
        id: "__alloyId521"
    });
    $.__views.__alloyId520.add($.__views.__alloyId521);
    online ? $.__views.__alloyId521.addEventListener("click", online) : __defers["$.__views.__alloyId521!click!online"] = true;
    $.__views.__alloyId522 = Ti.UI.createView({
=======
        id: "__alloyId352"
    });
    $.__views.__alloyId351.add($.__views.__alloyId352);
    online ? $.__views.__alloyId352.addEventListener("click", online) : __defers["$.__views.__alloyId352!click!online"] = true;
    $.__views.__alloyId353 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: "100%",
        width: "auto",
        left: "5",
<<<<<<< HEAD
        id: "__alloyId522"
    });
    $.__views.__alloyId520.add($.__views.__alloyId522);
    $.__views.__alloyId523 = Ti.UI.createView({
=======
        id: "__alloyId353"
    });
    $.__views.__alloyId351.add($.__views.__alloyId353);
    $.__views.__alloyId354 = Ti.UI.createView({
>>>>>>> origin/master
        height: "49%",
        width: "100%",
        bottom: "5",
        backgroundColor: "green",
        backgroundImage: "/images/button_05.png",
<<<<<<< HEAD
        id: "__alloyId523"
    });
    $.__views.__alloyId522.add($.__views.__alloyId523);
    history ? $.__views.__alloyId523.addEventListener("click", history) : __defers["$.__views.__alloyId523!click!history"] = true;
    $.__views.__alloyId524 = Ti.UI.createView({
=======
        id: "__alloyId354"
    });
    $.__views.__alloyId353.add($.__views.__alloyId354);
    history ? $.__views.__alloyId354.addEventListener("click", history) : __defers["$.__views.__alloyId354!click!history"] = true;
    $.__views.__alloyId355 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "auto",
        width: "100%",
        top: "5",
<<<<<<< HEAD
        id: "__alloyId524"
    });
    $.__views.__alloyId522.add($.__views.__alloyId524);
    $.__views.__alloyId525 = Ti.UI.createView({
=======
        id: "__alloyId355"
    });
    $.__views.__alloyId353.add($.__views.__alloyId355);
    $.__views.__alloyId356 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: "49%",
        right: "5",
        backgroundColor: "purple",
        backgroundImage: "/images/button_06.png",
<<<<<<< HEAD
        id: "__alloyId525"
    });
    $.__views.__alloyId524.add($.__views.__alloyId525);
    contact ? $.__views.__alloyId525.addEventListener("click", contact) : __defers["$.__views.__alloyId525!click!contact"] = true;
    $.__views.__alloyId526 = Ti.UI.createView({
=======
        id: "__alloyId356"
    });
    $.__views.__alloyId355.add($.__views.__alloyId356);
    contact ? $.__views.__alloyId356.addEventListener("click", contact) : __defers["$.__views.__alloyId356!click!contact"] = true;
    $.__views.__alloyId357 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: "auto",
        left: "5",
        backgroundColor: "gray",
        backgroundImage: "/images/button_07.png",
<<<<<<< HEAD
        id: "__alloyId526"
    });
    $.__views.__alloyId524.add($.__views.__alloyId526);
    setting ? $.__views.__alloyId526.addEventListener("click", setting) : __defers["$.__views.__alloyId526!click!setting"] = true;
=======
        id: "__alloyId357"
    });
    $.__views.__alloyId355.add($.__views.__alloyId357);
    setting ? $.__views.__alloyId357.addEventListener("click", setting) : __defers["$.__views.__alloyId357!click!setting"] = true;
>>>>>>> origin/master
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
<<<<<<< HEAD
    __defers["$.__views.__alloyId502!click!close"] && $.__views.__alloyId502.addEventListener("click", close);
    __defers["$.__views.__alloyId510!click!login"] && $.__views.__alloyId510.addEventListener("click", login);
    __defers["$.__views.forgotText!click!forgot"] && $.__views.forgotText.addEventListener("click", forgot);
    __defers["$.__views.registerText!click!register"] && $.__views.registerText.addEventListener("click", register);
    __defers["$.__views.__alloyId516!click!myAccount"] && $.__views.__alloyId516.addEventListener("click", myAccount);
    __defers["$.__views.__alloyId518!click!promoNews"] && $.__views.__alloyId518.addEventListener("click", promoNews);
    __defers["$.__views.__alloyId519!click!product"] && $.__views.__alloyId519.addEventListener("click", product);
    __defers["$.__views.__alloyId521!click!online"] && $.__views.__alloyId521.addEventListener("click", online);
    __defers["$.__views.__alloyId523!click!history"] && $.__views.__alloyId523.addEventListener("click", history);
    __defers["$.__views.__alloyId525!click!contact"] && $.__views.__alloyId525.addEventListener("click", contact);
    __defers["$.__views.__alloyId526!click!setting"] && $.__views.__alloyId526.addEventListener("click", setting);
=======
    __defers["$.__views.__alloyId336!click!close"] && $.__views.__alloyId336.addEventListener("click", close);
    __defers["$.__views.__alloyId344!click!login"] && $.__views.__alloyId344.addEventListener("click", login);
    __defers["$.__views.__alloyId346!click!register"] && $.__views.__alloyId346.addEventListener("click", register);
    __defers["$.__views.__alloyId347!click!myAccount"] && $.__views.__alloyId347.addEventListener("click", myAccount);
    __defers["$.__views.__alloyId349!click!promoNews"] && $.__views.__alloyId349.addEventListener("click", promoNews);
    __defers["$.__views.__alloyId350!click!product"] && $.__views.__alloyId350.addEventListener("click", product);
    __defers["$.__views.__alloyId352!click!online"] && $.__views.__alloyId352.addEventListener("click", online);
    __defers["$.__views.__alloyId354!click!history"] && $.__views.__alloyId354.addEventListener("click", history);
    __defers["$.__views.__alloyId356!click!contact"] && $.__views.__alloyId356.addEventListener("click", contact);
    __defers["$.__views.__alloyId357!click!setting"] && $.__views.__alloyId357.addEventListener("click", setting);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;