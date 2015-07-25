Type.registerNamespace('com.ump.productquery');
com.ump.productquery.connectinfor = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.connectinfor.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$connectinfor$get_ip(){
    return this.get('ip');
}
function com$ump$productquery$connectinfor$set_ip(value){
    return this.set('ip',value);
}
function com$ump$productquery$connectinfor$get_port(){
    return this.get('port');
}
function com$ump$productquery$connectinfor$set_port(value){
    return this.set('port',value);
}
function com$ump$productquery$connectinfor$get_ishttps(){
    return this.get('ishttps');
}
function com$ump$productquery$connectinfor$set_ishttps(value){
    return this.set('ishttps',value);
}
com.ump.productquery.connectinfor.prototype = {
    get_ip : com$ump$productquery$connectinfor$get_ip,
    set_ip : com$ump$productquery$connectinfor$get_ip,
    get_port : com$ump$productquery$connectinfor$get_port,
    set_port : com$ump$productquery$connectinfor$get_port,
    get_ishttps : com$ump$productquery$connectinfor$get_ishttps,
    set_ishttps : com$ump$productquery$connectinfor$get_ishttps
}
com.ump.productquery.connectinfor.registerClass('com.ump.productquery.connectinfor',UMP.UI.Mvc.Context);

