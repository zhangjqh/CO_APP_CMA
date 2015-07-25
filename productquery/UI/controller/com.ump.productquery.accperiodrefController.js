Type.registerNamespace('com.ump.productquery.accperiodrefController');
com.ump.productquery.accperiodrefController = function() {

}
function com$ump$productquery$accperiodrefController$initialize(ctx){
    //your logic code below...
    //demo code : var companyEnity = ctx.entity();
    //demo code : var departmentEntity = companyEnity.field("depts");
    //demo code : var employeeEntity = departmentEntity.get("empls");
    //demo code : companyEnity.attachEvent("onchange", "name", onchange_handler1);
    //demo code : departmentEntity.attachEvent("onchange", "dname", onchange_handler2);
    //demo code : employeeEntity.attachEvent("onchange", "ename", onchange_handler3);
    //yon can attach event on the entity object...
    
}
function com$ump$productquery$accperiodrefController$returnResult(ctx){
    //your logic code below...
    //you can get the current context by $context or the parameter[ctx]
    //demo code : $context.get("a")
    //demo code : $context.get("cust").get("ca")
    //demo code : $context.get("lines").get(0,"la")
    //demo code : $context.get("lines").get(0,"details").get(0,"da")

}
function com$ump$productquery$accperiodrefController$setcurrentselectitemred(ctx){
    //your logic code below...
    //you can get the current context by $context or the parameter[ctx]
    //demo code : $context.get("a")
    //demo code : $context.get("cust").get("ca")
    //demo code : $context.get("lines").get(0,"la")
    //demo code : $context.get("lines").get(0,"details").get(0,"da")
	var current_yearmonth=ctx.param("current_yearmonth");
	var index=0;
	if(typeof(current_yearmonth) == undefined || current_yearmonth == null || current_yearmonth == ""){
		return;
	}
	var yearlist=ctx.get("yearlist");
	for(var i=0;i<yearlist.length();i++){
		var bd_accperiodlist=yearlist.get(i,"bd_accperiodlist");
		for(var j=0;j<bd_accperiodlist.length();j++){
			var yearmonth =bd_accperiodlist.get(j,"yearmonth");
			if(yearmonth == current_yearmonth){
				bd_accperiodlist.set(j,"checked","true");
				index=12*i+j;
			}else{
				bd_accperiodlist.set(j,"checked","false");
			}
		}
	}
	$controls.set("listview0","scrollto",index);
	
}
com.ump.productquery.accperiodrefController.prototype = {
    initialize : com$ump$productquery$accperiodrefController$initialize,
    returnResult : com$ump$productquery$accperiodrefController$returnResult,
    setcurrentselectitemred : com$ump$productquery$accperiodrefController$setcurrentselectitemred
};
com.ump.productquery.accperiodrefController.registerClass('com.ump.productquery.accperiodrefController');
