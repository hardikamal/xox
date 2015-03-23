function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function userGuide() {
        DRAWER.navigation("userGuide", 1);
    }
    function terms() {
        DRAWER.navigation("terms", 1);
    }
    function notification() {
        DRAWER.navigation("notification", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "support";
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
    $.__views.support = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "support"
    });
    $.__views.support && $.addTopLevelView($.__views.support);
<<<<<<< HEAD
    $.__views.__alloyId2470 = Alloy.createController("_header", {
        id: "__alloyId2470",
        __parentSymbol: $.__views.support
    });
    $.__views.__alloyId2470.setParent($.__views.support);
    $.__views.__alloyId2471 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId2471"
    });
    $.__views.support.add($.__views.__alloyId2471);
    $.__views.__alloyId2472 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1752 = Alloy.createController("_header", {
        id: "__alloyId1752",
        __parentSymbol: $.__views.support
    });
    $.__views.__alloyId1752.setParent($.__views.support);
    $.__views.__alloyId1753 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId1753"
    });
    $.__views.support.add($.__views.__alloyId1753);
    $.__views.__alloyId1754 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Support",
        left: "10",
        top: "10",
        color: "white",
<<<<<<< HEAD
        id: "__alloyId2472"
    });
    $.__views.__alloyId2471.add($.__views.__alloyId2472);
    $.__views.__alloyId2473 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId2473"
    });
    $.__views.support.add($.__views.__alloyId2473);
    $.__views.__alloyId2474 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2474"
    });
    $.__views.__alloyId2473.add($.__views.__alloyId2474);
    userGuide ? $.__views.__alloyId2474.addEventListener("click", userGuide) : __defers["$.__views.__alloyId2474!click!userGuide"] = true;
    $.__views.__alloyId2475 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2475"
    });
    $.__views.__alloyId2474.add($.__views.__alloyId2475);
    $.__views.__alloyId2476 = Ti.UI.createLabel({
=======
        id: "__alloyId1754"
    });
    $.__views.__alloyId1753.add($.__views.__alloyId1754);
    $.__views.__alloyId1755 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId1755"
    });
    $.__views.support.add($.__views.__alloyId1755);
    $.__views.__alloyId1756 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1756"
    });
    $.__views.__alloyId1755.add($.__views.__alloyId1756);
    userGuide ? $.__views.__alloyId1756.addEventListener("click", userGuide) : __defers["$.__views.__alloyId1756!click!userGuide"] = true;
    $.__views.__alloyId1757 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1757"
    });
    $.__views.__alloyId1756.add($.__views.__alloyId1757);
    $.__views.__alloyId1758 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "User Guide",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< HEAD
        id: "__alloyId2476"
    });
    $.__views.__alloyId2475.add($.__views.__alloyId2476);
    $.__views.__alloyId2477 = Ti.UI.createView({
=======
        id: "__alloyId1758"
    });
    $.__views.__alloyId1757.add($.__views.__alloyId1758);
    $.__views.__alloyId1759 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
<<<<<<< HEAD
        id: "__alloyId2477"
    });
    $.__views.__alloyId2474.add($.__views.__alloyId2477);
=======
        id: "__alloyId1759"
    });
    $.__views.__alloyId1756.add($.__views.__alloyId1759);
>>>>>>> origin/master
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId2477.add($.__views.arrow1);
    $.__views.__alloyId2478 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2478"
    });
    $.__views.__alloyId2473.add($.__views.__alloyId2478);
    terms ? $.__views.__alloyId2478.addEventListener("click", terms) : __defers["$.__views.__alloyId2478!click!terms"] = true;
    $.__views.__alloyId2479 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2479"
    });
    $.__views.__alloyId2478.add($.__views.__alloyId2479);
    $.__views.__alloyId2480 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1759.add($.__views.arrow1);
    $.__views.__alloyId1760 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1760"
    });
    $.__views.__alloyId1755.add($.__views.__alloyId1760);
    terms ? $.__views.__alloyId1760.addEventListener("click", terms) : __defers["$.__views.__alloyId1760!click!terms"] = true;
    $.__views.__alloyId1761 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1761"
    });
    $.__views.__alloyId1760.add($.__views.__alloyId1761);
    $.__views.__alloyId1762 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Terms & Conditions",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< HEAD
        id: "__alloyId2480"
    });
    $.__views.__alloyId2479.add($.__views.__alloyId2480);
    $.__views.__alloyId2481 = Ti.UI.createView({
=======
        id: "__alloyId1762"
    });
    $.__views.__alloyId1761.add($.__views.__alloyId1762);
    $.__views.__alloyId1763 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
<<<<<<< HEAD
        id: "__alloyId2481"
    });
    $.__views.__alloyId2478.add($.__views.__alloyId2481);
=======
        id: "__alloyId1763"
    });
    $.__views.__alloyId1760.add($.__views.__alloyId1763);
>>>>>>> origin/master
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId2481.add($.__views.arrow2);
    $.__views.__alloyId2482 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2482"
    });
    $.__views.__alloyId2473.add($.__views.__alloyId2482);
    notification ? $.__views.__alloyId2482.addEventListener("click", notification) : __defers["$.__views.__alloyId2482!click!notification"] = true;
    $.__views.__alloyId2483 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2483"
    });
    $.__views.__alloyId2482.add($.__views.__alloyId2483);
    $.__views.__alloyId2484 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1763.add($.__views.arrow2);
    $.__views.__alloyId1764 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1764"
    });
    $.__views.__alloyId1755.add($.__views.__alloyId1764);
    notification ? $.__views.__alloyId1764.addEventListener("click", notification) : __defers["$.__views.__alloyId1764!click!notification"] = true;
    $.__views.__alloyId1765 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1765"
    });
    $.__views.__alloyId1764.add($.__views.__alloyId1765);
    $.__views.__alloyId1766 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Notification",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< HEAD
        id: "__alloyId2484"
    });
    $.__views.__alloyId2483.add($.__views.__alloyId2484);
    $.__views.__alloyId2485 = Ti.UI.createView({
=======
        id: "__alloyId1766"
    });
    $.__views.__alloyId1765.add($.__views.__alloyId1766);
    $.__views.__alloyId1767 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
<<<<<<< HEAD
        id: "__alloyId2485"
    });
    $.__views.__alloyId2482.add($.__views.__alloyId2485);
=======
        id: "__alloyId1767"
    });
    $.__views.__alloyId1764.add($.__views.__alloyId1767);
>>>>>>> origin/master
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId2485.add($.__views.arrow3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2474!click!userGuide"] && $.__views.__alloyId2474.addEventListener("click", userGuide);
    __defers["$.__views.__alloyId2478!click!terms"] && $.__views.__alloyId2478.addEventListener("click", terms);
    __defers["$.__views.__alloyId2482!click!notification"] && $.__views.__alloyId2482.addEventListener("click", notification);
=======
    $.__views.__alloyId1767.add($.__views.arrow3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1756!click!userGuide"] && $.__views.__alloyId1756.addEventListener("click", userGuide);
    __defers["$.__views.__alloyId1760!click!terms"] && $.__views.__alloyId1760.addEventListener("click", terms);
    __defers["$.__views.__alloyId1764!click!notification"] && $.__views.__alloyId1764.addEventListener("click", notification);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;