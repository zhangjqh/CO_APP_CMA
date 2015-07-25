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

public class Cm_mutifactoryqueryctxExtendController extends Cm_mutifactoryqueryctxController
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
     * 根据产品和期间获得工厂成本列表
     * @param args
     * @return
     * @throws JSONException
     * @throws GatewayServiceException
     * @throws BusinessException
     */
    @SuppressWarnings("unchecked")
	public String getMutiFactoryListByPk_materialAndYearMonth(String args) throws JSONException, GatewayServiceException, BusinessException{
    	JSONObject jsonObj = new JSONObject(args);
    	Map argsMap = UmContextUtil.transJsonToMap(jsonObj);
    	String orderby = (String) argsMap.get("orderby");
	    String orderbytype = (String) argsMap.get("orderbytype");
	    if (StringUtil.isEmptyWithTrim(orderby)){
	    	argsMap.remove("orderby");
	    	argsMap.put("orderby", new String[]{IMutiProductQueryConst.ORDERBY_FACTORYCODE,IMutiProductQueryConst.ORDERBYTYPE_DOWN});
	    } else if (!StringUtil.isEmptyWithTrim(orderby) && StringUtil.isEmptyWithTrim(orderbytype)){
	    	argsMap.remove("orderby");
	    	argsMap.put("orderby", new String[]{orderby,IMutiProductQueryConst.ORDERBYTYPE_DOWN});
	    } else {
	    	argsMap.remove("orderby");
	    	argsMap.put("orderby", new String[]{orderby,orderbytype});
	    }
    	String appid = "38300306"; 
		String serviceid = "getMutiFactoryListByPk_materialAndYearMonth";
		JSONObject json = new JSONObject();
		json.put("orderby", orderby);
		json.put("pk_material", argsMap.get("pk_material"));
		json.put("yearmonth", argsMap.get("yearmonth"));
		json.put("productname", argsMap.get("productname"));
		json.put("pk_accperiodmonth", argsMap.get("pk_accperiodmonth"));
		IGatewayService service = GatewayServiceFactory.findGatewayService(appid, serviceid, argsMap);
		List<Map<String,String>> retObj =  (List<Map<String, String>>) service.doService();
		if (retObj.isEmpty()){
			return json.toString();
		}
		JSONObject chartDataObj = new JSONObject();
		JSONArray datalist = new JSONArray();//存放图表数据
		JSONArray factoryproductlist = new JSONArray();//存放成本数据
		
//		int count = 0;
//		int graphlen = 10;//柱状图显示个数
		String refresult = (String) argsMap.get("refresult");
		StringBuffer refresultBuffer = new StringBuffer();
		StringBuffer lastusedfactorystr = new StringBuffer();//最近使用的工厂字符串
		if (StringUtil.isEmptyWithTrim(refresult)){
			for (Map<String,String> map : retObj){
				JSONObject factoryproductinfo = new JSONObject();
				factoryproductinfo.put("total", CMMobileNumberFormatUtils.getInstance().format(map.get("total")));
				factoryproductinfo.put("quantity", CMMobileNumberFormatUtils.getInstance().format(map.get("quantity")));
				factoryproductinfo.put("pk_factory", map.get("pk_factory"));
				factoryproductinfo.put("price", CMMobileNumberFormatUtils.getInstance().format(map.get("price")));
				factoryproductinfo.put("factoryname", map.get("factoryname"));
				factoryproductinfo.put("factorycode", map.get("factorycode"));
				factoryproductinfo.put("measdoc", map.get("measdoc"));
				factoryproductinfo.put("cprodcostid", map.get("cprodcostid"));
				factoryproductinfo.put("currtype", map.get("currtype"));
				factoryproductlist.put(factoryproductinfo);
				refresultBuffer.append(map.get("pk_factory")).append("#").append(map.get("factoryname")).append("#").append(map.get("factorycode")).append(",");
//				count++;
//				if (count <= graphlen){
					JSONObject entrydata = new JSONObject();//构造图表数据
					entrydata.put("key", map.get("factorycode"));
					entrydata.put("value", map.get("price"));
					datalist.put(entrydata);
//				}
					lastusedfactorystr.append(map.get("pk_factory")).append(",");
			}
			json.put("refresult", refresultBuffer.toString().substring(0, refresultBuffer.toString().length() - 1));
		}else{
			List<JSONObject> beforesortedlist = new ArrayList<JSONObject>();
			json.put("refresult", refresult);
			String[] pk_factorys = refresult.split(",");
			Map<String,String> pk2namemap = new HashMap<String, String>();
			Map<String,String> pk2codemap = new HashMap<String, String>();
			Set<String> pkset = new HashSet<String>();
			for (String pk : pk_factorys){
				String[] pk2name = pk.split("#");
				pk2namemap.put(pk2name[0], pk2name[1]);
				pk2codemap.put(pk2name[0], pk2name[2]);
				pkset.add(pk2name[0]);
			}
			for (String pk : pkset){
				lastusedfactorystr.append(pk).append(",");
			}
			for (Map<String,String> map : retObj){
				if (!pkset.contains(map.get("pk_factory"))){
					continue;
				}
				JSONObject factoryproductinfo = new JSONObject();
				factoryproductinfo.put("total", CMMobileNumberFormatUtils.getInstance().format(map.get("total")));
				factoryproductinfo.put("quantity", CMMobileNumberFormatUtils.getInstance().format(map.get("quantity")));
				factoryproductinfo.put("pk_factory", map.get("pk_factory"));
				factoryproductinfo.put("price", CMMobileNumberFormatUtils.getInstance().format(map.get("price")));
				factoryproductinfo.put("factoryname", map.get("factoryname"));
				factoryproductinfo.put("factorycode", map.get("factorycode"));
				factoryproductinfo.put("measdoc", map.get("measdoc"));
				factoryproductinfo.put("cprodcostid", map.get("cprodcostid"));
				factoryproductinfo.put("currtype", map.get("currtype"));
				beforesortedlist.add(factoryproductinfo);
//					count++;
//					if (count <= graphlen){
					JSONObject entrydata = new JSONObject();//构造图表数据
					entrydata.put("key", map.get("factorycode"));
					entrydata.put("value", map.get("price"));
					datalist.put(entrydata);
//					}
					pkset.remove(map.get("pk_factory"));
			}
			//补充数据
			if (pkset.size() > 0){
				for (String pk : pkset){
					JSONObject factoryproductinfo = new JSONObject();
					factoryproductinfo.put("total", IMutiProductQueryConst.NONEDATAFORMAT);
					factoryproductinfo.put("quantity", IMutiProductQueryConst.NONEDATAFORMAT);
					factoryproductinfo.put("pk_factory", pk);
					factoryproductinfo.put("price", IMutiProductQueryConst.NONEDATAFORMAT);
					factoryproductinfo.put("factoryname", pk2namemap.get(pk));
					factoryproductinfo.put("factorycode", pk2codemap.get(pk));
					factoryproductinfo.put("measdoc", "");
					factoryproductinfo.put("cprodcostid", "");
					factoryproductinfo.put("currtype", "");
					beforesortedlist.add(factoryproductinfo);
				}
			}
			if (beforesortedlist.size() > 0){
				//进行排序操作
				JSONObject[] beforesortarray = beforesortedlist.toArray(new JSONObject[0]);
				Arrays.sort(beforesortarray,new Comparator<JSONObject>() {
					@Override
					public int compare(JSONObject arg0, JSONObject arg1) {
						// TODO 自动生成的方法存根
						try {
							return String.valueOf(arg0.get("factorycode")).compareTo(String.valueOf(arg1.get("factorycode")));
						} catch (JSONException e) {
							return 0;
						}
					}
				});
				for (JSONObject jsonobj : beforesortarray){
					factoryproductlist.put(jsonobj);
				}
			}
		}
		json.put("factoryproductlist", factoryproductlist);
		
		chartDataObj.put("data", datalist);
		chartDataObj.put("seriseName", "多工厂对比");
		chartDataObj.put("chartType", "0");
		JSONArray chartData = new JSONArray();
		chartData.put(chartDataObj);
		JSONObject charViewData = new JSONObject();
		charViewData.put("ChartData", chartData);
		json.put("charViewData", charViewData);
		json.put("newgraphdata", datalist);
		
		json.put("lastusedfactory", lastusedfactorystr.substring(0,lastusedfactorystr.length()-1));
		return json.toString();
    }
}
