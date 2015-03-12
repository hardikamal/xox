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
        DRAWER.navigation("products", 2);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "prepaidPlus";
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
    $.__views.prepaidPlus = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaidPlus"
    });
    $.__views.prepaidPlus && $.addTopLevelView($.__views.prepaidPlus);
    $.__views.__alloyId189 = Alloy.createController("_header", {
        id: "__alloyId189",
        __parentSymbol: $.__views.prepaidPlus
    });
    $.__views.__alloyId189.setParent($.__views.prepaidPlus);
    $.__views.__alloyId190 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId190"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId190);
    $.__views.__alloyId191 = Ti.UI.createView({
        layout: "horizontal",
        left: "0",
        id: "__alloyId191"
    });
    $.__views.__alloyId190.add($.__views.__alloyId191);
    $.__views.__alloyId192 = Ti.UI.createImageView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "30%",
        id: "__alloyId192"
    });
    $.__views.__alloyId191.add($.__views.__alloyId192);
    $.__views.__alloyId193 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId193"
    });
    $.__views.__alloyId191.add($.__views.__alloyId193);
    $.__views.__alloyId194 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId194"
    });
    $.__views.__alloyId190.add($.__views.__alloyId194);
    back ? $.__views.__alloyId194.addEventListener("click", back) : __defers["$.__views.__alloyId194!click!back"] = true;
    $.__views.__alloyId195 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%",
        id: "__alloyId195"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId195);
    $.__views.__alloyId196 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId196"
    });
    $.__views.__alloyId195.add($.__views.__alloyId196);
    $.__views.__alloyId197 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId197"
    });
    $.__views.__alloyId196.add($.__views.__alloyId197);
    $.__views.__alloyId198 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        left: "10",
        id: "__alloyId198"
    });
    $.__views.__alloyId197.add($.__views.__alloyId198);
    $.__views.__alloyId199 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId199"
    });
    $.__views.__alloyId196.add($.__views.__alloyId199);
    $.__views.__alloyId200 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId200"
    });
    $.__views.__alloyId199.add($.__views.__alloyId200);
    $.__views.__alloyId201 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        color: "black",
        id: "__alloyId201"
    });
    $.__views.__alloyId199.add($.__views.__alloyId201);
    $.__views.__alloyId202 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId202"
    });
    $.__views.__alloyId196.add($.__views.__alloyId202);
    $.__views.__alloyId203 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId203"
    });
    $.__views.__alloyId202.add($.__views.__alloyId203);
    $.__views.__alloyId204 = Ti.UI.createLabel({
        text: "15cent",
        width: "auto",
        color: "black",
        id: "__alloyId204"
    });
    $.__views.__alloyId202.add($.__views.__alloyId204);
    $.__views.__alloyId205 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId205"
    });
    $.__views.__alloyId195.add($.__views.__alloyId205);
    $.__views.__alloyId206 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId206"
    });
    $.__views.__alloyId205.add($.__views.__alloyId206);
    $.__views.__alloyId207 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        left: "10",
        id: "__alloyId207"
    });
    $.__views.__alloyId206.add($.__views.__alloyId207);
    $.__views.__alloyId208 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId208"
    });
    $.__views.__alloyId205.add($.__views.__alloyId208);
    $.__views.__alloyId209 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId209"
    });
    $.__views.__alloyId208.add($.__views.__alloyId209);
    $.__views.__alloyId210 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        color: "black",
        id: "__alloyId210"
    });
    $.__views.__alloyId208.add($.__views.__alloyId210);
    $.__views.__alloyId211 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId211"
    });
    $.__views.__alloyId205.add($.__views.__alloyId211);
    $.__views.__alloyId212 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId212"
    });
    $.__views.__alloyId211.add($.__views.__alloyId212);
    $.__views.__alloyId213 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        color: "black",
        id: "__alloyId213"
    });
    $.__views.__alloyId211.add($.__views.__alloyId213);
    $.__views.__alloyId214 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId214"
    });
    $.__views.__alloyId205.add($.__views.__alloyId214);
    $.__views.__alloyId215 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId215"
    });
    $.__views.__alloyId214.add($.__views.__alloyId215);
    $.__views.__alloyId216 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        color: "black",
        id: "__alloyId216"
    });
    $.__views.__alloyId214.add($.__views.__alloyId216);
    $.__views.__alloyId217 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId217"
    });
    $.__views.__alloyId205.add($.__views.__alloyId217);
    $.__views.__alloyId218 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId218"
    });
    $.__views.__alloyId217.add($.__views.__alloyId218);
    $.__views.__alloyId219 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        color: "black",
        id: "__alloyId219"
    });
    $.__views.__alloyId217.add($.__views.__alloyId219);
    $.__views.__alloyId220 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId220"
    });
    $.__views.__alloyId195.add($.__views.__alloyId220);
    $.__views.__alloyId221 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId221"
    });
    $.__views.__alloyId220.add($.__views.__alloyId221);
    $.__views.__alloyId222 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        left: "10",
        id: "__alloyId222"
    });
    $.__views.__alloyId221.add($.__views.__alloyId222);
    $.__views.__alloyId223 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId223"
    });
    $.__views.__alloyId220.add($.__views.__alloyId223);
    $.__views.__alloyId224 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId224"
    });
    $.__views.__alloyId223.add($.__views.__alloyId224);
    $.__views.__alloyId225 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        color: "black",
        id: "__alloyId225"
    });
    $.__views.__alloyId223.add($.__views.__alloyId225);
    $.__views.__alloyId226 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId226"
    });
    $.__views.__alloyId220.add($.__views.__alloyId226);
    $.__views.__alloyId227 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId227"
    });
    $.__views.__alloyId226.add($.__views.__alloyId227);
    $.__views.__alloyId228 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        color: "black",
        id: "__alloyId228"
    });
    $.__views.__alloyId226.add($.__views.__alloyId228);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId194!click!back"] && $.__views.__alloyId194.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;