Type.registerNamespace('com.ump.productquery.mutproductviewwithgraphControllerBase');
com.ump.productquery.mutproductviewwithgraphControllerBase = function() {
    //Step 1：inherit the base class
    com.ump.productquery.mutproductviewwithgraphControllerBase.initializeBase(this);

    //Auto generate action map...
    this._actionMap = {
        back : [this.back]
    };

    //user controller instance
    if(com.ump.productquery.mutproductviewwithgraphController){
        this._userController = new com.ump.productquery.mutproductviewwithgraphController();
    }else{
        alert("please check the js file[com.ump.productquery.mutproductviewwithgraphController.js], it probably has some syntax wrong.");
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
function com$ump$productquery$mutproductviewwithgraphControllerBase$back(json){
    try{
        _$sys.callAction('back');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
com.ump.productquery.mutproductviewwithgraphControllerBase.prototype = {
    back : com$ump$productquery$mutproductviewwithgraphControllerBase$back
};
com.ump.productquery.mutproductviewwithgraphControllerBase.registerClass('com.ump.productquery.mutproductviewwithgraphControllerBase',UMP.UI.Mvc.Controller);
