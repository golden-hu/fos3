//收款核销/付款核销    
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
		var currCode='CNY';
		var w=new Fos.CurrencyWin();
		w.addButton({text:C_OK,
			handler:function(){
			currCode = w.findById('currCode').getValue();
			w.close();var id =GGUID();			
			var e = new SVoucher({voucId:id,
				id:id,
				voucNo:'N'+id,
				currCode:currCode,
				voucType:t,
				voucDate:new Date(),
				voucExRate:getExRate(currCode,'CNY'),
				voucFixAmount:0,
				voucUploadFlag:'0',
				voucStatus:'0',
				voucWriteOffStatus:'0',
				version:'0',
				rowAction:'N'
			});
			
			var tab = T_MAIN.add(new Fos.VoucherTab(e));
			T_MAIN.setActiveTab(tab);
		}},this);
		w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);w.show();
	};
	
	this.edit = function(){
		var p=sm.getSelected();
		if(p){
			showVoucher(p);
		}
		else 
			XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	
	this.removeVouc = function(){
		var a =sm.getSelections();
       	if(a.length>0) {
       		XMG.confirm(SYS,M_R_C,function(btn){
           	if(btn=='yes'){var b = false;
               	for(var i=0;i<a.length;i++){
               		if(a[i].get('voucStatus')!='0') 
               			b=true;
               		}
	               	if(b) 
	               		XMG.alert(SYS,M_WRITEOFF_REMOVE_DENY);
	               	else {
	               		var xml =SMTX4R(sm,'SVoucher','voucId');
	               		Ext.Ajax.request({url:SERVICE_URL,
	               			method:'POST',
	               			params:{A:'VOUC_S'},
	               			success: function(){
	               				sm.each(function(p){store.remove(p);});XMG.alert(SYS,M_S);
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
       else 
    	   XMG.alert(SYS,M_R_P);
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
		{header:C_STATUS,width:80,dataIndex:"voucStatus",renderer:getVOST},
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
    
    var b8={text:C_FAST_SEARCH,iconCls:'search',handler:this.fastSearch}; 
    var b9={text:C_RESET,iconCls:'refresh',handler:this.reset};
        
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
    
    var title = '';
    if(t=='R'){
    	title = C_VOUC_R_MGT;
    }
    else if(t=='P'){
    	title = C_VOUC_P_MGT;
    }
    else{
    	title = C_VOUC_D_MGT;
    }
    
	Fos.VoucherGrid.superclass.constructor.call(this, {    
    id:'G_VOUC_'+t,
    iconCls:'grid',
    store: store,
    title:title,
    header:false,
    autoScroll:true,
    height:300,
	sm:sm,
	cm:cm,
	stripeRows:true,
	closable:true,
	listeners:{
		rowdblclick:function(grid, rowIndex, event){
			var c= grid.getSelectionModel().getSelected();
			if(c){
				showVoucher(c);
			}
		}
	},
	view:new Ext.grid.GroupingView(groupViewCfg),
	tbar:[{text:C_ADD,iconCls:'add',disabled:NR(M1_S+(t=='R'?S_VOUC_R:S_VOUC_P)+F_M),handler:this.add}, '-', 
		{text:C_EDIT,iconCls:'option',disabled:NR(M1_S+(t=='R'?S_VOUC_R:S_VOUC_P)+F_M),handler:this.edit},'-',
		{text:C_REMOVE,iconCls:'remove',disabled:NR(M1_S+(t=='R'?S_VOUC_R:S_VOUC_P)+F_R),handler:this.removeVouc},'-',
		{text:C_SEARCH,iconCls:'search',handler:this.search},'-',
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
	    id:'G_INIT_LOOKUP',
	    iconCls:'gen',
	    view:gv,
	    header:false,
	    height:400,
	    width:800,
	    store:store,
	    sm:sm,
	    cm:cm,
	    loadMask:true
    });	
	
    Fos.InitLookupWin.superclass.constructor.call(this,{title:C_ADD_EXPE,
    	modal:true,
    	layout:'fit',
    	width:800,
    	minWidth:300,
        minHeight:200,
        plain:false,
        bodyStyle:'padding:0px;',
        buttonAlign:'right',
        items:[{layout:'fit',
        	border:false,
        items: [g]}]
    }); 
};
Ext.extend(Fos.InitLookupWin,Ext.Window);

Fos.VoucItemGrid = function(p,store,frm){
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,
		{header:C_EXPE_TYPE,width:80,dataIndex:"expeType",renderer:function(v){return v=='R'?C_AR:C_AP;}},
		{header:C_INVO_NO,width:120,dataIndex:'invoNo'},
		{header:C_TAX_NO,width:90,dataIndex:'invoTaxNo'},
		{header:C_CHAR,width:80,dataIndex:'charName'},
		{header:C_CURR_BASE,width:50,dataIndex:'expeCurrCode'},
		{header:C_ORI_AMOUNT,width:80,align:'right',renderer:numRender,dataIndex:'expeTotalAmount'},	
		{header:C_INVO_CURR,width:80,dataIndex:'invoCurrCode'},
		{header:C_INVO_EX_RATE,width:80,align:'right',renderer:rateRender,dataIndex:'initExRate'},	
		{header:C_INVO_AMOUNT,width:100,align:'right',renderer:numRender,dataIndex:'initInvoiceAmount'},
		{header:C_WRITEOFFED_AMOUNT,width:110,align:'right',renderer:numRender,dataIndex:'initInvoiceAmountW'},
		{header:C_WRITEOFFED_AMOUNT_C,width:120,align:'right',renderer:numRender,dataIndex:'voitAmountW',css:'background: #ffaa66;',editor:new Ext.form.NumberField({allowBlank:false,blankText:'',invalidText:''})},
		{header:C_VOUC_EX_RATE,width:80,align:'right',renderer:rateRender,dataIndex:'voitExRate',css:'background: #ffaa66;',editor:new Ext.form.NumberField({decimalPrecision:4,blankText:'',invalidText:''})},
		{header:C_EX_AMOUNT,width:100,align:'right',renderer:numRender,dataIndex:'voitAmountVoucW'},
		{header:C_EX_AMOUNT_ORI,width:120,align:'right',renderer:numRender,dataIndex:'voitAmountOriW'},
		{header:C_UNIT,hidden:true,width:60,dataIndex:'unitName'},
		{header:C_UNIT_PRICE,width:80,align:'right',renderer:rateRender,dataIndex:'expeUnitPrice'},
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
							var it = new SVoucherItem({id:rid,voitId:rid,
								initId:r[i].get('initId'),invoId:r[i].get('invoId'),
								invoNo:r[i].get('invoNo'),
								invoTaxNo:r[i].get('invoTaxNo'),
								expeId:r[i].get('expeId'),
								expeType:r[i].get('expeType'),
								consId:r[i].get('consId'),
								consNo:r[i].get('consNo'),
								custId:r[i].get('custId'),
								custName:r[i].get('custName'),
								custSname:r[i].get('custSname'),
								consVessel:r[i].get('consVessel'),
								consVoyage:r[i].get('consVoyage'),
								consSailDate:r[i].get('consSailDate'),
								consMblNo:r[i].get('consMblNo'),
								consHblNo:r[i].get('consHblNo'),
								charName:r[i].get('charName'),
								unitName:r[i].get('unitName'),
								expeCurrCode:r[i].get('expeCurrCode'),
								expeUnitPrice:r[i].get('expeUnitPrice'),
								expeNum:r[i].get('expeNum'),
								expeExRate:r[i].get('expeExRate'),
								expeCommission:r[i].get('expeCommission'),
								expeCommissionRate:r[i].get('expeCommissionRate'),
								expeTotalAmount:r[i].get('expeTotalAmount'),
								initInvoiceAmount:r[i].get('initInvoiceAmount'),
								initInvoiceAmountOri:r[i].get('initInvoiceAmountOri'),
								initInvoiceAmountW:r[i].get('initInvoiceAmountW'),
								initInvoiceAmountOriW:r[i].get('initInvoiceAmountOriW'),
								invoCurrCode:r[i].get('invoCurrCode'),
								initExRate:r[i].get('initExRate'),
								invoExRate:r[i].get('invoExRate'),
								voitExRate:ex,
								voucExRate:p.get('voucExRate'),
								voitWriteOffNo:p.get('voucWriteOffNo'),
								voucId:p.get('voucId'),
								voucNo:p.get('voucNo'),
								voucDate:p.get('voucDate'),
								voitAmountW:voitAmountW,
								voitAmountOriW:voitAmountOriW,
								voitAmountVoucW:voitAmountVoucW,
								voucCurrCode:p.get('currCode'),
								voitWriteOffStatus:'2',
								voitCancelFlag:'0',
								version:'0'});
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
			for(var i=0;i<r.length;i++){
				r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');
				store.remove(r[i]);}
			this.reCalculate();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	
	Fos.VoucItemGrid.superclass.constructor.call(this, {
		id:'G_VOUC_I'+p.get('id'),
		border:false,
		autoScroll:true,
		view:gv,
		clicksToEdit:1,
		store:store,
		sm:sm,
		cm:cm,
		height:260,
	    listeners:{scope:this,
	    	afteredit:function(e){
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
		    		var voucExRate = frm.find('name','voucExRate')[0].getValue();
					r.set('voitAmountVoucW',round2(e.value*r.get('voitAmountW')/voucExRate));
					r.set('voitAmountOriW',round2(r.get('voitAmountW')*r.get('invoExRate')/e.value));
					this.reCalculate();
		    	}
		    }
		},
	    tbar:[{text:C_ADD,itemId:'TB_A',iconCls:'add',disabled:p.get('voucStatus')!='0',scope:this,handler:this.add}, '-', 		
			{text:C_REMOVE,itemId:'TB_B',iconCls:'remove',disabled:p.get('voucStatus')!='0',scope:this,handler:this.removeVoit
		}]
	});
};    
Ext.extend(Fos.VoucItemGrid,Ext.grid.EditorGridPanel);

//核销界面
Fos.VoucherTab = function(p,prId,invoId) {
    var store = GS('VOIT_Q','SVoucherItem',SVoucherItem,'voitId','DESC','','','id',false);
    
    if(invoId){
    	Ext.Ajax.request({url:SERVICE_URL,
    		method:'POST',
    		params:{A:'INIT_Q',invoId:invoId,initWriteOffStatus:0},
    		scope:this,
			success: function(res,o){
				var r = XTRA(res.responseXML,'SInvoiceItem',SInvoiceItem);
				var sum=0;
				for(var i=0;i<r.length;i++){
					var ex=r[i].get('invoCurrCode')==p.get('currCode')?p.get('voucExRate'):getExRate(r[i].get('invoCurrCode'),'CNY');
					var voitAmountW = round2(r[i].get('initInvoiceAmount')-r[i].get('initInvoiceAmountW'));
					var voitAmountOriW = round2(voitAmountW*r[i].get('invoExRate')/r[i].get('initExRate'));
					var voitAmountVoucW = round2(voitAmountW*r[i].get('invoExRate')/p.get('voucExRate'));
					var rid=GGUID();
					var it = new SVoucherItem({id:rid,
						voitId:rid,
						initId:r[i].get('initId'),
						invoId:r[i].get('invoId'),
						invoNo:r[i].get('invoNo'),
						invoTaxNo:r[i].get('invoTaxNo'),
						expeId:r[i].get('expeId'),
						expeType:r[i].get('expeType'),
						consId:r[i].get('consId'),
						consNo:r[i].get('consNo'),
						custId:r[i].get('custId'),
						custName:r[i].get('custName'),
						custSname:r[i].get('custSname'),
						consVessel:r[i].get('consVessel'),
						consVoyage:r[i].get('consVoyage'),
						consMblNo:r[i].get('consMblNo'),
						consHblNo:r[i].get('consHblNo'),
						charName:r[i].get('charName'),
						unitName:r[i].get('unitName'),
						expeCurrCode:r[i].get('expeCurrCode'),
						expeUnitPrice:r[i].get('expeUnitPrice'),
						expeNum:r[i].get('expeNum'),
						expeExRate:r[i].get('expeExRate'),
						expeTotalAmount:r[i].get('expeTotalAmount'),
						initInvoiceAmount:r[i].get('initInvoiceAmount'),
						initInvoiceAmountOri:r[i].get('initInvoiceAmountOri'),
						initInvoiceAmountW:r[i].get('initInvoiceAmountW'),
						initInvoiceAmountOriW:r[i].get('initInvoiceAmountOriW'),
						invoCurrCode:r[i].get('invoCurrCode'),
						initExRate:r[i].get('initExRate'),
						invoExRate:r[i].get('invoExRate'),
						voitExRate:ex,
						voucExRate:p.get('voucExRate'),
						voitWriteOffNo:p.get('voucWriteOffNo'),
						voucId:p.get('voucId'),
						voucNo:p.get('voucNo'),
						voucDate:p.get('voucDate'),
						voitAmountW:voitAmountW,
						voitAmountOriW:voitAmountOriW,
						voitAmountVoucW:voitAmountVoucW,
						voitRemarks:'',							
						voitWriteOffStatus:'2',
						voitCancelFlag:0,
						rowAction:'',
						version:0
					});
					store.insert(0,it);
					it.set('rowAction','N');
					sum = sum + voitAmountVoucW;
				};
				this.find('name','voucWriteOffAmount')[0].setValue(sum);
			}});
    }
    else if(prId){
		Ext.Ajax.request({url:SERVICE_URL,
			method:'POST',
			params:{A:'INIT_PR_X',prId:prId},
			scope:this,
			success: function(res,o){
				var r = XTRA(res.responseXML,'SInvoiceItem',SInvoiceItem);
				var sum=0;
				for(var i=0;i<r.length;i++){
					var ex=r[i].get('invoCurrCode')==p.get('currCode')?p.get('voucExRate'):getExRate(r[i].get('invoCurrCode'),'CNY');
					var voitAmountW = round2(r[i].get('initInvoiceAmount')-r[i].get('initInvoiceAmountW'));
					var voitAmountOriW = round2(voitAmountW*r[i].get('invoExRate')/r[i].get('initExRate'));
					var voitAmountVoucW = round2(voitAmountW*r[i].get('invoExRate')/p.get('voucExRate'));
					var rid=GGUID();
					var it = new SVoucherItem({id:rid,
						voitId:rid,initId:r[i].get('initId'),
						invoId:r[i].get('invoId'),
						invoNo:r[i].get('invoNo'),
						invoTaxNo:r[i].get('invoTaxNo'),
						expeId:r[i].get('expeId'),
						expeType:r[i].get('expeType'),
						consId:r[i].get('consId'),
						consNo:r[i].get('consNo'),
						custId:r[i].get('custId'),
						custName:r[i].get('custName'),
						custSname:r[i].get('custSname'),
						consVessel:r[i].get('consVessel'),
						consVoyage:r[i].get('consVoyage'),
						consMblNo:r[i].get('consMblNo'),
						consHblNo:r[i].get('consHblNo'),
						charName:r[i].get('charName'),
						unitName:r[i].get('unitName'),
						expeCurrCode:r[i].get('expeCurrCode'),
						expeUnitPrice:r[i].get('expeUnitPrice'),
						expeNum:r[i].get('expeNum'),
						expeExRate:r[i].get('expeExRate'),
						expeTotalAmount:r[i].get('expeTotalAmount'),
						initInvoiceAmount:r[i].get('initInvoiceAmount'),
						initInvoiceAmountOri:r[i].get('initInvoiceAmountOri'),
						initInvoiceAmountW:r[i].get('initInvoiceAmountW'),
						initInvoiceAmountOriW:r[i].get('initInvoiceAmountOriW'),
						invoCurrCode:r[i].get('invoCurrCode'),
						initExRate:r[i].get('initExRate'),
						invoExRate:r[i].get('invoExRate'),
						voitExRate:ex,
						voucExRate:p.get('voucExRate'),
						voitWriteOffNo:p.get('voucWriteOffNo'),
						voucId:p.get('voucId'),
						voucNo:p.get('voucNo'),
						voucDate:p.get('voucDate'),
						voitAmountW:voitAmountW,
						voitAmountOriW:voitAmountOriW,
						voitAmountVoucW:voitAmountVoucW,
						voitRemarks:'',							
						voitWriteOffStatus:'2',
						voitCancelFlag:0,
						rowAction:'',
						version:0
					});
					store.insert(0,it);
					it.set('rowAction','N');
					sum = sum + voitAmountVoucW;
				};
				this.find('name','voucWriteOffAmount')[0].setValue(sum);
			}
		});
	}
	else if(p.get('rowAction')!='N') 
		store.load({params:{voucId:p.get('voucId')}});
    
    this.grid=new Fos.VoucItemGrid(p,store,this);
    
    //收/付款单号
    var txtVoucNo = new Ext.form.TextField({fieldLabel:p.get('voucType')=='R'?C_VOUC_NO_R:C_VOUC_NO_P,
		tabIndex:1,
		name:'voucNo',
		disabled:true,
		value:p.get('voucNo'),
		xtype:'textfield',
		anchor:'95%'
	});
    
    //结算单位
    var cboCust = new Ext.form.ComboBox({fieldLabel:C_SETTLE_OBJECT,
    	itemCls:'required',
    	tabIndex:5,
		name:'custName',
		value:p.get('custName'),
		store:getCS(),
		enableKeyEvents:true,
		allowBlank:false,
		xtype:'combo',
		displayField:'custCode',
		valueField:'custCode',
		typeAhead:true,
		mode:'local',
		triggerAction: 'all',
		selectOnFocus:true,anchor:'95%',
		tpl:custTpl,
		itemSelector:'div.list-item',
		listWidth:400,
		listeners:{scope:this,
			select:function(c,r,i){						
				p.set('custId',r.get('custId'));
				p.set('custSname',r.get('custCode'));
				p.set('custName',r.get('custNameCn'));
				c.setValue(r.get('custNameCn'));
			},
			keydown:{
				fn:function(f,e){LC(f,e,p.get('voucType')=='R'?'custArFlag':'custApFlag');},
				buffer:500
			}
		}
    });
    
    //收/付款金额
    var txtVoucAmount = new Ext.form.NumberField( {fieldLabel:p.get('voucType')=='R'?C_VOUC_R_AMOUNT:C_VOUC_P_AMOUNT,
		itemCls:'required',
		tabIndex:9,
		name:'voucAmount',
		value:p.get('voucAmount'),
		xtype:'numberfield',
		anchor:'95%',
    	listeners:{scope:this,
    		change:function(f,nv,ov){
				p.set('voucAmount',nv);
				var v = round2(nv-p.get('voucWriteOffAmount')-p.get('voucFixAmount'));
				this.find('name','voucWriteOffAmountR')[0].setValue(v);
			}
	    }
    });
    
    //收付款银行
    var txtBank = new Ext.form.ComboBox({fieldLabel:C_BANK,
    	tabIndex:13,
    	name:'voucBank',
    	value:p.get('voucBank'),
    	store:getCOBA_S(),
    	xtype:'combo',
    	displayField:'cobaBank',
    	valueField:'cobaBank',
    	typeAhead: true,
    	mode: 'local',
    	triggerAction: 'all',
    	selectOnFocus:true,
    	anchor:'95%',
    	listeners:{scope:this,
    		select:function(c,r,i){
    			this.find('name','voucAccount')[0].setValue(r.get('cobaAccount'));
    		}
    	}
	});
    
    //银行水单号
    var txtVoucBankReceiptNo = new Ext.form.TextField({fieldLabel:C_BANK_BILL_NO,
    	tabIndex:2,
    	name:'voucBankReciptNo',
    	value:p.get('voucBankReciptNo'),
    	xtype:'textfield',
    	format:DATEF,
    	anchor:'95%'
    });
    
    //币种
    var cboCurrCode = new Ext.form.ComboBox({fieldLabel:C_CURR,
    	itemCls:'required',
    	disabled:true,
    	tabIndex:4,
    	name:'currCode',
    	value:p.get('currCode'),
    	store:getCURR_S(),
    	xtype:'combo',
    	displayField:'currCode',
    	valueField:'currCode',
    	typeAhead: true,
    	mode:'local',
    	triggerAction: 'all',
    	selectOnFocus:true,
    	anchor:'95%'
    });
    
    //核销金额
    var txtVoucWriteOffAmount = new Ext.form.NumberField({fieldLabel:C_WRITEOFF_AMOUNT,
    	tabIndex:10,
    	name:'voucWriteOffAmount',
    	value:p.get('voucWriteOffAmount'),
    	disabled:true,
    	xtype:'numberfield',
    	anchor:'95%',
        listeners:{scope:this,
        	change:function(f,nv,ov){
	    		var v = round2(p.get('voucAmount')-p.get('voucFixAmount')-nv);
				this.find('name','voucWriteOffAmountR')[0].setValue(v);
        	}
        }
    });
    
    //银行账号
    var txtVoucAccount = new Ext.form.TextField({fieldLabel:C_BANK_ACCOUNT,
    	tabIndex:14,
    	name:'voucAccount',
    	value:p.get('voucAccount'),
    	xtype:'textfield',
    	anchor:'95%'
    });
    
    //支票号
    var txtVoucCheckNo = new Ext.form.TextField({fieldLabel:C_CHECK_NO,
    	tabIndex:3,
    	name:'voucCheckNo',
    	value:p.get('voucCheckNo'),
    	xtype:'textfield',
    	format:DATEF,anchor:'95%'
    });
    
    //汇率
    var txtExRate = new Ext.form.NumberField({fieldLabel:C_EX_RATE,
    	tabIndex:7,
    	name:'voucExRate',
    	value:p.get('voucExRate'),
    	disabled:p.get('currCode')=='CNY',
    	xtype:'numberfield',
    	decimalPrecision:4,
    	anchor:'95%',
        listeners:{scope:this,
        	change:function(f,nv,ov){		
			p.set('voucExRate',nv);
			var d=store.getRange();
			var sum = 0;
			for(var i=0;i<d.length;i++){						
				d[i].set('voucExRate',nv);
				if(d[i].get('invoCurrCode')==p.get('currCode')){
					d[i].set('voitExRate',nv);
				}
				d[i].set('voitAmountVoucW',round2(d[i].get('voitExRate')*d[i].get('voitAmountW')/d[i].get('voucExRate')));
				d[i].set('voitAmountOriW',round2(d[i].get('voitAmountW')*d[i].get('invoExRate')/d[i].get('voitExRate')));
				if(d[i].get('expeType')==p.get('voucType')){
					sum = round2(sum + parseFloat(d[i].get('voitAmountVoucW')));
				}
				else{
					sum = round2(sum - parseFloat(d[i].get('voitAmountVoucW')));
				}
			}
			this.find('name','voucWriteOffAmount')[0].setValue(sum);
			this.find('name','voucAmount')[0].setValue(sum);
			}
        }
    });
    
    //处理金额
    var txtVoucFixAmount = new Ext.form.NumberField({fieldLabel:C_FIX_AMOUNT,
    	tabIndex:11,
    	name:'voucFixAmount',
    	value:p.get('voucFixAmount'),
    	xtype:'numberfield',
    	anchor:'95%',
        listeners:{scope:this,
        	change:function(f,nv,ov){		
				p.set('voucFixAmount',nv);
				var v = round2(p.get('voucAmount')-p.get('voucWriteOffAmount')-nv);
				this.find('name','voucWriteOffAmountR')[0].setValue(v);
        	}
        }
    });
    
  //核销号
    var txtVoucWriteOffNo = new Ext.form.TextField({fieldLabel:C_WRITEOFF_NO,
    	tabIndex:15,
    	name:'voucWriteOffNo',
    	value:p.get('voucWriteOffNo'),
    	xtype:'textfield',
    	anchor:'95%',
        listeners:{scope:this,
        	change:function(f,nv,ov){		
				var a = this.grid.getStore().getRange();
				if(a.length>0){
					for(var i=0;i<a.length;i++){
						a[i].set('voitWriteOffNo',nv);
					}
				}
			}
        }
    });
    
    //收付款日期
    var dtVoucDate = new Ext.form.DateField({fieldLabel:p.get('voucType')=='R'?C_VOUC_DATE_R:C_VOUC_DATE_P,
		tabIndex:4,
    	name:'voucDate',
    	value:p.get('voucDate'),
    	xtype:'datefield',
    	format:DATEF,
    	anchor:'95%'
    });
    
    //付款方式
    var cboPaymentType = new Ext.form.ComboBox({fieldLabel:C_SEWA,
    	itemCls:'required',
    	tabIndex:8,
    	name:'voucPaymentType',
    	value:p.get('voucPaymentType'),
    	store:getSEWA_S(),
    	xtype:'combo',
    	displayField:'sewaName',
    	valueField:'sewaId',
    	typeAhead: true,
    	mode: 'local',
    	triggerAction: 'all',
    	selectOnFocus:true,
    	anchor:'95%'
    });
    
    //余额
    var txtVoucWriteOffAmountR = new Ext.form.NumberField({fieldLabel:C_REMAIN_AMOUNT,
    	tabIndex:12,
    	name:'voucWriteOffAmountR',
    	value:p.get('voucAmount')-p.get('voucWriteOffAmount')-p.get('voucFixAmount'),
    	disabled:true,
    	xtype:'numberfield',
    	anchor:'95%'
    });
    
    //备注
    var txtVoucRemarks = new Ext.form.TextArea({fieldLabel:C_REMARKS,
    	name:'voucRemarks',
    	value:p.get('voucRemarks'),
    	tabIndex:15,
    	xtype:'textarea',
    	anchor:'95%'
    });
    
    var infoPanel = new Ext.Panel( {region:'north',
		height:200,
		layout:'column',
		layoutConfig:{columns:4},
		deferredRender:false,
		title:p.get('voucType')=='R'?C_VOUC_R_INFO:C_VOUC_P_INFO,
		collapsible:true,
    	items:[
	        {columnWidth:.25,layout:'form',border:false,
				items:[txtVoucNo,cboCust,txtVoucAmount,txtBank]
			},				
            {columnWidth:.25,layout:'form',border:false,
                items: [txtVoucBankReceiptNo,cboCurrCode,txtVoucWriteOffAmount,txtVoucAccount]
    		},
            
			{columnWidth:.25,layout: 'form',border : false,
                items: [txtVoucCheckNo,txtExRate,txtVoucFixAmount,txtVoucWriteOffNo]
    		},				
            {columnWidth:.25,layout: 'form',border : false,
                items: [dtVoucDate,cboPaymentType,txtVoucWriteOffAmountR]},                
            {columnWidth:.99,layout:'form',border:false,items:[txtVoucRemarks]}
        ]
	});
    
    this.save=function(){    	
    	p.beginEdit();
    	this.getForm().updateRecord(p);
    	p.endEdit();
    	
    	var title=p.get('voucType')=='R'?C_VOUC_R_AMOUNT:C_VOUC_P_AMOUNT;
    	if(!p.get('custId')){
    		XMG.alert(SYS,M_SEL_SETTLE_OBJ);
    		return;
    	}
		if(p.get('voucWriteOffAmount')+p.get('voucFixAmount')>p.get('voucAmount')+0.5){
			XMG.alert(SYS,M_VOUC_AMOUNT_NOT_GREAT+title);
			return;
		}
		var rem=this.find('name','voucWriteOffAmountR')[0].getValue();
		if(rem>=-0.5&&rem<=0.5) 
			p.set('voucWriteOffStatus','2');
		else if(rem==p.get('voucAmount')) 
			p.set('voucWriteOffStatus','0');
		else 
			p.set('voucWriteOffStatus','1');
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
		if(a.length>0){
			var x = ATX(a,'SVoucherItem',SVoucherItem);
			xml=xml+x;
		};		
		var tb=this.getTopToolbar();
		tb.getComponent('TB_A').setDisabled(true);
		
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',
			params:{A:'VOUC_S',prId:prId},
			success: function(res){
				var c = XTR(res.responseXML,'SVoucher',SVoucher);
				var ra=p.get('rowAction');
				var f = SVoucher.prototype.fields;
				p.beginEdit();
   				for (var i = 0; i < f.keys.length; i++) {
   					var fn = ''+f.keys[i];
   					p.set(fn,c.get(fn));
   				}
				if(ra=='N'){						
					this.setTitle((p.get('voucType')=='R'?C_VOUC_R:C_VOUC_P)+'-'+p.get("voucNo"));
					this.find('name','voucNo')[0].setValue(p.get('voucNo'));
					p.set('rowAction','M');
				}
				p.endEdit();
				var a = XTRA(res.responseXML,'SVoucherItem',SVoucherItem);
				FOSU(store,a,SVoucherItem);
				this.updateToolBar();
				XMG.alert(SYS,M_S);
				tb.getComponent('TB_A').setDisabled(false);
			},
			failure: function(res){
				XMG.alert(SYS,M_F+res.responseText);
				tb.getComponent('TB_A').setDisabled(false);
			},
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
		btnSave.setDisabled(NR(M1_S+(p.get('voucType')=='R'?S_VOUC_R:S_VOUC_P)+F_M)||p.get('voucStatus')!='0');
		btnRemove.setDisabled(NR(M1_S+(p.get('voucType')=='R'?S_VOUC_R:S_VOUC_R)+F_M)||p.get('invoStatus')!='0'||p.get('rowAction')=='N');
		btnAudit.setDisabled(NR(M1_S+(p.get('voucType')=='R'?S_VOUC_R:S_VOUC_P)+F_A)||p.get('voucStatus')!='0'||p.get('rowAction')=='N');
		btnCancel.setDisabled(NR(M1_S+(p.get('voucType')=='R'?S_VOUC_R:S_VOUC_P)+F_A)||p.get('voucStatus')!='1');
		btnInvalid.setDisabled(NR(M1_S+(p.get('voucType')=='R'?S_VOUC_R:S_VOUC_P)+F_F)||p.get('voucStatus')!='1');
		
    	tb.getComponent('TB_M').setText(C_STATUS_C+getVOST(p.get('voucStatus'))+'/'+getWRST(p.get('voucWriteOffStatus')));
    	
    	this.grid.getTopToolbar().getComponent('TB_A').setDisabled(p.get('voucStatus')!='0');
    	this.grid.getTopToolbar().getComponent('TB_B').setDisabled(p.get('voucStatus')!='0');
    };
       
    var btnSave = new Ext.Button({itemId:'TB_A',
    	text:C_SAVE,
    	iconCls:'save',
    	disabled:NR(M1_S+(p.get('voucType')=='R'?S_VOUC_R:S_VOUC_P)+F_M)||p.get('voucStatus')!='0',
    	scope:this,
    	handler:this.save
    });
    
    var btnRemove = new Ext.Button({itemId:'TB_B',
    	text:C_REMOVE,
    	iconCls:'remove',
    	disabled:NR(M1_S+(p.get('voucType')=='R'?S_VOUC_R:S_VOUC_R)+F_M)||p.get('voucStatus')!='0'||p.get('rowAction')=='N',
    	scope:this,
    	handler:this.removeVouc
    });
    
    var btnAudit = new Ext.Button({itemId:'TB_C',
    	text:C_AUDIT,
    	iconCls:'check',
    	disabled:NR(M1_S+(p.get('voucType')=='R'?S_VOUC_R:S_VOUC_P)+F_A)||p.get('voucStatus')!='0'||p.get('rowAction')=='N',
    	scope:this,
    	handler:this.check
    });
    
    var btnCancel = new Ext.Button({itemId:'TB_D',
    	text:C_CANCEL_AUDIT,
    	iconCls:'renew',
    	disabled:NR(M1_S+(p.get('voucType')=='R'?S_VOUC_R:S_VOUC_P)+F_A)||p.get('voucStatus')!='1',
    	scope:this,
    	handler:this.renew
    });
    
    var btnInvalid = new Ext.Button({itemId:'TB_E',
    	text:C_INVALID,
    	iconCls:'cancel',
    	disabled:NR(M1_S+(p.get('voucType')=='R'?S_VOUC_R:S_VOUC_P)+F_F)||p.get('voucStatus')!='1',
    	scope:this,
    	handler:this.cancel
    });
    
    var btnExport = new Ext.Button({text:C_EXPORT,
    	disabled:NR(M1_S+(p.get('voucType')=='R'?S_VOUC_R:S_VOUC_P)+F_E),
    	iconCls:'print',
    	scope:this,
    	handler:function(){
    		EXP('C','VOUC_LIST','&voucId='+p.get('voucId'));
    	}
    });
    
    Fos.VoucherTab.superclass.constructor.call(this, { 
		id: 'T_VOUC_'+p.get('id'),title:(p.get('voucType')=='R'?C_VOUC_R:C_VOUC_P)+'-'+p.get('voucNo'),
		layout:'border',
		autoScroll:true,
		labelAlign:'right',
		closable:true,
		labelWidth:80,
		bodyStyle:'padding:0px 0px 20px 0px',
		border:false,
		width:800,
		tbar:[
		btnSave,'-',
		btnRemove,'-',
		btnAudit,'-',
		btnCancel,'-',
		btnInvalid,'-',
		btnExport,'->','-',
		{itemId:'TB_M',disabled:true,text:C_STATUS_C+getVOST(p.get('voucStatus'))+'/'+getWRST(p.get('voucWriteOffStatus'))},'-'
		],
		items: [infoPanel,
			{title:C_WRITEOFFED_LINE,region:'center',layout:'fit',deferredRender:false,items:this.grid}
		]
	});
};
Ext.extend(Fos.VoucherTab,Ext.FormPanel);

//收付核销单查询
Fos.VoucLookupWin = function(t) {    
	var frmLookup = new Ext.form.FormPanel({labelWidth:70,labelAlign:"right",
    	items:[{id:'T_VOUC_LOOK',xtype:'tabpanel',plain:true,activeTab:0,height:200,defaults:{bodyStyle:'padding:10px'},
            items:[{id:'T_VOUC_LOOK_1',title:t=='R'?C_LOOK_BY_VOUC_NO_R:C_LOOK_BY_VOUC_NO_P,layout:'form',
				items:[{fieldLabel:'R'?C_VOUC_NO_R:C_VOUC_NO_P,name:'voucNo',xtype:'textarea',anchor:'90%'},
            	{boxLabel:C_LOOK_SMART,name:'voucNoM',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}
       			]},
       			{id:'T_VOUC_LOOK_2',title:C_LOOK_BY_INVO_NO,layout:'form',
				items: [
					{fieldLabel:C_INVO_NO,name:'invoNo',xtype:'textarea',anchor:'90%'},
					{boxLabel:C_LOOK_SMART,name:'invoNoM',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}
				]},
				{id:'T_VOUC_LOOK_3',title:C_LOOK_BY_TAX_NO,layout:'form',
				items: [
					{fieldLabel:C_TAX_NO,name:'invoTaxNo',xtype:'textarea',anchor:'90%'},
					{boxLabel:C_LOOK_SMART,name:'invoTaxNoM',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}
				]},
        		{id:'T_VOUC_LOOK_4',title:C_LOOK_COMPLEX,layout:'column',items:[
        			{columnWidth:.33,layout:'form',border:false,
	             	items:[
	             	{fieldLabel:C_SETTLE_OBJECT,tabIndex:1,name:'custId',store:getCS(),enableKeyEvents:true,
	             		xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%',
	             		tpl:custTpl,itemSelector:'div.list-item',listWidth:400,listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,t=='R'?'custArFlag':'custApFlag');},buffer:500}}},
	             	{fieldLabel:C_CURR,tabIndex:4,name:'currCode',store:getCURR_S(),xtype:'combo',displayField:'currCode',valueField:'currCode',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
	             	{fieldLabel:C_SEWA,tabIndex:7,name:'voucPaymentType',store:getSEWA_S(),xtype:'combo',displayField:'sewaName',valueField:'sewaId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
	             	{fieldLabel:C_CHECK_NO,tabIndex:10,name:'voucCheckNo',xtype:'textfield',format:DATEF,anchor:'90%'},
	             	{fieldLabel:C_STATUS,tabIndex:13,name:'voucStatus',store:VOST_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'}]},
	             	{columnWidth:.33,layout:'form',border:false,
	             	items:[
	             	{fieldLabel:t=='R'?C_VOUC_DATE_R:C_VOUC_DATE_P,tabIndex:2,name:'voucDate',xtype:'datefield',format:DATEF,anchor:'90%'},
	             	{fieldLabel:C_AMOUNT,name:'voucAmount',tabIndex:5,xtype:'numberfield',anchor:'90%'},
	             	{fieldLabel:C_WRITEOFF_AMOUNT,tabIndex:8,name:'voucWriteOffAmount',xtype:'numberfield',anchor:'90%'},
	             	{fieldLabel:C_BANK_RECEIPT_NO,tabIndex:11,name:'voucBankReciptNo',xtype:'textfield',format:DATEF,anchor:'90%'},
	             	{fieldLabel:C_BANK,tabIndex:14,name:'voucBank',store:getCOBA_S(),xtype:'combo',displayField:'cobaBank',valueField:'cobaBank',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'}
	             	]},
	             	{columnWidth:.34,layout:'form',border:false,
	             	items:[	             	
	             	{fieldLabel:C_TO,tabIndex:3,name:'voucDate2',xtype:'datefield',format:DATEF,anchor:'90%'},
	             	{fieldLabel:C_TO,tabIndex:6,name:'voucAmount2',xtype:'numberfield',anchor:'90%'},
	             	{fieldLabel:C_TO,tabIndex:9,name:'voucWriteOffAmount2',xtype:'numberfield',anchor:'90%'},
	             	{fieldLabel:C_BANK_ACCOUNT,tabIndex:12,name:'voucAccount',xtype:'textfield',anchor:'90%'},
	             	{fieldLabel:C_WRITEOFF_NO,tabIndex:15,name:'voucWriteOffNo',xtype:'textfield',anchor:'90%'}
	             	]}
	        	]}
        	]}
        ]
    });
    Fos.VoucLookupWin.superclass.constructor.call(this, {title:t=='R'?C_VOUC_R_QUERY:C_VOUC_P_QUERY,iconCls:'search',modal:true,width:600,minWidth:300,
        minHeight:200,plain:true,bodyStyle:'padding:0px;',buttonAlign:'right',items:frmLookup}); 
};
Ext.extend(Fos.VoucLookupWin,Ext.Window);


//客户余额
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

//客户余额明细
Fos.BaliWin = function(b){
    var store = GS('VOUC_X','SVoucher',SVoucher,'voucDate','DESC','voucDate','S_VOUC','id',true);
    var a=[];
    a[0]={key:'voucFixAmount',value:0,op:NE};
    a[1]={key:'custId',value:b.get('custId'),op:EQ};
    a[2]={key:'currCode',value:b.get('currCode'),op:EQ};
    store.baseParams = {mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
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