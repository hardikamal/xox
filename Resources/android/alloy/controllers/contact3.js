function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function state(e) {
        console.log("state");
        state = e.row.title;
<<<<<<< Updated upstream
=======
        $.stateLabel.text = state;
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
            $.contentView.height = 100;
            $.pickerView.height = 50;
            $.pickerContentView.height = 50;
            $.pickerView.setVisible(false);
            $.done.setVisible(false);
            $.picker.setVisible(false);
        }
    }
    function done() {
        console.log("done");
        $.contentView.height = 100;
        $.pickerView.height = 50;
        $.pickerContentView.height = 50;
        $.pickerView.setVisible(false);
        $.done.setVisible(false);
        $.picker.setVisible(false);
>>>>>>> Stashed changes
    }
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
    var __defers = {};
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        height: "100%",
        scrollType: "vertical",
<<<<<<< Updated upstream
        backgroundColor: "#F4F6F5",
        contentHeight: Ti.UI.SIZE
    });
    $.__views.scrollView && $.addTopLevelView($.__views.scrollView);
    $.__views.__alloyId166 = Ti.UI.createView({
        layout: "vertical",
        height: "100",
        id: "__alloyId166"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId166);
    $.__views.__alloyId167 = Ti.UI.createTextField({
=======
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId168);
    $.__views.__alloyId169 = Ti.UI.createTextField({
=======
        backgroundColor: "#F4F6F5"
    });
    $.__views.scrollView && $.addTopLevelView($.__views.scrollView);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "100"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId123 = Ti.UI.createTextField({
>>>>>>> Stashed changes
=======
    $.__views.scrollView.add($.__views.__alloyId166);
    $.__views.__alloyId167 = Ti.UI.createTextField({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.scrollView.add($.__views.__alloyId166);
    $.__views.__alloyId167 = Ti.UI.createTextField({
>>>>>>> origin/master
        width: "90%",
        height: "30",
        top: "10",
        bottom: "5",
        borderRadius: "15",
<<<<<<< Updated upstream
        textAlign: "left",
        backgroundColor: "#E6E7E9",
        color: "black",
        hintText: "Search keywords on area",
        id: "__alloyId167"
    });
    $.__views.__alloyId166.add($.__views.__alloyId167);
    $.__views.__alloyId168 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId168"
    });
    $.__views.__alloyId166.add($.__views.__alloyId168);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "30",
        borderRadius: "15",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId168.add($.__views.picker);
    var __alloyId169 = [];
    $.__views.__alloyId170 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId170"
    });
    __alloyId169.push($.__views.__alloyId170);
    $.__views.__alloyId171 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId171"
    });
    __alloyId169.push($.__views.__alloyId171);
    $.__views.__alloyId172 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId172"
    });
    __alloyId169.push($.__views.__alloyId172);
    $.__views.__alloyId173 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId173"
    });
    __alloyId169.push($.__views.__alloyId173);
    $.__views.picker.add(__alloyId169);
    state ? $.__views.picker.addEventListener("change", state) : __defers["$.__views.picker!change!state"] = true;
    $.__views.__alloyId174 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId174"
    });
    $.__views.__alloyId168.add($.__views.__alloyId174);
    var __alloyId175 = [];
    $.__views.__alloyId176 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId176"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    __alloyId175.push($.__views.__alloyId176);
    $.__views.__alloyId177 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    __alloyId177.push($.__views.__alloyId178);
    $.__views.__alloyId179 = Ti.UI.createLabel({
=======
        textAlign: "center",
        backgroundColor: "#E6E7E9",
        hintText: "Search keywords on area",
        id: "__alloyId123"
    });
    $.__views.contentView.add($.__views.__alloyId123);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
        width: "90%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.stateLabel = Ti.UI.createLabel({
        id: "stateLabel",
        height: "30",
        width: "100%",
        backgroundColor: "#FCFCFC",
        borderRadius: "15",
        borderColor: "#FCFCFC",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.stateLabel);
    showPicker ? $.__views.stateLabel.addEventListener("click", showPicker) : __defers["$.__views.stateLabel!click!showPicker"] = true;
    $.__views.__alloyId124 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId124"
    });
    $.__views.pickerContentView.add($.__views.__alloyId124);
    showPicker ? $.__views.__alloyId124.addEventListener("click", showPicker) : __defers["$.__views.__alloyId124!click!showPicker"] = true;
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
    var __alloyId125 = [];
    $.__views.__alloyId126 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId126"
    });
    __alloyId125.push($.__views.__alloyId126);
    $.__views.__alloyId127 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId127"
    });
    __alloyId125.push($.__views.__alloyId127);
    $.__views.__alloyId128 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId128"
    });
    __alloyId125.push($.__views.__alloyId128);
    $.__views.__alloyId129 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId129"
    });
    __alloyId125.push($.__views.__alloyId129);
    $.__views.picker.add(__alloyId125);
    state ? $.__views.picker.addEventListener("change", state) : __defers["$.__views.picker!change!state"] = true;
    var __alloyId130 = [];
    $.__views.__alloyId131 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId131"
    });
    __alloyId130.push($.__views.__alloyId131);
    $.__views.__alloyId132 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    __alloyId175.push($.__views.__alloyId176);
    $.__views.__alloyId177 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    __alloyId175.push($.__views.__alloyId176);
    $.__views.__alloyId177 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Petaling Jaya (Jaya One)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId177"
    });
    $.__views.__alloyId176.add($.__views.__alloyId177);
    $.__views.__alloyId178 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId179"
    });
    $.__views.__alloyId178.add($.__views.__alloyId179);
    $.__views.__alloyId180 = Ti.UI.createLabel({
=======
        id: "__alloyId132"
    });
    $.__views.__alloyId131.add($.__views.__alloyId132);
    $.__views.__alloyId133 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId177"
    });
    $.__views.__alloyId176.add($.__views.__alloyId177);
    $.__views.__alloyId178 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId177"
    });
    $.__views.__alloyId176.add($.__views.__alloyId177);
    $.__views.__alloyId178 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "XOX Mobile Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId178"
    });
    $.__views.__alloyId176.add($.__views.__alloyId178);
    $.__views.__alloyId179 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId180"
    });
    $.__views.__alloyId178.add($.__views.__alloyId180);
    $.__views.__alloyId181 = Ti.UI.createLabel({
=======
        id: "__alloyId133"
    });
    $.__views.__alloyId131.add($.__views.__alloyId133);
    $.__views.__alloyId134 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId178"
    });
    $.__views.__alloyId176.add($.__views.__alloyId178);
    $.__views.__alloyId179 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId178"
    });
    $.__views.__alloyId176.add($.__views.__alloyId178);
    $.__views.__alloyId179 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "31-3, Block C, Jaya One,72A, Jalan Universiti, 46200 Petaling Jaya, Selangor Darul Ehsan.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId179"
    });
    $.__views.__alloyId176.add($.__views.__alloyId179);
    $.__views.__alloyId180 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId181"
    });
    $.__views.__alloyId178.add($.__views.__alloyId181);
    $.__views.__alloyId182 = Ti.UI.createLabel({
=======
        id: "__alloyId134"
    });
    $.__views.__alloyId131.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId179"
    });
    $.__views.__alloyId176.add($.__views.__alloyId179);
    $.__views.__alloyId180 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId179"
    });
    $.__views.__alloyId176.add($.__views.__alloyId179);
    $.__views.__alloyId180 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Contact: 03-7962 8000",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId180"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId182"
