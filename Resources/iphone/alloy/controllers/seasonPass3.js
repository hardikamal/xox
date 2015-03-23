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
<<<<<<< HEAD
    $.__views.__alloyId2035 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId2218 = Ti.UI.createView({
=======
    $.__views.__alloyId1626 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
<<<<<<< HEAD
        id: "__alloyId2035"
    });
    $.__views.scrollView.add($.__views.__alloyId2035);
    $.__views.__alloyId2036 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId2218"
    });
    $.__views.scrollView.add($.__views.__alloyId2218);
    $.__views.__alloyId2219 = Ti.UI.createView({
=======
        id: "__alloyId1626"
    });
    $.__views.scrollView.add($.__views.__alloyId1626);
    $.__views.__alloyId1627 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
<<<<<<< HEAD
        id: "__alloyId2036"
=======
<<<<<<< HEAD
        id: "__alloyId2219"
    });
    $.__views.__alloyId2218.add($.__views.__alloyId2219);
    $.__views.__alloyId2220 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2220"
    });
    $.__views.__alloyId2219.add($.__views.__alloyId2220);
    $.__views.__alloyId2221 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2221"
    });
    $.__views.__alloyId2220.add($.__views.__alloyId2221);
    $.__views.__alloyId2222 = Ti.UI.createLabel({
=======
        id: "__alloyId1627"
>>>>>>> origin/master
    });
    $.__views.__alloyId2035.add($.__views.__alloyId2036);
    $.__views.__alloyId2037 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2037"
    });
    $.__views.__alloyId2036.add($.__views.__alloyId2037);
    $.__views.__alloyId2038 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2038"
    });
<<<<<<< HEAD
    $.__views.__alloyId2037.add($.__views.__alloyId2038);
    $.__views.__alloyId2039 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1628.add($.__views.__alloyId1629);
    $.__views.__alloyId1630 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2039"
    });
    $.__views.__alloyId2038.add($.__views.__alloyId2039);
    $.__views.__alloyId2040 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2222"
    });
    $.__views.__alloyId2221.add($.__views.__alloyId2222);
    $.__views.__alloyId2223 = Ti.UI.createLabel({
=======
        id: "__alloyId1630"
    });
    $.__views.__alloyId1629.add($.__views.__alloyId1630);
    $.__views.__alloyId1631 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2040"
=======
<<<<<<< HEAD
        id: "__alloyId2223"
    });
    $.__views.__alloyId2221.add($.__views.__alloyId2223);
    $.__views.__alloyId2224 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2224"
    });
    $.__views.__alloyId2219.add($.__views.__alloyId2224);
    $.__views.__alloyId2225 = Ti.UI.createView({
=======
        id: "__alloyId1631"
>>>>>>> origin/master
    });
    $.__views.__alloyId2038.add($.__views.__alloyId2040);
    $.__views.__alloyId2041 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2041"
    });
<<<<<<< HEAD
    $.__views.__alloyId2036.add($.__views.__alloyId2041);
    $.__views.__alloyId2042 = Ti.UI.createView({
=======
    $.__views.__alloyId1627.add($.__views.__alloyId1632);
    $.__views.__alloyId1633 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
<<<<<<< HEAD
        id: "__alloyId2042"
    });
    $.__views.__alloyId2041.add($.__views.__alloyId2042);
    $.__views.__alloyId2043 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2225"
    });
    $.__views.__alloyId2224.add($.__views.__alloyId2225);
    $.__views.__alloyId2226 = Ti.UI.createLabel({
=======
        id: "__alloyId1633"
    });
    $.__views.__alloyId1632.add($.__views.__alloyId1633);
    $.__views.__alloyId1634 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2043"
    });
    $.__views.__alloyId2042.add($.__views.__alloyId2043);
    $.__views.__alloyId2044 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2226"
    });
    $.__views.__alloyId2225.add($.__views.__alloyId2226);
    $.__views.__alloyId2227 = Ti.UI.createLabel({
=======
        id: "__alloyId1634"
    });
    $.__views.__alloyId1633.add($.__views.__alloyId1634);
    $.__views.__alloyId1635 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2044"
    });
    $.__views.__alloyId2042.add($.__views.__alloyId2044);
    $.__views.__alloyId2045 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId2227"
    });
    $.__views.__alloyId2225.add($.__views.__alloyId2227);
    $.__views.__alloyId2228 = Ti.UI.createView({
=======
        id: "__alloyId1635"
    });
    $.__views.__alloyId1633.add($.__views.__alloyId1635);
    $.__views.__alloyId1636 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
