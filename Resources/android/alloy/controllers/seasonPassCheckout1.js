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
    $.__views.__alloyId2319 = Alloy.createController("_header", {
        id: "__alloyId2319",
        __parentSymbol: $.__views.seasonPassCheckout1
    });
    $.__views.__alloyId2319.setParent($.__views.seasonPassCheckout1);
    $.__views.__alloyId2320 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2320"
    });
    $.__views.seasonPassCheckout1.add($.__views.__alloyId2320);
    $.__views.__alloyId2321 = Ti.UI.createLabel({
        text: "Season Pass",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2321"
    });
    $.__views.__alloyId2320.add($.__views.__alloyId2321);
    $.__views.__alloyId2322 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2322"
    });
    $.__views.__alloyId2320.add($.__views.__alloyId2322);
    back ? $.__views.__alloyId2322.addEventListener("click", back) : __defers["$.__views.__alloyId2322!click!back"] = true;
    $.__views.__alloyId2323 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId2323"
    });
    $.__views.seasonPassCheckout1.add($.__views.__alloyId2323);
    $.__views.__alloyId2324 = Ti.UI.createLabel({
        text: "Check out",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId2324"
    });
    $.__views.__alloyId2323.add($.__views.__alloyId2324);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.seasonPassCheckout1.add($.__views.scrollView);
    $.__views.__alloyId2325 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId2325"
    });
    $.__views.scrollView.add($.__views.__alloyId2325);
    $.__views.__alloyId2326 = Ti.UI.createLabel({
        text: "Description",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2326"
    });
    $.__views.__alloyId2325.add($.__views.__alloyId2326);
    $.__views.__alloyId2327 = Ti.UI.createLabel({
        text: "Amount",
        backgroundColor: "transparent",
        color: "black",
        right: "0",
        id: "__alloyId2327"
    });
    $.__views.__alloyId2325.add($.__views.__alloyId2327);
    $.__views.__alloyId2328 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "90%",
        id: "__alloyId2328"
    });
    $.__views.scrollView.add($.__views.__alloyId2328);
    $.__views.__alloyId2329 = Ti.UI.createLabel({
        text: "PROMO SP 99D",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2329"
    });
    $.__views.__alloyId2328.add($.__views.__alloyId2329);
    $.__views.__alloyId2330 = Ti.UI.createLabel({
        text: "RM00.00",
        backgroundColor: "transparent",
        color: "black",
        right: "0",
        id: "__alloyId2330"
    });
    $.__views.__alloyId2328.add($.__views.__alloyId2330);
    $.__views.__alloyId2331 = Ti.UI.createLabel({
        text: "Talktime: 0 Minute(s)",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2331"
    });
    $.__views.scrollView.add($.__views.__alloyId2331);
    $.__views.__alloyId2332 = Ti.UI.createLabel({
        text: "Data: 512MB",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2332"
    });
    $.__views.scrollView.add($.__views.__alloyId2332);
    $.__views.__alloyId2333 = Ti.UI.createLabel({
        text: "FREE:",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        top: "20",
        id: "__alloyId2333"
    });
    $.__views.scrollView.add($.__views.__alloyId2333);
    $.__views.__alloyId2334 = Ti.UI.createLabel({
        text: "SMS: 0 Unit(s)",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        bottom: "10",
        id: "__alloyId2334"
    });
    $.__views.scrollView.add($.__views.__alloyId2334);
    $.__views.__alloyId2335 = Ti.UI.createView({
        layout: "vertical",
        height: "100",
        id: "__alloyId2335"
    });
    $.__views.scrollView.add($.__views.__alloyId2335);
    $.__views.__alloyId2336 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId2336"
    });
    $.__views.__alloyId2335.add($.__views.__alloyId2336);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "30",
        borderRadius: "15",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId2336.add($.__views.picker);
    var __alloyId2337 = [];
    $.__views.__alloyId2338 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId2338"
    });
    __alloyId2337.push($.__views.__alloyId2338);
    $.__views.__alloyId2339 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId2339"
    });
    __alloyId2337.push($.__views.__alloyId2339);
    $.__views.__alloyId2340 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId2340"
    });
    __alloyId2337.push($.__views.__alloyId2340);
    $.__views.__alloyId2341 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId2341"
    });
    __alloyId2337.push($.__views.__alloyId2341);
    $.__views.picker.add(__alloyId2337);
    quantity ? $.__views.picker.addEventListener("change", quantity) : __defers["$.__views.picker!change!quantity"] = true;
    $.__views.__alloyId2342 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId2342"
    });
    $.__views.__alloyId2336.add($.__views.__alloyId2342);
    $.__views.__alloyId2343 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "gray",
        id: "__alloyId2343"
    });
    $.__views.scrollView.add($.__views.__alloyId2343);
    $.__views.__alloyId2344 = Ti.UI.createLabel({
        text: "TOTAL PAYMENT",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2344"
    });
    $.__views.__alloyId2343.add($.__views.__alloyId2344);
    $.__views.__alloyId2345 = Ti.UI.createLabel({
        text: "RM00.00",
        backgroundColor: "transparent",
        color: "black",
        right: "5%",
        id: "__alloyId2345"
    });
    $.__views.__alloyId2343.add($.__views.__alloyId2345);
    $.__views.__alloyId2346 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2346"
    });
    $.__views.seasonPassCheckout1.add($.__views.__alloyId2346);
    next ? $.__views.__alloyId2346.addEventListener("click", next) : __defers["$.__views.__alloyId2346!click!next"] = true;
    $.__views.__alloyId2347 = Ti.UI.createLabel({
        text: "Next",
        color: "white",
        id: "__alloyId2347"
    });
    $.__views.__alloyId2346.add($.__views.__alloyId2347);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    var quantity;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId2322!click!back"] && $.__views.__alloyId2322.addEventListener("click", back);
    __defers["$.__views.picker!change!quantity"] && $.__views.picker.addEventListener("change", quantity);
    __defers["$.__views.__alloyId2346!click!next"] && $.__views.__alloyId2346.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;