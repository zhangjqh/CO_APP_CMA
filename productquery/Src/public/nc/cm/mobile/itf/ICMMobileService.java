package nc.cm.mobile.itf;

import java.util.List;
import java.util.Map;

import nc.vo.pub.BusinessException;

public interface ICMMobileService {

	/**
	 * 根据当前用户ID，获得默认个性化中心设置的默认工厂和最小已结账期间
	 * 
	 * @param userid
	 * @return
	 * @throws BusinessException
	 */
	public List<Map<String, String>> getDefaultFactoryAndPeriodByCurrtentUser(
			String userid) throws BusinessException;

	/**
	 * 获得工厂列表
	 * 
	 * @param userid
	 * @return
	 * @throws BusinessException
	 */
	public Map<String, Map<String, String>> getFactoryList(String userid)
			throws BusinessException;

	/**
	 * 根据关键字获得工厂
	 * 
	 * @param userid
	 * @param keyword
	 * @return
	 * @throws BusinessException
	 */
	public List<Map<String, String>> getFactoryListByKeyWord(String userid,
			String keyword) throws BusinessException;

	/**
	 * 获得会计期间列表
	 * 
	 * @param pk_factory
	 * @return
	 * @throws BusinessException
	 */
	public Map<String, Map<String, String>> getAccperiodListByPK_factory(
			String pk_factory) throws BusinessException;

	/**
	 * 根据当前会计期间月PK和年月方向获得上下个期间
	 * 
	 * @param pk_accperiodmonth
	 * @param yearmonth
	 * @throws BusinessException
	 */
	public List<Map<String, String>> getPrevOrNextYearMonth(String userid,
			String pk_factory, String pk_accperiodmonth, String yearmonth,
			String direction, String[] orderby, String displaytype)
			throws BusinessException;

	/**
	 * 获得产品列表
	 * 
	 * @param pk_factory
	 * @param yearmonth
	 * @return
	 * @throws BusinessException
	 */
	public List<Map<String, String>> getProductListByPk_factoryAndAccepriod(
			String userid, String pk_factory, String yearmonth,
			String[] orderby, String displaytype) throws BusinessException;

	/**
	 * 根据工厂、期间、产品ID获得明细数据
	 * 
	 * @param quantity可能没值
	 * @return
	 * @throws BusinessException
	 */
	public List<Map<String, String>> getProductDetailInfoByCprodcostid(
			String userid, String pk_org, String yearmonth, String pk_material,
			String quantity) throws BusinessException;

	/**
	 * 根据产品和期间获得多工厂对比的数据
	 * 
	 * @param pk_material
	 * @param yearmonth
	 * @return
	 * @throws BusinessException
	 */
	public List<Map<String, String>> getMutiFactoryListByPk_materialAndYearMonth(
			String pk_material, String yearmonth, String[] orderby)
			throws BusinessException;

	/**
	 * 根据产品和工厂获得多期间对比的数据
	 * 
	 * @param pk_material
	 * @param yearmonth
	 * @param yearmonths
	 *            如果为空，默认查询当前年份第一个月份到当前月份的数据，如果有值则查对应年月的数据
	 * @return
	 * @throws BusinessException
	 */
	public List<Map<String, String>> getMutiPeriodListByPk_materialAndPk_factory(
			String pk_material, String pk_factory, String[] orderby,
			String[] yearmonths,String lastpageyearmonth) throws BusinessException;

	/**
	 * 关注或取消关注产品
	 * 
	 * @param currentState
	 *            当前被关注状态
	 * @param userid
	 *            用户PK
	 * @param pk_material
	 *            产品PK
	 * @return
	 * @throws BusinessException
	 */
	public Map<String, String> doOrCancelConcernProduct(String currentState,
			String userid, String pk_material) throws BusinessException;

	/**
	 * 根据工厂和关键字搜索产品
	 * 
	 * @param pk_factory
	 * @param searchfield
	 * @return
	 * @throws BusinessException
	 */
	public List<Map<String, String>> searchProductByKeyWord(String userid,
			String pk_factory, String searchfield) throws BusinessException;
}
