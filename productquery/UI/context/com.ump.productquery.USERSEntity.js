Type.registerNamespace('com.ump.productquery');
com.ump.productquery.USERSEntity = function(tag) {
    //Step 1：call base method and initialize the define of context
    com.ump.productquery.USERSEntity.initializeBase(this,[tag]);
    $um$initEntity(this, "USERS", {"tag":"context","attributes":{"id":"USERS","iscascade":"false","from-type":"context","filter":""},"fields":{"port":{"tag":"field","attributes":{"id":"port","type":"string"}},"ishttps":{"tag":"field","attributes":{"id":"ishttps","type":"string"}},"autologin":{"tag":"field","attributes":{"id":"autologin","type":"string"}},"userName":{"tag":"field","attributes":{"id":"userName","type":"string"}},"passWord":{"tag":"field","attributes":{"id":"passWord","type":"string"}},"ip":{"tag":"field","attributes":{"id":"ip","type":"string"}}},"namespace":"com.ump.productquery"});
}
function com$ump$productquery$USERSEntity$get_userName(){
    return this.field('userName');
}
function com$ump$productquery$USERSEntity$set_userName(value){
    return this.field('userName',value);
}
function com$ump$productquery$USERSEntity$get_passWord(){
    return this.field('passWord');
}
function com$ump$productquery$USERSEntity$set_passWord(value){
    return this.field('passWord',value);
}
function com$ump$productquery$USERSEntity$get_ishttps(){
    return this.field('ishttps');
}
function com$ump$productquery$USERSEntity$set_ishttps(value){
    return this.field('ishttps',value);
}
function com$ump$productquery$USERSEntity$get_autologin(){
    return this.field('autologin');
}
function com$ump$productquery$USERSEntity$set_autologin(value){
    return this.field('autologin',value);
}
function com$ump$productquery$USERSEntity$get_ip(){
    return this.field('ip');
}
function com$ump$productquery$USERSEntity$set_ip(value){
    return this.field('ip',value);
}
function com$ump$productquery$USERSEntity$get_port(){
    return this.field('port');
}
function com$ump$productquery$USERSEntity$set_port(value){
    return this.field('port',value);
}
com.ump.productquery.USERSEntity.prototype = {
    get_userName : com$ump$productquery$USERSEntity$get_userName,
    set_userName : com$ump$productquery$USERSEntity$get_userName,
    get_passWord : com$ump$productquery$USERSEntity$get_passWord,
    set_passWord : com$ump$productquery$USERSEntity$get_passWord,
    get_ishttps : com$ump$productquery$USERSEntity$get_ishttps,
    set_ishttps : com$ump$productquery$USERSEntity$get_ishttps,
    get_autologin : com$ump$productquery$USERSEntity$get_autologin,
    set_autologin : com$ump$productquery$USERSEntity$get_autologin,
    get_ip : com$ump$productquery$USERSEntity$get_ip,
    set_ip : com$ump$productquery$USERSEntity$get_ip,
    get_port : com$ump$productquery$USERSEntity$get_port,
    set_port : com$ump$productquery$USERSEntity$get_port
}
com.ump.productquery.USERSEntity.registerClass('com.ump.productquery.USERSEntity',UMP.UI.Mvc.Entity);
