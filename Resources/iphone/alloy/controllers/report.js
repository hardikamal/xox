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
<<<<<<< HEAD
=======
>>>>>>> origin/master
    $.__views.__alloyId1997 = Alloy.createController("_header", {
        id: "__alloyId1997",
        __parentSymbol: $.__views.report
    });
    $.__views.__alloyId1997.setParent($.__views.report);
    $.__views.__alloyId1998 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1998"
<<<<<<< HEAD
    });
    $.__views.report.add($.__views.__alloyId1998);
    $.__views.__alloyId1999 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2224 = Alloy.createController("_header", {
        id: "__alloyId2224",
        __parentSymbol: $.__views.report
    });
    $.__views.__alloyId2224.setParent($.__views.report);
    $.__views.__alloyId2225 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2225"
    });
    $.__views.report.add($.__views.__alloyId2225);
    $.__views.__alloyId2226 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1997 = Alloy.createController("_header", {
        id: "__alloyId1997",
        __parentSymbol: $.__views.report
    });
    $.__views.__alloyId1997.setParent($.__views.report);
    $.__views.__alloyId1998 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1998"
    });
    $.__views.report.add($.__views.__alloyId1998);
    $.__views.__alloyId1999 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    });
    $.__views.report.add($.__views.__alloyId1998);
    $.__views.__alloyId1999 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Report Case",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId1999"
    });
    $.__views.__alloyId1998.add($.__views.__alloyId1999);
    $.__views.__alloyId2000 = Ti.UI.createImageView({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2226"
    });
    $.__views.__alloyId2225.add($.__views.__alloyId2226);
    $.__views.__alloyId2227 = Ti.UI.createImageView({
=======
        id: "__alloyId1999"
    });
    $.__views.__alloyId1998.add($.__views.__alloyId1999);
    $.__views.__alloyId2000 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2227"
    });
    $.__views.__alloyId2225.add($.__views.__alloyId2227);
    back ? $.__views.__alloyId2227.addEventListener("click", back) : __defers["$.__views.__alloyId2227!click!back"] = true;
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId2000"
    });
    $.__views.__alloyId1998.add($.__views.__alloyId2000);
    back ? $.__views.__alloyId2000.addEventListener("click", back) : __defers["$.__views.__alloyId2000!click!back"] = true;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
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
<<<<<<< HEAD
    $.__views.__alloyId2001 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId2228 = Ti.UI.createView({
=======
    $.__views.__alloyId2001 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2001 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "50",
        width: "35%",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2228"
    });
    $.__views.contentView.add($.__views.__alloyId2228);
    $.__views.__alloyId2229 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId2001"
    });
    $.__views.contentView.add($.__views.__alloyId2001);
    $.__views.__alloyId2002 = Ti.UI.createLabel({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "Subject",
        height: "50",
        color: "black",
        textAlign: "left",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId2002"
    });
    $.__views.__alloyId2001.add($.__views.__alloyId2002);
    $.__views.__alloyId2003 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2229"
    });
    $.__views.__alloyId2228.add($.__views.__alloyId2229);
    $.__views.__alloyId2230 = Ti.UI.createLabel({
=======
        id: "__alloyId2002"
    });
    $.__views.__alloyId2001.add($.__views.__alloyId2002);
    $.__views.__alloyId2003 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId2003"
    });
    $.__views.__alloyId2001.add($.__views.__alloyId2003);
=======
<<<<<<< HEAD
        id: "__alloyId2230"
    });
    $.__views.__alloyId2228.add($.__views.__alloyId2230);
