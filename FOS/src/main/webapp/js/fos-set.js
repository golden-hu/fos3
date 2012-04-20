Fos.ExGrid = function(p,t,frm,store) {
	this.reCalculate = function(){
		if(t=='R') 
			frm.calcR(); 
		else if(t=='P') 
			frm.calcP(); 
		else 
			frm.calcC();
		frm.reCalculate();
	};
	
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'));
	var x=S_AR;
	if(t=='P') 
		x=S_AP; 
	else if(t=='R')  
		x=S_AR; 
	else 
		x=S_AC;
	if(frm.f=='C') 
		m=m+M3_EXPE+x; 
	else 
		m=M1_S+S_EXPE+x;
	if( VERSION==1){
		var t1={header:C_SETTLE_OBJECT,width:200,dataIndex:"custName",align:'left',
			editor:new Ext.form.ComboBox({displayField:'custCode',valueField:'custNameCn',triggerAction:'all',
            mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,allowBlank:false,blankText:'',
            invalidText:'',mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',
            store:getCS(),enableKeyEvents:true,
            listeners:{scope:this,
            	select:function(c,r,i){
				var b =this.getSelectionModel().getSelected();
            	b.set('custId',r.get('custId'));
            	b.set('custName',r.get('custNameCn'));
            	b.set('custSname',r.get('custCode'));
            	},
           		keydown:{fn:function(f,e){LC(f,e,t=='R'?'custArFlag':'custApFlag',1);},buffer:500}}})};
	}
	else{
		var t1={header:C_SETTLE_OBJECT,width:200,dataIndex:"custSname",align:'left',
				editor:new Ext.form.ComboBox({displayField:'custCode',valueField:'custCode',triggerAction:'all',
	            mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,allowBlank:false,blankText:'',
	            invalidText:'',mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',
	            store:getCS(),enableKeyEvents:true,
	            listeners:{scope:this,
	            	select:function(c,r,i){
					var b =this.getSelectionModel().getSelected();
	            	b.set('custId',r.get('custId'));
	            	b.set('custName',r.get('custNameCn'));
	            	b.set('custSname',r.get('custCode'));
	            	},
	           		keydown:{fn:function(f,e){LC(f,e,t=='R'?'custArFlag':'custApFlag',1);},buffer:500}}})};
	}
	
	if( VERSION==1){
		t2={header:C_CHAR,width:80,dataIndex:"charName",align:'center',
				editor:new Ext.form.ComboBox({displayField:'charCode',valueField:'charName',
				triggerAction:'all',tpl:charTpl,itemSelector:'div.list-item',listWidth:300,
	            allowBlank:false,blankText:'',invalidText:'',mode:'local',
	            selectOnFocus:true,listClass:'x-combo-list-small',
	            store:getCHAR_S(),
	            listeners:{scope:this,select:function(c,r,i){
	            	var b =this.getSelectionModel().getSelected();
	            	b.set('charId',r.get('charId'));
	            	b.set('chclId',r.get('chclId'));
	            	b.set('charNameEn',r.get('charNameEn'));
	            	b.set('currCode',r.get('currCode'));
	            	b.set('unitId',r.get('unitId'));
	            	b.set('expeExRate',getExRate(r.get('currCode'),'CNY'));
	            	this.reCalculate();}}})};
	}
	else{
		var t2={header:C_CHAR,width:80,dataIndex:"charName",align:'center',
				editor:new Ext.form.ComboBox({displayField:'charCode',valueField:'charName',triggerAction:'all',
	            tpl:charTpl,itemSelector:'div.list-item',listWidth:300,allowBlank:false,blankText:'',invalidText:'',mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',
	            store:t=='C'?getCCHAR_S():(t=='R'?getCHAR_PERM_R_S():getCHAR_PERM_P_S()),
	            listeners:{scope:this,select:function(c,r,i){
	            	var b =this.getSelectionModel().getSelected();
	            	b.set('charId',r.get('charId'));
	            	b.set('chclId',r.get('chclId'));
	            	b.set('charNameEn',r.get('charNameEn'));
	            	b.set('currCode',r.get('currCode'));
	            	b.set('unitId',r.get('unitId'));
	            	b.set('expeExRate',getExRate(r.get('currCode'),'CNY'));
	            	this.reCalculate();}}})};
	}
	
    var t3={header:C_UNIT,width:60,dataIndex:"unitName",align:'center',
			editor:new Ext.form.ComboBox({displayField:'unitCode',valueField:'unitCode',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getUNIT_C(),listeners:{
            scope:this,select:function(c,r,i){
            	var b=this.getSelectionModel().getSelected();
            	var rec=frm.UN.getById(r.get('unitCode'));
            	b.set('expeNum',rec?rec.get('N'):1);}}})};
    var t4={header:C_QUANTITY,width:60,dataIndex:"expeNum",renderer:expenseNumRender,
			editor:new Ext.form.NumberField({decimalPrecision:4,selectOnFocus:true,allowBlank:false,blankText:'',invalidText:''})};
	var t5={header:C_UNIT_PRICE,width:80,dataIndex:"expeUnitPrice",renderer:expenseNumRender,
			editor:new Ext.form.NumberField({decimalPrecision:4,selectOnFocus:true,allowBlank:false,blankText:'',invalidText:''})};
	var t6={header:C_CURR,dataIndex:'currCode',width:50,align:'center',
			editor:new Ext.form.ComboBox({displayField:'currCode',valueField:'currCode',triggerAction: 'all',
            allowBlank:false,blankText:'',invalidText:'',mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getCURR_S()})};
	var t7={header:C_EX_RATE,width:60,dataIndex:"expeExRate",renderer:rateRender};	
	var t8={header:C_AMOUNT,width:80,dataIndex:"expeTotalAmount",renderer:numRender};	
	var t9={header:C_COST_PRICE,width:80,dataIndex:"expeInnerPrice",renderer:rateRender,
			editor:new Ext.form.NumberField({disabled:NR(m+F_CM),decimalPrecision:4,selectOnFocus:true,allowBlank:false,blankText:''})};
	var t10={header:C_COST_TOTAL,width:80,dataIndex:"expeInnerAmount",renderer:numRender};	
	var t11={header:C_PPCC,dataIndex:'pateCode',width:40,align:'center',
			editor:new Ext.form.ComboBox({displayField:'pateCode',valueField:'pateCode',triggerAction: 'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getPATE_S(),
            listeners:{scope:this,select:function(c,r,i){this.getSelectionModel().getSelected().set('pateId',r.get('pateId'));}}})};
    var t12={header:C_INVO_NO,align:'center',dataIndex:"expeInvoiceNo",renderer:frm.f=='C'?'':invoRender};
    var t13={header:C_TAX_NO,align:'center',dataIndex:"expeTaxInvoiceNo"};
    var t14={header:C_INVOICED_AMOUNT,renderer:rateRender,dataIndex:"expeInvoiceAmount"};   
    var t15={header:C_WRITEOFFED_AMOUNT,renderer:rateRender,dataIndex:"expeWriteOffAmount"};    
    var t16={header:C_REMARKS,width:100,dataIndex:"expeRemarks",editor:new Ext.form.TextField({enableKeyEvents:true,
    	listeners:{scope:this,keydown:function(c,e){k = e.getKey();if(k == e.ENTER) this.add();}}})};
    var t17={header:C_INVO_DATE,width:100,renderer:formatDate,dataIndex:"expeInvoiceDate"};
    var t18={header:C_WRITEOFF_DATE,renderer:formatDate,dataIndex:"expeWriteOffDate"};
    var t19={header:C_CREATE_TIME,renderer:formatDateTime,dataIndex:"createTime"};
    var t20={header:C_MODIFY_TIME,renderer:formatDateTime,dataIndex:"modifyTime"};
    var t21={header:C_COMMISION_RATE,width:60,dataIndex:"expeCommissionRate",renderer:rateRender,
			editor:new Ext.form.NumberField({decimalPrecision:4,selectOnFocus:true,allowBlank:false,blankText:'',invalidText:''})};
	var t22={header:C_COMMISION,width:60,dataIndex:"expeCommission",renderer:numRender,
			editor:new Ext.form.NumberField({decimalPrecision:2,selectOnFocus:true,allowBlank:false,blankText:'',invalidText:''})};
	 var t23={header:C_CREATE_BY,renderer:getUSER,dataIndex:"createBy"};
	 var t24={header:C_MODIFY_BY,renderer:getUSER,dataIndex:"expeUpdateBy"};
	 var t25={header:C_BILL_BY,renderer:getUSER,dataIndex:"expeInvoiceBy"};
	 var t26={header:C_VOUC_BY,renderer:getUSER,dataIndex:"expeWriteOffBy"};
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cols=[];
	if(t=='R'){
		if(frm.f=='C')
			if(VERSION==1)
				cols=[sm,t1,t2,t3,t4,t5,t6,t21,t22,t8,t11,t7,t16,t12,t13,t14,t15,t17,t18,t23,t19,t24,t20,t25,t26];
			else 
				cols=[sm,t1,t2,t3,t4,t5,t6,t21,t22,t8,t11,t7,t16,t12,t13,t14,t17,t23,t19,t24,t20,t25];
		else
			cols=[sm,t1,t2,t3,t4,t5,t6,t21,t22,t8,t11,t7,t16,t12,t13,t14,t15,t17,t18,t23,t19,t24,t20,t25,t26];
	}
	else{
		if(VERSION==1){
			cols=[sm,t1,t2,t3,t4,t5,t6,t21,t22,t8,t11,t7,t16,t12,t13,t14,t15,t17,t18,t23,t19,t24,t20,t25,t26];
		}
		else if(NR(m+F_CV)){
			if(frm.f=='C')
				cols=[sm,t1,t2,t3,t4,t6,t21,t22,t9,t10,t11,t7,t16,t12,t13,t17,t19,t20,t25];
			else
				cols=[sm,t1,t2,t3,t4,t6,t21,t22,t9,t10,t11,t7,t16,t12,t13,t14,t15,t17,t18,t19,t20,t25,t26];
		}
		else{
			cols=[sm,t1,t2,t3,t4,t5,t6,t21,t22,t8,t9,t10,t11,t7,t16,t12,t13,t14,t15,t17,t23,t19,t24,t20,t25];
		}
	}
	var cm=new Ext.grid.ColumnModel({columns:cols,defaults:{sortable:true,width:100,align:'right'}});
	cm.defaultSortable=true;cm.defaultWidth=100;			
	this.add=function(){
		var unit='EACH';var rid=GGUID();
		var e = new SExpense({id:rid,expeId:rid,consId:p.get('consId'),consNo:p.get('consNo'),
			section:'CONS',consSailDate:p.get('consSailDate'),
    		consMblNo:p.get('consMblNo'),consHblNo:p.get('consHblNo'),consVessel:p.get('vessName'),
    		consVoyage:p.get('voyaName'),consBizClass:p.get('consBizClass'),consBizType:p.get('consBizType'),
    		consShipType:p.get('consShipType'),expeStatus:'0',expeBillStatus:'0',expeInvoiceStatus:'0',expeWriteOffStatus:'0',
    		custId:t=='R'?p.get('custId'):p.get('consBookingAgency'),
    		custName:t=='R'?p.get('custName'):p.get('consBookingAgencyName'),
    		custSname:t=='R'?p.get('custSname'):p.get('consBookingAgencySname'),
    		consCustId:p.get('custId'),consCustName:p.get('custName'),chclId:'',charId:'',charName:'',
    		expeType:t=='R'?'R':'P',pateId:PPID,pateCode:'P',unitName:unit,currCode:'CNY',expeUnitPrice:'',
    		expeCommissionRate:'',expeCommission:'',expeInnerPrice:'',expeExRate:'1.0000',expeRemarks:'',expeDate:new Date(),
    		expeAllocationFlag:'0',expeAllocatedFlag:'0',
    		expeInvoiceAmount:'0',expeWriteOffAmount:'0',expeWriteOffRcAmount:'0',expeInnerAmount:'0',expeRcAmount:'0',
    		expeTotalAmount:'0',expeNum:'1',version:'0'});
    	this.stopEditing();store.insert(0,e);e.set('rowAction','N');sm.selectFirstRow();this.startEditing(0, 1);
	};
	this.removeExp=function(){
		var r = sm.getSelections();
		if(r.length){
			for(var i=0;i<r.length;i++){
				if(r[i].get('expeInvoiceStatus')>0) XMG.alert(SYS,M_REMOVE_EXP_INVOICED);
				else{r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');store.remove(r[i]);this.reCalculate();}
			}
		}
		else XMG.alert(SYS,M_R_P);
	};
	this.save=function(){
		var a = store.getModifiedRecords();
		if(a.length){
			for(var i=0;i<a.length;i++){
				if(a[i].get('rowAction')!='R'&&a[i].get('rowAction')!='D'){
				if(a[i].get('custId')==''){XMG.alert(SYS,M_SETTLE_OBJECT_REQIRED);return;}
				else if(a[i].get('charId')==''){XMG.alert(SYS,M_CHAR_REQIRED);return;}
				else if(a[i].get('expeNum')==''||a[i].get('expeNum')=='0'){XMG.alert(SYS,M_QUANTITY_REQIRED);return;}
				else if(a[i].get('expeUnitPrice')==''||a[i].get('expeUnitPrice')=='0'){XMG.alert(SYS,M_UNIT_PRICE_REQIRED);return;}
				else if(a[i].get('currCode')==''){XMG.alert(SYS,M_CURR_PRICE_REQIRED);return;}
				else if(a[i].get('pateId')==''){XMG.alert(SYS,M_PPCC_REQIRED);return;}
				}
			}
			var x = ATX(a,'SExpense',SExpense);
			if(x!=''){								
				var tb=this.getTopToolbar();
				tb.getComponent('TB_C').setDisabled(true);
				Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'EXPE_S'},
					success: function(res){
						var a = XTRA(res.responseXML,'SExpense',SExpense);FOSU(store,a,SExpense);
						XMG.alert(SYS,M_S);tb.getComponent('TB_C').setDisabled(false);},
					failure: function(res){XMG.alert(SYS,M_F+res.responseText);tb.getComponent('TB_C').setDisabled(false);},
					xmlData:FOSX(x)
				});
			}
		}
		else XMG.alert(SYS,M_NC);
	};
	//复制一条费用
	this.cp=function(){
		var r = sm.getSelected();
		if(r){
			var e = new SExpense({});var id=GGUID();
			var f = SExpense.prototype.fields;
			for (var i=0;i<f.keys.length;i++){var fn=''+f.keys[i];e.set(fn,r.get(fn));}
			e.set('expeDate',new Date());e.set('id',id);e.set('expeId',id);
			e.set('version','1');e.set('expeInvoiceNo','');e.set('expeInvoiceDate','');
			e.set('expeUnitPrice','');e.set('expeNum','');e.set('expeNum2','');
			e.set('expeInnerPrice','');e.set('expeInnerAmount','');e.set('expeTotalAmount','');
			e.set('expeCommission',0);e.set('expeCommissionRate','');e.set('expeRcAmount','');
			e.set('expeWriteOffDate','');
			e.set('expeInvoiceAmount',0);e.set('expeWriteOffAmount',0);
			e.set('expeWriteOffRcAmount',0);e.set('expeStatus',0);e.set('expeBillStatus',0);e.set('expeInvoiceStatus',0);
			e.set('expeWriteoffStatus',0);e.set('expeAllocationFlag',0);e.set('expeAllocatedFlag',0);
			e.set('consIdM','');e.set('consNoM','');
			this.stopEditing();store.insert(0,e);e.set('rowAction','N');this.startEditing(0,1);
			this.reCalculate();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	//复制选中的应收到应付，或者复制选中的应付到应收
	this.cpTo=function(){
		var ea = sm.getSelections();
		if(ea.length>0){			
			for(var i=0;i<ea.length;i++){
				var r = ea[i];
				var id=GGUID();
				var e = new SExpense({id:id,expeId:id});
				
				var f = SExpense.prototype.fields;
				for (var j=0;j<f.keys.length;j++){
					var fn=''+f.keys[j];
					e.set(fn,r.get(fn));
				}				
				e.set('expeType',t=='R'?'P':'R');						
				e.set('custId',t=='P'?p.get('custId'):'');
				e.set('custName',t=='P'?p.get('custName'):'');
				e.set('custSname',t=='P'?p.get('custSname'):'');
				e.set('consCustId',e.get('custId'));
				e.set('consCustName',e.get('custName'));			    		
				e.set('expeDate',new Date());e.set('id',id);e.set('expeId',id);
				e.set('version','1');e.set('expeInvoiceNo','');e.set('expeInvoiceDate','');
				e.set('expeUnitPrice','');
				e.set('expeInnerPrice','');e.set('expeInnerAmount','');e.set('expeTotalAmount','');
				e.set('expeCommission',0);e.set('expeCommissionRate','');e.set('expeRcAmount','');
				e.set('expeWriteOffDate','');
				e.set('expeInvoiceAmount',0);e.set('expeWriteOffAmount',0);
				e.set('expeWriteOffRcAmount',0);e.set('expeStatus',0);e.set('expeBillStatus',0);e.set('expeInvoiceStatus',0);
				e.set('expeWriteoffStatus',0);e.set('expeAllocationFlag',0);e.set('expeAllocatedFlag',0);
				e.set('consIdM','');e.set('consNoM','');								
				if(t=='R')
					frm.ps.add(e);
				else
					frm.rs.add(e);
			}
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	
	this.copyFrom=function(){
		var win = new Fos.ExCopyWin(t);
		win.addButton({text:C_OK,scope:this,handler:function(){
			var g = win.findById('G_EXP_COPY_FROM');
			var a = g.getSelectionModel().getSelections();
			if(a){
				for(var i=0;i<a.length;i++){
					var r = a[i];
					var rid=GGUID();
					var e = new SExpense({id:rid,expeId:rid,consId:p.get('consId'),consNo:p.get('consNo'),consSailDate:p.get('consSailDate'),
			    		consMblNo:p.get('consMblNo'),consHblNo:p.get('consHblNo'),consVessel:p.get('vessName'),
			    		consVoyage:p.get('voyaName'),consBizClass:p.get('consBizClass'),consBizType:p.get('consBizType'),
			    		consShipType:p.get('consShipType'),expeStatus:'0',expeBillStatus:'0',expeInvoiceStatus:'0',expeWriteOffStatus:'0',
			    		custId:r.get('custId'),
			    		custName:r.get('custName'),
			    		custSname:r.get('custSname'),
			    		consCustId:p.get('custId'),consCustName:p.get('custName'),chclId:r.get('chclId'),charId:r.get('charId'),charName:r.get('charName'),
			    		expeType:t,pateId:r.get('pateId'),pateCode:r.get('pateCode'),unitName:r.get('unitName'),
			    		currCode:r.get('currCode'),expeUnitPrice:r.get('expeUnitPrice'),
			    		expeCommissionRate:r.get('expeCommissionRate'),
			    		expeCommission:r.get('expeCommission'),
			    		expeInnerPrice:r.get('expeInnerPrice'),
			    		expeExRate:r.get('expeExRate'),
			    		expeRemarks:'',expeDate:new Date(),
			    		expeAllocationFlag:'0',expeAllocatedFlag:'0',
			    		expeInvoiceAmount:'0',expeWriteOffAmount:'0',
			    		expeWriteOffRcAmount:'0',
			    		expeInnerAmount:'0',
			    		expeRcAmount:'0',
			    		expeTotalAmount:r.get('expeTotalAmount'),expeNum:r.get('expeNum'),version:'0',rowAction:'N'});
					store.add(e);
				};
				this.reCalculate();
			}
			win.close();
		}},this);
		win.addButton({text:C_CANCEL,handler : function(){win.close();}},this);
		
		win.show();
	};
	
	this.allocate=function(){
		var a = sm.getSelections();
		if(a.length){			
			var s=GS('EXPE_Q','SExpense',SExpense,'expeId','DESC','','','',false);
			for(var i=0;i<a.length;i++){
				s.add(a);
			}
			var win = new Fos.ExalWin(s,p);			
			win.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	var locked=p.get('consStatusExp')==1||p.get('consStatusAud')!=0;
	this.expConfirm=function(){
		var a = sm.getSelections();
		var expeIds = '';
		if(a.length){
			for(var i=0;i<a.length;i++){
				expeIds += a[i].get('expeId');
				if(i<a.length-1)
					expeIds += ',';
			}
			EXPC('EXPE_CONFIRM','&expeIds='+expeIds+'&consId='+p.get('consId'));
		}
		else
			EXPC('EXPE_CONFIRM','&expeType='+t+'&consId='+p.get('consId'));
	};
	var sN='(N)';
	if(t=='R') sN='(N)'; else if(t=='P') sN='(M)'; else sN='(A)';
	var sR='(R)';
	if(t=='R') sR='(R)'; else if(t=='P') sR='(D)'; else sR='(X)';
	var sS='(S)';
	if(t=='R') sS='(S)'; else if(t=='P') sS='(P)'; else sS='(O)';
	var sC='(C)';
	if(t=='R') sC='(C)'; else if(t=='P') sC='(B)'; else sC='(Y)';
		
	var b1={itemId:'TB_A',text:C_ADD+sN,iconCls:'add',disabled:NR(m+F_M)||locked,scope:this,handler:this.add};
	var b2={itemId:'TB_B',text:C_REMOVE+sR,iconCls:'remove',disabled:NR(m+F_R)||locked,scope:this,handler:this.removeExp};
	var b3={itemId:'TB_C',text:C_SAVE+sS,iconCls:'save',disabled:NR(m+F_M)||locked,scope:this,handler:this.save};
	var b4={itemId:'TB_D',text:C_COPY_FROM+sC,iconCls:'copy',disabled:NR(m+F_M)||locked,scope:this,handler:this.cp};
    var b5={text:C_EXPORT,iconCls:'print',disabled:NR(m+F_M)||locked,scope:this,menu: {items: [
           {text:C_EXPE_CONFIRM,scope:this,handler:this.expConfirm}]}};
    var b6={itemId:'TB_F'+'F',text:C_ALLOCATION,iconCls:'broken',disabled:NR(m+F_M)||locked,scope:this,handler:this.allocate};
    
    var b7={itemId:'TB_CF',text:C_COPY_FROM_OT,iconCls:'copy',disabled:NR(m+F_M)||locked,scope:this,handler:this.copyFrom};
    var b8={itemId:'TB_CT',text:t=='R'?C_COPY_TO_P:C_COPY_TO_R,iconCls:'copy',disabled:NR(m+F_M)||locked,scope:this,handler:this.cpTo};
    
    if(t=='R'){
	    new Ext.KeyMap(Ext.getDoc(), {
			key:'nrsc',ctrl:true,
			handler: function(k, e) {
			 	var tc = T_MAIN.getComponent('C_'+p.get("id"));
			 	if(tc){
				 	var te=tc.getComponent('T_EXPE_'+p.get('id'));
				 	if(tc==T_MAIN.getActiveTab()&&te==tc.getActiveTab())
				 	{
				 		var tb=this.getTopToolbar();
				 		switch(k) {
						case Ext.EventObject.N:
							if(!tb.getComponent('TB_A').disabled) this.add();break;
						case Ext.EventObject.R:
							if(!tb.getComponent('TB_B').disabled) this.removeExp();break;
						case Ext.EventObject.S:
							if(!tb.getComponent('TB_C').disabled) this.save();break;
						case Ext.EventObject.C:
							if(!tb.getComponent('TB_D').disabled) this.cp();break;
						}
				 	}
			 	}
			},stopEvent:true,scope:this});
    }
    else if(t=='P'){
    	new Ext.KeyMap(Ext.getDoc(), {
			key:'mdpb',ctrl:true,
			handler: function(k, e) {
			 	var tc = T_MAIN.getComponent('C_'+p.get("id"));
			 	if(tc){
				 	var te=tc.getComponent('T_EXPE_'+p.get('id'));
				 	if(tc==T_MAIN.getActiveTab()&&te==tc.getActiveTab())
				 	{
				 		var tb=this.getTopToolbar();
				 		switch(k) {
						case Ext.EventObject.M:
							if(!tb.getComponent('TB_A').disabled) this.add();break;
						case Ext.EventObject.D:
							if(!tb.getComponent('TB_B').disabled) this.removeExp();break;
						case Ext.EventObject.P:
							if(!tb.getComponent('TB_C').disabled) this.save();break;
						case Ext.EventObject.B:
							if(!tb.getComponent('TB_D').disabled) this.cp();break;
						case Ext.EventObject.F:
							if(!tb.getComponent('TB_F').disabled) this.allocate();break;				
					}}
			 	}
			},stopEvent:true,scope:this});
    }
    else{
    	new Ext.KeyMap(Ext.getDoc(), {
			key:'axoy',ctrl:true,
			handler: function(k, e) {
			 	var tc = T_MAIN.getComponent('C_'+p.get("id"));
			 	if(tc){
				 	var te=tc.getComponent('T_EXPE_'+p.get('id'));
				 	if(tc==T_MAIN.getActiveTab()&&te==tc.getActiveTab())
				 	{
				 		var tb=this.getTopToolbar();
				 		switch(k) {
						case Ext.EventObject.A:
							if(!tb.getComponent('TB_A').disabled) this.add();break;
						case Ext.EventObject.X:
							if(!tb.getComponent('TB_B').disabled) this.removeExp();break;
						case Ext.EventObject.O:
							if(!tb.getComponent('TB_C').disabled) this.save();break;
						case Ext.EventObject.Y:
							if(!tb.getComponent('TB_D').disabled) this.cp();break;
						case Ext.EventObject.T:
							if(!tb.getComponent('TB_F').disabled) this.allocate();break;				
					}}
			 	}
			},stopEvent:true,scope:this});
    }    	
    this.updateTB=function(){
		var tb=this.getTopToolbar();
		var locked=p.get('consStatusExp')==1||p.get('consStatusAud')!=0;
		if(tb.getComponent('TB_A')) tb.getComponent('TB_A').setDisabled(NR(m+F_M)||locked);
    	if(tb.getComponent('TB_B')) tb.getComponent('TB_B').setDisabled(NR(m+F_R)||locked);
    	if(tb.getComponent('TB_C')) tb.getComponent('TB_C').setDisabled(NR(m+F_M)||locked);
    	if(tb.getComponent('TB_D')) tb.getComponent('TB_D').setDisabled(NR(m+F_M)||locked);
    	if(tb.getComponent('TB_CF')) tb.getComponent('TB_CF').setDisabled(NR(m+F_M)||locked);
	};
	
	Fos.ExGrid.superclass.constructor.call(this, {id:'G_EXOE_'+p.get('consNo')+t,
	border:true,autoScroll:true,clicksToEdit:1,height:200,
    stripeRows:true,store:store,sm:sm,cm:cm,listeners:{scope:this,
		beforeedit:function(e){
			e.cancel = e.record.get('editable')==0||e.record.get('expeStatus')>0||e.record.get('expeInvoiceStatus')>0||e.record.get('expeWriteOffStatus')>0;
		},
    	afteredit:function(e){var f=e.field;var r=e.record;
    	if(f=='expeNum'){
    		r.set('expeNum',e.value);
    		r.set('expeTotalAmount',round2(e.value*r.get('expeUnitPrice')-r.get('expeCommission')));
    		r.set('expeInnerAmount',round2(r.get('expeInnerPrice')*e.value-r.get('expeCommission')));
    		r.set('expeRcAmount',round2(r.get('expeTotalAmount')*r.get('expeExRate')));
    		this.reCalculate();}
    	if(f=='unitName'){
            r.set('expeTotalAmount',round2(r.get('expeNum')*r.get('expeUnitPrice')-r.get('expeCommission')));
    		r.set('expeInnerAmount',round2(r.get('expeInnerPrice')*r.get('expeNum')-r.get('expeCommission')));
    		r.set('expeRcAmount',round2(r.get('expeTotalAmount')*r.get('expeExRate')));
    		this.reCalculate();}
		else if(f=='expeUnitPrice'){
			r.set('expeTotalAmount',round2(e.value*r.get('expeNum')-r.get('expeCommission')));
			r.set('expeInnerPrice',e.value);
			r.set('expeInnerAmount',round2(e.value*r.get('expeNum')-r.get('expeCommission')));
			r.set('expeRcAmount',round2(r.get('expeTotalAmount')*r.get('expeExRate')));
			this.reCalculate();}
		else if(f=='expeInnerPrice'){
			r.set('expeInnerAmount',round2(e.value*r.get('expeNum')-r.get('expeCommission')));
			this.reCalculate();}
		else if(f=='currCode'){
			r.set('expeExRate',getExRate(e.value,'CNY'));
			r.set('expeRcAmount',round2(r.get('expeTotalAmount')*r.get('expeExRate')));
			this.reCalculate();}
		else if(f=='expeCommission'){
			r.set('expeTotalAmount',round2(r.get('expeUnitPrice')*r.get('expeNum')-e.value));
			r.set('expeInnerAmount',round2(r.get('expeInnerPrice')*r.get('expeNum')-e.value));
			r.set('expeRcAmount',round2(r.get('expeTotalAmount')*r.get('expeExRate')));
			this.reCalculate();}
		else if(f=='expeCommissionRate'){
			r.set('expeCommission',round2(r.get('expeTotalAmount')*e.value/100));			
			r.set('expeTotalAmount',round2(r.get('expeUnitPrice')*r.get('expeNum')-r.get('expeCommission')));
			r.set('expeInnerAmount',round2(r.get('expeInnerPrice')*r.get('expeNum')-r.get('expeCommission')));
			r.set('expeRcAmount',round2(r.get('expeTotalAmount')*r.get('expeExRate')));
			this.reCalculate();}
    }},
    tbar:t=='R'?[b1, '-',b2,'-',b3,'-',b4,'-',b8,'-',b7,'-',b5]:[b1, '-',b2,'-',b3,'-',b4,'-',b8,'-',b7,'-',b6,'-',b5]});
};
Ext.extend(Fos.ExGrid, Ext.grid.EditorGridPanel);

Fos.ExCopyWin = function(t) {
	var store = GS('EXPE_PERM_Q','SExpense',SExpense,'expeId','DESC','','','',false);
	this.search = function(){		
		store.load({params:{expeType:t,consNo:txtNo.getValue()}});
	};
	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	       {header:C_SETTLE_OBJECT,width:200,dataIndex:"custSname",align:'left'},
	       {header:C_CHAR,width:80,dataIndex:"charName",align:'center'},
	       {header:C_UNIT,width:60,dataIndex:"unitName",align:'center'},
	       {header:C_QUANTITY,width:60,dataIndex:"expeNum",renderer:rateRender},
	       {header:C_UNIT_PRICE,width:80,dataIndex:"expeUnitPrice",renderer:rateRender},
	       {header:C_CURR,dataIndex:'currCode',width:50,align:'center'},
	       {header:C_EX_RATE,width:60,dataIndex:"expeExRate",renderer:rateRender},
	       {header:C_AMOUNT,width:80,dataIndex:"expeTotalAmount",renderer:numRender}	       
	    ],
		defaults:{sortable:true,width:100,align:'right'}});
	cm.defaultSortable=true;cm.defaultWidth=100;			
	
	var txtNo = new Ext.form.TextField({});
	
    var grid = new Ext.grid.GridPanel({id:'G_EXP_COPY_FROM',stripeRows:true,store:store,sm:sm,cm:cm,
    	tbar:[{xtype:'tbtext',text:C_CONS_NO},
    	      txtNo,
    	      {text:C_SEARCH,iconCls:'search',scope:this,handler:this.search}]});
    
    Fos.ExCopyWin.superclass.constructor.call(this, {title:C_COPY_EXPENSE,modal:true,width:800,
        height:400,layout:'fit',plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:grid});
};
Ext.extend(Fos.ExCopyWin,Ext.Window);

Fos.ExpenseTab = function(p,f){
	this.f=f;
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'));
	if(this.f=='C') 
		m=m+M3_EXPE; 
	else 
		m=M1_S+S_EXPE;	
	
	var c1={fieldLabel:C_BOOKER,name:'custName',value:p.get('custName'),xtype:'textfield',anchor:'95%'};
	var c2={fieldLabel:C_CARRIER,name:'consCarrier',value:p.get('consCarrierName'),xtype:'textfield',anchor:'95%'};
	var c3={fieldLabel:C_POL,name:'consPol',value:p.get('consPolEn'),xtype:'textfield',anchor:'95%'};
	var c4={fieldLabel:C_CONT_NUM,name:'consContainersInfo',value:p.get('consContainersInfo'),xtype:'textfield',anchor:'95%'};
	var c5={fieldLabel:p.get('consBizClass')==BC_I?C_ETA:C_SAIL_DATE,name:'consSailDate',value:p.get('consSailDate'),xtype:'datefield',format:DATEF,anchor:'95%'};
	var c6={fieldLabel:C_TTER,tabIndex:17,name:'tranId',value:p.get('tranId'),store:getTRAN_S(),xtype:'combo',displayField:'tranCode',valueField:'tranId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'};
	var c7={fieldLabel:C_ACCOUNT,name:'custSname',value:p.get('custSname'),xtype:'textfield',anchor:'95%'};
	
	var b1={fieldLabel:C_CONS_NO,name:'consNo',disabled:true,value:p.get("consNo"),xtype:'textfield',anchor:'95%'};
	var b2={fieldLabel:C_BOOK_AGENCY,name:'consBookingAgencyName',value:p.get('consBookingAgencyName'),xtype:'textfield',anchor:'95%'};
	var b3={fieldLabel:C_POD,name:'consPod',value:p.get('consPodEn'),xtype:'textfield',anchor:'95%'};
	var b4={fieldLabel:C_PACKAGES,name:'consTotalPackages',value:p.get('consTotalPackages'),xtype:'textfield',anchor:'95%'};
	var b5={fieldLabel:C_OPERATOR,name:'consOperatorId',value:getUSER(p.get('consOperatorId')),xtype:'textfield',anchor:'95%'};
	var b6={fieldLabel:C_PATE,tabIndex:15,name:'pateId',value:p.get('pateId'),store:getPATE_S(),xtype:'combo',displayField:'pateName',valueField:'pateId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'};
	var pBiz=new Ext.Panel({layout:'column',title:C_BIZ_INFO,layoutConfig:{columns:4},deferredRender:true,collapsible:true,items:[
			{columnWidth:.25,layout:'form',border:false,labelWidth:60,
                items:p.get('consBizClass')==BC_E?[c1,c7,c2,c3,c4,c5]:[c1,c7,c3,c4,c5]},
            {columnWidth:.25,layout:'form',border:false,labelWidth:60,
                items:p.get('consBizClass')==BC_E?[b1,b2,b3,b4,b5,b6]:[b1,b3,b4,b5,b6]},
            {columnWidth:.25,layout: 'form',border : false,labelWidth:70,items: [
                {fieldLabel:C_CONS_DATE,name:'consDate',value:p.get('consDate'),xtype:'datefield',format:DATEF,anchor:'95%'},
                {fieldLabel:C_VESS,name:'vessName',value:p.get('vessName'),xtype:'textfield',anchor:'95%'},
                {fieldLabel:C_MBL_NO,name:'consMblNo',value:p.get('consMblNo'),xtype:'textfield',anchor:'95%'},
                {fieldLabel:C_GW+(p.get('consBizType')==BT_B?C_MT:C_KGS),name:'consTotalGrossWeight',value:p.get('consTotalGrossWeight'),xtype:'textfield',anchor:'95%'},
				{fieldLabel:C_SALES,name:'consSalesRepId',value:getUSER(p.get('consSalesRepId')),xtype:'textfield',anchor:'95%'},
				{fieldLabel:C_REF_NO,name:'consRefNo',value:p.get('consRefNo'),xtype:'textfield',anchor:'95%'}]},
            {columnWidth:.25,layout: 'form',border : false,labelWidth:70,items:[
                {fieldLabel:C_STATUS,name:'consStatus',value:p.get('consBizClass')==BC_E?getCOST(p.get('consStatus')):getCIST(p.get('consStatus')),xtype:'textfield',anchor:'95%'},
                {fieldLabel:C_VOYA,name:'voyaName',value:p.get('voyaName'),xtype:'textfield',anchor:'95%'},
                {fieldLabel:C_HBL_NO,name:'consHblNo',value:p.get('consHblNo'),xtype:'textfield',anchor:'95%'},
                {fieldLabel:C_CBM,name:'consTotalMeasurement',value:p.get('consTotalMeasurement'),xtype:'textfield',anchor:'95%'},
                c6,
                {fieldLabel:C_REMARKS,name:'consRemarks',value:p.get('consRemarks'),xtype:'textfield',anchor:'95%'}]}
			]});
			
	var PCny = new Ext.form.TextField({width:80,disabled:true});
	var PUsd = new Ext.form.TextField({width:80,disabled:true});
	var PEur = new Ext.form.TextField({width:80,disabled:true});
	var PLoc = new Ext.form.TextField({width:80,disabled:true});
	var PRc = new Ext.form.TextField({width:80,disabled:true});
	var PSale = new Ext.form.TextField({width:80,disabled:true});
	this.store = GS('EXPE_PERM_Q','SExpense',SExpense,'expeId','DESC','','','',false);
	var cT={xtype:'tbtext',text:C_SUM_CNY_C};
	var uT={xtype:'tbtext',text:C_SUM_USD_C};
	var eT={xtype:'tbtext',text:C_SUM_EUR_C};
	
	var lT={xtype:'tbtext',text:C_SUM_LOC_C};	
	var rT={xtype:'tbtext',text:C_SUM_RC};
	var sRT={xtype:'tbtext',text:C_SUM_SALE_R};
	var sPT={xtype:'tbtext',text:C_SUM_SALE_P};
	var sCT={xtype:'tbtext',text:C_SUM_SALE_C};
	
	var sumCnyR = new Ext.form.TextField({width:80,disabled:true});
	var sumUsdR = new Ext.form.TextField({width:80,disabled:true});
	var sumEurR = new Ext.form.TextField({width:80,disabled:true});
	var sumLocR = new Ext.form.TextField({width:80,disabled:true});
	var sumRcR = new Ext.form.TextField({width:80,disabled:true});
	var sumSaleR = new Ext.form.TextField({width:80,disabled:true});
	this.sumCnyR=0;this.sumUsdR=0;this.sumEurR=0;this.sumLocR=0;this.sumRcR=0;this.sumSaleR=0;
	this.rs=GS('EXPE_PERM_Q','SExpense',SExpense,'expeId','DESC','','','',false);
	this.calcR=function(){
		var d=this.rs.getRange();
		this.sumCnyR=0;this.sumUsdR=0;this.sumEurR=0;this.sumLocR=0;this.sumRcR=0;this.sumSaleR=0;
		for(var i=0;i<d.length;i++){
			if(d[i].get('currCode')=='CNY')
				this.sumCnyR+=parseFloat(d[i].get('expeTotalAmount'));
			else if(d[i].get('currCode')=='USD')
				this.sumUsdR+=parseFloat(d[i].get('expeTotalAmount'));
			else if(d[i].get('currCode')=='EUR')
				this.sumEurR+=parseFloat(d[i].get('expeTotalAmount'));
			this.sumLocR+=parseFloat(d[i].get('expeTotalAmount')*d[i].get('expeExRate'));
			this.sumSaleR+=parseFloat(d[i].get('expeTotalAmount')*d[i].get('expeExRate'));
			this.sumRcR+=parseFloat(d[i].get('expeWriteOffRcAmount'));
		}
		sumCnyR.setValue(round2(this.sumCnyR));
		sumUsdR.setValue(round2(this.sumUsdR));
		sumEurR.setValue(round2(this.sumEurR));
		sumLocR.setValue(round2(this.sumLocR));
		sumRcR.setValue(round2(this.sumRcR));
		sumSaleR.setValue(round2(this.sumSaleR));
	};
	this.rg=new Fos.ExGrid(p,'R',this,this.rs);
	var pR=new Ext.Panel({width:Ext.isIE?800:'auto',layout:'fit',title:C_EXPE_R,collapsible:true,border:false,
			items:[this.rg],
		bbar:NR(m+S_AP+F_CV)?[sRT,sumSaleR]:[cT,sumCnyR,'-',uT,sumUsdR,'-',eT,sumEurR,'-',lT,sumLocR,'-',sRT,sumSaleR,'-',rT,sumRcR]
	});	
	
	var sumCnyP = new Ext.form.TextField({width:80,disabled:true});
	var sumUsdP = new Ext.form.TextField({width:80,disabled:true});
	var sumEurP = new Ext.form.TextField({width:80,disabled:true});
	var sumLocP = new Ext.form.TextField({width:80,disabled:true});
	var sumRcP = new Ext.form.TextField({width:80,disabled:true});
	var sumSaleP = new Ext.form.TextField({width:80,disabled:true});
	this.sumCnyP=0;this.sumUsdP=0;this.sumEurP=0;this.sumLocP=0;this.sumRcP=0;this.sumSaleP=0;	
	this.ps=GS('EXPE_PERM_Q','SExpense',SExpense,'expeId','DESC','','','',false);
	this.calcP=function(){
		var d=this.ps.getRange();
		this.sumCnyP=0;this.sumUsdP=0;this.sumEurP=0;this.sumLocP=0;this.sumRcP=0;this.sumSaleP=0;
		for(var i=0;i<d.length;i++){
			if(d[i].get('currCode')=='CNY')
				this.sumCnyP+=parseFloat(d[i].get('expeTotalAmount'));
			else if(d[i].get('currCode')=='USD')
				this.sumUsdP+=parseFloat(d[i].get('expeTotalAmount'));
			else if(d[i].get('currCode')=='EUR')
				this.sumEurP+=parseFloat(d[i].get('expeTotalAmount'));
			this.sumLocP+=parseFloat(d[i].get('expeTotalAmount')*d[i].get('expeExRate'));
			this.sumSaleP+=parseFloat(d[i].get('expeInnerAmount')*d[i].get('expeExRate'));
			this.sumRcP+=parseFloat(d[i].get('expeWriteOffRcAmount'));
		};
		sumCnyP.setValue(round2(this.sumCnyP));
		sumUsdP.setValue(round2(this.sumUsdP));
		sumEurP.setValue(round2(this.sumEurP));
		sumLocP.setValue(round2(this.sumLocP));
		sumRcP.setValue(round2(this.sumRcP));
		sumSaleP.setValue(round2(this.sumSaleP));
	};
	this.pg=new Fos.ExGrid(p,'P',this,this.ps);
	var pP=new Ext.Panel({width:Ext.isIE?800:'auto',layout:'fit',title:C_EXPE_P,collapsible:true,border:false,items:[this.pg],
		bbar:NR(m+S_AP+F_CV)?[sPT,sumSaleP]:[cT,sumCnyP,'-',uT,sumUsdP,'-',eT,sumEurP,'-',lT,sumLocP,'-',sPT,sumSaleP,'-',rT,sumRcP]
	});
	var sumCnyC = new Ext.form.TextField({width:80,disabled:true});
	var sumUsdC = new Ext.form.TextField({width:80,disabled:true});
	var sumEurC = new Ext.form.TextField({width:80,disabled:true});
	var sumLocC = new Ext.form.TextField({width:80,disabled:true});
	var sumRcC = new Ext.form.TextField({width:80,disabled:true});
	var sumSaleC = new Ext.form.TextField({width:80,disabled:true});	
	this.sumCnyC=0;this.sumUsdC=0;this.sumEurC=0;this.sumLocC=0;this.sumRcC=0;this.sumSaleC=0;	
	this.cs=GS('EXPE_PERM_Q','SExpense',SExpense,'expeId','DESC','','','',false);
	this.calcC=function(){
		var d=this.cs.getRange();
		this.sumCnyC=0;this.sumUsdC=0;this.sumEurC=0;this.sumLocC=0;this.sumRcC=0;this.sumSaleC=0;
		for(var i=0;i<d.length;i++){
			if(d[i].get('currCode')=='CNY')
				this.sumCnyC+=parseFloat(d[i].get('expeTotalAmount'));
			else if(d[i].get('currCode')=='USD')
				this.sumUsdC+=parseFloat(d[i].get('expeTotalAmount'));
			else if(d[i].get('currCode')=='EUR')
				this.sumEurC+=parseFloat(d[i].get('expeTotalAmount'));
			this.sumLocC+=parseFloat(d[i].get('expeTotalAmount')*d[i].get('expeExRate'));
			this.sumSaleC+=parseFloat(d[i].get('expeInnerAmount')*d[i].get('expeExRate'));
			this.sumRcC+=parseFloat(d[i].get('expeWriteOffRcAmount'));
		}
		sumCnyC.setValue(round2(this.sumCnyC));
		sumUsdC.setValue(round2(this.sumUsdC));
		sumEurC.setValue(round2(this.sumEurC));
		sumLocC.setValue(round2(this.sumLocC));
		sumRcC.setValue(round2(this.sumRcC));
		sumSaleC.setValue(round2(this.sumSaleC));
	};
	this.cg=new Fos.ExGrid(p,'C',this,this.cs);
	var pC=new Ext.Panel({width:Ext.isIE?800:'auto',layout:'fit',title:C_EXPE_C,collapsible:true,border:false,items:[this.cg],
		bbar:NR(m+S_AP+F_CV)?[sCT,sumSaleC]:[cT,sumCnyC,'-',uT,sumUsdC,'-',eT,sumEurC,'-',lT,sumLocC,'-',sCT,sumSaleC,'-',rT,sumRcC]
	});	
	
	this.reCalculate = function(){		
		PCny.setValue(round2(this.sumCnyR-this.sumCnyP-this.sumCnyC));
		PUsd.setValue(round2(this.sumUsdR-this.sumUsdP-this.sumUsdC));
		PEur.setValue(round2(this.sumEurR-this.sumEurP-this.sumEurC));
		PLoc.setValue(round2(this.sumLocR-this.sumLocP-this.sumLocC));
		PRc.setValue(round2(this.sumRcR-this.sumRcP-this.sumRcC));
		PSale.setValue(round2(this.sumSaleR-this.sumSaleP-this.sumSaleC));
	};
	
	var rC=getCFG('COMMISSION_CHAR_CNY');
	var uC=getCFG('COMMISSION_CHAR_USD');
	var bVR=true;
	var bVC=true;
	
	if(CUSER_ID==p.get('consOperatorId')){		
		bVR=false;
		bVC=false;
		if(CUSER_ID==p.get('consSalesRepId')) bVR=true;
		if(getCFG('OPERATOR_DISPLAY_EXPE_R')=='Y') bVR=true;
	}
	else if(CUSER_ID==p.get('consSalesRepId')) bVC=false;
	
	if(p.get('rowAction')!='N' || !NR(m+M3_EXPE+S_AR+F_V))
		this.store.load({params:{consId:p.get('consId')},callback:function(){
			var a=this.store.getRange();
			for(var i=0;i<a.length;i++){
				if(a[i].get('expeType')=='R') {
					if(!NR(m+S_AR+F_V))
						this.rs.add(a[i]);
				}					
				else{
					if(a[i].get('charId')==rC||a[i].get('charId')==uC) 
						this.cs.add(a[i]);
					else{
						if(CUSER_ID==p.get('consOperatorId')&&CUSER_ID!=p.get('consSalesRepId'))
						{
							if(a[i].get('createBy')==CUSER_ID){
								if(!NR(m+S_AP+F_V))
									this.ps.add(a[i]);
							}
							else {
								if(!NR(m+S_AP+F_V))
									this.ps.add(a[i]);
							}								
						}
						else{
							if(!NR(m+S_AP+F_V))
								this.ps.add(a[i]);
						}
					}
				}
			}
			this.calcR();this.calcP();this.calcC();this.reCalculate();			
		},scope:this});	
	this.UN=new Ext.data.SimpleStore({id:0,fields:['U','N'],data:getUN(p)});
	this.updateStatus=function(s){
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CONS_U',consId:p.get('consId'),consStatusExp:s},
			success: function(r){p.beginEdit();p.set('consStatusExp',s);p.endEdit();
			this.updateTB();XMG.alert(SYS,M_S);},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);}});
	};
	this.check=function(){this.updateStatus('1');};
	this.unCheck=function(){this.updateStatus('0');};
	this.updateTB=function(){
		var tb=this.getTopToolbar();
		if(tb.getComponent('TB_A')) tb.getComponent('TB_A').setDisabled(NR(M1_S+S_EXPE+F_E)||p.get('consStatusExp')==1||p.get('consStatusAud')!=0);
    	if(tb.getComponent('TB_B')) tb.getComponent('TB_B').setDisabled(NR(M1_S+S_EXPE+F_E)||p.get('consStatusAud')!=0||p.get('consStatusExp')==0);
    	this.rg.updateTB();this.pg.updateTB();this.cg.updateTB();
	};	
		
	this.reSize=function(){
		if(bVR==false){
			if(pBiz.collapsed) this.pg.setHeight(380); else this.pg.setHeight(220);
		}		
		else{
			var bR=pR.collapsed;
			var bP=pP.collapsed;
			var bC=pC.collapsed;
			if(bR){if(!bP) this.pg.setHeight(400);if(!bC) this.cg.setHeight(400);}
			else if(bP){if(!bR) this.rg.setHeight(400);if(!bC) this.cg.setHeight(400);}
			else if(bC){if(!bR) this.rg.setHeight(400);if(!bP) this.pg.setHeight(400);}
			else{this.rg.setHeight(200);this.pg.setHeight(200);this.cg.setHeight(200);}
		}
	};
	pBiz.on({'collapse':{fn: this.reSize,scope: this},'expand':{fn:this.reSize,scope:this}});
	pR.on({'collapse':{fn: this.reSize,scope: this},'expand':{fn:this.reSize,scope:this}});
	pP.on({'collapse':{fn: this.reSize,scope: this},'expand':{fn:this.reSize,scope:this}});
	pC.on({'collapse':{fn:this.reSize,scope: this},'expand':{fn:this.reSize,scope:this}});
	
	var tb1={itemId:'TB_A',text:C_EXPE_AUDIT,disabled:NR(m+F_E)||p.get('consStatusExp')==1||p.get('consStatusAud')!=0,iconCls:'check',scope:this,handler:this.check};
	var tb2={itemId:'TB_B',text:C_EXPE_UNCHECK,disabled:NR(m+F_E)||p.get('consStatusAud')!=0||p.get('consStatusExp')==0,iconCls:'renew',scope:this,handler:this.unCheck};
	var tb3={xtype:'tbtext',text:C_PROFIT_CNY};
	var tb4={xtype:'tbtext',text:C_PROFIT_USD};
	var tb8={xtype:'tbtext',text:C_PROFIT_EUR};
	var tb5={xtype:'tbtext',text:C_PROFIT_LOC};
	var tb6={xtype:'tbtext',text:C_PROFIT_SALE};
	var tb7={xtype:'tbtext',text:C_PROFIT_RC};
	var tbs=[pBiz,pR,pP,pC];
	if(bVR==false&&bVC==false) tbs=[pBiz,pP];
	else if(bVR==true&&bVC==false) tbs=[pBiz,pR,pP];
	else if(bVR==false&&bVC==true) tbs=[pBiz,pP,pC];
	
	Fos.ExpenseTab.superclass.constructor.call(this, { 
	id:"T_EXPE_"+p.get('id'),title:C_EXPE+(f=='C'?'(F3)':('-'+p.get("consNo"))),header:false,autoScroll:true,closable:f=='C'?false:true,
	height:900,labelAlign:'right',bodyStyle:'padding:0px 0px 0px',border:true,
	items:tbs,
		tbar:(NR(m+S_AP+F_CV)||bVR==false)?[tb1,'-',tb2,'-']:[tb1,'-',tb2,'-',tb3,PCny,'-',tb4,PUsd,'-',tb8,PEur,'-',tb5,PLoc,'-',tb6,PSale,'-',tb7,PRc]
	});
};
Ext.extend(Fos.ExpenseTab, Ext.Panel);

