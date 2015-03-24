$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
}

function close()
{
	DRAWER.navigation("onlinePurchases",1);
}

function download()
{
	DRAWER.navigation("onlinePurchases",1);
}
