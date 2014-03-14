//历史消息
Fos.MsgHistory=function(uid,un){
	var store = GS('MESS_X','PMessage',PMessage,'messId','DESC','','','',false);
	store.load({params:{userId:uid,messSendFlag:1,messType:2,start:0,limit:100}});
	var sm=getCSM();
    var cm=new Ext.grid.ColumnModel({columns:[new Ext.grid.RowNumberer(),
    {header:C_SEND_TIME,dataIndex:'messCreateTime',renderer:formatDateTime,width:120},
	{header:C_SENDER,dataIndex:'messFromUserName'},
	{header:C_RECEIVER,dataIndex:'messToUserName'},
	{header:C_MSG,dataIndex:'messBody',width:200}
	],defaults:{sortable:true,width:80}});
    var grid = new  Ext.grid.GridPanel({id:'G_MESS_H_'+uid,iconCls:'gen',header:false,
    	width:400,height:300,store:store,sm:sm,cm:cm,loadMask:true,
    bbar:PTB(store,100),
    tbar:PTB(store,100)}); 
    Fos.MsgHistory.superclass.constructor.call(this, {id:'W_MSG_H_'+uid,iconCls:'user',title:C_VIEW_MSG_HISTORY+'-'+un,
    	closable:true,width:400,height:300,layout:'fit',maximizable:true,items:grid});    
};
Ext.extend(Fos.MsgHistory, Ext.Window);

//消息窗口
Fos.MsgWin = function(uid,un) {
	this.onMsg=function(content,t){
		var msg = '<div style="margin:5px 5px 5px 5px;font-size:12px"><b>{1}</b>说:[{0}]<br>';
		if(t=='S')
			msg+='<div style="margin:5px 5px 5px 5px;font-size:12px">{2}</div>';
		else 
			msg+='<div style="margin:5px 5px 5px 5px;font-size:12px;"><font color="blue">{2}</font</div>';
		var mc = String.format(((msg)), new Date().toLocaleString(),t=='S'?CUSER_NAME:un,content);
		Ext.getCmp("MSG_D").body.insertHtml('beforeEnd', mc);
		Ext.getCmp("MSG_D").body.scroll('b', 10000,{duration: 0.1});		
	};
	this.sendMsg=function(){
		var he=Ext.getCmp('MSG_S');he.syncValue();
		var msg= he.getValue();
		if (msg.trim() == ''){XMG.alert(SYS,M_NO_MSG_SEND);he.focus(true);return}		
		this.onMsg(msg,'S');
		he.reset();
		var m=new PMessage({messId:GGUID(),messType:2,messTo:un,messCc:'',messBcc:'',messSubject:'',messBody:msg,
			messAttachment:'',messFrom:CUSER_NAME,messCreateTime:new Date(),messSendFlag:0,
			messFromUserId:CUSER_ID,messFromUserName:CUSER_NAME,messToUserId:uid,messToUserName:un,rowAction:'N'
		});
		var x = RTX(m,'PMessage',PMessage);
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'MESS_S'},
			success: function(res){},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(x)
		});
	};
	this.addKeyMap = function(c){
		var he=this.findById('MSG_S');
		var el=he.getEl();
		var map = new Ext.KeyMap(el,[{key:13,ctrl:true,stopEvent:true,fn:this.sendMsg,scope:this}]);
	};
	Fos.MsgWin.superclass.constructor.call(this, {id:'W_MSG'+uid,iconCls:'user',title:un+C_DIALOG,
		width:600,maximizable:true,height:600,closable:true,
        plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',layout:'border',items:[
			{region:'north',id:'MSG_D',split:true,layout:'fit',height:300,autoScroll:true},
			{region:'center',
				layout:'fit',items:[{id:'MSG_S',xtype:'htmleditor',anchor:'95%',height:'300'
				}],
				bbar:['->',{text:C_SEND,iconCls:'save',scope:this,handler:this.sendMsg}]}
		],
		listeners:{scope:this,show:this.addKeyMap}});
};
Ext.extend(Fos.MsgWin, Ext.Window);

//在线用户
Fos.OnlineUserWin = function() {
	var store = GS('USER_L','PUser',PUser,'userId','DESC','','','',false);
    var root=new Ext.tree.TreeNode({text:'Online'});
	var frm = new Ext.tree.TreePanel({id:'im-tree',
        rootVisible:false,
        lines:false,
        autoScroll:true,        
        root:root,
        contextMenu: new Ext.menu.Menu({
            items: [
                    {id: 'SEND_M',text:C_SEND_MSG},
                    {id: 'SEND_F',text:C_SEND_FILE},
                    {id: 'SEND_MA',text:C_SEND_MAIL},
                    '-',
                    {id: 'M_HISTORY',text:C_VIEW_MSG_HISTORY},
                    {id: 'REMOVE',text:C_KICK_OFF}                 
                    ],
            listeners: {
                itemclick: function(item) {
                    switch (item.id) {
                        case 'REMOVE':
                            var n = item.parentMenu.contextNode;
                            if (n.parentNode) {
                                var u= new PUser({userId:n.id});
                                var x = RTX(u,'PUser',PUser);
                        		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'USER_K'},
                        			success: function(res){n.remove();},
                        			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
                        			xmlData:FOSX(x)
                        		});
                            }
                            break;
                        case 'SEND_M':
                            var n = item.parentMenu.contextNode;
                            var w=Ext.getCmp('W_MSG'+n.id);
                            if(w) w.show();
                            else{
                            	var w= new Fos.MsgWin(n.id,n.text);
                            	w.show();
                            }
                            break;
                        case 'M_HISTORY':
                            var n = item.parentMenu.contextNode;
                            var w=Ext.getCmp('W_MSG_H_'+n.id);
                            if(w) w.show();
                            else{
                            	var w= new Fos.MsgHistory(n.id,n.text);
                            	w.show();
                            }
                            break;
                    }
                }
            }
        }),
        listeners: {
	        contextmenu: function(node, e) {
				node.select();
	            var c = node.getOwnerTree().contextMenu;
	            c.contextNode = node;
	            c.showAt(e.getXY());
	        },
	        dblclick :function(node, e) {}
	    }
	});	
	var loadOnlineUser=function(){
		store.load({callback:function(r,o,s){
	    	if(s){
	    		if(root.hasChildNodes()){
	    			var a=root.childNodes;
		    		for(var i=0;i<a.length;i++){
		    			var b=false;
		    			for(var j=0;j<r.length;j++){
		    				if(a[i].id==r[j].get('userId')){b=true;break;}	    				
		    			}
		    			if(b==false) root.removeChild(a[i]);
		    		}
	    		}
	    		if(r.length){
		    		for(var i=0;i<r.length;i++){
		    			if(!root.findChild('id',r[i].get('userId'))&&r[i].get('userId')!=CUSER_ID){
			    			var n=new Ext.tree.TreeNode({text:r[i].get('userName'),id:r[i].get('userId'),
			    				iconCls:'user',leaf:true,listeners:{
			    				click:function(n,e){}}});
			    			root.appendChild(n);
		    			}
		    		}
	    		}
	    	}
	    }});
	};
	var task={run:loadOnlineUser,interval:60000};
	loadOnlineUser();
	this.runner = new Ext.util.TaskRunner();
	this.runner.start(task);
    Fos.OnlineUserWin.superclass.constructor.call(this, {id:'W_MESS',title:C_ONLINE_USER,width:200,
        height:400,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',layout:'fit',items:frm,
        closable:true,listeners:{scope:this, destroy:function(c){this.runner.stop(task);}}
    });
};
Ext.extend(Fos.OnlineUserWin, Ext.Window);