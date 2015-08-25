//JavaScript Framework 2.0 Code
try{
Type.registerNamespace('com.ump.productquery.detailgraphController');
com.ump.productquery.detailgraphController = function() {
    com.ump.productquery.detailgraphController.initializeBase(this);
    this.initialize();
}
function com$ump$productquery$detailgraphController$initialize(){
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
    
function com$ump$productquery$detailgraphController$evaljs(js){
    eval(js)
}
function com$ump$productquery$detailgraphController$loadviewdata(sender, args){
	var sourcepage=$param.getString("sourcepage");
	if ("mutifactoryview"==sourcepage || "mutiperiodview"==sourcepage){
		$id("button4").set("display","none");
		$id("button5").set("display","none");
		$id("panel13").set("display","none");
		$id("panel17").set("display","none");
	}
	var pk_factory = $param.getString("pk_factory");
	var factoryname = $param.getString("factoryname");
	var pk_material = $param.getString("pk_material");
	var productname = $param.getString("productname");
	var pk_accperiodmonth = $param.getString("pk_accperiodmonth");
	var yearmonth = $param.getString("yearmonth");
	var productinfodetails = $param.getString("productinfodetail");
	var quantity = $param.getString("quantity");
	var total = $param.getString("total");
	var price = $param.getString("price");
	var mesadoc = $param.getString("mesadoc");
	var currtype = $param.getString("currtype");
	var json = $ctx.getJSONObject();
	json.pk_factory = pk_factory;
	json.pk_material = pk_material;
	json.pk_accperiodmonth = pk_accperiodmonth;
	json.factoryname = factoryname;
	json.productname = productname;
	json.yearmonth = yearmonth;
	json.quantity = quantity;
	json.total = total;
	json.price = price;
	json.mesadoc = mesadoc;
	json.currtype = currtype;
	var concern = $param.getJSONObject("concern");
	json.concern = concern;
	
	if (typeof(productinfodetails) == 'undefined' || productinfodetails == null || productinfodetails == ""){
		$toast("列表数据为空，没有图表数据!");
		_$sys.callAction('back');
		return;
	}
	var datalist=[];
	//var productinfodetailslist=eval("("+ productinfodetails+")");
	var productinfodetailslist=stringToJSON(productinfodetails);
	for (var i=0;i<productinfodetailslist.length;i++){
		var temp = {
			key : productinfodetailslist[i].factorname,
			value : productinfodetailslist[i].total.replace(/,/g,"")
		}
		datalist.push(temp);
	}
	var graphdata = {
		data:datalist,
		seriseName : '单位成本分布',
		chartType : 7
	}
	var chartdataarray =[];
	chartdataarray.push(graphdata);
	
	var chartdata ={
		ChartData : chartdataarray
	}
	
	json.charViewData = chartdata;
	
	$ctx.push(json);
}
com.ump.productquery.detailgraphController.prototype = {
    loadviewdata : com$ump$productquery$detailgraphController$loadviewdata,
    initialize : com$ump$productquery$detailgraphController$initialize,
    evaljs : com$ump$productquery$detailgraphController$evaljs
};
com.ump.productquery.detailgraphController.registerClass('com.ump.productquery.detailgraphController',UMP.UI.Mvc.Controller);
}catch(e){$e(e);}
