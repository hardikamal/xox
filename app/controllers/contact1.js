if(Ti.Platform.osname == "android"){
	$.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER;
}

// var view = Ti.UI.createView({
    // height : 1
// });
// $.table.footerView = view;

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
