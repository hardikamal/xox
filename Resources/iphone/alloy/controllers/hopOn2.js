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
        DRAWER.navigation("hopOn", 1);
    }
    function proceed() {
        DRAWER.navigation("hopOn3", 1);
        console.log("proceed");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "hopOn2";
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
    $.__views.hopOn2 = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "hopOn2"
    });
    $.__views.hopOn2 && $.addTopLevelView($.__views.hopOn2);
<<<<<<< HEAD
    $.__views.__alloyId556 = Alloy.createController("_header", {
        id: "__alloyId556",
        __parentSymbol: $.__views.hopOn2
    });
    $.__views.__alloyId556.setParent($.__views.hopOn2);
    $.__views.__alloyId557 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId557"
    });
    $.__views.hopOn2.add($.__views.__alloyId557);
    $.__views.__alloyId558 = Ti.UI.createLabel({
=======
    $.__views.__alloyId387 = Alloy.createController("_header", {
        id: "__alloyId387",
        __parentSymbol: $.__views.hopOn2
    });
    $.__views.__alloyId387.setParent($.__views.hopOn2);
    $.__views.__alloyId388 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId388"
    });
    $.__views.hopOn2.add($.__views.__alloyId388);
    $.__views.__alloyId389 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId558"
    });
    $.__views.__alloyId557.add($.__views.__alloyId558);
    $.__views.__alloyId559 = Ti.UI.createImageView({
=======
        id: "__alloyId389"
    });
    $.__views.__alloyId388.add($.__views.__alloyId389);
    $.__views.__alloyId390 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId559"
    });
    $.__views.__alloyId557.add($.__views.__alloyId559);
    back ? $.__views.__alloyId559.addEventListener("click", back) : __defers["$.__views.__alloyId559!click!back"] = true;
    $.__views.__alloyId560 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId560"
    });
    $.__views.hopOn2.add($.__views.__alloyId560);
    $.__views.__alloyId561 = Ti.UI.createLabel({
=======
        id: "__alloyId390"
    });
    $.__views.__alloyId388.add($.__views.__alloyId390);
    back ? $.__views.__alloyId390.addEventListener("click", back) : __defers["$.__views.__alloyId390!click!back"] = true;
    $.__views.__alloyId391 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId391"
    });
    $.__views.hopOn2.add($.__views.__alloyId391);
    $.__views.__alloyId392 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Step 2 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId561"
    });
    $.__views.__alloyId560.add($.__views.__alloyId561);
    $.__views.__alloyId562 = Ti.UI.createLabel({
=======
        id: "__alloyId392"
    });
    $.__views.__alloyId391.add($.__views.__alloyId392);
    $.__views.__alloyId393 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Registration",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId562"
    });
    $.__views.__alloyId560.add($.__views.__alloyId562);
    $.__views.__alloyId563 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId563"
    });
    $.__views.hopOn2.add($.__views.__alloyId563);
=======
        id: "__alloyId393"
    });
    $.__views.__alloyId391.add($.__views.__alloyId393);
    $.__views.__alloyId394 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId394"
    });
    $.__views.hopOn2.add($.__views.__alloyId394);
>>>>>>> origin/master
    $.__views.prepaid_subtitle = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "PERSONAL DETAILS",
        id: "prepaid_subtitle",
        backgroundColor: "transparent",
        color: "white",
        top: "5",
        left: "20",
        width: "38%"
    });
<<<<<<< HEAD
    $.__views.__alloyId563.add($.__views.prepaid_subtitle);
=======
    $.__views.__alloyId394.add($.__views.prepaid_subtitle);
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
    $.__views.__alloyId563.add($.__views.prepaid_mandatory);
=======
    $.__views.__alloyId394.add($.__views.prepaid_mandatory);
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.hopOn2.add($.__views.scrollView);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "80",
        bottom: "5",
        top: "5"
    });
    $.__views.scrollView.add($.__views.contentView);
