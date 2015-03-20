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
        "prepaid" == Alloy.Globals.userPlan ? DRAWER.navigation("prepaidStatement", 1) : DRAWER.navigation("postpaidStatement", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "roamingSMS";
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
    $.__views.roamingSMS = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "roamingSMS"
    });
    $.__views.roamingSMS && $.addTopLevelView($.__views.roamingSMS);
    $.__views.__alloyId1971 = Alloy.createController("_header", {
        id: "__alloyId1971",
        __parentSymbol: $.__views.roamingSMS
    });
    $.__views.__alloyId1971.setParent($.__views.roamingSMS);
    $.__views.__alloyId1972 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1972"
    });
    $.__views.roamingSMS.add($.__views.__alloyId1972);
    $.__views.__alloyId1973 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1973"
    });
    $.__views.__alloyId1972.add($.__views.__alloyId1973);
    $.__views.__alloyId1974 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1974"
    });
    $.__views.__alloyId1972.add($.__views.__alloyId1974);
    back ? $.__views.__alloyId1974.addEventListener("click", back) : __defers["$.__views.__alloyId1974!click!back"] = true;
    $.__views.__alloyId1975 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1975"
    });
    $.__views.roamingSMS.add($.__views.__alloyId1975);
    $.__views.__alloyId1976 = Ti.UI.createLabel({
        text: "Domestic Voice Calls",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId1976"
    });
    $.__views.__alloyId1975.add($.__views.__alloyId1976);
    var __alloyId1977 = [];
    $.__views.__alloyId1978 = Ti.UI.createTableViewSection({
        id: "__alloyId1978"
    });
    __alloyId1977.push($.__views.__alloyId1978);
    $.__views.__alloyId1979 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId1979"
    });
    $.__views.__alloyId1978.add($.__views.__alloyId1979);
    $.__views.__alloyId1980 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId1980"
    });
    $.__views.__alloyId1979.add($.__views.__alloyId1980);
    $.__views.__alloyId1981 = Ti.UI.createLabel({
        text: "No Result",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1981"
    });
    $.__views.__alloyId1980.add($.__views.__alloyId1981);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId1977,
        id: "table",
        scrollable: "true"
    });
    $.__views.roamingSMS.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1974!click!back"] && $.__views.__alloyId1974.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;