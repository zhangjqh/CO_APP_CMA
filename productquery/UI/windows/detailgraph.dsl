<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="detailgraph" context="cm_unitcostctx" controller="detailgraphController" namespace="com.ump.productquery">  
    <import ref="detailgraph.css" type="css"/>  
    <action id="loadGraph" viewid="com.ump.productquery.Cm_unitcostctxExtendController" productinfodetail="#{plug.productinfodetail}" action="loadDetailGraph" method="UMService.callAction" autoDataBinding="true"/>  
    <action id="back" currentstate="#{concern.currentState}" pk_material="#{pk_material}" resultcode="15" method="UMView.close" isKeep="false" selectindex="#{plug.selectindex}"/>  
    <action yearmonth="#{yearmonth}" viewid="com.ump.productquery.Mutproductdetailview" sourcepage="#{plug.sourcepage}" pk_accperiodmonth="#{pk_accperiodmonth}" pk_factory="#{pk_factory}" animation-type="Fade" id="openDetailList" factoryname="#{factoryname}" pk_material="#{pk_material}" method="UMView.open" quantity="#{quantity}" isKeep="false" productname="#{productname}"/>  
    <action id="openMutiFactoryView" yearmonth="#{yearmonth}" viewid="com.ump.productquery.Cm_mutfactoryview" sourcepage="detailgraph" pk_accperiodmonth="#{pk_accperiodmonth}" pk_material="#{pk_material}" method="UMView.open" isKeep="true" productname="#{productname}"/>  
    <action factoryname="#{factoryname}" id="openMutiPeriodView" yearmonth="#{yearmonth}" viewid="com.ump.productquery.Cm_mutiperiodview" sourcepage="detailgraph" pk_material="#{pk_material}" pk_factory="#{pk_factory}" method="UMView.open" isKeep="true" productname="#{productname}"/>  
    <action id="clickIcon" viewid="com.ump.productquery.Cm_unitcostctxExtendController" pk_material="#{pk_material}" action="doOrCancelConcernProduct" state="#{concern.currentState}" method="UMService.callAction" autoDataBinding="true" contextmapping="concern"/>  
    <div id="viewPage0" onload="this.loadviewdata()"> 
        <navigatorbar id="navigatorbar0" title="单位成本详情"> 
            <input id="button0" value="返回" onclick="back" type="button"/>  
            <label id="label0"/>  
            <input id="button3" onclick="openDetailList" type="button"/> 
        </navigatorbar>  
        <div id="panel11"> 
            <div id="panel5" onclick="clickIcon"> 
                <image id="image0" bindfield="concern.iconsrc" onclick="clickIcon" scaletype="fitcenter" src="concerned.png"/> 
            </div>  
            <div id="panel0"/>  
            <div id="panel1"> 
                <div id="panel3"> 
                    <div id="panel12"> 
                        <label id="label4" bindfield="factoryname"/> 
                    </div>  
                    <div id="panel13" onclick="openMutiFactoryView"> 
                        <input id="button4" value="对比" onclick="openMutiFactoryView" type="button"/> 
                    </div> 
                </div>  
                <div id="panel4"> 
                    <div id="panel15"> 
                        <label id="label5" bindfield="productname"/> 
                    </div>  
                    <div id="panel14"> 
                        <label id="label23"/>  
                        <label id="label6" bindfield="yearmonth"/>  
                        <div id="panel17" onclick="openMutiPeriodView"> 
                            <input id="button5" value="对比" onclick="openMutiPeriodView" type="button"/> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div>  
        <label id="label21"/>  
        <div id="panel2"> 
            <div id="panel8"> 
                <div id="panel19"> 
                    <label id="label16">总成本:</label> 
                </div>  
                <label id="label28"/>  
                <div id="panel20"> 
                    <label id="label13">产量:</label> 
                </div>  
                <label id="label29"/>  
                <div id="panel21"> 
                    <label id="label10">单位成本:</label> 
                </div> 
            </div>  
            <div id="panel10"/>  
            <div id="panel9"> 
                <div id="panel6"> 
                    <label id="label25" visible="false"/>  
                    <label id="label17" bindfield="currtype"/>  
                    <label id="label18" bindfield="total"/> 
                </div>  
                <label id="label20"/>  
                <div id="panel7"> 
                    <label id="label26" visible="false"/>  
                    <label id="label14" bindfield="quantity"/>  
                    <label id="label15" bindfield="mesadoc"/> 
                </div>  
                <label id="label24"/>  
                <div id="panel18"> 
                    <label id="label27" visible="false"/>  
                    <label id="label11" bindfield="currtype"/>  
                    <label id="label12" bindfield="price"/> 
                </div> 
            </div> 
        </div>  
        <label id="label22">label</label>  
        <div id="panel16"> 
            <umchartview id="chartview0" bindField="charViewData" appearanceName="fresh" dockStyleName="bottom" paletteName="fresh" type="UFChartSeriesViewPie"/> 
        </div> 
    </div> 
</window>
