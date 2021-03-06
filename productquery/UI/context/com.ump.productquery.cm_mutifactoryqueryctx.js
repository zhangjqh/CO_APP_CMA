Type.registerNamespace('com.ump.productquery');
com.ump.productquery.cm_mutifactoryqueryctx = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.cm_mutifactoryqueryctx.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$cm_mutifactoryqueryctx$get_pk_material(){
    return this.get('pk_material');
}
function com$ump$productquery$cm_mutifactoryqueryctx$set_pk_material(value){
    return this.set('pk_material',value);
}
function com$ump$productquery$cm_mutifactoryqueryctx$get_productname(){
    return this.get('productname');
}
function com$ump$productquery$cm_mutifactoryqueryctx$set_productname(value){
    return this.set('productname',value);
}
function com$ump$productquery$cm_mutifactoryqueryctx$get_pk_accperiodmonth(){
    return this.get('pk_accperiodmonth');
}
function com$ump$productquery$cm_mutifactoryqueryctx$set_pk_accperiodmonth(value){
    return this.set('pk_accperiodmonth',value);
}
function com$ump$productquery$cm_mutifactoryqueryctx$get_yearmonth(){
    return this.get('yearmonth');
}
function com$ump$productquery$cm_mutifactoryqueryctx$set_yearmonth(value){
    return this.set('yearmonth',value);
}
function com$ump$productquery$cm_mutifactoryqueryctx$get_factoryproductlist(){
    return this.get('factoryproductlist');
}
function com$ump$productquery$cm_mutifactoryqueryctx$set_factoryproductlist(value){
    return this.set('factoryproductlist',value);
}
function com$ump$productquery$cm_mutifactoryqueryctx$get_orderby(){
    return this.get('orderby');
}
function com$ump$productquery$cm_mutifactoryqueryctx$set_orderby(value){
    return this.set('orderby',value);
}
function com$ump$productquery$cm_mutifactoryqueryctx$get_refresult(){
    return this.get('refresult');
}
function com$ump$productquery$cm_mutifactoryqueryctx$set_refresult(value){
    return this.set('refresult',value);
}
com.ump.productquery.cm_mutifactoryqueryctx.prototype = {
    get_pk_material : com$ump$productquery$cm_mutifactoryqueryctx$get_pk_material,
    set_pk_material : com$ump$productquery$cm_mutifactoryqueryctx$get_pk_material,
    get_productname : com$ump$productquery$cm_mutifactoryqueryctx$get_productname,
    set_productname : com$ump$productquery$cm_mutifactoryqueryctx$get_productname,
    get_pk_accperiodmonth : com$ump$productquery$cm_mutifactoryqueryctx$get_pk_accperiodmonth,
    set_pk_accperiodmonth : com$ump$productquery$cm_mutifactoryqueryctx$get_pk_accperiodmonth,
    get_yearmonth : com$ump$productquery$cm_mutifactoryqueryctx$get_yearmonth,
    set_yearmonth : com$ump$productquery$cm_mutifactoryqueryctx$get_yearmonth,
    get_factoryproductlist : com$ump$productquery$cm_mutifactoryqueryctx$get_factoryproductlist,
    set_factoryproductlist : com$ump$productquery$cm_mutifactoryqueryctx$get_factoryproductlist,
    get_orderby : com$ump$productquery$cm_mutifactoryqueryctx$get_orderby,
    set_orderby : com$ump$productquery$cm_mutifactoryqueryctx$get_orderby,
    get_refresult : com$ump$productquery$cm_mutifactoryqueryctx$get_refresult,
    set_refresult : com$ump$productquery$cm_mutifactoryqueryctx$get_refresult
}
com.ump.productquery.cm_mutifactoryqueryctx.registerClass('com.ump.productquery.cm_mutifactoryqueryctx',UMP.UI.Mvc.Context);

Type.registerNamespace('com.ump.productquery');
com.ump.productquery.factoryproductinfo = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.factoryproductinfo.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$factoryproductinfo$get_factoryname(){
    return this.get('factoryname');
}
function com$ump$productquery$factoryproductinfo$set_factoryname(value){
    return this.set('factoryname',value);
}
function com$ump$productquery$factoryproductinfo$get_pk_factory(){
    return this.get('pk_factory');
}
function com$ump$productquery$factoryproductinfo$set_pk_factory(value){
    return this.set('pk_factory',value);
}
function com$ump$productquery$factoryproductinfo$get_quantity(){
    return this.get('quantity');
}
function com$ump$productquery$factoryproductinfo$set_quantity(value){
    return this.set('quantity',value);
}
function com$ump$productquery$factoryproductinfo$get_price(){
    return this.get('price');
}
function com$ump$productquery$factoryproductinfo$set_price(value){
    return this.set('price',value);
}
function com$ump$productquery$factoryproductinfo$get_total(){
    return this.get('total');
}
function com$ump$productquery$factoryproductinfo$set_total(value){
    return this.set('total',value);
}
function com$ump$productquery$factoryproductinfo$get_measdoc(){
    return this.get('measdoc');
}
function com$ump$productquery$factoryproductinfo$set_measdoc(value){
    return this.set('measdoc',value);
}
function com$ump$productquery$factoryproductinfo$get_currtype(){
    return this.get('currtype');
}
function com$ump$productquery$factoryproductinfo$set_currtype(value){
    return this.set('currtype',value);
}
function com$ump$productquery$factoryproductinfo$get_cprodcostid(){
    return this.get('cprodcostid');
}
function com$ump$productquery$factoryproductinfo$set_cprodcostid(value){
    return this.set('cprodcostid',value);
}
com.ump.productquery.factoryproductinfo.prototype = {
    get_factoryname : com$ump$productquery$factoryproductinfo$get_factoryname,
    set_factoryname : com$ump$productquery$factoryproductinfo$get_factoryname,
    get_pk_factory : com$ump$productquery$factoryproductinfo$get_pk_factory,
    set_pk_factory : com$ump$productquery$factoryproductinfo$get_pk_factory,
    get_quantity : com$ump$productquery$factoryproductinfo$get_quantity,
    set_quantity : com$ump$productquery$factoryproductinfo$get_quantity,
    get_price : com$ump$productquery$factoryproductinfo$get_price,
    set_price : com$ump$productquery$factoryproductinfo$get_price,
    get_total : com$ump$productquery$factoryproductinfo$get_total,
    set_total : com$ump$productquery$factoryproductinfo$get_total,
    get_measdoc : com$ump$productquery$factoryproductinfo$get_measdoc,
    set_measdoc : com$ump$productquery$factoryproductinfo$get_measdoc,
    get_currtype : com$ump$productquery$factoryproductinfo$get_currtype,
    set_currtype : com$ump$productquery$factoryproductinfo$get_currtype,
    get_cprodcostid : com$ump$productquery$factoryproductinfo$get_cprodcostid,
    set_cprodcostid : com$ump$productquery$factoryproductinfo$get_cprodcostid
}
com.ump.productquery.factoryproductinfo.registerClass('com.ump.productquery.factoryproductinfo',UMP.UI.Mvc.Context);

