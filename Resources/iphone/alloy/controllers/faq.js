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
        DRAWER.navigation("myAccount", 2);
    }
    function row1() {
        console.log("row1");
        $.row1.height = 50 == $.row1.height ? Ti.UI.SIZE : 50;
    }
    function row2() {
        console.log("row2");
        $.row2.height = 50 == $.row2.height ? Ti.UI.SIZE : 50;
    }
    function row3() {
        console.log("row3");
        $.row3.height = 50 == $.row3.height ? Ti.UI.SIZE : 50;
    }
    function row4() {
        console.log("row4");
        $.row4.height = 50 == $.row4.height ? Ti.UI.SIZE : 50;
    }
    function row5() {
        console.log("row5");
        $.row5.height = 50 == $.row5.height ? Ti.UI.SIZE : 50;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "faq";
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
    $.__views.faq = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "faq"
    });
    $.__views.faq && $.addTopLevelView($.__views.faq);
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId392 = Alloy.createController("_header", {
        id: "__alloyId392",
=======
<<<<<<< HEAD
    $.__views.__alloyId438 = Alloy.createController("_header", {
        id: "__alloyId438",
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId392 = Alloy.createController("_header", {
        id: "__alloyId392",
>>>>>>> origin/master
        __parentSymbol: $.__views.faq
    });
    $.__views.__alloyId392.setParent($.__views.faq);
    $.__views.__alloyId393 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId393"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.faq.add($.__views.__alloyId393);
    $.__views.__alloyId394 = Ti.UI.createLabel({
=======
    $.__views.faq.add($.__views.__alloyId439);
    $.__views.__alloyId440 = Ti.UI.createLabel({
=======
    $.__views.__alloyId392 = Alloy.createController("_header", {
        id: "__alloyId392",
        __parentSymbol: $.__views.faq
    });
    $.__views.__alloyId392.setParent($.__views.faq);
    $.__views.__alloyId393 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId393"
    });
    $.__views.faq.add($.__views.__alloyId393);
    $.__views.__alloyId394 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.faq.add($.__views.__alloyId393);
    $.__views.__alloyId394 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "FAQs",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId394"
    });
    $.__views.__alloyId393.add($.__views.__alloyId394);
    $.__views.__alloyId395 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId440"
    });
    $.__views.__alloyId439.add($.__views.__alloyId440);
    $.__views.__alloyId441 = Ti.UI.createImageView({
=======
        id: "__alloyId394"
    });
    $.__views.__alloyId393.add($.__views.__alloyId394);
    $.__views.__alloyId395 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId394"
    });
    $.__views.__alloyId393.add($.__views.__alloyId394);
    $.__views.__alloyId395 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId395"
=======
<<<<<<< HEAD
        id: "__alloyId441"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId395"
>>>>>>> origin/master
    });
    $.__views.__alloyId393.add($.__views.__alloyId395);
    back ? $.__views.__alloyId395.addEventListener("click", back) : __defers["$.__views.__alloyId395!click!back"] = true;
    $.__views.__alloyId396 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        id: "__alloyId396"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.faq.add($.__views.__alloyId396);
=======
    $.__views.faq.add($.__views.__alloyId442);
=======
        id: "__alloyId395"
    });
    $.__views.__alloyId393.add($.__views.__alloyId395);
    back ? $.__views.__alloyId395.addEventListener("click", back) : __defers["$.__views.__alloyId395!click!back"] = true;
    $.__views.__alloyId396 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        id: "__alloyId396"
    });
    $.__views.faq.add($.__views.__alloyId396);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.faq.add($.__views.__alloyId396);