<<<<<<< HEAD
        id: "__alloyId2045"
    });
    $.__views.__alloyId2035.add($.__views.__alloyId2045);
    $.__views.__alloyId2046 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2228"
    });
    $.__views.__alloyId2218.add($.__views.__alloyId2228);
    $.__views.__alloyId2229 = Ti.UI.createLabel({
=======
        id: "__alloyId1636"
    });
    $.__views.__alloyId1626.add($.__views.__alloyId1636);
    $.__views.__alloyId1637 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2046"
    });
    $.__views.__alloyId2045.add($.__views.__alloyId2046);
    $.__views.__alloyId2047 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId2229"
    });
    $.__views.__alloyId2228.add($.__views.__alloyId2229);
    $.__views.__alloyId2230 = Ti.UI.createView({
=======
        id: "__alloyId1637"
    });
    $.__views.__alloyId1636.add($.__views.__alloyId1637);
    $.__views.__alloyId1638 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
<<<<<<< HEAD
        id: "__alloyId2047"
=======
<<<<<<< HEAD
        id: "__alloyId2230"
    });
    $.__views.__alloyId2218.add($.__views.__alloyId2230);
    $.__views.__alloyId2231 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2231"
    });
    $.__views.__alloyId2230.add($.__views.__alloyId2231);
    $.__views.__alloyId2232 = Ti.UI.createLabel({
=======
        id: "__alloyId1638"
>>>>>>> origin/master
    });
    $.__views.__alloyId2035.add($.__views.__alloyId2047);
    $.__views.__alloyId2048 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2048"
    });
<<<<<<< HEAD
    $.__views.__alloyId2047.add($.__views.__alloyId2048);
    $.__views.__alloyId2049 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1638.add($.__views.__alloyId1639);
    $.__views.__alloyId1640 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2049"
    });
    $.__views.__alloyId2048.add($.__views.__alloyId2049);
    $.__views.__alloyId2050 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2232"
    });
    $.__views.__alloyId2231.add($.__views.__alloyId2232);
    $.__views.__alloyId2233 = Ti.UI.createLabel({
=======
        id: "__alloyId1640"
    });
    $.__views.__alloyId1639.add($.__views.__alloyId1640);
    $.__views.__alloyId1641 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2050"
    });
    $.__views.__alloyId2048.add($.__views.__alloyId2050);
    $.__views.__alloyId2051 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId2233"
    });
    $.__views.__alloyId2231.add($.__views.__alloyId2233);
    $.__views.__alloyId2234 = Ti.UI.createView({
=======
        id: "__alloyId1641"
    });
    $.__views.__alloyId1639.add($.__views.__alloyId1641);
    $.__views.__alloyId1642 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId2051"
    });
    $.__views.scrollView.add($.__views.__alloyId2051);
    $.__views.__alloyId2052 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId2234"
    });
    $.__views.scrollView.add($.__views.__alloyId2234);
    $.__views.__alloyId2235 = Ti.UI.createView({
=======
        id: "__alloyId1642"
    });
    $.__views.scrollView.add($.__views.__alloyId1642);
    $.__views.__alloyId1643 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
<<<<<<< HEAD
        id: "__alloyId2052"
=======
<<<<<<< HEAD
        id: "__alloyId2235"
    });
    $.__views.__alloyId2234.add($.__views.__alloyId2235);
    $.__views.__alloyId2236 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2236"
    });
    $.__views.__alloyId2235.add($.__views.__alloyId2236);
    $.__views.__alloyId2237 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2237"
    });
    $.__views.__alloyId2236.add($.__views.__alloyId2237);
    $.__views.__alloyId2238 = Ti.UI.createLabel({
=======
        id: "__alloyId1643"
>>>>>>> origin/master
    });
    $.__views.__alloyId2051.add($.__views.__alloyId2052);
    $.__views.__alloyId2053 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2053"
    });
    $.__views.__alloyId2052.add($.__views.__alloyId2053);
    $.__views.__alloyId2054 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2054"
    });
<<<<<<< HEAD
    $.__views.__alloyId2053.add($.__views.__alloyId2054);
    $.__views.__alloyId2055 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1644.add($.__views.__alloyId1645);
    $.__views.__alloyId1646 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2055"
    });
    $.__views.__alloyId2054.add($.__views.__alloyId2055);
    $.__views.__alloyId2056 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2238"
    });
    $.__views.__alloyId2237.add($.__views.__alloyId2238);
    $.__views.__alloyId2239 = Ti.UI.createLabel({
=======
        id: "__alloyId1646"
    });
    $.__views.__alloyId1645.add($.__views.__alloyId1646);
    $.__views.__alloyId1647 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2056"
