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
<<<<<<< Updated upstream
        DRAWER.navigation("register", 2);
    }
    function forgot() {
        $.username.value = "";
        $.username.blur();
        $.password.value = "";
        $.password.blur();
        $.login.zIndex = 0;
        DRAWER.navigation("forgot", 2);
=======
        console.log("to register page");
>>>>>>> Stashed changes
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
<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
    $.__views.__alloyId226 = Alloy.createController("_header", {
        id: "__alloyId226",
        __parentSymbol: $.__views.home
    });
    $.__views.__alloyId226.setParent($.__views.home);
>>>>>>> Stashed changes
=======
    $.__views.__alloyId499 = Alloy.createController("_header", {
        id: "__alloyId499",
        __parentSymbol: $.__views.home
    });
    $.__views.__alloyId499.setParent($.__views.home);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId502 = Ti.UI.createView({
=======
    $.__views.__alloyId466 = Ti.UI.createView({
>>>>>>> origin/master
=======
    $.__views.__alloyId500 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "vertical",
        width: "90%",
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId500"
    });
    $.__views.login.add($.__views.__alloyId500);
    $.__views.__alloyId501 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId501"
    });
<<<<<<< HEAD
    $.__views.__alloyId500.add($.__views.__alloyId501);
    $.__views.__alloyId502 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId227 = Ti.UI.createView({
        layout: "vertical",
        width: "90%",
        height: "50%",
        backgroundColor: "white",
        id: "__alloyId227"
    });
    $.__views.login.add($.__views.__alloyId227);
    $.__views.__alloyId228 = Ti.UI.createView({
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId228"
    });
    $.__views.__alloyId227.add($.__views.__alloyId228);
    $.__views.__alloyId229 = Ti.UI.createImageView({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId500.add($.__views.__alloyId501);
    $.__views.__alloyId502 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        top: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId502"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId504"
=======
        id: "__alloyId502"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
    });
    $.__views.__alloyId503.add($.__views.__alloyId504);
    $.__views.__alloyId505 = Ti.UI.createLabel({
=======
    });
<<<<<<< HEAD
    $.__views.__alloyId469.add($.__views.__alloyId470);
    $.__views.__alloyId471 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId229"
    });
    $.__views.__alloyId228.add($.__views.__alloyId229);
    close ? $.__views.__alloyId229.addEventListener("click", close) : __defers["$.__views.__alloyId229!click!close"] = true;
    $.__views.__alloyId230 = Ti.UI.createView({
        height: "25%",
        width: Ti.UI.FILL,
        id: "__alloyId230"
    });
    $.__views.__alloyId227.add($.__views.__alloyId230);
    $.__views.__alloyId231 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId231"
    });
    $.__views.__alloyId230.add($.__views.__alloyId231);
    $.__views.__alloyId232 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId503.add($.__views.__alloyId504);
    $.__views.__alloyId505 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId507"
    });
    $.__views.__alloyId506.add($.__views.__alloyId507);
=======
        id: "__alloyId471"
    });
    $.__views.__alloyId470.add($.__views.__alloyId471);
>>>>>>> origin/master
=======
        id: "__alloyId232"
    });
    $.__views.__alloyId231.add($.__views.__alloyId232);
>>>>>>> Stashed changes
=======
        id: "__alloyId505"
    });
    $.__views.__alloyId504.add($.__views.__alloyId505);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.username = Ti.UI.createTextField({
        id: "username",
        width: "90%",
        height: "50%",
        value: "username",
        backgroundColor: "#E6E7E9",
        textAlign: "center",
        hintText: "someone@example.com",
<<<<<<< Updated upstream
        color: "black",
        borderRadius: "15"
    });
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
<<<<<<< HEAD
    });
    $.__views.__alloyId506.add($.__views.__alloyId507);
    $.__views.__alloyId508 = Ti.UI.createLabel({
=======
    });
