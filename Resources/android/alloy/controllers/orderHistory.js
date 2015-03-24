function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function prepaidPlus() {}
<<<<<<< Updated upstream
    function back() {
        DRAWER.navigation("myAccount", 1);
    }
=======
>>>>>>> Stashed changes
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "orderHistory";
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
    $.__views.orderHistory = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "orderHistory"
    });
    $.__views.orderHistory && $.addTopLevelView($.__views.orderHistory);
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1429 = Alloy.createController("_header", {
        id: "__alloyId1429",
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1373 = Alloy.createController("_header", {
        id: "__alloyId1373",
=======
    $.__views.__alloyId1429 = Alloy.createController("_header", {
        id: "__alloyId1429",
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1429 = Alloy.createController("_header", {
        id: "__alloyId1429",
>>>>>>> origin/master
        __parentSymbol: $.__views.orderHistory
    });
    $.__views.__alloyId1429.setParent($.__views.orderHistory);
    $.__views.__alloyId1430 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#AFCD3F",
        id: "__alloyId1430"
    });
    $.__views.orderHistory.add($.__views.__alloyId1430);
    $.__views.__alloyId1431 = Ti.UI.createLabel({
        text: "Friends & Family",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1431"
    });
    $.__views.__alloyId1430.add($.__views.__alloyId1431);
    $.__views.__alloyId1432 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1432"
    });
    $.__views.__alloyId1430.add($.__views.__alloyId1432);
    back ? $.__views.__alloyId1432.addEventListener("click", back) : __defers["$.__views.__alloyId1432!click!back"] = true;
    $.__views.__alloyId1433 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId1433"
    });
    $.__views.orderHistory.add($.__views.__alloyId1433);
    $.__views.__alloyId1434 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1434"
    });
    $.__views.__alloyId1433.add($.__views.__alloyId1434);
    prepaidPlus ? $.__views.__alloyId1434.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1434!click!prepaidPlus"] = true;
    $.__views.__alloyId1435 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1435"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1434.add($.__views.__alloyId1435);
    $.__views.__alloyId1436 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1378.add($.__views.__alloyId1379);
    $.__views.__alloyId1380 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1203 = Alloy.createController("_header", {
        id: "__alloyId1203",
        __parentSymbol: $.__views.orderHistory
    });
    $.__views.__alloyId1203.setParent($.__views.orderHistory);
    $.__views.__alloyId1204 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId1204"
    });
    $.__views.orderHistory.add($.__views.__alloyId1204);
    $.__views.__alloyId1205 = Ti.UI.createLabel({
=======
    $.__views.__alloyId365 = Alloy.createController("_header", {
        id: "__alloyId365",
        __parentSymbol: $.__views.orderHistory
    });
    $.__views.__alloyId365.setParent($.__views.orderHistory);
    $.__views.__alloyId366 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId366"
    });
    $.__views.orderHistory.add($.__views.__alloyId366);
    $.__views.__alloyId367 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "Ordering History",
        left: "10",
        top: "10",
        color: "white",
