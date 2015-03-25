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
    $.__views.__alloyId391 = Alloy.createController("_header", {
        id: "__alloyId391",
        __parentSymbol: $.__views.faq
    });
    $.__views.__alloyId391.setParent($.__views.faq);
    $.__views.__alloyId392 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId392"
    });
    $.__views.faq.add($.__views.__alloyId392);
    $.__views.__alloyId393 = Ti.UI.createLabel({
        text: "FAQs",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId393"
    });
    $.__views.__alloyId392.add($.__views.__alloyId393);
    $.__views.__alloyId394 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId394"
    });
    $.__views.__alloyId392.add($.__views.__alloyId394);
    back ? $.__views.__alloyId394.addEventListener("click", back) : __defers["$.__views.__alloyId394!click!back"] = true;
    $.__views.__alloyId395 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        id: "__alloyId395"
    });
    $.__views.faq.add($.__views.__alloyId395);
    $.__views.row1 = Ti.UI.createView({
        id: "row1",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
    $.__views.__alloyId395.add($.__views.row1);
    row1 ? $.__views.row1.addEventListener("click", row1) : __defers["$.__views.row1!click!row1"] = true;
    $.__views.__alloyId396 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId396"
    });
    $.__views.row1.add($.__views.__alloyId396);
    $.__views.__alloyId397 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId397"
    });
    $.__views.__alloyId396.add($.__views.__alloyId397);
    $.__views.__alloyId398 = Ti.UI.createLabel({
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
        id: "__alloyId398"
    });
    $.__views.__alloyId397.add($.__views.__alloyId398);
    $.__views.__alloyId399 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId399"
    });
    $.__views.__alloyId397.add($.__views.__alloyId399);
    $.__views.__alloyId400 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId400"
    });
    $.__views.__alloyId396.add($.__views.__alloyId400);
    $.__views.__alloyId401 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
        id: "__alloyId401"
    });
    $.__views.__alloyId400.add($.__views.__alloyId401);
    $.__views.__alloyId402 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId402"
    });
    $.__views.__alloyId400.add($.__views.__alloyId402);
    $.__views.__alloyId403 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId403"
    });
    $.__views.row1.add($.__views.__alloyId403);
    $.__views.__alloyId404 = Ti.UI.createLabel({
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
        id: "__alloyId404"
    });
    $.__views.__alloyId403.add($.__views.__alloyId404);
    $.__views.row2 = Ti.UI.createView({
        id: "row2",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
    $.__views.__alloyId395.add($.__views.row2);
    row2 ? $.__views.row2.addEventListener("click", row2) : __defers["$.__views.row2!click!row2"] = true;
    $.__views.__alloyId405 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId405"
    });
    $.__views.row2.add($.__views.__alloyId405);
    $.__views.__alloyId406 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId406"
    });
    $.__views.__alloyId405.add($.__views.__alloyId406);
    $.__views.__alloyId407 = Ti.UI.createLabel({
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
        id: "__alloyId407"
    });
    $.__views.__alloyId406.add($.__views.__alloyId407);
    $.__views.__alloyId408 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId408"
    });
    $.__views.__alloyId406.add($.__views.__alloyId408);
    $.__views.__alloyId409 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId409"
    });
    $.__views.__alloyId405.add($.__views.__alloyId409);
    $.__views.__alloyId410 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
        id: "__alloyId410"
    });
    $.__views.__alloyId409.add($.__views.__alloyId410);
    $.__views.__alloyId411 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId411"
    });
    $.__views.__alloyId409.add($.__views.__alloyId411);
    $.__views.__alloyId412 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId412"
    });
    $.__views.row2.add($.__views.__alloyId412);
    $.__views.__alloyId413 = Ti.UI.createLabel({
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
        id: "__alloyId413"
    });
    $.__views.__alloyId412.add($.__views.__alloyId413);
    $.__views.row3 = Ti.UI.createView({
        id: "row3",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
    $.__views.__alloyId395.add($.__views.row3);
    row3 ? $.__views.row3.addEventListener("click", row3) : __defers["$.__views.row3!click!row3"] = true;
    $.__views.__alloyId414 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId414"
    });
    $.__views.row3.add($.__views.__alloyId414);
    $.__views.__alloyId415 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId415"
    });
    $.__views.__alloyId414.add($.__views.__alloyId415);
    $.__views.__alloyId416 = Ti.UI.createLabel({
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
        id: "__alloyId416"
    });
    $.__views.__alloyId415.add($.__views.__alloyId416);
    $.__views.__alloyId417 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId417"
    });
    $.__views.__alloyId415.add($.__views.__alloyId417);
    $.__views.__alloyId418 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId418"
    });
    $.__views.__alloyId414.add($.__views.__alloyId418);
    $.__views.__alloyId419 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
        id: "__alloyId419"
    });
    $.__views.__alloyId418.add($.__views.__alloyId419);
    $.__views.__alloyId420 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId420"
    });
    $.__views.__alloyId418.add($.__views.__alloyId420);
    $.__views.__alloyId421 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId421"
    });
    $.__views.row3.add($.__views.__alloyId421);
    $.__views.__alloyId422 = Ti.UI.createLabel({
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
        id: "__alloyId422"
    });
    $.__views.__alloyId421.add($.__views.__alloyId422);
    $.__views.row4 = Ti.UI.createView({
        id: "row4",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
    $.__views.__alloyId395.add($.__views.row4);
    row4 ? $.__views.row4.addEventListener("click", row4) : __defers["$.__views.row4!click!row4"] = true;
    $.__views.__alloyId423 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId423"
    });
    $.__views.row4.add($.__views.__alloyId423);
    $.__views.__alloyId424 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId424"
    });
    $.__views.__alloyId423.add($.__views.__alloyId424);
    $.__views.__alloyId425 = Ti.UI.createLabel({
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
        id: "__alloyId425"
    });
    $.__views.__alloyId424.add($.__views.__alloyId425);
    $.__views.__alloyId426 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId426"
    });
    $.__views.__alloyId424.add($.__views.__alloyId426);
    $.__views.__alloyId427 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId427"
    });
    $.__views.__alloyId423.add($.__views.__alloyId427);
    $.__views.__alloyId428 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
        id: "__alloyId428"
    });
    $.__views.__alloyId427.add($.__views.__alloyId428);
    $.__views.__alloyId429 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId429"
    });
    $.__views.__alloyId427.add($.__views.__alloyId429);
    $.__views.__alloyId430 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId430"
    });
    $.__views.row4.add($.__views.__alloyId430);
    $.__views.__alloyId431 = Ti.UI.createLabel({
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
        id: "__alloyId431"
    });
    $.__views.__alloyId430.add($.__views.__alloyId431);
    $.__views.row5 = Ti.UI.createView({
        id: "row5",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
    $.__views.__alloyId395.add($.__views.row5);
    row5 ? $.__views.row5.addEventListener("click", row5) : __defers["$.__views.row5!click!row5"] = true;
    $.__views.__alloyId432 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId432"
    });
    $.__views.row5.add($.__views.__alloyId432);
    $.__views.__alloyId433 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId433"
    });
    $.__views.__alloyId432.add($.__views.__alloyId433);
    $.__views.__alloyId434 = Ti.UI.createLabel({
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
        id: "__alloyId434"
    });
    $.__views.__alloyId433.add($.__views.__alloyId434);
    $.__views.__alloyId435 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId435"
    });
    $.__views.__alloyId433.add($.__views.__alloyId435);
    $.__views.__alloyId436 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId436"
    });
    $.__views.__alloyId432.add($.__views.__alloyId436);
    $.__views.__alloyId437 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
        id: "__alloyId437"
    });
    $.__views.__alloyId436.add($.__views.__alloyId437);
    $.__views.__alloyId438 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId438"
    });
    $.__views.__alloyId436.add($.__views.__alloyId438);
    $.__views.__alloyId439 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId439"
    });
    $.__views.row5.add($.__views.__alloyId439);
    $.__views.__alloyId440 = Ti.UI.createLabel({
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
        id: "__alloyId440"
    });
    $.__views.__alloyId439.add($.__views.__alloyId440);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId394!click!back"] && $.__views.__alloyId394.addEventListener("click", back);
    __defers["$.__views.row1!click!row1"] && $.__views.row1.addEventListener("click", row1);
    __defers["$.__views.row2!click!row2"] && $.__views.row2.addEventListener("click", row2);
    __defers["$.__views.row3!click!row3"] && $.__views.row3.addEventListener("click", row3);
    __defers["$.__views.row4!click!row4"] && $.__views.row4.addEventListener("click", row4);
    __defers["$.__views.row5!click!row5"] && $.__views.row5.addEventListener("click", row5);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;