Type.registerNamespace('com.ump.productquery.cm_mutfactoryviewController');
com.ump.productquery.cm_mutfactoryviewController = function() {

}
function com$ump$productquery$cm_mutfactoryviewController$initialize(ctx){
    //your logic code below...
    //demo code : var companyEnity = ctx.entity();
    //demo code : var departmentEntity = companyEnity.field("depts");
    //demo code : var employeeEntity = departmentEntity.get("empls");
    //demo code : companyEnity.attachEvent("onchange", "name", onchange_handler1);
    //demo code : departmentEntity.attachEvent("onchange", "dname", onchange_handler2);
    //demo code : employeeEntity.attachEvent("onchange", "ename", onchange_handler3);
    //yon can attach event on the entity object...
    
}
function com$ump$productquery$cm_mutfactoryviewController$comparecallback(ctx){
	alert('回调成功');
	var json = ctx.unload();
	alert(jsonToString(json));
	var result = ctx.param(result);
	
}
function com$ump$productquery$cm_mutfactoryviewController$clickListRow(ctx){
	var selecttotal=ctx.param("selecttotal");
	if("无" == selecttotal){
		alert('当前选中行无明细');
		return;
	}
	_$sys.callAction('openProductDetailInfoView');
}
function com$ump$productquery$cm_mutfactoryviewController$beforeload(ctx){
	var sourcepage=ctx.param("sourcepage");
	if("detailview" == sourcepage || "detailgraph" == sourcepage){
		_$sys.callAction('loadViewPage');
	}else if("mutifactorygraph" == sourcepage){
		
		
	}
}
function com$ump$productquery$cm_mutfactoryviewController$writedatatocache(ctx){
	//将最近使用的工厂写到缓存中
	var json = ctx.unload();
	var lastusedfactory = json["lastusedfactory"];
	var returnpks=[];
	if (lastusedfactory != null && lastusedfactory!=""){
		returnpks = lastusedfactory.split(",");
	}
	var value=$cache.read("lastusedfactory");
	
	if(typeof(value) != 'undefined' && value !=null && value!=""){
		var arrayjson = stringToJSON(value);
		var lastusedfactoryitems = arrayjson;
		var newjsonarray=[];
		if (lastusedfactoryitems != null && lastusedfactoryitems.length > 0){
			for (var i=0;i < lastusedfactoryitems.length;i++){
				var flag = false;//是否包含当前返回的
				var lastusedfactoryitem = lastusedfactoryitems[i].lastusedfactoryitem;
				if (returnpks.length > 0){
					for (var j=0;j<returnpks.length;j++){
						if (returnpks[j] == lastusedfactoryitem){
							flag=true;
							break;
						}
					}
					if (flag==false){
						var temp = {
							lastusedfactoryitem : lastusedfactoryitem
						}
						newjsonarray.push(temp);
					}
				}
			}
		}
		if (returnpks.length > 0){
			for (var i=0;i < returnpks.length;i++){
				var temp={
					lastusedfactoryitem : returnpks[i]
				}
				newjsonarray.splice(0,0,temp);
			}
		}
		
		var jsonarray=[];
		if (newjsonarray.length > 0){
			for (var i=0;i<5&&i<newjsonarray.length;i++){
				var lastusedfactoryitem = newjsonarray[i].lastusedfactoryitem;
				var temp={
					lastusedfactoryitem : lastusedfactoryitem
				}
				jsonarray.push(temp);
			}
		}
		$cache.write("lastusedfactory", jsonarray);
			
	}else{
		//第一次创建缓存文件
		var lastusedfactoryArray = [];
		var lastusedfactoryitem = {
			lastusedfactoryitem : lastusedfactory
		}
		lastusedfactoryArray.push(lastusedfactoryitem);
		$cache.write("lastusedfactory", lastusedfactoryArray);
	}
}
com.ump.productquery.cm_mutfactoryviewController.prototype = {
    initialize : com$ump$productquery$cm_mutfactoryviewController$initialize,
    comparecallback : com$ump$productquery$cm_mutfactoryviewController$comparecallback,
    clickListRow : com$ump$productquery$cm_mutfactoryviewController$clickListRow,
    beforeload : com$ump$productquery$cm_mutfactoryviewController$beforeload,
    writedatatocache : com$ump$productquery$cm_mutfactoryviewController$writedatatocache
};
com.ump.productquery.cm_mutfactoryviewController.registerClass('com.ump.productquery.cm_mutfactoryviewController');
