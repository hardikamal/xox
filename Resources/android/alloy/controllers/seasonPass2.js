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
    $.__views.__alloyId640 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        id: "__alloyId640"
    });
    $.__views.scrollView.add($.__views.__alloyId640);
    $.__views.__alloyId641 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId641"
    });
    $.__views.__alloyId640.add($.__views.__alloyId641);
    $.__views.__alloyId642 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId642"
    });
    $.__views.__alloyId641.add($.__views.__alloyId642);
    $.__views.__alloyId643 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId643"
    });
    $.__views.__alloyId642.add($.__views.__alloyId643);
    $.__views.__alloyId644 = Ti.UI.createLabel({
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId644"
    });
    $.__views.__alloyId643.add($.__views.__alloyId644);
    $.__views.__alloyId645 = Ti.UI.createLabel({
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId645"
    });
    $.__views.__alloyId643.add($.__views.__alloyId645);
    $.__views.__alloyId646 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId646"
    });
    $.__views.__alloyId641.add($.__views.__alloyId646);
    $.__views.__alloyId647 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId647"
    });
    $.__views.__alloyId646.add($.__views.__alloyId647);
    $.__views.__alloyId648 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId648"
    });
    $.__views.__alloyId647.add($.__views.__alloyId648);
    $.__views.__alloyId649 = Ti.UI.createLabel({
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId649"
    });
    $.__views.__alloyId647.add($.__views.__alloyId649);
    $.__views.__alloyId650 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId650"
    });
    $.__views.__alloyId640.add($.__views.__alloyId650);
    $.__views.__alloyId651 = Ti.UI.createLabel({
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId651"
    });
    $.__views.__alloyId650.add($.__views.__alloyId651);
    $.__views.__alloyId652 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId652"
    });
    $.__views.__alloyId640.add($.__views.__alloyId652);
    $.__views.__alloyId653 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId653"
    });
    $.__views.__alloyId652.add($.__views.__alloyId653);
    $.__views.__alloyId654 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId654"
    });
    $.__views.__alloyId653.add($.__views.__alloyId654);
    $.__views.__alloyId655 = Ti.UI.createLabel({
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId655"
    });
    $.__views.__alloyId653.add($.__views.__alloyId655);
    $.__views.__alloyId656 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
        id: "__alloyId656"
    });
    $.__views.scrollView.add($.__views.__alloyId656);
    $.__views.__alloyId657 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId657"
    });
    $.__views.__alloyId656.add($.__views.__alloyId657);
    $.__views.__alloyId658 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId658"
    });
    $.__views.__alloyId657.add($.__views.__alloyId658);
    $.__views.__alloyId659 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId659"
    });
    $.__views.__alloyId658.add($.__views.__alloyId659);
    $.__views.__alloyId660 = Ti.UI.createLabel({
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId660"
    });
    $.__views.__alloyId659.add($.__views.__alloyId660);
    $.__views.__alloyId661 = Ti.UI.createLabel({
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId661"
    });
    $.__views.__alloyId659.add($.__views.__alloyId661);
    $.__views.__alloyId662 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId662"
    });
    $.__views.__alloyId657.add($.__views.__alloyId662);
    $.__views.__alloyId663 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId663"
    });
    $.__views.__alloyId662.add($.__views.__alloyId663);
    $.__views.__alloyId664 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId664"
    });
    $.__views.__alloyId663.add($.__views.__alloyId664);
    $.__views.__alloyId665 = Ti.UI.createLabel({
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId665"
    });
    $.__views.__alloyId663.add($.__views.__alloyId665);
    $.__views.__alloyId666 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId666"
    });
    $.__views.__alloyId656.add($.__views.__alloyId666);
    $.__views.__alloyId667 = Ti.UI.createLabel({
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId667"
    });
    $.__views.__alloyId666.add($.__views.__alloyId667);
    $.__views.__alloyId668 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId668"
    });
    $.__views.__alloyId656.add($.__views.__alloyId668);
    $.__views.__alloyId669 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId669"
    });
    $.__views.__alloyId668.add($.__views.__alloyId669);
    $.__views.__alloyId670 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId670"
    });
    $.__views.__alloyId669.add($.__views.__alloyId670);
    $.__views.__alloyId671 = Ti.UI.createLabel({
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId671"
    });
    $.__views.__alloyId669.add($.__views.__alloyId671);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;