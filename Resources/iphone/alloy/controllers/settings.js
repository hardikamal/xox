function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function notification(e) {
        console.log("notification: " + e.value);
    }
    function facebook() {
        console.log("facebook");
    }
    function twitter() {
        console.log("twitter");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "settings";
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
    $.__views.win = Ti.UI.createView({
        layout: "vertical",
        id: "win",
        backgroundColor: "white"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
<<<<<<< HEAD
    $.__views.__alloyId2294 = Alloy.createController("_header", {
        id: "__alloyId2294",
        __parentSymbol: $.__views.win
    });
    $.__views.__alloyId2294.setParent($.__views.win);
    $.__views.__alloyId2295 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#836EAF",
        id: "__alloyId2295"
    });
    $.__views.win.add($.__views.__alloyId2295);
    $.__views.__alloyId2296 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1658 = Alloy.createController("_header", {
        id: "__alloyId1658",
        __parentSymbol: $.__views.win
    });
    $.__views.__alloyId1658.setParent($.__views.win);
    $.__views.__alloyId1659 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#836EAF",
        id: "__alloyId1659"
    });
    $.__views.win.add($.__views.__alloyId1659);
    $.__views.__alloyId1660 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Settings",
        left: "10",
        top: "10",
        color: "white",
<<<<<<< HEAD
        id: "__alloyId2296"
    });
    $.__views.__alloyId2295.add($.__views.__alloyId2296);
=======
        id: "__alloyId1660"
    });
    $.__views.__alloyId1659.add($.__views.__alloyId1660);
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.win.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId2297 = Ti.UI.createView({
=======
    $.__views.__alloyId1661 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1661"
    });
    $.__views.scrollView.add($.__views.__alloyId1661);
    $.__views.__alloyId1662 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1662"
    });
    $.__views.__alloyId1661.add($.__views.__alloyId1662);
    $.__views.__alloyId1663 = Ti.UI.createLabel({
        text: "Auto Login",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1663"
    });
    $.__views.__alloyId1662.add($.__views.__alloyId1663);
    $.__views.__alloyId1664 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1664"
    });
    $.__views.__alloyId1661.add($.__views.__alloyId1664);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
    $.__views.__alloyId1664.add($.__views.switch1);
    login ? $.__views.switch1.addEventListener("change", login) : __defers["$.__views.switch1!change!login"] = true;
    $.__views.__alloyId1665 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId2297"
    });
    $.__views.scrollView.add($.__views.__alloyId2297);
    $.__views.__alloyId2298 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2298"
    });
    $.__views.__alloyId2297.add($.__views.__alloyId2298);
    $.__views.__alloyId2299 = Ti.UI.createLabel({
=======
        id: "__alloyId1665"
    });
    $.__views.scrollView.add($.__views.__alloyId1665);
    $.__views.__alloyId1666 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1666"
    });
    $.__views.__alloyId1665.add($.__views.__alloyId1666);
    $.__views.__alloyId1667 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Push Notification",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2299"
    });
    $.__views.__alloyId2298.add($.__views.__alloyId2299);
    $.__views.__alloyId2300 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2300"
    });
    $.__views.__alloyId2297.add($.__views.__alloyId2300);
=======
        id: "__alloyId1667"
    });
    $.__views.__alloyId1666.add($.__views.__alloyId1667);
    $.__views.__alloyId1668 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1668"
    });
    $.__views.__alloyId1665.add($.__views.__alloyId1668);
>>>>>>> origin/master
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2"
    });
<<<<<<< HEAD
    $.__views.__alloyId2300.add($.__views.switch2);
    notification ? $.__views.switch2.addEventListener("change", notification) : __defers["$.__views.switch2!change!notification"] = true;
    $.__views.__alloyId2301 = Ti.UI.createView({
=======
    $.__views.__alloyId1668.add($.__views.switch2);
    notification ? $.__views.switch2.addEventListener("change", notification) : __defers["$.__views.switch2!change!notification"] = true;
    $.__views.__alloyId1669 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        top: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId2301"
    });
    $.__views.scrollView.add($.__views.__alloyId2301);
    $.__views.__alloyId2302 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId2302"
    });
    $.__views.__alloyId2301.add($.__views.__alloyId2302);
    $.__views.__alloyId2303 = Ti.UI.createLabel({
=======
        id: "__alloyId1669"
    });
    $.__views.scrollView.add($.__views.__alloyId1669);
    $.__views.__alloyId1670 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId1670"
    });
    $.__views.__alloyId1669.add($.__views.__alloyId1670);
    $.__views.__alloyId1671 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Social Sharing",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2303"
    });
    $.__views.__alloyId2302.add($.__views.__alloyId2303);
    $.__views.__alloyId2304 = Ti.UI.createView({
=======
        id: "__alloyId1671"
    });
    $.__views.__alloyId1670.add($.__views.__alloyId1671);
    $.__views.__alloyId1672 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
