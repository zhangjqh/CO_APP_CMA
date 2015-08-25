//JavaScript Framework 2.0 Code
try{
Type.registerNamespace('com.ump.productquery.Factory_referlistController');
com.ump.productquery.Factory_referlistController = function() {
    com.ump.productquery.Factory_referlistController.initializeBase(this);
    this.initialize();
}
function com$ump$productquery$Factory_referlistController$initialize(){
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
    
function com$ump$productquery$Factory_referlistController$evaljs(js){
    eval(js)
}
function com$ump$productquery$Factory_referlistController$load_reflist(sender, args){
	var lastusedfactory = $cache.read("lastusedfactory");
	$ctx.put("lastusedfactorystr",jsonToString(lastusedfactory));
	$ctx.dataBind();
	var params = {
		current_pk_factory : $param.getString("current_pk_factory"),
		lastusedfactorystr : $ctx.getString("lastusedfactorystr"),
		searchfield : $ctx.getString("searchfield")
	}
	$service.callAction({
		"viewid" : "com.ump.productquery.Cm_factoryctxExtendController",//后台带包名的Controller名
		"action" : "getFactoryList",//方法名,
		"params" : params,//自定义参数
		"autoDataBinding" : true,//请求回来会是否进行数据绑定，默认不绑定
		"contextmapping" : "",//将返回结果映射到指定的Context字段上，默认为替换整个Context
		"callback" : "this.setCurrentItemChecked()",//请求回来后执行的js方法
		"error" : ""//失败回调的js方法
	})
}
function com$ump$productquery$Factory_referlistController$setCurrentItemChecked(sender,args){
	var index=$ctx.getString("fisrtselectedindex");
    $id('listviewdefine0').set("scrollto", index);
}
function com$ump$productquery$Factory_referlistController$onSearch(sender, args){
	$ctx.dataCollect();
	this.load_reflist(sender,args);
}
function com$ump$productquery$Factory_referlistController$onClickListRow(sender, args){
	var row = $id("listviewdefine0").get("row");
	row = $stringToJSON(row);
	if(isEmpty(row.factorycode)){
		return;
	}
	$view.close({
		"resultCode" : "15",
		"result" : row,
		"isKeep" : false
	})
}
function isEmpty(str){
	return (typeof(str) == 'undefined' || str == null || str =="");
}
com.ump.productquery.Factory_referlistController.prototype = {
    onClickListRow : com$ump$productquery$Factory_referlistController$onClickListRow,
    onSearch : com$ump$productquery$Factory_referlistController$onSearch,
    load_reflist : com$ump$productquery$Factory_referlistController$load_reflist,
    initialize : com$ump$productquery$Factory_referlistController$initialize,
    evaljs : com$ump$productquery$Factory_referlistController$evaljs,
    setCurrentItemChecked : com$ump$productquery$Factory_referlistController$setCurrentItemChecked
};
com.ump.productquery.Factory_referlistController.registerClass('com.ump.productquery.Factory_referlistController',UMP.UI.Mvc.Controller);
}catch(e){$e(e);}
