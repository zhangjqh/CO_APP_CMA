package com.ump.productquery;

import java.util.*;

import nc.cm.mobile.itf.IMutiProductQueryConst;
import nc.cm.mobile.utils.CMMobileNumberFormatUtils;
import nc.vo.jcom.lang.StringUtil;
import nc.vo.pub.BusinessException;

import org.json.*;

import com.yonyou.uap.um.context.util.*;
import com.yonyou.uap.um.controller.*;
import com.yonyou.uap.um.gateway.exception.*;
import com.yonyou.uap.um.gateway.service.*;

public class Cm_unitcostctxExtendController extends Cm_unitcostctxController {
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
	public String getProductDetailInfoByParams(String args)
			throws JSONException, GatewayServiceException, BusinessException {
		JSONObject jsonObj = new JSONObject(args);
		Map argsMap = UmContextUtil.transJsonToMap(jsonObj);
		JSONObject json = new JSONObject();
		json.put("pk_factory", argsMap.get("pk_org"));
		json.put("factoryname", argsMap.get("factoryname"));
		json.put("pk_accperiodmonth", argsMap.get("pk_accperiodmonth"));
		json.put("yearmonth", argsMap.get("yearmonth"));
		json.put("pk_material", argsMap.get("pk_material"));
		json.put("productname", argsMap.get("productname"));
		String appid = IMutiProductQueryConst.APPID; 
		String serviceid = "getProductDetailInfoByParams";
		IGatewayService service = GatewayServiceFactory.findGatewayService(
				appid, serviceid, argsMap);
		List<Map<String, String>> retObj = (List<Map<String, String>>) service
				.doService();
		if (retObj == null || retObj.isEmpty()) {
			json.put("no_result_message", "没有明细数据!");
			json.put("total", IMutiProductQueryConst.NONEDATAFORMAT);
			json.put("quantity", IMutiProductQueryConst.NONEDATAFORMAT);
			json.put("price", IMutiProductQueryConst.NONEDATAFORMAT);
			return json.toString();
		}
		Map<String, String> headitems = retObj.get(0);
		JSONObject concernjson = new JSONObject();
		concernjson.put("currentState", headitems.get("currentState"));
		if (IMutiProductQueryConst.CONCERN_STATE_DONE.equals(headitems.get("currentState"))){
			concernjson.put("iconsrc", "concerned.png");
		} else if (IMutiProductQueryConst.CONCERN_STATE_CANCELED.equals(headitems.get("currentState"))){
			concernjson.put("iconsrc", "notconcerned.png");
		}
		json.put("concern", concernjson);
		
		String hasdata = headitems.get("hasdata");
		if ("false".equals(hasdata)){
			json.put("no_result_message", "没有明细数据!");
			json.put("total", IMutiProductQueryConst.NONEDATAFORMAT);
			json.put("quantity", IMutiProductQueryConst.NONEDATAFORMAT);
			json.put("price", IMutiProductQueryConst.NONEDATAFORMAT);
			return json.toString();
		}
		json.put("total", CMMobileNumberFormatUtils.getInstance().format(headitems.get("total")));
		json.put("price", CMMobileNumberFormatUtils.getInstance().format(headitems.get("price")));
		json.put("quantity", CMMobileNumberFormatUtils.getInstance().format(headitems.get("quantity")));
		json.put("currtype", headitems.get("currtype"));
		json.put("mesadoc", headitems.get("measdoc"));
		json.put("totalshowname", json.optString("currtype") + json.optString("total") );
		json.put("quantityshowname", json.optString("quantity") + json.optString("mesadoc") );
		json.put("priceshowname", json.optString("currtype") + json.optString("price") );
		
		String detailcurrtype = json.getString("currtype");
		retObj.remove(0);
		JSONArray datalist = new JSONArray();
		for (Map<String, String> map : retObj) {
			JSONObject productdetailinfo = new JSONObject();
			productdetailinfo.put("total", CMMobileNumberFormatUtils.getInstance().format(map.get("total")));
			productdetailinfo.put("price", CMMobileNumberFormatUtils.getInstance().format(map.get("price")));
			productdetailinfo.put("detailcurrtype", detailcurrtype);
			String factortype = map.get("factortype");
			productdetailinfo.put("factortype", map.get("factortype"));
			if ("2".equals(factortype)){
				productdetailinfo.put("factoricon", "artifical.png");
				productdetailinfo.put("factorname", "人工费");
			}else if("1".equals(factortype)){
				productdetailinfo.put("factoricon", "makings.png");
				productdetailinfo.put("factorname", "材料费");
			}else {
				productdetailinfo.put("factoricon", "manufacture.png");
				productdetailinfo.put("factorname", "制造费");
			}
			datalist.put(productdetailinfo);
		}
		json.put("productinfodetails", datalist);
		return json.toString();
	}

	public String loadDetailGraph(String args) throws JSONException, BusinessException {
		JSONObject jsonObj = new JSONObject(args);
//		Map argsMap = UmContextUtil.transJsonToMap(jsonObj);
		JSONObject json = new JSONObject();
//		JSONObject chartDataObj = new JSONObject();
//		JSONArray datalist = new JSONArray();
//		String productinfodetail = (String) argsMap.get("productinfodetail");
//		if (StringUtil.isEmptyWithTrim(productinfodetail)){
//			throw new BusinessException("当前明细为空，无法展示图表数据!");
//		}
//		JSONArray productlist = new JSONArray(
//				(String) argsMap.get("productinfodetail"));
//		for (int i = 0; i < productlist.length(); i++) {
//			JSONObject listdata = productlist.getJSONObject(i);
//			JSONObject entrydata = new JSONObject();// 构造图表数据
//			entrydata.put("key", listdata.get("factorname"));
//			entrydata.put("value", listdata.get("price"));
//			datalist.put(entrydata);
//		}
//		// JSONObject entrydata = new JSONObject();//构造图表数据
//		// entrydata.put("key", "test1");
//		// entrydata.put("value", "12.02");
//		// datalist.put(entrydata);
//		//
//		// JSONObject entrydata1 = new JSONObject();//构造图表数据
//		// entrydata1.put("key", "test2");
//		// entrydata1.put("value", "22");
//		// datalist.put(entrydata1);
//		//
//		// JSONObject entrydata2 = new JSONObject();//构造图表数据
//		// entrydata2.put("key", "test3");
//		// entrydata2.put("value", "33");
//		// datalist.put(entrydata2);
//
//		// JSONObject entrydata3 = new JSONObject();//构造图表数据
//		// entrydata3.put("key", "test4");
//		// entrydata3.put("value", "34");
//		// datalist.put(entrydata3);
//
//		chartDataObj.put("data", datalist);
//		chartDataObj.put("seriseName", "单位成本分布");
//		chartDataObj.put("chartType", "7");// 饼状图
//		JSONArray chartData = new JSONArray();
//		chartData.put(chartDataObj);
//		JSONObject charViewData = new JSONObject();
//		charViewData.put("ChartData", chartData);
//		json.put("charViewData", charViewData);
		return json.toString();
	}
	
	public String doOrCancelConcernProduct(String args) throws JSONException, GatewayServiceException{
		JSONObject jsonObj = new JSONObject(args);
    	Map argsMap = UmContextUtil.transJsonToMap(jsonObj);
    	JSONObject productjsonObj = new JSONObject();
    	String appid = IMutiProductQueryConst.APPID; 
    	String serviceid = "doOrCancelConcernProduct";
    	argsMap.put("currentState", argsMap.get("state"));
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
}
