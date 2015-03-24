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
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
    $.__views.__alloyId2250 = Alloy.createController("_header", {
        id: "__alloyId2250",
        __parentSymbol: $.__views.roamingCalls
    });
    $.__views.__alloyId2250.setParent($.__views.roamingCalls);
    $.__views.__alloyId2251 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId2251"
    });
    $.__views.roamingCalls.add($.__views.__alloyId2251);
    $.__views.__alloyId2252 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2252"
    });
    $.__views.__alloyId2251.add($.__views.__alloyId2252);
    $.__views.__alloyId2253 = Ti.UI.createImageView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2025"
    });
    $.__views.__alloyId2024.add($.__views.__alloyId2025);
    $.__views.__alloyId2026 = Ti.UI.createImageView({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
        id: "__alloyId2253"
    });
    $.__views.__alloyId2251.add($.__views.__alloyId2253);
    back ? $.__views.__alloyId2253.addEventListener("click", back) : __defers["$.__views.__alloyId2253!click!back"] = true;
    $.__views.__alloyId2254 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId2254"
    });
    $.__views.roamingCalls.add($.__views.__alloyId2254);
    $.__views.__alloyId2255 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Roaming Calls",
        textAlign: "center",
        color: "black",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2255"
    });
    $.__views.__alloyId2254.add($.__views.__alloyId2255);
    var __alloyId2256 = [];
    $.__views.__alloyId2257 = Ti.UI.createTableViewSection({
        id: "__alloyId2257"
    });
    __alloyId2256.push($.__views.__alloyId2257);
    $.__views.__alloyId2258 = Ti.UI.createTableViewRow({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2028"
    });
    $.__views.__alloyId2027.add($.__views.__alloyId2028);
    var __alloyId2029 = [];
    $.__views.__alloyId2030 = Ti.UI.createTableViewSection({
        id: "__alloyId2030"
    });
    __alloyId2029.push($.__views.__alloyId2030);
    $.__views.__alloyId2031 = Ti.UI.createTableViewRow({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
        id: "__alloyId2258"
    });
    $.__views.__alloyId2257.add($.__views.__alloyId2258);
    $.__views.__alloyId2259 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2259"
    });
    $.__views.__alloyId2258.add($.__views.__alloyId2259);
    $.__views.__alloyId2260 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "01/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
        id: "__alloyId2260"
    });
    $.__views.__alloyId2259.add($.__views.__alloyId2260);
    $.__views.__alloyId2261 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2261"
    });
    $.__views.__alloyId2258.add($.__views.__alloyId2261);
    $.__views.__alloyId2262 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
        id: "__alloyId2262"
    });
    $.__views.__alloyId2261.add($.__views.__alloyId2262);
    $.__views.__alloyId2263 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2263"
    });
    $.__views.__alloyId2258.add($.__views.__alloyId2263);
    $.__views.__alloyId2264 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2264"
    });
    $.__views.__alloyId2263.add($.__views.__alloyId2264);
    $.__views.__alloyId2265 = Ti.UI.createTableViewRow({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2037"
    });
    $.__views.__alloyId2036.add($.__views.__alloyId2037);
    $.__views.__alloyId2038 = Ti.UI.createTableViewRow({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
        id: "__alloyId2265"
    });
    $.__views.__alloyId2257.add($.__views.__alloyId2265);
    $.__views.__alloyId2266 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2266"
    });
    $.__views.__alloyId2265.add($.__views.__alloyId2266);
    $.__views.__alloyId2267 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "02/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2040"
    });
