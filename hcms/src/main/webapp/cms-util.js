var wl=window.location.href;
var idx=window.location.href.lastIndexOf("/");
CMS_URL='http://www.hitisoft.com:8080/hcms/';
var imgRender = function(v,p,r){data.url=CMS_URL+v+'/'+r.get('name');	return '<img src="' + imgID + '">';};
HCMS.CB=function(){	this.data=[];};
function round2(v){return (Math.round(v*100)/100)};
function round4(v){return (Math.round(v*10000)/10000)};
HCMS.CB.prototype = {
	add:function(e){this.data[this.data.length]=e;},
	addElements:function(els){for(var i=0; i<els.length;i++) {this.data[this.data.length] = els[i];}},
	clear:function(){this.data=[];}
};
Ext.ux.HTMLEditorToolbar = Ext.extend(Ext.Toolbar, {
	initComponent: function() {
    	Ext.ux.HTMLEditorToolbar.superclass.initComponent.call(this);
    		this.tools = new Ext.util.MixedCollection(false, function(tool) {
      		return tool.itemId || tool.id || Ext.id();});
	},
	addTools: function(tools) {
		tools = (tools instanceof Array) ? tools : [tools];
		for (var i = 0, len = tools.length; i < len; i++) {
			this.tools.add(tools[i]);
		}
	},
	insertTools: function(index, tools) {
		tools = (tools instanceof Array) ? tools : [tools];
			for (var i = 0, len = tools.length; i < len; i++) {
		this.tools.insert(index + i, tools[i]);
		}
	},
	insertToolsBefore: function(itemId, tools) {
		var index = this.tools.indexOfKey(itemId);
		this.insertTools(index, tools);
	},
	insertToolsAfter: function(itemId, tools) {
		var index = this.tools.indexOfKey(itemId) + 1;
		this.insertTools(index, tools);
	},
	renderTool: function(tool) {
		if (typeof tool == "object" && tool.xtype && tool.xtype == "tbcombo") {
			this.addItem(Ext.ComponentMgr.create(tool));
		}
		else {
			this.add(tool);
		}
	},
	onRender: function(ct, position) {
		Ext.ux.HTMLEditorToolbar.superclass.onRender.call(this, ct, position);
		this.tools.each(this.renderTool, this);
	}  
});

