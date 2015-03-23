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
    this.__controllerPath = "seasonPass2";
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
    $.__views.__alloyId2003 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId2186 = Ti.UI.createView({
=======
    $.__views.__alloyId1594 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
<<<<<<< HEAD
        id: "__alloyId2003"
    });
    $.__views.scrollView.add($.__views.__alloyId2003);
    $.__views.__alloyId2004 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId2186"
    });
    $.__views.scrollView.add($.__views.__alloyId2186);
    $.__views.__alloyId2187 = Ti.UI.createView({
=======
        id: "__alloyId1594"
    });
    $.__views.scrollView.add($.__views.__alloyId1594);
    $.__views.__alloyId1595 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
<<<<<<< HEAD
        id: "__alloyId2004"
=======
<<<<<<< HEAD
        id: "__alloyId2187"
    });
    $.__views.__alloyId2186.add($.__views.__alloyId2187);
    $.__views.__alloyId2188 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2188"
    });
    $.__views.__alloyId2187.add($.__views.__alloyId2188);
    $.__views.__alloyId2189 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2189"
    });
    $.__views.__alloyId2188.add($.__views.__alloyId2189);
    $.__views.__alloyId2190 = Ti.UI.createLabel({
=======
        id: "__alloyId1595"
>>>>>>> origin/master
    });
    $.__views.__alloyId2003.add($.__views.__alloyId2004);
    $.__views.__alloyId2005 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2005"
    });
    $.__views.__alloyId2004.add($.__views.__alloyId2005);
    $.__views.__alloyId2006 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2006"
    });
<<<<<<< HEAD
    $.__views.__alloyId2005.add($.__views.__alloyId2006);
    $.__views.__alloyId2007 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1596.add($.__views.__alloyId1597);
    $.__views.__alloyId1598 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2007"
    });
    $.__views.__alloyId2006.add($.__views.__alloyId2007);
    $.__views.__alloyId2008 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2190"
    });
    $.__views.__alloyId2189.add($.__views.__alloyId2190);
    $.__views.__alloyId2191 = Ti.UI.createLabel({
=======
        id: "__alloyId1598"
    });
    $.__views.__alloyId1597.add($.__views.__alloyId1598);
    $.__views.__alloyId1599 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2008"
=======
<<<<<<< HEAD
        id: "__alloyId2191"
    });
    $.__views.__alloyId2189.add($.__views.__alloyId2191);
    $.__views.__alloyId2192 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2192"
    });
    $.__views.__alloyId2187.add($.__views.__alloyId2192);
    $.__views.__alloyId2193 = Ti.UI.createView({
=======
        id: "__alloyId1599"
>>>>>>> origin/master
    });
    $.__views.__alloyId2006.add($.__views.__alloyId2008);
    $.__views.__alloyId2009 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2009"
    });
<<<<<<< HEAD
    $.__views.__alloyId2004.add($.__views.__alloyId2009);
    $.__views.__alloyId2010 = Ti.UI.createView({
=======
    $.__views.__alloyId1595.add($.__views.__alloyId1600);
    $.__views.__alloyId1601 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
<<<<<<< HEAD
        id: "__alloyId2010"
    });
    $.__views.__alloyId2009.add($.__views.__alloyId2010);
    $.__views.__alloyId2011 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2193"
    });
    $.__views.__alloyId2192.add($.__views.__alloyId2193);
    $.__views.__alloyId2194 = Ti.UI.createLabel({
=======
        id: "__alloyId1601"
    });
    $.__views.__alloyId1600.add($.__views.__alloyId1601);
    $.__views.__alloyId1602 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2011"
    });
    $.__views.__alloyId2010.add($.__views.__alloyId2011);
    $.__views.__alloyId2012 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2194"
    });
    $.__views.__alloyId2193.add($.__views.__alloyId2194);
    $.__views.__alloyId2195 = Ti.UI.createLabel({
=======
        id: "__alloyId1602"
    });
    $.__views.__alloyId1601.add($.__views.__alloyId1602);
    $.__views.__alloyId1603 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2012"
    });
    $.__views.__alloyId2010.add($.__views.__alloyId2012);
    $.__views.__alloyId2013 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId2195"
    });
    $.__views.__alloyId2193.add($.__views.__alloyId2195);
    $.__views.__alloyId2196 = Ti.UI.createView({
=======
        id: "__alloyId1603"
    });
    $.__views.__alloyId1601.add($.__views.__alloyId1603);
    $.__views.__alloyId1604 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
