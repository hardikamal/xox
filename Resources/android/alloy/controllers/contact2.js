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
    this.__controllerPath = "contact2";
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
        backgroundColor: "#F4F6F5"
    });
    $.__views.scrollView && $.addTopLevelView($.__views.scrollView);
<<<<<<< HEAD
    var __alloyId120 = [];
    $.__views.__alloyId121 = Ti.UI.createTableViewRow({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
    var __alloyId122 = [];
    $.__views.__alloyId123 = Ti.UI.createTableViewRow({
=======
    var __alloyId120 = [];
    $.__views.__alloyId121 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId121"
    });
<<<<<<< HEAD
    __alloyId120.push($.__views.__alloyId121);
    $.__views.__alloyId122 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    __alloyId122.push($.__views.__alloyId123);
    $.__views.__alloyId124 = Ti.UI.createLabel({
=======
    var __alloyId77 = [];
    $.__views.__alloyId78 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId78"
    });
    __alloyId77.push($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    __alloyId120.push($.__views.__alloyId121);
    $.__views.__alloyId122 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Petaling Jaya (Jaya One)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId122"
    });
    $.__views.__alloyId121.add($.__views.__alloyId122);
    $.__views.__alloyId123 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId124"
    });
    $.__views.__alloyId123.add($.__views.__alloyId124);
    $.__views.__alloyId125 = Ti.UI.createLabel({
=======
        id: "__alloyId79"
    });
    $.__views.__alloyId78.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId122"
    });
    $.__views.__alloyId121.add($.__views.__alloyId122);
    $.__views.__alloyId123 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "XOX Mobile Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
        id: "__alloyId123"
    });
    $.__views.__alloyId121.add($.__views.__alloyId123);
    $.__views.__alloyId124 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId125"
    });
    $.__views.__alloyId123.add($.__views.__alloyId125);
    $.__views.__alloyId126 = Ti.UI.createLabel({
=======
        id: "__alloyId80"
    });
    $.__views.__alloyId78.add($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId123"
    });
    $.__views.__alloyId121.add($.__views.__alloyId123);
    $.__views.__alloyId124 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "31-3, Block C, Jaya One,72A, Jalan Universiti, 46200 Petaling Jaya, Selangor Darul Ehsan.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
        id: "__alloyId124"
    });
    $.__views.__alloyId121.add($.__views.__alloyId124);
    $.__views.__alloyId125 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId126"
    });
    $.__views.__alloyId123.add($.__views.__alloyId126);
    $.__views.__alloyId127 = Ti.UI.createLabel({
=======
        id: "__alloyId81"
    });
    $.__views.__alloyId78.add($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId124"
    });
    $.__views.__alloyId121.add($.__views.__alloyId124);
    $.__views.__alloyId125 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Contact: 03-7962 8000",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
        id: "__alloyId125"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId127"
=======
        id: "__alloyId125"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId121.add($.__views.__alloyId125);
    $.__views.__alloyId126 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId126"
    });
<<<<<<< HEAD
    __alloyId120.push($.__views.__alloyId126);
    $.__views.__alloyId127 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    __alloyId122.push($.__views.__alloyId128);
    $.__views.__alloyId129 = Ti.UI.createLabel({
=======
        id: "__alloyId82"
    });
    $.__views.__alloyId78.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId83"
    });
    __alloyId77.push($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    __alloyId120.push($.__views.__alloyId126);
    $.__views.__alloyId127 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Petaling Jaya (Digital Mall)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId127"
    });
    $.__views.__alloyId126.add($.__views.__alloyId127);
    $.__views.__alloyId128 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId129"
    });
    $.__views.__alloyId128.add($.__views.__alloyId129);
    $.__views.__alloyId130 = Ti.UI.createLabel({
=======
        id: "__alloyId84"
    });
    $.__views.__alloyId83.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId127"
    });
    $.__views.__alloyId126.add($.__views.__alloyId127);
    $.__views.__alloyId128 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "XOX Mobile Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
        id: "__alloyId128"
    });
    $.__views.__alloyId126.add($.__views.__alloyId128);
    $.__views.__alloyId129 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId130"
    });
    $.__views.__alloyId128.add($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createLabel({
=======
        id: "__alloyId85"
    });
    $.__views.__alloyId83.add($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId128"
    });
    $.__views.__alloyId126.add($.__views.__alloyId128);
    $.__views.__alloyId129 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Lot G-03A, Ground Floor Digital Mall PJ, No2 Jalan 14/20 Section 14, 46100 Petaling Jaya, Selangor.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
        id: "__alloyId129"
    });
    $.__views.__alloyId126.add($.__views.__alloyId129);
    $.__views.__alloyId130 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId131"
    });
    $.__views.__alloyId128.add($.__views.__alloyId131);
    $.__views.__alloyId132 = Ti.UI.createLabel({
=======
        id: "__alloyId86"
    });
    $.__views.__alloyId83.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId129"
    });
    $.__views.__alloyId126.add($.__views.__alloyId129);
    $.__views.__alloyId130 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Contact: 010-831 6363",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
        id: "__alloyId130"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId132"
