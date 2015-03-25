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
        DRAWER.navigation("myAccount", 1);
    }
    function accountDetails() {
        DRAWER.navigation("accountDetails", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "profile";
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
    $.__views.profile = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "profile"
    });
    $.__views.profile && $.addTopLevelView($.__views.profile);
    $.__views.__alloyId2096 = Alloy.createController("_header", {
        id: "__alloyId2096",
        __parentSymbol: $.__views.profile
    });
    $.__views.__alloyId2096.setParent($.__views.profile);
    $.__views.__alloyId2097 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2097"
    });
    $.__views.profile.add($.__views.__alloyId2097);
    $.__views.__alloyId2098 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId2098"
    });
    $.__views.__alloyId2097.add($.__views.__alloyId2098);
    $.__views.__alloyId2099 = Ti.UI.createLabel({
        text: "Account Details",
        backgroundColor: "transparent",
        height: "50",
        width: "45%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        color: "white",
        id: "__alloyId2099"
    });
    $.__views.__alloyId2098.add($.__views.__alloyId2099);
    accountDetails ? $.__views.__alloyId2099.addEventListener("click", accountDetails) : __defers["$.__views.__alloyId2099!click!accountDetails"] = true;
    $.__views.__alloyId2100 = Ti.UI.createLabel({
        text: "My Profile",
        backgroundColor: "#bf0404",
        height: "50",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: "45%",
        color: "white",
        id: "__alloyId2100"
    });
    $.__views.__alloyId2098.add($.__views.__alloyId2100);
    $.__views.__alloyId2101 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "10%",
        height: "30",
        top: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2101"
    });
    $.__views.__alloyId2098.add($.__views.__alloyId2101);
    back ? $.__views.__alloyId2101.addEventListener("click", back) : __defers["$.__views.__alloyId2101!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F5F5F5"
    });
    $.__views.profile.add($.__views.scrollView);
    $.__views.__alloyId2102 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2102"
    });
    $.__views.scrollView.add($.__views.__alloyId2102);
    $.__views.__alloyId2103 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2103"
    });
    $.__views.__alloyId2102.add($.__views.__alloyId2103);
    $.__views.__alloyId2104 = Ti.UI.createLabel({
        text: "Address",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2104"
    });
    $.__views.__alloyId2103.add($.__views.__alloyId2104);
    $.__views.__alloyId2105 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2105"
    });
    $.__views.__alloyId2102.add($.__views.__alloyId2105);
    $.__views.__alloyId2106 = Ti.UI.createLabel({
        text: "No.8 Jalan Puchong,Selangor...",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2106"
    });
    $.__views.__alloyId2105.add($.__views.__alloyId2106);
    $.__views.__alloyId2107 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2107"
    });
    $.__views.__alloyId2102.add($.__views.__alloyId2107);
    $.__views.__alloyId2108 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2108"
    });
    $.__views.__alloyId2107.add($.__views.__alloyId2108);
    $.__views.__alloyId2109 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2109"
    });
    $.__views.scrollView.add($.__views.__alloyId2109);
    $.__views.__alloyId2110 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2110"
    });
    $.__views.__alloyId2109.add($.__views.__alloyId2110);
    $.__views.__alloyId2111 = Ti.UI.createLabel({
        text: "NRIC/Passport/Armed Force ID",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2111"
    });
    $.__views.__alloyId2110.add($.__views.__alloyId2111);
    $.__views.__alloyId2112 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2112"
    });
    $.__views.__alloyId2109.add($.__views.__alloyId2112);
    $.__views.__alloyId2113 = Ti.UI.createLabel({
        text: "000000 00 0000",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2113"
    });
    $.__views.__alloyId2112.add($.__views.__alloyId2113);
    $.__views.__alloyId2114 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2114"
    });
    $.__views.__alloyId2109.add($.__views.__alloyId2114);
    $.__views.__alloyId2115 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2115"
    });
    $.__views.__alloyId2114.add($.__views.__alloyId2115);
    $.__views.__alloyId2116 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2116"
    });
    $.__views.scrollView.add($.__views.__alloyId2116);
    $.__views.__alloyId2117 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2117"
    });
    $.__views.__alloyId2116.add($.__views.__alloyId2117);
    $.__views.__alloyId2118 = Ti.UI.createLabel({
        text: "Email Address",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2118"
    });
    $.__views.__alloyId2117.add($.__views.__alloyId2118);
    $.__views.__alloyId2119 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2119"
    });
    $.__views.__alloyId2116.add($.__views.__alloyId2119);
    $.__views.__alloyId2120 = Ti.UI.createLabel({
        text: "sample@gmail.com",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2120"
    });
    $.__views.__alloyId2119.add($.__views.__alloyId2120);
    $.__views.__alloyId2121 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2121"
    });
    $.__views.__alloyId2116.add($.__views.__alloyId2121);
    $.__views.__alloyId2122 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2122"
    });
    $.__views.__alloyId2121.add($.__views.__alloyId2122);
    $.__views.__alloyId2123 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2123"
    });
    $.__views.scrollView.add($.__views.__alloyId2123);
    $.__views.__alloyId2124 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2124"
    });
    $.__views.__alloyId2123.add($.__views.__alloyId2124);
    $.__views.__alloyId2125 = Ti.UI.createLabel({
        text: "Birthday",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2125"
    });
    $.__views.__alloyId2124.add($.__views.__alloyId2125);
    $.__views.__alloyId2126 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2126"
    });
    $.__views.__alloyId2123.add($.__views.__alloyId2126);
    $.__views.__alloyId2127 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2127"
    });
    $.__views.__alloyId2126.add($.__views.__alloyId2127);
    $.__views.__alloyId2128 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2128"
    });
    $.__views.__alloyId2123.add($.__views.__alloyId2128);
    $.__views.__alloyId2129 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2129"
    });
    $.__views.__alloyId2128.add($.__views.__alloyId2129);
    $.__views.__alloyId2130 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2130"
    });
    $.__views.scrollView.add($.__views.__alloyId2130);
    $.__views.__alloyId2131 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2131"
    });
    $.__views.__alloyId2130.add($.__views.__alloyId2131);
    $.__views.__alloyId2132 = Ti.UI.createLabel({
        text: "Gender",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2132"
    });
    $.__views.__alloyId2131.add($.__views.__alloyId2132);
    $.__views.__alloyId2133 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2133"
    });
    $.__views.__alloyId2130.add($.__views.__alloyId2133);
    $.__views.__alloyId2134 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2134"
    });
    $.__views.__alloyId2133.add($.__views.__alloyId2134);
    $.__views.__alloyId2135 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2135"
    });
    $.__views.__alloyId2130.add($.__views.__alloyId2135);
    $.__views.__alloyId2136 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2136"
    });
    $.__views.__alloyId2135.add($.__views.__alloyId2136);
    $.__views.__alloyId2137 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2137"
    });
    $.__views.scrollView.add($.__views.__alloyId2137);
    $.__views.__alloyId2138 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2138"
    });
    $.__views.__alloyId2137.add($.__views.__alloyId2138);
    $.__views.__alloyId2139 = Ti.UI.createLabel({
        text: "Proessional Group/Job",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2139"
    });
    $.__views.__alloyId2138.add($.__views.__alloyId2139);
    $.__views.__alloyId2140 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2140"
    });
    $.__views.__alloyId2137.add($.__views.__alloyId2140);
    $.__views.__alloyId2141 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2141"
    });
    $.__views.__alloyId2140.add($.__views.__alloyId2141);
    $.__views.__alloyId2142 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2142"
    });
    $.__views.__alloyId2137.add($.__views.__alloyId2142);
    $.__views.__alloyId2143 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2143"
    });
    $.__views.__alloyId2142.add($.__views.__alloyId2143);
    $.__views.__alloyId2144 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2144"
    });
    $.__views.scrollView.add($.__views.__alloyId2144);
    $.__views.__alloyId2145 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2145"
    });
    $.__views.__alloyId2144.add($.__views.__alloyId2145);
    $.__views.__alloyId2146 = Ti.UI.createLabel({
        text: "Income Group",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2146"
    });
    $.__views.__alloyId2145.add($.__views.__alloyId2146);
    $.__views.__alloyId2147 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2147"
    });
    $.__views.__alloyId2144.add($.__views.__alloyId2147);
    $.__views.__alloyId2148 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2148"
    });
    $.__views.__alloyId2147.add($.__views.__alloyId2148);
    $.__views.__alloyId2149 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2149"
    });
    $.__views.__alloyId2144.add($.__views.__alloyId2149);
    $.__views.__alloyId2150 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2150"
    });
    $.__views.__alloyId2149.add($.__views.__alloyId2150);
    $.__views.__alloyId2151 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2151"
    });
    $.__views.scrollView.add($.__views.__alloyId2151);
    $.__views.__alloyId2152 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2152"
    });
    $.__views.__alloyId2151.add($.__views.__alloyId2152);
    $.__views.__alloyId2153 = Ti.UI.createLabel({
        text: "Interest",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2153"
    });
    $.__views.__alloyId2152.add($.__views.__alloyId2153);
    $.__views.__alloyId2154 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2154"
    });
    $.__views.__alloyId2151.add($.__views.__alloyId2154);
    $.__views.__alloyId2155 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2155"
    });
    $.__views.__alloyId2154.add($.__views.__alloyId2155);
    $.__views.__alloyId2156 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2156"
    });
    $.__views.__alloyId2151.add($.__views.__alloyId2156);
    $.__views.__alloyId2157 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2157"
    });
    $.__views.__alloyId2156.add($.__views.__alloyId2157);
    $.__views.__alloyId2158 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2158"
    });
    $.__views.scrollView.add($.__views.__alloyId2158);
    $.__views.__alloyId2159 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2159"
    });
    $.__views.__alloyId2158.add($.__views.__alloyId2159);
    $.__views.__alloyId2160 = Ti.UI.createLabel({
        text: "Marital Status",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2160"
    });
    $.__views.__alloyId2159.add($.__views.__alloyId2160);
    $.__views.__alloyId2161 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2161"
    });
    $.__views.__alloyId2158.add($.__views.__alloyId2161);
    $.__views.__alloyId2162 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2162"
    });
    $.__views.__alloyId2161.add($.__views.__alloyId2162);
    $.__views.__alloyId2163 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2163"
    });
    $.__views.__alloyId2158.add($.__views.__alloyId2163);
    $.__views.__alloyId2164 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2164"
    });
    $.__views.__alloyId2163.add($.__views.__alloyId2164);
    $.__views.__alloyId2165 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2165"
    });
    $.__views.scrollView.add($.__views.__alloyId2165);
    $.__views.__alloyId2166 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2166"
    });
    $.__views.__alloyId2165.add($.__views.__alloyId2166);
    $.__views.__alloyId2167 = Ti.UI.createLabel({
        text: "Race",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2167"
    });
    $.__views.__alloyId2166.add($.__views.__alloyId2167);
    $.__views.__alloyId2168 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2168"
    });
    $.__views.__alloyId2165.add($.__views.__alloyId2168);
    $.__views.__alloyId2169 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2169"
    });
    $.__views.__alloyId2168.add($.__views.__alloyId2169);
    $.__views.__alloyId2170 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2170"
    });
    $.__views.__alloyId2165.add($.__views.__alloyId2170);
    $.__views.__alloyId2171 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2171"
    });
    $.__views.__alloyId2170.add($.__views.__alloyId2171);
    $.__views.__alloyId2172 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2172"
    });
    $.__views.scrollView.add($.__views.__alloyId2172);
    $.__views.__alloyId2173 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2173"
    });
    $.__views.__alloyId2172.add($.__views.__alloyId2173);
    $.__views.__alloyId2174 = Ti.UI.createLabel({
        text: "Religion",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2174"
    });
    $.__views.__alloyId2173.add($.__views.__alloyId2174);
    $.__views.__alloyId2175 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2175"
    });
    $.__views.__alloyId2172.add($.__views.__alloyId2175);
    $.__views.__alloyId2176 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2176"
    });
    $.__views.__alloyId2175.add($.__views.__alloyId2176);
    $.__views.__alloyId2177 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2177"
    });
    $.__views.__alloyId2172.add($.__views.__alloyId2177);
    $.__views.__alloyId2178 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2178"
    });
    $.__views.__alloyId2177.add($.__views.__alloyId2178);
    $.__views.__alloyId2179 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2179"
    });
    $.__views.scrollView.add($.__views.__alloyId2179);
    $.__views.__alloyId2180 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2180"
    });
    $.__views.__alloyId2179.add($.__views.__alloyId2180);
    $.__views.__alloyId2181 = Ti.UI.createLabel({
        text: "Change Password",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2181"
    });
    $.__views.__alloyId2180.add($.__views.__alloyId2181);
    $.__views.__alloyId2182 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2182"
    });
    $.__views.__alloyId2179.add($.__views.__alloyId2182);
    $.__views.__alloyId2183 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        id: "__alloyId2183"
    });
    $.__views.__alloyId2182.add($.__views.__alloyId2183);
    $.__views.__alloyId2184 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2184"
    });
    $.__views.__alloyId2179.add($.__views.__alloyId2184);
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2184.add($.__views.arrow);
    $.__views.__alloyId2185 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2185"
    });
    $.__views.profile.add($.__views.__alloyId2185);
    $.__views.__alloyId2186 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        height: "100%",
        width: "49.72%",
        textAlign: "center",
        id: "__alloyId2186"
    });
    $.__views.__alloyId2185.add($.__views.__alloyId2186);
    $.__views.__alloyId2187 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId2187"
    });
    $.__views.__alloyId2185.add($.__views.__alloyId2187);
    $.__views.__alloyId2188 = Ti.UI.createLabel({
        text: "Clear",
        color: "white",
        height: "100%",
        width: "49.72%",
        textAlign: "center",
        id: "__alloyId2188"
    });
    $.__views.__alloyId2185.add($.__views.__alloyId2188);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId2099!click!accountDetails"] && $.__views.__alloyId2099.addEventListener("click", accountDetails);
    __defers["$.__views.__alloyId2101!click!back"] && $.__views.__alloyId2101.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;