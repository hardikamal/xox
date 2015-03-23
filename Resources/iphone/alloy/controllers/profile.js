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
<<<<<<< HEAD
    function accountDetails() {
        DRAWER.navigation("accountDetails", 1);
    }
=======
<<<<<<< HEAD
    function accountDetails() {
        DRAWER.navigation("accountDetails", 1);
    }
=======
>>>>>>> origin/master
>>>>>>> origin/master
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
    $.__views.__alloyId1745 = Alloy.createController("_header", {
        id: "__alloyId1745",
=======
<<<<<<< HEAD
    $.__views.__alloyId1910 = Alloy.createController("_header", {
        id: "__alloyId1910",
        __parentSymbol: $.__views.profile
    });
    $.__views.__alloyId1910.setParent($.__views.profile);
    $.__views.__alloyId1911 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1911"
    });
    $.__views.profile.add($.__views.__alloyId1911);
    $.__views.__alloyId1912 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1912"
    });
    $.__views.__alloyId1911.add($.__views.__alloyId1912);
    $.__views.__alloyId1913 = Ti.UI.createLabel({
        text: "Account Details",
        backgroundColor: "transparent",
        height: "50",
        width: "45%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        color: "white",
        id: "__alloyId1913"
    });
    $.__views.__alloyId1912.add($.__views.__alloyId1913);
    accountDetails ? $.__views.__alloyId1913.addEventListener("click", accountDetails) : __defers["$.__views.__alloyId1913!click!accountDetails"] = true;
    $.__views.__alloyId1914 = Ti.UI.createLabel({
        text: "My Profile",
        backgroundColor: "#bf0404",
        height: "50",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: "45%",
        color: "white",
        id: "__alloyId1914"
    });
    $.__views.__alloyId1912.add($.__views.__alloyId1914);
    $.__views.__alloyId1915 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "10%",
        height: "30",
        top: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1915"
    });
    $.__views.__alloyId1912.add($.__views.__alloyId1915);
    back ? $.__views.__alloyId1915.addEventListener("click", back) : __defers["$.__views.__alloyId1915!click!back"] = true;
=======
    $.__views.__alloyId1413 = Alloy.createController("_header", {
        id: "__alloyId1413",
>>>>>>> origin/master
        __parentSymbol: $.__views.profile
    });
    $.__views.__alloyId1745.setParent($.__views.profile);
    $.__views.__alloyId1746 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1746"
    });
    $.__views.profile.add($.__views.__alloyId1746);
    $.__views.__alloyId1747 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1747"
    });
    $.__views.__alloyId1746.add($.__views.__alloyId1747);
    $.__views.__alloyId1748 = Ti.UI.createLabel({
        text: "Account Details",
        backgroundColor: "transparent",
        height: "50",
        width: "45%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        color: "white",
        id: "__alloyId1748"
    });
    $.__views.__alloyId1747.add($.__views.__alloyId1748);
    accountDetails ? $.__views.__alloyId1748.addEventListener("click", accountDetails) : __defers["$.__views.__alloyId1748!click!accountDetails"] = true;
    $.__views.__alloyId1749 = Ti.UI.createLabel({
        text: "My Profile",
        backgroundColor: "#bf0404",
        height: "50",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: "45%",
        color: "white",
        id: "__alloyId1749"
    });
    $.__views.__alloyId1747.add($.__views.__alloyId1749);
    $.__views.__alloyId1750 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "10%",
        height: "30",
        top: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1750"
    });
<<<<<<< HEAD
    $.__views.__alloyId1747.add($.__views.__alloyId1750);
    back ? $.__views.__alloyId1750.addEventListener("click", back) : __defers["$.__views.__alloyId1750!click!back"] = true;
=======
    $.__views.__alloyId1414.add($.__views.__alloyId1416);
    back ? $.__views.__alloyId1416.addEventListener("click", back) : __defers["$.__views.__alloyId1416!click!back"] = true;
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F5F5F5"
    });
    $.__views.profile.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId1751 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1916 = Ti.UI.createView({
=======
    $.__views.__alloyId1417 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1751"
=======
<<<<<<< HEAD
        id: "__alloyId1916"
    });
    $.__views.scrollView.add($.__views.__alloyId1916);
    $.__views.__alloyId1917 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1917"
    });
    $.__views.__alloyId1916.add($.__views.__alloyId1917);
    $.__views.__alloyId1918 = Ti.UI.createLabel({
=======
        id: "__alloyId1417"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1751);
    $.__views.__alloyId1752 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1752"
    });
<<<<<<< HEAD
    $.__views.__alloyId1751.add($.__views.__alloyId1752);
    $.__views.__alloyId1753 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1417.add($.__views.__alloyId1418);
    $.__views.__alloyId1419 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Address",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1753"
=======
<<<<<<< HEAD
        id: "__alloyId1918"
    });
    $.__views.__alloyId1917.add($.__views.__alloyId1918);
    $.__views.__alloyId1919 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1919"
    });
    $.__views.__alloyId1916.add($.__views.__alloyId1919);
    $.__views.__alloyId1920 = Ti.UI.createLabel({
=======
        id: "__alloyId1419"
>>>>>>> origin/master
    });
    $.__views.__alloyId1752.add($.__views.__alloyId1753);
    $.__views.__alloyId1754 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1754"
    });
