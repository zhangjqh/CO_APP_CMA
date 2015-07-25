Type.registerNamespace('com.ump.productquery.mutproductdetailviewController');
com.ump.productquery.mutproductdetailviewController = function() {

}
function com$ump$productquery$mutproductdetailviewController$initialize(ctx){
    //your logic code below...
    //demo code : var companyEnity = ctx.entity();
    //demo code : var departmentEntity = companyEnity.field("depts");
    //demo code : var employeeEntity = departmentEntity.get("empls");
    //demo code : companyEnity.attachEvent("onchange", "name", onchange_handler1);
    //demo code : departmentEntity.attachEvent("onchange", "dname", onchange_handler2);
    //demo code : employeeEntity.attachEvent("onchange", "ename", onchange_handler3);
    //yon can attach event on the entity object...
    
}
function com$ump$productquery$mutproductdetailviewController$handleException(ctx){
	var noresultmsg = ctx.get("no_result_message");
	if (noresultmsg != null){
		alert(noresultmsg);
	}
}
function com$ump$productquery$mutproductdetailviewController$beforeload(ctx){
	var sourcepage=ctx.param("sourcepage");
	if("mutifactoryview"==sourcepage || "mutiperiodview"==sourcepage){
		$controls.set("button4","display","none");
		$controls.set("button5","display","none");
		$document.getElementById("panel12").setAttribute("display", "none");
		$document.getElementById("panel2").setAttribute("display", "none");
		//$document.getElementById("button4").setAttribute("display", "none");
		//$document.getElementById("button5").setAttribute("display", "none");
	}
	_$sys.callAction('loadProductDetailInfo');
}
com.ump.productquery.mutproductdetailviewController.prototype = {
    initialize : com$ump$productquery$mutproductdetailviewController$initialize,
    handleException : com$ump$productquery$mutproductdetailviewController$handleException,
    beforeload : com$ump$productquery$mutproductdetailviewController$beforeload
};
com.ump.productquery.mutproductdetailviewController.registerClass('com.ump.productquery.mutproductdetailviewController');
