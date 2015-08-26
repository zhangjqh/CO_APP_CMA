<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="mutproductdetailview" context="cm_unitcostctx" controller="mutproductdetailviewController" namespace="com.ump.productquery">
    <import ref="mutproductdetailview.css" type="css"/>
    <import ref="mutproductdetailviewRow.w" type="widget"/>
    <action yearmonth="#{plug.yearmonth}" viewid="com.ump.productquery.Cm_unitcostctxExtendController" pk_accperiodmonth="#{plug.pk_accperiodmonth}" id="loadProductDetailInfo" factoryname="#{plug.factoryname}" pk_org="#{plug.pk_factory}" pk_material="#{plug.pk_material}" action="getProductDetailInfoByParams" callback="this.handleException()" method="UMService.callAction" quantity="#{plug.quantity}" autoDataBinding="true" productname="#{plug.productname}"/>
    <action id="back" currentstate="#{concern.currentState}" pk_material="#{pk_material}" resultcode="15" method="UMView.close" isKeep="false" selectindex="#{plug.selectindex}"/>
    <action id="openMutiFactoryView" yearmonth="#{yearmonth}" viewid="com.ump.productquery.Cm_mutfactoryview" sourcepage="detailview" pk_accperiodmonth="#{pk_accperiodmonth}" pk_material="#{pk_material}" method="UMView.open" isKeep="true" animation-type="Fade" productname="#{productname}"/>
    <action factoryname="#{factoryname}" id="openMutiPeriodView" yearmonth="#{yearmonth}" sourcepage="detailview" viewid="com.ump.productquery.Cm_mutiperiodview" pk_material="#{pk_material}" pk_factory="#{pk_factory}" method="UMView.open" isKeep="true" animation-type="Fade" productname="#{productname}"/>
    <action id="clickIcon" viewid="com.ump.productquery.Cm_unitcostctxExtendController" pk_material="#{pk_material}" action="doOrCancelConcernProduct" state="#{concern.currentState}" method="UMService.callAction" autoDataBinding="true" contextmapping="concern"/>
    <action factoryname="#{factoryname}" id="refreshpage" yearmonth="#{yearmonth}" viewid="com.ump.productquery.Cm_unitcostctxExtendController" pk_org="#{pk_factory}" pk_accperiodmonth="#{pk_accperiodmonth}" pk_material="#{pk_material}" callback="this.handleException()" action="getProductDetailInfoByParams" method="UMService.callAction" autoDataBinding="true" productname="#{productname}"/>
    <div id="viewPage0" onload="this.loadDetail()">
        <navigatorbar id="navigatorbar0" title="单位成本详情">
            <input id="button0" value="返回" onclick="back" type="button"/>
            <label id="label0"/>
            <input id="button1" onclick="this.openDetailGraph()" type="button"/> 
        </navigatorbar>
        <div id="panel10">
            <div id="panel9" onclick="clickIcon">
                <image id="image0" bindfield="concern.iconsrc" onclick="clickIcon" scaletype="fitcenter" src="concerned.png"/> 
            </div>
            <div id="panel0">
                <div id="panel8">
                    <div id="panel11">
                        <label id="label1" bindfield="factoryname"/> 
                    </div>
                    <div id="panel12" onclick="openMutiFactoryView">
                        <input id="button4" value="对比" onclick="openMutiFactoryView" type="button"/> 
                    </div> 
                </div>
                <div id="panel1">
                    <div id="panel13">
                        <label id="label2" bindfield="productname"/> 
                    </div>
                    <div id="panel14">
                        <label id="label20"/>
                        <label id="label3" bindfield="yearmonth"/>
                        <div id="panel2" onclick="openMutiPeriodView">
                            <input id="button5" value="对比" onclick="openMutiPeriodView" type="button"/> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div>
        <label id="label18">label</label>
        <div id="panel3">
            <div id="panel5">
                <div id="panel17">
                    <label id="label10">总成本:</label> 
                </div>
                <label id="label25"/>
                <div id="panel18">
                    <label id="label7">产量:</label> 
                </div>
                <label id="label26"/>
                <div id="panel19">
                    <label id="label4">单位成本:</label> 
                </div> 
            </div>
            <div id="panel7"/>
            <div id="panel6">
                <div id="panel4">
                    <label id="label12" bindfield="totalshowname"/> 
                </div>
                <label id="label17"/>
                <div id="panel15">
                    <label id="label8" bindfield="quantityshowname"/> 
                </div>
                <label id="label21"/>
                <div id="panel16">
                    <label id="label6" bindfield="priceshowname"/> 
                </div> 
            </div> 
        </div>
        <label id="label19">label</label>
        <listView id="listview0" bindfield="productinfodetails" onuprefersh="refreshpage" childIndicator="mutproductdetailviewRow">
            <widget id="listview0_childWgt0" ref="mutproductdetailviewRow"/> 
        </listView> 
    </div> 
</window>