=======
        id: "__alloyId180"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId180"
>>>>>>> origin/master
    });
    $.__views.__alloyId176.add($.__views.__alloyId180);
    $.__views.__alloyId181 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId181"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    __alloyId175.push($.__views.__alloyId181);
    $.__views.__alloyId182 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    __alloyId177.push($.__views.__alloyId183);
    $.__views.__alloyId184 = Ti.UI.createLabel({
=======
        id: "__alloyId135"
    });
    $.__views.__alloyId131.add($.__views.__alloyId135);
    $.__views.__alloyId136 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId136"
    });
    __alloyId130.push($.__views.__alloyId136);
    $.__views.__alloyId137 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    __alloyId175.push($.__views.__alloyId181);
    $.__views.__alloyId182 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    __alloyId175.push($.__views.__alloyId181);
    $.__views.__alloyId182 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Petaling Jaya (Digital Mall)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId182"
    });
    $.__views.__alloyId181.add($.__views.__alloyId182);
    $.__views.__alloyId183 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId184"
    });
    $.__views.__alloyId183.add($.__views.__alloyId184);
    $.__views.__alloyId185 = Ti.UI.createLabel({
=======
        id: "__alloyId137"
    });
    $.__views.__alloyId136.add($.__views.__alloyId137);
    $.__views.__alloyId138 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId182"
    });
    $.__views.__alloyId181.add($.__views.__alloyId182);
    $.__views.__alloyId183 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId182"
    });
    $.__views.__alloyId181.add($.__views.__alloyId182);
    $.__views.__alloyId183 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "XOX Mobile Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId183"
    });
    $.__views.__alloyId181.add($.__views.__alloyId183);
    $.__views.__alloyId184 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId185"
    });
    $.__views.__alloyId183.add($.__views.__alloyId185);
    $.__views.__alloyId186 = Ti.UI.createLabel({
=======
        id: "__alloyId138"
    });
    $.__views.__alloyId136.add($.__views.__alloyId138);
    $.__views.__alloyId139 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId183"
    });
    $.__views.__alloyId181.add($.__views.__alloyId183);
    $.__views.__alloyId184 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId183"
    });
    $.__views.__alloyId181.add($.__views.__alloyId183);
    $.__views.__alloyId184 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Lot G-03A, Ground Floor Digital Mall PJ, No2 Jalan 14/20 Section 14, 46100 Petaling Jaya, Selangor.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId184"
    });
    $.__views.__alloyId181.add($.__views.__alloyId184);
    $.__views.__alloyId185 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId186"
    });
    $.__views.__alloyId183.add($.__views.__alloyId186);
    $.__views.__alloyId187 = Ti.UI.createLabel({
=======
        id: "__alloyId139"
    });
    $.__views.__alloyId136.add($.__views.__alloyId139);
    $.__views.__alloyId140 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId184"
    });
    $.__views.__alloyId181.add($.__views.__alloyId184);
    $.__views.__alloyId185 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId184"
    });
    $.__views.__alloyId181.add($.__views.__alloyId184);
    $.__views.__alloyId185 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Contact: 010-831 6363",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId185"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId187"