=======
        id: "__alloyId2003"
    });
    $.__views.__alloyId2001.add($.__views.__alloyId2003);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId2003"
    });
    $.__views.__alloyId2001.add($.__views.__alloyId2003);
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
<<<<<<< HEAD
    $.__views.__alloyId2004 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
    $.__views.__alloyId2231 = Ti.UI.createImageView({
=======
    $.__views.__alloyId2004 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2004 = Ti.UI.createImageView({
>>>>>>> origin/master
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2231"
    });
    $.__views.pickerContentView.add($.__views.__alloyId2231);
    showPicker ? $.__views.__alloyId2231.addEventListener("click", showPicker) : __defers["$.__views.__alloyId2231!click!showPicker"] = true;
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId2004"
    });
    $.__views.pickerContentView.add($.__views.__alloyId2004);
    showPicker ? $.__views.__alloyId2004.addEventListener("click", showPicker) : __defers["$.__views.__alloyId2004!click!showPicker"] = true;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
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
<<<<<<< HEAD
    var __alloyId2005 = [];
    $.__views.__alloyId2006 = Ti.UI.createPickerRow({
        title: "Subject 1",
        id: "__alloyId2006"
    });
    __alloyId2005.push($.__views.__alloyId2006);
    $.__views.__alloyId2007 = Ti.UI.createPickerRow({
        title: "Subject 2",
        id: "__alloyId2007"
    });
    __alloyId2005.push($.__views.__alloyId2007);
    $.__views.__alloyId2008 = Ti.UI.createPickerRow({
        title: "Subject 3",
        id: "__alloyId2008"
    });
    __alloyId2005.push($.__views.__alloyId2008);
    $.__views.picker.add(__alloyId2005);
    subjectType ? $.__views.picker.addEventListener("change", subjectType) : __defers["$.__views.picker!change!subjectType"] = true;
    $.__views.__alloyId2009 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2009"
    });
    $.__views.scrollView.add($.__views.__alloyId2009);
    $.__views.__alloyId2010 = Ti.UI.createView({
=======
<<<<<<< HEAD
    var __alloyId2232 = [];
    $.__views.__alloyId2233 = Ti.UI.createPickerRow({
        title: "Subject 1",
        id: "__alloyId2233"
    });
    __alloyId2232.push($.__views.__alloyId2233);
    $.__views.__alloyId2234 = Ti.UI.createPickerRow({
        title: "Subject 2",
        id: "__alloyId2234"
    });
    __alloyId2232.push($.__views.__alloyId2234);
    $.__views.__alloyId2235 = Ti.UI.createPickerRow({
        title: "Subject 3",
        id: "__alloyId2235"
    });
    __alloyId2232.push($.__views.__alloyId2235);
    $.__views.picker.add(__alloyId2232);
    subjectType ? $.__views.picker.addEventListener("change", subjectType) : __defers["$.__views.picker!change!subjectType"] = true;
    $.__views.__alloyId2236 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2236"
    });
    $.__views.scrollView.add($.__views.__alloyId2236);
    $.__views.__alloyId2237 = Ti.UI.createView({
=======
=======
>>>>>>> origin/master
    var __alloyId2005 = [];
    $.__views.__alloyId2006 = Ti.UI.createPickerRow({
        title: "Subject 1",
        id: "__alloyId2006"
    });
    __alloyId2005.push($.__views.__alloyId2006);
    $.__views.__alloyId2007 = Ti.UI.createPickerRow({
        title: "Subject 2",
        id: "__alloyId2007"
    });
    __alloyId2005.push($.__views.__alloyId2007);
    $.__views.__alloyId2008 = Ti.UI.createPickerRow({
        title: "Subject 3",
        id: "__alloyId2008"
    });
    __alloyId2005.push($.__views.__alloyId2008);
    $.__views.picker.add(__alloyId2005);
    subjectType ? $.__views.picker.addEventListener("change", subjectType) : __defers["$.__views.picker!change!subjectType"] = true;
    $.__views.__alloyId2009 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2009"
    });
    $.__views.scrollView.add($.__views.__alloyId2009);
    $.__views.__alloyId2010 = Ti.UI.createView({
<<<<<<< HEAD
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        layout: "horizontal",
        height: "50",
        width: "35%",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2237"
    });
    $.__views.__alloyId2236.add($.__views.__alloyId2237);
    $.__views.__alloyId2238 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId2010"
    });
    $.__views.__alloyId2009.add($.__views.__alloyId2010);
    $.__views.__alloyId2011 = Ti.UI.createLabel({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "Email",
        height: "50",
        color: "black",
        textAlign: "left",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId2011"
    });
    $.__views.__alloyId2010.add($.__views.__alloyId2011);
    $.__views.__alloyId2012 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2238"
    });
    $.__views.__alloyId2237.add($.__views.__alloyId2238);
    $.__views.__alloyId2239 = Ti.UI.createLabel({
=======
        id: "__alloyId2011"
    });
    $.__views.__alloyId2010.add($.__views.__alloyId2011);
    $.__views.__alloyId2012 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId2012"
    });
    $.__views.__alloyId2010.add($.__views.__alloyId2012);
