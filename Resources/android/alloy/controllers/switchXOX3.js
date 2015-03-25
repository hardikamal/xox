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
        DRAWER.navigation("switchXOX2", 1);
    }
    function proceed() {
        console.log("proceed");
        DRAWER.navigation("onlinePurchases", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "switchXOX3";
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
    $.__views.switchXOX3 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "switchXOX3"
    });
    $.__views.switchXOX3 && $.addTopLevelView($.__views.switchXOX3);
    $.__views.__alloyId2942 = Alloy.createController("_header", {
        id: "__alloyId2942",
        __parentSymbol: $.__views.switchXOX3
    });
    $.__views.__alloyId2942.setParent($.__views.switchXOX3);
    $.__views.__alloyId2943 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId2943"
    });
    $.__views.switchXOX3.add($.__views.__alloyId2943);
    $.__views.__alloyId2944 = Ti.UI.createLabel({
        text: "#1758 SWITCH TO XOX",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId2944"
    });
    $.__views.__alloyId2943.add($.__views.__alloyId2944);
    $.__views.__alloyId2945 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2945"
    });
    $.__views.__alloyId2943.add($.__views.__alloyId2945);
    back ? $.__views.__alloyId2945.addEventListener("click", back) : __defers["$.__views.__alloyId2945!click!back"] = true;
    $.__views.__alloyId2946 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId2946"
    });
    $.__views.switchXOX3.add($.__views.__alloyId2946);
    $.__views.__alloyId2947 = Ti.UI.createLabel({
        text: "Step 2 of 2",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2947"
    });
    $.__views.__alloyId2946.add($.__views.__alloyId2947);
    $.__views.__alloyId2948 = Ti.UI.createLabel({
        text: "Question",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId2948"
    });
    $.__views.__alloyId2946.add($.__views.__alloyId2948);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "white",
        width: "90%"
    });
    $.__views.switchXOX3.add($.__views.scrollView);
    $.__views.__alloyId2949 = Ti.UI.createLabel({
        text: "How did you find out about us?",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId2949"
    });
    $.__views.scrollView.add($.__views.__alloyId2949);
    $.__views.__alloyId2950 = Ti.UI.createView({
        layout: "vertical",
        height: "100",
        id: "__alloyId2950"
    });
    $.__views.scrollView.add($.__views.__alloyId2950);
    $.__views.__alloyId2951 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "100%",
        id: "__alloyId2951"
    });
    $.__views.__alloyId2950.add($.__views.__alloyId2951);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "30",
        borderRadius: "15",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId2951.add($.__views.picker);
    var __alloyId2952 = [];
    $.__views.__alloyId2953 = Ti.UI.createPickerRow({
        title: "None",
        id: "__alloyId2953"
    });
    __alloyId2952.push($.__views.__alloyId2953);
    $.__views.__alloyId2954 = Ti.UI.createPickerRow({
        title: "RM10",
        id: "__alloyId2954"
    });
    __alloyId2952.push($.__views.__alloyId2954);
    $.__views.__alloyId2955 = Ti.UI.createPickerRow({
        title: "RM30",
        id: "__alloyId2955"
    });
    __alloyId2952.push($.__views.__alloyId2955);
    $.__views.__alloyId2956 = Ti.UI.createPickerRow({
        title: "RM50",
        id: "__alloyId2956"
    });
    __alloyId2952.push($.__views.__alloyId2956);
    $.__views.picker.add(__alloyId2952);
    topUp ? $.__views.picker.addEventListener("change", topUp) : __defers["$.__views.picker!change!topUp"] = true;
    $.__views.__alloyId2957 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId2957"
    });
    $.__views.__alloyId2951.add($.__views.__alloyId2957);
    $.__views.__alloyId2958 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId2958"
    });
    $.__views.switchXOX3.add($.__views.__alloyId2958);
    proceed ? $.__views.__alloyId2958.addEventListener("click", proceed) : __defers["$.__views.__alloyId2958!click!proceed"] = true;
    $.__views.__alloyId2959 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId2959"
    });
    $.__views.__alloyId2958.add($.__views.__alloyId2959);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId2945!click!back"] && $.__views.__alloyId2945.addEventListener("click", back);
    __defers["$.__views.picker!change!topUp"] && $.__views.picker.addEventListener("change", topUp);
    __defers["$.__views.__alloyId2958!click!proceed"] && $.__views.__alloyId2958.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;