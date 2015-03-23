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
    $.__views.__alloyId588 = Alloy.createController("_header", {
        id: "__alloyId588",
        __parentSymbol: $.__views.hopOn3
    });
    $.__views.__alloyId588.setParent($.__views.hopOn3);
    $.__views.__alloyId589 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId589"
    });
    $.__views.hopOn3.add($.__views.__alloyId589);
    $.__views.__alloyId590 = Ti.UI.createLabel({
=======
    $.__views.__alloyId419 = Alloy.createController("_header", {
        id: "__alloyId419",
        __parentSymbol: $.__views.hopOn3
    });
    $.__views.__alloyId419.setParent($.__views.hopOn3);
    $.__views.__alloyId420 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId420"
    });
    $.__views.hopOn3.add($.__views.__alloyId420);
    $.__views.__alloyId421 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId590"
    });
    $.__views.__alloyId589.add($.__views.__alloyId590);
    $.__views.__alloyId591 = Ti.UI.createImageView({
=======
        id: "__alloyId421"
    });
    $.__views.__alloyId420.add($.__views.__alloyId421);
    $.__views.__alloyId422 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId591"
    });
    $.__views.__alloyId589.add($.__views.__alloyId591);
    back ? $.__views.__alloyId591.addEventListener("click", back) : __defers["$.__views.__alloyId591!click!back"] = true;
    $.__views.__alloyId592 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId592"
    });
    $.__views.hopOn3.add($.__views.__alloyId592);
    $.__views.__alloyId593 = Ti.UI.createLabel({
=======
        id: "__alloyId422"
    });
    $.__views.__alloyId420.add($.__views.__alloyId422);
    back ? $.__views.__alloyId422.addEventListener("click", back) : __defers["$.__views.__alloyId422!click!back"] = true;
    $.__views.__alloyId423 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId423"
    });
    $.__views.hopOn3.add($.__views.__alloyId423);
    $.__views.__alloyId424 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Step 3 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId593"
    });
    $.__views.__alloyId592.add($.__views.__alloyId593);
    $.__views.__alloyId594 = Ti.UI.createLabel({
=======
        id: "__alloyId424"
    });
    $.__views.__alloyId423.add($.__views.__alloyId424);
    $.__views.__alloyId425 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Porting Info",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId594"
    });
    $.__views.__alloyId592.add($.__views.__alloyId594);
    $.__views.__alloyId595 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId595"
    });
    $.__views.hopOn3.add($.__views.__alloyId595);
=======
        id: "__alloyId425"
    });
    $.__views.__alloyId423.add($.__views.__alloyId425);
    $.__views.__alloyId426 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId426"
    });
    $.__views.hopOn3.add($.__views.__alloyId426);
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
    $.__views.__alloyId595.add($.__views.prepaid_subtitle);
=======
    $.__views.__alloyId426.add($.__views.prepaid_subtitle);
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
    $.__views.__alloyId595.add($.__views.prepaid_mandatory);
    $.__views.__alloyId596 = Ti.UI.createView({
        layout: "vertical",
        width: "90%",
        height: Ti.UI.SIZE,
        id: "__alloyId596"
    });
    $.__views.hopOn3.add($.__views.__alloyId596);
    $.__views.__alloyId597 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId597"
    });
    $.__views.__alloyId596.add($.__views.__alloyId597);
    $.__views.__alloyId598 = Ti.UI.createLabel({
=======
    $.__views.__alloyId426.add($.__views.prepaid_mandatory);
    $.__views.__alloyId427 = Ti.UI.createView({
        layout: "vertical",
        width: "90%",
        height: Ti.UI.SIZE,
        id: "__alloyId427"
    });
    $.__views.hopOn3.add($.__views.__alloyId427);
    $.__views.__alloyId428 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId428"
    });
    $.__views.__alloyId427.add($.__views.__alloyId428);
    $.__views.__alloyId429 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Name (as per NRIC/ Armed Force ID/ Passport)*",
        color: "black",
        height: "20",
        left: "0",
<<<<<<< HEAD
        id: "__alloyId598"
    });
    $.__views.__alloyId597.add($.__views.__alloyId598);
    $.__views.__alloyId599 = Ti.UI.createTextField({
=======
        id: "__alloyId429"
    });
    $.__views.__alloyId428.add($.__views.__alloyId429);
    $.__views.__alloyId430 = Ti.UI.createTextField({
>>>>>>> origin/master
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
<<<<<<< HEAD
        id: "__alloyId599"
    });
    $.__views.__alloyId597.add($.__views.__alloyId599);
=======
        id: "__alloyId430"
    });
    $.__views.__alloyId428.add($.__views.__alloyId430);
>>>>>>> origin/master
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId596.add($.__views.contentView2);
    $.__views.__alloyId600 = Ti.UI.createLabel({
=======
    $.__views.__alloyId427.add($.__views.contentView2);
    $.__views.__alloyId431 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Reg Type*",
        color: "black",
        height: "20",
        left: "0",
<<<<<<< HEAD
        id: "__alloyId600"
    });
    $.__views.contentView2.add($.__views.__alloyId600);
