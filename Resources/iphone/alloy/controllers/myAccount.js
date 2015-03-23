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
    $.__views.__alloyId706 = Alloy.createController("_header", {
        id: "__alloyId706",
        __parentSymbol: $.__views.myAccount
    });
    $.__views.__alloyId706.setParent($.__views.myAccount);
    $.__views.photo = Ti.UI.createView({
        id: "photo",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.myAccount.add($.__views.photo);
    $.__views.__alloyId707 = Ti.UI.createView({
        layout: "vertical",
        width: "80%",
        height: "40%",
        backgroundColor: "white",
        id: "__alloyId707"
    });
    $.__views.photo.add($.__views.__alloyId707);
    $.__views.__alloyId708 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId708"
    });
    $.__views.__alloyId707.add($.__views.__alloyId708);
    $.__views.__alloyId709 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "#E6E7E9",
        id: "__alloyId709"
    });
    $.__views.__alloyId708.add($.__views.__alloyId709);
    $.__views.__alloyId710 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId710"
    });
    $.__views.__alloyId708.add($.__views.__alloyId710);
    close ? $.__views.__alloyId710.addEventListener("click", close) : __defers["$.__views.__alloyId710!click!close"] = true;
    $.__views.__alloyId711 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId711"
    });
    $.__views.__alloyId707.add($.__views.__alloyId711);
    gallery ? $.__views.__alloyId711.addEventListener("click", gallery) : __defers["$.__views.__alloyId711!click!gallery"] = true;
    $.__views.__alloyId712 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        id: "__alloyId712"
    });
    $.__views.__alloyId711.add($.__views.__alloyId712);
    $.__views.__alloyId713 = Ti.UI.createImageView({
        backgroundColor: "#66FFFF",
        width: "32",
        height: "32",
        left: "10",
        image: "/images/gallery_icon.png",
        id: "__alloyId713"
    });
    $.__views.__alloyId712.add($.__views.__alloyId713);
    $.__views.__alloyId714 = Ti.UI.createView({
        id: "__alloyId714"
    });
    $.__views.__alloyId711.add($.__views.__alloyId714);
    $.__views.__alloyId715 = Ti.UI.createLabel({
        text: "Photo Gallery",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId715"
    });
    $.__views.__alloyId714.add($.__views.__alloyId715);
    $.__views.__alloyId716 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#3E6AC3",
        id: "__alloyId716"
    });
    $.__views.__alloyId707.add($.__views.__alloyId716);
    facebook ? $.__views.__alloyId716.addEventListener("click", facebook) : __defers["$.__views.__alloyId716!click!facebook"] = true;
    $.__views.__alloyId717 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        id: "__alloyId717"
    });
    $.__views.__alloyId716.add($.__views.__alloyId717);
    $.__views.__alloyId718 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "32",
        height: "32",
        left: "10",
        image: "/images/facebook_icon.png",
        id: "__alloyId718"
    });
    $.__views.__alloyId717.add($.__views.__alloyId718);
    $.__views.__alloyId719 = Ti.UI.createView({
        id: "__alloyId719"
    });
    $.__views.__alloyId716.add($.__views.__alloyId719);
    $.__views.__alloyId720 = Ti.UI.createLabel({
        text: "Connect with Facebook",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId720"
    });
    $.__views.__alloyId719.add($.__views.__alloyId720);
    $.__views.__alloyId721 = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "black",
        top: "50",
        zIndex: "1",
        id: "__alloyId721"
    });
    $.__views.myAccount.add($.__views.__alloyId721);
    $.__views.__alloyId722 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        backgroundColor: "red",
        id: "__alloyId722"
    });
    $.__views.__alloyId721.add($.__views.__alloyId722);
    $.__views.__alloyId723 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId723"
    });
    $.__views.__alloyId722.add($.__views.__alloyId723);
    $.__views.__alloyId724 = Ti.UI.createLabel({
        text: "Hello!",
        color: "white",
        left: "10",
        top: "10",
        id: "__alloyId724"
    });
    $.__views.__alloyId723.add($.__views.__alloyId724);
    $.__views.__alloyId725 = Ti.UI.createLabel({
        text: "John Smith",
        color: "white",
        left: "10",
        bottom: "10",
        id: "__alloyId725"
    });
    $.__views.__alloyId723.add($.__views.__alloyId725);
    $.__views.__alloyId726 = Ti.UI.createView({
        width: "33%",
        id: "__alloyId726"
    });
    $.__views.__alloyId722.add($.__views.__alloyId726);
    $.__views.__alloyId727 = Ti.UI.createView({
        width: "auto",
        height: Ti.UI.FILL,
        id: "__alloyId727"
    });
    $.__views.__alloyId722.add($.__views.__alloyId727);
    $.__views.__alloyId728 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/profile_images.png",
        borderRadius: "40",
        id: "__alloyId728"
    });
    $.__views.__alloyId727.add($.__views.__alloyId728);
    editPhoto ? $.__views.__alloyId728.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId728!click!editPhoto"] = true;
    $.__views.__alloyId729 = Ti.UI.createImageView({
        width: "20",
        height: "20",
        image: "/images/profileedit_icon.png",
        borderRadius: "10",
        bottom: "10",
        id: "__alloyId729"
    });
    $.__views.__alloyId727.add($.__views.__alloyId729);
    editPhoto ? $.__views.__alloyId729.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId729!click!editPhoto"] = true;
    $.__views.__alloyId730 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#F5F5F5",
        id: "__alloyId730"
    });
    $.__views.__alloyId721.add($.__views.__alloyId730);
    $.__views.__alloyId731 = Ti.UI.createView({
        layout: "composite",
        width: "50%",
        id: "__alloyId731"
    });
    $.__views.__alloyId730.add($.__views.__alloyId731);
    $.__views.__alloyId732 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId732"
    });
    $.__views.__alloyId731.add($.__views.__alloyId732);
    $.__views.__alloyId733 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "#878787",
        left: "10",
        id: "__alloyId733"
    });
    $.__views.__alloyId732.add($.__views.__alloyId733);
    $.__views.__alloyId734 = Ti.UI.createLabel({
        text: "85.05",
        color: "black",
        left: "10",
        id: "__alloyId734"
    });
    $.__views.__alloyId732.add($.__views.__alloyId734);
    $.__views.__alloyId735 = Ti.UI.createView({
        layout: "composite",
        width: "auto",
        id: "__alloyId735"
    });
    $.__views.__alloyId730.add($.__views.__alloyId735);
    $.__views.__alloyId736 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId736"
    });
    $.__views.__alloyId735.add($.__views.__alloyId736);
    $.__views.__alloyId737 = Ti.UI.createLabel({
        text: "Expiry Date",
        color: "#878787",
        left: "10",
        bottom: "2.5",
        id: "__alloyId737"
    });
    $.__views.__alloyId736.add($.__views.__alloyId737);
    $.__views.__alloyId738 = Ti.UI.createLabel({
        text: "1 Dec 2015",
        color: "black",
        left: "10",
        top: "2.5",
        id: "__alloyId738"
    });
    $.__views.__alloyId736.add($.__views.__alloyId738);
    $.__views.postpaid = Ti.UI.createScrollView({
        id: "postpaid",
        layout: "vertical",
        backgroundColor: "white"
    });
    $.__views.__alloyId721.add($.__views.postpaid);
    $.__views.__alloyId739 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId739"
    });
    $.__views.postpaid.add($.__views.__alloyId739);
    $.__views.__alloyId740 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId740"
    });
    $.__views.__alloyId739.add($.__views.__alloyId740);
    $.__views.__alloyId741 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId741"
    });
    $.__views.__alloyId740.add($.__views.__alloyId741);
    accDetail ? $.__views.__alloyId741.addEventListener("click", accDetail) : __defers["$.__views.__alloyId741!click!accDetail"] = true;
    $.__views.__alloyId742 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId742"
    });
    $.__views.__alloyId739.add($.__views.__alloyId742);
    $.__views.__alloyId743 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId743"
    });
