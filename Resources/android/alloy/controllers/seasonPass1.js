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
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2223 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId2181 = Ti.UI.createView({
=======
    $.__views.__alloyId1992 = Ti.UI.createView({
>>>>>>> origin/master
=======
    $.__views.__alloyId2223 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2223 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        mod: "1",
        id: "__alloyId2223"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId2223);
    checkout ? $.__views.__alloyId2223.addEventListener("click", checkout) : __defers["$.__views.__alloyId2223!click!checkout"] = true;
    $.__views.__alloyId2224 = Ti.UI.createView({
=======
<<<<<<< HEAD
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
=======
    $.__views.scrollView.add($.__views.__alloyId2223);
    checkout ? $.__views.__alloyId2223.addEventListener("click", checkout) : __defers["$.__views.__alloyId2223!click!checkout"] = true;
    $.__views.__alloyId2224 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.scrollView.add($.__views.__alloyId2223);
    checkout ? $.__views.__alloyId2223.addEventListener("click", checkout) : __defers["$.__views.__alloyId2223!click!checkout"] = true;
    $.__views.__alloyId2224 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> origin/master
        mod: "1",
        id: "__alloyId2224"
    });
    $.__views.__alloyId2223.add($.__views.__alloyId2224);
    $.__views.__alloyId2225 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        mod: "1",
        id: "__alloyId2225"
    });
    $.__views.__alloyId2224.add($.__views.__alloyId2225);
    $.__views.__alloyId2226 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        mod: "1",
        id: "__alloyId2226"
<<<<<<< HEAD
<<<<<<< HEAD
    });
    $.__views.__alloyId2225.add($.__views.__alloyId2226);
    $.__views.__alloyId2227 = Ti.UI.createLabel({
=======
    });
