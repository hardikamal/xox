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
    $.__views.__alloyId863 = Alloy.createController("_header", {
        id: "__alloyId863",
        __parentSymbol: $.__views.subline
    });
    $.__views.__alloyId863.setParent($.__views.subline);
    $.__views.__alloyId864 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId864"
    });
    $.__views.subline.add($.__views.__alloyId864);
    $.__views.__alloyId865 = Ti.UI.createLabel({
=======
    $.__views.__alloyId704 = Alloy.createController("_header", {
        id: "__alloyId704",
        __parentSymbol: $.__views.subline
    });
    $.__views.__alloyId704.setParent($.__views.subline);
    $.__views.__alloyId705 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId705"
    });
    $.__views.subline.add($.__views.__alloyId705);
    $.__views.__alloyId706 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId865"
    });
    $.__views.__alloyId864.add($.__views.__alloyId865);
    $.__views.__alloyId866 = Ti.UI.createImageView({
=======
        id: "__alloyId706"
    });
    $.__views.__alloyId705.add($.__views.__alloyId706);
    $.__views.__alloyId707 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId866"
    });
    $.__views.__alloyId864.add($.__views.__alloyId866);
    back ? $.__views.__alloyId866.addEventListener("click", back) : __defers["$.__views.__alloyId866!click!back"] = true;
