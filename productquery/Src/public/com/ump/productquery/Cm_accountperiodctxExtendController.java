package com.ump.productquery;

import java.util.*;

import org.json.*;

import com.yonyou.uap.um.context.util.*;
import com.yonyou.uap.um.controller.*;
import com.yonyou.uap.um.gateway.exception.*;
import com.yonyou.uap.um.gateway.service.*;

public class Cm_accountperiodctxExtendController extends Cm_accountperiodctxController
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
     * 根据工厂获得会计期间列表
     * @param args
     * @return
     * @throws JSONException
     * @throws GatewayServiceException 
     */
    @SuppressWarnings("unchecked")
	public String getAccperiodListByPK_factory(String args) throws JSONException, GatewayServiceException {
    	JSONObject jsonObj = new JSONObject(args);
    	Map argsMap = UmContextUtil.transJsonToMap(jsonObj);
//    	int startline = Integer.parseInt(jsonObj.getString("startline"));
//		int pagesize = Integer.parseInt(jsonObj.getString("count"));
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
		
//		int len = entryList.size();
//		int arrLen = startline + pagesize - 1;
//		/** 控制显示查看更多 */
//		String visibleLoadMore = "true";
//		if (arrLen >= len) {
//			arrLen = len;
//			visibleLoadMore = "false";
//		}
		JSONArray yearlistjson = new JSONArray();
//		JSONArray yearmonthJsonList = new JSONArray();
		
		for (String year : yearSet){
			JSONObject yearjson = new JSONObject();
			JSONArray yearmonthlistjson = new JSONArray();
			yearjson.put("year", year);
			for (String[] strs : entryList){
				if (strs[1].startsWith(year)){
					JSONObject yearmonthjson = new JSONObject();
					yearmonthjson.put("pk_accperiodmonth", strs[0]);
					yearmonthjson.put("yearmonth", strs[1]);
					yearmonthjson.put("checked", "false");
					yearmonthlistjson.put(yearmonthjson);
				}
			}
			yearjson.put("bd_accperiodlist", yearmonthlistjson);
			yearlistjson.put(yearjson);
		}
//		for (int i = startline ; i <= arrLen; i++) {
//			String[] strs = entryList.get(i - 1);
//			JSONObject yearmonthJson = new JSONObject();
//			yearmonthJson.put("pk_accperiodmonth", strs[0]);
//			yearmonthJson.put("yearmonth", strs[1]);
//			yearmonthJsonList.put(yearmonthJson);
//		}
		json.put("yearlist", yearlistjson);
		return json.toString();
    }
}
