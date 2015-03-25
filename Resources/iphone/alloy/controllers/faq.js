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
        DRAWER.navigation("support", 1);
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
    $.__views.__alloyId437 = Alloy.createController("_header", {
        id: "__alloyId437",
        __parentSymbol: $.__views.faq
    });
    $.__views.__alloyId437.setParent($.__views.faq);
    $.__views.__alloyId438 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#AFCD3F",
        id: "__alloyId438"
    });
    $.__views.faq.add($.__views.__alloyId438);
    $.__views.__alloyId439 = Ti.UI.createLabel({
        text: "FAQs",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId439"
    });
    $.__views.__alloyId438.add($.__views.__alloyId439);
    $.__views.__alloyId440 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId440"
    });
    $.__views.__alloyId438.add($.__views.__alloyId440);
    back ? $.__views.__alloyId440.addEventListener("click", back) : __defers["$.__views.__alloyId440!click!back"] = true;
    $.__views.__alloyId441 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        id: "__alloyId441"
    });
    $.__views.faq.add($.__views.__alloyId441);
    $.__views.row1 = Ti.UI.createView({
        id: "row1",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
    $.__views.__alloyId441.add($.__views.row1);
    row1 ? $.__views.row1.addEventListener("click", row1) : __defers["$.__views.row1!click!row1"] = true;
    $.__views.__alloyId442 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId442"
    });
    $.__views.row1.add($.__views.__alloyId442);
    $.__views.__alloyId443 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId443"
    });
    $.__views.__alloyId442.add($.__views.__alloyId443);
    $.__views.__alloyId444 = Ti.UI.createLabel({
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
        id: "__alloyId444"
    });
    $.__views.__alloyId443.add($.__views.__alloyId444);
    $.__views.__alloyId445 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId445"
    });
    $.__views.__alloyId443.add($.__views.__alloyId445);
    $.__views.__alloyId446 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId446"
    });
    $.__views.__alloyId442.add($.__views.__alloyId446);
    $.__views.__alloyId447 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
        id: "__alloyId447"
    });
    $.__views.__alloyId446.add($.__views.__alloyId447);
    $.__views.__alloyId448 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId448"
    });
    $.__views.__alloyId446.add($.__views.__alloyId448);
    $.__views.__alloyId449 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId449"
    });
    $.__views.row1.add($.__views.__alloyId449);
    $.__views.__alloyId450 = Ti.UI.createLabel({
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
        id: "__alloyId450"
    });
    $.__views.__alloyId449.add($.__views.__alloyId450);
    $.__views.row2 = Ti.UI.createView({
        id: "row2",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
    $.__views.__alloyId441.add($.__views.row2);
    row2 ? $.__views.row2.addEventListener("click", row2) : __defers["$.__views.row2!click!row2"] = true;
    $.__views.__alloyId451 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId451"
    });
    $.__views.row2.add($.__views.__alloyId451);
    $.__views.__alloyId452 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId452"
    });
    $.__views.__alloyId451.add($.__views.__alloyId452);
    $.__views.__alloyId453 = Ti.UI.createLabel({
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
        id: "__alloyId453"
    });
    $.__views.__alloyId452.add($.__views.__alloyId453);
    $.__views.__alloyId454 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId454"
    });
    $.__views.__alloyId452.add($.__views.__alloyId454);
    $.__views.__alloyId455 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId455"
    });
    $.__views.__alloyId451.add($.__views.__alloyId455);
    $.__views.__alloyId456 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
        id: "__alloyId456"
    });
    $.__views.__alloyId455.add($.__views.__alloyId456);
    $.__views.__alloyId457 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId457"
    });
    $.__views.__alloyId455.add($.__views.__alloyId457);
    $.__views.__alloyId458 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId458"
    });
    $.__views.row2.add($.__views.__alloyId458);
    $.__views.__alloyId459 = Ti.UI.createLabel({
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
        id: "__alloyId459"
    });
    $.__views.__alloyId458.add($.__views.__alloyId459);
    $.__views.row3 = Ti.UI.createView({
        id: "row3",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
    $.__views.__alloyId441.add($.__views.row3);
    row3 ? $.__views.row3.addEventListener("click", row3) : __defers["$.__views.row3!click!row3"] = true;
    $.__views.__alloyId460 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId460"
    });
    $.__views.row3.add($.__views.__alloyId460);
    $.__views.__alloyId461 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId461"
    });
    $.__views.__alloyId460.add($.__views.__alloyId461);
    $.__views.__alloyId462 = Ti.UI.createLabel({
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
        id: "__alloyId462"
    });
    $.__views.__alloyId461.add($.__views.__alloyId462);
    $.__views.__alloyId463 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId463"
    });
    $.__views.__alloyId461.add($.__views.__alloyId463);
    $.__views.__alloyId464 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId464"
    });
    $.__views.__alloyId460.add($.__views.__alloyId464);
    $.__views.__alloyId465 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
        id: "__alloyId465"
    });
    $.__views.__alloyId464.add($.__views.__alloyId465);
    $.__views.__alloyId466 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId466"
    });
    $.__views.__alloyId464.add($.__views.__alloyId466);
    $.__views.__alloyId467 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId467"
    });
    $.__views.row3.add($.__views.__alloyId467);
    $.__views.__alloyId468 = Ti.UI.createLabel({
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
        id: "__alloyId468"
    });
    $.__views.__alloyId467.add($.__views.__alloyId468);
    $.__views.row4 = Ti.UI.createView({
        id: "row4",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
    $.__views.__alloyId441.add($.__views.row4);
    row4 ? $.__views.row4.addEventListener("click", row4) : __defers["$.__views.row4!click!row4"] = true;
    $.__views.__alloyId469 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId469"
    });
    $.__views.row4.add($.__views.__alloyId469);
    $.__views.__alloyId470 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId470"
    });
    $.__views.__alloyId469.add($.__views.__alloyId470);
    $.__views.__alloyId471 = Ti.UI.createLabel({
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
        id: "__alloyId471"
    });
    $.__views.__alloyId470.add($.__views.__alloyId471);
    $.__views.__alloyId472 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId472"
    });
    $.__views.__alloyId470.add($.__views.__alloyId472);
    $.__views.__alloyId473 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId473"
    });
    $.__views.__alloyId469.add($.__views.__alloyId473);
    $.__views.__alloyId474 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
        id: "__alloyId474"
    });
    $.__views.__alloyId473.add($.__views.__alloyId474);
    $.__views.__alloyId475 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId475"
    });
    $.__views.__alloyId473.add($.__views.__alloyId475);
    $.__views.__alloyId476 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId476"
    });
    $.__views.row4.add($.__views.__alloyId476);
    $.__views.__alloyId477 = Ti.UI.createLabel({
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
        id: "__alloyId477"
    });
    $.__views.__alloyId476.add($.__views.__alloyId477);
    $.__views.row5 = Ti.UI.createView({
        id: "row5",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
    $.__views.__alloyId441.add($.__views.row5);
    row5 ? $.__views.row5.addEventListener("click", row5) : __defers["$.__views.row5!click!row5"] = true;
    $.__views.__alloyId478 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId478"
    });
    $.__views.row5.add($.__views.__alloyId478);
    $.__views.__alloyId479 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId479"
    });
    $.__views.__alloyId478.add($.__views.__alloyId479);
    $.__views.__alloyId480 = Ti.UI.createLabel({
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
        id: "__alloyId480"
    });
    $.__views.__alloyId479.add($.__views.__alloyId480);
    $.__views.__alloyId481 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId481"
    });
    $.__views.__alloyId479.add($.__views.__alloyId481);
    $.__views.__alloyId482 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId482"
    });
    $.__views.__alloyId478.add($.__views.__alloyId482);
    $.__views.__alloyId483 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
        id: "__alloyId483"
    });
    $.__views.__alloyId482.add($.__views.__alloyId483);
    $.__views.__alloyId484 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId484"
    });
    $.__views.__alloyId482.add($.__views.__alloyId484);
    $.__views.__alloyId485 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId485"
    });
    $.__views.row5.add($.__views.__alloyId485);
    $.__views.__alloyId486 = Ti.UI.createLabel({
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
        id: "__alloyId486"
    });
    $.__views.__alloyId485.add($.__views.__alloyId486);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId440!click!back"] && $.__views.__alloyId440.addEventListener("click", back);
    __defers["$.__views.row1!click!row1"] && $.__views.row1.addEventListener("click", row1);
    __defers["$.__views.row2!click!row2"] && $.__views.row2.addEventListener("click", row2);
    __defers["$.__views.row3!click!row3"] && $.__views.row3.addEventListener("click", row3);
    __defers["$.__views.row4!click!row4"] && $.__views.row4.addEventListener("click", row4);
    __defers["$.__views.row5!click!row5"] && $.__views.row5.addEventListener("click", row5);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;