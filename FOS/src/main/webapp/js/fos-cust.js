Fos.PaliLookup = function(store,T){
	this.reload=function(){
     	var a=[];
     	a[0]={key:'voyaSailedFlag',value:T=='N'?0:1,op:EQ};
     	var custId=t.find('name','custId')[0].getValue();
     	if(custId) a[a.length]={key:'custId',value:custId,op:EQ};
     	var charterId=t.find('name','charterId')[0].getValue();
     	if(charterId) a[a.length]={key:'charterId',value:charterId,op:EQ};
     	var fconPod=t.find('name','fconPod')[0].getValue();
     	if(fconPod) a[a.length]={key:'fconPod',value:fconPod,op:EQ};
     	var fconContractNo=t.find('name','fconContractNo')[0].getValue();
     	if(fconContractNo) a[a.length]={key:'fconContractNo',value:fconContractNo,op:LI};
     	var paliHarbourId=t.find('name','paliHarbourId')[0].getValue();
     	if(paliHarbourId) a[a.length]={key:'paliHarbourId',value:paliHarbourId,op:EQ};
     	var vessName=t.find('name','vessName')[0].getValue();
     	if(vessName) a[a.length]={key:'vessName',value:vessName,op:LI};
     	var voyaName=t.find('name','voyaName')[0].getValue();
     	if(voyaName) a[a.length]={key:'voyaName',value:voyaName,op:LI};
     	var paliStationId=t.find('name','paliStationId')[0].getValue();
     	if(paliStationId) a[a.length]={key:'paliStationId',value:paliStationId,op:EQ};
     	var paliTransFlag=t.find('name','paliTransFlag')[0].getValue();
     	if(paliTransFlag) a[a.length]={key:'paliTransFlag',value:'1',op:EQ};
     	
     	var paliArriveDate=t.find('name','paliArriveDate')[0].getValue();
     	if(paliArriveDate) a[a.length]={key:'paliArriveDate',value:paliArriveDate.format(DATEF),op:EQ};
     	var paliTrackType=t.find('name','paliTrackType')[0].getValue();
     	if(paliTrackType) a[a.length]={key:'paliTrackType',value:paliTrackType,op:EQ};
     	var vessNameCn=t.find('name','vessNameCn')[0].getValue();
     	if(vessNameCn) a[a.length]={key:'vessNameCn',value:vessNameCn,op:LI};
     	var paliTrackNo=t.find('name','paliTrackNo')[0].getValue();
     	if(paliTrackNo) a[a.length]={key:'paliTrackNo',value:paliTrackNo,op:EQ};     	
     	store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
     	if(T=='N')
        	store.reload({callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});
        else
     		store.reload({params:{start:0,limit:C_PS100},callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});     	
     	this.close();
	};	
	var t = new Ext.Panel({layout:'column',
		items:[{columnWidth:.5,layout:'form',border:false,labelWidth:100,labelAlign:"right",
	    	items:[{fieldLabel:C_SHIPPER,name:'custId',store:getCS(),
	        		xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,enableKeyEvents:true,
	        		mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,triggerAction:'all',selectOnFocus:true,anchor:'90%',
	              	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:500}}},	        	
				{fieldLabel:C_PACKING_TRACK_NO,name:'paliTrackNo',xtype:'textfield',anchor:'90%'},				
				{fieldLabel:C_PACKING_EXP_PORT,name:'paliHarbourId',xtype:'combo',store:getHARB_S(),displayField:'placName',valueField:'placId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
				{fieldLabel:C_VESS,name:'vessName',xtype:'textfield',anchor:'90%'},
				{fieldLabel:C_VESS_NAME_CN,name:'vessNameCn',xtype:'textfield',anchor:'90%'},
				{fieldLabel:C_PACKING_STATION,name:'paliStationId',xtype:'combo',store:getHARB_S(),displayField:'placName',valueField:'placId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
				{fieldLabel:C_TRANS_FLAG,name:'paliTransFlag',xtype:'checkbox',anchor:'90%'}
	        	]},
	      	{columnWidth:.5,layout:'form',border:false,labelWidth:100,labelAlign:"right",
	   		items:[
			{fieldLabel:C_RENTER,name:'charterId',store:getCS(),enableKeyEvents:true,
				tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%',
				listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:BF}}},
	   		    {fieldLabel:C_CONTRACT_NO,name:'fconContractNo',xtype:'textfield',anchor:'90%'},	
	        	{fieldLabel:C_POD,tabIndex:47,name:'fconPod',store:getPS(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%',
              		tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,listeners:{scope:this,keydown:{fn:LP,buffer:BF}}},
              	{fieldLabel:C_VOYA,name:'voyaName',xtype:'textfield',anchor:'90%'},
              	{fieldLabel:C_PACKING_ARRIVE_DATE,name:'paliArriveDate',xtype:'datefield',format:DATEF,anchor:'90%'},
              	{fieldLabel:C_TRACK_TYPE,name:'paliTrackType',xtype:'combo',store:TRACK_T_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'}
	        	]}
			]});
		
    Fos.PaliLookup.superclass.constructor.call(this, {title:C_PALI_QUERY,iconCls:'search',modal:true,width:600,minWidth:300,
        minHeight:200,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:t,
		buttons:[{text:C_OK,scope:this,handler:this.reload},{text:C_CANCEL,scope:this,handler:this.close}]
	}); 
};
Ext.extend(Fos.PaliLookup, Ext.Window);

