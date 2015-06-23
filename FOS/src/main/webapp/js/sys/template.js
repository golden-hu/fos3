//模板管理
var showG_TEMP = function() {    
	this.store = GS('TEMP_Q','PTemplate',PTemplate,'tempId','DESC','','S_TEMP','tempId',true);
    this.store.load();    
    
    this.add=function(){
		var p = new PTemplate({id:GGUID(),
			tempId:'0',
			tempType:'xls',
			tempClass:'B',
			active:1,
			version:'0',
			rowAction:'N'
		});            
    	grid.stopEditing();
    	this.store.insert(0,p);
    	sm.selectFirstRow();
    	grid.startEditing(0,1);
	};
	
	this.removeTemp=function(){
		FOS_REMOVE(sm,store);
	};
	
	this.save=function(){
		grid.stopEditing();
		FOS_POST(store,'PTemplate',PTemplate,'TEMP_S');
	};	
	
	this.initialTemplates =function(){
		Ext.Ajax.request({scope:this,
			url:SERVICE_URL,
			method:'POST',
			params:{A:'COMP_IT'},
			success: function(res){				
				XMG.alert(SYS,M_S);
				//btnImportTemplates.setDisabled(true);
			},
			failure: function(res){
				XMG.alert(SYS,M_F+res.responseText);
			}
		});
	};	
	
    this.upload = function(){
    	var b =grid.getSelectionModel().getSelected();
    	if(b){
			if(b.get('rowAction')!='N'){
	    		var win = new Fos.FileUploadWin(C_TEMP_UP,C_TEMP_FILE_P);
	    		win.addButton({text:C_UPLOAD,handler:function(){
					var f = Fos.FileUploadWin.superclass.findById.call(win,'F_UP');
					if(f.getForm().isValid()){
	                	f.getForm().submit({
	                    	url: SERVICE_URL+'?mt=json&A=TEMP_U&uf=1&tempId='+b.get('tempId'),
	                    	waitMsg:'Uploading...',
	                    	success: function(f, o){
	                    		XMG.alert(SYS,C_UPLOAD_SUCCESS);
	                    		win.close();
	                    	}
	                	});
	            }}});
	            win.addButton({text:C_CANCEL,handler:function(){win.close();}},this);
	    		win.show();
	    	}    	
	    	else{XMG.alert(SYS,M_SAVE_FIRST);}
    	}
    	else XMG.alert(SYS,M_NO_DATA_SELECTED);
    };
    
    this.download=function(){
    	var b =grid.getSelectionModel().getSelected();
    	if(b){
	    	var url = SERVICE_URL+'?A='+'TEMP_D&tempId='+b.get('tempId');
	    	window.open(url,'download', 'height=100, width=400, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no');
    	}
    	else XMG.alert(SYS,M_NO_DATA_SELECTED);
    };
    
	var checkColumn = new Ext.grid.CheckColumn({header:C_ACTIVE,dataIndex:'active',sortable:true,width:55});
    var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true});
    var cm=new Ext.grid.ColumnModel({columns:[sm,
			{header:C_TEMP_NAME,dataIndex:'tempName',width:200,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
			{header:C_TEMP_DESC,dataIndex:'tempDesc',width:150,editor:new Ext.form.TextField()},
			{header:C_FILE_TYPE,dataIndex:'tempType',width:150,editor:new Ext.form.ComboBox({displayField:'NAME',valueField:'CODE',triggerAction:'all',
		    	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:TFTY_S})},
			{header:C_TEMP_TYPE,dataIndex:'tetyId',width:150,renderer:getTETY,editor:new Ext.form.ComboBox({displayField:'tetyName',valueField:'tetyId',triggerAction:'all',
		            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getTETY_S(),
		            listeners:{scope:this,select:function(c,r,i){
		            	sm.getSelected().set('tetyCode',r.get('tetyCode'));
		            	sm.getSelected().set('tetyName',r.get('tetyName'));}}})
		    },
			checkColumn
		],
		defaults:{sortable:true,width:100}
    });
	
    var btnAdd = new Ext.Button({itemId:'TB_N',
    	text:C_ADD,
    	disabled:NR(M1_P+A_TEMP+F_M),
    	iconCls:'add',
    	scope:this,
    	handler:this.add
    });
	
    var btnRemove = new Ext.Button({itemId:'TB_R',
    	text:C_REMOVE,
    	disabled:NR(M1_P+A_TEMP+F_R),
    	iconCls:'remove',
    	scope:this,
    	handler:this.removeTemp
    });
    		
    var btnSave = new Ext.Button({itemId:'TB_S',
    	text:C_SAVE,
    	disabled:NR(M1_P+A_TEMP+F_M),
    	iconCls:'save',
    	scope:this,
    	handler:this.save
    });
    
    var btnDownload = new Ext.Button({itemId:'TB_D',
    	text:C_TEMP_DOWNLOAD,
    	disabled:NR(M1_P+A_TEMP+F_M),
    	iconCls:'down',
    	scope:this,
    	handler:this.download
    });
    		
    var btnUpload = new Ext.Button({itemId:'TB_U',
    	text:C_TEMP_UPLOAD,
    	disabled:NR(M1_P+A_TEMP+F_M),
    	iconCls:'up',
    	scope:this,
    	handler:this.upload
    });
    
    var btnImportTemplates = new Ext.Button({
    	text:C_TEMP_IMPORT,
    	disabled:NR(M1_P+A_TEMP+F_M),
    	iconCls:'doc',
    	scope:this,
    	handler:this.initialTemplates
    });
    
    var grid = new  Ext.grid.EditorGridPanel({id:'G_TEMP',
    	iconCls:'gen',
    	title:C_TEMP_MGT,
    	header:false,
		plugins:checkColumn,clicksToEdit:1,closable:true,store:this.store,sm:sm,cm:cm,
		tbar:[btnAdd,'-',btnRemove,btnSave,btnDownload,btnUpload,btnImportTemplates]
    });
    return grid;
};


