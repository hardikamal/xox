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
        DRAWER.navigation("products", 2);
    }
    function idd(e) {
        console.log("idd");
        idd = e.row.title;
        ("iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname) && ($.iddLabel.text = idd);
        switch (e.rowIndex) {
          case 0:
            $.view1.setVisible(true);
            $.view2.setVisible(false);
            $.view3.setVisible(false);
            $.view4.setVisible(false);
            break;

          case 1:
            $.view1.setVisible(false);
            $.view2.setVisible(true);
            $.view3.setVisible(false);
            $.view4.setVisible(false);
            break;

          case 2:
            $.view1.setVisible(false);
            $.view2.setVisible(false);
            $.view3.setVisible(true);
            $.view4.setVisible(false);
            break;

          case 3:
            $.view1.setVisible(false);
            $.view2.setVisible(false);
            $.view3.setVisible(false);
            $.view4.setVisible(true);
        }
    }
    function showPicker() {
        console.log("showPicker");
        console.log("$.pickerView.visible: " + $.pickerView.visible);
        if ("false" == $.pickerView.visible) {
            console.log("false");
            $.contentView.height = 300;
            $.pickerView.height = 250;
            $.pickerContentView.height = 250;
            $.pickerView.setVisible(true);
            $.done.setVisible(true);
            $.picker.setVisible(true);
        } else if (false == $.pickerView.visible) {
            console.log("else false");
            $.contentView.height = 300;
            $.pickerView.height = 250;
            $.pickerContentView.height = 250;
            $.pickerView.setVisible(true);
            $.done.setVisible(true);
            $.picker.setVisible(true);
        } else {
            console.log("else true");
            $.contentView.height = 50;
            $.pickerView.height = 50;
            $.pickerContentView.height = 50;
            $.pickerView.setVisible(false);
            $.done.setVisible(false);
            $.picker.setVisible(false);
        }
    }
    function done() {
        console.log("done");
        $.contentView.height = 50;
        $.pickerView.height = 50;
        $.pickerContentView.height = 50;
        $.pickerView.setVisible(false);
        $.done.setVisible(false);
        $.picker.setVisible(false);
    }
    function subscribe() {
        console.log("subscribe");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "idd";
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
    $.__views.idd = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "idd"
    });
    $.__views.idd && $.addTopLevelView($.__views.idd);
    $.__views.__alloyId363 = Alloy.createController("_header", {
        id: "__alloyId363",
        __parentSymbol: $.__views.idd
    });
    $.__views.__alloyId363.setParent($.__views.idd);
    $.__views.__alloyId364 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId364"
    });
    $.__views.idd.add($.__views.__alloyId364);
    $.__views.__alloyId365 = Ti.UI.createLabel({
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId365"
    });
    $.__views.__alloyId364.add($.__views.__alloyId365);
    $.__views.__alloyId366 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId366"
    });
    $.__views.__alloyId364.add($.__views.__alloyId366);
    back ? $.__views.__alloyId366.addEventListener("click", back) : __defers["$.__views.__alloyId366!click!back"] = true;
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "50"
    });
    $.__views.idd.add($.__views.contentView);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
        width: "90%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.iddLabel = Ti.UI.createLabel({
        id: "iddLabel",
        height: "30",
        width: "100%",
        backgroundColor: "#FCFCFC",
        borderRadius: "15",
        borderColor: "#FCFCFC",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.iddLabel);
    showPicker ? $.__views.iddLabel.addEventListener("click", showPicker) : __defers["$.__views.iddLabel!click!showPicker"] = true;
    $.__views.__alloyId367 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId367"
    });
    $.__views.pickerContentView.add($.__views.__alloyId367);
    showPicker ? $.__views.__alloyId367.addEventListener("click", showPicker) : __defers["$.__views.__alloyId367!click!showPicker"] = true;
    $.__views.pickerView = Ti.UI.createView({
        id: "pickerView",
        height: "50",
        width: "100%",
        visible: "false",
        top: "50",
        backgroundColor: "blue"
    });
    $.__views.pickerContentView.add($.__views.pickerView);
    $.__views.done = Ti.UI.createButton({
        title: "Done",
        id: "done",
        height: "30",
        width: "100%",
        backgroundColor: "black",
        color: "white",
        top: "0",
        left: "0",
        visible: "false"
    });
    $.__views.pickerView.add($.__views.done);
    done ? $.__views.done.addEventListener("click", done) : __defers["$.__views.done!click!done"] = true;
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: Ti.UI.SIZE,
        top: "30",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "false"
    });
    $.__views.pickerView.add($.__views.picker);
    var __alloyId368 = [];
    $.__views.__alloyId369 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId369"
    });
    __alloyId368.push($.__views.__alloyId369);
    $.__views.__alloyId370 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId370"
    });
    __alloyId368.push($.__views.__alloyId370);
    $.__views.__alloyId371 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId371"
    });
    __alloyId368.push($.__views.__alloyId371);
    $.__views.__alloyId372 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId372"
    });
    __alloyId368.push($.__views.__alloyId372);
    $.__views.picker.add(__alloyId368);
    idd ? $.__views.picker.addEventListener("change", idd) : __defers["$.__views.picker!change!idd"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "composite",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.idd.add($.__views.scrollView);
    $.__views.view1 = Ti.UI.createView({
        id: "view1",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "true"
    });
    $.__views.scrollView.add($.__views.view1);
    $.__views.__alloyId373 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "red",
        id: "__alloyId373"
    });
    $.__views.view1.add($.__views.__alloyId373);
    $.__views.__alloyId374 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId374"
    });
    $.__views.__alloyId373.add($.__views.__alloyId374);
    $.__views.__alloyId375 = Ti.UI.createLabel({
        text: "Top 10",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId375"
    });
    $.__views.__alloyId374.add($.__views.__alloyId375);
    $.__views.__alloyId376 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId376"
    });
    $.__views.__alloyId373.add($.__views.__alloyId376);
    $.__views.__alloyId377 = Ti.UI.createLabel({
        text: "Australia",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId377"
    });
    $.__views.__alloyId376.add($.__views.__alloyId377);
    $.__views.__alloyId378 = Ti.UI.createLabel({
        text: "614",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId378"
    });
    $.__views.__alloyId376.add($.__views.__alloyId378);
    $.__views.__alloyId379 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId379"
    });
    $.__views.__alloyId376.add($.__views.__alloyId379);
    $.__views.__alloyId380 = Ti.UI.createLabel({
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId380"
    });
    $.__views.__alloyId379.add($.__views.__alloyId380);
    $.__views.__alloyId381 = Ti.UI.createLabel({
        text: "RM0.44(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId381"
    });
    $.__views.__alloyId379.add($.__views.__alloyId381);
    $.__views.__alloyId382 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId382"
    });
    $.__views.__alloyId373.add($.__views.__alloyId382);
    $.__views.__alloyId383 = Ti.UI.createLabel({
        text: "Canada",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId383"
    });
    $.__views.__alloyId382.add($.__views.__alloyId383);
    $.__views.__alloyId384 = Ti.UI.createLabel({
        text: "1",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId384"
    });
    $.__views.__alloyId382.add($.__views.__alloyId384);
    $.__views.__alloyId385 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId385"
    });
    $.__views.__alloyId382.add($.__views.__alloyId385);
    $.__views.__alloyId386 = Ti.UI.createLabel({
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId386"
    });
    $.__views.__alloyId385.add($.__views.__alloyId386);
    $.__views.__alloyId387 = Ti.UI.createLabel({
        text: "RM0.08(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId387"
    });
    $.__views.__alloyId385.add($.__views.__alloyId387);
    $.__views.__alloyId388 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId388"
    });
    $.__views.__alloyId373.add($.__views.__alloyId388);
    $.__views.__alloyId389 = Ti.UI.createLabel({
        text: "China",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId389"
    });
    $.__views.__alloyId388.add($.__views.__alloyId389);
    $.__views.__alloyId390 = Ti.UI.createLabel({
        text: "86",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId390"
    });
    $.__views.__alloyId388.add($.__views.__alloyId390);
    $.__views.__alloyId391 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId391"
    });
    $.__views.__alloyId388.add($.__views.__alloyId391);
    $.__views.__alloyId392 = Ti.UI.createLabel({
        text: "RM0.06(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId392"
    });
    $.__views.__alloyId391.add($.__views.__alloyId392);
    $.__views.__alloyId393 = Ti.UI.createLabel({
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId393"
    });
    $.__views.__alloyId391.add($.__views.__alloyId393);
    $.__views.__alloyId394 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId394"
    });
    $.__views.__alloyId373.add($.__views.__alloyId394);
    $.__views.__alloyId395 = Ti.UI.createLabel({
        text: "Hong Kong",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId395"
    });
    $.__views.__alloyId394.add($.__views.__alloyId395);
    $.__views.__alloyId396 = Ti.UI.createLabel({
        text: "852",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId396"
    });
    $.__views.__alloyId394.add($.__views.__alloyId396);
    $.__views.__alloyId397 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId397"
    });
    $.__views.__alloyId394.add($.__views.__alloyId397);
    $.__views.__alloyId398 = Ti.UI.createLabel({
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId398"
    });
    $.__views.__alloyId397.add($.__views.__alloyId398);
    $.__views.__alloyId399 = Ti.UI.createLabel({
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId399"
    });
    $.__views.__alloyId397.add($.__views.__alloyId399);
    $.__views.__alloyId400 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId400"
    });
    $.__views.__alloyId373.add($.__views.__alloyId400);
    $.__views.__alloyId401 = Ti.UI.createLabel({
        text: "Indonesia*",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId401"
    });
    $.__views.__alloyId400.add($.__views.__alloyId401);
    $.__views.__alloyId402 = Ti.UI.createLabel({
        text: "62",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId402"
    });
    $.__views.__alloyId400.add($.__views.__alloyId402);
    $.__views.__alloyId403 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId403"
    });
    $.__views.__alloyId400.add($.__views.__alloyId403);
    $.__views.__alloyId404 = Ti.UI.createLabel({
        text: "RM0.62(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId404"
    });
    $.__views.__alloyId403.add($.__views.__alloyId404);
    $.__views.__alloyId405 = Ti.UI.createLabel({
        text: "RM0.66(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId405"
    });
    $.__views.__alloyId403.add($.__views.__alloyId405);
    $.__views.__alloyId406 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId406"
    });
    $.__views.__alloyId373.add($.__views.__alloyId406);
    $.__views.__alloyId407 = Ti.UI.createLabel({
        text: "Singapore",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId407"
    });
    $.__views.__alloyId406.add($.__views.__alloyId407);
    $.__views.__alloyId408 = Ti.UI.createLabel({
        text: "65",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId408"
    });
    $.__views.__alloyId406.add($.__views.__alloyId408);
    $.__views.__alloyId409 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId409"
    });
    $.__views.__alloyId406.add($.__views.__alloyId409);
    $.__views.__alloyId410 = Ti.UI.createLabel({
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId410"
    });
    $.__views.__alloyId409.add($.__views.__alloyId410);
    $.__views.__alloyId411 = Ti.UI.createLabel({
        text: "RM0.13(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId411"
    });
    $.__views.__alloyId409.add($.__views.__alloyId411);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view2);
    $.__views.__alloyId412 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "blue",
        id: "__alloyId412"
    });
    $.__views.view2.add($.__views.__alloyId412);
    $.__views.__alloyId413 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId413"
    });
    $.__views.__alloyId412.add($.__views.__alloyId413);
    $.__views.__alloyId414 = Ti.UI.createLabel({
        text: "Top 10",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId414"
    });
    $.__views.__alloyId413.add($.__views.__alloyId414);
    $.__views.__alloyId415 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId415"
    });
    $.__views.__alloyId412.add($.__views.__alloyId415);
    $.__views.__alloyId416 = Ti.UI.createLabel({
        text: "Australia",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId416"
    });
    $.__views.__alloyId415.add($.__views.__alloyId416);
    $.__views.__alloyId417 = Ti.UI.createLabel({
        text: "614",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId417"
    });
    $.__views.__alloyId415.add($.__views.__alloyId417);
    $.__views.__alloyId418 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId418"
    });
    $.__views.__alloyId415.add($.__views.__alloyId418);
    $.__views.__alloyId419 = Ti.UI.createLabel({
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId419"
    });
    $.__views.__alloyId418.add($.__views.__alloyId419);
    $.__views.__alloyId420 = Ti.UI.createLabel({
        text: "RM0.44(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId420"
    });
    $.__views.__alloyId418.add($.__views.__alloyId420);
    $.__views.__alloyId421 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId421"
    });
    $.__views.__alloyId412.add($.__views.__alloyId421);
    $.__views.__alloyId422 = Ti.UI.createLabel({
        text: "Canada",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId422"
    });
    $.__views.__alloyId421.add($.__views.__alloyId422);
    $.__views.__alloyId423 = Ti.UI.createLabel({
        text: "1",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId423"
    });
    $.__views.__alloyId421.add($.__views.__alloyId423);
    $.__views.__alloyId424 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId424"
    });
    $.__views.__alloyId421.add($.__views.__alloyId424);
    $.__views.__alloyId425 = Ti.UI.createLabel({
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId425"
    });
    $.__views.__alloyId424.add($.__views.__alloyId425);
    $.__views.__alloyId426 = Ti.UI.createLabel({
        text: "RM0.08(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId426"
    });
    $.__views.__alloyId424.add($.__views.__alloyId426);
    $.__views.__alloyId427 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId427"
    });
    $.__views.__alloyId412.add($.__views.__alloyId427);
    $.__views.__alloyId428 = Ti.UI.createLabel({
        text: "China",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId428"
    });
    $.__views.__alloyId427.add($.__views.__alloyId428);
    $.__views.__alloyId429 = Ti.UI.createLabel({
        text: "86",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId429"
    });
    $.__views.__alloyId427.add($.__views.__alloyId429);
    $.__views.__alloyId430 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId430"
    });
    $.__views.__alloyId427.add($.__views.__alloyId430);
    $.__views.__alloyId431 = Ti.UI.createLabel({
        text: "RM0.06(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId431"
    });
    $.__views.__alloyId430.add($.__views.__alloyId431);
    $.__views.__alloyId432 = Ti.UI.createLabel({
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId432"
    });
    $.__views.__alloyId430.add($.__views.__alloyId432);
    $.__views.__alloyId433 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId433"
    });
    $.__views.__alloyId412.add($.__views.__alloyId433);
    $.__views.__alloyId434 = Ti.UI.createLabel({
        text: "Hong Kong",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId434"
    });
    $.__views.__alloyId433.add($.__views.__alloyId434);
    $.__views.__alloyId435 = Ti.UI.createLabel({
        text: "852",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId435"
    });
    $.__views.__alloyId433.add($.__views.__alloyId435);
    $.__views.__alloyId436 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId436"
    });
    $.__views.__alloyId433.add($.__views.__alloyId436);
    $.__views.__alloyId437 = Ti.UI.createLabel({
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId437"
    });
    $.__views.__alloyId436.add($.__views.__alloyId437);
    $.__views.__alloyId438 = Ti.UI.createLabel({
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId438"
    });
    $.__views.__alloyId436.add($.__views.__alloyId438);
    $.__views.__alloyId439 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId439"
    });
    $.__views.__alloyId412.add($.__views.__alloyId439);
    $.__views.__alloyId440 = Ti.UI.createLabel({
        text: "Indonesia*",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId440"
    });
    $.__views.__alloyId439.add($.__views.__alloyId440);
    $.__views.__alloyId441 = Ti.UI.createLabel({
        text: "62",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId441"
    });
    $.__views.__alloyId439.add($.__views.__alloyId441);
    $.__views.__alloyId442 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId442"
    });
    $.__views.__alloyId439.add($.__views.__alloyId442);
    $.__views.__alloyId443 = Ti.UI.createLabel({
        text: "RM0.62(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId443"
    });
    $.__views.__alloyId442.add($.__views.__alloyId443);
    $.__views.__alloyId444 = Ti.UI.createLabel({
        text: "RM0.66(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId444"
    });
    $.__views.__alloyId442.add($.__views.__alloyId444);
    $.__views.__alloyId445 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId445"
    });
    $.__views.__alloyId412.add($.__views.__alloyId445);
    $.__views.__alloyId446 = Ti.UI.createLabel({
        text: "Singapore",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId446"
    });
    $.__views.__alloyId445.add($.__views.__alloyId446);
    $.__views.__alloyId447 = Ti.UI.createLabel({
        text: "65",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId447"
    });
    $.__views.__alloyId445.add($.__views.__alloyId447);
    $.__views.__alloyId448 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId448"
    });
    $.__views.__alloyId445.add($.__views.__alloyId448);
    $.__views.__alloyId449 = Ti.UI.createLabel({
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId449"
    });
    $.__views.__alloyId448.add($.__views.__alloyId449);
    $.__views.__alloyId450 = Ti.UI.createLabel({
        text: "RM0.13(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId450"
    });
    $.__views.__alloyId448.add($.__views.__alloyId450);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view3);
    $.__views.__alloyId451 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "green",
        id: "__alloyId451"
    });
    $.__views.view3.add($.__views.__alloyId451);
    $.__views.__alloyId452 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId452"
    });
    $.__views.__alloyId451.add($.__views.__alloyId452);
    $.__views.__alloyId453 = Ti.UI.createLabel({
        text: "Top 10",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId453"
    });
    $.__views.__alloyId452.add($.__views.__alloyId453);
    $.__views.__alloyId454 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId454"
    });
    $.__views.__alloyId451.add($.__views.__alloyId454);
    $.__views.__alloyId455 = Ti.UI.createLabel({
        text: "Australia",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId455"
    });
    $.__views.__alloyId454.add($.__views.__alloyId455);
    $.__views.__alloyId456 = Ti.UI.createLabel({
        text: "614",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId456"
    });
    $.__views.__alloyId454.add($.__views.__alloyId456);
    $.__views.__alloyId457 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId457"
    });
    $.__views.__alloyId454.add($.__views.__alloyId457);
    $.__views.__alloyId458 = Ti.UI.createLabel({
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId458"
    });
    $.__views.__alloyId457.add($.__views.__alloyId458);
    $.__views.__alloyId459 = Ti.UI.createLabel({
        text: "RM0.44(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId459"
    });
    $.__views.__alloyId457.add($.__views.__alloyId459);
    $.__views.__alloyId460 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId460"
    });
    $.__views.__alloyId451.add($.__views.__alloyId460);
    $.__views.__alloyId461 = Ti.UI.createLabel({
        text: "Canada",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId461"
    });
    $.__views.__alloyId460.add($.__views.__alloyId461);
    $.__views.__alloyId462 = Ti.UI.createLabel({
        text: "1",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId462"
    });
    $.__views.__alloyId460.add($.__views.__alloyId462);
    $.__views.__alloyId463 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId463"
    });
    $.__views.__alloyId460.add($.__views.__alloyId463);
    $.__views.__alloyId464 = Ti.UI.createLabel({
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId464"
    });
    $.__views.__alloyId463.add($.__views.__alloyId464);
    $.__views.__alloyId465 = Ti.UI.createLabel({
        text: "RM0.08(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId465"
    });
    $.__views.__alloyId463.add($.__views.__alloyId465);
    $.__views.__alloyId466 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId466"
    });
    $.__views.__alloyId451.add($.__views.__alloyId466);
    $.__views.__alloyId467 = Ti.UI.createLabel({
        text: "China",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId467"
    });
    $.__views.__alloyId466.add($.__views.__alloyId467);
    $.__views.__alloyId468 = Ti.UI.createLabel({
        text: "86",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId468"
    });
    $.__views.__alloyId466.add($.__views.__alloyId468);
    $.__views.__alloyId469 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId469"
    });
    $.__views.__alloyId466.add($.__views.__alloyId469);
    $.__views.__alloyId470 = Ti.UI.createLabel({
        text: "RM0.06(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId470"
    });
    $.__views.__alloyId469.add($.__views.__alloyId470);
    $.__views.__alloyId471 = Ti.UI.createLabel({
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId471"
    });
    $.__views.__alloyId469.add($.__views.__alloyId471);
    $.__views.__alloyId472 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId472"
    });
    $.__views.__alloyId451.add($.__views.__alloyId472);
    $.__views.__alloyId473 = Ti.UI.createLabel({
        text: "Hong Kong",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId473"
    });
    $.__views.__alloyId472.add($.__views.__alloyId473);
    $.__views.__alloyId474 = Ti.UI.createLabel({
        text: "852",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId474"
    });
    $.__views.__alloyId472.add($.__views.__alloyId474);
    $.__views.__alloyId475 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId475"
    });
    $.__views.__alloyId472.add($.__views.__alloyId475);
    $.__views.__alloyId476 = Ti.UI.createLabel({
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId476"
    });
    $.__views.__alloyId475.add($.__views.__alloyId476);
    $.__views.__alloyId477 = Ti.UI.createLabel({
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId477"
    });
    $.__views.__alloyId475.add($.__views.__alloyId477);
    $.__views.__alloyId478 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId478"
    });
    $.__views.__alloyId451.add($.__views.__alloyId478);
    $.__views.__alloyId479 = Ti.UI.createLabel({
        text: "Indonesia*",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId479"
    });
    $.__views.__alloyId478.add($.__views.__alloyId479);
    $.__views.__alloyId480 = Ti.UI.createLabel({
        text: "62",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId480"
    });
    $.__views.__alloyId478.add($.__views.__alloyId480);
    $.__views.__alloyId481 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId481"
    });
    $.__views.__alloyId478.add($.__views.__alloyId481);
    $.__views.__alloyId482 = Ti.UI.createLabel({
        text: "RM0.62(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId482"
    });
    $.__views.__alloyId481.add($.__views.__alloyId482);
    $.__views.__alloyId483 = Ti.UI.createLabel({
        text: "RM0.66(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId483"
    });
    $.__views.__alloyId481.add($.__views.__alloyId483);
    $.__views.__alloyId484 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId484"
    });
    $.__views.__alloyId451.add($.__views.__alloyId484);
    $.__views.__alloyId485 = Ti.UI.createLabel({
        text: "Singapore",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId485"
    });
    $.__views.__alloyId484.add($.__views.__alloyId485);
    $.__views.__alloyId486 = Ti.UI.createLabel({
        text: "65",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId486"
    });
    $.__views.__alloyId484.add($.__views.__alloyId486);
    $.__views.__alloyId487 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId487"
    });
    $.__views.__alloyId484.add($.__views.__alloyId487);
    $.__views.__alloyId488 = Ti.UI.createLabel({
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId488"
    });
    $.__views.__alloyId487.add($.__views.__alloyId488);
    $.__views.__alloyId489 = Ti.UI.createLabel({
        text: "RM0.13(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId489"
    });
    $.__views.__alloyId487.add($.__views.__alloyId489);
    $.__views.view4 = Ti.UI.createView({
        id: "view4",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view4);
    $.__views.__alloyId490 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "yellow",
        id: "__alloyId490"
    });
    $.__views.view4.add($.__views.__alloyId490);
    $.__views.__alloyId491 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId491"
    });
    $.__views.__alloyId490.add($.__views.__alloyId491);
    $.__views.__alloyId492 = Ti.UI.createLabel({
        text: "Top 10",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId492"
    });
    $.__views.__alloyId491.add($.__views.__alloyId492);
    $.__views.__alloyId493 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId493"
    });
    $.__views.__alloyId490.add($.__views.__alloyId493);
    $.__views.__alloyId494 = Ti.UI.createLabel({
        text: "Australia",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId494"
    });
    $.__views.__alloyId493.add($.__views.__alloyId494);
    $.__views.__alloyId495 = Ti.UI.createLabel({
        text: "614",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId495"
    });
    $.__views.__alloyId493.add($.__views.__alloyId495);
    $.__views.__alloyId496 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId496"
    });
    $.__views.__alloyId493.add($.__views.__alloyId496);
    $.__views.__alloyId497 = Ti.UI.createLabel({
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId497"
    });
    $.__views.__alloyId496.add($.__views.__alloyId497);
    $.__views.__alloyId498 = Ti.UI.createLabel({
        text: "RM0.44(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId498"
    });
    $.__views.__alloyId496.add($.__views.__alloyId498);
    $.__views.__alloyId499 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId499"
    });
    $.__views.__alloyId490.add($.__views.__alloyId499);
    $.__views.__alloyId500 = Ti.UI.createLabel({
        text: "Canada",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId500"
    });
    $.__views.__alloyId499.add($.__views.__alloyId500);
    $.__views.__alloyId501 = Ti.UI.createLabel({
        text: "1",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId501"
    });
    $.__views.__alloyId499.add($.__views.__alloyId501);
    $.__views.__alloyId502 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId502"
    });
    $.__views.__alloyId499.add($.__views.__alloyId502);
    $.__views.__alloyId503 = Ti.UI.createLabel({
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId503"
    });
    $.__views.__alloyId502.add($.__views.__alloyId503);
    $.__views.__alloyId504 = Ti.UI.createLabel({
        text: "RM0.08(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId504"
    });
    $.__views.__alloyId502.add($.__views.__alloyId504);
    $.__views.__alloyId505 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId505"
    });
    $.__views.__alloyId490.add($.__views.__alloyId505);
    $.__views.__alloyId506 = Ti.UI.createLabel({
        text: "China",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId506"
    });
    $.__views.__alloyId505.add($.__views.__alloyId506);
    $.__views.__alloyId507 = Ti.UI.createLabel({
        text: "86",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId507"
    });
    $.__views.__alloyId505.add($.__views.__alloyId507);
    $.__views.__alloyId508 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId508"
    });
    $.__views.__alloyId505.add($.__views.__alloyId508);
    $.__views.__alloyId509 = Ti.UI.createLabel({
        text: "RM0.06(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId509"
    });
    $.__views.__alloyId508.add($.__views.__alloyId509);
    $.__views.__alloyId510 = Ti.UI.createLabel({
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId510"
    });
    $.__views.__alloyId508.add($.__views.__alloyId510);
    $.__views.__alloyId511 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId511"
    });
    $.__views.__alloyId490.add($.__views.__alloyId511);
    $.__views.__alloyId512 = Ti.UI.createLabel({
        text: "Hong Kong",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId512"
    });
    $.__views.__alloyId511.add($.__views.__alloyId512);
    $.__views.__alloyId513 = Ti.UI.createLabel({
        text: "852",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId513"
    });
    $.__views.__alloyId511.add($.__views.__alloyId513);
    $.__views.__alloyId514 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId514"
    });
    $.__views.__alloyId511.add($.__views.__alloyId514);
    $.__views.__alloyId515 = Ti.UI.createLabel({
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId515"
    });
    $.__views.__alloyId514.add($.__views.__alloyId515);
    $.__views.__alloyId516 = Ti.UI.createLabel({
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId516"
    });
    $.__views.__alloyId514.add($.__views.__alloyId516);
    $.__views.__alloyId517 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId517"
    });
    $.__views.__alloyId490.add($.__views.__alloyId517);
    $.__views.__alloyId518 = Ti.UI.createLabel({
        text: "Indonesia*",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId518"
    });
    $.__views.__alloyId517.add($.__views.__alloyId518);
    $.__views.__alloyId519 = Ti.UI.createLabel({
        text: "62",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId519"
    });
    $.__views.__alloyId517.add($.__views.__alloyId519);
    $.__views.__alloyId520 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId520"
    });
    $.__views.__alloyId517.add($.__views.__alloyId520);
    $.__views.__alloyId521 = Ti.UI.createLabel({
        text: "RM0.62(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId521"
    });
    $.__views.__alloyId520.add($.__views.__alloyId521);
    $.__views.__alloyId522 = Ti.UI.createLabel({
        text: "RM0.66(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId522"
    });
    $.__views.__alloyId520.add($.__views.__alloyId522);
    $.__views.__alloyId523 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId523"
    });
    $.__views.__alloyId490.add($.__views.__alloyId523);
    $.__views.__alloyId524 = Ti.UI.createLabel({
        text: "Singapore",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId524"
    });
    $.__views.__alloyId523.add($.__views.__alloyId524);
    $.__views.__alloyId525 = Ti.UI.createLabel({
        text: "65",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId525"
    });
    $.__views.__alloyId523.add($.__views.__alloyId525);
    $.__views.__alloyId526 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId526"
    });
    $.__views.__alloyId523.add($.__views.__alloyId526);
    $.__views.__alloyId527 = Ti.UI.createLabel({
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId527"
    });
    $.__views.__alloyId526.add($.__views.__alloyId527);
    $.__views.__alloyId528 = Ti.UI.createLabel({
        text: "RM0.13(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId528"
    });
    $.__views.__alloyId526.add($.__views.__alloyId528);
    $.__views.__alloyId529 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId529"
    });
    $.__views.idd.add($.__views.__alloyId529);
    subscribe ? $.__views.__alloyId529.addEventListener("click", subscribe) : __defers["$.__views.__alloyId529!click!subscribe"] = true;
    $.__views.__alloyId530 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId530"
    });
    $.__views.__alloyId529.add($.__views.__alloyId530);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    var idd;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId366!click!back"] && $.__views.__alloyId366.addEventListener("click", back);
    __defers["$.__views.iddLabel!click!showPicker"] && $.__views.iddLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId367!click!showPicker"] && $.__views.__alloyId367.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!idd"] && $.__views.picker.addEventListener("change", idd);
    __defers["$.__views.__alloyId529!click!subscribe"] && $.__views.__alloyId529.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;