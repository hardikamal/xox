function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function generateTable() {
        var data = [];
        for (var i = 0; i < details.length; i++) {
            var tableRow = Ti.UI.createTableViewRow({
                layout: "vertical",
                top: 5,
                bottom: 5,
                height: 170
            });
            var address = details[i].address;
            var myAdd = address.replace(/(\\r\n|\\n|\\r)/gm, " ");
            var contact = details[i].mobile;
            "null" == contact && (contact = "-");
            tableRow.add(createLabel({
                text: details[i].area,
                color: "#000000"
            }));
            tableRow.add(createLabel({
                text: details[i].outlet,
                color: "#9D9F9E"
            }));
            tableRow.add(createLabel({
                text: myAdd,
                color: "#9D9F9E"
            }));
            tableRow.add(createLabel({
                text: "Contact : " + contact,
                color: "#9D9F9E"
            }));
            data.push(tableRow);
            $.careCenterTable.setData(data);
        }
    }
    function createLabel(ex) {
        return Titanium.UI.createLabel({
            top: 10,
            left: 10,
            classes: [ "small_text" ],
            color: ex.color,
            text: ex.text
        });
    }
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
        top: "0",
        contentHeight: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        scrollType: "vertical",
        backgroundColor: "#F4F6F5"
    });
    $.__views.scrollView && $.addTopLevelView($.__views.scrollView);
