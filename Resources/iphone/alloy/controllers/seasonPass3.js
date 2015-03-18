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
    this.__controllerPath = "seasonPass3";
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
    $.__views.__alloyId1071 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        id: "__alloyId1071"
    });
    $.__views.scrollView.add($.__views.__alloyId1071);
    $.__views.__alloyId1072 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1072"
    });
    $.__views.__alloyId1071.add($.__views.__alloyId1072);
    $.__views.__alloyId1073 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId1073"
    });
    $.__views.__alloyId1072.add($.__views.__alloyId1073);
    $.__views.__alloyId1074 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1074"
    });
    $.__views.__alloyId1073.add($.__views.__alloyId1074);
    $.__views.__alloyId1075 = Ti.UI.createLabel({
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1075"
    });
    $.__views.__alloyId1074.add($.__views.__alloyId1075);
    $.__views.__alloyId1076 = Ti.UI.createLabel({
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1076"
    });
    $.__views.__alloyId1074.add($.__views.__alloyId1076);
    $.__views.__alloyId1077 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId1077"
    });
    $.__views.__alloyId1072.add($.__views.__alloyId1077);
    $.__views.__alloyId1078 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId1078"
    });
    $.__views.__alloyId1077.add($.__views.__alloyId1078);
    $.__views.__alloyId1079 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1079"
    });
    $.__views.__alloyId1078.add($.__views.__alloyId1079);
    $.__views.__alloyId1080 = Ti.UI.createLabel({
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1080"
    });
    $.__views.__alloyId1078.add($.__views.__alloyId1080);
    $.__views.__alloyId1081 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId1081"
    });
    $.__views.__alloyId1071.add($.__views.__alloyId1081);
    $.__views.__alloyId1082 = Ti.UI.createLabel({
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId1082"
    });
    $.__views.__alloyId1081.add($.__views.__alloyId1082);
    $.__views.__alloyId1083 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1083"
    });
    $.__views.__alloyId1071.add($.__views.__alloyId1083);
    $.__views.__alloyId1084 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1084"
    });
    $.__views.__alloyId1083.add($.__views.__alloyId1084);
    $.__views.__alloyId1085 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1085"
    });
    $.__views.__alloyId1084.add($.__views.__alloyId1085);
    $.__views.__alloyId1086 = Ti.UI.createLabel({
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1086"
    });
    $.__views.__alloyId1084.add($.__views.__alloyId1086);
    $.__views.__alloyId1087 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
        id: "__alloyId1087"
    });
    $.__views.scrollView.add($.__views.__alloyId1087);
    $.__views.__alloyId1088 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1088"
    });
    $.__views.__alloyId1087.add($.__views.__alloyId1088);
    $.__views.__alloyId1089 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId1089"
    });
    $.__views.__alloyId1088.add($.__views.__alloyId1089);
    $.__views.__alloyId1090 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1090"
    });
    $.__views.__alloyId1089.add($.__views.__alloyId1090);
    $.__views.__alloyId1091 = Ti.UI.createLabel({
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1091"
    });
    $.__views.__alloyId1090.add($.__views.__alloyId1091);
    $.__views.__alloyId1092 = Ti.UI.createLabel({
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1092"
    });
    $.__views.__alloyId1090.add($.__views.__alloyId1092);
    $.__views.__alloyId1093 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId1093"
    });
    $.__views.__alloyId1088.add($.__views.__alloyId1093);
    $.__views.__alloyId1094 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId1094"
    });
    $.__views.__alloyId1093.add($.__views.__alloyId1094);
    $.__views.__alloyId1095 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1095"
    });
    $.__views.__alloyId1094.add($.__views.__alloyId1095);
    $.__views.__alloyId1096 = Ti.UI.createLabel({
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1096"
    });
    $.__views.__alloyId1094.add($.__views.__alloyId1096);
    $.__views.__alloyId1097 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId1097"
    });
    $.__views.__alloyId1087.add($.__views.__alloyId1097);
    $.__views.__alloyId1098 = Ti.UI.createLabel({
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId1098"
    });
    $.__views.__alloyId1097.add($.__views.__alloyId1098);
    $.__views.__alloyId1099 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1099"
    });
    $.__views.__alloyId1087.add($.__views.__alloyId1099);
    $.__views.__alloyId1100 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1100"
    });
    $.__views.__alloyId1099.add($.__views.__alloyId1100);
    $.__views.__alloyId1101 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1101"
    });
    $.__views.__alloyId1100.add($.__views.__alloyId1101);
    $.__views.__alloyId1102 = Ti.UI.createLabel({
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1102"
    });
    $.__views.__alloyId1100.add($.__views.__alloyId1102);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;