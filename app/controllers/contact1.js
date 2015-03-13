if(Ti.Platform.osname == "android"){
	$.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER;
}

function malaysia()
{
	console.log("malaysia");
	Ti.Platform.openURL('tel:'+'1300888010');
}

function mobile()
{
	console.log("mobile");
	Ti.Platform.openURL('tel:'+'12273');
}

function abroad()
{
	console.log("abroad");
	Ti.Platform.openURL('tel:'+'+60379628000');
}
