function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
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
    function login() {
        if ("" == $.username.value && "" == $.password.value) alert("Please enter all fields"); else if ("" == $.username.value) alert("Please enter username"); else if ("" == $.password.value) alert("Please enter password"); else {
            $.username.value = "";
            $.username.blur();
            $.password.value = "";
            $.password.blur();
            $.login.zIndex = 0;
            console.log("login");
        }
    }
    function back() {
        DRAWER.navigation("myAccount", 1);
    }
    function goSlide(event) {
        var index = event.source.mod;
        var arrViews = $.scrollableView.getViews();
        switch (index) {
          case "0":
            $.lbl1.backgroundColor = "#FFFFFF";
            $.lbl2.backgroundColor = "#F5F5F5";
            $.lbl3.backgroundColor = "#F5F5F5";
            break;

          case "1":
            $.lbl1.backgroundColor = "#F5F5F5";
            $.lbl2.backgroundColor = "#FFFFFF";
            $.lbl3.backgroundColor = "#F5F5F5";
            break;

          case "2":
            $.lbl1.backgroundColor = "#F5F5F5";
            $.lbl2.backgroundColor = "#F5F5F5";
            $.lbl3.backgroundColor = "#FFFFFF";
        }
        $.scrollableView.scrollToView(arrViews[index]);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "seasonPass";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
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
    $.__views.seasonPass = Ti.UI.createView({
        backgroundColor: "white",
        layout: "composite",
        fullscreen: "true",
        id: "seasonPass"
    });
    $.__views.seasonPass && $.addTopLevelView($.__views.seasonPass);
    $.__views.__alloyId2394 = Alloy.createController("_header", {
        id: "__alloyId2394",
        __parentSymbol: $.__views.seasonPass
    });
    $.__views.__alloyId2394.setParent($.__views.seasonPass);
    $.__views.login = Ti.UI.createView({
        id: "login",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.seasonPass.add($.__views.login);
    $.__views.__alloyId2395 = Ti.UI.createView({
        layout: "vertical",
        width: "90%",
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId2395"
    });
    $.__views.login.add($.__views.__alloyId2395);
    $.__views.__alloyId2396 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId2396"
    });
    $.__views.__alloyId2395.add($.__views.__alloyId2396);
    $.__views.__alloyId2397 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        top: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2397"
    });
    $.__views.__alloyId2396.add($.__views.__alloyId2397);
    close ? $.__views.__alloyId2397.addEventListener("click", close) : __defers["$.__views.__alloyId2397!click!close"] = true;
    $.__views.__alloyId2398 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId2398"
    });
    $.__views.__alloyId2395.add($.__views.__alloyId2398);
    $.__views.__alloyId2399 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId2399"
    });
    $.__views.__alloyId2398.add($.__views.__alloyId2399);
    $.__views.__alloyId2400 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "Username",
        id: "__alloyId2400"
    });
    $.__views.__alloyId2399.add($.__views.__alloyId2400);
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
    $.__views.__alloyId2399.add($.__views.username);
    $.__views.__alloyId2401 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId2401"
    });
    $.__views.__alloyId2395.add($.__views.__alloyId2401);
    $.__views.__alloyId2402 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId2402"
    });
    $.__views.__alloyId2401.add($.__views.__alloyId2402);
    $.__views.__alloyId2403 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "Password",
        id: "__alloyId2403"
    });
    $.__views.__alloyId2402.add($.__views.__alloyId2403);
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
    $.__views.__alloyId2402.add($.__views.password);
    $.__views.__alloyId2404 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId2404"
    });
    $.__views.__alloyId2395.add($.__views.__alloyId2404);
    $.__views.__alloyId2405 = Ti.UI.createButton({
        title: "Login",
        color: "#44C7D6",
        borderColor: "#44C7D6",
        height: "80%",
        width: "60%",
        backgroundColor: "white",
        borderRadius: "20",
        id: "__alloyId2405"
    });
    $.__views.__alloyId2404.add($.__views.__alloyId2405);
    login ? $.__views.__alloyId2405.addEventListener("click", login) : __defers["$.__views.__alloyId2405!click!login"] = true;
    $.__views.__alloyId2406 = Ti.UI.createView({
        height: "50",
        layout: "vertical",
        width: Ti.UI.FILL,
        id: "__alloyId2406"
    });
    $.__views.__alloyId2395.add($.__views.__alloyId2406);
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
    $.__views.__alloyId2406.add($.__views.forgotText);
    forgot ? $.__views.forgotText.addEventListener("click", forgot) : __defers["$.__views.forgotText!click!forgot"] = true;
    $.__views.forgotLine = Ti.UI.createView({
        id: "forgotLine",
        backgroundColor: "#44C7D6",
        height: "1"
    });
    $.__views.__alloyId2406.add($.__views.forgotLine);
    $.__views.__alloyId2407 = Ti.UI.createView({
        height: "50",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        id: "__alloyId2407"
    });
    $.__views.__alloyId2395.add($.__views.__alloyId2407);
    $.__views.__alloyId2408 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "Not Registered yet?",
        textAlign: "center",
        id: "__alloyId2408"
    });
    $.__views.__alloyId2407.add($.__views.__alloyId2408);
    $.__views.__alloyId2409 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId2409"
    });
    $.__views.__alloyId2407.add($.__views.__alloyId2409);
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
    $.__views.__alloyId2409.add($.__views.registerText);
    register ? $.__views.registerText.addEventListener("click", register) : __defers["$.__views.registerText!click!register"] = true;
    $.__views.registerLine = Ti.UI.createView({
        id: "registerLine",
        backgroundColor: "#44C7D6",
        height: "1"
    });
    $.__views.__alloyId2409.add($.__views.registerLine);
    $.__views.__alloyId2410 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 14
        },
        text: "now.",
        textAlign: "center",
        id: "__alloyId2410"
    });
    $.__views.__alloyId2407.add($.__views.__alloyId2410);
    $.__views.__alloyId2411 = Ti.UI.createView({
        layout: "vertical",
        top: "50",
        zIndex: "1",
        id: "__alloyId2411"
    });
    $.__views.seasonPass.add($.__views.__alloyId2411);
    $.__views.__alloyId2412 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2412"
    });
    $.__views.__alloyId2411.add($.__views.__alloyId2412);
    $.__views.__alloyId2413 = Ti.UI.createLabel({
        text: "Season Pass",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2413"
    });
    $.__views.__alloyId2412.add($.__views.__alloyId2413);
    $.__views.__alloyId2414 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2414"
    });
    $.__views.__alloyId2412.add($.__views.__alloyId2414);
    back ? $.__views.__alloyId2414.addEventListener("click", back) : __defers["$.__views.__alloyId2414!click!back"] = true;
    $.__views.menu = Ti.UI.createView({
        id: "menu",
        layout: "horizontal",
        height: "50",
        width: "100%"
    });
    $.__views.__alloyId2411.add($.__views.menu);
    $.__views.lbl1 = Ti.UI.createLabel({
        text: "VOICE PACKAGE",
        id: "lbl1",
        mod: "0",
        height: "100%",
        width: "33%",
        textAlign: "center",
        backgroundColor: "#FFFFFF",
        color: "black"
    });
    $.__views.menu.add($.__views.lbl1);
    goSlide ? $.__views.lbl1.addEventListener("touchend", goSlide) : __defers["$.__views.lbl1!touchend!goSlide"] = true;
    $.__views.__alloyId2415 = Ti.UI.createView({
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId2415"
    });
    $.__views.menu.add($.__views.__alloyId2415);
    $.__views.lbl2 = Ti.UI.createLabel({
        text: "DATA PACKAGE",
        id: "lbl2",
        mod: "1",
        height: "100%",
        width: "33%",
        textAlign: "center",
        backgroundColor: "#F5F5F5",
        color: "black"
    });
    $.__views.menu.add($.__views.lbl2);
    goSlide ? $.__views.lbl2.addEventListener("touchend", goSlide) : __defers["$.__views.lbl2!touchend!goSlide"] = true;
    $.__views.__alloyId2416 = Ti.UI.createView({
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId2416"
    });
    $.__views.menu.add($.__views.__alloyId2416);
    $.__views.lbl3 = Ti.UI.createLabel({
        text: "COMBO PACKAGE",
        id: "lbl3",
        mod: "2",
        height: "100%",
        width: "33%",
        textAlign: "center",
        backgroundColor: "#F5F5F5",
        color: "black"
    });
    $.__views.menu.add($.__views.lbl3);
    goSlide ? $.__views.lbl3.addEventListener("touchend", goSlide) : __defers["$.__views.lbl3!touchend!goSlide"] = true;
    var __alloyId2417 = [];
    $.__views.__alloyId2418 = Alloy.createController("seasonPass1", {
        id: "__alloyId2418",
        __parentSymbol: __parentSymbol
    });
    __alloyId2417.push($.__views.__alloyId2418.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId2419 = Alloy.createController("seasonPass2", {
        id: "__alloyId2419",
        __parentSymbol: __parentSymbol
    });
    __alloyId2417.push($.__views.__alloyId2419.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId2420 = Alloy.createController("seasonPass3", {
        id: "__alloyId2420",
        __parentSymbol: __parentSymbol
    });
    __alloyId2417.push($.__views.__alloyId2420.getViewEx({
        recurse: true
    }));
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId2417,
        id: "scrollableView",
        showPagingControl: "false",
        scrollingEnabled: "false"
    });
    $.__views.__alloyId2411.add($.__views.scrollableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var isMember = false;
    if (false == isMember) {
        console.log("popUpLogin");
        $.login.zIndex = 2;
    }
    $.forgotLine.width = $.forgotText.getWidth();
    $.registerLine.width = $.registerText.getWidth();
    __defers["$.__views.__alloyId2397!click!close"] && $.__views.__alloyId2397.addEventListener("click", close);
    __defers["$.__views.__alloyId2405!click!login"] && $.__views.__alloyId2405.addEventListener("click", login);
    __defers["$.__views.forgotText!click!forgot"] && $.__views.forgotText.addEventListener("click", forgot);
    __defers["$.__views.registerText!click!register"] && $.__views.registerText.addEventListener("click", register);
    __defers["$.__views.__alloyId2414!click!back"] && $.__views.__alloyId2414.addEventListener("click", back);
    __defers["$.__views.lbl1!touchend!goSlide"] && $.__views.lbl1.addEventListener("touchend", goSlide);
    __defers["$.__views.lbl2!touchend!goSlide"] && $.__views.lbl2.addEventListener("touchend", goSlide);
    __defers["$.__views.lbl3!touchend!goSlide"] && $.__views.lbl3.addEventListener("touchend", goSlide);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;