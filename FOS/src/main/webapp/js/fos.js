var getUN=function(p){var a=[];a[a.length]=['EACH','1'];if(p.get('consTotalMeasurement')){a[a.length]=['CBM',p.get('consTotalMeasurement')];}if(p.get('consTotalGrossWeight')){a[a.length]=['KG',p.get('consTotalGrossWeight')];}var s=p.get('consContainersInfo');if(s){s=s.replace(/(^\s*)|(\s*$)/g, "");var idx=s.indexOf(' ');if(idx==0){var b=s.split('X');if(b.length>0){a[a.length]=[b[1],b[0]];}}else{var c=s.split(' ');for(var i=0;i<c.length;i++){var b=c[i].split('X');if(b.length>0){a[a.length]=[b[1],b[0]];}}}}return a;};
var openCons=function(n){var store = new Ext.data.Store({url: SERVICE_URL+'?A='+'CONS_Q',reader:new Ext.data.XmlReader({record:'FConsign'}, FConsign)});store.load({params:{consNo:n},callback:function(re,o,s){if(s&&re.length>0)Fos.showConsign(re[0]);}});};
var openInvo=function(n){
	var store = new Ext.data.Store({url: SERVICE_URL+'?A='+'INVO_Q',reader:new Ext.data.XmlReader({record:'SInvoice'}, SInvoice)});
	store.load({params:{invoNo:n},callback:function(re,o,s){if(s&&re.length>0)	showInvoice(re[0]);}});
};

var T_MAIN = new Ext.TabPanel({id:'T_MAIN',region:'center',deferredRender:false,plugins:new Ext.ux.TabCloseMenu(),enableTabScroll:true,activeTab:0});

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
	if(VERSION==0&&!NR(M1_C+M2_A)) items[items.length]=NaviMenu(C_IMP_A,'G_CONS_I_C',function(){return new Fos.ConsignGrid('I','C','');});
	if(!NR(M1_C+M2_F)) items[items.length]=NaviMenu(C_IMP_F,'G_CONS_I_C_FCL',function(){return new Fos.ConsignGrid('I','C','FCL');});
	if(!NR(M1_C+M2_L)) items[items.length]=NaviMenu(C_IMP_L,'G_CONS_I_C_LCL',function(){return new Fos.ConsignGrid('I','C','LCL');});
	if(VERSION==0&&!NR(M1_C+M2_AE)) items[items.length]=NaviMenu(C_EXP_A,'G_CONS_E_C',function(){return new Fos.ConsignGrid('E','C','');});
	if(!NR(M1_C+M2_FE)) items[items.length]=NaviMenu(C_EXP_F,'G_CONS_E_C_FCL',function(){return new Fos.ConsignGrid('E','C','FCL');});
	if(!NR(M1_C+M2_LE)) items[items.length]=NaviMenu(C_EXP_L,'G_CONS_E_C_LCL',function(){return new Fos.ConsignGrid('E','C','LCL');});
	return new Ext.Panel({title:C_CONT,collapsible:true,layout:'fit',
		items:new Ext.menu.Menu({floating:false, style: {border:'0px',background:'transparent'},items:items})});
};

function getBulkPanel(){
	if(VERSION==0){
		return createBulkTree();
	}
	else{
		var items=[];
		if(!NR(M1_B+M2_E))
			items[items.length]=NaviMenu(C_EXP_BULK,'CONS_E_B',function(){return new Fos.ConsignGrid('E','B','');});
		if(!NR(M1_B+M2_I)) 
			items[items.length]=NaviMenu(C_IMP_BULK,'CONS_I_B',function(){return new Fos.ConsignGrid('I','B','');});
		if(!NR(M1_B+M2_BV)) 
			items[items.length]=NaviMenu(C_SHIP_DATE,'VOYA',function(){return Fos.showG_VOYA();});
		
		return new Ext.Panel({title:C_BULK,collapsible:true,layout:'fit',
			items:new Ext.menu.Menu({floating:false, style: {border:'0px',background:'transparent'},items:items})});
	}
};

