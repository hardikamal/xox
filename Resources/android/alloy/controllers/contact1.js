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
<<<<<<< Updated upstream
    var __alloyId97 = [];
    $.__views.__alloyId98 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        id: "__alloyId98"
    });
    __alloyId97.push($.__views.__alloyId98);
    malaysia ? $.__views.__alloyId98.addEventListener("click", malaysia) : __defers["$.__views.__alloyId98!click!malaysia"] = true;
    $.__views.__alloyId99 = Ti.UI.createView({
=======
    var __alloyId52 = [];
    $.__views.__alloyId53 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        id: "__alloyId53"
    });
    __alloyId52.push($.__views.__alloyId53);
    malaysia ? $.__views.__alloyId53.addEventListener("click", malaysia) : __defers["$.__views.__alloyId53!click!malaysia"] = true;
    $.__views.__alloyId54 = Ti.UI.createView({
>>>>>>> Stashed changes
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        bottom: "10",
<<<<<<< Updated upstream
        id: "__alloyId99"
    });
    $.__views.__alloyId98.add($.__views.__alloyId99);
    $.__views.__alloyId100 = Ti.UI.createLabel({
=======
        id: "__alloyId54"
    });
    $.__views.__alloyId53.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "From Malaysia:",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
<<<<<<< Updated upstream
        id: "__alloyId100"
    });
    $.__views.__alloyId99.add($.__views.__alloyId100);
    $.__views.__alloyId101 = Ti.UI.createLabel({
=======
        id: "__alloyId55"
    });
    $.__views.__alloyId54.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "1300 888 010",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< Updated upstream
        id: "__alloyId101"
    });
    $.__views.__alloyId99.add($.__views.__alloyId101);
    $.__views.__alloyId102 = Ti.UI.createImageView({
=======
        id: "__alloyId56"
    });
    $.__views.__alloyId54.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createImageView({
>>>>>>> Stashed changes
        image: "/images/contact_button.png",
        width: "30",
        height: "30",
        right: "10",
<<<<<<< Updated upstream
        id: "__alloyId102"
    });
    $.__views.__alloyId98.add($.__views.__alloyId102);
    $.__views.__alloyId103 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        id: "__alloyId103"
    });
    __alloyId97.push($.__views.__alloyId103);
    mobile ? $.__views.__alloyId103.addEventListener("click", mobile) : __defers["$.__views.__alloyId103!click!mobile"] = true;
    $.__views.__alloyId104 = Ti.UI.createView({
=======
        id: "__alloyId57"
    });
    $.__views.__alloyId53.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        id: "__alloyId58"
    });
    __alloyId52.push($.__views.__alloyId58);
    mobile ? $.__views.__alloyId58.addEventListener("click", mobile) : __defers["$.__views.__alloyId58!click!mobile"] = true;
    $.__views.__alloyId59 = Ti.UI.createView({
>>>>>>> Stashed changes
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        bottom: "10",
<<<<<<< Updated upstream
        id: "__alloyId104"
    });
    $.__views.__alloyId103.add($.__views.__alloyId104);
    $.__views.__alloyId105 = Ti.UI.createLabel({
=======
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "From Your XOX Mobile:",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
<<<<<<< Updated upstream
        id: "__alloyId105"
    });
    $.__views.__alloyId104.add($.__views.__alloyId105);
    $.__views.__alloyId106 = Ti.UI.createLabel({
=======
        id: "__alloyId60"
    });
    $.__views.__alloyId59.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "12273",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< Updated upstream
        id: "__alloyId106"
    });
    $.__views.__alloyId104.add($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createImageView({
=======
        id: "__alloyId61"
    });
    $.__views.__alloyId59.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createImageView({
>>>>>>> Stashed changes
        image: "/images/contact_button.png",
        width: "30",
        height: "30",
        right: "10",
<<<<<<< Updated upstream
        id: "__alloyId107"
    });
    $.__views.__alloyId103.add($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        id: "__alloyId108"
    });
    __alloyId97.push($.__views.__alloyId108);
    abroad ? $.__views.__alloyId108.addEventListener("click", abroad) : __defers["$.__views.__alloyId108!click!abroad"] = true;
    $.__views.__alloyId109 = Ti.UI.createView({
=======
        id: "__alloyId62"
    });
    $.__views.__alloyId58.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        id: "__alloyId63"
    });
    __alloyId52.push($.__views.__alloyId63);
    abroad ? $.__views.__alloyId63.addEventListener("click", abroad) : __defers["$.__views.__alloyId63!click!abroad"] = true;
    $.__views.__alloyId64 = Ti.UI.createView({
>>>>>>> Stashed changes
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        bottom: "10",
<<<<<<< Updated upstream
        id: "__alloyId109"
    });
    $.__views.__alloyId108.add($.__views.__alloyId109);
    $.__views.__alloyId110 = Ti.UI.createLabel({
=======
        id: "__alloyId64"
    });
    $.__views.__alloyId63.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "From Abroad:",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
