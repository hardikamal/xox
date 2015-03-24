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
        DRAWER.navigation("myAccount", 1);
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
    $.__views.__alloyId2213 = Alloy.createController("_header", {
        id: "__alloyId2213",
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId2171 = Alloy.createController("_header", {
        id: "__alloyId2171",
=======
    $.__views.__alloyId2213 = Alloy.createController("_header", {
        id: "__alloyId2213",
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        __parentSymbol: $.__views.seasonPass
    });
    $.__views.__alloyId2213.setParent($.__views.seasonPass);
    $.__views.__alloyId2214 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2214"
    });
<<<<<<< HEAD
    $.__views.seasonPass.add($.__views.__alloyId2214);
    $.__views.__alloyId2215 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId593 = Alloy.createController("_header", {
        id: "__alloyId593",
        __parentSymbol: $.__views.seasonPass
    });
    $.__views.__alloyId593.setParent($.__views.seasonPass);
    $.__views.__alloyId594 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId594"
    });
    $.__views.seasonPass.add($.__views.__alloyId594);
    $.__views.__alloyId595 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.seasonPass.add($.__views.__alloyId2214);
    $.__views.__alloyId2215 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Season Pass",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2215"
    });
    $.__views.__alloyId2214.add($.__views.__alloyId2215);
    $.__views.__alloyId2216 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
        id: "__alloyId595"
    });
    $.__views.__alloyId594.add($.__views.__alloyId595);
    $.__views.__alloyId596 = Ti.UI.createImageView({
>>>>>>> Stashed changes
=======
        id: "__alloyId2215"
    });
    $.__views.__alloyId2214.add($.__views.__alloyId2215);
    $.__views.__alloyId2216 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId2216"
    });
    $.__views.__alloyId2214.add($.__views.__alloyId2216);
    back ? $.__views.__alloyId2216.addEventListener("click", back) : __defers["$.__views.__alloyId2216!click!back"] = true;
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
        id: "__alloyId596"
    });
    $.__views.__alloyId594.add($.__views.__alloyId596);
    back ? $.__views.__alloyId596.addEventListener("click", back) : __defers["$.__views.__alloyId596!click!back"] = true;
>>>>>>> Stashed changes
=======
        id: "__alloyId2216"
    });
    $.__views.__alloyId2214.add($.__views.__alloyId2216);
    back ? $.__views.__alloyId2216.addEventListener("click", back) : __defers["$.__views.__alloyId2216!click!back"] = true;
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
    $.__views.__alloyId2217 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId2175 = Ti.UI.createView({
=======
    $.__views.__alloyId2217 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId2217"
    });
<<<<<<< HEAD
    $.__views.menu.add($.__views.__alloyId2217);
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId597 = Ti.UI.createView({
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId597"
    });
    $.__views.menu.add($.__views.__alloyId597);
>>>>>>> Stashed changes
=======
    $.__views.menu.add($.__views.__alloyId2217);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
    $.__views.__alloyId2218 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId2176 = Ti.UI.createView({
=======
    $.__views.__alloyId2218 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId2218"
    });
<<<<<<< HEAD
    $.__views.menu.add($.__views.__alloyId2218);
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId598 = Ti.UI.createView({
        backgroundColor: "#E7E7E7",
        height: "100%",
        width: "0.45%",
        id: "__alloyId598"
    });
    $.__views.menu.add($.__views.__alloyId598);
>>>>>>> Stashed changes
=======
    $.__views.menu.add($.__views.__alloyId2218);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
    var __alloyId2219 = [];
    $.__views.__alloyId2220 = Alloy.createController("seasonPass1", {
        id: "__alloyId2220",
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    var __alloyId2177 = [];
    $.__views.__alloyId2178 = Alloy.createController("seasonPass1", {
        id: "__alloyId2178",
>>>>>>> 24/3/2015 onlinePurchase Subpages
        __parentSymbol: __parentSymbol
    });
    __alloyId2219.push($.__views.__alloyId2220.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId2221 = Alloy.createController("seasonPass2", {
        id: "__alloyId2221",
        __parentSymbol: __parentSymbol
    });
    __alloyId2219.push($.__views.__alloyId2221.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId2222 = Alloy.createController("seasonPass3", {
        id: "__alloyId2222",
        __parentSymbol: __parentSymbol
    });
    __alloyId2219.push($.__views.__alloyId2222.getViewEx({
        recurse: true
    }));
    $.__views.scrollableView = Ti.UI.createScrollableView({
<<<<<<< HEAD
        views: __alloyId2219,
=======
        views: __alloyId2177,
=======
    var __alloyId1988 = [];
    $.__views.__alloyId1989 = Alloy.createController("seasonPass1", {
        id: "__alloyId1989",
=======
    var __alloyId2219 = [];
    $.__views.__alloyId2220 = Alloy.createController("seasonPass1", {
        id: "__alloyId2220",
>>>>>>> origin/master
        __parentSymbol: __parentSymbol
    });
    __alloyId2219.push($.__views.__alloyId2220.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId2221 = Alloy.createController("seasonPass2", {
        id: "__alloyId2221",
        __parentSymbol: __parentSymbol
    });
    __alloyId2219.push($.__views.__alloyId2221.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId2222 = Alloy.createController("seasonPass3", {
        id: "__alloyId2222",
        __parentSymbol: __parentSymbol
    });
    __alloyId2219.push($.__views.__alloyId2222.getViewEx({
        recurse: true
    }));
    $.__views.scrollableView = Ti.UI.createScrollableView({
<<<<<<< HEAD
        views: __alloyId1988,
>>>>>>> origin/master
=======
    var __alloyId599 = [];
    $.__views.__alloyId600 = Alloy.createController("seasonPass1", {
        id: "__alloyId600",
        __parentSymbol: __parentSymbol
    });
    __alloyId599.push($.__views.__alloyId600.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId601 = Alloy.createController("seasonPass2", {
        id: "__alloyId601",
        __parentSymbol: __parentSymbol
    });
    __alloyId599.push($.__views.__alloyId601.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId602 = Alloy.createController("seasonPass3", {
        id: "__alloyId602",
        __parentSymbol: __parentSymbol
    });
    __alloyId599.push($.__views.__alloyId602.getViewEx({
        recurse: true
    }));
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId599,
>>>>>>> Stashed changes
=======
        views: __alloyId2219,
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "scrollableView",
        showPagingControl: "false",
        scrollingEnabled: "false"
    });
    $.__views.seasonPass.add($.__views.scrollableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
<<<<<<< HEAD
    __defers["$.__views.__alloyId2216!click!back"] && $.__views.__alloyId2216.addEventListener("click", back);
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    __defers["$.__views.__alloyId2174!click!back"] && $.__views.__alloyId2174.addEventListener("click", back);
=======
    __defers["$.__views.__alloyId1985!click!back"] && $.__views.__alloyId1985.addEventListener("click", back);
>>>>>>> origin/master
=======
    __defers["$.__views.__alloyId596!click!back"] && $.__views.__alloyId596.addEventListener("click", back);
>>>>>>> Stashed changes
=======
    __defers["$.__views.__alloyId2216!click!back"] && $.__views.__alloyId2216.addEventListener("click", back);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    __defers["$.__views.lbl1!touchend!goSlide"] && $.__views.lbl1.addEventListener("touchend", goSlide);
    __defers["$.__views.lbl2!touchend!goSlide"] && $.__views.lbl2.addEventListener("touchend", goSlide);
    __defers["$.__views.lbl3!touchend!goSlide"] && $.__views.lbl3.addEventListener("touchend", goSlide);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;