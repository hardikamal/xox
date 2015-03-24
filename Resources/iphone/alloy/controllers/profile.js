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
    $.__views.__alloyId1864 = Alloy.createController("_header", {
        id: "__alloyId1864",
        __parentSymbol: $.__views.profile
    });
    $.__views.__alloyId1864.setParent($.__views.profile);
    $.__views.__alloyId1865 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1865"
    });
    $.__views.profile.add($.__views.__alloyId1865);
    $.__views.__alloyId1866 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1866"
    });
    $.__views.__alloyId1865.add($.__views.__alloyId1866);
    $.__views.__alloyId1867 = Ti.UI.createLabel({
        text: "Account Details",
        backgroundColor: "transparent",
        height: "50",
        width: "45%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        color: "white",
        id: "__alloyId1867"
    });
    $.__views.__alloyId1866.add($.__views.__alloyId1867);
    accountDetails ? $.__views.__alloyId1867.addEventListener("click", accountDetails) : __defers["$.__views.__alloyId1867!click!accountDetails"] = true;
    $.__views.__alloyId1868 = Ti.UI.createLabel({
        text: "My Profile",
        backgroundColor: "#bf0404",
        height: "50",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: "45%",
        color: "white",
        id: "__alloyId1868"
    });
    $.__views.__alloyId1866.add($.__views.__alloyId1868);
    $.__views.__alloyId1869 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "10%",
        height: "30",
        top: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1869"
    });
    $.__views.__alloyId1866.add($.__views.__alloyId1869);
    back ? $.__views.__alloyId1869.addEventListener("click", back) : __defers["$.__views.__alloyId1869!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F5F5F5"
    });
    $.__views.profile.add($.__views.scrollView);
    $.__views.__alloyId1870 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1870"
    });
    $.__views.scrollView.add($.__views.__alloyId1870);
    $.__views.__alloyId1871 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1871"
    });
    $.__views.__alloyId1870.add($.__views.__alloyId1871);
    $.__views.__alloyId1872 = Ti.UI.createLabel({
        text: "Address",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1872"
    });
    $.__views.__alloyId1871.add($.__views.__alloyId1872);
    $.__views.__alloyId1873 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1873"
    });
    $.__views.__alloyId1870.add($.__views.__alloyId1873);
    $.__views.__alloyId1874 = Ti.UI.createLabel({
        text: "No.8 Jalan Puchong,Selangor...",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1874"
    });
    $.__views.__alloyId1873.add($.__views.__alloyId1874);
    $.__views.__alloyId1875 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1875"
    });
    $.__views.__alloyId1870.add($.__views.__alloyId1875);
    $.__views.__alloyId1876 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1876"
    });
    $.__views.__alloyId1875.add($.__views.__alloyId1876);
    $.__views.__alloyId1877 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1877"
    });
    $.__views.scrollView.add($.__views.__alloyId1877);
    $.__views.__alloyId1878 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1878"
    });
    $.__views.__alloyId1877.add($.__views.__alloyId1878);
    $.__views.__alloyId1879 = Ti.UI.createLabel({
        text: "NRIC/Passport/Armed Force ID",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1879"
    });
    $.__views.__alloyId1878.add($.__views.__alloyId1879);
    $.__views.__alloyId1880 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1880"
    });
    $.__views.__alloyId1877.add($.__views.__alloyId1880);
    $.__views.__alloyId1881 = Ti.UI.createLabel({
        text: "000000 00 0000",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1881"
    });
    $.__views.__alloyId1880.add($.__views.__alloyId1881);
    $.__views.__alloyId1882 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1882"
    });
    $.__views.__alloyId1877.add($.__views.__alloyId1882);
    $.__views.__alloyId1883 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1883"
    });
    $.__views.__alloyId1882.add($.__views.__alloyId1883);
    $.__views.__alloyId1884 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1884"
    });
    $.__views.scrollView.add($.__views.__alloyId1884);
    $.__views.__alloyId1885 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1885"
    });
    $.__views.__alloyId1884.add($.__views.__alloyId1885);
    $.__views.__alloyId1886 = Ti.UI.createLabel({
        text: "Email Address",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1886"
    });
    $.__views.__alloyId1885.add($.__views.__alloyId1886);
    $.__views.__alloyId1887 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1887"
    });
    $.__views.__alloyId1884.add($.__views.__alloyId1887);
    $.__views.__alloyId1888 = Ti.UI.createLabel({
        text: "sample@gmail.com",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1888"
    });
    $.__views.__alloyId1887.add($.__views.__alloyId1888);
    $.__views.__alloyId1889 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1889"
    });
    $.__views.__alloyId1884.add($.__views.__alloyId1889);
    $.__views.__alloyId1890 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1890"
    });
    $.__views.__alloyId1889.add($.__views.__alloyId1890);
    $.__views.__alloyId1891 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1891"
    });
    $.__views.scrollView.add($.__views.__alloyId1891);
    $.__views.__alloyId1892 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1892"
    });
    $.__views.__alloyId1891.add($.__views.__alloyId1892);
    $.__views.__alloyId1893 = Ti.UI.createLabel({
        text: "Birthday",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1893"
    });
    $.__views.__alloyId1892.add($.__views.__alloyId1893);
    $.__views.__alloyId1894 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1894"
    });
    $.__views.__alloyId1891.add($.__views.__alloyId1894);
    $.__views.__alloyId1895 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1895"
    });
    $.__views.__alloyId1894.add($.__views.__alloyId1895);
    $.__views.__alloyId1896 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1896"
    });
    $.__views.__alloyId1891.add($.__views.__alloyId1896);
    $.__views.__alloyId1897 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1897"
    });
    $.__views.__alloyId1896.add($.__views.__alloyId1897);
    $.__views.__alloyId1898 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1898"
    });
    $.__views.scrollView.add($.__views.__alloyId1898);
    $.__views.__alloyId1899 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1899"
    });
    $.__views.__alloyId1898.add($.__views.__alloyId1899);
    $.__views.__alloyId1900 = Ti.UI.createLabel({
        text: "Gender",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1900"
    });
    $.__views.__alloyId1899.add($.__views.__alloyId1900);
    $.__views.__alloyId1901 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1901"
    });
    $.__views.__alloyId1898.add($.__views.__alloyId1901);
    $.__views.__alloyId1902 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1902"
    });
    $.__views.__alloyId1901.add($.__views.__alloyId1902);
    $.__views.__alloyId1903 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1903"
    });
    $.__views.__alloyId1898.add($.__views.__alloyId1903);
    $.__views.__alloyId1904 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1904"
    });
    $.__views.__alloyId1903.add($.__views.__alloyId1904);
    $.__views.__alloyId1905 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1905"
    });
    $.__views.scrollView.add($.__views.__alloyId1905);
    $.__views.__alloyId1906 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1906"
    });
    $.__views.__alloyId1905.add($.__views.__alloyId1906);
    $.__views.__alloyId1907 = Ti.UI.createLabel({
        text: "Proessional Group/Job",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1907"
    });
    $.__views.__alloyId1906.add($.__views.__alloyId1907);
    $.__views.__alloyId1908 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1908"
    });
    $.__views.__alloyId1905.add($.__views.__alloyId1908);
    $.__views.__alloyId1909 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1909"
    });
    $.__views.__alloyId1908.add($.__views.__alloyId1909);
    $.__views.__alloyId1910 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1910"
    });
    $.__views.__alloyId1905.add($.__views.__alloyId1910);
    $.__views.__alloyId1911 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1911"
    });
    $.__views.__alloyId1910.add($.__views.__alloyId1911);
    $.__views.__alloyId1912 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1912"
    });
    $.__views.scrollView.add($.__views.__alloyId1912);
    $.__views.__alloyId1913 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1913"
    });
    $.__views.__alloyId1912.add($.__views.__alloyId1913);
    $.__views.__alloyId1914 = Ti.UI.createLabel({
        text: "Income Group",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1914"
    });
    $.__views.__alloyId1913.add($.__views.__alloyId1914);
    $.__views.__alloyId1915 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1915"
    });
    $.__views.__alloyId1912.add($.__views.__alloyId1915);
    $.__views.__alloyId1916 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1916"
    });
    $.__views.__alloyId1915.add($.__views.__alloyId1916);
    $.__views.__alloyId1917 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1917"
    });
    $.__views.__alloyId1912.add($.__views.__alloyId1917);
    $.__views.__alloyId1918 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1918"
    });
    $.__views.__alloyId1917.add($.__views.__alloyId1918);
    $.__views.__alloyId1919 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1919"
    });
    $.__views.scrollView.add($.__views.__alloyId1919);
    $.__views.__alloyId1920 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1920"
    });
    $.__views.__alloyId1919.add($.__views.__alloyId1920);
    $.__views.__alloyId1921 = Ti.UI.createLabel({
        text: "Interest",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1921"
    });
    $.__views.__alloyId1920.add($.__views.__alloyId1921);
    $.__views.__alloyId1922 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1922"
    });
    $.__views.__alloyId1919.add($.__views.__alloyId1922);
    $.__views.__alloyId1923 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1923"
    });
    $.__views.__alloyId1922.add($.__views.__alloyId1923);
    $.__views.__alloyId1924 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1924"
    });
    $.__views.__alloyId1919.add($.__views.__alloyId1924);
    $.__views.__alloyId1925 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1925"
    });
    $.__views.__alloyId1924.add($.__views.__alloyId1925);
    $.__views.__alloyId1926 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1926"
    });
    $.__views.scrollView.add($.__views.__alloyId1926);
    $.__views.__alloyId1927 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1927"
    });
    $.__views.__alloyId1926.add($.__views.__alloyId1927);
    $.__views.__alloyId1928 = Ti.UI.createLabel({
        text: "Marital Status",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1928"
    });
    $.__views.__alloyId1927.add($.__views.__alloyId1928);
    $.__views.__alloyId1929 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1929"
    });
    $.__views.__alloyId1926.add($.__views.__alloyId1929);
    $.__views.__alloyId1930 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1930"
    });
    $.__views.__alloyId1929.add($.__views.__alloyId1930);
    $.__views.__alloyId1931 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1931"
    });
    $.__views.__alloyId1926.add($.__views.__alloyId1931);
    $.__views.__alloyId1932 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1932"
    });
    $.__views.__alloyId1931.add($.__views.__alloyId1932);
    $.__views.__alloyId1933 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1933"
    });
    $.__views.scrollView.add($.__views.__alloyId1933);
    $.__views.__alloyId1934 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1934"
    });
    $.__views.__alloyId1933.add($.__views.__alloyId1934);
    $.__views.__alloyId1935 = Ti.UI.createLabel({
        text: "Race",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1935"
    });
    $.__views.__alloyId1934.add($.__views.__alloyId1935);
    $.__views.__alloyId1936 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1936"
    });
    $.__views.__alloyId1933.add($.__views.__alloyId1936);
    $.__views.__alloyId1937 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1937"
    });
    $.__views.__alloyId1936.add($.__views.__alloyId1937);
    $.__views.__alloyId1938 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1938"
    });
    $.__views.__alloyId1933.add($.__views.__alloyId1938);
    $.__views.__alloyId1939 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1939"
    });
    $.__views.__alloyId1938.add($.__views.__alloyId1939);
    $.__views.__alloyId1940 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1940"
    });
    $.__views.scrollView.add($.__views.__alloyId1940);
    $.__views.__alloyId1941 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1941"
    });
    $.__views.__alloyId1940.add($.__views.__alloyId1941);
    $.__views.__alloyId1942 = Ti.UI.createLabel({
        text: "Religion",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1942"
    });
    $.__views.__alloyId1941.add($.__views.__alloyId1942);
    $.__views.__alloyId1943 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1943"
    });
    $.__views.__alloyId1940.add($.__views.__alloyId1943);
    $.__views.__alloyId1944 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1944"
    });
    $.__views.__alloyId1943.add($.__views.__alloyId1944);
    $.__views.__alloyId1945 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1945"
    });
    $.__views.__alloyId1940.add($.__views.__alloyId1945);
    $.__views.__alloyId1946 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId1946"
    });
    $.__views.__alloyId1945.add($.__views.__alloyId1946);
    $.__views.__alloyId1947 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1947"
    });
    $.__views.scrollView.add($.__views.__alloyId1947);
    $.__views.__alloyId1948 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1948"
    });
    $.__views.__alloyId1947.add($.__views.__alloyId1948);
    $.__views.__alloyId1949 = Ti.UI.createLabel({
        text: "Change Password",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1949"
    });
    $.__views.__alloyId1948.add($.__views.__alloyId1949);
    $.__views.__alloyId1950 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1950"
    });
    $.__views.__alloyId1947.add($.__views.__alloyId1950);
    $.__views.__alloyId1951 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        id: "__alloyId1951"
    });
    $.__views.__alloyId1950.add($.__views.__alloyId1951);
    $.__views.__alloyId1952 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1952"
    });
    $.__views.__alloyId1947.add($.__views.__alloyId1952);
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1952.add($.__views.arrow);
    $.__views.__alloyId1953 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1953"
    });
    $.__views.profile.add($.__views.__alloyId1953);
    $.__views.__alloyId1954 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        height: "100%",
        width: "49.72%",
        textAlign: "center",
        id: "__alloyId1954"
    });
    $.__views.__alloyId1953.add($.__views.__alloyId1954);
    $.__views.__alloyId1955 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId1955"
    });
    $.__views.__alloyId1953.add($.__views.__alloyId1955);
    $.__views.__alloyId1956 = Ti.UI.createLabel({
        text: "Clear",
        color: "white",
        height: "100%",
        width: "49.72%",
        textAlign: "center",
        id: "__alloyId1956"
    });
    $.__views.__alloyId1953.add($.__views.__alloyId1956);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId1867!click!accountDetails"] && $.__views.__alloyId1867.addEventListener("click", accountDetails);
    __defers["$.__views.__alloyId1869!click!back"] && $.__views.__alloyId1869.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;