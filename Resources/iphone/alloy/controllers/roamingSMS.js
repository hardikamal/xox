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
<<<<<<< HEAD
    $.__views.__alloyId1950 = Alloy.createController("_header", {
        id: "__alloyId1950",
        __parentSymbol: $.__views.roamingSMS
    });
    $.__views.__alloyId1950.setParent($.__views.roamingSMS);
    $.__views.__alloyId1951 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1951"
    });
    $.__views.roamingSMS.add($.__views.__alloyId1951);
    $.__views.__alloyId1952 = Ti.UI.createLabel({
=======
    $.__views.__alloyId2133 = Alloy.createController("_header", {
        id: "__alloyId2133",
        __parentSymbol: $.__views.roamingSMS
    });
    $.__views.__alloyId2133.setParent($.__views.roamingSMS);
    $.__views.__alloyId2134 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId2134"
    });
    $.__views.roamingSMS.add($.__views.__alloyId2134);
    $.__views.__alloyId2135 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1952"
    });
    $.__views.__alloyId1951.add($.__views.__alloyId1952);
    $.__views.__alloyId1953 = Ti.UI.createImageView({
=======
        id: "__alloyId2135"
    });
    $.__views.__alloyId2134.add($.__views.__alloyId2135);
    $.__views.__alloyId2136 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId1953"
    });
    $.__views.__alloyId1951.add($.__views.__alloyId1953);
    back ? $.__views.__alloyId1953.addEventListener("click", back) : __defers["$.__views.__alloyId1953!click!back"] = true;
    $.__views.__alloyId1954 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1954"
    });
    $.__views.roamingSMS.add($.__views.__alloyId1954);
    $.__views.__alloyId1955 = Ti.UI.createLabel({
=======
        id: "__alloyId2136"
    });
    $.__views.__alloyId2134.add($.__views.__alloyId2136);
    back ? $.__views.__alloyId2136.addEventListener("click", back) : __defers["$.__views.__alloyId2136!click!back"] = true;
    $.__views.__alloyId2137 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId2137"
    });
    $.__views.roamingSMS.add($.__views.__alloyId2137);
    $.__views.__alloyId2138 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Domestic Voice Calls",
        textAlign: "center",
        color: "black",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1955"
    });
    $.__views.__alloyId1954.add($.__views.__alloyId1955);
    var __alloyId1956 = [];
    $.__views.__alloyId1957 = Ti.UI.createTableViewSection({
        id: "__alloyId1957"
    });
    __alloyId1956.push($.__views.__alloyId1957);
    $.__views.__alloyId1958 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId2138"
    });
    $.__views.__alloyId2137.add($.__views.__alloyId2138);
    var __alloyId2139 = [];
    $.__views.__alloyId2140 = Ti.UI.createTableViewSection({
        id: "__alloyId2140"
    });
    __alloyId2139.push($.__views.__alloyId2140);
    $.__views.__alloyId2141 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
        id: "__alloyId1958"
    });
    $.__views.__alloyId1957.add($.__views.__alloyId1958);
    $.__views.__alloyId1959 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId1959"
    });
    $.__views.__alloyId1958.add($.__views.__alloyId1959);
    $.__views.__alloyId1960 = Ti.UI.createLabel({
=======
        id: "__alloyId2141"
    });
    $.__views.__alloyId2140.add($.__views.__alloyId2141);
    $.__views.__alloyId2142 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId2142"
    });
    $.__views.__alloyId2141.add($.__views.__alloyId2142);
    $.__views.__alloyId2143 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "No Result",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1960"
    });
    $.__views.__alloyId1959.add($.__views.__alloyId1960);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId1956,
=======
        id: "__alloyId2143"
    });
    $.__views.__alloyId2142.add($.__views.__alloyId2143);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId2139,
>>>>>>> origin/master
        id: "table",
        scrollable: "true"
    });
    $.__views.roamingSMS.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
<<<<<<< HEAD
    __defers["$.__views.__alloyId1953!click!back"] && $.__views.__alloyId1953.addEventListener("click", back);
=======
    __defers["$.__views.__alloyId2136!click!back"] && $.__views.__alloyId2136.addEventListener("click", back);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;