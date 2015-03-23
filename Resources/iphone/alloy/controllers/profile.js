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
        __parentSymbol: $.__views.profile
    });
    $.__views.__alloyId1413.setParent($.__views.profile);
    $.__views.__alloyId1414 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1414"
    });
    $.__views.profile.add($.__views.__alloyId1414);
    $.__views.__alloyId1415 = Ti.UI.createLabel({
        text: "My Profile",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1415"
    });
    $.__views.__alloyId1414.add($.__views.__alloyId1415);
    $.__views.__alloyId1416 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1416"
    });
    $.__views.__alloyId1414.add($.__views.__alloyId1416);
    back ? $.__views.__alloyId1416.addEventListener("click", back) : __defers["$.__views.__alloyId1416!click!back"] = true;
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F5F5F5"
    });
    $.__views.profile.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId1916 = Ti.UI.createView({
=======
    $.__views.__alloyId1417 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
    });
    $.__views.scrollView.add($.__views.__alloyId1417);
    $.__views.__alloyId1418 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1418"
    });
    $.__views.__alloyId1417.add($.__views.__alloyId1418);
    $.__views.__alloyId1419 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Address",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
    });
    $.__views.__alloyId1418.add($.__views.__alloyId1419);
    $.__views.__alloyId1420 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1420"
    });
    $.__views.__alloyId1417.add($.__views.__alloyId1420);
    $.__views.__alloyId1421 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "No.8 Jalan Puchong,Selangor...",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
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
    });
    $.__views.__alloyId1420.add($.__views.__alloyId1421);
    $.__views.__alloyId1422 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1422"
    });
    $.__views.__alloyId1417.add($.__views.__alloyId1422);
    $.__views.__alloyId1423 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
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
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
    });
    $.__views.scrollView.add($.__views.__alloyId1424);
    $.__views.__alloyId1425 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1425"
    });
    $.__views.__alloyId1424.add($.__views.__alloyId1425);
    $.__views.__alloyId1426 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "NRIC/Passport/Armed Force ID",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
    });
    $.__views.__alloyId1425.add($.__views.__alloyId1426);
    $.__views.__alloyId1427 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1427"
    });
    $.__views.__alloyId1424.add($.__views.__alloyId1427);
    $.__views.__alloyId1428 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "000000 00 0000",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
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
    });
    $.__views.__alloyId1427.add($.__views.__alloyId1428);
    $.__views.__alloyId1429 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1429"
    });
    $.__views.__alloyId1424.add($.__views.__alloyId1429);
    $.__views.__alloyId1430 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
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
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
    });
    $.__views.scrollView.add($.__views.__alloyId1431);
    $.__views.__alloyId1432 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1432"
    });
    $.__views.__alloyId1431.add($.__views.__alloyId1432);
    $.__views.__alloyId1433 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Email Address",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
    });
    $.__views.__alloyId1432.add($.__views.__alloyId1433);
    $.__views.__alloyId1434 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1434"
    });
    $.__views.__alloyId1431.add($.__views.__alloyId1434);
    $.__views.__alloyId1435 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "sample@gmail.com",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
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
    });
    $.__views.__alloyId1434.add($.__views.__alloyId1435);
    $.__views.__alloyId1436 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1436"
    });
    $.__views.__alloyId1431.add($.__views.__alloyId1436);
    $.__views.__alloyId1437 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
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
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
    });
    $.__views.scrollView.add($.__views.__alloyId1438);
    $.__views.__alloyId1439 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1439"
    });
    $.__views.__alloyId1438.add($.__views.__alloyId1439);
    $.__views.__alloyId1440 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Birthday",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
    });
    $.__views.__alloyId1439.add($.__views.__alloyId1440);
    $.__views.__alloyId1441 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1441"
    });
    $.__views.__alloyId1438.add($.__views.__alloyId1441);
    $.__views.__alloyId1442 = Ti.UI.createLabel({
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
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
    });
    $.__views.__alloyId1441.add($.__views.__alloyId1442);
    $.__views.__alloyId1443 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1443"
    });
    $.__views.__alloyId1438.add($.__views.__alloyId1443);
    $.__views.__alloyId1444 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
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
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
    });
    $.__views.scrollView.add($.__views.__alloyId1445);
    $.__views.__alloyId1446 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1446"
    });
    $.__views.__alloyId1445.add($.__views.__alloyId1446);
    $.__views.__alloyId1447 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Gender",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
    });
    $.__views.__alloyId1446.add($.__views.__alloyId1447);
    $.__views.__alloyId1448 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1448"
    });
    $.__views.__alloyId1445.add($.__views.__alloyId1448);
    $.__views.__alloyId1449 = Ti.UI.createLabel({
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
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
    });
    $.__views.__alloyId1448.add($.__views.__alloyId1449);
    $.__views.__alloyId1450 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1450"
    });
    $.__views.__alloyId1445.add($.__views.__alloyId1450);
    $.__views.__alloyId1451 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
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
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
    });
    $.__views.scrollView.add($.__views.__alloyId1452);
    $.__views.__alloyId1453 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1453"
    });
    $.__views.__alloyId1452.add($.__views.__alloyId1453);
    $.__views.__alloyId1454 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Proessional Group/Job",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
    });
    $.__views.__alloyId1453.add($.__views.__alloyId1454);
    $.__views.__alloyId1455 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1455"
    });
    $.__views.__alloyId1452.add($.__views.__alloyId1455);
    $.__views.__alloyId1456 = Ti.UI.createLabel({
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
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
    });
    $.__views.__alloyId1455.add($.__views.__alloyId1456);
    $.__views.__alloyId1457 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1457"
    });
    $.__views.__alloyId1452.add($.__views.__alloyId1457);
    $.__views.__alloyId1458 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
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
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
    });
    $.__views.scrollView.add($.__views.__alloyId1459);
    $.__views.__alloyId1460 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1460"
    });
    $.__views.__alloyId1459.add($.__views.__alloyId1460);
    $.__views.__alloyId1461 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Income Group",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
    });
    $.__views.__alloyId1460.add($.__views.__alloyId1461);
    $.__views.__alloyId1462 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1462"
    });
    $.__views.__alloyId1459.add($.__views.__alloyId1462);
    $.__views.__alloyId1463 = Ti.UI.createLabel({
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
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
    });
    $.__views.__alloyId1462.add($.__views.__alloyId1463);
    $.__views.__alloyId1464 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1464"
    });
    $.__views.__alloyId1459.add($.__views.__alloyId1464);
    $.__views.__alloyId1465 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
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
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
    });
    $.__views.scrollView.add($.__views.__alloyId1466);
    $.__views.__alloyId1467 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1467"
    });
    $.__views.__alloyId1466.add($.__views.__alloyId1467);
    $.__views.__alloyId1468 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Interest",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
    });
    $.__views.__alloyId1467.add($.__views.__alloyId1468);
    $.__views.__alloyId1469 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1469"
    });
    $.__views.__alloyId1466.add($.__views.__alloyId1469);
    $.__views.__alloyId1470 = Ti.UI.createLabel({
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
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
    });
    $.__views.__alloyId1469.add($.__views.__alloyId1470);
    $.__views.__alloyId1471 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1471"
    });
    $.__views.__alloyId1466.add($.__views.__alloyId1471);
    $.__views.__alloyId1472 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
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
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
    });
    $.__views.scrollView.add($.__views.__alloyId1473);
    $.__views.__alloyId1474 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1474"
    });
    $.__views.__alloyId1473.add($.__views.__alloyId1474);
    $.__views.__alloyId1475 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Marital Status",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
    });
    $.__views.__alloyId1474.add($.__views.__alloyId1475);
    $.__views.__alloyId1476 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1476"
    });
    $.__views.__alloyId1473.add($.__views.__alloyId1476);
    $.__views.__alloyId1477 = Ti.UI.createLabel({
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
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
    });
    $.__views.__alloyId1476.add($.__views.__alloyId1477);
    $.__views.__alloyId1478 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1478"
    });
    $.__views.__alloyId1473.add($.__views.__alloyId1478);
    $.__views.__alloyId1479 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
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
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
    });
    $.__views.scrollView.add($.__views.__alloyId1480);
    $.__views.__alloyId1481 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1481"
    });
    $.__views.__alloyId1480.add($.__views.__alloyId1481);
    $.__views.__alloyId1482 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Race",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
    });
    $.__views.__alloyId1481.add($.__views.__alloyId1482);
    $.__views.__alloyId1483 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1483"
    });
    $.__views.__alloyId1480.add($.__views.__alloyId1483);
    $.__views.__alloyId1484 = Ti.UI.createLabel({
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
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
    });
    $.__views.__alloyId1483.add($.__views.__alloyId1484);
    $.__views.__alloyId1485 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1485"
    });
    $.__views.__alloyId1480.add($.__views.__alloyId1485);
    $.__views.__alloyId1486 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
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
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
    });
    $.__views.scrollView.add($.__views.__alloyId1487);
    $.__views.__alloyId1488 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1488"
    });
    $.__views.__alloyId1487.add($.__views.__alloyId1488);
    $.__views.__alloyId1489 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Religion",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
    });
    $.__views.__alloyId1488.add($.__views.__alloyId1489);
    $.__views.__alloyId1490 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1490"
    });
    $.__views.__alloyId1487.add($.__views.__alloyId1490);
    $.__views.__alloyId1491 = Ti.UI.createLabel({
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
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
    });
    $.__views.__alloyId1490.add($.__views.__alloyId1491);
    $.__views.__alloyId1492 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1492"
    });
    $.__views.__alloyId1487.add($.__views.__alloyId1492);
    $.__views.__alloyId1493 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
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
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
        width: "40%",
        height: "100%",
        id: "__alloyId1495"
    });
    $.__views.__alloyId1494.add($.__views.__alloyId1495);
    $.__views.__alloyId1496 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Change Password",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
    });
    $.__views.__alloyId1495.add($.__views.__alloyId1496);
    $.__views.__alloyId1497 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1497"
    });
    $.__views.__alloyId1494.add($.__views.__alloyId1497);
    $.__views.__alloyId1498 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        id: "__alloyId1498"
    });
    $.__views.__alloyId1497.add($.__views.__alloyId1498);
    $.__views.__alloyId1499 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1499"
    });
    $.__views.__alloyId1494.add($.__views.__alloyId1499);
