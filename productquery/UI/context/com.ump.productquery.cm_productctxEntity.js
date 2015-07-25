Type.registerNamespace('com.ump.productquery');
com.ump.productquery.cm_productctxEntity = function(tag) {
    //Step 1：call base method and initialize the define of context
    com.ump.productquery.cm_productctxEntity.initializeBase(this,[tag]);
    $um$initEntity(this, "cm_productctx", {"tag":"context","attributes":{"id":"cm_productctx","iscascade":"false","from-type":"context","filter":""},"fields":{"cmproductlist":{"tag":"fieldset","attributes":{"id":"cmproductlist","child-field":"","iscascade":"false","relation":"1","fullclassname":"","from":"cmproductlistctx","type":"string","parent-field":"","from-type":"context"},"fields":{"name":{"tag":"field","attributes":{"id":"name","type":"string"}},"pk_material":{"tag":"field","attributes":{"id":"pk_material","type":"string"}},"code":{"tag":"field","attributes":{"id":"code","type":"string"}}},"namespace":"com.ump.productquery"},"searchfield":{"tag":"field","attributes":{"id":"searchfield","type":"string"}}},"namespace":"com.ump.productquery"});
}
function com$ump$productquery$cm_productctxEntity$get_cmproductlist(){
    return this.field('cmproductlist');
}
function com$ump$productquery$cm_productctxEntity$set_cmproductlist(value){
    return this.field('cmproductlist',value);
}
function com$ump$productquery$cm_productctxEntity$get_searchfield(){
    return this.field('searchfield');
}
function com$ump$productquery$cm_productctxEntity$set_searchfield(value){
    return this.field('searchfield',value);
}
com.ump.productquery.cm_productctxEntity.prototype = {
    get_cmproductlist : com$ump$productquery$cm_productctxEntity$get_cmproductlist,
    set_cmproductlist : com$ump$productquery$cm_productctxEntity$get_cmproductlist,
    get_searchfield : com$ump$productquery$cm_productctxEntity$get_searchfield,
    set_searchfield : com$ump$productquery$cm_productctxEntity$get_searchfield
}
com.ump.productquery.cm_productctxEntity.registerClass('com.ump.productquery.cm_productctxEntity',UMP.UI.Mvc.Entity);
