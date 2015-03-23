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
    $.__views.__alloyId1845 = Alloy.createController("_header", {
        id: "__alloyId1845",
        __parentSymbol: $.__views.promoDetail
    });
    $.__views.__alloyId1845.setParent($.__views.promoDetail);
    $.__views.__alloyId1846 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId2010 = Alloy.createController("_header", {
        id: "__alloyId2010",
        __parentSymbol: $.__views.promoDetail
    });
    $.__views.__alloyId2010.setParent($.__views.promoDetail);
    $.__views.__alloyId2011 = Ti.UI.createView({
=======
    $.__views.__alloyId1511 = Alloy.createController("_header", {
        id: "__alloyId1511",
        __parentSymbol: $.__views.promoDetail
    });
    $.__views.__alloyId1511.setParent($.__views.promoDetail);
    $.__views.__alloyId1512 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "vertical",
        width: "auto",
        top: "60",
        bottom: "50",
<<<<<<< HEAD
        id: "__alloyId1846"
    });
    $.__views.promoDetail.add($.__views.__alloyId1846);
    $.__views.__alloyId1847 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId2011"
    });
    $.__views.promoDetail.add($.__views.__alloyId2011);
    $.__views.__alloyId2012 = Ti.UI.createImageView({
=======
        id: "__alloyId1512"
    });
    $.__views.promoDetail.add($.__views.__alloyId1512);
    $.__views.__alloyId1513 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        bottom: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId1847"
    });
    $.__views.__alloyId1846.add($.__views.__alloyId1847);
    back ? $.__views.__alloyId1847.addEventListener("click", back) : __defers["$.__views.__alloyId1847!click!back"] = true;
    $.__views.__alloyId1848 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId2012"
    });
    $.__views.__alloyId2011.add($.__views.__alloyId2012);
    back ? $.__views.__alloyId2012.addEventListener("click", back) : __defers["$.__views.__alloyId2012!click!back"] = true;
    $.__views.__alloyId2013 = Ti.UI.createView({
=======
        id: "__alloyId1513"
    });
    $.__views.__alloyId1512.add($.__views.__alloyId1513);
    back ? $.__views.__alloyId1513.addEventListener("click", back) : __defers["$.__views.__alloyId1513!click!back"] = true;
    $.__views.__alloyId1514 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        width: "280",
        height: "200",
        backgroundColor: "yellow",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId1848"
    });
    $.__views.__alloyId1846.add($.__views.__alloyId1848);
    $.__views.__alloyId1849 = Ti.UI.createScrollView({
=======
<<<<<<< HEAD
        id: "__alloyId2013"
    });
    $.__views.__alloyId2011.add($.__views.__alloyId2013);
    $.__views.__alloyId2014 = Ti.UI.createScrollView({
=======
        id: "__alloyId1514"
    });
    $.__views.__alloyId1512.add($.__views.__alloyId1514);
    $.__views.__alloyId1515 = Ti.UI.createScrollView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "vertical",
        contentHeight: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
        id: "__alloyId1849"
=======
<<<<<<< HEAD
        id: "__alloyId2014"
    });
    $.__views.__alloyId2011.add($.__views.__alloyId2014);
    $.__views.__alloyId2015 = Ti.UI.createLabel({
        text: "Lorem ipsum dolor sit amet, sed errem solet euripidis ad, sint putent at nam, vel falli causae ea. Mei facete electram prodesset at, vix id elitr percipit reprehendunt. Pri ex reque movet constituto, at assentior sententiae deterruisset vim. Nam illud dolores eu, sed an nobis antiopam. Laudem labore facilisi vim eu, sumo soluta comprehensam te sed. Ea per nostrum menandri, ne quo quas eligendi.No habeo novum contentiones eos. Pri te solum prodesset abhorreant, ut illum corrumpit mnesarchum est, porro movet nullam id vim. An ius affert neglegentur, at eam quis animal accumsan. Ea utinam verear eam, sea eu essent ullamcorper. Et quo falli doctus similique.",
        color: "#E6E7E9",
        textAlign: "left",
        id: "__alloyId2015"
    });
    $.__views.__alloyId2014.add($.__views.__alloyId2015);
    $.__views.__alloyId2016 = Ti.UI.createButton({
=======
        id: "__alloyId1515"
>>>>>>> origin/master
    });
    $.__views.__alloyId1846.add($.__views.__alloyId1849);
    $.__views.__alloyId1850 = Ti.UI.createLabel({
        text: "Lorem ipsum dolor sit amet, sed errem solet euripidis ad, sint putent at nam, vel falli causae ea. Mei facete electram prodesset at, vix id elitr percipit reprehendunt. Pri ex reque movet constituto, at assentior sententiae deterruisset vim. Nam illud dolores eu, sed an nobis antiopam. Laudem labore facilisi vim eu, sumo soluta comprehensam te sed. Ea per nostrum menandri, ne quo quas eligendi.No habeo novum contentiones eos. Pri te solum prodesset abhorreant, ut illum corrumpit mnesarchum est, porro movet nullam id vim. An ius affert neglegentur, at eam quis animal accumsan. Ea utinam verear eam, sea eu essent ullamcorper. Et quo falli doctus similique.",
        color: "#E6E7E9",
        textAlign: "left",
        id: "__alloyId1850"
    });
