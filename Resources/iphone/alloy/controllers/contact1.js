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
    var __alloyId9 = [];
    $.__views.__alloyId10 = Ti.UI.createTableViewRow({
        layout: "composite",
        height: "20%",
        id: "__alloyId10"
    });
    __alloyId9.push($.__views.__alloyId10);
    malaysia ? $.__views.__alloyId10.addEventListener("click", malaysia) : __defers["$.__views.__alloyId10!click!malaysia"] = true;
    $.__views.__alloyId11 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        text: "From Malaysia:",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        text: "1300 888 010",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId13"
    });
    $.__views.__alloyId11.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId14"
    });
    $.__views.__alloyId10.add($.__views.__alloyId14);
    $.__views.tel1 = Ti.UI.createImageView({
        id: "tel1",
        backgroundColor: "#4FC3D2",
        image: "",
        width: "40",
        height: "40"
    });
    $.__views.__alloyId14.add($.__views.tel1);
    $.__views.__alloyId15 = Ti.UI.createTableViewRow({
        layout: "composite",
        height: "20%",
        id: "__alloyId15"
    });
    __alloyId9.push($.__views.__alloyId15);
    mobile ? $.__views.__alloyId15.addEventListener("click", mobile) : __defers["$.__views.__alloyId15!click!mobile"] = true;
    $.__views.__alloyId16 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        text: "From Your XOX Mobile:",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        text: "12273",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId18"
    });
    $.__views.__alloyId16.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId19"
    });
    $.__views.__alloyId15.add($.__views.__alloyId19);
    $.__views.tel1 = Ti.UI.createImageView({
        id: "tel1",
        backgroundColor: "#4FC3D2",
        image: "",
        width: "40",
        height: "40"
    });
    $.__views.__alloyId19.add($.__views.tel1);
    $.__views.__alloyId20 = Ti.UI.createTableViewRow({
        layout: "composite",
        height: "20%",
        id: "__alloyId20"
    });
    __alloyId9.push($.__views.__alloyId20);
    abroad ? $.__views.__alloyId20.addEventListener("click", abroad) : __defers["$.__views.__alloyId20!click!abroad"] = true;
    $.__views.__alloyId21 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        text: "From Abroad:",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        text: "+603-7962 8000",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId23"
    });
    $.__views.__alloyId21.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId24"
    });
    $.__views.__alloyId20.add($.__views.__alloyId24);
    $.__views.tel1 = Ti.UI.createImageView({
        id: "tel1",
        backgroundColor: "#4FC3D2",
        image: "",
        width: "40",
        height: "40"
    });
    $.__views.__alloyId24.add($.__views.tel1);
    $.__views.__alloyId25 = Ti.UI.createTableViewRow({
        layout: "composite",
        height: "20%",
        id: "__alloyId25"
    });
    __alloyId9.push($.__views.__alloyId25);
    abroad ? $.__views.__alloyId25.addEventListener("click", abroad) : __defers["$.__views.__alloyId25!click!abroad"] = true;
    $.__views.__alloyId26 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        text: "From Abroad:",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        text: "+603-7962 8000",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId28"
    });
    $.__views.__alloyId26.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId29"
    });
    $.__views.__alloyId25.add($.__views.__alloyId29);
    $.__views.tel1 = Ti.UI.createImageView({
        id: "tel1",
        backgroundColor: "#4FC3D2",
        image: "",
        width: "40",
        height: "40"
    });
    $.__views.__alloyId29.add($.__views.tel1);
    $.__views.__alloyId30 = Ti.UI.createTableViewRow({
        layout: "composite",
        height: "30%",
        id: "__alloyId30"
    });
    __alloyId9.push($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createLabel({
        text: "Operation Hours For Call Center:",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId32"
    });
    $.__views.__alloyId31.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId33"
    });
    $.__views.__alloyId31.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createLabel({
        text: "8:00 A.M. - 12:00 A.M.",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        text: "(Including Public Holidays)",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId35"
    });
    $.__views.__alloyId33.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createTableViewRow({
        layout: "composite",
        height: "40%",
        id: "__alloyId36"
    });
    __alloyId9.push($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createLabel({
        text: "Our Main Office:",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId38"
    });
    $.__views.__alloyId37.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createLabel({
        text: "31-3, Block C, Jaya One, 72A, Jalan Universiti, 46200 Petaling Jaya, Selangor Darul Ehsan",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId39"
    });
    $.__views.__alloyId37.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createLabel({
        text: "Operation Hours: 9am - 6pm",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId40"
    });
    $.__views.__alloyId37.add($.__views.__alloyId40);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId9,
        id: "table",
        backgroundColor: "#F4F6F5",
        separatorColor: "#D3D5D4"
    });
    $.__views.scrollView.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    "android" == Ti.Platform.osname && ($.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER);
    __defers["$.__views.__alloyId10!click!malaysia"] && $.__views.__alloyId10.addEventListener("click", malaysia);
    __defers["$.__views.__alloyId15!click!mobile"] && $.__views.__alloyId15.addEventListener("click", mobile);
    __defers["$.__views.__alloyId20!click!abroad"] && $.__views.__alloyId20.addEventListener("click", abroad);
    __defers["$.__views.__alloyId25!click!abroad"] && $.__views.__alloyId25.addEventListener("click", abroad);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;