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
    $.__views.__alloyId1977 = Alloy.createController("_header", {
        id: "__alloyId1977",
        __parentSymbol: $.__views.profile
    });
    $.__views.__alloyId1977.setParent($.__views.profile);
    $.__views.__alloyId1978 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1978"
    });
    $.__views.profile.add($.__views.__alloyId1978);
    $.__views.__alloyId1979 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1979"
    });
    $.__views.__alloyId1978.add($.__views.__alloyId1979);
    $.__views.__alloyId1980 = Ti.UI.createLabel({
        text: "Account Details",
        backgroundColor: "transparent",
        height: "50",
        width: "45%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        color: "white",
        id: "__alloyId1980"
    });
    $.__views.__alloyId1979.add($.__views.__alloyId1980);
    accountDetails ? $.__views.__alloyId1980.addEventListener("click", accountDetails) : __defers["$.__views.__alloyId1980!click!accountDetails"] = true;
    $.__views.__alloyId1981 = Ti.UI.createLabel({
        text: "My Profile",
        backgroundColor: "#bf0404",
        height: "50",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: "45%",
        color: "white",
        id: "__alloyId1981"
    });
    $.__views.__alloyId1979.add($.__views.__alloyId1981);
    $.__views.__alloyId1982 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "10%",
        height: "30",
        top: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1982"
    });
    $.__views.__alloyId1979.add($.__views.__alloyId1982);
    back ? $.__views.__alloyId1982.addEventListener("click", back) : __defers["$.__views.__alloyId1982!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F5F5F5"
    });
    $.__views.profile.add($.__views.scrollView);
    $.__views.__alloyId1983 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1983"
    });
    $.__views.scrollView.add($.__views.__alloyId1983);
    $.__views.__alloyId1984 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1984"
    });
    $.__views.__alloyId1983.add($.__views.__alloyId1984);
    $.__views.__alloyId1985 = Ti.UI.createLabel({
        text: "Address",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1985"
    });
    $.__views.__alloyId1984.add($.__views.__alloyId1985);
    $.__views.__alloyId1986 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1986"
    });
    $.__views.__alloyId1983.add($.__views.__alloyId1986);
    $.__views.__alloyId1987 = Ti.UI.createLabel({
        text: "No.8 Jalan Puchong,Selangor...",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1987"
    });
    $.__views.__alloyId1986.add($.__views.__alloyId1987);
    $.__views.__alloyId1988 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1988"
    });
    $.__views.__alloyId1983.add($.__views.__alloyId1988);
    $.__views.__alloyId1989 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1989"
    });
    $.__views.__alloyId1988.add($.__views.__alloyId1989);
    $.__views.__alloyId1990 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1990"
    });
    $.__views.scrollView.add($.__views.__alloyId1990);
    $.__views.__alloyId1991 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1991"
    });
    $.__views.__alloyId1990.add($.__views.__alloyId1991);
    $.__views.__alloyId1992 = Ti.UI.createLabel({
        text: "NRIC/Passport/Armed Force ID",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1992"
    });
    $.__views.__alloyId1991.add($.__views.__alloyId1992);
    $.__views.__alloyId1993 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1993"
    });
    $.__views.__alloyId1990.add($.__views.__alloyId1993);
    $.__views.__alloyId1994 = Ti.UI.createLabel({
        text: "000000 00 0000",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1994"
    });
    $.__views.__alloyId1993.add($.__views.__alloyId1994);
    $.__views.__alloyId1995 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1995"
    });
    $.__views.__alloyId1990.add($.__views.__alloyId1995);
    $.__views.__alloyId1996 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1996"
    });
    $.__views.__alloyId1995.add($.__views.__alloyId1996);
    $.__views.__alloyId1997 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1997"
    });
    $.__views.scrollView.add($.__views.__alloyId1997);
    $.__views.__alloyId1998 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1998"
    });
    $.__views.__alloyId1997.add($.__views.__alloyId1998);
    $.__views.__alloyId1999 = Ti.UI.createLabel({
        text: "Email Address",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1999"
    });
    $.__views.__alloyId1998.add($.__views.__alloyId1999);
    $.__views.__alloyId2000 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2000"
    });
    $.__views.__alloyId1997.add($.__views.__alloyId2000);
    $.__views.__alloyId2001 = Ti.UI.createLabel({
        text: "sample@gmail.com",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2001"
    });
    $.__views.__alloyId2000.add($.__views.__alloyId2001);
    $.__views.__alloyId2002 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2002"
    });
    $.__views.__alloyId1997.add($.__views.__alloyId2002);
    $.__views.__alloyId2003 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2003"
    });
    $.__views.__alloyId2002.add($.__views.__alloyId2003);
    $.__views.__alloyId2004 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2004"
    });
    $.__views.scrollView.add($.__views.__alloyId2004);
    $.__views.__alloyId2005 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2005"
    });
    $.__views.__alloyId2004.add($.__views.__alloyId2005);
    $.__views.__alloyId2006 = Ti.UI.createLabel({
        text: "Birthday",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2006"
    });
    $.__views.__alloyId2005.add($.__views.__alloyId2006);
    $.__views.__alloyId2007 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2007"
    });
    $.__views.__alloyId2004.add($.__views.__alloyId2007);
    $.__views.__alloyId2008 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2008"
    });
    $.__views.__alloyId2007.add($.__views.__alloyId2008);
    $.__views.__alloyId2009 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2009"
    });
    $.__views.__alloyId2004.add($.__views.__alloyId2009);
    $.__views.__alloyId2010 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2010"
    });
    $.__views.__alloyId2009.add($.__views.__alloyId2010);
    $.__views.__alloyId2011 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2011"
    });
    $.__views.scrollView.add($.__views.__alloyId2011);
    $.__views.__alloyId2012 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2012"
    });
    $.__views.__alloyId2011.add($.__views.__alloyId2012);
    $.__views.__alloyId2013 = Ti.UI.createLabel({
        text: "Gender",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2013"
    });
    $.__views.__alloyId2012.add($.__views.__alloyId2013);
    $.__views.__alloyId2014 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2014"
    });
    $.__views.__alloyId2011.add($.__views.__alloyId2014);
    $.__views.__alloyId2015 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2015"
    });
    $.__views.__alloyId2014.add($.__views.__alloyId2015);
    $.__views.__alloyId2016 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2016"
    });
    $.__views.__alloyId2011.add($.__views.__alloyId2016);
    $.__views.__alloyId2017 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2017"
    });
    $.__views.__alloyId2016.add($.__views.__alloyId2017);
    $.__views.__alloyId2018 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2018"
    });
    $.__views.scrollView.add($.__views.__alloyId2018);
    $.__views.__alloyId2019 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2019"
    });
    $.__views.__alloyId2018.add($.__views.__alloyId2019);
    $.__views.__alloyId2020 = Ti.UI.createLabel({
        text: "Proessional Group/Job",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2020"
    });
    $.__views.__alloyId2019.add($.__views.__alloyId2020);
    $.__views.__alloyId2021 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2021"
    });
    $.__views.__alloyId2018.add($.__views.__alloyId2021);
    $.__views.__alloyId2022 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2022"
    });
    $.__views.__alloyId2021.add($.__views.__alloyId2022);
    $.__views.__alloyId2023 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2023"
    });
    $.__views.__alloyId2018.add($.__views.__alloyId2023);
    $.__views.__alloyId2024 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2024"
    });
    $.__views.__alloyId2023.add($.__views.__alloyId2024);
    $.__views.__alloyId2025 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2025"
    });
    $.__views.scrollView.add($.__views.__alloyId2025);
    $.__views.__alloyId2026 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2026"
    });
    $.__views.__alloyId2025.add($.__views.__alloyId2026);
    $.__views.__alloyId2027 = Ti.UI.createLabel({
        text: "Income Group",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2027"
    });
    $.__views.__alloyId2026.add($.__views.__alloyId2027);
    $.__views.__alloyId2028 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2028"
    });
    $.__views.__alloyId2025.add($.__views.__alloyId2028);
    $.__views.__alloyId2029 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2029"
    });
    $.__views.__alloyId2028.add($.__views.__alloyId2029);
    $.__views.__alloyId2030 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2030"
    });
    $.__views.__alloyId2025.add($.__views.__alloyId2030);
    $.__views.__alloyId2031 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2031"
    });
    $.__views.__alloyId2030.add($.__views.__alloyId2031);
    $.__views.__alloyId2032 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2032"
    });
    $.__views.scrollView.add($.__views.__alloyId2032);
    $.__views.__alloyId2033 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2033"
    });
    $.__views.__alloyId2032.add($.__views.__alloyId2033);
    $.__views.__alloyId2034 = Ti.UI.createLabel({
        text: "Interest",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2034"
    });
    $.__views.__alloyId2033.add($.__views.__alloyId2034);
    $.__views.__alloyId2035 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2035"
    });
    $.__views.__alloyId2032.add($.__views.__alloyId2035);
    $.__views.__alloyId2036 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2036"
    });
    $.__views.__alloyId2035.add($.__views.__alloyId2036);
    $.__views.__alloyId2037 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2037"
    });
    $.__views.__alloyId2032.add($.__views.__alloyId2037);
    $.__views.__alloyId2038 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2038"
    });
    $.__views.__alloyId2037.add($.__views.__alloyId2038);
    $.__views.__alloyId2039 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2039"
    });
    $.__views.scrollView.add($.__views.__alloyId2039);
    $.__views.__alloyId2040 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2040"
    });
    $.__views.__alloyId2039.add($.__views.__alloyId2040);
    $.__views.__alloyId2041 = Ti.UI.createLabel({
        text: "Marital Status",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2041"
    });
    $.__views.__alloyId2040.add($.__views.__alloyId2041);
    $.__views.__alloyId2042 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2042"
    });
    $.__views.__alloyId2039.add($.__views.__alloyId2042);
    $.__views.__alloyId2043 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2043"
    });
    $.__views.__alloyId2042.add($.__views.__alloyId2043);
    $.__views.__alloyId2044 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2044"
    });
    $.__views.__alloyId2039.add($.__views.__alloyId2044);
    $.__views.__alloyId2045 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2045"
    });
    $.__views.__alloyId2044.add($.__views.__alloyId2045);
    $.__views.__alloyId2046 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2046"
    });
    $.__views.scrollView.add($.__views.__alloyId2046);
    $.__views.__alloyId2047 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2047"
    });
    $.__views.__alloyId2046.add($.__views.__alloyId2047);
    $.__views.__alloyId2048 = Ti.UI.createLabel({
        text: "Race",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2048"
    });
    $.__views.__alloyId2047.add($.__views.__alloyId2048);
    $.__views.__alloyId2049 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2049"
    });
    $.__views.__alloyId2046.add($.__views.__alloyId2049);
    $.__views.__alloyId2050 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2050"
    });
    $.__views.__alloyId2049.add($.__views.__alloyId2050);
    $.__views.__alloyId2051 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2051"
    });
    $.__views.__alloyId2046.add($.__views.__alloyId2051);
    $.__views.__alloyId2052 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2052"
    });
    $.__views.__alloyId2051.add($.__views.__alloyId2052);
    $.__views.__alloyId2053 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2053"
    });
    $.__views.scrollView.add($.__views.__alloyId2053);
    $.__views.__alloyId2054 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2054"
    });
    $.__views.__alloyId2053.add($.__views.__alloyId2054);
    $.__views.__alloyId2055 = Ti.UI.createLabel({
        text: "Religion",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2055"
    });
    $.__views.__alloyId2054.add($.__views.__alloyId2055);
    $.__views.__alloyId2056 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2056"
    });
    $.__views.__alloyId2053.add($.__views.__alloyId2056);
    $.__views.__alloyId2057 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2057"
    });
    $.__views.__alloyId2056.add($.__views.__alloyId2057);
    $.__views.__alloyId2058 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2058"
    });
    $.__views.__alloyId2053.add($.__views.__alloyId2058);
    $.__views.__alloyId2059 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2059"
    });
    $.__views.__alloyId2058.add($.__views.__alloyId2059);
    $.__views.__alloyId2060 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2060"
    });
    $.__views.scrollView.add($.__views.__alloyId2060);
    $.__views.__alloyId2061 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2061"
    });
    $.__views.__alloyId2060.add($.__views.__alloyId2061);
    $.__views.__alloyId2062 = Ti.UI.createLabel({
        text: "Change Password",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2062"
    });
    $.__views.__alloyId2061.add($.__views.__alloyId2062);
    $.__views.__alloyId2063 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2063"
    });
    $.__views.__alloyId2060.add($.__views.__alloyId2063);
    $.__views.__alloyId2064 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        id: "__alloyId2064"
    });
    $.__views.__alloyId2063.add($.__views.__alloyId2064);
    $.__views.__alloyId2065 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2065"
    });
    $.__views.__alloyId2060.add($.__views.__alloyId2065);
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2065.add($.__views.arrow);
    $.__views.__alloyId2066 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2066"
    });
    $.__views.profile.add($.__views.__alloyId2066);
    $.__views.__alloyId2067 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        height: "100%",
        width: "49.72%",
        textAlign: "center",
        id: "__alloyId2067"
    });
    $.__views.__alloyId2066.add($.__views.__alloyId2067);
    $.__views.__alloyId2068 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId2068"
    });
    $.__views.__alloyId2066.add($.__views.__alloyId2068);
    $.__views.__alloyId2069 = Ti.UI.createLabel({
        text: "Clear",
        color: "white",
        height: "100%",
        width: "49.72%",
        textAlign: "center",
        id: "__alloyId2069"
    });
    $.__views.__alloyId2066.add($.__views.__alloyId2069);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    __defers["$.__views.__alloyId1980!click!accountDetails"] && $.__views.__alloyId1980.addEventListener("click", accountDetails);
    __defers["$.__views.__alloyId1982!click!back"] && $.__views.__alloyId1982.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;