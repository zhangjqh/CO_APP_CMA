<?xml version="1.0" encoding="UTF-8"?>

<region id="region1">
    <import ref="cm_productfilterRow.css" type="css"/>
    <widget-define xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="cm_productfilterRow" context="cm_productctx">
        <div id="panel4">
            <div id="panel11" onclick="clickListRowToOpenDetailView">
                <label id="label4" bindfield="pk_material">label</label>
                <label id="label5" bindfield="code">label</label>
                <label id="label0" bindfield="name">label</label> 
            </div>
            <div id="panel9">
                <image id="image2" onclick="clickListRowToOpenDetailView" src="themes/ios7/designer/arrow.png"/> 
            </div> 
        </div> 
    </widget-define> 
</region>
