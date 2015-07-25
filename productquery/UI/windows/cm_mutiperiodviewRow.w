<?xml version="1.0" encoding="UTF-8"?>

<region id="region1">
    <import ref="cm_mutiperiodviewRow.css" type="css"/>
    <widget-define xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="cm_mutiperiodviewRow" context="cm_mutiperiodctx">
        <div id="panel0">
            <div id="panel22" onclick="clickListRow">
                <div id="panel2">
                    <div id="panel3">
                        <div id="panel5">
                            <label id="label0" bindfield="yearmonth">label</label>
                            <label id="label1" bindfield="pk_accperiodmonth">label</label>
                            <label id="label8" bindfield="total">label</label>
                            <label id="label9" bindfield="cprodcostid">label</label> 
                        </div>
                        <div id="panel6">
                            <div id="panel4">
                                <label id="label2" bindfield="">产量:</label>
                                <label id="label7" bindfield="quantity">label</label>
                                <label id="label6" bindfield="measdoc">label</label> 
                            </div>
                            <div id="panel7">
                                <label id="label10"/>
                                <label id="label5">单位成本:</label>
                                <label id="label4" bindfield="currtype">label</label>
                                <label id="label3" bindfield="price">label</label> 
                            </div> 
                        </div> 
                    </div> 
                </div>
                <image id="image0" src="themes/ios7/designer/arrow.png"/> 
            </div>
            <label id="label11"/> 
        </div> 
    </widget-define> 
</region>
