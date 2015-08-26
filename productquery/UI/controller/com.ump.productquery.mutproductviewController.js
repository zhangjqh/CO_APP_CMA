//JavaScript Framework 2.0 Code
try{
Type.registerNamespace('com.ump.productquery.mutproductviewController');
com.ump.productquery.mutproductviewController = function() {
    com.ump.productquery.mutproductviewController.initializeBase(this);
    this.initialize();
}
function com$ump$productquery$mutproductviewController$initialize(){
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

function isEmpty(str){
	return (typeof(str) == 'undefined' || str == null || str =="");
}
    
function com$ump$productquery$mutproductviewController$evaljs(js){
    eval(js)
}
function com$ump$productquery$mutproductviewController$setIcon(sender,args){
	var json = $ctx.getJSONObject();
	var error = json["error_message"];
	if (!isEmpty(error)){
		$toast(error);
		json["error_message"]="";
		$ctx.push(json);
		$js.hideLoadingBar();
		return;
	}
	var productlistCtx = json["productlist"];
	if(isEmpty(productlistCtx)){
		$js.hideLoadingBar();
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
	$id('listview0').set("visibleLoadMore", visibleLoadMore);
	//将最近使用的工厂写到缓存中
	var lastusedfactory = json["lastusedfactory"];
	var value=$cache.read("lastusedfactory");
	
	if(!isEmpty(value)){
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
	$ctx.push(json);
	$js.hideLoadingBar();
}
function com$ump$productquery$mutproductviewController$onload(sender, args){
	$js.hideLoadingBar();
	$js.showLoadingBar();
	_$sys.callAction('loadViewPage');
}
function com$ump$productquery$mutproductviewController$concern(sender,args){
	var row = $id('listview0').get("row");
	row = stringToJSON(row);
	var json = $ctx.getJSONObject();
	var productlist = json.productlist;
	var param;
	for (var i = 0;i < productlist.length;i++){
		if (row.pk_material == productlist[i].pk_material){
			param = productlist[i];
			break;
		}
	}
	var params = {
		viewid : "com.ump.productquery.MutproductqueryctxExtendController",
		action : "doOrCancelConcernProduct",
		autoDataBinding : "true",
		contextmapping : "productlist[#{cursor.cursorproductlistalias.index}]",
		productlist : param,
		callback : "this.concernCallback()",
		error : "this.concernCallback()"
	}
	$js.showLoadingBar();
	$service.call('UMService.callAction',jsonToString(params),false);
}
function com$ump$productquery$mutproductviewController$concernCallback(sender,args){
	$js.hideLoadingBar();
	var deviceinfo = $device.getDeviceInfo();
    deviceinfo = $stringToJSON(deviceinfo);
    var os = deviceinfo.os;
    if (os == "ios"){
       //ios有bug
       //重新查一遍
       _$sys.callAction('getProductListFirstPage');
    }
}
function com$ump$productquery$mutproductviewController$openmenu(sender, args){
	var dropdownlist =[];
	var orderbypriceup={
		action:"this.orderbypriceup()",
		//image:"asc.png",
		name:"单位成本升序"
	};
	dropdownlist.push(orderbypriceup);
	var orderbypricedown={
		action:"this.orderbypricedown()",
		//image:"desc.png",
		name:"单位成本降序"
	};
	dropdownlist.push(orderbypricedown);
	var orderbysequp={
		action:"this.orderbysequp()",
		//image:"asc.png",
		name:"变动比率升序"
	};
	dropdownlist.push(orderbysequp);
	var orderbyseqdown={
		action:"this.orderbyseqdown()",
		//image:"desc.png",
		name:"变动比率降序"
	};
	dropdownlist.push(orderbyseqdown);
	var orderbycodeup={
		action:"this.orderbycodeup()",
		//image:"asc.png",
		name:"产品编码升序"
	};
	dropdownlist.push(orderbycodeup);
	var orderbycodedown={
		action:"this.orderbycodedown()",
		//image:"desc.png",
		name:"产品编码降序"
	};
	dropdownlist.push(orderbycodedown);

	var params={
		controlid : "imagebutton2",
		dropDownListWidth : 170,
		dropItemsArray : dropdownlist
		//"background-image" : "dropdownlist.png"
	};
	var openJsonString = $jsonToString(params);
	UM_NativeCall.callService("UMMenu.openDropDownList", openJsonString);
}
function com$ump$productquery$mutproductviewController$orderbypriceup(sender,args){
	var json = $ctx.getJSONObject();
	json.orderby = 0;
	json.orderbytype = "asc";
	$ctx.push(json);
	var sortbuttonui = $document.getElementById("imagebutton2");
	sortbuttonui.setAttribute("value","成本");
	sortbuttonui.setAttribute("color","#e50011");
	sortbuttonui.setAttribute("font-pressed-color","#f2adb2");
	sortbuttonui.setAttribute("icon-background-image","asc.png");
	sortbuttonui.setAttribute("icon-pressed-image","asc.png");
	$js.showLoadingBar();
	_$sys.callAction('getProductListFirstPage');
}
function com$ump$productquery$mutproductviewController$orderbypricedown(sender,args){
	var json = $ctx.getJSONObject();
	json.orderby = 0;
	json.orderbytype = "desc";
	$ctx.push(json);
	var sortbuttonui = $document.getElementById("imagebutton2");
	sortbuttonui.setAttribute("value","成本");
	sortbuttonui.setAttribute("color","#64c101");
	sortbuttonui.setAttribute("font-pressed-color","#a2e1b7");
	sortbuttonui.setAttribute("icon-background-image","desc.png");
	sortbuttonui.setAttribute("icon-pressed-image","desc.png");
	$js.showLoadingBar();
	_$sys.callAction('getProductListFirstPage');
}
function com$ump$productquery$mutproductviewController$orderbysequp(sender,args){
	var json = $ctx.getJSONObject();
	json.orderby = 1;
	json.orderbytype = "asc";
	$ctx.push(json);
	var sortbuttonui = $document.getElementById("imagebutton2");
	sortbuttonui.setAttribute("value","比率");
	sortbuttonui.setAttribute("color","#e50011");
	sortbuttonui.setAttribute("font-pressed-color","#f2adb2");
	sortbuttonui.setAttribute("icon-background-image","asc.png");
	sortbuttonui.setAttribute("icon-pressed-image","asc.png");
	$js.showLoadingBar();
	_$sys.callAction('getProductListFirstPage');
}
function com$ump$productquery$mutproductviewController$orderbyseqdown(sender,args){
	var json = $ctx.getJSONObject();
	json.orderby = 1;
	json.orderbytype = "desc";
	$ctx.push(json);
	var sortbuttonui = $document.getElementById("imagebutton2");
	sortbuttonui.setAttribute("value","比率");
	sortbuttonui.setAttribute("color","#64c101");
	sortbuttonui.setAttribute("font-pressed-color","#a2e1b7");
	sortbuttonui.setAttribute("icon-background-image","desc.png");
	sortbuttonui.setAttribute("icon-pressed-image","desc.png");
	$js.showLoadingBar();
	_$sys.callAction('getProductListFirstPage');
}
function com$ump$productquery$mutproductviewController$orderbycodeup(sender,args){
	var json = $ctx.getJSONObject();
	json.orderby = 2;
	json.orderbytype = "asc";
	$ctx.push(json);
	var sortbuttonui = $document.getElementById("imagebutton2");
	sortbuttonui.setAttribute("value","编码");
	sortbuttonui.setAttribute("color","#e50011");
	sortbuttonui.setAttribute("font-pressed-color","#f2adb2");
	sortbuttonui.setAttribute("icon-background-image","asc.png");
	sortbuttonui.setAttribute("icon-pressed-image","asc.png");
	$js.showLoadingBar();
	_$sys.callAction('getProductListFirstPage');
}
function com$ump$productquery$mutproductviewController$orderbycodedown(sender,args){
	var json = $ctx.getJSONObject();
	json.orderby = 2;
	json.orderbytype = "desc";
	$ctx.push(json);
	var sortbuttonui = $document.getElementById("imagebutton2");
	sortbuttonui.setAttribute("value","编码");
	sortbuttonui.setAttribute("color","#64c101");
	sortbuttonui.setAttribute("font-pressed-color","#a2e1b7");
	sortbuttonui.setAttribute("icon-background-image","desc.png");
	sortbuttonui.setAttribute("icon-pressed-image","desc.png");
	$js.showLoadingBar();
	_$sys.callAction('getProductListFirstPage');
}
function com$ump$productquery$mutproductviewController$loadmyconcern(sender, args){
	var json = $ctx.getJSONObject();
	json.displaytype = 0;
	$ctx.push(json);
	$js.showLoadingBar();
	_$sys.callAction('getProductListFirstPage');
}
function com$ump$productquery$mutproductviewController$loadall(sender, args){
	var json = $ctx.getJSONObject();
	json.displaytype = 1;
	$ctx.push(json);
	$js.showLoadingBar();
	_$sys.callAction('getProductListFirstPage');
}
function com$ump$productquery$mutproductviewController$openDetailCallBack(sender,args){
	//明细页返回主页，关注状态进行同步
	var selectindex = $param.getString("selectindex");
	var currentstate = $param.getString("currentstate");
	var pk_material = $param.getString("pk_material");
	var json = $ctx.getJSONObject();
	var productlistctx=json["productlist"];
	if(isEmpty(productlistctx)){
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
	$ctx.push(json);
}
function com$ump$productquery$mutproductviewController$updatebyuserid(sender,args){
	//根据全局变量中获取的用户ID初始化Home主页界面。
	var uid = $ctx.getApp("userid");
	//如果在系统设置中退出了登录需要跳转到登陆页面
	var from = $param.getString("exitfrom");
	if(!uid || "" == uid || "exit"==from){
		var open = {
			isKeep : "false",
			viewid : "com.ump.productquery.Productquery_login",
			frompage : "settingpage"
		};
	
		var openJsonString = $jsonToString(open);
			
		UM_NativeCall.callService("UMView.open", openJsonString);		
	}
}

function com$ump$productquery$mutproductviewController$onDateChange(sender, args){
	var date = args.newvalue;
	date = date.substring(0,7);
	$ctx.put("yearmonth",date);
	$ctx.dataBind();
	$js.showLoadingBar();
	_$sys.callAction('getProductListFirstPage')
}
com.ump.productquery.mutproductviewController.prototype = {
    onDateChange : com$ump$productquery$mutproductviewController$onDateChange,
    loadall : com$ump$productquery$mutproductviewController$loadall,
    loadmyconcern : com$ump$productquery$mutproductviewController$loadmyconcern,
    openmenu : com$ump$productquery$mutproductviewController$openmenu,
    onload : com$ump$productquery$mutproductviewController$onload,
    initialize : com$ump$productquery$mutproductviewController$initialize,
    evaljs : com$ump$productquery$mutproductviewController$evaljs,
    setIcon : com$ump$productquery$mutproductviewController$setIcon,
    concern : com$ump$productquery$mutproductviewController$concern,
    orderbypriceup : com$ump$productquery$mutproductviewController$orderbypriceup,
    orderbypricedown : com$ump$productquery$mutproductviewController$orderbypricedown,
    orderbysequp : com$ump$productquery$mutproductviewController$orderbysequp,
    orderbyseqdown : com$ump$productquery$mutproductviewController$orderbyseqdown,
    orderbycodeup : com$ump$productquery$mutproductviewController$orderbycodeup,
    orderbycodedown : com$ump$productquery$mutproductviewController$orderbycodedown,
    openDetailCallBack : com$ump$productquery$mutproductviewController$openDetailCallBack,
    updatebyuserid : com$ump$productquery$mutproductviewController$updatebyuserid,
    concernCallback : com$ump$productquery$mutproductviewController$concernCallback
};
com.ump.productquery.mutproductviewController.registerClass('com.ump.productquery.mutproductviewController',UMP.UI.Mvc.Controller);
}catch(e){$e(e);}
