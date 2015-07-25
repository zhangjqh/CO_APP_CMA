Type.registerNamespace('com.ump.productquery');
com.ump.productquery.cm_mutiselectperiodctxEntity = function(tag) {
    //Step 1：call base method and initialize the define of context
    com.ump.productquery.cm_mutiselectperiodctxEntity.initializeBase(this,[tag]);
    $um$initEntity(this, "cm_mutiselectperiodctx", {"tag":"context","attributes":{"id":"cm_mutiselectperiodctx","iscascade":"false","from-type":"context","filter":""},"fields":{"yearlist":{"tag":"fieldset","attributes":{"id":"yearlist","child-field":"","iscascade":"false","relation":"n","fullclassname":"","from":"cm_oneyearctx","type":"string","parent-field":"","from-type":"context"},"fields":{"yearmonthlist":{"tag":"fieldset","attributes":{"id":"yearmonthlist","child-field":"","iscascade":"false","relation":"n","fullclassname":"","from":"cm_yearmonthctx","type":"fieldset","parent-field":"","from-type":"context"},"fields":{"yearmonth":{"tag":"field","attributes":{"id":"yearmonth","type":"string"}},"pk_accperiodmonth":{"tag":"field","attributes":{"id":"pk_accperiodmonth","type":"string"}},"checked":{"tag":"field","attributes":{"id":"checked","type":"bool"}}},"namespace":"com.ump.productquery"},"year":{"tag":"field","attributes":{"id":"year","type":"string"}},"checked":{"tag":"field","attributes":{"id":"checked","type":"bool"}}},"namespace":"com.ump.productquery"}},"namespace":"com.ump.productquery"});
}
function com$ump$productquery$cm_mutiselectperiodctxEntity$get_yearlist(){
    return this.field('yearlist');
}
function com$ump$productquery$cm_mutiselectperiodctxEntity$set_yearlist(value){
    return this.field('yearlist',value);
}
com.ump.productquery.cm_mutiselectperiodctxEntity.prototype = {
    get_yearlist : com$ump$productquery$cm_mutiselectperiodctxEntity$get_yearlist,
    set_yearlist : com$ump$productquery$cm_mutiselectperiodctxEntity$get_yearlist
}
com.ump.productquery.cm_mutiselectperiodctxEntity.registerClass('com.ump.productquery.cm_mutiselectperiodctxEntity',UMP.UI.Mvc.Entity);
