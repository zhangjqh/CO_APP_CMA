Type.registerNamespace('com.ump.productquery.cm_selectcompareperiodviewController');
com.ump.productquery.cm_selectcompareperiodviewController = function() {

}
function com$ump$productquery$cm_selectcompareperiodviewController$initialize(ctx){
    //your logic code below...
    //demo code : var companyEnity = ctx.entity();
    //demo code : var departmentEntity = companyEnity.field("depts");
    //demo code : var employeeEntity = departmentEntity.get("empls");
    //demo code : companyEnity.attachEvent("onchange", "name", onchange_handler1);
    //demo code : departmentEntity.attachEvent("onchange", "dname", onchange_handler2);
    //demo code : employeeEntity.attachEvent("onchange", "ename", onchange_handler3);
    //yon can attach event on the entity object...
    
}
function com$ump$productquery$cm_selectcompareperiodviewController$returnResult(ctx){
    //your logic code below...
    //you can get the current context by $context or the parameter[ctx]
    //demo code : $context.get("a")
    //demo code : $context.get("cust").get("ca")
    //demo code : $context.get("lines").get(0,"la")
    //demo code : $context.get("lines").get(0,"details").get(0,"da")
    var seletecdlist = [];
	var returnsel=[];
	var name="";
	var yearlist =ctx.get("yearlist");
	var relist="[";
	for(var i=0;i < yearlist.length();i++){
		var yearmonthlist = yearlist.get(i,"yearmonthlist");
		for(var j=0;j < yearmonthlist.length();j++){
			var checked = yearmonthlist.get(j,"checked");
			if(typeof(checked)==undefined||checked==null)
				checked=false;
			if (checked=="true"||checked==true) {
				seletecdlist.push(yearmonthlist.rows()[j].unload());
				if(name=="")
				  name=name+yearmonthlist.get(j,"yearmonth");
				else
				  name=name+","+yearmonthlist.get(j,"yearmonth");
				var temp={
						code:yearmonthlist.get(j,"pk_accperiodmonth"),
						name:yearmonthlist.get(j,"yearmonth")
				}
				returnsel.push(temp);
				relist=relist+"{'code':'"+yearmonthlist.get(j,"pk_accperiodmonth")+"';'name':'"+yearmonthlist.get(j,"yearmonth")+"'},"
			}
		}
	}
	
	if(relist!="]")
	{
	   relist=relist.substring(0,relist.length-1);
	}
	relist=relist+"]";
	var json=returnsel;
	if(seletecdlist.length>0){
		var params="";
		var result={
					name:name
			}
			params = {
				isKeep: false,
				resultcode: "15",
				result : result 
		  };
		UM_NativeCall.callService("UMView.close", jsonToString(params));
	}
	else{
       var params = {
			isKeep: false,
			resultcode: "0", //参照返回代码15
		};
       UM_NativeCall.callService("UMView.close", jsonToString(params));
    }
}
function com$ump$productquery$cm_selectcompareperiodviewController$onClickYearRow(ctx){
	var index=ctx.param("yearindex");
	var yearlist=ctx.get("yearlist");
	var checked=yearlist.get(index,"checked");
	var yearmonthlist = yearlist.get(index,"yearmonthlist");
	if(checked==undefined||checked=="")
	{
		yearlist.set(index,"checked",true);
		for (var i=0;i < yearmonthlist.length();i++){
			yearmonthlist.set(i,"checked",true);
		}
		return;
	}	
	if(checked=="true"||checked==true){
		yearlist.set(index,"checked",false);
		for (var i=0;i < yearmonthlist.length();i++){
			yearmonthlist.set(i,"checked",false);
		}
	}
	else{
		yearlist.set(index,"checked",true);
		for (var i=0;i < yearmonthlist.length();i++){
			yearmonthlist.set(i,"checked",true);
		}
	}
		
}
function com$ump$productquery$cm_selectcompareperiodviewController$onClickYearMonthRow(ctx){
	var checked = ctx.param("checked");
	var yearmonth = ctx.param("yearmonth");
	var pk_accperiodmonth = ctx.param("pk_accperiodmonth");
	
	var yearlist = ctx.get("yearlist");
	for (var i=0;i < yearlist.length();i++){
		var year = yearlist.get(i,"year");
		if (yearmonth.substring(0,4) == year){
			var yearmonthlist = yearlist.get(i,"yearmonthlist");
			for (var j=0;j < yearmonthlist.length();j++){
				if(yearmonthlist.get(j,"pk_accperiodmonth") == pk_accperiodmonth){
					if(checked==undefined||checked=="")
					{
						yearmonthlist.set(j,"checked",true);
						return;
					}	
					if(checked=="true"||checked==true)
						yearmonthlist.set(j,"checked",false);
					else
						yearmonthlist.set(j,"checked",true);
				}
			}
		}
	}
}
function com$ump$productquery$cm_selectcompareperiodviewController$scrolltofisrtselectedindex(ctx){
	var fisrtselectedindex = ctx.get("firstselectedindex");
	$controls.set("listview0","scrollto",fisrtselectedindex);
	//$controls.set("listview0","allowdatacollect","true");
}
com.ump.productquery.cm_selectcompareperiodviewController.prototype = {
    initialize : com$ump$productquery$cm_selectcompareperiodviewController$initialize,
    returnResult : com$ump$productquery$cm_selectcompareperiodviewController$returnResult,
    onClickYearRow : com$ump$productquery$cm_selectcompareperiodviewController$onClickYearRow,
    onClickYearMonthRow : com$ump$productquery$cm_selectcompareperiodviewController$onClickYearMonthRow,
    scrolltofisrtselectedindex : com$ump$productquery$cm_selectcompareperiodviewController$scrolltofisrtselectedindex
};
com.ump.productquery.cm_selectcompareperiodviewController.registerClass('com.ump.productquery.cm_selectcompareperiodviewController');