<<<<<<< HEAD
    $.__views.__alloyId1751.add($.__views.__alloyId1754);
    $.__views.__alloyId1755 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1417.add($.__views.__alloyId1420);
    $.__views.__alloyId1421 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "No.8 Jalan Puchong,Selangor...",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1755"
=======
<<<<<<< HEAD
        id: "__alloyId1920"
    });
    $.__views.__alloyId1919.add($.__views.__alloyId1920);
    $.__views.__alloyId1921 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1921"
    });
    $.__views.__alloyId1916.add($.__views.__alloyId1921);
    $.__views.__alloyId1922 = Ti.UI.createLabel({
=======
        id: "__alloyId1421"
>>>>>>> origin/master
    });
    $.__views.__alloyId1754.add($.__views.__alloyId1755);
    $.__views.__alloyId1756 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1756"
    });
<<<<<<< HEAD
    $.__views.__alloyId1751.add($.__views.__alloyId1756);
    $.__views.__alloyId1757 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1417.add($.__views.__alloyId1422);
    $.__views.__alloyId1423 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1757"
    });
    $.__views.__alloyId1756.add($.__views.__alloyId1757);
    $.__views.__alloyId1758 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId1922"
    });
    $.__views.__alloyId1921.add($.__views.__alloyId1922);
    $.__views.__alloyId1923 = Ti.UI.createView({
=======
<<<<<<< Updated upstream
        id: "__alloyId1423"
=======
        id: "__alloyId1226"
>>>>>>> Stashed changes
    });
    $.__views.__alloyId1422.add($.__views.__alloyId1423);
    $.__views.__alloyId1424 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1758"
=======
<<<<<<< HEAD
        id: "__alloyId1923"
    });
    $.__views.scrollView.add($.__views.__alloyId1923);
    $.__views.__alloyId1924 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1924"
    });
    $.__views.__alloyId1923.add($.__views.__alloyId1924);
    $.__views.__alloyId1925 = Ti.UI.createLabel({
=======
        id: "__alloyId1424"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1758);
    $.__views.__alloyId1759 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1759"
    });
<<<<<<< HEAD
    $.__views.__alloyId1758.add($.__views.__alloyId1759);
    $.__views.__alloyId1760 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1424.add($.__views.__alloyId1425);
    $.__views.__alloyId1426 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "NRIC/Passport/Armed Force ID",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1760"
=======
<<<<<<< HEAD
        id: "__alloyId1925"
    });
    $.__views.__alloyId1924.add($.__views.__alloyId1925);
    $.__views.__alloyId1926 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1926"
    });
    $.__views.__alloyId1923.add($.__views.__alloyId1926);
    $.__views.__alloyId1927 = Ti.UI.createLabel({
=======
        id: "__alloyId1426"
>>>>>>> origin/master
    });
    $.__views.__alloyId1759.add($.__views.__alloyId1760);
    $.__views.__alloyId1761 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1761"
    });
<<<<<<< HEAD
    $.__views.__alloyId1758.add($.__views.__alloyId1761);
    $.__views.__alloyId1762 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1424.add($.__views.__alloyId1427);
    $.__views.__alloyId1428 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "000000 00 0000",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1762"
=======
<<<<<<< HEAD
        id: "__alloyId1927"
    });
    $.__views.__alloyId1926.add($.__views.__alloyId1927);
    $.__views.__alloyId1928 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1928"
    });
    $.__views.__alloyId1923.add($.__views.__alloyId1928);
    $.__views.__alloyId1929 = Ti.UI.createLabel({
=======
        id: "__alloyId1428"
>>>>>>> origin/master
    });
    $.__views.__alloyId1761.add($.__views.__alloyId1762);
    $.__views.__alloyId1763 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1763"
    });
<<<<<<< HEAD
    $.__views.__alloyId1758.add($.__views.__alloyId1763);
    $.__views.__alloyId1764 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1424.add($.__views.__alloyId1429);
    $.__views.__alloyId1430 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1764"
    });
    $.__views.__alloyId1763.add($.__views.__alloyId1764);
    $.__views.__alloyId1765 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId1929"
    });
    $.__views.__alloyId1928.add($.__views.__alloyId1929);
    $.__views.__alloyId1930 = Ti.UI.createView({
=======
<<<<<<< Updated upstream
        id: "__alloyId1430"
=======
        id: "__alloyId1233"
>>>>>>> Stashed changes
    });
    $.__views.__alloyId1429.add($.__views.__alloyId1430);
    $.__views.__alloyId1431 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1765"
=======
<<<<<<< HEAD
        id: "__alloyId1930"
    });
    $.__views.scrollView.add($.__views.__alloyId1930);
    $.__views.__alloyId1931 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1931"
    });
    $.__views.__alloyId1930.add($.__views.__alloyId1931);
    $.__views.__alloyId1932 = Ti.UI.createLabel({
=======
        id: "__alloyId1431"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1765);
    $.__views.__alloyId1766 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1766"
    });