<<<<<<< HEAD
    $.__views.careCenterTable = Ti.UI.createTableView({
        id: "careCenterTable",
        width: "100%",
=======
<<<<<<< HEAD
    var __alloyId122 = [];
    $.__views.__alloyId123 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId123"
    });
    __alloyId122.push($.__views.__alloyId123);
    $.__views.__alloyId124 = Ti.UI.createLabel({
        text: "Petaling Jaya (Jaya One)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
        id: "__alloyId124"
    });
    $.__views.__alloyId123.add($.__views.__alloyId124);
    $.__views.__alloyId125 = Ti.UI.createLabel({
        text: "XOX Mobile Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId125"
    });
    $.__views.__alloyId123.add($.__views.__alloyId125);
    $.__views.__alloyId126 = Ti.UI.createLabel({
        text: "31-3, Block C, Jaya One,72A, Jalan Universiti, 46200 Petaling Jaya, Selangor Darul Ehsan.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId126"
    });
    $.__views.__alloyId123.add($.__views.__alloyId126);
    $.__views.__alloyId127 = Ti.UI.createLabel({
        text: "Contact: 03-7962 8000",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId127"
    });
    $.__views.__alloyId123.add($.__views.__alloyId127);
    $.__views.__alloyId128 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId128"
    });
    __alloyId122.push($.__views.__alloyId128);
    $.__views.__alloyId129 = Ti.UI.createLabel({
        text: "Petaling Jaya (Digital Mall)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
        id: "__alloyId129"
    });
    $.__views.__alloyId128.add($.__views.__alloyId129);
    $.__views.__alloyId130 = Ti.UI.createLabel({
        text: "XOX Mobile Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId130"
    });
    $.__views.__alloyId128.add($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createLabel({
        text: "Lot G-03A, Ground Floor Digital Mall PJ, No2 Jalan 14/20 Section 14, 46100 Petaling Jaya, Selangor.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId131"
    });
    $.__views.__alloyId128.add($.__views.__alloyId131);
    $.__views.__alloyId132 = Ti.UI.createLabel({
        text: "Contact: 010-831 6363",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId132"
    });
    $.__views.__alloyId128.add($.__views.__alloyId132);
    $.__views.__alloyId133 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId133"
    });
    __alloyId122.push($.__views.__alloyId133);
    $.__views.__alloyId134 = Ti.UI.createLabel({
        text: "KUALA LUMPUR (Plaza Low Yat)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
        id: "__alloyId134"
    });
    $.__views.__alloyId133.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createLabel({
        text: "XOX Retails Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId135"
    });
    $.__views.__alloyId133.add($.__views.__alloyId135);
    $.__views.__alloyId136 = Ti.UI.createLabel({
        text: "Plaza Low Yat, 7 Jalan Bintang, Jalan Bukit Bintang, 55100 Kuala Lumpur.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId136"
    });
    $.__views.__alloyId133.add($.__views.__alloyId136);
    $.__views.__alloyId137 = Ti.UI.createLabel({
        text: "Contact: 010-8666288 / 012-2704222",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId137"
    });
    $.__views.__alloyId133.add($.__views.__alloyId137);
    $.__views.__alloyId138 = Ti.UI.createTableViewRow({
        layout: "vertical",
>>>>>>> 24/3/2015 onlinePurchase Subpages
        height: Ti.UI.SIZE,
        separatorColor: "#375540",
        top: "0"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.careCenterTable);
=======
    $.__views.__alloyId143.add($.__views.__alloyId144);
    $.__views.__alloyId145 = Ti.UI.createLabel({
        text: "XOX Mobile Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId145"
    });
    $.__views.__alloyId143.add($.__views.__alloyId145);
    $.__views.__alloyId146 = Ti.UI.createLabel({
        text: "21, Lorong Thambi 2, Off Jalan Changkat Thambi Dollah, Pudu, 55100 Kuala Lumpur.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId146"
    });
    $.__views.__alloyId143.add($.__views.__alloyId146);
    $.__views.__alloyId147 = Ti.UI.createLabel({
        text: "Contact: 03-21458010",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId147"
    });
    $.__views.__alloyId143.add($.__views.__alloyId147);
    $.__views.__alloyId148 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId148"
    });
    __alloyId122.push($.__views.__alloyId148);
    $.__views.__alloyId149 = Ti.UI.createLabel({
        text: "SELANGOR (Puchong)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
        id: "__alloyId149"
    });
    $.__views.__alloyId148.add($.__views.__alloyId149);
    $.__views.__alloyId150 = Ti.UI.createLabel({
        text: "XOX Mobile Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId150"
    });
    $.__views.__alloyId148.add($.__views.__alloyId150);
    $.__views.__alloyId151 = Ti.UI.createLabel({
        text: "54-G, Jalan Puteri 1/4, Bandar Puteri, 47100 Puchong, Selangor.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId151"
    });
    $.__views.__alloyId148.add($.__views.__alloyId151);
    $.__views.__alloyId152 = Ti.UI.createLabel({
        text: "Contact: 03-80511568",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId152"
    });
    $.__views.__alloyId148.add($.__views.__alloyId152);
    $.__views.__alloyId153 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId153"
    });
    __alloyId122.push($.__views.__alloyId153);
    $.__views.__alloyId154 = Ti.UI.createLabel({
        text: "PENANG (George Town)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
        id: "__alloyId154"
    });
    $.__views.__alloyId153.add($.__views.__alloyId154);
    $.__views.__alloyId155 = Ti.UI.createLabel({
        text: "XOX Mobile Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId155"
    });
    $.__views.__alloyId153.add($.__views.__alloyId155);
    $.__views.__alloyId156 = Ti.UI.createLabel({
        text: "112, Jalan Terengganu, 10460 Georgetown Penang.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId156"
    });
    $.__views.__alloyId153.add($.__views.__alloyId156);
    $.__views.__alloyId157 = Ti.UI.createLabel({
        text: "Contact: 04-282 6388 / 04-281 7188",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId157"
    });
    $.__views.__alloyId153.add($.__views.__alloyId157);
    $.__views.__alloyId158 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId158"
    });
    __alloyId122.push($.__views.__alloyId158);
    $.__views.__alloyId159 = Ti.UI.createLabel({
        text: "PENANG (George Town)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
        id: "__alloyId159"
    });
    $.__views.__alloyId158.add($.__views.__alloyId159);
    $.__views.__alloyId160 = Ti.UI.createLabel({
        text: "XOX Care Centre",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId160"
    });
    $.__views.__alloyId158.add($.__views.__alloyId160);
    $.__views.__alloyId161 = Ti.UI.createLabel({
        text: "Kiosk G-01 Level 1@ ICT Komtar, Unit 01-4.01 Komtar, Jalan Penang 10000 Georgetown Penang.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId161"
    });
    $.__views.__alloyId158.add($.__views.__alloyId161);
    $.__views.__alloyId162 = Ti.UI.createLabel({
        text: "Contact: -",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId162"
    });
    $.__views.__alloyId158.add($.__views.__alloyId162);
    $.__views.__alloyId163 = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId163"
    });
    __alloyId122.push($.__views.__alloyId163);
    $.__views.__alloyId164 = Ti.UI.createLabel({
        text: "SARAWAK (Kuching)",
        textAlign: "left",
        top: "10",
        left: "10",
        color: "black",
        id: "__alloyId164"
    });
    $.__views.__alloyId163.add($.__views.__alloyId164);
    $.__views.__alloyId165 = Ti.UI.createLabel({
        text: "XOX Mobile Sdn Bhd",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId165"
    });
    $.__views.__alloyId163.add($.__views.__alloyId165);
    $.__views.__alloyId166 = Ti.UI.createLabel({
        text: "1st Floor, Lot 2082, Section 60 KTLD, Jalan Sekama, 93300 Kuching Sarawak.",
        textAlign: "left",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId166"
    });
    $.__views.__alloyId163.add($.__views.__alloyId166);
    $.__views.__alloyId167 = Ti.UI.createLabel({
        text: "Contact: 082-337010",
        textAlign: "left",
        bottom: "10",
        left: "10",
        color: "#9D9F9E",
        id: "__alloyId167"
    });
    $.__views.__alloyId163.add($.__views.__alloyId167);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId122,
        id: "table"
    });
    $.__views.scrollView.add($.__views.table);
=======
    $.__views.careCenterTable = Ti.UI.createTableView({
        id: "careCenterTable",
        width: "100%",
        height: Ti.UI.SIZE,
        separatorColor: "#375540",
        top: "0"
    });
    $.__views.scrollView.add($.__views.careCenterTable);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    exports.destroy = function() {};
    _.extend($, $.__views);
    "android" == Ti.Platform.osname && ($.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER);
    var storeModel = Alloy.createCollection("storeLocator");
    var details = storeModel.getStoreList({
        category: "Care Centre"
    });
    setTimeout(function() {
        generateTable();
    }, 800);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;