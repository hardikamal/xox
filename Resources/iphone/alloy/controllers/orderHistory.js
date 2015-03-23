function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function prepaidPlus() {}
    function back() {
        DRAWER.navigation("myAccount", 2);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "orderHistory";
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
    $.__views.orderHistory = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "orderHistory"
    });
    $.__views.orderHistory && $.addTopLevelView($.__views.orderHistory);
    $.__views.__alloyId853 = Alloy.createController("_header", {
        id: "__alloyId853",
        __parentSymbol: $.__views.orderHistory
    });
    $.__views.__alloyId853.setParent($.__views.orderHistory);
    $.__views.__alloyId854 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#AFCD3F",
        id: "__alloyId854"
    });
    $.__views.orderHistory.add($.__views.__alloyId854);
    $.__views.__alloyId855 = Ti.UI.createLabel({
        text: "Friends & Family",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId855"
    });
    $.__views.__alloyId854.add($.__views.__alloyId855);
    $.__views.__alloyId856 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId856"
    });
    $.__views.__alloyId854.add($.__views.__alloyId856);
    back ? $.__views.__alloyId856.addEventListener("click", back) : __defers["$.__views.__alloyId856!click!back"] = true;
    $.__views.__alloyId857 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId857"
    });
    $.__views.orderHistory.add($.__views.__alloyId857);
    $.__views.__alloyId858 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId858"
    });
    $.__views.__alloyId857.add($.__views.__alloyId858);
    prepaidPlus ? $.__views.__alloyId858.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId858!click!prepaidPlus"] = true;
    $.__views.__alloyId859 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId859"
    });
    $.__views.__alloyId858.add($.__views.__alloyId859);
    $.__views.__alloyId860 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId860"
    });
    $.__views.__alloyId859.add($.__views.__alloyId860);
    $.__views.__alloyId861 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId861"
    });
    $.__views.__alloyId859.add($.__views.__alloyId861);
    $.__views.__alloyId862 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId862"
    });
    $.__views.__alloyId858.add($.__views.__alloyId862);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId862.add($.__views.arrow1);
    $.__views.__alloyId863 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId863"
    });
    $.__views.__alloyId857.add($.__views.__alloyId863);
    prepaidPlus ? $.__views.__alloyId863.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId863!click!prepaidPlus"] = true;
    $.__views.__alloyId864 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId864"
    });
    $.__views.__alloyId863.add($.__views.__alloyId864);
    $.__views.__alloyId865 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId865"
    });
    $.__views.__alloyId864.add($.__views.__alloyId865);
    $.__views.__alloyId866 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId866"
    });
    $.__views.__alloyId864.add($.__views.__alloyId866);
    $.__views.__alloyId867 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId867"
    });
    $.__views.__alloyId863.add($.__views.__alloyId867);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId867.add($.__views.arrow2);
    $.__views.__alloyId868 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId868"
    });
    $.__views.__alloyId857.add($.__views.__alloyId868);
    prepaidPlus ? $.__views.__alloyId868.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId868!click!prepaidPlus"] = true;
    $.__views.__alloyId869 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId869"
    });
    $.__views.__alloyId868.add($.__views.__alloyId869);
    $.__views.__alloyId870 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId870"
    });
    $.__views.__alloyId869.add($.__views.__alloyId870);
    $.__views.__alloyId871 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId871"
    });
    $.__views.__alloyId869.add($.__views.__alloyId871);
    $.__views.__alloyId872 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId872"
    });
    $.__views.__alloyId868.add($.__views.__alloyId872);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId872.add($.__views.arrow3);
    $.__views.__alloyId873 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId873"
    });
    $.__views.__alloyId857.add($.__views.__alloyId873);
    prepaidPlus ? $.__views.__alloyId873.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId873!click!prepaidPlus"] = true;
    $.__views.__alloyId874 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId874"
    });
    $.__views.__alloyId873.add($.__views.__alloyId874);
    $.__views.__alloyId875 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId875"
    });
    $.__views.__alloyId874.add($.__views.__alloyId875);
    $.__views.__alloyId876 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId876"
    });
    $.__views.__alloyId874.add($.__views.__alloyId876);
    $.__views.__alloyId877 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId877"
    });
    $.__views.__alloyId873.add($.__views.__alloyId877);
    $.__views.arrow4 = Ti.UI.createImageView({
        id: "arrow4",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId877.add($.__views.arrow4);
    $.__views.__alloyId878 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId878"
    });
    $.__views.__alloyId857.add($.__views.__alloyId878);
    prepaidPlus ? $.__views.__alloyId878.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId878!click!prepaidPlus"] = true;
    $.__views.__alloyId879 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId879"
    });
    $.__views.__alloyId878.add($.__views.__alloyId879);
    $.__views.__alloyId880 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId880"
    });
    $.__views.__alloyId879.add($.__views.__alloyId880);
    $.__views.__alloyId881 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId881"
    });
    $.__views.__alloyId879.add($.__views.__alloyId881);
    $.__views.__alloyId882 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId882"
    });
    $.__views.__alloyId878.add($.__views.__alloyId882);
    $.__views.arrow5 = Ti.UI.createImageView({
        id: "arrow5",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId882.add($.__views.arrow5);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow3.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow4.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow5.transform = Ti.UI.create2DMatrix().rotate(-90);
    __defers["$.__views.__alloyId856!click!back"] && $.__views.__alloyId856.addEventListener("click", back);
    __defers["$.__views.__alloyId858!click!prepaidPlus"] && $.__views.__alloyId858.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId863!click!prepaidPlus"] && $.__views.__alloyId863.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId868!click!prepaidPlus"] && $.__views.__alloyId868.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId873!click!prepaidPlus"] && $.__views.__alloyId873.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId878!click!prepaidPlus"] && $.__views.__alloyId878.addEventListener("click", prepaidPlus);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;