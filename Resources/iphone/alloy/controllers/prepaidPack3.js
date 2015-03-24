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
        DRAWER.navigation("prepaidPack2", 1);
    }
    function submit() {
        DRAWER.navigation("prepaidPack4", 1);
        console.log("submit");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "prepaidPack3";
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
    $.__views.prepaidPack3 = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaidPack3"
    });
    $.__views.prepaidPack3 && $.addTopLevelView($.__views.prepaidPack3);
<<<<<<< HEAD
    $.__views.__alloyId1731 = Alloy.createController("_header", {
        id: "__alloyId1731",
        __parentSymbol: $.__views.prepaidPack3
    });
    $.__views.__alloyId1731.setParent($.__views.prepaidPack3);
    $.__views.__alloyId1732 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1732"
    });
    $.__views.prepaidPack3.add($.__views.__alloyId1732);
    $.__views.__alloyId1733 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1961 = Alloy.createController("_header", {
        id: "__alloyId1961",
        __parentSymbol: $.__views.prepaidPack3
    });
    $.__views.__alloyId1961.setParent($.__views.prepaidPack3);
    $.__views.__alloyId1962 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1962"
    });
    $.__views.prepaidPack3.add($.__views.__alloyId1962);
    $.__views.__alloyId1963 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1731 = Alloy.createController("_header", {
        id: "__alloyId1731",
        __parentSymbol: $.__views.prepaidPack3
    });
    $.__views.__alloyId1731.setParent($.__views.prepaidPack3);
    $.__views.__alloyId1732 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1732"
    });
    $.__views.prepaidPack3.add($.__views.__alloyId1732);
    $.__views.__alloyId1733 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1733"
    });
    $.__views.__alloyId1732.add($.__views.__alloyId1733);
    $.__views.__alloyId1734 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId1963"
    });
    $.__views.__alloyId1962.add($.__views.__alloyId1963);
    $.__views.__alloyId1964 = Ti.UI.createImageView({
=======
        id: "__alloyId1733"
    });
    $.__views.__alloyId1732.add($.__views.__alloyId1733);
    $.__views.__alloyId1734 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId1734"
    });
    $.__views.__alloyId1732.add($.__views.__alloyId1734);
    back ? $.__views.__alloyId1734.addEventListener("click", back) : __defers["$.__views.__alloyId1734!click!back"] = true;
    $.__views.__alloyId1735 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1735"
    });
    $.__views.prepaidPack3.add($.__views.__alloyId1735);
    $.__views.__alloyId1736 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1964"
    });
    $.__views.__alloyId1962.add($.__views.__alloyId1964);
    back ? $.__views.__alloyId1964.addEventListener("click", back) : __defers["$.__views.__alloyId1964!click!back"] = true;
    $.__views.__alloyId1965 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1965"
    });
    $.__views.prepaidPack3.add($.__views.__alloyId1965);
    $.__views.__alloyId1966 = Ti.UI.createLabel({
=======
        id: "__alloyId1734"
    });
    $.__views.__alloyId1732.add($.__views.__alloyId1734);
    back ? $.__views.__alloyId1734.addEventListener("click", back) : __defers["$.__views.__alloyId1734!click!back"] = true;
    $.__views.__alloyId1735 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1735"
    });
    $.__views.prepaidPack3.add($.__views.__alloyId1735);
    $.__views.__alloyId1736 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Step 3 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1966"
    });
    $.__views.__alloyId1965.add($.__views.__alloyId1966);
    $.__views.__alloyId1967 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1736"
    });
    $.__views.__alloyId1735.add($.__views.__alloyId1736);
    $.__views.__alloyId1737 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Payment Summary",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1737"
    });
    $.__views.__alloyId1735.add($.__views.__alloyId1737);
=======
<<<<<<< HEAD
        id: "__alloyId1967"
    });
    $.__views.__alloyId1965.add($.__views.__alloyId1967);
=======
        id: "__alloyId1737"
    });
    $.__views.__alloyId1735.add($.__views.__alloyId1737);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%"
    });
    $.__views.prepaidPack3.add($.__views.scrollView);
<<<<<<< HEAD
=======
<<<<<<< HEAD
    $.__views.__alloyId1968 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "50",
        id: "__alloyId1968"
    });
    $.__views.scrollView.add($.__views.__alloyId1968);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId1738 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "50",
        id: "__alloyId1738"
    });
    $.__views.scrollView.add($.__views.__alloyId1738);
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.item_title = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        text: "Items No",
        id: "item_title",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "50",
        width: "20%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1738.add($.__views.item_title);
