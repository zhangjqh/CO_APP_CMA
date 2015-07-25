Type.registerNamespace('com.ump.productquery');
com.ump.productquery.cm_mutiperiodctxEntity = function(tag) {
    //Step 1：call base method and initialize the define of context
    com.ump.productquery.cm_mutiperiodctxEntity.initializeBase(this,[tag]);
    $um$initEntity(this, "cm_mutiperiodctx", {"tag":"context","attributes":{"id":"cm_mutiperiodctx","iscascade":"false","from-type":"context","filter":""},"fields":{"factoryname":{"tag":"field","attributes":{"id":"factoryname","type":"string"}},"refresult":{"tag":"field","attributes":{"id":"refresult","type":"string"}},"periodproductlist":{"tag":"fieldset","attributes":{"id":"periodproductlist","child-field":"","iscascade":"false","relation":"n","fullclassname":"","from":"periodproductinfo","type":"string","parent-field":"","from-type":"context"},"fields":{"total":{"tag":"field","attributes":{"id":"total","type":"string"}},"yearmonth":{"tag":"field","attributes":{"id":"yearmonth","type":"string"}},"price":{"tag":"field","attributes":{"id":"price","type":"string"}},"pk_accperiodmonth":{"tag":"field","attributes":{"id":"pk_accperiodmonth","type":"string"}},"currtype":{"tag":"field","attributes":{"id":"currtype","type":"string"}},"cprodcostid":{"tag":"field","attributes":{"id":"cprodcostid","type":"string"}},"quantity":{"tag":"field","attributes":{"id":"quantity","type":"string"}},"measdoc":{"tag":"field","attributes":{"id":"measdoc","type":"string"}}},"namespace":"com.ump.productquery"},"pk_material":{"tag":"field","attributes":{"id":"pk_material","type":"string"}},"pk_factory":{"tag":"field","attributes":{"id":"pk_factory","type":"string"}},"orderby":{"tag":"field","attributes":{"id":"orderby","type":"string"}},"productname":{"tag":"field","attributes":{"id":"productname","type":"string"}}},"namespace":"com.ump.productquery"});
}
function com$ump$productquery$cm_mutiperiodctxEntity$get_pk_factory(){
    return this.field('pk_factory');
}
function com$ump$productquery$cm_mutiperiodctxEntity$set_pk_factory(value){
    return this.field('pk_factory',value);
}
function com$ump$productquery$cm_mutiperiodctxEntity$get_factoryname(){
    return this.field('factoryname');
}
function com$ump$productquery$cm_mutiperiodctxEntity$set_factoryname(value){
    return this.field('factoryname',value);
}
function com$ump$productquery$cm_mutiperiodctxEntity$get_pk_material(){
    return this.field('pk_material');
}
function com$ump$productquery$cm_mutiperiodctxEntity$set_pk_material(value){
    return this.field('pk_material',value);
}
function com$ump$productquery$cm_mutiperiodctxEntity$get_productname(){
    return this.field('productname');
}
function com$ump$productquery$cm_mutiperiodctxEntity$set_productname(value){
    return this.field('productname',value);
}
function com$ump$productquery$cm_mutiperiodctxEntity$get_periodproductlist(){
    return this.field('periodproductlist');
}
function com$ump$productquery$cm_mutiperiodctxEntity$set_periodproductlist(value){
    return this.field('periodproductlist',value);
}
function com$ump$productquery$cm_mutiperiodctxEntity$get_orderby(){
    return this.field('orderby');
}
function com$ump$productquery$cm_mutiperiodctxEntity$set_orderby(value){
    return this.field('orderby',value);
}
function com$ump$productquery$cm_mutiperiodctxEntity$get_refresult(){
    return this.field('refresult');
}
function com$ump$productquery$cm_mutiperiodctxEntity$set_refresult(value){
    return this.field('refresult',value);
}
com.ump.productquery.cm_mutiperiodctxEntity.prototype = {
    get_pk_factory : com$ump$productquery$cm_mutiperiodctxEntity$get_pk_factory,
    set_pk_factory : com$ump$productquery$cm_mutiperiodctxEntity$get_pk_factory,
    get_factoryname : com$ump$productquery$cm_mutiperiodctxEntity$get_factoryname,
    set_factoryname : com$ump$productquery$cm_mutiperiodctxEntity$get_factoryname,
    get_pk_material : com$ump$productquery$cm_mutiperiodctxEntity$get_pk_material,
    set_pk_material : com$ump$productquery$cm_mutiperiodctxEntity$get_pk_material,
    get_productname : com$ump$productquery$cm_mutiperiodctxEntity$get_productname,
    set_productname : com$ump$productquery$cm_mutiperiodctxEntity$get_productname,
    get_periodproductlist : com$ump$productquery$cm_mutiperiodctxEntity$get_periodproductlist,
    set_periodproductlist : com$ump$productquery$cm_mutiperiodctxEntity$get_periodproductlist,
    get_orderby : com$ump$productquery$cm_mutiperiodctxEntity$get_orderby,
    set_orderby : com$ump$productquery$cm_mutiperiodctxEntity$get_orderby,
    get_refresult : com$ump$productquery$cm_mutiperiodctxEntity$get_refresult,
    set_refresult : com$ump$productquery$cm_mutiperiodctxEntity$get_refresult
}
com.ump.productquery.cm_mutiperiodctxEntity.registerClass('com.ump.productquery.cm_mutiperiodctxEntity',UMP.UI.Mvc.Entity);
