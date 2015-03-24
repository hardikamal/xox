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
    $.__views.__alloyId953 = Alloy.createController("_header", {
        id: "__alloyId953",
        __parentSymbol: $.__views.iddVoice
    });
    $.__views.__alloyId953.setParent($.__views.iddVoice);
    $.__views.__alloyId954 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId954"
    });
    $.__views.iddVoice.add($.__views.__alloyId954);
    $.__views.__alloyId955 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId955"
    });
    $.__views.__alloyId954.add($.__views.__alloyId955);
    $.__views.__alloyId956 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId956"
    });
    $.__views.__alloyId954.add($.__views.__alloyId956);
    back ? $.__views.__alloyId956.addEventListener("click", back) : __defers["$.__views.__alloyId956!click!back"] = true;
    $.__views.__alloyId957 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId957"
    });
    $.__views.iddVoice.add($.__views.__alloyId957);
    $.__views.__alloyId958 = Ti.UI.createLabel({
        text: "IDD Voice Calls",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId958"
    });
    $.__views.__alloyId957.add($.__views.__alloyId958);
    var __alloyId959 = [];
    $.__views.__alloyId960 = Ti.UI.createTableViewSection({
        id: "__alloyId960"
    });
    __alloyId959.push($.__views.__alloyId960);
    $.__views.__alloyId961 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId961"
    });
    $.__views.__alloyId960.add($.__views.__alloyId961);
    $.__views.__alloyId962 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId962"
    });
    $.__views.__alloyId961.add($.__views.__alloyId962);
    $.__views.__alloyId963 = Ti.UI.createLabel({
        text: "01/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId963"
    });
    $.__views.__alloyId962.add($.__views.__alloyId963);
    $.__views.__alloyId964 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId964"
    });
    $.__views.__alloyId961.add($.__views.__alloyId964);
    $.__views.__alloyId965 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId965"
    });
    $.__views.__alloyId964.add($.__views.__alloyId965);
    $.__views.__alloyId966 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId966"
    });
    $.__views.__alloyId961.add($.__views.__alloyId966);
    $.__views.__alloyId967 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId967"
    });
    $.__views.__alloyId966.add($.__views.__alloyId967);
    $.__views.__alloyId968 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId968"
    });
    $.__views.__alloyId960.add($.__views.__alloyId968);
    $.__views.__alloyId969 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId969"
    });
    $.__views.__alloyId968.add($.__views.__alloyId969);
    $.__views.__alloyId970 = Ti.UI.createLabel({
        text: "02/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId970"
    });
    $.__views.__alloyId969.add($.__views.__alloyId970);
    $.__views.__alloyId971 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId971"
    });
    $.__views.__alloyId968.add($.__views.__alloyId971);
    $.__views.__alloyId972 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId972"
    });
    $.__views.__alloyId971.add($.__views.__alloyId972);
    $.__views.__alloyId973 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId973"
    });
    $.__views.__alloyId968.add($.__views.__alloyId973);
    $.__views.__alloyId974 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId974"
    });
    $.__views.__alloyId973.add($.__views.__alloyId974);
    $.__views.__alloyId975 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId975"
    });
    $.__views.__alloyId960.add($.__views.__alloyId975);
    $.__views.__alloyId976 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId976"
    });
    $.__views.__alloyId975.add($.__views.__alloyId976);
    $.__views.__alloyId977 = Ti.UI.createLabel({
        text: "03/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId977"
    });
    $.__views.__alloyId976.add($.__views.__alloyId977);
    $.__views.__alloyId978 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId978"
    });
    $.__views.__alloyId975.add($.__views.__alloyId978);
    $.__views.__alloyId979 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId979"
    });
    $.__views.__alloyId978.add($.__views.__alloyId979);
    $.__views.__alloyId980 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId980"
    });
    $.__views.__alloyId975.add($.__views.__alloyId980);
    $.__views.__alloyId981 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId981"
    });
    $.__views.__alloyId980.add($.__views.__alloyId981);
    $.__views.__alloyId982 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId982"
    });
    $.__views.__alloyId960.add($.__views.__alloyId982);
    $.__views.__alloyId983 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId983"
    });
    $.__views.__alloyId982.add($.__views.__alloyId983);
    $.__views.__alloyId984 = Ti.UI.createLabel({
        text: "04/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId984"
    });
    $.__views.__alloyId983.add($.__views.__alloyId984);
    $.__views.__alloyId985 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId985"
    });
    $.__views.__alloyId982.add($.__views.__alloyId985);
    $.__views.__alloyId986 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId986"
    });
    $.__views.__alloyId985.add($.__views.__alloyId986);
    $.__views.__alloyId987 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId987"
    });
    $.__views.__alloyId982.add($.__views.__alloyId987);
    $.__views.__alloyId988 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId988"
    });
    $.__views.__alloyId987.add($.__views.__alloyId988);
    $.__views.__alloyId989 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId989"
    });
    $.__views.__alloyId960.add($.__views.__alloyId989);
    $.__views.__alloyId990 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId990"
    });
    $.__views.__alloyId989.add($.__views.__alloyId990);
    $.__views.__alloyId991 = Ti.UI.createLabel({
        text: "05/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId991"
    });
    $.__views.__alloyId990.add($.__views.__alloyId991);
    $.__views.__alloyId992 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId992"
    });
    $.__views.__alloyId989.add($.__views.__alloyId992);
    $.__views.__alloyId993 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId993"
    });
    $.__views.__alloyId992.add($.__views.__alloyId993);
    $.__views.__alloyId994 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId994"
    });
    $.__views.__alloyId989.add($.__views.__alloyId994);
    $.__views.__alloyId995 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId995"
    });
    $.__views.__alloyId994.add($.__views.__alloyId995);
    $.__views.__alloyId996 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId996"
    });
    $.__views.__alloyId960.add($.__views.__alloyId996);
    $.__views.__alloyId997 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId997"
    });
    $.__views.__alloyId996.add($.__views.__alloyId997);
    $.__views.__alloyId998 = Ti.UI.createLabel({
        text: "06/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId998"
    });
    $.__views.__alloyId997.add($.__views.__alloyId998);
    $.__views.__alloyId999 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId999"
    });
    $.__views.__alloyId996.add($.__views.__alloyId999);
    $.__views.__alloyId1000 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1000"
    });
    $.__views.__alloyId999.add($.__views.__alloyId1000);
    $.__views.__alloyId1001 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1001"
    });
    $.__views.__alloyId996.add($.__views.__alloyId1001);
    $.__views.__alloyId1002 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1002"
    });
    $.__views.__alloyId1001.add($.__views.__alloyId1002);
    $.__views.__alloyId1003 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId1003"
    });
    $.__views.__alloyId960.add($.__views.__alloyId1003);
    $.__views.__alloyId1004 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1004"
    });
    $.__views.__alloyId1003.add($.__views.__alloyId1004);
    $.__views.__alloyId1005 = Ti.UI.createLabel({
        text: "07/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1005"
    });
    $.__views.__alloyId1004.add($.__views.__alloyId1005);
    $.__views.__alloyId1006 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId1006"
    });
    $.__views.__alloyId1003.add($.__views.__alloyId1006);
    $.__views.__alloyId1007 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1007"
    });
    $.__views.__alloyId1006.add($.__views.__alloyId1007);
    $.__views.__alloyId1008 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1008"
    });
    $.__views.__alloyId1003.add($.__views.__alloyId1008);
    $.__views.__alloyId1009 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1009"
    });
    $.__views.__alloyId1008.add($.__views.__alloyId1009);
    $.__views.__alloyId1010 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId1010"
    });
    $.__views.__alloyId960.add($.__views.__alloyId1010);
    $.__views.__alloyId1011 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1011"
    });
    $.__views.__alloyId1010.add($.__views.__alloyId1011);
    $.__views.__alloyId1012 = Ti.UI.createLabel({
        text: "08/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1012"
    });
    $.__views.__alloyId1011.add($.__views.__alloyId1012);
    $.__views.__alloyId1013 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId1013"
    });
    $.__views.__alloyId1010.add($.__views.__alloyId1013);
    $.__views.__alloyId1014 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1014"
    });
    $.__views.__alloyId1013.add($.__views.__alloyId1014);
    $.__views.__alloyId1015 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1015"
    });
    $.__views.__alloyId1010.add($.__views.__alloyId1015);
    $.__views.__alloyId1016 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1016"
    });
    $.__views.__alloyId1015.add($.__views.__alloyId1016);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId959,
        id: "table",
        scrollable: "true"
    });
    $.__views.iddVoice.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId956!click!back"] && $.__views.__alloyId956.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;