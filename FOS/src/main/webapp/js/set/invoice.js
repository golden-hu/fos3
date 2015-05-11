//应收/应付帐单/发票

var showInvoice= function(p){
	var tab = T_MAIN.getComponent("T_INVO_" + p.get("id"));
	if(tab) {
		T_MAIN.setActiveTab(tab);
	}
	else {
		tab = T_MAIN.add(new Fos.InvoiceTab(p));
		T_MAIN.setActiveTab(tab);
		tab.doLayout();
	}
};

Fos.InvoiceGrid = function(t) {
	var store = new Ext.data.GroupingStore({url:SERVICE_URL,
		baseParams:{A:'INVO_Q',mt:'xml',invoType:t},
		reader:new Ext.data.XmlReader({totalProperty:'rowCount',
			record:'SInvoice',idProperty:'invoId'},SInvoice),
		remoteSort:true,sortInfo:{field:'invoId', direction:'DESC'}
	});	
    store.load({params:{start:0,limit:C_PS}});
    		
    this.reset=function(){    	
    	store.baseParams.xml = '';   	
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
    
    var kw = new Ext.form.TextField({
    	listeners:{scope:this,
    		specialkey:function(c,e){
    			if(e.getKey()==Ext.EventObject.ENTER) 
    				this.fastSearch();
    			}
    	}
    });
    
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
		{header:C_INVO_TITLE,width:200,dataIndex:"invoTitle"},
		{header:C_INVO_AMOUNT,align:'right',renderer:numRender,dataIndex:"invoAmount"},	
		{header:C_INVO_DATE,dataIndex:"invoDate",renderer:formatDate},
		{header:C_DUE_DATE,dataIndex:"invoDueDate",renderer:formatDate},
		{header:C_SEWA,dataIndex:"invoPaymentType",renderer:getSEWA},
		{header:C_WRITEOFFED_AMOUNT,align:'right',renderer:numRender,dataIndex:"invoAmountWriteOff"},
		{header:C_BANK,width:120,dataIndex:"invoBank"},
		{header:C_BANK_ACCOUNT,width:120,dataIndex:"invoAccount"},
		{header:C_BIZ_TYPE,dataIndex:"invoBizClass",renderer:getBC},		
		{header:C_CONS_NO,width:120,dataIndex:"invoConsNo"},
		{header:C_SAIL_DATE,width:120,dataIndex:"invoSailDate",renderer:formatDate},
		{header:C_VESS,width:120,dataIndex:"invoVessel"},
		{header:C_VOYA,dataIndex:"invoVoyage"},
		{header:C_BL_NO,dataIndex:"invoBlNo"},		
		{header:C_BILL_BY,dataIndex:"invoIssuer",renderer:getUSER},
		{header:C_AUDIT_BY,dataIndex:"invoChecker",renderer:getUSER},
		{header:C_SIGNER,dataIndex:"invoSigner",renderer:getUSER},
		{header:C_SIGN_DATE,dataIndex:"invoSignDate",renderer:formatDate},		
		{header:C_REMARKS,dataIndex:"invoRemarks"}
		],defaults:{sortable:true,width:90}});
	
	var rowCtxEvents={rowdblclick:function(grid, rowIndex, event){
		var c= grid.getSelectionModel().getSelected();
		if(c){
			showInvoice(c);
		}
	}};
	
	this.add=function(){
    	var currCode='CNY';var w=new Fos.CurrencyWin();
		w.addButton({text:C_OK,scope:this,handler:function(){
			currCode = w.findById('currCode').getValue();
			w.close();var id=GGUID();
			var e = new SInvoice({invoId:id,id:id,
				invoNo:'N'+id,
				currCode:currCode,
				invoType:t,
				invoDate:new Date(),
				invoExRate:getExRate(currCode,'CNY'),
				invoWriteOffStatus:'0',
				invoPrFlag:'0',
				invoUploadFlag:'0',
				invoStatus:'0',
				version:'0',
				rowAction:'N'
			});
			var tab = T_MAIN.add(new Fos.InvoiceTab(e));
			T_MAIN.setActiveTab(tab);
		}},this);
		w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);w.show();
    };
    
	this.edit=function(){
		var p=sm.getSelected();
		if(p){
			showInvoice(p);
		}
		else 
			XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
		
    this.removeInvo=function(){
    	var a =sm.getSelections();
       	if(a.length>0){
       		XMG.confirm(SYS,M_R_C,function(btn){
           	if(btn=='yes'){
           		var b = false;
           		var c = false;
           		
               	for(var i=0;i<a.length;i++){
               		if(a[i].get('invoStatus')!='0') {
               			b=true;
               		}
               		if(a[i].get('invoWriteOffStatus')!=0){
               			c=true;
               		}
               	}
               	
               	if(b) {
               		XMG.alert(SYS,M_INVO_CONFIRMED);
               	}
               	else if(c) {
               		XMG.alert(SYS,C_IS_WRITEOFF);
               	}
               	else {
               		var xml = SMTX4R(sm,'SInvoice','invoId');
               		Ext.Ajax.request({url:SERVICE_URL,
               			method:'POST',
               			params:{
               				A:'INVO_S'
               			},
               			success: function(){
               				sm.each(function(p){store.remove(p);});
               				XMG.alert(SYS,M_S);
               			},
               			failure: function(r,o){
               				XMG.alert(SYS,M_F+r.responseText);
               			},
               			xmlData:FOSX(xml)
               		});
               	}
           }});
		}
       	else XMG.alert(SYS,M_R_P);
    };
    
    
    this.pagingNav=function(page){
        var tc = T_MAIN.getComponent('G_INVO_'+t);
        if(tc&&tc==T_MAIN.getActiveTab()){
            var pt = this.getBottomToolbar();
            if (!pt[page].disabled) 
            	pt.onClick(page);
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
    
    var btnAdd = new Ext.Button({text:C_ADD,
    	disabled:NR(M1_S+(t=='R'?S_INVO_R:S_INVO_P)+F_M),
    	iconCls:'add',
    	scope:this,
    	handler:this.add
    });
    
    var btnEdit = new Ext.Button({text:C_EDIT,
    	disabled:NR(M1_S+(t=='R'?S_INVO_R:S_INVO_P)+F_M),
    	iconCls:'option',
    	handler:this.edit
    });
    
    var btnRemove = new Ext.Button({text:C_REMOVE,
    	disabled:NR(M1_S+(t=='R'?S_INVO_R:S_INVO_P)+F_R),
    	iconCls:'remove',
    	handler:this.removeInvo
    });
    
    var btnSearch = new Ext.Button({text:C_SEARCH,
    	iconCls:'search',
    	handler:this.search
    });
    
    var btnExport = new Ext.Button({text:C_EXPORT,
    	disabled:NR(M1_S+(t=='R'?S_INVO_R:S_INVO_P)+F_E),
    	iconCls:'print',
    	handler:this.exp
    });
    
    var btnFastSearch = new Ext.Button({text:C_FAST_SEARCH,
    	iconCls:'search',
    	handler:this.fastSearch
    }); 
    
    var btnReset = new Ext.Button({text:C_RESET,
    	iconCls:'refresh',
    	handler:this.reset
    });
    
    
	Fos.InvoiceGrid.superclass.constructor.call(this, {    
	    id:'G_INVO_'+t,
	    iconCls:'grid',
	    store: store,
	    title:t=='R'?C_INVO_R_MGT:C_INVO_P_MGT,
	    header:false,
	    autoScroll:true,
		sm:sm,
		cm:cm,
		stripeRows:true,
		closable:true,
		listeners:rowCtxEvents,
		view:new Ext.grid.GroupingView(groupViewCfg),
		tbar:[btnAdd,'-',btnEdit,'-',btnRemove,'-',btnSearch,'-',btnExport,'-',kw,btnFastSearch,'-',btnReset,'-'],
		bbar:PTB(store,C_PS)
	});
};
Ext.extend(Fos.InvoiceGrid, Ext.grid.GridPanel);

Fos.ExpenseLookupWin = function(store) {
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var rowNum = new Ext.grid.RowNumberer();
	
	var cm=new Ext.grid.ColumnModel({columns:[rowNum,sm,
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
		{header:C_INVO_TITLE,width:200,dataIndex:"expeInvoiceTitle"},
		{header:C_REMARKS,width:100,dataIndex:"expeRemarks"}
		],defaults:{sortable:true,width:100}
	});
	
	var filters = new Ext.grid.GridFilters({
		  filters:[{type: 'string',  dataIndex: 'consNo'},
		    {type: 'string',  dataIndex: 'charName'},
		    {type: 'string',  dataIndex: 'currCode'},
		    {type: 'date',  dataIndex: 'consSailDate'},
		    {type: 'numeric', dataIndex: 'expeTotalAmount'}]
	});
	
    this.grid = new Ext.grid.GridPanel({ 
    	header:false,
    	store:store,
    	sm:sm,
    	cm:cm,
    	plugins:filters,
    	loadMask:true,
    	view:new Ext.grid.GroupingView(groupViewCfg)
    });	
   
    Fos.ExpenseLookupWin.superclass.constructor.call(this,{
    	title:C_ADD_EXPE,
    	modal:true,
    	layout:'fit',
    	width:900,
        height:600,
        plain:false,
        bodyStyle:'padding:0px;',
        buttonAlign:'right',
        items:this.grid
    }); 
};
Ext.extend(Fos.ExpenseLookupWin,Ext.Window);

Fos.InvoItemGrid = function(p,frm,billNo,arr){
	var store = GS('INIT_Q','SInvoiceItem',SInvoiceItem,'invoNo','Desc','','',false);
	
	var showInvoiceItem = function(){
		Ext.Ajax.request({url:SERVICE_URL,method:'POST',
			params:{A:'EXPE_INV_Q',expeBillNo:billNo},scope:this,
			success: function(res,o){
				var r = XTRA(res.responseXML,'SExpense',SExpense);
				if(arr){
					r=arr;
				}
				var sum=0;
				for(var i=0;i<r.length;i++){
					var ex=r[i].get('currCode')==p.get('currCode')?p.get('invoExRate'):getExRate(r[i].get('currCode'),'CNY');
					var invoAmountOri = round2(r[i].get('expeTotalAmount')-r[i].get('expeInvoiceAmount'));
					var invoAmount = round2(invoAmountOri*ex/p.get('invoExRate'));
					var it = new SInvoiceItem({id:GGUID(),initId:'0',invoId:p.get('invoId'),invoDate:p.get('invoDate'),expeId:r[i].get('expeId'),expeType:r[i].get('expeType'),
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
					charNameEn:r[i].get('charNameEn'),
					unitName:r[i].get('unitName'),
					expeCurrCode:r[i].get('currCode'),
					expeUnitPrice:r[i].get('expeUnitPrice'),
					expeNum:r[i].get('expeNum'),
					expeExRate:r[i].get('expeExRate'),
					expeCommission:r[i].get('expeCommission'),
					expeCommissionRate:r[i].get('expeCommissionRate'),
					expeTotalAmount:r[i].get('expeTotalAmount'),
					expeInvoiceAmount:r[i].get('expeInvoiceAmount'),
					expeRemarks:r[i].get('expeRemarks'),
					initInvoiceAmountOri:invoAmountOri,
					initInvoiceAmount:invoAmount,
					initInvoiceAmountOriW:'0',
					initInvoiceAmountW:'0',
					initCancelFlag:'0',
					initWriteOffStatus:'0',
					invoCurrCode:p.get('currCode'),
					initExRate:ex,
					invoExRate:p.get('invoExRate'),
					rowAction:'',
					version:'0'});
					store.insert(0,it);
					it.set('rowAction','N');
					sum = sum + invoAmount;
				};
				frm.find('name','invoAmount')[0].setValue(sum);
		}});
	};
	
	if(billNo){
		showInvoiceItem();
	}
	else if(arr){
		showInvoiceItem();
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
		],defaults:{sortable:true,width:90}
	});
	
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
			var eStore = new Ext.data.GroupingStore({url:SERVICE_URL+'?A=EXPE_INV_Q',
				baseParams:{mt:'xml',custId:p.get('custId'),pateCode:'P',expeAllocatedFlag:0,
					expeType:p.get('invoType')},
				reader:new Ext.data.XmlReader({totalProperty:'rowCount',record:'SExpense',idProperty:'expeId'},SExpense),
				remoteSort:true,sortInfo:{field:'consNo', direction:'DESC'},groupField:'consNo'});
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
							var it = new SInvoiceItem({id:GGUID(),
								initId:'0',
								invoId:p.get('invoId'),
								invoDate:p.get('invoDate'),
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
								charNameEn:r[i].get('charNameEn'),
								unitName:r[i].get('unitName'),
								expeCurrCode:r[i].get('currCode'),
								expeUnitPrice:r[i].get('expeUnitPrice'),
								expeNum:r[i].get('expeNum'),
								expeExRate:r[i].get('expeExRate'),
								expeCommission:r[i].get('expeCommission'),
								expeCommissionRate:r[i].get('expeCommissionRate'),
								expeTotalAmount:r[i].get('expeTotalAmount'),
								expeInvoiceAmount:r[i].get('expeInvoiceAmount'),
								expeRemarks:r[i].get('expeRemarks'),
								initInvoiceAmountOri:invoAmountOri,
								initInvoiceAmount:invoAmount,
								initInvoiceAmountOriW:'0',
								initInvoiceAmountW:'0',
								initCancelFlag:'0',
								initWriteOffStatus:'0',
								invoCurrCode:p.get('currCode'),
								initExRate:ex,
								invoExRate:p.get('invoExRate'),
								rowAction:'',
								version:'0'
							});
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
		else{
			XMG.alert(SYS,M_SEL_SETTLE_OBJ);
			frm.find('name','custName')[0].focus();
		}
	};
	
	this.removeInit=function(){
		var r = sm.getSelections();
		if(r){
			for(var i=0;i<r.length;i++){
				r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');
				store.remove(r[i]);
			}
			this.reCalculate();
		}
	};
	
	var btnAdd = new Ext.Button({itemId:'TB_A',
		text:C_ADD,
		iconCls:'add',
		disabled:p.get('invoStatus')!='0',
		scope:this,
		handler:this.add
	});
	
	var btnRemove = new Ext.Button({itemId:'TB_B',
		text:C_REMOVE,
		iconCls:'remove',
		disabled:p.get('invoStatus')!='0',
		scope:this,
		handler:this.removeInit
	});
	
	Fos.InvoItemGrid.superclass.constructor.call(this, {
		id:'G_INVO_I'+p.get('id'),
		border:true,
		autoScroll:true,
		clicksToEdit:1,
		header:false,
		height:270,
		stripeRows:true,
	    store:store,
	    sm:sm,
	    cm:cm,
	    listeners:{scope:this,
	    	afteredit:function(e){
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
					e.grid.stopEditing();
					e.grid.startEditing(e.row,e.column);
					});				
				}
				else{
					r.set('initInvoiceAmountOri',iv);
					this.reCalculate();
				}
	    	}
	    	else if(f=='initExRate'){			
				r.set('initInvoiceAmount',round2(e.value*r.get('initInvoiceAmountOri')/p.get('invoExRate')));
				this.reCalculate();
	    	}
	    }
	},
    tbar:[btnAdd, '-', btnRemove]});
};    
Ext.extend(Fos.InvoItemGrid, Ext.grid.EditorGridPanel);

