<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="cm_mutiperiodview" context="cm_mutiperiodctx" controller="cm_mutiperiodviewController" namespace="com.ump.productquery">
    <import ref="cm_mutiperiodview.css" type="css"/>
    <import ref="cm_mutiperiodviewRow.w" type="widget"/>
    <action factoryname="#{plug.factoryname}" id="loadViewPage" refresult="#{plug.refresult}" viewid="com.ump.productquery.Cm_mutiperiodctxExtendController" pk_factory="#{plug.pk_factory}" pk_material="#{plug.pk_material}" action="getMutiPeriodListByPk_materialAndPk_factory" method="UMService.callAction" autoDataBinding="true" lastpageyearmonth="#{plug.yearmonth}" productname="#{plug.productname}"/>
    <action total="#{#{cursor.cursorperiodproductlistalias}.total}" yearmonth="#{#{cursor.cursorperiodproductlistalias}.yearmonth}" cursor="cursorperiodproductlistalias" pk_accperiodmonth="#{#{cursor.cursorperiodproductlistalias}.pk_accperiodmonth}" currtype="#{#{cursor.cursorperiodproductlistalias}.currtype}" price_arrayPath="periodproductlist" animation-type="Fade" factoryname="#{factoryname}" id="openProductDetailInfoView" mesadoc="#{#{cursor.cursorperiodproductlistalias}.measdoc}" cprodcostid_arrayPath="periodproductlist" quantity="#{#{cursor.cursorperiodproductlistalias}.quantity}" currtype_arrayPath="periodproductlist" productname="#{productname}" total_arrayPath="periodproductlist" pk_accperiodmonth_arrayPath="periodproductlist" sourcepage="mutiperiodview" viewid="com.ump.productquery.Mutproductdetailview" quantity_arrayPath="periodproductlist" pk_factory="#{pk_factory}" mesadoc_arrayPath="periodproductlist" price="#{#{cursor.cursorperiodproductlistalias}.price}" yearmonth_arrayPath="periodproductlist" pk_material="#{pk_material}" cprodcostid="#{#{cursor.cursorperiodproductlistalias}.cprodcostid}" method="UMView.open" isKeep="true"/>
    <action factoryname="#{factoryname}" id="openGraph" refresult="#{refresult}" viewid="com.ump.productquery.Mutperiodviewwithgraph" periodproductlist="#{periodproductlist}" pk_material="#{pk_material}" pk_factory="#{pk_factory}" method="UMView.open" isKeep="false" animation-type="Fade" productname="#{productname}"/>
    <action factoryname="#{factoryname}" id="orderBy" viewid="com.ump.productquery.Cm_mutiperiodctxExtendController" pk_material="#{pk_material}" pk_factory="#{pk_factory}" action="getMutiPeriodListByPk_materialAndPk_factory" isDataCollect="true" orderby="#{orderby}" method="UMService.callAction" autoDataBinding="true" productname="#{productname}"/>
    <action id="back" resultcode="0" method="UMView.close"/>
    <action id="openComparePeriodRef" referenceid="com.ump.productquery.Cm_selectcompareperiodview" pk_factory="#{pk_factory}" callback="refcallback" mapping="{&quot;refresult&quot;:&quot;name&quot;}" method="UMView.openReference" refresultstr="#{refresult}"/>
    <action factoryname="#{factoryname}" id="refcallback" refresult="#{refresult}" viewid="com.ump.productquery.Cm_mutiperiodctxExtendController" pk_material="#{pk_material}" pk_factory="#{pk_factory}" action="getMutiPeriodListByPk_materialAndPk_factory" method="UMService.callAction" autoDataBinding="true" productname="#{productname}"/>
    <action id="clickListRow" cursor="cursorperiodproductlistalias" selecttotal="#{#{cursor.cursorperiodproductlistalias}.total}" selecttotal_arrayPath="periodproductlist" method="clickListRow"/>
    <div id="viewPage0" onload="loadViewPage">
        <navigatorbar id="navigatorbar0" title="多期间对比">
            <label id="label1" bindfield="refresult">label</label>
            <input id="button0" value="返回" onclick="back" type="button"/>
            <label id="label0"/>
            <input id="button2" onclick="openComparePeriodRef" type="button"/>
            <input id="button1" onclick="openGraph" type="button"/> 
        </navigatorbar>
        <div id="panel2">
            <div id="panel0">
                <label id="label3" bindfield="pk_factory"/>
                <label id="label4" bindfield="factoryname"/> 
            </div>
            <div id="panel1">
                <label id="label8" bindfield="pk_material"/>
                <label id="label9" bindfield="productname"/> 
            </div> 
        </div>
        <label id="label2">label</label>
        <listView id="listview0" bindfield="periodproductlist" onuprefersh="refcallback" childIndicator="cm_mutiperiodviewRow" cursorAction="cursorperiodproductlistalias" syncContext="periodproductlist">
            <widget id="listview0_childWgt0" ref="cm_mutiperiodviewRow"/> 
        </listView> 
    </div> 
</window>
