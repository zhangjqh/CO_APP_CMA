Type.registerNamespace('com.ump.productquery.detailgraphController');
com.ump.productquery.detailgraphController = function() {

}
function com$ump$productquery$detailgraphController$initialize(ctx){
    //your logic code below...
    //demo code : var companyEnity = ctx.entity();
    //demo code : var departmentEntity = companyEnity.field("depts");
    //demo code : var employeeEntity = departmentEntity.get("empls");
    //demo code : companyEnity.attachEvent("onchange", "name", onchange_handler1);
    //demo code : departmentEntity.attachEvent("onchange", "dname", onchange_handler2);
    //demo code : employeeEntity.attachEvent("onchange", "ename", onchange_handler3);
    //yon can attach event on the entity object...
    
}
function com$ump$productquery$detailgraphController$loadviewdata(ctx){
	var sourcepage=ctx.param("sourcepage");
	if ("mutifactoryview"==sourcepage || "mutiperiodview"==sourcepage){
		$controls.set("button4","display","none");
		$controls.set("button5","display","none");
		$document.getElementById("panel13").setAttribute("display", "none");
		$document.getElementById("panel17").setAttribute("display", "none");
	}
	var pk_factory = ctx.param("pk_factory");
	var factoryname = ctx.param("factoryname");
	var pk_material = ctx.param("pk_material");
	var productname = ctx.param("productname");
	var pk_accperiodmonth = ctx.param("pk_accperiodmonth");
	var yearmonth = ctx.param("yearmonth");
	var productinfodetails = ctx.param("productinfodetail");
	var quantity = ctx.param("quantity");
	var total = ctx.param("total");
	var price = ctx.param("price");
	var mesadoc = ctx.param("mesadoc");
	var currtype = ctx.param("currtype");
	var json = ctx.unload();
	json["pk_factory"] = pk_factory;
	json["pk_material"] = pk_material;
	json["pk_accperiodmonth"] = pk_accperiodmonth;
	json["factoryname"] = factoryname;
	json["productname"] = productname;
	json["yearmonth"] = yearmonth;
	json["quantity"] = quantity;
	json["total"] = total;
	json["price"] = price;
	json["mesadoc"] = mesadoc;
	json["currtype"] = currtype;
	var concern = ctx.param("concern");
	$context.set("concern",concern);
	
	if (typeof(productinfodetails) == undefined || productinfodetails == null || productinfodetails == ""){
		alert("列表数据为空，没有图表数据!");
		_$sys.callAction('back');
		return;
	}
	var datalist=[];
	//var productinfodetailslist=eval("("+ productinfodetails+")");
	var productinfodetailslist=stringToJSON(productinfodetails);
	for (var i=0;i<productinfodetailslist.length;i++){
		var temp = {
			key : productinfodetailslist[i].factorname,
			//value : Math.round(productinfodetailslist[i].total.replace(/,/g,""))
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
	
	json["charViewData"] = chartdata;
	
	ctx.load(json);
	return;
}
com.ump.productquery.detailgraphController.prototype = {
    initialize : com$ump$productquery$detailgraphController$initialize,
    loadviewdata : com$ump$productquery$detailgraphController$loadviewdata
};
com.ump.productquery.detailgraphController.registerClass('com.ump.productquery.detailgraphController');
