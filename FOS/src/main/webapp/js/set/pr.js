//付款申请列表
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
		if(tab) {
			T_MAIN.setActiveTab(t);
		}
		else {
			tab = T_MAIN.add(new Fos.PrTab(p));		
			T_MAIN.setActiveTab(tab);
			tab.doLayout();
		}
	};
	
	this.add = function(){
		var currCode='CNY';
		var w=new Fos.CurrencyWin();
		w.addButton({text:C_OK,
			handler:function(){
			currCode = w.findById('currCode').getValue();
			w.close();
			var id=GGUID();
			var e = new SPr({id:id,
				prId:id,
				prNo:'N'+id,
				prType:t,
				prDate:new Date(),
				currCode:currCode,
				prExRate:getExRate(currCode,'CNY'),
				prStatus:'0',
				version:'0',
				rowAction:'N'
			});
			var tab = T_MAIN.add(new Fos.PrTab(e));
			T_MAIN.setActiveTab(tab);
		}},this);
		
		w.addButton({text:C_CANCEL,handler:function(){
			w.close();
			}
		},this);
		w.show();		
	};
	
	this.edit = function(){
		var p=sm.getSelected();
		if(p){
			showPr(p);
		} 
		else 
			XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	
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
		{header:C_BILL_DATE,dataIndex:"createTime",renderer:formatDate},
		{header:C_AUDIT_BY,dataIndex:"prFinApproveBy"},
		{header:C_AUDIT_TIME,dataIndex:"prFinApproveDate",renderer:formatDate},		
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
    
    var b8={text:C_FAST_SEARCH,iconCls:'search',handler:this.fastSearch}; 
    var b9={text:C_RESET,iconCls:'refresh',handler:this.reset};
    
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
	    id:'G_PR_'+t,
	    iconCls:'grid',
	    store: store,
	    title:t=='R'?C_PR_R_MGT:C_PR_P_MGT,
	    header:false,
	    autoScroll:true,
	    height:300,
		sm:sm,
		cm:cm,
		stripeRows:true,
		closable:true,
		listeners:rowCtxEvents,
		view:new Ext.grid.GroupingView(groupViewCfg),
		tbar:[{text:C_ADD,iconCls:'add',disabled:NR(M1_S+(t=='R'?S_PR_R:S_PR_P)+F_M),handler:this.add}, '-', 
			{text:C_EDIT,iconCls:'option',disabled:NR(M1_S+(t=='R'?S_PR_R:S_PR_P)+F_M),handler:this.edit},'-',
			{text:C_REMOVE,iconCls:'remove',disabled:NR(M1_S+(t=='R'?S_PR_R:S_PR_P)+F_R),handler:this.removePr},'-',		
			{text:C_SEARCH,iconCls:'search',handler:this.search},'-',
			kw,b8,'',b9,'-'],
		bbar:PTB(store,C_PS)
	});     
};    
Ext.extend(Fos.PrGrid,Ext.grid.GridPanel);

Fos.PrItemGrid = function(p,store){
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,
		{header:C_INVO_NO,width:100,dataIndex:'invoNo'},
		{header:C_TAX_NO,width:100,dataIndex:'invoTaxNo'},		
		{header:C_INVO_AMOUNT,width:100,align:'right',renderer:numRender,dataIndex:'invoAmount'},
		{header:C_WRITEOFFED_AMOUNT,width:100,align:'right',renderer:numRender,dataIndex:'invoAmountWriteOff'},
		{header:C_PAY_AMOUNT_P,width:100,align:'right',renderer:numRender,dataIndex:'prAmountPaid'},
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
							prAmountPaid:r[i].get('invoAmountPaid'),
							invoAmountWriteOff:r[i].get('invoAmountWriteOff'),
							prAmount:r[i].get('invoAmount')-r[i].get('invoAmountPaid'),
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
	
	Fos.PrItemGrid.superclass.constructor.call(this,{id:'G_PR_I',border:false,
		autoScroll:true,clicksToEdit:1,store:store,sm:sm,cm:cm,height:350,
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
	    tbar:[{text:C_ADD,iconCls:'add',disabled:p.get('prStatus')!='0',scope:this,handler:this.add}, '-', 		
			{text:C_REMOVE,iconCls:'remove',disabled:p.get('prStatus')!='0',scope:this,handler:this.removePrit
		}]
    });
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
		{header:C_PAY_AMOUNT_P,width:80,dataIndex:"invoAmountPaid"},	
		{header:C_CURR,dataIndex:'currCode'},	
		{header:C_INVO_DATE,dataIndex:'invoDate',renderer:formatDate},	
		{header:C_DUE_DATE,dataIndex:'invoDueDate',renderer:formatDate},	
		{header:C_BANK,dataIndex:'invoBank'},
		{header:C_BANK_ACCOUNT,dataIndex:'invoAccount'},		
		{header:C_REMARKS,dataIndex:"invoRemarks"}
		],defaults:{sortable:true,width:100}});
	
    var g = new Ext.grid.GridPanel({ 
    	id:'G_PRIT_LOOKUP',
    	iconCls:'gen',
    	header:false,
    	height:300,
    	width:600,
    	store:store,
    	sm:sm,
    	cm:cm,
    	loadMask: true
    });	
    
    Fos.PrItemLookupWin.superclass.constructor.call(this,{title:C_SEL_INVO,
    	modal:true,
    	layout:'fit',
    	width:600,
    	minWidth:300,
        minHeight:200,
        plain:false,
        buttonAlign:'right',
        items:[{layout:'fit',border:false,items: [g]}]
    });
};
Ext.extend(Fos.PrItemLookupWin,Ext.Window);

