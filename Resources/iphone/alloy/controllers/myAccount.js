function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function faq() {
        DRAWER.navigation("faq", 2);
    }
    function accDetail() {
        DRAWER.navigation("accountDetails", 2);
    }
    function payment() {
        DRAWER.navigation("payment", 2);
    }
    function subline() {
        DRAWER.navigation("subline", 2);
    }
    function vas() {
        DRAWER.navigation("vas", 2);
    }
    function seasonPass() {
        DRAWER.navigation("seasonPass", 2);
    }
    function loyalty() {
        DRAWER.navigation("loyalty", 2);
    }
    function report() {
        DRAWER.navigation("report", 2);
    }
    function editPhoto() {
        console.log("editPhoto");
        $.photo.zIndex = 2;
    }
    function close() {
        console.log("close");
        $.photo.zIndex = 0;
    }
    function gallery() {
        console.log("gallery");
        $.photo.zIndex = 0;
    }
    function facebook() {
        console.log("facebook");
        $.photo.zIndex = 0;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "myAccount";
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
    $.__views.myAccount = Ti.UI.createView({
        backgroundColor: "black",
        layout: "composite",
        id: "myAccount"
    });
    $.__views.myAccount && $.addTopLevelView($.__views.myAccount);
<<<<<<< HEAD
    $.__views.__alloyId282 = Alloy.createController("_header", {
        id: "__alloyId282",
        __parentSymbol: $.__views.myAccount
    });
    $.__views.__alloyId282.setParent($.__views.myAccount);
=======
    $.__views.__alloyId487 = Alloy.createController("_header", {
        id: "__alloyId487",
        __parentSymbol: $.__views.myAccount
    });
    $.__views.__alloyId487.setParent($.__views.myAccount);
>>>>>>> origin/master
    $.__views.photo = Ti.UI.createView({
        id: "photo",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.myAccount.add($.__views.photo);
<<<<<<< HEAD
    $.__views.__alloyId283 = Ti.UI.createView({
=======
    $.__views.__alloyId488 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        width: "80%",
        height: "40%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId283"
    });
    $.__views.photo.add($.__views.__alloyId283);
    $.__views.__alloyId284 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId284"
    });
    $.__views.__alloyId283.add($.__views.__alloyId284);
    $.__views.__alloyId285 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "#E6E7E9",
        id: "__alloyId285"
    });
    $.__views.__alloyId284.add($.__views.__alloyId285);
    $.__views.__alloyId286 = Ti.UI.createImageView({
=======
        id: "__alloyId488"
    });
    $.__views.photo.add($.__views.__alloyId488);
    $.__views.__alloyId489 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId489"
    });
    $.__views.__alloyId488.add($.__views.__alloyId489);
    $.__views.__alloyId490 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "#E6E7E9",
        id: "__alloyId490"
    });
    $.__views.__alloyId489.add($.__views.__alloyId490);
    $.__views.__alloyId491 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId286"
    });
    $.__views.__alloyId284.add($.__views.__alloyId286);
    close ? $.__views.__alloyId286.addEventListener("click", close) : __defers["$.__views.__alloyId286!click!close"] = true;
    $.__views.__alloyId287 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId287"
    });
    $.__views.__alloyId283.add($.__views.__alloyId287);
    gallery ? $.__views.__alloyId287.addEventListener("click", gallery) : __defers["$.__views.__alloyId287!click!gallery"] = true;
    $.__views.__alloyId288 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        id: "__alloyId288"
    });
    $.__views.__alloyId287.add($.__views.__alloyId288);
    $.__views.__alloyId289 = Ti.UI.createImageView({
=======
        id: "__alloyId491"
    });
    $.__views.__alloyId489.add($.__views.__alloyId491);
    close ? $.__views.__alloyId491.addEventListener("click", close) : __defers["$.__views.__alloyId491!click!close"] = true;
    $.__views.__alloyId492 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId492"
    });
    $.__views.__alloyId488.add($.__views.__alloyId492);
    gallery ? $.__views.__alloyId492.addEventListener("click", gallery) : __defers["$.__views.__alloyId492!click!gallery"] = true;
    $.__views.__alloyId493 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        id: "__alloyId493"
    });
    $.__views.__alloyId492.add($.__views.__alloyId493);
    $.__views.__alloyId494 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "32",
        height: "32",
        left: "10",
        image: "/images/gallery_icon.png",