Ext.ux.HTMLEditorToolbar.ComboBox = function(config) {  
	Ext.apply(this, config);
	var selEl = document.createElement("select");
	selEl.className = this.cls;
	for (var i = 0, len = this.opts.length; i < len; i++) {
		var opt = this.opts[i];
    	var optEl = document.createElement('option');
    	optEl.text = opt.text;
		optEl.value = opt.value;
		if (opt.selected) {
			optEl.selected = true;
			this.defaultValue = opt.value;
		}
		selEl.options.add(optEl);
	}
	if (! this.defaultValue) {
		this.defaultValue = this.opts[0].value;
	}
	Ext.ux.HTMLEditorToolbar.ComboBox.superclass.constructor.call(this, selEl);  
};
Ext.extend(Ext.ux.HTMLEditorToolbar.ComboBox, Ext.Toolbar.Item, {
	render: function(td) {
		Ext.ux.HTMLEditorToolbar.ComboBox.superclass.render.call(this, td);
		Ext.EventManager.on(this.el, 'change', this.handler, this.scope);    
	}  
});
Ext.ComponentMgr.registerType('tbcombo', Ext.ux.HTMLEditorToolbar.ComboBox);
Ext.ux.HTMLEditor = Ext.extend(Ext.form.HtmlEditor, {
	toolbarItems: [
		'fonts',
		'allformats',
		'allfontsizes',
		'allcolors',
		'allalignments',
	  	'alllinks',
	  	'alllists',
	  	'sourceedit'
	],
	toolbarItemExcludes: [],
	initComponent: function() {
	    Ext.ux.HTMLEditor.superclass.initComponent.call(this);
	    this.addEvents({editorevent: true});
		for (var i = 0, iMax = this.toolbarItemExcludes.length; i < iMax; i++) {
			var item = this.toolbarItemExcludes[i].toLowerCase();
			for (var j = 0, jMax = this.toolbarItems.length; j < jMax; j++) {
	        	if (this.toolbarItems[j] == item) {
	          		this.toolbarItems.splice(j, 1);
	          		break;
	        	}
	      	}
	    }
		this.tb = new Ext.ux.HTMLEditorToolbar();
	    this.createTools(this.toolbarItems);        
	},
	createFontOptions: function() {
		var opts = [], ffs = this.fontFamilies, ff;
		for (var i = 0, len = ffs.length; i < len; i++) {
			ff = ffs[i];
			fflc = ff.toLowerCase();
			var opt = {text: ff, value: fflc};
			if (fflc == this.defaultFont) opt.selected = true;
			opts.push(opt);
		}
		return opts;
	},
	btn: function(id, toggle, queryState, handler) {
		return {
			itemId: id,
			cls: 'x-btn-icon x-edit-' + id,
			enableToggle: toggle !== false,
			queryState: queryState !== false,
			handler: handler || this.relayBtnCmd,
			scope: this,
			clickEvent: 'mousedown',
			tooltip: this.buttonTips[id] || undefined,
			tabIndex: -1
		};
	},
	createTools: function(toolbarItems) {
		toolbarItems = (toolbarItems instanceof Array) ? toolbarItems : [toolbarItems];
		for (var i = 0, len = toolbarItems.length; i < len; i++) {
			var item = toolbarItems[i];
			switch (item) {
			case 'fonts':
				if (! Ext.isSafari) {
					this.tb.addTools({
						itemId:'fontname',xtype:'tbcombo',cls:'x-font-select',opts:this.createFontOptions(),
						queryValue: true,handler: function(event, el) {
                			this.relayCmd('fontname', el.value);this.deferFocus();},scope: this});
				}
				break;
			case 'bold':
				this.tb.addTools(this.btn('bold'));
				break;
			case 'italic':
				this.tb.addTools(this.btn('italic'));
				break;
			case 'underline':
				this.tb.addTools(this.btn('underline'));
				break;
			case 'allformats':
				this.createTools(['-', 'bold', 'italic', 'underline']);
				break;
			case 'increasefontsize':
				this.tb.addTools(this.btn('increasefontsize', false, false, this.adjustFont));
				break;
			case 'decreasefontsize':
				this.tb.addTools(this.btn('decreasefontsize', false, false, this.adjustFont));
				break;
			case 'allfontsizes':
				this.createTools(['-', 'increasefontsize', 'decreasefontsize']);
				break;
			case 'forecolor':
				this.tb.addTools({
					itemId: 'forecolor',cls: 'x-btn-icon x-edit-forecolor',
						clickEvent: 'mousedown',tooltip:this.buttonTips['forecolor'],
						tabIndex: -1,
						menu: new Ext.menu.ColorMenu({allowReselect:true,focus: Ext.emptyFn,
							value: '000000',plain: true,
							selectHandler: function(cp, color) {
								this.execCmd('forecolor', Ext.isSafari || Ext.isIE ? '#' + color : color);
								this.deferFocus();
							},scope: this,
							clickEvent:'mousedown'})});
				break;
			case 'backcolor':
				this.tb.addTools({
					itemId: 'backcolor',cls: 'x-btn-icon x-edit-backcolor',clickEvent: 'mousedown',
						tooltip: this.buttonTips['backcolor'],tabIndex: -1,
						menu: new Ext.menu.ColorMenu({focus: Ext.emptyFn,value: 'FFFFFF',plain: true,allowReselect: true,
							selectHandler: function(cp, color) {
								if (Ext.isGecko) {
									this.execCmd('useCSS', false);
									this.execCmd('hilitecolor', color);
									this.execCmd('useCSS', true);
									this.deferFocus();
								}
								else {
									this.execCmd(Ext.isOpera ? 'hilitecolor' : 'backcolor',
										Ext.isSafari || Ext.isIE ? '#' + color : color);
									this.deferFocus();
								}
							},scope: this,clickEvent: 'mousedown'})});
				break;
			case 'allcolors':
				this.createTools(['-', 'forecolor', 'backcolor']);
				break;
			case 'justifyleft':
				this.tb.addTools(this.btn('justifyleft'));
				break;
			case 'justifycenter':
				this.tb.addTools(this.btn('justifycenter'));
				break;
			case 'justifyright':
				this.tb.addTools(this.btn('justifyright'));
				break;
			case 'allalignments':
				this.createTools(['-', 'justifyleft', 'justifycenter', 'justifyright']);
				break;
			case 'link':
				if (! Ext.isSafari) {
					this.tb.addTools(this.btn('createlink', false, false, this.createLink));
				}
				break;
			case 'alllinks':
				if (! Ext.isSafari) {
					this.createTools(['-', 'link']);
				}
				break;
			case 'orderedlist':
				if (! Ext.isSafari) {this.tb.addTools(this.btn('insertorderedlist'));}
          		break;
			case 'unorderedlist':
				if (! Ext.isSafari) {this.tb.addTools(this.btn('insertunorderedlist'));}
				break;
			case 'alllists':
				if (! Ext.isSafari) {this.createTools(['-', 'orderedlist', 'unorderedlist']);}
				break;
			case 'sourceedit':
				if (! Ext.isSafari) {
					this.tb.addTools(this.btn('sourceedit', true, false, function(btn) {this.toggleSourceEdit(btn.pressed);}));
				}
				break;
			default:
				this.tb.addTools(item);
			}
		}
	},
	createToolbar: function() {
		this.tb.render(this.wrap.dom.firstChild);
		this.tb.el.on('click', function(e) {
		e.preventDefault();
    });},
	getDocMarkup: function() {
		var markup = '<html><head><style type="text/css">body{border:0;margin:0;padding:3px;height:98%;cursor:text;}</style>';
		if (this.styles) {
			for (var i = 0; i < this.styles.length; i++) {
				markup = markup + '<link rel="stylesheet" type="text/css" href="' + this.styles[i] + '" />';
			}
		}
		markup = markup + '</head><body></body></html>';
		return markup;
	},
	onEditorEvent: function(e) {
    	Ext.ux.HTMLEditor.superclass.onEditorEvent.call(this, e);
    	this.fireEvent('editorevent', this, e);    
	},
	updateToolbar: function() {
		if (! this.activated) {this.onFirstFocus();return;}
		this.tb.items.each(function(item) {
			if (item.queryState) {
	        	item.toggle(this.doc.queryCommandState(item.itemId));
			}
			else if (item.queryEnabled) {
				item.setDisabled(! this.doc.queryCommandEnabled(item.itemId));
			}
			else if (item.xtype = "tbcombo" && item.queryValue) {
				var value = (this.doc.queryCommandValue(item.itemId) || item.defaultValue).toLowerCase();
				if (value != item.el.value) {
					item.el.value = value;
				}
			}
		}, this);
		Ext.menu.MenuMgr.hideAll();
		this.syncValue();
	}
});
Ext.reg('htmleditor',Ext.ux.HTMLEditor);

