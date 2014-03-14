//散货配载清单
Fos.PakingListGrid = function(T){
	var store = GS('PALI_X','FPackingList',FPackingList,'paliId','DESC','fconContractNo','','');
	var a=[];
    a[0]={key:'voyaSailedFlag',value:T=='N'?0:1,op:EQ};
    store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
    if(T=='N') store.load();
    else store.load({params:{start:0,limit:C_PS100}});	
	this.reset=function(){store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
		if(T=='N') store.load();
    	else store.load({params:{start:0,limit:C_PS100}});
	};
	var gv=new Ext.grid.GroupingView({showGroupName:true,enableNoGroups:true,hideGroupedColumn:false,
		groupTextTpl: '{text} ({[values.rs.length]} {["Items"]})',
		getRowClass: function(record, index) {			   
            if (record.get('paliTransFlag')&&record.get('paliArriveDate')!=''&&(record.get('paliHarbourId')!=record.get('paliStationIdNow'))) return 'purple-font-row';
            else if (record.get('paliTransFlag')&&record.get('paliArriveDate')=='') return 'green-font-row';
            else if (record.get('paliArriveDate')=='') return 'blue-font-row';
            else return '';
        }});
	var summary = new Ext.grid.GroupSummary();
	var arrived=CHKCLM(C_ARRIVED,'paliStatus',50);
	var c1={header:C_PACKING_LABEL,width:70,dataIndex:"paliLabel",editor:new Ext.form.TextField({}),summaryRenderer: function(v,p,d){return '合计：';}};
	var c2={header:C_PACKING_TRACK_NO,width:70,dataIndex:"paliTrackNo",editor:new Ext.form.TextField({})};
	var c3={header:C_PACKING_LINE_NO,width:25,dataIndex:"paliLineNo",editor:new Ext.form.TextField({})};
	var c4={header:C_SPEC,width:120,dataIndex:"paliSpec",editor:new Ext.form.TextField()};
	var c5={header:C_PACKAGES,width:40,dataIndex:"paliPackages",align:'right',editor:new Ext.form.NumberField({}),summaryType:'sum'};
	var c6={header:C_GW,width:60,dataIndex:"paliGrossWeight",align:'right',renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4}),summaryType:'sum'};
	
	var c7={header:C_CARGO_DELIVERY_DATE,dataIndex:'paliLoadDate',width:70,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})};
	var c8={header:C_PACKING_EXP_PORT,dataIndex: 'paliHarbourId',width:60,renderer:function(v,m,r){return r.get('paliHarbourName');},
			editor:new Ext.form.ComboBox({xtype:'combo',store:getHARB_S(),displayField:'placName',valueField:'placId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
				listeners:{scope:this,select:function(c,r,i){
            	var b=sm.getSelected();if(b){b.set('paliHarbourName',r.get('placName'));}}}
			})};
	var c9={header:C_PACKING_STATION,dataIndex: 'paliStationName',width:60,
			editor:new Ext.form.ComboBox({xtype:'combo',store:getHARB_S(),displayField:'placName',valueField:'placName',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
				listeners:{scope:this,select:function(c,r,i){
	            	var b=sm.getSelected();if(b){
	            		b.set('paliStationId',r.get('placId'));
	            		b.set('paliStationName',r.get('placName'));
	            		if(b.get('paliTransFlag')!=1){
	            			b.set('paliStationIdNow',r.get('placId'));
	            			b.set('paliStationNameNow',r.get('placName'));
	            		}
	            }}}
		})};
	var c10={header:C_PACKING_ARRIVE_DATE,dataIndex:'paliArriveDate',width:70,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})};
	var c11={header:C_PACKING_LOCATION,width:60,dataIndex:"paliLocation",editor:new Ext.form.TextField({
		listeners:{scope:this,change:function(c,nv,ov){
		var b=sm.getSelected();
		if(b){
			b.set('paliLocationNow',nv);
			if(b.get('paliLocationNow')&&(b.get('paliStationId')==b.get('paliStationIdNow'))) 
				b.set('paliStatus',1);
		}
	}}
	})};
	var c12={header:C_TRACK_TYPE,dataIndex: 'paliTrackType',width:40,renderer:getTRACK_T,
			editor:new Ext.form.ComboBox({xtype:'combo',store:TRACK_T_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true})};
	var c13={header:C_STATION_NOW,width:50,dataIndex:"paliStationNameNow"};
	var c14={header:C_LOCATION_NOW,width:60,dataIndex:"paliLocationNow",editor:new Ext.form.TextField({
		listeners:{scope:this,change:function(c,nv,ov){
		var b=sm.getSelected();
		if(b){
			b.set('paliLocationNow',nv);
			if(b.get('paliLocationNow')&&(b.get('paliStationId')==b.get('paliStationIdNow'))) 
				b.set('paliStatus',1);
		}
	}}
	})};	
	var c15={header:C_CONTRACT_NO,width:80,dataIndex:"fconContractNo"};
	var c16={header:C_VESS,width:60,dataIndex:'vessName'};	
	var c17={header:C_POD,width:60,dataIndex:"fconPodEn"};
	var c18={header:C_RENTER,width:55,dataIndex:"charterName"};
	var c19={header:C_SHIPPER,width:55,dataIndex:"custName"};
	var c20={header:C_PACK,dataIndex:'packId',width:40,renderer:function(v,m,r){return r.get('packName');},
		editor:new Ext.form.ComboBox({xtype:'combo',store:getPACK_S(),displayField:'packName',valueField:'packId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
			listeners:{scope:this,select:function(c,r,i){
        	var b=sm.getSelected();if(b){b.set('packName',r.get('packName'));}}}
		})};
	var c21={header:C_CARGO_NAME_CN,width:100,dataIndex:"cargNameCn",editor:new Ext.form.TextField({})};
	var c22={header:C_CARGO_NAME_EN,width:100,dataIndex:"cargNameEn",editor:new Ext.form.TextField({})};
	var c23={header:C_VESS_NAME_CN,width:60,dataIndex:"vessNameCn"};
	var c24={header:C_VOYA,width:60,dataIndex:"voyaName"};
	var c25={header:C_CUDE_TYPE,width:60,dataIndex:"fconCudeType",renderer:getCUTY};
	var c26={header:C_TRACK_TYPE_P,dataIndex:'paliTrackTypeP',width:40,renderer:getTRACK_T,
			editor:new Ext.form.ComboBox({xtype:'combo',store:TRACK_T_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true})};
	var c27={header:C_BL_NO,dataIndex:'consMblNo',editor:new Ext.form.TextField(),width:100};
	var c28={header:C_CBM_S,width:60,dataIndex:"paliCbm",align:'right',renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4}),summaryType:'sum'};
    var c29={header:C_CBM_C,width:60,dataIndex:"paliCbmC",align:'right',renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4}),summaryType:'sum'};
    var c30={header:C_PIECES,width:60,dataIndex:"paliPieces",align:'right',editor:new Ext.form.NumberField(),summaryType:'sum'};
    var c31={header:C_LENGTH,width:60,dataIndex:"paliLength",align:'right',renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4})};
    var c32={header:C_TOTAL_LENGTH,width:60,dataIndex:"paliTotalLength",align:'right',renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4}),summaryType:'sum'};
    var c33={header:C_UNIT_LEN,width:60,dataIndex:"unitNameLen",
            editor:new Ext.form.ComboBox({displayField:'unitCode',valueField:'unitCode',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getUNIT_S(),listeners:{
            scope:this,select:function(c,r,i){
                var b=this.getSelectionModel().getSelected();
                b.set('unitIdLen',r.get('unitId'));}}})};
    var c34={header:C_TRANS_TIMES,dataIndex:'paliTransTimes',width:30};
       
	var transFlag=CHKCLM(C_TRANS_FLAG,'paliTransFlag',30);
	var inspFlag=CHKCLM(C_INSP_FLAG,'fconInspectionFlag',30);
	var invFlag=CHKCLM(C_INV_FLAG,'fconInvoiceFlag',30);
	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false,moveEditorOnEnter:false});
	var cm=new Ext.grid.ColumnModel({columns:[sm,arrived,c18,c19,c15,c1,c2,c3,c4,c5,c20,c6,c28,c29,c30,c31,c32,c33,c7,c8,c9,c12,c26,c27,
	            c10,c11,transFlag,c34,c13,c14,invFlag,c25,inspFlag,c16,c23,c24,c17,c21,c22],defaults:{sortable:true,width:100}});
	var copy=function(b){
		var e = new FPackingList({});var rid=GGUID();
		var f = FPackingList.prototype.fields;
		for (var i=0;i<f.keys.length;i++){var fn=''+f.keys[i];e.set(fn,b.get(fn));}
		e.set('version','1');e.set('id',rid);e.set('paliId',rid);
		e.set('paliStatus',0);e.set('userId','');e.set('grouId','');e.set('vayaSailedFlag',0);
		return e;
	};
	this.removePK=function(){
		var r = sm.getSelections();
		if(r.length){
			for(var i=0;i<r.length;i++){r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');
			store.remove(r[i]);}
		}
		else XMG.alert(SYS,M_R_P);
	};
	this.save=function(){
		var sa = store.getModifiedRecords();
		if(sa.length){
			var x = ATX(sa,'FPackingList',FPackingList);
			Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'PALI_S'},
				success: function(res){
					var a = XTRA(res.responseXML,'FPackingList',FPackingList);
					var fields = FPackingList.prototype.fields;			
					for(var i=0;i<sa.length;i++){
						for(var j=0;j<a.length;j++){	
							if(sa[i].get('id')==a[j].get('id')){
								for(var k = 0;k < fields.length;k++){
									var f = fields.items[k];
									var fn=f.name;
									if(fn!='charterName'&&fn!='custName'&&fn!='fconPodEn'&&fn!='fconInvoiceFlag'&&fn!='fconCudeType'&&fn!='fconInspectionFlag')
										sa[i].set(fn,a[j].get(fn));
								}
								break;
							}
						}
					}
					store.suspendEvents();
					store.commitChanges();
					store.resumeEvents();
					XMG.alert(SYS,M_S);},
				failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
				xmlData:FOSX(x)
			});
		}
		else XMG.alert(SYS,M_NC);
	};	
	this.cp=function(){
		var b = sm.getSelected();
		if(b){
			var e=copy(b);var idx=store.indexOf(b);
			this.stopEditing();store.insert(idx+1,e);e.set('rowAction','N');sm.selectNext();this.startEditing(idx+1,4);
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.showTran=function(){
		var b = sm.getSelected();
		if(b){var frm = new Fos.TrliWin(b);frm.show();}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};	
	this.batchTran=function(){
		var a=sm.getSelections();
		if(a.length){
			var w = new Fos.TransWin();
			w.addButton({text:C_OK,handler:function(){
				var trliTrackType = w.findById('trliTrackType').getValue();
				var trliTranDate = w.findById('trliTranDate').getValue();
				var trliStationId = w.findById('trliStationId').getValue();
				var trliArriveDate = w.findById('trliArriveDate').getValue();
				var trliLocation = w.findById('trliLocation').getValue();
				var stationName = w.stationName;
				var ra=[];            
				for(var i=0;i<a.length;i++){
					var r=a[i];var rid =GGUID();
					var e = new FTransList({id:rid,trliId:rid,fconId:r.get('fconId'),paliId:r.get('paliId'),
					    trliStationIdO:r.get('paliStationIdNow'),trliStationNameO:r.get('paliStationNameNow'),
                        trliLocationO:r.get('paliLocationNow'),
						trliStationId:trliStationId,trliStationName:stationName,trliTranDate:trliTranDate,trliArriveDate:trliArriveDate,
						trliTrackType:trliTrackType,trliLocation:trliLocation,version:'0',rowAction:'N'});
					ra[ra.length]=e;
				}
				Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'TRLI_S'},
					success: function(r){
					if(T=='N')
		        		store.reload();
		        	else
		     			store.reload({params:{start:0,limit:C_PS100}});
						XMG.alert(SYS,M_S);
					},
					failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
					xmlData:FOSX(ATX(ra,'FTransList',FTransList))
				});
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchSpec=function(){
		var r = sm.getSelections();
		if(r.length){
			XMG.prompt(SYS,C_SPEC,function(b,v){if(b=='ok')  for(var i=0;i<r.length;i++){r[i].set('paliSpec',v);}});
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchBl=function(){
		var r = sm.getSelections();
		if(r.length){
			XMG.prompt(SYS,C_BL_NO,function(b,v){
				if(b=='ok'){
					for(var i=0;i<r.length;i++){r[i].set('consMblNo',v);}
				}
			});
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchHarbour=function(){
		var a=sm.getSelections();
		if(a.length){
			var w = new Fos.HarbourWin();
			w.addButton({text:C_OK,handler:function(){
				var harbourId = w.findById('paliHarbourId').getValue();
				var harbourName = w.harbourName;
				for(var i=0;i<a.length;i++){a[i].set('paliHarbourId',harbourId);a[i].set('paliHarbourName',harbourName);}
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchStation=function(){
		var a=sm.getSelections();
		if(a.length){
			var w = new Fos.StationWin();
			w.addButton({text:C_OK,handler:function(){
				var stationId = w.findById('paliStationId').getValue();
				var stationName = w.stationName;
				for(var i=0;i<a.length;i++){
				    a[i].set('paliStationId',stationId);
				    a[i].set('paliStationName',stationName);
				    if(a[i].get('paliTransFlag')!=1){
                        a[i].set('paliStationIdNow',stationId);
                        a[i].set('paliStationNameNow',stationName);
                    }
				}
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchArriveDate=function(){
		var a=sm.getSelections();
		if(a.length){
			var w = new Fos.DateSelWin(C_PACKING_ARRIVE_DATE);
			w.addButton({text:C_OK,handler:function(){
				var dd = w.findById('dd').getValue();
				for(var i=0;i<a.length;i++){a[i].set('paliArriveDate',dd);}
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchLocation=function(){
		var r = sm.getSelections();
		if(r.length){
			XMG.prompt(SYS,C_PACKING_LOCATION,function(b,v){if(b=='ok')  
			for(var i=0;i<r.length;i++){r[i].set('paliLocation',v);if(r[i].get('paliTransFlag')!=1){r[i].set('paliLocationNow',v);}}});
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchTrackType=function(){
		var a=sm.getSelections();
		if(a.length){
			var w = new Fos.TrackTypeWin(C_TRACK_TYPE);
			w.addButton({text:C_OK,handler:function(){
				var paliTrackType = w.findById('paliTrackType').getValue();
				for(var i=0;i<a.length;i++){a[i].set('paliTrackType',paliTrackType);}
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchTrackTypeP=function(){
		var a=sm.getSelections();
		if(a.length){
			var w = new Fos.TrackTypeWin(C_TRACK_TYPE_P);
			w.addButton({text:C_OK,handler:function(){
				var paliTrackType = w.findById('paliTrackType').getValue();
				for(var i=0;i<a.length;i++){a[i].set('paliTrackTypeP',paliTrackType);}
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchPack=function(){
		var a=sm.getSelections();
		if(a.length){
			var w = new Fos.PackWin();			
			w.addButton({text:C_OK,handler:function(){
				var packId = w.findById('packId').getValue();
				var packName = w.packName;
				for(var i=0;i<a.length;i++){a[i].set('packId',packId);a[i].set('packName',packName);}
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchCargoNameCn=function(){
		var r = sm.getSelections();
		if(r.length){
			XMG.prompt(SYS,C_CARGO_NAME_CN,function(b,v){if(b=='ok')  for(var i=0;i<r.length;i++){r[i].set('cargNameCn',v);}});
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchLen=function(){
        var a=sm.getSelections();
        if(a.length){
            var w = new Fos.LenWin(C_LENGTH);          
            w.addButton({text:C_OK,handler:function(){
                var len = w.findById('len').getValue();
                for(var i=0;i<a.length;i++){a[i].set('paliLength',len);a[i].set('paliTotalLength',len*a[i].get('paliPieces'));}
                w.close();
            }},this);
            w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
            w.show();
        }
        else XMG.alert(SYS,M_NO_DATA_SELECTED);
    };
    this.batchTotalLen=function(){
        var a=sm.getSelections();
        if(a.length){
            var w = new Fos.LenWin(C_TOTAL_LENGTH);          
            w.addButton({text:C_OK,handler:function(){
                var len = w.findById('len').getValue();
                for(var i=0;i<a.length;i++){a[i].set('paliTotalLength',len);
                if(a[i].get('paliPieces')>0) a[i].set('paliLength',len/a[i].get('paliPieces'));}
                w.close();
            }},this);
            w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
            w.show();
        }
        else XMG.alert(SYS,M_NO_DATA_SELECTED);
    };
    this.batchLenUnit=function(){
        var a=sm.getSelections();
        if(a.length){
            var w = new Fos.UnitWin();          
            w.addButton({text:C_OK,handler:function(){
                var unitName = w.findById('unitName').getValue();
                var unitId = w.unitId;
                for(var i=0;i<a.length;i++){a[i].set('unitNameLen',unitName);a[i].set('unitIdLen',unitId);}
                w.close();
            }},this);
            w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
            w.show();
        }
        else XMG.alert(SYS,M_NO_DATA_SELECTED);
    };
	this.search = function(){var w=new Fos.PaliLookup(store,T);w.show();};
	this.expPali=function(){EXP('C','PACK_LIST',store.baseParams.xml?'&mt=JSON&xml='+Ext.util.JSON.encode(store.baseParams.xml):'&mt=JSON');};
	this.exp=function(){
		var w = new Fos.PaliExpWin();
		w.addButton({text:C_OK,handler:function(){
			var harbourId = w.findById('harbourId').getValue();
			var createTime = w.findById('createTime').getValue().format(DATEF);
			var harbourName = w.harbourName;
			OWW(SERVICE_URL+'?A=REPT_PALI&format=xls&paliHarbourId='+harbourId+'&paliHarbourName='+harbourName+'&createTime='+createTime);
			w.close();
		}},this);
		w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
		w.show();
	};
	this.expInv=function(){
		var w = new Fos.CustSelWin();
		w.addButton({text:C_OK,handler:function(){
			var charterId = w.custId;
			OWW(SERVICE_URL+'?A=REPT_PAIV&format=xls&charterId='+charterId);
			w.close();
		}},this);
		w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
		w.show();
	};
	
	this.expOverDuty=function(){
        var w = new Fos.DateSelWin(C_STAT_DATE);
        w.addButton({text:C_OK,handler:function(){
            var dd = w.findById('dd').getValue();
            OWW(SERVICE_URL+'?A=REPT_PAOD&format=xls&d='+dd.format(DATEF));
            w.close();
        }},this);
        w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
        w.show();
    };
    this.expLiveOverDuty=function(){
        var w = new Fos.DateSelWin(C_STAT_DATE);
        w.addButton({text:C_OK,handler:function(){
            var dd = w.findById('dd').getValue();
            OWW(SERVICE_URL+'?A=REPT_PAON&format=xls&d='+dd.format(DATEF));
            w.close();
        }},this);
        w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
        w.show();
    };
    
	/*new Ext.KeyMap(Ext.getDoc(), {
		key:'sdczf',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('G_PALI_X');
		 	if(tc && tc==T_MAIN.getActiveTab()){
		 		var tb=this.getTopToolbar();
		 		switch(k) {
		 		case Ext.EventObject.S:
					if(!tb.getComponent('TB_S').disabled) this.save();break;
		 		case Ext.EventObject.D:
		 			if(!tb.getComponent('TB_R').disabled) this.removePK();break;
		 		case Ext.EventObject.C:
		 			if(!tb.getComponent('TB_C').disabled) this.cp();break;	 		
		 		case Ext.EventObject.Z:
		 			if(!tb.getComponent('TB_Z').disabled) this.showTran();break;
				case Ext.EventObject.F:
					if(!tb.getComponent('TB_F').disabled) this.search();break;
				}
		 	}
		},stopEvent:true,scope:this});*/
	var kw = new Ext.form.TextField({listeners:{scope:this,specialkey:function(c,e){if(e.getKey()==Ext.EventObject.ENTER) this.fastSearch();}}});
   
    this.fastSearch=function(){
        var fconContractNo=kw.getValue();
        if(!fconContractNo){XMG.alert(SYS,M_INPUT_FCON_NO,function(b){kw.focus();});return;};
        var a=[];
        a[0]={key:'voyaSailedFlag',value:T=='N'?0:1,op:EQ};
        var c=fconContractNo.indexOf(',');
        var b=fconContractNo.indexOf('..');
        if(c>=0){
            a[a.length]={key:'fconContractNo',value:fconContractNo,op:IN};
        }
        else if(b>=0){
            var ra=consNo.split('..');
            a[a.length]={key:'fconContractNo',value:ra[0],op:GE};
            a[a.length]={key:'fconContractNo',value:ra[1],op:LE};
        }
        else
        	a[a.length]={key:'fconContractNo',value:fconContractNo,op:LI};
        store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
        if(T=='N')
        	store.reload({callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});
        else 
        	store.reload({params:{start:0,limit:C_PS100},callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});
    };
    var b8={text:C_FAST_SEARCH+'(Q)',iconCls:'search',scope:this,handler:this.fastSearch}; 
    var b9={text:C_RESET+'(F5)',iconCls:'refresh',handler:this.reset};
   /* new Ext.KeyMap(Ext.getDoc(), {
        key:[116],
        handler: function(k, e) {
           var tc = T_MAIN.getComponent('G_PALI_X');
           if(tc && tc==T_MAIN.getActiveTab()){switch(k) {case Ext.EventObject.F5:this.reset();break;}}
        },stopEvent: true,scope:this
    });
    this.pagingNav=function(page){
        var tc = T_MAIN.getComponent('G_PALI_X');
        if(tc && tc==T_MAIN.getActiveTab()){
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
    });*/
	Fos.PakingListGrid.superclass.constructor.call(this, {id:'G_PALI_X_'+T,title:C_PACKING_LIST+'-'+(T=='N'?C_NOT_SAILED:C_SAILED),
		border:true,autoScroll:true,clicksToEdit:1,view:gv,plugins:[arrived,transFlag,summary],
	    stripeRows:true,store:store,sm:sm,cm:cm,closable:true,listeners:{scope:this,
			afteredit:function(e){
			var f=e.field;var r=e.record;
	    	if(f=='paliPackages'){r.set('paliPackages',e.value);frm.reCalculate();}	    	
			else if(f=='paliGrossWeight'){r.set('paliGrossWeight',e.value);frm.reCalculate();}
			else if(f=='paliSpec'){r.set('paliCbmC',eval(e.value));}
			else if(f=='paliLocation'){if(r.get('paliTransFlag')!=1){r.set('paliLocationNow',e.value);}}
			else if(f=='paliLength'){r.set('paliTotalLength',e.value*r.get('paliPieces'));}
			else if(f=='paliPieces'){r.set('paliTotalLength',e.value*r.get('paliLength'));}
			else if(f=='paliTotalLength'){if(r.get('paliPieces')>0) r.set('paliLength',e.value/r.get('paliPieces'));}
	    }},
	    tbar:[
			{itemId:'TB_R',text:C_REMOVE+'(D)',iconCls:'remove',disabled:false,scope:this,handler:this.removePK},'-',
			{itemId:'TB_S',text:C_SAVE+'(S)',iconCls:'save',disabled:false,scope:this,handler:this.save},'-',
			{itemId:'TB_C',text:C_COPY+'(C)',iconCls:'copy',disabled:false,scope:this,handler:this.cp},'-',
			{itemId:'TB_Z',text:C_TRANS+'(Z)',iconCls:'redo',disabled:false,handler:this.showTran},'-',
			{text:C_BATCH_OP,iconCls:'copy',scope:this,menu: {items: [
				{text:C_BATCH_SPEC,iconCls:'copy',disabled:false,scope:this,handler:this.batchSpec},
				{text:C_BATCH_HARBOUR,iconCls:'copy',disabled:false,scope:this,handler:this.batchHarbour},
				{text:C_BATCH_STATION,iconCls:'copy',disabled:false,scope:this,handler:this.batchStation},
				{text:C_BATCH_LOCATION,iconCls:'copy',disabled:false,scope:this,handler:this.batchLocation},
				{text:C_BATCH_ARRIVE_DATE,iconCls:'copy',disabled:false,scope:this,handler:this.batchArriveDate},
				{text:C_BATCH_TRACK_TYPE,iconCls:'copy',disabled:false,scope:this,handler:this.batchTrackType},
				{text:C_BATCH_TRACK_TYPE_P,iconCls:'copy',disabled:false,scope:this,handler:this.batchTrackTypeP},
				{text:C_BATCH_PACK,iconCls:'copy',disabled:false,scope:this,handler:this.batchPack},
				{text:C_BATCH_CARGO_NAME_CN,iconCls:'copy',disabled:false,scope:this,handler:this.batchCargoNameCn},
				{text:C_BATCH_BL,iconCls:'copy',disabled:false,scope:this,handler:this.batchBl},
				{text:C_BATCH_LEN,iconCls:'redo',disabled:false,handler:this.batchLen},
				{text:C_BATCH_TOTAL_LEN,iconCls:'redo',disabled:false,handler:this.batchTotalLen},
				{text:C_BATCH_UNIT_LEN,iconCls:'redo',disabled:false,handler:this.batchLenUnit},
				{text:C_TRANS_BATCH,iconCls:'redo',disabled:false,handler:this.batchTran}
			]}},'-',			
			{text:C_EXPORT,iconCls:'print',scope:this,menu: {items:[
			    {text:C_PACKING_LIST,scope:this,handler:this.expPali},
			    {text:C_POD_SHIPPING_ADVICE,scope:this,handler:this.exp},
			    {text:C_INVENTORY_LIST,scope:this,handler:this.expInv},
			    {text:C_OVERDUTY_LIST,scope:this,handler:this.expOverDuty},
			    {text:C_LIVE_OVERDUTY_LIST,scope:this,handler:this.expLiveOverDuty}
			    ]}},'-',
			 {itemId:'TB_F',text:C_SEARCH+'(F)',disabled:false,iconCls:'search',scope:this,handler:this.search},'-',
            kw,b8,'-',b9,'-'],		
		bbar:T=='N'?'':PTB(store,C_PS100)
		});
};
Ext.extend(Fos.PakingListGrid,Ext.grid.EditorGridPanel);

Fos.PaliGrid = function(p,store,loliS,frm){
	var blStore = GS('BL_Q','FBl',FBl,'blId','DESC','','','id');
	blStore.load({params:{fconId:p.get('fconId')}});
	var arrived=CHKCLM(C_ARRIVED,'paliStatus',50);
	var gv=new Ext.grid.GroupingView({
		showGroupName:true,enableNoGroups:false,hideGroupedColumn:false,
		groupTextTpl: '{text} ({[values.rs.length]} {["Items"]})',
		getRowClass: function(record, index) {			   
            if (record.get('paliTransFlag')&&record.get('paliArriveDate')!=''&&(record.get('paliHarbourId')!=record.get('paliStationIdNow'))) return 'purple-font-row';
            else if (record.get('paliTransFlag')&&record.get('paliArriveDate')=='') return 'green-font-row';
            else if (record.get('paliArriveDate')=='') return 'blue-font-row';
            else return '';
        }
		});
        
	var summary = new Ext.grid.GroupSummary();
	var c1={header:C_PACKING_LABEL,width:80,dataIndex:"paliLabel",editor:new Ext.form.TextField(),summaryRenderer: function(v,params,data){return '合计：';}};
	var c2={header:C_PACKING_TRACK_NO,width:80,dataIndex:"paliTrackNo",editor:new Ext.form.TextField({})};
	var c3={header:C_PACKING_LINE_NO,width:25,dataIndex:"paliLineNo",editor:new Ext.form.TextField({})};
	var c4={header:C_SPEC,width:120,dataIndex:"paliSpec",editor:new Ext.form.TextField()};	
	var c5={header:C_PACKAGES,width:40,dataIndex:"paliPackages",align:'right',editor:new Ext.form.NumberField({}),summaryType:'sum'};
	var c6={header:C_GW,width:60,dataIndex:"paliGrossWeight",align:'right',renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4}),summaryType:'sum'};
	var c7={header:C_CARGO_DELIVERY_DATE,dataIndex:'paliLoadDate',width:70,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})};
	var c8={header:C_PACKING_EXP_PORT,dataIndex: 'paliHarbourName',width:60,
			editor:new Ext.form.ComboBox({xtype:'combo',store:getHARB_S(),displayField:'placName',valueField:'placName',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
				listeners:{scope:this,select:function(c,r,i){
            	var b=sm.getSelected();if(b){b.set('paliHarbourId',r.get('placId'));}}}
			})};
	var c9={header:C_PACKING_STATION,dataIndex: 'paliStationName',width:60,
			editor:new Ext.form.ComboBox({xtype:'combo',store:getHARB_S(),displayField:'placName',valueField:'placName',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
				listeners:{scope:this,select:function(c,r,i){
	            	var b=sm.getSelected();if(b){
	            		b.set('paliStationId',r.get('placId'));
	            		b.set('paliStationName',r.get('placName'));
	            		if(b.get('paliTransFlag')!=1){
	            			b.set('paliStationIdNow',r.get('placId'));
	            			b.set('paliStationNameNow',r.get('placName'));
	            		}
	            }}}
		})};
	var c10={header:C_PACKING_ARRIVE_DATE,dataIndex:'paliArriveDate',width:70,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})};
	var c11={header:C_PACKING_LOCATION,width:60,dataIndex:"paliLocation",editor:new Ext.form.TextField({
		listeners:{scope:this,change:function(c,nv,ov){
		var b=sm.getSelected();
		if(b){
			b.set('paliLocationNow',nv);
			if(b.get('paliLocationNow')&&(b.get('paliStationId')==b.get('paliStationIdNow'))) 
				b.set('paliStatus',1);
		}
	}}
	})};
	var c12={header:C_TRACK_TYPE,dataIndex:'paliTrackType',width:40,renderer:getTRACK_T,
			editor:new Ext.form.ComboBox({xtype:'combo',store:TRACK_T_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true})};
	var c13={header:C_STATION_NOW,width:50,dataIndex:"paliStationNameNow"};
	var c14={header:C_LOCATION_NOW,width:60,dataIndex:"paliLocationNow",editor:new Ext.form.TextField({
		listeners:{scope:this,change:function(c,nv,ov){
		var b=sm.getSelected();
		if(b){
			b.set('paliLocationNow',nv);
			if(b.get('paliLocationNow')&&(b.get('paliStationId')==b.get('paliStationIdNow'))) 
				b.set('paliStatus',1);
		}
	}}
	})};	
	var c15={header:C_PACK,dataIndex:'packName',width:40,
			editor:new Ext.form.ComboBox({xtype:'combo',store:getPACK_S(),displayField:'packName',valueField:'packName',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
				listeners:{scope:this,select:function(c,r,i){
	        	var b=sm.getSelected();if(b){b.set('packId',r.get('packId'));}}}
			})};
	var c16={header:C_CARGO_NAME_CN,width:100,dataIndex:"cargNameCn",editor:new Ext.form.TextField({})};
	var c17={header:C_CARGO_NAME_EN,width:100,dataIndex:"cargNameEn",editor:new Ext.form.TextField({})};
	var c18={header:C_VESS,dataIndex:'vessName',width:60,
			editor:new Ext.form.ComboBox({xtype:'combo',store:loliS,displayField:'vessName',valueField:'vessName',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
				listeners:{scope:this,select:function(c,r,i){
            		var b=sm.getSelected();
            		if(b){
        			b.set('vessId',r.get('vessId'));
        			b.set('vessName',r.get('vessName'));
        			b.set('vessNameCn',r.get('vessNameCn'));
        			b.set('voyaId',r.get('voyaId'));
        			b.set('voyaName',r.get('voyaName'));
        			b.set('loliId',r.get('loliId'));
        			b.set('consId',r.get('consId'));
        			b.set('consNo',r.get('consNo'));
        			b.set('consMblNo',r.get('consMblNo'));
            	}}}
			})};	
	var c23={header:C_VESS_NAME_CN,width:60,dataIndex:"vessNameCn"};
	var c24={header:C_VOYA,width:60,dataIndex:"voyaName"};
	var c25={header:C_TRACK_TYPE_P,dataIndex:'paliTrackTypeP',width:40,renderer:getTRACK_T,
			editor:new Ext.form.ComboBox({xtype:'combo',store:TRACK_T_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true})};
	var c27={header:C_BL_NO,dataIndex:'consMblNo',width:40,
			editor:new Ext.form.ComboBox({xtype:'combo',store:blStore,displayField:'blNo',valueField:'blNo',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true})};
			
	var c28={header:C_CBM_S,width:60,dataIndex:"paliCbm",align:'right',renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4}),summaryType:'sum'};
    var c29={header:C_CBM_C,width:60,dataIndex:"paliCbmC",align:'right',renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4}),summaryType:'sum'};
    var c30={header:C_PIECES,width:60,dataIndex:"paliPieces",align:'right',editor:new Ext.form.NumberField(),summaryType:'sum'};
    var c31={header:C_LENGTH,width:60,dataIndex:"paliLength",align:'right',editor:new Ext.form.NumberField()};
    var c32={header:C_TOTAL_LENGTH,width:60,dataIndex:"paliTotalLength",align:'right',editor:new Ext.form.NumberField()};
    var c33={header:C_UNIT_LEN,width:60,dataIndex:"unitNameLen",
            editor:new Ext.form.ComboBox({displayField:'unitCode',valueField:'unitCode',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getUNIT_S(),listeners:{
            scope:this,select:function(c,r,i){
                var b=this.getSelectionModel().getSelected();
                b.set('unitIdLen',r.get('unitId'));}}})};
     var c34={header:C_TRANS_TIMES,dataIndex:'paliTransTimes',width:30};
     
	var transFlag=CHKCLM(C_TRANS_FLAG,'paliTransFlag',30);
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm=new Ext.grid.ColumnModel({columns:[sm,arrived,c1,c2,c3,c4,c5,c15,c6,c28,c29,c30,c31,c32,c33,c7,c8,c9,c10,c11,c12,c25,
		transFlag,c34,c27,c18,c23,c24,c13,c14,c16,c17],defaults:{sortable: true,width:100}});
	var copy=function(b){		
		var e = new FPackingList({});var rid=GGUID();
		var f = FPackingList.prototype.fields;
		for (var i=0;i<f.keys.length;i++){var fn=''+f.keys[i];e.set(fn,b.get(fn));}
		e.set('version','1');e.set('id',rid);e.set('paliId',rid);e.set('vayaSailedFlag',0);
		e.set('paliStatus',0);e.set('userId','');e.set('grouId','');
		return e;
	};
	this.add=function(){
		var id=GGUID();
		var b = sm.getSelected();
		if(b){var idx=store.indexOf(b);
			var e=copy(b);e.set('paliTrackNo','');e.set('paliPackages','');e.set('paliGrossWeight','');
			this.stopEditing();store.insert(idx+1,e);e.set('rowAction','N');sm.selectNext();this.startEditing(idx+1,2);
			frm.reCalculate();
		}
		else{
			var vessId='',vessName='',vessNameCn='',voyaId='',voyaName='',loliId='',consId='',consNo='',consMblNo='';
			var a=loliS.getRange();
			if(a.length>1){
				vessId=a[1].get('vessId');vessName=a[1].get('vessName');vessNameCn=a[1].get('vessNameCn');
				voyaId=a[1].get('voyaId');voyaName=a[1].get('voyaName');loliId=a[1].get('loliId');
				consId=a[1].get('consId');consNo=a[1].get('consNo');consMblNo=a[1].get('consMblNo');
			}
			var e = new FPackingList({id:id,paliId:id,fconId:p.get('fconId'),fconNo:p.get('fconNo'),
			fconContractNo:p.get('fconContractNo'),packId:p.get('packId'),packName:p.get('packName'),
			cargNameCn:p.get('cargNameCn'),cargNameEn:p.get('cargNameEn'),
			vessId:vessId,vessName:vessName,vessNameCn:vessNameCn,voyaId:voyaId,voyaName:voyaName,
			loliId:loliId,consId:consId,consNo:consNo,consMblNo:consMblNo,
    		paliLabel:'',paliTrackNo:'',paliLineNo:'',paliSpec:'',paliPackages:'',paliGrossWeight:'',
    		paliHarbourId:'',paliStationId:'',paliTrackType:'',vayaSailedFlag:0,
    		paliLoadDate:'',paliArriveDate:'',paliLocation:'',paliTransFlag:0,paliStatus:0,
    		version:'0'});
    	this.stopEditing();store.insert(0,e);e.set('rowAction','N');sm.selectFirstRow();this.startEditing(0, 1);
		}
	};
	this.removePK=function(){
		var r = sm.getSelections();
		if(r.length){
			for(var i=0;i<r.length;i++){r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');
			store.remove(r[i]);frm.reCalculate();}
		}
		else XMG.alert(SYS,M_R_P);
	};
	this.reloadFcon=function(r,o,s){
		var cs = new Ext.data.Store({url: SERVICE_URL+'?A='+'FCON_Q',
			reader:new Ext.data.JsonReader({root:'FContract'}, FContract)});
	    cs.load({params:{mt:'JSON',fconId:p.get('fconId')},callback:function(r,o,s){
	    	if(s&&r.length>0){
				var c=r[0];
				p.beginEdit();
				var f = FConsign.prototype.fields;
				for (var i = 0; i < f.keys.length; i++) {
					var fn = ''+f.keys[i];
					p.set(fn,c.get(fn));
				}
				p.endEdit();
	    	}
	    }});
	};
	this.save=function(){
		var sa = store.getModifiedRecords();
		if(sa.length){			
			var x = ATX(sa,'FPackingList',FPackingList);
			Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'PALI_S'},
				success: function(res){
					var a = XTRA(res.responseXML,'FPackingList',FPackingList);FOSU(store,a,FPackingList);
					this.reloadFcon();					    
					XMG.alert(SYS,M_S);},
				failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
				xmlData:FOSX(x)
			});
		}
		else XMG.alert(SYS,M_NC);
	};	
	this.cp=function(){
		var b = sm.getSelected();
		if(b){
			var e=copy(b);var idx=store.indexOf(b);
			this.stopEditing();store.insert(idx+1,e);e.set('rowAction','N');sm.selectNext();this.startEditing(idx+1,2);
			frm.reCalculate();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.impData=function(){
		var win = new Fos.FileUploadWin(C_IMP_DATA,C_IMP_DATA);		
		win.addButton({text:C_UPLOAD,handler:function(){
			var f = Fos.FileUploadWin.superclass.findById.call(win,'F_UP');
			if(f.getForm().isValid()){
				var vessId='',vessName='',vessNameCn='',voyaId='',voyaName='',loliId='',consId='',consNo='';
				var a=loliS.getRange();
				if(a.length>1){
					vessId=a[1].get('vessId');vessName=a[1].get('vessName');vessNameCn=a[1].get('vessNameCn');
					voyaId=a[1].get('voyaId');voyaName=a[1].get('voyaName');loliId=a[1].get('loliId');
					consId=a[1].get('consId');consNo=a[1].get('consNo');
				}
            	f.getForm().submit({
                	url: SERVICE_URL+'?A=TEMP_I&uf=1&mt=json',
                	waitMsg:'Uploading...',
                	params:{tetyCode:'PALI_IMPORT',fconId:p.get('fconId'),fconNo:p.get('fconNo'),
            		fconContractNo:p.get('fconContractNo'),packId:p.get('packId'),packName:p.get('packName'),
        			cargNameCn:p.get('cargNameCn'),cargNameEn:p.get('cargNameEn'),
        			vessId:vessId,vessName:vessName,vessNameCn:vessNameCn,voyaId:voyaId,voyaName:voyaName,
        			loliId:loliId,consId:consId,consNo:consNo},
                	success: function(f,a){
                		store.reload();
                		XMG.alert(SYS,C_UPLOAD_SUCCESS);
                		win.close();
                	},
                	failure: function(r){XMG.alert(SYS,M_F+r.responseText);}
            	});
        }}});
        win.addButton({text:C_CANCEL,handler:function(){win.close();}},this);
		win.show();
	};
	this.showTran=function(){
		var b = sm.getSelected();
		if(b){var frm = new Fos.TrliWin(b);frm.show();}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchTran=function(){
		var b = sm.getSelected();
		if(b){
			var w = new Fos.TransWin(b);
			w.addButton({text:C_OK,handler:function(){
				var trliTrackType = w.findById('trliTrackType').getValue();
				var trliTranDate = w.findById('trliTranDate').getValue();
				var trliStationId = w.findById('trliStationId').getValue();
				var trliArriveDate = w.findById('trliArriveDate').getValue();
				var trliLocation = w.findById('trliLocation').getValue();
				var stationName = w.stationName;
				var a=sm.getSelections();var ra=[];
				for(var i=0;i<a.length;i++){
					var r=a[i];var rid =GGUID();
					var e = new FTransList({id:rid,trliId:rid,fconId:r.get('fconId'),paliId:r.get('paliId'),
						trliStationIdO:r.get('paliStationIdNow'),trliStationNameO:r.get('paliStationNameNow'),
                        trliLocationO:r.get('paliLocationNow'),
						trliStationId:trliStationId,trliStationName:stationName,trliTranDate:trliTranDate,trliArriveDate:trliArriveDate,
						trliTrackType:trliTrackType,trliLocation:trliLocation,version:'0',rowAction:'N'});
					ra[ra.length]=e;
				}
				Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'TRLI_S'},
					success: function(r){XMG.alert(SYS,M_S);},
					failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
					xmlData:FOSX(ATX(ra,'FTransList',FTransList))
				});
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
	};
	this.batchSpec=function(){
		var r = sm.getSelections();
		if(r.length){
			XMG.prompt(SYS,C_SPEC,function(b,v){
				if(b=='ok'){
					for(var i=0;i<r.length;i++){r[i].set('paliSpec',v);}
				}
			});
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchBl=function(){
		var r = sm.getSelections();
		if(r.length){
			XMG.prompt(SYS,C_BL_NO,function(b,v){
				if(b=='ok'){
					for(var i=0;i<r.length;i++){r[i].set('consMblNo',v);}
				}
			});
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchHarbour=function(){
		var a=sm.getSelections();
		if(a.length){
			var w = new Fos.HarbourWin();
			w.addButton({text:C_OK,handler:function(){
				var harbourId = w.findById('paliHarbourId').getValue();
				var harbourName = w.harbourName;
				for(var i=0;i<a.length;i++){a[i].set('paliHarbourId',harbourId);a[i].set('paliHarbourName',harbourName);}
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchStation=function(){
		var a=sm.getSelections();
		if(a.length){
			var w = new Fos.StationWin();
			w.addButton({text:C_OK,handler:function(){
				var stationId = w.findById('paliStationId').getValue();
				var stationName = w.stationName;
				for(var i=0;i<a.length;i++){
				    a[i].set('paliStationId',stationId);
				    a[i].set('paliStationName',stationName);
				    if(a[i].get('paliTransFlag')!=1){
                        a[i].set('paliStationIdNow',stationId);
                        a[i].set('paliStationNameNow',stationName);
                    }
				}
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchArriveDate=function(){
		var a=sm.getSelections();
		if(a.length){
			var w = new Fos.DateSelWin(C_PACKING_ARRIVE_DATE);
			w.addButton({text:C_OK,handler:function(){
				var dd = w.findById('dd').getValue();
				for(var i=0;i<a.length;i++){a[i].set('paliArriveDate',dd);}
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchLocation=function(){
		var r = sm.getSelections();
		if(r.length){
			XMG.prompt(SYS,C_PACKING_LOCATION,function(b,v){if(b=='ok')  
			 for(var i=0;i<r.length;i++){
			 r[i].set('paliLocation',v);
			 if(r[i].get('paliTransFlag')!=1){r[i].set('paliLocationNow',v);}
			 }});
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchTrackType=function(){
		var a=sm.getSelections();
		if(a.length){
			var w = new Fos.TrackTypeWin(C_TRACK_TYPE);
			w.addButton({text:C_OK,handler:function(){
				var paliTrackType = w.findById('paliTrackType').getValue();
				for(var i=0;i<a.length;i++){a[i].set('paliTrackType',paliTrackType);}
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchTrackTypeP=function(){
		var a=sm.getSelections();
		if(a.length){
			var w = new Fos.TrackTypeWin(C_TRACK_TYPE_P);
			w.addButton({text:C_OK,handler:function(){
				var paliTrackType = w.findById('paliTrackType').getValue();
				for(var i=0;i<a.length;i++){a[i].set('paliTrackTypeP',paliTrackType);}
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchPack=function(){
		var a=sm.getSelections();
		if(a.length){
			var w = new Fos.PackWin();			
			w.addButton({text:C_OK,handler:function(){
				var packId = w.findById('packId').getValue();
				var packName = w.packName;
				for(var i=0;i<a.length;i++){a[i].set('packId',packId);a[i].set('packName',packName);}
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchCargoNameCn=function(){
		var r = sm.getSelections();
		if(r.length){
			XMG.prompt(SYS,C_CARGO_NAME_CN,function(b,v){if(b=='ok')  for(var i=0;i<r.length;i++){r[i].set('cargNameCn',v);}});
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchVess=function(){
		var a=sm.getSelections();
		if(a.length){
			var vessId;var vessName;var vessNameCn;var voyaId;var voyaName;var loliId;var consId;var consNo;var consMblNo;
			var w = new Ext.Window({title:C_BATCH_VESS,modal:true,width:300,
		        height:100,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:{layout:'form',labelWidth:60,bodyStyle:'padding:5px',items:[
		        {fieldLabel:C_VESS,id:'paliStationId',xtype:'combo',store:loliS,displayField:'vessName',valueField:'vessId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
		        	listeners:{scope:this,select:function(c,r,i){
        			vessId=r.get('vessId');
        			vessName=r.get('vessName');
        			vessNameCn=r.get('vessNameCn');
        			voyaId=r.get('voyaId');
        			voyaName=r.get('voyaName');
        			loliId=r.get('loliId');
        			consId=r.get('consId');
        			consNo=r.get('consNo');
        			consMblNo=r.get('consMblNo');
            	}},anchor:'90%'}]
		    }});
			w.addButton({text:C_OK,handler:function(){
				for(var i=0;i<a.length;i++){
					a[i].set('vessId',vessId);
					a[i].set('vessName',vessName);
					a[i].set('vessNameCn',vessNameCn);
					a[i].set('voyaId',voyaId);
					a[i].set('voyaName',voyaName);
					a[i].set('loliId',loliId);
					a[i].set('consId',consId);
					a[i].set('consNo',consNo);
					a[i].set('consMblNo',consMblNo);
				}
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};		
	var cargNameCn=new Ext.form.TextField({name:'cargNameCn',value:p.get('cargNameCn'),width:80,
		listeners:{scope:this,change:function(f,nv,ov){
		var a=store.getRange();
		for(var i=0;i<a.length;i++){
			if(a[i].get(cargNameCn)!=nv)
			a[i].set('cargNameCn',nv);			
		}
	}}
	});
	var packName = new Ext.form.ComboBox({name:'packId',value:p.get('packId'),store:getPACK_S(),displayField:'packName',valueField:'packId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,width:80,
		listeners:{scope:this,select:function(c,r,i){p.set('packName',r.get('packName'));
			var a=store.getRange();
			for(var i=0;i<a.length;i++){
				if(a[i].get('packId')!=r.get('packId'))
				a[i].set('packId',r.get('packId'));	a[i].set('packName',r.get('packName'));			
			}
	}}});
	var cudeType = new Ext.form.ComboBox({name:'fconCudeType',value:p.get('fconCudeType'),store:CUTY_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,width:80});
	var invFlag=new Ext.form.Checkbox({name:'fconInvoiceFlag',checked:p.get('fconInvoiceFlag')=='1',width:20});
	var inspFlag=new Ext.form.Checkbox({name:'fconInspectionFlag',checked:p.get('fconInspectionFlag')=='1',width:20});
	this.saveFcon=function(){		
		p.set('cargNameCn',cargNameCn.getValue());
		p.set('packName',packName.getValue());
		p.set('fconInvoiceFlag',invFlag.getValue());
		p.set('fconInspectionFlag',inspFlag.getValue());
		p.set('fconCudeType',cudeType.getValue());
		var xml=RTX(p,'FContract',FContract);
		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'FCON_S'},scope:this,
			success: function(res,o){
				var c = XTR(res.responseXML,'FContract',FContract);
   				var f = FContract.prototype.fields;
   				for (var i = 0; i < f.keys.length; i++) {var fn = ''+f.keys[i];p.set(fn,c.get(fn));};
				XMG.alert(SYS,M_S);},
			failure: function(res,o){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(xml)
		});
	};
	/*new Ext.KeyMap(Ext.getDoc(), {
		key:'nsdczi',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('T_PALI_'+p.get('id'));
		 	if(tc){
			 	if(tc==T_MAIN.getActiveTab())
			 	{
			 		var tb=this.getTopToolbar();
			 		switch(k) {
			 		case Ext.EventObject.N:
						if(!tb.getComponent('TB_N').disabled) this.add();break;
			 		case Ext.EventObject.S:
						if(!tb.getComponent('TB_S').disabled) this.save();break;
			 		case Ext.EventObject.D:
			 			if(!tb.getComponent('TB_R').disabled) this.removePK();break;
			 		case Ext.EventObject.C:
			 			if(!tb.getComponent('TB_C').disabled) this.cp();break;	 		
			 		case Ext.EventObject.Z:
			 			if(!tb.getComponent('TB_Z').disabled) this.showTran();break;
					case Ext.EventObject.I:
						if(!tb.getComponent('TB_I').disabled) this.impData();break;
					}
			 	}
		 	}
		},stopEvent:true,scope:this});*/
	this.reset=function(){store.reload();};
	Fos.PaliGrid.superclass.constructor.call(this, {id:'G_PALI_'+p.get('id'),
		border:true,autoScroll:true,clicksToEdit:1,view:gv,plugins:[arrived,transFlag,summary],
	    stripeRows:true,store:store,sm:sm,cm:cm,listeners:{scope:this,
			afteredit:function(e){
			var f=e.field;var r=e.record;
	    	if(f=='paliPackages'){r.set('paliPackages',e.value);frm.reCalculate();}	    	
			else if(f=='paliGrossWeight'){r.set('paliGrossWeight',e.value);frm.reCalculate();}
			else if(f=='paliSpec'){r.set('paliCbmC',eval(e.value));}
			else if(f=='paliLocation'){if(r.get('paliTransFlag')!=1){r.set('paliLocationNow',e.value);}}
			else if(f=='paliLength'){r.set('paliTotalLength',e.value*r.get('paliPieces'));}
			else if(f=='paliPieces'){r.set('paliTotalLength',e.value*r.get('paliLength'));}
	    	else if(f=='paliTotalLength'){r.set('paliLength',e.value/r.get('paliPieces'));}
	    }},
	    tbar:[{itemId:'TB_N',text:C_ADD+'(N)',iconCls:'add',disabled:false,scope:this,handler:this.add}, '-', 
			{itemId:'TB_R',text:C_REMOVE+'(D)',iconCls:'remove',disabled:false,scope:this,handler:this.removePK},'-',
			{itemId:'TB_S',text:C_SAVE+'(S)',iconCls:'save',disabled:false,scope:this,handler:this.save},'-',
			{itemId:'TB_C',text:C_COPY_FROM+'(C)',iconCls:'copy',disabled:false,scope:this,handler:this.cp},'-',
			{text:C_BATCH_OP,iconCls:'copy',scope:this,menu: {items: [
            	{text:C_BATCH_SPEC,iconCls:'copy',disabled:false,scope:this,handler:this.batchSpec},
				{text:C_BATCH_HARBOUR,iconCls:'copy',disabled:false,scope:this,handler:this.batchHarbour},
				{text:C_BATCH_STATION,iconCls:'copy',disabled:false,scope:this,handler:this.batchStation},
				{text:C_BATCH_LOCATION,iconCls:'copy',disabled:false,scope:this,handler:this.batchLocation},
				{text:C_BATCH_ARRIVE_DATE,iconCls:'copy',disabled:false,scope:this,handler:this.batchArriveDate},
				{text:C_BATCH_TRACK_TYPE,iconCls:'copy',disabled:false,scope:this,handler:this.batchTrackType},
				{text:C_BATCH_TRACK_TYPE_P,iconCls:'copy',disabled:false,scope:this,handler:this.batchTrackTypeP},
				{text:C_BATCH_PACK,iconCls:'copy',disabled:false,scope:this,handler:this.batchPack},
				{text:C_BATCH_CARGO_NAME_CN,iconCls:'copy',disabled:false,scope:this,handler:this.batchCargoNameCn},
				{text:C_BATCH_VESS,iconCls:'copy',disabled:false,scope:this,handler:this.batchVess},
				{text:C_BATCH_BL,iconCls:'copy',disabled:false,scope:this,handler:this.batchBl},
				{text:C_TRANS_BATCH,iconCls:'redo',disabled:false,handler:this.batchTran}
            	]}},
			{itemId:'TB_Z',text:C_TRANS_LIST+'(Z)',iconCls:'redo',disabled:false,handler:this.showTran},'-',
			{itemId:'TB_I',text:C_IMPORT+'(I)',iconCls:'imp',disabled:false,handler:this.impData},'-',
			{text:C_RESET+'(F5)',iconCls:'refresh',handler:this.reset},
			'-'],
			bbar:['->',
			    {xtype:'tbtext',text:C_CARGO_NAME_CN},cargNameCn,
				{xtype:'tbtext',text:C_PACK},packName,
				{xtype:'tbtext',text:C_INV_FLAG},invFlag,
				{xtype:'tbtext',text:C_INSP_FLAG},inspFlag,
				{xtype:'tbtext',text:C_CUDE_TYPE},cudeType,
				{text:C_SAVE,iconCls:'save',disabled:false,scope:this,handler:this.saveFcon}]
		});
};
Ext.extend(Fos.PaliGrid,Ext.grid.EditorGridPanel);

Fos.ConsPaliGrid = function(consId) {
	var c0={header:C_NO,width:50,dataIndex:"paliId"};
	var c1={header:C_PACKING_LABEL,width:50,dataIndex:"paliLabel"};
	var c2={header:C_PACKING_TRACK_NO,width:50,dataIndex:"paliTrackNo"};
	var c3={header:C_PACKING_LINE_NO,width:30,dataIndex:"paliLineNo"};
	var c4={header:C_SPEC,width:100,dataIndex:"paliSpec"};	
	var c5={header:C_PACKAGES,width:50,dataIndex:"paliPackages",align:'right'};
	var c6={header:C_GW,width:50,dataIndex:"paliGrossWeight",align:'right',renderer:rateRender};
	var c7={header:C_CARGO_DELIVERY_DATE,dataIndex:'paliLoadDate',width:60,renderer:formatDate};
	var c8={header:C_PACKING_EXP_PORT,dataIndex: 'paliHarbourId',width:60,renderer:function(v,m,r){return r.get('paliHarbourName')}};
	var c9={header:C_PACKING_STATION,dataIndex: 'paliStationId',width:60,renderer:function(v,m,r){return r.get('paliStationName')}};
	var c10={header:C_PACKING_ARRIVE_DATE,dataIndex:'paliArriveDate',width:60,renderer:formatDate};
	var c11={header:C_PACKING_LOCATION,width:100,dataIndex:"paliLocation"};
	var c12={header:C_TRACK_TYPE,dataIndex: 'paliTrackType',width:50,renderer:getTRACK_T};
	var c13={header:C_STATION_NOW,width:60,dataIndex:"paliStationNameNow"};
	var c14={header:C_LOCATION_NOW,width:60,dataIndex:"paliLocationNow"};
	var c15={header:C_PACK,dataIndex: 'packId',width:60,renderer:function(v,m,r){return r.get('packName')}};
	var c16={header:C_CARGO_NAME_CN,width:100,dataIndex:"cargNameCn"};
	var c17={header:C_CARGO_NAME_EN,width:100,dataIndex:"cargNameEn"};
	var c18={header:C_VESS,dataIndex:'vessName',width:60};
	var c23={header:C_VESS_NAME_CN,width:100,dataIndex:"vessNameCn"};
	var c24={header:C_VOYA,width:100,dataIndex:"voyaName"};
	var transFlag=CHKCLM(C_TRANS_FLAG,'paliTransFlag');
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm=new Ext.grid.ColumnModel({columns:[sm,c0,c1,c2,c3,c4,c5,c15,c6,c7,c8,c9,c10,c11,c12,transFlag,c18,c23,c24,c13,c14,c16,c17],defaults:{sortable:true,width:100}});
	var store = GS('PALI_Q','FPackingList',FPackingList,'paliId','DESC','','','');
	store.load({params:{mt:'JSON',consId:consId}});
	Fos.ConsPaliGrid.superclass.constructor.call(this, {title:C_PACKING_LIST,id:'G_CONS_PALI_'+consId,closable:true,
		border:true,autoScroll:true,clicksToEdit:1,plugins:[transFlag],stripeRows:true,store:store,sm:sm,cm:cm});
};
Ext.extend(Fos.ConsPaliGrid,Ext.grid.GridPanel);

Fos.PaliTab = function(p) {	
	var store = GS('PALI_Q','FPackingList',FPackingList,'paliId','DESC','paliLabel','','');
	store.baseParams={mt:'JSON',fconId:p.get('fconId')};
	store.load();
	
	var loliS = GS('LOLI_Q','FLoadingList',FLoadingList,'loliId','DESC','','S_LOLI','');
	loliS.load({params:{fconId:p.get('fconId')},callback:function(){
		var e = new FLoadingList({vessId:'',vessName:S_SHIP_NOT,vessNameCn:S_SHIP_NOT,voyaId:'',loliId:'',consId:'',consNo:''});
		loliS.insert(0,e);
	}});
	
	var contractNo = new Ext.form.TextField({value:p.get('fconContractNo'),width:80,disabled:true});
	var contractQuantity = new Ext.form.TextField({value:p.get('fconContractQuantity'),width:80,disabled:true});
	var totalPackages = new Ext.form.TextField({value:p.get('fconTotalPackages'),width:80,disabled:true});
	var totalGW = new Ext.form.TextField({value:p.get('fconTotalGrossWeight'),width:80,disabled:true});
		
	this.reCalculate=function(){
		var sumP=0;var sumG=0;
		var d=store.getRange();
		for(var i=0;i<d.length;i++){
			sumP+=parseFloat(d[i].get('paliPackages'));
			sumG+=parseFloat(d[i].get('paliGrossWeight'));
		}
		totalPackages.setValue(round2(sumP));
		totalGW.setValue(round2(sumG));
	};
	
	var g=new Fos.PaliGrid(p,store,loliS,this);
	Fos.PaliTab.superclass.constructor.call(this, { 
		id:"T_PALI_"+p.get('id'),title:C_PACKING_LIST+'-'+p.get("fconContractNo"),header:false,autoScroll:true,closable:true,
		bodyStyle:'padding:0px 0px 0px',border:true,layout:'fit',
		items:[g],
		tbar:[{xtype:'tbtext',text:C_CONTRACT_NO},contractNo,'-',
			{xtype:'tbtext',text:C_CONTRACT_QUANTITY},contractQuantity,'-',
			{xtype:'tbtext',text:C_PACKING_TOTAL_PACKAGE},totalPackages,'-',
			{xtype:'tbtext',text:C_PACKING_TOTAL_GW},totalGW,'-']
		});
};
Ext.extend(Fos.PaliTab, Ext.FormPanel);

Fos.ExcoWin = function() {    
	this.harbourName='';
	var frm = new Ext.form.FormPanel({labelWidth:60,bodyStyle:'padding:5px',items:[
    	{fieldLabel:C_PACKING_EXP_PORT,id:'harbourId',xtype:'combo',store:getHARB_S(),displayField:'placName',valueField:'placId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
			listeners:{scope:this,select:function(c,r,i){this.harbourName=r.get('placName');}},anchor:'90%'}
    	]});
    Fos.ExcoWin.superclass.constructor.call(this, {title:SYS,modal:true,width:300,
        height:100,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:frm}); 
};
Ext.extend(Fos.ExcoWin,Ext.Window);

Fos.PaliWin = function() {    
	this.harbourName='';
	var frm = new Ext.form.FormPanel({labelWidth:60,bodyStyle:'padding:5px',items:[
		{fieldLabel:C_CHARTER,itemCls:'required',tabIndex:1,id:'charterId',store:getCS(),enableKeyEvents:true,
			xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,
			mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,triggerAction:'all',selectOnFocus:true,anchor:'90%',
		  	listeners:{scope:this,  	
			keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:BF}}},
    	{fieldLabel:C_PACKING_EXP_PORT,id:'harbourId',xtype:'combo',store:getHARB_S(),displayField:'placName',valueField:'placId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
			listeners:{scope:this,select:function(c,r,i){this.harbourName=r.get('placName');}},anchor:'90%'}
    	]});
    Fos.PaliWin.superclass.constructor.call(this, {title:SYS,modal:true,width:300,
        height:130,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:frm}); 
};
Ext.extend(Fos.PaliWin,Ext.Window);

Fos.VoyaLW = function(store,a){	
    var vid=0;
    this.search=function(){
   		a=[];
    	//var vessId=this.find('name','vessId')[0].getValue();
   		//if(vessId) a[a.length]={key:'vessId',value:vessId,op:EQ};
   		if(vid>0) a[a.length]={key:'vessId',value:vid,op:EQ};
   		var voyaName=this.find('name','voyaName')[0].getValue();
   		if(voyaName) a[a.length]={key:'voyaName',value:voyaName,op:EQ};
   		var voyaCarrier=this.find('name','voyaCarrier')[0].getValue();        		
   		if(voyaCarrier) a[a.length]={key:'voyaCarrier',value:voyaCarrier,op:EQ};
   		var shliId=this.find('name','shliId')[0].getValue();        		
   		if(shliId) a[a.length]={key:'shliId',value:shliId,op:EQ};   		
   		var voyaShipDateF=this.find('name','voyaShipDateF')[0].getValue();
   		if(voyaShipDateF) a[a.length]={key:'voyaShipDateF',value:voyaShipDateF.format(DATEF),op:EQ};
     	var voyaShipDateT=this.find('name','voyaShipDateT')[0].getValue();   		
   		if(voyaShipDateT) a[a.length]={key:'voyaShipDateT',value:voyaShipDateT.format(DATEF),op:EQ};
   		
   		var voyaEta=this.find('name','voyaEta')[0].getValue();
   		var voyaEta2=this.find('name','voyaEta2')[0].getValue();
   		if(voyaEta && voyaEta2){
   			a[a.length]={key:'voyaEta',value:voyaEta.format(DATEF),op:GE};
   			a[a.length]={key:'voyaEta',value:voyaEta2.format(DATEF),op:LE};
   		}
   		else if(voyaEta) a[a.length]={key:'voyaEta',value:voyaEta.format(DATEF),op:EQ};
   		
     	var voyaBerthingDate=this.find('name','voyaBerthingDate')[0].getValue();
     	var voyaBerthingDate2=this.find('name','voyaBerthingDate2')[0].getValue();
     	if(voyaBerthingDate && voyaBerthingDate2){
   			a[a.length]={key:'voyaBerthingDate',value:voyaBerthingDate.format(DATEF),op:GE};
   			a[a.length]={key:'voyaBerthingDate',value:voyaBerthingDate2.format(DATEF),op:LE};
   		}
   		else if(voyaBerthingDate) a[a.length]={key:'voyaBerthingDate',value:voyaBerthingDate.format(DATEF),op:EQ};
     	
     	var voyaEtd=this.find('name','voyaEtd')[0].getValue();
     	var voyaEtd2=this.find('name','voyaEtd2')[0].getValue();
     	if(voyaEtd && voyaEtd2){
   			a[a.length]={key:'voyaEtd',value:voyaEtd.format(DATEF),op:GE};
   			a[a.length]={key:'voyaEtd',value:voyaEtd2.format(DATEF),op:LE};
   		}
   		else if(voyaEtd) a[a.length]={key:'voyaEtd',value:voyaEtd.format(DATEF),op:EQ};
   		
   		var voyaSailDate=this.find('name','voyaSailDate')[0].getValue();
   		var voyaSailDate2=this.find('name','voyaSailDate2')[0].getValue();
   		if(voyaSailDate && voyaSailDate2){
   			a[a.length]={key:'voyaSailDate',value:voyaSailDate.format(DATEF),op:GE};
   			a[a.length]={key:'voyaSailDate',value:voyaSailDate2.format(DATEF),op:LE};
   		}
   		else if(voyaSailDate) a[a.length]={key:'voyaSailDate',value:voyaSailDate.format(DATEF),op:EQ}; 		
   		
   		var voyaSailedFlag=this.find('name','voyaSailedFlag')[0].getValue();
   		if(voyaSailedFlag) a[a.length]={key:'voyaSailedFlag',value:'0',op:EQ};
   		var voyaHarbourId=this.find('name','voyaHarbourId')[0].getValue();
   		if(voyaHarbourId) a[a.length]={key:'voyaHarbourId',value:voyaHarbourId,op:EQ};
   		store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
     	store.reload({params:{start:0,limit:25},callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});this.close();
	};
	this.tab = new Ext.Panel({id:'F_VOLP',bodyStyle:'padding:0px',
        items:[{layout:'column',layoutConfig:{columns:3},labelWidth:80,labelAlign:'right',items:[	        	
    			{columnWidth:.5,layout:'form',border:false,labelWidth:100,items:[
					{fieldLabel:C_VESS,tabIndex:1,name:'vessId',store:getVES(),
						xtype:'combo',displayField:'vessNameEn',valueField:'vessId',typeAhead:true,enableKeyEvents:true,						
						mode:'local',tpl:vessTpl,itemSelector:'div.list-item',listWidth:400,triggerAction:'all',selectOnFocus:true,anchor:'95%',
						listeners:{scope:this,
							select:function(c,r,i){vid=r.get('vessId');},
							keydown:{fn:function(f,e){LV(f,e);},buffer:500}}},
	           		{fieldLabel:C_SHIP_DATE_F,tabIndex:3,name:'voyaShipDateF',xtype:'datefield',format:DATEF,anchor:'95%'},
	           		{fieldLabel:C_CARRIER,tabIndex:5,name:'voyaCarrier',store:getCS(),enableKeyEvents:true,
		            	tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
	     					listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custCarrierFlag');},buffer:500}}},
	     			{fieldLabel:C_ETA_V,tabIndex:3,name:'voyaEta',xtype:'datefield',format:DATEF,anchor:'95%'},
	     			{fieldLabel:C_ETD_V,tabIndex:3,name:'voyaEtd',xtype:'datefield',format:DATEF,anchor:'95%'},
	     			{fieldLabel:C_SAIL_DATE_V,tabIndex:3,name:'voyaSailDate',xtype:'datefield',format:DATEF,anchor:'95%'},
	     			{fieldLabel:C_BERTHING_DATE,tabIndex:3,name:'voyaBerthingDate',xtype:'datefield',format:DATEF,anchor:'95%'},
	     			{fieldLabel:C_NOT_SAILED,name:'voyaSailedFlag',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}
	            ]},
    			{columnWidth:.5,layout:'form',border:false,labelWidth:100,items:[
    			    {fieldLabel:C_VOYA,tabIndex:2,name:'voyaName',xtype:'textfield',anchor:'95%'},
	            	{fieldLabel:C_SHIP_DATE_T,tabIndex:4,name:'voyaShipDateT',xtype:'datefield',format:DATEF,anchor:'95%'},
	            	{fieldLabel:C_SHLI,tabIndex:6,name:'shliId',store:getSHLI_S(),xtype:'combo',displayField:'shliName',valueField:'shliId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	            	{fieldLabel:C_TO,name:'voyaEta2',xtype:'datefield',format:DATEF,anchor:'95%'},
	            	{fieldLabel:C_TO,name:'voyaEtd2',xtype:'datefield',format:DATEF,anchor:'95%'},
	            	{fieldLabel:C_TO,name:'voyaSailDate2',xtype:'datefield',format:DATEF,anchor:'95%'},
	            	{fieldLabel:C_TO,name:'voyaBerthingDate2',xtype:'datefield',format:DATEF,anchor:'95%'},
	            	{fieldLabel:C_HARBOUR,tabIndex:3,name:'voyaHarbourId',xtype:'combo',
	            		store:getHARB_S(),displayField:'placName',valueField:'placId',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true}
	            ]}
	    	]}
	    	]});  
    Fos.VoyaLW.superclass.constructor.call(this,{title:C_VOYA,iconCls:'search',modal:true,width:600,minWidth:300,
        minHeight:200,plain:true,bodyStyle:'padding:0px;',buttonAlign:'right',items:this.tab,
        buttons:[{text:C_OK,scope:this,handler:this.search},{text:C_CANCEL,scope:this,handler:this.close}]
	}); 
};
Ext.extend(Fos.VoyaLW,Ext.Window);

Fos.ShipTab = function(p) {
	var store = GS('LOLI_Q','FLoadingList',FLoadingList,'loliId','DESC','');            
	store.load({params:{voyaId:p.get('voyaId')}});
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false,listeners:{scope:this,
    	rowselect:function(sm,row,record){
    		var tb= this.cg.getTopToolbar();
    		tb.getComponent('TB_B').setDisabled(NR(M1_B+M2_V+F_SH+F_R)||record.get('loliStatus')=='1');
    		tb.getComponent('TB_D').setDisabled(NR(M1_B+M2_V+F_SH+F_F)||record.get('loliStatus')=='1'||record.get('rowAction')=='N');
    	}}}); 
	var cm=new Ext.grid.ColumnModel([sm,
		{header:C_RENTER,width:120,dataIndex:"charterName"},
		{header:C_CONTRACT_NO,width:80,dataIndex:'fconContractNo'},
		{header:C_FORCAST_QUANTITY,width:60,align:'right',renderer:rateRender,dataIndex:'fconForcastQuantity'},	
		{header:C_SHIPPED_QUANTITY,width:60,align:'right',renderer:rateRender,dataIndex:'fconShippedQuantity'},
		{header:C_SHIP_CURR_QUANTITY,width:60,align:'right',renderer:rateRender,dataIndex:'loliShippedQuantity',editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},
		
		{header:C_FORCAST_CBM,width:60,align:'right',renderer:rateRender,dataIndex:'fconForcastCbm'},	
		{header:C_SHIPPED_CBM,width:60,align:'right',renderer:rateRender,dataIndex:'fconShippedCbm'},
		{header:C_SHIP_CURR_CBM,width:60,align:'right',renderer:rateRender,dataIndex:'loliShippedCbm',editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},
		
		{header:C_FORCAST_LOAD_DATE,dataIndex:"fconLoadDate",renderer:formatDate},
		{header:C_FORCAST_SHIP_DATE_F,dataIndex:"fconShipDateF",renderer:formatDate},
		{header:C_FORCAST_SHIP_DATE_T,dataIndex:"fconShipDateT",renderer:formatDate},	
		{header:C_POL,dataIndex:"fconPolEn"},
		{header:C_POD,dataIndex:"fconPodEn"},
		{header:C_CARGO_DESC,width:120,dataIndex:"fconCargoDesc"},
		{header:C_CONS_NO,dataIndex:'consNo',width:100,renderer:consRender},
		{header:C_FACT_QUANTITY,width:60,align:'right',renderer:rateRender,dataIndex:'loliFactQuantity'},
		{header:C_REMARKS,width:120,dataIndex:'loliRemarks'}
		]);
	cm.defaultSortable = true;cm.defaultWidth=100;
	this.reCalculate = function(){
		var sum=0;var d=store.getRange();
		for(var i=0;i<d.length;i++){sum = sum + parseFloat(d[i].get('loliShippedQuantity'));}
		this.find('name','voyaShippedQuantity')[0].setValue(sum);
	};	
	this.addFCon=function(){
		var win = new Fos.FConLW(p);
		win.addButton({text:C_OK,scope:this,handler:function(){
			var g = win.findById('G_FCON_LP');
			var r = g.getSelectionModel().getSelections();
			if(r){
				for(var i=0;i<r.length;i++){
					if(store.findBy(function(rec,id){return rec.get('fconId')==r[i].get('fconId')})==-1){
						var ll = new FLoadingList({id:GGUID(),loliId:'0',voyaId:p.get('voyaId'),voyaName:p.get('voyaName'),
							carrierId:p.get('voyaCarrier'),carrierName:p.get('voyaCarrierName'),
							vessId:p.get('vessId'),vessName:p.get('vessName'),vessNameCn:p.get('vessNameCn'),
							voyaShipDateF:p.get('voyaShipDateF'),voyaShipDateT:p.get('voyaShipDateT'),voyaSailDate:p.get('voyaSailDate'),
							fconId:r[i].get('fconId'),fconNo:r[i].get('fconNo'),fconContractNo:r[i].get('fconContractNo'),
							unitId:r[i].get('unitId'),unitName:r[i].get('unitName'),
							fconForcastQuantity:r[i].get('fconForcastQuantity'),
							fconShippedQuantity:r[i].get('fconShippedQuantity'),							
							loliShippedQuantity:parseFloat(r[i].get('fconForcastQuantity')-r[i].get('fconShippedQuantity')).toFixed(4),
							fconForcastCbm:r[i].get('fconForcastCbm'),
							fconShippedCbm:r[i].get('fconShippedCbm'),							
							loliShippedCbm:parseFloat(r[i].get('fconForcastCbm')-r[i].get('fconShippedCbm')).toFixed(4),							
							custName:r[i].get('custName'),charterName:r[i].get('charterName'),
							fconLoadDate:r[i].get('fconLoadDate'),
							fconPolEn:r[i].get('fconPolEn'),fconPodEn:r[i].get('fconPodEn'),
							fconShipDateF:r[i].get('fconShipDateF'),fconShipDateT:r[i].get('fconShipDateT'),
							fconCargoDesc:r[i].get('fconCargoDesc'),
							loliStatus:'0',version:'0'});
							store.insert(0,ll);
							ll.set('rowAction','N');
						}
					}
					this.reCalculate();					
				}
				win.close();
			}},this);
		win.addButton({text:C_CANCEL,handler : function(){win.close();}},this);
		win.show();
	};
	this.removeLoli=function(){var a = sm.getSelections();if(a){FOS_REMOVE_A(a,store);this.reCalculate();}};
	this.save=function(){
		var a = store.getModifiedRecords();
    	var xml = '';
		if(a.length>0){xml = ATX(a,'FLoadingList',FLoadingList);}		
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'LOLI_S'},
			success: function(res){
				var a = XTRA(res.responseXML,'FLoadingList',FLoadingList);
				var fields = FLoadingList.prototype.fields;
				var sa=store.getModifiedRecords();
				for(var i=0;i<sa.length;i++){
					for(var j=0;j<a.length;j++){	
						if(sa[i].get('id')==a[j].get('id')){
							for(var k = 0;k < fields.length;k++){
								var f = fields.items[k];
								var fn=f.name;
								if(fn!='fconLoadDate'&&fn!='fconShipDateF'&&fn!='fconShipDateT'&&fn!='custName'
									&&fn!='charterName'&&fn!='fconPolEn'&&fn!='fconPodEn'&&fn!='fconCargoDesc'&&fn!='tranName')
								sa[i].set(fn,a[j].get(fn));
							}
							break;
						}
					}
				}
				store.suspendEvents();
				store.commitChanges();
				store.resumeEvents();
				XMG.alert(SYS,M_S);},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(xml)
		});
	};
	this.gear=function(){
		var r = sm.getSelected();
		if(r){
			store = new Ext.data.Store({url: SERVICE_URL+'?A='+'FCON_Q',
       			reader: new Ext.data.XmlReader({id:'fconId',record:'FContract'}, FContract)});
			store.load({params:{fconId:r.get('fconId')},callback:function(re,o,s){
   				if(s&&re.length>0){
   					var con=re[0];
   					var rid=GGUID();
					var c = new FConsign({consId:rid,id:rid,consNotifyParty:'SAME AS CONSIGNEE',
					consNo:'N'+rid,consType:'A',consShipType:'BULK',consActionType:'A',consMasterFlag:'1',
					consBizClass:BC_E,consBizType:BT_B,consSource:'0',consDate:new Date(),
					consEtd:p.get('voyaEtd'),consSailDate:con.get('voyaSailDate')?con.get('voyaSailDate'):p.get('voyaEtd'),
					consEta:p.get('voyaEta'),voyaShipDateF:p.get('voyaShipDateF'),voyaShipDateT:p.get('voyaShipDateT'),
					fconShipDateF:con.get('fconShipDateF'),fconShipDateT:con.get('fconShipDateT'),
					consContractNo:r.get('fconContractNo'),consCarrier:r.get('carrierId'),consCarrierName:r.get('carrierName'),
					vessId:r.get('vessId'),vessName:r.get('vessName'),vessNameCn:r.get('vessNameCn'),
					voyaId:r.get('voyaId'),voyaName:r.get('voyaName'),
					consTotalGrossWeight:r.get('loliShippedQuantity'),consTotalMeasurement:r.get('loliShippedCbm'),
					consShippedGrossWeight:r.get('loliShippedQuantity'),consShippedMeasurement:r.get('loliShippedCbm'),					
					consStatus:'0',consStatusBooking:'0',consStatusClearance:'0',
					consStatusSwitchBl:'0',consStatusSplit:'0',consStatusInsp:'0',consStatusCont:'0',
					consStatusCarg:'0',consStatusMbl:'0',consStatusHbl:'0',consStatusBBook:'0',
					consStatusDepa:'0',consStatusDocs:'0',consStatusExp:'0',consStatusAud:'0',consStatusReassign:'0',
					consStatusInCy:'0',consStatusInCfs:'0',consStatusOnBoard:'0',consStatusEir:'0',
					consStatusSendCont:'0',consReassignFrom:'0',consStatusSettlement:'0',
					consServiceRequired:'',consTransFlag:'0',consPartialFlag:'0',
					consPol:con.get('fconPol'),consPolEn:con.get('fconPolEn'),
					consPod:con.get('fconPod'),consPodEn:con.get('fconPodEn'),
					consHarbourId:r.get('voyaHarbourId'),consHarbour:r.get('voyaHarbourName'),
					consOperatorId:con.get('fconOperatorId'),consOperatorName:con.get('fconOperatorName'),
					consSalesRepId:con.get('fconSalesRepId'),consSalesRepName:con.get('fconSalesRepName'),
					custId:con.get('charterId'),custName:con.get('charterName'),custSname:con.get('charterSname'),
					consCargoOwner:con.get('custId'),consCargoOwnerName:con.get('custName'),
					custContact:con.get('custContact'),
					custTel:con.get('custTel'),custFax:con.get('custFax'),					
					unitId:con.get('unitId'),unitCode:con.get('unitName'),
					consShipper:con.get('fconShipper'),consConsignee:con.get('fconConsignee'),
					consCargoDesc:con.get('fconCargoDesc'),tranId:con.get('tranId'),tranCode:con.get('tranName'),
					packId:con.get('packId'),packName:con.get('packName'),consServiceSpec:con.get('fconServiceSpec'),
					consCargoDesc:con.get('fconCargoDesc'),consRemarks:con.get('fconRemarks'),
					consCargoNameCn:con.get('cargNameCn'),consCargoNameEn:con.get('cargNameEn'),
					consCudeType:con.get('fconCudeType'),
					consInvoiceFlag:con.get('fconInvoiceFlag'),consInspectionFlag:con.get('fconInspectionFlag'),
					pateId:con.get('pateIdR'),pateName:con.get('pateNameR'),pateIdP:con.get('pateIdP'),pateNameP:con.get('pateNameP'),
					fconId:r.get('fconId'),loliId:r.get('loliId'),deptId:getCFG('DEFAULT_DEPT_B'),consExternalFlag:'0',
					consFumigateFlag:'0',consQuarantineFlag:'0',consTransferringFlag:'0',version:'0',rowAction:'N'});
					Fos.showConsign(c);
   			}},scope:this});
		}
	};
	this.exp=function(){EXPC('LOLI','&voyaId='+p.get('voyaId'));};
	this.updateToolbar=function(){
    	var b = sm.getSelected();
    	if(b){var tb= this.getTopToolbar();
    		tb.getComponent('TB_D').setDisabled(NR(M1_B+M2_V+F_SH)||b.get('loliStatus')=='1');
		}
    };   
	this.cg=new Ext.grid.EditorGridPanel({header:false,
	id:'G_LOLI',border:true,autoScroll:true,clicksToEdit:1,height:370,
    store:store,sm:sm,cm:cm,listeners:{scope:this,
    	afteredit:function(e){
    		var f=e.field;var r=e.record;
    		if(f=='loliShippedQuantity'){
				if(e.value+r.get('fconShippedQuantity')>r.get('fconForcastQuantity')){
					XMG.alert(SYS,M_SHIPPED_QUANTITY_OVER,function(){
					r.set('loliShippedQuantity',e.originalValue);
					e.grid.stopEditing();e.grid.startEditing(e.row,e.column);});				
				}
			}
			else{this.reCalculate();}
    	}
    },
    tbar:[{text:C_ADD+'(A)',itemId:'TB_A',disabled:NR(M1_B+M2_V+F_SH+F_M),iconCls:'add',scope:this,handler:this.addFCon}, '-',
		{text:C_REMOVE+'(R)',itemId:'TB_B',disabled:NR(M1_B+M2_V+F_SH+F_R),iconCls:'remove',scope:this,handler:this.removeLoli},'-',
		{text:C_SAVE+('(S)'),itemId:'TB_C',disabled:NR(M1_B+M2_V+F_SH+F_M),iconCls:'save',scope:this,handler:this.save},'-',
    	{text:C_GEN_CONS+'(G)',itemId:'TB_D',disabled:NR(M1_B+M2_V+F_SH+F_F),iconCls:'gears',scope:this,handler:this.gear},'-',    	
		{text:C_EXPORT+'(E)',itemId:'TB_E',disabled:NR(M1_B+M2_V+F_SH+F_E),iconCls:'print',scope:this,handler:this.exp}]});		
	/*new Ext.KeyMap(Ext.getDoc(), {
		key:'arsge',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('T_SHIP_'+p.get('voyaId'));
		 	if(tc&&tc==T_MAIN.getActiveTab()){
		 		switch(k) {
		 		case Ext.EventObject.A:
					if(!NR(M1_B+M2_V+F_SH+F_M)) this.addFCon();break;
		 		case Ext.EventObject.R:
					if(!NR(M1_B+M2_V+F_SH+F_R)) this.removeLoli();break;
		 		case Ext.EventObject.S:
					if(!NR(M1_B+M2_V+F_SH+F_M)) this.save();break;			 		
		 		case Ext.EventObject.G:
		 			if(!NR(M1_B+M2_V+F_SH+F_F)) this.gear();break;
				case Ext.EventObject.E:
					if(!NR(M1_B+M2_V+F_SH+F_E)) this.exp();break;
				}
		 	}
		},stopEvent:true,scope:this});*/
	Fos.ShipTab.superclass.constructor.call(this, { 
	id:'T_SHIP_'+p.get('voyaId'),title:C_SHIP_LIST+'-'+p.get("vessName"),header:false,deferredRender:false,autoScroll:true,closable:true,
	labelAlign:'right',bodyStyle:'padding:0px 0px 0px',border:true,layout:'border',
	items: [{layout:'column',region:'north',height:80,title:C_SHIP_INFO,layoutConfig:{columns:4},deferredRender:false,collapsible:true,items:[
			{columnWidth:.25,layout:'form',border:false,labelWidth:80,
                items:[{fieldLabel:C_VESS,name:'vessName',value:p.get('vessName'),disabled:true,xtype:'textfield',anchor:'95%'},
                {fieldLabel:C_HARBOUR,name:'voyaHarbourName',value:p.get('voyaHarbourName'),disabled:true,xtype:'textfield',anchor:'95%'}
                ]},
            {columnWidth:.25,layout:'form',border:false,labelWidth:80,
                items:[{fieldLabel:C_VOYA,name:'voyaName',value:p.get('voyaName'),disabled:true,xtype:'textfield',anchor:'95%'},
                {fieldLabel:C_SHLI,name:'shliName',value:p.get('shliName'),disabled:true,xtype:'textfield',anchor:'95%'}
                ]},
            {columnWidth:.25,layout: 'form',border : false,labelWidth:80,
                items: [{fieldLabel:C_SHIP_DATE_F,name:'voyaCld',value:p.get('voyaCld'),disabled:true,xtype:'datefield',anchor:'95%'},
                {fieldLabel:C_VOYA_QUANTITY,name:'voyaQuantity',value:p.get('voyaQuantity'),disabled:true,xtype:'numberfield',anchor:'95%'}                
                ]},
            {columnWidth:.25,layout: 'form',border : false,labelWidth:80,
                items:[{fieldLabel:C_SHIP_DATE_T,name:'voyaLdd',value:p.get('voyaLdd'),disabled:true,xtype:'datefield',anchor:'95%'},
                {fieldLabel:C_SHIPPED_QUANTITY,name:'voyaShippedQuantity',value:p.get('voyaShippedQuantity'),disabled:true,xtype:'numberfield',anchor:'95%'}
               ]},
            {columnWidth:.5,layout:'form',border:false,labelWidth:80,
                items:[{fieldLabel:C_CARRIER,name:'voyaCarrierName',value:p.get('voyaCarrierName'),disabled:true,xtype:'textfield',anchor:'95%'}]},
            {columnWidth:.5,layout:'form',border:false,labelWidth:80,
                items:[
                {fieldLabel:C_VOYA_PORTS,name:'voyaPorts',value:p.get('voyaPorts'),disabled:true,xtype:'textfield',anchor:'95%'}
                ]}
			]},
			{region:'center',layout:'fit',title:C_SHIP_LIST,border:false,items:[this.cg]}
			]});
};
Ext.extend(Fos.ShipTab, Ext.Panel);


Fos.PaliLookup = function(store,T){
	this.reload=function(){
     	var a=[];
     	a[0]={key:'voyaSailedFlag',value:T=='N'?0:1,op:EQ};
     	var custId=t.find('name','custId')[0].getValue();
     	if(custId) a[a.length]={key:'custId',value:custId,op:EQ};
     	var charterId=t.find('name','charterId')[0].getValue();
     	if(charterId) a[a.length]={key:'charterId',value:charterId,op:EQ};
     	var fconPod=t.find('name','fconPod')[0].getValue();
     	if(fconPod) a[a.length]={key:'fconPod',value:fconPod,op:EQ};
     	var fconContractNo=t.find('name','fconContractNo')[0].getValue();
     	if(fconContractNo) a[a.length]={key:'fconContractNo',value:fconContractNo,op:LI};
     	var paliHarbourId=t.find('name','paliHarbourId')[0].getValue();
     	if(paliHarbourId) a[a.length]={key:'paliHarbourId',value:paliHarbourId,op:EQ};
     	var vessName=t.find('name','vessName')[0].getValue();
     	if(vessName) a[a.length]={key:'vessName',value:vessName,op:LI};
     	var voyaName=t.find('name','voyaName')[0].getValue();
     	if(voyaName) a[a.length]={key:'voyaName',value:voyaName,op:LI};
     	var paliStationId=t.find('name','paliStationId')[0].getValue();
     	if(paliStationId) a[a.length]={key:'paliStationId',value:paliStationId,op:EQ};
     	var paliTransFlag=t.find('name','paliTransFlag')[0].getValue();
     	if(paliTransFlag) a[a.length]={key:'paliTransFlag',value:'1',op:EQ};
     	
     	var paliArriveDate=t.find('name','paliArriveDate')[0].getValue();
     	if(paliArriveDate) a[a.length]={key:'paliArriveDate',value:paliArriveDate.format(DATEF),op:EQ};
     	var paliTrackType=t.find('name','paliTrackType')[0].getValue();
     	if(paliTrackType) a[a.length]={key:'paliTrackType',value:paliTrackType,op:EQ};
     	var vessNameCn=t.find('name','vessNameCn')[0].getValue();
     	if(vessNameCn) a[a.length]={key:'vessNameCn',value:vessNameCn,op:LI};
     	var paliTrackNo=t.find('name','paliTrackNo')[0].getValue();
     	if(paliTrackNo) a[a.length]={key:'paliTrackNo',value:paliTrackNo,op:EQ};     	
     	store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
     	if(T=='N')
        	store.reload({callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});
        else
     		store.reload({params:{start:0,limit:C_PS100},callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});     	
     	this.close();
	};	
	var t = new Ext.Panel({layout:'column',
		items:[{columnWidth:.5,layout:'form',border:false,labelWidth:100,labelAlign:"right",
	    	items:[{fieldLabel:C_SHIPPER,name:'custId',store:getCS(),
	        		xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,enableKeyEvents:true,
	        		mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,triggerAction:'all',selectOnFocus:true,anchor:'90%',
	              	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:500}}},	        	
				{fieldLabel:C_PACKING_TRACK_NO,name:'paliTrackNo',xtype:'textfield',anchor:'90%'},				
				{fieldLabel:C_PACKING_EXP_PORT,name:'paliHarbourId',xtype:'combo',store:getHARB_S(),displayField:'placName',valueField:'placId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
				{fieldLabel:C_VESS,name:'vessName',xtype:'textfield',anchor:'90%'},
				{fieldLabel:C_VESS_NAME_CN,name:'vessNameCn',xtype:'textfield',anchor:'90%'},
				{fieldLabel:C_PACKING_STATION,name:'paliStationId',xtype:'combo',store:getHARB_S(),displayField:'placName',valueField:'placId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
				{fieldLabel:C_TRANS_FLAG,name:'paliTransFlag',xtype:'checkbox',anchor:'90%'}
	        	]},
	      	{columnWidth:.5,layout:'form',border:false,labelWidth:100,labelAlign:"right",
	   		items:[
			{fieldLabel:C_RENTER,name:'charterId',store:getCS(),enableKeyEvents:true,
				tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%',
				listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:BF}}},
	   		    {fieldLabel:C_CONTRACT_NO,name:'fconContractNo',xtype:'textfield',anchor:'90%'},	
	        	{fieldLabel:C_POD,tabIndex:47,name:'fconPod',store:getPS(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%',
              		tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,listeners:{scope:this,keydown:{fn:LP,buffer:BF}}},
              	{fieldLabel:C_VOYA,name:'voyaName',xtype:'textfield',anchor:'90%'},
              	{fieldLabel:C_PACKING_ARRIVE_DATE,name:'paliArriveDate',xtype:'datefield',format:DATEF,anchor:'90%'},
              	{fieldLabel:C_TRACK_TYPE,name:'paliTrackType',xtype:'combo',store:TRACK_T_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'}
	        	]}
			]});
		
    Fos.PaliLookup.superclass.constructor.call(this, {title:C_PALI_QUERY,iconCls:'search',modal:true,width:600,minWidth:300,
        minHeight:200,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:t,
		buttons:[{text:C_OK,scope:this,handler:this.reload},{text:C_CANCEL,scope:this,handler:this.close}]
	}); 
};
Ext.extend(Fos.PaliLookup, Ext.Window);