Fos.InvoEntryGrid = function(p,frm) {
	this.calculateSum = function(){
		var sumInv=0;
		var d=store.getRange();
		for(var i=0;i<d.length;i++){
			sumInv = sumInv + parseFloat(d[i].get('inenInvoiceAmount'));
		}			
		sumEn.setValue(round2(sumInv));			
		sumCap.setValue(getCURR(p.get('currCode'))+N2W(sumInv,2));
		sumCapEn.setValue(p.get('currCode')+' '+N2D(sumInv));
		p.set('invoAmountEntry',sumInv);
		p.set('invoAmountCapital',getCURR(p.get('currCode'))+N2W(sumInv,2));
		p.set('invoAmountCapitalEn',p.get('currCode')+' '+N2D(sumInv));
	};
	
	var store = GS('INEN_Q','SInvoiceEntry',SInvoiceEntry,'inenId','Desc','','','',false);
	
	if(p.get('rowAction')!='N') 
		store.load({params:{invoId:p.get('invoId')}});
	
	var sumEn = new Ext.form.NumberField({value:p.get('invoAmount'),disabled:true,width:60});
	var sumCap = new Ext.form.TextField({value:p.get('invoAmountCapital'),width:250});
	var sumCapEn = new Ext.form.TextField({value:p.get('invoAmountCapitalEn'),width:400});

	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,
		{header:C_CHAR,dataIndex:"charName",editor:new Ext.form.TextField({allowBlank:false,blankText:''})},
		{header:C_QUANTITY,dataIndex:"inenNum",editor:new Ext.form.NumberField({decimalPrecision:4})},
		{header:C_UNIT,hidden:true,dataIndex:"unitName",editor:new Ext.form.TextField()},		
		{header:C_UNIT_PRICE,dataIndex:"inenUnitPrice",align:'right',renderer:rateRender,
			editor:new Ext.form.NumberField({decimalPrecision:4})
		},
		{header:C_CURR_BASE,dataIndex:'currCode',width: 100,
			editor:new Ext.form.ComboBox({displayField:'currCode',
				valueField:'currCode',
				triggerAction: 'all',
				mode:'local',
				selectOnFocus:true,
				listClass:'x-combo-list-small',
				store:getCURR_S()
			})
		},		
		{header:C_ORI_AMOUNT,dataIndex:"inenTotalAmount",align:'right',renderer:numRender,editor:new Ext.form.NumberField()},
		{header:C_EX_RATE,dataIndex:"inenExRate",renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4})},
		{header:C_INVO_AMOUNT,dataIndex:"inenInvoiceAmount",align:'right',renderer:numRender,editor:new Ext.form.NumberField({allowBlank:false,blankText:'',invalidText:''})},
		{header:C_ENAME,dataIndex:"charNameEn",editor:new Ext.form.TextField({allowBlank:false,blankText:''})}
		],defaults:{sortable:true,width:100}});
	
	this.add=function(){
		var e = new SInvoiceEntry({id:GGUID(),
			inenId:'0',
			version:'0',
			rowAction:'N'
		});
		this.stopEditing();
		store.insert(0,e);
		this.startEditing(0, 1);
	};
	
	this.removeInen=function(){
		FOS_REMOVE(sm,store);
		this.calculateSum();
	};
	
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
	
	this.refresh = function(){
		var a=store.getRange();
		for(var i=0;i<a.length;i++){
			a[i].set('rowAction',a[i].get('rowAction')=='N'?'D':'R');
			store.remove(a[i]);
		}
		var g=frm.findById('G_INVO_I'+p.get('id'));
		var total = 0;
		var s = g.getStore();
		var d=s.getRange();
		for(var i=0;i<d.length;i++){
			var e = new SInvoiceEntry({id:GGUID(),
				inenId:'0',
				invoId:d[i].get('invoId'),
				charName:d[i].get('charName'),
				charNameEn:d[i].get('charNameEn'),
				unitName:d[i].get('unitName'),
				inenNum:d[i].get('expeNum'),
				inenUnitPrice:d[i].get('expeUnitPrice'),
				currCode:d[i].get('expeCurrCode'),
				inenExRate:d[i].get('initExRate'),
				expeCommission:d[i].get('expeCommission'),
				expeCommissionRate:d[i].get('expeCommissionRate'),
				inenTotalAmount:d[i].get('expeTotalAmount'),
				inenInvoiceAmount:d[i].get('initInvoiceAmount'),
				version:'0',
				rowAction:''
			});
			store.insert(0,e);
			e.set('rowAction','N');
			total = total + round2(d[i].get('initInvoiceAmount'));
		}
		sumEn.setValue(total); 
		sumCap.setValue(getCURR(p.get('currCode'))+N2W(total,2));
		sumCapEn.setValue(p.get('currCode')+' '+N2D(total));
		p.set('invoAmountEntry',total);
		p.set('invoAmountCapital',getCURR(p.get('currCode'))+N2W(total,2));
		p.set('invoAmountCapitalEn',p.get('currCode')+' '+N2D(total));
	};
	
	var btnAdd = new Ext.Button({itemId:'TB_A',
		text:C_ADD,
		iconCls:'add',
		disabled:p.get('invoStatus')!='0',
		scope:this,
		handler:this.add
	});
	
	var btnRemove = new Ext.Button({itemId:'TB_B',
		text:C_REMOVE,
		iconCls:'remove',
		disabled:p.get('invoStatus')!='0',
		scope:this,
		handler:this.removeInen
	});
	
	var btnMerge = new Ext.Button({itemId:'TB_C',
		text:C_MERGE,
		iconCls:'save',
		disabled:p.get('invoStatus')!='0',
		scope:this,
		handler:this.merge
	});
	
	var btnRefresh = new Ext.Button({itemId:'TB_D',
		text:C_REFRESH,
		iconCls:'refresh',
		disabled:p.get('invoStatus')!='0',
		scope:this,
		handler:this.refresh
	});
	
	
	Fos.InvoEntryGrid.superclass.constructor.call(this, {
		id:'G_INVO_E'+p.get('id'),
		border:true,
		autoScroll:true,
		clicksToEdit:1,
		header:false,
		height:270,
		stripeRows:true,
	    store: store,
	    sm:sm,
	    cm:cm,
	    listeners:{scope:this,
	    	afteredit:function(e){
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
		    }
	    },
	    bbar:[{xtype:'tbtext',text:C_TOTAL_AMOUNT_C},'-',sumEn,'-',
	          {xtype:'tbtext',text:C_CAP_AMOUNT_C},'-',sumCap,'-',
	          {xtype:'tbtext',text:C_CAP_AMOUNT_E},'-',sumCapEn],
	    tbar:[btnAdd, '-',btnRemove,btnMerge,btnRefresh]
    });
};    
Ext.extend(Fos.InvoEntryGrid, Ext.grid.EditorGridPanel);

