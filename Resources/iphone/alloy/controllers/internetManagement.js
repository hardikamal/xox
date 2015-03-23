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
        DRAWER.navigation("myAccount", 2);
    }
    function subscribe() {
        console.log("subscribe");
        DRAWER.navigation("internetManagement2", 1);
    }
    function addOn() {
        console.log("addOn");
        DRAWER.navigation("internetManagement3", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "internetManagement";
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
    $.__views.internetManagement = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "internetManagement"
    });
    $.__views.internetManagement && $.addTopLevelView($.__views.internetManagement);
    $.__views.__alloyId572 = Alloy.createController("_header", {
        id: "__alloyId572",
        __parentSymbol: $.__views.internetManagement
    });
    $.__views.__alloyId572.setParent($.__views.internetManagement);
    $.__views.__alloyId573 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId573"
    });
    $.__views.internetManagement.add($.__views.__alloyId573);
    $.__views.__alloyId574 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId574"
    });
    $.__views.__alloyId573.add($.__views.__alloyId574);
    $.__views.__alloyId575 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId575"
    });
    $.__views.__alloyId573.add($.__views.__alloyId575);
    back ? $.__views.__alloyId575.addEventListener("click", back) : __defers["$.__views.__alloyId575!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.internetManagement.add($.__views.scrollView);
    $.__views.__alloyId576 = Ti.UI.createView({
        height: "50",
        id: "__alloyId576"
    });
    $.__views.scrollView.add($.__views.__alloyId576);
    $.__views.__alloyId577 = Ti.UI.createLabel({
        text: "Mobile Number :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId577"
    });
    $.__views.__alloyId576.add($.__views.__alloyId577);
    $.__views.__alloyId578 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId578"
    });
    $.__views.scrollView.add($.__views.__alloyId578);
    $.__views.__alloyId579 = Ti.UI.createView({
        height: "50",
        id: "__alloyId579"
    });
    $.__views.scrollView.add($.__views.__alloyId579);
    $.__views.__alloyId580 = Ti.UI.createLabel({
        text: "Mobile Internet Plan :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId580"
    });
    $.__views.__alloyId579.add($.__views.__alloyId580);
    $.__views.__alloyId581 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId581"
    });
    $.__views.scrollView.add($.__views.__alloyId581);
    $.__views.__alloyId582 = Ti.UI.createView({
        height: "50",
        id: "__alloyId582"
    });
    $.__views.scrollView.add($.__views.__alloyId582);
    $.__views.__alloyId583 = Ti.UI.createLabel({
        text: "Subscription Date :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId583"
    });
    $.__views.__alloyId582.add($.__views.__alloyId583);
    $.__views.__alloyId584 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId584"
    });
    $.__views.scrollView.add($.__views.__alloyId584);
    $.__views.__alloyId585 = Ti.UI.createView({
        height: "50",
        id: "__alloyId585"
    });
    $.__views.scrollView.add($.__views.__alloyId585);
    $.__views.__alloyId586 = Ti.UI.createLabel({
        text: "Subscription End Date :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId586"
    });
    $.__views.__alloyId585.add($.__views.__alloyId586);
    $.__views.__alloyId587 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId587"
    });
    $.__views.scrollView.add($.__views.__alloyId587);
    $.__views.__alloyId588 = Ti.UI.createView({
        height: "50",
        id: "__alloyId588"
    });
    $.__views.scrollView.add($.__views.__alloyId588);
    $.__views.__alloyId589 = Ti.UI.createLabel({
        text: "Entitled Quota :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId589"
    });
    $.__views.__alloyId588.add($.__views.__alloyId589);
    $.__views.__alloyId590 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId590"
    });
    $.__views.scrollView.add($.__views.__alloyId590);
    $.__views.__alloyId591 = Ti.UI.createView({
        height: "50",
        id: "__alloyId591"
    });
    $.__views.scrollView.add($.__views.__alloyId591);
    $.__views.__alloyId592 = Ti.UI.createLabel({
        text: "Balance Quota :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId592"
    });
    $.__views.__alloyId591.add($.__views.__alloyId592);
    $.__views.__alloyId593 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId593"
    });
    $.__views.scrollView.add($.__views.__alloyId593);
    $.__views.__alloyId594 = Ti.UI.createView({
        height: "50",
        id: "__alloyId594"
    });
    $.__views.scrollView.add($.__views.__alloyId594);
    $.__views.__alloyId595 = Ti.UI.createLabel({
        text: "Last updated by :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId595"
    });
    $.__views.__alloyId594.add($.__views.__alloyId595);
    $.__views.__alloyId596 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId596"
    });
    $.__views.scrollView.add($.__views.__alloyId596);
    $.__views.__alloyId597 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId597"
    });
    $.__views.internetManagement.add($.__views.__alloyId597);
    $.__views.__alloyId598 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId598"
    });
    $.__views.__alloyId597.add($.__views.__alloyId598);
    subscribe ? $.__views.__alloyId598.addEventListener("click", subscribe) : __defers["$.__views.__alloyId598!click!subscribe"] = true;
    $.__views.__alloyId599 = Ti.UI.createLabel({
        text: "Subscribe/Upgrade Plan",
        color: "white",
        textAlign: "center",
        id: "__alloyId599"
    });
    $.__views.__alloyId598.add($.__views.__alloyId599);
    $.__views.__alloyId600 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId600"
    });
    $.__views.__alloyId597.add($.__views.__alloyId600);
    $.__views.__alloyId601 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId601"
    });
    $.__views.__alloyId597.add($.__views.__alloyId601);
    addOn ? $.__views.__alloyId601.addEventListener("click", addOn) : __defers["$.__views.__alloyId601!click!addOn"] = true;
    $.__views.__alloyId602 = Ti.UI.createLabel({
        text: "Add On",
        color: "white",
        textAlign: "center",
        id: "__alloyId602"
    });
    $.__views.__alloyId601.add($.__views.__alloyId602);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId575!click!back"] && $.__views.__alloyId575.addEventListener("click", back);
    __defers["$.__views.__alloyId598!click!subscribe"] && $.__views.__alloyId598.addEventListener("click", subscribe);
    __defers["$.__views.__alloyId601!click!addOn"] && $.__views.__alloyId601.addEventListener("click", addOn);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;