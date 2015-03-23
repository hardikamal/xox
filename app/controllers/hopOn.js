$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
}

function back()
{
	// console.log("online");
	// var win = Alloy.createController('online').getView();
	// win.open();
	DRAWER.navigation("onlinePurchases",1);
}

function next()
{
	DRAWER.navigation("hopOn2",1);
	console.log("next");
}