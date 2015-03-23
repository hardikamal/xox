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
    $.__views.__alloyId413 = Alloy.createController("_header", {
        id: "__alloyId413",
=======
<<<<<<< HEAD
    $.__views.__alloyId438 = Alloy.createController("_header", {
        id: "__alloyId438",
        __parentSymbol: $.__views.faq
    });
    $.__views.__alloyId438.setParent($.__views.faq);
    $.__views.__alloyId439 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId439"
    });
    $.__views.faq.add($.__views.__alloyId439);
    $.__views.__alloyId440 = Ti.UI.createLabel({
=======
    $.__views.__alloyId283 = Alloy.createController("_header", {
        id: "__alloyId283",
>>>>>>> origin/master
        __parentSymbol: $.__views.faq
    });
    $.__views.__alloyId413.setParent($.__views.faq);
    $.__views.__alloyId414 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId414"
    });
<<<<<<< HEAD
    $.__views.faq.add($.__views.__alloyId414);
    $.__views.__alloyId415 = Ti.UI.createLabel({
=======
    $.__views.faq.add($.__views.__alloyId284);
    $.__views.__alloyId285 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "FAQs",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId415"
    });
    $.__views.__alloyId414.add($.__views.__alloyId415);
    $.__views.__alloyId416 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId440"
    });
    $.__views.__alloyId439.add($.__views.__alloyId440);
    $.__views.__alloyId441 = Ti.UI.createImageView({
=======
        id: "__alloyId285"
    });
    $.__views.__alloyId284.add($.__views.__alloyId285);
    $.__views.__alloyId286 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId416"
=======
<<<<<<< HEAD
        id: "__alloyId441"
    });
    $.__views.__alloyId439.add($.__views.__alloyId441);
    back ? $.__views.__alloyId441.addEventListener("click", back) : __defers["$.__views.__alloyId441!click!back"] = true;
    $.__views.__alloyId442 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        id: "__alloyId442"
    });
    $.__views.faq.add($.__views.__alloyId442);
=======
        id: "__alloyId286"
>>>>>>> origin/master
    });
    $.__views.__alloyId414.add($.__views.__alloyId416);
    back ? $.__views.__alloyId416.addEventListener("click", back) : __defers["$.__views.__alloyId416!click!back"] = true;
    $.__views.__alloyId417 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        id: "__alloyId417"
    });
<<<<<<< HEAD
    $.__views.faq.add($.__views.__alloyId417);
=======
    $.__views.faq.add($.__views.__alloyId287);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.row1 = Ti.UI.createView({
        id: "row1",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
<<<<<<< HEAD
    $.__views.__alloyId417.add($.__views.row1);
=======
<<<<<<< HEAD
    $.__views.__alloyId442.add($.__views.row1);
    row1 ? $.__views.row1.addEventListener("click", row1) : __defers["$.__views.row1!click!row1"] = true;
    $.__views.__alloyId443 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId443"
    });
    $.__views.row1.add($.__views.__alloyId443);
    $.__views.__alloyId444 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId444"
    });
    $.__views.__alloyId443.add($.__views.__alloyId444);
    $.__views.__alloyId445 = Ti.UI.createLabel({
=======
    $.__views.__alloyId287.add($.__views.row1);
>>>>>>> origin/master
    row1 ? $.__views.row1.addEventListener("click", row1) : __defers["$.__views.row1!click!row1"] = true;
    $.__views.__alloyId418 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId418"
    });
    $.__views.row1.add($.__views.__alloyId418);
    $.__views.__alloyId419 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId419"
    });
<<<<<<< HEAD
    $.__views.__alloyId418.add($.__views.__alloyId419);
    $.__views.__alloyId420 = Ti.UI.createLabel({
=======
    $.__views.__alloyId288.add($.__views.__alloyId289);
    $.__views.__alloyId290 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId420"
    });
    $.__views.__alloyId419.add($.__views.__alloyId420);
    $.__views.__alloyId421 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId445"
    });
    $.__views.__alloyId444.add($.__views.__alloyId445);
    $.__views.__alloyId446 = Ti.UI.createView({
=======
        id: "__alloyId290"
    });
    $.__views.__alloyId289.add($.__views.__alloyId290);
    $.__views.__alloyId291 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
        id: "__alloyId421"
