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
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "prepaidPlus";
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
    $.__views.prepaidPlus = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaidPlus"
    });
    $.__views.prepaidPlus && $.addTopLevelView($.__views.prepaidPlus);
    $.__views.__alloyId431 = Alloy.createController("_header", {
        id: "__alloyId431",
        __parentSymbol: $.__views.prepaidPlus
    });
    $.__views.__alloyId431.setParent($.__views.prepaidPlus);
    $.__views.__alloyId432 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId432"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId432);
    $.__views.__alloyId433 = Ti.UI.createView({
        layout: "horizontal",
        left: "0",
        id: "__alloyId433"
    });
    $.__views.__alloyId432.add($.__views.__alloyId433);
    $.__views.__alloyId434 = Ti.UI.createImageView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "30%",
        id: "__alloyId434"
    });
    $.__views.__alloyId433.add($.__views.__alloyId434);
    $.__views.__alloyId435 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId435"
    });
    $.__views.__alloyId433.add($.__views.__alloyId435);
    $.__views.__alloyId436 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId436"
    });
    $.__views.__alloyId432.add($.__views.__alloyId436);
    back ? $.__views.__alloyId436.addEventListener("click", back) : __defers["$.__views.__alloyId436!click!back"] = true;
    $.__views.__alloyId437 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%",
        id: "__alloyId437"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId437);
    $.__views.__alloyId438 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId438"
    });
    $.__views.__alloyId437.add($.__views.__alloyId438);
    $.__views.__alloyId439 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId439"
    });
    $.__views.__alloyId438.add($.__views.__alloyId439);
    $.__views.__alloyId440 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        left: "10",
        id: "__alloyId440"
    });
    $.__views.__alloyId439.add($.__views.__alloyId440);
    $.__views.__alloyId441 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId441"
    });
    $.__views.__alloyId438.add($.__views.__alloyId441);
    $.__views.__alloyId442 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId442"
    });
    $.__views.__alloyId441.add($.__views.__alloyId442);
    $.__views.__alloyId443 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        color: "black",
        id: "__alloyId443"
    });
    $.__views.__alloyId441.add($.__views.__alloyId443);
    $.__views.__alloyId444 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId444"
    });
    $.__views.__alloyId438.add($.__views.__alloyId444);
    $.__views.__alloyId445 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId445"
    });
    $.__views.__alloyId444.add($.__views.__alloyId445);
    $.__views.__alloyId446 = Ti.UI.createLabel({
        text: "15cent",
        width: "auto",
        color: "black",
        id: "__alloyId446"
    });
    $.__views.__alloyId444.add($.__views.__alloyId446);
    $.__views.__alloyId447 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId447"
    });
    $.__views.__alloyId437.add($.__views.__alloyId447);
    $.__views.__alloyId448 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId448"
    });
    $.__views.__alloyId447.add($.__views.__alloyId448);
    $.__views.__alloyId449 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        left: "10",
        id: "__alloyId449"
    });
    $.__views.__alloyId448.add($.__views.__alloyId449);
    $.__views.__alloyId450 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId450"
    });
    $.__views.__alloyId447.add($.__views.__alloyId450);
    $.__views.__alloyId451 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId451"
    });
    $.__views.__alloyId450.add($.__views.__alloyId451);
    $.__views.__alloyId452 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        color: "black",
        id: "__alloyId452"
    });
    $.__views.__alloyId450.add($.__views.__alloyId452);
    $.__views.__alloyId453 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId453"
    });
    $.__views.__alloyId447.add($.__views.__alloyId453);
    $.__views.__alloyId454 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId454"
    });
    $.__views.__alloyId453.add($.__views.__alloyId454);
    $.__views.__alloyId455 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        color: "black",
        id: "__alloyId455"
    });
    $.__views.__alloyId453.add($.__views.__alloyId455);
    $.__views.__alloyId456 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId456"
    });
    $.__views.__alloyId447.add($.__views.__alloyId456);
    $.__views.__alloyId457 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId457"
    });
    $.__views.__alloyId456.add($.__views.__alloyId457);
    $.__views.__alloyId458 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        color: "black",
        id: "__alloyId458"
    });
    $.__views.__alloyId456.add($.__views.__alloyId458);
    $.__views.__alloyId459 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId459"
    });
    $.__views.__alloyId447.add($.__views.__alloyId459);
    $.__views.__alloyId460 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId460"
    });
    $.__views.__alloyId459.add($.__views.__alloyId460);
    $.__views.__alloyId461 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        color: "black",
        id: "__alloyId461"
    });
    $.__views.__alloyId459.add($.__views.__alloyId461);
    $.__views.__alloyId462 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId462"
    });
    $.__views.__alloyId437.add($.__views.__alloyId462);
    $.__views.__alloyId463 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId463"
    });
    $.__views.__alloyId462.add($.__views.__alloyId463);
    $.__views.__alloyId464 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        left: "10",
        id: "__alloyId464"
    });
    $.__views.__alloyId463.add($.__views.__alloyId464);
    $.__views.__alloyId465 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId465"
    });
    $.__views.__alloyId462.add($.__views.__alloyId465);
    $.__views.__alloyId466 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId466"
    });
    $.__views.__alloyId465.add($.__views.__alloyId466);
    $.__views.__alloyId467 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        color: "black",
        id: "__alloyId467"
    });
    $.__views.__alloyId465.add($.__views.__alloyId467);
    $.__views.__alloyId468 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId468"
    });
    $.__views.__alloyId462.add($.__views.__alloyId468);
    $.__views.__alloyId469 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId469"
    });
    $.__views.__alloyId468.add($.__views.__alloyId469);
    $.__views.__alloyId470 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        color: "black",
        id: "__alloyId470"
    });
    $.__views.__alloyId468.add($.__views.__alloyId470);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId436!click!back"] && $.__views.__alloyId436.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;