=======
        id: "__alloyId185"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId185"
>>>>>>> origin/master
    });
    $.__views.__alloyId181.add($.__views.__alloyId185);
    $.__views.__alloyId186 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId186"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    __alloyId175.push($.__views.__alloyId186);
    $.__views.__alloyId187 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    __alloyId177.push($.__views.__alloyId188);
    $.__views.__alloyId189 = Ti.UI.createLabel({
=======
        id: "__alloyId140"
    });
    $.__views.__alloyId136.add($.__views.__alloyId140);
    $.__views.__alloyId141 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId141"
    });
    __alloyId130.push($.__views.__alloyId141);
    $.__views.__alloyId142 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    __alloyId175.push($.__views.__alloyId186);
    $.__views.__alloyId187 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    __alloyId175.push($.__views.__alloyId186);
    $.__views.__alloyId187 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "KUALA LUMPUR (Plaza Low Yat)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId187"
    });
    $.__views.__alloyId186.add($.__views.__alloyId187);
    $.__views.__alloyId188 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId189"
    });
    $.__views.__alloyId188.add($.__views.__alloyId189);
    $.__views.__alloyId190 = Ti.UI.createLabel({
=======
        id: "__alloyId142"
    });
    $.__views.__alloyId141.add($.__views.__alloyId142);
    $.__views.__alloyId143 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId187"
    });
    $.__views.__alloyId186.add($.__views.__alloyId187);
    $.__views.__alloyId188 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId187"
    });
    $.__views.__alloyId186.add($.__views.__alloyId187);
    $.__views.__alloyId188 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "XOX Retails Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId188"
    });
    $.__views.__alloyId186.add($.__views.__alloyId188);
    $.__views.__alloyId189 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId190"
    });
    $.__views.__alloyId188.add($.__views.__alloyId190);
    $.__views.__alloyId191 = Ti.UI.createLabel({
=======
        id: "__alloyId143"
    });
    $.__views.__alloyId141.add($.__views.__alloyId143);
    $.__views.__alloyId144 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId188"
    });
    $.__views.__alloyId186.add($.__views.__alloyId188);
    $.__views.__alloyId189 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId188"
    });
    $.__views.__alloyId186.add($.__views.__alloyId188);
    $.__views.__alloyId189 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Plaza Low Yat, 7 Jalan Bintang, Jalan Bukit Bintang, 55100 Kuala Lumpur.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId189"
    });
    $.__views.__alloyId186.add($.__views.__alloyId189);
    $.__views.__alloyId190 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId191"
    });
    $.__views.__alloyId188.add($.__views.__alloyId191);
    $.__views.__alloyId192 = Ti.UI.createLabel({
=======
        id: "__alloyId144"
    });
    $.__views.__alloyId141.add($.__views.__alloyId144);
    $.__views.__alloyId145 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId189"
    });
    $.__views.__alloyId186.add($.__views.__alloyId189);
    $.__views.__alloyId190 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId189"
    });
    $.__views.__alloyId186.add($.__views.__alloyId189);
    $.__views.__alloyId190 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Contact: 010-8666288 / 012-2704222",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId190"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId192"
