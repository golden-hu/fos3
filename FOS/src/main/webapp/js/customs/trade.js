//关务 - 加工贸易
Fos.TradeGrid = function() {
	var a=[];
	a[a.length]={key:'consBizType',value:BT_M,op:1};
	var bp={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
	var store = new Ext.data.GroupingStore({
   		url: SERVICE_URL+'?A=CONS_X',baseParams:bp,
    	reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'FConsign'}, FConsign),remoteSort:true,
    	sortInfo:{field:'consDate', direction:'DESC'}});    	
	
	this.reset=function(){
		store.baseParams=bp;
		store.reload({params:{start:0,limit:C_PS}});
	};
	var sm=new Ext.grid.RowSelectionModel({singleSelect:true});	
	var c1=new Ext.grid.RowNumberer();
	var c2={header:'',dataIndex:'consStatusLock',menuDisabled:true,fixed:true,width:25,renderer:function(v){
               if(v==1) return '<div class="locked"></div>'; else return '';
         }};
   
    var c3={header:C_STATUS,width:60,dataIndex:"consStatus",renderer:getCONS_STATUS};
    var c4={header:C_CONS_NO,width:120,dataIndex:"consNo"};
    var c5={header:C_BOOKER,width:200,dataIndex:"custName"};
    var c6={header:C_CONS_DATE,width:70,dataIndex:"consDate",renderer:formatDate};   
    var c7={header:C_CONS_CLOSE_DATE,dataIndex:"consCloseDate",renderer:formatDate};
    var c8={header:C_CONTRACT_NO,dataIndex:"consContractNo"};
    var c9={header:C_BIZ_COMPANY,width:200,dataIndex:"consCompany"};	
    var c10={header:C_OPERATOR,width:80,dataIndex:"consOperatorName"};  
    var c11={header:C_SALES,width:80,dataIndex:"consSalesRepName"};
    var c12={header:C_MANUAL_EXPIRE_DATE,dataIndex:"consManualExpirationDate",renderer:formatDate};
    
    var cm=new Ext.grid.ColumnModel({columns:[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12],
		defaults: {sortable: true}});
	
    showTradeConsign = function(p){
    	var t = T_MAIN.getComponent('P_TRADE_'+p.get("id"));
    	if(t){
    		T_MAIN.setActiveTab(t);
    	} 
    	else{
    		t = new Fos.TradeTab(p,store);
    		T_MAIN.add(t);
    		T_MAIN.setActiveTab(t);
    	}
    };
    
	this.newConsign = function(){
		var c=Fos.newConsign('H','M','');
		showTradeConsign(c);
	};
	this.editConsign = function(){
		var b=sm.getSelected();
		if(b) 
			showTradeConsign(b); 
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
               		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'CONS_S'},
					success: function(){sm.each(function(p){store.remove(p);});XMG.alert(SYS,M_S);},
					failure: function(r,o){XMG.alert(SYS,M_F+r.responseText);},
					xmlData:FOSX(xml)});
               	}
           }});
		}
       	else XMG.alert(SYS,M_R_P);
    };
	this.search = function(){
		var w=new Fos.TradeConsLookupWin(store);
		w.show();
	};
	
	var kw = new Ext.form.TextField({listeners:{scope:this,specialkey:function(c,e){if(e.getKey()==Ext.EventObject.ENTER) this.fastSearch();}}});
	this.fastSearch=function(){
		var consNo=kw.getValue();
		if(!consNo){XMG.alert(SYS,M_INPUT_BIZ_NO,function(b){kw.focus();});return;};
     	var a=[];
     	a[a.length]={key:'consBizClass',value:'H',op:EQ};
     	a[a.length]={key:'consBizType',value:'M',op:EQ};
     	
     	var c=consNo.indexOf(',');
		var b=consNo.indexOf('..');
     	if(c>=0){
			a[a.length]={key:'consNo',value:consNo,op:IN};
		}
		else if(b>=0){
			var ra=consNo.split('..');
			a[a.length]={key:'consNo',value:ra[0],op:GE};
			a[a.length]={key:'consNo',value:ra[1],op:LE};
		}
		else
 			a[a.length]={key:'consNo',value:consNo,op:LI};
     	store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
     	store.reload({params:{start:0,limit:C_PS},
     		callback:function(r){
     			if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);
     		}});
	};
	this.exp1=function(){
		EXPC('TRADE_STAT',store.baseParams.xml?'&mt=JSON&xml='+Ext.util.JSON.encode(store.baseParams.xml):'&mt=JSON');
	};
	
	this.exp2=function(){			
		EXPC('CONS_LIST',store.baseParams.xml?'&mt=JSON&start=0&limit=500&consBizType=M&xml='+Ext.util.JSON.encode(store.baseParams.xml):'&mt=JSON');	
	};
	
	var m=M1_M+M3_CONS;
	var b1={text:C_ADD,disabled:NR(m+F_M),iconCls:'add',handler:this.newConsign};	
	var b3={text:C_EDIT,disabled:NR(m+F_V),iconCls:'option',handler:this.editConsign};
	var b4={text:C_REMOVE,disabled:NR(m+F_R),iconCls:'remove',handler:this.removeConsign};
	var b5={text:C_SEARCH,iconCls:'search',handler:this.search};	
	var b6={text:C_EXPORT,disabled:NR(m+F_E),iconCls:'print',scope:this,menu: 
	{items: [{text:C_TRADE_STAT,scope:this,handler:this.exp1},{text:C_TRADE_LIST,scope:this,handler:this.exp2}]}};	
	var b7={text:C_FAST_SEARCH,iconCls:'search',handler:this.fastSearch};	
	var b8={text:C_RESET,iconCls:'refresh',handler:this.reset};
			
    var tbs=[b1, '-',b3,'-',b4,'-',b5,'-',b6,'-',kw,b7,'-',b8,'-'];
       
	Fos.TradeGrid.superclass.constructor.call(this, {
    id:'G_CONS_H_M',iconCls:'grid',store: store,title:C_TRADE+C_CONS_LIST,header:false,loadMask:true,
	sm:sm,cm:cm,stripeRows:true,closable:true,view:new Ext.grid.GroupingView(groupViewCfg),
	listeners:{rowdblclick: function(grid, rowIndex, event){
			var c=grid.getSelectionModel().getSelected();
			if(c){showTradeConsign(c);
		}}},
	tbar:tbs,
	bbar:PTB(store,C_PS)});
	
    store.load({params:{start:0,limit:C_PS}});
};
Ext.extend(Fos.TradeGrid, Ext.grid.GridPanel);