Fos.FConLookup = function(store,T){
	this.reload=function(){
     	var a=[];
     	var custId=t.find('name','custId')[0].getValue();
     	if(custId) a[a.length]=new QParam({key:'custId',value:custId,op:EQ});     		
     	var shliId=t.find('name','shliId')[0].getValue();
     	if(shliId) a[a.length]=new QParam({key:'shliId',value:shliId,op:EQ});
     	var fconStatus=t.find('name','fconStatus')[0].getValue();
     	if(fconStatus) a[a.length]=new QParam({key:'fconStatus',value:fconStatus,op:EQ});
     	var fconPol=t.find('name','fconPol')[0].getValue();        		
     	if(fconPol) a[a.length]=new QParam({key:'fconPol',value:fconPol,op:EQ});
     	var fconPod=t.find('name','fconPod')[0].getValue();        		
     	if(fconPod) a[a.length]=new QParam({key:'fconPod',value:fconPod,op:EQ});
     	var fconContractNo=t.find('name','fconContractNo')[0].getValue();        		
     	if(fconContractNo) a[a.length]=new QParam({key:'fconContractNo',value:fconContractNo,op:EQ});     	
     	var fconCarrier=t.find('name','fconCarrier')[0].getValue();        		
     	if(fconCarrier) a[a.length]=new QParam({key:'fconCarrier',value:fconCarrier,op:LI});
     	var fconVesselVoyage=t.find('name','fconVesselVoyage')[0].getValue();        		
     	if(fconVesselVoyage) a[a.length]=new QParam({key:'fconVesselVoyage',value:fconVesselVoyage,op:LI});     	
     	var fconForcastQuantity=t.find('name','fconForcastQuantity')[0].getValue();
     	var fconForcastQuantity2=t.find('name','fconForcastQuantity2')[0].getValue();
   		if(fconForcastQuantity && fconForcastQuantity2){
   			a[a.length]=new QParam({key:'fconForcastQuantity',value:fconForcastQuantity,op:GE});
   			a[a.length]=new QParam({key:'fconForcastQuantity',value:fconForcastQuantity2,op:LE});
   		}
   		else if(fconForcastQuantity) 
   			a[a.length]=new QParam({key:'fconForcastQuantity',value:fconForcastQuantity,op:EQ});
   		
     	var fconLoadDate=t.find('name','fconLoadDate')[0].getValue();
     	var fconLoadDate2=t.find('name','fconLoadDate2')[0].getValue();
   		if(fconLoadDate && fconLoadDate2){
   			a[a.length]=new QParam({key:'fconLoadDate',value:fconLoadDate.format(DATEF),op:GE});
   			a[a.length]=new QParam({key:'fconLoadDate',value:fconLoadDate2.format(DATEF),op:LE});
   		}
   		else if(fconLoadDate) a[a.length]=new QParam({key:'fconLoadDate',value:fconLoadDate.format(DATEF),op:EQ});
     	
     	var fconShipDateF=t.find('name','fconShipDateF')[0].getValue();
     	var fconShipDateT=t.find('name','fconShipDateT')[0].getValue();
   		if(fconShipDateF && fconShipDateT){
   			a[a.length]=new QParam({key:'fconShipDateF',value:fconShipDateF.format(DATEF),op:GE});
   			a[a.length]=new QParam({key:'fconShipDateT',value:fconShipDateT.format(DATEF),op:LE});
   		}
   		else if(fconShipDateF) 
   			a[a.length]=new QParam({key:'fconShipDateF',value:fconShipDateF.format(DATEF),op:EQ});
   		
   		var voyaShipDateF=t.find('name','voyaShipDateF')[0].getValue();
     	var voyaShipDateT=t.find('name','voyaShipDateT')[0].getValue();
   		if(voyaShipDateF && voyaShipDateT){
   			a[a.length]=new QParam({key:'voyaShipDateF',value:voyaShipDateF.format(DATEF),op:GE});
   			a[a.length]=new QParam({key:'voyaShipDateT',value:voyaShipDateT.format(DATEF),op:LE});
   		}
   		else if(voyaShipDateF) 
   			a[a.length]=new QParam({key:'voyaShipDateF',value:voyaShipDateF.format(DATEF),op:EQ});
   		
   		var voyaSailDate=t.find('name','voyaSailDate')[0].getValue();
     	var voyaSailDate2=t.find('name','voyaSailDate2')[0].getValue();
   		if(voyaSailDate && voyaSailDate2){
   			a[a.length]=new QParam({key:'voyaSailDate',value:voyaSailDate.format(DATEF),op:GE});
   			a[a.length]=new QParam({key:'voyaSailDate',value:voyaSailDate.format(DATEF),op:LE});
   		}
   		else if(voyaSailDate) 
   			a[a.length]=new QParam({key:'voyaSailDate',value:voyaSailDate.format(DATEF),op:EQ});

		var voyaSailedFlag=t.find('name','voyaSailedFlag')[0].getValue();
   		if(voyaSailedFlag) a[a.length]=new QParam({key:'voyaSailedFlag',value:'0',op:EQ});
   		
   		a[a.length]=new QParam({key:'fconStatus',value:2,op:T=='S'?EQ:NE});
     	store.baseParams={mt:'xml',xml:FOSX(QTX(a))};
     	store.reload({params:{start:0,limit:25},callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});this.close();
	};	
	var t = new Ext.Panel({layout:'column',
		items:[{columnWidth:.5,layout:'form',border:false,labelWidth:100,labelAlign:"right",
	    	items:[{fieldLabel:C_BOOKER,name:'custId',store:getCS(),
	        		xtype:'combo',displayField:'custCode',valueField:'custId',
	        		typeAhead:true,enableKeyEvents:true,
	        		mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,
	        		triggerAction:'all',selectOnFocus:true,anchor:'90%',
	              	listeners:{scope:this,
	              		keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:500}}},	        	
				{fieldLabel:C_SHLI,name:'shliId',store:getSHLI_S(),xtype:'combo',displayField:'shliName',valueField:'shliId',typeAhead: true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
				{fieldLabel:C_POL,name:'fconPol',store:getPOL_S(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
	        	{fieldLabel:C_FORCAST_QUANTITY+'(>=)',name:'fconForcastQuantity',xtype:'numberfield',anchor:'90%'},
	        	{fieldLabel:C_FORCAST_LOAD_DATE,name:'fconLoadDate',xtype:'datefield',format:DATEF,anchor:'90%'},
	        	{fieldLabel:C_FORCAST_SHIP_DATE,tabIndex:8,name:'fconShipDateF',xtype:'datefield',format:DATEF,anchor:'90%'},
	        	{fieldLabel:C_SHIP_DATE_F,tabIndex:8,name:'voyaShipDateF',xtype:'datefield',format:DATEF,anchor:'90%'},
	        	{fieldLabel:C_SAIL_DATE,tabIndex:8,name:'voyaSailDate',xtype:'datefield',format:DATEF,anchor:'90%'},
	        	{fieldLabel:C_CARRIER,name:'fconCarrier',store:getCS(),enableKeyEvents:true,
	        		tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%',
	        		listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custCarrierFlag');},buffer:BF}}},
     			{fieldLabel:C_NOT_SAILED,name:'voyaSailedFlag',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}
	        	]},
	      	{columnWidth:.5,layout:'form',border:false,labelWidth:100,labelAlign:"right",
	   		items:[{fieldLabel:C_CONTRACT_NO,name:'fconContractNo',xtype:'textfield',anchor:'90%'},	
	   		    {fieldLabel:C_STATUS,name:'fconStatus',store:CTST_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
	   		    {fieldLabel:C_POD,tabIndex:47,name:'fconPod',store:getPS(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%',
              		tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,listeners:{scope:this,
              			keydown:{fn:LP,buffer:BF}}},
              	{fieldLabel:C_FORCAST_QUANTITY+'(<=)',name:'fconForcastQuantity2',xtype:'numberfield',anchor:'90%'},
	        	{fieldLabel:C_TO,name:'fconLoadDate2',xtype:'datefield',format:DATEF,anchor:'90%'},
	        	{fieldLabel:C_TO,tabIndex:9,name:'fconShipDateT',xtype:'datefield',format:DATEF,anchor:'90%'},
	        	{fieldLabel:C_TO,tabIndex:9,name:'voyaShipDateT',xtype:'datefield',format:DATEF,anchor:'90%'},
	        	{fieldLabel:C_TO,tabIndex:8,name:'voyaSailDate2',xtype:'datefield',format:DATEF,anchor:'90%'},
	        	{fieldLabel:C_VESS_VOYA,name:'fconVesselVoyage',xtype:'textfield',anchor:'90%'}
	        	]}
			]});
		
    Fos.FConLookup.superclass.constructor.call(this, {title:C_FCON_QUERY,iconCls:'search',modal:true,width:600,minWidth:300,
        minHeight:200,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:t,
		buttons:[{text:C_OK,scope:this,handler:this.reload},{text:C_CANCEL,scope:this,handler:this.close}]
	}); 
};
Ext.extend(Fos.FConLookup, Ext.Window);





Fos.PrLookupWin = function(t) {    
	var frmLookup = new Ext.form.FormPanel({labelWidth:70,labelAlign:"right",
    	items:[{id:'T_PR_LOOK',xtype:'tabpanel',plain:true,activeTab:0,height:200,defaults:{bodyStyle:'padding:10px'},
            items:[{id:'T_PR_LOOK_1',title:t=='R'?C_LOOK_BY_PR_NO_R:C_LOOK_BY_PR_NO_P,layout:'form',
				items:[{fieldLabel:t=='R'?C_PR_NO_R:C_PR_NO_P,name:'prNo',xtype:'textarea',anchor:'90%'},
            	{boxLabel:C_LOOK_SMART,name:'prNoM',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}
       			]},
       			{id:'T_PR_LOOK_2',title:C_LOOK_BY_INVO_NO,layout:'form',
				items: [
					{fieldLabel:C_INVO_NO,name:'invoNo',xtype:'textarea',anchor:'90%'},
					{boxLabel:C_LOOK_SMART,name:'invoNoM',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}
				]},
				{id:'T_PR_LOOK_3',title:C_LOOK_BY_TAX_NO,layout:'form',
				items: [
					{fieldLabel:C_TAX_NO,name:'invoTaxNo',xtype:'textarea',anchor:'90%'},
					{boxLabel:C_LOOK_SMART,name:'invoTaxNoM',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}
				]},
        		{id:'T_PR_LOOK_4',title:C_LOOK_COMPLEX,layout:'column',items:[
        			{columnWidth:.33,layout:'form',border:false,
	             	items:[
	             	{fieldLabel:C_SETTLE_OBJECT,tabIndex:1,name:'custId',store:getCS(),enableKeyEvents:true,
	             		xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%',
	             		tpl:custTpl,itemSelector:'div.list-item',listWidth:400,listeners:{scope:this,
						keydown:{fn:function(f,e){LC(f,e,t=='R'?'custArFlag':'custApFlag');},buffer:500}}},
	             	{fieldLabel:C_CURR,tabIndex:4,name:'currCode',store:getCURR_S(),xtype:'combo',displayField:'currCode',valueField:'currCode',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
	             	{fieldLabel:C_SEWA,tabIndex:3,name:'prPaymentType',store:getSEWA_S(),xtype:'combo',displayField:'sewaName',valueField:'sewaId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
	             	{fieldLabel:C_STATUS,tabIndex:3,name:'prStatus',store:t=='R'?ERST_S:PRST_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'}]},
	             	{columnWidth:.33,layout:'form',border:false,
	             	items:[
	             	{fieldLabel:t=='R'?C_PR_DATE_R:C_PR_DATE_P,name:'prDate',xtype:'datefield',format:DATEF,anchor:'90%'},
	             	{fieldLabel:C_AMOUNT,name:'prAmount',xtype:'numberfield',anchor:'90%'},
	             	{fieldLabel:C_BANK,tabIndex:5,name:'prBank',store:getCOBA_S(),xtype:'combo',displayField:'cobaBank',valueField:'cobaBank',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'}
	             	]},
	             	{columnWidth:.34,layout:'form',border:false,
	             	items:[	             	
	             	{fieldLabel:C_TO,name:'prDate2',xtype:'datefield',format:DATEF,anchor:'90%'},
	             	{fieldLabel:C_TO,name:'prAmount2',xtype:'numberfield',anchor:'90%'},
	             	{fieldLabel:C_BANK_ACCOUNT,tabIndex:6,name:'prAccount',xtype:'textfield',anchor:'90%'}
	             	]}
	        	]}
        	]}
        ]
    });
    Fos.PrLookupWin.superclass.constructor.call(this, {title:t=='R'?C_PR_R_QUERY:C_PR_P_QUERY,iconCls:'search',modal:true,width:600,minWidth:300,
        minHeight:200,plain:true,bodyStyle:'padding:0px;',buttonAlign:'right',items:frmLookup}); 
};
Ext.extend(Fos.PrLookupWin, Ext.Window);



Fos.FileUploadWin = function(title,label) {	
	var fp = new Ext.form.FormPanel({
        id:'F_UP',fileUpload:true,title:title,header:false,autoHeight:true,
        items: [{
            xtype: 'fileuploadfield',emptyText:label,fieldLabel:label,
            name: 'tempFile',anchor: '90%',frame: true,allowBlank: false,msgTarget: 'side'
        }]
    });
    Fos.FileUploadWin.superclass.constructor.call(this, {title:title,iconCls:'up',plain:false,modal:true,width:400,minWidth:300,
        minHeight:200,plain:true,bodyStyle:'padding:0px;',buttonAlign:'right',items:fp}); 
};
Ext.extend(Fos.FileUploadWin,Ext.Window);

Fos.CurrencyWin = function() {
    Fos.CurrencyWin.superclass.constructor.call(this, {title:C_CURR_P,modal:true,width:180,
        height:90,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:[
        {fieldLabel:C_CURR,id:'currCode',value:'CNY',allowBlank:false,store:getCURR_S(),xtype:'combo',
        	displayField:'currCode',valueField:'currCode',typeAhead: true,mode: 'local',triggerAction: 'all',
        	selectOnFocus:true,anchor:'99%'}]}); 
};
Ext.extend(Fos.CurrencyWin, Ext.Window);
Fos.DateWin = function() {    
	var frmDate = new Ext.form.FormPanel({labelWidth: 60,bodyStyle:'padding:5px',
    	items: [{fieldLabel:C_SAIL_DATE,id:'voyaSailDate',value:new Date(),allowBlank:false,xtype:'datefield',anchor:'90%'}]
    });
    Fos.DateWin.superclass.constructor.call(this, {title:C_SAIL_DATE_P,modal:true,width:200,
        Height:300,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:frmDate});
};
Ext.extend(Fos.DateWin, Ext.Window);

Fos.TemplateChooseWin = function(t){
	var frmTemplate = new Ext.form.FormPanel({labelWidth:80,bodyStyle:'padding:5px',
    	items: [{fieldLabel:C_TEMP_SEL_P,id:'tempId',allowBlank:false,store:getTemplates(t),xtype:'combo',displayField:'tempName',valueField:'tempId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'}]
    });
    Fos.TemplateChooseWin.superclass.constructor.call(this,{title:C_TEMP_SEL_P,modal:true,width:400,
        Height:300,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:frmTemplate}); 
};
Ext.extend(Fos.TemplateChooseWin, Ext.Window);

Fos.MailWin = function(m,t,mt) {
	var form = new Ext.form.FormPanel({labelWidth:60,id:'F_MAIL',bodyStyle:'padding:5px 5px 0',frame:true,width:800,height:400,
		items: [{layout:'column',layoutConfig:{columns:1},deferredRender:false,items:[
			{columnWidth:1,layout:'form',border:false,items:[
				{fieldLabel:'To',id:'to',value:m.get('messTo'),xtype:'textfield',allowBlank:false,anchor:'90%'},
	            {fieldLabel:'Cc',id:'cc',value:m.get('messCc'),xtype:'textfield',anchor:'90%'},
	            {fieldLabel:'Subject',id:'sub',value:m.get('messSubject'),xtype:'textfield',anchor:'90%'},
	            {fieldLabel:C_TEMP_FILE,disabled:t=='',id:'tempId',store:getTemplates(t),xtype:'combo',displayField:'tempName',valueField:'tempId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%',
	            	listeners:{scope:this,
	        		render:function(cbx){
	        			if(cbx.store.getCount()){
	        				var r=cbx.store.getAt(0);
	        				 cbx.setValue(r.get('tempId'));
	        			}
	            }}},
	            {layout:'fit',items:[{id:'body',value:m.get('messBody'),xtype:'htmleditor',anchor:'90%'}]}]
	         }]}]
    });
    Fos.MailWin.superclass.constructor.call(this, {title:mt==1?C_SEND_MAIL:C_SEND_FAX,modal:true,plain:true,layout:'fit',width:800,height:400,
    border:true,bodyStyle:'padding:0px;',buttonAlign:'right',items:form}); 
};
Ext.extend(Fos.MailWin, Ext.Window);

Fos.CargoLookupWin = function(a,consId) {    
	var store = new Ext.data.GroupingStore({url:SERVICE_URL+'?A='+a,
 		reader: new Ext.data.XmlReader({record:'FCargo'}, FCargo),groupField:'consNo',sortInfo:{field:'cargId', direction:'ASC'}});
    if(a=='CARG_MID_Q')
    	store.load({params:{consMasterId:consId}});
    else
    	store.load({params:{consId:consId}});
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm=new Ext.grid.ColumnModel([sm,
	{header:C_CONS_NO,dataIndex:'consNo',width:80},
	{header:C_MARKS,dataIndex:'cargMarks',width:80},
	{header:C_CARGO_NAME_EN,dataIndex:'cargNameEn',width:80},
	{header:C_PACKAGES,dataIndex:'cargPackageNum',width:60},
	{header:C_PACK,dataIndex:'packId',width:80,renderer:getPACK},	
	{header:C_NW,dataIndex:'cargNetWeight',width:60},
	{header:C_GW,dataIndex:'cargGrossWeight',width:60},	
	{header:C_CBM,dataIndex:'cargMeasurement',width:60},
	{header:C_MBL_NO,dataIndex:'consMblNo',width:80},
	{header:C_HBL_NO,dataIndex:'consHblNo',width:80},
	{header:C_BOOKER,dataIndex:'custName',width:80},
	{header:C_MANU_NO,dataIndex:'cargManuNo',width:80},
	{header:C_SPEC,dataIndex:'cargSpec',width:80},	
	{header:C_CARGO_NAME_CN,dataIndex:'cargNameCn',width:80},
	{header:C_HS_CODE,dataIndex:'cargNo',width:100},
	{header:C_UNIT,dataIndex:'cargUnit',width:100}]);
	cm.defaultSortable = true;
    var g = new Ext.grid.GridPanel({ 
    id:'G_CARG_LOOKUP',iconCls:'gen',header:false,height:300,width:600,store:store,sm:sm,cm:cm,loadMask: true});	
    Fos.CargoLookupWin.superclass.constructor.call(this,{title:C_CARGO_SEL,modal:true,layout:'fit',width:600,minWidth:300,
        minHeight:200,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:[{layout:'fit',border:false,
        items: [g]}]}); 
};
Ext.extend(Fos.CargoLookupWin,Ext.Window);





var changePass=function(){var win = new Fos.PassWin();win.show();};
Fos.PassWin = function() {    
	var frmPass = new Ext.form.FormPanel({labelWidth:80,bodyStyle:'padding:5px',
    	items: [{fieldLabel:C_OLD_PASS,name:'oldPassword',allowBlank:false,xtype:'textfield',inputType:'password',anchor:'90%'},
    	{fieldLabel:C_NEW_PASS,name:'newPassword',allowBlank:false,xtype:'textfield',inputType:'password',anchor:'90%'},
    	{fieldLabel:C_CONFIRM_NEW_PASS,name:'newPassword2',allowBlank:false,xtype:'textfield',inputType:'password',anchor:'90%'}
    	]
    });
    this.changePass=function(){
		var op=frmPass.find('name','oldPassword')[0].getValue();
		var np=frmPass.find('name','newPassword')[0].getValue();
		var np2=frmPass.find('name','newPassword2')[0].getValue();
		if(op==''){XMG.alert(SYS,M_OLD_PASS_REQIRED);frmPass.find('name','oldPassword')[0].focus();return};
		if(np==''){XMG.alert(SYS,M_NEW_PASS_REQIRED);frmPass.find('name','newPassword')[0].focus();return};
		if(np2==''){XMG.alert(SYS,M_CONFIRM_NEW_PASS_REQIRED);frmPass.find('name','newPassword2')[0].focus();return};
		if(np!=np2){XMG.alert(SYS,M_NEW_PASS_NOT_EQ);frmPass.find('name','newPassword')[0].focus();return};
		if(np==op){XMG.alert(SYS,M_NEW_PASS_EQ_OLD);frmPass.find('name','newPassword')[0].focus();return};
		
		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'USER_U',oldPassword:op,newPassword:np,newPassword2:np2},
		success: function(r){XMG.alert(SYS,M_CHANGE_PASS_SUCCESSED);this.close();},
		failure: function(r){XMG.alert(SYS,M_F);},scope:this});
    };
    
    Fos.PassWin.superclass.constructor.call(this, {title:M_CHANGE_PASS,modal:true,width:400,
        Height:300,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:[frmPass],        
        buttons:[{text:C_OK,scope:this,handler:this.changePass},
        	{text:C_CANCEL,scope:this,handler:this.close}]
        }); 
};
Ext.extend(Fos.PassWin,Ext.Window);

Fos.SalesQuotaGrid = function() {
	this.saquId=0;	
	var store = GS('SAQU_Q','CSalesQuota',CSalesQuota,'saquId','DESC','','','id',true);
	store.load({params:{start:0,limit:C_PS}});	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_SALES,dataIndex:'saquSalesName',width:100,
			editor:new Ext.form.ComboBox({displayField:'userLoginName',valueField:'userName',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getSALE_S(),
            listeners:{scope:this,select:function(c,r,i){
            	var b =this.getSelectionModel().getSelected();b.set('saquSalesId',r.get('userId'));}}})},
	{header:C_YEAR,dataIndex:'saquYear',width:80,editor:new Ext.form.ComboBox({displayField:'NAME',valueField:'CODE',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:YY_S})},
	{header:C_MONTY,dataIndex:'saquMonth',width:80,editor:new Ext.form.ComboBox({displayField:'NAME',valueField:'CODE',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:MM_S})},
	{header:C_BASE_PROFIT,dataIndex:'saquBaseProfit',width:80,editor:new Ext.form.NumberField({decimalPrecision:2})},
	{header:C_COMMISION_RATE,dataIndex:'saquCommissionRate',width:80,editor:new Ext.form.NumberField({decimalPrecision:4})}	
	],defaults:{sortable:true,width:100}});
	var d=new Date();var y=d.format('Y');var m=d.format('m');
	this.add=function(){
		this.saquId=this.saquId-1;
		var t = new CSalesQuota({saquId:this.saquId,saquSalesId:'',saquSalesName:'',saquYear:y,saquMonth:m,
		saquBaseProfit:'',saquCommissionRate:'',version:'0'});
		store.insert(0,t);t.set('rowAction','N');sm.selectFirstRow();this.startEditing(0,1);
	};
	this.remove=function(){FOS_REMOVE(sm,store);};
	this.save=function(){FOS_POST(store,'CSalesQuota',CSalesQuota,'SAQU_S');};
	CREATE_KM('G_SAQU',this);	
	Fos.SalesQuotaGrid.superclass.constructor.call(this,{
	id:'G_SAQU',title:C_SALES_QUOTA,header:false,deferredRender:false,closable:true,
		border:false,height:200,autoScroll:true,sm:sm,cm:cm,store:store,sortInfo:{field:'fdocId',direction:'DESC'},
		tbar:[
			{itemId:'TB_N',text:C_ADD+'(N)',disabled:NR(M1_V+V_SAQU+F_M),iconCls:'add',scope:this,handler:this.add},'-',
			{itemId:'TB_R',text:C_REMOVE+'(R)',disabled:NR(M1_V+V_SAQU+F_R),iconCls:'remove',scope:this,handler:this.remove},'-',
			{itemId:'TB_S',text:C_SAVE+'(S)',disabled:NR(M1_V+V_SAQU+F_M),iconCls:'save',scope:this,handler:this.save},'->',
		new Ext.PagingToolbar({pageSize:C_PS,store:store})],
		bbar:PTB(store,C_PS)
    });
};
Ext.extend(Fos.SalesQuotaGrid, Ext.grid.EditorGridPanel);

Fos.SalesCommissionGrid = function() {
	var store = GS('SACO_Q','CSalesCommission',CSalesCommission,'sacoId','DESC','','','id',true);
	store.load({params:{start:0,limit:C_PS}});	
	var cs = GS('COMM_Q','CCommission',CCommission,'commId','DESC','','S_COMM','',false);
    cs.load();    
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_SALES,dataIndex:'sacoSalesName',width:100,
			editor:new Ext.form.ComboBox({displayField:'userLoginName',valueField:'userName',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getSALE_S(),
            listeners:{scope:this,select:function(c,r,i){
            	var b =this.getSelectionModel().getSelected();b.set('sacoSalesId',r.get('userId'));}}})},	
	{header:C_COMMISSION,dataIndex:'commName',width:80,editor:new Ext.form.ComboBox({xtype:'combo',store:cs,displayField:'commName',valueField:'commName',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
		listeners:{scope:this,select:function(c,r,i){
	            	var b=sm.getSelected();
	            	if(b){b.set('commId',r.get('commId'));}}}
				})}	
	],defaults:{sortable:true,width:100}});
	this.add=function(){
		var rid=GGUID();
		var t = new CSalesCommission({sacoId:rid,sacoSalesId:'',sacoSalesName:'',commId:'',version:'0'});
		store.insert(0,t);t.set('rowAction','N');sm.selectFirstRow();this.startEditing(0,1);
	};
	this.removeRecords=function(){FOS_REMOVE(sm,store);};
	this.save=function(){FOS_POST(store,'CSalesCommission',CSalesCommission,'SACO_S');};
	CREATE_KM('G_SACO',this);	
	Fos.SalesCommissionGrid.superclass.constructor.call(this,{
	id:'G_SACO',title:C_SALES_COMMISSION,header:false,deferredRender:false,closable:true,
		border:false,height:200,autoScroll:true,sm:sm,cm:cm,store:store,sortInfo:{field:'fdocId',direction:'DESC'},
		tbar:[
			{itemId:'TB_N',text:C_ADD+'(N)',disabled:NR(M1_V+V_SAQU+F_M),iconCls:'add',scope:this,handler:this.add},'-',
			{itemId:'TB_R',text:C_REMOVE+'(R)',disabled:NR(M1_V+V_SAQU+F_R),iconCls:'remove',scope:this,handler:this.removeRecords},'-',
			{itemId:'TB_S',text:C_SAVE+'(S)',disabled:NR(M1_V+V_SAQU+F_M),iconCls:'save',scope:this,handler:this.save},'->',
		new Ext.PagingToolbar({pageSize:C_PS,store:store})],
		bbar:PTB(store,C_PS)
    });
};
Ext.extend(Fos.SalesCommissionGrid, Ext.grid.EditorGridPanel);

