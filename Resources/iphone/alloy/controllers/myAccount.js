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
    $.__views.__alloyId487 = Alloy.createController("_header", {
        id: "__alloyId487",
        __parentSymbol: $.__views.myAccount
    });
    $.__views.__alloyId487.setParent($.__views.myAccount);
    $.__views.photo = Ti.UI.createView({
        id: "photo",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.myAccount.add($.__views.photo);
    $.__views.__alloyId488 = Ti.UI.createView({
        layout: "vertical",
        width: "80%",
        height: "40%",
        backgroundColor: "white",
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
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        image: "/images/close_icon.png",
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
        backgroundColor: "transparent",
        width: "32",
        height: "32",
        left: "10",
        image: "/images/gallery_icon.png",
        id: "__alloyId494"
    });
    $.__views.__alloyId493.add($.__views.__alloyId494);
    $.__views.__alloyId495 = Ti.UI.createView({
        id: "__alloyId495"
    });
    $.__views.__alloyId492.add($.__views.__alloyId495);
    $.__views.__alloyId496 = Ti.UI.createLabel({
        text: "Photo Gallery",
        color: "white",
        textAlign: "left",
        left: "10",
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
        backgroundColor: "transparent",
        width: "32",
        height: "32",
        left: "10",
        image: "/images/facebook_icon.png",
        id: "__alloyId499"
    });
    $.__views.__alloyId498.add($.__views.__alloyId499);
    $.__views.__alloyId500 = Ti.UI.createView({
        id: "__alloyId500"
    });
    $.__views.__alloyId497.add($.__views.__alloyId500);
    $.__views.__alloyId501 = Ti.UI.createLabel({
        text: "Connect with Facebook",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId501"
    });
    $.__views.__alloyId500.add($.__views.__alloyId501);
    $.__views.__alloyId502 = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "black",
        top: "50",
        zIndex: "1",
        id: "__alloyId502"
    });
    $.__views.myAccount.add($.__views.__alloyId502);
    $.__views.__alloyId503 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        backgroundColor: "red",
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
        text: "Hello!",
        color: "white",
        left: "10",
        top: "10",
        id: "__alloyId505"
    });
    $.__views.__alloyId504.add($.__views.__alloyId505);
    $.__views.__alloyId506 = Ti.UI.createLabel({
        text: "John Smith",
        color: "white",
        left: "10",
        bottom: "10",
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
        width: "80",
        height: "80",
        image: "/images/profile_images.png",
        borderRadius: "40",
        id: "__alloyId509"
    });
    $.__views.__alloyId508.add($.__views.__alloyId509);
    editPhoto ? $.__views.__alloyId509.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId509!click!editPhoto"] = true;
    $.__views.__alloyId510 = Ti.UI.createImageView({
        width: "20",
        height: "20",
        image: "/images/profileedit_icon.png",
        borderRadius: "10",
        bottom: "10",
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
        text: "Expiry Date",
        color: "#878787",
        left: "10",
        bottom: "2.5",
        id: "__alloyId518"
    });
    $.__views.__alloyId517.add($.__views.__alloyId518);
    $.__views.__alloyId519 = Ti.UI.createLabel({
        text: "1 Dec 2015",
        color: "black",
        left: "10",
        top: "2.5",
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
        text: "Account Details",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
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
        text: "Payment",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
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
        text: "Subline Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
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
        text: "VAS Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
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
        text: "Season Pass",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
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
        text: "Loyalty",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
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
        text: "Report Case",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
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
        text: "FAQs",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;