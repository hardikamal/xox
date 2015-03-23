function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function faq() {
        DRAWER.navigation("faq", 2);
    }
    function accDetail() {
        DRAWER.navigation("accountDetails", 2);
    }
    function payment() {
        DRAWER.navigation("payment", 2);
    }
    function subline() {
        DRAWER.navigation("subline", 2);
    }
    function vas() {
        DRAWER.navigation("vas", 2);
    }
    function seasonPass() {
        DRAWER.navigation("seasonPass", 2);
    }
    function loyalty() {
        DRAWER.navigation("loyalty", 2);
    }
    function report() {
        DRAWER.navigation("report", 2);
    }
    function editPhoto() {
        console.log("editPhoto");
        $.photo.zIndex = 2;
    }
    function close() {
        console.log("close");
        $.photo.zIndex = 0;
    }
    function gallery() {
        console.log("gallery");
        $.photo.zIndex = 0;
    }
    function facebook() {
        console.log("facebook");
        $.photo.zIndex = 0;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "myAccount";
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
    $.__views.myAccount = Ti.UI.createView({
        backgroundColor: "black",
        layout: "composite",
        id: "myAccount"
    });
    $.__views.myAccount && $.addTopLevelView($.__views.myAccount);
<<<<<<< HEAD
    $.__views.__alloyId394 = Alloy.createController("_header", {
        id: "__alloyId394",
        __parentSymbol: $.__views.myAccount
    });
    $.__views.__alloyId394.setParent($.__views.myAccount);
=======
    $.__views.__alloyId284 = Alloy.createController("_header", {
        id: "__alloyId284",
        __parentSymbol: $.__views.myAccount
    });
    $.__views.__alloyId284.setParent($.__views.myAccount);
>>>>>>> origin/master
    $.__views.photo = Ti.UI.createView({
        id: "photo",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.myAccount.add($.__views.photo);
<<<<<<< HEAD
    $.__views.__alloyId395 = Ti.UI.createView({
=======
    $.__views.__alloyId285 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        width: "80%",
        height: "40%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId395"
    });
    $.__views.photo.add($.__views.__alloyId395);
    $.__views.__alloyId396 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId396"
    });
    $.__views.__alloyId395.add($.__views.__alloyId396);
    $.__views.__alloyId397 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "#E6E7E9",
        id: "__alloyId397"
    });
    $.__views.__alloyId396.add($.__views.__alloyId397);
    $.__views.__alloyId398 = Ti.UI.createImageView({
=======
        id: "__alloyId285"
    });
    $.__views.photo.add($.__views.__alloyId285);
    $.__views.__alloyId286 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId286"
    });
    $.__views.__alloyId285.add($.__views.__alloyId286);
    $.__views.__alloyId287 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "#E6E7E9",
        id: "__alloyId287"
    });
    $.__views.__alloyId286.add($.__views.__alloyId287);
    $.__views.__alloyId288 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId398"
    });
    $.__views.__alloyId396.add($.__views.__alloyId398);
    close ? $.__views.__alloyId398.addEventListener("click", close) : __defers["$.__views.__alloyId398!click!close"] = true;
    $.__views.__alloyId399 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId399"
    });
    $.__views.__alloyId395.add($.__views.__alloyId399);
    gallery ? $.__views.__alloyId399.addEventListener("click", gallery) : __defers["$.__views.__alloyId399!click!gallery"] = true;
    $.__views.__alloyId400 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        id: "__alloyId400"
    });
    $.__views.__alloyId399.add($.__views.__alloyId400);
    $.__views.__alloyId401 = Ti.UI.createImageView({
=======
        id: "__alloyId288"
    });
    $.__views.__alloyId286.add($.__views.__alloyId288);
    close ? $.__views.__alloyId288.addEventListener("click", close) : __defers["$.__views.__alloyId288!click!close"] = true;
    $.__views.__alloyId289 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId289"
    });
    $.__views.__alloyId285.add($.__views.__alloyId289);
    gallery ? $.__views.__alloyId289.addEventListener("click", gallery) : __defers["$.__views.__alloyId289!click!gallery"] = true;
    $.__views.__alloyId290 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        id: "__alloyId290"
    });
    $.__views.__alloyId289.add($.__views.__alloyId290);
    $.__views.__alloyId291 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "32",
        height: "32",
        left: "10",
        image: "/images/gallery_icon.png",
