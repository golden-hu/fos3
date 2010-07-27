Ext.namespace('Hcms');
var hcmsCB=new HCMS.CB();
FileUploadWin = function(title,label) {	
	var fp = new Ext.form.FormPanel({
        id:'F_UP',fileUpload:true,title:title,header:false,autoHeight:true,
        items: [{
            xtype:'fileuploadfield',emptyText:label,fieldLabel:label,
            name:'uploadFile',anchor: '95%',frame: true,allowBlank: false,msgTarget: 'side'
        }]
    });
    FileUploadWin.superclass.constructor.call(this, {title:title,iconCls:'up',plain:false,modal:true,width:400,minWidth:300,
        minHeight:200,plain:true,bodyStyle:'padding:0px;',buttonAlign:'right',items:fp}); 
};
Ext.extend(FileUploadWin,Ext.Window);
var T_MAIN = new Ext.TabPanel({id:'T_MAIN',region:'center',margins:'0 5 5 0',layoutOnTabChange:true,plugins:new Ext.ux.TabCloseMenu(),enableTabScroll:true,activeTab:0});
function createResourceTree(t,nl){	
	var tree = new Ext.tree.TreePanel({iconCls:t=='C'?'Tree':'Image',title:t=='C'?C_CONTENT:C_RESOURCE,animate:true,enableDD:false,autoScroll:true,containerScroll:true,listeners:nl});
	var root=new Ext.tree.TreeNode({id:'0',text:t=='C'?C_CATE_ROOT:C_DIRE_ROOT,leaf:false,expanded:true});
	tree.setRootNode(root);
	var store = GS('HCRE_Q','HcmsResource',HcmsResource,'pno','ASC','','S_RES_'+t,'no',true);
	store.load({params:{type:t},callback:function(a,o,s){
		if(s&&a.length>0){
			for(var i=0;i<a.length;i++){
				var no=a[i].get('no');
				var name=a[i].get('name');
				var pid=a[i].get('pno');
				var n = new Ext.tree.TreeNode({iconCls:'res_type_D',text:name,id:no,leaf:false,expanded:true});		
				if(!pid||pid==0) root.appendChild(n);
				else{
					var pn=tree.getNodeById(pid);
					if(pn) pn.appendChild(n);
				}
			}
		}		
	}});
	return tree;
};
var catePanel =createResourceTree('C',{scope:this,click:function(n,e){showResource(n.id,n.text,n.getPath(),'C');}});
var dirPanel =createResourceTree('D',{scope:this,click:function(n,e){showResource(n.id,n.text,n.getPath(),'D');}});

function CreateMenu(t,c,f,i){
 	return {text:t,iconCls:i,scope:this,handler:function(){
		T_MAIN.setActiveTab(T_MAIN.getComponent(c)?T_MAIN.getComponent(c):T_MAIN.add(f()));}};
};

var tempPanel = new Ext.ux.MenuPanel({disabled:false,iconCls:'template',title:C_TEMP_MGT,collapsible:true,
	menu:new Ext.menu.Menu({items:[
		CreateMenu(C_TEMP_C,'G_TEMP_C',function(){return new Hcms.TempGrid(1);},'channel'),
		CreateMenu(C_TEMP_L,'G_TEMP_L',function(){return new Hcms.TempGrid(2);},'list'),
		CreateMenu(C_TEMP_A,'G_TEMP_A',function(){return new Hcms.TempGrid(3);},'doc'),
		CreateMenu(C_TEMP_T,'G_TEMP_T',function(){return new Hcms.TempGrid(4);},'template')
		]})});
var sysPanel = new Ext.ux.MenuPanel({disabled:false,iconCls:'gears',title:C_SYS_MGT,collapsible:true,
	menu:new Ext.menu.Menu({items:[
		CreateMenu(C_USER_MGT,'T_USER',function(){return new Fos.UserTab();},'user'),
		CreateMenu(C_FUNC_PERMISSION,'T_ROLE',function(){return new Fos.RoleTab();},'key'),
		CreateMenu(C_COCO,'G_COCO',function(){return showP_COCO();},'gears'),
		CreateMenu(C_ACT_LOG,'G_ACLO',function(){return new Fos.AcloGrid();},'list')
		]})});
		
var sitePanel = new Ext.Panel({title:C_SITE,iconCls:'site',layout:'accordion',items: [tempPanel,sysPanel]});

var P_MENU = new Ext.Panel({
	id:'AP',region:'west',split:true,collapsible: true,collapseMode:'mini',title:'HCMS',
	layout:'fit',width:200,minWidth:150,maxSize:400,margins:'0 0 5 0',
	items:new Ext.TabPanel({border:false,activeTab:0,tabPosition:'top',items:[catePanel,dirPanel,sitePanel]})});
