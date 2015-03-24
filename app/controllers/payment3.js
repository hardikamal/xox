$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
}

var paymentType;

function back()
{
	DRAWER.navigation("myAccount",1);
}

function proceed()
{
	DRAWER.navigation("payment6",1);
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
	DRAWER.navigation("payment2",1);
}

function showPicker2()
{
	console.log("showPicker2");
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

function paymentType2(e)
{
	console.log("paymentType");
	paymentType2 = e.row.title;
	if(Ti.Platform.osname == "iphone" || Ti.Platform.osname == "ipad") 
	{ 
		$.paymentLabel2.text = paymentType2;
	}
}

function done2(){
	console.log("done2");
	$.contentView2.height = 50;
	$.pickerView2.height = 50;
	$.pickerContentView2.height  = 50;
	$.pickerView2.setVisible(false);
	$.done2.setVisible(false);
	$.picker2.setVisible(false);
}

// function paymentMethod(e)
// {
	// //alert(e.source.mod);
	// Ti.App.Properties.setString('method',e.source.mod); 
	// DRAWER.navigation("payment3",2);
// }