<<<<<<< HEAD
    $.__views.__alloyId1849.add($.__views.__alloyId1850);
    $.__views.__alloyId1851 = Ti.UI.createButton({
=======
    $.__views.__alloyId1515.add($.__views.__alloyId1516);
    $.__views.__alloyId1517 = Ti.UI.createButton({
>>>>>>> origin/master
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
        id: "__alloyId1851"
    });
    $.__views.__alloyId1849.add($.__views.__alloyId1851);
    buy ? $.__views.__alloyId1851.addEventListener("click", buy) : __defers["$.__views.__alloyId1851!click!buy"] = true;
    $.__views.__alloyId1852 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId2016"
    });
    $.__views.__alloyId2014.add($.__views.__alloyId2016);
    buy ? $.__views.__alloyId2016.addEventListener("click", buy) : __defers["$.__views.__alloyId2016!click!buy"] = true;
    $.__views.__alloyId2017 = Ti.UI.createView({
=======
        id: "__alloyId1517"
    });
    $.__views.__alloyId1515.add($.__views.__alloyId1517);
    buy ? $.__views.__alloyId1517.addEventListener("click", buy) : __defers["$.__views.__alloyId1517!click!buy"] = true;
    $.__views.__alloyId1518 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        backgroundColor: "#333333",
        height: "50",
        bottom: "0",
<<<<<<< HEAD
        id: "__alloyId1852"
=======
<<<<<<< HEAD
        id: "__alloyId2017"
    });
    $.__views.promoDetail.add($.__views.__alloyId2017);
    $.__views.__alloyId2018 = Ti.UI.createView({
        width: "3%",
        id: "__alloyId2018"
    });
    $.__views.__alloyId2017.add($.__views.__alloyId2018);
    $.__views.__alloyId2019 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#3E6AC3",
        id: "__alloyId2019"
    });
    $.__views.__alloyId2017.add($.__views.__alloyId2019);
    $.__views.__alloyId2020 = Ti.UI.createView({
        width: "2%",
        id: "__alloyId2020"
    });
    $.__views.__alloyId2017.add($.__views.__alloyId2020);
    $.__views.__alloyId2021 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#E04A32",
        id: "__alloyId2021"
    });
    $.__views.__alloyId2017.add($.__views.__alloyId2021);
    $.__views.__alloyId2022 = Ti.UI.createView({
        width: "2%",
        id: "__alloyId2022"
    });
    $.__views.__alloyId2017.add($.__views.__alloyId2022);
    $.__views.__alloyId2023 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#27ACEC",
        id: "__alloyId2023"
    });
    $.__views.__alloyId2017.add($.__views.__alloyId2023);
    $.__views.__alloyId2024 = Ti.UI.createView({
        width: "3%",
        id: "__alloyId2024"
    });
    $.__views.__alloyId2017.add($.__views.__alloyId2024);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2012!click!back"] && $.__views.__alloyId2012.addEventListener("click", back);
    __defers["$.__views.__alloyId2016!click!buy"] && $.__views.__alloyId2016.addEventListener("click", buy);
=======
        id: "__alloyId1518"
>>>>>>> origin/master
    });
    $.__views.promoDetail.add($.__views.__alloyId1852);
    $.__views.__alloyId1853 = Ti.UI.createView({
        width: "3%",
        id: "__alloyId1853"
    });
    $.__views.__alloyId1852.add($.__views.__alloyId1853);
    $.__views.__alloyId1854 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#3E6AC3",
        id: "__alloyId1854"
    });
    $.__views.__alloyId1852.add($.__views.__alloyId1854);
    $.__views.__alloyId1855 = Ti.UI.createView({
        width: "2%",
        id: "__alloyId1855"
    });
    $.__views.__alloyId1852.add($.__views.__alloyId1855);
    $.__views.__alloyId1856 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#E04A32",
        id: "__alloyId1856"
    });
    $.__views.__alloyId1852.add($.__views.__alloyId1856);
    $.__views.__alloyId1857 = Ti.UI.createView({
        width: "2%",
        id: "__alloyId1857"
    });
    $.__views.__alloyId1852.add($.__views.__alloyId1857);
    $.__views.__alloyId1858 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#27ACEC",
        id: "__alloyId1858"
    });
    $.__views.__alloyId1852.add($.__views.__alloyId1858);
    $.__views.__alloyId1859 = Ti.UI.createView({
        width: "3%",
        id: "__alloyId1859"
    });
    $.__views.__alloyId1852.add($.__views.__alloyId1859);
    exports.destroy = function() {};
    _.extend($, $.__views);
<<<<<<< HEAD
    __defers["$.__views.__alloyId1847!click!back"] && $.__views.__alloyId1847.addEventListener("click", back);
    __defers["$.__views.__alloyId1851!click!buy"] && $.__views.__alloyId1851.addEventListener("click", buy);
=======
    __defers["$.__views.__alloyId1513!click!back"] && $.__views.__alloyId1513.addEventListener("click", back);
    __defers["$.__views.__alloyId1517!click!buy"] && $.__views.__alloyId1517.addEventListener("click", buy);
>>>>>>> origin/master
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;