<<<<<<< Updated upstream
        id: "__alloyId1205"
    });
    $.__views.__alloyId1204.add($.__views.__alloyId1205);
    $.__views.__alloyId1206 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId1206"
    });
    $.__views.orderHistory.add($.__views.__alloyId1206);
    $.__views.__alloyId1207 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1207"
    });
    $.__views.__alloyId1206.add($.__views.__alloyId1207);
    prepaidPlus ? $.__views.__alloyId1207.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1207!click!prepaidPlus"] = true;
    $.__views.__alloyId1208 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1208"
    });
    $.__views.__alloyId1207.add($.__views.__alloyId1208);
    $.__views.__alloyId1209 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId367"
    });
    $.__views.__alloyId366.add($.__views.__alloyId367);
    $.__views.__alloyId368 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId368"
    });
    $.__views.orderHistory.add($.__views.__alloyId368);
    $.__views.__alloyId369 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId369"
    });
    $.__views.__alloyId368.add($.__views.__alloyId369);
    prepaidPlus ? $.__views.__alloyId369.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId369!click!prepaidPlus"] = true;
    $.__views.__alloyId370 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId370"
    });
    $.__views.__alloyId369.add($.__views.__alloyId370);
    $.__views.__alloyId371 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1434.add($.__views.__alloyId1435);
    $.__views.__alloyId1436 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1434.add($.__views.__alloyId1435);
    $.__views.__alloyId1436 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1436"
    });
    $.__views.__alloyId1435.add($.__views.__alloyId1436);
    $.__views.__alloyId1437 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1380"
    });
    $.__views.__alloyId1379.add($.__views.__alloyId1380);
    $.__views.__alloyId1381 = Ti.UI.createLabel({
=======
        id: "__alloyId1209"
    });
    $.__views.__alloyId1208.add($.__views.__alloyId1209);
    $.__views.__alloyId1210 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId371"
    });
    $.__views.__alloyId370.add($.__views.__alloyId371);
    $.__views.__alloyId372 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId1436"
    });
    $.__views.__alloyId1435.add($.__views.__alloyId1436);
    $.__views.__alloyId1437 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1436"
    });
    $.__views.__alloyId1435.add($.__views.__alloyId1436);
    $.__views.__alloyId1437 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1437"
    });
    $.__views.__alloyId1435.add($.__views.__alloyId1437);
    $.__views.__alloyId1438 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1381"
    });
    $.__views.__alloyId1379.add($.__views.__alloyId1381);
    $.__views.__alloyId1382 = Ti.UI.createView({
=======
        id: "__alloyId1210"
    });
    $.__views.__alloyId1208.add($.__views.__alloyId1210);
    $.__views.__alloyId1211 = Ti.UI.createView({
>>>>>>> origin/master
=======
        id: "__alloyId372"
    });
    $.__views.__alloyId370.add($.__views.__alloyId372);
    $.__views.__alloyId373 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId1437"
    });
    $.__views.__alloyId1435.add($.__views.__alloyId1437);
    $.__views.__alloyId1438 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1437"
    });
    $.__views.__alloyId1435.add($.__views.__alloyId1437);
    $.__views.__alloyId1438 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1438"
    });
    $.__views.__alloyId1434.add($.__views.__alloyId1438);
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1382"
    });
    $.__views.__alloyId1378.add($.__views.__alloyId1382);
=======
        id: "__alloyId1211"
    });
    $.__views.__alloyId1207.add($.__views.__alloyId1211);
>>>>>>> origin/master
=======
        id: "__alloyId373"
    });
    $.__views.__alloyId369.add($.__views.__alloyId373);
>>>>>>> Stashed changes
=======
        id: "__alloyId1438"
    });
    $.__views.__alloyId1434.add($.__views.__alloyId1438);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1438"
    });
    $.__views.__alloyId1434.add($.__views.__alloyId1438);
