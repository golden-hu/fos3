//网上询价
InquiryWin = function(p,_store) {
	
	var cboPol = new Ext.form.ComboBox({fieldLabel:C_POL,
		itemCls:'required',
		name:'winqPolEn',
		value:p.get('winqPolEn'),
		store:getPS(),
		displayField:'portNameEn',
		valueField:'portNameEn',
		typeAhead: true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'95%',
		tpl:portTpl,
		itemSelector:'div.list-item',
		listWidth:C_LW,
		enableKeyEvents:true,
		listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('winqPol','');
				}
			},
        	select:function(c,r,i){
        		p.set('winqPol',r.get('portId'));
        		this.find('name','winqReceiptPlace')[0].setValue(r.get('portNameEn'));
        	},
         	keydown:{fn:LP,buffer:BF}
        }
	});
	
	var txtReceiptPlace = new Ext.form.TextField({fieldLabel:'出发地',
		name:'winqReceiptPlace',
		value:p.get('winqReceiptPlace'),
		anchor:'95%'
	});
	
	var cboPod = new Ext.form.ComboBox({fieldLabel:C_POD,
		itemCls:'required',
		name:'winqPodEn',
		value:p.get('winqPodEn'),
		store:getPS(),
		displayField:'portNameEn',
		valueField:'portNameEn',
		typeAhead: true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'95%',
		tpl:portTpl,
		itemSelector:'div.list-item',
		listWidth:C_LW,
		enableKeyEvents:true,
		listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('winqPod','');
				}
			},
        	select:function(c,r,i){
        		p.set('winqPod',r.get('portId'));
            	this.find('name','winqDeliveryPlace')[0].setValue(r.get('portNameEn'));
            },
         	keydown:{fn:LP,buffer:BF}
    	}
	});
	
	var txtDeliveryPlace = new Ext.form.TextField({fieldLabel:'目的地',
		name:'winqDeliveryPlace',
		value:p.get('winqDeliveryPlace'),
		xtype:'textfield',
		anchor:'95%'
	});
	
	var txtGrossWeight = new Ext.form.NumberField({fieldLabel:'货物毛重',
		itemCls:'required',
		name:'winqCargoGw',
		value:p.get('winqCargoGw'),
		anchor:'95%'});
	
	var txtMeasurement = new Ext.form.NumberField({fieldLabel:'货物体积',
		name:'winqCargoMeasurement',
		value:p.get('winqCargoMeasurement'),
		anchor:'95%'
	});
	
	var cboTranCode = new Ext.form.ComboBox({fieldLabel:'运输条款',
		itemCls:'required',
		tabIndex:17,
		name:'tranId',
		value:p.get('tranId'),
		store:tranStore,
		displayField:'tranCode',
		valueField:'tranId',
		typeAhead: true,
		mode: 'remote',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'95%',
		listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('tranId','');
				}
			},
			select:function(c,r,i){
				p.set('tranCode',r.get('tranCode'));
			}
		}
	});
	
	var txtCargoDesc = new Ext.form.TextArea({fieldLabel:'货物描述',
		itemCls:'required',
		name:'winqCargoDesc',
		value:p.get('winqCargoDesc'),
		height:100,
		anchor:'95%'
	});
	
	var txtRemarks = new Ext.form.TextArea({fieldLabel:'备注',
		name:'winqRemarks',
		value:p.get('tranId'),
		height:100,
		anchor:'95%'
	});
	
	var frm = new Ext.form.FormPanel({labelWidth:80,bodyStyle:'padding:5px',items:[    	
    	cboPol,txtReceiptPlace,cboPod,txtDeliveryPlace,cboTranCode,
    	txtGrossWeight,txtMeasurement,txtCargoDesc,txtRemarks]
	});
    	
	this.save = function(){			
		p.beginEdit();
		frm.getForm().updateRecord(p);
		p.endEdit();
		if(!p.get('winqPolEn')){
			alert('装货港不能为空');
			frm.find('name','winqPolEn')[0].focus();
			return;
		}
		if(!p.get('winqPodEn')){
			alert('卸货港不能为空');
			frm.find('name','winqPodEn')[0].focus();
			return;
		}
		if(!p.get('tranId')){
			alert('运输条款不能为空');
			frm.find('name','tranId')[0].focus();
			return;
		}
		if(!p.get('winqCargoDesc')){
			alert('货物描述不能为空');
			frm.find('name','winqCargoDesc')[0].focus();
			return;
		}
		if(!p.get('winqCargoGw')){
			alert('货物毛重不能为空');
			frm.find('name','winqCargoGw')[0].focus();
			return;
		}
		
		var rj=RTJ(p,WInquiry);
		var data=FOSJ({'WInquiry':rj});
		Ext.Ajax.request({url:SERVICE_URL,
			method:'POST',
			params:{A:'WS_WINQ_S',mt:'JSON'},
			scope:this,
			success: function(r){
				if(_store)
					_store.reload();
				this.close();
			},
			failure: function(r){
				var res=Ext.util.JSON.decode(r.responseText);
				alert(res.FosResponse.msg);
			},
			jsonData:data
		});
	};	
    InquiryWin.superclass.constructor.call(this, {title:'网上询价',
    	modal:true,
    	width:500,
        height:470,
        plain:false,
        bodyStyle:'padding:0px;',
        buttonAlign:'right',
        items:frm,
        buttons:[{text:"保存",scope:this,handler:this.save},
                 {text:"取消",scope:this,handler:this.close}]
        }); 
};
Ext.extend(InquiryWin,Ext.Window);