<<<<<<< HEAD
        id: "__alloyId289"
    });
    $.__views.__alloyId288.add($.__views.__alloyId289);
    $.__views.__alloyId290 = Ti.UI.createView({
        id: "__alloyId290"
    });
    $.__views.__alloyId287.add($.__views.__alloyId290);
    $.__views.__alloyId291 = Ti.UI.createLabel({
=======
        id: "__alloyId494"
    });
    $.__views.__alloyId493.add($.__views.__alloyId494);
    $.__views.__alloyId495 = Ti.UI.createView({
        id: "__alloyId495"
    });
    $.__views.__alloyId492.add($.__views.__alloyId495);
    $.__views.__alloyId496 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Photo Gallery",
        color: "white",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId291"
    });
    $.__views.__alloyId290.add($.__views.__alloyId291);
    $.__views.__alloyId292 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#3E6AC3",
        id: "__alloyId292"
    });
    $.__views.__alloyId283.add($.__views.__alloyId292);
    facebook ? $.__views.__alloyId292.addEventListener("click", facebook) : __defers["$.__views.__alloyId292!click!facebook"] = true;
    $.__views.__alloyId293 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        id: "__alloyId293"
    });
    $.__views.__alloyId292.add($.__views.__alloyId293);
    $.__views.__alloyId294 = Ti.UI.createImageView({
=======
        id: "__alloyId496"
    });
    $.__views.__alloyId495.add($.__views.__alloyId496);
    $.__views.__alloyId497 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#3E6AC3",
        id: "__alloyId497"
    });
    $.__views.__alloyId488.add($.__views.__alloyId497);
    facebook ? $.__views.__alloyId497.addEventListener("click", facebook) : __defers["$.__views.__alloyId497!click!facebook"] = true;
    $.__views.__alloyId498 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        id: "__alloyId498"
    });
    $.__views.__alloyId497.add($.__views.__alloyId498);
    $.__views.__alloyId499 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "32",
        height: "32",
        left: "10",
        image: "/images/facebook_icon.png",
<<<<<<< HEAD
        id: "__alloyId294"
    });
    $.__views.__alloyId293.add($.__views.__alloyId294);
    $.__views.__alloyId295 = Ti.UI.createView({
        id: "__alloyId295"
    });
    $.__views.__alloyId292.add($.__views.__alloyId295);
    $.__views.__alloyId296 = Ti.UI.createLabel({
=======
        id: "__alloyId499"
    });
    $.__views.__alloyId498.add($.__views.__alloyId499);
    $.__views.__alloyId500 = Ti.UI.createView({
        id: "__alloyId500"
    });
    $.__views.__alloyId497.add($.__views.__alloyId500);
    $.__views.__alloyId501 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Connect with Facebook",
        color: "white",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId296"
    });
    $.__views.__alloyId295.add($.__views.__alloyId296);
    $.__views.__alloyId297 = Ti.UI.createView({
=======
        id: "__alloyId501"
    });
    $.__views.__alloyId500.add($.__views.__alloyId501);
    $.__views.__alloyId502 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        backgroundColor: "black",
        top: "50",
        zIndex: "1",
<<<<<<< HEAD
        id: "__alloyId297"
    });
    $.__views.myAccount.add($.__views.__alloyId297);
    $.__views.__alloyId298 = Ti.UI.createView({
=======
        id: "__alloyId502"
    });
    $.__views.myAccount.add($.__views.__alloyId502);
    $.__views.__alloyId503 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        backgroundColor: "red",
<<<<<<< HEAD
        id: "__alloyId298"
    });
    $.__views.__alloyId297.add($.__views.__alloyId298);
    $.__views.__alloyId299 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId299"
    });
    $.__views.__alloyId298.add($.__views.__alloyId299);
    $.__views.__alloyId300 = Ti.UI.createLabel({
=======
        id: "__alloyId503"
    });
    $.__views.__alloyId502.add($.__views.__alloyId503);
    $.__views.__alloyId504 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId504"
    });
    $.__views.__alloyId503.add($.__views.__alloyId504);
    $.__views.__alloyId505 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Hello!",
        color: "white",
        left: "10",
        top: "10",
