$.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
$.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
$.arrow3.transform = Ti.UI.create2DMatrix().rotate(-90);
$.arrow4.transform = Ti.UI.create2DMatrix().rotate(-90);
$.arrow5.transform = Ti.UI.create2DMatrix().rotate(-90);

function prepaidPlus()
{
	
}

var clearObject = function(){
	alert("order history clear cache");
	Ti.App.removeEventListener("clearObject",clearObject);
};

Ti.App.addEventListener("clearObject",clearObject);

function back()
{
	DRAWER.navigation("myAccount",1);
}
