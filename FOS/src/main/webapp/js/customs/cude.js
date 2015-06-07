//关务 - 报关
Fos.CustomsGrid = function(bizClass) {
	var queryParams=[];
	queryParams[queryParams.length]=new QParam({key:'consBizType',value:BT_G,op:1});
	queryParams[queryParams.length]=new QParam({key:'consBizClass',value:bizClass,op:1});
	var bp={mt:'xml',xml:FOSX(QTX(queryParams))};
	
	var store = new Ext.data.GroupingStore({
   		url: SERVICE_URL+'?A=CONS_X',baseParams:bp,
    	reader:new Ext.data.XmlReader({totalProperty:'rowCount',
    		record:'FConsign',idProperty:'consId'}, FConsign),remoteSort:true,
    	sortInfo:{field:'consDate', direction:'DESC'}});    	
	
	this.reset=function(){
		store.baseParams=bp;
		store.reload({params:{start:0,limit:C_PS}});
	};
	
	var sm=new Ext.grid.RowSelectionModel({singleSelect:true});	
	var c1=new Ext.grid.RowNumberer();    
    var cm=new Ext.grid.ColumnModel({columns:[
        c1,
        {header:'',dataIndex:'consStatusLock',menuDisabled:true,fixed:true,width:25,renderer:function(v){
            if(v==1) return '<div class="locked"></div>'; else return '';
        }},
        {header:C_STATUS,width:60,dataIndex:"consStatus",renderer:getTRADE_S},
        {header:C_CONS_NO,width:120,dataIndex:"consNo"},
        {header:C_CONS_DATE,width:100,dataIndex:"consDate",renderer:formatDate},
        {header:C_CARGO_NAME_CN_EN,width:150,dataIndex:"consCargoNameEn"},        
        {header:C_BOOKER,width:200,dataIndex:"custName"},
        {header:C_BIZ_COMPANY,width:200,dataIndex:"consCompany"},
        {header:C_VESS,width:120,dataIndex:"vessName"},
        {header:C_VOYA,width:60,dataIndex:"voyaName"},
        {header:C_CONTRACT_NO,dataIndex:"consContractNo"},
        {header:C_M_BL_NO,width:120,dataIndex:"consMblNo"},
        {header:C_CONT_INFO,width:80,dataIndex:"consContainersInfo",renderer:nullRender},
        {header:C_POL,dataIndex:"consPolEn"},
        {header:C_POD,width:100,dataIndex:"consPodEn"},        
        {header:C_CUSTOMS_DECLEAR_DATE,width:100,dataIndex:"consCustomsDeclearDate",renderer:formatDate},
        {header:C_CONS_CLOSE_DATE,width:100,dataIndex:"consCloseDate",renderer:formatDate},
      	{header:C_POL,width:100,dataIndex:"consPolEn"},
   		{header:C_POD,width:100,dataIndex:"consPodEn"},
        
        {header:C_PACKAGES,width:60,dataIndex:"consTotalPackages"},
        {header:C_GW_S,width:60,dataIndex:"consTotalGrossWeight"},
        
        {header:C_CUSTOMS_DECLEARATION_NO,width:120,dataIndex:"consCustomsDeclearationNo"},        
        {header:C_OPERATOR,width:80,dataIndex:"consOperatorName"},
        {header:C_SALES,width:80,dataIndex:"consSalesRepName"}
        ],
		defaults: {sortable: true}});
	
    showCustomsConsign = function(p){
    	var t = T_MAIN.getComponent('P_CONS_'+p.get("id"));
    	if(t){
    		T_MAIN.setActiveTab(t);
    	} 
    	else{
    		t = new Fos.CudeConsignPanel(p,store);
    		T_MAIN.add(t);
    		T_MAIN.setActiveTab(t);
    	}
    };
    
	this.newConsign = function(){
		var c = Fos.newConsign(bizClass,BT_G,'');
		showCustomsConsign(c);
	};
	
	this.editConsign = function(){
		var b=sm.getSelected();
		if(b) 
			showCustomsConsign(b); 
		else 
			XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	
	this.task = function(){
		var b=sm.getSelected();
		if(b){
			var w=new Fos.TaskWin(b);
			w.show();
		}
		else 
			XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	
	this.removeConsign = function(){
		var a =sm.getSelections();
       	if(a.length){
       		XMG.confirm(SYS,M_R_C,function(btn){
	           	if(btn=='yes'){
	           		var b = false;
	               	for(var i=0;i<a.length;i++){if(a[i].get('consStatus')!='0'){b=true;break;}}
	               	if(b) XMG.alert(SYS,M_CONS_CONFIRMED);
	               	else {
	               		var xml = SMTX4R(sm,'FConsign','consId');
	               		Ext.Ajax.request({url:SERVICE_URL,
	               			method:'POST',
	               			params:{A:'CONS_S'},
							success: function(){
								sm.each(function(p){
									store.remove(p);
								});
								XMG.alert(SYS,M_S);
							},
							failure: function(r,o){
								XMG.alert(SYS,M_F+r.responseText);
							},
							xmlData:FOSX(xml)
						});
	               	}
	           }
           });
		}
       	else XMG.alert(SYS,M_R_P);
    };
    
    setQueryParams=function(a){
    	queryParams = a;
    };
    
	this.search = function(){
		var w=new Fos.CustomsConsLookupWin(store,setQueryParams,bizClass);
		w.show();
	};
	
	var kw = new Ext.form.TextField({listeners:{scope:this,specialkey:function(c,e){
		if(e.getKey()==Ext.EventObject.ENTER) this.fastSearch();}}
	});
	
	this.fastSearch=function(){
		var consNo=kw.getValue();
		if(!consNo){
			XMG.alert(SYS,M_INPUT_BIZ_NO,function(b){kw.focus();});
			return;
		}
     	var a=[];     	
     	a[a.length]=new QParam({key:'consBizType',value:BT_G,op:EQ});
     	
     	var c=consNo.indexOf(',');
		var b=consNo.indexOf('..');
     	if(c>=0){
			a[a.length]=new QParam({key:'consNo',value:consNo,op:IN});
		}
		else if(b>=0){
			var ra=consNo.split('..');
			a[a.length]=new QParam({key:'consNo',value:ra[0],op:GE});
			a[a.length]=new QParam({key:'consNo',value:ra[1],op:LE});
		}
		else
 			a[a.length]=new QParam({key:'consNo',value:consNo,op:LI});
     	
     	queryParams = a;
     	store.baseParams.xml=FOSX(QTX(queryParams));
     	store.reload({params:{start:0,limit:C_PS},
     		callback:function(r){
     			if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);
     		}
     	});
	};
	
	this.exp1=function(){		
		if(queryParams.length>0){
			var a = queryParams;
			var qa = [];
			for(var i=0;i<a.length;i++){
				qa[i] = {key:a[i].get('key'),op:a[i].get('op'),value:a[i].get('value')};
			}
			EXPC('CUSTOMS_DOC_STAT','&mt=JSON&xml='+Ext.util.JSON.encode(FOSJ(QTJ(qa))));
		}
		else{		
			EXPC('CUSTOMS_DOC_STAT','&mt=JSON&start=0&limit=500');
		}		
	};
	
	this.exp2=function(){		
		if(queryParams.length>0){
			var a = queryParams;
			var qa = [];
			for(var i=0;i<a.length;i++){
				qa[i] = {key:a[i].get('key'),op:a[i].get('op'),value:a[i].get('value')};
			}
			EXPC('CONS_LIST','&mt=JSON&xml='+Ext.util.JSON.encode(FOSJ(QTJ(qa))));
		}
		else{		
			EXPC('CONS_LIST','&mt=JSON&start=0&limit=500');
		}		
	};
	
	var m=M1_G+M3_CONS;
	
	var b1={text:C_ADD,disabled:NR(m+F_M),iconCls:'add',scope:this,handler:this.newConsign};
	var b3={text:C_EDIT,disabled:NR(m+F_V),iconCls:'option',handler:this.editConsign};
	var b4={text:C_REMOVE,disabled:NR(m+F_R),iconCls:'remove',handler:this.removeConsign};
	var b5={text:C_SEARCH,iconCls:'search',handler:this.search};	
	var b6={text:C_EXPORT,disabled:NR(m+F_E),iconCls:'print',scope:this,menu: 
		{items: [{text:C_CUSTOMS_STAT,scope:this,handler:this.exp1},{text:C_CUSTOMS_LIST,scope:this,handler:this.exp2}]}};	
	var b7={text:C_FAST_SEARCH,iconCls:'search',handler:this.fastSearch};	
	var b8={text:C_RESET,iconCls:'refresh',handler:this.reset};
			
    var tbs=[b1, '-',b3,'-',b4,'-',b5,'-',b6,'-',kw,b7,'-',b8,'-'];
       
    var gv = new Ext.grid.GridView({forceFit:false,
		getRowClass:function(row,idx) {			
			if(row.data.consStatus==2)
				return 'green-row';
			if(row.data.consStatus==3)
				return 'grey-font-row';
		}
	});
    
	Fos.CustomsGrid.superclass.constructor.call(this, {
		id:'G_CONS_G_'+bizClass,
		title:(bizClass=='I'?C_IMP_CUDE:C_EXP_CUDE)+C_CONS_LIST,
		iconCls:'grid',
		store: store,		
		header:false,
		loadMask:true,
		view:gv,
		sm:sm,
		cm:cm,
		stripeRows:true,
		closable:true,
		listeners:{
			rowdblclick: function(grid, rowIndex, event){
				var c=grid.getSelectionModel().getSelected();
				if(c){
					showCustomsConsign(c);
				}
			}
		},
		tbar:tbs,
		bbar:PTB(store,C_PS)
	});	
	
    store.load({params:{start:0,limit:C_PS}});
};
Ext.extend(Fos.CustomsGrid, Ext.grid.GridPanel);



Fos.CustomsConsLookupWin = function(store,setQueryParams,bizClass){    
	
		
	//委托单位
    var cboBooker = new Fos.CustomerLookup({fieldLabel:C_BOOKER,
    	custType:'custBookerFlag',
    	name:'custId',
    	store:getCS(),
		displayField:'custCode',
		valueField:'custId',
		typeAhead:true,
		enableKeyEvents:true,
		mode:'local',
		tpl:custTpl,
		itemSelector:'div.list-item',
		listWidth:400,
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'90%',
      	listeners:{
      		scope:this,
      		keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:500}
      	}
    });
    
  //经营单位
	var cboConsCompany = new Fos.CustomerLookup({fieldLabel:C_BIZ_COMPANY,
		name:'consCompany',
		displayField:'custCode',
		valueField:'custNameCn',
		typeAhead:true,
  		store:getCS(),
  		enableKeyEvents:true,
		mode:'local',
		tpl:custTpl,
		itemSelector:'div.list-item',
		listWidth:C_LW,
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'90%',
	    listeners:{
	    	scope:this, 	 			     	
	     	select:function(c,r,i){ 	 			     		
	     		c.setValue(r.get('custNameCn'));
	     	},
	     	keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:BF}
	     }
	});
    
	//操作
	var cboOperator = new Ext.form.ComboBox({fieldLabel:C_OPERATOR,
		name:'consOperatorId',
		store:getOP_S(),
      	displayField:'userLoginName',
      	valueField:'userId',
      	typeAhead: true,
      	mode: 'local',
      	triggerAction: 'all',
      	selectOnFocus:true,
      	anchor:'90%'
    });
	
	//业务员
	var cboSalesRep = new Ext.form.ComboBox({fieldLabel:C_SALES,
		name:'consSalesRepId',
		store:getSALE_S(),
      	displayField:'userLoginName',
      	valueField:'userId',
      	typeAhead: true,
      	mode: 'local',
      	triggerAction: 'all',
      	selectOnFocus:true,
      	anchor:'90%'
    });
	
	//
	var cboStatusAud = new Ext.form.ComboBox({fieldLabel:C_CONS_AUDIT_STATUS,
		name:'consStatusAud',
      	store:AUST_S,
      	displayField:'NAME',
      	valueField:'CODE',
      	typeAhead: true,
      	mode:'local',
      	triggerAction:'all',
      	selectOnFocus:true,
      	anchor:'90%'
    });
	
	var cboStatusAr = new Ext.form.ComboBox({fieldLabel:C_WRITEOFF_STATUS_R,
		name:'consStatusAr',
      	store:WRST_S,
      	displayField:'NAME',
      	valueField:'CODE',
      	typeAhead: true,
      	mode:'local',
      	triggerAction:'all',
      	selectOnFocus:true,
      	anchor:'90%'
    });
	
	var cboStatusAp = new Ext.form.ComboBox({fieldLabel:C_WRITEOFF_STATUS_P,
		name:'consStatusAp',
		store:WRST_S,
		displayField:'NAME',
		valueField:'CODE',
		typeAhead: true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'90%'
	});
	
	var txtTotalPackages = new Ext.form.TextField({fieldLabel:C_PACKAGES,
		name:'consTotalPackages',
		anchor:'90%'
	});
	
	var txtTotalGrossWeight = new Ext.form.TextField({fieldLabel:C_GW_S,
		name:'consTotalGrossWeight',
		anchor:'90%'
	});
	
	var dtDeliveryDate = new Ext.form.DateField({fieldLabel:C_DELIVERY_DATE,
		name:'consDeliveryDate',
		format:DATEF,
		anchor:'90%'
	});
	
	//海关商检日期
	var dtCustomsInspectionDate = new Ext.form.DateField({fieldLabel:C_CUSTOMS_INSPECTION,
		tabIndex:13,
		name:'consTrackLoadDate',
		format:DATEF,
		anchor:'90%'
	});
	
	
	
	var dtConsDate = new Ext.form.DateField({fieldLabel:C_CONS_DATE,
		name:'consDate',
		format:DATEF,
		anchor:'90%'
	});
	
	var dtCloseDate = new Ext.form.DateField({fieldLabel:C_CONS_CLOSE_DATE,
		name:'consCloseDate',
		format:DATEF,
		anchor:'90%'
	});
	
	var dtCustomsDeclearDate = new Ext.form.DateField({fieldLabel:C_CUSTOMS_DECLEAR_DATE,
		name:'consCustomsDeclearDate',
		format:DATEF,
		anchor:'90%'
	});
	
	var txtVerificationNo = new Ext.form.TextField({fieldLabel:C_VERIFICATION_NO,
		name:'consVerificationNo',
		anchor:'90%'
	});
	
	var txtMblNo = new Ext.form.TextField({fieldLabel:C_TRAFFIC_NO,
		name:'consMblNo',
		anchor:'90%'
	});
	
	
	
	var cboStatusInvoR = new Ext.form.ComboBox({fieldLabel:C_INVO_STATUS_R,
		name:'consStatusInvoR',
		store:INST_S,
		displayField:'NAME',
		valueField:'CODE',
		typeAhead: true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'90%'
	});
	
	var cboStatusInvoP = new Ext.form.ComboBox({fieldLabel:C_INVO_STATUS_P,
		name:'consStatusInvoP',
 		store:INST_S,
 		displayField:'NAME',
 		valueField:'CODE',
 		typeAhead: true,
 		mode:'local',
 		triggerAction:'all',
 		selectOnFocus:true,
 		anchor:'90%'
 	});
	
	var dtLoadDate = new Ext.form.DateField({fieldLabel:C_EXCHANGE_DATE,
		name:'consLoadDate',
		format:DATEF,
		anchor:'90%'
	});
	
	
	var dtExpiryDate = new Ext.form.DateField({fieldLabel:C_THREE_INSPECTION,
		name:'consExpiryDate',
     	format:DATEF,
     	anchor:'90%'
     });
	
	var dtDeliveryDate2 = new Ext.form.DateField({fieldLabel:C_TO,
		name:'consDeliveryDate2',
		format:DATEF,
		anchor:'90%'
	});
	
	var dtCustomsInspectionDate2 = new Ext.form.DateField({fieldLabel:C_TO,
		name:'consTrackLoadDate2',
		format:DATEF,
		anchor:'90%'
	});
	
	
	//商检日期
	var dtInspectionDate = new Ext.form.DateField({fieldLabel:C_DATE_OF_INSPECTION,
		tabIndex:13,
		name:'consContainerLoadDate',
		format:DATEF,
		anchor:'90%'
	});
	
	var dtInspectionDate2 = new Ext.form.DateField({fieldLabel:C_TO,
		name:'consContainerLoadDate2',
		format:DATEF,
		anchor:'90%'
	});
		 
	var dtConsDate2 = new Ext.form.DateField({fieldLabel:C_TO,
		name:'consDate2',
		format:DATEF,
		anchor:'90%'
	});
	
	
	var dtCloseDate2 = new Ext.form.DateField({fieldLabel:C_TO,
		name:'consCloseDate2',
		format:DATEF,
		anchor:'90%'
	});
	
	var dtCustomsDeclearDate2 = new Ext.form.DateField({fieldLabel:C_TO,
		name:'consCustomsDeclearDate2',
		format:DATEF,
		anchor:'90%'
	});
	
	var txtRefNo = new Ext.form.TextField({fieldLabel:C_REF_NO,
		name:'consRefNo',
		anchor:'90%'
	});
	
 	
	var cboStatusExp = new Ext.form.ComboBox({fieldLabel:C_EXPE_CONFIRM_STATUS,
		name:'consStatusExp',
 		store:EXPC_S,
 		displayField:'NAME',
 		valueField:'CODE',
 		typeAhead: true,
 		mode:'local',
 		triggerAction:'all',
 		selectOnFocus:true,
 		anchor:'90%'
 	});
	
 		
	var txtVessName = new Ext.form.TextField({fieldLabel:C_VESS,
		name:'vessName',
		anchor:'90%'
	});
 	
	var txtVoyaName = new Ext.form.TextField({fieldLabel:C_VOYA,
		name:'voyaName',
		anchor:'90%'
	});
 	
	var dtLoadDate2= new Ext.form.DateField({fieldLabel:C_TO,
		name:'consLoadDate2',
		format:DATEF,
		anchor:'90%'
	});
			
			
	var dtExpiryDate2 = new Ext.form.DateField({fieldLabel:C_TO,
		name:'consExpiryDate2',
 		format:DATEF,
 		anchor:'90%'
     });
     
	var txtCargoName = new Ext.form.TextField({fieldLabel:C_CARGO_NAME,
		name:'consCargoNameEn',
		anchor:'90%'
	});
	
	var panel = new Ext.Panel({plain:true,
		height:340,
		layout:'column',
		padding:10,
		items:
			[{columnWidth:.33,
				layout:'form',
				border:false,
				labelWidth:80,
				labelAlign:"right",
				items:[cboBooker,cboConsCompany,cboOperator,cboSalesRep,cboStatusAud,
				       cboStatusAr,cboStatusAp,txtTotalPackages,txtTotalGrossWeight,
				       cboStatusInvoR,
				       txtVessName,txtCargoName
			]},
				       
			{columnWidth:.33,
				layout:'form',
				border:false,
				labelWidth:80,
				labelAlign:"right",
				items:[dtConsDate,dtCloseDate,dtCustomsDeclearDate,dtLoadDate,dtExpiryDate,dtDeliveryDate,dtCustomsInspectionDate,dtInspectionDate,
				       txtVerificationNo,cboStatusInvoP,txtVoyaName
			]},
			
			{columnWidth:.34,
				layout:'form',
				border:false,
				labelWidth:80,
				labelAlign:"right",
				items:[dtConsDate2,dtCloseDate2,dtCustomsDeclearDate2,dtLoadDate2,dtExpiryDate2,dtDeliveryDate2,dtCustomsInspectionDate2,dtInspectionDate2,
				       txtMblNo,cboStatusExp,txtRefNo,
			]}
		]
	});
	
	
	this.reload=function(){
     	var a=[];
     	var op=1;
     	
     	a[a.length] = new QParam({key:'consBizType',value:BT_G,op:1});
     	a[a.length] = new QParam({key:'consBizClass',value:bizClass,op:1});
     	
 		var custId = cboBooker.getValue();
 		if(custId) 
 			a[a.length] = new QParam({key:'custId',value:custId,op:op}); 
 		
 		var consCompany = cboConsCompany.getValue();        		
 		if(consCompany) 
 			a[a.length] = new QParam({key:'consCompany',value:consCompany,op:op});
 		
 		var consSalesRepId = cboSalesRep.getValue();        		
 		if(consSalesRepId) 
 			a[a.length] = new QParam({key:'consSalesRepId',value:consSalesRepId,op:op});
 		
 		var consOperatorId = cboOperator.getValue();        		
 		if(consOperatorId) 
 			a[a.length] = new QParam({key:'consOperatorId',value:consOperatorId,op:op});
 		
 		var consDate = dtConsDate.getValue();
 		var consDate2 = dtConsDate2.getValue();
 		if(consDate && consDate2){
 			a[a.length] = new QParam({key:'consDate',value:consDate.format(DATEF),op:5});
 			a[a.length] = new QParam({key:'consDate',value:consDate2.format(DATEF),op:3});
 		}
 		else if(consDate) 
 			a[a.length]=new QParam({key:'consDate',value:consDate.format(DATEF),op:op});
 		
 		var consCloseDate = dtCloseDate.getValue();
 		var consCloseDate2 = dtCloseDate2.getValue();
 		if(consDate && consCloseDate2){
 			a[a.length] = new QParam({key:'consCloseDate',value:consCloseDate.format(DATEF),op:5});
 			a[a.length] = new QParam({key:'consCloseDate',value:consDate2.format(DATEF),op:3});
 		}
 		else if(consCloseDate) 
 			a[a.length] = new QParam({key:'consCloseDate',value:consCloseDate.format(DATEF),op:op});
 		
 		var consCustomsDeclearDate = dtCustomsDeclearDate.getValue();
 		var consCustomsDeclearDate2 = dtCustomsDeclearDate2.getValue();
 		if(consCustomsDeclearDate && consCustomsDeclearDate2){
 			a[a.length] = new QParam({key:'consCustomsDeclearDate',value:consCustomsDeclearDate.format(DATEF),op:5});
 			a[a.length] = new QParam({key:'consCustomsDeclearDate',value:consCustomsDeclearDate2.format(DATEF),op:3});
 		}
 		else if(consCustomsDeclearDate) 
 			a[a.length] = new QParam({key:'consCustomsDeclearDate',value:consCustomsDeclearDate.format(DATEF),op:op});
 		
 		var consVerificationNo = txtVerificationNo.getValue();        		
 		if(consVerificationNo) 
 			a[a.length]=new QParam({key:'consVerificationNo',value:consVerificationNo,op:op});
 		
 		var consRefNo = txtRefNo.getValue();        		
 		if(consRefNo) 
 			a[a.length]=new QParam({key:'consRefNo',value:consRefNo,op:op});
 		
 		var consStatusAud = cboStatusAud.getValue();        		
 		if(consStatusAud) 
 			a[a.length] = new QParam({key:'consStatusAud',value:consStatusAud,op:op});
 		
 		var consStatusAr = cboStatusAr.getValue();        		
 		if(consStatusAr) 
 			a[a.length] = new QParam({key:'consStatusAr',value:consStatusAr,op:op});
 		
 		var consStatusAp = cboStatusAp.getValue();        		
 		if(consStatusAp) 
 			a[a.length] = new QParam({key:'consStatusAp',value:consStatusAp,op:op});
 		
 		var consMblNo = txtMblNo.getValue();
 		if(consMblNo) 
 			a[a.length] = new QParam({key:'consMblNo',value:consMblNo,op:7});
 		
 		var consStatusInvoR = cboStatusInvoR.getValue();        		
 		if(consStatusInvoR) 
 			a[a.length] = new QParam({key:'consStatusInvoR',value:consStatusInvoR,op:op});
 		
 		var consStatusInvoP = cboStatusInvoP.getValue();        		
 		if(consStatusInvoP) 
 			a[a.length] = new QParam({key:'consStatusInvoP',value:consStatusInvoP,op:op});
 		
 		var consStatusExp = cboStatusExp.getValue();        		
 		if(consStatusExp) 
 			a[a.length]=new QParam({key:'consStatusExp',value:consStatusExp,op:op});
 		
     	var vessName = txtVessName.getValue();        		
 		if(vessName) 
 			a[a.length] = new QParam({key:'vessName',value:vessName,op:op});
 		
 		var voyaName = txtVoyaName.getValue();        		
 		if(voyaName) 
 			a[a.length] = new QParam({key:'voyaName',value:voyaName,op:op});
 		
 		var consTotalPackages = txtTotalPackages.getValue();        		
 		if(consTotalPackages) 
 			a[a.length] = new QParam({key:'consTotalPackages',value:consTotalPackages,op:op});
 		
 		var consTotalGrossWeight = txtTotalGrossWeight.getValue();        		
 		if(consTotalGrossWeight) 
 			a[a.length] = new QParam({key:'consTotalGrossWeight',value:consTotalGrossWeight,op:op});
 		
 		var consLoadDate = dtLoadDate.getValue();
 		var consLoadDate2 = dtLoadDate.getValue();
 		if(consLoadDate && consLoadDate2){
 			a[a.length] = new QParam({key:'consLoadDate',value:consLoadDate.format(DATEF),op:5});
 			a[a.length] = new QParam({key:'consLoadDate',value:consLoadDate2.format(DATEF),op:3});
 		}
 		else if(consLoadDate) 
 			a[a.length] = new QParam({key:'consLoadDate',value:consLoadDate.format(DATEF),op:op});
 		
 		
 		var consExpiryDate = dtExpiryDate.getValue();
 		var consExpiryDate2 = dtExpiryDate2.getValue();
 		if(consExpiryDate && consExpiryDate2){
 			a[a.length] = new QParam({key:'consExpiryDate',value:consExpiryDate.format(DATEF),op:5});
 			a[a.length] = new QParam({key:'consExpiryDate',value:consExpiryDate2.format(DATEF),op:3});
 		}
 		else if(consExpiryDate) 
 			a[a.length] = new QParam({key:'consExpiryDate',value:consExpiryDate.format(DATEF),op:op});
 		
 		var consDeliveryDate = dtDeliveryDate.getValue();
 		var consDeliveryDate2 = dtDeliveryDate2.getValue();
 		if(consDeliveryDate && consDeliveryDate2){
 			a[a.length] = new QParam({key:'consDeliveryDate',value:consDeliveryDate.format(DATEF),op:5});
 			a[a.length] = new QParam({key:'consDeliveryDate',value:consDeliveryDate2.format(DATEF),op:3});
 		}
 		else if(consDeliveryDate) 
 			a[a.length] = new QParam({key:'consDeliveryDate',value:consDeliveryDate.format(DATEF),op:op});
 		
 		var consTrackLoadDate = dtCustomsInspectionDate.getValue();
 		var consTrackLoadDate2 = dtCustomsInspectionDate2.getValue();
 		if(consTrackLoadDate && consTrackLoadDate2){
 			a[a.length] = new QParam({key:'consTrackLoadDate',value:consTrackLoadDate.format(DATEF),op:5});
 			a[a.length] = new QParam({key:'consTrackLoadDate',value:consTrackLoadDate2.format(DATEF),op:3});
 		}
 		else if(consTrackLoadDate) 
 			a[a.length] = new QParam({key:'consTrackLoadDate',value:consTrackLoadDate.format(DATEF),op:op});
 		
 		var consContainerLoadDate = dtInspectionDate.getValue();
 		var consContainerLoadDate2 = dtInspectionDate2.getValue();
 		if(consContainerLoadDate && consContainerLoadDate2){
 			a[a.length] = new QParam({key:'consContainerLoadDate',value:consContainerLoadDate.format(DATEF),op:5});
 			a[a.length] = new QParam({key:'consContainerLoadDate',value:consContainerLoadDate2.format(DATEF),op:3});
 		}
 		else if(consContainerLoadDate) 
 			a[a.length] = new QParam({key:'consContainerLoadDate',value:consContainerLoadDate.format(DATEF),op:op});
 		
 		
 		var cargoName = txtCargoName.getValue();        		
 		if(cargoName) 
 			a[a.length] = new QParam({key:'consCargoNameEn',value:cargoName,op:LI});
 		
 		
 		setQueryParams(a);
     	store.baseParams={mt:'xml',xml:FOSX(QTX(a))};
     	store.reload({scope:this,
     		params:{start:0,limit:C_PS},
     		callback:function(r){
     			if(r.length==0) {
     				XMG.alert(SYS,M_NOT_FOUND);
     			}
     			else{
     				this.close();
     			}
     		}
     	});
    };		
    
    Fos.CustomsConsLookupWin.superclass.constructor.call(this, {title:C_CONS_QUERY,
    	iconCls:'search',
    	modal:true,
    	width:800,
    	height:400,
    	buttonAlign:'right',
    	items:panel,
		buttons:[{text:C_OK,scope:this,handler:this.reload},
		         {text:C_CANCEL,scope:this,handler:this.close}]
	}); 
};
Ext.extend(Fos.CustomsConsLookupWin, Ext.Window);