InquiryGrid = function() {	
	
    var store = new Ext.data.Store({
   		url: SERVICE_URL+'?A=WINQ_X&wusrId='+CUSER,
    	reader:new Ext.data.XmlReader({totalProperty:'rowCount',
    		record:'WInquiry'}, WInquiry),
    		remoteSort:true,
    	sortInfo:{field:'winqId', direction:'DESC'}
    });
    
    store.load({params:{start:0,limit:20}});
    
	var sm = new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm = new Ext.grid.ColumnModel([
    	new Ext.grid.RowNumberer(),sm,
		{header:'询价时间',dataIndex:'createTime',width:120,renderer:formatDateTime},
		{header:'状态',dataIndex:'winqStatus',width:100,renderer:getWINQStatus},
		{header:'装货港',dataIndex:'winqPolEn',width: 80},
		{header:'卸货港',dataIndex:'winqPodEn',width:100},
		{header:'交货地',dataIndex:'winqDeliveryPlace',width:80},
		{header:'收货地',dataIndex:'winqReceiptPlace',width:100},
		{header:'运输条款',dataIndex:'tranCode',width:100},
		{header:'运费条款',dataIndex:'pateName',width:100},
		{header:'业务类型',dataIndex:'winqBizType',width:100},
		{header:'货物毛重',dataIndex:'winqCargoGw',width:100},
		{header:'货物体积',dataIndex:'winqCargoMeasurement',width:100}]);
	
	cm.defaultSortable=true;
	
	
    this.addRecord = function(){
    	var p = new WInquiry({winqId:0,
    		compCode:COMP_CODE,
    		wusrId:CUSER,
    		winqStatus:0,
    		rowAction:'N'
    	});
       	var win = new InquiryWin(p,store);    	
		win.show();
    };
    
    this.editRecord = function(){
    	var p = sm.getSelected();
    	if(p){
    		var win = new InquiryWin(p,store);
    		win.show();
    	}
    	else 
    		XMG.alert(SYS,M_NO_DATA_SELECTED);
    };
    
    this.showReply = function(){
    	var p = sm.getSelected();
    	if(p){
    		var win = new InquiryReplyWin(p);
    		win.show();
    	}
    	else 
    		XMG.alert(SYS,M_NO_DATA_SELECTED);
    };
    
	this.removeRecord = function(){
		if (sm.getSelections().length > 0)
        	XMG.confirm(SYS,M_R_C,function(btn){
            	if(btn == 'yes') {
            	var xml = SMTX4R(sm,'WInquiry','winqId');
        		Ext.Ajax.request({url:SERVICE_URL,
        			method:'POST',
        			params:{A:'WS_WINQ_S',mt:'xml'},
					success: function(){
						sm.each(function(p){store.remove(p);});
						XMG.alert(SYS,M_S);
					},
					failure: function(r,o){
						XMG.alert(SYS,M_F+r.responseText);
					},
					xmlData:FOSX(xml)});
            	}
        	});
        else 
        	XMG.alert(SYS,'操作失败！');
	};
	
	var btnAdd = new Ext.Button({text:C_ADD,iconCls:'add',handler:this.addRecord});
	var btnEdit = new Ext.Button({text:C_EDIT,iconCls:'option',handler:this.editRecord});
	var btnShowReply = new Ext.Button({text:'查看回复',iconCls:'option',handler:this.showReply});
	var btnRemove = new Ext.Button({text:C_REMOVE,iconCls:'remove',handler:this.removeRecord});
	
    InquiryGrid.superclass.constructor.call(this, {
	    id:'G_WINQ',
	    store: store,
	    iconCls:'grid',
	    width:600,height:300,
	    title:'询价列表',
	    header:false,
	    closable:true,
	    sm:sm,cm:cm,	    
	    loadMask:true,
	    tbar:[btnAdd, '-', btnEdit, '-',btnRemove,'-',btnShowReply],
		bbar:new Ext.PagingToolbar({pageSize:20,
			store:store,
			displayInfo:true,displayMsg:'{0} - {1} of {2}',emptyMsg:'没有记录'
		}),		
		listeners:{scope:this,
			rowdblclick:function(g,r,e){
				this.edit();
			}
		}
    }); 
};
Ext.extend(InquiryGrid,Ext.grid.GridPanel);

