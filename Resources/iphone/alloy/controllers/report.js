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
        DRAWER.navigation("myAccount", 2);
    }
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
        ("iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname) && ($.subjectLabel.text = subjectType);
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
    $.__views.__alloyId1860 = Alloy.createController("_header", {
        id: "__alloyId1860",
=======
<<<<<<< HEAD
    $.__views.__alloyId2043 = Alloy.createController("_header", {
        id: "__alloyId2043",
        __parentSymbol: $.__views.report
    });
    $.__views.__alloyId2043.setParent($.__views.report);
    $.__views.__alloyId2044 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2044"
    });
    $.__views.report.add($.__views.__alloyId2044);
    $.__views.__alloyId2045 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1526 = Alloy.createController("_header", {
        id: "__alloyId1526",
>>>>>>> origin/master
        __parentSymbol: $.__views.report
    });
    $.__views.__alloyId1860.setParent($.__views.report);
    $.__views.__alloyId1861 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1861"
    });
<<<<<<< HEAD
    $.__views.report.add($.__views.__alloyId1861);
    $.__views.__alloyId1862 = Ti.UI.createLabel({
=======
    $.__views.report.add($.__views.__alloyId1527);
    $.__views.__alloyId1528 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Report Case",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1862"
    });
    $.__views.__alloyId1861.add($.__views.__alloyId1862);
    $.__views.__alloyId1863 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId2045"
    });
    $.__views.__alloyId2044.add($.__views.__alloyId2045);
    $.__views.__alloyId2046 = Ti.UI.createImageView({
=======
        id: "__alloyId1528"
    });
    $.__views.__alloyId1527.add($.__views.__alloyId1528);
    $.__views.__alloyId1529 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId1863"
    });
    $.__views.__alloyId1861.add($.__views.__alloyId1863);
    back ? $.__views.__alloyId1863.addEventListener("click", back) : __defers["$.__views.__alloyId1863!click!back"] = true;
=======
<<<<<<< HEAD
        id: "__alloyId2046"
    });
    $.__views.__alloyId2044.add($.__views.__alloyId2046);
    back ? $.__views.__alloyId2046.addEventListener("click", back) : __defers["$.__views.__alloyId2046!click!back"] = true;
=======
        id: "__alloyId1529"
    });
    $.__views.__alloyId1527.add($.__views.__alloyId1529);
    back ? $.__views.__alloyId1529.addEventListener("click", back) : __defers["$.__views.__alloyId1529!click!back"] = true;
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F2F2F2"
    });
    $.__views.report.add($.__views.scrollView);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "50",
        width: "90%"
    });
    $.__views.scrollView.add($.__views.contentView);
<<<<<<< HEAD
    $.__views.__alloyId1864 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId2047 = Ti.UI.createView({
=======
    $.__views.__alloyId1530 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        height: "50",
        width: "35%",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1864"
    });
    $.__views.contentView.add($.__views.__alloyId1864);
    $.__views.__alloyId1865 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2047"
    });
    $.__views.contentView.add($.__views.__alloyId2047);
    $.__views.__alloyId2048 = Ti.UI.createLabel({
=======
        id: "__alloyId1530"
    });
    $.__views.contentView.add($.__views.__alloyId1530);
    $.__views.__alloyId1531 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Subject",
        height: "50",
        color: "black",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1865"
    });
    $.__views.__alloyId1864.add($.__views.__alloyId1865);
    $.__views.__alloyId1866 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2048"
    });
    $.__views.__alloyId2047.add($.__views.__alloyId2048);
    $.__views.__alloyId2049 = Ti.UI.createLabel({
=======
        id: "__alloyId1531"
    });
    $.__views.__alloyId1530.add($.__views.__alloyId1531);
    $.__views.__alloyId1532 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1866"
    });
    $.__views.__alloyId1864.add($.__views.__alloyId1866);
=======
<<<<<<< HEAD
        id: "__alloyId2049"
    });
    $.__views.__alloyId2047.add($.__views.__alloyId2049);