<<<<<<< HEAD
        id: "__alloyId300"
    });
    $.__views.__alloyId299.add($.__views.__alloyId300);
    $.__views.__alloyId301 = Ti.UI.createLabel({
=======
        id: "__alloyId505"
    });
    $.__views.__alloyId504.add($.__views.__alloyId505);
    $.__views.__alloyId506 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "John Smith",
        color: "white",
        left: "10",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId301"
    });
    $.__views.__alloyId299.add($.__views.__alloyId301);
    $.__views.__alloyId302 = Ti.UI.createView({
        width: "33%",
        id: "__alloyId302"
    });
    $.__views.__alloyId298.add($.__views.__alloyId302);
    $.__views.__alloyId303 = Ti.UI.createView({
        width: "auto",
        height: Ti.UI.FILL,
        id: "__alloyId303"
    });
    $.__views.__alloyId298.add($.__views.__alloyId303);
    $.__views.__alloyId304 = Ti.UI.createImageView({
=======
        id: "__alloyId506"
    });
    $.__views.__alloyId504.add($.__views.__alloyId506);
    $.__views.__alloyId507 = Ti.UI.createView({
        width: "33%",
        id: "__alloyId507"
    });
    $.__views.__alloyId503.add($.__views.__alloyId507);
    $.__views.__alloyId508 = Ti.UI.createView({
        width: "auto",
        height: Ti.UI.FILL,
        id: "__alloyId508"
    });
    $.__views.__alloyId503.add($.__views.__alloyId508);
    $.__views.__alloyId509 = Ti.UI.createImageView({
>>>>>>> origin/master
        width: "80",
        height: "80",
        image: "/images/profile_images.png",
        borderRadius: "40",
<<<<<<< HEAD
        id: "__alloyId304"
    });
    $.__views.__alloyId303.add($.__views.__alloyId304);
    editPhoto ? $.__views.__alloyId304.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId304!click!editPhoto"] = true;
    $.__views.__alloyId305 = Ti.UI.createImageView({
=======
        id: "__alloyId509"
    });
    $.__views.__alloyId508.add($.__views.__alloyId509);
    editPhoto ? $.__views.__alloyId509.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId509!click!editPhoto"] = true;
    $.__views.__alloyId510 = Ti.UI.createImageView({
>>>>>>> origin/master
        width: "20",
        height: "20",
        image: "/images/profileedit_icon.png",
        borderRadius: "10",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId305"
    });
    $.__views.__alloyId303.add($.__views.__alloyId305);
    editPhoto ? $.__views.__alloyId305.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId305!click!editPhoto"] = true;
    $.__views.__alloyId306 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#F5F5F5",
        id: "__alloyId306"
    });
    $.__views.__alloyId297.add($.__views.__alloyId306);
    $.__views.__alloyId307 = Ti.UI.createView({
        layout: "composite",
        width: "50%",
        id: "__alloyId307"
    });
    $.__views.__alloyId306.add($.__views.__alloyId307);
    $.__views.__alloyId308 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId308"
    });
    $.__views.__alloyId307.add($.__views.__alloyId308);
    $.__views.__alloyId309 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "#878787",
        left: "10",
        id: "__alloyId309"
    });
    $.__views.__alloyId308.add($.__views.__alloyId309);
    $.__views.__alloyId310 = Ti.UI.createLabel({
        text: "85.05",
        color: "black",
        left: "10",
        id: "__alloyId310"
    });
    $.__views.__alloyId308.add($.__views.__alloyId310);
    $.__views.__alloyId311 = Ti.UI.createView({
        layout: "composite",
        width: "auto",
        id: "__alloyId311"
    });
    $.__views.__alloyId306.add($.__views.__alloyId311);
    $.__views.__alloyId312 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId312"
    });
    $.__views.__alloyId311.add($.__views.__alloyId312);
    $.__views.__alloyId313 = Ti.UI.createLabel({
=======
        id: "__alloyId510"
    });
    $.__views.__alloyId508.add($.__views.__alloyId510);
    editPhoto ? $.__views.__alloyId510.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId510!click!editPhoto"] = true;
    $.__views.__alloyId511 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#F5F5F5",
        id: "__alloyId511"
    });
    $.__views.__alloyId502.add($.__views.__alloyId511);
    $.__views.__alloyId512 = Ti.UI.createView({
        layout: "composite",
        width: "50%",
        id: "__alloyId512"
    });
    $.__views.__alloyId511.add($.__views.__alloyId512);
    $.__views.__alloyId513 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId513"
    });
    $.__views.__alloyId512.add($.__views.__alloyId513);
    $.__views.__alloyId514 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "#878787",
        left: "10",
        id: "__alloyId514"
    });
    $.__views.__alloyId513.add($.__views.__alloyId514);
    $.__views.__alloyId515 = Ti.UI.createLabel({
        text: "85.05",
        color: "black",
        left: "10",
        id: "__alloyId515"
    });
    $.__views.__alloyId513.add($.__views.__alloyId515);
    $.__views.__alloyId516 = Ti.UI.createView({
        layout: "composite",
        width: "auto",
        id: "__alloyId516"
    });
    $.__views.__alloyId511.add($.__views.__alloyId516);
    $.__views.__alloyId517 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId517"
    });
    $.__views.__alloyId516.add($.__views.__alloyId517);
    $.__views.__alloyId518 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Expiry Date",
        color: "#878787",
        left: "10",
        bottom: "2.5",