//应付账单申请
Fos.PrTab = function(p) {
	var store = GS('PRIT_Q','SPrItem',SPrItem,'pritId','DESC','','','id',false);
	if(p.get('rowAction')!='N') 
		store.load({params:{prId:p.get('prId')}});
	
    this.grid = new Fos.PrItemGrid(p,store);
    
	this.save = function(){
		if(p.get('custId')==''){
			XMG.alert(SYS,M_SETTLE_OBJECT_REQIRED);
			return;
		}
		p.beginEdit();
		this.getForm().updateRecord(p);
		p.endEdit();
   	 	var xml = RTX(p,'SPr',SPr);
   	 	var a = this.grid.getStore().getModifiedRecords();
		if(a.length>0){
			var x = ATX(a,'SPrItem',SPrItem);
			xml=xml+x;
		}
		Ext.Ajax.request({scope:this,
			url:SERVICE_URL,
			method:'POST',
			params:{A:'PR_S'},
			success: function(res){
				var c = XTR(res.responseXML,'SPr',SPr);
				var ra=p.get('rowAction');
				var f = SPr.prototype.fields;
				p.beginEdit();
   				for (var i = 0; i < f.keys.length; i++) {
   					var fn = ''+f.keys[i];
   					p.set(fn,c.get(fn));
   				}
				if(ra=='N'){						
					this.setTitle((p.get('prType')=='R'?C_PR_R:C_PR_P)+'-'+p.get("prNo"));
					this.find('name','prNo')[0].setValue(p.get('prNo'));
					p.set('rowAction','M');
				}
				p.endEdit();
				var sa = this.grid.getStore();
				var a = XTRA(res.responseXML,'SPrItem',SPrItem);
				FOSU(sa,a,SPrItem);
				this.updateToolBar();
				XMG.alert(SYS,M_S);
			},
			failure: function(res){
				XMG.alert(SYS,M_F+res.responseText);
			},
			xmlData:FOSX(xml)
		});
	};
	
	this.removePr = function(){
		p.set('rowAction','R');
		var xml = RTX(p,'SPr',SPr);
   	 	var a = this.grid.getStore().getRange();
		if(a.length>0){
			for(var i=0;i<a.length;i++){
				a[i].set('rowAction',a[i].get('rowAction')=='N'?'D':'R');
			}
			var x = ATX(a,'SPrItem',SPrItem);
			xml=xml+x;
		};
		
		Ext.Ajax.request({scope:this,
			url:SERVICE_URL,
			method:'POST',
			params:{A:'PR_S'},
			success: function(r){
				XMG.alert(SYS,M_S,function(){T_MAIN.remove('T_PR_'+p.get('id'));});
			},
			failure: function(r){
				XMG.alert(SYS,M_F+r.responseText);
			},
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
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',
			params:{A:'PR_U',prId:p.get('prId'),prStatus:s},
			success: function(r){
				p.beginEdit();
				p.set('prStatus',s);
				p.set('version',p.get('version')+1);
				p.endEdit();
				this.updateToolBar();
				XMG.alert(SYS,M_S);
			},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);}});
	};
	
	var b1={itemId:'TB_1',text:C_SAVE,iconCls:'save',disabled:NR(M1_S+(p.get('prType')=='R'?S_PR_R:S_PR_P)+F_M)||p.get('prStatus')!='0',scope:this,handler:this.save};
	var b2={itemId:'TB_2',text:C_REMOVE,iconCls:'remove',disabled:NR(M1_S+(p.get('prType')=='R'?S_PR_R:S_PR_P)+F_R)||p.get('prStatus')!='0'||p.get('rowAction')=='N',scope:this,handler:this.removePr};
	var b3={itemId:'TB_3',text:C_SEND_BANK,iconCls:'out',disabled:NR(M1_S+S_PR_R+F_M)||p.get('prStatus')!='0',scope:this,handler:this.send};
	var b4={itemId:'TB_4',text:C_BACK_BANK,iconCls:'in',disabled:NR(M1_S+S_PR_R+F_M)||p.get('prStatus')!='1',scope:this,handler:this.back};
	var b5={itemId:'TB_5',text:C_ARRIVE_BANK,iconCls:'dollar',disabled:NR(M1_S+S_PR_R+F_M)||p.get('prStatus')!='2',scope:this,handler:this.arrive};
	var b6={itemId:'TB_6',text:C_RECEIPT_FAILED,iconCls:'cancel',disabled:NR(M1_S+S_PR_R+F_M)||p.get('prStatus')!='0',scope:this,handler:this.fail};
	var b7={itemId:'TB_7',text:C_COMMIT,iconCls:'check',disabled:NR(M1_S+S_PR_P+F_M)||p.get('prStatus')!='0'||p.get('rowAction')=='N',scope:this,handler:this.submit};
	var b8={itemId:'TB_8',text:C_FIN_CHECK,iconCls:'check',disabled:NR(M1_S+S_PR_P+F_A)||p.get('prStatus')!='1',scope:this,handler:this.check};
	var b9={itemId:'TB_9',text:'(U)',tooltip:C_FIN_CHECK_CANCEL,iconCls:'renew',disabled:NR(M1_S+S_PR_P+F_A)||p.get('prStatus')!='2',scope:this,handler:this.uncheck};
	var b10={itemId:'TB_10',text:C_MANAGER_CHECK+'(M)',iconCls:'check',disabled:NR(M1_S+S_PR_P+F_A2)||p.get('prStatus')!='2',scope:this,handler:this.check1};
	var b11={itemId:'TB_11',text:'(V)',tooltip:C_MANAGER_CHECK_CANCEL,iconCls:'renew',disabled:NR(M1_S+S_PR_P+F_A2)||p.get('prStatus')!='3',scope:this,handler:this.uncheck1};
	
	var b12={itemId:'TB_12',
		text:p.get('prType')=='R'?C_WRITEOFF_R:C_WRITEOFF_P,
		iconCls:'dollar',
		disabled:NR(M1_S+(p.get('prType')=='R'?(S_PR_R+F_M):(S_PR_P+F_WO)))||p.get('prStatus')!='3',
		scope:this,
		handler:this.pay
	};
	
	var b13={itemId:'TB_13',text:C_INVALID,iconCls:'cancel',
			disabled:NR(M1_S+(p.get('prType')=='R'?S_PR_R:S_PR_P)+F_F)||p.get('prStatus')=='0',
			scope:this,handler:this.cancel};
	
	var b14={itemId:'TB_14',
		text:C_EXPORT,
		iconCls:'print',
		disabled:NR(M1_S+(p.get('prType')=='R'?S_PR_R:S_PR_P)+F_E)
	};
	
	var b15={itemId:'TB_15',
		disabled:true,
		text:C_STATUS_C+getPRST(p.get('prStatus'))
	};
	
	var b16={itemId:'TB_16',
		text:'(Q)',
		tooltip:C_COMMIT_CANCEL,
		iconCls:'renew',
		disabled:NR(M1_S+S_PR_P+F_M)||p.get('prStatus')!='1',
		scope:this,
		handler:this.uncheck0
	};
	
	this.updateToolBar = function(){
		var tb=this.getTopToolbar();
		tb.getComponent('TB_1').setDisabled(NR(M1_S+(p.get('prType')=='R'?S_PR_R:S_PR_P)+F_M)||p.get('prStatus')!='0');
    	tb.getComponent('TB_2').setDisabled(NR(M1_S+(p.get('prType')=='R'?S_PR_R:S_PR_P)+F_R)||p.get('prStatus')!='0'||p.get('rowAction')=='N');
    	if(p.get('prType')=='R'){
	    	tb.getComponent('TB_3').setDisabled(NR(M1_S+S_PR_R+F_M)||p.get('prStatus')!='0');
	    	tb.getComponent('TB_4').setDisabled(NR(M1_S+S_PR_R+F_M)||p.get('prStatus')!='1');
	    	tb.getComponent('TB_5').setDisabled(NR(M1_S+S_PR_R+F_M)||p.get('prStatus')!='2');
	    	tb.getComponent('TB_6').setDisabled(NR(M1_S+S_PR_R+F_M)||p.get('prStatus')!='0');
	    	
    	}
    	if(p.get('prType')=='P'){
	    	tb.getComponent('TB_7').setDisabled(NR(M1_S+S_PR_P+F_M)||p.get('prStatus')!='0'||p.get('rowAction')=='N');
	    	tb.getComponent('TB_8').setDisabled(NR(M1_S+S_PR_P+F_A)||p.get('prStatus')!='1');
	    	tb.getComponent('TB_9').setDisabled(NR(M1_S+S_PR_P+F_A)||p.get('prStatus')!='2');
	    	tb.getComponent('TB_10').setDisabled(NR(M1_S+S_PR_P+F_A2)||p.get('prStatus')!='2');
	    	tb.getComponent('TB_11').setDisabled(NR(M1_S+S_PR_P+F_A2)||p.get('prStatus')!='3');
	    	tb.getComponent('TB_16').setDisabled(NR(M1_S+S_PR_P+F_M)||p.get('prStatus')!='1');	
    	}
    	tb.getComponent('TB_12').setDisabled(NR(M1_S+(p.get('prType')=='R'?(S_PR_R+F_M):(S_PR_P+F_WO)))||p.get('prStatus')!='3');
    	tb.getComponent('TB_13').setDisabled(NR(M1_S+(p.get('prType')=='R'?S_PR_R:S_PR_P)+F_F)||p.get('prStatus')!='0');
    	tb.getComponent('TB_14').setDisabled(NR(M1_S+(p.get('prType')=='R'?S_PR_R:S_PR_P)+F_E));
    	tb.getComponent('TB_15').setText(C_STATUS_C+p.get('prType')=='R'?getERST(p.get('prStatus')):getPRST(p.get('prStatus')));
    };
    
    //付款方式
    var cboPaymentWay = new Ext.form.ComboBox({fieldLabel:C_PAYW,
    	tabIndex:7,
    	name:'prPaymentType',
    	value:p.get('prPaymentType'),
    	store:getPAYW_S(),
    	xtype:'combo',
    	displayField:'paywName',
    	valueField:'paywId',
    	typeAhead: true,
    	mode:'local',
    	triggerAction: 'all',
    	selectOnFocus:true,
    	anchor:'90%'
    });
   
	Fos.PrTab.superclass.constructor.call(this, { 
		id: 'T_PR_'+p.get('id'),
		title:(p.get('prType')=='R'?C_PR_R:C_PR_P)+'-'+p.get('prNo'),
		autoScroll:true,
		labelAlign:'right',
		closable:true,
		labelWidth:80,
		border:false,
		width:800,
		layout:'border',
		tbar:p.get('prType')=='R'?[b1,'-',b2,'-',b3,'-',b4,'-',b5,'-',b6,'-',b12,'-',b13,/*'-',b14,*/
		      '->','-',b15,'-']:
		      [b1,'-',b2,'-',b7,'-',b16,'-',b8,'-',b9,'-',b10,'-',b11,'-',b12,'-',b13,/*'-',b14,*/
		      '->','-',b15,'-'],
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
	                items: [cboPaymentWay,
	                {fieldLabel:C_CUST_BANK_ACCOUNT,tabIndex:11,name:'custAccount',value:p.get('custAccount'),xtype:'textfield',format:DATEF,anchor:'90%'}]},
	            {columnWidth:.99,layout:'form',border:false,items:[{fieldLabel:C_REMARKS,name:'prRemarks',value:p.get('prRemarks'),tabIndex:12,xtype:'textarea',anchor:'90%'}]}
	            ]},
			{title:C_INVO_LIST,layout:'fit',region:'center',deferredRender:false,items:this.grid}
        ]
	});
};
Ext.extend(Fos.PrTab, Ext.FormPanel);


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
    Fos.PrLookupWin.superclass.constructor.call(this, {
    	title:t=='R'?C_PR_R_QUERY:C_PR_P_QUERY,
    	iconCls:'search',
    	modal:true,
    	width:600,
    	minWidth:300,
        minHeight:200,
        plain:true,
        buttonAlign:'right',
        items:frmLookup
	}); 
};
Ext.extend(Fos.PrLookupWin, Ext.Window);