<<<<<<< HEAD
        id: "__alloyId401"
    });
    $.__views.__alloyId400.add($.__views.__alloyId401);
    $.__views.__alloyId402 = Ti.UI.createView({
        id: "__alloyId402"
    });
    $.__views.__alloyId399.add($.__views.__alloyId402);
    $.__views.__alloyId403 = Ti.UI.createLabel({
=======
        id: "__alloyId291"
    });
    $.__views.__alloyId290.add($.__views.__alloyId291);
    $.__views.__alloyId292 = Ti.UI.createView({
        id: "__alloyId292"
    });
    $.__views.__alloyId289.add($.__views.__alloyId292);
    $.__views.__alloyId293 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Photo Gallery",
        color: "white",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId403"
    });
    $.__views.__alloyId402.add($.__views.__alloyId403);
    $.__views.__alloyId404 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#3E6AC3",
        id: "__alloyId404"
    });
    $.__views.__alloyId395.add($.__views.__alloyId404);
    facebook ? $.__views.__alloyId404.addEventListener("click", facebook) : __defers["$.__views.__alloyId404!click!facebook"] = true;
    $.__views.__alloyId405 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        id: "__alloyId405"
    });
    $.__views.__alloyId404.add($.__views.__alloyId405);
    $.__views.__alloyId406 = Ti.UI.createImageView({
=======
        id: "__alloyId293"
    });
    $.__views.__alloyId292.add($.__views.__alloyId293);
    $.__views.__alloyId294 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#3E6AC3",
        id: "__alloyId294"
    });
    $.__views.__alloyId285.add($.__views.__alloyId294);
    facebook ? $.__views.__alloyId294.addEventListener("click", facebook) : __defers["$.__views.__alloyId294!click!facebook"] = true;
    $.__views.__alloyId295 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        id: "__alloyId295"
    });
    $.__views.__alloyId294.add($.__views.__alloyId295);
    $.__views.__alloyId296 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "32",
        height: "32",
        left: "10",
        image: "/images/facebook_icon.png",
<<<<<<< HEAD
        id: "__alloyId406"
    });
    $.__views.__alloyId405.add($.__views.__alloyId406);
    $.__views.__alloyId407 = Ti.UI.createView({
        id: "__alloyId407"
    });
    $.__views.__alloyId404.add($.__views.__alloyId407);
    $.__views.__alloyId408 = Ti.UI.createLabel({
=======
        id: "__alloyId296"
    });
    $.__views.__alloyId295.add($.__views.__alloyId296);
    $.__views.__alloyId297 = Ti.UI.createView({
        id: "__alloyId297"
    });
    $.__views.__alloyId294.add($.__views.__alloyId297);
    $.__views.__alloyId298 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Connect with Facebook",
        color: "white",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId408"
    });
    $.__views.__alloyId407.add($.__views.__alloyId408);
    $.__views.__alloyId409 = Ti.UI.createView({
=======
        id: "__alloyId298"
    });
    $.__views.__alloyId297.add($.__views.__alloyId298);
    $.__views.__alloyId299 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        backgroundColor: "black",
        top: "50",
        zIndex: "1",
<<<<<<< HEAD
        id: "__alloyId409"
    });
    $.__views.myAccount.add($.__views.__alloyId409);
    $.__views.__alloyId410 = Ti.UI.createView({
=======
        id: "__alloyId299"
    });
    $.__views.myAccount.add($.__views.__alloyId299);
    $.__views.__alloyId300 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        backgroundColor: "red",
<<<<<<< HEAD
        id: "__alloyId410"
    });
    $.__views.__alloyId409.add($.__views.__alloyId410);
    $.__views.__alloyId411 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId411"
    });
    $.__views.__alloyId410.add($.__views.__alloyId411);
    $.__views.__alloyId412 = Ti.UI.createLabel({
=======
        id: "__alloyId300"
    });
    $.__views.__alloyId299.add($.__views.__alloyId300);
    $.__views.__alloyId301 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId301"
    });
    $.__views.__alloyId300.add($.__views.__alloyId301);
    $.__views.__alloyId302 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Hello!",
        color: "white",
        left: "10",
        top: "10",
