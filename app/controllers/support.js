$.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
$.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
$.arrow3.transform = Ti.UI.create2DMatrix().rotate(-90);
$.arrow4.transform = Ti.UI.create2DMatrix().rotate(-90);
$.arrow5.transform = Ti.UI.create2DMatrix().rotate(-90);

function faq()
{
	DRAWER.navigation("faq",1); 
}

function userGuide()
{
	DRAWER.navigation("userGuide",1); 
}

function terms()
{
	DRAWER.navigation("terms",1); 
}

function notification()
{
	DRAWER.navigation("notification",1); 
}

function feedback()
{
	console.log("feedback");
	DRAWER.navigation("report",1); 
	//DRAWER.navigation("userGuide",1); 
}