<<<<<<< HEAD
        id: "__alloyId313"
    });
    $.__views.__alloyId312.add($.__views.__alloyId313);
    $.__views.__alloyId314 = Ti.UI.createLabel({
=======
        id: "__alloyId518"
    });
    $.__views.__alloyId517.add($.__views.__alloyId518);
    $.__views.__alloyId519 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "1 Dec 2015",
        color: "black",
        left: "10",
        top: "2.5",
<<<<<<< HEAD
        id: "__alloyId314"
    });
    $.__views.__alloyId312.add($.__views.__alloyId314);
    $.__views.__alloyId315 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId315"
    });
    $.__views.__alloyId297.add($.__views.__alloyId315);
    $.__views.__alloyId316 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId316"
    });
    $.__views.__alloyId315.add($.__views.__alloyId316);
    $.__views.__alloyId317 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId317"
    });
    $.__views.__alloyId316.add($.__views.__alloyId317);
    $.__views.__alloyId318 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId318"
    });
    $.__views.__alloyId317.add($.__views.__alloyId318);
    accDetail ? $.__views.__alloyId318.addEventListener("click", accDetail) : __defers["$.__views.__alloyId318!click!accDetail"] = true;
    $.__views.__alloyId319 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId319"
    });
    $.__views.__alloyId316.add($.__views.__alloyId319);
    $.__views.__alloyId320 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId320"
    });
    $.__views.__alloyId319.add($.__views.__alloyId320);
    payment ? $.__views.__alloyId320.addEventListener("click", payment) : __defers["$.__views.__alloyId320!click!payment"] = true;
    $.__views.__alloyId321 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId321"
    });
    $.__views.__alloyId316.add($.__views.__alloyId321);
    $.__views.__alloyId322 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_04.png",
        id: "__alloyId322"
    });
    $.__views.__alloyId321.add($.__views.__alloyId322);
    subline ? $.__views.__alloyId322.addEventListener("click", subline) : __defers["$.__views.__alloyId322!click!subline"] = true;
    $.__views.__alloyId323 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId323"
    });
    $.__views.__alloyId315.add($.__views.__alloyId323);
    $.__views.__alloyId324 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId324"
    });
    $.__views.__alloyId323.add($.__views.__alloyId324);
    $.__views.__alloyId325 = Ti.UI.createLabel({
=======
        id: "__alloyId519"
    });
    $.__views.__alloyId517.add($.__views.__alloyId519);
    $.__views.__alloyId520 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId520"
    });
    $.__views.__alloyId502.add($.__views.__alloyId520);
    $.__views.__alloyId521 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId521"
    });
    $.__views.__alloyId520.add($.__views.__alloyId521);
    $.__views.__alloyId522 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId522"
    });
    $.__views.__alloyId521.add($.__views.__alloyId522);
    $.__views.__alloyId523 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId523"
    });
    $.__views.__alloyId522.add($.__views.__alloyId523);
    accDetail ? $.__views.__alloyId523.addEventListener("click", accDetail) : __defers["$.__views.__alloyId523!click!accDetail"] = true;
    $.__views.__alloyId524 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId524"
    });
    $.__views.__alloyId521.add($.__views.__alloyId524);
    $.__views.__alloyId525 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId525"
    });
    $.__views.__alloyId524.add($.__views.__alloyId525);
    payment ? $.__views.__alloyId525.addEventListener("click", payment) : __defers["$.__views.__alloyId525!click!payment"] = true;
    $.__views.__alloyId526 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId526"
    });
    $.__views.__alloyId521.add($.__views.__alloyId526);
    $.__views.__alloyId527 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_04.png",
        id: "__alloyId527"
    });
    $.__views.__alloyId526.add($.__views.__alloyId527);
    subline ? $.__views.__alloyId527.addEventListener("click", subline) : __defers["$.__views.__alloyId527!click!subline"] = true;
    $.__views.__alloyId528 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId528"
    });
    $.__views.__alloyId520.add($.__views.__alloyId528);
    $.__views.__alloyId529 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId529"
    });
    $.__views.__alloyId528.add($.__views.__alloyId529);
    $.__views.__alloyId530 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Account Details",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId325"
    });
    $.__views.__alloyId324.add($.__views.__alloyId325);
    accDetail ? $.__views.__alloyId325.addEventListener("click", accDetail) : __defers["$.__views.__alloyId325!click!accDetail"] = true;
    $.__views.__alloyId326 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId326"
    });
    $.__views.__alloyId323.add($.__views.__alloyId326);
    $.__views.__alloyId327 = Ti.UI.createLabel({
=======
        id: "__alloyId530"
    });
    $.__views.__alloyId529.add($.__views.__alloyId530);
    accDetail ? $.__views.__alloyId530.addEventListener("click", accDetail) : __defers["$.__views.__alloyId530!click!accDetail"] = true;
    $.__views.__alloyId531 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId531"
    });
    $.__views.__alloyId528.add($.__views.__alloyId531);
    $.__views.__alloyId532 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Payment",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId327"
    });
    $.__views.__alloyId326.add($.__views.__alloyId327);
    payment ? $.__views.__alloyId327.addEventListener("click", payment) : __defers["$.__views.__alloyId327!click!payment"] = true;
    $.__views.__alloyId328 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId328"
    });
    $.__views.__alloyId323.add($.__views.__alloyId328);
    $.__views.__alloyId329 = Ti.UI.createLabel({
=======
        id: "__alloyId532"
    });
    $.__views.__alloyId531.add($.__views.__alloyId532);
    payment ? $.__views.__alloyId532.addEventListener("click", payment) : __defers["$.__views.__alloyId532!click!payment"] = true;
    $.__views.__alloyId533 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId533"
    });
    $.__views.__alloyId528.add($.__views.__alloyId533);
    $.__views.__alloyId534 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Subline Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId329"
    });
    $.__views.__alloyId328.add($.__views.__alloyId329);
    subline ? $.__views.__alloyId329.addEventListener("click", subline) : __defers["$.__views.__alloyId329!click!subline"] = true;
    $.__views.__alloyId330 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId330"
    });
    $.__views.__alloyId315.add($.__views.__alloyId330);
    $.__views.__alloyId331 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId331"
    });
    $.__views.__alloyId330.add($.__views.__alloyId331);
    $.__views.__alloyId332 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId332"
    });
    $.__views.__alloyId331.add($.__views.__alloyId332);
    vas ? $.__views.__alloyId332.addEventListener("click", vas) : __defers["$.__views.__alloyId332!click!vas"] = true;
    $.__views.__alloyId333 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId333"
    });
    $.__views.__alloyId330.add($.__views.__alloyId333);
    $.__views.__alloyId334 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_06.png",
        id: "__alloyId334"
    });
    $.__views.__alloyId333.add($.__views.__alloyId334);
    seasonPass ? $.__views.__alloyId334.addEventListener("click", seasonPass) : __defers["$.__views.__alloyId334!click!seasonPass"] = true;
    $.__views.__alloyId335 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId335"
    });
    $.__views.__alloyId330.add($.__views.__alloyId335);
    $.__views.__alloyId336 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId336"
    });
    $.__views.__alloyId335.add($.__views.__alloyId336);
    loyalty ? $.__views.__alloyId336.addEventListener("click", loyalty) : __defers["$.__views.__alloyId336!click!loyalty"] = true;
    $.__views.__alloyId337 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId337"
    });
    $.__views.__alloyId315.add($.__views.__alloyId337);
    $.__views.__alloyId338 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId338"
    });
    $.__views.__alloyId337.add($.__views.__alloyId338);
    $.__views.__alloyId339 = Ti.UI.createLabel({
=======
        id: "__alloyId534"
    });
    $.__views.__alloyId533.add($.__views.__alloyId534);
    subline ? $.__views.__alloyId534.addEventListener("click", subline) : __defers["$.__views.__alloyId534!click!subline"] = true;
    $.__views.__alloyId535 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId535"
    });
    $.__views.__alloyId520.add($.__views.__alloyId535);
    $.__views.__alloyId536 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId536"
    });
    $.__views.__alloyId535.add($.__views.__alloyId536);
    $.__views.__alloyId537 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId537"
    });
    $.__views.__alloyId536.add($.__views.__alloyId537);
    vas ? $.__views.__alloyId537.addEventListener("click", vas) : __defers["$.__views.__alloyId537!click!vas"] = true;
    $.__views.__alloyId538 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId538"
    });
    $.__views.__alloyId535.add($.__views.__alloyId538);
    $.__views.__alloyId539 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_06.png",
        id: "__alloyId539"
    });
    $.__views.__alloyId538.add($.__views.__alloyId539);
    seasonPass ? $.__views.__alloyId539.addEventListener("click", seasonPass) : __defers["$.__views.__alloyId539!click!seasonPass"] = true;
    $.__views.__alloyId540 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId540"
    });
    $.__views.__alloyId535.add($.__views.__alloyId540);
    $.__views.__alloyId541 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId541"
    });
    $.__views.__alloyId540.add($.__views.__alloyId541);
    loyalty ? $.__views.__alloyId541.addEventListener("click", loyalty) : __defers["$.__views.__alloyId541!click!loyalty"] = true;
    $.__views.__alloyId542 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId542"
    });
    $.__views.__alloyId520.add($.__views.__alloyId542);
    $.__views.__alloyId543 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId543"
    });
    $.__views.__alloyId542.add($.__views.__alloyId543);
    $.__views.__alloyId544 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "VAS Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId339"
    });
    $.__views.__alloyId338.add($.__views.__alloyId339);
    vas ? $.__views.__alloyId339.addEventListener("click", vas) : __defers["$.__views.__alloyId339!click!vas"] = true;
    $.__views.__alloyId340 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId340"
    });
    $.__views.__alloyId337.add($.__views.__alloyId340);
    $.__views.__alloyId341 = Ti.UI.createLabel({
=======
        id: "__alloyId544"
    });
    $.__views.__alloyId543.add($.__views.__alloyId544);
    vas ? $.__views.__alloyId544.addEventListener("click", vas) : __defers["$.__views.__alloyId544!click!vas"] = true;
    $.__views.__alloyId545 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId545"
    });
    $.__views.__alloyId542.add($.__views.__alloyId545);
    $.__views.__alloyId546 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Season Pass",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId341"
    });
    $.__views.__alloyId340.add($.__views.__alloyId341);
    seasonPass ? $.__views.__alloyId341.addEventListener("click", seasonPass) : __defers["$.__views.__alloyId341!click!seasonPass"] = true;
    $.__views.__alloyId342 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId342"
    });
    $.__views.__alloyId337.add($.__views.__alloyId342);
    $.__views.__alloyId343 = Ti.UI.createLabel({
=======
        id: "__alloyId546"
    });
    $.__views.__alloyId545.add($.__views.__alloyId546);
    seasonPass ? $.__views.__alloyId546.addEventListener("click", seasonPass) : __defers["$.__views.__alloyId546!click!seasonPass"] = true;
    $.__views.__alloyId547 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId547"
    });
    $.__views.__alloyId542.add($.__views.__alloyId547);
    $.__views.__alloyId548 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Loyalty",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId343"
    });
    $.__views.__alloyId342.add($.__views.__alloyId343);
    loyalty ? $.__views.__alloyId343.addEventListener("click", loyalty) : __defers["$.__views.__alloyId343!click!loyalty"] = true;
    $.__views.__alloyId344 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId344"
    });
    $.__views.__alloyId315.add($.__views.__alloyId344);
    $.__views.__alloyId345 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId345"
    });
    $.__views.__alloyId344.add($.__views.__alloyId345);
    $.__views.__alloyId346 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId346"
    });
    $.__views.__alloyId345.add($.__views.__alloyId346);
    report ? $.__views.__alloyId346.addEventListener("click", report) : __defers["$.__views.__alloyId346!click!report"] = true;
    $.__views.__alloyId347 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId347"
    });
    $.__views.__alloyId344.add($.__views.__alloyId347);
    $.__views.__alloyId348 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_09.png",
        id: "__alloyId348"
    });
    $.__views.__alloyId347.add($.__views.__alloyId348);
    faq ? $.__views.__alloyId348.addEventListener("click", faq) : __defers["$.__views.__alloyId348!click!faq"] = true;
    $.__views.__alloyId349 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId349"
    });
    $.__views.__alloyId315.add($.__views.__alloyId349);
    $.__views.__alloyId350 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId350"
    });
    $.__views.__alloyId349.add($.__views.__alloyId350);
    $.__views.__alloyId351 = Ti.UI.createLabel({
=======
        id: "__alloyId548"
    });
    $.__views.__alloyId547.add($.__views.__alloyId548);
    loyalty ? $.__views.__alloyId548.addEventListener("click", loyalty) : __defers["$.__views.__alloyId548!click!loyalty"] = true;
    $.__views.__alloyId549 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId549"
    });
    $.__views.__alloyId520.add($.__views.__alloyId549);
    $.__views.__alloyId550 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId550"
    });
    $.__views.__alloyId549.add($.__views.__alloyId550);
    $.__views.__alloyId551 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId551"
    });
    $.__views.__alloyId550.add($.__views.__alloyId551);
    report ? $.__views.__alloyId551.addEventListener("click", report) : __defers["$.__views.__alloyId551!click!report"] = true;
    $.__views.__alloyId552 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId552"
    });
    $.__views.__alloyId549.add($.__views.__alloyId552);
    $.__views.__alloyId553 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_09.png",
        id: "__alloyId553"
    });
    $.__views.__alloyId552.add($.__views.__alloyId553);
    faq ? $.__views.__alloyId553.addEventListener("click", faq) : __defers["$.__views.__alloyId553!click!faq"] = true;
    $.__views.__alloyId554 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId554"
    });
    $.__views.__alloyId520.add($.__views.__alloyId554);
    $.__views.__alloyId555 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId555"
    });
    $.__views.__alloyId554.add($.__views.__alloyId555);
    $.__views.__alloyId556 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Report Case",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId351"
    });
    $.__views.__alloyId350.add($.__views.__alloyId351);
    report ? $.__views.__alloyId351.addEventListener("click", report) : __defers["$.__views.__alloyId351!click!report"] = true;
    $.__views.__alloyId352 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId352"
    });
    $.__views.__alloyId349.add($.__views.__alloyId352);
    $.__views.__alloyId353 = Ti.UI.createLabel({
=======
        id: "__alloyId556"
    });
    $.__views.__alloyId555.add($.__views.__alloyId556);
    report ? $.__views.__alloyId556.addEventListener("click", report) : __defers["$.__views.__alloyId556!click!report"] = true;
    $.__views.__alloyId557 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId557"
    });
    $.__views.__alloyId554.add($.__views.__alloyId557);
    $.__views.__alloyId558 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "FAQs",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId353"
    });
    $.__views.__alloyId352.add($.__views.__alloyId353);
    faq ? $.__views.__alloyId353.addEventListener("click", faq) : __defers["$.__views.__alloyId353!click!faq"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId286!click!close"] && $.__views.__alloyId286.addEventListener("click", close);
    __defers["$.__views.__alloyId287!click!gallery"] && $.__views.__alloyId287.addEventListener("click", gallery);
    __defers["$.__views.__alloyId292!click!facebook"] && $.__views.__alloyId292.addEventListener("click", facebook);
    __defers["$.__views.__alloyId304!click!editPhoto"] && $.__views.__alloyId304.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId305!click!editPhoto"] && $.__views.__alloyId305.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId318!click!accDetail"] && $.__views.__alloyId318.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId320!click!payment"] && $.__views.__alloyId320.addEventListener("click", payment);
    __defers["$.__views.__alloyId322!click!subline"] && $.__views.__alloyId322.addEventListener("click", subline);
    __defers["$.__views.__alloyId325!click!accDetail"] && $.__views.__alloyId325.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId327!click!payment"] && $.__views.__alloyId327.addEventListener("click", payment);
    __defers["$.__views.__alloyId329!click!subline"] && $.__views.__alloyId329.addEventListener("click", subline);
    __defers["$.__views.__alloyId332!click!vas"] && $.__views.__alloyId332.addEventListener("click", vas);
    __defers["$.__views.__alloyId334!click!seasonPass"] && $.__views.__alloyId334.addEventListener("click", seasonPass);
    __defers["$.__views.__alloyId336!click!loyalty"] && $.__views.__alloyId336.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId339!click!vas"] && $.__views.__alloyId339.addEventListener("click", vas);
    __defers["$.__views.__alloyId341!click!seasonPass"] && $.__views.__alloyId341.addEventListener("click", seasonPass);
    __defers["$.__views.__alloyId343!click!loyalty"] && $.__views.__alloyId343.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId346!click!report"] && $.__views.__alloyId346.addEventListener("click", report);
    __defers["$.__views.__alloyId348!click!faq"] && $.__views.__alloyId348.addEventListener("click", faq);
    __defers["$.__views.__alloyId351!click!report"] && $.__views.__alloyId351.addEventListener("click", report);
    __defers["$.__views.__alloyId353!click!faq"] && $.__views.__alloyId353.addEventListener("click", faq);