<<<<<<< Updated upstream
    $.__views.__alloyId742.add($.__views.__alloyId743);
    profile ? $.__views.__alloyId743.addEventListener("click", profile) : __defers["$.__views.__alloyId743!click!profile"] = true;
    $.__views.__alloyId744 = Ti.UI.createView({
=======
    $.__views.__alloyId635.add($.__views.__alloyId636);
    profile ? $.__views.__alloyId636.addEventListener("click", profile) : __defers["$.__views.__alloyId636!click!profile"] = true;
    $.__views.__alloyId637 = Ti.UI.createView({
>>>>>>> Stashed changes
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId744"
    });
    $.__views.__alloyId739.add($.__views.__alloyId744);
    $.__views.__alloyId745 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId745"
    });
    $.__views.__alloyId744.add($.__views.__alloyId745);
    payment ? $.__views.__alloyId745.addEventListener("click", payment) : __defers["$.__views.__alloyId745!click!payment"] = true;
    $.__views.__alloyId746 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId746"
    });
    $.__views.postpaid.add($.__views.__alloyId746);
    $.__views.__alloyId747 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId747"
    });
    $.__views.__alloyId746.add($.__views.__alloyId747);
    $.__views.__alloyId748 = Ti.UI.createLabel({
        text: "Postpaid Account Details",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId748"
    });
    $.__views.__alloyId747.add($.__views.__alloyId748);
    accDetail ? $.__views.__alloyId748.addEventListener("click", accDetail) : __defers["$.__views.__alloyId748!click!accDetail"] = true;
    $.__views.__alloyId749 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId749"
    });
    $.__views.__alloyId746.add($.__views.__alloyId749);
    $.__views.__alloyId750 = Ti.UI.createLabel({
        text: "My Profile",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId750"
    });
    $.__views.__alloyId749.add($.__views.__alloyId750);
    profile ? $.__views.__alloyId750.addEventListener("click", profile) : __defers["$.__views.__alloyId750!click!profile"] = true;
    $.__views.__alloyId751 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId751"
    });
    $.__views.__alloyId746.add($.__views.__alloyId751);
    $.__views.__alloyId752 = Ti.UI.createLabel({
        text: "Payment",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId752"
    });
    $.__views.__alloyId751.add($.__views.__alloyId752);
    payment ? $.__views.__alloyId752.addEventListener("click", payment) : __defers["$.__views.__alloyId752!click!payment"] = true;
    $.__views.__alloyId753 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId753"
    });
    $.__views.postpaid.add($.__views.__alloyId753);
    $.__views.__alloyId754 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId754"
    });
    $.__views.__alloyId753.add($.__views.__alloyId754);
    $.__views.__alloyId755 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId755"
    });
    $.__views.__alloyId754.add($.__views.__alloyId755);
    vas ? $.__views.__alloyId755.addEventListener("click", vas) : __defers["$.__views.__alloyId755!click!vas"] = true;
    $.__views.__alloyId756 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId756"
    });
    $.__views.__alloyId753.add($.__views.__alloyId756);
    $.__views.__alloyId757 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_04.png",
        id: "__alloyId757"
    });
    $.__views.__alloyId756.add($.__views.__alloyId757);
    subline ? $.__views.__alloyId757.addEventListener("click", subline) : __defers["$.__views.__alloyId757!click!subline"] = true;
    $.__views.__alloyId758 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId758"
    });
    $.__views.__alloyId753.add($.__views.__alloyId758);
    $.__views.__alloyId759 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId759"
    });
    $.__views.__alloyId758.add($.__views.__alloyId759);
    subline ? $.__views.__alloyId759.addEventListener("click", subline) : __defers["$.__views.__alloyId759!click!subline"] = true;
    $.__views.__alloyId760 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId760"
    });
    $.__views.postpaid.add($.__views.__alloyId760);
    $.__views.__alloyId761 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId761"
    });
    $.__views.__alloyId760.add($.__views.__alloyId761);
    $.__views.__alloyId762 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId762"
    });
    $.__views.__alloyId761.add($.__views.__alloyId762);
    subline ? $.__views.__alloyId762.addEventListener("click", subline) : __defers["$.__views.__alloyId762!click!subline"] = true;
    $.__views.__alloyId763 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId763"
    });
    $.__views.__alloyId760.add($.__views.__alloyId763);
    $.__views.__alloyId764 = Ti.UI.createLabel({
        text: "Subline Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId764"
    });
    $.__views.__alloyId763.add($.__views.__alloyId764);
    subline ? $.__views.__alloyId764.addEventListener("click", subline) : __defers["$.__views.__alloyId764!click!subline"] = true;
    $.__views.__alloyId765 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId765"
    });
    $.__views.__alloyId760.add($.__views.__alloyId765);
    $.__views.__alloyId766 = Ti.UI.createLabel({
        text: "Friends & Family",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId766"
    });
    $.__views.__alloyId765.add($.__views.__alloyId766);
    subline ? $.__views.__alloyId766.addEventListener("click", subline) : __defers["$.__views.__alloyId766!click!subline"] = true;
    $.__views.__alloyId767 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId767"
    });
    $.__views.postpaid.add($.__views.__alloyId767);
    $.__views.__alloyId768 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId768"
    });
    $.__views.__alloyId767.add($.__views.__alloyId768);
    $.__views.__alloyId769 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId769"
    });
    $.__views.__alloyId768.add($.__views.__alloyId769);
    vas ? $.__views.__alloyId769.addEventListener("click", vas) : __defers["$.__views.__alloyId769!click!vas"] = true;
    $.__views.__alloyId770 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId770"
    });
    $.__views.__alloyId767.add($.__views.__alloyId770);
    $.__views.__alloyId771 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId771"
    });
    $.__views.__alloyId770.add($.__views.__alloyId771);
    loyalty ? $.__views.__alloyId771.addEventListener("click", loyalty) : __defers["$.__views.__alloyId771!click!loyalty"] = true;
    $.__views.__alloyId772 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId772"
    });
    $.__views.__alloyId767.add($.__views.__alloyId772);
    $.__views.__alloyId773 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId773"
    });
    $.__views.__alloyId772.add($.__views.__alloyId773);
    report ? $.__views.__alloyId773.addEventListener("click", report) : __defers["$.__views.__alloyId773!click!report"] = true;
    $.__views.__alloyId774 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId774"
    });
    $.__views.postpaid.add($.__views.__alloyId774);
    $.__views.__alloyId775 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId775"
    });
    $.__views.__alloyId774.add($.__views.__alloyId775);
    $.__views.__alloyId776 = Ti.UI.createLabel({
        text: "VAS Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId776"
    });
    $.__views.__alloyId775.add($.__views.__alloyId776);
    vas ? $.__views.__alloyId776.addEventListener("click", vas) : __defers["$.__views.__alloyId776!click!vas"] = true;
    $.__views.__alloyId777 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId777"
    });
    $.__views.__alloyId774.add($.__views.__alloyId777);
    $.__views.__alloyId778 = Ti.UI.createLabel({
        text: "Loyalty",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId778"
    });
    $.__views.__alloyId777.add($.__views.__alloyId778);
    loyalty ? $.__views.__alloyId778.addEventListener("click", loyalty) : __defers["$.__views.__alloyId778!click!loyalty"] = true;
    $.__views.__alloyId779 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId779"
    });
    $.__views.__alloyId774.add($.__views.__alloyId779);
    $.__views.__alloyId780 = Ti.UI.createLabel({
        text: "Email Notification",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId780"
    });
    $.__views.__alloyId779.add($.__views.__alloyId780);
    loyalty ? $.__views.__alloyId780.addEventListener("click", loyalty) : __defers["$.__views.__alloyId780!click!loyalty"] = true;
    $.__views.__alloyId781 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId781"
    });
    $.__views.postpaid.add($.__views.__alloyId781);
    $.__views.__alloyId782 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId782"
    });
    $.__views.__alloyId781.add($.__views.__alloyId782);
    $.__views.__alloyId783 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId783"
    });
    $.__views.__alloyId782.add($.__views.__alloyId783);
    report ? $.__views.__alloyId783.addEventListener("click", report) : __defers["$.__views.__alloyId783!click!report"] = true;
    $.__views.__alloyId784 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId784"
    });
    $.__views.__alloyId781.add($.__views.__alloyId784);
    $.__views.__alloyId785 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_09.png",
        id: "__alloyId785"
    });
    $.__views.__alloyId784.add($.__views.__alloyId785);
    faq ? $.__views.__alloyId785.addEventListener("click", faq) : __defers["$.__views.__alloyId785!click!faq"] = true;
    $.__views.__alloyId786 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId786"
    });
    $.__views.__alloyId781.add($.__views.__alloyId786);
    $.__views.__alloyId787 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId787"
    });
    $.__views.__alloyId786.add($.__views.__alloyId787);
    report ? $.__views.__alloyId787.addEventListener("click", report) : __defers["$.__views.__alloyId787!click!report"] = true;
    $.__views.__alloyId788 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId788"
    });
    $.__views.postpaid.add($.__views.__alloyId788);
    $.__views.__alloyId789 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId789"
    });
    $.__views.__alloyId788.add($.__views.__alloyId789);
    $.__views.__alloyId790 = Ti.UI.createLabel({
        text: "Report Case",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId790"
    });
    $.__views.__alloyId789.add($.__views.__alloyId790);
    report ? $.__views.__alloyId790.addEventListener("click", report) : __defers["$.__views.__alloyId790!click!report"] = true;
    $.__views.__alloyId791 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId791"
    });
    $.__views.__alloyId788.add($.__views.__alloyId791);
    $.__views.__alloyId792 = Ti.UI.createLabel({
        text: "FAQs",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId792"
    });
    $.__views.__alloyId791.add($.__views.__alloyId792);
    faq ? $.__views.__alloyId792.addEventListener("click", faq) : __defers["$.__views.__alloyId792!click!faq"] = true;
    $.__views.__alloyId793 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId793"
    });
    $.__views.__alloyId788.add($.__views.__alloyId793);
    $.__views.__alloyId794 = Ti.UI.createLabel({
        text: "Ordering History",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId794"
    });
    $.__views.__alloyId793.add($.__views.__alloyId794);
    report ? $.__views.__alloyId794.addEventListener("click", report) : __defers["$.__views.__alloyId794!click!report"] = true;
    $.__views.prepaid = Ti.UI.createScrollView({
        id: "prepaid",
        layout: "vertical",
        backgroundColor: "white"
    });
    $.__views.__alloyId721.add($.__views.prepaid);
    $.__views.__alloyId795 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId795"
    });
    $.__views.prepaid.add($.__views.__alloyId795);
    $.__views.__alloyId796 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId796"
    });
    $.__views.__alloyId795.add($.__views.__alloyId796);
    $.__views.__alloyId797 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId797"
    });
    $.__views.__alloyId796.add($.__views.__alloyId797);
    accDetail ? $.__views.__alloyId797.addEventListener("click", accDetail) : __defers["$.__views.__alloyId797!click!accDetail"] = true;
    $.__views.__alloyId798 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId798"
    });
    $.__views.__alloyId795.add($.__views.__alloyId798);
    $.__views.__alloyId799 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId799"
    });
