$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
	$.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER;
}

var plan;
var charge;

$.picker.setSelectedRow(0,0,false);
$.picker2.setSelectedRow(0,0,false);

function plan(e)
{
	console.log("plan");
	plan = e.row.title;
	if(Ti.Platform.osname == "iphone" || Ti.Platform.osname == "ipad") 
	{ 
		$.planLabel.text = plan;
	}
}

function showPicker()
{
	console.log("showPicker");
	console.log("$.pickerView.visible: " + $.pickerView.visible);
	if($.pickerView.visible == "false")
	{
		console.log("false");
		$.contentView.height = 300;
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
			console.log("else false");
			$.contentView.height = 300;
			$.pickerView.height = 250;
			$.pickerContentView.height  = 250;
			$.pickerView.setVisible(true);
			$.done.setVisible(true);
			$.picker.setVisible(true);
		}
		else
		{
			console.log("else true");
			$.contentView.height = 100;
			$.pickerView.height = 50;
			$.pickerContentView.height  = 50;
			$.pickerView.setVisible(false);
			$.done.setVisible(false);
			$.picker.setVisible(false);
		}
	}
}

function done()
{
	console.log("done");
	$.contentView.height = 100;
	$.pickerView.height = 50;
	$.pickerContentView.height  = 50;
	$.pickerView.setVisible(false);
	$.done.setVisible(false);
	$.picker.setVisible(false);
}

function charge(e)
{
	console.log("charge");
	charge = e.row.title;
	if(Ti.Platform.osname == "iphone" || Ti.Platform.osname == "ipad") 
	{ 
		$.chargeLabel.text = charge;
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
			$.contentView2.height = 100;
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
	$.contentView2.height = 100;
	$.pickerView2.height = 50;
	$.pickerContentView2.height  = 50;
	$.pickerView2.setVisible(false);
	$.done2.setVisible(false);
	$.picker2.setVisible(false);
}


function back()
{
	DRAWER.navigation("internetManagement",1);
}

function submit()
{
	console.log("submit");
}