=======
        id: "__alloyId558"
    });
    $.__views.__alloyId557.add($.__views.__alloyId558);
    faq ? $.__views.__alloyId558.addEventListener("click", faq) : __defers["$.__views.__alloyId558!click!faq"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId491!click!close"] && $.__views.__alloyId491.addEventListener("click", close);
    __defers["$.__views.__alloyId492!click!gallery"] && $.__views.__alloyId492.addEventListener("click", gallery);
    __defers["$.__views.__alloyId497!click!facebook"] && $.__views.__alloyId497.addEventListener("click", facebook);
    __defers["$.__views.__alloyId509!click!editPhoto"] && $.__views.__alloyId509.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId510!click!editPhoto"] && $.__views.__alloyId510.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId523!click!accDetail"] && $.__views.__alloyId523.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId525!click!payment"] && $.__views.__alloyId525.addEventListener("click", payment);
    __defers["$.__views.__alloyId527!click!subline"] && $.__views.__alloyId527.addEventListener("click", subline);
    __defers["$.__views.__alloyId530!click!accDetail"] && $.__views.__alloyId530.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId532!click!payment"] && $.__views.__alloyId532.addEventListener("click", payment);
    __defers["$.__views.__alloyId534!click!subline"] && $.__views.__alloyId534.addEventListener("click", subline);
    __defers["$.__views.__alloyId537!click!vas"] && $.__views.__alloyId537.addEventListener("click", vas);
    __defers["$.__views.__alloyId539!click!seasonPass"] && $.__views.__alloyId539.addEventListener("click", seasonPass);
    __defers["$.__views.__alloyId541!click!loyalty"] && $.__views.__alloyId541.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId544!click!vas"] && $.__views.__alloyId544.addEventListener("click", vas);
    __defers["$.__views.__alloyId546!click!seasonPass"] && $.__views.__alloyId546.addEventListener("click", seasonPass);
    __defers["$.__views.__alloyId548!click!loyalty"] && $.__views.__alloyId548.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId551!click!report"] && $.__views.__alloyId551.addEventListener("click", report);
    __defers["$.__views.__alloyId553!click!faq"] && $.__views.__alloyId553.addEventListener("click", faq);
    __defers["$.__views.__alloyId556!click!report"] && $.__views.__alloyId556.addEventListener("click", report);
    __defers["$.__views.__alloyId558!click!faq"] && $.__views.__alloyId558.addEventListener("click", faq);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;