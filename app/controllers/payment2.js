function back()
{
	DRAWER.navigation("payment",1);
}

function paymentMethod(e)
{
	//alert(e.source.mod);
	Ti.App.Properties.setString('method',e.source.mod); 
	DRAWER.navigation("payment3",1);
}
