Type.registerNamespace('com.ump.productquery');
com.ump.productquery.mutproductqueryctx = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.mutproductqueryctx.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$mutproductqueryctx$get_productlist(){
    return this.get('productlist');
}
function com$ump$productquery$mutproductqueryctx$set_productlist(value){
    return this.set('productlist',value);
}
function com$ump$productquery$mutproductqueryctx$get_pk_factory(){
    return this.get('pk_factory');
}
function com$ump$productquery$mutproductqueryctx$set_pk_factory(value){
    return this.set('pk_factory',value);
}
function com$ump$productquery$mutproductqueryctx$get_yearmonth(){
    return this.get('yearmonth');
}
function com$ump$productquery$mutproductqueryctx$set_yearmonth(value){
    return this.set('yearmonth',value);
}
function com$ump$productquery$mutproductqueryctx$get_factoryname(){
    return this.get('factoryname');
}
function com$ump$productquery$mutproductqueryctx$set_factoryname(value){
    return this.set('factoryname',value);
}
function com$ump$productquery$mutproductqueryctx$get_factorycode(){
    return this.get('factorycode');
}
function com$ump$productquery$mutproductqueryctx$set_factorycode(value){
    return this.set('factorycode',value);
}
function com$ump$productquery$mutproductqueryctx$get_pk_accperiodmonth(){
    return this.get('pk_accperiodmonth');
}
function com$ump$productquery$mutproductqueryctx$set_pk_accperiodmonth(value){
    return this.set('pk_accperiodmonth',value);
}
function com$ump$productquery$mutproductqueryctx$get_orderby(){
    return this.get('orderby');
}
function com$ump$productquery$mutproductqueryctx$set_orderby(value){
    return this.set('orderby',value);
}
function com$ump$productquery$mutproductqueryctx$get_displaytype(){
    return this.get('displaytype');
}
function com$ump$productquery$mutproductqueryctx$set_displaytype(value){
    return this.set('displaytype',value);
}
function com$ump$productquery$mutproductqueryctx$get_orderbytype(){
    return this.get('orderbytype');
}
function com$ump$productquery$mutproductqueryctx$set_orderbytype(value){
    return this.set('orderbytype',value);
}
com.ump.productquery.mutproductqueryctx.prototype = {
    get_productlist : com$ump$productquery$mutproductqueryctx$get_productlist,
    set_productlist : com$ump$productquery$mutproductqueryctx$get_productlist,
    get_pk_factory : com$ump$productquery$mutproductqueryctx$get_pk_factory,
    set_pk_factory : com$ump$productquery$mutproductqueryctx$get_pk_factory,
    get_yearmonth : com$ump$productquery$mutproductqueryctx$get_yearmonth,
    set_yearmonth : com$ump$productquery$mutproductqueryctx$get_yearmonth,
    get_factoryname : com$ump$productquery$mutproductqueryctx$get_factoryname,
    set_factoryname : com$ump$productquery$mutproductqueryctx$get_factoryname,
    get_factorycode : com$ump$productquery$mutproductqueryctx$get_factorycode,
    set_factorycode : com$ump$productquery$mutproductqueryctx$get_factorycode,
    get_pk_accperiodmonth : com$ump$productquery$mutproductqueryctx$get_pk_accperiodmonth,
    set_pk_accperiodmonth : com$ump$productquery$mutproductqueryctx$get_pk_accperiodmonth,
    get_orderby : com$ump$productquery$mutproductqueryctx$get_orderby,
    set_orderby : com$ump$productquery$mutproductqueryctx$get_orderby,
    get_displaytype : com$ump$productquery$mutproductqueryctx$get_displaytype,
    set_displaytype : com$ump$productquery$mutproductqueryctx$get_displaytype,
    get_orderbytype : com$ump$productquery$mutproductqueryctx$get_orderbytype,
    set_orderbytype : com$ump$productquery$mutproductqueryctx$get_orderbytype
}
com.ump.productquery.mutproductqueryctx.registerClass('com.ump.productquery.mutproductqueryctx',UMP.UI.Mvc.Context);

Type.registerNamespace('com.ump.productquery');
com.ump.productquery.productinfo = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.productinfo.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$productinfo$get_code(){
    return this.get('code');
}
function com$ump$productquery$productinfo$set_code(value){
    return this.set('code',value);
}
function com$ump$productquery$productinfo$get_name(){
    return this.get('name');
}
function com$ump$productquery$productinfo$set_name(value){
    return this.set('name',value);
}
function com$ump$productquery$productinfo$get_price(){
    return this.get('price');
}
function com$ump$productquery$productinfo$set_price(value){
    return this.set('price',value);
}
function com$ump$productquery$productinfo$get_quantity(){
    return this.get('quantity');
}
function com$ump$productquery$productinfo$set_quantity(value){
    return this.set('quantity',value);
}
function com$ump$productquery$productinfo$get_total(){
    return this.get('total');
}
function com$ump$productquery$productinfo$set_total(value){
    return this.set('total',value);
}
function com$ump$productquery$productinfo$get_mesadoc(){
    return this.get('mesadoc');
}
function com$ump$productquery$productinfo$set_mesadoc(value){
    return this.set('mesadoc',value);
}
function com$ump$productquery$productinfo$get_currtype(){
    return this.get('currtype');
}
function com$ump$productquery$productinfo$set_currtype(value){
    return this.set('currtype',value);
}
function com$ump$productquery$productinfo$get_pk_material(){
    return this.get('pk_material');
}
function com$ump$productquery$productinfo$set_pk_material(value){
    return this.set('pk_material',value);
}
function com$ump$productquery$productinfo$get_currentState(){
    return this.get('currentState');
}
function com$ump$productquery$productinfo$set_currentState(value){
    return this.set('currentState',value);
}
function com$ump$productquery$productinfo$get_iconsrc(){
    return this.get('iconsrc');
}
function com$ump$productquery$productinfo$set_iconsrc(value){
    return this.set('iconsrc',value);
}
com.ump.productquery.productinfo.prototype = {
    get_code : com$ump$productquery$productinfo$get_code,
    set_code : com$ump$productquery$productinfo$get_code,
    get_name : com$ump$productquery$productinfo$get_name,
    set_name : com$ump$productquery$productinfo$get_name,
    get_price : com$ump$productquery$productinfo$get_price,
    set_price : com$ump$productquery$productinfo$get_price,
    get_quantity : com$ump$productquery$productinfo$get_quantity,
    set_quantity : com$ump$productquery$productinfo$get_quantity,
    get_total : com$ump$productquery$productinfo$get_total,
    set_total : com$ump$productquery$productinfo$get_total,
    get_mesadoc : com$ump$productquery$productinfo$get_mesadoc,
    set_mesadoc : com$ump$productquery$productinfo$get_mesadoc,
    get_currtype : com$ump$productquery$productinfo$get_currtype,
    set_currtype : com$ump$productquery$productinfo$get_currtype,
    get_pk_material : com$ump$productquery$productinfo$get_pk_material,
    set_pk_material : com$ump$productquery$productinfo$get_pk_material,
    get_currentState : com$ump$productquery$productinfo$get_currentState,
    set_currentState : com$ump$productquery$productinfo$get_currentState,
    get_iconsrc : com$ump$productquery$productinfo$get_iconsrc,
    set_iconsrc : com$ump$productquery$productinfo$get_iconsrc
}
com.ump.productquery.productinfo.registerClass('com.ump.productquery.productinfo',UMP.UI.Mvc.Context);