<<<<<<< HEAD
    $.__views.__alloyId1765.add($.__views.__alloyId1766);
    $.__views.__alloyId1767 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1431.add($.__views.__alloyId1432);
    $.__views.__alloyId1433 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Email Address",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1767"
=======
<<<<<<< HEAD
        id: "__alloyId1932"
    });
    $.__views.__alloyId1931.add($.__views.__alloyId1932);
    $.__views.__alloyId1933 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1933"
    });
    $.__views.__alloyId1930.add($.__views.__alloyId1933);
    $.__views.__alloyId1934 = Ti.UI.createLabel({
=======
        id: "__alloyId1433"
>>>>>>> origin/master
    });
    $.__views.__alloyId1766.add($.__views.__alloyId1767);
    $.__views.__alloyId1768 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1768"
    });
<<<<<<< HEAD
    $.__views.__alloyId1765.add($.__views.__alloyId1768);
    $.__views.__alloyId1769 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1431.add($.__views.__alloyId1434);
    $.__views.__alloyId1435 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "sample@gmail.com",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1769"
=======
<<<<<<< HEAD
        id: "__alloyId1934"
    });
    $.__views.__alloyId1933.add($.__views.__alloyId1934);
    $.__views.__alloyId1935 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1935"
    });
    $.__views.__alloyId1930.add($.__views.__alloyId1935);
    $.__views.__alloyId1936 = Ti.UI.createLabel({
=======
        id: "__alloyId1435"
>>>>>>> origin/master
    });
    $.__views.__alloyId1768.add($.__views.__alloyId1769);
    $.__views.__alloyId1770 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1770"
    });
<<<<<<< HEAD
    $.__views.__alloyId1765.add($.__views.__alloyId1770);
    $.__views.__alloyId1771 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1431.add($.__views.__alloyId1436);
    $.__views.__alloyId1437 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1771"
    });
    $.__views.__alloyId1770.add($.__views.__alloyId1771);
    $.__views.__alloyId1772 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId1936"
    });
    $.__views.__alloyId1935.add($.__views.__alloyId1936);
    $.__views.__alloyId1937 = Ti.UI.createView({
=======
<<<<<<< Updated upstream
        id: "__alloyId1437"
=======
        id: "__alloyId1240"
>>>>>>> Stashed changes
    });
    $.__views.__alloyId1436.add($.__views.__alloyId1437);
    $.__views.__alloyId1438 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1772"
=======
<<<<<<< HEAD
        id: "__alloyId1937"
    });
    $.__views.scrollView.add($.__views.__alloyId1937);
    $.__views.__alloyId1938 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1938"
    });
    $.__views.__alloyId1937.add($.__views.__alloyId1938);
    $.__views.__alloyId1939 = Ti.UI.createLabel({
=======
        id: "__alloyId1438"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1772);
    $.__views.__alloyId1773 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1773"
    });
<<<<<<< HEAD
    $.__views.__alloyId1772.add($.__views.__alloyId1773);
    $.__views.__alloyId1774 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1438.add($.__views.__alloyId1439);
    $.__views.__alloyId1440 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Birthday",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1774"
=======
<<<<<<< HEAD
        id: "__alloyId1939"
    });
    $.__views.__alloyId1938.add($.__views.__alloyId1939);
    $.__views.__alloyId1940 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1940"
    });
    $.__views.__alloyId1937.add($.__views.__alloyId1940);
    $.__views.__alloyId1941 = Ti.UI.createLabel({
=======
        id: "__alloyId1440"
>>>>>>> origin/master
    });
    $.__views.__alloyId1773.add($.__views.__alloyId1774);
    $.__views.__alloyId1775 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1775"
    });
<<<<<<< HEAD
    $.__views.__alloyId1772.add($.__views.__alloyId1775);
    $.__views.__alloyId1776 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1438.add($.__views.__alloyId1441);
    $.__views.__alloyId1442 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1776"
=======
<<<<<<< HEAD
        id: "__alloyId1941"
    });
    $.__views.__alloyId1940.add($.__views.__alloyId1941);
    $.__views.__alloyId1942 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1942"
    });
    $.__views.__alloyId1937.add($.__views.__alloyId1942);
    $.__views.__alloyId1943 = Ti.UI.createLabel({
=======
        id: "__alloyId1442"
>>>>>>> origin/master
    });
    $.__views.__alloyId1775.add($.__views.__alloyId1776);
    $.__views.__alloyId1777 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1777"
    });
<<<<<<< HEAD
    $.__views.__alloyId1772.add($.__views.__alloyId1777);
    $.__views.__alloyId1778 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1438.add($.__views.__alloyId1443);
    $.__views.__alloyId1444 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1778"
    });
    $.__views.__alloyId1777.add($.__views.__alloyId1778);
    $.__views.__alloyId1779 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId1943"
    });
    $.__views.__alloyId1942.add($.__views.__alloyId1943);
    $.__views.__alloyId1944 = Ti.UI.createView({
=======
<<<<<<< Updated upstream
        id: "__alloyId1444"
=======
        id: "__alloyId1247"
>>>>>>> Stashed changes
    });
    $.__views.__alloyId1443.add($.__views.__alloyId1444);
    $.__views.__alloyId1445 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1779"
