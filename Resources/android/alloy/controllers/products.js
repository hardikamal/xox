function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function prepaidPlus() {
<<<<<<< Updated upstream
        DRAWER.navigation("prepaidPlus", 1);
    }
    function prepaid() {
        DRAWER.navigation("prepaid", 1);
    }
    function penang() {
        DRAWER.navigation("penang", 1);
    }
    function mobileInternet() {
        DRAWER.navigation("mobileInternet", 1);
    }
    function idd() {
        DRAWER.navigation("idd", 1);
    }
<<<<<<< HEAD
    function prepaid() {
        DRAWER.navigation("prepaid", 2);
    }
    function penang() {
        DRAWER.navigation("penang", 2);
    }
    function mobileInternet() {
        DRAWER.navigation("mobileInternet", 2);
    }
    function idd() {
        DRAWER.navigation("idd", 2);
=======
        DRAWER.navigation("prepaidPlus", 2);
>>>>>>> Stashed changes
    }
=======
>>>>>>> origin/master
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "products";
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
    $.__views.products = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "products"
    });
    $.__views.products && $.addTopLevelView($.__views.products);
<<<<<<< HEAD
    $.__views.__alloyId1953 = Alloy.createController("_header", {
        id: "__alloyId1953",
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1911 = Alloy.createController("_header", {
        id: "__alloyId1911",
=======
    $.__views.__alloyId1953 = Alloy.createController("_header", {
        id: "__alloyId1953",
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        __parentSymbol: $.__views.products
    });
    $.__views.__alloyId1953.setParent($.__views.products);
    $.__views.__alloyId1954 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#FBB62D",
        id: "__alloyId1954"
    });
<<<<<<< HEAD
    $.__views.products.add($.__views.__alloyId1954);
    $.__views.__alloyId1955 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.products.add($.__views.__alloyId1912);
    $.__views.__alloyId1913 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1740 = Alloy.createController("_header", {
        id: "__alloyId1740",
        __parentSymbol: $.__views.products
    });
    $.__views.__alloyId1740.setParent($.__views.products);
    $.__views.__alloyId1741 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#FBB62D",
        id: "__alloyId1741"
    });
    $.__views.products.add($.__views.__alloyId1741);
    $.__views.__alloyId1742 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.__alloyId522 = Alloy.createController("_header", {
        id: "__alloyId522",
        __parentSymbol: $.__views.products
    });
    $.__views.__alloyId522.setParent($.__views.products);
    $.__views.__alloyId523 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#FBB62D",
        id: "__alloyId523"
    });
    $.__views.products.add($.__views.__alloyId523);
    $.__views.__alloyId524 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.products.add($.__views.__alloyId1954);
    $.__views.__alloyId1955 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Products",
        left: "10",
        top: "10",
        color: "white",
<<<<<<< HEAD
        id: "__alloyId1955"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1913"
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId1954.add($.__views.__alloyId1955);
    $.__views.__alloyId1956 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId1956"
    });
    $.__views.products.add($.__views.__alloyId1956);
    $.__views.__alloyId1957 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId1957"
    });
    $.__views.__alloyId1956.add($.__views.__alloyId1957);
    prepaidPlus ? $.__views.__alloyId1957.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1957!click!prepaidPlus"] = true;
    $.__views.__alloyId1958 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId1958"
    });
    $.__views.__alloyId1957.add($.__views.__alloyId1958);
    $.__views.__alloyId1959 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
<<<<<<< HEAD
        id: "__alloyId1959"
    });
    $.__views.__alloyId1958.add($.__views.__alloyId1959);
    $.__views.__alloyId1960 = Ti.UI.createLabel({
=======
        id: "__alloyId1917"
=======
        id: "__alloyId1955"
>>>>>>> origin/master
    });
    $.__views.__alloyId1954.add($.__views.__alloyId1955);
    $.__views.__alloyId1956 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId1956"
    });
    $.__views.products.add($.__views.__alloyId1956);
    $.__views.__alloyId1957 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId1957"
    });
    $.__views.__alloyId1956.add($.__views.__alloyId1957);
    prepaidPlus ? $.__views.__alloyId1957.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1957!click!prepaidPlus"] = true;
    $.__views.__alloyId1958 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId1958"
    });
    $.__views.__alloyId1957.add($.__views.__alloyId1958);
    $.__views.__alloyId1959 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId1959"
    });