var showResource=function(PNo,PName,PIds,RType){
	var t = T_MAIN.getComponent('G_RES_'+RType);
	if(t){if(t.PNo!=PNo) t.reload(PNo,PName,PIds,RType);T_MAIN.setActiveTab(t);} 
	else{t = new Hcms.ResourceGrid(PNo,PName,PIds,RType);T_MAIN.add(t);T_MAIN.setActiveTab(t);}
};
Hcms.CateWin = function(r,store) {
	this.save=function(){
		frm.getForm().updateRecord(r);	
		var xml=RTX(r,'HcmsResource',HcmsResource);
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'HCRE_S'},
			success: function(res,o){
			var e = XTR(res.responseXML,'HcmsResource',HcmsResource);
			var ra=r.get('rowAction');			
			var fields = HcmsResource.prototype.fields;
            for(var k = 0;k < fields.length;k++){
                var f = fields.items[k];
                var fn=f.name;
                r.set(fn,e.get(fn));
            }
            var panel=catePanel;
            if(ra=='N'){
            	store. addSorted(r);            	
            	var root=panel.getRootNode();
				var no=r.get('no');
				var name=r.get('name');
				var PNo=r.get('pno');
				var n = new Ext.tree.TreeNode({iconCls:'res_type_D',text:name,id:no,leaf:false,expanded:false});		
				if(!PNo||PNo==0) root.appendChild(n);
				else{
					var pn=panel.getNodeById(PNo);
					if(pn) pn.appendChild(n);
				}
				r.set('rowAction','M');
            }
            else{
				var n=panel.getNodeById(r.get('no'));
				if(n) n.setText(r.get('name'));
			}
			XMG.alert(SYS,M_S);this.close();},
		failure: function(res,o){XMG.alert(SYS,M_F+res.responseText);},
		xmlData:FOSX(xml)
		});
	};
	var frm = new Ext.form.FormPanel({labelWidth:100,bodyStyle:'padding:5px',items:[
    	{fieldLabel:C_CATE_NAME,name:'name',value:r.get('name'),xtype:'textfield',anchor:'95%'},
    	{fieldLabel:C_CATE_TYPE,id:'channeltype',value:r.get('channeltype'),xtype:'combo',store:CHAN_T_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'},
    	{fieldLabel:C_CATE_URL,name:'url',value:r.get('url'),xtype:'textfield',anchor:'95%'},    	
    	{fieldLabel:C_TEMP_M,name:'tempc',value:r.get('tempc'),xtype:'combo',store:getTEMP_S(),displayField:'tempName',valueField:'tempId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'},
    	{fieldLabel:C_TEMP_L,name:'templ',value:r.get('templ'),xtype:'combo',store:getTEMP_S(),displayField:'tempName',valueField:'tempId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'},
    	{fieldLabel:C_TEMP_A,name:'tempa',value:r.get('tempa'),xtype:'combo',store:getTEMP_S(),displayField:'tempName',valueField:'tempId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'},
    	{fieldLabel:C_ORDER_NO,name:'rank',value:r.get('rank'),xtype:'numberfield',anchor:'95%'},
		{fieldLabel:C_CATE_DESC,name:'summary',value:r.get('summary'),xtype:'textarea',height:130,anchor:'95%'}
    	]
    });
	Hcms.CateWin.superclass.constructor.call(this, {title:C_CATE+'-'+r.get('name'),modal:true,width:600,
        height:400,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:frm,
        buttons:[{text:C_OK,scope:this,handler:this.save},{text:C_CANCEL,scope:this,handler:this.close}]});
};
Ext.extend(Hcms.CateWin,Ext.Window);

