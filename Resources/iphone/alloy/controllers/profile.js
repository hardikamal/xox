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
    function accountDetails() {
        DRAWER.navigation("accountDetails", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "profile";
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
    $.__views.profile = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "profile"
    });
    $.__views.profile && $.addTopLevelView($.__views.profile);
<<<<<<< HEAD
    $.__views.__alloyId1864 = Alloy.createController("_header", {
        id: "__alloyId1864",
        __parentSymbol: $.__views.profile
    });
    $.__views.__alloyId1864.setParent($.__views.profile);
    $.__views.__alloyId1865 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1865"
    });
    $.__views.profile.add($.__views.__alloyId1865);
    $.__views.__alloyId1866 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1866"
    });
    $.__views.__alloyId1865.add($.__views.__alloyId1866);
    $.__views.__alloyId1867 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2091 = Alloy.createController("_header", {
        id: "__alloyId2091",
        __parentSymbol: $.__views.profile
    });
    $.__views.__alloyId2091.setParent($.__views.profile);
    $.__views.__alloyId2092 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2092"
    });
    $.__views.profile.add($.__views.__alloyId2092);
    $.__views.__alloyId2093 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId2093"
    });
    $.__views.__alloyId2092.add($.__views.__alloyId2093);
    $.__views.__alloyId2094 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1864 = Alloy.createController("_header", {
        id: "__alloyId1864",
        __parentSymbol: $.__views.profile
    });
    $.__views.__alloyId1864.setParent($.__views.profile);
    $.__views.__alloyId1865 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1865"
    });
    $.__views.profile.add($.__views.__alloyId1865);
    $.__views.__alloyId1866 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1866"
    });
    $.__views.__alloyId1865.add($.__views.__alloyId1866);
    $.__views.__alloyId1867 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Account Details",
        backgroundColor: "transparent",
        height: "50",
        width: "45%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        color: "white",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2094"
    });
    $.__views.__alloyId2093.add($.__views.__alloyId2094);
    accountDetails ? $.__views.__alloyId2094.addEventListener("click", accountDetails) : __defers["$.__views.__alloyId2094!click!accountDetails"] = true;
    $.__views.__alloyId2095 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1867"
    });
    $.__views.__alloyId1866.add($.__views.__alloyId1867);
    accountDetails ? $.__views.__alloyId1867.addEventListener("click", accountDetails) : __defers["$.__views.__alloyId1867!click!accountDetails"] = true;
    $.__views.__alloyId1868 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "My Profile",
        backgroundColor: "#bf0404",
        height: "50",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: "45%",
        color: "white",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2095"
    });
    $.__views.__alloyId2093.add($.__views.__alloyId2095);
    $.__views.__alloyId2096 = Ti.UI.createImageView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1868"
    });
    $.__views.__alloyId1866.add($.__views.__alloyId1868);
    $.__views.__alloyId1869 = Ti.UI.createImageView({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "10%",
        height: "30",
        top: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId1869"
    });
    $.__views.__alloyId1866.add($.__views.__alloyId1869);
    back ? $.__views.__alloyId1869.addEventListener("click", back) : __defers["$.__views.__alloyId1869!click!back"] = true;
=======
<<<<<<< HEAD
        id: "__alloyId2096"
    });
    $.__views.__alloyId2093.add($.__views.__alloyId2096);
    back ? $.__views.__alloyId2096.addEventListener("click", back) : __defers["$.__views.__alloyId2096!click!back"] = true;
