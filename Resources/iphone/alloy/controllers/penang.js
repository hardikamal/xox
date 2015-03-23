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
        DRAWER.navigation("products", 1);
    }
    function subscribe() {
        console.log("subscribe");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "penang";
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
    $.__views.penang = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "penang"
    });
    $.__views.penang && $.addTopLevelView($.__views.penang);
<<<<<<< HEAD
    $.__views.__alloyId1458 = Alloy.createController("_header", {
        id: "__alloyId1458",
        __parentSymbol: $.__views.penang
    });
    $.__views.__alloyId1458.setParent($.__views.penang);
    $.__views.__alloyId1459 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1459"
    });
    $.__views.penang.add($.__views.__alloyId1459);
    $.__views.__alloyId1460 = Ti.UI.createLabel({
=======
    $.__views.__alloyId961 = Alloy.createController("_header", {
        id: "__alloyId961",
        __parentSymbol: $.__views.penang
    });
    $.__views.__alloyId961.setParent($.__views.penang);
    $.__views.__alloyId962 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId962"
    });
    $.__views.penang.add($.__views.__alloyId962);
    $.__views.__alloyId963 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1460"
    });
    $.__views.__alloyId1459.add($.__views.__alloyId1460);
    $.__views.__alloyId1461 = Ti.UI.createImageView({
=======
        id: "__alloyId963"
    });
    $.__views.__alloyId962.add($.__views.__alloyId963);
    $.__views.__alloyId964 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId1461"
    });
    $.__views.__alloyId1459.add($.__views.__alloyId1461);
    back ? $.__views.__alloyId1461.addEventListener("click", back) : __defers["$.__views.__alloyId1461!click!back"] = true;
