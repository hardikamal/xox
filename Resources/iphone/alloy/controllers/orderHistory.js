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
    $.__views.__alloyId760 = Alloy.createController("_header", {
        id: "__alloyId760",
        __parentSymbol: $.__views.orderHistory
    });
    $.__views.__alloyId760.setParent($.__views.orderHistory);
    $.__views.__alloyId761 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId761"
    });
    $.__views.orderHistory.add($.__views.__alloyId761);
    $.__views.__alloyId762 = Ti.UI.createLabel({
        text: "Ordering History",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId762"
    });
    $.__views.__alloyId761.add($.__views.__alloyId762);
    $.__views.__alloyId763 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId763"
    });
    $.__views.orderHistory.add($.__views.__alloyId763);
    $.__views.__alloyId764 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId764"
    });
    $.__views.__alloyId763.add($.__views.__alloyId764);
    prepaidPlus ? $.__views.__alloyId764.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId764!click!prepaidPlus"] = true;
    $.__views.__alloyId765 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId765"
    });
    $.__views.__alloyId764.add($.__views.__alloyId765);
    $.__views.__alloyId766 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId766"
    });
    $.__views.__alloyId765.add($.__views.__alloyId766);
    $.__views.__alloyId767 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId767"
    });
    $.__views.__alloyId765.add($.__views.__alloyId767);
    $.__views.__alloyId768 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId768"
    });
    $.__views.__alloyId764.add($.__views.__alloyId768);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId768.add($.__views.arrow1);
    $.__views.__alloyId769 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId769"
    });
    $.__views.__alloyId763.add($.__views.__alloyId769);
    prepaidPlus ? $.__views.__alloyId769.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId769!click!prepaidPlus"] = true;
    $.__views.__alloyId770 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId770"
    });
    $.__views.__alloyId769.add($.__views.__alloyId770);
    $.__views.__alloyId771 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId771"
    });
    $.__views.__alloyId770.add($.__views.__alloyId771);
    $.__views.__alloyId772 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId772"
    });
    $.__views.__alloyId770.add($.__views.__alloyId772);
    $.__views.__alloyId773 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId773"
    });
    $.__views.__alloyId769.add($.__views.__alloyId773);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId773.add($.__views.arrow2);
    $.__views.__alloyId774 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId774"
    });
    $.__views.__alloyId763.add($.__views.__alloyId774);
    prepaidPlus ? $.__views.__alloyId774.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId774!click!prepaidPlus"] = true;
    $.__views.__alloyId775 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId775"
    });
    $.__views.__alloyId774.add($.__views.__alloyId775);
    $.__views.__alloyId776 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId776"
    });
    $.__views.__alloyId775.add($.__views.__alloyId776);
    $.__views.__alloyId777 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId777"
    });
    $.__views.__alloyId775.add($.__views.__alloyId777);
    $.__views.__alloyId778 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId778"
    });
    $.__views.__alloyId774.add($.__views.__alloyId778);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId778.add($.__views.arrow3);
    $.__views.__alloyId779 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId779"
    });
    $.__views.__alloyId763.add($.__views.__alloyId779);
    prepaidPlus ? $.__views.__alloyId779.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId779!click!prepaidPlus"] = true;
    $.__views.__alloyId780 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId780"
    });
    $.__views.__alloyId779.add($.__views.__alloyId780);
    $.__views.__alloyId781 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId781"
    });
    $.__views.__alloyId780.add($.__views.__alloyId781);
    $.__views.__alloyId782 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId782"
    });
    $.__views.__alloyId780.add($.__views.__alloyId782);
    $.__views.__alloyId783 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId783"
    });
    $.__views.__alloyId779.add($.__views.__alloyId783);
    $.__views.arrow4 = Ti.UI.createImageView({
        id: "arrow4",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId783.add($.__views.arrow4);
    $.__views.__alloyId784 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId784"
    });
    $.__views.__alloyId763.add($.__views.__alloyId784);
    prepaidPlus ? $.__views.__alloyId784.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId784!click!prepaidPlus"] = true;
    $.__views.__alloyId785 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId785"
    });
    $.__views.__alloyId784.add($.__views.__alloyId785);
    $.__views.__alloyId786 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId786"
    });
    $.__views.__alloyId785.add($.__views.__alloyId786);
    $.__views.__alloyId787 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId787"
    });
    $.__views.__alloyId785.add($.__views.__alloyId787);
    $.__views.__alloyId788 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId788"
    });
    $.__views.__alloyId784.add($.__views.__alloyId788);
    $.__views.arrow5 = Ti.UI.createImageView({
        id: "arrow5",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId788.add($.__views.arrow5);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow3.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow4.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow5.transform = Ti.UI.create2DMatrix().rotate(-90);
    __defers["$.__views.__alloyId764!click!prepaidPlus"] && $.__views.__alloyId764.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId769!click!prepaidPlus"] && $.__views.__alloyId769.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId774!click!prepaidPlus"] && $.__views.__alloyId774.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId779!click!prepaidPlus"] && $.__views.__alloyId779.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId784!click!prepaidPlus"] && $.__views.__alloyId784.addEventListener("click", prepaidPlus);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;