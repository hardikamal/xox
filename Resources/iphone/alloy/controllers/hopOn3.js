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
        DRAWER.navigation("hopOn2", 1);
    }
    function proceed() {
        DRAWER.navigation("hopOn4", 1);
        console.log("proceed");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "hopOn3";
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
    $.__views.hopOn3 = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "hopOn3"
    });
    $.__views.hopOn3 && $.addTopLevelView($.__views.hopOn3);
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId542 = Alloy.createController("_header", {
        id: "__alloyId542",
=======
<<<<<<< HEAD
    $.__views.__alloyId588 = Alloy.createController("_header", {
        id: "__alloyId588",
=======
    $.__views.__alloyId542 = Alloy.createController("_header", {
        id: "__alloyId542",
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId542 = Alloy.createController("_header", {
        id: "__alloyId542",
>>>>>>> origin/master
        __parentSymbol: $.__views.hopOn3
    });
    $.__views.__alloyId542.setParent($.__views.hopOn3);
    $.__views.__alloyId543 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId543"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.hopOn3.add($.__views.__alloyId543);
    $.__views.__alloyId544 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.hopOn3.add($.__views.__alloyId589);
    $.__views.__alloyId590 = Ti.UI.createLabel({
=======
    $.__views.hopOn3.add($.__views.__alloyId543);
    $.__views.__alloyId544 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.hopOn3.add($.__views.__alloyId543);
    $.__views.__alloyId544 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId544"
    });
    $.__views.__alloyId543.add($.__views.__alloyId544);
    $.__views.__alloyId545 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId590"
    });
    $.__views.__alloyId589.add($.__views.__alloyId590);
    $.__views.__alloyId591 = Ti.UI.createImageView({
=======
        id: "__alloyId544"
    });
    $.__views.__alloyId543.add($.__views.__alloyId544);
    $.__views.__alloyId545 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId544"
    });
    $.__views.__alloyId543.add($.__views.__alloyId544);
    $.__views.__alloyId545 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId545"
=======
<<<<<<< HEAD
        id: "__alloyId591"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId545"
>>>>>>> origin/master
    });
    $.__views.__alloyId543.add($.__views.__alloyId545);
    back ? $.__views.__alloyId545.addEventListener("click", back) : __defers["$.__views.__alloyId545!click!back"] = true;
    $.__views.__alloyId546 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId546"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.hopOn3.add($.__views.__alloyId546);
    $.__views.__alloyId547 = Ti.UI.createLabel({
=======
    $.__views.hopOn3.add($.__views.__alloyId592);
    $.__views.__alloyId593 = Ti.UI.createLabel({
=======
        id: "__alloyId545"
    });
    $.__views.__alloyId543.add($.__views.__alloyId545);
    back ? $.__views.__alloyId545.addEventListener("click", back) : __defers["$.__views.__alloyId545!click!back"] = true;
    $.__views.__alloyId546 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId546"
    });
    $.__views.hopOn3.add($.__views.__alloyId546);
    $.__views.__alloyId547 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.hopOn3.add($.__views.__alloyId546);
    $.__views.__alloyId547 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Step 3 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId547"
    });
    $.__views.__alloyId546.add($.__views.__alloyId547);
    $.__views.__alloyId548 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId593"
    });
    $.__views.__alloyId592.add($.__views.__alloyId593);
    $.__views.__alloyId594 = Ti.UI.createLabel({
=======
        id: "__alloyId547"
    });
    $.__views.__alloyId546.add($.__views.__alloyId547);
    $.__views.__alloyId548 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId547"
    });
    $.__views.__alloyId546.add($.__views.__alloyId547);
    $.__views.__alloyId548 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Porting Info",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId548"
=======
<<<<<<< HEAD
        id: "__alloyId594"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId548"
>>>>>>> origin/master
    });
    $.__views.__alloyId546.add($.__views.__alloyId548);
    $.__views.__alloyId549 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId549"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.hopOn3.add($.__views.__alloyId549);
=======
    $.__views.hopOn3.add($.__views.__alloyId595);
=======
        id: "__alloyId548"
    });
    $.__views.__alloyId546.add($.__views.__alloyId548);
    $.__views.__alloyId549 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId549"
    });
    $.__views.hopOn3.add($.__views.__alloyId549);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.hopOn3.add($.__views.__alloyId549);
>>>>>>> origin/master
    $.__views.prepaid_subtitle = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "HOPON DETAILS",
        id: "prepaid_subtitle",
        backgroundColor: "transparent",
        color: "white",
        top: "5",
        left: "20",
        width: "38%"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId549.add($.__views.prepaid_subtitle);
