var SYS='FOS3.0';var M_S='数据保存成功';var M_F='数据保存失败';var M_R_C='确认要删除所选记录码?';var M_R_P='请选择要删除的记录!';var M_NC='没有数据更改!';var M_SAVE_PROMPT='数据已经修改，是否提交保存？';var M_DIRTY_PROMPT='数据已更改，请先保存！';var M_SAVE_FIRST='请先保存！';var M_NO_QUERY_P='请选择查询条件！';var M_SEL_M_CONS='请先选择拼箱主单!';var M_SEL_BL='请先选择提单!';var M_DATA_NOT_COMPLETE='请填写完整的信息!';var M_NOT_FOUND='没有找到数据！';var M_EXIT_CONFIRM='您确认要退出吗！';var M_INPUT_BIZ_NO='请输入业务号';var M_INPUT_FCON_NO='请输入合同号';var M_INPUT_INVO_NO='请输入账单号';var M_INPUT_TAX_NO='请输入税务发票号';var M_INPUT_VOUC_R_NO='请输入收款单号';var M_INPUT_VOUC_P_NO='请输入付款单号';var M_INPUT_PR_R_NO='请输入托收单号';var M_INPUT_PR_P_NO='请输入付款申请号';var M_INPUT_BILL_NO='请输入对账单号';var M_INPUT_VESS_NAME='请输入对船名';var M_NOT_LT_TWO_BL='请至少选择两个提单！';var M_BL_MERGED='拆并单后的提单不能再做拆并单！';var M_SEL_BL_MERGED='请选择并单主单！';var M_SEL_BL_SPLIT='请选择拆单主单！';var M_PASS_EXP='你的密码将在<font color=red>{0}</font>日过期，请尽快修改您的密码。';var M_LCL_TRANS='你真的要将单票{0}<br>转拼到单票{1}吗?';var M_CONS_QUIT_C='您确认要将该单票退关/退载吗？';var M_CONS_ARRIVE_C='您确认要将该单票的状态设为已到港吗？';var M_CONS_RELEASE_C='您确认要将该单票的状态设为已换单吗？';var M_CARGO_RELEASE_C='您确认要将该单票的状态设为已放行吗？';var M_CARGO_SEND_C='您确认要将该单票的状态设为已送货吗？';var M_CONS_CANCEL_C='您确认要将该单票作废吗？';var M_CONS_CONFIRMED='不可以删除已确认的单票!';var M_REMOVE_EXP_INVOICED='不可以删除已生成账单的费用!';var M_FCON_SHIPPED='不可以删除已配船的租船合同!';var M_BL_CONFIRMED='该提单已确认，不可以删除!';var M_TRAN_CONFIRMED='该陆运单已确认，不可以删除!';var M_WARE_CONFIRMED='该仓储联系单已确认，不可以删除!';var M_INSP_CONFIRMED='该报检单已确认，不可以删除!';var M_CUDE_CONFIRMED='该报关单已确认，不可以删除!';var M_INVO_CONFIRMED='不可以删除已审核的账单!';var M_PRSH_CONFIRMED='不可以删除已生效的运价单!';var M_NR='你没有相应的权限，请和管理员联系！';var M_LEAVE_CONFIRM='你是否要离开本页？';var M_SESSION_TIMEOUT='连接已超时，请重新登陆!';var M_REQIRED='不能为空!';var M_NO_DATA_SELECTED='请先选择一条记录!';var M_BL_REQIRED='提单号不能为空!';var M_GREAT_THAN_ZERO='必须大于零!';var M_CHARTER_REQIRED='请选择租船人!';var M_SHIPPER_REQIRED='请选择发货人!';var M_CUST_REQIRED='请选择委托单位!';var M_CUST_MUST_PREDEFINED='委托单位不能直接输入名称，必须现在客户供应商模块预先维护!';var M_CONTRACT_NO_REQIRED='合同号不能为空!';var M_DEPT_REQIRED='请选择部门!';var M_CUDE_VENDOR_REQIRED='报关公司不能为空';var M_SALES_REQIRED='请选择业务员!';var M_OPERATOR_REQIRED='请选择操作员!';var M_VESS_REQIRED='船名不能为空!';var M_VOYA_REQIRED='航次不能为空!';var M_POD_REQIRED='卸货港不能为空!';var M_ETD_REQIRED='开航日期不能为空!';var M_SHLI_REQIRED='航线不能为空!';var M_LAY_V_REQIRED='LAY(船东）不能为空!';var M_CAN_V_REQIRED='CAN(船东）不能为空!';var M_OLD_PASS_REQIRED='旧密码不能为空!';var M_NEW_PASS_REQIRED='新密码不能为空!';var M_ETA_REQIRED='到港日期不能为空！';var M_CONFIRM_NEW_PASS_REQIRED='确认新密码不能为空!';var M_SETTLE_OBJECT_REQIRED='结算单位不能为空!';var M_BILL_OBJECT_REQIRED='对账单位不能为空!';var M_CHAR_REQIRED='费用名称不能为空!';var M_QUANTITY_REQIRED='数量不能为空!';var M_UNIT_PRICE_REQIRED='单价不能为空!';var M_CURR_PRICE_REQIRED='币种不能为空!';var M_PPCC_REQIRED='预付/到付不能为空!';var M_INVO_TITLE_REQIRED='发票抬头不能为空!';var M_SHIPPED_QUANTITY_OVER='本次配船货量不能大于未配船货量!';var M_TEMP_NOT_FOUND='没有找到模板，请先维护模板!';var M_BIG_CARGO_INFO='请在货物信息栏目中补齐大件货的尺寸信息！';var M_DANAGER_CARGO_INFO='请在货物信息栏目中补齐危险品的相关信息！';var M_REEFTER_CARGO_INFO='请在货物信息栏目中补齐冷藏品的温度信息！';var M_INVO_ENTRY_OVER='发票的合计金额不能大于账单金额!';var M_WRITEOFF_REMOVE_DENY='不能删除已经核销的收款凭证!';var M_VOUC_OVER='本次核销金额不能大于未核销金额!';var M_PR_OVER='付款金额不能大于应付金额!';var M_VOUC_AMOUNT_NOT_GREAT='核销金额不能大于';var M_NO_REMOVE_COMMITED='不能删除已经提交的';var M_NO_REMOVE_COMMITED_BILL='不能删除已经确认的对账单!';var M_CUST_MERGE_CONFIRM='客户归并操作的同时会对业务及结算数据进行归并，应该在确保所有用户都已退出系统的情况下进行。客户归并之后将不能恢复，您真的要进行客户进行归并吗？';var M_CUST_MERGE='归并';var M_CUST_MERGE_TO='归并到：';var M_INVO_OVER='本次开票金额不能大于可开票金额!';var M_SEL_MERGE_TO='请先选择要归并到的客户!';var M_SEL_CUST='请先选择客户:';var M_SEL_SETTLE_OBJ='请先选择结算单位!';var M_SEL_BILL_OBJ='请先选择对账单位!';var M_SEL_SETTLE_OBJ_CURR='请先选择结算单位和币种!';var M_DIFF_CURR='您所选的行币种不同，继续合并吗？';var M_NEW_PASS_NOT_EQ='确认新密码和新密码不一致!';var M_NEW_PASS_EQ_OLD='新密码不能和旧密码相同!';var M_CHANGE_PASS_SUCCESSED='密码修改成功!';var M_CHANGE_PASS='修改密码';var M_MAIL_SEND_SUCCESS='邮件已发送!';var M_INPUT_START_TIME='请输入起始时间!';var M_INPUT_END_TIME='请输入截止时间!';var M_SEL_YEAR='请选择年份!';var M_SEL_MONTH='请选择月份!';var M_SEL_WRITEOFF_DATE='请选择核销日期!';var M_ARRIVE_ADVICE='到货通知书';var M_BOOK='订舱委托书';var M_BOOK_CONFIRM='订舱确认书';var M_CONSIGN='十联单';var M_BL_ER='电放保函';var M_BL_SEAWAY='SEAWAY BILL保函';var M_LOAD_ADVICE='装箱通知单';var M_SHIP_ADVICE='装船通知';var M_SGS_ADVICE='SGS检验通知';var M_NO_MSG_SEND='您没有输入消息文本内容！';var C_SEL_STATION='选择到站';var C_SYSTEM_MENU='系统菜单';var C_PRSH_QUERY='价格单查询';var C_FCON_QUERY='租船合同查询';var C_CONS_QUERY='单票查询';var C_INVO_QUERY='账单查询';var C_PR_R_QUERY='托收单查询';var C_PR_P_QUERY='付款申请查询';var C_VOUC_R='收款单';var C_VOUC_P='付款单';var C_VOUC_R_INFO='收款单信息';var C_VOUC_P_INFO='付款单信息';var C_VOUC_R_QUERY='收款单查询';var C_VOUC_P_QUERY='付款单查询';var C_EXPE_QUERY='费用查询';var C_BILL_QUERY='对账单查询';var C_PALI_QUERY='发货清单查询';var C_LOOK_BY_CUST_CODE='按客户代码查询';var C_LOOK_BY_CNAME='按中文名称查询';var C_LOOK_BY_ENAME='按英文名称查询';var C_LOOK_BY_SERVICE='按服务类型查询';var C_LOOK_SMART='模糊查询';var C_LOOK_COMPLEX='综合查询';var C_LOOK_CUST='客户查询';var C_LOOK_BY_NO='按业务号查询';var C_DOC_BY_NO='按单证号查询';var C_LOOK_BY_BL_NO='按提单号查询';var C_LOOK_BY_BL_INFO='按提单信息查询';var C_LOOK_BY_CONT_NO='按箱号查询';var C_LOOK_BY_MBL='按MB/L查询';var C_LOOK_BY_HBL='按HB/L查询';var C_LOOK_BY_VOYA='按船名航次查询';var C_LOOK_BY_INVO_NO='按账单号查询';var C_LOOK_BY_TAX_NO='按税务发票号查询';var C_LOOK_BY_VOYA='按船名航次查询';var C_LOOK_BY_PR_NO_R='按托收单号查询';var C_LOOK_BY_PR_NO_P='按付款申请号查询';var C_LOOK_BY_VOUC_NO_R='按收款单号查询';var C_LOOK_BY_VOUC_NO_P='按付款单号查询';var C_LOOK_BY_BILL_NO='按对账单号查询';var C_LOOK_BY_DOC_STATUS='按单证状态查询';var C_STAT='统计分析';var C_STAT_BIZ_SUM='业务量汇总表';var C_STAT_PROFIT_SUM='利润汇总表';var C_STAT_PROFIT='利润分析表';var C_STAT_BIZ_SUM_SALES='业务员业务量汇总表';var C_STAT_PROFIT_SALES='业务员利润统计表';var C_STAT_BIZ_DETAIL='业务明细统计表';var C_STAT_BIZ_DETAIL_SALES='业务员业务明细统计表';var C_STAT_AR_AC='应收账款账龄分析表';var C_STAT_AP_AC='应付账款账龄分析表';var C_STAT_ARC='客户应收费用统计表';var C_STAT_AR='应收费用统计表';var C_STAT_AP='应付费用统计表';var C_STAT_SALES_COMMISSION='业务员提成计算';var C_STAT_PAY_PLAN='付款计划表';var C_STAT_WRITEOFF='核销明细统计表';var C_STAT_ARA='应收账款回收情况分析表';var C_STAT_APA='应付账款支付情况分析表';var C_STAT_PRCH='费用占单票利润统计表';var C_STAT_PRCO='代理费占单票利润统计表';var C_STAT_PROFIT_CONT='集装箱单箱利润统计表';var C_WRITEOFF_TYPE='核销类型：';var C_STAT_TYPE='统计类型：';var C_GROUP_TYPE='分组类型：';var C_STAT_NO_GROUP='不分组：';var C_FROM='从：';var C_STAT_END_DATE='截止日期：';var C_GEN_REPORT='生成报表';var C_START_DATE='起始日期';var C_END_DATE='截止日期';var C_YEAR='年';var C_MONTY='月';var C_BASE_PROFIT='利润基数';var C_SALES_QUOTA='业务员提成设置';C_BULK_USABLE='散货适用';C_CONT_USABLE='集装箱适用';var C_BULK='散货';var C_BULK_CHARTER='租船';var C_EXP_BULK='散货出口';var C_IMP_BULK='散货进口';var C_AIR='空运';var C_EXP_AIR='出口空运';var C_IMP_AIR='进口空运';var C_EXP_CUDE='出口报关';var C_EXP_CUDE_E='出口报关-外挂';var C_IMP_CUDE='进口报关';var C_IMP_CUDE_E='进口报关-外挂';var C_EXP_INSP='出口报检';var C_IMP_INSP='进口报检';var C_EXP_CONT='集装箱出口';var C_IMP_CONT='集装箱进口';var C_IMP_A='进口全部';var C_IMP_F='进口整箱';var C_IMP_L='进口分拨';var C_EXP_A='出口全部';var C_EXP_F='出口整箱';var C_EXP_L='出口拚箱';var C_IMP_B='进口散货';var C_VERSION='版本号';var C_FILTER_BY='过滤条件';var C_FILTER_MORE='更多过滤条件';var C_CLEAR_FILTER='清空查询条件';var C_NR='没有记录';var C_ADD='新增';var C_REMOVE='删除';var C_EDIT='编辑';var C_SAVE='保存';var C_REFRESH='刷新';var C_CONFIRM='确认';var C_CANCEL_CONFIRM='取消确认';var C_OK='确定';var C_CANCEL='取消';var C_SEARCH='查询';var C_RESET='重置';var C_EXPORT='输出';var C_STATUS='状态';var C_STATUS_C='状态:';var C_CONSOLIDATE='加拼';var C_MERGE='合并';var C_AUDIT='审核';var C_COMMIT='提交';var C_COMMIT_CANCEL='取消提交';var C_SEND='发送';var C_IMPORT='导入';var C_FIN_CHECK='财务审核';var C_FIN_CHECK_CANCEL='取消财务审核';var C_MANAGER_CHECK='经理审核';var C_MANAGER_CHECK_CANCEL='取消经理审核';var C_CANCEL_AUDIT='取消审核';var C_BOOK_START='订舱';var C_BOOK_FAILED='订舱失败';var C_BOOK_CONFIRM='确认';var C_BOOK_EXIT='退舱';var C_BOOK_REASSIGN='改装';var C_BOOK_QUIT='退载';var C_CARG_QUIT='已退载';var C_BOOK_RENEW='重订';var C_INVALID='作废';var C_COPY='另存';var C_COPY_FROM='复制';var C_SHIP='配船';var C_ARRIVE='到港';var C_SWITCH='换单';var C_RELEASE='放行';var C_DOC_PASS='回执通过';var C_CUSTOM_PASS='形式清关';var C_SEND_CARGO='送货';var C_START='已开始';var C_APPLY='已申报';var C_END='已完成';var C_UNLOCK='解锁';var C_CUSTOMS_PASSED='已通关';var C_CUSTOMS_EXIT='已退关';var C_SEND_BANK='已托收';var C_BACK_BANK='已回单';var C_ARRIVE_BANK='已到帐';var C_BILL_CHECK='已对账';var C_BILL_CHECK_CANCEL='取消已对账';var C_RECEIPT_FAILED='托收失败';var C_MODIFY_INVO_NO='修改税务发票号';var C_GEN_CONS='生成单票';var C_PRINT_OFFICIAL='已出正本';var C_SAILED='已开船';var C_NOT_SAILED='未开船';var C_BALA_LIST='明细';var C_BL_MERGE='并单';var C_BL_SPLIT='拆单';var C_BL_MERGE_C='撤销并单';var C_BL_SPLIT_C='撤销拆单';var C_BL_MASTER='主单';var C_TO='至';var C_FL='整/拼';var C_DATE='日期';var C_ACTIVE='启用';var C_CODE='代码';var C_CUST_CODE='客户代码';var C_NUN='没有记录';var C_NAME='名称';var C_DESC='说明';var C_SYMBOL='符号';var C_CNAME='中文名称';var C_CSNAME='中文简称';var C_ENAME='英文名称';var C_ESNAME='英文简称';var C_CONTACT='联系人';var C_TEL='电话';var C_MOBILE='手机';var C_FAX='传真';var C_ZIP='邮编';var C_URL='网站地址';var C_ADDRESS='地址';var C_ADDRESS2='英文地址1';var C_ADDRESS3='英文地址2';var C_USER_NAME='用户名称';var C_USER_LIST='用户列表';var C_USER_MGT='用户管理';var C_USER_ROLE_LIST='用户角色列表';var C_SYS_USER_NAME='系统用户名';var C_GROU='业务分组';var C_DEFAULT_GROU='缺省业务分组';var C_GROU_LIST='业务分组列表';var C_ROLE='角色';var C_ROLE_NAME='角色名称';var C_DEFAULT_ROLE='缺省角色';var C_ROLE_MGT='角色管理';var C_FUNC_PERMISSION='角色功能权限';var C_ROLE_LIST='角色列表';var C_GROU_USER_LIST='分组用户列表';var C_TEMP_NAME='模板名称';var C_TEMP_DESC='模板描述';var C_TEMP_TYPE='模板类别';var C_TEMP_MGT='模板管理';var C_TEMP_DOWNLOAD='下载模板';var C_TEMP_UPLOAD='上传模板';var C_FILE_TYPE='文件类型';var C_UPLOAD='上传';var C_UPLOAD_SUCCESS='上传成功！';var C_UPLOAD_FAILED='上传失败！';var C_COCO_CODE='配置参数代码';var C_COCO_NAME='配置参数代名称';var C_COCO_VALUE='配置值';var C_COCO_GROU='配置类别';var C_COCO='系统参数设置';var C_DOC='单证';var C_DOC_MGT='单证管理';var C_DOC_NAME='单证名称';var C_DOC_NO='单证号';var C_DOC_QUERY='单证查询';var C_DOC_ORI_NUM='正本份数';var C_DOC_COPY_NUM='副本份数';var C_DOC_RECEIVE_DATE='接收日期';var C_DOC_SEND_DATE='报送日期';var C_DOC_SEND_TYPE='报送方式';var C_DOC_RETURN_DATE='退回日期';var C_DOC_BACK_DATE='放单日期';var C_DOC_BACK_TYPE='放单方式';var C_DOC_BACK_SIGNER='放单签收人';var C_DOC_ALL='全部';var C_DOC_NOT_RETURN='未退回';var C_DOC_RETURN_NOT_BACK='已退回未放单';var C_DOC_BACK='已放单';var C_DOC_RETURN='已退回';var C_ACTIVE_DATE='启用日期';var C_DEPT='部门';var C_SALES='业务员';var C_OPERATOR='操作员';var C_MANAGER='管理人员';var C_INDUSTRY='行业';var C_CPTY='公司性质';var C_FNAME='姓名';var C_PHONE='联系电话';var C_OPHONE='办公电话';var C_HPHONE='家庭电话';var C_EMAIL='电子邮件';var C_TITLE='职位';var C_MSN='MSN';var C_QQ='QQ';var C_BIRTHDAY='生日';var C_GENDER='性别';var C_REMARKS='备注';var C_COUN_CODE='国家代码';var C_CONTINF='联系信息';var C_COUN='国家';var C_STATE='省';var C_CITY='市';var C_FININF='财务信息';var C_TYPE='类型';var C_CUSTOMER='客户';var C_SHIP_MAP='船图';var C_CUSTOMER_INFO='客户信息';var C_CUCA='客户类别';var C_CUST='客户供应商管理';var C_VENDOR='供应商';var C_SHLI='航线';var C_PORT='港口';var C_AIRP='空港';var C_VESS='船名';var C_VESS_NAME_CN='中文船名';var C_VOYA='航次';var C_VESS_VOYA='船名航次';var C_FLIGHT='航班';var C_CARRIER='船公司';var C_VESS_TYPE='船舶类型';var C_VESS_CALL='呼号';var C_PLAC='地点';var C_UNIT='计量单位';var C_COCL='箱类';var C_COTY='箱型';var C_PACK='包装种类';var C_TRTE='贸易条款';var C_TTER='运输条款';var C_PATE='运费条款';var C_TRTY='贸易方式';var C_TRTY_REQIRED='贸易方式不能为空！';var C_USAG='用途';var C_LETY='征免性质';var C_EXSE='结汇方式';var C_EXSE_REQIRED='结汇方式不能为空！';var C_TRAT='运输方式';var C_TRAT_REQIRED='运输方式不能为空！';var C_ISTY='签单方式';var C_SEWA='结算方式';var C_VEHT='车辆类型';var C_CACL='货物种类';var C_CATY='品名';var C_GOODS_NAME_S='品名';var C_CURR='币种';var C_CHCL='费用类别';var C_CHAR='费用名称';var C_ALL_CHARGE='所有费用';var C_EXTY='应收/应付';var C_DOTY='单证类别';var C_COBA='银行账户';var C_SHIP_DATE='船期';var C_BIZ_TYPE='业务类型';var C_BIZ_CLASS='业务性质';var C_SHIP_TYPE='装运方式';var C_LCL_TYPE='拼箱类型';var C_EFFECT='生效';var C_EXPIRY='失效';var C_EFFECT_DATE='生效日期';var C_EXPIRY_DATE='失效日期';var C_LEVY='征免';var C_BIZ_RELATED='业务相关';var C_CUDE_RELATED='报关相关';var C_SETTLE_RELATED='结算相关';var C_MASTER_DATA='基础数据';var C_CHAR_TYPE='收付类型';var C_NO='编号';var C_CURR_DEFAULT='缺省币种';var C_UNIT_DEFAULT='缺省计费单位';var C_SIZE='尺码';var C_IS_DANAGER='是否危险品';var C_DANAGER_NO='危险品编号';var C_DANAGER_P='危险品属性';var C_IS_DANGOUS='是否危险品';var C_ACCOUNT_AR_CNY='人民币收入科目';var C_ACCOUNT_AP_CNY='人民币支出科目';var C_ACCOUNT_AR_USD='美元收入科目';var C_ACCOUNT_AP_USD='美元支出科目';var C_TEU='TEU';var C_CUSTOM_CODE='海关编码';var C_VESS_CODE='船号';var C_ISO_CODE='ISO代码';var C_UN_CODE='UN代码';var C_TARE_W='皮重(KGS)';var C_MAX_W='最大限重(KGS)';var C_MAX_C='最大限容(CMB)';var C_IMP_V='进口船期维护';var C_SPLIT_CONSIGNEE='境外委托公司';var C_SPLIT_CONTACT='申请公司';var C_SWITCH='分拨';var C_SHIP_TO='收货地址';var C_CHARGE_TO='账单地址';var C_CREDIT_DAY='信用期（天）';var C_CREDIT_AMT='信用额（元）';var C_SHIPPER_DEFAULT='缺省发货人信息';var C_CUST_SPECIAL='客户特性';var C_CUST_REQUIRE='操作注意事项';var C_CUST_SA='国外船公司代理';var C_EXT_1='扩展字段1';var C_EXT_2='扩展字段2';var C_EXT_3='扩展字段3';var C_EXT_4='扩展字段4';var C_EXT_5='扩展字段5';var C_EXT_6='扩展字段6';var C_EXT_7='扩展字段7';var C_EXT_8='扩展字段8';var C_EXT_9='扩展字段9';var C_EXT_10='扩展字段10';var C_EXT_INFO='扩展信息';var C_CONTACT_INFO='联系人信息';var C_SERVICE_TYPE='服务类型';var C_EN='（英文）';var C_CUST_NAME='客户名称';var C_CUST_SNAME='客户简称';var C_BOOKER='委托单位';var C_CHARTER='租船人';var C_SHIPPER='发货人';var C_SHIPPER_CN='发货人（中文）';var C_CONSIGNEE='收货人';var C_CONSIGNEE_CN='收货人（中文）';var C_NOTIFIER='通知人';var C_CARRIER='承运人';var C_BOOK_AGENCY='订舱代理';var C_CFS='场站';var C_TRACKER='车队';var C_CUSTOM_AGENCY='报关公司';var C_INSP_AGENCY='报检公司';var C_WAREHOUSE='仓库';var C_CONTAINER='箱公司';var C_OVERSEA_AGENCY='海外代理';var C_DO_AGENCY='换单代理';var C_FLIGHTER='航空公司';var C_INSURANCE='保险公司';var C_EXPRESS='快递公司';var C_CONTRACT_NO='合同号';var C_CREDIT_NO='信用证号';var C_TRADE_CONTRACT_NO='贸易合同号';var C_AGREEMENT_NO='协议号';var C_COUNTRY_TO='输往国家（地区）';var C_COUNTRY_FROM='启运国家（地区）';var C_COUNTRY_D='运抵国';var C_COUNTRY_L='起运国';var C_POD='卸货港';var C_POL='装货港';var C_POL_REQIRED='装货港不能为空！';var C_POT='中转港';var C_DURATION='航程';var C_PORT_EX='出口口岸';var C_PORT_EX_REQIRED='出口口岸不能为空！';var C_PORT_IM='进口口岸';var C_PORT_IM_REQIRED='进口口岸不能为空！';var C_DELIVERY_PLACE='目的港';var C_BL_NO='提单号';var C_M_BL_NO='主提单号';var C_MBL_NO='M B/L No.';var C_HBL_NO='H B/L No.';var C_HDO_NO='HD/O No.';var C_PACKAGES='件数';var C_PACKAGES_REQIRED='件数不能为空！';var C_GW_S='毛重';var C_GW_S_REQIRED='毛重不能为空！';var C_MW_S='净重';var C_MW_S_REQIRED='净重不能为空！';var C_CBM_S='体积';var C_CBM_C='核算体积';var C_GW='毛重';var C_NW='净重';var C_SPLIT_NUM='拆单份数：';var C_BL_PACKAGES='提单件数';var C_BL_GW='提单毛重';var C_BL_NW='提单净重';var C_BL_CBM='提单体积';var C_SHIPPED_GW='配船毛重';var C_SHIPPED_MEASUREMENT='配船体积';var C_PACKAGES_ARRIVED='到站件数';var C_GW_ARRIVED='到货量';var C_PIECES='支数';var C_KGS='(KGS)';var C_MT='(MT)';var C_CBM='体积(CBM)';var C_CONT_INFO='箱信息';var C_CONT_NUM='箱量';var C_CARGO_SOURCE='揽货方式';var C_PARTIAL_FLAG='可分批';var C_TANS_FLAG='可转运';var C_CONSIGN='单票';var C_CONS='委托';var C_M_CONS='主单';var C_M_CONS_NO='主单号';var C_CONS_NO='业务号';var C_CUST_CONS_NO='客户业务号';var C_BOOKING_NO='订舱号';var C_REF_NO='参考号';var C_CONS_LIST='单票列表';var C_CONS_DATE='委托日期';var C_SAIL_DATE='开航日期';var C_ETD='离港日期';var C_ETA='到港日期';var C_ETD_V='预计开船日期';var C_ETD_T='预计开船时间';var C_ETA_V='预计到港日期';var C_ETA_T='预计到港时间';var C_BERTHING_DATE='实际到港日期';var C_BERTHING_DATE_T='实际到港时间';var C_SAIL_DATE_V='实际开船日期';var C_SAIL_DATE_T='实际开船时间';var C_CUST_SALES='客户业务员';var C_CHARGE_REMARKS='付费备注';var C_PAID_AT='付费地点';var C_BVESSEL='驳船船名';var C_BVOYAGE='驳船航次';var C_BPOT='驳船中转港';var C_DELIVERY_DATE='交货日期';var C_CONS_INFO='委托信息';var C_SERVICE_REQUIRED='服务项目：';var C_SR_TRAN='陆运';var C_SR_WARE='仓储';var C_SR_CONT='装箱';var C_SR_BL='提单';var C_SR_INSP='报检';var C_SR_CUDE='报关';var C_SR_BBOOK='驳船';var C_SR_SESH='二程船';var C_SR_RABL='铁路';var C_BL_REMARKS='提单备注';var C_BOOKING_CONTRACT_NO='订舱协议号';var C_PACKING_LIST_NO='提箱单号';var C_CARGO_DELIVERY_DATE='发货日期';var C_CARGO_DISCHARGE_DATE='卸货日期';var C_SHIP_LOAD_DATE='装船日期';var C_LOAD_DATE='装货日期';var C_FETCH_DATE='提货日期';var C_BOOKING_DATE='订舱日期';var C_CUSTOM_EXPIRY_DATE='截关日期';var C_WARE_DATE='入库日期';var C_WARE_DATE_OUT='出库日期';var C_WARE_LOAD_DATE='装箱日期';var C_WARE_DIS_DATE='拆箱日期';var C_HARBOUR='港区';var C_POL_HARBOUR='装货码头';var C_POD_HARBOUR='卸货码头';var C_RECEIPT_PLACE='收货地';var C_DESTINATION='目的地';var C_PRECARRIAGE='前程运输';var C_BL_ORI_NUM='正本提单份数';var C_BL_INFO='提单信息';var C_SHIPPER_INFO='收发货人信息';var C_BASE_INFO='基本信息';var C_MARKS='唛头';var C_SPEC='规格型号';var C_MANU_NO='手册序号';var C_CARGO_DESC='货物描述';var C_NUM_PACK='件数包装';var C_CARGO_DESC='货物描述';var C_PACKAGES_CAP='大写件数';var C_PACKAGES_EN='件数合计英文';var C_CARGO_NAME='名称';var C_GOODS_NAME='商品名称';var C_CARGO_NAME_CN_EN='货物名称（中/外文）';var C_CARGO_NAME_CN='中文品名';var C_CARGO_NAME_EN='英文品名';var C_HS_CODE='H.S 编码';var C_CARGO_CODE='商品编号';var C_MADE_IN='产地';var C_QUANTITY_WEIGHT='数/重量';var C_CARGO_VALUE='货物总值';var C_PACK_QUANTITY='包装种类及数量';var C_CONVEYANCE_S='运输工具';var C_CONVEYANCE='运输工具名称号码';var C_CONVEYANCE_NAME='运输工具名称';var C_CARGO_ADDRESS='货物存放地点';var C_CERTIFICATE_NO='许可证/审批号';var C_PORT_FROM='启运口岸';var C_PORT_TO='到达口岸';var C_PORT_IN='入境口岸';var C_REGISTER_NO='生产单位注册号';var C_CLAIM_DATE='索赔有效期至';var C_CONT_SPEC_NO='集装箱规格、数量及号码';var C_INSP_SPECIAL_TERM='合同，信用证订立的检验检疫条款或特殊要求';var C_MARKS_NO='标记及号码';var C_TRAFFIC_NO='提运单号';var C_DECLARE_DATE='申报日期';var C_EX_DATE='出口日期';var C_IM_DATE='进口日期';var C_PRE_NO='预录入号';var C_RECORD_NO='备案号';var C_COUNTRY_DESTINATION='最终目的国（地区）';var C_BIZ_COMPANY='经营单位';var C_BIZ_COMPANY_REQIRED='经营单位不能为空！';var C_SHIPPER_COMPANY='发货单位';var C_CONSIGN_COMPANY='收货单位';var C_CERTIFICATE_NO='许可证号';var C_APPROVAL_NO='批准文号';var C_CONTRACT_NO_A='合同协议号';var C_CUDE_CONTACT='报关联系人';var C_CUDE_TEL='报关联系电话';var C_COD_A='运抵国(地区)';var C_CUST_CUDE_CODE='海关备案代码';var C_COD_A_REQIRED='运抵国(地区)不能为空！';var C_COL_A='启运国(地区)';var C_COL_A_REQIRED='启运国(地区)不能为空！';var C_CUDE_TRTE='成交方式';var C_CUDE_TRTE_REQIRED='成交方式不能为空！';var C_MANUFACTURE='生产厂家';var C_POD_A='指运港';var C_POD_A_REQIRED='指运港不能为空！';var C_CUSTOMS_NO='海关编号';var C_LEVY_PERCENT='征税比例';var C_ORI_PLACE_D='境内货源地';var C_ORI_PLACE_D_REQIRED='境内货源地不能为空！';var C_DES_PLACE_D='境内目的地';var C_DES_PLACE_D_REQIRED='境内目的地不能为空！';var C_MARKS_REMARKS='标记唛码及备注';var C_CUDE_CARGO_LIST='报关商品列表';var C_CUDE_RECORD='报关记录';var C_TRANSITED_FLAG='是否转关';var C_CUDE_DOC_NUN='报关单份数';var C_REFUND_DOC_NUN='退税单份数';var C_REFUNC_DATE='报退日期';var C_SHUTOUT_DATE='退关日期';var C_REFUND_FLAG='是否退税';var C_CUDE_DOC_COLOR='报关单颜色';var C_CUDE_RELEASE_DATE='放行日期';var C_INSPECTION_FLAG='是否查验';var C_CUDE_OPEN_FLAG='是否开箱';var C_CUDE_TAX_LEVY='税费征收情况';var C_DECLARENT='报关员';var C_CARGO_DIMENSION='货物尺寸';var C_CHARGE_WEIGHT='计费重量';var C_DANAGER_CLASS='危险品分类';var C_IMDG_PAGE='违规页码';var C_UN_NO='联合国编号';var C_SUB_LABEL='危险品标签';var C_EMS_NO='应急措施号';var C_FLASH_POINT='闪点';var C_MFAG_NO='医疗急救号';var C_PKG_GROUP='危险品包装';var C_MFAG_NO='医疗急救号';var C_DANAGER_PROPERTY='危险品属性';var C_POLLUTION_FLAG='是否海洋污染';var C_TEMPERATURE_UNIT='温度单位';var C_TEMPERATURE='设置温度';var C_TEMPERATURE_HIGH='冷藏最高温度';var C_TEMPERATURE_LOW='冷藏最低温度';var C_VENT_OUTLET='通风口设置';var C_HUMIDITY='湿度置';var C_LENGTH='长(m)';var C_WIDTH='宽(m)';var C_HEIGH='高(m)';var C_CARGO_SPECIAL_INFO='特殊货物信息';var C_CARGO_INFO='货物信息';var C_SERVICE_SPEC='特约事项';var C_SERVICE_REQUIREMENT='服务要求';var C_BOOKING_REQUIREMENT='订舱服务要求';var C_TRAN_REQUIREMENT='陆运服务要求';var C_TRACK_VENDOR='拖车公司';var C_TRACK_CONTACT='装货联系人';var C_TRAN_CONTACT='拖车公司联系人';var C_TRAN_TEL='拖车公司电话';var C_TRAN_FAX='拖车公司传真';var C_TRACK_TEL='装货联系电话';var C_LOAD_ADDRESS='装货地址';var C_LOAD_PLACE='装货地';var C_DRAW_CY='提箱堆场';var C_DRAW_DATE='提箱日期';var C_BACK_DATE='还箱日期';var C_BACK_CY='还箱堆场';var C_TRAN_DATE='发车日期';var C_DELIVERY_ADDRESS='送货地址';var C_WARE_CONTACT='仓库联系人';var C_WARE_TEL='仓库联系电话';var C_WARE_REQUIREMENT='仓储要求';var C_WARE_LOAD='仓储、内装服务要求';var C_WARE_DIS='仓储、拆箱服务要求';var C_CONT_LOAD_REQUIREMENT='装箱要求';var C_CONT_DISCHARGE_REQUIREMENT='拆箱要求';var C_WARE_ADDRESS='仓库地址';var C_CONT_LOAD_ADDRESS='装箱地址';var C_CONT_DISCHARGE_ADDRESS='拆箱地址';var C_CUSTOMS_CONTACT='报关公司联系人';var C_CUSTOMS_ADDRESS='报关公司地址';var C_CUSTOMS_TEL='报关公司电话';var C_TRAN_CUSTOMS_INFO='司机代送报关资料到';var C_TRAN_TYPE='运输类型';var C_PRE_FLAG='预提';var C_INSP_FLAG='商检';var C_IC_FLAG='是否使用白卡';var C_IC_DAYS='白卡使用天数';var C_REAL_FLAG='车尾';var C_CONT_FLAG='箱检';var C_SWITCH_BL='换单';var C_FUMIGATE_FLAG='是否熏蒸';var C_QUARANTINE_FLAG='是否植检';var C_TRANSFERRING_FLAG='是否转关';var C_CUST_REQUIREMENT='报检/报关服务要求';var C_BHK_FLAG='是否港销';var C_BINTERNATIONAL_FLAG='是否国际中转';var C_BARGE_REQUIREMENT='驳运服务要求';var C_CARGO_OWNER='发货人';var C_INSURANCE_FEE='保费';var C_TRADE_INFO='贸易信息';var C_SCAC_CODE='SCAC代码';var C_BOOK_US_NO='美线舱单申报号';var C_US_FULLSHIP='全水路桥';var C_AMS_INFO='AMS信息';var C_F_SHIPPER='实际发货人';var C_F_CONSIGNEE='实际收货人';var C_F_NOTIFY='实际通知人';var C_FSHIPPER_INFO='实际收发货人信息';var C_OTHER_INFO='其它信息';var C_EXT_INFO='扩展信息';var C_HBL_INFO='House提单信息';var C_TRANS_BILL='代运单';var C_TRAN_NO='代运单号';var C_TRAN_LIST='代运单列表';var C_TRAN_INFO='代运单内容';var C_TASK='任务';var C_TASK_LIST='任务列表';var C_CARGO_LIST='货物列表';var C_TASK_D='依赖任务';var C_WARE_BILL='仓储联系单';var C_WARE_NO='仓储联系单号';var C_WARE_INFO='仓储联系单信息';var C_WARE_TYPE='联系目的';var C_WARE_DATE='联系日期';var C_WARE_ACCEPT_STATUS='仓库受理情况';var C_WARE_ACCEPT_TIME='仓库受理时间';var C_WARE_LIST='仓储联系单列表';var C_WARE_CONTACT='仓库联系人';var C_WARE_TEL='仓库电话';var C_WARE_FAX='仓库传真';var C_CUST_CONTACT='客户联系人';var C_CUST_TEL='客户联系电话';var C_CUST_FAX='客户传真';var C_WARE_OPERATOR='我司联系人';var C_WARE_OPERATOR_TEL='我司联系电话';var C_WARE_OPERATOR_FAX='我司传真';var C_WARE_BOOK_DATE='预约日期';var C_WARE_LOAD_FLAG='是否需要内装';var C_CONT_BILL='装箱单';var C_CONT='集装箱';var C_CONT_NO='箱号';var C_CONTAINER_NO='集装箱箱号';var C_CONT_NO_ORI='原箱号';var C_CONT_LIST='箱列表';var C_CONT_SHIP_LIST='装箱货物列表';var C_SEAL_NO='铅封号';var C_ARRIVE_TIME_D='要求抵达时间';var C_ARRIVE_TIME_F='实际抵达时间';var C_LOAD_TIME='装货时间';var C_LEAVE_TIME='离开时间';var C_BACK_TIME='还箱时间';var C_LOAD_FACTORY='装货工厂';var C_DRIVER='司机';var C_DRIVER_TEL='司机电话';var C_TRACK_NO='车牌号';var C_OP_TYPE='作业类型';var C_INSP_BILL='报检单';var C_INSP_BILL_INFO='报检单内容';var C_INSP_BILL_LIST='报检单列表';var C_INSP_BILL_NO='报检单号';var C_INSP_VENDOR_RN='报检单位登记号';var C_INSP_DATE='报检日期';var C_CUST_BILL='报关单';var C_CUST_INFO='报关单内容';var C_CUST_LIST='报关单列表';var C_ITEM_NO='项号';var C_BL_LIST='提单列表';var C_BL_RELEASE='放单';var C_BL_SHIP_DATE='装船日期';var C_BL_PATE='付费方式';var C_ISSUE_INFO='签发信息';var C_TOTAL_SAY='箱量/件数合计';var C_BL_CONFIRM='提单/确认书';var C_SUM_CONS='票数合计：';var C_SUM_PACK='件数合计：';var C_SUM_GW='毛重合计：';var C_SUM_CBM='体积合计：';var C_BY_CONS='按票';var C_BY_PACK='按件数';var C_BY_GW='按毛重';var C_BY_CBM='按体积';var C_MILES='公里数：';var C_SECOND_CARRIER='二程船公司';var C_SECOND_VESS='二程船名';var C_SECOND_VOYA='二程船航次';var C_SECOND_SHIP_LIST='二程船列表';var C_SECOND_SHIP='二程船';var C_SECOND_SHIP_INFO='二程船信息';var C_POT_AGENCY='中转港代理';var C_TRANS_NO='中转代码';var C_CUSTOM_SNO='关封号';var C_B_BOOKING_DOC='驳船订舱单';var C_DISCHARGE_HARBOUR='卸柜码头';var C_RABL='铁路运单';var C_RABL_NO='运单号';var C_RABL_LIST='运单列表';var C_RABL_INFO='运单信息';var C_CONT_WEIGHT='箱体重';var C_CONT_BACK_PLACE='返箱地';var C_INVOICE_PRICE='发票价格';var C_CARGO_WEIGHT='货重';var C_BULK_FLAG='是否散货';var C_SOC='SOC箱';var C_SOC_FLAG='是否SOC箱';var C_CONT_AGENCY='返箱代理';var C_SHIPPER_NOTES='发货人申明';var C_STATION_T='通过的国境站';var C_RA_CHARGE_REMARK='发货人承担下列过境铁路的费用';var C_RA_NOTES='对铁路无约束力的记载';var C_STATION_D='到达站';var C_DELIVERY_STATION='交货地';var C_DELIVERY_ADDRESS='交货地址';var C_CONT_DESC='箱体描述';var C_PRICE='价格';var C_PRSH='价格单';var C_PRSH_INFO='价格单信息';var C_PRSH_NO='价格号';var C_PRLI='约束条件';var C_COMMISION_RATE='佣金%';var C_COMMISION='佣金';var C_FREIGHT='运费';var C_CHARGE='杂费';var C_PRICE_MANAGEMENT='运价管理';var C_LOAD_DATE_F='装船日期(从)';var C_LOAD_DATE_T='装船日期(到)';var C_VOYA_QUANTITY='可配货量';var C_VOYA_PORTS='挂港';var C_CONTRACT_QUANTITY='合同货量';var C_FORCAST_QUANTITY='预配重量';var C_SHIPPED_QUANTITY='已配重量';var C_SHIP_QUANTITY='配船重量';var C_FACT_QUANTITY='实配重量';var C_REMAIN_QUANTITY='待配重量';var C_SHIP_CURR_QUANTITY='本次配船重量';var C_FORCAST_CBM='预配体积(CBM)';var C_SHIPPED_CBM='已配体积(CBM)';var C_REMAIN_CBM='待配体积(CBM)';var C_SHIP_CBM='配船体积(CBM)';var C_FACT_CBM='实配体积(CBM)';var C_SHIP_CURR_CBM='本次配船体积(CBM)';var C_FORCAST_LOAD_DATE='预计发货日期';var C_SHIP_LIST='配船清单';var C_SHIP_INFO='船舶信息';var C_RENTER='租船人';var C_ADD_CARGO='添加待配货物';var C_FORCAST_SHIP_DATE='预配船期';var C_SHIP_DATE_F='LAY(船东)';var C_SHIP_DATE_T='CAN(船东)';var C_FORCAST_SHIP_DATE_F='LAY(客户)';var C_FORCAST_SHIP_DATE_T='CAN(客户)';var C_SHIPPED_VESS='已配船名/航次';var C_FCON='租船合同';var C_FCON_LIST='租船合同列表';var C_R='（收）';var C_P='（支）';var C_UNIT_CUST='重量单位(客户)';var C_UNIT_CARRIER='重量单位(船东)';var C_FREIGHT_TOTAL='运费总价';var C_FREIGHT_UNIT='运费单价';var C_BL_TYPE='提单类型';var C_ISSUE_BY='签发人';var C_RELEASE_BY='放单人';var C_RECEIVER='受单人';var C_ISSUE_PLACE='签发地点';var C_ISSUE_DATE='签发日期';var C_THIRD_PLACE='是否异地签单';var C_ADVANCED_FLAG='是否预借提单';var C_BL_BACK_FLAG='是否倒签提单';var C_CLEAN_FLAG='是否清洁提单';var C_DO='提货单';var C_DO_INFO='提货信息';var C_DO_APPLICATION='分拨申请';var C_DO_APPLICATION_INFO='分拨申请信息';var C_GEN_FROM_HBL='从H B/L自动生成';var C_SETTLE='商务结算';var C_SETTLE_AR='应收结算';var C_SETTLE_AP='应付结算';var C_ACCOUNT='结算对象';var C_ACCOUNT_AR='应收结算对象';var C_ACCOUNT_AP='应付结算对象';var C_BANK_CNY='开户行(CNY)';var C_BANK_ACCOUNT_CNY='银行帐号(CNY)';var C_BANK_USD='开户行(USD)';var C_BANK_ACCOUNT_USD='银行帐号(USD)';var C_INVO_TITLE='发票抬头';var C_INVO='账单';var C_INVO_TAX='发票';var C_INVO_R='应收账单';var C_INVO_P='应付账单';var C_INVO_LIST='账单列表';var C_BILL='对账单';var C_EXPE_CONFIRM='费用确认单';var C_BILL_INFO='对账单信息';var C_BILL_R='应收对账单';var C_BILL_P='应付对账单';var C_BILL_R_LIST='应收对账单列表';var C_BILL_P_LIST='应付对账单列表';var C_BILL_NO='对账单号';var C_INVO_NO='账单号';var C_TAX_NO='税务发票号';var C_SETTLE_OBJECT='结算单位';var C_BILL_OBJECT='对账单位';var C_INVO_CUST='开票单位';var C_INVO_STATUS='账单状态';var C_INVO_DATE='账单日期';var C_BILL_DATE='制单日期';var C_DUE_DATE='付费期限';var C_AMOUNT='金额';var C_TOTAL_AMOUNT='合计金额';var C_TOTAL_AMOUNT_C='合计金额：';var C_CAP_AMOUNT_C='大写金额：';var C_CAP_AMOUNT_E='大写金额（英文）：';var C_QUANTITY='数量';var C_UNIT_PRICE='单价';var C_COST_PRICE='成本价';var C_COST_TOTAL='合计成本';var C_TOTAL_PRICE='总价';var C_PPCC='P/C';var C_INVO_EX_RATE='开票汇率';var C_VOUC_EX_RATE='销账汇率';var C_INVO_CURR='开票币种';var C_INVO_AMOUNT='账单金额';var C_INVOICE_AMOUNT_ORI='本次开票金额';var C_INVOICE_AMOUNT_ORI_C='原币开票金额';var C_EX_AMOUNT='折算金额';var C_EX_AMOUNT_ORI='折算原币金额';var C_VOUC_R_AMOUNT='收款金额';var C_VOUC_P_AMOUNT='付款金额';var C_INVOICED_AMOUNT='已开票金额';var C_WRITEOFF_AMOUNT='核销金额';var C_WRITEOFFED_AMOUNT='已核销金额';var C_WRITEOFFED_AMOUNT_C='本次核销金额';var C_PAY_AMOUNT_C='本次付款金额';var C_WRITEOFFED_AMOUNT_ORI='原币已核销金额';var C_FIX_AMOUNT='处理金额';var C_REMAIN_AMOUNT='余额';var C_WRITEOFF_R='收款核销';var C_WRITEOFF_P='付款核销';var C_WRITEOFF_NO='核销号';var C_WRITEOFFED_LINE='核销明细';var C_PR_R='托收单';var C_PR_P='付款申请';var C_PR_R_INFO='托收单信息';var C_PR_P_INFO='付款申请信息';var C_PR_NO_R='托收单号';var C_PR_NO_P='付款申请号';var C_VOUC_NO='收/付款单号';var C_VOUC_NO_R='收款单号';var C_VOUC_NO_P='付款单号';var C_BANK='银行账户';var C_BANK_ACCOUNT='银行帐号';var C_PR_DATE_R='托收日期';var C_PR_DATE_P='申请日期';var C_VOUC_DATE_R='收款日期';var C_VOUC_DATE_P='付款日期';var C_CHECK_NO='支票号';var C_FIX_LIST='余额明细';var C_WRITEOFF_DATE='核销日期';var C_BANK_RECEIPT_NO='银行水单号';var C_AR='应收';var C_AP='应付';var C_SUM_AR='应收合计';var C_SUM_AP='应付合计';var C_SUM_CNY='人民币合计';var C_SUM_USD='美元合计';var C_SUM_LOC='本位币合计';var C_SUM_CNY_C='人民币合计：';var C_SUM_USD_C='美元合计：';var C_SUM_EUR_C='欧元合计：';var C_SUM_LOC_C='本币合计：';var C_SUM_SALE_R='收入合计：';var C_SUM_SALE_P='支出合计：';var C_SUM_SALE_C='代理费合计：';var C_SUM_RC='销帐本币合计：';var C_EXPE_MANAGEMENT='费用管理';var C_EXPE='费用';var C_EXPE_INFO='收费信息';var C_EXPE_TYPE='费用类型';var C_EXPE_LINE='费用明细';var C_INVO_LINE='发票明细';var C_EXPE_R='应收费用';var C_EXPE_P='应付费用';var C_EXPE_C='代理费';var C_CURR_BASE='原币种';var C_CURR_EX='兑换币种';var C_CURRENCY='币制';var C_EX_RATE='汇率';var C_EX_ACTIVE='当前汇率';var C_EX_HISTORY='历史汇率';var C_INTEREST_RATE='利率';var C_INRA_ACTIVE='当前利率';var C_INRA_HISTORY='历史利率';var C_INRA_TYPE='利率类型';var C_INRA_SETTING='利率设置';var C_ACCOUNT_NAME='账户名称';var C_BANK='银行';var C_CUST_BANK='对方开户银行';var C_CUST_BANK_ACCOUNT='对方银行帐号';var C_BANK_R='收款银行';var C_BANK_P='付款银行';var C_ACCOUNT_R='收款帐号';var C_ACCOUNT_P='付款帐号';var C_BANK_ACCOUNT='银行帐号';var C_BANK_BILL_NO='银行水单号';var C_WRITEOFF_STATUS='核销状态';var C_PROFIT='毛利';var C_PROFIT_RATE='毛利率(%)';var C_PROFIT_CNY='CNY利润：';var C_PROFIT_EUR='EUR利润：';var C_PROFIT_USD='USD利润：';var C_PROFIT_LOC='本币利润：';var C_PROFIT_SALE='销售利润：';var C_PROFIT_RC='销帐利润：';var C_AR_USD='应收USD';var C_AR_CNY='应收CNY';var C_AP_USD='应付USD';var C_AP_CNY='应付CNY';var C_AR_USD_INVOICED='应收USD已开票';var C_AR_USD_WRITEOFFED='应收USD已核销';var C_AR_CNY_INVOICED='应收CNY已开票';var C_AR_CNY_WRITEOFFED='应收CNY已核销';var C_AP_USD_INVOICED='应付USD已开票';var C_AP_USD_WRITEOFFED='应付USD已核销';var C_AP_CNY_INVOICED='应付CNY已开票';var C_AP_CNY_WRITEOFFED='应付CNY已核销';var C_INVO_R_MGT='应收账单管理';var C_INVO_P_MGT='应付账单管理';var C_VOUC_R_MGT='收款单管理';var C_VOUC_P_MGT='付款单管理';var C_PR_R_MGT='托收单管理';var C_PR_P_MGT='付款申请管理';var C_INNO_MGT='发票号码管理';var C_SYSTEM_MGT='系统管理';var C_INNO_START='起始发票号';var C_INNO_END='终止发票号';var C_INNO_NEXT='当前可用发票号';var C_ADD_EXPE='添加费用';var C_SEL_INVO='账单选择';var C_ORI_AMOUNT='原币金额';var C_TEMP_UP='模板上传';var C_TEMP_FILE='模板文件';var C_TEMP_SEL_P='请选择模板文件';var C_TEMP_FILE_P='请选择模板文件';var C_CURR_P='请选择币种';var C_SAIL_DATE_P='请选择开航日期';var C_SEND_MAIL='发送邮件';var C_SEND_FAX='发送传真';var C_CARGO_SEL='选择货物';var C_IMP_DATA='请选择数据文件';var C_AUDIT_STATUS='审核状态';var C_CONS_STATUS='单票状态';var C_CONS_AUDIT='单票审核';var C_EXPE_AUDIT='业务确认';var C_EXPE_UNCHECK='取消确认';var C_CONS_AUDIT_PASS='审核通过';var C_BIZ_INFO='业务信息';var C_OLD_PASS='旧密码';var C_NEW_PASS='新密码';var C_CONFIRM_NEW_PASS='确认新密码';var C_CREATE_BY='创建人';var C_CREATE_BY_C='创建人：';var C_MODIFY_BY='修改人';var C_MODIFY_BY_C='修改人：';var C_CREATE_TIME='创建时间';var C_MODIFY_TIME='修改时间';var C_MODIFY_DATE='修改日期';var C_CREATE_TIME_C='创建时间：';var C_MODIFY_TIME_C='修改时间：';var C_BILL_BY='制单人';var C_BILL_DATE='制单日期';var C_VOUC_BY='核销人';var C_AUDIT_BY='审核人';var C_AUDIT_BY_C='审核人：';var C_AUDIT_TIME='审核日期';var C_AUDIT_TIME_C='审核日期：';var C_SIGNER='签收人';var C_SIGN_DATE='签收日期';var C_RECEIVER='领证人';var C_RECEIVE_DATE='领证日期';var ZERO='零',ONE='壹',TWO='贰',THREE='叁',FOUR='肆',FIVE='伍',SIX='陆',SEVEN='柒',EIGHT='捌',NINE='玖';var TEN='拾',HUNDRED='佰',THOUSAND='仟';var C_PACKING_LIST='发货清单';var C_PACKING_LIST_PACU='发货汇总清单-规格';var C_PACKING_LIST_PAHY='发货汇总清单-发货方式';var C_PACKING_LIST_PACBM='发货汇总清单-规格体积';var C_PACKING_LIST_PAPI='发货汇总清单-规格支数';var C_PACKING_LIST_PAPL='发货汇总清单-规格支数总长度';var C_PACKING_LIST_PASL='发货汇总清单-西姆莱斯';var C_PACKING_INWARE_INFO='入库信息';var C_PACKING_ONBOARD_INFO='最近上船明细';var C_HARBOUR_EXP_CONFIRM='码头费用确认书单';var C_SHIPPING_LIST='配船清单';var C_PACKING_TOTAL_PACKAGE='发货总件数';var C_PACKING_TOTAL_GW='发货总毛重';var C_PACKING_ARRIVE_GW='到港货量';var C_PACKING_INWARE_GW='总入库量';var C_PACKING_LABEL='标牌号';var C_PACKING_TRACK_NO='车皮/驳船/卡车号';var C_PACKING_LINE_NO='行号';var C_PACKING_EXP_PORT='出货港';var C_PACKING_STATION='到栈';var C_PACKING_TRANS_STATION='转运栈';var C_PACKING_ARRIVE_DATE='到达日期';var C_PACKING_TRANS_DATE='转运日期';var C_PACKING_LOCATION='场地位置';var C_ARRIVED='已到货';var C_TRANS='转运';var C_TRANS_LIST='转运记录';var C_TRANS_TIMES='次数';var C_TRANS_BATCH='批量转运';var C_TRANS_FLAG='转运';var C_TRACK_TYPE='到站方式';var C_TRACK_TYPE_P='进港方式';var C_BATCH_SPEC='批量修改规格型号';var C_BATCH_HARBOUR='批量修改出货港';var C_BATCH_STATION='批量修改到栈';var C_BATCH_LOCATION='批量修改场地位置';var C_BATCH_ARRIVE_DATE='批量修改到达日期';var C_BATCH_TRACK_TYPE='批量修改到站方式';var C_BATCH_TRACK_TYPE_P='批量修改进港方式';var C_BATCH_PACK='批量修改包装种类';var C_BATCH_CARGO_NAME_CN='批量修改中文品名';var C_BATCH_VESS='批量修改船名';var C_BATCH_BL='批量修改提单号';var C_BATCH_LEN='批量修改长度';var C_BATCH_TOTAL_LEN='批量修改总长度';var C_BATCH_UNIT_LEN='批量修改长度单位';var C_STATION_NOW='当前站';var C_LOCATION_NOW='当前位置';var C_DOC_RELEASABLE_FLAG='可放单';var C_LENGTH='长度';var C_TOTAL_LENGTH='总长度';var C_UNIT_LEN='长度单位';var C_BATCH_NO='批次号';var C_SUM_LIST='汇总清单';var C_COPY_SHEET='副页';var C_EXPE_CONFIRM='费用确认';var C_CUDE_DOC='关单';var C_PHOTO='照片';var C_MATES_RECEIPT='大副收据';var C_TASK_CFG='任务配置';var C_TASK_NAME='任务名称';var C_TASK_DESC='任务描述';var C_TASK_DATE_TYPE='时间节点';var C_TASK_DATE_ESTIMATED='预计天数';var C_TASK_TRRIGER='触发事件';var C_MY_TASK='我的任务';var C_MY_TASK_ACTIVE='未完成的任务';var C_MY_TASK_FINISHED='已完成的任务';var C_TASK_ESTIMATED_DATE='预计完成日期';var C_TASK_FINISHED_DATE='实际完成日期';var C_FINISHED='已完成';var C_GEN_BL='生成提单';var C_GEN_CUDE='生成报关单';var C_EXP_CONS='输出订舱委托书';var C_EXPE_CONFIRM_STATUS='业务确认状态';var C_FIN_AUDIT='主管审核';var C_FIN_AUDIT_STATUS='主管审核状态';var C_CONS_AUDIT_STATUS='单票审核状态';var C_INVO_STATUS_R='应收账单状态';var C_INVO_STATUS_P='应付账单状态';var C_WRITEOFF_STATUS_R='应收核销状态';var C_WRITEOFF_STATUS_P='应付核销状态';var C_VOYA_LIST='船期表';var C_VOYA_PACKING_LIST='船期发货表';var C_POD_SHIPPING_ADVICE='出货港发货通知书';var C_INVENTORY_LIST='盘存表';var C_OVERDUTY_LIST='超期表';var C_LIVE_OVERDUTY_LIST='即时超期表';var C_STAT_DATE='统计日期';var C_INV_FLAG='箱单发票';var C_SALES_PRICE='销售价';var C_BATCH_OP='批量操作';var C_ACT_LOG='操作日志';var C_ACT_USER='操作用户';var C_ACT_NAME='操作类型';var C_ACT_TABLE='操作数据类型';var C_ACT_TNO='操作数据编号';var C_ACT_IP='IP地址';var C_ACT_TIME='操作时间';var C_ACT_TIME_F='操作时间（从）';var C_ACT_TIME_T='操作时间（到）';var C_VIEW_GROUP='可查看同组数据';var C_EIDT_GROUP='可编辑同组数据';var C_VIEW_ALL_CONS='可查看所有单票';var C_EDIT_ALL_CONS='可编辑所有单票';var C_VIEW_ALL='可查看所有';var C_EDIT_ALL='可编辑所有';var C_EDITABLE='可输入';var C_EXPE_PERMISSIOM='费用操作权限';var C_INNO_PREFIX='发票号前缀';var C_ONLINE_USER='在线用户';var C_DEBIT_NOTE='DebitNotes';var C_BALANCE='账户余额';var C_CUST_BALANCE='客户账户余额';var C_DISPATCHER='调度';var C_CUDE_TYPE='报关类型';var C_ALLOCATION='分摊';var C_EXPE_ALLOCATION='费用分摊';var C_EXPE_FOR_ALLOCATION='待分摊费用';var C_CONS_FOR_ALLOCATION='待分摊单票';var C_EXPE_ALLOCATED='分摊结果';var C_YUAN='元',C_JIAO='角',C_FEN='分',C_LI='厘',C_HAO='毫',C_SI='丝',C_MINUS='负';var C_ZHENG='整',C_WAN='万',C_YI='亿',C_ZHAO='兆',C_JIN='京',C_HE='垓',C_ZHU='杼',C_XIANG='穰',C_GOU='沟',C_JIAN='涧',C_ZHEN='正';var C_ZERO_YUAN='零元整';var C_INI_DATE='初始化数据...';var C_IMP_CHILD='导入分单';var C_IMP_VOY_CONS='导入整船单票';var C_SEL_ALLOCATION_CONS='请选择待分摊的单票！';var C_DIALOG='-对话';var C_SEND_MSG='发送消息';var C_SEND_FILE='发送文件';var C_SEND_MAIL='发送电子邮件';var C_VIEW_MSG_HISTORY='查看消息历史';var C_SEND_TIME='发送时间';var C_SENDER='发送者';var C_RECEIVER='接受者';var C_KICK_OFF='踢除';var C_MSG='消息';var C_MSG_TOPIC_SUB='消息订阅';var C_MSG_TOPIC='消息主题';var C_MSG_TOPIC_LIST='消息主题列表';var C_MSG_TEMP='消息模板';var C_MSG_EMAIL='电子邮件';var C_MSG_INNER='内部消息';var C_MSG_SUB='订阅';var C_EXHI_BATCH='财务接口导出';var C_EXHI_FILE='导出文件';var C_EXHI_TYPE='导出类型';var C_MESU_LIST='订阅人列表';var C_MESU_TYPE='订阅人类型';var C_MESU_NAME='订阅人名称';var C_MESU_EMAIL='订阅人邮件地址';var C_MESU_ADD='添加订阅人';var C_SELECT_METO='请先选择一条消息主题！';var C_MESU_TYPE_I='内部用户';var C_MESU_TYPE_E='外部客户';var C_MESU_TYPE_S='系统角色';var S_SHIP_NOT='未配船';var S_SHIP_PARTY='部分配船';var S_SHIP_ALL='已配船';var S_SHIP_S='已配船';var S_SHIP_P='待配船';var C_FAST_SEARCH='快速查询';var C_COMMISSION='业务员提成方案';var C_SALES='业务员';var C_SALES_PROFIT='完成利润合计';var C_SALES_PROFIT_DETAIL='完成利润明细';var C_SALES_COMMISSION_R='应得提成';var C_SALES_COMMISSION='业务员提成设置';var C_COMMISSION_LOWER='指标（>）';var C_COMMISSION_LIMIT='指标（<=）';var C_COMMISSION_RATE='提成比例';var C_COMMISSION_LIST='方案列表';var C_COMMISSION_ITEM='方案明细';var C_WS_USR_NAME='用户名';var C_WS_USR_PASS='密码';var C_WS_EMAIL='电子邮件';var C_WS_COMPANY='公司名称';var C_WS_TEL='联系电话';var C_WS_FAX='传真';var C_WS_FIRST_NAME='姓名';var C_WS_TITLE='职位';var C_WS_DEPT='部门';var C_WS_MOBILE='手机';var C_WS_ADDRESS='地址';var C_WS_CITY='城市';var C_WS_PROVINCE='省';var C_WS_ZIP='邮编';var C_WS_URL='公司网址';var C_WS_CREATE_TIME='创建时间';var C_WS_REG_TIME='注册时间';var C_WS_USER_ACCEPTED='已转正式客户';var C_WS_USER_NOT_ACCEPTED='未转正式客户';var C_WS_WCON_ACCEPTED='已受理';var C_WS_WCON_NOT_ACCEPTED='未受理';C_WS='网上服务';C_WS_USER='注册用户列表';C_WS_USER_ACCEPT='转为正式客户';C_WS_INQUIRY_LIST='网上询价';C_WS_CONS_LIST='网上订舱';C_REPLY='回复';C_WS_WCON_ACCEPT='转为正式委托';var C_BC='业务类型';var C_BT='运输方式';var C_ST='装运方式';var C_RESET_PASS='重置密码';var C_RESET_PASS_INFO='该用户的密码已经被重置成：123456';var C_PERMISSION_SET='授权';var M_SAVE_FIRST='必须先保存新增的数据。';var C_PACK_REQIRED='包装种类不能为空！';var C_COPY_EXPENSE='费用复制';