<<<<<<< HEAD
        id: "__alloyId412"
    });
    $.__views.__alloyId411.add($.__views.__alloyId412);
    $.__views.__alloyId413 = Ti.UI.createLabel({
=======
        id: "__alloyId302"
    });
    $.__views.__alloyId301.add($.__views.__alloyId302);
    $.__views.__alloyId303 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "John Smith",
        color: "white",
        left: "10",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId413"
    });
    $.__views.__alloyId411.add($.__views.__alloyId413);
    $.__views.__alloyId414 = Ti.UI.createView({
        width: "33%",
        id: "__alloyId414"
    });
    $.__views.__alloyId410.add($.__views.__alloyId414);
    $.__views.__alloyId415 = Ti.UI.createView({
        width: "auto",
        height: Ti.UI.FILL,
        id: "__alloyId415"
    });
    $.__views.__alloyId410.add($.__views.__alloyId415);
    $.__views.__alloyId416 = Ti.UI.createImageView({
=======
        id: "__alloyId303"
    });
    $.__views.__alloyId301.add($.__views.__alloyId303);
    $.__views.__alloyId304 = Ti.UI.createView({
        width: "33%",
        id: "__alloyId304"
    });
    $.__views.__alloyId300.add($.__views.__alloyId304);
    $.__views.__alloyId305 = Ti.UI.createView({
        width: "auto",
        height: Ti.UI.FILL,
        id: "__alloyId305"
    });
    $.__views.__alloyId300.add($.__views.__alloyId305);
    $.__views.__alloyId306 = Ti.UI.createImageView({
>>>>>>> origin/master
        width: "80",
        height: "80",
        image: "/images/profile_images.png",
        borderRadius: "40",
<<<<<<< HEAD
        id: "__alloyId416"
    });
    $.__views.__alloyId415.add($.__views.__alloyId416);
    editPhoto ? $.__views.__alloyId416.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId416!click!editPhoto"] = true;
    $.__views.__alloyId417 = Ti.UI.createImageView({
=======
        id: "__alloyId306"
    });
    $.__views.__alloyId305.add($.__views.__alloyId306);
    editPhoto ? $.__views.__alloyId306.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId306!click!editPhoto"] = true;
    $.__views.__alloyId307 = Ti.UI.createImageView({
>>>>>>> origin/master
        width: "20",
        height: "20",
        image: "/images/profileedit_icon.png",
        borderRadius: "10",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId417"
    });
    $.__views.__alloyId415.add($.__views.__alloyId417);
    editPhoto ? $.__views.__alloyId417.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId417!click!editPhoto"] = true;
    $.__views.__alloyId418 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#F5F5F5",
        id: "__alloyId418"
    });
    $.__views.__alloyId409.add($.__views.__alloyId418);
    $.__views.__alloyId419 = Ti.UI.createView({
        layout: "composite",
        width: "50%",
        id: "__alloyId419"
    });
    $.__views.__alloyId418.add($.__views.__alloyId419);
    $.__views.__alloyId420 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId420"
    });
    $.__views.__alloyId419.add($.__views.__alloyId420);
    $.__views.__alloyId421 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "#878787",
        left: "10",
        id: "__alloyId421"
    });
    $.__views.__alloyId420.add($.__views.__alloyId421);
    $.__views.__alloyId422 = Ti.UI.createLabel({
        text: "85.05",
        color: "black",
        left: "10",
        id: "__alloyId422"
    });
    $.__views.__alloyId420.add($.__views.__alloyId422);
    $.__views.__alloyId423 = Ti.UI.createView({
        layout: "composite",
        width: "auto",
        id: "__alloyId423"
    });
    $.__views.__alloyId418.add($.__views.__alloyId423);
    $.__views.__alloyId424 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId424"
    });
    $.__views.__alloyId423.add($.__views.__alloyId424);
    $.__views.__alloyId425 = Ti.UI.createLabel({
=======
        id: "__alloyId307"
    });
    $.__views.__alloyId305.add($.__views.__alloyId307);
    editPhoto ? $.__views.__alloyId307.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId307!click!editPhoto"] = true;
    $.__views.__alloyId308 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#F5F5F5",
        id: "__alloyId308"
    });
    $.__views.__alloyId299.add($.__views.__alloyId308);
    $.__views.__alloyId309 = Ti.UI.createView({
        layout: "composite",
        width: "50%",
        id: "__alloyId309"
    });
    $.__views.__alloyId308.add($.__views.__alloyId309);
    $.__views.__alloyId310 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId310"
    });
    $.__views.__alloyId309.add($.__views.__alloyId310);
    $.__views.__alloyId311 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "#878787",
        left: "10",
        id: "__alloyId311"
    });
    $.__views.__alloyId310.add($.__views.__alloyId311);
    $.__views.__alloyId312 = Ti.UI.createLabel({
        text: "85.05",
        color: "black",
        left: "10",
        id: "__alloyId312"
    });
    $.__views.__alloyId310.add($.__views.__alloyId312);
    $.__views.__alloyId313 = Ti.UI.createView({
        layout: "composite",
        width: "auto",
        id: "__alloyId313"
    });
    $.__views.__alloyId308.add($.__views.__alloyId313);
    $.__views.__alloyId314 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId314"
    });
    $.__views.__alloyId313.add($.__views.__alloyId314);
    $.__views.__alloyId315 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Expiry Date",
        color: "#878787",
        left: "10",
        bottom: "2.5",
