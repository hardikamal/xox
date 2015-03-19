function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function userGuide() {
        DRAWER.navigation("userGuide", 2);
    }
    function terms() {
        DRAWER.navigation("terms", 2);
    }
    function notification() {
        DRAWER.navigation("notification", 2);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "support";
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
    $.__views.support = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "support"
    });
    $.__views.support && $.addTopLevelView($.__views.support);
    $.__views.__alloyId1197 = Alloy.createController("_header", {
        id: "__alloyId1197",
        __parentSymbol: $.__views.support
    });
    $.__views.__alloyId1197.setParent($.__views.support);
    $.__views.__alloyId1198 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId1198"
    });
    $.__views.support.add($.__views.__alloyId1198);
    $.__views.__alloyId1199 = Ti.UI.createLabel({
        text: "Support",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId1199"
    });
    $.__views.__alloyId1198.add($.__views.__alloyId1199);
    $.__views.__alloyId1200 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId1200"
    });
    $.__views.support.add($.__views.__alloyId1200);
    $.__views.__alloyId1201 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1201"
    });
    $.__views.__alloyId1200.add($.__views.__alloyId1201);
    userGuide ? $.__views.__alloyId1201.addEventListener("click", userGuide) : __defers["$.__views.__alloyId1201!click!userGuide"] = true;
    $.__views.__alloyId1202 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1202"
    });
    $.__views.__alloyId1201.add($.__views.__alloyId1202);
    $.__views.__alloyId1203 = Ti.UI.createLabel({
        text: "User Guide",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1203"
    });
    $.__views.__alloyId1202.add($.__views.__alloyId1203);
    $.__views.__alloyId1204 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1204"
    });
    $.__views.__alloyId1201.add($.__views.__alloyId1204);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1204.add($.__views.arrow1);
    $.__views.__alloyId1205 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1205"
    });
    $.__views.__alloyId1200.add($.__views.__alloyId1205);
    terms ? $.__views.__alloyId1205.addEventListener("click", terms) : __defers["$.__views.__alloyId1205!click!terms"] = true;
    $.__views.__alloyId1206 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1206"
    });
    $.__views.__alloyId1205.add($.__views.__alloyId1206);
    $.__views.__alloyId1207 = Ti.UI.createLabel({
        text: "Terms & Conditions",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1207"
    });
    $.__views.__alloyId1206.add($.__views.__alloyId1207);
    $.__views.__alloyId1208 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1208"
    });
    $.__views.__alloyId1205.add($.__views.__alloyId1208);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1208.add($.__views.arrow2);
    $.__views.__alloyId1209 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1209"
    });
    $.__views.__alloyId1200.add($.__views.__alloyId1209);
    notification ? $.__views.__alloyId1209.addEventListener("click", notification) : __defers["$.__views.__alloyId1209!click!notification"] = true;
    $.__views.__alloyId1210 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1210"
    });
    $.__views.__alloyId1209.add($.__views.__alloyId1210);
    $.__views.__alloyId1211 = Ti.UI.createLabel({
        text: "Notification",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1211"
    });
    $.__views.__alloyId1210.add($.__views.__alloyId1211);
    $.__views.__alloyId1212 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1212"
    });
    $.__views.__alloyId1209.add($.__views.__alloyId1212);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1212.add($.__views.arrow3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1201!click!userGuide"] && $.__views.__alloyId1201.addEventListener("click", userGuide);
    __defers["$.__views.__alloyId1205!click!terms"] && $.__views.__alloyId1205.addEventListener("click", terms);
    __defers["$.__views.__alloyId1209!click!notification"] && $.__views.__alloyId1209.addEventListener("click", notification);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;