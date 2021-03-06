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
    this.__controllerPath = "domesticCallStatement";
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
    $.__views.domesticCallStatement = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "domesticCallStatement"
    });
    $.__views.domesticCallStatement && $.addTopLevelView($.__views.domesticCallStatement);
    $.__views.__alloyId220 = Alloy.createController("_header", {
        id: "__alloyId220",
        __parentSymbol: $.__views.domesticCallStatement
    });
    $.__views.__alloyId220.setParent($.__views.domesticCallStatement);
    $.__views.__alloyId221 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId221"
    });
    $.__views.domesticCallStatement.add($.__views.__alloyId221);
    $.__views.__alloyId222 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId222"
    });
    $.__views.__alloyId221.add($.__views.__alloyId222);
    $.__views.__alloyId223 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId223"
    });
    $.__views.__alloyId221.add($.__views.__alloyId223);
    back ? $.__views.__alloyId223.addEventListener("click", back) : __defers["$.__views.__alloyId223!click!back"] = true;
    $.__views.__alloyId224 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId224"
    });
    $.__views.domesticCallStatement.add($.__views.__alloyId224);
    $.__views.__alloyId225 = Ti.UI.createLabel({
        text: "Domestic Voice Calls",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId225"
    });
    $.__views.__alloyId224.add($.__views.__alloyId225);
    var __alloyId226 = [];
    $.__views.__alloyId227 = Ti.UI.createTableViewSection({
        id: "__alloyId227"
    });
    __alloyId226.push($.__views.__alloyId227);
    $.__views.__alloyId228 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId228"
    });
    $.__views.__alloyId227.add($.__views.__alloyId228);
    $.__views.__alloyId229 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId229"
    });
    $.__views.__alloyId228.add($.__views.__alloyId229);
    $.__views.__alloyId230 = Ti.UI.createLabel({
        text: "01/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId230"
    });
    $.__views.__alloyId229.add($.__views.__alloyId230);
    $.__views.__alloyId231 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId231"
    });
    $.__views.__alloyId228.add($.__views.__alloyId231);
    $.__views.__alloyId232 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId232"
    });
    $.__views.__alloyId231.add($.__views.__alloyId232);
    $.__views.__alloyId233 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId233"
    });
    $.__views.__alloyId228.add($.__views.__alloyId233);
    $.__views.__alloyId234 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId234"
    });
    $.__views.__alloyId233.add($.__views.__alloyId234);
    $.__views.__alloyId235 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId235"
    });
    $.__views.__alloyId227.add($.__views.__alloyId235);
    $.__views.__alloyId236 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId236"
    });
    $.__views.__alloyId235.add($.__views.__alloyId236);
    $.__views.__alloyId237 = Ti.UI.createLabel({
        text: "02/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId237"
    });
    $.__views.__alloyId236.add($.__views.__alloyId237);
    $.__views.__alloyId238 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId238"
    });
    $.__views.__alloyId235.add($.__views.__alloyId238);
    $.__views.__alloyId239 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId239"
    });
    $.__views.__alloyId238.add($.__views.__alloyId239);
    $.__views.__alloyId240 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId240"
    });
    $.__views.__alloyId235.add($.__views.__alloyId240);
    $.__views.__alloyId241 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId241"
    });
    $.__views.__alloyId240.add($.__views.__alloyId241);
    $.__views.__alloyId242 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId242"
    });
    $.__views.__alloyId227.add($.__views.__alloyId242);
    $.__views.__alloyId243 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId243"
    });
    $.__views.__alloyId242.add($.__views.__alloyId243);
    $.__views.__alloyId244 = Ti.UI.createLabel({
        text: "03/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId244"
    });
    $.__views.__alloyId243.add($.__views.__alloyId244);
    $.__views.__alloyId245 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId245"
    });
    $.__views.__alloyId242.add($.__views.__alloyId245);
    $.__views.__alloyId246 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId246"
    });
    $.__views.__alloyId245.add($.__views.__alloyId246);
    $.__views.__alloyId247 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId247"
    });
    $.__views.__alloyId242.add($.__views.__alloyId247);
    $.__views.__alloyId248 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId248"
    });
    $.__views.__alloyId247.add($.__views.__alloyId248);
    $.__views.__alloyId249 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId249"
    });
    $.__views.__alloyId227.add($.__views.__alloyId249);
    $.__views.__alloyId250 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId250"
    });
    $.__views.__alloyId249.add($.__views.__alloyId250);
    $.__views.__alloyId251 = Ti.UI.createLabel({
        text: "04/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId251"
    });
    $.__views.__alloyId250.add($.__views.__alloyId251);
    $.__views.__alloyId252 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId252"
    });
    $.__views.__alloyId249.add($.__views.__alloyId252);
    $.__views.__alloyId253 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId253"
    });
    $.__views.__alloyId252.add($.__views.__alloyId253);
    $.__views.__alloyId254 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId254"
    });
    $.__views.__alloyId249.add($.__views.__alloyId254);
    $.__views.__alloyId255 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId255"
    });
    $.__views.__alloyId254.add($.__views.__alloyId255);
    $.__views.__alloyId256 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId256"
    });
    $.__views.__alloyId227.add($.__views.__alloyId256);
    $.__views.__alloyId257 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId257"
    });
    $.__views.__alloyId256.add($.__views.__alloyId257);
    $.__views.__alloyId258 = Ti.UI.createLabel({
        text: "05/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId258"
    });
    $.__views.__alloyId257.add($.__views.__alloyId258);
    $.__views.__alloyId259 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId259"
    });
    $.__views.__alloyId256.add($.__views.__alloyId259);
    $.__views.__alloyId260 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId260"
    });
    $.__views.__alloyId259.add($.__views.__alloyId260);
    $.__views.__alloyId261 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId261"
    });
    $.__views.__alloyId256.add($.__views.__alloyId261);
    $.__views.__alloyId262 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId262"
    });
    $.__views.__alloyId261.add($.__views.__alloyId262);
    $.__views.__alloyId263 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId263"
    });
    $.__views.__alloyId227.add($.__views.__alloyId263);
    $.__views.__alloyId264 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId264"
    });
    $.__views.__alloyId263.add($.__views.__alloyId264);
    $.__views.__alloyId265 = Ti.UI.createLabel({
        text: "06/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId265"
    });
    $.__views.__alloyId264.add($.__views.__alloyId265);
    $.__views.__alloyId266 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId266"
    });
    $.__views.__alloyId263.add($.__views.__alloyId266);
    $.__views.__alloyId267 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId267"
    });
    $.__views.__alloyId266.add($.__views.__alloyId267);
    $.__views.__alloyId268 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId268"
    });
    $.__views.__alloyId263.add($.__views.__alloyId268);
    $.__views.__alloyId269 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId269"
    });
    $.__views.__alloyId268.add($.__views.__alloyId269);
    $.__views.__alloyId270 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId270"
    });
    $.__views.__alloyId227.add($.__views.__alloyId270);
    $.__views.__alloyId271 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId271"
    });
    $.__views.__alloyId270.add($.__views.__alloyId271);
    $.__views.__alloyId272 = Ti.UI.createLabel({
        text: "07/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId272"
    });
    $.__views.__alloyId271.add($.__views.__alloyId272);
    $.__views.__alloyId273 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId273"
    });
    $.__views.__alloyId270.add($.__views.__alloyId273);
    $.__views.__alloyId274 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId274"
    });
    $.__views.__alloyId273.add($.__views.__alloyId274);
    $.__views.__alloyId275 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId275"
    });
    $.__views.__alloyId270.add($.__views.__alloyId275);
    $.__views.__alloyId276 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId276"
    });
    $.__views.__alloyId275.add($.__views.__alloyId276);
    $.__views.__alloyId277 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId277"
    });
    $.__views.__alloyId227.add($.__views.__alloyId277);
    $.__views.__alloyId278 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId278"
    });
    $.__views.__alloyId277.add($.__views.__alloyId278);
    $.__views.__alloyId279 = Ti.UI.createLabel({
        text: "08/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId279"
    });
    $.__views.__alloyId278.add($.__views.__alloyId279);
    $.__views.__alloyId280 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId280"
    });
    $.__views.__alloyId277.add($.__views.__alloyId280);
    $.__views.__alloyId281 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId281"
    });
    $.__views.__alloyId280.add($.__views.__alloyId281);
    $.__views.__alloyId282 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId282"
    });
    $.__views.__alloyId277.add($.__views.__alloyId282);
    $.__views.__alloyId283 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId283"
    });
    $.__views.__alloyId282.add($.__views.__alloyId283);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId226,
        id: "table",
        scrollable: "true"
    });
    $.__views.domesticCallStatement.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId223!click!back"] && $.__views.__alloyId223.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;