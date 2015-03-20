$.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);
$.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
$.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
$.arrow3.transform = Ti.UI.create2DMatrix().rotate(-90);
$.arrow4.transform = Ti.UI.create2DMatrix().rotate(-90);
$.arrow5.transform = Ti.UI.create2DMatrix().rotate(-90);
$.arrow6.transform = Ti.UI.create2DMatrix().rotate(-90);
$.arrow7.transform = Ti.UI.create2DMatrix().rotate(-90);


$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 220;

if(Ti.Platform.osname == "android") {
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 220;
}

function back()
{
	DRAWER.navigation("accountDetails2",1);
}

function showPicker()
{
	console.log("showPicker");
	if($.pickerView.visible == "false")
	{
		$.contentView.height = 250;
		$.pickerView.height = 250;
		$.pickerContentView.height  = 250;
		$.pickerView.setVisible(true);
		$.done.setVisible(true);
		$.picker.setVisible(true);
	}
	else
	{
		if($.pickerView.visible == false)
		{
			$.contentView.height = 250;
			$.pickerView.height = 250;
			$.pickerContentView.height  = 250;
			$.pickerView.setVisible(true);
			$.done.setVisible(true);
			$.picker.setVisible(true);
		}
		else
		{
			$.contentView.height = 50;
			$.pickerView.height = 50;
			$.pickerContentView.height  = 50;
			$.pickerView.setVisible(false);
			$.done.setVisible(false);
			$.picker.setVisible(false);
		}
	}
}

function paymentType(e)
{
	console.log("paymentType");
	paymentType = e.row.title;
	if(Ti.Platform.osname == "iphone" || Ti.Platform.osname == "ipad") 
	{ 
		$.paymentLabel.text = paymentType;
	}
}

function done(){
	console.log("done");
	$.contentView.height = 50;
	$.pickerView.height = 50;
	$.pickerContentView.height  = 50;
	$.pickerView.setVisible(false);
	$.done.setVisible(false);
	$.picker.setVisible(false);
}

function domesticVoice(){
	
	Alloy.Globals.userPlan = "prepaid";
	DRAWER.navigation("domesticCallStatement",1);
}

function domesticVideo(){
	Alloy.Globals.userPlan = "prepaid";
	DRAWER.navigation("domesticVideo",1);
}

function domesticSMS(){
	Alloy.Globals.userPlan = "prepaid";
	DRAWER.navigation("domesticSMS",1);
}

function iddVoice(){
	Alloy.Globals.userPlan = "prepaid";
	DRAWER.navigation("iddVoice",1);
}

function iddVideo(){
	Alloy.Globals.userPlan = "prepaid";
	DRAWER.navigation("iddVideo",1);
}

function iddSMS(){
	Alloy.Globals.userPlan = "prepaid";
	DRAWER.navigation("iddSMS",1);
}

function roamingCalls(){
	Alloy.Globals.userPlan = "prepaid";
	DRAWER.navigation("roamingCalls",1);
}

function roamingSMS(){
	Alloy.Globals.userPlan = "prepaid";
	DRAWER.navigation("roamingSMS",1);
}