Fos.TradeTab = function(p,store) {
    this.save = function(){
    	if(this.find('name','custName')[0].getValue()==''){
			XMG.alert(SYS,M_CUST_REQIRED,function(){this.find('name','custName')[0].focus();},this);return;};	
		if(!p.get('custId')){
			XMG.alert(SYS,M_CUST_MUST_PREDEFINED);return;};
		if(this.find('name','deptId')[0].getValue()==''){
			XMG.alert(SYS,M_DEPT_REQIRED,function(){this.find('name','deptId')[0].focus();},this);return;};	
		if(this.find('name','consSalesRepName')[0].getValue()==''){
			XMG.alert(SYS,M_SALES_REQIRED,function(){this.find('name','consSalesRepName')[0].focus();},this);return;};
		if(this.find('name','consOperatorId')[0].getValue()==''){
			XMG.alert(SYS,M_OPERATOR_REQIRED,function(){this.find('name','consOperatorId')[0].focus();},this);return;};
		if(this.find('name','attr1')[0].getValue()==''){
			XMG.alert(SYS,C_TRTY_REQIRED,function(){this.find('name','attr1')[0].focus();},this);return;};	
		var f = FConsign.prototype.fields;
		for (var i = 0; i < f.keys.length; i++) {
        	var fn = ''+f.keys[i];
        	var fc = this.find('name',fn);
        	if(fc!=undefined&&fc.length>0){
        		p.set(fn,fc[0].getValue());
        	}
   	 	}    	 	
   	 	var xml = RTX(p,'FConsign',FConsign);
   	 	
   	 	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CONS_S'},
			success: function(res){
				var c = XTR(res.responseXML,'FConsign',FConsign);
				var ra=p.get('rowAction');
				var f = FConsign.prototype.fields;
				p.beginEdit();
   				for (var i = 0; i < f.keys.length; i++) {var fn = ''+f.keys[i];p.set(fn,c.get(fn));};   				
				if(ra=='N'){
					var title=C_TRADE+'委托【'+p.get("consNo")+'】';
					this.setTitle(title);
					this.find('name','consNo')[0].setValue(p.get('consNo'));
					p.set('rowAction','M');
					store.add(p);
				}
				p.endEdit();
				this.updateToolBar();
				XMG.alert(SYS,M_S);
			},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(xml)
		});
    };    
    this.updateStatus=function(s){
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CONS_U',consId:p.get('consId'),consStatus:s},
		success: function(r){
			p.set('consStatus',s);
			p.set('version',p.get('version')+1);
			this.updateToolBar();
			XMG.alert(SYS,M_S);
		},
		failure: function(r){XMG.alert(SYS,M_F+r.responseText);}});
    };
        
    this.updateToolBar = function(){
		var tb=this.getTopToolbar();
		var s = p.get('consStatus');
		locked=p.get('consStatusLock')==1;
		if(tb.getComponent('TB_S')) tb.getComponent('TB_S').setDisabled(NR(m+F_M)||locked||disable);
    	if(tb.getComponent('TB_C')) tb.getComponent('TB_C').setDisabled(NR(m+F_M)||locked||disable||s!=0);
    	if(tb.getComponent('TB_F')) tb.getComponent('TB_F').setDisabled(NR(m+F_M)||locked||disable||s!=1);
    	if(tb.getComponent('TB_R')) tb.getComponent('TB_R').setDisabled(NR(m+F_R)||locked||disable||s!=0||p.get('rowAction')=='N');
    	if(tb.getComponent('TB_EXP')) tb.getComponent('TB_EXP').setDisabled(NR(m+M3_EXPE));
    	if(tb.getComponent('TB_U')) tb.getComponent('TB_U').setDisabled(NR(m+F_UL)||locked!=1);
    };
    
    this.unlock=function(){
    	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',
    		params:{A:'CONS_U',consId:p.get('consId'),consStatusLock:0},
		success: function(r){
			p.set('consStatusLock',0);
			this.updateToolBar(p.get('consStatus'));
			
			XMG.alert(SYS,M_S);
			var sc = new Ext.data.Store({url: SERVICE_URL+'?A='+'CONS_Q',
					reader: new Ext.data.XmlReader({record:'FConsign'}, FConsign)});
			sc.load({params:{consId:p.get('consId')},callback:function(r,o,s){
				if(s&&r.length>0){
					var c=r[0];
					p.beginEdit();					
					p.set('version',c.get('version'));
					p.endEdit();
					XMG.alert(SYS,M_S);
				}    						
			},scope:this});				
		},
		failure: function(r){XMG.alert(SYS,M_F+r.responseText);}});
    };
    
    this.check=function(){this.updateStatus('1');};
    this.finish=function(){this.updateStatus('2');};
    this.del=function(){
    	if(p.get('consStatus')!='0')
       		XMG.alert(SYS,M_CONS_CONFIRMED);
       	else {
       		XMG.confirm(SYS,M_R_C,function(btn){
       			if(btn=='yes'){
       				p.set('rowAction','R');
               		var xml = RTX4R(p,'FConsign','consId');
               		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'CONS_S'},
						success: function(){
							store.remove(p);
							XMG.alert(SYS,M_S,function(){T_MAIN.remove('P_TRADE_'+p.get('id'));});
						},
						failure: function(r,o){XMG.alert(SYS,M_F+r.responseText);},
						xmlData:FOSX(xml)
					});
               	}
           });
       	}
    };
    this.showExp=function(){
    	var win = new Fos.ExWin(p);
    	win.show();
    };    
    this.showDoc=function(){
    	var win = new Fos.DocWin(p);
    	win.show();
    };    
    this.showAttach=function(){
    	var win = new Fos.AttachWin(p);
    	win.show();
    };    
    
    var locked=p.get('consStatusLock')==1;
    var disable=p.get('editable')==0;
    var m=M1_M+M3_CONS;
    
	Fos.TradeTab.superclass.constructor.call(this, { 
		id: "P_TRADE_"+p.get('id'),title:C_TRADE+'委托【'+p.get("consNo")+'】',header:false,closable:true,autoScroll:true,
		padding:5,border:false,labelAlign:'right',layout:'column',
	    items:[
    		{columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[
				{fieldLabel:C_CONS_NO,style:'{font-weight:bold;color:green;}',disabled:true,tabIndex:1,
						name:'consNo',value:p.get('consNo'),xtype:'textfield',anchor:'99%'},    
    			{fieldLabel:C_BOOKER,itemCls:'required',tabIndex:5,name:'custName',
    				value:p.get('custName'),store:getCS(),enableKeyEvents:true,
 					xtype:'combo',displayField:'custCode',valueField:'custCode',typeAhead:true,
 					mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,triggerAction:'all',
 					selectOnFocus:true,anchor:'99%',
 			     	listeners:{scope:this,
 			     	blur:function(f){
 			     		if(f.getRawValue()==''){
 			     			f.clearValue();
 			     			p.set('custId','');
 			     			p.set('custName','');}},
 			     	select:function(c,r,i){
 			     		this.find('name','custContact')[0].setValue(r.get('custContact'));
 			     		this.find('name','custTel')[0].setValue(r.get('custTel'));
 			     		this.find('name','custFax')[0].setValue(r.get('custFax'));
 			     		p.set('custId',r.get('custId'));
 			     		p.set('custSname',r.get('custCode'));
 			     		p.set('custName',r.get('custNameCn'));
 			     		c.setValue(r.get('custNameCn'));
 			     	},
 			     	keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:BF}}},
 			     {fieldLabel:C_BIZ_COMPANY,tabIndex:9,name:'consCompany',value:p.get('consCompany'),
 			     		xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead:true,
 			     		store:getCS(),enableKeyEvents:true,
 	 					mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,triggerAction:'all',
 	 					selectOnFocus:true,anchor:'99%',
 	 			     	listeners:{scope:this, 	 			     	
 	 			     	select:function(c,r,i){ 	 			     		
 	 			     		c.setValue(r.get('custNameCn'));
 	 			     	},
 	 			     	keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:BF}}},			     
 			     {fieldLabel:C_CONS_DATE,tabIndex:13,name:'consDate',value:p.get('consDate'),
 			     		xtype:'datefield',format:DATEF,anchor:'99%'},
 			     {fieldLabel:C_TRTY,itemCls:'required',tabIndex:17,name:'attr1',value:p.get('attr1'),
 			     	   store:getTRTY_S(),xtype:'combo',displayField:'trtyName',
 			     	   valueField:'trtyName',typeAhead:true,mode:'local',triggerAction:'all',
 			     	   selectOnFocus:true,anchor:'99%'}
 				]},
         	    {columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[             	 	
             	 	{fieldLabel:C_OPERATOR,
             	 		itemCls:'required',
             	 		tabIndex:2,
             	 		name:'consOperatorId',
             	 		value:p.get('consOperatorId'),
     			     	store:getOP_S(),
     			     	xtype:'combo',
     			     	displayField:'userName',
     			     	valueField:'userId',
     			     	typeAhead: true,
     			     	mode: 'local',
     			     	triggerAction: 'all',
     			     	selectOnFocus:true,
     			     	anchor:'99%',
     			     	listeners:{scope:this,
	     	    			blur:function(f){
	     	    				if(f.getRawValue()==''){
	     	    					f.clearValue();
	     	    					p.set('consOperatorId','');
	     	    					p.set('consOperatorName','');
	     	    				}
	     	    			},
	     	    			select:function(c,r,i){
	     	    				p.set('consOperatorName',r.get('userName'));
	     	    			}
     	    			}
             	 	},
     	    		{fieldLabel:C_CONTACT,tabIndex:6,name:'custContact',value:p.get('custContact'),xtype:'textfield',anchor:'99%'},
             	 	{fieldLabel:C_REF_NO,tabIndex:10,name:'consRefNo',value:p.get('consRefNo'),
             			xtype:'textfield',anchor:'99%'},
             		{fieldLabel:C_CONS_CLOSE_DATE,tabIndex:14,name:'consCloseDate',value:p.get('consCloseDate'),
         			     xtype:'datefield',format:DATEF,anchor:'99%'},
         			  //将attr2用作我司发票号
    			    {fieldLabel:C_MYCOMPANY_INVOICE,tabIndex:18,name:'attr2',value:p.get('attr2'),
        			    xtype:'textfield',anchor:'99%'}
         	    ]},
         	    {columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[
             		{fieldLabel:C_SALES,
             			itemCls:'required',
             			tabIndex:3,
             			name:'consSalesRepName',
             			value:p.get('consSalesRepName'),
         	    		store:getSALE_S(),
         	    		xtype:'combo',
         	    		displayField:'userName',
         	    		valueField:'userName',
         	    		typeAhead: true,
         	    		mode: 'local',
         	    		triggerAction: 'all',
         	    		selectOnFocus:true,
         	    		anchor:'99%',
         	    		listeners:{scope:this,
         	    			blur:function(f){
         	    				if(f.getRawValue()==''){
         	    					f.clearValue();
         	    					p.set('consSalesRepId','');
         	    					p.set('consSalesRepName','');
         	    				}
         	    			},
         	    	    	select:function(c,r,i){
         	    	    		p.set('consSalesRepId',r.get('userId'));
         	    	    	}
         	    		}
             		},
 	    	    	{fieldLabel:C_PHONE,tabIndex:7,name:'custTel',value:p.get('custTel'),
             			xtype:'textfield',anchor:'99%'},
         	    	{fieldLabel:C_MANU_NO,tabIndex:11,name:'consManualNo',value:p.get('consManualNo'),
         	    	    xtype:'textfield',anchor:'99%'},
         	    	{fieldLabel:C_MANUAL_EXPIRE_DATE,tabIndex:15,name:'consManualExpirationDate',value:p.get('consManualExpirationDate'),
             			xtype:'datefield',format:DATEF,anchor:'99%'},
             		{fieldLabel:C_EXT_3,tabIndex:19,name:'attr3',value:p.get('attr3'),xtype:'textfield',anchor:'99%'}
         	    ]},
         	    {columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[         	        
             		{fieldLabel:C_DEPT,itemCls:'required',tabIndex:4,name:'deptId',value:p.get('deptId'),
             			store:getGROU_S(),xtype:'combo',displayField:'grouName',valueField:'grouId',typeAhead: true,
             			mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%'},
             		{fieldLabel:C_FAX,xtype:'textfield',tabIndex:8,name:'custFax',value:p.get('custFax'),anchor:'99%'},
         			{fieldLabel:C_CONTRACT_NO,tabIndex:12,name:'consContractNo',value:p.get('consContractNo'),
             			xtype:'textfield',anchor:'99%'},
         			{fieldLabel:C_MARGIN,tabIndex:16,name:'consMargin',value:p.get('consMargin'),
             			xtype:'numberfield',anchor:'99%'},
             		{fieldLabel:C_EXT_4,tabIndex:20,name:'attr4',value:p.get('attr4'),xtype:'textfield',anchor:'99%'}
         		]},
         	    {columnWidth:.99,layout:'form',labelWidth:70,border:false,items:[
         	    	{fieldLabel:C_WORKSET,tabIndex:21,name:'consServiceSpec',value:p.get('consServiceSpec'),xtype:'textarea',height:150,anchor:'99%'}
         	    ]},
         	    {columnWidth:.99,layout:'form',labelWidth:70,border:false,items:[
         	    	{fieldLabel:C_REMARKS,tabIndex:22,name:'consRemarks',value:p.get('consRemarks'),xtype:'textarea',height:150,anchor:'99%'}
         	    ]}
         	 ],
		tbar:[
		      {text:C_SAVE,itemId:'TB_S',iconCls:'save',disabled:NR(m+F_M)||locked||disable,scope:this,handler:this.save},'-',
		      {text:C_BOOK_CONFIRM,itemId:'TB_C',iconCls:'check',disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=0||p.get('rowAction')=='N',scope:this,handler:this.check},'-',
		      {text:C_CONS_CLOSED,itemId:'TB_F',iconCls:'check',disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=1,scope:this,handler:this.finish},'-',
		      {text:C_REMOVE,itemId:'TB_R',iconCls:'remove',
		    	  disabled:NR(m+F_R)||locked||disable||p.get('consStatus')!=0||p.get('rowAction')=='N',scope:this,handler:this.del},'-',
		      {text:C_UNLOCK,itemId:'TB_U',iconCls:'unlock',disabled:NR(m+F_UL)||locked!=1,scope:this,handler:this.unlock},'->',
		      {text:C_EXPE,itemId:'TB_EXP',iconCls:'dollar',disabled:NR(m+M3_EXPE)||p.get('rowAction')=='N',scope:this,handler:this.showExp},'-',
		      {text:C_DOC,itemId:'TB_DOC',iconCls:'doc',disabled:NR(m+M3_DOC)||p.get('rowAction')=='N',scope:this,handler:this.showDoc},'-',
		      {text:C_ATTACH,itemId:'TB_ATT',iconCls:'attach',disabled:NR(m+F_M)||p.get('rowAction')=='N',scope:this,handler:this.showAttach},'-'
		     ]
	});
};
Ext.extend(Fos.TradeTab,Ext.FormPanel);