>>>>>>> origin/master
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1438.add($.__views.arrow1);
    $.__views.__alloyId1439 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1382.add($.__views.arrow1);
    $.__views.__alloyId1383 = Ti.UI.createView({
=======
    $.__views.__alloyId1438.add($.__views.arrow1);
    $.__views.__alloyId1439 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1438.add($.__views.arrow1);
    $.__views.__alloyId1439 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1439"
<<<<<<< HEAD
<<<<<<< HEAD
    });
    $.__views.__alloyId1433.add($.__views.__alloyId1439);
    prepaidPlus ? $.__views.__alloyId1439.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1439!click!prepaidPlus"] = true;
    $.__views.__alloyId1440 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1440"
    });
    $.__views.__alloyId1439.add($.__views.__alloyId1440);
    $.__views.__alloyId1441 = Ti.UI.createLabel({
=======
=======
>>>>>>> origin/master
    });
    $.__views.__alloyId1433.add($.__views.__alloyId1439);
    prepaidPlus ? $.__views.__alloyId1439.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1439!click!prepaidPlus"] = true;
    $.__views.__alloyId1440 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1440"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1206.add($.__views.__alloyId1212);
    prepaidPlus ? $.__views.__alloyId1212.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1212!click!prepaidPlus"] = true;
    $.__views.__alloyId1213 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1213"
    });
    $.__views.__alloyId1212.add($.__views.__alloyId1213);
    $.__views.__alloyId1214 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.__alloyId373.add($.__views.arrow1);
    $.__views.__alloyId374 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId374"
    });
    $.__views.__alloyId368.add($.__views.__alloyId374);
    prepaidPlus ? $.__views.__alloyId374.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId374!click!prepaidPlus"] = true;
    $.__views.__alloyId375 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId375"
    });
    $.__views.__alloyId374.add($.__views.__alloyId375);
    $.__views.__alloyId376 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1439.add($.__views.__alloyId1440);
    $.__views.__alloyId1441 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1439.add($.__views.__alloyId1440);
    $.__views.__alloyId1441 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1441"
    });
    $.__views.__alloyId1440.add($.__views.__alloyId1441);
    $.__views.__alloyId1442 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1385"
    });
    $.__views.__alloyId1384.add($.__views.__alloyId1385);
    $.__views.__alloyId1386 = Ti.UI.createLabel({
=======
        id: "__alloyId1214"
    });
    $.__views.__alloyId1213.add($.__views.__alloyId1214);
    $.__views.__alloyId1215 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId376"
    });
    $.__views.__alloyId375.add($.__views.__alloyId376);
    $.__views.__alloyId377 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId1441"
    });
    $.__views.__alloyId1440.add($.__views.__alloyId1441);
    $.__views.__alloyId1442 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1441"
    });
    $.__views.__alloyId1440.add($.__views.__alloyId1441);
    $.__views.__alloyId1442 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1442"
    });
    $.__views.__alloyId1440.add($.__views.__alloyId1442);
    $.__views.__alloyId1443 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1386"
    });
    $.__views.__alloyId1384.add($.__views.__alloyId1386);
    $.__views.__alloyId1387 = Ti.UI.createView({
=======
        id: "__alloyId1215"
    });
    $.__views.__alloyId1213.add($.__views.__alloyId1215);
    $.__views.__alloyId1216 = Ti.UI.createView({
>>>>>>> origin/master
=======
        id: "__alloyId377"
    });
    $.__views.__alloyId375.add($.__views.__alloyId377);
    $.__views.__alloyId378 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId1442"
    });
    $.__views.__alloyId1440.add($.__views.__alloyId1442);
    $.__views.__alloyId1443 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1442"
    });
    $.__views.__alloyId1440.add($.__views.__alloyId1442);
    $.__views.__alloyId1443 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1443"
    });
    $.__views.__alloyId1439.add($.__views.__alloyId1443);
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1387"
    });
    $.__views.__alloyId1383.add($.__views.__alloyId1387);
=======
        id: "__alloyId1216"
    });
    $.__views.__alloyId1212.add($.__views.__alloyId1216);
>>>>>>> origin/master
=======
        id: "__alloyId378"
    });
    $.__views.__alloyId374.add($.__views.__alloyId378);
>>>>>>> Stashed changes
=======
        id: "__alloyId1443"
    });
    $.__views.__alloyId1439.add($.__views.__alloyId1443);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1443"
    });
    $.__views.__alloyId1439.add($.__views.__alloyId1443);
