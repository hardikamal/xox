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
    $.__views.__alloyId2383 = Alloy.createController("_header", {
        id: "__alloyId2383",
        __parentSymbol: $.__views.roamingSMS
    });
    $.__views.__alloyId2383.setParent($.__views.roamingSMS);
    $.__views.__alloyId2384 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId2384"
    });
    $.__views.roamingSMS.add($.__views.__alloyId2384);
    $.__views.__alloyId2385 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2385"
    });
    $.__views.__alloyId2384.add($.__views.__alloyId2385);
    $.__views.__alloyId2386 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2386"
    });
    $.__views.__alloyId2384.add($.__views.__alloyId2386);
    back ? $.__views.__alloyId2386.addEventListener("click", back) : __defers["$.__views.__alloyId2386!click!back"] = true;
    $.__views.__alloyId2387 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId2387"
    });
    $.__views.roamingSMS.add($.__views.__alloyId2387);
    $.__views.__alloyId2388 = Ti.UI.createLabel({
        text: "Domestic Voice Calls",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId2388"
    });
    $.__views.__alloyId2387.add($.__views.__alloyId2388);
    var __alloyId2389 = [];
    $.__views.__alloyId2390 = Ti.UI.createTableViewSection({
        id: "__alloyId2390"
    });
    __alloyId2389.push($.__views.__alloyId2390);
    $.__views.__alloyId2391 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2391"
    });
    $.__views.__alloyId2390.add($.__views.__alloyId2391);
    $.__views.__alloyId2392 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId2392"
    });
    $.__views.__alloyId2391.add($.__views.__alloyId2392);
    $.__views.__alloyId2393 = Ti.UI.createLabel({
        text: "No Result",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2393"
    });
    $.__views.__alloyId2392.add($.__views.__alloyId2393);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId2389,
        id: "table",
        scrollable: "true"
    });
    $.__views.roamingSMS.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2386!click!back"] && $.__views.__alloyId2386.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;