=======
<<<<<<< HEAD
        id: "__alloyId446"
    });
    $.__views.__alloyId444.add($.__views.__alloyId446);
    $.__views.__alloyId447 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId447"
    });
    $.__views.__alloyId443.add($.__views.__alloyId447);
    $.__views.__alloyId448 = Ti.UI.createImageView({
=======
        id: "__alloyId291"
>>>>>>> origin/master
    });
    $.__views.__alloyId419.add($.__views.__alloyId421);
    $.__views.__alloyId422 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId422"
    });
<<<<<<< HEAD
    $.__views.__alloyId418.add($.__views.__alloyId422);
    $.__views.__alloyId423 = Ti.UI.createImageView({
=======
    $.__views.__alloyId288.add($.__views.__alloyId292);
    $.__views.__alloyId293 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> origin/master
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
<<<<<<< HEAD
        id: "__alloyId423"
    });
    $.__views.__alloyId422.add($.__views.__alloyId423);
    $.__views.__alloyId424 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId448"
    });
    $.__views.__alloyId447.add($.__views.__alloyId448);
    $.__views.__alloyId449 = Ti.UI.createView({
=======
        id: "__alloyId293"
    });
    $.__views.__alloyId292.add($.__views.__alloyId293);
    $.__views.__alloyId294 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
        id: "__alloyId424"
=======
<<<<<<< HEAD
        id: "__alloyId449"
    });
    $.__views.__alloyId447.add($.__views.__alloyId449);
    $.__views.__alloyId450 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId450"
    });
    $.__views.row1.add($.__views.__alloyId450);
    $.__views.__alloyId451 = Ti.UI.createLabel({
=======
        id: "__alloyId294"
>>>>>>> origin/master
    });
    $.__views.__alloyId422.add($.__views.__alloyId424);
    $.__views.__alloyId425 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId425"
    });
<<<<<<< HEAD
    $.__views.row1.add($.__views.__alloyId425);
    $.__views.__alloyId426 = Ti.UI.createLabel({
=======
    $.__views.row1.add($.__views.__alloyId295);
    $.__views.__alloyId296 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId426"
    });
    $.__views.__alloyId425.add($.__views.__alloyId426);
=======
<<<<<<< HEAD
        id: "__alloyId451"
    });
    $.__views.__alloyId450.add($.__views.__alloyId451);
=======
        id: "__alloyId296"
    });
    $.__views.__alloyId295.add($.__views.__alloyId296);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.row2 = Ti.UI.createView({
        id: "row2",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
<<<<<<< HEAD
    $.__views.__alloyId417.add($.__views.row2);
=======
<<<<<<< HEAD
    $.__views.__alloyId442.add($.__views.row2);
    row2 ? $.__views.row2.addEventListener("click", row2) : __defers["$.__views.row2!click!row2"] = true;
    $.__views.__alloyId452 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId452"
    });
    $.__views.row2.add($.__views.__alloyId452);
    $.__views.__alloyId453 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId453"
    });
    $.__views.__alloyId452.add($.__views.__alloyId453);
    $.__views.__alloyId454 = Ti.UI.createLabel({
=======
    $.__views.__alloyId287.add($.__views.row2);
>>>>>>> origin/master
    row2 ? $.__views.row2.addEventListener("click", row2) : __defers["$.__views.row2!click!row2"] = true;
    $.__views.__alloyId427 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId427"
    });
    $.__views.row2.add($.__views.__alloyId427);
    $.__views.__alloyId428 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId428"
    });
