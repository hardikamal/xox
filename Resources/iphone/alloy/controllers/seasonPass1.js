function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function checkout(e) {
        console.log("e.source.mod: " + e.source.mod);
        Ti.App.Properties.setString("seasonPass", e.source.mod);
        DRAWER.navigation("seasonPassCheckout1", 1);
    }
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
    var __defers = {};
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        height: "100%",
        scrollType: "vertical",
        backgroundColor: "#FFFFFF"
    });
    $.__views.scrollView && $.addTopLevelView($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId1971 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId2154 = Ti.UI.createView({
=======
    $.__views.__alloyId1562 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
<<<<<<< HEAD
        id: "__alloyId1971"
    });
    $.__views.scrollView.add($.__views.__alloyId1971);
    $.__views.__alloyId1972 = Ti.UI.createView({
=======
<<<<<<< HEAD
        mod: "1",
        id: "__alloyId2154"
    });
    $.__views.scrollView.add($.__views.__alloyId2154);
    checkout ? $.__views.__alloyId2154.addEventListener("click", checkout) : __defers["$.__views.__alloyId2154!click!checkout"] = true;
    $.__views.__alloyId2155 = Ti.UI.createView({
=======
        id: "__alloyId1562"
    });
    $.__views.scrollView.add($.__views.__alloyId1562);
    $.__views.__alloyId1563 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
<<<<<<< HEAD
        id: "__alloyId1972"
=======
<<<<<<< HEAD
        mod: "1",
        id: "__alloyId2155"
    });
    $.__views.__alloyId2154.add($.__views.__alloyId2155);
    $.__views.__alloyId2156 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        mod: "1",
        id: "__alloyId2156"
    });
    $.__views.__alloyId2155.add($.__views.__alloyId2156);
    $.__views.__alloyId2157 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        mod: "1",
        id: "__alloyId2157"
    });
    $.__views.__alloyId2156.add($.__views.__alloyId2157);
    $.__views.__alloyId2158 = Ti.UI.createLabel({
=======
        id: "__alloyId1563"
>>>>>>> origin/master
    });
    $.__views.__alloyId1971.add($.__views.__alloyId1972);
    $.__views.__alloyId1973 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId1973"
    });
    $.__views.__alloyId1972.add($.__views.__alloyId1973);
    $.__views.__alloyId1974 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1974"
    });
<<<<<<< HEAD
    $.__views.__alloyId1973.add($.__views.__alloyId1974);
    $.__views.__alloyId1975 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1564.add($.__views.__alloyId1565);
    $.__views.__alloyId1566 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1975"
    });
    $.__views.__alloyId1974.add($.__views.__alloyId1975);
    $.__views.__alloyId1976 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        mod: "1",
        id: "__alloyId2158"
    });
    $.__views.__alloyId2157.add($.__views.__alloyId2158);
    $.__views.__alloyId2159 = Ti.UI.createLabel({
=======
        id: "__alloyId1566"
    });
    $.__views.__alloyId1565.add($.__views.__alloyId1566);
    $.__views.__alloyId1567 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1976"
=======
<<<<<<< HEAD
        mod: "1",
        id: "__alloyId2159"
    });
    $.__views.__alloyId2157.add($.__views.__alloyId2159);
    $.__views.__alloyId2160 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        mod: "1",
        id: "__alloyId2160"
    });
    $.__views.__alloyId2155.add($.__views.__alloyId2160);
    $.__views.__alloyId2161 = Ti.UI.createView({
=======
        id: "__alloyId1567"
>>>>>>> origin/master
    });
    $.__views.__alloyId1974.add($.__views.__alloyId1976);
    $.__views.__alloyId1977 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId1977"
    });
