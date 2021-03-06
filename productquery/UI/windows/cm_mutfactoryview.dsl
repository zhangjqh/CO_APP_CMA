<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="cm_mutfactoryview" context="cm_mutifactoryqueryctx" controller="cm_mutfactoryviewController" namespace="com.ump.productquery">
    <import ref="cm_mutfactoryview.css" type="css"/>
    <import ref="cm_mutifactoryviewRow.w" type="widget"/>
    <action id="loadViewPage" refresult="#{plug.refresult}" yearmonth="#{plug.yearmonth}" viewid="com.ump.productquery.Cm_mutifactoryqueryctxExtendController" pk_accperiodmonth="#{plug.pk_accperiodmonth}" pk_material="#{plug.pk_material}" action="getMutiFactoryListByPk_materialAndYearMonth" callback="this.writedatatocache()" method="UMService.callAction" autoDataBinding="true" productname="#{plug.productname}"/>
    <action total="#{#{cursor.cursorfactoryproductlistalias}.total}" yearmonth="#{yearmonth}" cursor="cursorfactoryproductlistalias" pk_accperiodmonth="#{pk_accperiodmonth}" currtype="#{#{cursor.cursorfactoryproductlistalias}.currtype}" price_arrayPath="factoryproductlist" animation-type="Fade" factoryname="#{#{cursor.cursorfactoryproductlistalias}.factoryname}" id="openProductDetailInfoView" mesadoc="#{#{cursor.cursorfactoryproductlistalias}.measdoc}" cprodcostid_arrayPath="factoryproductlist" quantity="#{#{cursor.cursorfactoryproductlistalias}.quantity}" currtype_arrayPath="factoryproductlist" productname="#{productname}" total_arrayPath="factoryproductlist" pk_factory_arrayPath="factoryproductlist" factoryname_arrayPath="factoryproductlist" sourcepage="mutifactoryview" viewid="com.ump.productquery.Mutproductdetailview" quantity_arrayPath="factoryproductlist" pk_factory="#{#{cursor.cursorfactoryproductlistalias}.pk_factory}" mesadoc_arrayPath="factoryproductlist" price="#{#{cursor.cursorfactoryproductlistalias}.price}" pk_material="#{pk_material}" cprodcostid="#{#{cursor.cursorfactoryproductlistalias}.cprodcostid}" method="UMView.open" isKeep="true"/>
    <action id="back" resultcode="0" method="UMView.close"/>
    <action id="compareFactory" referenceid="com.ump.productquery.MultiFactory_referlist" callback="refCallback" isDataCollect="true" mapping="{&quot;refresult&quot;:&quot;name&quot;}" method="UMView.openReference" refresultstr="#{refresult}"/>
    <action id="refCallback" refresult="#{refresult}" yearmonth="#{yearmonth}" viewid="com.ump.productquery.Cm_mutifactoryqueryctxExtendController" pk_accperiodmonth="#{pk_accperiodmonth}" pk_material="#{pk_material}" action="getMutiFactoryListByPk_materialAndYearMonth" callback="this.writedatatocache()" method="UMService.callAction" autoDataBinding="true" productname="#{productname}"/>
    <div id="viewPage0" onload="loadViewPage">
        <navigatorbar id="navigatorbar0" title="多工厂对比">
            <label id="label1" bindfield="refresult">label</label>
            <input id="button0" value="返回" onclick="back" type="button"/>
            <label id="label0"/>
            <input id="button2" onclick="compareFactory" type="button"/>
            <input id="button1" onclick="openGraph" type="button"/> 
        </navigatorbar>
        <div id="panel2">
            <div id="panel0">
                <label id="label3" bindfield="pk_material"/>
                <label id="label4" bindfield="productname"/> 
            </div>
            <div id="panel1">
                <label id="label8" bindfield="pk_accperiodmonth"/>
                <label id="label9" bindfield="yearmonth"/> 
            </div> 
        </div>
        <label id="label2"/>
        <listView id="listview0" bindfield="factoryproductlist" onuprefersh="refCallback" childIndicator="cm_mutifactoryviewRow" cursorAction="cursorfactoryproductlistalias" syncContext="factoryproductlist" onItemClick="this.clickListRow()">
            <widget id="listview0_childWgt0" ref="cm_mutifactoryviewRow"/> 
        </listView> 
    </div> 
</window>
