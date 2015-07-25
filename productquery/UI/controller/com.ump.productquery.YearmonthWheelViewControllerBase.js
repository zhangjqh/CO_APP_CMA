Type.registerNamespace('com.ump.productquery.YearmonthWheelViewControllerBase');
com.ump.productquery.YearmonthWheelViewControllerBase = function() {
    //Step 1：inherit the base class
    com.ump.productquery.YearmonthWheelViewControllerBase.initializeBase(this);

    //Auto generate action map...
    this._actionMap = {
        selectmonth : [this.selectmonth],
        getYearlistByfactory : [this.getYearlistByfactory],
        selectyear : [this.selectyear],
        back : [this.back],
        loaddata : [this.loaddata]
    };

    //user controller instance
    if(com.ump.productquery.YearmonthWheelViewController){
        this._userController = new com.ump.productquery.YearmonthWheelViewController();
    }else{
        alert("please check the js file[com.ump.productquery.YearmonthWheelViewController.js], it probably has some syntax wrong.");
        //return;
    }

    //the window[YearmonthWheelView] do not define the context
    this._entity = null;
    this._context = null;
}
function com$ump$productquery$YearmonthWheelViewControllerBase$selectmonth(json){
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
        this._userController.selectmonth($context);
    	
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
function com$ump$productquery$YearmonthWheelViewControllerBase$getYearlistByfactory(json){
    try{
        _$sys.callAction('getYearlistByfactory');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$YearmonthWheelViewControllerBase$selectyear(json){
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
        this._userController.selectyear($context);
    	
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
function com$ump$productquery$YearmonthWheelViewControllerBase$back(json){
    try{
        _$sys.callAction('back');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$YearmonthWheelViewControllerBase$loaddata(json){
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
        this._userController.loaddata($context);
    	
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
com.ump.productquery.YearmonthWheelViewControllerBase.prototype = {
    selectmonth : com$ump$productquery$YearmonthWheelViewControllerBase$selectmonth,
    getYearlistByfactory : com$ump$productquery$YearmonthWheelViewControllerBase$getYearlistByfactory,
    selectyear : com$ump$productquery$YearmonthWheelViewControllerBase$selectyear,
    back : com$ump$productquery$YearmonthWheelViewControllerBase$back,
    loaddata : com$ump$productquery$YearmonthWheelViewControllerBase$loaddata
};
com.ump.productquery.YearmonthWheelViewControllerBase.registerClass('com.ump.productquery.YearmonthWheelViewControllerBase',UMP.UI.Mvc.Controller);
