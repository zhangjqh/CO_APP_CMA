Type.registerNamespace('com.ump.productquery');
com.ump.productquery.cm_mutiselectfactoryV1Entity = function(tag) {
    //Step 1：call base method and initialize the define of context
    com.ump.productquery.cm_mutiselectfactoryV1Entity.initializeBase(this,[tag]);
    $um$initEntity(this, "cm_mutiselectfactoryV1", {"tag":"context","attributes":{"id":"cm_mutiselectfactoryV1","iscascade":"false","from-type":"context","filter":""},"fields":{"historylist":{"tag":"fieldset","attributes":{"id":"historylist","child-field":"","iscascade":"false","relation":"n","fullclassname":"","from":"history","type":"string","parent-field":"","from-type":"context"},"fields":{"searchword":{"tag":"field","attributes":{"id":"searchword","type":"string"}}},"namespace":"com.ump.productquery"},"searchfield":{"tag":"field","attributes":{"id":"searchfield","type":"string"}},"searchcount":{"tag":"field","attributes":{"id":"searchcount","type":"string"}},"factorylist":{"tag":"fieldset","attributes":{"id":"factorylist","child-field":"","iscascade":"false","relation":"n","fullclassname":"","from":"factorys","type":"string","parent-field":"","from-type":"context"},"fields":{"factoryname":{"tag":"field","attributes":{"id":"factoryname","type":"string"}},"factorycode":{"tag":"field","attributes":{"id":"factorycode","type":"string"}},"pk_factory":{"tag":"field","attributes":{"id":"pk_factory","type":"string"}},"checked":{"tag":"field","attributes":{"id":"checked","type":"string"}}},"namespace":"com.ump.productquery"}},"namespace":"com.ump.productquery"});
}
function com$ump$productquery$cm_mutiselectfactoryV1Entity$get_searchfield(){
    return this.field('searchfield');
}
function com$ump$productquery$cm_mutiselectfactoryV1Entity$set_searchfield(value){
    return this.field('searchfield',value);
}
function com$ump$productquery$cm_mutiselectfactoryV1Entity$get_factorylist(){
    return this.field('factorylist');
}
function com$ump$productquery$cm_mutiselectfactoryV1Entity$set_factorylist(value){
    return this.field('factorylist',value);
}
function com$ump$productquery$cm_mutiselectfactoryV1Entity$get_historylist(){
    return this.field('historylist');
}
function com$ump$productquery$cm_mutiselectfactoryV1Entity$set_historylist(value){
    return this.field('historylist',value);
}
function com$ump$productquery$cm_mutiselectfactoryV1Entity$get_searchcount(){
    return this.field('searchcount');
}
function com$ump$productquery$cm_mutiselectfactoryV1Entity$set_searchcount(value){
    return this.field('searchcount',value);
}
com.ump.productquery.cm_mutiselectfactoryV1Entity.prototype = {
    get_searchfield : com$ump$productquery$cm_mutiselectfactoryV1Entity$get_searchfield,
    set_searchfield : com$ump$productquery$cm_mutiselectfactoryV1Entity$get_searchfield,
    get_factorylist : com$ump$productquery$cm_mutiselectfactoryV1Entity$get_factorylist,
    set_factorylist : com$ump$productquery$cm_mutiselectfactoryV1Entity$get_factorylist,
    get_historylist : com$ump$productquery$cm_mutiselectfactoryV1Entity$get_historylist,
    set_historylist : com$ump$productquery$cm_mutiselectfactoryV1Entity$get_historylist,
    get_searchcount : com$ump$productquery$cm_mutiselectfactoryV1Entity$get_searchcount,
    set_searchcount : com$ump$productquery$cm_mutiselectfactoryV1Entity$get_searchcount
}
com.ump.productquery.cm_mutiselectfactoryV1Entity.registerClass('com.ump.productquery.cm_mutiselectfactoryV1Entity',UMP.UI.Mvc.Entity);
