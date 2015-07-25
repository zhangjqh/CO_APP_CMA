Type.registerNamespace('com.ump.productquery');
com.ump.productquery.cm_mutifactoryqueryctxEntity = function(tag) {
    //Step 1：call base method and initialize the define of context
    com.ump.productquery.cm_mutifactoryqueryctxEntity.initializeBase(this,[tag]);
    $um$initEntity(this, "cm_mutifactoryqueryctx", {"tag":"context","attributes":{"id":"cm_mutifactoryqueryctx","iscascade":"false","from-type":"context","filter":""},"fields":{"refresult":{"tag":"field","attributes":{"id":"refresult","type":"string"}},"yearmonth":{"tag":"field","attributes":{"id":"yearmonth","type":"string"}},"pk_accperiodmonth":{"tag":"field","attributes":{"id":"pk_accperiodmonth","type":"string"}},"pk_material":{"tag":"field","attributes":{"id":"pk_material","type":"string"}},"orderby":{"tag":"field","attributes":{"id":"orderby","type":"string"}},"factoryproductlist":{"tag":"fieldset","attributes":{"id":"factoryproductlist","child-field":"","iscascade":"false","relation":"n","fullclassname":"","from":"factoryproductinfo","type":"string","parent-field":"","from-type":"context"},"fields":{"total":{"tag":"field","attributes":{"id":"total","type":"string"}},"factoryname":{"tag":"field","attributes":{"id":"factoryname","type":"string"}},"price":{"tag":"field","attributes":{"id":"price","type":"string"}},"currtype":{"tag":"field","attributes":{"id":"currtype","type":"string"}},"pk_factory":{"tag":"field","attributes":{"id":"pk_factory","type":"string"}},"cprodcostid":{"tag":"field","attributes":{"id":"cprodcostid","type":"string"}},"quantity":{"tag":"field","attributes":{"id":"quantity","type":"string"}},"measdoc":{"tag":"field","attributes":{"id":"measdoc","type":"string"}}},"namespace":"com.ump.productquery"},"productname":{"tag":"field","attributes":{"id":"productname","type":"string"}}},"namespace":"com.ump.productquery"});
}
function com$ump$productquery$cm_mutifactoryqueryctxEntity$get_pk_material(){
    return this.field('pk_material');
}
function com$ump$productquery$cm_mutifactoryqueryctxEntity$set_pk_material(value){
    return this.field('pk_material',value);
}
function com$ump$productquery$cm_mutifactoryqueryctxEntity$get_productname(){
    return this.field('productname');
}
function com$ump$productquery$cm_mutifactoryqueryctxEntity$set_productname(value){
    return this.field('productname',value);
}
function com$ump$productquery$cm_mutifactoryqueryctxEntity$get_pk_accperiodmonth(){
    return this.field('pk_accperiodmonth');
}
function com$ump$productquery$cm_mutifactoryqueryctxEntity$set_pk_accperiodmonth(value){
    return this.field('pk_accperiodmonth',value);
}
function com$ump$productquery$cm_mutifactoryqueryctxEntity$get_yearmonth(){
    return this.field('yearmonth');
}
function com$ump$productquery$cm_mutifactoryqueryctxEntity$set_yearmonth(value){
    return this.field('yearmonth',value);
}
function com$ump$productquery$cm_mutifactoryqueryctxEntity$get_factoryproductlist(){
    return this.field('factoryproductlist');
}
function com$ump$productquery$cm_mutifactoryqueryctxEntity$set_factoryproductlist(value){
    return this.field('factoryproductlist',value);
}
function com$ump$productquery$cm_mutifactoryqueryctxEntity$get_orderby(){
    return this.field('orderby');
}
function com$ump$productquery$cm_mutifactoryqueryctxEntity$set_orderby(value){
    return this.field('orderby',value);
}
function com$ump$productquery$cm_mutifactoryqueryctxEntity$get_refresult(){
    return this.field('refresult');
}
function com$ump$productquery$cm_mutifactoryqueryctxEntity$set_refresult(value){
    return this.field('refresult',value);
}
com.ump.productquery.cm_mutifactoryqueryctxEntity.prototype = {
    get_pk_material : com$ump$productquery$cm_mutifactoryqueryctxEntity$get_pk_material,
    set_pk_material : com$ump$productquery$cm_mutifactoryqueryctxEntity$get_pk_material,
    get_productname : com$ump$productquery$cm_mutifactoryqueryctxEntity$get_productname,
    set_productname : com$ump$productquery$cm_mutifactoryqueryctxEntity$get_productname,
    get_pk_accperiodmonth : com$ump$productquery$cm_mutifactoryqueryctxEntity$get_pk_accperiodmonth,
    set_pk_accperiodmonth : com$ump$productquery$cm_mutifactoryqueryctxEntity$get_pk_accperiodmonth,
    get_yearmonth : com$ump$productquery$cm_mutifactoryqueryctxEntity$get_yearmonth,
    set_yearmonth : com$ump$productquery$cm_mutifactoryqueryctxEntity$get_yearmonth,
    get_factoryproductlist : com$ump$productquery$cm_mutifactoryqueryctxEntity$get_factoryproductlist,
    set_factoryproductlist : com$ump$productquery$cm_mutifactoryqueryctxEntity$get_factoryproductlist,
    get_orderby : com$ump$productquery$cm_mutifactoryqueryctxEntity$get_orderby,
    set_orderby : com$ump$productquery$cm_mutifactoryqueryctxEntity$get_orderby,
    get_refresult : com$ump$productquery$cm_mutifactoryqueryctxEntity$get_refresult,
    set_refresult : com$ump$productquery$cm_mutifactoryqueryctxEntity$get_refresult
}
com.ump.productquery.cm_mutifactoryqueryctxEntity.registerClass('com.ump.productquery.cm_mutifactoryqueryctxEntity',UMP.UI.Mvc.Entity);