>>>>>>> origin/master
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
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
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1500"
    });
    $.__views.profile.add($.__views.__alloyId1500);
    $.__views.__alloyId1501 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Submit",
        color: "white",
        height: "100%",
        width: "49.72%",
        textAlign: "center",
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
    });
    $.__views.__alloyId1500.add($.__views.__alloyId1501);
    $.__views.__alloyId1502 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId1502"
    });
    $.__views.__alloyId1500.add($.__views.__alloyId1502);
    $.__views.__alloyId1503 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Clear",
        color: "white",
        height: "100%",
        width: "49.72%",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId2002"
    });
    $.__views.__alloyId1999.add($.__views.__alloyId2002);
=======
        id: "__alloyId1503"
    });
    $.__views.__alloyId1500.add($.__views.__alloyId1503);
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
    __defers["$.__views.__alloyId1913!click!accountDetails"] && $.__views.__alloyId1913.addEventListener("click", accountDetails);
    __defers["$.__views.__alloyId1915!click!back"] && $.__views.__alloyId1915.addEventListener("click", back);
=======
<<<<<<< Updated upstream
    __defers["$.__views.__alloyId1416!click!back"] && $.__views.__alloyId1416.addEventListener("click", back);
=======
    __defers["$.__views.__alloyId1219!click!back"] && $.__views.__alloyId1219.addEventListener("click", back);
>>>>>>> Stashed changes
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;