package com.ump.productquery;

import java.util.*;

import nc.vo.jcom.lang.StringUtil;

import org.json.*;

import com.yonyou.uap.um.context.util.*;
import com.yonyou.uap.um.controller.*;
import com.yonyou.uap.um.gateway.exception.*;
import com.yonyou.uap.um.gateway.service.*;

public class Cm_mutiselectperiodctxExtendController extends Cm_mutiselectperiodctxController
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
    public String PeriodCompareSelect(String args) throws JSONException, GatewayServiceException{
    	JSONObject json = new JSONObject();
    	JSONObject jsonObj = new JSONObject(args);
    	Map argsMap = UmContextUtil.transJsonToMap(jsonObj);
    	String refresultstr = (String) argsMap.get("refresultstr");
    	Set<String> yearmonthsSet = new HashSet<String>();
    	if (!StringUtil.isEmptyWithTrim(refresultstr)){
    		String[] yearmonths = refresultstr.split(",");
    		yearmonthsSet.addAll(Arrays.asList(yearmonths));
    	}
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
			String year = strs[1].substring(0, 4);
			yearSet.add(year);
			entryList.add(strs);
		}
		JSONArray yearlistjson = new JSONArray();
		List<String> indexs = new ArrayList<String>();
		int i = 0;
		for (String year : yearSet){
			int j = 0;
			JSONObject yearjson = new JSONObject();
			JSONArray yearmonthlistjson = new JSONArray();
			yearjson.put("year", year);
			for (String[] strs : entryList){
				if (strs[1].startsWith(year)){
					JSONObject yearmonthjson = new JSONObject();
					yearmonthjson.put("pk_accperiodmonth", strs[0]);
					yearmonthjson.put("yearmonth", strs[1]);
					if (yearmonthsSet.contains(strs[1])){
						yearmonthjson.put("checked", true);
						indexs.add(String.valueOf(12*i+j));
					}else{
						yearmonthjson.put("checked", false);
					}
					yearmonthlistjson.put(yearmonthjson);
					j++;
				}
			}
			yearjson.put("yearmonthlist", yearmonthlistjson);
			yearjson.put("checked", false);
			yearlistjson.put(yearjson);
			i++;
		}
		json.put("yearlist", yearlistjson);
		json.put("firstselectedindex", indexs.size() > 0 ? indexs.get(0) : 0);
    	return json.toString();
    }
}
