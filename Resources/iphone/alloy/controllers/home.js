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
    $.__views.__alloyId264 = Alloy.createController("_header", {
        id: "__alloyId264",
        __parentSymbol: $.__views.home
    });
    $.__views.__alloyId264.setParent($.__views.home);
    $.__views.login = Ti.UI.createView({
        id: "login",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.home.add($.__views.login);
    $.__views.__alloyId265 = Ti.UI.createView({
        layout: "vertical",
        width: "90%",
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId265"
    });
    $.__views.login.add($.__views.__alloyId265);
    $.__views.__alloyId266 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId266"
    });
    $.__views.__alloyId265.add($.__views.__alloyId266);
    $.__views.__alloyId267 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        top: "10",
        image: "/images/close_icon.png",
        id: "__alloyId267"
    });
    $.__views.__alloyId266.add($.__views.__alloyId267);
    close ? $.__views.__alloyId267.addEventListener("click", close) : __defers["$.__views.__alloyId267!click!close"] = true;
    $.__views.__alloyId268 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId268"
    });
    $.__views.__alloyId265.add($.__views.__alloyId268);
    $.__views.__alloyId269 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId269"
    });
    $.__views.__alloyId268.add($.__views.__alloyId269);
    $.__views.__alloyId270 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "Username",
        id: "__alloyId270"
    });
    $.__views.__alloyId269.add($.__views.__alloyId270);
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
    $.__views.__alloyId269.add($.__views.username);
    $.__views.__alloyId271 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId271"
    });
    $.__views.__alloyId265.add($.__views.__alloyId271);
    $.__views.__alloyId272 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId272"
    });
    $.__views.__alloyId271.add($.__views.__alloyId272);
    $.__views.__alloyId273 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "Password",
        id: "__alloyId273"
    });
    $.__views.__alloyId272.add($.__views.__alloyId273);
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
    $.__views.__alloyId272.add($.__views.password);
    $.__views.__alloyId274 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId274"
    });
    $.__views.__alloyId265.add($.__views.__alloyId274);
    $.__views.__alloyId275 = Ti.UI.createButton({
        title: "Login",
        color: "#44C7D6",
        borderColor: "#44C7D6",
        height: "80%",
        width: "60%",
        backgroundColor: "white",
        borderRadius: "20",
        id: "__alloyId275"
    });
    $.__views.__alloyId274.add($.__views.__alloyId275);
    login ? $.__views.__alloyId275.addEventListener("click", login) : __defers["$.__views.__alloyId275!click!login"] = true;
    $.__views.__alloyId276 = Ti.UI.createView({
        height: "50",
        layout: "vertical",
        width: Ti.UI.FILL,
        id: "__alloyId276"
    });
    $.__views.__alloyId265.add($.__views.__alloyId276);
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
    $.__views.__alloyId276.add($.__views.forgotText);
    forgot ? $.__views.forgotText.addEventListener("click", forgot) : __defers["$.__views.forgotText!click!forgot"] = true;
    $.__views.forgotLine = Ti.UI.createView({
        id: "forgotLine",
        backgroundColor: "#44C7D6",
        height: "1"
    });
    $.__views.__alloyId276.add($.__views.forgotLine);
    $.__views.__alloyId277 = Ti.UI.createView({
        height: "50",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        id: "__alloyId277"
    });
    $.__views.__alloyId265.add($.__views.__alloyId277);
    $.__views.__alloyId278 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "Not Registered yet?",
        textAlign: "center",
        id: "__alloyId278"
    });
    $.__views.__alloyId277.add($.__views.__alloyId278);
    $.__views.__alloyId279 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId279"
    });
    $.__views.__alloyId277.add($.__views.__alloyId279);
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
    $.__views.__alloyId279.add($.__views.registerText);
    register ? $.__views.registerText.addEventListener("click", register) : __defers["$.__views.registerText!click!register"] = true;
    $.__views.registerLine = Ti.UI.createView({
        id: "registerLine",
        backgroundColor: "#44C7D6",
        height: "1"
    });
    $.__views.__alloyId279.add($.__views.registerLine);
    $.__views.__alloyId280 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "now.",
        textAlign: "center",
        id: "__alloyId280"
    });
    $.__views.__alloyId277.add($.__views.__alloyId280);
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
    $.__views.__alloyId281 = Ti.UI.createView({
        width: "100%",
        height: "33%",
        backgroundColor: "red",
        backgroundImage: "/images/button_01.png",
        bottom: "5",
        id: "__alloyId281"
    });
    $.__views.scrollView.add($.__views.__alloyId281);
    myAccount ? $.__views.__alloyId281.addEventListener("click", myAccount) : __defers["$.__views.__alloyId281!click!myAccount"] = true;
    $.__views.__alloyId282 = Ti.UI.createView({
        layout: "horizontal",
        height: "33%",
        width: "100%",
        top: "5",
        bottom: "5",
        id: "__alloyId282"
    });
    $.__views.scrollView.add($.__views.__alloyId282);
    $.__views.__alloyId283 = Ti.UI.createView({
        height: "100%",
        width: "49%",
        right: "5",
        backgroundColor: "blue",
        backgroundImage: "/images/button_02.png",
        id: "__alloyId283"
    });
    $.__views.__alloyId282.add($.__views.__alloyId283);
    promoNews ? $.__views.__alloyId283.addEventListener("click", promoNews) : __defers["$.__views.__alloyId283!click!promoNews"] = true;
    $.__views.__alloyId284 = Ti.UI.createView({
        height: "100%",
        width: "auto",
        left: "5",
        backgroundColor: "orange",
        backgroundImage: "/images/button_03.png",
        id: "__alloyId284"
    });
    $.__views.__alloyId282.add($.__views.__alloyId284);
    product ? $.__views.__alloyId284.addEventListener("click", product) : __defers["$.__views.__alloyId284!click!product"] = true;
    $.__views.__alloyId285 = Ti.UI.createView({
        layout: "horizontal",
        height: "33%",
        width: "100%",
        top: "5",
        id: "__alloyId285"
    });
    $.__views.scrollView.add($.__views.__alloyId285);
    $.__views.__alloyId286 = Ti.UI.createView({
        height: "100%",
        width: "49%",
        right: "5",
        backgroundColor: "pink",
        backgroundImage: "/images/button_04.png",
        id: "__alloyId286"
    });
    $.__views.__alloyId285.add($.__views.__alloyId286);
    online ? $.__views.__alloyId286.addEventListener("click", online) : __defers["$.__views.__alloyId286!click!online"] = true;
    $.__views.__alloyId287 = Ti.UI.createView({
        layout: "vertical",
        height: "100%",
        width: "auto",
        left: "5",
        id: "__alloyId287"
    });
    $.__views.__alloyId285.add($.__views.__alloyId287);
    $.__views.__alloyId288 = Ti.UI.createView({
        height: "49%",
        width: "100%",
        bottom: "5",
        backgroundColor: "green",
        backgroundImage: "/images/button_05.png",
        id: "__alloyId288"
    });
    $.__views.__alloyId287.add($.__views.__alloyId288);
    history ? $.__views.__alloyId288.addEventListener("click", history) : __defers["$.__views.__alloyId288!click!history"] = true;
    $.__views.__alloyId289 = Ti.UI.createView({
        layout: "horizontal",
        height: "auto",
        width: "100%",
        top: "5",
        id: "__alloyId289"
    });
    $.__views.__alloyId287.add($.__views.__alloyId289);
    $.__views.__alloyId290 = Ti.UI.createView({
        height: "100%",
        width: "49%",
        right: "5",
        backgroundColor: "purple",
        backgroundImage: "/images/button_06.png",
        id: "__alloyId290"
    });
    $.__views.__alloyId289.add($.__views.__alloyId290);
    contact ? $.__views.__alloyId290.addEventListener("click", contact) : __defers["$.__views.__alloyId290!click!contact"] = true;
    $.__views.__alloyId291 = Ti.UI.createView({
        height: "100%",
        width: "auto",
        left: "5",
        backgroundColor: "gray",
        backgroundImage: "/images/button_07.png",
        id: "__alloyId291"
    });
    $.__views.__alloyId289.add($.__views.__alloyId291);
    setting ? $.__views.__alloyId291.addEventListener("click", setting) : __defers["$.__views.__alloyId291!click!setting"] = true;
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
    __defers["$.__views.__alloyId267!click!close"] && $.__views.__alloyId267.addEventListener("click", close);
    __defers["$.__views.__alloyId275!click!login"] && $.__views.__alloyId275.addEventListener("click", login);
    __defers["$.__views.forgotText!click!forgot"] && $.__views.forgotText.addEventListener("click", forgot);
    __defers["$.__views.registerText!click!register"] && $.__views.registerText.addEventListener("click", register);
    __defers["$.__views.__alloyId281!click!myAccount"] && $.__views.__alloyId281.addEventListener("click", myAccount);
    __defers["$.__views.__alloyId283!click!promoNews"] && $.__views.__alloyId283.addEventListener("click", promoNews);
    __defers["$.__views.__alloyId284!click!product"] && $.__views.__alloyId284.addEventListener("click", product);
    __defers["$.__views.__alloyId286!click!online"] && $.__views.__alloyId286.addEventListener("click", online);
    __defers["$.__views.__alloyId288!click!history"] && $.__views.__alloyId288.addEventListener("click", history);
    __defers["$.__views.__alloyId290!click!contact"] && $.__views.__alloyId290.addEventListener("click", contact);
    __defers["$.__views.__alloyId291!click!setting"] && $.__views.__alloyId291.addEventListener("click", setting);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;