Fos.CommissionTab = function(p){
	this.sel =GSEL;
	this.reload = false;
	var store = GS('COMM_Q','CCommission',CCommission,'commId','DESC','','S_COMM','',false);
    store.load();
    var itemStore = GS('COIT_Q','CCommissionItem',CCommissionItem,'coitId','DESC','','','',false); 
    itemStore.load();	
	var re = {scope:this,
		rowselect:function(sm,row,r){
			if(this.sel!=r.get('commId')){
				this.sel=r.get('commId');				
				var s = grid2.getStore();s.removeAll();
				var a = itemStore.getRange();
				for(var i=0;i<a.length;i++){if(a[i].get('commId')==this.sel) s.add(a[i]);}
			}
		}
	};	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true,listeners:re});
	var cm=new Ext.grid.ColumnModel({columns:[sm,
		{header:C_NAME,dataIndex:'commName',width:250,editor:new Ext.form.TextField()}],defaults:{sortable:true}});
	var grid = new Ext.grid.EditorGridPanel({id:'G_COMM',clicksToEdit:1,border:true,store:store,sm:sm,cm:cm});	
    
	var ss = new Ext.data.Store({baseParams:{mt:'JSON'},
		reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'CCommissionItem'},CCommissionItem)
		});	 
	var sm2=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm2=new Ext.grid.ColumnModel({columns:[sm2,
		{header:C_COMMISSION_LOWER,dataIndex:'coitLower',editor:new Ext.form.NumberField()},
		{header:C_COMMISSION_LIMIT,dataIndex:'coitLimit',editor:new Ext.form.NumberField()},
		{header:C_COMMISSION_RATE,dataIndex:'coitRate',editor:new Ext.form.NumberField()}],defaults:{sortable:true,width:80}});
	var grid2 = new Ext.grid.EditorGridPanel({id:'G_COIT',clicksToEdit:1,border:true,store:ss,sm:sm2,cm:cm2});	
	this.save = function(){
		var xml='';
		var a = store.getModifiedRecords();
		if(a.length) xml = ATX(a,'CCommission',CCommission);
		var cc=[];
		var ca =itemStore.getRange();
		for(var i=0;i<ca.length;i++){
			if(ca[i].dirty) cc[cc.length]=ca[i];
		}
		if(cc.length>0){var x = ATX(cc,'CCommissionItem',CCommissionItem);xml=xml+x;};		
		if(xml!=''){
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'COMM_S'},
			success: function(r){				
				var a = XTRA(r.responseXML,'CCommission',CCommission);FOSU(store,a,CCommission);
				var b = XTRA(r.responseXML,'CCommissionItem',CCommissionItem);
				FOSU(itemStore,b,CCommissionItem);FOSU(ss,b,CCommissionItem);
				XMG.alert(SYS,M_S);},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
			xmlData:FOSX(xml)});
		}
		else XMG.alert(SYS,M_NC);
	};
	this.addComm=function(){
		var rid=GGUID();
		var r = new CCommission({id:rid,commId:rid,commName:'',active:'1',version:'0',rowAction:'N'});
    	grid.stopEditing();store.insert(0,r);grid.getSelectionModel().selectFirstRow();grid.startEditing(0,1);
	};
	this.removeComm=function(){
		var r = grid.getSelectionModel().getSelected();
		if(r){
			r.set('rowAction',r.get('rowAction')=='N'?'D':'R');
				grid.getStore().remove(r);				
				var a=grid2.getStore().getRange();
				for(var i=0;i<a.length;i++){
					a[i].set('rowAction',a[i].get('rowAction')=='N'?'D':'R');
					grid2.getStore().remove(a[i]);
				}
			}
	};
	this.addItem=function(){		
		var rid=GGUID();
		var r = new CCommissionItem({id:rid,coitId:rid,commId:this.sel,active:'1',version:'0',rowAction:'N'});
    	grid2.stopEditing();
    	itemStore.add(r);ss.insert(0,r);
    	grid2.getSelectionModel().selectFirstRow();
    	grid2.startEditing(0,1);
	};
	this.removeItem=function(){
		var r = grid2.getSelectionModel().getSelections();
		if(r){
			for(var i=0;i<r.length;i++){
				r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');
				grid2.getStore().remove(r[i]);
			}
		}
	};
	Fos.CommissionTab.superclass.constructor.call(this,{id:'T_COMM',title:C_COMMISSION,iconCls:'gen',header:false,deferredRender:false,
	autoScroll:true,labelAlign:'right',closable:true,labelWidth:80,border:false,width:800,layout:'border',
	items: [{title:C_COMMISSION_LIST,region:'center',width:400,minSize:200,maxSize:600,layout:'fit',items:[grid]},
		{title:C_COMMISSION_ITEM,region:'east',split:true,width:400,minSize:200,maxSize:600,layout:'fit',items:[grid2],
				tbar:[
				{text:C_ADD,iconCls:'add',scope:this,scope:this,handler:this.addItem},
				{text:C_REMOVE,disabled:false,iconCls:'remove',scope:this,handler:this.removeItem}]
		}],
	tbar:[		
		{text:C_ADD,iconCls:'add',scope:this,scope:this,handler:this.addComm},
		{text:C_REMOVE,disabled:false,iconCls:'remove',scope:this,handler:this.removeComm},
		{text:C_SAVE,disabled:false,iconCls:'save',scope:this,handler:this.save}
		]});
};
Ext.extend(Fos.CommissionTab, Ext.Panel);