Hcms.TempWin = function(p,store) {
	this.save=function(){
		frm.getForm().updateRecord(p);	
		var xml=RTX(p,'HcmsTemplate',HcmsTemplate);
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'HCTE_S'},
			success: function(res,o){
			var e = XTR(res.responseXML,'HcmsTemplate',HcmsTemplate);
			var ra=p.get('rowAction');
			var fields = HcmsTemplate.prototype.fields;
			for(var k = 0;k < fields.length;k++){
				var f = fields.items[k];
				var fn=f.name;
				p.set(fn,e.get(fn));
			}			
			if(ra=='N') store.insert(0,p);
			XMG.alert(SYS,M_S);this.close();},
		failure: function(r,o){XMG.alert(SYS,M_F+r.responseText);},
		xmlData:FOSX(xml)
		});
	};
	var undo=new Ext.ux.HTMLEditorUndoRedo();
	var img=Ext.ux.HTMLEditorImage();
	var frm = new Ext.form.FormPanel({labelWidth:100,layout:'border',items:[
		{region:'north',split:true,layout:'form',height:60,items:[
    	{fieldLabel:C_TEMP_NAME,name:'tempName',value:p.get('tempName'),xtype:'textfield',anchor:'95%'},
    	{fieldLabel:C_TEMP_TYPE,id:'tempType',value:p.get('tempType'),xtype:'combo',store:TEMP_T_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'}
		]},    	
    	{region:'center',title:C_CONTENT,
			layout:'fit',items:[{name:'tempContent',value:Ext.util.Format.htmlDecode(p.get('tempContent')),xtype:'textarea',anchor:'95%',height:'300'}]}
    	]
    });
	Hcms.TempWin.superclass.constructor.call(this, {title:C_TEMP+'-'+p.get('tempId'),modal:true,width:800,
        height:600,maximizable:true,buttonAlign:'right',layout:'fit',items:frm,
        buttons:[{text:C_OK,scope:this,handler:this.save},{text:C_CANCEL,scope:this,handler:this.close}]});
};
Ext.extend(Hcms.TempWin,Ext.Window);
Hcms.TempGrid = function(T){	
	var store = GS('HCTE_Q','HcmsTemplate',HcmsTemplate,'tempId','Desc','','','',true);
	store.load({params:{tempType:T}});
	var c0={header:'ID',dataIndex:'tempId',width:200};
	var c1={header:C_NAME,dataIndex:'tempName',width:200};
	var c2={header:C_CREATE_BY,width:100,align:'right',dataIndex:"createByName"};
	var c3={header:C_CREATE_TIME,width:100,align:'right',renderer:formatDateTime,dataIndex:"createTime"};
	var c4={header:C_MODIFY_BY,width:100,align:'right',dataIndex:"modifyByName"};
	var c5={header:C_MODIFY_TIME,width:100,align:'right',renderer:formatDateTime,dataIndex:"modifyTime"};	    
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm=new Ext.grid.ColumnModel([sm,c0,c1,c2,c3,c4,c5]);
	cm.defaultSortable = true;
	cm.defaultWidth=100;
	this.add=function(){
		var rid=GGUID();
		var p=new HcmsTemplate({id:rid,tempId:rid,tempName:'',tempType:T,active:'1',rowAction:'N'});
		this.showTemp(p);
	};	
	this.remove=function(){
		var a = sm.getSelections();
		if(a.length){
			for(var i=0;i<a.length;i++){
				a[i].set('rowAction','R');
				store.remove(a[i]);
			}
			var x=ATX(a,'HcmsTemplate',HcmsTemplate);
			Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'HCTE_S'},
				success: function(res,o){XMG.alert(SYS,M_S);},
			failure: function(res,o){XMG.alert(SYS,M_F+r.responseText);},
			xmlData:FOSX(x)});
		}
		else XMG.alert(SYS,M_R_P);
	};	
	this.showTemp=function(p){
		var w=new Hcms.TempWin(p,store);
		w.show();
	}
	var ctxMenu = new Ext.menu.Menu({
        id:'gridCtx',
        items:[{text:C_ADD,iconCls:'add',disabled:false,scope:this,handler:this.addTemp},
               {text:C_REMOVE,iconCls:'remove',disabled:false,scope:this,handler:this.remove}
        ]});
	Hcms.TempGrid.superclass.constructor.call(this, {id:'G_TEMP',title:C_TEMP_MGT,
		border:false,autoScroll:true,stripeRows:true,store:store,sm:sm,cm:cm,closable:true,
		listeners:{scope:this,
		 rowcontextmenu:function(g,r,e){e.stopEvent();ctxMenu.rowIndex = r;ctxMenu.showAt(e.getXY());},
			rowdblclick: function(g, r, e){
				var p=g.getSelectionModel().getSelected();
				if(p){
					this.showTemp(p);
				}}},
		bbar:PTB(store,C_PS),
	    tbar:[{text:C_ADD,iconCls:'add',disabled:false,scope:this,handler:this.add}, '-', 
			{text:C_REMOVE,iconCls:'remove',disabled:false,scope:this,handler:this.remove}]});
};
Ext.extend(Hcms.TempGrid,Ext.grid.GridPanel);
Hcms.ArtiPanel = function(a,store) {
	var undo=new Ext.ux.HTMLEditorUndoRedo();
	var img=Ext.ux.HTMLEditorImage();
	var swf=Ext.ux.HTMLEditorFlash();
	this.save=function(){
		a.set('name',this.find('name','name')[0].getValue());
		a.set('title',this.find('name','title')[0].getValue());
		a.set('summary',this.find('name','summary')[0].getValue());
		a.set('author',this.find('name','author')[0].getValue());
		a.set('source',this.find('name','source')[0].getValue());
		a.set('keywords',this.find('name','keywords')[0].getValue());
		a.set('tempa',this.find('name','tempa')[0].getValue());
		a.set('body',this.find('name','body')[0].getValue());
		a.set('imgflag',this.find('name','imgflag')[0].getValue()?1:0);
		a.set('movieflag',this.find('name','movieflag')[0].getValue()?1:0);
		a.set('audit',0);
		a.set('type','A');
		if(a.get('rowAction')=='') a.set('rowAction','M');		
		var xml=RTX(a,'HcmsResource',HcmsResource);
		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'HCRE_S'},
			scope:this,
			success: function(res,o){
				var e = XTR(res.responseXML,'HcmsResource',HcmsResource);
				var ra=a.get('rowAction');
				var fields = HcmsResource.prototype.fields;
				for(var k = 0;k < fields.length;k++){
					var f = fields.items[k];
					var fn=f.name;
					a.set(fn,e.get(fn));
				}				
				if(ra=='N'){
					store.insert(0,a);					
				}
				this.setTitle(a.get('name'));
				XMG.alert(SYS,M_S);},
			failure: function(r,o){XMG.alert(SYS,M_F+r.responseText);},
			xmlData:FOSX(xml)
		});
	};
	this.preview=function(){
		var url=PREVIEW_URL+'?no='+a.get('no');
		OWW(url);
	};
	this.publish=function(){
		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'HCAR_PB',no:r.get('no')},
			success: function(res,o){XMG.alert(SYS,M_PUBLISH_SUCCEED);},
			failure: function(r,o){XMG.alert(SYS,M_F+r.responseText);}
		});
	};
	Hcms.ArtiPanel.superclass.constructor.call(this,{id:'P_ARTI_'+a.get('no'),iconCls:'doc',
		title:a.get('name')==''?'New-'+a.get('no'):a.get('name'),layout:'fit',closable:true,
    	tbar:[{text:C_SAVE,iconCls:'SAVE',scope:this,handler:this.save},
    	      {text:C_PREVIEW,iconCls:'preview',scope:this,handler:this.preview},
    	      {text:C_PUBLISH,iconCls:'publish',scope:this,handler:this.publish}],
		items:
		{xtype:'tabpanel',activeTab:0,
	    	listeners:{scope:this,tabchange:function(m,a){a.doLayout();}},items:
		[
			{title:C_ARTI_BASE,layout:'form',bodyStyle:'padding:5px 5px 5px 5px',labelAlign:'right',items:[
				{fieldLabel:C_ARTI_TITLE,name:'name',value:a.get('name'),xtype:'textfield',allowBlank:false,anchor:'95%'},
				{fieldLabel:C_ARTI_SUBTITLE,name:'title',value:a.get('title'),xtype:'textfield',anchor:'95%'},	            
				{fieldLabel:C_ARTI_SUMMARY,name:'summary',value:a.get('summary'),xtype:'textarea',anchor:'95%'},
				{fieldLabel:C_ARTI_SOURCE,name:'source',value:a.get('source'),xtype:'textfield',anchor:'95%'},
				{fieldLabel:C_ARTI_AUTHOR,name:'author',value:a.get('author'),xtype:'textfield',anchor:'50%'},
				{fieldLabel:C_ARTI_KEYWORDS,name:'keywords',value:a.get('keywords'),xtype:'textfield',anchor:'50%'},				
				{fieldLabel:C_ORDER_NO,name:'rank',value:a.get('rank'),xtype:'numberfield',anchor:'50%'},
				{fieldLabel:C_TEMP,name:'tempa',value:a.get('tempa'),xtype:'combo',store:getTEMP_S(),displayField:'tempName',valueField:'tempId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'50%'},
				{xtype:'checkbox',labelSeparator:'',boxLabel:C_IMG_FLAG,name:'imgflag',check:a.get('imgflag')=='1'},
				{xtype:'checkbox',labelSeparator:'',boxLabel:C_MOVIE_FLAG,name:'movieflag',check:a.get('movieflag')=='1'}
				
               	]},
			{title:C_CONTENT,
				layout:'fit',items:[{name:'body',value:Ext.util.Format.htmlDecode(a.get('body')),xtype:'htmleditor',anchor:'95%',
					plugins:[undo,img,swf]}]}
		]}});
};
Ext.extend(Hcms.ArtiPanel,Ext.Panel);
Hcms.ResourceGrid = function(PNo,PName,PNos,RType){
	this.PNo=PNo;
	this.PName=PName;
	this.RType=RType;
	this.PNos=PNos;
	var store = GS('HCRE_Q','HcmsResource',HcmsResource,'no','DESC','','','',true);	
    store.baseParams={mt:'JSON',pno:PNo};    
	store.load({params:{start:0,limit:50}});
	var c0={header:'',dataIndex:'type',menuDisabled:true,fixed:true,width:30,renderer:function(v){
       if(v) return '<div class="res_type_'+v+'"></div>'; else return '<div class="res_type_D"></div>';
    }};
	this.reload=function(PNo,PName,PIds,RType){
		this.PNo=PNo;
		this.PName=PName;
		this.RType=RType;
		this.PIds=PIds;
		store.removeAll();
		store.baseParams={mt:'JSON',pno:PNo};
		store.reload({params:{start:0,limit:50}});
		this.setTitle(PName);
	};
	var nr = function(v,m,r){return r.get('ext')? v+'.'+r.get('ext') : v;};
	
	var c1={header:C_NO,dataIndex:'no',width:50};
	var c2={header:C_NAME,dataIndex:'name',width:200,editor:new Ext.form.TextField(),renderer:nr};
	var c3={header:C_CREATE_BY,width:100,align:'right',dataIndex:"createByName"};
	var c4={header:C_CREATE_TIME,width:100,align:'right',renderer:formatDateTime,dataIndex:"createTime"};
	var c5={header:C_MODIFY_BY,width:100,align:'right',dataIndex:"modifyByName"};
	var c6={header:C_MODIFY_TIME,width:100,align:'right',renderer:formatDateTime,dataIndex:"modifyTime"};	    
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm=new Ext.grid.ColumnModel([sm,c0,c1,c2,c3,c4,c5,c6]);
	cm.defaultSortable = true;
	cm.defaultWidth=100;
	var showArtiPanel=function(a){
		var t = T_MAIN.getComponent('P_ARTI_'+a.get('no'));
		if(t){T_MAIN.setActiveTab(t);} 
		else{t = new Hcms.ArtiPanel(a,store);T_MAIN.add(t);T_MAIN.setActiveTab(t);}
	};
	var editArti=function(a){showArtiPanel(a);}
	this.addArticle=function(){
		var rid=GGUID();		
		var a=new HcmsResource({id:rid,no:rid,code:'',name:'',type:'A',pno:this.PNo,pnos:this.PNos,
			pcode:this.PCode,pname:this.PName,active:'1',rowAction:'N'});
		showArtiPanel(a);
	};	
	this.addFile=function(){
		var win = new FileUploadWin(C_FILE_UPLOAD,C_FILE_SELECT);		
		win.addButton({text:C_UPLOAD},function(){
			var f = FileUploadWin.superclass.findById.call(win,'F_UP');
			if(f.getForm().isValid()){				
				Ext.MessageBox.show({title:'Please wait',msg:'Uploading...',progressText:'Uploading...',width:300,progress:true,closable:false});
            	f.getForm().submit({
                	url: SERVICE_URL+'?A=FILE_U&rowAction=N&uf=1&type=F&pno='+this.PNo+'&pnos='+this.PNos,
                	params:{pname:this.pname},
                	success: function(f,o){
            			Ext.MessageBox.hide();
            			XMG.alert(SYS,C_UPLOAD_SUCCESS);
            			win.close();
            			store.reload({params:{start:0,limit:50}});
            		}
            	});
				for(var i=1;i<13;i++){setTimeout(showProgress(i),i*400);}}
        },this);
        win.addButton({text:C_CANCEL,handler:function(){win.close();}},this);
		win.show();
	};
	this.reloadFile=function(no){
		var p=sm.getSelected();
		if(p){
			var win = new FileUploadWin(C_FILE_UPLOAD,C_FILE_SELECT);		
			win.addButton({text:C_UPLOAD},function(){
				var f = FileUploadWin.superclass.findById.call(win,'F_UP');
				if(f.getForm().isValid()){				
					Ext.MessageBox.show({title:'Please wait',msg:'Uploading...',progressText:'Uploading...',width:300,progress:true,closable:false});
	            	f.getForm().submit({
	                	url: SERVICE_URL+'?A=FILE_U&uf=1&type=F&pno='+this.PNo+'&pnos='+this.PNos+'&no='+p.get('no')+'&rowAction=M',
	                	params:{pname:this.pname},
	                	success: function(f,o){
	            			Ext.MessageBox.hide();
	            			XMG.alert(SYS,C_UPLOAD_SUCCESS);
	            			win.close();
	            			store.reload({params:{start:0,limit:50}});
	            		},
						failure: function(res){XMG.alert(SYS,M_F);}
	            	});
					for(var i=1;i<13;i++){setTimeout(showProgress(i),i*400);}}
	        },this);
	        win.addButton({text:C_CANCEL,handler:function(){win.close();}},this);
			win.show();
		}
		else{
			XMG.alert(SYS,M_NO_DATA_SELECTED);
		}
	};	
	this.remove=function(){
		var r = sm.getSelections();
		if(r.length){
			var x='';
			for(var i=0;i<r.length;i++){
				if(r[i].get('rowAction')!='N')
					r[i].set('rowAction','R')
					x+=RTX(r[i],'HcmsResource',HcmsResource);
			}
			if(x!=''){
				Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'HCRE_S'},xmlData:FOSX(x)});
			}			
			var panel=this.RType=='C'?catePanel:dirPanel;
			for(var i=0;i<r.length;i++){
				store.remove(r[i]);
				if(r[i].get('type')=='C'||r[i].get('type')=='D'){
					var n=panel.getNodeById(r[i].get('no'));
					if(n) n.remove();
				}
			}			
		}
		else XMG.alert(SYS,M_R_P);
	};
	this.saveRes=function(e){
		var f=e.field;var r=e.record;
		if(f=='name'){
			r.set('name',e.value);
			if(r.get('name')=='') XMG.alert(SYS,M_NAME_REQIURE);
			else{
				if(r.get('rowAction')=='') r.set('rowAction','M');
				var x=RTX(r,'HcmsResource',HcmsResource);
				var panel=this.RType=='C'?catePanel:dirPanel;
				Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'HCRE_S'},
					success: function(res){
						var e = XTR(res.responseXML,'HcmsResource',HcmsResource);
						var fields = HcmsResource.prototype.fields;
						var ra=r.get('rowAction');
						for(var k = 0;k < fields.length;k++){
							var f = fields.items[k];
							var fn=f.name;
							r.set(fn,e.get(fn));
						}
						if(ra=='N'){
							var root=panel.getRootNode();
							var no=r.get('no');
							var name=r.get('name');
							var PNo=r.get('pno');
							var n = new Ext.tree.TreeNode({iconCls:'res_type_D',text:name,id:no,leaf:false,expanded:false});		
							if(!PNo||PNo==0) root.appendChild(n);
							else{
								var pn=panel.getNodeById(PNo);
								if(pn) pn.appendChild(n);
							}
							r.set('rowAction','M');
						}
						else{
							var n=panel.getNodeById(r.get('no'));
							if(n) n.setText(r.get('name'));
						}},
					failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
					xmlData:FOSX(x)
				});
			}
		}
	};
	this.addFileB=function(){
        var url='upload.jsp?pno='+this.PNo+'&pname='+this.PName+'&pnos='+this.PNos;
        var doc=new Ext.ux.IFrameComponent({id:'FILE_U', url:url});
        var w=new Ext.Window({title:'File uploader',modal:true,width:320,height:150,autoScroll:false,plain:false,items:[doc]});
        w.show();
    };    
    var showCate=function(r){
        var w=new Hcms.CateWin(r,store);
        w.show();
    };
    this.addCate=function(){
        var rid=GGUID();
        var r=new HcmsResource({id:rid,no:rid,code:'',name:'',type:this.RType,pno:this.PNo,pnos:this.PIds,
            pcode:this.PCode,pname:this.PName,audit:0,active:1,rowAction:'N'});
        showCate(r);
    };
    this.addDire=function(){
        var rid=GGUID();
        var r=new HcmsResource({id:rid,no:rid,code:'',name:'',type:this.RType,pno:this.PNo,pnos:this.PNos,
            pcode:this.PCode,pname:this.PName,active:'1'});
        this.stopEditing();store.insert(0,r);r.set('rowAction','N');sm.selectFirstRow();this.startEditing(0, 1);
    };
    this.editCate=function(r){showCate(r);};    
	var ctxMenu = new Ext.menu.Menu({
        id:'gridCtx',
        items:[{text:this.RType=='C'?C_ADD_CATEGORY:C_ADD_DIRECTORY,iconCls:'folder',disabled:false,scope:this,handler:this.addCategory},
               {text:this.RType=='C'?C_ARTICLE:C_FILE,iconCls:'doc',disabled:false,scope:this,handler:this.RType=='C'?this.addArticle:this.addFile},
               {text:C_REMOVE,iconCls:'remove',disabled:false,scope:this,handler:this.remove}
        ]});
    
	var showFile=function(r){
		Ext.Ajax.request({url:SERVICE_URL,method:'POST',scope:this,params:{A:'HCRE_Q',no:r.get('no')},
			success: function(res,o){
				var p = XTR(res.responseXML,'HcmsResource',HcmsResource);
				var w=new Hcms.ImgWin(p);
                w.show();
			},
			failure: function(res,o){XMG.alert(SYS,M_F+r.responseText);}});
	}
	
	this.preview=function(){
		var p=sm.getSelected();var at='';		
		if(p){var url=PREVIEW_URL+'?no='+p.get('no');OWW(url);}
	};
	this.publish=function(){
		var p=sm.getSelected();
		var at='';		
		if(p){
			if(p.get('type')=='A') at='HCAR_PB';
			else if(p.get('type')=='C') at='CHAN_PB';
		}
		if(at!='')
		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:at,no:p.get('no')},
			success: function(res,o){
				XMG.alert(SYS,M_PUBLISH_SUCCEED);
				var e = XTR(res.responseXML,'HcmsResource',HcmsResource);
				var fields = HcmsResource.prototype.fields;
				for(var k = 0;k < fields.length;k++){
					var f = fields.items[k];
					var fn=f.name;
					p.set(fn,e.get(fn));
				}
			},
			failure: function(res,o){XMG.alert(SYS,M_F+res.responseText);}
		});
	};
	this.cp=function(){
		/*
		var a=sm.getSelections();
		if(a.length){
			hcmsCB.addElements(a);
		}*/
		var p=sm.getSelected();
		if(p){
			hcmsCB.clear();
			hcmsCB.add(p);
		}
	};
	this.paste=function(){
		var a=hcmsCB.data;
		var p=a[0];
		//for(var i=0;i<a.length;i++){
			//var rec=a[i];
			var r = new HcmsResource({});
			var rid=GGUID();
			var f = HcmsResource.prototype.fields;
			for (var i = 0; i < f.keys.length; i++) {var fn = ''+f.keys[i];r.set(fn,p.get(fn));};
			r.set('id',rid);r.set('no',rid);r.set('code','');r.set('pno',this.PNo);r.set('pnos',this.PNos);
			r.set('pcode',this.PCode);r.set('pname',this.PName);r.set('active',1);r.set('rowAction','N');			
			if(r.get('type')=='A'){
				showArtiPanel(r);
			}
			else if(r.get('type')=='C'){				
		        showCate(r);
			}
		//}
	};
	
	var b1={text:this.RType=='C'?C_ADD_CATE:C_ADD_DIRECTORY,iconCls:'folder',disabled:false,scope:this,handler:this.RType=='C'?this.addCate:this.addDire};
	var b2={text:this.RType=='C'?C_ADD_ARTICLE:C_FILE_UPLOAD,iconCls:'doc',disabled:false,scope:this,handler:this.RType=='C'?this.addArticle:this.addFile};
	var b3={text:C_BATCH_UPLOAD,iconCls:'doc',disabled:false,scope:this,handler:this.addFileB};
	var b4={text:C_RELOAD_FILE,iconCls:'doc',disabled:false,scope:this,handler:this.reloadFile};
	
	var b5={text:C_REMOVE,iconCls:'remove',disabled:false,scope:this,handler:this.remove};
	var b6={text:C_PREVIEW,iconCls:'preview',disabled:false,scope:this,handler:this.preview};
	var b7={text:C_PUBLISH,iconCls:'publish',disabled:false,scope:this,handler:this.publish};
	var b8={text:C_COPY,iconCls:'copy',disabled:false,scope:this,handler:this.cp};	
	var b9={text:C_CUT,iconCls:'cut',disabled:false,scope:this,handler:this.cut};
	var b10={text:C_PASTE,iconCls:'paste',disabled:false,scope:this,handler:this.paste};
	
	Hcms.ResourceGrid.superclass.constructor.call(this, {iconCls:this.RType=='C'?'Tree':'Image',id:'G_RES_'+RType,title:PName,
		border:false,autoScroll:true,stripeRows:true,store:store,sm:sm,cm:cm,closable:true,
		listeners:{scope:this,
		 rowcontextmenu:function(g,r,e){e.stopEvent();ctxMenu.rowIndex = r;ctxMenu.showAt(e.getXY());},
			rowdblclick: function(g, r, e){
				var p=g.getSelectionModel().getSelected();
				if(p){
					if(p.get('type')=='A') editArti(p);
					else if(p.get('type')=='C') this.editCate(p);
					else if(p.get('type')=='F'){showFile(p);}
				}},
			beforeedit:function(e){e.cancel = (e.record.get('type')=='C'||e.record.get('type')=='A'||e.record.get('type')=='F')},
			afteredit:this.saveRes},
		bbar:PTB(store,C_PS),
	    tbar:this.RType=='C'?[b1, '-',b2, '-',b5,'-',b8,'-',b10,'-',b6,'-',b7,'-']:[b1, '-',b2, '-',b3, '-',b4, '-',b5,'-']});
};
Ext.extend(Hcms.ResourceGrid, Ext.grid.EditorGridPanel);

