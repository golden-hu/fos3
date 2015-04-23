-- add by yinyulong 付费方式字段导出错误修正。
update p_template_map set TEMA_FIELD='blPaymentTerm', TEMA_CONVERTER = NULL where tety_id=1 and tema_name='付费方式' and TEMA_FIELD='blValuePayment';