<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="mutproductview" context="mutproductqueryctx" controller="mutproductviewController" namespace="com.ump.productquery">
    <import ref="mutproductview.css" type="css"/>
    <import ref="mutproductviewRow.w" type="widget"/>
    <action id="UMonInit" method="UMonInit"/>
    <action id="UMonLoad" method="UMonLoad"/>
    <action id="UMonUnload" method="UMonUnload"/>
    <action id="UMonComplete" method="UMonComplete"/>
    <action id="UMonDataBinding" method="UMonDataBinding"/>
    <action id="openfactoryRef" current_pk_factory="#{pk_factory}" referenceid="com.ump.productquery.Factoryref" callback="getProductListFirstPage" mapping="{&quot;pk_factory&quot;:&quot;pk_factory&quot;,&quot;factoryname&quot;:&quot;factoryname&quot;}" method="UMView.openReference"/>
    <action id="openAccperiodRef" referenceid="com.ump.productquery.Accperiodref" current_yearmonth="#{yearmonth}" pk_factory="#{pk_factory}" callback="getProductListFirstPage" mapping="{&quot;pk_accperiodmonth&quot;:&quot;pk_accperiodmonth&quot;,&quot;yearmonth&quot;:&quot;yearmonth&quot;}" method="UMView.openReference"/>
    <action yearmonth="#{yearmonth}" viewid="com.ump.productquery.MutproductqueryctxExtendController" count="20" startline="1" pk_accperiodmonth="#{pk_accperiodmonth}" pk_factory="#{pk_factory}" isDataCollect="true" id="getProductListFirstPage" factoryname="#{factoryname}" orderbytype="#{orderbytype}" callback="setIcon" action="getProductListByPk_factoryAndAccepriod" orderby="#{orderby}" displaytype="#{displaytype}" method="UMList.getFirstPage"/>
    <action total="#{#{cursor.cursorproductlistalias}.total}" yearmonth="#{yearmonth}" cursor="cursorproductlistalias" pk_accperiodmonth="#{pk_accperiodmonth}" currtype="#{#{cursor.cursorproductlistalias}.currtype}" price_arrayPath="productlist" selectindex_arrayPath="productlist" animation-type="Fade" factoryname="#{factoryname}" id="openProductDetailInfoView" mesadoc="#{#{cursor.cursorproductlistalias}.mesadoc}" cprodcostid_arrayPath="productlist" quantity="#{#{cursor.cursorproductlistalias}.quantity}" currtype_arrayPath="productlist" productname="#{#{cursor.cursorproductlistalias}.name}" total_arrayPath="productlist" viewid="com.ump.productquery.Mutproductdetailview" quantity_arrayPath="productlist" pk_factory="#{pk_factory}" mesadoc_arrayPath="productlist" selectindex="#{cursor.cursorproductlistalias.index}" price="#{#{cursor.cursorproductlistalias}.price}" pk_material_arrayPath="productlist" pk_material="#{#{cursor.cursorproductlistalias}.pk_material}" callback="openDetailCallBack" cprodcostid="#{#{cursor.cursorproductlistalias}.cprodcostid}" method="UMView.open" isKeep="true" productname_arrayPath="productlist"/>
    <action yearmonth="#{yearmonth}" viewid="com.ump.productquery.MutproductqueryctxExtendController" count="20" pk_accperiodmonth="#{pk_accperiodmonth}" pk_factory="#{pk_factory}" isDataCollect="true" id="getProductListNextPage" factoryname="#{factoryname}" orderbytype="#{orderbytype}" action="getProductListByPk_factoryAndAccepriod" callback="setIcon" displaytype="#{displaytype}" method="UMList.getNextPage" orderby="#{orderby}"/>
    <action yearmonth="#{yearmonth}" viewid="com.ump.productquery.MutproductqueryctxExtendController" count="20" startline="1" pk_accperiodmonth="#{pk_accperiodmonth}" direction="prevmonth" pk_factory="#{pk_factory}" id="getPrevYearmonth" factoryname="#{factoryname}" orderbytype="#{orderbytype}" callback="setIcon" action="getPrevOrNextYearmonth" orderby="#{orderby}" displaytype="#{displaytype}" method="UMService.callAction" autoDataBinding="true"/>
    <action yearmonth="#{yearmonth}" viewid="com.ump.productquery.MutproductqueryctxExtendController" count="20" startline="1" pk_accperiodmonth="#{pk_accperiodmonth}" direction="nextmonth" pk_factory="#{pk_factory}" id="getNextYearmonth" factoryname="#{factoryname}" orderbytype="#{orderbytype}" callback="setIcon" action="getPrevOrNextYearmonth" orderby="#{orderby}" displaytype="#{displaytype}" method="UMService.callAction" autoDataBinding="true"/>
    <action id="loadViewPage" viewid="com.ump.productquery.MutproductqueryctxExtendController" count="20" startline="1" callback="setIcon" action="getDefaultFactoryAndPeriodByCurrtentUser" method="UMService.callAction" autoDataBinding="true"/>
    <action id="setIcon" method="seticonsrc"/>
    <action productlist="#{#{cursor.cursorproductlistalias}}" id="clickIcon" cursor="cursorproductlistalias" viewid="com.ump.productquery.MutproductqueryctxExtendController" action="doOrCancelConcernProduct" method="UMService.callAction" autoDataBinding="true" contextmapping="productlist[#{cursor.cursorproductlistalias.index}]" productlist_arrayPath="productlist"/>
    <action id="setOrderByPrice" method="setOrderByPrice"/>
    <action id="setOrderBySeq" method="setOrderBySeq"/>
    <action id="setOrderByCode" method="setOrderByCode"/>
    <action id="setpriceorder" value="0" expr="orderby" method="UMCtx.setValue"/>
    <action id="setseqorder" value="1" expr="orderby" method="UMCtx.setValue"/>
    <action id="setcodeorder" value="2" expr="orderby" method="UMCtx.setValue"/>
    <action id="setordertype_up" value="asc" expr="orderbytype" method="UMCtx.setValue"/>
    <action id="setordertype_down" value="desc" expr="orderbytype" method="UMCtx.setValue"/>
    <action factoryname="#{factoryname}" id="openSearchView" yearmonth="#{yearmonth}" viewid="com.ump.productquery.Cm_productfilter" pk_accperiodmonth="#{pk_accperiodmonth}" pk_factory="#{pk_factory}" isDataCollect="true" method="UMView.open" isKeep="true" animation-type="Fade"/>
    <action id="opensettingpage" viewid="com.ump.productquery.Cm_settingpage" callback="updatebyuserid" method="UMView.open" isKeep="true"/>
    <action productlist="#{#{cursor.cursorproductlistalias}}" id="concern" cursor="cursorproductlistalias" method="concern" productlist_arrayPath="productlist"/>
    <action id="updatebyuserid" method="updatebyuserid"/>
    <action id="orderbypriceup" method="orderbypriceup"/>
    <action id="orderbypricedown" method="orderbypricedown"/>
    <action id="orderbysequp" method="orderbysequp"/>
    <action id="orderbyseqdown" method="orderbyseqdown"/>
    <action id="orderbycodeup" method="orderbycodeup"/>
    <action id="orderbycodedown" method="orderbycodedown"/>
    <action id="opensortdropdownlist" method="opensortdropdownlist"/>
    <action id="openDetailCallBack" currentstate="#{plug.currentstate}" pk_material="#{plug.pk_material}" method="openDetailCallBack" selectindex="#{plug.selectindex}"/>
    <action id="openAccperiodPicker" method="openAccperiodPicker" currentyearmonth="#{yearmonth}"/>
    <action id="getAccperiodByFactory" viewid="com.ump.productquery.MutproductqueryctxExtendController" pk_factory="#{pk_factory}" action="getAccperiodByFactory" callback="openAccperiodPicker" method="UMService.callAction" autoDataBinding="false" contextmapping="yearlist"/>
    <action id="pressok" method="pressok"/>
    <div id="viewPage0" onload="loadViewPage">
        <navigatorbar id="navigatorbar0" title="产品成本分析">
            <input id="button3" class="textbtnclass" onclick="opensettingpage" type="button"/>
            <label id="label0"/>
            <input id="button1" class="textbtnclass" onclick="openSearchView" type="button"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel1">
                <div id="panel2" onclick="openfactoryRef">
                    <label id="label3" bindfield="pk_factory"/>
                    <label id="label4" bindfield="factoryname" onclick="openfactoryRef"/>
                    <image id="image0" onclick="openfactoryRef" scaletype="fitcenter" src="arrow.png"/> 
                </div> 
            </div>
            <label id="label1">label</label>
            <div id="panel3">
                <div id="panel4">
                    <label id="label8" bindfield="pk_accperiodmonth"/>
                    <div id="panel7" onclick="getPrevYearmonth">
                        <input id="button0" onclick="getPrevYearmonth" type="button"/> 
                    </div>
                    <label id="label5" bindfield="orderbytype"/>
                    <label id="label10" bindfield="orderby"/>
                    <label id="label9" bindfield="" onclick=""/>
                    <input id="dateinput0" bindfield="yearmonth" placeholder="" value="2015-01" format="yyyy-MM" type="date" onchange="getProductListFirstPage"/>
                    <div id="panel8" onclick="getNextYearmonth">
                        <input id="button2" onclick="getNextYearmonth" type="button"/> 
                    </div> 
                </div> 
            </div>
            <label id="label2">label</label>
            <div id="panel5">
                <toggleButtonGroup id="togglebuttongroup1" bindfield="displaytype" value="buttongroup">
                    <toggleButton id="togglebutton3" value="0" onclick="getProductListFirstPage" textOff="我的关注" textOn="我的关注" type="button" checked="true"/>
                    <toggleButton id="togglebutton4" value="1" onclick="getProductListFirstPage" textOff="全部" textOn="全部" type="button"/> 
                </toggleButtonGroup>
                <div id="panel6">
                    <input id="imagebutton2" value="成本" istogglebutton="false" onclick="opensortdropdownlist" type="imagebutton" checked="false"/> 
                </div> 
            </div>
            <label id="label6">label</label>
            <listView id="listview0" bindfield="productlist" onuprefersh="getProductListFirstPage" childIndicator="mutproductviewRow" ondownrefersh="getProductListNextPage" cursorAction="cursorproductlistalias" syncContext="productlist">
                <widget id="listview0_childWgt0" ref="mutproductviewRow"/> 
            </listView> 
        </div> 
    </div> 
</window>