<<<<<<< HEAD
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
=======
    $.__views.__alloyId2225.add($.__views.__alloyId2226);
    $.__views.__alloyId2227 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    });
    $.__views.__alloyId2225.add($.__views.__alloyId2226);
    $.__views.__alloyId2227 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> origin/master
        mod: "1",
        id: "__alloyId2227"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2226.add($.__views.__alloyId2227);
    $.__views.__alloyId2228 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1995.add($.__views.__alloyId1996);
    $.__views.__alloyId1997 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId607"
    });
    $.__views.__alloyId606.add($.__views.__alloyId607);
    $.__views.__alloyId608 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2226.add($.__views.__alloyId2227);
    $.__views.__alloyId2228 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2226.add($.__views.__alloyId2227);
    $.__views.__alloyId2228 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> origin/master
        mod: "1",
        id: "__alloyId2228"
    });
    $.__views.__alloyId2226.add($.__views.__alloyId2228);
    $.__views.__alloyId2229 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        mod: "1",
        id: "__alloyId2229"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2224.add($.__views.__alloyId2229);
    $.__views.__alloyId2230 = Ti.UI.createView({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId2224.add($.__views.__alloyId2229);
    $.__views.__alloyId2230 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2224.add($.__views.__alloyId2229);
    $.__views.__alloyId2230 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> origin/master
        mod: "1",
        id: "__alloyId2230"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2229.add($.__views.__alloyId2230);
    $.__views.__alloyId2231 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId2229.add($.__views.__alloyId2230);
    $.__views.__alloyId2231 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2229.add($.__views.__alloyId2230);
    $.__views.__alloyId2231 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> origin/master
        mod: "1",
        id: "__alloyId2231"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2230.add($.__views.__alloyId2231);
    $.__views.__alloyId2232 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1999.add($.__views.__alloyId2000);
    $.__views.__alloyId2001 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId611"
    });
    $.__views.__alloyId610.add($.__views.__alloyId611);
    $.__views.__alloyId612 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2230.add($.__views.__alloyId2231);
    $.__views.__alloyId2232 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2230.add($.__views.__alloyId2231);
    $.__views.__alloyId2232 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> origin/master
        mod: "1",
        id: "__alloyId2232"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2230.add($.__views.__alloyId2232);
    $.__views.__alloyId2233 = Ti.UI.createView({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId2230.add($.__views.__alloyId2232);
    $.__views.__alloyId2233 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2230.add($.__views.__alloyId2232);
    $.__views.__alloyId2233 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> origin/master
        mod: "1",
        id: "__alloyId2233"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2223.add($.__views.__alloyId2233);
    $.__views.__alloyId2234 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1992.add($.__views.__alloyId2002);
    $.__views.__alloyId2003 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId613"
    });
    $.__views.__alloyId603.add($.__views.__alloyId613);
    $.__views.__alloyId614 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2223.add($.__views.__alloyId2233);
    $.__views.__alloyId2234 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2223.add($.__views.__alloyId2233);
    $.__views.__alloyId2234 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> origin/master
        mod: "1",
        id: "__alloyId2234"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2233.add($.__views.__alloyId2234);
    $.__views.__alloyId2235 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId2002.add($.__views.__alloyId2003);
    $.__views.__alloyId2004 = Ti.UI.createView({
>>>>>>> origin/master
=======
        id: "__alloyId614"
    });
    $.__views.__alloyId613.add($.__views.__alloyId614);
    $.__views.__alloyId615 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2233.add($.__views.__alloyId2234);
    $.__views.__alloyId2235 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2233.add($.__views.__alloyId2234);
    $.__views.__alloyId2235 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> origin/master
        mod: "1",
        id: "__alloyId2235"
    });
    $.__views.__alloyId2223.add($.__views.__alloyId2235);
    $.__views.__alloyId2236 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        mod: "1",
        id: "__alloyId2236"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2235.add($.__views.__alloyId2236);
    $.__views.__alloyId2237 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId2235.add($.__views.__alloyId2236);
    $.__views.__alloyId2237 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2235.add($.__views.__alloyId2236);
    $.__views.__alloyId2237 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> origin/master
        mod: "1",
        id: "__alloyId2237"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2236.add($.__views.__alloyId2237);
    $.__views.__alloyId2238 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2005.add($.__views.__alloyId2006);
    $.__views.__alloyId2007 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId617"
    });
    $.__views.__alloyId616.add($.__views.__alloyId617);
    $.__views.__alloyId618 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2236.add($.__views.__alloyId2237);
    $.__views.__alloyId2238 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2236.add($.__views.__alloyId2237);
    $.__views.__alloyId2238 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> origin/master
        mod: "1",
        id: "__alloyId2238"
    });
    $.__views.__alloyId2236.add($.__views.__alloyId2238);
    $.__views.__alloyId2239 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
        mod: "2",
        id: "__alloyId2239"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId2239);
    checkout ? $.__views.__alloyId2239.addEventListener("click", checkout) : __defers["$.__views.__alloyId2239!click!checkout"] = true;
    $.__views.__alloyId2240 = Ti.UI.createView({
=======
<<<<<<< HEAD
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
=======
    $.__views.scrollView.add($.__views.__alloyId2239);
    checkout ? $.__views.__alloyId2239.addEventListener("click", checkout) : __defers["$.__views.__alloyId2239!click!checkout"] = true;
    $.__views.__alloyId2240 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.scrollView.add($.__views.__alloyId2239);
    checkout ? $.__views.__alloyId2239.addEventListener("click", checkout) : __defers["$.__views.__alloyId2239!click!checkout"] = true;
    $.__views.__alloyId2240 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> origin/master
        mod: "2",
        id: "__alloyId2240"
    });
    $.__views.__alloyId2239.add($.__views.__alloyId2240);
    $.__views.__alloyId2241 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        mod: "2",
        id: "__alloyId2241"
    });
    $.__views.__alloyId2240.add($.__views.__alloyId2241);
    $.__views.__alloyId2242 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        mod: "2",
        id: "__alloyId2242"
<<<<<<< HEAD
<<<<<<< HEAD
    });
    $.__views.__alloyId2241.add($.__views.__alloyId2242);
    $.__views.__alloyId2243 = Ti.UI.createLabel({
=======
    });
