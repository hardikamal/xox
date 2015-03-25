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
        "prepaid" == Alloy.Globals.userPlan ? DRAWER.navigation("prepaidStatement", 1) : DRAWER.navigation("postpaidStatement", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "iddVoice";
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
    $.__views.iddVoice = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "iddVoice"
    });
    $.__views.iddVoice && $.addTopLevelView($.__views.iddVoice);
    $.__views.__alloyId1025 = Alloy.createController("_header", {
        id: "__alloyId1025",
        __parentSymbol: $.__views.iddVoice
    });
    $.__views.__alloyId1025.setParent($.__views.iddVoice);
    $.__views.__alloyId1026 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1026"
    });
    $.__views.iddVoice.add($.__views.__alloyId1026);
    $.__views.__alloyId1027 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1027"
    });
    $.__views.__alloyId1026.add($.__views.__alloyId1027);
    $.__views.__alloyId1028 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1028"
    });
    $.__views.__alloyId1026.add($.__views.__alloyId1028);
    back ? $.__views.__alloyId1028.addEventListener("click", back) : __defers["$.__views.__alloyId1028!click!back"] = true;
    $.__views.__alloyId1029 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1029"
    });
    $.__views.iddVoice.add($.__views.__alloyId1029);
    $.__views.__alloyId1030 = Ti.UI.createLabel({
        text: "IDD Voice Calls",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId1030"
    });
    $.__views.__alloyId1029.add($.__views.__alloyId1030);
    var __alloyId1031 = [];
    $.__views.__alloyId1032 = Ti.UI.createTableViewSection({
        id: "__alloyId1032"
    });
    __alloyId1031.push($.__views.__alloyId1032);
    $.__views.__alloyId1033 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId1033"
    });
    $.__views.__alloyId1032.add($.__views.__alloyId1033);
    $.__views.__alloyId1034 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1034"
    });
    $.__views.__alloyId1033.add($.__views.__alloyId1034);
    $.__views.__alloyId1035 = Ti.UI.createLabel({
        text: "01/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1035"
    });
    $.__views.__alloyId1034.add($.__views.__alloyId1035);
    $.__views.__alloyId1036 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId1036"
    });
    $.__views.__alloyId1033.add($.__views.__alloyId1036);
    $.__views.__alloyId1037 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1037"
    });
    $.__views.__alloyId1036.add($.__views.__alloyId1037);
    $.__views.__alloyId1038 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1038"
    });
    $.__views.__alloyId1033.add($.__views.__alloyId1038);
    $.__views.__alloyId1039 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1039"
    });
    $.__views.__alloyId1038.add($.__views.__alloyId1039);
    $.__views.__alloyId1040 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId1040"
    });
    $.__views.__alloyId1032.add($.__views.__alloyId1040);
    $.__views.__alloyId1041 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1041"
    });
    $.__views.__alloyId1040.add($.__views.__alloyId1041);
    $.__views.__alloyId1042 = Ti.UI.createLabel({
        text: "02/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1042"
    });
    $.__views.__alloyId1041.add($.__views.__alloyId1042);
    $.__views.__alloyId1043 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId1043"
    });
    $.__views.__alloyId1040.add($.__views.__alloyId1043);
    $.__views.__alloyId1044 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1044"
    });
    $.__views.__alloyId1043.add($.__views.__alloyId1044);
    $.__views.__alloyId1045 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1045"
    });
    $.__views.__alloyId1040.add($.__views.__alloyId1045);
    $.__views.__alloyId1046 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1046"
    });
    $.__views.__alloyId1045.add($.__views.__alloyId1046);
    $.__views.__alloyId1047 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId1047"
    });
    $.__views.__alloyId1032.add($.__views.__alloyId1047);
    $.__views.__alloyId1048 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1048"
    });
    $.__views.__alloyId1047.add($.__views.__alloyId1048);
    $.__views.__alloyId1049 = Ti.UI.createLabel({
        text: "03/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1049"
    });
    $.__views.__alloyId1048.add($.__views.__alloyId1049);
    $.__views.__alloyId1050 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId1050"
    });
    $.__views.__alloyId1047.add($.__views.__alloyId1050);
    $.__views.__alloyId1051 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1051"
    });
    $.__views.__alloyId1050.add($.__views.__alloyId1051);
    $.__views.__alloyId1052 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1052"
    });
    $.__views.__alloyId1047.add($.__views.__alloyId1052);
    $.__views.__alloyId1053 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1053"
    });
    $.__views.__alloyId1052.add($.__views.__alloyId1053);
    $.__views.__alloyId1054 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId1054"
    });
    $.__views.__alloyId1032.add($.__views.__alloyId1054);
    $.__views.__alloyId1055 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1055"
    });
    $.__views.__alloyId1054.add($.__views.__alloyId1055);
    $.__views.__alloyId1056 = Ti.UI.createLabel({
        text: "04/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1056"
    });
    $.__views.__alloyId1055.add($.__views.__alloyId1056);
    $.__views.__alloyId1057 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId1057"
    });
    $.__views.__alloyId1054.add($.__views.__alloyId1057);
    $.__views.__alloyId1058 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1058"
    });
    $.__views.__alloyId1057.add($.__views.__alloyId1058);
    $.__views.__alloyId1059 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1059"
    });
    $.__views.__alloyId1054.add($.__views.__alloyId1059);
    $.__views.__alloyId1060 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1060"
    });
    $.__views.__alloyId1059.add($.__views.__alloyId1060);
    $.__views.__alloyId1061 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId1061"
    });
    $.__views.__alloyId1032.add($.__views.__alloyId1061);
    $.__views.__alloyId1062 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1062"
    });
    $.__views.__alloyId1061.add($.__views.__alloyId1062);
    $.__views.__alloyId1063 = Ti.UI.createLabel({
        text: "05/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1063"
    });
    $.__views.__alloyId1062.add($.__views.__alloyId1063);
    $.__views.__alloyId1064 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId1064"
    });
    $.__views.__alloyId1061.add($.__views.__alloyId1064);
    $.__views.__alloyId1065 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1065"
    });
    $.__views.__alloyId1064.add($.__views.__alloyId1065);
    $.__views.__alloyId1066 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1066"
    });
    $.__views.__alloyId1061.add($.__views.__alloyId1066);
    $.__views.__alloyId1067 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1067"
    });
    $.__views.__alloyId1066.add($.__views.__alloyId1067);
    $.__views.__alloyId1068 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId1068"
    });
    $.__views.__alloyId1032.add($.__views.__alloyId1068);
    $.__views.__alloyId1069 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1069"
    });
    $.__views.__alloyId1068.add($.__views.__alloyId1069);
    $.__views.__alloyId1070 = Ti.UI.createLabel({
        text: "06/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1070"
    });
    $.__views.__alloyId1069.add($.__views.__alloyId1070);
    $.__views.__alloyId1071 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId1071"
    });
    $.__views.__alloyId1068.add($.__views.__alloyId1071);
    $.__views.__alloyId1072 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1072"
    });
    $.__views.__alloyId1071.add($.__views.__alloyId1072);
    $.__views.__alloyId1073 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1073"
    });
    $.__views.__alloyId1068.add($.__views.__alloyId1073);
    $.__views.__alloyId1074 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1074"
    });
    $.__views.__alloyId1073.add($.__views.__alloyId1074);
    $.__views.__alloyId1075 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId1075"
    });
    $.__views.__alloyId1032.add($.__views.__alloyId1075);
    $.__views.__alloyId1076 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1076"
    });
    $.__views.__alloyId1075.add($.__views.__alloyId1076);
    $.__views.__alloyId1077 = Ti.UI.createLabel({
        text: "07/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1077"
    });
    $.__views.__alloyId1076.add($.__views.__alloyId1077);
    $.__views.__alloyId1078 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId1078"
    });
    $.__views.__alloyId1075.add($.__views.__alloyId1078);
    $.__views.__alloyId1079 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1079"
    });
    $.__views.__alloyId1078.add($.__views.__alloyId1079);
    $.__views.__alloyId1080 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1080"
    });
    $.__views.__alloyId1075.add($.__views.__alloyId1080);
    $.__views.__alloyId1081 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1081"
    });
    $.__views.__alloyId1080.add($.__views.__alloyId1081);
    $.__views.__alloyId1082 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId1082"
    });
    $.__views.__alloyId1032.add($.__views.__alloyId1082);
    $.__views.__alloyId1083 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1083"
    });
    $.__views.__alloyId1082.add($.__views.__alloyId1083);
    $.__views.__alloyId1084 = Ti.UI.createLabel({
        text: "08/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1084"
    });
    $.__views.__alloyId1083.add($.__views.__alloyId1084);
    $.__views.__alloyId1085 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId1085"
    });
    $.__views.__alloyId1082.add($.__views.__alloyId1085);
    $.__views.__alloyId1086 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1086"
    });
    $.__views.__alloyId1085.add($.__views.__alloyId1086);
    $.__views.__alloyId1087 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1087"
    });
    $.__views.__alloyId1082.add($.__views.__alloyId1087);
    $.__views.__alloyId1088 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1088"
    });
    $.__views.__alloyId1087.add($.__views.__alloyId1088);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId1031,
        id: "table",
        scrollable: "true"
    });
    $.__views.iddVoice.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1028!click!back"] && $.__views.__alloyId1028.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;