=======
        id: "__alloyId190"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId190"
>>>>>>> origin/master
    });
    $.__views.__alloyId186.add($.__views.__alloyId190);
    $.__views.__alloyId191 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId191"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    __alloyId175.push($.__views.__alloyId191);
    $.__views.__alloyId192 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    __alloyId177.push($.__views.__alloyId193);
    $.__views.__alloyId194 = Ti.UI.createLabel({
=======
        id: "__alloyId145"
    });
    $.__views.__alloyId141.add($.__views.__alloyId145);
    $.__views.__alloyId146 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId146"
    });
    __alloyId130.push($.__views.__alloyId146);
    $.__views.__alloyId147 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    __alloyId175.push($.__views.__alloyId191);
    $.__views.__alloyId192 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    __alloyId175.push($.__views.__alloyId191);
    $.__views.__alloyId192 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "KUALA LUMPUR (Kepong)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId192"
    });
    $.__views.__alloyId191.add($.__views.__alloyId192);
    $.__views.__alloyId193 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId194"
    });
    $.__views.__alloyId193.add($.__views.__alloyId194);
    $.__views.__alloyId195 = Ti.UI.createLabel({
=======
        id: "__alloyId147"
    });
    $.__views.__alloyId146.add($.__views.__alloyId147);
    $.__views.__alloyId148 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId192"
    });
    $.__views.__alloyId191.add($.__views.__alloyId192);
    $.__views.__alloyId193 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId192"
    });
    $.__views.__alloyId191.add($.__views.__alloyId192);
    $.__views.__alloyId193 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "XOX Mobile Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId193"
    });
    $.__views.__alloyId191.add($.__views.__alloyId193);
    $.__views.__alloyId194 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId195"
    });
    $.__views.__alloyId193.add($.__views.__alloyId195);
    $.__views.__alloyId196 = Ti.UI.createLabel({
=======
        id: "__alloyId148"
    });
    $.__views.__alloyId146.add($.__views.__alloyId148);
    $.__views.__alloyId149 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId193"
    });
    $.__views.__alloyId191.add($.__views.__alloyId193);
    $.__views.__alloyId194 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId193"
    });
    $.__views.__alloyId191.add($.__views.__alloyId193);
    $.__views.__alloyId194 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "33, Jalan Metro Perdana Timur 1, Taman Usahawan Kepong, 52100 Kepong, Kuala Lumpur.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId194"
    });
    $.__views.__alloyId191.add($.__views.__alloyId194);
    $.__views.__alloyId195 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId196"
    });
    $.__views.__alloyId193.add($.__views.__alloyId196);
    $.__views.__alloyId197 = Ti.UI.createLabel({
=======
        id: "__alloyId149"
    });
    $.__views.__alloyId146.add($.__views.__alloyId149);
    $.__views.__alloyId150 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId194"
    });
    $.__views.__alloyId191.add($.__views.__alloyId194);
    $.__views.__alloyId195 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId194"
    });
    $.__views.__alloyId191.add($.__views.__alloyId194);
    $.__views.__alloyId195 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Contact: 03-62503003",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId195"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId197"
