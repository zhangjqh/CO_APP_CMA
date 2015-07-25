Type.registerNamespace('com.ump.productquery');
com.ump.productquery.cm_mutiselectperiodctx = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.cm_mutiselectperiodctx.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$cm_mutiselectperiodctx$get_yearlist(){
    return this.get('yearlist');
}
function com$ump$productquery$cm_mutiselectperiodctx$set_yearlist(value){
    return this.set('yearlist',value);
}
com.ump.productquery.cm_mutiselectperiodctx.prototype = {
    get_yearlist : com$ump$productquery$cm_mutiselectperiodctx$get_yearlist,
    set_yearlist : com$ump$productquery$cm_mutiselectperiodctx$get_yearlist
}
com.ump.productquery.cm_mutiselectperiodctx.registerClass('com.ump.productquery.cm_mutiselectperiodctx',UMP.UI.Mvc.Context);

Type.registerNamespace('com.ump.productquery');
com.ump.productquery.cm_oneyearctx = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.cm_oneyearctx.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$cm_oneyearctx$get_year(){
    return this.get('year');
}
function com$ump$productquery$cm_oneyearctx$set_year(value){
    return this.set('year',value);
}
function com$ump$productquery$cm_oneyearctx$get_yearmonthlist(){
    return this.get('yearmonthlist');
}
function com$ump$productquery$cm_oneyearctx$set_yearmonthlist(value){
    return this.set('yearmonthlist',value);
}
function com$ump$productquery$cm_oneyearctx$get_checked(){
    return this.get('checked');
}
function com$ump$productquery$cm_oneyearctx$set_checked(value){
    return this.set('checked',value);
}
com.ump.productquery.cm_oneyearctx.prototype = {
    get_year : com$ump$productquery$cm_oneyearctx$get_year,
    set_year : com$ump$productquery$cm_oneyearctx$get_year,
    get_yearmonthlist : com$ump$productquery$cm_oneyearctx$get_yearmonthlist,
    set_yearmonthlist : com$ump$productquery$cm_oneyearctx$get_yearmonthlist,
    get_checked : com$ump$productquery$cm_oneyearctx$get_checked,
    set_checked : com$ump$productquery$cm_oneyearctx$get_checked
}
com.ump.productquery.cm_oneyearctx.registerClass('com.ump.productquery.cm_oneyearctx',UMP.UI.Mvc.Context);

Type.registerNamespace('com.ump.productquery');
com.ump.productquery.cm_yearmonthctx = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.cm_yearmonthctx.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$cm_yearmonthctx$get_yearmonth(){
    return this.get('yearmonth');
}
function com$ump$productquery$cm_yearmonthctx$set_yearmonth(value){
    return this.set('yearmonth',value);
}
function com$ump$productquery$cm_yearmonthctx$get_pk_accperiodmonth(){
    return this.get('pk_accperiodmonth');
}
function com$ump$productquery$cm_yearmonthctx$set_pk_accperiodmonth(value){
    return this.set('pk_accperiodmonth',value);
}
function com$ump$productquery$cm_yearmonthctx$get_checked(){
    return this.get('checked');
}
function com$ump$productquery$cm_yearmonthctx$set_checked(value){
    return this.set('checked',value);
}
com.ump.productquery.cm_yearmonthctx.prototype = {
    get_yearmonth : com$ump$productquery$cm_yearmonthctx$get_yearmonth,
    set_yearmonth : com$ump$productquery$cm_yearmonthctx$get_yearmonth,
    get_pk_accperiodmonth : com$ump$productquery$cm_yearmonthctx$get_pk_accperiodmonth,
    set_pk_accperiodmonth : com$ump$productquery$cm_yearmonthctx$get_pk_accperiodmonth,
    get_checked : com$ump$productquery$cm_yearmonthctx$get_checked,
    set_checked : com$ump$productquery$cm_yearmonthctx$get_checked
}
com.ump.productquery.cm_yearmonthctx.registerClass('com.ump.productquery.cm_yearmonthctx',UMP.UI.Mvc.Context);