=======
<<<<<<< HEAD
        id: "__alloyId2267"
    });
    $.__views.__alloyId2266.add($.__views.__alloyId2267);
    $.__views.__alloyId2268 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2268"
    });
    $.__views.__alloyId2265.add($.__views.__alloyId2268);
    $.__views.__alloyId2269 = Ti.UI.createLabel({
=======
        id: "__alloyId2040"
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId2039.add($.__views.__alloyId2040);
    $.__views.__alloyId2041 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2041"
    });
    $.__views.__alloyId2038.add($.__views.__alloyId2041);
    $.__views.__alloyId2042 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2269"
    });
    $.__views.__alloyId2268.add($.__views.__alloyId2269);
    $.__views.__alloyId2270 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2270"
    });
    $.__views.__alloyId2265.add($.__views.__alloyId2270);
    $.__views.__alloyId2271 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2044"
    });
    $.__views.__alloyId2043.add($.__views.__alloyId2044);
    $.__views.__alloyId2045 = Ti.UI.createTableViewRow({
=======
<<<<<<< HEAD
        id: "__alloyId2271"
    });
    $.__views.__alloyId2270.add($.__views.__alloyId2271);
    $.__views.__alloyId2272 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId2044"
    });
    $.__views.__alloyId2043.add($.__views.__alloyId2044);
    $.__views.__alloyId2045 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2272"
    });
    $.__views.__alloyId2257.add($.__views.__alloyId2272);
    $.__views.__alloyId2273 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2273"
    });
    $.__views.__alloyId2272.add($.__views.__alloyId2273);
    $.__views.__alloyId2274 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "03/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
        id: "__alloyId2274"
    });
    $.__views.__alloyId2273.add($.__views.__alloyId2274);
    $.__views.__alloyId2275 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2275"
    });
    $.__views.__alloyId2272.add($.__views.__alloyId2275);
    $.__views.__alloyId2276 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
        id: "__alloyId2276"
    });
    $.__views.__alloyId2275.add($.__views.__alloyId2276);
    $.__views.__alloyId2277 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2277"
    });
    $.__views.__alloyId2272.add($.__views.__alloyId2277);
    $.__views.__alloyId2278 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2278"
    });
    $.__views.__alloyId2277.add($.__views.__alloyId2278);
    $.__views.__alloyId2279 = Ti.UI.createTableViewRow({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2051"
    });
    $.__views.__alloyId2050.add($.__views.__alloyId2051);
    $.__views.__alloyId2052 = Ti.UI.createTableViewRow({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2279"
    });
    $.__views.__alloyId2257.add($.__views.__alloyId2279);
    $.__views.__alloyId2280 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2280"
    });
    $.__views.__alloyId2279.add($.__views.__alloyId2280);
    $.__views.__alloyId2281 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "04/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
        id: "__alloyId2281"
    });
    $.__views.__alloyId2280.add($.__views.__alloyId2281);
    $.__views.__alloyId2282 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2282"
    });
    $.__views.__alloyId2279.add($.__views.__alloyId2282);
    $.__views.__alloyId2283 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2283"
    });
    $.__views.__alloyId2282.add($.__views.__alloyId2283);
    $.__views.__alloyId2284 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2284"
    });
    $.__views.__alloyId2279.add($.__views.__alloyId2284);
    $.__views.__alloyId2285 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2285"
    });
    $.__views.__alloyId2284.add($.__views.__alloyId2285);
    $.__views.__alloyId2286 = Ti.UI.createTableViewRow({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2058"
    });
    $.__views.__alloyId2057.add($.__views.__alloyId2058);
    $.__views.__alloyId2059 = Ti.UI.createTableViewRow({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
        id: "__alloyId2286"
    });
    $.__views.__alloyId2257.add($.__views.__alloyId2286);
    $.__views.__alloyId2287 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2287"
    });
    $.__views.__alloyId2286.add($.__views.__alloyId2287);
    $.__views.__alloyId2288 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "05/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
        id: "__alloyId2288"
    });
    $.__views.__alloyId2287.add($.__views.__alloyId2288);
    $.__views.__alloyId2289 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2289"
    });
    $.__views.__alloyId2286.add($.__views.__alloyId2289);
    $.__views.__alloyId2290 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2290"
    });
    $.__views.__alloyId2289.add($.__views.__alloyId2290);
    $.__views.__alloyId2291 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2291"
    });
    $.__views.__alloyId2286.add($.__views.__alloyId2291);
    $.__views.__alloyId2292 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2292"
    });
    $.__views.__alloyId2291.add($.__views.__alloyId2292);
    $.__views.__alloyId2293 = Ti.UI.createTableViewRow({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2065"
    });
    $.__views.__alloyId2064.add($.__views.__alloyId2065);
    $.__views.__alloyId2066 = Ti.UI.createTableViewRow({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2293"
    });
    $.__views.__alloyId2257.add($.__views.__alloyId2293);
    $.__views.__alloyId2294 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2294"
    });
    $.__views.__alloyId2293.add($.__views.__alloyId2294);
    $.__views.__alloyId2295 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "06/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2295"
    });
    $.__views.__alloyId2294.add($.__views.__alloyId2295);
    $.__views.__alloyId2296 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2296"
    });
    $.__views.__alloyId2293.add($.__views.__alloyId2296);
    $.__views.__alloyId2297 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
        id: "__alloyId2297"
    });
    $.__views.__alloyId2296.add($.__views.__alloyId2297);
    $.__views.__alloyId2298 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2298"
    });
    $.__views.__alloyId2293.add($.__views.__alloyId2298);
    $.__views.__alloyId2299 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2299"
    });
    $.__views.__alloyId2298.add($.__views.__alloyId2299);
    $.__views.__alloyId2300 = Ti.UI.createTableViewRow({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2072"
    });
    $.__views.__alloyId2071.add($.__views.__alloyId2072);
    $.__views.__alloyId2073 = Ti.UI.createTableViewRow({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2300"
    });
    $.__views.__alloyId2257.add($.__views.__alloyId2300);
    $.__views.__alloyId2301 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2301"
    });
    $.__views.__alloyId2300.add($.__views.__alloyId2301);
    $.__views.__alloyId2302 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "07/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
        id: "__alloyId2302"
    });
    $.__views.__alloyId2301.add($.__views.__alloyId2302);
    $.__views.__alloyId2303 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2303"
    });
    $.__views.__alloyId2300.add($.__views.__alloyId2303);
    $.__views.__alloyId2304 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
        id: "__alloyId2304"
    });
    $.__views.__alloyId2303.add($.__views.__alloyId2304);
    $.__views.__alloyId2305 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2305"
    });
    $.__views.__alloyId2300.add($.__views.__alloyId2305);
    $.__views.__alloyId2306 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2306"
    });
    $.__views.__alloyId2305.add($.__views.__alloyId2306);
    $.__views.__alloyId2307 = Ti.UI.createTableViewRow({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2079"
    });
    $.__views.__alloyId2078.add($.__views.__alloyId2079);
    $.__views.__alloyId2080 = Ti.UI.createTableViewRow({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2307"
    });
    $.__views.__alloyId2257.add($.__views.__alloyId2307);
    $.__views.__alloyId2308 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2308"
    });
    $.__views.__alloyId2307.add($.__views.__alloyId2308);
    $.__views.__alloyId2309 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "08/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
        id: "__alloyId2309"
    });
    $.__views.__alloyId2308.add($.__views.__alloyId2309);
    $.__views.__alloyId2310 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2310"
    });
    $.__views.__alloyId2307.add($.__views.__alloyId2310);
    $.__views.__alloyId2311 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
        id: "__alloyId2311"
    });
    $.__views.__alloyId2310.add($.__views.__alloyId2311);
    $.__views.__alloyId2312 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2312"
    });
    $.__views.__alloyId2307.add($.__views.__alloyId2312);
    $.__views.__alloyId2313 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2086"
    });
    $.__views.__alloyId2085.add($.__views.__alloyId2086);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId2029,
=======
<<<<<<< HEAD
        id: "__alloyId2313"
    });
    $.__views.__alloyId2312.add($.__views.__alloyId2313);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId2256,
=======
        id: "__alloyId2086"
    });
    $.__views.__alloyId2085.add($.__views.__alloyId2086);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId2029,
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "table",
        scrollable: "true"
    });
    $.__views.roamingCalls.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
<<<<<<< HEAD
    __defers["$.__views.__alloyId2026!click!back"] && $.__views.__alloyId2026.addEventListener("click", back);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId2253!click!back"] && $.__views.__alloyId2253.addEventListener("click", back);
=======
    __defers["$.__views.__alloyId2026!click!back"] && $.__views.__alloyId2026.addEventListener("click", back);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;