function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "seasonPass1";
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
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        height: "100%",
        scrollType: "vertical",
        backgroundColor: "#FFFFFF"
    });
    $.__views.scrollView && $.addTopLevelView($.__views.scrollView);
    $.__views.__alloyId1992 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        id: "__alloyId1992"
    });
    $.__views.scrollView.add($.__views.__alloyId1992);
    $.__views.__alloyId1993 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1993"
    });
    $.__views.__alloyId1992.add($.__views.__alloyId1993);
    $.__views.__alloyId1994 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId1994"
    });
    $.__views.__alloyId1993.add($.__views.__alloyId1994);
    $.__views.__alloyId1995 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1995"
    });
    $.__views.__alloyId1994.add($.__views.__alloyId1995);
    $.__views.__alloyId1996 = Ti.UI.createLabel({
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1996"
    });
    $.__views.__alloyId1995.add($.__views.__alloyId1996);
    $.__views.__alloyId1997 = Ti.UI.createLabel({
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1997"
    });
    $.__views.__alloyId1995.add($.__views.__alloyId1997);
    $.__views.__alloyId1998 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId1998"
    });
    $.__views.__alloyId1993.add($.__views.__alloyId1998);
    $.__views.__alloyId1999 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId1999"
    });
    $.__views.__alloyId1998.add($.__views.__alloyId1999);
    $.__views.__alloyId2000 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2000"
    });
    $.__views.__alloyId1999.add($.__views.__alloyId2000);
    $.__views.__alloyId2001 = Ti.UI.createLabel({
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2001"
    });
    $.__views.__alloyId1999.add($.__views.__alloyId2001);
    $.__views.__alloyId2002 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId2002"
    });
    $.__views.__alloyId1992.add($.__views.__alloyId2002);
    $.__views.__alloyId2003 = Ti.UI.createLabel({
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId2003"
    });
    $.__views.__alloyId2002.add($.__views.__alloyId2003);
    $.__views.__alloyId2004 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId2004"
    });
    $.__views.__alloyId1992.add($.__views.__alloyId2004);
    $.__views.__alloyId2005 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2005"
    });
    $.__views.__alloyId2004.add($.__views.__alloyId2005);
    $.__views.__alloyId2006 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2006"
    });
    $.__views.__alloyId2005.add($.__views.__alloyId2006);
    $.__views.__alloyId2007 = Ti.UI.createLabel({
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2007"
    });
    $.__views.__alloyId2005.add($.__views.__alloyId2007);
    $.__views.__alloyId2008 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
        id: "__alloyId2008"
    });
    $.__views.scrollView.add($.__views.__alloyId2008);
    $.__views.__alloyId2009 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2009"
    });
    $.__views.__alloyId2008.add($.__views.__alloyId2009);
    $.__views.__alloyId2010 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2010"
    });
    $.__views.__alloyId2009.add($.__views.__alloyId2010);
    $.__views.__alloyId2011 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2011"
    });
    $.__views.__alloyId2010.add($.__views.__alloyId2011);
    $.__views.__alloyId2012 = Ti.UI.createLabel({
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2012"
    });
    $.__views.__alloyId2011.add($.__views.__alloyId2012);
    $.__views.__alloyId2013 = Ti.UI.createLabel({
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2013"
    });
    $.__views.__alloyId2011.add($.__views.__alloyId2013);
    $.__views.__alloyId2014 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2014"
    });
    $.__views.__alloyId2009.add($.__views.__alloyId2014);
    $.__views.__alloyId2015 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId2015"
    });
    $.__views.__alloyId2014.add($.__views.__alloyId2015);
    $.__views.__alloyId2016 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2016"
    });
    $.__views.__alloyId2015.add($.__views.__alloyId2016);
    $.__views.__alloyId2017 = Ti.UI.createLabel({
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2017"
    });
    $.__views.__alloyId2015.add($.__views.__alloyId2017);
    $.__views.__alloyId2018 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId2018"
    });
    $.__views.__alloyId2008.add($.__views.__alloyId2018);
    $.__views.__alloyId2019 = Ti.UI.createLabel({
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId2019"
    });
    $.__views.__alloyId2018.add($.__views.__alloyId2019);
    $.__views.__alloyId2020 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId2020"
    });
    $.__views.__alloyId2008.add($.__views.__alloyId2020);
    $.__views.__alloyId2021 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2021"
    });
    $.__views.__alloyId2020.add($.__views.__alloyId2021);
    $.__views.__alloyId2022 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2022"
    });
    $.__views.__alloyId2021.add($.__views.__alloyId2022);
    $.__views.__alloyId2023 = Ti.UI.createLabel({
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2023"
    });
    $.__views.__alloyId2021.add($.__views.__alloyId2023);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;