=======
        id: "__alloyId195"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId195"
>>>>>>> origin/master
    });
    $.__views.__alloyId191.add($.__views.__alloyId195);
    $.__views.__alloyId196 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId196"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    __alloyId175.push($.__views.__alloyId196);
    $.__views.__alloyId197 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    __alloyId177.push($.__views.__alloyId198);
    $.__views.__alloyId199 = Ti.UI.createLabel({
=======
        id: "__alloyId150"
    });
    $.__views.__alloyId146.add($.__views.__alloyId150);
    $.__views.__alloyId151 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId151"
    });
    __alloyId130.push($.__views.__alloyId151);
    $.__views.__alloyId152 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    __alloyId175.push($.__views.__alloyId196);
    $.__views.__alloyId197 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    __alloyId175.push($.__views.__alloyId196);
    $.__views.__alloyId197 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "KUALA LUMPUR (Pudu)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId197"
    });
    $.__views.__alloyId196.add($.__views.__alloyId197);
    $.__views.__alloyId198 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId199"
    });
    $.__views.__alloyId198.add($.__views.__alloyId199);
    $.__views.__alloyId200 = Ti.UI.createLabel({
=======
        id: "__alloyId152"
    });
    $.__views.__alloyId151.add($.__views.__alloyId152);
    $.__views.__alloyId153 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId197"
    });
    $.__views.__alloyId196.add($.__views.__alloyId197);
    $.__views.__alloyId198 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId197"
    });
    $.__views.__alloyId196.add($.__views.__alloyId197);
    $.__views.__alloyId198 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "XOX Mobile Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId198"
    });
    $.__views.__alloyId196.add($.__views.__alloyId198);
    $.__views.__alloyId199 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId200"
    });
    $.__views.__alloyId198.add($.__views.__alloyId200);
    $.__views.__alloyId201 = Ti.UI.createLabel({
=======
        id: "__alloyId153"
    });
    $.__views.__alloyId151.add($.__views.__alloyId153);
    $.__views.__alloyId154 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId198"
    });
    $.__views.__alloyId196.add($.__views.__alloyId198);
    $.__views.__alloyId199 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId198"
    });
    $.__views.__alloyId196.add($.__views.__alloyId198);
    $.__views.__alloyId199 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "21, Lorong Thambi 2, Off Jalan Changkat Thambi Dollah, Pudu, 55100 Kuala Lumpur.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId199"
    });
    $.__views.__alloyId196.add($.__views.__alloyId199);
    $.__views.__alloyId200 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId201"
    });
    $.__views.__alloyId198.add($.__views.__alloyId201);
    $.__views.__alloyId202 = Ti.UI.createLabel({
=======
        id: "__alloyId154"
    });
    $.__views.__alloyId151.add($.__views.__alloyId154);
    $.__views.__alloyId155 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId199"
    });
    $.__views.__alloyId196.add($.__views.__alloyId199);
    $.__views.__alloyId200 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId199"
    });
    $.__views.__alloyId196.add($.__views.__alloyId199);
    $.__views.__alloyId200 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Contact: 03-21458010",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId200"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId202"
=======
        id: "__alloyId200"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId200"
