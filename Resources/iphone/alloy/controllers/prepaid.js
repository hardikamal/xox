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
        DRAWER.navigation("products", 2);
    }
    function rate(e) {
        console.log("rate");
        rate = e.row.title;
        ("iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname) && ($.rateLabel.text = rate);
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
    function showPicker() {
        console.log("showPicker");
        console.log("$.pickerView.visible: " + $.pickerView.visible);
        if ("false" == $.pickerView.visible) {
            console.log("false");
            $.contentView.height = 300;
            $.pickerView.height = 250;
            $.pickerContentView.height = 250;
            $.pickerView.setVisible(true);
            $.done.setVisible(true);
            $.picker.setVisible(true);
        } else if (false == $.pickerView.visible) {
            console.log("else false");
            $.contentView.height = 300;
            $.pickerView.height = 250;
            $.pickerContentView.height = 250;
            $.pickerView.setVisible(true);
            $.done.setVisible(true);
            $.picker.setVisible(true);
        } else {
            console.log("else true");
            $.contentView.height = 50;
            $.pickerView.height = 50;
            $.pickerContentView.height = 50;
            $.pickerView.setVisible(false);
            $.done.setVisible(false);
            $.picker.setVisible(false);
        }
    }
    function done() {
        console.log("done");
        $.contentView.height = 50;
        $.pickerView.height = 50;
        $.pickerContentView.height = 50;
        $.pickerView.setVisible(false);
        $.done.setVisible(false);
        $.picker.setVisible(false);
    }
    function subscribe() {
        console.log("subscribe");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "prepaid";
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
    $.__views.prepaid = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaid"
    });
    $.__views.prepaid && $.addTopLevelView($.__views.prepaid);
    $.__views.__alloyId676 = Alloy.createController("_header", {
        id: "__alloyId676",
        __parentSymbol: $.__views.prepaid
    });
    $.__views.__alloyId676.setParent($.__views.prepaid);
    $.__views.__alloyId677 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId677"
    });
    $.__views.prepaid.add($.__views.__alloyId677);
    $.__views.__alloyId678 = Ti.UI.createLabel({
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId678"
    });
    $.__views.__alloyId677.add($.__views.__alloyId678);
    $.__views.__alloyId679 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId679"
    });
    $.__views.__alloyId677.add($.__views.__alloyId679);
    back ? $.__views.__alloyId679.addEventListener("click", back) : __defers["$.__views.__alloyId679!click!back"] = true;
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "50"
    });
    $.__views.prepaid.add($.__views.contentView);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
        width: "90%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.rateLabel = Ti.UI.createLabel({
        id: "rateLabel",
        height: "30",
        width: "100%",
        backgroundColor: "#FCFCFC",
        borderRadius: "15",
        borderColor: "#FCFCFC",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.rateLabel);
    showPicker ? $.__views.rateLabel.addEventListener("click", showPicker) : __defers["$.__views.rateLabel!click!showPicker"] = true;
    $.__views.__alloyId680 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId680"
    });
    $.__views.pickerContentView.add($.__views.__alloyId680);
    showPicker ? $.__views.__alloyId680.addEventListener("click", showPicker) : __defers["$.__views.__alloyId680!click!showPicker"] = true;
    $.__views.pickerView = Ti.UI.createView({
        id: "pickerView",
        height: "50",
        width: "100%",
        visible: "false",
        top: "50",
        backgroundColor: "blue"
    });
    $.__views.pickerContentView.add($.__views.pickerView);
    $.__views.done = Ti.UI.createButton({
        title: "Done",
        id: "done",
        height: "30",
        width: "100%",
        backgroundColor: "black",
        color: "white",
        top: "0",
        left: "0",
        visible: "false"
    });
    $.__views.pickerView.add($.__views.done);
    done ? $.__views.done.addEventListener("click", done) : __defers["$.__views.done!click!done"] = true;
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: Ti.UI.SIZE,
        top: "30",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "false"
    });
    $.__views.pickerView.add($.__views.picker);
    var __alloyId681 = [];
    $.__views.__alloyId682 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId682"
    });
    __alloyId681.push($.__views.__alloyId682);
    $.__views.__alloyId683 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId683"
    });
    __alloyId681.push($.__views.__alloyId683);
    $.__views.__alloyId684 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId684"
    });
    __alloyId681.push($.__views.__alloyId684);
    $.__views.__alloyId685 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId685"
    });
    __alloyId681.push($.__views.__alloyId685);
    $.__views.picker.add(__alloyId681);
    rate ? $.__views.picker.addEventListener("change", rate) : __defers["$.__views.picker!change!rate"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "composite",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.prepaid.add($.__views.scrollView);
    $.__views.view1 = Ti.UI.createView({
        id: "view1",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "true"
    });
    $.__views.scrollView.add($.__views.view1);
    $.__views.__alloyId686 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "red",
        id: "__alloyId686"
    });
    $.__views.view1.add($.__views.__alloyId686);
    $.__views.__alloyId687 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId687"
    });
    $.__views.__alloyId686.add($.__views.__alloyId687);
    $.__views.__alloyId688 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId688"
    });
    $.__views.__alloyId687.add($.__views.__alloyId688);
    $.__views.__alloyId689 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId689"
    });
    $.__views.__alloyId686.add($.__views.__alloyId689);
    $.__views.__alloyId690 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId690"
    });
    $.__views.__alloyId689.add($.__views.__alloyId690);
    $.__views.__alloyId691 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId691"
    });
    $.__views.__alloyId689.add($.__views.__alloyId691);
    $.__views.__alloyId692 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId692"
    });
    $.__views.__alloyId686.add($.__views.__alloyId692);
    $.__views.__alloyId693 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId693"
    });
    $.__views.__alloyId692.add($.__views.__alloyId693);
    $.__views.__alloyId694 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId694"
    });
    $.__views.__alloyId692.add($.__views.__alloyId694);
    $.__views.__alloyId695 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId695"
    });
    $.__views.__alloyId686.add($.__views.__alloyId695);
    $.__views.__alloyId696 = Ti.UI.createLabel({
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId696"
    });
    $.__views.__alloyId695.add($.__views.__alloyId696);
    $.__views.__alloyId697 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId697"
    });
    $.__views.__alloyId695.add($.__views.__alloyId697);
    $.__views.__alloyId698 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId698"
    });
    $.__views.view1.add($.__views.__alloyId698);
    $.__views.__alloyId699 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId699"
    });
    $.__views.__alloyId698.add($.__views.__alloyId699);
    $.__views.__alloyId700 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId700"
    });
    $.__views.__alloyId699.add($.__views.__alloyId700);
    $.__views.__alloyId701 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId701"
    });
    $.__views.__alloyId698.add($.__views.__alloyId701);
    $.__views.__alloyId702 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId702"
    });
    $.__views.__alloyId701.add($.__views.__alloyId702);
    $.__views.__alloyId703 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId703"
    });
    $.__views.__alloyId701.add($.__views.__alloyId703);
    $.__views.__alloyId704 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId704"
    });
    $.__views.__alloyId698.add($.__views.__alloyId704);
    $.__views.__alloyId705 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId705"
    });
    $.__views.__alloyId704.add($.__views.__alloyId705);
    $.__views.__alloyId706 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId706"
    });
    $.__views.__alloyId704.add($.__views.__alloyId706);
    $.__views.__alloyId707 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId707"
    });
    $.__views.__alloyId698.add($.__views.__alloyId707);
    $.__views.__alloyId708 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId708"
    });
    $.__views.__alloyId707.add($.__views.__alloyId708);
    $.__views.__alloyId709 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId709"
    });
    $.__views.__alloyId707.add($.__views.__alloyId709);
    $.__views.__alloyId710 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId710"
    });
    $.__views.__alloyId698.add($.__views.__alloyId710);
    $.__views.__alloyId711 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId711"
    });
    $.__views.__alloyId710.add($.__views.__alloyId711);
    $.__views.__alloyId712 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId712"
    });
    $.__views.__alloyId710.add($.__views.__alloyId712);
    $.__views.__alloyId713 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId713"
    });
    $.__views.view1.add($.__views.__alloyId713);
    $.__views.__alloyId714 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId714"
    });
    $.__views.__alloyId713.add($.__views.__alloyId714);
    $.__views.__alloyId715 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId715"
    });
    $.__views.__alloyId714.add($.__views.__alloyId715);
    $.__views.__alloyId716 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId716"
    });
    $.__views.__alloyId713.add($.__views.__alloyId716);
    $.__views.__alloyId717 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId717"
    });
    $.__views.__alloyId716.add($.__views.__alloyId717);
    $.__views.__alloyId718 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId718"
    });
    $.__views.__alloyId716.add($.__views.__alloyId718);
    $.__views.__alloyId719 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId719"
    });
    $.__views.__alloyId713.add($.__views.__alloyId719);
    $.__views.__alloyId720 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId720"
    });
    $.__views.__alloyId719.add($.__views.__alloyId720);
    $.__views.__alloyId721 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId721"
    });
    $.__views.__alloyId719.add($.__views.__alloyId721);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view2);
    $.__views.__alloyId722 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "blue",
        id: "__alloyId722"
    });
    $.__views.view2.add($.__views.__alloyId722);
    $.__views.__alloyId723 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId723"
    });
    $.__views.__alloyId722.add($.__views.__alloyId723);
    $.__views.__alloyId724 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId724"
    });
    $.__views.__alloyId723.add($.__views.__alloyId724);
    $.__views.__alloyId725 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId725"
    });
    $.__views.__alloyId722.add($.__views.__alloyId725);
    $.__views.__alloyId726 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId726"
    });
    $.__views.__alloyId725.add($.__views.__alloyId726);
    $.__views.__alloyId727 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId727"
    });
    $.__views.__alloyId725.add($.__views.__alloyId727);
    $.__views.__alloyId728 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId728"
    });
    $.__views.__alloyId722.add($.__views.__alloyId728);
    $.__views.__alloyId729 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId729"
    });
    $.__views.__alloyId728.add($.__views.__alloyId729);
    $.__views.__alloyId730 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId730"
    });
    $.__views.__alloyId728.add($.__views.__alloyId730);
    $.__views.__alloyId731 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId731"
    });
    $.__views.__alloyId722.add($.__views.__alloyId731);
    $.__views.__alloyId732 = Ti.UI.createLabel({
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId732"
    });
    $.__views.__alloyId731.add($.__views.__alloyId732);
    $.__views.__alloyId733 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId733"
    });
    $.__views.__alloyId731.add($.__views.__alloyId733);
    $.__views.__alloyId734 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId734"
    });
    $.__views.view2.add($.__views.__alloyId734);
    $.__views.__alloyId735 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId735"
    });
    $.__views.__alloyId734.add($.__views.__alloyId735);
    $.__views.__alloyId736 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId736"
    });
    $.__views.__alloyId735.add($.__views.__alloyId736);
    $.__views.__alloyId737 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId737"
    });
    $.__views.__alloyId734.add($.__views.__alloyId737);
    $.__views.__alloyId738 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId738"
    });
    $.__views.__alloyId737.add($.__views.__alloyId738);
    $.__views.__alloyId739 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId739"
    });
    $.__views.__alloyId737.add($.__views.__alloyId739);
    $.__views.__alloyId740 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId740"
    });
    $.__views.__alloyId734.add($.__views.__alloyId740);
    $.__views.__alloyId741 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId741"
    });
    $.__views.__alloyId740.add($.__views.__alloyId741);
    $.__views.__alloyId742 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId742"
    });
    $.__views.__alloyId740.add($.__views.__alloyId742);
    $.__views.__alloyId743 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId743"
    });
    $.__views.__alloyId734.add($.__views.__alloyId743);
    $.__views.__alloyId744 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId744"
    });
    $.__views.__alloyId743.add($.__views.__alloyId744);
    $.__views.__alloyId745 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId745"
    });
    $.__views.__alloyId743.add($.__views.__alloyId745);
    $.__views.__alloyId746 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId746"
    });
    $.__views.__alloyId734.add($.__views.__alloyId746);
    $.__views.__alloyId747 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId747"
    });
    $.__views.__alloyId746.add($.__views.__alloyId747);
    $.__views.__alloyId748 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId748"
    });
    $.__views.__alloyId746.add($.__views.__alloyId748);
    $.__views.__alloyId749 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId749"
    });
    $.__views.view2.add($.__views.__alloyId749);
    $.__views.__alloyId750 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId750"
    });
    $.__views.__alloyId749.add($.__views.__alloyId750);
    $.__views.__alloyId751 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId751"
    });
    $.__views.__alloyId750.add($.__views.__alloyId751);
    $.__views.__alloyId752 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId752"
    });
    $.__views.__alloyId749.add($.__views.__alloyId752);
    $.__views.__alloyId753 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId753"
    });
    $.__views.__alloyId752.add($.__views.__alloyId753);
    $.__views.__alloyId754 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId754"
    });
    $.__views.__alloyId752.add($.__views.__alloyId754);
    $.__views.__alloyId755 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId755"
    });
    $.__views.__alloyId749.add($.__views.__alloyId755);
    $.__views.__alloyId756 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId756"
    });
    $.__views.__alloyId755.add($.__views.__alloyId756);
    $.__views.__alloyId757 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId757"
    });
    $.__views.__alloyId755.add($.__views.__alloyId757);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view3);
    $.__views.__alloyId758 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "yellow",
        id: "__alloyId758"
    });
    $.__views.view3.add($.__views.__alloyId758);
    $.__views.__alloyId759 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId759"
    });
    $.__views.__alloyId758.add($.__views.__alloyId759);
    $.__views.__alloyId760 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId760"
    });
    $.__views.__alloyId759.add($.__views.__alloyId760);
    $.__views.__alloyId761 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId761"
    });
    $.__views.__alloyId758.add($.__views.__alloyId761);
    $.__views.__alloyId762 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId762"
    });
    $.__views.__alloyId761.add($.__views.__alloyId762);
    $.__views.__alloyId763 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId763"
    });
    $.__views.__alloyId761.add($.__views.__alloyId763);
    $.__views.__alloyId764 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId764"
    });
    $.__views.__alloyId758.add($.__views.__alloyId764);
    $.__views.__alloyId765 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId765"
    });
    $.__views.__alloyId764.add($.__views.__alloyId765);
    $.__views.__alloyId766 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId766"
    });
    $.__views.__alloyId764.add($.__views.__alloyId766);
    $.__views.__alloyId767 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId767"
    });
    $.__views.__alloyId758.add($.__views.__alloyId767);
    $.__views.__alloyId768 = Ti.UI.createLabel({
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId768"
    });
    $.__views.__alloyId767.add($.__views.__alloyId768);
    $.__views.__alloyId769 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId769"
    });
    $.__views.__alloyId767.add($.__views.__alloyId769);
    $.__views.__alloyId770 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId770"
    });
    $.__views.view3.add($.__views.__alloyId770);
    $.__views.__alloyId771 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId771"
    });
    $.__views.__alloyId770.add($.__views.__alloyId771);
    $.__views.__alloyId772 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId772"
    });
    $.__views.__alloyId771.add($.__views.__alloyId772);
    $.__views.__alloyId773 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId773"
    });
    $.__views.__alloyId770.add($.__views.__alloyId773);
    $.__views.__alloyId774 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId774"
    });
    $.__views.__alloyId773.add($.__views.__alloyId774);
    $.__views.__alloyId775 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId775"
    });
    $.__views.__alloyId773.add($.__views.__alloyId775);
    $.__views.__alloyId776 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId776"
    });
    $.__views.__alloyId770.add($.__views.__alloyId776);
    $.__views.__alloyId777 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId777"
    });
    $.__views.__alloyId776.add($.__views.__alloyId777);
    $.__views.__alloyId778 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId778"
    });
    $.__views.__alloyId776.add($.__views.__alloyId778);
    $.__views.__alloyId779 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId779"
    });
    $.__views.__alloyId770.add($.__views.__alloyId779);
    $.__views.__alloyId780 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId780"
    });
    $.__views.__alloyId779.add($.__views.__alloyId780);
    $.__views.__alloyId781 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId781"
    });
    $.__views.__alloyId779.add($.__views.__alloyId781);
    $.__views.__alloyId782 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId782"
    });
    $.__views.__alloyId770.add($.__views.__alloyId782);
    $.__views.__alloyId783 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId783"
    });
    $.__views.__alloyId782.add($.__views.__alloyId783);
    $.__views.__alloyId784 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId784"
    });
    $.__views.__alloyId782.add($.__views.__alloyId784);
    $.__views.__alloyId785 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId785"
    });
    $.__views.view3.add($.__views.__alloyId785);
    $.__views.__alloyId786 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId786"
    });
    $.__views.__alloyId785.add($.__views.__alloyId786);
    $.__views.__alloyId787 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId787"
    });
    $.__views.__alloyId786.add($.__views.__alloyId787);
    $.__views.__alloyId788 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId788"
    });
    $.__views.__alloyId785.add($.__views.__alloyId788);
    $.__views.__alloyId789 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId789"
    });
    $.__views.__alloyId788.add($.__views.__alloyId789);
    $.__views.__alloyId790 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId790"
    });
    $.__views.__alloyId788.add($.__views.__alloyId790);
    $.__views.__alloyId791 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId791"
    });
    $.__views.__alloyId785.add($.__views.__alloyId791);
    $.__views.__alloyId792 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId792"
    });
    $.__views.__alloyId791.add($.__views.__alloyId792);
    $.__views.__alloyId793 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId793"
    });
    $.__views.__alloyId791.add($.__views.__alloyId793);
    $.__views.view4 = Ti.UI.createView({
        id: "view4",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view4);
    $.__views.__alloyId794 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "green",
        id: "__alloyId794"
    });
    $.__views.view4.add($.__views.__alloyId794);
    $.__views.__alloyId795 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId795"
    });
    $.__views.__alloyId794.add($.__views.__alloyId795);
    $.__views.__alloyId796 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId796"
    });
    $.__views.__alloyId795.add($.__views.__alloyId796);
    $.__views.__alloyId797 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId797"
    });
    $.__views.__alloyId794.add($.__views.__alloyId797);
    $.__views.__alloyId798 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId798"
    });
    $.__views.__alloyId797.add($.__views.__alloyId798);
    $.__views.__alloyId799 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId799"
    });
    $.__views.__alloyId797.add($.__views.__alloyId799);
    $.__views.__alloyId800 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId800"
    });
    $.__views.__alloyId794.add($.__views.__alloyId800);
    $.__views.__alloyId801 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId801"
    });
    $.__views.__alloyId800.add($.__views.__alloyId801);
    $.__views.__alloyId802 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId802"
    });
    $.__views.__alloyId800.add($.__views.__alloyId802);
    $.__views.__alloyId803 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId803"
    });
    $.__views.__alloyId794.add($.__views.__alloyId803);
    $.__views.__alloyId804 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId804"
    });
    $.__views.__alloyId803.add($.__views.__alloyId804);
    $.__views.__alloyId805 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId805"
    });
    $.__views.__alloyId803.add($.__views.__alloyId805);
    $.__views.__alloyId806 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId806"
    });
    $.__views.view4.add($.__views.__alloyId806);
    $.__views.__alloyId807 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId807"
    });
    $.__views.__alloyId806.add($.__views.__alloyId807);
    $.__views.__alloyId808 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId808"
    });
    $.__views.__alloyId807.add($.__views.__alloyId808);
    $.__views.__alloyId809 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId809"
    });
    $.__views.__alloyId806.add($.__views.__alloyId809);
    $.__views.__alloyId810 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId810"
    });
    $.__views.__alloyId809.add($.__views.__alloyId810);
    $.__views.__alloyId811 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId811"
    });
    $.__views.__alloyId809.add($.__views.__alloyId811);
    $.__views.__alloyId812 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId812"
    });
    $.__views.__alloyId806.add($.__views.__alloyId812);
    $.__views.__alloyId813 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId813"
    });
    $.__views.__alloyId812.add($.__views.__alloyId813);
    $.__views.__alloyId814 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId814"
    });
    $.__views.__alloyId812.add($.__views.__alloyId814);
    $.__views.__alloyId815 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId815"
    });
    $.__views.__alloyId806.add($.__views.__alloyId815);
    $.__views.__alloyId816 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId816"
    });
    $.__views.__alloyId815.add($.__views.__alloyId816);
    $.__views.__alloyId817 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId817"
    });
    $.__views.__alloyId815.add($.__views.__alloyId817);
    $.__views.__alloyId818 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId818"
    });
    $.__views.__alloyId806.add($.__views.__alloyId818);
    $.__views.__alloyId819 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId819"
    });
    $.__views.__alloyId818.add($.__views.__alloyId819);
    $.__views.__alloyId820 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId820"
    });
    $.__views.__alloyId818.add($.__views.__alloyId820);
    $.__views.__alloyId821 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId821"
    });
    $.__views.view4.add($.__views.__alloyId821);
    $.__views.__alloyId822 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId822"
    });
    $.__views.__alloyId821.add($.__views.__alloyId822);
    $.__views.__alloyId823 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId823"
    });
    $.__views.__alloyId822.add($.__views.__alloyId823);
    $.__views.__alloyId824 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId824"
    });
    $.__views.__alloyId821.add($.__views.__alloyId824);
    $.__views.__alloyId825 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId825"
    });
    $.__views.__alloyId824.add($.__views.__alloyId825);
    $.__views.__alloyId826 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId826"
    });
    $.__views.__alloyId824.add($.__views.__alloyId826);
    $.__views.__alloyId827 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId827"
    });
    $.__views.__alloyId821.add($.__views.__alloyId827);
    $.__views.__alloyId828 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId828"
    });
    $.__views.__alloyId827.add($.__views.__alloyId828);
    $.__views.__alloyId829 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId829"
    });
    $.__views.__alloyId827.add($.__views.__alloyId829);
    $.__views.__alloyId830 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId830"
    });
    $.__views.prepaid.add($.__views.__alloyId830);
    subscribe ? $.__views.__alloyId830.addEventListener("click", subscribe) : __defers["$.__views.__alloyId830!click!subscribe"] = true;
    $.__views.__alloyId831 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId831"
    });
    $.__views.__alloyId830.add($.__views.__alloyId831);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    var rate;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId679!click!back"] && $.__views.__alloyId679.addEventListener("click", back);
    __defers["$.__views.rateLabel!click!showPicker"] && $.__views.rateLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId680!click!showPicker"] && $.__views.__alloyId680.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!rate"] && $.__views.picker.addEventListener("change", rate);
    __defers["$.__views.__alloyId830!click!subscribe"] && $.__views.__alloyId830.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;