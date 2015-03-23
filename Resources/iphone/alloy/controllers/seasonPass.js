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
    function goSlide(event) {
        var index = event.source.mod;
        var arrViews = $.scrollableView.getViews();
        switch (index) {
          case "0":
            $.lbl1.backgroundColor = "#FFFFFF";
            $.lbl2.backgroundColor = "#F5F5F5";
            $.lbl3.backgroundColor = "#F5F5F5";
            break;

          case "1":
            $.lbl1.backgroundColor = "#F5F5F5";
            $.lbl2.backgroundColor = "#FFFFFF";
            $.lbl3.backgroundColor = "#F5F5F5";
            break;

          case "2":
            $.lbl1.backgroundColor = "#F5F5F5";
            $.lbl2.backgroundColor = "#F5F5F5";
            $.lbl3.backgroundColor = "#FFFFFF";
        }
        $.scrollableView.scrollToView(arrViews[index]);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "seasonPass";
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
    $.__views.seasonPass = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "seasonPass"
    });
    $.__views.seasonPass && $.addTopLevelView($.__views.seasonPass);
<<<<<<< HEAD
    $.__views.__alloyId1961 = Alloy.createController("_header", {
        id: "__alloyId1961",
=======
<<<<<<< HEAD
    $.__views.__alloyId2144 = Alloy.createController("_header", {
        id: "__alloyId2144",
        __parentSymbol: $.__views.seasonPass
    });
    $.__views.__alloyId2144.setParent($.__views.seasonPass);
    $.__views.__alloyId2145 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2145"
    });
    $.__views.seasonPass.add($.__views.__alloyId2145);
    $.__views.__alloyId2146 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1552 = Alloy.createController("_header", {
        id: "__alloyId1552",
>>>>>>> origin/master
        __parentSymbol: $.__views.seasonPass
    });
    $.__views.__alloyId1961.setParent($.__views.seasonPass);
    $.__views.__alloyId1962 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1962"
    });
<<<<<<< HEAD
    $.__views.seasonPass.add($.__views.__alloyId1962);
    $.__views.__alloyId1963 = Ti.UI.createLabel({
=======
    $.__views.seasonPass.add($.__views.__alloyId1553);
    $.__views.__alloyId1554 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Season Pass",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1963"
    });
    $.__views.__alloyId1962.add($.__views.__alloyId1963);
    $.__views.__alloyId1964 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId2146"
    });
    $.__views.__alloyId2145.add($.__views.__alloyId2146);
    $.__views.__alloyId2147 = Ti.UI.createImageView({
=======
        id: "__alloyId1554"
    });
    $.__views.__alloyId1553.add($.__views.__alloyId1554);
    $.__views.__alloyId1555 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId1964"
    });
    $.__views.__alloyId1962.add($.__views.__alloyId1964);
    back ? $.__views.__alloyId1964.addEventListener("click", back) : __defers["$.__views.__alloyId1964!click!back"] = true;
=======
<<<<<<< HEAD
        id: "__alloyId2147"
    });
    $.__views.__alloyId2145.add($.__views.__alloyId2147);
    back ? $.__views.__alloyId2147.addEventListener("click", back) : __defers["$.__views.__alloyId2147!click!back"] = true;
=======
        id: "__alloyId1555"
    });
    $.__views.__alloyId1553.add($.__views.__alloyId1555);
    back ? $.__views.__alloyId1555.addEventListener("click", back) : __defers["$.__views.__alloyId1555!click!back"] = true;
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.menu = Ti.UI.createView({
        id: "menu",
        layout: "horizontal",
        height: "50",
        width: "100%"
    });
    $.__views.seasonPass.add($.__views.menu);
    $.__views.lbl1 = Ti.UI.createLabel({
        text: "VOICE PACKAGE",
        id: "lbl1",
        mod: "0",
        height: "100%",
        width: "33%",
        textAlign: "center",
        backgroundColor: "#FFFFFF",
        color: "black"
    });
    $.__views.menu.add($.__views.lbl1);
    goSlide ? $.__views.lbl1.addEventListener("touchend", goSlide) : __defers["$.__views.lbl1!touchend!goSlide"] = true;
<<<<<<< HEAD
    $.__views.__alloyId1965 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId2148 = Ti.UI.createView({
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId2148"
    });
    $.__views.menu.add($.__views.__alloyId2148);
