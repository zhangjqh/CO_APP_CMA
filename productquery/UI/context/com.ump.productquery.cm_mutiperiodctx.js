Type.registerNamespace('com.ump.productquery');
com.ump.productquery.cm_mutiperiodctx = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.cm_mutiperiodctx.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$cm_mutiperiodctx$get_pk_factory(){
    return this.get('pk_factory');
}
function com$ump$productquery$cm_mutiperiodctx$set_pk_factory(value){
    return this.set('pk_factory',value);
}
function com$ump$productquery$cm_mutiperiodctx$get_factoryname(){
    return this.get('factoryname');
}
function com$ump$productquery$cm_mutiperiodctx$set_factoryname(value){
    return this.set('factoryname',value);
}
function com$ump$productquery$cm_mutiperiodctx$get_pk_material(){
    return this.get('pk_material');
}
function com$ump$productquery$cm_mutiperiodctx$set_pk_material(value){
    return this.set('pk_material',value);
}
function com$ump$productquery$cm_mutiperiodctx$get_productname(){
    return this.get('productname');
}
function com$ump$productquery$cm_mutiperiodctx$set_productname(value){
    return this.set('productname',value);
}
function com$ump$productquery$cm_mutiperiodctx$get_periodproductlist(){
    return this.get('periodproductlist');
}
function com$ump$productquery$cm_mutiperiodctx$set_periodproductlist(value){
    return this.set('periodproductlist',value);
}
function com$ump$productquery$cm_mutiperiodctx$get_orderby(){
    return this.get('orderby');
}
function com$ump$productquery$cm_mutiperiodctx$set_orderby(value){
    return this.set('orderby',value);
}
function com$ump$productquery$cm_mutiperiodctx$get_refresult(){
    return this.get('refresult');
}
function com$ump$productquery$cm_mutiperiodctx$set_refresult(value){
    return this.set('refresult',value);
}
com.ump.productquery.cm_mutiperiodctx.prototype = {
    get_pk_factory : com$ump$productquery$cm_mutiperiodctx$get_pk_factory,
    set_pk_factory : com$ump$productquery$cm_mutiperiodctx$get_pk_factory,
    get_factoryname : com$ump$productquery$cm_mutiperiodctx$get_factoryname,
    set_factoryname : com$ump$productquery$cm_mutiperiodctx$get_factoryname,
    get_pk_material : com$ump$productquery$cm_mutiperiodctx$get_pk_material,
    set_pk_material : com$ump$productquery$cm_mutiperiodctx$get_pk_material,
    get_productname : com$ump$productquery$cm_mutiperiodctx$get_productname,
    set_productname : com$ump$productquery$cm_mutiperiodctx$get_productname,
    get_periodproductlist : com$ump$productquery$cm_mutiperiodctx$get_periodproductlist,
    set_periodproductlist : com$ump$productquery$cm_mutiperiodctx$get_periodproductlist,
    get_orderby : com$ump$productquery$cm_mutiperiodctx$get_orderby,
    set_orderby : com$ump$productquery$cm_mutiperiodctx$get_orderby,
    get_refresult : com$ump$productquery$cm_mutiperiodctx$get_refresult,
    set_refresult : com$ump$productquery$cm_mutiperiodctx$get_refresult
}
com.ump.productquery.cm_mutiperiodctx.registerClass('com.ump.productquery.cm_mutiperiodctx',UMP.UI.Mvc.Context);

Type.registerNamespace('com.ump.productquery');
com.ump.productquery.periodproductinfo = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.periodproductinfo.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$periodproductinfo$get_pk_accperiodmonth(){
    return this.get('pk_accperiodmonth');
}
function com$ump$productquery$periodproductinfo$set_pk_accperiodmonth(value){
    return this.set('pk_accperiodmonth',value);
}
function com$ump$productquery$periodproductinfo$get_yearmonth(){
    return this.get('yearmonth');
}
function com$ump$productquery$periodproductinfo$set_yearmonth(value){
    return this.set('yearmonth',value);
}
function com$ump$productquery$periodproductinfo$get_price(){
    return this.get('price');
}
function com$ump$productquery$periodproductinfo$set_price(value){
    return this.set('price',value);
}
function com$ump$productquery$periodproductinfo$get_quantity(){
    return this.get('quantity');
}
function com$ump$productquery$periodproductinfo$set_quantity(value){
    return this.set('quantity',value);
}
function com$ump$productquery$periodproductinfo$get_total(){
    return this.get('total');
}
function com$ump$productquery$periodproductinfo$set_total(value){
    return this.set('total',value);
}
function com$ump$productquery$periodproductinfo$get_currtype(){
    return this.get('currtype');
}
function com$ump$productquery$periodproductinfo$set_currtype(value){
    return this.set('currtype',value);
}
function com$ump$productquery$periodproductinfo$get_measdoc(){
    return this.get('measdoc');
}
function com$ump$productquery$periodproductinfo$set_measdoc(value){
    return this.set('measdoc',value);
}
function com$ump$productquery$periodproductinfo$get_cprodcostid(){
    return this.get('cprodcostid');
}
function com$ump$productquery$periodproductinfo$set_cprodcostid(value){
    return this.set('cprodcostid',value);
}
com.ump.productquery.periodproductinfo.prototype = {
    get_pk_accperiodmonth : com$ump$productquery$periodproductinfo$get_pk_accperiodmonth,
    set_pk_accperiodmonth : com$ump$productquery$periodproductinfo$get_pk_accperiodmonth,
    get_yearmonth : com$ump$productquery$periodproductinfo$get_yearmonth,
    set_yearmonth : com$ump$productquery$periodproductinfo$get_yearmonth,
    get_price : com$ump$productquery$periodproductinfo$get_price,
    set_price : com$ump$productquery$periodproductinfo$get_price,
    get_quantity : com$ump$productquery$periodproductinfo$get_quantity,
    set_quantity : com$ump$productquery$periodproductinfo$get_quantity,
    get_total : com$ump$productquery$periodproductinfo$get_total,
    set_total : com$ump$productquery$periodproductinfo$get_total,
    get_currtype : com$ump$productquery$periodproductinfo$get_currtype,
    set_currtype : com$ump$productquery$periodproductinfo$get_currtype,
    get_measdoc : com$ump$productquery$periodproductinfo$get_measdoc,
    set_measdoc : com$ump$productquery$periodproductinfo$get_measdoc,
    get_cprodcostid : com$ump$productquery$periodproductinfo$get_cprodcostid,
    set_cprodcostid : com$ump$productquery$periodproductinfo$get_cprodcostid
}
com.ump.productquery.periodproductinfo.registerClass('com.ump.productquery.periodproductinfo',UMP.UI.Mvc.Context);