<<<<<<< HEAD
    $.__views.__alloyId1745.add($.__views.__alloyId1746);
    $.__views.__alloyId1747 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId524"
    });
    $.__views.__alloyId523.add($.__views.__alloyId524);
    $.__views.__alloyId525 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId525"
    });
    $.__views.products.add($.__views.__alloyId525);
    $.__views.__alloyId526 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId526"
    });
    $.__views.__alloyId525.add($.__views.__alloyId526);
    prepaidPlus ? $.__views.__alloyId526.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId526!click!prepaidPlus"] = true;
    $.__views.__alloyId527 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId527"
    });
    $.__views.__alloyId526.add($.__views.__alloyId527);
    $.__views.__alloyId528 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId528"
    });
    $.__views.__alloyId527.add($.__views.__alloyId528);
    $.__views.__alloyId529 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1958.add($.__views.__alloyId1959);
    $.__views.__alloyId1960 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1960"
    });
    $.__views.__alloyId1957.add($.__views.__alloyId1960);
    $.__views.__alloyId1961 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1961"
    });
    $.__views.__alloyId1956.add($.__views.__alloyId1961);
    prepaid ? $.__views.__alloyId1961.addEventListener("click", prepaid) : __defers["$.__views.__alloyId1961!click!prepaid"] = true;
    $.__views.__alloyId1962 = Ti.UI.createView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId1962"
    });
    $.__views.__alloyId1961.add($.__views.__alloyId1962);
    $.__views.__alloyId1963 = Ti.UI.createImageView({
        image: "/images/products_02.png",
        height: "55",
        width: "65",
        id: "__alloyId1963"
    });
    $.__views.__alloyId1962.add($.__views.__alloyId1963);
    $.__views.__alloyId1964 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1918"
=======
        id: "__alloyId1960"
>>>>>>> origin/master
    });
    $.__views.__alloyId1957.add($.__views.__alloyId1960);
    $.__views.__alloyId1961 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1961"
    });
    $.__views.__alloyId1956.add($.__views.__alloyId1961);
    prepaid ? $.__views.__alloyId1961.addEventListener("click", prepaid) : __defers["$.__views.__alloyId1961!click!prepaid"] = true;
    $.__views.__alloyId1962 = Ti.UI.createView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId1962"
    });
    $.__views.__alloyId1961.add($.__views.__alloyId1962);
    $.__views.__alloyId1963 = Ti.UI.createImageView({
        image: "/images/products_02.png",
        height: "55",
        width: "65",
        id: "__alloyId1963"
    });
<<<<<<< HEAD
    $.__views.__alloyId1744.add($.__views.__alloyId1747);
    $.__views.__alloyId1748 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1748"
    });
    $.__views.__alloyId1743.add($.__views.__alloyId1748);
    prepaid ? $.__views.__alloyId1748.addEventListener("click", prepaid) : __defers["$.__views.__alloyId1748!click!prepaid"] = true;
    $.__views.__alloyId1749 = Ti.UI.createView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId1749"
    });
    $.__views.__alloyId1748.add($.__views.__alloyId1749);
    $.__views.__alloyId1750 = Ti.UI.createImageView({
        image: "/images/products_02.png",
        height: "55",
        width: "65",
        id: "__alloyId1750"
    });
    $.__views.__alloyId1749.add($.__views.__alloyId1750);
    $.__views.__alloyId1751 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId529"
    });
    $.__views.__alloyId526.add($.__views.__alloyId529);
    $.__views.__alloyId530 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId530"
    });
    $.__views.__alloyId525.add($.__views.__alloyId530);
    prepaidPlus ? $.__views.__alloyId530.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId530!click!prepaidPlus"] = true;
    $.__views.__alloyId531 = Ti.UI.createView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId531"
    });
    $.__views.__alloyId530.add($.__views.__alloyId531);
    $.__views.__alloyId532 = Ti.UI.createImageView({
        image: "/images/products_02.png",
        height: "55",
        width: "65",
        id: "__alloyId532"
    });
    $.__views.__alloyId531.add($.__views.__alloyId532);
    $.__views.__alloyId533 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1962.add($.__views.__alloyId1963);
    $.__views.__alloyId1964 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1964"
    });
    $.__views.__alloyId1961.add($.__views.__alloyId1964);
    $.__views.__alloyId1965 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId1965"
    });
    $.__views.__alloyId1956.add($.__views.__alloyId1965);
    penang ? $.__views.__alloyId1965.addEventListener("click", penang) : __defers["$.__views.__alloyId1965!click!penang"] = true;
    $.__views.__alloyId1966 = Ti.UI.createView({
        backgroundColor: "#134D5B",
        height: "100%",
        width: "25%",
        id: "__alloyId1966"
    });
    $.__views.__alloyId1965.add($.__views.__alloyId1966);
    $.__views.__alloyId1967 = Ti.UI.createImageView({
        image: "/images/products_03.png",
        height: "38",
        width: "38",
        id: "__alloyId1967"
    });
    $.__views.__alloyId1966.add($.__views.__alloyId1967);
    $.__views.__alloyId1968 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1922"