=======
<<<<<<< HEAD
        id: "__alloyId2239"
    });
    $.__views.__alloyId2237.add($.__views.__alloyId2239);
    $.__views.__alloyId2240 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2240"
    });
    $.__views.__alloyId2235.add($.__views.__alloyId2240);
    $.__views.__alloyId2241 = Ti.UI.createView({
=======
        id: "__alloyId1647"
>>>>>>> origin/master
    });
    $.__views.__alloyId2054.add($.__views.__alloyId2056);
    $.__views.__alloyId2057 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2057"
    });
<<<<<<< HEAD
    $.__views.__alloyId2052.add($.__views.__alloyId2057);
    $.__views.__alloyId2058 = Ti.UI.createView({
=======
    $.__views.__alloyId1643.add($.__views.__alloyId1648);
    $.__views.__alloyId1649 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
<<<<<<< HEAD
        id: "__alloyId2058"
    });
    $.__views.__alloyId2057.add($.__views.__alloyId2058);
    $.__views.__alloyId2059 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2241"
    });
    $.__views.__alloyId2240.add($.__views.__alloyId2241);
    $.__views.__alloyId2242 = Ti.UI.createLabel({
=======
        id: "__alloyId1649"
    });
    $.__views.__alloyId1648.add($.__views.__alloyId1649);
    $.__views.__alloyId1650 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2059"
    });
    $.__views.__alloyId2058.add($.__views.__alloyId2059);
    $.__views.__alloyId2060 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2242"
    });
    $.__views.__alloyId2241.add($.__views.__alloyId2242);
    $.__views.__alloyId2243 = Ti.UI.createLabel({
=======
        id: "__alloyId1650"
    });
    $.__views.__alloyId1649.add($.__views.__alloyId1650);
    $.__views.__alloyId1651 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2060"
    });
    $.__views.__alloyId2058.add($.__views.__alloyId2060);
    $.__views.__alloyId2061 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId2243"
    });
    $.__views.__alloyId2241.add($.__views.__alloyId2243);
    $.__views.__alloyId2244 = Ti.UI.createView({
=======
        id: "__alloyId1651"
    });
    $.__views.__alloyId1649.add($.__views.__alloyId1651);
    $.__views.__alloyId1652 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
<<<<<<< HEAD
        id: "__alloyId2061"
    });
    $.__views.__alloyId2051.add($.__views.__alloyId2061);
    $.__views.__alloyId2062 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2244"
    });
    $.__views.__alloyId2234.add($.__views.__alloyId2244);
    $.__views.__alloyId2245 = Ti.UI.createLabel({
=======
        id: "__alloyId1652"
    });
    $.__views.__alloyId1642.add($.__views.__alloyId1652);
    $.__views.__alloyId1653 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2062"
    });
    $.__views.__alloyId2061.add($.__views.__alloyId2062);
    $.__views.__alloyId2063 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId2245"
    });
    $.__views.__alloyId2244.add($.__views.__alloyId2245);
    $.__views.__alloyId2246 = Ti.UI.createView({
=======
        id: "__alloyId1653"
    });
    $.__views.__alloyId1652.add($.__views.__alloyId1653);
    $.__views.__alloyId1654 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
<<<<<<< HEAD
        id: "__alloyId2063"
=======
<<<<<<< HEAD
        id: "__alloyId2246"
    });
    $.__views.__alloyId2234.add($.__views.__alloyId2246);
    $.__views.__alloyId2247 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2247"
    });
    $.__views.__alloyId2246.add($.__views.__alloyId2247);
    $.__views.__alloyId2248 = Ti.UI.createLabel({
=======
        id: "__alloyId1654"
>>>>>>> origin/master
    });
    $.__views.__alloyId2051.add($.__views.__alloyId2063);
    $.__views.__alloyId2064 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2064"
    });
<<<<<<< HEAD
    $.__views.__alloyId2063.add($.__views.__alloyId2064);
    $.__views.__alloyId2065 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1654.add($.__views.__alloyId1655);
    $.__views.__alloyId1656 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2065"
    });
    $.__views.__alloyId2064.add($.__views.__alloyId2065);
    $.__views.__alloyId2066 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2248"
    });
    $.__views.__alloyId2247.add($.__views.__alloyId2248);
    $.__views.__alloyId2249 = Ti.UI.createLabel({
=======
        id: "__alloyId1656"
    });
    $.__views.__alloyId1655.add($.__views.__alloyId1656);
    $.__views.__alloyId1657 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2066"
    });
    $.__views.__alloyId2064.add($.__views.__alloyId2066);
=======
<<<<<<< HEAD
        id: "__alloyId2249"
    });
    $.__views.__alloyId2247.add($.__views.__alloyId2249);
=======
        id: "__alloyId1657"
    });
    $.__views.__alloyId1655.add($.__views.__alloyId1657);
>>>>>>> origin/master
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;