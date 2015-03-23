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
=======
    $.__views.__alloyId2069 = Alloy.createController("_header", {
        id: "__alloyId2069",
        __parentSymbol: $.__views.roamingCalls
    });
    $.__views.__alloyId2069.setParent($.__views.roamingCalls);
    $.__views.__alloyId2070 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId2070"
    });
    $.__views.roamingCalls.add($.__views.__alloyId2070);
    $.__views.__alloyId2071 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1888"
    });
    $.__views.__alloyId1887.add($.__views.__alloyId1888);
    $.__views.__alloyId1889 = Ti.UI.createImageView({
=======
        id: "__alloyId2071"
    });
    $.__views.__alloyId2070.add($.__views.__alloyId2071);
    $.__views.__alloyId2072 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
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
=======
        id: "__alloyId2072"
    });
    $.__views.__alloyId2070.add($.__views.__alloyId2072);
    back ? $.__views.__alloyId2072.addEventListener("click", back) : __defers["$.__views.__alloyId2072!click!back"] = true;
    $.__views.__alloyId2073 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId2073"
    });
    $.__views.roamingCalls.add($.__views.__alloyId2073);
    $.__views.__alloyId2074 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Roaming Calls",
        textAlign: "center",
        color: "black",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1891"
    });
    $.__views.__alloyId1890.add($.__views.__alloyId1891);
    var __alloyId1892 = [];
    $.__views.__alloyId1893 = Ti.UI.createTableViewSection({
        id: "__alloyId1893"
    });
    __alloyId1892.push($.__views.__alloyId1893);
    $.__views.__alloyId1894 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId2074"
    });
    $.__views.__alloyId2073.add($.__views.__alloyId2074);
    var __alloyId2075 = [];
    $.__views.__alloyId2076 = Ti.UI.createTableViewSection({
        id: "__alloyId2076"
    });
    __alloyId2075.push($.__views.__alloyId2076);
    $.__views.__alloyId2077 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
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
=======
        id: "__alloyId2077"
    });
    $.__views.__alloyId2076.add($.__views.__alloyId2077);
    $.__views.__alloyId2078 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2078"
    });
    $.__views.__alloyId2077.add($.__views.__alloyId2078);
    $.__views.__alloyId2079 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "01/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId2079"
    });
    $.__views.__alloyId2078.add($.__views.__alloyId2079);
    $.__views.__alloyId2080 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2080"
    });
    $.__views.__alloyId2077.add($.__views.__alloyId2080);
    $.__views.__alloyId2081 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId2081"
    });
    $.__views.__alloyId2080.add($.__views.__alloyId2081);
    $.__views.__alloyId2082 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2082"
    });
    $.__views.__alloyId2077.add($.__views.__alloyId2082);
    $.__views.__alloyId2083 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1900"
    });
    $.__views.__alloyId1899.add($.__views.__alloyId1900);
    $.__views.__alloyId1901 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId2083"
    });
    $.__views.__alloyId2082.add($.__views.__alloyId2083);
    $.__views.__alloyId2084 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
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
=======
        id: "__alloyId2084"
    });
    $.__views.__alloyId2076.add($.__views.__alloyId2084);
    $.__views.__alloyId2085 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2085"
    });
    $.__views.__alloyId2084.add($.__views.__alloyId2085);
    $.__views.__alloyId2086 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "02/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId2086"
    });
    $.__views.__alloyId2085.add($.__views.__alloyId2086);
    $.__views.__alloyId2087 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2087"
    });
    $.__views.__alloyId2084.add($.__views.__alloyId2087);
    $.__views.__alloyId2088 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId2088"
    });
    $.__views.__alloyId2087.add($.__views.__alloyId2088);
    $.__views.__alloyId2089 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2089"
    });
    $.__views.__alloyId2084.add($.__views.__alloyId2089);
    $.__views.__alloyId2090 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1907"
    });
    $.__views.__alloyId1906.add($.__views.__alloyId1907);
    $.__views.__alloyId1908 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId2090"
    });
    $.__views.__alloyId2089.add($.__views.__alloyId2090);
    $.__views.__alloyId2091 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
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
=======
        id: "__alloyId2091"
    });
    $.__views.__alloyId2076.add($.__views.__alloyId2091);
    $.__views.__alloyId2092 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2092"
    });
    $.__views.__alloyId2091.add($.__views.__alloyId2092);
    $.__views.__alloyId2093 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "03/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId2093"
    });
    $.__views.__alloyId2092.add($.__views.__alloyId2093);
    $.__views.__alloyId2094 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2094"
    });
    $.__views.__alloyId2091.add($.__views.__alloyId2094);
    $.__views.__alloyId2095 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId2095"
    });
    $.__views.__alloyId2094.add($.__views.__alloyId2095);
    $.__views.__alloyId2096 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2096"
    });
    $.__views.__alloyId2091.add($.__views.__alloyId2096);
    $.__views.__alloyId2097 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1914"
    });
    $.__views.__alloyId1913.add($.__views.__alloyId1914);
    $.__views.__alloyId1915 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId2097"
    });
    $.__views.__alloyId2096.add($.__views.__alloyId2097);
    $.__views.__alloyId2098 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
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
=======
        id: "__alloyId2098"
    });
    $.__views.__alloyId2076.add($.__views.__alloyId2098);
    $.__views.__alloyId2099 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2099"
    });
    $.__views.__alloyId2098.add($.__views.__alloyId2099);
    $.__views.__alloyId2100 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "04/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId2100"
    });
    $.__views.__alloyId2099.add($.__views.__alloyId2100);
    $.__views.__alloyId2101 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2101"
    });
    $.__views.__alloyId2098.add($.__views.__alloyId2101);
    $.__views.__alloyId2102 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId2102"
    });
    $.__views.__alloyId2101.add($.__views.__alloyId2102);
    $.__views.__alloyId2103 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2103"
    });
    $.__views.__alloyId2098.add($.__views.__alloyId2103);
    $.__views.__alloyId2104 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1921"
    });
    $.__views.__alloyId1920.add($.__views.__alloyId1921);
    $.__views.__alloyId1922 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId2104"
    });
    $.__views.__alloyId2103.add($.__views.__alloyId2104);
    $.__views.__alloyId2105 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
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
=======
        id: "__alloyId2105"
    });
    $.__views.__alloyId2076.add($.__views.__alloyId2105);
    $.__views.__alloyId2106 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2106"
    });
    $.__views.__alloyId2105.add($.__views.__alloyId2106);
    $.__views.__alloyId2107 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "05/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId2107"
    });
    $.__views.__alloyId2106.add($.__views.__alloyId2107);
    $.__views.__alloyId2108 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2108"
    });
    $.__views.__alloyId2105.add($.__views.__alloyId2108);
    $.__views.__alloyId2109 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId2109"
    });
    $.__views.__alloyId2108.add($.__views.__alloyId2109);
    $.__views.__alloyId2110 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2110"
    });
    $.__views.__alloyId2105.add($.__views.__alloyId2110);
    $.__views.__alloyId2111 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1928"
    });
    $.__views.__alloyId1927.add($.__views.__alloyId1928);
    $.__views.__alloyId1929 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId2111"
    });
    $.__views.__alloyId2110.add($.__views.__alloyId2111);
    $.__views.__alloyId2112 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
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
=======
        id: "__alloyId2112"
    });
    $.__views.__alloyId2076.add($.__views.__alloyId2112);
    $.__views.__alloyId2113 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2113"
    });
    $.__views.__alloyId2112.add($.__views.__alloyId2113);
    $.__views.__alloyId2114 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "06/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId2114"
    });
    $.__views.__alloyId2113.add($.__views.__alloyId2114);
    $.__views.__alloyId2115 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2115"
    });
    $.__views.__alloyId2112.add($.__views.__alloyId2115);
    $.__views.__alloyId2116 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId2116"
    });
    $.__views.__alloyId2115.add($.__views.__alloyId2116);
    $.__views.__alloyId2117 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2117"
    });
    $.__views.__alloyId2112.add($.__views.__alloyId2117);
    $.__views.__alloyId2118 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1935"
    });
    $.__views.__alloyId1934.add($.__views.__alloyId1935);
    $.__views.__alloyId1936 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId2118"
    });
    $.__views.__alloyId2117.add($.__views.__alloyId2118);
    $.__views.__alloyId2119 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
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
=======
        id: "__alloyId2119"
    });
    $.__views.__alloyId2076.add($.__views.__alloyId2119);
    $.__views.__alloyId2120 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2120"
    });
    $.__views.__alloyId2119.add($.__views.__alloyId2120);
    $.__views.__alloyId2121 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "07/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId2121"
    });
    $.__views.__alloyId2120.add($.__views.__alloyId2121);
    $.__views.__alloyId2122 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2122"
    });
    $.__views.__alloyId2119.add($.__views.__alloyId2122);
    $.__views.__alloyId2123 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId2123"
    });
    $.__views.__alloyId2122.add($.__views.__alloyId2123);
    $.__views.__alloyId2124 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2124"
    });
    $.__views.__alloyId2119.add($.__views.__alloyId2124);
    $.__views.__alloyId2125 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1942"
    });
    $.__views.__alloyId1941.add($.__views.__alloyId1942);
    $.__views.__alloyId1943 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId2125"
    });
    $.__views.__alloyId2124.add($.__views.__alloyId2125);
    $.__views.__alloyId2126 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
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
=======
        id: "__alloyId2126"
    });
    $.__views.__alloyId2076.add($.__views.__alloyId2126);
    $.__views.__alloyId2127 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2127"
    });
    $.__views.__alloyId2126.add($.__views.__alloyId2127);
    $.__views.__alloyId2128 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "08/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId2128"
    });
    $.__views.__alloyId2127.add($.__views.__alloyId2128);
    $.__views.__alloyId2129 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2129"
    });
    $.__views.__alloyId2126.add($.__views.__alloyId2129);
    $.__views.__alloyId2130 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId2130"
    });
    $.__views.__alloyId2129.add($.__views.__alloyId2130);
    $.__views.__alloyId2131 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2131"
    });
    $.__views.__alloyId2126.add($.__views.__alloyId2131);
    $.__views.__alloyId2132 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1949"
    });
    $.__views.__alloyId1948.add($.__views.__alloyId1949);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId1892,
=======
        id: "__alloyId2132"
    });
    $.__views.__alloyId2131.add($.__views.__alloyId2132);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId2075,
>>>>>>> origin/master
        id: "table",
        scrollable: "true"
    });
    $.__views.roamingCalls.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
<<<<<<< HEAD
    __defers["$.__views.__alloyId1889!click!back"] && $.__views.__alloyId1889.addEventListener("click", back);
=======
    __defers["$.__views.__alloyId2072!click!back"] && $.__views.__alloyId2072.addEventListener("click", back);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;