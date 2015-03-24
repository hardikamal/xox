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
        DRAWER.navigation("loyalty", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "loyalty2";
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
    $.__views.loyalty2 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "loyalty2"
    });
    $.__views.loyalty2 && $.addTopLevelView($.__views.loyalty2);
    $.__views.__alloyId1068 = Alloy.createController("_header", {
        id: "__alloyId1068",
        __parentSymbol: $.__views.loyalty2
    });
    $.__views.__alloyId1068.setParent($.__views.loyalty2);
    $.__views.__alloyId1069 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1069"
    });
    $.__views.loyalty2.add($.__views.__alloyId1069);
    $.__views.__alloyId1070 = Ti.UI.createLabel({
        text: "Loyalty",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1070"
    });
    $.__views.__alloyId1069.add($.__views.__alloyId1070);
    $.__views.__alloyId1071 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1071"
    });
    $.__views.__alloyId1069.add($.__views.__alloyId1071);
    back ? $.__views.__alloyId1071.addEventListener("click", back) : __defers["$.__views.__alloyId1071!click!back"] = true;
    $.__views.__alloyId1072 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#F5F5F5",
        id: "__alloyId1072"
    });
    $.__views.loyalty2.add($.__views.__alloyId1072);
    $.__views.__alloyId1073 = Ti.UI.createLabel({
        text: "Loyalty Rewards",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1073"
    });
    $.__views.__alloyId1072.add($.__views.__alloyId1073);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.loyalty2.add($.__views.scrollView);
    $.__views.__alloyId1074 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId1074"
    });
    $.__views.scrollView.add($.__views.__alloyId1074);
    $.__views.__alloyId1075 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1075"
    });
    $.__views.__alloyId1074.add($.__views.__alloyId1075);
    $.__views.__alloyId1076 = Ti.UI.createLabel({
        text: "Rewards Package 01",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1076"
    });
    $.__views.__alloyId1075.add($.__views.__alloyId1076);
    $.__views.__alloyId1077 = Ti.UI.createLabel({
        text: "Steps",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1077"
    });
    $.__views.__alloyId1075.add($.__views.__alloyId1077);
    $.__views.__alloyId1078 = Ti.UI.createView({
        backgroundColor: "black",
        width: "90%",
        height: "1",
        bottom: "0",
        id: "__alloyId1078"
    });
    $.__views.__alloyId1074.add($.__views.__alloyId1078);
    $.__views.__alloyId1079 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId1079"
    });
    $.__views.scrollView.add($.__views.__alloyId1079);
    $.__views.__alloyId1080 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1080"
    });
    $.__views.__alloyId1079.add($.__views.__alloyId1080);
    $.__views.__alloyId1081 = Ti.UI.createLabel({
        text: "Rewards Package 02",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1081"
    });
    $.__views.__alloyId1080.add($.__views.__alloyId1081);
    $.__views.__alloyId1082 = Ti.UI.createLabel({
        text: "Steps",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1082"
    });
    $.__views.__alloyId1080.add($.__views.__alloyId1082);
    $.__views.__alloyId1083 = Ti.UI.createView({
        backgroundColor: "black",
        width: "90%",
        height: "1",
        bottom: "0",
        id: "__alloyId1083"
    });
    $.__views.__alloyId1079.add($.__views.__alloyId1083);
    $.__views.__alloyId1084 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId1084"
    });
    $.__views.scrollView.add($.__views.__alloyId1084);
    $.__views.__alloyId1085 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1085"
    });
    $.__views.__alloyId1084.add($.__views.__alloyId1085);
    $.__views.__alloyId1086 = Ti.UI.createLabel({
        text: "Rewards Package 03",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1086"
    });
    $.__views.__alloyId1085.add($.__views.__alloyId1086);
    $.__views.__alloyId1087 = Ti.UI.createLabel({
        text: "Steps",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1087"
    });
    $.__views.__alloyId1085.add($.__views.__alloyId1087);
    $.__views.__alloyId1088 = Ti.UI.createView({
        backgroundColor: "black",
        width: "90%",
        height: "1",
        bottom: "0",
        id: "__alloyId1088"
    });
    $.__views.__alloyId1084.add($.__views.__alloyId1088);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1071!click!back"] && $.__views.__alloyId1071.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;