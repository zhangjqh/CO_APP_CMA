Type.registerNamespace('com.ump.productquery.cm_loginControllerBase');
com.ump.productquery.cm_loginControllerBase = function() {
    //Step 1：inherit the base class
    com.ump.productquery.cm_loginControllerBase.initializeBase(this);

    //Auto generate action map...
    this._actionMap = {
        saveConfig : [this.saveConfig],
        connectSetting : [this.connectSetting],
        setishttps : [this.setishttps],
        loginAction : [this.loginAction],
        openHTTPS : [this.openHTTPS],
        loginnc : [this.loginnc],
        openMainview : [this.openMainview],
        loadconfig : [this.loadconfig],
        loginjs : [this.loginjs]
    };

    //user controller instance
    if(com.ump.productquery.cm_loginController){
        this._userController = new com.ump.productquery.cm_loginController();
    }else{
        alert("please check the js file[com.ump.productquery.cm_loginController.js], it probably has some syntax wrong.");
        //return;
    }

    //this._entity is the context define
    if(typeof com.ump.productquery !='undefined' && typeof com.ump.productquery.USERSEntity != 'undefined'){
        this._entity = new com.ump.productquery.USERSEntity('context');
        $sys.version(2.0)
    }else{
        this._entity = null;
        $sys.version(1.0)
    }
    //this._context is the context data object
    if(typeof com.ump.productquery !='undefined' && typeof com.ump.productquery.USERS != 'undefined'){
        this._context = new com.ump.productquery.USERS(this._entity.id(),this._entity,null);
        $sys.version(2.0);
    }else{
        this._context = null;
        $sys.version(1.0);
    }
}
function com$ump$productquery$cm_loginControllerBase$saveConfig(json){
    try{
        _$sys.callAction('saveConfig');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_loginControllerBase$connectSetting(json){
    try{
        _$sys.callAction('connectSetting');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_loginControllerBase$setishttps(json){
    try{
        _$sys.callAction('setishttps');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_loginControllerBase$loginAction(json){
    try{
        _$sys.callAction('loginAction');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_loginControllerBase$openHTTPS(json){
    try{
        _$sys.callAction('openHTTPS');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_loginControllerBase$loginnc(json){
    try{
    	//when every action begin,  json-->$context
    	this._context = _$um$CRUD$load(this._context, json, this._entity);
    	if(this._context){
    	    $context = this._context;//
    	}else{
    	    $context = json;//compatible with the old code
    	}
    	    
        if(this._userController.initialize)
            this._userController.initialize();
        this._userController.loginnc($context);
    	
    	//when every action end,  $context-->json
    	if(this._context == null){//compatible with the old code
    	    return $context;
    	}
    	var newjson = _$um$CRUD$Context2JSON($context);
    	return newjson;
    }catch(e){
        if(e.stack){
            alert(e.stack);
        }else{
            alert(e.name + ":" + e.message);
        }
    }
    return json;
}
function com$ump$productquery$cm_loginControllerBase$openMainview(json){
    try{
        _$sys.callAction('openMainview');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_loginControllerBase$loadconfig(json){
    try{
        _$sys.callAction('loadconfig');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_loginControllerBase$loginjs(json){
    try{
    	//when every action begin,  json-->$context
    	this._context = _$um$CRUD$load(this._context, json, this._entity);
    	if(this._context){
    	    $context = this._context;//
    	}else{
    	    $context = json;//compatible with the old code
    	}
    	    
        if(this._userController.initialize)
            this._userController.initialize();
        this._userController.loginjs($context);
    	
    	//when every action end,  $context-->json
    	if(this._context == null){//compatible with the old code
    	    return $context;
    	}
    	var newjson = _$um$CRUD$Context2JSON($context);
    	return newjson;
    }catch(e){
        if(e.stack){
            alert(e.stack);
        }else{
            alert(e.name + ":" + e.message);
        }
    }
    return json;
}
com.ump.productquery.cm_loginControllerBase.prototype = {
    saveConfig : com$ump$productquery$cm_loginControllerBase$saveConfig,
    connectSetting : com$ump$productquery$cm_loginControllerBase$connectSetting,
    setishttps : com$ump$productquery$cm_loginControllerBase$setishttps,
    loginAction : com$ump$productquery$cm_loginControllerBase$loginAction,
    openHTTPS : com$ump$productquery$cm_loginControllerBase$openHTTPS,
    loginnc : com$ump$productquery$cm_loginControllerBase$loginnc,
    openMainview : com$ump$productquery$cm_loginControllerBase$openMainview,
    loadconfig : com$ump$productquery$cm_loginControllerBase$loadconfig,
    loginjs : com$ump$productquery$cm_loginControllerBase$loginjs
};
com.ump.productquery.cm_loginControllerBase.registerClass('com.ump.productquery.cm_loginControllerBase',UMP.UI.Mvc.Controller);
