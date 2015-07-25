Type.registerNamespace('com.ump.productquery.accperiodrefControllerBase');
com.ump.productquery.accperiodrefControllerBase = function() {
    //Step 1：inherit the base class
    com.ump.productquery.accperiodrefControllerBase.initializeBase(this);

    //Auto generate action map...
    this._actionMap = {
        returnResult : [this.returnResult],
        setcurrentselectitemred : [this.setcurrentselectitemred],
        onClickListRow : [this.onClickListRow],
        load : [this.load],
        onCancel : [this.onCancel]
    };

    //user controller instance
    if(com.ump.productquery.accperiodrefController){
        this._userController = new com.ump.productquery.accperiodrefController();
    }else{
        alert("please check the js file[com.ump.productquery.accperiodrefController.js], it probably has some syntax wrong.");
        //return;
    }

    //this._entity is the context define
    if(typeof com.ump.productquery !='undefined' && typeof com.ump.productquery.cm_accountperiodctxEntity != 'undefined'){
        this._entity = new com.ump.productquery.cm_accountperiodctxEntity('context');
        $sys.version(2.0)
    }else{
        this._entity = null;
        $sys.version(1.0)
    }
    //this._context is the context data object
    if(typeof com.ump.productquery !='undefined' && typeof com.ump.productquery.cm_accountperiodctx != 'undefined'){
        this._context = new com.ump.productquery.cm_accountperiodctx(this._entity.id(),this._entity,null);
        $sys.version(2.0);
    }else{
        this._context = null;
        $sys.version(1.0);
    }
}
function com$ump$productquery$accperiodrefControllerBase$returnResult(json){
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
        this._userController.returnResult($context);
    	
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
function com$ump$productquery$accperiodrefControllerBase$setcurrentselectitemred(json){
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
        this._userController.setcurrentselectitemred($context);
    	
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
function com$ump$productquery$accperiodrefControllerBase$onClickListRow(json){
    try{
        _$sys.callAction('onClickListRow');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$accperiodrefControllerBase$load(json){
    try{
        _$sys.callAction('load');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$accperiodrefControllerBase$onCancel(json){
    try{
        _$sys.callAction('onCancel');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
com.ump.productquery.accperiodrefControllerBase.prototype = {
    returnResult : com$ump$productquery$accperiodrefControllerBase$returnResult,
    setcurrentselectitemred : com$ump$productquery$accperiodrefControllerBase$setcurrentselectitemred,
    onClickListRow : com$ump$productquery$accperiodrefControllerBase$onClickListRow,
    load : com$ump$productquery$accperiodrefControllerBase$load,
    onCancel : com$ump$productquery$accperiodrefControllerBase$onCancel
};
com.ump.productquery.accperiodrefControllerBase.registerClass('com.ump.productquery.accperiodrefControllerBase',UMP.UI.Mvc.Controller);