<<<<<<< HEAD
        id: "__alloyId425"
    });
    $.__views.__alloyId424.add($.__views.__alloyId425);
    $.__views.__alloyId426 = Ti.UI.createLabel({
=======
        id: "__alloyId315"
    });
    $.__views.__alloyId314.add($.__views.__alloyId315);
    $.__views.__alloyId316 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "1 Dec 2015",
        color: "black",
        left: "10",
        top: "2.5",
<<<<<<< HEAD
        id: "__alloyId426"
    });
    $.__views.__alloyId424.add($.__views.__alloyId426);
    $.__views.__alloyId427 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId427"
    });
    $.__views.__alloyId409.add($.__views.__alloyId427);
    $.__views.__alloyId428 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId428"
    });
    $.__views.__alloyId427.add($.__views.__alloyId428);
    $.__views.__alloyId429 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId429"
    });
    $.__views.__alloyId428.add($.__views.__alloyId429);
    $.__views.__alloyId430 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId430"
    });
    $.__views.__alloyId429.add($.__views.__alloyId430);
    accDetail ? $.__views.__alloyId430.addEventListener("click", accDetail) : __defers["$.__views.__alloyId430!click!accDetail"] = true;
    $.__views.__alloyId431 = Ti.UI.createView({
=======
        id: "__alloyId316"
    });
    $.__views.__alloyId314.add($.__views.__alloyId316);
    $.__views.__alloyId317 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId317"
    });
    $.__views.__alloyId299.add($.__views.__alloyId317);
    $.__views.__alloyId318 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId318"
    });
    $.__views.__alloyId317.add($.__views.__alloyId318);
    $.__views.__alloyId319 = Ti.UI.createView({
>>>>>>> origin/master
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId431"
    });
<<<<<<< HEAD
    $.__views.__alloyId428.add($.__views.__alloyId431);
    $.__views.__alloyId432 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId432"
    });
    $.__views.__alloyId431.add($.__views.__alloyId432);
    payment ? $.__views.__alloyId432.addEventListener("click", payment) : __defers["$.__views.__alloyId432!click!payment"] = true;
    $.__views.__alloyId433 = Ti.UI.createView({
=======
    $.__views.__alloyId318.add($.__views.__alloyId319);
    $.__views.__alloyId320 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId320"
    });
    $.__views.__alloyId319.add($.__views.__alloyId320);
    accDetail ? $.__views.__alloyId320.addEventListener("click", accDetail) : __defers["$.__views.__alloyId320!click!accDetail"] = true;
    $.__views.__alloyId321 = Ti.UI.createView({
>>>>>>> origin/master
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId433"
    });
<<<<<<< HEAD
    $.__views.__alloyId428.add($.__views.__alloyId433);
    $.__views.__alloyId434 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_04.png",
        id: "__alloyId434"
    });
    $.__views.__alloyId433.add($.__views.__alloyId434);
    subline ? $.__views.__alloyId434.addEventListener("click", subline) : __defers["$.__views.__alloyId434!click!subline"] = true;
    $.__views.__alloyId435 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId435"
    });
    $.__views.__alloyId427.add($.__views.__alloyId435);
    $.__views.__alloyId436 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId436"
    });
    $.__views.__alloyId435.add($.__views.__alloyId436);
    $.__views.__alloyId437 = Ti.UI.createLabel({
        text: "Account Details",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId437"
    });
    $.__views.__alloyId436.add($.__views.__alloyId437);
    accDetail ? $.__views.__alloyId437.addEventListener("click", accDetail) : __defers["$.__views.__alloyId437!click!accDetail"] = true;
    $.__views.__alloyId438 = Ti.UI.createView({
=======
    $.__views.__alloyId318.add($.__views.__alloyId321);
    $.__views.__alloyId322 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId322"
    });
    $.__views.__alloyId321.add($.__views.__alloyId322);
    payment ? $.__views.__alloyId322.addEventListener("click", payment) : __defers["$.__views.__alloyId322!click!payment"] = true;
    $.__views.__alloyId323 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId323"
    });
    $.__views.__alloyId318.add($.__views.__alloyId323);
    $.__views.__alloyId324 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_04.png",
        id: "__alloyId324"
    });
    $.__views.__alloyId323.add($.__views.__alloyId324);
    subline ? $.__views.__alloyId324.addEventListener("click", subline) : __defers["$.__views.__alloyId324!click!subline"] = true;
    $.__views.__alloyId325 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId325"
    });
    $.__views.__alloyId317.add($.__views.__alloyId325);
    $.__views.__alloyId326 = Ti.UI.createView({
>>>>>>> origin/master
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId438"
    });
