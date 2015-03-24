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
    $.__views.__alloyId2023 = Alloy.createController("_header", {
        id: "__alloyId2023",
        __parentSymbol: $.__views.roamingCalls
    });
    $.__views.__alloyId2023.setParent($.__views.roamingCalls);
    $.__views.__alloyId2024 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId2024"
    });
    $.__views.roamingCalls.add($.__views.__alloyId2024);
    $.__views.__alloyId2025 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2025"
    });
    $.__views.__alloyId2024.add($.__views.__alloyId2025);
    $.__views.__alloyId2026 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2026"
    });
    $.__views.__alloyId2024.add($.__views.__alloyId2026);
    back ? $.__views.__alloyId2026.addEventListener("click", back) : __defers["$.__views.__alloyId2026!click!back"] = true;
    $.__views.__alloyId2027 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId2027"
    });
    $.__views.roamingCalls.add($.__views.__alloyId2027);
    $.__views.__alloyId2028 = Ti.UI.createLabel({
        text: "Roaming Calls",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId2028"
    });
    $.__views.__alloyId2027.add($.__views.__alloyId2028);
    var __alloyId2029 = [];
    $.__views.__alloyId2030 = Ti.UI.createTableViewSection({
        id: "__alloyId2030"
    });
    __alloyId2029.push($.__views.__alloyId2030);
    $.__views.__alloyId2031 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2031"
    });
    $.__views.__alloyId2030.add($.__views.__alloyId2031);
    $.__views.__alloyId2032 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2032"
    });
    $.__views.__alloyId2031.add($.__views.__alloyId2032);
    $.__views.__alloyId2033 = Ti.UI.createLabel({
        text: "01/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2033"
    });
    $.__views.__alloyId2032.add($.__views.__alloyId2033);
    $.__views.__alloyId2034 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2034"
    });
    $.__views.__alloyId2031.add($.__views.__alloyId2034);
    $.__views.__alloyId2035 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2035"
    });
    $.__views.__alloyId2034.add($.__views.__alloyId2035);
    $.__views.__alloyId2036 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2036"
    });
    $.__views.__alloyId2031.add($.__views.__alloyId2036);
    $.__views.__alloyId2037 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2037"
    });
    $.__views.__alloyId2036.add($.__views.__alloyId2037);
    $.__views.__alloyId2038 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2038"
    });
    $.__views.__alloyId2030.add($.__views.__alloyId2038);
    $.__views.__alloyId2039 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2039"
    });
    $.__views.__alloyId2038.add($.__views.__alloyId2039);
    $.__views.__alloyId2040 = Ti.UI.createLabel({
        text: "02/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2040"
    });
    $.__views.__alloyId2039.add($.__views.__alloyId2040);
    $.__views.__alloyId2041 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2041"
    });
    $.__views.__alloyId2038.add($.__views.__alloyId2041);
    $.__views.__alloyId2042 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2042"
    });
    $.__views.__alloyId2041.add($.__views.__alloyId2042);
    $.__views.__alloyId2043 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2043"
    });
    $.__views.__alloyId2038.add($.__views.__alloyId2043);
    $.__views.__alloyId2044 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2044"
    });
    $.__views.__alloyId2043.add($.__views.__alloyId2044);
    $.__views.__alloyId2045 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2045"
    });
    $.__views.__alloyId2030.add($.__views.__alloyId2045);
    $.__views.__alloyId2046 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2046"
    });
    $.__views.__alloyId2045.add($.__views.__alloyId2046);
    $.__views.__alloyId2047 = Ti.UI.createLabel({
        text: "03/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2047"
    });
    $.__views.__alloyId2046.add($.__views.__alloyId2047);
    $.__views.__alloyId2048 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2048"
    });
    $.__views.__alloyId2045.add($.__views.__alloyId2048);
    $.__views.__alloyId2049 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2049"
    });
    $.__views.__alloyId2048.add($.__views.__alloyId2049);
    $.__views.__alloyId2050 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2050"
    });
    $.__views.__alloyId2045.add($.__views.__alloyId2050);
    $.__views.__alloyId2051 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2051"
    });
    $.__views.__alloyId2050.add($.__views.__alloyId2051);
    $.__views.__alloyId2052 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2052"
    });
    $.__views.__alloyId2030.add($.__views.__alloyId2052);
    $.__views.__alloyId2053 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2053"
    });
    $.__views.__alloyId2052.add($.__views.__alloyId2053);
    $.__views.__alloyId2054 = Ti.UI.createLabel({
        text: "04/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2054"
    });
    $.__views.__alloyId2053.add($.__views.__alloyId2054);
    $.__views.__alloyId2055 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2055"
    });
    $.__views.__alloyId2052.add($.__views.__alloyId2055);
    $.__views.__alloyId2056 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2056"
    });
    $.__views.__alloyId2055.add($.__views.__alloyId2056);
    $.__views.__alloyId2057 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2057"
    });
    $.__views.__alloyId2052.add($.__views.__alloyId2057);
    $.__views.__alloyId2058 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2058"
    });
    $.__views.__alloyId2057.add($.__views.__alloyId2058);
    $.__views.__alloyId2059 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2059"
    });
    $.__views.__alloyId2030.add($.__views.__alloyId2059);
    $.__views.__alloyId2060 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2060"
    });
    $.__views.__alloyId2059.add($.__views.__alloyId2060);
    $.__views.__alloyId2061 = Ti.UI.createLabel({
        text: "05/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2061"
    });
    $.__views.__alloyId2060.add($.__views.__alloyId2061);
    $.__views.__alloyId2062 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2062"
    });
    $.__views.__alloyId2059.add($.__views.__alloyId2062);
    $.__views.__alloyId2063 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2063"
    });
    $.__views.__alloyId2062.add($.__views.__alloyId2063);
    $.__views.__alloyId2064 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2064"
    });
    $.__views.__alloyId2059.add($.__views.__alloyId2064);
    $.__views.__alloyId2065 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2065"
    });
    $.__views.__alloyId2064.add($.__views.__alloyId2065);
    $.__views.__alloyId2066 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2066"
    });
    $.__views.__alloyId2030.add($.__views.__alloyId2066);
    $.__views.__alloyId2067 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2067"
    });
    $.__views.__alloyId2066.add($.__views.__alloyId2067);
    $.__views.__alloyId2068 = Ti.UI.createLabel({
        text: "06/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2068"
    });
    $.__views.__alloyId2067.add($.__views.__alloyId2068);
    $.__views.__alloyId2069 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2069"
    });
    $.__views.__alloyId2066.add($.__views.__alloyId2069);
    $.__views.__alloyId2070 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2070"
    });
    $.__views.__alloyId2069.add($.__views.__alloyId2070);
    $.__views.__alloyId2071 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2071"
    });
    $.__views.__alloyId2066.add($.__views.__alloyId2071);
    $.__views.__alloyId2072 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2072"
    });
    $.__views.__alloyId2071.add($.__views.__alloyId2072);
    $.__views.__alloyId2073 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2073"
    });
    $.__views.__alloyId2030.add($.__views.__alloyId2073);
    $.__views.__alloyId2074 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2074"
    });
    $.__views.__alloyId2073.add($.__views.__alloyId2074);
    $.__views.__alloyId2075 = Ti.UI.createLabel({
        text: "07/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2075"
    });
    $.__views.__alloyId2074.add($.__views.__alloyId2075);
    $.__views.__alloyId2076 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2076"
    });
    $.__views.__alloyId2073.add($.__views.__alloyId2076);
    $.__views.__alloyId2077 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2077"
    });
    $.__views.__alloyId2076.add($.__views.__alloyId2077);
    $.__views.__alloyId2078 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2078"
    });
    $.__views.__alloyId2073.add($.__views.__alloyId2078);
    $.__views.__alloyId2079 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2079"
    });
    $.__views.__alloyId2078.add($.__views.__alloyId2079);
    $.__views.__alloyId2080 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2080"
    });
    $.__views.__alloyId2030.add($.__views.__alloyId2080);
    $.__views.__alloyId2081 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2081"
    });
    $.__views.__alloyId2080.add($.__views.__alloyId2081);
    $.__views.__alloyId2082 = Ti.UI.createLabel({
        text: "08/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2082"
    });
    $.__views.__alloyId2081.add($.__views.__alloyId2082);
    $.__views.__alloyId2083 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2083"
    });
    $.__views.__alloyId2080.add($.__views.__alloyId2083);
    $.__views.__alloyId2084 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2084"
    });
    $.__views.__alloyId2083.add($.__views.__alloyId2084);
    $.__views.__alloyId2085 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2085"
    });
    $.__views.__alloyId2080.add($.__views.__alloyId2085);
    $.__views.__alloyId2086 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2086"
    });
    $.__views.__alloyId2085.add($.__views.__alloyId2086);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId2029,
        id: "table",
        scrollable: "true"
    });
    $.__views.roamingCalls.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2026!click!back"] && $.__views.__alloyId2026.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;