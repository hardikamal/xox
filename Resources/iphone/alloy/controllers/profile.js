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
    $.__views.__alloyId2160 = Alloy.createController("_header", {
        id: "__alloyId2160",
        __parentSymbol: $.__views.profile
    });
    $.__views.__alloyId2160.setParent($.__views.profile);
    $.__views.__alloyId2161 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2161"
    });
    $.__views.profile.add($.__views.__alloyId2161);
    $.__views.__alloyId2162 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId2162"
    });
    $.__views.__alloyId2161.add($.__views.__alloyId2162);
    $.__views.__alloyId2163 = Ti.UI.createLabel({
        text: "Account Details",
        backgroundColor: "transparent",
        height: "50",
        width: "45%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        color: "white",
        id: "__alloyId2163"
    });
    $.__views.__alloyId2162.add($.__views.__alloyId2163);
    accountDetails ? $.__views.__alloyId2163.addEventListener("click", accountDetails) : __defers["$.__views.__alloyId2163!click!accountDetails"] = true;
    $.__views.__alloyId2164 = Ti.UI.createLabel({
        text: "My Profile",
        backgroundColor: "#bf0404",
        height: "50",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: "45%",
        color: "white",
        id: "__alloyId2164"
    });
    $.__views.__alloyId2162.add($.__views.__alloyId2164);
    $.__views.__alloyId2165 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "10%",
        height: "30",
        top: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2165"
    });
    $.__views.__alloyId2162.add($.__views.__alloyId2165);
    back ? $.__views.__alloyId2165.addEventListener("click", back) : __defers["$.__views.__alloyId2165!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F5F5F5"
    });
    $.__views.profile.add($.__views.scrollView);
    $.__views.__alloyId2166 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2166"
    });
    $.__views.scrollView.add($.__views.__alloyId2166);
    $.__views.__alloyId2167 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2167"
    });
    $.__views.__alloyId2166.add($.__views.__alloyId2167);
    $.__views.__alloyId2168 = Ti.UI.createLabel({
        text: "Address",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2168"
    });
    $.__views.__alloyId2167.add($.__views.__alloyId2168);
    $.__views.__alloyId2169 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2169"
    });
    $.__views.__alloyId2166.add($.__views.__alloyId2169);
    $.__views.__alloyId2170 = Ti.UI.createLabel({
        text: "No.8 Jalan Puchong,Selangor...",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2170"
    });
    $.__views.__alloyId2169.add($.__views.__alloyId2170);
    $.__views.__alloyId2171 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2171"
    });
    $.__views.__alloyId2166.add($.__views.__alloyId2171);
    $.__views.__alloyId2172 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2172"
    });
    $.__views.__alloyId2171.add($.__views.__alloyId2172);
    $.__views.__alloyId2173 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2173"
    });
    $.__views.scrollView.add($.__views.__alloyId2173);
    $.__views.__alloyId2174 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2174"
    });
    $.__views.__alloyId2173.add($.__views.__alloyId2174);
    $.__views.__alloyId2175 = Ti.UI.createLabel({
        text: "NRIC/Passport/Armed Force ID",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2175"
    });
    $.__views.__alloyId2174.add($.__views.__alloyId2175);
    $.__views.__alloyId2176 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2176"
    });
    $.__views.__alloyId2173.add($.__views.__alloyId2176);
    $.__views.__alloyId2177 = Ti.UI.createLabel({
        text: "000000 00 0000",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2177"
    });
    $.__views.__alloyId2176.add($.__views.__alloyId2177);
    $.__views.__alloyId2178 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2178"
    });
    $.__views.__alloyId2173.add($.__views.__alloyId2178);
    $.__views.__alloyId2179 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2179"
    });
    $.__views.__alloyId2178.add($.__views.__alloyId2179);
    $.__views.__alloyId2180 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2180"
    });
    $.__views.scrollView.add($.__views.__alloyId2180);
    $.__views.__alloyId2181 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2181"
    });
    $.__views.__alloyId2180.add($.__views.__alloyId2181);
    $.__views.__alloyId2182 = Ti.UI.createLabel({
        text: "Email Address",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2182"
    });
    $.__views.__alloyId2181.add($.__views.__alloyId2182);
    $.__views.__alloyId2183 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2183"
    });
    $.__views.__alloyId2180.add($.__views.__alloyId2183);
    $.__views.__alloyId2184 = Ti.UI.createLabel({
        text: "sample@gmail.com",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2184"
    });
    $.__views.__alloyId2183.add($.__views.__alloyId2184);
    $.__views.__alloyId2185 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2185"
    });
    $.__views.__alloyId2180.add($.__views.__alloyId2185);
    $.__views.__alloyId2186 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2186"
    });
    $.__views.__alloyId2185.add($.__views.__alloyId2186);
    $.__views.__alloyId2187 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2187"
    });
    $.__views.scrollView.add($.__views.__alloyId2187);
    $.__views.__alloyId2188 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2188"
    });
    $.__views.__alloyId2187.add($.__views.__alloyId2188);
    $.__views.__alloyId2189 = Ti.UI.createLabel({
        text: "Birthday",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2189"
    });
    $.__views.__alloyId2188.add($.__views.__alloyId2189);
    $.__views.__alloyId2190 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2190"
    });
    $.__views.__alloyId2187.add($.__views.__alloyId2190);
    $.__views.__alloyId2191 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2191"
    });
    $.__views.__alloyId2190.add($.__views.__alloyId2191);
    $.__views.__alloyId2192 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2192"
    });
    $.__views.__alloyId2187.add($.__views.__alloyId2192);
    $.__views.__alloyId2193 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2193"
    });
    $.__views.__alloyId2192.add($.__views.__alloyId2193);
    $.__views.__alloyId2194 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2194"
    });
    $.__views.scrollView.add($.__views.__alloyId2194);
    $.__views.__alloyId2195 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2195"
    });
    $.__views.__alloyId2194.add($.__views.__alloyId2195);
    $.__views.__alloyId2196 = Ti.UI.createLabel({
        text: "Gender",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2196"
    });
    $.__views.__alloyId2195.add($.__views.__alloyId2196);
    $.__views.__alloyId2197 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2197"
    });
    $.__views.__alloyId2194.add($.__views.__alloyId2197);
    $.__views.__alloyId2198 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2198"
    });
    $.__views.__alloyId2197.add($.__views.__alloyId2198);
    $.__views.__alloyId2199 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2199"
    });
    $.__views.__alloyId2194.add($.__views.__alloyId2199);
    $.__views.__alloyId2200 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2200"
    });
    $.__views.__alloyId2199.add($.__views.__alloyId2200);
    $.__views.__alloyId2201 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2201"
    });
    $.__views.scrollView.add($.__views.__alloyId2201);
    $.__views.__alloyId2202 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2202"
    });
    $.__views.__alloyId2201.add($.__views.__alloyId2202);
    $.__views.__alloyId2203 = Ti.UI.createLabel({
        text: "Proessional Group/Job",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2203"
    });
    $.__views.__alloyId2202.add($.__views.__alloyId2203);
    $.__views.__alloyId2204 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2204"
    });
    $.__views.__alloyId2201.add($.__views.__alloyId2204);
    $.__views.__alloyId2205 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2205"
    });
    $.__views.__alloyId2204.add($.__views.__alloyId2205);
    $.__views.__alloyId2206 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2206"
    });
    $.__views.__alloyId2201.add($.__views.__alloyId2206);
    $.__views.__alloyId2207 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2207"
    });
    $.__views.__alloyId2206.add($.__views.__alloyId2207);
    $.__views.__alloyId2208 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2208"
    });
    $.__views.scrollView.add($.__views.__alloyId2208);
    $.__views.__alloyId2209 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2209"
    });
    $.__views.__alloyId2208.add($.__views.__alloyId2209);
    $.__views.__alloyId2210 = Ti.UI.createLabel({
        text: "Income Group",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2210"
    });
    $.__views.__alloyId2209.add($.__views.__alloyId2210);
    $.__views.__alloyId2211 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2211"
    });
    $.__views.__alloyId2208.add($.__views.__alloyId2211);
    $.__views.__alloyId2212 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2212"
    });
    $.__views.__alloyId2211.add($.__views.__alloyId2212);
    $.__views.__alloyId2213 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2213"
    });
    $.__views.__alloyId2208.add($.__views.__alloyId2213);
    $.__views.__alloyId2214 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2214"
    });
    $.__views.__alloyId2213.add($.__views.__alloyId2214);
    $.__views.__alloyId2215 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2215"
    });
    $.__views.scrollView.add($.__views.__alloyId2215);
    $.__views.__alloyId2216 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2216"
    });
    $.__views.__alloyId2215.add($.__views.__alloyId2216);
    $.__views.__alloyId2217 = Ti.UI.createLabel({
        text: "Interest",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2217"
    });
    $.__views.__alloyId2216.add($.__views.__alloyId2217);
    $.__views.__alloyId2218 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2218"
    });
    $.__views.__alloyId2215.add($.__views.__alloyId2218);
    $.__views.__alloyId2219 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2219"
    });
    $.__views.__alloyId2218.add($.__views.__alloyId2219);
    $.__views.__alloyId2220 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2220"
    });
    $.__views.__alloyId2215.add($.__views.__alloyId2220);
    $.__views.__alloyId2221 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2221"
    });
    $.__views.__alloyId2220.add($.__views.__alloyId2221);
    $.__views.__alloyId2222 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2222"
    });
    $.__views.scrollView.add($.__views.__alloyId2222);
    $.__views.__alloyId2223 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2223"
    });
    $.__views.__alloyId2222.add($.__views.__alloyId2223);
    $.__views.__alloyId2224 = Ti.UI.createLabel({
        text: "Marital Status",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2224"
    });
    $.__views.__alloyId2223.add($.__views.__alloyId2224);
    $.__views.__alloyId2225 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2225"
    });
    $.__views.__alloyId2222.add($.__views.__alloyId2225);
    $.__views.__alloyId2226 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2226"
    });
    $.__views.__alloyId2225.add($.__views.__alloyId2226);
    $.__views.__alloyId2227 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2227"
    });
    $.__views.__alloyId2222.add($.__views.__alloyId2227);
    $.__views.__alloyId2228 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2228"
    });
    $.__views.__alloyId2227.add($.__views.__alloyId2228);
    $.__views.__alloyId2229 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2229"
    });
    $.__views.scrollView.add($.__views.__alloyId2229);
    $.__views.__alloyId2230 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2230"
    });
    $.__views.__alloyId2229.add($.__views.__alloyId2230);
    $.__views.__alloyId2231 = Ti.UI.createLabel({
        text: "Race",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2231"
    });
    $.__views.__alloyId2230.add($.__views.__alloyId2231);
    $.__views.__alloyId2232 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2232"
    });
    $.__views.__alloyId2229.add($.__views.__alloyId2232);
    $.__views.__alloyId2233 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2233"
    });
    $.__views.__alloyId2232.add($.__views.__alloyId2233);
    $.__views.__alloyId2234 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2234"
    });
    $.__views.__alloyId2229.add($.__views.__alloyId2234);
    $.__views.__alloyId2235 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2235"
    });
    $.__views.__alloyId2234.add($.__views.__alloyId2235);
    $.__views.__alloyId2236 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2236"
    });
    $.__views.scrollView.add($.__views.__alloyId2236);
    $.__views.__alloyId2237 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2237"
    });
    $.__views.__alloyId2236.add($.__views.__alloyId2237);
    $.__views.__alloyId2238 = Ti.UI.createLabel({
        text: "Religion",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2238"
    });
    $.__views.__alloyId2237.add($.__views.__alloyId2238);
    $.__views.__alloyId2239 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2239"
    });
    $.__views.__alloyId2236.add($.__views.__alloyId2239);
    $.__views.__alloyId2240 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2240"
    });
    $.__views.__alloyId2239.add($.__views.__alloyId2240);
    $.__views.__alloyId2241 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2241"
    });
    $.__views.__alloyId2236.add($.__views.__alloyId2241);
    $.__views.__alloyId2242 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2242"
    });
    $.__views.__alloyId2241.add($.__views.__alloyId2242);
    $.__views.__alloyId2243 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2243"
    });
    $.__views.scrollView.add($.__views.__alloyId2243);
    $.__views.__alloyId2244 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2244"
    });
    $.__views.__alloyId2243.add($.__views.__alloyId2244);
    $.__views.__alloyId2245 = Ti.UI.createLabel({
        text: "Change Password",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2245"
    });
    $.__views.__alloyId2244.add($.__views.__alloyId2245);
    $.__views.__alloyId2246 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2246"
    });
    $.__views.__alloyId2243.add($.__views.__alloyId2246);
    $.__views.__alloyId2247 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        id: "__alloyId2247"
    });
    $.__views.__alloyId2246.add($.__views.__alloyId2247);
    $.__views.__alloyId2248 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2248"
    });
    $.__views.__alloyId2243.add($.__views.__alloyId2248);
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2248.add($.__views.arrow);
    $.__views.__alloyId2249 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2249"
    });
    $.__views.profile.add($.__views.__alloyId2249);
    $.__views.__alloyId2250 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        height: "100%",
        width: "49.72%",
        textAlign: "center",
        id: "__alloyId2250"
    });
    $.__views.__alloyId2249.add($.__views.__alloyId2250);
    $.__views.__alloyId2251 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId2251"
    });
    $.__views.__alloyId2249.add($.__views.__alloyId2251);
    $.__views.__alloyId2252 = Ti.UI.createLabel({
        text: "Clear",
        color: "white",
        height: "100%",
        width: "49.72%",
        textAlign: "center",
        id: "__alloyId2252"
    });
    $.__views.__alloyId2249.add($.__views.__alloyId2252);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId2163!click!accountDetails"] && $.__views.__alloyId2163.addEventListener("click", accountDetails);
    __defers["$.__views.__alloyId2165!click!back"] && $.__views.__alloyId2165.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;