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
        DRAWER.navigation("hopOn3", 1);
    }
    function submit() {
        DRAWER.navigation("hopOn5", 1);
        console.log("submit");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "hopOn4";
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
    $.__views.hopOn4 = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "hopOn4"
    });
    $.__views.hopOn4 && $.addTopLevelView($.__views.hopOn4);
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId573 = Alloy.createController("_header", {
        id: "__alloyId573",
=======
<<<<<<< HEAD
    $.__views.__alloyId619 = Alloy.createController("_header", {
        id: "__alloyId619",
=======
    $.__views.__alloyId573 = Alloy.createController("_header", {
        id: "__alloyId573",
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId573 = Alloy.createController("_header", {
        id: "__alloyId573",
>>>>>>> origin/master
        __parentSymbol: $.__views.hopOn4
    });
    $.__views.__alloyId573.setParent($.__views.hopOn4);
    $.__views.__alloyId574 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId574"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.hopOn4.add($.__views.__alloyId574);
    $.__views.__alloyId575 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.hopOn4.add($.__views.__alloyId620);
    $.__views.__alloyId621 = Ti.UI.createLabel({
=======
    $.__views.hopOn4.add($.__views.__alloyId574);
    $.__views.__alloyId575 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.hopOn4.add($.__views.__alloyId574);
    $.__views.__alloyId575 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId575"
    });
    $.__views.__alloyId574.add($.__views.__alloyId575);
    $.__views.__alloyId576 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId621"
    });
    $.__views.__alloyId620.add($.__views.__alloyId621);
    $.__views.__alloyId622 = Ti.UI.createImageView({
=======
        id: "__alloyId575"
    });
    $.__views.__alloyId574.add($.__views.__alloyId575);
    $.__views.__alloyId576 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId575"
    });
    $.__views.__alloyId574.add($.__views.__alloyId575);
    $.__views.__alloyId576 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId576"
=======
<<<<<<< HEAD
        id: "__alloyId622"
=======
        id: "__alloyId576"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId576"
>>>>>>> origin/master
    });
    $.__views.__alloyId574.add($.__views.__alloyId576);
    back ? $.__views.__alloyId576.addEventListener("click", back) : __defers["$.__views.__alloyId576!click!back"] = true;
    $.__views.__alloyId577 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId577"
    });
    $.__views.hopOn4.add($.__views.__alloyId577);
    $.__views.__alloyId578 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId623"
    });
    $.__views.hopOn4.add($.__views.__alloyId623);
    $.__views.__alloyId624 = Ti.UI.createLabel({
=======
        id: "__alloyId577"
    });
    $.__views.hopOn4.add($.__views.__alloyId577);
    $.__views.__alloyId578 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId577"
    });
    $.__views.hopOn4.add($.__views.__alloyId577);
    $.__views.__alloyId578 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Step 4 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId578"
    });
    $.__views.__alloyId577.add($.__views.__alloyId578);
    $.__views.__alloyId579 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId624"
    });
    $.__views.__alloyId623.add($.__views.__alloyId624);
    $.__views.__alloyId625 = Ti.UI.createLabel({
=======
        id: "__alloyId578"
    });
    $.__views.__alloyId577.add($.__views.__alloyId578);
    $.__views.__alloyId579 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId578"
    });
    $.__views.__alloyId577.add($.__views.__alloyId578);
    $.__views.__alloyId579 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Payment Summary",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId579"
    });
    $.__views.__alloyId577.add($.__views.__alloyId579);
=======
<<<<<<< HEAD
        id: "__alloyId625"
    });
    $.__views.__alloyId623.add($.__views.__alloyId625);
=======
        id: "__alloyId579"
    });
    $.__views.__alloyId577.add($.__views.__alloyId579);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId579"
    });
    $.__views.__alloyId577.add($.__views.__alloyId579);
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%"
    });
    $.__views.hopOn4.add($.__views.scrollView);
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId580 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId626 = Ti.UI.createView({
=======
    $.__views.__alloyId580 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId580 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        width: "90%",
        height: "50",
        id: "__alloyId580"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId580);
=======
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId626);
=======
    $.__views.scrollView.add($.__views.__alloyId580);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.scrollView.add($.__views.__alloyId580);
>>>>>>> origin/master
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
<<<<<<< HEAD
    $.__views.__alloyId580.add($.__views.item_title);
=======
<<<<<<< HEAD
    $.__views.__alloyId626.add($.__views.item_title);
=======
    $.__views.__alloyId580.add($.__views.item_title);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId580.add($.__views.item_title);
>>>>>>> origin/master
    $.__views.desc_title = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        text: "Mobile Number",
        id: "desc_title",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "50",
        width: "50%",
        top: "5"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId580.add($.__views.desc_title);
=======
<<<<<<< HEAD
    $.__views.__alloyId626.add($.__views.desc_title);
=======
    $.__views.__alloyId580.add($.__views.desc_title);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId580.add($.__views.desc_title);
