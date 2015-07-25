package com.ump.productquery;

import java.util.*;

import nc.cm.mobile.itf.IMutiProductQueryConst;
import nc.cm.mobile.utils.CMMobileNumberFormatUtils;
import nc.vo.jcom.lang.StringUtil;
import nc.vo.pub.BusinessException;

import org.json.*;

import com.sun.org.apache.bcel.internal.generic.ARRAYLENGTH;
import com.yonyou.uap.um.context.util.*;
import com.yonyou.uap.um.controller.*;
import com.yonyou.uap.um.gateway.exception.*;
import com.yonyou.uap.um.gateway.service.*;

public class Cm_mutiperiodctxExtendController extends Cm_mutiperiodctxController
{ 
    @Override
    public String load(String args) {
        // TODO finish the method body
        return super.load(args);
    }

    @Override
    public String save(String args) {
        // TODO finish the method body
        return super.save(args);
    }
    
    // TODO finish your special method
    @SuppressWarnings("unchecked")
	public String getMutiPeriodListByPk_materialAndPk_factory(String args) throws JSONException, GatewayServiceException, BusinessException{
    	JSONObject jsonObj = new JSONObject(args);
    	Map argsMap = UmContextUtil.transJsonToMap(jsonObj);
    	String orderby = (String) argsMap.get("orderby");
	    String orderbytype = (String) argsMap.get("orderbytype");
	    if (StringUtil.isEmptyWithTrim(orderby)){
	    	argsMap.remove("orderby");
	    	argsMap.put("orderby", new String[]{IMutiProductQueryConst.ORDERBY_ACCPERIOD,IMutiProductQueryConst.ORDERBYTYPE_UP});
	    } else if (!StringUtil.isEmptyWithTrim(orderby) && StringUtil.isEmptyWithTrim(orderbytype)){
	    	argsMap.remove("orderby");
	    	argsMap.put("orderby", new String[]{orderby,IMutiProductQueryConst.ORDERBYTYPE_DOWN});
	    } else {
	    	argsMap.remove("orderby");
	    	argsMap.put("orderby", new String[]{orderby,orderbytype});
	    }
    	String appid = "38300306"; 
		String serviceid = "getMutiPeriodListByPk_materialAndPk_factory";
		JSONObject json = new JSONObject();
		json.put("orderby", orderby);
		json.put("pk_material", argsMap.get("pk_material"));
		json.put("factoryname", argsMap.get("factoryname"));
		json.put("productname", argsMap.get("productname"));
		json.put("pk_factory", argsMap.get("pk_factory"));
		
		String refresult = (String) argsMap.get("refresult");//对比期间选择参照回调传参
		List<String> allyearmonthList = new ArrayList<String>();//所有选择的期间结合
		if (StringUtil.isEmptyWithTrim(refresult)){
			argsMap.put("yearmonths", new String[]{});
		} else{
			argsMap.put("yearmonths", refresult.split(","));
			allyearmonthList.addAll(Arrays.asList(refresult.split(",")));
		}
		
		IGatewayService service = GatewayServiceFactory.findGatewayService(appid, serviceid, argsMap);
		List<Map<String,String>> retObj =  (List<Map<String, String>>) service.doService();
		if (retObj.isEmpty()){
			return json.toString();
		}
		JSONArray datalist = new JSONArray();//存放图表数据
		JSONObject chartDataObj = new JSONObject();
		JSONArray periodproductlist = new JSONArray();//存放成本数据
		List<JSONObject> beforesortedlist = new ArrayList<JSONObject>();
//		int count = 0;
//		int graphlen = 10;//线状图显示个数
		StringBuffer refresultBuffer = new StringBuffer();
		List<String> hasdataList = new ArrayList<String>();//所有选择的期间中有数据的集合
		for (Map<String,String> map : retObj){
			JSONObject factoryproductinfo = new JSONObject();
			factoryproductinfo.put("total", CMMobileNumberFormatUtils.getInstance().format(map.get("total")));
			factoryproductinfo.put("quantity", CMMobileNumberFormatUtils.getInstance().format(map.get("quantity")));
			factoryproductinfo.put("pk_accperiodmonth", map.get("pk_accperiodmonth"));
			factoryproductinfo.put("price", CMMobileNumberFormatUtils.getInstance().format(map.get("price")));
			factoryproductinfo.put("yearmonth", map.get("yearmonth"));
			hasdataList.add(map.get("yearmonth"));
			factoryproductinfo.put("measdoc", map.get("measdoc"));
			factoryproductinfo.put("cprodcostid", map.get("cprodcostid"));
			factoryproductinfo.put("currtype", map.get("currtype"));
			refresultBuffer.append(map.get("yearmonth")).append(",");
			beforesortedlist.add(factoryproductinfo);
//			periodproductlist.put(factoryproductinfo);
			
//			count++;
//			if (count <= graphlen){
				JSONObject entrydata = new JSONObject();//构造图表数据
				entrydata.put("key", map.get("yearmonth"));
				entrydata.put("value", map.get("price"));
				datalist.put(entrydata);
//			}
		}
		//补充没有数据的期间显示为无
		if (allyearmonthList.size() > 0){
			for (String yearmonth : allyearmonthList){
				if (!hasdataList.contains(yearmonth)){
					JSONObject factoryproductinfo = new JSONObject();
					factoryproductinfo.put("total", IMutiProductQueryConst.NONEDATAFORMAT);
					factoryproductinfo.put("quantity",IMutiProductQueryConst.NONEDATAFORMAT);
					factoryproductinfo.put("pk_accperiodmonth", "");
					factoryproductinfo.put("price", IMutiProductQueryConst.NONEDATAFORMAT);
					factoryproductinfo.put("yearmonth", yearmonth);
					factoryproductinfo.put("measdoc", "");
					factoryproductinfo.put("cprodcostid", "");
					factoryproductinfo.put("currtype", "");
					beforesortedlist.add(factoryproductinfo);
//					periodproductlist.put(factoryproductinfo);
				}
			}
		}
		if (!StringUtil.isEmptyWithTrim(refresult)){
			json.put("refresult", refresult);
		} else{
			json.put("refresult", refresultBuffer.toString().substring(0, refresultBuffer.toString().length() - 1));
		}
		if (beforesortedlist.size() > 0){
			//进行排序操作
			JSONObject[] beforesortarray = beforesortedlist.toArray(new JSONObject[0]);
			Arrays.sort(beforesortarray,new Comparator<JSONObject>() {
				@Override
				public int compare(JSONObject arg0, JSONObject arg1) {
					// TODO 自动生成的方法存根
					try {
						return String.valueOf(arg0.get("yearmonth")).compareTo(String.valueOf(arg1.get("yearmonth")));
					} catch (JSONException e) {
						return 0;
					}
				}
			});
			for (JSONObject jsonobj : beforesortarray){
				periodproductlist.put(jsonobj);
			}
		}
		
		json.put("periodproductlist", periodproductlist);
		
		chartDataObj.put("data", datalist);
		chartDataObj.put("seriseName", "多期间对比");
		chartDataObj.put("chartType", "3");
		JSONArray chartData = new JSONArray();
		chartData.put(chartDataObj);
		JSONObject charViewData = new JSONObject();
		charViewData.put("ChartData", chartData);
		json.put("charViewData", charViewData);
		
		return json.toString();
    }
}
