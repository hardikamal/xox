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
        DRAWER.navigation("products", 1);
    }
    function idd(e) {
        console.log("idd");
        idd = e.row.title;
        switch (e.rowIndex) {
          case 0:
            $.view1.setVisible(true);
            $.view2.setVisible(false);
            $.view3.setVisible(false);
            $.view4.setVisible(false);
            break;

          case 1:
            $.view1.setVisible(false);
            $.view2.setVisible(true);
            $.view3.setVisible(false);
            $.view4.setVisible(false);
            break;

          case 2:
            $.view1.setVisible(false);
            $.view2.setVisible(false);
            $.view3.setVisible(true);
            $.view4.setVisible(false);
            break;

          case 3:
            $.view1.setVisible(false);
            $.view2.setVisible(false);
            $.view3.setVisible(false);
            $.view4.setVisible(true);
        }
    }
    function subscribe() {
        console.log("subscribe");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "idd";
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
    $.__views.idd = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "idd"
    });
    $.__views.idd && $.addTopLevelView($.__views.idd);
    $.__views.__alloyId727 = Alloy.createController("_header", {
        id: "__alloyId727",
        __parentSymbol: $.__views.idd
    });
    $.__views.__alloyId727.setParent($.__views.idd);
    $.__views.__alloyId728 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId728"
    });
    $.__views.idd.add($.__views.__alloyId728);
    $.__views.__alloyId729 = Ti.UI.createLabel({
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId729"
    });
    $.__views.__alloyId728.add($.__views.__alloyId729);
    $.__views.__alloyId730 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId730"
    });
    $.__views.__alloyId728.add($.__views.__alloyId730);
    back ? $.__views.__alloyId730.addEventListener("click", back) : __defers["$.__views.__alloyId730!click!back"] = true;
    $.__views.__alloyId731 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        id: "__alloyId731"
    });
    $.__views.idd.add($.__views.__alloyId731);
    $.__views.__alloyId732 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId732"
    });
    $.__views.__alloyId731.add($.__views.__alloyId732);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "30",
        borderRadius: "15",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId732.add($.__views.picker);
    var __alloyId733 = [];
    $.__views.__alloyId734 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId734"
    });
    __alloyId733.push($.__views.__alloyId734);
    $.__views.__alloyId735 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId735"
    });
    __alloyId733.push($.__views.__alloyId735);
    $.__views.__alloyId736 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId736"
    });
    __alloyId733.push($.__views.__alloyId736);
    $.__views.__alloyId737 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId737"
    });
    __alloyId733.push($.__views.__alloyId737);
    $.__views.picker.add(__alloyId733);
    idd ? $.__views.picker.addEventListener("change", idd) : __defers["$.__views.picker!change!idd"] = true;
    $.__views.__alloyId738 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId738"
    });
    $.__views.__alloyId732.add($.__views.__alloyId738);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "composite",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.idd.add($.__views.scrollView);
    $.__views.view1 = Ti.UI.createView({
        id: "view1",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "true"
    });
    $.__views.scrollView.add($.__views.view1);
    $.__views.__alloyId739 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "red",
        id: "__alloyId739"
    });
    $.__views.view1.add($.__views.__alloyId739);
    $.__views.__alloyId740 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId740"
    });
    $.__views.__alloyId739.add($.__views.__alloyId740);
    $.__views.__alloyId741 = Ti.UI.createLabel({
        text: "Top 10",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId741"
    });
    $.__views.__alloyId740.add($.__views.__alloyId741);
    $.__views.__alloyId742 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId742"
    });
    $.__views.__alloyId739.add($.__views.__alloyId742);
    $.__views.__alloyId743 = Ti.UI.createLabel({
        text: "Australia",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId743"
    });
    $.__views.__alloyId742.add($.__views.__alloyId743);
    $.__views.__alloyId744 = Ti.UI.createLabel({
        text: "614",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId744"
    });
    $.__views.__alloyId742.add($.__views.__alloyId744);
    $.__views.__alloyId745 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId745"
    });
    $.__views.__alloyId742.add($.__views.__alloyId745);
    $.__views.__alloyId746 = Ti.UI.createLabel({
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId746"
    });
    $.__views.__alloyId745.add($.__views.__alloyId746);
    $.__views.__alloyId747 = Ti.UI.createLabel({
        text: "RM0.44(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId747"
    });
    $.__views.__alloyId745.add($.__views.__alloyId747);
    $.__views.__alloyId748 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId748"
    });
    $.__views.__alloyId739.add($.__views.__alloyId748);
    $.__views.__alloyId749 = Ti.UI.createLabel({
        text: "Canada",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId749"
    });
    $.__views.__alloyId748.add($.__views.__alloyId749);
    $.__views.__alloyId750 = Ti.UI.createLabel({
        text: "1",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId750"
    });
    $.__views.__alloyId748.add($.__views.__alloyId750);
    $.__views.__alloyId751 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId751"
    });
    $.__views.__alloyId748.add($.__views.__alloyId751);
    $.__views.__alloyId752 = Ti.UI.createLabel({
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId752"
    });
    $.__views.__alloyId751.add($.__views.__alloyId752);
    $.__views.__alloyId753 = Ti.UI.createLabel({
        text: "RM0.08(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId753"
    });
    $.__views.__alloyId751.add($.__views.__alloyId753);
    $.__views.__alloyId754 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId754"
    });
    $.__views.__alloyId739.add($.__views.__alloyId754);
    $.__views.__alloyId755 = Ti.UI.createLabel({
        text: "China",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId755"
    });
    $.__views.__alloyId754.add($.__views.__alloyId755);
    $.__views.__alloyId756 = Ti.UI.createLabel({
        text: "86",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId756"
    });
    $.__views.__alloyId754.add($.__views.__alloyId756);
    $.__views.__alloyId757 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId757"
    });
    $.__views.__alloyId754.add($.__views.__alloyId757);
    $.__views.__alloyId758 = Ti.UI.createLabel({
        text: "RM0.06(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId758"
    });
    $.__views.__alloyId757.add($.__views.__alloyId758);
    $.__views.__alloyId759 = Ti.UI.createLabel({
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId759"
    });
    $.__views.__alloyId757.add($.__views.__alloyId759);
    $.__views.__alloyId760 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId760"
    });
    $.__views.__alloyId739.add($.__views.__alloyId760);
    $.__views.__alloyId761 = Ti.UI.createLabel({
        text: "Hong Kong",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId761"
    });
    $.__views.__alloyId760.add($.__views.__alloyId761);
    $.__views.__alloyId762 = Ti.UI.createLabel({
        text: "852",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId762"
    });
    $.__views.__alloyId760.add($.__views.__alloyId762);
    $.__views.__alloyId763 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId763"
    });
    $.__views.__alloyId760.add($.__views.__alloyId763);
    $.__views.__alloyId764 = Ti.UI.createLabel({
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId764"
    });
    $.__views.__alloyId763.add($.__views.__alloyId764);
    $.__views.__alloyId765 = Ti.UI.createLabel({
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId765"
    });
    $.__views.__alloyId763.add($.__views.__alloyId765);
    $.__views.__alloyId766 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId766"
    });
    $.__views.__alloyId739.add($.__views.__alloyId766);
    $.__views.__alloyId767 = Ti.UI.createLabel({
        text: "Indonesia*",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId767"
    });
    $.__views.__alloyId766.add($.__views.__alloyId767);
    $.__views.__alloyId768 = Ti.UI.createLabel({
        text: "62",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId768"
    });
    $.__views.__alloyId766.add($.__views.__alloyId768);
    $.__views.__alloyId769 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId769"
    });
    $.__views.__alloyId766.add($.__views.__alloyId769);
    $.__views.__alloyId770 = Ti.UI.createLabel({
        text: "RM0.62(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId770"
    });
    $.__views.__alloyId769.add($.__views.__alloyId770);
    $.__views.__alloyId771 = Ti.UI.createLabel({
        text: "RM0.66(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId771"
    });
    $.__views.__alloyId769.add($.__views.__alloyId771);
    $.__views.__alloyId772 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId772"
    });
    $.__views.__alloyId739.add($.__views.__alloyId772);
    $.__views.__alloyId773 = Ti.UI.createLabel({
        text: "Singapore",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId773"
    });
    $.__views.__alloyId772.add($.__views.__alloyId773);
    $.__views.__alloyId774 = Ti.UI.createLabel({
        text: "65",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId774"
    });
    $.__views.__alloyId772.add($.__views.__alloyId774);
    $.__views.__alloyId775 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId775"
    });
    $.__views.__alloyId772.add($.__views.__alloyId775);
    $.__views.__alloyId776 = Ti.UI.createLabel({
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId776"
    });
    $.__views.__alloyId775.add($.__views.__alloyId776);
    $.__views.__alloyId777 = Ti.UI.createLabel({
        text: "RM0.13(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId777"
    });
    $.__views.__alloyId775.add($.__views.__alloyId777);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view2);
    $.__views.__alloyId778 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "blue",
        id: "__alloyId778"
    });
    $.__views.view2.add($.__views.__alloyId778);
    $.__views.__alloyId779 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId779"
    });
    $.__views.__alloyId778.add($.__views.__alloyId779);
    $.__views.__alloyId780 = Ti.UI.createLabel({
        text: "Top 10",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId780"
    });
    $.__views.__alloyId779.add($.__views.__alloyId780);
    $.__views.__alloyId781 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId781"
    });
    $.__views.__alloyId778.add($.__views.__alloyId781);
    $.__views.__alloyId782 = Ti.UI.createLabel({
        text: "Australia",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId782"
    });
    $.__views.__alloyId781.add($.__views.__alloyId782);
    $.__views.__alloyId783 = Ti.UI.createLabel({
        text: "614",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId783"
    });
    $.__views.__alloyId781.add($.__views.__alloyId783);
    $.__views.__alloyId784 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId784"
    });
    $.__views.__alloyId781.add($.__views.__alloyId784);
    $.__views.__alloyId785 = Ti.UI.createLabel({
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId785"
    });
    $.__views.__alloyId784.add($.__views.__alloyId785);
    $.__views.__alloyId786 = Ti.UI.createLabel({
        text: "RM0.44(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId786"
    });
    $.__views.__alloyId784.add($.__views.__alloyId786);
    $.__views.__alloyId787 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId787"
    });
    $.__views.__alloyId778.add($.__views.__alloyId787);
    $.__views.__alloyId788 = Ti.UI.createLabel({
        text: "Canada",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId788"
    });
    $.__views.__alloyId787.add($.__views.__alloyId788);
    $.__views.__alloyId789 = Ti.UI.createLabel({
        text: "1",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId789"
    });
    $.__views.__alloyId787.add($.__views.__alloyId789);
    $.__views.__alloyId790 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId790"
    });
    $.__views.__alloyId787.add($.__views.__alloyId790);
    $.__views.__alloyId791 = Ti.UI.createLabel({
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId791"
    });
    $.__views.__alloyId790.add($.__views.__alloyId791);
    $.__views.__alloyId792 = Ti.UI.createLabel({
        text: "RM0.08(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId792"
    });
    $.__views.__alloyId790.add($.__views.__alloyId792);
    $.__views.__alloyId793 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId793"
    });
    $.__views.__alloyId778.add($.__views.__alloyId793);
    $.__views.__alloyId794 = Ti.UI.createLabel({
        text: "China",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId794"
    });
    $.__views.__alloyId793.add($.__views.__alloyId794);
    $.__views.__alloyId795 = Ti.UI.createLabel({
        text: "86",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId795"
    });
    $.__views.__alloyId793.add($.__views.__alloyId795);
    $.__views.__alloyId796 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId796"
    });
    $.__views.__alloyId793.add($.__views.__alloyId796);
    $.__views.__alloyId797 = Ti.UI.createLabel({
        text: "RM0.06(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId797"
    });
    $.__views.__alloyId796.add($.__views.__alloyId797);
    $.__views.__alloyId798 = Ti.UI.createLabel({
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId798"
    });
    $.__views.__alloyId796.add($.__views.__alloyId798);
    $.__views.__alloyId799 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId799"
    });
    $.__views.__alloyId778.add($.__views.__alloyId799);
    $.__views.__alloyId800 = Ti.UI.createLabel({
        text: "Hong Kong",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId800"
    });
    $.__views.__alloyId799.add($.__views.__alloyId800);
    $.__views.__alloyId801 = Ti.UI.createLabel({
        text: "852",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId801"
    });
    $.__views.__alloyId799.add($.__views.__alloyId801);
    $.__views.__alloyId802 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId802"
    });
    $.__views.__alloyId799.add($.__views.__alloyId802);
    $.__views.__alloyId803 = Ti.UI.createLabel({
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId803"
    });
    $.__views.__alloyId802.add($.__views.__alloyId803);
    $.__views.__alloyId804 = Ti.UI.createLabel({
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId804"
    });
    $.__views.__alloyId802.add($.__views.__alloyId804);
    $.__views.__alloyId805 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId805"
    });
    $.__views.__alloyId778.add($.__views.__alloyId805);
    $.__views.__alloyId806 = Ti.UI.createLabel({
        text: "Indonesia*",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId806"
    });
    $.__views.__alloyId805.add($.__views.__alloyId806);
    $.__views.__alloyId807 = Ti.UI.createLabel({
        text: "62",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId807"
    });
    $.__views.__alloyId805.add($.__views.__alloyId807);
    $.__views.__alloyId808 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId808"
    });
    $.__views.__alloyId805.add($.__views.__alloyId808);
    $.__views.__alloyId809 = Ti.UI.createLabel({
        text: "RM0.62(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId809"
    });
    $.__views.__alloyId808.add($.__views.__alloyId809);
    $.__views.__alloyId810 = Ti.UI.createLabel({
        text: "RM0.66(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId810"
    });
    $.__views.__alloyId808.add($.__views.__alloyId810);
    $.__views.__alloyId811 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId811"
    });
    $.__views.__alloyId778.add($.__views.__alloyId811);
    $.__views.__alloyId812 = Ti.UI.createLabel({
        text: "Singapore",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId812"
    });
    $.__views.__alloyId811.add($.__views.__alloyId812);
    $.__views.__alloyId813 = Ti.UI.createLabel({
        text: "65",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId813"
    });
    $.__views.__alloyId811.add($.__views.__alloyId813);
    $.__views.__alloyId814 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId814"
    });
    $.__views.__alloyId811.add($.__views.__alloyId814);
    $.__views.__alloyId815 = Ti.UI.createLabel({
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId815"
    });
    $.__views.__alloyId814.add($.__views.__alloyId815);
    $.__views.__alloyId816 = Ti.UI.createLabel({
        text: "RM0.13(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId816"
    });
    $.__views.__alloyId814.add($.__views.__alloyId816);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view3);
    $.__views.__alloyId817 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "green",
        id: "__alloyId817"
    });
    $.__views.view3.add($.__views.__alloyId817);
    $.__views.__alloyId818 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId818"
    });
    $.__views.__alloyId817.add($.__views.__alloyId818);
    $.__views.__alloyId819 = Ti.UI.createLabel({
        text: "Top 10",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId819"
    });
    $.__views.__alloyId818.add($.__views.__alloyId819);
    $.__views.__alloyId820 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId820"
    });
    $.__views.__alloyId817.add($.__views.__alloyId820);
    $.__views.__alloyId821 = Ti.UI.createLabel({
        text: "Australia",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId821"
    });
    $.__views.__alloyId820.add($.__views.__alloyId821);
    $.__views.__alloyId822 = Ti.UI.createLabel({
        text: "614",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId822"
    });
    $.__views.__alloyId820.add($.__views.__alloyId822);
    $.__views.__alloyId823 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId823"
    });
    $.__views.__alloyId820.add($.__views.__alloyId823);
    $.__views.__alloyId824 = Ti.UI.createLabel({
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId824"
    });
    $.__views.__alloyId823.add($.__views.__alloyId824);
    $.__views.__alloyId825 = Ti.UI.createLabel({
        text: "RM0.44(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId825"
    });
    $.__views.__alloyId823.add($.__views.__alloyId825);
    $.__views.__alloyId826 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId826"
    });
    $.__views.__alloyId817.add($.__views.__alloyId826);
    $.__views.__alloyId827 = Ti.UI.createLabel({
        text: "Canada",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId827"
    });
    $.__views.__alloyId826.add($.__views.__alloyId827);
    $.__views.__alloyId828 = Ti.UI.createLabel({
        text: "1",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId828"
    });
    $.__views.__alloyId826.add($.__views.__alloyId828);
    $.__views.__alloyId829 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId829"
    });
    $.__views.__alloyId826.add($.__views.__alloyId829);
    $.__views.__alloyId830 = Ti.UI.createLabel({
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId830"
    });
    $.__views.__alloyId829.add($.__views.__alloyId830);
    $.__views.__alloyId831 = Ti.UI.createLabel({
        text: "RM0.08(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId831"
    });
    $.__views.__alloyId829.add($.__views.__alloyId831);
    $.__views.__alloyId832 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId832"
    });
    $.__views.__alloyId817.add($.__views.__alloyId832);
    $.__views.__alloyId833 = Ti.UI.createLabel({
        text: "China",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId833"
    });
    $.__views.__alloyId832.add($.__views.__alloyId833);
    $.__views.__alloyId834 = Ti.UI.createLabel({
        text: "86",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId834"
    });
    $.__views.__alloyId832.add($.__views.__alloyId834);
    $.__views.__alloyId835 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId835"
    });
    $.__views.__alloyId832.add($.__views.__alloyId835);
    $.__views.__alloyId836 = Ti.UI.createLabel({
        text: "RM0.06(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId836"
    });
    $.__views.__alloyId835.add($.__views.__alloyId836);
    $.__views.__alloyId837 = Ti.UI.createLabel({
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId837"
    });
    $.__views.__alloyId835.add($.__views.__alloyId837);
    $.__views.__alloyId838 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId838"
    });
    $.__views.__alloyId817.add($.__views.__alloyId838);
    $.__views.__alloyId839 = Ti.UI.createLabel({
        text: "Hong Kong",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId839"
    });
    $.__views.__alloyId838.add($.__views.__alloyId839);
    $.__views.__alloyId840 = Ti.UI.createLabel({
        text: "852",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId840"
    });
    $.__views.__alloyId838.add($.__views.__alloyId840);
    $.__views.__alloyId841 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId841"
    });
    $.__views.__alloyId838.add($.__views.__alloyId841);
    $.__views.__alloyId842 = Ti.UI.createLabel({
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId842"
    });
    $.__views.__alloyId841.add($.__views.__alloyId842);
    $.__views.__alloyId843 = Ti.UI.createLabel({
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId843"
    });
    $.__views.__alloyId841.add($.__views.__alloyId843);
    $.__views.__alloyId844 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId844"
    });
    $.__views.__alloyId817.add($.__views.__alloyId844);
    $.__views.__alloyId845 = Ti.UI.createLabel({
        text: "Indonesia*",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId845"
    });
    $.__views.__alloyId844.add($.__views.__alloyId845);
    $.__views.__alloyId846 = Ti.UI.createLabel({
        text: "62",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId846"
    });
    $.__views.__alloyId844.add($.__views.__alloyId846);
    $.__views.__alloyId847 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId847"
    });
    $.__views.__alloyId844.add($.__views.__alloyId847);
    $.__views.__alloyId848 = Ti.UI.createLabel({
        text: "RM0.62(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId848"
    });
    $.__views.__alloyId847.add($.__views.__alloyId848);
    $.__views.__alloyId849 = Ti.UI.createLabel({
        text: "RM0.66(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId849"
    });
    $.__views.__alloyId847.add($.__views.__alloyId849);
    $.__views.__alloyId850 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId850"
    });
    $.__views.__alloyId817.add($.__views.__alloyId850);
    $.__views.__alloyId851 = Ti.UI.createLabel({
        text: "Singapore",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId851"
    });
    $.__views.__alloyId850.add($.__views.__alloyId851);
    $.__views.__alloyId852 = Ti.UI.createLabel({
        text: "65",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId852"
    });
    $.__views.__alloyId850.add($.__views.__alloyId852);
    $.__views.__alloyId853 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId853"
    });
    $.__views.__alloyId850.add($.__views.__alloyId853);
    $.__views.__alloyId854 = Ti.UI.createLabel({
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId854"
    });
    $.__views.__alloyId853.add($.__views.__alloyId854);
    $.__views.__alloyId855 = Ti.UI.createLabel({
        text: "RM0.13(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId855"
    });
    $.__views.__alloyId853.add($.__views.__alloyId855);
    $.__views.view4 = Ti.UI.createView({
        id: "view4",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view4);
    $.__views.__alloyId856 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "yellow",
        id: "__alloyId856"
    });
    $.__views.view4.add($.__views.__alloyId856);
    $.__views.__alloyId857 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId857"
    });
    $.__views.__alloyId856.add($.__views.__alloyId857);
    $.__views.__alloyId858 = Ti.UI.createLabel({
        text: "Top 10",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId858"
    });
    $.__views.__alloyId857.add($.__views.__alloyId858);
    $.__views.__alloyId859 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId859"
    });
    $.__views.__alloyId856.add($.__views.__alloyId859);
    $.__views.__alloyId860 = Ti.UI.createLabel({
        text: "Australia",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId860"
    });
    $.__views.__alloyId859.add($.__views.__alloyId860);
    $.__views.__alloyId861 = Ti.UI.createLabel({
        text: "614",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId861"
    });
    $.__views.__alloyId859.add($.__views.__alloyId861);
    $.__views.__alloyId862 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId862"
    });
    $.__views.__alloyId859.add($.__views.__alloyId862);
    $.__views.__alloyId863 = Ti.UI.createLabel({
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId863"
    });
    $.__views.__alloyId862.add($.__views.__alloyId863);
    $.__views.__alloyId864 = Ti.UI.createLabel({
        text: "RM0.44(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId864"
    });
    $.__views.__alloyId862.add($.__views.__alloyId864);
    $.__views.__alloyId865 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId865"
    });
    $.__views.__alloyId856.add($.__views.__alloyId865);
    $.__views.__alloyId866 = Ti.UI.createLabel({
        text: "Canada",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId866"
    });
    $.__views.__alloyId865.add($.__views.__alloyId866);
    $.__views.__alloyId867 = Ti.UI.createLabel({
        text: "1",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId867"
    });
    $.__views.__alloyId865.add($.__views.__alloyId867);
    $.__views.__alloyId868 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId868"
    });
    $.__views.__alloyId865.add($.__views.__alloyId868);
    $.__views.__alloyId869 = Ti.UI.createLabel({
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId869"
    });
    $.__views.__alloyId868.add($.__views.__alloyId869);
    $.__views.__alloyId870 = Ti.UI.createLabel({
        text: "RM0.08(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId870"
    });
    $.__views.__alloyId868.add($.__views.__alloyId870);
    $.__views.__alloyId871 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId871"
    });
    $.__views.__alloyId856.add($.__views.__alloyId871);
    $.__views.__alloyId872 = Ti.UI.createLabel({
        text: "China",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId872"
    });
    $.__views.__alloyId871.add($.__views.__alloyId872);
    $.__views.__alloyId873 = Ti.UI.createLabel({
        text: "86",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId873"
    });
    $.__views.__alloyId871.add($.__views.__alloyId873);
    $.__views.__alloyId874 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId874"
    });
    $.__views.__alloyId871.add($.__views.__alloyId874);
    $.__views.__alloyId875 = Ti.UI.createLabel({
        text: "RM0.06(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId875"
    });
    $.__views.__alloyId874.add($.__views.__alloyId875);
    $.__views.__alloyId876 = Ti.UI.createLabel({
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId876"
    });
    $.__views.__alloyId874.add($.__views.__alloyId876);
    $.__views.__alloyId877 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId877"
    });
    $.__views.__alloyId856.add($.__views.__alloyId877);
    $.__views.__alloyId878 = Ti.UI.createLabel({
        text: "Hong Kong",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId878"
    });
    $.__views.__alloyId877.add($.__views.__alloyId878);
    $.__views.__alloyId879 = Ti.UI.createLabel({
        text: "852",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId879"
    });
    $.__views.__alloyId877.add($.__views.__alloyId879);
    $.__views.__alloyId880 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId880"
    });
    $.__views.__alloyId877.add($.__views.__alloyId880);
    $.__views.__alloyId881 = Ti.UI.createLabel({
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId881"
    });
    $.__views.__alloyId880.add($.__views.__alloyId881);
    $.__views.__alloyId882 = Ti.UI.createLabel({
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId882"
    });
    $.__views.__alloyId880.add($.__views.__alloyId882);
    $.__views.__alloyId883 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId883"
    });
    $.__views.__alloyId856.add($.__views.__alloyId883);
    $.__views.__alloyId884 = Ti.UI.createLabel({
        text: "Indonesia*",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId884"
    });
    $.__views.__alloyId883.add($.__views.__alloyId884);
    $.__views.__alloyId885 = Ti.UI.createLabel({
        text: "62",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId885"
    });
    $.__views.__alloyId883.add($.__views.__alloyId885);
    $.__views.__alloyId886 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId886"
    });
    $.__views.__alloyId883.add($.__views.__alloyId886);
    $.__views.__alloyId887 = Ti.UI.createLabel({
        text: "RM0.62(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId887"
    });
    $.__views.__alloyId886.add($.__views.__alloyId887);
    $.__views.__alloyId888 = Ti.UI.createLabel({
        text: "RM0.66(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId888"
    });
    $.__views.__alloyId886.add($.__views.__alloyId888);
    $.__views.__alloyId889 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId889"
    });
    $.__views.__alloyId856.add($.__views.__alloyId889);
    $.__views.__alloyId890 = Ti.UI.createLabel({
        text: "Singapore",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId890"
    });
    $.__views.__alloyId889.add($.__views.__alloyId890);
    $.__views.__alloyId891 = Ti.UI.createLabel({
        text: "65",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
        id: "__alloyId891"
    });
    $.__views.__alloyId889.add($.__views.__alloyId891);
    $.__views.__alloyId892 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId892"
    });
    $.__views.__alloyId889.add($.__views.__alloyId892);
    $.__views.__alloyId893 = Ti.UI.createLabel({
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId893"
    });
    $.__views.__alloyId892.add($.__views.__alloyId893);
    $.__views.__alloyId894 = Ti.UI.createLabel({
        text: "RM0.13(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
        id: "__alloyId894"
    });
    $.__views.__alloyId892.add($.__views.__alloyId894);
    $.__views.__alloyId895 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId895"
    });
    $.__views.idd.add($.__views.__alloyId895);
    subscribe ? $.__views.__alloyId895.addEventListener("click", subscribe) : __defers["$.__views.__alloyId895!click!subscribe"] = true;
    $.__views.__alloyId896 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId896"
    });
    $.__views.__alloyId895.add($.__views.__alloyId896);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    var idd;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId730!click!back"] && $.__views.__alloyId730.addEventListener("click", back);
    __defers["$.__views.picker!change!idd"] && $.__views.picker.addEventListener("change", idd);
    __defers["$.__views.__alloyId895!click!subscribe"] && $.__views.__alloyId895.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;