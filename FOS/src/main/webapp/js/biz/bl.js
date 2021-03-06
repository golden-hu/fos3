//提单
Fos.BLGrid = function(_consign){
	this.sel = GSEL;	
	this.store = new Ext.data.GroupingStore({
   		url: SERVICE_URL+'?A=BL_Q',
    	reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'FBl'}, FBl),remoteSort:true,
    	sortInfo:{field:'blId', direction:'DESC'},
    	groupField:'blMBlNo'});    	
	
	if(_consign.get('rowAction')!='N'){
		if(_consign.get('consBizType')==BT_B&&_consign.get('consMasterFlag')==1)
			this.store.load({params:{mt:'JSON',consMasterId:_consign.get('consMasterId')}});	
		else
			this.store.load({params:{mt:'JSON',consId:_consign.get('consId')}});	
	}
	
    this.edit=function(){
    	var b = sm.getSelected();
    	if(b){
    		var win = new Fos.BlWin(_consign,b,this.store);    	
			win.show();
    	}
    	else XMG.alert(SYS,M_NO_DATA_SELECTED);
    };
    
	var re = {scope:this,
		rowdblclick: function(grid, rowIndex, event){
			var b=grid.getSelectionModel().getSelected();
			var win = new Fos.BlWin(_consign,b,this.store);    	
			win.show();
			}
	};
	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false,scope:this}); 
	var mf =CHKCLM(C_BL_MERGE,'blMergeFlag');
	var sf =CHKCLM(C_BL_SPLIT,'blSplitFlag');
	var maf =CHKCLM(C_BL_MASTER,'blMasterFlag');
	var cm=new Ext.grid.ColumnModel({columns:[sm,maf,mf,sf,
	{header:C_BL_TYPE,dataIndex:'blType',width:80},
	{header:C_BL_NO,dataIndex:'blNo'},
	{header:C_M_BL_NO,dataIndex:'blMBlNo'},
	{header:C_CONS_NO,dataIndex:'consNo'},
	{header:C_CONTRACT_NO,dataIndex:'consTradeContractNo'},
	{header:C_BL_PACKAGES,width:80,dataIndex:"cargPackages",align:'right',render:rateRender,css:'font-weight:bold;'},
	{header:C_BL_GW,width:80,dataIndex:"cargGrossWeight",align:'right',renderer:rateRender,css:'font-weight:bold;'},
	{header:C_BL_CBM,width:80,dataIndex:"cargMeasurement",renderer:rateRender,align:'right',css:'font-weight:bold;'},
	{header:C_ISTY,dataIndex:'istyId',renderer:getISTY},
	{header:C_ISSUE_PLACE,dataIndex:'blIssuePlace'},
	{header:C_ISSUE_DATE,dataIndex:'blIssueDate',renderer:formatDate},
	{header:C_DOC_ORI_NUM,dataIndex:'blOriginalNum'},
	{header:C_STATUS,dataIndex:'blStatus',renderer:getBLST},
	{header:C_CREATE_BY,dataIndex:'createBy',renderer:getUSER},
	{header:C_BILL_DATE,dataIndex:'createTime',renderer:formatDateTime},
	{header:C_MODIFY_BY,dataIndex:'modifyBy',renderer:getUSER},
	{header:C_MODIFY_DATE,dataIndex:'modifyTime',renderer:formatDateTime}
	],defaults:{sortable:true,width:80}});	
	
	var newBl = function(t){
		var rid=GGUID();
		var bl = new FBl({id:rid,blId:rid,
		consId:_consign.get('consId'),
		consNo:_consign.get('consNo'),
		blType:t,
		blNo:t=='MB/L'?_consign.get('consMblNo'):_consign.get('consHblNo'),
		mblNo:_consign.get('consMblNo'),
		consBizClass:_consign.get('consBizClass'),
		consBizType:_consign.get('consBizType'),
		consShipType:_consign.get('consShipType'),
		custId:_consign.get('custId'),
		custName:_consign.get('custName'),
		consTradeContractNo:_consign.get('consTradeContractNo'),
		consChargeRemarks:_consign.get('consChargeRemarks'),
		blShipper:_consign.get('consShipper'),
		blConsignee:_consign.get('consConsignee'),
		blNotifyParty:_consign.get('consNotifyParty'),
		blNotifyParty2:_consign.get('consNotifyParty2'),
		blOverseaAgency:_consign.get('consNotifyParty2'),
		blCarrier:_consign.get('consCarrier'),
		blCarrierName:_consign.get('consCarrierName'),
		blVessel:_consign.get('vessName'),
		blVoyage:_consign.get('voyaName'),
		blPol:_consign.get('consPolEn'),
		blPod:_consign.get('consPodEn')+','+_consign.get('consTradeCountry'),
		blPot:_consign.get('consPotEn'),
		blLoadDate:_consign.get('consLoadDate'),
		blEtd:_consign.get('consEtd'),
		blEta:_consign.get('consEta'),
		blReceiptPlace:_consign.get('consReceiptPlace'),
		blDeliveryPlace:_consign.get('consDeliveryPlace'),
		blContainerNo:_consign.get('consContainerNo'),
		blSealNo:_consign.get('consSealNo'),
		blContainerSealNo:_consign.get('consContainerSealNo'),
		blPackages:_consign.get('consCargoPackages'),
		consMasterId:_consign.get('consMasterId'),
		consMasterNo:_consign.get('consMasterNo'),
		cargPackages:_consign.get('consTotalPackages'),
		cargGrossWeight:_consign.get('consTotalGrossWeight'),
		cargNetWeigth:_consign.get('consTotalNetWeight'),
		cargMeasurement:_consign.get('consTotalMeasurement'),
		fconId:_consign.get('fconId'),
		fconContractNo:_consign.get('consContractNo'),
		unitId:_consign.get('unitId'),
		unitName:_consign.get('unitCode'),
		packId:_consign.get('packId'),
		packName:_consign.get('packName'),
		blMergeFlag:0,
		blSplitFlag:0,
		blMasterFlag:1,
		blCargoDesc:_consign.get('consCargoDesc'),
		blGrossWeight:_consign.get('consCargoGrossWeight'),
		blMeasurement:_consign.get('consCargoMeasurement'),
		blTotalSay:'SAY TOTAL '+N2EW(_consign.get('consTotalPackages'))+' ('+_consign.get('consTotalPackages')+') '+getPACK(_consign.get('packId'))+' ONLY',
		blPaymentTerm:_consign.get('pateName'),
		blPaidAt:_consign.get('consPaidAt'),
		blMarks:_consign.get('consCargoMarks'),
		blTransTerm:getTRAN(_consign.get('tranId')),
		blContainerInfo:_consign.get('consContainersInfo'),
		istyId:_consign.get('istyId'),
		blOriginalNum:N2EW(_consign.get('consOriginalBlNum')),
		blStatus:'1',
		version:'0',
		rowAction:'N'});
		return bl;
	};
	
	var newAirBl = function(t){
		var rid=GGUID();
		var bl = new FBl({id:rid,blId:rid,
		consId:_consign.get('consId'),
		consNo:_consign.get('consNo'),
		blType:t,
		blNo:t=='MB/L'?_consign.get('consMblNo'):_consign.get('consHblNo'),
		mblNo:_consign.get('consMblNo'),
		consBizClass:_consign.get('consBizClass'),
		consBizType:_consign.get('consBizType'),
		custId:_consign.get('custId'),
		custName:_consign.get('custName'),
		blShipper:_consign.get('consShipper'),
		blConsignee:_consign.get('consConsignee'),
		blNotifyParty:_consign.get('consNotifyParty'),
		blOverseaAgency:_consign.get('consNotifyParty2'),
		blCarrierName:_consign.get('consCarrierName'),
		blVessel:_consign.get('vessName'),
		blVoyage:_consign.get('voyaName'),
		blPol:_consign.get('consPolEn'),
		blPod:_consign.get('consPodEn'),
		blPot:_consign.get('consPotEn'),
		blLoadDate:_consign.get('consLoadDate'),
		blEtd:_consign.get('consEtd'),
		blEta:_consign.get('consEta'),
		blReceiptPlace:_consign.get('consReceiptPlace'),
		blDeliveryPlace:_consign.get('consDeliveryPlace'),
		blPackages:_consign.get('consTotalPackages'),
		consMasterId:_consign.get('consMasterId'),
		consMasterNo:_consign.get('consMasterNo'),
		unitId:_consign.get('unitId'),
		unitName:_consign.get('unitCode'),
		packId:_consign.get('packId'),
		packName:_consign.get('packName'),
		blMergeFlag:0,
		blSplitFlag:0,
		blMasterFlag:1,
		blCargoDesc:_consign.get('consCargoDesc'),
		blGrossWeight:_consign.get('consTotalGrossWeight'),
		blMeasurement:_consign.get('consTotalMeasurement'),
		blTotalSay:'SAY TOTAL '+N2EW(_consign.get('consTotalPackages'))+' ('+_consign.get('consTotalPackages')+') '+getPACK(_consign.get('packId'))+' ONLY',
		blPaymentTerm:_consign.get('pateName'),
		blPaidAt:_consign.get('consPaidAt'),
		blMarks:_consign.get('consCargoMarks'),
		blTransTerm:getTRAN(_consign.get('tranId')),
		blContainerInfo:_consign.get('consContainersInfo'),
		istyId:_consign.get('istyId'),
		blOriginalNum:N2EW(_consign.get('consOriginalBlNum')),
		blStatus:'1',
		version:'0',
		rowAction:'N'});
		return bl;
	};
	
	var reloadCons=function(){
		var sc = new Ext.data.Store({url: SERVICE_URL+'?A='+'CONS_Q',
		reader: new Ext.data.XmlReader({record:'FConsign'}, FConsign)});					
		sc.load({params:{consId:_consign.get('consId')},callback:function(r,o,s){
			if(s&&r.length>0){
				var c=r[0];
				_consign.beginEdit();
				_consign.set('blPackages',c.get('blPackages'));
				_consign.set('blGrossWeight',c.get('blGrossWeight'));
				_consign.set('blNetWeight',c.get('blNetWeight'));
				_consign.set('blMeasurement',c.get('blMeasurement'));
				_consign.set('version',c.get('version'));	
				_consign.endEdit();
				var tc = T_MAIN.getComponent('C_'+_consign.get("id"));
				var t=tc.getComponent('T_BOOK_'+_consign.get("id"));
				t.find('name','blPackages')[0].setValue(_consign.get('blPackages'));
				t.find('name','blGrossWeight')[0].setValue(_consign.get('blGrossWeight'));
				t.find('name','blNetWeight')[0].setValue(_consign.get('blNetWeight'));
				t.find('name','blMeasurement')[0].setValue(_consign.get('blMeasurement'));
				XMG.alert(SYS,M_S);
			}    						
		},scope:this});
	};
	
	this.addMBl = function(){
		var b = _consign.get('consBizType')==BT_A?newAirBl('MB/L'):newBl('MB/L');
		var win = new Fos.BlWin(_consign,b,this.store);    	
		win.show();
	};
	
	this.addHBl = function(t){
		var b = _consign.get('consBizType')==BT_A?newAirBl('HB/L'):newBl('HB/L');
		var win = new Fos.BlWin(_consign,b,this.store);    	
		win.show();
	};
	
	this.merge=function(){
		var a=sm.getSelections();
		if(a.length<2){
			XMG.alert(SYS,M_NOT_LT_TWO_BL);
			return;
		}
		for(var i=0;i<a.length;i++){
			if(a[i].get('blMergeFlag')==1){XMG.alert(SYS,M_BL_MERGED);return;}
		}		
		var xml=ATX(a,'FBl',FBl);
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'BL_M'},
			success: function(res){
				if(_consign.get('consBizType')==BT_B&&_consign.get('consMasterFlag')==1)
					this.store.reload({params:{mt:'JSON',consMasterId:_consign.get('consMasterId')}});
				else
					this.store.reload({params:{mt:'JSON',consId:_consign.get('consId')}});
				reloadCons();
				XMG.alert(SYS,M_S);
			},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(xml)});
	};
	
	this.cancelMerge=function(){
		var r=sm.getSelected();
		if(r.get('blMergeFlag')!=1||r.get('blMasterFlag')!=1){
			XMG.alert(SYS,M_SEL_BL_MERGED);
			return;
		}
		Ext.Ajax.request({scope:this,
			url:SERVICE_URL,
			method:'POST',
			params:{A:'BL_M_C',blId:r.get('blId')},
			success: function(res){
				if(_consign.get('consBizType')==BT_B&&_consign.get('consMasterFlag')==1)
					this.store.reload({params:{mt:'JSON',consMasterId:_consign.get('consMasterId')}});
				else
					this.store.reload({params:{mt:'JSON',consId:_consign.get('consId')}});
				reloadCons();
				XMG.alert(SYS,M_S);
			},
			failure: function(res){
				XMG.alert(SYS,M_F+res.responseText);
			}
		});
	};
	
	this.split=function(){
		var r=sm.getSelected();
		if(r.get('blMergeFlag')==1||r.get('blSplitFlag')==1){
			XMG.alert(SYS,M_BL_MERGED);
			return;
		}
		
		var w = new Fos.NumWin(C_SPLIT_NUM);			
		w.addButton({text:C_OK},function(){
			var n = w.findById('NUM').getValue();
			var a=[];
			for(var i=0;i<n;i++){
				var rid=GGUID();
				var bl=r.copy(rid);
				bl.set('id',rid);
				bl.set('blSplitFlag',1);
				bl.set('blMBlId',r.get('blId'));
				bl.set('blMBlNo',r.get('blNo'));
				bl.set('blMasterFlag',0);
				bl.set('blNo',r.get('blNo')+'-'+(i+1));
				bl.set('rowAction','N');
				
				if(i>0){
					bl.set('blPackages','');
					bl.set('blGrossWeight','');
					bl.set('blNetWeight','');
					bl.set('blMeasurement','');
					bl.set('cargPackages','');
					bl.set('cargGrossWeight','');
					bl.set('cargNetWeight','');
					bl.set('cargMeasurement','');
				}
				a[i]=bl;
			}
			r.set('blSplitFlag',1);
			r.set('blMasterFlag',1);
			r.set('blMBlId',r.get('blId'));
			r.set('blMBlNo',r.get('blNo'));
			a[a.length]=r;
			var xml=ATX(a,'FBl',FBl);
			Ext.Ajax.request({scope:this,
				url:SERVICE_URL,
				method:'POST',
				params:{A:'BL_S'},
				success: function(res){
					if(_consign.get('consBizType')==BT_B&&_consign.get('consMasterFlag')==1)
						this.store.reload({params:{mt:'JSON',consMasterId:_consign.get('consMasterId')}});
					else
						this.store.reload({params:{mt:'JSON',consId:_consign.get('consId')}});
					reloadCons();
					XMG.alert(SYS,M_S);
				},
				failure: function(res){
					XMG.alert(SYS,M_F+res.responseText);
				},
				xmlData:FOSX(xml)
			});
			w.close();
		},this);
		w.addButton({text:C_CANCEL},function(){w.close();},this);
		w.show();
	};
	
	this.cancelSplit=function(){
		var r=sm.getSelected();
		if(r.get('blSplitFlag')!=1||r.get('blMasterFlag')!=1){
			XMG.alert(SYS,M_SEL_BL_SPLIT);
			return;
		}
		
		Ext.Ajax.request({scope:this,
			url:SERVICE_URL,
			method:'POST',
			params:{A:'BL_SP_C',blId:r.get('blId')},
			success: function(res){
				if(_consign.get('consBizType')==BT_B&&_consign.get('consMasterFlag')==1)
					this.store.reload({params:{mt:'JSON',consMasterId:_consign.get('consMasterId')}});
				else
					this.store.reload({params:{mt:'JSON',consId:_consign.get('consId')}});
				reloadCons();
				XMG.alert(SYS,M_S);
			},
			failure: function(res){
				XMG.alert(SYS,M_F+res.responseText);
			}
		});
	};
	
	this.addBlByCargo = function(t,c){
		var bl = newBl(t);
		this.store.insert(0,bl);
		bl.set('blNo','');		
		mblNo:_consign.get('consMblNo'),
		bl.set('blMarks',c.get('cargMarks'));
		bl.set('blPackages',''+c.get('cargPackageNum')+c.get('packName'));
		bl.set('blMeasurement',''+c.get('cargMeasurement')+'CBM');
		bl.set('blGrossWeight',''+c.get('cargGrossWeight')+(_consign.get('consBizType')=='C'?'KGS':'MT'));
		bl.set('cargPackages',c.get('cargPackageNum'));
		bl.set('cargGrossWeight',c.get('cargGrossWeight'));
		bl.set('cargMeasurement',c.get('cargMeasurement'));
		bl.set('cargNetWeight',c.get('cargNetWeight'));
		bl.set('unitId',c.get('unitId'));
		bl.set('unitName',c.get('unitName'));
		bl.set('packId',c.get('packId'));
		bl.set('packName',c.get('packName'));
		bl.set('rowAction','N');
		bl.set('blTotalSay','SAY TOTAL '+N2EW(c.get('cargPackageNum'))+' ('+_consign.get('consTotalPackages')+') '+c.get('packName')+'ONLY');
		showBlWin(_consign,bl,store);
	};
	
	this.removeBl = function(){
		var a =sm.getSelections();
       	if(a.length){
       		XMG.confirm(SYS,M_R_C,function(btn){
           	if(btn=='yes'){
           		var b = false;
               	for(var i=0;i<a.length;i++){if(a[i].get('blStatus')!=1){b=true;break;}}
               	if(b) XMG.alert(SYS,M_BL_CONFIRMED);
               	else {
               		var xml = SMTX4R(sm,'FBl','blId');
               		Ext.Ajax.request({url:SERVICE_URL,method:'POST',scope:this,params:{A:'BL_S'},
					success: function(){
						sm.each(function(R){this.store.remove(R);},this);
						reloadCons();
						XMG.alert(SYS,M_S);
					},
					failure: function(r,o){XMG.alert(SYS,M_F+r.responseText);},
					xmlData:FOSX(xml)});
               	}
           }},this);
		}
       	else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};	

	var m=getRM(_consign.get('consBizClass'),_consign.get('consBizType'),_consign.get('consShipType'))+M3_BL;
	new Ext.KeyMap(Ext.getDoc(), {
		key:'nhdebucv',ctrl:true,scope:this,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('C_'+_consign.get("id"));
		 	if(tc&&tc==T_MAIN.getActiveTab()){
			 	var te=tc.getComponent('T_BL_'+_consign.get('id'));
			 	if(te==tc.getActiveTab())
			 	{
			 		switch(k) {
					case Ext.EventObject.N:
						if(!NR(m+F_M)) this.addMBl();break;
					case Ext.EventObject.H:
						if(!NR(m+F_M)) this.addHBl();break;
					case Ext.EventObject.D:
						if(!NR(m+F_R)) this.removeBl();break;
					case Ext.EventObject.E:
						if(!NR(m+F_R)) this.edit();break;
					case Ext.EventObject.B:
						if(!NR(m+F_M)) this.merge();break;
					case Ext.EventObject.U:
						if(!NR(m+F_M)) this.cancelMerge();break;
					case Ext.EventObject.C:
						if(!NR(m+F_M)) this.split();break;
					case Ext.EventObject.V:
						if(!NR(m+F_M)) this.cancelSplit();break;
					}
			 	}
		 	}
		},stopEvent:true,scope:this});
	
	var gv=new Ext.grid.GroupingView({showGroupName:false,
		enableNoGroups:true,
		hideGroupedColumn:true,
		groupTextTpl: '{text}',
		getRowClass: function(record, index) {			   
            if (record.get('blMasterFlag')==1) 
            	return 'pin-bg-row';
            else 
            	return '';
        }
	});
	
	Fos.BLGrid.superclass.constructor.call(this, {header:false,
		region:'north',
		height:250,
		autoScroll:true,
		listeners:re,
		store:this.store,
		sm:sm,
		cm:cm,
		view:gv,
		tbar:[{text:C_ADD+'(N)',iconCls:'add',disabled:NR(m+F_M)||_consign.get('rowAction')=='N',scope:this,
			   	menu: new Ext.menu.Menu({items: [
			   		{text:_consign.get('consBizType')==BT_A?'MAWB(M)':'MB/L(N)',scope:this,handler:this.addMBl},
			   		{text:_consign.get('consBizType')==BT_A?'HAWB(H)':'HB/L(H)',scope:this,handler:this.addHBl}]})
				},'-',
				{text:C_REMOVE+'(D)',iconCls:'remove',disabled:NR(m+F_R),scope:this,handler:this.removeBl},'-',
				{text:C_EDIT+'(E)',iconCls:'option',disabled:NR(m+F_M),scope:this,handler:this.edit},'-',
				{text:C_BL_MERGE+'(B)',iconCls:'copy',disabled:NR(m+F_M),scope:this,handler:this.merge},'-',
				{text:C_BL_MERGE_C+'(U)',iconCls:'copy',disabled:NR(m+F_M),scope:this,handler:this.cancelMerge},'-',
				{text:C_BL_SPLIT+'(C)',iconCls:'copy',disabled:NR(m+F_M),scope:this,handler:this.split},'-',
				{text:C_BL_SPLIT_C+'(V)',iconCls:'copy',disabled:NR(m+F_M),scope:this,handler:this.cancelSplit},'-'
			   	]
	});
};
Ext.extend(Fos.BLGrid, Ext.grid.GridPanel);

