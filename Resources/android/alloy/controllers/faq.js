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
    $.__views.__alloyId178 = Alloy.createController("_header", {
        id: "__alloyId178",
        __parentSymbol: $.__views.faq
    });
    $.__views.__alloyId178.setParent($.__views.faq);
    $.__views.__alloyId179 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId179"
    });
    $.__views.faq.add($.__views.__alloyId179);
    $.__views.__alloyId180 = Ti.UI.createLabel({
        text: "FAQs",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId180"
    });
    $.__views.__alloyId179.add($.__views.__alloyId180);
    $.__views.__alloyId181 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId181"
    });
    $.__views.__alloyId179.add($.__views.__alloyId181);
    back ? $.__views.__alloyId181.addEventListener("click", back) : __defers["$.__views.__alloyId181!click!back"] = true;
    $.__views.__alloyId182 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        id: "__alloyId182"
    });
    $.__views.faq.add($.__views.__alloyId182);
    $.__views.row1 = Ti.UI.createView({
        id: "row1",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
    $.__views.__alloyId182.add($.__views.row1);
    row1 ? $.__views.row1.addEventListener("click", row1) : __defers["$.__views.row1!click!row1"] = true;
    $.__views.__alloyId183 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId183"
    });
    $.__views.row1.add($.__views.__alloyId183);
    $.__views.__alloyId184 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId184"
    });
    $.__views.__alloyId183.add($.__views.__alloyId184);
    $.__views.__alloyId185 = Ti.UI.createLabel({
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
        id: "__alloyId185"
    });
    $.__views.__alloyId184.add($.__views.__alloyId185);
    $.__views.__alloyId186 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId186"
    });
    $.__views.__alloyId184.add($.__views.__alloyId186);
    $.__views.__alloyId187 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId187"
    });
    $.__views.__alloyId183.add($.__views.__alloyId187);
    $.__views.__alloyId188 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
        id: "__alloyId188"
    });
    $.__views.__alloyId187.add($.__views.__alloyId188);
    $.__views.__alloyId189 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId189"
    });
    $.__views.__alloyId187.add($.__views.__alloyId189);
    $.__views.__alloyId190 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId190"
    });
    $.__views.row1.add($.__views.__alloyId190);
    $.__views.__alloyId191 = Ti.UI.createLabel({
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
        id: "__alloyId191"
    });
    $.__views.__alloyId190.add($.__views.__alloyId191);
    $.__views.row2 = Ti.UI.createView({
        id: "row2",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
    $.__views.__alloyId182.add($.__views.row2);
    row2 ? $.__views.row2.addEventListener("click", row2) : __defers["$.__views.row2!click!row2"] = true;
    $.__views.__alloyId192 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId192"
    });
    $.__views.row2.add($.__views.__alloyId192);
    $.__views.__alloyId193 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId193"
    });
    $.__views.__alloyId192.add($.__views.__alloyId193);
    $.__views.__alloyId194 = Ti.UI.createLabel({
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
        id: "__alloyId194"
    });
    $.__views.__alloyId193.add($.__views.__alloyId194);
    $.__views.__alloyId195 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId195"
    });
    $.__views.__alloyId193.add($.__views.__alloyId195);
    $.__views.__alloyId196 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId196"
    });
    $.__views.__alloyId192.add($.__views.__alloyId196);
    $.__views.__alloyId197 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
        id: "__alloyId197"
    });
    $.__views.__alloyId196.add($.__views.__alloyId197);
    $.__views.__alloyId198 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId198"
    });
    $.__views.__alloyId196.add($.__views.__alloyId198);
    $.__views.__alloyId199 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId199"
    });
    $.__views.row2.add($.__views.__alloyId199);
    $.__views.__alloyId200 = Ti.UI.createLabel({
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
        id: "__alloyId200"
    });
    $.__views.__alloyId199.add($.__views.__alloyId200);
    $.__views.row3 = Ti.UI.createView({
        id: "row3",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
    $.__views.__alloyId182.add($.__views.row3);
    row3 ? $.__views.row3.addEventListener("click", row3) : __defers["$.__views.row3!click!row3"] = true;
    $.__views.__alloyId201 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId201"
    });
    $.__views.row3.add($.__views.__alloyId201);
    $.__views.__alloyId202 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId202"
    });
    $.__views.__alloyId201.add($.__views.__alloyId202);
    $.__views.__alloyId203 = Ti.UI.createLabel({
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
        id: "__alloyId203"
    });
    $.__views.__alloyId202.add($.__views.__alloyId203);
    $.__views.__alloyId204 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId204"
    });
    $.__views.__alloyId202.add($.__views.__alloyId204);
    $.__views.__alloyId205 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId205"
    });
    $.__views.__alloyId201.add($.__views.__alloyId205);
    $.__views.__alloyId206 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
        id: "__alloyId206"
    });
    $.__views.__alloyId205.add($.__views.__alloyId206);
    $.__views.__alloyId207 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId207"
    });
    $.__views.__alloyId205.add($.__views.__alloyId207);
    $.__views.__alloyId208 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId208"
    });
    $.__views.row3.add($.__views.__alloyId208);
    $.__views.__alloyId209 = Ti.UI.createLabel({
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
        id: "__alloyId209"
    });
    $.__views.__alloyId208.add($.__views.__alloyId209);
    $.__views.row4 = Ti.UI.createView({
        id: "row4",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
    $.__views.__alloyId182.add($.__views.row4);
    row4 ? $.__views.row4.addEventListener("click", row4) : __defers["$.__views.row4!click!row4"] = true;
    $.__views.__alloyId210 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId210"
    });
    $.__views.row4.add($.__views.__alloyId210);
    $.__views.__alloyId211 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId211"
    });
    $.__views.__alloyId210.add($.__views.__alloyId211);
    $.__views.__alloyId212 = Ti.UI.createLabel({
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
        id: "__alloyId212"
    });
    $.__views.__alloyId211.add($.__views.__alloyId212);
    $.__views.__alloyId213 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId213"
    });
    $.__views.__alloyId211.add($.__views.__alloyId213);
    $.__views.__alloyId214 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId214"
    });
    $.__views.__alloyId210.add($.__views.__alloyId214);
    $.__views.__alloyId215 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
        id: "__alloyId215"
    });
    $.__views.__alloyId214.add($.__views.__alloyId215);
    $.__views.__alloyId216 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId216"
    });
    $.__views.__alloyId214.add($.__views.__alloyId216);
    $.__views.__alloyId217 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId217"
    });
    $.__views.row4.add($.__views.__alloyId217);
    $.__views.__alloyId218 = Ti.UI.createLabel({
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
        id: "__alloyId218"
    });
    $.__views.__alloyId217.add($.__views.__alloyId218);
    $.__views.row5 = Ti.UI.createView({
        id: "row5",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
    $.__views.__alloyId182.add($.__views.row5);
    row5 ? $.__views.row5.addEventListener("click", row5) : __defers["$.__views.row5!click!row5"] = true;
    $.__views.__alloyId219 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId219"
    });
    $.__views.row5.add($.__views.__alloyId219);
    $.__views.__alloyId220 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId220"
    });
    $.__views.__alloyId219.add($.__views.__alloyId220);
    $.__views.__alloyId221 = Ti.UI.createLabel({
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
        id: "__alloyId221"
    });
    $.__views.__alloyId220.add($.__views.__alloyId221);
    $.__views.__alloyId222 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId222"
    });
    $.__views.__alloyId220.add($.__views.__alloyId222);
    $.__views.__alloyId223 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId223"
    });
    $.__views.__alloyId219.add($.__views.__alloyId223);
    $.__views.__alloyId224 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
        id: "__alloyId224"
    });
    $.__views.__alloyId223.add($.__views.__alloyId224);
    $.__views.__alloyId225 = Ti.UI.createView({
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId225"
    });
    $.__views.__alloyId223.add($.__views.__alloyId225);
    $.__views.__alloyId226 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId226"
    });
    $.__views.row5.add($.__views.__alloyId226);
    $.__views.__alloyId227 = Ti.UI.createLabel({
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
        id: "__alloyId227"
    });
    $.__views.__alloyId226.add($.__views.__alloyId227);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId181!click!back"] && $.__views.__alloyId181.addEventListener("click", back);
    __defers["$.__views.row1!click!row1"] && $.__views.row1.addEventListener("click", row1);
    __defers["$.__views.row2!click!row2"] && $.__views.row2.addEventListener("click", row2);
    __defers["$.__views.row3!click!row3"] && $.__views.row3.addEventListener("click", row3);
    __defers["$.__views.row4!click!row4"] && $.__views.row4.addEventListener("click", row4);
    __defers["$.__views.row5!click!row5"] && $.__views.row5.addEventListener("click", row5);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;