<<<<<<< HEAD
        id: "__alloyId2304"
    });
    $.__views.scrollView.add($.__views.__alloyId2304);
    facebook ? $.__views.__alloyId2304.addEventListener("click", facebook) : __defers["$.__views.__alloyId2304!click!facebook"] = true;
    $.__views.__alloyId2305 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId2305"
    });
    $.__views.__alloyId2304.add($.__views.__alloyId2305);
    $.__views.__alloyId2306 = Ti.UI.createLabel({
=======
        id: "__alloyId1672"
    });
    $.__views.scrollView.add($.__views.__alloyId1672);
    facebook ? $.__views.__alloyId1672.addEventListener("click", facebook) : __defers["$.__views.__alloyId1672!click!facebook"] = true;
    $.__views.__alloyId1673 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId1673"
    });
    $.__views.__alloyId1672.add($.__views.__alloyId1673);
    $.__views.__alloyId1674 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Facebook",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2306"
    });
    $.__views.__alloyId2305.add($.__views.__alloyId2306);
    $.__views.__alloyId2307 = Ti.UI.createView({
=======
        id: "__alloyId1674"
    });
    $.__views.__alloyId1673.add($.__views.__alloyId1674);
    $.__views.__alloyId1675 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
<<<<<<< HEAD
        id: "__alloyId2307"
    });
    $.__views.__alloyId2304.add($.__views.__alloyId2307);
=======
        id: "__alloyId1675"
    });
    $.__views.__alloyId1672.add($.__views.__alloyId1675);
>>>>>>> origin/master
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId2307.add($.__views.arrow1);
    $.__views.__alloyId2308 = Ti.UI.createView({
=======
    $.__views.__alloyId1675.add($.__views.arrow1);
    $.__views.__alloyId1676 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
<<<<<<< HEAD
        id: "__alloyId2308"
    });
    $.__views.scrollView.add($.__views.__alloyId2308);
    twitter ? $.__views.__alloyId2308.addEventListener("click", twitter) : __defers["$.__views.__alloyId2308!click!twitter"] = true;
    $.__views.__alloyId2309 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId2309"
    });
    $.__views.__alloyId2308.add($.__views.__alloyId2309);
    $.__views.__alloyId2310 = Ti.UI.createLabel({
=======
        id: "__alloyId1676"
    });
    $.__views.scrollView.add($.__views.__alloyId1676);
    twitter ? $.__views.__alloyId1676.addEventListener("click", twitter) : __defers["$.__views.__alloyId1676!click!twitter"] = true;
    $.__views.__alloyId1677 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId1677"
    });
    $.__views.__alloyId1676.add($.__views.__alloyId1677);
    $.__views.__alloyId1678 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Twitter",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2310"
    });
    $.__views.__alloyId2309.add($.__views.__alloyId2310);
    $.__views.__alloyId2311 = Ti.UI.createView({
=======
        id: "__alloyId1678"
    });
    $.__views.__alloyId1677.add($.__views.__alloyId1678);
    $.__views.__alloyId1679 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
<<<<<<< HEAD
        id: "__alloyId2311"
    });
    $.__views.__alloyId2308.add($.__views.__alloyId2311);
=======
        id: "__alloyId1679"
    });
    $.__views.__alloyId1676.add($.__views.__alloyId1679);
>>>>>>> origin/master
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId2311.add($.__views.arrow2);
=======
    $.__views.__alloyId1679.add($.__views.arrow2);
    $.__views.__alloyId1680 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1680"
    });
    $.__views.scrollView.add($.__views.__alloyId1680);
    google ? $.__views.__alloyId1680.addEventListener("click", google) : __defers["$.__views.__alloyId1680!click!google"] = true;
    $.__views.__alloyId1681 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId1681"
    });
    $.__views.__alloyId1680.add($.__views.__alloyId1681);
    $.__views.__alloyId1682 = Ti.UI.createLabel({
        text: "Google+",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1682"
    });
    $.__views.__alloyId1681.add($.__views.__alloyId1682);
    $.__views.__alloyId1683 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        id: "__alloyId1683"
    });
    $.__views.__alloyId1680.add($.__views.__alloyId1683);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1683.add($.__views.arrow3);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow3.transform = Ti.UI.create2DMatrix().rotate(-90);
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.switch1.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch2.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    }
    __defers["$.__views.switch2!change!notification"] && $.__views.switch2.addEventListener("change", notification);
<<<<<<< HEAD
    __defers["$.__views.__alloyId2304!click!facebook"] && $.__views.__alloyId2304.addEventListener("click", facebook);
    __defers["$.__views.__alloyId2308!click!twitter"] && $.__views.__alloyId2308.addEventListener("click", twitter);
=======
    __defers["$.__views.__alloyId1672!click!facebook"] && $.__views.__alloyId1672.addEventListener("click", facebook);
    __defers["$.__views.__alloyId1676!click!twitter"] && $.__views.__alloyId1676.addEventListener("click", twitter);
    __defers["$.__views.__alloyId1680!click!google"] && $.__views.__alloyId1680.addEventListener("click", google);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;