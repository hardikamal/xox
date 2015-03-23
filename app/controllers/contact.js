//var menu = [{id: 0, title: "Our Offices", controller: 'contact1'}, {id: 1, title: "Care Centre", controller: 'contact2'},{id: 2, title: "XOX Dealers", controller: 'contact3'}];
var storeModel = Alloy.createCollection('storeLocator'); 
var details = storeModel.getStoreList();
console.log(details);
function goSlide(event){
	var index = event.source.mod;
	var arrViews = $.scrollableView.getViews();
	
	switch(index){
		case "0":
			$.lbl1.backgroundColor = "#453363";
			$.lbl1.color = "#AA9DB6";
			//$.lbl1.borderColor = "#453363";
			$.lbl2.backgroundColor = "#E6E7E9";
			$.lbl2.color = "#4CC4D2";
			//$.lbl2.borderColor = "#4CC4D2";
			$.lbl3.backgroundColor = "#E6E7E9";
			$.lbl3.color = "#4CC4D2";
			//$.lbl3.borderColor = "#4CC4D2";
			break;
		 
		case "1":
			$.lbl1.backgroundColor = "#E6E7E9";
			$.lbl1.color = "#4CC4D2";
			//$.lbl1.borderColor = "#4CC4D2";
			$.lbl2.backgroundColor = "#453363";
			$.lbl2.color = "#AA9DB6";
			//$.lbl2.borderColor = "#453363";
			$.lbl3.backgroundColor = "#E6E7E9";
			$.lbl3.color = "#4CC4D2";
			//$.lbl3.borderColor = "#4CC4D2";
			break;
			
		case "2":
			$.lbl1.backgroundColor = "#E6E7E9";
			$.lbl1.color = "#4CC4D2";
			//$.lbl1.borderColor = "#4CC4D2";
			$.lbl2.backgroundColor = "#E6E7E9";
			$.lbl2.color = "#4CC4D2";
			//$.lbl2.borderColor = "#4CC4D2";
			$.lbl3.backgroundColor = "#453363";
			$.lbl3.color = "#AA9DB6";
			//$.lbl3.borderColor = "#453363";
			break;
	}
	$.scrollableView.scrollToView(arrViews[index]);
}