>>>>>>> origin/master
    $.__views.row1 = Ti.UI.createView({
        id: "row1",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId396.add($.__views.row1);
=======
<<<<<<< HEAD
    $.__views.__alloyId442.add($.__views.row1);
=======
    $.__views.__alloyId396.add($.__views.row1);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId396.add($.__views.row1);
>>>>>>> origin/master
    row1 ? $.__views.row1.addEventListener("click", row1) : __defers["$.__views.row1!click!row1"] = true;
    $.__views.__alloyId397 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId397"
    });
    $.__views.row1.add($.__views.__alloyId397);
    $.__views.__alloyId398 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId398"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId397.add($.__views.__alloyId398);
    $.__views.__alloyId399 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId443.add($.__views.__alloyId444);
    $.__views.__alloyId445 = Ti.UI.createLabel({
=======
    $.__views.__alloyId397.add($.__views.__alloyId398);
    $.__views.__alloyId399 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId397.add($.__views.__alloyId398);
    $.__views.__alloyId399 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId399"
    });
    $.__views.__alloyId398.add($.__views.__alloyId399);
    $.__views.__alloyId400 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId445"
    });
    $.__views.__alloyId444.add($.__views.__alloyId445);
    $.__views.__alloyId446 = Ti.UI.createView({
=======
        id: "__alloyId399"
    });
    $.__views.__alloyId398.add($.__views.__alloyId399);
    $.__views.__alloyId400 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId399"
    });
    $.__views.__alloyId398.add($.__views.__alloyId399);
    $.__views.__alloyId400 = Ti.UI.createView({
>>>>>>> origin/master
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId400"
=======
<<<<<<< HEAD
        id: "__alloyId446"
=======
        id: "__alloyId400"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId400"
>>>>>>> origin/master
    });
    $.__views.__alloyId398.add($.__views.__alloyId400);
    $.__views.__alloyId401 = Ti.UI.createView({
        height: "100%",
        width: "15%",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId401"
    });
    $.__views.__alloyId397.add($.__views.__alloyId401);
    $.__views.__alloyId402 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId447"
    });
    $.__views.__alloyId443.add($.__views.__alloyId447);
    $.__views.__alloyId448 = Ti.UI.createImageView({
=======
        id: "__alloyId401"
    });
    $.__views.__alloyId397.add($.__views.__alloyId401);
    $.__views.__alloyId402 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId401"
    });
    $.__views.__alloyId397.add($.__views.__alloyId401);
    $.__views.__alloyId402 = Ti.UI.createImageView({
>>>>>>> origin/master
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId402"
    });
    $.__views.__alloyId401.add($.__views.__alloyId402);
    $.__views.__alloyId403 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId448"
    });
    $.__views.__alloyId447.add($.__views.__alloyId448);
    $.__views.__alloyId449 = Ti.UI.createView({
=======
        id: "__alloyId402"
    });
    $.__views.__alloyId401.add($.__views.__alloyId402);
    $.__views.__alloyId403 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId402"
    });
    $.__views.__alloyId401.add($.__views.__alloyId402);
    $.__views.__alloyId403 = Ti.UI.createView({
>>>>>>> origin/master
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId403"
=======
<<<<<<< HEAD
        id: "__alloyId449"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId403"
>>>>>>> origin/master
    });
    $.__views.__alloyId401.add($.__views.__alloyId403);
    $.__views.__alloyId404 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId404"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.row1.add($.__views.__alloyId404);
    $.__views.__alloyId405 = Ti.UI.createLabel({
=======
    $.__views.row1.add($.__views.__alloyId450);
    $.__views.__alloyId451 = Ti.UI.createLabel({
=======
        id: "__alloyId403"
    });
    $.__views.__alloyId401.add($.__views.__alloyId403);
    $.__views.__alloyId404 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId404"
    });
    $.__views.row1.add($.__views.__alloyId404);
    $.__views.__alloyId405 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.row1.add($.__views.__alloyId404);
    $.__views.__alloyId405 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId405"
    });
    $.__views.__alloyId404.add($.__views.__alloyId405);
=======
<<<<<<< HEAD
        id: "__alloyId451"
    });
    $.__views.__alloyId450.add($.__views.__alloyId451);
=======
        id: "__alloyId405"
    });
    $.__views.__alloyId404.add($.__views.__alloyId405);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId405"
    });
    $.__views.__alloyId404.add($.__views.__alloyId405);