=======
<<<<<<< HEAD
    $.__views.__alloyId1968.add($.__views.item_title);
=======
    $.__views.__alloyId1738.add($.__views.item_title);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.desc_title = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        text: "Description",
        id: "desc_title",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "50",
        width: "50%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1738.add($.__views.desc_title);
=======
<<<<<<< HEAD
    $.__views.__alloyId1968.add($.__views.desc_title);
=======
    $.__views.__alloyId1738.add($.__views.desc_title);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.cost_title = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        text: "Cost",
        id: "cost_title",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "50",
        width: "30%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1738.add($.__views.cost_title);
    $.__views.__alloyId1739 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1739"
    });
    $.__views.scrollView.add($.__views.__alloyId1739);
=======
<<<<<<< HEAD
    $.__views.__alloyId1968.add($.__views.cost_title);
    $.__views.__alloyId1969 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1969"
    });
    $.__views.scrollView.add($.__views.__alloyId1969);
=======
    $.__views.__alloyId1738.add($.__views.cost_title);
    $.__views.__alloyId1739 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1739"
    });
    $.__views.scrollView.add($.__views.__alloyId1739);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.item_data = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "1",
        id: "item_data",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "30",
        width: "20%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1739.add($.__views.item_data);
=======
<<<<<<< HEAD
    $.__views.__alloyId1969.add($.__views.item_data);
=======
    $.__views.__alloyId1739.add($.__views.item_data);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.desc_data = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "Prepaid Reload",
        id: "desc_data",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "30",
        width: "50%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1739.add($.__views.desc_data);
=======
<<<<<<< HEAD
    $.__views.__alloyId1969.add($.__views.desc_data);
=======
    $.__views.__alloyId1739.add($.__views.desc_data);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.cost_data = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "RM30.00",
        id: "cost_data",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "30",
        width: "30%",
        top: "5"
    });
<<<<<<< HEAD
=======
<<<<<<< HEAD
    $.__views.__alloyId1969.add($.__views.cost_data);
    $.__views.__alloyId1970 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1970"
    });
    $.__views.scrollView.add($.__views.__alloyId1970);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId1739.add($.__views.cost_data);
    $.__views.__alloyId1740 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1740"
    });
    $.__views.scrollView.add($.__views.__alloyId1740);
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.item_data = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "2",
        id: "item_data",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "30",
        width: "20%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1740.add($.__views.item_data);
=======
<<<<<<< HEAD
    $.__views.__alloyId1970.add($.__views.item_data);
=======
    $.__views.__alloyId1740.add($.__views.item_data);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.desc_data = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "Prepaid Reload",
        id: "desc_data",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "30",
        width: "50%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1740.add($.__views.desc_data);
=======
<<<<<<< HEAD
    $.__views.__alloyId1970.add($.__views.desc_data);
=======
    $.__views.__alloyId1740.add($.__views.desc_data);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.cost_data = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "RM50.00",
        id: "cost_data",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "30",
        width: "30%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1740.add($.__views.cost_data);
    $.__views.__alloyId1741 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1741"
    });
    $.__views.scrollView.add($.__views.__alloyId1741);
=======
<<<<<<< HEAD
    $.__views.__alloyId1970.add($.__views.cost_data);
    $.__views.__alloyId1971 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1971"
    });
    $.__views.scrollView.add($.__views.__alloyId1971);
=======
    $.__views.__alloyId1740.add($.__views.cost_data);
    $.__views.__alloyId1741 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1741"
    });
    $.__views.scrollView.add($.__views.__alloyId1741);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.item_data = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "3",
        id: "item_data",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "30",
        width: "20%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1741.add($.__views.item_data);
=======
<<<<<<< HEAD
    $.__views.__alloyId1971.add($.__views.item_data);
=======
    $.__views.__alloyId1741.add($.__views.item_data);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.desc_data = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "Prepaid Reload",
        id: "desc_data",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "30",
        width: "50%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1741.add($.__views.desc_data);
=======
<<<<<<< HEAD
    $.__views.__alloyId1971.add($.__views.desc_data);
=======
    $.__views.__alloyId1741.add($.__views.desc_data);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.cost_data = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "RM100.00",
        id: "cost_data",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "30",
        width: "30%",
        top: "5"
    });