Fos.TemplateChooseWin = function(t){
	
	var frmTemplate = new Ext.form.FormPanel({labelWidth:80,bodyStyle:'padding:5px',
    	items: [{fieldLabel:C_TEMP_SEL_P,
    		id:'tempId',
    		allowBlank:false,
    		store:getTemplates(t),
    		xtype:'combo',
    		displayField:'tempName',
    		valueField:'tempId',
    		typeAhead: true,
    		mode:'local',
    		triggerAction:'all',
    		selectOnFocus:true,
    		anchor:'90%'
    	}]
    });
    Fos.TemplateChooseWin.superclass.constructor.call(this,{title:C_TEMP_SEL_P,
    	modal:true,
    	width:400,
        Height:300,
        plain:false,
        bodyStyle:'padding:0px;',
        buttonAlign:'right',
        items:frmTemplate
    }); 
};
Ext.extend(Fos.TemplateChooseWin, Ext.Window);


Fos.FileUploadWin = function(title,label) {	
	var fp = new Ext.form.FormPanel({
        id:'F_UP',fileUpload:true,title:title,header:false,autoHeight:true,
        items: [{
            xtype: 'fileuploadfield',emptyText:label,fieldLabel:label,
            name: 'tempFile',anchor: '90%',frame: true,allowBlank: false,msgTarget: 'side'
        }]
    });
    Fos.FileUploadWin.superclass.constructor.call(this, {title:title,iconCls:'up',plain:false,modal:true,width:400,minWidth:300,
        minHeight:200,plain:true,bodyStyle:'padding:0px;',buttonAlign:'right',items:fp}); 
};
Ext.extend(Fos.FileUploadWin,Ext.Window);


//附件TAB
Fos.AttachTab = function(p) {
	this.store = GS('ATTACH_Q','FAttach',FAttach,'attachId','DESC','','S_ATTACH','attachId',true);
    this.store.load({params:{consId:p.get('consId'),securityFlag:'0'}});
    this.upload = function(){    	
		var win = new Fos.FileUploadWin(C_ATTACH_UPLOAD,C_ATTACH_FILE_P);
		win.addButton({text:C_UPLOAD,scope:this,handler:function(){
			var f = Fos.FileUploadWin.superclass.findById.call(win,'F_UP');
			if(f.getForm().isValid()){
            	f.getForm().submit({
                	url: SERVICE_URL+'?mt=json&A=ATTACH_U&uf=1&consId='+p.get('consId')+'&consNo='+p.get('consNo')+'&securityFlag='+0,
                	waitMsg:'Uploading...',
                	scope:this,
                	success: function(f, o){
                		XMG.alert(SYS,C_UPLOAD_SUCCESS);
                		win.close();
                		this.store.load({params:{consId:p.get('consId'),securityFlag:'0'}});
                	}
            	});
        }}});
        win.addButton({text:C_CANCEL,handler:function(){win.close();}},this);
		win.show();	    	
    };
    this.download=function(){
    	var b =sm.getSelected();
    	if(b){
	    	var url = SERVICE_URL+'?A='+'ATTACH_D&attachId='+b.get('attachId');
	    	window.open(url,'download', 'height=100, width=400, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no');
    	}
    	else XMG.alert(SYS,M_NO_DATA_SELECTED);
    };
    this.removeAttach=function(){
    	var a =sm.getSelections();
    	if(a.length>0){
       		XMG.confirm(SYS,M_R_C,function(btn){
           	if(btn=='yes'){
           		var xml = SMTX4R(sm,'FAttach','attachId');	    		
	    		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'ATTACH_R',attachId:p.get('attachId')},
	    		success: function(r){
	    			XMG.alert(SYS,M_S);			
	    			this.store.load({params:{consId:p.get('consId'),securityFlag:'0'}});
	    		},
	    		failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
	    		xmlData:FOSX(xml)});
            }},this);
		}
    };
    
    var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true});
    var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_FILE_NAME,dataIndex:'attachFileName',width:200},
	{header:C_MODIFY_TIME,width:100,align:'right',renderer:formatDateTime,dataIndex:"modifyTime"}
	],defaults:{sortable:true,width:100}});
	
    var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_CONS;
    
	Fos.AttachTab.superclass.constructor.call(this, {id:'G_ATTACH'+p.get('consId'),title:C_ATTACH,header:false,
	closable:false,store:this.store,sm:sm,cm:cm,
	tbar:[
	      {itemId:'TB_U',text:C_ATTACH_UPLOAD+'(U)',disabled:NR(m+F_M),iconCls:'up',scope:this,handler:this.upload},'-',
	    {itemId:'TB_D',text:C_ATTACH_DOWNLOAD+'(D)',disabled:NR(m+F_M),iconCls:'down',scope:this,handler:this.download},'-',
        {itemId:'TB_R',text:C_REMOVE+'(R)',disabled:NR(m+F_R),iconCls:'remove',scope:this,handler:this.removeAttach}
        ]
    });   
};
Ext.extend(Fos.AttachTab,Ext.grid.GridPanel);

//附件窗口
Fos.AttachWin = function(p) {
	var panel = new Fos.AttachTab(p);
	Fos.AttachWin.superclass.constructor.call(this, {title:p.get('consNo')+C_ATTACH,modal:true,width:900,
        height:565,layout:'fit',plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:panel});
};
Ext.extend(Fos.AttachWin,Ext.Window);
