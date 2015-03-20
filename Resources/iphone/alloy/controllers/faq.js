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
    $.__views.__alloyId283 = Alloy.createController("_header", {
        id: "__alloyId283",
        __parentSymbol: $.__views.faq
    });
    $.__views.__alloyId283.setParent($.__views.faq);
    $.__views.__alloyId284 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId284"
    });
    $.__views.faq.add($.__views.__alloyId284);
    $.__views.__alloyId285 = Ti.UI.createLabel({
        text: "FAQs",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId285"
    });
    $.__views.__alloyId284.add($.__views.__alloyId285);
    $.__views.__alloyId286 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId286"
    });
    $.__views.__alloyId284.add($.__views.__alloyId286);
    back ? $.__views.__alloyId286.addEventListener("click", back) : __defers["$.__views.__alloyId286!click!back"] = true;
    $.__views.__alloyId287 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        id: "__alloyId287"
    });
    $.__views.faq.add($.__views.__alloyId287);
    $.__views.row1 = Ti.UI.createView({
        id: "row1",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
    $.__views.__alloyId287.add($.__views.row1);
    row1 ? $.__views.row1.addEventListener("click", row1) : __defers["$.__views.row1!click!row1"] = true;
    $.__views.__alloyId288 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId288"
    });
    $.__views.row1.add($.__views.__alloyId288);
    $.__views.__alloyId289 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId289"
    });
    $.__views.__alloyId288.add($.__views.__alloyId289);
    $.__views.__alloyId290 = Ti.UI.createLabel({
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
        id: "__alloyId290"
    });
    $.__views.__alloyId289.add($.__views.__alloyId290);
    $.__views.__alloyId291 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId291"
    });
    $.__views.__alloyId289.add($.__views.__alloyId291);
    $.__views.__alloyId292 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId292"
    });
    $.__views.__alloyId288.add($.__views.__alloyId292);
    $.__views.__alloyId293 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
        id: "__alloyId293"
    });
    $.__views.__alloyId292.add($.__views.__alloyId293);
    $.__views.__alloyId294 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId294"
    });
    $.__views.__alloyId292.add($.__views.__alloyId294);
    $.__views.__alloyId295 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId295"
    });
    $.__views.row1.add($.__views.__alloyId295);
    $.__views.__alloyId296 = Ti.UI.createLabel({
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
        id: "__alloyId296"
    });
    $.__views.__alloyId295.add($.__views.__alloyId296);
    $.__views.row2 = Ti.UI.createView({
        id: "row2",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
    $.__views.__alloyId287.add($.__views.row2);
    row2 ? $.__views.row2.addEventListener("click", row2) : __defers["$.__views.row2!click!row2"] = true;
    $.__views.__alloyId297 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId297"
    });
    $.__views.row2.add($.__views.__alloyId297);
    $.__views.__alloyId298 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId298"
    });
    $.__views.__alloyId297.add($.__views.__alloyId298);
    $.__views.__alloyId299 = Ti.UI.createLabel({
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
        id: "__alloyId299"
    });
    $.__views.__alloyId298.add($.__views.__alloyId299);
    $.__views.__alloyId300 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId300"
    });
    $.__views.__alloyId298.add($.__views.__alloyId300);
    $.__views.__alloyId301 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId301"
    });
    $.__views.__alloyId297.add($.__views.__alloyId301);
    $.__views.__alloyId302 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
        id: "__alloyId302"
    });
    $.__views.__alloyId301.add($.__views.__alloyId302);
    $.__views.__alloyId303 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId303"
    });
    $.__views.__alloyId301.add($.__views.__alloyId303);
    $.__views.__alloyId304 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId304"
    });
    $.__views.row2.add($.__views.__alloyId304);
    $.__views.__alloyId305 = Ti.UI.createLabel({
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
        id: "__alloyId305"
    });
    $.__views.__alloyId304.add($.__views.__alloyId305);
    $.__views.row3 = Ti.UI.createView({
        id: "row3",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
    $.__views.__alloyId287.add($.__views.row3);
    row3 ? $.__views.row3.addEventListener("click", row3) : __defers["$.__views.row3!click!row3"] = true;
    $.__views.__alloyId306 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId306"
    });
    $.__views.row3.add($.__views.__alloyId306);
    $.__views.__alloyId307 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId307"
    });
    $.__views.__alloyId306.add($.__views.__alloyId307);
    $.__views.__alloyId308 = Ti.UI.createLabel({
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
        id: "__alloyId308"
    });
    $.__views.__alloyId307.add($.__views.__alloyId308);
    $.__views.__alloyId309 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId309"
    });
    $.__views.__alloyId307.add($.__views.__alloyId309);
    $.__views.__alloyId310 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId310"
    });
    $.__views.__alloyId306.add($.__views.__alloyId310);
    $.__views.__alloyId311 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
        id: "__alloyId311"
    });
    $.__views.__alloyId310.add($.__views.__alloyId311);
    $.__views.__alloyId312 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId312"
    });
    $.__views.__alloyId310.add($.__views.__alloyId312);
    $.__views.__alloyId313 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId313"
    });
    $.__views.row3.add($.__views.__alloyId313);
    $.__views.__alloyId314 = Ti.UI.createLabel({
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
        id: "__alloyId314"
    });
    $.__views.__alloyId313.add($.__views.__alloyId314);
    $.__views.row4 = Ti.UI.createView({
        id: "row4",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
    $.__views.__alloyId287.add($.__views.row4);
    row4 ? $.__views.row4.addEventListener("click", row4) : __defers["$.__views.row4!click!row4"] = true;
    $.__views.__alloyId315 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId315"
    });
    $.__views.row4.add($.__views.__alloyId315);
    $.__views.__alloyId316 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId316"
    });
    $.__views.__alloyId315.add($.__views.__alloyId316);
    $.__views.__alloyId317 = Ti.UI.createLabel({
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
        id: "__alloyId317"
    });
    $.__views.__alloyId316.add($.__views.__alloyId317);
    $.__views.__alloyId318 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId318"
    });
    $.__views.__alloyId316.add($.__views.__alloyId318);
    $.__views.__alloyId319 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId319"
    });
    $.__views.__alloyId315.add($.__views.__alloyId319);
    $.__views.__alloyId320 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
        id: "__alloyId320"
    });
    $.__views.__alloyId319.add($.__views.__alloyId320);
    $.__views.__alloyId321 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId321"
    });
    $.__views.__alloyId319.add($.__views.__alloyId321);
    $.__views.__alloyId322 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId322"
    });
    $.__views.row4.add($.__views.__alloyId322);
    $.__views.__alloyId323 = Ti.UI.createLabel({
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
        id: "__alloyId323"
    });
    $.__views.__alloyId322.add($.__views.__alloyId323);
    $.__views.row5 = Ti.UI.createView({
        id: "row5",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
    $.__views.__alloyId287.add($.__views.row5);
    row5 ? $.__views.row5.addEventListener("click", row5) : __defers["$.__views.row5!click!row5"] = true;
    $.__views.__alloyId324 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId324"
    });
    $.__views.row5.add($.__views.__alloyId324);
    $.__views.__alloyId325 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId325"
    });
    $.__views.__alloyId324.add($.__views.__alloyId325);
    $.__views.__alloyId326 = Ti.UI.createLabel({
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
        id: "__alloyId326"
    });
    $.__views.__alloyId325.add($.__views.__alloyId326);
    $.__views.__alloyId327 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId327"
    });
    $.__views.__alloyId325.add($.__views.__alloyId327);
    $.__views.__alloyId328 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId328"
    });
    $.__views.__alloyId324.add($.__views.__alloyId328);
    $.__views.__alloyId329 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
        id: "__alloyId329"
    });
    $.__views.__alloyId328.add($.__views.__alloyId329);
    $.__views.__alloyId330 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId330"
    });
    $.__views.__alloyId328.add($.__views.__alloyId330);
    $.__views.__alloyId331 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId331"
    });
    $.__views.row5.add($.__views.__alloyId331);
    $.__views.__alloyId332 = Ti.UI.createLabel({
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
        id: "__alloyId332"
    });
    $.__views.__alloyId331.add($.__views.__alloyId332);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId286!click!back"] && $.__views.__alloyId286.addEventListener("click", back);
    __defers["$.__views.row1!click!row1"] && $.__views.row1.addEventListener("click", row1);
    __defers["$.__views.row2!click!row2"] && $.__views.row2.addEventListener("click", row2);
    __defers["$.__views.row3!click!row3"] && $.__views.row3.addEventListener("click", row3);
    __defers["$.__views.row4!click!row4"] && $.__views.row4.addEventListener("click", row4);
    __defers["$.__views.row5!click!row5"] && $.__views.row5.addEventListener("click", row5);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;