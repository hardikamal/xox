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
        DRAWER.navigation("myAccount", 2);
    }
    function addNumber() {
        console.log("addNumber");
        DRAWER.navigation("subline2", 1);
    }
    function setting() {
        DRAWER.navigation("subline4", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "subline";
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
    $.__views.subline = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "subline"
    });
    $.__views.subline && $.addTopLevelView($.__views.subline);
<<<<<<< HEAD
    $.__views.__alloyId2312 = Alloy.createController("_header", {
        id: "__alloyId2312",
        __parentSymbol: $.__views.subline
    });
    $.__views.__alloyId2312.setParent($.__views.subline);
    $.__views.__alloyId2313 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2313"
    });
    $.__views.subline.add($.__views.__alloyId2313);
    $.__views.__alloyId2314 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1684 = Alloy.createController("_header", {
        id: "__alloyId1684",
        __parentSymbol: $.__views.subline
    });
    $.__views.__alloyId1684.setParent($.__views.subline);
    $.__views.__alloyId1685 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1685"
    });
    $.__views.subline.add($.__views.__alloyId1685);
    $.__views.__alloyId1686 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2314"
    });
    $.__views.__alloyId2313.add($.__views.__alloyId2314);
    $.__views.__alloyId2315 = Ti.UI.createImageView({
=======
        id: "__alloyId1686"
    });
    $.__views.__alloyId1685.add($.__views.__alloyId1686);
    $.__views.__alloyId1687 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId2315"
    });
    $.__views.__alloyId2313.add($.__views.__alloyId2315);
    back ? $.__views.__alloyId2315.addEventListener("click", back) : __defers["$.__views.__alloyId2315!click!back"] = true;
