if(Ti.Platform.osname == "android"){
	$.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER;
}

var method;

$.picker.setSelectedRow(0,0,false);

function method(e)
{
	console.log("method");
	method = e.row.title;
	if(Ti.Platform.osname == "iphone" || Ti.Platform.osname == "ipad") 
	{ 
		$.methodLabel.text = method;
	}
}

function back()
{
	DRAWER.navigation("seasonPassCheckout1",1);
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

function tac()
{
	console.log("tac");
	if($.mobileNo.value == "")
	{
		alert("Please enter mobile number");
	}
	else
	{
		console.log("$.mobileNo.value: "+$.mobileNo.value);
	}
}

function verify()
{
	console.log("verify");
	if($.tac.value == "")
	{
		alert("Please enter TAC");
	}
	else
	{
		console.log("$.tac.value: "+$.tac.value);
	}
}
