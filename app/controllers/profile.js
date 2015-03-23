$.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);

$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
}

function back()
{
	DRAWER.navigation("myAccount",1);
}

function accountDetails()
{
	DRAWER.navigation("accountDetails",1);
}