Type.registerNamespace('com.ump.productquery.cm_mutiperiodviewControllerBase');
com.ump.productquery.cm_mutiperiodviewControllerBase = function() {
    //Step 1：inherit the base class
    com.ump.productquery.cm_mutiperiodviewControllerBase.initializeBase(this);

    //Auto generate action map...
    this._actionMap = {
        refcallback : [this.refcallback],
        openComparePeriodRef : [this.openComparePeriodRef],
        orderBy : [this.orderBy],
        back : [this.back],
        openGraph : [this.openGraph],
        loadViewPage : [this.loadViewPage],
        openProductDetailInfoView : [this.openProductDetailInfoView],
        clickListRow : [this.clickListRow]
    };

    //user controller instance
    if(com.ump.productquery.cm_mutiperiodviewController){
        this._userController = new com.ump.productquery.cm_mutiperiodviewController();
    }else{
        alert("please check the js file[com.ump.productquery.cm_mutiperiodviewController.js], it probably has some syntax wrong.");
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
function com$ump$productquery$cm_mutiperiodviewControllerBase$refcallback(json){
    try{
        _$sys.callAction('refcallback');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_mutiperiodviewControllerBase$openComparePeriodRef(json){
    try{
        _$sys.callAction('openComparePeriodRef');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_mutiperiodviewControllerBase$orderBy(json){
    try{
        _$sys.callAction('orderBy');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_mutiperiodviewControllerBase$back(json){
    try{
        _$sys.callAction('back');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_mutiperiodviewControllerBase$openGraph(json){
    try{
        _$sys.callAction('openGraph');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_mutiperiodviewControllerBase$loadViewPage(json){
    try{
        _$sys.callAction('loadViewPage');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_mutiperiodviewControllerBase$openProductDetailInfoView(json){
    try{
        _$sys.callAction('openProductDetailInfoView');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_mutiperiodviewControllerBase$clickListRow(json){
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
com.ump.productquery.cm_mutiperiodviewControllerBase.prototype = {
    refcallback : com$ump$productquery$cm_mutiperiodviewControllerBase$refcallback,
    openComparePeriodRef : com$ump$productquery$cm_mutiperiodviewControllerBase$openComparePeriodRef,
    orderBy : com$ump$productquery$cm_mutiperiodviewControllerBase$orderBy,
    back : com$ump$productquery$cm_mutiperiodviewControllerBase$back,
    openGraph : com$ump$productquery$cm_mutiperiodviewControllerBase$openGraph,
    loadViewPage : com$ump$productquery$cm_mutiperiodviewControllerBase$loadViewPage,
    openProductDetailInfoView : com$ump$productquery$cm_mutiperiodviewControllerBase$openProductDetailInfoView,
    clickListRow : com$ump$productquery$cm_mutiperiodviewControllerBase$clickListRow
};
com.ump.productquery.cm_mutiperiodviewControllerBase.registerClass('com.ump.productquery.cm_mutiperiodviewControllerBase',UMP.UI.Mvc.Controller);
