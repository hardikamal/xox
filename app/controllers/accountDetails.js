$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;

console.log("scroll height: "+$.scrollView.height);
console.log("full height: "+Ti.Platform.displayCaps.platformHeight);

//$.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
//$.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);

if(Ti.Platform.osname == "android") {
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
}

function back()
{
	DRAWER.navigation("myAccount",1);
}


function statement()
{
	DRAWER.navigation("accountDetails2",1);
}


function myProfile()
{
	DRAWER.navigation("profile",1);
}