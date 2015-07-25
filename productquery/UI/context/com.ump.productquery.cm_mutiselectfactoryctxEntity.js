Type.registerNamespace('com.ump.productquery');
com.ump.productquery.cm_mutiselectfactoryctxEntity = function(tag) {
    //Step 1：call base method and initialize the define of context
    com.ump.productquery.cm_mutiselectfactoryctxEntity.initializeBase(this,[tag]);
    $um$initEntity(this, "cm_mutiselectfactoryctx", {"tag":"context","attributes":{"id":"cm_mutiselectfactoryctx","iscascade":"false","from-type":"context","filter":""},"fields":{"searchfield":{"tag":"field","attributes":{"id":"searchfield","type":"string"}},"factorylist":{"tag":"fieldset","attributes":{"id":"factorylist","child-field":"","iscascade":"false","relation":"n","fullclassname":"","from":"factory","type":"string","parent-field":"","from-type":"context"},"fields":{"factoryname":{"tag":"field","attributes":{"id":"factoryname","type":"string"}},"factorycode":{"tag":"field","attributes":{"id":"factorycode","type":"string"}},"pk_factory":{"tag":"field","attributes":{"id":"pk_factory","type":"string"}},"checked":{"tag":"field","attributes":{"id":"checked","type":"string"}}},"namespace":"com.ump.productquery"}},"namespace":"com.ump.productquery"});
}
function com$ump$productquery$cm_mutiselectfactoryctxEntity$get_factorylist(){
    return this.field('factorylist');
}
function com$ump$productquery$cm_mutiselectfactoryctxEntity$set_factorylist(value){
    return this.field('factorylist',value);
}
function com$ump$productquery$cm_mutiselectfactoryctxEntity$get_searchfield(){
    return this.field('searchfield');
}
function com$ump$productquery$cm_mutiselectfactoryctxEntity$set_searchfield(value){
    return this.field('searchfield',value);
}
com.ump.productquery.cm_mutiselectfactoryctxEntity.prototype = {
    get_factorylist : com$ump$productquery$cm_mutiselectfactoryctxEntity$get_factorylist,
    set_factorylist : com$ump$productquery$cm_mutiselectfactoryctxEntity$get_factorylist,
    get_searchfield : com$ump$productquery$cm_mutiselectfactoryctxEntity$get_searchfield,
    set_searchfield : com$ump$productquery$cm_mutiselectfactoryctxEntity$get_searchfield
}
com.ump.productquery.cm_mutiselectfactoryctxEntity.registerClass('com.ump.productquery.cm_mutiselectfactoryctxEntity',UMP.UI.Mvc.Entity);
