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
    this.__controllerPath = "prepaidPack2";
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
    $.__views.prepaidPack2 = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaidPack2"
    });
    $.__views.prepaidPack2 && $.addTopLevelView($.__views.prepaidPack2);
    $.__views.__alloyId1961 = Alloy.createController("_header", {
        id: "__alloyId1961",
        __parentSymbol: $.__views.prepaidPack2
    });
    $.__views.__alloyId1961.setParent($.__views.prepaidPack2);
    $.__views.__alloyId1962 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1962"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1962);
    $.__views.__alloyId1963 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1963"
    });
    $.__views.__alloyId1962.add($.__views.__alloyId1963);
    $.__views.__alloyId1964 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1964"
    });
    $.__views.__alloyId1962.add($.__views.__alloyId1964);
    back ? $.__views.__alloyId1964.addEventListener("click", back) : __defers["$.__views.__alloyId1964!click!back"] = true;
    $.__views.__alloyId1965 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1965"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1965);
    $.__views.__alloyId1966 = Ti.UI.createLabel({
        text: "Step 2 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1966"
    });
    $.__views.__alloyId1965.add($.__views.__alloyId1966);
    $.__views.__alloyId1967 = Ti.UI.createLabel({
        text: "Registration",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId1967"
    });
    $.__views.__alloyId1965.add($.__views.__alloyId1967);
    $.__views.__alloyId1968 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#2f4f4f",
        id: "__alloyId1968"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1968);
    $.__views.prepaid_subtitle = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "PERSONAL DETAILS",
        id: "prepaid_subtitle",
        backgroundColor: "transparent",
        color: "white",
        top: "5",
        left: "20",
        width: "38%"
    });
    $.__views.__alloyId1968.add($.__views.prepaid_subtitle);
    $.__views.prepaid_mandatory = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "*Please fill in the Mandatory field",
        id: "prepaid_mandatory",
        backgroundColor: "transparent",
        color: "red",
        width: "50%",
        top: "5"
    });
    $.__views.__alloyId1968.add($.__views.prepaid_mandatory);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.prepaidPack2.add($.__views.scrollView);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "80",
        top: "10",
        bottom: "10"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId1969 = Ti.UI.createLabel({
        text: "Salutation",
        textAlign: "left",
        width: "100%",
        color: "black",
        id: "__alloyId1969"
    });
    $.__views.contentView.add($.__views.__alloyId1969);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        top: "10",
        width: "70%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.salutationLabel = Ti.UI.createLabel({
        id: "salutationLabel",
        height: "30",
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "5",
        borderColor: "#F2F2F2",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.salutationLabel);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        height: Ti.UI.SIZE,
        width: "100%",
        top: "10",
        bottom: "10",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "true"
    });
    $.__views.pickerContentView.add($.__views.picker);
    var __alloyId1970 = [];
    $.__views.__alloyId1971 = Ti.UI.createPickerRow({
        title: "Select An Option",
        id: "__alloyId1971"
    });
    __alloyId1970.push($.__views.__alloyId1971);
    $.__views.__alloyId1972 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId1972"
    });
    __alloyId1970.push($.__views.__alloyId1972);
    $.__views.__alloyId1973 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId1973"
    });
    __alloyId1970.push($.__views.__alloyId1973);
    $.__views.picker.add(__alloyId1970);
    $.__views.__alloyId1974 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1974"
    });
    $.__views.scrollView.add($.__views.__alloyId1974);
    $.__views.__alloyId1975 = Ti.UI.createLabel({
        text: "Name (as per NRIC/ Armed Force ID/ Passport)*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1975"
    });
    $.__views.__alloyId1974.add($.__views.__alloyId1975);
    $.__views.__alloyId1976 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1976"
    });
    $.__views.__alloyId1974.add($.__views.__alloyId1976);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "horizontal",
        height: "80",
        top: "10",
        bottom: "10"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId1977 = Ti.UI.createLabel({
        text: "Reg Type",
        textAlign: "left",
        width: "100%",
        color: "black",
        id: "__alloyId1977"
    });
    $.__views.contentView2.add($.__views.__alloyId1977);
    $.__views.pickerContentView2 = Ti.UI.createView({
        id: "pickerContentView2",
        layout: "composite",
        top: "10",
        width: "70%"
    });
    $.__views.contentView2.add($.__views.pickerContentView2);
    $.__views.regTypeLabel = Ti.UI.createLabel({
        id: "regTypeLabel",
        height: "30",
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "5",
        borderColor: "#F2F2F2",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView2.add($.__views.regTypeLabel);
    $.__views.picker2 = Ti.UI.createPicker({
        id: "picker2",
        height: Ti.UI.SIZE,
        width: "100%",
        top: "10",
        bottom: "10",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "true"
    });
    $.__views.pickerContentView2.add($.__views.picker2);
    var __alloyId1978 = [];
    $.__views.__alloyId1979 = Ti.UI.createPickerRow({
        title: "Select An Option",
        id: "__alloyId1979"
    });
    __alloyId1978.push($.__views.__alloyId1979);
    $.__views.__alloyId1980 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId1980"
    });
    __alloyId1978.push($.__views.__alloyId1980);
    $.__views.__alloyId1981 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId1981"
    });
    __alloyId1978.push($.__views.__alloyId1981);
    $.__views.picker2.add(__alloyId1978);
    $.__views.__alloyId1982 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1982"
    });
    $.__views.scrollView.add($.__views.__alloyId1982);
    $.__views.__alloyId1983 = Ti.UI.createLabel({
        text: "NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1983"
    });
    $.__views.__alloyId1982.add($.__views.__alloyId1983);
    $.__views.__alloyId1984 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1984"
    });
    $.__views.__alloyId1982.add($.__views.__alloyId1984);
    $.__views.__alloyId1985 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1985"
    });
    $.__views.scrollView.add($.__views.__alloyId1985);
    $.__views.__alloyId1986 = Ti.UI.createLabel({
        text: "Retype NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1986"
    });
    $.__views.__alloyId1985.add($.__views.__alloyId1986);
    $.__views.__alloyId1987 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1987"
    });
    $.__views.__alloyId1985.add($.__views.__alloyId1987);
    $.__views.__alloyId1988 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1988"
    });
    $.__views.scrollView.add($.__views.__alloyId1988);
    $.__views.__alloyId1989 = Ti.UI.createLabel({
        text: "Date of Birth*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1989"
    });
    $.__views.__alloyId1988.add($.__views.__alloyId1989);
    $.__views.__alloyId1990 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1990"
    });
    $.__views.__alloyId1988.add($.__views.__alloyId1990);
    $.__views.__alloyId1991 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1991"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1991);
    proceed ? $.__views.__alloyId1991.addEventListener("click", proceed) : __defers["$.__views.__alloyId1991!click!proceed"] = true;
    $.__views.__alloyId1992 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1992"
    });
    $.__views.__alloyId1991.add($.__views.__alloyId1992);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1964!click!back"] && $.__views.__alloyId1964.addEventListener("click", back);
    __defers["$.__views.__alloyId1991!click!proceed"] && $.__views.__alloyId1991.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;