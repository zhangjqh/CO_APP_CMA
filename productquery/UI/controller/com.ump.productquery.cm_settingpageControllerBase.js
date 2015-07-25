Type.registerNamespace('com.ump.productquery.cm_settingpageControllerBase');
com.ump.productquery.cm_settingpageControllerBase = function() {
    //Step 1：inherit the base class
    com.ump.productquery.cm_settingpageControllerBase.initializeBase(this);

    //Auto generate action map...
    this._actionMap = {
        ExitOk : [this.ExitOk],
        openExitDialog : [this.openExitDialog],
        back : [this.back],
        openConsettingpage : [this.openConsettingpage],
        openAboutpage : [this.openAboutpage]
    };

    //user controller instance
    if(com.ump.productquery.cm_settingpageController){
        this._userController = new com.ump.productquery.cm_settingpageController();
    }else{
        alert("please check the js file[com.ump.productquery.cm_settingpageController.js], it probably has some syntax wrong.");
        //return;
    }

    //the window[cm_settingpage] do not define the context
    this._entity = null;
    this._context = null;
}
function com$ump$productquery$cm_settingpageControllerBase$ExitOk(json){
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
        this._userController.ExitOk($context);
    	
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
function com$ump$productquery$cm_settingpageControllerBase$openExitDialog(json){
    try{
        _$sys.callAction('openExitDialog');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_settingpageControllerBase$back(json){
    try{
        _$sys.callAction('back');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_settingpageControllerBase$openConsettingpage(json){
    try{
        _$sys.callAction('openConsettingpage');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_settingpageControllerBase$openAboutpage(json){
    try{
        _$sys.callAction('openAboutpage');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
com.ump.productquery.cm_settingpageControllerBase.prototype = {
    ExitOk : com$ump$productquery$cm_settingpageControllerBase$ExitOk,
    openExitDialog : com$ump$productquery$cm_settingpageControllerBase$openExitDialog,
    back : com$ump$productquery$cm_settingpageControllerBase$back,
    openConsettingpage : com$ump$productquery$cm_settingpageControllerBase$openConsettingpage,
    openAboutpage : com$ump$productquery$cm_settingpageControllerBase$openAboutpage
};
com.ump.productquery.cm_settingpageControllerBase.registerClass('com.ump.productquery.cm_settingpageControllerBase',UMP.UI.Mvc.Controller);