=======
<<<<<<< HEAD
        id: "__alloyId2239"
    });
    $.__views.__alloyId2237.add($.__views.__alloyId2239);
=======
        id: "__alloyId2012"
    });
    $.__views.__alloyId2010.add($.__views.__alloyId2012);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId2012"
    });
    $.__views.__alloyId2010.add($.__views.__alloyId2012);
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
    $.__views.__alloyId2236.add($.__views.email);
    $.__views.__alloyId2240 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2240"
    });
    $.__views.scrollView.add($.__views.__alloyId2240);
    $.__views.__alloyId2241 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId2009.add($.__views.email);
    $.__views.__alloyId2013 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
=======
    $.__views.__alloyId2009.add($.__views.email);
    $.__views.__alloyId2013 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
>>>>>>> origin/master
        id: "__alloyId2013"
    });
    $.__views.scrollView.add($.__views.__alloyId2013);
    $.__views.__alloyId2014 = Ti.UI.createView({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        layout: "horizontal",
        height: "50",
        width: "35%",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId2014"
    });
    $.__views.__alloyId2013.add($.__views.__alloyId2014);
    $.__views.__alloyId2015 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2241"
    });
    $.__views.__alloyId2240.add($.__views.__alloyId2241);
    $.__views.__alloyId2242 = Ti.UI.createLabel({
=======
        id: "__alloyId2014"
    });
    $.__views.__alloyId2013.add($.__views.__alloyId2014);
    $.__views.__alloyId2015 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "Mobile No.",
        height: "50",
        color: "black",
        textAlign: "left",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2242"
    });
    $.__views.__alloyId2241.add($.__views.__alloyId2242);
    $.__views.__alloyId2243 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId2015"
    });
    $.__views.__alloyId2014.add($.__views.__alloyId2015);
    $.__views.__alloyId2016 = Ti.UI.createLabel({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId2016"
    });
    $.__views.__alloyId2014.add($.__views.__alloyId2016);
=======
<<<<<<< HEAD
        id: "__alloyId2243"
    });
    $.__views.__alloyId2241.add($.__views.__alloyId2243);
=======
        id: "__alloyId2016"
    });
    $.__views.__alloyId2014.add($.__views.__alloyId2016);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId2016"
    });
    $.__views.__alloyId2014.add($.__views.__alloyId2016);
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
<<<<<<< HEAD
=======
>>>>>>> origin/master
    $.__views.__alloyId2013.add($.__views.mobileNo);
    $.__views.__alloyId2017 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2017"
<<<<<<< HEAD
    });
    $.__views.scrollView.add($.__views.__alloyId2017);
    $.__views.__alloyId2018 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2240.add($.__views.mobileNo);
    $.__views.__alloyId2244 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2244"
    });
    $.__views.scrollView.add($.__views.__alloyId2244);
    $.__views.__alloyId2245 = Ti.UI.createLabel({
=======
    $.__views.__alloyId2013.add($.__views.mobileNo);
    $.__views.__alloyId2017 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2017"
    });
    $.__views.scrollView.add($.__views.__alloyId2017);
    $.__views.__alloyId2018 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    });
    $.__views.scrollView.add($.__views.__alloyId2017);
    $.__views.__alloyId2018 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Message",
        height: "50",
        color: "black",
        textAlign: "left",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2245"
    });
    $.__views.__alloyId2244.add($.__views.__alloyId2245);
    $.__views.__alloyId2246 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId2018"
    });
    $.__views.__alloyId2017.add($.__views.__alloyId2018);
    $.__views.__alloyId2019 = Ti.UI.createLabel({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId2019"
    });
    $.__views.__alloyId2017.add($.__views.__alloyId2019);
