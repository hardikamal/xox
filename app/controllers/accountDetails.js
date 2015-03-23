$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
}

function back()
{
	DRAWER.navigation("myAccount",2);
}

function statement()
{
	console.log("statement");
}

function download()
{
	console.log("download");
}
