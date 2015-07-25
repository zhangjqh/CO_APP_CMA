Type.registerNamespace('com.ump.productquery');
com.ump.productquery.cm_factoryctxEntity = function(tag) {
    //Step 1：call base method and initialize the define of context
    com.ump.productquery.cm_factoryctxEntity.initializeBase(this,[tag]);
    $um$initEntity(this, "cm_factoryctx", {"tag":"context","attributes":{"id":"cm_factoryctx","iscascade":"false","from-type":"context","filter":""},"fields":{"searchfield":{"tag":"field","attributes":{"id":"searchfield","type":"string"}},"org_factorylist":{"tag":"fieldset","attributes":{"id":"org_factorylist","child-field":"","iscascade":"false","relation":"n","fullclassname":"","from":"org_factory","type":"string","parent-field":"","from-type":"context"},"fields":{"factoryname":{"tag":"field","attributes":{"id":"factoryname","type":"string"}},"factorycode":{"tag":"field","attributes":{"id":"factorycode","type":"string"}},"pk_factory":{"tag":"field","attributes":{"id":"pk_factory","type":"string"}},"checked":{"tag":"field","attributes":{"id":"checked","type":"string"}}},"namespace":"com.ump.productquery"}},"namespace":"com.ump.productquery"});
}
function com$ump$productquery$cm_factoryctxEntity$get_org_factorylist(){
    return this.field('org_factorylist');
}
function com$ump$productquery$cm_factoryctxEntity$set_org_factorylist(value){
    return this.field('org_factorylist',value);
}
function com$ump$productquery$cm_factoryctxEntity$get_searchfield(){
    return this.field('searchfield');
}
function com$ump$productquery$cm_factoryctxEntity$set_searchfield(value){
    return this.field('searchfield',value);
}
com.ump.productquery.cm_factoryctxEntity.prototype = {
    get_org_factorylist : com$ump$productquery$cm_factoryctxEntity$get_org_factorylist,
    set_org_factorylist : com$ump$productquery$cm_factoryctxEntity$get_org_factorylist,
    get_searchfield : com$ump$productquery$cm_factoryctxEntity$get_searchfield,
    set_searchfield : com$ump$productquery$cm_factoryctxEntity$get_searchfield
}
com.ump.productquery.cm_factoryctxEntity.registerClass('com.ump.productquery.cm_factoryctxEntity',UMP.UI.Mvc.Entity);
