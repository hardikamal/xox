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
    this.__controllerPath = "domesticCallStatement";
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
    $.__views.domesticCallStatement = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "domesticCallStatement"
    });
    $.__views.domesticCallStatement && $.addTopLevelView($.__views.domesticCallStatement);
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId175 = Alloy.createController("_header", {
        id: "__alloyId175",
=======
<<<<<<< HEAD
    $.__views.__alloyId221 = Alloy.createController("_header", {
        id: "__alloyId221",
=======
    $.__views.__alloyId175 = Alloy.createController("_header", {
        id: "__alloyId175",
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId175 = Alloy.createController("_header", {
        id: "__alloyId175",
>>>>>>> origin/master
        __parentSymbol: $.__views.domesticCallStatement
    });
    $.__views.__alloyId175.setParent($.__views.domesticCallStatement);
    $.__views.__alloyId176 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId176"
    });
    $.__views.domesticCallStatement.add($.__views.__alloyId176);
    $.__views.__alloyId177 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId222"
    });
    $.__views.domesticCallStatement.add($.__views.__alloyId222);
    $.__views.__alloyId223 = Ti.UI.createLabel({
=======
        id: "__alloyId176"
    });
    $.__views.domesticCallStatement.add($.__views.__alloyId176);
    $.__views.__alloyId177 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId176"
    });
    $.__views.domesticCallStatement.add($.__views.__alloyId176);
    $.__views.__alloyId177 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId177"
    });
    $.__views.__alloyId176.add($.__views.__alloyId177);
    $.__views.__alloyId178 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId223"
    });
    $.__views.__alloyId222.add($.__views.__alloyId223);
    $.__views.__alloyId224 = Ti.UI.createImageView({
=======
        id: "__alloyId177"
    });
    $.__views.__alloyId176.add($.__views.__alloyId177);
    $.__views.__alloyId178 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId177"
    });
    $.__views.__alloyId176.add($.__views.__alloyId177);
    $.__views.__alloyId178 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId178"
=======
<<<<<<< HEAD
        id: "__alloyId224"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId178"
>>>>>>> origin/master
    });
    $.__views.__alloyId176.add($.__views.__alloyId178);
    back ? $.__views.__alloyId178.addEventListener("click", back) : __defers["$.__views.__alloyId178!click!back"] = true;
    $.__views.__alloyId179 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId179"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.domesticCallStatement.add($.__views.__alloyId179);
    $.__views.__alloyId180 = Ti.UI.createLabel({
=======
    $.__views.domesticCallStatement.add($.__views.__alloyId225);
    $.__views.__alloyId226 = Ti.UI.createLabel({
=======
        id: "__alloyId178"
    });
    $.__views.__alloyId176.add($.__views.__alloyId178);
    back ? $.__views.__alloyId178.addEventListener("click", back) : __defers["$.__views.__alloyId178!click!back"] = true;
    $.__views.__alloyId179 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId179"
    });
    $.__views.domesticCallStatement.add($.__views.__alloyId179);
    $.__views.__alloyId180 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.domesticCallStatement.add($.__views.__alloyId179);
    $.__views.__alloyId180 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Domestic Voice Calls",
        textAlign: "center",
        color: "black",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId180"
=======
<<<<<<< HEAD
        id: "__alloyId226"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId180"
