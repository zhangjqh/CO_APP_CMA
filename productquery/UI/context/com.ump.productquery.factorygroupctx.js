Type.registerNamespace('com.ump.productquery');
com.ump.productquery.factorygroupctx = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.factorygroupctx.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$factorygroupctx$get_grouplist(){
    return this.get('grouplist');
}
function com$ump$productquery$factorygroupctx$set_grouplist(value){
    return this.set('grouplist',value);
}
function com$ump$productquery$factorygroupctx$get_searchfield(){
    return this.get('searchfield');
}
function com$ump$productquery$factorygroupctx$set_searchfield(value){
    return this.set('searchfield',value);
}
function com$ump$productquery$factorygroupctx$get_lastusedfactorystr(){
    return this.get('lastusedfactorystr');
}
function com$ump$productquery$factorygroupctx$set_lastusedfactorystr(value){
    return this.set('lastusedfactorystr',value);
}
com.ump.productquery.factorygroupctx.prototype = {
    get_grouplist : com$ump$productquery$factorygroupctx$get_grouplist,
    set_grouplist : com$ump$productquery$factorygroupctx$get_grouplist,
    get_searchfield : com$ump$productquery$factorygroupctx$get_searchfield,
    set_searchfield : com$ump$productquery$factorygroupctx$get_searchfield,
    get_lastusedfactorystr : com$ump$productquery$factorygroupctx$get_lastusedfactorystr,
    set_lastusedfactorystr : com$ump$productquery$factorygroupctx$get_lastusedfactorystr
}
com.ump.productquery.factorygroupctx.registerClass('com.ump.productquery.factorygroupctx',UMP.UI.Mvc.Context);

Type.registerNamespace('com.ump.productquery');
com.ump.productquery.factoryctx = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.factoryctx.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$factoryctx$get_org_factorylist(){
    return this.get('org_factorylist');
}
function com$ump$productquery$factoryctx$set_org_factorylist(value){
    return this.set('org_factorylist',value);
}
function com$ump$productquery$factoryctx$get_factorygroupname(){
    return this.get('factorygroupname');
}
function com$ump$productquery$factoryctx$set_factorygroupname(value){
    return this.set('factorygroupname',value);
}
com.ump.productquery.factoryctx.prototype = {
    get_org_factorylist : com$ump$productquery$factoryctx$get_org_factorylist,
    set_org_factorylist : com$ump$productquery$factoryctx$get_org_factorylist,
    get_factorygroupname : com$ump$productquery$factoryctx$get_factorygroupname,
    set_factorygroupname : com$ump$productquery$factoryctx$get_factorygroupname
}
com.ump.productquery.factoryctx.registerClass('com.ump.productquery.factoryctx',UMP.UI.Mvc.Context);

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

