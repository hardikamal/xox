$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
}

if($.scrollView.children.length > 1)
{
	$.scrollView.remove($.empty);
}
console.log("num of child: "+ $.scrollView.children.length);

function back()
{
	DRAWER.navigation("myAccount",1);
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

function sublineDetails()
{
	DRAWER.navigation("subline3",1);
}
