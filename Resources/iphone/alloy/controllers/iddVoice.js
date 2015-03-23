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
        "prepaid" == Alloy.Globals.userPlan ? DRAWER.navigation("prepaidStatement", 1) : DRAWER.navigation("postpaidStatement", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "iddVoice";
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
    $.__views.iddVoice = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "iddVoice"
    });
    $.__views.iddVoice && $.addTopLevelView($.__views.iddVoice);
<<<<<<< HEAD
    $.__views.__alloyId896 = Alloy.createController("_header", {
        id: "__alloyId896",
        __parentSymbol: $.__views.iddVoice
    });
    $.__views.__alloyId896.setParent($.__views.iddVoice);
    $.__views.__alloyId897 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId897"
    });
    $.__views.iddVoice.add($.__views.__alloyId897);
    $.__views.__alloyId898 = Ti.UI.createLabel({
=======
    $.__views.__alloyId935 = Alloy.createController("_header", {
        id: "__alloyId935",
        __parentSymbol: $.__views.iddVoice
    });
    $.__views.__alloyId935.setParent($.__views.iddVoice);
    $.__views.__alloyId936 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId936"
    });
    $.__views.iddVoice.add($.__views.__alloyId936);
    $.__views.__alloyId937 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId898"
    });
    $.__views.__alloyId897.add($.__views.__alloyId898);
    $.__views.__alloyId899 = Ti.UI.createImageView({
=======
        id: "__alloyId937"
    });
    $.__views.__alloyId936.add($.__views.__alloyId937);
    $.__views.__alloyId938 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId899"
    });
    $.__views.__alloyId897.add($.__views.__alloyId899);
    back ? $.__views.__alloyId899.addEventListener("click", back) : __defers["$.__views.__alloyId899!click!back"] = true;
    $.__views.__alloyId900 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId900"
    });
    $.__views.iddVoice.add($.__views.__alloyId900);
    $.__views.__alloyId901 = Ti.UI.createLabel({
=======
        id: "__alloyId938"
    });
    $.__views.__alloyId936.add($.__views.__alloyId938);
    back ? $.__views.__alloyId938.addEventListener("click", back) : __defers["$.__views.__alloyId938!click!back"] = true;
    $.__views.__alloyId939 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId939"
    });
    $.__views.iddVoice.add($.__views.__alloyId939);
    $.__views.__alloyId940 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "IDD Voice Calls",
        textAlign: "center",
        color: "black",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId901"
    });
    $.__views.__alloyId900.add($.__views.__alloyId901);
    var __alloyId902 = [];
    $.__views.__alloyId903 = Ti.UI.createTableViewSection({
        id: "__alloyId903"
    });
    __alloyId902.push($.__views.__alloyId903);
    $.__views.__alloyId904 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId940"
    });
    $.__views.__alloyId939.add($.__views.__alloyId940);
    var __alloyId941 = [];
    $.__views.__alloyId942 = Ti.UI.createTableViewSection({
        id: "__alloyId942"
    });
    __alloyId941.push($.__views.__alloyId942);
    $.__views.__alloyId943 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
        id: "__alloyId904"
    });
    $.__views.__alloyId903.add($.__views.__alloyId904);
    $.__views.__alloyId905 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId905"
    });
    $.__views.__alloyId904.add($.__views.__alloyId905);
    $.__views.__alloyId906 = Ti.UI.createLabel({
=======
        id: "__alloyId943"
    });
    $.__views.__alloyId942.add($.__views.__alloyId943);
    $.__views.__alloyId944 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId944"
    });
    $.__views.__alloyId943.add($.__views.__alloyId944);
    $.__views.__alloyId945 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "01/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId906"
    });
    $.__views.__alloyId905.add($.__views.__alloyId906);
    $.__views.__alloyId907 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId907"
    });
    $.__views.__alloyId904.add($.__views.__alloyId907);
    $.__views.__alloyId908 = Ti.UI.createLabel({
=======
        id: "__alloyId945"
    });
    $.__views.__alloyId944.add($.__views.__alloyId945);
    $.__views.__alloyId946 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId946"
    });
    $.__views.__alloyId943.add($.__views.__alloyId946);
    $.__views.__alloyId947 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId908"
    });
    $.__views.__alloyId907.add($.__views.__alloyId908);
    $.__views.__alloyId909 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId909"
    });
    $.__views.__alloyId904.add($.__views.__alloyId909);
    $.__views.__alloyId910 = Ti.UI.createLabel({
=======
        id: "__alloyId947"
    });
    $.__views.__alloyId946.add($.__views.__alloyId947);
    $.__views.__alloyId948 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId948"
    });
    $.__views.__alloyId943.add($.__views.__alloyId948);
    $.__views.__alloyId949 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId910"
    });
    $.__views.__alloyId909.add($.__views.__alloyId910);
    $.__views.__alloyId911 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId949"
    });
    $.__views.__alloyId948.add($.__views.__alloyId949);
    $.__views.__alloyId950 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
        id: "__alloyId911"
    });
    $.__views.__alloyId903.add($.__views.__alloyId911);
    $.__views.__alloyId912 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId912"
    });
    $.__views.__alloyId911.add($.__views.__alloyId912);
    $.__views.__alloyId913 = Ti.UI.createLabel({
=======
        id: "__alloyId950"
    });
    $.__views.__alloyId942.add($.__views.__alloyId950);
    $.__views.__alloyId951 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId951"
    });
    $.__views.__alloyId950.add($.__views.__alloyId951);
    $.__views.__alloyId952 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "02/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId913"
    });
    $.__views.__alloyId912.add($.__views.__alloyId913);
    $.__views.__alloyId914 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId914"
    });
    $.__views.__alloyId911.add($.__views.__alloyId914);
    $.__views.__alloyId915 = Ti.UI.createLabel({
=======
        id: "__alloyId952"
    });
    $.__views.__alloyId951.add($.__views.__alloyId952);
    $.__views.__alloyId953 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId953"
    });
    $.__views.__alloyId950.add($.__views.__alloyId953);
    $.__views.__alloyId954 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId915"
    });
    $.__views.__alloyId914.add($.__views.__alloyId915);
    $.__views.__alloyId916 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId916"
    });
    $.__views.__alloyId911.add($.__views.__alloyId916);
    $.__views.__alloyId917 = Ti.UI.createLabel({
=======
        id: "__alloyId954"
    });
    $.__views.__alloyId953.add($.__views.__alloyId954);
    $.__views.__alloyId955 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId955"
    });
    $.__views.__alloyId950.add($.__views.__alloyId955);
    $.__views.__alloyId956 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId917"
    });
    $.__views.__alloyId916.add($.__views.__alloyId917);
    $.__views.__alloyId918 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId956"
    });
    $.__views.__alloyId955.add($.__views.__alloyId956);
    $.__views.__alloyId957 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
        id: "__alloyId918"
    });
    $.__views.__alloyId903.add($.__views.__alloyId918);
    $.__views.__alloyId919 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId919"
    });
    $.__views.__alloyId918.add($.__views.__alloyId919);
    $.__views.__alloyId920 = Ti.UI.createLabel({
=======
        id: "__alloyId957"
    });
    $.__views.__alloyId942.add($.__views.__alloyId957);
    $.__views.__alloyId958 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId958"
    });
    $.__views.__alloyId957.add($.__views.__alloyId958);
    $.__views.__alloyId959 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "03/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId920"
    });
    $.__views.__alloyId919.add($.__views.__alloyId920);
    $.__views.__alloyId921 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId921"
    });
    $.__views.__alloyId918.add($.__views.__alloyId921);
    $.__views.__alloyId922 = Ti.UI.createLabel({
=======
        id: "__alloyId959"
    });
    $.__views.__alloyId958.add($.__views.__alloyId959);
    $.__views.__alloyId960 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId960"
    });
    $.__views.__alloyId957.add($.__views.__alloyId960);
    $.__views.__alloyId961 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId922"
    });
    $.__views.__alloyId921.add($.__views.__alloyId922);
    $.__views.__alloyId923 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId923"
    });
    $.__views.__alloyId918.add($.__views.__alloyId923);
    $.__views.__alloyId924 = Ti.UI.createLabel({
=======
        id: "__alloyId961"
    });
    $.__views.__alloyId960.add($.__views.__alloyId961);
    $.__views.__alloyId962 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId962"
    });
    $.__views.__alloyId957.add($.__views.__alloyId962);
    $.__views.__alloyId963 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId924"
    });
    $.__views.__alloyId923.add($.__views.__alloyId924);
    $.__views.__alloyId925 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId963"
    });
    $.__views.__alloyId962.add($.__views.__alloyId963);
    $.__views.__alloyId964 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
        id: "__alloyId925"
    });
    $.__views.__alloyId903.add($.__views.__alloyId925);
    $.__views.__alloyId926 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId926"
    });
    $.__views.__alloyId925.add($.__views.__alloyId926);
    $.__views.__alloyId927 = Ti.UI.createLabel({
=======
        id: "__alloyId964"
    });
    $.__views.__alloyId942.add($.__views.__alloyId964);
    $.__views.__alloyId965 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId965"
    });
    $.__views.__alloyId964.add($.__views.__alloyId965);
    $.__views.__alloyId966 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "04/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId927"
    });
    $.__views.__alloyId926.add($.__views.__alloyId927);
    $.__views.__alloyId928 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId928"
    });
    $.__views.__alloyId925.add($.__views.__alloyId928);
    $.__views.__alloyId929 = Ti.UI.createLabel({
=======
        id: "__alloyId966"
    });
    $.__views.__alloyId965.add($.__views.__alloyId966);
    $.__views.__alloyId967 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId967"
    });
    $.__views.__alloyId964.add($.__views.__alloyId967);
    $.__views.__alloyId968 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId929"
    });
    $.__views.__alloyId928.add($.__views.__alloyId929);
    $.__views.__alloyId930 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId930"
    });
    $.__views.__alloyId925.add($.__views.__alloyId930);
    $.__views.__alloyId931 = Ti.UI.createLabel({
=======
        id: "__alloyId968"
    });
    $.__views.__alloyId967.add($.__views.__alloyId968);
    $.__views.__alloyId969 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId969"
    });
    $.__views.__alloyId964.add($.__views.__alloyId969);
    $.__views.__alloyId970 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId931"
    });
    $.__views.__alloyId930.add($.__views.__alloyId931);
    $.__views.__alloyId932 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId970"
    });
    $.__views.__alloyId969.add($.__views.__alloyId970);
    $.__views.__alloyId971 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
        id: "__alloyId932"
    });
    $.__views.__alloyId903.add($.__views.__alloyId932);
    $.__views.__alloyId933 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId933"
    });
    $.__views.__alloyId932.add($.__views.__alloyId933);
    $.__views.__alloyId934 = Ti.UI.createLabel({
=======
        id: "__alloyId971"
    });
    $.__views.__alloyId942.add($.__views.__alloyId971);
    $.__views.__alloyId972 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId972"
    });
    $.__views.__alloyId971.add($.__views.__alloyId972);
    $.__views.__alloyId973 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "05/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId934"
    });
    $.__views.__alloyId933.add($.__views.__alloyId934);
    $.__views.__alloyId935 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId935"
    });
    $.__views.__alloyId932.add($.__views.__alloyId935);
    $.__views.__alloyId936 = Ti.UI.createLabel({
=======
        id: "__alloyId973"
    });
    $.__views.__alloyId972.add($.__views.__alloyId973);
    $.__views.__alloyId974 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId974"
    });
    $.__views.__alloyId971.add($.__views.__alloyId974);
    $.__views.__alloyId975 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId936"
    });
    $.__views.__alloyId935.add($.__views.__alloyId936);
    $.__views.__alloyId937 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId937"
    });
    $.__views.__alloyId932.add($.__views.__alloyId937);
    $.__views.__alloyId938 = Ti.UI.createLabel({
=======
        id: "__alloyId975"
    });
    $.__views.__alloyId974.add($.__views.__alloyId975);
    $.__views.__alloyId976 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId976"
    });
    $.__views.__alloyId971.add($.__views.__alloyId976);
    $.__views.__alloyId977 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId938"
    });
    $.__views.__alloyId937.add($.__views.__alloyId938);
    $.__views.__alloyId939 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId977"
    });
    $.__views.__alloyId976.add($.__views.__alloyId977);
    $.__views.__alloyId978 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
        id: "__alloyId939"
    });
    $.__views.__alloyId903.add($.__views.__alloyId939);
    $.__views.__alloyId940 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId940"
    });
    $.__views.__alloyId939.add($.__views.__alloyId940);
    $.__views.__alloyId941 = Ti.UI.createLabel({
=======
        id: "__alloyId978"
    });
    $.__views.__alloyId942.add($.__views.__alloyId978);
    $.__views.__alloyId979 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId979"
    });
    $.__views.__alloyId978.add($.__views.__alloyId979);
    $.__views.__alloyId980 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "06/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId941"
    });
    $.__views.__alloyId940.add($.__views.__alloyId941);
    $.__views.__alloyId942 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId942"
    });
    $.__views.__alloyId939.add($.__views.__alloyId942);
    $.__views.__alloyId943 = Ti.UI.createLabel({
=======
        id: "__alloyId980"
    });
    $.__views.__alloyId979.add($.__views.__alloyId980);
    $.__views.__alloyId981 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId981"
    });
    $.__views.__alloyId978.add($.__views.__alloyId981);
    $.__views.__alloyId982 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId943"
    });
    $.__views.__alloyId942.add($.__views.__alloyId943);
    $.__views.__alloyId944 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId944"
    });
    $.__views.__alloyId939.add($.__views.__alloyId944);
    $.__views.__alloyId945 = Ti.UI.createLabel({
=======
        id: "__alloyId982"
    });
    $.__views.__alloyId981.add($.__views.__alloyId982);
    $.__views.__alloyId983 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId983"
    });
    $.__views.__alloyId978.add($.__views.__alloyId983);
    $.__views.__alloyId984 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId945"
    });
    $.__views.__alloyId944.add($.__views.__alloyId945);
    $.__views.__alloyId946 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId984"
    });
    $.__views.__alloyId983.add($.__views.__alloyId984);
    $.__views.__alloyId985 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
        id: "__alloyId946"
    });
    $.__views.__alloyId903.add($.__views.__alloyId946);
    $.__views.__alloyId947 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId947"
    });
    $.__views.__alloyId946.add($.__views.__alloyId947);
    $.__views.__alloyId948 = Ti.UI.createLabel({
=======
        id: "__alloyId985"
    });
    $.__views.__alloyId942.add($.__views.__alloyId985);
    $.__views.__alloyId986 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId986"
    });
    $.__views.__alloyId985.add($.__views.__alloyId986);
    $.__views.__alloyId987 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "07/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId948"
    });
    $.__views.__alloyId947.add($.__views.__alloyId948);
    $.__views.__alloyId949 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId949"
    });
    $.__views.__alloyId946.add($.__views.__alloyId949);
    $.__views.__alloyId950 = Ti.UI.createLabel({
=======
        id: "__alloyId987"
    });
    $.__views.__alloyId986.add($.__views.__alloyId987);
    $.__views.__alloyId988 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId988"
    });
    $.__views.__alloyId985.add($.__views.__alloyId988);
    $.__views.__alloyId989 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId950"
    });
    $.__views.__alloyId949.add($.__views.__alloyId950);
    $.__views.__alloyId951 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId951"
    });
    $.__views.__alloyId946.add($.__views.__alloyId951);
    $.__views.__alloyId952 = Ti.UI.createLabel({
=======
        id: "__alloyId989"
    });
    $.__views.__alloyId988.add($.__views.__alloyId989);
    $.__views.__alloyId990 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId990"
    });
    $.__views.__alloyId985.add($.__views.__alloyId990);
    $.__views.__alloyId991 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId952"
    });
    $.__views.__alloyId951.add($.__views.__alloyId952);
    $.__views.__alloyId953 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId991"
    });
    $.__views.__alloyId990.add($.__views.__alloyId991);
    $.__views.__alloyId992 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
        id: "__alloyId953"
    });
    $.__views.__alloyId903.add($.__views.__alloyId953);
    $.__views.__alloyId954 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId954"
    });
    $.__views.__alloyId953.add($.__views.__alloyId954);
    $.__views.__alloyId955 = Ti.UI.createLabel({
=======
        id: "__alloyId992"
    });
    $.__views.__alloyId942.add($.__views.__alloyId992);
    $.__views.__alloyId993 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId993"
    });
    $.__views.__alloyId992.add($.__views.__alloyId993);
    $.__views.__alloyId994 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "08/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId955"
    });
    $.__views.__alloyId954.add($.__views.__alloyId955);
    $.__views.__alloyId956 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId956"
    });
    $.__views.__alloyId953.add($.__views.__alloyId956);
    $.__views.__alloyId957 = Ti.UI.createLabel({
=======
        id: "__alloyId994"
    });
    $.__views.__alloyId993.add($.__views.__alloyId994);
    $.__views.__alloyId995 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId995"
    });
    $.__views.__alloyId992.add($.__views.__alloyId995);
    $.__views.__alloyId996 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId957"
    });
    $.__views.__alloyId956.add($.__views.__alloyId957);
    $.__views.__alloyId958 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId958"
    });
    $.__views.__alloyId953.add($.__views.__alloyId958);
    $.__views.__alloyId959 = Ti.UI.createLabel({
=======
        id: "__alloyId996"
    });
    $.__views.__alloyId995.add($.__views.__alloyId996);
    $.__views.__alloyId997 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId997"
    });
    $.__views.__alloyId992.add($.__views.__alloyId997);
    $.__views.__alloyId998 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId959"
    });
    $.__views.__alloyId958.add($.__views.__alloyId959);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId902,
=======
        id: "__alloyId998"
    });
    $.__views.__alloyId997.add($.__views.__alloyId998);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId941,
>>>>>>> origin/master
        id: "table",
        scrollable: "true"
    });
    $.__views.iddVoice.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
<<<<<<< HEAD
    __defers["$.__views.__alloyId899!click!back"] && $.__views.__alloyId899.addEventListener("click", back);
=======
    __defers["$.__views.__alloyId938!click!back"] && $.__views.__alloyId938.addEventListener("click", back);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;