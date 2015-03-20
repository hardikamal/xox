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
        text: "Account Details",
        backgroundColor: "transparent",
        height: "50",
        width: "45%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        color: "white",
        id: "__alloyId1767"
    });
    $.__views.__alloyId1766.add($.__views.__alloyId1767);
    accountDetails ? $.__views.__alloyId1767.addEventListener("click", accountDetails) : __defers["$.__views.__alloyId1767!click!accountDetails"] = true;
    $.__views.__alloyId1768 = Ti.UI.createLabel({
        text: "My Profile",
        backgroundColor: "#bf0404",
        height: "50",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: "45%",
        color: "white",
        id: "__alloyId1768"
    });
    $.__views.__alloyId1766.add($.__views.__alloyId1768);
    $.__views.__alloyId1769 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "10%",
        height: "30",
        top: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1769"
    });
    $.__views.__alloyId1766.add($.__views.__alloyId1769);
    back ? $.__views.__alloyId1769.addEventListener("click", back) : __defers["$.__views.__alloyId1769!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F5F5F5"
    });
    $.__views.profile.add($.__views.scrollView);
    $.__views.__alloyId1770 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
        text: "Address",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
        text: "No.8 Jalan Puchong,Selangor...",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
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
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1776"
    });
    $.__views.__alloyId1775.add($.__views.__alloyId1776);
    $.__views.__alloyId1777 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
        text: "NRIC/Passport/Armed Force ID",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
        text: "000000 00 0000",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
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
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1783"
    });
    $.__views.__alloyId1782.add($.__views.__alloyId1783);
    $.__views.__alloyId1784 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
        text: "Email Address",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
        text: "sample@gmail.com",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
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
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1790"
    });
    $.__views.__alloyId1789.add($.__views.__alloyId1790);
    $.__views.__alloyId1791 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
        text: "Birthday",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
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
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1797"
    });
    $.__views.__alloyId1796.add($.__views.__alloyId1797);
    $.__views.__alloyId1798 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
        text: "Gender",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
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
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1804"
    });
    $.__views.__alloyId1803.add($.__views.__alloyId1804);
    $.__views.__alloyId1805 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
        text: "Proessional Group/Job",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
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
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1811"
    });
    $.__views.__alloyId1810.add($.__views.__alloyId1811);
    $.__views.__alloyId1812 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
        text: "Income Group",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
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
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1818"
    });
    $.__views.__alloyId1817.add($.__views.__alloyId1818);
    $.__views.__alloyId1819 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
        text: "Interest",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
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
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1825"
    });
    $.__views.__alloyId1824.add($.__views.__alloyId1825);
    $.__views.__alloyId1826 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
        text: "Marital Status",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
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
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1832"
    });
    $.__views.__alloyId1831.add($.__views.__alloyId1832);
    $.__views.__alloyId1833 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
        text: "Race",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
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
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1839"
    });
    $.__views.__alloyId1838.add($.__views.__alloyId1839);
    $.__views.__alloyId1840 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
        text: "Religion",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
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
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1846"
    });
    $.__views.__alloyId1845.add($.__views.__alloyId1846);
    $.__views.__alloyId1847 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
        text: "Change Password",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1852.add($.__views.arrow);
    $.__views.__alloyId1853 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1853"
    });
    $.__views.profile.add($.__views.__alloyId1853);
    $.__views.__alloyId1854 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        height: "100%",
        width: "49.72%",
        textAlign: "center",
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
        text: "Clear",
        color: "white",
        height: "100%",
        width: "49.72%",
        textAlign: "center",
        id: "__alloyId1856"
    });
    $.__views.__alloyId1853.add($.__views.__alloyId1856);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    __defers["$.__views.__alloyId1767!click!accountDetails"] && $.__views.__alloyId1767.addEventListener("click", accountDetails);
    __defers["$.__views.__alloyId1769!click!back"] && $.__views.__alloyId1769.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;