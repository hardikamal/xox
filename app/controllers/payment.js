$.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
$.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);

function back()
{
	DRAWER.navigation("myAccount",1);
}

function paymentPostpaid()
{
	DRAWER.navigation("payment2",1);
}

function paymentPrepaid()
{
	DRAWER.navigation("payment3",1);
}


/*function paymentValue(e)
{
	//alert(e.source.mod);
	Ti.App.Properties.setString('amount',e.source.mod); 
	DRAWER.navigation("payment2",2);
}*/

