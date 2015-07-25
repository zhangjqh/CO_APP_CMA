Type.registerNamespace('com.ump.productquery');
com.ump.productquery.cm_productctx = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.cm_productctx.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$cm_productctx$get_cmproductlist(){
    return this.get('cmproductlist');
}
function com$ump$productquery$cm_productctx$set_cmproductlist(value){
    return this.set('cmproductlist',value);
}
function com$ump$productquery$cm_productctx$get_searchfield(){
    return this.get('searchfield');
}
function com$ump$productquery$cm_productctx$set_searchfield(value){
    return this.set('searchfield',value);
}
com.ump.productquery.cm_productctx.prototype = {
    get_cmproductlist : com$ump$productquery$cm_productctx$get_cmproductlist,
    set_cmproductlist : com$ump$productquery$cm_productctx$get_cmproductlist,
    get_searchfield : com$ump$productquery$cm_productctx$get_searchfield,
    set_searchfield : com$ump$productquery$cm_productctx$get_searchfield
}
com.ump.productquery.cm_productctx.registerClass('com.ump.productquery.cm_productctx',UMP.UI.Mvc.Context);

Type.registerNamespace('com.ump.productquery');
com.ump.productquery.cmproductlistctx = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.cmproductlistctx.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$cmproductlistctx$get_pk_material(){
    return this.get('pk_material');
}
function com$ump$productquery$cmproductlistctx$set_pk_material(value){
    return this.set('pk_material',value);
}
function com$ump$productquery$cmproductlistctx$get_code(){
    return this.get('code');
}
function com$ump$productquery$cmproductlistctx$set_code(value){
    return this.set('code',value);
}
function com$ump$productquery$cmproductlistctx$get_name(){
    return this.get('name');
}
function com$ump$productquery$cmproductlistctx$set_name(value){
    return this.set('name',value);
}
com.ump.productquery.cmproductlistctx.prototype = {
    get_pk_material : com$ump$productquery$cmproductlistctx$get_pk_material,
    set_pk_material : com$ump$productquery$cmproductlistctx$get_pk_material,
    get_code : com$ump$productquery$cmproductlistctx$get_code,
    set_code : com$ump$productquery$cmproductlistctx$get_code,
    get_name : com$ump$productquery$cmproductlistctx$get_name,
    set_name : com$ump$productquery$cmproductlistctx$get_name
}
com.ump.productquery.cmproductlistctx.registerClass('com.ump.productquery.cmproductlistctx',UMP.UI.Mvc.Context);

