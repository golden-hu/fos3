var C_PS=20;var C_PS20=20;var C_PS50=50;var C_PS100=100;
var GUID=0;
var GGUID=function(k){if(!k) GUID=GUID-1;return GUID;};
var GSEL=-10000;
var BF=500;var C_LW=400;var EQ=1;var LT=2;var LE=3;var GT=4;var GE=5;var NE=6;var LI=7;var IN=8;
var PPID=1;
var CY=1;
var CFS=9;
var BT_C='C';var BT_B='B';var BT_A='A';var BT_G='G';var BT_I='I';var BT_K='K';
var ST_F='FCL';var ST_L='LCL';
var BC_I='I';var BC_E='E';
var XMG = Ext.MessageBox;
var SR_TRAN='B';var SR_WARE='E';var SR_CONT='H';var SR_BL='I';var SR_INSP='D';var SR_CUDE='C';var SR_BBOOK='L';var SR_RABL='M';var SR_SESH='N';
var groupViewCfg = {forceFit:false,groupTextTpl: '{text} ({[values.rs.length]} {[values.rs.length > 1 ? "Items" : "Item"]})'};
var formatDate = function(v){return v ? v.dateFormat(DATEF) : '';};
var formatDateTime = function(v){return v ? v.dateFormat('Y-m-d H:i') : '';};
var numRenderColor  = function(v,m,r){v = parseFloat(v);if(v=='NaN') return '0.00';m.css=(v>0?'green-b':'red-b');return v.toFixed(2);};
var numRender = function(v){v=parseFloat(v);v=v.toFixed(2);if(v=='NaN') v='0.00';return v;};
var rateRender = function(v){v=parseFloat(v);v=v.toFixed(4);if(v=='NaN') v='0.0000';return v;};
var boolRender = function(v, p, record){p.css += ' x-grid3-check-col-td';return '<div class="x-grid3-check-col'+(v==1?'-on':'')+' x-grid3-cc-'+this.id+'">&#160;</div>';};
var consRender  = function(v){return "<a href=\"javascript:openCons('"+v+"');\">"+v+"</a>";};
var invoRender  = function(v){return "<a href=\"javascript:openInvo('"+v+"');\">"+v+"</a>";};
var exhiRender  = function(v){
	var idx=v.lastIndexOf("/");
	fn=v.substr(idx+1,v.length);
	return "<a href=\"javascript:OW('"+SERVER_URL+v+"');\">"+fn+"</a>";
};
var HL=function(c){return '<font color=#ff0000>'+c+'</font>'};
var GL=function(c){return '<font color=#00EE00>'+c+'</font>'};
var FOSFS=function(c){return '<font size=12px>'+c+'</font>'};
var TODAY = (new Date()).format(DATEF);
var custTpl = new Ext.XTemplate('<tpl for="."><div class="list-item"><h3><span>{custCode}</span>&nbsp;&nbsp;&nbsp;&nbsp;{custNameCn}</h3></div></tpl>');
var charTpl = new Ext.XTemplate('<tpl for="."><div class="list-item"><h3><span>{charCode}</span>{charName}</h3></div></tpl>');
var dotyTpl = new Ext.XTemplate('<tpl for="."><div class="list-item"><h3><span>{dotyCode}</span>{dotyName}</h3></div></tpl>');
var portTpl = new Ext.XTemplate('<tpl for="."><div class="list-item"><h3><span>{portCode}</span>{portNameEn}</h3></div></tpl>');
var counTpl = new Ext.XTemplate('<tpl for="."><div class="list-item"><h3><span>{counCode}</span>{counNameCn}</h3></div></tpl>');
var vessTpl = new Ext.XTemplate('<tpl for="."><div class="list-item"><h3><span>{vessNameEn}</span>&nbsp;&nbsp;&nbsp;&nbsp;{vessNameCn}</h3></div></tpl>');
var getElapsed=function(d){if(!d) return -1;return Math.abs((new Date()).getTime()-d.getTime());};
var showProgress=function(v){return function(){var i = v/11;Ext.MessageBox.updateProgress(i, Math.round(100*i)+'% completed');}};
var loliTpl = new Ext.XTemplate('<tpl for="."><div class="list-item"><h3>{vessName}/{voyaName}</h3></div></tpl>');
var getSessionData=function(k){
	var d='';
	if(document.all) d=loadUserData(k);
	else if(window.sessionStorage) d+=window.sessionStorage.getItem(k);
	else d+=Cookies.get(k);
	return d;
};
var getUUID=function(){
	var s = [], itoh = '0123456789ABCDEF';
	for (var i = 0; i <36; i++) s[i] = Math.floor(Math.random()*0x10);
	s[14] = 4;
	s[19] = (s[19] & 0x3) | 0x8; 
	for (var i = 0; i <36; i++) s[i] = itoh[s[i]];
	s[8] = s[13] = s[18] = s[23] = '-';
	return s.join('');
};
var checkPassEx=function(){
	var d='';
	if(document.all) d=loadUserData('USER_PASS_CHANGE_DATE');
	else if(window.sessionStorage) d+=window.sessionStorage.getItem('USER_PASS_CHANGE_DATE');
	else d+=Cookies.get('USER_PASS_CHANGE_DATE');
	
	var md=Date.parseDate(d,DATEF);
	var ed=md.add(Date.DAY,30);
	var pd=ed.add(Date.DAY,-7);
	var td=new Date();
	var bP=td.between(pd,ed);
	if(bP){
		var t=new Ext.Template(M_PASS_EXP);
		var msg=t.apply([ed.format(DATEF)]);
		XMG.alert(SYS,msg);
	}
};
function GS(a,r,o,s,d,g,sid,id,rs){
	if(g==''){
		if(s!=='')
			if(sid!=='')
				return new Ext.data.Store({storeId:sid,url:SERVICE_URL+'?A='+a,baseParams:{mt:'JSON'},reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:r,id:id},o),remoteSort:rs,sortInfo:{field:s, direction:d}});
			else
				return new Ext.data.Store({url:SERVICE_URL+'?A='+a,baseParams:{mt:'JSON'},reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:r,id:id},o),remoteSort:rs,sortInfo:{field:s, direction:d}});
		else
			if(sid!=='')
				return new Ext.data.Store({storeId:sid,url:SERVICE_URL+'?A='+a,baseParams:{mt:'JSON'},reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:r,id:id},o)});
			else
				return new Ext.data.Store({url:SERVICE_URL+'?A='+a,baseParams:{mt:'JSON'},reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:r,id:id},o)});
	}
	else{
		if(s!=='')
			if(sid!=='')
				return new Ext.data.GroupingStore({storeId:sid,url:SERVICE_URL+'?A='+a,baseParams:{mt:'JSON'},reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:r,id:id},o),remoteSort:rs,sortInfo:{field:s, direction:d},groupField:g});
			else
				return new Ext.data.GroupingStore({url:SERVICE_URL+'?A='+a,baseParams:{mt:'JSON'},reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:r,id:id},o),remoteSort:rs,sortInfo:{field:s, direction:d},groupField:g});
		else
			if(sid!=='')
				return new Ext.data.GroupingStore({storeId:sid,url:SERVICE_URL+'?A='+a,baseParams:{mt:'JSON'},reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:r,id:id},o),groupField:g});
			else
				return new Ext.data.GroupingStore({url:SERVICE_URL+'?A='+a,baseParams:{mt:'JSON'},reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:r,id:id},o),groupField:g});
	}
};
var SP=function(n){var s='';for(var i=0;i<n;i++){s+='&nbsp;';};return s;};
Date.patterns = {ISO8601Long:"Y-m-d H:i:s",ISO8601Short:"Y-m-d",ShortDate: "n/j/Y",LongDate: "l, F d, Y",FullDateTime: "l, F d, Y g:i:s A",MonthDay: "F d",ShortTime: "g:i A",LongTime: "g:i:s A",SortableDateTime: "Y-m-d\\TH:i:s",UniversalSortableDateTime: "Y-m-d H:i:sO",YearMonth: "F, Y"};
Ext.grid.CheckColumn = function(config){
	this.addEvents({click:true});
	Ext.grid.CheckColumn.superclass.constructor.call(this);
	Ext.apply(this,config,{
		init:function(grid){
			this.grid = grid;
			this.grid.on('render', function(){var view = this.grid.getView();view.mainBody.on('mousedown', this.onMouseDown,this);},this);
		},
		onMouseDown:function(e, t){
			if(t.className && t.className.indexOf('x-grid3-cc-'+this.id) != -1){
			e.stopEvent();
			var index = this.grid.getView().findRowIndex(t);
			var record = this.grid.store.getAt(index);
			record.set(this.dataIndex,record.data[this.dataIndex]==1?0:1);
			this.fireEvent('click', this, e, record);
		}},
		renderer:function(v, p, record){
			p.css += ' x-grid3-check-col-td';
			return '<div class="x-grid3-check-col'+(v==1?'-on':'')+' x-grid3-cc-'+this.id+'">&#160;</div>';
		}
	});
	if(!this.id){this.id = Ext.id();};
	this.renderer = this.renderer.createDelegate(this);
};
Ext.extend(Ext.grid.CheckColumn, Ext.util.Observable);

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
var CCT={header:"创建时间",width:100,align:'right',renderer:formatDateTime,dataIndex:"createTime"};
var CMT={header:"修改时间",width:100,align:'right',renderer:formatDateTime,dataIndex:"modifyTime"};
var getUN=function(p){
	var a=[];
	a[a.length]=['EACH','1'];
	if(p.get('consTotalMeasurement')){a[a.length]=['CBM',p.get('consTotalMeasurement')];};
	if(p.get('consTotalGrossWeight')){a[a.length]=['KG',p.get('consTotalGrossWeight')];};
	var s=p.get('consContainersInfo');
	if(s){				
		s=s.replace(/(^\s*)|(\s*$)/g, "");
		var idx=s.indexOf(' ');
		if(idx==0){
			var b=s.split('X');
			if(b.length>0){a[a.length]=[b[1],b[0]];}
		}
		else{
			var c=s.split(' ');
			for(i=0;i<c.length;i++){
				var b=c[i].split('X');
				if(b.length>0){a[a.length]=[b[1],b[0]];}
			}
		}
	}
	return a;
};
var getMB = function(p){return [{xtype:'tbtext',text:C_CREATE_BY_C+getUSER(p.get('createBy'))},'-',
			{xtype:'tbtext',text:C_CREATE_TIME_C+formatDateTime(p.get('createTime'))},'-',
			{xtype:'tbtext',text:C_MODIFY_BY_C+getUSER(p.get('modifyBy'))},'-',
			{xtype:'tbtext',text:C_MODIFY_TIME_C+formatDateTime(p.get('modifyTime'))}
			]};
