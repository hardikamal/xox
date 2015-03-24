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
        DRAWER.navigation("seasonPass", 1);
    }
    function next() {
        console.log("next");
        DRAWER.navigation("seasonPassCheckout2", 1);
    }
    function quantity(e) {
        console.log("quantity");
        quantity = e.row.title;
        ("iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname) && ($.quantityLabel.text = quantity);
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
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "seasonPassCheckout1";
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
    $.__views.seasonPassCheckout1 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "seasonPassCheckout1"
    });
    $.__views.seasonPassCheckout1 && $.addTopLevelView($.__views.seasonPassCheckout1);
<<<<<<< HEAD
    $.__views.__alloyId2204 = Alloy.createController("_header", {
        id: "__alloyId2204",
        __parentSymbol: $.__views.seasonPassCheckout1
    });
    $.__views.__alloyId2204.setParent($.__views.seasonPassCheckout1);
    $.__views.__alloyId2205 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2205"
    });
    $.__views.seasonPassCheckout1.add($.__views.__alloyId2205);
    $.__views.__alloyId2206 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2448 = Alloy.createController("_header", {
        id: "__alloyId2448",
        __parentSymbol: $.__views.seasonPassCheckout1
    });
    $.__views.__alloyId2448.setParent($.__views.seasonPassCheckout1);
    $.__views.__alloyId2449 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2449"
    });
    $.__views.seasonPassCheckout1.add($.__views.__alloyId2449);
    $.__views.__alloyId2450 = Ti.UI.createLabel({
=======
    $.__views.__alloyId2204 = Alloy.createController("_header", {
        id: "__alloyId2204",
        __parentSymbol: $.__views.seasonPassCheckout1
    });
    $.__views.__alloyId2204.setParent($.__views.seasonPassCheckout1);
    $.__views.__alloyId2205 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2205"
    });
    $.__views.seasonPassCheckout1.add($.__views.__alloyId2205);
    $.__views.__alloyId2206 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Season Pass",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2450"
    });
    $.__views.__alloyId2449.add($.__views.__alloyId2450);
    $.__views.__alloyId2451 = Ti.UI.createImageView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2206"
    });
    $.__views.__alloyId2205.add($.__views.__alloyId2206);
    $.__views.__alloyId2207 = Ti.UI.createImageView({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId2207"
    });
    $.__views.__alloyId2205.add($.__views.__alloyId2207);
    back ? $.__views.__alloyId2207.addEventListener("click", back) : __defers["$.__views.__alloyId2207!click!back"] = true;
    $.__views.__alloyId2208 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId2208"
    });
    $.__views.seasonPassCheckout1.add($.__views.__alloyId2208);
    $.__views.__alloyId2209 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2451"
    });
    $.__views.__alloyId2449.add($.__views.__alloyId2451);
    back ? $.__views.__alloyId2451.addEventListener("click", back) : __defers["$.__views.__alloyId2451!click!back"] = true;
    $.__views.__alloyId2452 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId2452"
    });
    $.__views.seasonPassCheckout1.add($.__views.__alloyId2452);
    $.__views.__alloyId2453 = Ti.UI.createLabel({
=======
        id: "__alloyId2207"
    });
    $.__views.__alloyId2205.add($.__views.__alloyId2207);
    back ? $.__views.__alloyId2207.addEventListener("click", back) : __defers["$.__views.__alloyId2207!click!back"] = true;
    $.__views.__alloyId2208 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId2208"
    });
    $.__views.seasonPassCheckout1.add($.__views.__alloyId2208);
    $.__views.__alloyId2209 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Check out",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2209"
    });
    $.__views.__alloyId2208.add($.__views.__alloyId2209);
=======
<<<<<<< HEAD
        id: "__alloyId2453"
    });
    $.__views.__alloyId2452.add($.__views.__alloyId2453);