<<<<<<< HEAD
    $.__views.__alloyId435.add($.__views.__alloyId438);
    $.__views.__alloyId439 = Ti.UI.createLabel({
        text: "Payment",
=======
    $.__views.__alloyId325.add($.__views.__alloyId326);
    $.__views.__alloyId327 = Ti.UI.createLabel({
        text: "Account Details",
>>>>>>> origin/master
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId439"
    });
<<<<<<< HEAD
    $.__views.__alloyId438.add($.__views.__alloyId439);
    payment ? $.__views.__alloyId439.addEventListener("click", payment) : __defers["$.__views.__alloyId439!click!payment"] = true;
    $.__views.__alloyId440 = Ti.UI.createView({
=======
    $.__views.__alloyId326.add($.__views.__alloyId327);
    accDetail ? $.__views.__alloyId327.addEventListener("click", accDetail) : __defers["$.__views.__alloyId327!click!accDetail"] = true;
    $.__views.__alloyId328 = Ti.UI.createView({
>>>>>>> origin/master
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId440"
    });
<<<<<<< HEAD
    $.__views.__alloyId435.add($.__views.__alloyId440);
    $.__views.__alloyId441 = Ti.UI.createLabel({
        text: "Subline Management",
=======
    $.__views.__alloyId325.add($.__views.__alloyId328);
    $.__views.__alloyId329 = Ti.UI.createLabel({
        text: "Payment",
>>>>>>> origin/master
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId441"
    });
<<<<<<< HEAD
    $.__views.__alloyId440.add($.__views.__alloyId441);
    subline ? $.__views.__alloyId441.addEventListener("click", subline) : __defers["$.__views.__alloyId441!click!subline"] = true;
    $.__views.__alloyId442 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId442"
    });
    $.__views.__alloyId427.add($.__views.__alloyId442);
    $.__views.__alloyId443 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId443"
    });
    $.__views.__alloyId442.add($.__views.__alloyId443);
    $.__views.__alloyId444 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId444"
    });
    $.__views.__alloyId443.add($.__views.__alloyId444);
    vas ? $.__views.__alloyId444.addEventListener("click", vas) : __defers["$.__views.__alloyId444!click!vas"] = true;
    $.__views.__alloyId445 = Ti.UI.createView({
=======
    $.__views.__alloyId328.add($.__views.__alloyId329);
    payment ? $.__views.__alloyId329.addEventListener("click", payment) : __defers["$.__views.__alloyId329!click!payment"] = true;
    $.__views.__alloyId330 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId330"
    });
    $.__views.__alloyId325.add($.__views.__alloyId330);
    $.__views.__alloyId331 = Ti.UI.createLabel({
        text: "Subline Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId331"
    });
    $.__views.__alloyId330.add($.__views.__alloyId331);
    subline ? $.__views.__alloyId331.addEventListener("click", subline) : __defers["$.__views.__alloyId331!click!subline"] = true;
    $.__views.__alloyId332 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId332"
    });
    $.__views.__alloyId317.add($.__views.__alloyId332);
    $.__views.__alloyId333 = Ti.UI.createView({
>>>>>>> origin/master
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId445"
    });
