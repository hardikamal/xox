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
    $.__views.__alloyId1187 = Alloy.createController("_header", {
        id: "__alloyId1187",
        __parentSymbol: $.__views.loyalty2
    });
    $.__views.__alloyId1187.setParent($.__views.loyalty2);
    $.__views.__alloyId1188 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1188"
    });
    $.__views.loyalty2.add($.__views.__alloyId1188);
    $.__views.__alloyId1189 = Ti.UI.createLabel({
        text: "Loyalty",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1189"
    });
    $.__views.__alloyId1188.add($.__views.__alloyId1189);
    $.__views.__alloyId1190 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1190"
    });
    $.__views.__alloyId1188.add($.__views.__alloyId1190);
    back ? $.__views.__alloyId1190.addEventListener("click", back) : __defers["$.__views.__alloyId1190!click!back"] = true;
    $.__views.__alloyId1191 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#F5F5F5",
        id: "__alloyId1191"
    });
    $.__views.loyalty2.add($.__views.__alloyId1191);
    $.__views.__alloyId1192 = Ti.UI.createLabel({
        text: "Loyalty Rewards",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1192"
    });
    $.__views.__alloyId1191.add($.__views.__alloyId1192);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.loyalty2.add($.__views.scrollView);
    $.__views.__alloyId1193 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId1193"
    });
    $.__views.scrollView.add($.__views.__alloyId1193);
    $.__views.__alloyId1194 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1194"
    });
    $.__views.__alloyId1193.add($.__views.__alloyId1194);
    $.__views.__alloyId1195 = Ti.UI.createLabel({
        text: "Rewards Package 01",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1195"
    });
    $.__views.__alloyId1194.add($.__views.__alloyId1195);
    $.__views.__alloyId1196 = Ti.UI.createLabel({
        text: "Steps",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1196"
    });
    $.__views.__alloyId1194.add($.__views.__alloyId1196);
    $.__views.__alloyId1197 = Ti.UI.createView({
        backgroundColor: "black",
        width: "90%",
        height: "1",
        bottom: "0",
        id: "__alloyId1197"
    });
    $.__views.__alloyId1193.add($.__views.__alloyId1197);
    $.__views.__alloyId1198 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId1198"
    });
    $.__views.scrollView.add($.__views.__alloyId1198);
    $.__views.__alloyId1199 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1199"
    });
    $.__views.__alloyId1198.add($.__views.__alloyId1199);
    $.__views.__alloyId1200 = Ti.UI.createLabel({
        text: "Rewards Package 02",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1200"
    });
    $.__views.__alloyId1199.add($.__views.__alloyId1200);
    $.__views.__alloyId1201 = Ti.UI.createLabel({
        text: "Steps",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1201"
    });
    $.__views.__alloyId1199.add($.__views.__alloyId1201);
    $.__views.__alloyId1202 = Ti.UI.createView({
        backgroundColor: "black",
        width: "90%",
        height: "1",
        bottom: "0",
        id: "__alloyId1202"
    });
    $.__views.__alloyId1198.add($.__views.__alloyId1202);
    $.__views.__alloyId1203 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId1203"
    });
    $.__views.scrollView.add($.__views.__alloyId1203);
    $.__views.__alloyId1204 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1204"
    });
    $.__views.__alloyId1203.add($.__views.__alloyId1204);
    $.__views.__alloyId1205 = Ti.UI.createLabel({
        text: "Rewards Package 03",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1205"
    });
    $.__views.__alloyId1204.add($.__views.__alloyId1205);
    $.__views.__alloyId1206 = Ti.UI.createLabel({
        text: "Steps",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1206"
    });
    $.__views.__alloyId1204.add($.__views.__alloyId1206);
    $.__views.__alloyId1207 = Ti.UI.createView({
        backgroundColor: "black",
        width: "90%",
        height: "1",
        bottom: "0",
        id: "__alloyId1207"
    });
    $.__views.__alloyId1203.add($.__views.__alloyId1207);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1190!click!back"] && $.__views.__alloyId1190.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;