=======
        id: "__alloyId2209"
    });
    $.__views.__alloyId2208.add($.__views.__alloyId2209);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.seasonPassCheckout1.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId2210 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId2210"
    });
    $.__views.scrollView.add($.__views.__alloyId2210);
    $.__views.__alloyId2211 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2454 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId2454"
    });
    $.__views.scrollView.add($.__views.__alloyId2454);
    $.__views.__alloyId2455 = Ti.UI.createLabel({
=======
    $.__views.__alloyId2210 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId2210"
    });
    $.__views.scrollView.add($.__views.__alloyId2210);
    $.__views.__alloyId2211 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Description",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2455"
    });
    $.__views.__alloyId2454.add($.__views.__alloyId2455);
    $.__views.__alloyId2456 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2211"
    });
    $.__views.__alloyId2210.add($.__views.__alloyId2211);
    $.__views.__alloyId2212 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Amount",
        backgroundColor: "transparent",
        color: "black",
        right: "0",
<<<<<<< HEAD
        id: "__alloyId2212"
    });
    $.__views.__alloyId2210.add($.__views.__alloyId2212);
    $.__views.__alloyId2213 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "90%",
        id: "__alloyId2213"
    });
    $.__views.scrollView.add($.__views.__alloyId2213);
    $.__views.__alloyId2214 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2456"
    });
    $.__views.__alloyId2454.add($.__views.__alloyId2456);
    $.__views.__alloyId2457 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "90%",
        id: "__alloyId2457"
    });
    $.__views.scrollView.add($.__views.__alloyId2457);
    $.__views.__alloyId2458 = Ti.UI.createLabel({
=======
        id: "__alloyId2212"
    });
    $.__views.__alloyId2210.add($.__views.__alloyId2212);
    $.__views.__alloyId2213 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "90%",
        id: "__alloyId2213"
    });
    $.__views.scrollView.add($.__views.__alloyId2213);
    $.__views.__alloyId2214 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "PROMO SP 99D",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2458"
    });
    $.__views.__alloyId2457.add($.__views.__alloyId2458);
    $.__views.__alloyId2459 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2214"
    });
    $.__views.__alloyId2213.add($.__views.__alloyId2214);
    $.__views.__alloyId2215 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "RM00.00",
        backgroundColor: "transparent",
        color: "black",
        right: "0",
<<<<<<< HEAD
        id: "__alloyId2215"
    });
    $.__views.__alloyId2213.add($.__views.__alloyId2215);
    $.__views.__alloyId2216 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2459"
    });
    $.__views.__alloyId2457.add($.__views.__alloyId2459);
    $.__views.__alloyId2460 = Ti.UI.createLabel({
=======
        id: "__alloyId2215"
    });
    $.__views.__alloyId2213.add($.__views.__alloyId2215);
    $.__views.__alloyId2216 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Talktime: 0 Minute(s)",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2460"
    });
    $.__views.scrollView.add($.__views.__alloyId2460);
    $.__views.__alloyId2461 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2216"
    });
    $.__views.scrollView.add($.__views.__alloyId2216);
    $.__views.__alloyId2217 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Data: 512MB",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2461"
    });
    $.__views.scrollView.add($.__views.__alloyId2461);
    $.__views.__alloyId2462 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2217"
    });
    $.__views.scrollView.add($.__views.__alloyId2217);
    $.__views.__alloyId2218 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "FREE:",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        top: "20",
<<<<<<< HEAD
        id: "__alloyId2218"
    });
    $.__views.scrollView.add($.__views.__alloyId2218);
    $.__views.__alloyId2219 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2462"
    });
    $.__views.scrollView.add($.__views.__alloyId2462);
    $.__views.__alloyId2463 = Ti.UI.createLabel({
=======
        id: "__alloyId2218"
    });
    $.__views.scrollView.add($.__views.__alloyId2218);
    $.__views.__alloyId2219 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "SMS: 0 Unit(s)",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId2219"
    });
    $.__views.scrollView.add($.__views.__alloyId2219);
=======
<<<<<<< HEAD
        id: "__alloyId2463"
    });
    $.__views.scrollView.add($.__views.__alloyId2463);