=======
<<<<<<< HEAD
        id: "__alloyId1944"
    });
    $.__views.scrollView.add($.__views.__alloyId1944);
    $.__views.__alloyId1945 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1945"
    });
    $.__views.__alloyId1944.add($.__views.__alloyId1945);
    $.__views.__alloyId1946 = Ti.UI.createLabel({
=======
        id: "__alloyId1445"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1779);
    $.__views.__alloyId1780 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1780"
    });
<<<<<<< HEAD
    $.__views.__alloyId1779.add($.__views.__alloyId1780);
    $.__views.__alloyId1781 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1445.add($.__views.__alloyId1446);
    $.__views.__alloyId1447 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Gender",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1781"
=======
<<<<<<< HEAD
        id: "__alloyId1946"
    });
    $.__views.__alloyId1945.add($.__views.__alloyId1946);
    $.__views.__alloyId1947 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1947"
    });
    $.__views.__alloyId1944.add($.__views.__alloyId1947);
    $.__views.__alloyId1948 = Ti.UI.createLabel({
=======
        id: "__alloyId1447"
>>>>>>> origin/master
    });
    $.__views.__alloyId1780.add($.__views.__alloyId1781);
    $.__views.__alloyId1782 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1782"
    });
<<<<<<< HEAD
    $.__views.__alloyId1779.add($.__views.__alloyId1782);
    $.__views.__alloyId1783 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1445.add($.__views.__alloyId1448);
    $.__views.__alloyId1449 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1783"
=======
<<<<<<< HEAD
        id: "__alloyId1948"
    });
    $.__views.__alloyId1947.add($.__views.__alloyId1948);
    $.__views.__alloyId1949 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1949"
    });
    $.__views.__alloyId1944.add($.__views.__alloyId1949);
    $.__views.__alloyId1950 = Ti.UI.createLabel({
=======
        id: "__alloyId1449"
>>>>>>> origin/master
    });
    $.__views.__alloyId1782.add($.__views.__alloyId1783);
    $.__views.__alloyId1784 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1784"
    });
<<<<<<< HEAD
    $.__views.__alloyId1779.add($.__views.__alloyId1784);
    $.__views.__alloyId1785 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1445.add($.__views.__alloyId1450);
    $.__views.__alloyId1451 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1785"
    });
    $.__views.__alloyId1784.add($.__views.__alloyId1785);
    $.__views.__alloyId1786 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId1950"
    });
    $.__views.__alloyId1949.add($.__views.__alloyId1950);
    $.__views.__alloyId1951 = Ti.UI.createView({
=======
<<<<<<< Updated upstream
        id: "__alloyId1451"
=======
        id: "__alloyId1254"
>>>>>>> Stashed changes
    });
    $.__views.__alloyId1450.add($.__views.__alloyId1451);
    $.__views.__alloyId1452 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1786"
=======
<<<<<<< HEAD
        id: "__alloyId1951"
    });
    $.__views.scrollView.add($.__views.__alloyId1951);
    $.__views.__alloyId1952 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1952"
    });
    $.__views.__alloyId1951.add($.__views.__alloyId1952);
    $.__views.__alloyId1953 = Ti.UI.createLabel({
=======
        id: "__alloyId1452"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1786);
    $.__views.__alloyId1787 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1787"
    });
<<<<<<< HEAD
    $.__views.__alloyId1786.add($.__views.__alloyId1787);
    $.__views.__alloyId1788 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1452.add($.__views.__alloyId1453);
    $.__views.__alloyId1454 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Proessional Group/Job",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1788"
=======
<<<<<<< HEAD
        id: "__alloyId1953"
    });
    $.__views.__alloyId1952.add($.__views.__alloyId1953);
    $.__views.__alloyId1954 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1954"
    });
    $.__views.__alloyId1951.add($.__views.__alloyId1954);
    $.__views.__alloyId1955 = Ti.UI.createLabel({
=======
        id: "__alloyId1454"
>>>>>>> origin/master
    });
    $.__views.__alloyId1787.add($.__views.__alloyId1788);
    $.__views.__alloyId1789 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1789"
    });
<<<<<<< HEAD
    $.__views.__alloyId1786.add($.__views.__alloyId1789);
    $.__views.__alloyId1790 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1452.add($.__views.__alloyId1455);
    $.__views.__alloyId1456 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1790"
=======
<<<<<<< HEAD
        id: "__alloyId1955"
    });
    $.__views.__alloyId1954.add($.__views.__alloyId1955);
    $.__views.__alloyId1956 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1956"
    });
    $.__views.__alloyId1951.add($.__views.__alloyId1956);
    $.__views.__alloyId1957 = Ti.UI.createLabel({
=======
        id: "__alloyId1456"
>>>>>>> origin/master
    });
    $.__views.__alloyId1789.add($.__views.__alloyId1790);
    $.__views.__alloyId1791 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1791"
    });
