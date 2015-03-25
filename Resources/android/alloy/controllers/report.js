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
        DRAWER.navigation("myAccount", 1);
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
    $.__views.__alloyId2365 = Alloy.createController("_header", {
        id: "__alloyId2365",
        __parentSymbol: $.__views.report
    });
    $.__views.__alloyId2365.setParent($.__views.report);
    $.__views.__alloyId2366 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2366"
    });
    $.__views.report.add($.__views.__alloyId2366);
    $.__views.__alloyId2367 = Ti.UI.createLabel({
        text: "Feedback",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2367"
    });
    $.__views.__alloyId2366.add($.__views.__alloyId2367);
    $.__views.__alloyId2368 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2368"
    });
    $.__views.__alloyId2366.add($.__views.__alloyId2368);
    back ? $.__views.__alloyId2368.addEventListener("click", back) : __defers["$.__views.__alloyId2368!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F2F2F2"
    });
    $.__views.report.add($.__views.scrollView);
    $.__views.__alloyId2369 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2369"
    });
    $.__views.scrollView.add($.__views.__alloyId2369);
    $.__views.__alloyId2370 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "35%",
        top: "0",
        id: "__alloyId2370"
    });
    $.__views.__alloyId2369.add($.__views.__alloyId2370);
    $.__views.__alloyId2371 = Ti.UI.createLabel({
        text: "Subject",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId2371"
    });
    $.__views.__alloyId2370.add($.__views.__alloyId2371);
    $.__views.__alloyId2372 = Ti.UI.createLabel({
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
        id: "__alloyId2372"
    });
    $.__views.__alloyId2370.add($.__views.__alloyId2372);
    $.__views.__alloyId2373 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "65%",
        id: "__alloyId2373"
    });
    $.__views.__alloyId2369.add($.__views.__alloyId2373);
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
    $.__views.__alloyId2373.add($.__views.picker);
    var __alloyId2374 = [];
    $.__views.__alloyId2375 = Ti.UI.createPickerRow({
        title: "Subject 1",
        id: "__alloyId2375"
    });
    __alloyId2374.push($.__views.__alloyId2375);
    $.__views.__alloyId2376 = Ti.UI.createPickerRow({
        title: "Subject 2",
        id: "__alloyId2376"
    });
    __alloyId2374.push($.__views.__alloyId2376);
    $.__views.__alloyId2377 = Ti.UI.createPickerRow({
        title: "Subject 3",
        id: "__alloyId2377"
    });
    __alloyId2374.push($.__views.__alloyId2377);
    $.__views.picker.add(__alloyId2374);
    subjectType ? $.__views.picker.addEventListener("change", subjectType) : __defers["$.__views.picker!change!subjectType"] = true;
    $.__views.__alloyId2378 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId2378"
    });
    $.__views.__alloyId2373.add($.__views.__alloyId2378);
    $.__views.__alloyId2379 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2379"
    });
    $.__views.scrollView.add($.__views.__alloyId2379);
    $.__views.__alloyId2380 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "35%",
        top: "0",
        id: "__alloyId2380"
    });
    $.__views.__alloyId2379.add($.__views.__alloyId2380);
    $.__views.__alloyId2381 = Ti.UI.createLabel({
        text: "Email",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId2381"
    });
    $.__views.__alloyId2380.add($.__views.__alloyId2381);
    $.__views.__alloyId2382 = Ti.UI.createLabel({
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
        id: "__alloyId2382"
    });
    $.__views.__alloyId2380.add($.__views.__alloyId2382);
    $.__views.email = Ti.UI.createTextField({
        id: "email",
        width: "65%",
        height: "30",
        borderRadius: "5",
        backgroundColor: "white",
        color: "black",
        borderColor: "gray"
    });
    $.__views.__alloyId2379.add($.__views.email);
    $.__views.__alloyId2383 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2383"
    });
    $.__views.scrollView.add($.__views.__alloyId2383);
    $.__views.__alloyId2384 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "35%",
        top: "0",
        id: "__alloyId2384"
    });
    $.__views.__alloyId2383.add($.__views.__alloyId2384);
    $.__views.__alloyId2385 = Ti.UI.createLabel({
        text: "Mobile No.",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId2385"
    });
    $.__views.__alloyId2384.add($.__views.__alloyId2385);
    $.__views.__alloyId2386 = Ti.UI.createLabel({
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
        id: "__alloyId2386"
    });
    $.__views.__alloyId2384.add($.__views.__alloyId2386);
    $.__views.mobileNo = Ti.UI.createTextField({
        id: "mobileNo",
        width: "65%",
        height: "30",
        borderRadius: "5",
        backgroundColor: "white",
        color: "black",
        borderColor: "gray"
    });
    $.__views.__alloyId2383.add($.__views.mobileNo);
    $.__views.__alloyId2387 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2387"
    });
    $.__views.scrollView.add($.__views.__alloyId2387);
    $.__views.__alloyId2388 = Ti.UI.createLabel({
        text: "Message",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId2388"
    });
    $.__views.__alloyId2387.add($.__views.__alloyId2388);
    $.__views.__alloyId2389 = Ti.UI.createLabel({
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
        id: "__alloyId2389"
    });
    $.__views.__alloyId2387.add($.__views.__alloyId2389);
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
    $.__views.__alloyId2390 = Ti.UI.createLabel({
        text: "* Required fields",
        height: "50",
        color: "red",
        textAlign: "left",
        left: "10%",
        top: "10",
        id: "__alloyId2390"
    });
    $.__views.scrollView.add($.__views.__alloyId2390);
    $.__views.__alloyId2391 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2391"
    });
    $.__views.report.add($.__views.__alloyId2391);
    send ? $.__views.__alloyId2391.addEventListener("click", send) : __defers["$.__views.__alloyId2391!click!send"] = true;
    $.__views.__alloyId2392 = Ti.UI.createLabel({
        text: "Send",
        color: "white",
        height: "100%",
        textAlign: "center",
        id: "__alloyId2392"
    });
    $.__views.__alloyId2391.add($.__views.__alloyId2392);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    var subjectType;
    __defers["$.__views.__alloyId2368!click!back"] && $.__views.__alloyId2368.addEventListener("click", back);
    __defers["$.__views.picker!change!subjectType"] && $.__views.picker.addEventListener("change", subjectType);
    __defers["$.__views.__alloyId2391!click!send"] && $.__views.__alloyId2391.addEventListener("click", send);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;