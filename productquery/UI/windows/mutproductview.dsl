<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="mutproductview" context="mutproductqueryctx" controller="mutproductviewController" namespace="com.ump.productquery">
    <import ref="mutproductview.css" type="css"/>
    <import ref="mutproductviewRow.w" type="widget"/>
    <action id="openfactoryRef" current_pk_factory="#{pk_factory}" referenceid="com.ump.productquery.Factoryref" callback="getProductListFirstPage" mapping="{&quot;pk_factory&quot;:&quot;pk_factory&quot;,&quot;factoryname&quot;:&quot;factoryname&quot;}" method="UMView.openReference"/>
    <action yearmonth="#{yearmonth}" viewid="com.ump.productquery.MutproductqueryctxExtendController" count="20" startline="1" pk_accperiodmonth="#{pk_accperiodmonth}" pk_factory="#{pk_factory}" isDataCollect="true" id="getProductListFirstPage" factoryname="#{factoryname}" orderbytype="#{orderbytype}" callback="this.setIcon()" action="getProductListByPk_factoryAndAccepriod" displaytype="#{displaytype}" orderby="#{orderby}" method="UMList.getFirstPage"/>
    <action total="#{#{cursor.cursorproductlistalias}.total}" yearmonth="#{yearmonth}" cursor="cursorproductlistalias" pk_accperiodmonth="#{pk_accperiodmonth}" currtype="#{#{cursor.cursorproductlistalias}.currtype}" price_arrayPath="productlist" selectindex_arrayPath="productlist" animation-type="Fade" factoryname="#{factoryname}" id="openProductDetailInfoView" mesadoc="#{#{cursor.cursorproductlistalias}.mesadoc}" cprodcostid_arrayPath="productlist" quantity="#{#{cursor.cursorproductlistalias}.quantity}" currtype_arrayPath="productlist" productname="#{#{cursor.cursorproductlistalias}.name}" total_arrayPath="productlist" viewid="com.ump.productquery.Mutproductdetailview" quantity_arrayPath="productlist" pk_factory="#{pk_factory}" mesadoc_arrayPath="productlist" selectindex="#{cursor.cursorproductlistalias.index}" price="#{#{cursor.cursorproductlistalias}.price}" pk_material_arrayPath="productlist" pk_material="#{#{cursor.cursorproductlistalias}.pk_material}" callback="this.openDetailCallBack()" cprodcostid="#{#{cursor.cursorproductlistalias}.cprodcostid}" method="UMView.open" isKeep="true" productname_arrayPath="productlist"/>
    <action yearmonth="#{yearmonth}" viewid="com.ump.productquery.MutproductqueryctxExtendController" count="20" pk_accperiodmonth="#{pk_accperiodmonth}" pk_factory="#{pk_factory}" isDataCollect="true" id="getProductListNextPage" factoryname="#{factoryname}" orderbytype="#{orderbytype}" action="getProductListByPk_factoryAndAccepriod" callback="this.setIcon()" orderby="#{orderby}" method="UMList.getNextPage" displaytype="#{displaytype}"/>
    <action yearmonth="#{yearmonth}" viewid="com.ump.productquery.MutproductqueryctxExtendController" count="20" startline="1" direction="prevmonth" pk_accperiodmonth="#{pk_accperiodmonth}" pk_factory="#{pk_factory}" id="getPrevYearmonth" factoryname="#{factoryname}" orderbytype="#{orderbytype}" callback="this.setIcon()" action="getPrevOrNextYearmonth" displaytype="#{displaytype}" orderby="#{orderby}" method="UMService.callAction" autoDataBinding="true"/>
    <action yearmonth="#{yearmonth}" viewid="com.ump.productquery.MutproductqueryctxExtendController" count="20" startline="1" direction="nextmonth" pk_accperiodmonth="#{pk_accperiodmonth}" pk_factory="#{pk_factory}" id="getNextYearmonth" factoryname="#{factoryname}" orderbytype="#{orderbytype}" callback="this.setIcon()" action="getPrevOrNextYearmonth" displaytype="#{displaytype}" orderby="#{orderby}" method="UMService.callAction" autoDataBinding="true"/>
    <action id="loadViewPage" viewid="com.ump.productquery.MutproductqueryctxExtendController" count="20" startline="1" action="getDefaultFactoryAndPeriodByCurrtentUser" callback="this.setIcon()" method="UMService.callAction" autoDataBinding="true"/>
    <action productlist="#{#{cursor.cursorproductlistalias}}" id="clickIcon" cursor="cursorproductlistalias" viewid="com.ump.productquery.MutproductqueryctxExtendController" action="doOrCancelConcernProduct" method="UMService.callAction" autoDataBinding="true" contextmapping="productlist[#{cursor.cursorproductlistalias.index}]" productlist_arrayPath="productlist"/>
    <action factoryname="#{factoryname}" id="openSearchView" yearmonth="#{yearmonth}" viewid="com.ump.productquery.Cm_productfilter" pk_accperiodmonth="#{pk_accperiodmonth}" pk_factory="#{pk_factory}" isDataCollect="true" method="UMView.open" isKeep="true" animation-type="Fade"/>
    <action id="opensettingpage" viewid="com.ump.productquery.Cm_settingpage" callback="this.updatebyuserid()" method="UMView.open" isKeep="true"/>
    <action id="getAccperiodByFactory" viewid="com.ump.productquery.MutproductqueryctxExtendController" pk_factory="#{pk_factory}" action="getAccperiodByFactory" callback="openAccperiodPicker" method="UMService.callAction" autoDataBinding="false" contextmapping="yearlist"/>
    <div id="viewPage0" onload="this.onload()">
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
                <toggleButtonGroup id="togglebuttongroup1" value="buttongroup">
                    <toggleButton id="togglebutton3" value="0" onclick="this.loadmyconcern()" textOff="我的关注" textOn="我的关注" type="button" checked="true"/>
                    <toggleButton id="togglebutton4" value="1" onclick="this.loadall()" textOff="全部" textOn="全部" type="button"/> 
                </toggleButtonGroup>
                <div id="panel6">
                    <input id="imagebutton2" value="成本" istogglebutton="false" onclick="this.openmenu()" type="imagebutton" checked="false"/> 
                </div> 
            </div>
            <label id="label6">label</label>
            <listView id="listview0" bindfield="productlist" onuprefersh="getProductListFirstPage" childIndicator="mutproductviewRow" ondownrefersh="getProductListNextPage" cursorAction="cursorproductlistalias" syncContext="productlist" onItemClick="openProductDetailInfoView">
                <widget id="listview0_childWgt0" ref="mutproductviewRow"/> 
            </listView> 
        </div> 
    </div> 
</window>
