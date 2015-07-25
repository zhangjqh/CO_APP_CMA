Type.registerNamespace('com.ump.productquery.mutfactoryviewwithgraphControllerBase');
com.ump.productquery.mutfactoryviewwithgraphControllerBase = function() {
    //Step 1：inherit the base class
    com.ump.productquery.mutfactoryviewwithgraphControllerBase.initializeBase(this);

    //Auto generate action map...
    this._actionMap = {
        refcallback : [this.refcallback],
        loadGraph : [this.loadGraph],
        openList : [this.openList],
        compareFactory : [this.compareFactory],
        loadviewdata : [this.loadviewdata],
        back : [this.back]
    };

    //user controller instance
    if(com.ump.productquery.mutfactoryviewwithgraphController){
        this._userController = new com.ump.productquery.mutfactoryviewwithgraphController();
    }else{
        alert("please check the js file[com.ump.productquery.mutfactoryviewwithgraphController.js], it probably has some syntax wrong.");
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
function com$ump$productquery$mutfactoryviewwithgraphControllerBase$refcallback(json){
    try{
        _$sys.callAction('refcallback');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$mutfactoryviewwithgraphControllerBase$loadGraph(json){
    try{
        _$sys.callAction('loadGraph');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$mutfactoryviewwithgraphControllerBase$openList(json){
    try{
        _$sys.callAction('openList');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$mutfactoryviewwithgraphControllerBase$compareFactory(json){
    try{
        _$sys.callAction('compareFactory');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$mutfactoryviewwithgraphControllerBase$loadviewdata(json){
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
        this._userController.loadviewdata($context);
    	
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
function com$ump$productquery$mutfactoryviewwithgraphControllerBase$back(json){
    try{
        _$sys.callAction('back');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
com.ump.productquery.mutfactoryviewwithgraphControllerBase.prototype = {
    refcallback : com$ump$productquery$mutfactoryviewwithgraphControllerBase$refcallback,
    loadGraph : com$ump$productquery$mutfactoryviewwithgraphControllerBase$loadGraph,
    openList : com$ump$productquery$mutfactoryviewwithgraphControllerBase$openList,
    compareFactory : com$ump$productquery$mutfactoryviewwithgraphControllerBase$compareFactory,
    loadviewdata : com$ump$productquery$mutfactoryviewwithgraphControllerBase$loadviewdata,
    back : com$ump$productquery$mutfactoryviewwithgraphControllerBase$back
};
com.ump.productquery.mutfactoryviewwithgraphControllerBase.registerClass('com.ump.productquery.mutfactoryviewwithgraphControllerBase',UMP.UI.Mvc.Controller);