<<<<<<< HEAD
    $.__views.__alloyId427.add($.__views.__alloyId428);
    $.__views.__alloyId429 = Ti.UI.createLabel({
=======
    $.__views.__alloyId297.add($.__views.__alloyId298);
    $.__views.__alloyId299 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId429"
    });
    $.__views.__alloyId428.add($.__views.__alloyId429);
    $.__views.__alloyId430 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId454"
    });
    $.__views.__alloyId453.add($.__views.__alloyId454);
    $.__views.__alloyId455 = Ti.UI.createView({
=======
        id: "__alloyId299"
    });
    $.__views.__alloyId298.add($.__views.__alloyId299);
    $.__views.__alloyId300 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
        id: "__alloyId430"
=======
<<<<<<< HEAD
        id: "__alloyId455"
    });
    $.__views.__alloyId453.add($.__views.__alloyId455);
    $.__views.__alloyId456 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId456"
    });
    $.__views.__alloyId452.add($.__views.__alloyId456);
    $.__views.__alloyId457 = Ti.UI.createImageView({
=======
        id: "__alloyId300"
>>>>>>> origin/master
    });
    $.__views.__alloyId428.add($.__views.__alloyId430);
    $.__views.__alloyId431 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId431"
    });
<<<<<<< HEAD
    $.__views.__alloyId427.add($.__views.__alloyId431);
    $.__views.__alloyId432 = Ti.UI.createImageView({
=======
    $.__views.__alloyId297.add($.__views.__alloyId301);
    $.__views.__alloyId302 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> origin/master
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
<<<<<<< HEAD
        id: "__alloyId432"
    });
    $.__views.__alloyId431.add($.__views.__alloyId432);
    $.__views.__alloyId433 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId457"
    });
    $.__views.__alloyId456.add($.__views.__alloyId457);
    $.__views.__alloyId458 = Ti.UI.createView({
=======
        id: "__alloyId302"
    });
    $.__views.__alloyId301.add($.__views.__alloyId302);
    $.__views.__alloyId303 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
        id: "__alloyId433"
=======
<<<<<<< HEAD
        id: "__alloyId458"
    });
    $.__views.__alloyId456.add($.__views.__alloyId458);
    $.__views.__alloyId459 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId459"
    });
    $.__views.row2.add($.__views.__alloyId459);
    $.__views.__alloyId460 = Ti.UI.createLabel({
=======
        id: "__alloyId303"
>>>>>>> origin/master
    });
    $.__views.__alloyId431.add($.__views.__alloyId433);
    $.__views.__alloyId434 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId434"
    });
<<<<<<< HEAD
    $.__views.row2.add($.__views.__alloyId434);
    $.__views.__alloyId435 = Ti.UI.createLabel({
=======
    $.__views.row2.add($.__views.__alloyId304);
    $.__views.__alloyId305 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId435"
    });
    $.__views.__alloyId434.add($.__views.__alloyId435);
=======
<<<<<<< HEAD
        id: "__alloyId460"
    });
    $.__views.__alloyId459.add($.__views.__alloyId460);
=======
        id: "__alloyId305"
    });
    $.__views.__alloyId304.add($.__views.__alloyId305);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.row3 = Ti.UI.createView({
        id: "row3",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
<<<<<<< HEAD
    $.__views.__alloyId417.add($.__views.row3);
=======
<<<<<<< HEAD
    $.__views.__alloyId442.add($.__views.row3);
    row3 ? $.__views.row3.addEventListener("click", row3) : __defers["$.__views.row3!click!row3"] = true;
    $.__views.__alloyId461 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId461"
    });
    $.__views.row3.add($.__views.__alloyId461);
    $.__views.__alloyId462 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId462"
    });
    $.__views.__alloyId461.add($.__views.__alloyId462);
    $.__views.__alloyId463 = Ti.UI.createLabel({
=======
    $.__views.__alloyId287.add($.__views.row3);
>>>>>>> origin/master
    row3 ? $.__views.row3.addEventListener("click", row3) : __defers["$.__views.row3!click!row3"] = true;
    $.__views.__alloyId436 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId436"
    });
    $.__views.row3.add($.__views.__alloyId436);
    $.__views.__alloyId437 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId437"
    });
