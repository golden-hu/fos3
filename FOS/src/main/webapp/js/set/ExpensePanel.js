//费用标签页
Fos.ExpensePanel = function(_consign,f){
	
	var m=getRM(_consign.get('consBizClass'),_consign.get('consBizType'),_consign.get('consShipType'));
	
	if(f=='C') 
		m=m+M3_EXPE; 
	else 
		m=M1_S+S_EXPE;	
	
	//客户
	var txtCustName = new Ext.form.TextField({
		fieldLabel:C_BOOKER,
		name:'custName',
		value:_consign.get('custName'),
		readOnly:true,
		anchor:'95%'
	});
	
	//承运人
	var txtCarrier = new Ext.form.TextField({
		fieldLabel:C_CARRIER,
		readOnly:true,
		name:'consCarrier',
		value:_consign.get('consCarrierName'),
		anchor:'95%'
	});
	
	//装货港
	var txtConsPolEn = new Ext.form.TextField({
		fieldLabel:C_POL,
		readOnly:true,
		name:'consPol',
		value:_consign.get('consPolEn'),
		anchor:'95%'
	});
	
	//箱型箱量
	var txtContainerInfo = new Ext.form.TextField({
		fieldLabel:C_CONT_NUM,
		readOnly:true,
		name:'consContainersInfo',
		value:_consign.get('consContainersInfo'),
		anchor:'95%'
	});
	
	//开航日期
	var dtSailDate = new Ext.form.DateField({
		fieldLabel:_consign.get('consBizClass')==BC_E?C_SAIL_DATE:C_ETA,
		readOnly:true,
		name:'consSailDate',
		value:_consign.get('consSailDate'),
		format:DATEF,
		anchor:'95%'
	});
	
	//运输条款
	var txtTranCode = new Ext.form.TextField({
		fieldLabel:C_TTER,
		readOnly:true,
		name:'tranCode',
		value:_consign.get('tranCode'),		
		anchor:'95%'
	});
	
	//客户简称
	var txtCustSname = new Ext.form.TextField({fieldLabel:C_ACCOUNT,
		name:'custSname',
		value:_consign.get('custSname'),
		readOnly:true,
		anchor:'95%'
	});
	
	//业务号
	var txtConsNo = new Ext.form.TextField({fieldLabel:C_CONS_NO,
		name:'consNo',
		readOnly:true,
		value:_consign.get("consNo"),
		anchor:'95%'
	});
	
	//订舱代理
	var txtBookingAgency = new Ext.form.TextField({fieldLabel:C_BOOK_AGENCY,
		name:'consBookingAgencyName',
		value:_consign.get('consBookingAgencyName'),
		readOnly:true,
		anchor:'95%'
	});
	
	//卸货港
	var txtPodEn = new Ext.form.TextField({fieldLabel:C_POD,
		name:'consPod',
		value:_consign.get('consPodEn'),
		readOnly:true,
		anchor:'95%'
	});
	
	//件数
	var txtTotalPackages = new Ext.form.TextField({fieldLabel:C_PACKAGES,
		name:'consTotalPackages',
		value:_consign.get('consTotalPackages'),
		readOnly:true,
		anchor:'95%'
	});
	
	//操作员
	var txtOperator = new Ext.form.TextField({fieldLabel:C_OPERATOR,
		name:'consOperatorName',
		value:_consign.get('consOperatorName'),
		readOnly:true,
		anchor:'95%'
	});
	
	//运费条款
	var txtPateName = new Ext.form.TextField({fieldLabel:C_PATE,
		name:'pateName',
		value:_consign.get('pateName'),
		readOnly:true,
		anchor:'95%'
	});
	
	//委托日期
	var dtConsDate = new Ext.form.DateField({
		fieldLabel:C_CONS_DATE,
		name:'consDate',
		value:_consign.get('consDate'),
		format:DATEF,
		readOnly:true,
		anchor:'95%'
	});
	
	//船名
	var txtVessName = new Ext.form.TextField({fieldLabel:C_VESS,
		name:'vessName',
		value:_consign.get('vessName'),
		readOnly:true,
		anchor:'95%'
	});
	
	//MBL NO.
	var txtMblNo = new Ext.form.TextField({fieldLabel:C_MBL_NO,
		name:'consMblNo',
		value:_consign.get('consMblNo'),
		readOnly:true,
		anchor:'95%'
	});
	
	//毛重
	var txtTotalGrossWeight = new Ext.form.TextField({fieldLabel:C_GW+(_consign.get('consBizType')==BT_B?C_MT:C_KGS),
		name:'consTotalGrossWeight',
		value:_consign.get('consTotalGrossWeight'),
		readOnly:true,
		anchor:'95%'
	});
	
	//业务员
	var txtSales = new Ext.form.TextField({fieldLabel:C_SALES,
		name:'consSalesRepName',
		value:_consign.get('consSalesRepName'),
		readOnly:true,
		anchor:'95%'
	});
	
	//客户业务号
	var txtRefNo = new Ext.form.TextField({fieldLabel:C_REF_NO,
		name:'consRefNo',
		value:_consign.get('consRefNo'),
		readOnly:true,
		anchor:'95%'
	});
	
	//单票状态
	var txtStatus = new Ext.form.TextField({fieldLabel:C_STATUS,
		name:'consStatus',
		value:_consign.get('consBizClass')==BC_E?getCOST(_consign.get('consStatus')):getCIST(_consign.get('consStatus')),
		readOnly:true,
		anchor:'95%'
	});
	
	//航次
	var txtVoya = new Ext.form.TextField({fieldLabel:C_VOYA,
		name:'voyaName',
		value:_consign.get('voyaName'),
		readOnly:true,
		anchor:'95%'
	});
	
	//HBL NO.
	var txtHblNo = new Ext.form.TextField({fieldLabel:C_HBL_NO,
		name:'consHblNo',
		value:_consign.get('consHblNo'),
		readOnly:true,
		anchor:'95%'
	});
	
	//体积
	var txtMeasurement = new Ext.form.TextField({fieldLabel:C_CBM,
		name:'consTotalMeasurement',
		value:_consign.get('consTotalMeasurement'),
		readOnly:true,
		anchor:'95%'
	});
	
	//备注
	var txtRemark = new Ext.form.TextField({fieldLabel:C_REMARKS,
		name:'consRemarks',
		value:_consign.get('consRemarks'),
		readOnly:true,
		anchor:'95%'
	});
	
	
	var pBiz = new Ext.Panel({width:Ext.isIE?document.body.clientWidth-240:'auto',
		layout:'column',
		padding:5,
		title:C_BIZ_INFO,
		layoutConfig:{columns:4},
		deferredRender:true,
		collapsible:true,
		items:[
			{columnWidth:.25,layout:'form',border:false,labelWidth:60,
                items:_consign.get('consBizClass')==BC_E?[txtCustName,txtCustSname,txtCarrier,
                                              txtConsPolEn,txtContainerInfo,dtSailDate]:
                	[txtCustName,txtCustSname,txtConsPolEn,txtContainerInfo,dtSailDate]},
                	
            {columnWidth:.25,layout:'form',border:false,labelWidth:60,
                items:_consign.get('consBizClass')==BC_E?[txtConsNo,txtBookingAgency,txtPodEn,txtTotalPackages,
                                  txtOperator,txtPateName]:[txtConsNo,txtPodEn,txtTotalPackages,txtOperator,txtPateName]},
                                  
            {columnWidth:.25,layout: 'form',border : false,labelWidth:70,items: [
                dtConsDate,txtVessName,txtMblNo,txtTotalGrossWeight,txtSales,txtRefNo]},
                
            {columnWidth:.25,layout: 'form',border : false,labelWidth:70,items:[
                txtStatus,txtVoya,txtHblNo,txtMeasurement,txtTranCode,txtRemark
                ]}
			]});
			
	var PCny = new Ext.form.TextField({width:80,disabled:true});
	var PUsd = new Ext.form.TextField({width:80,disabled:true});
	var PLoc = new Ext.form.TextField({width:80,disabled:true});
	var PRc = new Ext.form.TextField({width:80,disabled:true});
	
	this.store = GS('EXPE_PERM_Q','SExpense',SExpense,'expeId','DESC','','','',false);
	
	var sumCnyR = new Ext.form.TextField({width:80,disabled:true});
	var sumUsdR = new Ext.form.TextField({width:80,disabled:true});
	var sumLocR = new Ext.form.TextField({width:80,disabled:true});
	var sumRcR = new Ext.form.TextField({width:80,disabled:true});
	
	this.sumCnyR=0;
	this.sumUsdR=0;
	this.sumLocR=0;
	this.sumRcR=0;
	
	this.rs=GS('EXPE_PERM_Q','SExpense',SExpense,'expeId','DESC','','','',false);
	this.calcR=function(){
		var d=this.rs.getRange();
		this.sumCnyR=0;
		this.sumUsdR=0;
		this.sumLocR=0;
		this.sumRcR=0;
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
	
	this.rg = new Fos.ExpenseGrid(_consign,'R',this,this.rs);
	var pR = new Ext.Panel({
		width:Ext.isIE?document.body.clientWidth-240:'auto',
		layout:'fit',
		title:C_EXPE_R,
		collapsible:true,
		autoscroll:true,
		border:false,
		items:[this.rg],
		bbar:[C_SUM_CNY_C,sumCnyR,'-',C_SUM_USD_C,sumUsdR,'-',C_SUM_LOC_C,sumLocR,'-',C_SUM_RC,sumRcR]
	});		
	
	var sumCnyP = new Ext.form.TextField({width:80,disabled:true});
	var sumUsdP = new Ext.form.TextField({width:80,disabled:true});
	var sumLocP = new Ext.form.TextField({width:80,disabled:true});
	var sumRcP = new Ext.form.TextField({width:80,disabled:true});
	
	this.sumCnyP=0;this.sumUsdP=0;this.sumLocP=0;this.sumRcP=0;
	this.ps=GS('EXPE_PERM_Q','SExpense',SExpense,'expeId','DESC','','','',false);
	
	
	this.calcP=function(){
		var d=this.ps.getRange();
		this.sumCnyP=0;
		this.sumUsdP=0;
		this.sumLocP=0;
		this.sumRcP=0;
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
	
	this.pg = new Fos.ExpenseGrid(_consign,'P',this,this.ps);
	var pP = new Ext.Panel({width:Ext.isIE?document.body.clientWidth-240:'auto',
		layout:'fit',
		title:C_EXPE_P,
		collapsible:true,
		border:false,
		items:[this.pg],
		bbar:[C_SUM_CNY_C,sumCnyP,'-',C_SUM_USD_C,sumUsdP,'-',C_SUM_LOC_C,sumLocP,'-',C_SUM_RC,sumRcP]
	});
	
	this.ds = GS('EXPE_PERM_Q','SExpense',SExpense,'expeId','DESC','','','',false);
	this.dg = new Fos.ExpenseGrid(_consign,'D',this,this.ds);
	
	//代收代付
	var pD = new Ext.Panel({width:Ext.isIE?800:'auto',
		layout:'fit',
		title:C_EXPE_D,
		collapsible:true,
		border:false,
		items:[this.dg]
	});	
	
	this.reCalculate = function(){		
		PCny.setValue(round2(this.sumCnyR-this.sumCnyP));
		PUsd.setValue(round2(this.sumUsdR-this.sumUsdP));
		PLoc.setValue(round2(this.sumLocR-this.sumLocP));
		PRc.setValue(round2(this.sumRcR-this.sumRcP));		
	};
	
	if(_consign.get('rowAction')!='N')
		this.store.load({params:{consId:_consign.get('consId')},callback:function(){
			var a=this.store.getRange();			
			for(var i=0;i<a.length;i++){
				if(a[i].get('expeType')=='R'){
					if(!NR(m+S_AR+F_V))
						this.rs.add(a[i]);
				}
				else if(a[i].get('expeType')=='P'){
				 	if(!NR(m+S_AP+F_V))
						this.ps.add(a[i]);
				}else if(!NR(m+S_AP+F_V)){
						this.ds.add(a[i]);
				}
			}
			this.calcR();
			this.calcP();
			this.reCalculate();			
		},scope:this});
	
	this.UN=new Ext.data.SimpleStore({id:0,fields:['U','N'],data:getUN(_consign)});	
	
	this.updateStatus=function(s){
		Ext.Ajax.request({scope:this,
			url:SERVICE_URL,
			method:'POST',
			params:{A:'CONS_U',
				consId:_consign.get('consId'),
				consStatusExp:s
			},
			success: function(r){
				_consign.beginEdit();
				_consign.set('consStatusExp',s);
				_consign.set('version',_consign.get('version')+1);
				_consign.endEdit();
				this.updateTB();
				XMG.alert(SYS,M_S);
			},
			failure: function(r){
				XMG.alert(SYS,M_F+r.responseText);
			}
		});
	};
	
	this.check = function(){
		this.updateStatus('1');
	};
	
	this.unCheck=function(){
		this.updateStatus('0');
	};
	
	this.updateTB=function(){
		var tb=this.getTopToolbar();
		if(tb.getComponent('TB_A')) 
			tb.getComponent('TB_A').setDisabled(NR(M1_S+S_EXPE+F_E)||_consign.get('consStatusExp')==1||_consign.get('consStatusAud')!=0);
		
    	if(tb.getComponent('TB_B')) 
    		tb.getComponent('TB_B').setDisabled(NR(M1_S+S_EXPE+F_E)||_consign.get('consStatusAud')!=0||_consign.get('consStatusExp')==0);
    	
    	this.rg.updateTB();
    	this.pg.updateTB();
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
		
	var tb1 = {itemId:'TB_A',
		text:C_EXPE_AUDIT,
		disabled:NR(m+F_E)||_consign.get('consStatusExp')==1||_consign.get('consStatusAud')!=0,
		iconCls:'check',
		scope:this,
		handler:this.check
	};
	
	var tb2 = {itemId:'TB_B',
		text:C_EXPE_UNCHECK,
		disabled:NR(m+F_E)||_consign.get('consStatusAud')!=0||_consign.get('consStatusExp')==0,
		iconCls:'renew',
		scope:this,
		handler:this.unCheck
	};
		
	Fos.ExpensePanel.superclass.constructor.call(this, { 
		id:"T_EXPE_"+_consign.get('id'),
		title:C_EXPE+(f=='C'||f=='T'?'':('-'+_consign.get("consNo"))),
		header:false,
		autoScroll:true,
		closable:f=='C'||f=='T'?false:true,
		height:900,
		labelAlign:'right',
		border:true,
		items: f=='T'?[pR,pP]:[pBiz,pR,pP,pD],
		tbar:[tb1,'-',
		      tb2,'-',
		      C_PROFIT_CNY,PCny,'-',
		      C_PROFIT_USD,PUsd,'-',
		      C_PROFIT_LOC,PLoc,'-',
		      C_PROFIT_RC,PRc]
	});
};
Ext.extend(Fos.ExpensePanel, Ext.Panel);