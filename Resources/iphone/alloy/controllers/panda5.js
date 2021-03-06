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
        DRAWER.navigation("panda4", 1);
    }
    function download() {
        console.log("download");
        DRAWER.navigation("home", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "panda5";
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
    $.__views.panda5 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "panda5"
    });
    $.__views.panda5 && $.addTopLevelView($.__views.panda5);
    $.__views.__alloyId1588 = Alloy.createController("_header", {
        id: "__alloyId1588",
        __parentSymbol: $.__views.panda5
    });
    $.__views.__alloyId1588.setParent($.__views.panda5);
    $.__views.__alloyId1589 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1589"
    });
    $.__views.panda5.add($.__views.__alloyId1589);
    $.__views.__alloyId1590 = Ti.UI.createLabel({
        text: "1600 PANDAS SIM PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1590"
    });
    $.__views.__alloyId1589.add($.__views.__alloyId1590);
    $.__views.__alloyId1591 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1591"
    });
    $.__views.__alloyId1589.add($.__views.__alloyId1591);
    back ? $.__views.__alloyId1591.addEventListener("click", back) : __defers["$.__views.__alloyId1591!click!back"] = true;
    $.__views.__alloyId1592 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1592"
    });
    $.__views.panda5.add($.__views.__alloyId1592);
    $.__views.__alloyId1593 = Ti.UI.createLabel({
        text: "Step 4 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1593"
    });
    $.__views.__alloyId1592.add($.__views.__alloyId1593);
    $.__views.__alloyId1594 = Ti.UI.createLabel({
        text: "Complete",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId1594"
    });
    $.__views.__alloyId1592.add($.__views.__alloyId1594);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "white",
        width: "90%"
    });
    $.__views.panda5.add($.__views.scrollView);
    $.__views.__alloyId1595 = Ti.UI.createLabel({
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId1595"
    });
    $.__views.scrollView.add($.__views.__alloyId1595);
    $.__views.__alloyId1596 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1596"
    });
    $.__views.panda5.add($.__views.__alloyId1596);
    download ? $.__views.__alloyId1596.addEventListener("click", download) : __defers["$.__views.__alloyId1596!click!download"] = true;
    $.__views.__alloyId1597 = Ti.UI.createLabel({
        text: "DOWNLOAD TAX INVOICE",
        color: "white",
        id: "__alloyId1597"
    });
    $.__views.__alloyId1596.add($.__views.__alloyId1597);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    __defers["$.__views.__alloyId1591!click!back"] && $.__views.__alloyId1591.addEventListener("click", back);
    __defers["$.__views.__alloyId1596!click!download"] && $.__views.__alloyId1596.addEventListener("click", download);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;