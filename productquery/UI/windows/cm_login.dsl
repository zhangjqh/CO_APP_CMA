<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="cm_login" context="USERS" controller="cm_loginController" namespace="com.ump.productquery">
    <import ref="cm_login.css" type="css"/>
    <action id="loginAction" isDataCollect="true" method="UMService.login" type="nc" contextmapping="none" user="#{userName}" success="openMainview" pass="#{passWord}"/>
    <action id="connectSetting" viewid="com.ump.productquery.Cm_loginconset" callback="setishttps" method="UMView.open" isKeep="true" animation-type="Fade"/>
    <action id="openHTTPS" ishttps="#{ishttps}" callback="loginjs" method="UMService.openHTTPS"/>
    <action port="port" id="setishttps" userName="userName" host="ip" ishttps="ishttps" autologin="autologin" method="UMService.loadConfigure" passWord="passWord"/>
    <action port="port" id="loadconfig" userName="userName" host="ip" ishttps="ishttps" autologin="autologin" callback="openHTTPS" method="UMService.loadConfigure" passWord="passWord"/>
    <action id="saveConfig" userName="#{userName}" autologin="#{autologin}" callback="loginnc" isDataCollect="true" method="UMService.writeConfigure" passWord="#{passWord}"/>
    <action id="openMainview" viewid="com.ump.productquery.Mutproductview" method="UMView.open" from="login" isKeep="false" animation-type="Fade"/>
    <action id="loginjs" method="loginjs"/>
    <action id="loginnc" method="loginnc"/>
    <div id="viewPage0" onload="loadconfig">
        <navigatorbar id="navigatorbar0">
            <input id="button0" type="button"/>
            <label id="label0">登录</label>
            <input id="button1" value="设置连接" onclick="connectSetting" type="button"/> 
        </navigatorbar>
        <input id="textbox0" bindfield="userName" maxlength="256" type="text"/>
        <input id="textbox1" bindfield="passWord" maxlength="256" type="password"/>
        <div id="panel0">
            <label id="label2"/>
            <label id="label1">自动登录</label>
            <switch id="switch0" bindfield="autologin" value="off"/> 
        </div>
        <input id="button2" value="登 录" onclick="saveConfig" type="button"/> 
    </div> 
</window>
