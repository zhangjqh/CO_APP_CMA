package com.ump.productquery;

import java.util.*;

import nc.cm.mobile.itf.IMutiProductQueryConst;
import nc.vo.jcom.lang.StringUtil;

import org.json.*;

import com.yonyou.uap.um.context.util.*;
import com.yonyou.uap.um.controller.*;
import com.yonyou.uap.um.gateway.exception.*;
import com.yonyou.uap.um.gateway.service.*;

public class Cm_mutiselectfactoryctxExtendController extends Cm_mutiselectfactoryctxController
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
    public String factoryCompareSelect(String args) throws JSONException, GatewayServiceException{
    	JSONObject jsonObj = new JSONObject(args);
    	Map argsMap = UmContextUtil.transJsonToMap(jsonObj);
//    	int startline = Integer.parseInt(jsonObj.getString("startline"));
//		int pagesize = Integer.parseInt(jsonObj.getString("count"));
    	JSONObject json = new JSONObject();
    	
    	
    	String appid =IMutiProductQueryConst.APPID; 
		String serviceid = "getFactoryListByKeyWord";
		
		String lastusedfactoryString = String.valueOf(argsMap.get("lastusedfactorystr")) ;
		if ("".equals(lastusedfactoryString)) {
		      lastusedfactoryString = "[]";
		    }
		json.put("lastusedfactorys", lastusedfactoryString);
		JSONArray jarray = new JSONArray(lastusedfactoryString);
		List<String> lastusedfactorypks = new ArrayList<String>();
		if (jarray != null && jarray.length() > 0){
			for (int i=0;i< jarray.length();i++){
				JSONObject jobj = jarray.getJSONObject(i);
				String pk_factory = jobj.getString("lastusedfactoryitem");
				if (!StringUtil.isEmptyWithTrim(pk_factory)){
					lastusedfactorypks.add(pk_factory);
				}
			}
		}
		
		IGatewayService service = GatewayServiceFactory.findGatewayService(appid, serviceid, argsMap);
		List<Map<String,String>> retObj = (List<Map<String,String>>) service.doService();
		if(retObj.isEmpty()){
			JSONObject lastusedjson = new JSONObject();
			lastusedjson.put("factorygroupname", "最近使用");
			JSONObject org_factoryjson = new JSONObject();
			org_factoryjson.put("factorygroupname", "全部");
			JSONArray grouplistarray = new JSONArray();
			grouplistarray.put(lastusedjson);
			grouplistarray.put(org_factoryjson);
			json.put("factorygrouplist", grouplistarray);
			return json.toString();
		}
		
		String refresultstr = (String) argsMap.get("refresultstr");
		Set<String> pk_factorySet = new HashSet<String>();
		if (!StringUtil.isEmptyWithTrim(refresultstr)){
			String[] pk_factorys = refresultstr.split(",");
			for (String pk2name : pk_factorys){
				String[] pk = pk2name.split("#");
				pk_factorySet.add(pk[0]);
			}
		}
		
		Map<String,String[]> allfactoryinfos = new HashMap<String, String[]>();//存放所有工厂信息
		int index=0;
		int selectitemindex = 0;
		JSONArray factorylist = new JSONArray();
		for (Map<String,String> map : retObj){
			String pk_factory = map.get("pk_factory");
			String factorycode = map.get("factorycode");
			String factoryname = map.get("factoryname");
			String[] strs = new String[3];
			strs[0] = pk_factory;
			strs[1] = factorycode;
			strs[2] = factoryname;
			JSONObject org_factory = new JSONObject();
			allfactoryinfos.put(pk_factory, strs);
			org_factory.put("pk_factory", map.get("pk_factory"));
			org_factory.put("factorycode", map.get("factorycode"));
			org_factory.put("factoryname", map.get("factoryname"));
			if (pk_factorySet.contains(map.get("pk_factory"))){
				org_factory.put("checked", "true");
				selectitemindex = index;
			}else{
				org_factory.put("checked", "false");
			}
			factorylist.put(org_factory);
			index++;
		}
//		int len = retObj.size();
//		int arrLen = startline + pagesize - 1;
//		/** 控制显示查看更多 */
//		String visibleLoadMore = "true";
//		if (arrLen >= len) {
//			arrLen = len;
//			visibleLoadMore = "false";
//		}
//		json.put("visibleLoadMore", visibleLoadMore);
		
//		JSONArray org_factorylist = new JSONArray();
//		List<String> indexs = new ArrayList<String>();
//		
//		for (int i = startline ; i <= arrLen; i++) {
//			Map<String,String> map = retObj.get(i - 1);
//			JSONObject org_factory = new JSONObject();
//			org_factory.put("pk_factory", map.get("pk_factory"));
//			org_factory.put("factorycode", map.get("factorycode"));
//			org_factory.put("factoryname", map.get("factoryname"));
//			if (pk_factorySet.contains(map.get("pk_factory"))){
//				org_factory.put("checked", "true");
//				indexs.add(String.valueOf(i-1));
//			}else{
//				org_factory.put("checked", "false");
//			}
//			org_factorylist.put(org_factory);
//		}
//		json.put("firstselectedindex", indexs.size() > 0 ? indexs.get(0) : String.valueOf(startline-1));
//		json.put("factorylist", org_factorylist);

		JSONArray lastusedfactorylist = new JSONArray();
		if (lastusedfactorypks.size() > 0){
			//如果存在最近使用工厂
			for (String pk : lastusedfactorypks){
				String[] info = allfactoryinfos.get(pk);
				if (info == null || info.length == 0)continue;
				JSONObject lastusedfactoryjson = new JSONObject();
				lastusedfactoryjson.put("pk_factory", pk);
				lastusedfactoryjson.put("factorycode", info[1]);
				lastusedfactoryjson.put("factoryname", info[2]);
				if (pk_factorySet.contains(pk)){
					lastusedfactoryjson.put("checked", "true");
				}else{
					lastusedfactoryjson.put("checked", "false");
				}
				lastusedfactorylist.put(lastusedfactoryjson);
			}
		}
		JSONObject lastusedjson = new JSONObject();
		lastusedjson.put("factorygroupname", "最近使用");
		if (lastusedfactorylist.length() > 0){
			lastusedjson.put("factorylist", lastusedfactorylist);
		}
		
		JSONArray grouplistarray = new JSONArray();
		grouplistarray.put(lastusedjson);
		
		JSONObject org_factoryjson = new JSONObject();
		org_factoryjson.put("factorygroupname", "全部");
		org_factoryjson.put("factorylist", factorylist);
		grouplistarray.put(org_factoryjson);
		json.put("factorygrouplist",grouplistarray);
		
		json.put("firstselectedindex", String.valueOf(selectitemindex));
		
		return json.toString();
    }
}
