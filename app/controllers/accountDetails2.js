$.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
$.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);

function back()
{
	DRAWER.navigation("accountDetails",1);
}

function prepaidStatement()
{
	DRAWER.navigation("prepaidStatement",1);
}

function postpaidStatement()
{
	DRAWER.navigation("postpaidStatement",1);
}
