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
<<<<<<< HEAD
    $.__views.__alloyId2096 = Alloy.createController("_header", {
        id: "__alloyId2096",
        __parentSymbol: $.__views.roamingCalls
    });
    $.__views.__alloyId2096.setParent($.__views.roamingCalls);
    $.__views.__alloyId2097 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId2097"
    });
    $.__views.roamingCalls.add($.__views.__alloyId2097);
    $.__views.__alloyId2098 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1907 = Alloy.createController("_header", {
        id: "__alloyId1907",
        __parentSymbol: $.__views.roamingCalls
    });
    $.__views.__alloyId1907.setParent($.__views.roamingCalls);
    $.__views.__alloyId1908 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1908"
    });
    $.__views.roamingCalls.add($.__views.__alloyId1908);
    $.__views.__alloyId1909 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2098"
    });
    $.__views.__alloyId2097.add($.__views.__alloyId2098);
    $.__views.__alloyId2099 = Ti.UI.createImageView({
=======
        id: "__alloyId1909"
    });
    $.__views.__alloyId1908.add($.__views.__alloyId1909);
    $.__views.__alloyId1910 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId2099"
    });
    $.__views.__alloyId2097.add($.__views.__alloyId2099);
    back ? $.__views.__alloyId2099.addEventListener("click", back) : __defers["$.__views.__alloyId2099!click!back"] = true;
    $.__views.__alloyId2100 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId2100"
    });
    $.__views.roamingCalls.add($.__views.__alloyId2100);
    $.__views.__alloyId2101 = Ti.UI.createLabel({
=======
        id: "__alloyId1910"
    });
    $.__views.__alloyId1908.add($.__views.__alloyId1910);
    back ? $.__views.__alloyId1910.addEventListener("click", back) : __defers["$.__views.__alloyId1910!click!back"] = true;
    $.__views.__alloyId1911 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1911"
    });
    $.__views.roamingCalls.add($.__views.__alloyId1911);
    $.__views.__alloyId1912 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Roaming Calls",
        textAlign: "center",
        color: "black",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2101"
    });
    $.__views.__alloyId2100.add($.__views.__alloyId2101);
    var __alloyId2102 = [];
    $.__views.__alloyId2103 = Ti.UI.createTableViewSection({
        id: "__alloyId2103"
    });
    __alloyId2102.push($.__views.__alloyId2103);
    $.__views.__alloyId2104 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId1912"
    });
    $.__views.__alloyId1911.add($.__views.__alloyId1912);
    var __alloyId1913 = [];
    $.__views.__alloyId1914 = Ti.UI.createTableViewSection({
        id: "__alloyId1914"
    });
    __alloyId1913.push($.__views.__alloyId1914);
    $.__views.__alloyId1915 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
        id: "__alloyId2104"
    });
    $.__views.__alloyId2103.add($.__views.__alloyId2104);
    $.__views.__alloyId2105 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2105"
    });
    $.__views.__alloyId2104.add($.__views.__alloyId2105);
    $.__views.__alloyId2106 = Ti.UI.createLabel({
=======
        id: "__alloyId1915"
    });
    $.__views.__alloyId1914.add($.__views.__alloyId1915);
    $.__views.__alloyId1916 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1916"
    });
    $.__views.__alloyId1915.add($.__views.__alloyId1916);
    $.__views.__alloyId1917 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "01/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2106"
    });
    $.__views.__alloyId2105.add($.__views.__alloyId2106);
    $.__views.__alloyId2107 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2107"
    });
    $.__views.__alloyId2104.add($.__views.__alloyId2107);
    $.__views.__alloyId2108 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2108"
    });
    $.__views.__alloyId2107.add($.__views.__alloyId2108);
    $.__views.__alloyId2109 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2109"
    });
    $.__views.__alloyId2104.add($.__views.__alloyId2109);
    $.__views.__alloyId2110 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2110"
    });
    $.__views.__alloyId2109.add($.__views.__alloyId2110);
    $.__views.__alloyId2111 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId1921"
    });
    $.__views.__alloyId1920.add($.__views.__alloyId1921);
    $.__views.__alloyId1922 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
        id: "__alloyId2111"
    });
    $.__views.__alloyId2103.add($.__views.__alloyId2111);
    $.__views.__alloyId2112 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2112"
    });
    $.__views.__alloyId2111.add($.__views.__alloyId2112);
    $.__views.__alloyId2113 = Ti.UI.createLabel({
=======
        id: "__alloyId1922"
    });
    $.__views.__alloyId1914.add($.__views.__alloyId1922);
    $.__views.__alloyId1923 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1923"
    });
    $.__views.__alloyId1922.add($.__views.__alloyId1923);
    $.__views.__alloyId1924 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "02/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2113"
    });
    $.__views.__alloyId2112.add($.__views.__alloyId2113);
    $.__views.__alloyId2114 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2114"
    });
    $.__views.__alloyId2111.add($.__views.__alloyId2114);
    $.__views.__alloyId2115 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2115"
    });
    $.__views.__alloyId2114.add($.__views.__alloyId2115);
    $.__views.__alloyId2116 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2116"
    });
    $.__views.__alloyId2111.add($.__views.__alloyId2116);
    $.__views.__alloyId2117 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2117"
    });
    $.__views.__alloyId2116.add($.__views.__alloyId2117);
    $.__views.__alloyId2118 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId1928"
    });
    $.__views.__alloyId1927.add($.__views.__alloyId1928);
    $.__views.__alloyId1929 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
        id: "__alloyId2118"
    });
    $.__views.__alloyId2103.add($.__views.__alloyId2118);
    $.__views.__alloyId2119 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2119"
    });
    $.__views.__alloyId2118.add($.__views.__alloyId2119);
    $.__views.__alloyId2120 = Ti.UI.createLabel({
=======
        id: "__alloyId1929"
    });
    $.__views.__alloyId1914.add($.__views.__alloyId1929);
    $.__views.__alloyId1930 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1930"
    });
    $.__views.__alloyId1929.add($.__views.__alloyId1930);
    $.__views.__alloyId1931 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "03/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2120"
    });
    $.__views.__alloyId2119.add($.__views.__alloyId2120);
    $.__views.__alloyId2121 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2121"
    });
    $.__views.__alloyId2118.add($.__views.__alloyId2121);
    $.__views.__alloyId2122 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2122"
    });
    $.__views.__alloyId2121.add($.__views.__alloyId2122);
    $.__views.__alloyId2123 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2123"
    });
    $.__views.__alloyId2118.add($.__views.__alloyId2123);
    $.__views.__alloyId2124 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2124"
    });
    $.__views.__alloyId2123.add($.__views.__alloyId2124);
    $.__views.__alloyId2125 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId1935"
    });
    $.__views.__alloyId1934.add($.__views.__alloyId1935);
    $.__views.__alloyId1936 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
        id: "__alloyId2125"
    });
    $.__views.__alloyId2103.add($.__views.__alloyId2125);
    $.__views.__alloyId2126 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2126"
    });
    $.__views.__alloyId2125.add($.__views.__alloyId2126);
    $.__views.__alloyId2127 = Ti.UI.createLabel({
=======
        id: "__alloyId1936"
    });
    $.__views.__alloyId1914.add($.__views.__alloyId1936);
    $.__views.__alloyId1937 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1937"
    });
    $.__views.__alloyId1936.add($.__views.__alloyId1937);
    $.__views.__alloyId1938 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "04/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2127"
    });
    $.__views.__alloyId2126.add($.__views.__alloyId2127);
    $.__views.__alloyId2128 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2128"
    });
    $.__views.__alloyId2125.add($.__views.__alloyId2128);
    $.__views.__alloyId2129 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2129"
    });
    $.__views.__alloyId2128.add($.__views.__alloyId2129);
    $.__views.__alloyId2130 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2130"
    });
    $.__views.__alloyId2125.add($.__views.__alloyId2130);
    $.__views.__alloyId2131 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2131"
    });
    $.__views.__alloyId2130.add($.__views.__alloyId2131);
    $.__views.__alloyId2132 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId1942"
    });
    $.__views.__alloyId1941.add($.__views.__alloyId1942);
    $.__views.__alloyId1943 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
        id: "__alloyId2132"
    });
    $.__views.__alloyId2103.add($.__views.__alloyId2132);
    $.__views.__alloyId2133 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2133"
    });
    $.__views.__alloyId2132.add($.__views.__alloyId2133);
    $.__views.__alloyId2134 = Ti.UI.createLabel({
=======
        id: "__alloyId1943"
    });
    $.__views.__alloyId1914.add($.__views.__alloyId1943);
    $.__views.__alloyId1944 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1944"
    });
    $.__views.__alloyId1943.add($.__views.__alloyId1944);
    $.__views.__alloyId1945 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "05/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2134"
    });
    $.__views.__alloyId2133.add($.__views.__alloyId2134);
    $.__views.__alloyId2135 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2135"
    });
    $.__views.__alloyId2132.add($.__views.__alloyId2135);
    $.__views.__alloyId2136 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2136"
    });
    $.__views.__alloyId2135.add($.__views.__alloyId2136);
    $.__views.__alloyId2137 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2137"
    });
    $.__views.__alloyId2132.add($.__views.__alloyId2137);
    $.__views.__alloyId2138 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2138"
    });
    $.__views.__alloyId2137.add($.__views.__alloyId2138);
    $.__views.__alloyId2139 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId1949"
    });
    $.__views.__alloyId1948.add($.__views.__alloyId1949);
    $.__views.__alloyId1950 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
        id: "__alloyId2139"
    });
    $.__views.__alloyId2103.add($.__views.__alloyId2139);
    $.__views.__alloyId2140 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2140"
    });
    $.__views.__alloyId2139.add($.__views.__alloyId2140);
    $.__views.__alloyId2141 = Ti.UI.createLabel({
=======
        id: "__alloyId1950"
    });
    $.__views.__alloyId1914.add($.__views.__alloyId1950);
    $.__views.__alloyId1951 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1951"
    });
    $.__views.__alloyId1950.add($.__views.__alloyId1951);
    $.__views.__alloyId1952 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "06/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2141"
    });
    $.__views.__alloyId2140.add($.__views.__alloyId2141);
    $.__views.__alloyId2142 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2142"
    });
    $.__views.__alloyId2139.add($.__views.__alloyId2142);
    $.__views.__alloyId2143 = Ti.UI.createLabel({
=======
        id: "__alloyId1952"
    });
    $.__views.__alloyId1951.add($.__views.__alloyId1952);
    $.__views.__alloyId1953 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId1953"
    });
    $.__views.__alloyId1950.add($.__views.__alloyId1953);
    $.__views.__alloyId1954 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2143"
    });
    $.__views.__alloyId2142.add($.__views.__alloyId2143);
    $.__views.__alloyId2144 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2144"
    });
    $.__views.__alloyId2139.add($.__views.__alloyId2144);
    $.__views.__alloyId2145 = Ti.UI.createLabel({
=======
        id: "__alloyId1954"
    });
    $.__views.__alloyId1953.add($.__views.__alloyId1954);
    $.__views.__alloyId1955 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1955"
    });
    $.__views.__alloyId1950.add($.__views.__alloyId1955);
    $.__views.__alloyId1956 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2145"
    });
    $.__views.__alloyId2144.add($.__views.__alloyId2145);
    $.__views.__alloyId2146 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId1956"
    });
    $.__views.__alloyId1955.add($.__views.__alloyId1956);
    $.__views.__alloyId1957 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
        id: "__alloyId2146"
    });
    $.__views.__alloyId2103.add($.__views.__alloyId2146);
    $.__views.__alloyId2147 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2147"
    });
    $.__views.__alloyId2146.add($.__views.__alloyId2147);
    $.__views.__alloyId2148 = Ti.UI.createLabel({
=======
        id: "__alloyId1957"
    });
    $.__views.__alloyId1914.add($.__views.__alloyId1957);
    $.__views.__alloyId1958 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1958"
    });
    $.__views.__alloyId1957.add($.__views.__alloyId1958);
    $.__views.__alloyId1959 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "07/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2148"
    });
    $.__views.__alloyId2147.add($.__views.__alloyId2148);
    $.__views.__alloyId2149 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2149"
    });
    $.__views.__alloyId2146.add($.__views.__alloyId2149);
    $.__views.__alloyId2150 = Ti.UI.createLabel({
=======
        id: "__alloyId1959"
    });
    $.__views.__alloyId1958.add($.__views.__alloyId1959);
    $.__views.__alloyId1960 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId1960"
    });
    $.__views.__alloyId1957.add($.__views.__alloyId1960);
    $.__views.__alloyId1961 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2150"
    });
    $.__views.__alloyId2149.add($.__views.__alloyId2150);
    $.__views.__alloyId2151 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2151"
    });
    $.__views.__alloyId2146.add($.__views.__alloyId2151);
    $.__views.__alloyId2152 = Ti.UI.createLabel({
=======
        id: "__alloyId1961"
    });
    $.__views.__alloyId1960.add($.__views.__alloyId1961);
    $.__views.__alloyId1962 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1962"
    });
    $.__views.__alloyId1957.add($.__views.__alloyId1962);
    $.__views.__alloyId1963 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2152"
    });
    $.__views.__alloyId2151.add($.__views.__alloyId2152);
    $.__views.__alloyId2153 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId1963"
    });
    $.__views.__alloyId1962.add($.__views.__alloyId1963);
    $.__views.__alloyId1964 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
        id: "__alloyId2153"
    });
    $.__views.__alloyId2103.add($.__views.__alloyId2153);
    $.__views.__alloyId2154 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2154"
    });
    $.__views.__alloyId2153.add($.__views.__alloyId2154);
    $.__views.__alloyId2155 = Ti.UI.createLabel({
=======
        id: "__alloyId1964"
    });
    $.__views.__alloyId1914.add($.__views.__alloyId1964);
    $.__views.__alloyId1965 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1965"
    });
    $.__views.__alloyId1964.add($.__views.__alloyId1965);
    $.__views.__alloyId1966 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "08/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2155"
    });
    $.__views.__alloyId2154.add($.__views.__alloyId2155);
    $.__views.__alloyId2156 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2156"
    });
    $.__views.__alloyId2153.add($.__views.__alloyId2156);
    $.__views.__alloyId2157 = Ti.UI.createLabel({
=======
        id: "__alloyId1966"
    });
    $.__views.__alloyId1965.add($.__views.__alloyId1966);
    $.__views.__alloyId1967 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId1967"
    });
    $.__views.__alloyId1964.add($.__views.__alloyId1967);
    $.__views.__alloyId1968 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2157"
    });
    $.__views.__alloyId2156.add($.__views.__alloyId2157);
    $.__views.__alloyId2158 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2158"
    });
    $.__views.__alloyId2153.add($.__views.__alloyId2158);
    $.__views.__alloyId2159 = Ti.UI.createLabel({
=======
        id: "__alloyId1968"
    });
    $.__views.__alloyId1967.add($.__views.__alloyId1968);
    $.__views.__alloyId1969 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId1969"
    });
    $.__views.__alloyId1964.add($.__views.__alloyId1969);
    $.__views.__alloyId1970 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2159"
    });
    $.__views.__alloyId2158.add($.__views.__alloyId2159);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId2102,
=======
        id: "__alloyId1970"
    });
    $.__views.__alloyId1969.add($.__views.__alloyId1970);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId1913,
>>>>>>> origin/master
        id: "table",
        scrollable: "true"
    });
    $.__views.roamingCalls.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
<<<<<<< HEAD
    __defers["$.__views.__alloyId2099!click!back"] && $.__views.__alloyId2099.addEventListener("click", back);
=======
    __defers["$.__views.__alloyId1910!click!back"] && $.__views.__alloyId1910.addEventListener("click", back);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;