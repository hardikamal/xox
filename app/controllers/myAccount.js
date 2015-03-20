var status = "postpaid";

var new_event = [["Season Pass","/images/acc_button_01.png"]];

if(status == "postpaid")
{
	console.log("postpaid");
	//$.postpaid.setVisible(true);
	$.prepaid.height = 0;
}
else
{
	console.log("prepaid");
	$.postpaid.height = 0;
}

if(new_event[0].length > 0){   
	
	var view = Titanium.UI.createView({
	   width:Ti.UI.FILL,
	   height:"30%",
	   layout:'horizontal'
	});
	
	var image_view = Titanium.UI.createView({
	   width:'33%',
	   height:Ti.UI.FILL,
	});
	
	var image = Ti.UI.createImageView({
		width:"80",
		height:"80",
	  	image:new_event[0][1]
	});
	
	var view2 = Titanium.UI.createView({
	   width:Ti.UI.FILL,
	   height:"15%",
	   layout:'horizontal'
	});
	
	var label_view = Titanium.UI.createView({
	   width:'33%',
	   height:Ti.UI.FILL,
	});
	
	var label = Titanium.UI.createLabel({
	   color:"#41B9C7",
	   textAlign:"center",
	   top:"0",
	   text:new_event[0][0]
	});
	
	image_view.add(image);
	view.add(image_view);
	
	label_view.add(label);
	view2.add(label_view);
	
	if(status == "postpaid")
	{
		$.postpaid.add(view);
		$.postpaid.add(view2);
	}
	else
	{
		$.prepaid.add(view);
		$.prepaid.add(view2);
	}
}

function faq()
{
	DRAWER.navigation("faq",1); 
}

function accDetail()
{
	DRAWER.navigation("accountDetails",1);
}

function payment()
{
	DRAWER.navigation("payment",1);
}

function subline()
{
	DRAWER.navigation("subline",1);
}

function vas()
{
	DRAWER.navigation("vas",1);
}

function seasonPass()
{
	DRAWER.navigation("seasonPass",1);
}

function loyalty()
{
	DRAWER.navigation("loyalty",1);
}

function profile()
{
	DRAWER.navigation("profile",1);
}

function report()
{
	DRAWER.navigation("report",1);
}

function orderingHistory()
{
	DRAWER.navigation("orderHistory",1);
}

function editPhoto()
{
	console.log("editPhoto");
	$.photo.zIndex = 2;
}

function makePayment()
{
	console.log("makePayment");
	$.payment.zIndex = 2;
}

function close()
{
	console.log("close");
	$.photo.zIndex = 0;
}

function closepayment()
{
	console.log("closepayment");
	$.payment.zIndex = 0;
}

function paymentPostpaid()
{
	DRAWER.navigation("payment2",1);
}

function paymentPrepaid()
{
	DRAWER.navigation("payment3",1);
}

function gallery()
{
	console.log("gallery");
	$.photo.zIndex = 0;
}

function facebook()
{
	console.log("facebook");
	$.photo.zIndex = 0;
}