=======
        id: "__alloyId1869"
    });
    $.__views.__alloyId1866.add($.__views.__alloyId1869);
    back ? $.__views.__alloyId1869.addEventListener("click", back) : __defers["$.__views.__alloyId1869!click!back"] = true;
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F5F5F5"
    });
    $.__views.profile.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId1870 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId2097 = Ti.UI.createView({
=======
    $.__views.__alloyId1870 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1870"
    });
    $.__views.scrollView.add($.__views.__alloyId1870);
    $.__views.__alloyId1871 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1871"
    });
    $.__views.__alloyId1870.add($.__views.__alloyId1871);
    $.__views.__alloyId1872 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2097"
    });
    $.__views.scrollView.add($.__views.__alloyId2097);
    $.__views.__alloyId2098 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2098"
    });
    $.__views.__alloyId2097.add($.__views.__alloyId2098);
    $.__views.__alloyId2099 = Ti.UI.createLabel({
=======
        id: "__alloyId1870"
    });
    $.__views.scrollView.add($.__views.__alloyId1870);
    $.__views.__alloyId1871 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1871"
    });
    $.__views.__alloyId1870.add($.__views.__alloyId1871);
    $.__views.__alloyId1872 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Address",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1872"
    });
    $.__views.__alloyId1871.add($.__views.__alloyId1872);
    $.__views.__alloyId1873 = Ti.UI.createView({
        width: "40%",
        height: "100%",
=======
<<<<<<< HEAD
        id: "__alloyId2099"
    });
    $.__views.__alloyId2098.add($.__views.__alloyId2099);
    $.__views.__alloyId2100 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2100"
    });
    $.__views.__alloyId2097.add($.__views.__alloyId2100);
    $.__views.__alloyId2101 = Ti.UI.createLabel({
=======
        id: "__alloyId1872"
    });
    $.__views.__alloyId1871.add($.__views.__alloyId1872);
    $.__views.__alloyId1873 = Ti.UI.createView({
        width: "40%",
        height: "100%",
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1873"
    });
    $.__views.__alloyId1870.add($.__views.__alloyId1873);
    $.__views.__alloyId1874 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "No.8 Jalan Puchong,Selangor...",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1874"
    });
    $.__views.__alloyId1873.add($.__views.__alloyId1874);
    $.__views.__alloyId1875 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1875"
    });
    $.__views.__alloyId1870.add($.__views.__alloyId1875);
    $.__views.__alloyId1876 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2101"
    });
    $.__views.__alloyId2100.add($.__views.__alloyId2101);
    $.__views.__alloyId2102 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2102"
    });
    $.__views.__alloyId2097.add($.__views.__alloyId2102);
    $.__views.__alloyId2103 = Ti.UI.createLabel({
=======
        id: "__alloyId1874"
    });
    $.__views.__alloyId1873.add($.__views.__alloyId1874);
    $.__views.__alloyId1875 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1875"
    });
    $.__views.__alloyId1870.add($.__views.__alloyId1875);
    $.__views.__alloyId1876 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2103"
    });
    $.__views.__alloyId2102.add($.__views.__alloyId2103);
    $.__views.__alloyId2104 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1876"
    });
    $.__views.__alloyId1875.add($.__views.__alloyId1876);
    $.__views.__alloyId1877 = Ti.UI.createView({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1877"
    });
    $.__views.scrollView.add($.__views.__alloyId1877);
    $.__views.__alloyId1878 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1878"
    });
    $.__views.__alloyId1877.add($.__views.__alloyId1878);
    $.__views.__alloyId1879 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2104"
    });
    $.__views.scrollView.add($.__views.__alloyId2104);
    $.__views.__alloyId2105 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2105"
    });
    $.__views.__alloyId2104.add($.__views.__alloyId2105);
    $.__views.__alloyId2106 = Ti.UI.createLabel({
=======
        id: "__alloyId1877"
    });
    $.__views.scrollView.add($.__views.__alloyId1877);
    $.__views.__alloyId1878 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1878"
    });
    $.__views.__alloyId1877.add($.__views.__alloyId1878);
    $.__views.__alloyId1879 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "NRIC/Passport/Armed Force ID",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1879"
    });
    $.__views.__alloyId1878.add($.__views.__alloyId1879);
    $.__views.__alloyId1880 = Ti.UI.createView({
        width: "40%",
        height: "100%",
=======
<<<<<<< HEAD
        id: "__alloyId2106"
    });
    $.__views.__alloyId2105.add($.__views.__alloyId2106);
    $.__views.__alloyId2107 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2107"
    });
    $.__views.__alloyId2104.add($.__views.__alloyId2107);
    $.__views.__alloyId2108 = Ti.UI.createLabel({
=======
        id: "__alloyId1879"
    });
    $.__views.__alloyId1878.add($.__views.__alloyId1879);
    $.__views.__alloyId1880 = Ti.UI.createView({
        width: "40%",
        height: "100%",
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1880"
    });
    $.__views.__alloyId1877.add($.__views.__alloyId1880);
    $.__views.__alloyId1881 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "000000 00 0000",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1881"
    });
    $.__views.__alloyId1880.add($.__views.__alloyId1881);
    $.__views.__alloyId1882 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1882"
    });
    $.__views.__alloyId1877.add($.__views.__alloyId1882);
    $.__views.__alloyId1883 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2108"
    });
    $.__views.__alloyId2107.add($.__views.__alloyId2108);
    $.__views.__alloyId2109 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2109"
    });
    $.__views.__alloyId2104.add($.__views.__alloyId2109);
    $.__views.__alloyId2110 = Ti.UI.createLabel({
=======
        id: "__alloyId1881"
    });
    $.__views.__alloyId1880.add($.__views.__alloyId1881);
    $.__views.__alloyId1882 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1882"
    });
    $.__views.__alloyId1877.add($.__views.__alloyId1882);
    $.__views.__alloyId1883 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2110"
    });
    $.__views.__alloyId2109.add($.__views.__alloyId2110);
    $.__views.__alloyId2111 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1883"
    });
    $.__views.__alloyId1882.add($.__views.__alloyId1883);
    $.__views.__alloyId1884 = Ti.UI.createView({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1884"
    });
    $.__views.scrollView.add($.__views.__alloyId1884);
    $.__views.__alloyId1885 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1885"
    });
    $.__views.__alloyId1884.add($.__views.__alloyId1885);
    $.__views.__alloyId1886 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2111"
    });
    $.__views.scrollView.add($.__views.__alloyId2111);
    $.__views.__alloyId2112 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2112"
    });
    $.__views.__alloyId2111.add($.__views.__alloyId2112);
    $.__views.__alloyId2113 = Ti.UI.createLabel({
=======
        id: "__alloyId1884"
    });
    $.__views.scrollView.add($.__views.__alloyId1884);
    $.__views.__alloyId1885 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1885"
    });
    $.__views.__alloyId1884.add($.__views.__alloyId1885);
    $.__views.__alloyId1886 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Email Address",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1886"
    });
    $.__views.__alloyId1885.add($.__views.__alloyId1886);
    $.__views.__alloyId1887 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1887"
    });
    $.__views.__alloyId1884.add($.__views.__alloyId1887);
    $.__views.__alloyId1888 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2113"
    });
    $.__views.__alloyId2112.add($.__views.__alloyId2113);
    $.__views.__alloyId2114 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2114"
    });
    $.__views.__alloyId2111.add($.__views.__alloyId2114);
    $.__views.__alloyId2115 = Ti.UI.createLabel({
=======
        id: "__alloyId1886"
    });
    $.__views.__alloyId1885.add($.__views.__alloyId1886);
    $.__views.__alloyId1887 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1887"
    });
    $.__views.__alloyId1884.add($.__views.__alloyId1887);
    $.__views.__alloyId1888 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "sample@gmail.com",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1888"
    });
    $.__views.__alloyId1887.add($.__views.__alloyId1888);
    $.__views.__alloyId1889 = Ti.UI.createView({
        width: "20%",
        height: "100%",
=======
<<<<<<< HEAD
        id: "__alloyId2115"
    });
    $.__views.__alloyId2114.add($.__views.__alloyId2115);
    $.__views.__alloyId2116 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2116"
    });
    $.__views.__alloyId2111.add($.__views.__alloyId2116);
    $.__views.__alloyId2117 = Ti.UI.createLabel({
=======
        id: "__alloyId1888"
    });
    $.__views.__alloyId1887.add($.__views.__alloyId1888);
    $.__views.__alloyId1889 = Ti.UI.createView({
        width: "20%",
        height: "100%",
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1889"
    });
    $.__views.__alloyId1884.add($.__views.__alloyId1889);
    $.__views.__alloyId1890 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2117"
    });
    $.__views.__alloyId2116.add($.__views.__alloyId2117);
    $.__views.__alloyId2118 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1890"
    });
    $.__views.__alloyId1889.add($.__views.__alloyId1890);
    $.__views.__alloyId1891 = Ti.UI.createView({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1891"
    });
    $.__views.scrollView.add($.__views.__alloyId1891);
    $.__views.__alloyId1892 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1892"
    });
    $.__views.__alloyId1891.add($.__views.__alloyId1892);
    $.__views.__alloyId1893 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2118"
    });
    $.__views.scrollView.add($.__views.__alloyId2118);
    $.__views.__alloyId2119 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2119"
    });
    $.__views.__alloyId2118.add($.__views.__alloyId2119);
    $.__views.__alloyId2120 = Ti.UI.createLabel({
=======
        id: "__alloyId1891"
    });
    $.__views.scrollView.add($.__views.__alloyId1891);
    $.__views.__alloyId1892 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1892"
    });
    $.__views.__alloyId1891.add($.__views.__alloyId1892);
    $.__views.__alloyId1893 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Birthday",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1893"
    });
    $.__views.__alloyId1892.add($.__views.__alloyId1893);
    $.__views.__alloyId1894 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1894"
    });
    $.__views.__alloyId1891.add($.__views.__alloyId1894);
    $.__views.__alloyId1895 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2120"
    });
    $.__views.__alloyId2119.add($.__views.__alloyId2120);
    $.__views.__alloyId2121 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2121"
    });
    $.__views.__alloyId2118.add($.__views.__alloyId2121);
    $.__views.__alloyId2122 = Ti.UI.createLabel({
=======
        id: "__alloyId1893"
    });
    $.__views.__alloyId1892.add($.__views.__alloyId1893);
    $.__views.__alloyId1894 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1894"
    });
    $.__views.__alloyId1891.add($.__views.__alloyId1894);
    $.__views.__alloyId1895 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1895"
    });
    $.__views.__alloyId1894.add($.__views.__alloyId1895);
    $.__views.__alloyId1896 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1896"
    });
    $.__views.__alloyId1891.add($.__views.__alloyId1896);
    $.__views.__alloyId1897 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2122"
    });
    $.__views.__alloyId2121.add($.__views.__alloyId2122);
    $.__views.__alloyId2123 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2123"
    });
    $.__views.__alloyId2118.add($.__views.__alloyId2123);
    $.__views.__alloyId2124 = Ti.UI.createLabel({
=======
        id: "__alloyId1895"
    });
    $.__views.__alloyId1894.add($.__views.__alloyId1895);
    $.__views.__alloyId1896 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1896"
    });
    $.__views.__alloyId1891.add($.__views.__alloyId1896);
    $.__views.__alloyId1897 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1897"
    });
    $.__views.__alloyId1896.add($.__views.__alloyId1897);
    $.__views.__alloyId1898 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId2124"
    });
    $.__views.__alloyId2123.add($.__views.__alloyId2124);
    $.__views.__alloyId2125 = Ti.UI.createView({
=======
        id: "__alloyId1897"
    });
    $.__views.__alloyId1896.add($.__views.__alloyId1897);
    $.__views.__alloyId1898 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1898"
    });
    $.__views.scrollView.add($.__views.__alloyId1898);
    $.__views.__alloyId1899 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1899"
    });
    $.__views.__alloyId1898.add($.__views.__alloyId1899);
    $.__views.__alloyId1900 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2125"
    });
    $.__views.scrollView.add($.__views.__alloyId2125);
    $.__views.__alloyId2126 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2126"
    });
    $.__views.__alloyId2125.add($.__views.__alloyId2126);
    $.__views.__alloyId2127 = Ti.UI.createLabel({
=======
        id: "__alloyId1898"
    });
    $.__views.scrollView.add($.__views.__alloyId1898);
    $.__views.__alloyId1899 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1899"
    });
    $.__views.__alloyId1898.add($.__views.__alloyId1899);
    $.__views.__alloyId1900 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Gender",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1900"
    });
    $.__views.__alloyId1899.add($.__views.__alloyId1900);
    $.__views.__alloyId1901 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1901"
    });
    $.__views.__alloyId1898.add($.__views.__alloyId1901);
    $.__views.__alloyId1902 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2127"
    });
    $.__views.__alloyId2126.add($.__views.__alloyId2127);
    $.__views.__alloyId2128 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2128"
    });
    $.__views.__alloyId2125.add($.__views.__alloyId2128);
    $.__views.__alloyId2129 = Ti.UI.createLabel({
=======
        id: "__alloyId1900"
    });
    $.__views.__alloyId1899.add($.__views.__alloyId1900);
    $.__views.__alloyId1901 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1901"
    });
    $.__views.__alloyId1898.add($.__views.__alloyId1901);
    $.__views.__alloyId1902 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1902"
    });
    $.__views.__alloyId1901.add($.__views.__alloyId1902);
    $.__views.__alloyId1903 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1903"
    });
    $.__views.__alloyId1898.add($.__views.__alloyId1903);
    $.__views.__alloyId1904 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2129"
    });
    $.__views.__alloyId2128.add($.__views.__alloyId2129);
    $.__views.__alloyId2130 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2130"
    });
    $.__views.__alloyId2125.add($.__views.__alloyId2130);
    $.__views.__alloyId2131 = Ti.UI.createLabel({
=======
        id: "__alloyId1902"
    });
    $.__views.__alloyId1901.add($.__views.__alloyId1902);
    $.__views.__alloyId1903 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1903"
    });
    $.__views.__alloyId1898.add($.__views.__alloyId1903);
    $.__views.__alloyId1904 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2131"
    });
    $.__views.__alloyId2130.add($.__views.__alloyId2131);
    $.__views.__alloyId2132 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1904"
    });
    $.__views.__alloyId1903.add($.__views.__alloyId1904);
    $.__views.__alloyId1905 = Ti.UI.createView({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1905"
    });
    $.__views.scrollView.add($.__views.__alloyId1905);
    $.__views.__alloyId1906 = Ti.UI.createView({
        width: "40%",
        height: "100%",
=======
<<<<<<< HEAD
        id: "__alloyId2132"
    });
    $.__views.scrollView.add($.__views.__alloyId2132);
    $.__views.__alloyId2133 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2133"
    });
    $.__views.__alloyId2132.add($.__views.__alloyId2133);
    $.__views.__alloyId2134 = Ti.UI.createLabel({
=======
        id: "__alloyId1905"
    });
    $.__views.scrollView.add($.__views.__alloyId1905);
    $.__views.__alloyId1906 = Ti.UI.createView({
        width: "40%",
        height: "100%",
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1906"
    });
    $.__views.__alloyId1905.add($.__views.__alloyId1906);
    $.__views.__alloyId1907 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Proessional Group/Job",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1907"
    });
    $.__views.__alloyId1906.add($.__views.__alloyId1907);
    $.__views.__alloyId1908 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1908"
    });
    $.__views.__alloyId1905.add($.__views.__alloyId1908);
    $.__views.__alloyId1909 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2134"
    });
    $.__views.__alloyId2133.add($.__views.__alloyId2134);
    $.__views.__alloyId2135 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2135"
    });
    $.__views.__alloyId2132.add($.__views.__alloyId2135);
    $.__views.__alloyId2136 = Ti.UI.createLabel({
=======
        id: "__alloyId1907"
    });
    $.__views.__alloyId1906.add($.__views.__alloyId1907);
    $.__views.__alloyId1908 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1908"
    });
    $.__views.__alloyId1905.add($.__views.__alloyId1908);
    $.__views.__alloyId1909 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1909"
    });
    $.__views.__alloyId1908.add($.__views.__alloyId1909);
    $.__views.__alloyId1910 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1910"
    });
    $.__views.__alloyId1905.add($.__views.__alloyId1910);
    $.__views.__alloyId1911 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2136"
    });
    $.__views.__alloyId2135.add($.__views.__alloyId2136);
    $.__views.__alloyId2137 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2137"
    });
    $.__views.__alloyId2132.add($.__views.__alloyId2137);
    $.__views.__alloyId2138 = Ti.UI.createLabel({
=======
        id: "__alloyId1909"
    });
    $.__views.__alloyId1908.add($.__views.__alloyId1909);
    $.__views.__alloyId1910 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1910"
    });
    $.__views.__alloyId1905.add($.__views.__alloyId1910);
    $.__views.__alloyId1911 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1911"
    });
    $.__views.__alloyId1910.add($.__views.__alloyId1911);
    $.__views.__alloyId1912 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId2138"
    });
    $.__views.__alloyId2137.add($.__views.__alloyId2138);
    $.__views.__alloyId2139 = Ti.UI.createView({
=======
        id: "__alloyId1911"
    });
    $.__views.__alloyId1910.add($.__views.__alloyId1911);
    $.__views.__alloyId1912 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1912"
    });
    $.__views.scrollView.add($.__views.__alloyId1912);
    $.__views.__alloyId1913 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1913"
    });
    $.__views.__alloyId1912.add($.__views.__alloyId1913);
    $.__views.__alloyId1914 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2139"
    });
    $.__views.scrollView.add($.__views.__alloyId2139);
    $.__views.__alloyId2140 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2140"
    });
    $.__views.__alloyId2139.add($.__views.__alloyId2140);
    $.__views.__alloyId2141 = Ti.UI.createLabel({
=======
        id: "__alloyId1912"
    });
    $.__views.scrollView.add($.__views.__alloyId1912);
    $.__views.__alloyId1913 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1913"
    });
    $.__views.__alloyId1912.add($.__views.__alloyId1913);
    $.__views.__alloyId1914 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Income Group",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1914"
    });
    $.__views.__alloyId1913.add($.__views.__alloyId1914);
    $.__views.__alloyId1915 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1915"
    });
    $.__views.__alloyId1912.add($.__views.__alloyId1915);
    $.__views.__alloyId1916 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2141"
    });
    $.__views.__alloyId2140.add($.__views.__alloyId2141);
    $.__views.__alloyId2142 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2142"
    });
    $.__views.__alloyId2139.add($.__views.__alloyId2142);
    $.__views.__alloyId2143 = Ti.UI.createLabel({
=======
        id: "__alloyId1914"
    });
    $.__views.__alloyId1913.add($.__views.__alloyId1914);
    $.__views.__alloyId1915 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1915"
    });
    $.__views.__alloyId1912.add($.__views.__alloyId1915);
    $.__views.__alloyId1916 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2143"
    });
    $.__views.__alloyId2142.add($.__views.__alloyId2143);
    $.__views.__alloyId2144 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2144"
    });
    $.__views.__alloyId2139.add($.__views.__alloyId2144);
    $.__views.__alloyId2145 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1916"
    });
    $.__views.__alloyId1915.add($.__views.__alloyId1916);
    $.__views.__alloyId1917 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1917"
    });
    $.__views.__alloyId1912.add($.__views.__alloyId1917);
    $.__views.__alloyId1918 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2145"
    });
    $.__views.__alloyId2144.add($.__views.__alloyId2145);
    $.__views.__alloyId2146 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1918"
    });
    $.__views.__alloyId1917.add($.__views.__alloyId1918);
    $.__views.__alloyId1919 = Ti.UI.createView({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1919"
    });
    $.__views.scrollView.add($.__views.__alloyId1919);
    $.__views.__alloyId1920 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1920"
    });
    $.__views.__alloyId1919.add($.__views.__alloyId1920);
    $.__views.__alloyId1921 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2146"
    });
    $.__views.scrollView.add($.__views.__alloyId2146);
    $.__views.__alloyId2147 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2147"
    });
    $.__views.__alloyId2146.add($.__views.__alloyId2147);
    $.__views.__alloyId2148 = Ti.UI.createLabel({
=======
        id: "__alloyId1919"
    });
    $.__views.scrollView.add($.__views.__alloyId1919);
    $.__views.__alloyId1920 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1920"
    });
    $.__views.__alloyId1919.add($.__views.__alloyId1920);
    $.__views.__alloyId1921 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Interest",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1921"
    });