=======
        id: "__alloyId130"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId126.add($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId131"
    });
<<<<<<< HEAD
    __alloyId120.push($.__views.__alloyId131);
    $.__views.__alloyId132 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    __alloyId122.push($.__views.__alloyId133);
    $.__views.__alloyId134 = Ti.UI.createLabel({
=======
        id: "__alloyId87"
    });
    $.__views.__alloyId83.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId88"
    });
    __alloyId77.push($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    __alloyId120.push($.__views.__alloyId131);
    $.__views.__alloyId132 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "KUALA LUMPUR (Plaza Low Yat)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId132"
    });
    $.__views.__alloyId131.add($.__views.__alloyId132);
    $.__views.__alloyId133 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId134"
    });
    $.__views.__alloyId133.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createLabel({
=======
        id: "__alloyId89"
    });
    $.__views.__alloyId88.add($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId132"
    });
    $.__views.__alloyId131.add($.__views.__alloyId132);
    $.__views.__alloyId133 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "XOX Retails Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
        id: "__alloyId133"
    });
    $.__views.__alloyId131.add($.__views.__alloyId133);
    $.__views.__alloyId134 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId135"
    });
    $.__views.__alloyId133.add($.__views.__alloyId135);
    $.__views.__alloyId136 = Ti.UI.createLabel({
=======
        id: "__alloyId90"
    });
    $.__views.__alloyId88.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId133"
    });
    $.__views.__alloyId131.add($.__views.__alloyId133);
    $.__views.__alloyId134 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Plaza Low Yat, 7 Jalan Bintang, Jalan Bukit Bintang, 55100 Kuala Lumpur.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
        id: "__alloyId134"
    });
    $.__views.__alloyId131.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId136"
    });
    $.__views.__alloyId133.add($.__views.__alloyId136);
    $.__views.__alloyId137 = Ti.UI.createLabel({
=======
        id: "__alloyId91"
    });
    $.__views.__alloyId88.add($.__views.__alloyId91);
    $.__views.__alloyId92 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId134"
    });
    $.__views.__alloyId131.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Contact: 010-8666288 / 012-2704222",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
        id: "__alloyId135"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId137"
=======
        id: "__alloyId135"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId131.add($.__views.__alloyId135);
    $.__views.__alloyId136 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId136"
    });
<<<<<<< HEAD
    __alloyId120.push($.__views.__alloyId136);
    $.__views.__alloyId137 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    __alloyId122.push($.__views.__alloyId138);
    $.__views.__alloyId139 = Ti.UI.createLabel({
=======
        id: "__alloyId92"
    });
    $.__views.__alloyId88.add($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId93"
    });
    __alloyId77.push($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    __alloyId120.push($.__views.__alloyId136);
    $.__views.__alloyId137 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "KUALA LUMPUR (Kepong)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId137"
    });
    $.__views.__alloyId136.add($.__views.__alloyId137);
    $.__views.__alloyId138 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId139"
    });
    $.__views.__alloyId138.add($.__views.__alloyId139);
    $.__views.__alloyId140 = Ti.UI.createLabel({
=======
        id: "__alloyId94"
    });
    $.__views.__alloyId93.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId137"
    });
    $.__views.__alloyId136.add($.__views.__alloyId137);
    $.__views.__alloyId138 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "XOX Mobile Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
        id: "__alloyId138"
    });
    $.__views.__alloyId136.add($.__views.__alloyId138);
    $.__views.__alloyId139 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId140"
    });
    $.__views.__alloyId138.add($.__views.__alloyId140);
    $.__views.__alloyId141 = Ti.UI.createLabel({
=======
        id: "__alloyId95"
    });
    $.__views.__alloyId93.add($.__views.__alloyId95);
    $.__views.__alloyId96 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId138"
    });
    $.__views.__alloyId136.add($.__views.__alloyId138);
    $.__views.__alloyId139 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "33, Jalan Metro Perdana Timur 1, Taman Usahawan Kepong, 52100 Kepong, Kuala Lumpur.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
        id: "__alloyId139"
    });
    $.__views.__alloyId136.add($.__views.__alloyId139);
    $.__views.__alloyId140 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId141"
    });
    $.__views.__alloyId138.add($.__views.__alloyId141);
    $.__views.__alloyId142 = Ti.UI.createLabel({
=======
        id: "__alloyId96"
    });
    $.__views.__alloyId93.add($.__views.__alloyId96);
    $.__views.__alloyId97 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId139"
    });
    $.__views.__alloyId136.add($.__views.__alloyId139);
    $.__views.__alloyId140 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Contact: 03-62503003",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
        id: "__alloyId140"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId142"
