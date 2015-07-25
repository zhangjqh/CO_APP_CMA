Type.registerNamespace('com.ump.productquery.mutperiodviewwithgraphControllerBase');
com.ump.productquery.mutperiodviewwithgraphControllerBase = function() {
    //Step 1：inherit the base class
    com.ump.productquery.mutperiodviewwithgraphControllerBase.initializeBase(this);

    //Auto generate action map...
    this._actionMap = {
        refcallback : [this.refcallback],
        loadGraph : [this.loadGraph],
        openList : [this.openList],
        back : [this.back],
        load : [this.load],
        comparePeriod : [this.comparePeriod]
    };

    //user controller instance
    if(com.ump.productquery.mutperiodviewwithgraphController){
        this._userController = new com.ump.productquery.mutperiodviewwithgraphController();
    }else{
        alert("please check the js file[com.ump.productquery.mutperiodviewwithgraphController.js], it probably has some syntax wrong.");
        //return;
    }

    //this._entity is the context define
    if(typeof com.ump.productquery !='undefined' && typeof com.ump.productquery.cm_mutiperiodctxEntity != 'undefined'){
        this._entity = new com.ump.productquery.cm_mutiperiodctxEntity('context');
        $sys.version(2.0)
    }else{
        this._entity = null;
        $sys.version(1.0)
    }
    //this._context is the context data object
    if(typeof com.ump.productquery !='undefined' && typeof com.ump.productquery.cm_mutiperiodctx != 'undefined'){
        this._context = new com.ump.productquery.cm_mutiperiodctx(this._entity.id(),this._entity,null);
        $sys.version(2.0);
    }else{
        this._context = null;
        $sys.version(1.0);
    }
}
function com$ump$productquery$mutperiodviewwithgraphControllerBase$refcallback(json){
    try{
        _$sys.callAction('refcallback');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$mutperiodviewwithgraphControllerBase$loadGraph(json){
    try{
        _$sys.callAction('loadGraph');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$mutperiodviewwithgraphControllerBase$openList(json){
    try{
        _$sys.callAction('openList');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$mutperiodviewwithgraphControllerBase$back(json){
    try{
        _$sys.callAction('back');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$mutperiodviewwithgraphControllerBase$load(json){
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
function com$ump$productquery$mutperiodviewwithgraphControllerBase$comparePeriod(json){
    try{
        _$sys.callAction('comparePeriod');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
com.ump.productquery.mutperiodviewwithgraphControllerBase.prototype = {
    refcallback : com$ump$productquery$mutperiodviewwithgraphControllerBase$refcallback,
    loadGraph : com$ump$productquery$mutperiodviewwithgraphControllerBase$loadGraph,
    openList : com$ump$productquery$mutperiodviewwithgraphControllerBase$openList,
    back : com$ump$productquery$mutperiodviewwithgraphControllerBase$back,
    load : com$ump$productquery$mutperiodviewwithgraphControllerBase$load,
    comparePeriod : com$ump$productquery$mutperiodviewwithgraphControllerBase$comparePeriod
};
com.ump.productquery.mutperiodviewwithgraphControllerBase.registerClass('com.ump.productquery.mutperiodviewwithgraphControllerBase',UMP.UI.Mvc.Controller);
