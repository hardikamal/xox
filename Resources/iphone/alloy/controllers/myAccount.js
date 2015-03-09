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
        DRAWER.navigation("home", 2);
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
        layout: "vertical",
        fullscreen: "true",
        id: "myAccount"
    });
    $.__views.myAccount && $.addTopLevelView($.__views.myAccount);
    $.__views.__alloyId43 = Ti.UI.createView({
        height: "50",
        backgroundColor: "black",
        id: "__alloyId43"
    });
    $.__views.myAccount.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createView({
        left: "10",
        backgroundColor: "white",
        width: "40",
        height: "40",
        id: "__alloyId44"
    });
    $.__views.__alloyId43.add($.__views.__alloyId44);
    back ? $.__views.__alloyId44.addEventListener("click", back) : __defers["$.__views.__alloyId44!click!back"] = true;
    $.__views.__alloyId45 = Ti.UI.createLabel({
        text: "XOX",
        color: "white",
        id: "__alloyId45"
    });
    $.__views.__alloyId43.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        backgroundColor: "red",
        id: "__alloyId46"
    });
    $.__views.myAccount.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        backgroundColor: "blue",
        id: "__alloyId47"
    });
    $.__views.__alloyId46.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createLabel({
        text: "Hello!",
        color: "white",
        left: "10",
        top: "10",
        id: "__alloyId48"
    });
    $.__views.__alloyId47.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createLabel({
        text: "John Smith",
        color: "white",
        left: "10",
        bottom: "10",
        id: "__alloyId49"
    });
    $.__views.__alloyId47.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createView({
        width: "33%",
        id: "__alloyId50"
    });
    $.__views.__alloyId46.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createView({
        width: "auto",
        height: Ti.UI.FILL,
        id: "__alloyId51"
    });
    $.__views.__alloyId46.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createView({
        width: "80",
        height: "80",
        backgroundColor: "green",
        borderRadius: "40",
        id: "__alloyId52"
    });
    $.__views.__alloyId51.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#A5A5A5",
        id: "__alloyId53"
    });
    $.__views.myAccount.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createView({
        layout: "composite",
        width: "50%",
        backgroundColor: "blue",
        id: "__alloyId54"
    });
    $.__views.__alloyId53.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId55"
    });
    $.__views.__alloyId54.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "gray",
        left: "10",
        id: "__alloyId56"
    });
    $.__views.__alloyId55.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createLabel({
        text: "85.05",
        color: "black",
        left: "10",
        id: "__alloyId57"
    });
    $.__views.__alloyId55.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createView({
        layout: "composite",
        width: "auto",
        id: "__alloyId58"
    });
    $.__views.__alloyId53.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createLabel({
        text: "Expiry Date",
        color: "gray",
        left: "10",
        bottom: "2.5",
        id: "__alloyId60"
    });
    $.__views.__alloyId59.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createLabel({
        text: "1 Dec 2015",
        color: "black",
        left: "10",
        top: "2.5",
        id: "__alloyId61"
    });
    $.__views.__alloyId59.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId62"
    });
    $.__views.myAccount.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createView({
        layout: "horizontal",
        height: "33%",
        width: Ti.UI.FILL,
        id: "__alloyId63"
    });
    $.__views.__alloyId62.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        backgroundColor: "yellow",
        id: "__alloyId64"
    });
    $.__views.__alloyId63.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        backgroundColor: "pink",
        id: "__alloyId65"
    });
    $.__views.__alloyId63.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createView({
        width: "auto",
        height: Ti.UI.FILL,
        backgroundColor: "purple",
        id: "__alloyId66"
    });
    $.__views.__alloyId63.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createView({
        layout: "horizontal",
        height: "33%",
        width: Ti.UI.FILL,
        id: "__alloyId67"
    });
    $.__views.__alloyId62.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        backgroundColor: "blue",
        id: "__alloyId68"
    });
    $.__views.__alloyId67.add($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        backgroundColor: "green",
        id: "__alloyId69"
    });
    $.__views.__alloyId67.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createView({
        width: "auto",
        height: Ti.UI.FILL,
        backgroundColor: "red",
        id: "__alloyId70"
    });
    $.__views.__alloyId67.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createView({
        layout: "horizontal",
        height: "34%",
        width: Ti.UI.FILL,
        id: "__alloyId71"
    });
    $.__views.__alloyId62.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        backgroundColor: "yellow",
        id: "__alloyId72"
    });
    $.__views.__alloyId71.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        backgroundColor: "pink",
        id: "__alloyId73"
    });
    $.__views.__alloyId71.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createView({
        width: "auto",
        height: Ti.UI.FILL,
        backgroundColor: "purple",
        id: "__alloyId74"
    });
    $.__views.__alloyId71.add($.__views.__alloyId74);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId44!click!back"] && $.__views.__alloyId44.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;