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
    this.__controllerPath = "roamingCalls";
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
    $.__views.roamingCalls = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "roamingCalls"
    });
    $.__views.roamingCalls && $.addTopLevelView($.__views.roamingCalls);
    $.__views.__alloyId2138 = Alloy.createController("_header", {
        id: "__alloyId2138",
        __parentSymbol: $.__views.roamingCalls
    });
    $.__views.__alloyId2138.setParent($.__views.roamingCalls);
    $.__views.__alloyId2139 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId2139"
    });
    $.__views.roamingCalls.add($.__views.__alloyId2139);
    $.__views.__alloyId2140 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2140"
    });
    $.__views.__alloyId2139.add($.__views.__alloyId2140);
    $.__views.__alloyId2141 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2141"
    });
    $.__views.__alloyId2139.add($.__views.__alloyId2141);
    back ? $.__views.__alloyId2141.addEventListener("click", back) : __defers["$.__views.__alloyId2141!click!back"] = true;
    $.__views.__alloyId2142 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId2142"
    });
    $.__views.roamingCalls.add($.__views.__alloyId2142);
    $.__views.__alloyId2143 = Ti.UI.createLabel({
        text: "Roaming Calls",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId2143"
    });
    $.__views.__alloyId2142.add($.__views.__alloyId2143);
    var __alloyId2144 = [];
    $.__views.__alloyId2145 = Ti.UI.createTableViewSection({
        id: "__alloyId2145"
    });
    __alloyId2144.push($.__views.__alloyId2145);
    $.__views.__alloyId2146 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2146"
    });
    $.__views.__alloyId2145.add($.__views.__alloyId2146);
    $.__views.__alloyId2147 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2147"
    });
    $.__views.__alloyId2146.add($.__views.__alloyId2147);
    $.__views.__alloyId2148 = Ti.UI.createLabel({
        text: "01/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2148"
    });
    $.__views.__alloyId2147.add($.__views.__alloyId2148);
    $.__views.__alloyId2149 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2149"
    });
    $.__views.__alloyId2146.add($.__views.__alloyId2149);
    $.__views.__alloyId2150 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2150"
    });
    $.__views.__alloyId2149.add($.__views.__alloyId2150);
    $.__views.__alloyId2151 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2151"
    });
    $.__views.__alloyId2146.add($.__views.__alloyId2151);
    $.__views.__alloyId2152 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2152"
    });
    $.__views.__alloyId2151.add($.__views.__alloyId2152);
    $.__views.__alloyId2153 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2153"
    });
    $.__views.__alloyId2145.add($.__views.__alloyId2153);
    $.__views.__alloyId2154 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2154"
    });
    $.__views.__alloyId2153.add($.__views.__alloyId2154);
    $.__views.__alloyId2155 = Ti.UI.createLabel({
        text: "02/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2155"
    });
    $.__views.__alloyId2154.add($.__views.__alloyId2155);
    $.__views.__alloyId2156 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2156"
    });
    $.__views.__alloyId2153.add($.__views.__alloyId2156);
    $.__views.__alloyId2157 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2157"
    });
    $.__views.__alloyId2156.add($.__views.__alloyId2157);
    $.__views.__alloyId2158 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2158"
    });
    $.__views.__alloyId2153.add($.__views.__alloyId2158);
    $.__views.__alloyId2159 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2159"
    });
    $.__views.__alloyId2158.add($.__views.__alloyId2159);
    $.__views.__alloyId2160 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2160"
    });
    $.__views.__alloyId2145.add($.__views.__alloyId2160);
    $.__views.__alloyId2161 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2161"
    });
    $.__views.__alloyId2160.add($.__views.__alloyId2161);
    $.__views.__alloyId2162 = Ti.UI.createLabel({
        text: "03/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2162"
    });
    $.__views.__alloyId2161.add($.__views.__alloyId2162);
    $.__views.__alloyId2163 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2163"
    });
    $.__views.__alloyId2160.add($.__views.__alloyId2163);
    $.__views.__alloyId2164 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2164"
    });
    $.__views.__alloyId2163.add($.__views.__alloyId2164);
    $.__views.__alloyId2165 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2165"
    });
    $.__views.__alloyId2160.add($.__views.__alloyId2165);
    $.__views.__alloyId2166 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2166"
    });
    $.__views.__alloyId2165.add($.__views.__alloyId2166);
    $.__views.__alloyId2167 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2167"
    });
    $.__views.__alloyId2145.add($.__views.__alloyId2167);
    $.__views.__alloyId2168 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2168"
    });
    $.__views.__alloyId2167.add($.__views.__alloyId2168);
    $.__views.__alloyId2169 = Ti.UI.createLabel({
        text: "04/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2169"
    });
    $.__views.__alloyId2168.add($.__views.__alloyId2169);
    $.__views.__alloyId2170 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2170"
    });
    $.__views.__alloyId2167.add($.__views.__alloyId2170);
    $.__views.__alloyId2171 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2171"
    });
    $.__views.__alloyId2170.add($.__views.__alloyId2171);
    $.__views.__alloyId2172 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2172"
    });
    $.__views.__alloyId2167.add($.__views.__alloyId2172);
    $.__views.__alloyId2173 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2173"
    });
    $.__views.__alloyId2172.add($.__views.__alloyId2173);
    $.__views.__alloyId2174 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2174"
    });
    $.__views.__alloyId2145.add($.__views.__alloyId2174);
    $.__views.__alloyId2175 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2175"
    });
    $.__views.__alloyId2174.add($.__views.__alloyId2175);
    $.__views.__alloyId2176 = Ti.UI.createLabel({
        text: "05/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2176"
    });
    $.__views.__alloyId2175.add($.__views.__alloyId2176);
    $.__views.__alloyId2177 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2177"
    });
    $.__views.__alloyId2174.add($.__views.__alloyId2177);
    $.__views.__alloyId2178 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2178"
    });
    $.__views.__alloyId2177.add($.__views.__alloyId2178);
    $.__views.__alloyId2179 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2179"
    });
    $.__views.__alloyId2174.add($.__views.__alloyId2179);
    $.__views.__alloyId2180 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2180"
    });
    $.__views.__alloyId2179.add($.__views.__alloyId2180);
    $.__views.__alloyId2181 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2181"
    });
    $.__views.__alloyId2145.add($.__views.__alloyId2181);
    $.__views.__alloyId2182 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2182"
    });
    $.__views.__alloyId2181.add($.__views.__alloyId2182);
    $.__views.__alloyId2183 = Ti.UI.createLabel({
        text: "06/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2183"
    });
    $.__views.__alloyId2182.add($.__views.__alloyId2183);
    $.__views.__alloyId2184 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2184"
    });
    $.__views.__alloyId2181.add($.__views.__alloyId2184);
    $.__views.__alloyId2185 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2185"
    });
    $.__views.__alloyId2184.add($.__views.__alloyId2185);
    $.__views.__alloyId2186 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2186"
    });
    $.__views.__alloyId2181.add($.__views.__alloyId2186);
    $.__views.__alloyId2187 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2187"
    });
    $.__views.__alloyId2186.add($.__views.__alloyId2187);
    $.__views.__alloyId2188 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2188"
    });
    $.__views.__alloyId2145.add($.__views.__alloyId2188);
    $.__views.__alloyId2189 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2189"
    });
    $.__views.__alloyId2188.add($.__views.__alloyId2189);
    $.__views.__alloyId2190 = Ti.UI.createLabel({
        text: "07/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2190"
    });
    $.__views.__alloyId2189.add($.__views.__alloyId2190);
    $.__views.__alloyId2191 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2191"
    });
    $.__views.__alloyId2188.add($.__views.__alloyId2191);
    $.__views.__alloyId2192 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2192"
    });
    $.__views.__alloyId2191.add($.__views.__alloyId2192);
    $.__views.__alloyId2193 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2193"
    });
    $.__views.__alloyId2188.add($.__views.__alloyId2193);
    $.__views.__alloyId2194 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2194"
    });
    $.__views.__alloyId2193.add($.__views.__alloyId2194);
    $.__views.__alloyId2195 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2195"
    });
    $.__views.__alloyId2145.add($.__views.__alloyId2195);
    $.__views.__alloyId2196 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2196"
    });
    $.__views.__alloyId2195.add($.__views.__alloyId2196);
    $.__views.__alloyId2197 = Ti.UI.createLabel({
        text: "08/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2197"
    });
    $.__views.__alloyId2196.add($.__views.__alloyId2197);
    $.__views.__alloyId2198 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2198"
    });
    $.__views.__alloyId2195.add($.__views.__alloyId2198);
    $.__views.__alloyId2199 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2199"
    });
    $.__views.__alloyId2198.add($.__views.__alloyId2199);
    $.__views.__alloyId2200 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2200"
    });
    $.__views.__alloyId2195.add($.__views.__alloyId2200);
    $.__views.__alloyId2201 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2201"
    });
    $.__views.__alloyId2200.add($.__views.__alloyId2201);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId2144,
        id: "table",
        scrollable: "true"
    });
    $.__views.roamingCalls.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2141!click!back"] && $.__views.__alloyId2141.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;