=======
        id: "__alloyId140"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId136.add($.__views.__alloyId140);
    $.__views.__alloyId141 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId141"
    });
<<<<<<< HEAD
    __alloyId120.push($.__views.__alloyId141);
    $.__views.__alloyId142 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    __alloyId122.push($.__views.__alloyId143);
    $.__views.__alloyId144 = Ti.UI.createLabel({
=======
        id: "__alloyId97"
    });
    $.__views.__alloyId93.add($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId98"
    });
    __alloyId77.push($.__views.__alloyId98);
    $.__views.__alloyId99 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    __alloyId120.push($.__views.__alloyId141);
    $.__views.__alloyId142 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "KUALA LUMPUR (Pudu)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId142"
    });
    $.__views.__alloyId141.add($.__views.__alloyId142);
    $.__views.__alloyId143 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId144"
    });
    $.__views.__alloyId143.add($.__views.__alloyId144);
    $.__views.__alloyId145 = Ti.UI.createLabel({
=======
        id: "__alloyId99"
    });
    $.__views.__alloyId98.add($.__views.__alloyId99);
    $.__views.__alloyId100 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId142"
    });
    $.__views.__alloyId141.add($.__views.__alloyId142);
    $.__views.__alloyId143 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "XOX Mobile Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
        id: "__alloyId143"
    });
    $.__views.__alloyId141.add($.__views.__alloyId143);
    $.__views.__alloyId144 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId145"
    });
    $.__views.__alloyId143.add($.__views.__alloyId145);
    $.__views.__alloyId146 = Ti.UI.createLabel({
=======
        id: "__alloyId100"
    });
    $.__views.__alloyId98.add($.__views.__alloyId100);
    $.__views.__alloyId101 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId143"
    });
    $.__views.__alloyId141.add($.__views.__alloyId143);
    $.__views.__alloyId144 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "21, Lorong Thambi 2, Off Jalan Changkat Thambi Dollah, Pudu, 55100 Kuala Lumpur.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
        id: "__alloyId144"
    });
    $.__views.__alloyId141.add($.__views.__alloyId144);
    $.__views.__alloyId145 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId146"
    });
    $.__views.__alloyId143.add($.__views.__alloyId146);
    $.__views.__alloyId147 = Ti.UI.createLabel({
=======
        id: "__alloyId101"
    });
    $.__views.__alloyId98.add($.__views.__alloyId101);
    $.__views.__alloyId102 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId144"
    });
    $.__views.__alloyId141.add($.__views.__alloyId144);
    $.__views.__alloyId145 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Contact: 03-21458010",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
        id: "__alloyId145"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId147"
=======
        id: "__alloyId145"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId141.add($.__views.__alloyId145);
    $.__views.__alloyId146 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId146"
    });
<<<<<<< HEAD
    __alloyId120.push($.__views.__alloyId146);
    $.__views.__alloyId147 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    __alloyId122.push($.__views.__alloyId148);
    $.__views.__alloyId149 = Ti.UI.createLabel({
=======
        id: "__alloyId102"
    });
    $.__views.__alloyId98.add($.__views.__alloyId102);
    $.__views.__alloyId103 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId103"
    });
    __alloyId77.push($.__views.__alloyId103);
    $.__views.__alloyId104 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    __alloyId120.push($.__views.__alloyId146);
    $.__views.__alloyId147 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "SELANGOR (Puchong)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId147"
    });
    $.__views.__alloyId146.add($.__views.__alloyId147);
    $.__views.__alloyId148 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId149"
    });
    $.__views.__alloyId148.add($.__views.__alloyId149);
    $.__views.__alloyId150 = Ti.UI.createLabel({
=======
        id: "__alloyId104"
    });
    $.__views.__alloyId103.add($.__views.__alloyId104);
    $.__views.__alloyId105 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId147"
    });
    $.__views.__alloyId146.add($.__views.__alloyId147);
    $.__views.__alloyId148 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "XOX Mobile Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
        id: "__alloyId148"
    });
    $.__views.__alloyId146.add($.__views.__alloyId148);
    $.__views.__alloyId149 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId150"
    });
    $.__views.__alloyId148.add($.__views.__alloyId150);
    $.__views.__alloyId151 = Ti.UI.createLabel({
=======
        id: "__alloyId105"
    });
    $.__views.__alloyId103.add($.__views.__alloyId105);
    $.__views.__alloyId106 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId148"
    });
    $.__views.__alloyId146.add($.__views.__alloyId148);
    $.__views.__alloyId149 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "54-G, Jalan Puteri 1/4, Bandar Puteri, 47100 Puchong, Selangor.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
        id: "__alloyId149"
    });
    $.__views.__alloyId146.add($.__views.__alloyId149);
    $.__views.__alloyId150 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId151"
    });
    $.__views.__alloyId148.add($.__views.__alloyId151);
    $.__views.__alloyId152 = Ti.UI.createLabel({
=======
        id: "__alloyId106"
    });
    $.__views.__alloyId103.add($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId149"
    });
    $.__views.__alloyId146.add($.__views.__alloyId149);
    $.__views.__alloyId150 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Contact: 03-80511568",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
        id: "__alloyId150"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId152"
