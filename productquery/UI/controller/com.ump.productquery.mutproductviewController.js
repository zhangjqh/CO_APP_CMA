Type.registerNamespace('com.ump.productquery.mutproductviewController');
com.ump.productquery.mutproductviewController = function() {

}
function com$ump$productquery$mutproductviewController$initialize(ctx){
    //your logic code below...
    //demo code : var companyEnity = ctx.entity();
    //demo code : var departmentEntity = companyEnity.field("depts");
    //demo code : var employeeEntity = departmentEntity.get("empls");
    //demo code : companyEnity.attachEvent("onchange", "name", onchange_handler1);
    //demo code : departmentEntity.attachEvent("onchange", "dname", onchange_handler2);
    //demo code : employeeEntity.attachEvent("onchange", "ename", onchange_handler3);
    //yon can attach event on the entity object...
    
}
function com$ump$productquery$mutproductviewController$UMonInit(ctx){
    //your logic code below...
    //you can get the current context by $context or the parameter[ctx]
    //demo code : $context.get("a")
    //demo code : $context.get("cust").get("ca")
    //demo code : $context.get("lines").get(0,"la")
    //demo code : $context.get("lines").get(0,"details").get(0,"da")

}
function com$ump$productquery$mutproductviewController$UMonLoad(ctx){
    //your logic code below...
    //you can get the current context by $context or the parameter[ctx]
    //demo code : $context.get("a")
    //demo code : $context.get("cust").get("ca")
    //demo code : $context.get("lines").get(0,"la")
    //demo code : $context.get("lines").get(0,"details").get(0,"da")

}
function com$ump$productquery$mutproductviewController$UMonUnload(ctx){
    //your logic code below...
    //you can get the current context by $context or the parameter[ctx]
    //demo code : $context.get("a")
    //demo code : $context.get("cust").get("ca")
    //demo code : $context.get("lines").get(0,"la")
    //demo code : $context.get("lines").get(0,"details").get(0,"da")

}
function com$ump$productquery$mutproductviewController$UMonComplete(ctx){
    //your logic code below...
    //you can get the current context by $context or the parameter[ctx]
    //demo code : $context.get("a")
    //demo code : $context.get("cust").get("ca")
    //demo code : $context.get("lines").get(0,"la")
    //demo code : $context.get("lines").get(0,"details").get(0,"da")

}
function com$ump$productquery$mutproductviewController$UMonDataBinding(ctx){
    //your logic code below...
    //you can get the current context by $context or the parameter[ctx]
    //demo code : $context.get("a")
    //demo code : $context.get("cust").get("ca")
    //demo code : $context.get("lines").get(0,"la")
    //demo code : $context.get("lines").get(0,"details").get(0,"da")

}
function com$ump$productquery$mutproductviewController$setmonth(ctx){
	//设置期间的值
	
	/*var json = ctx.unload();
	var pk_accperiodmonth = json["pk_accperiodmonth"];
	var yearmonth = json["yearmonth"];
	var pk_factory = ctx.param("pk_factory");
	var factoryname = ctx.param("factoryname");
	var orderby = ctx.param("orderby");
	
	var params = {
				  "viewid":"com.ump.productquery.MutproductqueryctxExtendController",
				  "action":"getProductListByPk_factoryAndAccepriod",
				  "startline":1,
				  "count":20,
				  "pk_factory":pk_factory,
				  "factoryname":factoryname,
				  "pk_accperiodmonth":pk_accperiodmonth,
				  "yearmonth":yearmonth,
				  "orderby":orderby};
	$service.call("UMList.getFirstPage",jsonToString(params),true);*/
}
function com$ump$productquery$mutproductviewController$loadview(ctx){
	var from = ctx.param("from");
	if ("login" == from){
		_$sys.callAction('getDefaultData');
	} else if ("graph" == from){
		/*var pk_factory = ctx.param("pk_factory");
		var factoryname = ctx.param("factoryname");
		var pk_accperiodmonth = ctx.param("pk_accperiodmonth");
		var yearmonth = ctx.param("yearmonth");
		var params={
		"viewid":"com.ump.productquery.MutproductqueryctxExtendController",
		"action":"getProductListByPk_factoryAndAccepriod",
		"autoDataBinding":"true",
		"startline":"1",
		"count":"20",
		"pk_factory":pk_factory,
		"factoryname":factoryname,
		"pk_accperiodmonth":pk_accperiodmonth,
		"yearmonth":yearmonth,
		"orderby":"0"
		}
		$service.call("UMService.callAction",jsonToString(params), true);*/
		_$sys.callAction('syncGraphData');
	}
	
}
function com$ump$productquery$mutproductviewController$seticonsrc(ctx){
	var json = ctx.unload();
	var error = json["error_message"];
	if (error != null && error != ""){
		alert(error);
		json["error_message"]="";
		ctx.load(json);
		return;
	}
	var productlistCtx = json["productlist"];
	if(productlistCtx == null || productlistCtx == "undefined"){
		return;
	}
	for (var i = 0; i < productlistCtx.length; i++) {
		if(productlistCtx[i].currentState == "concernDone"){
			productlistCtx[i].iconsrc = "concerned.png";
		}else if(productlistCtx[i].currentState == "concernCanceled"){
			productlistCtx[i].iconsrc = "notconcerned.png";
		}
	}
	json["productlist"] = productlistCtx;
	var orderby = json["orderby"];
	var orderbytype = json["orderbytype"];
	
	var visibleLoadMore=json["visibleLoadMore"];
	$controls.set("listview0","visibleLoadMore",visibleLoadMore);
	
	//将最近使用的工厂写到缓存中
	var lastusedfactory = json["lastusedfactory"];
	var value=$cache.read("lastusedfactory");
	
	if(typeof(value) != 'undefined' && value !=null && value!=""){
		var arrayjson = stringToJSON(value);
		var lastusedfactoryitems = arrayjson;
		var newjsonarray=[];
		var flag = false;//是否包含当前返回的
		if (lastusedfactoryitems != null && lastusedfactoryitems.length > 0){
			for (var i=0;i < lastusedfactoryitems.length;i++){
				var lastusedfactoryitem = lastusedfactoryitems[i].lastusedfactoryitem;
				if (lastusedfactory == lastusedfactoryitem){
					flag = true;
				}else{
					var temp = {
						lastusedfactoryitem : lastusedfactoryitem
					}
					newjsonarray.push(temp);
				}
			}
		}
		var temp = {
				lastusedfactoryitem : lastusedfactory
			}
		newjsonarray.splice(0,0,temp);//往数组头部添加最近使用的元素
		
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
	ctx.load(json); 
	return;
}
function com$ump$productquery$mutproductviewController$setOrderByPrice(){
	var orderbytype = $context.get("orderbytype");
	if ("asc" == orderbytype){
		_$sys.callAction('setordertype_down');
	} else if ("desc" == orderbytype){
		_$sys.callAction('setordertype_up');
	}
	_$sys.callAction('setpriceorder');
	_$sys.callAction('getProductListFirstPage');
}
function com$ump$productquery$mutproductviewController$setOrderBySeq(){
	var orderbytype = $context.get("orderbytype");
	if ("asc" == orderbytype){
		_$sys.callAction('setordertype_down');
	} else if ("desc" == orderbytype){
		_$sys.callAction('setordertype_up');
	}
	_$sys.callAction('setseqorder');
	_$sys.callAction('getProductListFirstPage');
}
function com$ump$productquery$mutproductviewController$setOrderByCode(){
	var orderbytype = $context.get("orderbytype");
	if ("asc" == orderbytype){
		_$sys.callAction('setordertype_down');
	} else if ("desc" == orderbytype){
		_$sys.callAction('setordertype_up');
	}
	_$sys.callAction('setcodeorder');
	_$sys.callAction('getProductListFirstPage');
}

function com$ump$productquery$mutproductviewController$concern(ctx){
	var productlist = ctx.param("productlist");
	var params = {
		viewid : "com.ump.productquery.MutproductqueryctxExtendController",
		action : "doOrCancelConcernProduct",
		autoDataBinding : "true",
		contextmapping : "productlist[#{cursor.cursorproductlistalias.index}]",
		productlist : productlist
	}
	$service.call('UMService.callAction',jsonToString(params),false);
}
function com$ump$productquery$mutproductviewController$updatebyuserid(ctx){
	//根据全局变量中获取的用户ID初始化Home主页界面。
	var uid = $ctx.getApp("userid");
	
	//如果在系统设置中退出了登录需要跳转到登陆页面
	var from = ctx.param("from");
	if(!uid || "" == uid || "exit"==from){
		var open = {
			isKeep : "false",
			viewid : "com.ump.productquery.Productquery_login"
		};
	
		var openJsonString = $jsonToString(open);
			
		UM_NativeCall.callService("UMView.open", openJsonString);		
	}
}
function com$ump$productquery$mutproductviewController$opensortdropdownlist(ctx){
	var dropdownlist =[];
	var orderbypriceup={
		action:"orderbypriceup",
		image:"asc.png",
		name:"单位成本升序"
	};
	dropdownlist.push(orderbypriceup);
	var orderbypricedown={
		action:"orderbypricedown",
		image:"desc.png",
		name:"单位成本降序"
	};
	dropdownlist.push(orderbypricedown);
	var orderbysequp={
		action:"orderbysequp",
		image:"asc.png",
		name:"变动比率升序"
	};
	dropdownlist.push(orderbysequp);
	var orderbyseqdown={
		action:"orderbyseqdown",
		image:"desc.png",
		name:"变动比率降序"
	};
	dropdownlist.push(orderbyseqdown);
	var orderbycodeup={
		action:"orderbycodeup",
		image:"asc.png",
		name:"产品编码升序"
	};
	dropdownlist.push(orderbycodeup);
	var orderbycodedown={
		action:"orderbycodedown",
		image:"desc.png",
		name:"产品编码降序"
	};
	dropdownlist.push(orderbycodedown);

	var params={
		controlid : "imagebutton2",
		dropDownListWidth : 170,
		dropItemsArray : dropdownlist,
		"background-image" : "dropdownlist.png"
	};
	var openJsonString = $jsonToString(params);
	UM_NativeCall.callService("UMMenu.openDropDownList", openJsonString);	
}
function com$ump$productquery$mutproductviewController$orderbypriceup(ctx){
	_$sys.callAction('setordertype_up');
	_$sys.callAction('setpriceorder');
	var sortbuttonui = $document.getElementById("imagebutton2");
	sortbuttonui.setAttribute("value","成本");
	sortbuttonui.setAttribute("color","#e50011");
	sortbuttonui.setAttribute("font-pressed-color","#f2adb2");
	//$controls.set("imagebutton2","color","#e50011");
	sortbuttonui.setAttribute("icon-background-image","asc.png");
	sortbuttonui.setAttribute("icon-pressed-image","asc.png");
	_$sys.callAction('getProductListFirstPage');
}
function com$ump$productquery$mutproductviewController$orderbypricedown(ctx){
	_$sys.callAction('setordertype_down');
	_$sys.callAction('setpriceorder');
	var sortbuttonui = $document.getElementById("imagebutton2");
	sortbuttonui.setAttribute("value","成本");
	sortbuttonui.setAttribute("color","#64c101");
	sortbuttonui.setAttribute("font-pressed-color","#a2e1b7");
	//$controls.set("imagebutton2","color","#C7F8C4");
	sortbuttonui.setAttribute("icon-background-image","desc.png");
	sortbuttonui.setAttribute("icon-pressed-image","desc.png");
	_$sys.callAction('getProductListFirstPage');
}
function com$ump$productquery$mutproductviewController$orderbysequp(ctx){
	_$sys.callAction('setordertype_up');
	_$sys.callAction('setseqorder');
	var sortbuttonui = $document.getElementById("imagebutton2");
	sortbuttonui.setAttribute("value","比率");
	sortbuttonui.setAttribute("color","#e50011");
	sortbuttonui.setAttribute("font-pressed-color","#f2adb2");
	//$controls.set("imagebutton2","color","#e50011");
	sortbuttonui.setAttribute("icon-background-image","asc.png");
	sortbuttonui.setAttribute("icon-pressed-image","asc.png");
	_$sys.callAction('getProductListFirstPage');
}
function com$ump$productquery$mutproductviewController$orderbyseqdown(ctx){
	_$sys.callAction('setordertype_down');
	_$sys.callAction('setseqorder');
	var sortbuttonui = $document.getElementById("imagebutton2");
	sortbuttonui.setAttribute("value","比率");
	sortbuttonui.setAttribute("color","#64c101");
	sortbuttonui.setAttribute("font-pressed-color","#a2e1b7");
	//$controls.set("imagebutton2","color","#C7F8C4");
	sortbuttonui.setAttribute("icon-background-image","desc.png");
	sortbuttonui.setAttribute("icon-pressed-image","desc.png");
	_$sys.callAction('getProductListFirstPage');
	
}
function com$ump$productquery$mutproductviewController$orderbycodeup(ctx){
	_$sys.callAction('setordertype_up');
	_$sys.callAction('setcodeorder');
	var sortbuttonui = $document.getElementById("imagebutton2");
	sortbuttonui.setAttribute("value","编码");
	sortbuttonui.setAttribute("color","#e50011");
	sortbuttonui.setAttribute("font-pressed-color","#f2adb2");
	//$controls.set("imagebutton2","color","#e50011");
	sortbuttonui.setAttribute("icon-background-image","asc.png");
	sortbuttonui.setAttribute("icon-pressed-image","asc.png");
	_$sys.callAction('getProductListFirstPage');
}
function com$ump$productquery$mutproductviewController$orderbycodedown(ctx){
	_$sys.callAction('setordertype_down');
	_$sys.callAction('setcodeorder');
	var sortbuttonui = $document.getElementById("imagebutton2");
	sortbuttonui.setAttribute("value","编码");
	sortbuttonui.setAttribute("color","#64c101");
	sortbuttonui.setAttribute("font-pressed-color","#a2e1b7");
	//$controls.set("imagebutton2","color","#C7F8C4");
	sortbuttonui.setAttribute("icon-background-image","desc.png");
	sortbuttonui.setAttribute("icon-pressed-image","desc.png");
	_$sys.callAction('getProductListFirstPage');
	
}
function com$ump$productquery$mutproductviewController$openDetailCallBack(ctx){
	//明细页返回主页，关注状态进行同步
	var selectindex = ctx.param("selectindex");
	var currentstate = ctx.param("currentstate");
	var pk_material = ctx.param("pk_material");
	var json = ctx.unload();
	var productlistctx=json["productlist"];
	if(productlistctx==null || typeof(productlistctx)=='undefined'){
		return;
	}
	for (var i=0;i<productlistctx.length;i++){
		var pk_material_t=productlistctx[i].pk_material;
		if(pk_material_t==pk_material){
			productlistctx[i].currentState=currentstate;
			if(currentstate=="concernDone"){
				productlistctx[i].iconsrc="concerned.png";
			}else if (currentstate=="concernCanceled"){
				productlistctx[i].iconsrc="notconcerned.png";
			}
			break;
		}
	}
	json["productlist"]=productlistctx;
	ctx.load(json);
	
}
function com$ump$productquery$mutproductviewController$openAccperiodPicker(ctx){
	var json = ctx.unload();
	var currentyearmonth = ctx.param("currentyearmonth");
	var strs = currentyearmonth.split("-");
	var currentyear=parseInt(strs[0],10);
	var currentmonth=parseInt(strs[1],10);
	
	var yearlist = json["yearlist"].yearlist;
	var years=[];
	if (yearlist != null && yearlist.length > 0){
		for(var i=0;i<yearlist.length;i++){
			var temp="";
			if (currentyear == yearlist[i]){
				temp={
					value : yearlist[i] + "年",
					content : yearlist[i] + "年",
					selected : "true"
				}
			}else{
				temp={
					value : yearlist[i] + "年",
					content : yearlist[i] + "年"
				}
			}
			years.push(temp);
		}
	}
	var months=[];
	for (var i=1;i<=12;i++){
		var temp="";
		if (currentmonth == i){
			temp={
				value : i + "月",
				content : i + "月",
				selected : "true"
			}
		}else{
			temp={
				value : i + "月",
				content : i + "月"
			}
		}
		months.push(temp);
	}
	
	var params = {
		"okaction" : "pressok",
		"title" : "会计期间",
		"pickercount" : "2",
		"datasource" : {
			picker : [{
				select : years
			}, {
				select : months
			}]
		},
		"picker1binder" : "year",
		"picker2binder" : "month",
		"okbuttontitle" : "确定",
		"cancelbuttontitle" : "取消"
	};
	
	$service.call("UMView.openPicker", jsonToString(params), false);
	//$view.openPicker(params);
}
function com$ump$productquery$mutproductviewController$pressok(ctx){
	var year = $ctx.get("year");
	var month = $ctx.get("month");
	year = year.substring(0,year.length-1);
	month = month.substring(0,month.length-1);
	if (month.length == 1){
		month = "0"+month;
	}
	var yearmonth = year + "-" + month;
	var pk_factory = $ctx.get("pk_factory");
	var factoryname = $ctx.get("factoryname");
	var pk_accperiodmonth = $ctx.get("pk_accperiodmonth");
	var orderby = $ctx.get("orderby");
	var displaytype = $ctx.get("displaytype");
	var orderbytype = $ctx.get("orderbytype");
	var params = {
		"startline" : "1",
		"count" : "20",
		"viewid" : "com.ump.productquery.MutproductqueryctxExtendController",
		"action" : "getProductListByPk_factoryAndAccepriod",//方法名
		"callback" : "setIcon",//请求回来后执行的ActionID
		"pk_factory" : pk_factory,
		"factoryname" : factoryname,
		"pk_accperiodmonth" : pk_accperiodmonth,
		"orderby" : orderby,
		"displaytype" : displaytype,
		"orderbytype" : orderbytype,
		"yearmonth" : yearmonth
	}
	$service.call("UMList.getFirstPage", jsonToString(params), false);
}
com.ump.productquery.mutproductviewController.prototype = {
    initialize : com$ump$productquery$mutproductviewController$initialize,
    UMonInit : com$ump$productquery$mutproductviewController$UMonInit,
    UMonLoad : com$ump$productquery$mutproductviewController$UMonLoad,
    UMonUnload : com$ump$productquery$mutproductviewController$UMonUnload,
    UMonComplete : com$ump$productquery$mutproductviewController$UMonComplete,
    UMonDataBinding : com$ump$productquery$mutproductviewController$UMonDataBinding,
    setmonth : com$ump$productquery$mutproductviewController$setmonth,
    loadview : com$ump$productquery$mutproductviewController$loadview,
    seticonsrc : com$ump$productquery$mutproductviewController$seticonsrc,
    setOrderByPrice : com$ump$productquery$mutproductviewController$setOrderByPrice,
    setOrderBySeq : com$ump$productquery$mutproductviewController$setOrderBySeq,
    setOrderByCode : com$ump$productquery$mutproductviewController$setOrderByCode,
    concern : com$ump$productquery$mutproductviewController$concern,
    updatebyuserid : com$ump$productquery$mutproductviewController$updatebyuserid,
    opensortdropdownlist : com$ump$productquery$mutproductviewController$opensortdropdownlist,
    orderbypriceup : com$ump$productquery$mutproductviewController$orderbypriceup,
    orderbypricedown : com$ump$productquery$mutproductviewController$orderbypricedown,
    orderbysequp : com$ump$productquery$mutproductviewController$orderbysequp,
    orderbyseqdown : com$ump$productquery$mutproductviewController$orderbyseqdown,
    orderbycodeup : com$ump$productquery$mutproductviewController$orderbycodeup,
    orderbycodedown : com$ump$productquery$mutproductviewController$orderbycodedown,
    openDetailCallBack : com$ump$productquery$mutproductviewController$openDetailCallBack,
    openAccperiodPicker : com$ump$productquery$mutproductviewController$openAccperiodPicker,
    pressok : com$ump$productquery$mutproductviewController$pressok
    
};
com.ump.productquery.mutproductviewController.registerClass('com.ump.productquery.mutproductviewController');
