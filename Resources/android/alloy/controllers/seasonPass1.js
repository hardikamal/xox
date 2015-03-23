function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
<<<<<<< Updated upstream
    function checkout(e) {
        console.log("e.source.mod: " + e.source.mod);
        Ti.App.Properties.setString("seasonPass", e.source.mod);
        DRAWER.navigation("seasonPassCheckout1", 1);
    }
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    var __defers = {};
=======
>>>>>>> Stashed changes
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        height: "100%",
        scrollType: "vertical",
        backgroundColor: "#FFFFFF"
    });
    $.__views.scrollView && $.addTopLevelView($.__views.scrollView);
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId2181 = Ti.UI.createView({
=======
    $.__views.__alloyId1992 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
<<<<<<< HEAD
        mod: "1",
        id: "__alloyId2181"
    });
    $.__views.scrollView.add($.__views.__alloyId2181);
    checkout ? $.__views.__alloyId2181.addEventListener("click", checkout) : __defers["$.__views.__alloyId2181!click!checkout"] = true;
    $.__views.__alloyId2182 = Ti.UI.createView({
=======
        id: "__alloyId1992"
    });
    $.__views.scrollView.add($.__views.__alloyId1992);
    $.__views.__alloyId1993 = Ti.UI.createView({
>>>>>>> origin/master
=======
    $.__views.__alloyId603 = Ti.UI.createView({
        layout: "vertical",
        height: "50%",
        width: "90%",
        top: "10",
        id: "__alloyId603"
    });
    $.__views.scrollView.add($.__views.__alloyId603);
    $.__views.__alloyId604 = Ti.UI.createView({
>>>>>>> Stashed changes
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
<<<<<<< Updated upstream
<<<<<<< HEAD
        mod: "1",
        id: "__alloyId2182"
    });
    $.__views.__alloyId2181.add($.__views.__alloyId2182);
    $.__views.__alloyId2183 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        mod: "1",
        id: "__alloyId2183"
    });
    $.__views.__alloyId2182.add($.__views.__alloyId2183);
    $.__views.__alloyId2184 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        mod: "1",
        id: "__alloyId2184"
    });
    $.__views.__alloyId2183.add($.__views.__alloyId2184);
    $.__views.__alloyId2185 = Ti.UI.createLabel({
=======
        id: "__alloyId1993"
    });
    $.__views.__alloyId1992.add($.__views.__alloyId1993);
    $.__views.__alloyId1994 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId1994"
    });
    $.__views.__alloyId1993.add($.__views.__alloyId1994);
    $.__views.__alloyId1995 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1995"
    });
    $.__views.__alloyId1994.add($.__views.__alloyId1995);
    $.__views.__alloyId1996 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId604"
    });
    $.__views.__alloyId603.add($.__views.__alloyId604);
    $.__views.__alloyId605 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId605"
    });
    $.__views.__alloyId604.add($.__views.__alloyId605);
    $.__views.__alloyId606 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId606"
    });
    $.__views.__alloyId605.add($.__views.__alloyId606);
    $.__views.__alloyId607 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< Updated upstream
<<<<<<< HEAD
        mod: "1",
        id: "__alloyId2185"
    });
    $.__views.__alloyId2184.add($.__views.__alloyId2185);
    $.__views.__alloyId2186 = Ti.UI.createLabel({
=======
        id: "__alloyId1996"
    });
    $.__views.__alloyId1995.add($.__views.__alloyId1996);
    $.__views.__alloyId1997 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId607"
    });
    $.__views.__alloyId606.add($.__views.__alloyId607);
    $.__views.__alloyId608 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< Updated upstream
<<<<<<< HEAD
        mod: "1",
        id: "__alloyId2186"
    });
    $.__views.__alloyId2184.add($.__views.__alloyId2186);
    $.__views.__alloyId2187 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        mod: "1",
        id: "__alloyId2187"
    });
    $.__views.__alloyId2182.add($.__views.__alloyId2187);
    $.__views.__alloyId2188 = Ti.UI.createView({
=======
        id: "__alloyId1997"
    });
    $.__views.__alloyId1995.add($.__views.__alloyId1997);
    $.__views.__alloyId1998 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId1998"
    });
    $.__views.__alloyId1993.add($.__views.__alloyId1998);
    $.__views.__alloyId1999 = Ti.UI.createView({
>>>>>>> origin/master
=======
        id: "__alloyId608"
    });
    $.__views.__alloyId606.add($.__views.__alloyId608);
    $.__views.__alloyId609 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId609"
    });
    $.__views.__alloyId604.add($.__views.__alloyId609);
    $.__views.__alloyId610 = Ti.UI.createView({
>>>>>>> Stashed changes
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
<<<<<<< Updated upstream
<<<<<<< HEAD
        mod: "1",
        id: "__alloyId2188"
    });
    $.__views.__alloyId2187.add($.__views.__alloyId2188);
    $.__views.__alloyId2189 = Ti.UI.createLabel({
=======
        id: "__alloyId1999"
    });
    $.__views.__alloyId1998.add($.__views.__alloyId1999);
    $.__views.__alloyId2000 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId610"
    });
    $.__views.__alloyId609.add($.__views.__alloyId610);
    $.__views.__alloyId611 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< Updated upstream