Ext.ux.HTMLEditorImage = function(){
	var editor;
	var win;
	var tabs;
	var imageBrowser;
	var constrained = false;
	var originalWidth = 0;
	var originalHeight = 0;
	var getSelectedImage = function(){
		if (Ext.isIE) {
			return function(){
				var selection = editor.doc.selection;
				if (selection.type == "Control") {
					var element = selection.createRange()(0);
					if (element.nodeName.toLowerCase() == 'img') {
						return element;
					}
		     	}
				return null;
			}
		}
		else{
			return function(){
				var selection = editor.win.getSelection();
				if (selection.focusOffset == selection.anchorOffset + 1) {
					var element = selection.focusNode.childNodes[selection.focusOffset - 1];
					if (element.nodeName.toLowerCase() == 'img') {
						return element;
					}
				}
				return null;
			}
		}
	}();
	var setImageDetails = function(data) {
		//tabs.form.findField('src').setValue(data.url);
		tabs.form.findField('src').setValue(CMS_URL+data.path+'/'+data.fileName);
		tabs.form.findField('alt').setValue(data.name);
		tabs.form.findField('width').setValue(data.width);
		tabs.form.findField('height').setValue(data.height);
		tabs.form.findField('border').setValue(data.border);
		tabs.form.findField('hspace').setValue(data.hspace);
		tabs.form.findField('vspace').setValue(data.vspace);
		tabs.form.findField('align').setValue(data.align);
		sourceChanged();
	};
	var createImage = function() {
		var element = document.createElement("img");
		element.src = tabs.form.findField('src').getValue();
		element.alt = tabs.form.findField('alt').getValue();
		element.style.width = tabs.form.findField('width').getValue() + "px";
		element.style.height = tabs.form.findField('height').getValue() + "px";
		element.hspace = tabs.form.findField('hspace').getValue();
		element.vspace = tabs.form.findField('vspace').getValue();
		element.align = tabs.form.findField('align').getValue();
		element.border = tabs.form.findField('border').getValue();
		return element;
	};
	var insertImageByBrowser = function(){
		if (Ext.isIE) {
			return function() {
				var selection = editor.doc.selection;
				var range = selection.createRange();
				range.pasteHTML(createImage().outerHTML);
			};   
		}
		else {
			return function() {
				var selection = editor.win.getSelection();
				if (!selection.isCollapsed) {
					selection.deleteFromDocument();
				}
				selection.getRangeAt(0).insertNode(createImage());
			};
		}
	}();
	var insertImage = function(){
		editor.win.focus();
		insertImageByBrowser();
		editor.updateToolbar();
		editor.deferFocus();
	};
	var sourceChanged = function(){
		var disabled = (tabs.form.findField('src').getValue() == "");
		Ext.getCmp('insert-btn').setDisabled(disabled);
	};
	var openImageWindow = function() {
		tabs = new Ext.FormPanel({labelWidth:60,labelAlign:'right',width:400,
			items: [
				{xtype:'trigger',fieldLabel:'URL',triggerClass:'x-form-search-trigger',anchor:'95%',
					name: 'src',allowBlank: false,listeners: {'change':{fn: sourceChanged,scope:this}},
					onTriggerClick: function() {
          					imageBrowser = new Hcms.ImageBrowser({width:800,height:600,callback:setImageDetails});
          					imageBrowser.show();
        				}
        			},
        			{xtype: 'textfield',fieldLabel:'Alt',name:'alt',anchor:'95%'},
        			{xtype: 'textfield',fieldLabel:'Title',name:'title',anchor:'95%'},
        			{xtype: "numberfield",fieldLabel:'Width',name:'width',width:50,allowDecimals: false,allowNegative: false},
				{xtype: "numberfield",fieldLabel:'Height',name:'height',width: 50,allowDecimals: false,allowNegative:false}, 
				{xtype: "numberfield",fieldLabel:'Border',name:'border',width: 50,allowDecimals: false,allowNegative:false},
				{xtype: "numberfield",fieldLabel:'HSpace',name:'hspace',width: 50,allowDecimals: false,allowNegative:false},
				{xtype: "numberfield",fieldLabel:'VSpace',name:'vspace',width: 50,allowDecimals: false,allowNegative:false},
				{xtype:'combo',fieldLabel:'Align',name:'align',width: 50,store:ALIGN_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true}
          		]
		});
   		win = new Ext.Window({title: 'Insert/Edit Image',
     		closable:true,modal:true,closeAction:'hide',width: 400,height: 350,
     		plain: true,layout:'fit',border: false,items: tabs,
     	buttons: [
     	    {text:'Insert',id:'insert-btn',disabled:true,handler: function() {win.close();insertImage();}}, 
     		{text: 'Close',handler:function(){win.hide();}}],
 		listeners: {
 			'show': function(){
 				tabs.form.reset();
         		var element = getSelectedImage();
         		if (element) {
           			tabs.form.findField('src').setValue(element.src);
           			tabs.form.findField('alt').setValue(element.alt);
           			tabs.form.findField('border').setValue(element.border);
           			tabs.form.findField('hspace').setValue(element.hspace);
           			tabs.form.findField('hspace').setValue(element.hspace);
           			tabs.form.findField('vspace').setValue(element.vspace);
           			tabs.form.findField('width').setValue(element.style.width);
           			tabs.form.findField('height').setValue(element.style.height);
           			
         		}
 			}
 		}});
		win.show(this);
	}
	return {init: function(htmlEditor) {
		editor = htmlEditor;
		editor.tb.insertToolsAfter('createlink',{
			itemId:'image',cls:'x-btn-icon x-edit-image',handler:openImageWindow,scope: this,clickEvent: 'mousedown',
     		tooltip: {title: 'Image',text: 'Insert/edit an image.',cls: 'x-html-editor-tip'}
		});
		}
	}
};

