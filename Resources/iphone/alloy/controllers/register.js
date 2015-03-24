function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function submit() {
        console.log("submit");
    }
    function back() {
        DRAWER.navigation("home", 2);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "register";
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
    $.__views.register = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "register"
    });
    $.__views.register && $.addTopLevelView($.__views.register);
<<<<<<< HEAD
    $.__views.__alloyId1979 = Alloy.createController("_header", {
        id: "__alloyId1979",
        __parentSymbol: $.__views.register
    });
    $.__views.__alloyId1979.setParent($.__views.register);
    $.__views.__alloyId1980 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1980"
    });
    $.__views.register.add($.__views.__alloyId1980);
    $.__views.__alloyId1981 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2206 = Alloy.createController("_header", {
        id: "__alloyId2206",
        __parentSymbol: $.__views.register
    });
    $.__views.__alloyId2206.setParent($.__views.register);
    $.__views.__alloyId2207 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2207"
    });
    $.__views.register.add($.__views.__alloyId2207);
    $.__views.__alloyId2208 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1979 = Alloy.createController("_header", {
        id: "__alloyId1979",
        __parentSymbol: $.__views.register
    });
    $.__views.__alloyId1979.setParent($.__views.register);
    $.__views.__alloyId1980 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1980"
    });
    $.__views.register.add($.__views.__alloyId1980);
    $.__views.__alloyId1981 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "New User Registration",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1981"
    });
    $.__views.__alloyId1980.add($.__views.__alloyId1981);
=======
<<<<<<< HEAD
        id: "__alloyId2208"
    });
    $.__views.__alloyId2207.add($.__views.__alloyId2208);
=======
        id: "__alloyId1981"
    });
    $.__views.__alloyId1980.add($.__views.__alloyId1981);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%",
        backgroundColor: "white"
    });
    $.__views.register.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId1982 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2209 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1982 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "1. Click on the New User Registration link.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        top: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2209"
    });
    $.__views.scrollView.add($.__views.__alloyId2209);
    $.__views.__alloyId2210 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1982"
    });
    $.__views.scrollView.add($.__views.__alloyId1982);
    $.__views.__alloyId1983 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "2. Key in your XinXun mobile number.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
<<<<<<< HEAD
        id: "__alloyId1983"
    });
    $.__views.scrollView.add($.__views.__alloyId1983);
    $.__views.__alloyId1984 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2210"
    });
    $.__views.scrollView.add($.__views.__alloyId2210);
    $.__views.__alloyId2211 = Ti.UI.createLabel({
=======
        id: "__alloyId1983"
    });
    $.__views.scrollView.add($.__views.__alloyId1983);
    $.__views.__alloyId1984 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "3. You will receive an activation code via SMS to your XinXun mobile number.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2211"
    });
    $.__views.scrollView.add($.__views.__alloyId2211);
    $.__views.__alloyId2212 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1984"
    });
    $.__views.scrollView.add($.__views.__alloyId1984);
    $.__views.__alloyId1985 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "4. Upon receiving your activation code via SMS, key in the code to verify and register your Self Care account.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
<<<<<<< HEAD
        id: "__alloyId1985"
    });
    $.__views.scrollView.add($.__views.__alloyId1985);
    $.__views.__alloyId1986 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2212"
    });
    $.__views.scrollView.add($.__views.__alloyId2212);
    $.__views.__alloyId2213 = Ti.UI.createLabel({
=======
        id: "__alloyId1985"
    });
    $.__views.scrollView.add($.__views.__alloyId1985);
    $.__views.__alloyId1986 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "5. Fill in your details and clicks submit.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2213"
    });
    $.__views.scrollView.add($.__views.__alloyId2213);
    $.__views.__alloyId2214 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1986"
    });
    $.__views.scrollView.add($.__views.__alloyId1986);
    $.__views.__alloyId1987 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "6. An e-mail will be sent to your e-mail. You are required to click on the link in the e-mail to activate your Self Care account.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2214"
    });
    $.__views.scrollView.add($.__views.__alloyId2214);
    $.__views.__alloyId2215 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1987"
    });
    $.__views.scrollView.add($.__views.__alloyId1987);
    $.__views.__alloyId1988 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "7. You may now access Self Care to start managing your XinXun account",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
