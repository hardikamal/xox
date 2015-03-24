$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 250;

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 250;
}

// var horizontalView = Titanium.UI.createView({
		// layout: 'horizontal',
		// height: '20%'
// });
// 
// var verticalView = Titanium.UI.createView({
		// layout: 'vertical',
		// width: '70%',
		// height: '100%'
// });
// 
// var lineView = Titanium.UI.createView({
		// backgroundColor: 'gray',
		// width: '90%',
		// height: '1'
// });
// 
// var title = Ti.UI.createLabel({
		// backgroundColor: 'transparent',
		// color: 'black',
		// left: 20,
		// text: 'Mobile Number'
// });
// 
// var number = Ti.UI.createLabel({
		// backgroundColor: 'transparent',
		// color: 'black',
		// left: 20,
		// text: ''
// });
// 
// var remove = Ti.UI.createLabel({
		// backgroundColor: 'transparent',
		// color: 'gray',
		// right: 20,
		// text: 'Remove',
		// width: 'auto'
// });

function back()
{
	DRAWER.navigation("myAccount",1);
}

function ff()
{
	console.log("ff");
	$.add.zIndex = 2;
}

function submit()
{
	console.log("submit");
	if($.mobileNo.value == "")
	{
		alert("Please enter mobile number");
	}
	else
	{
		var horizontalView = Titanium.UI.createView({
				layout: 'horizontal',
				height: '20%'
		});
		
		var verticalView = Titanium.UI.createView({
				layout: 'vertical',
				width: '70%',
				height: '100%'
		});
		
		var lineView = Titanium.UI.createView({
				backgroundColor: 'gray',
				width: '90%',
				height: '1'
		});
		
		var title = Ti.UI.createLabel({
				backgroundColor: 'transparent',
				color: 'black',
				left: 20,
				text: 'Mobile Number'
		});
		
		var number = Ti.UI.createLabel({
				backgroundColor: 'transparent',
				color: 'black',
				left: 20,
				text: ''
		});
		
		var remove = Ti.UI.createLabel({
				backgroundColor: 'transparent',
				color: 'gray',
				right: 20,
				text: 'Remove',
				width: 'auto'
		});

		console.log("$.mobileNo.value: "+$.mobileNo.value);
		number.text = $.mobileNo.value;
		console.log("number.text: "+number.text);
		verticalView.add(title);
		verticalView.add(number);
		horizontalView.add(verticalView);
		horizontalView.add(remove);
		$.scrollView.add(horizontalView);
		$.scrollView.add(lineView);
		
		$.scrollView.remove($.empty);
		$.mobileNo.value = "";
		number.text = "";
		$.add.zIndex = 0;
	}
}

function cancel()
{
	console.log("cancel");
	$.add.zIndex = 0;
}