<<<<<<< HEAD
        mod: "1",
        id: "__alloyId2189"
    });
    $.__views.__alloyId2188.add($.__views.__alloyId2189);
    $.__views.__alloyId2190 = Ti.UI.createLabel({
=======
        id: "__alloyId2000"
    });
    $.__views.__alloyId1999.add($.__views.__alloyId2000);
    $.__views.__alloyId2001 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId611"
    });
    $.__views.__alloyId610.add($.__views.__alloyId611);
    $.__views.__alloyId612 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< Updated upstream
<<<<<<< HEAD
        mod: "1",
        id: "__alloyId2190"
    });
    $.__views.__alloyId2188.add($.__views.__alloyId2190);
    $.__views.__alloyId2191 = Ti.UI.createView({
=======
        id: "__alloyId2001"
    });
    $.__views.__alloyId1999.add($.__views.__alloyId2001);
    $.__views.__alloyId2002 = Ti.UI.createView({
>>>>>>> origin/master
=======
        id: "__alloyId612"
    });
    $.__views.__alloyId610.add($.__views.__alloyId612);
    $.__views.__alloyId613 = Ti.UI.createView({
>>>>>>> Stashed changes
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
<<<<<<< Updated upstream
<<<<<<< HEAD
        mod: "1",
        id: "__alloyId2191"
    });
    $.__views.__alloyId2181.add($.__views.__alloyId2191);
    $.__views.__alloyId2192 = Ti.UI.createLabel({
=======
        id: "__alloyId2002"
    });
    $.__views.__alloyId1992.add($.__views.__alloyId2002);
    $.__views.__alloyId2003 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId613"
    });
    $.__views.__alloyId603.add($.__views.__alloyId613);
    $.__views.__alloyId614 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
<<<<<<< Updated upstream
<<<<<<< HEAD
        mod: "1",
        id: "__alloyId2192"
    });
    $.__views.__alloyId2191.add($.__views.__alloyId2192);
    $.__views.__alloyId2193 = Ti.UI.createView({
=======
        id: "__alloyId2003"
    });
    $.__views.__alloyId2002.add($.__views.__alloyId2003);
    $.__views.__alloyId2004 = Ti.UI.createView({
>>>>>>> origin/master
=======
        id: "__alloyId614"
    });
    $.__views.__alloyId613.add($.__views.__alloyId614);
    $.__views.__alloyId615 = Ti.UI.createView({
>>>>>>> Stashed changes
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
<<<<<<< Updated upstream
<<<<<<< HEAD
        mod: "1",
        id: "__alloyId2193"
    });
    $.__views.__alloyId2181.add($.__views.__alloyId2193);
    $.__views.__alloyId2194 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        mod: "1",
        id: "__alloyId2194"
    });
    $.__views.__alloyId2193.add($.__views.__alloyId2194);
    $.__views.__alloyId2195 = Ti.UI.createLabel({
=======
        id: "__alloyId2004"
    });
    $.__views.__alloyId1992.add($.__views.__alloyId2004);
    $.__views.__alloyId2005 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2005"
    });
    $.__views.__alloyId2004.add($.__views.__alloyId2005);
    $.__views.__alloyId2006 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId615"
    });
    $.__views.__alloyId603.add($.__views.__alloyId615);
    $.__views.__alloyId616 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId616"
    });
    $.__views.__alloyId615.add($.__views.__alloyId616);
    $.__views.__alloyId617 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< Updated upstream
<<<<<<< HEAD
        mod: "1",
        id: "__alloyId2195"
    });
    $.__views.__alloyId2194.add($.__views.__alloyId2195);
    $.__views.__alloyId2196 = Ti.UI.createLabel({
=======
        id: "__alloyId2006"
    });
    $.__views.__alloyId2005.add($.__views.__alloyId2006);
    $.__views.__alloyId2007 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId617"
    });
    $.__views.__alloyId616.add($.__views.__alloyId617);
    $.__views.__alloyId618 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< Updated upstream
<<<<<<< HEAD
        mod: "1",
        id: "__alloyId2196"
    });
    $.__views.__alloyId2194.add($.__views.__alloyId2196);
    $.__views.__alloyId2197 = Ti.UI.createView({
=======
        id: "__alloyId2007"
    });
    $.__views.__alloyId2005.add($.__views.__alloyId2007);
    $.__views.__alloyId2008 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
