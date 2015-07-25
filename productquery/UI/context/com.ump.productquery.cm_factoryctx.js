Type.registerNamespace('com.ump.productquery');
com.ump.productquery.cm_factoryctx = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.cm_factoryctx.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$cm_factoryctx$get_org_factorylist(){
    return this.get('org_factorylist');
}
function com$ump$productquery$cm_factoryctx$set_org_factorylist(value){
    return this.set('org_factorylist',value);
}
function com$ump$productquery$cm_factoryctx$get_searchfield(){
    return this.get('searchfield');
}
function com$ump$productquery$cm_factoryctx$set_searchfield(value){
    return this.set('searchfield',value);
}
com.ump.productquery.cm_factoryctx.prototype = {
    get_org_factorylist : com$ump$productquery$cm_factoryctx$get_org_factorylist,
    set_org_factorylist : com$ump$productquery$cm_factoryctx$get_org_factorylist,
    get_searchfield : com$ump$productquery$cm_factoryctx$get_searchfield,
    set_searchfield : com$ump$productquery$cm_factoryctx$get_searchfield
}
com.ump.productquery.cm_factoryctx.registerClass('com.ump.productquery.cm_factoryctx',UMP.UI.Mvc.Context);

Type.registerNamespace('com.ump.productquery');
com.ump.productquery.org_factory = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.org_factory.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$org_factory$get_pk_factory(){
    return this.get('pk_factory');
}
function com$ump$productquery$org_factory$set_pk_factory(value){
    return this.set('pk_factory',value);
}
function com$ump$productquery$org_factory$get_factorycode(){
    return this.get('factorycode');
}
function com$ump$productquery$org_factory$set_factorycode(value){
    return this.set('factorycode',value);
}
function com$ump$productquery$org_factory$get_factoryname(){
    return this.get('factoryname');
}
function com$ump$productquery$org_factory$set_factoryname(value){
    return this.set('factoryname',value);
}
function com$ump$productquery$org_factory$get_checked(){
    return this.get('checked');
}
function com$ump$productquery$org_factory$set_checked(value){
    return this.set('checked',value);
}
com.ump.productquery.org_factory.prototype = {
    get_pk_factory : com$ump$productquery$org_factory$get_pk_factory,
    set_pk_factory : com$ump$productquery$org_factory$get_pk_factory,
    get_factorycode : com$ump$productquery$org_factory$get_factorycode,
    set_factorycode : com$ump$productquery$org_factory$get_factorycode,
    get_factoryname : com$ump$productquery$org_factory$get_factoryname,
    set_factoryname : com$ump$productquery$org_factory$get_factoryname,
    get_checked : com$ump$productquery$org_factory$get_checked,
    set_checked : com$ump$productquery$org_factory$get_checked
}
com.ump.productquery.org_factory.registerClass('com.ump.productquery.org_factory',UMP.UI.Mvc.Context);