=======
        id: "__alloyId2219"
    });
    $.__views.scrollView.add($.__views.__alloyId2219);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "50"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
        width: "90%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.quantityLabel = Ti.UI.createLabel({
        id: "quantityLabel",
        height: "30",
        width: "100%",
        backgroundColor: "#F2F2F2",
        borderRadius: "15",
        borderColor: "#FCFCFC",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.quantityLabel);
    showPicker ? $.__views.quantityLabel.addEventListener("click", showPicker) : __defers["$.__views.quantityLabel!click!showPicker"] = true;
<<<<<<< HEAD
    $.__views.__alloyId2220 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
    $.__views.__alloyId2464 = Ti.UI.createImageView({
=======
    $.__views.__alloyId2220 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
<<<<<<< HEAD
        id: "__alloyId2220"
    });
    $.__views.pickerContentView.add($.__views.__alloyId2220);
    showPicker ? $.__views.__alloyId2220.addEventListener("click", showPicker) : __defers["$.__views.__alloyId2220!click!showPicker"] = true;
=======
<<<<<<< HEAD
        id: "__alloyId2464"
    });
    $.__views.pickerContentView.add($.__views.__alloyId2464);
    showPicker ? $.__views.__alloyId2464.addEventListener("click", showPicker) : __defers["$.__views.__alloyId2464!click!showPicker"] = true;
=======
        id: "__alloyId2220"
    });
    $.__views.pickerContentView.add($.__views.__alloyId2220);
    showPicker ? $.__views.__alloyId2220.addEventListener("click", showPicker) : __defers["$.__views.__alloyId2220!click!showPicker"] = true;
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
    var __alloyId2221 = [];
    $.__views.__alloyId2222 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId2222"
    });
    __alloyId2221.push($.__views.__alloyId2222);
    $.__views.__alloyId2223 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId2223"
    });
    __alloyId2221.push($.__views.__alloyId2223);
    $.__views.__alloyId2224 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId2224"
    });
    __alloyId2221.push($.__views.__alloyId2224);
    $.__views.__alloyId2225 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId2225"
    });
    __alloyId2221.push($.__views.__alloyId2225);
    $.__views.picker.add(__alloyId2221);
    quantity ? $.__views.picker.addEventListener("change", quantity) : __defers["$.__views.picker!change!quantity"] = true;
    $.__views.__alloyId2226 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "gray",
        id: "__alloyId2226"
    });
    $.__views.scrollView.add($.__views.__alloyId2226);
    $.__views.__alloyId2227 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    var __alloyId2465 = [];
    $.__views.__alloyId2466 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId2466"
    });
    __alloyId2465.push($.__views.__alloyId2466);
    $.__views.__alloyId2467 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId2467"
    });
    __alloyId2465.push($.__views.__alloyId2467);
    $.__views.__alloyId2468 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId2468"
    });
    __alloyId2465.push($.__views.__alloyId2468);
    $.__views.__alloyId2469 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId2469"
    });
    __alloyId2465.push($.__views.__alloyId2469);
    $.__views.picker.add(__alloyId2465);
    quantity ? $.__views.picker.addEventListener("change", quantity) : __defers["$.__views.picker!change!quantity"] = true;
    $.__views.__alloyId2470 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "gray",
        id: "__alloyId2470"
    });
    $.__views.scrollView.add($.__views.__alloyId2470);
    $.__views.__alloyId2471 = Ti.UI.createLabel({
=======
    var __alloyId2221 = [];
    $.__views.__alloyId2222 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId2222"
    });
    __alloyId2221.push($.__views.__alloyId2222);
    $.__views.__alloyId2223 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId2223"
    });
    __alloyId2221.push($.__views.__alloyId2223);
    $.__views.__alloyId2224 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId2224"
    });
    __alloyId2221.push($.__views.__alloyId2224);
    $.__views.__alloyId2225 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId2225"
    });
    __alloyId2221.push($.__views.__alloyId2225);
    $.__views.picker.add(__alloyId2221);
    quantity ? $.__views.picker.addEventListener("change", quantity) : __defers["$.__views.picker!change!quantity"] = true;
    $.__views.__alloyId2226 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "gray",
        id: "__alloyId2226"
    });
    $.__views.scrollView.add($.__views.__alloyId2226);
    $.__views.__alloyId2227 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "TOTAL PAYMENT",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< HEAD
        id: "__alloyId2227"
    });
    $.__views.__alloyId2226.add($.__views.__alloyId2227);
    $.__views.__alloyId2228 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2471"
    });
    $.__views.__alloyId2470.add($.__views.__alloyId2471);
    $.__views.__alloyId2472 = Ti.UI.createLabel({
=======
        id: "__alloyId2227"
    });
    $.__views.__alloyId2226.add($.__views.__alloyId2227);
    $.__views.__alloyId2228 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "RM00.00",
        backgroundColor: "transparent",
        color: "black",
        right: "5%",
