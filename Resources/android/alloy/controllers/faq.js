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
    function row1() {
        console.log("row1");
        $.row1.height = 50 == $.row1.height ? Ti.UI.SIZE : 50;
    }
    function row2() {
        console.log("row2");
        $.row2.height = 50 == $.row2.height ? Ti.UI.SIZE : 50;
    }
    function row3() {
        console.log("row3");
        $.row3.height = 50 == $.row3.height ? Ti.UI.SIZE : 50;
    }
    function row4() {
        console.log("row4");
        $.row4.height = 50 == $.row4.height ? Ti.UI.SIZE : 50;
    }
    function row5() {
        console.log("row5");
        $.row5.height = 50 == $.row5.height ? Ti.UI.SIZE : 50;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "faq";
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
    $.__views.faq = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "faq"
    });
    $.__views.faq && $.addTopLevelView($.__views.faq);
<<<<<<< HEAD
    $.__views.__alloyId438 = Alloy.createController("_header", {
        id: "__alloyId438",
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
    $.__views.__alloyId440 = Alloy.createController("_header", {
        id: "__alloyId440",
=======
    $.__views.__alloyId438 = Alloy.createController("_header", {
        id: "__alloyId438",
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        __parentSymbol: $.__views.faq
    });
    $.__views.__alloyId438.setParent($.__views.faq);
    $.__views.__alloyId439 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId439"
    });
<<<<<<< HEAD
    $.__views.faq.add($.__views.__alloyId439);
    $.__views.__alloyId440 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.faq.add($.__views.__alloyId441);
    $.__views.__alloyId442 = Ti.UI.createLabel({
=======
    $.__views.__alloyId176 = Alloy.createController("_header", {
        id: "__alloyId176",
        __parentSymbol: $.__views.faq
    });
    $.__views.__alloyId176.setParent($.__views.faq);
    $.__views.__alloyId177 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId177"
    });
    $.__views.faq.add($.__views.__alloyId177);
    $.__views.__alloyId178 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.faq.add($.__views.__alloyId439);
    $.__views.__alloyId440 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "FAQs",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId440"
    });
    $.__views.__alloyId439.add($.__views.__alloyId440);
    $.__views.__alloyId441 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId442"
    });
    $.__views.__alloyId441.add($.__views.__alloyId442);
    $.__views.__alloyId443 = Ti.UI.createImageView({
=======
        id: "__alloyId178"
    });
    $.__views.__alloyId177.add($.__views.__alloyId178);
    $.__views.__alloyId179 = Ti.UI.createImageView({
>>>>>>> Stashed changes
=======
        id: "__alloyId440"
    });
    $.__views.__alloyId439.add($.__views.__alloyId440);
    $.__views.__alloyId441 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId441"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId443"
=======
        id: "__alloyId441"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId439.add($.__views.__alloyId441);
    back ? $.__views.__alloyId441.addEventListener("click", back) : __defers["$.__views.__alloyId441!click!back"] = true;
    $.__views.__alloyId442 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        id: "__alloyId442"
    });
<<<<<<< HEAD
    $.__views.faq.add($.__views.__alloyId442);
=======
<<<<<<< HEAD
    $.__views.faq.add($.__views.__alloyId444);
=======
        id: "__alloyId179"
    });
    $.__views.__alloyId177.add($.__views.__alloyId179);
    back ? $.__views.__alloyId179.addEventListener("click", back) : __defers["$.__views.__alloyId179!click!back"] = true;
    $.__views.__alloyId180 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        id: "__alloyId180"
    });
    $.__views.faq.add($.__views.__alloyId180);
>>>>>>> Stashed changes
=======
    $.__views.faq.add($.__views.__alloyId442);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.row1 = Ti.UI.createView({
        id: "row1",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
<<<<<<< HEAD
    $.__views.__alloyId442.add($.__views.row1);
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
    $.__views.__alloyId444.add($.__views.row1);
=======
    $.__views.__alloyId442.add($.__views.row1);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    row1 ? $.__views.row1.addEventListener("click", row1) : __defers["$.__views.row1!click!row1"] = true;
    $.__views.__alloyId443 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId443"
    });
    $.__views.row1.add($.__views.__alloyId443);
    $.__views.__alloyId444 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId444"
    });