<<<<<<< HEAD
    $.__views.__alloyId442.add($.__views.__alloyId445);
    $.__views.__alloyId446 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_06.png",
        id: "__alloyId446"
    });
    $.__views.__alloyId445.add($.__views.__alloyId446);
    seasonPass ? $.__views.__alloyId446.addEventListener("click", seasonPass) : __defers["$.__views.__alloyId446!click!seasonPass"] = true;
    $.__views.__alloyId447 = Ti.UI.createView({
=======
    $.__views.__alloyId332.add($.__views.__alloyId333);
    $.__views.__alloyId334 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId334"
    });
    $.__views.__alloyId333.add($.__views.__alloyId334);
    vas ? $.__views.__alloyId334.addEventListener("click", vas) : __defers["$.__views.__alloyId334!click!vas"] = true;
    $.__views.__alloyId335 = Ti.UI.createView({
>>>>>>> origin/master
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId447"
    });
<<<<<<< HEAD
    $.__views.__alloyId442.add($.__views.__alloyId447);
    $.__views.__alloyId448 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId448"
    });
    $.__views.__alloyId447.add($.__views.__alloyId448);
    loyalty ? $.__views.__alloyId448.addEventListener("click", loyalty) : __defers["$.__views.__alloyId448!click!loyalty"] = true;
    $.__views.__alloyId449 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId449"
    });
    $.__views.__alloyId427.add($.__views.__alloyId449);
    $.__views.__alloyId450 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId450"
    });
    $.__views.__alloyId449.add($.__views.__alloyId450);
    $.__views.__alloyId451 = Ti.UI.createLabel({
        text: "VAS Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId451"
    });
    $.__views.__alloyId450.add($.__views.__alloyId451);
    vas ? $.__views.__alloyId451.addEventListener("click", vas) : __defers["$.__views.__alloyId451!click!vas"] = true;
    $.__views.__alloyId452 = Ti.UI.createView({
=======
    $.__views.__alloyId332.add($.__views.__alloyId335);
    $.__views.__alloyId336 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_06.png",
        id: "__alloyId336"
    });
    $.__views.__alloyId335.add($.__views.__alloyId336);
    seasonPass ? $.__views.__alloyId336.addEventListener("click", seasonPass) : __defers["$.__views.__alloyId336!click!seasonPass"] = true;
    $.__views.__alloyId337 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId337"
    });
    $.__views.__alloyId332.add($.__views.__alloyId337);
    $.__views.__alloyId338 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId338"
    });
    $.__views.__alloyId337.add($.__views.__alloyId338);
    loyalty ? $.__views.__alloyId338.addEventListener("click", loyalty) : __defers["$.__views.__alloyId338!click!loyalty"] = true;
    $.__views.__alloyId339 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId339"
    });
    $.__views.__alloyId317.add($.__views.__alloyId339);
    $.__views.__alloyId340 = Ti.UI.createView({
>>>>>>> origin/master
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId452"
    });
<<<<<<< HEAD
    $.__views.__alloyId449.add($.__views.__alloyId452);
    $.__views.__alloyId453 = Ti.UI.createLabel({
        text: "Season Pass",
=======
    $.__views.__alloyId339.add($.__views.__alloyId340);
    $.__views.__alloyId341 = Ti.UI.createLabel({
        text: "VAS Management",
>>>>>>> origin/master
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId453"
    });
<<<<<<< HEAD
    $.__views.__alloyId452.add($.__views.__alloyId453);
    seasonPass ? $.__views.__alloyId453.addEventListener("click", seasonPass) : __defers["$.__views.__alloyId453!click!seasonPass"] = true;
    $.__views.__alloyId454 = Ti.UI.createView({
=======
    $.__views.__alloyId340.add($.__views.__alloyId341);
    vas ? $.__views.__alloyId341.addEventListener("click", vas) : __defers["$.__views.__alloyId341!click!vas"] = true;
    $.__views.__alloyId342 = Ti.UI.createView({
>>>>>>> origin/master
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId454"
    });
<<<<<<< HEAD
    $.__views.__alloyId449.add($.__views.__alloyId454);
    $.__views.__alloyId455 = Ti.UI.createLabel({
        text: "Loyalty",
=======
    $.__views.__alloyId339.add($.__views.__alloyId342);
    $.__views.__alloyId343 = Ti.UI.createLabel({
        text: "Season Pass",
>>>>>>> origin/master
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId455"
    });
<<<<<<< HEAD
    $.__views.__alloyId454.add($.__views.__alloyId455);
    loyalty ? $.__views.__alloyId455.addEventListener("click", loyalty) : __defers["$.__views.__alloyId455!click!loyalty"] = true;
    $.__views.__alloyId456 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId456"
    });
    $.__views.__alloyId427.add($.__views.__alloyId456);
    $.__views.__alloyId457 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId457"
    });
    $.__views.__alloyId456.add($.__views.__alloyId457);
    $.__views.__alloyId458 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId458"
    });
    $.__views.__alloyId457.add($.__views.__alloyId458);
    report ? $.__views.__alloyId458.addEventListener("click", report) : __defers["$.__views.__alloyId458!click!report"] = true;
    $.__views.__alloyId459 = Ti.UI.createView({
=======
    $.__views.__alloyId342.add($.__views.__alloyId343);
    seasonPass ? $.__views.__alloyId343.addEventListener("click", seasonPass) : __defers["$.__views.__alloyId343!click!seasonPass"] = true;
    $.__views.__alloyId344 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId344"
    });
    $.__views.__alloyId339.add($.__views.__alloyId344);
    $.__views.__alloyId345 = Ti.UI.createLabel({
        text: "Loyalty",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId345"
    });
    $.__views.__alloyId344.add($.__views.__alloyId345);
    loyalty ? $.__views.__alloyId345.addEventListener("click", loyalty) : __defers["$.__views.__alloyId345!click!loyalty"] = true;
    $.__views.__alloyId346 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId346"
    });
    $.__views.__alloyId317.add($.__views.__alloyId346);
    $.__views.__alloyId347 = Ti.UI.createView({
>>>>>>> origin/master
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId459"
    });
