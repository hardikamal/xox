$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;

console.log("scroll height: "+$.scrollView.height);
console.log("full height: "+Ti.Platform.displayCaps.platformHeight);

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
}

function back()
{
	DRAWER.navigation("myAccount",2);
}