$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
$.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 2000;
}

function download()
{
	console.log("download");
	//DRAWER.navigation("penang1s1",1);
}

function topUp()
{
	console.log("topUp");
}

