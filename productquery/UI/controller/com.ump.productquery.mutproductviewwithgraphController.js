Type.registerNamespace('com.ump.productquery.mutproductviewwithgraphController');
com.ump.productquery.mutproductviewwithgraphController = function() {

}
function com$ump$productquery$mutproductviewwithgraphController$initialize(ctx){
    //your logic code below...
    //demo code : var companyEnity = ctx.entity();
    //demo code : var departmentEntity = companyEnity.field("depts");
    //demo code : var employeeEntity = departmentEntity.get("empls");
    //demo code : companyEnity.attachEvent("onchange", "name", onchange_handler1);
    //demo code : departmentEntity.attachEvent("onchange", "dname", onchange_handler2);
    //demo code : employeeEntity.attachEvent("onchange", "ename", onchange_handler3);
    //yon can attach event on the entity object...
    
}
function com$ump$productquery$mutproductviewwithgraphController$callback(ctx){
    //your logic code below...
    //you can get the current context by $context or the parameter[ctx]
    //demo code : $context.get("a")
    //demo code : $context.get("cust").get("ca")
    //demo code : $context.get("lines").get(0,"la")
    //demo code : $context.get("lines").get(0,"details").get(0,"da")
	var newgraphdata = ctx.get("newgraphdata");
	var url="http://10.1.76.40:9998/chart/chart?newgraphdata="+encodeURI(jsonToString(newgraphdata))+"&age=18";
	$controls.set("webview0","url",url);
}
com.ump.productquery.mutproductviewwithgraphController.prototype = {
    initialize : com$ump$productquery$mutproductviewwithgraphController$initialize,
    callback : com$ump$productquery$mutproductviewwithgraphController$callback
};
com.ump.productquery.mutproductviewwithgraphController.registerClass('com.ump.productquery.mutproductviewwithgraphController');
