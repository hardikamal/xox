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
        DRAWER.navigation("myAccount", 1);
    }
<<<<<<< Updated upstream
    function subjectType(e) {
        console.log("subjectType");
        subjectType = e.row.title;
=======
    function showPicker() {
        console.log("showPicker");
        if ("false" == $.pickerView.visible) {
            $.contentView.height = 250;
            $.pickerView.height = 250;
            $.pickerContentView.height = 250;
            $.pickerView.setVisible(true);
            $.done.setVisible(true);
            $.picker.setVisible(true);
        } else if (false == $.pickerView.visible) {
            $.contentView.height = 250;
            $.pickerView.height = 250;
            $.pickerContentView.height = 250;
            $.pickerView.setVisible(true);
            $.done.setVisible(true);
            $.picker.setVisible(true);
        } else {
            $.contentView.height = 50;
            $.pickerView.height = 50;
            $.pickerContentView.height = 50;
            $.pickerView.setVisible(false);
            $.done.setVisible(false);
            $.picker.setVisible(false);
        }
    }
    function subjectType(e) {
        console.log("subjectType");
        subjectType = e.row.title;
        $.subjectLabel.text = subjectType;
    }
    function done() {
        console.log("done");
        $.contentView.height = 50;
        $.pickerView.height = 50;
        $.pickerContentView.height = 50;
        $.pickerView.setVisible(false);
        $.done.setVisible(false);
        $.picker.setVisible(false);
>>>>>>> Stashed changes
    }
    function send() {
        console.log("send");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "report";
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
    $.__views.report = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "report"
    });
    $.__views.report && $.addTopLevelView($.__views.report);
<<<<<<< HEAD
    $.__views.__alloyId2110 = Alloy.createController("_header", {
        id: "__alloyId2110",
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId2068 = Alloy.createController("_header", {
        id: "__alloyId2068",
=======
    $.__views.__alloyId2110 = Alloy.createController("_header", {
        id: "__alloyId2110",
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        __parentSymbol: $.__views.report
    });
    $.__views.__alloyId2110.setParent($.__views.report);
    $.__views.__alloyId2111 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2111"
    });
<<<<<<< HEAD
    $.__views.report.add($.__views.__alloyId2111);
    $.__views.__alloyId2112 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.report.add($.__views.__alloyId2069);
    $.__views.__alloyId2070 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1879 = Alloy.createController("_header", {
        id: "__alloyId1879",
        __parentSymbol: $.__views.report
    });
    $.__views.__alloyId1879.setParent($.__views.report);
    $.__views.__alloyId1880 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1880"
    });
    $.__views.report.add($.__views.__alloyId1880);
    $.__views.__alloyId1881 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.__alloyId567 = Alloy.createController("_header", {
        id: "__alloyId567",
        __parentSymbol: $.__views.report
    });
    $.__views.__alloyId567.setParent($.__views.report);
    $.__views.__alloyId568 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId568"
    });
    $.__views.report.add($.__views.__alloyId568);
    $.__views.__alloyId569 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.report.add($.__views.__alloyId2111);
    $.__views.__alloyId2112 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Report Case",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2112"
    });
    $.__views.__alloyId2111.add($.__views.__alloyId2112);
    $.__views.__alloyId2113 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2070"
    });
    $.__views.__alloyId2069.add($.__views.__alloyId2070);
    $.__views.__alloyId2071 = Ti.UI.createImageView({
=======
        id: "__alloyId1881"
    });
    $.__views.__alloyId1880.add($.__views.__alloyId1881);
    $.__views.__alloyId1882 = Ti.UI.createImageView({
>>>>>>> origin/master
=======
        id: "__alloyId569"
    });
    $.__views.__alloyId568.add($.__views.__alloyId569);
    $.__views.__alloyId570 = Ti.UI.createImageView({
>>>>>>> Stashed changes
=======
        id: "__alloyId2112"
    });
    $.__views.__alloyId2111.add($.__views.__alloyId2112);
    $.__views.__alloyId2113 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId2113"
    });
    $.__views.__alloyId2111.add($.__views.__alloyId2113);
    back ? $.__views.__alloyId2113.addEventListener("click", back) : __defers["$.__views.__alloyId2113!click!back"] = true;
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2071"
    });
    $.__views.__alloyId2069.add($.__views.__alloyId2071);
    back ? $.__views.__alloyId2071.addEventListener("click", back) : __defers["$.__views.__alloyId2071!click!back"] = true;
