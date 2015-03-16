function back()
{
	DRAWER.navigation("myAccount",2);
}

function paymentValue(e)
{
	//alert(e.source.mod);
	Ti.App.Properties.setString('amount',e.source.mod); 
	DRAWER.navigation("payment2",2);
}