Fos.ExpenseTab2 = function(p,f){
	this.f=f;
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'));
	if(this.f=='C') 
		m=m+M3_EXPE; 
	else 
		m=M1_S+S_EXPE;	
	
	var c1={fieldLabel:C_BOOKER,name:'custName',value:p.get('custName'),xtype:'textfield',anchor:'95%'};
	var c2={fieldLabel:C_CARRIER,name:'consCarrier',value:p.get('consCarrierName'),xtype:'textfield',anchor:'95%'};
	var c3={fieldLabel:C_POL,name:'consPol',value:p.get('consPolEn'),xtype:'textfield',anchor:'95%'};
	var c4={fieldLabel:C_CONT_NUM,name:'consContainersInfo',value:p.get('consContainersInfo'),xtype:'textfield',anchor:'95%'};
	var c5={fieldLabel:p.get('consBizClass')==BC_I?C_SAIL_DATE:C_ETA,name:'consSailDate',value:p.get('consSailDate'),xtype:'datefield',format:DATEF,anchor:'95%'};
	var c6={fieldLabel:C_TTER,tabIndex:17,name:'tranId',value:p.get('tranId'),store:getTRAN_S(),xtype:'combo',displayField:'tranCode',valueField:'tranId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'};
	var c7={fieldLabel:C_ACCOUNT,name:'custSname',value:p.get('custSname'),xtype:'textfield',anchor:'95%'};
	
	var b1={fieldLabel:C_CONS_NO,name:'consNo',disabled:true,value:p.get("consNo"),xtype:'textfield',anchor:'95%'};
	var b2={fieldLabel:C_BOOK_AGENCY,name:'consBookingAgencyName',value:p.get('consBookingAgencyName'),xtype:'textfield',anchor:'95%'};
	var b3={fieldLabel:C_POD,name:'consPod',value:p.get('consPodEn'),xtype:'textfield',anchor:'95%'};
	var b4={fieldLabel:C_PACKAGES,name:'consTotalPackages',value:p.get('consTotalPackages'),xtype:'textfield',anchor:'95%'};
	var b5={fieldLabel:C_OPERATOR,name:'consOperatorId',value:getUSER(p.get('consOperatorId')),xtype:'textfield',anchor:'95%'};
	var b6={fieldLabel:C_PATE,tabIndex:15,name:'pateId',value:p.get('pateId'),store:getPATE_S(),xtype:'combo',displayField:'pateName',valueField:'pateId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'};
	var pBiz={width:Ext.isIE?document.body.clientWidth-240:'auto',layout:'column',title:C_BIZ_INFO,layoutConfig:{columns:4},deferredRender:true,collapsible:true,items:[
			{columnWidth:.25,layout:'form',border:false,labelWidth:60,
                items:p.get('consBizClass')==BC_E?[c1,c7,c2,c3,c4,c5]:[c1,c7,c3,c4,c5]},
            {columnWidth:.25,layout:'form',border:false,labelWidth:60,
                items:p.get('consBizClass')==BC_E?[b1,b2,b3,b4,b5,b6]:[b1,b3,b4,b5,b6]},
            {columnWidth:.25,layout: 'form',border : false,labelWidth:70,items: [
                {fieldLabel:C_CONS_DATE,name:'consDate',value:p.get('consDate'),xtype:'datefield',format:DATEF,anchor:'95%'},
                {fieldLabel:C_VESS,name:'vessName',value:p.get('vessName'),xtype:'textfield',anchor:'95%'},
                {fieldLabel:C_MBL_NO,name:'consMblNo',value:p.get('consMblNo'),xtype:'textfield',anchor:'95%'},
                {fieldLabel:C_GW+(p.get('consBizType')==BT_B?C_MT:C_KGS),name:'consTotalGrossWeight',value:p.get('consTotalGrossWeight'),xtype:'textfield',anchor:'95%'},
				{fieldLabel:C_SALES,name:'consSalesRepId',value:getUSER(p.get('consSalesRepId')),xtype:'textfield',anchor:'95%'},
				{fieldLabel:C_REF_NO,name:'consRefNo',value:p.get('consRefNo'),xtype:'textfield',anchor:'95%'}]},
            {columnWidth:.25,layout: 'form',border : false,labelWidth:70,items:[
                {fieldLabel:C_STATUS,name:'consStatus',value:p.get('consBizClass')==BC_E?getCOST(p.get('consStatus')):getCIST(p.get('consStatus')),xtype:'textfield',anchor:'95%'},
                {fieldLabel:C_VOYA,name:'voyaName',value:p.get('voyaName'),xtype:'textfield',anchor:'95%'},
                {fieldLabel:C_HBL_NO,name:'consHblNo',value:p.get('consHblNo'),xtype:'textfield',anchor:'95%'},
                {fieldLabel:C_CBM,name:'consTotalMeasurement',value:p.get('consTotalMeasurement'),xtype:'textfield',anchor:'95%'},
                c6,
                {fieldLabel:C_REMARKS,name:'consRemarks',value:p.get('consRemarks'),xtype:'textfield',anchor:'95%'}]}
			]};
			
	var PCny = new Ext.form.TextField({width:80,disabled:true});
	var PUsd = new Ext.form.TextField({width:80,disabled:true});
	var PLoc = new Ext.form.TextField({width:80,disabled:true});
	var PRc = new Ext.form.TextField({width:80,disabled:true});
	
	this.store = GS('EXPE_PERM_Q','SExpense',SExpense,'expeId','DESC','','','',false);
	var cT={xtype:'tbtext',text:C_SUM_CNY_C};
	var uT={xtype:'tbtext',text:C_SUM_USD_C};
	var lT={xtype:'tbtext',text:C_SUM_LOC_C};	
	var rT={xtype:'tbtext',text:C_SUM_RC};
	
	var sumCnyR = new Ext.form.TextField({width:80,disabled:true});
	var sumUsdR = new Ext.form.TextField({width:80,disabled:true});
	var sumLocR = new Ext.form.TextField({width:80,disabled:true});
	var sumRcR = new Ext.form.TextField({width:80,disabled:true});
	
	this.sumCnyR=0;this.sumUsdR=0;this.sumLocR=0;this.sumRcR=0;
	this.rs=GS('EXPE_PERM_Q','SExpense',SExpense,'expeId','DESC','','','',false);
	this.calcR=function(){
		var d=this.rs.getRange();
		this.sumCnyR=0;this.sumUsdR=0;this.sumLocR=0;this.sumRcR=0;
		for(var i=0;i<d.length;i++){
			if(d[i].get('currCode')=='CNY')
				this.sumCnyR+=parseFloat(d[i].get('expeTotalAmount'));
			else if(d[i].get('currCode')=='USD')
				this.sumUsdR+=parseFloat(d[i].get('expeTotalAmount'));
			this.sumLocR+=parseFloat(d[i].get('expeTotalAmount')*d[i].get('expeExRate'));			
			this.sumRcR+=parseFloat(d[i].get('expeWriteOffRcAmount'));
		}
		sumCnyR.setValue(round2(this.sumCnyR));
		sumUsdR.setValue(round2(this.sumUsdR));
		sumLocR.setValue(round2(this.sumLocR));
		sumRcR.setValue(round2(this.sumRcR));
	};
	this.rg=new Fos.ExGrid(p,'R',this,this.rs);
	var pR=new Ext.Panel({width:Ext.isIE?document.body.clientWidth-240:'auto',layout:'fit',
			title:C_EXPE_R,collapsible:true,autoscroll:true,border:false,items:[this.rg],
		bbar:[cT,sumCnyR,'-',uT,sumUsdR,'-',lT,sumLocR,'-',rT,sumRcR]
	});		
	var sumCnyP = new Ext.form.TextField({width:80,disabled:true});
	var sumUsdP = new Ext.form.TextField({width:80,disabled:true});
	var sumLocP = new Ext.form.TextField({width:80,disabled:true});
	var sumRcP = new Ext.form.TextField({width:80,disabled:true});
	
	this.sumCnyP=0;this.sumUsdP=0;this.sumLocP=0;this.sumRcP=0;
	this.ps=GS('EXPE_PERM_Q','SExpense',SExpense,'expeId','DESC','','','',false);
	this.calcP=function(){
		var d=this.ps.getRange();
		this.sumCnyP=0;this.sumUsdP=0;this.sumLocP=0;this.sumRcP=0;
		for(var i=0;i<d.length;i++){
			if(d[i].get('currCode')=='CNY')
				this.sumCnyP+=parseFloat(d[i].get('expeTotalAmount'));
			else if(d[i].get('currCode')=='USD')
				this.sumUsdP+=parseFloat(d[i].get('expeTotalAmount'));
			this.sumLocP+=parseFloat(d[i].get('expeTotalAmount')*d[i].get('expeExRate'));
			this.sumRcP+=parseFloat(d[i].get('expeWriteOffRcAmount'));
		};
		sumCnyP.setValue(round2(this.sumCnyP));
		sumUsdP.setValue(round2(this.sumUsdP));
		sumLocP.setValue(round2(this.sumLocP));
		sumRcP.setValue(round2(this.sumRcP));
	};
	this.pg=new Fos.ExGrid(p,'P',this,this.ps);
	var pP=new Ext.Panel({width:Ext.isIE?document.body.clientWidth-240:'auto',layout:'fit',
		title:C_EXPE_P,collapsible:true,border:false,items:[this.pg],
		bbar:[cT,sumCnyP,'-',uT,sumUsdP,'-',lT,sumLocP,'-',rT,sumRcP]
	});
	
	this.reCalculate = function(){		
		PCny.setValue(round2(this.sumCnyR-this.sumCnyP));
		PUsd.setValue(round2(this.sumUsdR-this.sumUsdP));
		PLoc.setValue(round2(this.sumLocR-this.sumLocP));
		PRc.setValue(round2(this.sumRcR-this.sumRcP));		
	};
	
	if(p.get('rowAction')!='N')
		this.store.load({params:{consId:p.get('consId')},callback:function(){
			var a=this.store.getRange();			
			for(var i=0;i<a.length;i++){
				if(a[i].get('expeType')=='R'){
					if(!NR(m+S_AR+F_V))
						this.rs.add(a[i]);
				}
				else if(!NR(m+S_AP+F_V))
					this.ps.add(a[i]);
			}
			this.calcR();
			this.calcP();
			this.reCalculate();			
		},scope:this});
	
	this.UN=new Ext.data.SimpleStore({id:0,fields:['U','N'],data:getUN(p)});	
	
	this.updateStatus=function(s){
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CONS_U',consId:p.get('consId'),consStatusExp:s},
			success: function(r){
				p.beginEdit();
				p.set('consStatusExp',s);
				p.set('version',p.get('version')+1);
				p.endEdit();
			this.updateTB();XMG.alert(SYS,M_S);},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);}});
	};
	this.check=function(){this.updateStatus('1');};
	this.unCheck=function(){this.updateStatus('0');};
	this.updateTB=function(){
		var tb=this.getTopToolbar();
		if(tb.getComponent('TB_A')) tb.getComponent('TB_A').setDisabled(NR(M1_S+S_EXPE+F_E)||p.get('consStatusExp')==1||p.get('consStatusAud')!=0);
    	if(tb.getComponent('TB_B')) tb.getComponent('TB_B').setDisabled(NR(M1_S+S_EXPE+F_E)||p.get('consStatusAud')!=0||p.get('consStatusExp')==0);
    	this.rg.updateTB();this.pg.updateTB();
	};	
	this.reSize=function(){
		var bR=pR.collapsed;
		var bP=pP.collapsed;
		if(bR){
			if(!bP) this.pg.setHeight(400);
		}
		else if(bP){
			if(!bR) 
			this.rg.setHeight(400);
		}
		else{this.rg.setHeight(250);this.pg.setHeight(250);}
	};
	//pR.on({'collapse':{fn: this.reSize,scope: this},'expand':{fn:this.reSize,scope:this}});
	//pP.on({'collapse':{fn: this.reSize,scope: this},'expand':{fn:this.reSize,scope:this}});
		
	var tb1={itemId:'TB_A',text:C_EXPE_AUDIT,disabled:NR(m+F_E)||p.get('consStatusExp')==1||p.get('consStatusAud')!=0,iconCls:'check',scope:this,handler:this.check};
	var tb2={itemId:'TB_B',text:C_EXPE_UNCHECK,disabled:NR(m+F_E)||p.get('consStatusAud')!=0||p.get('consStatusExp')==0,iconCls:'renew',scope:this,handler:this.unCheck};
	var tb3={xtype:'tbtext',text:C_PROFIT_CNY};
	var tb4={xtype:'tbtext',text:C_PROFIT_USD};
	var tb5={xtype:'tbtext',text:C_PROFIT_LOC};
	var tb7={xtype:'tbtext',text:C_PROFIT_RC};	
	Fos.ExpenseTab2.superclass.constructor.call(this, { 
	id:"T_EXPE_"+p.get('id'),title:C_EXPE+(f=='C'?'(F3)':('-'+p.get("consNo"))),header:false,autoScroll:true,closable:f=='C'?false:true,
	height:900,labelAlign:'right',bodyStyle:'padding:0px 0px 0px',border:true,
	items: [pBiz,pR,pP],
		tbar:[tb1,'-',tb2,'-',tb3,PCny,'-',tb4,PUsd,'-',tb5,PLoc,'-','-',tb7,PRc]
	});
};
Ext.extend(Fos.ExpenseTab2, Ext.Panel);

Fos.ExWin = function(p) {
	this.f='C';
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'));
	m=m+M3_EXPE;
	
	var PCny = new Ext.form.TextField({width:80,disabled:true});
	var PUsd = new Ext.form.TextField({width:80,disabled:true});
	var PLoc = new Ext.form.TextField({width:80,disabled:true});
	var PRc = new Ext.form.TextField({width:80,disabled:true});
	
	this.store = GS('EXPE_PERM_Q','SExpense',SExpense,'expeId','DESC','','','',false);
	var cT={xtype:'tbtext',text:C_SUM_CNY_C};
	var uT={xtype:'tbtext',text:C_SUM_USD_C};
	var lT={xtype:'tbtext',text:C_SUM_LOC_C};	
	var rT={xtype:'tbtext',text:C_SUM_RC};
	
	var sumCnyR = new Ext.form.TextField({width:80,disabled:true});
	var sumUsdR = new Ext.form.TextField({width:80,disabled:true});
	var sumLocR = new Ext.form.TextField({width:80,disabled:true});
	var sumRcR = new Ext.form.TextField({width:80,disabled:true});
	
	this.sumCnyR=0;this.sumUsdR=0;this.sumLocR=0;this.sumRcR=0;
	this.rs=GS('EXPE_PERM_Q','SExpense',SExpense,'expeId','DESC','','','',false);
	this.calcR=function(){
		var d=this.rs.getRange();
		this.sumCnyR=0;this.sumUsdR=0;this.sumLocR=0;this.sumRcR=0;
		for(var i=0;i<d.length;i++){
			if(d[i].get('currCode')=='CNY')
				this.sumCnyR+=parseFloat(d[i].get('expeTotalAmount'));
			else if(d[i].get('currCode')=='USD')
				this.sumUsdR+=parseFloat(d[i].get('expeTotalAmount'));
			this.sumLocR+=parseFloat(d[i].get('expeTotalAmount')*d[i].get('expeExRate'));			
			this.sumRcR+=parseFloat(d[i].get('expeWriteOffRcAmount'));
		}
		sumCnyR.setValue(round2(this.sumCnyR));
		sumUsdR.setValue(round2(this.sumUsdR));
		sumLocR.setValue(round2(this.sumLocR));
		sumRcR.setValue(round2(this.sumRcR));
	};
	this.rg=new Fos.ExGrid(p,'R',this,this.rs);
	var pR=new Ext.Panel({width:Ext.isIE?document.body.clientWidth-240:'auto',layout:'fit',
			title:C_EXPE_R,collapsible:true,autoscroll:true,border:false,items:[this.rg],
		bbar:[cT,sumCnyR,'-',uT,sumUsdR,'-',lT,sumLocR,'-',rT,sumRcR]
	});		
	var sumCnyP = new Ext.form.TextField({width:80,disabled:true});
	var sumUsdP = new Ext.form.TextField({width:80,disabled:true});
	var sumLocP = new Ext.form.TextField({width:80,disabled:true});
	var sumRcP = new Ext.form.TextField({width:80,disabled:true});
	
	this.sumCnyP=0;this.sumUsdP=0;this.sumLocP=0;this.sumRcP=0;
	this.ps=GS('EXPE_PERM_Q','SExpense',SExpense,'expeId','DESC','','','',false);
	this.calcP=function(){
		var d=this.ps.getRange();
		this.sumCnyP=0;this.sumUsdP=0;this.sumLocP=0;this.sumRcP=0;
		for(var i=0;i<d.length;i++){
			if(d[i].get('currCode')=='CNY')
				this.sumCnyP+=parseFloat(d[i].get('expeTotalAmount'));
			else if(d[i].get('currCode')=='USD')
				this.sumUsdP+=parseFloat(d[i].get('expeTotalAmount'));
			this.sumLocP+=parseFloat(d[i].get('expeTotalAmount')*d[i].get('expeExRate'));
			this.sumRcP+=parseFloat(d[i].get('expeWriteOffRcAmount'));
		};
		sumCnyP.setValue(round2(this.sumCnyP));
		sumUsdP.setValue(round2(this.sumUsdP));
		sumLocP.setValue(round2(this.sumLocP));
		sumRcP.setValue(round2(this.sumRcP));
	};
	this.pg=new Fos.ExGrid(p,'P',this,this.ps);
	var pP=new Ext.Panel({width:Ext.isIE?document.body.clientWidth-240:'auto',layout:'fit',
		title:C_EXPE_P,collapsible:true,border:false,items:[this.pg],
		bbar:[cT,sumCnyP,'-',uT,sumUsdP,'-',lT,sumLocP,'-',rT,sumRcP]
	});
	
	this.reCalculate = function(){		
		PCny.setValue(round2(this.sumCnyR-this.sumCnyP));
		PUsd.setValue(round2(this.sumUsdR-this.sumUsdP));
		PLoc.setValue(round2(this.sumLocR-this.sumLocP));
		PRc.setValue(round2(this.sumRcR-this.sumRcP));		
	};
	
	if(p.get('rowAction')!='N')
		this.store.load({params:{consId:p.get('consId')},callback:function(){
			var a=this.store.getRange();			
			for(var i=0;i<a.length;i++){
				if(a[i].get('expeType')=='R'){
					if(!NR(m+S_AR+F_V))
						this.rs.add(a[i]);
				}
				else if(!NR(m+S_AP+F_V))
					this.ps.add(a[i]);
			}
			this.calcR();
			this.calcP();
			this.reCalculate();			
		},scope:this});
	
	this.UN=new Ext.data.SimpleStore({id:0,fields:['U','N'],data:getUN(p)});	
	
	this.updateStatus=function(s){
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CONS_U',consId:p.get('consId'),consStatusExp:s},
			success: function(r){
				p.beginEdit();
				p.set('consStatusExp',s);
				p.set('version',p.get('version')+1);
				p.endEdit();
			this.updateTB();XMG.alert(SYS,M_S);},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);}});
	};
	this.check=function(){this.updateStatus('1');};
	this.unCheck=function(){this.updateStatus('0');};
	this.updateTB=function(){
		var tb=this.getTopToolbar();
		if(tb.getComponent('TB_A')) tb.getComponent('TB_A').setDisabled(NR(M1_S+S_EXPE+F_E)||p.get('consStatusExp')==1||p.get('consStatusAud')!=0);
    	if(tb.getComponent('TB_B')) tb.getComponent('TB_B').setDisabled(NR(M1_S+S_EXPE+F_E)||p.get('consStatusAud')!=0||p.get('consStatusExp')==0);
    	this.rg.updateTB();this.pg.updateTB();
	};	
	
	var tb1={itemId:'TB_A',text:C_EXPE_AUDIT,disabled:NR(m+F_E)||p.get('consStatusExp')==1||p.get('consStatusAud')!=0,iconCls:'check',scope:this,handler:this.check};
	var tb2={itemId:'TB_B',text:C_EXPE_UNCHECK,disabled:NR(m+F_E)||p.get('consStatusAud')!=0||p.get('consStatusExp')==0,iconCls:'renew',scope:this,handler:this.unCheck};
	var tb3={xtype:'tbtext',text:C_PROFIT_CNY};
	var tb4={xtype:'tbtext',text:C_PROFIT_USD};
	var tb5={xtype:'tbtext',text:C_PROFIT_LOC};
	var tb7={xtype:'tbtext',text:C_PROFIT_RC};	
	
	var panel = new Ext.Panel({
		id:"T_EXPE_"+p.get('id'),title:p.get("consNo")+C_EXPE,header:false,autoScroll:true,
				labelAlign:'right',bodyStyle:'padding:0px 0px 0px',border:true,
				items: [pR,pP],
				tbar:[tb1,'-',tb2,'-',tb3,PCny,'-',tb4,PUsd,'-',tb5,PLoc,'-','-',tb7,PRc]
	});
    Fos.ExWin.superclass.constructor.call(this, {title:p.get('consNo')+C_EXPE,modal:true,width:900,
        height:565,layout:'fit',plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:panel});
};
Ext.extend(Fos.ExWin,Ext.Window);