<<<<<<< HEAD
    $.__views.__alloyId1972.add($.__views.__alloyId1977);
    $.__views.__alloyId1978 = Ti.UI.createView({
=======
    $.__views.__alloyId1563.add($.__views.__alloyId1568);
    $.__views.__alloyId1569 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
<<<<<<< HEAD
        id: "__alloyId1978"
    });
    $.__views.__alloyId1977.add($.__views.__alloyId1978);
    $.__views.__alloyId1979 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        mod: "1",
        id: "__alloyId2161"
    });
    $.__views.__alloyId2160.add($.__views.__alloyId2161);
    $.__views.__alloyId2162 = Ti.UI.createLabel({
=======
        id: "__alloyId1569"
    });
    $.__views.__alloyId1568.add($.__views.__alloyId1569);
    $.__views.__alloyId1570 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1979"
    });
    $.__views.__alloyId1978.add($.__views.__alloyId1979);
    $.__views.__alloyId1980 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        mod: "1",
        id: "__alloyId2162"
    });
    $.__views.__alloyId2161.add($.__views.__alloyId2162);
    $.__views.__alloyId2163 = Ti.UI.createLabel({
=======
        id: "__alloyId1570"
    });
    $.__views.__alloyId1569.add($.__views.__alloyId1570);
    $.__views.__alloyId1571 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1980"
    });
    $.__views.__alloyId1978.add($.__views.__alloyId1980);
    $.__views.__alloyId1981 = Ti.UI.createView({
=======
<<<<<<< HEAD
        mod: "1",
        id: "__alloyId2163"
    });
    $.__views.__alloyId2161.add($.__views.__alloyId2163);
    $.__views.__alloyId2164 = Ti.UI.createView({
=======
        id: "__alloyId1571"
    });
    $.__views.__alloyId1569.add($.__views.__alloyId1571);
    $.__views.__alloyId1572 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
<<<<<<< HEAD
        id: "__alloyId1981"
    });
    $.__views.__alloyId1971.add($.__views.__alloyId1981);
    $.__views.__alloyId1982 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        mod: "1",
        id: "__alloyId2164"
    });
    $.__views.__alloyId2154.add($.__views.__alloyId2164);
    $.__views.__alloyId2165 = Ti.UI.createLabel({
=======
        id: "__alloyId1572"
    });
    $.__views.__alloyId1562.add($.__views.__alloyId1572);
    $.__views.__alloyId1573 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1982"
    });
    $.__views.__alloyId1981.add($.__views.__alloyId1982);
    $.__views.__alloyId1983 = Ti.UI.createView({
=======
<<<<<<< HEAD
        mod: "1",
        id: "__alloyId2165"
    });
    $.__views.__alloyId2164.add($.__views.__alloyId2165);
    $.__views.__alloyId2166 = Ti.UI.createView({
=======
        id: "__alloyId1573"
    });
    $.__views.__alloyId1572.add($.__views.__alloyId1573);
    $.__views.__alloyId1574 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
<<<<<<< HEAD
        id: "__alloyId1983"
=======
<<<<<<< HEAD
        mod: "1",
        id: "__alloyId2166"
    });
    $.__views.__alloyId2154.add($.__views.__alloyId2166);
    $.__views.__alloyId2167 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        mod: "1",
        id: "__alloyId2167"
    });
    $.__views.__alloyId2166.add($.__views.__alloyId2167);
    $.__views.__alloyId2168 = Ti.UI.createLabel({
=======
        id: "__alloyId1574"
>>>>>>> origin/master
    });
    $.__views.__alloyId1971.add($.__views.__alloyId1983);
    $.__views.__alloyId1984 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1984"
    });
