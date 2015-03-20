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
    function domesticVoice() {
        Alloy.Globals.userPlan = "postpaid";
        DRAWER.navigation("domesticCallStatement", 1);
    }
    function download() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "postpaidStatement";
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
    $.__views.postpaidStatement = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "postpaidStatement"
    });
    $.__views.postpaidStatement && $.addTopLevelView($.__views.postpaidStatement);
    $.__views.__alloyId997 = Alloy.createController("_header", {
        id: "__alloyId997",
        __parentSymbol: $.__views.postpaidStatement
    });
    $.__views.__alloyId997.setParent($.__views.postpaidStatement);
    $.__views.__alloyId998 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId998"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId998);
    $.__views.__alloyId999 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId999"
    });
    $.__views.__alloyId998.add($.__views.__alloyId999);
    $.__views.__alloyId1000 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1000"
    });
    $.__views.__alloyId998.add($.__views.__alloyId1000);
    back ? $.__views.__alloyId1000.addEventListener("click", back) : __defers["$.__views.__alloyId1000!click!back"] = true;
    $.__views.__alloyId1001 = Ti.UI.createView({
        layout: "composite",
        height: "120",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1001"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1001);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "80",
        top: "10",
        bottom: "10"
    });
    $.__views.__alloyId1001.add($.__views.contentView);
    $.__views.__alloyId1002 = Ti.UI.createLabel({
        text: "Postpaid Itemized Statement",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId1002"
    });
    $.__views.contentView.add($.__views.__alloyId1002);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        width: "70%",
        top: "10"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.paymentLabel = Ti.UI.createLabel({
        id: "paymentLabel",
        height: "30",
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "5",
        borderColor: "#F2F2F2",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.paymentLabel);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        height: Ti.UI.SIZE,
        width: "90%",
        top: "10",
        bottom: "10",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "true"
    });
    $.__views.pickerContentView.add($.__views.picker);
    var __alloyId1003 = [];
    $.__views.__alloyId1004 = Ti.UI.createPickerRow({
        title: "Current Month",
        id: "__alloyId1004"
    });
    __alloyId1003.push($.__views.__alloyId1004);
    $.__views.__alloyId1005 = Ti.UI.createPickerRow({
        title: "April",
        id: "__alloyId1005"
    });
    __alloyId1003.push($.__views.__alloyId1005);
    $.__views.__alloyId1006 = Ti.UI.createPickerRow({
        title: "May",
        id: "__alloyId1006"
    });
    __alloyId1003.push($.__views.__alloyId1006);
    $.__views.__alloyId1007 = Ti.UI.createPickerRow({
        title: "June",
        id: "__alloyId1007"
    });
    __alloyId1003.push($.__views.__alloyId1007);
    $.__views.__alloyId1008 = Ti.UI.createPickerRow({
        title: "July",
        id: "__alloyId1008"
    });
    __alloyId1003.push($.__views.__alloyId1008);
    $.__views.picker.add(__alloyId1003);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F5F5F5"
    });
    $.__views.postpaidStatement.add($.__views.scrollView);
    $.__views.__alloyId1009 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1009"
    });
    $.__views.scrollView.add($.__views.__alloyId1009);
    $.__views.__alloyId1010 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1010"
    });
    $.__views.__alloyId1009.add($.__views.__alloyId1010);
    $.__views.__alloyId1011 = Ti.UI.createLabel({
        text: "Domestic Voice Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1011"
    });
    $.__views.__alloyId1010.add($.__views.__alloyId1011);
    domesticVoice ? $.__views.__alloyId1011.addEventListener("click", domesticVoice) : __defers["$.__views.__alloyId1011!click!domesticVoice"] = true;
    $.__views.__alloyId1012 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1012"
    });
    $.__views.__alloyId1009.add($.__views.__alloyId1012);
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1012.add($.__views.arrow);
    domesticVoice ? $.__views.arrow.addEventListener("click", domesticVoice) : __defers["$.__views.arrow!click!domesticVoice"] = true;
    $.__views.__alloyId1013 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1013"
    });
    $.__views.scrollView.add($.__views.__alloyId1013);
    $.__views.__alloyId1014 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1014"
    });
    $.__views.__alloyId1013.add($.__views.__alloyId1014);
    $.__views.__alloyId1015 = Ti.UI.createLabel({
        text: "Domestic SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1015"
    });
    $.__views.__alloyId1014.add($.__views.__alloyId1015);
    $.__views.__alloyId1016 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1016"
    });
    $.__views.__alloyId1013.add($.__views.__alloyId1016);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1016.add($.__views.arrow1);
    $.__views.__alloyId1017 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1017"
    });
    $.__views.scrollView.add($.__views.__alloyId1017);
    $.__views.__alloyId1018 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1018"
    });
    $.__views.__alloyId1017.add($.__views.__alloyId1018);
    $.__views.__alloyId1019 = Ti.UI.createLabel({
        text: "Domestic Video Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1019"
    });
    $.__views.__alloyId1018.add($.__views.__alloyId1019);
    $.__views.__alloyId1020 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1020"
    });
    $.__views.__alloyId1017.add($.__views.__alloyId1020);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1020.add($.__views.arrow2);
    $.__views.__alloyId1021 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1021"
    });
    $.__views.scrollView.add($.__views.__alloyId1021);
    $.__views.__alloyId1022 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1022"
    });
    $.__views.__alloyId1021.add($.__views.__alloyId1022);
    $.__views.__alloyId1023 = Ti.UI.createLabel({
        text: "IDD Voice Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1023"
    });
    $.__views.__alloyId1022.add($.__views.__alloyId1023);
    $.__views.__alloyId1024 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1024"
    });
    $.__views.__alloyId1021.add($.__views.__alloyId1024);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1024.add($.__views.arrow3);
    $.__views.__alloyId1025 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1025"
    });
    $.__views.scrollView.add($.__views.__alloyId1025);
    $.__views.__alloyId1026 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1026"
    });
    $.__views.__alloyId1025.add($.__views.__alloyId1026);
    $.__views.__alloyId1027 = Ti.UI.createLabel({
        text: "IDD SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1027"
    });
    $.__views.__alloyId1026.add($.__views.__alloyId1027);
    $.__views.__alloyId1028 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1028"
    });
    $.__views.__alloyId1025.add($.__views.__alloyId1028);
    $.__views.arrow4 = Ti.UI.createImageView({
        id: "arrow4",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1028.add($.__views.arrow4);
    $.__views.__alloyId1029 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1029"
    });
    $.__views.scrollView.add($.__views.__alloyId1029);
    $.__views.__alloyId1030 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1030"
    });
    $.__views.__alloyId1029.add($.__views.__alloyId1030);
    $.__views.__alloyId1031 = Ti.UI.createLabel({
        text: "IDD Video Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1031"
    });
    $.__views.__alloyId1030.add($.__views.__alloyId1031);
    $.__views.__alloyId1032 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1032"
    });
    $.__views.__alloyId1029.add($.__views.__alloyId1032);
    $.__views.arrow5 = Ti.UI.createImageView({
        id: "arrow5",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1032.add($.__views.arrow5);
    $.__views.__alloyId1033 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1033"
    });
    $.__views.scrollView.add($.__views.__alloyId1033);
    $.__views.__alloyId1034 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1034"
    });
    $.__views.__alloyId1033.add($.__views.__alloyId1034);
    $.__views.__alloyId1035 = Ti.UI.createLabel({
        text: "Roaming Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1035"
    });
    $.__views.__alloyId1034.add($.__views.__alloyId1035);
    $.__views.__alloyId1036 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1036"
    });
    $.__views.__alloyId1033.add($.__views.__alloyId1036);
    $.__views.arrow6 = Ti.UI.createImageView({
        id: "arrow6",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1036.add($.__views.arrow6);
    $.__views.__alloyId1037 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1037"
    });
    $.__views.scrollView.add($.__views.__alloyId1037);
    $.__views.__alloyId1038 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1038"
    });
    $.__views.__alloyId1037.add($.__views.__alloyId1038);
    $.__views.__alloyId1039 = Ti.UI.createLabel({
        text: "Roaming SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1039"
    });
    $.__views.__alloyId1038.add($.__views.__alloyId1039);
    $.__views.__alloyId1040 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1040"
    });
    $.__views.__alloyId1037.add($.__views.__alloyId1040);
    $.__views.arrow7 = Ti.UI.createImageView({
        id: "arrow7",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1040.add($.__views.arrow7);
    $.__views.__alloyId1041 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1041"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1041);
    download ? $.__views.__alloyId1041.addEventListener("click", download) : __defers["$.__views.__alloyId1041!click!download"] = true;
    $.__views.__alloyId1042 = Ti.UI.createLabel({
        text: "Download Bill",
        color: "white",
        id: "__alloyId1042"
    });
    $.__views.__alloyId1041.add($.__views.__alloyId1042);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow3.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow4.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow5.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow6.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow7.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 270;
    "android" == Ti.Platform.osname && ($.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 270);
    __defers["$.__views.__alloyId1000!click!back"] && $.__views.__alloyId1000.addEventListener("click", back);
    __defers["$.__views.__alloyId1011!click!domesticVoice"] && $.__views.__alloyId1011.addEventListener("click", domesticVoice);
    __defers["$.__views.arrow!click!domesticVoice"] && $.__views.arrow.addEventListener("click", domesticVoice);
    __defers["$.__views.__alloyId1041!click!download"] && $.__views.__alloyId1041.addEventListener("click", download);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;