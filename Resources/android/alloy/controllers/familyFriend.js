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
    $.__views.__alloyId414 = Alloy.createController("_header", {
        id: "__alloyId414",
        __parentSymbol: $.__views.familyFriend
    });
    $.__views.__alloyId414.setParent($.__views.familyFriend);
    $.__views.add = Ti.UI.createView({
        id: "add",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.familyFriend.add($.__views.add);
    $.__views.__alloyId415 = Ti.UI.createView({
        layout: "vertical",
        width: "90%",
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        borderColor: "white",
        id: "__alloyId415"
    });
    $.__views.add.add($.__views.__alloyId415);
    $.__views.__alloyId416 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId416"
    });
    $.__views.__alloyId415.add($.__views.__alloyId416);
    $.__views.__alloyId417 = Ti.UI.createLabel({
        text: "Add Friends & Family Mobile Number",
        color: "black",
        width: Ti.UI.SIZE,
        textAlign: "left",
        id: "__alloyId417"
    });
    $.__views.__alloyId416.add($.__views.__alloyId417);
    $.__views.__alloyId418 = Ti.UI.createView({
        height: "70",
        width: Ti.UI.FILL,
        backgroundColor: "gray",
        id: "__alloyId418"
    });
    $.__views.__alloyId415.add($.__views.__alloyId418);
    $.__views.mobileNo = Ti.UI.createTextField({
        id: "mobileNo",
        width: "90%",
        height: "50",
        backgroundColor: "white",
        color: "black",
        borderColor: "black",
        keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD
    });
    $.__views.__alloyId418.add($.__views.mobileNo);
    $.__views.__alloyId419 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "black",
        id: "__alloyId419"
    });
    $.__views.__alloyId415.add($.__views.__alloyId419);
    $.__views.__alloyId420 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId420"
    });
    $.__views.__alloyId419.add($.__views.__alloyId420);
    submit ? $.__views.__alloyId420.addEventListener("click", submit) : __defers["$.__views.__alloyId420!click!submit"] = true;
    $.__views.__alloyId421 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        textAlign: "center",
        id: "__alloyId421"
    });
    $.__views.__alloyId420.add($.__views.__alloyId421);
    $.__views.__alloyId422 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId422"
    });
    $.__views.__alloyId419.add($.__views.__alloyId422);
    $.__views.__alloyId423 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId423"
    });
    $.__views.__alloyId419.add($.__views.__alloyId423);
    cancel ? $.__views.__alloyId423.addEventListener("click", cancel) : __defers["$.__views.__alloyId423!click!cancel"] = true;
    $.__views.__alloyId424 = Ti.UI.createLabel({
        text: "Cancel",
        color: "white",
        textAlign: "center",
        id: "__alloyId424"
    });
    $.__views.__alloyId423.add($.__views.__alloyId424);
    $.__views.__alloyId425 = Ti.UI.createView({
        layout: "vertical",
        top: "50",
        zIndex: "1",
        id: "__alloyId425"
    });
    $.__views.familyFriend.add($.__views.__alloyId425);
    $.__views.__alloyId426 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId426"
    });
    $.__views.__alloyId425.add($.__views.__alloyId426);
    $.__views.__alloyId427 = Ti.UI.createLabel({
        text: "Friends & Family",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId427"
    });
    $.__views.__alloyId426.add($.__views.__alloyId427);
    $.__views.__alloyId428 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId428"
    });
    $.__views.__alloyId426.add($.__views.__alloyId428);
    back ? $.__views.__alloyId428.addEventListener("click", back) : __defers["$.__views.__alloyId428!click!back"] = true;
    $.__views.__alloyId429 = Ti.UI.createView({
        layout: "composite",
        height: "100",
        backgroundColor: "gray",
        id: "__alloyId429"
    });
    $.__views.__alloyId425.add($.__views.__alloyId429);
    $.__views.__alloyId430 = Ti.UI.createLabel({
        text: "Add your 15 most important people on any mobile network or Telekom Malaysia fixed line into the list to enjoy a special call rate and SMS rate.",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId430"
    });
    $.__views.__alloyId429.add($.__views.__alloyId430);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.__alloyId425.add($.__views.scrollView);
    $.__views.empty = Ti.UI.createLabel({
        text: "Currently no friends & family",
        id: "empty",
        backgroundColor: "transparent",
        color: "black",
        left: "20"
    });
    $.__views.scrollView.add($.__views.empty);
    $.__views.__alloyId431 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        id: "__alloyId431"
    });
    $.__views.scrollView.add($.__views.__alloyId431);
    $.__views.__alloyId432 = Ti.UI.createView({
        layout: "vertical",
        height: "100%",
        width: "70%",
        id: "__alloyId432"
    });
    $.__views.__alloyId431.add($.__views.__alloyId432);
    $.__views.__alloyId433 = Ti.UI.createLabel({
        text: "Mobile Number",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId433"
    });
    $.__views.__alloyId432.add($.__views.__alloyId433);
    $.__views.__alloyId434 = Ti.UI.createLabel({
        text: "011XXXXXXX",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId434"
    });
    $.__views.__alloyId432.add($.__views.__alloyId434);
    $.__views.__alloyId435 = Ti.UI.createLabel({
        text: "Remove",
        width: "auto",
        backgroundColor: "transparent",
        color: "gray",
        right: "20",
        id: "__alloyId435"
    });
    $.__views.__alloyId431.add($.__views.__alloyId435);
    $.__views.__alloyId436 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId436"
    });
    $.__views.scrollView.add($.__views.__alloyId436);
    $.__views.__alloyId437 = Ti.UI.createView({
        height: "50",
        backgroundColor: "black",
        id: "__alloyId437"
    });
    $.__views.__alloyId425.add($.__views.__alloyId437);
    ff ? $.__views.__alloyId437.addEventListener("click", ff) : __defers["$.__views.__alloyId437!click!ff"] = true;
    $.__views.__alloyId438 = Ti.UI.createLabel({
        text: "Add Friends & Family",
        color: "white",
        id: "__alloyId438"
    });
    $.__views.__alloyId437.add($.__views.__alloyId438);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 250;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 250;
    __defers["$.__views.__alloyId420!click!submit"] && $.__views.__alloyId420.addEventListener("click", submit);
    __defers["$.__views.__alloyId423!click!cancel"] && $.__views.__alloyId423.addEventListener("click", cancel);
    __defers["$.__views.__alloyId428!click!back"] && $.__views.__alloyId428.addEventListener("click", back);
    __defers["$.__views.__alloyId437!click!ff"] && $.__views.__alloyId437.addEventListener("click", ff);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;