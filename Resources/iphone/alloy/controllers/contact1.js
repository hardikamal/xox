function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function malaysia() {
        console.log("malaysia");
        Ti.Platform.openURL("tel:1300888010");
    }
    function mobile() {
        console.log("mobile");
        Ti.Platform.openURL("tel:12273");
    }
    function abroad() {
        console.log("abroad");
        Ti.Platform.openURL("tel:+60379628000");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "contact1";
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
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        height: "100%",
        scrollType: "vertical",
        backgroundColor: "#F4F6F5"
    });
    $.__views.scrollView && $.addTopLevelView($.__views.scrollView);
    var __alloyId95 = [];
    $.__views.__alloyId96 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        id: "__alloyId96"
    });
    __alloyId95.push($.__views.__alloyId96);
    malaysia ? $.__views.__alloyId96.addEventListener("click", malaysia) : __defers["$.__views.__alloyId96!click!malaysia"] = true;
    $.__views.__alloyId97 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        bottom: "10",
        id: "__alloyId97"
    });
    $.__views.__alloyId96.add($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createLabel({
        text: "From Malaysia:",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId98"
    });
    $.__views.__alloyId97.add($.__views.__alloyId98);
    $.__views.__alloyId99 = Ti.UI.createLabel({
        text: "1300 888 010",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId99"
    });
    $.__views.__alloyId97.add($.__views.__alloyId99);
    $.__views.__alloyId100 = Ti.UI.createImageView({
        image: "/images/contact_button.png",
        width: "30",
        height: "30",
        right: "10",
        id: "__alloyId100"
    });
    $.__views.__alloyId96.add($.__views.__alloyId100);
    $.__views.__alloyId101 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        id: "__alloyId101"
    });
    __alloyId95.push($.__views.__alloyId101);
    mobile ? $.__views.__alloyId101.addEventListener("click", mobile) : __defers["$.__views.__alloyId101!click!mobile"] = true;
    $.__views.__alloyId102 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        bottom: "10",
        id: "__alloyId102"
    });
    $.__views.__alloyId101.add($.__views.__alloyId102);
    $.__views.__alloyId103 = Ti.UI.createLabel({
        text: "From Your XOX Mobile:",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId103"
    });
    $.__views.__alloyId102.add($.__views.__alloyId103);
    $.__views.__alloyId104 = Ti.UI.createLabel({
        text: "12273",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId104"
    });
    $.__views.__alloyId102.add($.__views.__alloyId104);
    $.__views.__alloyId105 = Ti.UI.createImageView({
        image: "/images/contact_button.png",
        width: "30",
        height: "30",
        right: "10",
        id: "__alloyId105"
    });
    $.__views.__alloyId101.add($.__views.__alloyId105);
    $.__views.__alloyId106 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        id: "__alloyId106"
    });
    __alloyId95.push($.__views.__alloyId106);
    abroad ? $.__views.__alloyId106.addEventListener("click", abroad) : __defers["$.__views.__alloyId106!click!abroad"] = true;
    $.__views.__alloyId107 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        bottom: "10",
        id: "__alloyId107"
    });
    $.__views.__alloyId106.add($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createLabel({
        text: "From Abroad:",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId108"
    });
    $.__views.__alloyId107.add($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createLabel({
        text: "+603-7962 8000",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId109"
    });
    $.__views.__alloyId107.add($.__views.__alloyId109);
    $.__views.__alloyId110 = Ti.UI.createImageView({
        image: "/images/contact_button.png",
        width: "30",
        height: "30",
        right: "10",
        id: "__alloyId110"
    });
    $.__views.__alloyId106.add($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId111"
    });
    __alloyId95.push($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createLabel({
        text: "Operation Hours For Call Center:",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        top: "10",
        id: "__alloyId112"
    });
    $.__views.__alloyId111.add($.__views.__alloyId112);
    $.__views.__alloyId113 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        bottom: "10",
        id: "__alloyId113"
    });
    $.__views.__alloyId111.add($.__views.__alloyId113);
    $.__views.__alloyId114 = Ti.UI.createLabel({
        text: "8:00 A.M. - 12:00 A.M.",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId114"
    });
    $.__views.__alloyId113.add($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createLabel({
        text: "(Including Public Holidays)",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId115"
    });
    $.__views.__alloyId113.add($.__views.__alloyId115);
    $.__views.__alloyId116 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId116"
    });
    __alloyId95.push($.__views.__alloyId116);
    $.__views.__alloyId117 = Ti.UI.createLabel({
        text: "Our Main Office:",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        top: "10",
        id: "__alloyId117"
    });
    $.__views.__alloyId116.add($.__views.__alloyId117);
    $.__views.__alloyId118 = Ti.UI.createLabel({
        text: "31-3, Block C, Jaya One, 72A, Jalan Universiti, 46200 Petaling Jaya, Selangor Darul Ehsan",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId118"
    });
    $.__views.__alloyId116.add($.__views.__alloyId118);
    $.__views.__alloyId119 = Ti.UI.createLabel({
        text: "Operation Hours: 9am - 6pm",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        bottom: "10",
        id: "__alloyId119"
    });
    $.__views.__alloyId116.add($.__views.__alloyId119);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId95,
        id: "table",
        backgroundColor: "#F4F6F5"
    });
    $.__views.scrollView.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    "android" == Ti.Platform.osname && ($.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER);
    __defers["$.__views.__alloyId96!click!malaysia"] && $.__views.__alloyId96.addEventListener("click", malaysia);
    __defers["$.__views.__alloyId101!click!mobile"] && $.__views.__alloyId101.addEventListener("click", mobile);
    __defers["$.__views.__alloyId106!click!abroad"] && $.__views.__alloyId106.addEventListener("click", abroad);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;