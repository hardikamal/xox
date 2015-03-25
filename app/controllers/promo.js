function promoDetail() {
	// console.log("promoDetail");
	// var win = Alloy.createController('promoDetails').getView();
	// win.open();
	DRAWER.navigation("promoDetail",1);
}


var clearObject = function(){
	// alert("Promo clear cache");
	// DRAWER.closeDrawer();
	Ti.App.removeEventListener("clearObject",clearObject);
};
Ti.App.addEventListener("clearObject",clearObject);