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
        DRAWER.navigation("support", 1);
    }
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
    $.__views.__alloyId2960 = Alloy.createController("_header", {
        id: "__alloyId2960",
        __parentSymbol: $.__views.terms
    });
    $.__views.__alloyId2960.setParent($.__views.terms);
    $.__views.__alloyId2961 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#AFCD3F",
        id: "__alloyId2961"
    });
    $.__views.terms.add($.__views.__alloyId2961);
    $.__views.__alloyId2962 = Ti.UI.createLabel({
        text: "Terms & Conditions",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2962"
    });
    $.__views.__alloyId2961.add($.__views.__alloyId2962);
    $.__views.__alloyId2963 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2963"
    });
    $.__views.__alloyId2961.add($.__views.__alloyId2963);
    back ? $.__views.__alloyId2963.addEventListener("click", back) : __defers["$.__views.__alloyId2963!click!back"] = true;
    $.__views.__alloyId2964 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#E6E7E9",
        id: "__alloyId2964"
    });
    $.__views.terms.add($.__views.__alloyId2964);
    $.__views.__alloyId2965 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId2965"
    });
    $.__views.__alloyId2964.add($.__views.__alloyId2965);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "30",
        borderRadius: "15",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId2965.add($.__views.picker);
    var __alloyId2966 = [];
    $.__views.__alloyId2967 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId2967"
    });
    __alloyId2966.push($.__views.__alloyId2967);
    $.__views.__alloyId2968 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId2968"
    });
    __alloyId2966.push($.__views.__alloyId2968);
    $.__views.__alloyId2969 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId2969"
    });
    __alloyId2966.push($.__views.__alloyId2969);
    $.__views.__alloyId2970 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId2970"
    });
    __alloyId2966.push($.__views.__alloyId2970);
    $.__views.picker.add(__alloyId2966);
    guide ? $.__views.picker.addEventListener("change", guide) : __defers["$.__views.picker!change!guide"] = true;
    $.__views.__alloyId2971 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId2971"
    });
    $.__views.__alloyId2965.add($.__views.__alloyId2971);
    $.__views.__alloyId2972 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId2972"
    });
    $.__views.terms.add($.__views.__alloyId2972);
    $.__views.title = Ti.UI.createLabel({
        id: "title",
        width: "90%",
        height: Ti.UI.SIZE,
        top: "10",
        textAlign: "left",
        color: "black"
    });
    $.__views.__alloyId2972.add($.__views.title);
    $.__views.label = Ti.UI.createLabel({
        id: "label",
        width: "90%",
        height: Ti.UI.SIZE,
        top: "10",
        textAlign: "left",
        color: "black"
    });
    $.__views.__alloyId2972.add($.__views.label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId2963!click!back"] && $.__views.__alloyId2963.addEventListener("click", back);
    __defers["$.__views.picker!change!guide"] && $.__views.picker.addEventListener("change", guide);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;