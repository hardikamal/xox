function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "terms";
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
    $.__views.terms = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "terms"
    });
    $.__views.terms && $.addTopLevelView($.__views.terms);
<<<<<<< HEAD
    $.__views.__alloyId2519 = Alloy.createController("_header", {
        id: "__alloyId2519",
        __parentSymbol: $.__views.terms
    });
    $.__views.__alloyId2519.setParent($.__views.terms);
    $.__views.__alloyId2520 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId2520"
    });
    $.__views.terms.add($.__views.__alloyId2520);
    $.__views.__alloyId2521 = Ti.UI.createLabel({
=======
    $.__views.__alloyId2198 = Alloy.createController("_header", {
        id: "__alloyId2198",
        __parentSymbol: $.__views.terms
    });
    $.__views.__alloyId2198.setParent($.__views.terms);
    $.__views.__alloyId2199 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId2199"
    });
    $.__views.terms.add($.__views.__alloyId2199);
    $.__views.__alloyId2200 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Support",
        left: "10",
        top: "10",
        color: "white",
<<<<<<< HEAD
        id: "__alloyId2521"
    });
    $.__views.__alloyId2520.add($.__views.__alloyId2521);
    $.__views.__alloyId2522 = Ti.UI.createView({
        layout: "vertical",
        height: "100",
        backgroundColor: "#E6E7E9",
        id: "__alloyId2522"
    });
    $.__views.terms.add($.__views.__alloyId2522);
    $.__views.__alloyId2523 = Ti.UI.createLabel({
=======
        id: "__alloyId2200"
    });
    $.__views.__alloyId2199.add($.__views.__alloyId2200);
    $.__views.__alloyId2201 = Ti.UI.createView({
        layout: "vertical",
        height: "100",
        backgroundColor: "#E6E7E9",
        id: "__alloyId2201"
    });
    $.__views.terms.add($.__views.__alloyId2201);
    $.__views.__alloyId2202 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "User Guide",
        width: "90%",
        height: "30",
        top: "10",
        bottom: "5",
        textAlign: "left",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId2523"
    });
    $.__views.__alloyId2522.add($.__views.__alloyId2523);
    $.__views.__alloyId2524 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId2524"
    });
    $.__views.__alloyId2522.add($.__views.__alloyId2524);
=======
        id: "__alloyId2202"
    });
    $.__views.__alloyId2201.add($.__views.__alloyId2202);
    $.__views.__alloyId2203 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId2203"
    });
    $.__views.__alloyId2201.add($.__views.__alloyId2203);
>>>>>>> origin/master
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "30",
        borderRadius: "15",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
<<<<<<< HEAD
    $.__views.__alloyId2524.add($.__views.picker);
    var __alloyId2525 = [];
    $.__views.__alloyId2526 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId2526"
    });
    __alloyId2525.push($.__views.__alloyId2526);
    $.__views.__alloyId2527 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId2527"
    });
    __alloyId2525.push($.__views.__alloyId2527);
    $.__views.__alloyId2528 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId2528"
    });
    __alloyId2525.push($.__views.__alloyId2528);
    $.__views.__alloyId2529 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId2529"
    });
    __alloyId2525.push($.__views.__alloyId2529);
    $.__views.picker.add(__alloyId2525);
    guide ? $.__views.picker.addEventListener("change", guide) : __defers["$.__views.picker!change!guide"] = true;
    $.__views.__alloyId2530 = Ti.UI.createImageView({
=======
    $.__views.__alloyId2203.add($.__views.picker);
    var __alloyId2204 = [];
    $.__views.__alloyId2205 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId2205"
    });
    __alloyId2204.push($.__views.__alloyId2205);
    $.__views.__alloyId2206 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId2206"
    });
    __alloyId2204.push($.__views.__alloyId2206);
    $.__views.__alloyId2207 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId2207"
    });
    __alloyId2204.push($.__views.__alloyId2207);
    $.__views.__alloyId2208 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId2208"
    });
    __alloyId2204.push($.__views.__alloyId2208);
    $.__views.picker.add(__alloyId2204);
    guide ? $.__views.picker.addEventListener("change", guide) : __defers["$.__views.picker!change!guide"] = true;
    $.__views.__alloyId2209 = Ti.UI.createImageView({
>>>>>>> origin/master
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
<<<<<<< HEAD
        id: "__alloyId2530"
    });
    $.__views.__alloyId2524.add($.__views.__alloyId2530);
    $.__views.__alloyId2531 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId2531"
    });
    $.__views.terms.add($.__views.__alloyId2531);
=======
        id: "__alloyId2209"
    });
    $.__views.__alloyId2203.add($.__views.__alloyId2209);
    $.__views.__alloyId2210 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId2210"
    });
    $.__views.terms.add($.__views.__alloyId2210);
>>>>>>> origin/master
    $.__views.title = Ti.UI.createLabel({
        id: "title",
        width: "90%",
        height: Ti.UI.SIZE,
        top: "10",
        textAlign: "left",
        color: "black"
    });
<<<<<<< HEAD
    $.__views.__alloyId2531.add($.__views.title);
=======
    $.__views.__alloyId2210.add($.__views.title);
>>>>>>> origin/master
    $.__views.label = Ti.UI.createLabel({
        id: "label",
        width: "90%",
        height: Ti.UI.SIZE,
        top: "10",
        textAlign: "left",
        color: "black"
    });
<<<<<<< HEAD
    $.__views.__alloyId2531.add($.__views.label);
=======
    $.__views.__alloyId2210.add($.__views.label);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.picker!change!guide"] && $.__views.picker.addEventListener("change", guide);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;