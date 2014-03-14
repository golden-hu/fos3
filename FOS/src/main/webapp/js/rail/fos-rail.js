Fos.ContainerTraceTab = function(p) {
	this.sel = GSEL;
	var store = GS('COTR_Q', 'FContainerTrace', FContainerTrace, 'cotrId', 'DESC', '', '', 'id', false);
	if (p.get('rowAction') != 'N') store.load({
		params: {
			consId: p.get('consId')
		}
	});
	var sm = new Ext.grid.CheckboxSelectionModel({
		singleSelect: false
	});
	var cm = new Ext.grid.ColumnModel({
		columns: [sm, {
			header: C_CONT_NO,
			dataIndex: 'contNo',
			editor: new Ext.form.TextField({})
		},
		{
			header: C_COTY,
			dataIndex: 'contType',
			width: 60,
			renderer: getCOTY,
			editor: new Ext.form.ComboBox({
				displayField: 'cotyCode',
				valueField: 'cotyCode',
				triggerAction: 'all',
				mode: 'local',
				selectOnFocus: true,
				listClass: 'x-combo-list-small',
				store: getCOTY_S()
			})
		},
		{
			header: C_CONT_OWNER,
			dataIndex: 'contOwner',
			editor: new Ext.form.ComboBox({
				store: getCS(),
				enableKeyEvents: true,
				displayField: 'custNameCn',
				valueField: 'custNameCn',
				typeAhead: true,
				mode: 'local',
				tpl: custTpl,
				itemSelector: 'div.list-item',
				listWidth: C_LW,
				triggerAction: 'all',
				selectOnFocus: true,
				anchor: '99%',
				listeners: {
					scope: this,
					blur: function(f) {
						if (f.getRawValue() == '') {
							f.clearValue();
						}
					},
					select: function(c, r, i) {
						var re = sm.getSelected();
						re.set('contOwnerId', r.get('custId'));
					},
					keydown: {
						fn: function(f, e) {
							LC(f, e, 'custBookerFlag');
						},
						buffer: BF
					}
				}
			}),
			width: 160
		},
		{
			header: C_EXPIRY_DATE,
			dataIndex: 'consExpiryDate',
			renderer: formatDate,
			editor: new Ext.form.DateField({})
		},
		{
			header: C_ETA,
			dataIndex: 'consEta',
			renderer: formatDate,
			editor: new Ext.form.DateField({})
		},
		{
			header: C_CUST_DAY,
			dataIndex: 'custFreeDay',
			width: 110,
			editor: new Ext.form.NumberField({})
		},
		{
			header: C_CUST_EXT_RATE,
			dataIndex: 'custExtendedRate',
			editor: new Ext.form.NumberField({})
		},
		{
			header: C_TENANT_DAY,
			dataIndex: 'tenantFreeDay',
			editor: new Ext.form.NumberField({})
		},
		{
			header: C_TENANT_EXT_RATE,
			dataIndex: 'tenantExtendedRate',
			editor: new Ext.form.NumberField({})
		}],
		defaults: {
			sortable: true,
			width: 100
		}
	});
	this.addTrace = function() {
		var c = new FContainer({
			id: GGUID(),
			contId: '0',
			consId: p.get('consId'),
			consNo: p.get('consNo'),
			consEta: p.get('consEta'),
			version: '0'
		});
		this.grid.stopEditing();
		store.insert(0, c);
		c.set('rowAction', 'N');
		this.grid.getSelectionModel().selectFirstRow();
		this.grid.startEditing(0, 1);
	};
	this.saveTrace = function() {
		this.grid.stopEditing();
		var a = store.getModifiedRecords();
		if (a.length) {
			for (var i = 0; i < a.length; i++) {
				if (checkContainerNo(a[i].get('contNo')) == false) {
					XMG.alert(SYS, '集装箱编码格式不正确，请重新输入！');
					return;
				}
			}
			var xml = ATX(a, 'FContainerTrace', FContainerTrace);
			if (xml != '') {
				Ext.Ajax.request({
					scope: this,
					url: SERVICE_URL,
					method: 'POST',
					params: {
						A: 'COTR_S'
					},
					success: function(res) {
						var a = XTRA(res.responseXML, 'FContainerTrace', FContainerTrace);
						FOSU(store, a, FContainerTrace);
						XMG.alert(SYS, M_S);
					},
					failure: function(r) {
						XMG.alert(SYS, M_F + r.responseText);
					},
					xmlData: FOSX(xml)
				});
			}
		}
		 else XMG.alert(SYS, M_NC);
	};
	this.removeTrace = function() {
		var b = this.grid.getSelectionModel().getSelected();
		if (b) {
			b.set('rowAction', b.get('rowAction') == 'N' ? 'D': 'R');
			store.remove(b);
		}
		 else XMG.alert(SYS, M_NO_DATA_SELECTED);
	};
	this.grid = new Ext.grid.EditorGridPanel({
		title: C_CONT_INFO,
		region: 'north',
		autoScroll: true,
		height: 140,
		store: store,
		sm: sm,
		cm: cm,
		tbar: [{
			text: C_ADD + '(N)',
			iconCls: 'add',
			scope: this,
			handler: this.addTrace
		},
		'-', {
			text: C_REMOVE + '(R)',
			iconCls: 'remove',
			scope: this,
			handler: this.removeTrace
		},
		'-', {
			text: C_SAVE + '(S)',
			iconCls: 'save',
			scope: this,
			handler: this.saveTrace
		},
		'-']
	});
	var expPanel = new Fos.SectionGridFee(p, 'COTR', this, store, sm);
	var expCustPanel = new Fos.SectionGridCustFee(p, 'COTR', this, store, sm);
	Fos.ContainerTraceTab.superclass.constructor.call(this, {
		title: C_CONT_TRACE,
		border: false,
		autoScroll: true,
		header: false,
		deferredRender: false,
		items: [this.grid, expCustPanel, expPanel]
	});
};
Ext.extend(Fos.ContainerTraceTab, Ext.FormPanel);
Fos.SectionGridCustFee = function(p, section, parent, listStore, traceSm) {
	var store = GS('EXPE_PERM_Q', 'SExpense', SExpense, 'expeId', 'DESC', '', '', '', false);
	store.load({
		params: {
			consId: p.get('consId'),
			section: section,
			expeType: 'R'
		}
	});
	var m = getRM(p.get('consBizClass'), p.get('consBizType'), p.get('consShipType'));
	m = m + M3_EXPE + S_AP;
	var t1 = {
		header: C_SETTLE_OBJECT,
		width: 200,
		dataIndex: "custName",
		align: 'left',
		editor: new Ext.form.ComboBox({
			displayField: 'custCode',
			valueField: 'custNameCn',
			triggerAction: 'all',
			mode: 'local',
			tpl: custTpl,
			itemSelector: 'div.list-item',
			listWidth: 400,
			allowBlank: false,
			blankText: '',
			invalidText: '',
			selectOnFocus: true,
			listClass: 'x-combo-list-small',
			store: getCS(),
			enableKeyEvents: true,
			listeners: {
				scope: this,
				select: function(c, r, i) {
					var b = this.getSelectionModel().getSelected();
					b.set('custId', r.get('custId'));
					b.set('custName', r.get('custNameCn'));
					b.set('custSname', r.get('custCode'));
				},
				keydown: {
					fn: function(f, e) {
						LC(f, e, 'custApFlag', 1);
					},
					buffer: 500
				}
			}
		})
	};
	t2 = {
		header: C_CHAR,
		width: 80,
		dataIndex: "charName",
		align: 'center',
		editor: new Ext.form.ComboBox({
			displayField: 'charCode',
			valueField: 'charName',
			triggerAction: 'all',
			tpl: charTpl,
			itemSelector: 'div.list-item',
			listWidth: 300,
			allowBlank: false,
			blankText: '',
			invalidText: '',
			mode: 'local',
			selectOnFocus: true,
			listClass: 'x-combo-list-small',
			store: getCHAR_S(),
			listeners: {
				scope: this,
				select: function(c, r, i) {
					var b = this.getSelectionModel().getSelected();
					b.set('charId', r.get('charId'));
					b.set('chclId', r.get('chclId'));
					b.set('charNameEn', r.get('charNameEn'));
					b.set('currCode', r.get('currCode'));
					b.set('unitId', r.get('unitId'));
					b.set('expeExRate', getExRate(r.get('currCode'), 'CNY'));
				}
			}
		})
	};
	var t3 = {
		header: C_UNIT,
		width: 80,
		dataIndex: "unitName",
		align: 'center',
		editor: new Ext.form.ComboBox({
			displayField: 'unitCode',
			valueField: 'unitCode',
			triggerAction: 'all',
			mode: 'local',
			selectOnFocus: true,
			listClass: 'x-combo-list-small',
			store: getUNIT_C(),
			listeners: {
				scope: this,
				select: function(c, r, i) {
					var b = this.getSelectionModel().getSelected();
					var rec = frm.UN.getById(r.get('unitCode'));
					b.set('expeNum', rec ? rec.get('N') : 1);
				}
			}
		})
	};
	var t4 = {
		header: C_QUANTITY,
		width: 60,
		dataIndex: "expeNum",
		renderer: expenseNumRender,
		editor: new Ext.form.NumberField({
			decimalPrecision: 4,
			selectOnFocus: true,
			allowBlank: false,
			blankText: '',
			invalidText: ''
		})
	};
	var t5 = {
		header: C_UNIT_PRICE,
		width: 80,
		dataIndex: "expeUnitPrice",
		renderer: expenseNumRender,
		editor: new Ext.form.NumberField({
			decimalPrecision: 4,
			selectOnFocus: true,
			allowBlank: false,
			blankText: '',
			invalidText: ''
		})
	};
	var t6 = {
		header: C_CURR,
		dataIndex: 'currCode',
		width: 50,
		align: 'center',
		editor: new Ext.form.ComboBox({
			displayField: 'currCode',
			valueField: 'currCode',
			triggerAction: 'all',
			allowBlank: false,
			blankText: '',
			invalidText: '',
			mode: 'local',
			selectOnFocus: true,
			listClass: 'x-combo-list-small',
			store: getCURR_S()
		})
	};
	var t7 = {
		header: C_EX_RATE,
		width: 60,
		dataIndex: "expeExRate",
		renderer: rateRender
	};
	var t8 = {
		header: C_AMOUNT,
		width: 80,
		dataIndex: "expeTotalAmount",
		renderer: numRender
	};
	var t16 = {
		header: C_REMARKS,
		width: 100,
		dataIndex: "expeRemarks",
		editor: new Ext.form.TextField({
			enableKeyEvents: true,
			listeners: {
				scope: this,
				keydown: function(c, e) {
					k = e.getKey();
					if (k == e.ENTER) this.add();
				}
			}
		})
	};
	var sm = new Ext.grid.CheckboxSelectionModel({
		singleSelect: false
	});
	var cols = [sm, t1, t2, t3, t4, t5, t6, t7, t8, t16];
	var cm = new Ext.grid.ColumnModel({
		columns: cols,
		defaults: {
			sortable: true,
			width: 100,
			align: 'right'
		}
	});
	cm.defaultSortable = true;
	cm.defaultWidth = 100;
	this.add = function() {
		var a = listStore.getRange();
		var b = store.getRange();
		if (a.length > 0 && b.length > 0 && a.length > b.length) {
			for (var i = 0; i < a.length; i++) {
				for (var j = 0; j < b.length; j++) {
					if (a[i].get('cotrId') != b[j].get('consCustId')) {
						var day = (a[i].get('consExpiryDate').getTime() - a[i].get('consEta').getTime()) / (24 * 60 * 60 * 1000);
						var freeDay = a[i].get('custFreeDay');
						var num = (day - freeDay);
						var expeTotalAmount = num * a[i].get('custExtendedRate');
						var unit = 'EACH';
						var rid = GGUID();
						if (num > 0) {
							var e = new SExpense({
								id: rid,
								expeId: rid,
								consId: a[i].get('consId'),
								consNo: a[i].get('consNo'),
								section: section,
								consBizClass: a[i].get('consBizClass'),
								consBizType: a[i].get('consBizType'),
								consShipType: a[i].get('consShipType'),
								expeStatus: '0',
								expeBillStatus: '0',
								expeInvoiceStatus: '0',
								expeWriteOffStatus: '0',
								consCustId: a[i].get('cotrId'),
								custId: p.get('custId'),
								custName: p.get('custName'),
								expeType: 'R',
								pateId: PPID,
								pateCode: 'P',
								unitName: unit,
								currCode: 'CNY',
								expeUnitPrice: a[i].get('custExtendedRate'),
								expeCommissionRate: '',
								expeCommission: '',
								expeInnerPrice: '',
								expeExRate: '1.0000',
								expeRemarks: '',
								expeDate: new Date(),
								expeAllocationFlag: '0',
								expeAllocatedFlag: '0',
								expeInvoiceAmount: '0',
								expeWriteOffAmount: '0',
								expeWriteOffRcAmount: '0',
								expeInnerAmount: '0',
								expeRcAmount: '0',
								expeTotalAmount: expeTotalAmount,
								expeNum: num,
								version: '0'
							});
							this.stopEditing();
							store.add(e);
							e.set('rowAction', 'N');
							sm.selectFirstRow();
							this.startEditing(0, 1);
						}
					}
				}
			}
		} else if (a.length > 0 && b.length == 0) {
			for (var i = 0; i < a.length; i++) {
				var day = (a[i].get('consExpiryDate').getTime() - a[i].get('consEta').getTime()) / (24 * 60 * 60 * 1000);
				var freeDay = a[i].get('custFreeDay');
				var num = (day - freeDay);
				var expeTotalAmount = num * a[i].get('custExtendedRate');
				var unit = 'EACH';
				var rid = GGUID();
				if (num > 0) {
					var e = new SExpense({
						id: rid,
						expeId: rid,
						consId: a[i].get('consId'),
						consNo: a[i].get('consNo'),
						section: section,
						consBizClass: a[i].get('consBizClass'),
						consBizType: a[i].get('consBizType'),
						consShipType: a[i].get('consShipType'),
						expeStatus: '0',
						expeBillStatus: '0',
						expeInvoiceStatus: '0',
						expeWriteOffStatus: '0',
						consCustId: a[i].get('cotrId'),
						custId: p.get('custId'),
						custName: p.get('custName'),
						expeType: 'R',
						pateId: PPID,
						pateCode: 'P',
						unitName: unit,
						currCode: 'CNY',
						expeUnitPrice: a[i].get('custExtendedRate'),
						expeCommissionRate: '',
						expeCommission: '',
						expeInnerPrice: '',
						expeExRate: '1.0000',
						expeRemarks: '',
						expeDate: new Date(),
						expeAllocationFlag: '0',
						expeAllocatedFlag: '0',
						expeInvoiceAmount: '0',
						expeWriteOffAmount: '0',
						expeWriteOffRcAmount: '0',
						expeInnerAmount: '0',
						expeRcAmount: '0',
						expeTotalAmount: expeTotalAmount,
						expeNum: num,
						version: '0'
					});
					this.stopEditing();
					store.add(e);
					e.set('rowAction', 'N');
					sm.selectFirstRow();
					this.startEditing(0, 1);
				}
			}
		}
	};
	this.removeExp = function() {
		var r = sm.getSelections();
		if (r.length) {
			for (var i = 0; i < r.length; i++) {
				if (r[i].get('expeInvoiceStatus') > 0)
				 XMG.alert(SYS, M_REMOVE_EXP_INVOICED);
				else {
					r[i].set('rowAction', r[i].get('rowAction') == 'N' ? 'D': 'R');
					store.remove(r[i]);
				}
			}
		}
		 else XMG.alert(SYS, M_R_P);
	};
	this.save = function() {
		var a = store.getModifiedRecords();
		if (a.length) {
			for (var i = 0; i < a.length; i++) {
				if (a[i].get('rowAction') != 'R' && a[i].get('rowAction') != 'D') {
					if (a[i].get('custId') == '') {
						XMG.alert(SYS, M_SETTLE_OBJECT_REQIRED);
						return;
					}
					 else if (a[i].get('charId') == '') {
						XMG.alert(SYS, M_CHAR_REQIRED);
						return;
					}
					 else if (a[i].get('expeNum') == '' || a[i].get('expeNum') == '0') {
						XMG.alert(SYS, M_QUANTITY_REQIRED);
						return;
					}
					 else if (a[i].get('expeUnitPrice') == '' || a[i].get('expeUnitPrice') == '0') {
						XMG.alert(SYS, M_UNIT_PRICE_REQIRED);
						return;
					}
					 else if (a[i].get('currCode') == '') {
						XMG.alert(SYS, M_CURR_PRICE_REQIRED);
						return;
					}
					 else if (a[i].get('pateId') == '') {
						XMG.alert(SYS, M_PPCC_REQIRED);
						return;
					}
				}
			}
			var x = ATX(a, 'SExpense', SExpense);
			if (x != '') {
				var tb = this.getTopToolbar();
				tb.getComponent('TB_C').setDisabled(true);
				Ext.Ajax.request({
					scope: this,
					url: SERVICE_URL,
					method: 'POST',
					params: {
						A: 'EXPE_S'
					},
					success: function(res) {
						var a = XTRA(res.responseXML, 'SExpense', SExpense);
						FOSU(store, a, SExpense);
						XMG.alert(SYS, M_S);
						tb.getComponent('TB_C').setDisabled(false);
					},
					failure: function(res) {
						XMG.alert(SYS, M_F + res.responseText);
						tb.getComponent('TB_C').setDisabled(false);
					},
					xmlData: FOSX(x)
				});
			}
		}
		 else XMG.alert(SYS, M_NC);
	};
	var b1 = {
		itemId: 'TB_A',
		text: C_RECALCULATE,
		iconCls: 'dollar',
		scope: this,
		handler: this.add
	};
	var b2 = {
		itemId: 'TB_B',
		text: C_REMOVE,
		iconCls: 'remove',
		scope: this,
		handler: this.removeExp
	};
	var b3 = {
		itemId: 'TB_C',
		text: C_SAVE,
		iconCls: 'save',
		scope: this,
		handler: this.save
	};
	Fos.SectionGridCustFee.superclass.constructor.call(this, {
		title: C_CUST_FEE,
		border: true,
		autoScroll: true,
		clicksToEdit: 1,
		height: 160,
		stripeRows: true,
		store: store,
		sm: sm,
		cm: cm,
		listeners: {
			scope: this,
			beforeedit: function(e) {
				e.cancel = e.record.get('editable') == 0 || e.record.get('expeStatus') > 0 || e.record.get('expeInvoiceStatus') > 0 || e.record.get('expeWriteOffStatus') > 0;
			},
			afteredit: function(e) {
				var f = e.field;
				var r = e.record;
				if (f == 'expeNum') {
					r.set('expeNum', e.value);
					r.set('expeTotalAmount', round2(e.value * r.get('expeUnitPrice') - r.get('expeCommission')));
					r.set('expeInnerAmount', round2(r.get('expeInnerPrice') * e.value - r.get('expeCommission')));
					r.set('expeRcAmount', round2(r.get('expeTotalAmount') * r.get('expeExRate')));
				}
				if (f == 'unitName') {
					r.set('expeTotalAmount', round2(r.get('expeNum') * r.get('expeUnitPrice') - r.get('expeCommission')));
					r.set('expeInnerAmount', round2(r.get('expeInnerPrice') * r.get('expeNum') - r.get('expeCommission')));
					r.set('expeRcAmount', round2(r.get('expeTotalAmount') * r.get('expeExRate')));
				}
				 else if (f == 'expeUnitPrice') {
					r.set('expeTotalAmount', round2(e.value * r.get('expeNum') - r.get('expeCommission')));
					r.set('expeInnerPrice', e.value);
					r.set('expeInnerAmount', round2(e.value * r.get('expeNum') - r.get('expeCommission')));
					r.set('expeRcAmount', round2(r.get('expeTotalAmount') * r.get('expeExRate')));
				}
				 else if (f == 'currCode') {
					r.set('expeExRate', getExRate(e.value, 'CNY'));
					r.set('expeRcAmount', round2(r.get('expeTotalAmount') * r.get('expeExRate')));
				}
			}
		},
		tbar: [b1, '-', b2, '-', b3]
	});
};
Ext.extend(Fos.SectionGridCustFee, Ext.grid.EditorGridPanel);
Fos.SectionGridFee = function(p, section, parent, listStore, traceSm) {
	var store = GS('EXPE_PERM_Q', 'SExpense', SExpense, 'expeId', 'DESC', '', '', '', false);
	store.load({
		params: {
			consId: p.get('consId'),
			section: section,
			expeType: 'P'
		}
	});
	var t1 = {
		header: C_SETTLE_OBJECT,
		width: 200,
		dataIndex: "custName",
		align: 'left',
		editor: new Ext.form.ComboBox({
			displayField: 'custCode',
			valueField: 'custNameCn',
			triggerAction: 'all',
			mode: 'local',
			tpl: custTpl,
			itemSelector: 'div.list-item',
			listWidth: 400,
			allowBlank: false,
			blankText: '',
			invalidText: '',
			selectOnFocus: true,
			listClass: 'x-combo-list-small',
			store: getCS(),
			enableKeyEvents: true,
			listeners: {
				scope: this,
				select: function(c, r, i) {
					var b = this.getSelectionModel().getSelected();
					b.set('custId', r.get('custId'));
					b.set('custName', r.get('custNameCn'));
					b.set('custSname', r.get('custCode'));
				},
				keydown: {
					fn: function(f, e) {
						LC(f, e, 'custApFlag', 1);
					},
					buffer: 500
				}
			}
		})
	};
	t2 = {
		header: C_CHAR,
		width: 80,
		dataIndex: "charName",
		align: 'center',
		editor: new Ext.form.ComboBox({
			displayField: 'charCode',
			valueField: 'charName',
			triggerAction: 'all',
			tpl: charTpl,
			itemSelector: 'div.list-item',
			listWidth: 300,
			allowBlank: false,
			blankText: '',
			invalidText: '',
			mode: 'local',
			selectOnFocus: true,
			listClass: 'x-combo-list-small',
			store: getCHAR_S(),
			listeners: {
				scope: this,
				select: function(c, r, i) {
					var b = this.getSelectionModel().getSelected();
					b.set('charId', r.get('charId'));
					b.set('chclId', r.get('chclId'));
					b.set('charNameEn', r.get('charNameEn'));
					b.set('currCode', r.get('currCode'));
					b.set('unitId', r.get('unitId'));
					b.set('expeExRate', getExRate(r.get('currCode'), 'CNY'));
				}
			}
		})
	};
	var t3 = {
		header: C_UNIT,
		width: 80,
		dataIndex: "unitName",
		align: 'center',
		editor: new Ext.form.ComboBox({
			displayField: 'unitCode',
			valueField: 'unitCode',
			triggerAction: 'all',
			mode: 'local',
			selectOnFocus: true,
			listClass: 'x-combo-list-small',
			store: getUNIT_C(),
			listeners: {
				scope: this,
				select: function(c, r, i) {
					var b = this.getSelectionModel().getSelected();
					var rec = frm.UN.getById(r.get('unitCode'));
					b.set('expeNum', rec ? rec.get('N') : 1);
				}
			}
		})
	};
	var t4 = {
		header: C_QUANTITY,
		width: 60,
		dataIndex: "expeNum",
		renderer: expenseNumRender,
		editor: new Ext.form.NumberField({
			decimalPrecision: 4,
			selectOnFocus: true,
			allowBlank: false,
			blankText: '',
			invalidText: ''
		})
	};
	var t5 = {
		header: C_UNIT_PRICE,
		width: 80,
		dataIndex: "expeUnitPrice",
		renderer: expenseNumRender,
		editor: new Ext.form.NumberField({
			decimalPrecision: 4,
			selectOnFocus: true,
			allowBlank: false,
			blankText: '',
			invalidText: ''
		})
	};
	var t6 = {
		header: C_CURR,
		dataIndex: 'currCode',
		width: 50,
		align: 'center',
		editor: new Ext.form.ComboBox({
			displayField: 'currCode',
			valueField: 'currCode',
			triggerAction: 'all',
			allowBlank: false,
			blankText: '',
			invalidText: '',
			mode: 'local',
			selectOnFocus: true,
			listClass: 'x-combo-list-small',
			store: getCURR_S()
		})
	};
	var t7 = {
		header: C_EX_RATE,
		width: 60,
		dataIndex: "expeExRate",
		renderer: rateRender
	};
	var t8 = {
		header: C_AMOUNT,
		width: 80,
		dataIndex: "expeTotalAmount",
		renderer: numRender
	};
	var t16 = {
		header: C_REMARKS,
		width: 100,
		dataIndex: "expeRemarks",
		editor: new Ext.form.TextField({
			enableKeyEvents: true,
			listeners: {
				scope: this,
				keydown: function(c, e) {
					k = e.getKey();
					if (k == e.ENTER) this.add();
				}
			}
		})
	};
	var sm = new Ext.grid.CheckboxSelectionModel({
		singleSelect: false
	});
	var cols = [sm, t1, t2, t3, t4, t5, t6, t7, t8, t16];
	var cm = new Ext.grid.ColumnModel({
		columns: cols,
		defaults: {
			sortable: true,
			width: 100,
			align: 'right'
		}
	});
	cm.defaultSortable = true;
	cm.defaultWidth = 100;
	this.add = function() {
		var a = listStore.getRange();
		var b = store.getRange();
		if (a.length > 0 && b.length > 0 && a.length > b.length) {
			for (var i = 0; i < a.length; i++) {
				for (var j = 0; j < b.length; j++) {
					if (a[i].get('cotrId') == b[j].get('consCustId')) {
						var day = (a[i].get('consExpiryDate').getTime() - a[i].get('consEta').getTime()) / (24 * 60 * 60 * 1000);
						var freeDay = a[i].get('tenantFreeDay');
						var num = (day - freeDay);
						var expeTotalAmount = num * a[i].get('tenantExtendedRate');
						var unit = 'EACH';
						var rid = GGUID();
						if (num > 0) {
							var e = new SExpense({
								id: rid,
								expeId: rid,
								consId: a[i].get('consId'),
								consNo: a[i].get('consNo'),
								section: section,
								consBizClass: a[i].get('consBizClass'),
								consBizType: a[i].get('consBizType'),
								consShipType: a[i].get('consShipType'),
								expeStatus: '0',
								expeBillStatus: '0',
								expeInvoiceStatus: '0',
								expeWriteOffStatus: '0',
								consCustId: a[i].get('cotrId'),
								custId: a[i].get('contOwnerId'),
								custName: a[i].get('contOwner'),
								expeType: 'P',
								pateId: PPID,
								pateCode: 'P',
								unitName: unit,
								currCode: 'CNY',
								expeUnitPrice: a[i].get('tenantExtendedRate'),
								expeCommissionRate: '',
								expeCommission: '',
								expeInnerPrice: '',
								expeExRate: '1.0000',
								expeRemarks: '',
								expeDate: new Date(),
								expeAllocationFlag: '0',
								expeAllocatedFlag: '0',
								expeInvoiceAmount: '0',
								expeWriteOffAmount: '0',
								expeWriteOffRcAmount: '0',
								expeInnerAmount: '0',
								expeRcAmount: '0',
								expeTotalAmount: expeTotalAmount,
								expeNum: num,
								version: '0'
							});
							this.stopEditing();
							store.add(e);
							e.set('rowAction', 'N');
							sm.selectFirstRow();
							this.startEditing(0, 1);
						}
					}
				}
			}
		} else if (a.length > 0 && b.length == 0) {
			for (var i = 0; i < a.length; i++) {
				var day = (a[i].get('consExpiryDate').getTime() - a[i].get('consEta').getTime()) / (24 * 60 * 60 * 1000);
				var freeDay = a[i].get('custFreeDay');
				var num = (day - freeDay);
				var expeTotalAmount = num * a[i].get('custExtendedRate');
				var unit = 'EACH';
				var rid = GGUID();
				if (num > 0) {
					var e = new SExpense({
						id: rid,
						expeId: rid,
						consId: a[i].get('consId'),
						consNo: a[i].get('consNo'),
						section: section,
						consBizClass: a[i].get('consBizClass'),
						consBizType: a[i].get('consBizType'),
						consShipType: a[i].get('consShipType'),
						expeStatus: '0',
						expeBillStatus: '0',
						expeInvoiceStatus: '0',
						expeWriteOffStatus: '0',
						consCustId: a[i].get('cotrId'),
						custId: a[i].get('contOwnerId'),
						custName: a[i].get('contOwner'),
						expeType: 'P',
						pateId: PPID,
						pateCode: 'P',
						unitName: unit,
						currCode: 'CNY',
						expeUnitPrice: a[i].get('tenantExtendedRate'),
						expeCommissionRate: '',
						expeCommission: '',
						expeInnerPrice: '',
						expeExRate: '1.0000',
						expeRemarks: '',
						expeDate: new Date(),
						expeAllocationFlag: '0',
						expeAllocatedFlag: '0',
						expeInvoiceAmount: '0',
						expeWriteOffAmount: '0',
						expeWriteOffRcAmount: '0',
						expeInnerAmount: '0',
						expeRcAmount: '0',
						expeTotalAmount: expeTotalAmount,
						expeNum: num,
						version: '0'
					});
					this.stopEditing();
					store.add(e);
					e.set('rowAction', 'N');
					sm.selectFirstRow();
					this.startEditing(0, 1);
				}
			}
		}
	};
	this.removeExp = function() {
		var r = sm.getSelections();
		if (r.length) {
			for (var i = 0; i < r.length; i++) {
				if (r[i].get('expeInvoiceStatus') > 0)
				 XMG.alert(SYS, M_REMOVE_EXP_INVOICED);
				else {
					r[i].set('rowAction', r[i].get('rowAction') == 'N' ? 'D': 'R');
					store.remove(r[i]);
				}
			}
		}
		 else XMG.alert(SYS, M_R_P);
	};
	this.save = function() {
		var a = store.getModifiedRecords();
		if (a.length) {
			for (var i = 0; i < a.length; i++) {
				if (a[i].get('rowAction') != 'R' && a[i].get('rowAction') != 'D') {
					if (a[i].get('custId') == '') {
						XMG.alert(SYS, M_SETTLE_OBJECT_REQIRED);
						return;
					}
					 else if (a[i].get('charId') == '') {
						XMG.alert(SYS, M_CHAR_REQIRED);
						return;
					}
					 else if (a[i].get('expeNum') == '' || a[i].get('expeNum') == '0') {
						XMG.alert(SYS, M_QUANTITY_REQIRED);
						return;
					}
					 else if (a[i].get('expeUnitPrice') == '' || a[i].get('expeUnitPrice') == '0') {
						XMG.alert(SYS, M_UNIT_PRICE_REQIRED);
						return;
					}
					 else if (a[i].get('currCode') == '') {
						XMG.alert(SYS, M_CURR_PRICE_REQIRED);
						return;
					}
					 else if (a[i].get('pateId') == '') {
						XMG.alert(SYS, M_PPCC_REQIRED);
						return;
					}
				}
			}
			var x = ATX(a, 'SExpense', SExpense);
			if (x != '') {
				var tb = this.getTopToolbar();
				tb.getComponent('TB_C').setDisabled(true);
				Ext.Ajax.request({
					scope: this,
					url: SERVICE_URL,
					method: 'POST',
					params: {
						A: 'EXPE_S'
					},
					success: function(res) {
						var a = XTRA(res.responseXML, 'SExpense', SExpense);
						FOSU(store, a, SExpense);
						XMG.alert(SYS, M_S);
						tb.getComponent('TB_C').setDisabled(false);
					},
					failure: function(res) {
						XMG.alert(SYS, M_F + res.responseText);
						tb.getComponent('TB_C').setDisabled(false);
					},
					xmlData: FOSX(x)
				});
			}
		}
		 else XMG.alert(SYS, M_NC);
	};
	var b1 = {
		itemId: 'TB_A',
		text: C_RECALCULATE,
		iconCls: 'dollar',
		scope: this,
		handler: this.add
	};
	var b2 = {
		itemId: 'TB_B',
		text: C_REMOVE,
		iconCls: 'remove',
		scope: this,
		handler: this.removeExp
	};
	var b3 = {
		itemId: 'TB_C',
		text: C_SAVE,
		iconCls: 'save',
		scope: this,
		handler: this.save
	};
	Fos.SectionGridFee.superclass.constructor.call(this, {
		title: C_OWNER_FEE,
		border: true,
		autoScroll: true,
		clicksToEdit: 1,
		height: 160,
		stripeRows: true,
		store: store,
		sm: sm,
		cm: cm,
		listeners: {
			scope: this,
			beforeedit: function(e) {
				e.cancel = e.record.get('editable') == 0 || e.record.get('expeStatus') > 0 || e.record.get('expeInvoiceStatus') > 0 || e.record.get('expeWriteOffStatus') > 0;
			},
			afteredit: function(e) {
				var f = e.field;
				var r = e.record;
				if (f == 'expeNum') {
					r.set('expeNum', e.value);
					r.set('expeTotalAmount', round2(e.value * r.get('expeUnitPrice') - r.get('expeCommission')));
					r.set('expeInnerAmount', round2(r.get('expeInnerPrice') * e.value - r.get('expeCommission')));
					r.set('expeRcAmount', round2(r.get('expeTotalAmount') * r.get('expeExRate')));
				}
				if (f == 'unitName') {
					r.set('expeTotalAmount', round2(r.get('expeNum') * r.get('expeUnitPrice') - r.get('expeCommission')));
					r.set('expeInnerAmount', round2(r.get('expeInnerPrice') * r.get('expeNum') - r.get('expeCommission')));
					r.set('expeRcAmount', round2(r.get('expeTotalAmount') * r.get('expeExRate')));
				}
				 else if (f == 'expeUnitPrice') {
					r.set('expeTotalAmount', round2(e.value * r.get('expeNum') - r.get('expeCommission')));
					r.set('expeInnerPrice', e.value);
					r.set('expeInnerAmount', round2(e.value * r.get('expeNum') - r.get('expeCommission')));
					r.set('expeRcAmount', round2(r.get('expeTotalAmount') * r.get('expeExRate')));
				}
				 else if (f == 'currCode') {
					r.set('expeExRate', getExRate(e.value, 'CNY'));
					r.set('expeRcAmount', round2(r.get('expeTotalAmount') * r.get('expeExRate')));
				}
			}
		},
		tbar: [b1, '-', b2, '-', b3]
	});
};
Ext.extend(Fos.SectionGridFee, Ext.grid.EditorGridPanel);
Fos.RailwayGrid = function(bizClass, bizType) {
	var queryParams = [];
	queryParams[queryParams.length] = new QParam({
		key: 'consBizType',
		value: bizType,
		op: 1
	});
	queryParams[queryParams.length] = new QParam({
		key: 'consBizClass',
		value: bizClass,
		op: 1
	});
	var bp = {
		mt: 'xml',
		xml: FOSX(QTX(queryParams))
	};
	var store = new Ext.data.GroupingStore({
		url: SERVICE_URL + '?A=CONS_X',
		baseParams: bp,
		reader: new Ext.data.XmlReader({
			totalProperty: 'rowCount',
			record: 'FConsign',
			idProperty: 'consId'
		},
		FConsign),
		remoteSort: true,
		sortInfo: {
			field: 'consDate',
			direction: 'DESC'
		}
	});
	var sm = new Ext.grid.RowSelectionModel({
		singleSelect: true
	});
	var c1 = new Ext.grid.RowNumberer();
	var cm = new Ext.grid.ColumnModel({
		columns: [c1, {
			header: '',
			dataIndex: 'consStatusLock',
			menuDisabled: true,
			fixed: true,
			width: 25,
			renderer: function(v) {
				if (v == 1) return '<div class="locked"></div>';
				else return '';
			}
		},
		{
			header: C_STATUS,
			width: 60,
			dataIndex: "consStatus",
			renderer: getTRADE_S
		},
		{
			header: C_CONS_NO,
			width: 120,
			dataIndex: "consNo"
		},
		{
			header: C_BOOKER,
			width: 200,
			dataIndex: "custName"
		},
		{
			header: C_CONT_NO,
			dataIndex: "consContainerNo"
		},
		{
			header: C_CRAIL_NO,
			dataIndex: "vessName"
		},
		{
			header: C_DEPARTURE_DATE,
			width: 80,
			dataIndex: "consSailDate",
			renderer: formatDate
		},
		{
			header: C_DEPARTURE_STATION,
			dataIndex: "consPolCn"
		},
		{
			header: C_CTRANSFER_STATION,
			width: 80,
			dataIndex: "consPotCn"
		},
		{
			header: C_CDELIVERY_DATE,
			dataIndex: "consDeliveryDate",
			renderer: formatDate
		},
		{
			header: C_FTRANSFER_STATION,
			width: 80,
			dataIndex: "consPodEn"
		},
		{
			header: C_FDELIVERY_DATE,
			dataIndex: "consLoadDate",
			renderer: formatDate
		},
		{
			header: C_FOREIGN_RAIL_NO,
			width: 80,
			dataIndex: "voyaName"
		},
		{
			header: C_DESTINATION_STATION,
			width: 80,
			dataIndex: "consDeliveryPlace"
		},
		{
			header: C_ARRIVAL_DATE,
			dataIndex: "consEta",
			renderer: formatDate
		}],
		defaults: {
			sortable: true
		}
	});
	showRailwayConsign = function(p) {
		var t = T_MAIN.getComponent('G_CONS_' + p.get("id"));
		if (t) {
			T_MAIN.setActiveTab(t);
		}
		 else {
			t = new Fos.RailwayTab(p, store);
			T_MAIN.add(t);
			T_MAIN.setActiveTab(t);
		}
	};
	this.newConsign = function() {
		var c = Fos.newConsign(bizClass, BT_T);
		showRailwayConsign(c);
	};
	this.editConsign = function() {
		var b = sm.getSelected();
		if (b)
		 showRailwayConsign(b);
		else
		 XMG.alert(SYS, M_NO_DATA_SELECTED);
	};
	this.removeConsign = function() {
		var a = sm.getSelections();
		if (a.length) {
			XMG.confirm(SYS, M_R_C,
			function(btn) {
				if (btn == 'yes') {
					var b = false;
					for (var i = 0; i < a.length; i++) {
						if (a[i].get('consStatus') != '0') {
							b = true;
							break;
						}
					}
					if (b) XMG.alert(SYS, M_CONS_CONFIRMED);
					else {
						var xml = SMTX4R(sm, 'FConsign', 'consId');
						Ext.Ajax.request({
							url: SERVICE_URL,
							method: 'POST',
							params: {
								A: 'CONS_S'
							},
							success: function() {
								sm.each(function(p) {
									store.remove(p);
								});
								XMG.alert(SYS, M_S);
							},
							failure: function(r, o) {
								XMG.alert(SYS, M_F + r.responseText);
							},
							xmlData: FOSX(xml)
						});
					}
				}
			});
		}
		 else XMG.alert(SYS, M_R_P);
	};
	var setQueryParams = function(a) {
		queryParams = a;
	};
	this.search = function() {
		var w = new Fos.RailConsLookupWin(store, setQueryParams);
		w.show();
	};
	var kw = new Ext.form.TextField({
		listeners: {
			scope: this,
			specialkey: function(c, e) {
				if (e.getKey() == Ext.EventObject.ENTER) this.fastSearch();
			}
		}
	});
	this.fastSearch = function() {
		var consNo = kw.getValue();
		if (!consNo) {
			XMG.alert(SYS, M_INPUT_BIZ_NO,
			function(b) {
				kw.focus();
			});
			return;
		};
		var a = [];
		a[a.length] = new QParam({
			key: 'consBizType',
			value: BT_G,
			op: EQ
		});
		var c = consNo.indexOf(',');
		var b = consNo.indexOf('..');
		if (c >= 0) {
			a[a.length] = new QParam({
				key: 'consNo',
				value: consNo,
				op: IN
			});
		}
		 else if (b >= 0) {
			var ra = consNo.split('..');
			a[a.length] = new QParam({
				key: 'consNo',
				value: ra[0],
				op: GE
			});
			a[a.length] = new QParam({
				key: 'consNo',
				value: ra[1],
				op: LE
			});
		}
		 else
		 a[a.length] = new QParam({
			key: 'consNo',
			value: consNo,
			op: LI
		});
		queryParams = a;
		store.baseParams = {
			mt: 'xml',
			xml: FOSX(QTX(queryParams))
		};
		store.reload({
			params: {
				start: 0,
				limit: C_PS
			},
			callback: function(r) {
				if (r.length == 0) XMG.alert(SYS, M_NOT_FOUND);
			}
		});
	};
	this.exp1 = function() {
		if (queryParams.length > 0) {
			var a = queryParams;
			var qa = [];
			for (var i = 0; i < a.length; i++) {
				qa[i] = {
					key: a[i].get('key'),
					op: a[i].get('op'),
					value: a[i].get('value')
				};
			}
			EXPC('CUSTOMS_DOC_STAT', '&mt=JSON&xml=' + Ext.util.JSON.encode(FOSJ(QTJ(qa))));
		}
		 else {
			EXPC('CUSTOMS_DOC_STAT', '&mt=JSON&start=0&limit=500');
		}
	};
	var m = M1_RT + (bizClass == 'R' ? M2_RT: M2_K);
	var b1 = {
		text: C_ADD,
		disabled: NR(m + F_V),
		iconCls: 'add',
		scope: this,
		handler: this.newConsign
	};
	var b2 = {
		text: C_EDIT,
		disabled: NR(m + F_V),
		iconCls: 'option',
		handler: this.editConsign
	};
	var b3 = {
		text: C_REMOVE,
		disabled: NR(m + F_R),
		iconCls: 'remove',
		handler: this.removeConsign
	};
	var b4 = {
		text: C_EXPORT,
		disabled: NR(m + F_E),
		iconCls: 'print',
		scope: this,
		menu: {
			items: [{
				text: C_CUSTOMS_STAT,
				scope: this,
				handler: this.exp1
			}]
		}
	};
	var b5 = {
		text: C_FAST_SEARCH,
		iconCls: 'search',
		handler: this.fastSearch
	};
	var b6 = {
		text: C_RESET,
		iconCls: 'refresh',
		handler: this.reset
	};
	var b7 = {
		text: C_SEARCH,
		disabled: NR(m + F_V),
		iconCls: 'search',
		handler: this.search
	};
	var tbs = [b1, '-', b2, '-', b3, '-', b7, '-', b4, '-', b5, '-', kw, b6, '-'];
	Fos.RailwayGrid.superclass.constructor.call(this, {
		title: bizClass == 'R' ? C_RAILWAY_MANAGMENT: C_EMPTY_BOX_MANAGEME,
		iconCls: 'grid',
		store: store,
		header: false,
		loadMask: true,
		id: 'R_CONS_' + bizClass,
		sm: sm,
		cm: cm,
		stripeRows: true,
		closable: true,
		listeners: {
			rowdblclick: function(grid, rowIndex, event) {
				var c = grid.getSelectionModel().getSelected();
				if (c) {
					showRailwayConsign(c);
				}
			}
		},
		tbar: tbs,
		bbar: PTB(store, C_PS)
	});
	store.load({
		params: {
			start: 0,
			limit: C_PS
		}
	});
};
Ext.extend(Fos.RailwayGrid, Ext.grid.GridPanel);
Fos.RailwayTab = function(p, store) {
	var items = [];
	items[0] = new Fos.RailwayConsign(p, store);
	if (p.get('rowAction') != 'N') {
		items[items.length] = VERSION == 0 ? (new Fos.ExpenseTab(p, 'T')) : (new Fos.ExpenseTab2(p, 'T'));
		items[items.length] = new Fos.AttachTab(p);
		if (p.get('consBizClass') == 'K') {
			items[items.length] = new Fos.ContainerTraceTab(p);
		}
	}
	var title = getBT(p.get('consBizType'));
	title += getBC(p.get('consBizClass'));
	title += C_CONSIGN + '-' + p.get("consNo");
	Fos.RailwayTab.superclass.constructor.call(this, {
		id: "C_" + p.get("id"),
		items: items,
		title: title,
		iconCls: 'class',
		deferredRender: false,
		closable: true,
		activeTab: 0,
		bbar: getMB(p),
		listeners: {
			scope: this,
			tabchange: function(m, a) {
				a.doLayout();
			}
		}
	});
};
Ext.extend(Fos.RailwayTab, Ext.TabPanel);
Fos.RailwayConsign = function(p, listStore) {
	this.carg_s = GS('CARG_Q', 'FCargo', FCargo, 'cargId', 'ASC');
	this.cargoGrid = new Fos.CargoGrid(p, this.carg_s, this);
	if (p.get('rowAction') != 'N') {
		this.carg_s.load({
			params: {
				consId: p.get('consId')
			}
		});
	}
	this.save = function() {
		if (this.find('name', 'custName')[0].getValue() == '') {
			XMG.alert(SYS, M_CUST_REQIRED,
			function() {
				this.find('name', 'custName')[0].focus();
			},
			this);
			return;
		};
		if (!p.get('custId')) {
			XMG.alert(SYS, M_CUST_MUST_PREDEFINED);
			return;
		};
		if (this.find('name', 'deptId')[0].getValue() == '') {
			XMG.alert(SYS, M_DEPT_REQIRED,
			function() {
				this.find('name', 'deptId')[0].focus();
			},
			this);
			return;
		};
		if (this.find('name', 'consSalesRepName')[0].getValue() == '') {
			XMG.alert(SYS, M_SALES_REQIRED,
			function() {
				this.find('name', 'consSalesRepName')[0].focus();
			},
			this);
			return;
		};
		if (this.find('name', 'consOperatorId')[0].getValue() == '') {
			XMG.alert(SYS, M_OPERATOR_REQIRED,
			function() {
				this.find('name', 'consOperatorId')[0].focus();
			},
			this);
			return;
		};
		if (VERSION == 0 && txtSailDate.getValue() == '') {
			XMG.alert(SYS, p.get('consBizClass') == BC_I ? M_ETA_REQIRED: M_ETD_REQIRED,
			function() {
				txtSailDate.focus();
			},
			this);
			return;
		};
		var f = FConsign.prototype.fields;
		for (var i = 0; i < f.keys.length; i++) {
			var fn = '' + f.keys[i];
			var fc = this.find('name', fn);
			if (fc != undefined && fc.length > 0) {
				p.set(fn, fc[0].getValue());
			}
		}
		var xml = RTX(p, 'FConsign', FConsign);
		var cargos = this.carg_s.getModifiedRecords();
		if (cargos.length > 0) {
			var x = ATX(cargos, 'FCargo', FCargo);
			xml = xml + x;
		};
		Ext.Ajax.request({
			scope: this,
			url: SERVICE_URL,
			method: 'POST',
			params: {
				A: 'CONS_S'
			},
			success: function(res) {
				var c = XTR(res.responseXML, 'FConsign', FConsign);
				var ra = p.get('rowAction');
				var f = FConsign.prototype.fields;
				p.beginEdit();
				for (var i = 0; i < f.keys.length; i++) {
					var fn = '' + f.keys[i];
					p.set(fn, c.get(fn));
				};
				if (ra == 'N') {
					var title = (p.get('consBizClass') == 'R' ? C_RAILWAY_MANAGMENT: C_EMPTY_BOX_MANAGEME) + C_CUSTOMS + '委托【' + p.get("consNo") + '】';
					this.setTitle(title);
					this.find('name', 'consNo')[0].setValue(p.get('consNo'));
					p.set('rowAction', 'M');
					listStore.add(p);
				}
				p.endEdit();
				if (p.get('consBizClass') == 'R') {
					var a = XTRA(res.responseXML, 'FCargo', FCargo);
					FOSU(this.carg_s, a, FCargo);
				}
				this.updateToolBar();
				XMG.alert(SYS, M_S);
			},
			failure: function(res) {
				XMG.alert(SYS, M_F + res.responseText);
			},
			xmlData: FOSX(xml)
		});
	};
	this.updateStatus = function(s) {
		Ext.Ajax.request({
			scope: this,
			url: SERVICE_URL,
			method: 'POST',
			params: {
				A: 'CONS_U',
				consId: p.get('consId'),
				consStatus: s
			},
			success: function(r) {
				p.set('consStatus', s);
				p.set('version', p.get('version') + 1);
				this.updateToolBar();
				XMG.alert(SYS, M_S);
			},
			failure: function(r) {
				XMG.alert(SYS, M_F + r.responseText);
			}
		});
	};
	var m = M1_RT + (p.get('consBizClass') == 'R' ? M2_RT: M2_K);
	var locked = p.get('consStatusLock') == 1;
	var disable = p.get('editable') == 0;
	this.updateToolBar = function() {
		var tb = this.getTopToolbar();
		if (tb.getComponent('TB_S')) tb.getComponent('TB_S').setDisabled(NR(m + F_M) || locked || disable);
	};
	var b1 = {
		text: C_SAVE + '(S)',
		itemId: 'TB_S',
		iconCls: 'save',
		disabled: NR(m + F_M) || locked || disable,
		scope: this,
		handler: this.save
	};
	var tbs = [b1];
	var railNo = {
		fieldLabel: C_CONS_NO,
		style: '{font-weight:bold;color:green;}',
		disabled: true,
		tabIndex: 1,
		name: 'consNo',
		value: p.get('consNo'),
		xtype: 'textfield',
		anchor: '99%'
	};
	var custName = {
		fieldLabel: C_BOOKER,
		itemCls: 'required',
		tabIndex: 5,
		name: 'custName',
		value: p.get('custName'),
		store: getCS(),
		enableKeyEvents: true,
		xtype: 'combo',
		displayField: 'custCode',
		valueField: 'custCode',
		typeAhead: true,
		mode: 'local',
		tpl: custTpl,
		itemSelector: 'div.list-item',
		listWidth: C_LW,
		triggerAction: 'all',
		selectOnFocus: true,
		anchor: '99%',
		listeners: {
			scope: this,
			blur: function(f) {
				if (f.getRawValue() == '') {
					f.clearValue();
					p.set('custId', '');
					p.set('custName', '');
				}
			},
			select: function(c, r, i) {
				this.find('name', 'custContact')[0].setValue(r.get('custContact'));
				this.find('name', 'custTel')[0].setValue(r.get('custTel'));
				this.find('name', 'custFax')[0].setValue(r.get('custFax'));
				p.set('custId', r.get('custId'));
				p.set('custSname', r.get('custCode'));
				p.set('custName', r.get('custNameCn'));
				c.setValue(r.get('custNameCn'));
			},
			keydown: {
				fn: function(f, e) {
					LC(f, e, 'custBookerFlag');
				},
				buffer: BF
			}
		}
	};
	var consDate = {
		fieldLabel: C_CONS_DATE,
		tabIndex: 13,
		name: 'consDate',
		value: p.get('consDate'),
		xtype: 'datefield',
		format: DATEF,
		anchor: '99%'
	};
	var operator = {
		fieldLabel: C_OPERATOR,
		itemCls: 'required',
		tabIndex: 2,
		name: 'consOperatorId',
		value: p.get('consOperatorId'),
		store: getOP_S(),
		xtype: 'combo',
		displayField: VERSION == 1 ? 'userName': 'userLoginName',
		valueField: 'userId',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus: true,
		anchor: '99%',
		listeners: {
			scope: this,
			blur: function(f) {
				if (f.getRawValue() == '') {
					f.clearValue();
					p.set('consOperatorId', '');
					p.set('consOperatorName', '');
				}
			},
			select: function(c, r, i) {
				p.set('consOperatorName', r.get('userName'));
			}
		}
	};
	var custContact = {
		fieldLabel: C_CONTACT,
		tabIndex: 6,
		name: 'custContact',
		value: p.get('custContact'),
		xtype: 'textfield',
		anchor: '99%'
	};
	var consSalesRepName = {
		fieldLabel: C_SALES,
		itemCls: 'required',
		tabIndex: 3,
		name: 'consSalesRepName',
		value: p.get('consSalesRepName'),
		store: getSALE_S(),
		xtype: 'combo',
		displayField: VERSION == 1 ? 'userName': 'userLoginName',
		valueField: 'userName',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus: true,
		anchor: '99%',
		listeners: {
			scope: this,
			blur: function(f) {
				if (f.getRawValue() == '') {
					f.clearValue();
					p.set('consSalesRepId', '');
					p.set('consSalesRepName', '');
				}
			},
			select: function(c, r, i) {
				p.set('consSalesRepId', r.get('userId'));
			}
		}
	};
	var custTel = {
		fieldLabel: C_PHONE,
		tabIndex: 7,
		name: 'custTel',
		value: p.get('custTel'),
		xtype: 'textfield',
		anchor: '99%'
	};
	var grouName = {
		fieldLabel: C_DEPT,
		itemCls: 'required',
		tabIndex: 4,
		name: 'deptId',
		value: p.get('deptId'),
		store: getGROU_S(),
		xtype: 'combo',
		displayField: 'grouName',
		valueField: 'grouId',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus: true,
		anchor: '99%'
	};
	var custFax = {
		fieldLabel: C_FAX,
		xtype: 'textfield',
		tabIndex: 8,
		name: 'custFax',
		value: p.get('custFax'),
		anchor: '99%'
	};
	var custSales = {
		fieldLabel: C_CUST_SALES,
		name: 'custSalesName',
		value: p.get('custSalesName'),
		tabIndex: 10,
		store: getCUCOS(),
		xtype: 'combo',
		displayField: 'cucoName',
		valueField: 'cucoName',
		typeAhead: true,
		mode: 'remote',
		triggerAction: 'all',
		selectOnFocus: true,
		anchor: '99%'
	};
	var refNo = {
		fieldLabel: C_REF_NO,
		tabIndex: 11,
		name: 'consRefNo',
		value: p.get('consRefNo'),
		xtype: 'textfield',
		anchor: '99%'
	};
	var contractNo = {
		fieldLabel: C_CONTRACT_NO,
		tabIndex: 12,
		name: 'consContractNo',
		value: p.get('consContractNo'),
		xtype: 'textfield',
		anchor: '99%'
	};
	var tranTerm = {
		fieldLabel: C_TTER,
		itemCls: 'needed',
		tabIndex: 17,
		name: 'tranId',
		value: p.get('tranId'),
		store: p.get('consBizType') == BT_B ? getTTB_S() : getTTC_S(),
		xtype: 'combo',
		displayField: 'tranCode',
		valueField: 'tranId',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus: true,
		anchor: '99%',
		listeners: {
			scope: this,
			blur: function(f) {
				if (f.getRawValue() == '') {
					f.clearValue();
					p.set('tranId', '');
				}
			},
			select: function(c, r, i) {
				p.set('tranCode', r.get('tranCode'));
			}
		}
	};
	var tranPate = {
		fieldLabel: C_PATE,
		itemCls: 'needed',
		tabIndex: 15,
		name: 'pateId',
		value: p.get('pateId'),
		store: getPATE_S(),
		xtype: 'combo',
		displayField: 'pateName',
		valueField: 'pateId',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus: true,
		anchor: '99%',
		listeners: {
			scope: this,
			blur: function(f) {
				if (f.getRawValue() == '') {
					f.clearValue();
					p.set('pateId', '');
				}
			},
			select: function(c, r, i) {
				p.set('pateName', r.get('pateName'));
			}
		}
	};
	var t111 = [railNo, custName, consDate, tranTerm];
	var t112 = [grouName, custContact, custSales, tranPate];
	var t113 = [consSalesRepName, custTel, refNo];
	var t114 = [operator, custFax, contractNo];
	var departureDate = {
		fieldLabel: C_DEPARTURE_DATE,
		tabIndex: 14,
		name: 'consSailDate',
		value: p.get('consSailDate'),
		xtype: 'datefield',
		format: DATEF,
		anchor: '99%'
	};
	var departureStation = {
		fieldLabel: C_DEPARTURE_STATION,
		tabIndex: 39,
		name: 'consPolCn',
		value: p.get('consPolCn'),
		store: getTS(),
		xtype: 'combo',
		displayField: 'trainNameCn',
		valueField: 'trainNameCn',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus: true,
		anchor: '99%',
		tpl: stationTpl,
		itemSelector: 'div.list-item',
		listWidth: C_LW,
		enableKeyEvents: true,
		listeners: {
			scope: this,
			blur: function(f) {
				if (f.getRawValue() == '') {
					f.clearValue();
					p.set('consPol', '');
				}
			},
			select: function(c, r, i) {
				p.set('consPol', r.get('trainId'));
				p.set('consPolEn', r.get('trainNameEn'));
			},
			keydown: {
				fn: LT,
				buffer: BF
			}
		}
	};
	var cTransferStation = {
		fieldLabel: C_CTRANSFER_STATION,
		tabIndex: 39,
		name: 'consPotCn',
		value: p.get('consPotCn'),
		store: getTS(),
		xtype: 'combo',
		displayField: 'trainNameCn',
		valueField: 'trainNameCn',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus: true,
		anchor: '99%',
		tpl: stationTpl,
		itemSelector: 'div.list-item',
		listWidth: C_LW,
		enableKeyEvents: true,
		listeners: {
			scope: this,
			blur: function(f) {
				if (f.getRawValue() == '') {
					f.clearValue();
					p.set('consPol', '');
				}
			},
			select: function(c, r, i) {
				p.set('consPot', r.get('trainId'));
				p.set('consPotEn', r.get('trainNameCn'));
			},
			keydown: {
				fn: LT,
				buffer: BF
			}
		}
	};
	var cRailNo = {
		fieldLabel: C_CRAIL_NO,
		tabIndex: 14,
		name: 'vessName',
		value: p.get('vessName'),
		xtype: 'textfield',
		format: DATEF,
		anchor: '99%'
	};
	var cDeliveryDate = {
		fieldLabel: C_CDELIVERY_DATE,
		tabIndex: 14,
		name: 'consDeliveryDate',
		value: p.get('consDeliveryDate'),
		xtype: 'datefield',
		format: DATEF,
		anchor: '99%'
	};
	var fTransferStation = {
		fieldLabel: C_FTRANSFER_STATION,
		tabIndex: 39,
		name: 'consPodEn',
		value: p.get('consPodEn'),
		store: getTS(),
		xtype: 'combo',
		displayField: 'trainNameEn',
		valueField: 'trainNameEn',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus: true,
		anchor: '99%',
		tpl: stationTpl,
		itemSelector: 'div.list-item',
		listWidth: C_LW,
		enableKeyEvents: true,
		listeners: {
			scope: this,
			blur: function(f) {
				if (f.getRawValue() == '') {
					f.clearValue();
					p.set('consPol', '');
				}
			},
			select: function(c, r, i) {
				p.set('consPol', r.get('trainId'));
				p.set('consPodCn', r.get('trainNameCn'));
			},
			keydown: {
				fn: LT,
				buffer: BF
			}
		}
	};
	var fRailNo = {
		fieldLabel: C_FRAIL_NO,
		tabIndex: 14,
		name: 'voyaName',
		value: p.get('voyaName'),
		xtype: 'textfield',
		format: DATEF,
		anchor: '99%'
	};
	var fDeliveryDate = {
		fieldLabel: C_FDELIVERY_DATE,
		tabIndex: 14,
		name: 'consLoadDate',
		value: p.get('consLoadDate'),
		xtype: 'datefield',
		format: DATEF,
		anchor: '99%'
	};
	var destinationStation = {
		fieldLabel: C_DESTINATION_STATION,
		tabIndex: 39,
		name: 'consDeliveryPlace',
		value: p.get('consDeliveryPlace'),
		store: getTS(),
		xtype: 'combo',
		displayField: 'trainNameCn',
		valueField: 'trainNameCn',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus: true,
		anchor: '99%',
		tpl: stationTpl,
		itemSelector: 'div.list-item',
		listWidth: C_LW,
		enableKeyEvents: true,
		listeners: {
			scope: this,
			blur: function(f) {
				if (f.getRawValue() == '') {
					f.clearValue();
					p.set('consPol', '');
				}
			},
			select: function(c, r, i) {
				p.set('consDeliveryPlaceCode', r.get('trainId'));
			},
			keydown: {
				fn: LT,
				buffer: BF
			}
		}
	};
	var arrivalDate = {
		fieldLabel: C_ARRIVAL_DATE,
		tabIndex: 14,
		name: 'consEta',
		value: p.get('consEta'),
		xtype: 'datefield',
		format: DATEF,
		anchor: '99%'
	};
	var containerNo = {
		fieldLabel: C_CONT_NO,
		name: 'consContainerNo',
		value: p.get('consContainerNo'),
		tabIndex: 40,
		xtype: 'textfield',
		anchor: '99%'
	};
	var containerType = {
		fieldLabel: C_CONTAINER_TYPE,
		name: 'consContainerCompany',
		value: p.get('consContainerCompany'),
		xtype: 'combo',
		store: CONT_TYPE_S,
		displayField: 'NAME',
		valueField: 'CODE',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus: true,
		anchor: '99%'
	};
	var contSealNo = {
		fieldLabel: C_SEAL_NO,
		name: 'consWarehouseNo',
		value: p.get('consWarehouseNo'),
		tabIndex: 40,
		xtype: 'textfield',
		anchor: '99%'
	};
	var t121 = [departureDate, cDeliveryDate, fDeliveryDate, arrivalDate];
	var t122 = [containerNo, cRailNo, fRailNo];
	var t123 = [containerType, departureStation, fTransferStation];
	var t124 = [contSealNo, cTransferStation, destinationStation];
	function saveShipper(shipperT) {
		var cushName = '';
		if (shipperT == 1) cushName = Ext.getCmp(p.get('consId') + 'CONS_SHIPPER').getValue();
		else if (shipperT == 2) cushName = Ext.getCmp(p.get('consId') + 'CONS_CONSIGNEE').getValue();
		else if (shipperT == 3) cushName = Ext.getCmp(p.get('consId') + 'CONS_NOTIFY_PARTY').getValue();
		else if (shipperT == 4) cushName = Ext.getCmp(p.get('consId') + 'CONS_NOTIFY_PARTY2').getValue();
		if (!p.get('custId')) {
			XMG.alert(SYS, M_SELECT_CUST_FIRST);
			return;
		}
		if (cushName != '') {
			var c = new CCustomerShipper({
				rowAction: 'N',
				custId: p.get('custId'),
				cushType: shipperT,
				cushName: cushName
			});
			var xml = RTX(c, 'CCustomerShipper', CCustomerShipper);
			Ext.Ajax.request({
				scope: this,
				url: SERVICE_URL,
				method: 'POST',
				params: {
					A: 'CUSH_S'
				},
				success: function(res) {
					XMG.alert(SYS, M_S);
				},
				failure: function(res) {
					XMG.alert(SYS, M_F + res.responseText);
				},
				xmlData: FOSX(xml)
			});
		}
	};
	function selShipper(shipperT) {
		if (p.get('custId')) {
			var win = new Fos.ShipperWin(p.get('custId'), shipperT, updateShipper);
			win.show();
		}
		 else
		 XMG.alert(SYS, M_SELECT_CUST_FIRST);
	}
	function updateShipper(shipperT, cushName) {
		if (shipperT == 1) cushName = Ext.getCmp(p.get('consId') + 'CONS_SHIPPER').setValue(cushName);
		else if (shipperT == 2) cushName = Ext.getCmp(p.get('consId') + 'CONS_CONSIGNEE').setValue(cushName);
		else if (shipperT == 3) cushName = Ext.getCmp(p.get('consId') + 'CONS_NOTIFY_PARTY').setValue(cushName);
		else if (shipperT == 4) cushName = Ext.getCmp(p.get('consId') + 'CONS_NOTIFY_PARTY2').setValue(cushName);
	};
	var bSaveShipper = new Ext.Button({
		text: '保存',
		handler: function() {
			saveShipper(1);
		}
	});
	var bSearchShipper = new Ext.Button({
		text: '选择',
		handler: function() {
			selShipper(1);
		}
	});
	var bSaveConsignee = new Ext.Button({
		text: '保存',
		handler: function() {
			saveShipper(2);
		}
	});
	var bSearchConsignee = new Ext.Button({
		text: '选择',
		handler: function() {
			selShipper(2);
		}
	});
	var t11 = {
		layout: 'column',
		title: C_CONS_INFO,
		collapsible: true,
		border: false,
		padding: 5,
		items: [{
			columnWidth: .25,
			layout: 'form',
			border: false,
			labelWidth: 70,
			items: t111
		},
		{
			columnWidth: .25,
			layout: 'form',
			border: false,
			labelWidth: 70,
			items: t112
		},
		{
			columnWidth: .25,
			layout: 'form',
			border: false,
			labelWidth: 70,
			items: t113
		},
		{
			columnWidth: .25,
			layout: 'form',
			border: false,
			labelWidth: 70,
			items: t114
		}]
	};
	var t12 = {
		layout: 'column',
		title: C_BL_INFO,
		collapsible: true,
		border: false,
		padding: 5,
		items: [{
			columnWidth: .25,
			layout: 'form',
			border: false,
			labelWidth: 80,
			items: t121
		},
		{
			columnWidth: .25,
			layout: 'form',
			border: false,
			labelWidth: 80,
			items: t122
		},
		{
			columnWidth: .25,
			layout: 'form',
			border: false,
			labelWidth: 80,
			items: t123
		},
		{
			columnWidth: .25,
			layout: 'form',
			border: false,
			labelWidth: 80,
			items: t124
		}]
	};
	var t13 = {
		layout: 'column',
		title: C_SHIPPER_INFO,
		collapsible: true,
		padding: 5,
		border: false,
		items: [{
			columnWidth: .45,
			layout: 'form',
			border: false,
			labelWidth: 60,
			items: [{
				fieldLabel: C_SHIPPER,
				id: p.get('consId') + 'CONS_SHIPPER',
				tabIndex: 65,
				name: 'consShipper',
				value: p.get('consShipper'),
				xtype: 'textarea',
				height: 100,
				anchor: '99%'
			}]
		},
		{
			columnWidth: .05,
			border: false,
			items: [bSaveShipper, bSearchShipper]
		},
		{
			columnWidth: .45,
			layout: 'form',
			border: false,
			labelWidth: 60,
			items: [{
				fieldLabel: C_CONSIGNEE,
				id: p.get('consId') + 'CONS_CONSIGNEE',
				tabIndex: 66,
				name: 'consConsignee',
				value: p.get('consConsignee'),
				xtype: 'textarea',
				height: 100,
				anchor: '99%'
			}]
		},
		{
			columnWidth: .05,
			border: false,
			items: [bSaveConsignee, bSearchConsignee]
		}]
	};
	var t1 = {
		id: 'C_R_J_' + p.get('id'),
		title: C_BASE_INFO + '(J)',
		border: false,
		height: 400,
		items: [t11, t12, t13]
	};
	var txtCargoMarks = {
		columnWidth: .5,
		layout: 'form',
		labelWidth: 90,
		border: false,
		items: [{
			fieldLabel: C_MARKS,
			tabIndex: 58,
			name: 'consCargoMarks',
			value: p.get('consCargoMarks'),
			xtype: 'textarea',
			height: 100,
			anchor: '99%'
		}]
	};
	var txtCargoDesc = {
		columnWidth: .5,
		layout: 'form',
		labelWidth: 90,
		border: false,
		items: [{
			fieldLabel: C_CARGO_DESC,
			tabIndex: 61,
			name: 'consCargoDesc',
			value: p.get('consCargoDesc'),
			xtype: 'textarea',
			height: 100,
			anchor: '99%'
		}]
	};
	var txtCargoNameCn = {
		columnWidth: .25,
		layout: 'form',
		labelWidth: 90,
		border: false,
		items: [{
			fieldLabel: C_CARGO_NAME_CN,
			tabIndex: 61,
			name: 'consCargoNameCn',
			value: p.get('consCargoNameCn'),
			xtype: 'textfield',
			anchor: '99%'
		}]
	};
	var txtCargoNameEn = {
		columnWidth: .5,
		layout: 'form',
		labelWidth: 90,
		border: false,
		items: [{
			fieldLabel: C_CARGO_NAME_EN,
			tabIndex: 61,
			name: 'consCargoNameEn',
			value: p.get('consCargoNameEn'),
			xtype: 'textfield',
			anchor: '99%'
		}]
	};
	var txtTotalPackages = {
		columnWidth: .25,
		layout: 'form',
		labelWidth: 90,
		border: false,
		items: [{
			fieldLabel: C_PACKAGES,
			tabIndex: 61,
			name: 'consTotalPackages',
			value: p.get('consTotalPackages'),
			xtype: 'numberfield',
			anchor: '99%',
			listeners: {
				scope: this,
				change: function(f, nv, ov) {
					p.set('consTotalPackages', nv);
					var pw = 'SAY TOTAL ' + N2EW(nv) + ' ' + p.get('packName') + ' ONLY';
					p.set('consTotalPackagesInWord', pw);
					this.find('name', 'consTotalPackagesInWord')[0].setValue(pw);
				}
			}
		}]
	};
	var txtPack = {
		columnWidth: .25,
		layout: 'form',
		labelWidth: 90,
		border: false,
		items: [{
			fieldLabel: C_PACK,
			tabIndex: 61,
			name: 'packName',
			value: p.get('packName'),
			xtype: 'combo',
			store: getPACK_S(),
			displayField: 'packName',
			valueField: 'packName',
			typeAhead: true,
			mode: 'local',
			triggerAction: 'all',
			selectOnFocus: true,
			anchor: '99%',
			listeners: {
				scope: this,
				select: function(c, r, i) {
					p.set('packId', r.get('packId'));
					p.set('packName', r.get('packName'));
					var pw = 'SAY TOTAL ' + N2EW(p.get('consTotalPackages')) + ' ' + r.get('packName') + ' ONLY';
					this.find('name', 'consTotalPackagesInWord')[0].setValue(pw);
					p.set('consTotalPackagesInWord', pw);
				}
			}
		}]
	};
	var txtTotalSay = {
		columnWidth: .5,
		layout: 'form',
		labelWidth: 90,
		border: false,
		items: [{
			fieldLabel: C_PACKAGES_CAP,
			tabIndex: 61,
			name: 'consTotalPackagesInWord',
			value: p.get('consTotalPackagesInWord'),
			xtype: 'textfield',
			anchor: '99%'
		}]
	};
	var numGrossWeight = new Ext.form.NumberField({
		fieldLabel: C_GW + (p.get('consBizType') == BT_B ? C_MT: C_KGS),
		tabIndex: 61,
		name: 'consTotalGrossWeight',
		value: p.get('consTotalGrossWeight'),
		xtype: 'numberfield',
		decimalPrecision: 4,
		anchor: '99%',
		listeners: {
			scope: this,
			change: function(f, nv, ov) {
				if (p.get('consBizType') == BT_A)
				 recalculateChargeWeight('Carrier');
			}
		}
	});
	var txtTotalGrossWeight = {
		columnWidth: .25,
		layout: 'form',
		labelWidth: 90,
		border: false,
		items: [numGrossWeight]
	};
	var numMeasurement = new Ext.form.NumberField({
		fieldLabel: C_CBM,
		tabIndex: 61,
		name: 'consTotalMeasurement',
		value: p.get('consTotalMeasurement'),
		xtype: 'numberfield',
		decimalPrecision: 4,
		anchor: '99%',
		listeners: {
			scope: this,
			change: function(f, nv, ov) {
				if (p.get('consBizType') == BT_A)
				 recalculateChargeWeight('Carrier');
			}
		}
	});
	var txtTotalMeasurement = {
		columnWidth: .25,
		layout: 'form',
		labelWidth: 90,
		border: false,
		items: [numMeasurement]
	};
	var numNetWeight = new Ext.form.NumberField({
		fieldLabel: C_NW + (p.get('consBizType') == BT_B ? C_MT: C_KGS),
		tabIndex: 61,
		name: 'consTotalNetWeight',
		value: p.get('consTotalNetWeight'),
		xtype: 'numberfield',
		decimalPrecision: 4,
		anchor: '99%'
	});
	var txtTotalNetWeight = {
		columnWidth: .25,
		layout: 'form',
		labelWidth: 90,
		border: false,
		items: [numNetWeight]
	};
	var t31 = {
		layout: 'column',
		padding: 5,
		layoutConfig: {
			columns: 5
		},
		border: false,
		labelWidth: 60,
		title: '货物小计',
		collapsible: true,
		items: [txtCargoMarks, txtCargoDesc, txtCargoNameEn, txtTotalGrossWeight, txtTotalMeasurement, txtTotalPackages, txtPack, txtCargoNameCn, txtTotalNetWeight, txtTotalSay]
	};
	var t2 = {
		id: 'C_B_H_' + p.get('id'),
		title: C_CARGO_INFO + '(H)',
		height: 720,
		items: [{
			layout: 'fit',
			border: false,
			collapsible: true,
			items: this.cargoGrid
		},
		t31]
	};
	var tabs = [t1, t2];
	Fos.RailwayConsign.superclass.constructor.call(this, {
		id: "T_RAIL_" + p.get('id'),
		title: C_CONSIGN + "(F1)",
		header: false,
		autoScroll: true,
		border: false,
		labelAlign: 'right',
		bodyStyle: 'padding:2px 10px 10px 2px',
		tbar: tbs,
		items: p.get('consBizClass') == 'K' ? [t11, t12, t13] : [{
			id: 'T_RAIL_T_' + p.get('id'),
			xtype: 'tabpanel',
			plain: true,
			activeTab: 0,
			listeners: {
				scope: this,
				tabchange: function(m, a) {
					a.doLayout();
				}
			},
			items: tabs
		}]
	});
};
Ext.extend(Fos.RailwayConsign, Ext.FormPanel);
var showG_STATION = function() {
	var store = GS('TRAIN_X', 'GTrainStation', GTrainStation, 'counCode', 'ASC', 'counCode', '', '', 'id', true);
	store.load({
		params: {
			start: 0,
			limit: 100
		}
	});
	var ac = ACTIVE();
	var sm = getCSM();
	var c1 = {
		header: C_COUN,
		dataIndex: 'counCode',
		renderer: getCOUN,
		editor: new Ext.form.ComboBox({
			displayField: 'counCode',
			valueField: 'counCode',
			triggerAction: 'all',
			tpl: counTpl,
			itemSelector: 'div.list-item',
			listWidth: 300,
			mode: 'remote',
			selectOnFocus: true,
			listClass: 'x-combo-list-small',
			store: getCOUN_S()
		})
	};
	var c2 = {
		header: C_CODE,
		dataIndex: 'trainCode',
		editor: new Ext.form.TextField({
			allowBlank: false,
			blankText: '',
			invalidText: ''
		})
	};
	var c3 = {
		header: C_ENAME,
		dataIndex: 'trainNameEn',
		editor: new Ext.form.TextField({
			allowBlank: false,
			blankText: '',
			invalidText: ''
		})
	};
	var c4 = {
		header: C_CNAME,
		dataIndex: 'trainNameCn',
		editor: new Ext.form.TextField({
			allowBlank: true,
			blankText: '',
			invalidText: ''
		})
	};
	var cm = new Ext.grid.ColumnModel({
		columns: [sm, c1, c2, c3, c4, ac],
		defaults: {
			sortable: true,
			width: 100
		}
	});
	var ts = new Ext.data.SimpleStore({
		id: 0,
		fields: ['CODE', 'NAME'],
		data: [['trainCode', C_CODE], ['trainNameEn', C_ENAME], ['trainNameCn', C_CNAME], ['counCode', C_COUN_CODE]]
	});
	var st = new Ext.form.ComboBox({
		width: 80,
		store: ts,
		value: 'trainNameEn',
		displayField: 'NAME',
		valueField: 'CODE',
		typeAhead: true,
		mode: 'local',
		forceSelection: true,
		triggerAction: 'all',
		selectOnFocus: true
	});
	var kw = new Ext.form.TextField();
	this.search = function() {
		var t = st.getValue();
		var k = kw.getValue();
		if (!t || !k) {
			XMG.alert(SYS, M_NO_QUERY_P);
			return;
		};
		var a = [];
		a[0] = {
			key: t,
			value: k,
			op: 7
		};
		store.baseParams = {
			mt: 'JSON',
			xml: Ext.util.JSON.encode(FOSJ(QTJ(a)))
		};
		store.reload({
			params: {
				start: 0,
				limit: 100
			}
		});
	};
	var grid = new Ext.grid.EditorGridPanel({
		id: 'G_STATION',
		iconCls: 'gen',
		title: C_STATION,
		header: false,
		plugins: ac,
		clicksToEdit: 1,
		closable: true,
		store: store,
		sm: sm,
		cm: cm,
		loadMask: true,
		view: new Ext.grid.GroupingView(groupViewCfg),
		bbar: PTB(store, 100),
		tbar: [{
			text: C_ADD,
			iconCls: 'add',
			handler: function() {
				var p = new GTrainStation({
					id: GGUID(),
					trainId: '0',
					trainType: '0',
					active: 1,
					version: '0',
					rowAction: 'N'
				});
				grid.stopEditing();
				store.insert(0, p);
				grid.startEditing(0, 1);
			}
		},
		'-', {
			text: C_REMOVE,
			iconCls: 'remove',
			handler: function() {
				FOS_REMOVE(sm, store);
			}
		},
		'-', {
			text: C_SAVE,
			iconCls: 'save',
			handler: function() {
				FOS_POST(store, 'GTrainStation', GTrainStation, 'TRAIN_S');
				getTRAIN_S().reload();
			}
		},
		'-', {
			text: C_EXPORT,
			iconCls: 'print',
			handler: function() {
				EXP('C', 'PORT', '');
			}
		},
		'-', st, kw, {
			text: C_SEARCH,
			iconCls: 'search',
			handler: this.search
		},
		'->', new Ext.PagingToolbar({
			pageSize: 100,
			store: store
		})]
	});
	return grid;
};
Fos.RailConsLookupWin = function(store, setQueryParams) {
	this.reload = function() {
		var a = [];
		var op = 1;
		a[a.length] = new QParam({
			key: 'consBizType',
			value: BT_T,
			op: 1
		});
		var custId = panel.find('name', 'custId')[0].getValue();
		if (custId)
		 a[a.length] = new QParam({
			key: 'custId',
			value: custId,
			op: op
		});
		var consSalesRepId = panel.find('name', 'consSalesRepId')[0].getValue();
		if (consSalesRepId)
		 a[a.length] = new QParam({
			key: 'consSalesRepId',
			value: consSalesRepId,
			op: op
		});
		var consOperatorId = panel.find('name', 'consOperatorId')[0].getValue();
		if (consOperatorId)
		 a[a.length] = new QParam({
			key: 'consOperatorId',
			value: consOperatorId,
			op: op
		});
		var consDate = panel.find('name', 'consDate')[0].getValue();
		var consDate2 = panel.find('name', 'consDate2')[0].getValue();
		if (consDate && consDate2) {
			a[a.length] = new QParam({
				key: 'consDate',
				value: consDate.format(DATEF),
				op: 5
			});
			a[a.length] = new QParam({
				key: 'consDate',
				value: consDate2.format(DATEF),
				op: 3
			});
		}
		 else if (consDate)
		 a[a.length] = new QParam({
			key: 'consDate',
			value: consDate.format(DATEF),
			op: op
		});
		var consContainerNo = panel.find('name', 'consContainerNo')[0].getValue();
		if (consContainerNo)
		 a[a.length] = new QParam({
			key: 'consContainerNo',
			value: consContainerNo,
			op: op
		});
		var vessName = panel.find('name', 'vessName')[0].getValue();
		if (vessName)
		 a[a.length] = new QParam({
			key: 'vessName',
			value: vessName,
			op: op
		});
		var consSailDate = panel.find('name', 'consSailDate')[0].getValue();
		var consSailDate2 = panel.find('name', 'consSailDate2')[0].getValue();
		if (consSailDate && consSailDate2) {
			a[a.length] = new QParam({
				key: 'consSailDate',
				value: consSailDate.format(DATEF),
				op: 5
			});
			a[a.length] = new QParam({
				key: 'consSailDate2',
				value: consSailDate2.format(DATEF),
				op: 3
			});
		}
		 else if (consSailDate)
		 a[a.length] = new QParam({
			key: 'consSailDate',
			value: consSailDate.format(DATEF),
			op: op
		});
		var consPotCn = panel.find('name', 'consPotCn')[0].getValue();
		if (consPotCn)
		 a[a.length] = new QParam({
			key: 'consPotCn',
			value: consPotCn,
			op: op
		});
		var consDeliveryDate = panel.find('name', 'consDeliveryDate')[0].getValue();
		var consDeliveryDate2 = panel.find('name', 'consDeliveryDate2')[0].getValue();
		if (consDeliveryDate && consDeliveryDate2) {
			a[a.length] = new QParam({
				key: 'consDeliveryDate',
				value: consDeliveryDate.format(DATEF),
				op: 5
			});
			a[a.length] = new QParam({
				key: 'consDeliveryDate2',
				value: consDeliveryDate2.format(DATEF),
				op: 3
			});
		}
		 else if (consDeliveryDate)
		 a[a.length] = new QParam({
			key: 'consDeliveryDate',
			value: consDeliveryDate.format(DATEF),
			op: op
		});
		var voyaName = panel.find('name', 'voyaName')[0].getValue();
		if (voyaName)
		 a[a.length] = new QParam({
			key: 'voyaName',
			value: voyaName,
			op: op
		});
		var consEta = panel.find('name', 'consEta')[0].getValue();
		var consEta2 = panel.find('name', 'consEta2')[0].getValue();
		if (consEta && consEta2) {
			a[a.length] = new QParam({
				key: 'consEta',
				value: consEta.format(DATEF),
				op: 5
			});
			a[a.length] = new QParam({
				key: 'consEta2',
				value: consEta2.format(DATEF),
				op: 3
			});
		}
		 else if (consEta)
		 a[a.length] = new QParam({
			key: 'consEta',
			value: consEta.format(DATEF),
			op: op
		});
		var consPodEn = panel.find('name', 'consPodEn')[0].getValue();
		if (consPodEn)
		 a[a.length] = new QParam({
			key: 'consPodEn',
			value: consPodEn,
			op: op
		});
		var consLoadDate = panel.find('name', 'consLoadDate')[0].getValue();
		var consLoadDate2 = panel.find('name', 'consLoadDate2')[0].getValue();
		if (consLoadDate && consLoadDate2) {
			a[a.length] = new QParam({
				key: 'consLoadDate',
				value: consLoadDate.format(DATEF),
				op: 5
			});
			a[a.length] = new QParam({
				key: 'consLoadDate2',
				value: consLoadDate2.format(DATEF),
				op: 3
			});
		}
		 else if (consLoadDate)
		 a[a.length] = new QParam({
			key: 'consLoadDate',
			value: consLoadDate.format(DATEF),
			op: op
		});
		var consPolCn = panel.find('name', 'consPolCn')[0].getValue();
		if (consPolCn)
		 a[a.length] = new QParam({
			key: 'consPolCn',
			value: consPolCn,
			op: op
		});
		var consDeliveryPlace = panel.find('name', 'consDeliveryPlace')[0].getValue();
		if (consDeliveryPlace)
		 a[a.length] = new QParam({
			key: 'consDeliveryPlace',
			value: consDeliveryPlace,
			op: op
		});
		var consContainerCompany = panel.find('name', 'consContainerCompany')[0].getValue();
		if (consContainerCompany)
		 a[a.length] = new QParam({
			key: 'consContainerCompany',
			value: consContainerCompany,
			op: op
		});
		setQueryParams(a);
		store.baseParams = {
			mt: 'xml',
			xml: FOSX(QTX(a))
		};
		store.reload({
			params: {
				start: 0,
				limit: C_PS
			},
			callback: function(r) {
				if (r.length == 0)
				 XMG.alert(SYS, M_NOT_FOUND);
			}
		});
	};
	var panel = new Ext.Panel({
		plain: true,
		height: 340,
		layout: 'column',
		defaults: {
			bodyStyle: 'padding:10px'
		},
		items: [{
			columnWidth: .33,
			layout: 'form',
			border: false,
			labelWidth: 80,
			labelAlign: "right",
			items: [{
				fieldLabel: C_BOOKER,
				name: 'custId',
				store: getCS(),
				xtype: 'combo',
				displayField: 'custCode',
				valueField: 'custId',
				typeAhead: true,
				enableKeyEvents: true,
				mode: 'local',
				tpl: custTpl,
				itemSelector: 'div.list-item',
				listWidth: 400,
				triggerAction: 'all',
				selectOnFocus: true,
				anchor: '90%',
				listeners: {
					scope: this,
					keydown: {
						fn: function(f, e) {
							LC(f, e, 'custBookerFlag');
						},
						buffer: 500
					}
				}
			},
			{
				fieldLabel: C_OPERATOR,
				name: 'consOperatorId',
				store: getOP_S(),
				xtype: 'combo',
				displayField: 'userLoginName',
				valueField: 'userId',
				typeAhead: true,
				mode: 'local',
				triggerAction: 'all',
				selectOnFocus: true,
				anchor: '90%'
			},
			{
				fieldLabel: C_CRAIL_NO,
				name: 'vessName',
				xtype: 'textfield',
				anchor: '90%'
			},
			{
				fieldLabel: C_CTRANSFER_STATION,
				name: 'consPotCn',
				store: getTS(),
				xtype: 'combo',
				displayField: 'trainNameCn',
				valueField: 'trainNameCn',
				typeAhead: true,
				mode: 'local',
				triggerAction: 'all',
				selectOnFocus: true,
				anchor: '90%',
				tpl: stationTpl,
				itemSelector: 'div.list-item',
				listWidth: C_LW,
				enableKeyEvents: true,
				listeners: {
					scope: this,
					keydown: {
						fn: LT,
						buffer: BF
					}
				}
			},
			{
				fieldLabel: C_FRAIL_NO,
				name: 'voyaName',
				xtype: 'textfield',
				anchor: '90%'
			},
			{
				fieldLabel: C_FTRANSFER_STATION,
				name: 'consPodEn',
				store: getTS(),
				xtype: 'combo',
				displayField: 'trainNameEn',
				valueField: 'trainNameEn',
				typeAhead: true,
				mode: 'local',
				triggerAction: 'all',
				selectOnFocus: true,
				anchor: '90%',
				tpl: stationTpl,
				itemSelector: 'div.list-item',
				listWidth: C_LW,
				enableKeyEvents: true,
				listeners: {
					scope: this,
					keydown: {
						fn: LT,
						buffer: BF
					}
				}
			},
			{
				fieldLabel: C_DEPARTURE_STATION,
				name: 'consPolCn',
				store: getTS(),
				xtype: 'combo',
				displayField: 'trainNameCn',
				valueField: 'trainNameCn',
				typeAhead: true,
				mode: 'local',
				triggerAction: 'all',
				selectOnFocus: true,
				anchor: '90%',
				tpl: stationTpl,
				itemSelector: 'div.list-item',
				listWidth: C_LW,
				enableKeyEvents: true,
				listeners: {
					scope: this,
					keydown: {
						fn: LT,
						buffer: BF
					}
				}
			}]
		},
		{
			columnWidth: .33,
			layout: 'form',
			border: false,
			labelWidth: 80,
			labelAlign: "right",
			items: [{
				fieldLabel: C_CONS_DATE,
				name: 'consDate',
				xtype: 'datefield',
				format: DATEF,
				anchor: '90%'
			},
			{
				fieldLabel: C_SALES,
				name: 'consSalesRepId',
				store: getSALE_S(),
				xtype: 'combo',
				displayField: 'userLoginName',
				valueField: 'userId',
				typeAhead: true,
				mode: 'local',
				triggerAction: 'all',
				selectOnFocus: true,
				anchor: '90%'
			},
			{
				fieldLabel: C_DEPARTURE_DATE,
				name: 'consSailDate',
				xtype: 'datefield',
				format: DATEF,
				anchor: '90%'
			},
			{
				fieldLabel: C_CDELIVERY_DATE,
				name: 'consDeliveryDate',
				xtype: 'datefield',
				format: DATEF,
				anchor: '90%'
			},
			{
				fieldLabel: C_ARRIVAL_DATE,
				name: 'consEta',
				xtype: 'datefield',
				format: DATEF,
				anchor: '90%'
			},
			{
				fieldLabel: C_FDELIVERY_DATE,
				name: 'consLoadDate',
				xtype: 'datefield',
				format: DATEF,
				anchor: '90%'
			},
			{
				fieldLabel: C_DESTINATION_STATION,
				name: 'consDeliveryPlace',
				store: getTS(),
				xtype: 'combo',
				displayField: 'trainNameCn',
				valueField: 'trainNameCn',
				typeAhead: true,
				mode: 'local',
				triggerAction: 'all',
				selectOnFocus: true,
				anchor: '90%',
				tpl: stationTpl,
				itemSelector: 'div.list-item',
				listWidth: C_LW,
				enableKeyEvents: true,
				listeners: {
					scope: this,
					keydown: {
						fn: LT,
						buffer: BF
					}
				}
			}]
		},
		{
			columnWidth: .34,
			layout: 'form',
			border: false,
			labelWidth: 80,
			labelAlign: "right",
			items: [{
				fieldLabel: C_TO,
				name: 'consDate2',
				xtype: 'datefield',
				format: DATEF,
				anchor: '90%'
			},
			{
				fieldLabel: C_CONT_NO,
				name: 'consContainerNo',
				xtype: 'textfield',
				anchor: '90%'
			},
			{
				fieldLabel: C_TO,
				name: 'consSailDate2',
				xtype: 'datefield',
				format: DATEF,
				anchor: '90%'
			},
			{
				fieldLabel: C_TO,
				name: 'consDeliveryDate2',
				xtype: 'datefield',
				format: DATEF,
				anchor: '90%'
			},
			{
				fieldLabel: C_TO,
				name: 'consEta2',
				xtype: 'datefield',
				format: DATEF,
				anchor: '90%'
			},
			{
				fieldLabel: C_TO,
				name: 'consLoadDate2',
				xtype: 'datefield',
				format: DATEF,
				anchor: '90%'
			},
			{
				fieldLabel: C_CONTAINER_TYPE,
				name: 'consContainerCompany',
				xtype: 'combo',
				store: CONT_TYPE_S,
				displayField: 'NAME',
				valueField: 'CODE',
				typeAhead: true,
				mode: 'local',
				triggerAction: 'all',
				selectOnFocus: true,
				anchor: '90%'
			}]
		}]
	});
	Fos.RailConsLookupWin.superclass.constructor.call(this, {
		title: C_CONS_QUERY,
		iconCls: 'search',
		modal: true,
		width: 800,
		height: 300,
		buttonAlign: 'right',
		items: panel,
		buttons: [{
			text: C_OK,
			scope: this,
			handler: this.reload
		},
		{
			text: C_CANCEL,
			scope: this,
			handler: this.close
		}]
	});
};
Ext.extend(Fos.RailConsLookupWin, Ext.Window);

var BASE_STATION = '';
var BASE_TRAINNAME_EN = '';
var BASE_TRAINNAME_CN = '';

var getBTS=function(){
	if(BASE_STATION!='') 
		return BASE_STATION;
	else{
		var bc=getCFG('BASE_STATION');
		var s=getTRAIN_S();
		var a=s.getRange();
		for(var i=0;i<a.length;i++){
			if(a[i].get('trainCode')==bc){
				BASE_STATION=a[i].get('trainId');
				BASE_TRAINNAME_EN=a[i].get('trainNameEn');
				BASE_TRAINNAME_CN=a[i].get('trainNameCn');
				break;
			}
		}
		return BASE_STATION;
	}
};