=======
        id: "__alloyId1687"
    });
    $.__views.__alloyId1685.add($.__views.__alloyId1687);
    back ? $.__views.__alloyId1687.addEventListener("click", back) : __defers["$.__views.__alloyId1687!click!back"] = true;
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.subline.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.empty = Ti.UI.createLabel({
        text: "Currently no Subline",
        id: "empty",
        color: "black"
    });
    $.__views.scrollView.add($.__views.empty);
    $.__views.__alloyId2316 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2316"
    });
    $.__views.scrollView.add($.__views.__alloyId2316);
    $.__views.__alloyId2317 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2317"
    });
    $.__views.__alloyId2316.add($.__views.__alloyId2317);
    $.__views.__alloyId2318 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2318"
    });
    $.__views.__alloyId2317.add($.__views.__alloyId2318);
    $.__views.__alloyId2319 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1688 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId1688"
    });
    $.__views.scrollView.add($.__views.__alloyId1688);
    $.__views.__alloyId1689 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId1689"
    });
    $.__views.__alloyId1688.add($.__views.__alloyId1689);
    $.__views.__alloyId1690 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1690"
    });
    $.__views.__alloyId1689.add($.__views.__alloyId1690);
    $.__views.__alloyId1691 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2319"
    });
    $.__views.__alloyId2318.add($.__views.__alloyId2319);
    $.__views.__alloyId2320 = Ti.UI.createLabel({
=======
        id: "__alloyId1691"
    });
    $.__views.__alloyId1690.add($.__views.__alloyId1691);
    $.__views.__alloyId1692 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2320"
    });
    $.__views.__alloyId2318.add($.__views.__alloyId2320);
    $.__views.__alloyId2321 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2321"
    });
    $.__views.__alloyId2316.add($.__views.__alloyId2321);
    $.__views.__alloyId2322 = Ti.UI.createImageView({
=======
        id: "__alloyId1692"
    });
    $.__views.__alloyId1690.add($.__views.__alloyId1692);
    $.__views.__alloyId1693 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1693"
    });
    $.__views.__alloyId1688.add($.__views.__alloyId1693);
    $.__views.__alloyId1694 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< HEAD
        id: "__alloyId2322"
    });
    $.__views.__alloyId2321.add($.__views.__alloyId2322);
    $.__views.__alloyId2323 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2323"
    });
    $.__views.__alloyId2316.add($.__views.__alloyId2323);
    setting ? $.__views.__alloyId2323.addEventListener("click", setting) : __defers["$.__views.__alloyId2323!click!setting"] = true;
    $.__views.__alloyId2324 = Ti.UI.createImageView({
=======
        id: "__alloyId1694"
    });
    $.__views.__alloyId1693.add($.__views.__alloyId1694);
    $.__views.__alloyId1695 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1695"
    });
    $.__views.__alloyId1688.add($.__views.__alloyId1695);
    $.__views.__alloyId1696 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< HEAD
        id: "__alloyId2324"
    });
    $.__views.__alloyId2323.add($.__views.__alloyId2324);
    $.__views.__alloyId2325 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2325"
    });
    $.__views.__alloyId2316.add($.__views.__alloyId2325);
    $.__views.__alloyId2326 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2326"
    });
    $.__views.__alloyId2325.add($.__views.__alloyId2326);
    $.__views.__alloyId2327 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2327"
    });
    $.__views.scrollView.add($.__views.__alloyId2327);
    $.__views.__alloyId2328 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2328"
    });
    $.__views.scrollView.add($.__views.__alloyId2328);
    $.__views.__alloyId2329 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2329"
    });
    $.__views.__alloyId2328.add($.__views.__alloyId2329);
    $.__views.__alloyId2330 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2330"
    });
    $.__views.__alloyId2329.add($.__views.__alloyId2330);
    $.__views.__alloyId2331 = Ti.UI.createLabel({
=======
        id: "__alloyId1696"
    });
    $.__views.__alloyId1695.add($.__views.__alloyId1696);
    $.__views.__alloyId1697 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId1697"
    });
    $.__views.scrollView.add($.__views.__alloyId1697);
    $.__views.__alloyId1698 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId1698"
    });
    $.__views.scrollView.add($.__views.__alloyId1698);
    $.__views.__alloyId1699 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId1699"
    });
    $.__views.__alloyId1698.add($.__views.__alloyId1699);
    $.__views.__alloyId1700 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1700"
    });
    $.__views.__alloyId1699.add($.__views.__alloyId1700);
    $.__views.__alloyId1701 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2331"
    });
    $.__views.__alloyId2330.add($.__views.__alloyId2331);
    $.__views.__alloyId2332 = Ti.UI.createLabel({
=======
        id: "__alloyId1701"
    });
    $.__views.__alloyId1700.add($.__views.__alloyId1701);
    $.__views.__alloyId1702 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2332"
    });
    $.__views.__alloyId2330.add($.__views.__alloyId2332);
    $.__views.__alloyId2333 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2333"
    });
    $.__views.__alloyId2328.add($.__views.__alloyId2333);
    $.__views.__alloyId2334 = Ti.UI.createImageView({
=======
        id: "__alloyId1702"
    });
    $.__views.__alloyId1700.add($.__views.__alloyId1702);
    $.__views.__alloyId1703 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1703"
    });
    $.__views.__alloyId1698.add($.__views.__alloyId1703);
    $.__views.__alloyId1704 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< HEAD
        id: "__alloyId2334"
    });
    $.__views.__alloyId2333.add($.__views.__alloyId2334);
    $.__views.__alloyId2335 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2335"
    });
    $.__views.__alloyId2328.add($.__views.__alloyId2335);
    $.__views.__alloyId2336 = Ti.UI.createImageView({
=======
        id: "__alloyId1704"
    });
    $.__views.__alloyId1703.add($.__views.__alloyId1704);
    $.__views.__alloyId1705 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1705"
    });
    $.__views.__alloyId1698.add($.__views.__alloyId1705);
    $.__views.__alloyId1706 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< HEAD
        id: "__alloyId2336"
    });
    $.__views.__alloyId2335.add($.__views.__alloyId2336);
    $.__views.__alloyId2337 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2337"
    });
    $.__views.__alloyId2328.add($.__views.__alloyId2337);
    $.__views.__alloyId2338 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2338"
    });
    $.__views.__alloyId2337.add($.__views.__alloyId2338);
    $.__views.__alloyId2339 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2339"
    });
    $.__views.scrollView.add($.__views.__alloyId2339);
    $.__views.__alloyId2340 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2340"
    });
    $.__views.scrollView.add($.__views.__alloyId2340);
    $.__views.__alloyId2341 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2341"
    });
    $.__views.__alloyId2340.add($.__views.__alloyId2341);
    $.__views.__alloyId2342 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2342"
    });
    $.__views.__alloyId2341.add($.__views.__alloyId2342);
    $.__views.__alloyId2343 = Ti.UI.createLabel({
=======
        id: "__alloyId1706"
    });
    $.__views.__alloyId1705.add($.__views.__alloyId1706);
    $.__views.__alloyId1707 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId1707"
    });
    $.__views.scrollView.add($.__views.__alloyId1707);
    $.__views.__alloyId1708 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId1708"
    });
    $.__views.scrollView.add($.__views.__alloyId1708);
    $.__views.__alloyId1709 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId1709"
    });
    $.__views.__alloyId1708.add($.__views.__alloyId1709);
    $.__views.__alloyId1710 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1710"
    });
    $.__views.__alloyId1709.add($.__views.__alloyId1710);
    $.__views.__alloyId1711 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2343"
    });
    $.__views.__alloyId2342.add($.__views.__alloyId2343);
    $.__views.__alloyId2344 = Ti.UI.createLabel({
=======
        id: "__alloyId1711"
    });
    $.__views.__alloyId1710.add($.__views.__alloyId1711);
    $.__views.__alloyId1712 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2344"
    });
    $.__views.__alloyId2342.add($.__views.__alloyId2344);
    $.__views.__alloyId2345 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2345"
    });
    $.__views.__alloyId2340.add($.__views.__alloyId2345);
    $.__views.__alloyId2346 = Ti.UI.createImageView({
=======
        id: "__alloyId1712"
    });
    $.__views.__alloyId1710.add($.__views.__alloyId1712);
    $.__views.__alloyId1713 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1713"
    });
    $.__views.__alloyId1708.add($.__views.__alloyId1713);
    $.__views.__alloyId1714 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< HEAD
        id: "__alloyId2346"
    });
    $.__views.__alloyId2345.add($.__views.__alloyId2346);
    $.__views.__alloyId2347 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2347"
    });
    $.__views.__alloyId2340.add($.__views.__alloyId2347);
    $.__views.__alloyId2348 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2348"
    });
    $.__views.__alloyId2347.add($.__views.__alloyId2348);
    $.__views.__alloyId2349 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2349"
    });
    $.__views.__alloyId2340.add($.__views.__alloyId2349);
    $.__views.__alloyId2350 = Ti.UI.createImageView({
=======
        id: "__alloyId1714"
    });
    $.__views.__alloyId1713.add($.__views.__alloyId1714);
    $.__views.__alloyId1715 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1715"
    });
    $.__views.__alloyId1708.add($.__views.__alloyId1715);
    $.__views.__alloyId1716 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< HEAD
        id: "__alloyId2350"
    });
    $.__views.__alloyId2349.add($.__views.__alloyId2350);
    $.__views.__alloyId2351 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2351"
    });
    $.__views.scrollView.add($.__views.__alloyId2351);
    $.__views.__alloyId2352 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2352"
    });
    $.__views.scrollView.add($.__views.__alloyId2352);
    $.__views.__alloyId2353 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2353"
    });
    $.__views.__alloyId2352.add($.__views.__alloyId2353);
    $.__views.__alloyId2354 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2354"
    });
    $.__views.__alloyId2353.add($.__views.__alloyId2354);
    $.__views.__alloyId2355 = Ti.UI.createLabel({
=======
        id: "__alloyId1716"
    });
    $.__views.__alloyId1715.add($.__views.__alloyId1716);
    $.__views.__alloyId1717 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId1717"
    });
    $.__views.scrollView.add($.__views.__alloyId1717);
    $.__views.__alloyId1718 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId1718"
    });
    $.__views.scrollView.add($.__views.__alloyId1718);
    $.__views.__alloyId1719 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId1719"
    });
    $.__views.__alloyId1718.add($.__views.__alloyId1719);
    $.__views.__alloyId1720 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1720"
    });
    $.__views.__alloyId1719.add($.__views.__alloyId1720);
    $.__views.__alloyId1721 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2355"
    });
    $.__views.__alloyId2354.add($.__views.__alloyId2355);
    $.__views.__alloyId2356 = Ti.UI.createLabel({
=======
        id: "__alloyId1721"
    });
    $.__views.__alloyId1720.add($.__views.__alloyId1721);
    $.__views.__alloyId1722 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2356"
    });
    $.__views.__alloyId2354.add($.__views.__alloyId2356);
    $.__views.__alloyId2357 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2357"
    });
    $.__views.__alloyId2352.add($.__views.__alloyId2357);
    $.__views.__alloyId2358 = Ti.UI.createImageView({
=======
        id: "__alloyId1722"
    });
    $.__views.__alloyId1720.add($.__views.__alloyId1722);
    $.__views.__alloyId1723 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1723"
    });
    $.__views.__alloyId1718.add($.__views.__alloyId1723);
    $.__views.__alloyId1724 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< HEAD
        id: "__alloyId2358"
    });
    $.__views.__alloyId2357.add($.__views.__alloyId2358);
    $.__views.__alloyId2359 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2359"
    });
    $.__views.__alloyId2352.add($.__views.__alloyId2359);
    $.__views.__alloyId2360 = Ti.UI.createImageView({
=======
        id: "__alloyId1724"
    });
    $.__views.__alloyId1723.add($.__views.__alloyId1724);
    $.__views.__alloyId1725 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1725"
    });
    $.__views.__alloyId1718.add($.__views.__alloyId1725);
    $.__views.__alloyId1726 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< HEAD
        id: "__alloyId2360"
    });
    $.__views.__alloyId2359.add($.__views.__alloyId2360);
    $.__views.__alloyId2361 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2361"
    });
    $.__views.__alloyId2352.add($.__views.__alloyId2361);
    $.__views.__alloyId2362 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2362"
    });
    $.__views.__alloyId2361.add($.__views.__alloyId2362);
    $.__views.__alloyId2363 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2363"
    });
    $.__views.scrollView.add($.__views.__alloyId2363);
    $.__views.__alloyId2364 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2364"
    });
    $.__views.scrollView.add($.__views.__alloyId2364);
    $.__views.__alloyId2365 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2365"
    });
    $.__views.__alloyId2364.add($.__views.__alloyId2365);
    $.__views.__alloyId2366 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2366"
    });
    $.__views.__alloyId2365.add($.__views.__alloyId2366);
    $.__views.__alloyId2367 = Ti.UI.createLabel({
=======
        id: "__alloyId1726"
    });
    $.__views.__alloyId1725.add($.__views.__alloyId1726);
    $.__views.__alloyId1727 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId1727"
    });
    $.__views.scrollView.add($.__views.__alloyId1727);
    $.__views.__alloyId1728 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId1728"
    });
    $.__views.scrollView.add($.__views.__alloyId1728);
    $.__views.__alloyId1729 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId1729"
    });
    $.__views.__alloyId1728.add($.__views.__alloyId1729);
    $.__views.__alloyId1730 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1730"
    });
    $.__views.__alloyId1729.add($.__views.__alloyId1730);
    $.__views.__alloyId1731 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2367"
    });
    $.__views.__alloyId2366.add($.__views.__alloyId2367);
    $.__views.__alloyId2368 = Ti.UI.createLabel({
=======
        id: "__alloyId1731"
    });
    $.__views.__alloyId1730.add($.__views.__alloyId1731);
    $.__views.__alloyId1732 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2368"
    });
    $.__views.__alloyId2366.add($.__views.__alloyId2368);
    $.__views.__alloyId2369 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2369"
    });
    $.__views.__alloyId2364.add($.__views.__alloyId2369);
    $.__views.__alloyId2370 = Ti.UI.createImageView({
=======
        id: "__alloyId1732"
    });
    $.__views.__alloyId1730.add($.__views.__alloyId1732);
    $.__views.__alloyId1733 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1733"
    });
    $.__views.__alloyId1728.add($.__views.__alloyId1733);
    $.__views.__alloyId1734 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< HEAD
        id: "__alloyId2370"
    });
    $.__views.__alloyId2369.add($.__views.__alloyId2370);
    $.__views.__alloyId2371 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2371"
    });
    $.__views.__alloyId2364.add($.__views.__alloyId2371);
    $.__views.__alloyId2372 = Ti.UI.createImageView({
=======
        id: "__alloyId1734"
    });
    $.__views.__alloyId1733.add($.__views.__alloyId1734);
    $.__views.__alloyId1735 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1735"
    });
    $.__views.__alloyId1728.add($.__views.__alloyId1735);
    $.__views.__alloyId1736 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< HEAD
        id: "__alloyId2372"
    });
    $.__views.__alloyId2371.add($.__views.__alloyId2372);
    $.__views.__alloyId2373 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2373"
    });
    $.__views.__alloyId2364.add($.__views.__alloyId2373);
    $.__views.__alloyId2374 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2374"
    });
    $.__views.__alloyId2373.add($.__views.__alloyId2374);
    $.__views.__alloyId2375 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2375"
    });
    $.__views.scrollView.add($.__views.__alloyId2375);
    $.__views.__alloyId2376 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2376"
    });
    $.__views.scrollView.add($.__views.__alloyId2376);
    $.__views.__alloyId2377 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2377"
    });
    $.__views.__alloyId2376.add($.__views.__alloyId2377);
    $.__views.__alloyId2378 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2378"
    });
    $.__views.__alloyId2377.add($.__views.__alloyId2378);
    $.__views.__alloyId2379 = Ti.UI.createLabel({
=======
        id: "__alloyId1736"
    });
    $.__views.__alloyId1735.add($.__views.__alloyId1736);
    $.__views.__alloyId1737 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId1737"
    });
    $.__views.scrollView.add($.__views.__alloyId1737);
    $.__views.__alloyId1738 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId1738"
    });
    $.__views.scrollView.add($.__views.__alloyId1738);
    $.__views.__alloyId1739 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId1739"
    });
    $.__views.__alloyId1738.add($.__views.__alloyId1739);
    $.__views.__alloyId1740 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1740"
    });
    $.__views.__alloyId1739.add($.__views.__alloyId1740);
    $.__views.__alloyId1741 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2379"
    });
    $.__views.__alloyId2378.add($.__views.__alloyId2379);
    $.__views.__alloyId2380 = Ti.UI.createLabel({
=======
        id: "__alloyId1741"
    });
    $.__views.__alloyId1740.add($.__views.__alloyId1741);
    $.__views.__alloyId1742 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2380"
    });
    $.__views.__alloyId2378.add($.__views.__alloyId2380);
    $.__views.__alloyId2381 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2381"
    });
    $.__views.__alloyId2376.add($.__views.__alloyId2381);
    $.__views.__alloyId2382 = Ti.UI.createImageView({
=======
        id: "__alloyId1742"
    });
    $.__views.__alloyId1740.add($.__views.__alloyId1742);
    $.__views.__alloyId1743 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1743"
    });
    $.__views.__alloyId1738.add($.__views.__alloyId1743);
    $.__views.__alloyId1744 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< HEAD
        id: "__alloyId2382"
    });
    $.__views.__alloyId2381.add($.__views.__alloyId2382);
    $.__views.__alloyId2383 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2383"
    });
    $.__views.__alloyId2376.add($.__views.__alloyId2383);
    $.__views.__alloyId2384 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2384"
    });
    $.__views.__alloyId2383.add($.__views.__alloyId2384);
    $.__views.__alloyId2385 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2385"
    });
    $.__views.__alloyId2376.add($.__views.__alloyId2385);
    $.__views.__alloyId2386 = Ti.UI.createImageView({
=======
        id: "__alloyId1744"
    });
    $.__views.__alloyId1743.add($.__views.__alloyId1744);
    $.__views.__alloyId1745 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1745"
    });
    $.__views.__alloyId1738.add($.__views.__alloyId1745);
    $.__views.__alloyId1746 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< HEAD
        id: "__alloyId2386"
    });
    $.__views.__alloyId2385.add($.__views.__alloyId2386);
    $.__views.__alloyId2387 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        id: "__alloyId2387"
    });
    $.__views.scrollView.add($.__views.__alloyId2387);
    $.__views.__alloyId2388 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#F5F5F5",
        id: "__alloyId2388"
    });
    $.__views.subline.add($.__views.__alloyId2388);
    addNumber ? $.__views.__alloyId2388.addEventListener("click", addNumber) : __defers["$.__views.__alloyId2388!click!addNumber"] = true;
    $.__views.__alloyId2389 = Ti.UI.createView({
        layout: "horizontal",
        height: "100%",
        width: Ti.UI.SIZE,
        id: "__alloyId2389"
    });
    $.__views.__alloyId2388.add($.__views.__alloyId2389);
    $.__views.__alloyId2390 = Ti.UI.createImageView({
=======
        id: "__alloyId1746"
    });
    $.__views.__alloyId1745.add($.__views.__alloyId1746);
    $.__views.__alloyId1747 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        id: "__alloyId1747"
    });
    $.__views.scrollView.add($.__views.__alloyId1747);
    $.__views.__alloyId1748 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#F5F5F5",
        id: "__alloyId1748"
    });
    $.__views.subline.add($.__views.__alloyId1748);
    addNumber ? $.__views.__alloyId1748.addEventListener("click", addNumber) : __defers["$.__views.__alloyId1748!click!addNumber"] = true;
    $.__views.__alloyId1749 = Ti.UI.createView({
        layout: "horizontal",
        height: "100%",
        width: Ti.UI.SIZE,
        id: "__alloyId1749"
    });
    $.__views.__alloyId1748.add($.__views.__alloyId1749);
    $.__views.__alloyId1750 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/add_button.png",
