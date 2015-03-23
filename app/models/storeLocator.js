exports.definition = {
	config: {
		columns: {
		    "id": "INTEGER",
		    "outlet": "TEXT",
		    "area": "TEXT",
		    "state": "TEXT",
		    "address": "TEXT",
		    "mobile": "TEXT", 
		    "latitude": "TEXT",
		    "longitude": "TEXT",
		    "category": "INTEGER",
		    "status" : "INTEGER"
		},
		adapter: {
			type: "sql",
			collection_name: "storeLocator"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
			getStoreStateList: function(){
				var collection = this;
                var sql = "SELECT distinct(state) FROM " + collection.config.adapter.collection_name +"  order by state";
                
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var listArr = []; 
                var count = 0;
                while (res.isValidRow()){
					listArr[count] = {
					    state: res.fieldByName('state')
					};
					res.next();
					count++;
				} 
				res.close();
                db.close();
                collection.trigger('sync');
                return listArr;
				
			},
			getStoreList : function(){
				var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name ;
                
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var listArr = []; 
                var count = 0;
                while (res.isValidRow()){
					listArr[count] = {
					    id: res.fieldByName('id'),
					    outlet: res.fieldByName('outlet'),
					    area: res.fieldByName('area'),
					    state: res.fieldByName('state'),
					    address: res.fieldByName('address'),
					    mobile: res.fieldByName('mobile'),
					    status: res.fieldByName('status'), 
					    latitude: res.fieldByName('latitude'),
					    longitude: res.fieldByName('longitude'),
					    category: res.fieldByName('category')
					};
					res.next();
					count++;
				} 
				res.close();
                db.close();
                collection.trigger('sync');
                return listArr;
			},
			getStoreByState : function(state){
				var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE state='"+ state+ "' ORDER BY outlet" ;
                
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var listArr = []; 
                var count = 0;
                while (res.isValidRow()){
					listArr[count] = {
					    id: res.fieldByName('id'),
					    outlet: res.fieldByName('outlet'),
					    area: res.fieldByName('area'),
					    state: res.fieldByName('state'),
					    address: res.fieldByName('address'),
					    mobile: res.fieldByName('mobile'),
					    status: res.fieldByName('status'), 
					    latitude: res.fieldByName('latitude'),
					    longitude: res.fieldByName('longitude'),
					    category: res.fieldByName('category')
					};
					res.next();
					count++;
				} 
				res.close();
                db.close();
                collection.trigger('sync');
                return listArr;
			},
			getStoreById : function(id){
				var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE id='"+ id+ "'" ;
                
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var arr = []; 
               
                if (res.isValidRow()){
					arr = {
					    outlet: res.fieldByName('outlet'),
					    area: res.fieldByName('area'),
					    state: res.fieldByName('state'),
					    address: res.fieldByName('address'),
					    mobile: res.fieldByName('mobile'),
					    status: res.fieldByName('status'), 
					    latitude: res.fieldByName('latitude'),
					    longitude: res.fieldByName('longitude'),
					    category: res.fieldByName('category')
					};
					
				} 
				res.close();
                db.close();
                collection.trigger('sync');
                return arr;
			},
			addStores : function(arr) {
				var collection = this;
                db = Ti.Database.open(collection.config.adapter.db_name);
	            
				arr.forEach(function(entry) {
					
					var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE id="+ entry.id ;
	                var sql_query =  ""; 
	                var res = db.execute(sql);
	             
	                if (res.isValidRow()){
	             		sql_query = "UPDATE " + collection.config.adapter.collection_name + " SET outlet='"+mysql_real_escape_string(entry.name)+"', area='"+entry.area+"',state='"+entry.state+"',address='"+mysql_real_escape_string(entry.address)+"',mobile='"+entry.contact+"',`status`='"+entry.status+"',latitude='"+entry.lat+"',longitude='"+entry.lng+"',category='"+entry.type+"' WHERE id=" +entry.id;
	                }else{
	                	sql_query = "INSERT INTO "+ collection.config.adapter.collection_name + "(id, outlet, area, state, address,mobile, status, latitude, longitude, category ) VALUES ('"+ entry.id +"', '"+mysql_real_escape_string(entry.name)+"', '"+entry.area+"', '"+entry.state+"', '"+mysql_real_escape_string(entry.address)+"', '"+entry.contact+"', '"+entry.status+"', '"+entry.lat+"', '"+entry.lng+"', '"+entry.type+"')";
					} 
				    db.execute(sql_query);
				});
                
	            db.close();
	            collection.trigger('sync');
	            
	            
                
            },
			resetStore : function(){
				var collection = this;
                var sql = "DELETE FROM " + collection.config.adapter.collection_name;
                db = Ti.Database.open(collection.config.adapter.db_name);
                db.execute(sql);
                db.close();
                collection.trigger('sync');
			},
			getStoreByName : function(state, query){
				var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE state='"+ state +"' AND outlet LIKE '%"+ query+ "%' ORDER BY outlet" ;
                
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var listArr = []; 
                var count = 0;
                while (res.isValidRow()){
					listArr[count] = {
					    id: res.fieldByName('id'),
					    outlet: res.fieldByName('outlet'),
					    area: res.fieldByName('area'),
					    state: res.fieldByName('state'),
					    address: res.fieldByName('address'),
					    mobile: res.fieldByName('mobile'),
					    status: res.fieldByName('status'), 
					    latitude: res.fieldByName('latitude'),
					    longitude: res.fieldByName('longitude'),
					    category: res.fieldByName('category')
					};
					res.next();
					count++;
				} 
				res.close();
                db.close();
                collection.trigger('sync');
                return listArr;
			},
		});

		return Collection;
	}
};
