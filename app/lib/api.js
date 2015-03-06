/*********************
*** SETTING / API ***
**********************/
var API_DOMAIN = "175.143.114.122";
var XHR = require("xhr");
var xhr = new XHR();
 
// APP authenticate user and key
var USER  = 'TESTWEBSEUID';
var KEY   = 'TESTWEBSEPWD';
//var resultNdividend  = "http://"+API_DOMAIN+"/webse/mytelelink.asp?REQTYPE=31&USERNAME="+USER+"&PWD="+KEY+"&TLACC=60938004&TLPIN=7337"; 
//var resultNdividend = "http://"+API_DOMAIN+"/webse/mytelelink.asp?REQTYPE=31&USERNAME="+USER+"&PWD="+KEY;

 
/*********************
**** API FUNCTION*****
**********************/
//Get App URL
exports.getDomainUrl = function (ex){ 
	var url = "";  
	var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	     onload : function(e) { 
	     	var res = JSON.parse(this.responseText);  
	        if(res.status == "success"){
	        	
	        } 
	       
	     },
 
	     onerror : function(e) { 
	     	alert("Cannot connect to the server");
	     	
	     },
	     timeout : 10000  
	 });
	 
	 client.open("GET", url); 
	 client.send(); 
};
  

//private function
function onErrorCallback(e) { 
	// Handle your errors in here
	COMMON.createAlert("Error", e);
};