function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function faq() {
        DRAWER.navigation("faq", 1);
    }
    function accDetail() {
        DRAWER.navigation("accountDetails", 1);
    }
    function subline() {
        DRAWER.navigation("subline", 1);
    }
    function vas() {
        DRAWER.navigation("vas", 1);
    }
    function loyalty() {
        DRAWER.navigation("loyalty", 1);
    }
    function profile() {
        DRAWER.navigation("profile", 1);
    }
    function report() {
        DRAWER.navigation("report", 1);
    }
    function orderingHistory() {
        DRAWER.navigation("orderHistory", 1);
    }
    function editPhoto() {
        console.log("editPhoto");
        $.photo.zIndex = 2;
    }
    function makePayment() {
        console.log("makePayment");
        $.payment.zIndex = 2;
    }
    function close() {
        console.log("close");
        $.photo.zIndex = 0;
    }
    function closepayment() {
        console.log("closepayment");
        $.payment.zIndex = 0;
    }
    function paymentPostpaid() {
        DRAWER.navigation("payment2", 1);
    }
    function paymentPrepaid() {
        DRAWER.navigation("payment3", 1);
    }
    function gallery() {
        console.log("gallery");
        $.photo.zIndex = 0;
    }
    function facebook() {
        console.log("facebook");
        $.photo.zIndex = 0;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "myAccount";
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
    $.__views.myAccount = Ti.UI.createView({
        backgroundColor: "black",
        layout: "composite",
        id: "myAccount"
    });
    $.__views.myAccount && $.addTopLevelView($.__views.myAccount);
    $.__views.__alloyId1032 = Alloy.createController("_header", {
        id: "__alloyId1032",
        __parentSymbol: $.__views.myAccount
    });
    $.__views.__alloyId1032.setParent($.__views.myAccount);
    $.__views.photo = Ti.UI.createView({
        id: "photo",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.myAccount.add($.__views.photo);
    $.__views.__alloyId1033 = Ti.UI.createView({
        layout: "vertical",
        width: "80%",
        height: "40%",
        backgroundColor: "white",
        id: "__alloyId1033"
    });
    $.__views.photo.add($.__views.__alloyId1033);
    $.__views.__alloyId1034 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId1034"
    });
    $.__views.__alloyId1033.add($.__views.__alloyId1034);
    $.__views.__alloyId1035 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "#E6E7E9",
        id: "__alloyId1035"
    });
    $.__views.__alloyId1034.add($.__views.__alloyId1035);
    $.__views.__alloyId1036 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1036"
    });
    $.__views.__alloyId1034.add($.__views.__alloyId1036);
    close ? $.__views.__alloyId1036.addEventListener("click", close) : __defers["$.__views.__alloyId1036!click!close"] = true;
    $.__views.__alloyId1037 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1037"
    });
    $.__views.__alloyId1033.add($.__views.__alloyId1037);
    gallery ? $.__views.__alloyId1037.addEventListener("click", gallery) : __defers["$.__views.__alloyId1037!click!gallery"] = true;
    $.__views.__alloyId1038 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        id: "__alloyId1038"
    });
    $.__views.__alloyId1037.add($.__views.__alloyId1038);
    $.__views.__alloyId1039 = Ti.UI.createImageView({
        backgroundColor: "#66FFFF",
        width: "32",
        height: "32",
        left: "10",
        image: "/images/gallery_icon.png",
        id: "__alloyId1039"
    });
    $.__views.__alloyId1038.add($.__views.__alloyId1039);
    $.__views.__alloyId1040 = Ti.UI.createView({
        id: "__alloyId1040"
    });
    $.__views.__alloyId1037.add($.__views.__alloyId1040);
    $.__views.__alloyId1041 = Ti.UI.createLabel({
        text: "Photo Gallery",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1041"
    });
    $.__views.__alloyId1040.add($.__views.__alloyId1041);
    $.__views.__alloyId1042 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#3E6AC3",
        id: "__alloyId1042"
    });
    $.__views.__alloyId1033.add($.__views.__alloyId1042);
    facebook ? $.__views.__alloyId1042.addEventListener("click", facebook) : __defers["$.__views.__alloyId1042!click!facebook"] = true;
    $.__views.__alloyId1043 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        id: "__alloyId1043"
    });
    $.__views.__alloyId1042.add($.__views.__alloyId1043);
    $.__views.__alloyId1044 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "32",
        height: "32",
        left: "10",
        image: "/images/facebook_icon.png",
        id: "__alloyId1044"
    });
    $.__views.__alloyId1043.add($.__views.__alloyId1044);
    $.__views.__alloyId1045 = Ti.UI.createView({
        id: "__alloyId1045"
    });
    $.__views.__alloyId1042.add($.__views.__alloyId1045);
    $.__views.__alloyId1046 = Ti.UI.createLabel({
        text: "Connect with Facebook",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1046"
    });
    $.__views.__alloyId1045.add($.__views.__alloyId1046);
    $.__views.payment = Ti.UI.createView({
        id: "payment",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.myAccount.add($.__views.payment);
    $.__views.__alloyId1047 = Ti.UI.createView({
        layout: "vertical",
        width: "80%",
        height: "40%",
        backgroundColor: "white",
        id: "__alloyId1047"
    });
    $.__views.payment.add($.__views.__alloyId1047);
    $.__views.__alloyId1048 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId1048"
    });
    $.__views.__alloyId1047.add($.__views.__alloyId1048);
    $.__views.__alloyId1049 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "#E6E7E9",
        id: "__alloyId1049"
    });
    $.__views.__alloyId1048.add($.__views.__alloyId1049);
    $.__views.__alloyId1050 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1050"
    });
    $.__views.__alloyId1048.add($.__views.__alloyId1050);
    closepayment ? $.__views.__alloyId1050.addEventListener("click", closepayment) : __defers["$.__views.__alloyId1050!click!closepayment"] = true;
    $.__views.__alloyId1051 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1051"
    });
    $.__views.__alloyId1047.add($.__views.__alloyId1051);
    paymentPostpaid ? $.__views.__alloyId1051.addEventListener("click", paymentPostpaid) : __defers["$.__views.__alloyId1051!click!paymentPostpaid"] = true;
    $.__views.__alloyId1052 = Ti.UI.createView({
        id: "__alloyId1052"
    });
    $.__views.__alloyId1051.add($.__views.__alloyId1052);
    $.__views.__alloyId1053 = Ti.UI.createLabel({
        text: "Pay Postpaid Bill",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1053"
    });
    $.__views.__alloyId1052.add($.__views.__alloyId1053);
    $.__views.__alloyId1054 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#3E6AC3",
        id: "__alloyId1054"
    });
    $.__views.__alloyId1047.add($.__views.__alloyId1054);
    paymentPrepaid ? $.__views.__alloyId1054.addEventListener("click", paymentPrepaid) : __defers["$.__views.__alloyId1054!click!paymentPrepaid"] = true;
    $.__views.__alloyId1055 = Ti.UI.createView({
        id: "__alloyId1055"
    });
    $.__views.__alloyId1054.add($.__views.__alloyId1055);
    $.__views.__alloyId1056 = Ti.UI.createLabel({
        text: "Prepaid TopUp",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1056"
    });
    $.__views.__alloyId1055.add($.__views.__alloyId1056);
    $.__views.__alloyId1057 = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "black",
        top: "50",
        zIndex: "1",
        id: "__alloyId1057"
    });
    $.__views.myAccount.add($.__views.__alloyId1057);
    $.__views.__alloyId1058 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        backgroundColor: "red",
        id: "__alloyId1058"
    });
    $.__views.__alloyId1057.add($.__views.__alloyId1058);
    $.__views.__alloyId1059 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1059"
    });
    $.__views.__alloyId1058.add($.__views.__alloyId1059);
    $.__views.__alloyId1060 = Ti.UI.createLabel({
        text: "Hello!",
        color: "white",
        left: "10",
        top: "10",
        id: "__alloyId1060"
    });
    $.__views.__alloyId1059.add($.__views.__alloyId1060);
    $.__views.__alloyId1061 = Ti.UI.createLabel({
        text: "John Smith",
        color: "white",
        left: "10",
        bottom: "10",
        id: "__alloyId1061"
    });
    $.__views.__alloyId1059.add($.__views.__alloyId1061);
    $.__views.__alloyId1062 = Ti.UI.createView({
        width: "33%",
        id: "__alloyId1062"
    });
    $.__views.__alloyId1058.add($.__views.__alloyId1062);
    $.__views.__alloyId1063 = Ti.UI.createView({
        width: "auto",
        height: Ti.UI.FILL,
        id: "__alloyId1063"
    });
    $.__views.__alloyId1058.add($.__views.__alloyId1063);
    $.__views.__alloyId1064 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/profile_images.png",
        borderRadius: "40",
        id: "__alloyId1064"
    });
    $.__views.__alloyId1063.add($.__views.__alloyId1064);
    editPhoto ? $.__views.__alloyId1064.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId1064!click!editPhoto"] = true;
    $.__views.__alloyId1065 = Ti.UI.createImageView({
        width: "20",
        height: "20",
        image: "/images/profileedit_icon.png",
        borderRadius: "10",
        bottom: "10",
        id: "__alloyId1065"
    });
    $.__views.__alloyId1063.add($.__views.__alloyId1065);
    editPhoto ? $.__views.__alloyId1065.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId1065!click!editPhoto"] = true;
    $.__views.__alloyId1066 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#F5F5F5",
        id: "__alloyId1066"
    });
    $.__views.__alloyId1057.add($.__views.__alloyId1066);
    $.__views.__alloyId1067 = Ti.UI.createView({
        layout: "composite",
        width: "50%",
        id: "__alloyId1067"
    });
    $.__views.__alloyId1066.add($.__views.__alloyId1067);
    $.__views.__alloyId1068 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1068"
    });
    $.__views.__alloyId1067.add($.__views.__alloyId1068);
    $.__views.__alloyId1069 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "#878787",
        left: "10",
        id: "__alloyId1069"
    });
    $.__views.__alloyId1068.add($.__views.__alloyId1069);
    $.__views.__alloyId1070 = Ti.UI.createLabel({
        text: "85.05",
        color: "black",
        left: "10",
        id: "__alloyId1070"
    });
    $.__views.__alloyId1068.add($.__views.__alloyId1070);
    $.__views.__alloyId1071 = Ti.UI.createView({
        layout: "composite",
        width: "auto",
        id: "__alloyId1071"
    });
    $.__views.__alloyId1066.add($.__views.__alloyId1071);
    $.__views.__alloyId1072 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1072"
    });
    $.__views.__alloyId1071.add($.__views.__alloyId1072);
    $.__views.__alloyId1073 = Ti.UI.createLabel({
        text: "Expiry Date",
        color: "#878787",
        left: "10",
        bottom: "2.5",
        id: "__alloyId1073"
    });
    $.__views.__alloyId1072.add($.__views.__alloyId1073);
    $.__views.__alloyId1074 = Ti.UI.createLabel({
        text: "1 Dec 2015",
        color: "black",
        left: "10",
        top: "2.5",
        id: "__alloyId1074"
    });
    $.__views.__alloyId1072.add($.__views.__alloyId1074);
    $.__views.postpaid = Ti.UI.createScrollView({
        id: "postpaid",
        layout: "vertical",
        backgroundColor: "white"
    });
    $.__views.__alloyId1057.add($.__views.postpaid);
    $.__views.__alloyId1075 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1075"
    });
    $.__views.postpaid.add($.__views.__alloyId1075);
    $.__views.__alloyId1076 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1076"
    });
    $.__views.__alloyId1075.add($.__views.__alloyId1076);
    $.__views.__alloyId1077 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId1077"
    });
    $.__views.__alloyId1076.add($.__views.__alloyId1077);
    accDetail ? $.__views.__alloyId1077.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1077!click!accDetail"] = true;
    $.__views.__alloyId1078 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1078"
    });
    $.__views.__alloyId1075.add($.__views.__alloyId1078);
    $.__views.__alloyId1079 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId1079"
    });
    $.__views.__alloyId1078.add($.__views.__alloyId1079);
    profile ? $.__views.__alloyId1079.addEventListener("click", profile) : __defers["$.__views.__alloyId1079!click!profile"] = true;
    $.__views.__alloyId1080 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1080"
    });
    $.__views.__alloyId1075.add($.__views.__alloyId1080);
    $.__views.__alloyId1081 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId1081"
    });
    $.__views.__alloyId1080.add($.__views.__alloyId1081);
    makePayment ? $.__views.__alloyId1081.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1081!click!makePayment"] = true;
    $.__views.__alloyId1082 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1082"
    });
    $.__views.postpaid.add($.__views.__alloyId1082);
    $.__views.__alloyId1083 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1083"
    });
    $.__views.__alloyId1082.add($.__views.__alloyId1083);
    $.__views.__alloyId1084 = Ti.UI.createLabel({
        text: "Postpaid Account Details",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1084"
    });
    $.__views.__alloyId1083.add($.__views.__alloyId1084);
    accDetail ? $.__views.__alloyId1084.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1084!click!accDetail"] = true;
    $.__views.__alloyId1085 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1085"
    });
    $.__views.__alloyId1082.add($.__views.__alloyId1085);
    $.__views.__alloyId1086 = Ti.UI.createLabel({
        text: "My Profile",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1086"
    });
    $.__views.__alloyId1085.add($.__views.__alloyId1086);
    profile ? $.__views.__alloyId1086.addEventListener("click", profile) : __defers["$.__views.__alloyId1086!click!profile"] = true;
    $.__views.__alloyId1087 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1087"
    });
    $.__views.__alloyId1082.add($.__views.__alloyId1087);
    $.__views.__alloyId1088 = Ti.UI.createLabel({
        text: "Payment",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1088"
    });
    $.__views.__alloyId1087.add($.__views.__alloyId1088);
    makePayment ? $.__views.__alloyId1088.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1088!click!makePayment"] = true;
    $.__views.__alloyId1089 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1089"
    });
    $.__views.postpaid.add($.__views.__alloyId1089);
    $.__views.__alloyId1090 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1090"
    });
    $.__views.__alloyId1089.add($.__views.__alloyId1090);
    $.__views.__alloyId1091 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1091"
    });
    $.__views.__alloyId1090.add($.__views.__alloyId1091);
    vas ? $.__views.__alloyId1091.addEventListener("click", vas) : __defers["$.__views.__alloyId1091!click!vas"] = true;
    $.__views.__alloyId1092 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1092"
    });
    $.__views.__alloyId1089.add($.__views.__alloyId1092);
    $.__views.__alloyId1093 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_04.png",
        id: "__alloyId1093"
    });
    $.__views.__alloyId1092.add($.__views.__alloyId1093);
    subline ? $.__views.__alloyId1093.addEventListener("click", subline) : __defers["$.__views.__alloyId1093!click!subline"] = true;
    $.__views.__alloyId1094 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1094"
    });
    $.__views.__alloyId1089.add($.__views.__alloyId1094);
    $.__views.__alloyId1095 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1095"
    });
    $.__views.__alloyId1094.add($.__views.__alloyId1095);
    subline ? $.__views.__alloyId1095.addEventListener("click", subline) : __defers["$.__views.__alloyId1095!click!subline"] = true;
    $.__views.__alloyId1096 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1096"
    });
    $.__views.postpaid.add($.__views.__alloyId1096);
    $.__views.__alloyId1097 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1097"
    });
    $.__views.__alloyId1096.add($.__views.__alloyId1097);
    $.__views.__alloyId1098 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1098"
    });
    $.__views.__alloyId1097.add($.__views.__alloyId1098);
    subline ? $.__views.__alloyId1098.addEventListener("click", subline) : __defers["$.__views.__alloyId1098!click!subline"] = true;
    $.__views.__alloyId1099 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1099"
    });
    $.__views.__alloyId1096.add($.__views.__alloyId1099);
    $.__views.__alloyId1100 = Ti.UI.createLabel({
        text: "Subline Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1100"
    });
    $.__views.__alloyId1099.add($.__views.__alloyId1100);
    subline ? $.__views.__alloyId1100.addEventListener("click", subline) : __defers["$.__views.__alloyId1100!click!subline"] = true;
    $.__views.__alloyId1101 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1101"
    });
    $.__views.__alloyId1096.add($.__views.__alloyId1101);
    $.__views.__alloyId1102 = Ti.UI.createLabel({
        text: "Friends & Family",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1102"
    });
    $.__views.__alloyId1101.add($.__views.__alloyId1102);
    subline ? $.__views.__alloyId1102.addEventListener("click", subline) : __defers["$.__views.__alloyId1102!click!subline"] = true;
    $.__views.__alloyId1103 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1103"
    });
    $.__views.postpaid.add($.__views.__alloyId1103);
    $.__views.__alloyId1104 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1104"
    });
    $.__views.__alloyId1103.add($.__views.__alloyId1104);
    $.__views.__alloyId1105 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1105"
    });
    $.__views.__alloyId1104.add($.__views.__alloyId1105);
    vas ? $.__views.__alloyId1105.addEventListener("click", vas) : __defers["$.__views.__alloyId1105!click!vas"] = true;
    $.__views.__alloyId1106 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1106"
    });
    $.__views.__alloyId1103.add($.__views.__alloyId1106);
    $.__views.__alloyId1107 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1107"
    });
    $.__views.__alloyId1106.add($.__views.__alloyId1107);
    loyalty ? $.__views.__alloyId1107.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1107!click!loyalty"] = true;
    $.__views.__alloyId1108 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1108"
    });
    $.__views.__alloyId1103.add($.__views.__alloyId1108);
    $.__views.__alloyId1109 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1109"
    });
    $.__views.__alloyId1108.add($.__views.__alloyId1109);
    report ? $.__views.__alloyId1109.addEventListener("click", report) : __defers["$.__views.__alloyId1109!click!report"] = true;
    $.__views.__alloyId1110 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1110"
    });
    $.__views.postpaid.add($.__views.__alloyId1110);
    $.__views.__alloyId1111 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1111"
    });
    $.__views.__alloyId1110.add($.__views.__alloyId1111);
    $.__views.__alloyId1112 = Ti.UI.createLabel({
        text: "VAS Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1112"
    });
    $.__views.__alloyId1111.add($.__views.__alloyId1112);
    vas ? $.__views.__alloyId1112.addEventListener("click", vas) : __defers["$.__views.__alloyId1112!click!vas"] = true;
    $.__views.__alloyId1113 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1113"
    });
    $.__views.__alloyId1110.add($.__views.__alloyId1113);
    $.__views.__alloyId1114 = Ti.UI.createLabel({
        text: "Loyalty",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1114"
    });
    $.__views.__alloyId1113.add($.__views.__alloyId1114);
    loyalty ? $.__views.__alloyId1114.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1114!click!loyalty"] = true;
    $.__views.__alloyId1115 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1115"
    });
    $.__views.__alloyId1110.add($.__views.__alloyId1115);
    $.__views.__alloyId1116 = Ti.UI.createLabel({
        text: "Email Notification",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1116"
    });
    $.__views.__alloyId1115.add($.__views.__alloyId1116);
    loyalty ? $.__views.__alloyId1116.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1116!click!loyalty"] = true;
    $.__views.__alloyId1117 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1117"
    });
    $.__views.postpaid.add($.__views.__alloyId1117);
    $.__views.__alloyId1118 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1118"
    });
    $.__views.__alloyId1117.add($.__views.__alloyId1118);
    $.__views.__alloyId1119 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1119"
    });
    $.__views.__alloyId1118.add($.__views.__alloyId1119);
    report ? $.__views.__alloyId1119.addEventListener("click", report) : __defers["$.__views.__alloyId1119!click!report"] = true;
    $.__views.__alloyId1120 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1120"
    });
    $.__views.__alloyId1117.add($.__views.__alloyId1120);
    $.__views.__alloyId1121 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_09.png",
        id: "__alloyId1121"
    });
    $.__views.__alloyId1120.add($.__views.__alloyId1121);
    faq ? $.__views.__alloyId1121.addEventListener("click", faq) : __defers["$.__views.__alloyId1121!click!faq"] = true;
    $.__views.__alloyId1122 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1122"
    });
    $.__views.__alloyId1117.add($.__views.__alloyId1122);
    $.__views.__alloyId1123 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1123"
    });
    $.__views.__alloyId1122.add($.__views.__alloyId1123);
    orderingHistory ? $.__views.__alloyId1123.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1123!click!orderingHistory"] = true;
    $.__views.__alloyId1124 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1124"
    });
    $.__views.postpaid.add($.__views.__alloyId1124);
    $.__views.__alloyId1125 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1125"
    });
    $.__views.__alloyId1124.add($.__views.__alloyId1125);
    $.__views.__alloyId1126 = Ti.UI.createLabel({
        text: "Report Case",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1126"
    });
    $.__views.__alloyId1125.add($.__views.__alloyId1126);
    report ? $.__views.__alloyId1126.addEventListener("click", report) : __defers["$.__views.__alloyId1126!click!report"] = true;
    $.__views.__alloyId1127 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1127"
    });
    $.__views.__alloyId1124.add($.__views.__alloyId1127);
    $.__views.__alloyId1128 = Ti.UI.createLabel({
        text: "FAQs",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1128"
    });
    $.__views.__alloyId1127.add($.__views.__alloyId1128);
    faq ? $.__views.__alloyId1128.addEventListener("click", faq) : __defers["$.__views.__alloyId1128!click!faq"] = true;
    $.__views.__alloyId1129 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1129"
    });
    $.__views.__alloyId1124.add($.__views.__alloyId1129);
    $.__views.__alloyId1130 = Ti.UI.createLabel({
        text: "Ordering History",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1130"
    });
    $.__views.__alloyId1129.add($.__views.__alloyId1130);
    orderingHistory ? $.__views.__alloyId1130.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1130!click!orderingHistory"] = true;
    $.__views.prepaid = Ti.UI.createScrollView({
        id: "prepaid",
        layout: "vertical",
        backgroundColor: "white"
    });
    $.__views.__alloyId1057.add($.__views.prepaid);
    $.__views.__alloyId1131 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1131"
    });
    $.__views.prepaid.add($.__views.__alloyId1131);
    $.__views.__alloyId1132 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1132"
    });
    $.__views.__alloyId1131.add($.__views.__alloyId1132);
    $.__views.__alloyId1133 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId1133"
    });
    $.__views.__alloyId1132.add($.__views.__alloyId1133);
    accDetail ? $.__views.__alloyId1133.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1133!click!accDetail"] = true;
    $.__views.__alloyId1134 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1134"
    });
    $.__views.__alloyId1131.add($.__views.__alloyId1134);
    $.__views.__alloyId1135 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId1135"
    });
    $.__views.__alloyId1134.add($.__views.__alloyId1135);
    profile ? $.__views.__alloyId1135.addEventListener("click", profile) : __defers["$.__views.__alloyId1135!click!profile"] = true;
    $.__views.__alloyId1136 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1136"
    });
    $.__views.__alloyId1131.add($.__views.__alloyId1136);
    $.__views.__alloyId1137 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId1137"
    });
    $.__views.__alloyId1136.add($.__views.__alloyId1137);
    makePayment ? $.__views.__alloyId1137.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1137!click!makePayment"] = true;
    $.__views.__alloyId1138 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1138"
    });
    $.__views.prepaid.add($.__views.__alloyId1138);
    $.__views.__alloyId1139 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1139"
    });
    $.__views.__alloyId1138.add($.__views.__alloyId1139);
    $.__views.__alloyId1140 = Ti.UI.createLabel({
        text: "Prepaid Account Details",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1140"
    });
    $.__views.__alloyId1139.add($.__views.__alloyId1140);
    accDetail ? $.__views.__alloyId1140.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1140!click!accDetail"] = true;
    $.__views.__alloyId1141 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1141"
    });
    $.__views.__alloyId1138.add($.__views.__alloyId1141);
    $.__views.__alloyId1142 = Ti.UI.createLabel({
        text: "My Profile",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1142"
    });
    $.__views.__alloyId1141.add($.__views.__alloyId1142);
    profile ? $.__views.__alloyId1142.addEventListener("click", profile) : __defers["$.__views.__alloyId1142!click!profile"] = true;
    $.__views.__alloyId1143 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1143"
    });
    $.__views.__alloyId1138.add($.__views.__alloyId1143);
    $.__views.__alloyId1144 = Ti.UI.createLabel({
        text: "Payment",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1144"
    });
    $.__views.__alloyId1143.add($.__views.__alloyId1144);
    makePayment ? $.__views.__alloyId1144.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1144!click!makePayment"] = true;
    $.__views.__alloyId1145 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1145"
    });
    $.__views.prepaid.add($.__views.__alloyId1145);
    $.__views.__alloyId1146 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1146"
    });
    $.__views.__alloyId1145.add($.__views.__alloyId1146);
    $.__views.__alloyId1147 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1147"
    });
    $.__views.__alloyId1146.add($.__views.__alloyId1147);
    vas ? $.__views.__alloyId1147.addEventListener("click", vas) : __defers["$.__views.__alloyId1147!click!vas"] = true;
    $.__views.__alloyId1148 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1148"
    });
    $.__views.__alloyId1145.add($.__views.__alloyId1148);
    $.__views.__alloyId1149 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_04.png",
        id: "__alloyId1149"
    });
    $.__views.__alloyId1148.add($.__views.__alloyId1149);
    subline ? $.__views.__alloyId1149.addEventListener("click", subline) : __defers["$.__views.__alloyId1149!click!subline"] = true;
    $.__views.__alloyId1150 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1150"
    });
    $.__views.__alloyId1145.add($.__views.__alloyId1150);
    $.__views.__alloyId1151 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1151"
    });
    $.__views.__alloyId1150.add($.__views.__alloyId1151);
    subline ? $.__views.__alloyId1151.addEventListener("click", subline) : __defers["$.__views.__alloyId1151!click!subline"] = true;
    $.__views.__alloyId1152 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1152"
    });
    $.__views.prepaid.add($.__views.__alloyId1152);
    $.__views.__alloyId1153 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1153"
    });
    $.__views.__alloyId1152.add($.__views.__alloyId1153);
    $.__views.__alloyId1154 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1154"
    });
    $.__views.__alloyId1153.add($.__views.__alloyId1154);
    subline ? $.__views.__alloyId1154.addEventListener("click", subline) : __defers["$.__views.__alloyId1154!click!subline"] = true;
    $.__views.__alloyId1155 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1155"
    });
    $.__views.__alloyId1152.add($.__views.__alloyId1155);
    $.__views.__alloyId1156 = Ti.UI.createLabel({
        text: "Subline Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1156"
    });
    $.__views.__alloyId1155.add($.__views.__alloyId1156);
    subline ? $.__views.__alloyId1156.addEventListener("click", subline) : __defers["$.__views.__alloyId1156!click!subline"] = true;
    $.__views.__alloyId1157 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1157"
    });
    $.__views.__alloyId1152.add($.__views.__alloyId1157);
    $.__views.__alloyId1158 = Ti.UI.createLabel({
        text: "Friends & Family",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1158"
    });
    $.__views.__alloyId1157.add($.__views.__alloyId1158);
    subline ? $.__views.__alloyId1158.addEventListener("click", subline) : __defers["$.__views.__alloyId1158!click!subline"] = true;
    $.__views.__alloyId1159 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1159"
    });
    $.__views.prepaid.add($.__views.__alloyId1159);
    $.__views.__alloyId1160 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1160"
    });
    $.__views.__alloyId1159.add($.__views.__alloyId1160);
    $.__views.__alloyId1161 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1161"
    });
    $.__views.__alloyId1160.add($.__views.__alloyId1161);
    vas ? $.__views.__alloyId1161.addEventListener("click", vas) : __defers["$.__views.__alloyId1161!click!vas"] = true;
    $.__views.__alloyId1162 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1162"
    });
    $.__views.__alloyId1159.add($.__views.__alloyId1162);
    $.__views.__alloyId1163 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1163"
    });
    $.__views.__alloyId1162.add($.__views.__alloyId1163);
    loyalty ? $.__views.__alloyId1163.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1163!click!loyalty"] = true;
    $.__views.__alloyId1164 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1164"
    });
    $.__views.__alloyId1159.add($.__views.__alloyId1164);
    $.__views.__alloyId1165 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1165"
    });
    $.__views.__alloyId1164.add($.__views.__alloyId1165);
    report ? $.__views.__alloyId1165.addEventListener("click", report) : __defers["$.__views.__alloyId1165!click!report"] = true;
    $.__views.__alloyId1166 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1166"
    });
    $.__views.prepaid.add($.__views.__alloyId1166);
    $.__views.__alloyId1167 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1167"
    });
    $.__views.__alloyId1166.add($.__views.__alloyId1167);
    $.__views.__alloyId1168 = Ti.UI.createLabel({
        text: "VAS Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1168"
    });
    $.__views.__alloyId1167.add($.__views.__alloyId1168);
    vas ? $.__views.__alloyId1168.addEventListener("click", vas) : __defers["$.__views.__alloyId1168!click!vas"] = true;
    $.__views.__alloyId1169 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1169"
    });
    $.__views.__alloyId1166.add($.__views.__alloyId1169);
    $.__views.__alloyId1170 = Ti.UI.createLabel({
        text: "Loyalty",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1170"
    });
    $.__views.__alloyId1169.add($.__views.__alloyId1170);
    loyalty ? $.__views.__alloyId1170.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1170!click!loyalty"] = true;
    $.__views.__alloyId1171 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1171"
    });
    $.__views.__alloyId1166.add($.__views.__alloyId1171);
    $.__views.__alloyId1172 = Ti.UI.createLabel({
        text: "Email Notification",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1172"
    });
    $.__views.__alloyId1171.add($.__views.__alloyId1172);
    loyalty ? $.__views.__alloyId1172.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1172!click!loyalty"] = true;
    $.__views.__alloyId1173 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1173"
    });
    $.__views.prepaid.add($.__views.__alloyId1173);
    $.__views.__alloyId1174 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1174"
    });
    $.__views.__alloyId1173.add($.__views.__alloyId1174);
    $.__views.__alloyId1175 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1175"
    });
    $.__views.__alloyId1174.add($.__views.__alloyId1175);
    report ? $.__views.__alloyId1175.addEventListener("click", report) : __defers["$.__views.__alloyId1175!click!report"] = true;
    $.__views.__alloyId1176 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1176"
    });
    $.__views.__alloyId1173.add($.__views.__alloyId1176);
    $.__views.__alloyId1177 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_09.png",
        id: "__alloyId1177"
    });
    $.__views.__alloyId1176.add($.__views.__alloyId1177);
    faq ? $.__views.__alloyId1177.addEventListener("click", faq) : __defers["$.__views.__alloyId1177!click!faq"] = true;
    $.__views.__alloyId1178 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1178"
    });
    $.__views.__alloyId1173.add($.__views.__alloyId1178);
    $.__views.__alloyId1179 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1179"
    });
    $.__views.__alloyId1178.add($.__views.__alloyId1179);
    orderingHistory ? $.__views.__alloyId1179.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1179!click!orderingHistory"] = true;
    $.__views.__alloyId1180 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1180"
    });
    $.__views.prepaid.add($.__views.__alloyId1180);
    $.__views.__alloyId1181 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1181"
    });
    $.__views.__alloyId1180.add($.__views.__alloyId1181);
    $.__views.__alloyId1182 = Ti.UI.createLabel({
        text: "Report Case",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1182"
    });
    $.__views.__alloyId1181.add($.__views.__alloyId1182);
    report ? $.__views.__alloyId1182.addEventListener("click", report) : __defers["$.__views.__alloyId1182!click!report"] = true;
    $.__views.__alloyId1183 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1183"
    });
    $.__views.__alloyId1180.add($.__views.__alloyId1183);
    $.__views.__alloyId1184 = Ti.UI.createLabel({
        text: "FAQs",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1184"
    });
    $.__views.__alloyId1183.add($.__views.__alloyId1184);
    faq ? $.__views.__alloyId1184.addEventListener("click", faq) : __defers["$.__views.__alloyId1184!click!faq"] = true;
    $.__views.__alloyId1185 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1185"
    });
    $.__views.__alloyId1180.add($.__views.__alloyId1185);
    $.__views.__alloyId1186 = Ti.UI.createLabel({
        text: "Ordering History",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1186"
    });
    $.__views.__alloyId1185.add($.__views.__alloyId1186);
    orderingHistory ? $.__views.__alloyId1186.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1186!click!orderingHistory"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var status = "postpaid";
    var new_event = [ [ "Season Pass", "/images/acc_button_01.png" ] ];
    if ("postpaid" == status) {
        console.log("postpaid");
        $.prepaid.height = 0;
    } else {
        console.log("prepaid");
        $.postpaid.height = 0;
    }
    if (new_event[0].length > 0) {
        var view = Titanium.UI.createView({
            width: Ti.UI.FILL,
            height: "30%",
            layout: "horizontal"
        });
        var image_view = Titanium.UI.createView({
            width: "33%",
            height: Ti.UI.FILL
        });
        var image = Ti.UI.createImageView({
            width: "80",
            height: "80",
            image: new_event[0][1]
        });
        var view2 = Titanium.UI.createView({
            width: Ti.UI.FILL,
            height: "15%",
            layout: "horizontal"
        });
        var label_view = Titanium.UI.createView({
            width: "33%",
            height: Ti.UI.FILL
        });
        var label = Titanium.UI.createLabel({
            color: "#41B9C7",
            textAlign: "center",
            top: "0",
            text: new_event[0][0]
        });
        image_view.add(image);
        view.add(image_view);
        label_view.add(label);
        view2.add(label_view);
        if ("postpaid" == status) {
            $.postpaid.add(view);
            $.postpaid.add(view2);
        } else {
            $.prepaid.add(view);
            $.prepaid.add(view2);
        }
    }
    __defers["$.__views.__alloyId1036!click!close"] && $.__views.__alloyId1036.addEventListener("click", close);
    __defers["$.__views.__alloyId1037!click!gallery"] && $.__views.__alloyId1037.addEventListener("click", gallery);
    __defers["$.__views.__alloyId1042!click!facebook"] && $.__views.__alloyId1042.addEventListener("click", facebook);
    __defers["$.__views.__alloyId1050!click!closepayment"] && $.__views.__alloyId1050.addEventListener("click", closepayment);
    __defers["$.__views.__alloyId1051!click!paymentPostpaid"] && $.__views.__alloyId1051.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId1054!click!paymentPrepaid"] && $.__views.__alloyId1054.addEventListener("click", paymentPrepaid);
    __defers["$.__views.__alloyId1064!click!editPhoto"] && $.__views.__alloyId1064.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId1065!click!editPhoto"] && $.__views.__alloyId1065.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId1077!click!accDetail"] && $.__views.__alloyId1077.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1079!click!profile"] && $.__views.__alloyId1079.addEventListener("click", profile);
    __defers["$.__views.__alloyId1081!click!makePayment"] && $.__views.__alloyId1081.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1084!click!accDetail"] && $.__views.__alloyId1084.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1086!click!profile"] && $.__views.__alloyId1086.addEventListener("click", profile);
    __defers["$.__views.__alloyId1088!click!makePayment"] && $.__views.__alloyId1088.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1091!click!vas"] && $.__views.__alloyId1091.addEventListener("click", vas);
    __defers["$.__views.__alloyId1093!click!subline"] && $.__views.__alloyId1093.addEventListener("click", subline);
    __defers["$.__views.__alloyId1095!click!subline"] && $.__views.__alloyId1095.addEventListener("click", subline);
    __defers["$.__views.__alloyId1098!click!subline"] && $.__views.__alloyId1098.addEventListener("click", subline);
    __defers["$.__views.__alloyId1100!click!subline"] && $.__views.__alloyId1100.addEventListener("click", subline);
    __defers["$.__views.__alloyId1102!click!subline"] && $.__views.__alloyId1102.addEventListener("click", subline);
    __defers["$.__views.__alloyId1105!click!vas"] && $.__views.__alloyId1105.addEventListener("click", vas);
    __defers["$.__views.__alloyId1107!click!loyalty"] && $.__views.__alloyId1107.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1109!click!report"] && $.__views.__alloyId1109.addEventListener("click", report);
    __defers["$.__views.__alloyId1112!click!vas"] && $.__views.__alloyId1112.addEventListener("click", vas);
    __defers["$.__views.__alloyId1114!click!loyalty"] && $.__views.__alloyId1114.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1116!click!loyalty"] && $.__views.__alloyId1116.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1119!click!report"] && $.__views.__alloyId1119.addEventListener("click", report);
    __defers["$.__views.__alloyId1121!click!faq"] && $.__views.__alloyId1121.addEventListener("click", faq);
    __defers["$.__views.__alloyId1123!click!orderingHistory"] && $.__views.__alloyId1123.addEventListener("click", orderingHistory);
    __defers["$.__views.__alloyId1126!click!report"] && $.__views.__alloyId1126.addEventListener("click", report);
    __defers["$.__views.__alloyId1128!click!faq"] && $.__views.__alloyId1128.addEventListener("click", faq);
    __defers["$.__views.__alloyId1130!click!orderingHistory"] && $.__views.__alloyId1130.addEventListener("click", orderingHistory);
    __defers["$.__views.__alloyId1133!click!accDetail"] && $.__views.__alloyId1133.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1135!click!profile"] && $.__views.__alloyId1135.addEventListener("click", profile);
    __defers["$.__views.__alloyId1137!click!makePayment"] && $.__views.__alloyId1137.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1140!click!accDetail"] && $.__views.__alloyId1140.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1142!click!profile"] && $.__views.__alloyId1142.addEventListener("click", profile);
    __defers["$.__views.__alloyId1144!click!makePayment"] && $.__views.__alloyId1144.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1147!click!vas"] && $.__views.__alloyId1147.addEventListener("click", vas);
    __defers["$.__views.__alloyId1149!click!subline"] && $.__views.__alloyId1149.addEventListener("click", subline);
    __defers["$.__views.__alloyId1151!click!subline"] && $.__views.__alloyId1151.addEventListener("click", subline);
    __defers["$.__views.__alloyId1154!click!subline"] && $.__views.__alloyId1154.addEventListener("click", subline);
    __defers["$.__views.__alloyId1156!click!subline"] && $.__views.__alloyId1156.addEventListener("click", subline);
    __defers["$.__views.__alloyId1158!click!subline"] && $.__views.__alloyId1158.addEventListener("click", subline);
    __defers["$.__views.__alloyId1161!click!vas"] && $.__views.__alloyId1161.addEventListener("click", vas);
    __defers["$.__views.__alloyId1163!click!loyalty"] && $.__views.__alloyId1163.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1165!click!report"] && $.__views.__alloyId1165.addEventListener("click", report);
    __defers["$.__views.__alloyId1168!click!vas"] && $.__views.__alloyId1168.addEventListener("click", vas);
    __defers["$.__views.__alloyId1170!click!loyalty"] && $.__views.__alloyId1170.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1172!click!loyalty"] && $.__views.__alloyId1172.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1175!click!report"] && $.__views.__alloyId1175.addEventListener("click", report);
    __defers["$.__views.__alloyId1177!click!faq"] && $.__views.__alloyId1177.addEventListener("click", faq);
    __defers["$.__views.__alloyId1179!click!orderingHistory"] && $.__views.__alloyId1179.addEventListener("click", orderingHistory);
    __defers["$.__views.__alloyId1182!click!report"] && $.__views.__alloyId1182.addEventListener("click", report);
    __defers["$.__views.__alloyId1184!click!faq"] && $.__views.__alloyId1184.addEventListener("click", faq);
    __defers["$.__views.__alloyId1186!click!orderingHistory"] && $.__views.__alloyId1186.addEventListener("click", orderingHistory);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;