<<<<<<< Updated upstream
    $.__views.__alloyId798.add($.__views.__alloyId799);
    profile ? $.__views.__alloyId799.addEventListener("click", profile) : __defers["$.__views.__alloyId799!click!profile"] = true;
    $.__views.__alloyId800 = Ti.UI.createView({
=======
    $.__views.__alloyId691.add($.__views.__alloyId692);
    profile ? $.__views.__alloyId692.addEventListener("click", profile) : __defers["$.__views.__alloyId692!click!profile"] = true;
    $.__views.__alloyId693 = Ti.UI.createView({
>>>>>>> Stashed changes
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId800"
    });
    $.__views.__alloyId795.add($.__views.__alloyId800);
    $.__views.__alloyId801 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId801"
    });
    $.__views.__alloyId800.add($.__views.__alloyId801);
    payment ? $.__views.__alloyId801.addEventListener("click", payment) : __defers["$.__views.__alloyId801!click!payment"] = true;
    $.__views.__alloyId802 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId802"
    });
    $.__views.prepaid.add($.__views.__alloyId802);
    $.__views.__alloyId803 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId803"
    });
    $.__views.__alloyId802.add($.__views.__alloyId803);
    $.__views.__alloyId804 = Ti.UI.createLabel({
        text: "Prepaid Account Details",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId804"
    });
    $.__views.__alloyId803.add($.__views.__alloyId804);
    accDetail ? $.__views.__alloyId804.addEventListener("click", accDetail) : __defers["$.__views.__alloyId804!click!accDetail"] = true;
    $.__views.__alloyId805 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId805"
    });
    $.__views.__alloyId802.add($.__views.__alloyId805);
    $.__views.__alloyId806 = Ti.UI.createLabel({
        text: "My Profile",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId806"
    });
