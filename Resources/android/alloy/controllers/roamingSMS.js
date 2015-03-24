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
    $.__views.__alloyId2202 = Alloy.createController("_header", {
        id: "__alloyId2202",
        __parentSymbol: $.__views.roamingSMS
    });
    $.__views.__alloyId2202.setParent($.__views.roamingSMS);
    $.__views.__alloyId2203 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId2203"
    });
    $.__views.roamingSMS.add($.__views.__alloyId2203);
    $.__views.__alloyId2204 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2204"
    });
    $.__views.__alloyId2203.add($.__views.__alloyId2204);
    $.__views.__alloyId2205 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2205"
    });
    $.__views.__alloyId2203.add($.__views.__alloyId2205);
    back ? $.__views.__alloyId2205.addEventListener("click", back) : __defers["$.__views.__alloyId2205!click!back"] = true;
    $.__views.__alloyId2206 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId2206"
    });
    $.__views.roamingSMS.add($.__views.__alloyId2206);
    $.__views.__alloyId2207 = Ti.UI.createLabel({
        text: "Domestic Voice Calls",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId2207"
    });
    $.__views.__alloyId2206.add($.__views.__alloyId2207);
    var __alloyId2208 = [];
    $.__views.__alloyId2209 = Ti.UI.createTableViewSection({
        id: "__alloyId2209"
    });
    __alloyId2208.push($.__views.__alloyId2209);
    $.__views.__alloyId2210 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2210"
    });
    $.__views.__alloyId2209.add($.__views.__alloyId2210);
    $.__views.__alloyId2211 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId2211"
    });
    $.__views.__alloyId2210.add($.__views.__alloyId2211);
    $.__views.__alloyId2212 = Ti.UI.createLabel({
        text: "No Result",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2212"
    });
    $.__views.__alloyId2211.add($.__views.__alloyId2212);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId2208,
        id: "table",
        scrollable: "true"
    });
    $.__views.roamingSMS.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2205!click!back"] && $.__views.__alloyId2205.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;