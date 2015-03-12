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
    this.__controllerPath = "contact3";
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
        backgroundImage: "/images/BG_Large.jpg"
    });
    $.__views.scrollView && $.addTopLevelView($.__views.scrollView);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        width: "90%",
        color: "#000000",
        font: {
            fontSize: "14dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "1.	The Account Holder must be non-Muslim, and above the age of 18 Years.",
        top: "8",
        id: "__alloyId22"
    });
    $.__views.scrollView.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        width: "90%",
        color: "#000000",
        font: {
            fontSize: "14dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "2.	The Account Holder agrees to be bound by the provisions of the Act (“the Racing (Totalisator Board) Act 1961”), the Totalisator Agency Scheme 1961 and the Rules laid down by the Lembaga Totalisator Malaysia pursuant to the authority of and for the purposes provided by Section 14(e) of the Act and any subsequent amendments thereto.",
        top: "8",
        id: "__alloyId23"
    });
    $.__views.scrollView.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        width: "90%",
        color: "#000000",
        font: {
            fontSize: "14dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "3.	The Account Holder shall access and use the EQ Link Account in accordance with these Terms and Conditions of use of the EQ Link, the guide provided by EQ Sport containing information on the EQ Link and access to the EQ Link, the instructions of EQ Sport issued from time to time (and all amendments, revisions and supplements thereto). The Account Holder shall be deemed to be bound by these Terms and Conditions upon the opening and maintenance of a EQ Link Account with EQ Sport.",
        top: "8",
        id: "__alloyId24"
    });
    $.__views.scrollView.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        width: "90%",
        color: "#000000",
        font: {
            fontSize: "14dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "4.	The above terms and conditions form an integral part of the Terms and Conditions of use of the EQ Link, issued by EQ Sport from time to time. The Terms and Conditions shall be governed by and construed in accordance with the laws of Malaysia.",
        top: "8",
        id: "__alloyId25"
    });
    $.__views.scrollView.add($.__views.__alloyId25);
    exports.destroy = function() {};
    _.extend($, $.__views);
    "android" == Ti.Platform.osname && ($.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;