=======
<<<<<<< HEAD
    $.__views.__alloyId595.add($.__views.prepaid_subtitle);
=======
    $.__views.__alloyId549.add($.__views.prepaid_subtitle);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId549.add($.__views.prepaid_subtitle);
>>>>>>> origin/master
    $.__views.prepaid_mandatory = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "*Please fill in the Mandatory field",
        id: "prepaid_mandatory",
        backgroundColor: "transparent",
        color: "black",
        width: "50%",
        top: "5"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId549.add($.__views.prepaid_mandatory);
    $.__views.__alloyId550 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId595.add($.__views.prepaid_mandatory);
    $.__views.__alloyId596 = Ti.UI.createView({
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId549.add($.__views.prepaid_mandatory);
    $.__views.__alloyId550 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        width: "90%",
        height: Ti.UI.SIZE,
        id: "__alloyId550"
    });
    $.__views.hopOn3.add($.__views.__alloyId550);
    $.__views.__alloyId551 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId551"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId550.add($.__views.__alloyId551);
    $.__views.__alloyId552 = Ti.UI.createLabel({
=======
    $.__views.__alloyId596.add($.__views.__alloyId597);
    $.__views.__alloyId598 = Ti.UI.createLabel({
=======
    $.__views.__alloyId549.add($.__views.prepaid_mandatory);
    $.__views.__alloyId550 = Ti.UI.createView({
        layout: "vertical",
        width: "90%",
        height: Ti.UI.SIZE,
        id: "__alloyId550"
    });
    $.__views.hopOn3.add($.__views.__alloyId550);
    $.__views.__alloyId551 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId551"
    });
    $.__views.__alloyId550.add($.__views.__alloyId551);
    $.__views.__alloyId552 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId550.add($.__views.__alloyId551);
    $.__views.__alloyId552 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Name (as per NRIC/ Armed Force ID/ Passport)*",
        color: "black",
        height: "20",
        left: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId552"
    });
    $.__views.__alloyId551.add($.__views.__alloyId552);
    $.__views.__alloyId553 = Ti.UI.createTextField({
=======
<<<<<<< HEAD
        id: "__alloyId598"
    });
    $.__views.__alloyId597.add($.__views.__alloyId598);
    $.__views.__alloyId599 = Ti.UI.createTextField({
=======
        id: "__alloyId552"
    });
    $.__views.__alloyId551.add($.__views.__alloyId552);
    $.__views.__alloyId553 = Ti.UI.createTextField({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId552"
    });
    $.__views.__alloyId551.add($.__views.__alloyId552);
    $.__views.__alloyId553 = Ti.UI.createTextField({
>>>>>>> origin/master
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId553"
    });
    $.__views.__alloyId551.add($.__views.__alloyId553);
=======
<<<<<<< HEAD
        id: "__alloyId599"
    });
    $.__views.__alloyId597.add($.__views.__alloyId599);
=======
        id: "__alloyId553"
    });
    $.__views.__alloyId551.add($.__views.__alloyId553);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId553"
    });
    $.__views.__alloyId551.add($.__views.__alloyId553);
>>>>>>> origin/master
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId550.add($.__views.contentView2);
    $.__views.__alloyId554 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId596.add($.__views.contentView2);
    $.__views.__alloyId600 = Ti.UI.createLabel({
=======
    $.__views.__alloyId550.add($.__views.contentView2);
    $.__views.__alloyId554 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId550.add($.__views.contentView2);
    $.__views.__alloyId554 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Reg Type*",
        color: "black",
        height: "20",
        left: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId554"
    });
    $.__views.contentView2.add($.__views.__alloyId554);
=======
<<<<<<< HEAD
        id: "__alloyId600"
    });
    $.__views.contentView2.add($.__views.__alloyId600);
=======
        id: "__alloyId554"
    });
    $.__views.contentView2.add($.__views.__alloyId554);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId554"
    });
    $.__views.contentView2.add($.__views.__alloyId554);
>>>>>>> origin/master
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        height: Ti.UI.SIZE,
        width: "100%",
        top: "10",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "true"
    });
    $.__views.contentView2.add($.__views.picker);
