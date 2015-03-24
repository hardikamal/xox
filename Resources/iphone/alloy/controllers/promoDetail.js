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
        DRAWER.navigation("promo", 2);
    }
    function buy() {
        console.log("buy");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "promoDetail";
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
    $.__views.promoDetail = Ti.UI.createView({
        backgroundColor: "white",
        layout: "composite",
        fullscreen: "true",
        id: "promoDetail"
    });
    $.__views.promoDetail && $.addTopLevelView($.__views.promoDetail);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
    $.__views.__alloyId1964 = Alloy.createController("_header", {
        id: "__alloyId1964",
        __parentSymbol: $.__views.promoDetail
    });
    $.__views.__alloyId1964.setParent($.__views.promoDetail);
    $.__views.__alloyId1965 = Ti.UI.createView({
<<<<<<< HEAD
=======
<<<<<<< HEAD
    $.__views.__alloyId2191 = Alloy.createController("_header", {
        id: "__alloyId2191",
        __parentSymbol: $.__views.promoDetail
    });
    $.__views.__alloyId2191.setParent($.__views.promoDetail);
    $.__views.__alloyId2192 = Ti.UI.createView({
=======
    $.__views.__alloyId1964 = Alloy.createController("_header", {
        id: "__alloyId1964",
        __parentSymbol: $.__views.promoDetail
    });
    $.__views.__alloyId1964.setParent($.__views.promoDetail);
    $.__views.__alloyId1965 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        layout: "vertical",
        width: "auto",
        top: "60",
        bottom: "50",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2192"
    });
    $.__views.promoDetail.add($.__views.__alloyId2192);
    $.__views.__alloyId2193 = Ti.UI.createImageView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId1965"
    });
    $.__views.promoDetail.add($.__views.__alloyId1965);
    $.__views.__alloyId1966 = Ti.UI.createImageView({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        bottom: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1966"
    });
    $.__views.__alloyId1965.add($.__views.__alloyId1966);
    back ? $.__views.__alloyId1966.addEventListener("click", back) : __defers["$.__views.__alloyId1966!click!back"] = true;
    $.__views.__alloyId1967 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId2193"
    });
    $.__views.__alloyId2192.add($.__views.__alloyId2193);
    back ? $.__views.__alloyId2193.addEventListener("click", back) : __defers["$.__views.__alloyId2193!click!back"] = true;
    $.__views.__alloyId2194 = Ti.UI.createView({
=======
        id: "__alloyId1966"
    });
    $.__views.__alloyId1965.add($.__views.__alloyId1966);
    back ? $.__views.__alloyId1966.addEventListener("click", back) : __defers["$.__views.__alloyId1966!click!back"] = true;
    $.__views.__alloyId1967 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1966"
    });
    $.__views.__alloyId1965.add($.__views.__alloyId1966);
    back ? $.__views.__alloyId1966.addEventListener("click", back) : __defers["$.__views.__alloyId1966!click!back"] = true;
    $.__views.__alloyId1967 = Ti.UI.createView({
>>>>>>> origin/master
        width: "280",
        height: "200",
        backgroundColor: "yellow",
        bottom: "10",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2194"
    });
    $.__views.__alloyId2192.add($.__views.__alloyId2194);
    $.__views.__alloyId2195 = Ti.UI.createScrollView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId1967"
    });
    $.__views.__alloyId1965.add($.__views.__alloyId1967);
    $.__views.__alloyId1968 = Ti.UI.createScrollView({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        layout: "vertical",
        contentHeight: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId1968"
    });
    $.__views.__alloyId1965.add($.__views.__alloyId1968);
    $.__views.__alloyId1969 = Ti.UI.createLabel({
        text: "Lorem ipsum dolor sit amet, sed errem solet euripidis ad, sint putent at nam, vel falli causae ea. Mei facete electram prodesset at, vix id elitr percipit reprehendunt. Pri ex reque movet constituto, at assentior sententiae deterruisset vim. Nam illud dolores eu, sed an nobis antiopam. Laudem labore facilisi vim eu, sumo soluta comprehensam te sed. Ea per nostrum menandri, ne quo quas eligendi.No habeo novum contentiones eos. Pri te solum prodesset abhorreant, ut illum corrumpit mnesarchum est, porro movet nullam id vim. An ius affert neglegentur, at eam quis animal accumsan. Ea utinam verear eam, sea eu essent ullamcorper. Et quo falli doctus similique.",
        color: "#E6E7E9",
        textAlign: "left",
        id: "__alloyId1969"
<<<<<<< HEAD
    });
    $.__views.__alloyId1968.add($.__views.__alloyId1969);
    $.__views.__alloyId1970 = Ti.UI.createButton({
=======
<<<<<<< HEAD
        id: "__alloyId2195"
    });
    $.__views.__alloyId2192.add($.__views.__alloyId2195);
    $.__views.__alloyId2196 = Ti.UI.createLabel({
        text: "Lorem ipsum dolor sit amet, sed errem solet euripidis ad, sint putent at nam, vel falli causae ea. Mei facete electram prodesset at, vix id elitr percipit reprehendunt. Pri ex reque movet constituto, at assentior sententiae deterruisset vim. Nam illud dolores eu, sed an nobis antiopam. Laudem labore facilisi vim eu, sumo soluta comprehensam te sed. Ea per nostrum menandri, ne quo quas eligendi.No habeo novum contentiones eos. Pri te solum prodesset abhorreant, ut illum corrumpit mnesarchum est, porro movet nullam id vim. An ius affert neglegentur, at eam quis animal accumsan. Ea utinam verear eam, sea eu essent ullamcorper. Et quo falli doctus similique.",
        color: "#E6E7E9",
        textAlign: "left",
        id: "__alloyId2196"
    });
    $.__views.__alloyId2195.add($.__views.__alloyId2196);
    $.__views.__alloyId2197 = Ti.UI.createButton({
=======
        id: "__alloyId1968"
    });
    $.__views.__alloyId1965.add($.__views.__alloyId1968);
    $.__views.__alloyId1969 = Ti.UI.createLabel({
        text: "Lorem ipsum dolor sit amet, sed errem solet euripidis ad, sint putent at nam, vel falli causae ea. Mei facete electram prodesset at, vix id elitr percipit reprehendunt. Pri ex reque movet constituto, at assentior sententiae deterruisset vim. Nam illud dolores eu, sed an nobis antiopam. Laudem labore facilisi vim eu, sumo soluta comprehensam te sed. Ea per nostrum menandri, ne quo quas eligendi.No habeo novum contentiones eos. Pri te solum prodesset abhorreant, ut illum corrumpit mnesarchum est, porro movet nullam id vim. An ius affert neglegentur, at eam quis animal accumsan. Ea utinam verear eam, sea eu essent ullamcorper. Et quo falli doctus similique.",
        color: "#E6E7E9",
        textAlign: "left",
        id: "__alloyId1969"
    });
    $.__views.__alloyId1968.add($.__views.__alloyId1969);
    $.__views.__alloyId1970 = Ti.UI.createButton({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    });
    $.__views.__alloyId1968.add($.__views.__alloyId1969);
    $.__views.__alloyId1970 = Ti.UI.createButton({
>>>>>>> origin/master
        title: "Buy Now",
        color: "#44C7D6",
        borderColor: "#44C7D6",
        backgroundColor: "white",
        height: "40",
        width: "120",
        borderRadius: "20",
        top: "40",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2197"
    });
    $.__views.__alloyId2195.add($.__views.__alloyId2197);
    buy ? $.__views.__alloyId2197.addEventListener("click", buy) : __defers["$.__views.__alloyId2197!click!buy"] = true;
    $.__views.__alloyId2198 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId1970"
    });
    $.__views.__alloyId1968.add($.__views.__alloyId1970);
    buy ? $.__views.__alloyId1970.addEventListener("click", buy) : __defers["$.__views.__alloyId1970!click!buy"] = true;
    $.__views.__alloyId1971 = Ti.UI.createView({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        layout: "horizontal",
        backgroundColor: "#333333",
        height: "50",
        bottom: "0",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2198"
    });
    $.__views.promoDetail.add($.__views.__alloyId2198);
    $.__views.__alloyId2199 = Ti.UI.createView({
        width: "3%",
        id: "__alloyId2199"
    });
    $.__views.__alloyId2198.add($.__views.__alloyId2199);
    $.__views.__alloyId2200 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#3E6AC3",
        id: "__alloyId2200"
    });
    $.__views.__alloyId2198.add($.__views.__alloyId2200);
    $.__views.__alloyId2201 = Ti.UI.createView({
        width: "2%",
        id: "__alloyId2201"
    });
    $.__views.__alloyId2198.add($.__views.__alloyId2201);
    $.__views.__alloyId2202 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#E04A32",
        id: "__alloyId2202"
    });
    $.__views.__alloyId2198.add($.__views.__alloyId2202);
    $.__views.__alloyId2203 = Ti.UI.createView({
        width: "2%",
        id: "__alloyId2203"
    });
    $.__views.__alloyId2198.add($.__views.__alloyId2203);
    $.__views.__alloyId2204 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#27ACEC",
        id: "__alloyId2204"
    });
    $.__views.__alloyId2198.add($.__views.__alloyId2204);
    $.__views.__alloyId2205 = Ti.UI.createView({
        width: "3%",
        id: "__alloyId2205"
    });
    $.__views.__alloyId2198.add($.__views.__alloyId2205);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2193!click!back"] && $.__views.__alloyId2193.addEventListener("click", back);
    __defers["$.__views.__alloyId2197!click!buy"] && $.__views.__alloyId2197.addEventListener("click", buy);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId1971"
    });
    $.__views.promoDetail.add($.__views.__alloyId1971);
    $.__views.__alloyId1972 = Ti.UI.createView({
        width: "3%",
        id: "__alloyId1972"
    });
    $.__views.__alloyId1971.add($.__views.__alloyId1972);
    $.__views.__alloyId1973 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#3E6AC3",
        id: "__alloyId1973"
    });
    $.__views.__alloyId1971.add($.__views.__alloyId1973);
    $.__views.__alloyId1974 = Ti.UI.createView({
        width: "2%",
        id: "__alloyId1974"
    });
    $.__views.__alloyId1971.add($.__views.__alloyId1974);
    $.__views.__alloyId1975 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#E04A32",
        id: "__alloyId1975"
    });
    $.__views.__alloyId1971.add($.__views.__alloyId1975);
    $.__views.__alloyId1976 = Ti.UI.createView({
        width: "2%",
        id: "__alloyId1976"
    });
    $.__views.__alloyId1971.add($.__views.__alloyId1976);
    $.__views.__alloyId1977 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#27ACEC",
        id: "__alloyId1977"
    });
    $.__views.__alloyId1971.add($.__views.__alloyId1977);
    $.__views.__alloyId1978 = Ti.UI.createView({
        width: "3%",
        id: "__alloyId1978"
    });
    $.__views.__alloyId1971.add($.__views.__alloyId1978);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1966!click!back"] && $.__views.__alloyId1966.addEventListener("click", back);
    __defers["$.__views.__alloyId1970!click!buy"] && $.__views.__alloyId1970.addEventListener("click", buy);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;