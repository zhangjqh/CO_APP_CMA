package nc.cm.mobile.itf;

public interface IMutiProductQueryConst {
    public static final String ORDERBYTYPE_UP = "asc";

    public static final String ORDERBYTYPE_DOWN = "desc";

    public static final String ORDERBY_PRICE = "0";

    public static final String ORDERBY_RATE = "1";

    public static final String ORDERBY_CODE = "2";

    public static final String ORDERBY_FACTORYCODE = "3";

    public static final String ORDERBY_ACCPERIOD = "4";

    public static final int QUERY_MUTIPRODUCT = 0;

    public static final int QUERY_MUTIFACTORY = 1;

    public static final int QUERY_MUTIPERIOD = 2;

    public static final String ACCPERIODMONTH_PREV = "prevmonth";

    public static final String ACCPERIODMONTH_NEXT = "nextmonth";

    public static final String CONCERN_STATE_DONE = "concernDone";

    public static final String CONCERN_STATE_CANCELED = "concernCanceled";

    public static final String CONCERN_PRODUCT_TABLENAME = "cm_mobile_productconcern";

    public static final String CONCERN_FACTORY_TABLENAME = "cm_mobile_factoryconcern";

    public static final String MUTIPRODUCTQUERY_DISPLAYTYPE_CONCERN = "0";

    public static final String MUTIPRODUCTQUERY_DISPLAYTYPE_ALLDATA = "1";
    
    public static final String NONEDATAFORMAT = "无";//无数据显示格式
}