>>>>>>> origin/master
    $.__views.row2 = Ti.UI.createView({
        id: "row2",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId396.add($.__views.row2);
=======
<<<<<<< HEAD
    $.__views.__alloyId442.add($.__views.row2);
=======
    $.__views.__alloyId396.add($.__views.row2);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId396.add($.__views.row2);
>>>>>>> origin/master
    row2 ? $.__views.row2.addEventListener("click", row2) : __defers["$.__views.row2!click!row2"] = true;
    $.__views.__alloyId406 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId406"
    });
    $.__views.row2.add($.__views.__alloyId406);
    $.__views.__alloyId407 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId407"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId406.add($.__views.__alloyId407);
    $.__views.__alloyId408 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId452.add($.__views.__alloyId453);
    $.__views.__alloyId454 = Ti.UI.createLabel({
=======
    $.__views.__alloyId406.add($.__views.__alloyId407);
    $.__views.__alloyId408 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId406.add($.__views.__alloyId407);
    $.__views.__alloyId408 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId408"
    });
    $.__views.__alloyId407.add($.__views.__alloyId408);
    $.__views.__alloyId409 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId454"
    });
    $.__views.__alloyId453.add($.__views.__alloyId454);
    $.__views.__alloyId455 = Ti.UI.createView({
=======
        id: "__alloyId408"
    });
    $.__views.__alloyId407.add($.__views.__alloyId408);
    $.__views.__alloyId409 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId408"
    });
    $.__views.__alloyId407.add($.__views.__alloyId408);
    $.__views.__alloyId409 = Ti.UI.createView({
>>>>>>> origin/master
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId409"
=======
<<<<<<< HEAD
        id: "__alloyId455"
=======
        id: "__alloyId409"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId409"
>>>>>>> origin/master
    });
    $.__views.__alloyId407.add($.__views.__alloyId409);
    $.__views.__alloyId410 = Ti.UI.createView({
        height: "100%",
        width: "15%",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId410"
    });
    $.__views.__alloyId406.add($.__views.__alloyId410);
    $.__views.__alloyId411 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId456"
    });
    $.__views.__alloyId452.add($.__views.__alloyId456);
    $.__views.__alloyId457 = Ti.UI.createImageView({
=======
        id: "__alloyId410"
    });
    $.__views.__alloyId406.add($.__views.__alloyId410);
    $.__views.__alloyId411 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId410"
    });
    $.__views.__alloyId406.add($.__views.__alloyId410);
    $.__views.__alloyId411 = Ti.UI.createImageView({
>>>>>>> origin/master
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId411"
    });
    $.__views.__alloyId410.add($.__views.__alloyId411);
    $.__views.__alloyId412 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId457"
    });
    $.__views.__alloyId456.add($.__views.__alloyId457);
    $.__views.__alloyId458 = Ti.UI.createView({
=======
        id: "__alloyId411"
    });
    $.__views.__alloyId410.add($.__views.__alloyId411);
    $.__views.__alloyId412 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId411"
    });
    $.__views.__alloyId410.add($.__views.__alloyId411);
    $.__views.__alloyId412 = Ti.UI.createView({
>>>>>>> origin/master
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId412"
=======
<<<<<<< HEAD
        id: "__alloyId458"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId412"
>>>>>>> origin/master
    });
    $.__views.__alloyId410.add($.__views.__alloyId412);
    $.__views.__alloyId413 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId413"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.row2.add($.__views.__alloyId413);
    $.__views.__alloyId414 = Ti.UI.createLabel({
=======
    $.__views.row2.add($.__views.__alloyId459);
    $.__views.__alloyId460 = Ti.UI.createLabel({
=======
        id: "__alloyId412"
    });
    $.__views.__alloyId410.add($.__views.__alloyId412);
    $.__views.__alloyId413 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId413"
    });
    $.__views.row2.add($.__views.__alloyId413);
    $.__views.__alloyId414 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.row2.add($.__views.__alloyId413);
    $.__views.__alloyId414 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId414"
    });
    $.__views.__alloyId413.add($.__views.__alloyId414);
=======
<<<<<<< HEAD
        id: "__alloyId460"
    });
    $.__views.__alloyId459.add($.__views.__alloyId460);
=======
        id: "__alloyId414"
    });
    $.__views.__alloyId413.add($.__views.__alloyId414);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId414"
    });
    $.__views.__alloyId413.add($.__views.__alloyId414);
