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
    this.__controllerPath = "seasonPass3";
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
    $.__views.__alloyId2056 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        id: "__alloyId2056"
    });
    $.__views.scrollView.add($.__views.__alloyId2056);
    $.__views.__alloyId2057 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2057"
    });
    $.__views.__alloyId2056.add($.__views.__alloyId2057);
    $.__views.__alloyId2058 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2058"
    });
    $.__views.__alloyId2057.add($.__views.__alloyId2058);
    $.__views.__alloyId2059 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2059"
    });
    $.__views.__alloyId2058.add($.__views.__alloyId2059);
    $.__views.__alloyId2060 = Ti.UI.createLabel({
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2060"
    });
    $.__views.__alloyId2059.add($.__views.__alloyId2060);
    $.__views.__alloyId2061 = Ti.UI.createLabel({
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2061"
    });
    $.__views.__alloyId2059.add($.__views.__alloyId2061);
    $.__views.__alloyId2062 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2062"
    });
    $.__views.__alloyId2057.add($.__views.__alloyId2062);
    $.__views.__alloyId2063 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId2063"
    });
    $.__views.__alloyId2062.add($.__views.__alloyId2063);
    $.__views.__alloyId2064 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2064"
    });
    $.__views.__alloyId2063.add($.__views.__alloyId2064);
    $.__views.__alloyId2065 = Ti.UI.createLabel({
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2065"
    });
    $.__views.__alloyId2063.add($.__views.__alloyId2065);
    $.__views.__alloyId2066 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId2066"
    });
    $.__views.__alloyId2056.add($.__views.__alloyId2066);
    $.__views.__alloyId2067 = Ti.UI.createLabel({
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId2067"
    });
    $.__views.__alloyId2066.add($.__views.__alloyId2067);
    $.__views.__alloyId2068 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId2068"
    });
    $.__views.__alloyId2056.add($.__views.__alloyId2068);
    $.__views.__alloyId2069 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2069"
    });
    $.__views.__alloyId2068.add($.__views.__alloyId2069);
    $.__views.__alloyId2070 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2070"
    });
    $.__views.__alloyId2069.add($.__views.__alloyId2070);
    $.__views.__alloyId2071 = Ti.UI.createLabel({
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2071"
    });
    $.__views.__alloyId2069.add($.__views.__alloyId2071);
    $.__views.__alloyId2072 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
        id: "__alloyId2072"
    });
    $.__views.scrollView.add($.__views.__alloyId2072);
    $.__views.__alloyId2073 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2073"
    });
    $.__views.__alloyId2072.add($.__views.__alloyId2073);
    $.__views.__alloyId2074 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2074"
    });
    $.__views.__alloyId2073.add($.__views.__alloyId2074);
    $.__views.__alloyId2075 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2075"
    });
    $.__views.__alloyId2074.add($.__views.__alloyId2075);
    $.__views.__alloyId2076 = Ti.UI.createLabel({
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2076"
    });
    $.__views.__alloyId2075.add($.__views.__alloyId2076);
    $.__views.__alloyId2077 = Ti.UI.createLabel({
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2077"
    });
    $.__views.__alloyId2075.add($.__views.__alloyId2077);
    $.__views.__alloyId2078 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2078"
    });
    $.__views.__alloyId2073.add($.__views.__alloyId2078);
    $.__views.__alloyId2079 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId2079"
    });
    $.__views.__alloyId2078.add($.__views.__alloyId2079);
    $.__views.__alloyId2080 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2080"
    });
    $.__views.__alloyId2079.add($.__views.__alloyId2080);
    $.__views.__alloyId2081 = Ti.UI.createLabel({
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2081"
    });
    $.__views.__alloyId2079.add($.__views.__alloyId2081);
    $.__views.__alloyId2082 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId2082"
    });
    $.__views.__alloyId2072.add($.__views.__alloyId2082);
    $.__views.__alloyId2083 = Ti.UI.createLabel({
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId2083"
    });
    $.__views.__alloyId2082.add($.__views.__alloyId2083);
    $.__views.__alloyId2084 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId2084"
    });
    $.__views.__alloyId2072.add($.__views.__alloyId2084);
    $.__views.__alloyId2085 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2085"
    });
    $.__views.__alloyId2084.add($.__views.__alloyId2085);
    $.__views.__alloyId2086 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2086"
    });
    $.__views.__alloyId2085.add($.__views.__alloyId2086);
    $.__views.__alloyId2087 = Ti.UI.createLabel({
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2087"
    });
    $.__views.__alloyId2085.add($.__views.__alloyId2087);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;