Fos.InvoiceTab = function(p,billNo,arr) {
    this.itemGrid = new Fos.InvoItemGrid(p,this,billNo,arr);
    this.entryGrid = new Fos.InvoEntryGrid(p,this);
    
    this.editTax=function(){
    	var tn=this.find('name','invoTaxNo')[0];
    	tn.enable();
    	tn.focus();
    };
    
    this.save=function(){
    	if(p.get('invoType')=='R' && this.find('name','invoTitle')[0].getValue()==''){
			XMG.alert(SYS,M_INVO_TITLE_REQIRED);
			this.find('name','invoTitle')[0].focus();
			return;
		}
    	
    	btSave.setDisabled(true);
    			
		p.beginEdit();
		this.getForm().updateRecord(p);
		p.endEdit();
				
   	 	var xml = RTX(p,'SInvoice',SInvoice);
   	 	var a = this.itemGrid.getStore().getModifiedRecords();
		if(a.length>0){
			var x = ATX(a,'SInvoiceItem',SInvoiceItem);
			xml=xml+x;
		}
		if(p.get('invoType')=='R'){
			var e = this.entryGrid.getStore().getModifiedRecords();
			if(e.length>0){
				var x = ATX(e,'SInvoiceEntry',SInvoiceEntry);
				xml=xml+x;
			}
		}
		
		var tb=this.getTopToolbar();
		tb.getComponent('TB_A').setDisabled(true);
		
		Ext.Ajax.request({scope:this,
			url:SERVICE_URL,
			method:'POST',
			params:{A:'INVO_S'},
			success: function(res){
				var c = XTR(res.responseXML,'SInvoice',SInvoice);
				var ra=p.get('rowAction');
				var f = SInvoice.prototype.fields;
				p.beginEdit();
   				for (var i = 0; i < f.keys.length; i++) {
   					var fn = ''+f.keys[i];
   					p.set(fn,c.get(fn));
   				}							
				this.find('name','invoNo')[0].setValue(p.get('invoNo'));
				this.find('name','invoTaxNo')[0].setValue(p.get('invoTaxNo'));
				this.find('name','invoConsNo')[0].setValue(p.get('invoConsNo'));
				if(ra=='N'){
					this.setTitle((p.get('invoType')=='R'?C_AR:C_AP)+C_INVO+'-'+p.get("invoNo"));
					p.set('rowAction','M');
				}
				p.endEdit();
				var sa = this.itemGrid.getStore();
				var a = XTRA(res.responseXML,'SInvoiceItem',SInvoiceItem);
				FOSU(sa,a,SInvoiceItem);
				
				if(p.get('invoType')=='R'){
					var sc = this.entryGrid.getStore();
					var b = XTRA(res.responseXML,'SInvoiceEntry',SInvoiceEntry);
					FOSU(sc,b,SInvoiceEntry);
				}
				
				btSave.setDisabled(false);
				
				this.updateToolBar();				
				XMG.alert(SYS,M_S);
				
			},
			failure: function(res){
				XMG.alert(SYS,M_F+res.responseText);
				btSave.setDisabled(false);
			},
			xmlData:FOSX(xml)
		});
    };
    
    this.removeInvo=function(){
    	p.set('rowAction','R');
		var xml = RTX(p,'SInvoice',SInvoice);   	 	
		Ext.Ajax.request({scope:this,
			url:SERVICE_URL,
			method:'POST',
			params:{A:'INVO_S'},
			success: function(r){
				XMG.alert(SYS,M_S,function(){
					T_MAIN.remove('T_INVO_'+p.get('id'));
				});
			},
			failure: function(r){
				XMG.alert(SYS,M_F+r.responseText);
			},
			xmlData:FOSX(xml)
		});
    };
    
    this.addInvoice=function(){
    	var currCode='CNY';
    	var w=new Fos.CurrencyWin();
		w.addButton({text:C_OK,
			scope:this,
			handler:function(){
			currCode = w.findById('currCode').getValue();
			w.close();var id=GGUID();
			var e = new SInvoice({invoId:id,
				id:id,
				invoNo:'N'+id,
				currCode:currCode,
				invoDueDate:p.get('invoDueDate'),
				invoTitle:p.get('invoTitle'),
				invoType:p.get('invoType'),
				custId:p.get('custId'),
				custName:p.get('custName'),
				custSname:p.get('custSname'),
				invoDate:new Date(),
				invoExRate:getExRate(currCode,'CNY'),
				invoWriteOffStatus:'0',
				invoPrFlag:'0',
				invoUploadFlag:'0',
				invoStatus:'0',
				version:'0',
				rowAction:'N'});
			
			var tab = T_MAIN.add(new Fos.InvoiceTab(e));
			T_MAIN.setActiveTab(tab);
		}},this);
		w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);w.show();
    };
    
    this.updateStatus=function(a,s){
    	Ext.Ajax.request({scope:this,
    		url:SERVICE_URL,
    		method:'POST',
    		params:{A:a,invoId:p.get('invoId'),invoStatus:s},
			success: function(r){
				p.set('invoStatus',s);
				p.set('version', parseInt(p.get('version')) + 1);
				this.updateToolBar();
				XMG.alert(SYS,M_S);
			},
			failure: function(r){
				XMG.alert(SYS,M_F+r.responseText);
			}
		});	
    };    
    
    this.check=function(){
    	this.updateStatus('INVO_U','1');
    };
    
    this.renew=function(){
    	this.updateStatus('INVO_U','0');
    };
    
    this.cancel=function(){
    	this.updateStatus('INVO_C','2');
    };
    
	this.updateToolBar = function(){
		var tb=this.getTopToolbar();
		btSave.setDisabled(NR(M1_S+(p.get('invoType')=='R'?S_INVO_R:S_INVO_P)+F_M)||p.get('invoStatus')!='0'||p.get('invoWriteOffStatus')!='0');
    	tb.getComponent('TB_B').setDisabled(NR(M1_S+(p.get('invoType')=='R'?S_INVO_R:S_INVO_P)+F_R)||p.get('invoStatus')!='0'||p.get('invoWriteOffStatus')!='0'||p.get('rowAction')=='N');
    	tb.getComponent('TB_C').setDisabled(NR(M1_S+(p.get('invoType')=='R'?S_INVO_R:S_INVO_P)+F_A)||p.get('invoStatus')!='0'||p.get('invoWriteOffStatus')!='0'||p.get('rowAction')=='N');
    	tb.getComponent('TB_D').setDisabled(NR(M1_S+(p.get('invoType')=='R'?S_INVO_R:S_INVO_P)+F_A)||p.get('invoStatus')!='1'||p.get('invoWriteOffStatus')!='0');
    	tb.getComponent('TB_E').setDisabled(NR(M1_S+(p.get('invoType')=='R'?S_INVO_R:S_INVO_P)+F_F)||p.get('invoStatus')!='1'||p.get('invoWriteOffStatus')!='0');
    	
    	if(p.get('invoType')=='R') 
    		tb.getComponent('TB_F').setDisabled(NR(M1_S+(p.get('invoType')=='R'?S_INVO_R:S_INVO_P)+F_IM)||p.get('invoStatus')!='0'||p.get('invoWriteOffStatus')!='0'||p.get('rowAction')=='N');
    	tb.getComponent('TB_M').setText(C_STATUS_C+getIVST(p.get('invoStatus'))+'/'+getWRST(p.get('invoWriteOffStatus')));
    	tb.getComponent('TB_H').setDisabled(NR(M1_S+(p.get('invoType')=='R'?S_VOUC_R:S_VOUC_P)+F_M)||p.get('invoStatus')!='1'||p.get('invoWriteOffStatus')!='0'||p.get('rowAction')=='N');
    	this.itemGrid.getTopToolbar().getComponent('TB_A').setDisabled(p.get('invoStatus')!='0');
    	this.itemGrid.getTopToolbar().getComponent('TB_B').setDisabled(p.get('invoStatus')!='0');
    };
    
    this.expInvo=function(){
    	EXPC('INVO','&invoId='+p.get('invoId'));
    };
    
    this.genVoucher=function(){
		var rid=GGUID();
		var e = new SVoucher({id:rid,
			voucId:rid,
			voucNo:'N'+rid,
			currCode:p.get('currCode'),
			voucType:p.get('invoType'),
			voucDate:new Date(),
			voucExRate:getExRate(p.get('currCode'),'CNY'),
			custId:p.get('custId'),
			custName:p.get('custName'),
			custSname:p.get('custSname'),
			voucAmount:p.get('invoAmount'),
			voucWriteOffAmount:p.get('invoAmount'),
			voucFixAmount:0,
			voucUploadFlag:'0',
			voucStatus:'0',
			voucWriteOffStatus:'0',
			version:'0',
			rowAction:'N'
		});
		var t = T_MAIN.add(new Fos.VoucherTab(e,'',p.get('invoId')));
		T_MAIN.setActiveTab(t);
	};
	       
    var btSave = new Ext.Button({itemId:'TB_A',text:C_SAVE,
    	iconCls:'save',
    	disabled:NR(M1_S+(p.get('invoType')=='R'?S_INVO_R:S_INVO_P)+F_M)||p.get('invoStatus')!='0'||p.get('invoWriteOffStatus')!='0',
    	scope:this,
    	handler:this.save
    });
    
    var btnRemove = new Ext.Button({itemId:'TB_B',
    	text:C_REMOVE,
    	iconCls:'remove',
    	disabled:NR(M1_S+(p.get('invoType')=='R'?S_INVO_R:S_INVO_P)+F_R)||p.get('invoStatus')!='0'||p.get('invoWriteOffStatus')!='0'||p.get('rowAction')=='N',
    	scope:this,
    	handler:this.removeInvo
    });
    
    //审核
    var btnAudit = new Ext.Button({itemId:'TB_C',
    	text:C_AUDIT,
    	iconCls:'check',
    	disabled:NR(M1_S+(p.get('invoType')=='R'?S_INVO_R:S_INVO_P)+F_A)||p.get('invoStatus')!='0'||p.get('rowAction')=='N',
    	scope:this,
    	handler:this.check
    });
    
    //取消审核
    var btnCancelAudit = new Ext.Button({itemId:'TB_D',
    	text:C_CANCEL_AUDIT,
    	iconCls:'renew',
    	disabled:NR(M1_S+(p.get('invoType')=='R'?S_INVO_R:S_INVO_P)+F_A)||p.get('invoStatus')!='1'||p.get('invoWriteOffStatus')==2,
    	scope:this,
    	handler:this.renew
    });
    
    //作废
    var btnInvalid = new Ext.Button({itemId:'TB_E',
    	text:C_INVALID,
    	iconCls:'cancel',
    	disabled:NR(M1_S+(p.get('invoType')=='R'?S_INVO_R:S_INVO_P)+F_F)||p.get('invoStatus')!='1'||p.get('invoWriteOffStatus')!='0',
    	scope:this,
    	handler:this.cancel
    });
    
    var btnModifyInvoiceNo = new Ext.Button({itemId:'TB_F',
    	text:C_MODIFY_INVO_NO,
    	iconCls:'option',
    	disabled:NR(M1_S+(p.get('invoType')=='R'?S_INVO_R:S_INVO_P)+F_IM)||p.get('invoStatus')!='0'||p.get('invoWriteOffStatus')!='0'||p.get('rowAction')=='N',
    	scope:this,
    	handler:this.editTax
    });
    
    //导出发票，应收账单
    this.expDebitNote = function(){
    	EXPC('DEBIT_NOTE','&invoId='+p.get('invoId'));
    };
    
    //导出应收账单
    var btnExport = new Ext.Button({text:C_EXPORT+'(E)',iconCls:'print',
		disabled:p.get('invoWriteOffStatus')!='0',
		scope:this,menu: {
			items: [
		        {text:C_INVO_TAX,scope:this,handler:this.expInvo},
		        {text:'应收账单(DebitNote)',scope:this,handler:this.expDebitNote}
		    ]
		}
	});
    
    //导出应付账单
	var btnExpoftAp = new Ext.Button({text:C_EXPORT,
		iconCls:'print',
		disabled:p.get('invoWriteOffStatus')!='0',
		scope:this,
		menu: {items: [{text:'应付账单(CreditNote)',scope:this,handler:this.expDebitNote}]}
	}); 
	
	//状态
	var btnStatus = new Ext.Button({itemId:'TB_M',
		disabled:true,
		text:C_STATUS_C+getIVST(p.get('invoStatus'))+'/'+getWRST(p.get('invoWriteOffStatus'))
	});
	
	//新增
	var btnAdd = new Ext.Button({itemId:'TB_G',
		text:C_ADD,
		iconCls:'add',
		scope:this,
		handler:this.addInvoice
	});
	
	//核销
	var btnWriteOff = new Ext.Button({itemId:'TB_H',
		text:p.get('invoType')=='R'?C_WRITEOFF_R:C_WRITEOFF_P,
		iconCls:'save',			 
		disabled:NR(M1_S+(p.get('invoType')=='R'?S_VOUC_R:S_VOUC_P)+F_M)
			||p.get('invoStatus')!='1'||p.get('invoWriteOffStatus')!='0'||p.get('rowAction')=='N',
		scope:this,
		handler:this.genVoucher
	});
	
	//结算单位
	var cboCustomer = new Fos.CustomerLookup({
		fieldLabel:HL(C_SETTLE_OBJECT),
		tabIndex:1,
		name:'custName',
		value:p.get('custName'),
		store:getCS(),
		enableKeyEvents:true,
		allowBlank:false,
		displayField:'custCode',
		valueField:'custCode',
		typeAhead:true,
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'97.5%',
   		mode:'local',
   		tpl:custTpl,
   		itemSelector:'div.list-item',
   		listWidth:400,
   		listeners:{
   			scope:this,
   			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('custId','');
					p.set('custSname','');
					p.set('custName','');
					p.set('invoTitle','');				
				}
			},
   			select:function(c,r,i){
				if(p.get('invoType')=='R'){
					var invTitle=r.get('custInvoiceHeader');
					if(!invTitle) invTitle=r.get('custNameCn');				
					this.find('name','invoTitle')[0].setValue(invTitle);
					var dd=r.get('custCreditDay');
					if(!dd) dd=getCFG('CUSTOMER_DEFAULT_CRDIT_DAYS');
					this.find('name','invoDueDate')[0].setValue(new Date().add(Date.DAY,parseInt(dd)));
				}
				else
				{
					p.set('invoTitle',r.get('custNameCn'));				
				}
				
				p.set('custId',r.get('custId'));
				p.set('custSname',r.get('custCode'));
				p.set('custName',r.get('custNameCn'));
				c.setValue(r.get('custNameCn'));
			},
			keydown:{fn:function(f,e){
				LC(f,e,'');
				},buffer:500
			}
		}
	});
	
	//发票抬头
	var txtInvoTitel = new Ext.form.TextField({fieldLabel:HL(C_INVO_TITLE),
		tabIndex:2,
		name:'invoTitle',
		allowBlank:false,
		value:p.get('invoTitle'),
		anchor:'97.5%'
	});
	
	//账单号
	var c3 = new Ext.form.TextField({fieldLabel:C_INVO_NO,
		tabIndex:3,
		name:'invoNo',
		disabled:true,
		value:p.get('invoNo'),
		anchor:'95%'
	});
	
	//币种
	var c4 = new Ext.form.TextField({fieldLabel:C_CURR,
		tabIndex:4,
		name:'currCode',
		allowBlank:false,
		value:p.get('currCode'),
		disabled:true,
		xtype:'textfield',
		anchor:'95%'
	});
	
	//银行
	var c5 = new Ext.form.ComboBox({fieldLabel:C_BANK,
		tabIndex:5,
		name:'invoBank',
		value:p.get('invoBank'),
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
    			this.find('name','invoAccount')[0].setValue(r.get('cobaAccount'));
    		},
    		render:function(cbx){
    			cbx.store.filterBy(function(rec,id){return rec.get('currCode')==p.get('currCode');});
    		}
    	}
	});
	
	//账单日期
	var c6 = new Ext.form.DateField({fieldLabel:HL(C_INVO_DATE),
		tabIndex:6,
		name:'invoDate',
		value:p.get('invoDate'),
		xtype:'datefield',
		format:DATEF,
		anchor:'95%'
	});
	
	//汇率
	var c7 = new Ext.form.NumberField({fieldLabel:C_EX_RATE,
		tabIndex:7,
		name:'invoExRate',
		value:p.get('invoExRate'),
		disabled:p.get('currCode')=='CNY',
		xtype:'numberfield',
		decimalPrecision:4,
		anchor:'95%',
        listeners:{scope:this,
        	change:function(f,nv,ov){
        		var a = this.itemGrid.getStore().getRange();
        		
        		if(a.length>0){
        			for(var i=0;i<a.length;i++){
        				if(a[i].get('expeCurrCode')==p.get('currCode')){
        					a[i].set('initExRate',nv);
        				}
        				
        				var ex=a[i].get('initExRate');
						var invoAmountOri = a[i].get('initInvoiceAmountOri');
						var invoAmount = round2(invoAmountOri*ex/nv);
						a[i].set('initInvoiceAmount',invoAmount);
        			}
        			this.itemGrid.reCalculate();
        		}
        	}
        }
	});
	
	var c8 = {fieldLabel:C_BANK_ACCOUNT,
		tabIndex:8,
		name:'invoAccount',
		value:p.get('invoAccount'),
		xtype:'textfield',
		anchor:'95%'
	};
	
	var c9 = {fieldLabel:C_TAX_NO,
		disabled:p.get('invoType')=='R'?true:false,
		tabIndex:9,
		name:'invoTaxNo',
		value:p.get('invoTaxNo'),
		xtype:'textfield',
		anchor:'95%'
	};
	
	var c10 = {fieldLabel:C_INVO_AMOUNT,
		tabIndex:10,
		name:'invoAmount',
		value:p.get('invoAmount'),
		disabled:true,
		xtype:'textfield',
		anchor:'95%'
	};
	
	var c11 = {fieldLabel:C_DUE_DATE,
		tabIndex:11,
		name:'invoDueDate',
		value:p.get('invoDueDate'),
		xtype:'datefield',
		format:DATEF,
		anchor:'95%'
	};
	
	var c12 = {fieldLabel:C_WRITEOFFED_AMOUNT,
		tabIndex:12,
		name:'invoAmountWriteOff',
		value:p.get('invoAmountWriteOff'),
		disabled:true,
		xtype:'textfield',
		anchor:'95%'
	};	
	
	var c14 = {fieldLabel:C_CONS_NO,
		tabIndex:14,name:'invoConsNo',value:p.get('invoConsNo'),xtype:'textfield',anchor:'95%'};
	
	var c15={fieldLabel:C_DEBIT_NOTE,tabIndex:15,name:'invoDebitnoteFlag',checked:p.get('invoDebitnoteFlag')=='1',xtype:'checkbox',anchor:'95%'};

	var txtInvoRemarks = new Ext.form.TextArea({fieldLabel:C_REMARKS,
		tabIndex:13,
		name:'invoRemarks',
		value:p.get('invoRemarks'),
		xtype:'textarea',
		anchor:'97.5%'
	});
	
	Fos.InvoiceTab.superclass.constructor.call(this, { 
		id: 'T_INVO_'+p.get('id'),
		title:(p.get('invoType')=='R'?C_AR:C_AP)+C_INVO+'-'+p.get('invoNo'),
		layout:'border',
		//autoScroll:true,
		labelAlign:'right',
		closable:true,
		//labelWidth:70,
		border:false,
		//width:800,
		tbar:p.get('invoType')=='R'?[btSave,'-',btnRemove,'-',btnAudit,'-',btnCancelAudit,'-',btnInvalid,'-',btnModifyInvoiceNo,'-',btnExport,'-',btnAdd,'-',btnWriteOff,'->','-',btnStatus,'-']:
									[btSave,'-',btnRemove,'-',btnAudit,'-',btnCancelAudit,'-',btnInvalid,'-',btnExpoftAp,'-',btnAdd,'-',btnWriteOff,'->','-',btnStatus,'-'],
		bbar:[{xtype:'tbtext',text:C_CREATE_BY_C+getUSER(p.get('createBy'))},'-',
				{xtype:'tbtext',text:C_CREATE_TIME_C+formatDateTime(p.get('createTime'))},'-',
				{xtype:'tbtext',text:C_MODIFY_BY_C+getUSER(p.get('modifyBy'))},'-',
				{xtype:'tbtext',text:C_MODIFY_TIME_C+formatDateTime(p.get('modifyTime'))},'-',
				{xtype:'tbtext',text:C_AUDIT_BY_C+getUSER(p.get('invoChecker'))},'-',
				{xtype:'tbtext',text:C_AUDIT_TIME_C+formatDate(p.get('invoCheckDate'))}],
		items: [{region:'north',layout:'column',height:200,layoutConfig:{columns:4},bodyStyle:'padding:5px 0px 0px 0px',title:'头信息',collapsible:true,
	    	items:p.get('invoType')=='R'?[    		
	    		{columnWidth:.5,layout:'form',border:false,items:[cboCustomer]},
	        	{columnWidth:.5,layout:'form',border:false,items:[txtInvoTitel]},
	        	{columnWidth:.25,layout:'form',border:false,items:[c3,c4,c5]},
	            {columnWidth:.25,layout:'form',border:false,items: [c6,c7,c8]},
	            {columnWidth:.25,layout: 'form',border : false,items: [c9,c10,c14]},
	            {columnWidth:.25,layout: 'form',border : false,items: [c11,c12,c15]},
	            {columnWidth:.5,layout:'form',border:false,items:[txtInvoRemarks]}
	            ]:[
	            {columnWidth:.5,layout:'form',border:false,items:[cboCustomer]},
				{columnWidth:.25,layout:'form',border:false,items:[c3]},
				{columnWidth:.25,layout:'form',border:false,items:[c9]},				
	            {columnWidth:.25,layout:'form',border:false,items:[c4,c5]},
	            {columnWidth:.25,layout:'form',border:false,items: [c7,c8]},
	            {columnWidth:.25,layout: 'form',border:false,items: [c10,c14]},
	            {columnWidth:.25,layout: 'form',border : false,items: [c12,c15]},
	            {columnWidth:.5,layout:'form',border:false,items:[txtInvoRemarks]}
	        ]},
			{id:'T_INV_T_'+p.get('id'),xtype:'tabpanel',plain:true,region:'center',activeTab:0,
	            items:p.get('invoType')=='R'?[{id:'T_INV_EN_'+p.get('id'),layout:'fit',title:C_EXPE_LINE+'(E)',items:[this.itemGrid]},
	            {id:'T_INV_LI_'+p.get('id'),layout:'fit',title:C_INVO_LINE+'(L)',
	            	items:[this.entryGrid]}]:[{layout:'fit',title:C_EXPE_LINE,items:[this.itemGrid]}]}
	        ]
	});
};
Ext.extend(Fos.InvoiceTab, Ext.FormPanel);

