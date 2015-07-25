Type.registerNamespace('com.ump.productquery');
com.ump.productquery.cm_accountperiodctx = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.cm_accountperiodctx.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$cm_accountperiodctx$get_yearlist(){
    return this.get('yearlist');
}
function com$ump$productquery$cm_accountperiodctx$set_yearlist(value){
    return this.set('yearlist',value);
}
com.ump.productquery.cm_accountperiodctx.prototype = {
    get_yearlist : com$ump$productquery$cm_accountperiodctx$get_yearlist,
    set_yearlist : com$ump$productquery$cm_accountperiodctx$get_yearlist
}
com.ump.productquery.cm_accountperiodctx.registerClass('com.ump.productquery.cm_accountperiodctx',UMP.UI.Mvc.Context);

Type.registerNamespace('com.ump.productquery');
com.ump.productquery.yearlistctx = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.yearlistctx.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$yearlistctx$get_bd_accperiodlist(){
    return this.get('bd_accperiodlist');
}
function com$ump$productquery$yearlistctx$set_bd_accperiodlist(value){
    return this.set('bd_accperiodlist',value);
}
function com$ump$productquery$yearlistctx$get_year(){
    return this.get('year');
}
function com$ump$productquery$yearlistctx$set_year(value){
    return this.set('year',value);
}
com.ump.productquery.yearlistctx.prototype = {
    get_bd_accperiodlist : com$ump$productquery$yearlistctx$get_bd_accperiodlist,
    set_bd_accperiodlist : com$ump$productquery$yearlistctx$get_bd_accperiodlist,
    get_year : com$ump$productquery$yearlistctx$get_year,
    set_year : com$ump$productquery$yearlistctx$get_year
}
com.ump.productquery.yearlistctx.registerClass('com.ump.productquery.yearlistctx',UMP.UI.Mvc.Context);

Type.registerNamespace('com.ump.productquery');
com.ump.productquery.bd_accperiod = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.bd_accperiod.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$bd_accperiod$get_pk_accperiodmonth(){
    return this.get('pk_accperiodmonth');
}
function com$ump$productquery$bd_accperiod$set_pk_accperiodmonth(value){
    return this.set('pk_accperiodmonth',value);
}
function com$ump$productquery$bd_accperiod$get_yearmonth(){
    return this.get('yearmonth');
}
function com$ump$productquery$bd_accperiod$set_yearmonth(value){
    return this.set('yearmonth',value);
}
function com$ump$productquery$bd_accperiod$get_checked(){
    return this.get('checked');
}
function com$ump$productquery$bd_accperiod$set_checked(value){
    return this.set('checked',value);
}
com.ump.productquery.bd_accperiod.prototype = {
    get_pk_accperiodmonth : com$ump$productquery$bd_accperiod$get_pk_accperiodmonth,
    set_pk_accperiodmonth : com$ump$productquery$bd_accperiod$get_pk_accperiodmonth,
    get_yearmonth : com$ump$productquery$bd_accperiod$get_yearmonth,
    set_yearmonth : com$ump$productquery$bd_accperiod$get_yearmonth,
    get_checked : com$ump$productquery$bd_accperiod$get_checked,
    set_checked : com$ump$productquery$bd_accperiod$get_checked
}
com.ump.productquery.bd_accperiod.registerClass('com.ump.productquery.bd_accperiod',UMP.UI.Mvc.Context);