=======
        id: "__alloyId150"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId146.add($.__views.__alloyId150);
    $.__views.__alloyId151 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId151"
    });
<<<<<<< HEAD
    __alloyId120.push($.__views.__alloyId151);
    $.__views.__alloyId152 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    __alloyId122.push($.__views.__alloyId153);
    $.__views.__alloyId154 = Ti.UI.createLabel({
=======
        id: "__alloyId107"
    });
    $.__views.__alloyId103.add($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId108"
    });
    __alloyId77.push($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    __alloyId120.push($.__views.__alloyId151);
    $.__views.__alloyId152 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "PENANG (George Town)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId152"
    });
    $.__views.__alloyId151.add($.__views.__alloyId152);
    $.__views.__alloyId153 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId154"
    });
    $.__views.__alloyId153.add($.__views.__alloyId154);
    $.__views.__alloyId155 = Ti.UI.createLabel({
=======
        id: "__alloyId109"
    });
    $.__views.__alloyId108.add($.__views.__alloyId109);
    $.__views.__alloyId110 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId152"
    });
    $.__views.__alloyId151.add($.__views.__alloyId152);
    $.__views.__alloyId153 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "XOX Mobile Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
        id: "__alloyId153"
    });
    $.__views.__alloyId151.add($.__views.__alloyId153);
    $.__views.__alloyId154 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId155"
    });
    $.__views.__alloyId153.add($.__views.__alloyId155);
    $.__views.__alloyId156 = Ti.UI.createLabel({
=======
        id: "__alloyId110"
    });
    $.__views.__alloyId108.add($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId153"
    });
    $.__views.__alloyId151.add($.__views.__alloyId153);
    $.__views.__alloyId154 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "112, Jalan Terengganu, 10460 Georgetown Penang.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
        id: "__alloyId154"
    });
    $.__views.__alloyId151.add($.__views.__alloyId154);
    $.__views.__alloyId155 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId156"
    });
    $.__views.__alloyId153.add($.__views.__alloyId156);
    $.__views.__alloyId157 = Ti.UI.createLabel({
=======
        id: "__alloyId111"
    });
    $.__views.__alloyId108.add($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId154"
    });
    $.__views.__alloyId151.add($.__views.__alloyId154);
    $.__views.__alloyId155 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Contact: 04-282 6388 / 04-281 7188",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
        id: "__alloyId155"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId157"
=======
        id: "__alloyId155"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId151.add($.__views.__alloyId155);
    $.__views.__alloyId156 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId156"
    });