<<<<<<< HEAD
    $.__views.__alloyId564 = Ti.UI.createLabel({
=======
    $.__views.__alloyId395 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Salutation*",
        color: "black",
        height: "20",
        left: "0",
<<<<<<< HEAD
        id: "__alloyId564"
    });
    $.__views.contentView.add($.__views.__alloyId564);
=======
        id: "__alloyId395"
    });
    $.__views.contentView.add($.__views.__alloyId395);
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
    $.__views.contentView.add($.__views.picker);
<<<<<<< HEAD
    var __alloyId565 = [];
    $.__views.__alloyId566 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId566"
    });
    __alloyId565.push($.__views.__alloyId566);
    $.__views.__alloyId567 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId567"
    });
    __alloyId565.push($.__views.__alloyId567);
    $.__views.__alloyId568 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId568"
    });
    __alloyId565.push($.__views.__alloyId568);
    $.__views.picker.add(__alloyId565);
    $.__views.__alloyId569 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId569"
    });
    $.__views.scrollView.add($.__views.__alloyId569);
    $.__views.__alloyId570 = Ti.UI.createLabel({
=======
    var __alloyId396 = [];
    $.__views.__alloyId397 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId397"
    });
    __alloyId396.push($.__views.__alloyId397);
    $.__views.__alloyId398 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId398"
    });
    __alloyId396.push($.__views.__alloyId398);
    $.__views.__alloyId399 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId399"
    });
    __alloyId396.push($.__views.__alloyId399);
    $.__views.picker.add(__alloyId396);
    $.__views.__alloyId400 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId400"
    });
    $.__views.scrollView.add($.__views.__alloyId400);
    $.__views.__alloyId401 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Name (as per NRIC/ Armed Force ID/ Passport)*",
        color: "black",
        height: "20",
        left: "0",
<<<<<<< HEAD
        id: "__alloyId570"
    });
    $.__views.__alloyId569.add($.__views.__alloyId570);
    $.__views.__alloyId571 = Ti.UI.createTextField({
=======
        id: "__alloyId401"
    });
    $.__views.__alloyId400.add($.__views.__alloyId401);
    $.__views.__alloyId402 = Ti.UI.createTextField({
>>>>>>> origin/master
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
<<<<<<< HEAD
        id: "__alloyId571"
    });
    $.__views.__alloyId569.add($.__views.__alloyId571);
=======
        id: "__alloyId402"
    });
    $.__views.__alloyId400.add($.__views.__alloyId402);
>>>>>>> origin/master
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
    $.__views.scrollView.add($.__views.contentView2);
<<<<<<< HEAD
    $.__views.__alloyId572 = Ti.UI.createLabel({
=======
    $.__views.__alloyId403 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Reg Type*",
        color: "black",
        height: "20",
        left: "0",
<<<<<<< HEAD
        id: "__alloyId572"
    });
    $.__views.contentView2.add($.__views.__alloyId572);
=======
        id: "__alloyId403"
    });
    $.__views.contentView2.add($.__views.__alloyId403);
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
    var __alloyId573 = [];
    $.__views.__alloyId574 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId574"
    });
    __alloyId573.push($.__views.__alloyId574);
    $.__views.__alloyId575 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId575"
    });
    __alloyId573.push($.__views.__alloyId575);
    $.__views.__alloyId576 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId576"
    });
    __alloyId573.push($.__views.__alloyId576);
    $.__views.picker.add(__alloyId573);
    $.__views.__alloyId577 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId577"
    });
    $.__views.scrollView.add($.__views.__alloyId577);
    $.__views.__alloyId578 = Ti.UI.createLabel({
=======
    var __alloyId404 = [];
    $.__views.__alloyId405 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId405"
    });
    __alloyId404.push($.__views.__alloyId405);
    $.__views.__alloyId406 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId406"
    });
    __alloyId404.push($.__views.__alloyId406);
    $.__views.__alloyId407 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId407"
    });
    __alloyId404.push($.__views.__alloyId407);
    $.__views.picker.add(__alloyId404);
    $.__views.__alloyId408 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId408"
    });
    $.__views.scrollView.add($.__views.__alloyId408);
    $.__views.__alloyId409 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
