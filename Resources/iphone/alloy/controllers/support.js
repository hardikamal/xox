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
    $.__views.__alloyId2424 = Alloy.createController("_header", {
        id: "__alloyId2424",
        __parentSymbol: $.__views.support
    });
    $.__views.__alloyId2424.setParent($.__views.support);
    $.__views.__alloyId2425 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId2425"
    });
    $.__views.support.add($.__views.__alloyId2425);
    $.__views.__alloyId2426 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2743 = Alloy.createController("_header", {
        id: "__alloyId2743",
        __parentSymbol: $.__views.support
    });
    $.__views.__alloyId2743.setParent($.__views.support);
    $.__views.__alloyId2744 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId2744"
    });
    $.__views.support.add($.__views.__alloyId2744);
    $.__views.__alloyId2745 = Ti.UI.createLabel({
=======
    $.__views.__alloyId2424 = Alloy.createController("_header", {
        id: "__alloyId2424",
        __parentSymbol: $.__views.support
    });
    $.__views.__alloyId2424.setParent($.__views.support);
    $.__views.__alloyId2425 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId2425"
    });
    $.__views.support.add($.__views.__alloyId2425);
    $.__views.__alloyId2426 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Support",
        left: "10",
        top: "10",
        color: "white",
<<<<<<< HEAD
        id: "__alloyId2426"
    });
    $.__views.__alloyId2425.add($.__views.__alloyId2426);
    $.__views.__alloyId2427 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId2427"
    });
    $.__views.support.add($.__views.__alloyId2427);
    $.__views.__alloyId2428 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2428"
    });
    $.__views.__alloyId2427.add($.__views.__alloyId2428);
    userGuide ? $.__views.__alloyId2428.addEventListener("click", userGuide) : __defers["$.__views.__alloyId2428!click!userGuide"] = true;
    $.__views.__alloyId2429 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2429"
    });
    $.__views.__alloyId2428.add($.__views.__alloyId2429);
    $.__views.__alloyId2430 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2745"
    });
    $.__views.__alloyId2744.add($.__views.__alloyId2745);
    $.__views.__alloyId2746 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId2746"
    });
    $.__views.support.add($.__views.__alloyId2746);
    $.__views.__alloyId2747 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2747"
    });
    $.__views.__alloyId2746.add($.__views.__alloyId2747);
    userGuide ? $.__views.__alloyId2747.addEventListener("click", userGuide) : __defers["$.__views.__alloyId2747!click!userGuide"] = true;
    $.__views.__alloyId2748 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2748"
    });
    $.__views.__alloyId2747.add($.__views.__alloyId2748);
    $.__views.__alloyId2749 = Ti.UI.createLabel({
=======
        id: "__alloyId2426"
    });
    $.__views.__alloyId2425.add($.__views.__alloyId2426);
    $.__views.__alloyId2427 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId2427"
    });
    $.__views.support.add($.__views.__alloyId2427);
    $.__views.__alloyId2428 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2428"
    });
    $.__views.__alloyId2427.add($.__views.__alloyId2428);
    userGuide ? $.__views.__alloyId2428.addEventListener("click", userGuide) : __defers["$.__views.__alloyId2428!click!userGuide"] = true;
    $.__views.__alloyId2429 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2429"
    });
    $.__views.__alloyId2428.add($.__views.__alloyId2429);
    $.__views.__alloyId2430 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "User Guide",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< HEAD
        id: "__alloyId2430"
    });
    $.__views.__alloyId2429.add($.__views.__alloyId2430);
    $.__views.__alloyId2431 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId2749"
    });
    $.__views.__alloyId2748.add($.__views.__alloyId2749);
    $.__views.__alloyId2750 = Ti.UI.createView({
=======
        id: "__alloyId2430"
    });
    $.__views.__alloyId2429.add($.__views.__alloyId2430);
    $.__views.__alloyId2431 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
<<<<<<< HEAD
        id: "__alloyId2431"
    });
    $.__views.__alloyId2428.add($.__views.__alloyId2431);
=======
<<<<<<< HEAD
        id: "__alloyId2750"
    });
    $.__views.__alloyId2747.add($.__views.__alloyId2750);