<<<<<<< HEAD
    $.__views.__alloyId472.add($.__views.__alloyId473);
    $.__views.__alloyId474 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        borderRadius: "15"
    });
    $.__views.__alloyId231.add($.__views.username);
    $.__views.__alloyId233 = Ti.UI.createView({
        height: "25%",
        width: Ti.UI.FILL,
        id: "__alloyId233"
    });
    $.__views.__alloyId227.add($.__views.__alloyId233);
    $.__views.__alloyId234 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId234"
    });
    $.__views.__alloyId233.add($.__views.__alloyId234);
    $.__views.__alloyId235 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId506.add($.__views.__alloyId507);
    $.__views.__alloyId508 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId510"
    });
    $.__views.__alloyId509.add($.__views.__alloyId510);
=======
        id: "__alloyId474"
    });
    $.__views.__alloyId473.add($.__views.__alloyId474);
>>>>>>> origin/master
=======
        id: "__alloyId235"
    });
    $.__views.__alloyId234.add($.__views.__alloyId235);
>>>>>>> Stashed changes
=======
        id: "__alloyId508"
    });
    $.__views.__alloyId507.add($.__views.__alloyId508);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.password = Ti.UI.createTextField({
        id: "password",
        width: "90%",
        height: "50%",
        value: "password",
        backgroundColor: "#E6E7E9",
        textAlign: "center",
        hintText: "********",
<<<<<<< Updated upstream
        color: "black",
        passwordMask: "true",
        borderRadius: "15"
    });
    $.__views.__alloyId507.add($.__views.password);
    $.__views.__alloyId509 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId509"
    });