<<<<<<< HEAD
    $.__views.__alloyId443.add($.__views.__alloyId444);
    $.__views.__alloyId445 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId445.add($.__views.__alloyId446);
    $.__views.__alloyId447 = Ti.UI.createLabel({
=======
    $.__views.__alloyId180.add($.__views.row1);
    row1 ? $.__views.row1.addEventListener("click", row1) : __defers["$.__views.row1!click!row1"] = true;
    $.__views.__alloyId181 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId181"
    });
    $.__views.row1.add($.__views.__alloyId181);
    $.__views.__alloyId182 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId182"
    });
    $.__views.__alloyId181.add($.__views.__alloyId182);
    $.__views.__alloyId183 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId443.add($.__views.__alloyId444);
    $.__views.__alloyId445 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId445"
    });
    $.__views.__alloyId444.add($.__views.__alloyId445);
    $.__views.__alloyId446 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId447"
    });
    $.__views.__alloyId446.add($.__views.__alloyId447);
    $.__views.__alloyId448 = Ti.UI.createView({
=======
        id: "__alloyId183"
    });
    $.__views.__alloyId182.add($.__views.__alloyId183);
    $.__views.__alloyId184 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId445"
    });
    $.__views.__alloyId444.add($.__views.__alloyId445);
    $.__views.__alloyId446 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
        id: "__alloyId446"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId448"
=======
        id: "__alloyId446"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId444.add($.__views.__alloyId446);
    $.__views.__alloyId447 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId447"
    });
<<<<<<< HEAD
    $.__views.__alloyId443.add($.__views.__alloyId447);
    $.__views.__alloyId448 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
    $.__views.__alloyId445.add($.__views.__alloyId449);
    $.__views.__alloyId450 = Ti.UI.createImageView({
=======
        id: "__alloyId184"
    });
    $.__views.__alloyId182.add($.__views.__alloyId184);
    $.__views.__alloyId185 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId185"
    });
    $.__views.__alloyId181.add($.__views.__alloyId185);
    $.__views.__alloyId186 = Ti.UI.createImageView({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId443.add($.__views.__alloyId447);
    $.__views.__alloyId448 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
<<<<<<< HEAD
        id: "__alloyId448"
    });
    $.__views.__alloyId447.add($.__views.__alloyId448);
    $.__views.__alloyId449 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId450"
    });
    $.__views.__alloyId449.add($.__views.__alloyId450);
    $.__views.__alloyId451 = Ti.UI.createView({
=======
        id: "__alloyId186"
    });
    $.__views.__alloyId185.add($.__views.__alloyId186);
    $.__views.__alloyId187 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId448"
    });
    $.__views.__alloyId447.add($.__views.__alloyId448);
    $.__views.__alloyId449 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
        id: "__alloyId449"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId451"
=======
        id: "__alloyId449"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId447.add($.__views.__alloyId449);
    $.__views.__alloyId450 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId450"
    });
<<<<<<< HEAD
    $.__views.row1.add($.__views.__alloyId450);
    $.__views.__alloyId451 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.row1.add($.__views.__alloyId452);
    $.__views.__alloyId453 = Ti.UI.createLabel({
=======
        id: "__alloyId187"
    });
    $.__views.__alloyId185.add($.__views.__alloyId187);
    $.__views.__alloyId188 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId188"
    });
    $.__views.row1.add($.__views.__alloyId188);
    $.__views.__alloyId189 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.row1.add($.__views.__alloyId450);
    $.__views.__alloyId451 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId451"
    });
    $.__views.__alloyId450.add($.__views.__alloyId451);
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId453"
    });
    $.__views.__alloyId452.add($.__views.__alloyId453);