Fos.TradeConsLookupWin = function(store){    
	this.reload=function(){
     	var a=[];var op=1;
     	a[a.length]={key:'consBizClass',value:'H',op:1};
     	a[a.length]={key:'consBizType',value:BT_M,op:1};
     	
 		var custId=panel.find('name','custId')[0].getValue();
 		if(custId) a[a.length]={key:'custId',value:custId,op:op}; 
 		var consCompany=panel.find('name','consCompany')[0].getValue();        		
 		if(consCompany) a[a.length]={key:'consCompany',value:consCompany,op:op};
 		var consSalesRepId=panel.find('name','consSalesRepId')[0].getValue();        		
 		if(consSalesRepId) a[a.length]={key:'consSalesRepId',value:consSalesRepId,op:op};
 		var consOperatorId=panel.find('name','consOperatorId')[0].getValue();        		
 		if(consOperatorId) a[a.length]={key:'consOperatorId',value:consOperatorId,op:op};
 		
 		var consDate=panel.find('name','consDate')[0].getValue();
 		var consDate2=panel.find('name','consDate2')[0].getValue();
 		if(consDate && consDate2){
 			a[a.length]={key:'consDate',value:consDate.format(DATEF),op:5};
 			a[a.length]={key:'consDate',value:consDate2.format(DATEF),op:3};
 		}
 		else if(consDate) a[a.length]={key:'consDate',value:consDate.format(DATEF),op:op};
 		
 		var consCloseDate=panel.find('name','consCloseDate')[0].getValue();
 		var consCloseDate2=panel.find('name','consCloseDate2')[0].getValue();
 		if(consDate && consCloseDate2){
 			a[a.length]={key:'consCloseDate',value:consCloseDate.format(DATEF),op:5};
 			a[a.length]={key:'consCloseDate',value:consDate2.format(DATEF),op:3};
 		}
 		else if(consCloseDate) a[a.length]={key:'consCloseDate',value:consCloseDate.format(DATEF),op:op};
 		
 		var consManualExpirationDate=panel.find('name','consManualExpirationDate')[0].getValue();
 		var consManualExpirationDate2=panel.find('name','consManualExpirationDate2')[0].getValue();
 		if(consManualExpirationDate && consManualExpirationDate2){
 			a[a.length]={key:'consManualExpirationDate',value:consManualExpirationDate.format(DATEF),op:5};
 			a[a.length]={key:'consManualExpirationDate',value:consManualExpirationDate2.format(DATEF),op:3};
 		}
 		else if(consManualExpirationDate) a[a.length]={key:'consManualExpirationDate',value:consManualExpirationDate.format(DATEF),op:op};
 		
 		var consContractNo=panel.find('name','consContractNo')[0].getValue();        		
 		if(consContractNo) a[a.length]={key:'consContractNo',value:consContractNo,op:op};
 		
 		var consRefNo=panel.find('name','consRefNo')[0].getValue();        		
 		if(consRefNo) a[a.length]={key:'consRefNo',value:consRefNo,op:op};
 		
 		var consStatusAud=panel.find('name','consStatusAud')[0].getValue();        		
 		if(consStatusAud) a[a.length]={key:'consStatusAud',value:consStatusAud,op:op};
 		var consStatusAr=panel.find('name','consStatusAr')[0].getValue();        		
 		if(consStatusAr) a[a.length]={key:'consStatusAr',value:consStatusAr,op:op};
 		var consStatusAp=panel.find('name','consStatusAp')[0].getValue();        		
 		if(consStatusAp) a[a.length]={key:'consStatusAp',value:consStatusAp,op:op};
 		var consStatusInvoR=panel.find('name','consStatusInvoR')[0].getValue();        		
 		if(consStatusInvoR) a[a.length]={key:'consStatusInvoR',value:consStatusInvoR,op:op};
 		var consStatusInvoP=panel.find('name','consStatusInvoP')[0].getValue();        		
 		if(consStatusInvoP) a[a.length]={key:'consStatusInvoP',value:consStatusInvoP,op:op};
 		var consStatusExp=panel.find('name','consStatusExp')[0].getValue();        		
 		if(consStatusExp) a[a.length]={key:'consStatusExp',value:consStatusExp,op:op};
     	
     	store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
     	store.reload({params:{start:0,limit:C_PS},callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});this.close();
	};		
		
	var panel = new Ext.Panel({plain:true,height:340,layout:'column',
		defaults:{bodyStyle:'padding:10px'},items:
			[{columnWidth:.33,layout:'form',border:false,labelWidth:80,labelAlign:"right",
	    	items:[{fieldLabel:C_BOOKER,name:'custId',store:getCS(),
        		xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,enableKeyEvents:true,
        		mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,
        		triggerAction:'all',selectOnFocus:true,anchor:'90%',
              	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:500}}},			
			{fieldLabel:C_BIZ_COMPANY,name:'consCompany',xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead:true,
 			     		store:getCS(),enableKeyEvents:true,
 	 					mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,triggerAction:'all',
 	 					selectOnFocus:true,anchor:'90%',
 	 			     	listeners:{scope:this, 	 			     	
 	 			     	select:function(c,r,i){ 	 			     		
 	 			     		c.setValue(r.get('custNameCn'));
 	 			     	},
 	 			     	keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:BF}}},				
        	{fieldLabel:C_OPERATOR,name:'consOperatorId',store:getOP_S(),xtype:'combo',
              	displayField:'userLoginName',valueField:'userId',typeAhead: true,
              	mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
        	{fieldLabel:C_SALES,name:'consSalesRepId',store:getSALE_S(),xtype:'combo',
              	displayField:'userLoginName',valueField:'userId',typeAhead: true,
              	mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
         	{fieldLabel:C_CONS_AUDIT_STATUS,name:'consStatusAud',xtype:'combo',
              	store:AUST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,
              	mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
         	{fieldLabel:C_WRITEOFF_STATUS_R,name:'consStatusAr',xtype:'combo',
              	store:WRST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,
              	mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'}]},
      	{columnWidth:.33,layout:'form',border:false,labelWidth:80,labelAlign:"right",
   		items:[{fieldLabel:C_CONS_DATE,name:'consDate',xtype:'datefield',format:DATEF,anchor:'90%'},
        	{fieldLabel:C_CONS_CLOSE_DATE,name:'consCloseDate',xtype:'datefield',format:DATEF,anchor:'90%'},
        	{fieldLabel:C_MANUAL_EXPIRE_DATE,name:'consManualExpirationDate',xtype:'datefield',format:DATEF,anchor:'90%'},
        	{fieldLabel:C_CONTRACT_NO,name:'consContractNo',xtype:'textfield',anchor:'90%'},
			{fieldLabel:C_INVO_STATUS_R,name:'consStatusInvoR',xtype:'combo',
        		store:INST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,
        		mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
			{fieldLabel:C_WRITEOFF_STATUS_P,name:'consStatusAp',xtype:'combo',
        		store:WRST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,
        		mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'}]},
		{columnWidth:.34,layout:'form',border:false,labelWidth:80,labelAlign:"right",
		items:[{fieldLabel:C_TO,name:'consDate2',xtype:'datefield',format:DATEF,anchor:'90%'},
        	{fieldLabel:C_TO,name:'consCloseDate2',xtype:'datefield',format:DATEF,anchor:'90%'},
        	{fieldLabel:C_TO,name:'consManualExpirationDate2',xtype:'datefield',format:DATEF,anchor:'90%'},
         	{fieldLabel:C_REF_NO,name:'consRefNo',xtype:'textfield',anchor:'90%'},
			{fieldLabel:C_EXPE_CONFIRM_STATUS,name:'consStatusExp',xtype:'combo',
         		store:EXPC_S,displayField:'NAME',valueField:'CODE',typeAhead: true,
         		mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
			{fieldLabel:C_INVO_STATUS_P,name:'consStatusInvoP',xtype:'combo',
         		store:INST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,
         		mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'}
		]}
	]});
    Fos.TradeConsLookupWin.superclass.constructor.call(this, {title:C_CONS_QUERY,iconCls:'search',modal:true,
    	width:800,height:260,buttonAlign:'right',items:panel,
		buttons:[{text:C_OK,scope:this,handler:this.reload},
		         {text:C_CANCEL,scope:this,handler:this.close}]
	}); 
};
Ext.extend(Fos.TradeConsLookupWin, Ext.Window);