Type.registerNamespace('com.ump.productquery');
com.ump.productquery.cm_mutiselectfactoryV1 = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.cm_mutiselectfactoryV1.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$cm_mutiselectfactoryV1$get_searchfield(){
    return this.get('searchfield');
}
function com$ump$productquery$cm_mutiselectfactoryV1$set_searchfield(value){
    return this.set('searchfield',value);
}
function com$ump$productquery$cm_mutiselectfactoryV1$get_factorylist(){
    return this.get('factorylist');
}
function com$ump$productquery$cm_mutiselectfactoryV1$set_factorylist(value){
    return this.set('factorylist',value);
}
function com$ump$productquery$cm_mutiselectfactoryV1$get_historylist(){
    return this.get('historylist');
}
function com$ump$productquery$cm_mutiselectfactoryV1$set_historylist(value){
    return this.set('historylist',value);
}
function com$ump$productquery$cm_mutiselectfactoryV1$get_searchcount(){
    return this.get('searchcount');
}
function com$ump$productquery$cm_mutiselectfactoryV1$set_searchcount(value){
    return this.set('searchcount',value);
}
com.ump.productquery.cm_mutiselectfactoryV1.prototype = {
    get_searchfield : com$ump$productquery$cm_mutiselectfactoryV1$get_searchfield,
    set_searchfield : com$ump$productquery$cm_mutiselectfactoryV1$get_searchfield,
    get_factorylist : com$ump$productquery$cm_mutiselectfactoryV1$get_factorylist,
    set_factorylist : com$ump$productquery$cm_mutiselectfactoryV1$get_factorylist,
    get_historylist : com$ump$productquery$cm_mutiselectfactoryV1$get_historylist,
    set_historylist : com$ump$productquery$cm_mutiselectfactoryV1$get_historylist,
    get_searchcount : com$ump$productquery$cm_mutiselectfactoryV1$get_searchcount,
    set_searchcount : com$ump$productquery$cm_mutiselectfactoryV1$get_searchcount
}
com.ump.productquery.cm_mutiselectfactoryV1.registerClass('com.ump.productquery.cm_mutiselectfactoryV1',UMP.UI.Mvc.Context);

Type.registerNamespace('com.ump.productquery');
com.ump.productquery.factorys = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.factorys.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$factorys$get_pk_factory(){
    return this.get('pk_factory');
}
function com$ump$productquery$factorys$set_pk_factory(value){
    return this.set('pk_factory',value);
}
function com$ump$productquery$factorys$get_factorycode(){
    return this.get('factorycode');
}
function com$ump$productquery$factorys$set_factorycode(value){
    return this.set('factorycode',value);
}
function com$ump$productquery$factorys$get_factoryname(){
    return this.get('factoryname');
}
function com$ump$productquery$factorys$set_factoryname(value){
    return this.set('factoryname',value);
}
function com$ump$productquery$factorys$get_checked(){
    return this.get('checked');
}
function com$ump$productquery$factorys$set_checked(value){
    return this.set('checked',value);
}
com.ump.productquery.factorys.prototype = {
    get_pk_factory : com$ump$productquery$factorys$get_pk_factory,
    set_pk_factory : com$ump$productquery$factorys$get_pk_factory,
    get_factorycode : com$ump$productquery$factorys$get_factorycode,
    set_factorycode : com$ump$productquery$factorys$get_factorycode,
    get_factoryname : com$ump$productquery$factorys$get_factoryname,
    set_factoryname : com$ump$productquery$factorys$get_factoryname,
    get_checked : com$ump$productquery$factorys$get_checked,
    set_checked : com$ump$productquery$factorys$get_checked
}
com.ump.productquery.factorys.registerClass('com.ump.productquery.factorys',UMP.UI.Mvc.Context);

Type.registerNamespace('com.ump.productquery');
com.ump.productquery.history = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.history.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$history$get_searchword(){
    return this.get('searchword');
}
function com$ump$productquery$history$set_searchword(value){
    return this.set('searchword',value);
}
com.ump.productquery.history.prototype = {
    get_searchword : com$ump$productquery$history$get_searchword,
    set_searchword : com$ump$productquery$history$get_searchword
}
com.ump.productquery.history.registerClass('com.ump.productquery.history',UMP.UI.Mvc.Context);

