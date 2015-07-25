Type.registerNamespace('com.ump.productquery');
com.ump.productquery.mutproductqueryctxEntity = function(tag) {
    //Step 1：call base method and initialize the define of context
    com.ump.productquery.mutproductqueryctxEntity.initializeBase(this,[tag]);
    $um$initEntity(this, "mutproductqueryctx", {"tag":"context","attributes":{"id":"mutproductqueryctx","iscascade":"false","from-type":"context","filter":""},"fields":{"factoryname":{"tag":"field","attributes":{"id":"factoryname","type":"string"}},"productlist":{"tag":"fieldset","attributes":{"id":"productlist","child-field":"","iscascade":"false","relation":"n","fullclassname":"","from":"productinfo","type":"string","parent-field":"","from-type":"context"},"fields":{"total":{"tag":"field","attributes":{"id":"total","type":"string"}},"mesadoc":{"tag":"field","attributes":{"id":"mesadoc","type":"string"}},"price":{"tag":"field","attributes":{"id":"price","type":"string"}},"currentState":{"tag":"field","attributes":{"id":"currentState","type":"string"}},"pk_material":{"tag":"field","attributes":{"id":"pk_material","type":"string"}},"currtype":{"tag":"field","attributes":{"id":"currtype","type":"string"}},"name":{"tag":"field","attributes":{"id":"name","type":"string"}},"quantity":{"tag":"field","attributes":{"id":"quantity","type":"string"}},"code":{"tag":"field","attributes":{"id":"code","type":"string"}},"iconsrc":{"tag":"field","attributes":{"id":"iconsrc","type":"string"}}},"namespace":"com.ump.productquery"},"yearmonth":{"tag":"field","attributes":{"id":"yearmonth","type":"string"}},"orderbytype":{"tag":"field","attributes":{"id":"orderbytype","type":"string"}},"factorycode":{"tag":"field","attributes":{"id":"factorycode","type":"string"}},"pk_accperiodmonth":{"tag":"field","attributes":{"id":"pk_accperiodmonth","type":"string"}},"pk_factory":{"tag":"field","attributes":{"id":"pk_factory","type":"string"}},"displaytype":{"tag":"field","attributes":{"id":"displaytype","type":"string"}},"orderby":{"tag":"field","attributes":{"id":"orderby","type":"string"}}},"namespace":"com.ump.productquery"});
}
function com$ump$productquery$mutproductqueryctxEntity$get_productlist(){
    return this.field('productlist');
}
function com$ump$productquery$mutproductqueryctxEntity$set_productlist(value){
    return this.field('productlist',value);
}
function com$ump$productquery$mutproductqueryctxEntity$get_pk_factory(){
    return this.field('pk_factory');
}
function com$ump$productquery$mutproductqueryctxEntity$set_pk_factory(value){
    return this.field('pk_factory',value);
}
function com$ump$productquery$mutproductqueryctxEntity$get_yearmonth(){
    return this.field('yearmonth');
}
function com$ump$productquery$mutproductqueryctxEntity$set_yearmonth(value){
    return this.field('yearmonth',value);
}
function com$ump$productquery$mutproductqueryctxEntity$get_factoryname(){
    return this.field('factoryname');
}
function com$ump$productquery$mutproductqueryctxEntity$set_factoryname(value){
    return this.field('factoryname',value);
}
function com$ump$productquery$mutproductqueryctxEntity$get_factorycode(){
    return this.field('factorycode');
}
function com$ump$productquery$mutproductqueryctxEntity$set_factorycode(value){
    return this.field('factorycode',value);
}
function com$ump$productquery$mutproductqueryctxEntity$get_pk_accperiodmonth(){
    return this.field('pk_accperiodmonth');
}
function com$ump$productquery$mutproductqueryctxEntity$set_pk_accperiodmonth(value){
    return this.field('pk_accperiodmonth',value);
}
function com$ump$productquery$mutproductqueryctxEntity$get_orderby(){
    return this.field('orderby');
}
function com$ump$productquery$mutproductqueryctxEntity$set_orderby(value){
    return this.field('orderby',value);
}
function com$ump$productquery$mutproductqueryctxEntity$get_displaytype(){
    return this.field('displaytype');
}
function com$ump$productquery$mutproductqueryctxEntity$set_displaytype(value){
    return this.field('displaytype',value);
}
function com$ump$productquery$mutproductqueryctxEntity$get_orderbytype(){
    return this.field('orderbytype');
}
function com$ump$productquery$mutproductqueryctxEntity$set_orderbytype(value){
    return this.field('orderbytype',value);
}
com.ump.productquery.mutproductqueryctxEntity.prototype = {
    get_productlist : com$ump$productquery$mutproductqueryctxEntity$get_productlist,
    set_productlist : com$ump$productquery$mutproductqueryctxEntity$get_productlist,
    get_pk_factory : com$ump$productquery$mutproductqueryctxEntity$get_pk_factory,
    set_pk_factory : com$ump$productquery$mutproductqueryctxEntity$get_pk_factory,
    get_yearmonth : com$ump$productquery$mutproductqueryctxEntity$get_yearmonth,
    set_yearmonth : com$ump$productquery$mutproductqueryctxEntity$get_yearmonth,
    get_factoryname : com$ump$productquery$mutproductqueryctxEntity$get_factoryname,
    set_factoryname : com$ump$productquery$mutproductqueryctxEntity$get_factoryname,
    get_factorycode : com$ump$productquery$mutproductqueryctxEntity$get_factorycode,
    set_factorycode : com$ump$productquery$mutproductqueryctxEntity$get_factorycode,
    get_pk_accperiodmonth : com$ump$productquery$mutproductqueryctxEntity$get_pk_accperiodmonth,
    set_pk_accperiodmonth : com$ump$productquery$mutproductqueryctxEntity$get_pk_accperiodmonth,
    get_orderby : com$ump$productquery$mutproductqueryctxEntity$get_orderby,
    set_orderby : com$ump$productquery$mutproductqueryctxEntity$get_orderby,
    get_displaytype : com$ump$productquery$mutproductqueryctxEntity$get_displaytype,
    set_displaytype : com$ump$productquery$mutproductqueryctxEntity$get_displaytype,
    get_orderbytype : com$ump$productquery$mutproductqueryctxEntity$get_orderbytype,
    set_orderbytype : com$ump$productquery$mutproductqueryctxEntity$get_orderbytype
}
com.ump.productquery.mutproductqueryctxEntity.registerClass('com.ump.productquery.mutproductqueryctxEntity',UMP.UI.Mvc.Entity);
