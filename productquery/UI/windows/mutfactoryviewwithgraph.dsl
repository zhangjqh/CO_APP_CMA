<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="mutfactoryviewwithgraph" context="cm_mutifactoryqueryctx" controller="mutfactoryviewwithgraphController" namespace="com.ump.productquery">
    <import ref="mutfactoryviewwithgraph.css" type="css"/>
    <action id="loadGraph" yearmonth="#{plug.yearmonth}" viewid="com.ump.productquery.Cm_mutifactoryqueryctxExtendController" pk_material="#{plug.pk_material}" action="getMutiFactoryListByPk_materialAndYearMonth" pk_accperidmonth="#{plug.pk_accperiodmonth}" method="UMService.callAction" autoDataBinding="true" productname="#{plug.productname}"/>
    <action id="openList" refresult="#{refresult}" yearmonth="#{yearmonth}" viewid="com.ump.productquery.Cm_mutfactoryview" sourcepage="mutifactorygraph" pk_accperiodmonth="#{pk_accperiodmonth}" pk_material="#{pk_material}" method="UMView.open" isKeep="false" animation-type="Fade" productname="#{productname}"/>
    <action id="back" resultcode="0" method="UMView.close"/>
    <action id="loadviewdata" method="loadviewdata"/>
    <action id="compareFactory" referenceid="com.ump.productquery.Cm_selectcomparefactoryview" callback="refcallback" mapping="{&quot;refresult&quot;:&quot;name&quot;}" method="UMView.openReference" refresultstr="#{refresult}"/>
    <action id="refcallback" refresult="#{refresult}" yearmonth="#{yearmonth}" viewid="com.ump.productquery.Cm_mutifactoryqueryctxExtendController" pk_accperiodmonth="#{pk_accperiodmonth}" pk_material="#{pk_material}" action="getMutiFactoryListByPk_materialAndYearMonth" method="UMService.callAction" autoDataBinding="true" productname="#{productname}"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="多工厂对比">
            <label id="label1" bindfield="refresult">label</label>
            <input id="button0" value="返回" onclick="back" type="button"/>
            <label id="label0"/>
            <input id="button2" onclick="compareFactory" type="button"/>
            <input id="button1" onclick="openList" type="button"/> 
        </navigatorbar>
        <div id="panel3">
            <div id="panel0">
                <label id="label3" bindfield="pk_material"/>
                <label id="label4" bindfield="productname"/>
                <label id="label5"/> 
            </div>
            <div id="panel1">
                <label id="label8" bindfield="pk_accperiodmonth"/>
                <label id="label9" bindfield="yearmonth"/>
                <label id="label10"/> 
            </div> 
        </div>
        <label id="label2"/>
        <div id="panel2">
            <umchartview id="chartview0" bindField="charViewData" appearanceName="fresh" dockStyleName="none" onload="loadviewdata" paletteName="fresh" isHitTestEnabled="false" type="UFChartSeriesViewBar" rotated="true"/> 
        </div> 
    </div> 
</window>
