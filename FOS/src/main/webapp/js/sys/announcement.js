// 公告窗口
Fos.AnnouncementFuncWin = function(p, store) {
	var date = new Ext.form.DateField({
				fieldLabel : C_RELEASE_DATE,
				name : 'annoDate',
				value : p.get('annoDate'),
				format : DATEF,
				editable : false,
				anchor : '90%'
			});


	var title = new Ext.form.TextField({
				fieldLabel : C_TTITLE,
				name : 'annoTitle',
				value : p.get('annoTitle'),
				anchor : '95%'
			});

	var editorText = new Ext.form.HtmlEditor({
				name : 'annoContent',
				value : p.get('annoContent'),
				width : 756,
				height : 340
			});

	var form = new Ext.form.FormPanel({
				padding : 5,
				autoHeight : true,
				labelWidth : 70,
				labelAlign : 'right',
				layout : 'column',
				items : [ {
							columnWidth : 0.5,
							layout : 'form',
							border : false,
							items : [date]
						}, {
							columnWidth : 1,
							layout : 'form',
							border : false,
							items : [title]
						}, {
							columnWidth : 1,
							layout : 'form',
							border : false,
							items : [editorText]
						}]
			});

	this.save = function() {
		p.beginEdit();
		saveToRecord(form, p);
		p.endEdit();
		var xml = RTX(p, 'OAnnouncement', OAnnouncement);
		if (xml) {
			Ext.Ajax.request({
						scope : this,
						url : SERVICE_URL,
						mothed : 'POST',
						params : {
							A : 'ANNO_S'
						},
						success : function(res) {
							XMG.alert(SYS,M_S);
							if (store) {
								store.reload();
							}
							this.close();
						},
						failure : function(res) {
							Ext.Msg.alert(SYS, M_F + res.responseText);
						},
						xmlData : FOSX(xml)
					});
		}
	};

	Fos.AnnouncementFuncWin.superclass.constructor.call(this, {
				title : p.get('rowAction') == 'N'
						? C_ADD + C_ANNOUCEMENT
						: C_EDIT + C_ANNOUCEMENT,
				iconCls : p.get('rowAction') == 'N' ? 'add' : 'option',
				width : 900,
				height : 480,
				modal : true,
				bodyStyle : 'padding:0px;',
				buttonAlign : 'right',
				layout : 'fit',
				items : [form],
				buttons : [{
							text : C_SAVE,
							scope : this,
							iconCls : 'save',
							disabled : NR(M1_P + A_ANNO + F_M),
							handler : this.save
						}, {
							text : C_CLOSE,
							scope : this,
							iconCls : 'cancel',
							handler : this.close
						}]
			});
};
Ext.extend(Fos.AnnouncementFuncWin, Ext.Window);


// 公告列表
Fos.AnnouncementPanel = function() {
	var store = new Ext.data.Store({
				url : SERVICE_URL,
				baseParams : {
					A : 'ANNO_Q',
					mt : 'xml'
				},
				reader : new Ext.data.XmlReader({
							totalProperty : 'rowCount',
							record : 'OAnnouncement',
							idProperty : 'annoId'
						}, OAnnouncement),
				remoteSort : true,
				sortInfo : {
					field : 'id',
					direction : 'desc'
				}
			});
	store.load({
				params : {
					start : 0,
					limit : C_PS
				}
			});

	var sm = new Ext.grid.CheckboxSelectionModel({
				singleSelect : false
			});

	var cm = new Ext.grid.ColumnModel({
				columns : [sm, {
							header : C_RELEASE_DATE,
							dataIndex : 'annoDate',
							width : 100,
							renderer:function(v){return v ? Ext.util.Format.date(v, DATEF) : '';}
						}, {
							header : C_TTITLE,
							dataIndex : 'annoTitle',
							width : 250
						}],
				defaults : {
					sortable : false,
					width : 100
				}
			});

	this.add = function() {
		var p = new OAnnouncement({
					annoType : 'user',//用户公告
					annoDate : new Date(),
					version:'0',
					rowAction : 'N'
				});
		var w = new Fos.AnnouncementFuncWin(p, store);
		w.show();
	};

	this.del = function() {
		delNewFun(sm, store, 'ANNO_S', 'OAnnouncement');
	};

	// 单表删除时进行判断
var delNewFun = function(sm, store, action, sheet) {
	var ra = sm.getSelections();
	var a1 = [];// 存放新增没保存的
	var a2 = [];// 存放已有的
	if (ra.length > 0) {
		for (var i = 0; i < ra.length; i++) {
			var r = ra[i];
			if (r.get('rowAction') == 'N') {
				r.set('rowAction', 'D');
				a1[a1.length] = r;
			} else
				a2[a2.length] = r;
		}

	
		if (a1.length > 0) {
			store.remove(a1);
		}
		if (a2.length > 0) {
			Ext.Msg.confirm(SYS, M_R_C, function(btn) {
						if (btn == 'yes') {
							var xml = ATX4R(a2, sheet,'annoId');
							FOSAJAX({A:action}, xml, function() {
										store.remove(a2);
									},this);
						}
					}, this);
		}
	} else
		Ext.Msg.alert(SYS, M_R_P);
};

	this.edit = function() {
		var p = sm.getSelected();
		if (p) {
			var w = new Fos.AnnouncementFuncWin(p, store);
			w.show();
		}
	};


	var fcBase = M1_P+A_ANNO;
	var btnAdd = new Ext.Button({
				text : C_ADD,
				iconCls : 'add',
				scope : this,
				disabled : NR(fcBase + F_M),
				handler : this.add
			});
	var btnDel = new Ext.Button({
				text : C_REMOVE,
				iconCls : 'remove',
				scope : this,
				disabled : NR(fcBase + F_R),
				handler : this.del
			});
	var btnEdit = new Ext.Button({
				text : C_EDIT,
				iconCls : 'option',
				scope : this,
				disabled : NR(fcBase + F_M),
				handler : this.edit
			});

	Fos.AnnouncementPanel.superclass.constructor.call(this, {
		id : 'C_ANNO',
		title : C_ANNO,
		closable : true,
		iconCls : 'class',
		store : store,
		sm : sm,
		cm : cm,
		loadMask : true,
		autoScroll : true,
		columnLines : true,
		listeners : {
			scope : this,
			rowdblclick : function(g, r, e) {
				var p = sm.getSelected();
				if (p) {
					var w = new Fos.AnnouncementFuncWin(p, store);
					w.show();
				}
			}
		},
		tbar : [btnAdd, '-', btnDel, '-', btnEdit],
		bbar : PTB(store,C_PS)
	});
};
Ext.extend(Fos.AnnouncementPanel, Ext.grid.GridPanel);
