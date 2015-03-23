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
    var __alloyId54 = [];
    $.__views.__alloyId55 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        id: "__alloyId55"
    });
    __alloyId54.push($.__views.__alloyId55);
    malaysia ? $.__views.__alloyId55.addEventListener("click", malaysia) : __defers["$.__views.__alloyId55!click!malaysia"] = true;
    $.__views.__alloyId56 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        bottom: "10",
        id: "__alloyId56"
    });
    $.__views.__alloyId55.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createLabel({
        text: "From Malaysia:",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId57"
    });
    $.__views.__alloyId56.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createLabel({
        text: "1300 888 010",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId58"
    });
    $.__views.__alloyId56.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createImageView({
        image: "/images/contact_button.png",
        width: "30",
        height: "30",
        right: "10",
        id: "__alloyId59"
    });
    $.__views.__alloyId55.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        id: "__alloyId60"
    });
    __alloyId54.push($.__views.__alloyId60);
    mobile ? $.__views.__alloyId60.addEventListener("click", mobile) : __defers["$.__views.__alloyId60!click!mobile"] = true;
    $.__views.__alloyId61 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        bottom: "10",
        id: "__alloyId61"
    });
    $.__views.__alloyId60.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createLabel({
        text: "From Your XOX Mobile:",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId62"
    });
    $.__views.__alloyId61.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createLabel({
        text: "12273",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId63"
    });
    $.__views.__alloyId61.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createImageView({
        image: "/images/contact_button.png",
        width: "30",
        height: "30",
        right: "10",
        id: "__alloyId64"
    });
    $.__views.__alloyId60.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        id: "__alloyId65"
    });
    __alloyId54.push($.__views.__alloyId65);
    abroad ? $.__views.__alloyId65.addEventListener("click", abroad) : __defers["$.__views.__alloyId65!click!abroad"] = true;
    $.__views.__alloyId66 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        bottom: "10",
        id: "__alloyId66"
    });
    $.__views.__alloyId65.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createLabel({
        text: "From Abroad:",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId67"
    });
    $.__views.__alloyId66.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createLabel({
        text: "+603-7962 8000",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId68"
    });
    $.__views.__alloyId66.add($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createImageView({
        image: "/images/contact_button.png",
        width: "30",
        height: "30",
        right: "10",
        id: "__alloyId69"
    });
    $.__views.__alloyId65.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId70"
    });
    __alloyId54.push($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createLabel({
        text: "Operation Hours For Call Center:",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        top: "10",
        id: "__alloyId71"
    });
    $.__views.__alloyId70.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        bottom: "10",
        id: "__alloyId72"
    });
    $.__views.__alloyId70.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createLabel({
        text: "8:00 A.M. - 12:00 A.M.",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId73"
    });
    $.__views.__alloyId72.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createLabel({
        text: "(Including Public Holidays)",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId74"
    });
    $.__views.__alloyId72.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId75"
    });
    __alloyId54.push($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createLabel({
        text: "Our Main Office:",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        top: "10",
        id: "__alloyId76"
    });
    $.__views.__alloyId75.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createLabel({
        text: "31-3, Block C, Jaya One, 72A, Jalan Universiti, 46200 Petaling Jaya, Selangor Darul Ehsan",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId77"
    });
    $.__views.__alloyId75.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createLabel({
        text: "Operation Hours: 9am - 6pm",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        bottom: "10",
        id: "__alloyId78"
    });
    $.__views.__alloyId75.add($.__views.__alloyId78);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId54,
        id: "table",
        backgroundColor: "#F4F6F5"
    });
    $.__views.scrollView.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    "android" == Ti.Platform.osname && ($.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER);
    __defers["$.__views.__alloyId55!click!malaysia"] && $.__views.__alloyId55.addEventListener("click", malaysia);
    __defers["$.__views.__alloyId60!click!mobile"] && $.__views.__alloyId60.addEventListener("click", mobile);
    __defers["$.__views.__alloyId65!click!abroad"] && $.__views.__alloyId65.addEventListener("click", abroad);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;