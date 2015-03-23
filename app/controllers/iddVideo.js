function back()
{
	if(Alloy.Globals.userPlan == "prepaid")
	{
		DRAWER.navigation("prepaidStatement",1);
	}
	else
	{
		DRAWER.navigation("postpaidStatement",1);
	}
}