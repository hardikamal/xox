var args = arguments[0] || {}; 
Ti.App.Properties.setString('root',"1");
var pHeight = Ti.Platform.displayCaps.platformHeight;
$.scrollView.height = pHeight - 50;  
if(Ti.Platform.osname == "android") {
	$.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER;
}
 
function goTo(e){ 
	Ti.App.Properties.setString('module',"home");
	DRAWER.navigation("eq_"+e.source.mod,1);
}
  
function login(){  
	DRAWER.navigation("login",1);
}

function signUp(){
	DRAWER.navigation("signUp",1);
}

function logout(){
	DRAWER.logout();
}
