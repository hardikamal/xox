$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
}

function back()
{
	DRAWER.navigation("hopOn3",1);
}

function highSpeed(e)
{
	console.log("e.value: "+e.value);
}

function submit()
{
	DRAWER.navigation("hopOn5",1);
	console.log("submit");
}
