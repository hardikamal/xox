function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function back() {
        DRAWER.navigation("onlinePurchases", 1);
    }
    function next() {
        DRAWER.navigation("hopOn2", 1);
        console.log("next");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "hopOn";
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
    $.__views.hopOn = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "hopOn"
    });
    $.__views.hopOn && $.addTopLevelView($.__views.hopOn);
<<<<<<< HEAD
    $.__views.__alloyId488 = Alloy.createController("_header", {
        id: "__alloyId488",
=======
<<<<<<< HEAD
    $.__views.__alloyId527 = Alloy.createController("_header", {
        id: "__alloyId527",
        __parentSymbol: $.__views.hopOn
    });
    $.__views.__alloyId527.setParent($.__views.hopOn);
    $.__views.__alloyId528 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId528"
    });
    $.__views.hopOn.add($.__views.__alloyId528);
    $.__views.__alloyId529 = Ti.UI.createLabel({
=======
    $.__views.__alloyId358 = Alloy.createController("_header", {
        id: "__alloyId358",
>>>>>>> origin/master
        __parentSymbol: $.__views.hopOn
    });
    $.__views.__alloyId488.setParent($.__views.hopOn);
    $.__views.__alloyId489 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId489"
    });
<<<<<<< HEAD
    $.__views.hopOn.add($.__views.__alloyId489);
    $.__views.__alloyId490 = Ti.UI.createLabel({
=======
    $.__views.hopOn.add($.__views.__alloyId359);
    $.__views.__alloyId360 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId490"
    });
    $.__views.__alloyId489.add($.__views.__alloyId490);
    $.__views.__alloyId491 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId529"
    });
    $.__views.__alloyId528.add($.__views.__alloyId529);
    $.__views.__alloyId530 = Ti.UI.createImageView({
=======
        id: "__alloyId360"
    });
    $.__views.__alloyId359.add($.__views.__alloyId360);
    $.__views.__alloyId361 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId491"
=======
<<<<<<< HEAD
        id: "__alloyId530"
    });
    $.__views.__alloyId528.add($.__views.__alloyId530);
    back ? $.__views.__alloyId530.addEventListener("click", back) : __defers["$.__views.__alloyId530!click!back"] = true;
    $.__views.__alloyId531 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId531"
    });
    $.__views.hopOn.add($.__views.__alloyId531);
    $.__views.__alloyId532 = Ti.UI.createLabel({
=======
        id: "__alloyId361"
>>>>>>> origin/master
    });
    $.__views.__alloyId489.add($.__views.__alloyId491);
    back ? $.__views.__alloyId491.addEventListener("click", back) : __defers["$.__views.__alloyId491!click!back"] = true;
    $.__views.__alloyId492 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId492"
    });
<<<<<<< HEAD
    $.__views.hopOn.add($.__views.__alloyId492);
    $.__views.__alloyId493 = Ti.UI.createLabel({
=======
    $.__views.hopOn.add($.__views.__alloyId362);
    $.__views.__alloyId363 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Step 1 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId493"
    });
    $.__views.__alloyId492.add($.__views.__alloyId493);
    $.__views.__alloyId494 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId532"
    });
    $.__views.__alloyId531.add($.__views.__alloyId532);
    $.__views.__alloyId533 = Ti.UI.createLabel({
=======
        id: "__alloyId363"
    });
    $.__views.__alloyId362.add($.__views.__alloyId363);
    $.__views.__alloyId364 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Instruction",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId494"
    });
    $.__views.__alloyId492.add($.__views.__alloyId494);
=======
<<<<<<< HEAD
        id: "__alloyId533"
    });
    $.__views.__alloyId531.add($.__views.__alloyId533);
=======
        id: "__alloyId364"
    });
    $.__views.__alloyId362.add($.__views.__alloyId364);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.hopOn.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId495 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId534 = Ti.UI.createView({
=======
    $.__views.__alloyId365 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        top: "10",
        bottom: "20",
        height: "20",
        width: "90%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
<<<<<<< HEAD
        id: "__alloyId495"
    });
    $.__views.scrollView.add($.__views.__alloyId495);
    $.__views.__alloyId496 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId534"
    });
    $.__views.scrollView.add($.__views.__alloyId534);
    $.__views.__alloyId535 = Ti.UI.createLabel({
=======
        id: "__alloyId365"
    });
    $.__views.scrollView.add($.__views.__alloyId365);
    $.__views.__alloyId366 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "HopOn Details",
        backgroundColor: "transparent",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
<<<<<<< HEAD
        id: "__alloyId496"
