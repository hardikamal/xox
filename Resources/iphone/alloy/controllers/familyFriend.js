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
    $.__views.__alloyId178 = Alloy.createController("_header", {
        id: "__alloyId178",
        __parentSymbol: $.__views.familyFriend
    });
    $.__views.__alloyId178.setParent($.__views.familyFriend);
    $.__views.add = Ti.UI.createView({
        id: "add",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.familyFriend.add($.__views.add);
    $.__views.__alloyId179 = Ti.UI.createView({
        layout: "vertical",
        width: "90%",
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        borderColor: "white",
        id: "__alloyId179"
    });
    $.__views.add.add($.__views.__alloyId179);
    $.__views.__alloyId180 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId180"
    });
    $.__views.__alloyId179.add($.__views.__alloyId180);
    $.__views.__alloyId181 = Ti.UI.createLabel({
        text: "Add Friends & Family Mobile Number",
        color: "black",
        width: Ti.UI.SIZE,
        textAlign: "left",
        id: "__alloyId181"
    });
    $.__views.__alloyId180.add($.__views.__alloyId181);
    $.__views.__alloyId182 = Ti.UI.createView({
        height: "70",
        width: Ti.UI.FILL,
        backgroundColor: "gray",
        id: "__alloyId182"
    });
    $.__views.__alloyId179.add($.__views.__alloyId182);
    $.__views.mobileNo = Ti.UI.createTextField({
        id: "mobileNo",
        width: "90%",
        height: "50",
        backgroundColor: "white",
        color: "black",
        borderColor: "black",
        keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD
    });
    $.__views.__alloyId182.add($.__views.mobileNo);
    $.__views.__alloyId183 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "black",
        id: "__alloyId183"
    });
    $.__views.__alloyId179.add($.__views.__alloyId183);
    $.__views.__alloyId184 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId184"
    });
    $.__views.__alloyId183.add($.__views.__alloyId184);
    submit ? $.__views.__alloyId184.addEventListener("click", submit) : __defers["$.__views.__alloyId184!click!submit"] = true;
    $.__views.__alloyId185 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        textAlign: "center",
        id: "__alloyId185"
    });
    $.__views.__alloyId184.add($.__views.__alloyId185);
    $.__views.__alloyId186 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId186"
    });
    $.__views.__alloyId183.add($.__views.__alloyId186);
    $.__views.__alloyId187 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId187"
    });
    $.__views.__alloyId183.add($.__views.__alloyId187);
    cancel ? $.__views.__alloyId187.addEventListener("click", cancel) : __defers["$.__views.__alloyId187!click!cancel"] = true;
    $.__views.__alloyId188 = Ti.UI.createLabel({
        text: "Cancel",
        color: "white",
        textAlign: "center",
        id: "__alloyId188"
    });
    $.__views.__alloyId187.add($.__views.__alloyId188);
    $.__views.__alloyId189 = Ti.UI.createView({
        layout: "vertical",
        top: "50",
        zIndex: "1",
        id: "__alloyId189"
    });
    $.__views.familyFriend.add($.__views.__alloyId189);
    $.__views.__alloyId190 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId190"
    });
    $.__views.__alloyId189.add($.__views.__alloyId190);
    $.__views.__alloyId191 = Ti.UI.createLabel({
        text: "Friends & Family",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId191"
    });
    $.__views.__alloyId190.add($.__views.__alloyId191);
    $.__views.__alloyId192 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId192"
    });
    $.__views.__alloyId190.add($.__views.__alloyId192);
    back ? $.__views.__alloyId192.addEventListener("click", back) : __defers["$.__views.__alloyId192!click!back"] = true;
    $.__views.__alloyId193 = Ti.UI.createView({
        layout: "composite",
        height: "100",
        backgroundColor: "gray",
        id: "__alloyId193"
    });
    $.__views.__alloyId189.add($.__views.__alloyId193);
    $.__views.__alloyId194 = Ti.UI.createLabel({
        text: "Add your 15 most important people on any mobile network or Telekom Malaysia fixed line into the list to enjoy a special call rate and SMS rate.",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId194"
    });
    $.__views.__alloyId193.add($.__views.__alloyId194);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.__alloyId189.add($.__views.scrollView);
    $.__views.empty = Ti.UI.createLabel({
        text: "Currently no friends & family",
        id: "empty",
        backgroundColor: "transparent",
        color: "black",
        left: "20"
    });
    $.__views.scrollView.add($.__views.empty);
    $.__views.__alloyId195 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        id: "__alloyId195"
    });
    $.__views.scrollView.add($.__views.__alloyId195);
    $.__views.__alloyId196 = Ti.UI.createView({
        layout: "vertical",
        height: "100%",
        width: "70%",
        id: "__alloyId196"
    });
    $.__views.__alloyId195.add($.__views.__alloyId196);
    $.__views.__alloyId197 = Ti.UI.createLabel({
        text: "Mobile Number",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId197"
    });
    $.__views.__alloyId196.add($.__views.__alloyId197);
    $.__views.__alloyId198 = Ti.UI.createLabel({
        text: "011XXXXXXX",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId198"
    });
    $.__views.__alloyId196.add($.__views.__alloyId198);
    $.__views.__alloyId199 = Ti.UI.createLabel({
        text: "Remove",
        width: "auto",
        backgroundColor: "transparent",
        color: "gray",
        right: "20",
        id: "__alloyId199"
    });
    $.__views.__alloyId195.add($.__views.__alloyId199);
    $.__views.__alloyId200 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId200"
    });
    $.__views.scrollView.add($.__views.__alloyId200);
    $.__views.__alloyId201 = Ti.UI.createView({
        height: "50",
        backgroundColor: "black",
        id: "__alloyId201"
    });
    $.__views.__alloyId189.add($.__views.__alloyId201);
    ff ? $.__views.__alloyId201.addEventListener("click", ff) : __defers["$.__views.__alloyId201!click!ff"] = true;
    $.__views.__alloyId202 = Ti.UI.createLabel({
        text: "Add Friends & Family",
        color: "white",
        id: "__alloyId202"
    });
    $.__views.__alloyId201.add($.__views.__alloyId202);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 250;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 250;
    }
    __defers["$.__views.__alloyId184!click!submit"] && $.__views.__alloyId184.addEventListener("click", submit);
    __defers["$.__views.__alloyId187!click!cancel"] && $.__views.__alloyId187.addEventListener("click", cancel);
    __defers["$.__views.__alloyId192!click!back"] && $.__views.__alloyId192.addEventListener("click", back);
    __defers["$.__views.__alloyId201!click!ff"] && $.__views.__alloyId201.addEventListener("click", ff);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;