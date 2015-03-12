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
        DRAWER.navigation("onlinePurchases", 2);
    }
    function showPicker() {
        console.log("showPicker");
        if (false == $.pickerView.visible) {
            $.contentView.height = 250;
            $.pickerView.height = 250;
            $.pickerContentView.height = 250;
            $.pickerView.setVisible(true);
            $.done.setVisible(true);
            $.picker.setVisible(true);
        } else {
            $.contentView.height = 50;
            $.pickerView.height = 50;
            $.pickerContentView.height = 50;
            $.pickerView.setVisible(false);
            $.done.setVisible(false);
            $.picker.setVisible(false);
        }
    }
    function simType(e) {
        console.log("simType");
        simType = e.row.title;
        $.simLabel.text = simType;
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
    function highSpeed(e) {
        console.log("e.value: " + e.value);
    }
    function next() {
        console.log("next");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "prepaidPack";
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
    $.__views.prepaidPack = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaidPack"
    });
    $.__views.prepaidPack && $.addTopLevelView($.__views.prepaidPack);
    $.__views.__alloyId138 = Alloy.createController("_header", {
        id: "__alloyId138",
        __parentSymbol: $.__views.prepaidPack
    });
    $.__views.__alloyId138.setParent($.__views.prepaidPack);
    $.__views.__alloyId139 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId139"
    });
    $.__views.prepaidPack.add($.__views.__alloyId139);
    $.__views.__alloyId140 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId140"
    });
    $.__views.__alloyId139.add($.__views.__alloyId140);
    $.__views.__alloyId141 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId141"
    });
    $.__views.__alloyId139.add($.__views.__alloyId141);
    back ? $.__views.__alloyId141.addEventListener("click", back) : __defers["$.__views.__alloyId141!click!back"] = true;
    $.__views.__alloyId142 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId142"
    });
    $.__views.prepaidPack.add($.__views.__alloyId142);
    $.__views.__alloyId143 = Ti.UI.createLabel({
        text: "Step 1 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId143"
    });
    $.__views.__alloyId142.add($.__views.__alloyId143);
    $.__views.__alloyId144 = Ti.UI.createLabel({
        text: "ORDERING",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId144"
    });
    $.__views.__alloyId142.add($.__views.__alloyId144);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.prepaidPack.add($.__views.scrollView);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "50"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId145 = Ti.UI.createLabel({
        text: "Sim Type",
        color: "black",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId145"
    });
    $.__views.contentView.add($.__views.__alloyId145);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
        width: "70%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.simLabel = Ti.UI.createLabel({
        id: "simLabel",
        height: "30",
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "5",
        borderColor: "#F2F2F2",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.simLabel);
    showPicker ? $.__views.simLabel.addEventListener("click", showPicker) : __defers["$.__views.simLabel!click!showPicker"] = true;
    $.__views.__alloyId146 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId146"
    });
    $.__views.pickerContentView.add($.__views.__alloyId146);
    showPicker ? $.__views.__alloyId146.addEventListener("click", showPicker) : __defers["$.__views.__alloyId146!click!showPicker"] = true;
    $.__views.pickerView = Ti.UI.createView({
        id: "pickerView",
        height: "50",
        width: "100%",
        visible: "false",
        top: "50"
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
    var __alloyId147 = [];
    $.__views.__alloyId148 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId148"
    });
    __alloyId147.push($.__views.__alloyId148);
    $.__views.__alloyId149 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId149"
    });
    __alloyId147.push($.__views.__alloyId149);
    $.__views.__alloyId150 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId150"
    });
    __alloyId147.push($.__views.__alloyId150);
    $.__views.picker.add(__alloyId147);
    simType ? $.__views.picker.addEventListener("change", simType) : __defers["$.__views.picker!change!simType"] = true;
    $.__views.__alloyId151 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId151"
    });
    $.__views.scrollView.add($.__views.__alloyId151);
    $.__views.__alloyId152 = Ti.UI.createLabel({
        text: "Package",
        color: "black",
        height: "50",
        width: "30%",
        id: "__alloyId152"
    });
    $.__views.__alloyId151.add($.__views.__alloyId152);
    $.__views.__alloyId153 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "70%",
        id: "__alloyId153"
    });
    $.__views.__alloyId151.add($.__views.__alloyId153);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
    $.__views.__alloyId153.add($.__views.switch1);
    highSpeed ? $.__views.switch1.addEventListener("change", highSpeed) : __defers["$.__views.switch1!change!highSpeed"] = true;
    $.__views.__alloyId154 = Ti.UI.createLabel({
        text: "Highspeed Internet",
        color: "black",
        height: "50",
        width: "auto",
        left: "10",
        id: "__alloyId154"
    });
    $.__views.__alloyId153.add($.__views.__alloyId154);
    $.__views.__alloyId155 = Ti.UI.createView({
        layout: "vertical",
        height: "130",
        id: "__alloyId155"
    });
    $.__views.scrollView.add($.__views.__alloyId155);
    $.__views.__alloyId156 = Ti.UI.createLabel({
        text: "Top Up Voucher (Optional)*",
        color: "black",
        height: "30",
        left: "0",
        id: "__alloyId156"
    });
    $.__views.__alloyId155.add($.__views.__alloyId156);
    $.__views.__alloyId157 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId157"
    });
    $.__views.__alloyId155.add($.__views.__alloyId157);
    $.__views.__alloyId158 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId158"
    });
    $.__views.__alloyId157.add($.__views.__alloyId158);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2",
        height: "50"
    });
    $.__views.__alloyId158.add($.__views.switch2);
    $.__views.__alloyId159 = Ti.UI.createLabel({
        text: "RM10",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId159"
    });
    $.__views.__alloyId158.add($.__views.__alloyId159);
    $.__views.__alloyId160 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId160"
    });
    $.__views.__alloyId157.add($.__views.__alloyId160);
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3",
        height: "50"
    });
    $.__views.__alloyId160.add($.__views.switch3);
    $.__views.__alloyId161 = Ti.UI.createLabel({
        text: "RM30",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId161"
    });
    $.__views.__alloyId160.add($.__views.__alloyId161);
    $.__views.__alloyId162 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId162"
    });
    $.__views.__alloyId155.add($.__views.__alloyId162);
    $.__views.__alloyId163 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId163"
    });
    $.__views.__alloyId162.add($.__views.__alloyId163);
    $.__views.switch4 = Ti.UI.createSwitch({
        value: false,
        id: "switch4",
        height: "50"
    });
    $.__views.__alloyId163.add($.__views.switch4);
    $.__views.__alloyId164 = Ti.UI.createLabel({
        text: "RM50",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId164"
    });
    $.__views.__alloyId163.add($.__views.__alloyId164);
    $.__views.__alloyId165 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId165"
    });
    $.__views.__alloyId162.add($.__views.__alloyId165);
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5",
        height: "50"
    });
    $.__views.__alloyId165.add($.__views.switch5);
    $.__views.__alloyId166 = Ti.UI.createLabel({
        text: "None",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId166"
    });
    $.__views.__alloyId165.add($.__views.__alloyId166);
    $.__views.__alloyId167 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        id: "__alloyId167"
    });
    $.__views.scrollView.add($.__views.__alloyId167);
    $.__views.__alloyId168 = Ti.UI.createLabel({
        text: "Number Selection",
        color: "black",
        height: "30",
        left: "0",
        id: "__alloyId168"
    });
    $.__views.__alloyId167.add($.__views.__alloyId168);
    $.__views.__alloyId169 = Ti.UI.createTextField({
        height: "30",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId169"
    });
    $.__views.__alloyId167.add($.__views.__alloyId169);
    $.__views.__alloyId170 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId170"
    });
    $.__views.scrollView.add($.__views.__alloyId170);
    $.__views.__alloyId171 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId171"
    });
    $.__views.__alloyId170.add($.__views.__alloyId171);
    $.__views.switch6 = Ti.UI.createSwitch({
        value: false,
        id: "switch6",
        height: "50"
    });
    $.__views.__alloyId171.add($.__views.switch6);
    $.__views.__alloyId172 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId172"
    });
    $.__views.__alloyId171.add($.__views.__alloyId172);
    $.__views.__alloyId173 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId173"
    });
    $.__views.__alloyId170.add($.__views.__alloyId173);
    $.__views.switch7 = Ti.UI.createSwitch({
        value: false,
        id: "switch7",
        height: "50"
    });
    $.__views.__alloyId173.add($.__views.switch7);
    $.__views.__alloyId174 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId174"
    });
    $.__views.__alloyId173.add($.__views.__alloyId174);
    $.__views.__alloyId175 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId175"
    });
    $.__views.__alloyId170.add($.__views.__alloyId175);
    $.__views.switch8 = Ti.UI.createSwitch({
        value: false,
        id: "switch8",
        height: "50"
    });
    $.__views.__alloyId175.add($.__views.switch8);
    $.__views.__alloyId176 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId176"
    });
    $.__views.__alloyId175.add($.__views.__alloyId176);
    $.__views.__alloyId177 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId177"
    });
    $.__views.__alloyId170.add($.__views.__alloyId177);
    $.__views.switch9 = Ti.UI.createSwitch({
        value: false,
        id: "switch9",
        height: "50"
    });
    $.__views.__alloyId177.add($.__views.switch9);
    $.__views.__alloyId178 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId178"
    });
    $.__views.__alloyId177.add($.__views.__alloyId178);
    $.__views.__alloyId179 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId179"
    });
    $.__views.__alloyId170.add($.__views.__alloyId179);
    $.__views.switch10 = Ti.UI.createSwitch({
        value: false,
        id: "switch10",
        height: "50"
    });
    $.__views.__alloyId179.add($.__views.switch10);
    $.__views.__alloyId180 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId180"
    });
    $.__views.__alloyId179.add($.__views.__alloyId180);
    $.__views.__alloyId181 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId181"
    });
    $.__views.__alloyId170.add($.__views.__alloyId181);
    $.__views.switch11 = Ti.UI.createSwitch({
        value: false,
        id: "switch11",
        height: "50"
    });
    $.__views.__alloyId181.add($.__views.switch11);
    $.__views.__alloyId182 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId182"
    });
    $.__views.__alloyId181.add($.__views.__alloyId182);
    $.__views.__alloyId183 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId183"
    });
    $.__views.__alloyId170.add($.__views.__alloyId183);
    $.__views.switch12 = Ti.UI.createSwitch({
        value: false,
        id: "switch12",
        height: "50"
    });
    $.__views.__alloyId183.add($.__views.switch12);
    $.__views.__alloyId184 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId184"
    });
    $.__views.__alloyId183.add($.__views.__alloyId184);
    $.__views.__alloyId185 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId185"
    });
    $.__views.__alloyId170.add($.__views.__alloyId185);
    $.__views.switch13 = Ti.UI.createSwitch({
        value: false,
        id: "switch13",
        height: "50"
    });
    $.__views.__alloyId185.add($.__views.switch13);
    $.__views.__alloyId186 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId186"
    });
    $.__views.__alloyId185.add($.__views.__alloyId186);
    $.__views.__alloyId187 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId187"
    });
    $.__views.prepaidPack.add($.__views.__alloyId187);
    next ? $.__views.__alloyId187.addEventListener("click", next) : __defers["$.__views.__alloyId187!click!next"] = true;
    $.__views.__alloyId188 = Ti.UI.createLabel({
        text: "Next",
        color: "white",
        id: "__alloyId188"
    });
    $.__views.__alloyId187.add($.__views.__alloyId188);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    var simType;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId141!click!back"] && $.__views.__alloyId141.addEventListener("click", back);
    __defers["$.__views.simLabel!click!showPicker"] && $.__views.simLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId146!click!showPicker"] && $.__views.__alloyId146.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!simType"] && $.__views.picker.addEventListener("change", simType);
    __defers["$.__views.switch1!change!highSpeed"] && $.__views.switch1.addEventListener("change", highSpeed);
    __defers["$.__views.__alloyId187!click!next"] && $.__views.__alloyId187.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;