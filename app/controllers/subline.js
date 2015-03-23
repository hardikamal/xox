$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
}

function back()
{
	DRAWER.navigation("myAccount",2);
}

function addNumber()
{
	console.log("addNumber");
	DRAWER.navigation("subline2",1);
}

function setting()
{
	DRAWER.navigation("subline4",1);
}