=======
        id: "__alloyId1882"
    });
    $.__views.__alloyId1880.add($.__views.__alloyId1882);
    back ? $.__views.__alloyId1882.addEventListener("click", back) : __defers["$.__views.__alloyId1882!click!back"] = true;
>>>>>>> origin/master
=======
        id: "__alloyId570"
    });
    $.__views.__alloyId568.add($.__views.__alloyId570);
    back ? $.__views.__alloyId570.addEventListener("click", back) : __defers["$.__views.__alloyId570!click!back"] = true;
>>>>>>> Stashed changes
=======
        id: "__alloyId2113"
    });
    $.__views.__alloyId2111.add($.__views.__alloyId2113);
    back ? $.__views.__alloyId2113.addEventListener("click", back) : __defers["$.__views.__alloyId2113!click!back"] = true;
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F2F2F2"
    });
    $.__views.report.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId2114 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId2072 = Ti.UI.createView({
=======
    $.__views.__alloyId2114 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2114"
    });
    $.__views.scrollView.add($.__views.__alloyId2114);
    $.__views.__alloyId2115 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "35%",
        top: "0",
        id: "__alloyId2115"
<<<<<<< HEAD
    });
    $.__views.__alloyId2114.add($.__views.__alloyId2115);
    $.__views.__alloyId2116 = Ti.UI.createLabel({
=======
    });
<<<<<<< HEAD
    $.__views.__alloyId1883.add($.__views.__alloyId1884);
    $.__views.__alloyId1885 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "50",
        width: "90%"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId571 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId571"
    });
    $.__views.contentView.add($.__views.__alloyId571);
    $.__views.__alloyId572 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2114.add($.__views.__alloyId2115);
    $.__views.__alloyId2116 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Subject",
        height: "50",
        color: "black",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2116"
    });
    $.__views.__alloyId2115.add($.__views.__alloyId2116);
    $.__views.__alloyId2117 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2074"
    });
    $.__views.__alloyId2073.add($.__views.__alloyId2074);
    $.__views.__alloyId2075 = Ti.UI.createLabel({
=======
        id: "__alloyId1885"
    });
    $.__views.__alloyId1884.add($.__views.__alloyId1885);
    $.__views.__alloyId1886 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId572"
    });
    $.__views.__alloyId571.add($.__views.__alloyId572);
    $.__views.__alloyId573 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId2116"
    });
    $.__views.__alloyId2115.add($.__views.__alloyId2116);
    $.__views.__alloyId2117 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2117"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2075"