=======
        id: "__alloyId431"
    });
    $.__views.contentView2.add($.__views.__alloyId431);
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
    var __alloyId601 = [];
    $.__views.__alloyId602 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId602"
    });
    __alloyId601.push($.__views.__alloyId602);
    $.__views.__alloyId603 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId603"
    });
    __alloyId601.push($.__views.__alloyId603);
    $.__views.__alloyId604 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId604"
    });
    __alloyId601.push($.__views.__alloyId604);
    $.__views.picker.add(__alloyId601);
    $.__views.__alloyId605 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId605"
    });
    $.__views.__alloyId596.add($.__views.__alloyId605);
    $.__views.__alloyId606 = Ti.UI.createLabel({
=======
    var __alloyId432 = [];
    $.__views.__alloyId433 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId433"
    });
    __alloyId432.push($.__views.__alloyId433);
    $.__views.__alloyId434 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId434"
    });
    __alloyId432.push($.__views.__alloyId434);
    $.__views.__alloyId435 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId435"
    });
    __alloyId432.push($.__views.__alloyId435);
    $.__views.picker.add(__alloyId432);
    $.__views.__alloyId436 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId436"
    });
    $.__views.__alloyId427.add($.__views.__alloyId436);
    $.__views.__alloyId437 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
<<<<<<< HEAD
        id: "__alloyId606"
    });
    $.__views.__alloyId605.add($.__views.__alloyId606);
    $.__views.__alloyId607 = Ti.UI.createTextField({
=======
        id: "__alloyId437"
    });
    $.__views.__alloyId436.add($.__views.__alloyId437);
    $.__views.__alloyId438 = Ti.UI.createTextField({
>>>>>>> origin/master
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
<<<<<<< HEAD
        id: "__alloyId607"
    });
    $.__views.__alloyId605.add($.__views.__alloyId607);
    $.__views.__alloyId608 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId608"
    });
    $.__views.hopOn3.add($.__views.__alloyId608);
=======
        id: "__alloyId438"
    });
    $.__views.__alloyId436.add($.__views.__alloyId438);
    $.__views.__alloyId439 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId439"
    });
    $.__views.hopOn3.add($.__views.__alloyId439);
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
    $.__views.__alloyId608.add($.__views.prepaid_subtitle);
=======
    $.__views.__alloyId439.add($.__views.prepaid_subtitle);
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
    $.__views.__alloyId609 = Ti.UI.createLabel({
=======
    $.__views.__alloyId440 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Current Mobile Operator",
        color: "black",
        height: "20",
        left: "0",
<<<<<<< HEAD
        id: "__alloyId609"
    });
    $.__views.contentView3.add($.__views.__alloyId609);
=======
        id: "__alloyId440"
    });
    $.__views.contentView3.add($.__views.__alloyId440);
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
    var __alloyId610 = [];
    $.__views.__alloyId611 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId611"
    });
    __alloyId610.push($.__views.__alloyId611);
    $.__views.__alloyId612 = Ti.UI.createPickerRow({
        title: "Digi",
        id: "__alloyId612"
    });
    __alloyId610.push($.__views.__alloyId612);
    $.__views.__alloyId613 = Ti.UI.createPickerRow({
        title: "Maxis",
        id: "__alloyId613"
    });
    __alloyId610.push($.__views.__alloyId613);
    $.__views.picker.add(__alloyId610);
    $.__views.__alloyId614 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId614"
    });
    $.__views.scrollView.add($.__views.__alloyId614);
    $.__views.__alloyId615 = Ti.UI.createLabel({
=======
    var __alloyId441 = [];
    $.__views.__alloyId442 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId442"
    });
    __alloyId441.push($.__views.__alloyId442);
    $.__views.__alloyId443 = Ti.UI.createPickerRow({
        title: "Digi",
        id: "__alloyId443"
    });
    __alloyId441.push($.__views.__alloyId443);
    $.__views.__alloyId444 = Ti.UI.createPickerRow({
        title: "Maxis",
        id: "__alloyId444"
    });
    __alloyId441.push($.__views.__alloyId444);
    $.__views.picker.add(__alloyId441);
    $.__views.__alloyId445 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId445"
    });
    $.__views.scrollView.add($.__views.__alloyId445);
    $.__views.__alloyId446 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "MSISDN (e.g 010xxxxxxxx)",
        color: "black",
        height: "20",
        left: "0",
<<<<<<< HEAD
        id: "__alloyId615"
    });
    $.__views.__alloyId614.add($.__views.__alloyId615);
    $.__views.__alloyId616 = Ti.UI.createTextField({
=======
        id: "__alloyId446"
    });
    $.__views.__alloyId445.add($.__views.__alloyId446);
    $.__views.__alloyId447 = Ti.UI.createTextField({
>>>>>>> origin/master
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
<<<<<<< HEAD
        id: "__alloyId616"
    });
    $.__views.__alloyId614.add($.__views.__alloyId616);
    $.__views.__alloyId617 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId617"
    });
    $.__views.hopOn3.add($.__views.__alloyId617);
    proceed ? $.__views.__alloyId617.addEventListener("click", proceed) : __defers["$.__views.__alloyId617!click!proceed"] = true;
    $.__views.__alloyId618 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId618"
    });
    $.__views.__alloyId617.add($.__views.__alloyId618);
=======
        id: "__alloyId447"
    });
    $.__views.__alloyId445.add($.__views.__alloyId447);
    $.__views.__alloyId448 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId448"
    });
    $.__views.hopOn3.add($.__views.__alloyId448);
    proceed ? $.__views.__alloyId448.addEventListener("click", proceed) : __defers["$.__views.__alloyId448!click!proceed"] = true;
    $.__views.__alloyId449 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId449"
    });
    $.__views.__alloyId448.add($.__views.__alloyId449);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 515;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 515;
    }
<<<<<<< HEAD
    __defers["$.__views.__alloyId591!click!back"] && $.__views.__alloyId591.addEventListener("click", back);
    __defers["$.__views.__alloyId617!click!proceed"] && $.__views.__alloyId617.addEventListener("click", proceed);
=======
    __defers["$.__views.__alloyId422!click!back"] && $.__views.__alloyId422.addEventListener("click", back);
    __defers["$.__views.__alloyId448!click!proceed"] && $.__views.__alloyId448.addEventListener("click", proceed);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;