<<<<<<< HEAD
    $.__views.__alloyId436.add($.__views.__alloyId437);
    $.__views.__alloyId438 = Ti.UI.createLabel({
=======
    $.__views.__alloyId306.add($.__views.__alloyId307);
    $.__views.__alloyId308 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId438"
    });
    $.__views.__alloyId437.add($.__views.__alloyId438);
    $.__views.__alloyId439 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId463"
    });
    $.__views.__alloyId462.add($.__views.__alloyId463);
    $.__views.__alloyId464 = Ti.UI.createView({
=======
        id: "__alloyId308"
    });
    $.__views.__alloyId307.add($.__views.__alloyId308);
    $.__views.__alloyId309 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
        id: "__alloyId439"
=======
<<<<<<< HEAD
        id: "__alloyId464"
    });
    $.__views.__alloyId462.add($.__views.__alloyId464);
    $.__views.__alloyId465 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId465"
    });
    $.__views.__alloyId461.add($.__views.__alloyId465);
    $.__views.__alloyId466 = Ti.UI.createImageView({
=======
        id: "__alloyId309"
>>>>>>> origin/master
    });
    $.__views.__alloyId437.add($.__views.__alloyId439);
    $.__views.__alloyId440 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId440"
    });
<<<<<<< HEAD
    $.__views.__alloyId436.add($.__views.__alloyId440);
    $.__views.__alloyId441 = Ti.UI.createImageView({
=======
    $.__views.__alloyId306.add($.__views.__alloyId310);
    $.__views.__alloyId311 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> origin/master
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
<<<<<<< HEAD
        id: "__alloyId441"
    });
    $.__views.__alloyId440.add($.__views.__alloyId441);
    $.__views.__alloyId442 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId466"
    });
    $.__views.__alloyId465.add($.__views.__alloyId466);
    $.__views.__alloyId467 = Ti.UI.createView({
=======
        id: "__alloyId311"
    });
    $.__views.__alloyId310.add($.__views.__alloyId311);
    $.__views.__alloyId312 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
        id: "__alloyId442"
=======
<<<<<<< HEAD
        id: "__alloyId467"
    });
    $.__views.__alloyId465.add($.__views.__alloyId467);
    $.__views.__alloyId468 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId468"
    });
    $.__views.row3.add($.__views.__alloyId468);
    $.__views.__alloyId469 = Ti.UI.createLabel({
=======
        id: "__alloyId312"
>>>>>>> origin/master
    });
    $.__views.__alloyId440.add($.__views.__alloyId442);
    $.__views.__alloyId443 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId443"
    });
<<<<<<< HEAD
    $.__views.row3.add($.__views.__alloyId443);
    $.__views.__alloyId444 = Ti.UI.createLabel({
=======
    $.__views.row3.add($.__views.__alloyId313);
    $.__views.__alloyId314 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId444"
    });
    $.__views.__alloyId443.add($.__views.__alloyId444);
=======
<<<<<<< HEAD
        id: "__alloyId469"
    });
    $.__views.__alloyId468.add($.__views.__alloyId469);
=======
        id: "__alloyId314"
    });
    $.__views.__alloyId313.add($.__views.__alloyId314);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.row4 = Ti.UI.createView({
        id: "row4",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
<<<<<<< HEAD
    $.__views.__alloyId417.add($.__views.row4);
=======
<<<<<<< HEAD
    $.__views.__alloyId442.add($.__views.row4);
    row4 ? $.__views.row4.addEventListener("click", row4) : __defers["$.__views.row4!click!row4"] = true;
    $.__views.__alloyId470 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId470"
    });
    $.__views.row4.add($.__views.__alloyId470);
    $.__views.__alloyId471 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId471"
    });
    $.__views.__alloyId470.add($.__views.__alloyId471);
    $.__views.__alloyId472 = Ti.UI.createLabel({
=======
    $.__views.__alloyId287.add($.__views.row4);
>>>>>>> origin/master
    row4 ? $.__views.row4.addEventListener("click", row4) : __defers["$.__views.row4!click!row4"] = true;
    $.__views.__alloyId445 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId445"
    });
    $.__views.row4.add($.__views.__alloyId445);
    $.__views.__alloyId446 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId446"
    });
