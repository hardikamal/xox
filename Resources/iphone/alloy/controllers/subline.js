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
<<<<<<< HEAD
    $.__views.__alloyId732 = Alloy.createController("_header", {
        id: "__alloyId732",
        __parentSymbol: $.__views.subline
    });
    $.__views.__alloyId732.setParent($.__views.subline);
    $.__views.__alloyId733 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId733"
    });
    $.__views.subline.add($.__views.__alloyId733);
    $.__views.__alloyId734 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId734"
    });
    $.__views.__alloyId733.add($.__views.__alloyId734);
    $.__views.__alloyId735 = Ti.UI.createImageView({
=======
        id: "__alloyId1131"
    });
    $.__views.__alloyId1130.add($.__views.__alloyId1131);
    $.__views.__alloyId1132 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId735"
    });
    $.__views.__alloyId733.add($.__views.__alloyId735);
    back ? $.__views.__alloyId735.addEventListener("click", back) : __defers["$.__views.__alloyId735!click!back"] = true;
=======
        id: "__alloyId1132"
    });
    $.__views.__alloyId1130.add($.__views.__alloyId1132);
    back ? $.__views.__alloyId1132.addEventListener("click", back) : __defers["$.__views.__alloyId1132!click!back"] = true;
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.subline.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId736 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId736"
    });
    $.__views.scrollView.add($.__views.__alloyId736);
    $.__views.__alloyId737 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId737"
    });
    $.__views.__alloyId736.add($.__views.__alloyId737);
    $.__views.__alloyId738 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId738"
    });
    $.__views.__alloyId737.add($.__views.__alloyId738);
    $.__views.__alloyId739 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId739"
    });
    $.__views.__alloyId738.add($.__views.__alloyId739);
    $.__views.__alloyId740 = Ti.UI.createLabel({
=======
        id: "__alloyId1136"
    });
    $.__views.__alloyId1135.add($.__views.__alloyId1136);
    $.__views.__alloyId1137 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId740"
    });
    $.__views.__alloyId738.add($.__views.__alloyId740);
    $.__views.__alloyId741 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId741"
    });
    $.__views.__alloyId736.add($.__views.__alloyId741);
    $.__views.__alloyId742 = Ti.UI.createImageView({
=======
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
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< HEAD
        id: "__alloyId742"
    });
    $.__views.__alloyId741.add($.__views.__alloyId742);
    $.__views.__alloyId743 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId743"
    });
    $.__views.__alloyId736.add($.__views.__alloyId743);
    $.__views.__alloyId744 = Ti.UI.createImageView({
=======
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
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< HEAD
        id: "__alloyId744"
    });
    $.__views.__alloyId743.add($.__views.__alloyId744);
    $.__views.__alloyId745 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId745"
    });
    $.__views.scrollView.add($.__views.__alloyId745);
    $.__views.__alloyId746 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId746"
    });
    $.__views.scrollView.add($.__views.__alloyId746);
    $.__views.__alloyId747 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId747"
    });
    $.__views.__alloyId746.add($.__views.__alloyId747);
    $.__views.__alloyId748 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId748"
    });
    $.__views.__alloyId747.add($.__views.__alloyId748);
    $.__views.__alloyId749 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId749"
    });
    $.__views.__alloyId748.add($.__views.__alloyId749);
    $.__views.__alloyId750 = Ti.UI.createLabel({
=======
        id: "__alloyId1146"
    });
    $.__views.__alloyId1145.add($.__views.__alloyId1146);
    $.__views.__alloyId1147 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId750"
    });
    $.__views.__alloyId748.add($.__views.__alloyId750);
    $.__views.__alloyId751 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId751"
    });
    $.__views.__alloyId746.add($.__views.__alloyId751);
    $.__views.__alloyId752 = Ti.UI.createImageView({
=======
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
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< HEAD
        id: "__alloyId752"
    });
    $.__views.__alloyId751.add($.__views.__alloyId752);
    $.__views.__alloyId753 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId753"
    });
    $.__views.__alloyId746.add($.__views.__alloyId753);
    $.__views.__alloyId754 = Ti.UI.createImageView({
=======
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
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< HEAD
        id: "__alloyId754"
    });
    $.__views.__alloyId753.add($.__views.__alloyId754);
    $.__views.__alloyId755 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId755"
    });
    $.__views.scrollView.add($.__views.__alloyId755);
    $.__views.__alloyId756 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId756"
    });
    $.__views.scrollView.add($.__views.__alloyId756);
    $.__views.__alloyId757 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId757"
    });
    $.__views.__alloyId756.add($.__views.__alloyId757);
    $.__views.__alloyId758 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId758"
    });
    $.__views.__alloyId757.add($.__views.__alloyId758);
    $.__views.__alloyId759 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId759"
    });
    $.__views.__alloyId758.add($.__views.__alloyId759);
    $.__views.__alloyId760 = Ti.UI.createLabel({
=======
        id: "__alloyId1156"
    });
    $.__views.__alloyId1155.add($.__views.__alloyId1156);
    $.__views.__alloyId1157 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId760"
    });
    $.__views.__alloyId758.add($.__views.__alloyId760);
    $.__views.__alloyId761 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId761"
    });
    $.__views.__alloyId756.add($.__views.__alloyId761);
    $.__views.__alloyId762 = Ti.UI.createImageView({
=======
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
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< HEAD
        id: "__alloyId762"
    });
    $.__views.__alloyId761.add($.__views.__alloyId762);
    $.__views.__alloyId763 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId763"
    });
    $.__views.__alloyId756.add($.__views.__alloyId763);
    $.__views.__alloyId764 = Ti.UI.createImageView({
=======
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
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< HEAD
        id: "__alloyId764"
    });
    $.__views.__alloyId763.add($.__views.__alloyId764);
    $.__views.__alloyId765 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId765"
    });
    $.__views.scrollView.add($.__views.__alloyId765);
    $.__views.__alloyId766 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId766"
    });
    $.__views.scrollView.add($.__views.__alloyId766);
    $.__views.__alloyId767 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId767"
    });
    $.__views.__alloyId766.add($.__views.__alloyId767);
    $.__views.__alloyId768 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId768"
    });
    $.__views.__alloyId767.add($.__views.__alloyId768);
    $.__views.__alloyId769 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId769"
    });
    $.__views.__alloyId768.add($.__views.__alloyId769);
    $.__views.__alloyId770 = Ti.UI.createLabel({
=======
        id: "__alloyId1166"
    });
    $.__views.__alloyId1165.add($.__views.__alloyId1166);
    $.__views.__alloyId1167 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId770"
    });
    $.__views.__alloyId768.add($.__views.__alloyId770);
    $.__views.__alloyId771 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId771"
    });
    $.__views.__alloyId766.add($.__views.__alloyId771);
    $.__views.__alloyId772 = Ti.UI.createImageView({
=======
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
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< HEAD
        id: "__alloyId772"
    });
    $.__views.__alloyId771.add($.__views.__alloyId772);
    $.__views.__alloyId773 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId773"
    });
    $.__views.__alloyId766.add($.__views.__alloyId773);
    $.__views.__alloyId774 = Ti.UI.createImageView({
=======
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
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< HEAD
        id: "__alloyId774"
    });
    $.__views.__alloyId773.add($.__views.__alloyId774);
    $.__views.__alloyId775 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId775"
    });
    $.__views.scrollView.add($.__views.__alloyId775);
    $.__views.__alloyId776 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId776"
    });
    $.__views.scrollView.add($.__views.__alloyId776);
    $.__views.__alloyId777 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId777"
    });
    $.__views.__alloyId776.add($.__views.__alloyId777);
    $.__views.__alloyId778 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId778"
    });
    $.__views.__alloyId777.add($.__views.__alloyId778);
    $.__views.__alloyId779 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId779"
    });
    $.__views.__alloyId778.add($.__views.__alloyId779);
    $.__views.__alloyId780 = Ti.UI.createLabel({
=======
        id: "__alloyId1176"
    });
    $.__views.__alloyId1175.add($.__views.__alloyId1176);
    $.__views.__alloyId1177 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId780"
    });
    $.__views.__alloyId778.add($.__views.__alloyId780);
    $.__views.__alloyId781 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId781"
    });
    $.__views.__alloyId776.add($.__views.__alloyId781);
    $.__views.__alloyId782 = Ti.UI.createImageView({
=======
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
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< HEAD
        id: "__alloyId782"
    });
    $.__views.__alloyId781.add($.__views.__alloyId782);
    $.__views.__alloyId783 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId783"
    });
    $.__views.__alloyId776.add($.__views.__alloyId783);
    $.__views.__alloyId784 = Ti.UI.createImageView({
=======
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
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< HEAD
        id: "__alloyId784"
    });
    $.__views.__alloyId783.add($.__views.__alloyId784);
    $.__views.__alloyId785 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId785"
    });
    $.__views.scrollView.add($.__views.__alloyId785);
    $.__views.__alloyId786 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId786"
    });
    $.__views.scrollView.add($.__views.__alloyId786);
    $.__views.__alloyId787 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId787"
    });
    $.__views.__alloyId786.add($.__views.__alloyId787);
    $.__views.__alloyId788 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId788"
    });
    $.__views.__alloyId787.add($.__views.__alloyId788);
    $.__views.__alloyId789 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId789"
    });
    $.__views.__alloyId788.add($.__views.__alloyId789);
    $.__views.__alloyId790 = Ti.UI.createLabel({
=======
        id: "__alloyId1186"
    });
    $.__views.__alloyId1185.add($.__views.__alloyId1186);
    $.__views.__alloyId1187 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId790"
    });
    $.__views.__alloyId788.add($.__views.__alloyId790);
    $.__views.__alloyId791 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId791"
    });
    $.__views.__alloyId786.add($.__views.__alloyId791);
    $.__views.__alloyId792 = Ti.UI.createImageView({
=======
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
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< HEAD
        id: "__alloyId792"
    });
    $.__views.__alloyId791.add($.__views.__alloyId792);
    $.__views.__alloyId793 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId793"
    });
    $.__views.__alloyId786.add($.__views.__alloyId793);
    $.__views.__alloyId794 = Ti.UI.createImageView({
=======
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
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< HEAD
        id: "__alloyId794"
    });
    $.__views.__alloyId793.add($.__views.__alloyId794);
    $.__views.__alloyId795 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        id: "__alloyId795"
    });
    $.__views.scrollView.add($.__views.__alloyId795);
    $.__views.__alloyId796 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#F5F5F5",
        id: "__alloyId796"
    });
    $.__views.subline.add($.__views.__alloyId796);
    addNumber ? $.__views.__alloyId796.addEventListener("click", addNumber) : __defers["$.__views.__alloyId796!click!addNumber"] = true;
    $.__views.__alloyId797 = Ti.UI.createView({
        layout: "horizontal",
        height: "100%",
        width: Ti.UI.SIZE,
        id: "__alloyId797"
    });
    $.__views.__alloyId796.add($.__views.__alloyId797);
    $.__views.__alloyId798 = Ti.UI.createImageView({
=======
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
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/add_button.png",
<<<<<<< HEAD
        id: "__alloyId798"
    });
    $.__views.__alloyId797.add($.__views.__alloyId798);
    $.__views.__alloyId799 = Ti.UI.createLabel({
=======
        id: "__alloyId1195"
    });
    $.__views.__alloyId1194.add($.__views.__alloyId1195);
    $.__views.__alloyId1196 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Add new number",
        height: "100%",
        color: "#9E9E9E",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId799"
    });
    $.__views.__alloyId797.add($.__views.__alloyId799);
=======
        id: "__alloyId1196"
    });
    $.__views.__alloyId1194.add($.__views.__alloyId1196);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
<<<<<<< HEAD
    __defers["$.__views.__alloyId735!click!back"] && $.__views.__alloyId735.addEventListener("click", back);
    __defers["$.__views.__alloyId796!click!addNumber"] && $.__views.__alloyId796.addEventListener("click", addNumber);
=======
    __defers["$.__views.__alloyId1132!click!back"] && $.__views.__alloyId1132.addEventListener("click", back);
    __defers["$.__views.__alloyId1193!click!addNumber"] && $.__views.__alloyId1193.addEventListener("click", addNumber);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;