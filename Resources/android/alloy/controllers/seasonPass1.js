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
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        height: "100%",
        scrollType: "vertical",
        backgroundColor: "#FFFFFF"
    });
    $.__views.scrollView && $.addTopLevelView($.__views.scrollView);
    $.__views.__alloyId602 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        id: "__alloyId602"
    });
    $.__views.scrollView.add($.__views.__alloyId602);
    $.__views.__alloyId603 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId603"
    });
    $.__views.__alloyId602.add($.__views.__alloyId603);
    $.__views.__alloyId604 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId604"
    });
    $.__views.__alloyId603.add($.__views.__alloyId604);
    $.__views.__alloyId605 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId605"
    });
    $.__views.__alloyId604.add($.__views.__alloyId605);
    $.__views.__alloyId606 = Ti.UI.createLabel({
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId606"
    });
    $.__views.__alloyId605.add($.__views.__alloyId606);
    $.__views.__alloyId607 = Ti.UI.createLabel({
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId607"
    });
    $.__views.__alloyId605.add($.__views.__alloyId607);
    $.__views.__alloyId608 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId608"
    });
    $.__views.__alloyId603.add($.__views.__alloyId608);
    $.__views.__alloyId609 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId609"
    });
    $.__views.__alloyId608.add($.__views.__alloyId609);
    $.__views.__alloyId610 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId610"
    });
    $.__views.__alloyId609.add($.__views.__alloyId610);
    $.__views.__alloyId611 = Ti.UI.createLabel({
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId611"
    });
    $.__views.__alloyId609.add($.__views.__alloyId611);
    $.__views.__alloyId612 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId612"
    });
    $.__views.__alloyId602.add($.__views.__alloyId612);
    $.__views.__alloyId613 = Ti.UI.createLabel({
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId613"
    });
    $.__views.__alloyId612.add($.__views.__alloyId613);
    $.__views.__alloyId614 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId614"
    });
    $.__views.__alloyId602.add($.__views.__alloyId614);
    $.__views.__alloyId615 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId615"
    });
    $.__views.__alloyId614.add($.__views.__alloyId615);
    $.__views.__alloyId616 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId616"
    });
    $.__views.__alloyId615.add($.__views.__alloyId616);
    $.__views.__alloyId617 = Ti.UI.createLabel({
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId617"
    });
    $.__views.__alloyId615.add($.__views.__alloyId617);
    $.__views.__alloyId618 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
        id: "__alloyId618"
    });
    $.__views.scrollView.add($.__views.__alloyId618);
    $.__views.__alloyId619 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId619"
    });
    $.__views.__alloyId618.add($.__views.__alloyId619);
    $.__views.__alloyId620 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId620"
    });
    $.__views.__alloyId619.add($.__views.__alloyId620);
    $.__views.__alloyId621 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId621"
    });
    $.__views.__alloyId620.add($.__views.__alloyId621);
    $.__views.__alloyId622 = Ti.UI.createLabel({
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId622"
    });
    $.__views.__alloyId621.add($.__views.__alloyId622);
    $.__views.__alloyId623 = Ti.UI.createLabel({
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId623"
    });
    $.__views.__alloyId621.add($.__views.__alloyId623);
    $.__views.__alloyId624 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId624"
    });
    $.__views.__alloyId619.add($.__views.__alloyId624);
    $.__views.__alloyId625 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId625"
    });
    $.__views.__alloyId624.add($.__views.__alloyId625);
    $.__views.__alloyId626 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId626"
    });
    $.__views.__alloyId625.add($.__views.__alloyId626);
    $.__views.__alloyId627 = Ti.UI.createLabel({
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId627"
    });
    $.__views.__alloyId625.add($.__views.__alloyId627);
    $.__views.__alloyId628 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId628"
    });
    $.__views.__alloyId618.add($.__views.__alloyId628);
    $.__views.__alloyId629 = Ti.UI.createLabel({
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId629"
    });
    $.__views.__alloyId628.add($.__views.__alloyId629);
    $.__views.__alloyId630 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId630"
    });
    $.__views.__alloyId618.add($.__views.__alloyId630);
    $.__views.__alloyId631 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId631"
    });
    $.__views.__alloyId630.add($.__views.__alloyId631);
    $.__views.__alloyId632 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId632"
    });
    $.__views.__alloyId631.add($.__views.__alloyId632);
    $.__views.__alloyId633 = Ti.UI.createLabel({
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId633"
    });
    $.__views.__alloyId631.add($.__views.__alloyId633);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;