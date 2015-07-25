Type.registerNamespace('com.ump.productquery.mutfactoryviewwithgraphController');
com.ump.productquery.mutfactoryviewwithgraphController = function() {

}
function com$ump$productquery$mutfactoryviewwithgraphController$initialize(ctx){
    //your logic code below...
    //demo code : var companyEnity = ctx.entity();
    //demo code : var departmentEntity = companyEnity.field("depts");
    //demo code : var employeeEntity = departmentEntity.get("empls");
    //demo code : companyEnity.attachEvent("onchange", "name", onchange_handler1);
    //demo code : departmentEntity.attachEvent("onchange", "dname", onchange_handler2);
    //demo code : employeeEntity.attachEvent("onchange", "ename", onchange_handler3);
    //yon can attach event on the entity object...
    
}
function com$ump$productquery$mutfactoryviewwithgraphController$loadviewdata(ctx){
	var pk_accperiodmonth = ctx.param("pk_accperiodmonth");
	var yearmonth = ctx.param("yearmonth");
	var pk_material = ctx.param("pk_material");
	var productname = ctx.param("productname");
	var refresult = ctx.param("refresult");
	var factoryproductliststr = ctx.param("factoryproductlist");
	var json = ctx.unload();
	json["pk_accperiodmonth"] = pk_accperiodmonth;
	json["yearmonth"] = yearmonth;
	json["pk_material"] = pk_material;
	json["productname"] = productname;
	json["refresult"] = refresult;
	
	if (factoryproductliststr == null || typeof(factoryproductliststr) == undefined || factoryproductliststr == ""){
		alert("列表数据为空，没有图表数据!");
		_$sys.callAction('back');
		return;
	}
	var datalist=[];
	//var factoryproductlist=eval("("+ factoryproductliststr+")");
	var factoryproductlist=stringToJSON(factoryproductliststr);
	for (var i=0;i<factoryproductlist.length;i++){
		if(factoryproductlist[i].total != "无"){
			var temp = {
				key : factoryproductlist[i].factorycode,
				value : factoryproductlist[i].price.replace(/,/g,"")
			}
			datalist.push(temp);
		}
		
		
	}
	var graphdata = {
		data:datalist,
		seriseName : '多工厂对比',
		chartType : 0
	}
	var chartdataarray =[];
	chartdataarray.push(graphdata);
	
	var chartdata ={
		ChartData : chartdataarray
	}
	json["charViewData"] = chartdata;
	ctx.load(json);
}
com.ump.productquery.mutfactoryviewwithgraphController.prototype = {
    initialize : com$ump$productquery$mutfactoryviewwithgraphController$initialize,
    loadviewdata : com$ump$productquery$mutfactoryviewwithgraphController$loadviewdata
};
com.ump.productquery.mutfactoryviewwithgraphController.registerClass('com.ump.productquery.mutfactoryviewwithgraphController');
