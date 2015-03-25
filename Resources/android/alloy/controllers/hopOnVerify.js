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
        DRAWER.navigation("hopOn", 1);
    }
    function proceed() {
        DRAWER.navigation("hopOn", 1);
        console.log("proceed");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "hopOnVerify";
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
    $.__views.hopOnVerify = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "hopOnVerify"
    });
    $.__views.hopOnVerify && $.addTopLevelView($.__views.hopOnVerify);
    $.__views.__alloyId704 = Alloy.createController("_header", {
        id: "__alloyId704",
        __parentSymbol: $.__views.hopOnVerify
    });
    $.__views.__alloyId704.setParent($.__views.hopOnVerify);
    $.__views.__alloyId705 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId705"
    });
    $.__views.hopOnVerify.add($.__views.__alloyId705);
    $.__views.__alloyId706 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId706"
    });
    $.__views.__alloyId705.add($.__views.__alloyId706);
    $.__views.__alloyId707 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId707"
    });
    $.__views.__alloyId705.add($.__views.__alloyId707);
    back ? $.__views.__alloyId707.addEventListener("click", back) : __defers["$.__views.__alloyId707!click!back"] = true;
    $.__views.__alloyId708 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId708"
    });
    $.__views.hopOnVerify.add($.__views.__alloyId708);
    $.__views.__alloyId709 = Ti.UI.createLabel({
        text: "Verification",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId709"
    });
    $.__views.__alloyId708.add($.__views.__alloyId709);
    $.__views.__alloyId710 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId710"
    });
    $.__views.hopOnVerify.add($.__views.__alloyId710);
    $.__views.prepaid_subtitle = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "VERIFICATION INFO",
        id: "prepaid_subtitle",
        backgroundColor: "transparent",
        color: "white",
        top: "5",
        left: "20",
        width: "38%"
    });
    $.__views.__alloyId710.add($.__views.prepaid_subtitle);
    $.__views.prepaid_mandatory = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "*Please fill in the Mandatory field",
        id: "prepaid_mandatory",
        backgroundColor: "transparent",
        color: "black",
        width: "50%",
        top: "5"
    });
    $.__views.__alloyId710.add($.__views.prepaid_mandatory);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.hopOnVerify.add($.__views.scrollView);
    $.__views.__alloyId711 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        top: "10",
        id: "__alloyId711"
    });
    $.__views.scrollView.add($.__views.__alloyId711);
    $.__views.__alloyId712 = Ti.UI.createLabel({
        text: "Mobile No.",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId712"
    });
    $.__views.__alloyId711.add($.__views.__alloyId712);
    $.__views.__alloyId713 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId713"
    });
    $.__views.__alloyId711.add($.__views.__alloyId713);
    $.__views.__alloyId714 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId714"
    });
    $.__views.scrollView.add($.__views.__alloyId714);
    $.__views.__alloyId715 = Ti.UI.createLabel({
        text: "Serial No.*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId715"
    });
    $.__views.__alloyId714.add($.__views.__alloyId715);
    $.__views.__alloyId716 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId716"
    });
    $.__views.__alloyId714.add($.__views.__alloyId716);
    $.__views.__alloyId717 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId717"
    });
    $.__views.scrollView.add($.__views.__alloyId717);
    $.__views.__alloyId718 = Ti.UI.createLabel({
        text: "Enter Code.*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId718"
    });
    $.__views.__alloyId717.add($.__views.__alloyId718);
    $.__views.__alloyId719 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId719"
    });
    $.__views.__alloyId717.add($.__views.__alloyId719);
    $.__views.__alloyId720 = Ti.UI.createView({
        layout: "vertical",
        height: "100",
        bottom: "5",
        id: "__alloyId720"
    });
    $.__views.scrollView.add($.__views.__alloyId720);
    $.__views.__alloyId721 = Ti.UI.createLabel({
        text: "TAC*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId721"
    });
    $.__views.__alloyId720.add($.__views.__alloyId721);
    $.__views.__alloyId722 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        bottom: "2",
        borderColor: "#F2F2F2",
        id: "__alloyId722"
    });
    $.__views.__alloyId720.add($.__views.__alloyId722);
    $.__views.__alloyId723 = Ti.UI.createView({
        height: "40",
        backgroundColor: "red",
        id: "__alloyId723"
    });
    $.__views.__alloyId720.add($.__views.__alloyId723);
    proceed ? $.__views.__alloyId723.addEventListener("click", proceed) : __defers["$.__views.__alloyId723!click!proceed"] = true;
    $.__views.__alloyId724 = Ti.UI.createLabel({
        text: "REQUEST TAC",
        color: "white",
        id: "__alloyId724"
    });
    $.__views.__alloyId723.add($.__views.__alloyId724);
    $.__views.__alloyId725 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId725"
    });
    $.__views.hopOnVerify.add($.__views.__alloyId725);
    proceed ? $.__views.__alloyId725.addEventListener("click", proceed) : __defers["$.__views.__alloyId725!click!proceed"] = true;
    $.__views.__alloyId726 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId726"
    });
    $.__views.__alloyId725.add($.__views.__alloyId726);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 230;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 230;
    __defers["$.__views.__alloyId707!click!back"] && $.__views.__alloyId707.addEventListener("click", back);
    __defers["$.__views.__alloyId723!click!proceed"] && $.__views.__alloyId723.addEventListener("click", proceed);
    __defers["$.__views.__alloyId725!click!proceed"] && $.__views.__alloyId725.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;