>>>>>>> origin/master
    });
    $.__views.__alloyId196.add($.__views.__alloyId200);
    $.__views.__alloyId201 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId201"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    __alloyId175.push($.__views.__alloyId201);
    $.__views.__alloyId202 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    __alloyId177.push($.__views.__alloyId203);
    $.__views.__alloyId204 = Ti.UI.createLabel({
=======
        id: "__alloyId155"
    });
    $.__views.__alloyId151.add($.__views.__alloyId155);
    $.__views.__alloyId156 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId156"
    });
    __alloyId130.push($.__views.__alloyId156);
    $.__views.__alloyId157 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    __alloyId175.push($.__views.__alloyId201);
    $.__views.__alloyId202 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    __alloyId175.push($.__views.__alloyId201);
    $.__views.__alloyId202 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "SELANGOR (Puchong)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId202"
    });
    $.__views.__alloyId201.add($.__views.__alloyId202);
    $.__views.__alloyId203 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId204"
    });
    $.__views.__alloyId203.add($.__views.__alloyId204);
    $.__views.__alloyId205 = Ti.UI.createLabel({
=======
        id: "__alloyId157"
    });
    $.__views.__alloyId156.add($.__views.__alloyId157);
    $.__views.__alloyId158 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId202"
    });
    $.__views.__alloyId201.add($.__views.__alloyId202);
    $.__views.__alloyId203 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId202"
    });
    $.__views.__alloyId201.add($.__views.__alloyId202);
    $.__views.__alloyId203 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "XOX Mobile Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId203"
    });
    $.__views.__alloyId201.add($.__views.__alloyId203);
    $.__views.__alloyId204 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId205"
    });
    $.__views.__alloyId203.add($.__views.__alloyId205);
    $.__views.__alloyId206 = Ti.UI.createLabel({
=======
        id: "__alloyId158"
    });
    $.__views.__alloyId156.add($.__views.__alloyId158);
    $.__views.__alloyId159 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId203"
    });
    $.__views.__alloyId201.add($.__views.__alloyId203);
    $.__views.__alloyId204 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId203"
    });
    $.__views.__alloyId201.add($.__views.__alloyId203);
    $.__views.__alloyId204 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "54-G, Jalan Puteri 1/4, Bandar Puteri, 47100 Puchong, Selangor.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId204"
    });
    $.__views.__alloyId201.add($.__views.__alloyId204);
    $.__views.__alloyId205 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId206"
    });
    $.__views.__alloyId203.add($.__views.__alloyId206);
    $.__views.__alloyId207 = Ti.UI.createLabel({
=======
        id: "__alloyId159"
    });
    $.__views.__alloyId156.add($.__views.__alloyId159);
    $.__views.__alloyId160 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId204"
    });
    $.__views.__alloyId201.add($.__views.__alloyId204);
    $.__views.__alloyId205 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId204"
    });
    $.__views.__alloyId201.add($.__views.__alloyId204);
    $.__views.__alloyId205 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Contact: 03-80511568",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId205"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId207"
=======
        id: "__alloyId205"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId205"
>>>>>>> origin/master
    });
    $.__views.__alloyId201.add($.__views.__alloyId205);
    $.__views.__alloyId206 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId206"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    __alloyId175.push($.__views.__alloyId206);
    $.__views.__alloyId207 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    __alloyId177.push($.__views.__alloyId208);
    $.__views.__alloyId209 = Ti.UI.createLabel({
=======
        id: "__alloyId160"
    });
    $.__views.__alloyId156.add($.__views.__alloyId160);
    $.__views.__alloyId161 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId161"
    });
    __alloyId130.push($.__views.__alloyId161);
    $.__views.__alloyId162 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    __alloyId175.push($.__views.__alloyId206);
    $.__views.__alloyId207 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    __alloyId175.push($.__views.__alloyId206);
    $.__views.__alloyId207 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "PENANG (George Town)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId207"
    });
    $.__views.__alloyId206.add($.__views.__alloyId207);
    $.__views.__alloyId208 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId209"
    });
    $.__views.__alloyId208.add($.__views.__alloyId209);
    $.__views.__alloyId210 = Ti.UI.createLabel({
=======
        id: "__alloyId162"
    });
    $.__views.__alloyId161.add($.__views.__alloyId162);
    $.__views.__alloyId163 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId207"
    });
    $.__views.__alloyId206.add($.__views.__alloyId207);
    $.__views.__alloyId208 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId207"
    });
    $.__views.__alloyId206.add($.__views.__alloyId207);
    $.__views.__alloyId208 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "XOX Mobile Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId208"
    });
    $.__views.__alloyId206.add($.__views.__alloyId208);
    $.__views.__alloyId209 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId210"
    });
    $.__views.__alloyId208.add($.__views.__alloyId210);
    $.__views.__alloyId211 = Ti.UI.createLabel({
=======
        id: "__alloyId163"
    });
    $.__views.__alloyId161.add($.__views.__alloyId163);
    $.__views.__alloyId164 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId208"
    });
    $.__views.__alloyId206.add($.__views.__alloyId208);
    $.__views.__alloyId209 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId208"
    });
    $.__views.__alloyId206.add($.__views.__alloyId208);
    $.__views.__alloyId209 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "112, Jalan Terengganu, 10460 Georgetown Penang.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId209"
    });
    $.__views.__alloyId206.add($.__views.__alloyId209);
    $.__views.__alloyId210 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId211"
    });
    $.__views.__alloyId208.add($.__views.__alloyId211);
    $.__views.__alloyId212 = Ti.UI.createLabel({
=======
        id: "__alloyId164"
    });
    $.__views.__alloyId161.add($.__views.__alloyId164);
    $.__views.__alloyId165 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId209"
    });
    $.__views.__alloyId206.add($.__views.__alloyId209);
    $.__views.__alloyId210 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId209"
    });
    $.__views.__alloyId206.add($.__views.__alloyId209);
    $.__views.__alloyId210 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Contact: 04-282 6388 / 04-281 7188",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId210"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId212"