=======
        id: "__alloyId1532"
    });
    $.__views.__alloyId1530.add($.__views.__alloyId1532);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "100%",
        width: "65%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.subjectLabel = Ti.UI.createLabel({
        text: "Select an option",
        id: "subjectLabel",
        height: "30",
        width: "99%",
        backgroundColor: "#FCFCFC",
        borderRadius: "5",
        borderColor: "gray",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.subjectLabel);
    showPicker ? $.__views.subjectLabel.addEventListener("click", showPicker) : __defers["$.__views.subjectLabel!click!showPicker"] = true;
<<<<<<< HEAD
    $.__views.__alloyId1867 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
    $.__views.__alloyId2050 = Ti.UI.createImageView({
=======
    $.__views.__alloyId1533 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> origin/master
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
<<<<<<< HEAD
        id: "__alloyId1867"
    });
    $.__views.pickerContentView.add($.__views.__alloyId1867);
    showPicker ? $.__views.__alloyId1867.addEventListener("click", showPicker) : __defers["$.__views.__alloyId1867!click!showPicker"] = true;
=======
<<<<<<< HEAD
        id: "__alloyId2050"
    });
    $.__views.pickerContentView.add($.__views.__alloyId2050);
    showPicker ? $.__views.__alloyId2050.addEventListener("click", showPicker) : __defers["$.__views.__alloyId2050!click!showPicker"] = true;
=======
        id: "__alloyId1533"
    });
    $.__views.pickerContentView.add($.__views.__alloyId1533);
    showPicker ? $.__views.__alloyId1533.addEventListener("click", showPicker) : __defers["$.__views.__alloyId1533!click!showPicker"] = true;
>>>>>>> origin/master
>>>>>>> origin/master
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
<<<<<<< HEAD
    var __alloyId1868 = [];
    $.__views.__alloyId1869 = Ti.UI.createPickerRow({
=======
<<<<<<< HEAD
    var __alloyId2051 = [];
    $.__views.__alloyId2052 = Ti.UI.createPickerRow({
        title: "Subject 1",
        id: "__alloyId2052"
    });
    __alloyId2051.push($.__views.__alloyId2052);
    $.__views.__alloyId2053 = Ti.UI.createPickerRow({
        title: "Subject 2",
        id: "__alloyId2053"
    });
    __alloyId2051.push($.__views.__alloyId2053);
    $.__views.__alloyId2054 = Ti.UI.createPickerRow({
        title: "Subject 3",
        id: "__alloyId2054"
    });
    __alloyId2051.push($.__views.__alloyId2054);
    $.__views.picker.add(__alloyId2051);
    subjectType ? $.__views.picker.addEventListener("change", subjectType) : __defers["$.__views.picker!change!subjectType"] = true;
    $.__views.__alloyId2055 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2055"
    });
    $.__views.scrollView.add($.__views.__alloyId2055);
    $.__views.__alloyId2056 = Ti.UI.createView({
=======
    var __alloyId1534 = [];
    $.__views.__alloyId1535 = Ti.UI.createPickerRow({
>>>>>>> origin/master
        title: "Subject 1",
        id: "__alloyId1869"
    });
    __alloyId1868.push($.__views.__alloyId1869);
    $.__views.__alloyId1870 = Ti.UI.createPickerRow({
        title: "Subject 2",
        id: "__alloyId1870"
    });
    __alloyId1868.push($.__views.__alloyId1870);
    $.__views.__alloyId1871 = Ti.UI.createPickerRow({
        title: "Subject 3",
        id: "__alloyId1871"
    });
    __alloyId1868.push($.__views.__alloyId1871);
    $.__views.picker.add(__alloyId1868);
    subjectType ? $.__views.picker.addEventListener("change", subjectType) : __defers["$.__views.picker!change!subjectType"] = true;
    $.__views.__alloyId1872 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId1872"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId1872);
    $.__views.__alloyId1873 = Ti.UI.createView({
=======
    $.__views.scrollView.add($.__views.__alloyId1538);
    $.__views.__alloyId1539 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        height: "50",
        width: "35%",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1873"
=======
<<<<<<< HEAD
        id: "__alloyId2056"
    });
    $.__views.__alloyId2055.add($.__views.__alloyId2056);
    $.__views.__alloyId2057 = Ti.UI.createLabel({
        text: "Email",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId2057"
    });
    $.__views.__alloyId2056.add($.__views.__alloyId2057);
    $.__views.__alloyId2058 = Ti.UI.createLabel({
=======
        id: "__alloyId1539"
>>>>>>> origin/master
    });
    $.__views.__alloyId1872.add($.__views.__alloyId1873);
    $.__views.__alloyId1874 = Ti.UI.createLabel({
        text: "Email Address",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId1874"
    });
<<<<<<< HEAD
    $.__views.__alloyId1873.add($.__views.__alloyId1874);
    $.__views.__alloyId1875 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1539.add($.__views.__alloyId1540);
    $.__views.__alloyId1541 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1875"
    });
    $.__views.__alloyId1873.add($.__views.__alloyId1875);