<<<<<<< Updated upstream
    $.__views.__alloyId805.add($.__views.__alloyId806);
    profile ? $.__views.__alloyId806.addEventListener("click", profile) : __defers["$.__views.__alloyId806!click!profile"] = true;
    $.__views.__alloyId807 = Ti.UI.createView({
=======
    $.__views.__alloyId698.add($.__views.__alloyId699);
    profile ? $.__views.__alloyId699.addEventListener("click", profile) : __defers["$.__views.__alloyId699!click!profile"] = true;
    $.__views.__alloyId700 = Ti.UI.createView({
>>>>>>> Stashed changes
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId807"
    });
    $.__views.__alloyId802.add($.__views.__alloyId807);
    $.__views.__alloyId808 = Ti.UI.createLabel({
        text: "Payment",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId808"
    });
    $.__views.__alloyId807.add($.__views.__alloyId808);
    payment ? $.__views.__alloyId808.addEventListener("click", payment) : __defers["$.__views.__alloyId808!click!payment"] = true;
    $.__views.__alloyId809 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId809"
    });
    $.__views.prepaid.add($.__views.__alloyId809);
    $.__views.__alloyId810 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId810"
    });
    $.__views.__alloyId809.add($.__views.__alloyId810);
    $.__views.__alloyId811 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId811"
    });
    $.__views.__alloyId810.add($.__views.__alloyId811);
    vas ? $.__views.__alloyId811.addEventListener("click", vas) : __defers["$.__views.__alloyId811!click!vas"] = true;
    $.__views.__alloyId812 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId812"
    });
    $.__views.__alloyId809.add($.__views.__alloyId812);
    $.__views.__alloyId813 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_04.png",
        id: "__alloyId813"
    });
    $.__views.__alloyId812.add($.__views.__alloyId813);
    subline ? $.__views.__alloyId813.addEventListener("click", subline) : __defers["$.__views.__alloyId813!click!subline"] = true;
    $.__views.__alloyId814 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId814"
    });
    $.__views.__alloyId809.add($.__views.__alloyId814);
    $.__views.__alloyId815 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId815"
    });
    $.__views.__alloyId814.add($.__views.__alloyId815);
    subline ? $.__views.__alloyId815.addEventListener("click", subline) : __defers["$.__views.__alloyId815!click!subline"] = true;
    $.__views.__alloyId816 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId816"
    });
    $.__views.prepaid.add($.__views.__alloyId816);
    $.__views.__alloyId817 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId817"
    });
    $.__views.__alloyId816.add($.__views.__alloyId817);
    $.__views.__alloyId818 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId818"
    });
    $.__views.__alloyId817.add($.__views.__alloyId818);
    subline ? $.__views.__alloyId818.addEventListener("click", subline) : __defers["$.__views.__alloyId818!click!subline"] = true;
    $.__views.__alloyId819 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId819"
    });
    $.__views.__alloyId816.add($.__views.__alloyId819);
    $.__views.__alloyId820 = Ti.UI.createLabel({
        text: "Subline Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId820"
    });
    $.__views.__alloyId819.add($.__views.__alloyId820);
    subline ? $.__views.__alloyId820.addEventListener("click", subline) : __defers["$.__views.__alloyId820!click!subline"] = true;
    $.__views.__alloyId821 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId821"
    });
    $.__views.__alloyId816.add($.__views.__alloyId821);
    $.__views.__alloyId822 = Ti.UI.createLabel({
        text: "Friends & Family",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId822"
    });
    $.__views.__alloyId821.add($.__views.__alloyId822);
    subline ? $.__views.__alloyId822.addEventListener("click", subline) : __defers["$.__views.__alloyId822!click!subline"] = true;
    $.__views.__alloyId823 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId823"
    });
    $.__views.prepaid.add($.__views.__alloyId823);
    $.__views.__alloyId824 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId824"
    });
    $.__views.__alloyId823.add($.__views.__alloyId824);
    $.__views.__alloyId825 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId825"
    });
    $.__views.__alloyId824.add($.__views.__alloyId825);
    vas ? $.__views.__alloyId825.addEventListener("click", vas) : __defers["$.__views.__alloyId825!click!vas"] = true;
    $.__views.__alloyId826 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId826"
    });
    $.__views.__alloyId823.add($.__views.__alloyId826);
    $.__views.__alloyId827 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId827"
    });
    $.__views.__alloyId826.add($.__views.__alloyId827);
    loyalty ? $.__views.__alloyId827.addEventListener("click", loyalty) : __defers["$.__views.__alloyId827!click!loyalty"] = true;
    $.__views.__alloyId828 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId828"
    });
    $.__views.__alloyId823.add($.__views.__alloyId828);
    $.__views.__alloyId829 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId829"
    });
    $.__views.__alloyId828.add($.__views.__alloyId829);
    report ? $.__views.__alloyId829.addEventListener("click", report) : __defers["$.__views.__alloyId829!click!report"] = true;
    $.__views.__alloyId830 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId830"
    });
    $.__views.prepaid.add($.__views.__alloyId830);
    $.__views.__alloyId831 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId831"
    });
    $.__views.__alloyId830.add($.__views.__alloyId831);
    $.__views.__alloyId832 = Ti.UI.createLabel({
        text: "VAS Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId832"
    });
    $.__views.__alloyId831.add($.__views.__alloyId832);
    vas ? $.__views.__alloyId832.addEventListener("click", vas) : __defers["$.__views.__alloyId832!click!vas"] = true;
    $.__views.__alloyId833 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId833"
    });
    $.__views.__alloyId830.add($.__views.__alloyId833);
    $.__views.__alloyId834 = Ti.UI.createLabel({
        text: "Loyalty",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId834"
    });
    $.__views.__alloyId833.add($.__views.__alloyId834);
    loyalty ? $.__views.__alloyId834.addEventListener("click", loyalty) : __defers["$.__views.__alloyId834!click!loyalty"] = true;
    $.__views.__alloyId835 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId835"
    });
    $.__views.__alloyId830.add($.__views.__alloyId835);
    $.__views.__alloyId836 = Ti.UI.createLabel({
        text: "Email Notification",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId836"
    });
    $.__views.__alloyId835.add($.__views.__alloyId836);
    loyalty ? $.__views.__alloyId836.addEventListener("click", loyalty) : __defers["$.__views.__alloyId836!click!loyalty"] = true;
    $.__views.__alloyId837 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId837"
    });
    $.__views.prepaid.add($.__views.__alloyId837);
    $.__views.__alloyId838 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId838"
    });
    $.__views.__alloyId837.add($.__views.__alloyId838);
    $.__views.__alloyId839 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId839"
    });
    $.__views.__alloyId838.add($.__views.__alloyId839);
    report ? $.__views.__alloyId839.addEventListener("click", report) : __defers["$.__views.__alloyId839!click!report"] = true;
    $.__views.__alloyId840 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId840"
    });
    $.__views.__alloyId837.add($.__views.__alloyId840);
    $.__views.__alloyId841 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_09.png",
        id: "__alloyId841"
    });
    $.__views.__alloyId840.add($.__views.__alloyId841);
    faq ? $.__views.__alloyId841.addEventListener("click", faq) : __defers["$.__views.__alloyId841!click!faq"] = true;
    $.__views.__alloyId842 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId842"
    });
    $.__views.__alloyId837.add($.__views.__alloyId842);
    $.__views.__alloyId843 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId843"
    });
    $.__views.__alloyId842.add($.__views.__alloyId843);
    report ? $.__views.__alloyId843.addEventListener("click", report) : __defers["$.__views.__alloyId843!click!report"] = true;
    $.__views.__alloyId844 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId844"
    });
    $.__views.prepaid.add($.__views.__alloyId844);
    $.__views.__alloyId845 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId845"
    });
    $.__views.__alloyId844.add($.__views.__alloyId845);
    $.__views.__alloyId846 = Ti.UI.createLabel({
        text: "Report Case",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId846"
    });
    $.__views.__alloyId845.add($.__views.__alloyId846);
    report ? $.__views.__alloyId846.addEventListener("click", report) : __defers["$.__views.__alloyId846!click!report"] = true;
    $.__views.__alloyId847 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId847"
    });
    $.__views.__alloyId844.add($.__views.__alloyId847);
    $.__views.__alloyId848 = Ti.UI.createLabel({
        text: "FAQs",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId848"
    });
    $.__views.__alloyId847.add($.__views.__alloyId848);
    faq ? $.__views.__alloyId848.addEventListener("click", faq) : __defers["$.__views.__alloyId848!click!faq"] = true;
    $.__views.__alloyId849 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId849"
    });
    $.__views.__alloyId844.add($.__views.__alloyId849);
    $.__views.__alloyId850 = Ti.UI.createLabel({
        text: "Ordering History",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId850"
    });
    $.__views.__alloyId849.add($.__views.__alloyId850);
    report ? $.__views.__alloyId850.addEventListener("click", report) : __defers["$.__views.__alloyId850!click!report"] = true;
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
<<<<<<< Updated upstream
    __defers["$.__views.__alloyId710!click!close"] && $.__views.__alloyId710.addEventListener("click", close);
    __defers["$.__views.__alloyId711!click!gallery"] && $.__views.__alloyId711.addEventListener("click", gallery);
    __defers["$.__views.__alloyId716!click!facebook"] && $.__views.__alloyId716.addEventListener("click", facebook);
    __defers["$.__views.__alloyId728!click!editPhoto"] && $.__views.__alloyId728.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId729!click!editPhoto"] && $.__views.__alloyId729.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId741!click!accDetail"] && $.__views.__alloyId741.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId743!click!profile"] && $.__views.__alloyId743.addEventListener("click", profile);
    __defers["$.__views.__alloyId745!click!payment"] && $.__views.__alloyId745.addEventListener("click", payment);
    __defers["$.__views.__alloyId748!click!accDetail"] && $.__views.__alloyId748.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId750!click!profile"] && $.__views.__alloyId750.addEventListener("click", profile);
    __defers["$.__views.__alloyId752!click!payment"] && $.__views.__alloyId752.addEventListener("click", payment);
    __defers["$.__views.__alloyId755!click!vas"] && $.__views.__alloyId755.addEventListener("click", vas);
    __defers["$.__views.__alloyId757!click!subline"] && $.__views.__alloyId757.addEventListener("click", subline);
    __defers["$.__views.__alloyId759!click!subline"] && $.__views.__alloyId759.addEventListener("click", subline);
    __defers["$.__views.__alloyId762!click!subline"] && $.__views.__alloyId762.addEventListener("click", subline);
    __defers["$.__views.__alloyId764!click!subline"] && $.__views.__alloyId764.addEventListener("click", subline);
    __defers["$.__views.__alloyId766!click!subline"] && $.__views.__alloyId766.addEventListener("click", subline);
    __defers["$.__views.__alloyId769!click!vas"] && $.__views.__alloyId769.addEventListener("click", vas);
    __defers["$.__views.__alloyId771!click!loyalty"] && $.__views.__alloyId771.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId773!click!report"] && $.__views.__alloyId773.addEventListener("click", report);
    __defers["$.__views.__alloyId776!click!vas"] && $.__views.__alloyId776.addEventListener("click", vas);
    __defers["$.__views.__alloyId778!click!loyalty"] && $.__views.__alloyId778.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId780!click!loyalty"] && $.__views.__alloyId780.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId783!click!report"] && $.__views.__alloyId783.addEventListener("click", report);
    __defers["$.__views.__alloyId785!click!faq"] && $.__views.__alloyId785.addEventListener("click", faq);
    __defers["$.__views.__alloyId787!click!report"] && $.__views.__alloyId787.addEventListener("click", report);
    __defers["$.__views.__alloyId790!click!report"] && $.__views.__alloyId790.addEventListener("click", report);
    __defers["$.__views.__alloyId792!click!faq"] && $.__views.__alloyId792.addEventListener("click", faq);
    __defers["$.__views.__alloyId794!click!report"] && $.__views.__alloyId794.addEventListener("click", report);
    __defers["$.__views.__alloyId797!click!accDetail"] && $.__views.__alloyId797.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId799!click!profile"] && $.__views.__alloyId799.addEventListener("click", profile);
    __defers["$.__views.__alloyId801!click!payment"] && $.__views.__alloyId801.addEventListener("click", payment);
    __defers["$.__views.__alloyId804!click!accDetail"] && $.__views.__alloyId804.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId806!click!profile"] && $.__views.__alloyId806.addEventListener("click", profile);
    __defers["$.__views.__alloyId808!click!payment"] && $.__views.__alloyId808.addEventListener("click", payment);
    __defers["$.__views.__alloyId811!click!vas"] && $.__views.__alloyId811.addEventListener("click", vas);
    __defers["$.__views.__alloyId813!click!subline"] && $.__views.__alloyId813.addEventListener("click", subline);
    __defers["$.__views.__alloyId815!click!subline"] && $.__views.__alloyId815.addEventListener("click", subline);
    __defers["$.__views.__alloyId818!click!subline"] && $.__views.__alloyId818.addEventListener("click", subline);
    __defers["$.__views.__alloyId820!click!subline"] && $.__views.__alloyId820.addEventListener("click", subline);
    __defers["$.__views.__alloyId822!click!subline"] && $.__views.__alloyId822.addEventListener("click", subline);
    __defers["$.__views.__alloyId825!click!vas"] && $.__views.__alloyId825.addEventListener("click", vas);
    __defers["$.__views.__alloyId827!click!loyalty"] && $.__views.__alloyId827.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId829!click!report"] && $.__views.__alloyId829.addEventListener("click", report);
    __defers["$.__views.__alloyId832!click!vas"] && $.__views.__alloyId832.addEventListener("click", vas);
    __defers["$.__views.__alloyId834!click!loyalty"] && $.__views.__alloyId834.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId836!click!loyalty"] && $.__views.__alloyId836.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId839!click!report"] && $.__views.__alloyId839.addEventListener("click", report);
    __defers["$.__views.__alloyId841!click!faq"] && $.__views.__alloyId841.addEventListener("click", faq);
    __defers["$.__views.__alloyId843!click!report"] && $.__views.__alloyId843.addEventListener("click", report);
    __defers["$.__views.__alloyId846!click!report"] && $.__views.__alloyId846.addEventListener("click", report);
    __defers["$.__views.__alloyId848!click!faq"] && $.__views.__alloyId848.addEventListener("click", faq);
    __defers["$.__views.__alloyId850!click!report"] && $.__views.__alloyId850.addEventListener("click", report);
=======
    __defers["$.__views.__alloyId603!click!close"] && $.__views.__alloyId603.addEventListener("click", close);
    __defers["$.__views.__alloyId604!click!gallery"] && $.__views.__alloyId604.addEventListener("click", gallery);
    __defers["$.__views.__alloyId609!click!facebook"] && $.__views.__alloyId609.addEventListener("click", facebook);
    __defers["$.__views.__alloyId621!click!editPhoto"] && $.__views.__alloyId621.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId622!click!editPhoto"] && $.__views.__alloyId622.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId634!click!accDetail"] && $.__views.__alloyId634.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId636!click!profile"] && $.__views.__alloyId636.addEventListener("click", profile);
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
    __defers["$.__views.__alloyId692!click!profile"] && $.__views.__alloyId692.addEventListener("click", profile);
    __defers["$.__views.__alloyId694!click!payment"] && $.__views.__alloyId694.addEventListener("click", payment);
    __defers["$.__views.__alloyId697!click!accDetail"] && $.__views.__alloyId697.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId699!click!profile"] && $.__views.__alloyId699.addEventListener("click", profile);
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
>>>>>>> Stashed changes
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;