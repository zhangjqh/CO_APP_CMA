Type.registerNamespace('com.ump.productquery');
com.ump.productquery.cm_mutiselectfactoryctx = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.cm_mutiselectfactoryctx.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$cm_mutiselectfactoryctx$get_factorylist(){
    return this.get('factorylist');
}
function com$ump$productquery$cm_mutiselectfactoryctx$set_factorylist(value){
    return this.set('factorylist',value);
}
function com$ump$productquery$cm_mutiselectfactoryctx$get_searchfield(){
    return this.get('searchfield');
}
function com$ump$productquery$cm_mutiselectfactoryctx$set_searchfield(value){
    return this.set('searchfield',value);
}
com.ump.productquery.cm_mutiselectfactoryctx.prototype = {
    get_factorylist : com$ump$productquery$cm_mutiselectfactoryctx$get_factorylist,
    set_factorylist : com$ump$productquery$cm_mutiselectfactoryctx$get_factorylist,
    get_searchfield : com$ump$productquery$cm_mutiselectfactoryctx$get_searchfield,
    set_searchfield : com$ump$productquery$cm_mutiselectfactoryctx$get_searchfield
}
com.ump.productquery.cm_mutiselectfactoryctx.registerClass('com.ump.productquery.cm_mutiselectfactoryctx',UMP.UI.Mvc.Context);

Type.registerNamespace('com.ump.productquery');
com.ump.productquery.factory = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.factory.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$factory$get_pk_factory(){
    return this.get('pk_factory');
}
function com$ump$productquery$factory$set_pk_factory(value){
    return this.set('pk_factory',value);
}
function com$ump$productquery$factory$get_factorycode(){
    return this.get('factorycode');
}
function com$ump$productquery$factory$set_factorycode(value){
    return this.set('factorycode',value);
}
function com$ump$productquery$factory$get_factoryname(){
    return this.get('factoryname');
}
function com$ump$productquery$factory$set_factoryname(value){
    return this.set('factoryname',value);
}
function com$ump$productquery$factory$get_checked(){
    return this.get('checked');
}
function com$ump$productquery$factory$set_checked(value){
    return this.set('checked',value);
}
com.ump.productquery.factory.prototype = {
    get_pk_factory : com$ump$productquery$factory$get_pk_factory,
    set_pk_factory : com$ump$productquery$factory$get_pk_factory,
    get_factorycode : com$ump$productquery$factory$get_factorycode,
    set_factorycode : com$ump$productquery$factory$get_factorycode,
    get_factoryname : com$ump$productquery$factory$get_factoryname,
    set_factoryname : com$ump$productquery$factory$get_factoryname,
    get_checked : com$ump$productquery$factory$get_checked,
    set_checked : com$ump$productquery$factory$get_checked
}
com.ump.productquery.factory.registerClass('com.ump.productquery.factory',UMP.UI.Mvc.Context);