>>>>>>> origin/master
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1443.add($.__views.arrow2);
    $.__views.__alloyId1444 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1387.add($.__views.arrow2);
    $.__views.__alloyId1388 = Ti.UI.createView({
=======
    $.__views.__alloyId1443.add($.__views.arrow2);
    $.__views.__alloyId1444 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1443.add($.__views.arrow2);
    $.__views.__alloyId1444 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1444"
    });
    $.__views.__alloyId1433.add($.__views.__alloyId1444);
    prepaidPlus ? $.__views.__alloyId1444.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1444!click!prepaidPlus"] = true;
    $.__views.__alloyId1445 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1445"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1444.add($.__views.__alloyId1445);
    $.__views.__alloyId1446 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1388.add($.__views.__alloyId1389);
    $.__views.__alloyId1390 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1216.add($.__views.arrow2);
    $.__views.__alloyId1217 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1217"
    });
    $.__views.__alloyId1206.add($.__views.__alloyId1217);
    prepaidPlus ? $.__views.__alloyId1217.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1217!click!prepaidPlus"] = true;
    $.__views.__alloyId1218 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1218"
    });
    $.__views.__alloyId1217.add($.__views.__alloyId1218);
    $.__views.__alloyId1219 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.__alloyId378.add($.__views.arrow2);
    $.__views.__alloyId379 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId379"
    });
    $.__views.__alloyId368.add($.__views.__alloyId379);
    prepaidPlus ? $.__views.__alloyId379.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId379!click!prepaidPlus"] = true;
    $.__views.__alloyId380 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId380"
    });
    $.__views.__alloyId379.add($.__views.__alloyId380);
    $.__views.__alloyId381 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1444.add($.__views.__alloyId1445);
    $.__views.__alloyId1446 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1444.add($.__views.__alloyId1445);
    $.__views.__alloyId1446 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1446"
    });
    $.__views.__alloyId1445.add($.__views.__alloyId1446);
    $.__views.__alloyId1447 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1390"
    });
    $.__views.__alloyId1389.add($.__views.__alloyId1390);
    $.__views.__alloyId1391 = Ti.UI.createLabel({
=======
        id: "__alloyId1219"
    });
    $.__views.__alloyId1218.add($.__views.__alloyId1219);
    $.__views.__alloyId1220 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId381"
    });
    $.__views.__alloyId380.add($.__views.__alloyId381);
    $.__views.__alloyId382 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId1446"
    });
    $.__views.__alloyId1445.add($.__views.__alloyId1446);
    $.__views.__alloyId1447 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1446"
    });
    $.__views.__alloyId1445.add($.__views.__alloyId1446);
    $.__views.__alloyId1447 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1447"
    });
    $.__views.__alloyId1445.add($.__views.__alloyId1447);
    $.__views.__alloyId1448 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1391"
    });
    $.__views.__alloyId1389.add($.__views.__alloyId1391);
    $.__views.__alloyId1392 = Ti.UI.createView({
=======
        id: "__alloyId1220"
    });
    $.__views.__alloyId1218.add($.__views.__alloyId1220);
    $.__views.__alloyId1221 = Ti.UI.createView({
>>>>>>> origin/master
=======
        id: "__alloyId382"
    });
    $.__views.__alloyId380.add($.__views.__alloyId382);
    $.__views.__alloyId383 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId1447"
    });
    $.__views.__alloyId1445.add($.__views.__alloyId1447);
    $.__views.__alloyId1448 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1447"
    });
    $.__views.__alloyId1445.add($.__views.__alloyId1447);
    $.__views.__alloyId1448 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1448"
    });
    $.__views.__alloyId1444.add($.__views.__alloyId1448);
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1392"
    });
    $.__views.__alloyId1388.add($.__views.__alloyId1392);
=======
        id: "__alloyId1221"
    });
    $.__views.__alloyId1217.add($.__views.__alloyId1221);
>>>>>>> origin/master
=======
        id: "__alloyId383"
    });
    $.__views.__alloyId379.add($.__views.__alloyId383);
>>>>>>> Stashed changes
=======
        id: "__alloyId1448"
    });
    $.__views.__alloyId1444.add($.__views.__alloyId1448);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1448"
    });
    $.__views.__alloyId1444.add($.__views.__alloyId1448);