<<<<<<< HEAD
        id: "__alloyId2390"
    });
    $.__views.__alloyId2389.add($.__views.__alloyId2390);
    $.__views.__alloyId2391 = Ti.UI.createLabel({
=======
        id: "__alloyId1750"
    });
    $.__views.__alloyId1749.add($.__views.__alloyId1750);
    $.__views.__alloyId1751 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Add new number",
        height: "100%",
        color: "#9E9E9E",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId2391"
    });
    $.__views.__alloyId2389.add($.__views.__alloyId2391);
=======
        id: "__alloyId1751"
    });
    $.__views.__alloyId1749.add($.__views.__alloyId1751);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
<<<<<<< HEAD
    __defers["$.__views.__alloyId2315!click!back"] && $.__views.__alloyId2315.addEventListener("click", back);
    __defers["$.__views.__alloyId2323!click!setting"] && $.__views.__alloyId2323.addEventListener("click", setting);
    __defers["$.__views.__alloyId2388!click!addNumber"] && $.__views.__alloyId2388.addEventListener("click", addNumber);
=======
    __defers["$.__views.__alloyId1687!click!back"] && $.__views.__alloyId1687.addEventListener("click", back);
    __defers["$.__views.__alloyId1748!click!addNumber"] && $.__views.__alloyId1748.addEventListener("click", addNumber);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;