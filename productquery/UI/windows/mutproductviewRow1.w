<?xml version="1.0" encoding="UTF-8"?>

<region id="region1">
    <import ref="mutproductviewRow1.css" type="css"/>
    <widget-define xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="mutproductviewRow" context="mutproductqueryctx">
        <div id="panel0">
            <div id="panel1">
                <div id="panel4" onclick="concern">
                    <image id="image1" bindfield="iconsrc" onclick="concern" scaletype="fitcenter" src="concerned.png"/> 
                </div> 
            </div>
            <div id="panel22" onclick="openProductDetailInfoView">
                <div id="panel2">
                    <label id="label0" bindfield="name">label</label>
                    <div id="panel6">
                        <div id="panel3">
                            <label id="label2" bindfield="" readonly="true">产量:</label>
                            <label id="label1" bindfield="quantity">lable</label>
                            <label id="label6" bindfield="mesadoc">件</label> 
                        </div>
                        <label id="label5"/>
                        <div id="panel5">
                            <label id="label3" bindfield="" readonly="true">单位成本:</label>
                            <label id="label4" bindfield="currtype">la</label>
                            <label id="label7" bindfield="price">label</label> 
                        </div> 
                    </div> 
                </div>
                <image id="image0" onclick="openProductDetailInfoView" src="themes/ios7/designer/arrow.png"/> 
            </div> 
        </div> 
    </widget-define> 
</region>
