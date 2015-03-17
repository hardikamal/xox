function onErrorCallback(e) {
    COMMON.createAlert("Error", e);
}

var API_DOMAIN = "175.143.114.122";

var XHR = require("xhr");

var xhr = new XHR();

var USER = "TESTWEBSEUID";

var KEY = "TESTWEBSEPWD";

exports.getDomainUrl = function() {
    var url = "";
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            var res = JSON.parse(this.responseText);
            "success" == res.status;
        },
        onerror: function() {
            alert("Cannot connect to the server");
        },
        timeout: 1e4
    });
    client.open("GET", url);
    client.send();
};