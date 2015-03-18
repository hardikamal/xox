function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "seasonPass2";
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
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        height: "100%",
        scrollType: "vertical",
        backgroundColor: "#FFFFFF"
    });
    $.__views.scrollView && $.addTopLevelView($.__views.scrollView);
    $.__views.__alloyId1039 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        id: "__alloyId1039"
    });
    $.__views.scrollView.add($.__views.__alloyId1039);
    $.__views.__alloyId1040 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1040"
    });
    $.__views.__alloyId1039.add($.__views.__alloyId1040);
    $.__views.__alloyId1041 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId1041"
    });
    $.__views.__alloyId1040.add($.__views.__alloyId1041);
    $.__views.__alloyId1042 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1042"
    });
    $.__views.__alloyId1041.add($.__views.__alloyId1042);
    $.__views.__alloyId1043 = Ti.UI.createLabel({
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1043"
    });
    $.__views.__alloyId1042.add($.__views.__alloyId1043);
    $.__views.__alloyId1044 = Ti.UI.createLabel({
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1044"
    });
    $.__views.__alloyId1042.add($.__views.__alloyId1044);
    $.__views.__alloyId1045 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId1045"
    });
    $.__views.__alloyId1040.add($.__views.__alloyId1045);
    $.__views.__alloyId1046 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId1046"
    });
    $.__views.__alloyId1045.add($.__views.__alloyId1046);
    $.__views.__alloyId1047 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1047"
    });
    $.__views.__alloyId1046.add($.__views.__alloyId1047);
    $.__views.__alloyId1048 = Ti.UI.createLabel({
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1048"
    });
    $.__views.__alloyId1046.add($.__views.__alloyId1048);
    $.__views.__alloyId1049 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId1049"
    });
    $.__views.__alloyId1039.add($.__views.__alloyId1049);
    $.__views.__alloyId1050 = Ti.UI.createLabel({
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId1050"
    });
    $.__views.__alloyId1049.add($.__views.__alloyId1050);
    $.__views.__alloyId1051 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1051"
    });
    $.__views.__alloyId1039.add($.__views.__alloyId1051);
    $.__views.__alloyId1052 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1052"
    });
    $.__views.__alloyId1051.add($.__views.__alloyId1052);
    $.__views.__alloyId1053 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1053"
    });
    $.__views.__alloyId1052.add($.__views.__alloyId1053);
    $.__views.__alloyId1054 = Ti.UI.createLabel({
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1054"
    });
    $.__views.__alloyId1052.add($.__views.__alloyId1054);
    $.__views.__alloyId1055 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
        id: "__alloyId1055"
    });
    $.__views.scrollView.add($.__views.__alloyId1055);
    $.__views.__alloyId1056 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1056"
    });
    $.__views.__alloyId1055.add($.__views.__alloyId1056);
    $.__views.__alloyId1057 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId1057"
    });
    $.__views.__alloyId1056.add($.__views.__alloyId1057);
    $.__views.__alloyId1058 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1058"
    });
    $.__views.__alloyId1057.add($.__views.__alloyId1058);
    $.__views.__alloyId1059 = Ti.UI.createLabel({
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1059"
    });
    $.__views.__alloyId1058.add($.__views.__alloyId1059);
    $.__views.__alloyId1060 = Ti.UI.createLabel({
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1060"
    });
    $.__views.__alloyId1058.add($.__views.__alloyId1060);
    $.__views.__alloyId1061 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId1061"
    });
    $.__views.__alloyId1056.add($.__views.__alloyId1061);
    $.__views.__alloyId1062 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId1062"
    });
    $.__views.__alloyId1061.add($.__views.__alloyId1062);
    $.__views.__alloyId1063 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1063"
    });
    $.__views.__alloyId1062.add($.__views.__alloyId1063);
    $.__views.__alloyId1064 = Ti.UI.createLabel({
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1064"
    });
    $.__views.__alloyId1062.add($.__views.__alloyId1064);
    $.__views.__alloyId1065 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId1065"
    });
    $.__views.__alloyId1055.add($.__views.__alloyId1065);
    $.__views.__alloyId1066 = Ti.UI.createLabel({
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId1066"
    });
    $.__views.__alloyId1065.add($.__views.__alloyId1066);
    $.__views.__alloyId1067 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1067"
    });
    $.__views.__alloyId1055.add($.__views.__alloyId1067);
    $.__views.__alloyId1068 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1068"
    });
    $.__views.__alloyId1067.add($.__views.__alloyId1068);
    $.__views.__alloyId1069 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1069"
    });
    $.__views.__alloyId1068.add($.__views.__alloyId1069);
    $.__views.__alloyId1070 = Ti.UI.createLabel({
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1070"
    });
    $.__views.__alloyId1068.add($.__views.__alloyId1070);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;