<<<<<<< HEAD
        mod: "2",
        id: "__alloyId2197"
    });
    $.__views.scrollView.add($.__views.__alloyId2197);
    checkout ? $.__views.__alloyId2197.addEventListener("click", checkout) : __defers["$.__views.__alloyId2197!click!checkout"] = true;
    $.__views.__alloyId2198 = Ti.UI.createView({
=======
        id: "__alloyId2008"
    });
    $.__views.scrollView.add($.__views.__alloyId2008);
    $.__views.__alloyId2009 = Ti.UI.createView({
>>>>>>> origin/master
=======
        id: "__alloyId618"
    });
    $.__views.__alloyId616.add($.__views.__alloyId618);
    $.__views.__alloyId619 = Ti.UI.createView({
        layout: "vertical",
        height: "50%",
        width: "90%",
        top: "10",
        bottom: "10",
        id: "__alloyId619"
    });
    $.__views.scrollView.add($.__views.__alloyId619);
    $.__views.__alloyId620 = Ti.UI.createView({
>>>>>>> Stashed changes
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
<<<<<<< Updated upstream
<<<<<<< HEAD
        mod: "2",
        id: "__alloyId2198"
    });
    $.__views.__alloyId2197.add($.__views.__alloyId2198);
    $.__views.__alloyId2199 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        mod: "2",
        id: "__alloyId2199"
    });
    $.__views.__alloyId2198.add($.__views.__alloyId2199);
    $.__views.__alloyId2200 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        mod: "2",
        id: "__alloyId2200"
    });
    $.__views.__alloyId2199.add($.__views.__alloyId2200);
    $.__views.__alloyId2201 = Ti.UI.createLabel({
=======
        id: "__alloyId2009"
    });
    $.__views.__alloyId2008.add($.__views.__alloyId2009);
    $.__views.__alloyId2010 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2010"
    });
    $.__views.__alloyId2009.add($.__views.__alloyId2010);
    $.__views.__alloyId2011 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2011"
    });
    $.__views.__alloyId2010.add($.__views.__alloyId2011);
    $.__views.__alloyId2012 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId620"
    });
    $.__views.__alloyId619.add($.__views.__alloyId620);
    $.__views.__alloyId621 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId621"
    });
    $.__views.__alloyId620.add($.__views.__alloyId621);
    $.__views.__alloyId622 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId622"
    });
    $.__views.__alloyId621.add($.__views.__alloyId622);
    $.__views.__alloyId623 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< Updated upstream
<<<<<<< HEAD
        mod: "2",
        id: "__alloyId2201"
    });
    $.__views.__alloyId2200.add($.__views.__alloyId2201);
    $.__views.__alloyId2202 = Ti.UI.createLabel({
=======
        id: "__alloyId2012"
    });
    $.__views.__alloyId2011.add($.__views.__alloyId2012);
    $.__views.__alloyId2013 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId623"
    });
    $.__views.__alloyId622.add($.__views.__alloyId623);
    $.__views.__alloyId624 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< Updated upstream
<<<<<<< HEAD
        mod: "2",
        id: "__alloyId2202"
    });
    $.__views.__alloyId2200.add($.__views.__alloyId2202);
    $.__views.__alloyId2203 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        mod: "2",
        id: "__alloyId2203"
    });
    $.__views.__alloyId2198.add($.__views.__alloyId2203);
    $.__views.__alloyId2204 = Ti.UI.createView({
=======
        id: "__alloyId2013"
    });
    $.__views.__alloyId2011.add($.__views.__alloyId2013);
    $.__views.__alloyId2014 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2014"
    });
    $.__views.__alloyId2009.add($.__views.__alloyId2014);
    $.__views.__alloyId2015 = Ti.UI.createView({
>>>>>>> origin/master
=======
        id: "__alloyId624"
    });
    $.__views.__alloyId622.add($.__views.__alloyId624);
    $.__views.__alloyId625 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId625"
    });
    $.__views.__alloyId620.add($.__views.__alloyId625);
    $.__views.__alloyId626 = Ti.UI.createView({
>>>>>>> Stashed changes
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
<<<<<<< Updated upstream
<<<<<<< HEAD
        mod: "2",
        id: "__alloyId2204"
    });
    $.__views.__alloyId2203.add($.__views.__alloyId2204);
    $.__views.__alloyId2205 = Ti.UI.createLabel({
=======
        id: "__alloyId2015"
    });
    $.__views.__alloyId2014.add($.__views.__alloyId2015);
    $.__views.__alloyId2016 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId626"
    });
    $.__views.__alloyId625.add($.__views.__alloyId626);
    $.__views.__alloyId627 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< Updated upstream