=======
<<<<<<< HEAD
        id: "__alloyId2148"
    });
    $.__views.__alloyId2147.add($.__views.__alloyId2148);
    $.__views.__alloyId2149 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2149"
    });
    $.__views.__alloyId2146.add($.__views.__alloyId2149);
    $.__views.__alloyId2150 = Ti.UI.createLabel({
=======
        id: "__alloyId1921"
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId1920.add($.__views.__alloyId1921);
    $.__views.__alloyId1922 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1922"
    });
    $.__views.__alloyId1919.add($.__views.__alloyId1922);
    $.__views.__alloyId1923 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1923"
    });
    $.__views.__alloyId1922.add($.__views.__alloyId1923);
    $.__views.__alloyId1924 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1924"
    });
    $.__views.__alloyId1919.add($.__views.__alloyId1924);
    $.__views.__alloyId1925 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2150"
    });
    $.__views.__alloyId2149.add($.__views.__alloyId2150);
    $.__views.__alloyId2151 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2151"
    });
    $.__views.__alloyId2146.add($.__views.__alloyId2151);
    $.__views.__alloyId2152 = Ti.UI.createLabel({
=======
        id: "__alloyId1923"
    });
    $.__views.__alloyId1922.add($.__views.__alloyId1923);
    $.__views.__alloyId1924 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1924"
    });
    $.__views.__alloyId1919.add($.__views.__alloyId1924);
    $.__views.__alloyId1925 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1925"
    });
    $.__views.__alloyId1924.add($.__views.__alloyId1925);
    $.__views.__alloyId1926 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId2152"
    });
    $.__views.__alloyId2151.add($.__views.__alloyId2152);
    $.__views.__alloyId2153 = Ti.UI.createView({
=======
        id: "__alloyId1925"
    });
    $.__views.__alloyId1924.add($.__views.__alloyId1925);
    $.__views.__alloyId1926 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2153"
    });
    $.__views.scrollView.add($.__views.__alloyId2153);
    $.__views.__alloyId2154 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2154"
    });
    $.__views.__alloyId2153.add($.__views.__alloyId2154);
    $.__views.__alloyId2155 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1926"
    });
    $.__views.scrollView.add($.__views.__alloyId1926);
    $.__views.__alloyId1927 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1927"
    });
    $.__views.__alloyId1926.add($.__views.__alloyId1927);
    $.__views.__alloyId1928 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Marital Status",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1928"
    });
    $.__views.__alloyId1927.add($.__views.__alloyId1928);
    $.__views.__alloyId1929 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1929"
    });
    $.__views.__alloyId1926.add($.__views.__alloyId1929);
    $.__views.__alloyId1930 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2155"
    });
    $.__views.__alloyId2154.add($.__views.__alloyId2155);
    $.__views.__alloyId2156 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2156"
    });
    $.__views.__alloyId2153.add($.__views.__alloyId2156);
    $.__views.__alloyId2157 = Ti.UI.createLabel({
=======
        id: "__alloyId1928"
    });
    $.__views.__alloyId1927.add($.__views.__alloyId1928);
    $.__views.__alloyId1929 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1929"
    });
    $.__views.__alloyId1926.add($.__views.__alloyId1929);
    $.__views.__alloyId1930 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1930"
    });
