﻿var getUN=function(p){var a=[];a[a.length]=['EACH','1'];if(p.get('consTotalMeasurement')){a[a.length]=['CBM',p.get('consTotalMeasurement')];}if(p.get('consTotalGrossWeight')){a[a.length]=['KG',p.get('consTotalGrossWeight')];}var s=p.get('consContainersInfo');if(s){s=s.replace(/(^\s*)|(\s*$)/g, "");var idx=s.indexOf(' ');if(idx==0){var b=s.split('X');if(b.length>0){a[a.length]=[b[1],b[0]];}}else{var c=s.split(' ');for(i=0;i<c.length;i++){var b=c[i].split('X');if(b.length>0){a[a.length]=[b[1],b[0]];}}}}return a;};
var openCons=function(n){store = new Ext.data.Store({url: SERVICE_URL+'?A='+'CONS_Q',reader:new Ext.data.XmlReader({record:'FConsign'}, FConsign)});store.load({params:{consNo:n},callback:function(re,o,s){if(s&&re.length>0)showConsign(re[0]);}});};
var openInvo=function(n){
	store = new Ext.data.Store({url: SERVICE_URL+'?A='+'INVO_Q',reader:new Ext.data.XmlReader({record:'SInvoice'}, SInvoice)});
	store.load({params:{invoNo:n},callback:function(re,o,s){if(s&&re.length>0)	showInvoice(re[0]);}});
};

var T_MAIN = new Ext.TabPanel({id:'T_MAIN',region:'center',deferredRender:false,plugins:new Ext.ux.TabCloseMenu(),enableTabScroll:true,activeTab:0});

Fos.StatSumTab = function(a){
	var RT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0',C_BIZ_TYPE],['1',C_CARRIER],['2',C_BOOKER],['3',C_SALES],['4',C_SHLI]]});
	var t1=new Ext.form.ComboBox({displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'0',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:RT_S});
    var t2=new Ext.form.DateField({value:(new Date()).getFirstDateOfMonth(),format:DATEF});
    var t3=new Ext.form.DateField({value:new Date(),format:DATEF});
    var doc=new Ext.ux.IFrameComponent({id:a, url:''});
	this.report=function(){
		if(!t2.getValue()){
			XMG.alert(SYS,M_INPUT_START_TIME,function(){t2.focus();},this);return;};
		if(!t3.getValue()){
			XMG.alert(SYS,M_INPUT_END_TIME,function(){t3.focus();},this);return;};
		var iframe = Ext.get('IF_'+a);
		if(t1.value=='0') iframe.dom.src=SERVICE_URL+'?A='+a+'&type='+t1.value+'&F='+t2.value+'&T='+t3.value;
		else iframe.dom.src=SERVICE_URL+'?A='+a+'&type='+t1.value+'&F='+t2.value+'&T='+t3.value;		
	};
	this.expExcel=function(){
		var url=SERVICE_URL+'?A='+a+'&format=xls&type='+t1.value+'&F='+t2.value+'&T='+t3.value;		
		window.open(url,'download','height=5,width=5,top=0,left=0,toolbar=no, menubar=no, scrollbars=no,resizable=no,location=no,status=no');
	};
	Fos.StatSumTab.superclass.constructor.call(this, {    
    id:a,title:a=='REPT_BUSI'?C_STAT_BIZ_SUM:C_STAT_PROFIT_SUM,layout:'fit',iconCls:'stats',deferredRender:false,closable:true,autoScroll:true,
     tbar:[{xtype:'tbtext',text:C_STAT_TYPE},t1,'-',
		{xtype:'tbtext',text:C_CONS_DATE+C_FROM},t2,
		{xtype:'tbtext',text:C_TO},t3,'-',
		{text:C_GEN_REPORT,disabled:NR(M1_T+(a=='REPT_BUSI'?T_BUSI:T_BUEX)+F_V),iconCls:'stats',scope:this,handler:this.report},'-',
		{text:C_EXPORT,disabled:NR(M1_T+(a=='REPT_BUSI'?T_BUSI:T_BUEX)+F_E),iconCls:'print',scope:this,
		menu:{items:[{text:'Excel',scope:this,handler:function(){this.expExcel();}}]}}],items:doc})
};
Ext.extend(Fos.StatSumTab, Ext.Panel);
Fos.StatSalesSumTab = function(){
    var t2=new Ext.form.DateField({value:(new Date()).getFirstDateOfMonth(),format:DATEF});
    var t3=new Ext.form.DateField({value:new Date(),format:DATEF});
    var doc=new Ext.ux.IFrameComponent({id:'REPT_BUSI_SALES', url:''});
	this.report=function(){
		if(!t2.getValue()){
			XMG.alert(SYS,M_INPUT_START_TIME,function(){t2.focus();},this);return;};
		if(!t3.getValue()){
			XMG.alert(SYS,M_INPUT_END_TIME,function(){t3.focus();},this);return;};
		var iframe = Ext.get('IF_REPT_BUSI_SALES');
		iframe.dom.src=SERVICE_URL+'?A=REPT_BUSI_SALES&F='+t2.value+'&T='+t3.value;		
	};
	this.expExcel=function(){
		var url=SERVICE_URL+'?A=REPT_BUSI_SALES&format=xls&F='+t2.value+'&T='+t3.value;		
		window.open(url,'download','height=5,width=5,top=0,left=0,toolbar=no, menubar=no, scrollbars=no,resizable=no,location=no,status=no');
	};
	Fos.StatSalesSumTab.superclass.constructor.call(this, {    
    id:'REPT_BUSI_SALES',title:C_STAT_BIZ_SUM_SALES,layout:'fit',iconCls:'stats',deferredRender:false,closable:true,autoScroll:true,
     tbar:[
		{xtype:'tbtext',text:C_CONS_DATE+C_FROM},t2,
		{xtype:'tbtext',text:C_TO},t3,'-',
		{text:C_GEN_REPORT,disabled:NR(M1_T+T_BUEX+F_V),iconCls:'stats',scope:this,handler:this.report},'-',
		{text:C_EXPORT,disabled:NR(M1_T+T_BUEX+F_E),iconCls:'print',scope:this,
		menu:{items:[{text:'Excel',scope:this,handler:function(){this.expExcel();}}]}}],items:doc})
};
Ext.extend(Fos.StatSalesSumTab, Ext.Panel);

Fos.StatContProfitTab = function(){
	var RT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['1',C_CARRIER],['2',C_BOOKER],['3',C_SALES],['4',C_SHLI]]});
	var t1=new Ext.form.ComboBox({displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'3',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:RT_S});
    var t2=new Ext.form.DateField({value:(new Date()).getFirstDateOfMonth(),format:DATEF});
    var t3=new Ext.form.DateField({value:new Date(),format:DATEF});
    var doc=new Ext.ux.IFrameComponent({id:'REPT_PTEU', url:''});
	this.report=function(){
		if(!t2.getValue()){
			XMG.alert(SYS,M_INPUT_START_TIME,function(){t2.focus();},this);return;};
		if(!t3.getValue()){
			XMG.alert(SYS,M_INPUT_END_TIME,function(){t3.focus();},this);return;};
		var iframe = Ext.get('IF_'+'REPT_PTEU');
		if(t1.value=='0') iframe.dom.src=SERVICE_URL+'?A=REPT_PTEU&type='+t1.value+'&F='+t2.value+'&T='+t3.value;
		else iframe.dom.src=SERVICE_URL+'?A=REPT_PTEU&type='+t1.value+'&F='+t2.value+'&T='+t3.value;		
	};
	this.expExcel=function(){
		var url=SERVICE_URL+'?A=REPT_PTEU&format=xls&type='+t1.value+'&F='+t2.value+'&T='+t3.value;		
		window.open(url,'download','height=5,width=5,top=0,left=0,toolbar=no, menubar=no, scrollbars=no,resizable=no,location=no,status=no');
	};
	Fos.StatContProfitTab.superclass.constructor.call(this, {    
    id:'REPT_PTEU',title:C_STAT_PROFIT_CONT,layout:'fit',iconCls:'stats',deferredRender:false,closable:true,autoScroll:true,
     tbar:[{xtype:'tbtext',text:C_STAT_TYPE},t1,'-',
		{xtype:'tbtext',text:C_CONS_DATE+C_FROM},t2,
		{xtype:'tbtext',text:C_TO},t3,'-',
		{text:C_GEN_REPORT,disabled:NR(M1_T+T_PTEU+F_V),iconCls:'stats',scope:this,handler:this.report},'-',
		{text:C_EXPORT,disabled:NR(M1_T+T_PTEU+F_E),iconCls:'print',scope:this,
		menu:{items:[{text:'Excel',scope:this,handler:function(){this.expExcel();}}]}}],items:doc})
};
Ext.extend(Fos.StatContProfitTab, Ext.Panel);