<<<<<<< HEAD
        mod: "2",
        id: "__alloyId2205"
    });
    $.__views.__alloyId2204.add($.__views.__alloyId2205);
    $.__views.__alloyId2206 = Ti.UI.createLabel({
=======
        id: "__alloyId2016"
    });
    $.__views.__alloyId2015.add($.__views.__alloyId2016);
    $.__views.__alloyId2017 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId627"
    });
    $.__views.__alloyId626.add($.__views.__alloyId627);
    $.__views.__alloyId628 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< Updated upstream
<<<<<<< HEAD
        mod: "2",
        id: "__alloyId2206"
    });
    $.__views.__alloyId2204.add($.__views.__alloyId2206);
    $.__views.__alloyId2207 = Ti.UI.createView({
=======
        id: "__alloyId2017"
    });
    $.__views.__alloyId2015.add($.__views.__alloyId2017);
    $.__views.__alloyId2018 = Ti.UI.createView({
>>>>>>> origin/master
=======
        id: "__alloyId628"
    });
    $.__views.__alloyId626.add($.__views.__alloyId628);
    $.__views.__alloyId629 = Ti.UI.createView({
>>>>>>> Stashed changes
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
<<<<<<< Updated upstream
<<<<<<< HEAD
        mod: "2",
        id: "__alloyId2207"
    });
    $.__views.__alloyId2197.add($.__views.__alloyId2207);
    $.__views.__alloyId2208 = Ti.UI.createLabel({
=======
        id: "__alloyId2018"
    });
    $.__views.__alloyId2008.add($.__views.__alloyId2018);
    $.__views.__alloyId2019 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId629"
    });
    $.__views.__alloyId619.add($.__views.__alloyId629);
    $.__views.__alloyId630 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
<<<<<<< Updated upstream
<<<<<<< HEAD
        mod: "2",
        id: "__alloyId2208"
    });
    $.__views.__alloyId2207.add($.__views.__alloyId2208);
    $.__views.__alloyId2209 = Ti.UI.createView({
=======
        id: "__alloyId2019"
    });
    $.__views.__alloyId2018.add($.__views.__alloyId2019);
    $.__views.__alloyId2020 = Ti.UI.createView({
>>>>>>> origin/master
=======
        id: "__alloyId630"
    });
    $.__views.__alloyId629.add($.__views.__alloyId630);
    $.__views.__alloyId631 = Ti.UI.createView({
>>>>>>> Stashed changes
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
<<<<<<< Updated upstream
<<<<<<< HEAD
        mod: "2",
        id: "__alloyId2209"
    });
    $.__views.__alloyId2197.add($.__views.__alloyId2209);
    $.__views.__alloyId2210 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        mod: "2",
        id: "__alloyId2210"
    });
    $.__views.__alloyId2209.add($.__views.__alloyId2210);
    $.__views.__alloyId2211 = Ti.UI.createLabel({
=======
        id: "__alloyId2020"
    });
    $.__views.__alloyId2008.add($.__views.__alloyId2020);
    $.__views.__alloyId2021 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2021"
    });
    $.__views.__alloyId2020.add($.__views.__alloyId2021);
    $.__views.__alloyId2022 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId631"
    });
    $.__views.__alloyId619.add($.__views.__alloyId631);
    $.__views.__alloyId632 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId632"
    });
    $.__views.__alloyId631.add($.__views.__alloyId632);
    $.__views.__alloyId633 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< Updated upstream
<<<<<<< HEAD
        mod: "2",
        id: "__alloyId2211"
    });
    $.__views.__alloyId2210.add($.__views.__alloyId2211);
    $.__views.__alloyId2212 = Ti.UI.createLabel({
=======
        id: "__alloyId2022"
    });
    $.__views.__alloyId2021.add($.__views.__alloyId2022);
    $.__views.__alloyId2023 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId633"
    });
    $.__views.__alloyId632.add($.__views.__alloyId633);
    $.__views.__alloyId634 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< Updated upstream
<<<<<<< HEAD
        mod: "2",
        id: "__alloyId2212"
    });
    $.__views.__alloyId2210.add($.__views.__alloyId2212);
=======
        id: "__alloyId2023"
    });
    $.__views.__alloyId2021.add($.__views.__alloyId2023);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2181!click!checkout"] && $.__views.__alloyId2181.addEventListener("click", checkout);
    __defers["$.__views.__alloyId2197!click!checkout"] && $.__views.__alloyId2197.addEventListener("click", checkout);
=======
        id: "__alloyId634"
    });
    $.__views.__alloyId632.add($.__views.__alloyId634);
    exports.destroy = function() {};
    _.extend($, $.__views);
>>>>>>> Stashed changes
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;