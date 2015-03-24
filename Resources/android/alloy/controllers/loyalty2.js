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
    $.__views.__alloyId1138 = Alloy.createController("_header", {
        id: "__alloyId1138",
        __parentSymbol: $.__views.loyalty2
    });
    $.__views.__alloyId1138.setParent($.__views.loyalty2);
    $.__views.__alloyId1139 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1139"
    });
    $.__views.loyalty2.add($.__views.__alloyId1139);
    $.__views.__alloyId1140 = Ti.UI.createLabel({
        text: "Loyalty",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1140"
    });
    $.__views.__alloyId1139.add($.__views.__alloyId1140);
    $.__views.__alloyId1141 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1141"
    });
    $.__views.__alloyId1139.add($.__views.__alloyId1141);
    back ? $.__views.__alloyId1141.addEventListener("click", back) : __defers["$.__views.__alloyId1141!click!back"] = true;
    $.__views.__alloyId1142 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#F5F5F5",
        id: "__alloyId1142"
    });
    $.__views.loyalty2.add($.__views.__alloyId1142);
    $.__views.__alloyId1143 = Ti.UI.createLabel({
        text: "Loyalty Rewards",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1143"
    });
    $.__views.__alloyId1142.add($.__views.__alloyId1143);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.loyalty2.add($.__views.scrollView);
    $.__views.__alloyId1144 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId1144"
    });
    $.__views.scrollView.add($.__views.__alloyId1144);
    $.__views.__alloyId1145 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1145"
    });
    $.__views.__alloyId1144.add($.__views.__alloyId1145);
    $.__views.__alloyId1146 = Ti.UI.createLabel({
        text: "Rewards Package 01",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1146"
    });
    $.__views.__alloyId1145.add($.__views.__alloyId1146);
    $.__views.__alloyId1147 = Ti.UI.createLabel({
        text: "Steps",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1147"
    });
    $.__views.__alloyId1145.add($.__views.__alloyId1147);
    $.__views.__alloyId1148 = Ti.UI.createView({
        backgroundColor: "black",
        width: "90%",
        height: "1",
        bottom: "0",
        id: "__alloyId1148"
    });
    $.__views.__alloyId1144.add($.__views.__alloyId1148);
    $.__views.__alloyId1149 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId1149"
    });
    $.__views.scrollView.add($.__views.__alloyId1149);
    $.__views.__alloyId1150 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1150"
    });
    $.__views.__alloyId1149.add($.__views.__alloyId1150);
    $.__views.__alloyId1151 = Ti.UI.createLabel({
        text: "Rewards Package 02",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1151"
    });
    $.__views.__alloyId1150.add($.__views.__alloyId1151);
    $.__views.__alloyId1152 = Ti.UI.createLabel({
        text: "Steps",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1152"
    });
    $.__views.__alloyId1150.add($.__views.__alloyId1152);
    $.__views.__alloyId1153 = Ti.UI.createView({
        backgroundColor: "black",
        width: "90%",
        height: "1",
        bottom: "0",
        id: "__alloyId1153"
    });
    $.__views.__alloyId1149.add($.__views.__alloyId1153);
    $.__views.__alloyId1154 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId1154"
    });
    $.__views.scrollView.add($.__views.__alloyId1154);
    $.__views.__alloyId1155 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1155"
    });
    $.__views.__alloyId1154.add($.__views.__alloyId1155);
    $.__views.__alloyId1156 = Ti.UI.createLabel({
        text: "Rewards Package 03",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1156"
    });
    $.__views.__alloyId1155.add($.__views.__alloyId1156);
    $.__views.__alloyId1157 = Ti.UI.createLabel({
        text: "Steps",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1157"
    });
    $.__views.__alloyId1155.add($.__views.__alloyId1157);
    $.__views.__alloyId1158 = Ti.UI.createView({
        backgroundColor: "black",
        width: "90%",
        height: "1",
        bottom: "0",
        id: "__alloyId1158"
    });
    $.__views.__alloyId1154.add($.__views.__alloyId1158);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1141!click!back"] && $.__views.__alloyId1141.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;