Hcms.ImgWin=function(r){
	var p=r;
	var zoomed=1;
	var jcrop;
	zoom=function(t){
		if(jcrop) jcrop.destroy();
		var im=eval("document.images.IMG_CROP");
		var zoomfactor=0.1;
		prefix=(t=="in")? 1 : -1;
		if (parseInt(im.style.width)>10){
			im.style.width=parseInt(im.style.width)+parseInt(im.style.width)*zoomfactor*prefix;
			im.style.height=parseInt(im.style.height)+parseInt(im.style.height)*zoomfactor*prefix;
			zoomed=round4(zoomed+zoomed*zoomfactor*prefix);
		}
    };
    var normal=function(){
    	var im=eval("document.images.IMG_CROP");
    	im.style.width=p.get('width');
    	im.style.height=p.get('height');
    	zoomed=1;
    };
    var X=0;
    var Y=0;
    var W=0;
    var H=0;
    function showCoords(c){
		X=c.x;
		Y=c.y;
		W=c.w;
		H=c.h;
	};
	
    crop=function(){
    	jcrop=$.Jcrop('#IMG_CROP');
    	jQuery('#IMG_CROP').Jcrop({
			onChange: showCoords,
			onSelect: showCoords
		});
    };
    var reload=function(r){
    	var im=eval("document.images.IMG_CROP");			
		var url=CMS_URL+r.get('path')+'/'+r.get('no')+'.'+r.get('ext');
		im.src=url;
		im.style.width=r.get('width');
    	im.style.height=r.get('height');
    };
    saveCrop=function(p){
    	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'FILE_C',no:p.get('no'),x:X,y:Y,width:W,height:H,replace:0},
			success: function(res){
				var e = XTR(res.responseXML,'HcmsResource',HcmsResource);
				p=e;
				if(jcrop) jcrop.destroy();
				reload(e);
				XMG.alert(SYS,M_S);
			},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);}
		});
    };
    var url=CMS_URL+p.get('path')+'/'+p.get('no')+'.'+p.get('ext');
	var html='<table width=100% height=100%><tr><td valign=middle align=middle>';
	html+='<img id="IMG_CROP" name="IMG_CROP" src="'+url+'" style="border:1px solid #6b6b6b;width:'+p.get('width')+';"></td></tr></table>';
	Hcms.ImgWin.superclass.constructor.call(this, {title:p.get('name'),modal:true,width:600,maximizable:true,
		height:400, autoScroll:true,plain:false,html:html,cls:'white',
		tbar:[
		{text:C_ZOOM_IN,iconCls:'zoomin',disabled:false,scope:this,handler:function(){zoom('in');}},
		{text:C_ZOOM_OUT,iconCls:'zoomout',disabled:false,scope:this,handler:function(){zoom('out');}},
		{text:C_NORMAL,iconCls:'Picture',disabled:false,scope:this,handler:normal},
		{text:C_CROP,iconCls:'zoomout',disabled:false,scope:this,handler:crop},
		{text:C_SAVE,iconCls:'save',disabled:false,scope:this,handler:function(){saveCrop(p);}}
		]});
};
Ext.extend(Hcms.ImgWin, Ext.Window);

