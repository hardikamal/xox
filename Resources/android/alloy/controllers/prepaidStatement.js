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
        DRAWER.navigation("accountDetails2", 1);
    }
    function paymentType(e) {
        console.log("paymentType");
        paymentType = e.row.title;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "prepaidStatement";
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
    $.__views.prepaidStatement = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaidStatement"
    });
    $.__views.prepaidStatement && $.addTopLevelView($.__views.prepaidStatement);
    $.__views.__alloyId2187 = Alloy.createController("_header", {
        id: "__alloyId2187",
        __parentSymbol: $.__views.prepaidStatement
    });
    $.__views.__alloyId2187.setParent($.__views.prepaidStatement);
    $.__views.__alloyId2188 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId2188"
    });
    $.__views.prepaidStatement.add($.__views.__alloyId2188);
    $.__views.__alloyId2189 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2189"
    });
    $.__views.__alloyId2188.add($.__views.__alloyId2189);
    $.__views.__alloyId2190 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2190"
    });
    $.__views.__alloyId2188.add($.__views.__alloyId2190);
    back ? $.__views.__alloyId2190.addEventListener("click", back) : __defers["$.__views.__alloyId2190!click!back"] = true;
    $.__views.__alloyId2191 = Ti.UI.createView({
        layout: "composite",
        height: "120",
        backgroundColor: "#F2F2F2",
        id: "__alloyId2191"
    });
    $.__views.prepaidStatement.add($.__views.__alloyId2191);
    $.__views.__alloyId2192 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        bottom: "10",
        id: "__alloyId2192"
    });
    $.__views.__alloyId2191.add($.__views.__alloyId2192);
    $.__views.__alloyId2193 = Ti.UI.createLabel({
        text: "Prepaid Itemized Statement",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId2193"
    });
    $.__views.__alloyId2192.add($.__views.__alloyId2193);
    $.__views.__alloyId2194 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId2194"
    });
    $.__views.__alloyId2192.add($.__views.__alloyId2194);
    $.__views.__alloyId2195 = Ti.UI.createView({
        layout: "composite",
        id: "__alloyId2195"
    });
    $.__views.__alloyId2194.add($.__views.__alloyId2195);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "90%",
        top: "10",
        bottom: "10",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId2195.add($.__views.picker);
    var __alloyId2196 = [];
    $.__views.__alloyId2197 = Ti.UI.createPickerRow({
        title: "Current Month",
        id: "__alloyId2197"
    });
    __alloyId2196.push($.__views.__alloyId2197);
    $.__views.__alloyId2198 = Ti.UI.createPickerRow({
        title: "April",
        id: "__alloyId2198"
    });
    __alloyId2196.push($.__views.__alloyId2198);
    $.__views.__alloyId2199 = Ti.UI.createPickerRow({
        title: "May",
        id: "__alloyId2199"
    });
    __alloyId2196.push($.__views.__alloyId2199);
    $.__views.__alloyId2200 = Ti.UI.createPickerRow({
        title: "June",
        id: "__alloyId2200"
    });
    __alloyId2196.push($.__views.__alloyId2200);
    $.__views.__alloyId2201 = Ti.UI.createPickerRow({
        title: "July",
        id: "__alloyId2201"
    });
    __alloyId2196.push($.__views.__alloyId2201);
    $.__views.picker.add(__alloyId2196);
    paymentType ? $.__views.picker.addEventListener("change", paymentType) : __defers["$.__views.picker!change!paymentType"] = true;
    $.__views.__alloyId2202 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "25",
        top: "25",
        id: "__alloyId2202"
    });
    $.__views.__alloyId2195.add($.__views.__alloyId2202);
    $.__views.__alloyId2203 = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        height: "200",
        backgroundColor: "white",
        id: "__alloyId2203"
    });
    $.__views.prepaidStatement.add($.__views.__alloyId2203);
    $.__views.__alloyId2204 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2204"
    });
    $.__views.__alloyId2203.add($.__views.__alloyId2204);
    $.__views.__alloyId2205 = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        height: "100%",
        id: "__alloyId2205"
    });
    $.__views.__alloyId2204.add($.__views.__alloyId2205);
    $.__views.__alloyId2206 = Ti.UI.createLabel({
        text: "For more details on your bill statement",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2206"
    });
    $.__views.__alloyId2205.add($.__views.__alloyId2206);
    $.__views.__alloyId2207 = Ti.UI.createLabel({
        text: "kindly log on to https://selfcare.xox.com.my",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2207"
    });
    $.__views.__alloyId2205.add($.__views.__alloyId2207);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2190!click!back"] && $.__views.__alloyId2190.addEventListener("click", back);
    __defers["$.__views.picker!change!paymentType"] && $.__views.picker.addEventListener("change", paymentType);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;