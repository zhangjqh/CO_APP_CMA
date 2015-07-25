<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="cm_aboutpage" controller="cm_aboutpageController" namespace="com.ump.productquery">
    <import ref="cm_aboutpage.css" type="css"/>
    <action id="back" resultcode="0" method="UMView.close"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="关于">
            <input id="button0" value="返回" onclick="back" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <input id="button2" type="button"/>
            <label id="label2">产品成本分析</label>
            <label id="label3">版本号： 1.0.0</label> 
        </div>
        <div id="panel1">
            <input id="button1" type="button"/> 
        </div>
        <label id="label1">Copyright © 2014 yonyou software Co.Ltd</label> 
    </div> 
</window>
