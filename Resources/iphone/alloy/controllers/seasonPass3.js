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
    $.__views.__alloyId2172 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId2416 = Ti.UI.createView({
=======
    $.__views.__alloyId2172 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
<<<<<<< HEAD
        id: "__alloyId2172"
    });
    $.__views.scrollView.add($.__views.__alloyId2172);
    $.__views.__alloyId2173 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId2416"
    });
    $.__views.scrollView.add($.__views.__alloyId2416);
    $.__views.__alloyId2417 = Ti.UI.createView({
=======
        id: "__alloyId2172"
    });
    $.__views.scrollView.add($.__views.__alloyId2172);
    $.__views.__alloyId2173 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
<<<<<<< HEAD
        id: "__alloyId2173"
    });
=======
<<<<<<< HEAD
        id: "__alloyId2417"
    });
    $.__views.__alloyId2416.add($.__views.__alloyId2417);
    $.__views.__alloyId2418 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2418"
    });
    $.__views.__alloyId2417.add($.__views.__alloyId2418);
    $.__views.__alloyId2419 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2419"
    });
    $.__views.__alloyId2418.add($.__views.__alloyId2419);
    $.__views.__alloyId2420 = Ti.UI.createLabel({
=======
        id: "__alloyId2173"
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId2172.add($.__views.__alloyId2173);
    $.__views.__alloyId2174 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2174"
    });
    $.__views.__alloyId2173.add($.__views.__alloyId2174);
    $.__views.__alloyId2175 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2175"
    });
    $.__views.__alloyId2174.add($.__views.__alloyId2175);
    $.__views.__alloyId2176 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2420"
    });
    $.__views.__alloyId2419.add($.__views.__alloyId2420);
    $.__views.__alloyId2421 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2176"
    });
    $.__views.__alloyId2175.add($.__views.__alloyId2176);
    $.__views.__alloyId2177 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2421"
    });
    $.__views.__alloyId2419.add($.__views.__alloyId2421);
    $.__views.__alloyId2422 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2422"
    });
    $.__views.__alloyId2417.add($.__views.__alloyId2422);
    $.__views.__alloyId2423 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2177"
    });
    $.__views.__alloyId2175.add($.__views.__alloyId2177);
    $.__views.__alloyId2178 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2178"
    });
    $.__views.__alloyId2173.add($.__views.__alloyId2178);
    $.__views.__alloyId2179 = Ti.UI.createView({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
<<<<<<< HEAD
        id: "__alloyId2179"
    });
    $.__views.__alloyId2178.add($.__views.__alloyId2179);
    $.__views.__alloyId2180 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2423"
    });
    $.__views.__alloyId2422.add($.__views.__alloyId2423);
    $.__views.__alloyId2424 = Ti.UI.createLabel({
=======
        id: "__alloyId2179"
    });
    $.__views.__alloyId2178.add($.__views.__alloyId2179);
    $.__views.__alloyId2180 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2424"
    });
    $.__views.__alloyId2423.add($.__views.__alloyId2424);
    $.__views.__alloyId2425 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2180"
    });
    $.__views.__alloyId2179.add($.__views.__alloyId2180);
    $.__views.__alloyId2181 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2181"
    });
    $.__views.__alloyId2179.add($.__views.__alloyId2181);
    $.__views.__alloyId2182 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId2425"
    });
    $.__views.__alloyId2423.add($.__views.__alloyId2425);
    $.__views.__alloyId2426 = Ti.UI.createView({
=======
        id: "__alloyId2181"
    });
    $.__views.__alloyId2179.add($.__views.__alloyId2181);
    $.__views.__alloyId2182 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2426"
    });
    $.__views.__alloyId2416.add($.__views.__alloyId2426);
    $.__views.__alloyId2427 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2182"
    });
    $.__views.__alloyId2172.add($.__views.__alloyId2182);
    $.__views.__alloyId2183 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2427"
    });
    $.__views.__alloyId2426.add($.__views.__alloyId2427);
    $.__views.__alloyId2428 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2183"
    });
    $.__views.__alloyId2182.add($.__views.__alloyId2183);
    $.__views.__alloyId2184 = Ti.UI.createView({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
<<<<<<< HEAD
        id: "__alloyId2184"
    });
    $.__views.__alloyId2172.add($.__views.__alloyId2184);
    $.__views.__alloyId2185 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2185"
    });
    $.__views.__alloyId2184.add($.__views.__alloyId2185);
    $.__views.__alloyId2186 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2428"
    });
    $.__views.__alloyId2416.add($.__views.__alloyId2428);
    $.__views.__alloyId2429 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2429"
    });
    $.__views.__alloyId2428.add($.__views.__alloyId2429);
    $.__views.__alloyId2430 = Ti.UI.createLabel({
=======
        id: "__alloyId2184"
    });
    $.__views.__alloyId2172.add($.__views.__alloyId2184);
    $.__views.__alloyId2185 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2185"
    });
    $.__views.__alloyId2184.add($.__views.__alloyId2185);
    $.__views.__alloyId2186 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2430"
    });
    $.__views.__alloyId2429.add($.__views.__alloyId2430);
    $.__views.__alloyId2431 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2186"
    });
    $.__views.__alloyId2185.add($.__views.__alloyId2186);
    $.__views.__alloyId2187 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2431"
    });
    $.__views.__alloyId2429.add($.__views.__alloyId2431);
    $.__views.__alloyId2432 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2187"
    });
    $.__views.__alloyId2185.add($.__views.__alloyId2187);
    $.__views.__alloyId2188 = Ti.UI.createView({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId2188"
    });
    $.__views.scrollView.add($.__views.__alloyId2188);
    $.__views.__alloyId2189 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId2432"
    });
    $.__views.scrollView.add($.__views.__alloyId2432);
    $.__views.__alloyId2433 = Ti.UI.createView({
=======
        id: "__alloyId2188"
    });
    $.__views.scrollView.add($.__views.__alloyId2188);
    $.__views.__alloyId2189 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