=======
<<<<<<< HEAD
        id: "__alloyId2157"
    });
    $.__views.__alloyId2156.add($.__views.__alloyId2157);
    $.__views.__alloyId2158 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2158"
    });
    $.__views.__alloyId2153.add($.__views.__alloyId2158);
    $.__views.__alloyId2159 = Ti.UI.createLabel({
=======
        id: "__alloyId1930"
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId1929.add($.__views.__alloyId1930);
    $.__views.__alloyId1931 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1931"
    });
    $.__views.__alloyId1926.add($.__views.__alloyId1931);
    $.__views.__alloyId1932 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1932"
    });
    $.__views.__alloyId1931.add($.__views.__alloyId1932);
    $.__views.__alloyId1933 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId2159"
    });
    $.__views.__alloyId2158.add($.__views.__alloyId2159);
    $.__views.__alloyId2160 = Ti.UI.createView({
=======
        id: "__alloyId1932"
    });
    $.__views.__alloyId1931.add($.__views.__alloyId1932);
    $.__views.__alloyId1933 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2160"
    });
    $.__views.scrollView.add($.__views.__alloyId2160);
    $.__views.__alloyId2161 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2161"
    });
    $.__views.__alloyId2160.add($.__views.__alloyId2161);
    $.__views.__alloyId2162 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1933"
    });
    $.__views.scrollView.add($.__views.__alloyId1933);
    $.__views.__alloyId1934 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1934"
    });
    $.__views.__alloyId1933.add($.__views.__alloyId1934);
    $.__views.__alloyId1935 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Race",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1935"
    });
    $.__views.__alloyId1934.add($.__views.__alloyId1935);
    $.__views.__alloyId1936 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1936"
    });
    $.__views.__alloyId1933.add($.__views.__alloyId1936);
    $.__views.__alloyId1937 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2162"
    });
    $.__views.__alloyId2161.add($.__views.__alloyId2162);
    $.__views.__alloyId2163 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2163"
    });
    $.__views.__alloyId2160.add($.__views.__alloyId2163);
    $.__views.__alloyId2164 = Ti.UI.createLabel({
=======
        id: "__alloyId1935"
    });
    $.__views.__alloyId1934.add($.__views.__alloyId1935);
    $.__views.__alloyId1936 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1936"
    });
    $.__views.__alloyId1933.add($.__views.__alloyId1936);
    $.__views.__alloyId1937 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1937"
    });
    $.__views.__alloyId1936.add($.__views.__alloyId1937);
    $.__views.__alloyId1938 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1938"
    });
    $.__views.__alloyId1933.add($.__views.__alloyId1938);
    $.__views.__alloyId1939 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2164"
    });
    $.__views.__alloyId2163.add($.__views.__alloyId2164);
    $.__views.__alloyId2165 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2165"
    });
    $.__views.__alloyId2160.add($.__views.__alloyId2165);
    $.__views.__alloyId2166 = Ti.UI.createLabel({
=======
        id: "__alloyId1937"
    });
    $.__views.__alloyId1936.add($.__views.__alloyId1937);
    $.__views.__alloyId1938 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1938"
    });
    $.__views.__alloyId1933.add($.__views.__alloyId1938);
    $.__views.__alloyId1939 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2166"
    });
    $.__views.__alloyId2165.add($.__views.__alloyId2166);
    $.__views.__alloyId2167 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1939"
    });
    $.__views.__alloyId1938.add($.__views.__alloyId1939);
    $.__views.__alloyId1940 = Ti.UI.createView({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1940"
    });
    $.__views.scrollView.add($.__views.__alloyId1940);
    $.__views.__alloyId1941 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1941"
    });
    $.__views.__alloyId1940.add($.__views.__alloyId1941);
    $.__views.__alloyId1942 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2167"
    });
    $.__views.scrollView.add($.__views.__alloyId2167);
    $.__views.__alloyId2168 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2168"
    });
    $.__views.__alloyId2167.add($.__views.__alloyId2168);
    $.__views.__alloyId2169 = Ti.UI.createLabel({
=======
        id: "__alloyId1940"
    });
    $.__views.scrollView.add($.__views.__alloyId1940);
    $.__views.__alloyId1941 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1941"
    });
    $.__views.__alloyId1940.add($.__views.__alloyId1941);
    $.__views.__alloyId1942 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Religion",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1942"
    });
    $.__views.__alloyId1941.add($.__views.__alloyId1942);
    $.__views.__alloyId1943 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1943"
    });
    $.__views.__alloyId1940.add($.__views.__alloyId1943);
    $.__views.__alloyId1944 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2169"
    });
    $.__views.__alloyId2168.add($.__views.__alloyId2169);
    $.__views.__alloyId2170 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2170"
    });
    $.__views.__alloyId2167.add($.__views.__alloyId2170);
    $.__views.__alloyId2171 = Ti.UI.createLabel({
=======
        id: "__alloyId1942"
    });
    $.__views.__alloyId1941.add($.__views.__alloyId1942);
    $.__views.__alloyId1943 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1943"
    });
    $.__views.__alloyId1940.add($.__views.__alloyId1943);
    $.__views.__alloyId1944 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1944"
    });