Fos.ConsignAuditGrid = function() {
	var bp={mt:'xml',xml:''};
	var queryParams = [];
	
	var store = new Ext.data.GroupingStore({url:SERVICE_URL+'?A=CONS_CHECK_X',baseParams:bp,
		reader:new Ext.data.XmlReader({totalProperty:'rowCount',record:'FConsign',idProperty:'consId'},FConsign),
		sortInfo:{field:'consDate', direction:'DESC'},remoteSort:true
	});	
    store.load({params:{start:0,limit:C_PS}});
	
    this.reset=function(){
    	store.baseParams=bp;
    	store.reload({params:{start:0,limit:C_PS}});
    };
    setQueryParams=function(a){
    	queryParams = a;
    };
    
	this.search = function(){
		var win = new Fos.ConsLookupWin('','','','CONS_CHECK_X',store,setQueryParams);
		win.show();
	};	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true,listeners:{scope:this,rowselect:function(s,row,r){
		this.updateTB(r);}}});
	var cm=new Ext.grid.ColumnModel({columns:[
		new Ext.grid.RowNumberer(),sm,
		{header:C_AUDIT_STATUS,width:80,dataIndex:"consStatusAud",renderer:getAUST},
		{header:C_CONS_STATUS,width:80,dataIndex:"consStatus",renderer:getCONS_STATUS},
		{header:C_CONS_NO,width:120,dataIndex:"consNo",renderer:consRender},
		{header:"F/L",width:40,dataIndex:"consShipType"},
		{header:"P/C",width:40,dataIndex:"pateId",renderer:getPATE},
		{header:C_BOOKER,width:200,dataIndex:"custName"},
		{header:C_CSNAME,width:150,hidden:true,dataIndex:"custSname"},
		{header:C_CONS_DATE,width:90,dataIndex:"consDate",renderer:formatDate},	
		{header:C_PACKAGES,width:50,dataIndex:"consTotalPackages",align:'right',css:'font-weight:bold;'},
		{header:C_GW,width:90,dataIndex:"consTotalGrossWeight",align:'right',css:'font-weight:bold;'},
		{header:C_CBM,width:90,dataIndex:"consTotalMeasurement",align:'right',css:'font-weight:bold;'},	
		{header:C_SUM_AR,width:80,dataIndex:"sumR",align:'right',renderer:numRender,css:'font-weight:bold;'},
		{header:C_SUM_AP,width:80,dataIndex:"sumP",align:'right',renderer:numRender,css:'font-weight:bold;'},
		{header:C_PROFIT,width:80,dataIndex:"grossProfit",align:'right',renderer:numRenderColor,css:'font-weight:bold;'},
		{header:C_PROFIT_RATE,dataIndex:"grossProfitRate",align:'right',renderer:numRenderColor,css:'font-weight:bold;'},
		{header:C_AR_USD,dataIndex:"sumRUsd",align:'right',renderer:numRender,css:'font-weight:bold;'},
		{header:C_AP_USD,dataIndex:"sumPUsd",align:'right',renderer:numRender,css:'font-weight:bold;'},
		{header:C_AR_CNY,dataIndex:"sumRCny",align:'right',renderer:numRender,css:'font-weight:bold;'},
		{header:C_AP_CNY,dataIndex:"sumPCny",align:'right',renderer:numRender,css:'font-weight:bold;'},
		{header:C_CONT_NUM,width:60,dataIndex:"consTotalContainers",align:'right',renderer:function(v){return (v)?v:0;},css:'font-weight:bold;'},
		{header:"20'",hidden:true,dataIndex:"consContainers20",align:'right',renderer:function(v){return (v)?v:0;},css:'font-weight:bold;'},
		{header:"40'",hidden:true,dataIndex:"consContainers40",align:'right',renderer:function(v){return (v)?v:0;},css:'font-weight:bold;'},
		{header:"40'H",hidden:true,dataIndex:"consContainers40h",align:'right',renderer:function(v){return (v)?v:0;},css:'font-weight:bold;'},
		{header:"45'H",hidden:true,dataIndex:"consContainers45",align:'right',renderer:function(v){return (v)?v:0;},css:'font-weight:bold;'},
		{header:C_CONT_INFO,width:60,dataIndex:"consContainersInfo"},
		{header:C_AR_USD_INVOICED,hidden:true,dataIndex:"sumRUsdInvoice",align:'right',renderer:numRender},
		{header:C_AR_USD_WRITEOFFED,hidden:true,dataIndex:"sumRUsdWriteOff",align:'right',renderer:numRender},
		{header:C_AR_CNY_INVOICED,hidden:true,dataIndex:"sumRCnyInvoice",align:'right',renderer:numRender},
		{header:C_AR_CNY_WRITEOFFED,hidden:true,dataIndex:"sumRCnyWriteOff",align:'right',renderer:numRender},		
		{header:C_AP_USD_INVOICED,hidden:true,dataIndex:"sumPUsdInvoice",align:'right',renderer:numRender},
		{header:C_AP_USD_WRITEOFFED,hidden:true,dataIndex:"sumPUsdWriteOff",align:'right',renderer:numRender},		
		{header:C_AP_CNY_INVOICED,hidden:true,dataIndex:"sumPCnyInvoice",align:'right',renderer:numRender},
		{header:C_AP_CNY_WRITEOFFED,hidden:true,dataIndex:"sumPCnyWriteOff",align:'right',renderer:numRender},
		{header:C_VESS,dataIndex:"vessName"},
		{header:C_VOYA,dataIndex:"voyaName"},
		{header:C_MBL_NO,dataIndex:"consMblNo"},
		{header:C_HBL_NO,dataIndex:"consHblNo"},
		{header:C_SAIL_DATE,dataIndex:"consSailDate",renderer:formatDate},
		{header:C_POL,dataIndex:"consPolEn"},
		{header:C_POD,dataIndex:"consPodEn"},
		{header:C_POT,dataIndex:"consPotEn"},
		{header:C_CARRIER,width:200,dataIndex:"consCarrierName"},
		{header:C_BOOK_AGENCY,width:200,dataIndex:"consBookingAgencyName"},
		{header:C_M_CONS_NO,dataIndex:"consMasterConsNo"},
		{header:C_REMARKS,dataIndex:"consRemarks"}
		],defaults:{sortable:true,width:100}});
	var rowCtxEvents = {rowdblclick: function(g,r,e){this.showExpense();}};
	this.updateStatus=function(s){
		var p = sm.getSelected();
		if(p) Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',
				params:{A:'CONS_U',consId:p.get('consId'),consStatusAud:s},
				success: function(r){
					p.beginEdit();p.set('consStatusAud',s);
					p.endEdit();
					this.updateTB(p);
					XMG.alert(SYS,M_S);
				},
				failure: function(r){
					XMG.alert(SYS,M_F+r.responseText);
				}});
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.showExpense = function(p){
		var p=sm.getSelected();
		if(p){
			var t=T_MAIN.getComponent('T_EXPE_'+p.get("id"));if(t){T_MAIN.setActiveTab(t);}
			else {
				t=T_MAIN.add(VERSION==0?(new Fos.ExpenseTab(p,'A')):(new Fos.ExpenseTab2(p,'A')));
				T_MAIN.setActiveTab(t);
				t.doLayout();}
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};	
	this.exp=function(){
		if(queryParams.length>0){
			var a = queryParams;
			var qa = [];
			for(var i=0;i<a.length;i++){
				qa[i] = {key:a[i].get('key'),op:a[i].get('op'),value:a[i].get('value')};
			}
			EXP('C','CONS_AUDIT','&mt=JSON&xml='+Ext.util.JSON.encode(FOSJ(QTJ(qa))));
		}
		else{
			EXP('C','CONS_AUDIT','&mt=JSON&start=0&limit=500');
		}
	};
			
	this.updateTB=function(r){
		var tb=this.getTopToolbar();
		if(tb.getComponent('TB_2')) tb.getComponent('TB_2').setDisabled(NR(M1_S+S_COAU+F_A)||r.get('consStatusAud')!=0);
    	if(tb.getComponent('TB_3')) tb.getComponent('TB_3').setDisabled(NR(M1_S+S_COAU+F_A2)||r.get('consStatusAud')!=1);
    	if(tb.getComponent('TB_6')) tb.getComponent('TB_6').setDisabled(NR(M1_S+S_COAU+F_A)||r.get('consStatusAud')!=1);
    	if(tb.getComponent('TB_7')) tb.getComponent('TB_7').setDisabled(NR(M1_S+S_COAU+F_A2)||r.get('consStatusAud')!=2);
	};
	var b1={itemId:'TB_1',text:C_EXPE+'(Y)',disabled:NR(M1_S+S_EXPE),iconCls:'option',handler:this.showExpense};
	var b2={itemId:'TB_2',text:C_FIN_CHECK+'(C)',disabled:NR(M1_S+S_COAU+F_A),
			iconCls:'check',scope:this,handler:function(){this.updateStatus('1');}};
	var b3={itemId:'TB_3',text:C_MANAGER_CHECK+'(M)',disabled:NR(M1_S+S_COAU+F_A2),
			iconCls:'check',scope:this,handler:function(){this.updateStatus('2');}};
	var b4={itemId:'TB_4',text:C_SEARCH+('(F)'),iconCls:'search',handler:this.search};
	var b5={itemId:'TB_5',text:C_EXPORT+'(E)',disabled:NR(M1_S+S_COAU+F_E),iconCls:'print',scope:this,
			handler:this.exp};
				
	var b6={itemId:'TB_6',text:'(U)',tooltip:C_FIN_CHECK_CANCEL,iconCls:'renew',disabled:NR(M1_S+S_COAU+F_A),scope:this,handler:function(){this.updateStatus('0');}};
	var b7={itemId:'TB_7',text:'(V)',tooltip:C_MANAGER_CHECK_CANCEL,iconCls:'renew',disabled:NR(M1_S+S_COAU+F_A2),scope:this,handler:function(){this.updateStatus('1');}};
	var b8={text:C_FAST_SEARCH+'(Q)',iconCls:'search',scope:this,handler:function(){this.fastSearch();}};
	var b9={text:C_RESET+'(F5)',iconCls:'refresh',handler:this.reset};
	var vc={forceFit:false,
		/* templates:{   
			    cell: new Ext.Template( 
			      '<td height=24 class="x-grid3-col x-grid3-cellx-grid3-td-{id}   x-selectable{css}" style="{style}"  tabIndex="0" {cellAttr}>',
			      '<div style="padding-top:4px;" class="x-grid3-cell-innerx-grid3-col-{id}" {attr}>{value}</div>',
			      '</td>'
			       )
			    },*/
		groupTextTpl: '{text} ({[values.rs.length]} {[values.rs.length > 1 ? "Items" : "Item"]})',
		getRowClass: function(record, index) {
			var t=getCFG('PROFIT_ALERT_TYPE');
			var v=getCFG('PROFIT_ALERT_VALUE');
			 var c = 0;
			if(t==C_PROFIT) c = record.get('grossProfit');			
			else c=record.get('grossProfitRate');            
            if (c < v) return 'red-font-row';
            else return 'green-font-row';
        }
	};
	var kw = new Ext.form.TextField({listeners:{scope:this,specialkey:function(c,e){if(e.getKey()==Ext.EventObject.ENTER) this.fastSearch();}}});
    this.fastSearch=function(){
    	var consNo=kw.getValue();
		if(!consNo){
			XMG.alert(SYS,M_INPUT_BIZ_NO,function(b){kw.focus();});
			return;
		};		
     	var a=[];
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
    	store.baseParams={mt:'xml',xml:FOSX(QTX(a))};     	
     	store.reload({params:{start:0,limit:C_PS},
     		callback:function(r){
     			if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);
     		}});
    };
    new Ext.KeyMap(Ext.getDoc(), {
        key:'ycmfeuv',ctrl:true,
        handler: function(k, e) {
            var tc = T_MAIN.getComponent('G_COAU');
            if(tc&&tc==T_MAIN.getActiveTab()){
                switch(k) {
                case Ext.EventObject.Y: if(!NR(M1_S+S_EXPE)) this.showExpense();break;
                case Ext.EventObject.C: if(!NR(M1_S+S_COAU+F_A)) this.updateStatus('1');break;
                case Ext.EventObject.M: if(!NR(M1_S+S_COAU+F_A)) this.updateStatus('2');break;
                case Ext.EventObject.U: if(!NR(M1_S+S_COAU+F_A)) this.updateStatus('0');break;
                case Ext.EventObject.V: if(!NR(M1_S+S_COAU+F_A)) this.updateStatus('1');break;
                case Ext.EventObject.F: this.search();break;
                case Ext.EventObject.E: if(!NR(M1_D+F_E)) EXP('C','CONS_AUDIT','');break;
                }
            }
        },stopEvent:true,scope:this});
    new Ext.KeyMap(Ext.getDoc(), {key:[116],
        handler: function(k, e) {
            var tc = T_MAIN.getComponent('G_COAU');
            if(tc&&tc==T_MAIN.getActiveTab()){switch(k) {case Ext.EventObject.F5:this.reset();break;}}
        },stopEvent: true,scope:this
    });
    this.pagingNav=function(page){
        var tc = T_MAIN.getComponent('G_COAU');
        if(tc&&tc==T_MAIN.getActiveTab()){
            var pt = this.getBottomToolbar();
            if (!pt[page].disabled) pt.onClick(page);
         }
    };
    this.nav = new Ext.KeyNav(Ext.getDoc(),{
        pageDown: this.pagingNav.createDelegate(this,['next']),
        pageUp: this.pagingNav.createDelegate(this, ['prev']),
        home: this.pagingNav.createDelegate(this,['first']),
        end: this.pagingNav.createDelegate(this,['last']),
        scope:this
    });
	Fos.ConsignAuditGrid.superclass.constructor.call(this, {
	    id:'G_COAU',iconCls:'grid',store: store,title:C_CONS_AUDIT,header:false,autoScroll:true,loadMask:true,
		sm:sm,cm:cm,stripeRows:true,closable:true,listeners:rowCtxEvents,view:new Ext.grid.GroupingView(vc),
		tbar:[b1,'-',b2,b6,'-',b3,b7,'-',b4,'-',b5,'-',kw,b8,'-',b9],bbar:PTB(store,C_PS)});	
};
Ext.extend(Fos.ConsignAuditGrid, Ext.grid.GridPanel);
var showInvoice= function(p){
	var tab = T_MAIN.getComponent("T_INVO_" + p.get("id"));
	if(tab) {T_MAIN.setActiveTab(tab);}
	else {tab = T_MAIN.add(new Fos.InvoiceTab(p));
	T_MAIN.setActiveTab(tab);tab.doLayout();}
};
Fos.InvoiceGrid = function(t) {
	var store = new Ext.data.GroupingStore({url:SERVICE_URL,
		baseParams:{A:'INVO_Q',mt:'xml',invoType:t},
		reader:new Ext.data.XmlReader({totalProperty:'rowCount',record:'SInvoice',idProperty:'invoId'},SInvoice),
		remoteSort:true,sortInfo:{field:'invoId', direction:'DESC'}
		//,groupField:'invoDate'
		});	
    store.load({params:{start:0,limit:C_PS}});
    
    var a=[];
		
    this.reset=function(){    	
    	store.baseParams={mt:'xml',invoType:t,xml:FOSX(QTX(a))};    	
    	store.load({params:{start:0,limit:C_PS}});
    };
    
    
    this.search = function(){
    	var win = new Fos.InvoLookupWin(t);
		win.addButton({text:C_OK,handler:function(){
        	var tab = Fos.InvoLookupWin.superclass.findById.call(win,'T_INVO_LOOK');
        	var at = tab.getActiveTab();
        	var a=[];
        	if(at.getId()=='T_INVO_LOOK_1'){
        		
        		var invoNo=at.find('name','invoNo')[0].getValue();
        		var invoNoM=at.find('name','invoNoM')[0].getValue();        		
        		var c=invoNo.indexOf(',');
        		var b=invoNo.indexOf('..');
        		if(c>=0){
        			a[a.length]=new QParam({key:'invoNo',value:invoNo,op:IN});
        		}
        		else if(b>=0){
        			var ra=invoNo.split('..');
        			a[a.length]=new QParam({key:'invoNo',value:ra[0],op:GE});
        			a[a.length]=new QParam({key:'invoNo',value:ra[1],op:LE});
        		}
        		else if(invoNoM){
        			a[a.length]=new QParam({key:'invoNo',value:invoNo,op:LI});
        		}
        	}
        	else if(at.getId()=='T_INVO_LOOK_2'){
        		var invoTaxNo=at.find('name','invoTaxNo')[0].getValue();
        		var invoTaxNoM=at.find('name','invoTaxNoM')[0].getValue();
        		var c=invoTaxNo.indexOf(',');
        		var b=invoTaxNo.indexOf('..');
        		if(c>=0){a[a.length]={key:'invoTaxNo',value:invoTaxNo,op:IN};}
        		else if(b>=0){
        			var ra=invoTaxNo.split('..');
        			a[a.length]=new QParam({key:'invoTaxNo',value:ra[0],op:GE});
        			a[a.length]=new QParam({key:'invoTaxNo',value:ra[1],op:LE});
        		}
        		else if(invoTaxNoM){
        			a[a.length]=new QParam({key:'invoTaxNo',value:invoTaxNo,op:LI});
        		}
        	}
        	else if(at.getId()=='T_INVO_LOOK_3'){
        		var custId=at.find('name','custId')[0].getValue();
        		if(custId) 
        			a[a.length]=new QParam({key:'custId',value:custId,op:EQ});
        		var currCode=at.find('name','currCode')[0].getValue();        		
        		if(currCode) 
        			a[a.length]=new QParam({key:'currCode',value:currCode,op:EQ});
        		var invoStatus=at.find('name','invoStatus')[0].getValue();        		
        		if(invoStatus) 
        			a[a.length]=new QParam({key:'invoStatus',value:invoStatus,op:EQ});
        		else 
        			a[a.length]=new QParam({key:'invoStatus',value:2,op:NE});
        		var invoWriteOffStatus=at.find('name','invoWriteOffStatus')[0].getValue();        
        		if(invoWriteOffStatus) 
        			a[a.length]=new QParam({key:'invoWriteOffStatus',value:invoWriteOffStatus,op:EQ});
        		var consNo=at.find('name','consNo')[0].getValue();        		
        		if(consNo) 
        			a[a.length]=new QParam({key:'consNo',value:consNo,op:EQ});
        		var consMblNo=at.find('name','consMblNo')[0].getValue();        		
        		if(consMblNo) 
        			a[a.length]=new QParam({key:'consMblNo',value:consMblNo,op:EQ});
        		var vessName=at.find('name','vessName')[0].getValue();        		
        		if(vessName) 
        			a[a.length]=new QParam({key:'vessName',value:vessName,op:EQ});
        		var voyaName=at.find('name','voyaName')[0].getValue();        		
        		if(voyaName) 
        			a[a.length]=new QParam({key:'voyaName',value:voyaName,op:EQ});        		
        		var invoDate=at.find('name','invoDate')[0].getValue();
        		var invoDate2=at.find('name','invoDate2')[0].getValue();
        		if(invoDate && invoDate2){
        			a[a.length]=new QParam({key:'invoDate',value:invoDate.format('Y-m-d H:i:s'),op:GE});
        			a[a.length]=new QParam({key:'invoDate',value:invoDate2.format('Y-m-d H:i:s'),op:LE});
        		}
        		else if(invoDate) 
        			a[a.length]=new QParam({key:'invoDate',value:invoDate,op:EQ});
        		var invoDueDate=at.find('name','invoDueDate')[0].getValue();
        		var invoDueDate2=at.find('name','invoDueDate2')[0].getValue();
        		if(invoDueDate && invoDueDate2){
        			a[a.length]=new QParam({key:'invoDueDate',value:invoDueDate.format('Y-m-d H:i:s'),op:GE});
        			a[a.length]=new QParam({key:'invoDueDate',value:invoDueDate2.format('Y-m-d H:i:s'),op:LE});
        		}
        		else if(invoDueDate) 
        			a[a.length]=new QParam({key:'invoDueDate',value:invoDueDate,op:EQ});
        		var consSailDate=at.find('name','consSailDate')[0].getValue();
        		var consSailDate2=at.find('name','consSailDate2')[0].getValue();
        		if(consSailDate && consSailDate2){
        			a[a.length]=new QParam({key:'consSailDate',value:consSailDate.format('Y-m-d H:i:s'),op:GE});
        			a[a.length]=new QParam({key:'consSailDate',value:consSailDate2.format('Y-m-d H:i:s'),op:LE});
        		}
        		else if(consSailDate) 
        			a[a.length]=new QParam({key:'consSailDate',value:consSailDate,op:EQ});
        		var invoAmount=at.find('name','invoAmount')[0].getValue();
        		var invoAmount2=at.find('name','invoAmount2')[0].getValue();
        		if(invoAmount && invoAmount2){
        			a[a.length]=new QParam({key:'invoAmount',value:invoAmount,op:GE});
        			a[a.length]=new QParam({key:'invoAmount',value:invoAmount2,op:LE});
        		}
        		else if(invoAmount) 
        			a[a.length]=new QParam({key:'invoAmount',value:invoAmount,op:EQ});
        	}
        	store.baseParams={A:'INVO_X',mt:'xml',invoType:t,xml:FOSX(QTX(a))};
     		store.reload({params:{start:0,limit:C_PS},
     			callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});win.close();
		}},this);
		win.addButton({text:C_CANCEL,handler : function(){win.close();}},this);
		win.show();
    };
    var kw = new Ext.form.TextField({listeners:{scope:this,specialkey:function(c,e){if(e.getKey()==Ext.EventObject.ENTER) this.fastSearch();}}});
    this.fastSearch=function(){
        var invoTaxNo=kw.getValue();
        if(!invoTaxNo){
        	XMG.alert(SYS,M_INPUT_TAX_NO,function(b){kw.focus();});
        	return;
        };
        var a=[];        
        var c=invoTaxNo.indexOf(',');
        var b=invoTaxNo.indexOf('..');
        
        if(c>=0){
            a[a.length]=new QParam({key:'invoTaxNo',value:invoTaxNo,op:IN});
        }
        else if(b>=0){
            var ra=invoTaxNo.split('..');
            a[a.length]=new QParam({key:'invoTaxNo',value:ra[0],op:GE});
            a[a.length]=new QParam({key:'invoTaxNo',value:ra[1],op:LE});
        }
        a[a.length]=new QParam({key:'invoTaxNo',value:invoTaxNo,op:LI});
        store.baseParams={A:'INVO_X',mt:'xml',invoType:t,xml:FOSX(QTX(a))};
        store.reload({params:{start:0,limit:C_PS},
        	callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});
    };
    
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm=new Ext.grid.ColumnModel({columns:[
		new Ext.grid.RowNumberer(),sm,
		{header:C_STATUS,width:80,dataIndex:"invoStatus",renderer:getIVST},
		{header:C_WRITEOFF_STATUS,width:80,dataIndex:"invoWriteOffStatus",renderer:getWRST},
		{header:C_INVO_NO,width:100,dataIndex:"invoNo"},
		{header:C_TAX_NO,width:100,dataIndex:"invoTaxNo"},
		{header:C_SETTLE_OBJECT,width:200,dataIndex:"custName"},		
		{header:C_CURR,width:40,dataIndex:"currCode"},
		{header:C_INVO_AMOUNT,align:'right',renderer:numRender,dataIndex:"invoAmount"},	
		{header:C_INVO_DATE,dataIndex:"invoDate",renderer:formatDate},
		{header:C_DUE_DATE,dataIndex:"invoDueDate",renderer:formatDate},
		{header:C_SEWA,dataIndex:"invoPaymentType",renderer:getSEWA},
		{header:C_WRITEOFFED_AMOUNT,align:'right',renderer:numRender,dataIndex:"invoAmountWriteOff"},
		{header:C_BANK,width:120,dataIndex:"invoBank"},
		{header:C_BANK_ACCOUNT,width:120,dataIndex:"invoAccount"},
		{header:C_BIZ_TYPE,dataIndex:"invoBizClass",renderer:getBC},		
		{header:C_CONS_NO,width:120,dataIndex:"invoConsNo"},
		{header:C_VESS,width:120,dataIndex:"invoVessel"},
		{header:C_VOYA,dataIndex:"invoVoyage"},
		{header:C_BL_NO,dataIndex:"invoBlNo"},		
		{header:C_BILL_BY,dataIndex:"invoIssuer",renderer:getUSER},
		{header:C_AUDIT_BY,dataIndex:"invoChecker",renderer:getUSER},
		{header:C_SIGNER,dataIndex:"invoSigner",renderer:getUSER},
		{header:C_SIGN_DATE,dataIndex:"invoSignDate",renderer:formatDate},		
		{header:C_REMARKS,dataIndex:"invoRemarks"}
		],defaults:{sortable:true,width:90}});
	var rowCtxEvents={rowdblclick:function(grid, rowIndex, event){var c= grid.getSelectionModel().getSelected();if(c){showInvoice(c);}}};
	this.add=function(){
    	var currCode='CNY';var w=new Fos.CurrencyWin();
		w.addButton({text:C_OK,scope:this,handler:function(){
			currCode = w.findById('currCode').getValue();
			w.close();var id=GGUID();
			var e = new SInvoice({invoId:id,id:id,invoNo:'N'+id,currCode:currCode,
				invoType:t,invoDate:new Date(),invoExRate:getExRate(currCode,'CNY'),invoWriteOffStatus:'0',
				invoPrFlag:'0',invoUploadFlag:'0',invoStatus:'0',version:'0',rowAction:'N'});
			var tab = T_MAIN.add(new Fos.InvoiceTab(e));
			T_MAIN.setActiveTab(tab);
		}},this);
		w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);w.show();
    };
	this.edit=function(){
		var p=sm.getSelected();
		if(p){showInvoice(p);}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);};
    this.removeInvo=function(){
    	var a =sm.getSelections();
       	if(a.length>0){
       		XMG.confirm(SYS,M_R_C,function(btn){
           	if(btn=='yes'){
           		var b = false;
               	for(var i=0;i<a.length;i++){if(a[i].get('invoStatus')!='0') b=true;}
               	if(b) XMG.alert(SYS,M_INVO_CONFIRMED);
               	else {
               		var xml = SMTX4R(sm,'SInvoice','invoId');
               		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'INVO_S'},
					success: function(){sm.each(function(p){store.remove(p);});XMG.alert(SYS,M_S);},
					failure: function(r,o){XMG.alert(SYS,M_F+r.responseText);},
					xmlData:FOSX(xml)});
               	}
           }});
		}
       	else XMG.alert(SYS,M_R_P);
    };
    new Ext.KeyMap(Ext.getDoc(), {
		key:'nmdfe',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('G_INVO_'+t);
		 	if(tc&&tc==T_MAIN.getActiveTab()){
		 		switch(k) {
		 		case Ext.EventObject.N: if(!NR(M1_S+(t=='R'?S_INVO_R:S_INVO_P)+F_M)) this.add();break;
		 		case Ext.EventObject.M: if(!NR(M1_S+(t=='R'?S_INVO_R:S_INVO_P)+F_M)) this.edit();break;
		 		case Ext.EventObject.D: if(!NR(M1_S+(t=='R'?S_INVO_R:S_INVO_P)+F_R)) this.removeInvo();break;			 		
		 		case Ext.EventObject.F: this.search();break;
				case Ext.EventObject.E: if(!NR(M1_S+(t=='R'?S_INVO_R:S_INVO_P)+F_E)) EXP('C','INVO_LIST','&mt=xml&xml='+Ext.util.JSON.encode(store.baseParams.xml));break;
				}
		 	}
		},stopEvent:true,scope:this});
    
    var b8={text:C_FAST_SEARCH+'(Q)',iconCls:'search',handler:this.fastSearch}; 
    var b9={text:C_RESET+'(F5)',iconCls:'refresh',handler:this.reset};
    new Ext.KeyMap(Ext.getDoc(), {key:[116],
        handler: function(k, e) {
            var tc = T_MAIN.getComponent('G_INVO_'+t);
            if(tc&&tc==T_MAIN.getActiveTab()){switch(k) {case Ext.EventObject.F5:this.reset();break;}}
        },stopEvent: true,scope:this
    });
    this.pagingNav=function(page){
        var tc = T_MAIN.getComponent('G_INVO_'+t);
        if(tc&&tc==T_MAIN.getActiveTab()){
            var pt = this.getBottomToolbar();
            if (!pt[page].disabled) pt.onClick(page);
         }
    };
    this.nav = new Ext.KeyNav(Ext.getDoc(),{
        pageDown: this.pagingNav.createDelegate(this,['next']),
        pageUp: this.pagingNav.createDelegate(this, ['prev']),
        home: this.pagingNav.createDelegate(this,['first']),
        end: this.pagingNav.createDelegate(this,['last']),
        scope:this
    });
    
    this.exp = function(){
    	if(store.baseParams.xml){
			EXPC('INVO_LIST','&mt=xml&invoType='+t+'&xml='+store.baseParams.xml);
		}
		else{		
			EXPC('INVO_LIST','&mt=xml&sort=invoId&dir=DESC&invoType='+t+'&start=0&limit=20');
		}
    };
    
	Fos.InvoiceGrid.superclass.constructor.call(this, {    
    id:'G_INVO_'+t,iconCls:'grid',store: store,title:t=='R'?C_INVO_R_MGT:C_INVO_P_MGT,header:false,autoScroll:true,
	sm:sm,cm:cm,stripeRows:true,closable:true,listeners:rowCtxEvents,view:new Ext.grid.GroupingView(groupViewCfg),
	tbar:[{text:C_ADD+'(N)',disabled:NR(M1_S+(t=='R'?S_INVO_R:S_INVO_P)+F_M),iconCls:'add',scope:this,handler:this.add},'-',
		{text:C_EDIT+'(M)',disabled:NR(M1_S+(t=='R'?S_INVO_R:S_INVO_P)+F_M),iconCls:'option',handler:this.edit},'-',
		{text:C_REMOVE+'(D)',disabled:NR(M1_S+(t=='R'?S_INVO_R:S_INVO_P)+F_R),iconCls:'remove',handler:this.removeInvo},'-',
		{text:C_SEARCH+'(F)',iconCls:'search',handler:this.search},'-',
		{text:C_EXPORT+'(E)',disabled:NR(M1_S+(t=='R'?S_INVO_R:S_INVO_P)+F_E),iconCls:'print',handler:this.exp},'-',
        kw,b8,'-',b9,'-'],
	bbar:PTB(store,C_PS)});
};
Ext.extend(Fos.InvoiceGrid, Ext.grid.GridPanel);
Fos.ExpenseLookupWin = function(store) {
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,
		{header:C_SETTLE_OBJECT,width:200,dataIndex:"custName"},
		{header:C_CONS_NO,width:120,dataIndex:"consNo"},		
		{header:C_CHAR,width:80,dataIndex:"charName"},
		{header:C_UNIT,width:80,dataIndex:"unitName"},
		{header:C_QUANTITY,width:60,renderer:rateRender,dataIndex:"expeNum"},
		{header:C_UNIT_PRICE,width:80,renderer:rateRender,dataIndex:"expeUnitPrice"},		
		{header:C_CURR,dataIndex:'currCode',width:60},	
		{header:C_EX_RATE,width:80,renderer:rateRender,dataIndex:"expeExRate"},	
		{header:C_TOTAL_AMOUNT,width:80,renderer:numRender,dataIndex:"expeTotalAmount"},	
		{header:C_INVOICED_AMOUNT,width:100,renderer:numRender,dataIndex:"expeInvoiceAmount"},
		{header:C_WRITEOFFED_AMOUNT,width:100,renderer:numRender,dataIndex:"expeWriteOffAmount"},
		{header:C_MBL_NO,width:80,dataIndex:"consMblNo"},
		{header:C_HBL_NO,width:80,dataIndex:"consHblNo"},
		{header:C_SAIL_DATE,dataIndex:"consSailDate",renderer:formatDate},
		{header:C_VESS,width:80,dataIndex:"consVessel"},
		{header:C_VOYA,width:80,dataIndex:"consVoyage"},
		{header:C_INVO_NO,width:100,dataIndex:"expeInvoiceNo"},
		{header:C_REMARKS,width:100,dataIndex:"expeRemarks"}
		],defaults:{sortable:true,width:100}});
	var filters = new Ext.grid.GridFilters({
		  filters:[{type: 'string',  dataIndex: 'consNo'},
		    {type: 'string',  dataIndex: 'charName'},
		    {type: 'string',  dataIndex: 'currCode'},
		    {type: 'date',  dataIndex: 'consSailDate'},
		    {type: 'numeric', dataIndex: 'expeTotalAmount'}]});
    this.grid = new Ext.grid.GridPanel({ 
    header:false,store:store,sm:sm,cm:cm,plugins:filters,loadMask:true});	
   
    Fos.ExpenseLookupWin.superclass.constructor.call(this,{title:C_ADD_EXPE,modal:true,layout:'fit',width:900,
        height:600,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:this.grid}); 
};
Ext.extend(Fos.ExpenseLookupWin,Ext.Window);
Fos.InvoItemGrid = function(p,frm,billNo){
	var store = GS('INIT_Q','SInvoiceItem',SInvoiceItem,'initId','Desc','','',false);
	if(billNo){
		Ext.Ajax.request({url:SERVICE_URL,method:'POST',
			params:{A:'EXPE_INV_Q',expeBillNo:billNo},scope:this,
			success: function(res,o){
				var r = XTRA(res.responseXML,'SExpense',SExpense);
				var sum=0;
				for(var i=0;i<r.length;i++){
					var ex=r[i].get('currCode')==p.get('currCode')?p.get('invoExRate'):getExRate(r[i].get('currCode'),'CNY');
					var invoAmountOri = round2(r[i].get('expeTotalAmount')-r[i].get('expeInvoiceAmount'));
					var invoAmount = round2(invoAmountOri*ex/p.get('invoExRate'));
					var it = new SInvoiceItem({id:GGUID(),initId:'0',invoId:p.get('invoId'),invoDate:p.get('invoDate'),expeId:r[i].get('expeId'),expeType:r[i].get('expeType'),
					consId:r[i].get('consId'),consNo:r[i].get('consNo'),custId:r[i].get('custId'),custName:r[i].get('custName'),custSname:r[i].get('custSname'),
					consVessel:r[i].get('consVessel'),consVoyage:r[i].get('consVoyage'),consSailDate:r[i].get('consSailDate'),
					consMblNo:r[i].get('consMblNo'),consHblNo:r[i].get('consHblNo'),
					charName:r[i].get('charName'),charNameEn:r[i].get('charNameEn'),
					unitName:r[i].get('unitName'),expeCurrCode:r[i].get('currCode'),
					expeUnitPrice:r[i].get('expeUnitPrice'),expeNum:r[i].get('expeNum'),expeExRate:r[i].get('expeExRate'),
					expeCommission:r[i].get('expeCommission'),expeCommissionRate:r[i].get('expeCommissionRate'),
					expeTotalAmount:r[i].get('expeTotalAmount'),expeInvoiceAmount:r[i].get('expeInvoiceAmount'),
					expeRemarks:r[i].get('expeRemarks'),initInvoiceAmountOri:invoAmountOri,initInvoiceAmount:invoAmount,
					initInvoiceAmountOriW:'0',initInvoiceAmountW:'0',initCancelFlag:'0',
					initWriteOffStatus:'0',invoCurrCode:p.get('currCode'),
					initExRate:ex,invoExRate:p.get('invoExRate'),rowAction:'',version:'0'});
					store.insert(0,it);
					it.set('rowAction','N');
					sum = sum + invoAmount;
				};
				frm.find('name','invoAmount')[0].setValue(sum);
			}});
	}
	else if(p.get('rowAction')!='N') 
		store.load({params:{invoId:p.get('invoId')}});
	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,		
		{header:C_CHAR,dataIndex:'charName'},
		{header:C_UNIT,hidden:true,dataIndex:'unitName'},	
		{header:C_UNIT_PRICE,align:'right',renderer:rateRender,dataIndex:'expeUnitPrice'},
		{header:C_QUANTITY,renderer:rateRender,dataIndex:'expeNum'},
		{header:C_CURR_BASE,dataIndex:'expeCurrCode'},
		{header:C_ORI_AMOUNT,align:'right',renderer:numRender,dataIndex:'expeTotalAmount'},
		{header:C_INVOICED_AMOUNT,align:'right',renderer:numRender,dataIndex:'expeInvoiceAmount'},
		{header:C_INVOICE_AMOUNT_ORI,align:'right',renderer:numRender,dataIndex:'initInvoiceAmountOri',css:'background:#ffaa66;',editor:new Ext.form.NumberField({allowBlank:false,blankText:'',invalidText:''})},		
		{header:C_INVO_EX_RATE,dataIndex:'initExRate',renderer:rateRender,css:'background: #f4f090;',editor:new Ext.form.NumberField({decimalPrecision:4,blankText:'',invalidText:''})},
		{header:C_EX_AMOUNT,align:'right',renderer:numRender,dataIndex:'initInvoiceAmount',css:'background: #ffaa66;',editor:new Ext.form.NumberField({allowBlank:false,blankText:'',invalidText:''})},
		{header:C_WRITEOFFED_AMOUNT,align:'right',renderer:numRender,dataIndex:'initInvoiceAmountOriW'},
		{header:C_CONS_NO,width:120,dataIndex:"consNo",renderer:consRender},
		{header:C_VESS,width:80,dataIndex:"consVessel"},
		{header:C_VOYA,width:80,dataIndex:"consVoyage"},
		{header:C_MBL_NO,width:80,dataIndex:"consMblNo"},
		{header:C_HBL_NO,width:80,dataIndex:"consHblNo"},
		{header:C_REMARKS,width:120,dataIndex:'expeRemarks'}
		],defaults:{sortable:true,width:90}});
	this.reCalculate = function(){
		var sum=0;
		var d=store.getRange();
		for(var i=0;i<d.length;i++){
			sum = round2(sum + parseFloat(d[i].get('initInvoiceAmount')));
		}
		p.set('invoAmount',sum);
		frm.find('name','invoAmount')[0].setValue(sum);
	};
	this.add=function(){
		if(p.get('custId')){
			var eStore = new Ext.data.Store({url:SERVICE_URL+'?A=EXPE_INV_Q',
				baseParams:{mt:'xml',custId:p.get('custId'),pateCode:'P',expeAllocatedFlag:0,
					expeType:p.get('invoType')},
				reader:new Ext.data.XmlReader({totalProperty:'rowCount',record:'SExpense',idProperty:'expeId'},SExpense),
				remoteSort:true,sortInfo:{field:'expeId', direction:'DESC'}});	
			eStore.load();	
			
			var win = new Fos.ExpenseLookupWin(eStore);
			win.addButton({text:C_OK,scope:this,handler:function(){
				var g = win.grid;
				var r = g.getSelectionModel().getSelections();
				if(r){
					var rn = store.getCount();
					for(var i=0;i<r.length;i++){
						if(rn==0 || store.findBy(function(rec,id){return rec.get('expeId')==r[i].get('expeId');})==-1){							
							var ex=r[i].get('currCode')==p.get('currCode')?p.get('invoExRate'):getExRate(r[i].get('currCode'),'CNY');
							var invoAmountOri = round2(r[i].get('expeTotalAmount')-r[i].get('expeInvoiceAmount'));
							var invoAmount = round2(invoAmountOri*ex/p.get('invoExRate'));
							var it = new SInvoiceItem({id:GGUID(),initId:'0',invoId:p.get('invoId'),invoDate:p.get('invoDate'),expeId:r[i].get('expeId'),expeType:r[i].get('expeType'),
							consId:r[i].get('consId'),consNo:r[i].get('consNo'),custId:r[i].get('custId'),custName:r[i].get('custName'),custSname:r[i].get('custSname'),
							consVessel:r[i].get('consVessel'),consVoyage:r[i].get('consVoyage'),consSailDate:r[i].get('consSailDate'),
							consMblNo:r[i].get('consMblNo'),consHblNo:r[i].get('consHblNo'),
							charName:r[i].get('charName'),charNameEn:r[i].get('charNameEn'),
							unitName:r[i].get('unitName'),expeCurrCode:r[i].get('currCode'),
							expeUnitPrice:r[i].get('expeUnitPrice'),expeNum:r[i].get('expeNum'),expeExRate:r[i].get('expeExRate'),
							expeCommission:r[i].get('expeCommission'),expeCommissionRate:r[i].get('expeCommissionRate'),
							expeTotalAmount:r[i].get('expeTotalAmount'),expeInvoiceAmount:r[i].get('expeInvoiceAmount'),
							expeRemarks:r[i].get('expeRemarks'),initInvoiceAmountOri:invoAmountOri,initInvoiceAmount:invoAmount,
							initInvoiceAmountOriW:'0',initInvoiceAmountW:'0',initCancelFlag:'0',
							initWriteOffStatus:'0',invoCurrCode:p.get('currCode'),
							initExRate:ex,invoExRate:p.get('invoExRate'),rowAction:'',version:'0'});
							store.insert(0,it);
							it.set('rowAction','N');
						}
					};
					this.reCalculate();					
				}
				win.close();
			}},this);
			win.addButton({text:C_CANCEL,handler : function(){win.close();}},this);
			win.show();
		}
		else{XMG.alert(SYS,M_SEL_SETTLE_OBJ);t.find('name','custName')[0].focus();}
	};
	this.removeInit=function(){
		var r = sm.getSelections();
		if(r){
			for(var i=0;i<r.length;i++){r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');store.remove(r[i]);}
			this.reCalculate();
		}
	};
	new Ext.KeyMap(Ext.getDoc(), {
		key:'ad',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('T_INVO_'+p.get('id'));
		 	if(tc&&tc==T_MAIN.getActiveTab())			 	{
		 		var ti=tc.getComponent('T_INV_T_'+p.get('id'));
		 		var te=ti.getComponent('T_INV_EN_'+p.get('id'));		 		
		 		if(te==ti.getActiveTab()){		 			
		 			var tb=this.getTopToolbar();
		 			switch(k) {
			 		case Ext.EventObject.A:
						if(!tb.getComponent('TB_A').disabled) this.add();break;
			 		case Ext.EventObject.D:
			 			if(!tb.getComponent('TB_B').disabled) this.removeInit();break;			 		
					}
		 		}
		 	}
		},stopEvent:true,scope:this});
	Fos.InvoItemGrid.superclass.constructor.call(this, {
	id:'G_INVO_I'+p.get('id'),border:true,autoScroll:true,clicksToEdit:1,header:false,height:270,stripeRows:true,
    store:store,sm:sm,cm:cm,listeners:{scope:this,afteredit:function(e){
    	var f=e.field;var r=e.record;
    	if(f=='initInvoiceAmountOri'){
			if(e.value>r.get('expeTotalAmount')-r.get('expeInvoiceAmount')){
				XMG.alert(SYS,M_INVO_OVER,function(){
					r.set('initInvoiceAmountOri',e.originalValue);
					e.grid.stopEditing();e.grid.startEditing(e.row,e.column);
				});
			}
			else{
				r.set('initInvoiceAmount',round2(e.value*r.get('initExRate')/p.get('invoExRate')));
				this.reCalculate();
			}
    	}
    	else if(f=='initInvoiceAmount'){
			var iv = round2(e.value*p.get('invoExRate')/r.get('initExRate'));
			if(iv>r.get('expeTotalAmount')-r.get('expeInvoiceAmount')){
				XMG.alert(SYS,M_INVO_OVER,function(){
				r.set('initInvoiceAmount',e.originalValue);
				e.grid.stopEditing();e.grid.startEditing(e.row,e.column);
				});				
			}
			else{r.set('initInvoiceAmountOri',iv);this.reCalculate();}
    	}
    	else if(f=='initExRate'){			
			r.set('initInvoiceAmount',round2(e.value*r.get('initInvoiceAmountOri')/p.get('invoExRate')));
			this.reCalculate();
    	}
    }},
    tbar:[{itemId:'TB_A',text:C_ADD+'(A)',iconCls:'add',disabled:p.get('invoStatus')!='0',scope:this,handler:this.add}, '-', 		
		{itemId:'TB_B',text:C_REMOVE+'(D)',iconCls:'remove',disabled:p.get('invoStatus')!='0',scope:this,handler:this.removeInit}]});
};    
Ext.extend(Fos.InvoItemGrid, Ext.grid.EditorGridPanel);
Fos.InvoEntryGrid = function(p,frm) {
	this.calculateSum = function(){
		var sumInv=0;
		var d=store.getRange();
		for(var i=0;i<d.length;i++){sumInv = sumInv + parseFloat(d[i].get('inenInvoiceAmount'));}			
		sumEn.setValue(round2(sumInv));			
		sumCap.setValue(getCURR(p.get('currCode'))+N2W(sumInv,2));
		sumCapEn.setValue(p.get('currCode')+' '+N2D(sumInv));
		p.set('invoAmountEntry',sumInv);
		p.set('invoAmountCapital',getCURR(p.get('currCode'))+N2W(sumInv,2));
		p.set('invoAmountCapitalEn',p.get('currCode')+' '+N2D(sumInv));
	};
	var store = GS('INEN_Q','SInvoiceEntry',SInvoiceEntry,'inenId','Desc','','','',false);
	if(p.get('rowAction')!='N') store.load({params:{invoId:p.get('invoId')}});
	var sumEn = new Ext.form.NumberField({value:p.get('invoAmount'),disabled:true,width:60});
	var sumCap = new Ext.form.TextField({value:p.get('invoAmountCapital'),width:250});
	var sumCapEn = new Ext.form.TextField({value:p.get('invoAmountCapitalEn'),width:400});	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,
		{header:C_CHAR,dataIndex:"charName",editor:new Ext.form.TextField({allowBlank:false,blankText:''})},
		{header:C_QUANTITY,dataIndex:"inenNum",editor:new Ext.form.NumberField({decimalPrecision:4})},
		{header:C_UNIT,hidden:true,dataIndex:"unitName",editor:new Ext.form.TextField()},		
		{header:C_UNIT_PRICE,dataIndex:"inenUnitPrice",align:'right',renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4})},
		{header:C_CURR_BASE,dataIndex:'currCode',width: 100,
			editor:new Ext.form.ComboBox({displayField:'currCode',valueField:'currCode',triggerAction: 'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getCURR_S()})},		
		{header:C_ORI_AMOUNT,dataIndex:"inenTotalAmount",align:'right',renderer:numRender,editor:new Ext.form.NumberField()},
		{header:C_EX_RATE,dataIndex:"inenExRate",renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4})},
		{header:C_INVO_AMOUNT,dataIndex:"inenInvoiceAmount",align:'right',renderer:numRender,editor:new Ext.form.NumberField({allowBlank:false,blankText:'',invalidText:''})},
		{header:C_ENAME,dataIndex:"charNameEn",editor:new Ext.form.TextField({allowBlank:false,blankText:''})}
		],defaults:{sortable:true,width:100}});
	this.add=function(){
		var e = new SInvoiceEntry({id:GGUID(),inenId:'0',charName:'',unitName:'',inenNum:'',inenUnitPrice:'',inenTotalPrice:'',
			inenTotalAmount:'',currCode:'',inenExRate:'',inenInvoiceAmount:'',version:'0',rowAction:'N'});
		this.stopEditing();store.insert(0,e);this.startEditing(0, 1);
	};
	this.removeInen=function(){FOS_REMOVE(sm,store);this.calculateSum();};
	this.merge=function(){
		var r = sm.getSelections();
		if(r.length>1){
			var c = r[0].get('currCode');var b = false;
			for(var i=0;i<r.length;i++){if(c!=r[i].get('currCode')){b=true;break;}};
			if(b){
				XMG.confirm(SYS,M_DIFF_CURR,function(btn){
    				if(btn=='yes'){
    					for(var i=1;i<r.length;i++){
							r[0].set('currCode',p.get('currCode'));
							r[0].set('inenExRate',1);
							r[0].set('inenNum',1);
							r[0].set('inenInvoiceAmount',round2(r[0].get('inenInvoiceAmount'))+round2(r[i].get('inenInvoiceAmount')));
							r[0].set('inenTotalAmount',r[0].get('inenInvoiceAmount'));
							r[0].set('inenUnitPrice',r[0].get('inenInvoiceAmount'));								
							r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');
							store.remove(r[i]);
						}
    				}
    			});
			}
			else{
				for(var i=1;i<r.length;i++){
					r[0].set('inenNum',1);
					r[0].set('inenInvoiceAmount',round2(r[0].get('inenInvoiceAmount'))+round2(r[i].get('inenInvoiceAmount')));
					r[0].set('inenTotalAmount',r[0].get('inenInvoiceAmount'));
					r[0].set('inenUnitPrice',r[0].get('inenInvoiceAmount'));
					r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');
					store.remove(r[i]);
				}
			}
		}
	};
	this.refresh=function(){
		var a=store.getRange();
		for(var i=0;i<a.length;i++){a[i].set('rowAction',a[i].get('rowAction')=='N'?'D':'R');store.remove(a[i]);};
		var g=frm.findById('G_INVO_I'+p.get('id'));
		var total = 0;
		var s = g.getStore();
		var d=s.getRange();
		for(var i=0;i<d.length;i++){
			var e = new SInvoiceEntry({id:GGUID(),inenId:'0',invoId:d[i].get('invoId'),
				charName:d[i].get('charName'),charNameEn:d[i].get('charNameEn'),
				unitName:d[i].get('unitName'),
			inenNum:d[i].get('expeNum'),inenUnitPrice:d[i].get('expeUnitPrice'),
			currCode:d[i].get('expeCurrCode'),
			inenExRate:d[i].get('initExRate'),
			expeCommission:d[i].get('expeCommission'),
			expeCommissionRate:d[i].get('expeCommissionRate'),
			inenTotalAmount:d[i].get('expeTotalAmount'),
			inenInvoiceAmount:d[i].get('initInvoiceAmount'),version:'0',rowAction:''});
			store.insert(0,e);e.set('rowAction','N');
			total = total + round2(d[i].get('initInvoiceAmount'));
		}
		sumEn.setValue(total); 
		sumCap.setValue(getCURR(p.get('currCode'))+N2W(total,2));
		sumCapEn.setValue(p.get('currCode')+' '+N2D(total));
		p.set('invoAmountEntry',total);
		p.set('invoAmountCapital',getCURR(p.get('currCode'))+N2W(total,2));
		p.set('invoAmountCapitalEn',p.get('currCode')+' '+N2D(total));
	};
	new Ext.KeyMap(Ext.getDoc(), {
		key:'adbx',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('T_INVO_'+p.get('id'));
		 	if(tc&&tc==T_MAIN.getActiveTab())			 	{
		 		var ti=tc.getComponent('T_INV_T_'+p.get('id'));
		 		var tl=ti.getComponent('T_INV_LI_'+p.get('id'));
		 		if(tl==ti.getActiveTab()){		 			
		 			var tb=this.getTopToolbar();
		 			switch(k) {
			 		case Ext.EventObject.A:
						if(!tb.getComponent('TB_A').disabled) this.add();break;
			 		case Ext.EventObject.D:
			 			if(!tb.getComponent('TB_B').disabled) this.removeInen();break;
			 		case Ext.EventObject.B:
			 			if(!tb.getComponent('TB_C').disabled) this.merge();break;
			 		case Ext.EventObject.X:
			 			if(!tb.getComponent('TB_D').disabled) this.refresh();break;
					}
		 		}
		 	}
		},stopEvent:true,scope:this});
	Fos.InvoEntryGrid.superclass.constructor.call(this, {
	id:'G_INVO_E'+p.get('id'),border:true,autoScroll:true,clicksToEdit:1,header:false,height:270,stripeRows:true,
    store: store,sm:sm,cm:cm,
    listeners:{scope:this,afteredit:function(e){
    	var f=e.field;var r=e.record;
    	if(f=='inenNum'){
			r.set('inenTotalAmount',e.value*r.get('inenUnitPrice'));
			r.set('inenInvoiceAmount',r.get('inenTotalAmount')*r.get('inenExRate'));
			this.calculateSum();
    	}
		else if(f=='inenUnitPrice'){
			r.set('inenTotalAmount',e.value*r.get('inenNum'));
			r.set('inenInvoiceAmount',r.get('inenTotalAmount')*r.get('inenExRate'));
			this.calculateSum();
		}
		else if(f=='currCode'){
			r.set('inenExRate',getExRate(e.value,p.get('currCode')));
			r.set('inenInvoiceAmount',r.get('inenTotalAmount')*r.get('inenExRate'));
			this.calculateSum();
		}
		else if(f=='inenInvoiceAmount'){
			this.calculateSum();
		}
    }},
    bbar:[{xtype:'tbtext',text:C_TOTAL_AMOUNT_C},'-',sumEn,'-',{xtype:'tbtext',text:C_CAP_AMOUNT_C},'-',sumCap,'-',{xtype:'tbtext',text:C_CAP_AMOUNT_E},'-',sumCapEn],
    tbar:[{itemId:'TB_A',text:C_ADD+'(A)',iconCls:'add',disabled:p.get('invoStatus')!='0',scope:this,handler:this.add}, '-',
		{itemId:'TB_B',text:C_REMOVE+'(D)',iconCls:'remove',disabled:p.get('invoStatus')!='0',scope:this,handler:this.removeInen},
		{itemId:'TB_C',text:C_MERGE+'(B)',iconCls:'save',disabled:p.get('invoStatus')!='0',scope:this,handler:this.merge},
		{itemId:'TB_D',text:C_REFRESH+'(X)',iconCls:'refresh',disabled:p.get('invoStatus')!='0',scope:this,handler:this.refresh}]});
};    
Ext.extend(Fos.InvoEntryGrid, Ext.grid.EditorGridPanel);
Fos.InvoiceTab = function(p,billNo) {
    this.itemGrid = new Fos.InvoItemGrid(p,this,billNo);
    this.entryGrid = new Fos.InvoEntryGrid(p,this);
    this.editTax=function(){
    	var tn=this.find('name','invoTaxNo')[0];
    	tn.enable();
    	tn.focus();
    };
    this.save=function(){
    	if(p.get('invoType')=='R' && this.find('name','invoTitle')[0].getValue()==''){
			XMG.alert(SYS,M_INVO_TITLE_REQIRED);this.find('name','invoTitle')[0].focus();return;};		
		p.beginEdit();this.getForm().updateRecord(p);p.endEdit();
		/*
		if(p.get('invoAmount')<p.get('invoAmountEntry')){
			XMG.alert(SYS,M_INVO_ENTRY_OVER);return;};		
   	 	*/
   	 	var xml = RTX(p,'SInvoice',SInvoice);
   	 	var a = this.itemGrid.getStore().getModifiedRecords();
		if(a.length>0){var x = ATX(a,'SInvoiceItem',SInvoiceItem);xml=xml+x;};
		if(p.get('invoType')=='R'){
			var e = this.entryGrid.getStore().getModifiedRecords();
			if(e.length>0){var x = ATX(e,'SInvoiceEntry',SInvoiceEntry);xml=xml+x;};
		}
		var tb=this.getTopToolbar();
		tb.getComponent('TB_A').setDisabled(true);
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'INVO_S'},
			success: function(res){
				var c = XTR(res.responseXML,'SInvoice',SInvoice);
				var ra=p.get('rowAction');
				var f = SInvoice.prototype.fields;
				p.beginEdit();
   				for (var i = 0; i < f.keys.length; i++) {var fn = ''+f.keys[i];p.set(fn,c.get(fn));};   								
				this.find('name','invoNo')[0].setValue(p.get('invoNo'));
				this.find('name','invoTaxNo')[0].setValue(p.get('invoTaxNo'));
				this.find('name','invoConsNo')[0].setValue(p.get('invoConsNo'));
				if(ra=='N'){
					this.setTitle((p.get('invoType')=='R'?C_AR:C_AP)+C_INVO+'-'+p.get("invoNo"));
					p.set('rowAction','M');
				}
				p.endEdit();
				var sa = this.itemGrid.getStore();
				var a = XTRA(res.responseXML,'SInvoiceItem',SInvoiceItem);FOSU(sa,a,SInvoiceItem);
				if(p.get('invoType')=='R'){
					var sc = this.entryGrid.getStore();
					var b = XTRA(res.responseXML,'SInvoiceEntry',SInvoiceEntry);FOSU(sc,b,SInvoiceEntry);
				}
				this.updateToolBar();				
				XMG.alert(SYS,M_S);
				tb.getComponent('TB_A').setDisabled(false);
			},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);tb.getComponent('TB_A').setDisabled(false);},
			xmlData:FOSX(xml)
		});
    };
    this.removeInvo=function(){
    	p.set('rowAction','R');
		var xml = RTX(p,'SInvoice',SInvoice);   	 	
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'INVO_S'},
			success: function(r){
				XMG.alert(SYS,M_S,function(){T_MAIN.remove('T_INVO_'+p.get('id'));});
			},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
			xmlData:FOSX(xml)
		});
    };
    this.addInvoice=function(){
    	var currCode='CNY';var w=new Fos.CurrencyWin();
		w.addButton({text:C_OK,scope:this,handler:function(){
			currCode = w.findById('currCode').getValue();
			w.close();var id=GGUID();
			var e = new SInvoice({invoId:id,id:id,invoNo:'N'+id,currCode:currCode,invoDueDate:p.get('invoDueDate'),invoTitle:p.get('invoTitle'),
				invoType:p.get('invoType'),custId:p.get('custId'),custName:p.get('custName'),custSname:p.get('custSname'),
				invoDate:new Date(),invoExRate:getExRate(currCode,'CNY'),invoWriteOffStatus:'0',
				invoPrFlag:'0',invoUploadFlag:'0',invoStatus:'0',version:'0',rowAction:'N'});
			var tab = T_MAIN.add(new Fos.InvoiceTab(e));
			T_MAIN.setActiveTab(tab);
		}},this);
		w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);w.show();
    };
    this.updateStatus=function(a,s){
    	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:a,invoId:p.get('invoId'),invoStatus:s},
			success: function(r){p.set('invoStatus',s);this.updateToolBar();XMG.alert(SYS,M_S);},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);}
		});	
    };    
    this.check=function(){this.updateStatus('INVO_U','1');};
    this.renew=function(){this.updateStatus('INVO_U','0');};
    this.cancel=function(){this.updateStatus('INVO_C','2');};
	this.updateToolBar = function(){
		var tb=this.getTopToolbar();
		tb.getComponent('TB_A').setDisabled(NR(M1_S+(p.get('invoType')=='R'?S_INVO_R:S_INVO_P)+F_M)||p.get('invoStatus')!='0'||p.get('invoWriteOffStatus')!='0');
    	tb.getComponent('TB_B').setDisabled(NR(M1_S+(p.get('invoType')=='R'?S_INVO_R:S_INVO_P)+F_R)||p.get('invoStatus')!='0'||p.get('invoWriteOffStatus')!='0'||p.get('rowAction')=='N');
    	tb.getComponent('TB_C').setDisabled(NR(M1_S+(p.get('invoType')=='R'?S_INVO_R:S_INVO_P)+F_A)||p.get('invoStatus')!='0'||p.get('invoWriteOffStatus')!='0'||p.get('rowAction')=='N');
    	tb.getComponent('TB_D').setDisabled(NR(M1_S+(p.get('invoType')=='R'?S_INVO_R:S_INVO_P)+F_A)||p.get('invoStatus')!='1'||p.get('invoWriteOffStatus')!='0');
    	tb.getComponent('TB_E').setDisabled(NR(M1_S+(p.get('invoType')=='R'?S_INVO_R:S_INVO_P)+F_F)||p.get('invoStatus')!='1'||p.get('invoWriteOffStatus')!='0');
    	if(p.get('invoType')=='R') 
    		tb.getComponent('TB_F').setDisabled(NR(M1_S+(p.get('invoType')=='R'?S_INVO_R:S_INVO_P)+F_IM)||p.get('invoStatus')!='0'||p.get('invoWriteOffStatus')!='0'||p.get('rowAction')=='N');
    	tb.getComponent('TB_M').setText(C_STATUS_C+getIVST(p.get('invoStatus'))+'/'+getWRST(p.get('invoWriteOffStatus')));
    	tb.getComponent('TB_H').setDisabled(NR(M1_S+(p.get('invoType')=='R'?S_VOUC_R:S_VOUC_P)+F_M)||p.get('invoStatus')!='1'||p.get('invoWriteOffStatus')!='0'||p.get('rowAction')=='N');
    };
    this.expInvo=function(){EXPC('INVO','&invoId='+p.get('invoId'));};
    this.genVoucher=function(){
		var rid=GGUID();
		var e = new SVoucher({id:rid,voucId:rid,voucNo:'N'+rid,currCode:p.get('currCode'),
			voucType:p.get('invoType'),voucDate:new Date(),voucExRate:getExRate(p.get('currCode'),'CNY'),
			custId:p.get('custId'),custName:p.get('custName'),custSname:p.get('custSname'),
			voucAmount:p.get('invoAmount'),voucWriteOffAmount:p.get('invoAmount'),voucFixAmount:0,
			voucUploadFlag:'0',voucStatus:'0',voucWriteOffStatus:'0',version:'0',rowAction:'N'});
			var t = T_MAIN.add(new Fos.VoucherTab(e,'',p.get('invoId')));
			T_MAIN.setActiveTab(t);
	};	
    new Ext.KeyMap(Ext.getDoc(), {
		key:'srcufmea',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('T_INVO_'+p.get('id'));
		 	if(tc){
			 	if(tc==T_MAIN.getActiveTab())
			 	{
			 		var tb=this.getTopToolbar();
			 		switch(k) {
			 		case Ext.EventObject.S:
						if(!tb.getComponent('TB_A').disabled) this.save();break;
			 		case Ext.EventObject.R:
			 			if(!tb.getComponent('TB_B').disabled) this.removeInvo();break;
			 		case Ext.EventObject.C:
			 			if(!tb.getComponent('TB_C').disabled) this.check();break;	 		
			 		case Ext.EventObject.U:
			 			if(!tb.getComponent('TB_D').disabled) this.renew();break;
					case Ext.EventObject.F:
						if(!tb.getComponent('TB_E').disabled) this.cancel();break;
					case Ext.EventObject.M:
						if(!tb.getComponent('TB_F').disabled) this.editTax();break;
					case Ext.EventObject.E:
						if(!p.get('invoWriteOffStatus')==1) this.expInvo();break;
					case Ext.EventObject.N:
						if(!tb.getComponent.get('TB_G').disabled) this.addInvoice();break;
					}
			 	}
		 	}
		},stopEvent:true,scope:this});
    
    
    var b1={itemId:'TB_A',text:C_SAVE+'(S)',iconCls:'save',disabled:NR(M1_S+(p.get('invoType')=='R'?S_INVO_R:S_INVO_P)+F_M)||p.get('invoStatus')!='0'||p.get('invoWriteOffStatus')!='0',scope:this,handler:this.save};
    var b2={itemId:'TB_B',text:C_REMOVE+'(R)',iconCls:'remove',disabled:NR(M1_S+(p.get('invoType')=='R'?S_INVO_R:S_INVO_P)+F_R)||p.get('invoStatus')!='0'||p.get('invoWriteOffStatus')!='0'||p.get('rowAction')=='N',scope:this,handler:this.removeInvo};
    var b3={itemId:'TB_C',text:C_AUDIT+'(C)',iconCls:'check',disabled:NR(M1_S+(p.get('invoType')=='R'?S_INVO_R:S_INVO_P)+F_A)||p.get('invoStatus')!='0'||p.get('rowAction')=='N',scope:this,handler:this.check};
    var b4={itemId:'TB_D',text:C_CANCEL_AUDIT+'(U)',iconCls:'renew',disabled:NR(M1_S+(p.get('invoType')=='R'?S_INVO_R:S_INVO_P)+F_A)||p.get('invoStatus')!='1',scope:this,handler:this.renew};
    var b5={itemId:'TB_E',text:C_INVALID+'(F)',iconCls:'cancel',disabled:NR(M1_S+(p.get('invoType')=='R'?S_INVO_R:S_INVO_P)+F_F)||p.get('invoStatus')!='1'||p.get('invoWriteOffStatus')!='0',scope:this,handler:this.cancel};
    var b6={itemId:'TB_F',text:C_MODIFY_INVO_NO+'(M)',iconCls:'option',disabled:NR(M1_S+(p.get('invoType')=='R'?S_INVO_R:S_INVO_P)+F_IM)||p.get('invoStatus')!='0'||p.get('invoWriteOffStatus')!='0'||p.get('rowAction')=='N',scope:this,handler:this.editTax};
    var b7={text:C_EXPORT+'(E)',iconCls:'print',disabled:p.get('invoWriteOffStatus')!='0',scope:this,menu: {items: [{text:C_INVO_TAX,scope:this,handler:this.expInvo}]}};
	var b8={itemId:'TB_M',disabled:true,text:C_STATUS_C+getIVST(p.get('invoStatus'))+'/'+getWRST(p.get('invoWriteOffStatus'))};
	var b9={itemId:'TB_G',text:C_ADD+'(N)',iconCls:'add',scope:this,handler:this.addInvoice};
	 var b10={itemId:'TB_H',text:p.get('invoType')=='R'?C_WRITEOFF_R:C_WRITEOFF_P,iconCls:'save',			 
			 disabled:NR(M1_S+(p.get('invoType')=='R'?S_VOUC_R:S_VOUC_P)+F_M)||p.get('invoStatus')!='1'||p.get('invoWriteOffStatus')!='0'||p.get('rowAction')=='N',
			 scope:this,handler:this.genVoucher};
	 
	var c1={fieldLabel:HL(C_SETTLE_OBJECT),tabIndex:1,name:'custName',value:p.get('custName'),
			store:getCS(),enableKeyEvents:true,
    		allowBlank:false,xtype:'combo',displayField:'custCode',valueField:'custCode',
    		typeAhead:true,triggerAction:'all',selectOnFocus:true,anchor:'95%',
   		 mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,listeners:{scope:this,
   		 select:function(c,r,i){
			if(p.get('invoType')=='R'){
				var invTitle=r.get('custInvoiceHeader');
				if(!invTitle) invTitle=r.get('custNameCn');				
				this.find('name','invoTitle')[0].setValue(invTitle);
				var dd=r.get('custCreditDay');
				if(!dd) dd=getCFG('CUSTOMER_DEFAULT_CRDIT_DAYS');
				this.find('name','invoDueDate')[0].setValue(new Date().add(Date.DAY,parseInt(dd)));
			}
			else{
				p.set('invoTitle',r.get('custNameCn'));				
			}
			p.set('custId',r.get('custId'));
			p.set('custSname',r.get('custCode'));
			p.set('custName',r.get('custNameCn'));
			c.setValue(r.get('custNameCn'));
		},
		keydown:{fn:function(f,e){
			LC(f,e,p.get('invoType')=='R'?'custArFlag':'custApFlag');
			},buffer:500}}
	};
	var c2={fieldLabel:HL(C_INVO_TITLE),tabIndex:2,name:'invoTitle',allowBlank:false,value:p.get('invoTitle'),xtype:'textfield',anchor:'95%'};
	var c3={fieldLabel:C_INVO_NO,tabIndex:3,name:'invoNo',disabled:true,value:p.get('invoNo'),xtype:'textfield',anchor:'90%'};
	var c4={fieldLabel:C_CURR,tabIndex:4,name:'currCode',allowBlank:false,value:p.get('currCode'),disabled:true,xtype:'textfield',anchor:'90%'};
	var c5={fieldLabel:C_BANK,tabIndex:5,name:'invoBank',value:p.get('invoBank'),store:getCOBA_S(),xtype:'combo',displayField:'cobaBank',valueField:'cobaBank',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%',
        	listeners:{scope:this,select:function(c,r,i){
		this.find('name','invoAccount')[0].setValue(r.get('cobaAccount'));},
		render:function(cbx){
			cbx.store.filterBy(function(rec,id){return rec.get('currCode')==p.get('currCode');});}}};
	var c6={fieldLabel:HL(C_INVO_DATE),tabIndex:6,name:'invoDate',value:p.get('invoDate'),xtype:'datefield',format:DATEF,anchor:'95%'};
	var c7={fieldLabel:C_EX_RATE,tabIndex:7,name:'invoExRate',value:p.get('invoExRate'),disabled:p.get('currCode')=='CNY',xtype:'numberfield',decimalPrecision:4,anchor:'90%',
            listeners:{scope:this,change:function(f,nv,ov){
			var a = this.itemGrid.getStore().getRange();
			if(a.length>0){
				for(var i=0;i<a.length;i++) if(a[i].get('currCode')==p.get('currCode')){a[i].set('initExRate',nv);}
		}}}};
	var c8={fieldLabel:C_BANK_ACCOUNT,tabIndex:8,name:'invoAccount',value:p.get('invoAccount'),xtype:'textfield',anchor:'90%'};
	var c9={fieldLabel:C_TAX_NO,disabled:p.get('invoType')=='R'?true:false,tabIndex:9,name:'invoTaxNo',value:p.get('invoTaxNo'),xtype:'textfield',anchor:'90%'};
	var c10={fieldLabel:C_INVO_AMOUNT,tabIndex:10,name:'invoAmount',value:p.get('invoAmount'),disabled:true,xtype:'textfield',anchor:'90%'};
	var c11={fieldLabel:C_DUE_DATE,tabIndex:11,name:'invoDueDate',value:p.get('invoDueDate'),xtype:'datefield',format:DATEF,anchor:'90%'};
	var c12={fieldLabel:C_WRITEOFFED_AMOUNT,tabIndex:12,name:'invoAmountWriteOff',value:p.get('invoAmountWriteOff'),disabled:true,xtype:'textfield',anchor:'90%'};
	var c13={fieldLabel:C_REMARKS,tabIndex:13,name:'invoRemarks',value:p.get('invoRemarks'),xtype:'textarea',anchor:'90%'};
	var c14={fieldLabel:C_CONS_NO,tabIndex:14,name:'invoConsNo',value:p.get('invoConsNo'),xtype:'textfield',anchor:'90%'};
	var c15={fieldLabel:C_DEBIT_NOTE,tabIndex:15,name:'invoDebitnoteFlag',checked:p.get('invoDebitnoteFlag')=='1',xtype:'checkbox',anchor:'90%'};
	
	new Ext.KeyMap(Ext.getDoc(), {
		key:'el',alt:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('T_INVO_'+p.get('id'));
		 	var tb=tc.getComponent('T_INV_T_'+p.get('id'));
		 	if(tc==T_MAIN.getActiveTab())
		 	{
		 	switch(k) {
				case Ext.EventObject.E:
					var t=tb.getComponent('T_INV_EN_'+p.get('id'));if(t) tb.setActiveTab(t);break;
				case Ext.EventObject.L:
					var t=tb.getComponent('T_INV_LI_'+p.get('id'));if(t) tb.setActiveTab(t);break;							
			}}
		},
		stopEvent: true
	});
	Fos.InvoiceTab.superclass.constructor.call(this, { 
	id: 'T_INVO_'+p.get('id'),title:(p.get('invoType')=='R'?C_AR:C_AP)+C_INVO+'-'+p.get('invoNo'),layout:'border',
	autoScroll:true,labelAlign:'right',closable:true,labelWidth:70,bodyStyle:'padding:0px 0px 20px 0px',border:false,width:800,
	tbar:p.get('invoType')=='R'?[b1,'-',b2,'-',b3,'-',b4,'-',b5,'-',b6,'-',b7,'-',b9,'-',b10,'->','-',b8,'-']:
								[b1,'-',b2,'-',b3,'-',b4,'-',b5,'-',b9,'-',b10,'->','-',b8,'-'],
	bbar:[{xtype:'tbtext',text:C_CREATE_BY_C+getUSER(p.get('createBy'))},'-',
			{xtype:'tbtext',text:C_CREATE_TIME_C+formatDateTime(p.get('createTime'))},'-',
			{xtype:'tbtext',text:C_MODIFY_BY_C+getUSER(p.get('modifyBy'))},'-',
			{xtype:'tbtext',text:C_MODIFY_TIME_C+formatDateTime(p.get('modifyTime'))},'-',
			{xtype:'tbtext',text:C_AUDIT_BY_C+getUSER(p.get('invoChecker'))},'-',
			{xtype:'tbtext',text:C_AUDIT_TIME_C+formatDate(p.get('invoCheckDate'))}],
	items: [{region:'north',layout:'column',height:200,layoutConfig:{columns:4},bodyStyle:'padding:5px 0px 0px 0px',title:'头信息',collapsible:true,
    	items:p.get('invoType')=='R'?[    		
    		{columnWidth:.5,layout:'form',border:false,items:[c1]},
        	{columnWidth:.5,layout:'form',border:false,items:[c2]},
        	{columnWidth:.25,layout:'form',border:false,items:[c3,c4,c5]},
            {columnWidth:.25,layout:'form',border:false,items: [c6,c7,c8]},
            {columnWidth:.25,layout: 'form',border : false,items: [c9,c10,c14]},
            {columnWidth:.25,layout: 'form',border : false,items: [c11,c12,c15]},
            {columnWidth:.99,layout:'form',border:false,items:[c13]}
            ]:[
            {columnWidth:.5,layout:'form',border:false,items:[c1]},
			{columnWidth:.25,layout:'form',border:false,items:[c3]},
			{columnWidth:.25,layout:'form',border:false,items:[c9]},				
            {columnWidth:.25,layout:'form',border:false,items:[c4,c5]},
            {columnWidth:.25,layout:'form',border:false,items: [c7,c8]},
            {columnWidth:.25,layout: 'form',border:false,items: [c10,c14]},
            {columnWidth:.25,layout: 'form',border : false,items: [c12,c15]},
            {columnWidth:.99,layout:'form',border:false,items:[c13]}
        ]},
		{id:'T_INV_T_'+p.get('id'),xtype:'tabpanel',plain:true,region:'center',activeTab:0,
            items:p.get('invoType')=='R'?[{id:'T_INV_EN_'+p.get('id'),layout:'fit',title:C_EXPE_LINE+'(E)',items:[this.itemGrid]},
            {id:'T_INV_LI_'+p.get('id'),layout:'fit',title:C_INVO_LINE+'(L)',items:[this.entryGrid]}]:[{layout:'fit',title:C_EXPE_LINE,items:[this.itemGrid]}]}
        ]
	});
};
Ext.extend(Fos.InvoiceTab, Ext.FormPanel);
    