<<<<<<< HEAD
<<<<<<< HEAD
    var __alloyId555 = [];
    $.__views.__alloyId556 = Ti.UI.createPickerRow({
=======
<<<<<<< HEAD
    var __alloyId601 = [];
    $.__views.__alloyId602 = Ti.UI.createPickerRow({
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    var __alloyId555 = [];
    $.__views.__alloyId556 = Ti.UI.createPickerRow({
>>>>>>> origin/master
        title: "Select an option",
        id: "__alloyId556"
    });
    __alloyId555.push($.__views.__alloyId556);
    $.__views.__alloyId557 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId557"
    });
    __alloyId555.push($.__views.__alloyId557);
    $.__views.__alloyId558 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId558"
    });
    __alloyId555.push($.__views.__alloyId558);
    $.__views.picker.add(__alloyId555);
    $.__views.__alloyId559 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId559"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId550.add($.__views.__alloyId559);
    $.__views.__alloyId560 = Ti.UI.createLabel({
=======
    $.__views.__alloyId596.add($.__views.__alloyId605);
    $.__views.__alloyId606 = Ti.UI.createLabel({
=======
    var __alloyId555 = [];
    $.__views.__alloyId556 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId556"
    });
    __alloyId555.push($.__views.__alloyId556);
    $.__views.__alloyId557 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId557"
    });
    __alloyId555.push($.__views.__alloyId557);
    $.__views.__alloyId558 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId558"
    });
    __alloyId555.push($.__views.__alloyId558);
    $.__views.picker.add(__alloyId555);
    $.__views.__alloyId559 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId559"
    });
    $.__views.__alloyId550.add($.__views.__alloyId559);
    $.__views.__alloyId560 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId550.add($.__views.__alloyId559);
    $.__views.__alloyId560 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId560"
    });
    $.__views.__alloyId559.add($.__views.__alloyId560);
    $.__views.__alloyId561 = Ti.UI.createTextField({
=======
<<<<<<< HEAD
        id: "__alloyId606"
    });
    $.__views.__alloyId605.add($.__views.__alloyId606);
    $.__views.__alloyId607 = Ti.UI.createTextField({
=======
        id: "__alloyId560"
    });
    $.__views.__alloyId559.add($.__views.__alloyId560);
    $.__views.__alloyId561 = Ti.UI.createTextField({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId560"
    });
    $.__views.__alloyId559.add($.__views.__alloyId560);
    $.__views.__alloyId561 = Ti.UI.createTextField({
>>>>>>> origin/master
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId561"
=======
<<<<<<< HEAD
        id: "__alloyId607"
=======
        id: "__alloyId561"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId561"
>>>>>>> origin/master
    });
    $.__views.__alloyId559.add($.__views.__alloyId561);
    $.__views.__alloyId562 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId562"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.hopOn3.add($.__views.__alloyId562);
=======
<<<<<<< HEAD
    $.__views.hopOn3.add($.__views.__alloyId608);
=======
    $.__views.hopOn3.add($.__views.__alloyId562);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.hopOn3.add($.__views.__alloyId562);
>>>>>>> origin/master
    $.__views.prepaid_subtitle = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "MOBILE INFO",
        id: "prepaid_subtitle",
        backgroundColor: "transparent",
        color: "white",
        top: "5",
        left: "20",
        width: "100%"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId562.add($.__views.prepaid_subtitle);
=======
<<<<<<< HEAD
    $.__views.__alloyId608.add($.__views.prepaid_subtitle);
=======
    $.__views.__alloyId562.add($.__views.prepaid_subtitle);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId562.add($.__views.prepaid_subtitle);
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.hopOn3.add($.__views.scrollView);
    $.__views.contentView3 = Ti.UI.createView({
        id: "contentView3",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
    $.__views.scrollView.add($.__views.contentView3);
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId563 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId609 = Ti.UI.createLabel({
=======
    $.__views.__alloyId563 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId563 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Current Mobile Operator",
        color: "black",
        height: "20",
        left: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId563"
    });
    $.__views.contentView3.add($.__views.__alloyId563);
=======
<<<<<<< HEAD
        id: "__alloyId609"
    });
    $.__views.contentView3.add($.__views.__alloyId609);
=======
        id: "__alloyId563"
    });
    $.__views.contentView3.add($.__views.__alloyId563);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId563"
    });
    $.__views.contentView3.add($.__views.__alloyId563);
>>>>>>> origin/master
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        height: Ti.UI.SIZE,
        width: "100%",
        top: "10",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "true"
    });
    $.__views.contentView3.add($.__views.picker);
