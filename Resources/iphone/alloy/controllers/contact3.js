function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "contact3";
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
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        height: "100%",
        scrollType: "vertical",
        backgroundImage: "/images/BG_Large.jpg"
    });
    $.__views.scrollView && $.addTopLevelView($.__views.scrollView);
    var __alloyId87 = [];
    $.__views.sectionFruit = Ti.UI.createTableViewSection({
        id: "sectionFruit",
        headerTitle: "Fruit"
    });
    __alloyId87.push($.__views.sectionFruit);
    $.__views.__alloyId88 = Ti.UI.createTableViewRow({
        title: "Apple",
        id: "__alloyId88"
    });
    $.__views.sectionFruit.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createTableViewRow({
        title: "Bananas",
        id: "__alloyId89"
    });
    $.__views.sectionFruit.add($.__views.__alloyId89);
    $.__views.sectionVeg = Ti.UI.createTableViewSection({
        id: "sectionVeg",
        headerTitle: "Vegetables"
    });
    __alloyId87.push($.__views.sectionVeg);
    $.__views.__alloyId90 = Ti.UI.createTableViewRow({
        title: "Carrots",
        id: "__alloyId90"
    });
    $.__views.sectionVeg.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createTableViewRow({
        title: "Potatoes",
        id: "__alloyId91"
    });
    $.__views.sectionVeg.add($.__views.__alloyId91);
    $.__views.sectionFish = Ti.UI.createTableViewSection({
        id: "sectionFish",
        headerTitle: "Fish"
    });
    __alloyId87.push($.__views.sectionFish);
    $.__views.__alloyId92 = Ti.UI.createTableViewRow({
        title: "Cod",
        id: "__alloyId92"
    });
    $.__views.sectionFish.add($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createTableViewRow({
        title: "Haddock",
        id: "__alloyId93"
    });
    $.__views.sectionFish.add($.__views.__alloyId93);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId87,
        id: "table"
    });
    $.__views.scrollView.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    "android" == Ti.Platform.osname && ($.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;