=======
        id: "__alloyId189"
    });
    $.__views.__alloyId188.add($.__views.__alloyId189);
>>>>>>> Stashed changes
=======
        id: "__alloyId451"
    });
    $.__views.__alloyId450.add($.__views.__alloyId451);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.row2 = Ti.UI.createView({
        id: "row2",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
<<<<<<< HEAD
    $.__views.__alloyId442.add($.__views.row2);
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
    $.__views.__alloyId444.add($.__views.row2);
=======
    $.__views.__alloyId442.add($.__views.row2);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    row2 ? $.__views.row2.addEventListener("click", row2) : __defers["$.__views.row2!click!row2"] = true;
    $.__views.__alloyId452 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId452"
    });
    $.__views.row2.add($.__views.__alloyId452);
    $.__views.__alloyId453 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId453"
    });
<<<<<<< HEAD
    $.__views.__alloyId452.add($.__views.__alloyId453);
    $.__views.__alloyId454 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId454.add($.__views.__alloyId455);
    $.__views.__alloyId456 = Ti.UI.createLabel({
=======
    $.__views.__alloyId180.add($.__views.row2);
    row2 ? $.__views.row2.addEventListener("click", row2) : __defers["$.__views.row2!click!row2"] = true;
    $.__views.__alloyId190 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId190"
    });
    $.__views.row2.add($.__views.__alloyId190);
    $.__views.__alloyId191 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId191"
    });
    $.__views.__alloyId190.add($.__views.__alloyId191);
    $.__views.__alloyId192 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId452.add($.__views.__alloyId453);
    $.__views.__alloyId454 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId454"
    });
    $.__views.__alloyId453.add($.__views.__alloyId454);
    $.__views.__alloyId455 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId456"
    });
    $.__views.__alloyId455.add($.__views.__alloyId456);
    $.__views.__alloyId457 = Ti.UI.createView({
=======
        id: "__alloyId192"
    });
    $.__views.__alloyId191.add($.__views.__alloyId192);
    $.__views.__alloyId193 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId454"
    });
    $.__views.__alloyId453.add($.__views.__alloyId454);
    $.__views.__alloyId455 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
        id: "__alloyId455"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId457"
=======
        id: "__alloyId455"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId453.add($.__views.__alloyId455);
    $.__views.__alloyId456 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId456"
    });
<<<<<<< HEAD
    $.__views.__alloyId452.add($.__views.__alloyId456);
    $.__views.__alloyId457 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
    $.__views.__alloyId454.add($.__views.__alloyId458);
    $.__views.__alloyId459 = Ti.UI.createImageView({
=======
        id: "__alloyId193"
    });
    $.__views.__alloyId191.add($.__views.__alloyId193);
    $.__views.__alloyId194 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId194"
    });
    $.__views.__alloyId190.add($.__views.__alloyId194);
    $.__views.__alloyId195 = Ti.UI.createImageView({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId452.add($.__views.__alloyId456);
    $.__views.__alloyId457 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
<<<<<<< HEAD
        id: "__alloyId457"
    });
    $.__views.__alloyId456.add($.__views.__alloyId457);
    $.__views.__alloyId458 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId459"
    });
    $.__views.__alloyId458.add($.__views.__alloyId459);
    $.__views.__alloyId460 = Ti.UI.createView({
=======
        id: "__alloyId195"
    });
    $.__views.__alloyId194.add($.__views.__alloyId195);
    $.__views.__alloyId196 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId457"
    });
    $.__views.__alloyId456.add($.__views.__alloyId457);
    $.__views.__alloyId458 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
        id: "__alloyId458"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId460"
=======
        id: "__alloyId458"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId456.add($.__views.__alloyId458);
    $.__views.__alloyId459 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId459"
    });
