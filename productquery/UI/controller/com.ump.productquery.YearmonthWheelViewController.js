Type.registerNamespace('com.ump.productquery.YearmonthWheelViewController');
com.ump.productquery.YearmonthWheelViewController = function() {

}
function com$ump$productquery$YearmonthWheelViewController$initialize(ctx){
    //your logic code below...
    //demo code : var companyEnity = ctx.entity();
    //demo code : var departmentEntity = companyEnity.field("depts");
    //demo code : var employeeEntity = departmentEntity.get("empls");
    //demo code : companyEnity.attachEvent("onchange", "name", onchange_handler1);
    //demo code : departmentEntity.attachEvent("onchange", "dname", onchange_handler2);
    //demo code : employeeEntity.attachEvent("onchange", "ename", onchange_handler3);
    //yon can attach event on the entity object...
    
}
function com$ump$productquery$YearmonthWheelViewController$selectmonth(ctx){
    //your logic code below...
    //you can get the current context by $context or the parameter[ctx]
    //demo code : $context.get("a")
    //demo code : $context.get("cust").get("ca")
    //demo code : $context.get("lines").get(0,"la")
    //demo code : $context.get("lines").get(0,"details").get(0,"da")

}
function com$ump$productquery$YearmonthWheelViewController$selectyear(ctx){
    //your logic code below...
    //you can get the current context by $context or the parameter[ctx]
    //demo code : $context.get("a")
    //demo code : $context.get("cust").get("ca")
    //demo code : $context.get("lines").get(0,"la")
    //demo code : $context.get("lines").get(0,"details").get(0,"da")

}
function com$ump$productquery$YearmonthWheelViewController$loaddata(ctx){
	var json = ctx.unload();
	alert(jsonToString(json));
}
com.ump.productquery.YearmonthWheelViewController.prototype = {
    initialize : com$ump$productquery$YearmonthWheelViewController$initialize,
    selectmonth : com$ump$productquery$YearmonthWheelViewController$selectmonth,
    selectyear : com$ump$productquery$YearmonthWheelViewController$selectyear,
    loaddata : com$ump$productquery$YearmonthWheelViewController$loaddata
};
com.ump.productquery.YearmonthWheelViewController.registerClass('com.ump.productquery.YearmonthWheelViewController');
