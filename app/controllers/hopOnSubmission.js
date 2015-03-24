$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 230;

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 230;
}

function back()
{
	DRAWER.navigation("hopOn",1);
}

function proceed()
{
	DRAWER.navigation("hopOn",1);
	console.log("proceed");
}