=======
<<<<<<< HEAD
        id: "__alloyId2171"
    });
    $.__views.__alloyId2170.add($.__views.__alloyId2171);
    $.__views.__alloyId2172 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2172"
    });
    $.__views.__alloyId2167.add($.__views.__alloyId2172);
    $.__views.__alloyId2173 = Ti.UI.createLabel({
=======
        id: "__alloyId1944"
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId1943.add($.__views.__alloyId1944);
    $.__views.__alloyId1945 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1945"
    });
    $.__views.__alloyId1940.add($.__views.__alloyId1945);
    $.__views.__alloyId1946 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1946"
    });
    $.__views.__alloyId1945.add($.__views.__alloyId1946);
    $.__views.__alloyId1947 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId2173"
    });
    $.__views.__alloyId2172.add($.__views.__alloyId2173);
    $.__views.__alloyId2174 = Ti.UI.createView({
=======
        id: "__alloyId1946"
    });
    $.__views.__alloyId1945.add($.__views.__alloyId1946);
    $.__views.__alloyId1947 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1947"
    });
    $.__views.scrollView.add($.__views.__alloyId1947);
    $.__views.__alloyId1948 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1948"
    });
    $.__views.__alloyId1947.add($.__views.__alloyId1948);
    $.__views.__alloyId1949 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2174"
    });
    $.__views.scrollView.add($.__views.__alloyId2174);
    $.__views.__alloyId2175 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2175"
    });
    $.__views.__alloyId2174.add($.__views.__alloyId2175);
    $.__views.__alloyId2176 = Ti.UI.createLabel({
=======
        id: "__alloyId1947"
    });
    $.__views.scrollView.add($.__views.__alloyId1947);
    $.__views.__alloyId1948 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1948"
    });
    $.__views.__alloyId1947.add($.__views.__alloyId1948);
    $.__views.__alloyId1949 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Change Password",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1949"
    });
    $.__views.__alloyId1948.add($.__views.__alloyId1949);
    $.__views.__alloyId1950 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1950"
    });
    $.__views.__alloyId1947.add($.__views.__alloyId1950);
    $.__views.__alloyId1951 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        id: "__alloyId1951"
    });
    $.__views.__alloyId1950.add($.__views.__alloyId1951);
    $.__views.__alloyId1952 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1952"
    });
    $.__views.__alloyId1947.add($.__views.__alloyId1952);
