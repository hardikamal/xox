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
        DRAWER.navigation("myAccount", 2);
    }
    function subjectType(e) {
        console.log("subjectType");
        subjectType = e.row.title;
    }
    function send() {
        console.log("send");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "report";
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
    $.__views.report = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "report"
    });
    $.__views.report && $.addTopLevelView($.__views.report);
<<<<<<< HEAD
    $.__views.__alloyId731 = Alloy.createController("_header", {
        id: "__alloyId731",
        __parentSymbol: $.__views.report
    });
    $.__views.__alloyId731.setParent($.__views.report);
    $.__views.__alloyId732 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId732"
    });
    $.__views.report.add($.__views.__alloyId732);
    $.__views.__alloyId733 = Ti.UI.createLabel({
=======
    $.__views.__alloyId570 = Alloy.createController("_header", {
        id: "__alloyId570",
        __parentSymbol: $.__views.report
    });
    $.__views.__alloyId570.setParent($.__views.report);
    $.__views.__alloyId571 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId571"
    });
    $.__views.report.add($.__views.__alloyId571);
    $.__views.__alloyId572 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Report Case",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId733"
    });
    $.__views.__alloyId732.add($.__views.__alloyId733);
    $.__views.__alloyId734 = Ti.UI.createImageView({
=======
        id: "__alloyId572"
    });
    $.__views.__alloyId571.add($.__views.__alloyId572);
    $.__views.__alloyId573 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId734"
    });
    $.__views.__alloyId732.add($.__views.__alloyId734);
    back ? $.__views.__alloyId734.addEventListener("click", back) : __defers["$.__views.__alloyId734!click!back"] = true;
=======
        id: "__alloyId573"
    });
    $.__views.__alloyId571.add($.__views.__alloyId573);
    back ? $.__views.__alloyId573.addEventListener("click", back) : __defers["$.__views.__alloyId573!click!back"] = true;
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F2F2F2"
    });
    $.__views.report.add($.__views.scrollView);
    $.__views.__alloyId574 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId574"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId735 = Ti.UI.createView({
=======
    $.__views.scrollView.add($.__views.__alloyId574);
    $.__views.__alloyId575 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "50",
        width: "30%",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId735"
    });
    $.__views.contentView.add($.__views.__alloyId735);
    $.__views.__alloyId736 = Ti.UI.createLabel({
=======
        id: "__alloyId575"
    });
    $.__views.__alloyId574.add($.__views.__alloyId575);
    $.__views.__alloyId576 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Subject",
        height: "50",
        color: "black",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId736"
    });
    $.__views.__alloyId735.add($.__views.__alloyId736);
    $.__views.__alloyId737 = Ti.UI.createLabel({
=======
        id: "__alloyId576"
    });
    $.__views.__alloyId575.add($.__views.__alloyId576);
    $.__views.__alloyId577 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId737"
    });
    $.__views.__alloyId735.add($.__views.__alloyId737);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "100%",
        width: "70%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.subjectLabel = Ti.UI.createLabel({
        text: "Select an option",
        id: "subjectLabel",
        height: "30",
        width: "100%",
        backgroundColor: "#FCFCFC",
        borderRadius: "5",
        borderColor: "gray",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.subjectLabel);
    showPicker ? $.__views.subjectLabel.addEventListener("click", showPicker) : __defers["$.__views.subjectLabel!click!showPicker"] = true;
    $.__views.__alloyId738 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId738"
    });
    $.__views.pickerContentView.add($.__views.__alloyId738);
    showPicker ? $.__views.__alloyId738.addEventListener("click", showPicker) : __defers["$.__views.__alloyId738!click!showPicker"] = true;
    $.__views.pickerView = Ti.UI.createView({
        id: "pickerView",
=======
        id: "__alloyId577"
    });
    $.__views.__alloyId575.add($.__views.__alloyId577);
    $.__views.__alloyId578 = Ti.UI.createView({
        layout: "composite",
>>>>>>> origin/master
        height: "50",
        width: "70%",
        id: "__alloyId578"
    });
    $.__views.__alloyId574.add($.__views.__alloyId578);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "30",
        top: "10",
        selectionIndicator: "true",
        borderRadius: "5",
        backgroundColor: "black",
        visible: "true"
    });
