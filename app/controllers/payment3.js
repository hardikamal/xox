$.amount.text = "Amount (RM): RM" + Ti.App.Properties.getString('amount');
$.method.text = "Payment Method: " + Ti.App.Properties.getString('method');

function back()
{
	DRAWER.navigation("payment2",1);
}

function done()
{
	DRAWER.navigation("myAccount",2);
}