=======
<<<<<<< HEAD
        id: "__alloyId2058"
    });
    $.__views.__alloyId2056.add($.__views.__alloyId2058);
=======
        id: "__alloyId1541"
    });
    $.__views.__alloyId1539.add($.__views.__alloyId1541);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.email = Ti.UI.createTextField({
        id: "email",
        width: "65%",
        height: "30",
        borderRadius: "5",
        backgroundColor: "white",
        color: "black",
        borderColor: "gray"
    });
<<<<<<< HEAD
    $.__views.__alloyId1872.add($.__views.email);
    $.__views.__alloyId1876 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId2055.add($.__views.email);
    $.__views.__alloyId2059 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2059"
    });
    $.__views.scrollView.add($.__views.__alloyId2059);
    $.__views.__alloyId2060 = Ti.UI.createView({
=======
    $.__views.__alloyId1538.add($.__views.email);
    $.__views.__alloyId1542 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId1876"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId1876);
    $.__views.__alloyId1877 = Ti.UI.createView({
=======
    $.__views.scrollView.add($.__views.__alloyId1542);
    $.__views.__alloyId1543 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        height: "50",
        width: "35%",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1877"
    });
    $.__views.__alloyId1876.add($.__views.__alloyId1877);
    $.__views.__alloyId1878 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2060"
    });
    $.__views.__alloyId2059.add($.__views.__alloyId2060);
    $.__views.__alloyId2061 = Ti.UI.createLabel({
=======
        id: "__alloyId1543"
    });
    $.__views.__alloyId1542.add($.__views.__alloyId1543);
    $.__views.__alloyId1544 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Mobile No.",
        height: "50",
        color: "black",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1878"
    });
    $.__views.__alloyId1877.add($.__views.__alloyId1878);
    $.__views.__alloyId1879 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2061"
    });
    $.__views.__alloyId2060.add($.__views.__alloyId2061);
    $.__views.__alloyId2062 = Ti.UI.createLabel({
=======
        id: "__alloyId1544"
    });
    $.__views.__alloyId1543.add($.__views.__alloyId1544);
    $.__views.__alloyId1545 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1879"
    });
    $.__views.__alloyId1877.add($.__views.__alloyId1879);
=======
<<<<<<< HEAD
        id: "__alloyId2062"
    });
    $.__views.__alloyId2060.add($.__views.__alloyId2062);
=======
        id: "__alloyId1545"
    });
    $.__views.__alloyId1543.add($.__views.__alloyId1545);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.mobileNo = Ti.UI.createTextField({
        id: "mobileNo",
        width: "65%",
        height: "30",
        borderRadius: "5",
        backgroundColor: "white",
        color: "black",
        borderColor: "gray"
    });
<<<<<<< HEAD
    $.__views.__alloyId1876.add($.__views.mobileNo);
    $.__views.__alloyId1880 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId2059.add($.__views.mobileNo);
    $.__views.__alloyId2063 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2063"
    });
    $.__views.scrollView.add($.__views.__alloyId2063);
    $.__views.__alloyId2064 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1542.add($.__views.mobileNo);
    $.__views.__alloyId1546 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId1880"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId1880);
    $.__views.__alloyId1881 = Ti.UI.createLabel({
=======
    $.__views.scrollView.add($.__views.__alloyId1546);
    $.__views.__alloyId1547 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Message",
        height: "50",
        color: "black",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1881"
    });
    $.__views.__alloyId1880.add($.__views.__alloyId1881);
    $.__views.__alloyId1882 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2064"
    });
    $.__views.__alloyId2063.add($.__views.__alloyId2064);
    $.__views.__alloyId2065 = Ti.UI.createLabel({
=======
        id: "__alloyId1547"
    });
    $.__views.__alloyId1546.add($.__views.__alloyId1547);
    $.__views.__alloyId1548 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1882"
    });
    $.__views.__alloyId1880.add($.__views.__alloyId1882);