>>>>>>> origin/master
    });
    $.__views.__alloyId179.add($.__views.__alloyId180);
    var __alloyId181 = [];
    $.__views.__alloyId182 = Ti.UI.createTableViewSection({
        id: "__alloyId182"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    __alloyId181.push($.__views.__alloyId182);
    $.__views.__alloyId183 = Ti.UI.createTableViewRow({
=======
    __alloyId227.push($.__views.__alloyId228);
    $.__views.__alloyId229 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId180"
    });
    $.__views.__alloyId179.add($.__views.__alloyId180);
    var __alloyId181 = [];
    $.__views.__alloyId182 = Ti.UI.createTableViewSection({
        id: "__alloyId182"
    });
    __alloyId181.push($.__views.__alloyId182);
    $.__views.__alloyId183 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    __alloyId181.push($.__views.__alloyId182);
    $.__views.__alloyId183 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId229"
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId183"
    });
    $.__views.__alloyId182.add($.__views.__alloyId183);
    $.__views.__alloyId184 = Ti.UI.createView({
<<<<<<< HEAD
=======
        width: "33%",
        height: "100%",
        id: "__alloyId184"
    });
    $.__views.__alloyId183.add($.__views.__alloyId184);
    $.__views.__alloyId185 = Ti.UI.createLabel({
        text: "01/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId185"
>>>>>>> origin/master
    });
    $.__views.__alloyId184.add($.__views.__alloyId185);
    $.__views.__alloyId186 = Ti.UI.createView({
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId183"
    });
    $.__views.__alloyId182.add($.__views.__alloyId183);
    $.__views.__alloyId184 = Ti.UI.createView({
>>>>>>> origin/master
        width: "33%",
<<<<<<< HEAD
        height: "100%",
        id: "__alloyId184"
    });
    $.__views.__alloyId183.add($.__views.__alloyId184);
    $.__views.__alloyId185 = Ti.UI.createLabel({
        text: "01/03/2015 12:05:07",
=======
        height: "100",
        id: "__alloyId186"
    });
    $.__views.__alloyId183.add($.__views.__alloyId186);
    $.__views.__alloyId187 = Ti.UI.createLabel({
        text: "On Net 6017000000",
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId185"
    });
    $.__views.__alloyId184.add($.__views.__alloyId185);
    $.__views.__alloyId186 = Ti.UI.createView({
<<<<<<< HEAD
=======
        id: "__alloyId187"
    });
    $.__views.__alloyId186.add($.__views.__alloyId187);
    $.__views.__alloyId188 = Ti.UI.createView({
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        width: "33%",
<<<<<<< HEAD
        height: "100",
        id: "__alloyId186"
    });
    $.__views.__alloyId183.add($.__views.__alloyId186);
    $.__views.__alloyId187 = Ti.UI.createLabel({
        text: "On Net 6017000000",
=======
        height: "100%",
        id: "__alloyId188"
    });
    $.__views.__alloyId183.add($.__views.__alloyId188);
    $.__views.__alloyId189 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId187"
    });
    $.__views.__alloyId186.add($.__views.__alloyId187);
    $.__views.__alloyId188 = Ti.UI.createView({
<<<<<<< HEAD
=======
        id: "__alloyId189"
    });
<<<<<<< HEAD
    $.__views.__alloyId232.add($.__views.__alloyId233);
    $.__views.__alloyId234 = Ti.UI.createView({
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        width: "33%",
        height: "100%",
        id: "__alloyId188"
    });
    $.__views.__alloyId183.add($.__views.__alloyId188);
    $.__views.__alloyId189 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
