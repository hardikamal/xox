function checkout(e)
{
	console.log("e.source.mod: "+e.source.mod);
	Ti.App.Properties.setString('seasonPass',e.source.mod); 
	DRAWER.navigation("seasonPassCheckout1",1);
}
