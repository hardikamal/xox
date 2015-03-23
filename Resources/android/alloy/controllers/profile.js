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
    $.__views.__alloyId1935 = Alloy.createController("_header", {
        id: "__alloyId1935",
        __parentSymbol: $.__views.profile
    });
    $.__views.__alloyId1935.setParent($.__views.profile);
    $.__views.__alloyId1936 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1936"
    });
    $.__views.profile.add($.__views.__alloyId1936);
    $.__views.__alloyId1937 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1937"
    });
    $.__views.__alloyId1936.add($.__views.__alloyId1937);
    $.__views.__alloyId1938 = Ti.UI.createLabel({
        text: "Account Details",
        backgroundColor: "transparent",
        height: "50",
        width: "45%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        color: "white",
        id: "__alloyId1938"
    });
    $.__views.__alloyId1937.add($.__views.__alloyId1938);
    accountDetails ? $.__views.__alloyId1938.addEventListener("click", accountDetails) : __defers["$.__views.__alloyId1938!click!accountDetails"] = true;
    $.__views.__alloyId1939 = Ti.UI.createLabel({
        text: "My Profile",
        backgroundColor: "#bf0404",
        height: "50",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: "45%",
        color: "white",
        id: "__alloyId1939"
    });
    $.__views.__alloyId1937.add($.__views.__alloyId1939);
    $.__views.__alloyId1940 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "10%",
        height: "30",
        top: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1940"
    });
    $.__views.__alloyId1937.add($.__views.__alloyId1940);
    back ? $.__views.__alloyId1940.addEventListener("click", back) : __defers["$.__views.__alloyId1940!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F5F5F5"
    });
    $.__views.profile.add($.__views.scrollView);
    $.__views.__alloyId1941 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1941"
    });
    $.__views.scrollView.add($.__views.__alloyId1941);
    $.__views.__alloyId1942 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1942"
    });
    $.__views.__alloyId1941.add($.__views.__alloyId1942);
    $.__views.__alloyId1943 = Ti.UI.createLabel({
        text: "Address",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1943"
    });
    $.__views.__alloyId1942.add($.__views.__alloyId1943);
    $.__views.__alloyId1944 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1944"
    });
    $.__views.__alloyId1941.add($.__views.__alloyId1944);
    $.__views.__alloyId1945 = Ti.UI.createLabel({
        text: "No.8 Jalan Puchong,Selangor...",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1945"
    });
    $.__views.__alloyId1944.add($.__views.__alloyId1945);
    $.__views.__alloyId1946 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1946"
    });
    $.__views.__alloyId1941.add($.__views.__alloyId1946);
    $.__views.__alloyId1947 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1947"
    });
    $.__views.__alloyId1946.add($.__views.__alloyId1947);
    $.__views.__alloyId1948 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1948"
    });
    $.__views.scrollView.add($.__views.__alloyId1948);
    $.__views.__alloyId1949 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1949"
    });
    $.__views.__alloyId1948.add($.__views.__alloyId1949);
    $.__views.__alloyId1950 = Ti.UI.createLabel({
        text: "NRIC/Passport/Armed Force ID",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1950"
    });
    $.__views.__alloyId1949.add($.__views.__alloyId1950);
    $.__views.__alloyId1951 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1951"
    });
    $.__views.__alloyId1948.add($.__views.__alloyId1951);
    $.__views.__alloyId1952 = Ti.UI.createLabel({
        text: "000000 00 0000",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1952"
    });
    $.__views.__alloyId1951.add($.__views.__alloyId1952);
    $.__views.__alloyId1953 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1953"
    });
    $.__views.__alloyId1948.add($.__views.__alloyId1953);
    $.__views.__alloyId1954 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1954"
    });
    $.__views.__alloyId1953.add($.__views.__alloyId1954);
    $.__views.__alloyId1955 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1955"
    });
    $.__views.scrollView.add($.__views.__alloyId1955);
    $.__views.__alloyId1956 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1956"
    });
    $.__views.__alloyId1955.add($.__views.__alloyId1956);
    $.__views.__alloyId1957 = Ti.UI.createLabel({
        text: "Email Address",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1957"
    });
    $.__views.__alloyId1956.add($.__views.__alloyId1957);
    $.__views.__alloyId1958 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1958"
    });
    $.__views.__alloyId1955.add($.__views.__alloyId1958);
    $.__views.__alloyId1959 = Ti.UI.createLabel({
        text: "sample@gmail.com",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1959"
    });
    $.__views.__alloyId1958.add($.__views.__alloyId1959);
    $.__views.__alloyId1960 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1960"
    });
    $.__views.__alloyId1955.add($.__views.__alloyId1960);
    $.__views.__alloyId1961 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1961"
    });
    $.__views.__alloyId1960.add($.__views.__alloyId1961);
    $.__views.__alloyId1962 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1962"
    });
    $.__views.scrollView.add($.__views.__alloyId1962);
    $.__views.__alloyId1963 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1963"
    });
    $.__views.__alloyId1962.add($.__views.__alloyId1963);
    $.__views.__alloyId1964 = Ti.UI.createLabel({
        text: "Birthday",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1964"
    });
    $.__views.__alloyId1963.add($.__views.__alloyId1964);
    $.__views.__alloyId1965 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1965"
    });
    $.__views.__alloyId1962.add($.__views.__alloyId1965);
    $.__views.__alloyId1966 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1966"
    });
    $.__views.__alloyId1965.add($.__views.__alloyId1966);
    $.__views.__alloyId1967 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1967"
    });
    $.__views.__alloyId1962.add($.__views.__alloyId1967);
    $.__views.__alloyId1968 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1968"
    });
    $.__views.__alloyId1967.add($.__views.__alloyId1968);
    $.__views.__alloyId1969 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1969"
    });
    $.__views.scrollView.add($.__views.__alloyId1969);
    $.__views.__alloyId1970 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1970"
    });
    $.__views.__alloyId1969.add($.__views.__alloyId1970);
    $.__views.__alloyId1971 = Ti.UI.createLabel({
        text: "Gender",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1971"
    });
    $.__views.__alloyId1970.add($.__views.__alloyId1971);
    $.__views.__alloyId1972 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1972"
    });
    $.__views.__alloyId1969.add($.__views.__alloyId1972);
    $.__views.__alloyId1973 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1973"
    });
    $.__views.__alloyId1972.add($.__views.__alloyId1973);
    $.__views.__alloyId1974 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1974"
    });
    $.__views.__alloyId1969.add($.__views.__alloyId1974);
    $.__views.__alloyId1975 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1975"
    });
    $.__views.__alloyId1974.add($.__views.__alloyId1975);
    $.__views.__alloyId1976 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1976"
    });
    $.__views.scrollView.add($.__views.__alloyId1976);
    $.__views.__alloyId1977 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1977"
    });
    $.__views.__alloyId1976.add($.__views.__alloyId1977);
    $.__views.__alloyId1978 = Ti.UI.createLabel({
        text: "Proessional Group/Job",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1978"
    });
    $.__views.__alloyId1977.add($.__views.__alloyId1978);
    $.__views.__alloyId1979 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1979"
    });
    $.__views.__alloyId1976.add($.__views.__alloyId1979);
    $.__views.__alloyId1980 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1980"
    });
    $.__views.__alloyId1979.add($.__views.__alloyId1980);
    $.__views.__alloyId1981 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1981"
    });
    $.__views.__alloyId1976.add($.__views.__alloyId1981);
    $.__views.__alloyId1982 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1982"
    });
    $.__views.__alloyId1981.add($.__views.__alloyId1982);
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
        text: "Income Group",
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
        text: "Interest",
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
        text: "Marital Status",
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
        text: "Race",
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
        text: "Religion",
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
        text: "Change Password",
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
        id: "__alloyId2022"
    });
    $.__views.__alloyId2021.add($.__views.__alloyId2022);
    $.__views.__alloyId2023 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2023"
    });
    $.__views.__alloyId2018.add($.__views.__alloyId2023);
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2023.add($.__views.arrow);
    $.__views.__alloyId2024 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2024"
    });
    $.__views.profile.add($.__views.__alloyId2024);
    $.__views.__alloyId2025 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        height: "100%",
        width: "49.72%",
        textAlign: "center",
        id: "__alloyId2025"
    });
    $.__views.__alloyId2024.add($.__views.__alloyId2025);
    $.__views.__alloyId2026 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId2026"
    });
    $.__views.__alloyId2024.add($.__views.__alloyId2026);
    $.__views.__alloyId2027 = Ti.UI.createLabel({
        text: "Clear",
        color: "white",
        height: "100%",
        width: "49.72%",
        textAlign: "center",
        id: "__alloyId2027"
    });
    $.__views.__alloyId2024.add($.__views.__alloyId2027);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    __defers["$.__views.__alloyId1938!click!accountDetails"] && $.__views.__alloyId1938.addEventListener("click", accountDetails);
    __defers["$.__views.__alloyId1940!click!back"] && $.__views.__alloyId1940.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;