//提单标签页
Fos.BLTab = function(_consign) {
	this.grid = new Fos.BLGrid(_consign);
	
	this.getVendorId=function(){
    	return '';
    };
    
	this.getVendorName=function(){
		return '';
	};
	
	var expPanel = new Fos.SectionExGrid(_consign,'BL',this);	
	
	Fos.BLTab.superclass.constructor.call(this, { 
		id: "T_BL_" +_consign.get('id'),title:C_SR_BL,layout:'border',
		items: [this.grid,
	        {region:'center',header:false,layout:'fit',items:[expPanel]
			}]
	});
};
Ext.extend(Fos.BLTab, Ext.Panel);

//提单窗口
Fos.BlWin = function(p,b,store) {
	this.copyFrom=function(){		
		XMG.prompt(SYS,C_BL_NO,function(btn,v){
			if(btn=='ok'){
				var sc = new Ext.data.Store({url: SERVICE_URL+'?A='+'BL_Q',
					reader: new Ext.data.XmlReader({record:'FBl'}, FBl)});
				
				sc.load({params:{blNo:v},
					callback:function(r,o,s){
					if(s&&r.length>0){
						var c=r[0];
						b.beginEdit();
						var f = FBl.prototype.fields;
						for (var i = 0; i < f.keys.length; i++) {
							var fn = ''+f.keys[i];
							if(fn=='blId'||fn=='id'||fn=='blNo'||fn=='consId'||fn=='consNo'||fn=='version'
								||fn=='consBizClass'||fn=='consBizType'||fn=='consShipType'
								||fn=='consTradeContractNo'||fn=='consChargeRemarks'||fn=='custId'
								||fn=='custName'||fn=='blStatus'||fn=='removed'){}
							else b.set(fn,c.get(fn));
						};
						b.endEdit();						
						recordToContainer(frm,b);
					}    						
				},scope:this});
			}
		},this);
    };
    
	this.save = function(){			
		if(p.get('consBizType')!=BT_A){
			if(this.find('name','blNo')[0].getValue()==''){
				XMG.alert(SYS,M_BL_REQIRED,function(){
					this.find('name','blNo')[0].focus();
					},this);
				return;
			}
		}
		else{
			if(this.find('name','mblNo')[0].getValue()==''){
				XMG.alert(SYS,M_BL_REQIRED,function(){
					this.find('name','mblNo')[0].focus();},this);
				return;
			}
		}
		
		saveToRecord(frm,b);
		
		var xml = RTX(b,'FBl',FBl);
		Ext.Ajax.request({scope:this,
			url:SERVICE_URL,
			method:'POST',
			params:{A:'BL_S'},
			success: function(res){				
				var c = XTR(res.responseXML,'FBl',FBl);
				var f = FBl.prototype.fields;
				b.beginEdit();
   				for (var i = 0; i < f.keys.length; i++) {
   					var fn = ''+f.keys[i];
   					b.set(fn,c.get(fn));
   				}
				b.set('rowAction','M');
				b.endEdit();
				if(ac='N') store.add(b);
				var sc = new Ext.data.Store({url: SERVICE_URL+'?A='+'CONS_Q',
					reader: new Ext.data.XmlReader({record:'FConsign'}, FConsign)});
				
				sc.load({params:{consId:p.get('consId')},
					callback:function(r,o,s){
					if(s&&r.length>0){
						var c=r[0];
						p.beginEdit();
						p.set('blCargoPackages',c.get('blCargoPackages'));
						p.set('blCargoGrossWeight',c.get('blCargoGrossWeight'));
						p.set('blCargoNetWeight',c.get('blCargoNetWeight'));
						p.set('blCargoMeasurement',c.get('blCargoMeasurement'));
						p.set('version',c.get('version'));	
						p.endEdit();
						
						var tc = T_MAIN.getComponent('C_'+p.get("id"));
						var t=tc.getComponent('T_BOOK_'+p.get("id"));
						var blcp=t.find('name','blCargoPackages');
						if(blcp[0]) blcp[0].setValue(p.get('blCargoPackages'));
						var blcg=t.find('name','blCargoGrossWeight');
						if(blcg[0]) blcg[0].setValue(p.get('blCargoGrossWeight'));
						var blcn=t.find('name','blCargoNetWeight');
						if(blcn[0]) blcn[0].setValue(p.get('blCargoGrossWeight'));
						var blcm=t.find('name','blCargoMeasurement');
						if(blcm[0]) blcm[0].setValue(p.get('blCargoMeasurement'));
						XMG.alert(SYS,M_S);
					}    						
				},scope:this});
			},
			failure: function(res){
				XMG.alert(SYS,M_F+res.responseText);
			},
			xmlData:FOSX(xml)
		});
	};
	
	this.updateStatus=function(s){
		Ext.Ajax.request({url:SERVICE_URL,
			method:'POST',
			scope:this,
			params:{A:'BL_U',
				blId:b.get('blId'),
				consId:p.get('consId'),
				blStatus:s,
				blType:b.get('blType')
			},
			success: function(r){
				b.set('blStatus',s);
				b.set('version',b.get('version')+1);
				this.updateToolBar();
				XMG.alert(SYS,M_S);
			},
			failure: function(r){
				XMG.alert(SYS,M_F+r.responseText);
			}
		});
    };
    
	this.check = function(){
		this.updateStatus(2);
	};
	
	this.uncheck = function(){
		this.updateStatus(1);
	};
	
	this.printOffical = function(){
		this.updateStatus(3);
	};
	
	this.release = function(){
		this.updateStatus(4);
	};
	
	this.expExcel=function(){
		EXPC('BL','&blId='+b.get('blId'));
	};
	
	this.expExcel1=function(){
		EXPC('FBL_MANIFEST','&blId='+b.get('blId'));
	};
	
	this.expEmail=function(){
				var to='';
				var cc='';
				var sub='';
				var msg='';
				EXPM(to,cc,sub,msg,'BL','blId='+b.get('blId'));
	};		
	
	this.genCons = function(){
		EXPC('CONS_B_BL','&blId='+b.get('blId'));
	};
	
	this.saveShipper = function(shipperT){
    	var cushName = '';
    	if(shipperT==1) 
    		cushName = this.find('name','blShipper')[0].getValue();
    	else if(shipperT==2) 
    		cushName = this.find('name','blConsignee')[0].getValue();
    	else if(shipperT==3) 
    		cushName = this.find('name','blNotifyParty')[0].getValue();
    	else if(shipperT==4) 
    		cushName = this.find('name','blOverseaAgency')[0].getValue();
    	    	
    	if(cushName!=''){    		
    		var c = new CCustomerShipper({rowAction:'N',
    			custId:p.get('custId'),
    			cushType:shipperT,
    			cushName:cushName
    		});
    		
    		var xml = RTX(c,'CCustomerShipper',CCustomerShipper);
			Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',
				params:{A:'CUSH_S'},
				success: function(res){
					XMG.alert(SYS,M_S);
				},
				failure: function(res){
					XMG.alert(SYS,M_F+res.responseText);
				},
				xmlData:FOSX(xml)
			});
    	}
    };
    
    this.selShipper = function(shipperT){
		var win = new  Fos.ShipperWin(p.get('custId'),shipperT,updateShipper);
    	win.show();
    };
    
   updateShipper = function(shipperT,cushName){
    	if(shipperT==1) 
    		cushName = frm.find('name','blShipper')[0].setValue(cushName);
    	else if(shipperT==2) 
    		cushName = frm.find('name','blConsignee')[0].setValue(cushName);
    	else if(shipperT==3) 
    		cushName = frm.find('name','blNotifyParty')[0].setValue(cushName);
    	else if(shipperT==4) 
    		cushName = frm.find('name','blOverseaAgency')[0].setValue(cushName);
    };
    
    var bSaveShipper = new Ext.Button({text:'保存',scope:this,
    	handler:function(){this.saveShipper(1);}
    });
    
    var bSearchShipper = new Ext.Button({text:'选择',scope:this,
    	handler:function(){this.selShipper(1);}
    });
    
    var bSaveConsignee = new Ext.Button({text:'保存',scope:this,
    	handler:function(){this.saveShipper(2);}
    });
    
    var bSearchConsignee = new Ext.Button({text:'选择',scope:this,
    	handler:function(){this.selShipper(2);}
    });
    
    var bSaveNotifyParty = new Ext.Button({text:'保存',scope:this,
    	handler:function(){this.saveShipper(3);}
    });
    
    var bSearchNotifyParty = new Ext.Button({text:'选择',scope:this,
    	handler:function(){this.selShipper(3);}
    });
    
    var bSaveNotifyParty2 = new Ext.Button({text:'保存',scope:this,
    	handler:function(){this.saveShipper(4);}
    });
    
    var bSearchNotifyParty2 = new Ext.Button({text:'选择',scope:this,
    	handler:function(){this.selShipper(4);}
    });
    

    var txtBlNo = new Ext.form.TextField({fieldLabel:C_BL_NO,
    	name:'blNo',
    	itemCls:'required',
    	tabIndex:1,
		value:b.get('blNo'),
		anchor:'90%'
	});
    
    var txtPrecarriage = new Ext.form.TextField({fieldLabel:C_PRECARRIAGE,
    	name:'blPrecarriage',
    	value:b.get('blPrecarriage'),
    	tabIndex:2,
    	xtype:'textfield',
    	anchor:'90%'
    });
    
    var txtPaymentTerm = new Ext.form.TextField({fieldLabel:C_BL_PATE,
    	name:'blPaymentTerm',
    	value:b.get('blPaymentTerm'),
    	tabIndex:3,
    	xtype:'textfield',
    	anchor:'90%'
    });
    
    var txtPaidAt = new Ext.form.TextField({fieldLabel:C_PAID_AT,
    	name:'blPaidAt',
    	value:b.get('blPaidAt'),
    	tabIndex:4,
    	xtype:'textfield',
    	anchor:'90%'
    });
    
    var cboCarrier = new Ext.form.ComboBox({fieldLabel:C_CARRIER,
    	name:'blCarrierName',
    	tabIndex:5,
    	store:getCS(),
    	enableKeyEvents:true,
		tpl:custTpl,
		itemSelector:'div.list-item',
		listWidth:400,
		xtype:'combo',
		displayField:'custCode',
		valueField:'custCode',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'90%',
		listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					b.set('blCarrier','');
					b.set('blCarrierName','');
				}
			},
			select:function(c,r,i){						
				b.set('blCarrier',r.get('custId'));
				b.set('blCarrierName',r.get('custNameCn'));
				c.setValue(r.get('custNameCn'));
			},
			keydown:{fn:function(f,e){
				LC(f,e,'custCarrierFlag');
				},buffer:BF
			}
		}
    });
    
    var txtVessel = new Ext.form.TextField({fieldLabel:C_VESS,
    	name:'blVessel',
    	value:b.get('blVessel'),
    	tabIndex:6,
    	xtype:'textfield',
    	anchor:'90%'
    });
    
    var txtVoyage = new Ext.form.TextField({fieldLabel:C_VOYA,
    	name:'blVoyage',
    	value:b.get('blVoyage'),
    	tabIndex:7,
    	anchor:'90%'
    });
    
    var txtTransTerm = new Ext.form.TextField({fieldLabel:C_TTER,
    	name:'blTransTerm',
    	value:b.get('blTransTerm'),
    	tabIndex:8,
    	anchor:'90%'
    });
    
    var txtReceiptPlace = new Ext.form.TextField({fieldLabel:C_RECEIPT_PLACE,
    	name:'blReceiptPlace',
    	value:b.get('blReceiptPlace'),
    	tabIndex:9,
    	anchor:'90%'
    });
    
    var txtPol = new Ext.form.TextField({fieldLabel:C_POL,
    	name:'blPol',
    	value:b.get('blPol'),
    	tabIndex:10,
    	anchor:'90%'
    });
    
    var txtPod = new Ext.form.TextField({fieldLabel:C_POD,
    	name:'blPod',
    	value:b.get('blPod'),
    	tabIndex:11,
    	anchor:'90%'
    });
    
    var txtDeliveryPlace = new Ext.form.TextField({fieldLabel:C_DELIVERY_STATION,
    	name:'blDeliveryPlace',
    	value:b.get('blDeliveryPlace'),
    	tabIndex:12,
    	anchor:'90%'
    });
    
    var txtPot = new Ext.form.TextField({fieldLabel:C_POT,
    	name:'blPot',
    	value:b.get('blPot'),
    	tabIndex:13,
    	anchor:'90%'
    });
    
    var dtLoadDate = new Ext.form.DateField({fieldLabel:C_BL_SHIP_DATE,
    	name:'blLoadDate',
    	value:b.get('blLoadDate'),
    	tabIndex:14,
    	format:DATEF,
    	anchor:'90%'
    });
    
    var dtEtd = new Ext.form.DateField({fieldLabel:C_SAIL_DATE,
    	name:'blEtd',
    	value:b.get('blEtd'),
    	tabIndex:15,
    	format:DATEF,
    	anchor:'90%'
    });
    
    var dtEta = new Ext.form.DateField({fieldLabel:C_ETA,
    	name:'blEta',
    	value:b.get('blEta'),
    	tabIndex:16,
    	format:DATEF,
    	anchor:'90%'
    });
    
    
    var txtCargPackages = new Ext.form.NumberField({fieldLabel:C_PACKAGES,
    	name:'cargPackages',
    	value:b.get('cargPackages'),
    	tabIndex:17,
    	anchor:'90%',
		listeners:{scope:this,
			change:function(f,nv,ov){
				b.set('blPackages',''+nv+b.get('packName'));
				this.find('name','blPackages')[0].setValue(b.get('blPackages'));
				b.set('blTotalSay','SAY TOTAL '+N2EW(nv)+' '+b.get('packName')+' ONLY');
				this.find('name','blTotalSay')[0].setValue(b.get('blTotalSay'));
			}
		}
	});
    
    
    var cboPack = new Ext.form.ComboBox({fieldLabel:C_PACK,
    	tabIndex:18,
    	name:'packId',
    	value:b.get('packId'),
    	xtype:'combo',
    	store:getPACK_S(),
    	displayField:'packName',
    	valueField:'packId',
    	typeAhead: true,
    	mode: 'local',
    	triggerAction: 'all',
    	selectOnFocus:true,
    	anchor:'90%',
		listeners:{scope:this,
			select:function(c,r,i){
				b.set('packName',r.get('packName'));
				b.set('blTotalSay','SAY TOTAL '+N2EW(b.get('blPackages'))+' '+b.get('packName')+' ONLY');
				this.find('name','blTotalSay')[0].setValue(b.get('blTotalSay'));
			}
		}
    });
    
    var cboCargGrossWeight = new Ext.form.NumberField({fieldLabel:C_GW,
    	name:'cargGrossWeight',
    	value:b.get('cargGrossWeight'),
    	tabIndex:19,
    	xtype:'numberfield',
    	allowDecimals:true,
    	decimalPrecision:4,
    	anchor:'90%',
    	listeners:{scope:this,
    		change:function(f,nv,ov){
				b.set('blGrossWeight',''+nv+(p.get('consBizType')=='C'?'KGS':'MT'));
				this.find('name','blGrossWeight')[0].setValue(b.get('blGrossWeight'));
			}
    	}
    });
    
    var cboCargMeasurement = new Ext.form.NumberField({fieldLabel:C_CBM,
    	name:'cargMeasurement',
    	value:b.get('cargMeasurement'),
    	tabIndex:20,
    	xtype:'numberfield',
    	allowDecimals:true,
    	decimalPrecision:4,
    	anchor:'90%',
    	listeners:{scope:this,
    		change:function(f,nv,ov){
				b.set('blMeasurement',''+nv+('CBM'));
				this.find('name','blMeasurement')[0].setValue(b.get('blMeasurement'));
			}
	    }
    });
    
    var txtShipper = new Ext.form.TextArea({fieldLabel:C_SHIPPER,
    	name:'blShipper',
    	value:b.get('blShipper'),
    	tabIndex:21,
    	height:100,
    	anchor:'99%'
    });
    
    var txtConsignee = new Ext.form.TextArea({fieldLabel:C_CONSIGNEE,
    	name:'blConsignee',
    	value:b.get('blConsignee'),
    	tabIndex:22,
    	height:100,
    	anchor:'99%'
    });
    
    var txtNotifyParty = new Ext.form.TextArea({fieldLabel:C_NOTIFIER,
    	name:'blNotifyParty',
    	value:b.get('blNotifyParty'),
    	tabIndex:23,
    	height:100,
    	anchor:'99%'
    });
    
    var txtOverseaAgency = new Ext.form.TextArea({fieldLabel:C_OVERSEA_AGENCY,
    	name:'blOverseaAgency',
    	value:b.get('blOverseaAgency'),
    	tabIndex:24,
    	height:100,
    	anchor:'99%'
    });
    
    var txtMarks = new Ext.form.TextArea({fieldLabel:C_MARKS,
    	name:'blMarks',
    	value:b.get('blMarks'),
    	tabIndex:25,
    	height:100,
    	anchor:'99%'
    });
    
    var txtPackages = new Ext.form.TextArea({fieldLabel:C_NUM_PACK,
    	name:'blPackages',
    	value:b.get('blPackages'),
    	tabIndex:26,
    	height:100,
    	anchor:'99%'
    });
    
    var txtCargoDesc = new Ext.form.TextArea({fieldLabel:C_CATY,
    	name:'blCargoDesc',
    	value:b.get('blCargoDesc'),
    	tabIndex:27,
    	height:100,
    	anchor:'99%'
    });
    
    var txtGrossWeight = new Ext.form.TextArea({fieldLabel:C_GW_S,
    	name:'blGrossWeight',
    	value:b.get('blGrossWeight'),
    	tabIndex:24,
    	height:100,
    	anchor:'99%'
    });
    
    var txtMeasurement = new Ext.form.TextArea({fieldLabel:C_CBM_S,
    	name:'blMeasurement',
    	value:b.get('blMeasurement'),
    	tabIndex:25,
    	height:100,
    	anchor:'99%'
    });
    
    var txtTotalSay = new Ext.form.TextField({fieldLabel:C_TOTAL_SAY,
    	name:'blTotalSay',
    	value:b.get('blTotalSay'),
    	tabIndex:26,
    	xtype:'textfield',
    	anchor:'99%'
    });
    
    /*var txtContainerNo = new Ext.form.TextField({fieldLabel:C_CONTAINER_NO,
    	name:'blContainerNo',
    	value:b.get('blContainerNo'),
    	tabIndex:27,
    	anchor:'99%'
    });
    
    var txtSealNo = new Ext.form.TextField({fieldLabel:C_SEAL_NO,
    	name:'blSealNo',
    	value:b.get('blSealNo'),
    	tabIndex:28,
    	anchor:'99%'
    });*/
    
    var txtContainerSealNo = new Ext.form.TextArea({fieldLabel:C_CONTAINER_SEAL_NO,
    	name:'blContainerSealNo',
    	value:b.get('blContainerSealNo'),
    	tabIndex:28,
    	anchor:'99%'
    });
    
	var t2 = {layout:'column',
		title:C_BL_INFO,
		padding:5,
		layoutConfig: {columns:4},
		deferredRender:false,
		collapsible:true,
		items: [
		    {columnWidth:.25,layout:'form',border:false,
				items:[txtBlNo,cboCarrier,txtReceiptPlace,txtPot,txtCargPackages]
			},
			{columnWidth:.25,layout:'form',border : false,
				items:[txtPrecarriage,txtVessel,txtPol,dtLoadDate,cboPack]
			},
			{columnWidth:.25,layout:'form',border : false,items:[
            	txtPaymentTerm,txtVoyage,txtPod,dtEtd,cboCargGrossWeight]
			},
			{columnWidth:.25,layout:'form',border : false,items:[
                txtPaidAt,txtTransTerm,txtDeliveryPlace,dtEta,cboCargMeasurement]
			},
			
			{columnWidth:.45,layout:'form',border:false,
                items: [txtShipper]
			},                
			{columnWidth:.05,border:false,
				items:[bSaveShipper,bSearchShipper]
			},            
            {columnWidth:.45,layout:'form',border:false,
                items:[txtConsignee]
			},                
			{columnWidth:.05,border:false,
				items:[bSaveConsignee,bSearchConsignee]
			},			
            {columnWidth:.45,layout:'form',border:false,
                items: [txtNotifyParty]
			},                
			{columnWidth:.05,border:false,
				items:[bSaveNotifyParty,bSearchNotifyParty]
			},            
            {columnWidth:.45,layout: 'form',border : false,
                items: [txtOverseaAgency]
			},                
			{columnWidth:.05,border:false,
				items:[bSaveNotifyParty2,bSearchNotifyParty2]
			},
        
            {columnWidth:.3,layout: 'form',border :false,labelAlign:'top',
                items: [txtMarks]
			},
			{columnWidth:.1,layout: 'form',border:false,labelAlign:'top',
                items: [txtPackages]
			},
			{columnWidth:.4,layout: 'form',border:false,labelAlign:'top',
                items: [txtCargoDesc]
			},
			{columnWidth:.1,layout: 'form',border:false,labelAlign:'top',
                items: [txtGrossWeight]
			},
            {columnWidth:.1,layout: 'form',border : false,labelAlign:'top',
                items: [txtMeasurement]
			},
            {columnWidth:.90,layout: 'form',labelAlign: 'left',labelWidth:85,border : false,
                items: [txtTotalSay]
			},
           /* {columnWidth:.90,layout: 'form',labelAlign: 'left',labelWidth:85,border : false,
                items: [txtContainerNo]
			},
            {columnWidth:.90,layout: 'form',labelAlign: 'left',labelWidth:85,border : false,
                items: [txtSealNo]
			},*/
            {columnWidth:.90,layout: 'form',labelAlign: 'left',labelWidth:85,border : false,
                items: [txtContainerSealNo]
			}
        ]};
	
	var cboIsty = new Ext.form.ComboBox({fieldLabel:C_ISTY,
		name:'istyId',
		value:b.get('istyId'),
		store:getISTY_S(),
		tabIndex:50,
		displayField:'istyName',
		valueField:'istyId',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'99%',
		listeners:{scope:this,
			select:function(c,r,i){
				if(i==0)
					this.find('name','blOriginalNum')[0].setValue("THREE");
				else if(i==1)
					this.find('name','blOriginalNum')[0].setValue("ONE");
			}
		}
	});
	
	var txtIssueBy = new Ext.form.TextField({fieldLabel:C_ISSUE_BY,
		name:'blIssueBy',
		value:b.get('blIssueBy'),
		tabIndex:51,
		anchor:'99%'
	});
	
	var txtIssuePlace = new Ext.form.TextField({fieldLabel:C_ISSUE_PLACE,
		name:'blIssuePlace',
		value:b.get('blIssuePlace'),
		tabIndex:52,
		anchor:'99%'
	});
	
	var txtIssueDate = new Ext.form.DateField({fieldLabel:C_ISSUE_DATE,
		name:'blIssueDate',
		value:b.get('blIssueDate'),
		tabIndex:53,
		format:DATEF,
		anchor:'99%'
	});
	
	var chkCleanFlag = new Ext.form.Checkbox({fieldLabel:C_CLEAN_FLAG,
		name:'blCleanFlag',
		value:b.get('blCleanFlag'),
		labelSeparator:'',
		anchor:'99%'
	});
	
	var chkThirdPlaceFlag = new Ext.form.Checkbox({fieldLabel:C_THIRD_PLACE,
		name:'blThirdPlaceFlag',
		value:b.get('blThirdPlaceFlag'),
		labelSeparator:'',
		anchor:'99%'
	});
	
	var chkAdvancedFlag = new Ext.form.Checkbox({fieldLabel:C_ADVANCED_FLAG,
		name:'blAdvancedFlag',
		value:b.get('blAdvancedFlag'),
		labelSeparator:'',
		anchor:'99%'
	});
	
	var chkBackFlag = new Ext.form.Checkbox({fieldLabel:C_BL_BACK_FLAG,
		name:'blBackFlag',
		value:b.get('blBackFlag'),
		labelSeparator:'',
		anchor:'99%'
	});
	
	var txtOriginalNum = new Ext.form.TextField({fieldLabel:C_DOC_ORI_NUM,
		name:'blOriginalNum',
		value:b.get('blOriginalNum'),
		tabIndex:54,
		anchor:'99%'
	});
	
	var txtRemarks = new Ext.form.TextArea({fieldLabel:C_REMARKS,
		name:'blRemarks',
		value:b.get('blRemarks'),
		tabIndex:55,
		anchor:'99%'
	});
	
	var t3={layout:'column',
		title:C_ISSUE_INFO,
		padding:5,
		layoutConfig: {columns:4},
		deferredRender:false,
		collapsible:true,
		height:200,
		items: [
			{columnWidth:.25,layout:'form',labelWidth:80,border : false,items:[cboIsty]},
			{columnWidth:.25,layout:'form',labelWidth:80,border : false,items:[txtIssueBy]},
			{columnWidth:.25,layout:'form',labelWidth:80,border : false,items:[txtIssuePlace]},
			{columnWidth:.25,layout:'form',labelWidth:80,border : false,items:[txtIssueDate]},
			{columnWidth:.25,layout:'form',labelWidth:80,border : false,items:[chkCleanFlag]},
			{columnWidth:.25,layout:'form',labelWidth:80,border : false,items:[chkThirdPlaceFlag]},
			{columnWidth:.25,layout:'form',labelWidth:80,border : false,items:[chkAdvancedFlag]},
			{columnWidth:.25,layout:'form',labelWidth:80,border : false,items:[chkBackFlag]},
			{columnWidth:.25,layout:'form',labelWidth:80,border : false,items:[txtOriginalNum]},
			{columnWidth:.5,layout:'form',labelWidth:80,border : false,items:[txtRemarks]}
		]};			
	
	//发货人
	var txtShipper = new Ext.form.TextArea({fieldLabel:'Shipper`s Name and Adderess',
		name:'blShipper',
		value:b.get('blShipper'),
		tabIndex:1,
		height:100,
		anchor:'99%'
	});
	
	//收货人
	var txtConsignee = new Ext.form.TextArea({
		fieldLabel:'Consignee`s Name and Adderess',
		name:'blConsignee',
		value:b.get('blConsignee'),
		tabIndex:2,
		height:100,
		anchor:'99%'
	});
	
	//承运人
	var txtCarrier = new Ext.form.TextArea({
		fieldLabel:'Issuing Carrier`s Agent Name and City',
		name:'blCarrierName',
		value:b.get('blCarrierName'),
		tabIndex:3,
		height:100,
		anchor:'99%'
	});
	
	//通知人
	var txtNotify = new Ext.form.TextArea({
		fieldLabel:'Also Notify',
		name:'blNotifyParty',
		value:b.get('blNotifyParty'),
        tabIndex:5,
        height:100,
        anchor:'99%'
	});
	
	var txtBlAccountingInfo = new Ext.form.TextArea({
		fieldLabel:'Accounting Infomation',
		name:'blAccountingInfo',
		value:b.get('blAccountingInfo'),
        tabIndex:5,
        height:100,
        anchor:'99%'
	});
		
	//海外代理
	var txtBlHandlingInfo = new Ext.form.TextArea({
		fieldLabel:'Handling Information and Others',
		name:'blHandlingInfo',
		value:b.get('blHandlingInfo'),
        tabIndex:5,
        height:100,
        anchor:'99%'
	});
	
	var t4={layout:'column',
			height:600,
			collapsible:true,
			layoutConfig: {columns:4},
			padding:5,
			autoScroll:true,
			border:false,
			header:false,
			items: [
			{columnWidth:.5,layout:'form',border:false,labelAlign:'top',items: [
				txtShipper,txtCarrier,txtBlAccountingInfo
			]},
			{columnWidth:.5,layout:'form',border:false,labelAlign:'top',items: [        
                txtConsignee,txtNotify,txtBlHandlingInfo
            ]},
            {columnWidth:.25,layout:'form',border : false,labelAlign:'top',items:[
            	{fieldLabel:'AWB MblNo.',name:'mblNo',value:b.get('mblNo'),
            		tabIndex:6,xtype:'textfield',anchor:'99%'},
            	{fieldLabel:'Declared Value for Carriage',name:'blDvCarriage',value:b.get('blDvCarriage'),
            		tabIndex:10,xtype:'textfield',anchor:'99%'}
	        ]},
            {columnWidth:.25,layout:'form',border : false,labelAlign:'top',items:[
				{fieldLabel:'AWB HblNo.',name:'blNo',value:b.get('blNo'),enableKeyEvents:true,
					tabIndex:6,xtype:'textfield',anchor:'99%',
					listeners:{
						scope:this,
						keyup:function(f,e){
							this.find('name','blNo')[0].setValue(this.find('name','blNo')[0].getValue().toUpperCase());
						}
					}
					},
            	{fieldLabel:'Account No.',name:'blAccountNo',value:b.get('blAccountNo'),
            		tabIndex:9,xtype:'textfield',anchor:'99%'}            	
            ]},
            {columnWidth:.25,layout:'form',border : false,labelAlign:'top',items:[
				{fieldLabel:"Agent IATA Code",name:'blAgentIataCode',value:b.get('blAgentIataCode'),
					tabIndex:8,xtype:'textfield',anchor:'99%'},
				{fieldLabel:'Declared Value for Customs',name:'blDvCustoms',value:b.get('blDvCustoms'),
            		tabIndex:11,xtype:'textfield',anchor:'99%'}
             ]},
            {columnWidth:.25,layout:'form',border : false,labelAlign:'top',items:[
				{fieldLabel:'Air Port of Departure',name:'blPol',value:b.get('blPol'),
					tabIndex:7,xtype:'textfield',anchor:'99%'}                                                                    
            ]},
             {columnWidth:.1,layout:'form',border:false,labelAlign:'top',items:[
             {fieldLabel:'To',name:'blToFirst',value:b.get('blToFirst'),
             	tabIndex:12,xtype:'textfield',anchor:'99%'}
             ]},
             {columnWidth:.2,layout:'form',border : false,labelAlign:'top',items:[
             {fieldLabel:'By First Carrier',name:'blByFirst',value:b.get('blByFirst'),
             	tabIndex:13,xtype:'textfield',anchor:'99%'}
             ]},
             {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
             {fieldLabel:'To',name:'blToSecond',value:b.get('blToSecond'),
             	tabIndex:14,xtype:'textfield',anchor:'99%'}
             ]},
             {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
             {fieldLabel:'By',name:'blBySecond',value:b.get('blBySecond'),
             	tabIndex:15,xtype:'textfield',anchor:'99%'}
             ]},
             {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
             {fieldLabel:'To',name:'blToThird',value:b.get('blToThird'),
             	tabIndex:16,xtype:'textfield',anchor:'99%'}
             ]},
             {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
             {fieldLabel:'By',name:'blByThird',value:b.get('blByThird'),
             	tabIndex:17,xtype:'textfield',anchor:'99%'}
             ]},
             {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
             {fieldLabel:'Currency',name:'currCode',value:b.get('currCode'),
             	tabIndex:18,
             	store:getCURR_S(),xtype:'combo',displayField:'currCode',
             	valueField:'currCode',typeAhead: true,mode:'remote',triggerAction: 'all',selectOnFocus:true,anchor:'99%'}
             ]},
             {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
             {fieldLabel:'Weight/VAL',name:'blValuePayment',value:b.get('blValuePayment'),
                store:PAYTYPE_S,displayField:'NAME',valueField:'NAME',typeAhead:true,
                triggerAction:'all',selectOnfocus:true,mode:'local',
             	tabIndex:19,xtype:'combo',anchor:'99%',
             	listeners:{
             		scope:this,
             		select:function(c,r,i){
             			if(r.get('NAME')=="PP"){
             				this.find('name','blRemarks')[0].setValue('AS ARRANGED');
             				this.find('name','blTotalCc')[0].setValue('');
             			}
             			else{
             				this.find('name','blTotalPp')[0].setValue('');
             				this.find('name','blRemarks')[0].setValue('');
             			}
             		}
             	}
             	}
             ]},
             {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
             {fieldLabel:'Other',name:'blOtherPayment',value:b.get('blOtherPayment'),
                store:PAYTYPE_S,displayField:'NAME',valueField:'NAME',typeAhead:true,
                triggerAction:'all',selectOnfocus:true,mode:'local',
             	tabIndex:20,xtype:'combo',anchor:'80%'}
             ]},
             {columnWidth:.2,layout:'form',border : false,labelAlign:'top',items:[
             {fieldLabel:'Air Port of Destination',name:'blPod',value:b.get('blPod'),
             	tabIndex:21,xtype:'textfield',anchor:'99%'}
             ]},
             {columnWidth:.2,layout:'form',border : false,labelAlign:'top',items:[
             {fieldLabel:'Flight',name:'blVoyage',value:b.get('blVoyage'),
             	tabIndex:22,xtype:'textfield',anchor:'99%'}
             ]},
             {columnWidth:.2,layout:'form',border : false,labelAlign:'top',items:[
             {fieldLabel:'Date',name:'blEtd',value:b.get('blEtd'),
             	tabIndex:23,xtype:'datefield',format:DATEF,anchor:'99%'}
             ]},
             {columnWidth:.2,layout:'form',border : false,labelAlign:'top',items:[
             {fieldLabel:'Amount of Insurance',name:'blAmountInsurance',value:b.get('blAmountInsurance'),
             	tabIndex:24,xtype:'textfield',anchor:'99%'}
             ]},
             {columnWidth:.2,layout:'form',border : false,labelAlign:'top',items:[
             {fieldLabel:'T/S Remarks',name:'blTsRemarks',value:b.get('blTsRemarks'),
             	tabIndex:25,xtype:'textfield',anchor:'99%'}              
             ]}
         ]};
   //货物信息
    var t5={layout:'column',
    		title:C_CARGO_INFO,
    		padding:5,
    		layoutConfig: {columns:4},
    		collapsible:true,
    		autoScroll:true,
    		height:215,
			items: [
			 {columnWidth:.2,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'No of Packages',name:'blPackages',value:b.get('blPackages'),
            	tabIndex:27,xtype:'numberfield',anchor:'99%'}
            ]},
            {columnWidth:.15,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'Gross Weight',name:'blGrossWeight',value:b.get('blGrossWeight'),
            	tabIndex:28,xtype:'numberfield',allowDecimals:true,decimalPrecision:4,anchor:'99%'}
            ]},  
            {columnWidth:.15,layout:'form',border : false,labelAlign:'top',items:[
	         {fieldLabel:'Measurement',name:'blMeasurement',value:b.get('blMeasurement'),
	         	tabIndex:28,xtype:'numberfield',allowDecimals:true,decimalPrecision:4,anchor:'99%'}
	         ]},
            {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'Rate Class',name:'blRateClass',value:b.get('blRateClass'),
            	tabIndex:29,xtype:'textfield',anchor:'99%'}
            ]},
            {columnWidth:.2,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'Chargeable Weight',name:'blChargeWeight',value:b.get('blChargeWeight'),
            	tabIndex:30,xtype:'numberfield',allowDecimals:true,decimalPrecision:4,anchor:'99%'}
            ]},
            {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'Rate',name:'blChargeRate',value:b.get('blChargeRate'),
            	tabIndex:31,xtype:'numberfield',allowDecimals:true,decimalPrecision:4,anchor:'99%',
            	listeners:{
            		scope:this,
            		change:function(f,n,o){
            			var r = this.find('name','blChargeWeight')[0].getValue();
            			var t = this.find('name','blTotalCharge')[0];
            			var ct = this.find('name','blTotalCc')[0];
            			var p = this.find('name','blValuePayment')[0].getValue();
            			t.setValue(r*n);
            			if(p=="CC")
            				ct.setValue(r*n);
            		}
            	}
            	}
            ]},
            {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'Total',name:'blTotalCharge',value:b.get('blTotalCharge'),
            	tabIndex:32,xtype:'numberfield',anchor:'99%'}
            ]},
			{columnWidth:.5,layout:'form',border:false,labelAlign:'top',
                items: [{fieldLabel:"Description of Goods",name:'blCargoDesc',value:b.get('blCargoDesc'),
                	tabIndex:33,xtype:'textarea',height:100,anchor:'99%'}]},
            {columnWidth:.5,layout:'form',border:false,labelAlign:'top',
                items: [{fieldLabel:"Mark",name:'blMarks',value:b.get('blMarks'),
                	tabIndex:33,xtype:'textarea',height:100,anchor:'99%'}]}
			]};
    
	var t6={layout:'column',
			title:C_EXPE_INFO,
			padding:5,
			layoutConfig: {columns:2},
			collapsible:true,
			autoScroll:true,
			height:215,
			items: [
			{columnWidth:.6,layout:'column',layoutConfig: {columns:2},labelWidth:220,border:false,items:[ 
			   
            	{columnWidth:.7,layout:'form',labelWidth:200,labelAlign:'right',border:false,items:[
            		{hideLabels:true,text:'Prepaid',xtype:'label',anchor:'99%',style:'padding-left:226px;'},
            		{fieldLabel:'Weight Charge',name:'blWeightChargePp',value:b.get('blWeightChargePp'),
            			tabIndex:34,xtype:'numberfield',anchor:'99%'},
            		{fieldLabel:'Valuation Charge',name:'blValuationChargePp',value:b.get('blValuationChargePp'),
            			tabIndex:36,xtype:'numberfield',anchor:'99%'},
            		{fieldLabel:'Tax',name:'blTaxPp',value:b.get('blTaxPp'),tabIndex:38,xtype:'numberfield',anchor:'99%'},
            		{fieldLabel:'Total Other Charges Due Agent',name:'blOtherDaPp',value:b.get('blOtherDaPp'),
            			tabIndex:40,xtype:'numberfield',anchor:'99%'},
            		{fieldLabel:'Total Other Charges Due Carrier',name:'blOtherDcPp',value:b.get('blOtherDcPp'),
            			tabIndex:42,xtype:'numberfield',anchor:'99%'},
            		{fieldLabel:'Total',name:'blTotalPp',value:b.get('blTotalPp'),
            			tabIndex:44,xtype:'textfield',anchor:'99%'}]},
            			
            	{columnWidth:.3,layout:'form',border:false,hideLabels:true,items:[
            		{text:'Collect:',xtype:'label',anchor:'99%'},
            		{name:'blWeightChargeCc',value:b.get('blWeightChargeCc'),
            			tabIndex:35,xtype:'numberfield',anchor:'99%'},
            		{name:'blValuationChargeCc',value:b.get('blValuationChargeCc'),
            			tabIndex:37,xtype:'numberfield',anchor:'99%'},
            		{name:'blTaxCc',value:b.get('blTaxCc'),tabIndex:39,xtype:'numberfield',anchor:'99%'},
            		{name:'blOtherDaCc',value:b.get('blOtherDaCc'),
            			tabIndex:41,xtype:'numberfield',anchor:'99%'},
            		{name:'blOtherDcCc',value:b.get('blOtherDcCc'),
            			tabIndex:43,xtype:'numberfield',anchor:'99%'},
            		{name:'blTotalCc',value:b.get('blTotalCc'),
            			tabIndex:45,xtype:'numberfield',anchor:'99%'}]}
            ]},           
            {columnWidth:.4,layout:'form',border:false,labelAlign:'top',
                items: [{fieldLabel:"Other Charges",name:'consChargeRemarks',value:b.get('consChargeRemarks'),tabIndex:46,xtype:'textarea',height:100,anchor:'99%'}]}
			]};
	
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_BL;
	
	this.updateToolBar = function(s){	
		btnSave.setDisabled(NR(m+F_M)||b.get('blStatus')>1);		
		btnConfirm.setDisabled(NR(m+F_M)||b.get('blStatus')>1);    	
		btnCancel.setDisabled(NR(m+F_M)||b.get('blStatus')!=2);    	
		btnPrintOfficial.setDisabled(NR(m+F_M)||b.get('blStatus')!=2);      	
		btnRelease.setDisabled(NR(m+F_M)||b.get('blStatus')!=3);    	
		txtStatus.setText(C_STATUS+'：'+getBLST(b.get('blStatus')));
    };
    
    
    var btnSave = new Ext.Button({text:C_SAVE,
    	iconCls:'save',
    	disabled:NR(m+F_M)||b.get('blStatus')>1,
    	scope:this,
    	handler:this.save
    });
    
    var btnConfirm = new Ext.Button({text:C_CONFIRM,
    	iconCls:'check',
    	disabled:NR(m+F_M)||b.get('blStatus')>1,
    	scope:this,
    	handler:this.check
    });
    
    var btnCancel = new Ext.Button({text:C_CANCEL_CONFIRM,
    	iconCls:'renew',
    	disabled:NR(m+F_M)||b.get('blStatus')!=2,
    	scope:this,
    	handler:this.uncheck
    });
    
    var btnPrintOfficial = new Ext.Button({text:C_PRINT_OFFICIAL,
    	disabled:NR(m+F_M)||b.get('blStatus')!=2,iconCls:'star',
    	scope:this,
    	handler:this.printOffical
    });
    
    var btnRelease = new Ext.Button({text:C_BL_RELEASE,
    	disabled:NR(m+F_M)||b.get('blStatus')!=2,
    	iconCls:'release',
    	scope:this,
    	handler:this.release
    });
    
    var btnCopyFrom = new Ext.Button({text:C_COPY_FROM,
    	iconCls:'copy',
    	disabled:NR(m+F_M),
    	scope:this,
    	handler:this.copyFrom
    });
    
    var btnExport = new Ext.Button({text:C_EXPORT,
    	iconCls:'print',
    	disabled:NR(m+F_E),
    	scope:this,
		menu: {items: [
	   		{text:C_BL_CONFIRM,menu:{items:[
	   			{text:'Excel',scope:this,handler:this.expExcel},
	   			{text:C_EMAIL,scope:this,handler:this.expEmail}
	   		]}},
	   		{text:M_BOOK,scope:this,handler:this.genCons},
	   		{text:M_CONSIGN,scope:this,handler:this.expExcel1}
	   		]}
    });
    
    var txtStatus =  new Ext.Toolbar.TextItem({
		disabled:true,
		text:C_STATUS+'：'+getBLST(b.get('blStatus'))
    });
    
	var frm = new Ext.Panel({
		plain:true,
		height:500,
		autoScroll:true,		
        items:p.get('consBizType')==BT_A?[t4,t5,t6,t3]:[t2,t3],
		tbar:[btnSave,'-',btnConfirm,'-',btnCancel,'-',btnPrintOfficial,'-',		
		      btnRelease,'-',btnCopyFrom,'-',btnExport,'->',txtStatus
		   	]
	});
		
    Fos.BlWin.superclass.constructor.call(this, {title:C_BL_INFO,
    	modal:true,
    	width:1000,
    	height:580,
    	autoScroll:true,
    	maximizable:true,
    	layout:'fit',
        plain:false,
        bodyStyle:'padding:2px;',
        items:frm
    });
};
Ext.extend(Fos.BlWin, Ext.Window);