=======
    $.__views.__alloyId188.add($.__views.__alloyId189);
    $.__views.__alloyId190 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId190"
    });
    $.__views.__alloyId182.add($.__views.__alloyId190);
    $.__views.__alloyId191 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId191"
    });
    $.__views.__alloyId190.add($.__views.__alloyId191);
    $.__views.__alloyId192 = Ti.UI.createLabel({
        text: "02/03/2015 12:05:07",
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId189"
=======
<<<<<<< HEAD
        id: "__alloyId235"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId189"
>>>>>>> origin/master
    });
    $.__views.__alloyId188.add($.__views.__alloyId189);
    $.__views.__alloyId190 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId190"
    });
    $.__views.__alloyId182.add($.__views.__alloyId190);
    $.__views.__alloyId191 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId191"
    });
    $.__views.__alloyId190.add($.__views.__alloyId191);
    $.__views.__alloyId192 = Ti.UI.createLabel({
        text: "02/03/2015 12:05:07",
=======
        id: "__alloyId192"
    });
    $.__views.__alloyId191.add($.__views.__alloyId192);
    $.__views.__alloyId193 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId193"
    });
    $.__views.__alloyId190.add($.__views.__alloyId193);
    $.__views.__alloyId194 = Ti.UI.createLabel({
        text: "On Net 6017000000",
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId192"
    });
    $.__views.__alloyId191.add($.__views.__alloyId192);
    $.__views.__alloyId193 = Ti.UI.createView({
<<<<<<< HEAD
=======
        id: "__alloyId194"
    });
    $.__views.__alloyId193.add($.__views.__alloyId194);
    $.__views.__alloyId195 = Ti.UI.createView({
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        width: "33%",
<<<<<<< HEAD
        height: "100",
        id: "__alloyId193"
    });
    $.__views.__alloyId190.add($.__views.__alloyId193);
    $.__views.__alloyId194 = Ti.UI.createLabel({
        text: "On Net 6017000000",
=======
        height: "100%",
        id: "__alloyId195"
    });
    $.__views.__alloyId190.add($.__views.__alloyId195);
    $.__views.__alloyId196 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId194"
    });
    $.__views.__alloyId193.add($.__views.__alloyId194);
    $.__views.__alloyId195 = Ti.UI.createView({
<<<<<<< HEAD
=======
        id: "__alloyId196"
    });
<<<<<<< HEAD
    $.__views.__alloyId239.add($.__views.__alloyId240);
    $.__views.__alloyId241 = Ti.UI.createView({
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        width: "33%",
        height: "100%",
        id: "__alloyId195"
    });
    $.__views.__alloyId190.add($.__views.__alloyId195);
    $.__views.__alloyId196 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
=======
    $.__views.__alloyId195.add($.__views.__alloyId196);
    $.__views.__alloyId197 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId197"
    });
    $.__views.__alloyId182.add($.__views.__alloyId197);
    $.__views.__alloyId198 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId198"
    });
    $.__views.__alloyId197.add($.__views.__alloyId198);
    $.__views.__alloyId199 = Ti.UI.createLabel({
        text: "03/03/2015 12:05:07",
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId196"
=======
<<<<<<< HEAD
        id: "__alloyId242"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId196"
>>>>>>> origin/master
    });
    $.__views.__alloyId195.add($.__views.__alloyId196);
    $.__views.__alloyId197 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId197"
    });
    $.__views.__alloyId182.add($.__views.__alloyId197);
    $.__views.__alloyId198 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId198"
    });
    $.__views.__alloyId197.add($.__views.__alloyId198);
    $.__views.__alloyId199 = Ti.UI.createLabel({
        text: "03/03/2015 12:05:07",
=======
        id: "__alloyId199"
    });
    $.__views.__alloyId198.add($.__views.__alloyId199);
    $.__views.__alloyId200 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId200"
    });
    $.__views.__alloyId197.add($.__views.__alloyId200);
    $.__views.__alloyId201 = Ti.UI.createLabel({
        text: "On Net 6017000000",
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId199"
    });
    $.__views.__alloyId198.add($.__views.__alloyId199);
    $.__views.__alloyId200 = Ti.UI.createView({
=======
        id: "__alloyId201"
    });
    $.__views.__alloyId200.add($.__views.__alloyId201);
    $.__views.__alloyId202 = Ti.UI.createView({
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId199"
    });
    $.__views.__alloyId198.add($.__views.__alloyId199);
    $.__views.__alloyId200 = Ti.UI.createView({
>>>>>>> origin/master
        width: "33%",
<<<<<<< HEAD
        height: "100",
        id: "__alloyId200"
    });
    $.__views.__alloyId197.add($.__views.__alloyId200);
    $.__views.__alloyId201 = Ti.UI.createLabel({
        text: "On Net 6017000000",
=======
        height: "100%",
        id: "__alloyId202"
    });
    $.__views.__alloyId197.add($.__views.__alloyId202);
    $.__views.__alloyId203 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId201"
    });
    $.__views.__alloyId200.add($.__views.__alloyId201);
    $.__views.__alloyId202 = Ti.UI.createView({
=======
        id: "__alloyId203"
    });