Fos.VoucherGrid = function(t){
	var store = GS('VOUC_X','SVoucher',SVoucher,'voucDate','DESC','voucDate','S_VOUC','id',true);
	var a=[];a[0]={key:'voucType',value:t,op:1};
	var bp={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
	store.baseParams=bp;
    store.load({params:{start:0,limit:C_PS}});
    this.reset=function(){
    	store.baseParams=bp;
    	store.reload({params:{start:0,limit:C_PS}});
    };
	var showVoucher= function(p){
		var tab = T_MAIN.getComponent("T_VOUC_"+p.get("id"));
		if(tab) {T_MAIN.setActiveTab(t);}
		else {tab = T_MAIN.add(new Fos.VoucherTab(p));
		T_MAIN.setActiveTab(tab);tab.doLayout();}
	};
	this.add = function(){
		var currCode='CNY';var w=new Fos.CurrencyWin();
		w.addButton({text:C_OK,handler:function(){
			currCode = w.findById('currCode').getValue();
			w.close();var id =GGUID();			
			var e = new SVoucher({voucId:id,id:id,voucNo:'N'+id,currCode:currCode,
			voucType:t,voucDate:new Date(),voucExRate:getExRate(currCode,'CNY'),voucFixAmount:0,
			voucUploadFlag:'0',voucStatus:'0',voucWriteOffStatus:'0',version:'0',rowAction:'N'});
			var tab = T_MAIN.add(new Fos.VoucherTab(e));
			T_MAIN.setActiveTab(tab);
		}},this);
		w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);w.show();
	};
	this.edit = function(){var p=sm.getSelected();if(p){showVoucher(p);}else XMG.alert(SYS,M_NO_DATA_SELECTED);};
	this.removeVouc = function(){
		var a =sm.getSelections();
       	if(a.length>0) {XMG.confirm(SYS,M_R_C,function(btn){
           	if(btn=='yes'){var b = false;
               	for(var i=0;i<a.length;i++){if(a[i].get('voucStatus')!='0') b=true;}
               	if(b) XMG.alert(SYS,M_WRITEOFF_REMOVE_DENY);
               	else {
               		var xml =SMTX4R(sm,'SVoucher','voucId');
               		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'VOUC_S'},
					success: function(){sm.each(function(p){store.remove(p);});XMG.alert(SYS,M_S);},
					failure: function(r,o){XMG.alert(SYS,M_F+r.responseText);},
					xmlData:FOSX(xml)});
               	}
           }});}
       else XMG.alert(SYS,M_R_P);
    };
	this.search = function(){
    	var win = new Fos.VoucLookupWin(t);
		win.addButton({text:C_OK,handler:function(){
        	var tab = Fos.VoucLookupWin.superclass.findById.call(win,'T_VOUC_LOOK');
        	var at = tab.getActiveTab();
        	var a=[];var op=1;a[0]={key:'voucType',value:t,op:1};
        	if(at.getId()=='T_VOUC_LOOK_1'){
        		var voucNo=at.find('name','voucNo')[0].getValue();
        		var voucNoM=at.find('name','voucNoM')[0].getValue();
        		var c=voucNo.indexOf(',');
        		var b=voucNo.indexOf('..');
        		if(c>=0){a[1]={key:'voucNo',value:voucNo,op:IN};}
        		else if(b>=0){
        			var ra=voucNo.split('..');
        			a[1]={key:'voucNo',value:ra[0],op:GE};
        			a[2]={key:'voucNo',value:ra[1],op:LE};
        		}
        		else if(voucNoM){a[1]={key:'voucNo',value:voucNo,op:LI};}
        	}
        	else if(at.getId()=='T_VOUC_LOOK_2'){
        		var invoNo=at.find('name','invoNo')[0].getValue();
        		var invoNoM=at.find('name','invoNoM')[0].getValue();
        		var c=invoNo.indexOf(',');
        		var b=invoNo.indexOf('..');
        		if(c>=0){a[1]={key:'invoNo',value:invoNo,op:IN};}
        		else if(b>=0){
        			var ra=invoNo.split('..');
        			a[1]={key:'invoNo',value:ra[0],op:GE};
        			a[2]={key:'invoNo',value:ra[1],op:LE};
        		}
        		else if(invoNoM){a[1]={key:'invoNo',value:invoNo,op:LI};}
        	}
        	else if(at.getId()=='T_VOUC_LOOK_3'){
        		var invoTaxNo=at.find('name','invoTaxNo')[0].getValue();
        		var invoTaxNoM=at.find('name','invoTaxNoM')[0].getValue();
        		var c=invoTaxNo.indexOf(',');
        		var b=invoTaxNo.indexOf('..');
        		if(c>=0){a[1]={key:'invoTaxNo',value:invoTaxNo,op:IN};}
        		else if(b>=0){
        			var ra=invoTaxNo.split('..');
        			a[1]={key:'invoTaxNo',value:ra[0],op:GE};
        			a[2]={key:'invoTaxNo',value:ra[1],op:LE};
        		}
        		else if(invoTaxNoM){a[1]={key:'invoTaxNo',value:invoTaxNo,op:LI};}
        	}
        	else if(at.getId()=='T_VOUC_LOOK_4'){
        		var custId=at.find('name','custId')[0].getValue();
        		if(custId) a[a.length]={key:'custId',value:custId,op:op};
        		var currCode=at.find('name','currCode')[0].getValue();        		
        		if(currCode) a[a.length]={key:'currCode',value:currCode,op:op};
        		var voucStatus=at.find('name','voucStatus')[0].getValue();        		
        		if(voucStatus) a[a.length]={key:'voucStatus',value:voucStatus,op:op};
        		var voucCheckNo=at.find('name','voucCheckNo')[0].getValue();        		
        		if(voucCheckNo) a[a.length]={key:'voucCheckNo',value:voucCheckNo,op:op};
        		var voucBankReciptNo=at.find('name','voucBankReciptNo')[0].getValue();
        		if(voucBankReciptNo) a[a.length]={key:'voucBankReciptNo',value:voucCheckNo,op:op};
        		var voucWriteOffNo=at.find('name','voucWriteOffNo')[0].getValue();
        		if(voucWriteOffNo) a[a.length]={key:'voucWriteOffNo',value:voucWriteOffNo,op:op};
        		var voucDate=at.find('name','voucDate')[0].getValue();
        		var voucDate2=at.find('name','voucDate2')[0].getValue();
        		if(voucDate && voucDate2){
        			a[a.length]={key:'voucDate',value:voucDate.format('Y-m-d H:i:s'),op:5};
        			a[a.length]={key:'voucDate',value:voucDate2.format('Y-m-d H:i:s'),op:3};
        		}
        		else if(voucDate) a[a.length]={key:'voucDate',value:voucDate,op:op};        		
        		var voucAmount=at.find('name','voucAmount')[0].getValue();
        		var voucAmount2=at.find('name','voucAmount2')[0].getValue();
        		if(voucAmount && voucAmount2){
        			a[a.length]={key:'voucAmount',value:voucAmount,op:5};
        			a[a.length]={key:'voucAmount',value:voucAmount2,op:3};
        		}
        		else if(voucAmount) a[a.length]={key:'voucAmount',value:voucAmount,op:op};
        		var voucWriteOffAmount=at.find('name','voucWriteOffAmount')[0].getValue();
        		var voucWriteOffAmount2=at.find('name','voucWriteOffAmount2')[0].getValue();
        		if(voucWriteOffAmount && voucWriteOffAmount2){
        			a[a.length]={key:'voucWriteOffAmount',value:voucWriteOffAmount,op:5};
        			a[a.length]={key:'voucWriteOffAmount',value:voucWriteOffAmount2,op:3};
        		}
        		else if(voucWriteOffAmount) a[a.length]={key:'voucWriteOffAmount',value:voucWriteOffAmount,op:op};
        	}
        	store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
     		store.reload({params:{start:0,limit:C_PS},callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});win.close();
		}},this);
		win.addButton({text:C_CANCEL,handler:function(){win.close();}},this);
		win.show();
    };  	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm=new Ext.grid.ColumnModel({columns:[
		new Ext.grid.RowNumberer(),sm,
		{header:C_STATUS,width:60,dataIndex:"voucStatus",renderer:getVOST},
		{header:C_WRITEOFF_STATUS,width:60,dataIndex:"voucWriteOffStatus",renderer:getWRST},
		{header:t=='R'?C_VOUC_NO_R:C_VOUC_NO_P,width:100,dataIndex:"voucNo"},		
		{header:C_SETTLE_OBJECT,width:180,dataIndex:"custName"},		
		{header:C_AMOUNT,width:80,align:'right',renderer:numRender,dataIndex:"voucAmount"},
		{header:C_WRITEOFFED_AMOUNT,width:80,align:'right',renderer:numRender,dataIndex:"voucWriteOffAmount"},
		{header:C_CURR,width:60,dataIndex:"currCode"},
		{header:C_DATE,width:80,dataIndex:"voucDate",renderer:formatDate},
		{header:C_WRITEOFF_NO,width:100,dataIndex:"voucWriteOffNo"},
		{header:C_BANK,width:120,dataIndex:"voucBank"},	
		{header:C_BANK_ACCOUNT,width:120,align:'right',dataIndex:"vocuAccount"},
		{header:C_SEWA,width:80,dataIndex:"voucPaymentType",renderer:getSEWA},		
		{header:C_FIX_AMOUNT,width:80,align:'right',renderer:numRender,dataIndex:"voucFixAmount"},		
		{header:C_BILL_BY,dataIndex:"createBy",renderer:getUSER},
		{header:C_BILL_DATE,dataIndex:"CreateTime",renderer:formatDate},
		{header:C_AUDIT_BY,dataIndex:"voucChecker",renderer:getUSER},
		{header:C_AUDIT_TIME,dataIndex:"voucCheckDate",renderer:formatDate},		
		{header:C_INVO_NO,dataIndex:"voucInvoiceNo"},
		{header:C_TAX_NO,dataIndex:"voucTaxInvoiceNo"},
		{header:C_REMARKS,dataIndex:"voucRemarks"}
		],defaults:{sortable:true,width:80}});
	var rowCtxEvents={rowdblclick:function(grid, rowIndex, event){var c= grid.getSelectionModel().getSelected();if(c){showVoucher(c);}}};
	var kw = new Ext.form.TextField({listeners:{scope:this,specialkey:function(c,e){if(e.getKey()==Ext.EventObject.ENTER) this.fastSearch();}}});
    this.fastSearch=function(){
         var voucNo=kw.getValue();
        if(!voucNo){XMG.alert(SYS,t=='R'?M_INPUT_VOUC_R_NO:M_INPUT_VOUC_P_NO,function(b){kw.focus();});return;};
        var a=[];        
        var c=voucNo.indexOf(',');
        var b=voucNo.indexOf('..');
        if(c>=0){
            a[a.length]={key:'voucNo',value:voucNo,op:IN};
        }
        else if(b>=0){
            var ra=voucNo.split('..');
            a[a.length]={key:'voucNo',value:ra[0],op:GE};
            a[a.length]={key:'voucNo',value:ra[1],op:LE};
        }
        a[a.length]={key:'voucNo',value:voucNo,op:LI};
        store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
        store.reload({params:{start:0,limit:C_PS},callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});
    };
    var b8={text:C_FAST_SEARCH+'(Q)',iconCls:'search',handler:this.fastSearch}; 
    var b9={text:C_RESET+'(F5)',iconCls:'refresh',handler:this.reset};
    new Ext.KeyMap(Ext.getDoc(), {
        key:'nmdf',ctrl:true,
        handler: function(k, e) {
            var tc = T_MAIN.getComponent('G_VOUC_'+t);
            if(tc&&tc==T_MAIN.getActiveTab()){
                switch(k) {
                case Ext.EventObject.N: if(!NR(M1_S+(t=='R'?S_VOUC_R:S_VOUC_P)+F_M)) this.add();break;
                case Ext.EventObject.M: if(!NR(M1_S+(t=='R'?S_VOUC_R:S_VOUC_P)+F_M)) this.edit();break;
                case Ext.EventObject.D: if(!NR(M1_S+(t=='R'?S_VOUC_R:S_VOUC_P)+F_R)) this.removeVouc();break;                   
                case Ext.EventObject.F: this.search();break;
                }
            }
        },stopEvent:true,scope:this});
    new Ext.KeyMap(Ext.getDoc(), {key:[116],
        handler: function(k, e) {
            var tc = T_MAIN.getComponent('G_VOUC_'+t);
            if(tc&&tc==T_MAIN.getActiveTab()){switch(k) {case Ext.EventObject.F5:this.reset();break;}}
        },stopEvent: true,scope:this
    });
    this.pagingNav=function(page){
        var tc = T_MAIN.getComponent('G_VOUC_'+t);
            if(tc&&tc==T_MAIN.getActiveTab()){
            var pt = this.getBottomToolbar();
            if (!pt[page].disabled) pt.onClick(page);
         }
    };
    this.nav = new Ext.KeyNav(Ext.getDoc(),{
        pageDown: this.pagingNav.createDelegate(this,['next']),
        pageUp: this.pagingNav.createDelegate(this, ['prev']),
        home: this.pagingNav.createDelegate(this,['first']),
        end: this.pagingNav.createDelegate(this,['last']),
        scope:this
    });
	Fos.VoucherGrid.superclass.constructor.call(this, {    
    id:'G_VOUC_'+t,iconCls:'grid',store: store,title:t=='R'?C_VOUC_R_MGT:C_VOUC_P_MGT,header:false,autoScroll:true,height:300,
	sm:sm,cm:cm,stripeRows:true,closable:true,listeners:rowCtxEvents,view:new Ext.grid.GroupingView(groupViewCfg),
	tbar:[{text:C_ADD+'(N)',iconCls:'add',disabled:NR(M1_S+(t=='R'?S_VOUC_R:S_VOUC_P)+F_M),handler:this.add}, '-', 
		{text:C_EDIT+'(M)',iconCls:'option',disabled:NR(M1_S+(t=='R'?S_VOUC_R:S_VOUC_P)+F_M),handler:this.edit},'-',
		{text:C_REMOVE+'(D)',iconCls:'remove',disabled:NR(M1_S+(t=='R'?S_VOUC_R:S_VOUC_P)+F_R),handler:this.removeVouc},'-',
		{text:C_SEARCH+'(F)',iconCls:'search',handler:this.search},'-',
		kw,b8,'-',b9,'-'],
	bbar:PTB(store,C_PS)});
};    
Ext.extend(Fos.VoucherGrid, Ext.grid.GridPanel);
Fos.InitLookupWin = function(c,t) {	
	var store = GS('INIT_X','SInvoiceItem',SInvoiceItem,'invoId','DESC','invoNo','S_INIT','id',false);
	var a=[];
	a[0]={key:'custId',value:c,op:1};
	a[1]={key:'initCancelFlag',value:0,op:EQ};
	a[2]={key:'initWriteOffStatus',value:2,op:NE};
	store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
    store.load();
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});	
	var gv = new Ext.grid.GroupingView({forceFit:false,getRowClass:function(row,idx) {if(row.data.expeType!=t)return 'red-row';},groupTextTpl: '{text} ({[values.rs.length]} {[values.rs.length > 1 ? "Items" : "Item"]})'});
	var cm=new Ext.grid.ColumnModel({columns:[sm,
		{header:C_EXPE_TYPE,width:40,dataIndex:"expeType",renderer:function(v){return v=='R'?C_AR:C_AP;}},
		{header:C_INVO_NO,width:80,dataIndex:"invoNo"},
		{header:C_TAX_NO,width:80,dataIndex:"invoTaxNo"},
		{header:C_SETTLE_OBJECT,dataIndex:"custName"},
		{header:C_CONS_NO,width:80,dataIndex:"consNo",renderer:consRender},
		{header:C_CHAR,width:80,dataIndex:"charName"},
		{header:C_CURR_BASE,dataIndex:'expeCurrCode',width:60},	
		{header:C_ORI_AMOUNT,width:80,dataIndex:"expeTotalAmount"},
		{header:C_INVO_EX_RATE,dataIndex:'initExRate',width:60},
		{header:C_INVO_CURR,dataIndex:'invoCurrCode',width:60},
		{header:C_INVO_AMOUNT,dataIndex:"initInvoiceAmount"},
		{header:C_WRITEOFFED_AMOUNT,dataIndex:"initInvoiceAmountW"},
		{header:C_WRITEOFF_STATUS,dataIndex:"initWriteOffStatus"},
		{header:C_WRITEOFF_NO,dataIndex:"initWriteOffNo"},
		{header:C_UNIT,width:60,dataIndex:"unitName"},
		{header:C_QUANTITY,width:60,dataIndex:"expeNum"},
		{header:C_UNIT,width:80,dataIndex:"expeUnitPrice"},		
		{header:C_INVOICE_AMOUNT_ORI_C,dataIndex:"initInvoiceAmountOri"},
		{header:C_WRITEOFFED_AMOUNT_ORI,dataIndex:"initInvoiceAmountOriW"}],defaults:{sortable:true,width:100}});
    var g = new Ext.grid.GridPanel({ 
    id:'G_INIT_LOOKUP',iconCls:'gen',view:gv,header:false,height:400,width:800,store:store,sm:sm,cm:cm,loadMask:true});	
    Fos.InitLookupWin.superclass.constructor.call(this,{title:C_ADD_EXPE,modal:true,layout:'fit',width:800,minWidth:300,
        minHeight:200,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:[{layout:'fit',border:false,
        items: [g]}]}); 
};
Ext.extend(Fos.InitLookupWin,Ext.Window);
Fos.VoucItemGrid = function(p,store){
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,
		{header:C_EXPE_TYPE,width:60,dataIndex:"expeType",renderer:function(v){return v=='R'?C_AR:C_AP;}},
		{header:C_INVO_NO,width:90,dataIndex:'invoNo'},
		{header:C_TAX_NO,width:90,dataIndex:'invoTaxNo'},
		{header:C_CHAR,width:80,dataIndex:'charName'},
		{header:C_CURR_BASE,width:50,dataIndex:'expeCurrCode'},
		{header:C_ORI_AMOUNT,width:80,align:'right',renderer:numRender,dataIndex:'expeTotalAmount'},	
		{header:C_INVO_CURR,width:60,dataIndex:'invoCurrCode'},
		{header:C_INVO_EX_RATE,width:60,align:'right',renderer:rateRender,dataIndex:'initExRate'},	
		{header:C_INVO_AMOUNT,width:80,align:'right',renderer:numRender,dataIndex:'initInvoiceAmount'},
		{header:C_WRITEOFFED_AMOUNT,width:80,align:'right',renderer:numRender,dataIndex:'initInvoiceAmountW'},
		{header:C_WRITEOFFED_AMOUNT_C,width:100,align:'right',renderer:numRender,dataIndex:'voitAmountW',css:'background: #ffaa66;',editor:new Ext.form.NumberField({allowBlank:false,blankText:'',invalidText:''})},
		{header:C_VOUC_EX_RATE,width:60,align:'right',renderer:rateRender,dataIndex:'voitExRate',css:'background: #ffaa66;',editor:new Ext.form.NumberField({decimalPrecision:4,blankText:'',invalidText:''})},
		{header:C_EX_AMOUNT,width:100,align:'right',renderer:numRender,dataIndex:'voitAmountVoucW'},
		{header:C_EX_AMOUNT_ORI,width:100,align:'right',renderer:numRender,dataIndex:'voitAmountOriW'},
		{header:C_UNIT,hidden:true,width:60,dataIndex:'unitName'},
		{header:C_UNIT_PRICE,width:60,align:'right',renderer:rateRender,dataIndex:'expeUnitPrice'},
		{header:C_QUANTITY,width:60,dataIndex:'expeNum'},
		{header:C_CONS_NO,width:120,dataIndex:"consNo",renderer:consRender},
		{header:C_VESS,width:80,dataIndex:'consVessel'},
		{header:C_VOYA,width:80,dataIndex:'consVoyage'},		
		{header:C_HBL_NO,width:80,dataIndex:"consHblNo"},
		{header:C_MBL_NO,width:80,dataIndex:'consMblNo'},
		{header:C_REMARKS,width:120,dataIndex:'expeRemarks'}
		],defaults:{sortable:true,width:100}});
	var gv = new Ext.grid.GridView({getRowClass:function(row,idx) {if(row.data.expeType!=p.get('voucType'))return 'red-row';}});
	this.reCalculate = function(){
		var sum=0;
		var d=store.getRange();
		for(var i=0;i<d.length;i++){
			if(d[i].get('expeType')==p.get('voucType')){sum = round2(sum + parseFloat(d[i].get('voitAmountVoucW')));}
			else{sum = round2(sum - parseFloat(d[i].get('voitAmountVoucW')));}
		}
		p.set('voucWriteOffAmount',sum);
		p.set('voucAmount',sum);
		var T = T_MAIN.findById('T_VOUC_'+p.get('id'));
		T.find('name','voucWriteOffAmount')[0].setValue(sum);
		T.find('name','voucAmount')[0].setValue(sum);
	};
	new Ext.KeyMap(Ext.getDoc(), {
		key:'ar',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('T_VOUC_'+p.get('id'));
		 	if(tc&&tc==T_MAIN.getActiveTab()){
	 			switch(k) {
		 		case Ext.EventObject.A:
					if(p.get('voucStatus')=='0') this.add();break;
		 		case Ext.EventObject.R:
		 			if(p.get('voucStatus')=='0') this.removeVoit();break;	
	 			}
		 	}
		},stopEvent:true,scope:this});
	this.add=function(){
		if(p.get('custId')){
    		var win = new Fos.InitLookupWin(p.get('custId'),p.get('voucType'));
			win.addButton({text:C_OK,scope:this,handler:function(){
				var g = win.findById('G_INIT_LOOKUP');
				var r = g.getSelectionModel().getSelections();
				if(r){
					var rn = store.getCount();
					for(var i=0;i<r.length;i++){
						if(rn==0 || store.findBy(function(rec,id){return rec.get('initId')==r[i].get('initId');})==-1){
							var ex=r[i].get('invoCurrCode')==p.get('currCode')?p.get('voucExRate'):getExRate(r[i].get('invoCurrCode'),'CNY');
							var voitAmountW = round2(r[i].get('initInvoiceAmount')-r[i].get('initInvoiceAmountW'));
							var voitAmountOriW = round2(voitAmountW*r[i].get('invoExRate')/r[i].get('initExRate'));
							var voitAmountVoucW = round2(voitAmountW*r[i].get('invoExRate')/p.get('voucExRate'));
							var rid=GGUID();
							var it = new SVoucherItem({id:rid,voitId:rid,initId:r[i].get('initId'),invoId:r[i].get('invoId'),invoNo:r[i].get('invoNo'),invoTaxNo:r[i].get('invoTaxNo'),
							expeId:r[i].get('expeId'),expeType:r[i].get('expeType'),
							consId:r[i].get('consId'),consNo:r[i].get('consNo'),custId:r[i].get('custId'),custName:r[i].get('custName'),custSname:r[i].get('custSname'),
							consVessel:r[i].get('consVessel'),consVoyage:r[i].get('consVoyage'),consSailDate:r[i].get('consSailDate'),
							consMblNo:r[i].get('consMblNo'),consHblNo:r[i].get('consHblNo'),
							charName:r[i].get('charName'),unitName:r[i].get('unitName'),expeCurrCode:r[i].get('expeCurrCode'),
							expeUnitPrice:r[i].get('expeUnitPrice'),expeNum:r[i].get('expeNum'),expeExRate:r[i].get('expeExRate'),
							expeCommission:r[i].get('expeCommission'),expeCommissionRate:r[i].get('expeCommissionRate'),
							expeTotalAmount:r[i].get('expeTotalAmount'),initInvoiceAmount:r[i].get('initInvoiceAmount'),initInvoiceAmountOri:r[i].get('initInvoiceAmountOri'),
							initInvoiceAmountW:r[i].get('initInvoiceAmountW'),initInvoiceAmountOriW:r[i].get('initInvoiceAmountOriW'),
							invoCurrCode:r[i].get('invoCurrCode'),initExRate:r[i].get('initExRate'),invoExRate:r[i].get('invoExRate'),
							voitExRate:ex,voucExRate:p.get('voucExRate'),
							voitWriteOffNo:p.get('voucWriteOffNo'),voucId:p.get('voucId'),voucNo:p.get('voucNo'),voucDate:p.get('voucDate'),
							voitAmountW:voitAmountW,voitAmountOriW:voitAmountOriW,voitAmountVoucW:voitAmountVoucW,voucCurrCode:p.get('currCode'),
							voitRemarks:'',	voitWriteOffStatus:'2',voitCancelFlag:'0',rowAction:'',version:'0'});
							store.insert(0,it);
							it.set('rowAction','N');
						}
					}
					this.reCalculate();
				}
				win.close();
			}},this);
			win.addButton({text:C_CANCEL,handler : function(){win.close();}},this);
			win.show();
		}
		else{XMG.alert(SYS,M_SEL_SETTLE_OBJ);}
	};
	this.removeVoit=function(){
		var r = sm.getSelections();
		if(r.length){
			for(var i=0;i<r.length;i++){r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');store.remove(r[i]);}
			this.reCalculate();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	Fos.VoucItemGrid.superclass.constructor.call(this, {
	id:'G_VOUC_I'+p.get('id'),border:false,autoScroll:true,view:gv,clicksToEdit:1,store:store,sm:sm,cm:cm,height:260,
    listeners:{scope:this,afteredit:function(e){
    	var f=e.field;var r=e.record; 	
    	if(f=='voitAmountW'){
			if(e.value>r.get('initInvoiceAmount')-r.get('initInvoiceAmountW')){
				XMG.alert(SYS,M_VOUC_OVER,function(){
				r.set('voitAmountW',e.originalValue);
				e.grid.stopEditing();e.grid.startEditing(e.row,e.column);
				});
			}
			else{			
				r.set('voitAmountOriW',round2(e.value*r.get('invoExRate')/r.get('initExRate')));
				r.set('voitAmountVoucW',round2(e.value*r.get('voitExRate')/r.get('voucExRate')));
				this.reCalculate();
			}
    	}
    	else if(f=='voitExRate'){
    		r.set('voitAmountOriW',round2(r.get('voitAmountW')*r.get('invoExRate')/e.value));
			r.set('voitAmountVoucW',round2(e.value*r.get('voitAmountW')/r.get('voucExRate')));
			this.reCalculate();
    	}
    }},
    tbar:[{text:C_ADD+'(A)',iconCls:'add',disabled:p.get('voucStatus')!='0',scope:this,handler:this.add}, '-', 		
		{text:C_REMOVE+'(R)',iconCls:'remove',disabled:p.get('voucStatus')!='0',scope:this,handler:this.removeVoit
	}]});
};    
Ext.extend(Fos.VoucItemGrid,Ext.grid.EditorGridPanel);

Fos.VoucherTab = function(p,prId,invoId) {
    var store = GS('VOIT_Q','SVoucherItem',SVoucherItem,'voitId','DESC','','','id',false);
    if(invoId){
    	Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'INIT_Q',invoId:invoId,initWriteOffStatus:0},scope:this,
			success: function(res,o){
				var r = XTRA(res.responseXML,'SInvoiceItem',SInvoiceItem);
				var sum=0;
				for(var i=0;i<r.length;i++){
					var ex=r[i].get('invoCurrCode')==p.get('currCode')?p.get('voucExRate'):getExRate(r[i].get('invoCurrCode'),'CNY');
					var voitAmountW = round2(r[i].get('initInvoiceAmount')-r[i].get('initInvoiceAmountW'));
					var voitAmountOriW = round2(voitAmountW*r[i].get('invoExRate')/r[i].get('initExRate'));
					var voitAmountVoucW = round2(voitAmountW*r[i].get('invoExRate')/p.get('voucExRate'));
					var rid=GGUID();
					var it = new SVoucherItem({id:rid,voitId:rid,initId:r[i].get('initId'),invoId:r[i].get('invoId'),invoNo:r[i].get('invoNo'),invoTaxNo:r[i].get('invoTaxNo'),
					expeId:r[i].get('expeId'),expeType:r[i].get('expeType'),
					consId:r[i].get('consId'),consNo:r[i].get('consNo'),custId:r[i].get('custId'),custName:r[i].get('custName'),custSname:r[i].get('custSname'),
					consVessel:r[i].get('consVessel'),consVoyage:r[i].get('consVoyage'),consMblNo:r[i].get('consMblNo'),consHblNo:r[i].get('consHblNo'),
					charName:r[i].get('charName'),unitName:r[i].get('unitName'),expeCurrCode:r[i].get('expeCurrCode'),
					expeUnitPrice:r[i].get('expeUnitPrice'),expeNum:r[i].get('expeNum'),expeExRate:r[i].get('expeExRate'),
					expeTotalAmount:r[i].get('expeTotalAmount'),initInvoiceAmount:r[i].get('initInvoiceAmount'),initInvoiceAmountOri:r[i].get('initInvoiceAmountOri'),
					initInvoiceAmountW:r[i].get('initInvoiceAmountW'),initInvoiceAmountOriW:r[i].get('initInvoiceAmountOriW'),
					invoCurrCode:r[i].get('invoCurrCode'),initExRate:r[i].get('initExRate'),invoExRate:r[i].get('invoExRate'),
					voitExRate:ex,voucExRate:p.get('voucExRate'),
					voitWriteOffNo:p.get('voucWriteOffNo'),voucId:p.get('voucId'),voucNo:p.get('voucNo'),voucDate:p.get('voucDate'),
					voitAmountW:voitAmountW,voitAmountOriW:voitAmountOriW,voitAmountVoucW:voitAmountVoucW,voitRemarks:'',							
					voitWriteOffStatus:'2',voitCancelFlag:0,rowAction:'',version:0});
					store.insert(0,it);
					it.set('rowAction','N');
					sum = sum + voitAmountVoucW;
				};
				this.find('name','voucWriteOffAmount')[0].setValue(sum);
			}});
    }
    else if(prId){
		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'INIT_PR_X',prId:prId},scope:this,
			success: function(res,o){
				var r = XTRA(res.responseXML,'SInvoiceItem',SInvoiceItem);
				var sum=0;
				for(var i=0;i<r.length;i++){
					var ex=r[i].get('invoCurrCode')==p.get('currCode')?p.get('voucExRate'):getExRate(r[i].get('invoCurrCode'),'CNY');
					var voitAmountW = round2(r[i].get('initInvoiceAmount')-r[i].get('initInvoiceAmountW'));
					var voitAmountOriW = round2(voitAmountW*r[i].get('invoExRate')/r[i].get('initExRate'));
					var voitAmountVoucW = round2(voitAmountW*r[i].get('invoExRate')/p.get('voucExRate'));
					var rid=GGUID();
					var it = new SVoucherItem({id:rid,voitId:rid,initId:r[i].get('initId'),invoId:r[i].get('invoId'),invoNo:r[i].get('invoNo'),invoTaxNo:r[i].get('invoTaxNo'),
					expeId:r[i].get('expeId'),expeType:r[i].get('expeType'),
					consId:r[i].get('consId'),consNo:r[i].get('consNo'),custId:r[i].get('custId'),custName:r[i].get('custName'),custSname:r[i].get('custSname'),
					consVessel:r[i].get('consVessel'),consVoyage:r[i].get('consVoyage'),consMblNo:r[i].get('consMblNo'),consHblNo:r[i].get('consHblNo'),
					charName:r[i].get('charName'),unitName:r[i].get('unitName'),expeCurrCode:r[i].get('expeCurrCode'),
					expeUnitPrice:r[i].get('expeUnitPrice'),expeNum:r[i].get('expeNum'),expeExRate:r[i].get('expeExRate'),
					expeTotalAmount:r[i].get('expeTotalAmount'),initInvoiceAmount:r[i].get('initInvoiceAmount'),initInvoiceAmountOri:r[i].get('initInvoiceAmountOri'),
					initInvoiceAmountW:r[i].get('initInvoiceAmountW'),initInvoiceAmountOriW:r[i].get('initInvoiceAmountOriW'),
					invoCurrCode:r[i].get('invoCurrCode'),initExRate:r[i].get('initExRate'),invoExRate:r[i].get('invoExRate'),
					voitExRate:ex,voucExRate:p.get('voucExRate'),
					voitWriteOffNo:p.get('voucWriteOffNo'),voucId:p.get('voucId'),voucNo:p.get('voucNo'),voucDate:p.get('voucDate'),
					voitAmountW:voitAmountW,voitAmountOriW:voitAmountOriW,voitAmountVoucW:voitAmountVoucW,voitRemarks:'',							
					voitWriteOffStatus:'2',voitCancelFlag:0,rowAction:'',version:0});
					store.insert(0,it);
					it.set('rowAction','N');
					sum = sum + voitAmountVoucW;
				};
				this.find('name','voucWriteOffAmount')[0].setValue(sum);
			}});
	}
	else if(p.get('rowAction')!='N') 
		store.load({params:{voucId:p.get('voucId')}});
    
    this.grid=new Fos.VoucItemGrid(p,store);
    this.save=function(){    	
    	p.beginEdit();this.getForm().updateRecord(p);p.endEdit();
    	var title=p.get('voucType')=='R'?C_VOUC_R_AMOUNT:C_VOUC_P_AMOUNT;
    	if(!p.get('custId')){XMG.alert(SYS,M_SEL_SETTLE_OBJ);return;};
		//if(!p.get('voucAmount')){XMG.alert(SYS,title+M_REQIRED);return;};
		//if(p.get('voucAmount')<=0){XMG.alert(SYS,title+M_GREAT_THAN_ZERO);return;};
		if(p.get('voucWriteOffAmount')+p.get('voucFixAmount')>p.get('voucAmount')+0.5){XMG.alert(SYS,M_VOUC_AMOUNT_NOT_GREAT+title);return;};
		var rem=this.find('name','voucWriteOffAmountR')[0].getValue();
		if(rem>=-0.5&&rem<=0.5) p.set('voucWriteOffStatus','2');
		else if(rem==p.get('voucAmount')) p.set('voucWriteOffStatus','0');
		else p.set('voucWriteOffStatus','1');
		var a = store.getRange();
		if(a.length>0){
			p.set('voucConsNo',a[0].get('consNo'));
			p.set('voucInvoiceNo',a[0].get('invoNo'));
			p.set('voucInvoiceTaxNo',a[0].get('invoTaxNo'));
			p.set('voucVessel',a[0].get('consVessel'));
			p.set('voucVoyage',a[0].get('consVoyage'));
			p.set('voucMblNo',a[0].get('consMblNo'));
			p.set('voucHblNo',a[0].get('consHblNo'));
		}
   	 	var xml = RTX(p,'SVoucher',SVoucher);   	 	
   	 	var a = this.grid.getStore().getModifiedRecords();
		if(a.length>0){var x = ATX(a,'SVoucherItem',SVoucherItem);xml=xml+x;};		
		var tb=this.getTopToolbar();
		tb.getComponent('TB_A').setDisabled(true);
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'VOUC_S'},
			success: function(res){
				var c = XTR(res.responseXML,'SVoucher',SVoucher);
				var ra=p.get('rowAction');
				var f = SVoucher.prototype.fields;
				p.beginEdit();
   				for (var i = 0; i < f.keys.length; i++) {var fn = ''+f.keys[i];p.set(fn,c.get(fn));};
				if(ra=='N'){						
					this.setTitle((p.get('voucType')=='R'?C_VOUC_R:C_VOUC_P)+'-'+p.get("voucNo"));
					this.find('name','voucNo')[0].setValue(p.get('voucNo'));
					p.set('rowAction','M');
				}
				p.endEdit();
				var sa = this.grid.getStore();
				var a = XTRA(res.responseXML,'SVoucherItem',SVoucherItem);FOSU(sa,a,SVoucherItem);
				this.updateToolBar();
				XMG.alert(SYS,M_S);tb.getComponent('TB_A').setDisabled(false);
			},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);tb.getComponent('TB_A').setDisabled(false);},
			xmlData:FOSX(xml)
		});
    };
    this.removeVouc=function(){
    	p.set('rowAction','R');
		var xml = RTX(p,'SVoucher',SVoucher);
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'VOUC_S'},
			success: function(r){XMG.alert(SYS,M_S,function(){T_MAIN.remove('T_VOUC_'+p.get('id'));});},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
			xmlData:FOSX(xml)});
    };
    this.updateStatus=function(a,s){
    	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:a,voucId:p.get('voucId'),voucStatus:s},
			success: function(r){
    			p.beginEdit();p.set('voucStatus',s);p.set('version',p.get('version')+1);p.endEdit();
    			this.updateToolBar();XMG.alert(SYS,M_S);},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);}});
    };
    this.check=function(){this.updateStatus('VOUC_U','1');};
    this.renew=function(){this.updateStatus('VOUC_U','0');};
    this.cancel=function(){this.updateStatus('VOUC_C','2');};
    this.updateToolBar = function(){
		var tb=this.getTopToolbar();
		tb.getComponent('TB_A').setDisabled(NR(M1_S+(p.get('voucType')=='R'?S_VOUC_R:S_VOUC_P)+F_M)||p.get('voucStatus')!='0');
    	tb.getComponent('TB_B').setDisabled(NR(M1_S+(p.get('voucType')=='R'?S_VOUC_R:S_VOUC_R)+F_M)||p.get('invoStatus')!='0'||p.get('rowAction')=='N');
    	tb.getComponent('TB_C').setDisabled(NR(M1_S+(p.get('voucType')=='R'?S_VOUC_R:S_VOUC_P)+F_A)||p.get('voucStatus')!='0'||p.get('rowAction')=='N');
    	tb.getComponent('TB_D').setDisabled(NR(M1_S+(p.get('voucType')=='R'?S_VOUC_R:S_VOUC_P)+F_A)||p.get('voucStatus')!='1');
    	tb.getComponent('TB_E').setDisabled(NR(M1_S+(p.get('voucType')=='R'?S_VOUC_R:S_VOUC_P)+F_F)||p.get('voucStatus')!='1');
    	tb.getComponent('TB_M').setText(C_STATUS_C+getVOST(p.get('voucStatus'))+'/'+getWRST(p.get('voucWriteOffStatus')));
    };
    new Ext.KeyMap(Ext.getDoc(), {
		key:'sdcufe',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('T_VOUC_'+p.get('id'));
		 	if(tc&&tc==T_MAIN.getActiveTab()){
		 		var tb=this.getTopToolbar();
		 		switch(k) {
		 		case Ext.EventObject.S: if(!tb.getComponent('TB_A').disabled) this.save();break;
		 		case Ext.EventObject.D: if(!tb.getComponent('TB_B').disabled) this.removeVouc();break;
		 		case Ext.EventObject.C: if(!tb.getComponent('TB_C').disabled) this.check();break;	 		
		 		case Ext.EventObject.U: if(!tb.getComponent('TB_D').disabled) this.renew();break;
				case Ext.EventObject.F: if(!tb.getComponent('TB_E').disabled) this.cancel();break;
				case Ext.EventObject.E:
					if(!NR(M1_S+(p.get('voucType')=='R'?S_VOUC_R:S_VOUC_P)+F_E)) EXP('C','VOUC_LIST','&voucId='+p.get('voucId'));break;
				}
		 	}
		},stopEvent:true,scope:this});
    Fos.VoucherTab.superclass.constructor.call(this, { 
	id: 'T_VOUC_'+p.get('id'),title:(p.get('voucType')=='R'?C_VOUC_R:C_VOUC_P)+'-'+p.get('voucNo'),layout:'border',
	autoScroll:true,labelAlign:'right',closable:true,labelWidth:80,bodyStyle:'padding:0px 0px 20px 0px',border:false,width:800,
	tbar:[
	{itemId:'TB_A',text:C_SAVE+'(S)',iconCls:'save',disabled:NR(M1_S+(p.get('voucType')=='R'?S_VOUC_R:S_VOUC_P)+F_M)||p.get('voucStatus')!='0',scope:this,handler:this.save},'-',
	{itemId:'TB_B',text:C_REMOVE+'(D)',iconCls:'remove',disabled:NR(M1_S+(p.get('voucType')=='R'?S_VOUC_R:S_VOUC_R)+F_M)||p.get('voucStatus')!='0'||p.get('rowAction')=='N',scope:this,handler:this.removeVouc},'-',
	{itemId:'TB_C',text:C_AUDIT+'(C)',iconCls:'check',disabled:NR(M1_S+(p.get('voucType')=='R'?S_VOUC_R:S_VOUC_P)+F_A)||p.get('voucStatus')!='0'||p.get('rowAction')=='N',scope:this,handler:this.check},'-',
	{itemId:'TB_D',text:C_CANCEL_AUDIT+'(U)',iconCls:'renew',disabled:NR(M1_S+(p.get('voucType')=='R'?S_VOUC_R:S_VOUC_P)+F_A)||p.get('voucStatus')!='1',scope:this,handler:this.renew},'-',
	{itemId:'TB_E',text:C_INVALID+'(F)',iconCls:'cancel',disabled:NR(M1_S+(p.get('voucType')=='R'?S_VOUC_R:S_VOUC_P)+F_F)||p.get('voucStatus')!='1',scope:this,handler:this.cancel},'-',
	{text:C_EXPORT+'(E)',disabled:NR(M1_S+(p.get('voucType')=='R'?S_VOUC_R:S_VOUC_P)+F_E),iconCls:'print',scope:this,handler:function(){EXP('C','VOUC_LIST','&voucId='+p.get('voucId'));}},'->','-',
	{itemId:'TB_M',disabled:true,text:C_STATUS_C+getVOST(p.get('voucStatus'))+'/'+getWRST(p.get('voucWriteOffStatus'))},'-'
	],
	items: [{region:'north',height:200,layout:'column',layoutConfig:{columns:4},deferredRender:false,title:p.get('voucType')=='R'?C_VOUC_R_INFO:C_VOUC_P_INFO,collapsible:true,
    	items:[{columnWidth:.25,layout:'form',border:false,
        	items:[{fieldLabel:p.get('voucType')=='R'?C_VOUC_NO_R:C_VOUC_NO_P,tabIndex:1,name:'voucNo',disabled:true,value:p.get('voucNo'),xtype:'textfield',anchor:'95%'},
        	{fieldLabel:C_SETTLE_OBJECT,itemCls:'required',tabIndex:5,
        		name:'custName',value:p.get('custName'),store:getCS(),enableKeyEvents:true,
            		allowBlank:false,xtype:'combo',displayField:'custCode',valueField:'custCode',
            		typeAhead:true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
            		tpl:custTpl,itemSelector:'div.list-item',listWidth:400,
            		listeners:{scope:this,select:function(c,r,i){						
						p.set('custId',r.get('custId'));
						p.set('custSname',r.get('custCode'));
						p.set('custName',r.get('custNameCn'));
						c.setValue(r.get('custNameCn'));
					},
					keydown:{fn:function(f,e){LC(f,e,p.get('voucType')=='R'?'custArFlag':'custApFlag');},buffer:500}}},
                {fieldLabel:p.get('voucType')=='R'?C_VOUC_R_AMOUNT:C_VOUC_P_AMOUNT,itemCls:'required',tabIndex:9,name:'voucAmount',value:p.get('voucAmount'),xtype:'numberfield',anchor:'95%',
                	listeners:{scope:this,change:function(f,nv,ov){
						p.set('voucAmount',nv);
						var v = round2(nv-p.get('voucWriteOffAmount')-p.get('voucFixAmount'));
						this.find('name','voucWriteOffAmountR')[0].setValue(v);
					}}},
				{fieldLabel:C_BANK_ACCOUNT,tabIndex:13,name:'voucBank',value:p.get('voucBank'),store:getCOBA_S(),xtype:'combo',displayField:'cobaBank',valueField:'cobaBank',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
                	listeners:{scope:this,select:function(c,r,i){
                		this.find('name','voucAccount')[0].setValue(r.get('cobaAccount'));}}
				}]},
            {columnWidth:.25,layout:'form',border:false,
                items: [{fieldLabel:C_BANK_BILL_NO,tabIndex:2,name:'voucBankReciptNo',value:p.get('voucBankReciptNo'),xtype:'textfield',format:DATEF,anchor:'95%'},
                {fieldLabel:C_CURR,itemCls:'required',disabled:true,tabIndex:4,name:'currCode',value:p.get('currCode'),store:getCURR_S(),xtype:'combo',displayField:'currCode',valueField:'currCode',typeAhead: true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},                
                {fieldLabel:C_WRITEOFF_AMOUNT,tabIndex:10,name:'voucWriteOffAmount',value:p.get('voucWriteOffAmount'),disabled:true,xtype:'numberfield',anchor:'95%',
                listeners:{scope:this,change:function(f,nv,ov){
                		var v = round2(p.get('voucAmount')-p.get('voucFixAmount')-nv);
						this.find('name','voucWriteOffAmountR')[0].setValue(v);
				}}},
				{fieldLabel:C_BANK_ACCOUNT,tabIndex:14,name:'voucAccount',value:p.get('voucAccount'),xtype:'textfield',anchor:'95%'}]},
            {columnWidth:.25,layout: 'form',border : false,
                items: [{fieldLabel:C_CHECK_NO,tabIndex:3,name:'voucCheckNo',value:p.get('voucCheckNo'),xtype:'textfield',format:DATEF,anchor:'95%'},
                {fieldLabel:C_EX_RATE,tabIndex:7,name:'voucExRate',value:p.get('voucExRate'),disabled:p.get('currCode')=='CNY',xtype:'numberfield',decimalPrecision:4,anchor:'95%',
                listeners:{scope:this,change:function(f,nv,ov){		
					p.set('voucExRate',nv);
					var d=store.getRange();
					for(var i=0;i<d.length;i++){						
						d[i].set('voucExRate',nv);
						if(d[i].get('invoCurrCode')==p.get('currCode'))
							d[i].set('voitExRate',nv);
					}
				}}},
                {fieldLabel:C_FIX_AMOUNT,tabIndex:11,name:'voucFixAmount',value:p.get('voucFixAmount'),xtype:'numberfield',anchor:'95%',
                listeners:{scope:this,change:function(f,nv,ov){		
						p.set('voucFixAmount',nv);
						var v = round2(p.get('voucAmount')-p.get('voucWriteOffAmount')-nv);
						this.find('name','voucWriteOffAmountR')[0].setValue(v);
				}}},
                {fieldLabel:C_WRITEOFF_NO,tabIndex:15,name:'voucWriteOffNo',value:p.get('voucWriteOffNo'),xtype:'textfield',anchor:'95%',
                listeners:{scope:this,change:function(f,nv,ov){		
					var a = this.grid.getStore().getRange();
					if(a.length>0){for(var i=0;i<a.length;i++){a[i].set('voitWriteOffNo',nv);};};
				}}}]},
            {columnWidth:.25,layout: 'form',border : false,
                items: [{fieldLabel:p.get('voucType')=='R'?C_VOUC_DATE_R:C_VOUC_DATE_P,tabIndex:4,name:'voucDate',value:p.get('voucDate'),xtype:'datefield',format:DATEF,anchor:'95%'},
                {fieldLabel:C_SEWA,itemCls:'required',tabIndex:8,name:'voucPaymentType',value:p.get('voucPaymentType'),store:getSEWA_S(),xtype:'combo',displayField:'sewaName',valueField:'sewaId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
                {fieldLabel:C_REMAIN_AMOUNT,tabIndex:12,name:'voucWriteOffAmountR',value:p.get('voucAmount')-p.get('voucWriteOffAmount')-p.get('voucFixAmount'),disabled:true,xtype:'numberfield',anchor:'95%'}
                ]},
            {columnWidth:.99,layout:'form',border:false,items:[{fieldLabel:C_REMARKS,name:'voucRemarks',value:p.get('voucRemarks'),tabIndex:15,xtype:'textarea',anchor:'95%'}]}
            ]},
		{title:C_WRITEOFFED_LINE,region:'center',layout:'fit',deferredRender:false,items:this.grid}]
	});
};
Ext.extend(Fos.VoucherTab,Ext.FormPanel);
Fos.PrGrid = function(t){
    var store = GS('PR_X','SPr',SPr,'prDate','DESC','prDate','S_PR','id',true);
	var a=[];
	a[0]={key:'prType',value:t,op:1};
	var bp={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
	store.baseParams=bp;
	store.load({params:{start:0,limit:C_PS}});
	this.reset=function(){
		store.baseParams=bp;
		store.reload({params:{start:0,limit:C_PS}});
	};
	var showPr= function(p){
		var tab = T_MAIN.getComponent("T_PR_"+ p.get("id"));
		if(tab) {T_MAIN.setActiveTab(t);}
		else {tab = T_MAIN.add(new Fos.PrTab(p));
		T_MAIN.setActiveTab(tab);tab.doLayout();}
	};
	this.add = function(){
		var currCode='CNY';var w=new Fos.CurrencyWin();
		w.addButton({text:C_OK,handler:function(){
			currCode = w.findById('currCode').getValue();w.close();
			var id=GGUID();
			var e = new SPr({id:id,prId:id,prNo:'N'+id,prType:t,prDate:new Date(),
			currCode:currCode,prExRate:getExRate(currCode,'CNY'),prStatus:'0',version:'0',rowAction:'N'});
			var tab = T_MAIN.add(new Fos.PrTab(e));
			T_MAIN.setActiveTab(tab);
		}},this);
		w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);w.show();		
	};
	this.edit = function(){var p=sm.getSelected();if(p){showPr(p);} else XMG.alert(SYS,M_NO_DATA_SELECTED);};
	this.removePr = function(){
		var a =sm.getSelections();
       	if(a.length) {XMG.confirm(SYS,M_R_C,function(btn){
           	if(btn=='yes'){var b = false;
               	for(var i=0;i<a.length;i++){if(a[i].get('prStatus')!='0') b=true;}
               	if(b) XMG.alert(SYS,M_NO_REMOVE_COMMITED+(t=='R'?C_PR_R:C_PR_P));
               	else {
               		var xml =SMTX4R(sm,'SPr','prId');
               		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'PR_S'},
					success: function(){sm.each(function(p){store.remove(p);});XMG.alert(SYS,M_S);},
					failure: function(r,o){XMG.alert(SYS,M_F+r.responseText);},
					xmlData:FOSX(xml)});
               	}}});}
       else XMG.alert(SYS,M_R_P);
    };
	this.search = function(){
    	var win = new Fos.PrLookupWin(t);
		win.addButton({text:C_OK,handler:function(){
        	var tab = Fos.PrLookupWin.superclass.findById.call(win,'T_PR_LOOK');
        	var at = tab.getActiveTab();
        	var a=[];var op=1;a[0]={key:'prType',value:t,op:1};
        	if(at.getId()=='T_PR_LOOK_1'){
        		var prNo=at.find('name','prNo')[0].getValue();
        		var prNoM=at.find('name','prNoM')[0].getValue();
        		var c=prNo.indexOf(',');
        		var b=prNo.indexOf('..');
        		if(c>=0){a[1]={key:'prNo',value:prNo,op:IN};}
        		else if(b>=0){
        			var ra=prNo.split('..');
        			a[1]={key:'prNo',value:ra[0],op:GE};
        			a[2]={key:'prNo',value:ra[1],op:LE};
        		}
        		else if(prNoM){a[1]={key:'prNo',value:prNo,op:LI};}
        	}
        	else if(at.getId()=='T_PR_LOOK_2'){
        		var invoNo=at.find('name','invoNo')[0].getValue();
        		var invoNoM=at.find('name','invoNoM')[0].getValue();
        		var c=invoNo.indexOf(',');
        		var b=invoNo.indexOf('..');
        		if(c>=0){a[1]={key:'invoNo',value:invoNo,op:IN};}
        		else if(b>=0){
        			var ra=invoNo.split('..');
        			a[1]={key:'invoNo',value:ra[0],op:GE};
        			a[2]={key:'invoNo',value:ra[1],op:LE};
        		}
        		else if(invoNoM){a[1]={key:'invoNo',value:invoNo,op:LI};}
        	}
        	else if(at.getId()=='T_PR_LOOK_3'){
        		var invoTaxNo=at.find('name','invoTaxNo')[0].getValue();
        		var invoTaxNoM=at.find('name','invoTaxNoM')[0].getValue();
        		var c=invoTaxNo.indexOf(',');
        		var b=invoTaxNo.indexOf('..');
        		if(c>=0){a[1]={key:'invoTaxNo',value:invoTaxNo,op:IN};}
        		else if(b>=0){
        			var ra=invoTaxNo.split('..');
        			a[1]={key:'invoTaxNo',value:ra[0],op:GE};
        			a[2]={key:'invoTaxNo',value:ra[1],op:LE};
        		}
        		else if(invoTaxNoM){a[1]={key:'invoTaxNo',value:invoTaxNo,op:LI};}
        	}
        	else if(at.getId()=='T_PR_LOOK_4'){
        		var custId=at.find('name','custId')[0].getValue();
        		if(custId) a[a.length]={key:'custId',value:custId,op:op};
        		var currCode=at.find('name','currCode')[0].getValue();        		
        		if(currCode) a[a.length]={key:'currCode',value:currCode,op:op};
        		var prStatus=at.find('name','prStatus')[0].getValue();        		
        		if(prStatus) a[a.length]={key:'prStatus',value:prStatus,op:op};        		
        		var prDate=at.find('name','prDate')[0].getValue();
        		var prDate2=at.find('name','prDate2')[0].getValue();
        		if(prDate && prDate2){
        			a[a.length]={key:'prDate',value:prDate.format('Y-m-d H:i:s'),op:5};
        			a[a.length]={key:'prDate',value:prDate2.format('Y-m-d H:i:s'),op:3};
        		}
        		else if(prDate) a[a.length]={key:'prDate',value:prDate,op:op};        		
        		var prAmount=at.find('name','prAmount')[0].getValue();
        		var prAmount2=at.find('name','prAmount2')[0].getValue();
        		if(prAmount && prAmount2){
        			a[a.length]={key:'prAmount',value:prAmount,op:5};
        			a[a.length]={key:'prAmount',value:prAmount2,op:3};
        		}
        		else if(prAmount) a[a.length]={key:'prAmount',value:prAmount,op:op};
        	}
        	store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};     		
     		store.reload({params:{start:0,limit:C_PS},callback:function(r){
     			if(r.length==0) 
     			XMG.alert(SYS,M_NOT_FOUND);
     		}});
     		win.close();
		}},this);
		win.addButton({text:C_CANCEL,handler : function(){win.close();}},this);
		win.show();
    };
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm=new Ext.grid.ColumnModel({columns:[
		new Ext.grid.RowNumberer(),sm,
		{header:C_STATUS,dataIndex:"prStatus",renderer:t=='R'?getERST:getPRST},
		{header:t=='R'?C_PR_NO_R:C_PR_NO_P,width:100,dataIndex:"prNo"},
		{header:C_SETTLE_OBJECT,width:200,dataIndex:"custName"},		
		{header:C_AMOUNT,align:'right',width:80,renderer:numRender,dataIndex:"prAmount"},
		{header:C_CURR,dataIndex:"currCode"},
		{header:t=='R'?C_PR_DATE_R:C_PR_DATE_P,width:80,dataIndex:"prDate",renderer:formatDate},
		{header:C_SEWA,dataIndex:"prPaymentType",renderer:getSEWA},
		{header:t=='R'?C_BANK_R:C_BANK_P,width:120,dataIndex:"prBank"},	
		{header:t=='R'?C_ACCOUNT_R:C_ACCOUNT_P,width:100,align:'right',dataIndex:"prAccount"},			
		{header:C_BILL_BY,dataIndex:"createBy",renderer:getUSER},
		{header:C_BILL_DATE,dataIndex:"CreateTime",renderer:formatDate},
		{header:C_AUDIT_BY,dataIndex:"prChecker",renderer:getUSER},
		{header:C_AUDIT_TIME,dataIndex:"prCheckDate",renderer:formatDate},		
		{header:C_REMARKS,width:200,dataIndex:"prRemarks"}
		],defaults:{sortable:true,width:60}});
	var rowCtxEvents={
		rowdblclick:function(grid, rowIndex, event){var c= grid.getSelectionModel().getSelected();if(c){showPr(c);}}
	};	
	var kw = new Ext.form.TextField({listeners:{scope:this,specialkey:function(c,e){if(e.getKey()==Ext.EventObject.ENTER) this.fastSearch();}}});
    this.fastSearch=function(){
         var prNo=kw.getValue();
        if(!prNo){XMG.alert(SYS,t=='R'?M_INPUT_PR_R_NO:M_INPUT_PR_P_NO,function(b){kw.focus();});return;};
        var a=[];        
        var c=prNo.indexOf(',');
        var b=prNo.indexOf('..');
        if(c>=0){
            a[a.length]={key:'prNo',value:prNo,op:IN};
        }
        else if(b>=0){
            var ra=prNo.split('..');
            a[a.length]={key:'prNo',value:ra[0],op:GE};
            a[a.length]={key:'prNo',value:ra[1],op:LE};
        }
        a[a.length]={key:'prNo',value:prNo,op:LI};
        store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
        store.reload({params:{start:0,limit:C_PS},callback:function(r){
        	if(r.length==0) 
        		XMG.alert(SYS,M_NOT_FOUND);
        	}});
    };
    var b8={text:C_FAST_SEARCH+'(Q)',iconCls:'search',handler:this.fastSearch}; 
    var b9={text:C_RESET+'(F5)',iconCls:'refresh',handler:this.reset};
    new Ext.KeyMap(Ext.getDoc(), {
        key:'nmdf',ctrl:true,
        handler: function(k, e) {
            var tc = T_MAIN.getComponent('G_PR_'+t);
            if(tc&&tc==T_MAIN.getActiveTab()){
                switch(k) {
                case Ext.EventObject.N: if(!NR(M1_S+(t=='R'?S_PR_R:S_PR_P)+F_M)) this.add();break;
                case Ext.EventObject.M: if(!NR(M1_S+(t=='R'?S_PR_R:S_PR_P)+F_M)) this.edit();break;
                case Ext.EventObject.D: if(!NR(M1_S+(t=='R'?S_PR_R:S_PR_P)+F_R)) this.removePr();break;                   
                case Ext.EventObject.F: this.search();break;
                }
            }
        },stopEvent:true,scope:this});
    new Ext.KeyMap(Ext.getDoc(), {key:[116],
        handler: function(k, e) {
            var tc = T_MAIN.getComponent('G_PR_'+t);
            if(tc&&tc==T_MAIN.getActiveTab()){switch(k) {case Ext.EventObject.F5:this.reset();break;}}
        },stopEvent: true,scope:this
    });
    this.pagingNav=function(page){
        var tc = T_MAIN.getComponent('G_PR_'+t);
            if(tc&&tc==T_MAIN.getActiveTab()){
            var pt = this.getBottomToolbar();
            if (!pt[page].disabled) pt.onClick(page);
         }
    };
    this.nav = new Ext.KeyNav(Ext.getDoc(),{
        pageDown: this.pagingNav.createDelegate(this,['next']),
        pageUp: this.pagingNav.createDelegate(this, ['prev']),
        home: this.pagingNav.createDelegate(this,['first']),
        end: this.pagingNav.createDelegate(this,['last']),
        scope:this
    });
	Fos.PrGrid.superclass.constructor.call(this, {    
    id:'G_PR_'+t,iconCls:'grid',store: store,title:t=='R'?C_PR_R_MGT:C_PR_P_MGT,header:false,autoScroll:true,height:300,
	sm:sm,cm:cm,stripeRows:true,closable:true,listeners:rowCtxEvents,view:new Ext.grid.GroupingView(groupViewCfg),
	tbar:[{text:C_ADD+'(N)',iconCls:'add',disabled:NR(M1_S+(t=='R'?S_PR_R:S_PR_P)+F_M),handler:this.add}, '-', 
		{text:C_EDIT+'(M)',iconCls:'option',disabled:NR(M1_S+(t=='R'?S_PR_R:S_PR_P)+F_M),handler:this.edit},'-',
		{text:C_REMOVE+'(D)',iconCls:'remove',disabled:NR(M1_S+(t=='R'?S_PR_R:S_PR_P)+F_R),handler:this.removePr},'-',		
		{text:C_SEARCH+'(F)',iconCls:'search',handler:this.search},'-',
		kw,b8,'',b9,'-'],
	bbar:PTB(store,C_PS)});     
};    
Ext.extend(Fos.PrGrid,Ext.grid.GridPanel);
Fos.PrItemGrid = function(p){
	var store = GS('PRIT_Q','SPrItem',SPrItem,'pritId','DESC','','','id',false);
	if(p.get('rowAction')!='N') store.load({params:{prId:p.get('prId')}});
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,
		{header:C_INVO_NO,width:100,dataIndex:'invoNo'},
		{header:C_TAX_NO,width:100,dataIndex:'invoTaxNo'},		
		{header:C_INVO_AMOUNT,width:100,align:'right',renderer:numRender,dataIndex:'invoAmount'},
		{header:C_WRITEOFFED_AMOUNT,width:100,align:'right',renderer:numRender,dataIndex:'invoAmountWriteOff'},
		{header:C_PAY_AMOUNT_C,width:100,align:'right',renderer:numRender,dataIndex:'prAmount',editor:new Ext.form.NumberField({allowBlank:false,blankText:'',invalidText:''})},
		{header:C_CURR,dataIndex:'currCode'},
		{header:C_EX_RATE,dataIndex:'invoExRate',renderer:rateRender},
		{header:C_INVO_DATE,dataIndex:'invoDate',renderer:formatDate},
		{header:C_DUE_DATE,dataIndex:'invoDueDate',renderer:formatDate},
		{header:C_BILL_BY,dataIndex:'invoIssuer'},
		{header:C_BILL_DATE,dataIndex:'invoIssueDate',renderer:formatDate},
		{header:C_AUDIT_BY,dataIndex:'invoChecker'},
		{header:C_AUDIT_TIME,dataIndex:'invoCheckDate',renderer:formatDate}
		],defaults:{sortable:true,width:80}});
	this.recalculate=function(){
		var t = T_MAIN.findById('T_PR_'+ p.get('id'));
		var total = 0;var d=store.getRange();
		for(var i=0;i<d.length;i++){
			if(d[i].get('currCode')==p.get('currCode')) total=total+d[i].get('prAmount');
			else total=total+round2(d[i].get('prAmount')*d[i].get('invoExRate')/p.get('prExRate'));
		};
		t.find('name','prAmount')[0].setValue(total);
	};
	new Ext.KeyMap(Ext.getDoc(), {
		key:'ad',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('T_PR_'+p.get('id'));
		 	if(tc&&tc==T_MAIN.getActiveTab()){
	 			switch(k) {
		 		case Ext.EventObject.A:
					if(p.get('prStatus')=='0') this.add();break;
		 		case Ext.EventObject.D:
		 			if(p.get('prStatus')=='0') this.removePrit();break;	
	 			}
		 	}
		},stopEvent:true,scope:this});
	this.add=function(){
		if(p.get('custId') && p.get('currCode')){
    		var win = new Fos.PrItemLookupWin(p.get('custId'),p.get('prType'),p.get('currCode'));
			win.addButton({text:C_OK,scope:this,handler:function(){
				var g = win.findById('G_PRIT_LOOKUP');
				var r = g.getSelectionModel().getSelections();
				if(r){
					var rn = store.getCount();
					for(var i=0;i<r.length;i++){
						if(rn==0 || store.findBy(function(rec,id){
							return rec.get('invoId')==r[i].get('invoId');})==-1){
							var rid=GGUID();						
							var item = new SPrItem({id:rid,pritId:rid,prId:r[i].get('prId'),
							invoId:r[i].get('invoId'),
							invoNo:r[i].get('invoNo'),invoTaxNo:r[i].get('invoTaxNo'),
							invoDate:r[i].get('invoDate'),
							invoDueDate:r[i].get('invoDueDate'),invoAmount:r[i].get('invoAmount'),
							invoAmountWriteOff:r[i].get('invoAmountWriteOff'),
							prAmount:r[i].get('invoAmount')-r[i].get('invoAmountWriteOff'),
							currCode:r[i].get('currCode'),invoExRate:r[i].get('invoExRate'),
							custName:r[i].get('custName'),custSname:r[i].get('custSname'),
							invoIssuer:r[i].get('invoIssuer'),invoIssueDate:r[i].get('invoIssueDate'),
							invoChecker:r[i].get('invoChecker'),invoCheckDate:r[i].get('invoCheckDate')
							});
							store.insert(0,item);
							item.set('rowAction','N');
						}
					};
					this.recalculate();
				}
				win.close();
			}},this);
			win.addButton({text:C_CANCEL,handler : function(){win.close();}},this);
			win.show();
		}
		else{XMG.alert(SYS,M_SEL_SETTLE_OBJ_CURR);}
	};
	this.removePrit=function(){
		var r = sm.getSelections();
		if(r.length){				
			for(var i=0;i<r.length;i++){					
				r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');
				store.remove(r[i]);}
			this.recalculate();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	Fos.PrItemGrid.superclass.constructor.call(this,{id:'G_PR_I',border:false,autoScroll:true,clicksToEdit:1,store:store,sm:sm,cm:cm,height:350,
    listeners:{scope:this,afteredit:function(e){
    	var f=e.field;var r=e.record;
    	if(f=='prAmount'){
			if(e.value>r.get('invoAmount')-r.get('invoAmountWriteOff')){
				XMG.alert(SYS,M_PR_OVER,function(){
				r.set('prAmount',e.originalValue);
				e.grid.stopEditing();e.grid.startEditing(e.row,e.column);});
			}
			else{r.set('prAmount',e.value);this.recalculate();}
    	}
    }},
    tbar:[{text:C_ADD+'(A)',iconCls:'add',disabled:p.get('prStatus')!='0',scope:this,handler:this.add}, '-', 		
		{text:C_REMOVE+'(D)',iconCls:'remove',disabled:p.get('prStatus')!='0',scope:this,handler:this.removePrit
	}]});
};    
Ext.extend(Fos.PrItemGrid,Ext.grid.EditorGridPanel);
Fos.PrItemLookupWin = function(c,t,curr) {    
	var store = GS('INVO_Q','SInvoice',SInvoice,'invoId','DESC','','','id',false);
    store.load({params:{custId:c,invoType:t,currCode:curr,invoPrFlag:'0'}});
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm=new Ext.grid.ColumnModel({columns:[sm,
		{header:C_INVO_NO,dataIndex:"invoNo"},
		{header:C_TAX_NO,dataIndex:"invoTaxNo"},
		{header:C_SETTLE_OBJECT,dataIndex:"custSname"},		
		{header:C_AMOUNT,width:80,dataIndex:"invoAmount"},		
		{header:C_CURR,dataIndex:'currCode'},	
		{header:C_INVO_DATE,dataIndex:'invoDate',renderer:formatDate},	
		{header:C_DUE_DATE,dataIndex:'invoDueDate',renderer:formatDate},	
		{header:C_BANK,dataIndex:'invoBank'},
		{header:C_BANK_ACCOUNT,dataIndex:'invoAccount'},		
		{header:C_REMARKS,dataIndex:"invoRemarks"}
		],defaults:{sortable:true,width:100}});
    var g = new Ext.grid.GridPanel({ 
    id:'G_PRIT_LOOKUP',iconCls:'gen',header:false,height:300,width:600,store:store,sm:sm,cm:cm,loadMask: true});	
    Fos.PrItemLookupWin.superclass.constructor.call(this,{title:C_SEL_INVO,modal:true,layout:'fit',width:600,minWidth:300,
        minHeight:200,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:[{layout:'fit',border:false,
        items: [g]}]});
};
Ext.extend(Fos.PrItemLookupWin,Ext.Window);
Fos.PrTab = function(p) {
    this.grid=new Fos.PrItemGrid(p);
	this.save=function(){
		if(p.get('custId')==''){
			XMG.alert(SYS,M_SETTLE_OBJECT_REQIRED);return;};
		p.beginEdit();this.getForm().updateRecord(p);p.endEdit();
   	 	var xml = RTX(p,'SPr',SPr);
   	 	var a = this.grid.getStore().getModifiedRecords();
		if(a.length>0){var x = ATX(a,'SPrItem',SPrItem);xml=xml+x;};		
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'PR_S'},
			success: function(res){
				var c = XTR(res.responseXML,'SPr',SPr);
				var ra=p.get('rowAction');
				var f = SPr.prototype.fields;
				p.beginEdit();
   				for (var i = 0; i < f.keys.length; i++) {var fn = ''+f.keys[i];p.set(fn,c.get(fn));};
				if(ra=='N'){						
					this.setTitle((p.get('prType')=='R'?C_PR_R:C_PR_P)+'-'+p.get("prNo"));
					this.find('name','prNo')[0].setValue(p.get('prNo'));
					p.set('rowAction','M');
				}
				p.endEdit();
				var sa = this.grid.getStore();
				var a = XTRA(res.responseXML,'SPrItem',SPrItem);FOSU(sa,a,SPrItem);
				this.updateToolBar();
				XMG.alert(SYS,M_S);
			},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(xml)
		});
	};
	this.removePr=function(){
		p.set('rowAction','R');
		var xml = RTX(p,'SPr',SPr);
   	 	var a = this.grid.getStore().getRange();
		if(a.length>0){
			for(var i=0;i<a.length;i++){a[i].set('rowAction',a[i].get('rowAction')=='N'?'D':'R');};
			var x = ATX(a,'SPrItem',SPrItem);xml=xml+x;
		};
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'PR_S'},
			success: function(r){
				XMG.alert(SYS,M_S,function(){T_MAIN.remove('T_PR_'+p.get('id'));});},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
			xmlData:FOSX(xml)
		});
	};
	this.submit=function(){this.updateStatus('1');};
	this.uncheck0=function(){this.updateStatus('0');};
	this.check=function(){this.updateStatus('2');};
	this.uncheck=function(){this.updateStatus('1');};	
	this.check1=function(){this.updateStatus('3');};
	this.uncheck1=function(){this.updateStatus('2');};	
	this.cancel=function(){this.updateStatus('5');};
	this.send=function(){this.updateStatus('1');};
	this.back=function(){this.updateStatus('2');};
	this.arrive=function(){this.updateStatus('3');};
	this.fail=function(){this.updateStatus('4');};	
	this.pay=function(){
		var rid=GGUID();
		var e = new SVoucher({id:rid,voucId:rid,voucNo:'N'+rid,currCode:p.get('currCode'),
			voucType:p.get('prType'),voucDate:new Date(),voucExRate:getExRate(p.get('currCode'),'CNY'),
			custId:p.get('custId'),custName:p.get('custName'),custSname:p.get('custSname'),custBank:p.get('custBank'),custAccount:p.get('custAccount'),
			voucBank:p.get('prBank'),voucAccount:p.get('prAccount'),voucAmount:p.get('prAmount'),voucWriteOffAmount:p.get('prAmount'),voucFixAmount:0,
			voucPaymentType:p.get('prPaymentType'),voucUploadFlag:'0',
			voucStatus:'0',voucWriteOffStatus:'0',version:'0',rowAction:'N'});
			var t = T_MAIN.add(new Fos.VoucherTab(e,p.get('prId')));
			T_MAIN.setActiveTab(t);
	};	
	this.updateStatus=function(s){
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'PR_U',prId:p.get('prId'),prStatus:s},
			success: function(r){
				p.beginEdit();p.set('prStatus',s);p.set('version',p.get('version')+1);p.endEdit();
				this.updateToolBar();XMG.alert(SYS,M_S);},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);}});
	};
	var b1={itemId:'TB_1',text:C_SAVE+'(S)',iconCls:'save',disabled:NR(M1_S+(p.get('prType')=='R'?S_PR_R:S_PR_P)+F_M)||p.get('prStatus')!='0',scope:this,handler:this.save};
	var b2={itemId:'TB_2',text:C_REMOVE+'(D)',iconCls:'remove',disabled:NR(M1_S+(p.get('prType')=='R'?S_PR_R:S_PR_P)+F_R)||p.get('prStatus')!='0'||p.get('rowAction')=='N',scope:this,handler:this.removePr};
	var b3={itemId:'TB_3',text:C_SEND_BANK+'(B)',iconCls:'out',disabled:NR(M1_S+S_PR_R+F_M)||p.get('prStatus')!='0',scope:this,handler:this.send};
	var b4={itemId:'TB_4',text:C_BACK_BANK+'(H)',iconCls:'in',disabled:NR(M1_S+S_PR_R+F_M)||p.get('prStatus')!='1',scope:this,handler:this.back};
	var b5={itemId:'TB_5',text:C_ARRIVE_BANK+'(A)',iconCls:'dollar',disabled:NR(M1_S+S_PR_R+F_M)||p.get('prStatus')!='1',scope:this,handler:this.arrive};
	var b6={itemId:'TB_6',text:C_RECEIPT_FAILED+'(X)',iconCls:'cancel',disabled:NR(M1_S+S_PR_R+F_M)||p.get('prStatus')!='1',scope:this,handler:this.fail};
	var b7={itemId:'TB_7',text:C_COMMIT+'(T)',iconCls:'check',disabled:NR(M1_S+S_PR_P+F_M)||p.get('prStatus')!='0'||p.get('rowAction')=='N',scope:this,handler:this.submit};
	var b8={itemId:'TB_8',text:C_FIN_CHECK+'(C)',iconCls:'check',disabled:NR(M1_S+S_PR_P+F_A)||p.get('prStatus')!='1',scope:this,handler:this.check};
	var b9={itemId:'TB_9',text:'(U)',tooltip:C_FIN_CHECK_CANCEL,iconCls:'renew',disabled:NR(M1_S+S_PR_P+F_A)||p.get('prStatus')!='2',scope:this,handler:this.uncheck};
	var b10={itemId:'TB_10',text:C_MANAGER_CHECK+'(M)',iconCls:'check',disabled:NR(M1_S+S_PR_P+F_A2)||p.get('prStatus')!='2',scope:this,handler:this.check1};
	var b11={itemId:'TB_11',text:'(V)',tooltip:C_MANAGER_CHECK_CANCEL,iconCls:'renew',disabled:NR(M1_S+S_PR_P+F_A2)||p.get('prStatus')!='3',scope:this,handler:this.uncheck1};
	var b12={itemId:'TB_12',text:p.get('prType')=='R'?C_WRITEOFF_R:C_WRITEOFF_P+'(W)',iconCls:'dollar',disabled:NR(M1_S+(p.get('prType')=='R'?S_PR_R:S_PR_P)+F_WO)||p.get('prStatus')!='3',scope:this,handler:this.pay};
	var b13={itemId:'TB_13',text:C_INVALID+'(F)',iconCls:'cancel',disabled:NR(M1_S+(p.get('prType')=='R'?S_PR_R:S_PR_P)+F_F)||p.get('prStatus')=='0',scope:this,handler:this.cancel};
	var b14={itemId:'TB_14',text:C_EXPORT+'(E)',iconCls:'print',disabled:NR(M1_S+(p.get('prType')=='R'?S_PR_R:S_PR_P)+F_E)};
	var b15={itemId:'TB_15',disabled:true,text:C_STATUS_C+getPRST(p.get('prStatus'))};
	var b16={itemId:'TB_16',text:'(Q)',tooltip:C_COMMIT_CANCEL,iconCls:'renew',disabled:NR(M1_S+S_PR_P+F_M)||p.get('prStatus')!='1',scope:this,handler:this.uncheck0};
	this.updateToolBar = function(){
		var tb=this.getTopToolbar();
		tb.getComponent('TB_1').setDisabled(NR(M1_S+(p.get('prType')=='R'?S_PR_R:S_PR_P)+F_M)||p.get('prStatus')!='0');
    	tb.getComponent('TB_2').setDisabled(NR(M1_S+(p.get('prType')=='R'?S_PR_R:S_PR_P)+F_R)||p.get('prStatus')!='0'||p.get('rowAction')=='N');
    	if(p.get('prType')=='R'){
	    	tb.getComponent('TB_3').setDisabled(NR(M1_S+S_PR_R+F_M)||p.get('prStatus')!='0');
	    	tb.getComponent('TB_4').setDisabled(NR(M1_S+S_PR_R+F_M)||p.get('prStatus')!='1');
	    	tb.getComponent('TB_5').setDisabled(NR(M1_S+S_PR_R+F_M)||p.get('prStatus')!='1');
	    	tb.getComponent('TB_6').setDisabled(NR(M1_S+S_PR_R+F_M)||p.get('prStatus')!='1');
    	}
    	if(p.get('prType')=='P'){
	    	tb.getComponent('TB_7').setDisabled(NR(M1_S+S_PR_P+F_M)||p.get('prStatus')!='0'||p.get('rowAction')=='N');
	    	tb.getComponent('TB_8').setDisabled(NR(M1_S+S_PR_P+F_A)||p.get('prStatus')!='1');
	    	tb.getComponent('TB_9').setDisabled(NR(M1_S+S_PR_P+F_A)||p.get('prStatus')!='2');
	    	tb.getComponent('TB_10').setDisabled(NR(M1_S+S_PR_P+F_A2)||p.get('prStatus')!='2');
	    	tb.getComponent('TB_11').setDisabled(NR(M1_S+S_PR_P+F_A2)||p.get('prStatus')!='3');
	    	tb.getComponent('TB_16').setDisabled(NR(M1_S+S_PR_P+F_M)||p.get('prStatus')!='1');	
    	}
    	tb.getComponent('TB_12').setDisabled(NR(M1_S+(p.get('prType')=='R'?S_PR_R:S_PR_P)+F_WO)||p.get('prStatus')!='3');
    	tb.getComponent('TB_13').setDisabled(NR(M1_S+(p.get('prType')=='R'?S_PR_R:S_PR_P)+F_F)||p.get('prStatus')!='0');
    	tb.getComponent('TB_14').setDisabled(NR(M1_S+(p.get('prType')=='R'?S_PR_R:S_PR_P)+F_E));
    	tb.getComponent('TB_15').setText(C_STATUS_C+p.get('prType')=='R'?getERST(p.get('prStatus')):getPRST(p.get('prStatus')));
    };
    new Ext.KeyMap(Ext.getDoc(), {
		key:'sdbhaxtcumvwfeq',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('T_PR_'+p.get('id'));
		 	if(tc&&tc==T_MAIN.getActiveTab()){
		 		var tb=this.getTopToolbar();
		 		switch(k) {
		 		case Ext.EventObject.S:if(!tb.getComponent('TB_1').disabled) this.save();break;
		 		case Ext.EventObject.D:if(!tb.getComponent('TB_2').disabled) this.removePr();break;
		 		case Ext.EventObject.B:if(p.get('prType')=='R'&&!tb.getComponent('TB_3').disabled) this.send();break;	 		
		 		case Ext.EventObject.H:if(p.get('prType')=='R'&&!tb.getComponent('TB_4').disabled) this.back();break;
				case Ext.EventObject.A:if(p.get('prType')=='R'&&!tb.getComponent('TB_5').disabled) this.arrive();break;
				case Ext.EventObject.X:if(p.get('prType')=='R'&&!tb.getComponent('TB_6').disabled) this.fail();break;
				case Ext.EventObject.T:if(p.get('prType')=='P'&&!tb.getComponent('TB_7').disabled) this.submit();break;
				case Ext.EventObject.C:if(p.get('prType')=='P'&&!tb.getComponent('TB_8').disabled) this.check();break;
				case Ext.EventObject.U:if(p.get('prType')=='P'&&!tb.getComponent('TB_9').disabled) this.uncheck();break;
				case Ext.EventObject.M:if(p.get('prType')=='P'&&!tb.getComponent('TB_10').disabled) this.check1();break;
				case Ext.EventObject.V:if(p.get('prType')=='P'&&!tb.getComponent('TB_11').disabled) this.uncheck1();break;
				case Ext.EventObject.W:if(!tb.getComponent('TB_12').disabled) this.pay();break;
				case Ext.EventObject.F:if(!tb.getComponent('TB_13').disabled) this.cancel();break;
				case Ext.EventObject.Q:if(p.get('prType')=='P'&&!tb.getComponent('TB_16').disabled) this.uncheck0();break;
				}
		 	}
		},stopEvent:true,scope:this});
	Fos.PrTab.superclass.constructor.call(this, { 
	id: 'T_PR_'+p.get('id'),title:(p.get('prType')=='R'?C_PR_R:C_PR_P)+'-'+p.get('prNo'),
	autoScroll:true,labelAlign:'right',closable:true,labelWidth:80,border:false,width:800,layout:'border',
	tbar:p.get('prType')=='R'?[b1,'-',b2,'-',b3,'-',b4,'-',b5,'-',b6,'-',b12,'-',b13,'-',b14,'->','-',b15,'-']:[b1,'-',b2,'-',b7,'-',b16,'-',b8,'-',b9,'-',b10,'-',b11,'-',b12,'-',b13,'-',b14,'->','-',b15,'-'],
	items: [{region:'north',height:180,layout:'column',layoutConfig:{columns:4},
			bodyStyle:'padding:5px 0px 0px 0px',title:p.get('prType')=='R'?C_PR_R_INFO:C_PR_P_INFO,collapsible:true,
    	items:[{columnWidth:.5,layout:'form',border:false,items:[        	
        	{fieldLabel:C_SETTLE_OBJECT,itemCls:'required',tabIndex:1,
        		name:'custName',value:p.get('custName'),store:getCS(),enableKeyEvents:true,
           		allowBlank:false,xtype:'combo',displayField:'custCode',valueField:'custCode',
           		typeAhead:true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
           		tpl:custTpl,itemSelector:'div.list-item',listWidth:400,listeners:{scope:this,select:function(c,r,i){						
					p.set('custId',r.get('custId'));
					p.set('custSname',r.get('custCode'));
					p.set('custName',r.get('custNameCn'));					
					p.set('custBankCny',r.get('custBankCny'));
					p.set('custAccountCny',r.get('custAccountCny'));
					p.set('custBankUsd',r.get('custBankUsd'));
					p.set('custAccountUsd',r.get('custAccountUsd'));
					c.setValue(r.get('custNameCn'));
					if(this.find('name','currCode')[0].getValue()=='CNY'){
						this.find('name','custBank')[0].setValue(p.get('custBankCny'));
						this.find('name','custAccount')[0].setValue(p.get('custAccountCny'));
					}
					else if(this.find('name','currCode')[0].getValue()=='USD'){
						this.find('name','custBank')[0].setValue(p.get('custBankUsd'));
						this.find('name','custAccount')[0].setValue(p.get('custAccountUsd'));
					};
				},
				keydown:{fn:function(f,e){LC(f,e,p.get('prType')=='R'?'custArFlag':'custApFlag');},buffer:500}}}
				]},
			{columnWidth:.25,layout:'form',border:false,items:[{fieldLabel:p.get('prType')=='R'?C_PR_NO_R:C_PR_NO_P,tabIndex:2,name:'prNo',value:p.get('prNo'),xtype:'textfield',anchor:'90%'}]},
        	{columnWidth:.25,layout:'form',border:false,items: [{fieldLabel:p.get('prType')=='R'?C_PR_DATE_R:C_PR_DATE_P,tabIndex:3,name:'prDate',value:p.get('prDate'),xtype:'datefield',format:DATEF,anchor:'90%'}]},
    		{columnWidth:.25,layout:'form',border:false,items:[
         		{fieldLabel:C_CURR,itemCls:'required',disabled:true,tabIndex:4,name:'currCode',value:p.get('currCode'),store:getCURR_S(),xtype:'combo',displayField:'currCode',valueField:'currCode',typeAhead: true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
           		{fieldLabel:C_BANK,tabIndex:8,name:'prBank',value:p.get('prBank'),store:getCOBA_S(),xtype:'combo',displayField:'cobaBank',valueField:'cobaBank',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%',
            		listeners:{scope:this,select:function(c,r,i){this.find('name','prAccount')[0].setValue(r.get('cobaAccount'));}}}]},
         	{columnWidth:.25,layout:'form',border:false,
                items: [{fieldLabel:C_EX_RATE,tabIndex:5,name:'prExRate',value:p.get('prExRate'),disabled:p.get('currCode')=='CNY',xtype:'numberfield',decimalPrecision:4,anchor:'90%'},
                {fieldLabel:C_BANK_ACCOUNT,tabIndex:9,name:'prAccount',value:p.get('prAccount'),xtype:'textfield',anchor:'90%'}]},
            {columnWidth:.25,layout: 'form',border : false,
                items: [{fieldLabel:HL(C_AMOUNT),tabIndex:6,name:'prAmount',value:p.get('prAmount'),xtype:'numberfield',anchor:'90%'},
                {fieldLabel:C_CUST_BANK,tabIndex:10,name:'custBank',value:p.get('custBank'),xtype:'textfield',anchor:'90%'}]},
            {columnWidth:.25,layout: 'form',border : false,
                items: [{fieldLabel:C_SEWA,tabIndex:7,name:'prPaymentType',value:p.get('prPaymentType'),store:getSEWA_S(),xtype:'combo',displayField:'sewaName',valueField:'sewaId',typeAhead: true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
                {fieldLabel:C_CUST_BANK_ACCOUNT,tabIndex:11,name:'custAccount',value:p.get('custAccount'),xtype:'textfield',format:DATEF,anchor:'90%'}]},
            {columnWidth:.99,layout:'form',border:false,items:[{fieldLabel:C_REMARKS,name:'prRemarks',value:p.get('prRemarks'),tabIndex:12,xtype:'textarea',anchor:'90%'}]}
            ]},
		{title:C_INVO_LIST,layout:'fit',region:'center',deferredRender:false,items:this.grid}
        ]});
};
Ext.extend(Fos.PrTab, Ext.FormPanel);

Fos.BillGrid = function(t) {
	var store = GS('BILL_X','SBill',SBill,'billDate','DESC','billDate','S_BILL','id',true);
	var a=[];
	a[0]={key:'billType',value:t,op:1};
	var bp={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
	store.baseParams=bp;
    store.load({params:{start:0,limit:C_PS}});
    this.reset=function(){
    	store.baseParams=bp;
    	store.reload({params:{start:0,limit:C_PS}});
    };
	var showBill= function(p){
		var tab = T_MAIN.getComponent("T_BILL_" + p.get("id"));
		if(tab) {T_MAIN.setActiveTab(tab);}
		else {tab = T_MAIN.add(new Fos.BillTab(p));
		T_MAIN.setActiveTab(tab);tab.doLayout();}
	};
	this.search = function(){var w=new Fos.BillLookupWin(store,t);w.show();};
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm=new Ext.grid.ColumnModel({columns:[
		new Ext.grid.RowNumberer(),sm,
		{header:C_STATUS,dataIndex:"billStatus",renderer:getBIST},
		{header:C_BILL_NO,width:100,dataIndex:"billNo"},
		{header:C_BILL_OBJECT,width:200,dataIndex:"custName"},	
		{header:C_SUM_LOC,align:'right',renderer:numRender,dataIndex:"billAmount"},	
		{header:C_SUM_USD,align:'right',renderer:numRender,dataIndex:"billAmountUsd"},	
		{header:C_SUM_CNY,align:'right',renderer:numRender,dataIndex:"billAmountCny"},
		{header:C_BILL_DATE,dataIndex:"billDate",renderer:formatDate},
		{header:C_VESS,width:120,dataIndex:"billVessel"},
		{header:C_VOYA,dataIndex:"billVoyage"},
		{header:C_BL_NO,dataIndex:"billBlNo"},
		{header:C_BILL_BY,dataIndex:"billIssuer",renderer:getUSER},
		{header:C_AUDIT_BY,dataIndex:"billChecker",renderer:getUSER},		
		{header:C_CONS_NO,dataIndex:"billConsNo"},
		{header:C_REMARKS,dataIndex:"billRemarks"}
		],defaults:{sortable:true,width:80}});
	var rowCtxEvents={rowdblclick:function(grid, rowIndex, event){var c= grid.getSelectionModel().getSelected();if(c){showBill(c);}}};
	this.add=function(){
    	var id = GGUID();
		var r = new SBill({id:id,billId:id,billNo:'N'+id,
			billType:t,billDate:new Date(),currCode:'CNY',billStatus:'0',version:'0',rowAction:'N'});
		var tab = T_MAIN.add(new Fos.BillTab(r));
		T_MAIN.setActiveTab(tab);
    };
	this.edit=function(){var p=sm.getSelected();if(p){showBill(p);} else XMG.alert(SYS,M_NO_DATA_SELECTED);};
    this.removeBill=function(){
    	var a =sm.getSelections();
       	if(a.length>0){
       		XMG.confirm(SYS,M_R_C,function(btn){
           	if(btn=='yes'){
           		var b = false;
               	for(var i=0;i<a.length;i++){if(a[i].get('billStatus')!='0') b=true;}
               	if(b) XMG.alert(SYS,M_NO_REMOVE_COMMITED_BILL);
               	else {
               		var xml =SMTX4R(sm,'SBill','billId');
               		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'BILL_S'},
					success: function(){sm.each(function(p){store.remove(p);});XMG.alert(SYS,M_S);},
					failure: function(r,o){XMG.alert(SYS,M_F+r.responseText);},
					xmlData:FOSX(xml)});
               	}
           }});
		}
       	else XMG.alert(SYS,M_R_P);
    };    
	var kw = new Ext.form.TextField({listeners:{scope:this,specialkey:function(c,e){if(e.getKey()==Ext.EventObject.ENTER) this.fastSearch();}}});
    this.fastSearch=function(){
         var billNo=kw.getValue();
        if(!billNo){XMG.alert(SYS,M_INPUT_BILL_NO,function(b){kw.focus();});return;};
        var a=[];        
        var c=billNo.indexOf(',');
        var b=billNo.indexOf('..');
        if(c>=0){
            a[a.length]={key:'billNo',value:billNo,op:IN};
        }
        else if(b>=0){
            var ra=billNo.split('..');
            a[a.length]={key:'billNo',value:ra[0],op:GE};
            a[a.length]={key:'billNo',value:ra[1],op:LE};
        }
        a[a.length]={key:'billNo',value:billNo,op:LI};
        store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
        store.reload({params:{start:0,limit:C_PS},callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});
    };
    var b8={text:C_FAST_SEARCH+'(Q)',iconCls:'search',handler:this.fastSearch}; 
    var b9={text:C_RESET+'(F5)',iconCls:'refresh',handler:this.reset};
    new Ext.KeyMap(Ext.getDoc(), {
        key:'nmdf',ctrl:true,
        handler: function(k, e) {
            var tc = T_MAIN.getComponent('G_BILL_'+t);
            if(tc&&tc==T_MAIN.getActiveTab()){
                switch(k) {
                case Ext.EventObject.N: if(!NR(M1_S+(t=='R'?S_BILL_R:S_BILL_P)+F_M)) this.add();break;
                case Ext.EventObject.M: if(!NR(M1_S+(t=='R'?S_BILL_R:S_BILL_P)+F_M)) this.edit();break;
                case Ext.EventObject.D: if(!NR(M1_S+(t=='R'?S_BILL_R:S_BILL_P)+F_R)) this.removeBill();break;                   
                case Ext.EventObject.F: this.search();break;
                }
            }
        },stopEvent:true,scope:this});
    new Ext.KeyMap(Ext.getDoc(), {key:[116],
        handler: function(k, e) {
           var tc = T_MAIN.getComponent('G_BILL_'+t);
            if(tc&&tc==T_MAIN.getActiveTab()){switch(k) {case Ext.EventObject.F5:this.reset();break;}}
        },stopEvent: true,scope:this
    });
    this.pagingNav=function(page){
        var tc = T_MAIN.getComponent('G_BILL_'+t);
            if(tc&&tc==T_MAIN.getActiveTab()){
            var pt = this.getBottomToolbar();
            if (!pt[page].disabled) pt.onClick(page);
         }
    };
    this.nav = new Ext.KeyNav(Ext.getDoc(),{
        pageDown: this.pagingNav.createDelegate(this,['next']),
        pageUp: this.pagingNav.createDelegate(this, ['prev']),
        home: this.pagingNav.createDelegate(this,['first']),
        end: this.pagingNav.createDelegate(this,['last']),
        scope:this
    });
	Fos.BillGrid.superclass.constructor.call(this, {    
    id:'G_BILL_'+t,iconCls:'grid',store: store,title:t=='R'?C_BILL_R_LIST:C_BILL_P_LIST,header:false,autoScroll:true,
	sm:sm,cm:cm,stripeRows:true,closable:true,listeners:rowCtxEvents,view:new Ext.grid.GroupingView(groupViewCfg),
	tbar:[{text:C_ADD+'(N)',iconCls:'add',disabled:NR(M1_S+(t=='R'?S_BILL_R:S_BILL_P)+F_M),handler:this.add},'-',
		{text:C_EDIT+'(M)',iconCls:'option',disabled:NR(M1_S+(t=='R'?S_BILL_R:S_BILL_P)+F_M),handler:this.edit},'-',
		{text:C_REMOVE+'(D)',iconCls:'remove',disabled:NR(M1_S+(t=='R'?S_BILL_R:S_BILL_P)+F_R),handler:this.removeBill},'-',
		{text:C_SEARCH+'(F)',iconCls:'search',handler:this.search},'-',
		kw,b8,'-',b9,'-'],
	bbar:PTB(store,C_PS)});
};    
Ext.extend(Fos.BillGrid,Ext.grid.GridPanel);

