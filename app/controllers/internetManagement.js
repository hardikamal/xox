$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
}

function back()
{
	DRAWER.navigation("myAccount",1);
}

function subscribe()
{
	console.log("subscribe");
	DRAWER.navigation("internetManagement2",1);
}

function addOn()
{
	console.log("addOn");
	DRAWER.navigation("internetManagement3",1);
}
