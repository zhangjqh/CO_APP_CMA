Type.registerNamespace('com.ump.productquery.mutproductviewControllerBase');
com.ump.productquery.mutproductviewControllerBase = function() {
    //Step 1：inherit the base class
    com.ump.productquery.mutproductviewControllerBase.initializeBase(this);

    //Auto generate action map...
    this._actionMap = {
        getProductListFirstPage : [this.getProductListFirstPage],
        setseqorder : [this.setseqorder],
        opensortdropdownlist : [this.opensortdropdownlist],
        orderbyseqdown : [this.orderbyseqdown],
        concern : [this.concern],
        setOrderByPrice : [this.setOrderByPrice],
        openProductDetailInfoView : [this.openProductDetailInfoView],
        UMonDataBinding : [this.UMonDataBinding],
        updatebyuserid : [this.updatebyuserid],
        openfactoryRef : [this.openfactoryRef],
        UMonLoad : [this.UMonLoad],
        getAccperiodByFactory : [this.getAccperiodByFactory],
        openSearchView : [this.openSearchView],
        loadViewPage : [this.loadViewPage],
        setordertype_down : [this.setordertype_down],
        orderbypriceup : [this.orderbypriceup],
        getProductListNextPage : [this.getProductListNextPage],
        orderbycodeup : [this.orderbycodeup],
        UMonUnload : [this.UMonUnload],
        openDetailCallBack : [this.openDetailCallBack],
        orderbypricedown : [this.orderbypricedown],
        setordertype_up : [this.setordertype_up],
        UMonComplete : [this.UMonComplete],
        setOrderBySeq : [this.setOrderBySeq],
        setOrderByCode : [this.setOrderByCode],
        pressok : [this.pressok],
        openAccperiodRef : [this.openAccperiodRef],
        setpriceorder : [this.setpriceorder],
        getPrevYearmonth : [this.getPrevYearmonth],
        getNextYearmonth : [this.getNextYearmonth],
        orderbycodedown : [this.orderbycodedown],
        UMonInit : [this.UMonInit],
        clickIcon : [this.clickIcon],
        openAccperiodPicker : [this.openAccperiodPicker],
        setcodeorder : [this.setcodeorder],
        setIcon : [this.setIcon],
        orderbysequp : [this.orderbysequp],
        opensettingpage : [this.opensettingpage]
    };

    //user controller instance
    if(com.ump.productquery.mutproductviewController){
        this._userController = new com.ump.productquery.mutproductviewController();
    }else{
        alert("please check the js file[com.ump.productquery.mutproductviewController.js], it probably has some syntax wrong.");
        //return;
    }

    //this._entity is the context define
    if(typeof com.ump.productquery !='undefined' && typeof com.ump.productquery.mutproductqueryctxEntity != 'undefined'){
        this._entity = new com.ump.productquery.mutproductqueryctxEntity('context');
        $sys.version(2.0)
    }else{
        this._entity = null;
        $sys.version(1.0)
    }
    //this._context is the context data object
    if(typeof com.ump.productquery !='undefined' && typeof com.ump.productquery.mutproductqueryctx != 'undefined'){
        this._context = new com.ump.productquery.mutproductqueryctx(this._entity.id(),this._entity,null);
        $sys.version(2.0);
    }else{
        this._context = null;
        $sys.version(1.0);
    }
}
function com$ump$productquery$mutproductviewControllerBase$getProductListFirstPage(json){
    try{
        _$sys.callAction('getProductListFirstPage');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$mutproductviewControllerBase$setseqorder(json){
    try{
        _$sys.callAction('setseqorder');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$mutproductviewControllerBase$opensortdropdownlist(json){
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
        this._userController.opensortdropdownlist($context);
    	
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
function com$ump$productquery$mutproductviewControllerBase$orderbyseqdown(json){
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
        this._userController.orderbyseqdown($context);
    	
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
function com$ump$productquery$mutproductviewControllerBase$concern(json){
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
        this._userController.concern($context);
    	
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
function com$ump$productquery$mutproductviewControllerBase$setOrderByPrice(json){
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
        this._userController.setOrderByPrice($context);
    	
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
function com$ump$productquery$mutproductviewControllerBase$openProductDetailInfoView(json){
    try{
        _$sys.callAction('openProductDetailInfoView');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$mutproductviewControllerBase$UMonDataBinding(json){
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
        this._userController.UMonDataBinding($context);
    	
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
function com$ump$productquery$mutproductviewControllerBase$updatebyuserid(json){
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
        this._userController.updatebyuserid($context);
    	
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
function com$ump$productquery$mutproductviewControllerBase$openfactoryRef(json){
    try{
        _$sys.callAction('openfactoryRef');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$mutproductviewControllerBase$UMonLoad(json){
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
        this._userController.UMonLoad($context);
    	
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
function com$ump$productquery$mutproductviewControllerBase$getAccperiodByFactory(json){
    try{
        _$sys.callAction('getAccperiodByFactory');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$mutproductviewControllerBase$openSearchView(json){
    try{
        _$sys.callAction('openSearchView');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$mutproductviewControllerBase$loadViewPage(json){
    try{
        _$sys.callAction('loadViewPage');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$mutproductviewControllerBase$setordertype_down(json){
    try{
        _$sys.callAction('setordertype_down');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$mutproductviewControllerBase$orderbypriceup(json){
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
        this._userController.orderbypriceup($context);
    	
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
function com$ump$productquery$mutproductviewControllerBase$getProductListNextPage(json){
    try{
        _$sys.callAction('getProductListNextPage');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$mutproductviewControllerBase$orderbycodeup(json){
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
        this._userController.orderbycodeup($context);
    	
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
function com$ump$productquery$mutproductviewControllerBase$UMonUnload(json){
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
        this._userController.UMonUnload($context);
    	
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
function com$ump$productquery$mutproductviewControllerBase$openDetailCallBack(json){
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
        this._userController.openDetailCallBack($context);
    	
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
function com$ump$productquery$mutproductviewControllerBase$orderbypricedown(json){
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
        this._userController.orderbypricedown($context);
    	
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
function com$ump$productquery$mutproductviewControllerBase$setordertype_up(json){
    try{
        _$sys.callAction('setordertype_up');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$mutproductviewControllerBase$UMonComplete(json){
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
        this._userController.UMonComplete($context);
    	
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
function com$ump$productquery$mutproductviewControllerBase$setOrderBySeq(json){
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
        this._userController.setOrderBySeq($context);
    	
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
function com$ump$productquery$mutproductviewControllerBase$setOrderByCode(json){
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
        this._userController.setOrderByCode($context);
    	
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
function com$ump$productquery$mutproductviewControllerBase$pressok(json){
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
        this._userController.pressok($context);
    	
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
function com$ump$productquery$mutproductviewControllerBase$openAccperiodRef(json){
    try{
        _$sys.callAction('openAccperiodRef');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$mutproductviewControllerBase$setpriceorder(json){
    try{
        _$sys.callAction('setpriceorder');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$mutproductviewControllerBase$getPrevYearmonth(json){
    try{
        _$sys.callAction('getPrevYearmonth');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$mutproductviewControllerBase$getNextYearmonth(json){
    try{
        _$sys.callAction('getNextYearmonth');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$mutproductviewControllerBase$orderbycodedown(json){
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
        this._userController.orderbycodedown($context);
    	
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
function com$ump$productquery$mutproductviewControllerBase$UMonInit(json){
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
        this._userController.UMonInit($context);
    	
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
function com$ump$productquery$mutproductviewControllerBase$clickIcon(json){
    try{
        _$sys.callAction('clickIcon');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$mutproductviewControllerBase$openAccperiodPicker(json){
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
        this._userController.openAccperiodPicker($context);
    	
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
function com$ump$productquery$mutproductviewControllerBase$setcodeorder(json){
    try{
        _$sys.callAction('setcodeorder');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$mutproductviewControllerBase$setIcon(json){
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
        this._userController.seticonsrc($context);
    	
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
function com$ump$productquery$mutproductviewControllerBase$orderbysequp(json){
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
        this._userController.orderbysequp($context);
    	
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
function com$ump$productquery$mutproductviewControllerBase$opensettingpage(json){
    try{
        _$sys.callAction('opensettingpage');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
com.ump.productquery.mutproductviewControllerBase.prototype = {
    getProductListFirstPage : com$ump$productquery$mutproductviewControllerBase$getProductListFirstPage,
    setseqorder : com$ump$productquery$mutproductviewControllerBase$setseqorder,
    opensortdropdownlist : com$ump$productquery$mutproductviewControllerBase$opensortdropdownlist,
    orderbyseqdown : com$ump$productquery$mutproductviewControllerBase$orderbyseqdown,
    concern : com$ump$productquery$mutproductviewControllerBase$concern,
    setOrderByPrice : com$ump$productquery$mutproductviewControllerBase$setOrderByPrice,
    openProductDetailInfoView : com$ump$productquery$mutproductviewControllerBase$openProductDetailInfoView,
    UMonDataBinding : com$ump$productquery$mutproductviewControllerBase$UMonDataBinding,
    updatebyuserid : com$ump$productquery$mutproductviewControllerBase$updatebyuserid,
    openfactoryRef : com$ump$productquery$mutproductviewControllerBase$openfactoryRef,
    UMonLoad : com$ump$productquery$mutproductviewControllerBase$UMonLoad,
    getAccperiodByFactory : com$ump$productquery$mutproductviewControllerBase$getAccperiodByFactory,
    openSearchView : com$ump$productquery$mutproductviewControllerBase$openSearchView,
    loadViewPage : com$ump$productquery$mutproductviewControllerBase$loadViewPage,
    setordertype_down : com$ump$productquery$mutproductviewControllerBase$setordertype_down,
    orderbypriceup : com$ump$productquery$mutproductviewControllerBase$orderbypriceup,
    getProductListNextPage : com$ump$productquery$mutproductviewControllerBase$getProductListNextPage,
    orderbycodeup : com$ump$productquery$mutproductviewControllerBase$orderbycodeup,
    UMonUnload : com$ump$productquery$mutproductviewControllerBase$UMonUnload,
    openDetailCallBack : com$ump$productquery$mutproductviewControllerBase$openDetailCallBack,
    orderbypricedown : com$ump$productquery$mutproductviewControllerBase$orderbypricedown,
    setordertype_up : com$ump$productquery$mutproductviewControllerBase$setordertype_up,
    UMonComplete : com$ump$productquery$mutproductviewControllerBase$UMonComplete,
    setOrderBySeq : com$ump$productquery$mutproductviewControllerBase$setOrderBySeq,
    setOrderByCode : com$ump$productquery$mutproductviewControllerBase$setOrderByCode,
    pressok : com$ump$productquery$mutproductviewControllerBase$pressok,
    openAccperiodRef : com$ump$productquery$mutproductviewControllerBase$openAccperiodRef,
    setpriceorder : com$ump$productquery$mutproductviewControllerBase$setpriceorder,
    getPrevYearmonth : com$ump$productquery$mutproductviewControllerBase$getPrevYearmonth,
    getNextYearmonth : com$ump$productquery$mutproductviewControllerBase$getNextYearmonth,
    orderbycodedown : com$ump$productquery$mutproductviewControllerBase$orderbycodedown,
    UMonInit : com$ump$productquery$mutproductviewControllerBase$UMonInit,
    clickIcon : com$ump$productquery$mutproductviewControllerBase$clickIcon,
    openAccperiodPicker : com$ump$productquery$mutproductviewControllerBase$openAccperiodPicker,
    setcodeorder : com$ump$productquery$mutproductviewControllerBase$setcodeorder,
    setIcon : com$ump$productquery$mutproductviewControllerBase$setIcon,
    orderbysequp : com$ump$productquery$mutproductviewControllerBase$orderbysequp,
    opensettingpage : com$ump$productquery$mutproductviewControllerBase$opensettingpage
};
com.ump.productquery.mutproductviewControllerBase.registerClass('com.ump.productquery.mutproductviewControllerBase',UMP.UI.Mvc.Controller);
