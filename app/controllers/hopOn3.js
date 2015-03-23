$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 515;

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 515;
}

function back()
{
	DRAWER.navigation("hopOn2",1);
}

function highSpeed(e)
{
	console.log("e.value: "+e.value);
}

function proceed()
{
	DRAWER.navigation("hopOn4",1);
	console.log("proceed");
}
