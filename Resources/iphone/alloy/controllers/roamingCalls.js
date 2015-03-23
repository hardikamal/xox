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
        "prepaid" == Alloy.Globals.userPlan ? DRAWER.navigation("prepaidStatement", 1) : DRAWER.navigation("postpaidStatement", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "roamingCalls";
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
    $.__views.roamingCalls = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "roamingCalls"
    });
    $.__views.roamingCalls && $.addTopLevelView($.__views.roamingCalls);
    $.__views.__alloyId1886 = Alloy.createController("_header", {
        id: "__alloyId1886",
        __parentSymbol: $.__views.roamingCalls
    });
    $.__views.__alloyId1886.setParent($.__views.roamingCalls);
    $.__views.__alloyId1887 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1887"
    });
    $.__views.roamingCalls.add($.__views.__alloyId1887);
    $.__views.__alloyId1888 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1888"
    });
    $.__views.__alloyId1887.add($.__views.__alloyId1888);
    $.__views.__alloyId1889 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1889"
    });
    $.__views.__alloyId1887.add($.__views.__alloyId1889);
    back ? $.__views.__alloyId1889.addEventListener("click", back) : __defers["$.__views.__alloyId1889!click!back"] = true;
    $.__views.__alloyId1890 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1890"
    });
    $.__views.roamingCalls.add($.__views.__alloyId1890);
    $.__views.__alloyId1891 = Ti.UI.createLabel({
        text: "Roaming Calls",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId1891"
    });
    $.__views.__alloyId1890.add($.__views.__alloyId1891);
    var __alloyId1892 = [];
    $.__views.__alloyId1893 = Ti.UI.createTableViewSection({
        id: "__alloyId1893"
    });
    __alloyId1892.push($.__views.__alloyId1893);
    $.__views.__alloyId1894 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId1894"
    });
    $.__views.__alloyId1893.add($.__views.__alloyId1894);
    $.__views.__alloyId1895 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1895"
    });
    $.__views.__alloyId1894.add($.__views.__alloyId1895);
    $.__views.__alloyId1896 = Ti.UI.createLabel({
        text: "01/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1896"
    });
    $.__views.__alloyId1895.add($.__views.__alloyId1896);
    $.__views.__alloyId1897 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId1897"
    });
    $.__views.__alloyId1894.add($.__views.__alloyId1897);
    $.__views.__alloyId1898 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1898"
    });
    $.__views.__alloyId1897.add($.__views.__alloyId1898);
    $.__views.__alloyId1899 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1899"
    });
    $.__views.__alloyId1894.add($.__views.__alloyId1899);
    $.__views.__alloyId1900 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1900"
    });
    $.__views.__alloyId1899.add($.__views.__alloyId1900);
    $.__views.__alloyId1901 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId1901"
    });
    $.__views.__alloyId1893.add($.__views.__alloyId1901);
    $.__views.__alloyId1902 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1902"
    });
    $.__views.__alloyId1901.add($.__views.__alloyId1902);
    $.__views.__alloyId1903 = Ti.UI.createLabel({
        text: "02/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1903"
    });
    $.__views.__alloyId1902.add($.__views.__alloyId1903);
    $.__views.__alloyId1904 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId1904"
    });
    $.__views.__alloyId1901.add($.__views.__alloyId1904);
    $.__views.__alloyId1905 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1905"
    });
    $.__views.__alloyId1904.add($.__views.__alloyId1905);
    $.__views.__alloyId1906 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1906"
    });
    $.__views.__alloyId1901.add($.__views.__alloyId1906);
    $.__views.__alloyId1907 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1907"
    });
    $.__views.__alloyId1906.add($.__views.__alloyId1907);
    $.__views.__alloyId1908 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId1908"
    });
    $.__views.__alloyId1893.add($.__views.__alloyId1908);
    $.__views.__alloyId1909 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1909"
    });
    $.__views.__alloyId1908.add($.__views.__alloyId1909);
    $.__views.__alloyId1910 = Ti.UI.createLabel({
        text: "03/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1910"
    });
    $.__views.__alloyId1909.add($.__views.__alloyId1910);
    $.__views.__alloyId1911 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId1911"
    });
    $.__views.__alloyId1908.add($.__views.__alloyId1911);
    $.__views.__alloyId1912 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1912"
    });
    $.__views.__alloyId1911.add($.__views.__alloyId1912);
    $.__views.__alloyId1913 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1913"
    });
    $.__views.__alloyId1908.add($.__views.__alloyId1913);
    $.__views.__alloyId1914 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1914"
    });
    $.__views.__alloyId1913.add($.__views.__alloyId1914);
    $.__views.__alloyId1915 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId1915"
    });
    $.__views.__alloyId1893.add($.__views.__alloyId1915);
    $.__views.__alloyId1916 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1916"
    });
    $.__views.__alloyId1915.add($.__views.__alloyId1916);
    $.__views.__alloyId1917 = Ti.UI.createLabel({
        text: "04/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1917"
    });
    $.__views.__alloyId1916.add($.__views.__alloyId1917);
    $.__views.__alloyId1918 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId1918"
    });
    $.__views.__alloyId1915.add($.__views.__alloyId1918);
    $.__views.__alloyId1919 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1919"
    });
    $.__views.__alloyId1918.add($.__views.__alloyId1919);
    $.__views.__alloyId1920 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1920"
    });
    $.__views.__alloyId1915.add($.__views.__alloyId1920);
    $.__views.__alloyId1921 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1921"
    });
    $.__views.__alloyId1920.add($.__views.__alloyId1921);
    $.__views.__alloyId1922 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId1922"
    });
    $.__views.__alloyId1893.add($.__views.__alloyId1922);
    $.__views.__alloyId1923 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1923"
    });
    $.__views.__alloyId1922.add($.__views.__alloyId1923);
    $.__views.__alloyId1924 = Ti.UI.createLabel({
        text: "05/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1924"
    });
    $.__views.__alloyId1923.add($.__views.__alloyId1924);
    $.__views.__alloyId1925 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId1925"
    });
    $.__views.__alloyId1922.add($.__views.__alloyId1925);
    $.__views.__alloyId1926 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1926"
    });
    $.__views.__alloyId1925.add($.__views.__alloyId1926);
    $.__views.__alloyId1927 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1927"
    });
    $.__views.__alloyId1922.add($.__views.__alloyId1927);
    $.__views.__alloyId1928 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1928"
    });
    $.__views.__alloyId1927.add($.__views.__alloyId1928);
    $.__views.__alloyId1929 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId1929"
    });
    $.__views.__alloyId1893.add($.__views.__alloyId1929);
    $.__views.__alloyId1930 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1930"
    });
    $.__views.__alloyId1929.add($.__views.__alloyId1930);
    $.__views.__alloyId1931 = Ti.UI.createLabel({
        text: "06/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1931"
    });
    $.__views.__alloyId1930.add($.__views.__alloyId1931);
    $.__views.__alloyId1932 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId1932"
    });
    $.__views.__alloyId1929.add($.__views.__alloyId1932);
    $.__views.__alloyId1933 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1933"
    });
    $.__views.__alloyId1932.add($.__views.__alloyId1933);
    $.__views.__alloyId1934 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1934"
    });
    $.__views.__alloyId1929.add($.__views.__alloyId1934);
    $.__views.__alloyId1935 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1935"
    });
    $.__views.__alloyId1934.add($.__views.__alloyId1935);
    $.__views.__alloyId1936 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId1936"
    });
    $.__views.__alloyId1893.add($.__views.__alloyId1936);
    $.__views.__alloyId1937 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1937"
    });
    $.__views.__alloyId1936.add($.__views.__alloyId1937);
    $.__views.__alloyId1938 = Ti.UI.createLabel({
        text: "07/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1938"
    });
    $.__views.__alloyId1937.add($.__views.__alloyId1938);
    $.__views.__alloyId1939 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId1939"
    });
    $.__views.__alloyId1936.add($.__views.__alloyId1939);
    $.__views.__alloyId1940 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1940"
    });
    $.__views.__alloyId1939.add($.__views.__alloyId1940);
    $.__views.__alloyId1941 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1941"
    });
    $.__views.__alloyId1936.add($.__views.__alloyId1941);
    $.__views.__alloyId1942 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1942"
    });
    $.__views.__alloyId1941.add($.__views.__alloyId1942);
    $.__views.__alloyId1943 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId1943"
    });
    $.__views.__alloyId1893.add($.__views.__alloyId1943);
    $.__views.__alloyId1944 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1944"
    });
    $.__views.__alloyId1943.add($.__views.__alloyId1944);
    $.__views.__alloyId1945 = Ti.UI.createLabel({
        text: "08/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1945"
    });
    $.__views.__alloyId1944.add($.__views.__alloyId1945);
    $.__views.__alloyId1946 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId1946"
    });
    $.__views.__alloyId1943.add($.__views.__alloyId1946);
    $.__views.__alloyId1947 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1947"
    });
    $.__views.__alloyId1946.add($.__views.__alloyId1947);
    $.__views.__alloyId1948 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1948"
    });
    $.__views.__alloyId1943.add($.__views.__alloyId1948);
    $.__views.__alloyId1949 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1949"
    });
    $.__views.__alloyId1948.add($.__views.__alloyId1949);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId1892,
        id: "table",
        scrollable: "true"
    });
    $.__views.roamingCalls.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1889!click!back"] && $.__views.__alloyId1889.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;