<<<<<<< HEAD
    $.__views.__alloyId246.add($.__views.__alloyId247);
    $.__views.__alloyId248 = Ti.UI.createView({
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId201"
    });
    $.__views.__alloyId200.add($.__views.__alloyId201);
    $.__views.__alloyId202 = Ti.UI.createView({
>>>>>>> origin/master
        width: "33%",
        height: "100%",
        id: "__alloyId202"
    });
    $.__views.__alloyId197.add($.__views.__alloyId202);
    $.__views.__alloyId203 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
=======
    $.__views.__alloyId202.add($.__views.__alloyId203);
    $.__views.__alloyId204 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId204"
    });
    $.__views.__alloyId182.add($.__views.__alloyId204);
    $.__views.__alloyId205 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId205"
    });
    $.__views.__alloyId204.add($.__views.__alloyId205);
    $.__views.__alloyId206 = Ti.UI.createLabel({
        text: "04/03/2015 12:05:07",
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId203"
=======
<<<<<<< HEAD
        id: "__alloyId249"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId203"
>>>>>>> origin/master
    });
    $.__views.__alloyId202.add($.__views.__alloyId203);
    $.__views.__alloyId204 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId204"
    });
    $.__views.__alloyId182.add($.__views.__alloyId204);
    $.__views.__alloyId205 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId205"
    });
    $.__views.__alloyId204.add($.__views.__alloyId205);
    $.__views.__alloyId206 = Ti.UI.createLabel({
        text: "04/03/2015 12:05:07",
=======
        id: "__alloyId206"
    });
    $.__views.__alloyId205.add($.__views.__alloyId206);
    $.__views.__alloyId207 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId207"
    });
    $.__views.__alloyId204.add($.__views.__alloyId207);
    $.__views.__alloyId208 = Ti.UI.createLabel({
        text: "On Net 6017000000",
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId206"
    });
    $.__views.__alloyId205.add($.__views.__alloyId206);
    $.__views.__alloyId207 = Ti.UI.createView({
<<<<<<< HEAD
=======
        id: "__alloyId208"
    });
    $.__views.__alloyId207.add($.__views.__alloyId208);
    $.__views.__alloyId209 = Ti.UI.createView({
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        width: "33%",
<<<<<<< HEAD
        height: "100",
        id: "__alloyId207"
    });
    $.__views.__alloyId204.add($.__views.__alloyId207);
    $.__views.__alloyId208 = Ti.UI.createLabel({
        text: "On Net 6017000000",
=======
        height: "100%",
        id: "__alloyId209"
    });
    $.__views.__alloyId204.add($.__views.__alloyId209);
    $.__views.__alloyId210 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId208"
=======
<<<<<<< HEAD
        id: "__alloyId254"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId208"
>>>>>>> origin/master
    });
    $.__views.__alloyId207.add($.__views.__alloyId208);
    $.__views.__alloyId209 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId209"
    });
    $.__views.__alloyId204.add($.__views.__alloyId209);
    $.__views.__alloyId210 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
