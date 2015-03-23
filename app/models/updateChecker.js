/**********************************
CHECKER CONFIG 
ID       type Name
------------------------------------
1		getStoreLocatorList	 
2 			 
3 		   
4 			
************************************/

exports.definition = {
	config: {
		columns: {
		    "id": "INTEGER",
		    "typeName": "TEXT",
		    "updated": "TEXT"
		},
		adapter: {
			type: "sql",
			collection_name: "updateChecker"
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
			getCheckerById : function(id){
				var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE id='"+ id+ "'" ;
                
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var arr = []; 
               
                if (res.isValidRow()){
					arr = {
					    typeName: res.fieldByName('typeName'),
					    updated: res.fieldByName('updated')
					};
				} 
				res.close();
                db.close();
                collection.trigger('sync');
                return arr;
			},
			updateModule : function (id,typeName, updateDate){
				var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE id="+ id ;
                var sql_query =  "";
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
             
                if (res.isValidRow()){
             		sql_query = "UPDATE " + collection.config.adapter.collection_name + " SET updated='"+updateDate+"' WHERE id='" +id+"'";
                }else{
                	sql_query = "INSERT INTO " + collection.config.adapter.collection_name + " (id, typeName, updated) VALUES ('"+id+"','"+typeName+"','"+updateDate+"')" ;
				}
       
	            db.execute(sql_query);
	            db.close();
	            collection.trigger('sync');
			}
		});

		return Collection;
	}
};