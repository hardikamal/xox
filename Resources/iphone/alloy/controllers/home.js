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
    $.__views.__alloyId26 = Alloy.createController("_header", {
        id: "__alloyId26",
        __parentSymbol: $.__views.home
    });
    $.__views.__alloyId26.setParent($.__views.home);
    $.__views.login = Ti.UI.createView({
        layout: "vertical",
        id: "login",
        width: "90%",
        height: "50%",
        backgroundColor: "white",
        zIndex: "0"
    });
    $.__views.home.add($.__views.login);
    $.__views.__alloyId27 = Ti.UI.createView({
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId27"
    });
    $.__views.login.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        top: "10",
        image: "/images/close_icon.png",
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    close ? $.__views.__alloyId28.addEventListener("click", close) : __defers["$.__views.__alloyId28!click!close"] = true;
    $.__views.__alloyId29 = Ti.UI.createView({
        height: "25%",
        width: Ti.UI.FILL,
        id: "__alloyId29"
    });
    $.__views.login.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "Username",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
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
    $.__views.__alloyId30.add($.__views.username);
    $.__views.__alloyId32 = Ti.UI.createView({
        height: "25%",
        width: Ti.UI.FILL,
        id: "__alloyId32"
    });
    $.__views.login.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId33"
    });
    $.__views.__alloyId32.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "Password",
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
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
    $.__views.__alloyId33.add($.__views.password);
    $.__views.__alloyId35 = Ti.UI.createView({
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId35"
    });
    $.__views.login.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createButton({
        title: "Login",
        color: "#44C7D6",
        borderColor: "#44C7D6",
        height: "80%",
        width: "60%",
        borderRadius: "20",
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    login ? $.__views.__alloyId36.addEventListener("click", login) : __defers["$.__views.__alloyId36!click!login"] = true;
    $.__views.__alloyId37 = Ti.UI.createView({
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId37"
    });
    $.__views.login.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#44C7D6",
        font: {
            fontSize: 14
        },
        text: "Not Registered yet?",
        id: "__alloyId38"
    });
    $.__views.__alloyId37.add($.__views.__alloyId38);
    register ? $.__views.__alloyId38.addEventListener("click", register) : __defers["$.__views.__alloyId38!click!register"] = true;
    $.__views.__alloyId39 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "black",
        top: "60",
        left: "10",
        right: "10",
        bottom: "10",
        zIndex: "1",
        id: "__alloyId39"
    });
    $.__views.home.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createView({
        width: "100%",
        height: "33%",
        backgroundColor: "red",
        bottom: "5",
        id: "__alloyId40"
    });
    $.__views.__alloyId39.add($.__views.__alloyId40);
    myAccount ? $.__views.__alloyId40.addEventListener("click", myAccount) : __defers["$.__views.__alloyId40!click!myAccount"] = true;
    $.__views.__alloyId41 = Ti.UI.createView({
        layout: "horizontal",
        height: "33%",
        width: "100%",
        top: "5",
        bottom: "5",
        id: "__alloyId41"
    });
    $.__views.__alloyId39.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createView({
        height: "100%",
        width: "49%",
        right: "5",
        backgroundColor: "blue",
        id: "__alloyId42"
    });
    $.__views.__alloyId41.add($.__views.__alloyId42);
    promoNews ? $.__views.__alloyId42.addEventListener("click", promoNews) : __defers["$.__views.__alloyId42!click!promoNews"] = true;
    $.__views.__alloyId43 = Ti.UI.createView({
        height: "100%",
        width: "auto",
        left: "5",
        backgroundColor: "orange",
        id: "__alloyId43"
    });
    $.__views.__alloyId41.add($.__views.__alloyId43);
    product ? $.__views.__alloyId43.addEventListener("click", product) : __defers["$.__views.__alloyId43!click!product"] = true;
    $.__views.__alloyId44 = Ti.UI.createView({
        layout: "horizontal",
        height: "33%",
        width: "100%",
        top: "5",
        id: "__alloyId44"
    });
    $.__views.__alloyId39.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createView({
        height: "100%",
        width: "49%",
        right: "5",
        backgroundColor: "pink",
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    online ? $.__views.__alloyId45.addEventListener("click", online) : __defers["$.__views.__alloyId45!click!online"] = true;
    $.__views.__alloyId46 = Ti.UI.createView({
        layout: "vertical",
        height: "100%",
        width: "auto",
        left: "5",
        id: "__alloyId46"
    });
    $.__views.__alloyId44.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createView({
        height: "49%",
        width: "100%",
        bottom: "5",
        backgroundColor: "green",
        id: "__alloyId47"
    });
    $.__views.__alloyId46.add($.__views.__alloyId47);
    history ? $.__views.__alloyId47.addEventListener("click", history) : __defers["$.__views.__alloyId47!click!history"] = true;
    $.__views.__alloyId48 = Ti.UI.createView({
        layout: "horizontal",
        height: "auto",
        width: "100%",
        top: "5",
        id: "__alloyId48"
    });
    $.__views.__alloyId46.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createView({
        height: "100%",
        width: "49%",
        right: "5",
        backgroundColor: "purple",
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
    contact ? $.__views.__alloyId49.addEventListener("click", contact) : __defers["$.__views.__alloyId49!click!contact"] = true;
    $.__views.__alloyId50 = Ti.UI.createView({
        height: "100%",
        width: "auto",
        left: "5",
        backgroundColor: "gray",
        id: "__alloyId50"
    });
    $.__views.__alloyId48.add($.__views.__alloyId50);
    setting ? $.__views.__alloyId50.addEventListener("click", setting) : __defers["$.__views.__alloyId50!click!setting"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    Ti.App.Properties.setString("root", "1");
    Ti.Platform.displayCaps.platformHeight;
    __defers["$.__views.__alloyId28!click!close"] && $.__views.__alloyId28.addEventListener("click", close);
    __defers["$.__views.__alloyId36!click!login"] && $.__views.__alloyId36.addEventListener("click", login);
    __defers["$.__views.__alloyId38!click!register"] && $.__views.__alloyId38.addEventListener("click", register);
    __defers["$.__views.__alloyId40!click!myAccount"] && $.__views.__alloyId40.addEventListener("click", myAccount);
    __defers["$.__views.__alloyId42!click!promoNews"] && $.__views.__alloyId42.addEventListener("click", promoNews);
    __defers["$.__views.__alloyId43!click!product"] && $.__views.__alloyId43.addEventListener("click", product);
    __defers["$.__views.__alloyId45!click!online"] && $.__views.__alloyId45.addEventListener("click", online);
    __defers["$.__views.__alloyId47!click!history"] && $.__views.__alloyId47.addEventListener("click", history);
    __defers["$.__views.__alloyId49!click!contact"] && $.__views.__alloyId49.addEventListener("click", contact);
    __defers["$.__views.__alloyId50!click!setting"] && $.__views.__alloyId50.addEventListener("click", setting);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;