=======
        id: "__alloyId964"
    });
    $.__views.__alloyId962.add($.__views.__alloyId964);
    back ? $.__views.__alloyId964.addEventListener("click", back) : __defers["$.__views.__alloyId964!click!back"] = true;
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.penang.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId1462 = Ti.UI.createView({
=======
    $.__views.__alloyId965 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1462"
    });
    $.__views.scrollView.add($.__views.__alloyId1462);
    $.__views.__alloyId1463 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1463"
    });
    $.__views.__alloyId1462.add($.__views.__alloyId1463);
    $.__views.__alloyId1464 = Ti.UI.createLabel({
=======
        id: "__alloyId965"
    });
    $.__views.scrollView.add($.__views.__alloyId965);
    $.__views.__alloyId966 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId966"
    });
    $.__views.__alloyId965.add($.__views.__alloyId966);
    $.__views.__alloyId967 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1464"
    });
    $.__views.__alloyId1463.add($.__views.__alloyId1464);
    $.__views.__alloyId1465 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1465"
    });
    $.__views.__alloyId1462.add($.__views.__alloyId1465);
    $.__views.__alloyId1466 = Ti.UI.createLabel({
=======
        id: "__alloyId967"
    });
    $.__views.__alloyId966.add($.__views.__alloyId967);
    $.__views.__alloyId968 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId968"
    });
    $.__views.__alloyId965.add($.__views.__alloyId968);
    $.__views.__alloyId969 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1466"
    });
    $.__views.__alloyId1465.add($.__views.__alloyId1466);
    $.__views.__alloyId1467 = Ti.UI.createLabel({
=======
        id: "__alloyId969"
    });
    $.__views.__alloyId968.add($.__views.__alloyId969);
    $.__views.__alloyId970 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1467"
    });
    $.__views.__alloyId1465.add($.__views.__alloyId1467);
    $.__views.__alloyId1468 = Ti.UI.createView({
=======
        id: "__alloyId970"
    });
    $.__views.__alloyId968.add($.__views.__alloyId970);
    $.__views.__alloyId971 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1468"
    });
    $.__views.scrollView.add($.__views.__alloyId1468);
    $.__views.__alloyId1469 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1469"
    });
    $.__views.__alloyId1468.add($.__views.__alloyId1469);
    $.__views.__alloyId1470 = Ti.UI.createLabel({
=======
        id: "__alloyId971"
    });
    $.__views.scrollView.add($.__views.__alloyId971);
    $.__views.__alloyId972 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId972"
    });
    $.__views.__alloyId971.add($.__views.__alloyId972);
    $.__views.__alloyId973 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1470"
    });
    $.__views.__alloyId1469.add($.__views.__alloyId1470);
    $.__views.__alloyId1471 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1471"
    });
    $.__views.__alloyId1468.add($.__views.__alloyId1471);
    $.__views.__alloyId1472 = Ti.UI.createLabel({
=======
        id: "__alloyId973"
    });
    $.__views.__alloyId972.add($.__views.__alloyId973);
    $.__views.__alloyId974 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId974"
    });
    $.__views.__alloyId971.add($.__views.__alloyId974);
    $.__views.__alloyId975 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1472"
    });
    $.__views.__alloyId1471.add($.__views.__alloyId1472);
    $.__views.__alloyId1473 = Ti.UI.createLabel({
=======
        id: "__alloyId975"
    });
    $.__views.__alloyId974.add($.__views.__alloyId975);
    $.__views.__alloyId976 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1473"
    });
    $.__views.__alloyId1471.add($.__views.__alloyId1473);
    $.__views.__alloyId1474 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1474"
    });
    $.__views.__alloyId1468.add($.__views.__alloyId1474);
    $.__views.__alloyId1475 = Ti.UI.createLabel({
=======
        id: "__alloyId976"
    });
    $.__views.__alloyId974.add($.__views.__alloyId976);
    $.__views.__alloyId977 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId977"
    });
    $.__views.__alloyId971.add($.__views.__alloyId977);
    $.__views.__alloyId978 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1475"
    });
    $.__views.__alloyId1474.add($.__views.__alloyId1475);
    $.__views.__alloyId1476 = Ti.UI.createLabel({
=======
        id: "__alloyId978"
    });
    $.__views.__alloyId977.add($.__views.__alloyId978);
    $.__views.__alloyId979 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "10cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1476"
    });
    $.__views.__alloyId1474.add($.__views.__alloyId1476);
    $.__views.__alloyId1477 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1477"
    });
    $.__views.__alloyId1468.add($.__views.__alloyId1477);
    $.__views.__alloyId1478 = Ti.UI.createLabel({
=======
        id: "__alloyId979"
    });
    $.__views.__alloyId977.add($.__views.__alloyId979);
    $.__views.__alloyId980 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId980"
    });
    $.__views.__alloyId971.add($.__views.__alloyId980);
    $.__views.__alloyId981 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1478"
    });
    $.__views.__alloyId1477.add($.__views.__alloyId1478);
    $.__views.__alloyId1479 = Ti.UI.createLabel({
=======
        id: "__alloyId981"
    });
    $.__views.__alloyId980.add($.__views.__alloyId981);
    $.__views.__alloyId982 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1479"
    });
    $.__views.__alloyId1477.add($.__views.__alloyId1479);
    $.__views.__alloyId1480 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1480"
    });
    $.__views.__alloyId1468.add($.__views.__alloyId1480);
    $.__views.__alloyId1481 = Ti.UI.createLabel({
=======
        id: "__alloyId982"
    });
    $.__views.__alloyId980.add($.__views.__alloyId982);
    $.__views.__alloyId983 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId983"
    });
    $.__views.__alloyId971.add($.__views.__alloyId983);
    $.__views.__alloyId984 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1481"
    });
    $.__views.__alloyId1480.add($.__views.__alloyId1481);
    $.__views.__alloyId1482 = Ti.UI.createLabel({
=======
        id: "__alloyId984"
    });
    $.__views.__alloyId983.add($.__views.__alloyId984);
    $.__views.__alloyId985 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1482"
    });
    $.__views.__alloyId1480.add($.__views.__alloyId1482);
    $.__views.__alloyId1483 = Ti.UI.createView({
=======
        id: "__alloyId985"
    });
    $.__views.__alloyId983.add($.__views.__alloyId985);
    $.__views.__alloyId986 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId1483"
    });
    $.__views.scrollView.add($.__views.__alloyId1483);
    $.__views.__alloyId1484 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1484"
    });
    $.__views.__alloyId1483.add($.__views.__alloyId1484);
    $.__views.__alloyId1485 = Ti.UI.createLabel({
=======
        id: "__alloyId986"
    });
    $.__views.scrollView.add($.__views.__alloyId986);
    $.__views.__alloyId987 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId987"
    });
    $.__views.__alloyId986.add($.__views.__alloyId987);
    $.__views.__alloyId988 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1485"
    });
    $.__views.__alloyId1484.add($.__views.__alloyId1485);
    $.__views.__alloyId1486 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1486"
    });
    $.__views.__alloyId1483.add($.__views.__alloyId1486);
    $.__views.__alloyId1487 = Ti.UI.createLabel({
=======
        id: "__alloyId988"
    });
    $.__views.__alloyId987.add($.__views.__alloyId988);
    $.__views.__alloyId989 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId989"
    });
    $.__views.__alloyId986.add($.__views.__alloyId989);
    $.__views.__alloyId990 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1487"
    });
    $.__views.__alloyId1486.add($.__views.__alloyId1487);
    $.__views.__alloyId1488 = Ti.UI.createLabel({
=======
        id: "__alloyId990"
    });
    $.__views.__alloyId989.add($.__views.__alloyId990);
    $.__views.__alloyId991 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1488"
    });
    $.__views.__alloyId1486.add($.__views.__alloyId1488);
    $.__views.__alloyId1489 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1489"
    });
    $.__views.__alloyId1483.add($.__views.__alloyId1489);
    $.__views.__alloyId1490 = Ti.UI.createLabel({
=======
        id: "__alloyId991"
    });
    $.__views.__alloyId989.add($.__views.__alloyId991);
    $.__views.__alloyId992 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId992"
    });
    $.__views.__alloyId986.add($.__views.__alloyId992);
    $.__views.__alloyId993 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1490"
    });
    $.__views.__alloyId1489.add($.__views.__alloyId1490);
    $.__views.__alloyId1491 = Ti.UI.createLabel({
=======
        id: "__alloyId993"
    });
    $.__views.__alloyId992.add($.__views.__alloyId993);
    $.__views.__alloyId994 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1491"
    });
    $.__views.__alloyId1489.add($.__views.__alloyId1491);
    $.__views.__alloyId1492 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1492"
    });
    $.__views.penang.add($.__views.__alloyId1492);
    subscribe ? $.__views.__alloyId1492.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1492!click!subscribe"] = true;
    $.__views.__alloyId1493 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1493"
    });
    $.__views.__alloyId1492.add($.__views.__alloyId1493);
=======
        id: "__alloyId994"
    });
    $.__views.__alloyId992.add($.__views.__alloyId994);
    $.__views.__alloyId995 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId995"
    });
    $.__views.penang.add($.__views.__alloyId995);
    subscribe ? $.__views.__alloyId995.addEventListener("click", subscribe) : __defers["$.__views.__alloyId995!click!subscribe"] = true;
    $.__views.__alloyId996 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId996"
    });
    $.__views.__alloyId995.add($.__views.__alloyId996);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
<<<<<<< HEAD
    __defers["$.__views.__alloyId1461!click!back"] && $.__views.__alloyId1461.addEventListener("click", back);
    __defers["$.__views.__alloyId1492!click!subscribe"] && $.__views.__alloyId1492.addEventListener("click", subscribe);
=======
    __defers["$.__views.__alloyId964!click!back"] && $.__views.__alloyId964.addEventListener("click", back);
    __defers["$.__views.__alloyId995!click!subscribe"] && $.__views.__alloyId995.addEventListener("click", subscribe);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;