<<<<<<< HEAD
    $.__views.__alloyId456.add($.__views.__alloyId459);
    $.__views.__alloyId460 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_09.png",
        id: "__alloyId460"
    });
    $.__views.__alloyId459.add($.__views.__alloyId460);
    faq ? $.__views.__alloyId460.addEventListener("click", faq) : __defers["$.__views.__alloyId460!click!faq"] = true;
    $.__views.__alloyId461 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId461"
    });
    $.__views.__alloyId427.add($.__views.__alloyId461);
    $.__views.__alloyId462 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId462"
    });
    $.__views.__alloyId461.add($.__views.__alloyId462);
    $.__views.__alloyId463 = Ti.UI.createLabel({
=======
    $.__views.__alloyId346.add($.__views.__alloyId347);
    $.__views.__alloyId348 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId348"
    });
    $.__views.__alloyId347.add($.__views.__alloyId348);
    report ? $.__views.__alloyId348.addEventListener("click", report) : __defers["$.__views.__alloyId348!click!report"] = true;
    $.__views.__alloyId349 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId349"
    });
    $.__views.__alloyId346.add($.__views.__alloyId349);
    $.__views.__alloyId350 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_09.png",
        id: "__alloyId350"
    });
    $.__views.__alloyId349.add($.__views.__alloyId350);
    faq ? $.__views.__alloyId350.addEventListener("click", faq) : __defers["$.__views.__alloyId350!click!faq"] = true;
    $.__views.__alloyId351 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId351"
    });
    $.__views.__alloyId317.add($.__views.__alloyId351);
    $.__views.__alloyId352 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId352"
    });
    $.__views.__alloyId351.add($.__views.__alloyId352);
    $.__views.__alloyId353 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Report Case",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId463"
    });
    $.__views.__alloyId462.add($.__views.__alloyId463);
    report ? $.__views.__alloyId463.addEventListener("click", report) : __defers["$.__views.__alloyId463!click!report"] = true;
    $.__views.__alloyId464 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId464"
    });
    $.__views.__alloyId461.add($.__views.__alloyId464);
    $.__views.__alloyId465 = Ti.UI.createLabel({
=======
        id: "__alloyId353"
    });
    $.__views.__alloyId352.add($.__views.__alloyId353);
    report ? $.__views.__alloyId353.addEventListener("click", report) : __defers["$.__views.__alloyId353!click!report"] = true;
    $.__views.__alloyId354 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId354"
    });
    $.__views.__alloyId351.add($.__views.__alloyId354);
    $.__views.__alloyId355 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "FAQs",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId465"
    });
    $.__views.__alloyId464.add($.__views.__alloyId465);
    faq ? $.__views.__alloyId465.addEventListener("click", faq) : __defers["$.__views.__alloyId465!click!faq"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId398!click!close"] && $.__views.__alloyId398.addEventListener("click", close);
    __defers["$.__views.__alloyId399!click!gallery"] && $.__views.__alloyId399.addEventListener("click", gallery);
    __defers["$.__views.__alloyId404!click!facebook"] && $.__views.__alloyId404.addEventListener("click", facebook);
    __defers["$.__views.__alloyId416!click!editPhoto"] && $.__views.__alloyId416.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId417!click!editPhoto"] && $.__views.__alloyId417.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId430!click!accDetail"] && $.__views.__alloyId430.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId432!click!payment"] && $.__views.__alloyId432.addEventListener("click", payment);
    __defers["$.__views.__alloyId434!click!subline"] && $.__views.__alloyId434.addEventListener("click", subline);
    __defers["$.__views.__alloyId437!click!accDetail"] && $.__views.__alloyId437.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId439!click!payment"] && $.__views.__alloyId439.addEventListener("click", payment);
    __defers["$.__views.__alloyId441!click!subline"] && $.__views.__alloyId441.addEventListener("click", subline);
    __defers["$.__views.__alloyId444!click!vas"] && $.__views.__alloyId444.addEventListener("click", vas);
    __defers["$.__views.__alloyId446!click!seasonPass"] && $.__views.__alloyId446.addEventListener("click", seasonPass);
    __defers["$.__views.__alloyId448!click!loyalty"] && $.__views.__alloyId448.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId451!click!vas"] && $.__views.__alloyId451.addEventListener("click", vas);
    __defers["$.__views.__alloyId453!click!seasonPass"] && $.__views.__alloyId453.addEventListener("click", seasonPass);
    __defers["$.__views.__alloyId455!click!loyalty"] && $.__views.__alloyId455.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId458!click!report"] && $.__views.__alloyId458.addEventListener("click", report);
    __defers["$.__views.__alloyId460!click!faq"] && $.__views.__alloyId460.addEventListener("click", faq);
    __defers["$.__views.__alloyId463!click!report"] && $.__views.__alloyId463.addEventListener("click", report);
    __defers["$.__views.__alloyId465!click!faq"] && $.__views.__alloyId465.addEventListener("click", faq);
