package com.ump.productquery;

import java.util.*;

import nc.vo.jcom.lang.StringUtil;

import org.json.*;

import com.yonyou.uap.um.context.util.*;
import com.yonyou.uap.um.controller.*;
import com.yonyou.uap.um.gateway.exception.*;
import com.yonyou.uap.um.gateway.service.*;

public class Cm_productctxExtendController extends Cm_productctxController
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
    public String searchProductListByKeyword(String args) throws JSONException, GatewayServiceException{
    	JSONObject jsonObj = new JSONObject(args);
    	Map argsMap = UmContextUtil.transJsonToMap(jsonObj);
    	int startline = Integer.parseInt(jsonObj.getString("startline"));
		int pagesize = Integer.parseInt(jsonObj.getString("count"));
    	String appid = "38300306";
    	String serviceid = "searchProductByKeyWord";
    	IGatewayService service = GatewayServiceFactory.findGatewayService(appid, serviceid, argsMap);
    	JSONObject json = new JSONObject();
    	String type = (String) argsMap.get("style");
    	if ("ios".equals(type)){
    		if ("".equals((String)argsMap.get("searchText"))){
    			json.put("searchfield", argsMap.get("searchText"));
    		}else{
    			json.put("searchfield", argsMap.get("searchfield"));
    		}
    		argsMap.put("searchfield", json.opt("searchfield"));
    	}else{
    		json.put("searchfield", argsMap.get("searchfield"));
    	}
    	List<Map<String,String>> retObj = (List<Map<String,String>>) service.doService();
    	if (retObj == null || retObj.isEmpty()){
    		json.put("cmproductlist", new JSONArray());
    		return json.toString();
    	}
    	int len = retObj.size();
    	int arrLen = startline + pagesize - 1;
		/** 控制显示查看更多 */
    	String visibleLoadMore = "true";
		if (arrLen >= len) {
			arrLen = len;
			visibleLoadMore = "false";
		}
		json.put("visibleLoadMore", visibleLoadMore);
    	JSONArray jsonarr = new JSONArray();
    	for (int i = startline ; i <= arrLen; i++) {
    		Map<String,String> map = retObj.get(i - 1);
    		JSONObject jsonobj = new JSONObject();
    		jsonobj.put("pk_material", map.get("pk_material"));
    		jsonobj.put("code", map.get("code"));
    		jsonobj.put("name", map.get("name"));
    		jsonarr.put(jsonobj);
    	}
    	json.put("cmproductlist", jsonarr);
    	return json.toString();
    }
}
