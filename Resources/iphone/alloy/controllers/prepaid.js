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
    function rate(e) {
        console.log("rate");
        rate = e.row.title;
        ("iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname) && ($.rateLabel.text = rate);
        switch (e.rowIndex) {
          case 0:
            $.view1.setVisible(true);
            $.view2.setVisible(false);
            $.view3.setVisible(false);
            $.view4.setVisible(false);
            break;

          case 1:
            $.view1.setVisible(false);
            $.view2.setVisible(true);
            $.view3.setVisible(false);
            $.view4.setVisible(false);
            break;

          case 2:
            $.view1.setVisible(false);
            $.view2.setVisible(false);
            $.view3.setVisible(true);
            $.view4.setVisible(false);
            break;

          case 3:
            $.view1.setVisible(false);
            $.view2.setVisible(false);
            $.view3.setVisible(false);
            $.view4.setVisible(true);
        }
    }
    function showPicker() {
        console.log("showPicker");
        console.log("$.pickerView.visible: " + $.pickerView.visible);
        if ("false" == $.pickerView.visible) {
            console.log("false");
            $.contentView.height = 300;
            $.pickerView.height = 250;
            $.pickerContentView.height = 250;
            $.pickerView.setVisible(true);
            $.done.setVisible(true);
            $.picker.setVisible(true);
        } else if (false == $.pickerView.visible) {
            console.log("else false");
            $.contentView.height = 300;
            $.pickerView.height = 250;
            $.pickerContentView.height = 250;
            $.pickerView.setVisible(true);
            $.done.setVisible(true);
            $.picker.setVisible(true);
        } else {
            console.log("else true");
            $.contentView.height = 50;
            $.pickerView.height = 50;
            $.pickerContentView.height = 50;
            $.pickerView.setVisible(false);
            $.done.setVisible(false);
            $.picker.setVisible(false);
        }
    }
    function done() {
        console.log("done");
        $.contentView.height = 50;
        $.pickerView.height = 50;
        $.pickerContentView.height = 50;
        $.pickerView.setVisible(false);
        $.done.setVisible(false);
        $.picker.setVisible(false);
    }
    function subscribe() {
        console.log("subscribe");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "prepaid";
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
    $.__views.prepaid = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaid"
    });
    $.__views.prepaid && $.addTopLevelView($.__views.prepaid);
    $.__views.__alloyId1043 = Alloy.createController("_header", {
        id: "__alloyId1043",
        __parentSymbol: $.__views.prepaid
    });
    $.__views.__alloyId1043.setParent($.__views.prepaid);
    $.__views.__alloyId1044 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1044"
    });
    $.__views.prepaid.add($.__views.__alloyId1044);
    $.__views.__alloyId1045 = Ti.UI.createLabel({
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1045"
    });
    $.__views.__alloyId1044.add($.__views.__alloyId1045);
    $.__views.__alloyId1046 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1046"
    });
    $.__views.__alloyId1044.add($.__views.__alloyId1046);
    back ? $.__views.__alloyId1046.addEventListener("click", back) : __defers["$.__views.__alloyId1046!click!back"] = true;
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "50"
    });
    $.__views.prepaid.add($.__views.contentView);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
        width: "90%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.rateLabel = Ti.UI.createLabel({
        id: "rateLabel",
        height: "30",
        width: "100%",
        backgroundColor: "#FCFCFC",
        borderRadius: "15",
        borderColor: "#FCFCFC",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.rateLabel);
    showPicker ? $.__views.rateLabel.addEventListener("click", showPicker) : __defers["$.__views.rateLabel!click!showPicker"] = true;
    $.__views.__alloyId1047 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1047"
    });
    $.__views.pickerContentView.add($.__views.__alloyId1047);
    showPicker ? $.__views.__alloyId1047.addEventListener("click", showPicker) : __defers["$.__views.__alloyId1047!click!showPicker"] = true;
    $.__views.pickerView = Ti.UI.createView({
        id: "pickerView",
        height: "50",
        width: "100%",
        visible: "false",
        top: "50",
        backgroundColor: "blue"
    });
    $.__views.pickerContentView.add($.__views.pickerView);
    $.__views.done = Ti.UI.createButton({
        title: "Done",
        id: "done",
        height: "30",
        width: "100%",
        backgroundColor: "black",
        color: "white",
        top: "0",
        left: "0",
        visible: "false"
    });
    $.__views.pickerView.add($.__views.done);
    done ? $.__views.done.addEventListener("click", done) : __defers["$.__views.done!click!done"] = true;
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: Ti.UI.SIZE,
        top: "30",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "false"
    });
    $.__views.pickerView.add($.__views.picker);
    var __alloyId1048 = [];
    $.__views.__alloyId1049 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId1049"
    });
    __alloyId1048.push($.__views.__alloyId1049);
    $.__views.__alloyId1050 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId1050"
    });
    __alloyId1048.push($.__views.__alloyId1050);
    $.__views.__alloyId1051 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId1051"
    });
    __alloyId1048.push($.__views.__alloyId1051);
    $.__views.__alloyId1052 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId1052"
    });
    __alloyId1048.push($.__views.__alloyId1052);
    $.__views.picker.add(__alloyId1048);
    rate ? $.__views.picker.addEventListener("change", rate) : __defers["$.__views.picker!change!rate"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "composite",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.prepaid.add($.__views.scrollView);
    $.__views.view1 = Ti.UI.createView({
        id: "view1",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "true"
    });
    $.__views.scrollView.add($.__views.view1);
    $.__views.__alloyId1053 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "red",
        id: "__alloyId1053"
    });
    $.__views.view1.add($.__views.__alloyId1053);
    $.__views.__alloyId1054 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1054"
    });
    $.__views.__alloyId1053.add($.__views.__alloyId1054);
    $.__views.__alloyId1055 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1055"
    });
    $.__views.__alloyId1054.add($.__views.__alloyId1055);
    $.__views.__alloyId1056 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1056"
    });
    $.__views.__alloyId1053.add($.__views.__alloyId1056);
    $.__views.__alloyId1057 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1057"
    });
    $.__views.__alloyId1056.add($.__views.__alloyId1057);
    $.__views.__alloyId1058 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1058"
    });
    $.__views.__alloyId1056.add($.__views.__alloyId1058);
    $.__views.__alloyId1059 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1059"
    });
    $.__views.__alloyId1053.add($.__views.__alloyId1059);
    $.__views.__alloyId1060 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1060"
    });
    $.__views.__alloyId1059.add($.__views.__alloyId1060);
    $.__views.__alloyId1061 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1061"
    });
    $.__views.__alloyId1059.add($.__views.__alloyId1061);
    $.__views.__alloyId1062 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1062"
    });
    $.__views.__alloyId1053.add($.__views.__alloyId1062);
    $.__views.__alloyId1063 = Ti.UI.createLabel({
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1063"
    });
    $.__views.__alloyId1062.add($.__views.__alloyId1063);
    $.__views.__alloyId1064 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1064"
    });
    $.__views.__alloyId1062.add($.__views.__alloyId1064);
    $.__views.__alloyId1065 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1065"
    });
    $.__views.view1.add($.__views.__alloyId1065);
    $.__views.__alloyId1066 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1066"
    });
    $.__views.__alloyId1065.add($.__views.__alloyId1066);
    $.__views.__alloyId1067 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1067"
    });
    $.__views.__alloyId1066.add($.__views.__alloyId1067);
    $.__views.__alloyId1068 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1068"
    });
    $.__views.__alloyId1065.add($.__views.__alloyId1068);
    $.__views.__alloyId1069 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1069"
    });
    $.__views.__alloyId1068.add($.__views.__alloyId1069);
    $.__views.__alloyId1070 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1070"
    });
    $.__views.__alloyId1068.add($.__views.__alloyId1070);
    $.__views.__alloyId1071 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1071"
    });
    $.__views.__alloyId1065.add($.__views.__alloyId1071);
    $.__views.__alloyId1072 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1072"
    });
    $.__views.__alloyId1071.add($.__views.__alloyId1072);
    $.__views.__alloyId1073 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1073"
    });
    $.__views.__alloyId1071.add($.__views.__alloyId1073);
    $.__views.__alloyId1074 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1074"
    });
    $.__views.__alloyId1065.add($.__views.__alloyId1074);
    $.__views.__alloyId1075 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1075"
    });
    $.__views.__alloyId1074.add($.__views.__alloyId1075);
    $.__views.__alloyId1076 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1076"
    });
    $.__views.__alloyId1074.add($.__views.__alloyId1076);
    $.__views.__alloyId1077 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1077"
    });
    $.__views.__alloyId1065.add($.__views.__alloyId1077);
    $.__views.__alloyId1078 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1078"
    });
    $.__views.__alloyId1077.add($.__views.__alloyId1078);
    $.__views.__alloyId1079 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1079"
    });
    $.__views.__alloyId1077.add($.__views.__alloyId1079);
    $.__views.__alloyId1080 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1080"
    });
    $.__views.view1.add($.__views.__alloyId1080);
    $.__views.__alloyId1081 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1081"
    });
    $.__views.__alloyId1080.add($.__views.__alloyId1081);
    $.__views.__alloyId1082 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1082"
    });
    $.__views.__alloyId1081.add($.__views.__alloyId1082);
    $.__views.__alloyId1083 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1083"
    });
    $.__views.__alloyId1080.add($.__views.__alloyId1083);
    $.__views.__alloyId1084 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1084"
    });
    $.__views.__alloyId1083.add($.__views.__alloyId1084);
    $.__views.__alloyId1085 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1085"
    });
    $.__views.__alloyId1083.add($.__views.__alloyId1085);
    $.__views.__alloyId1086 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1086"
    });
    $.__views.__alloyId1080.add($.__views.__alloyId1086);
    $.__views.__alloyId1087 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1087"
    });
    $.__views.__alloyId1086.add($.__views.__alloyId1087);
    $.__views.__alloyId1088 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1088"
    });
    $.__views.__alloyId1086.add($.__views.__alloyId1088);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view2);
    $.__views.__alloyId1089 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "blue",
        id: "__alloyId1089"
    });
    $.__views.view2.add($.__views.__alloyId1089);
    $.__views.__alloyId1090 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1090"
    });
    $.__views.__alloyId1089.add($.__views.__alloyId1090);
    $.__views.__alloyId1091 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1091"
    });
    $.__views.__alloyId1090.add($.__views.__alloyId1091);
    $.__views.__alloyId1092 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1092"
    });
    $.__views.__alloyId1089.add($.__views.__alloyId1092);
    $.__views.__alloyId1093 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1093"
    });
    $.__views.__alloyId1092.add($.__views.__alloyId1093);
    $.__views.__alloyId1094 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1094"
    });
    $.__views.__alloyId1092.add($.__views.__alloyId1094);
    $.__views.__alloyId1095 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1095"
    });
    $.__views.__alloyId1089.add($.__views.__alloyId1095);
    $.__views.__alloyId1096 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1096"
    });
    $.__views.__alloyId1095.add($.__views.__alloyId1096);
    $.__views.__alloyId1097 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1097"
    });
    $.__views.__alloyId1095.add($.__views.__alloyId1097);
    $.__views.__alloyId1098 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1098"
    });
    $.__views.__alloyId1089.add($.__views.__alloyId1098);
    $.__views.__alloyId1099 = Ti.UI.createLabel({
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1099"
    });
    $.__views.__alloyId1098.add($.__views.__alloyId1099);
    $.__views.__alloyId1100 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1100"
    });
    $.__views.__alloyId1098.add($.__views.__alloyId1100);
    $.__views.__alloyId1101 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1101"
    });
    $.__views.view2.add($.__views.__alloyId1101);
    $.__views.__alloyId1102 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1102"
    });
    $.__views.__alloyId1101.add($.__views.__alloyId1102);
    $.__views.__alloyId1103 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1103"
    });
    $.__views.__alloyId1102.add($.__views.__alloyId1103);
    $.__views.__alloyId1104 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1104"
    });
    $.__views.__alloyId1101.add($.__views.__alloyId1104);
    $.__views.__alloyId1105 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1105"
    });
    $.__views.__alloyId1104.add($.__views.__alloyId1105);
    $.__views.__alloyId1106 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1106"
    });
    $.__views.__alloyId1104.add($.__views.__alloyId1106);
    $.__views.__alloyId1107 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1107"
    });
    $.__views.__alloyId1101.add($.__views.__alloyId1107);
    $.__views.__alloyId1108 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1108"
    });
    $.__views.__alloyId1107.add($.__views.__alloyId1108);
    $.__views.__alloyId1109 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1109"
    });
    $.__views.__alloyId1107.add($.__views.__alloyId1109);
    $.__views.__alloyId1110 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1110"
    });
    $.__views.__alloyId1101.add($.__views.__alloyId1110);
    $.__views.__alloyId1111 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1111"
    });
    $.__views.__alloyId1110.add($.__views.__alloyId1111);
    $.__views.__alloyId1112 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1112"
    });
    $.__views.__alloyId1110.add($.__views.__alloyId1112);
    $.__views.__alloyId1113 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1113"
    });
    $.__views.__alloyId1101.add($.__views.__alloyId1113);
    $.__views.__alloyId1114 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1114"
    });
    $.__views.__alloyId1113.add($.__views.__alloyId1114);
    $.__views.__alloyId1115 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1115"
    });
    $.__views.__alloyId1113.add($.__views.__alloyId1115);
    $.__views.__alloyId1116 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1116"
    });
    $.__views.view2.add($.__views.__alloyId1116);
    $.__views.__alloyId1117 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1117"
    });
    $.__views.__alloyId1116.add($.__views.__alloyId1117);
    $.__views.__alloyId1118 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1118"
    });
    $.__views.__alloyId1117.add($.__views.__alloyId1118);
    $.__views.__alloyId1119 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1119"
    });
    $.__views.__alloyId1116.add($.__views.__alloyId1119);
    $.__views.__alloyId1120 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1120"
    });
    $.__views.__alloyId1119.add($.__views.__alloyId1120);
    $.__views.__alloyId1121 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1121"
    });
    $.__views.__alloyId1119.add($.__views.__alloyId1121);
    $.__views.__alloyId1122 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1122"
    });
    $.__views.__alloyId1116.add($.__views.__alloyId1122);
    $.__views.__alloyId1123 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1123"
    });
    $.__views.__alloyId1122.add($.__views.__alloyId1123);
    $.__views.__alloyId1124 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1124"
    });
    $.__views.__alloyId1122.add($.__views.__alloyId1124);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view3);
    $.__views.__alloyId1125 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "yellow",
        id: "__alloyId1125"
    });
    $.__views.view3.add($.__views.__alloyId1125);
    $.__views.__alloyId1126 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1126"
    });
    $.__views.__alloyId1125.add($.__views.__alloyId1126);
    $.__views.__alloyId1127 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1127"
    });
    $.__views.__alloyId1126.add($.__views.__alloyId1127);
    $.__views.__alloyId1128 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1128"
    });
    $.__views.__alloyId1125.add($.__views.__alloyId1128);
    $.__views.__alloyId1129 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1129"
    });
    $.__views.__alloyId1128.add($.__views.__alloyId1129);
    $.__views.__alloyId1130 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1130"
    });
    $.__views.__alloyId1128.add($.__views.__alloyId1130);
    $.__views.__alloyId1131 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1131"
    });
    $.__views.__alloyId1125.add($.__views.__alloyId1131);
    $.__views.__alloyId1132 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1132"
    });
    $.__views.__alloyId1131.add($.__views.__alloyId1132);
    $.__views.__alloyId1133 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1133"
    });
    $.__views.__alloyId1131.add($.__views.__alloyId1133);
    $.__views.__alloyId1134 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1134"
    });
    $.__views.__alloyId1125.add($.__views.__alloyId1134);
    $.__views.__alloyId1135 = Ti.UI.createLabel({
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1135"
    });
    $.__views.__alloyId1134.add($.__views.__alloyId1135);
    $.__views.__alloyId1136 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1136"
    });
    $.__views.__alloyId1134.add($.__views.__alloyId1136);
    $.__views.__alloyId1137 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1137"
    });
    $.__views.view3.add($.__views.__alloyId1137);
    $.__views.__alloyId1138 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1138"
    });
    $.__views.__alloyId1137.add($.__views.__alloyId1138);
    $.__views.__alloyId1139 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1139"
    });
    $.__views.__alloyId1138.add($.__views.__alloyId1139);
    $.__views.__alloyId1140 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1140"
    });
    $.__views.__alloyId1137.add($.__views.__alloyId1140);
    $.__views.__alloyId1141 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1141"
    });
    $.__views.__alloyId1140.add($.__views.__alloyId1141);
    $.__views.__alloyId1142 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1142"
    });
    $.__views.__alloyId1140.add($.__views.__alloyId1142);
    $.__views.__alloyId1143 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1143"
    });
    $.__views.__alloyId1137.add($.__views.__alloyId1143);
    $.__views.__alloyId1144 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1144"
    });
    $.__views.__alloyId1143.add($.__views.__alloyId1144);
    $.__views.__alloyId1145 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1145"
    });
    $.__views.__alloyId1143.add($.__views.__alloyId1145);
    $.__views.__alloyId1146 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1146"
    });
    $.__views.__alloyId1137.add($.__views.__alloyId1146);
    $.__views.__alloyId1147 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1147"
    });
    $.__views.__alloyId1146.add($.__views.__alloyId1147);
    $.__views.__alloyId1148 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1148"
    });
    $.__views.__alloyId1146.add($.__views.__alloyId1148);
    $.__views.__alloyId1149 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1149"
    });
    $.__views.__alloyId1137.add($.__views.__alloyId1149);
    $.__views.__alloyId1150 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1150"
    });
    $.__views.__alloyId1149.add($.__views.__alloyId1150);
    $.__views.__alloyId1151 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1151"
    });
    $.__views.__alloyId1149.add($.__views.__alloyId1151);
    $.__views.__alloyId1152 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1152"
    });
    $.__views.view3.add($.__views.__alloyId1152);
    $.__views.__alloyId1153 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1153"
    });
    $.__views.__alloyId1152.add($.__views.__alloyId1153);
    $.__views.__alloyId1154 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1154"
    });
    $.__views.__alloyId1153.add($.__views.__alloyId1154);
    $.__views.__alloyId1155 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1155"
    });
    $.__views.__alloyId1152.add($.__views.__alloyId1155);
    $.__views.__alloyId1156 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1156"
    });
    $.__views.__alloyId1155.add($.__views.__alloyId1156);
    $.__views.__alloyId1157 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1157"
    });
    $.__views.__alloyId1155.add($.__views.__alloyId1157);
    $.__views.__alloyId1158 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1158"
    });
    $.__views.__alloyId1152.add($.__views.__alloyId1158);
    $.__views.__alloyId1159 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1159"
    });
    $.__views.__alloyId1158.add($.__views.__alloyId1159);
    $.__views.__alloyId1160 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1160"
    });
    $.__views.__alloyId1158.add($.__views.__alloyId1160);
    $.__views.view4 = Ti.UI.createView({
        id: "view4",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view4);
    $.__views.__alloyId1161 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "green",
        id: "__alloyId1161"
    });
    $.__views.view4.add($.__views.__alloyId1161);
    $.__views.__alloyId1162 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1162"
    });
    $.__views.__alloyId1161.add($.__views.__alloyId1162);
    $.__views.__alloyId1163 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1163"
    });
    $.__views.__alloyId1162.add($.__views.__alloyId1163);
    $.__views.__alloyId1164 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1164"
    });
    $.__views.__alloyId1161.add($.__views.__alloyId1164);
    $.__views.__alloyId1165 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1165"
    });
    $.__views.__alloyId1164.add($.__views.__alloyId1165);
    $.__views.__alloyId1166 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1166"
    });
    $.__views.__alloyId1164.add($.__views.__alloyId1166);
    $.__views.__alloyId1167 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1167"
    });
    $.__views.__alloyId1161.add($.__views.__alloyId1167);
    $.__views.__alloyId1168 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1168"
    });
    $.__views.__alloyId1167.add($.__views.__alloyId1168);
    $.__views.__alloyId1169 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1169"
    });
    $.__views.__alloyId1167.add($.__views.__alloyId1169);
    $.__views.__alloyId1170 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1170"
    });
    $.__views.__alloyId1161.add($.__views.__alloyId1170);
    $.__views.__alloyId1171 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1171"
    });
    $.__views.__alloyId1170.add($.__views.__alloyId1171);
    $.__views.__alloyId1172 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1172"
    });
    $.__views.__alloyId1170.add($.__views.__alloyId1172);
    $.__views.__alloyId1173 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1173"
    });
    $.__views.view4.add($.__views.__alloyId1173);
    $.__views.__alloyId1174 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1174"
    });
    $.__views.__alloyId1173.add($.__views.__alloyId1174);
    $.__views.__alloyId1175 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1175"
    });
    $.__views.__alloyId1174.add($.__views.__alloyId1175);
    $.__views.__alloyId1176 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1176"
    });
    $.__views.__alloyId1173.add($.__views.__alloyId1176);
    $.__views.__alloyId1177 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1177"
    });
    $.__views.__alloyId1176.add($.__views.__alloyId1177);
    $.__views.__alloyId1178 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1178"
    });
    $.__views.__alloyId1176.add($.__views.__alloyId1178);
    $.__views.__alloyId1179 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1179"
    });
    $.__views.__alloyId1173.add($.__views.__alloyId1179);
    $.__views.__alloyId1180 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1180"
    });
    $.__views.__alloyId1179.add($.__views.__alloyId1180);
    $.__views.__alloyId1181 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1181"
    });
    $.__views.__alloyId1179.add($.__views.__alloyId1181);
    $.__views.__alloyId1182 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1182"
    });
    $.__views.__alloyId1173.add($.__views.__alloyId1182);
    $.__views.__alloyId1183 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1183"
    });
    $.__views.__alloyId1182.add($.__views.__alloyId1183);
    $.__views.__alloyId1184 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1184"
    });
    $.__views.__alloyId1182.add($.__views.__alloyId1184);
    $.__views.__alloyId1185 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1185"
    });
    $.__views.__alloyId1173.add($.__views.__alloyId1185);
    $.__views.__alloyId1186 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1186"
    });
    $.__views.__alloyId1185.add($.__views.__alloyId1186);
    $.__views.__alloyId1187 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1187"
    });
    $.__views.__alloyId1185.add($.__views.__alloyId1187);
    $.__views.__alloyId1188 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1188"
    });
    $.__views.view4.add($.__views.__alloyId1188);
    $.__views.__alloyId1189 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1189"
    });
    $.__views.__alloyId1188.add($.__views.__alloyId1189);
    $.__views.__alloyId1190 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1190"
    });
    $.__views.__alloyId1189.add($.__views.__alloyId1190);
    $.__views.__alloyId1191 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1191"
    });
    $.__views.__alloyId1188.add($.__views.__alloyId1191);
    $.__views.__alloyId1192 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1192"
    });
    $.__views.__alloyId1191.add($.__views.__alloyId1192);
    $.__views.__alloyId1193 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1193"
    });
    $.__views.__alloyId1191.add($.__views.__alloyId1193);
    $.__views.__alloyId1194 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1194"
    });
    $.__views.__alloyId1188.add($.__views.__alloyId1194);
    $.__views.__alloyId1195 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1195"
    });
    $.__views.__alloyId1194.add($.__views.__alloyId1195);
    $.__views.__alloyId1196 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1196"
    });
    $.__views.__alloyId1194.add($.__views.__alloyId1196);
    $.__views.__alloyId1197 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1197"
    });
    $.__views.prepaid.add($.__views.__alloyId1197);
    subscribe ? $.__views.__alloyId1197.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1197!click!subscribe"] = true;
    $.__views.__alloyId1198 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1198"
    });
    $.__views.__alloyId1197.add($.__views.__alloyId1198);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    var rate;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId1046!click!back"] && $.__views.__alloyId1046.addEventListener("click", back);
    __defers["$.__views.rateLabel!click!showPicker"] && $.__views.rateLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId1047!click!showPicker"] && $.__views.__alloyId1047.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!rate"] && $.__views.picker.addEventListener("change", rate);
    __defers["$.__views.__alloyId1197!click!subscribe"] && $.__views.__alloyId1197.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;