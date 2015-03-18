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
    this.__controllerPath = "seasonPass1";
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
    $.__views.__alloyId1007 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        id: "__alloyId1007"
    });
    $.__views.scrollView.add($.__views.__alloyId1007);
    $.__views.__alloyId1008 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1008"
    });
    $.__views.__alloyId1007.add($.__views.__alloyId1008);
    $.__views.__alloyId1009 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId1009"
    });
    $.__views.__alloyId1008.add($.__views.__alloyId1009);
    $.__views.__alloyId1010 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1010"
    });
    $.__views.__alloyId1009.add($.__views.__alloyId1010);
    $.__views.__alloyId1011 = Ti.UI.createLabel({
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1011"
    });
    $.__views.__alloyId1010.add($.__views.__alloyId1011);
    $.__views.__alloyId1012 = Ti.UI.createLabel({
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1012"
    });
    $.__views.__alloyId1010.add($.__views.__alloyId1012);
    $.__views.__alloyId1013 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId1013"
    });
    $.__views.__alloyId1008.add($.__views.__alloyId1013);
    $.__views.__alloyId1014 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId1014"
    });
    $.__views.__alloyId1013.add($.__views.__alloyId1014);
    $.__views.__alloyId1015 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1015"
    });
    $.__views.__alloyId1014.add($.__views.__alloyId1015);
    $.__views.__alloyId1016 = Ti.UI.createLabel({
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1016"
    });
    $.__views.__alloyId1014.add($.__views.__alloyId1016);
    $.__views.__alloyId1017 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId1017"
    });
    $.__views.__alloyId1007.add($.__views.__alloyId1017);
    $.__views.__alloyId1018 = Ti.UI.createLabel({
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId1018"
    });
    $.__views.__alloyId1017.add($.__views.__alloyId1018);
    $.__views.__alloyId1019 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1019"
    });
    $.__views.__alloyId1007.add($.__views.__alloyId1019);
    $.__views.__alloyId1020 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1020"
    });
    $.__views.__alloyId1019.add($.__views.__alloyId1020);
    $.__views.__alloyId1021 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1021"
    });
    $.__views.__alloyId1020.add($.__views.__alloyId1021);
    $.__views.__alloyId1022 = Ti.UI.createLabel({
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1022"
    });
    $.__views.__alloyId1020.add($.__views.__alloyId1022);
    $.__views.__alloyId1023 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
        id: "__alloyId1023"
    });
    $.__views.scrollView.add($.__views.__alloyId1023);
    $.__views.__alloyId1024 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1024"
    });
    $.__views.__alloyId1023.add($.__views.__alloyId1024);
    $.__views.__alloyId1025 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId1025"
    });
    $.__views.__alloyId1024.add($.__views.__alloyId1025);
    $.__views.__alloyId1026 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1026"
    });
    $.__views.__alloyId1025.add($.__views.__alloyId1026);
    $.__views.__alloyId1027 = Ti.UI.createLabel({
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1027"
    });
    $.__views.__alloyId1026.add($.__views.__alloyId1027);
    $.__views.__alloyId1028 = Ti.UI.createLabel({
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1028"
    });
    $.__views.__alloyId1026.add($.__views.__alloyId1028);
    $.__views.__alloyId1029 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId1029"
    });
    $.__views.__alloyId1024.add($.__views.__alloyId1029);
    $.__views.__alloyId1030 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId1030"
    });
    $.__views.__alloyId1029.add($.__views.__alloyId1030);
    $.__views.__alloyId1031 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1031"
    });
    $.__views.__alloyId1030.add($.__views.__alloyId1031);
    $.__views.__alloyId1032 = Ti.UI.createLabel({
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1032"
    });
    $.__views.__alloyId1030.add($.__views.__alloyId1032);
    $.__views.__alloyId1033 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId1033"
    });
    $.__views.__alloyId1023.add($.__views.__alloyId1033);
    $.__views.__alloyId1034 = Ti.UI.createLabel({
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId1034"
    });
    $.__views.__alloyId1033.add($.__views.__alloyId1034);
    $.__views.__alloyId1035 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1035"
    });
    $.__views.__alloyId1023.add($.__views.__alloyId1035);
    $.__views.__alloyId1036 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1036"
    });
    $.__views.__alloyId1035.add($.__views.__alloyId1036);
    $.__views.__alloyId1037 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1037"
    });
    $.__views.__alloyId1036.add($.__views.__alloyId1037);
    $.__views.__alloyId1038 = Ti.UI.createLabel({
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1038"
    });
    $.__views.__alloyId1036.add($.__views.__alloyId1038);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;