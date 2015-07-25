Type.registerNamespace('com.ump.productquery.factoryrefControllerBase');
com.ump.productquery.factoryrefControllerBase = function() {
    //Step 1：inherit the base class
    com.ump.productquery.factoryrefControllerBase.initializeBase(this);

    //Auto generate action map...
    this._actionMap = {
        getnextpage : [this.getnextpage],
        returnResult : [this.returnResult],
        setcurrentselectitemred : [this.setcurrentselectitemred],
        beforeloadFirstPage : [this.beforeloadFirstPage],
        beforeloadNextPage : [this.beforeloadNextPage],
        onClickListRow : [this.onClickListRow],
        load : [this.load],
        onCancel : [this.onCancel]
    };

    //user controller instance
    if(com.ump.productquery.factoryrefController){
        this._userController = new com.ump.productquery.factoryrefController();
    }else{
        alert("please check the js file[com.ump.productquery.factoryrefController.js], it probably has some syntax wrong.");
        //return;
    }

    //this._entity is the context define
    if(typeof com.ump.productquery !='undefined' && typeof com.ump.productquery.factorygroupctxEntity != 'undefined'){
        this._entity = new com.ump.productquery.factorygroupctxEntity('context');
        $sys.version(2.0)
    }else{
        this._entity = null;
        $sys.version(1.0)
    }
    //this._context is the context data object
    if(typeof com.ump.productquery !='undefined' && typeof com.ump.productquery.factorygroupctx != 'undefined'){
        this._context = new com.ump.productquery.factorygroupctx(this._entity.id(),this._entity,null);
        $sys.version(2.0);
    }else{
        this._context = null;
        $sys.version(1.0);
    }
}
function com$ump$productquery$factoryrefControllerBase$getnextpage(json){
    try{
        _$sys.callAction('getnextpage');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$factoryrefControllerBase$returnResult(json){
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
function com$ump$productquery$factoryrefControllerBase$setcurrentselectitemred(json){
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
function com$ump$productquery$factoryrefControllerBase$beforeloadFirstPage(json){
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
        this._userController.beforeloadFirstPage($context);
    	
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
function com$ump$productquery$factoryrefControllerBase$beforeloadNextPage(json){
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
        this._userController.beforeloadNextPage($context);
    	
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
function com$ump$productquery$factoryrefControllerBase$onClickListRow(json){
    try{
        _$sys.callAction('onClickListRow');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$factoryrefControllerBase$load(json){
    try{
        _$sys.callAction('load');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$factoryrefControllerBase$onCancel(json){
    try{
        _$sys.callAction('onCancel');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
com.ump.productquery.factoryrefControllerBase.prototype = {
    getnextpage : com$ump$productquery$factoryrefControllerBase$getnextpage,
    returnResult : com$ump$productquery$factoryrefControllerBase$returnResult,
    setcurrentselectitemred : com$ump$productquery$factoryrefControllerBase$setcurrentselectitemred,
    beforeloadFirstPage : com$ump$productquery$factoryrefControllerBase$beforeloadFirstPage,
    beforeloadNextPage : com$ump$productquery$factoryrefControllerBase$beforeloadNextPage,
    onClickListRow : com$ump$productquery$factoryrefControllerBase$onClickListRow,
    load : com$ump$productquery$factoryrefControllerBase$load,
    onCancel : com$ump$productquery$factoryrefControllerBase$onCancel
};
com.ump.productquery.factoryrefControllerBase.registerClass('com.ump.productquery.factoryrefControllerBase',UMP.UI.Mvc.Controller);
