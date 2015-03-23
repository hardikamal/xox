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
    $.__views.__alloyId1935 = Alloy.createController("_header", {
        id: "__alloyId1935",
        __parentSymbol: $.__views.profile
    });
    $.__views.__alloyId1935.setParent($.__views.profile);
    $.__views.__alloyId1936 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1936"
    });
    $.__views.profile.add($.__views.__alloyId1936);
    $.__views.__alloyId1937 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1937"
    });
    $.__views.__alloyId1936.add($.__views.__alloyId1937);
    $.__views.__alloyId1938 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1764 = Alloy.createController("_header", {
        id: "__alloyId1764",
        __parentSymbol: $.__views.profile
    });
    $.__views.__alloyId1764.setParent($.__views.profile);
    $.__views.__alloyId1765 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1765"
    });
    $.__views.profile.add($.__views.__alloyId1765);
    $.__views.__alloyId1766 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1766"
    });
    $.__views.__alloyId1765.add($.__views.__alloyId1766);
    $.__views.__alloyId1767 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Account Details",
        backgroundColor: "transparent",
        height: "50",
        width: "45%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        color: "white",
<<<<<<< HEAD
        id: "__alloyId1938"
    });
    $.__views.__alloyId1937.add($.__views.__alloyId1938);
    accountDetails ? $.__views.__alloyId1938.addEventListener("click", accountDetails) : __defers["$.__views.__alloyId1938!click!accountDetails"] = true;
    $.__views.__alloyId1939 = Ti.UI.createLabel({
=======
        id: "__alloyId1767"
    });
    $.__views.__alloyId1766.add($.__views.__alloyId1767);
    accountDetails ? $.__views.__alloyId1767.addEventListener("click", accountDetails) : __defers["$.__views.__alloyId1767!click!accountDetails"] = true;
    $.__views.__alloyId1768 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "My Profile",
        backgroundColor: "#bf0404",
        height: "50",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: "45%",
        color: "white",
<<<<<<< HEAD
        id: "__alloyId1939"
    });
    $.__views.__alloyId1937.add($.__views.__alloyId1939);
    $.__views.__alloyId1940 = Ti.UI.createImageView({
=======
        id: "__alloyId1768"
    });
    $.__views.__alloyId1766.add($.__views.__alloyId1768);
    $.__views.__alloyId1769 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "10%",
        height: "30",
        top: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId1940"
    });
    $.__views.__alloyId1937.add($.__views.__alloyId1940);
    back ? $.__views.__alloyId1940.addEventListener("click", back) : __defers["$.__views.__alloyId1940!click!back"] = true;
