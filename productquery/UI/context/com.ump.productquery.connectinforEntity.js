Type.registerNamespace('com.ump.productquery');
com.ump.productquery.connectinforEntity = function(tag) {
    //Step 1：call base method and initialize the define of context
    com.ump.productquery.connectinforEntity.initializeBase(this,[tag]);
    $um$initEntity(this, "connectinfor", {"tag":"context","attributes":{"id":"connectinfor","iscascade":"false","from-type":"mbe","filter":""},"fields":{"port":{"tag":"field","attributes":{"id":"port","type":"string"}},"ishttps":{"tag":"field","attributes":{"id":"ishttps","type":"string"}},"ip":{"tag":"field","attributes":{"id":"ip","type":"string"}}},"namespace":"com.ump.productquery"});
}
function com$ump$productquery$connectinforEntity$get_ip(){
    return this.field('ip');
}
function com$ump$productquery$connectinforEntity$set_ip(value){
    return this.field('ip',value);
}
function com$ump$productquery$connectinforEntity$get_port(){
    return this.field('port');
}
function com$ump$productquery$connectinforEntity$set_port(value){
    return this.field('port',value);
}
function com$ump$productquery$connectinforEntity$get_ishttps(){
    return this.field('ishttps');
}
function com$ump$productquery$connectinforEntity$set_ishttps(value){
    return this.field('ishttps',value);
}
com.ump.productquery.connectinforEntity.prototype = {
    get_ip : com$ump$productquery$connectinforEntity$get_ip,
    set_ip : com$ump$productquery$connectinforEntity$get_ip,
    get_port : com$ump$productquery$connectinforEntity$get_port,
    set_port : com$ump$productquery$connectinforEntity$get_port,
    get_ishttps : com$ump$productquery$connectinforEntity$get_ishttps,
    set_ishttps : com$ump$productquery$connectinforEntity$get_ishttps
}
com.ump.productquery.connectinforEntity.registerClass('com.ump.productquery.connectinforEntity',UMP.UI.Mvc.Entity);
