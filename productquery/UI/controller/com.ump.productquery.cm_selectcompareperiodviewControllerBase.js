Type.registerNamespace('com.ump.productquery.cm_selectcompareperiodviewControllerBase');
com.ump.productquery.cm_selectcompareperiodviewControllerBase = function() {
    //Step 1：inherit the base class
    com.ump.productquery.cm_selectcompareperiodviewControllerBase.initializeBase(this);

    //Auto generate action map...
    this._actionMap = {
        returnResult : [this.returnResult],
        onClickYearRow : [this.onClickYearRow],
        load : [this.load],
        scrolltofisrtselectedindex : [this.scrolltofisrtselectedindex],
        onClickYearMonthRow : [this.onClickYearMonthRow],
        onCancel : [this.onCancel]
    };

    //user controller instance
    if(com.ump.productquery.cm_selectcompareperiodviewController){
        this._userController = new com.ump.productquery.cm_selectcompareperiodviewController();
    }else{
        alert("please check the js file[com.ump.productquery.cm_selectcompareperiodviewController.js], it probably has some syntax wrong.");
        //return;
    }

    //this._entity is the context define
    if(typeof com.ump.productquery !='undefined' && typeof com.ump.productquery.cm_mutiselectperiodctxEntity != 'undefined'){
        this._entity = new com.ump.productquery.cm_mutiselectperiodctxEntity('context');
        $sys.version(2.0)
    }else{
        this._entity = null;
        $sys.version(1.0)
    }
    //this._context is the context data object
    if(typeof com.ump.productquery !='undefined' && typeof com.ump.productquery.cm_mutiselectperiodctx != 'undefined'){
        this._context = new com.ump.productquery.cm_mutiselectperiodctx(this._entity.id(),this._entity,null);
        $sys.version(2.0);
    }else{
        this._context = null;
        $sys.version(1.0);
    }
}
function com$ump$productquery$cm_selectcompareperiodviewControllerBase$returnResult(json){
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
function com$ump$productquery$cm_selectcompareperiodviewControllerBase$onClickYearRow(json){
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
        this._userController.onClickYearRow($context);
    	
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
function com$ump$productquery$cm_selectcompareperiodviewControllerBase$load(json){
    try{
        _$sys.callAction('load');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_selectcompareperiodviewControllerBase$scrolltofisrtselectedindex(json){
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
        this._userController.scrolltofisrtselectedindex($context);
    	
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
function com$ump$productquery$cm_selectcompareperiodviewControllerBase$onClickYearMonthRow(json){
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
        this._userController.onClickYearMonthRow($context);
    	
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
function com$ump$productquery$cm_selectcompareperiodviewControllerBase$onCancel(json){
    try{
        _$sys.callAction('onCancel');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
com.ump.productquery.cm_selectcompareperiodviewControllerBase.prototype = {
    returnResult : com$ump$productquery$cm_selectcompareperiodviewControllerBase$returnResult,
    onClickYearRow : com$ump$productquery$cm_selectcompareperiodviewControllerBase$onClickYearRow,
    load : com$ump$productquery$cm_selectcompareperiodviewControllerBase$load,
    scrolltofisrtselectedindex : com$ump$productquery$cm_selectcompareperiodviewControllerBase$scrolltofisrtselectedindex,
    onClickYearMonthRow : com$ump$productquery$cm_selectcompareperiodviewControllerBase$onClickYearMonthRow,
    onCancel : com$ump$productquery$cm_selectcompareperiodviewControllerBase$onCancel
};
com.ump.productquery.cm_selectcompareperiodviewControllerBase.registerClass('com.ump.productquery.cm_selectcompareperiodviewControllerBase',UMP.UI.Mvc.Controller);
