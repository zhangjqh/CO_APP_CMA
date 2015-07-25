Type.registerNamespace('com.ump.productquery.cm_settingpageController');
com.ump.productquery.cm_settingpageController = function() {

}
function com$ump$productquery$cm_settingpageController$initialize(ctx){
    //your logic code below...
    //demo code : var companyEnity = ctx.entity();
    //demo code : var departmentEntity = companyEnity.field("depts");
    //demo code : var employeeEntity = departmentEntity.get("empls");
    //demo code : companyEnity.attachEvent("onchange", "name", onchange_handler1);
    //demo code : departmentEntity.attachEvent("onchange", "dname", onchange_handler2);
    //demo code : employeeEntity.attachEvent("onchange", "ename", onchange_handler3);
    //yon can attach event on the entity object...
    
}
function com$ump$productquery$cm_settingpageController$ExitOk(ctx){
	//退出登录需要清空当前全局变量中的用户信息，还需要清空config中的用户信息，然后隐藏退出按钮
	/*var jsonApp = {
			userid : ""
		}*/
		
	//$ctx.setApp(jsonApp);
	
	var writeObj = {
		password : ""
	};
	
	var writeJsonString = $jsonToString(writeObj);	
	UM_NativeCall.callService("UMService.writeConfigure", writeJsonString);
	
	var close = {
		resultcode : "15",
		from : "exit"
	};
	
	var closeJsonString = $jsonToString(close);
	
	UM_NativeCall.callService("UMView.close", closeJsonString);
}
com.ump.productquery.cm_settingpageController.prototype = {
    initialize : com$ump$productquery$cm_settingpageController$initialize,
    ExitOk : com$ump$productquery$cm_settingpageController$ExitOk
};
com.ump.productquery.cm_settingpageController.registerClass('com.ump.productquery.cm_settingpageController');