<<<<<<< HEAD
    $.__views.__alloyId1983.add($.__views.__alloyId1984);
    $.__views.__alloyId1985 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1574.add($.__views.__alloyId1575);
    $.__views.__alloyId1576 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1985"
    });
    $.__views.__alloyId1984.add($.__views.__alloyId1985);
    $.__views.__alloyId1986 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        mod: "1",
        id: "__alloyId2168"
    });
    $.__views.__alloyId2167.add($.__views.__alloyId2168);
    $.__views.__alloyId2169 = Ti.UI.createLabel({
=======
        id: "__alloyId1576"
    });
    $.__views.__alloyId1575.add($.__views.__alloyId1576);
    $.__views.__alloyId1577 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1986"
    });
    $.__views.__alloyId1984.add($.__views.__alloyId1986);
    $.__views.__alloyId1987 = Ti.UI.createView({
=======
<<<<<<< HEAD
        mod: "1",
        id: "__alloyId2169"
    });
    $.__views.__alloyId2167.add($.__views.__alloyId2169);
    $.__views.__alloyId2170 = Ti.UI.createView({
=======
        id: "__alloyId1577"
    });
    $.__views.__alloyId1575.add($.__views.__alloyId1577);
    $.__views.__alloyId1578 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId1987"
    });
    $.__views.scrollView.add($.__views.__alloyId1987);
    $.__views.__alloyId1988 = Ti.UI.createView({
=======
<<<<<<< HEAD
        mod: "2",
        id: "__alloyId2170"
    });
    $.__views.scrollView.add($.__views.__alloyId2170);
    checkout ? $.__views.__alloyId2170.addEventListener("click", checkout) : __defers["$.__views.__alloyId2170!click!checkout"] = true;
    $.__views.__alloyId2171 = Ti.UI.createView({
=======
        id: "__alloyId1578"
    });
    $.__views.scrollView.add($.__views.__alloyId1578);
    $.__views.__alloyId1579 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
<<<<<<< HEAD
        id: "__alloyId1988"
=======
<<<<<<< HEAD
        mod: "2",
        id: "__alloyId2171"
    });
    $.__views.__alloyId2170.add($.__views.__alloyId2171);
    $.__views.__alloyId2172 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        mod: "2",
        id: "__alloyId2172"
    });
    $.__views.__alloyId2171.add($.__views.__alloyId2172);
    $.__views.__alloyId2173 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        mod: "2",
        id: "__alloyId2173"
    });
    $.__views.__alloyId2172.add($.__views.__alloyId2173);
    $.__views.__alloyId2174 = Ti.UI.createLabel({
=======
        id: "__alloyId1579"
>>>>>>> origin/master
    });
    $.__views.__alloyId1987.add($.__views.__alloyId1988);
    $.__views.__alloyId1989 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId1989"
    });
    $.__views.__alloyId1988.add($.__views.__alloyId1989);
    $.__views.__alloyId1990 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1990"
    });
<<<<<<< HEAD
    $.__views.__alloyId1989.add($.__views.__alloyId1990);
    $.__views.__alloyId1991 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1580.add($.__views.__alloyId1581);
    $.__views.__alloyId1582 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1991"
    });
    $.__views.__alloyId1990.add($.__views.__alloyId1991);
    $.__views.__alloyId1992 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        mod: "2",
        id: "__alloyId2174"
    });
    $.__views.__alloyId2173.add($.__views.__alloyId2174);
    $.__views.__alloyId2175 = Ti.UI.createLabel({
=======
        id: "__alloyId1582"
    });
    $.__views.__alloyId1581.add($.__views.__alloyId1582);
    $.__views.__alloyId1583 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1992"
=======
<<<<<<< HEAD
        mod: "2",
        id: "__alloyId2175"
    });
    $.__views.__alloyId2173.add($.__views.__alloyId2175);
    $.__views.__alloyId2176 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        mod: "2",
        id: "__alloyId2176"
    });
    $.__views.__alloyId2171.add($.__views.__alloyId2176);
    $.__views.__alloyId2177 = Ti.UI.createView({
=======
        id: "__alloyId1583"
>>>>>>> origin/master
    });
    $.__views.__alloyId1990.add($.__views.__alloyId1992);
    $.__views.__alloyId1993 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId1993"
    });
