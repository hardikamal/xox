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
    $.__views.__alloyId580 = Alloy.createController("_header", {
        id: "__alloyId580",
=======
<<<<<<< HEAD
    $.__views.__alloyId619 = Alloy.createController("_header", {
        id: "__alloyId619",
        __parentSymbol: $.__views.hopOn4
    });
    $.__views.__alloyId619.setParent($.__views.hopOn4);
    $.__views.__alloyId620 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId620"
    });
    $.__views.hopOn4.add($.__views.__alloyId620);
    $.__views.__alloyId621 = Ti.UI.createLabel({
=======
    $.__views.__alloyId450 = Alloy.createController("_header", {
        id: "__alloyId450",
>>>>>>> origin/master
        __parentSymbol: $.__views.hopOn4
    });
    $.__views.__alloyId580.setParent($.__views.hopOn4);
    $.__views.__alloyId581 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId581"
    });
<<<<<<< HEAD
    $.__views.hopOn4.add($.__views.__alloyId581);
    $.__views.__alloyId582 = Ti.UI.createLabel({
=======
    $.__views.hopOn4.add($.__views.__alloyId451);
    $.__views.__alloyId452 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId582"
    });
    $.__views.__alloyId581.add($.__views.__alloyId582);
    $.__views.__alloyId583 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId621"
    });
    $.__views.__alloyId620.add($.__views.__alloyId621);
    $.__views.__alloyId622 = Ti.UI.createImageView({
=======
        id: "__alloyId452"
    });
    $.__views.__alloyId451.add($.__views.__alloyId452);
    $.__views.__alloyId453 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId583"
=======
<<<<<<< HEAD
        id: "__alloyId622"
    });
    $.__views.__alloyId620.add($.__views.__alloyId622);
    back ? $.__views.__alloyId622.addEventListener("click", back) : __defers["$.__views.__alloyId622!click!back"] = true;
    $.__views.__alloyId623 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId623"
    });
    $.__views.hopOn4.add($.__views.__alloyId623);
    $.__views.__alloyId624 = Ti.UI.createLabel({
=======
        id: "__alloyId453"
>>>>>>> origin/master
    });
    $.__views.__alloyId581.add($.__views.__alloyId583);
    back ? $.__views.__alloyId583.addEventListener("click", back) : __defers["$.__views.__alloyId583!click!back"] = true;
    $.__views.__alloyId584 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId584"
    });
<<<<<<< HEAD
    $.__views.hopOn4.add($.__views.__alloyId584);
    $.__views.__alloyId585 = Ti.UI.createLabel({
=======
    $.__views.hopOn4.add($.__views.__alloyId454);
    $.__views.__alloyId455 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Step 4 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId585"
    });
    $.__views.__alloyId584.add($.__views.__alloyId585);
    $.__views.__alloyId586 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId624"
    });
    $.__views.__alloyId623.add($.__views.__alloyId624);
    $.__views.__alloyId625 = Ti.UI.createLabel({
=======
        id: "__alloyId455"
    });
    $.__views.__alloyId454.add($.__views.__alloyId455);
    $.__views.__alloyId456 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Payment Summary",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId586"
    });
    $.__views.__alloyId584.add($.__views.__alloyId586);
=======
<<<<<<< HEAD
        id: "__alloyId625"
    });
    $.__views.__alloyId623.add($.__views.__alloyId625);
=======
        id: "__alloyId456"
    });
    $.__views.__alloyId454.add($.__views.__alloyId456);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%"
    });
    $.__views.hopOn4.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId587 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId626 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "50",
        id: "__alloyId626"
    });
    $.__views.scrollView.add($.__views.__alloyId626);
=======
    $.__views.__alloyId457 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        width: "90%",
        height: "50",
        id: "__alloyId587"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId587);
=======
    $.__views.scrollView.add($.__views.__alloyId457);
>>>>>>> origin/master
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
    $.__views.__alloyId587.add($.__views.item_title);
=======
<<<<<<< HEAD
    $.__views.__alloyId626.add($.__views.item_title);
=======
    $.__views.__alloyId457.add($.__views.item_title);
>>>>>>> origin/master
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
    $.__views.__alloyId587.add($.__views.desc_title);
=======
<<<<<<< HEAD
    $.__views.__alloyId626.add($.__views.desc_title);
