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
    this.__controllerPath = "domesticVideo";
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
    $.__views.domesticVideo = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "domesticVideo"
    });
    $.__views.domesticVideo && $.addTopLevelView($.__views.domesticVideo);
    $.__views.__alloyId348 = Alloy.createController("_header", {
        id: "__alloyId348",
        __parentSymbol: $.__views.domesticVideo
    });
    $.__views.__alloyId348.setParent($.__views.domesticVideo);
    $.__views.__alloyId349 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId349"
    });
    $.__views.domesticVideo.add($.__views.__alloyId349);
    $.__views.__alloyId350 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId350"
    });
    $.__views.__alloyId349.add($.__views.__alloyId350);
    $.__views.__alloyId351 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId351"
    });
    $.__views.__alloyId349.add($.__views.__alloyId351);
    back ? $.__views.__alloyId351.addEventListener("click", back) : __defers["$.__views.__alloyId351!click!back"] = true;
    $.__views.__alloyId352 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId352"
    });
    $.__views.domesticVideo.add($.__views.__alloyId352);
    $.__views.__alloyId353 = Ti.UI.createLabel({
        text: "Domestic Video Calls",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId353"
    });
    $.__views.__alloyId352.add($.__views.__alloyId353);
    var __alloyId354 = [];
    $.__views.__alloyId355 = Ti.UI.createTableViewSection({
        id: "__alloyId355"
    });
    __alloyId354.push($.__views.__alloyId355);
    $.__views.__alloyId356 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId356"
    });
    $.__views.__alloyId355.add($.__views.__alloyId356);
    $.__views.__alloyId357 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId357"
    });
    $.__views.__alloyId356.add($.__views.__alloyId357);
    $.__views.__alloyId358 = Ti.UI.createLabel({
        text: "01/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId358"
    });
    $.__views.__alloyId357.add($.__views.__alloyId358);
    $.__views.__alloyId359 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId359"
    });
    $.__views.__alloyId356.add($.__views.__alloyId359);
    $.__views.__alloyId360 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId360"
    });
    $.__views.__alloyId359.add($.__views.__alloyId360);
    $.__views.__alloyId361 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId361"
    });
    $.__views.__alloyId356.add($.__views.__alloyId361);
    $.__views.__alloyId362 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId362"
    });
    $.__views.__alloyId361.add($.__views.__alloyId362);
    $.__views.__alloyId363 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId363"
    });
    $.__views.__alloyId355.add($.__views.__alloyId363);
    $.__views.__alloyId364 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId364"
    });
    $.__views.__alloyId363.add($.__views.__alloyId364);
    $.__views.__alloyId365 = Ti.UI.createLabel({
        text: "02/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId365"
    });
    $.__views.__alloyId364.add($.__views.__alloyId365);
    $.__views.__alloyId366 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId366"
    });
    $.__views.__alloyId363.add($.__views.__alloyId366);
    $.__views.__alloyId367 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId367"
    });
    $.__views.__alloyId366.add($.__views.__alloyId367);
    $.__views.__alloyId368 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId368"
    });
    $.__views.__alloyId363.add($.__views.__alloyId368);
    $.__views.__alloyId369 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId369"
    });
    $.__views.__alloyId368.add($.__views.__alloyId369);
    $.__views.__alloyId370 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId370"
    });
    $.__views.__alloyId355.add($.__views.__alloyId370);
    $.__views.__alloyId371 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId371"
    });
    $.__views.__alloyId370.add($.__views.__alloyId371);
    $.__views.__alloyId372 = Ti.UI.createLabel({
        text: "03/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId372"
    });
    $.__views.__alloyId371.add($.__views.__alloyId372);
    $.__views.__alloyId373 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId373"
    });
    $.__views.__alloyId370.add($.__views.__alloyId373);
    $.__views.__alloyId374 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId374"
    });
    $.__views.__alloyId373.add($.__views.__alloyId374);
    $.__views.__alloyId375 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId375"
    });
    $.__views.__alloyId370.add($.__views.__alloyId375);
    $.__views.__alloyId376 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId376"
    });
    $.__views.__alloyId375.add($.__views.__alloyId376);
    $.__views.__alloyId377 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId377"
    });
    $.__views.__alloyId355.add($.__views.__alloyId377);
    $.__views.__alloyId378 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId378"
    });
    $.__views.__alloyId377.add($.__views.__alloyId378);
    $.__views.__alloyId379 = Ti.UI.createLabel({
        text: "04/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId379"
    });
    $.__views.__alloyId378.add($.__views.__alloyId379);
    $.__views.__alloyId380 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId380"
    });
    $.__views.__alloyId377.add($.__views.__alloyId380);
    $.__views.__alloyId381 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId381"
    });
    $.__views.__alloyId380.add($.__views.__alloyId381);
    $.__views.__alloyId382 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId382"
    });
    $.__views.__alloyId377.add($.__views.__alloyId382);
    $.__views.__alloyId383 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId383"
    });
    $.__views.__alloyId382.add($.__views.__alloyId383);
    $.__views.__alloyId384 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId384"
    });
    $.__views.__alloyId355.add($.__views.__alloyId384);
    $.__views.__alloyId385 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId385"
    });
    $.__views.__alloyId384.add($.__views.__alloyId385);
    $.__views.__alloyId386 = Ti.UI.createLabel({
        text: "05/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId386"
    });
    $.__views.__alloyId385.add($.__views.__alloyId386);
    $.__views.__alloyId387 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId387"
    });
    $.__views.__alloyId384.add($.__views.__alloyId387);
    $.__views.__alloyId388 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId388"
    });
    $.__views.__alloyId387.add($.__views.__alloyId388);
    $.__views.__alloyId389 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId389"
    });
    $.__views.__alloyId384.add($.__views.__alloyId389);
    $.__views.__alloyId390 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId390"
    });
    $.__views.__alloyId389.add($.__views.__alloyId390);
    $.__views.__alloyId391 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId391"
    });
    $.__views.__alloyId355.add($.__views.__alloyId391);
    $.__views.__alloyId392 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId392"
    });
    $.__views.__alloyId391.add($.__views.__alloyId392);
    $.__views.__alloyId393 = Ti.UI.createLabel({
        text: "06/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId393"
    });
    $.__views.__alloyId392.add($.__views.__alloyId393);
    $.__views.__alloyId394 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId394"
    });
    $.__views.__alloyId391.add($.__views.__alloyId394);
    $.__views.__alloyId395 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId395"
    });
    $.__views.__alloyId394.add($.__views.__alloyId395);
    $.__views.__alloyId396 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId396"
    });
    $.__views.__alloyId391.add($.__views.__alloyId396);
    $.__views.__alloyId397 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId397"
    });
    $.__views.__alloyId396.add($.__views.__alloyId397);
    $.__views.__alloyId398 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId398"
    });
    $.__views.__alloyId355.add($.__views.__alloyId398);
    $.__views.__alloyId399 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId399"
    });
    $.__views.__alloyId398.add($.__views.__alloyId399);
    $.__views.__alloyId400 = Ti.UI.createLabel({
        text: "07/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId400"
    });
    $.__views.__alloyId399.add($.__views.__alloyId400);
    $.__views.__alloyId401 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId401"
    });
    $.__views.__alloyId398.add($.__views.__alloyId401);
    $.__views.__alloyId402 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId402"
    });
    $.__views.__alloyId401.add($.__views.__alloyId402);
    $.__views.__alloyId403 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId403"
    });
    $.__views.__alloyId398.add($.__views.__alloyId403);
    $.__views.__alloyId404 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId404"
    });
    $.__views.__alloyId403.add($.__views.__alloyId404);
    $.__views.__alloyId405 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId405"
    });
    $.__views.__alloyId355.add($.__views.__alloyId405);
    $.__views.__alloyId406 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId406"
    });
    $.__views.__alloyId405.add($.__views.__alloyId406);
    $.__views.__alloyId407 = Ti.UI.createLabel({
        text: "08/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId407"
    });
    $.__views.__alloyId406.add($.__views.__alloyId407);
    $.__views.__alloyId408 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId408"
    });
    $.__views.__alloyId405.add($.__views.__alloyId408);
    $.__views.__alloyId409 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId409"
    });
    $.__views.__alloyId408.add($.__views.__alloyId409);
    $.__views.__alloyId410 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId410"
    });
    $.__views.__alloyId405.add($.__views.__alloyId410);
    $.__views.__alloyId411 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId411"
    });
    $.__views.__alloyId410.add($.__views.__alloyId411);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId354,
        id: "table",
        scrollable: "true"
    });
    $.__views.domesticVideo.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId351!click!back"] && $.__views.__alloyId351.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;