//发票查询
Fos.InvoLookupWin = function(t) {    
	var frmLookup = new Ext.form.FormPanel({labelWidth:70,labelAlign:"right",
    	items:[{id:'T_INVO_LOOK',xtype:'tabpanel',plain:true,activeTab:0,height:200,defaults:{bodyStyle:'padding:10px'},
            items:[{id:'T_INVO_LOOK_1',title:C_LOOK_BY_INVO_NO,layout:'form',
				items:[{fieldLabel:C_INVO_NO,name:'invoNo',xtype:'textarea',anchor:'95%'},
            	{boxLabel:C_LOOK_SMART,name:'invoNoM',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}
       			]},
       			{id:'T_INVO_LOOK_2',title:C_LOOK_BY_TAX_NO,layout:'form',
				items: [
					{fieldLabel:C_TAX_NO,name:'invoTaxNo',xtype:'textarea',anchor:'95%'},
					{boxLabel:C_LOOK_SMART,name:'invoTaxNoM',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}
				]},
        		{id:'T_INVO_LOOK_3',title:C_LOOK_COMPLEX,layout:'column',items:[
        			{columnWidth:.33,layout:'form',border:false,
	             	items:[
	             	{fieldLabel:C_SETTLE_OBJECT,tabIndex:1,name:'custId',store:getCS(),enableKeyEvents:true,
	             	xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
	             	tpl:custTpl,itemSelector:'div.list-item',listWidth:400,listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,t=='R'?'custArFlag':'custApFlag');},buffer:500}}},
	             	{fieldLabel:C_CURR,tabIndex:4,name:'currCode',store:getCURR_S(),xtype:'combo',displayField:'currCode',valueField:'currCode',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
        			{fieldLabel:C_CONS_NO,name:'consNo',xtype:'textfield',anchor:'95%'},
        			{fieldLabel:C_BL_NO,name:'consMblNo',xtype:'textfield',anchor:'95%'},
        			{fieldLabel:C_INVO_STATUS,tabIndex:10,name:'invoStatus',store:IVST_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
        			{fieldLabel:C_WRITEOFF_STATUS,name:'invoWriteOffStatus',xtype:'combo',store:WRST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'}
	             	]},
	             	{columnWidth:.33,layout:'form',border:false,
	             	items:[
	             	{fieldLabel:C_INVO_DATE,name:'invoDate',xtype:'datefield',format:DATEF,anchor:'95%'},
	             	{fieldLabel:C_DUE_DATE,name:'invoDueDate',xtype:'datefield',format:DATEF,anchor:'95%'},
	             	{fieldLabel:C_SAIL_DATE,name:'consSailDate',xtype:'datefield',format:DATEF,anchor:'95%'},
	             	{fieldLabel:C_VESS,name:'vessName',store:getVES(),enableKeyEvents:true,
	             		xtype:'combo',displayField:'vessNameEn',valueField:'vessNameEn',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
	             		listeners:{scope:this,keydown:{fn:function(f,e){LV(f,e);},buffer:500}}},
	             	{fieldLabel:C_INVO_AMOUNT,name:'invoAmount',xtype:'numberfield',anchor:'95%'}
	             	]},
	             	{columnWidth:.34,layout:'form',border:false,
	             	items:[	             	
	             	{fieldLabel:C_TO,name:'invoDate2',xtype:'datefield',format:DATEF,anchor:'95%'},
	             	{fieldLabel:C_TO,name:'invoDueDate2',xtype:'datefield',format:DATEF,anchor:'95%'},
	             	{fieldLabel:C_TO,name:'consSailDate2',xtype:'datefield',format:DATEF,anchor:'95%'}	,
	             	{fieldLabel:C_VOYA,tabIndex:10,name:'voyaName',xtype:'textfield',anchor:'95%'},
	             	{fieldLabel:C_TO,name:'invoAmount2',xtype:'numberfield',anchor:'95%'}
	             	]}
	        	]}
        	]}
        ]
    });
    Fos.InvoLookupWin.superclass.constructor.call(this, {title:C_INVO_QUERY,iconCls:'search',modal:true,width:600,minWidth:300,
        minHeight:200,plain:true,bodyStyle:'padding:0px;',buttonAlign:'right',items:frmLookup}); 
};
Ext.extend(Fos.InvoLookupWin, Ext.Window);


//发票号码管理
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
		id:'G_INNO',
		title:C_INNO_MGT,
		closable:true,
		border:false,
		height:200,
		autoScroll:true,
		sm:sm,
		cm:cm,
		store:store,
		sortInfo:{field:'innoId',direction:'DESC'},
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


Fos.CurrencyWin = function() {
    Fos.CurrencyWin.superclass.constructor.call(this, {title:C_CURR_P,
    	modal:true,
    	width:180,
        height:90,
        plain:false,
        buttonAlign:'right',
        items:[
        {fieldLabel:C_CURR,
        	id:'currCode',
        	value:'CNY',
        	allowBlank:false,
        	store:getCURR_S(),
        	xtype:'combo',
        	displayField:'currCode',
        	valueField:'currCode',
        	typeAhead: true,
        	mode: 'local',
        	triggerAction: 'all',
        	selectOnFocus:true,anchor:'99%'}]
    }); 
};
Ext.extend(Fos.CurrencyWin, Ext.Window);