=======
    $.__views.__alloyId1556 = Ti.UI.createView({
>>>>>>> origin/master
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId1965"
    });
<<<<<<< HEAD
    $.__views.menu.add($.__views.__alloyId1965);
=======
    $.__views.menu.add($.__views.__alloyId1556);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.lbl2 = Ti.UI.createLabel({
        text: "DATA PACKAGE",
        id: "lbl2",
        mod: "1",
        height: "100%",
        width: "33%",
        textAlign: "center",
        backgroundColor: "#F5F5F5",
        color: "black"
    });
    $.__views.menu.add($.__views.lbl2);
    goSlide ? $.__views.lbl2.addEventListener("touchend", goSlide) : __defers["$.__views.lbl2!touchend!goSlide"] = true;
<<<<<<< HEAD
    $.__views.__alloyId1966 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId2149 = Ti.UI.createView({
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId2149"
    });
    $.__views.menu.add($.__views.__alloyId2149);
=======
    $.__views.__alloyId1557 = Ti.UI.createView({
>>>>>>> origin/master
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId1966"
    });
<<<<<<< HEAD
    $.__views.menu.add($.__views.__alloyId1966);
=======
    $.__views.menu.add($.__views.__alloyId1557);
>>>>>>> origin/master
>>>>>>> origin/master
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
<<<<<<< HEAD
    var __alloyId1967 = [];
    $.__views.__alloyId1968 = Alloy.createController("seasonPass1", {
        id: "__alloyId1968",
=======
<<<<<<< HEAD
    var __alloyId2150 = [];
    $.__views.__alloyId2151 = Alloy.createController("seasonPass1", {
        id: "__alloyId2151",
        __parentSymbol: __parentSymbol
    });
    __alloyId2150.push($.__views.__alloyId2151.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId2152 = Alloy.createController("seasonPass2", {
        id: "__alloyId2152",
        __parentSymbol: __parentSymbol
    });
    __alloyId2150.push($.__views.__alloyId2152.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId2153 = Alloy.createController("seasonPass3", {
        id: "__alloyId2153",
        __parentSymbol: __parentSymbol
    });
    __alloyId2150.push($.__views.__alloyId2153.getViewEx({
        recurse: true
    }));
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId2150,
=======
    var __alloyId1558 = [];
    $.__views.__alloyId1559 = Alloy.createController("seasonPass1", {
        id: "__alloyId1559",
>>>>>>> origin/master
        __parentSymbol: __parentSymbol
    });
    __alloyId1967.push($.__views.__alloyId1968.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId1969 = Alloy.createController("seasonPass2", {
        id: "__alloyId1969",
        __parentSymbol: __parentSymbol
    });
    __alloyId1967.push($.__views.__alloyId1969.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId1970 = Alloy.createController("seasonPass3", {
        id: "__alloyId1970",
        __parentSymbol: __parentSymbol
    });
    __alloyId1967.push($.__views.__alloyId1970.getViewEx({
        recurse: true
    }));
    $.__views.scrollableView = Ti.UI.createScrollableView({
<<<<<<< HEAD
        views: __alloyId1967,
=======
        views: __alloyId1558,
>>>>>>> origin/master
>>>>>>> origin/master
        id: "scrollableView",
        showPagingControl: "false",
        scrollingEnabled: "false"
    });
    $.__views.seasonPass.add($.__views.scrollableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
<<<<<<< HEAD
    __defers["$.__views.__alloyId1964!click!back"] && $.__views.__alloyId1964.addEventListener("click", back);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId2147!click!back"] && $.__views.__alloyId2147.addEventListener("click", back);
=======
    __defers["$.__views.__alloyId1555!click!back"] && $.__views.__alloyId1555.addEventListener("click", back);
>>>>>>> origin/master
>>>>>>> origin/master
    __defers["$.__views.lbl1!touchend!goSlide"] && $.__views.lbl1.addEventListener("touchend", goSlide);
    __defers["$.__views.lbl2!touchend!goSlide"] && $.__views.lbl2.addEventListener("touchend", goSlide);
    __defers["$.__views.lbl3!touchend!goSlide"] && $.__views.lbl3.addEventListener("touchend", goSlide);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;