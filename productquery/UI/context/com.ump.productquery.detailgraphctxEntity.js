Type.registerNamespace('com.ump.productquery');
com.ump.productquery.detailgraphctxEntity = function(tag) {
    //Step 1：call base method and initialize the define of context
    com.ump.productquery.detailgraphctxEntity.initializeBase(this,[tag]);
    $um$initEntity(this, "detailgraphctx", {"tag":"context","attributes":{"id":"detailgraphctx","iscascade":"false","from-type":"context","filter":""},"fields":{"pk_accperiodmonth":{"tag":"field","attributes":{"id":"pk_accperiodmonth","type":"string"}},"pk_material":{"tag":"field","attributes":{"id":"pk_material","type":"string"}},"pk_factory":{"tag":"field","attributes":{"id":"pk_factory","type":"string"}}},"namespace":"com.ump.productquery"});
}
function com$ump$productquery$detailgraphctxEntity$get_pk_factory(){
    return this.field('pk_factory');
}
function com$ump$productquery$detailgraphctxEntity$set_pk_factory(value){
    return this.field('pk_factory',value);
}
function com$ump$productquery$detailgraphctxEntity$get_pk_material(){
    return this.field('pk_material');
}
function com$ump$productquery$detailgraphctxEntity$set_pk_material(value){
    return this.field('pk_material',value);
}
function com$ump$productquery$detailgraphctxEntity$get_pk_accperiodmonth(){
    return this.field('pk_accperiodmonth');
}
function com$ump$productquery$detailgraphctxEntity$set_pk_accperiodmonth(value){
    return this.field('pk_accperiodmonth',value);
}
com.ump.productquery.detailgraphctxEntity.prototype = {
    get_pk_factory : com$ump$productquery$detailgraphctxEntity$get_pk_factory,
    set_pk_factory : com$ump$productquery$detailgraphctxEntity$get_pk_factory,
    get_pk_material : com$ump$productquery$detailgraphctxEntity$get_pk_material,
    set_pk_material : com$ump$productquery$detailgraphctxEntity$get_pk_material,
    get_pk_accperiodmonth : com$ump$productquery$detailgraphctxEntity$get_pk_accperiodmonth,
    set_pk_accperiodmonth : com$ump$productquery$detailgraphctxEntity$get_pk_accperiodmonth
}
com.ump.productquery.detailgraphctxEntity.registerClass('com.ump.productquery.detailgraphctxEntity',UMP.UI.Mvc.Entity);