<<<<<<< HEAD
    __alloyId120.push($.__views.__alloyId156);
    $.__views.__alloyId157 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    __alloyId122.push($.__views.__alloyId158);
    $.__views.__alloyId159 = Ti.UI.createLabel({
=======
        id: "__alloyId112"
    });
    $.__views.__alloyId108.add($.__views.__alloyId112);
    $.__views.__alloyId113 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId113"
    });
    __alloyId77.push($.__views.__alloyId113);
    $.__views.__alloyId114 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    __alloyId120.push($.__views.__alloyId156);
    $.__views.__alloyId157 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "PENANG (George Town)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId157"
    });
    $.__views.__alloyId156.add($.__views.__alloyId157);
    $.__views.__alloyId158 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId159"
    });
    $.__views.__alloyId158.add($.__views.__alloyId159);
    $.__views.__alloyId160 = Ti.UI.createLabel({
=======
        id: "__alloyId114"
    });
    $.__views.__alloyId113.add($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId157"
    });
    $.__views.__alloyId156.add($.__views.__alloyId157);
    $.__views.__alloyId158 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "XOX Care Centre",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
        id: "__alloyId158"
    });
    $.__views.__alloyId156.add($.__views.__alloyId158);
    $.__views.__alloyId159 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId160"
    });
    $.__views.__alloyId158.add($.__views.__alloyId160);
    $.__views.__alloyId161 = Ti.UI.createLabel({
=======
        id: "__alloyId115"
    });
    $.__views.__alloyId113.add($.__views.__alloyId115);
    $.__views.__alloyId116 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId158"
    });
    $.__views.__alloyId156.add($.__views.__alloyId158);
    $.__views.__alloyId159 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Kiosk G-01 Level 1@ ICT Komtar, Unit 01-4.01 Komtar, Jalan Penang 10000 Georgetown Penang.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
        id: "__alloyId159"
    });
    $.__views.__alloyId156.add($.__views.__alloyId159);
    $.__views.__alloyId160 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId161"
    });
    $.__views.__alloyId158.add($.__views.__alloyId161);
    $.__views.__alloyId162 = Ti.UI.createLabel({
=======
        id: "__alloyId116"
    });
    $.__views.__alloyId113.add($.__views.__alloyId116);
    $.__views.__alloyId117 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId159"
    });
    $.__views.__alloyId156.add($.__views.__alloyId159);
    $.__views.__alloyId160 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Contact: -",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
        id: "__alloyId160"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId162"
=======
        id: "__alloyId160"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId156.add($.__views.__alloyId160);
    $.__views.__alloyId161 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId161"
    });
<<<<<<< HEAD
    __alloyId120.push($.__views.__alloyId161);
    $.__views.__alloyId162 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    __alloyId122.push($.__views.__alloyId163);
    $.__views.__alloyId164 = Ti.UI.createLabel({
=======
        id: "__alloyId117"
    });
    $.__views.__alloyId113.add($.__views.__alloyId117);
    $.__views.__alloyId118 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId118"
    });
    __alloyId77.push($.__views.__alloyId118);
    $.__views.__alloyId119 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    __alloyId120.push($.__views.__alloyId161);
    $.__views.__alloyId162 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "SARAWAK (Kuching)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId162"
    });
    $.__views.__alloyId161.add($.__views.__alloyId162);
    $.__views.__alloyId163 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId164"
    });
    $.__views.__alloyId163.add($.__views.__alloyId164);
    $.__views.__alloyId165 = Ti.UI.createLabel({
=======
        id: "__alloyId119"
    });
    $.__views.__alloyId118.add($.__views.__alloyId119);
    $.__views.__alloyId120 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId162"
    });
    $.__views.__alloyId161.add($.__views.__alloyId162);
    $.__views.__alloyId163 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "XOX Mobile Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
        id: "__alloyId163"
    });
    $.__views.__alloyId161.add($.__views.__alloyId163);
    $.__views.__alloyId164 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId165"
    });
    $.__views.__alloyId163.add($.__views.__alloyId165);
    $.__views.__alloyId166 = Ti.UI.createLabel({
=======
        id: "__alloyId120"
    });
    $.__views.__alloyId118.add($.__views.__alloyId120);
    $.__views.__alloyId121 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId163"
    });
    $.__views.__alloyId161.add($.__views.__alloyId163);
    $.__views.__alloyId164 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "1st Floor, Lot 2082, Section 60 KTLD, Jalan Sekama, 93300 Kuching Sarawak.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
        id: "__alloyId164"
    });
    $.__views.__alloyId161.add($.__views.__alloyId164);
    $.__views.__alloyId165 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId166"
    });
    $.__views.__alloyId163.add($.__views.__alloyId166);
    $.__views.__alloyId167 = Ti.UI.createLabel({
=======
        id: "__alloyId121"
    });
    $.__views.__alloyId118.add($.__views.__alloyId121);
    $.__views.__alloyId122 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId164"
    });
    $.__views.__alloyId161.add($.__views.__alloyId164);
    $.__views.__alloyId165 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Contact: 082-337010",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
        id: "__alloyId165"
    });
    $.__views.__alloyId161.add($.__views.__alloyId165);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId120,
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId167"
=======
        id: "__alloyId165"
>>>>>>> origin/master
    });
    $.__views.__alloyId161.add($.__views.__alloyId165);
    $.__views.table = Ti.UI.createTableView({
<<<<<<< HEAD
        data: __alloyId122,
=======
        id: "__alloyId122"
    });
    $.__views.__alloyId118.add($.__views.__alloyId122);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId77,
>>>>>>> Stashed changes
=======
        data: __alloyId120,
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "table"
    });
    $.__views.scrollView.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;