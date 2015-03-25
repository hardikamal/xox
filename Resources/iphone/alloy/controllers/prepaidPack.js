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
        DRAWER.navigation("onlinePurchases", 1);
    }
    function highSpeed(e) {
        console.log("e.value: " + e.value);
    }
    function next() {
        DRAWER.navigation("prepaidPack2", 1);
        console.log("next");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "prepaidPack";
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
    $.__views.prepaidPack = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaidPack"
    });
    $.__views.prepaidPack && $.addTopLevelView($.__views.prepaidPack);
    $.__views.__alloyId1976 = Alloy.createController("_header", {
        id: "__alloyId1976",
        __parentSymbol: $.__views.prepaidPack
    });
    $.__views.__alloyId1976.setParent($.__views.prepaidPack);
    $.__views.__alloyId1977 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1977"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1977);
    $.__views.__alloyId1978 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1978"
    });
    $.__views.__alloyId1977.add($.__views.__alloyId1978);
    $.__views.__alloyId1979 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1979"
    });
    $.__views.__alloyId1977.add($.__views.__alloyId1979);
    back ? $.__views.__alloyId1979.addEventListener("click", back) : __defers["$.__views.__alloyId1979!click!back"] = true;
    $.__views.__alloyId1980 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1980"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1980);
    $.__views.__alloyId1981 = Ti.UI.createLabel({
        text: "Step 1 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1981"
    });
    $.__views.__alloyId1980.add($.__views.__alloyId1981);
    $.__views.__alloyId1982 = Ti.UI.createLabel({
        text: "Ordering",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId1982"
    });
    $.__views.__alloyId1980.add($.__views.__alloyId1982);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.prepaidPack.add($.__views.scrollView);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "50",
        top: "10"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId1983 = Ti.UI.createLabel({
        text: "Sim Type",
        color: "black",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId1983"
    });
    $.__views.contentView.add($.__views.__alloyId1983);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
        width: "70%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.simLabel = Ti.UI.createLabel({
        id: "simLabel",
        height: "30",
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "5",
        borderColor: "#F2F2F2",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.simLabel);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        height: Ti.UI.SIZE,
        width: "100%",
        top: "10",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "true"
    });
    $.__views.pickerContentView.add($.__views.picker);
    var __alloyId1984 = [];
    $.__views.__alloyId1985 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId1985"
    });
    __alloyId1984.push($.__views.__alloyId1985);
    $.__views.__alloyId1986 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId1986"
    });
    __alloyId1984.push($.__views.__alloyId1986);
    $.__views.__alloyId1987 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId1987"
    });
    __alloyId1984.push($.__views.__alloyId1987);
    $.__views.picker.add(__alloyId1984);
    $.__views.__alloyId1988 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1988"
    });
    $.__views.scrollView.add($.__views.__alloyId1988);
    $.__views.__alloyId1989 = Ti.UI.createLabel({
        text: "Package",
        color: "black",
        height: "50",
        width: "30%",
        id: "__alloyId1989"
    });
    $.__views.__alloyId1988.add($.__views.__alloyId1989);
    $.__views.__alloyId1990 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "70%",
        id: "__alloyId1990"
    });
    $.__views.__alloyId1988.add($.__views.__alloyId1990);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
    $.__views.__alloyId1990.add($.__views.switch1);
    highSpeed ? $.__views.switch1.addEventListener("change", highSpeed) : __defers["$.__views.switch1!change!highSpeed"] = true;
    $.__views.__alloyId1991 = Ti.UI.createLabel({
        text: "Highspeed Internet",
        color: "black",
        height: "50",
        width: "auto",
        left: "10",
        id: "__alloyId1991"
    });
    $.__views.__alloyId1990.add($.__views.__alloyId1991);
    $.__views.__alloyId1992 = Ti.UI.createView({
        layout: "vertical",
        height: "130",
        id: "__alloyId1992"
    });
    $.__views.scrollView.add($.__views.__alloyId1992);
    $.__views.__alloyId1993 = Ti.UI.createLabel({
        text: "Top Up Voucher (Optional)*",
        color: "black",
        height: "30",
        left: "0",
        id: "__alloyId1993"
    });
    $.__views.__alloyId1992.add($.__views.__alloyId1993);
    $.__views.__alloyId1994 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1994"
    });
    $.__views.__alloyId1992.add($.__views.__alloyId1994);
    $.__views.__alloyId1995 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1995"
    });
    $.__views.__alloyId1994.add($.__views.__alloyId1995);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2",
        height: "50"
    });
    $.__views.__alloyId1995.add($.__views.switch2);
    $.__views.__alloyId1996 = Ti.UI.createLabel({
        text: "RM10",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId1996"
    });
    $.__views.__alloyId1995.add($.__views.__alloyId1996);
    $.__views.__alloyId1997 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1997"
    });
    $.__views.__alloyId1994.add($.__views.__alloyId1997);
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3",
        height: "50"
    });
    $.__views.__alloyId1997.add($.__views.switch3);
    $.__views.__alloyId1998 = Ti.UI.createLabel({
        text: "RM30",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId1998"
    });
    $.__views.__alloyId1997.add($.__views.__alloyId1998);
    $.__views.__alloyId1999 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1999"
    });
    $.__views.__alloyId1992.add($.__views.__alloyId1999);
    $.__views.__alloyId2000 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId2000"
    });
    $.__views.__alloyId1999.add($.__views.__alloyId2000);
    $.__views.switch4 = Ti.UI.createSwitch({
        value: false,
        id: "switch4",
        height: "50"
    });
    $.__views.__alloyId2000.add($.__views.switch4);
    $.__views.__alloyId2001 = Ti.UI.createLabel({
        text: "RM50",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId2001"
    });
    $.__views.__alloyId2000.add($.__views.__alloyId2001);
    $.__views.__alloyId2002 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId2002"
    });
    $.__views.__alloyId1999.add($.__views.__alloyId2002);
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5",
        height: "50"
    });
    $.__views.__alloyId2002.add($.__views.switch5);
    $.__views.__alloyId2003 = Ti.UI.createLabel({
        text: "None",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId2003"
    });
    $.__views.__alloyId2002.add($.__views.__alloyId2003);
    $.__views.__alloyId2004 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        id: "__alloyId2004"
    });
    $.__views.scrollView.add($.__views.__alloyId2004);
    $.__views.__alloyId2005 = Ti.UI.createLabel({
        text: "Number Selection",
        color: "black",
        height: "30",
        left: "0",
        id: "__alloyId2005"
    });
    $.__views.__alloyId2004.add($.__views.__alloyId2005);
    $.__views.__alloyId2006 = Ti.UI.createTextField({
        height: "30",
        width: Ti.UI.FILL,
        top: "10",
        borderRadius: "5",
        color: "black",
        borderColor: "#F2F2F2",
        id: "__alloyId2006"
    });
    $.__views.__alloyId2004.add($.__views.__alloyId2006);
    $.__views.__alloyId2007 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2007"
    });
    $.__views.scrollView.add($.__views.__alloyId2007);
    $.__views.__alloyId2008 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId2008"
    });
    $.__views.__alloyId2007.add($.__views.__alloyId2008);
    $.__views.switch6 = Ti.UI.createSwitch({
        value: false,
        id: "switch6",
        height: "50"
    });
    $.__views.__alloyId2008.add($.__views.switch6);
    $.__views.__alloyId2009 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId2009"
    });
    $.__views.__alloyId2008.add($.__views.__alloyId2009);
    $.__views.switch7 = Ti.UI.createSwitch({
        value: false,
        id: "switch7",
        height: "50"
    });
    $.__views.__alloyId2008.add($.__views.switch7);
    $.__views.__alloyId2010 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId2010"
    });
    $.__views.__alloyId2008.add($.__views.__alloyId2010);
    $.__views.__alloyId2011 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2011"
    });
    $.__views.scrollView.add($.__views.__alloyId2011);
    $.__views.__alloyId2012 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId2012"
    });
    $.__views.__alloyId2011.add($.__views.__alloyId2012);
    $.__views.switch8 = Ti.UI.createSwitch({
        value: false,
        id: "switch8",
        height: "50"
    });
    $.__views.__alloyId2012.add($.__views.switch8);
    $.__views.__alloyId2013 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId2013"
    });
    $.__views.__alloyId2012.add($.__views.__alloyId2013);
    $.__views.switch9 = Ti.UI.createSwitch({
        value: false,
        id: "switch9",
        height: "50"
    });
    $.__views.__alloyId2012.add($.__views.switch9);
    $.__views.__alloyId2014 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId2014"
    });
    $.__views.__alloyId2012.add($.__views.__alloyId2014);
    $.__views.__alloyId2015 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2015"
    });
    $.__views.scrollView.add($.__views.__alloyId2015);
    $.__views.__alloyId2016 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId2016"
    });
    $.__views.__alloyId2015.add($.__views.__alloyId2016);
    $.__views.switch10 = Ti.UI.createSwitch({
        value: false,
        id: "switch10",
        height: "50"
    });
    $.__views.__alloyId2016.add($.__views.switch10);
    $.__views.__alloyId2017 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId2017"
    });
    $.__views.__alloyId2016.add($.__views.__alloyId2017);
    $.__views.switch11 = Ti.UI.createSwitch({
        value: false,
        id: "switch11",
        height: "50"
    });
    $.__views.__alloyId2016.add($.__views.switch11);
    $.__views.__alloyId2018 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId2018"
    });
    $.__views.__alloyId2016.add($.__views.__alloyId2018);
    $.__views.__alloyId2019 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2019"
    });
    $.__views.scrollView.add($.__views.__alloyId2019);
    $.__views.__alloyId2020 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId2020"
    });
    $.__views.__alloyId2019.add($.__views.__alloyId2020);
    $.__views.switch12 = Ti.UI.createSwitch({
        value: false,
        id: "switch12",
        height: "50"
    });
    $.__views.__alloyId2020.add($.__views.switch12);
    $.__views.__alloyId2021 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId2021"
    });
    $.__views.__alloyId2020.add($.__views.__alloyId2021);
    $.__views.switch13 = Ti.UI.createSwitch({
        value: false,
        id: "switch13",
        height: "50"
    });
    $.__views.__alloyId2020.add($.__views.switch13);
    $.__views.__alloyId2022 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId2022"
    });
    $.__views.__alloyId2020.add($.__views.__alloyId2022);
    $.__views.__alloyId2023 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2023"
    });
    $.__views.prepaidPack.add($.__views.__alloyId2023);
    next ? $.__views.__alloyId2023.addEventListener("click", next) : __defers["$.__views.__alloyId2023!click!next"] = true;
    $.__views.__alloyId2024 = Ti.UI.createLabel({
        text: "NEXT",
        color: "white",
        id: "__alloyId2024"
    });
    $.__views.__alloyId2023.add($.__views.__alloyId2024);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
        $.switch1.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch2.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch3.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch4.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch5.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch6.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch7.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch8.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch9.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch10.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch11.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch12.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch13.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    }
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId1979!click!back"] && $.__views.__alloyId1979.addEventListener("click", back);
    __defers["$.__views.switch1!change!highSpeed"] && $.__views.switch1.addEventListener("change", highSpeed);
    __defers["$.__views.__alloyId2023!click!next"] && $.__views.__alloyId2023.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;