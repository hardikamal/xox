$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 230;

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 230;
}

function back()
{
	DRAWER.navigation("switchXOX",1);
}

function proceed()
{
	console.log("proceed");
	DRAWER.navigation("switchXOX3",1);
}