//客户地址选择窗口
Fos.CustomerSiteWin=function(siteType,custId,fn,scope){
	var store = new Ext.data.Store({url:SERVICE_URL,baseParams:{mt:'json',A:'CUSI_Q'},
		reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'CCustomerSite',id:'cusiId'},CCustomerSite),
		remoteSort:true,sortInfo:{field:'cusiId', direction:'DESC'}});
	store.load({params:{custId:custId,cusiType:siteType}});
	
		
	this.selRecord = function(){
		var b =sm.getSelected();
		if(b){
			fn(b,scope);
			this.close();
		}
	};
		    
	this.removeRecord=function(){	
		var a =sm.getSelections();
       	if(a.length){
       		XMG.confirm(SYS,M_R_C,function(btn){
           	if(btn=='yes'){           		
               		var xml = SMTX4R(sm,'CCustomerSite','cusiId');
               		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'CUSI_S'},
					success: function(){
               			store.load({params:{custId:custId,siteType:siteType}});
               			XMG.alert(SYS,M_S);
               		},
					failure: function(r,o){XMG.alert(SYS,M_F+r.responseText);},
					xmlData:FOSX(xml)});
           }});
		}
       	else XMG.alert(SYS,M_R_P);		
	};
	
	 var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true});
	    var cm=new Ext.grid.ColumnModel({columns:[sm,
		{header:C_NAME,dataIndex:'cusiName',width:200,editor:new Ext.form.TextField()},
		{header:C_CONTACT,dataIndex:'cusiContact',width:100,editor:new Ext.form.TextField()},
		{header:C_TEL,dataIndex:'cusiTel',width:100,editor:new Ext.form.TextField()},
		{header:C_ADDRESS,dataIndex:'cusiAddress',width:200,editor:new Ext.form.TextField()}
		],defaults:{sortable:true,width:100}});	
	
	this.addSite=function(){
		var p = new CCustomerSite({id:GGUID(),cusiId:0,custId:custId,cusiType:siteType,version:'0',rowAction:'N'});
		grid.stopEditing();
		store.insert(0,p);
		grid.startEditing(0, 1);
	};
	this.save = function(){
		FOS_POST(store,'CCustomerSite',CCustomerSite,'CUSI_S');
		store.load({params:{custId:custId,cusiType:siteType}});
	};
	
	var grid = new  Ext.grid.EditorGridPanel({header:false,width:600,height:400,
	    clicksToEdit:1,closable:true,store:store,sm:sm,cm:cm,loadMask:true}); 
	
	Fos.CustomerSiteWin.superclass.constructor.call(this,{buttonAlign:'right',
		title:'',layout:'fit',
		width:600,height:400,modal:true,
	  	items:[grid],
	  	buttons:[{text:C_ADD,iconCls:'add',handler:this.addSite},	  	         
	  	       {text:C_REMOVE,iconCls:'remove',scope:this,handler:this.removeRecord},
	  	       {text:C_SAVE,disabled:NR(M1_J+G_VESS+F_M),iconCls:'save',handler:this.save},
		  	   {text:C_CLOSE,iconCls:'cancel',scope:this,handler:this.close},
		  	   {text:C_SEL,iconCls:'check',scope:this,handler:this.selRecord}]
	});
};
Ext.extend(Fos.CustomerSiteWin, Ext.Window);

