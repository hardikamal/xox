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
    $.__views.__alloyId1199 = Alloy.createController("_header", {
        id: "__alloyId1199",
        __parentSymbol: $.__views.orderHistory
    });
    $.__views.__alloyId1199.setParent($.__views.orderHistory);
    $.__views.__alloyId1200 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId1200"
    });
    $.__views.orderHistory.add($.__views.__alloyId1200);
    $.__views.__alloyId1201 = Ti.UI.createLabel({
        text: "Ordering History",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId1201"
    });
    $.__views.__alloyId1200.add($.__views.__alloyId1201);
    $.__views.__alloyId1202 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId1202"
    });
    $.__views.orderHistory.add($.__views.__alloyId1202);
    $.__views.__alloyId1203 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1203"
    });
    $.__views.__alloyId1202.add($.__views.__alloyId1203);
    prepaidPlus ? $.__views.__alloyId1203.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1203!click!prepaidPlus"] = true;
    $.__views.__alloyId1204 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1204"
    });
    $.__views.__alloyId1203.add($.__views.__alloyId1204);
    $.__views.__alloyId1205 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1205"
    });
    $.__views.__alloyId1204.add($.__views.__alloyId1205);
    $.__views.__alloyId1206 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId1206"
    });
    $.__views.__alloyId1204.add($.__views.__alloyId1206);
    $.__views.__alloyId1207 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1207"
    });
    $.__views.__alloyId1203.add($.__views.__alloyId1207);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1207.add($.__views.arrow1);
    $.__views.__alloyId1208 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1208"
    });
    $.__views.__alloyId1202.add($.__views.__alloyId1208);
    prepaidPlus ? $.__views.__alloyId1208.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1208!click!prepaidPlus"] = true;
    $.__views.__alloyId1209 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1209"
    });
    $.__views.__alloyId1208.add($.__views.__alloyId1209);
    $.__views.__alloyId1210 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1210"
    });
    $.__views.__alloyId1209.add($.__views.__alloyId1210);
    $.__views.__alloyId1211 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId1211"
    });
    $.__views.__alloyId1209.add($.__views.__alloyId1211);
    $.__views.__alloyId1212 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1212"
    });
    $.__views.__alloyId1208.add($.__views.__alloyId1212);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1212.add($.__views.arrow2);
    $.__views.__alloyId1213 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1213"
    });
    $.__views.__alloyId1202.add($.__views.__alloyId1213);
    prepaidPlus ? $.__views.__alloyId1213.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1213!click!prepaidPlus"] = true;
    $.__views.__alloyId1214 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1214"
    });
    $.__views.__alloyId1213.add($.__views.__alloyId1214);
    $.__views.__alloyId1215 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1215"
    });
    $.__views.__alloyId1214.add($.__views.__alloyId1215);
    $.__views.__alloyId1216 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId1216"
    });
    $.__views.__alloyId1214.add($.__views.__alloyId1216);
    $.__views.__alloyId1217 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1217"
    });
    $.__views.__alloyId1213.add($.__views.__alloyId1217);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1217.add($.__views.arrow3);
    $.__views.__alloyId1218 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1218"
    });
    $.__views.__alloyId1202.add($.__views.__alloyId1218);
    prepaidPlus ? $.__views.__alloyId1218.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1218!click!prepaidPlus"] = true;
    $.__views.__alloyId1219 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1219"
    });
    $.__views.__alloyId1218.add($.__views.__alloyId1219);
    $.__views.__alloyId1220 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1220"
    });
    $.__views.__alloyId1219.add($.__views.__alloyId1220);
    $.__views.__alloyId1221 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId1221"
    });
    $.__views.__alloyId1219.add($.__views.__alloyId1221);
    $.__views.__alloyId1222 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1222"
    });
    $.__views.__alloyId1218.add($.__views.__alloyId1222);
    $.__views.arrow4 = Ti.UI.createImageView({
        id: "arrow4",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1222.add($.__views.arrow4);
    $.__views.__alloyId1223 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1223"
    });
    $.__views.__alloyId1202.add($.__views.__alloyId1223);
    prepaidPlus ? $.__views.__alloyId1223.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1223!click!prepaidPlus"] = true;
    $.__views.__alloyId1224 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1224"
    });
    $.__views.__alloyId1223.add($.__views.__alloyId1224);
    $.__views.__alloyId1225 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1225"
    });
    $.__views.__alloyId1224.add($.__views.__alloyId1225);
    $.__views.__alloyId1226 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId1226"
    });
    $.__views.__alloyId1224.add($.__views.__alloyId1226);
    $.__views.__alloyId1227 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1227"
    });
    $.__views.__alloyId1223.add($.__views.__alloyId1227);
    $.__views.arrow5 = Ti.UI.createImageView({
        id: "arrow5",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1227.add($.__views.arrow5);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow3.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow4.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow5.transform = Ti.UI.create2DMatrix().rotate(-90);
    var clearObject = function() {
        alert("order history clear cache");
        Ti.App.removeEventListener("clearObject", clearObject);
    };
    Ti.App.addEventListener("clearObject", clearObject);
    __defers["$.__views.__alloyId1203!click!prepaidPlus"] && $.__views.__alloyId1203.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1208!click!prepaidPlus"] && $.__views.__alloyId1208.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1213!click!prepaidPlus"] && $.__views.__alloyId1213.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1218!click!prepaidPlus"] && $.__views.__alloyId1218.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1223!click!prepaidPlus"] && $.__views.__alloyId1223.addEventListener("click", prepaidPlus);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;