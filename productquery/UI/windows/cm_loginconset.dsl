<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="cm_loginconset" context="connectinfor" controller="cm_loginconsetController" namespace="com.ump.productquery">
    <import ref="cm_loginconset.css" type="css"/>
    <action port="#{port}" id="settingSave" host="#{ip}" ishttps="#{ishttps}" callback="closeWindow" isDataCollect="true" method="UMService.writeConfigure"/>
    <action id="closeWindow" resultcode="15" method="UMView.close"/>
    <action port="port" id="loadcnfig" host="ip" ishttps="ishttps" method="UMService.loadConfigure"/>
    <div id="viewPage0" onload="loadcnfig">
        <navigatorbar id="navigatorbar0">
            <label id="label0"/>
            <label id="label2">设置连接</label>
            <label id="label1"/> 
        </navigatorbar>
        <div id="panel0">
            <input id="textbox0" bindfield="ip" maxlength="256" type="text"/>
            <label id="label3"/>
            <input id="textbox1" bindfield="port" min="0.0" type="number"/> 
        </div>
        <div id="panel1">
            <label id="label4"/>
            <label id="label5">启用HTTPS</label>
            <switch id="switch0" bindfield="ishttps" value="off"/> 
        </div>
        <input id="button0" value="保 存" onclick="settingSave" type="button"/> 
    </div> 
</window>
