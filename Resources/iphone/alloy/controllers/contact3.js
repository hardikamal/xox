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
        ("iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname) && ($.stateLabel.text = state);
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
        backgroundColor: "#F4F6F5",
        contentHeight: Ti.UI.SIZE
    });
    $.__views.scrollView && $.addTopLevelView($.__views.scrollView);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "100"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId167 = Ti.UI.createTextField({
        width: "90%",
        height: "30",
        top: "10",
        bottom: "5",
        borderRadius: "15",
        textAlign: "center",
        color: "black",
        backgroundColor: "#E6E7E9",
        hintText: "Search keywords on area",
        id: "__alloyId167"
    });
    $.__views.contentView.add($.__views.__alloyId167);
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
    $.__views.__alloyId168 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId168"
    });
    $.__views.pickerContentView.add($.__views.__alloyId168);
    showPicker ? $.__views.__alloyId168.addEventListener("click", showPicker) : __defers["$.__views.__alloyId168!click!showPicker"] = true;
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
    var __alloyId174 = [];
    $.__views.__alloyId175 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId175"
    });
    __alloyId174.push($.__views.__alloyId175);
    $.__views.__alloyId176 = Ti.UI.createLabel({
        text: "Petaling Jaya (Jaya One)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
        id: "__alloyId176"
    });
    $.__views.__alloyId175.add($.__views.__alloyId176);
    $.__views.__alloyId177 = Ti.UI.createLabel({
        text: "XOX Mobile Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId177"
    });
    $.__views.__alloyId175.add($.__views.__alloyId177);
    $.__views.__alloyId178 = Ti.UI.createLabel({
        text: "31-3, Block C, Jaya One,72A, Jalan Universiti, 46200 Petaling Jaya, Selangor Darul Ehsan.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId178"
    });
    $.__views.__alloyId175.add($.__views.__alloyId178);
    $.__views.__alloyId179 = Ti.UI.createLabel({
        text: "Contact: 03-7962 8000",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId179"
    });
    $.__views.__alloyId175.add($.__views.__alloyId179);
    $.__views.__alloyId180 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId180"
    });
    __alloyId174.push($.__views.__alloyId180);
    $.__views.__alloyId181 = Ti.UI.createLabel({
        text: "Petaling Jaya (Digital Mall)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
        id: "__alloyId181"
    });
    $.__views.__alloyId180.add($.__views.__alloyId181);
    $.__views.__alloyId182 = Ti.UI.createLabel({
        text: "XOX Mobile Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId182"
    });
    $.__views.__alloyId180.add($.__views.__alloyId182);
    $.__views.__alloyId183 = Ti.UI.createLabel({
        text: "Lot G-03A, Ground Floor Digital Mall PJ, No2 Jalan 14/20 Section 14, 46100 Petaling Jaya, Selangor.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId183"
    });
    $.__views.__alloyId180.add($.__views.__alloyId183);
    $.__views.__alloyId184 = Ti.UI.createLabel({
        text: "Contact: 010-831 6363",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId184"
    });
    $.__views.__alloyId180.add($.__views.__alloyId184);
    $.__views.__alloyId185 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId185"
    });
    __alloyId174.push($.__views.__alloyId185);
    $.__views.__alloyId186 = Ti.UI.createLabel({
        text: "KUALA LUMPUR (Plaza Low Yat)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
        id: "__alloyId186"
    });
    $.__views.__alloyId185.add($.__views.__alloyId186);
    $.__views.__alloyId187 = Ti.UI.createLabel({
        text: "XOX Retails Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId187"
    });
    $.__views.__alloyId185.add($.__views.__alloyId187);
    $.__views.__alloyId188 = Ti.UI.createLabel({
        text: "Plaza Low Yat, 7 Jalan Bintang, Jalan Bukit Bintang, 55100 Kuala Lumpur.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId188"
    });
    $.__views.__alloyId185.add($.__views.__alloyId188);
    $.__views.__alloyId189 = Ti.UI.createLabel({
        text: "Contact: 010-8666288 / 012-2704222",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId189"
    });
    $.__views.__alloyId185.add($.__views.__alloyId189);
    $.__views.__alloyId190 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId190"
    });
    __alloyId174.push($.__views.__alloyId190);
    $.__views.__alloyId191 = Ti.UI.createLabel({
        text: "KUALA LUMPUR (Kepong)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
        id: "__alloyId191"
    });
    $.__views.__alloyId190.add($.__views.__alloyId191);
    $.__views.__alloyId192 = Ti.UI.createLabel({
        text: "XOX Mobile Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId192"
    });
    $.__views.__alloyId190.add($.__views.__alloyId192);
    $.__views.__alloyId193 = Ti.UI.createLabel({
        text: "33, Jalan Metro Perdana Timur 1, Taman Usahawan Kepong, 52100 Kepong, Kuala Lumpur.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId193"
    });
    $.__views.__alloyId190.add($.__views.__alloyId193);
    $.__views.__alloyId194 = Ti.UI.createLabel({
        text: "Contact: 03-62503003",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId194"
    });
    $.__views.__alloyId190.add($.__views.__alloyId194);
    $.__views.__alloyId195 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId195"
    });
    __alloyId174.push($.__views.__alloyId195);
    $.__views.__alloyId196 = Ti.UI.createLabel({
        text: "KUALA LUMPUR (Pudu)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
        id: "__alloyId196"
    });
    $.__views.__alloyId195.add($.__views.__alloyId196);
    $.__views.__alloyId197 = Ti.UI.createLabel({
        text: "XOX Mobile Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId197"
    });
    $.__views.__alloyId195.add($.__views.__alloyId197);
    $.__views.__alloyId198 = Ti.UI.createLabel({
        text: "21, Lorong Thambi 2, Off Jalan Changkat Thambi Dollah, Pudu, 55100 Kuala Lumpur.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId198"
    });
    $.__views.__alloyId195.add($.__views.__alloyId198);
    $.__views.__alloyId199 = Ti.UI.createLabel({
        text: "Contact: 03-21458010",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId199"
    });
    $.__views.__alloyId195.add($.__views.__alloyId199);
    $.__views.__alloyId200 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId200"
    });
    __alloyId174.push($.__views.__alloyId200);
    $.__views.__alloyId201 = Ti.UI.createLabel({
        text: "SELANGOR (Puchong)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
        id: "__alloyId201"
    });
    $.__views.__alloyId200.add($.__views.__alloyId201);
    $.__views.__alloyId202 = Ti.UI.createLabel({
        text: "XOX Mobile Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId202"
    });
    $.__views.__alloyId200.add($.__views.__alloyId202);
    $.__views.__alloyId203 = Ti.UI.createLabel({
        text: "54-G, Jalan Puteri 1/4, Bandar Puteri, 47100 Puchong, Selangor.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId203"
    });
    $.__views.__alloyId200.add($.__views.__alloyId203);
    $.__views.__alloyId204 = Ti.UI.createLabel({
        text: "Contact: 03-80511568",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId204"
    });
    $.__views.__alloyId200.add($.__views.__alloyId204);
    $.__views.__alloyId205 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId205"
    });
    __alloyId174.push($.__views.__alloyId205);
    $.__views.__alloyId206 = Ti.UI.createLabel({
        text: "PENANG (George Town)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
        id: "__alloyId206"
    });
    $.__views.__alloyId205.add($.__views.__alloyId206);
    $.__views.__alloyId207 = Ti.UI.createLabel({
        text: "XOX Mobile Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId207"
    });
    $.__views.__alloyId205.add($.__views.__alloyId207);
    $.__views.__alloyId208 = Ti.UI.createLabel({
        text: "112, Jalan Terengganu, 10460 Georgetown Penang.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId208"
    });
    $.__views.__alloyId205.add($.__views.__alloyId208);
    $.__views.__alloyId209 = Ti.UI.createLabel({
        text: "Contact: 04-282 6388 / 04-281 7188",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId209"
    });
    $.__views.__alloyId205.add($.__views.__alloyId209);
    $.__views.__alloyId210 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId210"
    });
    __alloyId174.push($.__views.__alloyId210);
    $.__views.__alloyId211 = Ti.UI.createLabel({
        text: "PENANG (George Town)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
        id: "__alloyId211"
    });
    $.__views.__alloyId210.add($.__views.__alloyId211);
    $.__views.__alloyId212 = Ti.UI.createLabel({
        text: "XOX Care Centre",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId212"
    });
    $.__views.__alloyId210.add($.__views.__alloyId212);
    $.__views.__alloyId213 = Ti.UI.createLabel({
        text: "Kiosk G-01 Level 1@ ICT Komtar, Unit 01-4.01 Komtar, Jalan Penang 10000 Georgetown Penang.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId213"
    });
    $.__views.__alloyId210.add($.__views.__alloyId213);
    $.__views.__alloyId214 = Ti.UI.createLabel({
        text: "Contact: -",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId214"
    });
    $.__views.__alloyId210.add($.__views.__alloyId214);
    $.__views.__alloyId215 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId215"
    });
    __alloyId174.push($.__views.__alloyId215);
    $.__views.__alloyId216 = Ti.UI.createLabel({
        text: "SARAWAK (Kuching)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
        id: "__alloyId216"
    });
    $.__views.__alloyId215.add($.__views.__alloyId216);
    $.__views.__alloyId217 = Ti.UI.createLabel({
        text: "XOX Mobile Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId217"
    });
    $.__views.__alloyId215.add($.__views.__alloyId217);
    $.__views.__alloyId218 = Ti.UI.createLabel({
        text: "1st Floor, Lot 2082, Section 60 KTLD, Jalan Sekama, 93300 Kuching Sarawak.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId218"
    });
    $.__views.__alloyId215.add($.__views.__alloyId218);
    $.__views.__alloyId219 = Ti.UI.createLabel({
        text: "Contact: 082-337010",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId219"
    });
    $.__views.__alloyId215.add($.__views.__alloyId219);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId174,
        id: "table",
        height: Ti.UI.SIZE
    });
    $.__views.scrollView.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    "android" == Ti.Platform.osname && ($.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER);
    var state;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.stateLabel!click!showPicker"] && $.__views.stateLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId168!click!showPicker"] && $.__views.__alloyId168.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!state"] && $.__views.picker.addEventListener("change", state);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;