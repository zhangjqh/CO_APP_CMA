package nc.cm.mobile.utils;

import nc.bs.logging.Logger;
import nc.vo.bd.format.NumberFormatDoc;
import nc.vo.pub.format.FormatResult;
import nc.vo.pub.format.exception.FormatException;

/**
 * 数字格式化工具,千分位格式化
 */
public class CMMobileNumberFormatUtils {

	private static CMMobileNumberFormatUtils instance = null;
	private NumberFormatDoc numberformat = null;
	private CMMobileNumberFormatUtils(){
		numberformat = new NumberFormatDoc();
	}
	
	public synchronized static CMMobileNumberFormatUtils getInstance(){
		if (instance == null){
			instance = new CMMobileNumberFormatUtils();
		}
		return instance;
	}
	/**
	 * 千分位处理
	 * @param sourcedata
	 * @return
	 */
	public String format(String sourcedata){
		try {
			FormatResult result = numberformat.format(sourcedata);
			return result.getValue();
		} catch (FormatException e) {
			Logger.error("数字格式化出现错误!");
			return sourcedata;
		}
	}
}
