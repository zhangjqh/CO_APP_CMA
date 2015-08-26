//JavaScript Framework 2.0 Code
try{
Type.registerNamespace('com.ump.productquery.cm_productfilterController');
com.ump.productquery.cm_productfilterController = function() {
    com.ump.productquery.cm_productfilterController.initializeBase(this);
    this.initialize();
}
function com$ump$productquery$cm_productfilterController$initialize(){
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
    
function com$ump$productquery$cm_productfilterController$evaljs(js){
    eval(js)
}
function com$ump$productquery$cm_productfilterController$searchcallback(sender, args){
    //Your JavaScript below...
    var json = $ctx.getJSONObject();
	var cmproductlist=json["cmproductlist"];
	if (typeof(cmproductlist) == 'undefined' || cmproductlist==null || cmproductlist=="" || cmproductlist.length == 0){
		$document.getElementById("listview0").setAttribute("display", "none");
		$document.getElementById("panel0").setAttribute("display", "block");
	}else{
		$document.getElementById("listview0").setAttribute("display", "block");
		$document.getElementById("panel0").setAttribute("display", "none");
	}
	var visibleLoadMore=json.visibleLoadMore;
	$id("listview0").set("visibleLoadMore",visibleLoadMore);
}
function com$ump$productquery$cm_productfilterController$doSearch(sender, args){
	var searchfield = $id("search0").get("value");
	$ctx.put("searchfield",searchfield);
	$ctx.dataBind();
	_$sys.callAction("doSearch");
}
com.ump.productquery.cm_productfilterController.prototype = {
    doSearch : com$ump$productquery$cm_productfilterController$doSearch,
    initialize : com$ump$productquery$cm_productfilterController$initialize,
    evaljs : com$ump$productquery$cm_productfilterController$evaljs,
    searchcallback : com$ump$productquery$cm_productfilterController$searchcallback
};
com.ump.productquery.cm_productfilterController.registerClass('com.ump.productquery.cm_productfilterController',UMP.UI.Mvc.Controller);
}catch(e){$e(e);}