<<<<<<< Updated upstream
        id: "__alloyId110"
    });
    $.__views.__alloyId109.add($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createLabel({
=======
        id: "__alloyId65"
    });
    $.__views.__alloyId64.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "+603-7962 8000",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< Updated upstream
        id: "__alloyId111"
    });
    $.__views.__alloyId109.add($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createImageView({
=======
        id: "__alloyId66"
    });
    $.__views.__alloyId64.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createImageView({
>>>>>>> Stashed changes
        image: "/images/contact_button.png",
        width: "30",
        height: "30",
        right: "10",
<<<<<<< Updated upstream
        id: "__alloyId112"
    });
    $.__views.__alloyId108.add($.__views.__alloyId112);
    $.__views.__alloyId113 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId113"
    });
    __alloyId97.push($.__views.__alloyId113);
    $.__views.__alloyId114 = Ti.UI.createLabel({
=======
        id: "__alloyId67"
    });
    $.__views.__alloyId63.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId68"
    });
    __alloyId52.push($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "Operation Hours For Call Center:",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        top: "10",
<<<<<<< Updated upstream
        id: "__alloyId114"
    });
    $.__views.__alloyId113.add($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        bottom: "10",
        id: "__alloyId115"
    });
    $.__views.__alloyId113.add($.__views.__alloyId115);
    $.__views.__alloyId116 = Ti.UI.createLabel({
=======
        id: "__alloyId69"
    });
    $.__views.__alloyId68.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        bottom: "10",
        id: "__alloyId70"
    });
    $.__views.__alloyId68.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "8:00 A.M. - 12:00 A.M.",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< Updated upstream
        id: "__alloyId116"
    });
    $.__views.__alloyId115.add($.__views.__alloyId116);
    $.__views.__alloyId117 = Ti.UI.createLabel({
=======
        id: "__alloyId71"
    });
    $.__views.__alloyId70.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "(Including Public Holidays)",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
<<<<<<< Updated upstream
        id: "__alloyId117"
    });
    $.__views.__alloyId115.add($.__views.__alloyId117);
    $.__views.__alloyId118 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId118"
    });
    __alloyId97.push($.__views.__alloyId118);
    $.__views.__alloyId119 = Ti.UI.createLabel({
=======
        id: "__alloyId72"
    });
    $.__views.__alloyId70.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId73"
    });
    __alloyId52.push($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "Our Main Office:",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        top: "10",
<<<<<<< Updated upstream
        id: "__alloyId119"
    });
    $.__views.__alloyId118.add($.__views.__alloyId119);
    $.__views.__alloyId120 = Ti.UI.createLabel({
=======
        id: "__alloyId74"
    });
    $.__views.__alloyId73.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "31-3, Block C, Jaya One, 72A, Jalan Universiti, 46200 Petaling Jaya, Selangor Darul Ehsan",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< Updated upstream
        id: "__alloyId120"
    });
    $.__views.__alloyId118.add($.__views.__alloyId120);
    $.__views.__alloyId121 = Ti.UI.createLabel({
=======
        id: "__alloyId75"
    });
    $.__views.__alloyId73.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "Operation Hours: 9am - 6pm",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        bottom: "10",
<<<<<<< Updated upstream
        id: "__alloyId121"
    });
    $.__views.__alloyId118.add($.__views.__alloyId121);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId97,
=======
        id: "__alloyId76"
    });
    $.__views.__alloyId73.add($.__views.__alloyId76);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId52,
>>>>>>> Stashed changes
        id: "table",
        backgroundColor: "#F4F6F5"
    });
    $.__views.scrollView.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER;
<<<<<<< Updated upstream
    __defers["$.__views.__alloyId98!click!malaysia"] && $.__views.__alloyId98.addEventListener("click", malaysia);
    __defers["$.__views.__alloyId103!click!mobile"] && $.__views.__alloyId103.addEventListener("click", mobile);
    __defers["$.__views.__alloyId108!click!abroad"] && $.__views.__alloyId108.addEventListener("click", abroad);
=======
    __defers["$.__views.__alloyId53!click!malaysia"] && $.__views.__alloyId53.addEventListener("click", malaysia);
    __defers["$.__views.__alloyId58!click!mobile"] && $.__views.__alloyId58.addEventListener("click", mobile);
    __defers["$.__views.__alloyId63!click!abroad"] && $.__views.__alloyId63.addEventListener("click", abroad);
>>>>>>> Stashed changes
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;