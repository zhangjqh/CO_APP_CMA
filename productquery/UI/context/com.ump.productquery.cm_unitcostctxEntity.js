Type.registerNamespace('com.ump.productquery');
com.ump.productquery.cm_unitcostctxEntity = function(tag) {
    //Step 1：call base method and initialize the define of context
    com.ump.productquery.cm_unitcostctxEntity.initializeBase(this,[tag]);
    $um$initEntity(this, "cm_unitcostctx", {"tag":"context","attributes":{"id":"cm_unitcostctx","iscascade":"false","from-type":"context","filter":""},"fields":{"total":{"tag":"field","attributes":{"id":"total","type":"string"}},"yearmonth":{"tag":"field","attributes":{"id":"yearmonth","type":"string"}},"pk_accperiodmonth":{"tag":"field","attributes":{"id":"pk_accperiodmonth","type":"string"}},"pk_factory":{"tag":"field","attributes":{"id":"pk_factory","type":"string"}},"currtype":{"tag":"field","attributes":{"id":"currtype","type":"string"}},"concern":{"tag":"fieldset","attributes":{"id":"concern","child-field":"","iscascade":"false","relation":"1","fullclassname":"","from":"concernctx","type":"string","parent-field":"","from-type":"context"},"fields":{"currentState":{"tag":"field","attributes":{"id":"currentState","type":"string"}},"iconsrc":{"tag":"field","attributes":{"id":"iconsrc","type":"string"}}},"namespace":"com.ump.productquery"},"factoryname":{"tag":"field","attributes":{"id":"factoryname","type":"string"}},"productinfodetails":{"tag":"fieldset","attributes":{"id":"productinfodetails","child-field":"","iscascade":"false","relation":"n","fullclassname":"","from":"productinfodetailctx","type":"string","parent-field":"","from-type":"context"},"fields":{"total":{"tag":"field","attributes":{"id":"total","type":"string"}},"price":{"tag":"field","attributes":{"id":"price","type":"string"}},"detailcurrtype":{"tag":"field","attributes":{"id":"detailcurrtype","type":"string"}},"factorname":{"tag":"field","attributes":{"id":"factorname","type":"string"}},"factoricon":{"tag":"field","attributes":{"id":"factoricon","type":"string"}},"factortype":{"tag":"field","attributes":{"id":"factortype","type":"string"}}},"namespace":"com.ump.productquery"},"mesadoc":{"tag":"field","attributes":{"id":"mesadoc","type":"string"}},"price":{"tag":"field","attributes":{"id":"price","type":"string"}},"pk_material":{"tag":"field","attributes":{"id":"pk_material","type":"string"}},"quantity":{"tag":"field","attributes":{"id":"quantity","type":"string"}},"productname":{"tag":"field","attributes":{"id":"productname","type":"string"}}},"namespace":"com.ump.productquery"});
}
function com$ump$productquery$cm_unitcostctxEntity$get_pk_factory(){
    return this.field('pk_factory');
}
function com$ump$productquery$cm_unitcostctxEntity$set_pk_factory(value){
    return this.field('pk_factory',value);
}
function com$ump$productquery$cm_unitcostctxEntity$get_factoryname(){
    return this.field('factoryname');
}
function com$ump$productquery$cm_unitcostctxEntity$set_factoryname(value){
    return this.field('factoryname',value);
}
function com$ump$productquery$cm_unitcostctxEntity$get_pk_material(){
    return this.field('pk_material');
}
function com$ump$productquery$cm_unitcostctxEntity$set_pk_material(value){
    return this.field('pk_material',value);
}
function com$ump$productquery$cm_unitcostctxEntity$get_productname(){
    return this.field('productname');
}
function com$ump$productquery$cm_unitcostctxEntity$set_productname(value){
    return this.field('productname',value);
}
function com$ump$productquery$cm_unitcostctxEntity$get_pk_accperiodmonth(){
    return this.field('pk_accperiodmonth');
}
function com$ump$productquery$cm_unitcostctxEntity$set_pk_accperiodmonth(value){
    return this.field('pk_accperiodmonth',value);
}
function com$ump$productquery$cm_unitcostctxEntity$get_yearmonth(){
    return this.field('yearmonth');
}
function com$ump$productquery$cm_unitcostctxEntity$set_yearmonth(value){
    return this.field('yearmonth',value);
}
function com$ump$productquery$cm_unitcostctxEntity$get_price(){
    return this.field('price');
}
function com$ump$productquery$cm_unitcostctxEntity$set_price(value){
    return this.field('price',value);
}
function com$ump$productquery$cm_unitcostctxEntity$get_quantity(){
    return this.field('quantity');
}
function com$ump$productquery$cm_unitcostctxEntity$set_quantity(value){
    return this.field('quantity',value);
}
function com$ump$productquery$cm_unitcostctxEntity$get_total(){
    return this.field('total');
}
function com$ump$productquery$cm_unitcostctxEntity$set_total(value){
    return this.field('total',value);
}
function com$ump$productquery$cm_unitcostctxEntity$get_productinfodetails(){
    return this.field('productinfodetails');
}
function com$ump$productquery$cm_unitcostctxEntity$set_productinfodetails(value){
    return this.field('productinfodetails',value);
}
function com$ump$productquery$cm_unitcostctxEntity$get_currtype(){
    return this.field('currtype');
}
function com$ump$productquery$cm_unitcostctxEntity$set_currtype(value){
    return this.field('currtype',value);
}
function com$ump$productquery$cm_unitcostctxEntity$get_mesadoc(){
    return this.field('mesadoc');
}
function com$ump$productquery$cm_unitcostctxEntity$set_mesadoc(value){
    return this.field('mesadoc',value);
}
function com$ump$productquery$cm_unitcostctxEntity$get_concern(){
    return this.field('concern');
}
function com$ump$productquery$cm_unitcostctxEntity$set_concern(value){
    return this.field('concern',value);
}
com.ump.productquery.cm_unitcostctxEntity.prototype = {
    get_pk_factory : com$ump$productquery$cm_unitcostctxEntity$get_pk_factory,
    set_pk_factory : com$ump$productquery$cm_unitcostctxEntity$get_pk_factory,
    get_factoryname : com$ump$productquery$cm_unitcostctxEntity$get_factoryname,
    set_factoryname : com$ump$productquery$cm_unitcostctxEntity$get_factoryname,
    get_pk_material : com$ump$productquery$cm_unitcostctxEntity$get_pk_material,
    set_pk_material : com$ump$productquery$cm_unitcostctxEntity$get_pk_material,
    get_productname : com$ump$productquery$cm_unitcostctxEntity$get_productname,
    set_productname : com$ump$productquery$cm_unitcostctxEntity$get_productname,
    get_pk_accperiodmonth : com$ump$productquery$cm_unitcostctxEntity$get_pk_accperiodmonth,
    set_pk_accperiodmonth : com$ump$productquery$cm_unitcostctxEntity$get_pk_accperiodmonth,
    get_yearmonth : com$ump$productquery$cm_unitcostctxEntity$get_yearmonth,
    set_yearmonth : com$ump$productquery$cm_unitcostctxEntity$get_yearmonth,
    get_price : com$ump$productquery$cm_unitcostctxEntity$get_price,
    set_price : com$ump$productquery$cm_unitcostctxEntity$get_price,
    get_quantity : com$ump$productquery$cm_unitcostctxEntity$get_quantity,
    set_quantity : com$ump$productquery$cm_unitcostctxEntity$get_quantity,
    get_total : com$ump$productquery$cm_unitcostctxEntity$get_total,
    set_total : com$ump$productquery$cm_unitcostctxEntity$get_total,
    get_productinfodetails : com$ump$productquery$cm_unitcostctxEntity$get_productinfodetails,
    set_productinfodetails : com$ump$productquery$cm_unitcostctxEntity$get_productinfodetails,
    get_currtype : com$ump$productquery$cm_unitcostctxEntity$get_currtype,
    set_currtype : com$ump$productquery$cm_unitcostctxEntity$get_currtype,
    get_mesadoc : com$ump$productquery$cm_unitcostctxEntity$get_mesadoc,
    set_mesadoc : com$ump$productquery$cm_unitcostctxEntity$get_mesadoc,
    get_concern : com$ump$productquery$cm_unitcostctxEntity$get_concern,
    set_concern : com$ump$productquery$cm_unitcostctxEntity$get_concern
}
com.ump.productquery.cm_unitcostctxEntity.registerClass('com.ump.productquery.cm_unitcostctxEntity',UMP.UI.Mvc.Entity);
