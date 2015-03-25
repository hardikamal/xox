$.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
$.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
//$.arrow3.transform = Ti.UI.create2DMatrix().rotate(-90);

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.switch1.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
	$.switch2.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
}

function login(e)
{
	console.log("login: "+ e.value);
}

function notification(e)
{
	console.log("notification: "+ e.value);
}

function facebook()
{
	console.log("facebook");
}

function twitter()
{
	console.log("twitter");
}

function google()
{
	console.log("google");
}