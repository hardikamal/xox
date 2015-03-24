$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
}

function back()
{
	DRAWER.navigation("panda3",1);
}

function submit()
{
	console.log("submit");
	DRAWER.navigation("panda5",1);
}