=======
        id: "__alloyId210"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId210"
>>>>>>> origin/master
    });
    $.__views.__alloyId206.add($.__views.__alloyId210);
    $.__views.__alloyId211 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId211"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    __alloyId175.push($.__views.__alloyId211);
    $.__views.__alloyId212 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    __alloyId177.push($.__views.__alloyId213);
    $.__views.__alloyId214 = Ti.UI.createLabel({
=======
        id: "__alloyId165"
    });
    $.__views.__alloyId161.add($.__views.__alloyId165);
    $.__views.__alloyId166 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId166"
    });
    __alloyId130.push($.__views.__alloyId166);
    $.__views.__alloyId167 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    __alloyId175.push($.__views.__alloyId211);
    $.__views.__alloyId212 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    __alloyId175.push($.__views.__alloyId211);
    $.__views.__alloyId212 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "PENANG (George Town)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId212"
    });
    $.__views.__alloyId211.add($.__views.__alloyId212);
    $.__views.__alloyId213 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId214"
    });
    $.__views.__alloyId213.add($.__views.__alloyId214);
    $.__views.__alloyId215 = Ti.UI.createLabel({
=======
        id: "__alloyId167"
    });
    $.__views.__alloyId166.add($.__views.__alloyId167);
    $.__views.__alloyId168 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId212"
    });
    $.__views.__alloyId211.add($.__views.__alloyId212);
    $.__views.__alloyId213 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId212"
    });
    $.__views.__alloyId211.add($.__views.__alloyId212);
    $.__views.__alloyId213 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "XOX Care Centre",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId213"
    });
    $.__views.__alloyId211.add($.__views.__alloyId213);
    $.__views.__alloyId214 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId215"
    });
    $.__views.__alloyId213.add($.__views.__alloyId215);
    $.__views.__alloyId216 = Ti.UI.createLabel({
=======
        id: "__alloyId168"
    });
    $.__views.__alloyId166.add($.__views.__alloyId168);
    $.__views.__alloyId169 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId213"
    });
    $.__views.__alloyId211.add($.__views.__alloyId213);
    $.__views.__alloyId214 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId213"
    });
    $.__views.__alloyId211.add($.__views.__alloyId213);
    $.__views.__alloyId214 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Kiosk G-01 Level 1@ ICT Komtar, Unit 01-4.01 Komtar, Jalan Penang 10000 Georgetown Penang.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId214"
    });
    $.__views.__alloyId211.add($.__views.__alloyId214);
    $.__views.__alloyId215 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId216"
    });
    $.__views.__alloyId213.add($.__views.__alloyId216);
    $.__views.__alloyId217 = Ti.UI.createLabel({
=======
        id: "__alloyId169"
    });
    $.__views.__alloyId166.add($.__views.__alloyId169);
    $.__views.__alloyId170 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId214"
    });
    $.__views.__alloyId211.add($.__views.__alloyId214);
    $.__views.__alloyId215 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId214"
    });
    $.__views.__alloyId211.add($.__views.__alloyId214);
    $.__views.__alloyId215 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Contact: -",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId215"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId217"