<<<<<<< HEAD
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
=======
    $.__views.__alloyId2241.add($.__views.__alloyId2242);
    $.__views.__alloyId2243 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    });
    $.__views.__alloyId2241.add($.__views.__alloyId2242);
    $.__views.__alloyId2243 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> origin/master
        mod: "2",
        id: "__alloyId2243"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2242.add($.__views.__alloyId2243);
    $.__views.__alloyId2244 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2011.add($.__views.__alloyId2012);
    $.__views.__alloyId2013 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId623"
    });
    $.__views.__alloyId622.add($.__views.__alloyId623);
    $.__views.__alloyId624 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2242.add($.__views.__alloyId2243);
    $.__views.__alloyId2244 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2242.add($.__views.__alloyId2243);
    $.__views.__alloyId2244 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> origin/master
        mod: "2",
        id: "__alloyId2244"
    });
    $.__views.__alloyId2242.add($.__views.__alloyId2244);
    $.__views.__alloyId2245 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        mod: "2",
        id: "__alloyId2245"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2240.add($.__views.__alloyId2245);
    $.__views.__alloyId2246 = Ti.UI.createView({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId2240.add($.__views.__alloyId2245);
    $.__views.__alloyId2246 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2240.add($.__views.__alloyId2245);
    $.__views.__alloyId2246 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> origin/master
        mod: "2",
        id: "__alloyId2246"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2245.add($.__views.__alloyId2246);
    $.__views.__alloyId2247 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId2245.add($.__views.__alloyId2246);
    $.__views.__alloyId2247 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2245.add($.__views.__alloyId2246);
    $.__views.__alloyId2247 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> origin/master
        mod: "2",
        id: "__alloyId2247"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2246.add($.__views.__alloyId2247);
    $.__views.__alloyId2248 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2015.add($.__views.__alloyId2016);
    $.__views.__alloyId2017 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId627"
    });
    $.__views.__alloyId626.add($.__views.__alloyId627);
    $.__views.__alloyId628 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2246.add($.__views.__alloyId2247);
    $.__views.__alloyId2248 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2246.add($.__views.__alloyId2247);
    $.__views.__alloyId2248 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> origin/master
        mod: "2",
        id: "__alloyId2248"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2246.add($.__views.__alloyId2248);
    $.__views.__alloyId2249 = Ti.UI.createView({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId2246.add($.__views.__alloyId2248);
    $.__views.__alloyId2249 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2246.add($.__views.__alloyId2248);
    $.__views.__alloyId2249 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> origin/master
        mod: "2",
        id: "__alloyId2249"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2239.add($.__views.__alloyId2249);
    $.__views.__alloyId2250 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2008.add($.__views.__alloyId2018);
    $.__views.__alloyId2019 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId629"
    });
    $.__views.__alloyId619.add($.__views.__alloyId629);
    $.__views.__alloyId630 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2239.add($.__views.__alloyId2249);
    $.__views.__alloyId2250 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2239.add($.__views.__alloyId2249);
    $.__views.__alloyId2250 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> origin/master
        mod: "2",
        id: "__alloyId2250"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2249.add($.__views.__alloyId2250);
    $.__views.__alloyId2251 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId2018.add($.__views.__alloyId2019);
    $.__views.__alloyId2020 = Ti.UI.createView({
>>>>>>> origin/master
=======
        id: "__alloyId630"
    });
    $.__views.__alloyId629.add($.__views.__alloyId630);
    $.__views.__alloyId631 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2249.add($.__views.__alloyId2250);
    $.__views.__alloyId2251 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2249.add($.__views.__alloyId2250);
    $.__views.__alloyId2251 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> origin/master
        mod: "2",
        id: "__alloyId2251"
    });
    $.__views.__alloyId2239.add($.__views.__alloyId2251);
    $.__views.__alloyId2252 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        mod: "2",
        id: "__alloyId2252"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2251.add($.__views.__alloyId2252);
    $.__views.__alloyId2253 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId2251.add($.__views.__alloyId2252);
    $.__views.__alloyId2253 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2251.add($.__views.__alloyId2252);
    $.__views.__alloyId2253 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> origin/master
        mod: "2",
        id: "__alloyId2253"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2252.add($.__views.__alloyId2253);
    $.__views.__alloyId2254 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2021.add($.__views.__alloyId2022);
    $.__views.__alloyId2023 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId633"
    });
    $.__views.__alloyId632.add($.__views.__alloyId633);
    $.__views.__alloyId634 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2252.add($.__views.__alloyId2253);
    $.__views.__alloyId2254 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2252.add($.__views.__alloyId2253);
    $.__views.__alloyId2254 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> origin/master
        mod: "2",
        id: "__alloyId2254"
    });
    $.__views.__alloyId2252.add($.__views.__alloyId2254);
    exports.destroy = function() {};
    _.extend($, $.__views);
<<<<<<< HEAD
<<<<<<< HEAD
    __defers["$.__views.__alloyId2223!click!checkout"] && $.__views.__alloyId2223.addEventListener("click", checkout);
    __defers["$.__views.__alloyId2239!click!checkout"] && $.__views.__alloyId2239.addEventListener("click", checkout);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId2181!click!checkout"] && $.__views.__alloyId2181.addEventListener("click", checkout);
    __defers["$.__views.__alloyId2197!click!checkout"] && $.__views.__alloyId2197.addEventListener("click", checkout);
=======
        id: "__alloyId634"
    });
    $.__views.__alloyId632.add($.__views.__alloyId634);
    exports.destroy = function() {};
    _.extend($, $.__views);
>>>>>>> Stashed changes
=======
    __defers["$.__views.__alloyId2223!click!checkout"] && $.__views.__alloyId2223.addEventListener("click", checkout);
    __defers["$.__views.__alloyId2239!click!checkout"] && $.__views.__alloyId2239.addEventListener("click", checkout);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    __defers["$.__views.__alloyId2223!click!checkout"] && $.__views.__alloyId2223.addEventListener("click", checkout);
    __defers["$.__views.__alloyId2239!click!checkout"] && $.__views.__alloyId2239.addEventListener("click", checkout);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;