var getDirty=function(store){
	var cc=[];
	var a =store.getRange();
	for(var i=0;i<a.length;i++){if(a[i].dirty) cc[cc.length]=a[i];}
	return cc;
};		
var EXP=function(t,tid,p){
	var url = SERVICE_URL+'?A='+'TEMP_E&tempId='+tid+'&type='+t+p;
	window.open(url,'download', 'height=5, width=5, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=yes,location=no, status=no');
};
var ADDTAB=function(tid,f){
	var t = T_MAIN.getComponent(tid);
	if(t){T_MAIN.setActiveTab(t);}
	else{t = T_MAIN.add(f());T_MAIN.setActiveTab(t);}
};
var OW=function(url){window.open(url,'','height=0,width=0,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no');};
var OWF=function(url){window.open(url,'','height=800,width=600,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no');};
var OWW=function(url){window.open(url,'','height=800,width=600,top=0,left=0,toolbar=yes,menubar=yes,scrollbars=yes,resizable=yes,location=no,status=no');};
var LC=function(f,e,t,s){
	if(e.getKey()!=e.ENTER){	
		var q=f.getRawValue();
		if(q.length>1 && !f.isExpanded()){
			var a=[];var op=EQ;			
			a[0]=new QParam({key:'custCode',value:q+'%',op:LI});
			if(t!='') a[1]=new QParam({key:t,value:'1',op:EQ});
			var xml = QTX(a);
	   		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:s==1?{A:'CUST_X',S:1}:{A:'CUST_X'},
				success: function(r,o){f.store.loadData(r.responseXML,false);f.expand();},
				xmlData:FOSX(xml)
			});
		}
	}
};
var LP=function(f,e){
	if(e.getKey()!=e.ENTER){	
		var q=f.getRawValue();
		if(q.length>1 && !f.isExpanded()){
			var a=[];var op=1;
			a[0]=new QParam({key:'portNameEn',value:q+'%',op:7});			
			var xml = QTX(a);
	   		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:s==1?{A:'PORT_X',S:1}:{A:'PORT_X'},
				success: function(r,o){f.store.loadData(r.responseXML,false);f.expand();},
				xmlData:"<FosRequest>\n<data>\n"+xml+"</data>\n</FosRequest>\n"
			});
		}
		else if(q.length==0 && f.isExpanded()){f.store.removeAll();}
	}
};
var LV=function(f,e,vt){
	var q=f.getRawValue();
	if(q.length>1 && !f.isExpanded()){
		var a=[];var op=1;a[0]=new QParam({key:'vessActive',value:'1',op:1});
		a[1]=new QParam({key:'vessNameEn',value:q+'%',op:7});
		if(vt!=='') a[a.length]=new QParam({key:'vessType',value:vt?vt:1,op:1});
		var xml = QTX(a);
   		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'VESS_X'},scope:this,
			success: function(r,o){f.store.loadData(r.responseXML,false);f.expand();},
			failure: function(r,o){},
			xmlData:FOSX(xml)
		});
	}
};

var EXPC=function(t,p){	
	var templates = getTemplates(t);
	var a = templates.getRange();
	if(a.length==0) XMG.alert(SYS,M_TEMP_NOT_FOUND);
	else if(a.length==1){
		var tempId = a[0].get('tempId');
		var url = SERVICE_URL+'?A='+'TEMP_E&tempId='+tempId+'&type=I'+p;
		window.open(url,'download', 'height=5, width=5, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no');
	}
	else{
		var w=new Fos.TemplateChooseWin(t);
		w.addButton({text:C_OK,handler:function(){					
			var tempId = w.findById('tempId').getValue();
			if(tempId){
				var url = SERVICE_URL+'?A='+'TEMP_E&tempId='+tempId+'&type=I'+p;
				window.open(url,'download', 'height=5, width=5, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no');
		  	}
		  	w.close();
		}},this);
		w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);w.show();
	}
};
var EXPM=function(to,cc,sub,msg,t,p,mt){
	var m=new PMessage({messTo:to,messCc:cc,messSubject:sub,messBody:msg,rowAction:'N'});	
	var w=new Fos.MailWin(m,t,mt?mt:1);
	w.addButton({text:C_SEND,handler:function(){
		to= w.findById('to').getValue();
		cc= w.findById('cc').getValue();
		sub= w.findById('sub').getValue();
		body= w.findById('body').getValue();
		tid=w.findById('tempId').getValue();
		m.set('messTo',to);
		m.set('messCc',cc);
		m.set('messSubject',sub);
		m.set('messBody',body);
		m.set('messType',mt?mt:1);
		var x = RTX(m,'PMessage',PMessage);	
		Ext.Ajax.request({scope:this,url:SERVICE_URL+'?A=MESS_S&tempId='+tid+'&type=I&'+p,method:'POST',
			success: function(r){XMG.alert(SYS,M_MAIL_SEND_SUCCESS);w.close();},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
			xmlData:FOSX(x)
		});				  	
	}},this);
	w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);w.show();
};
var XRC=function(doc){
	var root = doc.documentElement || doc;	
	var q = Ext.DomQuery;	
	var c = q.selectValue('rowCount',root);	
	return parseInt(c);
};
var XTC=function(doc){
	var root = doc.documentElement || doc;	
	var q = Ext.DomQuery;	
	var c = q.selectValue('code',root);	
	return c;
};

var XTR = function(doc,r,rt){
	var fields = rt.prototype.fields;
	var root = doc.documentElement || doc;	
	var q = Ext.DomQuery;	
	var ns = q.select(r, root);
	if(ns.length>0)
	{
		var n=ns[0];
		var values = {};	
		for(var j = 0, jlen = fields.length; j < jlen; j++){
			var f = fields.items[j];
			var v = q.selectValue(f.name,n,f.defaultValue);
			v = f.convert(v, n);
			values[f.name] = v;
		}
		var record = new rt(values);
		record.node = n;	
		return record;
	}
};

var XTRA = function(doc,r,rt){
	var fields = rt.prototype.fields;
	var root = doc.documentElement || doc;	
	var q = Ext.DomQuery;	
	var ns = q.select(r, root);
	var records = [];
	for(var i = 0, len = ns.length; i < len; i++) {
		var n=ns[i];
		var values = {};	
		for(var j = 0, jlen = fields.length; j < jlen; j++){
			var f = fields.items[j];
			var v = q.selectValue(f.name,n,f.defaultValue);
			v = f.convert(v, n);
			values[f.name] = v;
		}
		var record = new rt(values);
		record.node = n;
		records[records.length] = record;
	}		
	return records;
};

var RTX4R=function(r,t,pid){
	var xml =''; 
	xml=xml+'<'+t+'>\n<'+pid+'>'+r.get(pid)+'</'+pid+'>\n';		             				
	xml += "<rowAction>R</rowAction>\n";
	xml =xml+'</'+t+'>\n';
	return xml;
};
var SMTX4R=function(sm,t,pid){
	var xml ='';                			
	sm.each(function(r){xml=xml+RTX4R(r,t,pid);});
	return xml;
};
var STX4R=function(store,t,pid){
	var xml ='';                			
	var a =store.getRange();
	if(a.length>0){
		for(var i=0;i<a.length;i++){
			if(a[i].get('rowAction')!='D' && a[i].get('rowAction')!='N') xml=xml+RTX4R(a[i],t,pid);
		}
	}
	return xml;
};
var RTX = function(r,t,rt){
	f=rt.prototype.fields;
	var x='<'+t+'>\n';
	if(r.get('rowAction') == ''||r.get('rowAction') == undefined) r.set('rowAction','M');
	for(var i=0;i<f.length;i++){
		var item = f.items[i];
		var n = item.name;
		var ty = item.type;
		if(n!=undefined && r.get(n)!=undefined && r.get(n)!==''){
			x+='<'+n+'>';
			if(ty=='date'){				
				x+=r.get(n)?r.get(n).format(item.dateFormat):'';
			}
			else if(ty=='boolean'){
				x+=r.get(n)?'1':'0';
			}
			else{
				x+=Ext.util.Format.htmlEncode(r.get(n));
			}
			x+='</'+n+'>\n';
		}
	}	
	return x+'</'+t+'>\n';
};

var ATX = function(a,t,rt){
	var x='';
	f=rt.prototype.fields;
	for(var j=0;j<a.length;j++)
	{
		var r=a[j];
		if(r.get('rowAction') == ''||r.get('rowAction') == undefined) r.set('rowAction','M');
		if(r.get('rowAction')!='D'){
			x=x+"<"+t+">\n";
			for(var i=0;i<f.length;i++){
				var item = f.items[i];
				var n = item.name;
				var ty = item.type;				
				if(n!=undefined && r.get(n)!=undefined && r.get(n)!==''){
					x+='<'+n+'>';
					if(ty=='date') 
						x+=r.get(n)?r.get(n).format(item.dateFormat):'';
					else if(ty=='boolean')
						x+=r.get(n)?'1':'0';
					else
						x+=Ext.util.Format.htmlEncode(r.get(n));						
					x+='</'+n+'>\n';
				}
			}
			x=x+"</"+t+">\n";
		}
	}
	return x;
};
var QTX=function(a){
	var x='';
	for(var i=0;i<a.length;i++)
	{
		x+='<fosQuery><key>'+a[i].get('key')+'</key>'+'<op>'+a[i].get('op')+'</op>'+'<value>'+a[i].get('value')+'</value></fosQuery>\n'
	}
	return x;
};
var QTJ=function(a){return {fosQuery:a};};
var JTR = function(json,rt){
	var fields = rt.prototype.fields;	
	var values = {};
	for(var j = 0, jlen = fields.length; j < jlen; j++){
		var f = fields.items[j];
		var fn=f.name;
		v = json[fn];
		values[fn] = v;
	}
	var record = new rt(values);
	return record;
};
var RTJ = function(r,rt){
	f=rt.prototype.fields;	
	if(r.get('rowAction') == ''||r.get('rowAction') == undefined) r.set('rowAction','M');
	v={};
	for(var i=0;i<f.length;i++){
		var item = f.items[i];
		var n = item.name;
		var ty = item.type;		
		if(n!=undefined && r.get(n)!=undefined && r.get(n)!==''){			
			if(ty=='date'){
				v[n]=r.get(n)?r.get(n).format('Y-m-d H:i:s'):'';
			}
			else if(ty=='boolean'){
				v[n]=r.get(n)?'1':'0';
			}
			else{
				v[n]=Ext.util.Format.htmlEncode(r.get(n));
			}
		}
	}
	return v;
};
var RJ= function(rj,t){var j={};j[t]=rj;return j;};
var ATJ = function(a,rt){
	f=rt.prototype.fields;
	var ra=[];
	for(var j=0;j<a.length;j++)
	{
		if(a[j].get('rowAction')!='D'){var rj=RTJ(a[j],rt);ra[ra.length]=rj;}
	}
	return ra;
};
var FOSX=function(x){return "<FosRequest>\n<data>\n"+x+"</data>\n</FosRequest>"};
var FOSJ=function(x){return {FosRequest:{data:x}}};
var FOSJA=function(o,t){if(o[t].length) return o; else{var d={};d[t]=[o[t]];return d;}};
var FOSU=function(store,a,rt){
	var fields = rt.prototype.fields;
	//var sa=store.getModifiedRecords();
	var sa=store.getRange();
	for(i=0;i<sa.length;i++){
		for(var j=0;j<a.length;j++){	
			if(sa[i].get('id')==a[j].get('id')){
				for(var k = 0;k < fields.length;k++){
					var f = fields.items[k];
					var fn=f.name;
					sa[i].set(fn,a[j].get(fn));
				}
				break;
			}
		}
	}
	store.suspendEvents();
	store.commitChanges();
	store.resumeEvents();
};