=======
<<<<<<< HEAD
        id: "__alloyId2065"
    });
    $.__views.__alloyId2063.add($.__views.__alloyId2065);
=======
        id: "__alloyId1548"
    });
    $.__views.__alloyId1546.add($.__views.__alloyId1548);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.message = Ti.UI.createTextArea({
        id: "message",
        height: "250",
        width: "90%",
        borderRadius: "5",
        backgroundColor: "white",
        color: "black",
        borderColor: "gray"
    });
    $.__views.scrollView.add($.__views.message);
<<<<<<< HEAD
    $.__views.__alloyId1883 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2066 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1549 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "* Required fields",
        height: "50",
        color: "red",
        textAlign: "left",
        left: "10%",
        top: "10",
<<<<<<< HEAD
        id: "__alloyId1883"
=======
<<<<<<< HEAD
        id: "__alloyId2066"
    });
    $.__views.scrollView.add($.__views.__alloyId2066);
    $.__views.__alloyId2067 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2067"
    });
    $.__views.report.add($.__views.__alloyId2067);
    send ? $.__views.__alloyId2067.addEventListener("click", send) : __defers["$.__views.__alloyId2067!click!send"] = true;
    $.__views.__alloyId2068 = Ti.UI.createLabel({
=======
        id: "__alloyId1549"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1883);
    $.__views.__alloyId1884 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1884"
    });
<<<<<<< HEAD
    $.__views.report.add($.__views.__alloyId1884);
    send ? $.__views.__alloyId1884.addEventListener("click", send) : __defers["$.__views.__alloyId1884!click!send"] = true;
    $.__views.__alloyId1885 = Ti.UI.createLabel({
=======
    $.__views.report.add($.__views.__alloyId1550);
    send ? $.__views.__alloyId1550.addEventListener("click", send) : __defers["$.__views.__alloyId1550!click!send"] = true;
    $.__views.__alloyId1551 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Send",
        color: "white",
        height: "100%",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId1885"
    });
    $.__views.__alloyId1884.add($.__views.__alloyId1885);
=======
<<<<<<< HEAD
        id: "__alloyId2068"
    });
    $.__views.__alloyId2067.add($.__views.__alloyId2068);
=======
        id: "__alloyId1551"
    });
    $.__views.__alloyId1550.add($.__views.__alloyId1551);
>>>>>>> origin/master
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    var subjectType;
<<<<<<< HEAD
    __defers["$.__views.__alloyId1863!click!back"] && $.__views.__alloyId1863.addEventListener("click", back);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId2046!click!back"] && $.__views.__alloyId2046.addEventListener("click", back);
    __defers["$.__views.subjectLabel!click!showPicker"] && $.__views.subjectLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId2050!click!showPicker"] && $.__views.__alloyId2050.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!subjectType"] && $.__views.picker.addEventListener("change", subjectType);
    __defers["$.__views.__alloyId2067!click!send"] && $.__views.__alloyId2067.addEventListener("click", send);
=======
    __defers["$.__views.__alloyId1529!click!back"] && $.__views.__alloyId1529.addEventListener("click", back);
>>>>>>> origin/master
    __defers["$.__views.subjectLabel!click!showPicker"] && $.__views.subjectLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId1867!click!showPicker"] && $.__views.__alloyId1867.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!subjectType"] && $.__views.picker.addEventListener("change", subjectType);
<<<<<<< HEAD
    __defers["$.__views.__alloyId1884!click!send"] && $.__views.__alloyId1884.addEventListener("click", send);
=======
    __defers["$.__views.__alloyId1550!click!send"] && $.__views.__alloyId1550.addEventListener("click", send);
>>>>>>> origin/master
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;