=======
        id: "__alloyId1964"
>>>>>>> origin/master
    });
    $.__views.__alloyId1961.add($.__views.__alloyId1964);
    $.__views.__alloyId1965 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId1965"
    });
    $.__views.__alloyId1956.add($.__views.__alloyId1965);
    penang ? $.__views.__alloyId1965.addEventListener("click", penang) : __defers["$.__views.__alloyId1965!click!penang"] = true;
    $.__views.__alloyId1966 = Ti.UI.createView({
        backgroundColor: "#134D5B",
        height: "100%",
        width: "25%",
        id: "__alloyId1966"
    });
    $.__views.__alloyId1965.add($.__views.__alloyId1966);
    $.__views.__alloyId1967 = Ti.UI.createImageView({
        image: "/images/products_03.png",
        height: "38",
        width: "38",
        id: "__alloyId1967"
    });
<<<<<<< HEAD
    $.__views.__alloyId1748.add($.__views.__alloyId1751);
    $.__views.__alloyId1752 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId1752"
    });
    $.__views.__alloyId1743.add($.__views.__alloyId1752);
    penang ? $.__views.__alloyId1752.addEventListener("click", penang) : __defers["$.__views.__alloyId1752!click!penang"] = true;
    $.__views.__alloyId1753 = Ti.UI.createView({
        backgroundColor: "#134D5B",
        height: "100%",
        width: "25%",
        id: "__alloyId1753"
    });
    $.__views.__alloyId1752.add($.__views.__alloyId1753);
    $.__views.__alloyId1754 = Ti.UI.createImageView({
        image: "/images/products_03.png",
        height: "38",
        width: "38",
        id: "__alloyId1754"
    });
    $.__views.__alloyId1753.add($.__views.__alloyId1754);
    $.__views.__alloyId1755 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId533"
    });
    $.__views.__alloyId530.add($.__views.__alloyId533);
    $.__views.__alloyId534 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId534"
    });
    $.__views.__alloyId525.add($.__views.__alloyId534);
    prepaidPlus ? $.__views.__alloyId534.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId534!click!prepaidPlus"] = true;
    $.__views.__alloyId535 = Ti.UI.createView({
        backgroundColor: "#134D5B",
        height: "100%",
        width: "25%",
        id: "__alloyId535"
    });
    $.__views.__alloyId534.add($.__views.__alloyId535);
    $.__views.__alloyId536 = Ti.UI.createImageView({
        image: "/images/products_03.png",
        height: "38",
        width: "38",
        id: "__alloyId536"
    });
    $.__views.__alloyId535.add($.__views.__alloyId536);
    $.__views.__alloyId537 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1966.add($.__views.__alloyId1967);
    $.__views.__alloyId1968 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1968"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1926"
