<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="cm_productfilter" context="cm_productctx" controller="cm_productfilterController" namespace="com.ump.productquery">
    <import ref="cm_productfilter.css" type="css"/>
    <import ref="cm_productfilterRow.w" type="widget"/>
    <action id="back" resultcode="0" method="UMView.close"/>
    <action id="doSearch" count="20" viewid="com.ump.productquery.Cm_productctxExtendController" startline="1" searchfield="#{searchfield}" pk_factory="#{plug.pk_factory}" action="searchProductListByKeyword" callback="searchcallback" isDataCollect="true" method="UMList.getFirstPage"/>
    <action yearmonth="#{plug.yearmonth}" cursor="cursorcmproductlistalias" viewid="com.ump.productquery.Mutproductdetailview" pk_accperiodmonth="#{plug.pk_accperiodmonth}" pk_factory="#{plug.pk_factory}" isDataCollect="true" animation-type="Fade" id="clickListRowToOpenDetailView" factoryname="#{plug.factoryname}" pk_material_arrayPath="cmproductlist" pk_material="#{#{cursor.cursorcmproductlistalias}.pk_material}" method="UMView.open" isKeep="false" productname_arrayPath="cmproductlist" productname="#{#{cursor.cursorcmproductlistalias}.name}"/>
    <action id="loadNextPage" count="20" viewid="com.ump.productquery.Cm_productctxExtendController" searchfield="#{searchfield}" pk_factory="#{plug.pk_factory}" action="searchProductListByKeyword" callback="searchcallback" isDataCollect="true" method="UMList.getNextPage"/>
    <action id="searchcallback" method="searchcallback"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="选择产品">
            <input id="button0" value="返回" onclick="back" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <search id="search0" bindField="searchfield" placeholder="搜索" localstorage="true" onsearch="doSearch"/>
        <listView id="listview0" bindfield="cmproductlist" onuprefersh="doSearch" childIndicator="cm_productfilterRow" ondownrefersh="loadNextPage" cursorAction="cursorcmproductlistalias" syncContext="cmproductlist">
            <widget id="listview0_childWgt0" ref="cm_productfilterRow"/> 
        </listView>
        <div id="panel0">
            <image id="image0" scaletype="fitcenter" src="no_search_result.png"/>
            <label id="label1">无搜索结果</label>
        </div> 
    </div> 
</window>
