<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="Productquery_login" context="USERS" controller="cm_loginController" namespace="com.ump.productquery">
    <import ref="Productquery_login.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <action id="loginAction" isDataCollect="true" method="UMService.login" type="nc" contextmapping="none" user="#{userName}" success="openMainview" pass="#{passWord}"/>
    <action id="connectSetting" viewid="com.ump.productquery.Cm_loginconset" callback="setishttps" method="UMView.open" isKeep="true" animation-type="Fade"/>
    <action id="openHTTPS" ishttps="#{ishttps}" callback="loginjs" method="UMService.openHTTPS"/>
    <action port="port" id="setishttps" host="ip" ishttps="ishttps" method="UMService.loadConfigure"/>
    <action port="port" id="loadconfig" userName="userName" host="ip" ishttps="ishttps" autologin="autologin" callback="this.loginjs()" method="UMService.loadConfigure" passWord="passWord"/>
    <action id="saveConfig" userName="#{userName}" autologin="#{autologin}" callback="this.clickLoginBtn()" isDataCollect="true" method="UMService.writeConfigure" passWord="#{passWord}"/>
    <action id="openMainview" viewid="com.ump.productquery.Mutproductview" method="UMView.open" from="login" isKeep="false" animation-type="Fade"/>
    <div id="viewPage0" onload="loadconfig">
        <div id="panel1">
            <image id="image3" scaletype="fitcenter" src="loginapp.png"/>
            <label id="label5">成本+</label> 
        </div>
        <label id="label0"/>
        <div id="panel2">
            <div id="panel3">
                <image id="image0" scaletype="fitcenter" src="user.png"/>
                <input id="textbox0" bindfield="userName" maxlength="256" placeholder="用户名" type="text" oninput="this.userNameChange()"/> 
            </div>
            <label id="label3"/>
            <div id="panel4">
                <image id="image1" scaletype="fitcenter" src="pass.png"/>
                <input id="textbox1" bindfield="passWord" maxlength="256" placeholder="密码" type="password" oninput="this.passWordChange()"/> 
            </div> 
        </div>
        <label id="label4"/>
        <div id="panel0">
            <input id="button0" value="设置连接" class="textbtnclass" onclick="connectSetting" type="button"/>
            <label id="label2"/>
            <label id="label1">自动登录</label>
            <switch id="switch0" bindfield="autologin" value="off"/> 
        </div>
        <input id="button2" value="登 录" onclick="saveConfig" type="button"/>
        <div id="panel5"/>
        <div id="panel6">
            <image id="image2" scaletype="fitcenter" src="bg_logo2x.png"/> 
        </div> 
    </div> 
</window>
