Type.registerNamespace('com.ump.productquery');
com.ump.productquery.factorygroupctxEntity = function(tag) {
    //Step 1：call base method and initialize the define of context
    com.ump.productquery.factorygroupctxEntity.initializeBase(this,[tag]);
    $um$initEntity(this, "factorygroupctx", {"tag":"context","attributes":{"id":"factorygroupctx","iscascade":"false","from-type":"context","filter":""},"fields":{"lastusedfactorystr":{"tag":"field","attributes":{"id":"lastusedfactorystr","type":"string"}},"grouplist":{"tag":"fieldset","attributes":{"id":"grouplist","child-field":"","iscascade":"false","relation":"n","fullclassname":"","from":"factoryctx","type":"string","parent-field":"","from-type":"context"},"fields":{"org_factorylist":{"tag":"fieldset","attributes":{"id":"org_factorylist","child-field":"","iscascade":"false","relation":"n","fullclassname":"","from":"org_factory","type":"fieldset","parent-field":"","from-type":"context"},"fields":{"factoryname":{"tag":"field","attributes":{"id":"factoryname","type":"string"}},"factorycode":{"tag":"field","attributes":{"id":"factorycode","type":"string"}},"pk_factory":{"tag":"field","attributes":{"id":"pk_factory","type":"string"}},"checked":{"tag":"field","attributes":{"id":"checked","type":"string"}}},"namespace":"com.ump.productquery"},"factorygroupname":{"tag":"field","attributes":{"id":"factorygroupname","type":"string"}}},"namespace":"com.ump.productquery"},"searchfield":{"tag":"field","attributes":{"id":"searchfield","type":"string"}}},"namespace":"com.ump.productquery"});
}
function com$ump$productquery$factorygroupctxEntity$get_grouplist(){
    return this.field('grouplist');
}
function com$ump$productquery$factorygroupctxEntity$set_grouplist(value){
    return this.field('grouplist',value);
}
function com$ump$productquery$factorygroupctxEntity$get_searchfield(){
    return this.field('searchfield');
}
function com$ump$productquery$factorygroupctxEntity$set_searchfield(value){
    return this.field('searchfield',value);
}
function com$ump$productquery$factorygroupctxEntity$get_lastusedfactorystr(){
    return this.field('lastusedfactorystr');
}
function com$ump$productquery$factorygroupctxEntity$set_lastusedfactorystr(value){
    return this.field('lastusedfactorystr',value);
}
com.ump.productquery.factorygroupctxEntity.prototype = {
    get_grouplist : com$ump$productquery$factorygroupctxEntity$get_grouplist,
    set_grouplist : com$ump$productquery$factorygroupctxEntity$get_grouplist,
    get_searchfield : com$ump$productquery$factorygroupctxEntity$get_searchfield,
    set_searchfield : com$ump$productquery$factorygroupctxEntity$get_searchfield,
    get_lastusedfactorystr : com$ump$productquery$factorygroupctxEntity$get_lastusedfactorystr,
    set_lastusedfactorystr : com$ump$productquery$factorygroupctxEntity$get_lastusedfactorystr
}
com.ump.productquery.factorygroupctxEntity.registerClass('com.ump.productquery.factorygroupctxEntity',UMP.UI.Mvc.Entity);
