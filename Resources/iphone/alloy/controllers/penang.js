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
        DRAWER.navigation("products", 1);
    }
    function subscribe() {
        console.log("subscribe");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "penang";
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
    $.__views.penang = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "penang"
    });
    $.__views.penang && $.addTopLevelView($.__views.penang);
    $.__views.__alloyId919 = Alloy.createController("_header", {
        id: "__alloyId919",
        __parentSymbol: $.__views.penang
    });
    $.__views.__alloyId919.setParent($.__views.penang);
    $.__views.__alloyId920 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId920"
    });
    $.__views.penang.add($.__views.__alloyId920);
    $.__views.__alloyId921 = Ti.UI.createLabel({
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId921"
    });
    $.__views.__alloyId920.add($.__views.__alloyId921);
    $.__views.__alloyId922 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId922"
    });
    $.__views.__alloyId920.add($.__views.__alloyId922);
    back ? $.__views.__alloyId922.addEventListener("click", back) : __defers["$.__views.__alloyId922!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.penang.add($.__views.scrollView);
    $.__views.__alloyId923 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId923"
    });
    $.__views.scrollView.add($.__views.__alloyId923);
    $.__views.__alloyId924 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId924"
    });
    $.__views.__alloyId923.add($.__views.__alloyId924);
    $.__views.__alloyId925 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId925"
    });
    $.__views.__alloyId924.add($.__views.__alloyId925);
    $.__views.__alloyId926 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId926"
    });
    $.__views.__alloyId923.add($.__views.__alloyId926);
    $.__views.__alloyId927 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId927"
    });
    $.__views.__alloyId926.add($.__views.__alloyId927);
    $.__views.__alloyId928 = Ti.UI.createLabel({
        text: "9cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId928"
    });
    $.__views.__alloyId926.add($.__views.__alloyId928);
    $.__views.__alloyId929 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId929"
    });
    $.__views.scrollView.add($.__views.__alloyId929);
    $.__views.__alloyId930 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId930"
    });
    $.__views.__alloyId929.add($.__views.__alloyId930);
    $.__views.__alloyId931 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId931"
    });
    $.__views.__alloyId930.add($.__views.__alloyId931);
    $.__views.__alloyId932 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId932"
    });
    $.__views.__alloyId929.add($.__views.__alloyId932);
    $.__views.__alloyId933 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId933"
    });
    $.__views.__alloyId932.add($.__views.__alloyId933);
    $.__views.__alloyId934 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId934"
    });
    $.__views.__alloyId932.add($.__views.__alloyId934);
    $.__views.__alloyId935 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId935"
    });
    $.__views.__alloyId929.add($.__views.__alloyId935);
    $.__views.__alloyId936 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId936"
    });
    $.__views.__alloyId935.add($.__views.__alloyId936);
    $.__views.__alloyId937 = Ti.UI.createLabel({
        text: "10cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId937"
    });
    $.__views.__alloyId935.add($.__views.__alloyId937);
    $.__views.__alloyId938 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId938"
    });
    $.__views.__alloyId929.add($.__views.__alloyId938);
    $.__views.__alloyId939 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId939"
    });
    $.__views.__alloyId938.add($.__views.__alloyId939);
    $.__views.__alloyId940 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId940"
    });
    $.__views.__alloyId938.add($.__views.__alloyId940);
    $.__views.__alloyId941 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId941"
    });
    $.__views.__alloyId929.add($.__views.__alloyId941);
    $.__views.__alloyId942 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId942"
    });
    $.__views.__alloyId941.add($.__views.__alloyId942);
    $.__views.__alloyId943 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId943"
    });
    $.__views.__alloyId941.add($.__views.__alloyId943);
    $.__views.__alloyId944 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId944"
    });
    $.__views.scrollView.add($.__views.__alloyId944);
    $.__views.__alloyId945 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId945"
    });
    $.__views.__alloyId944.add($.__views.__alloyId945);
    $.__views.__alloyId946 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId946"
    });
    $.__views.__alloyId945.add($.__views.__alloyId946);
    $.__views.__alloyId947 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId947"
    });
    $.__views.__alloyId944.add($.__views.__alloyId947);
    $.__views.__alloyId948 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId948"
    });
    $.__views.__alloyId947.add($.__views.__alloyId948);
    $.__views.__alloyId949 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId949"
    });
    $.__views.__alloyId947.add($.__views.__alloyId949);
    $.__views.__alloyId950 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId950"
    });
    $.__views.__alloyId944.add($.__views.__alloyId950);
    $.__views.__alloyId951 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId951"
    });
    $.__views.__alloyId950.add($.__views.__alloyId951);
    $.__views.__alloyId952 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId952"
    });
    $.__views.__alloyId950.add($.__views.__alloyId952);
    $.__views.__alloyId953 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId953"
    });
    $.__views.penang.add($.__views.__alloyId953);
    subscribe ? $.__views.__alloyId953.addEventListener("click", subscribe) : __defers["$.__views.__alloyId953!click!subscribe"] = true;
    $.__views.__alloyId954 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId954"
    });
    $.__views.__alloyId953.add($.__views.__alloyId954);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId922!click!back"] && $.__views.__alloyId922.addEventListener("click", back);
    __defers["$.__views.__alloyId953!click!subscribe"] && $.__views.__alloyId953.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;