<<<<<<< HEAD
        id: "__alloyId2013"
    });
    $.__views.__alloyId2003.add($.__views.__alloyId2013);
    $.__views.__alloyId2014 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2196"
    });
    $.__views.__alloyId2186.add($.__views.__alloyId2196);
    $.__views.__alloyId2197 = Ti.UI.createLabel({
=======
        id: "__alloyId1604"
    });
    $.__views.__alloyId1594.add($.__views.__alloyId1604);
    $.__views.__alloyId1605 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2014"
    });
    $.__views.__alloyId2013.add($.__views.__alloyId2014);
    $.__views.__alloyId2015 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId2197"
    });
    $.__views.__alloyId2196.add($.__views.__alloyId2197);
    $.__views.__alloyId2198 = Ti.UI.createView({
=======
        id: "__alloyId1605"
    });
    $.__views.__alloyId1604.add($.__views.__alloyId1605);
    $.__views.__alloyId1606 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
<<<<<<< HEAD
        id: "__alloyId2015"
=======
<<<<<<< HEAD
        id: "__alloyId2198"
    });
    $.__views.__alloyId2186.add($.__views.__alloyId2198);
    $.__views.__alloyId2199 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2199"
    });
    $.__views.__alloyId2198.add($.__views.__alloyId2199);
    $.__views.__alloyId2200 = Ti.UI.createLabel({
=======
        id: "__alloyId1606"
>>>>>>> origin/master
    });
    $.__views.__alloyId2003.add($.__views.__alloyId2015);
    $.__views.__alloyId2016 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2016"
    });
<<<<<<< HEAD
    $.__views.__alloyId2015.add($.__views.__alloyId2016);
    $.__views.__alloyId2017 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1606.add($.__views.__alloyId1607);
    $.__views.__alloyId1608 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2017"
    });
    $.__views.__alloyId2016.add($.__views.__alloyId2017);
    $.__views.__alloyId2018 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2200"
    });
    $.__views.__alloyId2199.add($.__views.__alloyId2200);
    $.__views.__alloyId2201 = Ti.UI.createLabel({
=======
        id: "__alloyId1608"
    });
    $.__views.__alloyId1607.add($.__views.__alloyId1608);
    $.__views.__alloyId1609 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2018"
    });
    $.__views.__alloyId2016.add($.__views.__alloyId2018);
    $.__views.__alloyId2019 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId2201"
    });
    $.__views.__alloyId2199.add($.__views.__alloyId2201);
    $.__views.__alloyId2202 = Ti.UI.createView({
=======
        id: "__alloyId1609"
    });
    $.__views.__alloyId1607.add($.__views.__alloyId1609);
    $.__views.__alloyId1610 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId2019"
    });
    $.__views.scrollView.add($.__views.__alloyId2019);
    $.__views.__alloyId2020 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId2202"
    });
    $.__views.scrollView.add($.__views.__alloyId2202);
    $.__views.__alloyId2203 = Ti.UI.createView({
=======
        id: "__alloyId1610"
    });
    $.__views.scrollView.add($.__views.__alloyId1610);
    $.__views.__alloyId1611 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
<<<<<<< HEAD
        id: "__alloyId2020"
=======
<<<<<<< HEAD
        id: "__alloyId2203"
    });
    $.__views.__alloyId2202.add($.__views.__alloyId2203);
    $.__views.__alloyId2204 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2204"
    });
    $.__views.__alloyId2203.add($.__views.__alloyId2204);
    $.__views.__alloyId2205 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2205"
    });
    $.__views.__alloyId2204.add($.__views.__alloyId2205);
    $.__views.__alloyId2206 = Ti.UI.createLabel({
=======
        id: "__alloyId1611"
>>>>>>> origin/master
    });
    $.__views.__alloyId2019.add($.__views.__alloyId2020);
    $.__views.__alloyId2021 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2021"
    });
    $.__views.__alloyId2020.add($.__views.__alloyId2021);
    $.__views.__alloyId2022 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2022"
    });
<<<<<<< HEAD
    $.__views.__alloyId2021.add($.__views.__alloyId2022);
    $.__views.__alloyId2023 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1612.add($.__views.__alloyId1613);
    $.__views.__alloyId1614 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2023"
    });
    $.__views.__alloyId2022.add($.__views.__alloyId2023);
    $.__views.__alloyId2024 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2206"
    });
    $.__views.__alloyId2205.add($.__views.__alloyId2206);
    $.__views.__alloyId2207 = Ti.UI.createLabel({
=======
        id: "__alloyId1614"
    });
    $.__views.__alloyId1613.add($.__views.__alloyId1614);
    $.__views.__alloyId1615 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2024"
