Type.registerNamespace('com.ump.productquery.cm_productfilterController');
com.ump.productquery.cm_productfilterController = function() {

}
function com$ump$productquery$cm_productfilterController$initialize(ctx){
    //your logic code below...
    //demo code : var companyEnity = ctx.entity();
    //demo code : var departmentEntity = companyEnity.field("depts");
    //demo code : var employeeEntity = departmentEntity.get("empls");
    //demo code : companyEnity.attachEvent("onchange", "name", onchange_handler1);
    //demo code : departmentEntity.attachEvent("onchange", "dname", onchange_handler2);
    //demo code : employeeEntity.attachEvent("onchange", "ename", onchange_handler3);
    //yon can attach event on the entity object...
    
}
function com$ump$productquery$cm_productfilterController$searchcallback(ctx){
	var json = ctx.unload();
	var cmproductlist=json["cmproductlist"];
	if (typeof(cmproductlist) == 'undefined' || cmproductlist==null || cmproductlist=="" || cmproductlist.length == 0){
		$document.getElementById("listview0").setAttribute("display", "none");
		$document.getElementById("panel0").setAttribute("display", "block");
	}else{
		$document.getElementById("listview0").setAttribute("display", "block");
		$document.getElementById("panel0").setAttribute("display", "none");
	}
	var visibleLoadMore=ctx.get("visibleLoadMore");
	$controls.set("listview0","visibleLoadMore",visibleLoadMore);
	
}
com.ump.productquery.cm_productfilterController.prototype = {
    initialize : com$ump$productquery$cm_productfilterController$initialize,
    searchcallback : com$ump$productquery$cm_productfilterController$searchcallback
};
com.ump.productquery.cm_productfilterController.registerClass('com.ump.productquery.cm_productfilterController');
