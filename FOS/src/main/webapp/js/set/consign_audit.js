//单票审核
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
				t=T_MAIN.add(new Fos.ExpenseTab(p,'A'));
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
			EXPC('CONS_AUDIT','&mt=JSON&xml='+Ext.util.JSON.encode(FOSJ(QTJ(qa))));
		}
		else{		
			EXPC('CONS_AUDIT','&mt=JSON&start=0&limit=500');
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