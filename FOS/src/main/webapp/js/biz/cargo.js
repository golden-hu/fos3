//货物选择
Fos.CargoLookupWin = function(a,consId) {    
	var store = new Ext.data.GroupingStore({url:SERVICE_URL+'?A='+a,
 		reader: new Ext.data.XmlReader({record:'FCargo'}, FCargo),groupField:'consNo',sortInfo:{field:'cargId', direction:'ASC'}});
    if(a=='CARG_MID_Q')
    	store.load({params:{consMasterId:consId}});
    else
    	store.load({params:{consId:consId}});
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm=new Ext.grid.ColumnModel([sm,
	{header:C_CONS_NO,dataIndex:'consNo',width:80},
	{header:C_MARKS,dataIndex:'cargMarks',width:80},
	{header:C_CARGO_NAME_EN,dataIndex:'cargNameEn',width:80},
	{header:C_PACKAGES,dataIndex:'cargPackageNum',width:60},
	{header:C_PACK,dataIndex:'packId',width:80,renderer:getPACK},	
	{header:C_NW,dataIndex:'cargNetWeight',width:60},
	{header:C_GW,dataIndex:'cargGrossWeight',width:60},	
	{header:C_CBM,dataIndex:'cargMeasurement',width:60},
	{header:C_MBL_NO,dataIndex:'consMblNo',width:80},
	{header:C_HBL_NO,dataIndex:'consHblNo',width:80},
	{header:C_BOOKER,dataIndex:'custName',width:80},
	{header:C_MANU_NO,dataIndex:'cargManuNo',width:80},
	{header:C_SPEC,dataIndex:'cargSpec',width:80},	
	{header:C_CARGO_NAME_CN,dataIndex:'cargNameCn',width:80},
	{header:C_HS_CODE,dataIndex:'cargNo',width:100},
	{header:C_UNIT,dataIndex:'cargUnit',width:100}]);
	cm.defaultSortable = true;
    var g = new Ext.grid.GridPanel({ 
    id:'G_CARG_LOOKUP',iconCls:'gen',header:false,height:300,width:600,store:store,sm:sm,cm:cm,loadMask: true});	
    Fos.CargoLookupWin.superclass.constructor.call(this,{title:C_CARGO_SEL,modal:true,layout:'fit',width:600,minWidth:300,
        minHeight:200,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:[{layout:'fit',border:false,
        items: [g]}]}); 
};
Ext.extend(Fos.CargoLookupWin,Ext.Window);