Ext.ux.HTMLEditorUndoRedo = function(size) {
	var editor;
	var volume = size || -1;
	var history = new Array();
	var index = 0;
	var placeholder = 0;
	var count = 0;
	var ignore = false;
	var updateToolbar = function() {
		editor.tb.items.map.undo.setDisabled(index < 2);
		editor.tb.items.map.redo.setDisabled(index == count);
	}
	var reset = function() {
		editor.getEditorBody().innerHTML = history[index].content;
		resetBookmark();
	}
	var resetElement = function() {
		editor.el.dom.value = history[index].content;
		resetBookmark();
	}
	var resetBookmark = function() {
		var range = editor.doc.selection.createRange();
		range.moveToBookmark(history[index].bookmark);
		range.select();
	}
	return {
		init: function(htmlEditor) {
		editor = htmlEditor;
		editor.tb.insertToolsBefore('sourceedit', ['-',
			{itemId: 'undo',cls: 'x-btn-icon x-edit-undo',queryEnabled:!Ext.isIE,
				handler: Ext.isIE ? this.undo : editor.relayBtnCmd,
				scope:Ext.isIE?this:editor,clickEvent:'mousedown',
				tooltip: {
					title: 'Undo (Ctrl+Z)',
					text: 'Undo the last edit.',
					cls: 'x-html-editor-tip'
				}
			}, 
			{itemId: 'redo',cls: 'x-btn-icon x-edit-redo',queryEnabled: ! Ext.isIE,
				handler: Ext.isIE ? this.redo : editor.relayBtnCmd,
				scope: Ext.isIE ? this : editor,
				clickEvent: 'mousedown',
				tooltip: {title: 'Redo (Ctrl+Y)',text: 'Redo the last edit.',cls: 'x-html-editor-tip'}
			}, '-']);
		if (Ext.isIE) {
			editor.on('render', function() {
				var keyCommands = [
					{key: 'z',ctrlKey: true,fn: this.undo,scope: this}, 
					{key: 'y',ctrlKey: true,fn: this.redo,scope: this}];
				new Ext.KeyMap(editor.getEditorBody(), keyCommands);
				editor.el.on('keyup', this.record, this);
				}, this);
			editor.on('sync', function() {
				if (ignore) {ignore = false;}
				else {this.record();}}, this);
			editor.on('editmodechange', function() {
				if (editor.sourceEditMode) {placeholder = index;}
				else {
					if (index > placeholder) {
						if (placeholder < 0) {
							placeholder == 0;
							history[placeholder] = history[index];
						}
						else if (history[placeholder].content != history[index].content) {
							placeholder++;
							history[placeholder] = history[index];
						}
						index = placeholder;
						count = index;
					}
					else {
						count = placeholder;
					}
					updateToolbar();
				}} , this);
			}
		},
		record: function() {
			var content = editor.el.dom.value;
			if (index == 0 || history[index].content != content) {
				if (count == volume) {
					history.shift();
					placeholder--;
				}
				else {
					index++;
				}
				history[index] = {
					content: content,
					bookmark: editor.doc.selection.createRange().getBookmark()
				};
				count = index;
			}
			updateToolbar();
		},
		undo: function() {
			if (index > 1) {
				index--;
				if (editor.sourceEditMode) {
					resetElement();
				}
				else {
					reset();
					ignore = true;
					editor.updateToolbar();
					editor.deferFocus();
				}
				updateToolbar();
			}
		},
		redo: function() {
			if (index < count) {
				index++;
				if (editor.sourceEditMode) {
					resetElement();
				}
				else {
					reset();
					ignore = true;
					editor.updateToolbar();
					editor.deferFocus();
				}
				updateToolbar();
			}
		}
	}
};