<<<<<<< HEAD
    $.__views.__alloyId500.add($.__views.__alloyId509);
    $.__views.__alloyId510 = Ti.UI.createButton({
=======
<<<<<<< HEAD
    $.__views.__alloyId466.add($.__views.__alloyId475);
    $.__views.__alloyId476 = Ti.UI.createButton({
>>>>>>> origin/master
=======
        passwordMask: "true",
        borderRadius: "15"
    });
    $.__views.__alloyId234.add($.__views.password);
    $.__views.__alloyId236 = Ti.UI.createView({
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId236"
    });
    $.__views.__alloyId227.add($.__views.__alloyId236);
    $.__views.__alloyId237 = Ti.UI.createButton({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId500.add($.__views.__alloyId509);
    $.__views.__alloyId510 = Ti.UI.createButton({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        title: "Login",
        color: "#44C7D6",
        borderColor: "#44C7D6",
        height: "80%",
        width: "60%",
<<<<<<< Updated upstream
        backgroundColor: "white",
        borderRadius: "20",
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
<<<<<<< HEAD
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
=======
        borderRadius: "20",
        id: "__alloyId237"
    });
    $.__views.__alloyId236.add($.__views.__alloyId237);
    login ? $.__views.__alloyId237.addEventListener("click", login) : __defers["$.__views.__alloyId237!click!login"] = true;
    $.__views.__alloyId238 = Ti.UI.createView({
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId238"
    });
    $.__views.__alloyId227.add($.__views.__alloyId238);
    $.__views.__alloyId239 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
>>>>>>> Stashed changes
=======
>>>>>>> origin/master
        height: Ti.UI.SIZE,
        color: "#44C7D6",
        font: {
            fontSize: 14
        },
<<<<<<< Updated upstream
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
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
=======
        text: "Not Registered yet?",
        id: "__alloyId239"
    });
    $.__views.__alloyId238.add($.__views.__alloyId239);
    register ? $.__views.__alloyId239.addEventListener("click", register) : __defers["$.__views.__alloyId239!click!register"] = true;
    $.__views.__alloyId240 = Ti.UI.createScrollView({
>>>>>>> Stashed changes
        layout: "vertical",
        backgroundColor: "black",
        top: "60",
        left: "10",
        right: "10",
        bottom: "10",
<<<<<<< Updated upstream
        zIndex: "1"
    });
    $.__views.home.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId516 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId518 = Ti.UI.createView({
=======
    $.__views.__alloyId479 = Ti.UI.createView({
>>>>>>> origin/master
=======
        zIndex: "1",
        id: "__alloyId240"
    });
    $.__views.home.add($.__views.__alloyId240);
    $.__views.__alloyId241 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId516 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
        id: "__alloyId241"
    });
    $.__views.__alloyId240.add($.__views.__alloyId241);
    myAccount ? $.__views.__alloyId241.addEventListener("click", myAccount) : __defers["$.__views.__alloyId241!click!myAccount"] = true;
    $.__views.__alloyId242 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId516"
    });
    $.__views.scrollView.add($.__views.__alloyId516);
    myAccount ? $.__views.__alloyId516.addEventListener("click", myAccount) : __defers["$.__views.__alloyId516!click!myAccount"] = true;
    $.__views.__alloyId517 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
        id: "__alloyId242"
    });
    $.__views.__alloyId240.add($.__views.__alloyId242);
    $.__views.__alloyId243 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId517"
    });
    $.__views.scrollView.add($.__views.__alloyId517);
    $.__views.__alloyId518 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
        id: "__alloyId243"
    });
    $.__views.__alloyId242.add($.__views.__alloyId243);
    promoNews ? $.__views.__alloyId243.addEventListener("click", promoNews) : __defers["$.__views.__alloyId243!click!promoNews"] = true;
    $.__views.__alloyId244 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId518"
    });
    $.__views.__alloyId517.add($.__views.__alloyId518);
    promoNews ? $.__views.__alloyId518.addEventListener("click", promoNews) : __defers["$.__views.__alloyId518!click!promoNews"] = true;
    $.__views.__alloyId519 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
        id: "__alloyId244"
    });
    $.__views.__alloyId242.add($.__views.__alloyId244);
    product ? $.__views.__alloyId244.addEventListener("click", product) : __defers["$.__views.__alloyId244!click!product"] = true;
    $.__views.__alloyId245 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId519"
    });
    $.__views.__alloyId517.add($.__views.__alloyId519);
    product ? $.__views.__alloyId519.addEventListener("click", product) : __defers["$.__views.__alloyId519!click!product"] = true;
    $.__views.__alloyId520 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
        id: "__alloyId245"
    });
    $.__views.__alloyId240.add($.__views.__alloyId245);
    $.__views.__alloyId246 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId520"
    });
    $.__views.scrollView.add($.__views.__alloyId520);
    $.__views.__alloyId521 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
        id: "__alloyId246"
    });
    $.__views.__alloyId245.add($.__views.__alloyId246);
    online ? $.__views.__alloyId246.addEventListener("click", online) : __defers["$.__views.__alloyId246!click!online"] = true;
    $.__views.__alloyId247 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId521"
    });
    $.__views.__alloyId520.add($.__views.__alloyId521);
    online ? $.__views.__alloyId521.addEventListener("click", online) : __defers["$.__views.__alloyId521!click!online"] = true;
    $.__views.__alloyId522 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
        id: "__alloyId247"
    });
    $.__views.__alloyId245.add($.__views.__alloyId247);
    $.__views.__alloyId248 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId522"
    });
    $.__views.__alloyId520.add($.__views.__alloyId522);
    $.__views.__alloyId523 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
        id: "__alloyId248"
    });
    $.__views.__alloyId247.add($.__views.__alloyId248);
    history ? $.__views.__alloyId248.addEventListener("click", history) : __defers["$.__views.__alloyId248!click!history"] = true;
    $.__views.__alloyId249 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId523"
    });
    $.__views.__alloyId522.add($.__views.__alloyId523);
    history ? $.__views.__alloyId523.addEventListener("click", history) : __defers["$.__views.__alloyId523!click!history"] = true;
    $.__views.__alloyId524 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
        id: "__alloyId249"
    });
    $.__views.__alloyId247.add($.__views.__alloyId249);
    $.__views.__alloyId250 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId524"
    });
    $.__views.__alloyId522.add($.__views.__alloyId524);
    $.__views.__alloyId525 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
        id: "__alloyId250"
    });
    $.__views.__alloyId249.add($.__views.__alloyId250);
    contact ? $.__views.__alloyId250.addEventListener("click", contact) : __defers["$.__views.__alloyId250!click!contact"] = true;
    $.__views.__alloyId251 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId525"
    });
    $.__views.__alloyId524.add($.__views.__alloyId525);
    contact ? $.__views.__alloyId525.addEventListener("click", contact) : __defers["$.__views.__alloyId525!click!contact"] = true;
    $.__views.__alloyId526 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
        id: "__alloyId251"
    });
    $.__views.__alloyId249.add($.__views.__alloyId251);
    setting ? $.__views.__alloyId251.addEventListener("click", setting) : __defers["$.__views.__alloyId251!click!setting"] = true;