<<<<<<< HEAD
        id: "__alloyId2189"
    });
=======
<<<<<<< HEAD
        id: "__alloyId2433"
    });
    $.__views.__alloyId2432.add($.__views.__alloyId2433);
    $.__views.__alloyId2434 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2434"
    });
    $.__views.__alloyId2433.add($.__views.__alloyId2434);
    $.__views.__alloyId2435 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2435"
    });
    $.__views.__alloyId2434.add($.__views.__alloyId2435);
    $.__views.__alloyId2436 = Ti.UI.createLabel({
=======
        id: "__alloyId2189"
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId2188.add($.__views.__alloyId2189);
    $.__views.__alloyId2190 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2190"
    });
    $.__views.__alloyId2189.add($.__views.__alloyId2190);
    $.__views.__alloyId2191 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2191"
    });
    $.__views.__alloyId2190.add($.__views.__alloyId2191);
    $.__views.__alloyId2192 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2436"
    });
    $.__views.__alloyId2435.add($.__views.__alloyId2436);
    $.__views.__alloyId2437 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2192"
    });
    $.__views.__alloyId2191.add($.__views.__alloyId2192);
    $.__views.__alloyId2193 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2437"
    });
    $.__views.__alloyId2435.add($.__views.__alloyId2437);
    $.__views.__alloyId2438 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2438"
    });
    $.__views.__alloyId2433.add($.__views.__alloyId2438);
    $.__views.__alloyId2439 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2193"
    });
    $.__views.__alloyId2191.add($.__views.__alloyId2193);
    $.__views.__alloyId2194 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2194"
    });
    $.__views.__alloyId2189.add($.__views.__alloyId2194);
    $.__views.__alloyId2195 = Ti.UI.createView({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
<<<<<<< HEAD
        id: "__alloyId2195"
    });
    $.__views.__alloyId2194.add($.__views.__alloyId2195);
    $.__views.__alloyId2196 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2439"
    });
    $.__views.__alloyId2438.add($.__views.__alloyId2439);
    $.__views.__alloyId2440 = Ti.UI.createLabel({
=======
        id: "__alloyId2195"
    });
    $.__views.__alloyId2194.add($.__views.__alloyId2195);
    $.__views.__alloyId2196 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2440"
    });
    $.__views.__alloyId2439.add($.__views.__alloyId2440);
    $.__views.__alloyId2441 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2196"
    });
    $.__views.__alloyId2195.add($.__views.__alloyId2196);
    $.__views.__alloyId2197 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2197"
    });
    $.__views.__alloyId2195.add($.__views.__alloyId2197);
    $.__views.__alloyId2198 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId2441"
    });
    $.__views.__alloyId2439.add($.__views.__alloyId2441);
    $.__views.__alloyId2442 = Ti.UI.createView({
=======
        id: "__alloyId2197"
    });
    $.__views.__alloyId2195.add($.__views.__alloyId2197);
    $.__views.__alloyId2198 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2442"
    });
    $.__views.__alloyId2432.add($.__views.__alloyId2442);
    $.__views.__alloyId2443 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2198"
    });
    $.__views.__alloyId2188.add($.__views.__alloyId2198);
    $.__views.__alloyId2199 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2443"
    });
    $.__views.__alloyId2442.add($.__views.__alloyId2443);
    $.__views.__alloyId2444 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2199"
    });
    $.__views.__alloyId2198.add($.__views.__alloyId2199);
    $.__views.__alloyId2200 = Ti.UI.createView({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
<<<<<<< HEAD
        id: "__alloyId2200"
    });
    $.__views.__alloyId2188.add($.__views.__alloyId2200);
    $.__views.__alloyId2201 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2201"
    });
    $.__views.__alloyId2200.add($.__views.__alloyId2201);
    $.__views.__alloyId2202 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2444"
    });
    $.__views.__alloyId2432.add($.__views.__alloyId2444);
    $.__views.__alloyId2445 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2445"
    });
    $.__views.__alloyId2444.add($.__views.__alloyId2445);
    $.__views.__alloyId2446 = Ti.UI.createLabel({
=======
        id: "__alloyId2200"
    });
    $.__views.__alloyId2188.add($.__views.__alloyId2200);
    $.__views.__alloyId2201 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2201"
    });
    $.__views.__alloyId2200.add($.__views.__alloyId2201);
    $.__views.__alloyId2202 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2446"
    });
    $.__views.__alloyId2445.add($.__views.__alloyId2446);
    $.__views.__alloyId2447 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2202"
    });
    $.__views.__alloyId2201.add($.__views.__alloyId2202);
    $.__views.__alloyId2203 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2203"
    });
    $.__views.__alloyId2201.add($.__views.__alloyId2203);
=======
<<<<<<< HEAD
        id: "__alloyId2447"
    });
    $.__views.__alloyId2445.add($.__views.__alloyId2447);
=======
        id: "__alloyId2203"
    });
    $.__views.__alloyId2201.add($.__views.__alloyId2203);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;