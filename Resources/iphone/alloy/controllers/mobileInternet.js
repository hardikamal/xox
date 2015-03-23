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
        DRAWER.navigation("products", 2);
    }
    function subscribe() {
        console.log("subscribe");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "mobileInternet";
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
    $.__views.mobileInternet = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "mobileInternet"
    });
    $.__views.mobileInternet && $.addTopLevelView($.__views.mobileInternet);
    $.__views.__alloyId991 = Alloy.createController("_header", {
        id: "__alloyId991",
        __parentSymbol: $.__views.mobileInternet
    });
    $.__views.__alloyId991.setParent($.__views.mobileInternet);
    $.__views.__alloyId992 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId992"
    });
    $.__views.mobileInternet.add($.__views.__alloyId992);
    $.__views.__alloyId993 = Ti.UI.createLabel({
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId993"
    });
    $.__views.__alloyId992.add($.__views.__alloyId993);
    $.__views.__alloyId994 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId994"
    });
    $.__views.__alloyId992.add($.__views.__alloyId994);
    back ? $.__views.__alloyId994.addEventListener("click", back) : __defers["$.__views.__alloyId994!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.mobileInternet.add($.__views.scrollView);
    $.__views.__alloyId995 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId995"
    });
    $.__views.scrollView.add($.__views.__alloyId995);
    $.__views.__alloyId996 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId996"
    });
    $.__views.__alloyId995.add($.__views.__alloyId996);
    $.__views.__alloyId997 = Ti.UI.createLabel({
        text: "Mobile Data Plan",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId997"
    });
    $.__views.__alloyId996.add($.__views.__alloyId997);
    $.__views.__alloyId998 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId998"
    });
    $.__views.__alloyId995.add($.__views.__alloyId998);
    $.__views.__alloyId999 = Ti.UI.createLabel({
        text: "Daily 250MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId999"
    });
    $.__views.__alloyId998.add($.__views.__alloyId999);
    $.__views.__alloyId1000 = Ti.UI.createLabel({
        text: "24 hours",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1000"
    });
    $.__views.__alloyId998.add($.__views.__alloyId1000);
    $.__views.__alloyId1001 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1001"
    });
    $.__views.__alloyId998.add($.__views.__alloyId1001);
    $.__views.__alloyId1002 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1002"
    });
    $.__views.__alloyId995.add($.__views.__alloyId1002);
    $.__views.__alloyId1003 = Ti.UI.createLabel({
        text: "Weekly 250MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1003"
    });
    $.__views.__alloyId1002.add($.__views.__alloyId1003);
    $.__views.__alloyId1004 = Ti.UI.createLabel({
        text: "7 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1004"
    });
    $.__views.__alloyId1002.add($.__views.__alloyId1004);
    $.__views.__alloyId1005 = Ti.UI.createLabel({
        text: "RM10",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1005"
    });
    $.__views.__alloyId1002.add($.__views.__alloyId1005);
    $.__views.__alloyId1006 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1006"
    });
    $.__views.__alloyId995.add($.__views.__alloyId1006);
    $.__views.__alloyId1007 = Ti.UI.createLabel({
        text: "Monthly 500MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1007"
    });
    $.__views.__alloyId1006.add($.__views.__alloyId1007);
    $.__views.__alloyId1008 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1008"
    });
    $.__views.__alloyId1006.add($.__views.__alloyId1008);
    $.__views.__alloyId1009 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1009"
    });
    $.__views.__alloyId1006.add($.__views.__alloyId1009);
    $.__views.__alloyId1010 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1010"
    });
    $.__views.__alloyId995.add($.__views.__alloyId1010);
    $.__views.__alloyId1011 = Ti.UI.createLabel({
        text: "Monthly 1GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1011"
    });
    $.__views.__alloyId1010.add($.__views.__alloyId1011);
    $.__views.__alloyId1012 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1012"
    });
    $.__views.__alloyId1010.add($.__views.__alloyId1012);
    $.__views.__alloyId1013 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1013"
    });
    $.__views.__alloyId1010.add($.__views.__alloyId1013);
    $.__views.__alloyId1014 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1014"
    });
    $.__views.__alloyId995.add($.__views.__alloyId1014);
    $.__views.__alloyId1015 = Ti.UI.createLabel({
        text: "Monthly 3GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1015"
    });
    $.__views.__alloyId1014.add($.__views.__alloyId1015);
    $.__views.__alloyId1016 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1016"
    });
    $.__views.__alloyId1014.add($.__views.__alloyId1016);
    $.__views.__alloyId1017 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1017"
    });
    $.__views.__alloyId1014.add($.__views.__alloyId1017);
    $.__views.__alloyId1018 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1018"
    });
    $.__views.__alloyId995.add($.__views.__alloyId1018);
    $.__views.__alloyId1019 = Ti.UI.createLabel({
        text: "Monthly 5GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1019"
    });
    $.__views.__alloyId1018.add($.__views.__alloyId1019);
    $.__views.__alloyId1020 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1020"
    });
    $.__views.__alloyId1018.add($.__views.__alloyId1020);
    $.__views.__alloyId1021 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1021"
    });
    $.__views.__alloyId1018.add($.__views.__alloyId1021);
    $.__views.__alloyId1022 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1022"
    });
    $.__views.__alloyId995.add($.__views.__alloyId1022);
    $.__views.__alloyId1023 = Ti.UI.createLabel({
        text: "Data Promo 2.3GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1023"
    });
    $.__views.__alloyId1022.add($.__views.__alloyId1023);
    $.__views.__alloyId1024 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1024"
    });
    $.__views.__alloyId1022.add($.__views.__alloyId1024);
    $.__views.__alloyId1025 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1025"
    });
    $.__views.__alloyId1022.add($.__views.__alloyId1025);
    $.__views.__alloyId1026 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1026"
    });
    $.__views.mobileInternet.add($.__views.__alloyId1026);
    subscribe ? $.__views.__alloyId1026.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1026!click!subscribe"] = true;
    $.__views.__alloyId1027 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1027"
    });
    $.__views.__alloyId1026.add($.__views.__alloyId1027);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId994!click!back"] && $.__views.__alloyId994.addEventListener("click", back);
    __defers["$.__views.__alloyId1026!click!subscribe"] && $.__views.__alloyId1026.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;