<<<<<<< HEAD
    $.__views.row2.add($.__views.__alloyId459);
    $.__views.__alloyId460 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.row2.add($.__views.__alloyId461);
    $.__views.__alloyId462 = Ti.UI.createLabel({
=======
        id: "__alloyId196"
    });
    $.__views.__alloyId194.add($.__views.__alloyId196);
    $.__views.__alloyId197 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId197"
    });
    $.__views.row2.add($.__views.__alloyId197);
    $.__views.__alloyId198 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.row2.add($.__views.__alloyId459);
    $.__views.__alloyId460 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId460"
    });
    $.__views.__alloyId459.add($.__views.__alloyId460);
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId462"
    });
    $.__views.__alloyId461.add($.__views.__alloyId462);
=======
        id: "__alloyId198"
    });
    $.__views.__alloyId197.add($.__views.__alloyId198);
>>>>>>> Stashed changes
=======
        id: "__alloyId460"
    });
    $.__views.__alloyId459.add($.__views.__alloyId460);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.row3 = Ti.UI.createView({
        id: "row3",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
<<<<<<< HEAD
    $.__views.__alloyId442.add($.__views.row3);
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
    $.__views.__alloyId444.add($.__views.row3);
=======
    $.__views.__alloyId442.add($.__views.row3);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    row3 ? $.__views.row3.addEventListener("click", row3) : __defers["$.__views.row3!click!row3"] = true;
    $.__views.__alloyId461 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId461"
    });
    $.__views.row3.add($.__views.__alloyId461);
    $.__views.__alloyId462 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId462"
    });
<<<<<<< HEAD
    $.__views.__alloyId461.add($.__views.__alloyId462);
    $.__views.__alloyId463 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId463.add($.__views.__alloyId464);
    $.__views.__alloyId465 = Ti.UI.createLabel({
=======
    $.__views.__alloyId180.add($.__views.row3);
    row3 ? $.__views.row3.addEventListener("click", row3) : __defers["$.__views.row3!click!row3"] = true;
    $.__views.__alloyId199 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId199"
    });
    $.__views.row3.add($.__views.__alloyId199);
    $.__views.__alloyId200 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId200"
    });
    $.__views.__alloyId199.add($.__views.__alloyId200);
    $.__views.__alloyId201 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId461.add($.__views.__alloyId462);
    $.__views.__alloyId463 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId463"
    });
    $.__views.__alloyId462.add($.__views.__alloyId463);
    $.__views.__alloyId464 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId465"
    });
    $.__views.__alloyId464.add($.__views.__alloyId465);
    $.__views.__alloyId466 = Ti.UI.createView({
=======
        id: "__alloyId201"
    });
    $.__views.__alloyId200.add($.__views.__alloyId201);
    $.__views.__alloyId202 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId463"
    });
    $.__views.__alloyId462.add($.__views.__alloyId463);
    $.__views.__alloyId464 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
        id: "__alloyId464"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId466"
=======
        id: "__alloyId464"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId462.add($.__views.__alloyId464);
    $.__views.__alloyId465 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId465"
    });
<<<<<<< HEAD
    $.__views.__alloyId461.add($.__views.__alloyId465);
    $.__views.__alloyId466 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
    $.__views.__alloyId463.add($.__views.__alloyId467);
    $.__views.__alloyId468 = Ti.UI.createImageView({
=======
        id: "__alloyId202"
    });
    $.__views.__alloyId200.add($.__views.__alloyId202);
    $.__views.__alloyId203 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId203"
    });
    $.__views.__alloyId199.add($.__views.__alloyId203);
    $.__views.__alloyId204 = Ti.UI.createImageView({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId461.add($.__views.__alloyId465);
    $.__views.__alloyId466 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
<<<<<<< HEAD
        id: "__alloyId466"
    });
    $.__views.__alloyId465.add($.__views.__alloyId466);
    $.__views.__alloyId467 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId468"
    });
    $.__views.__alloyId467.add($.__views.__alloyId468);
    $.__views.__alloyId469 = Ti.UI.createView({
=======
        id: "__alloyId204"
    });
    $.__views.__alloyId203.add($.__views.__alloyId204);
    $.__views.__alloyId205 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId466"
    });
    $.__views.__alloyId465.add($.__views.__alloyId466);
    $.__views.__alloyId467 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
        id: "__alloyId467"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId469"
