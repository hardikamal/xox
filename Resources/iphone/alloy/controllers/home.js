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
    $.__views.__alloyId333 = Alloy.createController("_header", {
        id: "__alloyId333",
        __parentSymbol: $.__views.home
    });
    $.__views.__alloyId333.setParent($.__views.home);
    $.__views.login = Ti.UI.createView({
        id: "login",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.home.add($.__views.login);
    $.__views.__alloyId334 = Ti.UI.createView({
        layout: "vertical",
        width: "90%",
        height: "50%",
        backgroundColor: "white",
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
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        top: "10",
        image: "/images/close_icon.png",
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
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "Username",
        id: "__alloyId339"
    });
    $.__views.__alloyId338.add($.__views.__alloyId339);
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
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "Password",
        id: "__alloyId342"
    });
    $.__views.__alloyId341.add($.__views.__alloyId342);
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
    $.__views.__alloyId341.add($.__views.password);
    $.__views.__alloyId343 = Ti.UI.createView({
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId343"
    });
    $.__views.__alloyId334.add($.__views.__alloyId343);
    $.__views.__alloyId344 = Ti.UI.createButton({
        title: "Login",
        color: "#44C7D6",
        borderColor: "#44C7D6",
        height: "80%",
        width: "60%",
        backgroundColor: "white",
        borderRadius: "20",
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
        height: Ti.UI.SIZE,
        color: "#44C7D6",
        font: {
            fontSize: 14
        },
        text: "Not Registered yet?",
        id: "__alloyId346"
    });
    $.__views.__alloyId345.add($.__views.__alloyId346);
    register ? $.__views.__alloyId346.addEventListener("click", register) : __defers["$.__views.__alloyId346!click!register"] = true;
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
    $.__views.__alloyId347 = Ti.UI.createView({
        width: "100%",
        height: "33%",
        backgroundColor: "red",
        backgroundImage: "/images/button_01.png",
        bottom: "5",
        id: "__alloyId347"
    });
    $.__views.scrollView.add($.__views.__alloyId347);
    myAccount ? $.__views.__alloyId347.addEventListener("click", myAccount) : __defers["$.__views.__alloyId347!click!myAccount"] = true;
    $.__views.__alloyId348 = Ti.UI.createView({
        layout: "horizontal",
        height: "33%",
        width: "100%",
        top: "5",
        bottom: "5",
        id: "__alloyId348"
    });
    $.__views.scrollView.add($.__views.__alloyId348);
    $.__views.__alloyId349 = Ti.UI.createView({
        height: "100%",
        width: "49%",
        right: "5",
        backgroundColor: "blue",
        backgroundImage: "/images/button_02.png",
        id: "__alloyId349"
    });
    $.__views.__alloyId348.add($.__views.__alloyId349);
    promoNews ? $.__views.__alloyId349.addEventListener("click", promoNews) : __defers["$.__views.__alloyId349!click!promoNews"] = true;
    $.__views.__alloyId350 = Ti.UI.createView({
        height: "100%",
        width: "auto",
        left: "5",
        backgroundColor: "orange",
        backgroundImage: "/images/button_03.png",
        id: "__alloyId350"
    });
    $.__views.__alloyId348.add($.__views.__alloyId350);
    product ? $.__views.__alloyId350.addEventListener("click", product) : __defers["$.__views.__alloyId350!click!product"] = true;
    $.__views.__alloyId351 = Ti.UI.createView({
        layout: "horizontal",
        height: "33%",
        width: "100%",
        top: "5",
        id: "__alloyId351"
    });
    $.__views.scrollView.add($.__views.__alloyId351);
    $.__views.__alloyId352 = Ti.UI.createView({
        height: "100%",
        width: "49%",
        right: "5",
        backgroundColor: "pink",
        backgroundImage: "/images/button_04.png",
        id: "__alloyId352"
    });
    $.__views.__alloyId351.add($.__views.__alloyId352);
    online ? $.__views.__alloyId352.addEventListener("click", online) : __defers["$.__views.__alloyId352!click!online"] = true;
    $.__views.__alloyId353 = Ti.UI.createView({
        layout: "vertical",
        height: "100%",
        width: "auto",
        left: "5",
        id: "__alloyId353"
    });
    $.__views.__alloyId351.add($.__views.__alloyId353);
    $.__views.__alloyId354 = Ti.UI.createView({
        height: "49%",
        width: "100%",
        bottom: "5",
        backgroundColor: "green",
        backgroundImage: "/images/button_05.png",
        id: "__alloyId354"
    });
    $.__views.__alloyId353.add($.__views.__alloyId354);
    history ? $.__views.__alloyId354.addEventListener("click", history) : __defers["$.__views.__alloyId354!click!history"] = true;
    $.__views.__alloyId355 = Ti.UI.createView({
        layout: "horizontal",
        height: "auto",
        width: "100%",
        top: "5",
        id: "__alloyId355"
    });
    $.__views.__alloyId353.add($.__views.__alloyId355);
    $.__views.__alloyId356 = Ti.UI.createView({
        height: "100%",
        width: "49%",
        right: "5",
        backgroundColor: "purple",
        backgroundImage: "/images/button_06.png",
        id: "__alloyId356"
    });
    $.__views.__alloyId355.add($.__views.__alloyId356);
    contact ? $.__views.__alloyId356.addEventListener("click", contact) : __defers["$.__views.__alloyId356!click!contact"] = true;
    $.__views.__alloyId357 = Ti.UI.createView({
        height: "100%",
        width: "auto",
        left: "5",
        backgroundColor: "gray",
        backgroundImage: "/images/button_07.png",
        id: "__alloyId357"
    });
    $.__views.__alloyId355.add($.__views.__alloyId357);
    setting ? $.__views.__alloyId357.addEventListener("click", setting) : __defers["$.__views.__alloyId357!click!setting"] = true;
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;