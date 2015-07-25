<?xml version="1.0" encoding="UTF-8"?>

<region id="region1"> 
    <import ref="cm_selectcompareperiodviewRow.css" type="css"/>  
    <widget-define xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="cm_selectcompareperiodviewRowWidget" context="cm_mutiselectperiodctx">  
        <div id="panel0" onclick="onClickYearMonthRow"> 
            <div id="panel1"> 
                <input id="checkbox0" bindfield="checked" type="checkbox" checked="checked" onclick="onClickYearMonthRow"/>  
                <div id="panel2"> 
                    <label id="label0" bindfield="pk_accperiodmonth">label</label>  
                    <label id="label1" bindfield="yearmonth">label</label> 
                </div> 
            </div> 
        </div> 
    </widget-define> 
</region>
