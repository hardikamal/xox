<<<<<<< HEAD
function back()
{
	DRAWER.navigation("onlinePurchases",1);
}

function goSlide(event){
	var index = event.source.mod;
	var arrViews = $.scrollableView.getViews();
	
	switch(index){
		case "0":
			$.lbl1.backgroundColor = "#FFFFFF";
			$.lbl2.backgroundColor = "#F5F5F5";
			$.lbl3.backgroundColor = "#F5F5F5";
			break;
		 
		case "1":
			$.lbl1.backgroundColor = "#F5F5F5";
			$.lbl2.backgroundColor = "#FFFFFF";
			$.lbl3.backgroundColor = "#F5F5F5";
			break;
			
		case "2":
			$.lbl1.backgroundColor = "#F5F5F5";
			$.lbl2.backgroundColor = "#F5F5F5";
			$.lbl3.backgroundColor = "#FFFFFF";
			break;
	}
	$.scrollableView.scrollToView(arrViews[index]);
}
=======
$.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;

if(Ti.Platform.osname == "android") {
	console.log("android");
	$.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
}

function back()
{
	DRAWER.navigation("products",1);
}

function subscribe()
{
	console.log("subscribe");
}
>>>>>>> origin/master
