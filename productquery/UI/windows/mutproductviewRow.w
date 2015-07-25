<?xml version="1.0" encoding="UTF-8"?>

<region id="region1"> 
    <import ref="mutproductviewRow.css" type="css"/>  
    <widget-define xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="mutproductviewRow" context="mutproductqueryctx">  
        <div id="panel9"> 
            <div id="panel0"> 
                <div id="panel1"> 
                    <div id="panel4"> 
                        <image id="image1" bindfield="iconsrc" onclick="this.concern()" scaletype="fitcenter" src="concerned.png"/> 
                    </div> 
                </div>  
                <div id="panel22"> 
                    <div id="panel2"> 
                        <div id="panel3"> 
                            <div id="panel5"> 
                                <label id="label0" bindfield="name">label</label> 
                            </div>  
                            <div id="panel6"> 
                                <label id="label2" bindfield="quantityshowname">产量:</label>  
                                <label id="label3" bindfield="priceshowname">单位成本:</label> 
                            </div> 
                        </div> 
                    </div>  
                    <image id="image0" src="themes/ios7/designer/arrow.png"/> 
                </div> 
            </div>  
            <label id="label5"/> 
        </div> 
    </widget-define> 
</region>
