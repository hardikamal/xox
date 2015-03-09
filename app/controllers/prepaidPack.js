function back()
{
	// console.log("online");
	// var win = Alloy.createController('online').getView();
	// win.open();
	DRAWER.navigation("onlinePurchases",2);
}

/*var win = Ti.UI.createWindow({
    title : "test",
    backgroundColor : "white"
});
 
var img = Ti.UI.createImageView({
    image : "http://png-5.findicons.com/files//icons/2198/dark_glass/128/1downarrow.png",
    height : 20,
    width  :20,
    right : 0
});

var selectedItem = Ti.UI.createLabel({
    text : "",
    width : "auto",
    height : 35,
    top : 0
});
 
var viewMenu = Ti.UI.createView({
    borderWidth : 1,
    borderColor : "black",
    height : 35,
    width : "100%",
    top: 0
});
viewMenu.addEventListener('click',show);

function show()
{
	viewContainer.show();
	$.picker.zIndex = 1;
}

viewMenu.add(selectedItem);
viewMenu.add(img);
 
var arr = ["Standard SIM","Non-Standard SIM"];
 
var viewContainer = Ti.UI.createScrollView({
    height : 60,
    width : "100%",
    contentHeight : "auto",
    //contentWidth : Ti.UI.SIZE,
    top : 35,
    visible : false,
    borderColor : "gray",
    layout : "vertical",
});
 
for (i=0;i<arr.length;i++){
    var item = Ti.UI.createLabel({
        text : arr[i],
        height : 30,
        width : "100%",
        borderColor : "gray" 
    });
    item.addEventListener('click',function(e){
        viewMenu.children[0].text=this.text;
        viewContainer.hide();
    });
    viewContainer.add(item);
}
 
$.picker.add(viewMenu);
$.picker.add(viewContainer);*/