=======
        id: "__alloyId467"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId465.add($.__views.__alloyId467);
    $.__views.__alloyId468 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId468"
    });
<<<<<<< HEAD
    $.__views.row3.add($.__views.__alloyId468);
    $.__views.__alloyId469 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.row3.add($.__views.__alloyId470);
    $.__views.__alloyId471 = Ti.UI.createLabel({
=======
        id: "__alloyId205"
    });
    $.__views.__alloyId203.add($.__views.__alloyId205);
    $.__views.__alloyId206 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId206"
    });
    $.__views.row3.add($.__views.__alloyId206);
    $.__views.__alloyId207 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.row3.add($.__views.__alloyId468);
    $.__views.__alloyId469 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId469"
    });
    $.__views.__alloyId468.add($.__views.__alloyId469);
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId471"
    });
    $.__views.__alloyId470.add($.__views.__alloyId471);
=======
        id: "__alloyId207"
    });
    $.__views.__alloyId206.add($.__views.__alloyId207);
>>>>>>> Stashed changes
=======
        id: "__alloyId469"
    });
    $.__views.__alloyId468.add($.__views.__alloyId469);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.row4 = Ti.UI.createView({
        id: "row4",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
<<<<<<< HEAD
    $.__views.__alloyId442.add($.__views.row4);
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
    $.__views.__alloyId444.add($.__views.row4);
=======
    $.__views.__alloyId442.add($.__views.row4);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    row4 ? $.__views.row4.addEventListener("click", row4) : __defers["$.__views.row4!click!row4"] = true;
    $.__views.__alloyId470 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId470"
    });
    $.__views.row4.add($.__views.__alloyId470);
    $.__views.__alloyId471 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId471"
    });
<<<<<<< HEAD
    $.__views.__alloyId470.add($.__views.__alloyId471);
    $.__views.__alloyId472 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId472.add($.__views.__alloyId473);
    $.__views.__alloyId474 = Ti.UI.createLabel({
=======
    $.__views.__alloyId180.add($.__views.row4);
    row4 ? $.__views.row4.addEventListener("click", row4) : __defers["$.__views.row4!click!row4"] = true;
    $.__views.__alloyId208 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId208"
    });
    $.__views.row4.add($.__views.__alloyId208);
    $.__views.__alloyId209 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId209"
    });
    $.__views.__alloyId208.add($.__views.__alloyId209);
    $.__views.__alloyId210 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId470.add($.__views.__alloyId471);
    $.__views.__alloyId472 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId472"
    });
    $.__views.__alloyId471.add($.__views.__alloyId472);
    $.__views.__alloyId473 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId474"
    });
    $.__views.__alloyId473.add($.__views.__alloyId474);
    $.__views.__alloyId475 = Ti.UI.createView({
=======
        id: "__alloyId210"
    });
    $.__views.__alloyId209.add($.__views.__alloyId210);
    $.__views.__alloyId211 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId472"
    });
    $.__views.__alloyId471.add($.__views.__alloyId472);
    $.__views.__alloyId473 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
        id: "__alloyId473"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId475"
=======
        id: "__alloyId473"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId471.add($.__views.__alloyId473);
    $.__views.__alloyId474 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId474"
    });