=======
<<<<<<< HEAD
        id: "__alloyId2176"
    });
    $.__views.__alloyId2175.add($.__views.__alloyId2176);
    $.__views.__alloyId2177 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2177"
    });
    $.__views.__alloyId2174.add($.__views.__alloyId2177);
    $.__views.__alloyId2178 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        id: "__alloyId2178"
    });
    $.__views.__alloyId2177.add($.__views.__alloyId2178);
    $.__views.__alloyId2179 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2179"
    });
    $.__views.__alloyId2174.add($.__views.__alloyId2179);
=======
        id: "__alloyId1949"
    });
    $.__views.__alloyId1948.add($.__views.__alloyId1949);
    $.__views.__alloyId1950 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1950"
    });
    $.__views.__alloyId1947.add($.__views.__alloyId1950);
    $.__views.__alloyId1951 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        id: "__alloyId1951"
    });
    $.__views.__alloyId1950.add($.__views.__alloyId1951);
    $.__views.__alloyId1952 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1952"
    });
    $.__views.__alloyId1947.add($.__views.__alloyId1952);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
=======
<<<<<<< HEAD
    $.__views.__alloyId2179.add($.__views.arrow);
    $.__views.__alloyId2180 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2180"
    });
    $.__views.profile.add($.__views.__alloyId2180);
    $.__views.__alloyId2181 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId1952.add($.__views.arrow);
    $.__views.__alloyId1953 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1953"
    });
    $.__views.profile.add($.__views.__alloyId1953);
    $.__views.__alloyId1954 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Submit",
        color: "white",
        height: "100%",
        width: "49.72%",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId1954"
    });
