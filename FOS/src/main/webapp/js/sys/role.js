//角色权限
Fos.RoleTab = function() {
	var store = GS('ROLE_Q','PRole',PRole,'roleId','DESC','','S_ROLE','roleId',false);
    store.load();  
    
	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true});
	var active = new Ext.grid.CheckColumn({header:C_ACTIVE,dataIndex:'active',sortable:true,width:55});
	var cm=new Ext.grid.ColumnModel({columns:[sm,
		{header:C_NAME,dataIndex:'roleName',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
		{header:C_DESC,dataIndex:'roleDesc',editor:new Ext.form.TextField()},
		active],defaults:{sortable:true,width:100}
	});
	
	this.addRole=function(){
		var rid=GGUID();
		var r = new PRole({id:rid,
			roleId:rid,
			active:'1',
			version:'0',
			rowAction:'N'
		});
    	this.grid.stopEditing();
    	store.insert(0,r);
    	sm.selectFirstRow();
    	this.grid.startEditing(0,1);
	};
	
	this.removeRole=function(){
		FOS_REMOVE(sm,store);
	};
	
	this.save = function(){		
		var xml='';
		var a = store.getModifiedRecords();
		if(a.length) 
			var xml = ATX(a,'PRole',PRole);		
		if(xml!=''){
			Ext.Ajax.request({scope:this,
				url:SERVICE_URL,
				method:'POST',
				params:{
					A:'ROLE_S'
				},
				success: function(r){
					var a = XTRA(r.responseXML,'PRole',PRole);
					FOSU(store,a,PRole);
					XMG.alert(SYS,M_S);
					getROLE_S().reload();
				},
				failure: function(r){
					XMG.alert(SYS,M_F+r.responseText);
				},
				xmlData:FOSX(xml)});
		}
		else 
			XMG.alert(SYS,M_NC);
	};
	
	this.setPermission=function(){
		var b=sm.getSelected();
		if(b){
			if(b.get('rowAction')=='N')
				XMG.alert(SYS,M_SAVE_FIRST);
			else{
				var w=new Fos.RoleFuncWin(b);
				w.show();
			}
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	
	
	
	this.grid = new Ext.grid.EditorGridPanel({
		plugins:active,clicksToEdit:1,height:475,store:store,sm:sm,cm:cm,
		tbar:[{itemId:'TB_N',text:C_ADD,disabled:NR(M1_P+A_ROLE+F_M),iconCls:'add',scope:this,handler:this.addRole},'-',
		{itemId:'TB_R',text:C_REMOVE,disabled:NR(M1_P+A_ROLE+F_R),iconCls:'remove',handler:this.removeRole},'-',
		{itemId:'TB_S',text:C_SAVE,disabled:NR(M1_P+A_ROLE+F_M),iconCls:'save',scope:this,handler:this.save},'-',
		{itemId:'TB_P',text:C_PERMISSION_SET,disabled:NR(M1_P+A_ROLE+F_M),iconCls:'key',scope:this,handler:this.setPermission}]
	});	
	
	
	Fos.RoleTab.superclass.constructor.call(this,{id:'T_ROLE',
		title:C_ROLE_MGT,
		iconCls:'gen',
		header:false,
		deferredRender:false,
		autoScroll:true,
		labelAlign:'right',
		closable:true,
		labelWidth:80,
		border:false,
		width:800,
		layout:'fit',
		items:[this.grid]
	});
};
Ext.extend(Fos.RoleTab, Ext.Panel);

Fos.RoleFuncWin = function(role) {
	var us = GS('ROFU_Q','PRoleFunction',PRoleFunction,'funcCode','ASC','','S_ROFU','rofuId',true);			
	var funcStore = getFUNC_S();
	
	var bChildCheck = false;
	this.reload = false;
	var nl = {scope:this,
			checkchange:function(n,c){
				if(!this.reload){
					var a = us.getRange();
					var b=false;
					for(var i=0;i<a.length;i++){				
						if(a[i].get('roleId')==role.get('roleId') && n.id == a[i].get('funcCode')){
							b=true;
							if(c){
								if(a[i].get('rowAction')=='R') a[i].set('rowAction','M');
								if(a[i].get('rowAction')=='D') a[i].set('rowAction','N');
							}
							else a[i].set('rowAction',a[i].get('rowAction')=='N'?'D':'R');
							break;
						}
					}
					if(b==false && c){
						var rid=GGUID();
						var rf = new PRoleFunction({id:rid,rofuId:rid,roleId:role.get('roleId'),funcCode:n.id});
						us.add(rf);rf.set('rowAction','N');
					}	
					if(c && n.childNodes.length>0){					
						if(!bChildCheck){
							n.expand(true);
							var cn = n.childNodes;
							for(var i=0;i<cn.length;i++){cn[i].getUI().toggleCheck(true);}
						}
					}
					if(c && n.parentNode && !n.parentNode.getUI().isChecked()){
						bChildCheck=true;n.parentNode.getUI().toggleCheck(true);bChildCheck=false;
					}
					if(!c && n.childNodes.length>0){
						var cn = n.childNodes;
						for(var i=0;i<cn.length;i++){cn[i].getUI().toggleCheck(false);}
					}
				}
				else{
					if(!c && n.childNodes.length>0){
						var cn = n.childNodes;
						for(var i=0;i<cn.length;i++){cn[i].getUI().toggleCheck(false);}
					}
				}
			}
		};	
	var tree = new Ext.tree.TreePanel({
		animate:true,
		enableDD:false,autoScroll:true,
		containerScroll: true,height:475,title:C_FUNC_PERMISSION,
		selModel:new Ext.tree.MultiSelectionModel(),
		listeners:nl
	});
	
	var fp = {};
	var maxDep = 0;
	var root;
	var a = funcStore.getRange();
	
	for(var i=0;i<a.length;i++){
		var fc=a[i].get('funcCode');
		var n = new Ext.tree.TreeNode({text:a[i].get('funcName'),id:fc,leaf:a[i].get('funcType')=='M'?false:true,
				checked:false,expanded:false});
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
	
	us.load({params:{mt:'JSON',roleId:role.get('roleId')},callback:function(ra,o,s){
		if(s&&ra.length>0){
			for(var i=0;i<ra.length;i++){
				var n=tree.getNodeById(ra[i].get('funcCode'));				
				if(n){
					this.reload = true;
					if(n.hasChildNodes()) n.expand();
					n.getUI().toggleCheck(true);
					this.reload = false;
				}
			}
		}
	},scope:this});
	
	this.save = function(){		
		var xml='';
		var a = us.getModifiedRecords();
		if(a.length) var xml = ATX(a,'PRoleFunction',PRoleFunction);
		if(xml!=''){
			Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'ROFU_S'},
				success: function(r){
					var a = XTRA(r.responseXML,'PRoleFunction',PRoleFunction);FOSU(us,a,PRoleFunction);
					XMG.alert(SYS,M_S);},
				failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
				xmlData:FOSX(xml)});
		}
		else XMG.alert(SYS,M_NC);
	};
	
	Fos.RoleFuncWin.superclass.constructor.call(this,{iconCls:'key',title:C_PERMISSION_SET+'-'+role.get('roleName'),modal:true,width:600,
       height:500,layout:'fit',plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:tree,
       tbar:[
          {itemId:'TB_S',text:C_SAVE+'(S)',disabled:NR(M1_P+A_ROLE+F_M),iconCls:'save',scope:this,handler:this.save}]
       }); 
};
Ext.extend(Fos.RoleFuncWin, Ext.Window);