<<<<<<< HEAD
    $.__views.__alloyId1786.add($.__views.__alloyId1791);
    $.__views.__alloyId1792 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1452.add($.__views.__alloyId1457);
    $.__views.__alloyId1458 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1792"
    });
    $.__views.__alloyId1791.add($.__views.__alloyId1792);
    $.__views.__alloyId1793 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId1957"
    });
    $.__views.__alloyId1956.add($.__views.__alloyId1957);
    $.__views.__alloyId1958 = Ti.UI.createView({
=======
<<<<<<< Updated upstream
        id: "__alloyId1458"
=======
        id: "__alloyId1261"
>>>>>>> Stashed changes
    });
    $.__views.__alloyId1457.add($.__views.__alloyId1458);
    $.__views.__alloyId1459 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1793"
=======
<<<<<<< HEAD
        id: "__alloyId1958"
    });
    $.__views.scrollView.add($.__views.__alloyId1958);
    $.__views.__alloyId1959 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1959"
    });
    $.__views.__alloyId1958.add($.__views.__alloyId1959);
    $.__views.__alloyId1960 = Ti.UI.createLabel({
=======
        id: "__alloyId1459"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1793);
    $.__views.__alloyId1794 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1794"
    });
<<<<<<< HEAD
    $.__views.__alloyId1793.add($.__views.__alloyId1794);
    $.__views.__alloyId1795 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1459.add($.__views.__alloyId1460);
    $.__views.__alloyId1461 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Income Group",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1795"
=======
<<<<<<< HEAD
        id: "__alloyId1960"
    });
    $.__views.__alloyId1959.add($.__views.__alloyId1960);
    $.__views.__alloyId1961 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1961"
    });
    $.__views.__alloyId1958.add($.__views.__alloyId1961);
    $.__views.__alloyId1962 = Ti.UI.createLabel({
=======
        id: "__alloyId1461"
>>>>>>> origin/master
    });
    $.__views.__alloyId1794.add($.__views.__alloyId1795);
    $.__views.__alloyId1796 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1796"
    });
<<<<<<< HEAD
    $.__views.__alloyId1793.add($.__views.__alloyId1796);
    $.__views.__alloyId1797 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1459.add($.__views.__alloyId1462);
    $.__views.__alloyId1463 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1797"
=======
<<<<<<< HEAD
        id: "__alloyId1962"
    });
    $.__views.__alloyId1961.add($.__views.__alloyId1962);
    $.__views.__alloyId1963 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1963"
    });
    $.__views.__alloyId1958.add($.__views.__alloyId1963);
    $.__views.__alloyId1964 = Ti.UI.createLabel({
=======
        id: "__alloyId1463"
>>>>>>> origin/master
    });
    $.__views.__alloyId1796.add($.__views.__alloyId1797);
    $.__views.__alloyId1798 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1798"
    });
<<<<<<< HEAD
    $.__views.__alloyId1793.add($.__views.__alloyId1798);
    $.__views.__alloyId1799 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1459.add($.__views.__alloyId1464);
    $.__views.__alloyId1465 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1799"
    });
    $.__views.__alloyId1798.add($.__views.__alloyId1799);
    $.__views.__alloyId1800 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId1964"
    });
    $.__views.__alloyId1963.add($.__views.__alloyId1964);
    $.__views.__alloyId1965 = Ti.UI.createView({
=======
<<<<<<< Updated upstream
        id: "__alloyId1465"
=======
        id: "__alloyId1268"
>>>>>>> Stashed changes
    });
    $.__views.__alloyId1464.add($.__views.__alloyId1465);
    $.__views.__alloyId1466 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1800"
=======
<<<<<<< HEAD
        id: "__alloyId1965"
    });
    $.__views.scrollView.add($.__views.__alloyId1965);
    $.__views.__alloyId1966 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1966"
    });
    $.__views.__alloyId1965.add($.__views.__alloyId1966);
    $.__views.__alloyId1967 = Ti.UI.createLabel({
=======
        id: "__alloyId1466"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1800);
    $.__views.__alloyId1801 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1801"
    });
<<<<<<< HEAD
    $.__views.__alloyId1800.add($.__views.__alloyId1801);
    $.__views.__alloyId1802 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1466.add($.__views.__alloyId1467);
    $.__views.__alloyId1468 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Interest",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1802"
=======
<<<<<<< HEAD
        id: "__alloyId1967"
    });
    $.__views.__alloyId1966.add($.__views.__alloyId1967);
    $.__views.__alloyId1968 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1968"
    });
    $.__views.__alloyId1965.add($.__views.__alloyId1968);
    $.__views.__alloyId1969 = Ti.UI.createLabel({
=======
        id: "__alloyId1468"
>>>>>>> origin/master
    });
    $.__views.__alloyId1801.add($.__views.__alloyId1802);
    $.__views.__alloyId1803 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1803"
    });