Fos.BillTab = function(p){
    var store = GS('BIIT_Q','SBillItem',SBillItem,'biitId','DESC','','','id',false);
	if(p.get('rowAction')!='N') 
		store.load({params:{billId:p.get('billId')}});
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,
		{header:C_SETTLE_OBJECT,dataIndex:'custName'},
		{header:C_CHAR,dataIndex:'charName'},
		{header:C_UNIT,hidden:true,width:60,dataIndex:'unitName'},	
		{header:C_UNIT_PRICE,width:60,align:'right',renderer:numRender,dataIndex:'expeUnitPrice'},
		{header:C_QUANTITY,width:60,dataIndex:'expeNum'},
		{header:C_AMOUNT,hidden:true,width:60,align:'right',renderer:numRender,dataIndex:'expeTotalAmount'},
		{header:C_CURR,width:60,dataIndex:'currCode'},
		{header:C_EX_RATE,width:60,dataIndex:'expeExRate'},
		{header:C_CONS_NO,dataIndex:"consNo",renderer:consRender},
		{header:C_VESS,dataIndex:"consVessel"},
		{header:C_VOYA,dataIndex:"consVoyage"},
		{header:C_MBL_NO,dataIndex:"consMblNo"},
		{header:C_HBL_NO,dataIndex:"consHblNo"},
		{header:C_REMARKS,width:120,dataIndex:'expeRemarks'}
		],defaults:{sortable:true}});
	cm.defaultSortable = true;cm.defaultWidth=100;
    this.recalculate=function(){
    	var sum=0;
    	var cny=0;
    	var usd=0;
		var d=store.getRange();
		for(var i=0;i<d.length;i++){
			if(d[i].get('currCode')=='CNY'){
				cny=cny+parseFloat(d[i].get('expeTotalAmount'));
			}
			else if(d[i].get('currCode')=='USD'){
				usd=usd+parseFloat(d[i].get('expeTotalAmount'));
			}			
			sum=sum+parseFloat(d[i].get('expeTotalAmount')*d[i].get('expeExRate'));
		};
		this.find('name','billAmount')[0].setValue(sum);
		this.find('name','billAmountUsd')[0].setValue(usd);
		this.find('name','billAmountCny')[0].setValue(cny);
    };
    this.addExp=function(){
    	var custId = p.get('custId');
    	if(custId){
    		var win = new Fos.ExSearchWin(custId,p.get('billType'));
			win.addButton({text:C_OK,scope:this,handler:function(){
				var g = win.grid;
				var r = g.getSelectionModel().getSelections();
				if(r){
					var rn = store.getCount();
					for(var i=0;i<r.length;i++){
						if(rn==0 || store.findBy(function(rec,id){return rec.get('expeId')==r[i].get('expeId');})==-1){							
							var rid=GGUID();
							var it = new SBillItem({id:rid,biitId:rid,billId:p.get('billId'),expeId:r[i].get('expeId'),
							custId:r[i].get('custId'),custName:r[i].get('custName'),
							custSname:r[i].get('custSname'),
							charId:r[i].get('charId'),charName:r[i].get('charName'),
							unitId:r[i].get('unitId'),unitName:r[i].get('unitName'),
							currCode:r[i].get('currCode'),expeType:r[i].get('expeType'),
							expePaymentType:r[i].get('pateId'),
							expeDate:r[i].get('expeDate'),expeUnitPrice:r[i].get('expeUnitPrice'),
							expeCommission:r[i].get('expeCommission'),expeCommissionRate:r[i].get('expeCommissionRate'),
							expeNum:r[i].get('expeNum'),expeTotalAmount:r[i].get('expeTotalAmount'),
							expeExRate:r[i].get('expeExRate'),expeStatus:r[i].get('expeExStatus'),
							expeRemarks:r[i].get('expeRemarks'),expeForwardFlag:r[i].get('expeForwardFlag'),
							consNo:r[i].get('consNo'),							
							consVessel:r[i].get('consVessel'),consVoyage:r[i].get('consVoyage'),
							consMblNo:r[i].get('consMblNo'),consHblNo:r[i].get('consHblNo'),version:'0'});
							store.insert(0,it);
							it.set('rowAction','N');
						}
					};
					this.recalculate();
				}
				win.close();
			}},this);
			win.addButton({text:C_CANCEL,handler : function(){win.close();}},this);
			win.show();
		}
		else{XMG.alert(SYS,M_SEL_BILL_OBJ);this.find('name','custName')[0].focus();}
    };
    this.del=function(){
    	var r = sm.getSelections();
		if(r.length){
			for(var i=0;i<r.length;i++){r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');store.remove(r[i]);}
			this.recalculate();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
    };
    this.grid = new Ext.grid.EditorGridPanel({autoScroll:true,clicksToEdit:1,store:store,sm:sm,cm:cm,height:400,
    			tbar:[{text:C_ADD+'(A)',iconCls:'add',disabled:p.get('billStatus')!='0',scope:this,handler:this.addExp}, '-', 		
    			      {text:C_REMOVE+'(D)',iconCls:'remove',disabled:p.get('billStatus')!='0',scope:this,handler:this.del}]});
    this.save=function(){
    	if(p.get('custId')==''){
			XMG.alert(SYS,M_BILL_OBJECT_REQIRED);return;};
		p.beginEdit();this.getForm().updateRecord(p);p.endEdit();		
   	 	var xml = RTX(p,'SBill',SBill);
   	 	var a = this.grid.getStore().getModifiedRecords();
		if(a.length>0){var x = ATX(a,'SBillItem',SBillItem);xml=xml+x;};		
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'BILL_S'},
			success: function(res){
				var c = XTR(res.responseXML,'SBill',SBill);
				var ra=p.get('rowAction');
				var f = SBill.prototype.fields;
				if(c){
					p.beginEdit();
	   				for (var i = 0; i < f.keys.length; i++) {var fn = ''+f.keys[i];p.set(fn,c.get(fn));};
					if(ra=='N'){						
						this.setTitle((p.get('billType')=='R'?C_BILL_R:C_BILL_P)+'-'+p.get("billNo"));						
						this.find('name','billNo')[0].setValue(p.get('billNo'));
						p.set('rowAction','M');
					}
					p.endEdit();
				}
				var sa = this.grid.getStore();
				var a = XTRA(res.responseXML,'SBill',SBill);FOSU(sa,a,SBill);
				XMG.alert(SYS,M_S);
			},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(xml)
		});
    };
    this.removeBill=function(){
    	p.set('rowAction','R');
		var xml = RTX(p,'SBill',SBill); 
   	 	var a = this.grid.getStore().getRange();
		if(a.length){
			for(var i=0;i<a.length;i++){a[i].set('rowAction','R');};
			var x = ATX(a,'SBillItem',SBillItem);xml=xml+x;
		};
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'BILL_S'},
			success: function(r){XMG.alert(SYS,M_S,function(){T_MAIN.remove('T_BILL_' + p.get('id'));});},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
			xmlData:FOSX(xml)
		});
    };
    this.updateStatus=function(s){
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'BILL_U',billId:p.get('billId'),billStatus:s},
			success: function(r){
				p.set('billStatus',s);
				this.updateToolBar(s);
				XMG.alert(SYS,M_S);},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);}
		});
	};
	this.updateToolBar = function(s){
		var tb= this.getTopToolbar();
		tb.getComponent('TB_A').setDisabled(NR(M1_S+(p.get('billType')=='R'?S_BILL_R:S_BILL_P)+F_M)||s!='0');
    	tb.getComponent('TB_B').setDisabled(NR(M1_S+(p.get('billType')=='R'?S_BILL_R:S_BILL_P)+F_R)||s!='0');
    	tb.getComponent('TB_C').setDisabled(NR(M1_S+(p.get('billType')=='R'?S_BILL_R:S_BILL_P)+F_M)||s!='0');
    	tb.getComponent('TB_D').setDisabled(NR(M1_S+(p.get('billType')=='R'?S_BILL_R:S_BILL_P)+F_M)||s!='1');
    	tb.getComponent('TB_E').setDisabled(NR(M1_S+(p.get('billType')=='R'?S_BILL_R:S_BILL_P)+F_F)||s!='1');
    	tb.getComponent('TB_F').setDisabled(NR(M1_S+(p.get('billType')=='R'?S_INVO_R:S_INVO_P)+F_F)||s!='1');
    	tb.getComponent('TB_M').setText(C_STATUS_C+getBIST(p.get('billStatus')));
    };
    this.check=function(){this.updateStatus('1');};
    this.renew=function(){this.updateStatus('0');};
    this.cancel=function(){this.updateStatus('2');};
    this.expBillExcel=function(){EXPC('BILL','&aggressive=1&billId='+p.get('billId'));};
    this.expBillExEmail=function(){EXPM('','','','','BILL','&aggressive=1&billId='+p.get('billId'));};
    new Ext.KeyMap(Ext.getDoc(), {
		key:'sdcufe',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('T_BILL_'+p.get('id'));
		 	if(tc&&tc==T_MAIN.getActiveTab()){
		 		var tb=this.getTopToolbar();
		 		switch(k) {
		 		case Ext.EventObject.S: if(!tb.getComponent('TB_A').disabled) this.save();break;
		 		case Ext.EventObject.D: if(!tb.getComponent('TB_B').disabled) this.removeBill();break;
		 		case Ext.EventObject.C: if(!tb.getComponent('TB_C').disabled) this.check();break;	 		
		 		case Ext.EventObject.U: if(!tb.getComponent('TB_D').disabled) this.renew();break;
				case Ext.EventObject.F: if(!tb.getComponent('TB_E').disabled) this.cancel();break;
				case Ext.EventObject.E: if(!NR(M1_S+(p.get('billType')=='R'?S_BILL_R:S_BILL_P)+F_E)) this.expBillExcel();break;
				}
		 	}
		},stopEvent:true,scope:this});
    
    this.genInvoice=function(){
    	var a = store.getRange();
    	if(a.length>0){
    		var currCode=a[0].get('currCode');
    		for(var i=0;i<a.lenth;i++){
    			if(a[i].get('currCode')!=currCode){
    				currCode = a[i].get('currCode');
    				break;
    			}
    		}
    		if(currCode != a[0].get('currCode')){
    			var w=new Fos.CurrencyWin();
        		w.addButton({text:C_OK,scope:this,handler:function(){
        			currCode = w.findById('currCode').getValue();
        			w.close();
        			var id=GGUID();
        			var e = new SInvoice({invoId:id,id:id,invoNo:'N'+id,
        				custId:p.get('custId'),custName:p.get('custName'),custSname:p.get('custSname'),invoTitle:p.get('custName'),
        				currCode:currCode,
        				invoType:p.get('billType'),invoDate:new Date(),invoExRate:getExRate(currCode,'CNY'),invoWriteOffStatus:'0',
        				invoPrFlag:'0',invoUploadFlag:'0',invoStatus:'0',version:'0',rowAction:'N'});
        			var tab = T_MAIN.add(new Fos.InvoiceTab(e,p.get('billNo')));
        			T_MAIN.setActiveTab(tab);
        		}},this);
        		w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
        		w.show();
    		}
    		else{
    			var id=GGUID();
    			var e = new SInvoice({invoId:id,id:id,invoNo:'N'+id,
    				custId:p.get('custId'),custName:p.get('custName'),custSname:p.get('custSname'),invoTitle:p.get('custName'),
    				currCode:currCode,
    				invoType:p.get('billType'),invoDate:new Date(),invoExRate:getExRate(currCode,'CNY'),invoWriteOffStatus:'0',
    				invoPrFlag:'0',invoUploadFlag:'0',invoStatus:'0',version:'0',rowAction:'N'});
    			var tab = T_MAIN.add(new Fos.InvoiceTab(e,p.get('billNo')));
    			T_MAIN.setActiveTab(tab);
    		}
    	}
    	
    };
    
	Fos.BillTab.superclass.constructor.call(this, { 
	id: 'T_BILL_' + p.get('id'),title:(p.get('billType')=='R'?C_BILL_R:C_BILL_P)+'-'+p.get('billNo'),layout:'border',
	autoScroll:true,labelAlign:'right',closable:true,labelWidth:70,bodyStyle:'padding:0px 0px 20px 0px',border : false,width:800,
	tbar:[{itemId:'TB_A',text:C_SAVE+'(S)',iconCls:'save',disabled:NR(M1_S+(p.get('billType')=='R'?S_BILL_R:S_BILL_P)+F_M)||p.get('billStatus')!='0',scope:this,handler:this.save},'-',
	{itemId:'TB_B',text:C_REMOVE+'(D)',iconCls:'remove',disabled:NR(M1_S+(p.get('billType')=='R'?S_BILL_R:S_BILL_P)+F_R)||p.get('billStatus')!='0',scope:this,handler:this.removeBill},'-',
	{itemId:'TB_C',text:C_BILL_CHECK+'(C)',iconCls:'check',disabled:NR(M1_S+(p.get('billType')=='R'?S_BILL_R:S_BILL_P)+F_M)||p.get('billStatus')!='0',scope:this,handler:this.check},'-',
	{itemId:'TB_D',text:C_BILL_CHECK_CANCEL+'(U)',iconCls:'renew',disabled:NR(M1_S+(p.get('billType')=='R'?S_BILL_R:S_BILL_P)+F_M)||p.get('billStatus')!='1',scope:this,handler:this.renew},'-',
	{itemId:'TB_E',text:C_INVALID+'(F)',iconCls:'cancel',disabled:NR(M1_S+(p.get('billType')=='R'?S_BILL_R:S_BILL_P)+F_F)||p.get('billStatus')!='1',scope:this,handler:this.cancel},'-',
	{itemId:'TB_F',text:C_GEN_INVOICE,iconCls:'save',disabled:NR(M1_S+(p.get('billType')=='R'?S_INVO_R:S_INVO_P)+F_M)||p.get('billStatus')!='1',scope:this,handler:this.genInvoice},'-',
	{text:C_EXPORT+'(E)',iconCls:'print',disabled:NR(M1_S+(p.get('billType')=='R'?S_BILL_R:S_BILL_P)+F_E),scope:this,
		menu: {items: [
		   		{text:C_BILL,menu:{items:[{text:'Excel',scope:this,handler:this.expBillExcel},
		   		{text:C_EMAIL,scope:this,handler:this.expBillExEmail},
		   		{text:C_FAX,scope:this,handler:this.expBillFax}]}}
		   		]}},'->','-',
	{itemId:'TB_M',disabled:true,text:C_STATUS_C+getBIST(p.get('billStatus'))},'-'],
	bbar:[{xtype:'tbtext',text:C_CREATE_BY_C+getUSER(p.get('createBy'))},'-',
			{xtype:'tbtext',text:C_CREATE_TIME_C+formatDateTime(p.get('createTime'))},'-',
			{xtype:'tbtext',text:C_MODIFY_BY_C+getUSER(p.get('modifyBy'))},'-',
			{xtype:'tbtext',text:C_MODIFY_TIME_C+formatDateTime(p.get('modifyTime'))},'-',
			{xtype:'tbtext',text:C_AUDIT_BY_C+getUSER(p.get('invoChecker'))},'-',
			{xtype:'tbtext',text:C_AUDIT_TIME_C+formatDate(p.get('invoCheckDate'))}
			],
	items: [{region:'north',height:80,layout:'column',layoutConfig:{columns:4},deferredRender:false,title:C_BILL_INFO,collapsible:true,
    	items:[{columnWidth:.25,layout:'form',border:false,
        	items:[
        	{fieldLabel:HL(C_BILL_OBJECT),tabIndex:1,name:'custName',value:p.get('custName'),
        		store:getCS(),enableKeyEvents:true,
            		allowBlank:false,xtype:'combo',displayField:'custCode',valueField:'custCode',
            		typeAhead:true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
            		tpl:custTpl,itemSelector:'div.list-item',listWidth:400,listeners:{scope:this,select:function(c,r,i){
						p.set('custId',r.get('custId'));
						p.set('custSname',r.get('custCode'));
						p.set('custName',r.get('custNameCn'));
						c.setValue(r.get('custNameCn'));
					},
					keydown:{fn:function(f,e){LC(f,e,p.get('billType')=='R'?'custArFlag':'custApFlag');},buffer:BF}}},
                {fieldLabel:HL(C_BILL_DATE),tabIndex:3,name:'billDate',value:p.get('billDate'),xtype:'datefield',format:DATEF,anchor:'95%'}]
             },
            {columnWidth:.25,layout:'form',border:false,
                items: [{fieldLabel:C_BILL_NO,tabIndex:4,name:'billNo',disabled:true,
                	value:p.get('billNo'),xtype:'textfield',anchor:'95%'},                
                {fieldLabel:C_REMARKS,tabIndex:23,name:'billRemarks',
                	value:p.get('billRemarks'),xtype:'textfield',anchor:'95%'}]
            },
            {columnWidth:.25,layout: 'form',border : false,
                items: [          
                {fieldLabel:C_SUM_USD,tabIndex:11,name:'billAmountUsd',
                	value:p.get('billAmountUsd'),disabled:true,xtype:'textfield',anchor:'95%'},
                {fieldLabel:C_SUM_LOC,tabIndex:11,name:'billAmount',
                	value:p.get('billAmount'),disabled:true,xtype:'textfield',anchor:'95%'}
                ]
            },
            {columnWidth:.25,layout: 'form',border : false,
                items: [{fieldLabel:C_SUM_CNY,tabIndex:11,name:'billAmountCny',
                	value:p.get('billAmountCny'),disabled:true,xtype:'textfield',anchor:'95%'}           	
               ]
            }]
       	},
		{layout:'fit',region:'center',deferredRender:false,labelWidth:40,labelAlign:'top',
       		title:C_EXPE_LINE,items:this.grid}
	]});
};
Ext.extend(Fos.BillTab, Ext.FormPanel);

