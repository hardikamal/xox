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
    $.__views.__alloyId1129 = Alloy.createController("_header", {
        id: "__alloyId1129",
        __parentSymbol: $.__views.subline
    });
    $.__views.__alloyId1129.setParent($.__views.subline);
    $.__views.__alloyId1130 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1130"
    });
    $.__views.subline.add($.__views.__alloyId1130);
    $.__views.__alloyId1131 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1131"
    });
    $.__views.__alloyId1130.add($.__views.__alloyId1131);
    $.__views.__alloyId1132 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1132"
    });
    $.__views.__alloyId1130.add($.__views.__alloyId1132);
    back ? $.__views.__alloyId1132.addEventListener("click", back) : __defers["$.__views.__alloyId1132!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.subline.add($.__views.scrollView);
    $.__views.__alloyId1133 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId1133"
    });
    $.__views.scrollView.add($.__views.__alloyId1133);
    $.__views.__alloyId1134 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId1134"
    });
    $.__views.__alloyId1133.add($.__views.__alloyId1134);
    $.__views.__alloyId1135 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1135"
    });
    $.__views.__alloyId1134.add($.__views.__alloyId1135);
    $.__views.__alloyId1136 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1136"
    });
    $.__views.__alloyId1135.add($.__views.__alloyId1136);
    $.__views.__alloyId1137 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1137"
    });
    $.__views.__alloyId1135.add($.__views.__alloyId1137);
    $.__views.__alloyId1138 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1138"
    });
    $.__views.__alloyId1133.add($.__views.__alloyId1138);
    $.__views.__alloyId1139 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId1139"
    });
    $.__views.__alloyId1138.add($.__views.__alloyId1139);
    $.__views.__alloyId1140 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1140"
    });
    $.__views.__alloyId1133.add($.__views.__alloyId1140);
    $.__views.__alloyId1141 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId1141"
    });
    $.__views.__alloyId1140.add($.__views.__alloyId1141);
    $.__views.__alloyId1142 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId1142"
    });
    $.__views.scrollView.add($.__views.__alloyId1142);
    $.__views.__alloyId1143 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId1143"
    });
    $.__views.scrollView.add($.__views.__alloyId1143);
    $.__views.__alloyId1144 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId1144"
    });
    $.__views.__alloyId1143.add($.__views.__alloyId1144);
    $.__views.__alloyId1145 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1145"
    });
    $.__views.__alloyId1144.add($.__views.__alloyId1145);
    $.__views.__alloyId1146 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1146"
    });
    $.__views.__alloyId1145.add($.__views.__alloyId1146);
    $.__views.__alloyId1147 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1147"
    });
    $.__views.__alloyId1145.add($.__views.__alloyId1147);
    $.__views.__alloyId1148 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1148"
    });
    $.__views.__alloyId1143.add($.__views.__alloyId1148);
    $.__views.__alloyId1149 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId1149"
    });
    $.__views.__alloyId1148.add($.__views.__alloyId1149);
    $.__views.__alloyId1150 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1150"
    });
    $.__views.__alloyId1143.add($.__views.__alloyId1150);
    $.__views.__alloyId1151 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId1151"
    });
    $.__views.__alloyId1150.add($.__views.__alloyId1151);
    $.__views.__alloyId1152 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId1152"
    });
    $.__views.scrollView.add($.__views.__alloyId1152);
    $.__views.__alloyId1153 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId1153"
    });
    $.__views.scrollView.add($.__views.__alloyId1153);
    $.__views.__alloyId1154 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId1154"
    });
    $.__views.__alloyId1153.add($.__views.__alloyId1154);
    $.__views.__alloyId1155 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1155"
    });
    $.__views.__alloyId1154.add($.__views.__alloyId1155);
    $.__views.__alloyId1156 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1156"
    });
    $.__views.__alloyId1155.add($.__views.__alloyId1156);
    $.__views.__alloyId1157 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1157"
    });
    $.__views.__alloyId1155.add($.__views.__alloyId1157);
    $.__views.__alloyId1158 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1158"
    });
    $.__views.__alloyId1153.add($.__views.__alloyId1158);
    $.__views.__alloyId1159 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId1159"
    });
    $.__views.__alloyId1158.add($.__views.__alloyId1159);
    $.__views.__alloyId1160 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1160"
    });
    $.__views.__alloyId1153.add($.__views.__alloyId1160);
    $.__views.__alloyId1161 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId1161"
    });
    $.__views.__alloyId1160.add($.__views.__alloyId1161);
    $.__views.__alloyId1162 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId1162"
    });
    $.__views.scrollView.add($.__views.__alloyId1162);
    $.__views.__alloyId1163 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId1163"
    });
    $.__views.scrollView.add($.__views.__alloyId1163);
    $.__views.__alloyId1164 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId1164"
    });
    $.__views.__alloyId1163.add($.__views.__alloyId1164);
    $.__views.__alloyId1165 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1165"
    });
    $.__views.__alloyId1164.add($.__views.__alloyId1165);
    $.__views.__alloyId1166 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1166"
    });
    $.__views.__alloyId1165.add($.__views.__alloyId1166);
    $.__views.__alloyId1167 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1167"
    });
    $.__views.__alloyId1165.add($.__views.__alloyId1167);
    $.__views.__alloyId1168 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1168"
    });
    $.__views.__alloyId1163.add($.__views.__alloyId1168);
    $.__views.__alloyId1169 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId1169"
    });
    $.__views.__alloyId1168.add($.__views.__alloyId1169);
    $.__views.__alloyId1170 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1170"
    });
    $.__views.__alloyId1163.add($.__views.__alloyId1170);
    $.__views.__alloyId1171 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId1171"
    });
    $.__views.__alloyId1170.add($.__views.__alloyId1171);
    $.__views.__alloyId1172 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId1172"
    });
    $.__views.scrollView.add($.__views.__alloyId1172);
    $.__views.__alloyId1173 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId1173"
    });
    $.__views.scrollView.add($.__views.__alloyId1173);
    $.__views.__alloyId1174 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId1174"
    });
    $.__views.__alloyId1173.add($.__views.__alloyId1174);
    $.__views.__alloyId1175 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1175"
    });
    $.__views.__alloyId1174.add($.__views.__alloyId1175);
    $.__views.__alloyId1176 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1176"
    });
    $.__views.__alloyId1175.add($.__views.__alloyId1176);
    $.__views.__alloyId1177 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1177"
    });
    $.__views.__alloyId1175.add($.__views.__alloyId1177);
    $.__views.__alloyId1178 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1178"
    });
    $.__views.__alloyId1173.add($.__views.__alloyId1178);
    $.__views.__alloyId1179 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId1179"
    });
    $.__views.__alloyId1178.add($.__views.__alloyId1179);
    $.__views.__alloyId1180 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1180"
    });
    $.__views.__alloyId1173.add($.__views.__alloyId1180);
    $.__views.__alloyId1181 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId1181"
    });
    $.__views.__alloyId1180.add($.__views.__alloyId1181);
    $.__views.__alloyId1182 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId1182"
    });
    $.__views.scrollView.add($.__views.__alloyId1182);
    $.__views.__alloyId1183 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId1183"
    });
    $.__views.scrollView.add($.__views.__alloyId1183);
    $.__views.__alloyId1184 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId1184"
    });
    $.__views.__alloyId1183.add($.__views.__alloyId1184);
    $.__views.__alloyId1185 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1185"
    });
    $.__views.__alloyId1184.add($.__views.__alloyId1185);
    $.__views.__alloyId1186 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1186"
    });
    $.__views.__alloyId1185.add($.__views.__alloyId1186);
    $.__views.__alloyId1187 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1187"
    });
    $.__views.__alloyId1185.add($.__views.__alloyId1187);
    $.__views.__alloyId1188 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1188"
    });
    $.__views.__alloyId1183.add($.__views.__alloyId1188);
    $.__views.__alloyId1189 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId1189"
    });
    $.__views.__alloyId1188.add($.__views.__alloyId1189);
    $.__views.__alloyId1190 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1190"
    });
    $.__views.__alloyId1183.add($.__views.__alloyId1190);
    $.__views.__alloyId1191 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId1191"
    });
    $.__views.__alloyId1190.add($.__views.__alloyId1191);
    $.__views.__alloyId1192 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        id: "__alloyId1192"
    });
    $.__views.scrollView.add($.__views.__alloyId1192);
    $.__views.__alloyId1193 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#F5F5F5",
        id: "__alloyId1193"
    });
    $.__views.subline.add($.__views.__alloyId1193);
    addNumber ? $.__views.__alloyId1193.addEventListener("click", addNumber) : __defers["$.__views.__alloyId1193!click!addNumber"] = true;
    $.__views.__alloyId1194 = Ti.UI.createView({
        layout: "horizontal",
        height: "100%",
        width: Ti.UI.SIZE,
        id: "__alloyId1194"
    });
    $.__views.__alloyId1193.add($.__views.__alloyId1194);
    $.__views.__alloyId1195 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/add_button.png",
        id: "__alloyId1195"
    });
    $.__views.__alloyId1194.add($.__views.__alloyId1195);
    $.__views.__alloyId1196 = Ti.UI.createLabel({
        text: "Add new number",
        height: "100%",
        color: "#9E9E9E",
        textAlign: "center",
        id: "__alloyId1196"
    });
    $.__views.__alloyId1194.add($.__views.__alloyId1196);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId1132!click!back"] && $.__views.__alloyId1132.addEventListener("click", back);
    __defers["$.__views.__alloyId1193!click!addNumber"] && $.__views.__alloyId1193.addEventListener("click", addNumber);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;