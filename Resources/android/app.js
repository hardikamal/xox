function mysql_real_escape_string(str) {
    return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function(char) {
        switch (char) {
          case "\x00":
            return "\\0";

          case "\b":
            return "\\b";

          case "	":
            return "\\t";

          case "":
            return "\\z";

          case "\n":
            return "\\n";

          case "\r":
            return "\\r";

          case '"':
          case "'":
          case "\\":
          case "%":
            return "\\" + char;
        }
    });
}

function currentDateTime() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var sec = today.getSeconds();
    10 > minutes && (minutes = "0" + minutes);
    10 > sec && (sec = "0" + sec);
    10 > dd && (dd = "0" + dd);
    10 > mm && (mm = "0" + mm);
    datetime = yyyy + "-" + mm + "-" + dd + " " + hours + ":" + minutes + ":" + sec;
    return datetime;
}

function timeFormat(datetime) {
    var timeStamp = datetime.split(" ");
    var newFormat;
    var ampm = "am";
    var date = timeStamp[0].split("/");
    var time = timeStamp[1].split(":");
    if (time[0] > 12) {
        ampm = "pm";
        time[0] = time[0] - 12;
    }
    newFormat = date[0] + "/" + date[1] + "/" + date[2] + " " + time[0] + ":" + time[1] + " " + ampm;
    return newFormat;
}

function removeAllChildren(viewObject) {
    var children = viewObject.children.slice(0);
    for (var i = 0; i < children.length; ++i) viewObject.remove(children[i]);
}

function PixelsToDPUnits(ThePixels) {
    return ThePixels / (Titanium.Platform.displayCaps.dpi / 160);
}

var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.menuType = "1";

Alloy.Globals.userPlan = "postpaid";

var API = require("api");

var DRAWER = require("drawer");

var COMMON = require("common");

Alloy.createController("index");