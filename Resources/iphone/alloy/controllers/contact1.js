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
        title: "Bananas",
        id: "__alloyId15"
    });
    __alloyId9.push($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createTableViewRow({
        title: "Carrots",
        id: "__alloyId16"
    });
    __alloyId9.push($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createTableViewRow({
        title: "Potatoes",
        id: "__alloyId17"
    });
    __alloyId9.push($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createTableViewRow({
        title: "Cod",
        id: "__alloyId18"
    });
    __alloyId9.push($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createTableViewRow({
        title: "Haddock",
        id: "__alloyId19"
    });
    __alloyId9.push($.__views.__alloyId19);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId9,
        id: "table",
        backgroundColor: "#F4F6F5",
        separatorColor: "#D3D5D4",
        width: "100%"
    });
    $.__views.scrollView.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    "android" == Ti.Platform.osname && ($.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER);
    __defers["$.__views.__alloyId10!click!malaysia"] && $.__views.__alloyId10.addEventListener("click", malaysia);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;