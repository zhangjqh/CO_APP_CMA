<?xml version="1.0" encoding="UTF-8"?>

<region id="region1"> 
    <import ref="cm_selectcomparefactoryviewRow.css" type="css"/>  
    <widget-define xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="cm_selectcomparefactoryviewRowWidget" context="mutifactorygroupctx">  
        <div id="panel0"> 
            <div id="panel1" onclick="onClickListRow"> 
                <div id="panel2"> 
                    <input id="checkbox0" bindfield="checked" type="checkbox" onclick="onClickListRow"/>  
                    <label id="label0" bindfield="pk_factory">label</label>  
                    <label id="label1" bindfield="factorycode">label</label>  
                    <label id="label2" bindfield="factoryname">label</label> 
                </div> 
            </div>  
            <label id="label3"/> 
        </div> 
    </widget-define> 
</region>
