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
        DRAWER.navigation("products", 1);
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
    $.__views.__alloyId955 = Alloy.createController("_header", {
        id: "__alloyId955",
        __parentSymbol: $.__views.prepaid
    });
    $.__views.__alloyId955.setParent($.__views.prepaid);
    $.__views.__alloyId956 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId956"
    });
    $.__views.prepaid.add($.__views.__alloyId956);
    $.__views.__alloyId957 = Ti.UI.createLabel({
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId957"
    });
    $.__views.__alloyId956.add($.__views.__alloyId957);
    $.__views.__alloyId958 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId958"
    });
    $.__views.__alloyId956.add($.__views.__alloyId958);
    back ? $.__views.__alloyId958.addEventListener("click", back) : __defers["$.__views.__alloyId958!click!back"] = true;
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
    $.__views.__alloyId959 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId959"
    });
    $.__views.pickerContentView.add($.__views.__alloyId959);
    showPicker ? $.__views.__alloyId959.addEventListener("click", showPicker) : __defers["$.__views.__alloyId959!click!showPicker"] = true;
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
    var __alloyId960 = [];
    $.__views.__alloyId961 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId961"
    });
    __alloyId960.push($.__views.__alloyId961);
    $.__views.__alloyId962 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId962"
    });
    __alloyId960.push($.__views.__alloyId962);
    $.__views.__alloyId963 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId963"
    });
    __alloyId960.push($.__views.__alloyId963);
    $.__views.__alloyId964 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId964"
    });
    __alloyId960.push($.__views.__alloyId964);
    $.__views.picker.add(__alloyId960);
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
    $.__views.__alloyId965 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "red",
        id: "__alloyId965"
    });
    $.__views.view1.add($.__views.__alloyId965);
    $.__views.__alloyId966 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId966"
    });
    $.__views.__alloyId965.add($.__views.__alloyId966);
    $.__views.__alloyId967 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId967"
    });
    $.__views.__alloyId966.add($.__views.__alloyId967);
    $.__views.__alloyId968 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId968"
    });
    $.__views.__alloyId965.add($.__views.__alloyId968);
    $.__views.__alloyId969 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId969"
    });
    $.__views.__alloyId968.add($.__views.__alloyId969);
    $.__views.__alloyId970 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId970"
    });
    $.__views.__alloyId968.add($.__views.__alloyId970);
    $.__views.__alloyId971 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId971"
    });
    $.__views.__alloyId965.add($.__views.__alloyId971);
    $.__views.__alloyId972 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId972"
    });
    $.__views.__alloyId971.add($.__views.__alloyId972);
    $.__views.__alloyId973 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId973"
    });
    $.__views.__alloyId971.add($.__views.__alloyId973);
    $.__views.__alloyId974 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId974"
    });
    $.__views.__alloyId965.add($.__views.__alloyId974);
    $.__views.__alloyId975 = Ti.UI.createLabel({
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId975"
    });
    $.__views.__alloyId974.add($.__views.__alloyId975);
    $.__views.__alloyId976 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId976"
    });
    $.__views.__alloyId974.add($.__views.__alloyId976);
    $.__views.__alloyId977 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId977"
    });
    $.__views.view1.add($.__views.__alloyId977);
    $.__views.__alloyId978 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId978"
    });
    $.__views.__alloyId977.add($.__views.__alloyId978);
    $.__views.__alloyId979 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId979"
    });
    $.__views.__alloyId978.add($.__views.__alloyId979);
    $.__views.__alloyId980 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId980"
    });
    $.__views.__alloyId977.add($.__views.__alloyId980);
    $.__views.__alloyId981 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId981"
    });
    $.__views.__alloyId980.add($.__views.__alloyId981);
    $.__views.__alloyId982 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId982"
    });
    $.__views.__alloyId980.add($.__views.__alloyId982);
    $.__views.__alloyId983 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId983"
    });
    $.__views.__alloyId977.add($.__views.__alloyId983);
    $.__views.__alloyId984 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId984"
    });
    $.__views.__alloyId983.add($.__views.__alloyId984);
    $.__views.__alloyId985 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId985"
    });
    $.__views.__alloyId983.add($.__views.__alloyId985);
    $.__views.__alloyId986 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId986"
    });
    $.__views.__alloyId977.add($.__views.__alloyId986);
    $.__views.__alloyId987 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId987"
    });
    $.__views.__alloyId986.add($.__views.__alloyId987);
    $.__views.__alloyId988 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId988"
    });
    $.__views.__alloyId986.add($.__views.__alloyId988);
    $.__views.__alloyId989 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId989"
    });
    $.__views.__alloyId977.add($.__views.__alloyId989);
    $.__views.__alloyId990 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId990"
    });
    $.__views.__alloyId989.add($.__views.__alloyId990);
    $.__views.__alloyId991 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId991"
    });
    $.__views.__alloyId989.add($.__views.__alloyId991);
    $.__views.__alloyId992 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId992"
    });
    $.__views.view1.add($.__views.__alloyId992);
    $.__views.__alloyId993 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId993"
    });
    $.__views.__alloyId992.add($.__views.__alloyId993);
    $.__views.__alloyId994 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId994"
    });
    $.__views.__alloyId993.add($.__views.__alloyId994);
    $.__views.__alloyId995 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId995"
    });
    $.__views.__alloyId992.add($.__views.__alloyId995);
    $.__views.__alloyId996 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId996"
    });
    $.__views.__alloyId995.add($.__views.__alloyId996);
    $.__views.__alloyId997 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId997"
    });
    $.__views.__alloyId995.add($.__views.__alloyId997);
    $.__views.__alloyId998 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId998"
    });
    $.__views.__alloyId992.add($.__views.__alloyId998);
    $.__views.__alloyId999 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId999"
    });
    $.__views.__alloyId998.add($.__views.__alloyId999);
    $.__views.__alloyId1000 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1000"
    });
    $.__views.__alloyId998.add($.__views.__alloyId1000);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view2);
    $.__views.__alloyId1001 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "blue",
        id: "__alloyId1001"
    });
    $.__views.view2.add($.__views.__alloyId1001);
    $.__views.__alloyId1002 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1002"
    });
    $.__views.__alloyId1001.add($.__views.__alloyId1002);
    $.__views.__alloyId1003 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1003"
    });
    $.__views.__alloyId1002.add($.__views.__alloyId1003);
    $.__views.__alloyId1004 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1004"
    });
    $.__views.__alloyId1001.add($.__views.__alloyId1004);
    $.__views.__alloyId1005 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1005"
    });
    $.__views.__alloyId1004.add($.__views.__alloyId1005);
    $.__views.__alloyId1006 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1006"
    });
    $.__views.__alloyId1004.add($.__views.__alloyId1006);
    $.__views.__alloyId1007 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1007"
    });
    $.__views.__alloyId1001.add($.__views.__alloyId1007);
    $.__views.__alloyId1008 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1008"
    });
    $.__views.__alloyId1007.add($.__views.__alloyId1008);
    $.__views.__alloyId1009 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1009"
    });
    $.__views.__alloyId1007.add($.__views.__alloyId1009);
    $.__views.__alloyId1010 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1010"
    });
    $.__views.__alloyId1001.add($.__views.__alloyId1010);
    $.__views.__alloyId1011 = Ti.UI.createLabel({
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1011"
    });
    $.__views.__alloyId1010.add($.__views.__alloyId1011);
    $.__views.__alloyId1012 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1012"
    });
    $.__views.__alloyId1010.add($.__views.__alloyId1012);
    $.__views.__alloyId1013 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1013"
    });
    $.__views.view2.add($.__views.__alloyId1013);
    $.__views.__alloyId1014 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1014"
    });
    $.__views.__alloyId1013.add($.__views.__alloyId1014);
    $.__views.__alloyId1015 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1015"
    });
    $.__views.__alloyId1014.add($.__views.__alloyId1015);
    $.__views.__alloyId1016 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1016"
    });
    $.__views.__alloyId1013.add($.__views.__alloyId1016);
    $.__views.__alloyId1017 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1017"
    });
    $.__views.__alloyId1016.add($.__views.__alloyId1017);
    $.__views.__alloyId1018 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1018"
    });
    $.__views.__alloyId1016.add($.__views.__alloyId1018);
    $.__views.__alloyId1019 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1019"
    });
    $.__views.__alloyId1013.add($.__views.__alloyId1019);
    $.__views.__alloyId1020 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1020"
    });
    $.__views.__alloyId1019.add($.__views.__alloyId1020);
    $.__views.__alloyId1021 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1021"
    });
    $.__views.__alloyId1019.add($.__views.__alloyId1021);
    $.__views.__alloyId1022 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1022"
    });
    $.__views.__alloyId1013.add($.__views.__alloyId1022);
    $.__views.__alloyId1023 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1023"
    });
    $.__views.__alloyId1022.add($.__views.__alloyId1023);
    $.__views.__alloyId1024 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1024"
    });
    $.__views.__alloyId1022.add($.__views.__alloyId1024);
    $.__views.__alloyId1025 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1025"
    });
    $.__views.__alloyId1013.add($.__views.__alloyId1025);
    $.__views.__alloyId1026 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1026"
    });
    $.__views.__alloyId1025.add($.__views.__alloyId1026);
    $.__views.__alloyId1027 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1027"
    });
    $.__views.__alloyId1025.add($.__views.__alloyId1027);
    $.__views.__alloyId1028 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1028"
    });
    $.__views.view2.add($.__views.__alloyId1028);
    $.__views.__alloyId1029 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1029"
    });
    $.__views.__alloyId1028.add($.__views.__alloyId1029);
    $.__views.__alloyId1030 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1030"
    });
    $.__views.__alloyId1029.add($.__views.__alloyId1030);
    $.__views.__alloyId1031 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1031"
    });
    $.__views.__alloyId1028.add($.__views.__alloyId1031);
    $.__views.__alloyId1032 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1032"
    });
    $.__views.__alloyId1031.add($.__views.__alloyId1032);
    $.__views.__alloyId1033 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1033"
    });
    $.__views.__alloyId1031.add($.__views.__alloyId1033);
    $.__views.__alloyId1034 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1034"
    });
    $.__views.__alloyId1028.add($.__views.__alloyId1034);
    $.__views.__alloyId1035 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1035"
    });
    $.__views.__alloyId1034.add($.__views.__alloyId1035);
    $.__views.__alloyId1036 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1036"
    });
    $.__views.__alloyId1034.add($.__views.__alloyId1036);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view3);
    $.__views.__alloyId1037 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "yellow",
        id: "__alloyId1037"
    });
    $.__views.view3.add($.__views.__alloyId1037);
    $.__views.__alloyId1038 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1038"
    });
    $.__views.__alloyId1037.add($.__views.__alloyId1038);
    $.__views.__alloyId1039 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1039"
    });
    $.__views.__alloyId1038.add($.__views.__alloyId1039);
    $.__views.__alloyId1040 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1040"
    });
    $.__views.__alloyId1037.add($.__views.__alloyId1040);
    $.__views.__alloyId1041 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1041"
    });
    $.__views.__alloyId1040.add($.__views.__alloyId1041);
    $.__views.__alloyId1042 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1042"
    });
    $.__views.__alloyId1040.add($.__views.__alloyId1042);
    $.__views.__alloyId1043 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1043"
    });
    $.__views.__alloyId1037.add($.__views.__alloyId1043);
    $.__views.__alloyId1044 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1044"
    });
    $.__views.__alloyId1043.add($.__views.__alloyId1044);
    $.__views.__alloyId1045 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1045"
    });
    $.__views.__alloyId1043.add($.__views.__alloyId1045);
    $.__views.__alloyId1046 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1046"
    });
    $.__views.__alloyId1037.add($.__views.__alloyId1046);
    $.__views.__alloyId1047 = Ti.UI.createLabel({
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1047"
    });
    $.__views.__alloyId1046.add($.__views.__alloyId1047);
    $.__views.__alloyId1048 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1048"
    });
    $.__views.__alloyId1046.add($.__views.__alloyId1048);
    $.__views.__alloyId1049 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1049"
    });
    $.__views.view3.add($.__views.__alloyId1049);
    $.__views.__alloyId1050 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1050"
    });
    $.__views.__alloyId1049.add($.__views.__alloyId1050);
    $.__views.__alloyId1051 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1051"
    });
    $.__views.__alloyId1050.add($.__views.__alloyId1051);
    $.__views.__alloyId1052 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1052"
    });
    $.__views.__alloyId1049.add($.__views.__alloyId1052);
    $.__views.__alloyId1053 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1053"
    });
    $.__views.__alloyId1052.add($.__views.__alloyId1053);
    $.__views.__alloyId1054 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1054"
    });
    $.__views.__alloyId1052.add($.__views.__alloyId1054);
    $.__views.__alloyId1055 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1055"
    });
    $.__views.__alloyId1049.add($.__views.__alloyId1055);
    $.__views.__alloyId1056 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1056"
    });
    $.__views.__alloyId1055.add($.__views.__alloyId1056);
    $.__views.__alloyId1057 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1057"
    });
    $.__views.__alloyId1055.add($.__views.__alloyId1057);
    $.__views.__alloyId1058 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1058"
    });
    $.__views.__alloyId1049.add($.__views.__alloyId1058);
    $.__views.__alloyId1059 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1059"
    });
    $.__views.__alloyId1058.add($.__views.__alloyId1059);
    $.__views.__alloyId1060 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1060"
    });
    $.__views.__alloyId1058.add($.__views.__alloyId1060);
    $.__views.__alloyId1061 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1061"
    });
    $.__views.__alloyId1049.add($.__views.__alloyId1061);
    $.__views.__alloyId1062 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1062"
    });
    $.__views.__alloyId1061.add($.__views.__alloyId1062);
    $.__views.__alloyId1063 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1063"
    });
    $.__views.__alloyId1061.add($.__views.__alloyId1063);
    $.__views.__alloyId1064 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1064"
    });
    $.__views.view3.add($.__views.__alloyId1064);
    $.__views.__alloyId1065 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1065"
    });
    $.__views.__alloyId1064.add($.__views.__alloyId1065);
    $.__views.__alloyId1066 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1066"
    });
    $.__views.__alloyId1065.add($.__views.__alloyId1066);
    $.__views.__alloyId1067 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1067"
    });
    $.__views.__alloyId1064.add($.__views.__alloyId1067);
    $.__views.__alloyId1068 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1068"
    });
    $.__views.__alloyId1067.add($.__views.__alloyId1068);
    $.__views.__alloyId1069 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1069"
    });
    $.__views.__alloyId1067.add($.__views.__alloyId1069);
    $.__views.__alloyId1070 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1070"
    });
    $.__views.__alloyId1064.add($.__views.__alloyId1070);
    $.__views.__alloyId1071 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1071"
    });
    $.__views.__alloyId1070.add($.__views.__alloyId1071);
    $.__views.__alloyId1072 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1072"
    });
    $.__views.__alloyId1070.add($.__views.__alloyId1072);
    $.__views.view4 = Ti.UI.createView({
        id: "view4",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view4);
    $.__views.__alloyId1073 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "green",
        id: "__alloyId1073"
    });
    $.__views.view4.add($.__views.__alloyId1073);
    $.__views.__alloyId1074 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1074"
    });
    $.__views.__alloyId1073.add($.__views.__alloyId1074);
    $.__views.__alloyId1075 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1075"
    });
    $.__views.__alloyId1074.add($.__views.__alloyId1075);
    $.__views.__alloyId1076 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1076"
    });
    $.__views.__alloyId1073.add($.__views.__alloyId1076);
    $.__views.__alloyId1077 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1077"
    });
    $.__views.__alloyId1076.add($.__views.__alloyId1077);
    $.__views.__alloyId1078 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1078"
    });
    $.__views.__alloyId1076.add($.__views.__alloyId1078);
    $.__views.__alloyId1079 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1079"
    });
    $.__views.__alloyId1073.add($.__views.__alloyId1079);
    $.__views.__alloyId1080 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1080"
    });
    $.__views.__alloyId1079.add($.__views.__alloyId1080);
    $.__views.__alloyId1081 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1081"
    });
    $.__views.__alloyId1079.add($.__views.__alloyId1081);
    $.__views.__alloyId1082 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1082"
    });
    $.__views.__alloyId1073.add($.__views.__alloyId1082);
    $.__views.__alloyId1083 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1083"
    });
    $.__views.__alloyId1082.add($.__views.__alloyId1083);
    $.__views.__alloyId1084 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1084"
    });
    $.__views.__alloyId1082.add($.__views.__alloyId1084);
    $.__views.__alloyId1085 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1085"
    });
    $.__views.view4.add($.__views.__alloyId1085);
    $.__views.__alloyId1086 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1086"
    });
    $.__views.__alloyId1085.add($.__views.__alloyId1086);
    $.__views.__alloyId1087 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1087"
    });
    $.__views.__alloyId1086.add($.__views.__alloyId1087);
    $.__views.__alloyId1088 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1088"
    });
    $.__views.__alloyId1085.add($.__views.__alloyId1088);
    $.__views.__alloyId1089 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1089"
    });
    $.__views.__alloyId1088.add($.__views.__alloyId1089);
    $.__views.__alloyId1090 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1090"
    });
    $.__views.__alloyId1088.add($.__views.__alloyId1090);
    $.__views.__alloyId1091 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1091"
    });
    $.__views.__alloyId1085.add($.__views.__alloyId1091);
    $.__views.__alloyId1092 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1092"
    });
    $.__views.__alloyId1091.add($.__views.__alloyId1092);
    $.__views.__alloyId1093 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1093"
    });
    $.__views.__alloyId1091.add($.__views.__alloyId1093);
    $.__views.__alloyId1094 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1094"
    });
    $.__views.__alloyId1085.add($.__views.__alloyId1094);
    $.__views.__alloyId1095 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1095"
    });
    $.__views.__alloyId1094.add($.__views.__alloyId1095);
    $.__views.__alloyId1096 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1096"
    });
    $.__views.__alloyId1094.add($.__views.__alloyId1096);
    $.__views.__alloyId1097 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1097"
    });
    $.__views.__alloyId1085.add($.__views.__alloyId1097);
    $.__views.__alloyId1098 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1098"
    });
    $.__views.__alloyId1097.add($.__views.__alloyId1098);
    $.__views.__alloyId1099 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1099"
    });
    $.__views.__alloyId1097.add($.__views.__alloyId1099);
    $.__views.__alloyId1100 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1100"
    });
    $.__views.view4.add($.__views.__alloyId1100);
    $.__views.__alloyId1101 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1101"
    });
    $.__views.__alloyId1100.add($.__views.__alloyId1101);
    $.__views.__alloyId1102 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1102"
    });
    $.__views.__alloyId1101.add($.__views.__alloyId1102);
    $.__views.__alloyId1103 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1103"
    });
    $.__views.__alloyId1100.add($.__views.__alloyId1103);
    $.__views.__alloyId1104 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1104"
    });
    $.__views.__alloyId1103.add($.__views.__alloyId1104);
    $.__views.__alloyId1105 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1105"
    });
    $.__views.__alloyId1103.add($.__views.__alloyId1105);
    $.__views.__alloyId1106 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1106"
    });
    $.__views.__alloyId1100.add($.__views.__alloyId1106);
    $.__views.__alloyId1107 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1107"
    });
    $.__views.__alloyId1106.add($.__views.__alloyId1107);
    $.__views.__alloyId1108 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1108"
    });
    $.__views.__alloyId1106.add($.__views.__alloyId1108);
    $.__views.__alloyId1109 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1109"
    });
    $.__views.prepaid.add($.__views.__alloyId1109);
    subscribe ? $.__views.__alloyId1109.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1109!click!subscribe"] = true;
    $.__views.__alloyId1110 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1110"
    });
    $.__views.__alloyId1109.add($.__views.__alloyId1110);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    var rate;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId958!click!back"] && $.__views.__alloyId958.addEventListener("click", back);
    __defers["$.__views.rateLabel!click!showPicker"] && $.__views.rateLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId959!click!showPicker"] && $.__views.__alloyId959.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!rate"] && $.__views.picker.addEventListener("change", rate);
    __defers["$.__views.__alloyId1109!click!subscribe"] && $.__views.__alloyId1109.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;