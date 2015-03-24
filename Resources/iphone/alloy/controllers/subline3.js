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
        DRAWER.navigation("subline", 1);
    }
    function goSlide(event) {
        var index = event.source.mod;
        var arrViews = $.scrollableView.getViews();
        switch (index) {
          case "0":
            $.lbl1.backgroundColor = "#FFFFFF";
            $.lbl2.backgroundColor = "#F5F5F5";
            break;

          case "1":
            $.lbl1.backgroundColor = "#F5F5F5";
            $.lbl2.backgroundColor = "#FFFFFF";
        }
        $.scrollableView.scrollToView(arrViews[index]);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "subline3";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
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
    $.__views.subline3 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "subline3"
    });
<<<<<<< HEAD:Resources/iphone/alloy/controllers/seasonPass.js
    $.__views.seasonPass && $.addTopLevelView($.__views.seasonPass);
    $.__views.__alloyId2098 = Alloy.createController("_header", {
        id: "__alloyId2098",
        __parentSymbol: $.__views.seasonPass
    });
    $.__views.__alloyId2098.setParent($.__views.seasonPass);
    $.__views.__alloyId2099 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2099"
    });
    $.__views.seasonPass.add($.__views.__alloyId2099);
    $.__views.__alloyId2100 = Ti.UI.createLabel({
        text: "Season Pass",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2100"
    });
    $.__views.__alloyId2099.add($.__views.__alloyId2100);
    $.__views.__alloyId2101 = Ti.UI.createImageView({
=======
    $.__views.subline3 && $.addTopLevelView($.__views.subline3);
    $.__views.__alloyId2618 = Alloy.createController("_header", {
        id: "__alloyId2618",
        __parentSymbol: $.__views.subline3
    });
    $.__views.__alloyId2618.setParent($.__views.subline3);
    $.__views.__alloyId2619 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2619"
    });
    $.__views.subline3.add($.__views.__alloyId2619);
    $.__views.__alloyId2620 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2620"
    });
    $.__views.__alloyId2619.add($.__views.__alloyId2620);
    $.__views.__alloyId2621 = Ti.UI.createImageView({
>>>>>>> 24/3/2015 onlinePurchase Subpages:Resources/iphone/alloy/controllers/subline3.js
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD:Resources/iphone/alloy/controllers/seasonPass.js
        id: "__alloyId2101"
    });
    $.__views.__alloyId2099.add($.__views.__alloyId2101);
    back ? $.__views.__alloyId2101.addEventListener("click", back) : __defers["$.__views.__alloyId2101!click!back"] = true;
=======
        id: "__alloyId2621"
    });
    $.__views.__alloyId2619.add($.__views.__alloyId2621);
    back ? $.__views.__alloyId2621.addEventListener("click", back) : __defers["$.__views.__alloyId2621!click!back"] = true;
>>>>>>> 24/3/2015 onlinePurchase Subpages:Resources/iphone/alloy/controllers/subline3.js
    $.__views.menu = Ti.UI.createView({
        id: "menu",
        layout: "horizontal",
        height: "50",
        width: "100%"
    });
    $.__views.subline3.add($.__views.menu);
    $.__views.lbl1 = Ti.UI.createLabel({
        text: "Account Details",
        id: "lbl1",
        mod: "0",
        height: "100%",
        width: "49.5%",
        textAlign: "center",
        backgroundColor: "#FFFFFF",
        color: "black"
    });
    $.__views.menu.add($.__views.lbl1);
    goSlide ? $.__views.lbl1.addEventListener("touchend", goSlide) : __defers["$.__views.lbl1!touchend!goSlide"] = true;
<<<<<<< HEAD:Resources/iphone/alloy/controllers/seasonPass.js
    $.__views.__alloyId2102 = Ti.UI.createView({
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId2102"
    });
    $.__views.menu.add($.__views.__alloyId2102);
=======
    $.__views.__alloyId2622 = Ti.UI.createView({
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "1%",
        id: "__alloyId2622"
    });
    $.__views.menu.add($.__views.__alloyId2622);
>>>>>>> 24/3/2015 onlinePurchase Subpages:Resources/iphone/alloy/controllers/subline3.js
    $.__views.lbl2 = Ti.UI.createLabel({
        text: "My Profile",
        id: "lbl2",
        mod: "1",
        height: "100%",
        width: "49.5%",
        textAlign: "center",
        backgroundColor: "#F5F5F5",
        color: "black"
    });
    $.__views.menu.add($.__views.lbl2);
    goSlide ? $.__views.lbl2.addEventListener("touchend", goSlide) : __defers["$.__views.lbl2!touchend!goSlide"] = true;
<<<<<<< HEAD:Resources/iphone/alloy/controllers/seasonPass.js
    $.__views.__alloyId2103 = Ti.UI.createView({
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId2103"
    });
    $.__views.menu.add($.__views.__alloyId2103);
    $.__views.lbl3 = Ti.UI.createLabel({
        text: "COMBO PACKAGE",
        id: "lbl3",
        mod: "2",
        height: "100%",
        width: "33%",
        textAlign: "center",
        backgroundColor: "#F5F5F5",
        color: "black"
    });
    $.__views.menu.add($.__views.lbl3);
    goSlide ? $.__views.lbl3.addEventListener("touchend", goSlide) : __defers["$.__views.lbl3!touchend!goSlide"] = true;
    var __alloyId2104 = [];
    $.__views.__alloyId2105 = Alloy.createController("seasonPass1", {
        id: "__alloyId2105",
        __parentSymbol: __parentSymbol
    });
    __alloyId2104.push($.__views.__alloyId2105.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId2106 = Alloy.createController("seasonPass2", {
        id: "__alloyId2106",
        __parentSymbol: __parentSymbol
    });
    __alloyId2104.push($.__views.__alloyId2106.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId2107 = Alloy.createController("seasonPass3", {
        id: "__alloyId2107",
        __parentSymbol: __parentSymbol
    });
    __alloyId2104.push($.__views.__alloyId2107.getViewEx({
        recurse: true
    }));
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId2104,
=======
    var __alloyId2623 = [];
    $.__views.__alloyId2624 = Alloy.createController("sublineDetails1", {
        id: "__alloyId2624",
        __parentSymbol: __parentSymbol
    });
    __alloyId2623.push($.__views.__alloyId2624.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId2625 = Alloy.createController("sublineDetails2", {
        id: "__alloyId2625",
        __parentSymbol: __parentSymbol
    });
    __alloyId2623.push($.__views.__alloyId2625.getViewEx({
        recurse: true
    }));
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId2623,
>>>>>>> 24/3/2015 onlinePurchase Subpages:Resources/iphone/alloy/controllers/subline3.js
        id: "scrollableView",
        showPagingControl: "false",
        scrollingEnabled: "false"
    });
    $.__views.subline3.add($.__views.scrollableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
<<<<<<< HEAD:Resources/iphone/alloy/controllers/seasonPass.js
    __defers["$.__views.__alloyId2101!click!back"] && $.__views.__alloyId2101.addEventListener("click", back);
=======
    __defers["$.__views.__alloyId2621!click!back"] && $.__views.__alloyId2621.addEventListener("click", back);
>>>>>>> 24/3/2015 onlinePurchase Subpages:Resources/iphone/alloy/controllers/subline3.js
    __defers["$.__views.lbl1!touchend!goSlide"] && $.__views.lbl1.addEventListener("touchend", goSlide);
    __defers["$.__views.lbl2!touchend!goSlide"] && $.__views.lbl2.addEventListener("touchend", goSlide);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;