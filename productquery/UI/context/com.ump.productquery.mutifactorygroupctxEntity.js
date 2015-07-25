Type.registerNamespace('com.ump.productquery');
com.ump.productquery.mutifactorygroupctxEntity = function(tag) {
    //Step 1：call base method and initialize the define of context
    com.ump.productquery.mutifactorygroupctxEntity.initializeBase(this,[tag]);
    $um$initEntity(this, "mutifactorygroupctx", {"tag":"context","attributes":{"id":"mutifactorygroupctx","iscascade":"false","from-type":"context","filter":""},"fields":{"factorygrouplist":{"tag":"fieldset","attributes":{"id":"factorygrouplist","child-field":"","iscascade":"false","relation":"n","fullclassname":"","from":"cm_mutiselectfactoryctx","type":"string","parent-field":"","from-type":"context"},"fields":{"factorygroupname":{"tag":"field","attributes":{"id":"factorygroupname","type":"string"}},"factorylist":{"tag":"fieldset","attributes":{"id":"factorylist","child-field":"","iscascade":"false","relation":"n","fullclassname":"","from":"factory","type":"string","parent-field":"","from-type":"context"},"fields":{"factoryname":{"tag":"field","attributes":{"id":"factoryname","type":"string"}},"factorycode":{"tag":"field","attributes":{"id":"factorycode","type":"string"}},"pk_factory":{"tag":"field","attributes":{"id":"pk_factory","type":"string"}},"checked":{"tag":"field","attributes":{"id":"checked","type":"string"}}},"namespace":"com.ump.productquery"}},"namespace":"com.ump.productquery"},"searchfield":{"tag":"field","attributes":{"id":"searchfield","type":"string"}},"lastusedfactorys":{"tag":"field","attributes":{"id":"lastusedfactorys","type":"string"}}},"namespace":"com.ump.productquery"});
}
function com$ump$productquery$mutifactorygroupctxEntity$get_factorygrouplist(){
    return this.field('factorygrouplist');
}
function com$ump$productquery$mutifactorygroupctxEntity$set_factorygrouplist(value){
    return this.field('factorygrouplist',value);
}
function com$ump$productquery$mutifactorygroupctxEntity$get_searchfield(){
    return this.field('searchfield');
}
function com$ump$productquery$mutifactorygroupctxEntity$set_searchfield(value){
    return this.field('searchfield',value);
}
function com$ump$productquery$mutifactorygroupctxEntity$get_lastusedfactorys(){
    return this.field('lastusedfactorys');
}
function com$ump$productquery$mutifactorygroupctxEntity$set_lastusedfactorys(value){
    return this.field('lastusedfactorys',value);
}
com.ump.productquery.mutifactorygroupctxEntity.prototype = {
    get_factorygrouplist : com$ump$productquery$mutifactorygroupctxEntity$get_factorygrouplist,
    set_factorygrouplist : com$ump$productquery$mutifactorygroupctxEntity$get_factorygrouplist,
    get_searchfield : com$ump$productquery$mutifactorygroupctxEntity$get_searchfield,
    set_searchfield : com$ump$productquery$mutifactorygroupctxEntity$get_searchfield,
    get_lastusedfactorys : com$ump$productquery$mutifactorygroupctxEntity$get_lastusedfactorys,
    set_lastusedfactorys : com$ump$productquery$mutifactorygroupctxEntity$get_lastusedfactorys
}
com.ump.productquery.mutifactorygroupctxEntity.registerClass('com.ump.productquery.mutifactorygroupctxEntity',UMP.UI.Mvc.Entity);