<<<<<<< HEAD
<<<<<<< HEAD
    var __alloyId564 = [];
    $.__views.__alloyId565 = Ti.UI.createPickerRow({
=======
<<<<<<< HEAD
    var __alloyId610 = [];
    $.__views.__alloyId611 = Ti.UI.createPickerRow({
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    var __alloyId564 = [];
    $.__views.__alloyId565 = Ti.UI.createPickerRow({
>>>>>>> origin/master
        title: "Select an option",
        id: "__alloyId565"
    });
    __alloyId564.push($.__views.__alloyId565);
    $.__views.__alloyId566 = Ti.UI.createPickerRow({
        title: "Digi",
        id: "__alloyId566"
    });
    __alloyId564.push($.__views.__alloyId566);
    $.__views.__alloyId567 = Ti.UI.createPickerRow({
        title: "Maxis",
        id: "__alloyId567"
    });
    __alloyId564.push($.__views.__alloyId567);
    $.__views.picker.add(__alloyId564);
    $.__views.__alloyId568 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId568"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId568);
    $.__views.__alloyId569 = Ti.UI.createLabel({
=======
    $.__views.scrollView.add($.__views.__alloyId614);
    $.__views.__alloyId615 = Ti.UI.createLabel({
=======
    var __alloyId564 = [];
    $.__views.__alloyId565 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId565"
    });
    __alloyId564.push($.__views.__alloyId565);
    $.__views.__alloyId566 = Ti.UI.createPickerRow({
        title: "Digi",
        id: "__alloyId566"
    });
    __alloyId564.push($.__views.__alloyId566);
    $.__views.__alloyId567 = Ti.UI.createPickerRow({
        title: "Maxis",
        id: "__alloyId567"
    });
    __alloyId564.push($.__views.__alloyId567);
    $.__views.picker.add(__alloyId564);
    $.__views.__alloyId568 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId568"
    });
    $.__views.scrollView.add($.__views.__alloyId568);
    $.__views.__alloyId569 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.scrollView.add($.__views.__alloyId568);
    $.__views.__alloyId569 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "MSISDN (e.g 010xxxxxxxx)",
        color: "black",
        height: "20",
        left: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId569"
    });
    $.__views.__alloyId568.add($.__views.__alloyId569);
    $.__views.__alloyId570 = Ti.UI.createTextField({
=======
<<<<<<< HEAD
        id: "__alloyId615"
    });
    $.__views.__alloyId614.add($.__views.__alloyId615);
    $.__views.__alloyId616 = Ti.UI.createTextField({
=======
        id: "__alloyId569"
    });
    $.__views.__alloyId568.add($.__views.__alloyId569);
    $.__views.__alloyId570 = Ti.UI.createTextField({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId569"
    });
    $.__views.__alloyId568.add($.__views.__alloyId569);
    $.__views.__alloyId570 = Ti.UI.createTextField({
>>>>>>> origin/master
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId570"
=======
<<<<<<< HEAD
        id: "__alloyId616"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId570"
>>>>>>> origin/master
    });
    $.__views.__alloyId568.add($.__views.__alloyId570);
    $.__views.__alloyId571 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId571"
    });
    $.__views.hopOn3.add($.__views.__alloyId571);
    proceed ? $.__views.__alloyId571.addEventListener("click", proceed) : __defers["$.__views.__alloyId571!click!proceed"] = true;
    $.__views.__alloyId572 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId572"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId571.add($.__views.__alloyId572);
=======
    $.__views.__alloyId617.add($.__views.__alloyId618);
=======
        id: "__alloyId570"
    });
    $.__views.__alloyId568.add($.__views.__alloyId570);
    $.__views.__alloyId571 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId571"
    });
    $.__views.hopOn3.add($.__views.__alloyId571);
    proceed ? $.__views.__alloyId571.addEventListener("click", proceed) : __defers["$.__views.__alloyId571!click!proceed"] = true;
    $.__views.__alloyId572 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId572"
    });
    $.__views.__alloyId571.add($.__views.__alloyId572);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId571.add($.__views.__alloyId572);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 515;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 515;
    }
<<<<<<< HEAD
<<<<<<< HEAD
    __defers["$.__views.__alloyId545!click!back"] && $.__views.__alloyId545.addEventListener("click", back);
    __defers["$.__views.__alloyId571!click!proceed"] && $.__views.__alloyId571.addEventListener("click", proceed);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId591!click!back"] && $.__views.__alloyId591.addEventListener("click", back);
    __defers["$.__views.__alloyId617!click!proceed"] && $.__views.__alloyId617.addEventListener("click", proceed);
=======
    __defers["$.__views.__alloyId545!click!back"] && $.__views.__alloyId545.addEventListener("click", back);
    __defers["$.__views.__alloyId571!click!proceed"] && $.__views.__alloyId571.addEventListener("click", proceed);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    __defers["$.__views.__alloyId545!click!back"] && $.__views.__alloyId545.addEventListener("click", back);
    __defers["$.__views.__alloyId571!click!proceed"] && $.__views.__alloyId571.addEventListener("click", proceed);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;