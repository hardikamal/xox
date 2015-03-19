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
    function payment() {
        DRAWER.navigation("payment", 1);
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
    function editPhoto() {
        console.log("editPhoto");
        $.photo.zIndex = 2;
    }
    function close() {
        console.log("close");
        $.photo.zIndex = 0;
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
    $.__views.__alloyId599 = Alloy.createController("_header", {
        id: "__alloyId599",
        __parentSymbol: $.__views.myAccount
    });
    $.__views.__alloyId599.setParent($.__views.myAccount);
    $.__views.photo = Ti.UI.createView({
        id: "photo",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.myAccount.add($.__views.photo);
    $.__views.__alloyId600 = Ti.UI.createView({
        layout: "vertical",
        width: "80%",
        height: "40%",
        backgroundColor: "white",
        id: "__alloyId600"
    });
    $.__views.photo.add($.__views.__alloyId600);
    $.__views.__alloyId601 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId601"
    });
    $.__views.__alloyId600.add($.__views.__alloyId601);
    $.__views.__alloyId602 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "#E6E7E9",
        id: "__alloyId602"
    });
    $.__views.__alloyId601.add($.__views.__alloyId602);
    $.__views.__alloyId603 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId603"
    });
    $.__views.__alloyId601.add($.__views.__alloyId603);
    close ? $.__views.__alloyId603.addEventListener("click", close) : __defers["$.__views.__alloyId603!click!close"] = true;
    $.__views.__alloyId604 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId604"
    });
    $.__views.__alloyId600.add($.__views.__alloyId604);
    gallery ? $.__views.__alloyId604.addEventListener("click", gallery) : __defers["$.__views.__alloyId604!click!gallery"] = true;
    $.__views.__alloyId605 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        id: "__alloyId605"
    });
    $.__views.__alloyId604.add($.__views.__alloyId605);
    $.__views.__alloyId606 = Ti.UI.createImageView({
        backgroundColor: "#66FFFF",
        width: "32",
        height: "32",
        left: "10",
        image: "/images/gallery_icon.png",
        id: "__alloyId606"
    });
    $.__views.__alloyId605.add($.__views.__alloyId606);
    $.__views.__alloyId607 = Ti.UI.createView({
        id: "__alloyId607"
    });
    $.__views.__alloyId604.add($.__views.__alloyId607);
    $.__views.__alloyId608 = Ti.UI.createLabel({
        text: "Photo Gallery",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId608"
    });
    $.__views.__alloyId607.add($.__views.__alloyId608);
    $.__views.__alloyId609 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#3E6AC3",
        id: "__alloyId609"
    });
    $.__views.__alloyId600.add($.__views.__alloyId609);
    facebook ? $.__views.__alloyId609.addEventListener("click", facebook) : __defers["$.__views.__alloyId609!click!facebook"] = true;
    $.__views.__alloyId610 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        id: "__alloyId610"
    });
    $.__views.__alloyId609.add($.__views.__alloyId610);
    $.__views.__alloyId611 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "32",
        height: "32",
        left: "10",
        image: "/images/facebook_icon.png",
        id: "__alloyId611"
    });
    $.__views.__alloyId610.add($.__views.__alloyId611);
    $.__views.__alloyId612 = Ti.UI.createView({
        id: "__alloyId612"
    });
    $.__views.__alloyId609.add($.__views.__alloyId612);
    $.__views.__alloyId613 = Ti.UI.createLabel({
        text: "Connect with Facebook",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId613"
    });
    $.__views.__alloyId612.add($.__views.__alloyId613);
    $.__views.__alloyId614 = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "black",
        top: "50",
        zIndex: "1",
        id: "__alloyId614"
    });
    $.__views.myAccount.add($.__views.__alloyId614);
    $.__views.__alloyId615 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        backgroundColor: "red",
        id: "__alloyId615"
    });
    $.__views.__alloyId614.add($.__views.__alloyId615);
    $.__views.__alloyId616 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId616"
    });
    $.__views.__alloyId615.add($.__views.__alloyId616);
    $.__views.__alloyId617 = Ti.UI.createLabel({
        text: "Hello!",
        color: "white",
        left: "10",
        top: "10",
        id: "__alloyId617"
    });
    $.__views.__alloyId616.add($.__views.__alloyId617);
    $.__views.__alloyId618 = Ti.UI.createLabel({
        text: "John Smith",
        color: "white",
        left: "10",
        bottom: "10",
        id: "__alloyId618"
    });
    $.__views.__alloyId616.add($.__views.__alloyId618);
    $.__views.__alloyId619 = Ti.UI.createView({
        width: "33%",
        id: "__alloyId619"
    });
    $.__views.__alloyId615.add($.__views.__alloyId619);
    $.__views.__alloyId620 = Ti.UI.createView({
        width: "auto",
        height: Ti.UI.FILL,
        id: "__alloyId620"
    });
    $.__views.__alloyId615.add($.__views.__alloyId620);
    $.__views.__alloyId621 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/profile_images.png",
        borderRadius: "40",
        id: "__alloyId621"
    });
    $.__views.__alloyId620.add($.__views.__alloyId621);
    editPhoto ? $.__views.__alloyId621.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId621!click!editPhoto"] = true;
    $.__views.__alloyId622 = Ti.UI.createImageView({
        width: "20",
        height: "20",
        image: "/images/profileedit_icon.png",
        borderRadius: "10",
        bottom: "10",
        id: "__alloyId622"
    });
    $.__views.__alloyId620.add($.__views.__alloyId622);
    editPhoto ? $.__views.__alloyId622.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId622!click!editPhoto"] = true;
    $.__views.__alloyId623 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#F5F5F5",
        id: "__alloyId623"
    });
    $.__views.__alloyId614.add($.__views.__alloyId623);
    $.__views.__alloyId624 = Ti.UI.createView({
        layout: "composite",
        width: "50%",
        id: "__alloyId624"
    });
    $.__views.__alloyId623.add($.__views.__alloyId624);
    $.__views.__alloyId625 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId625"
    });
    $.__views.__alloyId624.add($.__views.__alloyId625);
    $.__views.__alloyId626 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "#878787",
        left: "10",
        id: "__alloyId626"
    });
    $.__views.__alloyId625.add($.__views.__alloyId626);
    $.__views.__alloyId627 = Ti.UI.createLabel({
        text: "85.05",
        color: "black",
        left: "10",
        id: "__alloyId627"
    });
    $.__views.__alloyId625.add($.__views.__alloyId627);
    $.__views.__alloyId628 = Ti.UI.createView({
        layout: "composite",
        width: "auto",
        id: "__alloyId628"
    });
    $.__views.__alloyId623.add($.__views.__alloyId628);
    $.__views.__alloyId629 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId629"
    });
    $.__views.__alloyId628.add($.__views.__alloyId629);
    $.__views.__alloyId630 = Ti.UI.createLabel({
        text: "Expiry Date",
        color: "#878787",
        left: "10",
        bottom: "2.5",
        id: "__alloyId630"
    });
    $.__views.__alloyId629.add($.__views.__alloyId630);
    $.__views.__alloyId631 = Ti.UI.createLabel({
        text: "1 Dec 2015",
        color: "black",
        left: "10",
        top: "2.5",
        id: "__alloyId631"
    });
    $.__views.__alloyId629.add($.__views.__alloyId631);
    $.__views.postpaid = Ti.UI.createScrollView({
        id: "postpaid",
        layout: "vertical",
        backgroundColor: "white"
    });
    $.__views.__alloyId614.add($.__views.postpaid);
    $.__views.__alloyId632 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId632"
    });
    $.__views.postpaid.add($.__views.__alloyId632);
    $.__views.__alloyId633 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId633"
    });
    $.__views.__alloyId632.add($.__views.__alloyId633);
    $.__views.__alloyId634 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId634"
    });
    $.__views.__alloyId633.add($.__views.__alloyId634);
    accDetail ? $.__views.__alloyId634.addEventListener("click", accDetail) : __defers["$.__views.__alloyId634!click!accDetail"] = true;
    $.__views.__alloyId635 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId635"
    });
    $.__views.__alloyId632.add($.__views.__alloyId635);
    $.__views.__alloyId636 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId636"
    });
    $.__views.__alloyId635.add($.__views.__alloyId636);
    accDetail ? $.__views.__alloyId636.addEventListener("click", accDetail) : __defers["$.__views.__alloyId636!click!accDetail"] = true;
    $.__views.__alloyId637 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId637"
    });
    $.__views.__alloyId632.add($.__views.__alloyId637);
    $.__views.__alloyId638 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId638"
    });
    $.__views.__alloyId637.add($.__views.__alloyId638);
    payment ? $.__views.__alloyId638.addEventListener("click", payment) : __defers["$.__views.__alloyId638!click!payment"] = true;
    $.__views.__alloyId639 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId639"
    });
    $.__views.postpaid.add($.__views.__alloyId639);
    $.__views.__alloyId640 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId640"
    });
    $.__views.__alloyId639.add($.__views.__alloyId640);
    $.__views.__alloyId641 = Ti.UI.createLabel({
        text: "Postpaid Account Details",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId641"
    });
    $.__views.__alloyId640.add($.__views.__alloyId641);
    accDetail ? $.__views.__alloyId641.addEventListener("click", accDetail) : __defers["$.__views.__alloyId641!click!accDetail"] = true;
    $.__views.__alloyId642 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId642"
    });
    $.__views.__alloyId639.add($.__views.__alloyId642);
    $.__views.__alloyId643 = Ti.UI.createLabel({
        text: "My Profile",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId643"
    });
    $.__views.__alloyId642.add($.__views.__alloyId643);
    profile ? $.__views.__alloyId643.addEventListener("click", profile) : __defers["$.__views.__alloyId643!click!profile"] = true;
    $.__views.__alloyId644 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId644"
    });
    $.__views.__alloyId639.add($.__views.__alloyId644);
    $.__views.__alloyId645 = Ti.UI.createLabel({
        text: "Payment",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId645"
    });
    $.__views.__alloyId644.add($.__views.__alloyId645);
    payment ? $.__views.__alloyId645.addEventListener("click", payment) : __defers["$.__views.__alloyId645!click!payment"] = true;
    $.__views.__alloyId646 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId646"
    });
    $.__views.postpaid.add($.__views.__alloyId646);
    $.__views.__alloyId647 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId647"
    });
    $.__views.__alloyId646.add($.__views.__alloyId647);
    $.__views.__alloyId648 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId648"
    });
    $.__views.__alloyId647.add($.__views.__alloyId648);
    vas ? $.__views.__alloyId648.addEventListener("click", vas) : __defers["$.__views.__alloyId648!click!vas"] = true;
    $.__views.__alloyId649 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId649"
    });
    $.__views.__alloyId646.add($.__views.__alloyId649);
    $.__views.__alloyId650 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_04.png",
        id: "__alloyId650"
    });
    $.__views.__alloyId649.add($.__views.__alloyId650);
    subline ? $.__views.__alloyId650.addEventListener("click", subline) : __defers["$.__views.__alloyId650!click!subline"] = true;
    $.__views.__alloyId651 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId651"
    });
    $.__views.__alloyId646.add($.__views.__alloyId651);
    $.__views.__alloyId652 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId652"
    });
    $.__views.__alloyId651.add($.__views.__alloyId652);
    subline ? $.__views.__alloyId652.addEventListener("click", subline) : __defers["$.__views.__alloyId652!click!subline"] = true;
    $.__views.__alloyId653 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId653"
    });
    $.__views.postpaid.add($.__views.__alloyId653);
    $.__views.__alloyId654 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId654"
    });
    $.__views.__alloyId653.add($.__views.__alloyId654);
    $.__views.__alloyId655 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId655"
    });
    $.__views.__alloyId654.add($.__views.__alloyId655);
    subline ? $.__views.__alloyId655.addEventListener("click", subline) : __defers["$.__views.__alloyId655!click!subline"] = true;
    $.__views.__alloyId656 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId656"
    });
    $.__views.__alloyId653.add($.__views.__alloyId656);
    $.__views.__alloyId657 = Ti.UI.createLabel({
        text: "Subline Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId657"
    });
    $.__views.__alloyId656.add($.__views.__alloyId657);
    subline ? $.__views.__alloyId657.addEventListener("click", subline) : __defers["$.__views.__alloyId657!click!subline"] = true;
    $.__views.__alloyId658 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId658"
    });
    $.__views.__alloyId653.add($.__views.__alloyId658);
    $.__views.__alloyId659 = Ti.UI.createLabel({
        text: "Friends & Family",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId659"
    });
    $.__views.__alloyId658.add($.__views.__alloyId659);
    subline ? $.__views.__alloyId659.addEventListener("click", subline) : __defers["$.__views.__alloyId659!click!subline"] = true;
    $.__views.__alloyId660 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId660"
    });
    $.__views.postpaid.add($.__views.__alloyId660);
    $.__views.__alloyId661 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId661"
    });
    $.__views.__alloyId660.add($.__views.__alloyId661);
    $.__views.__alloyId662 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId662"
    });
    $.__views.__alloyId661.add($.__views.__alloyId662);
    vas ? $.__views.__alloyId662.addEventListener("click", vas) : __defers["$.__views.__alloyId662!click!vas"] = true;
    $.__views.__alloyId663 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId663"
    });
    $.__views.__alloyId660.add($.__views.__alloyId663);
    $.__views.__alloyId664 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId664"
    });
    $.__views.__alloyId663.add($.__views.__alloyId664);
    loyalty ? $.__views.__alloyId664.addEventListener("click", loyalty) : __defers["$.__views.__alloyId664!click!loyalty"] = true;
    $.__views.__alloyId665 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId665"
    });
    $.__views.__alloyId660.add($.__views.__alloyId665);
    $.__views.__alloyId666 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId666"
    });
    $.__views.__alloyId665.add($.__views.__alloyId666);
    report ? $.__views.__alloyId666.addEventListener("click", report) : __defers["$.__views.__alloyId666!click!report"] = true;
    $.__views.__alloyId667 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId667"
    });
    $.__views.postpaid.add($.__views.__alloyId667);
    $.__views.__alloyId668 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId668"
    });
    $.__views.__alloyId667.add($.__views.__alloyId668);
    $.__views.__alloyId669 = Ti.UI.createLabel({
        text: "VAS Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId669"
    });
    $.__views.__alloyId668.add($.__views.__alloyId669);
    vas ? $.__views.__alloyId669.addEventListener("click", vas) : __defers["$.__views.__alloyId669!click!vas"] = true;
    $.__views.__alloyId670 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId670"
    });
    $.__views.__alloyId667.add($.__views.__alloyId670);
    $.__views.__alloyId671 = Ti.UI.createLabel({
        text: "Loyalty",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId671"
    });
    $.__views.__alloyId670.add($.__views.__alloyId671);
    loyalty ? $.__views.__alloyId671.addEventListener("click", loyalty) : __defers["$.__views.__alloyId671!click!loyalty"] = true;
    $.__views.__alloyId672 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId672"
    });
    $.__views.__alloyId667.add($.__views.__alloyId672);
    $.__views.__alloyId673 = Ti.UI.createLabel({
        text: "Email Notification",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId673"
    });
    $.__views.__alloyId672.add($.__views.__alloyId673);
    loyalty ? $.__views.__alloyId673.addEventListener("click", loyalty) : __defers["$.__views.__alloyId673!click!loyalty"] = true;
    $.__views.__alloyId674 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId674"
    });
    $.__views.postpaid.add($.__views.__alloyId674);
    $.__views.__alloyId675 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId675"
    });
    $.__views.__alloyId674.add($.__views.__alloyId675);
    $.__views.__alloyId676 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId676"
    });
    $.__views.__alloyId675.add($.__views.__alloyId676);
    report ? $.__views.__alloyId676.addEventListener("click", report) : __defers["$.__views.__alloyId676!click!report"] = true;
    $.__views.__alloyId677 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId677"
    });
    $.__views.__alloyId674.add($.__views.__alloyId677);
    $.__views.__alloyId678 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_09.png",
        id: "__alloyId678"
    });
    $.__views.__alloyId677.add($.__views.__alloyId678);
    faq ? $.__views.__alloyId678.addEventListener("click", faq) : __defers["$.__views.__alloyId678!click!faq"] = true;
    $.__views.__alloyId679 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId679"
    });
    $.__views.__alloyId674.add($.__views.__alloyId679);
    $.__views.__alloyId680 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId680"
    });
    $.__views.__alloyId679.add($.__views.__alloyId680);
    report ? $.__views.__alloyId680.addEventListener("click", report) : __defers["$.__views.__alloyId680!click!report"] = true;
    $.__views.__alloyId681 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId681"
    });
    $.__views.postpaid.add($.__views.__alloyId681);
    $.__views.__alloyId682 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId682"
    });
    $.__views.__alloyId681.add($.__views.__alloyId682);
    $.__views.__alloyId683 = Ti.UI.createLabel({
        text: "Report Case",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId683"
    });
    $.__views.__alloyId682.add($.__views.__alloyId683);
    report ? $.__views.__alloyId683.addEventListener("click", report) : __defers["$.__views.__alloyId683!click!report"] = true;
    $.__views.__alloyId684 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId684"
    });
    $.__views.__alloyId681.add($.__views.__alloyId684);
    $.__views.__alloyId685 = Ti.UI.createLabel({
        text: "FAQs",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId685"
    });
    $.__views.__alloyId684.add($.__views.__alloyId685);
    faq ? $.__views.__alloyId685.addEventListener("click", faq) : __defers["$.__views.__alloyId685!click!faq"] = true;
    $.__views.__alloyId686 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId686"
    });
    $.__views.__alloyId681.add($.__views.__alloyId686);
    $.__views.__alloyId687 = Ti.UI.createLabel({
        text: "Ordering History",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId687"
    });
    $.__views.__alloyId686.add($.__views.__alloyId687);
    report ? $.__views.__alloyId687.addEventListener("click", report) : __defers["$.__views.__alloyId687!click!report"] = true;
    $.__views.prepaid = Ti.UI.createScrollView({
        id: "prepaid",
        layout: "vertical",
        backgroundColor: "white"
    });
    $.__views.__alloyId614.add($.__views.prepaid);
    $.__views.__alloyId688 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId688"
    });
    $.__views.prepaid.add($.__views.__alloyId688);
    $.__views.__alloyId689 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId689"
    });
    $.__views.__alloyId688.add($.__views.__alloyId689);
    $.__views.__alloyId690 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId690"
    });
    $.__views.__alloyId689.add($.__views.__alloyId690);
    accDetail ? $.__views.__alloyId690.addEventListener("click", accDetail) : __defers["$.__views.__alloyId690!click!accDetail"] = true;
    $.__views.__alloyId691 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId691"
    });
    $.__views.__alloyId688.add($.__views.__alloyId691);
    $.__views.__alloyId692 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId692"
    });
    $.__views.__alloyId691.add($.__views.__alloyId692);
    accDetail ? $.__views.__alloyId692.addEventListener("click", accDetail) : __defers["$.__views.__alloyId692!click!accDetail"] = true;
    $.__views.__alloyId693 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId693"
    });
    $.__views.__alloyId688.add($.__views.__alloyId693);
    $.__views.__alloyId694 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId694"
    });
    $.__views.__alloyId693.add($.__views.__alloyId694);
    payment ? $.__views.__alloyId694.addEventListener("click", payment) : __defers["$.__views.__alloyId694!click!payment"] = true;
    $.__views.__alloyId695 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId695"
    });
    $.__views.prepaid.add($.__views.__alloyId695);
    $.__views.__alloyId696 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId696"
    });
    $.__views.__alloyId695.add($.__views.__alloyId696);
    $.__views.__alloyId697 = Ti.UI.createLabel({
        text: "Prepaid Account Details",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId697"
    });
    $.__views.__alloyId696.add($.__views.__alloyId697);
    accDetail ? $.__views.__alloyId697.addEventListener("click", accDetail) : __defers["$.__views.__alloyId697!click!accDetail"] = true;
    $.__views.__alloyId698 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId698"
    });
    $.__views.__alloyId695.add($.__views.__alloyId698);
    $.__views.__alloyId699 = Ti.UI.createLabel({
        text: "My Profile",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId699"
    });
    $.__views.__alloyId698.add($.__views.__alloyId699);
    accDetail ? $.__views.__alloyId699.addEventListener("click", accDetail) : __defers["$.__views.__alloyId699!click!accDetail"] = true;
    $.__views.__alloyId700 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId700"
    });
    $.__views.__alloyId695.add($.__views.__alloyId700);
    $.__views.__alloyId701 = Ti.UI.createLabel({
        text: "Payment",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId701"
    });
    $.__views.__alloyId700.add($.__views.__alloyId701);
    payment ? $.__views.__alloyId701.addEventListener("click", payment) : __defers["$.__views.__alloyId701!click!payment"] = true;
    $.__views.__alloyId702 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId702"
    });
    $.__views.prepaid.add($.__views.__alloyId702);
    $.__views.__alloyId703 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId703"
    });
    $.__views.__alloyId702.add($.__views.__alloyId703);
    $.__views.__alloyId704 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId704"
    });
    $.__views.__alloyId703.add($.__views.__alloyId704);
    vas ? $.__views.__alloyId704.addEventListener("click", vas) : __defers["$.__views.__alloyId704!click!vas"] = true;
    $.__views.__alloyId705 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId705"
    });
    $.__views.__alloyId702.add($.__views.__alloyId705);
    $.__views.__alloyId706 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_04.png",
        id: "__alloyId706"
    });
    $.__views.__alloyId705.add($.__views.__alloyId706);
    subline ? $.__views.__alloyId706.addEventListener("click", subline) : __defers["$.__views.__alloyId706!click!subline"] = true;
    $.__views.__alloyId707 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId707"
    });
    $.__views.__alloyId702.add($.__views.__alloyId707);
    $.__views.__alloyId708 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId708"
    });
    $.__views.__alloyId707.add($.__views.__alloyId708);
    subline ? $.__views.__alloyId708.addEventListener("click", subline) : __defers["$.__views.__alloyId708!click!subline"] = true;
    $.__views.__alloyId709 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId709"
    });
    $.__views.prepaid.add($.__views.__alloyId709);
    $.__views.__alloyId710 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId710"
    });
    $.__views.__alloyId709.add($.__views.__alloyId710);
    $.__views.__alloyId711 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId711"
    });
    $.__views.__alloyId710.add($.__views.__alloyId711);
    subline ? $.__views.__alloyId711.addEventListener("click", subline) : __defers["$.__views.__alloyId711!click!subline"] = true;
    $.__views.__alloyId712 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId712"
    });
    $.__views.__alloyId709.add($.__views.__alloyId712);
    $.__views.__alloyId713 = Ti.UI.createLabel({
        text: "Subline Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId713"
    });
    $.__views.__alloyId712.add($.__views.__alloyId713);
    subline ? $.__views.__alloyId713.addEventListener("click", subline) : __defers["$.__views.__alloyId713!click!subline"] = true;
    $.__views.__alloyId714 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId714"
    });
    $.__views.__alloyId709.add($.__views.__alloyId714);
    $.__views.__alloyId715 = Ti.UI.createLabel({
        text: "Friends & Family",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId715"
    });
    $.__views.__alloyId714.add($.__views.__alloyId715);
    subline ? $.__views.__alloyId715.addEventListener("click", subline) : __defers["$.__views.__alloyId715!click!subline"] = true;
    $.__views.__alloyId716 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId716"
    });
    $.__views.prepaid.add($.__views.__alloyId716);
    $.__views.__alloyId717 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId717"
    });
    $.__views.__alloyId716.add($.__views.__alloyId717);
    $.__views.__alloyId718 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId718"
    });
    $.__views.__alloyId717.add($.__views.__alloyId718);
    vas ? $.__views.__alloyId718.addEventListener("click", vas) : __defers["$.__views.__alloyId718!click!vas"] = true;
    $.__views.__alloyId719 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId719"
    });
    $.__views.__alloyId716.add($.__views.__alloyId719);
    $.__views.__alloyId720 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId720"
    });
    $.__views.__alloyId719.add($.__views.__alloyId720);
    loyalty ? $.__views.__alloyId720.addEventListener("click", loyalty) : __defers["$.__views.__alloyId720!click!loyalty"] = true;
    $.__views.__alloyId721 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId721"
    });
    $.__views.__alloyId716.add($.__views.__alloyId721);
    $.__views.__alloyId722 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId722"
    });
    $.__views.__alloyId721.add($.__views.__alloyId722);
    report ? $.__views.__alloyId722.addEventListener("click", report) : __defers["$.__views.__alloyId722!click!report"] = true;
    $.__views.__alloyId723 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId723"
    });
    $.__views.prepaid.add($.__views.__alloyId723);
    $.__views.__alloyId724 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId724"
    });
    $.__views.__alloyId723.add($.__views.__alloyId724);
    $.__views.__alloyId725 = Ti.UI.createLabel({
        text: "VAS Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId725"
    });
    $.__views.__alloyId724.add($.__views.__alloyId725);
    vas ? $.__views.__alloyId725.addEventListener("click", vas) : __defers["$.__views.__alloyId725!click!vas"] = true;
    $.__views.__alloyId726 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId726"
    });
    $.__views.__alloyId723.add($.__views.__alloyId726);
    $.__views.__alloyId727 = Ti.UI.createLabel({
        text: "Loyalty",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId727"
    });
    $.__views.__alloyId726.add($.__views.__alloyId727);
    loyalty ? $.__views.__alloyId727.addEventListener("click", loyalty) : __defers["$.__views.__alloyId727!click!loyalty"] = true;
    $.__views.__alloyId728 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId728"
    });
    $.__views.__alloyId723.add($.__views.__alloyId728);
    $.__views.__alloyId729 = Ti.UI.createLabel({
        text: "Email Notification",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId729"
    });
    $.__views.__alloyId728.add($.__views.__alloyId729);
    loyalty ? $.__views.__alloyId729.addEventListener("click", loyalty) : __defers["$.__views.__alloyId729!click!loyalty"] = true;
    $.__views.__alloyId730 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId730"
    });
    $.__views.prepaid.add($.__views.__alloyId730);
    $.__views.__alloyId731 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId731"
    });
    $.__views.__alloyId730.add($.__views.__alloyId731);
    $.__views.__alloyId732 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId732"
    });
    $.__views.__alloyId731.add($.__views.__alloyId732);
    report ? $.__views.__alloyId732.addEventListener("click", report) : __defers["$.__views.__alloyId732!click!report"] = true;
    $.__views.__alloyId733 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId733"
    });
    $.__views.__alloyId730.add($.__views.__alloyId733);
    $.__views.__alloyId734 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_09.png",
        id: "__alloyId734"
    });
    $.__views.__alloyId733.add($.__views.__alloyId734);
    faq ? $.__views.__alloyId734.addEventListener("click", faq) : __defers["$.__views.__alloyId734!click!faq"] = true;
    $.__views.__alloyId735 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId735"
    });
    $.__views.__alloyId730.add($.__views.__alloyId735);
    $.__views.__alloyId736 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId736"
    });
    $.__views.__alloyId735.add($.__views.__alloyId736);
    report ? $.__views.__alloyId736.addEventListener("click", report) : __defers["$.__views.__alloyId736!click!report"] = true;
    $.__views.__alloyId737 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId737"
    });
    $.__views.prepaid.add($.__views.__alloyId737);
    $.__views.__alloyId738 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId738"
    });
    $.__views.__alloyId737.add($.__views.__alloyId738);
    $.__views.__alloyId739 = Ti.UI.createLabel({
        text: "Report Case",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId739"
    });
    $.__views.__alloyId738.add($.__views.__alloyId739);
    report ? $.__views.__alloyId739.addEventListener("click", report) : __defers["$.__views.__alloyId739!click!report"] = true;
    $.__views.__alloyId740 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId740"
    });
    $.__views.__alloyId737.add($.__views.__alloyId740);
    $.__views.__alloyId741 = Ti.UI.createLabel({
        text: "FAQs",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId741"
    });
    $.__views.__alloyId740.add($.__views.__alloyId741);
    faq ? $.__views.__alloyId741.addEventListener("click", faq) : __defers["$.__views.__alloyId741!click!faq"] = true;
    $.__views.__alloyId742 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId742"
    });
    $.__views.__alloyId737.add($.__views.__alloyId742);
    $.__views.__alloyId743 = Ti.UI.createLabel({
        text: "Ordering History",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId743"
    });
    $.__views.__alloyId742.add($.__views.__alloyId743);
    report ? $.__views.__alloyId743.addEventListener("click", report) : __defers["$.__views.__alloyId743!click!report"] = true;
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
            height: "40%",
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
            height: "40%",
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
    __defers["$.__views.__alloyId603!click!close"] && $.__views.__alloyId603.addEventListener("click", close);
    __defers["$.__views.__alloyId604!click!gallery"] && $.__views.__alloyId604.addEventListener("click", gallery);
    __defers["$.__views.__alloyId609!click!facebook"] && $.__views.__alloyId609.addEventListener("click", facebook);
    __defers["$.__views.__alloyId621!click!editPhoto"] && $.__views.__alloyId621.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId622!click!editPhoto"] && $.__views.__alloyId622.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId634!click!accDetail"] && $.__views.__alloyId634.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId636!click!accDetail"] && $.__views.__alloyId636.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId638!click!payment"] && $.__views.__alloyId638.addEventListener("click", payment);
    __defers["$.__views.__alloyId641!click!accDetail"] && $.__views.__alloyId641.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId643!click!profile"] && $.__views.__alloyId643.addEventListener("click", profile);
    __defers["$.__views.__alloyId645!click!payment"] && $.__views.__alloyId645.addEventListener("click", payment);
    __defers["$.__views.__alloyId648!click!vas"] && $.__views.__alloyId648.addEventListener("click", vas);
    __defers["$.__views.__alloyId650!click!subline"] && $.__views.__alloyId650.addEventListener("click", subline);
    __defers["$.__views.__alloyId652!click!subline"] && $.__views.__alloyId652.addEventListener("click", subline);
    __defers["$.__views.__alloyId655!click!subline"] && $.__views.__alloyId655.addEventListener("click", subline);
    __defers["$.__views.__alloyId657!click!subline"] && $.__views.__alloyId657.addEventListener("click", subline);
    __defers["$.__views.__alloyId659!click!subline"] && $.__views.__alloyId659.addEventListener("click", subline);
    __defers["$.__views.__alloyId662!click!vas"] && $.__views.__alloyId662.addEventListener("click", vas);
    __defers["$.__views.__alloyId664!click!loyalty"] && $.__views.__alloyId664.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId666!click!report"] && $.__views.__alloyId666.addEventListener("click", report);
    __defers["$.__views.__alloyId669!click!vas"] && $.__views.__alloyId669.addEventListener("click", vas);
    __defers["$.__views.__alloyId671!click!loyalty"] && $.__views.__alloyId671.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId673!click!loyalty"] && $.__views.__alloyId673.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId676!click!report"] && $.__views.__alloyId676.addEventListener("click", report);
    __defers["$.__views.__alloyId678!click!faq"] && $.__views.__alloyId678.addEventListener("click", faq);
    __defers["$.__views.__alloyId680!click!report"] && $.__views.__alloyId680.addEventListener("click", report);
    __defers["$.__views.__alloyId683!click!report"] && $.__views.__alloyId683.addEventListener("click", report);
    __defers["$.__views.__alloyId685!click!faq"] && $.__views.__alloyId685.addEventListener("click", faq);
    __defers["$.__views.__alloyId687!click!report"] && $.__views.__alloyId687.addEventListener("click", report);
    __defers["$.__views.__alloyId690!click!accDetail"] && $.__views.__alloyId690.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId692!click!accDetail"] && $.__views.__alloyId692.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId694!click!payment"] && $.__views.__alloyId694.addEventListener("click", payment);
    __defers["$.__views.__alloyId697!click!accDetail"] && $.__views.__alloyId697.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId699!click!accDetail"] && $.__views.__alloyId699.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId701!click!payment"] && $.__views.__alloyId701.addEventListener("click", payment);
    __defers["$.__views.__alloyId704!click!vas"] && $.__views.__alloyId704.addEventListener("click", vas);
    __defers["$.__views.__alloyId706!click!subline"] && $.__views.__alloyId706.addEventListener("click", subline);
    __defers["$.__views.__alloyId708!click!subline"] && $.__views.__alloyId708.addEventListener("click", subline);
    __defers["$.__views.__alloyId711!click!subline"] && $.__views.__alloyId711.addEventListener("click", subline);
    __defers["$.__views.__alloyId713!click!subline"] && $.__views.__alloyId713.addEventListener("click", subline);
    __defers["$.__views.__alloyId715!click!subline"] && $.__views.__alloyId715.addEventListener("click", subline);
    __defers["$.__views.__alloyId718!click!vas"] && $.__views.__alloyId718.addEventListener("click", vas);
    __defers["$.__views.__alloyId720!click!loyalty"] && $.__views.__alloyId720.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId722!click!report"] && $.__views.__alloyId722.addEventListener("click", report);
    __defers["$.__views.__alloyId725!click!vas"] && $.__views.__alloyId725.addEventListener("click", vas);
    __defers["$.__views.__alloyId727!click!loyalty"] && $.__views.__alloyId727.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId729!click!loyalty"] && $.__views.__alloyId729.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId732!click!report"] && $.__views.__alloyId732.addEventListener("click", report);
    __defers["$.__views.__alloyId734!click!faq"] && $.__views.__alloyId734.addEventListener("click", faq);
    __defers["$.__views.__alloyId736!click!report"] && $.__views.__alloyId736.addEventListener("click", report);
    __defers["$.__views.__alloyId739!click!report"] && $.__views.__alloyId739.addEventListener("click", report);
    __defers["$.__views.__alloyId741!click!faq"] && $.__views.__alloyId741.addEventListener("click", faq);
    __defers["$.__views.__alloyId743!click!report"] && $.__views.__alloyId743.addEventListener("click", report);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;