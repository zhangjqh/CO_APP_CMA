Type.registerNamespace('com.ump.productquery.cm_selectcomparefactoryviewController');
com.ump.productquery.cm_selectcomparefactoryviewController = function() {

}
function com$ump$productquery$cm_selectcomparefactoryviewController$initialize(ctx){
    //your logic code below...
    //demo code : var companyEnity = ctx.entity();
    //demo code : var departmentEntity = companyEnity.field("depts");
    //demo code : var employeeEntity = departmentEntity.get("empls");
    //demo code : companyEnity.attachEvent("onchange", "name", onchange_handler1);
    //demo code : departmentEntity.attachEvent("onchange", "dname", onchange_handler2);
    //demo code : employeeEntity.attachEvent("onchange", "ename", onchange_handler3);
    //yon can attach event on the entity object...
    
}
function com$ump$productquery$cm_selectcomparefactoryviewController$returnResult(ctx){
    //your logic code below...
    //you can get the current context by $context or the parameter[ctx]
    //demo code : $context.get("a")
    //demo code : $context.get("cust").get("ca")
    //demo code : $context.get("lines").get(0,"la")
    //demo code : $context.get("lines").get(0,"details").get(0,"da")
    var seletecdlist = [];
    var name="";
    var factorygrouplist = ctx.get("factorygrouplist");
    for (var k = 0;k <factorygrouplist.length();k++){
    	var factorylist = factorygrouplist.get(k,"factorylist");
    	if (factorylist != null && factorylist.length() > 0){
	    	for (var i=0;i<factorylist.length();i++){
	    	var checked = factorylist.get(i,"checked");
	    	if(typeof(checked)==undefined||checked==null)
				checked="false";
			if (checked=="true"||checked==true) {
				seletecdlist.push(factorylist.rows()[i].unload());
				if(name=="")
				  name=name+factorylist.get(i,"pk_factory")+"#"+factorylist.get(i,"factoryname")+"#"+factorylist.get(i,"factorycode");
				else
				  name=name+","+factorylist.get(i,"pk_factory")+"#"+factorylist.get(i,"factoryname")+"#"+factorylist.get(i,"factorycode");
			}
		}
    }
    }
    /*var factorylist = ctx.get("factorylist");
    for (var i=0;i<factorylist.length();i++){
    	var checked = factorylist.get(i,"checked");
    	if(typeof(checked)==undefined||checked==null)
			checked="false";
		if (checked=="true"||checked==true) {
			seletecdlist.push(factorylist.rows()[i].unload());
			if(name=="")
			  name=name+factorylist.get(i,"pk_factory")+"#"+factorylist.get(i,"factoryname")+"#"+factorylist.get(i,"factorycode");
			else
			  name=name+","+factorylist.get(i,"pk_factory")+"#"+factorylist.get(i,"factoryname")+"#"+factorylist.get(i,"factorycode");
		}
    }*/
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
function com$ump$productquery$cm_selectcomparefactoryviewController$onClickListRow(ctx){
	//var index = ctx.param("index");
	var selectpk_factory = ctx.param("selectpk_factory");
	var checked = ctx.param("checked");
	
	
	var factorygrouplist = ctx.get("factorygrouplist");
	for (var i=0;i<factorygrouplist.length();i++){
		var factorygroupname = factorygrouplist.get(i,"factorygroupname");
		var factorylist = factorygrouplist.get(i,"factorylist");
		if (factorylist != null && factorylist.length() > 0){
			for (var j=0;j<factorylist.length();j++){
				if (factorylist.get(j,"pk_factory") == selectpk_factory){
					if(checked=="true"||checked==true)
						factorylist.set(j,"checked",false);
					else
						factorylist.set(j,"checked",true);
					}
			}
		}
	}
}
function com$ump$productquery$cm_selectcomparefactoryviewController$scrolltofisrtselectedindex(ctx){
	var index=ctx.get("fisrtselectedindex");
	$controls.set("listview0","scrollto",index);
	//$controls.set("listview0","allowdatacollect","true");
	//var visibleLoadMore=ctx.get("visibleLoadMore");
	//$controls.set("listview0","visibleLoadMore",visibleLoadMore);
}
function com$ump$productquery$cm_selectcomparefactoryviewController$beforeloaddata(ctx){
	var lastusedfactory = $cache.read("lastusedfactory");
	$ctx.put("lastusedfactorys",jsonToString(lastusedfactory));
	$ctx.dataBind();
	_$sys.callAction('loaddata');
}
com.ump.productquery.cm_selectcomparefactoryviewController.prototype = {
    initialize : com$ump$productquery$cm_selectcomparefactoryviewController$initialize,
    returnResult : com$ump$productquery$cm_selectcomparefactoryviewController$returnResult,
    onClickListRow : com$ump$productquery$cm_selectcomparefactoryviewController$onClickListRow,
    scrolltofisrtselectedindex : com$ump$productquery$cm_selectcomparefactoryviewController$scrolltofisrtselectedindex,
    beforeloaddata : com$ump$productquery$cm_selectcomparefactoryviewController$beforeloaddata
};
com.ump.productquery.cm_selectcomparefactoryviewController.registerClass('com.ump.productquery.cm_selectcomparefactoryviewController');
