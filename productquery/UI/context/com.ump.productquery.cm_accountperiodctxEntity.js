Type.registerNamespace('com.ump.productquery');
com.ump.productquery.cm_accountperiodctxEntity = function(tag) {
    //Step 1：call base method and initialize the define of context
    com.ump.productquery.cm_accountperiodctxEntity.initializeBase(this,[tag]);
    $um$initEntity(this, "cm_accountperiodctx", {"tag":"context","attributes":{"id":"cm_accountperiodctx","iscascade":"false","from-type":"context","filter":""},"fields":{"yearlist":{"tag":"fieldset","attributes":{"id":"yearlist","child-field":"","iscascade":"false","relation":"n","fullclassname":"","from":"yearlistctx","type":"string","parent-field":"","from-type":"context"},"fields":{"bd_accperiodlist":{"tag":"fieldset","attributes":{"id":"bd_accperiodlist","child-field":"","iscascade":"false","relation":"n","fullclassname":"","from":"bd_accperiod","type":"fieldset","parent-field":"","from-type":"context"},"fields":{"yearmonth":{"tag":"field","attributes":{"id":"yearmonth","type":"string"}},"pk_accperiodmonth":{"tag":"field","attributes":{"id":"pk_accperiodmonth","type":"string"}},"checked":{"tag":"field","attributes":{"id":"checked","type":"string"}}},"namespace":"com.ump.productquery"},"year":{"tag":"field","attributes":{"id":"year","type":"string"}}},"namespace":"com.ump.productquery"}},"namespace":"com.ump.productquery"});
}
function com$ump$productquery$cm_accountperiodctxEntity$get_yearlist(){
    return this.field('yearlist');
}
function com$ump$productquery$cm_accountperiodctxEntity$set_yearlist(value){
    return this.field('yearlist',value);
}
com.ump.productquery.cm_accountperiodctxEntity.prototype = {
    get_yearlist : com$ump$productquery$cm_accountperiodctxEntity$get_yearlist,
    set_yearlist : com$ump$productquery$cm_accountperiodctxEntity$get_yearlist
}
com.ump.productquery.cm_accountperiodctxEntity.registerClass('com.ump.productquery.cm_accountperiodctxEntity',UMP.UI.Mvc.Entity);
