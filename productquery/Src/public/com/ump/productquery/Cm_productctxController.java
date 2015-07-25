package com.ump.productquery;

import java.util.*;
import org.json.*;

import java.lang.reflect.*;
import nc.md.persist.framework.IMDPersistenceQueryService;
import nc.md.persist.framework.IMDPersistenceService;
import nc.md.persist.framework.MDPersistenceService;

import nc.bs.logging.Logger;
import com.yonyou.uap.um.controller.*;
import com.yonyou.uap.um.context.*;
import com.yonyou.uap.um.context.util.*;

public class Cm_productctxController extends AbstractUMController
{ 
	
	@Override
	public String load(String args) throws UmControllerException {
		JSONObject jObject = new JSONObject();
		try {
			String filter = "";
			// get all params from args.
			JSONObject jsonObj = new JSONObject(args);
			Map map = UmContextUtil.transJsonToMap(jsonObj);
			if (map.containsKey(UMArgs.FILTER_KEY)) {
				filter = (String) map.get(UMArgs.FILTER_KEY);
			}

			// get data
			
		} catch (Exception e) {
			e.printStackTrace();
			Logger.error("load error:", e);
			String errString = e.getMessage()
					+ (e.getCause() == null ? "" : ("->" + e.getCause()
							.getMessage()));
			throw new UmControllerException(errString, e);			
		}

		return jObject.toString();
    }

	@Override
	public String save(String args) throws UmControllerException {

		String rtnstr = "";
		try {
			// get all params from args.
			JSONObject jObject = new JSONObject(args);

			Logger.error(jObject.toString());

			Map map = UmContextUtil.transJsonToMap(jObject);
			
			// set data 
			
		} catch (Exception e) {
			e.printStackTrace();
			Logger.error("save error:", e);
			String errString = e.getMessage()
					+ (e.getCause() == null ? "" : ("->" + e.getCause()
							.getMessage()));
			throw new UmControllerException(errString, e);			
		}

		return rtnstr;
	}
}
