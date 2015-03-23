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
    function subjectType(e) {
        console.log("subjectType");
        subjectType = e.row.title;
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
    $.__views.__alloyId2068 = Alloy.createController("_header", {
        id: "__alloyId2068",
        __parentSymbol: $.__views.report
    });
    $.__views.__alloyId2068.setParent($.__views.report);
    $.__views.__alloyId2069 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2069"
    });
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
        text: "Report Case",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
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
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
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
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F2F2F2"
    });
    $.__views.report.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId2072 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2072"
    });
    $.__views.scrollView.add($.__views.__alloyId2072);
    $.__views.__alloyId2073 = Ti.UI.createView({
=======
    $.__views.__alloyId1883 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId1883"
    });
    $.__views.scrollView.add($.__views.__alloyId1883);
    $.__views.__alloyId1884 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "50",
        width: "35%",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId2073"
    });
    $.__views.__alloyId2072.add($.__views.__alloyId2073);
    $.__views.__alloyId2074 = Ti.UI.createLabel({
=======
        id: "__alloyId1884"
    });
    $.__views.__alloyId1883.add($.__views.__alloyId1884);
    $.__views.__alloyId1885 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Subject",
        height: "50",
        color: "black",
        textAlign: "left",
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
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2075"
    });
    $.__views.__alloyId2073.add($.__views.__alloyId2075);
    $.__views.__alloyId2076 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "65%",
        id: "__alloyId2076"
    });
    $.__views.__alloyId2072.add($.__views.__alloyId2076);
=======
        id: "__alloyId1886"
    });
    $.__views.__alloyId1884.add($.__views.__alloyId1886);
    $.__views.__alloyId1887 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "70%",
        id: "__alloyId1887"
    });
    $.__views.__alloyId1883.add($.__views.__alloyId1887);
>>>>>>> origin/master
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
<<<<<<< HEAD
    $.__views.__alloyId2076.add($.__views.picker);
    var __alloyId2077 = [];
    $.__views.__alloyId2078 = Ti.UI.createPickerRow({
        title: "Subject 1",
        id: "__alloyId2078"
    });
    __alloyId2077.push($.__views.__alloyId2078);
    $.__views.__alloyId2079 = Ti.UI.createPickerRow({
        title: "Subject 2",
        id: "__alloyId2079"
    });
    __alloyId2077.push($.__views.__alloyId2079);
    $.__views.__alloyId2080 = Ti.UI.createPickerRow({
        title: "Subject 3",
        id: "__alloyId2080"
    });
    __alloyId2077.push($.__views.__alloyId2080);
    $.__views.picker.add(__alloyId2077);
    subjectType ? $.__views.picker.addEventListener("change", subjectType) : __defers["$.__views.picker!change!subjectType"] = true;
    $.__views.__alloyId2081 = Ti.UI.createImageView({
=======
    $.__views.__alloyId1887.add($.__views.picker);
    var __alloyId1888 = [];
    $.__views.__alloyId1889 = Ti.UI.createPickerRow({
        title: "Subject 1",
        id: "__alloyId1889"
    });
    __alloyId1888.push($.__views.__alloyId1889);
    $.__views.__alloyId1890 = Ti.UI.createPickerRow({
        title: "Subject 2",
        id: "__alloyId1890"
    });
    __alloyId1888.push($.__views.__alloyId1890);
    $.__views.__alloyId1891 = Ti.UI.createPickerRow({
        title: "Subject 3",
        id: "__alloyId1891"
    });
    __alloyId1888.push($.__views.__alloyId1891);
    $.__views.picker.add(__alloyId1888);
    subjectType ? $.__views.picker.addEventListener("change", subjectType) : __defers["$.__views.picker!change!subjectType"] = true;
    $.__views.__alloyId1892 = Ti.UI.createImageView({
>>>>>>> origin/master
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
<<<<<<< HEAD
        id: "__alloyId2081"
    });
    $.__views.__alloyId2076.add($.__views.__alloyId2081);
    $.__views.__alloyId2082 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2082"
    });
    $.__views.scrollView.add($.__views.__alloyId2082);
    $.__views.__alloyId2083 = Ti.UI.createView({
=======
        id: "__alloyId1892"
    });
    $.__views.__alloyId1887.add($.__views.__alloyId1892);
    $.__views.__alloyId1893 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId1893"
    });
    $.__views.scrollView.add($.__views.__alloyId1893);
    $.__views.__alloyId1894 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "50",
        width: "35%",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId2083"
    });
    $.__views.__alloyId2082.add($.__views.__alloyId2083);
    $.__views.__alloyId2084 = Ti.UI.createLabel({
        text: "Email",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId2084"
    });
    $.__views.__alloyId2083.add($.__views.__alloyId2084);
    $.__views.__alloyId2085 = Ti.UI.createLabel({
=======
        id: "__alloyId1894"
    });
    $.__views.__alloyId1893.add($.__views.__alloyId1894);
    $.__views.__alloyId1895 = Ti.UI.createLabel({
        text: "Email Address",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId1895"
    });
    $.__views.__alloyId1894.add($.__views.__alloyId1895);
    $.__views.__alloyId1896 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2085"
    });
    $.__views.__alloyId2083.add($.__views.__alloyId2085);