var FOSUJ=function(store,a,rt){
	var fields = rt.prototype.fields;
	var sa=store.getModifiedRecords();
	for(i=0;i<sa.length;i++){
		for(var j=0;j<a.length;j++){	
			if(sa[i].get('id')==a[j].id){
				for(var k = 0;k < fields.length;k++){
					var f = fields.items[k];
					var fn=f.name;
					sa[i].set(fn,a[j].fn);
				}
				break;
			}
		}
	}
	store.suspendEvents();
	store.commitChanges();
	store.resumeEvents();
};

var FOSFAILURE=function(r){
	XMG.alert(SYS,M_F+r.responseText);
};

var FOSAJAX=function(p,x,f,s){
	Ext.Ajax.request({scope:s,url:SERVICE_URL,method:'POST',params:p,
		success: function(r){f(r);},
		failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
		xmlData:FOSX(x)
		});
};
var O2S=function(s){return Ext.urlEncode(s.lastOptions);};
var FOS_POST_R = function(s,a,p,x,n){
	Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:a},
		success: function(res){if(!n) s.remove(p);s.loadData(res.responseXML,true);XMG.alert(SYS,M_S);},
		failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
		xmlData:FOSX(x)
	});
};
var FOS_POST = function(store,t,rt,action){
	var a =store.getModifiedRecords();
	if(a.length){
		var x = ATX(a,t,rt);
		if(x!='')
		{
			Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:action},
				success: function(r){
					var b = XTRA(r.responseXML,t,rt);FOSU(store,b,rt);
					XMG.alert(SYS,M_S);
				},
				failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
				xmlData:FOSX(x)
			});
		}
	}
	else XMG.alert(SYS,M_NC);
};