var Base64 = {
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	encode : function (input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;	 
		//input = Base64._utf8_encode(input);
		while (i < input.length) {	 
			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);	 
			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;	 
			if (isNaN(chr2)) {enc3 = enc4 = 64;} else if (isNaN(chr3)) {enc4 = 64;}	 
			output = output +
			this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
			this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);	 
		}
		return output;
	},
	decode : function (input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;	 
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");	 
		while (i < input.length) {	 
			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));	 
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;	 
			output = output + String.fromCharCode(chr1);	 
			if (enc3 != 64) {output = output + String.fromCharCode(chr2);}
			if (enc4 != 64) {output = output + String.fromCharCode(chr3);}	 
		}	 
		//output = Base64._utf8_decode(output);	 
		return output;	 
	},	 
	_utf8_encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";	 
		for (var n = 0; n < string.length; n++) {	 
			var c = string.charCodeAt(n);	 
			if (c < 128) {utftext += String.fromCharCode(c);}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}	 
		}	 
		return utftext;
	},
	_utf8_decode : function (utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;	 
		while ( i < utftext.length ) {	 
			c = utftext.charCodeAt(i);	 
			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			}
			else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			}
			else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}	 
		}	 
		return string;
	}	 
};

Ext.ux.HTMLEditorFlash = function(){
	var editor;
	var win;
	var tabs;
	var imageBrowser;
	var constrained = false;
	var originalWidth = 0;
	var originalHeight = 0;
	var getSelectedImage = function(){
		if (Ext.isIE) {
			return function(){
				var selection = editor.doc.selection;
				if (selection.type == "Control") {
					var element = selection.createRange()(0);
					if (element.nodeName.toLowerCase() == 'object') {
						return element;
					}
		     	}
				return null;
			}
		}
		else{
			return function(){
				var selection = editor.win.getSelection();
				if (selection.focusOffset == selection.anchorOffset + 1) {
					var element = selection.focusNode.childNodes[selection.focusOffset - 1];
					if (element.nodeName.toLowerCase() == 'object') {
						return element;
					}
				}
				return null;
			}
		}
	}();
	var setImageDetails = function(data) {
		tabs.form.findField('src').setValue(data.url);
		tabs.form.findField('width').setValue(data.width);
		tabs.form.findField('height').setValue(data.height);
		sourceChanged();
	};
	var createImage = function() {
		/*
		var element = document.createElement("embed");
		element.src = tabs.form.findField('src').getValue();
		element.style.width = tabs.form.findField('width').getValue() + "px";
		element.style.height = tabs.form.findField('height').getValue() + "px";
		element.quality  = "high";
		element.type  = "application/x-shockwave-flash";
		return element;
		*/		
				
		var object=document.createElement("object");
        object.style.width=tabs.form.findField('width').getValue() + "px";
        object.style.height=tabs.form.findField('height').getValue() + "px";
        object.setAttribute("codeBase","http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0");  
        object.setAttribute("classid","clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");  
        var p1=document.createElement("PARAM");  
        p1.setAttribute("NAME","movie");  
        p1.setAttribute("VALUE",tabs.form.findField('src').getValue());
        object.appendChild(p1);
        var p2=document.createElement("PARAM");  
        p2.setAttribute("NAME","quality");  
        p2.setAttribute("VALUE","high");        
        object.appendChild(p2);
        
        var element = document.createElement("embed");
		element.src = tabs.form.findField('src').getValue();
		element.style.width = tabs.form.findField('width').getValue() + "px";
		element.style.height = tabs.form.findField('height').getValue() + "px";
		element.quality  = "high";
		element.type  = "application/x-shockwave-flash";
		element.pluginspage="http://www.macromedia.com/go/getflashplayer";
		object.appendChild(element);
		
        return object;
	};
	var insertImageByBrowser = function(){
		if (Ext.isIE) {
			return function() {
				var selection = editor.doc.selection;
				var range = selection.createRange();
				range.pasteHTML(createImage().outerHTML);
			};   
		}
		else {
			return function() {
				var selection = editor.win.getSelection();
				if (!selection.isCollapsed) {
					selection.deleteFromDocument();
				}
				selection.getRangeAt(0).insertNode(createImage());
			};
		}
	}();
	var insertImage = function(){
		editor.win.focus();
		insertImageByBrowser();
		editor.updateToolbar();
		editor.deferFocus();
	};
	var sourceChanged = function(){
		var disabled = (tabs.form.findField('src').getValue() == "");
		Ext.getCmp('insert-btn').setDisabled(disabled);
	};
	var openImageWindow = function() {
		//if (!win){
			tabs = new Ext.FormPanel({labelWidth:60,labelAlign:'right',width:400,
				items: [
					{xtype:'trigger',fieldLabel:'URL',triggerClass:'x-form-search-trigger',anchor:'95%',
						name: 'src',allowBlank: false,listeners: {'change':{fn: sourceChanged,scope:this}},
						onTriggerClick: function() {
           					//if(!imageBrowser) {
           						imageBrowser = new Hcms.ImageBrowser({width:600,height:400,callback:setImageDetails});
           					//}
           					imageBrowser.show();
         				}
         			},
         			{xtype: "numberfield",fieldLabel:'Width',name:'width',width:50,allowDecimals: false,allowNegative: false},
					{xtype: "numberfield",fieldLabel:'Height',name:'height',width: 50,allowDecimals: false,allowNegative:false}
           		]
			});
	   		win = new Ext.Window({title: 'Insert/Edit Flash',
	     		closable:true,modal:true,closeAction:'hide',width: 400,height: 350,
	     		plain: true,layout:'fit',border: false,items: tabs,
	     	buttons: [
	     	    {text:'Insert',id:'insert-btn',disabled:true,handler: function() {win.close();insertImage();}}, 
	     		{text: 'Close',handler:function(){win.hide();}}],
	 		listeners: {
	 			'show': function(){
	 				tabs.form.reset();
	         		var element = getSelectedImage();
	         		if (element) {
	           			tabs.form.findField('src').setValue(element.src);
	           			tabs.form.findField('width').setValue(element.style.width);
	           			tabs.form.findField('height').setValue(element.style.height);	           			
	         		}
	 			}
	 		}});
		//}
		win.show(this);
	}
	return {init: function(htmlEditor) {
		editor = htmlEditor;
		editor.tb.insertToolsAfter('image',{
			itemId:'flash',cls:'x-btn-icon  x-edit-flash',handler:openImageWindow,scope: this,clickEvent: 'mousedown',
     		tooltip: {title: 'Flash',text: 'Insert/edit an flash.',cls: 'x-html-editor-tip'}
		});
		}
	}
};
Ext.form.CKEditor = function(config){
    this.config = config;
    Ext.form.CKEditor.superclass.constructor.call(this, config);
};

Ext.extend(Ext.form.CKEditor, Ext.form.TextArea,  {
    onRender : function(ct, position){
        if(!this.el){
            this.defaultAutoCreate = {
                tag: "textarea",
                autocomplete: "off"
            };
        }
        Ext.form.TextArea.superclass.onRender.call(this, ct, position);
		CKEDITOR.replace(this.id, this.config.CKConfig);
    },
	
    setValue : function(value){
        Ext.form.TextArea.superclass.setValue.apply(this,[value]);
		CKEDITOR.instances[this.id].setData( value );
    },

    getValue : function(){
		CKEDITOR.instances[this.id].updateElement();
		return CKEDITOR.instances[this.id].getData();
    },

    getRawValue : function(){
		CKEDITOR.instances[this.id].updateElement();	
		return Ext.form.TextArea.superclass.getRawValue(this);
    },
    destroyInstance: function(){
        if (CKEDITOR.instances[this.id]) {
            delete CKEDITOR.instances[this.id];
        }
    } 
    
});
Ext.reg('ckeditor', Ext.form.CKEditor);