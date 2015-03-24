function contactServer(url) {
    var client = Ti.Network.createHTTPClient({
        timeout: 1e4
    });
    client.open("GET", url);
    client.send();
    return client;
}

function onErrorCallback(e) {
    COMMON.createAlert("Error", e);
}

var API_DOMAIN = "54.169.180.5/xox";

var XHR = require("xhr");

var xhr = new XHR();

var USER = "xox";

var KEY = "06b53047cf294f7207789ff5293ad2dc";

var storeLocatorUrl = "http://" + API_DOMAIN + "/api/getStores?user=" + USER + "&key=" + KEY;

exports.getStore = function() {
    var checker = Alloy.createCollection("updateChecker");
    var isUpdate = checker.getCheckerById("1");
    var last_updated = "";
    "" != isUpdate && (last_updated = isUpdate.updated);
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
    console.log(storeLocatorUrl + "&last_updated=" + last_updated);
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
    var _result = contactServer(storeLocatorUrl + "&last_updated=");
    _result.onload = function() {
        var res = JSON.parse(this.responseText);
        if ("success" == res.status) {
            var arr = res.data;
            var storeModel = Alloy.createCollection("storeLocator");
            storeModel.addStores(arr);
            checker.updateModule("1", "storeLocatorList", currentDateTime());
        }
    };
    _result.onerror = function() {
        alert("Cannot connect to the server");
    };
};