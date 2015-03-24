$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
}

function back()
{
	DRAWER.navigation("onlinePurchases",1);
}

function purchase()
{
	console.log("purchase");
	DRAWER.navigation("panda2",1);
}