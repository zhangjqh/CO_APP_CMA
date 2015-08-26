package com.ump.productquery;

import com.yonyou.ma.platform.modul.update.MaUpdateAgent;
import com.yonyou.ma.platform.modul.update.MaUpdateAgentListener;
import com.yonyou.ncapp.autoupdate.MyUpdateAgentListener;
import com.yonyou.ncmobileutils.NCConnectWithMaPlusUtil;
import com.yonyou.uap.um.application.ApplicationContext;
import com.yonyou.uap.um.base.*;
import com.yonyou.uap.um.common.*;
import com.yonyou.uap.um.third.*;
import com.yonyou.uap.um.control.*;
import com.yonyou.uap.um.core.*;
import com.yonyou.uap.um.binder.*;
import com.yonyou.uap.um.runtime.*;
import com.yonyou.uap.um.lexer.*;
import com.yonyou.uap.um.widget.*;
import com.yonyou.uap.um.widget.UmpSlidingLayout.SlidingViewType;
import java.util.*;
import android.os.*;
import android.view.*;
import android.widget.*;
import android.webkit.*;
import android.content.*;
import android.graphics.*;
import android.widget.ImageView.ScaleType;

public class Productquery_loginExtendActivity extends Productquery_loginActivity {
	protected void onCreate(Bundle savedInstanceState) {
		boolean flag = NCConnectWithMaPlusUtil.isFromMaPlus(this);
		if (flag){
			NCConnectWithMaPlusUtil.transferParmas(this);
		}
		super.onCreate(savedInstanceState);
		//升级处理
		final String appkey = "com.ump.productquery";
		MaUpdateAgent.setAppKey(appkey);
		String _version = ApplicationContext.getCurrent(this).getVersionName();
		MaUpdateAgentListener listener = new MyUpdateAgentListener(this,_version); 
		MaUpdateAgent.setListener(listener);
		MaUpdateAgent.updateVersion(this);
		//企业+跳转登陆处理
		if (flag){
			NCConnectWithMaPlusUtil.connectWithMaPlus(this, idmap.get("userName"), idmap.get("passWord"));
		}
	}
	
	@Override
	public void onInit(Bundle savedInstanceState) {
		super.onInit(savedInstanceState);
	}
	
	@Override
	protected void onStart() {
		super.onStart();
	}

	@Override
	protected void onRestart() {
		super.onRestart();
	}

	@Override
	protected void onResume() {
		super.onResume();
	}

	@Override
	protected void onPause() {
		super.onPause();
	}

	@Override
	protected void onStop() {
		super.onStop();
	}

	@Override
	protected void onDestroy() {
		super.onDestroy();
	}


	@Override
	public void onLoad() {
		super.onLoad();////
	}
	
	@Override
	public void onDatabinding() {
		super.onDatabinding();
	}
	

}
