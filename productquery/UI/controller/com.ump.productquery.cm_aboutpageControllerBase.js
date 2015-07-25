Type.registerNamespace('com.ump.productquery.cm_aboutpageControllerBase');
com.ump.productquery.cm_aboutpageControllerBase = function() {
    //Step 1：inherit the base class
    com.ump.productquery.cm_aboutpageControllerBase.initializeBase(this);

    //Auto generate action map...
    this._actionMap = {
        back : [this.back]
    };

    //user controller instance
    if(com.ump.productquery.cm_aboutpageController){
        this._userController = new com.ump.productquery.cm_aboutpageController();
    }else{
        alert("please check the js file[com.ump.productquery.cm_aboutpageController.js], it probably has some syntax wrong.");
        //return;
    }

    //the window[cm_aboutpage] do not define the context
    this._entity = null;
    this._context = null;
}
function com$ump$productquery$cm_aboutpageControllerBase$back(json){
    try{
        _$sys.callAction('back');
    }catch(e){
        alert(e.stack);
    }
    return json;
}
com.ump.productquery.cm_aboutpageControllerBase.prototype = {
    back : com$ump$productquery$cm_aboutpageControllerBase$back
};
com.ump.productquery.cm_aboutpageControllerBase.registerClass('com.ump.productquery.cm_aboutpageControllerBase',UMP.UI.Mvc.Controller);
