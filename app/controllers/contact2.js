if(Ti.Platform.osname == "android"){
	$.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER;
}

var storeModel = Alloy.createCollection('storeLocator'); 
var details = storeModel.getStoreList({
	category : "Care Centre"
});
setTimeout(function(){
	generateTable();
},800);

function generateTable(){ 
	var data=[]; 
	
	for (var i=0; i< details.length; i++) {  
		 
		var tableRow = Ti.UI.createTableViewRow({ 
			layout: "vertical", 
			top:5, 
 			bottom:5, 
			height: 170
		}); 
		  
		var address = details[i].address ; 
		var myAdd = address.replace(/(\\r\n|\\n|\\r)/gm," ");
  
		var contact = details[i].mobile ; 
		if(contact == "null"){
			contact = "-";
		}
		 
		tableRow.add(createLabel({text:details[i].area  , color: "#000000"}));	 
		tableRow.add(createLabel({text:details[i].outlet , color: "#9D9F9E"}));	 
		tableRow.add(createLabel({text:myAdd , color: "#9D9F9E"}));	 
		tableRow.add(createLabel({text:"Contact : " +contact , color: "#9D9F9E"}));	 
		data.push(tableRow);	
		//createCateEvent(categoryHeader, details[i]['id']);
		$.careCenterTable.setData(data);  
	} 
}

function createLabel(ex){
	return Titanium.UI.createLabel({     
		top:10, 
 		left:10,  
 		classes: ['small_text'],
 		color: ex.color,   
		text : ex.text
	}); 
}
