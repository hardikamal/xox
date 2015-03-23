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
    this.__controllerPath = "roamingCalls";
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
    $.__views.roamingCalls = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "roamingCalls"
    });
    $.__views.roamingCalls && $.addTopLevelView($.__views.roamingCalls);
    $.__views.__alloyId2069 = Alloy.createController("_header", {
        id: "__alloyId2069",
        __parentSymbol: $.__views.roamingCalls
    });
    $.__views.__alloyId2069.setParent($.__views.roamingCalls);
    $.__views.__alloyId2070 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId2070"
    });
    $.__views.roamingCalls.add($.__views.__alloyId2070);
    $.__views.__alloyId2071 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2071"
    });
    $.__views.__alloyId2070.add($.__views.__alloyId2071);
    $.__views.__alloyId2072 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2072"
    });
    $.__views.__alloyId2070.add($.__views.__alloyId2072);
    back ? $.__views.__alloyId2072.addEventListener("click", back) : __defers["$.__views.__alloyId2072!click!back"] = true;
    $.__views.__alloyId2073 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId2073"
    });
    $.__views.roamingCalls.add($.__views.__alloyId2073);
    $.__views.__alloyId2074 = Ti.UI.createLabel({
        text: "Roaming Calls",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId2074"
    });
    $.__views.__alloyId2073.add($.__views.__alloyId2074);
    var __alloyId2075 = [];
    $.__views.__alloyId2076 = Ti.UI.createTableViewSection({
        id: "__alloyId2076"
    });
    __alloyId2075.push($.__views.__alloyId2076);
    $.__views.__alloyId2077 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2077"
    });
    $.__views.__alloyId2076.add($.__views.__alloyId2077);
    $.__views.__alloyId2078 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2078"
    });
    $.__views.__alloyId2077.add($.__views.__alloyId2078);
    $.__views.__alloyId2079 = Ti.UI.createLabel({
        text: "01/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2079"
    });
    $.__views.__alloyId2078.add($.__views.__alloyId2079);
    $.__views.__alloyId2080 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2080"
    });
    $.__views.__alloyId2077.add($.__views.__alloyId2080);
    $.__views.__alloyId2081 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2081"
    });
    $.__views.__alloyId2080.add($.__views.__alloyId2081);
    $.__views.__alloyId2082 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2082"
    });
    $.__views.__alloyId2077.add($.__views.__alloyId2082);
    $.__views.__alloyId2083 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2083"
    });
    $.__views.__alloyId2082.add($.__views.__alloyId2083);
    $.__views.__alloyId2084 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2084"
    });
    $.__views.__alloyId2076.add($.__views.__alloyId2084);
    $.__views.__alloyId2085 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2085"
    });
    $.__views.__alloyId2084.add($.__views.__alloyId2085);
    $.__views.__alloyId2086 = Ti.UI.createLabel({
        text: "02/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2086"
    });
    $.__views.__alloyId2085.add($.__views.__alloyId2086);
    $.__views.__alloyId2087 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2087"
    });
    $.__views.__alloyId2084.add($.__views.__alloyId2087);
    $.__views.__alloyId2088 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2088"
    });
    $.__views.__alloyId2087.add($.__views.__alloyId2088);
    $.__views.__alloyId2089 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2089"
    });
    $.__views.__alloyId2084.add($.__views.__alloyId2089);
    $.__views.__alloyId2090 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2090"
    });
    $.__views.__alloyId2089.add($.__views.__alloyId2090);
    $.__views.__alloyId2091 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2091"
    });
    $.__views.__alloyId2076.add($.__views.__alloyId2091);
    $.__views.__alloyId2092 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2092"
    });
    $.__views.__alloyId2091.add($.__views.__alloyId2092);
    $.__views.__alloyId2093 = Ti.UI.createLabel({
        text: "03/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2093"
    });
    $.__views.__alloyId2092.add($.__views.__alloyId2093);
    $.__views.__alloyId2094 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2094"
    });
    $.__views.__alloyId2091.add($.__views.__alloyId2094);
    $.__views.__alloyId2095 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2095"
    });
    $.__views.__alloyId2094.add($.__views.__alloyId2095);
    $.__views.__alloyId2096 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2096"
    });
    $.__views.__alloyId2091.add($.__views.__alloyId2096);
    $.__views.__alloyId2097 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2097"
    });
    $.__views.__alloyId2096.add($.__views.__alloyId2097);
    $.__views.__alloyId2098 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2098"
    });
    $.__views.__alloyId2076.add($.__views.__alloyId2098);
    $.__views.__alloyId2099 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2099"
    });
    $.__views.__alloyId2098.add($.__views.__alloyId2099);
    $.__views.__alloyId2100 = Ti.UI.createLabel({
        text: "04/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2100"
    });
    $.__views.__alloyId2099.add($.__views.__alloyId2100);
    $.__views.__alloyId2101 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2101"
    });
    $.__views.__alloyId2098.add($.__views.__alloyId2101);
    $.__views.__alloyId2102 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2102"
    });
    $.__views.__alloyId2101.add($.__views.__alloyId2102);
    $.__views.__alloyId2103 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2103"
    });
    $.__views.__alloyId2098.add($.__views.__alloyId2103);
    $.__views.__alloyId2104 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2104"
    });
    $.__views.__alloyId2103.add($.__views.__alloyId2104);
    $.__views.__alloyId2105 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2105"
    });
    $.__views.__alloyId2076.add($.__views.__alloyId2105);
    $.__views.__alloyId2106 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2106"
    });
    $.__views.__alloyId2105.add($.__views.__alloyId2106);
    $.__views.__alloyId2107 = Ti.UI.createLabel({
        text: "05/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2107"
    });
    $.__views.__alloyId2106.add($.__views.__alloyId2107);
    $.__views.__alloyId2108 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2108"
    });
    $.__views.__alloyId2105.add($.__views.__alloyId2108);
    $.__views.__alloyId2109 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2109"
    });
    $.__views.__alloyId2108.add($.__views.__alloyId2109);
    $.__views.__alloyId2110 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2110"
    });
    $.__views.__alloyId2105.add($.__views.__alloyId2110);
    $.__views.__alloyId2111 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2111"
    });
    $.__views.__alloyId2110.add($.__views.__alloyId2111);
    $.__views.__alloyId2112 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2112"
    });
    $.__views.__alloyId2076.add($.__views.__alloyId2112);
    $.__views.__alloyId2113 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2113"
    });
    $.__views.__alloyId2112.add($.__views.__alloyId2113);
    $.__views.__alloyId2114 = Ti.UI.createLabel({
        text: "06/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2114"
    });
    $.__views.__alloyId2113.add($.__views.__alloyId2114);
    $.__views.__alloyId2115 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2115"
    });
    $.__views.__alloyId2112.add($.__views.__alloyId2115);
    $.__views.__alloyId2116 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2116"
    });
    $.__views.__alloyId2115.add($.__views.__alloyId2116);
    $.__views.__alloyId2117 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2117"
    });
    $.__views.__alloyId2112.add($.__views.__alloyId2117);
    $.__views.__alloyId2118 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2118"
    });
    $.__views.__alloyId2117.add($.__views.__alloyId2118);
    $.__views.__alloyId2119 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2119"
    });
    $.__views.__alloyId2076.add($.__views.__alloyId2119);
    $.__views.__alloyId2120 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2120"
    });
    $.__views.__alloyId2119.add($.__views.__alloyId2120);
    $.__views.__alloyId2121 = Ti.UI.createLabel({
        text: "07/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2121"
    });
    $.__views.__alloyId2120.add($.__views.__alloyId2121);
    $.__views.__alloyId2122 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2122"
    });
    $.__views.__alloyId2119.add($.__views.__alloyId2122);
    $.__views.__alloyId2123 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2123"
    });
    $.__views.__alloyId2122.add($.__views.__alloyId2123);
    $.__views.__alloyId2124 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2124"
    });
    $.__views.__alloyId2119.add($.__views.__alloyId2124);
    $.__views.__alloyId2125 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2125"
    });
    $.__views.__alloyId2124.add($.__views.__alloyId2125);
    $.__views.__alloyId2126 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2126"
    });
    $.__views.__alloyId2076.add($.__views.__alloyId2126);
    $.__views.__alloyId2127 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2127"
    });
    $.__views.__alloyId2126.add($.__views.__alloyId2127);
    $.__views.__alloyId2128 = Ti.UI.createLabel({
        text: "08/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2128"
    });
    $.__views.__alloyId2127.add($.__views.__alloyId2128);
    $.__views.__alloyId2129 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2129"
    });
    $.__views.__alloyId2126.add($.__views.__alloyId2129);
    $.__views.__alloyId2130 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2130"
    });
    $.__views.__alloyId2129.add($.__views.__alloyId2130);
    $.__views.__alloyId2131 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2131"
    });
    $.__views.__alloyId2126.add($.__views.__alloyId2131);
    $.__views.__alloyId2132 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2132"
    });
    $.__views.__alloyId2131.add($.__views.__alloyId2132);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId2075,
        id: "table",
        scrollable: "true"
    });
    $.__views.roamingCalls.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2072!click!back"] && $.__views.__alloyId2072.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;