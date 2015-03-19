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
    $.__views.__alloyId365 = Alloy.createController("_header", {
        id: "__alloyId365",
        __parentSymbol: $.__views.idd
    });
    $.__views.__alloyId365.setParent($.__views.idd);
    $.__views.__alloyId366 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId366"
    });
    $.__views.idd.add($.__views.__alloyId366);
    $.__views.__alloyId367 = Ti.UI.createLabel({
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId367"
    });
    $.__views.__alloyId366.add($.__views.__alloyId367);
    $.__views.__alloyId368 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId368"
    });
    $.__views.__alloyId366.add($.__views.__alloyId368);
    back ? $.__views.__alloyId368.addEventListener("click", back) : __defers["$.__views.__alloyId368!click!back"] = true;
    $.__views.__alloyId369 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        id: "__alloyId369"
    });
    $.__views.idd.add($.__views.__alloyId369);
    $.__views.__alloyId370 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId370"
    });
    $.__views.__alloyId369.add($.__views.__alloyId370);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "30",
        borderRadius: "15",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId370.add($.__views.picker);
    var __alloyId371 = [];
    $.__views.__alloyId372 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId372"
    });
    __alloyId371.push($.__views.__alloyId372);
    $.__views.__alloyId373 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId373"
    });
    __alloyId371.push($.__views.__alloyId373);
    $.__views.__alloyId374 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId374"
    });
    __alloyId371.push($.__views.__alloyId374);
    $.__views.__alloyId375 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId375"
    });
    __alloyId371.push($.__views.__alloyId375);
    $.__views.picker.add(__alloyId371);
    idd ? $.__views.picker.addEventListener("change", idd) : __defers["$.__views.picker!change!idd"] = true;
    $.__views.__alloyId376 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId376"
    });
    $.__views.__alloyId370.add($.__views.__alloyId376);
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
    $.__views.__alloyId377 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "red",
        id: "__alloyId377"
    });
    $.__views.view1.add($.__views.__alloyId377);
    $.__views.__alloyId378 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId378"
    });
    $.__views.__alloyId377.add($.__views.__alloyId378);
    $.__views.__alloyId379 = Ti.UI.createLabel({
        text: "Top 10",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId379"
    });
    $.__views.__alloyId378.add($.__views.__alloyId379);
    $.__views.__alloyId380 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId380"
    });
    $.__views.__alloyId377.add($.__views.__alloyId380);
    $.__views.__alloyId381 = Ti.UI.createLabel({
        text: "Australia",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId381"
    });
    $.__views.__alloyId380.add($.__views.__alloyId381);
    $.__views.__alloyId382 = Ti.UI.createLabel({
        text: "614",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId382"
    });
    $.__views.__alloyId380.add($.__views.__alloyId382);
    $.__views.__alloyId383 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId383"
    });
    $.__views.__alloyId380.add($.__views.__alloyId383);
    $.__views.__alloyId384 = Ti.UI.createLabel({
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId384"
    });
    $.__views.__alloyId383.add($.__views.__alloyId384);
    $.__views.__alloyId385 = Ti.UI.createLabel({
        text: "RM0.44(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId385"
    });
    $.__views.__alloyId383.add($.__views.__alloyId385);
    $.__views.__alloyId386 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId386"
    });
    $.__views.__alloyId377.add($.__views.__alloyId386);
    $.__views.__alloyId387 = Ti.UI.createLabel({
        text: "Canada",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId387"
    });
    $.__views.__alloyId386.add($.__views.__alloyId387);
    $.__views.__alloyId388 = Ti.UI.createLabel({
        text: "1",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId388"
    });
    $.__views.__alloyId386.add($.__views.__alloyId388);
    $.__views.__alloyId389 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId389"
    });
    $.__views.__alloyId386.add($.__views.__alloyId389);
    $.__views.__alloyId390 = Ti.UI.createLabel({
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId390"
    });
    $.__views.__alloyId389.add($.__views.__alloyId390);
    $.__views.__alloyId391 = Ti.UI.createLabel({
        text: "RM0.08(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId391"
    });
    $.__views.__alloyId389.add($.__views.__alloyId391);
    $.__views.__alloyId392 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId392"
    });
    $.__views.__alloyId377.add($.__views.__alloyId392);
    $.__views.__alloyId393 = Ti.UI.createLabel({
        text: "China",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId393"
    });
    $.__views.__alloyId392.add($.__views.__alloyId393);
    $.__views.__alloyId394 = Ti.UI.createLabel({
        text: "86",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId394"
    });
    $.__views.__alloyId392.add($.__views.__alloyId394);
    $.__views.__alloyId395 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId395"
    });
    $.__views.__alloyId392.add($.__views.__alloyId395);
    $.__views.__alloyId396 = Ti.UI.createLabel({
        text: "RM0.06(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId396"
    });
    $.__views.__alloyId395.add($.__views.__alloyId396);
    $.__views.__alloyId397 = Ti.UI.createLabel({
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId397"
    });
    $.__views.__alloyId395.add($.__views.__alloyId397);
    $.__views.__alloyId398 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId398"
    });
    $.__views.__alloyId377.add($.__views.__alloyId398);
    $.__views.__alloyId399 = Ti.UI.createLabel({
        text: "Hong Kong",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId399"
    });
    $.__views.__alloyId398.add($.__views.__alloyId399);
    $.__views.__alloyId400 = Ti.UI.createLabel({
        text: "852",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId400"
    });
    $.__views.__alloyId398.add($.__views.__alloyId400);
    $.__views.__alloyId401 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId401"
    });
    $.__views.__alloyId398.add($.__views.__alloyId401);
    $.__views.__alloyId402 = Ti.UI.createLabel({
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId402"
    });
    $.__views.__alloyId401.add($.__views.__alloyId402);
    $.__views.__alloyId403 = Ti.UI.createLabel({
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId403"
    });
    $.__views.__alloyId401.add($.__views.__alloyId403);
    $.__views.__alloyId404 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId404"
    });
    $.__views.__alloyId377.add($.__views.__alloyId404);
    $.__views.__alloyId405 = Ti.UI.createLabel({
        text: "Indonesia*",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId405"
    });
    $.__views.__alloyId404.add($.__views.__alloyId405);
    $.__views.__alloyId406 = Ti.UI.createLabel({
        text: "62",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId406"
    });
    $.__views.__alloyId404.add($.__views.__alloyId406);
    $.__views.__alloyId407 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId407"
    });
    $.__views.__alloyId404.add($.__views.__alloyId407);
    $.__views.__alloyId408 = Ti.UI.createLabel({
        text: "RM0.62(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId408"
    });
    $.__views.__alloyId407.add($.__views.__alloyId408);
    $.__views.__alloyId409 = Ti.UI.createLabel({
        text: "RM0.66(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId409"
    });
    $.__views.__alloyId407.add($.__views.__alloyId409);
    $.__views.__alloyId410 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId410"
    });
    $.__views.__alloyId377.add($.__views.__alloyId410);
    $.__views.__alloyId411 = Ti.UI.createLabel({
        text: "Singapore",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId411"
    });
    $.__views.__alloyId410.add($.__views.__alloyId411);
    $.__views.__alloyId412 = Ti.UI.createLabel({
        text: "65",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId412"
    });
    $.__views.__alloyId410.add($.__views.__alloyId412);
    $.__views.__alloyId413 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId413"
    });
    $.__views.__alloyId410.add($.__views.__alloyId413);
    $.__views.__alloyId414 = Ti.UI.createLabel({
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId414"
    });
    $.__views.__alloyId413.add($.__views.__alloyId414);
    $.__views.__alloyId415 = Ti.UI.createLabel({
        text: "RM0.13(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId415"
    });
    $.__views.__alloyId413.add($.__views.__alloyId415);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view2);
    $.__views.__alloyId416 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "blue",
        id: "__alloyId416"
    });
    $.__views.view2.add($.__views.__alloyId416);
    $.__views.__alloyId417 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId417"
    });
    $.__views.__alloyId416.add($.__views.__alloyId417);
    $.__views.__alloyId418 = Ti.UI.createLabel({
        text: "Top 10",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId418"
    });
    $.__views.__alloyId417.add($.__views.__alloyId418);
    $.__views.__alloyId419 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId419"
    });
    $.__views.__alloyId416.add($.__views.__alloyId419);
    $.__views.__alloyId420 = Ti.UI.createLabel({
        text: "Australia",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId420"
    });
    $.__views.__alloyId419.add($.__views.__alloyId420);
    $.__views.__alloyId421 = Ti.UI.createLabel({
        text: "614",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId421"
    });
    $.__views.__alloyId419.add($.__views.__alloyId421);
    $.__views.__alloyId422 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId422"
    });
    $.__views.__alloyId419.add($.__views.__alloyId422);
    $.__views.__alloyId423 = Ti.UI.createLabel({
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId423"
    });
    $.__views.__alloyId422.add($.__views.__alloyId423);
    $.__views.__alloyId424 = Ti.UI.createLabel({
        text: "RM0.44(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId424"
    });
    $.__views.__alloyId422.add($.__views.__alloyId424);
    $.__views.__alloyId425 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId425"
    });
    $.__views.__alloyId416.add($.__views.__alloyId425);
    $.__views.__alloyId426 = Ti.UI.createLabel({
        text: "Canada",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId426"
    });
    $.__views.__alloyId425.add($.__views.__alloyId426);
    $.__views.__alloyId427 = Ti.UI.createLabel({
        text: "1",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId427"
    });
    $.__views.__alloyId425.add($.__views.__alloyId427);
    $.__views.__alloyId428 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId428"
    });
    $.__views.__alloyId425.add($.__views.__alloyId428);
    $.__views.__alloyId429 = Ti.UI.createLabel({
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId429"
    });
    $.__views.__alloyId428.add($.__views.__alloyId429);
    $.__views.__alloyId430 = Ti.UI.createLabel({
        text: "RM0.08(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId430"
    });
    $.__views.__alloyId428.add($.__views.__alloyId430);
    $.__views.__alloyId431 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId431"
    });
    $.__views.__alloyId416.add($.__views.__alloyId431);
    $.__views.__alloyId432 = Ti.UI.createLabel({
        text: "China",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId432"
    });
    $.__views.__alloyId431.add($.__views.__alloyId432);
    $.__views.__alloyId433 = Ti.UI.createLabel({
        text: "86",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId433"
    });
    $.__views.__alloyId431.add($.__views.__alloyId433);
    $.__views.__alloyId434 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId434"
    });
    $.__views.__alloyId431.add($.__views.__alloyId434);
    $.__views.__alloyId435 = Ti.UI.createLabel({
        text: "RM0.06(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId435"
    });
    $.__views.__alloyId434.add($.__views.__alloyId435);
    $.__views.__alloyId436 = Ti.UI.createLabel({
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId436"
    });
    $.__views.__alloyId434.add($.__views.__alloyId436);
    $.__views.__alloyId437 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId437"
    });
    $.__views.__alloyId416.add($.__views.__alloyId437);
    $.__views.__alloyId438 = Ti.UI.createLabel({
        text: "Hong Kong",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId438"
    });
    $.__views.__alloyId437.add($.__views.__alloyId438);
    $.__views.__alloyId439 = Ti.UI.createLabel({
        text: "852",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId439"
    });
    $.__views.__alloyId437.add($.__views.__alloyId439);
    $.__views.__alloyId440 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId440"
    });
    $.__views.__alloyId437.add($.__views.__alloyId440);
    $.__views.__alloyId441 = Ti.UI.createLabel({
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId441"
    });
    $.__views.__alloyId440.add($.__views.__alloyId441);
    $.__views.__alloyId442 = Ti.UI.createLabel({
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId442"
    });
    $.__views.__alloyId440.add($.__views.__alloyId442);
    $.__views.__alloyId443 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId443"
    });
    $.__views.__alloyId416.add($.__views.__alloyId443);
    $.__views.__alloyId444 = Ti.UI.createLabel({
        text: "Indonesia*",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId444"
    });
    $.__views.__alloyId443.add($.__views.__alloyId444);
    $.__views.__alloyId445 = Ti.UI.createLabel({
        text: "62",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId445"
    });
    $.__views.__alloyId443.add($.__views.__alloyId445);
    $.__views.__alloyId446 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId446"
    });
    $.__views.__alloyId443.add($.__views.__alloyId446);
    $.__views.__alloyId447 = Ti.UI.createLabel({
        text: "RM0.62(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId447"
    });
    $.__views.__alloyId446.add($.__views.__alloyId447);
    $.__views.__alloyId448 = Ti.UI.createLabel({
        text: "RM0.66(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId448"
    });
    $.__views.__alloyId446.add($.__views.__alloyId448);
    $.__views.__alloyId449 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId449"
    });
    $.__views.__alloyId416.add($.__views.__alloyId449);
    $.__views.__alloyId450 = Ti.UI.createLabel({
        text: "Singapore",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId450"
    });
    $.__views.__alloyId449.add($.__views.__alloyId450);
    $.__views.__alloyId451 = Ti.UI.createLabel({
        text: "65",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId451"
    });
    $.__views.__alloyId449.add($.__views.__alloyId451);
    $.__views.__alloyId452 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId452"
    });
    $.__views.__alloyId449.add($.__views.__alloyId452);
    $.__views.__alloyId453 = Ti.UI.createLabel({
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId453"
    });
    $.__views.__alloyId452.add($.__views.__alloyId453);
    $.__views.__alloyId454 = Ti.UI.createLabel({
        text: "RM0.13(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId454"
    });
    $.__views.__alloyId452.add($.__views.__alloyId454);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view3);
    $.__views.__alloyId455 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "green",
        id: "__alloyId455"
    });
    $.__views.view3.add($.__views.__alloyId455);
    $.__views.__alloyId456 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId456"
    });
    $.__views.__alloyId455.add($.__views.__alloyId456);
    $.__views.__alloyId457 = Ti.UI.createLabel({
        text: "Top 10",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId457"
    });
    $.__views.__alloyId456.add($.__views.__alloyId457);
    $.__views.__alloyId458 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId458"
    });
    $.__views.__alloyId455.add($.__views.__alloyId458);
    $.__views.__alloyId459 = Ti.UI.createLabel({
        text: "Australia",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId459"
    });
    $.__views.__alloyId458.add($.__views.__alloyId459);
    $.__views.__alloyId460 = Ti.UI.createLabel({
        text: "614",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId460"
    });
    $.__views.__alloyId458.add($.__views.__alloyId460);
    $.__views.__alloyId461 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId461"
    });
    $.__views.__alloyId458.add($.__views.__alloyId461);
    $.__views.__alloyId462 = Ti.UI.createLabel({
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId462"
    });
    $.__views.__alloyId461.add($.__views.__alloyId462);
    $.__views.__alloyId463 = Ti.UI.createLabel({
        text: "RM0.44(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId463"
    });
    $.__views.__alloyId461.add($.__views.__alloyId463);
    $.__views.__alloyId464 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId464"
    });
    $.__views.__alloyId455.add($.__views.__alloyId464);
    $.__views.__alloyId465 = Ti.UI.createLabel({
        text: "Canada",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId465"
    });
    $.__views.__alloyId464.add($.__views.__alloyId465);
    $.__views.__alloyId466 = Ti.UI.createLabel({
        text: "1",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId466"
    });
    $.__views.__alloyId464.add($.__views.__alloyId466);
    $.__views.__alloyId467 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId467"
    });
    $.__views.__alloyId464.add($.__views.__alloyId467);
    $.__views.__alloyId468 = Ti.UI.createLabel({
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId468"
    });
    $.__views.__alloyId467.add($.__views.__alloyId468);
    $.__views.__alloyId469 = Ti.UI.createLabel({
        text: "RM0.08(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId469"
    });
    $.__views.__alloyId467.add($.__views.__alloyId469);
    $.__views.__alloyId470 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId470"
    });
    $.__views.__alloyId455.add($.__views.__alloyId470);
    $.__views.__alloyId471 = Ti.UI.createLabel({
        text: "China",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId471"
    });
    $.__views.__alloyId470.add($.__views.__alloyId471);
    $.__views.__alloyId472 = Ti.UI.createLabel({
        text: "86",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId472"
    });
    $.__views.__alloyId470.add($.__views.__alloyId472);
    $.__views.__alloyId473 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId473"
    });
    $.__views.__alloyId470.add($.__views.__alloyId473);
    $.__views.__alloyId474 = Ti.UI.createLabel({
        text: "RM0.06(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId474"
    });
    $.__views.__alloyId473.add($.__views.__alloyId474);
    $.__views.__alloyId475 = Ti.UI.createLabel({
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId475"
    });
    $.__views.__alloyId473.add($.__views.__alloyId475);
    $.__views.__alloyId476 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId476"
    });
    $.__views.__alloyId455.add($.__views.__alloyId476);
    $.__views.__alloyId477 = Ti.UI.createLabel({
        text: "Hong Kong",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId477"
    });
    $.__views.__alloyId476.add($.__views.__alloyId477);
    $.__views.__alloyId478 = Ti.UI.createLabel({
        text: "852",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId478"
    });
    $.__views.__alloyId476.add($.__views.__alloyId478);
    $.__views.__alloyId479 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId479"
    });
    $.__views.__alloyId476.add($.__views.__alloyId479);
    $.__views.__alloyId480 = Ti.UI.createLabel({
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId480"
    });
    $.__views.__alloyId479.add($.__views.__alloyId480);
    $.__views.__alloyId481 = Ti.UI.createLabel({
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId481"
    });
    $.__views.__alloyId479.add($.__views.__alloyId481);
    $.__views.__alloyId482 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId482"
    });
    $.__views.__alloyId455.add($.__views.__alloyId482);
    $.__views.__alloyId483 = Ti.UI.createLabel({
        text: "Indonesia*",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId483"
    });
    $.__views.__alloyId482.add($.__views.__alloyId483);
    $.__views.__alloyId484 = Ti.UI.createLabel({
        text: "62",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId484"
    });
    $.__views.__alloyId482.add($.__views.__alloyId484);
    $.__views.__alloyId485 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId485"
    });
    $.__views.__alloyId482.add($.__views.__alloyId485);
    $.__views.__alloyId486 = Ti.UI.createLabel({
        text: "RM0.62(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId486"
    });
    $.__views.__alloyId485.add($.__views.__alloyId486);
    $.__views.__alloyId487 = Ti.UI.createLabel({
        text: "RM0.66(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId487"
    });
    $.__views.__alloyId485.add($.__views.__alloyId487);
    $.__views.__alloyId488 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId488"
    });
    $.__views.__alloyId455.add($.__views.__alloyId488);
    $.__views.__alloyId489 = Ti.UI.createLabel({
        text: "Singapore",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId489"
    });
    $.__views.__alloyId488.add($.__views.__alloyId489);
    $.__views.__alloyId490 = Ti.UI.createLabel({
        text: "65",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId490"
    });
    $.__views.__alloyId488.add($.__views.__alloyId490);
    $.__views.__alloyId491 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId491"
    });
    $.__views.__alloyId488.add($.__views.__alloyId491);
    $.__views.__alloyId492 = Ti.UI.createLabel({
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId492"
    });
    $.__views.__alloyId491.add($.__views.__alloyId492);
    $.__views.__alloyId493 = Ti.UI.createLabel({
        text: "RM0.13(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId493"
    });
    $.__views.__alloyId491.add($.__views.__alloyId493);
    $.__views.view4 = Ti.UI.createView({
        id: "view4",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view4);
    $.__views.__alloyId494 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "yellow",
        id: "__alloyId494"
    });
    $.__views.view4.add($.__views.__alloyId494);
    $.__views.__alloyId495 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId495"
    });
    $.__views.__alloyId494.add($.__views.__alloyId495);
    $.__views.__alloyId496 = Ti.UI.createLabel({
        text: "Top 10",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId496"
    });
    $.__views.__alloyId495.add($.__views.__alloyId496);
    $.__views.__alloyId497 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId497"
    });
    $.__views.__alloyId494.add($.__views.__alloyId497);
    $.__views.__alloyId498 = Ti.UI.createLabel({
        text: "Australia",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId498"
    });
    $.__views.__alloyId497.add($.__views.__alloyId498);
    $.__views.__alloyId499 = Ti.UI.createLabel({
        text: "614",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId499"
    });
    $.__views.__alloyId497.add($.__views.__alloyId499);
    $.__views.__alloyId500 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId500"
    });
    $.__views.__alloyId497.add($.__views.__alloyId500);
    $.__views.__alloyId501 = Ti.UI.createLabel({
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId501"
    });
    $.__views.__alloyId500.add($.__views.__alloyId501);
    $.__views.__alloyId502 = Ti.UI.createLabel({
        text: "RM0.44(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId502"
    });
    $.__views.__alloyId500.add($.__views.__alloyId502);
    $.__views.__alloyId503 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId503"
    });
    $.__views.__alloyId494.add($.__views.__alloyId503);
    $.__views.__alloyId504 = Ti.UI.createLabel({
        text: "Canada",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId504"
    });
    $.__views.__alloyId503.add($.__views.__alloyId504);
    $.__views.__alloyId505 = Ti.UI.createLabel({
        text: "1",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId505"
    });
    $.__views.__alloyId503.add($.__views.__alloyId505);
    $.__views.__alloyId506 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId506"
    });
    $.__views.__alloyId503.add($.__views.__alloyId506);
    $.__views.__alloyId507 = Ti.UI.createLabel({
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId507"
    });
    $.__views.__alloyId506.add($.__views.__alloyId507);
    $.__views.__alloyId508 = Ti.UI.createLabel({
        text: "RM0.08(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId508"
    });
    $.__views.__alloyId506.add($.__views.__alloyId508);
    $.__views.__alloyId509 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId509"
    });
    $.__views.__alloyId494.add($.__views.__alloyId509);
    $.__views.__alloyId510 = Ti.UI.createLabel({
        text: "China",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId510"
    });
    $.__views.__alloyId509.add($.__views.__alloyId510);
    $.__views.__alloyId511 = Ti.UI.createLabel({
        text: "86",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId511"
    });
    $.__views.__alloyId509.add($.__views.__alloyId511);
    $.__views.__alloyId512 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId512"
    });
    $.__views.__alloyId509.add($.__views.__alloyId512);
    $.__views.__alloyId513 = Ti.UI.createLabel({
        text: "RM0.06(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId513"
    });
    $.__views.__alloyId512.add($.__views.__alloyId513);
    $.__views.__alloyId514 = Ti.UI.createLabel({
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId514"
    });
    $.__views.__alloyId512.add($.__views.__alloyId514);
    $.__views.__alloyId515 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId515"
    });
    $.__views.__alloyId494.add($.__views.__alloyId515);
    $.__views.__alloyId516 = Ti.UI.createLabel({
        text: "Hong Kong",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId516"
    });
    $.__views.__alloyId515.add($.__views.__alloyId516);
    $.__views.__alloyId517 = Ti.UI.createLabel({
        text: "852",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId517"
    });
    $.__views.__alloyId515.add($.__views.__alloyId517);
    $.__views.__alloyId518 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId518"
    });
    $.__views.__alloyId515.add($.__views.__alloyId518);
    $.__views.__alloyId519 = Ti.UI.createLabel({
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId519"
    });
    $.__views.__alloyId518.add($.__views.__alloyId519);
    $.__views.__alloyId520 = Ti.UI.createLabel({
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId520"
    });
    $.__views.__alloyId518.add($.__views.__alloyId520);
    $.__views.__alloyId521 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId521"
    });
    $.__views.__alloyId494.add($.__views.__alloyId521);
    $.__views.__alloyId522 = Ti.UI.createLabel({
        text: "Indonesia*",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId522"
    });
    $.__views.__alloyId521.add($.__views.__alloyId522);
    $.__views.__alloyId523 = Ti.UI.createLabel({
        text: "62",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId523"
    });
    $.__views.__alloyId521.add($.__views.__alloyId523);
    $.__views.__alloyId524 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId524"
    });
    $.__views.__alloyId521.add($.__views.__alloyId524);
    $.__views.__alloyId525 = Ti.UI.createLabel({
        text: "RM0.62(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId525"
    });
    $.__views.__alloyId524.add($.__views.__alloyId525);
    $.__views.__alloyId526 = Ti.UI.createLabel({
        text: "RM0.66(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId526"
    });
    $.__views.__alloyId524.add($.__views.__alloyId526);
    $.__views.__alloyId527 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId527"
    });
    $.__views.__alloyId494.add($.__views.__alloyId527);
    $.__views.__alloyId528 = Ti.UI.createLabel({
        text: "Singapore",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId528"
    });
    $.__views.__alloyId527.add($.__views.__alloyId528);
    $.__views.__alloyId529 = Ti.UI.createLabel({
        text: "65",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId529"
    });
    $.__views.__alloyId527.add($.__views.__alloyId529);
    $.__views.__alloyId530 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId530"
    });
    $.__views.__alloyId527.add($.__views.__alloyId530);
    $.__views.__alloyId531 = Ti.UI.createLabel({
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId531"
    });
    $.__views.__alloyId530.add($.__views.__alloyId531);
    $.__views.__alloyId532 = Ti.UI.createLabel({
        text: "RM0.13(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId532"
    });
    $.__views.__alloyId530.add($.__views.__alloyId532);
    $.__views.__alloyId533 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId533"
    });
    $.__views.idd.add($.__views.__alloyId533);
    subscribe ? $.__views.__alloyId533.addEventListener("click", subscribe) : __defers["$.__views.__alloyId533!click!subscribe"] = true;
    $.__views.__alloyId534 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId534"
    });
    $.__views.__alloyId533.add($.__views.__alloyId534);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    var idd;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId368!click!back"] && $.__views.__alloyId368.addEventListener("click", back);
    __defers["$.__views.picker!change!idd"] && $.__views.picker.addEventListener("change", idd);
    __defers["$.__views.__alloyId533!click!subscribe"] && $.__views.__alloyId533.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;