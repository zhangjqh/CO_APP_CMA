Type.registerNamespace('com.ump.productquery.cm_loginController');
com.ump.productquery.cm_loginController = function() {

}
function com$ump$productquery$cm_loginController$initialize(ctx){
    //your logic code below...
    //demo code : var companyEnity = ctx.entity();
    //demo code : var departmentEntity = companyEnity.field("depts");
    //demo code : var employeeEntity = departmentEntity.get("empls");
    //demo code : companyEnity.attachEvent("onchange", "name", onchange_handler1);
    //demo code : departmentEntity.attachEvent("onchange", "dname", onchange_handler2);
    //demo code : employeeEntity.attachEvent("onchange", "ename", onchange_handler3);
    //yon can attach event on the entity object...
    
}

function com$ump$productquery$cm_loginController$isSaveConfig(ctx) {
	//your logic code below...
	//you can get the current context by $context or the parameter[ctx]
	//demo code : $context.get("a")
	//demo code : $context.get("cust").get("ca")
	//demo code : $context.get("lines").get(0,"la")
	//demo code : $context.get("lines").get(0,"details").get(0,"da")
	var autologin = ctx.get("autologin");
	// var autologin = $controls.get("switch0","value");
	//alert(autologin);
	if (autologin == true || autologin == "true") {
		
		_$sys.callAction('saveConfig')

		//如果没有设置自动登陆,则跳转到登陆界面
	} else {
		_$sys.callAction('saveConfig')
		_$sys.callAction("loginAction")

	}

}

function com$ump$productquery$cm_loginController$loginnc(ctx){
	var userName=ctx.get("userName");
	var autologin=ctx.get("autologin")
	var passWord=ctx.get("passWord")
	var port=ctx.get("port");
	if(!port)
	{
	   alert("请设置连接");	
	   $service.call("UMView.open", "{'viewid':'com.ump.productquery.Cm_loginconset','isKeep':'true','callback':'setishttps'}", true);
	   return;
	}
	else
	{
		if(!userName || userName==null || ""== userName){
			alert("用户名不能为空");
			return;
		}
		if(!passWord || passWord==null || ""== passWord){
			alert("密码不能为空");
			return;
		}
		//$service.call("UMService.login", "{'callback':'saveConfig';'isDataCollect':'true','method':'UMService.login','type':'nc','user':'#{userName}','contextmapping':'none','pass':'#{passWord}'}", true);
		//$service.call("UMService.login", "{'callback':'openMainView','isDataCollect':'true','method':'UMService.login','type':'nc','user':'#{userName}','contextmapping':'none','pass':'#{passWord}'}", true);
		_$sys.callAction('loginAction');
	}
		
}
function com$ump$productquery$cm_loginController$loginjs(ctx){
	var userName=ctx.get("userName");
	var autologin=ctx.get("autologin")
	var passWord=ctx.get("passWord")
	if(autologin==true||autologin=="true")
	{
		//在此处调用登录Action 例如:$service.call("UMService.login",参数json对象,true) //<action id="loginAction" callback="openMainview" isDataCollect="true" method="UMService.login" type="nc" user="#{userName}" pass="#{passWord}"/>
		//登录成功后导航的页面 例如:$service.call("UMView.open", "{'viewid':'com.yonyou.uap.ump.example.Index','isKeep':'false'}", true);
		//$service.call("UMService.login", "{'callback':'saveConfig';'isDataCollect':'true','method':'UMService.login','type':'nc','user':'#{userName}','contextmapping':'none','pass':'#{passWord}'}", true);
		var logout = ctx.param("fromlogout");
		if (typeof(logout) == 'undefined' || logout == null || logout ==""){
			_$sys.callAction('saveConfig');
		}
	}
	else
	{
		//不是自动登录不做处理
	}

}
com.ump.productquery.cm_loginController.prototype = {
    initialize : com$ump$productquery$cm_loginController$initialize,
    loginnc : com$ump$productquery$cm_loginController$loginnc,
    loginjs : com$ump$productquery$cm_loginController$loginjs
};
com.ump.productquery.cm_loginController.registerClass('com.ump.productquery.cm_loginController');