=======
<<<<<<< HEAD
        id: "__alloyId2207"
    });
    $.__views.__alloyId2205.add($.__views.__alloyId2207);
    $.__views.__alloyId2208 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2208"
    });
    $.__views.__alloyId2203.add($.__views.__alloyId2208);
    $.__views.__alloyId2209 = Ti.UI.createView({
=======
        id: "__alloyId1615"
>>>>>>> origin/master
    });
    $.__views.__alloyId2022.add($.__views.__alloyId2024);
    $.__views.__alloyId2025 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2025"
    });
<<<<<<< HEAD
    $.__views.__alloyId2020.add($.__views.__alloyId2025);
    $.__views.__alloyId2026 = Ti.UI.createView({
=======
    $.__views.__alloyId1611.add($.__views.__alloyId1616);
    $.__views.__alloyId1617 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
<<<<<<< HEAD
        id: "__alloyId2026"
    });
    $.__views.__alloyId2025.add($.__views.__alloyId2026);
    $.__views.__alloyId2027 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2209"
    });
    $.__views.__alloyId2208.add($.__views.__alloyId2209);
    $.__views.__alloyId2210 = Ti.UI.createLabel({
=======
        id: "__alloyId1617"
    });
    $.__views.__alloyId1616.add($.__views.__alloyId1617);
    $.__views.__alloyId1618 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2027"
    });
    $.__views.__alloyId2026.add($.__views.__alloyId2027);
    $.__views.__alloyId2028 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2210"
    });
    $.__views.__alloyId2209.add($.__views.__alloyId2210);
    $.__views.__alloyId2211 = Ti.UI.createLabel({
=======
        id: "__alloyId1618"
    });
    $.__views.__alloyId1617.add($.__views.__alloyId1618);
    $.__views.__alloyId1619 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2028"
    });
    $.__views.__alloyId2026.add($.__views.__alloyId2028);
    $.__views.__alloyId2029 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId2211"
    });
    $.__views.__alloyId2209.add($.__views.__alloyId2211);
    $.__views.__alloyId2212 = Ti.UI.createView({
=======
        id: "__alloyId1619"
    });
    $.__views.__alloyId1617.add($.__views.__alloyId1619);
    $.__views.__alloyId1620 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
<<<<<<< HEAD
        id: "__alloyId2029"
    });
    $.__views.__alloyId2019.add($.__views.__alloyId2029);
    $.__views.__alloyId2030 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2212"
    });
    $.__views.__alloyId2202.add($.__views.__alloyId2212);
    $.__views.__alloyId2213 = Ti.UI.createLabel({
=======
        id: "__alloyId1620"
    });
    $.__views.__alloyId1610.add($.__views.__alloyId1620);
    $.__views.__alloyId1621 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2030"
    });
    $.__views.__alloyId2029.add($.__views.__alloyId2030);
    $.__views.__alloyId2031 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId2213"
    });
    $.__views.__alloyId2212.add($.__views.__alloyId2213);
    $.__views.__alloyId2214 = Ti.UI.createView({
=======
        id: "__alloyId1621"
    });
    $.__views.__alloyId1620.add($.__views.__alloyId1621);
    $.__views.__alloyId1622 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
<<<<<<< HEAD
        id: "__alloyId2031"
=======
<<<<<<< HEAD
        id: "__alloyId2214"
    });
    $.__views.__alloyId2202.add($.__views.__alloyId2214);
    $.__views.__alloyId2215 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2215"
    });
    $.__views.__alloyId2214.add($.__views.__alloyId2215);
    $.__views.__alloyId2216 = Ti.UI.createLabel({
=======
        id: "__alloyId1622"
>>>>>>> origin/master
    });
    $.__views.__alloyId2019.add($.__views.__alloyId2031);
    $.__views.__alloyId2032 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2032"
    });
<<<<<<< HEAD
    $.__views.__alloyId2031.add($.__views.__alloyId2032);
    $.__views.__alloyId2033 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1622.add($.__views.__alloyId1623);
    $.__views.__alloyId1624 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2033"
    });
    $.__views.__alloyId2032.add($.__views.__alloyId2033);
    $.__views.__alloyId2034 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2216"
    });
    $.__views.__alloyId2215.add($.__views.__alloyId2216);
    $.__views.__alloyId2217 = Ti.UI.createLabel({
=======
        id: "__alloyId1624"
    });
    $.__views.__alloyId1623.add($.__views.__alloyId1624);
    $.__views.__alloyId1625 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2034"
    });
    $.__views.__alloyId2032.add($.__views.__alloyId2034);
=======
<<<<<<< HEAD
        id: "__alloyId2217"
    });
    $.__views.__alloyId2215.add($.__views.__alloyId2217);
=======
        id: "__alloyId1625"
    });
    $.__views.__alloyId1623.add($.__views.__alloyId1625);
>>>>>>> origin/master
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;