>>>>>>> origin/master
    $.__views.row3 = Ti.UI.createView({
        id: "row3",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId396.add($.__views.row3);
=======
<<<<<<< HEAD
    $.__views.__alloyId442.add($.__views.row3);
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId396.add($.__views.row3);
>>>>>>> origin/master
    row3 ? $.__views.row3.addEventListener("click", row3) : __defers["$.__views.row3!click!row3"] = true;
    $.__views.__alloyId415 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId415"
    });
    $.__views.row3.add($.__views.__alloyId415);
    $.__views.__alloyId416 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId416"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId415.add($.__views.__alloyId416);
    $.__views.__alloyId417 = Ti.UI.createLabel({
=======
    $.__views.__alloyId461.add($.__views.__alloyId462);
    $.__views.__alloyId463 = Ti.UI.createLabel({
=======
    $.__views.__alloyId396.add($.__views.row3);
    row3 ? $.__views.row3.addEventListener("click", row3) : __defers["$.__views.row3!click!row3"] = true;
    $.__views.__alloyId415 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId415"
    });
    $.__views.row3.add($.__views.__alloyId415);
    $.__views.__alloyId416 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId416"
    });
    $.__views.__alloyId415.add($.__views.__alloyId416);
    $.__views.__alloyId417 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId415.add($.__views.__alloyId416);
    $.__views.__alloyId417 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId417"
    });
    $.__views.__alloyId416.add($.__views.__alloyId417);
    $.__views.__alloyId418 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId463"
    });
    $.__views.__alloyId462.add($.__views.__alloyId463);
    $.__views.__alloyId464 = Ti.UI.createView({
=======
        id: "__alloyId417"
    });
    $.__views.__alloyId416.add($.__views.__alloyId417);
    $.__views.__alloyId418 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId417"
    });
    $.__views.__alloyId416.add($.__views.__alloyId417);
    $.__views.__alloyId418 = Ti.UI.createView({
>>>>>>> origin/master
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId418"
=======
<<<<<<< HEAD
        id: "__alloyId464"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId418"
>>>>>>> origin/master
    });
    $.__views.__alloyId416.add($.__views.__alloyId418);
    $.__views.__alloyId419 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId419"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId415.add($.__views.__alloyId419);
    $.__views.__alloyId420 = Ti.UI.createImageView({
=======
    $.__views.__alloyId461.add($.__views.__alloyId465);
    $.__views.__alloyId466 = Ti.UI.createImageView({
=======
        id: "__alloyId418"
    });
    $.__views.__alloyId416.add($.__views.__alloyId418);
    $.__views.__alloyId419 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId419"
    });
    $.__views.__alloyId415.add($.__views.__alloyId419);
    $.__views.__alloyId420 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId415.add($.__views.__alloyId419);
    $.__views.__alloyId420 = Ti.UI.createImageView({
>>>>>>> origin/master
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId420"
    });
    $.__views.__alloyId419.add($.__views.__alloyId420);
    $.__views.__alloyId421 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId466"
    });
    $.__views.__alloyId465.add($.__views.__alloyId466);
    $.__views.__alloyId467 = Ti.UI.createView({
=======
        id: "__alloyId420"
    });
    $.__views.__alloyId419.add($.__views.__alloyId420);
    $.__views.__alloyId421 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId420"
    });
    $.__views.__alloyId419.add($.__views.__alloyId420);
    $.__views.__alloyId421 = Ti.UI.createView({
>>>>>>> origin/master
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId421"
=======
<<<<<<< HEAD
        id: "__alloyId467"
=======
        id: "__alloyId421"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId421"
>>>>>>> origin/master
    });
    $.__views.__alloyId419.add($.__views.__alloyId421);
    $.__views.__alloyId422 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId422"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.row3.add($.__views.__alloyId422);
    $.__views.__alloyId423 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.row3.add($.__views.__alloyId468);
    $.__views.__alloyId469 = Ti.UI.createLabel({
=======
    $.__views.row3.add($.__views.__alloyId422);
    $.__views.__alloyId423 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.row3.add($.__views.__alloyId422);
    $.__views.__alloyId423 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId423"
    });
    $.__views.__alloyId422.add($.__views.__alloyId423);
=======
<<<<<<< HEAD
        id: "__alloyId469"
    });
    $.__views.__alloyId468.add($.__views.__alloyId469);
=======
        id: "__alloyId423"
    });
    $.__views.__alloyId422.add($.__views.__alloyId423);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId423"
    });
    $.__views.__alloyId422.add($.__views.__alloyId423);