<<<<<<< HEAD
    $.__views.__alloyId1800.add($.__views.__alloyId1803);
    $.__views.__alloyId1804 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1466.add($.__views.__alloyId1469);
    $.__views.__alloyId1470 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1804"
=======
<<<<<<< HEAD
        id: "__alloyId1969"
    });
    $.__views.__alloyId1968.add($.__views.__alloyId1969);
    $.__views.__alloyId1970 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1970"
    });
    $.__views.__alloyId1965.add($.__views.__alloyId1970);
    $.__views.__alloyId1971 = Ti.UI.createLabel({
=======
        id: "__alloyId1470"
>>>>>>> origin/master
    });
    $.__views.__alloyId1803.add($.__views.__alloyId1804);
    $.__views.__alloyId1805 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1805"
    });
<<<<<<< HEAD
    $.__views.__alloyId1800.add($.__views.__alloyId1805);
    $.__views.__alloyId1806 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1466.add($.__views.__alloyId1471);
    $.__views.__alloyId1472 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1806"
    });
    $.__views.__alloyId1805.add($.__views.__alloyId1806);
    $.__views.__alloyId1807 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId1971"
    });
    $.__views.__alloyId1970.add($.__views.__alloyId1971);
    $.__views.__alloyId1972 = Ti.UI.createView({
=======
<<<<<<< Updated upstream
        id: "__alloyId1472"
=======
        id: "__alloyId1275"
>>>>>>> Stashed changes
    });
    $.__views.__alloyId1471.add($.__views.__alloyId1472);
    $.__views.__alloyId1473 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1807"
=======
<<<<<<< HEAD
        id: "__alloyId1972"
    });
    $.__views.scrollView.add($.__views.__alloyId1972);
    $.__views.__alloyId1973 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1973"
    });
    $.__views.__alloyId1972.add($.__views.__alloyId1973);
    $.__views.__alloyId1974 = Ti.UI.createLabel({
=======
        id: "__alloyId1473"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1807);
    $.__views.__alloyId1808 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1808"
    });
<<<<<<< HEAD
    $.__views.__alloyId1807.add($.__views.__alloyId1808);
    $.__views.__alloyId1809 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1473.add($.__views.__alloyId1474);
    $.__views.__alloyId1475 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Marital Status",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1809"
=======
<<<<<<< HEAD
        id: "__alloyId1974"
    });
    $.__views.__alloyId1973.add($.__views.__alloyId1974);
    $.__views.__alloyId1975 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1975"
    });
    $.__views.__alloyId1972.add($.__views.__alloyId1975);
    $.__views.__alloyId1976 = Ti.UI.createLabel({
=======
        id: "__alloyId1475"
>>>>>>> origin/master
    });
    $.__views.__alloyId1808.add($.__views.__alloyId1809);
    $.__views.__alloyId1810 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1810"
    });
<<<<<<< HEAD
    $.__views.__alloyId1807.add($.__views.__alloyId1810);
    $.__views.__alloyId1811 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1473.add($.__views.__alloyId1476);
    $.__views.__alloyId1477 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1811"
=======
<<<<<<< HEAD
        id: "__alloyId1976"
    });
    $.__views.__alloyId1975.add($.__views.__alloyId1976);
    $.__views.__alloyId1977 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1977"
    });
    $.__views.__alloyId1972.add($.__views.__alloyId1977);
    $.__views.__alloyId1978 = Ti.UI.createLabel({
=======
        id: "__alloyId1477"
>>>>>>> origin/master
    });
    $.__views.__alloyId1810.add($.__views.__alloyId1811);
    $.__views.__alloyId1812 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1812"
    });
<<<<<<< HEAD
    $.__views.__alloyId1807.add($.__views.__alloyId1812);
    $.__views.__alloyId1813 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1473.add($.__views.__alloyId1478);
    $.__views.__alloyId1479 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1813"
    });
    $.__views.__alloyId1812.add($.__views.__alloyId1813);
    $.__views.__alloyId1814 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId1978"
    });
    $.__views.__alloyId1977.add($.__views.__alloyId1978);
    $.__views.__alloyId1979 = Ti.UI.createView({
=======
<<<<<<< Updated upstream
        id: "__alloyId1479"
=======
        id: "__alloyId1282"
>>>>>>> Stashed changes
    });
    $.__views.__alloyId1478.add($.__views.__alloyId1479);
    $.__views.__alloyId1480 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1814"
=======
<<<<<<< HEAD
        id: "__alloyId1979"
    });
    $.__views.scrollView.add($.__views.__alloyId1979);
    $.__views.__alloyId1980 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1980"
    });
    $.__views.__alloyId1979.add($.__views.__alloyId1980);
    $.__views.__alloyId1981 = Ti.UI.createLabel({
=======
        id: "__alloyId1480"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1814);
    $.__views.__alloyId1815 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1815"
    });
<<<<<<< HEAD
    $.__views.__alloyId1814.add($.__views.__alloyId1815);
    $.__views.__alloyId1816 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1480.add($.__views.__alloyId1481);
    $.__views.__alloyId1482 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Race",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1816"
