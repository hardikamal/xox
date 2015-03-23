/*********************
*** SETTING / API ***
**********************/
var API_DOMAIN = "54.169.180.5/xox";
var XHR = require("xhr");
var xhr = new XHR();
 
// APP authenticate user and key
var USER  = 'xox';
var KEY   = '06b53047cf294f7207789ff5293ad2dc';
var storeLocatorUrl  = "http://"+API_DOMAIN+"/api/getStores?user="+USER+"&key="+KEY;  
 
/*********************
**** API INTERFACE*****
**********************/
//Get store location
exports.getStore = function (ex){   
	/*** Only get updated data instead of grabbing whole list***/
	var checker = Alloy.createCollection('updateChecker'); 
	var isUpdate = checker.getCheckerById('1');
	var last_updated = "";
	if(isUpdate != ""){
		last_updated = isUpdate.updated;
	}
	console.log(storeLocatorUrl + "&last_updated="+last_updated);
	var _result = contactServer(storeLocatorUrl + "&last_updated="); 
	_result.onload = function(e) {  
		var res = JSON.parse(this.responseText); 
		
		if(res.status == "success"){
			var arr = res.data; 
			var storeModel = Alloy.createCollection('storeLocator'); 
			storeModel.addStores(arr);
			checker.updateModule('1', 'storeLocatorList', currentDateTime());
		}
	};
	_result.onerror = function(e) { 
		alert("Cannot connect to the server");
	};
};
  

/*********************
**** API PRIVATE FUNCTION*****
**********************/
function contactServer(url){
	var client = Ti.Network.createHTTPClient({ 
	     timeout : 10000  
	 });
	client.open("GET", url); 
	client.send(); 
	return client;
}

function onErrorCallback(e) { 
	// Handle your errors in here
	COMMON.createAlert("Error", e);
};