$.scrollView.height = (Ti.Platform.displayCaps.platformHeight - 100) - (Ti.Platform.displayCaps.platformHeight*0.2);

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
}

function back()
{
	// console.log("product");
	// var win = Alloy.createController('product').getView();
	// win.open();
	DRAWER.navigation("products",1);
}

function subscribe()
{
	console.log("subscribe");
}