=======
<<<<<<< HEAD
        id: "__alloyId1981"
    });
    $.__views.__alloyId1980.add($.__views.__alloyId1981);
    $.__views.__alloyId1982 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1982"
    });
    $.__views.__alloyId1979.add($.__views.__alloyId1982);
    $.__views.__alloyId1983 = Ti.UI.createLabel({
=======
        id: "__alloyId1482"
>>>>>>> origin/master
    });
    $.__views.__alloyId1815.add($.__views.__alloyId1816);
    $.__views.__alloyId1817 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1817"
    });
<<<<<<< HEAD
    $.__views.__alloyId1814.add($.__views.__alloyId1817);
    $.__views.__alloyId1818 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1480.add($.__views.__alloyId1483);
    $.__views.__alloyId1484 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1818"
=======
<<<<<<< HEAD
        id: "__alloyId1983"
    });
    $.__views.__alloyId1982.add($.__views.__alloyId1983);
    $.__views.__alloyId1984 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1984"
    });
    $.__views.__alloyId1979.add($.__views.__alloyId1984);
    $.__views.__alloyId1985 = Ti.UI.createLabel({
=======
        id: "__alloyId1484"
>>>>>>> origin/master
    });
    $.__views.__alloyId1817.add($.__views.__alloyId1818);
    $.__views.__alloyId1819 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1819"
    });
<<<<<<< HEAD
    $.__views.__alloyId1814.add($.__views.__alloyId1819);
    $.__views.__alloyId1820 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1480.add($.__views.__alloyId1485);
    $.__views.__alloyId1486 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1820"
    });
    $.__views.__alloyId1819.add($.__views.__alloyId1820);
    $.__views.__alloyId1821 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId1985"
    });
    $.__views.__alloyId1984.add($.__views.__alloyId1985);
    $.__views.__alloyId1986 = Ti.UI.createView({
=======
<<<<<<< Updated upstream
        id: "__alloyId1486"
=======
        id: "__alloyId1289"
>>>>>>> Stashed changes
    });
    $.__views.__alloyId1485.add($.__views.__alloyId1486);
    $.__views.__alloyId1487 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1821"
=======
<<<<<<< HEAD
        id: "__alloyId1986"
    });
    $.__views.scrollView.add($.__views.__alloyId1986);
    $.__views.__alloyId1987 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1987"
    });
    $.__views.__alloyId1986.add($.__views.__alloyId1987);
    $.__views.__alloyId1988 = Ti.UI.createLabel({
=======
        id: "__alloyId1487"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1821);
    $.__views.__alloyId1822 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1822"
    });
<<<<<<< HEAD
    $.__views.__alloyId1821.add($.__views.__alloyId1822);
    $.__views.__alloyId1823 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1487.add($.__views.__alloyId1488);
    $.__views.__alloyId1489 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Religion",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1823"
=======
<<<<<<< HEAD
        id: "__alloyId1988"
    });
    $.__views.__alloyId1987.add($.__views.__alloyId1988);
    $.__views.__alloyId1989 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1989"
    });
    $.__views.__alloyId1986.add($.__views.__alloyId1989);
    $.__views.__alloyId1990 = Ti.UI.createLabel({
=======
        id: "__alloyId1489"
>>>>>>> origin/master
    });
    $.__views.__alloyId1822.add($.__views.__alloyId1823);
    $.__views.__alloyId1824 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1824"
    });
<<<<<<< HEAD
    $.__views.__alloyId1821.add($.__views.__alloyId1824);
    $.__views.__alloyId1825 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1487.add($.__views.__alloyId1490);
    $.__views.__alloyId1491 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1825"
=======
<<<<<<< HEAD
        id: "__alloyId1990"
    });
    $.__views.__alloyId1989.add($.__views.__alloyId1990);
    $.__views.__alloyId1991 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1991"
    });
    $.__views.__alloyId1986.add($.__views.__alloyId1991);
    $.__views.__alloyId1992 = Ti.UI.createLabel({
=======
        id: "__alloyId1491"
>>>>>>> origin/master
    });
    $.__views.__alloyId1824.add($.__views.__alloyId1825);
    $.__views.__alloyId1826 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1826"
    });
<<<<<<< HEAD
    $.__views.__alloyId1821.add($.__views.__alloyId1826);
    $.__views.__alloyId1827 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1487.add($.__views.__alloyId1492);
    $.__views.__alloyId1493 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId1827"
    });
    $.__views.__alloyId1826.add($.__views.__alloyId1827);
    $.__views.__alloyId1828 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId1992"
    });
    $.__views.__alloyId1991.add($.__views.__alloyId1992);
    $.__views.__alloyId1993 = Ti.UI.createView({
=======
<<<<<<< Updated upstream
        id: "__alloyId1493"
=======
        id: "__alloyId1296"
>>>>>>> Stashed changes
    });
    $.__views.__alloyId1492.add($.__views.__alloyId1493);
    $.__views.__alloyId1494 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1828"
    });
    $.__views.scrollView.add($.__views.__alloyId1828);
    $.__views.__alloyId1829 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId1993"
    });
    $.__views.scrollView.add($.__views.__alloyId1993);
    $.__views.__alloyId1994 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1994"
    });
    $.__views.__alloyId1993.add($.__views.__alloyId1994);
    $.__views.__alloyId1995 = Ti.UI.createLabel({
=======
        id: "__alloyId1494"
    });
