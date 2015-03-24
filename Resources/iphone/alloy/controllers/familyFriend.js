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
    function ff() {
        console.log("ff");
        $.add.zIndex = 2;
    }
    function submit() {
        console.log("submit");
        if ("" == $.mobileNo.value) alert("Please enter mobile number"); else {
            var horizontalView = Titanium.UI.createView({
                layout: "horizontal",
                height: "20%"
            });
            var verticalView = Titanium.UI.createView({
                layout: "vertical",
                width: "70%",
                height: "100%"
            });
            var lineView = Titanium.UI.createView({
                backgroundColor: "gray",
                width: "90%",
                height: "1"
            });
            var title = Ti.UI.createLabel({
                backgroundColor: "transparent",
                color: "black",
                left: 20,
                text: "Mobile Number"
            });
            var number = Ti.UI.createLabel({
                backgroundColor: "transparent",
                color: "black",
                left: 20,
                text: ""
            });
            var remove = Ti.UI.createLabel({
                backgroundColor: "transparent",
                color: "gray",
                right: 20,
                text: "Remove",
                width: "auto"
            });
            console.log("$.mobileNo.value: " + $.mobileNo.value);
            number.text = $.mobileNo.value;
            console.log("number.text: " + number.text);
            verticalView.add(title);
            verticalView.add(number);
            horizontalView.add(verticalView);
            horizontalView.add(remove);
            $.scrollView.add(horizontalView);
            $.scrollView.add(lineView);
            $.scrollView.remove($.empty);
            $.mobileNo.value = "";
            number.text = "";
            $.add.zIndex = 0;
        }
    }
    function cancel() {
        console.log("cancel");
        $.add.zIndex = 0;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "familyFriend";
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
    $.__views.familyFriend = Ti.UI.createView({
        backgroundColor: "white",
        layout: "composite",
        fullscreen: "true",
        id: "familyFriend"
    });
    $.__views.familyFriend && $.addTopLevelView($.__views.familyFriend);
    $.__views.__alloyId367 = Alloy.createController("_header", {
        id: "__alloyId367",
        __parentSymbol: $.__views.familyFriend
    });
    $.__views.__alloyId367.setParent($.__views.familyFriend);
    $.__views.add = Ti.UI.createView({
        id: "add",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.familyFriend.add($.__views.add);
    $.__views.__alloyId368 = Ti.UI.createView({
        layout: "vertical",
        width: "90%",
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        borderColor: "white",
        id: "__alloyId368"
    });
    $.__views.add.add($.__views.__alloyId368);
    $.__views.__alloyId369 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId369"
    });
    $.__views.__alloyId368.add($.__views.__alloyId369);
    $.__views.__alloyId370 = Ti.UI.createLabel({
        text: "Add Friends & Family Mobile Number",
        color: "black",
        width: Ti.UI.SIZE,
        textAlign: "left",
        id: "__alloyId370"
    });
    $.__views.__alloyId369.add($.__views.__alloyId370);
    $.__views.__alloyId371 = Ti.UI.createView({
        height: "70",
        width: Ti.UI.FILL,
        backgroundColor: "gray",
        id: "__alloyId371"
    });
    $.__views.__alloyId368.add($.__views.__alloyId371);
    $.__views.mobileNo = Ti.UI.createTextField({
        id: "mobileNo",
        width: "90%",
        height: "50",
        backgroundColor: "white",
        color: "black",
        borderColor: "black",
        keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD
    });
    $.__views.__alloyId371.add($.__views.mobileNo);
    $.__views.__alloyId372 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "black",
        id: "__alloyId372"
    });
    $.__views.__alloyId368.add($.__views.__alloyId372);
    $.__views.__alloyId373 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId373"
    });
    $.__views.__alloyId372.add($.__views.__alloyId373);
    submit ? $.__views.__alloyId373.addEventListener("click", submit) : __defers["$.__views.__alloyId373!click!submit"] = true;
    $.__views.__alloyId374 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        textAlign: "center",
        id: "__alloyId374"
    });
    $.__views.__alloyId373.add($.__views.__alloyId374);
    $.__views.__alloyId375 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId375"
    });
    $.__views.__alloyId372.add($.__views.__alloyId375);
    $.__views.__alloyId376 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId376"
    });
    $.__views.__alloyId372.add($.__views.__alloyId376);
    cancel ? $.__views.__alloyId376.addEventListener("click", cancel) : __defers["$.__views.__alloyId376!click!cancel"] = true;
    $.__views.__alloyId377 = Ti.UI.createLabel({
        text: "Cancel",
        color: "white",
        textAlign: "center",
        id: "__alloyId377"
    });
    $.__views.__alloyId376.add($.__views.__alloyId377);
    $.__views.__alloyId378 = Ti.UI.createView({
        layout: "vertical",
        top: "50",
        zIndex: "1",
        id: "__alloyId378"
    });
    $.__views.familyFriend.add($.__views.__alloyId378);
    $.__views.__alloyId379 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId379"
    });
    $.__views.__alloyId378.add($.__views.__alloyId379);
    $.__views.__alloyId380 = Ti.UI.createLabel({
        text: "Friends & Family",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId380"
    });
    $.__views.__alloyId379.add($.__views.__alloyId380);
    $.__views.__alloyId381 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId381"
    });
    $.__views.__alloyId379.add($.__views.__alloyId381);
    back ? $.__views.__alloyId381.addEventListener("click", back) : __defers["$.__views.__alloyId381!click!back"] = true;
    $.__views.__alloyId382 = Ti.UI.createView({
        layout: "composite",
        height: "100",
        backgroundColor: "gray",
        id: "__alloyId382"
    });
    $.__views.__alloyId378.add($.__views.__alloyId382);
    $.__views.__alloyId383 = Ti.UI.createLabel({
        text: "Add your 15 most important people on any mobile network or Telekom Malaysia fixed line into the list to enjoy a special call rate and SMS rate.",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId383"
    });
    $.__views.__alloyId382.add($.__views.__alloyId383);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.__alloyId378.add($.__views.scrollView);
    $.__views.empty = Ti.UI.createLabel({
        text: "Currently no friends & family",
        id: "empty",
        backgroundColor: "transparent",
        color: "black",
        left: "20"
    });
    $.__views.scrollView.add($.__views.empty);
    $.__views.__alloyId384 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        id: "__alloyId384"
    });
    $.__views.scrollView.add($.__views.__alloyId384);
    $.__views.__alloyId385 = Ti.UI.createView({
        layout: "vertical",
        height: "100%",
        width: "70%",
        id: "__alloyId385"
    });
    $.__views.__alloyId384.add($.__views.__alloyId385);
    $.__views.__alloyId386 = Ti.UI.createLabel({
        text: "Mobile Number",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId386"
    });
    $.__views.__alloyId385.add($.__views.__alloyId386);
    $.__views.__alloyId387 = Ti.UI.createLabel({
        text: "011XXXXXXX",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId387"
    });
    $.__views.__alloyId385.add($.__views.__alloyId387);
    $.__views.__alloyId388 = Ti.UI.createLabel({
        text: "Remove",
        width: "auto",
        backgroundColor: "transparent",
        color: "gray",
        right: "20",
        id: "__alloyId388"
    });
    $.__views.__alloyId384.add($.__views.__alloyId388);
    $.__views.__alloyId389 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId389"
    });
    $.__views.scrollView.add($.__views.__alloyId389);
    $.__views.__alloyId390 = Ti.UI.createView({
        height: "50",
        backgroundColor: "black",
        id: "__alloyId390"
    });
    $.__views.__alloyId378.add($.__views.__alloyId390);
    ff ? $.__views.__alloyId390.addEventListener("click", ff) : __defers["$.__views.__alloyId390!click!ff"] = true;
    $.__views.__alloyId391 = Ti.UI.createLabel({
        text: "Add Friends & Family",
        color: "white",
        id: "__alloyId391"
    });
    $.__views.__alloyId390.add($.__views.__alloyId391);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 250;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 250;
    }
    __defers["$.__views.__alloyId373!click!submit"] && $.__views.__alloyId373.addEventListener("click", submit);
    __defers["$.__views.__alloyId376!click!cancel"] && $.__views.__alloyId376.addEventListener("click", cancel);
    __defers["$.__views.__alloyId381!click!back"] && $.__views.__alloyId381.addEventListener("click", back);
    __defers["$.__views.__alloyId390!click!ff"] && $.__views.__alloyId390.addEventListener("click", ff);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;