Fos.SiteLookup = Ext.extend(Ext.form.ComboBox, {
	triggerClass:'x-form-search-trigger',
	siteType:'',
	custId:'',
	constructor: function(config){
		this.siteType = config['siteType'];
		this.custId = config['custId'];
		Fos.SiteLookup.superclass.constructor.apply(this, arguments);
	},
	initComponent : function(){
		Fos.SiteLookup.superclass.initComponent.call(this);        
	},
	selectSite:function(site,scope){
		scope.setValue(site.data['cusiName']);
		scope.fireEvent('select', this, site, 0);
	},
	onTriggerClick: function(event){
		var win = new Fos.CustomerSiteWin(this.siteType,this.custId,this.selectSite,this);
		win.show();
	}
});

Ext.reg('siteLookup', Fos.SiteLookup);




Fos.PortLookup = Ext.extend(Ext.form.ComboBox, {
	triggerClass:'x-form-search-trigger',
	portType:'',
	constructor: function(config){
		this.portType = config['portType'],
		Fos.PortLookup.superclass.constructor.apply(this, arguments);
	},
	initComponent : function(){
		Fos.PortLookup.superclass.initComponent.call(this);        
	},
	selectPort:function(port,scope){
		scope.setValue(port.data[scope.valueField || scope.displayField]);
		scope.fireEvent('select', this, port, 0);
	},
	onTriggerClick: function(event){
		var win = new Fos.PortLookWin(this.portType,this.selectPort,this);
		win.show();
	}
});

