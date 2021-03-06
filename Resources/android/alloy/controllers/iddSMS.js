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
    this.__controllerPath = "iddSMS";
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
    $.__views.iddSMS = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "iddSMS"
    });
    $.__views.iddSMS && $.addTopLevelView($.__views.iddSMS);
    $.__views.__alloyId897 = Alloy.createController("_header", {
        id: "__alloyId897",
        __parentSymbol: $.__views.iddSMS
    });
    $.__views.__alloyId897.setParent($.__views.iddSMS);
    $.__views.__alloyId898 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId898"
    });
    $.__views.iddSMS.add($.__views.__alloyId898);
    $.__views.__alloyId899 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId899"
    });
    $.__views.__alloyId898.add($.__views.__alloyId899);
    $.__views.__alloyId900 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId900"
    });
    $.__views.__alloyId898.add($.__views.__alloyId900);
    back ? $.__views.__alloyId900.addEventListener("click", back) : __defers["$.__views.__alloyId900!click!back"] = true;
    $.__views.__alloyId901 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId901"
    });
    $.__views.iddSMS.add($.__views.__alloyId901);
    $.__views.__alloyId902 = Ti.UI.createLabel({
        text: "IDD SMS",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId902"
    });
    $.__views.__alloyId901.add($.__views.__alloyId902);
    var __alloyId903 = [];
    $.__views.__alloyId904 = Ti.UI.createTableViewSection({
        id: "__alloyId904"
    });
    __alloyId903.push($.__views.__alloyId904);
    $.__views.__alloyId905 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId905"
    });
    $.__views.__alloyId904.add($.__views.__alloyId905);
    $.__views.__alloyId906 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId906"
    });
    $.__views.__alloyId905.add($.__views.__alloyId906);
    $.__views.__alloyId907 = Ti.UI.createLabel({
        text: "01/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId907"
    });
    $.__views.__alloyId906.add($.__views.__alloyId907);
    $.__views.__alloyId908 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId908"
    });
    $.__views.__alloyId905.add($.__views.__alloyId908);
    $.__views.__alloyId909 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId909"
    });
    $.__views.__alloyId908.add($.__views.__alloyId909);
    $.__views.__alloyId910 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId910"
    });
    $.__views.__alloyId905.add($.__views.__alloyId910);
    $.__views.__alloyId911 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId911"
    });
    $.__views.__alloyId910.add($.__views.__alloyId911);
    $.__views.__alloyId912 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId912"
    });
    $.__views.__alloyId904.add($.__views.__alloyId912);
    $.__views.__alloyId913 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId913"
    });
    $.__views.__alloyId912.add($.__views.__alloyId913);
    $.__views.__alloyId914 = Ti.UI.createLabel({
        text: "02/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId914"
    });
    $.__views.__alloyId913.add($.__views.__alloyId914);
    $.__views.__alloyId915 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId915"
    });
    $.__views.__alloyId912.add($.__views.__alloyId915);
    $.__views.__alloyId916 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId916"
    });
    $.__views.__alloyId915.add($.__views.__alloyId916);
    $.__views.__alloyId917 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId917"
    });
    $.__views.__alloyId912.add($.__views.__alloyId917);
    $.__views.__alloyId918 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId918"
    });
    $.__views.__alloyId917.add($.__views.__alloyId918);
    $.__views.__alloyId919 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId919"
    });
    $.__views.__alloyId904.add($.__views.__alloyId919);
    $.__views.__alloyId920 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId920"
    });
    $.__views.__alloyId919.add($.__views.__alloyId920);
    $.__views.__alloyId921 = Ti.UI.createLabel({
        text: "03/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId921"
    });
    $.__views.__alloyId920.add($.__views.__alloyId921);
    $.__views.__alloyId922 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId922"
    });
    $.__views.__alloyId919.add($.__views.__alloyId922);
    $.__views.__alloyId923 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId923"
    });
    $.__views.__alloyId922.add($.__views.__alloyId923);
    $.__views.__alloyId924 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId924"
    });
    $.__views.__alloyId919.add($.__views.__alloyId924);
    $.__views.__alloyId925 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId925"
    });
    $.__views.__alloyId924.add($.__views.__alloyId925);
    $.__views.__alloyId926 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId926"
    });
    $.__views.__alloyId904.add($.__views.__alloyId926);
    $.__views.__alloyId927 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId927"
    });
    $.__views.__alloyId926.add($.__views.__alloyId927);
    $.__views.__alloyId928 = Ti.UI.createLabel({
        text: "04/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId928"
    });
    $.__views.__alloyId927.add($.__views.__alloyId928);
    $.__views.__alloyId929 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId929"
    });
    $.__views.__alloyId926.add($.__views.__alloyId929);
    $.__views.__alloyId930 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId930"
    });
    $.__views.__alloyId929.add($.__views.__alloyId930);
    $.__views.__alloyId931 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId931"
    });
    $.__views.__alloyId926.add($.__views.__alloyId931);
    $.__views.__alloyId932 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId932"
    });
    $.__views.__alloyId931.add($.__views.__alloyId932);
    $.__views.__alloyId933 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId933"
    });
    $.__views.__alloyId904.add($.__views.__alloyId933);
    $.__views.__alloyId934 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId934"
    });
    $.__views.__alloyId933.add($.__views.__alloyId934);
    $.__views.__alloyId935 = Ti.UI.createLabel({
        text: "05/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId935"
    });
    $.__views.__alloyId934.add($.__views.__alloyId935);
    $.__views.__alloyId936 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId936"
    });
    $.__views.__alloyId933.add($.__views.__alloyId936);
    $.__views.__alloyId937 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId937"
    });
    $.__views.__alloyId936.add($.__views.__alloyId937);
    $.__views.__alloyId938 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId938"
    });
    $.__views.__alloyId933.add($.__views.__alloyId938);
    $.__views.__alloyId939 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId939"
    });
    $.__views.__alloyId938.add($.__views.__alloyId939);
    $.__views.__alloyId940 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId940"
    });
    $.__views.__alloyId904.add($.__views.__alloyId940);
    $.__views.__alloyId941 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId941"
    });
    $.__views.__alloyId940.add($.__views.__alloyId941);
    $.__views.__alloyId942 = Ti.UI.createLabel({
        text: "06/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId942"
    });
    $.__views.__alloyId941.add($.__views.__alloyId942);
    $.__views.__alloyId943 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId943"
    });
    $.__views.__alloyId940.add($.__views.__alloyId943);
    $.__views.__alloyId944 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId944"
    });
    $.__views.__alloyId943.add($.__views.__alloyId944);
    $.__views.__alloyId945 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId945"
    });
    $.__views.__alloyId940.add($.__views.__alloyId945);
    $.__views.__alloyId946 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId946"
    });
    $.__views.__alloyId945.add($.__views.__alloyId946);
    $.__views.__alloyId947 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId947"
    });
    $.__views.__alloyId904.add($.__views.__alloyId947);
    $.__views.__alloyId948 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId948"
    });
    $.__views.__alloyId947.add($.__views.__alloyId948);
    $.__views.__alloyId949 = Ti.UI.createLabel({
        text: "07/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId949"
    });
    $.__views.__alloyId948.add($.__views.__alloyId949);
    $.__views.__alloyId950 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId950"
    });
    $.__views.__alloyId947.add($.__views.__alloyId950);
    $.__views.__alloyId951 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId951"
    });
    $.__views.__alloyId950.add($.__views.__alloyId951);
    $.__views.__alloyId952 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId952"
    });
    $.__views.__alloyId947.add($.__views.__alloyId952);
    $.__views.__alloyId953 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId953"
    });
    $.__views.__alloyId952.add($.__views.__alloyId953);
    $.__views.__alloyId954 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId954"
    });
    $.__views.__alloyId904.add($.__views.__alloyId954);
    $.__views.__alloyId955 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId955"
    });
    $.__views.__alloyId954.add($.__views.__alloyId955);
    $.__views.__alloyId956 = Ti.UI.createLabel({
        text: "08/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId956"
    });
    $.__views.__alloyId955.add($.__views.__alloyId956);
    $.__views.__alloyId957 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId957"
    });
    $.__views.__alloyId954.add($.__views.__alloyId957);
    $.__views.__alloyId958 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId958"
    });
    $.__views.__alloyId957.add($.__views.__alloyId958);
    $.__views.__alloyId959 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId959"
    });
    $.__views.__alloyId954.add($.__views.__alloyId959);
    $.__views.__alloyId960 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId960"
    });
    $.__views.__alloyId959.add($.__views.__alloyId960);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId903,
        id: "table",
        scrollable: "true"
    });
    $.__views.iddSMS.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId900!click!back"] && $.__views.__alloyId900.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;