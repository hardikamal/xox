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
    $.__views.__alloyId283 = Alloy.createController("_header", {
        id: "__alloyId283",
        __parentSymbol: $.__views.myAccount
    });
    $.__views.__alloyId283.setParent($.__views.myAccount);
    $.__views.photo = Ti.UI.createView({
        id: "photo",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.myAccount.add($.__views.photo);
    $.__views.__alloyId284 = Ti.UI.createView({
        layout: "vertical",
        width: "80%",
        height: "40%",
        backgroundColor: "white",
        id: "__alloyId284"
    });
    $.__views.photo.add($.__views.__alloyId284);
    $.__views.__alloyId285 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId285"
    });
    $.__views.__alloyId284.add($.__views.__alloyId285);
    $.__views.__alloyId286 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "#E6E7E9",
        id: "__alloyId286"
    });
    $.__views.__alloyId285.add($.__views.__alloyId286);
    $.__views.__alloyId287 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId287"
    });
    $.__views.__alloyId285.add($.__views.__alloyId287);
    close ? $.__views.__alloyId287.addEventListener("click", close) : __defers["$.__views.__alloyId287!click!close"] = true;
    $.__views.__alloyId288 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId288"
    });
    $.__views.__alloyId284.add($.__views.__alloyId288);
    gallery ? $.__views.__alloyId288.addEventListener("click", gallery) : __defers["$.__views.__alloyId288!click!gallery"] = true;
    $.__views.__alloyId289 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        id: "__alloyId289"
    });
    $.__views.__alloyId288.add($.__views.__alloyId289);
    $.__views.__alloyId290 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "32",
        height: "32",
        left: "10",
        image: "/images/gallery_icon.png",
        id: "__alloyId290"
    });
    $.__views.__alloyId289.add($.__views.__alloyId290);
    $.__views.__alloyId291 = Ti.UI.createView({
        id: "__alloyId291"
    });
    $.__views.__alloyId288.add($.__views.__alloyId291);
    $.__views.__alloyId292 = Ti.UI.createLabel({
        text: "Photo Gallery",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId292"
    });
    $.__views.__alloyId291.add($.__views.__alloyId292);
    $.__views.__alloyId293 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#3E6AC3",
        id: "__alloyId293"
    });
    $.__views.__alloyId284.add($.__views.__alloyId293);
    facebook ? $.__views.__alloyId293.addEventListener("click", facebook) : __defers["$.__views.__alloyId293!click!facebook"] = true;
    $.__views.__alloyId294 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        id: "__alloyId294"
    });
    $.__views.__alloyId293.add($.__views.__alloyId294);
    $.__views.__alloyId295 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "32",
        height: "32",
        left: "10",
        image: "/images/facebook_icon.png",
        id: "__alloyId295"
    });
    $.__views.__alloyId294.add($.__views.__alloyId295);
    $.__views.__alloyId296 = Ti.UI.createView({
        id: "__alloyId296"
    });
    $.__views.__alloyId293.add($.__views.__alloyId296);
    $.__views.__alloyId297 = Ti.UI.createLabel({
        text: "Connect with Facebook",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId297"
    });
    $.__views.__alloyId296.add($.__views.__alloyId297);
    $.__views.__alloyId298 = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "black",
        top: "50",
        zIndex: "1",
        id: "__alloyId298"
    });
    $.__views.myAccount.add($.__views.__alloyId298);
    $.__views.__alloyId299 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        backgroundColor: "red",
        id: "__alloyId299"
    });
    $.__views.__alloyId298.add($.__views.__alloyId299);
    $.__views.__alloyId300 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId300"
    });
    $.__views.__alloyId299.add($.__views.__alloyId300);
    $.__views.__alloyId301 = Ti.UI.createLabel({
        text: "Hello!",
        color: "white",
        left: "10",
        top: "10",
        id: "__alloyId301"
    });
    $.__views.__alloyId300.add($.__views.__alloyId301);
    $.__views.__alloyId302 = Ti.UI.createLabel({
        text: "John Smith",
        color: "white",
        left: "10",
        bottom: "10",
        id: "__alloyId302"
    });
    $.__views.__alloyId300.add($.__views.__alloyId302);
    $.__views.__alloyId303 = Ti.UI.createView({
        width: "33%",
        id: "__alloyId303"
    });
    $.__views.__alloyId299.add($.__views.__alloyId303);
    $.__views.__alloyId304 = Ti.UI.createView({
        width: "auto",
        height: Ti.UI.FILL,
        id: "__alloyId304"
    });
    $.__views.__alloyId299.add($.__views.__alloyId304);
    $.__views.__alloyId305 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/profile_images.png",
        borderRadius: "40",
        id: "__alloyId305"
    });
    $.__views.__alloyId304.add($.__views.__alloyId305);
    editPhoto ? $.__views.__alloyId305.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId305!click!editPhoto"] = true;
    $.__views.__alloyId306 = Ti.UI.createImageView({
        width: "20",
        height: "20",
        image: "/images/profileedit_icon.png",
        borderRadius: "10",
        bottom: "10",
        id: "__alloyId306"
    });
    $.__views.__alloyId304.add($.__views.__alloyId306);
    editPhoto ? $.__views.__alloyId306.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId306!click!editPhoto"] = true;
    $.__views.__alloyId307 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#F5F5F5",
        id: "__alloyId307"
    });
    $.__views.__alloyId298.add($.__views.__alloyId307);
    $.__views.__alloyId308 = Ti.UI.createView({
        layout: "composite",
        width: "50%",
        id: "__alloyId308"
    });
    $.__views.__alloyId307.add($.__views.__alloyId308);
    $.__views.__alloyId309 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId309"
    });
    $.__views.__alloyId308.add($.__views.__alloyId309);
    $.__views.__alloyId310 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "#878787",
        left: "10",
        id: "__alloyId310"
    });
    $.__views.__alloyId309.add($.__views.__alloyId310);
    $.__views.__alloyId311 = Ti.UI.createLabel({
        text: "85.05",
        color: "black",
        left: "10",
        id: "__alloyId311"
    });
    $.__views.__alloyId309.add($.__views.__alloyId311);
    $.__views.__alloyId312 = Ti.UI.createView({
        layout: "composite",
        width: "auto",
        id: "__alloyId312"
    });
    $.__views.__alloyId307.add($.__views.__alloyId312);
    $.__views.__alloyId313 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId313"
    });
    $.__views.__alloyId312.add($.__views.__alloyId313);
    $.__views.__alloyId314 = Ti.UI.createLabel({
        text: "Expiry Date",
        color: "#878787",
        left: "10",
        bottom: "2.5",
        id: "__alloyId314"
    });
    $.__views.__alloyId313.add($.__views.__alloyId314);
    $.__views.__alloyId315 = Ti.UI.createLabel({
        text: "1 Dec 2015",
        color: "black",
        left: "10",
        top: "2.5",
        id: "__alloyId315"
    });
    $.__views.__alloyId313.add($.__views.__alloyId315);
    $.__views.__alloyId316 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId316"
    });
    $.__views.__alloyId298.add($.__views.__alloyId316);
    $.__views.__alloyId317 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId317"
    });
    $.__views.__alloyId316.add($.__views.__alloyId317);
    $.__views.__alloyId318 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId318"
    });
    $.__views.__alloyId317.add($.__views.__alloyId318);
    $.__views.__alloyId319 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId319"
    });
    $.__views.__alloyId318.add($.__views.__alloyId319);
    accDetail ? $.__views.__alloyId319.addEventListener("click", accDetail) : __defers["$.__views.__alloyId319!click!accDetail"] = true;
    $.__views.__alloyId320 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId320"
    });
    $.__views.__alloyId317.add($.__views.__alloyId320);
    $.__views.__alloyId321 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId321"
    });
    $.__views.__alloyId320.add($.__views.__alloyId321);
    payment ? $.__views.__alloyId321.addEventListener("click", payment) : __defers["$.__views.__alloyId321!click!payment"] = true;
    $.__views.__alloyId322 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId322"
    });
    $.__views.__alloyId317.add($.__views.__alloyId322);
    $.__views.__alloyId323 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_04.png",
        id: "__alloyId323"
    });
    $.__views.__alloyId322.add($.__views.__alloyId323);
    subline ? $.__views.__alloyId323.addEventListener("click", subline) : __defers["$.__views.__alloyId323!click!subline"] = true;
    $.__views.__alloyId324 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId324"
    });
    $.__views.__alloyId316.add($.__views.__alloyId324);
    $.__views.__alloyId325 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId325"
    });
    $.__views.__alloyId324.add($.__views.__alloyId325);
    $.__views.__alloyId326 = Ti.UI.createLabel({
        text: "Account Details",
        color: "#41B9C7",
        width: Ti.UI.FILL,
        textAlign: "center",
        top: "0",
        id: "__alloyId326"
    });
    $.__views.__alloyId325.add($.__views.__alloyId326);
    accDetail ? $.__views.__alloyId326.addEventListener("click", accDetail) : __defers["$.__views.__alloyId326!click!accDetail"] = true;
    $.__views.__alloyId327 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId327"
    });
    $.__views.__alloyId324.add($.__views.__alloyId327);
    $.__views.__alloyId328 = Ti.UI.createLabel({
        text: "Payment",
        color: "#41B9C7",
        width: Ti.UI.FILL,
        textAlign: "center",
        top: "0",
        id: "__alloyId328"
    });
    $.__views.__alloyId327.add($.__views.__alloyId328);
    payment ? $.__views.__alloyId328.addEventListener("click", payment) : __defers["$.__views.__alloyId328!click!payment"] = true;
    $.__views.__alloyId329 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId329"
    });
    $.__views.__alloyId324.add($.__views.__alloyId329);
    $.__views.__alloyId330 = Ti.UI.createLabel({
        text: "Subline Management",
        color: "#41B9C7",
        width: Ti.UI.FILL,
        textAlign: "center",
        top: "0",
        id: "__alloyId330"
    });
    $.__views.__alloyId329.add($.__views.__alloyId330);
    subline ? $.__views.__alloyId330.addEventListener("click", subline) : __defers["$.__views.__alloyId330!click!subline"] = true;
    $.__views.__alloyId331 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId331"
    });
    $.__views.__alloyId316.add($.__views.__alloyId331);
    $.__views.__alloyId332 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId332"
    });
    $.__views.__alloyId331.add($.__views.__alloyId332);
    $.__views.__alloyId333 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId333"
    });
    $.__views.__alloyId332.add($.__views.__alloyId333);
    vas ? $.__views.__alloyId333.addEventListener("click", vas) : __defers["$.__views.__alloyId333!click!vas"] = true;
    $.__views.__alloyId334 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId334"
    });
    $.__views.__alloyId331.add($.__views.__alloyId334);
    $.__views.__alloyId335 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_06.png",
        id: "__alloyId335"
    });
    $.__views.__alloyId334.add($.__views.__alloyId335);
    seasonPass ? $.__views.__alloyId335.addEventListener("click", seasonPass) : __defers["$.__views.__alloyId335!click!seasonPass"] = true;
    $.__views.__alloyId336 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId336"
    });
    $.__views.__alloyId331.add($.__views.__alloyId336);
    $.__views.__alloyId337 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId337"
    });
    $.__views.__alloyId336.add($.__views.__alloyId337);
    loyalty ? $.__views.__alloyId337.addEventListener("click", loyalty) : __defers["$.__views.__alloyId337!click!loyalty"] = true;
    $.__views.__alloyId338 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId338"
    });
    $.__views.__alloyId316.add($.__views.__alloyId338);
    $.__views.__alloyId339 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId339"
    });
    $.__views.__alloyId338.add($.__views.__alloyId339);
    $.__views.__alloyId340 = Ti.UI.createLabel({
        text: "VAS Management",
        color: "#41B9C7",
        width: Ti.UI.FILL,
        textAlign: "center",
        top: "0",
        id: "__alloyId340"
    });
    $.__views.__alloyId339.add($.__views.__alloyId340);
    vas ? $.__views.__alloyId340.addEventListener("click", vas) : __defers["$.__views.__alloyId340!click!vas"] = true;
    $.__views.__alloyId341 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId341"
    });
    $.__views.__alloyId338.add($.__views.__alloyId341);
    $.__views.__alloyId342 = Ti.UI.createLabel({
        text: "Season Pass",
        color: "#41B9C7",
        width: Ti.UI.FILL,
        textAlign: "center",
        top: "0",
        id: "__alloyId342"
    });
    $.__views.__alloyId341.add($.__views.__alloyId342);
    seasonPass ? $.__views.__alloyId342.addEventListener("click", seasonPass) : __defers["$.__views.__alloyId342!click!seasonPass"] = true;
    $.__views.__alloyId343 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId343"
    });
    $.__views.__alloyId338.add($.__views.__alloyId343);
    $.__views.__alloyId344 = Ti.UI.createLabel({
        text: "Loyalty",
        color: "#41B9C7",
        width: Ti.UI.FILL,
        textAlign: "center",
        top: "0",
        id: "__alloyId344"
    });
    $.__views.__alloyId343.add($.__views.__alloyId344);
    loyalty ? $.__views.__alloyId344.addEventListener("click", loyalty) : __defers["$.__views.__alloyId344!click!loyalty"] = true;
    $.__views.__alloyId345 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId345"
    });
    $.__views.__alloyId316.add($.__views.__alloyId345);
    $.__views.__alloyId346 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId346"
    });
    $.__views.__alloyId345.add($.__views.__alloyId346);
    $.__views.__alloyId347 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId347"
    });
    $.__views.__alloyId346.add($.__views.__alloyId347);
    report ? $.__views.__alloyId347.addEventListener("click", report) : __defers["$.__views.__alloyId347!click!report"] = true;
    $.__views.__alloyId348 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId348"
    });
    $.__views.__alloyId345.add($.__views.__alloyId348);
    $.__views.__alloyId349 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_09.png",
        id: "__alloyId349"
    });
    $.__views.__alloyId348.add($.__views.__alloyId349);
    faq ? $.__views.__alloyId349.addEventListener("click", faq) : __defers["$.__views.__alloyId349!click!faq"] = true;
    $.__views.__alloyId350 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId350"
    });
    $.__views.__alloyId316.add($.__views.__alloyId350);
    $.__views.__alloyId351 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId351"
    });
    $.__views.__alloyId350.add($.__views.__alloyId351);
    $.__views.__alloyId352 = Ti.UI.createLabel({
        text: "Report Case",
        color: "#41B9C7",
        width: Ti.UI.FILL,
        textAlign: "center",
        top: "0",
        id: "__alloyId352"
    });
    $.__views.__alloyId351.add($.__views.__alloyId352);
    report ? $.__views.__alloyId352.addEventListener("click", report) : __defers["$.__views.__alloyId352!click!report"] = true;
    $.__views.__alloyId353 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId353"
    });
    $.__views.__alloyId350.add($.__views.__alloyId353);
    $.__views.__alloyId354 = Ti.UI.createLabel({
        text: "FAQs",
        color: "#41B9C7",
        width: Ti.UI.FILL,
        textAlign: "center",
        top: "0",
        id: "__alloyId354"
    });
    $.__views.__alloyId353.add($.__views.__alloyId354);
    faq ? $.__views.__alloyId354.addEventListener("click", faq) : __defers["$.__views.__alloyId354!click!faq"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId287!click!close"] && $.__views.__alloyId287.addEventListener("click", close);
    __defers["$.__views.__alloyId288!click!gallery"] && $.__views.__alloyId288.addEventListener("click", gallery);
    __defers["$.__views.__alloyId293!click!facebook"] && $.__views.__alloyId293.addEventListener("click", facebook);
    __defers["$.__views.__alloyId305!click!editPhoto"] && $.__views.__alloyId305.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId306!click!editPhoto"] && $.__views.__alloyId306.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId319!click!accDetail"] && $.__views.__alloyId319.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId321!click!payment"] && $.__views.__alloyId321.addEventListener("click", payment);
    __defers["$.__views.__alloyId323!click!subline"] && $.__views.__alloyId323.addEventListener("click", subline);
    __defers["$.__views.__alloyId326!click!accDetail"] && $.__views.__alloyId326.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId328!click!payment"] && $.__views.__alloyId328.addEventListener("click", payment);
    __defers["$.__views.__alloyId330!click!subline"] && $.__views.__alloyId330.addEventListener("click", subline);
    __defers["$.__views.__alloyId333!click!vas"] && $.__views.__alloyId333.addEventListener("click", vas);
    __defers["$.__views.__alloyId335!click!seasonPass"] && $.__views.__alloyId335.addEventListener("click", seasonPass);
    __defers["$.__views.__alloyId337!click!loyalty"] && $.__views.__alloyId337.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId340!click!vas"] && $.__views.__alloyId340.addEventListener("click", vas);
    __defers["$.__views.__alloyId342!click!seasonPass"] && $.__views.__alloyId342.addEventListener("click", seasonPass);
    __defers["$.__views.__alloyId344!click!loyalty"] && $.__views.__alloyId344.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId347!click!report"] && $.__views.__alloyId347.addEventListener("click", report);
    __defers["$.__views.__alloyId349!click!faq"] && $.__views.__alloyId349.addEventListener("click", faq);
    __defers["$.__views.__alloyId352!click!report"] && $.__views.__alloyId352.addEventListener("click", report);
    __defers["$.__views.__alloyId354!click!faq"] && $.__views.__alloyId354.addEventListener("click", faq);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;