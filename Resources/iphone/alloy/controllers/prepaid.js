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
    $.__views.__alloyId890 = Alloy.createController("_header", {
        id: "__alloyId890",
        __parentSymbol: $.__views.prepaid
    });
    $.__views.__alloyId890.setParent($.__views.prepaid);
    $.__views.__alloyId891 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId891"
    });
    $.__views.prepaid.add($.__views.__alloyId891);
    $.__views.__alloyId892 = Ti.UI.createLabel({
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId892"
    });
    $.__views.__alloyId891.add($.__views.__alloyId892);
    $.__views.__alloyId893 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId893"
    });
    $.__views.__alloyId891.add($.__views.__alloyId893);
    back ? $.__views.__alloyId893.addEventListener("click", back) : __defers["$.__views.__alloyId893!click!back"] = true;
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
    $.__views.__alloyId894 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId894"
    });
    $.__views.pickerContentView.add($.__views.__alloyId894);
    showPicker ? $.__views.__alloyId894.addEventListener("click", showPicker) : __defers["$.__views.__alloyId894!click!showPicker"] = true;
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
    var __alloyId895 = [];
    $.__views.__alloyId896 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId896"
    });
    __alloyId895.push($.__views.__alloyId896);
    $.__views.__alloyId897 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId897"
    });
    __alloyId895.push($.__views.__alloyId897);
    $.__views.__alloyId898 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId898"
    });
    __alloyId895.push($.__views.__alloyId898);
    $.__views.__alloyId899 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId899"
    });
    __alloyId895.push($.__views.__alloyId899);
    $.__views.picker.add(__alloyId895);
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
    $.__views.__alloyId900 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "red",
        id: "__alloyId900"
    });
    $.__views.view1.add($.__views.__alloyId900);
    $.__views.__alloyId901 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId901"
    });
    $.__views.__alloyId900.add($.__views.__alloyId901);
    $.__views.__alloyId902 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId902"
    });
    $.__views.__alloyId901.add($.__views.__alloyId902);
    $.__views.__alloyId903 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId903"
    });
    $.__views.__alloyId900.add($.__views.__alloyId903);
    $.__views.__alloyId904 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId904"
    });
    $.__views.__alloyId903.add($.__views.__alloyId904);
    $.__views.__alloyId905 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId905"
    });
    $.__views.__alloyId903.add($.__views.__alloyId905);
    $.__views.__alloyId906 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId906"
    });
    $.__views.__alloyId900.add($.__views.__alloyId906);
    $.__views.__alloyId907 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId907"
    });
    $.__views.__alloyId906.add($.__views.__alloyId907);
    $.__views.__alloyId908 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId908"
    });
    $.__views.__alloyId906.add($.__views.__alloyId908);
    $.__views.__alloyId909 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId909"
    });
    $.__views.__alloyId900.add($.__views.__alloyId909);
    $.__views.__alloyId910 = Ti.UI.createLabel({
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId910"
    });
    $.__views.__alloyId909.add($.__views.__alloyId910);
    $.__views.__alloyId911 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId911"
    });
    $.__views.__alloyId909.add($.__views.__alloyId911);
    $.__views.__alloyId912 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId912"
    });
    $.__views.view1.add($.__views.__alloyId912);
    $.__views.__alloyId913 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId913"
    });
    $.__views.__alloyId912.add($.__views.__alloyId913);
    $.__views.__alloyId914 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId914"
    });
    $.__views.__alloyId913.add($.__views.__alloyId914);
    $.__views.__alloyId915 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId915"
    });
    $.__views.__alloyId912.add($.__views.__alloyId915);
    $.__views.__alloyId916 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId916"
    });
    $.__views.__alloyId915.add($.__views.__alloyId916);
    $.__views.__alloyId917 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId917"
    });
    $.__views.__alloyId915.add($.__views.__alloyId917);
    $.__views.__alloyId918 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId918"
    });
    $.__views.__alloyId912.add($.__views.__alloyId918);
    $.__views.__alloyId919 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId919"
    });
    $.__views.__alloyId918.add($.__views.__alloyId919);
    $.__views.__alloyId920 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId920"
    });
    $.__views.__alloyId918.add($.__views.__alloyId920);
    $.__views.__alloyId921 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId921"
    });
    $.__views.__alloyId912.add($.__views.__alloyId921);
    $.__views.__alloyId922 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId922"
    });
    $.__views.__alloyId921.add($.__views.__alloyId922);
    $.__views.__alloyId923 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId923"
    });
    $.__views.__alloyId921.add($.__views.__alloyId923);
    $.__views.__alloyId924 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId924"
    });
    $.__views.__alloyId912.add($.__views.__alloyId924);
    $.__views.__alloyId925 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId925"
    });
    $.__views.__alloyId924.add($.__views.__alloyId925);
    $.__views.__alloyId926 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId926"
    });
    $.__views.__alloyId924.add($.__views.__alloyId926);
    $.__views.__alloyId927 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId927"
    });
    $.__views.view1.add($.__views.__alloyId927);
    $.__views.__alloyId928 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId928"
    });
    $.__views.__alloyId927.add($.__views.__alloyId928);
    $.__views.__alloyId929 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId929"
    });
    $.__views.__alloyId928.add($.__views.__alloyId929);
    $.__views.__alloyId930 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId930"
    });
    $.__views.__alloyId927.add($.__views.__alloyId930);
    $.__views.__alloyId931 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId931"
    });
    $.__views.__alloyId930.add($.__views.__alloyId931);
    $.__views.__alloyId932 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId932"
    });
    $.__views.__alloyId930.add($.__views.__alloyId932);
    $.__views.__alloyId933 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId933"
    });
    $.__views.__alloyId927.add($.__views.__alloyId933);
    $.__views.__alloyId934 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId934"
    });
    $.__views.__alloyId933.add($.__views.__alloyId934);
    $.__views.__alloyId935 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId935"
    });
    $.__views.__alloyId933.add($.__views.__alloyId935);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view2);
    $.__views.__alloyId936 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "blue",
        id: "__alloyId936"
    });
    $.__views.view2.add($.__views.__alloyId936);
    $.__views.__alloyId937 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId937"
    });
    $.__views.__alloyId936.add($.__views.__alloyId937);
    $.__views.__alloyId938 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId938"
    });
    $.__views.__alloyId937.add($.__views.__alloyId938);
    $.__views.__alloyId939 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId939"
    });
    $.__views.__alloyId936.add($.__views.__alloyId939);
    $.__views.__alloyId940 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId940"
    });
    $.__views.__alloyId939.add($.__views.__alloyId940);
    $.__views.__alloyId941 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId941"
    });
    $.__views.__alloyId939.add($.__views.__alloyId941);
    $.__views.__alloyId942 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId942"
    });
    $.__views.__alloyId936.add($.__views.__alloyId942);
    $.__views.__alloyId943 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId943"
    });
    $.__views.__alloyId942.add($.__views.__alloyId943);
    $.__views.__alloyId944 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId944"
    });
    $.__views.__alloyId942.add($.__views.__alloyId944);
    $.__views.__alloyId945 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId945"
    });
    $.__views.__alloyId936.add($.__views.__alloyId945);
    $.__views.__alloyId946 = Ti.UI.createLabel({
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId946"
    });
    $.__views.__alloyId945.add($.__views.__alloyId946);
    $.__views.__alloyId947 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId947"
    });
    $.__views.__alloyId945.add($.__views.__alloyId947);
    $.__views.__alloyId948 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId948"
    });
    $.__views.view2.add($.__views.__alloyId948);
    $.__views.__alloyId949 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId949"
    });
    $.__views.__alloyId948.add($.__views.__alloyId949);
    $.__views.__alloyId950 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId950"
    });
    $.__views.__alloyId949.add($.__views.__alloyId950);
    $.__views.__alloyId951 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId951"
    });
    $.__views.__alloyId948.add($.__views.__alloyId951);
    $.__views.__alloyId952 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId952"
    });
    $.__views.__alloyId951.add($.__views.__alloyId952);
    $.__views.__alloyId953 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId953"
    });
    $.__views.__alloyId951.add($.__views.__alloyId953);
    $.__views.__alloyId954 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId954"
    });
    $.__views.__alloyId948.add($.__views.__alloyId954);
    $.__views.__alloyId955 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId955"
    });
    $.__views.__alloyId954.add($.__views.__alloyId955);
    $.__views.__alloyId956 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId956"
    });
    $.__views.__alloyId954.add($.__views.__alloyId956);
    $.__views.__alloyId957 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId957"
    });
    $.__views.__alloyId948.add($.__views.__alloyId957);
    $.__views.__alloyId958 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId958"
    });
    $.__views.__alloyId957.add($.__views.__alloyId958);
    $.__views.__alloyId959 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId959"
    });
    $.__views.__alloyId957.add($.__views.__alloyId959);
    $.__views.__alloyId960 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId960"
    });
    $.__views.__alloyId948.add($.__views.__alloyId960);
    $.__views.__alloyId961 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId961"
    });
    $.__views.__alloyId960.add($.__views.__alloyId961);
    $.__views.__alloyId962 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId962"
    });
    $.__views.__alloyId960.add($.__views.__alloyId962);
    $.__views.__alloyId963 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId963"
    });
    $.__views.view2.add($.__views.__alloyId963);
    $.__views.__alloyId964 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId964"
    });
    $.__views.__alloyId963.add($.__views.__alloyId964);
    $.__views.__alloyId965 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId965"
    });
    $.__views.__alloyId964.add($.__views.__alloyId965);
    $.__views.__alloyId966 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId966"
    });
    $.__views.__alloyId963.add($.__views.__alloyId966);
    $.__views.__alloyId967 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId967"
    });
    $.__views.__alloyId966.add($.__views.__alloyId967);
    $.__views.__alloyId968 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId968"
    });
    $.__views.__alloyId966.add($.__views.__alloyId968);
    $.__views.__alloyId969 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId969"
    });
    $.__views.__alloyId963.add($.__views.__alloyId969);
    $.__views.__alloyId970 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId970"
    });
    $.__views.__alloyId969.add($.__views.__alloyId970);
    $.__views.__alloyId971 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId971"
    });
    $.__views.__alloyId969.add($.__views.__alloyId971);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view3);
    $.__views.__alloyId972 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "yellow",
        id: "__alloyId972"
    });
    $.__views.view3.add($.__views.__alloyId972);
    $.__views.__alloyId973 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId973"
    });
    $.__views.__alloyId972.add($.__views.__alloyId973);
    $.__views.__alloyId974 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId974"
    });
    $.__views.__alloyId973.add($.__views.__alloyId974);
    $.__views.__alloyId975 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId975"
    });
    $.__views.__alloyId972.add($.__views.__alloyId975);
    $.__views.__alloyId976 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId976"
    });
    $.__views.__alloyId975.add($.__views.__alloyId976);
    $.__views.__alloyId977 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId977"
    });
    $.__views.__alloyId975.add($.__views.__alloyId977);
    $.__views.__alloyId978 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId978"
    });
    $.__views.__alloyId972.add($.__views.__alloyId978);
    $.__views.__alloyId979 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId979"
    });
    $.__views.__alloyId978.add($.__views.__alloyId979);
    $.__views.__alloyId980 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId980"
    });
    $.__views.__alloyId978.add($.__views.__alloyId980);
    $.__views.__alloyId981 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId981"
    });
    $.__views.__alloyId972.add($.__views.__alloyId981);
    $.__views.__alloyId982 = Ti.UI.createLabel({
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId982"
    });
    $.__views.__alloyId981.add($.__views.__alloyId982);
    $.__views.__alloyId983 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId983"
    });
    $.__views.__alloyId981.add($.__views.__alloyId983);
    $.__views.__alloyId984 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId984"
    });
    $.__views.view3.add($.__views.__alloyId984);
    $.__views.__alloyId985 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId985"
    });
    $.__views.__alloyId984.add($.__views.__alloyId985);
    $.__views.__alloyId986 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId986"
    });
    $.__views.__alloyId985.add($.__views.__alloyId986);
    $.__views.__alloyId987 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId987"
    });
    $.__views.__alloyId984.add($.__views.__alloyId987);
    $.__views.__alloyId988 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId988"
    });
    $.__views.__alloyId987.add($.__views.__alloyId988);
    $.__views.__alloyId989 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId989"
    });
    $.__views.__alloyId987.add($.__views.__alloyId989);
    $.__views.__alloyId990 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId990"
    });
    $.__views.__alloyId984.add($.__views.__alloyId990);
    $.__views.__alloyId991 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId991"
    });
    $.__views.__alloyId990.add($.__views.__alloyId991);
    $.__views.__alloyId992 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId992"
    });
    $.__views.__alloyId990.add($.__views.__alloyId992);
    $.__views.__alloyId993 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId993"
    });
    $.__views.__alloyId984.add($.__views.__alloyId993);
    $.__views.__alloyId994 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId994"
    });
    $.__views.__alloyId993.add($.__views.__alloyId994);
    $.__views.__alloyId995 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId995"
    });
    $.__views.__alloyId993.add($.__views.__alloyId995);
    $.__views.__alloyId996 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId996"
    });
    $.__views.__alloyId984.add($.__views.__alloyId996);
    $.__views.__alloyId997 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId997"
    });
    $.__views.__alloyId996.add($.__views.__alloyId997);
    $.__views.__alloyId998 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId998"
    });
    $.__views.__alloyId996.add($.__views.__alloyId998);
    $.__views.__alloyId999 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId999"
    });
    $.__views.view3.add($.__views.__alloyId999);
    $.__views.__alloyId1000 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1000"
    });
    $.__views.__alloyId999.add($.__views.__alloyId1000);
    $.__views.__alloyId1001 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1001"
    });
    $.__views.__alloyId1000.add($.__views.__alloyId1001);
    $.__views.__alloyId1002 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1002"
    });
    $.__views.__alloyId999.add($.__views.__alloyId1002);
    $.__views.__alloyId1003 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1003"
    });
    $.__views.__alloyId1002.add($.__views.__alloyId1003);
    $.__views.__alloyId1004 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1004"
    });
    $.__views.__alloyId1002.add($.__views.__alloyId1004);
    $.__views.__alloyId1005 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1005"
    });
    $.__views.__alloyId999.add($.__views.__alloyId1005);
    $.__views.__alloyId1006 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1006"
    });
    $.__views.__alloyId1005.add($.__views.__alloyId1006);
    $.__views.__alloyId1007 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1007"
    });
    $.__views.__alloyId1005.add($.__views.__alloyId1007);
    $.__views.view4 = Ti.UI.createView({
        id: "view4",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view4);
    $.__views.__alloyId1008 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "green",
        id: "__alloyId1008"
    });
    $.__views.view4.add($.__views.__alloyId1008);
    $.__views.__alloyId1009 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1009"
    });
    $.__views.__alloyId1008.add($.__views.__alloyId1009);
    $.__views.__alloyId1010 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1010"
    });
    $.__views.__alloyId1009.add($.__views.__alloyId1010);
    $.__views.__alloyId1011 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1011"
    });
    $.__views.__alloyId1008.add($.__views.__alloyId1011);
    $.__views.__alloyId1012 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1012"
    });
    $.__views.__alloyId1011.add($.__views.__alloyId1012);
    $.__views.__alloyId1013 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1013"
    });
    $.__views.__alloyId1011.add($.__views.__alloyId1013);
    $.__views.__alloyId1014 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1014"
    });
    $.__views.__alloyId1008.add($.__views.__alloyId1014);
    $.__views.__alloyId1015 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1015"
    });
    $.__views.__alloyId1014.add($.__views.__alloyId1015);
    $.__views.__alloyId1016 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1016"
    });
    $.__views.__alloyId1014.add($.__views.__alloyId1016);
    $.__views.__alloyId1017 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1017"
    });
    $.__views.__alloyId1008.add($.__views.__alloyId1017);
    $.__views.__alloyId1018 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1018"
    });
    $.__views.__alloyId1017.add($.__views.__alloyId1018);
    $.__views.__alloyId1019 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1019"
    });
    $.__views.__alloyId1017.add($.__views.__alloyId1019);
    $.__views.__alloyId1020 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1020"
    });
    $.__views.view4.add($.__views.__alloyId1020);
    $.__views.__alloyId1021 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1021"
    });
    $.__views.__alloyId1020.add($.__views.__alloyId1021);
    $.__views.__alloyId1022 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1022"
    });
    $.__views.__alloyId1021.add($.__views.__alloyId1022);
    $.__views.__alloyId1023 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1023"
    });
    $.__views.__alloyId1020.add($.__views.__alloyId1023);
    $.__views.__alloyId1024 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1024"
    });
    $.__views.__alloyId1023.add($.__views.__alloyId1024);
    $.__views.__alloyId1025 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1025"
    });
    $.__views.__alloyId1023.add($.__views.__alloyId1025);
    $.__views.__alloyId1026 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1026"
    });
    $.__views.__alloyId1020.add($.__views.__alloyId1026);
    $.__views.__alloyId1027 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1027"
    });
    $.__views.__alloyId1026.add($.__views.__alloyId1027);
    $.__views.__alloyId1028 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1028"
    });
    $.__views.__alloyId1026.add($.__views.__alloyId1028);
    $.__views.__alloyId1029 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1029"
    });
    $.__views.__alloyId1020.add($.__views.__alloyId1029);
    $.__views.__alloyId1030 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1030"
    });
    $.__views.__alloyId1029.add($.__views.__alloyId1030);
    $.__views.__alloyId1031 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1031"
    });
    $.__views.__alloyId1029.add($.__views.__alloyId1031);
    $.__views.__alloyId1032 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1032"
    });
    $.__views.__alloyId1020.add($.__views.__alloyId1032);
    $.__views.__alloyId1033 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1033"
    });
    $.__views.__alloyId1032.add($.__views.__alloyId1033);
    $.__views.__alloyId1034 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1034"
    });
    $.__views.__alloyId1032.add($.__views.__alloyId1034);
    $.__views.__alloyId1035 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1035"
    });
    $.__views.view4.add($.__views.__alloyId1035);
    $.__views.__alloyId1036 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1036"
    });
    $.__views.__alloyId1035.add($.__views.__alloyId1036);
    $.__views.__alloyId1037 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1037"
    });
    $.__views.__alloyId1036.add($.__views.__alloyId1037);
    $.__views.__alloyId1038 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1038"
    });
    $.__views.__alloyId1035.add($.__views.__alloyId1038);
    $.__views.__alloyId1039 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1039"
    });
    $.__views.__alloyId1038.add($.__views.__alloyId1039);
    $.__views.__alloyId1040 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1040"
    });
    $.__views.__alloyId1038.add($.__views.__alloyId1040);
    $.__views.__alloyId1041 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1041"
    });
    $.__views.__alloyId1035.add($.__views.__alloyId1041);
    $.__views.__alloyId1042 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1042"
    });
    $.__views.__alloyId1041.add($.__views.__alloyId1042);
    $.__views.__alloyId1043 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1043"
    });
    $.__views.__alloyId1041.add($.__views.__alloyId1043);
    $.__views.__alloyId1044 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1044"
    });
    $.__views.prepaid.add($.__views.__alloyId1044);
    subscribe ? $.__views.__alloyId1044.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1044!click!subscribe"] = true;
    $.__views.__alloyId1045 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1045"
    });
    $.__views.__alloyId1044.add($.__views.__alloyId1045);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    var rate;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId893!click!back"] && $.__views.__alloyId893.addEventListener("click", back);
    __defers["$.__views.rateLabel!click!showPicker"] && $.__views.rateLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId894!click!showPicker"] && $.__views.__alloyId894.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!rate"] && $.__views.picker.addEventListener("change", rate);
    __defers["$.__views.__alloyId1044!click!subscribe"] && $.__views.__alloyId1044.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;