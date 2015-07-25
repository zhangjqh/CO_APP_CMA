Type.registerNamespace('com.ump.productquery');
com.ump.productquery.cm_unitcostctx = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.cm_unitcostctx.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$cm_unitcostctx$get_pk_factory(){
    return this.get('pk_factory');
}
function com$ump$productquery$cm_unitcostctx$set_pk_factory(value){
    return this.set('pk_factory',value);
}
function com$ump$productquery$cm_unitcostctx$get_factoryname(){
    return this.get('factoryname');
}
function com$ump$productquery$cm_unitcostctx$set_factoryname(value){
    return this.set('factoryname',value);
}
function com$ump$productquery$cm_unitcostctx$get_pk_material(){
    return this.get('pk_material');
}
function com$ump$productquery$cm_unitcostctx$set_pk_material(value){
    return this.set('pk_material',value);
}
function com$ump$productquery$cm_unitcostctx$get_productname(){
    return this.get('productname');
}
function com$ump$productquery$cm_unitcostctx$set_productname(value){
    return this.set('productname',value);
}
function com$ump$productquery$cm_unitcostctx$get_pk_accperiodmonth(){
    return this.get('pk_accperiodmonth');
}
function com$ump$productquery$cm_unitcostctx$set_pk_accperiodmonth(value){
    return this.set('pk_accperiodmonth',value);
}
function com$ump$productquery$cm_unitcostctx$get_yearmonth(){
    return this.get('yearmonth');
}
function com$ump$productquery$cm_unitcostctx$set_yearmonth(value){
    return this.set('yearmonth',value);
}
function com$ump$productquery$cm_unitcostctx$get_price(){
    return this.get('price');
}
function com$ump$productquery$cm_unitcostctx$set_price(value){
    return this.set('price',value);
}
function com$ump$productquery$cm_unitcostctx$get_quantity(){
    return this.get('quantity');
}
function com$ump$productquery$cm_unitcostctx$set_quantity(value){
    return this.set('quantity',value);
}
function com$ump$productquery$cm_unitcostctx$get_total(){
    return this.get('total');
}
function com$ump$productquery$cm_unitcostctx$set_total(value){
    return this.set('total',value);
}
function com$ump$productquery$cm_unitcostctx$get_productinfodetails(){
    return this.get('productinfodetails');
}
function com$ump$productquery$cm_unitcostctx$set_productinfodetails(value){
    return this.set('productinfodetails',value);
}
function com$ump$productquery$cm_unitcostctx$get_currtype(){
    return this.get('currtype');
}
function com$ump$productquery$cm_unitcostctx$set_currtype(value){
    return this.set('currtype',value);
}
function com$ump$productquery$cm_unitcostctx$get_mesadoc(){
    return this.get('mesadoc');
}
function com$ump$productquery$cm_unitcostctx$set_mesadoc(value){
    return this.set('mesadoc',value);
}
function com$ump$productquery$cm_unitcostctx$get_concern(){
    return this.get('concern');
}
function com$ump$productquery$cm_unitcostctx$set_concern(value){
    return this.set('concern',value);
}
com.ump.productquery.cm_unitcostctx.prototype = {
    get_pk_factory : com$ump$productquery$cm_unitcostctx$get_pk_factory,
    set_pk_factory : com$ump$productquery$cm_unitcostctx$get_pk_factory,
    get_factoryname : com$ump$productquery$cm_unitcostctx$get_factoryname,
    set_factoryname : com$ump$productquery$cm_unitcostctx$get_factoryname,
    get_pk_material : com$ump$productquery$cm_unitcostctx$get_pk_material,
    set_pk_material : com$ump$productquery$cm_unitcostctx$get_pk_material,
    get_productname : com$ump$productquery$cm_unitcostctx$get_productname,
    set_productname : com$ump$productquery$cm_unitcostctx$get_productname,
    get_pk_accperiodmonth : com$ump$productquery$cm_unitcostctx$get_pk_accperiodmonth,
    set_pk_accperiodmonth : com$ump$productquery$cm_unitcostctx$get_pk_accperiodmonth,
    get_yearmonth : com$ump$productquery$cm_unitcostctx$get_yearmonth,
    set_yearmonth : com$ump$productquery$cm_unitcostctx$get_yearmonth,
    get_price : com$ump$productquery$cm_unitcostctx$get_price,
    set_price : com$ump$productquery$cm_unitcostctx$get_price,
    get_quantity : com$ump$productquery$cm_unitcostctx$get_quantity,
    set_quantity : com$ump$productquery$cm_unitcostctx$get_quantity,
    get_total : com$ump$productquery$cm_unitcostctx$get_total,
    set_total : com$ump$productquery$cm_unitcostctx$get_total,
    get_productinfodetails : com$ump$productquery$cm_unitcostctx$get_productinfodetails,
    set_productinfodetails : com$ump$productquery$cm_unitcostctx$get_productinfodetails,
    get_currtype : com$ump$productquery$cm_unitcostctx$get_currtype,
    set_currtype : com$ump$productquery$cm_unitcostctx$get_currtype,
    get_mesadoc : com$ump$productquery$cm_unitcostctx$get_mesadoc,
    set_mesadoc : com$ump$productquery$cm_unitcostctx$get_mesadoc,
    get_concern : com$ump$productquery$cm_unitcostctx$get_concern,
    set_concern : com$ump$productquery$cm_unitcostctx$get_concern
}
com.ump.productquery.cm_unitcostctx.registerClass('com.ump.productquery.cm_unitcostctx',UMP.UI.Mvc.Context);