=======
<<<<<<< HEAD
        id: "__alloyId2181"
    });
    $.__views.__alloyId2180.add($.__views.__alloyId2181);
    $.__views.__alloyId2182 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId2182"
    });
    $.__views.__alloyId2180.add($.__views.__alloyId2182);
    $.__views.__alloyId2183 = Ti.UI.createLabel({
=======
        id: "__alloyId1954"
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId1953.add($.__views.__alloyId1954);
    $.__views.__alloyId1955 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId1955"
    });
    $.__views.__alloyId1953.add($.__views.__alloyId1955);
    $.__views.__alloyId1956 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Clear",
        color: "white",
        height: "100%",
        width: "49.72%",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId1956"
    });
    $.__views.__alloyId1953.add($.__views.__alloyId1956);
=======
<<<<<<< HEAD
        id: "__alloyId2183"
    });
    $.__views.__alloyId2180.add($.__views.__alloyId2183);
=======
        id: "__alloyId1956"
    });
    $.__views.__alloyId1953.add($.__views.__alloyId1956);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
<<<<<<< HEAD
    __defers["$.__views.__alloyId1867!click!accountDetails"] && $.__views.__alloyId1867.addEventListener("click", accountDetails);
    __defers["$.__views.__alloyId1869!click!back"] && $.__views.__alloyId1869.addEventListener("click", back);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId2094!click!accountDetails"] && $.__views.__alloyId2094.addEventListener("click", accountDetails);
    __defers["$.__views.__alloyId2096!click!back"] && $.__views.__alloyId2096.addEventListener("click", back);
=======
    __defers["$.__views.__alloyId1867!click!accountDetails"] && $.__views.__alloyId1867.addEventListener("click", accountDetails);
    __defers["$.__views.__alloyId1869!click!back"] && $.__views.__alloyId1869.addEventListener("click", back);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;