>>>>>>> Stashed changes
=======
        id: "__alloyId526"
    });
    $.__views.__alloyId524.add($.__views.__alloyId526);
    setting ? $.__views.__alloyId526.addEventListener("click", setting) : __defers["$.__views.__alloyId526!click!setting"] = true;
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    Ti.App.Properties.setString("root", "1");
    Ti.Platform.displayCaps.platformHeight;
<<<<<<< Updated upstream
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
    __defers["$.__views.__alloyId502!click!close"] && $.__views.__alloyId502.addEventListener("click", close);
    __defers["$.__views.__alloyId510!click!login"] && $.__views.__alloyId510.addEventListener("click", login);
    __defers["$.__views.forgotText!click!forgot"] && $.__views.forgotText.addEventListener("click", forgot);
    __defers["$.__views.registerText!click!register"] && $.__views.registerText.addEventListener("click", register);
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
    __defers["$.__views.__alloyId229!click!close"] && $.__views.__alloyId229.addEventListener("click", close);
    __defers["$.__views.__alloyId237!click!login"] && $.__views.__alloyId237.addEventListener("click", login);
    __defers["$.__views.__alloyId239!click!register"] && $.__views.__alloyId239.addEventListener("click", register);
    __defers["$.__views.__alloyId241!click!myAccount"] && $.__views.__alloyId241.addEventListener("click", myAccount);
    __defers["$.__views.__alloyId243!click!promoNews"] && $.__views.__alloyId243.addEventListener("click", promoNews);
    __defers["$.__views.__alloyId244!click!product"] && $.__views.__alloyId244.addEventListener("click", product);
    __defers["$.__views.__alloyId246!click!online"] && $.__views.__alloyId246.addEventListener("click", online);
    __defers["$.__views.__alloyId248!click!history"] && $.__views.__alloyId248.addEventListener("click", history);
    __defers["$.__views.__alloyId250!click!contact"] && $.__views.__alloyId250.addEventListener("click", contact);
    __defers["$.__views.__alloyId251!click!setting"] && $.__views.__alloyId251.addEventListener("click", setting);
>>>>>>> Stashed changes
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
    __defers["$.__views.__alloyId516!click!myAccount"] && $.__views.__alloyId516.addEventListener("click", myAccount);
    __defers["$.__views.__alloyId518!click!promoNews"] && $.__views.__alloyId518.addEventListener("click", promoNews);
    __defers["$.__views.__alloyId519!click!product"] && $.__views.__alloyId519.addEventListener("click", product);
    __defers["$.__views.__alloyId521!click!online"] && $.__views.__alloyId521.addEventListener("click", online);
    __defers["$.__views.__alloyId523!click!history"] && $.__views.__alloyId523.addEventListener("click", history);
    __defers["$.__views.__alloyId525!click!contact"] && $.__views.__alloyId525.addEventListener("click", contact);
    __defers["$.__views.__alloyId526!click!setting"] && $.__views.__alloyId526.addEventListener("click", setting);
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;