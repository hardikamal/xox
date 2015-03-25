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
        DRAWER.navigation("products", 1);
    }
    function rate(e) {
        console.log("rate");
        rate = e.row.title;
        ("iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname) && ($.rateLabel.text = rate);
        switch (e.rowIndex) {
          case 0:
            $.view1.setVisible(true);
            $.view2.setVisible(false);
            $.view3.setVisible(false);
            $.view4.setVisible(false);
            break;

          case 1:
            $.view1.setVisible(false);
            $.view2.setVisible(true);
            $.view3.setVisible(false);
            $.view4.setVisible(false);
            break;

          case 2:
            $.view1.setVisible(false);
            $.view2.setVisible(false);
            $.view3.setVisible(true);
            $.view4.setVisible(false);
            break;

          case 3:
            $.view1.setVisible(false);
            $.view2.setVisible(false);
            $.view3.setVisible(false);
            $.view4.setVisible(true);
        }
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
            $.contentView.height = 50;
            $.pickerView.height = 50;
            $.pickerContentView.height = 50;
            $.pickerView.setVisible(false);
            $.done.setVisible(false);
            $.picker.setVisible(false);
        }
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
    function subscribe() {
        console.log("subscribe");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "prepaid";
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
    $.__views.prepaid = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaid"
    });
    $.__views.prepaid && $.addTopLevelView($.__views.prepaid);
    $.__views.__alloyId1820 = Alloy.createController("_header", {
        id: "__alloyId1820",
        __parentSymbol: $.__views.prepaid
    });
    $.__views.__alloyId1820.setParent($.__views.prepaid);
    $.__views.__alloyId1821 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1821"
    });
    $.__views.prepaid.add($.__views.__alloyId1821);
    $.__views.__alloyId1822 = Ti.UI.createLabel({
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1822"
    });
    $.__views.__alloyId1821.add($.__views.__alloyId1822);
    $.__views.__alloyId1823 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1823"
    });
    $.__views.__alloyId1821.add($.__views.__alloyId1823);
    back ? $.__views.__alloyId1823.addEventListener("click", back) : __defers["$.__views.__alloyId1823!click!back"] = true;
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "50"
    });
    $.__views.prepaid.add($.__views.contentView);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
        width: "90%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.rateLabel = Ti.UI.createLabel({
        id: "rateLabel",
        height: "30",
        width: "100%",
        backgroundColor: "#FCFCFC",
        borderRadius: "15",
        borderColor: "#FCFCFC",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.rateLabel);
    showPicker ? $.__views.rateLabel.addEventListener("click", showPicker) : __defers["$.__views.rateLabel!click!showPicker"] = true;
    $.__views.__alloyId1824 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1824"
    });
    $.__views.pickerContentView.add($.__views.__alloyId1824);
    showPicker ? $.__views.__alloyId1824.addEventListener("click", showPicker) : __defers["$.__views.__alloyId1824!click!showPicker"] = true;
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
    var __alloyId1825 = [];
    $.__views.__alloyId1826 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId1826"
    });
    __alloyId1825.push($.__views.__alloyId1826);
    $.__views.__alloyId1827 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId1827"
    });
    __alloyId1825.push($.__views.__alloyId1827);
    $.__views.__alloyId1828 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId1828"
    });
    __alloyId1825.push($.__views.__alloyId1828);
    $.__views.__alloyId1829 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId1829"
    });
    __alloyId1825.push($.__views.__alloyId1829);
    $.__views.picker.add(__alloyId1825);
    rate ? $.__views.picker.addEventListener("change", rate) : __defers["$.__views.picker!change!rate"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "composite",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.prepaid.add($.__views.scrollView);
    $.__views.view1 = Ti.UI.createView({
        id: "view1",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "true"
    });
    $.__views.scrollView.add($.__views.view1);
    $.__views.__alloyId1830 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "red",
        id: "__alloyId1830"
    });
    $.__views.view1.add($.__views.__alloyId1830);
    $.__views.__alloyId1831 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1831"
    });
    $.__views.__alloyId1830.add($.__views.__alloyId1831);
    $.__views.__alloyId1832 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1832"
    });
    $.__views.__alloyId1831.add($.__views.__alloyId1832);
    $.__views.__alloyId1833 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1833"
    });
    $.__views.__alloyId1830.add($.__views.__alloyId1833);
    $.__views.__alloyId1834 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1834"
    });
    $.__views.__alloyId1833.add($.__views.__alloyId1834);
    $.__views.__alloyId1835 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1835"
    });
    $.__views.__alloyId1833.add($.__views.__alloyId1835);
    $.__views.__alloyId1836 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1836"
    });
    $.__views.__alloyId1830.add($.__views.__alloyId1836);
    $.__views.__alloyId1837 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1837"
    });
    $.__views.__alloyId1836.add($.__views.__alloyId1837);
    $.__views.__alloyId1838 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1838"
    });
    $.__views.__alloyId1836.add($.__views.__alloyId1838);
    $.__views.__alloyId1839 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1839"
    });
    $.__views.__alloyId1830.add($.__views.__alloyId1839);
    $.__views.__alloyId1840 = Ti.UI.createLabel({
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1840"
    });
    $.__views.__alloyId1839.add($.__views.__alloyId1840);
    $.__views.__alloyId1841 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1841"
    });
    $.__views.__alloyId1839.add($.__views.__alloyId1841);
    $.__views.__alloyId1842 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1842"
    });
    $.__views.view1.add($.__views.__alloyId1842);
    $.__views.__alloyId1843 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1843"
    });
    $.__views.__alloyId1842.add($.__views.__alloyId1843);
    $.__views.__alloyId1844 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1844"
    });
    $.__views.__alloyId1843.add($.__views.__alloyId1844);
    $.__views.__alloyId1845 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1845"
    });
    $.__views.__alloyId1842.add($.__views.__alloyId1845);
    $.__views.__alloyId1846 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1846"
    });
    $.__views.__alloyId1845.add($.__views.__alloyId1846);
    $.__views.__alloyId1847 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1847"
    });
    $.__views.__alloyId1845.add($.__views.__alloyId1847);
    $.__views.__alloyId1848 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1848"
    });
    $.__views.__alloyId1842.add($.__views.__alloyId1848);
    $.__views.__alloyId1849 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1849"
    });
    $.__views.__alloyId1848.add($.__views.__alloyId1849);
    $.__views.__alloyId1850 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1850"
    });
    $.__views.__alloyId1848.add($.__views.__alloyId1850);
    $.__views.__alloyId1851 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1851"
    });
    $.__views.__alloyId1842.add($.__views.__alloyId1851);
    $.__views.__alloyId1852 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1852"
    });
    $.__views.__alloyId1851.add($.__views.__alloyId1852);
    $.__views.__alloyId1853 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1853"
    });
    $.__views.__alloyId1851.add($.__views.__alloyId1853);
    $.__views.__alloyId1854 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1854"
    });
    $.__views.__alloyId1842.add($.__views.__alloyId1854);
    $.__views.__alloyId1855 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1855"
    });
    $.__views.__alloyId1854.add($.__views.__alloyId1855);
    $.__views.__alloyId1856 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1856"
    });
    $.__views.__alloyId1854.add($.__views.__alloyId1856);
    $.__views.__alloyId1857 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1857"
    });
    $.__views.view1.add($.__views.__alloyId1857);
    $.__views.__alloyId1858 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1858"
    });
    $.__views.__alloyId1857.add($.__views.__alloyId1858);
    $.__views.__alloyId1859 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1859"
    });
    $.__views.__alloyId1858.add($.__views.__alloyId1859);
    $.__views.__alloyId1860 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1860"
    });
    $.__views.__alloyId1857.add($.__views.__alloyId1860);
    $.__views.__alloyId1861 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1861"
    });
    $.__views.__alloyId1860.add($.__views.__alloyId1861);
    $.__views.__alloyId1862 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1862"
    });
    $.__views.__alloyId1860.add($.__views.__alloyId1862);
    $.__views.__alloyId1863 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1863"
    });
    $.__views.__alloyId1857.add($.__views.__alloyId1863);
    $.__views.__alloyId1864 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1864"
    });
    $.__views.__alloyId1863.add($.__views.__alloyId1864);
    $.__views.__alloyId1865 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1865"
    });
    $.__views.__alloyId1863.add($.__views.__alloyId1865);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view2);
    $.__views.__alloyId1866 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "blue",
        id: "__alloyId1866"
    });
    $.__views.view2.add($.__views.__alloyId1866);
    $.__views.__alloyId1867 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1867"
    });
    $.__views.__alloyId1866.add($.__views.__alloyId1867);
    $.__views.__alloyId1868 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1868"
    });
    $.__views.__alloyId1867.add($.__views.__alloyId1868);
    $.__views.__alloyId1869 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1869"
    });
    $.__views.__alloyId1866.add($.__views.__alloyId1869);
    $.__views.__alloyId1870 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1870"
    });
    $.__views.__alloyId1869.add($.__views.__alloyId1870);
    $.__views.__alloyId1871 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1871"
    });
    $.__views.__alloyId1869.add($.__views.__alloyId1871);
    $.__views.__alloyId1872 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1872"
    });
    $.__views.__alloyId1866.add($.__views.__alloyId1872);
    $.__views.__alloyId1873 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1873"
    });
    $.__views.__alloyId1872.add($.__views.__alloyId1873);
    $.__views.__alloyId1874 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1874"
    });
    $.__views.__alloyId1872.add($.__views.__alloyId1874);
    $.__views.__alloyId1875 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1875"
    });
    $.__views.__alloyId1866.add($.__views.__alloyId1875);
    $.__views.__alloyId1876 = Ti.UI.createLabel({
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1876"
    });
    $.__views.__alloyId1875.add($.__views.__alloyId1876);
    $.__views.__alloyId1877 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1877"
    });
    $.__views.__alloyId1875.add($.__views.__alloyId1877);
    $.__views.__alloyId1878 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1878"
    });
    $.__views.view2.add($.__views.__alloyId1878);
    $.__views.__alloyId1879 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1879"
    });
    $.__views.__alloyId1878.add($.__views.__alloyId1879);
    $.__views.__alloyId1880 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1880"
    });
    $.__views.__alloyId1879.add($.__views.__alloyId1880);
    $.__views.__alloyId1881 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1881"
    });
    $.__views.__alloyId1878.add($.__views.__alloyId1881);
    $.__views.__alloyId1882 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1882"
    });
    $.__views.__alloyId1881.add($.__views.__alloyId1882);
    $.__views.__alloyId1883 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1883"
    });
    $.__views.__alloyId1881.add($.__views.__alloyId1883);
    $.__views.__alloyId1884 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1884"
    });
    $.__views.__alloyId1878.add($.__views.__alloyId1884);
    $.__views.__alloyId1885 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1885"
    });
    $.__views.__alloyId1884.add($.__views.__alloyId1885);
    $.__views.__alloyId1886 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1886"
    });
    $.__views.__alloyId1884.add($.__views.__alloyId1886);
    $.__views.__alloyId1887 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1887"
    });
    $.__views.__alloyId1878.add($.__views.__alloyId1887);
    $.__views.__alloyId1888 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1888"
    });
    $.__views.__alloyId1887.add($.__views.__alloyId1888);
    $.__views.__alloyId1889 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1889"
    });
    $.__views.__alloyId1887.add($.__views.__alloyId1889);
    $.__views.__alloyId1890 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1890"
    });
    $.__views.__alloyId1878.add($.__views.__alloyId1890);
    $.__views.__alloyId1891 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1891"
    });
    $.__views.__alloyId1890.add($.__views.__alloyId1891);
    $.__views.__alloyId1892 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1892"
    });
    $.__views.__alloyId1890.add($.__views.__alloyId1892);
    $.__views.__alloyId1893 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1893"
    });
    $.__views.view2.add($.__views.__alloyId1893);
    $.__views.__alloyId1894 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1894"
    });
    $.__views.__alloyId1893.add($.__views.__alloyId1894);
    $.__views.__alloyId1895 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1895"
    });
    $.__views.__alloyId1894.add($.__views.__alloyId1895);
    $.__views.__alloyId1896 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1896"
    });
    $.__views.__alloyId1893.add($.__views.__alloyId1896);
    $.__views.__alloyId1897 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1897"
    });
    $.__views.__alloyId1896.add($.__views.__alloyId1897);
    $.__views.__alloyId1898 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1898"
    });
    $.__views.__alloyId1896.add($.__views.__alloyId1898);
    $.__views.__alloyId1899 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1899"
    });
    $.__views.__alloyId1893.add($.__views.__alloyId1899);
    $.__views.__alloyId1900 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1900"
    });
    $.__views.__alloyId1899.add($.__views.__alloyId1900);
    $.__views.__alloyId1901 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1901"
    });
    $.__views.__alloyId1899.add($.__views.__alloyId1901);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view3);
    $.__views.__alloyId1902 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "yellow",
        id: "__alloyId1902"
    });
    $.__views.view3.add($.__views.__alloyId1902);
    $.__views.__alloyId1903 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1903"
    });
    $.__views.__alloyId1902.add($.__views.__alloyId1903);
    $.__views.__alloyId1904 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1904"
    });
    $.__views.__alloyId1903.add($.__views.__alloyId1904);
    $.__views.__alloyId1905 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1905"
    });
    $.__views.__alloyId1902.add($.__views.__alloyId1905);
    $.__views.__alloyId1906 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1906"
    });
    $.__views.__alloyId1905.add($.__views.__alloyId1906);
    $.__views.__alloyId1907 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1907"
    });
    $.__views.__alloyId1905.add($.__views.__alloyId1907);
    $.__views.__alloyId1908 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1908"
    });
    $.__views.__alloyId1902.add($.__views.__alloyId1908);
    $.__views.__alloyId1909 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1909"
    });
    $.__views.__alloyId1908.add($.__views.__alloyId1909);
    $.__views.__alloyId1910 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1910"
    });
    $.__views.__alloyId1908.add($.__views.__alloyId1910);
    $.__views.__alloyId1911 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1911"
    });
    $.__views.__alloyId1902.add($.__views.__alloyId1911);
    $.__views.__alloyId1912 = Ti.UI.createLabel({
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1912"
    });
    $.__views.__alloyId1911.add($.__views.__alloyId1912);
    $.__views.__alloyId1913 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1913"
    });
    $.__views.__alloyId1911.add($.__views.__alloyId1913);
    $.__views.__alloyId1914 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1914"
    });
    $.__views.view3.add($.__views.__alloyId1914);
    $.__views.__alloyId1915 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1915"
    });
    $.__views.__alloyId1914.add($.__views.__alloyId1915);
    $.__views.__alloyId1916 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1916"
    });
    $.__views.__alloyId1915.add($.__views.__alloyId1916);
    $.__views.__alloyId1917 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1917"
    });
    $.__views.__alloyId1914.add($.__views.__alloyId1917);
    $.__views.__alloyId1918 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1918"
    });
    $.__views.__alloyId1917.add($.__views.__alloyId1918);
    $.__views.__alloyId1919 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1919"
    });
    $.__views.__alloyId1917.add($.__views.__alloyId1919);
    $.__views.__alloyId1920 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1920"
    });
    $.__views.__alloyId1914.add($.__views.__alloyId1920);
    $.__views.__alloyId1921 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1921"
    });
    $.__views.__alloyId1920.add($.__views.__alloyId1921);
    $.__views.__alloyId1922 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1922"
    });
    $.__views.__alloyId1920.add($.__views.__alloyId1922);
    $.__views.__alloyId1923 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1923"
    });
    $.__views.__alloyId1914.add($.__views.__alloyId1923);
    $.__views.__alloyId1924 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1924"
    });
    $.__views.__alloyId1923.add($.__views.__alloyId1924);
    $.__views.__alloyId1925 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1925"
    });
    $.__views.__alloyId1923.add($.__views.__alloyId1925);
    $.__views.__alloyId1926 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1926"
    });
    $.__views.__alloyId1914.add($.__views.__alloyId1926);
    $.__views.__alloyId1927 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1927"
    });
    $.__views.__alloyId1926.add($.__views.__alloyId1927);
    $.__views.__alloyId1928 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1928"
    });
    $.__views.__alloyId1926.add($.__views.__alloyId1928);
    $.__views.__alloyId1929 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1929"
    });
    $.__views.view3.add($.__views.__alloyId1929);
    $.__views.__alloyId1930 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1930"
    });
    $.__views.__alloyId1929.add($.__views.__alloyId1930);
    $.__views.__alloyId1931 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1931"
    });
    $.__views.__alloyId1930.add($.__views.__alloyId1931);
    $.__views.__alloyId1932 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1932"
    });
    $.__views.__alloyId1929.add($.__views.__alloyId1932);
    $.__views.__alloyId1933 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1933"
    });
    $.__views.__alloyId1932.add($.__views.__alloyId1933);
    $.__views.__alloyId1934 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1934"
    });
    $.__views.__alloyId1932.add($.__views.__alloyId1934);
    $.__views.__alloyId1935 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1935"
    });
    $.__views.__alloyId1929.add($.__views.__alloyId1935);
    $.__views.__alloyId1936 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1936"
    });
    $.__views.__alloyId1935.add($.__views.__alloyId1936);
    $.__views.__alloyId1937 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1937"
    });
    $.__views.__alloyId1935.add($.__views.__alloyId1937);
    $.__views.view4 = Ti.UI.createView({
        id: "view4",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view4);
    $.__views.__alloyId1938 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "green",
        id: "__alloyId1938"
    });
    $.__views.view4.add($.__views.__alloyId1938);
    $.__views.__alloyId1939 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1939"
    });
    $.__views.__alloyId1938.add($.__views.__alloyId1939);
    $.__views.__alloyId1940 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1940"
    });
    $.__views.__alloyId1939.add($.__views.__alloyId1940);
    $.__views.__alloyId1941 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1941"
    });
    $.__views.__alloyId1938.add($.__views.__alloyId1941);
    $.__views.__alloyId1942 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1942"
    });
    $.__views.__alloyId1941.add($.__views.__alloyId1942);
    $.__views.__alloyId1943 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1943"
    });
    $.__views.__alloyId1941.add($.__views.__alloyId1943);
    $.__views.__alloyId1944 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1944"
    });
    $.__views.__alloyId1938.add($.__views.__alloyId1944);
    $.__views.__alloyId1945 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1945"
    });
    $.__views.__alloyId1944.add($.__views.__alloyId1945);
    $.__views.__alloyId1946 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1946"
    });
    $.__views.__alloyId1944.add($.__views.__alloyId1946);
    $.__views.__alloyId1947 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1947"
    });
    $.__views.__alloyId1938.add($.__views.__alloyId1947);
    $.__views.__alloyId1948 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1948"
    });
    $.__views.__alloyId1947.add($.__views.__alloyId1948);
    $.__views.__alloyId1949 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1949"
    });
    $.__views.__alloyId1947.add($.__views.__alloyId1949);
    $.__views.__alloyId1950 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1950"
    });
    $.__views.view4.add($.__views.__alloyId1950);
    $.__views.__alloyId1951 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1951"
    });
    $.__views.__alloyId1950.add($.__views.__alloyId1951);
    $.__views.__alloyId1952 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1952"
    });
    $.__views.__alloyId1951.add($.__views.__alloyId1952);
    $.__views.__alloyId1953 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1953"
    });
    $.__views.__alloyId1950.add($.__views.__alloyId1953);
    $.__views.__alloyId1954 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1954"
    });
    $.__views.__alloyId1953.add($.__views.__alloyId1954);
    $.__views.__alloyId1955 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1955"
    });
    $.__views.__alloyId1953.add($.__views.__alloyId1955);
    $.__views.__alloyId1956 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1956"
    });
    $.__views.__alloyId1950.add($.__views.__alloyId1956);
    $.__views.__alloyId1957 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1957"
    });
    $.__views.__alloyId1956.add($.__views.__alloyId1957);
    $.__views.__alloyId1958 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1958"
    });
    $.__views.__alloyId1956.add($.__views.__alloyId1958);
    $.__views.__alloyId1959 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1959"
    });
    $.__views.__alloyId1950.add($.__views.__alloyId1959);
    $.__views.__alloyId1960 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1960"
    });
    $.__views.__alloyId1959.add($.__views.__alloyId1960);
    $.__views.__alloyId1961 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1961"
    });
    $.__views.__alloyId1959.add($.__views.__alloyId1961);
    $.__views.__alloyId1962 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1962"
    });
    $.__views.__alloyId1950.add($.__views.__alloyId1962);
    $.__views.__alloyId1963 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1963"
    });
    $.__views.__alloyId1962.add($.__views.__alloyId1963);
    $.__views.__alloyId1964 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1964"
    });
    $.__views.__alloyId1962.add($.__views.__alloyId1964);
    $.__views.__alloyId1965 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1965"
    });
    $.__views.view4.add($.__views.__alloyId1965);
    $.__views.__alloyId1966 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1966"
    });
    $.__views.__alloyId1965.add($.__views.__alloyId1966);
    $.__views.__alloyId1967 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1967"
    });
    $.__views.__alloyId1966.add($.__views.__alloyId1967);
    $.__views.__alloyId1968 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1968"
    });
    $.__views.__alloyId1965.add($.__views.__alloyId1968);
    $.__views.__alloyId1969 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1969"
    });
    $.__views.__alloyId1968.add($.__views.__alloyId1969);
    $.__views.__alloyId1970 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1970"
    });
    $.__views.__alloyId1968.add($.__views.__alloyId1970);
    $.__views.__alloyId1971 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1971"
    });
    $.__views.__alloyId1965.add($.__views.__alloyId1971);
    $.__views.__alloyId1972 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1972"
    });
    $.__views.__alloyId1971.add($.__views.__alloyId1972);
    $.__views.__alloyId1973 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1973"
    });
    $.__views.__alloyId1971.add($.__views.__alloyId1973);
    $.__views.__alloyId1974 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1974"
    });
    $.__views.prepaid.add($.__views.__alloyId1974);
    subscribe ? $.__views.__alloyId1974.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1974!click!subscribe"] = true;
    $.__views.__alloyId1975 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1975"
    });
    $.__views.__alloyId1974.add($.__views.__alloyId1975);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    var rate;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId1823!click!back"] && $.__views.__alloyId1823.addEventListener("click", back);
    __defers["$.__views.rateLabel!click!showPicker"] && $.__views.rateLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId1824!click!showPicker"] && $.__views.__alloyId1824.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!rate"] && $.__views.picker.addEventListener("change", rate);
    __defers["$.__views.__alloyId1974!click!subscribe"] && $.__views.__alloyId1974.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;