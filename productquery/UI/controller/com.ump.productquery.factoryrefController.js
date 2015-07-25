Type.registerNamespace('com.ump.productquery.factoryrefController');
com.ump.productquery.factoryrefController = function() {

}
function com$ump$productquery$factoryrefController$initialize(ctx){
    //your logic code below...
    //demo code : var companyEnity = ctx.entity();
    //demo code : var departmentEntity = companyEnity.field("depts");
    //demo code : var employeeEntity = departmentEntity.get("empls");
    //demo code : companyEnity.attachEvent("onchange", "name", onchange_handler1);
    //demo code : departmentEntity.attachEvent("onchange", "dname", onchange_handler2);
    //demo code : employeeEntity.attachEvent("onchange", "ename", onchange_handler3);
    //yon can attach event on the entity object...
    
}
function com$ump$productquery$factoryrefController$returnResult(ctx){
    //your logic code below...
    //you can get the current context by $context or the parameter[ctx]
    //demo code : $context.get("a")
    //demo code : $context.get("cust").get("ca")
    //demo code : $context.get("lines").get(0,"la")
    //demo code : $context.get("lines").get(0,"details").get(0,"da")
	
}
function com$ump$productquery$factoryrefController$setcurrentselectitemred(ctx){
	//标红的代码放在服务端，这里设置默认定位,分页的情况在后端处理
	var index=ctx.get("fisrtselectedindex");
	$controls.set("listview0","scrollto",index);
	//查看更多是否显示
	//var visibleLoadMore=ctx.get("visibleLoadMore");
	//$controls.set("listview0","visibleLoadMore",visibleLoadMore);
}
function com$ump$productquery$factoryrefController$beforeloadFirstPage(ctx){
	var lastusedfactory = $cache.read("lastusedfactory");
	$ctx.put("lastusedfactorystr",jsonToString(lastusedfactory));
	$ctx.dataBind();
	_$sys.callAction('loaddata');
}
function com$ump$productquery$factoryrefController$beforeloadNextPage(ctx){
	var lastusedfactory = $cache.read("lastusedfactory");
	$ctx.put("lastusedfactorystr",jsonToString(lastusedfactory));
	$ctx.dataBind();
	_$sys.callAction('getnextpage');
}
com.ump.productquery.factoryrefController.prototype = {
    initialize : com$ump$productquery$factoryrefController$initialize,
    returnResult : com$ump$productquery$factoryrefController$returnResult,
    setcurrentselectitemred : com$ump$productquery$factoryrefController$setcurrentselectitemred,
    beforeloadFirstPage : com$ump$productquery$factoryrefController$beforeloadFirstPage,
    beforeloadNextPage : com$ump$productquery$factoryrefController$beforeloadNextPage
};
com.ump.productquery.factoryrefController.registerClass('com.ump.productquery.factoryrefController');
