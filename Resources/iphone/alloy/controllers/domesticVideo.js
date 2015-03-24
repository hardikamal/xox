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
    $.__views.__alloyId303 = Alloy.createController("_header", {
        id: "__alloyId303",
        __parentSymbol: $.__views.domesticVideo
    });
    $.__views.__alloyId303.setParent($.__views.domesticVideo);
    $.__views.__alloyId304 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId304"
    });
    $.__views.domesticVideo.add($.__views.__alloyId304);
    $.__views.__alloyId305 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId305"
    });
    $.__views.__alloyId304.add($.__views.__alloyId305);
    $.__views.__alloyId306 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId306"
    });
    $.__views.__alloyId304.add($.__views.__alloyId306);
    back ? $.__views.__alloyId306.addEventListener("click", back) : __defers["$.__views.__alloyId306!click!back"] = true;
    $.__views.__alloyId307 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId307"
    });
    $.__views.domesticVideo.add($.__views.__alloyId307);
    $.__views.__alloyId308 = Ti.UI.createLabel({
        text: "Domestic Video Calls",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId308"
    });
    $.__views.__alloyId307.add($.__views.__alloyId308);
    var __alloyId309 = [];
    $.__views.__alloyId310 = Ti.UI.createTableViewSection({
        id: "__alloyId310"
    });
    __alloyId309.push($.__views.__alloyId310);
    $.__views.__alloyId311 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId311"
    });
    $.__views.__alloyId310.add($.__views.__alloyId311);
    $.__views.__alloyId312 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId312"
    });
    $.__views.__alloyId311.add($.__views.__alloyId312);
    $.__views.__alloyId313 = Ti.UI.createLabel({
        text: "01/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId313"
    });
    $.__views.__alloyId312.add($.__views.__alloyId313);
    $.__views.__alloyId314 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId314"
    });
    $.__views.__alloyId311.add($.__views.__alloyId314);
    $.__views.__alloyId315 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId315"
    });
    $.__views.__alloyId314.add($.__views.__alloyId315);
    $.__views.__alloyId316 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId316"
    });
    $.__views.__alloyId311.add($.__views.__alloyId316);
    $.__views.__alloyId317 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId317"
    });
    $.__views.__alloyId316.add($.__views.__alloyId317);
    $.__views.__alloyId318 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId318"
    });
    $.__views.__alloyId310.add($.__views.__alloyId318);
    $.__views.__alloyId319 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId319"
    });
    $.__views.__alloyId318.add($.__views.__alloyId319);
    $.__views.__alloyId320 = Ti.UI.createLabel({
        text: "02/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId320"
    });
    $.__views.__alloyId319.add($.__views.__alloyId320);
    $.__views.__alloyId321 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId321"
    });
    $.__views.__alloyId318.add($.__views.__alloyId321);
    $.__views.__alloyId322 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId322"
    });
    $.__views.__alloyId321.add($.__views.__alloyId322);
    $.__views.__alloyId323 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId323"
    });
    $.__views.__alloyId318.add($.__views.__alloyId323);
    $.__views.__alloyId324 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId324"
    });
    $.__views.__alloyId323.add($.__views.__alloyId324);
    $.__views.__alloyId325 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId325"
    });
    $.__views.__alloyId310.add($.__views.__alloyId325);
    $.__views.__alloyId326 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId326"
    });
    $.__views.__alloyId325.add($.__views.__alloyId326);
    $.__views.__alloyId327 = Ti.UI.createLabel({
        text: "03/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId327"
    });
    $.__views.__alloyId326.add($.__views.__alloyId327);
    $.__views.__alloyId328 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId328"
    });
    $.__views.__alloyId325.add($.__views.__alloyId328);
    $.__views.__alloyId329 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId329"
    });
    $.__views.__alloyId328.add($.__views.__alloyId329);
    $.__views.__alloyId330 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId330"
    });
    $.__views.__alloyId325.add($.__views.__alloyId330);
    $.__views.__alloyId331 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId331"
    });
    $.__views.__alloyId330.add($.__views.__alloyId331);
    $.__views.__alloyId332 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId332"
    });
    $.__views.__alloyId310.add($.__views.__alloyId332);
    $.__views.__alloyId333 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId333"
    });
    $.__views.__alloyId332.add($.__views.__alloyId333);
    $.__views.__alloyId334 = Ti.UI.createLabel({
        text: "04/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId334"
    });
    $.__views.__alloyId333.add($.__views.__alloyId334);
    $.__views.__alloyId335 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId335"
    });
    $.__views.__alloyId332.add($.__views.__alloyId335);
    $.__views.__alloyId336 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId336"
    });
    $.__views.__alloyId335.add($.__views.__alloyId336);
    $.__views.__alloyId337 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId337"
    });
    $.__views.__alloyId332.add($.__views.__alloyId337);
    $.__views.__alloyId338 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId338"
    });
    $.__views.__alloyId337.add($.__views.__alloyId338);
    $.__views.__alloyId339 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId339"
    });
    $.__views.__alloyId310.add($.__views.__alloyId339);
    $.__views.__alloyId340 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId340"
    });
    $.__views.__alloyId339.add($.__views.__alloyId340);
    $.__views.__alloyId341 = Ti.UI.createLabel({
        text: "05/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId341"
    });
    $.__views.__alloyId340.add($.__views.__alloyId341);
    $.__views.__alloyId342 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId342"
    });
    $.__views.__alloyId339.add($.__views.__alloyId342);
    $.__views.__alloyId343 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId343"
    });
    $.__views.__alloyId342.add($.__views.__alloyId343);
    $.__views.__alloyId344 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId344"
    });
    $.__views.__alloyId339.add($.__views.__alloyId344);
    $.__views.__alloyId345 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId345"
    });
    $.__views.__alloyId344.add($.__views.__alloyId345);
    $.__views.__alloyId346 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId346"
    });
    $.__views.__alloyId310.add($.__views.__alloyId346);
    $.__views.__alloyId347 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId347"
    });
    $.__views.__alloyId346.add($.__views.__alloyId347);
    $.__views.__alloyId348 = Ti.UI.createLabel({
        text: "06/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId348"
    });
    $.__views.__alloyId347.add($.__views.__alloyId348);
    $.__views.__alloyId349 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId349"
    });
    $.__views.__alloyId346.add($.__views.__alloyId349);
    $.__views.__alloyId350 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId350"
    });
    $.__views.__alloyId349.add($.__views.__alloyId350);
    $.__views.__alloyId351 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId351"
    });
    $.__views.__alloyId346.add($.__views.__alloyId351);
    $.__views.__alloyId352 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId352"
    });
    $.__views.__alloyId351.add($.__views.__alloyId352);
    $.__views.__alloyId353 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId353"
    });
    $.__views.__alloyId310.add($.__views.__alloyId353);
    $.__views.__alloyId354 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId354"
    });
    $.__views.__alloyId353.add($.__views.__alloyId354);
    $.__views.__alloyId355 = Ti.UI.createLabel({
        text: "07/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId355"
    });
    $.__views.__alloyId354.add($.__views.__alloyId355);
    $.__views.__alloyId356 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId356"
    });
    $.__views.__alloyId353.add($.__views.__alloyId356);
    $.__views.__alloyId357 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId357"
    });
    $.__views.__alloyId356.add($.__views.__alloyId357);
    $.__views.__alloyId358 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId358"
    });
    $.__views.__alloyId353.add($.__views.__alloyId358);
    $.__views.__alloyId359 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId359"
    });
    $.__views.__alloyId358.add($.__views.__alloyId359);
    $.__views.__alloyId360 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId360"
    });
    $.__views.__alloyId310.add($.__views.__alloyId360);
    $.__views.__alloyId361 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId361"
    });
    $.__views.__alloyId360.add($.__views.__alloyId361);
    $.__views.__alloyId362 = Ti.UI.createLabel({
        text: "08/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId362"
    });
    $.__views.__alloyId361.add($.__views.__alloyId362);
    $.__views.__alloyId363 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId363"
    });
    $.__views.__alloyId360.add($.__views.__alloyId363);
    $.__views.__alloyId364 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId364"
    });
    $.__views.__alloyId363.add($.__views.__alloyId364);
    $.__views.__alloyId365 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId365"
    });
    $.__views.__alloyId360.add($.__views.__alloyId365);
    $.__views.__alloyId366 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId366"
    });
    $.__views.__alloyId365.add($.__views.__alloyId366);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId309,
        id: "table",
        scrollable: "true"
    });
    $.__views.domesticVideo.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId306!click!back"] && $.__views.__alloyId306.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;