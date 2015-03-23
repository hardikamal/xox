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
    $.__views.__alloyId2171 = Alloy.createController("_header", {
        id: "__alloyId2171",
        __parentSymbol: $.__views.seasonPass
    });
    $.__views.__alloyId2171.setParent($.__views.seasonPass);
    $.__views.__alloyId2172 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2172"
    });
    $.__views.seasonPass.add($.__views.__alloyId2172);
    $.__views.__alloyId2173 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1982 = Alloy.createController("_header", {
        id: "__alloyId1982",
        __parentSymbol: $.__views.seasonPass
    });
    $.__views.__alloyId1982.setParent($.__views.seasonPass);
    $.__views.__alloyId1983 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1983"
    });
    $.__views.seasonPass.add($.__views.__alloyId1983);
    $.__views.__alloyId1984 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Season Pass",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2173"
    });
    $.__views.__alloyId2172.add($.__views.__alloyId2173);
    $.__views.__alloyId2174 = Ti.UI.createImageView({
=======
        id: "__alloyId1984"
    });
    $.__views.__alloyId1983.add($.__views.__alloyId1984);
    $.__views.__alloyId1985 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId2174"
    });
    $.__views.__alloyId2172.add($.__views.__alloyId2174);
    back ? $.__views.__alloyId2174.addEventListener("click", back) : __defers["$.__views.__alloyId2174!click!back"] = true;
=======
        id: "__alloyId1985"
    });
    $.__views.__alloyId1983.add($.__views.__alloyId1985);
    back ? $.__views.__alloyId1985.addEventListener("click", back) : __defers["$.__views.__alloyId1985!click!back"] = true;
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
    $.__views.__alloyId2175 = Ti.UI.createView({
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId2175"
    });
    $.__views.menu.add($.__views.__alloyId2175);
=======
    $.__views.__alloyId1986 = Ti.UI.createView({
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId1986"
    });
    $.__views.menu.add($.__views.__alloyId1986);
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
    $.__views.__alloyId2176 = Ti.UI.createView({
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId2176"
    });
    $.__views.menu.add($.__views.__alloyId2176);
=======
    $.__views.__alloyId1987 = Ti.UI.createView({
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId1987"
    });
    $.__views.menu.add($.__views.__alloyId1987);
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
    var __alloyId2177 = [];
    $.__views.__alloyId2178 = Alloy.createController("seasonPass1", {
        id: "__alloyId2178",
        __parentSymbol: __parentSymbol
    });
    __alloyId2177.push($.__views.__alloyId2178.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId2179 = Alloy.createController("seasonPass2", {
        id: "__alloyId2179",
        __parentSymbol: __parentSymbol
    });
    __alloyId2177.push($.__views.__alloyId2179.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId2180 = Alloy.createController("seasonPass3", {
        id: "__alloyId2180",
        __parentSymbol: __parentSymbol
    });
    __alloyId2177.push($.__views.__alloyId2180.getViewEx({
        recurse: true
    }));
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId2177,
=======
    var __alloyId1988 = [];
    $.__views.__alloyId1989 = Alloy.createController("seasonPass1", {
        id: "__alloyId1989",
        __parentSymbol: __parentSymbol
    });
    __alloyId1988.push($.__views.__alloyId1989.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId1990 = Alloy.createController("seasonPass2", {
        id: "__alloyId1990",
        __parentSymbol: __parentSymbol
    });
    __alloyId1988.push($.__views.__alloyId1990.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId1991 = Alloy.createController("seasonPass3", {
        id: "__alloyId1991",
        __parentSymbol: __parentSymbol
    });
    __alloyId1988.push($.__views.__alloyId1991.getViewEx({
        recurse: true
    }));
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId1988,
>>>>>>> origin/master
        id: "scrollableView",
        showPagingControl: "false",
        scrollingEnabled: "false"
    });
    $.__views.seasonPass.add($.__views.scrollableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
<<<<<<< HEAD
    __defers["$.__views.__alloyId2174!click!back"] && $.__views.__alloyId2174.addEventListener("click", back);
=======
    __defers["$.__views.__alloyId1985!click!back"] && $.__views.__alloyId1985.addEventListener("click", back);
>>>>>>> origin/master
    __defers["$.__views.lbl1!touchend!goSlide"] && $.__views.lbl1.addEventListener("touchend", goSlide);
    __defers["$.__views.lbl2!touchend!goSlide"] && $.__views.lbl2.addEventListener("touchend", goSlide);
    __defers["$.__views.lbl3!touchend!goSlide"] && $.__views.lbl3.addEventListener("touchend", goSlide);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;