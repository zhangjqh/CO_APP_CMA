//JavaScript Framework 2.0 Code
try{
Type.registerNamespace('com.ump.productquery.MultiAccperiod_referlistController');
com.ump.productquery.MultiAccperiod_referlistController = function() {
    com.ump.productquery.MultiAccperiod_referlistController.initializeBase(this);
    this.initialize();
}
function com$ump$productquery$MultiAccperiod_referlistController$initialize(){
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
    
function com$ump$productquery$MultiAccperiod_referlistController$evaljs(js){
    eval(js)
}
function com$ump$productquery$MultiAccperiod_referlistController$onClickListRow(sender, args){
	var row = $id('listviewdefine0').get("row");
	row = stringToJSON(row);
	var pk_accperiodmonth = row.pk_accperiodmonth;
	if (isEmpty(pk_accperiodmonth)){
		return;
	}
	var checked = row.checked;
	var json = $ctx.getJSONObject();
	var yearlist =json.yearlist;
	for (var i=0;i<yearlist.length;i++){
		var yearmonthlist = yearlist[i].yearmonthlist;
		if (yearmonthlist != null && yearmonthlist.length > 0){
			for (var j=0;j<yearmonthlist.length;j++){
				if (yearmonthlist[j].pk_accperiodmonth == pk_accperiodmonth){
					if(checked=="true"||checked==true)
						yearmonthlist[j].checked = "false";
					else
						yearmonthlist[j].checked = "true";
					}
			}
			yearlist[i].yearmonthlist = yearmonthlist;
		}
		
	}
	json.yearlist = yearlist;
	$ctx.push(json);
}
function com$ump$productquery$MultiAccperiod_referlistController$load_reflist(sender, args){
	_$sys.callAction('load');
}

function com$ump$productquery$MultiAccperiod_referlistController$returnResult(sender, args){
	 var seletecdlist = [];
	var returnsel=[];
	var name="";
	var json = $ctx.getJSONObject();
	var yearlist =json.yearlist;
	var relist="[";
	for(var i=0;i < yearlist.length;i++){
		var yearmonthlist = yearlist[i].yearmonthlist;
		for(var j=0;j < yearmonthlist.length;j++){
			var checked = yearmonthlist[j].checked;
			if(typeof(checked)=='undefined'||checked==null)
				checked="false";
			if (checked=="true"||checked==true) {
				seletecdlist.push(yearmonthlist[j]);
				if(name=="")
				  name=name+yearmonthlist[j].yearmonth;
				else
				  name=name+","+yearmonthlist[j].yearmonth;
				var temp={
						code:yearmonthlist[j].pk_accperiodmonth,
						name:yearmonthlist[j].yearmonth
				}
				returnsel.push(temp);
				relist=relist+"{'code':'"+yearmonthlist[j].pk_accperiodmonth+"';'name':'"+yearmonthlist[j].yearmonth+"'},"
			}
		}
	}
	
	if(relist!="]")
	{
	   relist=relist.substring(0,relist.length-1);
	}
	relist=relist+"]";
	var json=returnsel;
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
function com$ump$productquery$MultiAccperiod_referlistController$scrolltofisrtselectedindex(sender,args){
	var fisrtselectedindex = $ctx.getString("firstselectedindex");
	$id("listview0").set("scrollto",fisrtselectedindex);
}
function isEmpty(str){
	return (typeof(str) == 'undefined' || str == null || str =="");
}
com.ump.productquery.MultiAccperiod_referlistController.prototype = {
    returnResult : com$ump$productquery$MultiAccperiod_referlistController$returnResult,
    load_reflist : com$ump$productquery$MultiAccperiod_referlistController$load_reflist,
    onClickListRow : com$ump$productquery$MultiAccperiod_referlistController$onClickListRow,
    initialize : com$ump$productquery$MultiAccperiod_referlistController$initialize,
    evaljs : com$ump$productquery$MultiAccperiod_referlistController$evaljs,
    scrolltofisrtselectedindex : com$ump$productquery$MultiAccperiod_referlistController$scrolltofisrtselectedindex
};
com.ump.productquery.MultiAccperiod_referlistController.registerClass('com.ump.productquery.MultiAccperiod_referlistController',UMP.UI.Mvc.Controller);
}catch(e){$e(e);}