<<<<<<< HEAD
        id: "__alloyId578"
    });
    $.__views.__alloyId577.add($.__views.__alloyId578);
    $.__views.__alloyId579 = Ti.UI.createTextField({
=======
        id: "__alloyId409"
    });
    $.__views.__alloyId408.add($.__views.__alloyId409);
    $.__views.__alloyId410 = Ti.UI.createTextField({
>>>>>>> origin/master
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
<<<<<<< HEAD
        id: "__alloyId579"
    });
    $.__views.__alloyId577.add($.__views.__alloyId579);
    $.__views.__alloyId580 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId580"
    });
    $.__views.scrollView.add($.__views.__alloyId580);
    $.__views.__alloyId581 = Ti.UI.createLabel({
=======
        id: "__alloyId410"
    });
    $.__views.__alloyId408.add($.__views.__alloyId410);
    $.__views.__alloyId411 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId411"
    });
    $.__views.scrollView.add($.__views.__alloyId411);
    $.__views.__alloyId412 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Retype NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
<<<<<<< HEAD
        id: "__alloyId581"
    });
    $.__views.__alloyId580.add($.__views.__alloyId581);
    $.__views.__alloyId582 = Ti.UI.createTextField({
=======
        id: "__alloyId412"
    });
    $.__views.__alloyId411.add($.__views.__alloyId412);
    $.__views.__alloyId413 = Ti.UI.createTextField({
>>>>>>> origin/master
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
<<<<<<< HEAD
        id: "__alloyId582"
    });
    $.__views.__alloyId580.add($.__views.__alloyId582);
    $.__views.__alloyId583 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId583"
    });
    $.__views.scrollView.add($.__views.__alloyId583);
    $.__views.__alloyId584 = Ti.UI.createLabel({
=======
        id: "__alloyId413"
    });
    $.__views.__alloyId411.add($.__views.__alloyId413);
    $.__views.__alloyId414 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId414"
    });
    $.__views.scrollView.add($.__views.__alloyId414);
    $.__views.__alloyId415 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Date of Birth*",
        color: "black",
        height: "20",
        left: "0",
<<<<<<< HEAD
        id: "__alloyId584"
    });
    $.__views.__alloyId583.add($.__views.__alloyId584);
    $.__views.__alloyId585 = Ti.UI.createTextField({
=======
        id: "__alloyId415"
    });
    $.__views.__alloyId414.add($.__views.__alloyId415);
    $.__views.__alloyId416 = Ti.UI.createTextField({
>>>>>>> origin/master
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
<<<<<<< HEAD
        id: "__alloyId585"
    });
    $.__views.__alloyId583.add($.__views.__alloyId585);
    $.__views.__alloyId586 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId586"
    });
    $.__views.hopOn2.add($.__views.__alloyId586);
    proceed ? $.__views.__alloyId586.addEventListener("click", proceed) : __defers["$.__views.__alloyId586!click!proceed"] = true;
    $.__views.__alloyId587 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId587"
    });
    $.__views.__alloyId586.add($.__views.__alloyId587);
=======
        id: "__alloyId416"
    });
    $.__views.__alloyId414.add($.__views.__alloyId416);
    $.__views.__alloyId417 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId417"
    });
    $.__views.hopOn2.add($.__views.__alloyId417);
    proceed ? $.__views.__alloyId417.addEventListener("click", proceed) : __defers["$.__views.__alloyId417!click!proceed"] = true;
    $.__views.__alloyId418 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId418"
    });
    $.__views.__alloyId417.add($.__views.__alloyId418);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 230;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 230;
    }
<<<<<<< HEAD
    __defers["$.__views.__alloyId559!click!back"] && $.__views.__alloyId559.addEventListener("click", back);
    __defers["$.__views.__alloyId586!click!proceed"] && $.__views.__alloyId586.addEventListener("click", proceed);
=======
    __defers["$.__views.__alloyId390!click!back"] && $.__views.__alloyId390.addEventListener("click", back);
    __defers["$.__views.__alloyId417!click!proceed"] && $.__views.__alloyId417.addEventListener("click", proceed);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;