Fos.InvoNoGrid = function() {
	var store = GS('INNO_Q','SInvoiceNo',SInvoiceNo,'innoId','DESC','','S_INNO','id',false);
	store.load();
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	new Ext.grid.RowNumberer(),
	{header:C_INNO_PREFIX,dataIndex:'innoPrefix',editor:new Ext.form.TextField()},
	{header:C_INNO_START,dataIndex:'innoStartNo',editor:new Ext.form.NumberField()},
	{header:C_INNO_END,dataIndex:'innoEndNo',editor:new Ext.form.NumberField()},
	{header:C_INNO_NEXT,dataIndex:'innoNextNo',editor:new Ext.form.NumberField()},
	{header:C_ACTIVE,dataIndex:'active',renderer:function(v){return v==1?'Y':'N';}},
	{header:C_ACTIVE_DATE,dataIndex:'innoStartDate',renderer:formatDate,width:80}],defaults:{sortable:true,width:80}});
	this.active=function(){
		var b =sm.getSelected();
		if(b){
			Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'INNO_U',innoId:b.get('innoId')},
			success: function(r){store.reload();XMG.alert(SYS,M_S);},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);}});			
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	Fos.InvoNoGrid.superclass.constructor.call(this,{
	id:'G_INNO',title:C_INNO_MGT,closable:true,
		border:false,height:200,autoScroll:true,sm:sm,cm:cm,store:store,sortInfo:{field:'innoId',direction:'DESC'},
		tbar:[{text:C_ADD,disabled:NR(M1_S+S_INNO+F_M),iconCls:'add',scope:this,handler:function(){				
				var r = new SInvoiceNo({id:GGUID(),innoId:0,innoPrefix:'',innoStartNo:'',innoEndNo:'',innoNextNo:'',
				innoStartDate:'',active:'0',version:'0'});
				store.insert(0,r);r.set('rowAction','N');sm.selectFirstRow();this.startEditing(0,1);
			}},'-',
			{text:C_REMOVE,disabled:NR(M1_S+S_INNO+F_R),iconCls:'remove',scope:this,handler:function(){FOS_REMOVE(sm,store);}},'-',
			{text:C_SAVE,disabled:NR(M1_S+S_INNO+F_M),iconCls:'save',handler:function(){FOS_POST(store,'SInvoiceNo',SInvoiceNo,'INNO_S');}},'-',
			{text:C_ACTIVE,disabled:NR(M1_S+S_INNO+F_A),iconCls:'check',scope:this,handler:this.active}
		]
	});
};
Ext.extend(Fos.InvoNoGrid, Ext.grid.EditorGridPanel);
Fos.ExhiWin = function() {
	var frm = new Ext.form.FormPanel({labelWidth:60,bodyStyle:'padding:5px',items:[
    	{fieldLabel:C_EXHI_TYPE,id:'exhiType',xtype:'combo',store:EXHI_T_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
    	{fieldLabel:C_START_DATE,id:'exhiCheckDateF',xtype:'datefield',format:DATEF,anchor:'90%'},
    	{fieldLabel:C_END_DATE,id:'exhiCheckDateT',xtype:'datefield',format:DATEF,anchor:'90%'}]
    });
    Fos.ExhiWin.superclass.constructor.call(this, {title:C_EXHI_BATCH,modal:true,width:300,
        height:150,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:frm});
};
Ext.extend(Fos.ExhiWin,Ext.Window);
Fos.ExhiGrid = function() {
	var store = GS('EXHI_Q','TExportHistory',TExportHistory,'exhiId','DESC','','','',true);
	store.load({params:{start:0,limit:C_PS}});
	var cm=new Ext.grid.ColumnModel({columns:[new Ext.grid.RowNumberer(),
	{header:C_BATCH_NO,dataIndex:'exhiId',width:50},
	{header:C_EXHI_TYPE,dataIndex:'exhiType',width:100,renderer:getEXHI_T},
	{header:C_START_DATE,dataIndex:'exhiCheckDateF',width:80},
	{header:C_END_DATE,dataIndex:'exhiCheckDateT',width:80},
	{header:C_EXHI_FILE,dataIndex:'exhiFileName',width:200,renderer:exhiRender},
	{header:C_CREATE_TIME,dataIndex:'createTime',width:80}],defaults:{sortable:true,width:100}});
	this.add=function(){
		var w = new Fos.ExhiWin();
		w.addButton({text:C_OK,handler:function(){
			var exhiType = w.findById('exhiType').getValue();
			var exhiCheckDateF = w.findById('exhiCheckDateF').getValue().format(DATEF);
			var exhiCheckDateT = w.findById('exhiCheckDateT').getValue().format(DATEF);	
			Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'EXHI_E',
				exhiType:exhiType,exhiCheckDateF:exhiCheckDateF,exhiCheckDateT:exhiCheckDateT},
				success: function(r){XMG.alert(SYS,M_S);store.reload({params:{start:0,limit:C_PS}});},
				failure: function(r){XMG.alert(SYS,M_F+r.responseText);}
			});
			w.close();
		}},this);
		w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
		w.show();
	};
	Fos.ExhiGrid.superclass.constructor.call(this,{
	id:'G_EXHI',title:C_EXHI_BATCH,closable:true,border:false,autoScroll:true,cm:cm,store:store,
	tbar:[{text:C_ADD,disabled:NR(M1_S+S_INNO+F_M),iconCls:'add',scope:this,handler:this.add}],
	bbar:PTB(store,C_PS)});
};
Ext.extend(Fos.ExhiGrid, Ext.grid.GridPanel);

