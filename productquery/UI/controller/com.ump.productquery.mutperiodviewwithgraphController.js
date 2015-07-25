Type.registerNamespace('com.ump.productquery.mutperiodviewwithgraphController');
com.ump.productquery.mutperiodviewwithgraphController = function() {

}
function com$ump$productquery$mutperiodviewwithgraphController$initialize(ctx){
    //your logic code below...
    //demo code : var companyEnity = ctx.entity();
    //demo code : var departmentEntity = companyEnity.field("depts");
    //demo code : var employeeEntity = departmentEntity.get("empls");
    //demo code : companyEnity.attachEvent("onchange", "name", onchange_handler1);
    //demo code : departmentEntity.attachEvent("onchange", "dname", onchange_handler2);
    //demo code : employeeEntity.attachEvent("onchange", "ename", onchange_handler3);
    //yon can attach event on the entity object...
    
}
function com$ump$productquery$mutperiodviewwithgraphController$loadviewdata(ctx){
	var pk_factory = ctx.param("pk_factory");
	var factoryname = ctx.param("factoryname");
	var pk_material = ctx.param("pk_material");
	var productname = ctx.param("productname");
	var refresult = ctx.param("refresult");
	var periodproductliststr = ctx.param("periodproductlist");
	var json = ctx.unload();
	json["pk_factory"] = pk_factory;
	json["factoryname"] = factoryname;
	json["pk_material"] = pk_material;
	json["productname"] = productname;
	json["refresult"] = refresult;
	
	if (periodproductliststr == null || typeof(periodproductliststr) == undefined || periodproductliststr == ""){
		alert("列表数据为空，没有图表数据!");
		_$sys.callAction('back');
		return;
	}
	var datalist=[];
	var periodproductlist=stringToJSON(periodproductliststr);
	for (var i=0;i<periodproductlist.length;i++){
		if(periodproductlist[i].total != "无"){
			var temp = {
				key : periodproductlist[i].yearmonth,
				value : periodproductlist[i].price.replace(/,/g,"")
			}
			datalist.push(temp);
		}
		
	}
	var graphdata = {
		data:datalist,
		seriseName : '多期间对比',
		chartType : 3
	}
	var chartdataarray =[];
	chartdataarray.push(graphdata);
	
	var chartdata ={
		ChartData : chartdataarray
	}
	json["charViewData"] = chartdata;
	ctx.load(json);
	
}
com.ump.productquery.mutperiodviewwithgraphController.prototype = {
    initialize : com$ump$productquery$mutperiodviewwithgraphController$initialize,
    loadviewdata : com$ump$productquery$mutperiodviewwithgraphController$loadviewdata
};
com.ump.productquery.mutperiodviewwithgraphController.registerClass('com.ump.productquery.mutperiodviewwithgraphController');
