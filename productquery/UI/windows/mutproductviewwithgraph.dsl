<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="mutproductviewwithgraph" context="mutproductqueryctx" controller="mutproductviewwithgraphController" namespace="com.ump.productquery">
    <import ref="mutproductviewwithgraph.css" type="css"/>
    <action id="back" resultcode="0" method="UMView.close"/>
    <div id="viewPage0">
        <div id="panel2">
            <navigatorbar id="navigatorbar0" title="标题" class="navigatorbarclass">
                <input id="button0" value="返回" class="ngbbuttonclass" onclick="back" type="button"/>
                <label id="label0"/>
                <input id="button1" value="按钮" class="ngbbuttonclass" type="button"/> 
            </navigatorbar>
            <web:ichart id="webcontrol0" startpage="chart.html"/> 
        </div> 
    </div> 
</window>