Fos.StatDetailTab = function(a){
	var G_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0',C_STAT_NO_GROUP],['4',C_BOOKER],['7',C_GROU],['5',C_SALES],['1',C_SHLI],['2',C_VOYA],['3',C_CARRIER],['6',C_OPERATOR]]});
	var DT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0',C_CONS_DATE],['1',C_SAIL_DATE]]});
	var t1=new Ext.form.ComboBox({width:80,displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'0',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:G_S});
    var t2=new Ext.form.DateField({value:(new Date()).getFirstDateOfMonth(),format:DATEF});
    var t3=new Ext.form.DateField({value:new Date(),format:DATEF});
    var t4=new Ext.form.ComboBox({width:80,displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'0',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:DT_S});
    var doc=new Ext.ux.IFrameComponent({id:a, url:''});    
	var check=function(){
		if(!t2.getValue()){XMG.alert(SYS,M_INPUT_START_TIME,function(){t2.focus();},this);return;};
		if(!t3.getValue()){XMG.alert(SYS,M_INPUT_END_TIME,function(){t3.focus();},this);return;};
	};
	this.getUrl=function(){
		var consCarrier=this.find('name','consCarrier')[0].getValue();
		var vessId=this.find('name','vessId')[0].getValue();
		var shliId=this.find('name','shliId')[0].getValue();
		var custId=this.find('name','custId')[0].getValue();
		var voyaName=this.find('name','voyaName')[0].getValue();
		var consBizClass=this.find('name','consBizClass')[0].getValue();
		var consBizType=this.find('name','consBizType')[0].getValue();
		var consSalesRepId=this.find('name','consSalesRepId')[0].getValue();
		var consNo=this.find('name','consNo')[0].getValue();
		var consShipType=this.find('name','consShipType')[0].getValue();
		var consPod=this.find('name','consPod')[0].getValue();
		var consOperatorId=this.find('name','consOperatorId')[0].getValue();
		var url = SERVICE_URL+'?A='+a+'&g='+t1.value+'&dt='+t4.value+'&F='+t2.value+'&T='+t3.value;		
		if(consCarrier) url+='&consCarrier='+consCarrier;
		if(vessId) url+='&vessId='+vessId;
		if(shliId) url+='&shliId='+shliId;
		if(custId) url+='&custId='+custId;
		if(voyaName) url+='&voyaName='+voyaName;
		if(consBizClass) url+='&consBizClass='+consBizClass;
		if(consBizType) url+='&consBizType='+consBizType;
		if(consSalesRepId) url+='&consSalesRepId='+consSalesRepId;
		if(consNo) url+='&consNo='+consNo;
		if(consShipType) url+='&consShipType='+consShipType;
		if(consPod) url+='&consPod='+consPod;
		if(consOperatorId) url+='&consOperatorId='+consOperatorId;
		return url;
	};
	this.report=function(){check();Ext.get('IF_'+a).dom.src=this.getUrl();};
	this.clear=function(){this.find('name','sf')[0].getForm().reset();};
	this.expExcel=function(){check();OWW(this.getUrl()+'&format=xls');};
	Fos.StatDetailTab.superclass.constructor.call(this, {    
    id:a,title:a=='T_BUDE'?C_STAT_BIZ_DETAIL:C_STAT_BIZ_DETAIL_SALES,iconCls:'stats',deferredRender:false,closable:true,autoScroll:true,
		tbar:[{xtype:'tbtext',text:C_GROUP_TYPE},t1,'-',
			t4,{xtype:'tbtext',text:C_FROM},t2,{xtype:'tbtext',text:C_TO},t3,'-',
			{text:C_GEN_REPORT,disabled:NR(M1_T+(a=='T_BUDE'?T_BUDE:T_BUDS)+F_V),iconCls:'stats',scope:this,handler:this.report},'-',
			{text:C_EXPORT,disabled:NR(M1_T+(a=='T_BUDE'?T_BUDE:T_BUDS)+F_E),iconCls:'print',scope:this,menu:{items:[{text:'Excel',scope:this,handler:this.expExcel}]}},'->',
			{text:C_CLEAR_FILTER,iconCls:'rotate',scope:this,handler:this.clear}],
		items:[{title:C_FILTER_MORE,layout:'column',name:'sf',xtype:'form',layoutConfig:{columns:4},height:120,frame:true,deferredRender:false,collapsible:true,collapsed:true,items:[
	        	{columnWidth:.25,layout:'form',labelWidth:60,labelAlign:'right',border:false,items:[
	            	{fieldLabel:C_CARRIER,tabIndex:1,name:'consCarrier',store:getCS(),enableKeyEvents:true,
		            	tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
		            	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custCarrierFlag');},buffer:500}}},
     				{fieldLabel:C_VESS,tabIndex:5,name:'vessId',store:getVES(),enableKeyEvents:true,
     					xtype:'combo',displayField:'vessNameEn',valueField:'vessId',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
     					listeners:{scope:this,keydown:{fn:function(f,e){LV(f,e);},buffer:500}}},
     				{fieldLabel:C_SHLI,tabIndex:9,name:'shliId',store:getSHLI_S(),xtype:'combo',displayField:'shliName',valueField:'shliId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}]},
	        	{columnWidth:.25,layout:'form',border:false,labelWidth:60,labelAlign:'right',items:[
	            	{fieldLabel:C_BOOKER,name:'custId',tabIndex:2,store:getCS(),
		        		xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,enableKeyEvents:true,
		        		mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,triggerAction:'all',selectOnFocus:true,anchor:'95%',
		              	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:500}}},
	            	{fieldLabel:C_VOYA,tabIndex:6,name:'voyaName',xtype:'textfield',anchor:'95%'},
	            	{fieldLabel:C_BIZ_CLASS,tabIndex:10,name:'consBizClass',store:BC_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}]},
    			{columnWidth:.25,layout:'form',border:false,labelWidth:60,labelAlign:'right',items:[
	            	{fieldLabel:C_SALES,tabIndex:3,name:'consSalesRepId',value:(USER_ALL_VIEW_FLAG==0&&USER_IS_SALES==1)?CUSER_ID:'',readOnly:(USER_ALL_VIEW_FLAG==0&&USER_IS_SALES==1),
	            		store:getSALE_S(),xtype:'combo',displayField:'userLoginName',valueField:'userId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	            	{fieldLabel:C_CONS_NO,tabIndex:6,name:'consNo',xtype:'textfield',anchor:'95%'},
	            	{fieldLabel:C_BIZ_TYPE,tabIndex:11,name:'consBizType',store:BT_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}]},
    			{columnWidth:.25,layout:'form',border:false,labelWidth:60,labelAlign:'right',items:[
	            	{fieldLabel:C_OPERATOR,tabIndex:4,name:'consOperatorId',store:getOP_S(),xtype:'combo',displayField:'userLoginName',valueField:'userId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	            	{fieldLabel:C_POD,tabIndex:8,name:'consPod',store:getPS(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
              			tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,
              			listeners:{scope:this,keydown:{fn:LP,buffer:BF}}},
	            	{fieldLabel:C_SHIP_TYPE,tabIndex:12,name:'consShipType',store:SHTY_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}]}	
	    	]},
	    	{layout:'fit',height:600,deferredRender:false,items:[doc]}]
    })
};    
Ext.extend(Fos.StatDetailTab, Ext.Panel);
Fos.StatProfitTab = function(A){
	var G_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0',C_STAT_NO_GROUP],['1',C_BOOKER],['4',C_GROU],['2',C_SALES],['3',C_POD]]});
	var DT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0',C_CONS_DATE],['1',C_SAIL_DATE]]});
	var t1=new Ext.form.ComboBox({width:80,displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'0',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:G_S});
    var t2=new Ext.form.DateField({value:(new Date()).getFirstDateOfMonth(),format:DATEF});
    var t3=new Ext.form.DateField({value:new Date(),format:DATEF});
    var t4=new Ext.form.ComboBox({width:80,displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'0',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:DT_S});
    var doc=new Ext.ux.IFrameComponent({id:A, url:''});    
	var check=function(){
		if(!t2.getValue()){XMG.alert(SYS,M_INPUT_START_TIME,function(){t2.focus();},this);return;};
		if(!t3.getValue()){XMG.alert(SYS,M_INPUT_END_TIME,function(){t3.focus();},this);return;};
	};
	this.getUrl=function(){		
		var shliId=this.find('name','shliId')[0].getValue();
		var custId=this.find('name','custId')[0].getValue();
		var consBizClass=this.find('name','consBizClass')[0].getValue();
		var consBizType=this.find('name','consBizType')[0].getValue();
		var consSalesRepId=this.find('name','consSalesRepId')[0].getValue();
		var consNo=this.find('name','consNo')[0].getValue();
		var consShipType=this.find('name','consShipType')[0].getValue();
		var consPod=this.find('name','consPod')[0].getValue();
		var grouId=this.find('name','grouId')[0].getValue();		
		var url = SERVICE_URL+'?A='+A+'&g='+t1.value+'&dt='+t4.value+'&F='+t2.value+'&T='+t3.value;		
		if(shliId) url+='&shliId='+shliId;
		if(custId) url+='&custId='+custId;
		if(consBizClass) url+='&consBizClass='+consBizClass;
		if(consBizType) url+='&consBizType='+consBizType;
		if(consSalesRepId) url+='&consSalesRepId='+consSalesRepId;
		if(consNo) url+='&consNo='+consNo;
		if(consShipType) url+='&consShipType='+consShipType;
		if(consPod) url+='&consPod='+consPod;
		if(grouId) url+='&grouId='+grouId;
		return url;
	};
	this.report=function(){check();Ext.get('IF_'+A).dom.src=this.getUrl();};
	this.clear=function(){this.find('name','sf')[0].getForm().reset();};
	this.expExcel=function(){check();OWW(this.getUrl()+'&format=xls');};	
	Fos.StatProfitTab.superclass.constructor.call(this, {id:A,title:A=='REPT_PROF'?C_STAT_PROFIT:C_STAT_PROFIT_SALES,iconCls:'stats',deferredRender:false,closable:true,autoScroll:true,
		tbar:[{xtype:'tbtext',text:C_GROUP_TYPE},t1,'-',
			t4,{xtype:'tbtext',text:C_FROM},t2,{xtype:'tbtext',text:C_TO},t3,'-',
			{text:C_GEN_REPORT,disabled:NR(M1_T+(A=='REPT_PROF'?T_PROF:T_PROF_SALES)+F_V),iconCls:'stats',scope:this,handler:this.report},'-',
			{text:C_EXPORT,disabled:NR(M1_T+(A=='REPT_PROF'?T_PROF:T_PROF_SALES)+F_E),iconCls:'print',scope:this,menu:{items:[{text:'Excel',scope:this,handler:this.expExcel}]}},'->',
			{text:C_CLEAR_FILTER,iconCls:'rotate',scope:this,handler:this.clear}],
		items:[
			{title:C_FILTER_MORE,layout:'column',name:'sf',xtype:'form',layoutConfig:{columns:3},height:120,frame:true,deferredRender:false,collapsible:true,collapsed:true,items:[
	        	{columnWidth:.4,layout:'form',labelWidth:60,labelAlign:'right',border:false,items:[
     				{fieldLabel:C_BOOKER,name:'custId',tabIndex:1,store:getCS(),
		        		xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,enableKeyEvents:true,
		        		mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,triggerAction:'all',selectOnFocus:true,anchor:'95%',
		              	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:500}}},
					{fieldLabel:C_SHLI,tabIndex:4,name:'shliId',store:getSHLI_S(),xtype:'combo',displayField:'shliName',valueField:'shliId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
     				{fieldLabel:C_BIZ_CLASS,tabIndex:7,name:'consBizClass',store:BC_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}
     			]},
	        	{columnWidth:.3,layout:'form',border:false,labelWidth:60,labelAlign:'right',items:[
	            	{fieldLabel:C_SALES,tabIndex:2,name:'consSalesRepId',value:(USER_ALL_VIEW_FLAG==0&&USER_IS_SALES==1)?CUSER_ID:'',readOnly:(USER_ALL_VIEW_FLAG==0&&USER_IS_SALES==1),store:getSALE_S(),xtype:'combo',displayField:'userLoginName',valueField:'userId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	            	{fieldLabel:C_CONS_NO,tabIndex:6,name:'consNo',xtype:'textfield',anchor:'95%'},
	            	{fieldLabel:C_BIZ_TYPE,tabIndex:8,name:'consBizType',store:BT_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}
	            ]},
    			{columnWidth:.3,layout:'form',border:false,labelWidth:60,labelAlign:'right',items:[
	            	{fieldLabel:C_GROU,tabIndex:3,name:'grouId',store:getGROU_S(),xtype:'combo',displayField:'grouName',valueField:'grouId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	            	{fieldLabel:C_POD,tabIndex:8,name:'consPod',store:getPS(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
              			tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,listeners:{scope:this,keydown:{fn:LP,buffer:BF}}},
	            	{fieldLabel:C_SHIP_TYPE,tabIndex:9,name:'consShipType',store:SHTY_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}
	            ]}
	    	]},
	    	{layout:'fit',height:600,deferredRender:false,items:[doc]}]});
};
Ext.extend(Fos.StatProfitTab, Ext.Panel);
Fos.StatACTab = function(t){
    var t1=new Ext.form.DateField({value:new Date(),format:DATEF});
    var doc=new Ext.ux.IFrameComponent({id:'AC'+t, url:''});
 	this.report=function(){
		if(!t1.getValue()){XMG.alert(SYS,M_INPUT_END_TIME,function(){t2.focus();},this);return;};
		Ext.get('IF_AC'+t).dom.src=SERVICE_URL+'?A=REPT_AC'+t+'&d='+t1.value;
	};
	this.expExcel=function(){OWW(SERVICE_URL+'?A=REPT_AC'+t+'&format=xls&d='+t1.value);};
	Fos.StatACTab.superclass.constructor.call(this, {    
    	id:'T_AC'+t,title:t=='AR'?C_STAT_AR_AC:C_STAT_AP_AC,iconCls:'stats',deferredRender:false,closable:true,autoScroll:true,
     	tbar:[{xtype:'tbtext',text:C_STAT_END_DATE},t1,'-',
		{text:C_GEN_REPORT,disabled:NR(M1_T+(t=='AR'?T_ACAR:T_ACAP)+F_V),iconCls:'stats',scope:this,handler:this.report},'-',
		{text:C_EXPORT,disabled:NR(M1_T+(t=='AR'?T_ACAR:T_ACAP)+F_E),iconCls:'print',scope:this,menu:{items:[{text:'Excel',scope:this,handler:this.expExcel}]}}],
		items:[{layout:'fit',height:600,deferredRender:false,items:[doc]}]});
};
Ext.extend(Fos.StatACTab, Ext.Panel);
Fos.StatArTab = function(T){
	var G_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0',C_STAT_NO_GROUP],['1',C_BOOKER],['7',C_GROU],['6',C_SALES],['2',C_VOYA],['3',C_CONS_NO],['4',C_CHAR],['5',C_CURR]]});
	var DT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0',C_CONS_DATE],['1',C_SAIL_DATE],['2',C_INVO_DATE]]});
	var t1=new Ext.form.ComboBox({width:80,displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'0',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:G_S});
    var t2=new Ext.form.DateField({value:(new Date()).getFirstDateOfMonth(),format:DATEF});
    var t3=new Ext.form.DateField({value:new Date(),format:DATEF});
    var t4=new Ext.form.ComboBox({width:80,displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'0',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:DT_S});
    var doc=new Ext.ux.IFrameComponent({id:T, url:''});
 	var check=function(){
		if(!t2.getValue()){XMG.alert(SYS,M_INPUT_START_TIME,function(){t2.focus();},this);return;};
		if(!t3.getValue()){XMG.alert(SYS,M_INPUT_END_TIME,function(){t3.focus();},this);return;};
	};
	this.getUrl=function(){
		var charId=this.find('name','charId')[0].getValue();
		var vessId=this.find('name','vessId')[0].getValue();
		var currCode=this.find('name','currCode')[0].getValue();
		var custId=this.find('name','custId')[0].getValue();
		var voyaName=this.find('name','voyaName')[0].getValue();
		var consBizClass=this.find('name','consBizClass')[0].getValue();
		var consBizType=this.find('name','consBizType')[0].getValue();
		var consSalesRepId=this.find('name','consSalesRepId')[0].getValue();
		var consShipType=this.find('name','consShipType')[0].getValue();
		var consStatusInvoR=this.find('name','consStatusInvoR')[0].getValue();
		var consStatusAud=this.find('name','consStatusAud')[0].getValue();
		var consStatusAr=this.find('name','consStatusAr')[0].getValue();
		var url = SERVICE_URL+'?A=REPT_'+T+'&dt='+t4.value+'&F='+t2.value+'&T='+t3.value;
		if(T=='CUEX') url = url+'&g='+t1.value;		
		if(vessId) url+='&vessId='+vessId;
		if(charId) url+='&charId='+charId;
		if(currCode) url+='&currCode='+currCode;
		if(custId) url+='&custId='+custId;
		if(voyaName) url+='&voyaName='+voyaName;
		if(consBizClass) url+='&consBizClass='+consBizClass;
		if(consBizType) url+='&consBizType='+consBizType;
		if(consSalesRepId) url+='&consSalesRepId='+consSalesRepId;
		if(consShipType) url+='&consShipType='+consShipType;
		if(consStatusAud) url+='&consStatusAud='+consStatusAud;
		if(consStatusInvoR) url+='&consStatusInvoR='+consStatusInvoR;
		if(consStatusAr) url+='&consStatusAr='+consStatusAr;
		return url;
	};
	this.report=function(){check();Ext.get('IF_'+T).dom.src=this.getUrl();};
	this.clear=function(){this.find('name','sf')[0].getForm().reset();};
	this.expExcel=function(){check();OWW(this.getUrl()+'&format=xls');};
	var b1={text:C_GEN_REPORT,disabled:NR(M1_T+T_CUEX+F_V),iconCls:'stats',scope:this,handler:this.report};
	var b2={text:C_EXPORT,disabled:NR(M1_T+T_CUEX+F_E),iconCls:'print',scope:this,menu:{items:[{text:'Excel',scope:this,handler:this.expExcel}]}};
	var b3={text:C_CLEAR_FILTER,iconCls:'rotate',scope:this,handler:this.clear};
	var tg={xtype:'tbtext',text:C_GROUP_TYPE};
	var tf={xtype:'tbtext',text:C_FROM};
	var tt={xtype:'tbtext',text:C_TO};
	Fos.StatArTab.superclass.constructor.call(this, {    
    id:T=='CUEX'?'T_CUEX':'T_SEEX',title:T=='CUEX'?C_STAT_AR:C_STAT_ARC,iconCls:'stats',closable:true,autoScroll:true,
     tbar:T=='CUEX'?[tg,t1,'-',t4,tf,t2,tt,t3,'-',b1,'-',b2,'->','-',b3]:[t4,tf,t2,tt,t3,'-',b1,'-',b2,'->','-',b3],
		items:[
			{title:C_FILTER_MORE,name:'sf',xtype:'form',layout:'column',layoutConfig:{columns:4},height:150,frame:true,deferredRender:false,collapsible:true,collapsed:true,items:[
	        	{columnWidth:.4,layout:'form',tabIndex:1,labelWidth:80,labelAlign:'right',border:false,items:[
	            	{fieldLabel:C_BOOKER,name:'custId',store:getCS(),
		        		xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,enableKeyEvents:true,
		        		mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,triggerAction:'all',selectOnFocus:true,anchor:'95%',
		              	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:500}}},
     				{fieldLabel:C_CHAR,tabIndex:4,name:'charId',store:getCHAR_S(),xtype:'combo',displayField:'charCode',valueField:'charId',
     					tpl:charTpl,itemSelector:'div.list-item',listWidth:300,listClass:'x-combo-list-small',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
     				{fieldLabel:C_BIZ_CLASS,tabIndex:7,name:'consBizClass',store:BC_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
     				{fieldLabel:C_CONS_AUDIT_STATUS,name:'consStatusAud',xtype:'combo',store:AUST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'}
     				]},
	        	{columnWidth:.3,layout:'form',border:false,labelWidth:80,labelAlign:'right',items:[
	            	{fieldLabel:C_VESS,tabIndex:2,name:'vessId',store:getVES(),enableKeyEvents:true,
     					xtype:'combo',displayField:'vessNameEn',valueField:'vessId',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
     					listeners:{scope:this,keydown:{fn:function(f,e){LV(f,e);},buffer:500}}},	            	
	            	{fieldLabel:C_CURR,tabIndex:5,name:'currCode',store:getCURR_S(),xtype:'combo',displayField:'currCode',valueField:'currCode',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	            	{fieldLabel:C_BIZ_TYPE,tabIndex:8,name:'consBizType',store:BT_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	            	{fieldLabel:C_INVO_STATUS_R,name:'consStatusInvoR',xtype:'combo',store:INST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'}
	            ]},
    			{columnWidth:.3,layout:'form',border:false,labelWidth:80,labelAlign:'right',items:[
	            	{fieldLabel:C_VOYA,tabIndex:6,name:'voyaName',xtype:'textfield',anchor:'95%'},
	           		{fieldLabel:C_SALES,tabIndex:6,name:'consSalesRepId',value:(USER_ALL_VIEW_FLAG==0&&USER_IS_SALES==1)?CUSER_ID:'',readOnly:(USER_ALL_VIEW_FLAG==0&&USER_IS_SALES==1),
	            		store:getSALE_S(),xtype:'combo',displayField:'userLoginName',valueField:'userId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	           		{fieldLabel:C_SHIP_TYPE,tabIndex:9,name:'consShipType',store:SHTY_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	           		{fieldLabel:C_WRITEOFF_STATUS_R,name:'consStatusAr',xtype:'combo',store:WRST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'}
	            ]}
	    	]},
	    	{layout:'fit',height:500,items:[doc]}]});
};
Ext.extend(Fos.StatArTab, Ext.Panel);
Fos.StatApTab = function(){
	var G_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0',C_STAT_NO_GROUP],['1',C_VENDOR],['7',C_GROU],['6',C_SALES],['2',C_VOYA],['3',C_CONS_NO],['4',C_CHAR],['5',C_CURR]]});
	var DT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0',C_CONS_DATE],['1',C_SAIL_DATE],['2',C_INVO_DATE]]});	
	var t1=new Ext.form.ComboBox({width:80,displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'0',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:G_S});
    var t2=new Ext.form.DateField({value:(new Date()).getFirstDateOfMonth(),format:DATEF});
    var t3=new Ext.form.DateField({value:new Date(),format:DATEF});
    var t4=new Ext.form.ComboBox({width:80,displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'0',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:DT_S});
    var doc=new Ext.ux.IFrameComponent({id:'VEEX', url:''});
   	var check=function(){
		if(!t2.getValue()){XMG.alert(SYS,M_INPUT_START_TIME,function(){t2.focus();},this);return;};
		if(!t3.getValue()){XMG.alert(SYS,M_INPUT_END_TIME,function(){t3.focus();},this);return;};
	};
	this.getUrl=function(){
		var charId=this.find('name','charId')[0].getValue();
		var vessId=this.find('name','vessId')[0].getValue();
		var currCode=this.find('name','currCode')[0].getValue();
		var custId=this.find('name','custId')[0].getValue();
		var voyaName=this.find('name','voyaName')[0].getValue();
		var consBizClass=this.find('name','consBizClass')[0].getValue();
		var consBizType=this.find('name','consBizType')[0].getValue();
		var consSalesRepId=this.find('name','consSalesRepId')[0].getValue();
		var consShipType=this.find('name','consShipType')[0].getValue();
		var consPol=this.find('name','consPol')[0].getValue();
		var consPod=this.find('name','consPod')[0].getValue();
		var consReceiptPlace=this.find('name','consReceiptPlace')[0].getValue();
		var consStatusAud=this.find('name','consStatusAud')[0].getValue();
		var consStatusInvoP=this.find('name','consStatusInvoP')[0].getValue();
		var consStatusAp=this.find('name','consStatusInvoP')[0].getValue();
		var url = SERVICE_URL+'?A=REPT_VEEX&g='+t1.value+'&dt='+t4.value+'&F='+t2.value+'&T='+t3.value;		
		if(vessId) url+='&vessId='+vessId;
		if(charId) url+='&charId='+charId;
		if(currCode) url+='&currCode='+currCode;
		if(custId) url+='&custId='+custId;
		if(voyaName) url+='&voyaName='+voyaName;
		if(consBizClass) url+='&consBizClass='+consBizClass;
		if(consBizType) url+='&consBizType='+consBizType;
		if(consSalesRepId) url+='&consSalesRepId='+consSalesRepId;
		if(consShipType) url+='&consShipType='+consShipType;
		if(consPol) url+='&consPol='+consPol;
		if(consPod) url+='&consPod='+consPod;
		if(consReceiptPlace) url+='&consReceiptPlace='+consReceiptPlace;
		if(consStatusAud) url+='&consStatusAud='+consStatusAud;
		if(consStatusInvoP) url+='&consStatusInvoP='+consStatusInvoP;
		if(consStatusAp) url+='&consStatusAp='+consStatusAp;
		return url;
	};
	this.report=function(){check();Ext.get('IF_VEEX').dom.src=this.getUrl();};
	this.clear=function(){this.find('name','sf')[0].getForm().reset();};
	this.expExcel=function(){check();OWW(this.getUrl()+'&format=xls');};
	Fos.StatApTab.superclass.constructor.call(this, {    
    id:'T_VEEN',title:C_STAT_AP,iconCls:'stats',closable:true,autoScroll:true,
     tbar:[
		{xtype:'tbtext',text:C_GROUP_TYPE},t1,'-',
		t4,{xtype:'tbtext',text:C_FROM},t2,{xtype:'tbtext',text:C_TO},t3,'-',
		{text:C_GEN_REPORT,disabled:NR(M1_T+T_VEEX+F_V),iconCls:'stats',scope:this,handler:this.report},'-',
		{text:C_EXPORT,disabled:NR(M1_T+T_VEEX+F_E),iconCls:'print',scope:this,menu:{items:[{text:'Excel',scope:this,handler:this.expExcel}]}},'->','-',
		{text:C_CLEAR_FILTER,iconCls:'rotate',scope:this,handler:this.clear}],
		items:[
			{title:C_FILTER_MORE,layout:'column',name:'sf',xtype:'form',layoutConfig:{columns:4},height:180,frame:true,deferredRender:false,collapsible:true,collapsed:true,items:[
	        	{columnWidth:.4,layout:'form',labelWidth:80,labelAlign:'right',border:false,items:[
	            	{fieldLabel:C_VENDOR,name:'custId',tabIndex:1,store:getCS(),
		        		xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,enableKeyEvents:true,
		        		mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,triggerAction:'all',selectOnFocus:true,anchor:'95%',
		              	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custApFlag');},buffer:500}}},					
					{fieldLabel:C_CHAR,tabIndex:4,name:'charId',store:getCHAR_S(),xtype:'combo',displayField:'charCode',valueField:'charId',
     				tpl:charTpl,itemSelector:'div.list-item',listWidth:300,listClass:'x-combo-list-small',
     				typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
					{fieldLabel:C_POL,tabIndex:8,name:'consPol',store:getPS(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
              			tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,listeners:{scope:this,keydown:{fn:LP,buffer:BF}}},
					{fieldLabel:C_BIZ_CLASS,tabIndex:7,name:'consBizClass',store:BC_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
					{fieldLabel:C_CONS_AUDIT_STATUS,name:'consStatusAud',xtype:'combo',store:AUST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'}
     			]},
	        	{columnWidth:.3,layout:'form',border:false,labelWidth:80,labelAlign:'right',items:[
	            	{fieldLabel:C_VESS,tabIndex:2,name:'vessId',store:getVES(),enableKeyEvents:true,
     					xtype:'combo',displayField:'vessNameEn',valueField:'vessId',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
     					listeners:{scope:this,keydown:{fn:function(f,e){LV(f,e);},buffer:500}}},
	            	{fieldLabel:C_CURR,tabIndex:5,name:'currCode',store:getCURR_S(),xtype:'combo',displayField:'currCode',valueField:'currCode',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	            	{fieldLabel:C_POD,tabIndex:8,name:'consPod',store:getPS(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
              			tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,
              			listeners:{scope:this,keydown:{fn:LP,buffer:BF}}},
	            	{fieldLabel:C_BIZ_TYPE,tabIndex:8,name:'consBizType',store:BT_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	            	{fieldLabel:C_INVO_STATUS_P,name:'consStatusInvoP',xtype:'combo',store:INST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'}	            	
	            ]},
    			{columnWidth:.3,layout:'form',border:false,labelWidth:80,labelAlign:'right',items:[
	            	{fieldLabel:C_VOYA,tabIndex:6,name:'voyaName',xtype:'textfield',anchor:'95%'},
	           		{fieldLabel:C_SALES,tabIndex:6,name:'consSalesRepId',value:(USER_ALL_VIEW_FLAG==0&&USER_IS_SALES==1)?CUSER_ID:'',readOnly:(USER_ALL_VIEW_FLAG==0&&USER_IS_SALES==1),
	            		store:getSALE_S(),xtype:'combo',displayField:'userLoginName',valueField:'userId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	           		{fieldLabel:C_RECEIPT_PLACE,name:'consReceiptPlace',tabIndex:12,xtype:'textfield',anchor:'95%'},
	           		{fieldLabel:C_SHIP_TYPE,tabIndex:9,name:'consShipType',store:SHTY_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	           		{fieldLabel:C_WRITEOFF_STATUS_P,name:'consStatusAp',xtype:'combo',store:WRST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'}
	            ]}]},
	    	{layout:'fit',height:600,deferredRender:false,items:[doc]}]});
};
Ext.extend(Fos.StatApTab, Ext.Panel);

Fos.SalesCommissionTab = function(){
    var d=new Date();y=d.format('Y');m=d.format('m');    
    var t1=new Ext.form.ComboBox({width:80,value:y,displayField:'NAME',valueField:'CODE',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:YY_S});
    var t2=new Ext.form.ComboBox({width:80,value:m,displayField:'NAME',valueField:'CODE',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:MM_S});
   	var store = GS('SACO_R','CSalesCommission',CSalesCommission,'sacoSalesId','ASC','','','',true);
	this.sel =GSEL;
	var re = {scope:this,
		rowselect:function(sm,row,r){
			if(this.sel!=r.get('sacoId')){
				this.sel=r.get('sacoId');				
				var s = grid2.getStore();
				s.removeAll();
				s.reload({params:{sacoSalesId:r.get('sacoSalesId'),Y:t1.value,M:t2.value}});
			}
		}
	};	
	var sm=new Ext.grid.RowSelectionModel({singleSelect:true,listeners:re});
	var c1={header:C_SALES,width:200,dataIndex:"sacoSalesName"};
	var c2={header:C_SALES_PROFIT,dataIndex: 'baseAmount',width:120,renderer:numRender};
	var c3={header:C_SALES_COMMISSION_R,dataIndex: 'commission',width:120,renderer:numRender};
 	var cm=new Ext.grid.ColumnModel([sm,c1,c2,c3]);
	cm.defaultSortable = true;
	cm.defaultWidth=100;	
 	var grid=new Ext.grid.EditorGridPanel({id:'G_COMMISSION_R',	border:true,height:400,autoScroll:true,
	    stripeRows:true,store:store,sm:sm,cm:cm});	
	
	var cs = GS('SACO_D_R','FConsign',FConsign,'consId','ASC','','','',true);
	var c5={header:C_CONS_NO,width:120,dataIndex:"consNo"};
	var c6={header:C_BOOKER,width:200,dataIndex:"custSname"};
	var c7={header:C_SAIL_DATE,width:70,dataIndex:"consSailDate",renderer:formatDate};
	var c8={header:C_PROFIT,dataIndex:"grossProfit",align:'right',renderer:numRenderColor,css:'font-weight:bold;'};
	var cm=new Ext.grid.ColumnModel([c5,c6,c7,c8]);
	var grid2=new Ext.grid.EditorGridPanel({id:'G_PROFIT_DETAIL',border:true,height:400,autoScroll:true,
	    stripeRows:true,store:cs,cm:cm});	
	    
 	this.report=function(){
		if(!t1.getValue()){XMG.alert(SYS,M_SEL_YEAR,function(){t1.focus();},this);return;}
		else if(!t2.getValue()){XMG.alert(SYS,M_SEL_MONTH,function(){t2.focus();},this);return;}
		store.load({params:{Y:t1.value,M:t2.value},scope:this});		
	};
	this.expExcel=function(){OWW(SERVICE_URL+'?A=REPT_SALES&format=xls&Y='+t1.value+'&M='+t2.value);};
	
	
	Fos.SalesCommissionTab.superclass.constructor.call(this, {    
    id:'T_SALES',title:C_STAT_SALES_COMMISSION,iconCls:'stats',deferredRender:false,closable:true,autoScroll:true,layout:'border',
     tbar:[t1,'-',t2,'-',
		{text:C_GEN_REPORT,disabled:NR(M1_T+T_SALES+F_V),iconCls:'stats',scope:this,handler:this.report},'-',
		{text:C_EXPORT,disabled:NR(M1_T+T_SALES+F_E),iconCls:'print',scope:this,menu:{items:[{text:'Excel',scope:this,handler:this.expExcel}]}}],
		items: [{title:C_SALES_COMMISSION_R,region:'center',width:400,minSize:200,maxSize:600,layout:'fit',items:[grid]},
		{title:C_SALES_PROFIT_DETAIL,region:'east',split:true,width:400,minSize:200,maxSize:600,layout:'fit',items:[grid2]}]
	});
};
Ext.extend(Fos.SalesCommissionTab,Ext.Panel);


Fos.StatPayPlanTab = function(t){
    var d=new Date();y=d.format('Y');m=d.format('m');    
    var t1=new Ext.form.ComboBox({width:80,value:y,displayField:'NAME',valueField:'CODE',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:YY_S});
    var t2=new Ext.form.ComboBox({width:80,value:m,displayField:'NAME',valueField:'CODE',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:MM_S});
    var doc=new Ext.ux.IFrameComponent({id:'PP', url:''});
 	this.report=function(){
		if(!t1.getValue()){XMG.alert(SYS,M_SEL_YEAR,function(){t1.focus();},this);return;}
		else if(!t2.getValue()){XMG.alert(SYS,M_SEL_MONTH,function(){t2.focus();},this);return;}
		Ext.get('IF_PP').dom.src=SERVICE_URL+'?A=REPT_PAY_PLAN&Y='+t1.value+'&M='+t2.value;
	};
	this.expExcel=function(){OWW(SERVICE_URL+'?A=REPT_PAY_PLAN&format=xls&Y='+t1.value+'&M='+t2.value);};
	Fos.StatPayPlanTab.superclass.constructor.call(this, {    
    id:'T_PAY_PLAN',title:C_STAT_PAY_PLAN,iconCls:'stats',deferredRender:false,closable:true,autoScroll:true,
     tbar:[t1,'-',t2,'-',
		{text:C_GEN_REPORT,disabled:NR(M1_T+T_SALES+F_V),iconCls:'stats',scope:this,handler:this.report},'-',
		{text:C_EXPORT,disabled:NR(M1_T+T_SALES+F_E),iconCls:'print',scope:this,menu:{items:[{text:'Excel',scope:this,handler:this.expExcel}]}}],
		items:[{layout:'fit',height:600,deferredRender:false,items:[doc]}]});
};
Ext.extend(Fos.StatPayPlanTab, Ext.Panel);
Fos.StatWOTab = function(t){
    var G_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0',C_STAT_NO_GROUP],['1',C_SETTLE_OBJECT],['2',C_CONS_NO],['3',C_CURR],['4',C_WRITEOFF_DATE],['5',C_CHAR]]});
	var T_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0',C_WRITEOFF_R],['1',C_WRITEOFF_P]]});
	var t1=new Ext.form.ComboBox({width:80,displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'0',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:G_S});
    var t2=new Ext.form.ComboBox({width:80,displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'0',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:T_S});
    var t3=new Ext.form.DateField({value:new Date(),format:DATEF});
    var t4=new Ext.form.DateField({value:new Date(),format:DATEF});
    var consNo=new Ext.form.TextField({width:100,value:''});
    var doc=new Ext.ux.IFrameComponent({id:'STWO', url:''});
 	this.report=function(){
		if(!t1.getValue()){XMG.alert(SYS,M_SEL_WRITEOFF_DATE,function(){t3.focus();},this);return;};
		Ext.get('IF_STWO').dom.src=SERVICE_URL+'?A=REPT_WROF&g='+t1.value+'&dt='+t2.value+'&F='+t3.value+'&T='+t4.value+'&consNo='+consNo.getValue();
	};
	this.exp=function(){OWW(SERVICE_URL+'?A=REPT_WROF&format=xls&g='+t1.value+'&dt='+t2.value+'&F='+t3.value+'&T='+t4.value+'&consNo='+consNo.getValue());};
	Fos.StatWOTab.superclass.constructor.call(this, {    
    id:'T_WROF',title:C_STAT_WRITEOFF,iconCls:'stats',deferredRender:false,closable:true,autoScroll:true,
    tbar:[{xtype:'tbtext',text:C_GROUP_TYPE},t1,'-',
		{xtype:'tbtext',text:C_WRITEOFF_TYPE},t2,'-',
		{xtype:'tbtext',text:C_WRITEOFF_DATE+C_FROM},t3,'-',
		{xtype:'tbtext',text:C_TO},t4,'-',
		{xtype:'tbtext',text:C_CONS_NO},consNo,'-',
		{text:C_GEN_REPORT,disabled:NR(M1_T+T_WROF+F_V),iconCls:'stats',scope:this,handler:this.report},'-',
		{text:C_EXPORT,disabled:NR(M1_T+T_WROF+F_E),iconCls:'print',scope:this,menu:{items:[{text:'Excel',scope:this,handler:this.exp}]}}],
		items:[{layout:'fit',height:600,deferredRender:false,items:[doc]}]});
};
Ext.extend(Fos.StatWOTab, Ext.Panel);
Fos.StatAraTab = function(t){
    var d=new Date();y=d.format('Y');
    var t1=new Ext.form.ComboBox({width:80,value:y,displayField:'NAME',valueField:'CODE',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:YY_S});   
    var doc=new Ext.ux.IFrameComponent({id:t=='R'?'ARA':'APA', url:''});
 	this.report=function(){
		if(!t1.getValue()){XMG.alert(SYS,M_SEL_YEAR,function(){t1.focus();},this);return;}
		Ext.get('IF_'+(t=='R'?'ARA':'APA')).dom.src=SERVICE_URL+'?A=REPT_ARA&T='+t+'&Y='+t1.value;
	};
	this.exp=function(){OWW(SERVICE_URL+'?A=REPT_ARA&format=xls&T='+t+'&Y='+t1.value);};
	Fos.StatAraTab.superclass.constructor.call(this, {    
    id:t=='R'?'T_ARA':'T_APA',title:t=='R'?C_STAT_ARA:C_STAT_APA,iconCls:'stats',deferredRender:false,closable:true,autoScroll:true,
	tbar:[t1,'-',
		{text:C_GEN_REPORT,iconCls:'stats',scope:this,handler:this.report},'-',
		{text:C_EXPORT,iconCls:'print',scope:this,menu:{items:[{text:'Excel',scope:this,handler:this.exp}]}}],
		items:[{layout:'fit',height:600,deferredRender:false,items:[doc]}]});
};
Ext.extend(Fos.StatAraTab,Ext.Panel);
Fos.StatPrchTab = function(){
	this.charName='';
	var DT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0',C_CONS_DATE],['1',C_SAIL_DATE]]});
    var t1=new Ext.form.DateField({value:(new Date()).getFirstDateOfMonth(),format:DATEF});
    var t2=new Ext.form.DateField({value:new Date(),format:DATEF});
    var t3=new Ext.form.ComboBox({width:80,displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'1',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:DT_S});
    var t4=new Ext.form.ComboBox({width:80,displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'P',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:EXTY_S});
    var t5=new Ext.form.ComboBox({displayField:'charCode',valueField:'charId',triggerAction:'all',
            tpl:charTpl,itemSelector:'div.list-item',listWidth:300,allowBlank:false,blankText:'',invalidText:'',mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',
            store:getCHAR_S(),
            listeners:{scope:this,select:function(c,r,i){this.charName=r.get('charName');}}
            });     	
    var doc=new Ext.ux.IFrameComponent({id:'PRCH', url:''});    
	var check=function(){
		if(!t1.getValue()){XMG.alert(SYS,M_INPUT_START_TIME,function(){t2.focus();},this);return;};
		if(!t2.getValue()){XMG.alert(SYS,M_INPUT_END_TIME,function(){t3.focus();},this);return;};
	};
	this.getUrl=function(){
		var consCarrier=this.find('name','consCarrier')[0].getValue();
		var vessId=this.find('name','vessId')[0].getValue();
		var shliId=this.find('name','shliId')[0].getValue();
		var custId=this.find('name','custId')[0].getValue();
		var voyaName=this.find('name','voyaName')[0].getValue();
		var consBizClass=this.find('name','consBizClass')[0].getValue();
		var consNo=this.find('name','consNo')[0].getValue();
		var consBizType=this.find('name','consBizType')[0].getValue();
		var consSalesRepId=this.find('name','consSalesRepId')[0].getValue();
		var consShipType=this.find('name','consShipType')[0].getValue();
		var consPod=this.find('name','consPod')[0].getValue();
		var consOperatorId=this.find('name','consOperatorId')[0].getValue();
		var url = SERVICE_URL+'?A=REPT_PRCH&expeType='+t4.value+'&charId='+t5.value+'&charName='+encodeURI(this.charName)+'&dt='+t3.value+'&F='+t1.value+'&T='+t2.value;		
		if(consCarrier) url+='&consCarrier='+consCarrier;
		if(vessId) url+='&vessId='+vessId;
		if(shliId) url+='&shliId='+shliId;
		if(custId) url+='&custId='+custId;
		if(voyaName) url+='&voyaName='+voyaName;
		if(consBizClass) url+='&consBizClass='+consBizClass;
		if(consBizType) url+='&consBizType='+consBizType;
		if(consNo) url+='&consNo='+consNo;
		if(consSalesRepId) url+='&consSalesRepId='+consSalesRepId;
		if(consShipType) url+='&consShipType='+consShipType;
		if(consPod) url+='&consPod='+consPod;
		if(consOperatorId) url+='&consOperatorId='+consOperatorId;
		return url;
	};
	this.report=function(){check();Ext.get('IF_PRCH').dom.src=this.getUrl();};
	this.clear=function(){this.find('name','sf')[0].getForm().reset();};
	this.exp=function(){check();OWW(this.getUrl()+'&format=xls');};
	Fos.StatPrchTab.superclass.constructor.call(this, {    
    id:'T_PRCH',title:C_STAT_PRCH,iconCls:'stats',deferredRender:false,closable:true,autoScroll:true,
	tbar:[t4,t5,t3,{xtype:'tbtext',text:C_FROM},t1,{xtype:'tbtext',text:C_TO},t2,'-',
		{text:C_GEN_REPORT,iconCls:'stats',scope:this,handler:this.report},'-',
		{text:C_EXPORT,iconCls:'print',scope:this,menu:{items:[{text:'Excel',scope:this,handler:this.exp}]}},'->',
		{text:C_CLEAR_FILTER,iconCls:'rotate',scope:this,handler:this.clear}],
		items:[{title:C_FILTER_MORE,layout:'column',name:'sf',xtype:'form',layoutConfig:{columns:4},height:120,frame:true,deferredRender:false,collapsible:true,collapsed:true,items:[
	        	{columnWidth:.25,layout:'form',labelWidth:60,labelAlign:'right',border:false,items:[
	            	{fieldLabel:C_CARRIER,tabIndex:1,name:'consCarrier',store:getCS(),enableKeyEvents:true,
		            	tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
		            	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custCarrierFlag');},buffer:500}}},
     				{fieldLabel:C_VESS,tabIndex:5,name:'vessId',store:getVES(),enableKeyEvents:true,
     					xtype:'combo',displayField:'vessNameEn',valueField:'vessId',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
     					listeners:{scope:this,keydown:{fn:function(f,e){LV(f,e);},buffer:500}}},
     				{fieldLabel:C_SHLI,tabIndex:9,name:'shliId',store:getSHLI_S(),xtype:'combo',displayField:'shliName',valueField:'shliId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}
     			]},
	        	{columnWidth:.25,layout:'form',border:false,labelWidth:60,labelAlign:'right',items:[
	            	{fieldLabel:C_BOOKER,name:'custId',tabIndex:2,store:getCS(),
		        		xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,enableKeyEvents:true,
		        		mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,triggerAction:'all',selectOnFocus:true,anchor:'95%',
		              	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:500}}},
	            	{fieldLabel:C_VOYA,tabIndex:6,name:'voyaName',xtype:'textfield',anchor:'95%'},
	            	{fieldLabel:C_BIZ_CLASS,tabIndex:10,name:'consBizClass',store:BC_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}
	            ]},
    			{columnWidth:.25,layout:'form',border:false,labelWidth:60,labelAlign:'right',items:[
	            	{fieldLabel:C_SALES,tabIndex:3,name:'consSalesRepId',value:(USER_ALL_VIEW_FLAG==0&&USER_IS_SALES==1)?CUSER_ID:'',readOnly:(USER_ALL_VIEW_FLAG==0&&USER_IS_SALES==1),
	            		store:getSALE_S(),xtype:'combo',displayField:'userLoginName',valueField:'userId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	            	{fieldLabel:C_CONS_NO,tabIndex:6,name:'consNo',xtype:'textfield',anchor:'95%'},
	            	{fieldLabel:C_BIZ_TYPE,tabIndex:11,name:'consBizType',store:BT_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}
	            ]},
    			{columnWidth:.25,layout:'form',border:false,labelWidth:60,labelAlign:'right',items:[
	            	{fieldLabel:C_OPERATOR,tabIndex:4,name:'consOperatorId',store:getOP_S(),xtype:'combo',displayField:'userLoginName',valueField:'userId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	            	{fieldLabel:C_POD,tabIndex:8,name:'consPod',store:getPS(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
              			tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,listeners:{scope:this,keydown:{fn:LP,buffer:BF}}},
	            	{fieldLabel:C_SHIP_TYPE,tabIndex:12,name:'consShipType',store:SHTY_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}
	            ]}	
	    	]},
	    	{layout:'fit',height:600,deferredRender:false,items:[doc]}]});
};    
Ext.extend(Fos.StatPrchTab, Ext.Panel);
Fos.StatPrcoTab = function(){
	this.charName='';
	var DT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0',C_CONS_DATE],['1',C_SAIL_DATE]]});
    var t1=new Ext.form.DateField({value:(new Date()).getFirstDateOfMonth(),format:DATEF});
    var t2=new Ext.form.DateField({value:new Date(),format:DATEF});
    var t3=new Ext.form.ComboBox({width:80,displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'1',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:DT_S});
    var doc=new Ext.ux.IFrameComponent({id:'PRCO', url:''});    
	var check=function(){
		if(!t1.getValue()){XMG.alert(SYS,M_INPUT_START_TIME,function(){t2.focus();},this);return;};
		if(!t2.getValue()){XMG.alert(SYS,M_INPUT_END_TIME,function(){t3.focus();},this);return;};
	};
	this.getUrl=function(){
		var consCarrier=this.find('name','consCarrier')[0].getValue();
		var vessId=this.find('name','vessId')[0].getValue();
		var shliId=this.find('name','shliId')[0].getValue();
		var custId=this.find('name','custId')[0].getValue();
		var voyaName=this.find('name','voyaName')[0].getValue();
		var consBizClass=this.find('name','consBizClass')[0].getValue();
		var consNo=this.find('name','consNo')[0].getValue();
		var consBizType=this.find('name','consBizType')[0].getValue();
		var consSalesRepId=this.find('name','consSalesRepId')[0].getValue();
		var consShipType=this.find('name','consShipType')[0].getValue();
		var consPod=this.find('name','consPod')[0].getValue();
		var consOperatorId=this.find('name','consOperatorId')[0].getValue();
		var url = SERVICE_URL+'?A=REPT_PRCO&dt='+t3.value+'&F='+t1.value+'&T='+t2.value;		
		if(consCarrier) url+='&consCarrier='+consCarrier;
		if(vessId) url+='&vessId='+vessId;
		if(shliId) url+='&shliId='+shliId;
		if(custId) url+='&custId='+custId;
		if(voyaName) url+='&voyaName='+voyaName;
		if(consBizClass) url+='&consBizClass='+consBizClass;
		if(consBizType) url+='&consBizType='+consBizType;
		if(consNo) url+='&consNo='+consNo;
		if(consSalesRepId) url+='&consSalesRepId='+consSalesRepId;
		if(consShipType) url+='&consShipType='+consShipType;
		if(consPod) url+='&consPod='+consPod;
		if(consOperatorId) url+='&consOperatorId='+consOperatorId;
		return url;
	};
	this.report=function(){check();Ext.get('IF_PRCO').dom.src=this.getUrl();};
	this.clear=function(){this.find('name','sf')[0].getForm().reset();};
	this.expExcel=function(){check();OWW(this.getUrl()+'&format=xls');};
	Fos.StatPrchTab.superclass.constructor.call(this, {    
    id:'T_PRCO',title:C_STAT_PRCO,iconCls:'stats',deferredRender:false,closable:true,autoScroll:true,
	tbar:[t3,{xtype:'tbtext',text:C_FROM},t1,{xtype:'tbtext',text:C_TO},t2,'-',
		{text:C_GEN_REPORT,iconCls:'stats',scope:this,handler:this.report},'-',
		{text:C_EXPORT,iconCls:'print',scope:this,menu:{items:[{text:'Excel',scope:this,handler:this.expExcel}]}},'->',
		{text:C_CLEAR_FILTER,iconCls:'rotate',scope:this,handler:this.clear}],
		items:[{title:C_FILTER_MORE,layout:'column',name:'sf',xtype:'form',layoutConfig:{columns:4},height:120,frame:true,deferredRender:false,collapsible:true,collapsed:true,items:[
	        	{columnWidth:.25,layout:'form',labelWidth:60,labelAlign:'right',border:false,items:[
	            	{fieldLabel:C_CARRIER,tabIndex:1,name:'consCarrier',store:getCS(),enableKeyEvents:true,
		            	tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
		            	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custCarrierFlag');},buffer:500}}},
     				{fieldLabel:C_VESS,tabIndex:5,name:'vessId',store:getVES(),enableKeyEvents:true,
     					xtype:'combo',displayField:'vessNameEn',valueField:'vessId',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
     					listeners:{scope:this,keydown:{fn:function(f,e){LV(f,e);},buffer:500}}},
     				{fieldLabel:C_SHLI,tabIndex:9,name:'shliId',store:getSHLI_S(),xtype:'combo',displayField:'shliName',valueField:'shliId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}
     			]},
	        	{columnWidth:.25,layout:'form',border:false,labelWidth:60,labelAlign:'right',items:[
	            	{fieldLabel:C_BOOKER,name:'custId',tabIndex:2,store:getCS(),
		        		xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,enableKeyEvents:true,
		        		mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,triggerAction:'all',selectOnFocus:true,anchor:'95%',
		              	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:500}}},
	            	{fieldLabel:C_VOYA,tabIndex:6,name:'voyaName',xtype:'textfield',anchor:'95%'},
	            	{fieldLabel:C_BIZ_CLASS,tabIndex:10,name:'consBizClass',store:BC_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}
	            ]},
    			{columnWidth:.25,layout:'form',border:false,labelWidth:60,labelAlign:'right',items:[
	            	{fieldLabel:C_SALES,tabIndex:3,name:'consSalesRepId',store:getSALE_S(),xtype:'combo',displayField:'userLoginName',valueField:'userId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	            	{fieldLabel:C_CONS_NO,tabIndex:6,name:'consNo',xtype:'textfield',anchor:'95%'},
	            	{fieldLabel:C_BIZ_TYPE,tabIndex:11,name:'consBizType',store:BT_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}
	            ]},
    			{columnWidth:.25,layout:'form',border:false,labelWidth:60,labelAlign:'right',items:[
	            	{fieldLabel:C_OPERATOR,tabIndex:4,name:'consOperatorId',value:(USER_ALL_VIEW_FLAG==0&&USER_IS_SALES==1)?CUSER_ID:'',readOnly:(USER_ALL_VIEW_FLAG==0&&USER_IS_SALES==1),
	            		store:getOP_S(),xtype:'combo',displayField:'userLoginName',valueField:'userId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	            	{fieldLabel:C_POD,tabIndex:8,name:'consPod',store:getPS(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
              			tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,
              			listeners:{scope:this,keydown:{fn:LP,buffer:BF}}},
	            	{fieldLabel:C_SHIP_TYPE,tabIndex:12,name:'consShipType',store:SHTY_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}
	            ]}	
	    	]},
	    	{layout:'fit',height:600,deferredRender:false,items:[doc]}]});
};
Ext.extend(Fos.StatPrcoTab, Ext.Panel);
function CreateMenu(t,c,m,f){
 	return {text:t,iconCls :'grid',scope:this,handler:function(){
 		if(''==GR()) {XMG.alert(SYS,M_SESSION_TIMEOUT);logout();return}
 		if(m!='' && NR(m)){XMG.alert(SYS,M_NR);return}
		T_MAIN.setActiveTab(T_MAIN.getComponent(c)?T_MAIN.getComponent(c):T_MAIN.add(f()));}};
};
function NaviMenu(t,c,f){
 	return {text:t,iconCls:'grid',scope:this,handler:function(){T_MAIN.setActiveTab(T_MAIN.getComponent(c)?T_MAIN.getComponent(c):T_MAIN.add(f()));}};
};
function getContPanel(){
	var items=[];
	if(!NR(M1_C+M2_A)) items[items.length]=NaviMenu(C_IMP_A,'G_CONS_I_C',function(){return new Fos.ConsignGrid('I','C','');});
	if(!NR(M1_C+M2_F)) items[items.length]=NaviMenu(C_IMP_F,'G_CONS_I_C_FCL',function(){return new Fos.ConsignGrid('I','C','FCL');});
	if(!NR(M1_C+M2_L)) items[items.length]=NaviMenu(C_IMP_L,'G_CONS_I_C_LCL',function(){return new Fos.ConsignGrid('I','C','LCL');});
	if(!NR(M1_C+M2_AE)) items[items.length]=NaviMenu(C_EXP_A,'G_CONS_E_C',function(){return new Fos.ConsignGrid('E','C','');});
	if(!NR(M1_C+M2_FE)) items[items.length]=NaviMenu(C_EXP_F,'G_CONS_E_C_FCL',function(){return new Fos.ConsignGrid('E','C','FCL');});
	if(!NR(M1_C+M2_LE)) items[items.length]=NaviMenu(C_EXP_L,'G_CONS_E_C_LCL',function(){return new Fos.ConsignGrid('E','C','LCL');});
	return new Ext.Panel({title:C_CONT+'(1)',collapsible:true,layout:'fit',
		items:new Ext.menu.Menu({floating:false, style: {border:'0px',background:'transparent'},items:items})});
};
function getAirPanel(){
	var items=[];
	if(!NR(M1_A+M2_I)) items[items.length]=NaviMenu(C_IMP_AIR,'G_CONS_I_A',function(){return new Fos.ConsignGrid('I','A','');});
	if(!NR(M1_A+M2_E)) items[items.length]=NaviMenu(C_EXP_AIR,'G_CONS_E_A',function(){return new Fos.ConsignGrid('E','A','');});
	return new Ext.Panel({title:C_AIR+'(3)',collapsible:true,layout:'fit',
		items:new Ext.menu.Menu({floating:false, style: {border:'0px',background:'transparent'},items:items})});
};
function getCudePanel(){
	var items=[];
	if(!NR(M1_G+M2_I)) items[items.length]=NaviMenu(C_IMP_CUDE,'G_CONS_I_G',function(){return new Fos.ConsignGrid('I','G','');});
	if(VERSION==0&&!NR(M1_G+M2_I)) items[items.length]=NaviMenu(C_IMP_CUDE_E,'G_CONS_I_G',function(){return new Fos.ConsignGrid('I','G','',1);});
	if(!NR(M1_G+M2_E)) items[items.length]=NaviMenu(C_EXP_CUDE,'G_CONS_E_G',function(){return new Fos.ConsignGrid('E','G','');});
	if(VERSION==0&&!NR(M1_G+M2_E)) items[items.length]=NaviMenu(C_EXP_CUDE_E,'G_CONS_E_G_E',function(){return new Fos.ConsignGrid('E','G','',1);});
	return new Ext.Panel({title:C_SR_CUDE+'(4)',collapsible:true,layout:'fit',
		items:new Ext.menu.Menu({floating:false, style: {border:'0px',background:'transparent'},items:items})});
};
function getInspPanel(){
	var items=[];
	if(!NR(M1_I+M2_I)) items[items.length]=NaviMenu(C_IMP_INSP,'G_CONS_I_I',function(){return new Fos.ConsignGrid('I','I','');});
	if(!NR(M1_I+M2_E)) items[items.length]=NaviMenu(C_EXP_INSP,'G_CONS_E_I',function(){return new Fos.ConsignGrid('E','I','');});
	return new Ext.Panel({title:C_SR_INSP+'(5)',collapsible:true,layout:'fit',
		items:new Ext.menu.Menu({floating:false, style: {border:'0px',background:'transparent'},items:items})});
};
function getDocPanel(){
	var items=[];
	if(!NR(M1_D+F_V)) items[items.length]=NaviMenu(C_DOC_ALL,'G_DOC_A',function(){return new Fos.DocGrid('A');});
	if(!NR(M1_D+F_V)) items[items.length]=NaviMenu(C_DOC_NOT_RETURN,'G_DOC_B',function(){return new Fos.DocGrid('B');});
	if(!NR(M1_D+F_V)) items[items.length]=NaviMenu(C_DOC_RETURN_NOT_BACK,'G_DOC_C',function(){return new Fos.DocGrid('C');});
	if(!NR(M1_D+F_V)) items[items.length]=NaviMenu(C_DOC_BACK,'G_DOC_D',function(){return new Fos.DocGrid('D');});
	return new Ext.Panel({title:C_DOC_MGT+'(6)',collapsible:true,layout:'fit',
		items:new Ext.menu.Menu({floating:false, style: {border:'0px',background:'transparent'},items:items})});
};
function getStaPanel(){
	var items=[];
	if(!NR(M1_T+T_BUSI)) items[items.length]=NaviMenu(C_STAT_BIZ_SUM,'REPT_BUSI',function(){return new Fos.StatSumTab('REPT_BUSI');});
	if(!NR(M1_T+T_BUSI)) items[items.length]=NaviMenu(C_STAT_BIZ_SUM_SALES,'REPT_BUSI_SALES',function(){return new Fos.StatSalesSumTab();});
	if(!NR(M1_T+T_BUEX)) items[items.length]=NaviMenu(C_STAT_PROFIT_SUM,'REPT_BUEX',function(){return new Fos.StatSumTab('REPT_BUEX');});
	if(!NR(M1_T+T_PTEU)) items[items.length]=NaviMenu(C_STAT_PROFIT_CONT,'REPT_PTEU',function(){return new Fos.StatContProfitTab();});
	if(!NR(M1_T+T_BUDE)) items[items.length]=NaviMenu(C_STAT_BIZ_DETAIL,'REPT_BUDE',function(){return new Fos.StatDetailTab('REPT_BUDE');});
	if(!NR(M1_T+T_BUDS)) items[items.length]=NaviMenu(C_STAT_BIZ_DETAIL_SALES,'REPT_BUDS',function(){return new Fos.StatDetailTab('REPT_BUDS');});
	if(!NR(M1_T+T_PROF)) items[items.length]=NaviMenu(C_STAT_PROFIT,'REPT_PROF',function(){return new Fos.StatProfitTab('REPT_PROF');});
	if(VERSION==0&&!NR(M1_T+T_PROF_SALES)) items[items.length]=NaviMenu(C_STAT_PROFIT_SALES,'REPT_PROF_SALES',function(){return new Fos.StatProfitTab('REPT_PROF_SALES');});
	if(!NR(M1_T+T_ACAR)) items[items.length]=NaviMenu(C_STAT_AR_AC,'T_ACAR',function(){return new Fos.StatACTab('AR');});
	if(!NR(M1_T+T_ACAP)) items[items.length]=NaviMenu(C_STAT_AP_AC,'T_ACAP',function(){return new Fos.StatACTab('AP');});
	if(!NR(M1_T+T_CUEX)) items[items.length]=NaviMenu(C_STAT_AR,'T_CUEX',function(){return new Fos.StatArTab('CUEX');});
	if(!NR(M1_T+T_VEEX)) items[items.length]=NaviMenu(C_STAT_AP,'T_VEEN',function(){return new Fos.StatApTab();});
	if(VERSION==0&&!NR(M1_T+T_CUEX)) items[items.length]=NaviMenu(C_STAT_ARC,'T_SEEX',function(){return new Fos.StatArTab('SEEX');});
	if(!NR(M1_T+T_WROF)) items[items.length]=NaviMenu(C_STAT_WRITEOFF,'T_WROF',function(){return new Fos.StatWOTab();});
	if(!NR(M1_T+T_ARA)) items[items.length]=NaviMenu(C_STAT_ARA,'T_ARA',function(){return new Fos.StatAraTab('R');});
	if(!NR(M1_T+T_APA)) items[items.length]=NaviMenu(C_STAT_APA,'T_APA',function(){return new Fos.StatAraTab('P');});
	if(VERSION==0&&!NR(M1_T+T_PAY_PLAN)) items[items.length]=NaviMenu(C_STAT_PAY_PLAN,'T_PAY_PLAN',function(){return new Fos.StatPayPlanTab();});
	if(VERSION==0&&!NR(M1_T+T_PRCH)) items[items.length]=NaviMenu(C_STAT_PRCH,'T_PRCH',function(){return new Fos.StatPrchTab();});
	if(VERSION==0&&!NR(M1_T+T_PRCO)) items[items.length]=NaviMenu(C_STAT_PRCO,'T_PRCO',function(){return new Fos.StatPrcoTab();});
	return new Ext.Panel({title:C_STAT+'(8)',collapsible:true,autoScroll:true,layout:'fit',
		items:new Ext.menu.Menu({floating:false, style: {border:'0px',background:'transparent'},items:items})});
};
function getCusPanel(){
	var items=[];
	if(!NR(M1_V+V_PRSH+F_V)) items[items.length]=NaviMenu(C_PRICE_MANAGEMENT,'G_PRSH',function(){return new Fos.PriceSheetGrid();});
	if(!NR(M1_V+V_SAQU+F_V)) items[items.length]=NaviMenu(C_COMMISSION,'T_COMM',function(){return new Fos.CommissionTab();});
	if(!NR(M1_V+V_SAQU+F_V)) items[items.length]=NaviMenu(C_SALES_COMMISSION,'G_SACO',function(){return new Fos.SalesCommissionGrid();});
	if(!NR(M1_T+T_SALES)) items[items.length]=NaviMenu(C_STAT_SALES_COMMISSION,'T_SALES',function(){return new Fos.SalesCommissionTab();});
	if(!NR(M1_V+V_CUST+F_V)) items[items.length]=NaviMenu(C_CUST,'G_CUST',function(){return new Fos.CustomerGrid();});
	if(!NR(M1_V+V_CUCA+F_V)) items[items.length]=NaviMenu(C_CUCA,'G_CUCA',function(){return showCustomerCategory();});
	return  new Ext.Panel({title:C_CUST+'(9)',collapsible:true,layout:'fit',
		items:new Ext.menu.Menu({floating:false, style: {border:'0px',background:'transparent'},items:items})});
};
function getWsPanel(){
	var items=[];
	if(!NR(M1_W+W_WUSR)) items[items.length]=NaviMenu(C_WS_USER,'G_WUSR',function(){return new Fos.WusrGrid();});
	if(!NR(M1_W+W_WINQ)) items[items.length]=NaviMenu(C_WS_INQUIRY_LIST,'G_WINQ',function(){return new Fos.WinqGrid();});
	if(!NR(M1_W+W_CONS)) items[items.length]=NaviMenu(C_WS_CONS_LIST,'G_WCON',function(){return new Fos.WconGrid();});
	return   new Ext.Panel({title:C_WS+'(9)',collapsible:true,layout:'fit',
		items:new Ext.menu.Menu({floating:false, style: {border:'0px',background:'transparent'},items:items})});
};

	
function CreateMenu2(t,c,m,f){
 	return {text:t,iconCls :'grid',scope:this,handler:function(){
 		if(''==GR()) {XMG.alert(SYS,M_SESSION_TIMEOUT);logout();return}
 		if(NR(m)){XMG.alert(SYS,M_NR);return}
		f();}};
};

function getSysPanel(){
	var items=[];
	if(!NR(M1_P+A_GROU+F_V)) items[items.length]=NaviMenu(C_GROU,'T_GROU',function(){return new Fos.GroupTab();});
	if(!NR(M1_P+A_ROLE+F_V)) items[items.length]=NaviMenu(C_FUNC_PERMISSION,'T_ROLE',function(){return new Fos.RoleTab();});
	if(!NR(M1_P+A_USER+F_V)) items[items.length]=NaviMenu(C_USER_MGT,'T_USER',function(){return new Fos.UserTab();});
	if(!NR(M1_P+A_TEMP+F_V)) items[items.length]=NaviMenu(C_TEMP_MGT,'G_TEMP',function(){return showG_TEMP();});
	if(!NR(M1_P+A_COCO+F_V)) items[items.length]=NaviMenu(C_COCO,'G_COCO',function(){return showP_COCO();});
	if(!NR(M1_P+A_COCO+F_V)) items[items.length]=NaviMenu(C_TASK_CFG,'T_TATY',function(){return new Fos.TatyTab();});
	if(!NR(M1_P+A_COCO+F_V)) items[items.length]=NaviMenu(C_ACT_LOG,'G_ACLO',function(){return new Fos.AcloGrid();});
	items[items.length]=NaviMenu(C_ONLINE_USER,'W_MESS',function(){var w=new Fos.OnlineUserWin();w.show();});
	if(!NR(M1_P+A_COCO+F_V)) items[items.length]=NaviMenu(C_MSG_TOPIC_SUB,'T_METO',function(){return new Fos.MetoTab();});
	return  new Ext.Panel({title:C_SYSTEM_MGT+'(B)',collapsible:true,layout:'fit',
		items:new Ext.menu.Menu({floating:false, style: {border:'0px',background:'transparent'},items:items})});
};

function getPMenu(){
	var items=[];
	if(!NR(M1_C)) items[items.length]=getContPanel();
	if(!NR(M1_B)) items[items.length]=createBulkTree();
	if(!NR(M1_A)) items[items.length]=getAirPanel();
	if(!NR(M1_G)) items[items.length]=getCudePanel();
	if(!NR(M1_I)) items[items.length]=getInspPanel();
	if(!NR(M1_D)) items[items.length]=getDocPanel();
	if(!NR(M1_S)) items[items.length]=createSMTree();
	if(!NR(M1_T)) items[items.length]=getStaPanel();
	if(!NR(M1_V)) items[items.length]=getCusPanel();
	if(!NR(M1_J)) items[items.length]=createGMTree();
	if(!NR(M1_P)) items[items.length]=getSysPanel();
	if(VERSION==1&&!NR(M1_W)) items[items.length]=getWsPanel();
	return new Ext.Panel({
		id:'AP',title:C_SYSTEM_MENU,region:'west',split:true,collapsible: true,collapseMode: 'mini',
		layout:'accordion',width:200,minWidth:150,maxSize: 400,
		items:items});
};
var P_MENU = getPMenu();

new Ext.KeyMap(Ext.getDoc(), {
	key:[49,50,51,52,53,54,55,56,57,61,62,63,65,66,67,68,72,73,83],alt:true,
	handler: function(k, e) {
	 	var t=T_MAIN.getActiveTab();
	 	if(t)
	 	{
	 		switch(k) {
				case Ext.EventObject.C:T_MAIN.remove(t);break;
				case Ext.EventObject.ESC:T_MAIN.remove(t);break;
	 		}
		}
	 	switch(k) {
			case Ext.EventObject.H:	P_MENU.collapse();break;
			case Ext.EventObject.S:	P_MENU.expand();break;
			case Ext.EventObject.ONE:	contPanel.expand();break;
			case Ext.EventObject.TWO:	bulkPanel.expand();break;
			case Ext.EventObject.THREE:	airPanel.expand();break;
			case Ext.EventObject.FOUR:	cudePanel.expand();break;
			case Ext.EventObject.FIVE:	inspPanel.expand();break;
			case Ext.EventObject.SIX:	docPanel.expand();break;
			case Ext.EventObject.SEVEN:	setPanel.expand();break;
			case Ext.EventObject.EIGHT:	staPanel.expand();break;
			case Ext.EventObject.NINE:	cusPanel.expand();break;
			case Ext.EventObject.A:	genPanel.expand();break;
			case Ext.EventObject.B:	sysPanel.expand();break;
	 	}
	},
	stopEvent: true
});
new Ext.KeyMap(Ext.getDoc(), {
	key:[Ext.EventObject.ESC],
	handler: function(k, e) {
	 	var t=T_MAIN.getActiveTab();
	 	if(t)
	 	{
	 		switch(k) {case Ext.EventObject.ESC:T_MAIN.remove(t);break;}
		}	 	
	},
	stopEvent: true
});

function CreateNode(t,c,m,f){return new Ext.tree.TreeNode({text:t,id:'M_'+c,leaf:true,listeners:{
	click:function(n,e){
		if(NR(m)){XMG.alert(SYS,M_NR);return}
		T_MAIN.setActiveTab(T_MAIN.getComponent('G_'+c)?T_MAIN.getComponent('G_'+c):T_MAIN.add(f()));}}})};
		
function createBulkTree(){
	var root=new Ext.tree.TreeNode({text:C_BULK,leaf:false});
	if(!NR(M1_B+M2_BC)){
		var fconS = CreateNode(S_SHIP_S,'FCON_S',M1_B+M2_BC+F_V,function(){return new Fos.ContractListTab('S');});
		var fconNS = CreateNode(S_SHIP_P,'FCON_P',M1_B+M2_BC+F_CM,function(){return new Fos.ContractListTab('P');});
		var fcon = new Ext.tree.TreeNode({text:C_FCON,leaf:false,expanded:true});
		fcon.appendChild(fconS);
		fcon.appendChild(fconNS);
		root.appendChild(fcon);
	}
	if(!NR(M1_B+M2_BV)){
		var voya = CreateNode(C_SHIP_DATE,'VOYA',M1_B+M2_BV,function(){return showG_VOYA();});
		root.appendChild(voya);
		var task = CreateNode(C_TASK_LIST,'TASK_B',M1_B+M2_BV,function(){return new Fos.TaskTab(BC_E,BT_B);});
		root.appendChild(task);
		
		var paliS = CreateNode(C_SAILED,'PALI_X_S',M1_B+M2_BV,function(){return new Fos.PakingListGrid('S');});
		var paliN = CreateNode(C_NOT_SAILED,'PALI_X_N',M1_B+M2_BV,function(){return new Fos.PakingListGrid('N');});
		var pali = new Ext.tree.TreeNode({text:C_PACKING_LIST,leaf:false,expanded:true});
		pali.appendChild(paliS);
		pali.appendChild(paliN);
		root.appendChild(pali);
	}
	if(!NR(M1_B+M2_E)){
		var buex = CreateNode(C_EXP_BULK,'CONS_E_B',M1_B+M2_E,function(){return new Fos.ConsignGrid('E','B','');});
		root.appendChild(buex);
	}
	if(!NR(M1_B+M2_I)){
		var buim = CreateNode(C_IMP_BULK,'CONS_I_B',M1_B+M2_I,function(){return new Fos.ConsignGrid('I','B','');});	
		root.appendChild(buim);
	}
	var tree = new Ext.tree.TreePanel({disabled:NR(M1_B),title:C_BULK+'(2)',rootVisible:false,
		animate:true,enableDD:false,autoScroll:true,containerScroll:true,root:root
	});
	return tree;
};
function createSMTree(){
	var root=new Ext.tree.TreeNode({text:C_SETTLE,leaf:false});
	if(!NR(M1_S+S_COAU+F_V)){
		var coau = CreateNode(C_CONS_AUDIT,'COAU',M1_S+S_COAU+F_V,function(){return new Fos.ConsignAuditGrid();});
		root.appendChild(coau);
	}
	if(!NR(M1_S+S_BILL_R)||!NR(M1_S+S_INVO_R)||!NR(M1_S+S_PR_R)||!NR(M1_S+S_VOUC_R)){
		var arN = new Ext.tree.TreeNode({text:C_SETTLE_AR,leaf:false,expanded:true});
		if(!NR(M1_S+S_BILL_R)){
			var billR = CreateNode(C_BILL_R,'BILL_R',M1_S+S_BILL_R+F_V,function(){return new Fos.BillGrid('R');});
			arN.appendChild(billR);
		}
		if(!NR(M1_S+S_INVO_R)){
			var invoR = CreateNode(C_INVO_R,'INVO_R',M1_S+S_INVO_R+F_V,function(){return new Fos.InvoiceGrid('R');});
			arN.appendChild(invoR);
		}
		if(!NR(M1_S+S_PR_R)){
			var prR = CreateNode(C_PR_R,'PR_R',M1_S+S_PR_R+F_V,function(){return new Fos.PrGrid('R');});
			arN.appendChild(prR);
		}
		if(!NR(M1_S+S_VOUC_R)){
			var voucR = CreateNode(C_WRITEOFF_R,'VOUC_R',M1_S+S_VOUC_R+F_V,function(){return new Fos.VoucherGrid('R');});
			arN.appendChild(voucR);
		}
		root.appendChild(arN);
	}
	if(!NR(M1_S+S_BILL_P)||!NR(M1_S+S_INVO_P)||!NR(M1_S+S_PR_P)||!NR(M1_S+S_VOUC_P)){
		var apN= new Ext.tree.TreeNode({text:C_SETTLE_AP,leaf:false,expanded:true});
		if(!NR(M1_S+S_BILL_P)){
			var billP = CreateNode(C_BILL_P,'BILL_P',M1_S+S_BILL_P+F_V,function(){return new Fos.BillGrid('P');});	
			apN.appendChild(billP);
		}
		if(!NR(M1_S+S_INVO_P)){
			var invoP = CreateNode(C_INVO_P,'INVO_P',M1_S+S_INVO_P+F_V,function(){return new Fos.InvoiceGrid('P');});	
			apN.appendChild(invoP);
		}
		if(!NR(M1_S+S_PR_P)){
			var prP = CreateNode(C_PR_P,'PR_P',M1_S+S_PR_P+F_V,function(){return new Fos.PrGrid('P');});	
			apN.appendChild(prP);
		}
		if(!NR(M1_S+S_VOUC_P)){
			var voucP = CreateNode(C_WRITEOFF_P,'VOUC_P',M1_S+S_VOUC_P+F_V,function(){return new Fos.VoucherGrid('P');});
			apN.appendChild(voucP);
		}
		root.appendChild(apN);
	}
	if(!NR(M1_S+S_INNO)){
		var inno = CreateNode(C_INNO_MGT,'INNO',M1_S+S_INNO+F_V,function(){return new Fos.InvoNoGrid();});
		root.appendChild(inno);
	}
	if(!NR(M1_S+S_INNO)){
		var bala = CreateNode(C_CUST_BALANCE,'BALA',M1_S+S_INNO+F_V,function(){return new Fos.BalaGrid();});
		root.appendChild(bala);
	}
	if(!NR(M1_S+S_EXRA)){
		var exra = CreateNode(C_EX_RATE,'EXRA',M1_S+S_EXRA+F_V,function(){return new Fos.RateTab();});
		root.appendChild(exra);
	}
	if(!NR(M1_S+S_INRA)){
		var inra = CreateNode(C_INTEREST_RATE,'INRA',M1_S+S_INRA+F_V,showG_INRA);
		root.appendChild(inra);
	}
	if(!NR(M1_S+S_EXHI)){
		var exhi = CreateNode(C_EXHI_BATCH,'EXHI',M1_S+S_EXHI,function(){return new Fos.ExhiGrid();});
		root.appendChild(exhi);
	}
	var tree = new Ext.tree.TreePanel({disabled:NR(M1_S),title:C_SETTLE+'(7)',rootVisible:false,
		animate:true,enableDD:false,autoScroll:true,containerScroll:true,root:root
	});
	return tree;
};
function createGMTree(){	
	var root=new Ext.tree.TreeNode({text:C_MASTER_DATA,leaf:false});
	
	var biz = new Ext.tree.TreeNode({text:C_BIZ_RELATED,leaf:false});
	if(!NR(M1_J+G_VESS)){
		var vess = CreateNode(C_VESS,'VESS',M1_J+G_VESS,showG_VESS);
		biz.appendChild(vess);
	}
	if(!NR(M1_J+G_PORT)){
		var port = CreateNode(C_PORT,'PORT',M1_J+G_PORT,function(){return showG_PORT('0');});
		biz.appendChild(port);
	}
	if(!NR(M1_J+G_AIRP)){
		var airp = CreateNode(C_AIRP,'AIRP',M1_J+G_AIRP,function(){return showG_PORT('1');});
		biz.appendChild(airp);
	}
	if(!NR(M1_J+G_PLAC)){
		var plac = CreateNode(C_PLAC,'PLAC',M1_J+G_PLAC,showG_PLAC);
		biz.appendChild(plac);
	}
	if(!NR(M1_J+G_DOTY)){
		var doty = CreateNode(C_DOTY,'DOTY',M1_J+G_DOTY,showG_DOTY);
		biz.appendChild(doty);
	}
	if(!NR(M1_J+G_SHLI)){
		var shli = CreateNode(C_SHLI,'SHLI',M1_J+G_SHLI,showG_SHLI);
		biz.appendChild(shli);
	}
	if(!NR(M1_J+G_UNIT)){
		var unit = CreateNode(C_UNIT,'UNIT',M1_J+G_UNIT,showG_UNIT);
		biz.appendChild(unit);
	}
	if(!NR(M1_J+G_PACK)){
		var pack = CreateNode(C_PACK,'PACK',M1_J+G_PACK,showG_PACK);
		biz.appendChild(pack);
	}
	if(!NR(M1_J+G_COCL)){
		var cocl = CreateNode(C_COCL,'COCL',M1_J+G_COCL,showG_COCL);
		biz.appendChild(cocl);
	}
	if(!NR(M1_J+G_COTY)){
		var coty = CreateNode(C_COTY,'COTY',M1_J+G_COTY,showG_COTY);
		biz.appendChild(coty);
	}
	if(!NR(M1_J+G_CACL)){
		var cacl = CreateNode(C_CACL,'CACL',M1_J+G_CACL,showG_CACL);
		biz.appendChild(cacl);
	}
	if(!NR(M1_J+G_CATY)){
		var caty = CreateNode(C_CATY,'CATY',M1_J+G_CATY,showG_CATY);
		biz.appendChild(caty);
	}
	if(!NR(M1_J+G_TRTE)){
		var trte = CreateNode(C_TRTE,'TRTE',M1_J+G_TRTE,showG_TRTE);
		biz.appendChild(trte);
	}
	if(!NR(M1_J+G_TTER)){
		var tter = CreateNode(C_TTER,'TTER',M1_J+G_TTER,showG_TTER);
		biz.appendChild(tter);
	}
	if(!NR(M1_J+G_PATE)){
		var pate = CreateNode(C_PATE,'PATE',M1_J+G_PATE,showG_PATE);
		biz.appendChild(pate);
	}
	if(!NR(M1_J+G_COUN)){
		var coun = CreateNode(C_COUN,'COUN',M1_J+G_COUN,showG_COUN);
		biz.appendChild(coun);
	}
	if(!NR(M1_J+G_VEHT)){
		var vety = CreateNode(C_VEHT,'VEHT',M1_J+G_VEHT,showG_VEHT);
		biz.appendChild(vety);
	}	
	root.appendChild(biz);
	
	var cus = new Ext.tree.TreeNode({text:C_CUDE_RELATED,leaf:false});
	if(!NR(M1_J+G_TRTY)){
		var trty = CreateNode(C_TRTY,'TRTY',M1_J+G_TRTY,showG_TRTY);
		cus.appendChild(trty);
	}
	if(!NR(M1_J+G_USAG)){
		var usag = CreateNode(C_USAG,'USAG',M1_J+G_USAG,showG_USAG);
		cus.appendChild(usag);
	}
	if(!NR(M1_J+G_LETY)){
		var lety = CreateNode(C_LETY,'LETY',M1_J+G_LETY,showG_LETY);
		cus.appendChild(lety);
	}
	if(!NR(M1_J+G_EXSE)){
		var exse = CreateNode(C_EXSE,'EXSE',M1_J+G_EXSE,showG_EXSE);
		cus.appendChild(exse);
	}
	if(!NR(M1_J+G_TRAT)){
		var trat = CreateNode(C_TRAT,'TRAT',M1_J+G_TRAT,showG_TRAT);
		cus.appendChild(trat);
	}
	if(!NR(M1_J+G_ISTY)){
		var isty = CreateNode(C_ISTY,'ISTY',M1_J+G_ISTY,showG_ISTY);
		cus.appendChild(isty);	
	}
	root.appendChild(cus);
	
	var set = new Ext.tree.TreeNode({text:C_SETTLE_RELATED,leaf:false});
	if(!NR(M1_J+G_SEWA)){
		var sewa = CreateNode(C_SEWA,'SEWA',M1_J+G_SEWA,showG_SEWA);
		set.appendChild(sewa);
	}	
	if(!NR(M1_J+G_CURR)){
		var curr = CreateNode(C_CURR,'CURR',M1_J+G_CURR,showG_CURR);
		set.appendChild(curr);
	}
	if(!NR(M1_J+G_CHCL)){
		var chcl = CreateNode(C_CHCL,'CHCL',M1_J+G_CHCL,showG_CHCL);
		set.appendChild(chcl);
	}
	if(!NR(M1_J+G_CHAR)){
		var cha = CreateNode(C_CHAR,'CHAR',M1_J+G_CHAR,showG_CHAR);
		set.appendChild(cha);
	}
	if(!NR(M1_J+G_COBA)){
		var coba = CreateNode(C_COBA,'COBA',M1_J+G_COBA,showG_COBA);
		set.appendChild(coba);
	}
	root.appendChild(set);	
	var tree = new Ext.tree.TreePanel({title:C_MASTER_DATA+'(A)',rootVisible:false,
		animate:true,enableDD:false,autoScroll:true,containerScroll:true,root:root
	});
	return tree;
};
function createFunctionTree(store,nodeListener){
	var tree = new Ext.tree.TreePanel({
		animate:true,
		enableDD:false,autoScroll:true,
		containerScroll: true,height:475,title:C_FUNC_PERMISSION,
		selModel:new Ext.tree.MultiSelectionModel(),
		listeners:nodeListener
	});
	fp = {};
	var maxDep = 0;var root;
	var a = store.getRange();
	for(var i=0;i<a.length;i++){
		var fc=a[i].get('funcCode');
		var n = new Ext.tree.TreeNode({text:a[i].get('funcName'),id:fc,leaf:a[i].get('funcType')=='M'?false:true,checked:false,expanded:false});
		if(fc=='00') root=n;
		var dep = fc.length/2;
		maxDep=maxDep>dep?maxDep:dep;
		var na = fp[dep];
		if(na) na[na.length]=n;
		else{na=[];na[0]=n;fp[dep]=na;}
	}	
	for(var i=1;i<maxDep;i++){
		var na = fp[i];
		var ca = fp[i+1];
		for(var j=0;j<na.length;j++){
			if(!na[j].isLeaf()) addChiledNode(na[j],ca);
		}
	}
	tree.setRootNode(root);
	return tree;
};
function addChiledNode(n,a){
	var nid = n.id;
	for(var i=0;i<a.length;i++){
		var cid=a[i].id;
		if(cid.substr(0,nid.length)==nid){
			n.appendChild(a[i]);
		}
	}
};
function loadMsg(){
	var store = GS('MESS_Q','PMessage',PMessage,'messId','DESC','','','',false);
	store.load({params:{messToUserId:CUSER_ID,messSendFlag:0,messType:2},callback:function(r,o,s){
		if(r.length){
    		for(var i=0;i<r.length;i++){    			
                var w=Ext.getCmp('W_MSG'+r[i].get('messFromUserId'));
                if(w) w.show();
                else{
                	var w= new Fos.MsgWin(r[i].get('messFromUserId'),r[i].get('messFromUserName'));
                	w.show();
                }
                w.onMsg(r[i].get('messBody','R'));
                r[i].set('messSendFlag',1);r[i].set('rowAction','M');
        		var x = RTX(r[i],'PMessage',PMessage);
        		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'MESS_S'},xmlData:FOSX(x)});
    		}
		}
	}});
};
Ext.onReady(function(){
	Ext.state.Manager.setProvider(new Fos.HttpProvider());
    Ext.QuickTips.init();
    Ext.form.Field.prototype.msgTarget = 'side';
    var tBar=new Ext.BoxComponent({region:'north',el:'north',height:60});   
	var viewport = new Ext.Viewport({layout:'border',items:[tBar,P_MENU,T_MAIN]});
	//T_MAIN.setActiveTab(T_MAIN.add(new Fos.TaskTab()));
	
	setTimeout(function(){Ext.get('loading').remove();Ext.get('loading-mask').fadeOut({remove:true});},50);
	iniStore();
	checkPassEx();
	P_MENU.on('collapse',function(){T_MAIN.getActiveTab().doLayout();});
	P_MENU.on('expand',function(){T_MAIN.getActiveTab().doLayout();});
	T_MAIN.on('tabchange',function(m,a){a.doLayout();});
	T_MAIN.setActiveTab(T_MAIN.add(new Ext.Panel({title:new Date().format('Y-m-d')})));
	viewport.doLayout();
	
	//var task={run:loadMsg,interval:10000};
	//this.runner = new Ext.util.TaskRunner();
	//this.runner.start(task);
});