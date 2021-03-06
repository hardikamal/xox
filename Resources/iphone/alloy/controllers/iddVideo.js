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
    this.__controllerPath = "iddVideo";
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
    $.__views.iddVideo = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "iddVideo"
    });
    $.__views.iddVideo && $.addTopLevelView($.__views.iddVideo);
    $.__views.__alloyId938 = Alloy.createController("_header", {
        id: "__alloyId938",
        __parentSymbol: $.__views.iddVideo
    });
    $.__views.__alloyId938.setParent($.__views.iddVideo);
    $.__views.__alloyId939 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId939"
    });
    $.__views.iddVideo.add($.__views.__alloyId939);
    $.__views.__alloyId940 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId940"
    });
    $.__views.__alloyId939.add($.__views.__alloyId940);
    $.__views.__alloyId941 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId941"
    });
    $.__views.__alloyId939.add($.__views.__alloyId941);
    back ? $.__views.__alloyId941.addEventListener("click", back) : __defers["$.__views.__alloyId941!click!back"] = true;
    $.__views.__alloyId942 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId942"
    });
    $.__views.iddVideo.add($.__views.__alloyId942);
    $.__views.__alloyId943 = Ti.UI.createLabel({
        text: "IDD Video Calls",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId943"
    });
    $.__views.__alloyId942.add($.__views.__alloyId943);
    var __alloyId944 = [];
    $.__views.__alloyId945 = Ti.UI.createTableViewSection({
        id: "__alloyId945"
    });
    __alloyId944.push($.__views.__alloyId945);
    $.__views.__alloyId946 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId946"
    });
    $.__views.__alloyId945.add($.__views.__alloyId946);
    $.__views.__alloyId947 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId947"
    });
    $.__views.__alloyId946.add($.__views.__alloyId947);
    $.__views.__alloyId948 = Ti.UI.createLabel({
        text: "01/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId948"
    });
    $.__views.__alloyId947.add($.__views.__alloyId948);
    $.__views.__alloyId949 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId949"
    });
    $.__views.__alloyId946.add($.__views.__alloyId949);
    $.__views.__alloyId950 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId950"
    });
    $.__views.__alloyId949.add($.__views.__alloyId950);
    $.__views.__alloyId951 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId951"
    });
    $.__views.__alloyId946.add($.__views.__alloyId951);
    $.__views.__alloyId952 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId952"
    });
    $.__views.__alloyId951.add($.__views.__alloyId952);
    $.__views.__alloyId953 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId953"
    });
    $.__views.__alloyId945.add($.__views.__alloyId953);
    $.__views.__alloyId954 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId954"
    });
    $.__views.__alloyId953.add($.__views.__alloyId954);
    $.__views.__alloyId955 = Ti.UI.createLabel({
        text: "02/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId955"
    });
    $.__views.__alloyId954.add($.__views.__alloyId955);
    $.__views.__alloyId956 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId956"
    });
    $.__views.__alloyId953.add($.__views.__alloyId956);
    $.__views.__alloyId957 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId957"
    });
    $.__views.__alloyId956.add($.__views.__alloyId957);
    $.__views.__alloyId958 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId958"
    });
    $.__views.__alloyId953.add($.__views.__alloyId958);
    $.__views.__alloyId959 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId959"
    });
    $.__views.__alloyId958.add($.__views.__alloyId959);
    $.__views.__alloyId960 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId960"
    });
    $.__views.__alloyId945.add($.__views.__alloyId960);
    $.__views.__alloyId961 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId961"
    });
    $.__views.__alloyId960.add($.__views.__alloyId961);
    $.__views.__alloyId962 = Ti.UI.createLabel({
        text: "03/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId962"
    });
    $.__views.__alloyId961.add($.__views.__alloyId962);
    $.__views.__alloyId963 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId963"
    });
    $.__views.__alloyId960.add($.__views.__alloyId963);
    $.__views.__alloyId964 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId964"
    });
    $.__views.__alloyId963.add($.__views.__alloyId964);
    $.__views.__alloyId965 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId965"
    });
    $.__views.__alloyId960.add($.__views.__alloyId965);
    $.__views.__alloyId966 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId966"
    });
    $.__views.__alloyId965.add($.__views.__alloyId966);
    $.__views.__alloyId967 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId967"
    });
    $.__views.__alloyId945.add($.__views.__alloyId967);
    $.__views.__alloyId968 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId968"
    });
    $.__views.__alloyId967.add($.__views.__alloyId968);
    $.__views.__alloyId969 = Ti.UI.createLabel({
        text: "04/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId969"
    });
    $.__views.__alloyId968.add($.__views.__alloyId969);
    $.__views.__alloyId970 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId970"
    });
    $.__views.__alloyId967.add($.__views.__alloyId970);
    $.__views.__alloyId971 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId971"
    });
    $.__views.__alloyId970.add($.__views.__alloyId971);
    $.__views.__alloyId972 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId972"
    });
    $.__views.__alloyId967.add($.__views.__alloyId972);
    $.__views.__alloyId973 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId973"
    });
    $.__views.__alloyId972.add($.__views.__alloyId973);
    $.__views.__alloyId974 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId974"
    });
    $.__views.__alloyId945.add($.__views.__alloyId974);
    $.__views.__alloyId975 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId975"
    });
    $.__views.__alloyId974.add($.__views.__alloyId975);
    $.__views.__alloyId976 = Ti.UI.createLabel({
        text: "05/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId976"
    });
    $.__views.__alloyId975.add($.__views.__alloyId976);
    $.__views.__alloyId977 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId977"
    });
    $.__views.__alloyId974.add($.__views.__alloyId977);
    $.__views.__alloyId978 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId978"
    });
    $.__views.__alloyId977.add($.__views.__alloyId978);
    $.__views.__alloyId979 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId979"
    });
    $.__views.__alloyId974.add($.__views.__alloyId979);
    $.__views.__alloyId980 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId980"
    });
    $.__views.__alloyId979.add($.__views.__alloyId980);
    $.__views.__alloyId981 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId981"
    });
    $.__views.__alloyId945.add($.__views.__alloyId981);
    $.__views.__alloyId982 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId982"
    });
    $.__views.__alloyId981.add($.__views.__alloyId982);
    $.__views.__alloyId983 = Ti.UI.createLabel({
        text: "06/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId983"
    });
    $.__views.__alloyId982.add($.__views.__alloyId983);
    $.__views.__alloyId984 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId984"
    });
    $.__views.__alloyId981.add($.__views.__alloyId984);
    $.__views.__alloyId985 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId985"
    });
    $.__views.__alloyId984.add($.__views.__alloyId985);
    $.__views.__alloyId986 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId986"
    });
    $.__views.__alloyId981.add($.__views.__alloyId986);
    $.__views.__alloyId987 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId987"
    });
    $.__views.__alloyId986.add($.__views.__alloyId987);
    $.__views.__alloyId988 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId988"
    });
    $.__views.__alloyId945.add($.__views.__alloyId988);
    $.__views.__alloyId989 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId989"
    });
    $.__views.__alloyId988.add($.__views.__alloyId989);
    $.__views.__alloyId990 = Ti.UI.createLabel({
        text: "07/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId990"
    });
    $.__views.__alloyId989.add($.__views.__alloyId990);
    $.__views.__alloyId991 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId991"
    });
    $.__views.__alloyId988.add($.__views.__alloyId991);
    $.__views.__alloyId992 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId992"
    });
    $.__views.__alloyId991.add($.__views.__alloyId992);
    $.__views.__alloyId993 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId993"
    });
    $.__views.__alloyId988.add($.__views.__alloyId993);
    $.__views.__alloyId994 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId994"
    });
    $.__views.__alloyId993.add($.__views.__alloyId994);
    $.__views.__alloyId995 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId995"
    });
    $.__views.__alloyId945.add($.__views.__alloyId995);
    $.__views.__alloyId996 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId996"
    });
    $.__views.__alloyId995.add($.__views.__alloyId996);
    $.__views.__alloyId997 = Ti.UI.createLabel({
        text: "08/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId997"
    });
    $.__views.__alloyId996.add($.__views.__alloyId997);
    $.__views.__alloyId998 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId998"
    });
    $.__views.__alloyId995.add($.__views.__alloyId998);
    $.__views.__alloyId999 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId999"
    });
    $.__views.__alloyId998.add($.__views.__alloyId999);
    $.__views.__alloyId1000 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1000"
    });
    $.__views.__alloyId995.add($.__views.__alloyId1000);
    $.__views.__alloyId1001 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1001"
    });
    $.__views.__alloyId1000.add($.__views.__alloyId1001);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId944,
        id: "table",
        scrollable: "true"
    });
    $.__views.iddVideo.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId941!click!back"] && $.__views.__alloyId941.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;