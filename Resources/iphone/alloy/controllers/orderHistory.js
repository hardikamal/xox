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
    $.__views.__alloyId867 = Alloy.createController("_header", {
        id: "__alloyId867",
        __parentSymbol: $.__views.orderHistory
    });
    $.__views.__alloyId867.setParent($.__views.orderHistory);
    $.__views.__alloyId868 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId868"
    });
    $.__views.orderHistory.add($.__views.__alloyId868);
    $.__views.__alloyId869 = Ti.UI.createLabel({
        text: "Ordering History",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId869"
    });
    $.__views.__alloyId868.add($.__views.__alloyId869);
    $.__views.__alloyId870 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId870"
    });
    $.__views.orderHistory.add($.__views.__alloyId870);
    $.__views.__alloyId871 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId871"
    });
    $.__views.__alloyId870.add($.__views.__alloyId871);
    prepaidPlus ? $.__views.__alloyId871.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId871!click!prepaidPlus"] = true;
    $.__views.__alloyId872 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId872"
    });
    $.__views.__alloyId871.add($.__views.__alloyId872);
    $.__views.__alloyId873 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId873"
    });
    $.__views.__alloyId872.add($.__views.__alloyId873);
    $.__views.__alloyId874 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId874"
    });
    $.__views.__alloyId872.add($.__views.__alloyId874);
    $.__views.__alloyId875 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId875"
    });
    $.__views.__alloyId871.add($.__views.__alloyId875);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId875.add($.__views.arrow1);
    $.__views.__alloyId876 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId876"
    });
    $.__views.__alloyId870.add($.__views.__alloyId876);
    prepaidPlus ? $.__views.__alloyId876.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId876!click!prepaidPlus"] = true;
    $.__views.__alloyId877 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId877"
    });
    $.__views.__alloyId876.add($.__views.__alloyId877);
    $.__views.__alloyId878 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId878"
    });
    $.__views.__alloyId877.add($.__views.__alloyId878);
    $.__views.__alloyId879 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId879"
    });
    $.__views.__alloyId877.add($.__views.__alloyId879);
    $.__views.__alloyId880 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId880"
    });
    $.__views.__alloyId876.add($.__views.__alloyId880);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId880.add($.__views.arrow2);
    $.__views.__alloyId881 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId881"
    });
    $.__views.__alloyId870.add($.__views.__alloyId881);
    prepaidPlus ? $.__views.__alloyId881.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId881!click!prepaidPlus"] = true;
    $.__views.__alloyId882 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId882"
    });
    $.__views.__alloyId881.add($.__views.__alloyId882);
    $.__views.__alloyId883 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId883"
    });
    $.__views.__alloyId882.add($.__views.__alloyId883);
    $.__views.__alloyId884 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId884"
    });
    $.__views.__alloyId882.add($.__views.__alloyId884);
    $.__views.__alloyId885 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId885"
    });
    $.__views.__alloyId881.add($.__views.__alloyId885);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId885.add($.__views.arrow3);
    $.__views.__alloyId886 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId886"
    });
    $.__views.__alloyId870.add($.__views.__alloyId886);
    prepaidPlus ? $.__views.__alloyId886.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId886!click!prepaidPlus"] = true;
    $.__views.__alloyId887 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId887"
    });
    $.__views.__alloyId886.add($.__views.__alloyId887);
    $.__views.__alloyId888 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId888"
    });
    $.__views.__alloyId887.add($.__views.__alloyId888);
    $.__views.__alloyId889 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId889"
    });
    $.__views.__alloyId887.add($.__views.__alloyId889);
    $.__views.__alloyId890 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId890"
    });
    $.__views.__alloyId886.add($.__views.__alloyId890);
    $.__views.arrow4 = Ti.UI.createImageView({
        id: "arrow4",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId890.add($.__views.arrow4);
    $.__views.__alloyId891 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId891"
    });
    $.__views.__alloyId870.add($.__views.__alloyId891);
    prepaidPlus ? $.__views.__alloyId891.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId891!click!prepaidPlus"] = true;
    $.__views.__alloyId892 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId892"
    });
    $.__views.__alloyId891.add($.__views.__alloyId892);
    $.__views.__alloyId893 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId893"
    });
    $.__views.__alloyId892.add($.__views.__alloyId893);
    $.__views.__alloyId894 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId894"
    });
    $.__views.__alloyId892.add($.__views.__alloyId894);
    $.__views.__alloyId895 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId895"
    });
    $.__views.__alloyId891.add($.__views.__alloyId895);
    $.__views.arrow5 = Ti.UI.createImageView({
        id: "arrow5",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId895.add($.__views.arrow5);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow3.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow4.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow5.transform = Ti.UI.create2DMatrix().rotate(-90);
<<<<<<< Updated upstream
    __defers["$.__views.__alloyId871!click!prepaidPlus"] && $.__views.__alloyId871.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId876!click!prepaidPlus"] && $.__views.__alloyId876.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId881!click!prepaidPlus"] && $.__views.__alloyId881.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId886!click!prepaidPlus"] && $.__views.__alloyId886.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId891!click!prepaidPlus"] && $.__views.__alloyId891.addEventListener("click", prepaidPlus);
=======
    var clearObject = function() {
        alert("order history clear cache");
        Ti.App.removeEventListener("clearObject", clearObject);
    };
    Ti.App.addEventListener("clearObject", clearObject);
    __defers["$.__views.__alloyId764!click!prepaidPlus"] && $.__views.__alloyId764.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId769!click!prepaidPlus"] && $.__views.__alloyId769.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId774!click!prepaidPlus"] && $.__views.__alloyId774.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId779!click!prepaidPlus"] && $.__views.__alloyId779.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId784!click!prepaidPlus"] && $.__views.__alloyId784.addEventListener("click", prepaidPlus);
>>>>>>> Stashed changes
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;