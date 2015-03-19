function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "seasonPass1";
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
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        height: "100%",
        scrollType: "vertical",
        backgroundColor: "#FFFFFF"
    });
    $.__views.scrollView && $.addTopLevelView($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId636 = Ti.UI.createView({
=======
    $.__views.__alloyId1007 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
<<<<<<< HEAD
        id: "__alloyId636"
    });
    $.__views.scrollView.add($.__views.__alloyId636);
    $.__views.__alloyId637 = Ti.UI.createView({
=======
        id: "__alloyId1007"
    });
    $.__views.scrollView.add($.__views.__alloyId1007);
    $.__views.__alloyId1008 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
<<<<<<< HEAD
        id: "__alloyId637"
    });
    $.__views.__alloyId636.add($.__views.__alloyId637);
    $.__views.__alloyId638 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId638"
    });
    $.__views.__alloyId637.add($.__views.__alloyId638);
    $.__views.__alloyId639 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId639"
    });
    $.__views.__alloyId638.add($.__views.__alloyId639);
    $.__views.__alloyId640 = Ti.UI.createLabel({
=======
        id: "__alloyId1008"
    });
    $.__views.__alloyId1007.add($.__views.__alloyId1008);
    $.__views.__alloyId1009 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId1009"
    });
    $.__views.__alloyId1008.add($.__views.__alloyId1009);
    $.__views.__alloyId1010 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1010"
    });
    $.__views.__alloyId1009.add($.__views.__alloyId1010);
    $.__views.__alloyId1011 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId640"
    });
    $.__views.__alloyId639.add($.__views.__alloyId640);
    $.__views.__alloyId641 = Ti.UI.createLabel({
=======
        id: "__alloyId1011"
    });
    $.__views.__alloyId1010.add($.__views.__alloyId1011);
    $.__views.__alloyId1012 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId641"
    });
    $.__views.__alloyId639.add($.__views.__alloyId641);
    $.__views.__alloyId642 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId642"
    });
    $.__views.__alloyId637.add($.__views.__alloyId642);
    $.__views.__alloyId643 = Ti.UI.createView({
=======
        id: "__alloyId1012"
    });
    $.__views.__alloyId1010.add($.__views.__alloyId1012);
    $.__views.__alloyId1013 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId1013"
    });
    $.__views.__alloyId1008.add($.__views.__alloyId1013);
    $.__views.__alloyId1014 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
<<<<<<< HEAD
        id: "__alloyId643"
    });
    $.__views.__alloyId642.add($.__views.__alloyId643);
    $.__views.__alloyId644 = Ti.UI.createLabel({
=======
        id: "__alloyId1014"
    });
    $.__views.__alloyId1013.add($.__views.__alloyId1014);
    $.__views.__alloyId1015 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId644"
    });
    $.__views.__alloyId643.add($.__views.__alloyId644);
    $.__views.__alloyId645 = Ti.UI.createLabel({
=======
        id: "__alloyId1015"
    });
    $.__views.__alloyId1014.add($.__views.__alloyId1015);
    $.__views.__alloyId1016 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId645"
    });
    $.__views.__alloyId643.add($.__views.__alloyId645);
    $.__views.__alloyId646 = Ti.UI.createView({
=======
        id: "__alloyId1016"
    });
    $.__views.__alloyId1014.add($.__views.__alloyId1016);
    $.__views.__alloyId1017 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
<<<<<<< HEAD
        id: "__alloyId646"
    });
    $.__views.__alloyId636.add($.__views.__alloyId646);
    $.__views.__alloyId647 = Ti.UI.createLabel({
=======
        id: "__alloyId1017"
    });
    $.__views.__alloyId1007.add($.__views.__alloyId1017);
    $.__views.__alloyId1018 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId647"
    });
    $.__views.__alloyId646.add($.__views.__alloyId647);
    $.__views.__alloyId648 = Ti.UI.createView({
=======
        id: "__alloyId1018"
    });
    $.__views.__alloyId1017.add($.__views.__alloyId1018);
    $.__views.__alloyId1019 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
<<<<<<< HEAD
        id: "__alloyId648"
    });
    $.__views.__alloyId636.add($.__views.__alloyId648);
    $.__views.__alloyId649 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId649"
    });
    $.__views.__alloyId648.add($.__views.__alloyId649);
    $.__views.__alloyId650 = Ti.UI.createLabel({
=======
        id: "__alloyId1019"
    });
    $.__views.__alloyId1007.add($.__views.__alloyId1019);
    $.__views.__alloyId1020 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1020"
    });
    $.__views.__alloyId1019.add($.__views.__alloyId1020);
    $.__views.__alloyId1021 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId650"
    });
    $.__views.__alloyId649.add($.__views.__alloyId650);
    $.__views.__alloyId651 = Ti.UI.createLabel({
=======
        id: "__alloyId1021"
    });
    $.__views.__alloyId1020.add($.__views.__alloyId1021);
    $.__views.__alloyId1022 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId651"
    });
    $.__views.__alloyId649.add($.__views.__alloyId651);
    $.__views.__alloyId652 = Ti.UI.createView({
=======
        id: "__alloyId1022"
    });
    $.__views.__alloyId1020.add($.__views.__alloyId1022);
    $.__views.__alloyId1023 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId652"
    });
    $.__views.scrollView.add($.__views.__alloyId652);
    $.__views.__alloyId653 = Ti.UI.createView({
=======
        id: "__alloyId1023"
    });
    $.__views.scrollView.add($.__views.__alloyId1023);
    $.__views.__alloyId1024 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