<<<<<<< HEAD
        id: "__alloyId2228"
    });
    $.__views.__alloyId2226.add($.__views.__alloyId2228);
    $.__views.__alloyId2229 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2229"
    });
    $.__views.seasonPassCheckout1.add($.__views.__alloyId2229);
    next ? $.__views.__alloyId2229.addEventListener("click", next) : __defers["$.__views.__alloyId2229!click!next"] = true;
    $.__views.__alloyId2230 = Ti.UI.createLabel({
        text: "Next",
        color: "white",
        id: "__alloyId2230"
    });
    $.__views.__alloyId2229.add($.__views.__alloyId2230);
=======
<<<<<<< HEAD
        id: "__alloyId2472"
    });
    $.__views.__alloyId2470.add($.__views.__alloyId2472);
    $.__views.__alloyId2473 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2473"
    });
    $.__views.seasonPassCheckout1.add($.__views.__alloyId2473);
    next ? $.__views.__alloyId2473.addEventListener("click", next) : __defers["$.__views.__alloyId2473!click!next"] = true;
    $.__views.__alloyId2474 = Ti.UI.createLabel({
        text: "Next",
        color: "white",
        id: "__alloyId2474"
    });
    $.__views.__alloyId2473.add($.__views.__alloyId2474);
=======
        id: "__alloyId2228"
    });
    $.__views.__alloyId2226.add($.__views.__alloyId2228);
    $.__views.__alloyId2229 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2229"
    });
    $.__views.seasonPassCheckout1.add($.__views.__alloyId2229);
    next ? $.__views.__alloyId2229.addEventListener("click", next) : __defers["$.__views.__alloyId2229!click!next"] = true;
    $.__views.__alloyId2230 = Ti.UI.createLabel({
        text: "Next",
        color: "white",
        id: "__alloyId2230"
    });
    $.__views.__alloyId2229.add($.__views.__alloyId2230);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    var quantity;
    $.picker.setSelectedRow(0, 0, false);
<<<<<<< HEAD
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId2451!click!back"] && $.__views.__alloyId2451.addEventListener("click", back);
    __defers["$.__views.quantityLabel!click!showPicker"] && $.__views.quantityLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId2464!click!showPicker"] && $.__views.__alloyId2464.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!quantity"] && $.__views.picker.addEventListener("change", quantity);
    __defers["$.__views.__alloyId2473!click!next"] && $.__views.__alloyId2473.addEventListener("click", next);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
    __defers["$.__views.__alloyId2207!click!back"] && $.__views.__alloyId2207.addEventListener("click", back);
    __defers["$.__views.quantityLabel!click!showPicker"] && $.__views.quantityLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId2220!click!showPicker"] && $.__views.__alloyId2220.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!quantity"] && $.__views.picker.addEventListener("change", quantity);
    __defers["$.__views.__alloyId2229!click!next"] && $.__views.__alloyId2229.addEventListener("click", next);
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;