var FOS_REMOVE=function(sm,store){
	var r = sm.getSelections();
	if(r.length){for(var i=0;i<r.length;i++){r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');store.remove(r[i]);}}
	else XMG.alert(SYS,M_R_P);
};
var FOS_REMOVE_A=function(a,store){
	for(var i=0;i<a.length;i++){a[i].set('rowAction',a[i].get('rowAction')=='N'?'D':'R');store.remove(a[i]);}
};
var CREATE_E_MENU=function(t,fd,fe,ff,s){
	return {text:t,menu:{items:[{text:'Excel',scope:s,handler:fd},{text:C_EMAIL,scope:s,handler:fe},{text:'传真',scope:s,handler:ff}]}};
};

var CREATE_KM=function(id,s,g){
	new Ext.KeyMap(Ext.getDoc(), {
		key:'nrs',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent(id);
		 	if(tc){
			 	if(tc==T_MAIN.getActiveTab())
			 	{
			 		if(g) tb=s.grid.getTopToolbar();
			 		else tb=s.getTopToolbar();
			 		switch(k) {
			 		case Ext.EventObject.N:
			 			if(!tb.items.get('TB_N').disabled) s.add();break;
			 		case Ext.EventObject.R:
			 			if(!tb.items.get('TB_R').disabled) s.remove();break;
			 		case Ext.EventObject.S:
			 			if(!tb.items.get('TB_S').disabled) s.save();break;
					}
			 	}
		 	}
		},stopEvent:true,scope:s});
};
function getCSM(){return new Ext.grid.CheckboxSelectionModel({singleSelect:false});};
function PTB(s,ps){return new Ext.PagingToolbar({pageSize:ps,store:s,displayInfo:true,displayMsg:'{0} - {1} of {2}',emptyMsg:C_NR});};
function ACTIVE(){return new Ext.grid.CheckColumn({header:C_ACTIVE,dataIndex:'active',width:55});};
function CHKCLM(t,d,w){return new Ext.grid.CheckColumn({header:t,dataIndex:d,width:w?w:55});};

function CreateNode(t,c,m,f){
 	return new Ext.tree.TreeNode({text:t,id:'M_'+c,leaf:true,listeners:{
		click:function(n,e){if(NR(m)){XMG.alert(SYS,M_NR);return}
  		T_MAIN.setActiveTab(T_MAIN.getComponent('G_'+c)?T_MAIN.getComponent('G_'+c):T_MAIN.add(f()));}}})
};

function createSMTree(){
	var coau = CreateNode(C_CONS_AUDIT,'COAU',M1_S+S_COAU+F_V,function(){return new Fos.ConsignAuditGrid();});
	var billR = CreateNode(C_BILL_R,'BILL_R',M1_S+S_BILL_R+F_V,function(){return new Fos.BillGrid('R');});
	var billP = CreateNode(C_BILL_P,'BILL_P',M1_S+S_BILL_P+F_V,function(){return new Fos.BillGrid('P');});
	var invoR = CreateNode(C_INVO_R,'INVO_R',M1_S+S_INVO_R+F_V,function(){return new Fos.InvoiceGrid('R');});
	var invoP = CreateNode(C_INVO_P,'INVO_P',M1_S+S_INVO_P+F_V,function(){return new Fos.InvoiceGrid('P');});
	var prR = CreateNode(C_PR_R,'PR_R',M1_S+S_PR_R+F_V,function(){return new Fos.PrGrid('R');});
	var prP = CreateNode(C_PR_P,'PR_P',M1_S+S_PR_P+F_V,function(){return new Fos.PrGrid('P');});
	var voucR = CreateNode(C_WRITEOFF_R,'VOUC_R',M1_S+S_VOUC_R+F_V,function(){return new Fos.VoucherGrid('R');});
	var voucP = CreateNode(C_WRITEOFF_P,'VOUC_P',M1_S+S_VOUC_P+F_V,function(){return new Fos.VoucherGrid('P');});
	var inno = CreateNode(C_INNO_MGT,'INNO',M1_S+S_INNO+F_V,function(){return new Fos.InvoNoGrid();});
	var bala = CreateNode(C_CUST_BALANCE,'BALA',M1_S+S_INNO+F_V,function(){return new Fos.BalaGrid();});
	var exra = CreateNode(C_EX_RATE,'EXRA',M1_S+S_EXRA+F_V,function(){return new Fos.RateTab();});
	var inra = CreateNode(C_INTEREST_RATE,'INRA',M1_S+S_INRA+F_V,function(){return new Fos.InterestRateTab();});
	var arN = new Ext.tree.TreeNode({text:C_SETTLE_AR,leaf:false,expanded:true});
	arN.appendChild(billR);
	arN.appendChild(invoR);
	arN.appendChild(prR);
	arN.appendChild(voucR);
	var apN= new Ext.tree.TreeNode({text:C_SETTLE_AP,leaf:false,expanded:true});	
	apN.appendChild(billP);
	apN.appendChild(invoP);
	apN.appendChild(prP);
	apN.appendChild(voucP);	
	var root=new Ext.tree.TreeNode({text:C_SETTLE,leaf:false});
	root.appendChild(coau);
	root.appendChild(arN);
	root.appendChild(apN);
	root.appendChild(bala);
	root.appendChild(inno);
	root.appendChild(exra);
	root.appendChild(inra);
	var tree = new Ext.tree.TreePanel({disabled:NR(M1_S),title:C_SETTLE,rootVisible:false,
		animate:true,enableDD:false,autoScroll:true,containerScroll:true,root:root
	});
	return tree;
};

function createGMTree(){	
	var vess = CreateNode(C_VESS,'VESS',M1_J+G_VESS,showG_VESS);
	var port = CreateNode(C_PORT,'PORT',M1_J+G_PORT,function(){return showG_PORT('0');});
	var airp = CreateNode(C_AIRP,'AIRP',M1_J+G_AIRP,function(){return showG_PORT('1');});
	var plac = CreateNode(C_PLAC,'PLAC',M1_J+G_PLAC,showG_PLAC);
	var doty = CreateNode(C_DOTY,'DOTY',M1_J+G_DOTY,showG_DOTY);
	var shli = CreateNode(C_SHLI,'SHLI',M1_J+G_SHLI,showG_SHLI);	
	var unit = CreateNode(C_UNIT,'UNIT',M1_J+G_UNIT,showG_UNIT);
	var pack = CreateNode(C_PACK,'PACK',M1_J+G_PACK,showG_PACK);
	var cocl = CreateNode(C_COCL,'COCL',M1_J+G_COCL,showG_COCL);
	var coty = CreateNode(C_COTY,'COTY',M1_J+G_COTY,showG_COTY);	
	var cacl = CreateNode(C_CACL,'CACL',M1_J+G_CACL,showG_CACL);
	var caty = CreateNode(C_CATY,'CATY',M1_J+G_CATY,showG_CATY);
	var trte = CreateNode(C_TRTE,'TRTE',M1_J+G_TRTE,showG_TRTE);
	var tter = CreateNode(C_TTER,'TTER',M1_J+G_TTER,showG_TTER);
	var pate = CreateNode(C_PATE,'PATE',M1_J+G_PATE,showG_PATE);	
	var coun = CreateNode(C_COUN,'COUN',M1_J+G_COUN,showG_COUN);
	var vety = CreateNode(C_VEHT,'VEHT',M1_J+G_VEHT,showG_VEHT);
	var biz = new Ext.tree.TreeNode({text:C_BIZ_RELATED,leaf:false});
	biz.appendChild(vess);
	biz.appendChild(port);
	biz.appendChild(airp);
	biz.appendChild(plac);
	biz.appendChild(doty);
	biz.appendChild(shli);
	biz.appendChild(unit);
	biz.appendChild(pack);
	biz.appendChild(cocl);
	biz.appendChild(coty);
	biz.appendChild(cacl);
	biz.appendChild(caty);
	biz.appendChild(trte);
	biz.appendChild(tter);
	biz.appendChild(pate);
	biz.appendChild(coun);
	biz.appendChild(vety);
	
	var trty = CreateNode(C_TRTY,'TRTY',M1_J+G_TRTY,showG_TRTY);
	var usag = CreateNode(C_USAG,'USAG',M1_J+G_USAG,showG_USAG);
	var lety = CreateNode(C_LETY,'LETY',M1_J+G_LETY,showG_LETY);
	var exse = CreateNode(C_EXSE,'EXSE',M1_J+G_EXSE,showG_EXSE);
	var trat = CreateNode(C_TRAT,'TRAT',M1_J+G_TRAT,showG_TRAT);
	var isty = CreateNode(C_ISTY,'ISTY',M1_J+G_ISTY,showG_ISTY);
	var cus = new Ext.tree.TreeNode({text:C_CUDE_RELATED,leaf:false});
	cus.appendChild(trty);
	cus.appendChild(usag);
	cus.appendChild(lety);
	cus.appendChild(exse);
	cus.appendChild(trat);
	cus.appendChild(isty);
	
	var sewa = CreateNode(C_SEWA,'SEWA',M1_J+G_SEWA,showG_SEWA);
	var curr = CreateNode(C_CURR,'CURR',M1_J+G_CURR,showG_CURR);
	var chcl = CreateNode(C_CHCL,'CHCL',M1_J+G_CHCL,showG_CHCL);
	var char = CreateNode(C_CHAR,'CHAR',M1_J+G_CHAR,showG_CHAR);
	var coba = CreateNode(C_COBA,'COBA',M1_J+G_COBA,showG_COBA);
	
	var set = new Ext.tree.TreeNode({text:C_SETTLE_RELATED,leaf:false});
	set.appendChild(sewa);
	set.appendChild(curr);
	set.appendChild(chcl);
	set.appendChild(char);
	set.appendChild(coba);
		
	var root=new Ext.tree.TreeNode({text:C_MASTER_DATA,leaf:false});
	root.appendChild(biz);
	root.appendChild(cus);
	root.appendChild(set);
	
	var tree = new Ext.tree.TreePanel({disabled:NR(M1_S),title:C_MASTER_DATA,rootVisible:false,
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
	fp = {};
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

Ext.form.FileUploadField = Ext.extend(Ext.form.TextField,  {
	buttonText: 'Browse...',
	buttonOnly: false,
	buttonOffset: 3,
	readOnly: true,
	autoSize: Ext.emptyFn,
    initComponent: function(){
        Ext.form.FileUploadField.superclass.initComponent.call(this);        
        this.addEvents('fileselected');},    
    onRender : function(ct, position){
        Ext.form.FileUploadField.superclass.onRender.call(this, ct, position);        
        this.wrap = this.el.wrap({cls:'x-form-field-wrap x-form-file-wrap'});
        this.el.addClass('x-form-file-text');
        this.el.dom.removeAttribute('name');        
        this.fileInput = this.wrap.createChild({
            id: this.getFileInputId(),
            name: this.name||this.getId(),
            cls: 'x-form-file',
            tag: 'input', 
            type: 'file',
            size: 1
        });        
        var btnCfg = Ext.applyIf(this.buttonCfg || {}, {text: this.buttonText});
        this.button = new Ext.Button(Ext.apply(btnCfg, {
            renderTo: this.wrap,
            cls: 'x-form-file-btn' + (btnCfg.iconCls ? ' x-btn-icon' : '')}));        
        if(this.buttonOnly){
            this.el.hide();
            this.wrap.setWidth(this.button.getEl().getWidth());}        
        this.fileInput.on('change', function(){
            var v = this.fileInput.dom.value;
            this.setValue(v);
            this.fireEvent('fileselected', this, v);
        }, this);
    },
    getFileInputId: function(){return this.id+'-file';},
    onResize : function(w, h){
        Ext.form.FileUploadField.superclass.onResize.call(this, w, h);        
        this.wrap.setWidth(w);        
        if(!this.buttonOnly){
            var w = this.wrap.getWidth() - this.button.getEl().getWidth() - this.buttonOffset;
            this.el.setWidth(w);
        }
    },
    preFocus : Ext.emptyFn,
    getResizeEl : function(){return this.wrap;},
    getPositionEl : function(){return this.wrap;},
    alignErrorIcon : function(){this.errorIcon.alignTo(this.wrap, 'tl-tr', [2, 0]);}    
});
Ext.reg('fileuploadfield', Ext.form.FileUploadField);

function checkContainerNo(n){
	if(n.length!=11) return false;
	exp=/^[A-Za-z]...{4}d...{7}$/g;
	if (!exp.test(n)) return false;
	var a = new Array(11);
	var CONT_NO_MAP = {A:10,B:12,C:13,D:14,E:15,F:16,G:17,H:18,I:19,J:20,K:21,L:23,M:24,N:25,O:26,P:27,Q:28,R:29,S:30,T:31,U:32,V:34,W:35,X:36,Y:37,Z:38};
	a[0]=CONT_NO_MAP.get(n.substr(0,1));
    a[1]=CONT_NO_MAP.get(n.substr(1,1));
    a[2]=CONT_NO_MAP.get(n.substr(2,1));
    a[3]=CONT_NO_MAP.get(n.substr(3,1));
    a[4]=n.substr(4,1);
    a[5]=n.substr(5,1);
    a[6]=n.substr(6,1);
    a[7]=n.substr(7,1);
    a[8]=n.substr(8,1);
    a[9]=n.substr(9,1);
    a[10]=n.substr(10,1);
    s=a[0]+a[1]*2+a[2]*4+a[3]*8+a[4]*16+a[5]*32+a[6]*64+a[7]*128+a[8]*256+a[9]*512;
    r=s%11;
    if(r!=a[10]) return false;
    return true;};
function round2(v){return (Math.round(v*100)/100)};
function round4(v){return (Math.round(v*10000)/10000)};

function N2W(dValue,maxDec){
    dValue = dValue.toString().replace(/,/g, "");  
    dValue = dValue.replace(/^0+/, "");
    if (dValue == "") { return "零元整"; }
    else if (isNaN(dValue)) { return '';}   
    var minus = "";
    var CN_SYMBOL = "";
    if (dValue.length > 1){
        if (dValue.indexOf('-') == 0) { dValue = dValue.replace("-", ""); minus = "负"; }
        if (dValue.indexOf('+') == 0) { dValue = dValue.replace("+", ""); }
    }
    var vInt = ""; var vDec = "";
    var resAIW;
    var parts;
    var digits, radices, bigRadices, decimals;
    var zeroCount;
    var i, p, d;
    var quotient, modulus;
    var NoneDecLen = (typeof(maxDec) == "undefined" || maxDec == null || Number(maxDec) < 0 || Number(maxDec) > 5);
    parts = dValue.split('.');
    if (parts.length > 1)
    {
        vInt = parts[0]; vDec = parts[1];
        if(NoneDecLen) { maxDec = vDec.length > 5 ? 5 : vDec.length; }
        var rDec = Number("0." + vDec);    
        rDec *= Math.pow(10, maxDec); rDec = Math.round(Math.abs(rDec)); rDec /= Math.pow(10, maxDec);
        var aIntDec = rDec.toString().split('.');
        if(Number(aIntDec[0]) == 1) { vInt = (Number(vInt) + 1).toString(); }
        if(aIntDec.length > 1) { vDec = aIntDec[1]; } else { vDec = ""; }
    }
    else { vInt = dValue; vDec = ""; if(NoneDecLen) { maxDec = 0; } };
    if(vInt.length > 44) { return "ERROR"; };
    digits = new Array(ZERO,ONE,TWO,THREE,FOUR,FIVE,SIX,SEVEN,EIGHT,NINE);
    radices = new Array("",TEN,HUNDRED,THOUSAND);
    bigRadices = new Array("", "万", "亿", "兆", "京", "垓", "杼", "穰" ,"沟", "涧", "正");
    decimals = new Array("角", "分", "厘", "毫", "丝");
    resAIW = "";
    if (Number(vInt) > 0)
    {
        zeroCount = 0;
        for (i = 0; i < vInt.length; i++)
        {
            p = vInt.length - i - 1; d = vInt.substr(i, 1); quotient = p / 4; modulus = p % 4;
            if (d == "0") { zeroCount++; }
            else
            {
                if (zeroCount > 0) { resAIW += digits[0]; }
                zeroCount = 0; resAIW += digits[Number(d)] + radices[modulus];
            }
            if (modulus == 0 && zeroCount < 4) { resAIW += bigRadices[quotient]; }
        }
        resAIW += "元";
    }
    for (i = 0; i < vDec.length; i++) { d = vDec.substr(i, 1); if (d != "0") { resAIW += digits[Number(d)] + decimals[i]; } }
    if (resAIW == "") { resAIW = "零" + "元"; }
    if (vDec == "") { resAIW += "整"; }
    resAIW = CN_SYMBOL + minus + resAIW;
    return resAIW;
};

function N2D(input){
	input=parseFloat(input).toString();
	var a=input.split('.');
	var d=a[0];
	var c=a[1];
	var s='ZERO DOLLARS';
	if(d) s=N2EW(d)+' DOLLARS';
	if(c) s+=' '+N2EW(c)+' CENTS';
	return s;
};
function N2EW(input){
	if(!input) return '';
	input=parseInt(input).toString();
	var inputlength = input.length;	
	var d1=['','ONE ','TWO ','THREE ','FOUR ','FIVE ','SIX ','SEVEN ','EIGHT ','NINE '];
	var d2=['','','TWENTY ','THIRTY ','FORTY ','FIFTY ','SIXTY ','SEVENTY ','EIGHTY ','NINETY '];
	var d3=['TEN ','ELEVEN ','TWELVE ','THIRTEEN ','FOURTEEN ','FIFTEEN ','SIXTEEN','SEVENTEEN ','EIGHTEEN ','NINETEEN '];
	var x = 0;
	var teen1 = "";teen2 = "";teen3 = "";numName = "";invalidNum = "";
	var a1 = "";a2 = "";a3 = "";a4 = "";a5 = "";
	digit = new Array(inputlength);
	for (i = 0; i < inputlength; i++){digit[inputlength - i] = input.charAt(i)};
	store = new Array(9);
	for (i = 0; i < inputlength; i++) {
		x= inputlength - i;
		switch (x) {
			case x=9: store[x] = d1[digit[x]]; break;
			case x=8: if(digit[x] == "1"){teen3 = "yes"} else {teen3 = ""}; store[x]=d2[digit[x]]; break;
			case x=7: if (teen3 == "yes"){teen3 = "";store[x] = d3[digit[x]];} else {store[x] =d1[digit[x]]};break;
			case x=6: store[x] = d1[digit[x]]; break;
			case x=5: if (digit[x] == "1") {teen2 = "yes"} else {teen2 = ""}; store[x] = d2[digit[x]]; break;
			case x=4: if (teen2 == "yes") {teen2 = ""; store[x] =d3[digit[x]]}  else {store[x] =d1[digit[x]]}; break;
			case x=3: store[x] = d1[digit[x]]; break;
			case x=2: if (digit[x] == "1") {teen1 = "yes"} else {teen1 = ""};store[x] = d2[digit[x]]; break;
			case x=1: if (teen1 == "yes") {teen1 = "";store[x] =d3[digit[x]]} else {store[x] =d1[digit[x]]}; break;
		}
		switch (inputlength){
			case 1:   store[2] = ""; 
			case 2:   store[3] = ""; 
			case 3:   store[4] = ""; 
			case 4:   store[5] = "";
			case 5:   store[6] = "";
			case 6:   store[7] = "";
			case 7:   store[8] = "";
			case 8:   store[9] = "";
		}
		if (store[9] != "") { a1 ="HUNDRED "} else {a1 = ""};
		if ((store[9] != "")||(store[8] != "")||(store[7] != "")) { a2 ="MILLION "} else {a2 = ""};
		if (store[6] != "") { a3 ="HUNDRED "} else {a3 = ""};
		if ((store[6] != "")||(store[5] != "")||(store[4] != "")) { a4 ="THOUSAND "} else {a4 = ""};
		if (store[3] != ""){
			if(store[2] != "" || store[1] != "") a5 = "HUNDRED AND ";
			else a5 ="HUNDRED ";			
		} 
		else {a5 = ""};
	}	
	numName =  store[9] + a1 + store[8] + store[7] + a2 + store[6] + a3 + store[5] + store[4] + a4 + store[3] + a5 + store[2] + store[1];
	store[1] = ""; store[2] = ""; store[3] = ""; 
	store[4] = ""; store[5] = ""; store[6] = "";
	store[7] = ""; store[8] = ""; store[9] = "";
	return numName;
};

Ext.override(Ext.grid.RowSelectionModel, {  
	onEditorKey : function(field, e){
        var k = e.getKey(), 
            newCell, 
            g = this.grid, 
            last = g.lastEdit,
            ed = g.activeEditor,
            ae, last, r, c;
        var shift = e.shiftKey;
        if(k == e.LEFT){
			e.stopEvent(); ed.completeEdit();
			newCell = g.walkCells(ed.row, ed.col - 1, -1,this.acceptsNav, this);
		}
		if(k == e.RIGHT){
			e.stopEvent(); ed.completeEdit();
			newCell = g.walkCells(ed.row, ed.col+ 1, 1,this.acceptsNav, this);
		}		
        else if(k == e.TAB){
            e.stopEvent();
            ed.completeEdit();
            if(shift){
                newCell = g.walkCells(ed.row, ed.col-1, -1, this.acceptsNav, this);
            }else{
                newCell = g.walkCells(ed.row, ed.col+1, 1, this.acceptsNav, this);
            }
        }else if(k == e.ENTER){
            //if(this.moveEditorOnEnter !== false){
                if(shift){
                    newCell = g.walkCells(last.row - 1, last.col, -1, this.acceptsNav, this);
                }else{
                    newCell = g.walkCells(last.row , last.col+1, 1, this.acceptsNav, this);
                }
           // }
        }
        if(newCell){
            r = newCell[0];
            c = newCell[1];
            if(last.row != r){                
                this.selectRow(r);
            }
            if(g.isEditor && g.editing){
                ae = g.activeEditor;
                if(ae && ae.field.triggerBlur){
                    ae.field.triggerBlur();
                }
            }
            g.startEditing(r, c);
        }
    }    
	});
	
Ext.grid.GroupSummary = function(config){Ext.apply(this, config);};

Ext.extend(Ext.grid.GroupSummary, Ext.util.Observable, {
    init : function(grid){
        this.grid = grid;
        this.cm = grid.getColumnModel();
        this.view = grid.getView();
        var v = this.view;
        v.doGroupEnd = this.doGroupEnd.createDelegate(this);
        v.afterMethod('onColumnWidthUpdated', this.doWidth, this);
        v.afterMethod('onAllColumnWidthsUpdated', this.doAllWidths, this);
        v.afterMethod('onColumnHiddenUpdated', this.doHidden, this);
        v.afterMethod('onUpdate', this.doUpdate, this);
        v.afterMethod('onRemove', this.doRemove, this);
        if(!this.rowTpl){
            this.rowTpl = new Ext.Template(
                '<div class="x-grid3-summary-row" style="{tstyle}">',
                '<table class="x-grid3-summary-table" border="0" cellspacing="0" cellpadding="0" style="{tstyle}">',
                    '<tbody><tr>{cells}</tr></tbody>',
                '</table></div>'
            );
            this.rowTpl.disableFormats = true;
        }
        this.rowTpl.compile();
        if(!this.cellTpl){
            this.cellTpl = new Ext.Template(
                '<td class="x-grid3-col x-grid3-cell x-grid3-td-{id} {css}" style="{style}">',
                '<div class="x-grid3-cell-inner x-grid3-col-{id}" unselectable="on">{value}</div>',
                "</td>"
            );
            this.cellTpl.disableFormats = true;
        }
        this.cellTpl.compile();
    },
    toggleSummaries : function(visible){
        var el = this.grid.getGridEl();
        if(el){
            if(visible === undefined){
                visible = el.hasClass('x-grid-hide-summary');
            }
            el[visible ? 'removeClass' : 'addClass']('x-grid-hide-summary');
        }
    },
    renderSummary : function(o, cs){
        cs = cs || this.view.getColumnData();
        var cfg = this.cm.config;
        var buf = [], c, p = {}, cf, last = cs.length-1;
        for(var i = 0, len = cs.length; i < len; i++){
            c = cs[i];
            cf = cfg[i];
            p.id = c.id;
            p.style = c.style;
            p.css = i == 0 ? 'x-grid3-cell-first ' : (i == last ? 'x-grid3-cell-last ' : '');
            if(cf.summaryType || cf.summaryRenderer){
                p.value = (cf.summaryRenderer || c.renderer)(o.data[c.name], p, o);
            }else{
                p.value = '';
            }
            if(p.value == undefined || p.value === "") p.value = "&#160;";
            buf[buf.length] = this.cellTpl.apply(p);
        }

        return this.rowTpl.apply({
            tstyle: 'width:'+this.view.getTotalWidth()+';',
            cells: buf.join('')
        });
    },
    calculate : function(rs, cs){
        var data = {}, r, c, cfg = this.cm.config, cf;
        for(var j = 0, jlen = rs.length; j < jlen; j++){
            r = rs[j];
            for(var i = 0, len = cs.length; i < len; i++){
                c = cs[i];
                cf = cfg[i];
                if(cf.summaryType){
                    data[c.name] = Ext.grid.GroupSummary.Calculations[cf.summaryType](data[c.name] || 0, r, c.name, data);
                }
            }
        }
        return data;
    },
    doGroupEnd : function(buf, g, cs, ds, colCount){
        var data = this.calculate(g.rs, cs);
        buf.push('</div>', this.renderSummary({data: data}, cs), '</div>');
    },
    doWidth : function(col, w, tw){
        var gs = this.view.getGroups(), s;
        for(var i = 0, len = gs.length; i < len; i++){
            s = gs[i].childNodes[2];
            s.style.width = tw;
            s.firstChild.style.width = tw;
            s.firstChild.rows[0].childNodes[col].style.width = w;
        }
    },
    doAllWidths : function(ws, tw){
        var gs = this.view.getGroups(), s, cells, wlen = ws.length;
        for(var i = 0, len = gs.length; i < len; i++){
            s = gs[i].childNodes[2];
            s.style.width = tw;
            s.firstChild.style.width = tw;
            cells = s.firstChild.rows[0].childNodes;
            for(var j = 0; j < wlen; j++){
                cells[j].style.width = ws[j];
            }
        }
    },
    doHidden : function(col, hidden, tw){
        var gs = this.view.getGroups(), s, display = hidden ? 'none' : '';
        for(var i = 0, len = gs.length; i < len; i++){
            s = gs[i].childNodes[2];
            s.style.width = tw;
            s.firstChild.style.width = tw;
            s.firstChild.rows[0].childNodes[col].style.display = display;
        }
    },
    refreshSummary : function(groupValue){
        return this.refreshSummaryById(this.view.getGroupId(groupValue));
    },
    getSummaryNode : function(gid){
        var g = Ext.fly(gid, '_gsummary');
        if(g){
            return g.down('.x-grid3-summary-row', true);
        }
        return null;
    },
    refreshSummaryById : function(gid){
        var g = document.getElementById(gid);
        if(!g){
            return false;
        }
        var rs = [];
        this.grid.store.each(function(r){
            if(r._groupId == gid){
                rs[rs.length] = r;
            }
        });
        var cs = this.view.getColumnData();
        var data = this.calculate(rs, cs);
        var markup = this.renderSummary({data: data}, cs);

        var existing = this.getSummaryNode(gid);
        if(existing){
            g.removeChild(existing);
        }
        Ext.DomHelper.append(g, markup);
        return true;
    },
    doUpdate : function(ds, record){
        this.refreshSummaryById(record._groupId);
    },
    doRemove : function(ds, record, index, isUpdate){
        if(!isUpdate){
            this.refreshSummaryById(record._groupId);
        }
    },
    showSummaryMsg : function(groupValue, msg){
        var gid = this.view.getGroupId(groupValue);
        var node = this.getSummaryNode(gid);
        if(node){
            node.innerHTML = '<div class="x-grid3-summary-msg">' + msg + '</div>';
        }
    }
});

Ext.grid.GroupSummary.Calculations = {
    'sum' : function(v, record, field){
        return v + (record.data[field]||0);
    },
    'count' : function(v, record, field, data){
        return data[field+'count'] ? ++data[field+'count'] : (data[field+'count'] = 1);
    },
    'max' : function(v, record, field, data){
        var v = record.data[field];
        var max = data[field+'max'] === undefined ? (data[field+'max'] = v) : data[field+'max'];
        return v > max ? (data[field+'max'] = v) : max;
    },
    'min' : function(v, record, field, data){
        var v = record.data[field];
        var min = data[field+'min'] === undefined ? (data[field+'min'] = v) : data[field+'min'];
        return v < min ? (data[field+'min'] = v) : min;
    },
    'average' : function(v, record, field, data){
        var c = data[field+'count'] ? ++data[field+'count'] : (data[field+'count'] = 1);
        var t = (data[field+'total'] = ((data[field+'total']||0) + (record.data[field]||0)));
        return t === 0 ? 0 : t / c;
    }
};

Ext.grid.HybridSummary = Ext.extend(Ext.grid.GroupSummary, {
    calculate : function(rs, cs){
        var gcol = this.view.getGroupField();
        var gvalue = rs[0].data[gcol];
        var gdata = this.getSummaryData(gvalue);
        return gdata || Ext.grid.HybridSummary.superclass.calculate.call(this, rs, cs);
    },
    updateSummaryData : function(groupValue, data, skipRefresh){
        var json = this.grid.store.reader.jsonData;
        if(!json.summaryData){
            json.summaryData = {};
        }
        json.summaryData[groupValue] = data;
        if(!skipRefresh){
            this.refreshSummary(groupValue);
        }
    },
    getSummaryData : function(groupValue){
        var json = this.grid.store.reader.jsonData;
        if(json && json.summaryData){
            return json.summaryData[groupValue];
        }
        return null;
    }
});

Ext.grid.RowExpander = function(config){
    Ext.apply(this, config);
    this.addEvents({beforeexpand:true,expand:true,beforecollapse:true,collapse:true});
    Ext.grid.RowExpander.superclass.constructor.call(this);
    if(this.tpl){if(typeof this.tpl == 'string'){this.tpl = new Ext.Template(this.tpl);}this.tpl.compile();}
    this.state = {};
    this.bodyContent = {};
};
Ext.extend(Ext.grid.RowExpander,Ext.util.Observable,{
    header:"",width:20,sortable: false,fixed:true,menuDisabled:true,dataIndex:'',id:'expander',lazyRender:true,
    enableCaching:true,
    getRowClass : function(record, rowIndex, p, ds){
        p.cols = p.cols-1;
        var content = this.bodyContent[record.id];
        if(!content && !this.lazyRender){content = this.getBodyContent(record, rowIndex);}
        if(content){p.body = content;}
        return this.state[record.id] ? 'x-grid3-row-expanded' : 'x-grid3-row-collapsed';
    },
    init : function(grid){
        this.grid = grid;
        var view = grid.getView();
        view.getRowClass = this.getRowClass.createDelegate(this);
        view.enableRowBody = true;
        grid.on('render', function(){view.mainBody.on('mousedown', this.onMouseDown, this);}, this);
    },
    getBodyContent : function(record, index){
        if(!this.enableCaching){return this.tpl.apply(record.data);}
        var content = this.bodyContent[record.id];
        if(!content){content = this.tpl.apply(record.data);this.bodyContent[record.id] = content;}
        return content;
    },
    onMouseDown : function(e, t){
        if(t.className=='x-grid3-row-expander'){e.stopEvent();var row=e.getTarget('.x-grid3-row');this.toggleRow(row);}
    },
    renderer : function(v, p, record){
        p.cellAttr = 'rowspan="2"';return '<div class="x-grid3-row-expander">&#160;</div>';
    },
    beforeExpand : function(record, body, rowIndex){
        if(this.fireEvent('beforeexpand', this, record, body, rowIndex) !== false){
            if(this.tpl && this.lazyRender){body.innerHTML = this.getBodyContent(record, rowIndex);}
            return true;
        }
        else{return false;}
    },
    toggleRow : function(row){
        if(typeof row == 'number'){row = this.grid.view.getRow(row);}
        this[Ext.fly(row).hasClass('x-grid3-row-collapsed') ? 'expandRow' : 'collapseRow'](row);
    },
    expandRow : function(row){
        if(typeof row == 'number'){row = this.grid.view.getRow(row);}
        var record = this.grid.store.getAt(row.rowIndex);
        var body = Ext.DomQuery.selectNode('tr:nth(2) div.x-grid3-row-body', row);
        if(this.beforeExpand(record, body, row.rowIndex)){
            this.state[record.id] = true;
            Ext.fly(row).replaceClass('x-grid3-row-collapsed', 'x-grid3-row-expanded');
            this.fireEvent('expand', this, record, body, row.rowIndex);
        }
    },
    collapseRow : function(row){
        if(typeof row == 'number'){row = this.grid.view.getRow(row);}
        var record = this.grid.store.getAt(row.rowIndex);
        var body = Ext.fly(row).child('tr:nth(1) div.x-grid3-row-body', true);
        if(this.fireEvent('beforecollapse', this, record, body, row.rowIndex) !== false){
            this.state[record.id] = false;
            Ext.fly(row).replaceClass('x-grid3-row-expanded', 'x-grid3-row-collapsed');
            this.fireEvent('collapse', this, record, body, row.rowIndex);
        }
    }
});

Ext.override(Ext.form.Checkbox, {
	getValue : function(){
		if(this.rendered){return this.el.dom.checked;}
		return this.checked;
	},
	setValue : function(v) {
		var checked = this.checked;
		this.checked = (v === true || v === 'true' || v == '1' || String(v).toLowerCase() == 'on');
		if(this.rendered){
			this.el.dom.checked = this.checked;
			this.el.dom.defaultChecked = this.checked;
			this.wrap[this.checked? 'addClass' : 'removeClass'](this.checkedCls);
		}
		if(checked != this.checked){
			this.fireEvent("check", this, this.checked);
			if(this.handler){this.handler.call(this.scope || this, this, this.checked);}
		}
	}
});

Ext.grid.CheckboxSelectionModel.override({
	handleMouseDown : function(g, rowIndex, e){
		if(e.button !== 0 || this.isLocked()){return;};
		var view = this.grid.getView();
		if(e.shiftKey && this.last !== false){
			var last = this.last;
			this.selectRange(last, rowIndex, e.ctrlKey);
			this.last = last;
			view.focusRow(rowIndex);
		}
		else{
			var isSelected = this.isSelected(rowIndex);
			if(e.ctrlKey && isSelected){
				this.deselectRow(rowIndex);
			}
			else if(!isSelected || this.getCount() > 1){
				this.selectRow(rowIndex, false);
				view.focusRow(rowIndex);
			}
		}
	}
});

Ext.menu.EditableItem = Ext.extend(Ext.menu.BaseItem, {
    itemCls : "x-menu-item",
    hideOnClick: false,    
    initComponent: function(){
		Ext.menu.EditableItem.superclass.initComponent.call(this);
    	this.addEvents('keyup');    	
		this.editor = this.editor || new Ext.form.TextField();
		if(this.text) this.editor.setValue(this.text);
    },    
    onRender: function(container){
        var s = container.createChild({
        	cls: this.itemCls,
        	html:'<img src="' + this.icon + '" class="x-menu-item-icon" style="position: static; margin: 3px 3px 2px 2px;" />'
        });        
        Ext.apply(this.config, {width: 125});
        this.editor.render(s);
        this.el = s;
        this.relayEvents(this.editor.el, ["keyup"]);        
        if(Ext.isGecko) s.setStyle('overflow', 'auto');			
        Ext.menu.EditableItem.superclass.onRender.call(this, container);
    },    
    getValue: function(){return this.editor.getValue();},    
    setValue: function(value){this.editor.setValue(value);},    
    isValid: function(preventMark){return this.editor.isValid(preventMark);}
});
Ext.menu.RangeMenu = function(config){
	Ext.menu.RangeMenu.superclass.constructor.call(this, config);  
	this.updateTask = new Ext.util.DelayedTask(this.fireUpdate, this);
	var cfg = this.fieldCfg;
	var cls = this.fieldCls;
	var fields = this.fields = Ext.applyIf(this.fields || {}, {
		'gt': new Ext.menu.EditableItem({
			icon: this.icons.gt,
			editor: new cls(typeof cfg == "object" ? cfg.gt || '' : cfg)
    }),
		'lt': new Ext.menu.EditableItem({
			icon: this.icons.lt,
			editor: new cls(typeof cfg == "object" ? cfg.lt || '' : cfg)
    }),
		'eq': new Ext.menu.EditableItem({
			icon:this.icons.eq, 
			editor: new cls(typeof cfg == "object" ? cfg.gt || '' : cfg)
    })
	});
	this.add(fields.gt, fields.lt, '-', fields.eq);	
	for(var key in fields) {
		fields[key].on('keyup', this.onKeyUp.createDelegate(this, [fields[key]], true), this);
	}  
	this.addEvents('update');
};
Ext.extend(Ext.menu.RangeMenu, Ext.menu.Menu, {
	fieldCls:     Ext.form.NumberField,
	fieldCfg:     '',
	updateBuffer: 500,
	icons: {
		gt: './images/greater_then.png', 
		lt: './images/less_then.png',
		eq: './images/equals.png'
	},		
	fireUpdate: function() {
		this.fireEvent("update", this);
	},	
	setValue: function(data) {
		for(var key in this.fields) {
			this.fields[key].setValue(data[key] !== undefined ? data[key] : '');
    	}
		this.fireEvent("update", this);
	},	
	getValue: function() {
		var result = {};
		for(var key in this.fields) {
			var field = this.fields[key];
			if(field.isValid() && String(field.getValue()).length > 0)
				result[key] = field.getValue();
		}		
		return result;
	},  
	onKeyUp: function(event, input, notSure, field) {
    	if(event.getKey() == event.ENTER && field.isValid()) {
	    	this.hide(true);
	    	return;
	  	}	
		if(field == this.fields.eq) {
	    	this.fields.gt.setValue(null);
	    	this.fields.lt.setValue(null);
	  	}
		else this.fields.eq.setValue(null);
	  	this.updateTask.delay(this.updateBuffer);
	}
});

Ext.grid.GridFilters = function(config){		
	this.filters = new Ext.util.MixedCollection();
	this.filters.getKey = function(o) {return o ? o.dataIndex : null};	
	for(var i=0, len=config.filters.length; i<len; i++) {
		this.addFilter(config.filters[i]);
	}  
	this.deferredUpdate = new Ext.util.DelayedTask(this.reload, this);	
	delete config.filters;
	Ext.apply(this, config);
};
Ext.extend(Ext.grid.GridFilters, Ext.util.Observable, {
	updateBuffer: 500,
	paramPrefix: 'filter',
	filterCls: 'ux-filtered-column',
	local: true,
	autoReload: true,
	stateId: undefined,
	showMenu: true,
	filtersText: 'Filters',
	init: function(grid){
		if(grid instanceof Ext.grid.GridPanel){
      		this.grid  = grid;      
			this.store = this.grid.getStore();
			if(this.local) this.store.on('load', function(store){store.filterBy(this.getRecordFilter());},this);
			else this.store.on('beforeload', this.onBeforeLoad, this);      
      		this.grid.filters = this;      
      		this.grid.addEvents('filterupdate');      
      		grid.on("render", this.onRender, this);
			grid.on("beforestaterestore", this.applyState, this);
      		grid.on("beforestatesave", this.saveState, this);      
		}
		else if(grid instanceof Ext.PagingToolbar) this.toolbar = grid;
	},
	applyState: function(grid, state) {
		this.suspendStateStore = true;
		this.clearFilters();
		if(state.filters) {
			for(var key in state.filters) {
				var filter = this.filters.get(key);
				if(filter) {
					filter.setValue(state.filters[key]);
					filter.setActive(true);
				}
			}
    	}    
		this.deferredUpdate.cancel();
		if(this.local) this.reload();
		this.suspendStateStore = false;
	},
	saveState: function(grid, state){
		var filters = {};
		this.filters.each(function(filter){if(filter.active) filters[filter.dataIndex] = filter.getValue();});
		return state.filters = filters;
	},	
	onRender: function(){
		var hmenu;		
		if(this.showMenu) {
			hmenu = this.grid.getView().hmenu;			
			this.sep=hmenu.addSeparator();
			this.menu=hmenu.add(new Ext.menu.CheckItem({text:this.filtersText,menu:new Ext.menu.Menu()}));
			this.menu.on('checkchange', this.onCheckChange, this);
			this.menu.on('beforecheckchange', this.onBeforeCheck, this);				
			hmenu.on('beforeshow', this.onMenu, this);
		}		
		this.grid.getView().on("refresh", this.onRefresh, this);
		this.updateColumnHeadings(this.grid.getView());
	},
	onMenu: function(filterMenu) {
		var filter = this.getMenuFilter();
		if(filter) {
			this.menu.menu = filter.menu;
			this.menu.setChecked(filter.active, false);
		}		
		this.menu.setVisible(filter !== undefined);
		this.sep.setVisible(filter !== undefined);
	},	
	onCheckChange: function(item, value) {this.getMenuFilter().setActive(value);},	
	onBeforeCheck: function(check, value) {return !value || this.getMenuFilter().isActivatable();},	
	onStateChange: function(event, filter) {
    	if(event == "serialize") return;
		if(filter == this.getMenuFilter()) this.menu.setChecked(filter.active, false);
		if(this.autoReload || this.local) this.deferredUpdate.delay(this.updateBuffer);
		var view = this.grid.getView();
		this.updateColumnHeadings(view);			
		this.grid.saveState();			
		this.grid.fireEvent('filterupdate', this, filter);
	},	
	onBeforeLoad: function(store, options) {
    	options.params = options.params || {};
		this.cleanParams(options.params);		
		var params = this.buildQuery(this.getFilterData());
		Ext.apply(options.params, params);
	},
	onRefresh: function(view) {this.updateColumnHeadings(view);},
	getMenuFilter: function() {
		var view = this.grid.getView();
		if(!view || view.hdCtxIndex === undefined) return null;
		return this.filters.get(view.cm.config[view.hdCtxIndex].dataIndex);
	},
	updateColumnHeadings: function(view) {
		if(!view || !view.mainHd) return;
		var hds = view.mainHd.select('td').removeClass(this.filterCls);
		for(var i=0, len=view.cm.config.length; i<len; i++) {
			var filter = this.getFilter(view.cm.config[i].dataIndex);
			if(filter && filter.active) hds.item(i).addClass(this.filterCls); 
		}
	}, 
	reload: function() {
		if(this.local){
			this.grid.store.clearFilter(true);
			this.grid.store.filterBy(this.getRecordFilter());
		} 
		else {
			this.deferredUpdate.cancel();
			var store = this.grid.store;
			if(this.toolbar) {
				var start = this.toolbar.paramNames.start;
				if(store.lastOptions && store.lastOptions.params && store.lastOptions.params[start]) store.lastOptions.params[start] = 0;
			}
			store.reload();
		}
	},
	getRecordFilter: function() {
		var f = [];
		this.filters.each(function(filter) {if(filter.active) f.push(filter);});		
		var len = f.length;
		return function(record) {
			for(var i=0; i<len; i++) {
				if(!f[i].validateRecord(record)) return false;
      		}
			return true;
		};
	},
	addFilter: function(config) {
		var filter = config.menu ? config : new (this.getFilterClass(config.type))(config);
		this.filters.add(filter);		
		Ext.util.Observable.capture(filter, this.onStateChange, this);
		return filter;
	},
	getFilter: function(dataIndex){return this.filters.get(dataIndex);},
	clearFilters: function() {this.filters.each(function(filter) {filter.setActive(false);});},
	getFilterData: function() {
		var filters = [];		
		this.filters.each(function(f) {
			if(f.active) {
				var d = [].concat(f.serialize());
				for(var i=0, len=d.length; i<len; i++) {
					filters.push({field: f.dataIndex, data: d[i]});
        		}
			}
		});		
		return filters;
	},
	buildQuery: function(filters) {
		var a=[];var op=EQ;		
		for(var i=0, len=filters.length; i<len; i++) {
			var f = filters[i];
			var d=f.data;
			if(d['type']=='date'){
				if(d['comparison']=='lt') op=LE;
				else if(d['comparison']=='gt') op=GE;
				else op=EQ;
			}
			else if(d['type']=='numeric'){
				if(d['comparison']=='lt') op=LE;
				else if(d['comparison']=='gt') op=GE;
				else op=EQ;
			}
			else op=EQ;
			a[a.length]={key:f.field,value:f.data['value'],op:op};
		}
		var p = {xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
		return p;
	},
	cleanParams: function(p) {
		var regex = new RegExp("^" + this.paramPrefix + "\[[0-9]+\]");
		for(var key in p) {
			if(regex.test(key)) delete p[key];
    	}
	},
	getFilterClass: function(type){
		return Ext.grid.filter[type.substr(0, 1).toUpperCase() + type.substr(1) + 'Filter'];
	}
});

Ext.ns("Ext.grid.filter");
Ext.grid.filter.Filter = function(config){
	Ext.apply(this, config);		
	this.events = {
		'activate': true,
		'deactivate': true,
		'update': true,
		'serialize': true
	};
	Ext.grid.filter.Filter.superclass.constructor.call(this);	
	this.menu = new Ext.menu.Menu();
	this.init();	
	if(config && config.value) {
		this.setValue(config.value);
		this.setActive(config.active !== false, true);
		delete config.value;
	}
};
Ext.extend(Ext.grid.filter.Filter, Ext.util.Observable, {
	active: false,
	dataIndex: null,
	menu: null,
	init: Ext.emptyFn,
	fireUpdate: function() {
		this.value = this.item.getValue();		
		if(this.active) this.fireEvent("update", this);
		this.setActive(this.value.length > 0);
	},
	isActivatable: function() {return true;},
	setActive: function(active, suppressEvent) {
		if(this.active != active) {
			this.active = active;
			if(suppressEvent !== true) this.fireEvent(active ? 'activate' : 'deactivate', this);
		}
	},
	getValue: Ext.emptyFn,
	setValue: Ext.emptyFn,
	serialize: Ext.emptyFn,
	validateRecord: function(){return true;}
});

Ext.grid.filter.BooleanFilter = Ext.extend(Ext.grid.filter.Filter, {
    defaultValue: false,
    yesText: 'Yes',
    noText: 'No',
	init: function(){
	    var gId = Ext.id();
			this.options = [
				new Ext.menu.CheckItem({text: this.yesText, group: gId, checked: this.defaultValue === true}),
				new Ext.menu.CheckItem({text: this.noText, group: gId, checked: this.defaultValue === false})
	    ];		
		this.menu.add(this.options[0], this.options[1]);		
		for(var i=0; i<this.options.length; i++) {
			this.options[i].on('click', this.fireUpdate, this);
			this.options[i].on('checkchange', this.fireUpdate, this);
		}
	},	
	isActivatable: function() {return true;},	
	fireUpdate: function() {
		this.fireEvent("update", this);			
		this.setActive(true);
	},	
	setValue: function(value) {this.options[value ? 0 : 1].setChecked(true);},	
	getValue: function() {return this.options[0].checked;},	
	serialize: function() {
		var args = {type: 'boolean', value: this.getValue()};
		this.fireEvent('serialize', args, this);
		return args;
	},	
	validateRecord: function(record) {return record.get(this.dataIndex) == this.getValue();}
});
Ext.grid.filter.DateFilter = Ext.extend(Ext.grid.filter.Filter, {
	dateFormat: 'm/d/Y',
	pickerOpts: {},
    beforeText: 'Before',
    afterText: 'After',
    onText: 'On',
	init: function() {
		var opts = Ext.apply(this.pickerOpts, {
			minDate: this.minDate, 
			maxDate: this.maxDate, 
			format:  this.dateFormat
		});
		var dates = this.dates = {
			'before': new Ext.menu.CheckItem({text: this.beforeText, menu: new Ext.menu.DateMenu(opts)}),
			'after':  new Ext.menu.CheckItem({text: this.afterText, menu: new Ext.menu.DateMenu(opts)}),
			'on':     new Ext.menu.CheckItem({text: this.onText, menu: new Ext.menu.DateMenu(opts)})
    	};				
		this.menu.add(dates.before, dates.after, "-", dates.on);		
		for(var key in dates) {
			var date = dates[key];
			date.menu.on('select', this.onSelect.createDelegate(this, [date]), this);  
      		date.on('checkchange', function(){this.setActive(this.isActivatable());}, this);
		};
	},  
	onSelect: function(date, menuItem, value, picker) {
    	date.setChecked(true);
    	var dates = this.dates;    
    	if(date == dates.on) {
			dates.before.setChecked(false, true);
			dates.after.setChecked(false, true);
    	} 
    	else {
      	dates.on.setChecked(false, true);      
		if(date == dates.after && dates.before.menu.picker.value < value)
        	dates.before.setChecked(false, true);
		else if (date == dates.before && dates.after.menu.picker.value > value)
        	dates.after.setChecked(false, true);
		}    
    	this.fireEvent("update", this);
  	},  
	getFieldValue: function(field) {return this.dates[field].menu.picker.getValue();},	
	getPicker: function(field) {return this.dates[field].menu.picker;},	
	isActivatable: function() {return this.dates.on.checked || this.dates.after.checked || this.dates.before.checked;},
	setValue: function(value) {
		for(var key in this.dates) {
			if(value[key]) {
				this.dates[key].menu.picker.setValue(value[key]);
				this.dates[key].setChecked(true);
			} 
			else this.dates[key].setChecked(false);
    	}
	},	
	getValue: function() {
		var result = {};
		for(var key in this.dates) {
			if(this.dates[key].checked) result[key] = this.dates[key].menu.picker.getValue();
    	}	
		return result;
	},	
	serialize: function() {
		var args = [];
		if(this.dates.before.checked)
			args = [{type: 'date', comparison: 'lt', value: this.getFieldValue('before').format(this.dateFormat)}];
		if(this.dates.after.checked)
			args.push({type: 'date', comparison: 'gt', value: this.getFieldValue('after').format(this.dateFormat)});
		if(this.dates.on.checked)
			args = {type: 'date', comparison: 'eq', value: this.getFieldValue('on').format(this.dateFormat)};
    	this.fireEvent('serialize', args, this);
		return args;
	},	
	validateRecord: function(record) {
		var val = record.get(this.dataIndex).clearTime(true).getTime();		
		if(this.dates.on.checked && val != this.getFieldValue('on').clearTime(true).getTime()) {
			return false;
    	}
		if(this.dates.before.checked && val >= this.getFieldValue('before').clearTime(true).getTime()) {
			return false;
    	}
		if(this.dates.after.checked && val <= this.getFieldValue('after').clearTime(true).getTime()) {
			return false;
    	}
		return true;
	}
});

Ext.grid.filter.ListFilter = Ext.extend(Ext.grid.filter.Filter, {
	labelField:  'text',
	loadingText: 'Loading...',
	loadOnShow:  true,
	value:       [],
	loaded:      false,
	phpMode:     false,	
	init: function(){
		this.menu.add('<span class="loading-indicator">' + this.loadingText + '</span>');		
		if(this.store && this.loadOnShow) this.menu.on('show', this.onMenuLoad, this);
		else if(this.options){
			var options = [];
			for(var i=0, len=this.options.length; i<len; i++) {
				var value = this.options[i];
				switch(Ext.type(value)) {
					case 'array': options.push(value);break;
					case 'object':options.push([value.id, value[this.labelField]]);break;
					case 'string':options.push([value, value]);break;
				}
			}			
			this.store = new Ext.data.Store({
				reader: new Ext.data.ArrayReader({id: 0}, ['id', this.labelField])
			});
			this.options = options;
			this.menu.on('show', this.onMenuLoad, this);
		}    
		this.store.on('load', this.onLoad, this);
		this.bindShowAdapter();
	},
	bindShowAdapter: function() {
		var oShow = this.menu.show;
		var lastArgs = null;
		this.menu.show = function() {
			if(arguments.length == 0) {
				oShow.apply(this, lastArgs);
			} else {
				lastArgs = arguments;
				oShow.apply(this, arguments);
			}
		};
	},	
	onMenuLoad: function() {
		if(!this.loaded) {
			if(this.options) this.store.loadData(this.options);
      		else  this.store.load();
		}
	},	
	onLoad: function(store, records) {
		var visible = this.menu.isVisible();
		this.menu.hide(false);		
		this.menu.removeAll();		
		var gid = this.single ? Ext.id() : null;
		for(var i=0, len=records.length; i<len; i++) {
			var item = new Ext.menu.CheckItem({
				text: records[i].get(this.labelField), 
				group: gid, 
				checked: this.value.indexOf(records[i].id) > -1,
				hideOnClick: false
      		});			
			item.itemId = records[i].id;
			item.on('checkchange', this.checkChange, this);						
			this.menu.add(item);
		}		
		this.setActive(this.isActivatable());
		this.loaded = true;		
		if(visible) this.menu.show();
	},	
	checkChange: function(item, checked) {
		var value = [];
		this.menu.items.each(function(item){if(item.checked) value.push(item.itemId);},this);
		this.value = value;		
		this.setActive(this.isActivatable());
		this.fireEvent("update", this);
	},	
	isActivatable: function() {return this.value.length > 0;},	
	setValue: function(value) {
		var value = this.value = [].concat(value);
		if(this.loaded) {
			this.menu.items.each(function(item) {
				item.setChecked(false, true);
				for(var i=0, len=value.length; i<len; i++) {
					if(item.itemId == value[i]) item.setChecked(true, true);
        		}
			}, this);
    	}			
		this.fireEvent("update", this);
	},	
	getValue: function() {return this.value;},	
	serialize: function() {
    	var args = {type: 'list', value: this.phpMode ? this.value.join(',') : this.value};
    	this.fireEvent('serialize', args, this);
		return args;
	},	
	validateRecord: function(record) {
		return this.getValue().indexOf(record.get(this.dataIndex)) > -1;
	}
});

Ext.grid.filter.NumericFilter = Ext.extend(Ext.grid.filter.Filter, {
	init: function() {
		this.menu = new Ext.menu.RangeMenu();		
		this.menu.on("update", this.fireUpdate, this);
	},	
	fireUpdate: function() {
		this.setActive(this.isActivatable());
		this.fireEvent("update", this);
	},	
	isActivatable: function() {
		var value = this.menu.getValue();
		return value.eq !== undefined || value.gt !== undefined || value.lt !== undefined;
	},	
	setValue: function(value) {this.menu.setValue(value);},	
	getValue: function() {return this.menu.getValue();},	
	serialize: function() {
		var args = [];
		var values = this.menu.getValue();
		for(var key in values) {
			args.push({type: 'numeric', comparison: key, value: values[key]});
    	}
		this.fireEvent('serialize', args, this);
		return args;
	},	
	validateRecord: function(record) {
		var val = record.get(this.dataIndex),
			values = this.menu.getValue();			
		if(values.eq != undefined && val != values.eq) return false;
		if(values.lt != undefined && val >= values.lt) return false;
		if(values.gt != undefined && val <= values.gt) return false;
		return true;
	}
});

Ext.grid.filter.StringFilter = Ext.extend(Ext.grid.filter.Filter, {
	updateBuffer: 500,
	icon: './images/find.png',	
	init: function() {
		var value = this.value = new Ext.menu.EditableItem({icon: this.icon});
		value.on('keyup', this.onKeyUp, this);
		this.menu.add(value);		
		this.updateTask = new Ext.util.DelayedTask(this.fireUpdate, this);
	},	
	onKeyUp: function(event) {
		if(event.getKey() == event.ENTER){
			this.menu.hide(true);
			return;
		}
		this.updateTask.delay(this.updateBuffer);
	},	
	isActivatable: function() {return this.value.getValue().length > 0;},	
	fireUpdate: function() {		
		if(this.active) this.fireEvent("update", this);
		this.setActive(this.isActivatable());
	},	
	setValue: function(value) {
		this.value.setValue(value);
		this.fireEvent("update", this);
	},	
	getValue: function() {return this.value.getValue();},	
	serialize: function() {
		var args = {type: 'string', value: this.getValue()};
		this.fireEvent('serialize', args, this);
		return args;
	},	
	validateRecord: function(record) {
		var val = record.get(this.dataIndex);
		if(typeof val != "string") return this.getValue().length == 0;
		return val.toLowerCase().indexOf(this.getValue().toLowerCase()) > -1;
	}
});

Ext.form.ColorField = function(config){Ext.form.ColorField.superclass.constructor.call(this, config);};
Ext.extend(Ext.form.ColorField, Ext.form.TriggerField,  {
    triggerClass : 'x-form-color-trigger',
    defaultAutoCreate : {tag: "input", type: "text", size: "10", maxlength: "7", autocomplete: "off"},
    maskRe: /[a-f0-9]/i,
    regex: /[a-f0-9]/i,
    validateValue : function(value){
        if(!Ext.form.ColorField.superclass.validateValue.call(this, value)){
            return false;
        }
        if(value.length < 1){
             return true;
        }
        var parseOK = this.parseColor(value);
        if(!value || (parseOK == false)){
            this.markInvalid(String.format(this.invalidText, value, '#AABBCC'));
            return false;
        }
        return true;
    },
    validateBlur : function(){
        return !this.menu || !this.menu.isVisible();
    },
    getValue : function(){
        return Ext.form.ColorField.superclass.getValue.call(this) || "";
    },
    setValue : function(color){
        Ext.form.ColorField.superclass.setValue.call(this, this.formatColor(color));
    },
    parseColor : function(value){
	return (!value || (value.substring(0,1) != '#')) ?
		false : true;
    },
    formatColor : function(value){
		if (value && (this.parseColor(value) == false)) {
			value = '#' + value;
		}
        return value;
    },
    menuListeners : {
        select: function(e, c){this.setValue(c);},
        show : function(){this.onFocus();},
        hide : function(){
            this.focus();
            var ml = this.menuListeners;
            this.menu.un("select", ml.select,  this);
            this.menu.un("show", ml.show,  this);
            this.menu.un("hide", ml.hide,  this);
        }
    },
    onTriggerClick : function(){
        if(this.disabled){return;}
        if(this.menu == null){this.menu = new Ext.menu.ColorMenu();}
        this.menu.on(Ext.apply({}, this.menuListeners, {scope:this}));
        this.menu.show(this.el, "tl-bl?");
    }
});


Fos.HttpProvider = function(config) {
    this.addEvents('readsuccess','readfailure','savesuccess','savefailure');
    Fos.HttpProvider.superclass.constructor.call(this);
    Ext.apply(this, config, {
         delay:750,dirty:false,started:false,autoStart:true,autoRead:true,user:'user',id:1,session:'session'
        ,logFailure:false,logSuccess:false,queue:[],url:SERVICE_URL,
        readUrl:'',
        saveUrl:''
        ,method:'post',saveBaseParams:{},readBaseParams:{}
        ,paramNames:{id:'id',name:'usseName',value:'usseValue',user:'user',session:'session',data:'PUserSetting'
        }
    });
    if(this.autoRead) {this.readState();}
    this.dt = new Ext.util.DelayedTask(this.submitState, this);
    if(this.autoStart) {this.start();}
};
Ext.extend(Fos.HttpProvider, Ext.state.Provider, {
     saveSuccessText:'Save Success'
    ,saveFailureText:'Save Failure'
    ,readSuccessText:'Read Success'
    ,readFailureText:'Read Failure'
    ,dataErrorText:'Data Error'
    ,initState:function(state) {
        if(state instanceof Array) {
            Ext.each(state, function(item) {
                this.state[item.name] = this.decodeValue(item[this.paramNames.value]);
            }, this);
        }
        else {this.state = state ? state : {};}
    }
    ,set:function(name, value) {
        if(!name) {return;}
        this.queueChange(name, value);
    }
    ,start:function() {
        this.dt.delay(this.delay);
        this.started = true;
    }
    ,stop:function() {
        this.dt.cancel();
        this.started = false;
    }
    ,queueChange:function(name, value) {
        var changed = undefined === this.state[name] || this.state[name] !== value;
        var o = {};
        var i;
        var found = false;
        if(changed) {
            o[this.paramNames.name] = name;
            o[this.paramNames.value] = this.encodeValue(value);
            for(i = 0; i < this.queue.length; i++) {
                if(this.queue[i].name === o.name) {
                    this.queue[i] = o;
                    found = true;
                }
            }
            if(false === found) {this.queue.push(o);}
            this.dirty = true;
        }
        if(this.started) {this.start();}
        return changed;
    }
    ,submitState:function() {
        if(!this.dirty){this.dt.delay(this.delay);return;}
        this.dt.cancel();        
        this.dirty = false;   
        Ext.Ajax.request({url:this.saveUrl || this.url
                ,method:this.method
                ,scope:this
                ,success:this.onSaveSuccess
                ,failure:this.onSaveFailure
                ,queue:Fos.clone(this.queue),
                params:{A:'USSE_S',mt:'JSON'},
                jsonData:{"FosRequest":{"data":{"PUserSetting":this.queue}}}
		});
    }
    ,clear:function(name) {this.set(name, undefined);}
    ,onSaveSuccess:function(response, options) {
        var o = {};        
        try {o = Ext.decode(response.responseText);}
        catch(e) {
        	this.dirty = true;return;
        }
        if(0 != o.code) {this.dirty = true;}
        else {
        	Ext.each(options.queue, function(item) {
                if(!item) {return;}
                var name = item[this.paramNames.name];
                var value = this.decodeValue(item[this.paramNames.value]);
                if(undefined === value || null === value) {
                    Fos.HttpProvider.superclass.clear.call(this, name);
                }
                else {
                    Fos.HttpProvider.superclass.set.call(this, name, value);
                }
            }, this);
            if(false === this.dirty) {this.queue = [];}
            else {
                var i, j, found;
                for(i = 0; i < options.queue.length; i++) {
                    found = false;
                    for(j = 0; j < this.queue.length; j++) {
                        if(options.queue[i].name === this.queue[j].name) {
                            found = true;break;
                        }
                    }
                    if(true === found && this.encodeValue(options.queue[i].value) === this.encodeValue(this.queue[j].value)) {
                        this.queue.remove(this.queue[j]);
                    }
                }
            }
            this.fireEvent('savesuccess', this);
        }
    }
    ,onSaveFailure:function(response, options) {
        this.dirty = true;
        this.fireEvent('savefailure', this);
    }
    ,onReadFailure:function(response, options) {
        this.fireEvent('readfailure', this);
    }
    ,onReadSuccess:function(response, options) {
        var o = {}, data;        
        try {o = Ext.decode(response.responseText);}
        catch(e) {return;}
        if(0==o.code){
            data = o[this.paramNames.data];
            if(!(data instanceof Array) && true === this.logFailure) {return;}
            Ext.each(data, function(item) {
                this.state[item[this.paramNames.name]] = this.decodeValue(item[this.paramNames.value]);
            }, this);
            this.queue = [];
            this.dirty = false;
            this.fireEvent('readsuccess', this);
        }
    }
    ,readState:function() {
        Ext.Ajax.request({url:this.readUrl || this.url
            ,method:this.method
            ,scope:this
            ,success:this.onReadSuccess
            ,failure:this.onReadFailure
            ,params:{A:'USSE_G',mt:'JSON'}
		});
    }
    ,log:function(){if(console) {console.log.apply(console, arguments);}}
});
Fos.clone = function(o) {
    if(!o || 'object' !== typeof o) {return o;}
    var c = '[object Array]' === Object.prototype.toString.call(o) ? [] : {};
    var p, v;
    for(p in o) {
        if(o.hasOwnProperty(p)) {
            v = o[p];
            if(v && 'object' === typeof v) {c[p] = Fos.clone(v);}
            else {c[p] = v;}
        }
    }
    return c;
};