=======
        id: "__alloyId2431"
    });
    $.__views.__alloyId2428.add($.__views.__alloyId2431);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId2431.add($.__views.arrow1);
    $.__views.__alloyId2432 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2432"
    });
    $.__views.__alloyId2427.add($.__views.__alloyId2432);
    terms ? $.__views.__alloyId2432.addEventListener("click", terms) : __defers["$.__views.__alloyId2432!click!terms"] = true;
    $.__views.__alloyId2433 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2433"
    });
    $.__views.__alloyId2432.add($.__views.__alloyId2433);
    $.__views.__alloyId2434 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2750.add($.__views.arrow1);
    $.__views.__alloyId2751 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2751"
    });
    $.__views.__alloyId2746.add($.__views.__alloyId2751);
    terms ? $.__views.__alloyId2751.addEventListener("click", terms) : __defers["$.__views.__alloyId2751!click!terms"] = true;
    $.__views.__alloyId2752 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2752"
    });
    $.__views.__alloyId2751.add($.__views.__alloyId2752);
    $.__views.__alloyId2753 = Ti.UI.createLabel({
=======
    $.__views.__alloyId2431.add($.__views.arrow1);
    $.__views.__alloyId2432 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2432"
    });
    $.__views.__alloyId2427.add($.__views.__alloyId2432);
    terms ? $.__views.__alloyId2432.addEventListener("click", terms) : __defers["$.__views.__alloyId2432!click!terms"] = true;
    $.__views.__alloyId2433 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2433"
    });
    $.__views.__alloyId2432.add($.__views.__alloyId2433);
    $.__views.__alloyId2434 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Terms & Conditions",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< HEAD
        id: "__alloyId2434"
    });
    $.__views.__alloyId2433.add($.__views.__alloyId2434);
    $.__views.__alloyId2435 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId2753"
    });
    $.__views.__alloyId2752.add($.__views.__alloyId2753);
    $.__views.__alloyId2754 = Ti.UI.createView({
=======
        id: "__alloyId2434"
    });
    $.__views.__alloyId2433.add($.__views.__alloyId2434);
    $.__views.__alloyId2435 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
<<<<<<< HEAD
        id: "__alloyId2435"
    });
    $.__views.__alloyId2432.add($.__views.__alloyId2435);
=======
<<<<<<< HEAD
        id: "__alloyId2754"
    });
    $.__views.__alloyId2751.add($.__views.__alloyId2754);
=======
        id: "__alloyId2435"
    });
    $.__views.__alloyId2432.add($.__views.__alloyId2435);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
=======
<<<<<<< HEAD
    $.__views.__alloyId2754.add($.__views.arrow2);
    $.__views.__alloyId2755 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2755"
    });
    $.__views.__alloyId2746.add($.__views.__alloyId2755);
    notification ? $.__views.__alloyId2755.addEventListener("click", notification) : __defers["$.__views.__alloyId2755!click!notification"] = true;
    $.__views.__alloyId2756 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2756"
    });
    $.__views.__alloyId2755.add($.__views.__alloyId2756);
    $.__views.__alloyId2757 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId2435.add($.__views.arrow2);
    $.__views.__alloyId2436 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2436"
    });
    $.__views.__alloyId2427.add($.__views.__alloyId2436);
    notification ? $.__views.__alloyId2436.addEventListener("click", notification) : __defers["$.__views.__alloyId2436!click!notification"] = true;
    $.__views.__alloyId2437 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2437"
    });
    $.__views.__alloyId2436.add($.__views.__alloyId2437);
    $.__views.__alloyId2438 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Notification",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< HEAD
        id: "__alloyId2438"
    });
    $.__views.__alloyId2437.add($.__views.__alloyId2438);
    $.__views.__alloyId2439 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId2757"
    });
    $.__views.__alloyId2756.add($.__views.__alloyId2757);
    $.__views.__alloyId2758 = Ti.UI.createView({
=======
        id: "__alloyId2438"
    });
    $.__views.__alloyId2437.add($.__views.__alloyId2438);
    $.__views.__alloyId2439 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
<<<<<<< HEAD
        id: "__alloyId2439"
    });
    $.__views.__alloyId2436.add($.__views.__alloyId2439);
=======
<<<<<<< HEAD
        id: "__alloyId2758"
    });
    $.__views.__alloyId2755.add($.__views.__alloyId2758);
=======
        id: "__alloyId2439"
    });
    $.__views.__alloyId2436.add($.__views.__alloyId2439);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
=======
<<<<<<< HEAD
    $.__views.__alloyId2758.add($.__views.arrow3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2747!click!userGuide"] && $.__views.__alloyId2747.addEventListener("click", userGuide);
    __defers["$.__views.__alloyId2751!click!terms"] && $.__views.__alloyId2751.addEventListener("click", terms);
    __defers["$.__views.__alloyId2755!click!notification"] && $.__views.__alloyId2755.addEventListener("click", notification);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId2439.add($.__views.arrow3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2428!click!userGuide"] && $.__views.__alloyId2428.addEventListener("click", userGuide);
    __defers["$.__views.__alloyId2432!click!terms"] && $.__views.__alloyId2432.addEventListener("click", terms);
    __defers["$.__views.__alloyId2436!click!notification"] && $.__views.__alloyId2436.addEventListener("click", notification);
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;