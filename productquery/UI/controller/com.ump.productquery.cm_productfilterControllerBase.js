Type.registerNamespace('com.ump.productquery.cm_productfilterControllerBase');
com.ump.productquery.cm_productfilterControllerBase = function() {
    //Step 1：inherit the base class
    com.ump.productquery.cm_productfilterControllerBase.initializeBase(this);

    //Auto generate action map...
    this._actionMap = {
        searchcallback : [this.searchcallback],
        clickListRowToOpenDetailView : [this.clickListRowToOpenDetailView],
        loadNextPage : [this.loadNextPage],
        doSearch : [this.doSearch],
        back : [this.back]
    };

    //user controller instance
    if(com.ump.productquery.cm_productfilterController){
        this._userController = new com.ump.productquery.cm_productfilterController();
    }else{
        alert("please check the js file[com.ump.productquery.cm_productfilterController.js], it probably has some syntax wrong.");
        //return;
    }

    //this._entity is the context define
    if(typeof com.ump.productquery !='undefined' && typeof com.ump.productquery.cm_productctxEntity != 'undefined'){
        this._entity = new com.ump.productquery.cm_productctxEntity('context');
        $sys.version(2.0)
    }else{
        this._entity = null;
        $sys.version(1.0)
    }
    //this._context is the context data object
    if(typeof com.ump.productquery !='undefined' && typeof com.ump.productquery.cm_productctx != 'undefined'){
        this._context = new com.ump.productquery.cm_productctx(this._entity.id(),this._entity,null);
        $sys.version(2.0);
    }else{
        this._context = null;
        $sys.version(1.0);
    }
}
function com$ump$productquery$cm_productfilterControllerBase$searchcallback(json){
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
        this._userController.searchcallback($context);
    	
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
function com$ump$productquery$cm_productfilterControllerBase$clickListRowToOpenDetailView(json){
    try{
        _$sys.callAction('clickListRowToOpenDetailView');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_productfilterControllerBase$loadNextPage(json){
    try{
        _$sys.callAction('loadNextPage');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_productfilterControllerBase$doSearch(json){
    try{
        _$sys.callAction('doSearch');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_productfilterControllerBase$back(json){
    try{
        _$sys.callAction('back');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
com.ump.productquery.cm_productfilterControllerBase.prototype = {
    searchcallback : com$ump$productquery$cm_productfilterControllerBase$searchcallback,
    clickListRowToOpenDetailView : com$ump$productquery$cm_productfilterControllerBase$clickListRowToOpenDetailView,
    loadNextPage : com$ump$productquery$cm_productfilterControllerBase$loadNextPage,
    doSearch : com$ump$productquery$cm_productfilterControllerBase$doSearch,
    back : com$ump$productquery$cm_productfilterControllerBase$back
};
com.ump.productquery.cm_productfilterControllerBase.registerClass('com.ump.productquery.cm_productfilterControllerBase',UMP.UI.Mvc.Controller);