=======
<<<<<<< HEAD
        id: "__alloyId2246"
    });
    $.__views.__alloyId2244.add($.__views.__alloyId2246);
=======
        id: "__alloyId2019"
    });
    $.__views.__alloyId2017.add($.__views.__alloyId2019);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId2019"
    });
    $.__views.__alloyId2017.add($.__views.__alloyId2019);
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
<<<<<<< HEAD
    $.__views.__alloyId2020 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2247 = Ti.UI.createLabel({
=======
    $.__views.__alloyId2020 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2020 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "* Required fields",
        height: "50",
        color: "red",
        textAlign: "left",
        left: "10%",
        top: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId2020"
    });
    $.__views.scrollView.add($.__views.__alloyId2020);
    $.__views.__alloyId2021 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2021"
    });
    $.__views.report.add($.__views.__alloyId2021);
    send ? $.__views.__alloyId2021.addEventListener("click", send) : __defers["$.__views.__alloyId2021!click!send"] = true;
    $.__views.__alloyId2022 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2247"
    });
    $.__views.scrollView.add($.__views.__alloyId2247);
    $.__views.__alloyId2248 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2248"
    });
    $.__views.report.add($.__views.__alloyId2248);
    send ? $.__views.__alloyId2248.addEventListener("click", send) : __defers["$.__views.__alloyId2248!click!send"] = true;
    $.__views.__alloyId2249 = Ti.UI.createLabel({
=======
        id: "__alloyId2020"
    });
    $.__views.scrollView.add($.__views.__alloyId2020);
    $.__views.__alloyId2021 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2021"
    });
    $.__views.report.add($.__views.__alloyId2021);
    send ? $.__views.__alloyId2021.addEventListener("click", send) : __defers["$.__views.__alloyId2021!click!send"] = true;
    $.__views.__alloyId2022 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId2020"
    });
    $.__views.scrollView.add($.__views.__alloyId2020);
    $.__views.__alloyId2021 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2021"
    });
    $.__views.report.add($.__views.__alloyId2021);
    send ? $.__views.__alloyId2021.addEventListener("click", send) : __defers["$.__views.__alloyId2021!click!send"] = true;
    $.__views.__alloyId2022 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Send",
        color: "white",
        height: "100%",
        textAlign: "center",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId2022"
    });
    $.__views.__alloyId2021.add($.__views.__alloyId2022);
=======
<<<<<<< HEAD
        id: "__alloyId2249"
    });
    $.__views.__alloyId2248.add($.__views.__alloyId2249);
=======
        id: "__alloyId2022"
    });
    $.__views.__alloyId2021.add($.__views.__alloyId2022);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId2022"
    });
    $.__views.__alloyId2021.add($.__views.__alloyId2022);
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId2227!click!back"] && $.__views.__alloyId2227.addEventListener("click", back);
    __defers["$.__views.subjectLabel!click!showPicker"] && $.__views.subjectLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId2231!click!showPicker"] && $.__views.__alloyId2231.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!subjectType"] && $.__views.picker.addEventListener("change", subjectType);
    __defers["$.__views.__alloyId2248!click!send"] && $.__views.__alloyId2248.addEventListener("click", send);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
    __defers["$.__views.__alloyId2000!click!back"] && $.__views.__alloyId2000.addEventListener("click", back);
    __defers["$.__views.subjectLabel!click!showPicker"] && $.__views.subjectLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId2004!click!showPicker"] && $.__views.__alloyId2004.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!subjectType"] && $.__views.picker.addEventListener("change", subjectType);
    __defers["$.__views.__alloyId2021!click!send"] && $.__views.__alloyId2021.addEventListener("click", send);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;