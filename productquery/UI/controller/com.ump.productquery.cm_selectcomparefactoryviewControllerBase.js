Type.registerNamespace('com.ump.productquery.cm_selectcomparefactoryviewControllerBase');
com.ump.productquery.cm_selectcomparefactoryviewControllerBase = function() {
    //Step 1：inherit the base class
    com.ump.productquery.cm_selectcomparefactoryviewControllerBase.initializeBase(this);

    //Auto generate action map...
    this._actionMap = {
        returnResult : [this.returnResult],
        loadNext : [this.loadNext],
        beforeloaddata : [this.beforeloaddata],
        onClickListRow : [this.onClickListRow],
        load : [this.load],
        scrolltofisrtselectedindex : [this.scrolltofisrtselectedindex],
        loaddata : [this.loaddata],
        onCancel : [this.onCancel]
    };

    //user controller instance
    if(com.ump.productquery.cm_selectcomparefactoryviewController){
        this._userController = new com.ump.productquery.cm_selectcomparefactoryviewController();
    }else{
        alert("please check the js file[com.ump.productquery.cm_selectcomparefactoryviewController.js], it probably has some syntax wrong.");
        //return;
    }

    //this._entity is the context define
    if(typeof com.ump.productquery !='undefined' && typeof com.ump.productquery.mutifactorygroupctxEntity != 'undefined'){
        this._entity = new com.ump.productquery.mutifactorygroupctxEntity('context');
        $sys.version(2.0)
    }else{
        this._entity = null;
        $sys.version(1.0)
    }
    //this._context is the context data object
    if(typeof com.ump.productquery !='undefined' && typeof com.ump.productquery.mutifactorygroupctx != 'undefined'){
        this._context = new com.ump.productquery.mutifactorygroupctx(this._entity.id(),this._entity,null);
        $sys.version(2.0);
    }else{
        this._context = null;
        $sys.version(1.0);
    }
}
function com$ump$productquery$cm_selectcomparefactoryviewControllerBase$returnResult(json){
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
function com$ump$productquery$cm_selectcomparefactoryviewControllerBase$loadNext(json){
    try{
        _$sys.callAction('loadNext');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_selectcomparefactoryviewControllerBase$beforeloaddata(json){
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
        this._userController.beforeloaddata($context);
    	
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
function com$ump$productquery$cm_selectcomparefactoryviewControllerBase$onClickListRow(json){
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
        this._userController.onClickListRow($context);
    	
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
function com$ump$productquery$cm_selectcomparefactoryviewControllerBase$load(json){
    try{
        _$sys.callAction('load');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_selectcomparefactoryviewControllerBase$scrolltofisrtselectedindex(json){
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
function com$ump$productquery$cm_selectcomparefactoryviewControllerBase$loaddata(json){
    try{
        _$sys.callAction('loaddata');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_selectcomparefactoryviewControllerBase$onCancel(json){
    try{
        _$sys.callAction('onCancel');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
com.ump.productquery.cm_selectcomparefactoryviewControllerBase.prototype = {
    returnResult : com$ump$productquery$cm_selectcomparefactoryviewControllerBase$returnResult,
    loadNext : com$ump$productquery$cm_selectcomparefactoryviewControllerBase$loadNext,
    beforeloaddata : com$ump$productquery$cm_selectcomparefactoryviewControllerBase$beforeloaddata,
    onClickListRow : com$ump$productquery$cm_selectcomparefactoryviewControllerBase$onClickListRow,
    load : com$ump$productquery$cm_selectcomparefactoryviewControllerBase$load,
    scrolltofisrtselectedindex : com$ump$productquery$cm_selectcomparefactoryviewControllerBase$scrolltofisrtselectedindex,
    loaddata : com$ump$productquery$cm_selectcomparefactoryviewControllerBase$loaddata,
    onCancel : com$ump$productquery$cm_selectcomparefactoryviewControllerBase$onCancel
};
com.ump.productquery.cm_selectcomparefactoryviewControllerBase.registerClass('com.ump.productquery.cm_selectcomparefactoryviewControllerBase',UMP.UI.Mvc.Controller);