<<<<<<< HEAD
        id: "__alloyId653"
    });
    $.__views.__alloyId652.add($.__views.__alloyId653);
    $.__views.__alloyId654 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId654"
    });
    $.__views.__alloyId653.add($.__views.__alloyId654);
    $.__views.__alloyId655 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId655"
    });
    $.__views.__alloyId654.add($.__views.__alloyId655);
    $.__views.__alloyId656 = Ti.UI.createLabel({
=======
        id: "__alloyId1024"
    });
    $.__views.__alloyId1023.add($.__views.__alloyId1024);
    $.__views.__alloyId1025 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId1025"
    });
    $.__views.__alloyId1024.add($.__views.__alloyId1025);
    $.__views.__alloyId1026 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1026"
    });
    $.__views.__alloyId1025.add($.__views.__alloyId1026);
    $.__views.__alloyId1027 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId656"
    });
    $.__views.__alloyId655.add($.__views.__alloyId656);
    $.__views.__alloyId657 = Ti.UI.createLabel({
=======
        id: "__alloyId1027"
    });
    $.__views.__alloyId1026.add($.__views.__alloyId1027);
    $.__views.__alloyId1028 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId657"
    });
    $.__views.__alloyId655.add($.__views.__alloyId657);
    $.__views.__alloyId658 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId658"
    });
    $.__views.__alloyId653.add($.__views.__alloyId658);
    $.__views.__alloyId659 = Ti.UI.createView({
=======
        id: "__alloyId1028"
    });
    $.__views.__alloyId1026.add($.__views.__alloyId1028);
    $.__views.__alloyId1029 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId1029"
    });
    $.__views.__alloyId1024.add($.__views.__alloyId1029);
    $.__views.__alloyId1030 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
<<<<<<< HEAD
        id: "__alloyId659"
    });
    $.__views.__alloyId658.add($.__views.__alloyId659);
    $.__views.__alloyId660 = Ti.UI.createLabel({
=======
        id: "__alloyId1030"
    });
    $.__views.__alloyId1029.add($.__views.__alloyId1030);
    $.__views.__alloyId1031 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId660"
    });
    $.__views.__alloyId659.add($.__views.__alloyId660);
    $.__views.__alloyId661 = Ti.UI.createLabel({
=======
        id: "__alloyId1031"
    });
    $.__views.__alloyId1030.add($.__views.__alloyId1031);
    $.__views.__alloyId1032 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId661"
    });
    $.__views.__alloyId659.add($.__views.__alloyId661);
    $.__views.__alloyId662 = Ti.UI.createView({
=======
        id: "__alloyId1032"
    });
    $.__views.__alloyId1030.add($.__views.__alloyId1032);
    $.__views.__alloyId1033 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
<<<<<<< HEAD
        id: "__alloyId662"
    });
    $.__views.__alloyId652.add($.__views.__alloyId662);
    $.__views.__alloyId663 = Ti.UI.createLabel({
=======
        id: "__alloyId1033"
    });
    $.__views.__alloyId1023.add($.__views.__alloyId1033);
    $.__views.__alloyId1034 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId663"
    });
    $.__views.__alloyId662.add($.__views.__alloyId663);
    $.__views.__alloyId664 = Ti.UI.createView({
=======
        id: "__alloyId1034"
    });
    $.__views.__alloyId1033.add($.__views.__alloyId1034);
    $.__views.__alloyId1035 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
<<<<<<< HEAD
        id: "__alloyId664"
    });
    $.__views.__alloyId652.add($.__views.__alloyId664);
    $.__views.__alloyId665 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId665"
    });
    $.__views.__alloyId664.add($.__views.__alloyId665);
    $.__views.__alloyId666 = Ti.UI.createLabel({
=======
        id: "__alloyId1035"
    });
    $.__views.__alloyId1023.add($.__views.__alloyId1035);
    $.__views.__alloyId1036 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1036"
    });
    $.__views.__alloyId1035.add($.__views.__alloyId1036);
    $.__views.__alloyId1037 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId666"
    });
    $.__views.__alloyId665.add($.__views.__alloyId666);
    $.__views.__alloyId667 = Ti.UI.createLabel({
=======
        id: "__alloyId1037"
    });
    $.__views.__alloyId1036.add($.__views.__alloyId1037);
    $.__views.__alloyId1038 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId667"
    });
    $.__views.__alloyId665.add($.__views.__alloyId667);
=======
        id: "__alloyId1038"
    });
    $.__views.__alloyId1036.add($.__views.__alloyId1038);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;