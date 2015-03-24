$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
}

function back()
{
	DRAWER.navigation("panda4",1);
}

function download()
{
	console.log("download");
	DRAWER.navigation("home",1);
}