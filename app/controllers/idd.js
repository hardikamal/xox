$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
}

var idd;

$.picker.setSelectedRow(0,0,false);

function back()
{
	DRAWER.navigation("products",2);
}

function idd(e)
{
	console.log("idd");
	idd = e.row.title;
	if(Ti.Platform.osname == "iphone" || Ti.Platform.osname == "ipad") 
	{ 
		$.iddLabel.text = idd;
	}
	switch(e.rowIndex)
	{
		case 0: 
			$.view1.setVisible(true);
			$.view2.setVisible(false);
			$.view3.setVisible(false);
			$.view4.setVisible(false);
			break;
		case 1:   
			$.view1.setVisible(false);
			$.view2.setVisible(true);
			$.view3.setVisible(false);
			$.view4.setVisible(false);
			break;
		case 2:   
			$.view1.setVisible(false);
			$.view2.setVisible(false);
			$.view3.setVisible(true);
			$.view4.setVisible(false);
			break;
		case 3:   
			$.view1.setVisible(false);
			$.view2.setVisible(false);
			$.view3.setVisible(false);
			$.view4.setVisible(true);
			break;
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
			$.contentView.height = 50;
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
	$.contentView.height = 50;
	$.pickerView.height = 50;
	$.pickerContentView.height  = 50;
	$.pickerView.setVisible(false);
	$.done.setVisible(false);
	$.picker.setVisible(false);
}

function subscribe()
{
	console.log("subscribe");
}