>>>>>>> origin/master
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
<<<<<<< HEAD
    $.__views.__alloyId580.add($.__views.cost_title);
    $.__views.__alloyId581 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId626.add($.__views.cost_title);
    $.__views.__alloyId627 = Ti.UI.createView({
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId580.add($.__views.cost_title);
    $.__views.__alloyId581 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId581"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId581);
=======
    $.__views.scrollView.add($.__views.__alloyId627);
=======
    $.__views.__alloyId580.add($.__views.cost_title);
    $.__views.__alloyId581 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId581"
    });
    $.__views.scrollView.add($.__views.__alloyId581);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.scrollView.add($.__views.__alloyId581);
>>>>>>> origin/master
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
<<<<<<< HEAD
    $.__views.__alloyId581.add($.__views.item_data);
=======
<<<<<<< HEAD
    $.__views.__alloyId627.add($.__views.item_data);
=======
    $.__views.__alloyId581.add($.__views.item_data);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId581.add($.__views.item_data);
>>>>>>> origin/master
    $.__views.desc_data = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "MNP - 0102431567",
        id: "desc_data",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "30",
        width: "50%",
        top: "5"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId581.add($.__views.desc_data);
=======
<<<<<<< HEAD
    $.__views.__alloyId627.add($.__views.desc_data);
=======
    $.__views.__alloyId581.add($.__views.desc_data);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId581.add($.__views.desc_data);
>>>>>>> origin/master
    $.__views.cost_data = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "RM00.00",
        id: "cost_data",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "30",
        width: "30%",
        top: "5"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId581.add($.__views.cost_data);
    $.__views.__alloyId582 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId627.add($.__views.cost_data);
    $.__views.__alloyId628 = Ti.UI.createView({
=======
    $.__views.__alloyId581.add($.__views.cost_data);
    $.__views.__alloyId582 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId581.add($.__views.cost_data);
    $.__views.__alloyId582 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        width: "100%",
        backgroundColor: "#bf0404",
        top: "10",
        height: "50",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId582"
    });
    $.__views.scrollView.add($.__views.__alloyId582);
=======
<<<<<<< HEAD
        id: "__alloyId628"
    });
    $.__views.scrollView.add($.__views.__alloyId628);
=======
        id: "__alloyId582"
    });
    $.__views.scrollView.add($.__views.__alloyId582);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId582"
    });
    $.__views.scrollView.add($.__views.__alloyId582);
>>>>>>> origin/master
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
<<<<<<< HEAD
    $.__views.__alloyId582.add($.__views.total_payment);
=======
<<<<<<< HEAD
    $.__views.__alloyId628.add($.__views.total_payment);
=======
    $.__views.__alloyId582.add($.__views.total_payment);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId582.add($.__views.total_payment);
>>>>>>> origin/master
    $.__views.total_price = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "RM00.00",
        id: "total_price",
        backgroundColor: "transparent",
        color: "white",
        width: "20%",
        top: "10"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId582.add($.__views.total_price);
    $.__views.__alloyId583 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId628.add($.__views.total_price);
    $.__views.__alloyId629 = Ti.UI.createView({
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId582.add($.__views.total_price);
    $.__views.__alloyId583 = Ti.UI.createView({
>>>>>>> origin/master
        height: "50",
        backgroundColor: "red",
        id: "__alloyId583"
    });
    $.__views.hopOn4.add($.__views.__alloyId583);
    submit ? $.__views.__alloyId583.addEventListener("click", submit) : __defers["$.__views.__alloyId583!click!submit"] = true;
    $.__views.__alloyId584 = Ti.UI.createLabel({
        text: "SUBMIT",
        color: "white",
        id: "__alloyId584"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId583.add($.__views.__alloyId584);
=======
    $.__views.__alloyId629.add($.__views.__alloyId630);
=======
    $.__views.__alloyId582.add($.__views.total_price);
    $.__views.__alloyId583 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId583"
    });
    $.__views.hopOn4.add($.__views.__alloyId583);
    submit ? $.__views.__alloyId583.addEventListener("click", submit) : __defers["$.__views.__alloyId583!click!submit"] = true;
    $.__views.__alloyId584 = Ti.UI.createLabel({
        text: "SUBMIT",
        color: "white",
        id: "__alloyId584"
    });
    $.__views.__alloyId583.add($.__views.__alloyId584);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId583.add($.__views.__alloyId584);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
<<<<<<< HEAD
<<<<<<< HEAD
    __defers["$.__views.__alloyId576!click!back"] && $.__views.__alloyId576.addEventListener("click", back);
    __defers["$.__views.__alloyId583!click!submit"] && $.__views.__alloyId583.addEventListener("click", submit);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId622!click!back"] && $.__views.__alloyId622.addEventListener("click", back);
    __defers["$.__views.__alloyId629!click!submit"] && $.__views.__alloyId629.addEventListener("click", submit);
=======
    __defers["$.__views.__alloyId576!click!back"] && $.__views.__alloyId576.addEventListener("click", back);
    __defers["$.__views.__alloyId583!click!submit"] && $.__views.__alloyId583.addEventListener("click", submit);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    __defers["$.__views.__alloyId576!click!back"] && $.__views.__alloyId576.addEventListener("click", back);
    __defers["$.__views.__alloyId583!click!submit"] && $.__views.__alloyId583.addEventListener("click", submit);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;