=======
        id: "__alloyId2117"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId2115.add($.__views.__alloyId2117);
    $.__views.__alloyId2118 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "65%",
        id: "__alloyId2118"
    });
    $.__views.__alloyId2114.add($.__views.__alloyId2118);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "30",
        top: "10",
        selectionIndicator: "true",
        borderRadius: "5",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId2118.add($.__views.picker);
    var __alloyId2119 = [];
    $.__views.__alloyId2120 = Ti.UI.createPickerRow({
        title: "Subject 1",
        id: "__alloyId2120"
    });
    __alloyId2119.push($.__views.__alloyId2120);
    $.__views.__alloyId2121 = Ti.UI.createPickerRow({
        title: "Subject 2",
        id: "__alloyId2121"
    });
    __alloyId2119.push($.__views.__alloyId2121);
    $.__views.__alloyId2122 = Ti.UI.createPickerRow({
        title: "Subject 3",
        id: "__alloyId2122"
    });
    __alloyId2119.push($.__views.__alloyId2122);
    $.__views.picker.add(__alloyId2119);
    subjectType ? $.__views.picker.addEventListener("change", subjectType) : __defers["$.__views.picker!change!subjectType"] = true;
    $.__views.__alloyId2123 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId2123"
    });
    $.__views.__alloyId2118.add($.__views.__alloyId2123);
    $.__views.__alloyId2124 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2124"
    });
    $.__views.scrollView.add($.__views.__alloyId2124);
    $.__views.__alloyId2125 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "35%",
        top: "0",
        id: "__alloyId2125"
    });
    $.__views.__alloyId2124.add($.__views.__alloyId2125);
    $.__views.__alloyId2126 = Ti.UI.createLabel({
        text: "Email",
        height: "50",
        color: "black",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2126"
    });
    $.__views.__alloyId2125.add($.__views.__alloyId2126);
    $.__views.__alloyId2127 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2084"
    });
    $.__views.__alloyId2083.add($.__views.__alloyId2084);
    $.__views.__alloyId2085 = Ti.UI.createLabel({
=======
        id: "__alloyId1894"
    });
    $.__views.__alloyId1893.add($.__views.__alloyId1894);
    $.__views.__alloyId1895 = Ti.UI.createLabel({
=======
        id: "__alloyId573"
    });
    $.__views.__alloyId571.add($.__views.__alloyId573);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "100%",
        width: "70%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.subjectLabel = Ti.UI.createLabel({
        text: "Select an option",
        id: "subjectLabel",
        height: "30",
        width: "100%",
        backgroundColor: "#FCFCFC",
        borderRadius: "5",
        borderColor: "gray",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.subjectLabel);
    showPicker ? $.__views.subjectLabel.addEventListener("click", showPicker) : __defers["$.__views.subjectLabel!click!showPicker"] = true;
    $.__views.__alloyId574 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId574"
    });
    $.__views.pickerContentView.add($.__views.__alloyId574);
    showPicker ? $.__views.__alloyId574.addEventListener("click", showPicker) : __defers["$.__views.__alloyId574!click!showPicker"] = true;
    $.__views.pickerView = Ti.UI.createView({
        id: "pickerView",
        height: "50",
        width: "100%",
        visible: "false",
        top: "50"
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
    var __alloyId575 = [];
    $.__views.__alloyId576 = Ti.UI.createPickerRow({
        title: "Subject 1",
        id: "__alloyId576"
    });
    __alloyId575.push($.__views.__alloyId576);
    $.__views.__alloyId577 = Ti.UI.createPickerRow({
        title: "Subject 2",
        id: "__alloyId577"
    });
    __alloyId575.push($.__views.__alloyId577);
    $.__views.__alloyId578 = Ti.UI.createPickerRow({
        title: "Subject 3",
        id: "__alloyId578"
    });
    __alloyId575.push($.__views.__alloyId578);
    $.__views.picker.add(__alloyId575);
    subjectType ? $.__views.picker.addEventListener("change", subjectType) : __defers["$.__views.picker!change!subjectType"] = true;
    $.__views.__alloyId579 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId579"
    });
    $.__views.scrollView.add($.__views.__alloyId579);
    $.__views.__alloyId580 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId580"
    });
    $.__views.__alloyId579.add($.__views.__alloyId580);
    $.__views.__alloyId581 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "Email Address",
        height: "50",
        color: "black",
        textAlign: "left",
<<<<<<< Updated upstream
        id: "__alloyId1895"
    });
    $.__views.__alloyId1894.add($.__views.__alloyId1895);
    $.__views.__alloyId1896 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId581"
    });
    $.__views.__alloyId580.add($.__views.__alloyId581);
    $.__views.__alloyId582 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId2126"
    });
    $.__views.__alloyId2125.add($.__views.__alloyId2126);
    $.__views.__alloyId2127 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2127"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2085"
=======
        id: "__alloyId2127"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId2125.add($.__views.__alloyId2127);
    $.__views.email = Ti.UI.createTextField({
        id: "email",
        width: "65%",
        height: "30",
        borderRadius: "5",
        backgroundColor: "white",
        color: "black",
        borderColor: "gray"
    });
    $.__views.__alloyId2124.add($.__views.email);
    $.__views.__alloyId2128 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2128"
    });
    $.__views.scrollView.add($.__views.__alloyId2128);
    $.__views.__alloyId2129 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "35%",
        top: "0",
        id: "__alloyId2129"
<<<<<<< HEAD
    });
    $.__views.__alloyId2128.add($.__views.__alloyId2129);
    $.__views.__alloyId2130 = Ti.UI.createLabel({
=======
    });