=======
        id: "__alloyId1968"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId1965.add($.__views.__alloyId1968);
    $.__views.__alloyId1969 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#28404C",
        id: "__alloyId1969"
    });
    $.__views.__alloyId1956.add($.__views.__alloyId1969);
    mobileInternet ? $.__views.__alloyId1969.addEventListener("click", mobileInternet) : __defers["$.__views.__alloyId1969!click!mobileInternet"] = true;
    $.__views.__alloyId1970 = Ti.UI.createView({
        backgroundColor: "#1A2D34",
        height: "100%",
        width: "25%",
        id: "__alloyId1970"
<<<<<<< HEAD
    });
    $.__views.__alloyId1969.add($.__views.__alloyId1970);
    $.__views.__alloyId1971 = Ti.UI.createImageView({
        image: "/images/products_04.png",
        height: "50",
        width: "35",
        id: "__alloyId1971"
    });
    $.__views.__alloyId1970.add($.__views.__alloyId1971);
    $.__views.__alloyId1972 = Ti.UI.createLabel({
=======
    });
    $.__views.__alloyId1969.add($.__views.__alloyId1970);
    $.__views.__alloyId1971 = Ti.UI.createImageView({
        image: "/images/products_04.png",
        height: "50",
        width: "35",
        id: "__alloyId1971"
    });
<<<<<<< HEAD
    $.__views.__alloyId1756.add($.__views.__alloyId1757);
    $.__views.__alloyId1758 = Ti.UI.createImageView({
        image: "/images/products_04.png",
        height: "50",
        width: "35",
        id: "__alloyId1758"
    });
    $.__views.__alloyId1757.add($.__views.__alloyId1758);
    $.__views.__alloyId1759 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId537"
    });
    $.__views.__alloyId534.add($.__views.__alloyId537);
    $.__views.__alloyId538 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#28404C",
        id: "__alloyId538"
    });
    $.__views.__alloyId525.add($.__views.__alloyId538);
    prepaidPlus ? $.__views.__alloyId538.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId538!click!prepaidPlus"] = true;
    $.__views.__alloyId539 = Ti.UI.createView({
        backgroundColor: "#1A2D34",
        height: "100%",
        width: "25%",
        id: "__alloyId539"
    });
    $.__views.__alloyId538.add($.__views.__alloyId539);
    $.__views.__alloyId540 = Ti.UI.createImageView({
        image: "/images/products_04.png",
        height: "50",
        width: "35",
        id: "__alloyId540"
    });
    $.__views.__alloyId539.add($.__views.__alloyId540);
    $.__views.__alloyId541 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1970.add($.__views.__alloyId1971);
    $.__views.__alloyId1972 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1972"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1930"
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId1969.add($.__views.__alloyId1972);
    $.__views.__alloyId1973 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#646461",
        id: "__alloyId1973"
    });
    $.__views.__alloyId1956.add($.__views.__alloyId1973);
    idd ? $.__views.__alloyId1973.addEventListener("click", idd) : __defers["$.__views.__alloyId1973!click!idd"] = true;
    $.__views.__alloyId1974 = Ti.UI.createView({
        backgroundColor: "#454543",
        height: "100%",
        width: "25%",
        id: "__alloyId1974"
    });
    $.__views.__alloyId1973.add($.__views.__alloyId1974);
    $.__views.__alloyId1975 = Ti.UI.createImageView({
        image: "/images/products_05.png",
        height: "41",
        width: "41",
        id: "__alloyId1975"
    });
<<<<<<< HEAD
    $.__views.__alloyId1974.add($.__views.__alloyId1975);
    $.__views.__alloyId1976 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1932.add($.__views.__alloyId1933);
    $.__views.__alloyId1934 = Ti.UI.createLabel({
=======
        id: "__alloyId1759"
=======
        id: "__alloyId1972"
>>>>>>> origin/master
    });
    $.__views.__alloyId1969.add($.__views.__alloyId1972);
    $.__views.__alloyId1973 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#646461",
        id: "__alloyId1973"
    });
    $.__views.__alloyId1956.add($.__views.__alloyId1973);
    idd ? $.__views.__alloyId1973.addEventListener("click", idd) : __defers["$.__views.__alloyId1973!click!idd"] = true;
    $.__views.__alloyId1974 = Ti.UI.createView({
        backgroundColor: "#454543",
        height: "100%",
        width: "25%",
        id: "__alloyId1974"
    });
    $.__views.__alloyId1973.add($.__views.__alloyId1974);
    $.__views.__alloyId1975 = Ti.UI.createImageView({
        image: "/images/products_05.png",
        height: "41",
        width: "41",
        id: "__alloyId1975"
    });