<<<<<<< HEAD
=======
<<<<<<< HEAD
    $.__views.__alloyId1971.add($.__views.cost_data);
    $.__views.__alloyId1972 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1972"
    });
    $.__views.scrollView.add($.__views.__alloyId1972);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId1741.add($.__views.cost_data);
    $.__views.__alloyId1742 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1742"
    });
    $.__views.scrollView.add($.__views.__alloyId1742);
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.item_data = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "4",
        id: "item_data",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "30",
        width: "20%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1742.add($.__views.item_data);
=======
<<<<<<< HEAD
    $.__views.__alloyId1972.add($.__views.item_data);
=======
    $.__views.__alloyId1742.add($.__views.item_data);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.desc_data = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "Prepaid Reload",
        id: "desc_data",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "30",
        width: "50%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1742.add($.__views.desc_data);
=======
<<<<<<< HEAD
    $.__views.__alloyId1972.add($.__views.desc_data);
=======
    $.__views.__alloyId1742.add($.__views.desc_data);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.cost_data = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "RM150.00",
        id: "cost_data",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "30",
        width: "30%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1742.add($.__views.cost_data);
    $.__views.__alloyId1743 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1972.add($.__views.cost_data);
    $.__views.__alloyId1973 = Ti.UI.createView({
=======
    $.__views.__alloyId1742.add($.__views.cost_data);
    $.__views.__alloyId1743 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        width: "100%",
        backgroundColor: "#2f4f4f",
        top: "10",
        height: "50",
<<<<<<< HEAD
        id: "__alloyId1743"
    });
    $.__views.scrollView.add($.__views.__alloyId1743);
=======
<<<<<<< HEAD
        id: "__alloyId1973"
    });
    $.__views.scrollView.add($.__views.__alloyId1973);
=======
        id: "__alloyId1743"
    });
    $.__views.scrollView.add($.__views.__alloyId1743);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.total_payment = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "TOTAL PAYMENT",
        id: "total_payment",
        backgroundColor: "transparent",
        color: "white",
        top: "10",
        left: "20",
        width: "65%"
    });
<<<<<<< HEAD
    $.__views.__alloyId1743.add($.__views.total_payment);
=======
<<<<<<< HEAD
    $.__views.__alloyId1973.add($.__views.total_payment);
=======
    $.__views.__alloyId1743.add($.__views.total_payment);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.total_price = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "RM190.00",
        id: "total_price",
        backgroundColor: "transparent",
        color: "white",
        width: "20%",
        top: "10"
    });
<<<<<<< HEAD
=======
<<<<<<< HEAD
    $.__views.__alloyId1973.add($.__views.total_price);
    $.__views.__alloyId1974 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1974"
    });
    $.__views.prepaidPack3.add($.__views.__alloyId1974);
    submit ? $.__views.__alloyId1974.addEventListener("click", submit) : __defers["$.__views.__alloyId1974!click!submit"] = true;
    $.__views.__alloyId1975 = Ti.UI.createLabel({
        text: "SUBMIT",
        color: "white",
        id: "__alloyId1975"
    });
    $.__views.__alloyId1974.add($.__views.__alloyId1975);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId1743.add($.__views.total_price);
    $.__views.__alloyId1744 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1744"
    });
    $.__views.prepaidPack3.add($.__views.__alloyId1744);
    submit ? $.__views.__alloyId1744.addEventListener("click", submit) : __defers["$.__views.__alloyId1744!click!submit"] = true;
    $.__views.__alloyId1745 = Ti.UI.createLabel({
        text: "SUBMIT",
        color: "white",
        id: "__alloyId1745"
    });
    $.__views.__alloyId1744.add($.__views.__alloyId1745);
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
<<<<<<< HEAD
    __defers["$.__views.__alloyId1734!click!back"] && $.__views.__alloyId1734.addEventListener("click", back);
    __defers["$.__views.__alloyId1744!click!submit"] && $.__views.__alloyId1744.addEventListener("click", submit);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId1964!click!back"] && $.__views.__alloyId1964.addEventListener("click", back);
    __defers["$.__views.__alloyId1974!click!submit"] && $.__views.__alloyId1974.addEventListener("click", submit);
=======
    __defers["$.__views.__alloyId1734!click!back"] && $.__views.__alloyId1734.addEventListener("click", back);
    __defers["$.__views.__alloyId1744!click!submit"] && $.__views.__alloyId1744.addEventListener("click", submit);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;