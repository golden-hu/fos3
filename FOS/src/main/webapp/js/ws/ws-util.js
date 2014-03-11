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

var RTJ = function(r,rt){
	var f=rt.prototype.fields;	
	if(r.get('rowAction') == ''||r.get('rowAction') == undefined) r.set('rowAction','M');
	var v={};
	for(var i=0;i<f.length;i++){
		var item = f.items[i];
		var n = item.name;
		var ty = item.type;		
		if(n!=undefined && r.get(n)!=undefined && r.get(n)!==''){			
			if(ty==Ext.data.Types.DATE){
				v[n]=r.get(n)?r.get(n).format('Y-m-d H:i:s'):'';
			}
			else if(ty==Ext.data.Types.BOOLEAN){
				v[n]=r.get(n)?'1':'0';
			}
			else{
				v[n]=Ext.util.Format.htmlEncode(r.get(n));
			}
		}
	}
	return v;
};

var FOSJ=function(x){
	return {FosRequest:{data:x}};
};

var RTX = function(r,t,rt){
	var f=rt.prototype.fields;
	var x='<'+t+'>\n';
	if(r.get('rowAction') == ''||r.get('rowAction') == undefined) r.set('rowAction','M');
	for(var i=0;i<f.length;i++){
		var item = f.items[i];
		var n = item.name;
		var ty = item.type;
		if(n!=undefined && r.get(n)!=undefined && r.get(n)!==''){
			x+='<'+n+'>';
			if(ty==Ext.data.Types.DATE){				
				x+=r.get(n)?r.get(n).format(item.dateFormat):'';
			}
			else if(ty==Ext.data.Types.BOOLEAN){
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
	var f=rt.prototype.fields;
	for(var j=0;j<a.length;j++)
	{
		var r=a[j];
		if(r.get('rowAction') == ''||r.get('rowAction') == undefined) 
			r.set('rowAction','M');
		if(r.get('rowAction')!='D'){
			x=x+"<"+t+">\n";
			for(var i=0;i<f.length;i++){
				var item = f.items[i];
				var n = item.name;
				var ty = item.type;				
				if(n!=undefined && r.get(n)!=undefined && r.get(n)!==''){
					x+='<'+n+'>';
					if(ty==Ext.data.Types.DATE) 
						x+=r.get(n)?r.get(n).format(item.dateFormat):'';
					else if(ty==Ext.data.Types.BOOLEAN)
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
		x+='<fosQuery><key>'+a[i].get('key')+'</key>'+'<op>'+a[i].get('op')+'</op>'+'<value>'+a[i].get('value')+'</value></fosQuery>\n';
	}
	return x;
};
var FOSX=function(x){
	return "<FosRequest>\n<data>\n"+x+"</data>\n</FosRequest>";
};

var QTX=function(a){
	var x='';
	for(var i=0;i<a.length;i++)
	{
		x+='<fosQuery><key>'+a[i].get('key')+'</key>'+'<op>'+a[i].get('op')+'</op>'+'<value>'+a[i].get('value')+'</value></fosQuery>\n';
	}
	return x;
};

var QTJ=function(a){
	return {fosQuery:a};
};

var formatDate = function(v){
	return v ? v.dateFormat(DATEF) : '';
};
var formatDateTime = function(v){
	return v ? v.dateFormat('Y-m-d H:i') : '';
};

var XMG = Ext.MessageBox;

var getElapsed=function(d){
	if(!d) 
		return -1;
	return Math.abs((new Date()).getTime()-d.getTime());
};
var numRender = function(v){v=parseFloat(v);v=v.toFixed(2);if(v=='NaN') v='0.00';return v;};

Ext.grid.CheckColumn = function(config){
	this.addEvents({click:true});
	Ext.grid.CheckColumn.superclass.constructor.call(this);
	Ext.apply(this,config,{
		init:function(grid){
			this.grid = grid;
			this.grid.on('render', function(){
				var view = this.grid.getView();
				view.mainBody.on('mousedown', this.onMouseDown,this);
			},this);
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

function CHKCLM(t,d,w){
	return new Ext.grid.CheckColumn({header:t,dataIndex:d,width:w?w:55});
};