>>>>>>> origin/master
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1448.add($.__views.arrow3);
    $.__views.__alloyId1449 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1392.add($.__views.arrow3);
    $.__views.__alloyId1393 = Ti.UI.createView({
=======
    $.__views.__alloyId1448.add($.__views.arrow3);
    $.__views.__alloyId1449 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1448.add($.__views.arrow3);
    $.__views.__alloyId1449 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1449"
    });
    $.__views.__alloyId1433.add($.__views.__alloyId1449);
    prepaidPlus ? $.__views.__alloyId1449.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1449!click!prepaidPlus"] = true;
    $.__views.__alloyId1450 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1450"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1449.add($.__views.__alloyId1450);
    $.__views.__alloyId1451 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1393.add($.__views.__alloyId1394);
    $.__views.__alloyId1395 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1221.add($.__views.arrow3);
    $.__views.__alloyId1222 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1222"
    });
    $.__views.__alloyId1206.add($.__views.__alloyId1222);
    prepaidPlus ? $.__views.__alloyId1222.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1222!click!prepaidPlus"] = true;
    $.__views.__alloyId1223 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1223"
    });
    $.__views.__alloyId1222.add($.__views.__alloyId1223);
    $.__views.__alloyId1224 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.__alloyId383.add($.__views.arrow3);
    $.__views.__alloyId384 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId384"
    });
    $.__views.__alloyId368.add($.__views.__alloyId384);
    prepaidPlus ? $.__views.__alloyId384.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId384!click!prepaidPlus"] = true;
    $.__views.__alloyId385 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId385"
    });
    $.__views.__alloyId384.add($.__views.__alloyId385);
    $.__views.__alloyId386 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1449.add($.__views.__alloyId1450);
    $.__views.__alloyId1451 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1449.add($.__views.__alloyId1450);
    $.__views.__alloyId1451 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1451"
    });
    $.__views.__alloyId1450.add($.__views.__alloyId1451);
    $.__views.__alloyId1452 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1395"
    });
    $.__views.__alloyId1394.add($.__views.__alloyId1395);
    $.__views.__alloyId1396 = Ti.UI.createLabel({
=======
        id: "__alloyId1224"
    });
    $.__views.__alloyId1223.add($.__views.__alloyId1224);
    $.__views.__alloyId1225 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId386"
    });
    $.__views.__alloyId385.add($.__views.__alloyId386);
    $.__views.__alloyId387 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId1451"
    });
    $.__views.__alloyId1450.add($.__views.__alloyId1451);
    $.__views.__alloyId1452 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1451"
    });
    $.__views.__alloyId1450.add($.__views.__alloyId1451);
    $.__views.__alloyId1452 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1452"
    });
    $.__views.__alloyId1450.add($.__views.__alloyId1452);
    $.__views.__alloyId1453 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1396"
    });
    $.__views.__alloyId1394.add($.__views.__alloyId1396);
    $.__views.__alloyId1397 = Ti.UI.createView({
=======
        id: "__alloyId1225"
    });
    $.__views.__alloyId1223.add($.__views.__alloyId1225);
    $.__views.__alloyId1226 = Ti.UI.createView({
>>>>>>> origin/master
=======
        id: "__alloyId387"
    });
    $.__views.__alloyId385.add($.__views.__alloyId387);
    $.__views.__alloyId388 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId1452"
    });
    $.__views.__alloyId1450.add($.__views.__alloyId1452);
    $.__views.__alloyId1453 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1452"
    });
    $.__views.__alloyId1450.add($.__views.__alloyId1452);
    $.__views.__alloyId1453 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1453"
    });
    $.__views.__alloyId1449.add($.__views.__alloyId1453);
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1397"
    });
    $.__views.__alloyId1393.add($.__views.__alloyId1397);
