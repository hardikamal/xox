function faq()
{
	DRAWER.navigation("faq",2); 
}

function accDetail()
{
	DRAWER.navigation("accountDetails",2);
}

function editPhoto()
{
	console.log("editPhoto");
	$.photo.zIndex = 2;
}

function close()
{
	console.log("close");
	$.photo.zIndex = 0;
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