=======
<<<<<<< HEAD
        id: "__alloyId535"
    });
    $.__views.__alloyId534.add($.__views.__alloyId535);
    $.__views.__alloyId536 = Ti.UI.createView({
        bottom: "20",
        width: "90%",
        height: "100",
        id: "__alloyId536"
    });
    $.__views.scrollView.add($.__views.__alloyId536);
    $.__views.__alloyId537 = Ti.UI.createLabel({
=======
        id: "__alloyId366"
>>>>>>> origin/master
    });
    $.__views.__alloyId495.add($.__views.__alloyId496);
    $.__views.__alloyId497 = Ti.UI.createView({
        bottom: "20",
        width: "90%",
        height: "100",
        id: "__alloyId497"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId497);
    $.__views.__alloyId498 = Ti.UI.createLabel({
=======
    $.__views.scrollView.add($.__views.__alloyId367);
    $.__views.__alloyId368 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Thank you for choosing XOX, we may serve you better when you port into XOX service. Kindly read through the below instructions before you proceed with the application.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId498"
=======
<<<<<<< HEAD
        id: "__alloyId537"
    });
    $.__views.__alloyId536.add($.__views.__alloyId537);
    $.__views.__alloyId538 = Ti.UI.createView({
        width: "90%",
        height: "20",
        id: "__alloyId538"
    });
    $.__views.scrollView.add($.__views.__alloyId538);
    $.__views.__alloyId539 = Ti.UI.createLabel({
        text: "REGISTRATION",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId539"
    });
    $.__views.__alloyId538.add($.__views.__alloyId539);
    $.__views.__alloyId540 = Ti.UI.createView({
        bottom: "20",
        width: "90%",
        height: "100",
        id: "__alloyId540"
    });
    $.__views.scrollView.add($.__views.__alloyId540);
    $.__views.__alloyId541 = Ti.UI.createLabel({
=======
        id: "__alloyId368"
>>>>>>> origin/master
    });
    $.__views.__alloyId497.add($.__views.__alloyId498);
    $.__views.__alloyId499 = Ti.UI.createView({
        width: "90%",
        height: "20",
        id: "__alloyId499"
    });
    $.__views.scrollView.add($.__views.__alloyId499);
    $.__views.__alloyId500 = Ti.UI.createLabel({
        text: "REGISTRATION",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId500"
    });
    $.__views.__alloyId499.add($.__views.__alloyId500);
    $.__views.__alloyId501 = Ti.UI.createView({
        bottom: "20",
        width: "90%",
        height: "100",
        id: "__alloyId501"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId501);
    $.__views.__alloyId502 = Ti.UI.createLabel({
=======
    $.__views.scrollView.add($.__views.__alloyId371);
    $.__views.__alloyId372 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Please ensure all the details you fill in the registration page is correct before you press the “Proceed” button. Each I/C number is allowed a maximum of 10 Mobile Numbers HopOn registration.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId502"
=======
<<<<<<< HEAD
        id: "__alloyId541"
    });
    $.__views.__alloyId540.add($.__views.__alloyId541);
    $.__views.__alloyId542 = Ti.UI.createView({
        width: "90%",
        height: "20",
        id: "__alloyId542"
    });
    $.__views.scrollView.add($.__views.__alloyId542);
    $.__views.__alloyId543 = Ti.UI.createLabel({
=======
        id: "__alloyId372"
>>>>>>> origin/master
    });
    $.__views.__alloyId501.add($.__views.__alloyId502);
    $.__views.__alloyId503 = Ti.UI.createView({
        width: "90%",
        height: "20",
        id: "__alloyId503"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId503);
    $.__views.__alloyId504 = Ti.UI.createLabel({
=======
    $.__views.scrollView.add($.__views.__alloyId373);
    $.__views.__alloyId374 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "PAYMENT",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId504"
=======
<<<<<<< HEAD
        id: "__alloyId543"
    });
    $.__views.__alloyId542.add($.__views.__alloyId543);
    $.__views.__alloyId544 = Ti.UI.createView({
        bottom: "20",
        width: "90%",
        height: "60",
        id: "__alloyId544"
    });
    $.__views.scrollView.add($.__views.__alloyId544);
    $.__views.__alloyId545 = Ti.UI.createLabel({
=======
        id: "__alloyId374"
>>>>>>> origin/master
    });
    $.__views.__alloyId503.add($.__views.__alloyId504);
    $.__views.__alloyId505 = Ti.UI.createView({
        bottom: "20",
        width: "90%",
        height: "60",
        id: "__alloyId505"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId505);
    $.__views.__alloyId506 = Ti.UI.createLabel({
=======
    $.__views.scrollView.add($.__views.__alloyId375);
    $.__views.__alloyId376 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "XOX will charge a registration fee of Ringgit Malaysia Six (RM6) per number for every online application porting request.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId506"
=======
<<<<<<< HEAD
        id: "__alloyId545"
    });
    $.__views.__alloyId544.add($.__views.__alloyId545);
    $.__views.__alloyId546 = Ti.UI.createView({
        width: "90%",
        height: "20",
        id: "__alloyId546"
    });
    $.__views.scrollView.add($.__views.__alloyId546);
    $.__views.__alloyId547 = Ti.UI.createLabel({
=======
        id: "__alloyId376"
>>>>>>> origin/master
    });
    $.__views.__alloyId505.add($.__views.__alloyId506);
    $.__views.__alloyId507 = Ti.UI.createView({
        width: "90%",
        height: "20",
        id: "__alloyId507"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId507);
    $.__views.__alloyId508 = Ti.UI.createLabel({
=======
    $.__views.scrollView.add($.__views.__alloyId377);
    $.__views.__alloyId378 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "DELIVERY",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId508"
=======
<<<<<<< HEAD
        id: "__alloyId547"
    });
    $.__views.__alloyId546.add($.__views.__alloyId547);
    $.__views.__alloyId548 = Ti.UI.createView({
        bottom: "20",
        width: "90%",
        height: "60",
        id: "__alloyId548"
    });
    $.__views.scrollView.add($.__views.__alloyId548);
    $.__views.__alloyId549 = Ti.UI.createLabel({
=======
        id: "__alloyId378"
>>>>>>> origin/master
    });
    $.__views.__alloyId507.add($.__views.__alloyId508);
    $.__views.__alloyId509 = Ti.UI.createView({
        bottom: "20",
        width: "90%",
        height: "60",
        id: "__alloyId509"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId509);
    $.__views.__alloyId510 = Ti.UI.createLabel({
=======
    $.__views.scrollView.add($.__views.__alloyId379);
    $.__views.__alloyId380 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Upon receiving your application and successful payment, XOX will courier the SIM Card to you within 3-5 working days.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId510"
=======
<<<<<<< HEAD
        id: "__alloyId549"
    });
    $.__views.__alloyId548.add($.__views.__alloyId549);
    $.__views.__alloyId550 = Ti.UI.createView({
        width: "90%",
        height: "20",
        id: "__alloyId550"
    });
    $.__views.scrollView.add($.__views.__alloyId550);
    $.__views.__alloyId551 = Ti.UI.createLabel({
=======
        id: "__alloyId380"
>>>>>>> origin/master
    });
    $.__views.__alloyId509.add($.__views.__alloyId510);
    $.__views.__alloyId511 = Ti.UI.createView({
        width: "90%",
        height: "20",
        id: "__alloyId511"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId511);
    $.__views.__alloyId512 = Ti.UI.createLabel({
=======
    $.__views.scrollView.add($.__views.__alloyId381);
    $.__views.__alloyId382 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "VERIFICATION",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId512"
=======
<<<<<<< HEAD
        id: "__alloyId551"
    });
    $.__views.__alloyId550.add($.__views.__alloyId551);
    $.__views.__alloyId552 = Ti.UI.createView({
        bottom: "10",
        width: "90%",
        height: "100",
        id: "__alloyId552"
    });
    $.__views.scrollView.add($.__views.__alloyId552);
    $.__views.__alloyId553 = Ti.UI.createLabel({
=======
        id: "__alloyId382"
>>>>>>> origin/master
    });
    $.__views.__alloyId511.add($.__views.__alloyId512);
    $.__views.__alloyId513 = Ti.UI.createView({
        bottom: "10",
        width: "90%",
        height: "100",
        id: "__alloyId513"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId513);
    $.__views.__alloyId514 = Ti.UI.createLabel({
=======
    $.__views.scrollView.add($.__views.__alloyId383);
    $.__views.__alloyId384 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "While you received the Welcome Letter and SIM Card from XOX, you will need to log on to http://onlinestore.xox.com.my/hopon to verify your details and complete the “Verification” process within 30 days.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId514"
=======
<<<<<<< HEAD
        id: "__alloyId553"
    });
    $.__views.__alloyId552.add($.__views.__alloyId553);
    $.__views.__alloyId554 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId554"
    });
    $.__views.hopOn.add($.__views.__alloyId554);
    next ? $.__views.__alloyId554.addEventListener("click", next) : __defers["$.__views.__alloyId554!click!next"] = true;
    $.__views.__alloyId555 = Ti.UI.createLabel({
        text: "NEXT",
        color: "white",
        id: "__alloyId555"
    });
    $.__views.__alloyId554.add($.__views.__alloyId555);
=======
        id: "__alloyId384"
>>>>>>> origin/master
    });
    $.__views.__alloyId513.add($.__views.__alloyId514);
    $.__views.__alloyId515 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId515"
    });
    $.__views.hopOn.add($.__views.__alloyId515);
    next ? $.__views.__alloyId515.addEventListener("click", next) : __defers["$.__views.__alloyId515!click!next"] = true;
    $.__views.__alloyId516 = Ti.UI.createLabel({
        text: "NEXT",
        color: "white",
        id: "__alloyId516"
    });
<<<<<<< HEAD
    $.__views.__alloyId515.add($.__views.__alloyId516);
=======
    $.__views.__alloyId385.add($.__views.__alloyId386);
>>>>>>> origin/master
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
<<<<<<< HEAD
    __defers["$.__views.__alloyId491!click!back"] && $.__views.__alloyId491.addEventListener("click", back);
    __defers["$.__views.__alloyId515!click!next"] && $.__views.__alloyId515.addEventListener("click", next);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId530!click!back"] && $.__views.__alloyId530.addEventListener("click", back);
    __defers["$.__views.__alloyId554!click!next"] && $.__views.__alloyId554.addEventListener("click", next);
=======
    __defers["$.__views.__alloyId361!click!back"] && $.__views.__alloyId361.addEventListener("click", back);
    __defers["$.__views.__alloyId385!click!next"] && $.__views.__alloyId385.addEventListener("click", next);
>>>>>>> origin/master
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;