Fos.BalaGrid = function() {
	var store = GS('BALA_Q','SBalance',SBalance,'balaId','DESC','','','',false);
	store.load({params:{start:0,limit:C_PS}});
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true});
	var cm=new Ext.grid.ColumnModel({columns:[new Ext.grid.RowNumberer(),sm,
	{header:C_CUST_NAME,dataIndex:'custName',width:200},
	{header:C_CUST_SNAME,dataIndex:'custSname',width:120},
	{header:C_CURR,dataIndex:'currCode',width:80},
	{header:C_BALANCE,dataIndex:'balaAmount',width:80,renderer:numRender},
	{header:C_REMARKS,dataIndex:'remarks',editor:new Ext.form.TextField(),width:80}
	],defaults:{sortable:true,width:100}});
	this.list=function(){
        var b = sm.getSelected();
        if(b){var frm = new Fos.BaliWin(b);frm.show();}
        else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	var rowCtxEvents = {rowdblclick: this.list};
	
	this.save=function(){
		var a = store.getModifiedRecords();		
		if(a.length){			
			var x = ATX(a,'SBalance',SBalance);
			if(x!=''){
				Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'BALA_S'},
					success: function(res){
						var a = XTRA(res.responseXML,'SBalance',SBalance);
						FOSU(store,a,SBalance);
						XMG.alert(SYS,M_S);
					},
					failure: function(res){
						XMG.alert(SYS,M_F+res.responseText);
					},
					xmlData:FOSX(x)
				});
			}
		}
		else 
			XMG.alert(SYS,M_NC);
	};	
	
	Fos.BalaGrid.superclass.constructor.call(this,{
	id:'G_BALA',title:C_CUST_BALANCE,closable:true,border:false,autoScroll:true,
	cm:cm,sm:sm,store:store,clicksToEdit:1,
	listeners:rowCtxEvents,tbar:[
	    {text:C_BALA_LIST,iconCls:'grid',scope:this,handler:this.list},
	    {text:C_SAVE,iconCls:'save',scope:this,handler:this.save}
	],
	bbar:PTB(store,C_PS)});
};
Ext.extend(Fos.BalaGrid, Ext.grid.EditorGridPanel);

