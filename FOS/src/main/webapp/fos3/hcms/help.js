var wl=window.location.href;
var idx=wl.lastIndexOf("/");
wl=wl.substr(0,idx);;
SERVICE_URL=wl+'/MainServlet';
PREVIEW_URL=wl+'http://www.hitisoft.com:8080/hcms/preview';
HcmsResource = Ext.data.Record.create(['id','no','code','name','type','channeltype',
        'icon','url','lurl','purl','imgflag','movieflag','pno','pcode','pnos','pname','title','summary','body','author','addtime',
        'source','publisher','publishtime','audit','words',
        'keywords','pv','rate','ratenum','comments','auditor',
        'audittime','tempc','templ','tempa','rank',
        'ext','filetype','width','height','size','path','active',
     	'userId','userName','grouId','grouName','createBy',
     	'createByName','modifyBy','modifyByName',
     	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},
     	{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
     	'compCode','version','rowAction']);
Ext.ux.IFrameComponent = Ext.extend(Ext.BoxComponent,{onRender:function(ct, position){this.el=ct.createChild({tag:'iframe',id:'IF_'+ this.id,frameBorder:0,src:this.url});}});
Ext.ux.TabCloseMenu = function(){
    var tabs, menu, ctxItem;
    this.init = function(tp){tabs = tp;tabs.on('contextmenu', onContextMenu);};
    function onContextMenu(ts, item, e){
        if(!menu){
            menu = new Ext.menu.Menu([
            {id: tabs.id + '-close',text: 'Close Tab',handler : function(){tabs.remove(ctxItem);}},
            {id: tabs.id + '-close-others',text: 'Close Other Tabs',handler : function(){
            	tabs.items.each(function(item){if(item.closable && item != ctxItem){tabs.remove(item);}});}
            }]);
        }
        ctxItem = item;
        var items = menu.items;
        items.get(tabs.id + '-close').setDisabled(!item.closable);
        var disableOthers = true;
        tabs.items.each(function(){
            if(this != item && this.closable){disableOthers = false;return false;}
        });
        items.get(tabs.id + '-close-others').setDisabled(disableOthers);
        menu.showAt(e.getPoint());
    }
};

function createResourceTree(t,nl){	
	var tree = new Ext.tree.TreePanel({animate:true,enableDD:false,autoScroll:true,containerScroll:true,listeners:nl});
	var root=new Ext.tree.TreeNode({text:'FOS3.0',leaf:false,expanded:true});
	tree.setRootNode(root);
	
	var store = new Ext.data.Store({url:'http://www.hitisoft.com:8080/hcms/article?compCode=JAH&removed=0',
		baseParams:{mt:'JSON'},
		reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'HcmsResource',id:'no'},HcmsResource),
			remoteSort:true,sortInfo:{field:'pno',direction:'ASC'}});
	store.load({callback:function(a,o,s){
		if(s&&a.length>0){
			for(var i=0;i<a.length;i++){
				var no=a[i].get('no');
				var name=a[i].get('name');
				var pid=a[i].get('pno');
				var n = new Ext.tree.TreeNode({iconCls:'res_type_D',text:name,id:no,leaf:a[i].get('type')=='A',expanded:false});		
				if(pid==0){}
				else if(!pid||pid==1) root.appendChild(n);
				else{
					var pn=tree.getNodeById(pid);
					if(pn) pn.appendChild(n);
				}
			}
		}		
	}});
	return tree;
};
var catePanel =createResourceTree('C',{scope:this,click:function(n,e){if(n.hasChildNodes()==false)showResource(n.id,n.text);}});
var docPanel = new Ext.Panel({title:'欢迎使用FOS3.0',margins:'0 5 5 0'});

var P_MENU = new Ext.Panel({
	id:'AP',region:'west',split:true,collapsible: true,collapseMode:'mini',title:'FOS3.0帮助系统',
	layout:'fit',width:200,minWidth:150,maxSize:400,margins:'0 0 5 0',
	items:catePanel});


var T_MAIN = new Ext.TabPanel({id:'T_MAIN',region:'center',margins:'0 5 5 0',layoutOnTabChange:true,plugins:new Ext.ux.TabCloseMenu(),enableTabScroll:true,activeTab:0});
var showResource=function(no,name){
	var t = T_MAIN.getComponent('DOC_'+no);
	if(t){T_MAIN.setActiveTab(t);} 
	else{
		
		t = new Ext.Panel({id:'DOC_'+no,title:name,layout:'fit',iconCls:'doc',deferredRender:false,closable:true,autoScroll:true,
	    		items:new Ext.ux.IFrameComponent({url:'http://www.hitisoft.com:8080/hcms/preview?no='+no+'&compCode=JAH'})});
		T_MAIN.add(t);
		T_MAIN.setActiveTab(t);
	}
};
Ext.onReady(function(){	
	Ext.state.Manager.setProvider(new Ext.state.CookieProvider());
    Ext.QuickTips.init();
    Ext.form.Field.prototype.msgTarget = 'side';
    var tBar=new Ext.BoxComponent({region:'north',el:'north',height:60});   
	var viewport = new Ext.Viewport({layout:'border',items:[tBar,P_MENU,T_MAIN]});	
	setTimeout(function(){Ext.get('loading').remove();Ext.get('loading-mask').fadeOut({remove:true});},50);	
	viewport.doLayout();
});
