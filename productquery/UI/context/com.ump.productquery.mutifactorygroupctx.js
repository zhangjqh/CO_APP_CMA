Type.registerNamespace('com.ump.productquery');
com.ump.productquery.mutifactorygroupctx = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.mutifactorygroupctx.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$mutifactorygroupctx$get_factorygrouplist(){
    return this.get('factorygrouplist');
}
function com$ump$productquery$mutifactorygroupctx$set_factorygrouplist(value){
    return this.set('factorygrouplist',value);
}
function com$ump$productquery$mutifactorygroupctx$get_searchfield(){
    return this.get('searchfield');
}
function com$ump$productquery$mutifactorygroupctx$set_searchfield(value){
    return this.set('searchfield',value);
}
function com$ump$productquery$mutifactorygroupctx$get_lastusedfactorys(){
    return this.get('lastusedfactorys');
}
function com$ump$productquery$mutifactorygroupctx$set_lastusedfactorys(value){
    return this.set('lastusedfactorys',value);
}
com.ump.productquery.mutifactorygroupctx.prototype = {
    get_factorygrouplist : com$ump$productquery$mutifactorygroupctx$get_factorygrouplist,
    set_factorygrouplist : com$ump$productquery$mutifactorygroupctx$get_factorygrouplist,
    get_searchfield : com$ump$productquery$mutifactorygroupctx$get_searchfield,
    set_searchfield : com$ump$productquery$mutifactorygroupctx$get_searchfield,
    get_lastusedfactorys : com$ump$productquery$mutifactorygroupctx$get_lastusedfactorys,
    set_lastusedfactorys : com$ump$productquery$mutifactorygroupctx$get_lastusedfactorys
}
com.ump.productquery.mutifactorygroupctx.registerClass('com.ump.productquery.mutifactorygroupctx',UMP.UI.Mvc.Context);

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
function com$ump$productquery$cm_mutiselectfactoryctx$get_factorygroupname(){
    return this.get('factorygroupname');
}
function com$ump$productquery$cm_mutiselectfactoryctx$set_factorygroupname(value){
    return this.set('factorygroupname',value);
}
com.ump.productquery.cm_mutiselectfactoryctx.prototype = {
    get_factorylist : com$ump$productquery$cm_mutiselectfactoryctx$get_factorylist,
    set_factorylist : com$ump$productquery$cm_mutiselectfactoryctx$get_factorylist,
    get_factorygroupname : com$ump$productquery$cm_mutiselectfactoryctx$get_factorygroupname,
    set_factorygroupname : com$ump$productquery$cm_mutiselectfactoryctx$get_factorygroupname
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

