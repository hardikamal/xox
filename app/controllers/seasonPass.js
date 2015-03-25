var isMember = false;

if(isMember == false)
{
	console.log("popUpLogin");
	$.login.zIndex = 2;
}

$.forgotLine.width = $.forgotText.getWidth();
$.registerLine.width = $.registerText.getWidth();

function register()
{
	$.username.value = "";
	$.username.blur();
	$.password.value = "";
	$.password.blur();
	$.login.zIndex = 0;
	DRAWER.navigation("register",2);
}

function forgot()
{
	$.username.value = "";
	$.username.blur();
	$.password.value = "";
	$.password.blur();
	$.login.zIndex = 0;
	DRAWER.navigation("forgot",2);
}

function close()
{
	$.username.value = "";
	$.username.blur();
	$.password.value = "";
	$.password.blur();
	$.login.zIndex = 0;
}

function login()
{
	if($.username.value == "" && $.password.value == "")
	{
		alert("Please enter all fields");
	}
	else if($.username.value == "")
	{
		alert("Please enter username");
	}
	else if($.password.value == "")
	{
		alert("Please enter password");
	}
	else
	{
		$.username.value = "";
		$.username.blur();
		$.password.value = "";
		$.password.blur();
		$.login.zIndex = 0;
		console.log("login");
		// var win = Alloy.createController('member').getView();
    	// win.open();   
    	//DRAWER.navigation("seasonPass",1);
	}
}

function back()
{
	DRAWER.navigation("myAccount",1);
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