=======
        id: "__alloyId215"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId215"
>>>>>>> origin/master
    });
    $.__views.__alloyId211.add($.__views.__alloyId215);
    $.__views.__alloyId216 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId216"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    __alloyId175.push($.__views.__alloyId216);
    $.__views.__alloyId217 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    __alloyId177.push($.__views.__alloyId218);
    $.__views.__alloyId219 = Ti.UI.createLabel({
=======
        id: "__alloyId170"
    });
    $.__views.__alloyId166.add($.__views.__alloyId170);
    $.__views.__alloyId171 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId171"
    });
    __alloyId130.push($.__views.__alloyId171);
    $.__views.__alloyId172 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    __alloyId175.push($.__views.__alloyId216);
    $.__views.__alloyId217 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    __alloyId175.push($.__views.__alloyId216);
    $.__views.__alloyId217 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "SARAWAK (Kuching)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId217"
    });
    $.__views.__alloyId216.add($.__views.__alloyId217);
    $.__views.__alloyId218 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId219"
    });
    $.__views.__alloyId218.add($.__views.__alloyId219);
    $.__views.__alloyId220 = Ti.UI.createLabel({
=======
        id: "__alloyId172"
    });
    $.__views.__alloyId171.add($.__views.__alloyId172);
    $.__views.__alloyId173 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId217"
    });
    $.__views.__alloyId216.add($.__views.__alloyId217);
    $.__views.__alloyId218 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId217"
    });
    $.__views.__alloyId216.add($.__views.__alloyId217);
    $.__views.__alloyId218 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "XOX Mobile Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId218"
    });
    $.__views.__alloyId216.add($.__views.__alloyId218);
    $.__views.__alloyId219 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId220"
    });
    $.__views.__alloyId218.add($.__views.__alloyId220);
    $.__views.__alloyId221 = Ti.UI.createLabel({
=======
        id: "__alloyId173"
    });
    $.__views.__alloyId171.add($.__views.__alloyId173);
    $.__views.__alloyId174 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId218"
    });
    $.__views.__alloyId216.add($.__views.__alloyId218);
    $.__views.__alloyId219 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId218"
    });
    $.__views.__alloyId216.add($.__views.__alloyId218);
    $.__views.__alloyId219 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "1st Floor, Lot 2082, Section 60 KTLD, Jalan Sekama, 93300 Kuching Sarawak.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId219"
    });
    $.__views.__alloyId216.add($.__views.__alloyId219);
    $.__views.__alloyId220 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId221"
    });
    $.__views.__alloyId218.add($.__views.__alloyId221);
    $.__views.__alloyId222 = Ti.UI.createLabel({
=======
        id: "__alloyId174"
    });
    $.__views.__alloyId171.add($.__views.__alloyId174);
    $.__views.__alloyId175 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId219"
    });
    $.__views.__alloyId216.add($.__views.__alloyId219);
    $.__views.__alloyId220 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId219"
    });
    $.__views.__alloyId216.add($.__views.__alloyId219);
    $.__views.__alloyId220 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Contact: 082-337010",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId220"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId222"
=======
        id: "__alloyId220"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId220"
>>>>>>> origin/master
    });
    $.__views.__alloyId216.add($.__views.__alloyId220);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId175,
        id: "table",
        height: Ti.UI.SIZE
=======
        id: "__alloyId175"
    });
    $.__views.__alloyId171.add($.__views.__alloyId175);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId130,
        id: "table"
>>>>>>> Stashed changes
    });
    $.__views.scrollView.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER;
    var state;
    $.picker.setSelectedRow(0, 0, false);
<<<<<<< Updated upstream
=======
    __defers["$.__views.stateLabel!click!showPicker"] && $.__views.stateLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId124!click!showPicker"] && $.__views.__alloyId124.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
>>>>>>> Stashed changes
    __defers["$.__views.picker!change!state"] && $.__views.picker.addEventListener("change", state);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;