=======
        id: "__alloyId355"
    });
    $.__views.__alloyId354.add($.__views.__alloyId355);
    faq ? $.__views.__alloyId355.addEventListener("click", faq) : __defers["$.__views.__alloyId355!click!faq"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId288!click!close"] && $.__views.__alloyId288.addEventListener("click", close);
    __defers["$.__views.__alloyId289!click!gallery"] && $.__views.__alloyId289.addEventListener("click", gallery);
    __defers["$.__views.__alloyId294!click!facebook"] && $.__views.__alloyId294.addEventListener("click", facebook);
    __defers["$.__views.__alloyId306!click!editPhoto"] && $.__views.__alloyId306.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId307!click!editPhoto"] && $.__views.__alloyId307.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId320!click!accDetail"] && $.__views.__alloyId320.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId322!click!payment"] && $.__views.__alloyId322.addEventListener("click", payment);
    __defers["$.__views.__alloyId324!click!subline"] && $.__views.__alloyId324.addEventListener("click", subline);
    __defers["$.__views.__alloyId327!click!accDetail"] && $.__views.__alloyId327.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId329!click!payment"] && $.__views.__alloyId329.addEventListener("click", payment);
    __defers["$.__views.__alloyId331!click!subline"] && $.__views.__alloyId331.addEventListener("click", subline);
    __defers["$.__views.__alloyId334!click!vas"] && $.__views.__alloyId334.addEventListener("click", vas);
    __defers["$.__views.__alloyId336!click!seasonPass"] && $.__views.__alloyId336.addEventListener("click", seasonPass);
    __defers["$.__views.__alloyId338!click!loyalty"] && $.__views.__alloyId338.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId341!click!vas"] && $.__views.__alloyId341.addEventListener("click", vas);
    __defers["$.__views.__alloyId343!click!seasonPass"] && $.__views.__alloyId343.addEventListener("click", seasonPass);
    __defers["$.__views.__alloyId345!click!loyalty"] && $.__views.__alloyId345.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId348!click!report"] && $.__views.__alloyId348.addEventListener("click", report);
    __defers["$.__views.__alloyId350!click!faq"] && $.__views.__alloyId350.addEventListener("click", faq);
    __defers["$.__views.__alloyId353!click!report"] && $.__views.__alloyId353.addEventListener("click", report);
    __defers["$.__views.__alloyId355!click!faq"] && $.__views.__alloyId355.addEventListener("click", faq);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;