Type.registerNamespace('com.ump.productquery');
com.ump.productquery.productinfodetailctx = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.productinfodetailctx.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$productinfodetailctx$get_factorname(){
    return this.get('factorname');
}
function com$ump$productquery$productinfodetailctx$set_factorname(value){
    return this.set('factorname',value);
}
function com$ump$productquery$productinfodetailctx$get_total(){
    return this.get('total');
}
function com$ump$productquery$productinfodetailctx$set_total(value){
    return this.set('total',value);
}
function com$ump$productquery$productinfodetailctx$get_price(){
    return this.get('price');
}
function com$ump$productquery$productinfodetailctx$set_price(value){
    return this.set('price',value);
}
function com$ump$productquery$productinfodetailctx$get_factortype(){
    return this.get('factortype');
}
function com$ump$productquery$productinfodetailctx$set_factortype(value){
    return this.set('factortype',value);
}
function com$ump$productquery$productinfodetailctx$get_factoricon(){
    return this.get('factoricon');
}
function com$ump$productquery$productinfodetailctx$set_factoricon(value){
    return this.set('factoricon',value);
}
function com$ump$productquery$productinfodetailctx$get_detailcurrtype(){
    return this.get('detailcurrtype');
}
function com$ump$productquery$productinfodetailctx$set_detailcurrtype(value){
    return this.set('detailcurrtype',value);
}
com.ump.productquery.productinfodetailctx.prototype = {
    get_factorname : com$ump$productquery$productinfodetailctx$get_factorname,
    set_factorname : com$ump$productquery$productinfodetailctx$get_factorname,
    get_total : com$ump$productquery$productinfodetailctx$get_total,
    set_total : com$ump$productquery$productinfodetailctx$get_total,
    get_price : com$ump$productquery$productinfodetailctx$get_price,
    set_price : com$ump$productquery$productinfodetailctx$get_price,
    get_factortype : com$ump$productquery$productinfodetailctx$get_factortype,
    set_factortype : com$ump$productquery$productinfodetailctx$get_factortype,
    get_factoricon : com$ump$productquery$productinfodetailctx$get_factoricon,
    set_factoricon : com$ump$productquery$productinfodetailctx$get_factoricon,
    get_detailcurrtype : com$ump$productquery$productinfodetailctx$get_detailcurrtype,
    set_detailcurrtype : com$ump$productquery$productinfodetailctx$get_detailcurrtype
}
com.ump.productquery.productinfodetailctx.registerClass('com.ump.productquery.productinfodetailctx',UMP.UI.Mvc.Context);

Type.registerNamespace('com.ump.productquery');
com.ump.productquery.concernctx = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.concernctx.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$concernctx$get_currentState(){
    return this.get('currentState');
}
function com$ump$productquery$concernctx$set_currentState(value){
    return this.set('currentState',value);
}
function com$ump$productquery$concernctx$get_iconsrc(){
    return this.get('iconsrc');
}
function com$ump$productquery$concernctx$set_iconsrc(value){
    return this.set('iconsrc',value);
}
com.ump.productquery.concernctx.prototype = {
    get_currentState : com$ump$productquery$concernctx$get_currentState,
    set_currentState : com$ump$productquery$concernctx$get_currentState,
    get_iconsrc : com$ump$productquery$concernctx$get_iconsrc,
    set_iconsrc : com$ump$productquery$concernctx$get_iconsrc
}
com.ump.productquery.concernctx.registerClass('com.ump.productquery.concernctx',UMP.UI.Mvc.Context);

