//$.sms.text = "SMS : Key in LYT< space >RED< space >SMS< space >< SMS Amount > send to 23388";

$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 250;

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 250;
}

function back()
{
	DRAWER.navigation("myAccount",1);
}

function loyalty()
{
	console.log("loyalty");
	DRAWER.navigation("loyalty2",1);
}