<<<<<<< HEAD
    $.__views.__alloyId470.add($.__views.__alloyId474);
    $.__views.__alloyId475 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
    $.__views.__alloyId472.add($.__views.__alloyId476);
    $.__views.__alloyId477 = Ti.UI.createImageView({
=======
        id: "__alloyId211"
    });
    $.__views.__alloyId209.add($.__views.__alloyId211);
    $.__views.__alloyId212 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId212"
    });
    $.__views.__alloyId208.add($.__views.__alloyId212);
    $.__views.__alloyId213 = Ti.UI.createImageView({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId470.add($.__views.__alloyId474);
    $.__views.__alloyId475 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
<<<<<<< HEAD
        id: "__alloyId475"
    });
    $.__views.__alloyId474.add($.__views.__alloyId475);
    $.__views.__alloyId476 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId477"
    });
    $.__views.__alloyId476.add($.__views.__alloyId477);
    $.__views.__alloyId478 = Ti.UI.createView({
=======
        id: "__alloyId213"
    });
    $.__views.__alloyId212.add($.__views.__alloyId213);
    $.__views.__alloyId214 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId475"
    });
    $.__views.__alloyId474.add($.__views.__alloyId475);
    $.__views.__alloyId476 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
        id: "__alloyId476"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId478"
=======
        id: "__alloyId476"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId474.add($.__views.__alloyId476);
    $.__views.__alloyId477 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId477"
    });
<<<<<<< HEAD
    $.__views.row4.add($.__views.__alloyId477);
    $.__views.__alloyId478 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.row4.add($.__views.__alloyId479);
    $.__views.__alloyId480 = Ti.UI.createLabel({
=======
        id: "__alloyId214"
    });
    $.__views.__alloyId212.add($.__views.__alloyId214);
    $.__views.__alloyId215 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId215"
    });
    $.__views.row4.add($.__views.__alloyId215);
    $.__views.__alloyId216 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.row4.add($.__views.__alloyId477);
    $.__views.__alloyId478 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId478"
    });
    $.__views.__alloyId477.add($.__views.__alloyId478);
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId480"
    });
    $.__views.__alloyId479.add($.__views.__alloyId480);
=======
        id: "__alloyId216"
    });
    $.__views.__alloyId215.add($.__views.__alloyId216);
>>>>>>> Stashed changes
=======
        id: "__alloyId478"
    });
    $.__views.__alloyId477.add($.__views.__alloyId478);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.row5 = Ti.UI.createView({
        id: "row5",
        layout: "vertical",
        height: "50",
        backgroundColor: "white"
    });
<<<<<<< HEAD
    $.__views.__alloyId442.add($.__views.row5);
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
    $.__views.__alloyId444.add($.__views.row5);
=======
    $.__views.__alloyId442.add($.__views.row5);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    row5 ? $.__views.row5.addEventListener("click", row5) : __defers["$.__views.row5!click!row5"] = true;
    $.__views.__alloyId479 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId479"
    });
    $.__views.row5.add($.__views.__alloyId479);
    $.__views.__alloyId480 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId480"
    });
<<<<<<< HEAD
    $.__views.__alloyId479.add($.__views.__alloyId480);
    $.__views.__alloyId481 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId481.add($.__views.__alloyId482);
    $.__views.__alloyId483 = Ti.UI.createLabel({
=======
    $.__views.__alloyId180.add($.__views.row5);
    row5 ? $.__views.row5.addEventListener("click", row5) : __defers["$.__views.row5!click!row5"] = true;
    $.__views.__alloyId217 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId217"
    });
    $.__views.row5.add($.__views.__alloyId217);
    $.__views.__alloyId218 = Ti.UI.createView({
        height: "100%",
        width: "85%",
        id: "__alloyId218"
    });
    $.__views.__alloyId217.add($.__views.__alloyId218);
    $.__views.__alloyId219 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId479.add($.__views.__alloyId480);
    $.__views.__alloyId481 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "What is the Self Care Hotline?",
        textAlign: "left",
        color: "black",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId481"
    });
    $.__views.__alloyId480.add($.__views.__alloyId481);
    $.__views.__alloyId482 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId483"
    });
    $.__views.__alloyId482.add($.__views.__alloyId483);
    $.__views.__alloyId484 = Ti.UI.createView({
=======
        id: "__alloyId219"
    });
    $.__views.__alloyId218.add($.__views.__alloyId219);
    $.__views.__alloyId220 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId481"
    });
    $.__views.__alloyId480.add($.__views.__alloyId481);
    $.__views.__alloyId482 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
        id: "__alloyId482"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId484"