=======
    $.__views.__alloyId457.add($.__views.desc_title);
>>>>>>> origin/master
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
    $.__views.__alloyId587.add($.__views.cost_title);
    $.__views.__alloyId588 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId626.add($.__views.cost_title);
    $.__views.__alloyId627 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId627"
    });
    $.__views.scrollView.add($.__views.__alloyId627);
=======
    $.__views.__alloyId457.add($.__views.cost_title);
    $.__views.__alloyId458 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId588"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId588);
=======
    $.__views.scrollView.add($.__views.__alloyId458);
>>>>>>> origin/master
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
    $.__views.__alloyId588.add($.__views.item_data);
=======
<<<<<<< HEAD
    $.__views.__alloyId627.add($.__views.item_data);
=======
    $.__views.__alloyId458.add($.__views.item_data);
>>>>>>> origin/master
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
    $.__views.__alloyId588.add($.__views.desc_data);
=======
<<<<<<< HEAD
    $.__views.__alloyId627.add($.__views.desc_data);
=======
    $.__views.__alloyId458.add($.__views.desc_data);
>>>>>>> origin/master
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
    $.__views.__alloyId588.add($.__views.cost_data);
    $.__views.__alloyId589 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId627.add($.__views.cost_data);
    $.__views.__alloyId628 = Ti.UI.createView({
=======
    $.__views.__alloyId458.add($.__views.cost_data);
    $.__views.__alloyId459 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        width: "100%",
        backgroundColor: "#bf0404",
        top: "10",
        height: "50",
<<<<<<< HEAD
        id: "__alloyId589"
    });
    $.__views.scrollView.add($.__views.__alloyId589);
=======
<<<<<<< HEAD
        id: "__alloyId628"
    });
    $.__views.scrollView.add($.__views.__alloyId628);
=======
        id: "__alloyId459"
    });
    $.__views.scrollView.add($.__views.__alloyId459);
>>>>>>> origin/master
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
    $.__views.__alloyId589.add($.__views.total_payment);
=======
<<<<<<< HEAD
    $.__views.__alloyId628.add($.__views.total_payment);
=======
    $.__views.__alloyId459.add($.__views.total_payment);
>>>>>>> origin/master
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
    $.__views.__alloyId589.add($.__views.total_price);
    $.__views.__alloyId590 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId628.add($.__views.total_price);
    $.__views.__alloyId629 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId629"
    });
    $.__views.hopOn4.add($.__views.__alloyId629);
    submit ? $.__views.__alloyId629.addEventListener("click", submit) : __defers["$.__views.__alloyId629!click!submit"] = true;
    $.__views.__alloyId630 = Ti.UI.createLabel({
        text: "SUBMIT",
        color: "white",
        id: "__alloyId630"
    });
    $.__views.__alloyId629.add($.__views.__alloyId630);
=======
    $.__views.__alloyId459.add($.__views.total_price);
    $.__views.__alloyId460 = Ti.UI.createView({
>>>>>>> origin/master
        height: "50",
        backgroundColor: "red",
        id: "__alloyId590"
    });
    $.__views.hopOn4.add($.__views.__alloyId590);
    submit ? $.__views.__alloyId590.addEventListener("click", submit) : __defers["$.__views.__alloyId590!click!submit"] = true;
    $.__views.__alloyId591 = Ti.UI.createLabel({
        text: "SUBMIT",
        color: "white",
        id: "__alloyId591"
    });
<<<<<<< HEAD
    $.__views.__alloyId590.add($.__views.__alloyId591);
=======
    $.__views.__alloyId460.add($.__views.__alloyId461);
>>>>>>> origin/master
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
<<<<<<< HEAD
    __defers["$.__views.__alloyId583!click!back"] && $.__views.__alloyId583.addEventListener("click", back);
    __defers["$.__views.__alloyId590!click!submit"] && $.__views.__alloyId590.addEventListener("click", submit);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId622!click!back"] && $.__views.__alloyId622.addEventListener("click", back);
    __defers["$.__views.__alloyId629!click!submit"] && $.__views.__alloyId629.addEventListener("click", submit);
=======
    __defers["$.__views.__alloyId453!click!back"] && $.__views.__alloyId453.addEventListener("click", back);
    __defers["$.__views.__alloyId460!click!submit"] && $.__views.__alloyId460.addEventListener("click", submit);
>>>>>>> origin/master
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;