<<<<<<< HEAD
    $.__views.pickerView.add($.__views.picker);
    var __alloyId739 = [];
    $.__views.__alloyId740 = Ti.UI.createPickerRow({
        title: "Subject 1",
        id: "__alloyId740"
    });
    __alloyId739.push($.__views.__alloyId740);
    $.__views.__alloyId741 = Ti.UI.createPickerRow({
        title: "Subject 2",
        id: "__alloyId741"
    });
    __alloyId739.push($.__views.__alloyId741);
    $.__views.__alloyId742 = Ti.UI.createPickerRow({
        title: "Subject 3",
        id: "__alloyId742"
    });
    __alloyId739.push($.__views.__alloyId742);
    $.__views.picker.add(__alloyId739);
    subjectType ? $.__views.picker.addEventListener("change", subjectType) : __defers["$.__views.picker!change!subjectType"] = true;
    $.__views.__alloyId743 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId743"
    });
    $.__views.scrollView.add($.__views.__alloyId743);
    $.__views.__alloyId744 = Ti.UI.createView({
=======
    $.__views.__alloyId578.add($.__views.picker);
    var __alloyId579 = [];
    $.__views.__alloyId580 = Ti.UI.createPickerRow({
        title: "Subject 1",
        id: "__alloyId580"
    });
    __alloyId579.push($.__views.__alloyId580);
    $.__views.__alloyId581 = Ti.UI.createPickerRow({
        title: "Subject 2",
        id: "__alloyId581"
    });
    __alloyId579.push($.__views.__alloyId581);
    $.__views.__alloyId582 = Ti.UI.createPickerRow({
        title: "Subject 3",
        id: "__alloyId582"
    });
    __alloyId579.push($.__views.__alloyId582);
    $.__views.picker.add(__alloyId579);
    subjectType ? $.__views.picker.addEventListener("change", subjectType) : __defers["$.__views.picker!change!subjectType"] = true;
    $.__views.__alloyId583 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId583"
    });
    $.__views.__alloyId578.add($.__views.__alloyId583);
    $.__views.__alloyId584 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId584"
    });
    $.__views.scrollView.add($.__views.__alloyId584);
    $.__views.__alloyId585 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "50",
        width: "30%",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId744"
    });
    $.__views.__alloyId743.add($.__views.__alloyId744);
    $.__views.__alloyId745 = Ti.UI.createLabel({
=======
        id: "__alloyId585"
    });
    $.__views.__alloyId584.add($.__views.__alloyId585);
    $.__views.__alloyId586 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Email Address",
        height: "50",
        color: "black",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId745"
    });
    $.__views.__alloyId744.add($.__views.__alloyId745);
    $.__views.__alloyId746 = Ti.UI.createLabel({
=======
        id: "__alloyId586"
    });
    $.__views.__alloyId585.add($.__views.__alloyId586);
    $.__views.__alloyId587 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId746"
    });
    $.__views.__alloyId744.add($.__views.__alloyId746);
=======
        id: "__alloyId587"
    });
    $.__views.__alloyId585.add($.__views.__alloyId587);
>>>>>>> origin/master
    $.__views.email = Ti.UI.createTextField({
        id: "email",
        width: "70%",
        height: "30",
        borderRadius: "5",
        backgroundColor: "white",
        color: "black",
        borderColor: "gray"
    });
<<<<<<< HEAD
    $.__views.__alloyId743.add($.__views.email);
    $.__views.__alloyId747 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId747"
    });
    $.__views.scrollView.add($.__views.__alloyId747);
    $.__views.__alloyId748 = Ti.UI.createView({
=======
    $.__views.__alloyId584.add($.__views.email);
    $.__views.__alloyId588 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId588"
    });
    $.__views.scrollView.add($.__views.__alloyId588);
    $.__views.__alloyId589 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "50",
        width: "30%",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId748"
    });
    $.__views.__alloyId747.add($.__views.__alloyId748);
    $.__views.__alloyId749 = Ti.UI.createLabel({
=======
        id: "__alloyId589"
    });
    $.__views.__alloyId588.add($.__views.__alloyId589);
    $.__views.__alloyId590 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Mobile No.",
        height: "50",
        color: "black",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId749"
    });
    $.__views.__alloyId748.add($.__views.__alloyId749);
    $.__views.__alloyId750 = Ti.UI.createLabel({
=======
        id: "__alloyId590"
    });
    $.__views.__alloyId589.add($.__views.__alloyId590);
    $.__views.__alloyId591 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId750"
    });
    $.__views.__alloyId748.add($.__views.__alloyId750);