=======
        id: "__alloyId482"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId480.add($.__views.__alloyId482);
    $.__views.__alloyId483 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId483"
    });
<<<<<<< HEAD
    $.__views.__alloyId479.add($.__views.__alloyId483);
    $.__views.__alloyId484 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
    $.__views.__alloyId481.add($.__views.__alloyId485);
    $.__views.__alloyId486 = Ti.UI.createImageView({
=======
        id: "__alloyId220"
    });
    $.__views.__alloyId218.add($.__views.__alloyId220);
    $.__views.__alloyId221 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId221"
    });
    $.__views.__alloyId217.add($.__views.__alloyId221);
    $.__views.__alloyId222 = Ti.UI.createImageView({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId479.add($.__views.__alloyId483);
    $.__views.__alloyId484 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15",
        right: "10",
<<<<<<< HEAD
        id: "__alloyId484"
    });
    $.__views.__alloyId483.add($.__views.__alloyId484);
    $.__views.__alloyId485 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId486"
    });
    $.__views.__alloyId485.add($.__views.__alloyId486);
    $.__views.__alloyId487 = Ti.UI.createView({
=======
        id: "__alloyId222"
    });
    $.__views.__alloyId221.add($.__views.__alloyId222);
    $.__views.__alloyId223 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId484"
    });
    $.__views.__alloyId483.add($.__views.__alloyId484);
    $.__views.__alloyId485 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "#F5F5F5",
        height: "2",
        width: Ti.UI.FILL,
        bottom: "0",
<<<<<<< HEAD
        id: "__alloyId485"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId487"
=======
        id: "__alloyId485"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId483.add($.__views.__alloyId485);
    $.__views.__alloyId486 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId486"
    });
<<<<<<< HEAD
    $.__views.row5.add($.__views.__alloyId486);
    $.__views.__alloyId487 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.row5.add($.__views.__alloyId488);
    $.__views.__alloyId489 = Ti.UI.createLabel({
=======
        id: "__alloyId223"
    });
    $.__views.__alloyId221.add($.__views.__alloyId223);
    $.__views.__alloyId224 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "composite",
        backgroundColor: "#F5F5F5",
        id: "__alloyId224"
    });
    $.__views.row5.add($.__views.__alloyId224);
    $.__views.__alloyId225 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.row5.add($.__views.__alloyId486);
    $.__views.__alloyId487 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)Petaling Jaya (Jaya One)",
        width: "90%",
        backgroundColor: "white",
        textAlign: "left",
        bottom: "2",
        right: "0",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId487"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId489"
=======
        id: "__alloyId487"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId486.add($.__views.__alloyId487);
    exports.destroy = function() {};
    _.extend($, $.__views);
<<<<<<< HEAD
    __defers["$.__views.__alloyId441!click!back"] && $.__views.__alloyId441.addEventListener("click", back);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId443!click!back"] && $.__views.__alloyId443.addEventListener("click", back);
=======
        id: "__alloyId225"
    });
    $.__views.__alloyId224.add($.__views.__alloyId225);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId179!click!back"] && $.__views.__alloyId179.addEventListener("click", back);
>>>>>>> Stashed changes
=======
    __defers["$.__views.__alloyId441!click!back"] && $.__views.__alloyId441.addEventListener("click", back);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    __defers["$.__views.row1!click!row1"] && $.__views.row1.addEventListener("click", row1);
    __defers["$.__views.row2!click!row2"] && $.__views.row2.addEventListener("click", row2);
    __defers["$.__views.row3!click!row3"] && $.__views.row3.addEventListener("click", row3);
    __defers["$.__views.row4!click!row4"] && $.__views.row4.addEventListener("click", row4);
    __defers["$.__views.row5!click!row5"] && $.__views.row5.addEventListener("click", row5);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;