function back()
{
	DRAWER.navigation("payment",2);
}

function paymentMethod(e)
{
	//alert(e.source.mod);
	Ti.App.Properties.setString('method',e.source.mod); 
	DRAWER.navigation("payment3",2);
}
