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
    $.__views.__alloyId2319 = Alloy.createController("_header", {
        id: "__alloyId2319",
        __parentSymbol: $.__views.roamingCalls
    });
    $.__views.__alloyId2319.setParent($.__views.roamingCalls);
    $.__views.__alloyId2320 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId2320"
    });
    $.__views.roamingCalls.add($.__views.__alloyId2320);
    $.__views.__alloyId2321 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2321"
    });
    $.__views.__alloyId2320.add($.__views.__alloyId2321);
    $.__views.__alloyId2322 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2322"
    });
    $.__views.__alloyId2320.add($.__views.__alloyId2322);
    back ? $.__views.__alloyId2322.addEventListener("click", back) : __defers["$.__views.__alloyId2322!click!back"] = true;
    $.__views.__alloyId2323 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId2323"
    });
    $.__views.roamingCalls.add($.__views.__alloyId2323);
    $.__views.__alloyId2324 = Ti.UI.createLabel({
        text: "Roaming Calls",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId2324"
    });
    $.__views.__alloyId2323.add($.__views.__alloyId2324);
    var __alloyId2325 = [];
    $.__views.__alloyId2326 = Ti.UI.createTableViewSection({
        id: "__alloyId2326"
    });
    __alloyId2325.push($.__views.__alloyId2326);
    $.__views.__alloyId2327 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2327"
    });
    $.__views.__alloyId2326.add($.__views.__alloyId2327);
    $.__views.__alloyId2328 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2328"
    });
    $.__views.__alloyId2327.add($.__views.__alloyId2328);
    $.__views.__alloyId2329 = Ti.UI.createLabel({
        text: "01/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2329"
    });
    $.__views.__alloyId2328.add($.__views.__alloyId2329);
    $.__views.__alloyId2330 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2330"
    });
    $.__views.__alloyId2327.add($.__views.__alloyId2330);
    $.__views.__alloyId2331 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2331"
    });
    $.__views.__alloyId2330.add($.__views.__alloyId2331);
    $.__views.__alloyId2332 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2332"
    });
    $.__views.__alloyId2327.add($.__views.__alloyId2332);
    $.__views.__alloyId2333 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2333"
    });
    $.__views.__alloyId2332.add($.__views.__alloyId2333);
    $.__views.__alloyId2334 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2334"
    });
    $.__views.__alloyId2326.add($.__views.__alloyId2334);
    $.__views.__alloyId2335 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2335"
    });
    $.__views.__alloyId2334.add($.__views.__alloyId2335);
    $.__views.__alloyId2336 = Ti.UI.createLabel({
        text: "02/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2336"
    });
    $.__views.__alloyId2335.add($.__views.__alloyId2336);
    $.__views.__alloyId2337 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2337"
    });
    $.__views.__alloyId2334.add($.__views.__alloyId2337);
    $.__views.__alloyId2338 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2338"
    });
    $.__views.__alloyId2337.add($.__views.__alloyId2338);
    $.__views.__alloyId2339 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2339"
    });
    $.__views.__alloyId2334.add($.__views.__alloyId2339);
    $.__views.__alloyId2340 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2340"
    });
    $.__views.__alloyId2339.add($.__views.__alloyId2340);
    $.__views.__alloyId2341 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2341"
    });
    $.__views.__alloyId2326.add($.__views.__alloyId2341);
    $.__views.__alloyId2342 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2342"
    });
    $.__views.__alloyId2341.add($.__views.__alloyId2342);
    $.__views.__alloyId2343 = Ti.UI.createLabel({
        text: "03/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2343"
    });
    $.__views.__alloyId2342.add($.__views.__alloyId2343);
    $.__views.__alloyId2344 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2344"
    });
    $.__views.__alloyId2341.add($.__views.__alloyId2344);
    $.__views.__alloyId2345 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2345"
    });
    $.__views.__alloyId2344.add($.__views.__alloyId2345);
    $.__views.__alloyId2346 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2346"
    });
    $.__views.__alloyId2341.add($.__views.__alloyId2346);
    $.__views.__alloyId2347 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2347"
    });
    $.__views.__alloyId2346.add($.__views.__alloyId2347);
    $.__views.__alloyId2348 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2348"
    });
    $.__views.__alloyId2326.add($.__views.__alloyId2348);
    $.__views.__alloyId2349 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2349"
    });
    $.__views.__alloyId2348.add($.__views.__alloyId2349);
    $.__views.__alloyId2350 = Ti.UI.createLabel({
        text: "04/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2350"
    });
    $.__views.__alloyId2349.add($.__views.__alloyId2350);
    $.__views.__alloyId2351 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2351"
    });
    $.__views.__alloyId2348.add($.__views.__alloyId2351);
    $.__views.__alloyId2352 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2352"
    });
    $.__views.__alloyId2351.add($.__views.__alloyId2352);
    $.__views.__alloyId2353 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2353"
    });
    $.__views.__alloyId2348.add($.__views.__alloyId2353);
    $.__views.__alloyId2354 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2354"
    });
    $.__views.__alloyId2353.add($.__views.__alloyId2354);
    $.__views.__alloyId2355 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2355"
    });
    $.__views.__alloyId2326.add($.__views.__alloyId2355);
    $.__views.__alloyId2356 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2356"
    });
    $.__views.__alloyId2355.add($.__views.__alloyId2356);
    $.__views.__alloyId2357 = Ti.UI.createLabel({
        text: "05/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2357"
    });
    $.__views.__alloyId2356.add($.__views.__alloyId2357);
    $.__views.__alloyId2358 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2358"
    });
    $.__views.__alloyId2355.add($.__views.__alloyId2358);
    $.__views.__alloyId2359 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2359"
    });
    $.__views.__alloyId2358.add($.__views.__alloyId2359);
    $.__views.__alloyId2360 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2360"
    });
    $.__views.__alloyId2355.add($.__views.__alloyId2360);
    $.__views.__alloyId2361 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2361"
    });
    $.__views.__alloyId2360.add($.__views.__alloyId2361);
    $.__views.__alloyId2362 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2362"
    });
    $.__views.__alloyId2326.add($.__views.__alloyId2362);
    $.__views.__alloyId2363 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2363"
    });
    $.__views.__alloyId2362.add($.__views.__alloyId2363);
    $.__views.__alloyId2364 = Ti.UI.createLabel({
        text: "06/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2364"
    });
    $.__views.__alloyId2363.add($.__views.__alloyId2364);
    $.__views.__alloyId2365 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2365"
    });
    $.__views.__alloyId2362.add($.__views.__alloyId2365);
    $.__views.__alloyId2366 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2366"
    });
    $.__views.__alloyId2365.add($.__views.__alloyId2366);
    $.__views.__alloyId2367 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2367"
    });
    $.__views.__alloyId2362.add($.__views.__alloyId2367);
    $.__views.__alloyId2368 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2368"
    });
    $.__views.__alloyId2367.add($.__views.__alloyId2368);
    $.__views.__alloyId2369 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2369"
    });
    $.__views.__alloyId2326.add($.__views.__alloyId2369);
    $.__views.__alloyId2370 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2370"
    });
    $.__views.__alloyId2369.add($.__views.__alloyId2370);
    $.__views.__alloyId2371 = Ti.UI.createLabel({
        text: "07/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2371"
    });
    $.__views.__alloyId2370.add($.__views.__alloyId2371);
    $.__views.__alloyId2372 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2372"
    });
    $.__views.__alloyId2369.add($.__views.__alloyId2372);
    $.__views.__alloyId2373 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2373"
    });
    $.__views.__alloyId2372.add($.__views.__alloyId2373);
    $.__views.__alloyId2374 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2374"
    });
    $.__views.__alloyId2369.add($.__views.__alloyId2374);
    $.__views.__alloyId2375 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2375"
    });
    $.__views.__alloyId2374.add($.__views.__alloyId2375);
    $.__views.__alloyId2376 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2376"
    });
    $.__views.__alloyId2326.add($.__views.__alloyId2376);
    $.__views.__alloyId2377 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2377"
    });
    $.__views.__alloyId2376.add($.__views.__alloyId2377);
    $.__views.__alloyId2378 = Ti.UI.createLabel({
        text: "08/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2378"
    });
    $.__views.__alloyId2377.add($.__views.__alloyId2378);
    $.__views.__alloyId2379 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2379"
    });
    $.__views.__alloyId2376.add($.__views.__alloyId2379);
    $.__views.__alloyId2380 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2380"
    });
    $.__views.__alloyId2379.add($.__views.__alloyId2380);
    $.__views.__alloyId2381 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2381"
    });
    $.__views.__alloyId2376.add($.__views.__alloyId2381);
    $.__views.__alloyId2382 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2382"
    });
    $.__views.__alloyId2381.add($.__views.__alloyId2382);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId2325,
        id: "table",
        scrollable: "true"
    });
    $.__views.roamingCalls.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2322!click!back"] && $.__views.__alloyId2322.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;