Type.registerNamespace('com.ump.productquery.cm_loginconsetControllerBase');
com.ump.productquery.cm_loginconsetControllerBase = function() {
    //Step 1：inherit the base class
    com.ump.productquery.cm_loginconsetControllerBase.initializeBase(this);

    //Auto generate action map...
    this._actionMap = {
        settingSave : [this.settingSave],
        loadcnfig : [this.loadcnfig],
        closeWindow : [this.closeWindow]
    };

    //user controller instance
    if(com.ump.productquery.cm_loginconsetController){
        this._userController = new com.ump.productquery.cm_loginconsetController();
    }else{
        alert("please check the js file[com.ump.productquery.cm_loginconsetController.js], it probably has some syntax wrong.");
        //return;
    }

    //this._entity is the context define
    if(typeof com.ump.productquery !='undefined' && typeof com.ump.productquery.connectinforEntity != 'undefined'){
        this._entity = new com.ump.productquery.connectinforEntity('context');
        $sys.version(2.0)
    }else{
        this._entity = null;
        $sys.version(1.0)
    }
    //this._context is the context data object
    if(typeof com.ump.productquery !='undefined' && typeof com.ump.productquery.connectinfor != 'undefined'){
        this._context = new com.ump.productquery.connectinfor(this._entity.id(),this._entity,null);
        $sys.version(2.0);
    }else{
        this._context = null;
        $sys.version(1.0);
    }
}
function com$ump$productquery$cm_loginconsetControllerBase$settingSave(json){
    try{
        _$sys.callAction('settingSave');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_loginconsetControllerBase$loadcnfig(json){
    try{
        _$sys.callAction('loadcnfig');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
function com$ump$productquery$cm_loginconsetControllerBase$closeWindow(json){
    try{
        _$sys.callAction('closeWindow');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
com.ump.productquery.cm_loginconsetControllerBase.prototype = {
    settingSave : com$ump$productquery$cm_loginconsetControllerBase$settingSave,
    loadcnfig : com$ump$productquery$cm_loginconsetControllerBase$loadcnfig,
    closeWindow : com$ump$productquery$cm_loginconsetControllerBase$closeWindow
};
com.ump.productquery.cm_loginconsetControllerBase.registerClass('com.ump.productquery.cm_loginconsetControllerBase',UMP.UI.Mvc.Controller);