Fos.BaliWin = function(b){
    var store = GS('VOUC_X','SVoucher',SVoucher,'voucDate','DESC','voucDate','S_VOUC','id',true);
    var a=[];
    a[0]={key:'voucFixAmount',value:0,op:NE};
    a[1]={key:'custId',value:b.get('custId'),op:EQ};
    a[2]={key:'currCode',value:b.get('currCode'),op:EQ};
    var bp={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
    store.baseParams=bp;
    store.load({params:{start:0,limit:C_PS}});
    var cm=new Ext.grid.ColumnModel({columns:[
        new Ext.grid.RowNumberer(),
        {header:C_VOUC_NO,width:100,dataIndex:"voucNo"},
        {header:C_DATE,dataIndex:"voucDate",renderer:formatDate},
        {header:C_CHAR_TYPE,dataIndex:"voucType",renderer:function(v){return v=='R'?C_R:C_P;}},        
        {header:C_CURR,width:60,dataIndex:"currCode"},
        {header:C_FIX_AMOUNT,align:'right',renderer:numRender,dataIndex:"voucFixAmount"},
        {header:C_INVO_NO,dataIndex:"voucInvoiceNo"},
        {header:C_TAX_NO,dataIndex:"voucTaxInvoiceNo"},
        {header:C_REMARKS,dataIndex:"voucRemarks"}
        ],defaults:{sortable:true,width:80}});
    var g=new Ext.grid.GridPanel({store:store,autoScroll:true,cm:cm,stripeRows:true});
    Fos.BaliWin.superclass.constructor.call(this, {title:C_FIX_LIST,modal:true,width:600,
        height:400,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',layout:'fit',items:g}); 
};
Ext.extend(Fos.BaliWin,Ext.Window);

Fos.ExalWin = function(store,p) {
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm=new Ext.grid.ColumnModel({columns:[
			{header:C_CONS_NO,width:120,dataIndex:"consNo",renderer:consRender},
          {header:C_SETTLE_OBJECT,width:120,dataIndex:"custSname"},
          {header:C_CHAR,dataIndex:"charName"},
          {header:C_UNIT,dataIndex:"unitName"},
          {header:C_QUANTITY,dataIndex:"expeNum",align:'right',renderer:rateRender},
          {header:C_UNIT_PRICE,dataIndex:"expeUnitPrice",align:'right',renderer:rateRender},
          {header:C_CURR,dataIndex:'currCode'},
          {header:C_EX_RATE,dataIndex:"expeExRate",align:'right',renderer:rateRender},
          {header:C_AMOUNT,dataIndex:"expeTotalAmount",align:'right',renderer:numRender},
          {header:C_COST_PRICE,dataIndex:"expeInnerPrice",align:'right',renderer:numRender},
          {header:C_COST_TOTAL,dataIndex:"expeInnerAmount",align:'right',renderer:numRender},
          {header:C_PPCC,dataIndex:'pateCode',width:40},
          {header:C_COMMISION_RATE,dataIndex:"expeCommissionRate",align:'right',renderer:rateRender},
          {header:C_COMMISION,dataIndex:"expeCommission",align:'right',renderer:numRender}],defaults:{sortable:true,width:80}});
	var expeGrid = new Ext.grid.GridPanel({region:'north',split:true,collapsible:true,title:C_EXPE_FOR_ALLOCATION,border:true,height:100,
		autoScroll:true,store:store,sm:sm,cm:cm});
	var consS = new Ext.data.Store({url: SERVICE_URL+'?A=CONS_X',baseParams:{mt:'JSON'},
    	reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'FConsign'}, FConsign)});
	var sm2=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm2=new Ext.grid.ColumnModel({columns:[sm,
 		{header:C_CONS_NO,width:120,dataIndex:"consNo",renderer:consRender},
 		{header:C_BOOKER,width:200,dataIndex:"custSname"},
 		{header:C_CONS_DATE,dataIndex:"consDate",renderer:formatDate},	
 		{header:C_PACKAGES,width:60,dataIndex:"consTotalPackages",align:'right',css:'font-weight:bold;'},
 		{header:C_GW,dataIndex:"consTotalGrossWeight",align:'right',css:'font-weight:bold;'},
 		{header:C_CBM,dataIndex:"consTotalMeasurement",align:'right',css:'font-weight:bold;'},
 		{header:C_VESS,dataIndex:"vessName"},
 		{header:C_VOYA,dataIndex:"voyaName"},
 		{header:C_MBL_NO,dataIndex:"consMblNo"},
 		{header:C_HBL_NO,dataIndex:"consHblNo"},
 		{header:C_SAIL_DATE,dataIndex:"consShipDate",renderer:formatDate},	
 		{header:C_POL,width:100,dataIndex:"consPolEn"},
 		{header:C_POD,width:100,dataIndex:"consPodEn"},
 		{header:C_POT,width:100,dataIndex:"consPotEn"},
 		{header:C_CARRIER,width:200,dataIndex:"consCarrierName"},
 		{header:C_BOOK_AGENCY,width:200,dataIndex:"consBookingAgencyName"},
 		{header:C_M_CONS_NO,dataIndex:"consMasterConsNo"},
 		{header:C_REMARKS,dataIndex:"consRemarks"}],defaults:{sortable:true,width:80}});
 	this.impChild=function(){
		var s = new Ext.data.Store({url: SERVICE_URL+'?A=CONS_X',baseParams:{mt:'JSON'},
	    	reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'FConsign'}, FConsign)});
		s.load({params:{consMasterId:p.get('consId')},scope:this,callback:function(r){
			if(r.length){
				for(var i=0;i<r.length;i++){
					if(store.findBy(function(rec,id){return rec.get('consId')==r[i].get('consId');})==-1&&consS.findBy(function(rec,id){return rec.get('consId')==r[i].get('consId');})==-1){
						consS.insert(exalS.getTotalCount(),r[i]);
					}
				}
				this.reCalculate();
			} 
			else XMG.alert(SYS,M_NOT_FOUND);}});
	};
	this.impVoyCons=function(){
		var s = new Ext.data.Store({url: SERVICE_URL+'?A=CONS_X',baseParams:{mt:'JSON'},
	    	reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'FConsign'}, FConsign)});
		s.load({params:{vessId:p.get('vessId'),voyaName:p.get('voyaName')},scope:this,callback:function(r){
			if(r.length){
				for(var i=0;i<r.length;i++){
					if(store.findBy(function(rec,id){return rec.get('consId')==r[i].get('consId');})==-1&&consS.findBy(function(rec,id){return rec.get('consId')==r[i].get('consId');})==-1){
						consS.insert(0,r[i]);
					}
				}
				this.reCalculate();
			} 
			else XMG.alert(SYS,M_NOT_FOUND);}});
	};
	var sumC = new Ext.form.TextField({width:120,disabled:true});
	var sumG = new Ext.form.TextField({width:120,disabled:true});
	var sumP = new Ext.form.TextField({width:120,disabled:true});
	var sumM = new Ext.form.TextField({width:120,disabled:true});
	this.c=0;this.g=0;this.p=0;this.m=0;
	this.reCalculate=function(){
		var c=0;var g=0;var p=0;var m=0;
		var a=consS.getRange();
		for(var i=0;i<a.length;i++){
			c=c+1;
			g=g+a[i].get('consTotalGrossWeight');
			p=p+a[i].get('consTotalPackages');
			m=m+a[i].get('consTotalMeasurement');
		}
		sumC.setValue(c);
		sumG.setValue(g);
		sumP.setValue(p);
		sumM.setValue(m);
		this.c=c;this.p=p;this.g=g;this.m=m;
	};
	this.removeCons=function(){
		var r = sm2.getSelections();
		if(r.length){
			for(var i=0;i<r.length;i++){consS.remove(r[i]);this.reCalculate();}			
		}
		else XMG.alert(SYS,M_R_P);
	};
	this.allocate=function(t){
		var a=store.getRange();
		var r=consS.getRange();
		if(r.length){
			var unitPrice=0;var num=0;var totalAmount=0;var innerPrice=0;var innerAmount=0;var base=0;			
			for(var j=0;j<r.length;j++){
				if(t=='C'){
					num=1;base=this.c;
				}
				else if(t=='G'){
					num=r[j].get('consTotalGrossWeight');base=this.g;
				}
				else if(t=='P'){
					num=r[j].get('consTotalPackages');base=this.p;
				}
				else if(t=='M'){
					num=r[j].get('consTotalMeasurement');base=this.m;
				}
				unitPrice=a[0].get('expeTotalAmount')/base;
				innerPrice=a[0].get('expeInnerAmount')/base;
				totalAmount=unitPrice*num;					
				innerAmount=innerPrice*num;
				var e = new SExpense({});var id=GGUID();
				var f = SExpense.prototype.fields;
				for (var i=0;i<f.keys.length;i++){var fn=''+f.keys[i];e.set(fn,a[0].get(fn));}
				e.set('id',id);e.set('expeId',id);
				e.set('expeUnitPrice',unitPrice);e.set('expeNum',num);e.set('expeTotalAmount',totalAmount);e.set('expeNum2',1);
				e.set('expeInnerPrice',innerPrice);e.set('expeInnerAmount',innerAmount);				
				e.set('consId',r[j].get('consId'));e.set('consNo',r[j].get('consNo'));
				e.set('consMblNo',r[j].get('consMblNo'));e.set('consHblNo',r[j].get('consHblNo'));
				e.set('consVessel',r[j].get('consVessel'));e.set('consVoyage',r[j].get('consVoyage'));
				e.set('consSailDate',r[j].get('consSailDate'));e.set('consBizClass',r[j].get('consBizClass'));
				e.set('consBizType',r[j].get('consBizType'));e.set('consShipType',r[j].get('consShipType'));
				e.set('consCustId',r[j].get('custId'));e.set('consCustName',r[j].get('custName'));
				e.set('version','1');e.set('expeInvoiceNo','');e.set('expeInvoiceDate','');
				e.set('expeInvoiceAmount',0);e.set('expeWriteOffAmount',0);
				e.set('expeWriteOffRcAmount',0);e.set('expeStatus',0);e.set('expeBillStatus',0);e.set('expeInvoiceStatus',0);
				e.set('expeWriteoffStatus',0);e.set('expeAllocationFlag',0);e.set('expeAllocatedFlag',1);
				e.set('expeIdM',p.get('expeId'));e.set('consIdM',p.get('consId'));e.set('consNoM',p.get('consNo'));
				exalS.insert(exalS.getTotalCount(),e);e.set('rowAction','N');
			}			
		}
		else XMG.alert(SYS,C_SEL_ALLOCATION_CONS);
	};
	this.save=function(){
		var a = exalS.getRange();
		if(a.length){			
			var x = ATX(a,'SExpense',SExpense);
			var ra=store.getRange();
			var r=ra[0];
			r.set('expeAllocationFlag',1);r.set('rowAction','M');
			x=x+RTX(r,'SExpense',SExpense);
			Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'EXPE_S'},
				success: function(res){
					var ra = XTRA(res.responseXML,'SExpense',SExpense);FOSU(exalS,ra,SExpense);
					XMG.alert(SYS,M_S);},
				failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
				xmlData:FOSX(x)
			});
		}
		else XMG.alert(SYS,M_NC);
	};
	var tb1={xtype:'tbtext',text:C_SUM_CONS};
	var tb2={xtype:'tbtext',text:C_SUM_PACK};
	var tb3={xtype:'tbtext',text:C_SUM_GW};
	var tb4={xtype:'tbtext',text:C_SUM_CBM};
 	var consGrid = new Ext.grid.GridPanel({region:'center',collapsible:true,title:C_CONS_FOR_ALLOCATION,border:true,height:100,
		autoScroll:true,store:consS,sm:sm2,cm:cm2,
		tbar:[{text:C_ADD,iconCls:'add',scope:this,handler:this.addCons},'-',
			{text:C_REMOVE,iconCls:'remove',scope:this,handler:this.removeCons},'-',
			{text:C_IMP_CHILD,iconCls:'save',scope:this,handler:this.impChild},'-',
			{text:C_IMP_VOY_CONS,iconCls:'save',scope:this,handler:this.impVoyCons},'-',
			{text:C_ALLOCATION,iconCls:'copy',scope:this,menu: {items: [
              	{text:C_BY_CONS,iconCls:'copy',disabled:false,scope:this,handler:function(){this.allocate('C');}},
  				{text:C_BY_GW,iconCls:'copy',disabled:false,scope:this,handler:function(){this.allocate('G');}},
  				{text:C_BY_PACK,iconCls:'copy',disabled:false,scope:this,handler:function(){this.allocate('P');}},
  				{text:C_BY_CBM,iconCls:'copy',disabled:false,scope:this,handler:function(){this.allocate('M');}}
              	]}}
			],
		bbar:[tb1,sumC,'-',tb2,sumP,'-',tb3,sumG,'-',tb4,sumM]
 	});
 	
 	this.removeExal=function(){
		var r = sm3.getSelections();
		if(r.length){
			for(var i=0;i<r.length;i++){exalS.remove(r[i]);this.reCalculate();}			
		}
		else XMG.alert(SYS,M_R_P);
	};
 	var exalS=GS('EXPE_Q','SExpense',SExpense,'expeId','DESC','','','',false);
 	var sm3=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm3=new Ext.grid.ColumnModel({columns:[sm,
	       {header:C_CONS_NO,width:120,dataIndex:"consNo",renderer:consRender},
          {header:C_SETTLE_OBJECT,width:100,dataIndex:"custSname"},
          {header:C_CHAR,width:80,dataIndex:"charName"},
          {header:C_UNIT,dataIndex:"unitName"},
          {header:C_QUANTITY,dataIndex:"expeNum",align:'right',renderer:rateRender},
          {header:C_UNIT_PRICE,width:80,dataIndex:"expeUnitPrice",align:'right',renderer:rateRender},
          {header:C_CURR,dataIndex:'currCode'},
          {header:C_EX_RATE,dataIndex:"expeExRate",align:'right',renderer:rateRender},
          {header:C_AMOUNT,width:80,dataIndex:"expeTotalAmount",align:'right',renderer:numRender},
          {header:C_COST_PRICE,width:80,dataIndex:"expeInnerPrice",align:'right',renderer:numRender},
          {header:C_COST_TOTAL,width:80,dataIndex:"expeInnerAmount",align:'right',renderer:numRender},
          {header:C_PPCC,dataIndex:'pateCode',width:40},
          {header:C_COMMISION_RATE,dataIndex:"expeCommissionRate",align:'right',renderer:rateRender},
          {header:C_COMMISION,dataIndex:"expeCommission",align:'right',renderer:numRender}],defaults:{sortable:true,width:60}});
	var exalGrid = new Ext.grid.GridPanel({region:'south',collapsible:true,split:true,title:C_EXPE_ALLOCATED,border:true,height:200,
		autoScroll:true,store:exalS,sm:sm3,cm:cm3,
		tbar:[{text:C_ADD,iconCls:'add',scope:this,handler:this.addCons},'-',
				{text:C_REMOVE,iconCls:'remove',scope:this,handler:this.removeExal},'-',
				{text:C_SAVE,iconCls:'save',scope:this,handler:this.save}
				]});
	
	Fos.ExalWin.superclass.constructor.call(this, {title:C_EXPE_ALLOCATION,modal:true,width:800,height:600,maximizable:true,
		plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',layout:'border',items:[expeGrid,consGrid,exalGrid
		    ]}); 
};
Ext.extend(Fos.ExalWin, Ext.Window);

Fos.SectionExGrid = function(p,section,parent) {
	var store = GS('EXPE_PERM_Q','SExpense',SExpense,'expeId','DESC','','','',false);
	store.load({params:{consId:p.get('consId'),section:section}});
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'));
	m=m+M3_EXPE+S_AP; 
	var t1={header:C_SETTLE_OBJECT,width:200,dataIndex:"custName",align:'left',
		editor:new Ext.form.ComboBox({displayField:'custCode',valueField:'custNameCn',triggerAction:'all',
        mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,allowBlank:false,blankText:'',
        invalidText:'',mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',
        store:getCS(),enableKeyEvents:true,
        listeners:{scope:this,
        	select:function(c,r,i){
			var b =this.getSelectionModel().getSelected();
        	b.set('custId',r.get('custId'));
        	b.set('custName',r.get('custNameCn'));
        	b.set('custSname',r.get('custCode'));
        	},
       		keydown:{fn:function(f,e){
       			LC(f,e,'custApFlag',1);
       		},buffer:500}
        }})};
	
	t2={header:C_CHAR,width:80,dataIndex:"charName",align:'center',
			editor:new Ext.form.ComboBox({displayField:'charCode',valueField:'charName',triggerAction:'all',
            tpl:charTpl,itemSelector:'div.list-item',listWidth:300,
            allowBlank:false,blankText:'',invalidText:'',mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',
            store:getCHAR_S(),
            listeners:{scope:this,select:function(c,r,i){
            	var b =this.getSelectionModel().getSelected();
            	b.set('charId',r.get('charId'));
            	b.set('chclId',r.get('chclId'));
            	b.set('charNameEn',r.get('charNameEn'));
            	b.set('currCode',r.get('currCode'));
            	b.set('unitId',r.get('unitId'));
            	b.set('expeExRate',getExRate(r.get('currCode'),'CNY'));
            	}
			}
		})};	
	
    var t3={header:C_UNIT,width:80,dataIndex:"unitName",align:'center',
			editor:new Ext.form.ComboBox({displayField:'unitCode',valueField:'unitCode',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getUNIT_C(),listeners:{
            scope:this,select:function(c,r,i){
            	var b=this.getSelectionModel().getSelected();
            	var rec=frm.UN.getById(r.get('unitCode'));
            	b.set('expeNum',rec?rec.get('N'):1);}}})};
    var t4={header:C_QUANTITY,width:60,dataIndex:"expeNum",renderer:expenseNumRender,
			editor:new Ext.form.NumberField({decimalPrecision:4,selectOnFocus:true,allowBlank:false,blankText:'',invalidText:''})};
	var t5={header:C_UNIT_PRICE,width:80,dataIndex:"expeUnitPrice",renderer:expenseNumRender,
			editor:new Ext.form.NumberField({decimalPrecision:4,selectOnFocus:true,allowBlank:false,blankText:'',invalidText:''})};
	var t6={header:C_CURR,dataIndex:'currCode',width:50,align:'center',
			editor:new Ext.form.ComboBox({displayField:'currCode',valueField:'currCode',triggerAction: 'all',
            allowBlank:false,blankText:'',invalidText:'',mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getCURR_S()})};
	var t7={header:C_EX_RATE,width:60,dataIndex:"expeExRate",renderer:rateRender};	
	var t8={header:C_AMOUNT,width:80,dataIndex:"expeTotalAmount",renderer:numRender};	
    var t16={header:C_REMARKS,width:100,dataIndex:"expeRemarks",editor:new Ext.form.TextField({enableKeyEvents:true,
    	listeners:{scope:this,keydown:function(c,e){k = e.getKey();if(k == e.ENTER) this.add();}}})};
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cols=[sm,t1,t2,t3,t4,t5,t6,t7,t8,t16];
		
	var cm=new Ext.grid.ColumnModel({columns:cols,defaults:{sortable:true,width:100,align:'right'}});
	cm.defaultSortable=true;cm.defaultWidth=100;			
	this.add=function(){
		var unit='EACH';var rid=GGUID();
		var e = new SExpense({id:rid,expeId:rid,consId:p.get('consId'),consNo:p.get('consNo'),
			section:section,consSailDate:p.get('consSailDate'),
    		consMblNo:p.get('consMblNo'),consHblNo:p.get('consHblNo'),consVessel:p.get('vessName'),
    		consVoyage:p.get('voyaName'),consBizClass:p.get('consBizClass'),consBizType:p.get('consBizType'),
    		consShipType:p.get('consShipType'),expeStatus:'0',expeBillStatus:'0',
    		expeInvoiceStatus:'0',expeWriteOffStatus:'0',
    		custId:parent.getVendorId(),
    		custName:parent.getVendorName(),
    		consCustId:p.get('custId'),consCustName:p.get('custName'),
    		expeType:'P',pateId:PPID,pateCode:'P',unitName:unit,currCode:'CNY',expeUnitPrice:'',
    		expeCommissionRate:'',expeCommission:'',expeInnerPrice:'',expeExRate:'1.0000',expeRemarks:'',expeDate:new Date(),
    		expeAllocationFlag:'0',expeAllocatedFlag:'0',
    		expeInvoiceAmount:'0',expeWriteOffAmount:'0',expeWriteOffRcAmount:'0',expeInnerAmount:'0',expeRcAmount:'0',
    		expeTotalAmount:'0',expeNum:'1',version:'0'});
    	this.stopEditing();store.insert(0,e);e.set('rowAction','N');sm.selectFirstRow();this.startEditing(0, 1);
	};
	this.removeExp=function(){
		var r = sm.getSelections();
		if(r.length){
			for(var i=0;i<r.length;i++){
				if(r[i].get('expeInvoiceStatus')>0) 
					XMG.alert(SYS,M_REMOVE_EXP_INVOICED);
				else{
					r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');
					store.remove(r[i]);
				}
			}
		}
		else XMG.alert(SYS,M_R_P);
	};
	this.save=function(){
		var a = store.getModifiedRecords();
		if(a.length){
			for(var i=0;i<a.length;i++){
				if(a[i].get('rowAction')!='R'&&a[i].get('rowAction')!='D'){
					if(a[i].get('custId')==''){
						XMG.alert(SYS,M_SETTLE_OBJECT_REQIRED);
						return;
					}
					else if(a[i].get('charId')==''){
						XMG.alert(SYS,M_CHAR_REQIRED);
						return;
					}
					else if(a[i].get('expeNum')==''||a[i].get('expeNum')=='0'){
						XMG.alert(SYS,M_QUANTITY_REQIRED);
						return;
					}
					else if(a[i].get('expeUnitPrice')==''||a[i].get('expeUnitPrice')=='0'){
						XMG.alert(SYS,M_UNIT_PRICE_REQIRED);
						return;
					}
					else if(a[i].get('currCode')==''){
						XMG.alert(SYS,M_CURR_PRICE_REQIRED);
						return;
					}
					else if(a[i].get('pateId')==''){
						XMG.alert(SYS,M_PPCC_REQIRED);
						return;
					}
				}
			}
			var x = ATX(a,'SExpense',SExpense);
			if(x!=''){								
				var tb=this.getTopToolbar();
				tb.getComponent('TB_C').setDisabled(true);
				Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'EXPE_S'},
					success: function(res){
						var a = XTRA(res.responseXML,'SExpense',SExpense);FOSU(store,a,SExpense);
						XMG.alert(SYS,M_S);tb.getComponent('TB_C').setDisabled(false);},
					failure: function(res){XMG.alert(SYS,M_F+res.responseText);tb.getComponent('TB_C').setDisabled(false);},
					xmlData:FOSX(x)
				});
			}
		}
		else XMG.alert(SYS,M_NC);
	};	
	var locked=p.get('consStatusExp')==1||p.get('consStatusAud')!=0;
		
	var b1={itemId:'TB_A',text:C_ADD,iconCls:'add',disabled:NR(m+F_M)||locked,scope:this,handler:this.add};
	var b2={itemId:'TB_B',text:C_REMOVE,iconCls:'remove',disabled:NR(m+F_R)||locked,scope:this,handler:this.removeExp};
	var b3={itemId:'TB_C',text:C_SAVE,iconCls:'save',disabled:NR(m+F_M)||locked,scope:this,handler:this.save};
	
	Fos.SectionExGrid.superclass.constructor.call(this, {title:C_SECTION_AP,
	border:true,autoScroll:true,clicksToEdit:1,height:200,
    stripeRows:true,store:store,sm:sm,cm:cm,listeners:{scope:this,
		beforeedit:function(e){
			e.cancel = e.record.get('editable')==0||e.record.get('expeStatus')>0||e.record.get('expeInvoiceStatus')>0||e.record.get('expeWriteOffStatus')>0;
		},
    	afteredit:function(e){var f=e.field;var r=e.record;
    	if(f=='expeNum'){
    		r.set('expeNum',e.value);
    		r.set('expeTotalAmount',round2(e.value*r.get('expeUnitPrice')-r.get('expeCommission')));
    		r.set('expeInnerAmount',round2(r.get('expeInnerPrice')*e.value-r.get('expeCommission')));
    		r.set('expeRcAmount',round2(r.get('expeTotalAmount')*r.get('expeExRate')));
		}
    	if(f=='unitName'){    		
            r.set('expeTotalAmount',round2(r.get('expeNum')*r.get('expeUnitPrice')-r.get('expeCommission')));
    		r.set('expeInnerAmount',round2(r.get('expeInnerPrice')*r.get('expeNum')-r.get('expeCommission')));
    		r.set('expeRcAmount',round2(r.get('expeTotalAmount')*r.get('expeExRate')));
		}
		else if(f=='expeUnitPrice'){
			r.set('expeTotalAmount',round2(e.value*r.get('expeNum')-r.get('expeCommission')));
			r.set('expeInnerPrice',e.value);
			r.set('expeInnerAmount',round2(e.value*r.get('expeNum')-r.get('expeCommission')));
			r.set('expeRcAmount',round2(r.get('expeTotalAmount')*r.get('expeExRate')));
		}		
		else if(f=='currCode'){
			r.set('expeExRate',getExRate(e.value,'CNY'));
			r.set('expeRcAmount',round2(r.get('expeTotalAmount')*r.get('expeExRate')));
		}		
    }},
    tbar:[b1, '-',b2,'-',b3]});
};
Ext.extend(Fos.SectionExGrid, Ext.grid.EditorGridPanel);