<<<<<<< HEAD
    $.__views.__alloyId1761.add($.__views.__alloyId1762);
    $.__views.__alloyId1763 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId541"
    });
    $.__views.__alloyId538.add($.__views.__alloyId541);
    $.__views.__alloyId542 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#646461",
        id: "__alloyId542"
    });
    $.__views.__alloyId525.add($.__views.__alloyId542);
    prepaidPlus ? $.__views.__alloyId542.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId542!click!prepaidPlus"] = true;
    $.__views.__alloyId543 = Ti.UI.createView({
        backgroundColor: "#454543",
        height: "100%",
        width: "25%",
        id: "__alloyId543"
    });
    $.__views.__alloyId542.add($.__views.__alloyId543);
    $.__views.__alloyId544 = Ti.UI.createImageView({
        image: "/images/products_05.png",
        height: "41",
        width: "41",
        id: "__alloyId544"
    });
    $.__views.__alloyId543.add($.__views.__alloyId544);
    $.__views.__alloyId545 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1974.add($.__views.__alloyId1975);
    $.__views.__alloyId1976 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "IDD",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1976"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1934"
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId1973.add($.__views.__alloyId1976);
    exports.destroy = function() {};
    _.extend($, $.__views);
<<<<<<< HEAD
=======
    __defers["$.__views.__alloyId1915!click!prepaidPlus"] && $.__views.__alloyId1915.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1919!click!prepaid"] && $.__views.__alloyId1919.addEventListener("click", prepaid);
    __defers["$.__views.__alloyId1923!click!penang"] && $.__views.__alloyId1923.addEventListener("click", penang);
    __defers["$.__views.__alloyId1927!click!mobileInternet"] && $.__views.__alloyId1927.addEventListener("click", mobileInternet);
    __defers["$.__views.__alloyId1931!click!idd"] && $.__views.__alloyId1931.addEventListener("click", idd);
=======
        id: "__alloyId1763"
=======
        id: "__alloyId1976"
>>>>>>> origin/master
    });
    $.__views.__alloyId1973.add($.__views.__alloyId1976);
    exports.destroy = function() {};
    _.extend($, $.__views);
<<<<<<< HEAD
    __defers["$.__views.__alloyId1744!click!prepaidPlus"] && $.__views.__alloyId1744.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1748!click!prepaid"] && $.__views.__alloyId1748.addEventListener("click", prepaid);
    __defers["$.__views.__alloyId1752!click!penang"] && $.__views.__alloyId1752.addEventListener("click", penang);
    __defers["$.__views.__alloyId1756!click!mobileInternet"] && $.__views.__alloyId1756.addEventListener("click", mobileInternet);
    __defers["$.__views.__alloyId1760!click!idd"] && $.__views.__alloyId1760.addEventListener("click", idd);
>>>>>>> origin/master
=======
        id: "__alloyId545"
    });
    $.__views.__alloyId542.add($.__views.__alloyId545);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId526!click!prepaidPlus"] && $.__views.__alloyId526.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId530!click!prepaidPlus"] && $.__views.__alloyId530.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId534!click!prepaidPlus"] && $.__views.__alloyId534.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId538!click!prepaidPlus"] && $.__views.__alloyId538.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId542!click!prepaidPlus"] && $.__views.__alloyId542.addEventListener("click", prepaidPlus);
>>>>>>> Stashed changes
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
    __defers["$.__views.__alloyId1957!click!prepaidPlus"] && $.__views.__alloyId1957.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1961!click!prepaid"] && $.__views.__alloyId1961.addEventListener("click", prepaid);
    __defers["$.__views.__alloyId1965!click!penang"] && $.__views.__alloyId1965.addEventListener("click", penang);
    __defers["$.__views.__alloyId1969!click!mobileInternet"] && $.__views.__alloyId1969.addEventListener("click", mobileInternet);
    __defers["$.__views.__alloyId1973!click!idd"] && $.__views.__alloyId1973.addEventListener("click", idd);
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;