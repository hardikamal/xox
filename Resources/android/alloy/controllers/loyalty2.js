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
    $.__views.__alloyId1210 = Alloy.createController("_header", {
        id: "__alloyId1210",
        __parentSymbol: $.__views.loyalty2
    });
    $.__views.__alloyId1210.setParent($.__views.loyalty2);
    $.__views.__alloyId1211 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1211"
    });
    $.__views.loyalty2.add($.__views.__alloyId1211);
    $.__views.__alloyId1212 = Ti.UI.createLabel({
        text: "Loyalty",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1212"
    });
    $.__views.__alloyId1211.add($.__views.__alloyId1212);
    $.__views.__alloyId1213 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1213"
    });
    $.__views.__alloyId1211.add($.__views.__alloyId1213);
    back ? $.__views.__alloyId1213.addEventListener("click", back) : __defers["$.__views.__alloyId1213!click!back"] = true;
    $.__views.__alloyId1214 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#F5F5F5",
        id: "__alloyId1214"
    });
    $.__views.loyalty2.add($.__views.__alloyId1214);
    $.__views.__alloyId1215 = Ti.UI.createLabel({
        text: "Loyalty Rewards",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1215"
    });
    $.__views.__alloyId1214.add($.__views.__alloyId1215);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.loyalty2.add($.__views.scrollView);
    $.__views.__alloyId1216 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId1216"
    });
    $.__views.scrollView.add($.__views.__alloyId1216);
    $.__views.__alloyId1217 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1217"
    });
    $.__views.__alloyId1216.add($.__views.__alloyId1217);
    $.__views.__alloyId1218 = Ti.UI.createLabel({
        text: "Rewards Package 01",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1218"
    });
    $.__views.__alloyId1217.add($.__views.__alloyId1218);
    $.__views.__alloyId1219 = Ti.UI.createLabel({
        text: "Steps",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1219"
    });
    $.__views.__alloyId1217.add($.__views.__alloyId1219);
    $.__views.__alloyId1220 = Ti.UI.createView({
        backgroundColor: "black",
        width: "90%",
        height: "1",
        bottom: "0",
        id: "__alloyId1220"
    });
    $.__views.__alloyId1216.add($.__views.__alloyId1220);
    $.__views.__alloyId1221 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId1221"
    });
    $.__views.scrollView.add($.__views.__alloyId1221);
    $.__views.__alloyId1222 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1222"
    });
    $.__views.__alloyId1221.add($.__views.__alloyId1222);
    $.__views.__alloyId1223 = Ti.UI.createLabel({
        text: "Rewards Package 02",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1223"
    });
    $.__views.__alloyId1222.add($.__views.__alloyId1223);
    $.__views.__alloyId1224 = Ti.UI.createLabel({
        text: "Steps",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1224"
    });
    $.__views.__alloyId1222.add($.__views.__alloyId1224);
    $.__views.__alloyId1225 = Ti.UI.createView({
        backgroundColor: "black",
        width: "90%",
        height: "1",
        bottom: "0",
        id: "__alloyId1225"
    });
    $.__views.__alloyId1221.add($.__views.__alloyId1225);
    $.__views.__alloyId1226 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId1226"
    });
    $.__views.scrollView.add($.__views.__alloyId1226);
    $.__views.__alloyId1227 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1227"
    });
    $.__views.__alloyId1226.add($.__views.__alloyId1227);
    $.__views.__alloyId1228 = Ti.UI.createLabel({
        text: "Rewards Package 03",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1228"
    });
    $.__views.__alloyId1227.add($.__views.__alloyId1228);
    $.__views.__alloyId1229 = Ti.UI.createLabel({
        text: "Steps",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1229"
    });
    $.__views.__alloyId1227.add($.__views.__alloyId1229);
    $.__views.__alloyId1230 = Ti.UI.createView({
        backgroundColor: "black",
        width: "90%",
        height: "1",
        bottom: "0",
        id: "__alloyId1230"
    });
    $.__views.__alloyId1226.add($.__views.__alloyId1230);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1213!click!back"] && $.__views.__alloyId1213.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;