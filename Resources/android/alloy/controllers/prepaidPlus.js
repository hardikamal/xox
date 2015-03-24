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
        DRAWER.navigation("products", 1);
    }
    function subscribe() {
        console.log("subscribe");
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
    $.__views.__alloyId1890 = Alloy.createController("_header", {
        id: "__alloyId1890",
        __parentSymbol: $.__views.prepaidPlus
    });
    $.__views.__alloyId1890.setParent($.__views.prepaidPlus);
    $.__views.__alloyId1891 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId1891"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId1891);
    $.__views.__alloyId1892 = Ti.UI.createView({
        layout: "horizontal",
        left: "0",
        id: "__alloyId1892"
    });
    $.__views.__alloyId1891.add($.__views.__alloyId1892);
    $.__views.__alloyId1893 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "30%",
        id: "__alloyId1893"
    });
    $.__views.__alloyId1892.add($.__views.__alloyId1893);
    $.__views.__alloyId1894 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId1894"
    });
    $.__views.__alloyId1893.add($.__views.__alloyId1894);
    $.__views.__alloyId1895 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1895"
    });
    $.__views.__alloyId1892.add($.__views.__alloyId1895);
    $.__views.__alloyId1896 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1896"
    });
    $.__views.__alloyId1891.add($.__views.__alloyId1896);
    back ? $.__views.__alloyId1896.addEventListener("click", back) : __defers["$.__views.__alloyId1896!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.prepaidPlus.add($.__views.scrollView);
    $.__views.__alloyId1897 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1897"
    });
    $.__views.scrollView.add($.__views.__alloyId1897);
    $.__views.__alloyId1898 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1898"
    });
    $.__views.__alloyId1897.add($.__views.__alloyId1898);
    $.__views.__alloyId1899 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1899"
    });
    $.__views.__alloyId1898.add($.__views.__alloyId1899);
    $.__views.__alloyId1900 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1900"
    });
    $.__views.__alloyId1897.add($.__views.__alloyId1900);
    $.__views.__alloyId1901 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1901"
    });
    $.__views.__alloyId1900.add($.__views.__alloyId1901);
    $.__views.__alloyId1902 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1902"
    });
    $.__views.__alloyId1900.add($.__views.__alloyId1902);
    $.__views.__alloyId1903 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1903"
    });
    $.__views.__alloyId1897.add($.__views.__alloyId1903);
    $.__views.__alloyId1904 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1904"
    });
    $.__views.__alloyId1903.add($.__views.__alloyId1904);
    $.__views.__alloyId1905 = Ti.UI.createLabel({
        text: "15cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1905"
    });
    $.__views.__alloyId1903.add($.__views.__alloyId1905);
    $.__views.__alloyId1906 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1906"
    });
    $.__views.scrollView.add($.__views.__alloyId1906);
    $.__views.__alloyId1907 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1907"
    });
    $.__views.__alloyId1906.add($.__views.__alloyId1907);
    $.__views.__alloyId1908 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1908"
    });
    $.__views.__alloyId1907.add($.__views.__alloyId1908);
    $.__views.__alloyId1909 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1909"
    });
    $.__views.__alloyId1906.add($.__views.__alloyId1909);
    $.__views.__alloyId1910 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1910"
    });
    $.__views.__alloyId1909.add($.__views.__alloyId1910);
    $.__views.__alloyId1911 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1911"
    });
    $.__views.__alloyId1909.add($.__views.__alloyId1911);
    $.__views.__alloyId1912 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1912"
    });
    $.__views.__alloyId1906.add($.__views.__alloyId1912);
    $.__views.__alloyId1913 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1913"
    });
    $.__views.__alloyId1912.add($.__views.__alloyId1913);
    $.__views.__alloyId1914 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1914"
    });
    $.__views.__alloyId1912.add($.__views.__alloyId1914);
    $.__views.__alloyId1915 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1915"
    });
    $.__views.__alloyId1906.add($.__views.__alloyId1915);
    $.__views.__alloyId1916 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1916"
    });
    $.__views.__alloyId1915.add($.__views.__alloyId1916);
    $.__views.__alloyId1917 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1917"
    });
    $.__views.__alloyId1915.add($.__views.__alloyId1917);
    $.__views.__alloyId1918 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1918"
    });
    $.__views.__alloyId1906.add($.__views.__alloyId1918);
    $.__views.__alloyId1919 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1919"
    });
    $.__views.__alloyId1918.add($.__views.__alloyId1919);
    $.__views.__alloyId1920 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1920"
    });
    $.__views.__alloyId1918.add($.__views.__alloyId1920);
    $.__views.__alloyId1921 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1921"
    });
    $.__views.scrollView.add($.__views.__alloyId1921);
    $.__views.__alloyId1922 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1922"
    });
    $.__views.__alloyId1921.add($.__views.__alloyId1922);
    $.__views.__alloyId1923 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1923"
    });
    $.__views.__alloyId1922.add($.__views.__alloyId1923);
    $.__views.__alloyId1924 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1924"
    });
    $.__views.__alloyId1921.add($.__views.__alloyId1924);
    $.__views.__alloyId1925 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1925"
    });
    $.__views.__alloyId1924.add($.__views.__alloyId1925);
    $.__views.__alloyId1926 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1926"
    });
    $.__views.__alloyId1924.add($.__views.__alloyId1926);
    $.__views.__alloyId1927 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1927"
    });
    $.__views.__alloyId1921.add($.__views.__alloyId1927);
    $.__views.__alloyId1928 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1928"
    });
    $.__views.__alloyId1927.add($.__views.__alloyId1928);
    $.__views.__alloyId1929 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1929"
    });
    $.__views.__alloyId1927.add($.__views.__alloyId1929);
    $.__views.__alloyId1930 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1930"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId1930);
    subscribe ? $.__views.__alloyId1930.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1930!click!subscribe"] = true;
    $.__views.__alloyId1931 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1931"
    });
    $.__views.__alloyId1930.add($.__views.__alloyId1931);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 100 - .2 * Ti.Platform.displayCaps.platformHeight;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    __defers["$.__views.__alloyId1896!click!back"] && $.__views.__alloyId1896.addEventListener("click", back);
    __defers["$.__views.__alloyId1930!click!subscribe"] && $.__views.__alloyId1930.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;