=======
        id: "__alloyId707"
    });
    $.__views.__alloyId705.add($.__views.__alloyId707);
    back ? $.__views.__alloyId707.addEventListener("click", back) : __defers["$.__views.__alloyId707!click!back"] = true;
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.subline.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId867 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId867"
    });
    $.__views.scrollView.add($.__views.__alloyId867);
    $.__views.__alloyId868 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId868"
    });
    $.__views.__alloyId867.add($.__views.__alloyId868);
    $.__views.__alloyId869 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId869"
    });
    $.__views.__alloyId868.add($.__views.__alloyId869);
    $.__views.__alloyId870 = Ti.UI.createLabel({
=======
    $.__views.__alloyId708 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId708"
    });
    $.__views.scrollView.add($.__views.__alloyId708);
    $.__views.__alloyId709 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId709"
    });
    $.__views.__alloyId708.add($.__views.__alloyId709);
    $.__views.__alloyId710 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId710"
    });
    $.__views.__alloyId709.add($.__views.__alloyId710);
    $.__views.__alloyId711 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId870"
    });
    $.__views.__alloyId869.add($.__views.__alloyId870);
    $.__views.__alloyId871 = Ti.UI.createLabel({
=======
        id: "__alloyId711"
    });
    $.__views.__alloyId710.add($.__views.__alloyId711);
    $.__views.__alloyId712 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId871"
    });
    $.__views.__alloyId869.add($.__views.__alloyId871);
    $.__views.__alloyId872 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId872"
    });
    $.__views.__alloyId867.add($.__views.__alloyId872);
    $.__views.__alloyId873 = Ti.UI.createImageView({
=======
        id: "__alloyId712"
    });
    $.__views.__alloyId710.add($.__views.__alloyId712);
    $.__views.__alloyId713 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId713"
    });
    $.__views.__alloyId708.add($.__views.__alloyId713);
    $.__views.__alloyId714 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< HEAD
        id: "__alloyId873"
    });
    $.__views.__alloyId872.add($.__views.__alloyId873);
    $.__views.__alloyId874 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId874"
    });
    $.__views.__alloyId867.add($.__views.__alloyId874);
    $.__views.__alloyId875 = Ti.UI.createImageView({
=======
        id: "__alloyId714"
    });
    $.__views.__alloyId713.add($.__views.__alloyId714);
    $.__views.__alloyId715 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId715"
    });
    $.__views.__alloyId708.add($.__views.__alloyId715);
    $.__views.__alloyId716 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< HEAD
        id: "__alloyId875"
    });
    $.__views.__alloyId874.add($.__views.__alloyId875);
    $.__views.__alloyId876 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId876"
    });
    $.__views.scrollView.add($.__views.__alloyId876);
    $.__views.__alloyId877 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId877"
    });
    $.__views.scrollView.add($.__views.__alloyId877);
    $.__views.__alloyId878 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId878"
    });
    $.__views.__alloyId877.add($.__views.__alloyId878);
    $.__views.__alloyId879 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId879"
    });
    $.__views.__alloyId878.add($.__views.__alloyId879);
    $.__views.__alloyId880 = Ti.UI.createLabel({
=======
        id: "__alloyId716"
    });
    $.__views.__alloyId715.add($.__views.__alloyId716);
    $.__views.__alloyId717 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId717"
    });
    $.__views.scrollView.add($.__views.__alloyId717);
    $.__views.__alloyId718 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId718"
    });
    $.__views.scrollView.add($.__views.__alloyId718);
    $.__views.__alloyId719 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId719"
    });
    $.__views.__alloyId718.add($.__views.__alloyId719);
    $.__views.__alloyId720 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId720"
    });
    $.__views.__alloyId719.add($.__views.__alloyId720);
    $.__views.__alloyId721 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId880"
    });
    $.__views.__alloyId879.add($.__views.__alloyId880);
    $.__views.__alloyId881 = Ti.UI.createLabel({
=======
        id: "__alloyId721"
    });
    $.__views.__alloyId720.add($.__views.__alloyId721);
    $.__views.__alloyId722 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId881"
    });
    $.__views.__alloyId879.add($.__views.__alloyId881);
    $.__views.__alloyId882 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId882"
    });
    $.__views.__alloyId877.add($.__views.__alloyId882);
    $.__views.__alloyId883 = Ti.UI.createImageView({
=======
        id: "__alloyId722"
    });
    $.__views.__alloyId720.add($.__views.__alloyId722);
    $.__views.__alloyId723 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId723"
    });
    $.__views.__alloyId718.add($.__views.__alloyId723);
    $.__views.__alloyId724 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< HEAD
        id: "__alloyId883"
    });
    $.__views.__alloyId882.add($.__views.__alloyId883);
    $.__views.__alloyId884 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId884"
    });
    $.__views.__alloyId877.add($.__views.__alloyId884);
    $.__views.__alloyId885 = Ti.UI.createImageView({
=======
        id: "__alloyId724"
    });
    $.__views.__alloyId723.add($.__views.__alloyId724);
    $.__views.__alloyId725 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId725"
    });
    $.__views.__alloyId718.add($.__views.__alloyId725);
    $.__views.__alloyId726 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< HEAD
        id: "__alloyId885"
    });
    $.__views.__alloyId884.add($.__views.__alloyId885);
    $.__views.__alloyId886 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId886"
    });
    $.__views.scrollView.add($.__views.__alloyId886);
    $.__views.__alloyId887 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId887"
    });
    $.__views.scrollView.add($.__views.__alloyId887);
    $.__views.__alloyId888 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId888"
    });
    $.__views.__alloyId887.add($.__views.__alloyId888);
    $.__views.__alloyId889 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId889"
    });
    $.__views.__alloyId888.add($.__views.__alloyId889);
    $.__views.__alloyId890 = Ti.UI.createLabel({
=======
        id: "__alloyId726"
    });
    $.__views.__alloyId725.add($.__views.__alloyId726);
    $.__views.__alloyId727 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId727"
    });
    $.__views.scrollView.add($.__views.__alloyId727);
    $.__views.__alloyId728 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId728"
    });
    $.__views.scrollView.add($.__views.__alloyId728);
    $.__views.__alloyId729 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId729"
    });
    $.__views.__alloyId728.add($.__views.__alloyId729);
    $.__views.__alloyId730 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId730"
    });
    $.__views.__alloyId729.add($.__views.__alloyId730);
    $.__views.__alloyId731 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId890"
    });
    $.__views.__alloyId889.add($.__views.__alloyId890);
    $.__views.__alloyId891 = Ti.UI.createLabel({
=======
        id: "__alloyId731"
    });
    $.__views.__alloyId730.add($.__views.__alloyId731);
    $.__views.__alloyId732 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId891"
    });
    $.__views.__alloyId889.add($.__views.__alloyId891);
    $.__views.__alloyId892 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId892"
    });
    $.__views.__alloyId887.add($.__views.__alloyId892);
    $.__views.__alloyId893 = Ti.UI.createImageView({
=======
        id: "__alloyId732"
    });
    $.__views.__alloyId730.add($.__views.__alloyId732);
    $.__views.__alloyId733 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId733"
    });
    $.__views.__alloyId728.add($.__views.__alloyId733);
    $.__views.__alloyId734 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< HEAD
        id: "__alloyId893"
    });
    $.__views.__alloyId892.add($.__views.__alloyId893);
    $.__views.__alloyId894 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId894"
    });
    $.__views.__alloyId887.add($.__views.__alloyId894);
    $.__views.__alloyId895 = Ti.UI.createImageView({
=======
        id: "__alloyId734"
    });
    $.__views.__alloyId733.add($.__views.__alloyId734);
    $.__views.__alloyId735 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId735"
    });
    $.__views.__alloyId728.add($.__views.__alloyId735);
    $.__views.__alloyId736 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< HEAD
        id: "__alloyId895"
    });
    $.__views.__alloyId894.add($.__views.__alloyId895);
    $.__views.__alloyId896 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId896"
    });
    $.__views.scrollView.add($.__views.__alloyId896);
    $.__views.__alloyId897 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId897"
    });
    $.__views.scrollView.add($.__views.__alloyId897);
    $.__views.__alloyId898 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId898"
    });
    $.__views.__alloyId897.add($.__views.__alloyId898);
    $.__views.__alloyId899 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId899"
    });
    $.__views.__alloyId898.add($.__views.__alloyId899);
    $.__views.__alloyId900 = Ti.UI.createLabel({
=======
        id: "__alloyId736"
    });
    $.__views.__alloyId735.add($.__views.__alloyId736);
    $.__views.__alloyId737 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId737"
    });
    $.__views.scrollView.add($.__views.__alloyId737);
    $.__views.__alloyId738 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId738"
    });
    $.__views.scrollView.add($.__views.__alloyId738);
    $.__views.__alloyId739 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId739"
    });
    $.__views.__alloyId738.add($.__views.__alloyId739);
    $.__views.__alloyId740 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId740"
    });
    $.__views.__alloyId739.add($.__views.__alloyId740);
    $.__views.__alloyId741 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId900"
    });
    $.__views.__alloyId899.add($.__views.__alloyId900);
    $.__views.__alloyId901 = Ti.UI.createLabel({
=======
        id: "__alloyId741"
    });
    $.__views.__alloyId740.add($.__views.__alloyId741);
    $.__views.__alloyId742 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId901"
    });
    $.__views.__alloyId899.add($.__views.__alloyId901);
    $.__views.__alloyId902 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId902"
    });
    $.__views.__alloyId897.add($.__views.__alloyId902);
    $.__views.__alloyId903 = Ti.UI.createImageView({
=======
        id: "__alloyId742"
    });
    $.__views.__alloyId740.add($.__views.__alloyId742);
    $.__views.__alloyId743 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId743"
    });
    $.__views.__alloyId738.add($.__views.__alloyId743);
    $.__views.__alloyId744 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< HEAD
        id: "__alloyId903"
    });
    $.__views.__alloyId902.add($.__views.__alloyId903);
    $.__views.__alloyId904 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId904"
    });
    $.__views.__alloyId897.add($.__views.__alloyId904);
    $.__views.__alloyId905 = Ti.UI.createImageView({
=======
        id: "__alloyId744"
    });
    $.__views.__alloyId743.add($.__views.__alloyId744);
    $.__views.__alloyId745 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId745"
    });
    $.__views.__alloyId738.add($.__views.__alloyId745);
    $.__views.__alloyId746 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< HEAD
        id: "__alloyId905"
    });
    $.__views.__alloyId904.add($.__views.__alloyId905);
    $.__views.__alloyId906 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId906"
    });
    $.__views.scrollView.add($.__views.__alloyId906);
    $.__views.__alloyId907 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId907"
    });
    $.__views.scrollView.add($.__views.__alloyId907);
    $.__views.__alloyId908 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId908"
    });
    $.__views.__alloyId907.add($.__views.__alloyId908);
    $.__views.__alloyId909 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId909"
    });
    $.__views.__alloyId908.add($.__views.__alloyId909);
    $.__views.__alloyId910 = Ti.UI.createLabel({
=======
        id: "__alloyId746"
    });
    $.__views.__alloyId745.add($.__views.__alloyId746);
    $.__views.__alloyId747 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId747"
    });
    $.__views.scrollView.add($.__views.__alloyId747);
    $.__views.__alloyId748 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId748"
    });
    $.__views.scrollView.add($.__views.__alloyId748);
    $.__views.__alloyId749 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId749"
    });
    $.__views.__alloyId748.add($.__views.__alloyId749);
    $.__views.__alloyId750 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId750"
    });
    $.__views.__alloyId749.add($.__views.__alloyId750);
    $.__views.__alloyId751 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId910"
    });
    $.__views.__alloyId909.add($.__views.__alloyId910);
    $.__views.__alloyId911 = Ti.UI.createLabel({
=======
        id: "__alloyId751"
    });
    $.__views.__alloyId750.add($.__views.__alloyId751);
    $.__views.__alloyId752 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId911"
    });
    $.__views.__alloyId909.add($.__views.__alloyId911);
    $.__views.__alloyId912 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId912"
    });
    $.__views.__alloyId907.add($.__views.__alloyId912);
    $.__views.__alloyId913 = Ti.UI.createImageView({
=======
        id: "__alloyId752"
    });
    $.__views.__alloyId750.add($.__views.__alloyId752);
    $.__views.__alloyId753 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId753"
    });
    $.__views.__alloyId748.add($.__views.__alloyId753);
    $.__views.__alloyId754 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< HEAD
        id: "__alloyId913"
    });
    $.__views.__alloyId912.add($.__views.__alloyId913);
    $.__views.__alloyId914 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId914"
    });
    $.__views.__alloyId907.add($.__views.__alloyId914);
    $.__views.__alloyId915 = Ti.UI.createImageView({
=======
        id: "__alloyId754"
    });
    $.__views.__alloyId753.add($.__views.__alloyId754);
    $.__views.__alloyId755 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId755"
    });
    $.__views.__alloyId748.add($.__views.__alloyId755);
    $.__views.__alloyId756 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< HEAD
        id: "__alloyId915"
    });
    $.__views.__alloyId914.add($.__views.__alloyId915);
    $.__views.__alloyId916 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId916"
    });
    $.__views.scrollView.add($.__views.__alloyId916);
    $.__views.__alloyId917 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId917"
    });
    $.__views.scrollView.add($.__views.__alloyId917);
    $.__views.__alloyId918 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId918"
    });
    $.__views.__alloyId917.add($.__views.__alloyId918);
    $.__views.__alloyId919 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId919"
    });
    $.__views.__alloyId918.add($.__views.__alloyId919);
    $.__views.__alloyId920 = Ti.UI.createLabel({
=======
        id: "__alloyId756"
    });
    $.__views.__alloyId755.add($.__views.__alloyId756);
    $.__views.__alloyId757 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId757"
    });
    $.__views.scrollView.add($.__views.__alloyId757);
    $.__views.__alloyId758 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId758"
    });
    $.__views.scrollView.add($.__views.__alloyId758);
    $.__views.__alloyId759 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId759"
    });
    $.__views.__alloyId758.add($.__views.__alloyId759);
    $.__views.__alloyId760 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId760"
    });
    $.__views.__alloyId759.add($.__views.__alloyId760);
    $.__views.__alloyId761 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId920"
    });
    $.__views.__alloyId919.add($.__views.__alloyId920);
    $.__views.__alloyId921 = Ti.UI.createLabel({
=======
        id: "__alloyId761"
    });
    $.__views.__alloyId760.add($.__views.__alloyId761);
    $.__views.__alloyId762 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId921"
    });
    $.__views.__alloyId919.add($.__views.__alloyId921);
    $.__views.__alloyId922 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId922"
    });
    $.__views.__alloyId917.add($.__views.__alloyId922);
    $.__views.__alloyId923 = Ti.UI.createImageView({
=======
        id: "__alloyId762"
    });
    $.__views.__alloyId760.add($.__views.__alloyId762);
    $.__views.__alloyId763 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId763"
    });
    $.__views.__alloyId758.add($.__views.__alloyId763);
    $.__views.__alloyId764 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< HEAD
        id: "__alloyId923"
    });
    $.__views.__alloyId922.add($.__views.__alloyId923);
    $.__views.__alloyId924 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId924"
    });
    $.__views.__alloyId917.add($.__views.__alloyId924);
    $.__views.__alloyId925 = Ti.UI.createImageView({
=======
        id: "__alloyId764"
    });
    $.__views.__alloyId763.add($.__views.__alloyId764);
    $.__views.__alloyId765 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId765"
    });
    $.__views.__alloyId758.add($.__views.__alloyId765);
    $.__views.__alloyId766 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< HEAD
        id: "__alloyId925"
    });
    $.__views.__alloyId924.add($.__views.__alloyId925);
    $.__views.__alloyId926 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        id: "__alloyId926"
    });
    $.__views.scrollView.add($.__views.__alloyId926);
    $.__views.__alloyId927 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#F5F5F5",
        id: "__alloyId927"
    });
    $.__views.subline.add($.__views.__alloyId927);
    addNumber ? $.__views.__alloyId927.addEventListener("click", addNumber) : __defers["$.__views.__alloyId927!click!addNumber"] = true;
    $.__views.__alloyId928 = Ti.UI.createView({
        layout: "horizontal",
        height: "100%",
        width: Ti.UI.SIZE,
        id: "__alloyId928"
    });
    $.__views.__alloyId927.add($.__views.__alloyId928);
    $.__views.__alloyId929 = Ti.UI.createImageView({
=======
        id: "__alloyId766"
    });
    $.__views.__alloyId765.add($.__views.__alloyId766);
    $.__views.__alloyId767 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        id: "__alloyId767"
    });
    $.__views.scrollView.add($.__views.__alloyId767);
    $.__views.__alloyId768 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#F5F5F5",
        id: "__alloyId768"
    });
    $.__views.subline.add($.__views.__alloyId768);
    addNumber ? $.__views.__alloyId768.addEventListener("click", addNumber) : __defers["$.__views.__alloyId768!click!addNumber"] = true;
    $.__views.__alloyId769 = Ti.UI.createView({
        layout: "horizontal",
        height: "100%",
        width: Ti.UI.SIZE,
        id: "__alloyId769"
    });
    $.__views.__alloyId768.add($.__views.__alloyId769);
    $.__views.__alloyId770 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/add_button.png",
<<<<<<< HEAD
        id: "__alloyId929"
    });
    $.__views.__alloyId928.add($.__views.__alloyId929);
    $.__views.__alloyId930 = Ti.UI.createLabel({
=======
        id: "__alloyId770"
    });
    $.__views.__alloyId769.add($.__views.__alloyId770);
    $.__views.__alloyId771 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Add new number",
        height: "100%",
        color: "#9E9E9E",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId930"
    });
    $.__views.__alloyId928.add($.__views.__alloyId930);
=======
        id: "__alloyId771"
    });
    $.__views.__alloyId769.add($.__views.__alloyId771);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
<<<<<<< HEAD
    __defers["$.__views.__alloyId866!click!back"] && $.__views.__alloyId866.addEventListener("click", back);
    __defers["$.__views.__alloyId927!click!addNumber"] && $.__views.__alloyId927.addEventListener("click", addNumber);
=======
    __defers["$.__views.__alloyId707!click!back"] && $.__views.__alloyId707.addEventListener("click", back);
    __defers["$.__views.__alloyId768!click!addNumber"] && $.__views.__alloyId768.addEventListener("click", addNumber);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;