<<<<<<< HEAD
        id: "__alloyId1988"
    });
    $.__views.scrollView.add($.__views.__alloyId1988);
    $.__views.__alloyId1989 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2215"
    });
    $.__views.scrollView.add($.__views.__alloyId2215);
    $.__views.__alloyId2216 = Ti.UI.createLabel({
=======
        id: "__alloyId1988"
    });
    $.__views.scrollView.add($.__views.__alloyId1988);
    $.__views.__alloyId1989 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Mobile Number",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        top: "50",
<<<<<<< HEAD
        id: "__alloyId1989"
    });
    $.__views.scrollView.add($.__views.__alloyId1989);
=======
<<<<<<< HEAD
        id: "__alloyId2216"
    });
    $.__views.scrollView.add($.__views.__alloyId2216);
=======
        id: "__alloyId1989"
    });
    $.__views.scrollView.add($.__views.__alloyId1989);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.mobileNumber = Ti.UI.createTextField({
        id: "mobileNumber",
        width: "100%",
        height: "50",
        borderColor: "black",
        textAlign: "center",
        color: "black"
    });
    $.__views.scrollView.add($.__views.mobileNumber);
<<<<<<< HEAD
    $.__views.__alloyId1990 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2217 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1990 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Example: 60111234567",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2217"
    });
    $.__views.scrollView.add($.__views.__alloyId2217);
    $.__views.__alloyId2218 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2218"
    });
    $.__views.register.add($.__views.__alloyId2218);
    $.__views.__alloyId2219 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2219"
    });
    $.__views.__alloyId2218.add($.__views.__alloyId2219);
    submit ? $.__views.__alloyId2219.addEventListener("click", submit) : __defers["$.__views.__alloyId2219!click!submit"] = true;
    $.__views.__alloyId2220 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        textAlign: "left",
        id: "__alloyId2220"
    });
    $.__views.__alloyId2219.add($.__views.__alloyId2220);
    $.__views.__alloyId2221 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId2221"
    });
    $.__views.__alloyId2218.add($.__views.__alloyId2221);
    $.__views.__alloyId2222 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2222"
    });
    $.__views.__alloyId2218.add($.__views.__alloyId2222);
    back ? $.__views.__alloyId2222.addEventListener("click", back) : __defers["$.__views.__alloyId2222!click!back"] = true;
    $.__views.__alloyId2223 = Ti.UI.createLabel({
        text: "Cancel",
        color: "white",
        textAlign: "left",
        id: "__alloyId2223"
    });
    $.__views.__alloyId2222.add($.__views.__alloyId2223);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1990"
    });
    $.__views.scrollView.add($.__views.__alloyId1990);
    $.__views.__alloyId1991 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1991"
    });
    $.__views.register.add($.__views.__alloyId1991);
    $.__views.__alloyId1992 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1992"
    });
    $.__views.__alloyId1991.add($.__views.__alloyId1992);
    submit ? $.__views.__alloyId1992.addEventListener("click", submit) : __defers["$.__views.__alloyId1992!click!submit"] = true;
    $.__views.__alloyId1993 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        textAlign: "left",
        id: "__alloyId1993"
    });
    $.__views.__alloyId1992.add($.__views.__alloyId1993);
    $.__views.__alloyId1994 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId1994"
    });
    $.__views.__alloyId1991.add($.__views.__alloyId1994);
    $.__views.__alloyId1995 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1995"
    });
    $.__views.__alloyId1991.add($.__views.__alloyId1995);
    back ? $.__views.__alloyId1995.addEventListener("click", back) : __defers["$.__views.__alloyId1995!click!back"] = true;
    $.__views.__alloyId1996 = Ti.UI.createLabel({
        text: "Cancel",
        color: "white",
        textAlign: "left",
        id: "__alloyId1996"
    });
    $.__views.__alloyId1995.add($.__views.__alloyId1996);
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    "android" == Ti.Platform.osname && ($.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150);
<<<<<<< HEAD
    __defers["$.__views.__alloyId1992!click!submit"] && $.__views.__alloyId1992.addEventListener("click", submit);
    __defers["$.__views.__alloyId1995!click!back"] && $.__views.__alloyId1995.addEventListener("click", back);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId2219!click!submit"] && $.__views.__alloyId2219.addEventListener("click", submit);
    __defers["$.__views.__alloyId2222!click!back"] && $.__views.__alloyId2222.addEventListener("click", back);
=======
    __defers["$.__views.__alloyId1992!click!submit"] && $.__views.__alloyId1992.addEventListener("click", submit);
    __defers["$.__views.__alloyId1995!click!back"] && $.__views.__alloyId1995.addEventListener("click", back);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;