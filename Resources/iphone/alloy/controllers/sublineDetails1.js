function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function download() {
        console.log("download");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "sublineDetails1";
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
    $.__views.sublineDetails1 = Ti.UI.createView({
        layout: "composite",
        id: "sublineDetails1"
    });
    $.__views.sublineDetails1 && $.addTopLevelView($.__views.sublineDetails1);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        scrollType: "vertical",
        backgroundColor: "#FFFFFF",
        top: "0"
    });
    $.__views.sublineDetails1.add($.__views.scrollView);
    $.__views.__alloyId2676 = Ti.UI.createView({
        height: "50",
        backgroundColor: "gray",
        id: "__alloyId2676"
    });
    $.__views.scrollView.add($.__views.__alloyId2676);
    $.__views.__alloyId2677 = Ti.UI.createLabel({
        text: "Prepaid Account",
        backgroundColor: "transparent",
        height: "100%",
        color: "black",
        left: "20",
        id: "__alloyId2677"
    });
    $.__views.__alloyId2676.add($.__views.__alloyId2677);
    $.__views.__alloyId2678 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2678"
    });
    $.__views.scrollView.add($.__views.__alloyId2678);
    $.__views.__alloyId2679 = Ti.UI.createLabel({
        text: "Prepaid Balance (RM)",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2679"
    });
    $.__views.__alloyId2678.add($.__views.__alloyId2679);
    $.__views.__alloyId2680 = Ti.UI.createLabel({
        text: "13.94",
        width: "25%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2680"
    });
    $.__views.__alloyId2678.add($.__views.__alloyId2680);
    $.__views.__alloyId2681 = Ti.UI.createView({
        layout: "horizontal",
        width: "25%",
        id: "__alloyId2681"
    });
    $.__views.__alloyId2678.add($.__views.__alloyId2681);
    $.__views.__alloyId2682 = Ti.UI.createLabel({
        text: "Top up",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2682"
    });
    $.__views.__alloyId2681.add($.__views.__alloyId2682);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2681.add($.__views.arrow1);
    $.__views.__alloyId2683 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2683"
    });
    $.__views.scrollView.add($.__views.__alloyId2683);
    $.__views.__alloyId2684 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2684"
    });
    $.__views.scrollView.add($.__views.__alloyId2684);
    $.__views.__alloyId2685 = Ti.UI.createLabel({
        text: "Expiry Date",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2685"
    });
    $.__views.__alloyId2684.add($.__views.__alloyId2685);
    $.__views.__alloyId2686 = Ti.UI.createLabel({
        text: "15-Apr-2015",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2686"
    });
    $.__views.__alloyId2684.add($.__views.__alloyId2686);
    $.__views.__alloyId2687 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2687"
    });
    $.__views.scrollView.add($.__views.__alloyId2687);
    $.__views.__alloyId2688 = Ti.UI.createView({
        layout: "vertical",
        height: "100",
        id: "__alloyId2688"
    });
    $.__views.scrollView.add($.__views.__alloyId2688);
    $.__views.__alloyId2689 = Ti.UI.createLabel({
        text: "Free SMS",
        left: "5%",
        height: "50",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2689"
    });
    $.__views.__alloyId2688.add($.__views.__alloyId2689);
    $.__views.__alloyId2690 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2690"
    });
    $.__views.__alloyId2688.add($.__views.__alloyId2690);
    $.__views.__alloyId2691 = Ti.UI.createLabel({
        text: "Unutilized Free SMS",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2691"
    });
    $.__views.__alloyId2690.add($.__views.__alloyId2691);
    $.__views.__alloyId2692 = Ti.UI.createLabel({
        text: "2223",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2692"
    });
    $.__views.__alloyId2690.add($.__views.__alloyId2692);
    $.__views.__alloyId2693 = Ti.UI.createView({
        height: "50",
        backgroundColor: "gray",
        id: "__alloyId2693"
    });
    $.__views.scrollView.add($.__views.__alloyId2693);
    $.__views.__alloyId2694 = Ti.UI.createLabel({
        text: "Season Pass Counter",
        backgroundColor: "transparent",
        height: "100%",
        color: "black",
        left: "20",
        id: "__alloyId2694"
    });
    $.__views.__alloyId2693.add($.__views.__alloyId2694);
    $.__views.__alloyId2695 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2695"
    });
    $.__views.scrollView.add($.__views.__alloyId2695);
    $.__views.__alloyId2696 = Ti.UI.createLabel({
        text: "Voice (minutes)",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2696"
    });
    $.__views.__alloyId2695.add($.__views.__alloyId2696);
    $.__views.__alloyId2697 = Ti.UI.createLabel({
        text: "0",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2697"
    });
    $.__views.__alloyId2695.add($.__views.__alloyId2697);
    $.__views.__alloyId2698 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2698"
    });
    $.__views.scrollView.add($.__views.__alloyId2698);
    $.__views.__alloyId2699 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2699"
    });
    $.__views.scrollView.add($.__views.__alloyId2699);
    $.__views.__alloyId2700 = Ti.UI.createLabel({
        text: "SMS",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2700"
    });
    $.__views.__alloyId2699.add($.__views.__alloyId2700);
    $.__views.__alloyId2701 = Ti.UI.createLabel({
        text: "0",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2701"
    });
    $.__views.__alloyId2699.add($.__views.__alloyId2701);
    $.__views.__alloyId2702 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2702"
    });
    $.__views.scrollView.add($.__views.__alloyId2702);
    $.__views.__alloyId2703 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2703"
    });
    $.__views.scrollView.add($.__views.__alloyId2703);
    $.__views.__alloyId2704 = Ti.UI.createLabel({
        text: "Data",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2704"
    });
    $.__views.__alloyId2703.add($.__views.__alloyId2704);
    $.__views.__alloyId2705 = Ti.UI.createLabel({
        text: "0",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2705"
    });
    $.__views.__alloyId2703.add($.__views.__alloyId2705);
    $.__views.__alloyId2706 = Ti.UI.createView({
        height: "50",
        backgroundColor: "gray",
        id: "__alloyId2706"
    });
    $.__views.scrollView.add($.__views.__alloyId2706);
    $.__views.__alloyId2707 = Ti.UI.createLabel({
        text: "E-Wallet Account",
        backgroundColor: "transparent",
        height: "100%",
        color: "black",
        left: "20",
        id: "__alloyId2707"
    });
    $.__views.__alloyId2706.add($.__views.__alloyId2707);
    $.__views.__alloyId2708 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2708"
    });
    $.__views.scrollView.add($.__views.__alloyId2708);
    $.__views.__alloyId2709 = Ti.UI.createLabel({
        text: "E-Wallet Balance (RM)",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2709"
    });
    $.__views.__alloyId2708.add($.__views.__alloyId2709);
    $.__views.__alloyId2710 = Ti.UI.createLabel({
        text: "0.00",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2710"
    });
    $.__views.__alloyId2708.add($.__views.__alloyId2710);
    $.__views.__alloyId2711 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        bottom: "0",
        id: "__alloyId2711"
    });
    $.__views.sublineDetails1.add($.__views.__alloyId2711);
    download ? $.__views.__alloyId2711.addEventListener("click", download) : __defers["$.__views.__alloyId2711!click!download"] = true;
    $.__views.__alloyId2712 = Ti.UI.createLabel({
        text: "Download Statement",
        color: "white",
        id: "__alloyId2712"
    });
    $.__views.__alloyId2711.add($.__views.__alloyId2712);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 2e3;
    }
    __defers["$.__views.__alloyId2711!click!download"] && $.__views.__alloyId2711.addEventListener("click", download);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;