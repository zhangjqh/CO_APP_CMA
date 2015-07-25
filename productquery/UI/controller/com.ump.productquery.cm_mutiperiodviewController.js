Type.registerNamespace('com.ump.productquery.cm_mutiperiodviewController');
com.ump.productquery.cm_mutiperiodviewController = function() {

}
function com$ump$productquery$cm_mutiperiodviewController$initialize(ctx){
    //your logic code below...
    //demo code : var companyEnity = ctx.entity();
    //demo code : var departmentEntity = companyEnity.field("depts");
    //demo code : var employeeEntity = departmentEntity.get("empls");
    //demo code : companyEnity.attachEvent("onchange", "name", onchange_handler1);
    //demo code : departmentEntity.attachEvent("onchange", "dname", onchange_handler2);
    //demo code : employeeEntity.attachEvent("onchange", "ename", onchange_handler3);
    //yon can attach event on the entity object...
    
}
function com$ump$productquery$cm_mutiperiodviewController$clickListRow(ctx){
	var selecttotal=ctx.param("selecttotal");
	if("无" == selecttotal){
		alert('当前选中行无明细');
		return;
	}
	_$sys.callAction('openProductDetailInfoView');
}
com.ump.productquery.cm_mutiperiodviewController.prototype = {
    initialize : com$ump$productquery$cm_mutiperiodviewController$initialize,
    clickListRow : com$ump$productquery$cm_mutiperiodviewController$clickListRow
};
com.ump.productquery.cm_mutiperiodviewController.registerClass('com.ump.productquery.cm_mutiperiodviewController');
