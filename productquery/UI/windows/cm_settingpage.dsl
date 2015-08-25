<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="cm_settingpage" controller="cm_settingpageController" namespace="com.ump.productquery">
    <import ref="cm_settingpage.css" type="css"/>
    <action id="back" resultcode="0" method="UMView.close"/>
    <action id="openAboutpage" viewid="com.ump.productquery.Cm_aboutpage" method="UMView.open" isKeep="true" animation-type="Fade"/>
    <action id="openConsettingpage" viewid="com.ump.productquery.Cm_loginconset" method="UMView.open" isKeep="true" animation-type="Fade"/>
    <action message="您是否确认退出？" id="openExitDialog" title="退出确认" okbuttontitle="确定" okaction="ExitOk" style="ok-cancel" method="UMView.openDialog" cancelbuttontitle="取消"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="设置">
            <input id="button1" value="返回" onclick="back" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel1"/>
        <div id="panel2" onclick="openAboutpage">
            <label id="label1">关于</label>
            <image id="image1" src="arrow.png"/> 
        </div>
        <div id="panel3"/>
        <div id="panel4" onclick="openConsettingpage">
            <label id="label2">修改连接</label>
            <image id="image2" src="arrow.png"/> 
        </div>
        <div id="panel5"/>
        <input id="button0" value="退出登录" onclick="openExitDialog" type="button"/>
        <div id="panel0"/> 
    </div> 
</window>
