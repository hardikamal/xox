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
    this.__controllerPath = "domesticSMS";
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
    $.__views.domesticSMS = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "domesticSMS"
    });
    $.__views.domesticSMS && $.addTopLevelView($.__views.domesticSMS);
    $.__views.__alloyId287 = Alloy.createController("_header", {
        id: "__alloyId287",
        __parentSymbol: $.__views.domesticSMS
    });
    $.__views.__alloyId287.setParent($.__views.domesticSMS);
    $.__views.__alloyId288 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId288"
    });
    $.__views.domesticSMS.add($.__views.__alloyId288);
    $.__views.__alloyId289 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId289"
    });
    $.__views.__alloyId288.add($.__views.__alloyId289);
    $.__views.__alloyId290 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId290"
    });
    $.__views.__alloyId288.add($.__views.__alloyId290);
    back ? $.__views.__alloyId290.addEventListener("click", back) : __defers["$.__views.__alloyId290!click!back"] = true;
    $.__views.__alloyId291 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId291"
    });
    $.__views.domesticSMS.add($.__views.__alloyId291);
    $.__views.__alloyId292 = Ti.UI.createLabel({
        text: "Domestic SMS",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId292"
    });
    $.__views.__alloyId291.add($.__views.__alloyId292);
    var __alloyId293 = [];
    $.__views.__alloyId294 = Ti.UI.createTableViewSection({
        id: "__alloyId294"
    });
    __alloyId293.push($.__views.__alloyId294);
    $.__views.__alloyId295 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId295"
    });
    $.__views.__alloyId294.add($.__views.__alloyId295);
    $.__views.__alloyId296 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId296"
    });
    $.__views.__alloyId295.add($.__views.__alloyId296);
    $.__views.__alloyId297 = Ti.UI.createLabel({
        text: "01/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId297"
    });
    $.__views.__alloyId296.add($.__views.__alloyId297);
    $.__views.__alloyId298 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId298"
    });
    $.__views.__alloyId295.add($.__views.__alloyId298);
    $.__views.__alloyId299 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId299"
    });
    $.__views.__alloyId298.add($.__views.__alloyId299);
    $.__views.__alloyId300 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId300"
    });
    $.__views.__alloyId295.add($.__views.__alloyId300);
    $.__views.__alloyId301 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId301"
    });
    $.__views.__alloyId300.add($.__views.__alloyId301);
    $.__views.__alloyId302 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId302"
    });
    $.__views.__alloyId294.add($.__views.__alloyId302);
    $.__views.__alloyId303 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId303"
    });
    $.__views.__alloyId302.add($.__views.__alloyId303);
    $.__views.__alloyId304 = Ti.UI.createLabel({
        text: "02/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId304"
    });
    $.__views.__alloyId303.add($.__views.__alloyId304);
    $.__views.__alloyId305 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId305"
    });
    $.__views.__alloyId302.add($.__views.__alloyId305);
    $.__views.__alloyId306 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId306"
    });
    $.__views.__alloyId305.add($.__views.__alloyId306);
    $.__views.__alloyId307 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId307"
    });
    $.__views.__alloyId302.add($.__views.__alloyId307);
    $.__views.__alloyId308 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId308"
    });
    $.__views.__alloyId307.add($.__views.__alloyId308);
    $.__views.__alloyId309 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId309"
    });
    $.__views.__alloyId294.add($.__views.__alloyId309);
    $.__views.__alloyId310 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId310"
    });
    $.__views.__alloyId309.add($.__views.__alloyId310);
    $.__views.__alloyId311 = Ti.UI.createLabel({
        text: "03/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId311"
    });
    $.__views.__alloyId310.add($.__views.__alloyId311);
    $.__views.__alloyId312 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId312"
    });
    $.__views.__alloyId309.add($.__views.__alloyId312);
    $.__views.__alloyId313 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId313"
    });
    $.__views.__alloyId312.add($.__views.__alloyId313);
    $.__views.__alloyId314 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId314"
    });
    $.__views.__alloyId309.add($.__views.__alloyId314);
    $.__views.__alloyId315 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId315"
    });
    $.__views.__alloyId314.add($.__views.__alloyId315);
    $.__views.__alloyId316 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId316"
    });
    $.__views.__alloyId294.add($.__views.__alloyId316);
    $.__views.__alloyId317 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId317"
    });
    $.__views.__alloyId316.add($.__views.__alloyId317);
    $.__views.__alloyId318 = Ti.UI.createLabel({
        text: "04/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId318"
    });
    $.__views.__alloyId317.add($.__views.__alloyId318);
    $.__views.__alloyId319 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId319"
    });
    $.__views.__alloyId316.add($.__views.__alloyId319);
    $.__views.__alloyId320 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId320"
    });
    $.__views.__alloyId319.add($.__views.__alloyId320);
    $.__views.__alloyId321 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId321"
    });
    $.__views.__alloyId316.add($.__views.__alloyId321);
    $.__views.__alloyId322 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId322"
    });
    $.__views.__alloyId321.add($.__views.__alloyId322);
    $.__views.__alloyId323 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId323"
    });
    $.__views.__alloyId294.add($.__views.__alloyId323);
    $.__views.__alloyId324 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId324"
    });
    $.__views.__alloyId323.add($.__views.__alloyId324);
    $.__views.__alloyId325 = Ti.UI.createLabel({
        text: "05/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId325"
    });
    $.__views.__alloyId324.add($.__views.__alloyId325);
    $.__views.__alloyId326 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId326"
    });
    $.__views.__alloyId323.add($.__views.__alloyId326);
    $.__views.__alloyId327 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId327"
    });
    $.__views.__alloyId326.add($.__views.__alloyId327);
    $.__views.__alloyId328 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId328"
    });
    $.__views.__alloyId323.add($.__views.__alloyId328);
    $.__views.__alloyId329 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId329"
    });
    $.__views.__alloyId328.add($.__views.__alloyId329);
    $.__views.__alloyId330 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId330"
    });
    $.__views.__alloyId294.add($.__views.__alloyId330);
    $.__views.__alloyId331 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId331"
    });
    $.__views.__alloyId330.add($.__views.__alloyId331);
    $.__views.__alloyId332 = Ti.UI.createLabel({
        text: "06/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId332"
    });
    $.__views.__alloyId331.add($.__views.__alloyId332);
    $.__views.__alloyId333 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId333"
    });
    $.__views.__alloyId330.add($.__views.__alloyId333);
    $.__views.__alloyId334 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId334"
    });
    $.__views.__alloyId333.add($.__views.__alloyId334);
    $.__views.__alloyId335 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId335"
    });
    $.__views.__alloyId330.add($.__views.__alloyId335);
    $.__views.__alloyId336 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId336"
    });
    $.__views.__alloyId335.add($.__views.__alloyId336);
    $.__views.__alloyId337 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId337"
    });
    $.__views.__alloyId294.add($.__views.__alloyId337);
    $.__views.__alloyId338 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId338"
    });
    $.__views.__alloyId337.add($.__views.__alloyId338);
    $.__views.__alloyId339 = Ti.UI.createLabel({
        text: "07/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId339"
    });
    $.__views.__alloyId338.add($.__views.__alloyId339);
    $.__views.__alloyId340 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId340"
    });
    $.__views.__alloyId337.add($.__views.__alloyId340);
    $.__views.__alloyId341 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId341"
    });
    $.__views.__alloyId340.add($.__views.__alloyId341);
    $.__views.__alloyId342 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId342"
    });
    $.__views.__alloyId337.add($.__views.__alloyId342);
    $.__views.__alloyId343 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId343"
    });
    $.__views.__alloyId342.add($.__views.__alloyId343);
    $.__views.__alloyId344 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId344"
    });
    $.__views.__alloyId294.add($.__views.__alloyId344);
    $.__views.__alloyId345 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId345"
    });
    $.__views.__alloyId344.add($.__views.__alloyId345);
    $.__views.__alloyId346 = Ti.UI.createLabel({
        text: "08/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId346"
    });
    $.__views.__alloyId345.add($.__views.__alloyId346);
    $.__views.__alloyId347 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId347"
    });
    $.__views.__alloyId344.add($.__views.__alloyId347);
    $.__views.__alloyId348 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId348"
    });
    $.__views.__alloyId347.add($.__views.__alloyId348);
    $.__views.__alloyId349 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId349"
    });
    $.__views.__alloyId344.add($.__views.__alloyId349);
    $.__views.__alloyId350 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId350"
    });
    $.__views.__alloyId349.add($.__views.__alloyId350);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId293,
        id: "table",
        scrollable: "true"
    });
    $.__views.domesticSMS.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId290!click!back"] && $.__views.__alloyId290.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;