<<<<<<< HEAD
    $.__views.__alloyId1988.add($.__views.__alloyId1993);
    $.__views.__alloyId1994 = Ti.UI.createView({
=======
    $.__views.__alloyId1579.add($.__views.__alloyId1584);
    $.__views.__alloyId1585 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
<<<<<<< HEAD
        id: "__alloyId1994"
    });
    $.__views.__alloyId1993.add($.__views.__alloyId1994);
    $.__views.__alloyId1995 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        mod: "2",
        id: "__alloyId2177"
    });
    $.__views.__alloyId2176.add($.__views.__alloyId2177);
    $.__views.__alloyId2178 = Ti.UI.createLabel({
=======
        id: "__alloyId1585"
    });
    $.__views.__alloyId1584.add($.__views.__alloyId1585);
    $.__views.__alloyId1586 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1995"
    });
    $.__views.__alloyId1994.add($.__views.__alloyId1995);
    $.__views.__alloyId1996 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        mod: "2",
        id: "__alloyId2178"
    });
    $.__views.__alloyId2177.add($.__views.__alloyId2178);
    $.__views.__alloyId2179 = Ti.UI.createLabel({
=======
        id: "__alloyId1586"
    });
    $.__views.__alloyId1585.add($.__views.__alloyId1586);
    $.__views.__alloyId1587 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1996"
    });
    $.__views.__alloyId1994.add($.__views.__alloyId1996);
    $.__views.__alloyId1997 = Ti.UI.createView({
=======
<<<<<<< HEAD
        mod: "2",
        id: "__alloyId2179"
    });
    $.__views.__alloyId2177.add($.__views.__alloyId2179);
    $.__views.__alloyId2180 = Ti.UI.createView({
=======
        id: "__alloyId1587"
    });
    $.__views.__alloyId1585.add($.__views.__alloyId1587);
    $.__views.__alloyId1588 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
<<<<<<< HEAD
        id: "__alloyId1997"
    });
    $.__views.__alloyId1987.add($.__views.__alloyId1997);
    $.__views.__alloyId1998 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        mod: "2",
        id: "__alloyId2180"
    });
    $.__views.__alloyId2170.add($.__views.__alloyId2180);
    $.__views.__alloyId2181 = Ti.UI.createLabel({
=======
        id: "__alloyId1588"
    });
    $.__views.__alloyId1578.add($.__views.__alloyId1588);
    $.__views.__alloyId1589 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1998"
    });
    $.__views.__alloyId1997.add($.__views.__alloyId1998);
    $.__views.__alloyId1999 = Ti.UI.createView({
=======
<<<<<<< HEAD
        mod: "2",
        id: "__alloyId2181"
    });
    $.__views.__alloyId2180.add($.__views.__alloyId2181);
    $.__views.__alloyId2182 = Ti.UI.createView({
=======
        id: "__alloyId1589"
    });
    $.__views.__alloyId1588.add($.__views.__alloyId1589);
    $.__views.__alloyId1590 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
<<<<<<< HEAD
        id: "__alloyId1999"
=======
<<<<<<< HEAD
        mod: "2",
        id: "__alloyId2182"
    });
    $.__views.__alloyId2170.add($.__views.__alloyId2182);
    $.__views.__alloyId2183 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        mod: "2",
        id: "__alloyId2183"
    });
    $.__views.__alloyId2182.add($.__views.__alloyId2183);
    $.__views.__alloyId2184 = Ti.UI.createLabel({
=======
        id: "__alloyId1590"
>>>>>>> origin/master
    });
    $.__views.__alloyId1987.add($.__views.__alloyId1999);
    $.__views.__alloyId2000 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2000"
    });
<<<<<<< HEAD
    $.__views.__alloyId1999.add($.__views.__alloyId2000);
    $.__views.__alloyId2001 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1590.add($.__views.__alloyId1591);
    $.__views.__alloyId1592 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2001"
    });
    $.__views.__alloyId2000.add($.__views.__alloyId2001);
    $.__views.__alloyId2002 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        mod: "2",
        id: "__alloyId2184"
    });
    $.__views.__alloyId2183.add($.__views.__alloyId2184);
    $.__views.__alloyId2185 = Ti.UI.createLabel({
=======
        id: "__alloyId1592"
    });
    $.__views.__alloyId1591.add($.__views.__alloyId1592);
    $.__views.__alloyId1593 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2002"
    });
    $.__views.__alloyId2000.add($.__views.__alloyId2002);
=======
<<<<<<< HEAD
        mod: "2",
        id: "__alloyId2185"
    });
    $.__views.__alloyId2183.add($.__views.__alloyId2185);
=======
        id: "__alloyId1593"
    });
    $.__views.__alloyId1591.add($.__views.__alloyId1593);
>>>>>>> origin/master
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2154!click!checkout"] && $.__views.__alloyId2154.addEventListener("click", checkout);
    __defers["$.__views.__alloyId2170!click!checkout"] && $.__views.__alloyId2170.addEventListener("click", checkout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;