Hcms.ImageBrowser = function(config) {
	var lookup = {};var data;	
	var formatData = function(data) {
		data.fileName=data.no+'.'+data.ext;
		data.width=data.width?data.width:120;
		data.height=data.height?data.height:120;
		data.size=data.size;
		data.url=CMS_URL+data.path+'/t_'+data.fileName;
		data.label = (data.name.length > 15)? data.name.substr(0, 12) + '...' : data.name;
	  	data.title = "Name: " + data.name +
	  	  "<br>Dimensions: " + data.width + " x " + data.height +
	  	  "<br>Size: " + ((data.size < 1024) ? data.size + " bytes":(Math.round(((data.size * 10) / 1024)) / 10) + " KB");
		if (data.width > data.height) {
			if (data.width < 160) {
				data.thumbwidth = data.width;data.thumbheight = data.height;
			}
			else {
				data.thumbwidth = 160;data.thumbheight = 160 / data.width * data.height;
			}
		} 
		else {
			if (data.height < 160) {
				data.thumbwidth = data.width;data.thumbheight = data.height;
			}
			else {
				data.thumbwidth = 160 / data.height * data.width;data.thumbheight = 160;
			}
		}
		data.thumbleft = (Math.round((160 - data.thumbwidth) / 2)) + "px";
		data.thumbtop = (Math.round((160 - data.thumbheight) / 2)) + "px";
		data.thumbwidth = Math.round(data.thumbwidth) + "px";
		data.thumbheight = Math.round(data.thumbheight) + "px";
		lookup[data.name] = data;
		return data;
	};
	var tpl = new Ext.XTemplate(
		'<tpl for=".">',
		'<div class="thumb-wrap" id="{name}">',
			'<div class="thumb"><img src="{url}" ext:qtip="{title}" style="top:{thumbtop}; left:{thumbleft}; width:{thumbwidth}; height:{thumbheight};"></div>',
				'<span>{label}</span>',
			'</div>',
		'</tpl>'
	);
	tpl.compile();
	var store = GS('HCRE_Q','HcmsResource',HcmsResource,'','','','','',true);
	var selectionChanged = function() {
		var selNode = view.getSelectedNodes();
		if (selNode && selNode.length > 0) {selNode = selNode[0];data = lookup[selNode.id];}
	};
	var doCallback = function(){
		//this.hide(this.animateTarget, function(){if(this.callback){this.callback(data);}});
		if(this.callback){this.callback(data);}
		this.close();
	};		
	var view = new Ext.DataView({id:'img-browser-view',tpl:tpl,singleSelect:true,overClass:'x-view-over',itemSelector:'div.thumb-wrap',
		store:store,emptyText: 'No images to display',
		listeners: {
			'selectionchange': {fn: selectionChanged, scope: this, buffer: 100},
			'dblclick': {fn:doCallback, scope: this}},
		prepareData: formatData.createDelegate(this)
	});
	var reload=function(pid){
		store.removeAll();
		store.reload({params:{pno:pid,type:'F'}});
	};
	var dp =createResourceTree('D',{scope:this,click:function(n,e){reload(n.id);}});
	var fp = new Ext.Panel({
		region:'center',id:'images-view',autoScroll:true,items:view,
        keys: {key:27,handler: function() {this.hide();},scope: this}});
	 Ext.applyIf(config, {
		 title: 'Browse Images',layout: 'border',minWidth: 514,minHeight: 323,
			modal: true,border: false,items: [{
				region:'west',split:true,collapsible: true,collapseMode:'mini',
				layout:'fit',width:200,minWidth:150,maxSize:400,margins:'0 0 5 0',
				items:dp},fp]
	 });
	 Hcms.ImageBrowser.superclass.constructor.call(this, config);
}
Ext.extend(Hcms.ImageBrowser,Ext.Window);
Ext.onReady(function(){	
	Ext.state.Manager.setProvider(new Ext.state.CookieProvider());
    Ext.QuickTips.init();
    Ext.form.Field.prototype.msgTarget = 'side';
    var tBar=new Ext.BoxComponent({region:'north',el:'north',height:60});   
	var viewport = new Ext.Viewport({layout:'border',items:[tBar,P_MENU,T_MAIN]});	
	setTimeout(function(){Ext.get('loading').remove();Ext.get('loading-mask').fadeOut({remove:true});},50);
	iniStore();
	P_MENU.on('collapse',function(){T_MAIN.getActiveTab().doLayout();});
	P_MENU.on('expand',function(){T_MAIN.getActiveTab().doLayout();});
	T_MAIN.on('tabchange',function(m,a){a.doLayout();});
	T_MAIN.setActiveTab(T_MAIN.add(new Hcms.ResourceGrid(0,C_CATE_ROOT,'/0','C')));
	viewport.doLayout();
});