=======
        id: "__alloyId1226"
    });
    $.__views.__alloyId1222.add($.__views.__alloyId1226);
>>>>>>> origin/master
=======
        id: "__alloyId388"
    });
    $.__views.__alloyId384.add($.__views.__alloyId388);
>>>>>>> Stashed changes
=======
        id: "__alloyId1453"
    });
    $.__views.__alloyId1449.add($.__views.__alloyId1453);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1453"
    });
    $.__views.__alloyId1449.add($.__views.__alloyId1453);
>>>>>>> origin/master
    $.__views.arrow4 = Ti.UI.createImageView({
        id: "arrow4",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1453.add($.__views.arrow4);
    $.__views.__alloyId1454 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1397.add($.__views.arrow4);
    $.__views.__alloyId1398 = Ti.UI.createView({
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1453.add($.__views.arrow4);
    $.__views.__alloyId1454 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1454"
    });
    $.__views.__alloyId1433.add($.__views.__alloyId1454);
    prepaidPlus ? $.__views.__alloyId1454.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1454!click!prepaidPlus"] = true;
    $.__views.__alloyId1455 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1455"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1454.add($.__views.__alloyId1455);
    $.__views.__alloyId1456 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1398.add($.__views.__alloyId1399);
    $.__views.__alloyId1400 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1226.add($.__views.arrow4);
    $.__views.__alloyId1227 = Ti.UI.createView({
=======
    $.__views.__alloyId1453.add($.__views.arrow4);
    $.__views.__alloyId1454 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1454"
    });
    $.__views.__alloyId1433.add($.__views.__alloyId1454);
    prepaidPlus ? $.__views.__alloyId1454.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1454!click!prepaidPlus"] = true;
    $.__views.__alloyId1455 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1455"
    });
<<<<<<< HEAD
    $.__views.__alloyId1227.add($.__views.__alloyId1228);
    $.__views.__alloyId1229 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.__alloyId388.add($.__views.arrow4);
    $.__views.__alloyId389 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId389"
    });
    $.__views.__alloyId368.add($.__views.__alloyId389);
    prepaidPlus ? $.__views.__alloyId389.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId389!click!prepaidPlus"] = true;
    $.__views.__alloyId390 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId390"
    });
    $.__views.__alloyId389.add($.__views.__alloyId390);
    $.__views.__alloyId391 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1454.add($.__views.__alloyId1455);
    $.__views.__alloyId1456 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1454.add($.__views.__alloyId1455);
    $.__views.__alloyId1456 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1456"
    });
    $.__views.__alloyId1455.add($.__views.__alloyId1456);
    $.__views.__alloyId1457 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1400"
    });
    $.__views.__alloyId1399.add($.__views.__alloyId1400);
    $.__views.__alloyId1401 = Ti.UI.createLabel({
=======
        id: "__alloyId1229"
    });
    $.__views.__alloyId1228.add($.__views.__alloyId1229);
    $.__views.__alloyId1230 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId391"
    });
    $.__views.__alloyId390.add($.__views.__alloyId391);
    $.__views.__alloyId392 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId1456"
    });
    $.__views.__alloyId1455.add($.__views.__alloyId1456);
    $.__views.__alloyId1457 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1456"
    });
    $.__views.__alloyId1455.add($.__views.__alloyId1456);
    $.__views.__alloyId1457 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1457"
    });
    $.__views.__alloyId1455.add($.__views.__alloyId1457);
    $.__views.__alloyId1458 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1401"
    });
    $.__views.__alloyId1399.add($.__views.__alloyId1401);
    $.__views.__alloyId1402 = Ti.UI.createView({
=======
        id: "__alloyId1230"
    });
    $.__views.__alloyId1228.add($.__views.__alloyId1230);
    $.__views.__alloyId1231 = Ti.UI.createView({
>>>>>>> origin/master
=======
        id: "__alloyId392"
    });
    $.__views.__alloyId390.add($.__views.__alloyId392);
    $.__views.__alloyId393 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId1457"
    });
    $.__views.__alloyId1455.add($.__views.__alloyId1457);
    $.__views.__alloyId1458 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1457"
    });
    $.__views.__alloyId1455.add($.__views.__alloyId1457);
    $.__views.__alloyId1458 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1458"
    });
    $.__views.__alloyId1454.add($.__views.__alloyId1458);
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1402"
    });
    $.__views.__alloyId1398.add($.__views.__alloyId1402);