=======
        id: "__alloyId1769"
    });
    $.__views.__alloyId1766.add($.__views.__alloyId1769);
    back ? $.__views.__alloyId1769.addEventListener("click", back) : __defers["$.__views.__alloyId1769!click!back"] = true;
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F5F5F5"
    });
    $.__views.profile.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId1941 = Ti.UI.createView({
=======
    $.__views.__alloyId1770 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1941"
    });
    $.__views.scrollView.add($.__views.__alloyId1941);
    $.__views.__alloyId1942 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1942"
    });
    $.__views.__alloyId1941.add($.__views.__alloyId1942);
    $.__views.__alloyId1943 = Ti.UI.createLabel({
=======
        id: "__alloyId1770"
    });
    $.__views.scrollView.add($.__views.__alloyId1770);
    $.__views.__alloyId1771 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1771"
    });
    $.__views.__alloyId1770.add($.__views.__alloyId1771);
    $.__views.__alloyId1772 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Address",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1943"
    });
    $.__views.__alloyId1942.add($.__views.__alloyId1943);
    $.__views.__alloyId1944 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1944"
    });
    $.__views.__alloyId1941.add($.__views.__alloyId1944);
    $.__views.__alloyId1945 = Ti.UI.createLabel({
=======
        id: "__alloyId1772"
    });
    $.__views.__alloyId1771.add($.__views.__alloyId1772);
    $.__views.__alloyId1773 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1773"
    });
    $.__views.__alloyId1770.add($.__views.__alloyId1773);
    $.__views.__alloyId1774 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "No.8 Jalan Puchong,Selangor...",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1945"
    });
    $.__views.__alloyId1944.add($.__views.__alloyId1945);
    $.__views.__alloyId1946 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1946"
    });
    $.__views.__alloyId1941.add($.__views.__alloyId1946);
    $.__views.__alloyId1947 = Ti.UI.createLabel({
=======
        id: "__alloyId1774"
    });
    $.__views.__alloyId1773.add($.__views.__alloyId1774);
    $.__views.__alloyId1775 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1775"
    });
    $.__views.__alloyId1770.add($.__views.__alloyId1775);
    $.__views.__alloyId1776 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1947"
    });
    $.__views.__alloyId1946.add($.__views.__alloyId1947);
    $.__views.__alloyId1948 = Ti.UI.createView({
=======
        id: "__alloyId1776"
    });
    $.__views.__alloyId1775.add($.__views.__alloyId1776);
    $.__views.__alloyId1777 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1948"
    });
    $.__views.scrollView.add($.__views.__alloyId1948);
    $.__views.__alloyId1949 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1949"
    });
    $.__views.__alloyId1948.add($.__views.__alloyId1949);
    $.__views.__alloyId1950 = Ti.UI.createLabel({
=======
        id: "__alloyId1777"
    });
    $.__views.scrollView.add($.__views.__alloyId1777);
    $.__views.__alloyId1778 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1778"
    });
    $.__views.__alloyId1777.add($.__views.__alloyId1778);
    $.__views.__alloyId1779 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "NRIC/Passport/Armed Force ID",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1950"
    });
    $.__views.__alloyId1949.add($.__views.__alloyId1950);
    $.__views.__alloyId1951 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1951"
    });
    $.__views.__alloyId1948.add($.__views.__alloyId1951);
    $.__views.__alloyId1952 = Ti.UI.createLabel({
=======
        id: "__alloyId1779"
    });
    $.__views.__alloyId1778.add($.__views.__alloyId1779);
    $.__views.__alloyId1780 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1780"
    });
    $.__views.__alloyId1777.add($.__views.__alloyId1780);
    $.__views.__alloyId1781 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "000000 00 0000",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1952"
    });
    $.__views.__alloyId1951.add($.__views.__alloyId1952);
    $.__views.__alloyId1953 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1953"
    });
    $.__views.__alloyId1948.add($.__views.__alloyId1953);
    $.__views.__alloyId1954 = Ti.UI.createLabel({
=======
        id: "__alloyId1781"
    });
    $.__views.__alloyId1780.add($.__views.__alloyId1781);
    $.__views.__alloyId1782 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1782"
    });
    $.__views.__alloyId1777.add($.__views.__alloyId1782);
    $.__views.__alloyId1783 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1954"
    });
    $.__views.__alloyId1953.add($.__views.__alloyId1954);
    $.__views.__alloyId1955 = Ti.UI.createView({
=======
        id: "__alloyId1783"
    });
    $.__views.__alloyId1782.add($.__views.__alloyId1783);
    $.__views.__alloyId1784 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1955"
    });
    $.__views.scrollView.add($.__views.__alloyId1955);
    $.__views.__alloyId1956 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1956"
    });
    $.__views.__alloyId1955.add($.__views.__alloyId1956);
    $.__views.__alloyId1957 = Ti.UI.createLabel({
=======
        id: "__alloyId1784"
    });
    $.__views.scrollView.add($.__views.__alloyId1784);
    $.__views.__alloyId1785 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1785"
    });
    $.__views.__alloyId1784.add($.__views.__alloyId1785);
    $.__views.__alloyId1786 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Email Address",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1957"
    });
    $.__views.__alloyId1956.add($.__views.__alloyId1957);
    $.__views.__alloyId1958 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1958"
    });
    $.__views.__alloyId1955.add($.__views.__alloyId1958);
    $.__views.__alloyId1959 = Ti.UI.createLabel({
=======
        id: "__alloyId1786"
    });
    $.__views.__alloyId1785.add($.__views.__alloyId1786);
    $.__views.__alloyId1787 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1787"
    });
    $.__views.__alloyId1784.add($.__views.__alloyId1787);
    $.__views.__alloyId1788 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "sample@gmail.com",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1959"
    });
    $.__views.__alloyId1958.add($.__views.__alloyId1959);
    $.__views.__alloyId1960 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1960"
    });
    $.__views.__alloyId1955.add($.__views.__alloyId1960);
    $.__views.__alloyId1961 = Ti.UI.createLabel({
=======
        id: "__alloyId1788"
    });
    $.__views.__alloyId1787.add($.__views.__alloyId1788);
    $.__views.__alloyId1789 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1789"
    });
    $.__views.__alloyId1784.add($.__views.__alloyId1789);
    $.__views.__alloyId1790 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1961"
    });
    $.__views.__alloyId1960.add($.__views.__alloyId1961);
    $.__views.__alloyId1962 = Ti.UI.createView({
=======
        id: "__alloyId1790"
    });
    $.__views.__alloyId1789.add($.__views.__alloyId1790);
    $.__views.__alloyId1791 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1962"
    });
    $.__views.scrollView.add($.__views.__alloyId1962);
    $.__views.__alloyId1963 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1963"
    });
    $.__views.__alloyId1962.add($.__views.__alloyId1963);
    $.__views.__alloyId1964 = Ti.UI.createLabel({
=======
        id: "__alloyId1791"
    });
    $.__views.scrollView.add($.__views.__alloyId1791);
    $.__views.__alloyId1792 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1792"
    });
    $.__views.__alloyId1791.add($.__views.__alloyId1792);
    $.__views.__alloyId1793 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Birthday",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1964"
    });
    $.__views.__alloyId1963.add($.__views.__alloyId1964);
    $.__views.__alloyId1965 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1965"
    });
    $.__views.__alloyId1962.add($.__views.__alloyId1965);
    $.__views.__alloyId1966 = Ti.UI.createLabel({
=======
        id: "__alloyId1793"
    });
    $.__views.__alloyId1792.add($.__views.__alloyId1793);
    $.__views.__alloyId1794 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1794"
    });
    $.__views.__alloyId1791.add($.__views.__alloyId1794);
    $.__views.__alloyId1795 = Ti.UI.createLabel({
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1966"
    });
    $.__views.__alloyId1965.add($.__views.__alloyId1966);
    $.__views.__alloyId1967 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1967"
    });
    $.__views.__alloyId1962.add($.__views.__alloyId1967);
    $.__views.__alloyId1968 = Ti.UI.createLabel({
=======
        id: "__alloyId1795"
    });
    $.__views.__alloyId1794.add($.__views.__alloyId1795);
    $.__views.__alloyId1796 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1796"
    });
    $.__views.__alloyId1791.add($.__views.__alloyId1796);
    $.__views.__alloyId1797 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1968"
    });
    $.__views.__alloyId1967.add($.__views.__alloyId1968);
    $.__views.__alloyId1969 = Ti.UI.createView({
=======
        id: "__alloyId1797"
    });
    $.__views.__alloyId1796.add($.__views.__alloyId1797);
    $.__views.__alloyId1798 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1969"
    });
    $.__views.scrollView.add($.__views.__alloyId1969);
    $.__views.__alloyId1970 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1970"
    });
    $.__views.__alloyId1969.add($.__views.__alloyId1970);
    $.__views.__alloyId1971 = Ti.UI.createLabel({
=======
        id: "__alloyId1798"
    });
    $.__views.scrollView.add($.__views.__alloyId1798);
    $.__views.__alloyId1799 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1799"
    });
    $.__views.__alloyId1798.add($.__views.__alloyId1799);
    $.__views.__alloyId1800 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Gender",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1971"
    });
    $.__views.__alloyId1970.add($.__views.__alloyId1971);
    $.__views.__alloyId1972 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1972"
    });
    $.__views.__alloyId1969.add($.__views.__alloyId1972);
    $.__views.__alloyId1973 = Ti.UI.createLabel({
=======
        id: "__alloyId1800"
    });
    $.__views.__alloyId1799.add($.__views.__alloyId1800);
    $.__views.__alloyId1801 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1801"
    });
    $.__views.__alloyId1798.add($.__views.__alloyId1801);
    $.__views.__alloyId1802 = Ti.UI.createLabel({
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1973"
    });
    $.__views.__alloyId1972.add($.__views.__alloyId1973);
    $.__views.__alloyId1974 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1974"
    });
    $.__views.__alloyId1969.add($.__views.__alloyId1974);
    $.__views.__alloyId1975 = Ti.UI.createLabel({
=======
        id: "__alloyId1802"
    });
    $.__views.__alloyId1801.add($.__views.__alloyId1802);
    $.__views.__alloyId1803 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1803"
    });
    $.__views.__alloyId1798.add($.__views.__alloyId1803);
    $.__views.__alloyId1804 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1975"
    });
    $.__views.__alloyId1974.add($.__views.__alloyId1975);
    $.__views.__alloyId1976 = Ti.UI.createView({
=======
        id: "__alloyId1804"
    });
    $.__views.__alloyId1803.add($.__views.__alloyId1804);
    $.__views.__alloyId1805 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1976"
    });
    $.__views.scrollView.add($.__views.__alloyId1976);
    $.__views.__alloyId1977 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1977"
    });
    $.__views.__alloyId1976.add($.__views.__alloyId1977);
    $.__views.__alloyId1978 = Ti.UI.createLabel({
=======
        id: "__alloyId1805"
    });
    $.__views.scrollView.add($.__views.__alloyId1805);
    $.__views.__alloyId1806 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1806"
    });
    $.__views.__alloyId1805.add($.__views.__alloyId1806);
    $.__views.__alloyId1807 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Proessional Group/Job",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1978"
    });
    $.__views.__alloyId1977.add($.__views.__alloyId1978);
    $.__views.__alloyId1979 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1979"
    });
    $.__views.__alloyId1976.add($.__views.__alloyId1979);
    $.__views.__alloyId1980 = Ti.UI.createLabel({
=======
        id: "__alloyId1807"
    });
    $.__views.__alloyId1806.add($.__views.__alloyId1807);
    $.__views.__alloyId1808 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1808"
    });
    $.__views.__alloyId1805.add($.__views.__alloyId1808);
    $.__views.__alloyId1809 = Ti.UI.createLabel({
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1980"
    });
    $.__views.__alloyId1979.add($.__views.__alloyId1980);
    $.__views.__alloyId1981 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1981"
    });
    $.__views.__alloyId1976.add($.__views.__alloyId1981);
    $.__views.__alloyId1982 = Ti.UI.createLabel({
=======
        id: "__alloyId1809"
    });
    $.__views.__alloyId1808.add($.__views.__alloyId1809);
    $.__views.__alloyId1810 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1810"
    });
    $.__views.__alloyId1805.add($.__views.__alloyId1810);
    $.__views.__alloyId1811 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1982"
    });
    $.__views.__alloyId1981.add($.__views.__alloyId1982);
    $.__views.__alloyId1983 = Ti.UI.createView({
=======
        id: "__alloyId1811"
    });
    $.__views.__alloyId1810.add($.__views.__alloyId1811);
    $.__views.__alloyId1812 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1983"
    });
    $.__views.scrollView.add($.__views.__alloyId1983);
    $.__views.__alloyId1984 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1984"
    });
    $.__views.__alloyId1983.add($.__views.__alloyId1984);
    $.__views.__alloyId1985 = Ti.UI.createLabel({
=======
        id: "__alloyId1812"
    });
    $.__views.scrollView.add($.__views.__alloyId1812);
    $.__views.__alloyId1813 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1813"
    });
    $.__views.__alloyId1812.add($.__views.__alloyId1813);
    $.__views.__alloyId1814 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Income Group",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1985"
    });
    $.__views.__alloyId1984.add($.__views.__alloyId1985);
    $.__views.__alloyId1986 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1986"
    });
    $.__views.__alloyId1983.add($.__views.__alloyId1986);
    $.__views.__alloyId1987 = Ti.UI.createLabel({
=======
        id: "__alloyId1814"
    });
    $.__views.__alloyId1813.add($.__views.__alloyId1814);
    $.__views.__alloyId1815 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1815"
    });
    $.__views.__alloyId1812.add($.__views.__alloyId1815);
    $.__views.__alloyId1816 = Ti.UI.createLabel({
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1987"
    });
    $.__views.__alloyId1986.add($.__views.__alloyId1987);
    $.__views.__alloyId1988 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1988"
    });
    $.__views.__alloyId1983.add($.__views.__alloyId1988);
    $.__views.__alloyId1989 = Ti.UI.createLabel({
=======
        id: "__alloyId1816"
    });
    $.__views.__alloyId1815.add($.__views.__alloyId1816);
    $.__views.__alloyId1817 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1817"
    });
    $.__views.__alloyId1812.add($.__views.__alloyId1817);
    $.__views.__alloyId1818 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1989"
    });
    $.__views.__alloyId1988.add($.__views.__alloyId1989);
    $.__views.__alloyId1990 = Ti.UI.createView({
=======
        id: "__alloyId1818"
    });
    $.__views.__alloyId1817.add($.__views.__alloyId1818);
    $.__views.__alloyId1819 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1990"
    });
    $.__views.scrollView.add($.__views.__alloyId1990);
    $.__views.__alloyId1991 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1991"
    });
    $.__views.__alloyId1990.add($.__views.__alloyId1991);
    $.__views.__alloyId1992 = Ti.UI.createLabel({
=======
        id: "__alloyId1819"
    });
    $.__views.scrollView.add($.__views.__alloyId1819);
    $.__views.__alloyId1820 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1820"
    });
    $.__views.__alloyId1819.add($.__views.__alloyId1820);
    $.__views.__alloyId1821 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Interest",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1992"
    });
    $.__views.__alloyId1991.add($.__views.__alloyId1992);
    $.__views.__alloyId1993 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1993"
    });
    $.__views.__alloyId1990.add($.__views.__alloyId1993);
    $.__views.__alloyId1994 = Ti.UI.createLabel({
=======
        id: "__alloyId1821"
    });
    $.__views.__alloyId1820.add($.__views.__alloyId1821);
    $.__views.__alloyId1822 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1822"
    });
    $.__views.__alloyId1819.add($.__views.__alloyId1822);
    $.__views.__alloyId1823 = Ti.UI.createLabel({
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1994"
    });
    $.__views.__alloyId1993.add($.__views.__alloyId1994);
    $.__views.__alloyId1995 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1995"
    });
    $.__views.__alloyId1990.add($.__views.__alloyId1995);
    $.__views.__alloyId1996 = Ti.UI.createLabel({
=======
        id: "__alloyId1823"
    });
    $.__views.__alloyId1822.add($.__views.__alloyId1823);
    $.__views.__alloyId1824 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1824"
    });
    $.__views.__alloyId1819.add($.__views.__alloyId1824);
    $.__views.__alloyId1825 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1996"
    });
    $.__views.__alloyId1995.add($.__views.__alloyId1996);
    $.__views.__alloyId1997 = Ti.UI.createView({
=======
        id: "__alloyId1825"
    });
    $.__views.__alloyId1824.add($.__views.__alloyId1825);
    $.__views.__alloyId1826 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1997"
    });
    $.__views.scrollView.add($.__views.__alloyId1997);
    $.__views.__alloyId1998 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1998"
    });
    $.__views.__alloyId1997.add($.__views.__alloyId1998);
    $.__views.__alloyId1999 = Ti.UI.createLabel({
=======
        id: "__alloyId1826"
    });
    $.__views.scrollView.add($.__views.__alloyId1826);
    $.__views.__alloyId1827 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1827"
    });
    $.__views.__alloyId1826.add($.__views.__alloyId1827);
    $.__views.__alloyId1828 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Marital Status",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1999"
    });
    $.__views.__alloyId1998.add($.__views.__alloyId1999);
    $.__views.__alloyId2000 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2000"
    });
    $.__views.__alloyId1997.add($.__views.__alloyId2000);
    $.__views.__alloyId2001 = Ti.UI.createLabel({
=======
        id: "__alloyId1828"
    });
    $.__views.__alloyId1827.add($.__views.__alloyId1828);
    $.__views.__alloyId1829 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1829"
    });
    $.__views.__alloyId1826.add($.__views.__alloyId1829);
    $.__views.__alloyId1830 = Ti.UI.createLabel({
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2001"
    });
    $.__views.__alloyId2000.add($.__views.__alloyId2001);
    $.__views.__alloyId2002 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2002"
    });
    $.__views.__alloyId1997.add($.__views.__alloyId2002);
    $.__views.__alloyId2003 = Ti.UI.createLabel({
=======
        id: "__alloyId1830"
    });
    $.__views.__alloyId1829.add($.__views.__alloyId1830);
    $.__views.__alloyId1831 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1831"
    });
    $.__views.__alloyId1826.add($.__views.__alloyId1831);
    $.__views.__alloyId1832 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2003"
    });
    $.__views.__alloyId2002.add($.__views.__alloyId2003);
    $.__views.__alloyId2004 = Ti.UI.createView({
=======
        id: "__alloyId1832"
    });
    $.__views.__alloyId1831.add($.__views.__alloyId1832);
    $.__views.__alloyId1833 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId2004"
    });
    $.__views.scrollView.add($.__views.__alloyId2004);
    $.__views.__alloyId2005 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2005"
    });
    $.__views.__alloyId2004.add($.__views.__alloyId2005);
    $.__views.__alloyId2006 = Ti.UI.createLabel({
=======
        id: "__alloyId1833"
    });
    $.__views.scrollView.add($.__views.__alloyId1833);
    $.__views.__alloyId1834 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1834"
    });
    $.__views.__alloyId1833.add($.__views.__alloyId1834);
    $.__views.__alloyId1835 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Race",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2006"
    });
    $.__views.__alloyId2005.add($.__views.__alloyId2006);
    $.__views.__alloyId2007 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2007"
    });
    $.__views.__alloyId2004.add($.__views.__alloyId2007);
    $.__views.__alloyId2008 = Ti.UI.createLabel({
=======
        id: "__alloyId1835"
    });
    $.__views.__alloyId1834.add($.__views.__alloyId1835);
    $.__views.__alloyId1836 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1836"
    });
    $.__views.__alloyId1833.add($.__views.__alloyId1836);
    $.__views.__alloyId1837 = Ti.UI.createLabel({
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2008"
    });
    $.__views.__alloyId2007.add($.__views.__alloyId2008);
    $.__views.__alloyId2009 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2009"
    });
    $.__views.__alloyId2004.add($.__views.__alloyId2009);
    $.__views.__alloyId2010 = Ti.UI.createLabel({
=======
        id: "__alloyId1837"
    });
    $.__views.__alloyId1836.add($.__views.__alloyId1837);
    $.__views.__alloyId1838 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1838"
    });
    $.__views.__alloyId1833.add($.__views.__alloyId1838);
    $.__views.__alloyId1839 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2010"
    });
    $.__views.__alloyId2009.add($.__views.__alloyId2010);
    $.__views.__alloyId2011 = Ti.UI.createView({
=======
        id: "__alloyId1839"
    });
    $.__views.__alloyId1838.add($.__views.__alloyId1839);
    $.__views.__alloyId1840 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId2011"
    });
    $.__views.scrollView.add($.__views.__alloyId2011);
    $.__views.__alloyId2012 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2012"
    });
    $.__views.__alloyId2011.add($.__views.__alloyId2012);
    $.__views.__alloyId2013 = Ti.UI.createLabel({
=======
        id: "__alloyId1840"
    });
    $.__views.scrollView.add($.__views.__alloyId1840);
    $.__views.__alloyId1841 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1841"
    });
    $.__views.__alloyId1840.add($.__views.__alloyId1841);
    $.__views.__alloyId1842 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Religion",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2013"
    });
    $.__views.__alloyId2012.add($.__views.__alloyId2013);
    $.__views.__alloyId2014 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2014"
    });
    $.__views.__alloyId2011.add($.__views.__alloyId2014);
    $.__views.__alloyId2015 = Ti.UI.createLabel({
=======
        id: "__alloyId1842"
    });
    $.__views.__alloyId1841.add($.__views.__alloyId1842);
    $.__views.__alloyId1843 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1843"
    });
    $.__views.__alloyId1840.add($.__views.__alloyId1843);
    $.__views.__alloyId1844 = Ti.UI.createLabel({
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2015"
    });
    $.__views.__alloyId2014.add($.__views.__alloyId2015);
    $.__views.__alloyId2016 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2016"
    });
    $.__views.__alloyId2011.add($.__views.__alloyId2016);
    $.__views.__alloyId2017 = Ti.UI.createLabel({
=======
        id: "__alloyId1844"
    });
    $.__views.__alloyId1843.add($.__views.__alloyId1844);
    $.__views.__alloyId1845 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1845"
    });
    $.__views.__alloyId1840.add($.__views.__alloyId1845);
    $.__views.__alloyId1846 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2017"
    });
    $.__views.__alloyId2016.add($.__views.__alloyId2017);
    $.__views.__alloyId2018 = Ti.UI.createView({
=======
        id: "__alloyId1846"
    });
    $.__views.__alloyId1845.add($.__views.__alloyId1846);
    $.__views.__alloyId1847 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId2018"
    });
    $.__views.scrollView.add($.__views.__alloyId2018);
    $.__views.__alloyId2019 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2019"
    });
    $.__views.__alloyId2018.add($.__views.__alloyId2019);
    $.__views.__alloyId2020 = Ti.UI.createLabel({
=======
        id: "__alloyId1847"
    });
    $.__views.scrollView.add($.__views.__alloyId1847);
    $.__views.__alloyId1848 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1848"
    });
    $.__views.__alloyId1847.add($.__views.__alloyId1848);
    $.__views.__alloyId1849 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Change Password",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2020"
    });
    $.__views.__alloyId2019.add($.__views.__alloyId2020);
    $.__views.__alloyId2021 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2021"
    });
    $.__views.__alloyId2018.add($.__views.__alloyId2021);
    $.__views.__alloyId2022 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        id: "__alloyId2022"
    });
    $.__views.__alloyId2021.add($.__views.__alloyId2022);
    $.__views.__alloyId2023 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2023"
    });
    $.__views.__alloyId2018.add($.__views.__alloyId2023);
