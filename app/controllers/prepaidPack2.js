var salutationType;
var regType;

$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 230;

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 230;
}

function back()
{
	DRAWER.navigation("prepaidPack",1);
}

function highSpeed(e)
{
	console.log("e.value: "+e.value);
}

function proceed()
{
	DRAWER.navigation("prepaidPack3",1);
	console.log("proceed");
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

function salutation(e)
{
	console.log("salutationType");
	salutationType = e.row.title;
	if(Ti.Platform.osname == "iphone" || Ti.Platform.osname == "ipad") 
	{ 
		$.salutationLabel.text = salutationType;
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

function showPicker2()
{
	console.log("showPicker");
	if($.pickerView2.visible == "false")
	{
		$.contentView2.height = 250;
		$.pickerView2.height = 250;
		$.pickerContentView2.height  = 250;
		$.pickerView2.setVisible(true);
		$.done2.setVisible(true);
		$.picker2.setVisible(true);
	}
	else
	{
		if($.pickerView2.visible == false)
		{
			$.contentView2.height = 250;
			$.pickerView2.height = 250;
			$.pickerContentView2.height  = 250;
			$.pickerView2.setVisible(true);
			$.done2.setVisible(true);
			$.picker2.setVisible(true);
		}
		else
		{
			$.contentView2.height = 50;
			$.pickerView2.height = 50;
			$.pickerContentView2.height  = 50;
			$.pickerView2.setVisible(false);
			$.done2.setVisible(false);
			$.picker2.setVisible(false);
		}
	}
}

function regType(e)
{
	console.log("operatorType");
	regType = e.row.title;
	if(Ti.Platform.osname == "iphone" || Ti.Platform.osname == "ipad") 
	{ 
		$.regTypeLabel.text = regType;
	}
}

function done2(){
	console.log("done");
	$.contentView2.height = 50;
	$.pickerView2.height = 50;
	$.pickerContentView2.height  = 50;
	$.pickerView2.setVisible(false);
	$.done2.setVisible(false);
	$.picker2.setVisible(false);
}


