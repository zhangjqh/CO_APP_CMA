Type.registerNamespace('com.ump.productquery.detailgraphControllerBase');
com.ump.productquery.detailgraphControllerBase = function() {
    //Step 1：inherit the base class
    com.ump.productquery.detailgraphControllerBase.initializeBase(this);

    //Auto generate action map...
    this._actionMap = {
        openDetailList : [this.openDetailList],
        loadGraph : [this.loadGraph],
        clickIcon : [this.clickIcon],
        openMutiFactoryView : [this.openMutiFactoryView],
        loadviewdata : [this.loadviewdata],
        back : [this.back],
        openMutiPeriodView : [this.openMutiPeriodView]
    };

    //user controller instance
    if(com.ump.productquery.detailgraphController){
        this._userController = new com.ump.productquery.detailgraphController();
    }else{
        alert("please check the js file[com.ump.productquery.detailgraphController.js], it probably has some syntax wrong.");
        //return;
    }

    //this._entity is the context define
    if(typeof com.ump.productquery !='undefined' && typeof com.ump.productquery.cm_unitcostctxEntity != 'undefined'){
        this._entity = new com.ump.productquery.cm_unitcostctxEntity('context');
        $sys.version(2.0)
    }else{
        this._entity = null;
        $sys.version(1.0)
    }
    //this._context is the context data object
    if(typeof com.ump.productquery !='undefined' && typeof com.ump.productquery.cm_unitcostctx != 'undefined'){
        this._context = new com.ump.productquery.cm_unitcostctx(this._entity.id(),this._entity,null);
        $sys.version(2.0);
    }else{
        this._context = null;
        $sys.version(1.0);
    }
}
function com$ump$productquery$detailgraphControllerBase$openDetailList(json){
    try{
        _$sys.callAction('openDetailList');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$detailgraphControllerBase$loadGraph(json){
    try{
        _$sys.callAction('loadGraph');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$detailgraphControllerBase$clickIcon(json){
    try{
        _$sys.callAction('clickIcon');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$detailgraphControllerBase$openMutiFactoryView(json){
    try{
        _$sys.callAction('openMutiFactoryView');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$detailgraphControllerBase$loadviewdata(json){
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
function com$ump$productquery$detailgraphControllerBase$back(json){
    try{
        _$sys.callAction('back');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$detailgraphControllerBase$openMutiPeriodView(json){
    try{
        _$sys.callAction('openMutiPeriodView');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
com.ump.productquery.detailgraphControllerBase.prototype = {
    openDetailList : com$ump$productquery$detailgraphControllerBase$openDetailList,
    loadGraph : com$ump$productquery$detailgraphControllerBase$loadGraph,
    clickIcon : com$ump$productquery$detailgraphControllerBase$clickIcon,
    openMutiFactoryView : com$ump$productquery$detailgraphControllerBase$openMutiFactoryView,
    loadviewdata : com$ump$productquery$detailgraphControllerBase$loadviewdata,
    back : com$ump$productquery$detailgraphControllerBase$back,
    openMutiPeriodView : com$ump$productquery$detailgraphControllerBase$openMutiPeriodView
};
com.ump.productquery.detailgraphControllerBase.registerClass('com.ump.productquery.detailgraphControllerBase',UMP.UI.Mvc.Controller);
