$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
}

var paymentType;

function back()
{
	DRAWER.navigation("myAccount",1);
}

function proceed()
{
	DRAWER.navigation("payment6",1);
}