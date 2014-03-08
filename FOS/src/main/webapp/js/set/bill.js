//对帐单列表
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
		else {tab = T_MAIN.add(new Fos.BillTab(p,''));
		T_MAIN.setActiveTab(tab);tab.doLayout();}
	};
	this.search = function(){
		var w=new Fos.BillLookupWin(store,t);
		w.show();
	};
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
		var tab = T_MAIN.add(new Fos.BillTab(r,''));
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

//对帐单
Fos.BillTab = function(p,arr){
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
	var billAmountCny= new Ext.form.TextField({fieldLabel:C_SUM_CNY,tabIndex:11,name:'billAmountCny',
                	value:p.get('billAmountCny'),disabled:true,anchor:'95%'});
    var billAmountUsd = new Ext.form.TextField({fieldLabel:C_SUM_USD,tabIndex:11,name:'billAmountUsd',
                	value:p.get('billAmountUsd'),disabled:true,anchor:'95%'});
    var billAmount = new Ext.form.TextField({fieldLabel:C_SUM_LOC,tabIndex:11,name:'billAmount',
    	            value:p.get('billAmount'),disabled:true,anchor:'95%'});
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
		billAmount.setValue(sum);
		billAmountUsd.setValue(usd);
		billAmountCny.setValue(cny);
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
    this.showBillExpense = function(){
		for(var i=0;i<arr.length;i++){
			var rid=GGUID();
			var it = new SBillItem({id:rid,biitId:rid,billId:p.get('billId'),expeId:arr[i].get('expeId'),
			custId:arr[i].get('custId'),custName:arr[i].get('custName'),
			custSname:arr[i].get('custSname'),
			charId:arr[i].get('charId'),charName:arr[i].get('charName'),
			unitId:arr[i].get('unitId'),unitName:arr[i].get('unitName'),
			currCode:arr[i].get('currCode'),expeType:arr[i].get('expeType'),
			expePaymentType:arr[i].get('pateId'),
			expeDate:arr[i].get('expeDate'),expeUnitPrice:arr[i].get('expeUnitPrice'),
			expeCommission:arr[i].get('expeCommission'),expeCommissionRate:arr[i].get('expeCommissionRate'),
			expeNum:arr[i].get('expeNum'),expeTotalAmount:arr[i].get('expeTotalAmount'),
			expeExRate:arr[i].get('expeExRate'),expeStatus:arr[i].get('expeExStatus'),
			expeRemarks:arr[i].get('expeRemarks'),expeForwardFlag:arr[i].get('expeForwardFlag'),
			consNo:arr[i].get('consNo'),							
			consVessel:arr[i].get('consVessel'),consVoyage:arr[i].get('consVoyage'),
			consMblNo:arr[i].get('consMblNo'),consHblNo:arr[i].get('consHblNo'),version:'0'});
			store.insert(0,it);
			it.set('rowAction','N');
		};
		this.recalculate();
    };
    if(arr){
    	 this.showBillExpense();
    }
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
				for(var i=0;i<sa.length;i++){
					if(sa[i].get('rowAction')=='N'){
						sa[i].set('rowAction','M');
					}
				}
				var a = XTRA(res.responseXML,'SBillItem',SBillItem);FOSU(sa,a,SBillItem);
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
    		var currCode='CNY';
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
        			var tab = T_MAIN.add(new Fos.InvoiceTab(e,p.get('billNo'),''));
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
    			var tab = T_MAIN.add(new Fos.InvoiceTab(e,p.get('billNo'),''));
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
                	billAmountUsd,billAmount
                ]
            },
            {columnWidth:.25,layout: 'form',border : false,
                items: [
                billAmountCny           	
               ]
            }]
       	},
		{layout:'fit',region:'center',deferredRender:false,labelWidth:40,labelAlign:'top',
       		title:C_EXPE_LINE,items:this.grid}
	]});
};
Ext.extend(Fos.BillTab, Ext.FormPanel);

