Type.registerNamespace('com.ump.productquery');
com.ump.productquery.detailgraphctx = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.detailgraphctx.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$detailgraphctx$get_pk_factory(){
    return this.get('pk_factory');
}
function com$ump$productquery$detailgraphctx$set_pk_factory(value){
    return this.set('pk_factory',value);
}
function com$ump$productquery$detailgraphctx$get_pk_material(){
    return this.get('pk_material');
}
function com$ump$productquery$detailgraphctx$set_pk_material(value){
    return this.set('pk_material',value);
}
function com$ump$productquery$detailgraphctx$get_pk_accperiodmonth(){
    return this.get('pk_accperiodmonth');
}
function com$ump$productquery$detailgraphctx$set_pk_accperiodmonth(value){
    return this.set('pk_accperiodmonth',value);
}
com.ump.productquery.detailgraphctx.prototype = {
    get_pk_factory : com$ump$productquery$detailgraphctx$get_pk_factory,
    set_pk_factory : com$ump$productquery$detailgraphctx$get_pk_factory,
    get_pk_material : com$ump$productquery$detailgraphctx$get_pk_material,
    set_pk_material : com$ump$productquery$detailgraphctx$get_pk_material,
    get_pk_accperiodmonth : com$ump$productquery$detailgraphctx$get_pk_accperiodmonth,
    set_pk_accperiodmonth : com$ump$productquery$detailgraphctx$get_pk_accperiodmonth
}
com.ump.productquery.detailgraphctx.registerClass('com.ump.productquery.detailgraphctx',UMP.UI.Mvc.Context);

