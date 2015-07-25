Type.registerNamespace('com.ump.productquery.mutproductdetailviewControllerBase');
com.ump.productquery.mutproductdetailviewControllerBase = function() {
    //Step 1：inherit the base class
    com.ump.productquery.mutproductdetailviewControllerBase.initializeBase(this);

    //Auto generate action map...
    this._actionMap = {
        openDetailGraph : [this.openDetailGraph],
        clickIcon : [this.clickIcon],
        handleException : [this.handleException],
        openMutiFactoryView : [this.openMutiFactoryView],
        back : [this.back],
        loadProductDetailInfo : [this.loadProductDetailInfo],
        beforeload : [this.beforeload],
        openMutiPeriodView : [this.openMutiPeriodView]
    };

    //user controller instance
    if(com.ump.productquery.mutproductdetailviewController){
        this._userController = new com.ump.productquery.mutproductdetailviewController();
    }else{
        alert("please check the js file[com.ump.productquery.mutproductdetailviewController.js], it probably has some syntax wrong.");
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
function com$ump$productquery$mutproductdetailviewControllerBase$openDetailGraph(json){
    try{
        _$sys.callAction('openDetailGraph');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$mutproductdetailviewControllerBase$clickIcon(json){
    try{
        _$sys.callAction('clickIcon');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$mutproductdetailviewControllerBase$handleException(json){
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
        this._userController.handleException($context);
    	
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
function com$ump$productquery$mutproductdetailviewControllerBase$openMutiFactoryView(json){
    try{
        _$sys.callAction('openMutiFactoryView');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$mutproductdetailviewControllerBase$back(json){
    try{
        _$sys.callAction('back');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$mutproductdetailviewControllerBase$loadProductDetailInfo(json){
    try{
        _$sys.callAction('loadProductDetailInfo');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$mutproductdetailviewControllerBase$beforeload(json){
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
function com$ump$productquery$mutproductdetailviewControllerBase$openMutiPeriodView(json){
    try{
        _$sys.callAction('openMutiPeriodView');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
com.ump.productquery.mutproductdetailviewControllerBase.prototype = {
    openDetailGraph : com$ump$productquery$mutproductdetailviewControllerBase$openDetailGraph,
    clickIcon : com$ump$productquery$mutproductdetailviewControllerBase$clickIcon,
    handleException : com$ump$productquery$mutproductdetailviewControllerBase$handleException,
    openMutiFactoryView : com$ump$productquery$mutproductdetailviewControllerBase$openMutiFactoryView,
    back : com$ump$productquery$mutproductdetailviewControllerBase$back,
    loadProductDetailInfo : com$ump$productquery$mutproductdetailviewControllerBase$loadProductDetailInfo,
    beforeload : com$ump$productquery$mutproductdetailviewControllerBase$beforeload,
    openMutiPeriodView : com$ump$productquery$mutproductdetailviewControllerBase$openMutiPeriodView
};
com.ump.productquery.mutproductdetailviewControllerBase.registerClass('com.ump.productquery.mutproductdetailviewControllerBase',UMP.UI.Mvc.Controller);
