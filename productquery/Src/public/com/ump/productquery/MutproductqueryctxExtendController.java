package com.ump.productquery;

import java.util.*;

import nc.bs.logging.Logger;
import nc.cm.mobile.itf.IMutiProductQueryConst;
import nc.cm.mobile.utils.CMMobileNumberFormatUtils;
import nc.vo.jcom.lang.StringUtil;
import nc.vo.pub.BusinessException;

import org.json.*;

import com.yonyou.uap.um.context.util.*;
import com.yonyou.uap.um.controller.*;
import com.yonyou.uap.um.gateway.exception.*;
import com.yonyou.uap.um.gateway.service.*;

public class MutproductqueryctxExtendController extends MutproductqueryctxController
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
    
    /**
     * 根据工厂和会计期间获得产品列表(完工产品)
     * @param args
     * @return
     * @throws JSONException
     * @throws GatewayServiceException
     * @throws BusinessException 
     */
    @SuppressWarnings({ "unchecked", "rawtypes" })
	public String getProductListByPk_factoryAndAccepriod(String args) throws JSONException, GatewayServiceException, BusinessException{
    	JSONObject jsonObj = new JSONObject(args);
    	Map argsMap = UmContextUtil.transJsonToMap(jsonObj);
    	JSONObject json = new JSONObject();
    	int startline = Integer.parseInt(jsonObj.getString("startline"));
		int pagesize = Integer.parseInt(jsonObj.getString("count"));
	    String orderby = (String) argsMap.get("orderby");
	    String orderbytype = (String) argsMap.get("orderbytype");
	    if (StringUtil.isEmptyWithTrim(orderby)){
	    	orderby = IMutiProductQueryConst.ORDERBY_PRICE;
	    	orderbytype = IMutiProductQueryConst.ORDERBYTYPE_DOWN;
	    } else if (!StringUtil.isEmptyWithTrim(orderby) && StringUtil.isEmptyWithTrim(orderbytype)){
	    	orderbytype = IMutiProductQueryConst.ORDERBYTYPE_DOWN;
	    } 
	    argsMap.remove("orderby");
    	argsMap.put("orderby", new String[]{orderby,orderbytype});
    	String appid = "38300306"; 
		String serviceid = "getProductListByPk_factoryAndAccepriod";
		
		//表头字段(工厂期间)
		json.put("orderbytype", orderbytype);
		json.put("orderby", orderby);
		json.put("displaytype", argsMap.get("displaytype"));
		json.put("pk_factory",argsMap.get("pk_factory"));
		json.put("factoryname", argsMap.get("factoryname"));
		json.put("pk_accperiodmonth", argsMap.get("pk_accperiodmonth"));
		json.put("yearmonth", argsMap.get("yearmonth"));
		//表体字段(产品单位成本)
		IGatewayService service = GatewayServiceFactory.findGatewayService(appid, serviceid, argsMap);
		try{
			List<Map<String,String>> retObj = (List<Map<String,String>>) service.doService();
			if(retObj.isEmpty()){
				json.put("productlist", new JSONArray());
				return json.toString();
			}
			
			List<Map<String,String>> entryList = new ArrayList<Map<String,String>>();
			for(Map<String,String> map : retObj){
				entryList.add(map);
			}
			int len = entryList.size();
			int arrLen = startline + pagesize - 1;
			/** 控制显示查看更多 */
			String visibleLoadMore = "true";
			if (arrLen >= len) {
				arrLen = len;
				visibleLoadMore = "false";
			}
			json.put("visibleLoadMore", visibleLoadMore);
			//JSONObject chartDataObj = new JSONObject();
//			JSONArray datalist = new JSONArray();
			JSONArray productlist = new JSONArray();
//			int graphlen = 6;//柱状图显示个数
			for (int i = startline ; i <= arrLen; i++) {
				Map<String,String> map = entryList.get(i - 1);
				JSONObject productdata = new JSONObject();
				//构造结果列表数据
				productdata.put("cprodcostid", map.get("cprodcostid"));
				productdata.put("pk_material", map.get("pk_material"));
				productdata.put("code",map.get("code"));
				productdata.put("name", map.get("name"));
				productdata.put("quantity",CMMobileNumberFormatUtils.getInstance().format(map.get("quantity")));
				productdata.put("total", CMMobileNumberFormatUtils.getInstance().format(map.get("total")));
				productdata.put("currtype", map.get("currtype"));
				productdata.put("price", CMMobileNumberFormatUtils.getInstance().format(map.get("price")));
				productdata.put("mesadoc", map.get("mesadoc"));
				productdata.put("currentState", map.get("currentState"));
				productlist.put(productdata);
				
//				if (i <= graphlen){
//					JSONObject entrydata = new JSONObject();//构造图表数据
//					entrydata.put("key", map.get("code"));
//					entrydata.put("value", map.get("price"));
//					datalist.put(entrydata);
//				}
			}
			
			json.put("productlist", productlist);
			
//			chartDataObj.put("data", datalist);
//			chartDataObj.put("seriseName", "多产品对比");
//			chartDataObj.put("chartType", "0");
//			JSONArray chartData = new JSONArray();
//			chartData.put(chartDataObj);
//			JSONObject charViewData = new JSONObject();
//			charViewData.put("ChartData", chartData);
//			json.put("charViewData", charViewData);
			json.put("lastusedfactory", argsMap.get("pk_factory"));
			return json.toString();
		}catch(Exception e){
			String msg = e.getMessage();
    		json.put("error_message", msg);
    		json.put("productlist", new JSONArray());
    		json.put("visibleLoadMore", "false");
    		return json.toString();
		}
    }
    
    public String getPrevOrNextYearmonth(String args) throws JSONException, GatewayServiceException, BusinessException{
    	JSONObject jsonObj = new JSONObject(args);
    	Map argsMap = UmContextUtil.transJsonToMap(jsonObj);
    	int startline = Integer.parseInt(jsonObj.getString("startline"));
		int pagesize = Integer.parseInt(jsonObj.getString("count"));
    	JSONObject json = new JSONObject();
    	json.put("pk_factory", argsMap.get("pk_factory"));
    	json.put("factoryname", argsMap.get("factoryname"));
    	String orderby = (String) argsMap.get("orderby");
 	    String orderbytype = (String) argsMap.get("orderbytype");
 	    if (StringUtil.isEmptyWithTrim(orderby)){
 	    	orderby = IMutiProductQueryConst.ORDERBY_PRICE;
 	    	orderbytype = IMutiProductQueryConst.ORDERBYTYPE_DOWN;
 	    } else if (!StringUtil.isEmptyWithTrim(orderby) && StringUtil.isEmptyWithTrim(orderbytype)){
 	    	orderbytype = IMutiProductQueryConst.ORDERBYTYPE_DOWN;
 	    } 
 	    argsMap.remove("orderby");
     	argsMap.put("orderby", new String[]{orderby,orderbytype});
     	json.put("orderbytype", orderbytype);
     	json.put("orderby", orderby);
    	json.put("displaytype", argsMap.get("displaytype"));
    	String appid = "38300306";
    	String serviceid = "getPrevOrNextYearMonth";
    	IGatewayService service = GatewayServiceFactory.findGatewayService(appid, serviceid, argsMap);
    	try{
    		List<Map<String,String>> retObj = (List<Map<String,String>>) service.doService();
    		Map headitems = retObj.get(0);
        	json.put("pk_accperiodmonth", headitems.get("pk_accperiodmonth"));
        	json.put("yearmonth", headitems.get("yearmonth"));
        	retObj.remove(0);
        	
        	int len = retObj.size();
    		int arrLen = startline + pagesize - 1;
    		/** 控制显示查看更多 */
    		String visibleLoadMore = "true";
    		if (arrLen >= len) {
    			arrLen = len;
    			visibleLoadMore = "false";
    		}
    		json.put("visibleLoadMore", visibleLoadMore);
    		JSONArray productlist = new JSONArray();
    		for (int i = startline ; i <= arrLen; i++) {
    			Map<String,String> map = retObj.get(i - 1);
    			JSONObject productdata = new JSONObject();
    			//构造结果列表数据
    			productdata.put("cprodcostid", map.get("cprodcostid"));
    			productdata.put("pk_material", map.get("pk_material"));
    			productdata.put("code",map.get("code"));
    			productdata.put("name", map.get("name"));
    			productdata.put("quantity",CMMobileNumberFormatUtils.getInstance().format(map.get("quantity")));
    			productdata.put("total", CMMobileNumberFormatUtils.getInstance().format(map.get("total")));
    			productdata.put("currtype", map.get("currtype"));
    			productdata.put("price", CMMobileNumberFormatUtils.getInstance().format(map.get("price")));
    			productdata.put("mesadoc", map.get("mesadoc"));
    			productdata.put("currentState", map.get("currentState"));
    			productlist.put(productdata);
    		}
    		json.put("productlist", productlist);
    		json.put("lastusedfactory", argsMap.get("pk_factory"));
        	return json.toString();
    	}catch(Exception e){
    		String msg = e.getMessage();
    		json.put("pk_accperiodmonth", argsMap.get("pk_accperiodmonth"));
    		json.put("yearmonth", argsMap.get("yearmonth"));
    		json.put("error_message", msg);
    		return json.toString();
    	}
    }
    
    public String getDefaultFactoryAndPeriodByCurrtentUser(String args) throws JSONException, GatewayServiceException{
    	JSONObject jsonObj = new JSONObject(args);
    	Map argsMap = UmContextUtil.transJsonToMap(jsonObj);
    	int startline = Integer.parseInt(jsonObj.getString("startline"));
		int pagesize = Integer.parseInt(jsonObj.getString("count"));
    	JSONObject json = new JSONObject();
    	String appid = "38300306";
    	String serviceid = "getDefaultFactoryAndPeriodByCurrtentUser";
    	IGatewayService service = GatewayServiceFactory.findGatewayService(appid, serviceid, argsMap);
    	List<Map<String,String>> retObj = (List<Map<String,String>>) service.doService();
    	List<Map<String,String>> entryList = new ArrayList<Map<String,String>>();
		for(Map<String,String> map : retObj){
			entryList.add(map);
		}
		Map<String,String> headitems = entryList.get(0);
		
		json.put("displaytype", headitems.get("displaytype"));
		json.put("orderbytype", headitems.get("orderbytype"));
		json.put("orderby", headitems.get("orderby"));
		json.put("pk_factory",headitems.get("pk_factory"));
		json.put("factoryname", headitems.get("factoryname"));
		json.put("pk_accperiodmonth", headitems.get("pk_accperiodmonth"));
		json.put("yearmonth", headitems.get("yearmonth"));
		entryList.remove(0);
		int len = entryList.size();
		int arrLen = startline + pagesize - 1;
		/** 控制显示查看更多 */
		String visibleLoadMore = "true";
		if (arrLen >= len) {
			arrLen = len;
			visibleLoadMore = "false";
		}
		json.put("visibleLoadMore", visibleLoadMore);
		JSONArray productlist = new JSONArray();
		for (int i = startline ; i <= arrLen; i++) {
			Map<String,String> map = entryList.get(i - 1);
			JSONObject productdata = new JSONObject();
			//构造结果列表数据
			productdata.put("cprodcostid", map.get("cprodcostid"));
			productdata.put("pk_material", map.get("pk_material"));
			productdata.put("code",map.get("code"));
			productdata.put("name", map.get("name"));
			productdata.put("quantity",CMMobileNumberFormatUtils.getInstance().format(map.get("quantity")));
			productdata.put("total", CMMobileNumberFormatUtils.getInstance().format(map.get("total")));
			productdata.put("currtype", map.get("currtype"));
			productdata.put("price", CMMobileNumberFormatUtils.getInstance().format(map.get("price")));
			productdata.put("mesadoc", map.get("mesadoc"));
			productdata.put("currentState", map.get("currentState"));
			productlist.put(productdata);
		}
		json.put("productlist", productlist);
		json.put("lastusedfactory", headitems.get("pk_factory"));
    	return json.toString();
    }
    
    public String doOrCancelConcernProduct(String args) throws JSONException, GatewayServiceException{
    	JSONObject jsonObj = new JSONObject(args);
    	Map argsMap = UmContextUtil.transJsonToMap(jsonObj);
    	String productlist = (String) argsMap.get("productlist");
    	JSONObject productjsonObj = new JSONObject(productlist);
    	Map productlistargsMap = UmContextUtil.transJsonToMap(productjsonObj);
    	argsMap.put("currentState", productlistargsMap.get("currentState"));
    	argsMap.put("pk_material",productlistargsMap.get("pk_material"));
    	String appid = "38300306";
    	String serviceid = "doOrCancelConcernProduct";
    	IGatewayService service = GatewayServiceFactory.findGatewayService(appid, serviceid, argsMap);
    	Map<String,String> retObj = (Map<String,String>) service.doService();
    	String resultmsg = retObj.get("resultmsg");
    	if (resultmsg != null && resultmsg.startsWith("fail")){
    		String[] strs = resultmsg.split("#");
    		if (strs.length > 1)
    			productjsonObj.put("error_message", strs[1]);
    	}
		productjsonObj.put("currentState", retObj.get("currentState"));
    	if ("concernDone".equals(retObj.get("currentState"))){
    		productjsonObj.put("iconsrc", "concerned.png");
    	} else if ("concernCanceled".equals(retObj.get("currentState"))){
    		productjsonObj.put("iconsrc", "notconcerned.png");
    	}
    	
    	return productjsonObj.toString();
    }
    
    public String getAccperiodByFactory(String args) throws JSONException, GatewayServiceException{
    	JSONObject jsonObj = new JSONObject(args);
    	Map argsMap = UmContextUtil.transJsonToMap(jsonObj);
    	JSONObject json = new JSONObject();
		
    	String appid = "38300306"; 
		String serviceid = "getAccperiodListByPK_factory";
		
		IGatewayService service = GatewayServiceFactory.findGatewayService(appid, serviceid, argsMap);
		Map<String, Map<String,String>> retObj = (Map<String, Map<String,String>>) service.doService();
		if(retObj.isEmpty()){
			return new JSONObject().toString();
		}
		List<String[]> entryList = new ArrayList<String[]>();
		Set<String> yearSet = new LinkedHashSet<String>();
		
		for(Map<String,String> map : ((Map<String, Map<String,String>>)retObj).values()){
			String[] strs = new String[2];
			strs[0] = map.get("pk_accperiodmonth");
			strs[1] = map.get("yearmonth");
			entryList.add(strs);
			String year = strs[1].substring(0, 4);
			yearSet.add(year);
		}
		JSONArray yeararray = new JSONArray();
		if (yearSet.size() > 0){
			for (String year : yearSet){
				yeararray.put(year);
			}
		}
		json.put("yearlist", yeararray);
		return json.toString();
    }
}