<<<<<<< HEAD
    $.__views.__alloyId445.add($.__views.__alloyId446);
    $.__views.__alloyId447 = Ti.UI.createLabel({
=======
    $.__views.__alloyId315.add($.__views.__alloyId316);
    $.__views.__alloyId317 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId447"
    });
    $.__views.__alloyId446.add($.__views.__alloyId447);
    $.__views.__alloyId448 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId472"
    });
    $.__views.__alloyId471.add($.__views.__alloyId472);
    $.__views.__alloyId473 = Ti.UI.createView({
=======
        id: "__alloyId317"
    });
    $.__views.__alloyId316.add($.__views.__alloyId317);
    $.__views.__alloyId318 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
        id: "__alloyId448"
=======
<<<<<<< HEAD
        id: "__alloyId473"
    });
    $.__views.__alloyId471.add($.__views.__alloyId473);
    $.__views.__alloyId474 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId474"
    });
    $.__views.__alloyId470.add($.__views.__alloyId474);
    $.__views.__alloyId475 = Ti.UI.createImageView({
=======
        id: "__alloyId318"
>>>>>>> origin/master
    });
    $.__views.__alloyId446.add($.__views.__alloyId448);
    $.__views.__alloyId449 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId449"
    });
<<<<<<< HEAD
    $.__views.__alloyId445.add($.__views.__alloyId449);
    $.__views.__alloyId450 = Ti.UI.createImageView({
=======
    $.__views.__alloyId315.add($.__views.__alloyId319);
    $.__views.__alloyId320 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> origin/master
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
<<<<<<< HEAD
        id: "__alloyId450"
    });
    $.__views.__alloyId449.add($.__views.__alloyId450);
    $.__views.__alloyId451 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId475"
    });
    $.__views.__alloyId474.add($.__views.__alloyId475);
    $.__views.__alloyId476 = Ti.UI.createView({
=======
        id: "__alloyId320"
    });
    $.__views.__alloyId319.add($.__views.__alloyId320);
    $.__views.__alloyId321 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
        id: "__alloyId451"
=======
<<<<<<< HEAD
        id: "__alloyId476"
    });
    $.__views.__alloyId474.add($.__views.__alloyId476);
    $.__views.__alloyId477 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId477"
    });
    $.__views.row4.add($.__views.__alloyId477);
    $.__views.__alloyId478 = Ti.UI.createLabel({
=======
        id: "__alloyId321"
>>>>>>> origin/master
    });
    $.__views.__alloyId449.add($.__views.__alloyId451);
    $.__views.__alloyId452 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId452"
    });
<<<<<<< HEAD
    $.__views.row4.add($.__views.__alloyId452);
    $.__views.__alloyId453 = Ti.UI.createLabel({
=======
    $.__views.row4.add($.__views.__alloyId322);
    $.__views.__alloyId323 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId453"
    });
    $.__views.__alloyId452.add($.__views.__alloyId453);
=======
<<<<<<< HEAD
        id: "__alloyId478"
    });
    $.__views.__alloyId477.add($.__views.__alloyId478);
=======
        id: "__alloyId323"
    });
    $.__views.__alloyId322.add($.__views.__alloyId323);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.row5 = Ti.UI.createView({
        id: "row5",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
<<<<<<< HEAD
    $.__views.__alloyId417.add($.__views.row5);
=======
<<<<<<< HEAD
    $.__views.__alloyId442.add($.__views.row5);
    row5 ? $.__views.row5.addEventListener("click", row5) : __defers["$.__views.row5!click!row5"] = true;
    $.__views.__alloyId479 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId479"
    });
    $.__views.row5.add($.__views.__alloyId479);
    $.__views.__alloyId480 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId480"
    });
    $.__views.__alloyId479.add($.__views.__alloyId480);
    $.__views.__alloyId481 = Ti.UI.createLabel({
=======
    $.__views.__alloyId287.add($.__views.row5);
>>>>>>> origin/master
    row5 ? $.__views.row5.addEventListener("click", row5) : __defers["$.__views.row5!click!row5"] = true;
    $.__views.__alloyId454 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId454"
    });
    $.__views.row5.add($.__views.__alloyId454);
    $.__views.__alloyId455 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId455"
    });
