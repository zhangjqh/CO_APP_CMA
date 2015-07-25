<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="mutperiodviewwithgraph" context="cm_mutiperiodctx" controller="mutperiodviewwithgraphController" namespace="com.ump.productquery">
    <import ref="mutperiodviewwithgraph.css" type="css"/>
    <action factoryname="#{factoryname}" id="openList" refresult="#{refresult}" viewid="com.ump.productquery.Cm_mutiperiodview" sourcepage="mutiperiodgraph" pk_material="#{pk_material}" pk_factory="#{pk_factory}" method="UMView.open" isKeep="false" animation-type="Fade" productname="#{productname}"/>
    <action factoryname="#{plug.factoryname}" id="loadGraph" viewid="com.ump.productquery.Cm_mutiperiodctxExtendController" pk_material="#{plug.pk_material}" pk_factory="#{plug.pk_factory}" action="getMutiPeriodListByPk_materialAndPk_factory" method="UMService.callAction" autoDataBinding="true" productname="#{plug.productname}"/>
    <action id="back" resultcode="0" method="UMView.close"/>
    <action id="load" method="loadviewdata"/>
    <action id="comparePeriod" referenceid="com.ump.productquery.Cm_selectcompareperiodview" pk_factory="#{pk_factory}" callback="refcallback" mapping="{&quot;refresult&quot;:&quot;name&quot;}" method="UMView.openReference" refresultstr="#{refresult}"/>
    <action factoryname="#{factoryname}" id="refcallback" refresult="#{refresult}" viewid="com.ump.productquery.Cm_mutiperiodctxExtendController" pk_material="#{pk_material}" pk_factory="#{pk_factory}" action="getMutiPeriodListByPk_materialAndPk_factory" method="UMService.callAction" autoDataBinding="true" productname="#{productname}"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="多期间对比">
            <input id="button1" value="列表" onclick="openList" type="button"/>
            <label id="label1" bindfield="refresult">label</label>
            <input id="button0" value="返回" onclick="back" type="button"/>
            <label id="label0"/>
            <input id="button3" onclick="comparePeriod" type="button"/>
            <input id="button2" onclick="openList" type="button"/> 
        </navigatorbar>
        <div id="panel3">
            <div id="panel0">
                <label id="label3" bindfield="pk_factory"/>
                <label id="label4" bindfield="factoryname"/>
                <label id="label5"/> 
            </div>
            <div id="panel1">
                <label id="label8" bindfield="pk_material"/>
                <label id="label9" bindfield="productname"/>
                <label id="label10"/> 
            </div> 
        </div>
        <label id="label2"/>
        <div id="panel2">
            <umchartview id="chartview0" bindField="charViewData" appearanceName="fog" dockStyleName="none" onload="load" paletteName="flow" axisXLabelAngle="90.0" type="UFChartSeriesViewLine"/> 
        </div> 
    </div> 
</window>
