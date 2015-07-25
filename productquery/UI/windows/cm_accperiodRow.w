<?xml version="1.0" encoding="UTF-8"?>

<region id="region1">
    <import ref="cm_accperiodRow.css" type="css"/>
    <widget-define xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="cm_accperiodRowWidget" context="cm_accountperiodctx">
        <div id="panel0">
            <div id="panel1" onclick="onClickListRow">
                <label id="label0" bindfield="pk_accperiodmonth">label</label>
                <label id="label1" bindfield="yearmonth">label</label>
                <input id="checkbox0" bindfield="checked" type="checkbox" readonly="true"/> 
            </div> 
        </div> 
    </widget-define> 
</region>
