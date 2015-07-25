<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="YearmonthWheelView" controller="YearmonthWheelViewController" namespace="com.ump.productquery">
    <import ref="YearmonthWheelView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <action id="back" resultcode="0" method="UMView.close"/>
    <action id="selectyear" method="selectyear"/>
    <action id="selectmonth" method="selectmonth"/>
    <action id="loaddata" method="loaddata" currentyearmonth="#{plug.yearmonth}"/>
    <action id="getYearlistByfactory" viewid="com.ump.productquery.MutproductqueryctxExtendController" pk_factory="#{plug.pk_factory}" callback="loaddata" action="getAccperiodByFactory" method="UMService.callAction" autoDataBinding="true" contextmapping="yearlist"/>
    <div id="viewPage0">
        <div id="panel0">
            <navigatorbar id="navigatorbar0" title="标题" class="navigatorbarclass">
                <input id="button0" value="返回" class="ngbbuttonclass" onclick="back" type="button"/>
                <label id="label0"/>
                <input id="button1" value="确定" class="ngbbuttonclass" type="button"/> 
            </navigatorbar>
            <picker id="picker0">
                <pickeritem onselectedchange="selectyear" bindfield="year" value="1" datasource="yearmonthlist"/>
                <pickeritem onselectedchange="selectmonth" bindfield="month" value="2" datasource="yearmonthlist"/> 
            </picker>
            <input id="datetimeinput0" placeholder="2015-01-06 14:23" value="2015-01-06 14:23:11" format="yyyy-MM-dd HH:mm" type="datetime"/>
            <input id="timeinput0" placeholder="14:23" value="2015-01-06 14:23:11" format="HH:mm" type="time"/>
            <input id="dateinput0" placeholder="2015-01" value="2015-01" format="yyyy-MM" type="date"/> 
        </div> 
    </div> 
</window>