<<<<<<< HEAD
    $.__views.__alloyId454.add($.__views.__alloyId455);
    $.__views.__alloyId456 = Ti.UI.createLabel({
=======
    $.__views.__alloyId324.add($.__views.__alloyId325);
    $.__views.__alloyId326 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId456"
    });
    $.__views.__alloyId455.add($.__views.__alloyId456);
    $.__views.__alloyId457 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId481"
    });
    $.__views.__alloyId480.add($.__views.__alloyId481);
    $.__views.__alloyId482 = Ti.UI.createView({
=======
        id: "__alloyId326"
    });
    $.__views.__alloyId325.add($.__views.__alloyId326);
    $.__views.__alloyId327 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
        id: "__alloyId457"
=======
<<<<<<< HEAD
        id: "__alloyId482"
    });
    $.__views.__alloyId480.add($.__views.__alloyId482);
    $.__views.__alloyId483 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId483"
    });
    $.__views.__alloyId479.add($.__views.__alloyId483);
    $.__views.__alloyId484 = Ti.UI.createImageView({
=======
        id: "__alloyId327"
>>>>>>> origin/master
    });
    $.__views.__alloyId455.add($.__views.__alloyId457);
    $.__views.__alloyId458 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId458"
    });
<<<<<<< HEAD
    $.__views.__alloyId454.add($.__views.__alloyId458);
    $.__views.__alloyId459 = Ti.UI.createImageView({
=======
    $.__views.__alloyId324.add($.__views.__alloyId328);
    $.__views.__alloyId329 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> origin/master
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
<<<<<<< HEAD
        id: "__alloyId459"
    });
    $.__views.__alloyId458.add($.__views.__alloyId459);
    $.__views.__alloyId460 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId484"
    });
    $.__views.__alloyId483.add($.__views.__alloyId484);
    $.__views.__alloyId485 = Ti.UI.createView({
=======
        id: "__alloyId329"
    });
    $.__views.__alloyId328.add($.__views.__alloyId329);
    $.__views.__alloyId330 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
        id: "__alloyId460"
=======
<<<<<<< HEAD
        id: "__alloyId485"
    });
    $.__views.__alloyId483.add($.__views.__alloyId485);
    $.__views.__alloyId486 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId486"
    });
    $.__views.row5.add($.__views.__alloyId486);
    $.__views.__alloyId487 = Ti.UI.createLabel({
=======
        id: "__alloyId330"
>>>>>>> origin/master
    });
    $.__views.__alloyId458.add($.__views.__alloyId460);
    $.__views.__alloyId461 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId461"
    });
<<<<<<< HEAD
    $.__views.row5.add($.__views.__alloyId461);
    $.__views.__alloyId462 = Ti.UI.createLabel({
=======
    $.__views.row5.add($.__views.__alloyId331);
    $.__views.__alloyId332 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId462"
=======
<<<<<<< HEAD
        id: "__alloyId487"
    });
    $.__views.__alloyId486.add($.__views.__alloyId487);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId441!click!back"] && $.__views.__alloyId441.addEventListener("click", back);
=======
        id: "__alloyId332"
>>>>>>> origin/master
    });
    $.__views.__alloyId461.add($.__views.__alloyId462);
    exports.destroy = function() {};
    _.extend($, $.__views);
<<<<<<< HEAD
    __defers["$.__views.__alloyId416!click!back"] && $.__views.__alloyId416.addEventListener("click", back);
=======
    __defers["$.__views.__alloyId286!click!back"] && $.__views.__alloyId286.addEventListener("click", back);
>>>>>>> origin/master
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