=======
        id: "__alloyId591"
    });
    $.__views.__alloyId589.add($.__views.__alloyId591);
>>>>>>> origin/master
    $.__views.mobileNo = Ti.UI.createTextField({
        id: "mobileNo",
        width: "70%",
        height: "30",
        borderRadius: "5",
        backgroundColor: "white",
        color: "black",
        borderColor: "gray"
    });
<<<<<<< HEAD
    $.__views.__alloyId747.add($.__views.mobileNo);
    $.__views.__alloyId751 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId751"
    });
    $.__views.scrollView.add($.__views.__alloyId751);
    $.__views.__alloyId752 = Ti.UI.createLabel({
=======
    $.__views.__alloyId588.add($.__views.mobileNo);
    $.__views.__alloyId592 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId592"
    });
    $.__views.scrollView.add($.__views.__alloyId592);
    $.__views.__alloyId593 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Message",
        height: "50",
        color: "black",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId752"
    });
    $.__views.__alloyId751.add($.__views.__alloyId752);
    $.__views.__alloyId753 = Ti.UI.createLabel({
=======
        id: "__alloyId593"
    });
    $.__views.__alloyId592.add($.__views.__alloyId593);
    $.__views.__alloyId594 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId753"
    });
    $.__views.__alloyId751.add($.__views.__alloyId753);
=======
        id: "__alloyId594"
    });
    $.__views.__alloyId592.add($.__views.__alloyId594);
>>>>>>> origin/master
    $.__views.message = Ti.UI.createTextArea({
        id: "message",
        height: "250",
        width: "90%",
        borderRadius: "5",
        backgroundColor: "white",
        color: "black",
        borderColor: "gray"
    });
    $.__views.scrollView.add($.__views.message);
<<<<<<< HEAD
    $.__views.__alloyId754 = Ti.UI.createLabel({
=======
    $.__views.__alloyId595 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "* Required fields",
        height: "50",
        color: "red",
        textAlign: "left",
        left: "10%",
        top: "10",
<<<<<<< HEAD
        id: "__alloyId754"
    });
    $.__views.scrollView.add($.__views.__alloyId754);
    $.__views.__alloyId755 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId755"
    });
    $.__views.report.add($.__views.__alloyId755);
    send ? $.__views.__alloyId755.addEventListener("click", send) : __defers["$.__views.__alloyId755!click!send"] = true;
    $.__views.__alloyId756 = Ti.UI.createLabel({
=======
        id: "__alloyId595"
    });
    $.__views.scrollView.add($.__views.__alloyId595);
    $.__views.__alloyId596 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId596"
    });
    $.__views.report.add($.__views.__alloyId596);
    send ? $.__views.__alloyId596.addEventListener("click", send) : __defers["$.__views.__alloyId596!click!send"] = true;
    $.__views.__alloyId597 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Send",
        color: "white",
        height: "100%",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId756"
    });
    $.__views.__alloyId755.add($.__views.__alloyId756);
=======
        id: "__alloyId597"
    });
    $.__views.__alloyId596.add($.__views.__alloyId597);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    var subjectType;
<<<<<<< HEAD
    __defers["$.__views.__alloyId734!click!back"] && $.__views.__alloyId734.addEventListener("click", back);
    __defers["$.__views.subjectLabel!click!showPicker"] && $.__views.subjectLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId738!click!showPicker"] && $.__views.__alloyId738.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!subjectType"] && $.__views.picker.addEventListener("change", subjectType);
    __defers["$.__views.__alloyId755!click!send"] && $.__views.__alloyId755.addEventListener("click", send);
=======
    __defers["$.__views.__alloyId573!click!back"] && $.__views.__alloyId573.addEventListener("click", back);
    __defers["$.__views.picker!change!subjectType"] && $.__views.picker.addEventListener("change", subjectType);
    __defers["$.__views.__alloyId596!click!send"] && $.__views.__alloyId596.addEventListener("click", send);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;