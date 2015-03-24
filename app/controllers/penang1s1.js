$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
}

$.picker.setSelectedRow(0,0,false);
$.picker2.setSelectedRow(0,0,false);

var simType;
var topUp;

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

function simType(e)
{
	console.log("simType");
	simType = e.row.title;
	if(Ti.Platform.osname == "iphone" || Ti.Platform.osname == "ipad") 
	{ 
		$.simLabel.text = simType;
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

function topUp(e)
{
	console.log("topUp");
	topUp = e.row.title;
	if(Ti.Platform.osname == "iphone" || Ti.Platform.osname == "ipad") 
	{ 
		$.topUpLabel.text = topUp;
	}
}

function showPicker2()
{
	console.log("showPicker2");
	console.log("$.pickerView.visible: " + $.pickerView2.visible);
	if($.pickerView2.visible == "false")
	{
		console.log("false");
		$.contentView2.height = 300;
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
			console.log("else false");
			$.contentView2.height = 300;
			$.pickerView2.height = 250;
			$.pickerContentView2.height  = 250;
			$.pickerView2.setVisible(true);
			$.done2.setVisible(true);
			$.picker2.setVisible(true);
		}
		else
		{
			console.log("else true");
			$.contentView2.height = 50;
			$.pickerView2.height = 50;
			$.pickerContentView2.height  = 50;
			$.pickerView2.setVisible(false);
			$.done2.setVisible(false);
			$.picker2.setVisible(false);
		}
	}
}

function done2()
{
	console.log("done2");
	$.contentView2.height = 50;
	$.pickerView2.height = 50;
	$.pickerContentView2.height  = 50;
	$.pickerView2.setVisible(false);
	$.done2.setVisible(false);
	$.picker2.setVisible(false);
}

function back()
{
	DRAWER.navigation("penang",1);
}

function next()
{
	console.log("next");
	//DRAWER.navigation("panda3",1);
}