InquiryReplyWin = function(p) {
	var store = new Ext.data.Store({
   		url: SERVICE_URL+'?A=PCOM_Q',
    	reader:new Ext.data.XmlReader({totalProperty:'rowCount',
    		record:'PComments'}, PComments),
    		remoteSort:true,
    	sortInfo:{field:'commId', direction:'ASC'}});
    store.load({params:{objectType:'WINQ',objectId:p.get('winqId')}});
    
	var html = '<div style="padding:5px;"><table class="reference" width="100%">';
	html +='<tr><td width="80">询价单位：</td><td>'+p.get('wusrCompanyName')+'</td></tr>';
	html +='<tr><td width="80">询价人：</td><td>'+p.get('wusrFirstName')+'</td></tr>';
	html +='<tr><td width="80">询价日期：</td><td>'+formatDateTime(p.get('createTime'))+'</td></tr>';
	html +='<tr><td width="80">装货港：</td><td>'+p.get('winqPolEn')+'</td></tr>';
	html +='<tr><td>出发地：</td><td>'+p.get('winqReceiptPlace')+'</td></tr>';
	html +='<tr><td>卸货港：</td><td>'+p.get('winqPodEn')+'</td></tr>';
	html +='<tr><td>出发地：</td><td>'+p.get('winqDeliveryPlace')+'</td></tr>';
	html +='<tr><td>运输条款：</td><td>'+p.get('tranCode')+'</td></tr>';
	html +='<tr><td>货物描述：</td><td>'+p.get('winqCargoDesc')+'</td></tr>';
	html +='<tr><td>货物毛重：</td><td>'+p.get('winqCargoGw')+'</td></tr>';
	html +='<tr><td>货物体积：</td><td>'+p.get('winqCargoMeasurement')+'</td></tr>';
	html +='<tr><td>备注：</td><td>'+p.get('winqRemarks')+'</td></tr>';
	html +='</table></div>';
	
	var txtMessage = new Ext.form.TextArea({width:480,height:130,anchor:'95%'});
	
	var panelInfo = new Ext.Panel({title:'询价信息',frame:true,
		html:html,autoScroll:true});
	
	var tpl = new Ext.XTemplate(
		    '<tpl for=".">',		        
		        '<div>{commBy}:  <span>{createTime}</span> </div>',
		        '<div>{commBody}</div>',
		    '</tpl>'
		);
	
	var formatData = function(data) {
		//data.createTime=formatDateTime(data.createTime);
		return data;
	};
	
	var msgPanel = new Ext.Panel({region:'south',
	    autoScroll:true,
	    title:'回复信息',
	    items: new Ext.DataView({
	        store: store,
	        tpl: tpl,
	        autoHeight:true,
			prepareData: formatData.createDelegate(this)
		})
	});
	
	var tabPanel = new Ext.TabPanel({region:'center',activeTab:0,items:[panelInfo,msgPanel]});
	var panelReply = new Ext.Panel({region:'south',
		height:150,
		title:'回复信息',
		frame:true,
		collapsible:true,
		items:[txtMessage]
	});
	
	this.reply = function(){
		var msg = txtMessage.getValue();
		if(!msg){
			alert('请输入回复的内容！');
			return;
		}
		else			
			var comm = new PComments({objectType:'WINQ',objectId:p.get("id"),
				commBody:msg});
			var rj=RTJ(comm,PComments);
			var data=FOSJ({'PComments':rj});			
			Ext.Ajax.request({url:SERVICE_URL,method:'POST',scope:this,
				params:{A:'PCOM_S',mt:'JSON'},
				success: function(r,o){
					alert('保存成功');
					store.load({params:{mt:'JSON',objectType:'WINQ',objectId:p.get('winqId')}});
				},
				failure: function(r,o){
					XMG.alert(SYS,r.responseText);
				},
				jsonData:data
		});
	};	
	InquiryReplyWin.superclass.constructor.call(this, {title:'网上询价',modal:true,width:500,
        height:600,buttonAlign:'right',layout:'fit',items:[{layout:'border',items:[tabPanel,panelReply]}],
        buttons:[{text:"回复",scope:this,handler:this.reply},{text:"关闭",scope:this,handler:this.close}]
        }); 
};
Ext.extend(InquiryReplyWin,Ext.Window);
