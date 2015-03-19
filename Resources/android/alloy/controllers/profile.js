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
    $.__views.__alloyId1231 = Alloy.createController("_header", {
        id: "__alloyId1231",
        __parentSymbol: $.__views.profile
    });
    $.__views.__alloyId1231.setParent($.__views.profile);
    $.__views.__alloyId1232 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1232"
    });
    $.__views.profile.add($.__views.__alloyId1232);
    $.__views.__alloyId1233 = Ti.UI.createLabel({
        text: "Account Details",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1233"
    });
    $.__views.__alloyId1232.add($.__views.__alloyId1233);
    $.__views.__alloyId1234 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1234"
    });
    $.__views.__alloyId1232.add($.__views.__alloyId1234);
    back ? $.__views.__alloyId1234.addEventListener("click", back) : __defers["$.__views.__alloyId1234!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F5F5F5"
    });
    $.__views.profile.add($.__views.scrollView);
    $.__views.__alloyId1235 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1235"
    });
    $.__views.scrollView.add($.__views.__alloyId1235);
    $.__views.__alloyId1236 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1236"
    });
    $.__views.__alloyId1235.add($.__views.__alloyId1236);
    $.__views.__alloyId1237 = Ti.UI.createLabel({
        text: "Address",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1237"
    });
    $.__views.__alloyId1236.add($.__views.__alloyId1237);
    $.__views.__alloyId1238 = Ti.UI.createView({
        width: "50%",
        height: "100%",
        id: "__alloyId1238"
    });
    $.__views.__alloyId1235.add($.__views.__alloyId1238);
    $.__views.__alloyId1239 = Ti.UI.createLabel({
        text: "No.8 Jalan Puchong,Selangor...",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1239"
    });
    $.__views.__alloyId1238.add($.__views.__alloyId1239);
    $.__views.__alloyId1240 = Ti.UI.createView({
        width: "10%",
        height: "100%",
        id: "__alloyId1240"
    });
    $.__views.__alloyId1235.add($.__views.__alloyId1240);
    $.__views.__alloyId1241 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1241"
    });
    $.__views.__alloyId1240.add($.__views.__alloyId1241);
    $.__views.__alloyId1242 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1242"
    });
    $.__views.scrollView.add($.__views.__alloyId1242);
    $.__views.__alloyId1243 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1243"
    });
    $.__views.__alloyId1242.add($.__views.__alloyId1243);
    $.__views.__alloyId1244 = Ti.UI.createLabel({
        text: "NRIC/Passport/Armed Force ID",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1244"
    });
    $.__views.__alloyId1243.add($.__views.__alloyId1244);
    $.__views.__alloyId1245 = Ti.UI.createView({
        width: "50%",
        height: "100%",
        id: "__alloyId1245"
    });
    $.__views.__alloyId1242.add($.__views.__alloyId1245);
    $.__views.__alloyId1246 = Ti.UI.createLabel({
        text: "000000 00 0000",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1246"
    });
    $.__views.__alloyId1245.add($.__views.__alloyId1246);
    $.__views.__alloyId1247 = Ti.UI.createView({
        width: "10%",
        height: "100%",
        id: "__alloyId1247"
    });
    $.__views.__alloyId1242.add($.__views.__alloyId1247);
    $.__views.__alloyId1248 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1248"
    });
    $.__views.__alloyId1247.add($.__views.__alloyId1248);
    $.__views.__alloyId1249 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1249"
    });
    $.__views.scrollView.add($.__views.__alloyId1249);
    $.__views.__alloyId1250 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1250"
    });
    $.__views.__alloyId1249.add($.__views.__alloyId1250);
    $.__views.__alloyId1251 = Ti.UI.createLabel({
        text: "Email Address",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1251"
    });
    $.__views.__alloyId1250.add($.__views.__alloyId1251);
    $.__views.__alloyId1252 = Ti.UI.createView({
        width: "50%",
        height: "100%",
        id: "__alloyId1252"
    });
    $.__views.__alloyId1249.add($.__views.__alloyId1252);
    $.__views.__alloyId1253 = Ti.UI.createLabel({
        text: "sample@gmail.com",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1253"
    });
    $.__views.__alloyId1252.add($.__views.__alloyId1253);
    $.__views.__alloyId1254 = Ti.UI.createView({
        width: "10%",
        height: "100%",
        id: "__alloyId1254"
    });
    $.__views.__alloyId1249.add($.__views.__alloyId1254);
    $.__views.__alloyId1255 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1255"
    });
    $.__views.__alloyId1254.add($.__views.__alloyId1255);
    $.__views.__alloyId1256 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1256"
    });
    $.__views.scrollView.add($.__views.__alloyId1256);
    $.__views.__alloyId1257 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1257"
    });
    $.__views.__alloyId1256.add($.__views.__alloyId1257);
    $.__views.__alloyId1258 = Ti.UI.createLabel({
        text: "Birthday",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1258"
    });
    $.__views.__alloyId1257.add($.__views.__alloyId1258);
    $.__views.__alloyId1259 = Ti.UI.createView({
        width: "50%",
        height: "100%",
        id: "__alloyId1259"
    });
    $.__views.__alloyId1256.add($.__views.__alloyId1259);
    $.__views.__alloyId1260 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1260"
    });
    $.__views.__alloyId1259.add($.__views.__alloyId1260);
    $.__views.__alloyId1261 = Ti.UI.createView({
        width: "10%",
        height: "100%",
        id: "__alloyId1261"
    });
    $.__views.__alloyId1256.add($.__views.__alloyId1261);
    $.__views.__alloyId1262 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1262"
    });
    $.__views.__alloyId1261.add($.__views.__alloyId1262);
    $.__views.__alloyId1263 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1263"
    });
    $.__views.scrollView.add($.__views.__alloyId1263);
    $.__views.__alloyId1264 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1264"
    });
    $.__views.__alloyId1263.add($.__views.__alloyId1264);
    $.__views.__alloyId1265 = Ti.UI.createLabel({
        text: "Gender",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1265"
    });
    $.__views.__alloyId1264.add($.__views.__alloyId1265);
    $.__views.__alloyId1266 = Ti.UI.createView({
        width: "50%",
        height: "100%",
        id: "__alloyId1266"
    });
    $.__views.__alloyId1263.add($.__views.__alloyId1266);
    $.__views.__alloyId1267 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1267"
    });
    $.__views.__alloyId1266.add($.__views.__alloyId1267);
    $.__views.__alloyId1268 = Ti.UI.createView({
        width: "10%",
        height: "100%",
        id: "__alloyId1268"
    });
    $.__views.__alloyId1263.add($.__views.__alloyId1268);
    $.__views.__alloyId1269 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1269"
    });
    $.__views.__alloyId1268.add($.__views.__alloyId1269);
    $.__views.__alloyId1270 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1270"
    });
    $.__views.scrollView.add($.__views.__alloyId1270);
    $.__views.__alloyId1271 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1271"
    });
    $.__views.__alloyId1270.add($.__views.__alloyId1271);
    $.__views.__alloyId1272 = Ti.UI.createLabel({
        text: "Proessional Group/Job",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1272"
    });
    $.__views.__alloyId1271.add($.__views.__alloyId1272);
    $.__views.__alloyId1273 = Ti.UI.createView({
        width: "50%",
        height: "100%",
        id: "__alloyId1273"
    });
    $.__views.__alloyId1270.add($.__views.__alloyId1273);
    $.__views.__alloyId1274 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1274"
    });
    $.__views.__alloyId1273.add($.__views.__alloyId1274);
    $.__views.__alloyId1275 = Ti.UI.createView({
        width: "10%",
        height: "100%",
        id: "__alloyId1275"
    });
    $.__views.__alloyId1270.add($.__views.__alloyId1275);
    $.__views.__alloyId1276 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1276"
    });
    $.__views.__alloyId1275.add($.__views.__alloyId1276);
    $.__views.__alloyId1277 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1277"
    });
    $.__views.scrollView.add($.__views.__alloyId1277);
    $.__views.__alloyId1278 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1278"
    });
    $.__views.__alloyId1277.add($.__views.__alloyId1278);
    $.__views.__alloyId1279 = Ti.UI.createLabel({
        text: "Income Group",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1279"
    });
    $.__views.__alloyId1278.add($.__views.__alloyId1279);
    $.__views.__alloyId1280 = Ti.UI.createView({
        width: "50%",
        height: "100%",
        id: "__alloyId1280"
    });
    $.__views.__alloyId1277.add($.__views.__alloyId1280);
    $.__views.__alloyId1281 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1281"
    });
    $.__views.__alloyId1280.add($.__views.__alloyId1281);
    $.__views.__alloyId1282 = Ti.UI.createView({
        width: "10%",
        height: "100%",
        id: "__alloyId1282"
    });
    $.__views.__alloyId1277.add($.__views.__alloyId1282);
    $.__views.__alloyId1283 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1283"
    });
    $.__views.__alloyId1282.add($.__views.__alloyId1283);
    $.__views.__alloyId1284 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1284"
    });
    $.__views.scrollView.add($.__views.__alloyId1284);
    $.__views.__alloyId1285 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1285"
    });
    $.__views.__alloyId1284.add($.__views.__alloyId1285);
    $.__views.__alloyId1286 = Ti.UI.createLabel({
        text: "Interest",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1286"
    });
    $.__views.__alloyId1285.add($.__views.__alloyId1286);
    $.__views.__alloyId1287 = Ti.UI.createView({
        width: "50%",
        height: "100%",
        id: "__alloyId1287"
    });
    $.__views.__alloyId1284.add($.__views.__alloyId1287);
    $.__views.__alloyId1288 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1288"
    });
    $.__views.__alloyId1287.add($.__views.__alloyId1288);
    $.__views.__alloyId1289 = Ti.UI.createView({
        width: "10%",
        height: "100%",
        id: "__alloyId1289"
    });
    $.__views.__alloyId1284.add($.__views.__alloyId1289);
    $.__views.__alloyId1290 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1290"
    });
    $.__views.__alloyId1289.add($.__views.__alloyId1290);
    $.__views.__alloyId1291 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1291"
    });
    $.__views.scrollView.add($.__views.__alloyId1291);
    $.__views.__alloyId1292 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1292"
    });
    $.__views.__alloyId1291.add($.__views.__alloyId1292);
    $.__views.__alloyId1293 = Ti.UI.createLabel({
        text: "Marital Status",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1293"
    });
    $.__views.__alloyId1292.add($.__views.__alloyId1293);
    $.__views.__alloyId1294 = Ti.UI.createView({
        width: "50%",
        height: "100%",
        id: "__alloyId1294"
    });
    $.__views.__alloyId1291.add($.__views.__alloyId1294);
    $.__views.__alloyId1295 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1295"
    });
    $.__views.__alloyId1294.add($.__views.__alloyId1295);
    $.__views.__alloyId1296 = Ti.UI.createView({
        width: "10%",
        height: "100%",
        id: "__alloyId1296"
    });
    $.__views.__alloyId1291.add($.__views.__alloyId1296);
    $.__views.__alloyId1297 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1297"
    });
    $.__views.__alloyId1296.add($.__views.__alloyId1297);
    $.__views.__alloyId1298 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1298"
    });
    $.__views.scrollView.add($.__views.__alloyId1298);
    $.__views.__alloyId1299 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1299"
    });
    $.__views.__alloyId1298.add($.__views.__alloyId1299);
    $.__views.__alloyId1300 = Ti.UI.createLabel({
        text: "Race",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1300"
    });
    $.__views.__alloyId1299.add($.__views.__alloyId1300);
    $.__views.__alloyId1301 = Ti.UI.createView({
        width: "50%",
        height: "100%",
        id: "__alloyId1301"
    });
    $.__views.__alloyId1298.add($.__views.__alloyId1301);
    $.__views.__alloyId1302 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1302"
    });
    $.__views.__alloyId1301.add($.__views.__alloyId1302);
    $.__views.__alloyId1303 = Ti.UI.createView({
        width: "10%",
        height: "100%",
        id: "__alloyId1303"
    });
    $.__views.__alloyId1298.add($.__views.__alloyId1303);
    $.__views.__alloyId1304 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1304"
    });
    $.__views.__alloyId1303.add($.__views.__alloyId1304);
    $.__views.__alloyId1305 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1305"
    });
    $.__views.scrollView.add($.__views.__alloyId1305);
    $.__views.__alloyId1306 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1306"
    });
    $.__views.__alloyId1305.add($.__views.__alloyId1306);
    $.__views.__alloyId1307 = Ti.UI.createLabel({
        text: "Religion",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1307"
    });
    $.__views.__alloyId1306.add($.__views.__alloyId1307);
    $.__views.__alloyId1308 = Ti.UI.createView({
        width: "50%",
        height: "100%",
        id: "__alloyId1308"
    });
    $.__views.__alloyId1305.add($.__views.__alloyId1308);
    $.__views.__alloyId1309 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1309"
    });
    $.__views.__alloyId1308.add($.__views.__alloyId1309);
    $.__views.__alloyId1310 = Ti.UI.createView({
        width: "10%",
        height: "100%",
        id: "__alloyId1310"
    });
    $.__views.__alloyId1305.add($.__views.__alloyId1310);
    $.__views.__alloyId1311 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1311"
    });
    $.__views.__alloyId1310.add($.__views.__alloyId1311);
    $.__views.__alloyId1312 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1312"
    });
    $.__views.scrollView.add($.__views.__alloyId1312);
    $.__views.__alloyId1313 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1313"
    });
    $.__views.__alloyId1312.add($.__views.__alloyId1313);
    $.__views.__alloyId1314 = Ti.UI.createLabel({
        text: "Change Password",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1314"
    });
    $.__views.__alloyId1313.add($.__views.__alloyId1314);
    $.__views.__alloyId1315 = Ti.UI.createView({
        width: "50%",
        height: "100%",
        id: "__alloyId1315"
    });
    $.__views.__alloyId1312.add($.__views.__alloyId1315);
    $.__views.__alloyId1316 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1316"
    });
    $.__views.__alloyId1315.add($.__views.__alloyId1316);
    $.__views.__alloyId1317 = Ti.UI.createView({
        width: "10%",
        height: "100%",
        id: "__alloyId1317"
    });
    $.__views.__alloyId1312.add($.__views.__alloyId1317);
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1317.add($.__views.arrow);
    $.__views.__alloyId1318 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1318"
    });
    $.__views.profile.add($.__views.__alloyId1318);
    $.__views.__alloyId1319 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        height: "100%",
        width: "49.72%",
        textAlign: "center",
        id: "__alloyId1319"
    });
    $.__views.__alloyId1318.add($.__views.__alloyId1319);
    $.__views.__alloyId1320 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId1320"
    });
    $.__views.__alloyId1318.add($.__views.__alloyId1320);
    $.__views.__alloyId1321 = Ti.UI.createLabel({
        text: "Clear",
        color: "white",
        height: "100%",
        width: "49.72%",
        textAlign: "center",
        id: "__alloyId1321"
    });
    $.__views.__alloyId1318.add($.__views.__alloyId1321);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    __defers["$.__views.__alloyId1234!click!back"] && $.__views.__alloyId1234.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;