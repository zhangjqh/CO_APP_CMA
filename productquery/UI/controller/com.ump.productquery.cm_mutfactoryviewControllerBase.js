Type.registerNamespace('com.ump.productquery.cm_mutfactoryviewControllerBase');
com.ump.productquery.cm_mutfactoryviewControllerBase = function() {
    //Step 1：inherit the base class
    com.ump.productquery.cm_mutfactoryviewControllerBase.initializeBase(this);

    //Auto generate action map...
    this._actionMap = {
        openNewGraph : [this.openNewGraph],
        refCallback : [this.refCallback],
        orderBy : [this.orderBy],
        writedatatocache : [this.writedatatocache],
        compareFactory : [this.compareFactory],
        back : [this.back],
        openGraph : [this.openGraph],
        loadViewPage : [this.loadViewPage],
        openProductDetailInfoView : [this.openProductDetailInfoView],
        clickListRow : [this.clickListRow],
        beforeload : [this.beforeload]
    };

    //user controller instance
    if(com.ump.productquery.cm_mutfactoryviewController){
        this._userController = new com.ump.productquery.cm_mutfactoryviewController();
    }else{
        alert("please check the js file[com.ump.productquery.cm_mutfactoryviewController.js], it probably has some syntax wrong.");
        //return;
    }

    //this._entity is the context define
    if(typeof com.ump.productquery !='undefined' && typeof com.ump.productquery.cm_mutifactoryqueryctxEntity != 'undefined'){
        this._entity = new com.ump.productquery.cm_mutifactoryqueryctxEntity('context');
        $sys.version(2.0)
    }else{
        this._entity = null;
        $sys.version(1.0)
    }
    //this._context is the context data object
    if(typeof com.ump.productquery !='undefined' && typeof com.ump.productquery.cm_mutifactoryqueryctx != 'undefined'){
        this._context = new com.ump.productquery.cm_mutifactoryqueryctx(this._entity.id(),this._entity,null);
        $sys.version(2.0);
    }else{
        this._context = null;
        $sys.version(1.0);
    }
}
function com$ump$productquery$cm_mutfactoryviewControllerBase$openNewGraph(json){
    try{
        _$sys.callAction('openNewGraph');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_mutfactoryviewControllerBase$refCallback(json){
    try{
        _$sys.callAction('refCallback');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_mutfactoryviewControllerBase$orderBy(json){
    try{
        _$sys.callAction('orderBy');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_mutfactoryviewControllerBase$writedatatocache(json){
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
        this._userController.writedatatocache($context);
    	
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
function com$ump$productquery$cm_mutfactoryviewControllerBase$compareFactory(json){
    try{
        _$sys.callAction('compareFactory');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_mutfactoryviewControllerBase$back(json){
    try{
        _$sys.callAction('back');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_mutfactoryviewControllerBase$openGraph(json){
    try{
        _$sys.callAction('openGraph');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_mutfactoryviewControllerBase$loadViewPage(json){
    try{
        _$sys.callAction('loadViewPage');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_mutfactoryviewControllerBase$openProductDetailInfoView(json){
    try{
        _$sys.callAction('openProductDetailInfoView');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_mutfactoryviewControllerBase$clickListRow(json){
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
        this._userController.clickListRow($context);
    	
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
function com$ump$productquery$cm_mutfactoryviewControllerBase$beforeload(json){
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
        this._userController.beforeload($context);
    	
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
com.ump.productquery.cm_mutfactoryviewControllerBase.prototype = {
    openNewGraph : com$ump$productquery$cm_mutfactoryviewControllerBase$openNewGraph,
    refCallback : com$ump$productquery$cm_mutfactoryviewControllerBase$refCallback,
    orderBy : com$ump$productquery$cm_mutfactoryviewControllerBase$orderBy,
    writedatatocache : com$ump$productquery$cm_mutfactoryviewControllerBase$writedatatocache,
    compareFactory : com$ump$productquery$cm_mutfactoryviewControllerBase$compareFactory,
    back : com$ump$productquery$cm_mutfactoryviewControllerBase$back,
    openGraph : com$ump$productquery$cm_mutfactoryviewControllerBase$openGraph,
    loadViewPage : com$ump$productquery$cm_mutfactoryviewControllerBase$loadViewPage,
    openProductDetailInfoView : com$ump$productquery$cm_mutfactoryviewControllerBase$openProductDetailInfoView,
    clickListRow : com$ump$productquery$cm_mutfactoryviewControllerBase$clickListRow,
    beforeload : com$ump$productquery$cm_mutfactoryviewControllerBase$beforeload
};
com.ump.productquery.cm_mutfactoryviewControllerBase.registerClass('com.ump.productquery.cm_mutfactoryviewControllerBase',UMP.UI.Mvc.Controller);
