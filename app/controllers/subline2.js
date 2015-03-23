$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) -150;
}

function back()
{
	DRAWER.navigation("subline",1);
}

function submit()
{
	console.log("submit");
	$.tacView.zIndex = 2;
}

function submit2()
{
	console.log("submit2");
}

function close()
{
	console.log("close");
	$.tacView.zIndex = 0;
}

function resend()
{
	console.log("resend");
}