=======
        id: "__alloyId1231"
    });
    $.__views.__alloyId1227.add($.__views.__alloyId1231);
>>>>>>> origin/master
=======
        id: "__alloyId393"
    });
    $.__views.__alloyId389.add($.__views.__alloyId393);
>>>>>>> Stashed changes
=======
        id: "__alloyId1458"
    });
    $.__views.__alloyId1454.add($.__views.__alloyId1458);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1458"
    });
    $.__views.__alloyId1454.add($.__views.__alloyId1458);
>>>>>>> origin/master
    $.__views.arrow5 = Ti.UI.createImageView({
        id: "arrow5",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1458.add($.__views.arrow5);
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1402.add($.__views.arrow5);
=======
    $.__views.__alloyId1231.add($.__views.arrow5);
>>>>>>> origin/master
=======
    $.__views.__alloyId393.add($.__views.arrow5);
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1458.add($.__views.arrow5);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1458.add($.__views.arrow5);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow3.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow4.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow5.transform = Ti.UI.create2DMatrix().rotate(-90);
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> origin/master
    var clearObject = function() {
        alert("order history clear cache");
        Ti.App.removeEventListener("clearObject", clearObject);
    };
    Ti.App.addEventListener("clearObject", clearObject);
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId1376!click!back"] && $.__views.__alloyId1376.addEventListener("click", back);
    __defers["$.__views.__alloyId1378!click!prepaidPlus"] && $.__views.__alloyId1378.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1383!click!prepaidPlus"] && $.__views.__alloyId1383.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1388!click!prepaidPlus"] && $.__views.__alloyId1388.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1393!click!prepaidPlus"] && $.__views.__alloyId1393.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1398!click!prepaidPlus"] && $.__views.__alloyId1398.addEventListener("click", prepaidPlus);
=======
    __defers["$.__views.__alloyId1207!click!prepaidPlus"] && $.__views.__alloyId1207.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1212!click!prepaidPlus"] && $.__views.__alloyId1212.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1217!click!prepaidPlus"] && $.__views.__alloyId1217.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1222!click!prepaidPlus"] && $.__views.__alloyId1222.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1227!click!prepaidPlus"] && $.__views.__alloyId1227.addEventListener("click", prepaidPlus);
>>>>>>> origin/master
=======
    __defers["$.__views.__alloyId369!click!prepaidPlus"] && $.__views.__alloyId369.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId374!click!prepaidPlus"] && $.__views.__alloyId374.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId379!click!prepaidPlus"] && $.__views.__alloyId379.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId384!click!prepaidPlus"] && $.__views.__alloyId384.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId389!click!prepaidPlus"] && $.__views.__alloyId389.addEventListener("click", prepaidPlus);
>>>>>>> Stashed changes
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
    __defers["$.__views.__alloyId1432!click!back"] && $.__views.__alloyId1432.addEventListener("click", back);
    __defers["$.__views.__alloyId1434!click!prepaidPlus"] && $.__views.__alloyId1434.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1439!click!prepaidPlus"] && $.__views.__alloyId1439.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1444!click!prepaidPlus"] && $.__views.__alloyId1444.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1449!click!prepaidPlus"] && $.__views.__alloyId1449.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1454!click!prepaidPlus"] && $.__views.__alloyId1454.addEventListener("click", prepaidPlus);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;