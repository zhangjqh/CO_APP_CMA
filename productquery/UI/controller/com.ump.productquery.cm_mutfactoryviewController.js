//JavaScript Framework 2.0 Code
try{
Type.registerNamespace('com.ump.productquery.cm_mutfactoryviewController');
com.ump.productquery.cm_mutfactoryviewController = function() {
    com.ump.productquery.cm_mutfactoryviewController.initializeBase(this);
    this.initialize();
}
function com$ump$productquery$cm_mutfactoryviewController$initialize(){
    //you can programing by $ctx API
    //get the context data through $ctx.get()
    //set the context data through $ctx.push(json)
    //set the field of the context through $ctx.put(fieldName, fieldValue)
    //get the parameter of the context through $ctx.param(parameterName)
    //Demo Code:
    //    var str = $ctx.getString();      //获取当前Context对应的字符串
    //    alert($ctx.getString())          //alert当前Context对应的字符串
    //    var json = $ctx.getJSONObject(); //获取当前Context，返回值为json
    //    json["x"] = "a";        //为当前json增加字段
    //    json["y"] = [];           //为当前json增加数组
    //    $ctx.push(json);            //设置context，并自动调用数据绑定
    //    
    //    put方法需手动调用databind()
    //    var x = $ctx.get("x");    //获取x字段值
    //    $ctx.put("x", "b");     //设置x字段值
    //    $ctx.put("x", "b");     //设置x字段值
    //    $ctx.databind();            //调用数据绑定才能将修改的字段绑定到控件上
    //    var p1 = $param.getString("p1");   //获取参数p2的值，返回一个字符串
    //    var p2 = $param.getJSONObject("p2");   //获取参数p3的值，返回一个JSON对象
    //    var p3 = $param.getJSONArray("p3");   //获取参数p1的值，返回一个数组
    
    //your initialize code below...
    
}
    
function com$ump$productquery$cm_mutfactoryviewController$evaljs(js){
    eval(js)
}
function com$ump$productquery$cm_mutfactoryviewController$clickListRow(sender, args){
	var row = $id("listview0").get("row");
	row = $stringToJSON(row);
	var price = row.price;
	var quantity = row.quantity;
	if (price == "无" || quantity == "无"){
		$toast("所选行无明细数据");
		return;
	}
	_$sys.callAction('openProductDetailInfoView');
}
function com$ump$productquery$cm_mutfactoryviewController$writedatatocache(sender,args){
	//将最近使用的工厂写到缓存中
	var json = $ctx.getJSONObject();
	var lastusedfactory = json["lastusedfactory"];
	var returnpks=[];
	if (lastusedfactory != null && lastusedfactory!=""){
		returnpks = lastusedfactory.split(",");
	}
	var value=$cache.read("lastusedfactory");
	
	if(typeof(value) != 'undefined' && value !=null && value!=""){
		var arrayjson = stringToJSON(value);
		var lastusedfactoryitems = arrayjson;
		var newjsonarray=[];
		if (lastusedfactoryitems != null && lastusedfactoryitems.length > 0){
			for (var i=0;i < lastusedfactoryitems.length;i++){
				var flag = false;//是否包含当前返回的
				var lastusedfactoryitem = lastusedfactoryitems[i].lastusedfactoryitem;
				if (returnpks.length > 0){
					for (var j=0;j<returnpks.length;j++){
						if (returnpks[j] == lastusedfactoryitem){
							flag=true;
							break;
						}
					}
					if (flag==false){
						var temp = {
							lastusedfactoryitem : lastusedfactoryitem
						}
						newjsonarray.push(temp);
					}
				}
			}
		}
		if (returnpks.length > 0){
			for (var i=0;i < returnpks.length;i++){
				var temp={
					lastusedfactoryitem : returnpks[i]
				}
				newjsonarray.splice(0,0,temp);
			}
		}
		
		var jsonarray=[];
		if (newjsonarray.length > 0){
			for (var i=0;i<5&&i<newjsonarray.length;i++){
				var lastusedfactoryitem = newjsonarray[i].lastusedfactoryitem;
				var temp={
					lastusedfactoryitem : lastusedfactoryitem
				}
				jsonarray.push(temp);
			}
		}
		$cache.write("lastusedfactory", jsonarray);
			
	}else{
		//第一次创建缓存文件
		var lastusedfactoryArray = [];
		var lastusedfactoryitem = {
			lastusedfactoryitem : lastusedfactory
		}
		lastusedfactoryArray.push(lastusedfactoryitem);
		$cache.write("lastusedfactory", lastusedfactoryArray);
	}
}
com.ump.productquery.cm_mutfactoryviewController.prototype = {
    clickListRow : com$ump$productquery$cm_mutfactoryviewController$clickListRow,
    initialize : com$ump$productquery$cm_mutfactoryviewController$initialize,
    evaljs : com$ump$productquery$cm_mutfactoryviewController$evaljs,
    writedatatocache : com$ump$productquery$cm_mutfactoryviewController$writedatatocache
};
com.ump.productquery.cm_mutfactoryviewController.registerClass('com.ump.productquery.cm_mutfactoryviewController',UMP.UI.Mvc.Controller);
}catch(e){$e(e);}