>>>>>>> origin/master
    $.__views.row4 = Ti.UI.createView({
        id: "row4",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId396.add($.__views.row4);
=======
<<<<<<< HEAD
    $.__views.__alloyId442.add($.__views.row4);
=======
    $.__views.__alloyId396.add($.__views.row4);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId396.add($.__views.row4);
>>>>>>> origin/master
    row4 ? $.__views.row4.addEventListener("click", row4) : __defers["$.__views.row4!click!row4"] = true;
    $.__views.__alloyId424 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId424"
    });
    $.__views.row4.add($.__views.__alloyId424);
    $.__views.__alloyId425 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId425"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId424.add($.__views.__alloyId425);
    $.__views.__alloyId426 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId470.add($.__views.__alloyId471);
    $.__views.__alloyId472 = Ti.UI.createLabel({
=======
    $.__views.__alloyId424.add($.__views.__alloyId425);
    $.__views.__alloyId426 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId424.add($.__views.__alloyId425);
    $.__views.__alloyId426 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId426"
    });
    $.__views.__alloyId425.add($.__views.__alloyId426);
    $.__views.__alloyId427 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId472"
    });
    $.__views.__alloyId471.add($.__views.__alloyId472);
    $.__views.__alloyId473 = Ti.UI.createView({
=======
        id: "__alloyId426"
    });
    $.__views.__alloyId425.add($.__views.__alloyId426);
    $.__views.__alloyId427 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId426"
    });
    $.__views.__alloyId425.add($.__views.__alloyId426);
    $.__views.__alloyId427 = Ti.UI.createView({
>>>>>>> origin/master
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId427"
=======
<<<<<<< HEAD
        id: "__alloyId473"
=======
        id: "__alloyId427"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId427"
>>>>>>> origin/master
    });
    $.__views.__alloyId425.add($.__views.__alloyId427);
    $.__views.__alloyId428 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId428"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId424.add($.__views.__alloyId428);
    $.__views.__alloyId429 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
    $.__views.__alloyId470.add($.__views.__alloyId474);
    $.__views.__alloyId475 = Ti.UI.createImageView({
=======
    $.__views.__alloyId424.add($.__views.__alloyId428);
    $.__views.__alloyId429 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId424.add($.__views.__alloyId428);
    $.__views.__alloyId429 = Ti.UI.createImageView({
>>>>>>> origin/master
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId429"
    });
    $.__views.__alloyId428.add($.__views.__alloyId429);
    $.__views.__alloyId430 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId475"
    });
    $.__views.__alloyId474.add($.__views.__alloyId475);
    $.__views.__alloyId476 = Ti.UI.createView({
=======
        id: "__alloyId429"
    });
    $.__views.__alloyId428.add($.__views.__alloyId429);
    $.__views.__alloyId430 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId429"
    });
    $.__views.__alloyId428.add($.__views.__alloyId429);
    $.__views.__alloyId430 = Ti.UI.createView({
>>>>>>> origin/master
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId430"
=======
<<<<<<< HEAD
        id: "__alloyId476"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId430"
>>>>>>> origin/master
    });
    $.__views.__alloyId428.add($.__views.__alloyId430);
    $.__views.__alloyId431 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId431"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.row4.add($.__views.__alloyId431);
    $.__views.__alloyId432 = Ti.UI.createLabel({
=======
    $.__views.row4.add($.__views.__alloyId477);
    $.__views.__alloyId478 = Ti.UI.createLabel({
=======
        id: "__alloyId430"
    });
    $.__views.__alloyId428.add($.__views.__alloyId430);
    $.__views.__alloyId431 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId431"
    });
    $.__views.row4.add($.__views.__alloyId431);
    $.__views.__alloyId432 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.row4.add($.__views.__alloyId431);
    $.__views.__alloyId432 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId432"
    });
    $.__views.__alloyId431.add($.__views.__alloyId432);
=======
<<<<<<< HEAD
        id: "__alloyId478"
    });
    $.__views.__alloyId477.add($.__views.__alloyId478);
=======
        id: "__alloyId432"
    });
    $.__views.__alloyId431.add($.__views.__alloyId432);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId432"
    });
    $.__views.__alloyId431.add($.__views.__alloyId432);