=======
        id: "__alloyId210"
    });
    $.__views.__alloyId209.add($.__views.__alloyId210);
    $.__views.__alloyId211 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId211"
    });
    $.__views.__alloyId182.add($.__views.__alloyId211);
    $.__views.__alloyId212 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId212"
    });
    $.__views.__alloyId211.add($.__views.__alloyId212);
    $.__views.__alloyId213 = Ti.UI.createLabel({
        text: "05/03/2015 12:05:07",
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId210"
=======
<<<<<<< HEAD
        id: "__alloyId256"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId210"
>>>>>>> origin/master
    });
    $.__views.__alloyId209.add($.__views.__alloyId210);
    $.__views.__alloyId211 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId211"
    });
    $.__views.__alloyId182.add($.__views.__alloyId211);
    $.__views.__alloyId212 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId212"
    });
    $.__views.__alloyId211.add($.__views.__alloyId212);
    $.__views.__alloyId213 = Ti.UI.createLabel({
        text: "05/03/2015 12:05:07",
=======
        id: "__alloyId213"
    });
    $.__views.__alloyId212.add($.__views.__alloyId213);
    $.__views.__alloyId214 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId214"
    });
    $.__views.__alloyId211.add($.__views.__alloyId214);
    $.__views.__alloyId215 = Ti.UI.createLabel({
        text: "On Net 6017000000",
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId213"
    });
    $.__views.__alloyId212.add($.__views.__alloyId213);
    $.__views.__alloyId214 = Ti.UI.createView({
<<<<<<< HEAD
=======
        id: "__alloyId215"
    });
    $.__views.__alloyId214.add($.__views.__alloyId215);
    $.__views.__alloyId216 = Ti.UI.createView({
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        width: "33%",
<<<<<<< HEAD
        height: "100",
        id: "__alloyId214"
    });
    $.__views.__alloyId211.add($.__views.__alloyId214);
    $.__views.__alloyId215 = Ti.UI.createLabel({
        text: "On Net 6017000000",
=======
        height: "100%",
        id: "__alloyId216"
    });
    $.__views.__alloyId211.add($.__views.__alloyId216);
    $.__views.__alloyId217 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId215"
=======
<<<<<<< HEAD
        id: "__alloyId261"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId215"
>>>>>>> origin/master
    });
    $.__views.__alloyId214.add($.__views.__alloyId215);
    $.__views.__alloyId216 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId216"
    });
    $.__views.__alloyId211.add($.__views.__alloyId216);
    $.__views.__alloyId217 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