function getAirPanel(){
	var items=[];
	if(!NR(M1_A+M2_I)) items[items.length]=NaviMenu(C_IMP_AIR,'G_CONS_I_A',function(){return new Fos.ConsignGrid('I','A','');});
	if(!NR(M1_A+M2_E)) items[items.length]=NaviMenu(C_EXP_AIR,'G_CONS_E_A',function(){return new Fos.ConsignGrid('E','A','');});
	return new Ext.Panel({title:C_AIR,collapsible:true,layout:'fit',
		items:new Ext.menu.Menu({floating:false, style: {border:'0px',background:'transparent'},items:items})});
};
function getCudePanel(){
	var items=[];
	if(!NR(M1_G)){
		items[items.length]=NaviMenu(C_IMP_CUDE,'G_CONS_G_I',function(){return new Fos.CustomsGrid('I');});
		items[items.length]=NaviMenu(C_EXP_CUDE,'G_CONS_G_E',function(){return new Fos.CustomsGrid('E');});
	}
	
	if(VERSION==0&&!NR(M1_G+M2_I)) 
		items[items.length]=NaviMenu(C_IMP_CUDE_E,'G_CONS_I_G',function(){return new Fos.ConsignGrid('I','G','',1);});
	if(VERSION==0&&!NR(M1_G+M2_E)) 
		items[items.length]=NaviMenu(C_EXP_CUDE_E,'G_CONS_E_G_E',function(){return new Fos.ConsignGrid('E','G','',1);});
	
	if(!NR(M1_I)) 
		items[items.length]=NaviMenu(C_INSPECTION,'G_CONS_I',function(){return new Fos.InspectionGrid();});

	if(!NR(M1_M)) 
		items[items.length]=NaviMenu(C_TRADE,'G_CONS_H_M',function(){return new Fos.TradeGrid();});
	if(!NR(M1_F)) 
		items[items.length]=NaviMenu(C_RELIEF_TAX,'G_CONS_H_F',function(){return new Fos.ReliefTaxGrid();});
	if(!NR(M1_R)) 
		items[items.length]=NaviMenu(C_ENT_REG,'G_CONS_H_R',function(){return new Fos.EntRegGrid();});
	
	return new Ext.Panel({title:C_BIZ_CUSTOMS,collapsible:true,layout:'fit',
		items:new Ext.menu.Menu({floating:false, style: {border:'0px',background:'transparent'},items:items})});
};
function getInspPanel(){
	var items=[];
	if(!NR(M1_I+M2_I)) items[items.length]=NaviMenu(C_IMP_INSP,'G_CONS_I_I',function(){return new Fos.ConsignGrid('I','I','');});
	if(!NR(M1_I+M2_E)) items[items.length]=NaviMenu(C_EXP_INSP,'G_CONS_E_I',function(){return new Fos.ConsignGrid('E','I','');});
	return new Ext.Panel({title:C_SR_INSP,collapsible:true,layout:'fit',
		items:new Ext.menu.Menu({floating:false, style: {border:'0px',background:'transparent'},items:items})});
};
function getDocPanel(){
	var items=[];
	if(!NR(M1_D+F_V)) items[items.length]=NaviMenu(C_DOC_ALL,'G_DOC_A',function(){return new Fos.DocGrid('A');});
	if(!NR(M1_D+F_V)) items[items.length]=NaviMenu(C_DOC_NOT_RETURN,'G_DOC_B',function(){return new Fos.DocGrid('B');});
	if(!NR(M1_D+F_V)) items[items.length]=NaviMenu(C_DOC_RETURN_NOT_BACK,'G_DOC_C',function(){return new Fos.DocGrid('C');});
	if(!NR(M1_D+F_V)) items[items.length]=NaviMenu(C_DOC_BACK,'G_DOC_D',function(){return new Fos.DocGrid('D');});
	return new Ext.Panel({title:C_DOC_MGT,collapsible:true,layout:'fit',
		items:new Ext.menu.Menu({floating:false, style: {border:'0px',background:'transparent'},items:items})});
};
function getStaPanel(){
	var items=[];
	if(!NR(M1_T+T_BUSI)) items[items.length]=NaviMenu(C_STAT_BIZ_SUM,'REPT_BUSI',function(){return new Fos.StatSumTab('REPT_BUSI');});
	if(!NR(M1_T+T_BUSI)) items[items.length]=NaviMenu(C_STAT_BIZ_SUM_SALES,'REPT_BUSI_SALES',function(){return new Fos.StatSalesSumTab();});
	if(!NR(M1_T+T_BUEX)) items[items.length]=NaviMenu(C_STAT_PROFIT_SUM,'REPT_BUEX',function(){return new Fos.StatBuexTab('REPT_BUEX');});
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
	return new Ext.Panel({title:C_STAT,collapsible:true,autoScroll:true,layout:'fit',
		items:new Ext.menu.Menu({floating:false, style: {border:'0px',background:'transparent'},items:items})});
};
function getCusPanel(){
	var items=[];
	if(!NR(M1_V+V_PRSH+F_V)) items[items.length]=NaviMenu(C_PRICE_MANAGEMENT,'G_PRSH',function(){return new Fos.PriceSheetGrid();});
	if(!NR(M1_V+V_SAQU+F_V)) items[items.length]=NaviMenu(C_COMMISSION,'T_COMM',function(){return new Fos.CommissionTab();});
	if(!NR(M1_V+V_SAQU+F_V)) items[items.length]=NaviMenu(C_SALES_COMMISSION,'G_SACO',function(){return new Fos.SalesCommissionGrid();});
	if(!NR(M1_T+T_SALES)) items[items.length]=NaviMenu(C_STAT_SALES_COMMISSION,'T_SALES',function(){return new Fos.SalesCommissionTab();});
	if(!NR(M1_V+V_CUST+F_V)) items[items.length]=NaviMenu(C_CUST,'G_CUST',function(){return new Fos.CustomerGrid();});
	if(!NR(M1_V+V_CUCA+F_V)) items[items.length]=NaviMenu(C_CUCA,'G_CUCA',function(){return Fos.showCustomerCategory();});
	return  new Ext.Panel({title:C_CUST,collapsible:true,layout:'fit',
		items:new Ext.menu.Menu({floating:false, style: {border:'0px',background:'transparent'},items:items})});
};
function getWsPanel(){
	var items=[];
	//if(!NR(M1_W+W_WUSR)) 
		items[items.length]=NaviMenu(C_WS_USER,'G_WUSR',function(){return new Fos.WusrGrid();});
	//if(!NR(M1_W+W_WINQ)) 
		items[items.length]=NaviMenu(C_WS_INQUIRY_LIST,'G_WINQ',function(){return new Fos.WinqGrid();});
	//if(!NR(M1_W+W_CONS)) 
		items[items.length]=NaviMenu(C_WS_CONS_LIST,'G_WCON',function(){return new Fos.WconGrid();});
	return   new Ext.Panel({title:C_WS,collapsible:true,layout:'fit',
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
	return  new Ext.Panel({title:C_SYSTEM_MGT,collapsible:true,layout:'fit',
		items:new Ext.menu.Menu({floating:false, style: {border:'0px',background:'transparent'},items:items})});
};

function getPMenu(){
	var items=[];
	if(!NR(M1_C)) items[items.length]=getContPanel();
	if(!NR(M1_B)) items[items.length]=getBulkPanel();
	if(!NR(M1_A)) items[items.length]=getAirPanel();
	if(!NR(M1_G)) items[items.length]=getCudePanel();
	//if(!NR(M1_I)) items[items.length]=getInspPanel();
	if(!NR(M1_D)) items[items.length]=getDocPanel();
	if(!NR(M1_S)) items[items.length]=createSMTree();
	if(!NR(M1_T)) items[items.length]=getStaPanel();
	if(!NR(M1_V)) items[items.length]=getCusPanel();
	if(!NR(M1_J)) items[items.length]=createGMTree();
	if(!NR(M1_P)) items[items.length]=getSysPanel();
	//if(VERSION==1&&!NR(M1_W)) 
		items[items.length]=getWsPanel();
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
		var voya = CreateNode(C_SHIP_DATE,'VOYA',M1_B+M2_BV,function(){return Fos.showG_VOYA();});
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
	var tree = new Ext.tree.TreePanel({disabled:NR(M1_B),title:C_BULK,rootVisible:false,
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
	var tree = new Ext.tree.TreePanel({disabled:NR(M1_S),title:C_SETTLE,rootVisible:false,
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
	/*if(!NR(M1_J+G_AIRP)){
		var airp = CreateNode(C_AIRP,'AIRP',M1_J+G_AIRP,function(){return showG_PORT('1');});
		biz.appendChild(airp);
	}*/
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
	var tree = new Ext.tree.TreePanel({title:C_MASTER_DATA,rootVisible:false,
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
	var fp = {};
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