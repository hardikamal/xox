var args = arguments[0] || {};
 
function navMenu(e){
	switch(e.index){
		case 0: 
			DRAWER.navigation("myAccount",2);   
			break;
		case 1:   
			DRAWER.navigation("promo",2); 
			break;
		case 2:   
			DRAWER.navigation("products",2); 
			break;
		case 3:   
			DRAWER.navigation("onlinePurchases",2);
			break; 
	 	case 4: 
	 		DRAWER.navigation("orderHistory",2);
			break;
		case 5: 
			DRAWER.navigation("contact",2);
			break;
		case 6: 
			DRAWER.navigation("settings",2);
			break;
		case 7: 
			DRAWER.navigation("home",2);
			break;
	}
}
