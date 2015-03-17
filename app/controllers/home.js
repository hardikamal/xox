var args = arguments[0] || {}; 
Ti.App.Properties.setString('root',"1");
var pHeight = Ti.Platform.displayCaps.platformHeight;

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER;

	var first = true;
	$.username.addEventListener('focus', function f(e){
	    if(first){
	        first = false;
	        $.username.blur();
	        $.password.blur();
	    }else{
	        $.username.removeEventListener('focus', f);
	    }
	});
}

// $.scrollView.height = pHeight - 50;  
// if(Ti.Platform.osname == "android") {
	// $.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER;
// }
 
function goTo(e){ 
	Ti.App.Properties.setString('module',"home");
	DRAWER.navigation("eq_"+e.source.mod,1);
}
  
// function login(){  
	// DRAWER.navigation("login",1);
// }

function signUp(){
	DRAWER.navigation("signUp",1);
}

function logout(){
	DRAWER.logout();
}

function promoNews()
{
	// console.log("promoNews");
	// var win = Alloy.createController('promoNews').getView();
    // win.open();
    DRAWER.navigation("promo",2); 
}

function product()
{
	// console.log("product");
	// var win = Alloy.createController('product').getView();
    // win.open();
    DRAWER.navigation("products",2); 
}

function online()
{
	// console.log("online");
	// var win = Alloy.createController('online').getView();
    // win.open();
    DRAWER.navigation("onlinePurchases",2);
}

function history()
{
	// console.log("history");
	// var win = Alloy.createController('history').getView();
    // win.open();
    DRAWER.navigation("orderHistory",2);
}

function contact()
{
	// console.log("contact");
	// var win = Alloy.createController('contact').getView();
    // win.open();
    DRAWER.navigation("contact",2);
}

function setting()
{
	// console.log("setting");
	// var win = Alloy.createController('setting').getView();
    // win.open();
    DRAWER.navigation("settings",2);
}

function register()
{
	$.username.value = "";
	$.username.blur();
	$.password.value = "";
	$.password.blur();
	$.login.zIndex = 0;
	console.log("to register page");
}

function close()
{
	$.username.value = "";
	$.username.blur();
	$.password.value = "";
	$.password.blur();
	$.login.zIndex = 0;
}

function myAccount()
{
	console.log("myAccount");
	$.login.zIndex = 2;
}

function login()
{
	if($.username.value == "" && $.password.value == "")
	{
		alert("Please enter all fields");
	}
	else if($.username.value == "")
	{
		alert("Please enter username");
	}
	else if($.password.value == "")
	{
		alert("Please enter password");
	}
	else
	{
		$.username.value = "";
		$.username.blur();
		$.password.value = "";
		$.password.blur();
		$.login.zIndex = 0;
		console.log("login");
		// var win = Alloy.createController('member').getView();
    	// win.open();   
    	DRAWER.navigation("myAccount",2);
	}
}