=======
        id: "__alloyId1849"
    });
    $.__views.__alloyId1848.add($.__views.__alloyId1849);
    $.__views.__alloyId1850 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1850"
    });
    $.__views.__alloyId1847.add($.__views.__alloyId1850);
    $.__views.__alloyId1851 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        id: "__alloyId1851"
    });
    $.__views.__alloyId1850.add($.__views.__alloyId1851);
    $.__views.__alloyId1852 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1852"
    });
    $.__views.__alloyId1847.add($.__views.__alloyId1852);
>>>>>>> origin/master
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId2023.add($.__views.arrow);
    $.__views.__alloyId2024 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2024"
    });
    $.__views.profile.add($.__views.__alloyId2024);
    $.__views.__alloyId2025 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1852.add($.__views.arrow);
    $.__views.__alloyId1853 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1853"
    });
    $.__views.profile.add($.__views.__alloyId1853);
    $.__views.__alloyId1854 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Submit",
        color: "white",
        height: "100%",
        width: "49.72%",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId2025"
    });
    $.__views.__alloyId2024.add($.__views.__alloyId2025);
    $.__views.__alloyId2026 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId2026"
    });
    $.__views.__alloyId2024.add($.__views.__alloyId2026);
    $.__views.__alloyId2027 = Ti.UI.createLabel({
=======
        id: "__alloyId1854"
    });
    $.__views.__alloyId1853.add($.__views.__alloyId1854);
    $.__views.__alloyId1855 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId1855"
    });
    $.__views.__alloyId1853.add($.__views.__alloyId1855);
    $.__views.__alloyId1856 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Clear",
        color: "white",
        height: "100%",
        width: "49.72%",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId2027"
    });
    $.__views.__alloyId2024.add($.__views.__alloyId2027);
=======
        id: "__alloyId1856"
    });
    $.__views.__alloyId1853.add($.__views.__alloyId1856);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
<<<<<<< HEAD
    __defers["$.__views.__alloyId1938!click!accountDetails"] && $.__views.__alloyId1938.addEventListener("click", accountDetails);
    __defers["$.__views.__alloyId1940!click!back"] && $.__views.__alloyId1940.addEventListener("click", back);
=======
    __defers["$.__views.__alloyId1767!click!accountDetails"] && $.__views.__alloyId1767.addEventListener("click", accountDetails);
    __defers["$.__views.__alloyId1769!click!back"] && $.__views.__alloyId1769.addEventListener("click", back);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;