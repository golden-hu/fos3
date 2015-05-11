//应收应付费用管理
Fos.ExpenseList = function(t){
	var store = new Ext.data.GroupingStore({url:SERVICE_URL,
		baseParams:{
			A:'EXPE_X_S',
			mt:'xml',
			expeType:t
		},
		reader:new Ext.data.XmlReader({totalProperty:'rowCount',
			record:'SExpense',idProperty:'expeId'},SExpense),
		sortInfo:{field:'consNo', direction:'DESC'},
		remoteSort:true,
		autoLoad:false
	});
	
	var consNo = {header:C_CONS_NO,dataIndex:'consNo',width:150};
	
	var t1={header:C_SETTLE_OBJECT,width:200,dataIndex:"custName",align:'center'};		
	var t2={header:C_CHAR,width:80,dataIndex:"charName"};
    var t3={header:C_UNIT,dataIndex:"unitName"};
    var t4={header:C_QUANTITY,width:60,dataIndex:"expeNum",renderer:expenseNumRender};
	var t5={header:C_UNIT_PRICE,dataIndex:"expeUnitPrice",renderer:expenseNumRender};
	var t6={header:C_CURR,dataIndex:'currCode',width:50};
	var t7={header:C_EX_RATE,width:60,dataIndex:"expeExRate",renderer:rateRender};	
	var t8={header:C_AMOUNT,width:80,dataIndex:"expeTotalAmount",renderer:numRender};
	var t11={header:C_PPCC,dataIndex:'pateCode',width:40};
    var t12={header:C_INVO_NO,align:'center',dataIndex:"expeInvoiceNo"};
    var t13={header:C_TAX_NO,align:'center',dataIndex:"expeTaxInvoiceNo"};
    var t14={header:C_INVOICED_AMOUNT,renderer:rateRender,dataIndex:"expeInvoiceAmount"};   
    var t15={header:C_WRITEOFFED_AMOUNT,renderer:rateRender,dataIndex:"expeWriteOffAmount"};    
    var t16={header:C_REMARKS,width:100,dataIndex:"expeRemarks"};
    var t17={header:C_INVO_DATE,width:100,renderer:formatDate,dataIndex:"expeInvoiceDate"};
    var t18={header:C_WRITEOFF_DATE,renderer:formatDate,dataIndex:"expeWriteOffDate"};
    var t19={header:C_CREATE_TIME,renderer:formatDateTime,dataIndex:"createTime"};
    var t20={header:C_MODIFY_TIME,renderer:formatDateTime,dataIndex:"modifyTime"};
    var t21={header:C_COMMISION_RATE,width:80,dataIndex:"expeCommissionRate",renderer:rateRender};
	var t22={header:C_COMMISION,width:60,dataIndex:"expeCommission"};
	var t23={header:C_CREATE_BY,renderer:getUSER,dataIndex:"createBy"};
	var t24={header:C_MODIFY_BY,renderer:getUSER,dataIndex:"expeUpdateBy"};
	var t25={header:C_BILL_BY,renderer:getUSER,dataIndex:"expeInvoiceBy"};
	var t26={header:C_VOUC_BY,renderer:getUSER,dataIndex:"expeWriteOffBy"};
	var t27={header:C_INVO_TITLE,dataIndex:'expeInvoiceTitle',align:'center',width:100,editor:new Ext.form.TextField()};
	var t28={header:C_WHETHER_INVOICING,dataIndex:'expeInvoiceFlag',renderer:getY_O_N};
	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cols=[];
	if(t=='R'){
		cols=[sm,consNo,t1,t28,t27,t2,t3,t4,t5,t6,t21,t22,t8,t11,t7,t16,t12,t13,t14,t15,t17,t18,t23,t19,t24,t20,t25,t26];
	}
	else{
		cols=[sm,consNo,t1,t2,t3,t4,t5,t6,t21,t22,t8,t11,t7,t16,t12,t13,t14,t15,t17,t18,t23,t19,t24,t20,t25,t26];
	}
	var cm=new Ext.grid.ColumnModel({columns:cols,defaults:{sortable:true,width:100,align:'center'}});
	cm.defaultSortable=true;cm.defaultWidth=100;		
	
	var title = "";
	if(t=="R"){
		title=C_EXPE_R;
	}
	else if(t=="P"){
		title=C_EXPE_P;
	}
	else{
		title=C_EXPE_D;
	}
	
	
    
	//业务号
	var txtConsNo = new Ext.form.TextField({fieldLabel:C_CONS_NO,
		anchor:"90%",
		name:'consNo'
	});
	
	//结算单位
	var cboCustId = new Fos.CustomerLookup({fieldLabel:C_SETTLE_OBJECT,
		anchor:"90%",
		name:'custId',
		store:getCS(),
		displayField:'custNameCn',
		valueField:'custId',
		 typeAhead:true,
		 enableKeyEvents:true,
		 mode:'local',
		 tpl:custTpl,
		 itemSelector:'div.list-item',
		 listWidth:400,
		 triggerAction:'all',
		 selectOnFocus:true,
		 listeners:{scope:this,
			 keydown:{
				 fn:function(f,e){
					 LC(f,e,'');
				 },buffer:500
			}
		 }
	});
	
	//是否开发票
	var cboExpeInvoiceFlag = new Ext.form.ComboBox({fieldLabel:C_WHETHER_INVOICING,
		anchor:"90%",
		name:'expeInvoiceFlag',
		displayField:'NAME',
		valueField:'CODE',
		typeAhead: true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		store:Y_O_N
	});
	
	//账单状态
	var cboExpeInvoiceStatus = new Ext.form.ComboBox({fieldLabel:C_INVO_STATUS_R,
		anchor:"90%",
		name:'expeInvoiceStatus',
		store:INST_S,
		displayField:'NAME',
		valueField:'CODE',
		typeAhead: true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true
	});
	
	//核销状态
	var cboExpeWriteoffStatus =new Ext.form.ComboBox({fieldLabel:C_WRITEOFF_STATUS_R,
		anchor:"90%",
		name:'expeWriteoffStatus',
		store:WRST_S,
		displayField:'NAME',
		valueField:'CODE',
		typeAhead: true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true
	});
	
	//账单号
	var txtExpeInvoiceNo = new Ext.form.TextField({fieldLabel:C_INVO_NO,
		name:'expeInvoiceNo',
		anchor:"90%"
	});
	
	//币种
	var cboCurrCode = new Ext.form.ComboBox({fieldLabel:C_CURR,
		anchor:"90%",
		name:'currCode',
		displayField:'currCode',
		valueField:'currCode',
		triggerAction: 'all',
        mode:'local',
        selectOnFocus:true,
        store:getCURR_S(),
        typeAhead:true
    });
	
    //账单日期
    var dtExpeInvoiceDate = new Ext.form.DateField({fieldLabel:C_INVO_DATE+C_FROM,
    	anchor:"90%",
    	name:'expeInvoiceDate',
    	format:DATEF
    });
    
    var dtExpeInvoiceDate2 = new Ext.form.DateField({fieldLabel:C_TO,
    	anchor:"90%",
    	name:'expeInvoiceDate2',
    	format:DATEF
    });
    
    //核销单日期
    var dtExpeWriteOffDate = new Ext.form.DateField({fieldLabel:C_WRITEOFF_DATE+C_FROM,anchor:"90%",name:'expeWriteOffDate',format:DATEF});
    var dtExpeWriteOffDate2 = new Ext.form.DateField({fieldLabel:C_TO,anchor:"90%",name:'expeWriteOffDate2',format:DATEF});
    
    var queryParams = [];
    queryParams[queryParams.length] = new QParam({key:'expeType',value:t,op:1});
    
    //查询方法
    this.reload=function(){
     	var a=[];     	
     	var op=1; 
     	//业务号
     	var consNo=txtConsNo.getValue();
 		if(consNo) a[a.length]=new QParam({key:'consNo',value:consNo,op:7});
 		//结算单位
 		var custId=cboCustId.getValue();
 		if(custId) a[a.length]=new QParam({key:'custId',value:custId,op:op});
 		
 		//是否开发票
 		var expeInvoiceFlag=cboExpeInvoiceFlag.getValue();
 		if(expeInvoiceFlag) 
 			a[a.length]=new QParam({key:'expeInvoiceFlag',value:expeInvoiceFlag,op:op});
 		
 		//币种
 		var currCode=cboCurrCode.getValue();
 		if(currCode) a[a.length]=new QParam({key:'currCode',value:currCode,op:op});
 		
 		//账单状态
 		var expeInvoiceStatus=cboExpeInvoiceStatus.getValue();        		
 		if(expeInvoiceStatus) 
 			a[a.length]=new QParam({key:'expeInvoiceStatus',value:expeInvoiceStatus,op:op});
 		
 		//核销单状态
 		var expeWriteoffStatus=cboExpeWriteoffStatus.getValue();        		
 		if(expeWriteoffStatus) 
 			a[a.length]=new QParam({key:'expeWriteoffStatus',value:expeWriteoffStatus,op:op});
 		
 		//账单号
 		var expeInvoiceNo=txtExpeInvoiceNo.getValue();        		
 		if(expeInvoiceNo) 
 			a[a.length]=new QParam({key:'expeInvoiceNo',value:expeInvoiceNo,op:op});
 		
 		//账单日期
 		var expeInvoiceDate=dtExpeInvoiceDate.getValue();
 		var expeInvoiceDate2=dtExpeInvoiceDate2.getValue();
 		if(expeInvoiceDate && expeInvoiceDate2){
 			a[a.length]=new QParam({key:'expeInvoiceDate',value:expeInvoiceDate.format(DATEF),op:5});
 			a[a.length]=new QParam({key:'expeInvoiceDate',value:expeInvoiceDate2.format(DATEF),op:3});
 		}
 		else if(expeInvoiceDate) 
 			a[a.length]=new QParam({key:'expeInvoiceDate',value:expeInvoiceDate,op:op});
 		
 		//核销单日期
 		var expeWriteOffDate=dtExpeWriteOffDate.getValue();
 		var expeWriteOffDate2=dtExpeWriteOffDate2.getValue();
 		if(expeWriteOffDate && expeWriteOffDate2){
 			a[a.length]=new QParam({key:'expeWriteOffDate',value:expeWriteOffDate.format(DATEF),op:5});
 			a[a.length]=new QParam({key:'expeWriteOffDate',value:expeWriteOffDate2.format(DATEF),op:3});
 		}
 		else if(expeWriteOffDate) 
 			a[a.length]=new QParam({key:'expeWriteOffDate',value:expeWriteOffDate,op:op});
   
 		queryParams = a;
 		
     	store.baseParams={A:'EXPE_X_S',mt:'xml',expeType:t,xml:FOSX(QTX(a))};
     	store.reload({params:{start:0,limit:C_PS},
     		callback:function(r){
     			if(r.length==0) 
     				XMG.alert(SYS,M_NOT_FOUND);
     			}
     	});
    };
    
    var exportExpense = function(){
		if(queryParams.length>0){
			var a = queryParams;
			queryParams[queryParams.length] = new QParam({key:'expeType',value:t,op:1});
			var qa = [];
			for(var i=0;i<a.length;i++){
				qa[i] = {key:a[i].get('key'),op:a[i].get('op'),value:a[i].get('value')};
			}
			EXPC('EXPE_LIST','&mt=JSON&xml='+Ext.util.JSON.encode(FOSJ(QTJ(qa))));
		}
	};
	
	var btnExport = new Ext.Button({text:C_EXPORT,
		iconCls:'print',
		scope:this,
		handler:exportExpense
	});
	
   
	//生成账单
	this.genInvoice=function(){
    	var a = sm.getSelections();
    	if(a.length>0){
    		for(var j=0;j < a.length;j++){
    			if(a[j].get('rowAction')=='N'){
    				XMG.alert(SYS,M_SAVE_FIRST);
    				return;
    			}else if(a[j].get('expeInvoiceNo').length>0){
    				XMG.alert(SYS,C_INVOCIE_NO_EXISTED);
    				return;
    			}else if(a[0].get('custId')!=a[j].get('custId')){
    				XMG.alert(SYS,C_SETTLE_OBJECT_DIFFERENT);
    				return
    			}
    		}
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
        			var e = new SInvoice({invoId:id,
        				id:id,invoNo:'N'+id,
        				custId:a[0].get('custId'),
        				custName:a[0].get('custName'),
        				custSname:a[0].get('custSname'),
        				invoTitle:a[0].get('custName'),
        				currCode:currCode,
        				invoType:t=='P'?'P':'R',
        				invoDate:new Date(),
        				invoExRate:getExRate(currCode,'CNY'),
        				invoWriteOffStatus:'0',
        				invoPrFlag:'0',
        				invoUploadFlag:'0',
        				invoStatus:'0',
        				version:'0',
        				rowAction:'N'});
        			var tab = T_MAIN.add(new Fos.InvoiceTab(e,'',a));
        			T_MAIN.setActiveTab(tab);
        		}},this);
        		w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
        		w.show();
    		}
    		else{
    			var id=GGUID();
    			var e = new SInvoice({invoId:id,id:id,invoNo:'N'+id,
    				custId:a[0].get('custId'),
    				custName:a[0].get('custName'),
    				custSname:a[0].get('custSname'),
    				invoTitle:a[0].get('custName'),
    				currCode:currCode,
    				invoType:t=='P'?'P':'R',
    				invoDate:new Date(),
    				invoExRate:getExRate(currCode,'CNY'),
    				invoWriteOffStatus:'0',
    				invoPrFlag:'0',
    				invoUploadFlag:'0',
    				invoStatus:'0',
    				version:'0',rowAction:'N'});
    			var tab = T_MAIN.add(new Fos.InvoiceTab(e,'',a));
    			T_MAIN.setActiveTab(tab);
    		}
    	}else{
    		XMG.alert(SYS,M_NO_DATA_SELECTED);
    	}
    };
    
    //生成对帐单
    this.genBill = function(){
    	var r = sm.getSelections();
    	var id = GGUID();
    	if(r.length>0){
    		for(var i=0;i<r.length;i++){
    			if(r[i].get('expeBillStatus')!=0){
    				XMG.alert(SYS,C_BILL_NO_EXISTED);
    				return;
    			}
    		}
    		var e = new SBill({id:id,billId:id,billNo:'N'+id,custId:r[0].get('custId'),custName:r[0].get('custName'),
    			custSname:r[0].get('custSname'),
				billType:t,billDate:new Date(),currCode:'CNY',billStatus:'0',version:'0',rowAction:'N'});
			var tab = T_MAIN.add(new Fos.BillTab(e,r));
			T_MAIN.setActiveTab(tab);
    	}else{
    		XMG.alert(SYS,M_NO_DATA_SELECTED);
    	}
    };
    
    //生成账单按钮
	var genInvoice = new Ext.Button({text:C_GEN_INVOICE,
		iconCls:'save',
		scope:this,
		handler:this.genInvoice
	});
	
	//生成对帐单
	var genBill = new Ext.Button({text:C_GEN_BILL,
		iconCls:'save',
		scope:this,
		handler:this.genBill
	});
	
	 //查询按钮
	var searchButton = new Ext.Button({text:C_SEARCH,
		iconCls:'search',
		scope:this,
		handler:this.reload
	});
	
	var selectPanel = new Ext.Panel({plain:true,height:100,layout:'column',region:'north',
		defaults:{bodyStyle:'padding:10px'},items:[
			{columnWidth:.25,layout:'form',border:false,labelWidth:80,labelAlign:"right",
		    	items:[txtConsNo,dtExpeInvoiceDate,cboExpeInvoiceFlag]
		    },
		    {columnWidth:.25,layout:'form',border:false,labelWidth:80,labelAlign:"right",
		    	items:[cboCustId,dtExpeInvoiceDate2,cboExpeInvoiceStatus]
		    },
		    {columnWidth:.25,layout:'form',border:false,labelWidth:80,labelAlign:"right",
		    	items:[cboCurrCode,dtExpeWriteOffDate,cboExpeWriteoffStatus]
		    },
		    {columnWidth:.25,layout:'form',border:false,labelWidth:80,labelAlign:"right",
		    	items:[txtExpeInvoiceNo,dtExpeWriteOffDate2]
		    }]
		});
	
	this.grid = new Ext.grid.GridPanel({sm:sm,
		cm:cm,
		store:store,
		autoScroll:true,
		header:false,
		layout:'fit',
		view:new Ext.grid.GroupingView(groupViewCfg),
		region:'center',
		tbar:[genInvoice,'-',genBill,'-',searchButton,'-',btnExport],
		bbar:PTB(store,200)
	});

	Fos.ExpenseList.superclass.constructor.call(this,{
		id:'EXPENSE_'+t,
		title:title,
		closable:true,
		layout:'border',
		items:[selectPanel,this.grid]
	});
	
	store.load({params:{start:0,limit:200}});
};
Ext.extend(Fos.ExpenseList,Ext.Panel);
