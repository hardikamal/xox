$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 50;

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 50;
}

function purchase()
{
	console.log("purchase");
}