<<<<<<< HEAD
    $.__views.__alloyId1897.add($.__views.__alloyId1898);
    $.__views.__alloyId1899 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId582"
    });
    $.__views.__alloyId580.add($.__views.__alloyId582);
    $.__views.email = Ti.UI.createTextField({
        id: "email",
        width: "70%",
        height: "30",
        borderRadius: "5",
        backgroundColor: "white",
        borderColor: "gray"
    });
    $.__views.__alloyId579.add($.__views.email);
    $.__views.__alloyId583 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId583"
    });
    $.__views.scrollView.add($.__views.__alloyId583);
    $.__views.__alloyId584 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId584"
    });
    $.__views.__alloyId583.add($.__views.__alloyId584);
    $.__views.__alloyId585 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2128.add($.__views.__alloyId2129);
    $.__views.__alloyId2130 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Mobile No.",
        height: "50",
        color: "black",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2130"
    });
    $.__views.__alloyId2129.add($.__views.__alloyId2130);
    $.__views.__alloyId2131 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2088"
    });
    $.__views.__alloyId2087.add($.__views.__alloyId2088);
    $.__views.__alloyId2089 = Ti.UI.createLabel({
=======
        id: "__alloyId1899"
    });
    $.__views.__alloyId1898.add($.__views.__alloyId1899);
    $.__views.__alloyId1900 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId585"
    });
    $.__views.__alloyId584.add($.__views.__alloyId585);
    $.__views.__alloyId586 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId2130"
    });
    $.__views.__alloyId2129.add($.__views.__alloyId2130);
    $.__views.__alloyId2131 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2131"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2089"
=======
        id: "__alloyId2131"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId2129.add($.__views.__alloyId2131);
    $.__views.mobileNo = Ti.UI.createTextField({
        id: "mobileNo",
        width: "65%",
        height: "30",
        borderRadius: "5",
        backgroundColor: "white",
        color: "black",
        borderColor: "gray"
    });
    $.__views.__alloyId2128.add($.__views.mobileNo);
    $.__views.__alloyId2132 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2132"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId2132);
    $.__views.__alloyId2133 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId2090);
    $.__views.__alloyId2091 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1897.add($.__views.mobileNo);
    $.__views.__alloyId1901 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId1901"
    });
    $.__views.scrollView.add($.__views.__alloyId1901);
    $.__views.__alloyId1902 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId586"
    });
    $.__views.__alloyId584.add($.__views.__alloyId586);
    $.__views.mobileNo = Ti.UI.createTextField({
        id: "mobileNo",
        width: "70%",
        height: "30",
        borderRadius: "5",
        backgroundColor: "white",
        borderColor: "gray"
    });
    $.__views.__alloyId583.add($.__views.mobileNo);
    $.__views.__alloyId587 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId587"
    });
    $.__views.scrollView.add($.__views.__alloyId587);
    $.__views.__alloyId588 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.scrollView.add($.__views.__alloyId2132);
    $.__views.__alloyId2133 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Message",
        height: "50",
        color: "black",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2133"
    });
    $.__views.__alloyId2132.add($.__views.__alloyId2133);
    $.__views.__alloyId2134 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2091"
    });
    $.__views.__alloyId2090.add($.__views.__alloyId2091);
    $.__views.__alloyId2092 = Ti.UI.createLabel({
=======
        id: "__alloyId1902"
    });
    $.__views.__alloyId1901.add($.__views.__alloyId1902);
    $.__views.__alloyId1903 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId588"
    });
    $.__views.__alloyId587.add($.__views.__alloyId588);
    $.__views.__alloyId589 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId2133"
    });
    $.__views.__alloyId2132.add($.__views.__alloyId2133);
    $.__views.__alloyId2134 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2134"
    });
    $.__views.__alloyId2132.add($.__views.__alloyId2134);
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2092"
    });
    $.__views.__alloyId2090.add($.__views.__alloyId2092);
=======
        id: "__alloyId1903"
    });
    $.__views.__alloyId1901.add($.__views.__alloyId1903);
>>>>>>> origin/master
=======
        id: "__alloyId589"
    });
    $.__views.__alloyId587.add($.__views.__alloyId589);
