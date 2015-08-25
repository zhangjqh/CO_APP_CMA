//JavaScript Framework 2.0 Code
try{
Type.registerNamespace('com.ump.productquery.MultiFactory_referlistController');
com.ump.productquery.MultiFactory_referlistController = function() {
    com.ump.productquery.MultiFactory_referlistController.initializeBase(this);
    this.initialize();
}
function com$ump$productquery$MultiFactory_referlistController$initialize(){
    //you can programing by $ctx API
    //get the context data through $ctx.get()
    //set the context data through $ctx.push(json)
    //set the field of the context through $ctx.put(fieldName, fieldValue)
    //get the parameter of the context through $ctx.param(parameterName)
    //Demo Code:
    //    var str = $ctx.getString();      //获取当前Context对应的字符串
    //    alert($ctx.getString())          //alert当前Context对应的字符串
    //    var json = $ctx.getJSONObject(); //获取当前Context，返回值为json
    //    json["x"] = "a";        //为当前json增加字段
    //    json["y"] = [];           //为当前json增加数组
    //    $ctx.push(json);            //设置context，并自动调用数据绑定
    //    
    //    put方法需手动调用databind()
    //    var x = $ctx.get("x");    //获取x字段值
    //    $ctx.put("x", "b");     //设置x字段值
    //    $ctx.put("x", "b");     //设置x字段值
    //    $ctx.databind();            //调用数据绑定才能将修改的字段绑定到控件上
    //    var p1 = $param.getString("p1");   //获取参数p2的值，返回一个字符串
    //    var p2 = $param.getJSONObject("p2");   //获取参数p3的值，返回一个JSON对象
    //    var p3 = $param.getJSONArray("p3");   //获取参数p1的值，返回一个数组
    
    //your initialize code below...
    
}
    
function com$ump$productquery$MultiFactory_referlistController$evaljs(js){
    eval(js)
}
function com$ump$productquery$MultiFactory_referlistController$load_reflist(sender, args){
	var lastusedfactory = $cache.read("lastusedfactory");
	$ctx.put("lastusedfactorys",jsonToString(lastusedfactory));
	$ctx.dataBind();
	_$sys.callAction('loaddata');
}
function com$ump$productquery$MultiFactory_referlistController$scrolltofisrtselectedindex(sender,args){
	var index=$ctx.getString("fisrtselectedindex");
    $id('listviewdefine0').set("scrollto", index);
}
function com$ump$productquery$MultiFactory_referlistController$onSearch(sender, args){
	$ctx.dataCollect();
	this.load_reflist(sender,args);
}
function com$ump$productquery$MultiFactory_referlistController$onClickListRow(sender, args){
	var row = $id('listviewdefine0').get("row");
	row = stringToJSON(row);
	var pk_factory = row.pk_factory;
	if (isEmpty(pk_factory)){
		return;
	}
	var checked = row.checked;
	var json = $ctx.getJSONObject();
	var factorygrouplist =json.factorygrouplist;
	for (var i=0;i<factorygrouplist.length;i++){
		var factorylist = factorygrouplist[i].factorylist;
		if (factorylist != null && factorylist.length > 0){
			for (var j=0;j<factorylist.length;j++){
				if (factorylist[j].pk_factory == pk_factory){
					if(checked=="true"||checked==true)
						factorylist[j].checked = "false";
					else
						factorylist[j].checked = "true";
					}
			}
			factorygrouplist[i].factorylist = factorylist;
		}
	}
	json.factorygrouplist = factorygrouplist;
	$ctx.push(json)
}
function isEmpty(str){
	return (typeof(str) == 'undefined' || str == null || str =="");
}
function com$ump$productquery$MultiFactory_referlistController$returnResult(sender, args){
	var seletecdlist = [];
    var name="";
    var json = $ctx.getJSONObject();
    var factorygrouplist = json.factorygrouplist;
    for (var k = 0;k <factorygrouplist.length;k++){
    	var factorylist = factorygrouplist[k].factorylist;
    	if (factorylist != null && factorylist.length > 0){
	    	for (var i=0;i<factorylist.length;i++){
	    	var checked = factorylist[i].checked;
	    	if(typeof(checked)=='undefined'||checked==null)
				checked="false";
			if (checked=="true"||checked==true) {
				seletecdlist.push(factorylist[i]);
				if(name=="")
				  name=name+factorylist[i].pk_factory+"#"+factorylist[i].factoryname+"#"+factorylist[i].factorycode;
				else
				  name=name+","+factorylist[i].pk_factory+"#"+factorylist[i].factoryname+"#"+factorylist[i].factorycode;
			}
		}
    }
    }
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
com.ump.productquery.MultiFactory_referlistController.prototype = {
    returnResult : com$ump$productquery$MultiFactory_referlistController$returnResult,
    onClickListRow : com$ump$productquery$MultiFactory_referlistController$onClickListRow,
    onSearch : com$ump$productquery$MultiFactory_referlistController$onSearch,
    load_reflist : com$ump$productquery$MultiFactory_referlistController$load_reflist,
    initialize : com$ump$productquery$MultiFactory_referlistController$initialize,
    evaljs : com$ump$productquery$MultiFactory_referlistController$evaljs,
    scrolltofisrtselectedindex : com$ump$productquery$MultiFactory_referlistController$scrolltofisrtselectedindex
};
com.ump.productquery.MultiFactory_referlistController.registerClass('com.ump.productquery.MultiFactory_referlistController',UMP.UI.Mvc.Controller);
}catch(e){$e(e);}
