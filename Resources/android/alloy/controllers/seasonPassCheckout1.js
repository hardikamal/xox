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
        DRAWER.navigation("seasonPass", 1);
    }
    function next() {
        console.log("next");
        DRAWER.navigation("seasonPassCheckout2", 1);
    }
    function quantity(e) {
        console.log("quantity");
        quantity = e.row.title;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "seasonPassCheckout1";
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
    $.__views.seasonPassCheckout1 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "seasonPassCheckout1"
    });
    $.__views.seasonPassCheckout1 && $.addTopLevelView($.__views.seasonPassCheckout1);
    $.__views.__alloyId2277 = Alloy.createController("_header", {
        id: "__alloyId2277",
        __parentSymbol: $.__views.seasonPassCheckout1
    });
    $.__views.__alloyId2277.setParent($.__views.seasonPassCheckout1);
    $.__views.__alloyId2278 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2278"
    });
    $.__views.seasonPassCheckout1.add($.__views.__alloyId2278);
    $.__views.__alloyId2279 = Ti.UI.createLabel({
        text: "Season Pass",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2279"
    });
    $.__views.__alloyId2278.add($.__views.__alloyId2279);
    $.__views.__alloyId2280 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2280"
    });
    $.__views.__alloyId2278.add($.__views.__alloyId2280);
    back ? $.__views.__alloyId2280.addEventListener("click", back) : __defers["$.__views.__alloyId2280!click!back"] = true;
    $.__views.__alloyId2281 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId2281"
    });
    $.__views.seasonPassCheckout1.add($.__views.__alloyId2281);
    $.__views.__alloyId2282 = Ti.UI.createLabel({
        text: "Check out",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId2282"
    });
    $.__views.__alloyId2281.add($.__views.__alloyId2282);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.seasonPassCheckout1.add($.__views.scrollView);
    $.__views.__alloyId2283 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId2283"
    });
    $.__views.scrollView.add($.__views.__alloyId2283);
    $.__views.__alloyId2284 = Ti.UI.createLabel({
        text: "Description",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2284"
    });
    $.__views.__alloyId2283.add($.__views.__alloyId2284);
    $.__views.__alloyId2285 = Ti.UI.createLabel({
        text: "Amount",
        backgroundColor: "transparent",
        color: "black",
        right: "0",
        id: "__alloyId2285"
    });
    $.__views.__alloyId2283.add($.__views.__alloyId2285);
    $.__views.__alloyId2286 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "90%",
        id: "__alloyId2286"
    });
    $.__views.scrollView.add($.__views.__alloyId2286);
    $.__views.__alloyId2287 = Ti.UI.createLabel({
        text: "PROMO SP 99D",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2287"
    });
    $.__views.__alloyId2286.add($.__views.__alloyId2287);
    $.__views.__alloyId2288 = Ti.UI.createLabel({
        text: "RM00.00",
        backgroundColor: "transparent",
        color: "black",
        right: "0",
        id: "__alloyId2288"
    });
    $.__views.__alloyId2286.add($.__views.__alloyId2288);
    $.__views.__alloyId2289 = Ti.UI.createLabel({
        text: "Talktime: 0 Minute(s)",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2289"
    });
    $.__views.scrollView.add($.__views.__alloyId2289);
    $.__views.__alloyId2290 = Ti.UI.createLabel({
        text: "Data: 512MB",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2290"
    });
    $.__views.scrollView.add($.__views.__alloyId2290);
    $.__views.__alloyId2291 = Ti.UI.createLabel({
        text: "FREE:",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        top: "20",
        id: "__alloyId2291"
    });
    $.__views.scrollView.add($.__views.__alloyId2291);
    $.__views.__alloyId2292 = Ti.UI.createLabel({
        text: "SMS: 0 Unit(s)",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        bottom: "10",
        id: "__alloyId2292"
    });
    $.__views.scrollView.add($.__views.__alloyId2292);
    $.__views.__alloyId2293 = Ti.UI.createView({
        layout: "vertical",
        height: "100",
        id: "__alloyId2293"
    });
    $.__views.scrollView.add($.__views.__alloyId2293);
    $.__views.__alloyId2294 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId2294"
    });
    $.__views.__alloyId2293.add($.__views.__alloyId2294);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "30",
        borderRadius: "15",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId2294.add($.__views.picker);
    var __alloyId2295 = [];
    $.__views.__alloyId2296 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId2296"
    });
    __alloyId2295.push($.__views.__alloyId2296);
    $.__views.__alloyId2297 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId2297"
    });
    __alloyId2295.push($.__views.__alloyId2297);
    $.__views.__alloyId2298 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId2298"
    });
    __alloyId2295.push($.__views.__alloyId2298);
    $.__views.__alloyId2299 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId2299"
    });
    __alloyId2295.push($.__views.__alloyId2299);
    $.__views.picker.add(__alloyId2295);
    quantity ? $.__views.picker.addEventListener("change", quantity) : __defers["$.__views.picker!change!quantity"] = true;
    $.__views.__alloyId2300 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId2300"
    });
    $.__views.__alloyId2294.add($.__views.__alloyId2300);
    $.__views.__alloyId2301 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "gray",
        id: "__alloyId2301"
    });
    $.__views.scrollView.add($.__views.__alloyId2301);
    $.__views.__alloyId2302 = Ti.UI.createLabel({
        text: "TOTAL PAYMENT",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2302"
    });
    $.__views.__alloyId2301.add($.__views.__alloyId2302);
    $.__views.__alloyId2303 = Ti.UI.createLabel({
        text: "RM00.00",
        backgroundColor: "transparent",
        color: "black",
        right: "5%",
        id: "__alloyId2303"
    });
    $.__views.__alloyId2301.add($.__views.__alloyId2303);
    $.__views.__alloyId2304 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2304"
    });
    $.__views.seasonPassCheckout1.add($.__views.__alloyId2304);
    next ? $.__views.__alloyId2304.addEventListener("click", next) : __defers["$.__views.__alloyId2304!click!next"] = true;
    $.__views.__alloyId2305 = Ti.UI.createLabel({
        text: "Next",
        color: "white",
        id: "__alloyId2305"
    });
    $.__views.__alloyId2304.add($.__views.__alloyId2305);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    var quantity;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId2280!click!back"] && $.__views.__alloyId2280.addEventListener("click", back);
    __defers["$.__views.picker!change!quantity"] && $.__views.picker.addEventListener("change", quantity);
    __defers["$.__views.__alloyId2304!click!next"] && $.__views.__alloyId2304.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;