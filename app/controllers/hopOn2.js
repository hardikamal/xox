$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 230;

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 230;
}

function back()
{
	DRAWER.navigation("hopOn",1);
}

function highSpeed(e)
{
	console.log("e.value: "+e.value);
}

function proceed()
{
	DRAWER.navigation("hopOn3",1);
	console.log("proceed");
}