>>>>>>> origin/master
    $.__views.row5 = Ti.UI.createView({
        id: "row5",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId396.add($.__views.row5);
=======
<<<<<<< HEAD
    $.__views.__alloyId442.add($.__views.row5);
=======
    $.__views.__alloyId396.add($.__views.row5);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId396.add($.__views.row5);
>>>>>>> origin/master
    row5 ? $.__views.row5.addEventListener("click", row5) : __defers["$.__views.row5!click!row5"] = true;
    $.__views.__alloyId433 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId433"
    });
    $.__views.row5.add($.__views.__alloyId433);
    $.__views.__alloyId434 = Ti.UI.createView({
        height: "100%",
        width: "85%",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId434"
    });
    $.__views.__alloyId433.add($.__views.__alloyId434);
    $.__views.__alloyId435 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId480"
    });
    $.__views.__alloyId479.add($.__views.__alloyId480);
    $.__views.__alloyId481 = Ti.UI.createLabel({
=======
        id: "__alloyId434"
    });
    $.__views.__alloyId433.add($.__views.__alloyId434);
    $.__views.__alloyId435 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId434"
    });
    $.__views.__alloyId433.add($.__views.__alloyId434);
    $.__views.__alloyId435 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId435"
    });
    $.__views.__alloyId434.add($.__views.__alloyId435);
    $.__views.__alloyId436 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId481"
    });
    $.__views.__alloyId480.add($.__views.__alloyId481);
    $.__views.__alloyId482 = Ti.UI.createView({
=======
        id: "__alloyId435"
    });
    $.__views.__alloyId434.add($.__views.__alloyId435);
    $.__views.__alloyId436 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId435"
    });
    $.__views.__alloyId434.add($.__views.__alloyId435);
    $.__views.__alloyId436 = Ti.UI.createView({
>>>>>>> origin/master
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId436"
=======
<<<<<<< HEAD
        id: "__alloyId482"
=======
        id: "__alloyId436"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId436"
>>>>>>> origin/master
    });
    $.__views.__alloyId434.add($.__views.__alloyId436);
    $.__views.__alloyId437 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId437"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId433.add($.__views.__alloyId437);
    $.__views.__alloyId438 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
    $.__views.__alloyId479.add($.__views.__alloyId483);
    $.__views.__alloyId484 = Ti.UI.createImageView({
=======
    $.__views.__alloyId433.add($.__views.__alloyId437);
    $.__views.__alloyId438 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId433.add($.__views.__alloyId437);
    $.__views.__alloyId438 = Ti.UI.createImageView({
>>>>>>> origin/master
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId438"
    });
    $.__views.__alloyId437.add($.__views.__alloyId438);
    $.__views.__alloyId439 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId484"
    });
    $.__views.__alloyId483.add($.__views.__alloyId484);
    $.__views.__alloyId485 = Ti.UI.createView({
=======
        id: "__alloyId438"
    });
    $.__views.__alloyId437.add($.__views.__alloyId438);
    $.__views.__alloyId439 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId438"
    });
    $.__views.__alloyId437.add($.__views.__alloyId438);
    $.__views.__alloyId439 = Ti.UI.createView({
>>>>>>> origin/master
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId439"
=======
<<<<<<< HEAD
        id: "__alloyId485"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId439"
>>>>>>> origin/master
    });
    $.__views.__alloyId437.add($.__views.__alloyId439);
    $.__views.__alloyId440 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId440"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.row5.add($.__views.__alloyId440);
    $.__views.__alloyId441 = Ti.UI.createLabel({
=======
    $.__views.row5.add($.__views.__alloyId486);
    $.__views.__alloyId487 = Ti.UI.createLabel({
=======
        id: "__alloyId439"
    });
    $.__views.__alloyId437.add($.__views.__alloyId439);
    $.__views.__alloyId440 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId440"
    });
    $.__views.row5.add($.__views.__alloyId440);
    $.__views.__alloyId441 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.row5.add($.__views.__alloyId440);
    $.__views.__alloyId441 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId441"
=======
<<<<<<< HEAD
        id: "__alloyId487"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId441"
>>>>>>> origin/master
    });
    $.__views.__alloyId440.add($.__views.__alloyId441);
    exports.destroy = function() {};
    _.extend($, $.__views);
<<<<<<< HEAD
<<<<<<< HEAD
    __defers["$.__views.__alloyId395!click!back"] && $.__views.__alloyId395.addEventListener("click", back);
=======
    __defers["$.__views.__alloyId441!click!back"] && $.__views.__alloyId441.addEventListener("click", back);
=======
        id: "__alloyId441"
    });
    $.__views.__alloyId440.add($.__views.__alloyId441);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId395!click!back"] && $.__views.__alloyId395.addEventListener("click", back);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    __defers["$.__views.__alloyId395!click!back"] && $.__views.__alloyId395.addEventListener("click", back);
>>>>>>> origin/master
    __defers["$.__views.row1!click!row1"] && $.__views.row1.addEventListener("click", row1);
    __defers["$.__views.row2!click!row2"] && $.__views.row2.addEventListener("click", row2);
    __defers["$.__views.row3!click!row3"] && $.__views.row3.addEventListener("click", row3);
    __defers["$.__views.row4!click!row4"] && $.__views.row4.addEventListener("click", row4);
    __defers["$.__views.row5!click!row5"] && $.__views.row5.addEventListener("click", row5);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;