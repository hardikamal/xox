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
    $.__views.__alloyId757 = Alloy.createController("_header", {
        id: "__alloyId757",
        __parentSymbol: $.__views.seasonPass
    });
    $.__views.__alloyId757.setParent($.__views.seasonPass);
    $.__views.__alloyId758 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId758"
    });
    $.__views.seasonPass.add($.__views.__alloyId758);
    $.__views.__alloyId759 = Ti.UI.createLabel({
=======
    $.__views.__alloyId598 = Alloy.createController("_header", {
        id: "__alloyId598",
        __parentSymbol: $.__views.seasonPass
    });
    $.__views.__alloyId598.setParent($.__views.seasonPass);
    $.__views.__alloyId599 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId599"
    });
    $.__views.seasonPass.add($.__views.__alloyId599);
    $.__views.__alloyId600 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Season Pass",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId759"
    });
    $.__views.__alloyId758.add($.__views.__alloyId759);
    $.__views.__alloyId760 = Ti.UI.createImageView({
=======
        id: "__alloyId600"
    });
    $.__views.__alloyId599.add($.__views.__alloyId600);
    $.__views.__alloyId601 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId760"
    });
    $.__views.__alloyId758.add($.__views.__alloyId760);
    back ? $.__views.__alloyId760.addEventListener("click", back) : __defers["$.__views.__alloyId760!click!back"] = true;
=======
        id: "__alloyId601"
    });
    $.__views.__alloyId599.add($.__views.__alloyId601);
    back ? $.__views.__alloyId601.addEventListener("click", back) : __defers["$.__views.__alloyId601!click!back"] = true;
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
    $.__views.__alloyId761 = Ti.UI.createView({
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId761"
    });
    $.__views.menu.add($.__views.__alloyId761);
=======
    $.__views.__alloyId602 = Ti.UI.createView({
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId602"
    });
    $.__views.menu.add($.__views.__alloyId602);
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
    $.__views.__alloyId762 = Ti.UI.createView({
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId762"
    });
    $.__views.menu.add($.__views.__alloyId762);
=======
    $.__views.__alloyId603 = Ti.UI.createView({
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId603"
    });
    $.__views.menu.add($.__views.__alloyId603);
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
    var __alloyId763 = [];
    $.__views.__alloyId764 = Alloy.createController("seasonPass1", {
        id: "__alloyId764",
        __parentSymbol: __parentSymbol
    });
    __alloyId763.push($.__views.__alloyId764.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId765 = Alloy.createController("seasonPass2", {
        id: "__alloyId765",
        __parentSymbol: __parentSymbol
    });
    __alloyId763.push($.__views.__alloyId765.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId766 = Alloy.createController("seasonPass3", {
        id: "__alloyId766",
        __parentSymbol: __parentSymbol
    });
    __alloyId763.push($.__views.__alloyId766.getViewEx({
        recurse: true
    }));
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId763,
=======
    var __alloyId604 = [];
    $.__views.__alloyId605 = Alloy.createController("seasonPass1", {
        id: "__alloyId605",
        __parentSymbol: __parentSymbol
    });
    __alloyId604.push($.__views.__alloyId605.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId606 = Alloy.createController("seasonPass2", {
        id: "__alloyId606",
        __parentSymbol: __parentSymbol
    });
    __alloyId604.push($.__views.__alloyId606.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId607 = Alloy.createController("seasonPass3", {
        id: "__alloyId607",
        __parentSymbol: __parentSymbol
    });
    __alloyId604.push($.__views.__alloyId607.getViewEx({
        recurse: true
    }));
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId604,
>>>>>>> origin/master
        id: "scrollableView",
        showPagingControl: "false",
        scrollingEnabled: "false"
    });
    $.__views.seasonPass.add($.__views.scrollableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
<<<<<<< HEAD
    __defers["$.__views.__alloyId760!click!back"] && $.__views.__alloyId760.addEventListener("click", back);
=======
    __defers["$.__views.__alloyId601!click!back"] && $.__views.__alloyId601.addEventListener("click", back);
>>>>>>> origin/master
    __defers["$.__views.lbl1!touchend!goSlide"] && $.__views.lbl1.addEventListener("touchend", goSlide);
    __defers["$.__views.lbl2!touchend!goSlide"] && $.__views.lbl2.addEventListener("touchend", goSlide);
    __defers["$.__views.lbl3!touchend!goSlide"] && $.__views.lbl3.addEventListener("touchend", goSlide);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;