=======
        id: "__alloyId1896"
    });
    $.__views.__alloyId1894.add($.__views.__alloyId1896);
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
    $.__views.__alloyId2082.add($.__views.email);
    $.__views.__alloyId2086 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2086"
    });
    $.__views.scrollView.add($.__views.__alloyId2086);
    $.__views.__alloyId2087 = Ti.UI.createView({
=======
    $.__views.__alloyId1893.add($.__views.email);
    $.__views.__alloyId1897 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId1897"
    });
    $.__views.scrollView.add($.__views.__alloyId1897);
    $.__views.__alloyId1898 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "50",
        width: "35%",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId2087"
    });
    $.__views.__alloyId2086.add($.__views.__alloyId2087);
    $.__views.__alloyId2088 = Ti.UI.createLabel({
=======
        id: "__alloyId1898"
    });
    $.__views.__alloyId1897.add($.__views.__alloyId1898);
    $.__views.__alloyId1899 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Mobile No.",
        height: "50",
        color: "black",
        textAlign: "left",
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
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2089"
    });
    $.__views.__alloyId2087.add($.__views.__alloyId2089);
=======
        id: "__alloyId1900"
    });
    $.__views.__alloyId1898.add($.__views.__alloyId1900);
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
    $.__views.__alloyId2086.add($.__views.mobileNo);
    $.__views.__alloyId2090 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2090"
    });
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
        text: "Message",
        height: "50",
        color: "black",
        textAlign: "left",
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
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2092"
    });
    $.__views.__alloyId2090.add($.__views.__alloyId2092);
=======
        id: "__alloyId1903"
    });
    $.__views.__alloyId1901.add($.__views.__alloyId1903);
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
    $.__views.__alloyId2093 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1904 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "* Required fields",
        height: "50",
        color: "red",
        textAlign: "left",
        left: "10%",
        top: "10",
<<<<<<< HEAD
        id: "__alloyId2093"
    });
    $.__views.scrollView.add($.__views.__alloyId2093);
    $.__views.__alloyId2094 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2094"
    });
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
        text: "Send",
        color: "white",
        height: "100%",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId2095"
    });
    $.__views.__alloyId2094.add($.__views.__alloyId2095);
=======
        id: "__alloyId1906"
    });
    $.__views.__alloyId1905.add($.__views.__alloyId1906);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    var subjectType;
<<<<<<< HEAD
    __defers["$.__views.__alloyId2071!click!back"] && $.__views.__alloyId2071.addEventListener("click", back);
    __defers["$.__views.picker!change!subjectType"] && $.__views.picker.addEventListener("change", subjectType);
    __defers["$.__views.__alloyId2094!click!send"] && $.__views.__alloyId2094.addEventListener("click", send);
=======
    __defers["$.__views.__alloyId1882!click!back"] && $.__views.__alloyId1882.addEventListener("click", back);
    __defers["$.__views.picker!change!subjectType"] && $.__views.picker.addEventListener("change", subjectType);
    __defers["$.__views.__alloyId1905!click!send"] && $.__views.__alloyId1905.addEventListener("click", send);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;