>>>>>>> Stashed changes
=======
        id: "__alloyId2134"
    });
    $.__views.__alloyId2132.add($.__views.__alloyId2134);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.message = Ti.UI.createTextArea({
        id: "message",
        height: "250",
        width: "90%",
        borderRadius: "5",
        backgroundColor: "white",
<<<<<<< Updated upstream
        color: "black",
        borderColor: "gray"
    });
    $.__views.scrollView.add($.__views.message);
<<<<<<< HEAD
    $.__views.__alloyId2135 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2093 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1904 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        borderColor: "gray"
    });
    $.__views.scrollView.add($.__views.message);
    $.__views.__alloyId590 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2135 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "* Required fields",
        height: "50",
        color: "red",
        textAlign: "left",
        left: "10%",
        top: "10",
<<<<<<< HEAD
        id: "__alloyId2135"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2093"
=======
        id: "__alloyId2135"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.scrollView.add($.__views.__alloyId2135);
    $.__views.__alloyId2136 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2136"
    });
<<<<<<< HEAD
    $.__views.report.add($.__views.__alloyId2136);
    send ? $.__views.__alloyId2136.addEventListener("click", send) : __defers["$.__views.__alloyId2136!click!send"] = true;
    $.__views.__alloyId2137 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.report.add($.__views.__alloyId2094);
    send ? $.__views.__alloyId2094.addEventListener("click", send) : __defers["$.__views.__alloyId2094!click!send"] = true;
    $.__views.__alloyId2095 = Ti.UI.createLabel({
=======
        id: "__alloyId1904"
    });
    $.__views.scrollView.add($.__views.__alloyId1904);
    $.__views.__alloyId1905 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1905"
    });
    $.__views.report.add($.__views.__alloyId1905);
    send ? $.__views.__alloyId1905.addEventListener("click", send) : __defers["$.__views.__alloyId1905!click!send"] = true;
    $.__views.__alloyId1906 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId590"
    });
    $.__views.scrollView.add($.__views.__alloyId590);
    $.__views.__alloyId591 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId591"
    });
    $.__views.report.add($.__views.__alloyId591);
    send ? $.__views.__alloyId591.addEventListener("click", send) : __defers["$.__views.__alloyId591!click!send"] = true;
    $.__views.__alloyId592 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.report.add($.__views.__alloyId2136);
    send ? $.__views.__alloyId2136.addEventListener("click", send) : __defers["$.__views.__alloyId2136!click!send"] = true;
    $.__views.__alloyId2137 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Send",
        color: "white",
        height: "100%",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId2137"
    });
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2095"
    });
    $.__views.__alloyId2094.add($.__views.__alloyId2095);
=======
        id: "__alloyId1906"
=======
        id: "__alloyId2137"
>>>>>>> origin/master
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId2136.add($.__views.__alloyId2137);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    var subjectType;
    __defers["$.__views.__alloyId2113!click!back"] && $.__views.__alloyId2113.addEventListener("click", back);
<<<<<<< HEAD
    __defers["$.__views.picker!change!subjectType"] && $.__views.picker.addEventListener("change", subjectType);
    __defers["$.__views.__alloyId2136!click!send"] && $.__views.__alloyId2136.addEventListener("click", send);
=======
    __defers["$.__views.picker!change!subjectType"] && $.__views.picker.addEventListener("change", subjectType);
<<<<<<< HEAD
    __defers["$.__views.__alloyId1905!click!send"] && $.__views.__alloyId1905.addEventListener("click", send);
>>>>>>> origin/master
=======
        id: "__alloyId592"
    });
    $.__views.__alloyId591.add($.__views.__alloyId592);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    var subjectType;
    __defers["$.__views.__alloyId570!click!back"] && $.__views.__alloyId570.addEventListener("click", back);
    __defers["$.__views.subjectLabel!click!showPicker"] && $.__views.subjectLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId574!click!showPicker"] && $.__views.__alloyId574.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!subjectType"] && $.__views.picker.addEventListener("change", subjectType);
    __defers["$.__views.__alloyId591!click!send"] && $.__views.__alloyId591.addEventListener("click", send);
>>>>>>> Stashed changes
=======
    __defers["$.__views.__alloyId2136!click!send"] && $.__views.__alloyId2136.addEventListener("click", send);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;