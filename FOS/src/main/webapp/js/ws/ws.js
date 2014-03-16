var wl=window.location.href;
var idx=wl.lastIndexOf("/");
SERVICE_URL=wl.substr(0,idx)+'/WSServlet';
SERVER_URL=wl.substr(0,idx)+'/';

//var COMP_CODE='JAH';
var COMP_CODE='htst';

var GUID=0;
var GGUID=function(k){
	if(!k) GUID=GUID-1;
	return GUID;
};

var CUSER=loadSession('WUSER_ID');
var CCUST=loadSession('WCUST_ID');

var T_MAIN = new Ext.TabPanel({id:'T_MAIN',
	region:'center',
	margins:'0 5 5 0',
	layoutOnTabChange:true,
	enableTabScroll:true,
	activeTab:0
});

function CreateMenu(title,wid,f,disabled){
 	var fn=function(){
 		T_MAIN.setActiveTab(T_MAIN.getComponent(wid)?T_MAIN.getComponent(wid):T_MAIN.add(f()));
 	};
 	return {text:title,
 		iconCls :'grid',
 		disabled:disabled,
 		scope:this,
 		handler:function(){
		if(checkLogin(fn)==1) 
			fn();
		}
 	};
};

var menuPanel = new Ext.Panel({
	id:'MENU',title:'FOS3.0网上服务',region:'west',split:true,collapsible: true,collapseMode:'mini',
	width:200,minWidth:150,maxSize: 400,bodyStyle:'padding: 10px; background-color: #f0f0f0',
	items:new Ext.menu.Menu({floating:false,items:['-',
		CreateMenu('船期查询','T_VOYA',function(){return new VoyaTab();},false),'-',
		CreateMenu('网上询价','G_WINQ',function(){return new InquiryGrid();},false),'-',
		CreateMenu('网上订舱','G_BOOK',function(){return new WconGrid();},CCUST==''),'-',
		CreateMenu('单票跟踪','T_CONS',function(){return new ConsTab();},CCUST==''),'-',
		CreateMenu('提单确认','T_BL',function(){return new BLTab();},CCUST==''),'-',
		CreateMenu('网上对账','T_BILL',function(){return new BillTab();},CCUST==''),'-',
		{text:'退出',iconCls :'grid',scope:this,disabled:false,handler:this.logout},'-'
		]})
});
	
Ext.onReady(function(){	
	if(!loadSession('WUSER_ID')){
		var win= new LoginWin();
		win.show();
	}
	
    Ext.QuickTips.init();    
    
    var tBar=new Ext.BoxComponent({region:'north',el:'north',height:90});   
	var viewport = new Ext.Viewport({layout:'border',items:[tBar,menuPanel,T_MAIN]});
	T_MAIN.setActiveTab(T_MAIN.add(new Ext.Panel({title:new Date().format('Y-m-d')})));	
	
	viewport.doLayout();
});