<<<<<<< Updated upstream
    $.__views.scrollView.add($.__views.__alloyId1494);
    $.__views.__alloyId1495 = Ti.UI.createView({
=======
    $.__views.scrollView.add($.__views.__alloyId1297);
    $.__views.__alloyId1298 = Ti.UI.createView({
>>>>>>> Stashed changes
>>>>>>> origin/master
        width: "40%",
        height: "100%",
        id: "__alloyId1829"
    });
<<<<<<< HEAD
    $.__views.__alloyId1828.add($.__views.__alloyId1829);
    $.__views.__alloyId1830 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1494.add($.__views.__alloyId1495);
    $.__views.__alloyId1496 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Change Password",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1830"
=======
<<<<<<< HEAD
        id: "__alloyId1995"
    });
    $.__views.__alloyId1994.add($.__views.__alloyId1995);
    $.__views.__alloyId1996 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1996"
    });
    $.__views.__alloyId1993.add($.__views.__alloyId1996);
    $.__views.__alloyId1997 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        id: "__alloyId1997"
    });
    $.__views.__alloyId1996.add($.__views.__alloyId1997);
    $.__views.__alloyId1998 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1998"
    });
    $.__views.__alloyId1993.add($.__views.__alloyId1998);
=======
        id: "__alloyId1496"
>>>>>>> origin/master
    });
    $.__views.__alloyId1829.add($.__views.__alloyId1830);
    $.__views.__alloyId1831 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1831"
    });
    $.__views.__alloyId1828.add($.__views.__alloyId1831);
    $.__views.__alloyId1832 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        id: "__alloyId1832"
    });
    $.__views.__alloyId1831.add($.__views.__alloyId1832);
    $.__views.__alloyId1833 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1833"
    });
<<<<<<< HEAD
    $.__views.__alloyId1828.add($.__views.__alloyId1833);
=======
    $.__views.__alloyId1494.add($.__views.__alloyId1499);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId1833.add($.__views.arrow);
    $.__views.__alloyId1834 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1998.add($.__views.arrow);
    $.__views.__alloyId1999 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1999"
    });
    $.__views.profile.add($.__views.__alloyId1999);
    $.__views.__alloyId2000 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1499.add($.__views.arrow);
    $.__views.__alloyId1500 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1834"
    });
<<<<<<< HEAD
    $.__views.profile.add($.__views.__alloyId1834);
    $.__views.__alloyId1835 = Ti.UI.createLabel({
=======
    $.__views.profile.add($.__views.__alloyId1500);
    $.__views.__alloyId1501 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Submit",
        color: "white",
        height: "100%",
        width: "49.72%",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId1835"
=======
<<<<<<< HEAD
        id: "__alloyId2000"
    });
    $.__views.__alloyId1999.add($.__views.__alloyId2000);
    $.__views.__alloyId2001 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId2001"
    });
    $.__views.__alloyId1999.add($.__views.__alloyId2001);
    $.__views.__alloyId2002 = Ti.UI.createLabel({
=======
        id: "__alloyId1501"
>>>>>>> origin/master
    });
    $.__views.__alloyId1834.add($.__views.__alloyId1835);
    $.__views.__alloyId1836 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId1836"
    });
<<<<<<< HEAD
    $.__views.__alloyId1834.add($.__views.__alloyId1836);
    $.__views.__alloyId1837 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1500.add($.__views.__alloyId1502);
    $.__views.__alloyId1503 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Clear",
        color: "white",
        height: "100%",
        width: "49.72%",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId1837"
    });
    $.__views.__alloyId1834.add($.__views.__alloyId1837);
=======
<<<<<<< HEAD
        id: "__alloyId2002"
    });
    $.__views.__alloyId1999.add($.__views.__alloyId2002);
=======
        id: "__alloyId1503"
    });
    $.__views.__alloyId1500.add($.__views.__alloyId1503);
>>>>>>> origin/master
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
<<<<<<< HEAD
    __defers["$.__views.__alloyId1748!click!accountDetails"] && $.__views.__alloyId1748.addEventListener("click", accountDetails);
    __defers["$.__views.__alloyId1750!click!back"] && $.__views.__alloyId1750.addEventListener("click", back);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId1913!click!accountDetails"] && $.__views.__alloyId1913.addEventListener("click", accountDetails);
    __defers["$.__views.__alloyId1915!click!back"] && $.__views.__alloyId1915.addEventListener("click", back);
=======
<<<<<<< Updated upstream
    __defers["$.__views.__alloyId1416!click!back"] && $.__views.__alloyId1416.addEventListener("click", back);
=======
    __defers["$.__views.__alloyId1219!click!back"] && $.__views.__alloyId1219.addEventListener("click", back);
>>>>>>> Stashed changes
>>>>>>> origin/master
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;