=======
        id: "__alloyId217"
    });
    $.__views.__alloyId216.add($.__views.__alloyId217);
    $.__views.__alloyId218 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId218"
    });
    $.__views.__alloyId182.add($.__views.__alloyId218);
    $.__views.__alloyId219 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId219"
    });
    $.__views.__alloyId218.add($.__views.__alloyId219);
    $.__views.__alloyId220 = Ti.UI.createLabel({
        text: "06/03/2015 12:05:07",
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId217"
=======
<<<<<<< HEAD
        id: "__alloyId263"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId217"
>>>>>>> origin/master
    });
    $.__views.__alloyId216.add($.__views.__alloyId217);
    $.__views.__alloyId218 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId218"
    });
    $.__views.__alloyId182.add($.__views.__alloyId218);
    $.__views.__alloyId219 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId219"
    });
    $.__views.__alloyId218.add($.__views.__alloyId219);
    $.__views.__alloyId220 = Ti.UI.createLabel({
        text: "06/03/2015 12:05:07",
=======
        id: "__alloyId220"
    });
    $.__views.__alloyId219.add($.__views.__alloyId220);
    $.__views.__alloyId221 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId221"
    });
    $.__views.__alloyId218.add($.__views.__alloyId221);
    $.__views.__alloyId222 = Ti.UI.createLabel({
        text: "On Net 6017000000",
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId220"
=======
<<<<<<< HEAD
        id: "__alloyId266"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId220"
>>>>>>> origin/master
    });
    $.__views.__alloyId219.add($.__views.__alloyId220);
    $.__views.__alloyId221 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId221"
    });
    $.__views.__alloyId218.add($.__views.__alloyId221);
    $.__views.__alloyId222 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId222"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId221.add($.__views.__alloyId222);
    $.__views.__alloyId223 = Ti.UI.createView({
=======
    $.__views.__alloyId267.add($.__views.__alloyId268);
    $.__views.__alloyId269 = Ti.UI.createView({
=======
        id: "__alloyId222"
    });
    $.__views.__alloyId221.add($.__views.__alloyId222);
    $.__views.__alloyId223 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId221.add($.__views.__alloyId222);
    $.__views.__alloyId223 = Ti.UI.createView({
>>>>>>> origin/master
        width: "33%",
        height: "100%",
        id: "__alloyId223"
    });
    $.__views.__alloyId218.add($.__views.__alloyId223);
    $.__views.__alloyId224 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId224"
=======
<<<<<<< HEAD
        id: "__alloyId270"
=======
        id: "__alloyId224"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId224"
>>>>>>> origin/master
    });
    $.__views.__alloyId223.add($.__views.__alloyId224);
    $.__views.__alloyId225 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId225"
    });
    $.__views.__alloyId182.add($.__views.__alloyId225);
    $.__views.__alloyId226 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId226"
    });
    $.__views.__alloyId225.add($.__views.__alloyId226);
    $.__views.__alloyId227 = Ti.UI.createLabel({
        text: "07/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId227"
    });
    $.__views.__alloyId226.add($.__views.__alloyId227);
    $.__views.__alloyId228 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId228"
    });
    $.__views.__alloyId225.add($.__views.__alloyId228);
    $.__views.__alloyId229 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId229"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId228.add($.__views.__alloyId229);
    $.__views.__alloyId230 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId274.add($.__views.__alloyId275);
    $.__views.__alloyId276 = Ti.UI.createView({
=======
    $.__views.__alloyId228.add($.__views.__alloyId229);
    $.__views.__alloyId230 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId228.add($.__views.__alloyId229);
    $.__views.__alloyId230 = Ti.UI.createView({
>>>>>>> origin/master
        width: "33%",
        height: "100%",
        id: "__alloyId230"
    });
    $.__views.__alloyId225.add($.__views.__alloyId230);
    $.__views.__alloyId231 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId231"
=======
<<<<<<< HEAD
        id: "__alloyId277"
=======
        id: "__alloyId231"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId231"
>>>>>>> origin/master
    });
    $.__views.__alloyId230.add($.__views.__alloyId231);
    $.__views.__alloyId232 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId232"
    });
    $.__views.__alloyId182.add($.__views.__alloyId232);
    $.__views.__alloyId233 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId233"
    });
    $.__views.__alloyId232.add($.__views.__alloyId233);
    $.__views.__alloyId234 = Ti.UI.createLabel({
        text: "08/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId234"
    });
    $.__views.__alloyId233.add($.__views.__alloyId234);
    $.__views.__alloyId235 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId235"
    });
    $.__views.__alloyId232.add($.__views.__alloyId235);
    $.__views.__alloyId236 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId236"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId235.add($.__views.__alloyId236);
    $.__views.__alloyId237 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId281.add($.__views.__alloyId282);
    $.__views.__alloyId283 = Ti.UI.createView({
=======
    $.__views.__alloyId235.add($.__views.__alloyId236);
    $.__views.__alloyId237 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId235.add($.__views.__alloyId236);
    $.__views.__alloyId237 = Ti.UI.createView({
>>>>>>> origin/master
        width: "33%",
        height: "100%",
        id: "__alloyId237"
    });
    $.__views.__alloyId232.add($.__views.__alloyId237);
    $.__views.__alloyId238 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId238"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId237.add($.__views.__alloyId238);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId181,
=======
<<<<<<< HEAD
    $.__views.__alloyId283.add($.__views.__alloyId284);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId227,
=======
    $.__views.__alloyId237.add($.__views.__alloyId238);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId181,
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId237.add($.__views.__alloyId238);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId181,
>>>>>>> origin/master
        id: "table",
        scrollable: "true"
    });
    $.__views.domesticCallStatement.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
<<<<<<< HEAD
<<<<<<< HEAD
    __defers["$.__views.__alloyId178!click!back"] && $.__views.__alloyId178.addEventListener("click", back);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId224!click!back"] && $.__views.__alloyId224.addEventListener("click", back);
=======
    __defers["$.__views.__alloyId178!click!back"] && $.__views.__alloyId178.addEventListener("click", back);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    __defers["$.__views.__alloyId178!click!back"] && $.__views.__alloyId178.addEventListener("click", back);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;