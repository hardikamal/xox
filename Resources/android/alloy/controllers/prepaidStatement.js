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
    $.__views.__alloyId1932 = Alloy.createController("_header", {
        id: "__alloyId1932",
        __parentSymbol: $.__views.prepaidStatement
    });
    $.__views.__alloyId1932.setParent($.__views.prepaidStatement);
    $.__views.__alloyId1933 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1933"
    });
    $.__views.prepaidStatement.add($.__views.__alloyId1933);
    $.__views.__alloyId1934 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1934"
    });
    $.__views.__alloyId1933.add($.__views.__alloyId1934);
    $.__views.__alloyId1935 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1935"
    });
    $.__views.__alloyId1933.add($.__views.__alloyId1935);
    back ? $.__views.__alloyId1935.addEventListener("click", back) : __defers["$.__views.__alloyId1935!click!back"] = true;
    $.__views.__alloyId1936 = Ti.UI.createView({
        layout: "composite",
        height: "120",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1936"
    });
    $.__views.prepaidStatement.add($.__views.__alloyId1936);
    $.__views.__alloyId1937 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        bottom: "10",
        id: "__alloyId1937"
    });
    $.__views.__alloyId1936.add($.__views.__alloyId1937);
    $.__views.__alloyId1938 = Ti.UI.createLabel({
        text: "Prepaid Itemized Statement",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId1938"
    });
    $.__views.__alloyId1937.add($.__views.__alloyId1938);
    $.__views.__alloyId1939 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId1939"
    });
    $.__views.__alloyId1937.add($.__views.__alloyId1939);
    $.__views.__alloyId1940 = Ti.UI.createView({
        layout: "composite",
        id: "__alloyId1940"
    });
    $.__views.__alloyId1939.add($.__views.__alloyId1940);
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
    $.__views.__alloyId1940.add($.__views.picker);
    var __alloyId1941 = [];
    $.__views.__alloyId1942 = Ti.UI.createPickerRow({
        title: "Current Month",
        id: "__alloyId1942"
    });
    __alloyId1941.push($.__views.__alloyId1942);
    $.__views.__alloyId1943 = Ti.UI.createPickerRow({
        title: "April",
        id: "__alloyId1943"
    });
    __alloyId1941.push($.__views.__alloyId1943);
    $.__views.__alloyId1944 = Ti.UI.createPickerRow({
        title: "May",
        id: "__alloyId1944"
    });
    __alloyId1941.push($.__views.__alloyId1944);
    $.__views.__alloyId1945 = Ti.UI.createPickerRow({
        title: "June",
        id: "__alloyId1945"
    });
    __alloyId1941.push($.__views.__alloyId1945);
    $.__views.__alloyId1946 = Ti.UI.createPickerRow({
        title: "July",
        id: "__alloyId1946"
    });
    __alloyId1941.push($.__views.__alloyId1946);
    $.__views.picker.add(__alloyId1941);
    paymentType ? $.__views.picker.addEventListener("change", paymentType) : __defers["$.__views.picker!change!paymentType"] = true;
    $.__views.__alloyId1947 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "25",
        top: "25",
        id: "__alloyId1947"
    });
    $.__views.__alloyId1940.add($.__views.__alloyId1947);
    $.__views.__alloyId1948 = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        height: "200",
        backgroundColor: "white",
        id: "__alloyId1948"
    });
    $.__views.prepaidStatement.add($.__views.__alloyId1948);
    $.__views.__alloyId1949 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1949"
    });
    $.__views.__alloyId1948.add($.__views.__alloyId1949);
    $.__views.__alloyId1950 = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        height: "100%",
        id: "__alloyId1950"
    });
    $.__views.__alloyId1949.add($.__views.__alloyId1950);
    $.__views.__alloyId1951 = Ti.UI.createLabel({
        text: "For more details on your bill statement",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1951"
    });
    $.__views.__alloyId1950.add($.__views.__alloyId1951);
    $.__views.__alloyId1952 = Ti.UI.createLabel({
        text: "kindly log on to https://selfcare.xox.com.my",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1952"
    });
    $.__views.__alloyId1950.add($.__views.__alloyId1952);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1935!click!back"] && $.__views.__alloyId1935.addEventListener("click", back);
    __defers["$.__views.picker!change!paymentType"] && $.__views.picker.addEventListener("change", paymentType);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;