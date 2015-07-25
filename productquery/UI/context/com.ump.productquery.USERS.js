Type.registerNamespace('com.ump.productquery');
com.ump.productquery.USERS = function(id, entity, json) {
    //Step 1：call base method and initialize context object
    com.ump.productquery.USERS.initializeBase(this,[id, entity, json]);
    
}
function com$ump$productquery$USERS$get_userName(){
    return this.get('userName');
}
function com$ump$productquery$USERS$set_userName(value){
    return this.set('userName',value);
}
function com$ump$productquery$USERS$get_passWord(){
    return this.get('passWord');
}
function com$ump$productquery$USERS$set_passWord(value){
    return this.set('passWord',value);
}
function com$ump$productquery$USERS$get_ishttps(){
    return this.get('ishttps');
}
function com$ump$productquery$USERS$set_ishttps(value){
    return this.set('ishttps',value);
}
function com$ump$productquery$USERS$get_autologin(){
    return this.get('autologin');
}
function com$ump$productquery$USERS$set_autologin(value){
    return this.set('autologin',value);
}
function com$ump$productquery$USERS$get_ip(){
    return this.get('ip');
}
function com$ump$productquery$USERS$set_ip(value){
    return this.set('ip',value);
}
function com$ump$productquery$USERS$get_port(){
    return this.get('port');
}
function com$ump$productquery$USERS$set_port(value){
    return this.set('port',value);
}
com.ump.productquery.USERS.prototype = {
    get_userName : com$ump$productquery$USERS$get_userName,
    set_userName : com$ump$productquery$USERS$get_userName,
    get_passWord : com$ump$productquery$USERS$get_passWord,
    set_passWord : com$ump$productquery$USERS$get_passWord,
    get_ishttps : com$ump$productquery$USERS$get_ishttps,
    set_ishttps : com$ump$productquery$USERS$get_ishttps,
    get_autologin : com$ump$productquery$USERS$get_autologin,
    set_autologin : com$ump$productquery$USERS$get_autologin,
    get_ip : com$ump$productquery$USERS$get_ip,
    set_ip : com$ump$productquery$USERS$get_ip,
    get_port : com$ump$productquery$USERS$get_port,
    set_port : com$ump$productquery$USERS$get_port
}
com.ump.productquery.USERS.registerClass('com.ump.productquery.USERS',UMP.UI.Mvc.Context);