Ext.reg('portLookup', Fos.PortLookup);

Fos.PortLookWin = function(portType,fn,scope) {	
	var store = GS('TRAIN_X', 'GTrainStation', GTrainStation, 'counCode', 'ASC', 'counCode', '', '', 'id', true);
    store.load({params:{start:0,limit:100}});   
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});	
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
			columns: [sm, c1, c2, c3, c4],
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
			
	this.sel = function(){
		//当确实选择了一项数据时，执行传入的函数参数，并关闭窗口
		if(sm.getSelected()){
			fn(sm.getSelected(),scope);
			this.close();
		}
		else{ 
			Ext.Msg.alert(SYS,M_NO_DATA_SELECTED);
		}
	};
	
	this.addPort=function(){
		var p = new GPort({id:GGUID(),trainId:'0',
			portCode:'',portNameEn:'',portNameCn:'',counCode:'CN',portType:1,
			active:1,version:'0',rowAction:'N'});
    	grid.stopEditing();
    	store.insert(0,p);
    	grid.startEditing(0, 1);
	};
	this.delPort=function(){
		HTUtil.REMOVE_SM(sm,store);
	};
	this.savePort = function(){
		FOS_POST(store,'GTrainStation',GTrainStation,'TRAIN_S');getTRAIN_S().reload();
	};
	
	var grid = new Ext.grid.EditorGridPanel({store:store,sm:sm,cm:cm,clicksToEdit:1,
		bbar:PTB(store,100),
		tbar:[st,kw,{text:C_SEARCH,iconCls:'search',scope:this,handler:this.search},'-',
		{text:C_ADD,iconCls:'add',scope:this,handler:this.addPort},'-',
        {text:C_REMOVE,iconCls:'remove',scope:this,handler:this.delPort},'-', 
        {text:C_SAVE,iconCls:'save',scope:this,handler:this.savePort}]
	});
    Fos.PortLookWin.superclass.constructor.call(this,{title:C_STATION,width:600,height:400,
    	layout:'fit',modal:true,items:grid,
    	buttons:[{text:C_OK,iconCls:'ok',scope:this,handler:this.sel},
    	         {text:C_CANCEL,iconCls:'cancel',scope:this,handler:this.close}]}); 
};
Ext.extend(Fos.PortLookWin,Ext.Window);