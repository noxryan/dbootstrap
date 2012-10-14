//>>built
require({cache:{"url:dijit/templates/TreeNode.html":'<div class="dijitTreeNode" role="presentation"\n\t><div data-dojo-attach-point="rowNode" class="dijitTreeRow dijitInline" role="presentation"\n\t\t><div data-dojo-attach-point="indentNode" class="dijitInline"></div\n\t\t><img src="${_blankGif}" alt="" data-dojo-attach-point="expandoNode" class="dijitTreeExpando" role="presentation"\n\t\t/><span data-dojo-attach-point="expandoNodeText" class="dijitExpandoText" role="presentation"\n\t\t></span\n\t\t><span data-dojo-attach-point="contentNode"\n\t\t\tclass="dijitTreeContent" role="presentation">\n\t\t\t<img src="${_blankGif}" alt="" data-dojo-attach-point="iconNode" class="dijitIcon dijitTreeIcon" role="presentation"\n\t\t\t/><span data-dojo-attach-point="labelNode" class="dijitTreeLabel" role="treeitem" tabindex="-1" aria-selected="false"></span>\n\t\t</span\n\t></div>\n\t<div data-dojo-attach-point="containerNode" class="dijitTreeContainer" role="presentation" style="display: none;"></div>\n</div>\n',
"url:dijit/templates/Tree.html":'<div class="dijitTree dijitTreeContainer" role="tree">\n\t<div class="dijitInline dijitTreeIndent" style="position: absolute; top: -9999px" data-dojo-attach-point="indentDetector"></div>\n</div>\n'}});
define("dijit/Tree","dojo/_base/array,dojo/_base/connect,dojo/cookie,dojo/_base/declare,dojo/Deferred,dojo/promise/all,dojo/dom,dojo/dom-class,dojo/dom-geometry,dojo/dom-style,dojo/_base/event,dojo/errors/create,dojo/fx,dojo/_base/kernel,dojo/keys,dojo/_base/lang,dojo/on,dojo/topic,dojo/touch,dojo/when,./focus,./registry,./_base/manager,./_Widget,./_TemplatedMixin,./_Container,./_Contained,./_CssStateMixin,dojo/text!./templates/TreeNode.html,dojo/text!./templates/Tree.html,./tree/TreeStoreModel,./tree/ForestStoreModel,./tree/_dndSelector".split(","),function(f,
A,s,p,j,B,C,k,q,r,n,D,t,E,i,d,g,F,u,G,H,l,v,w,x,y,I,J,K,L,O,M,N){function o(a){var b=new B(a);b.addCallback=function(a){b.then(a)};b.addErrback=function(a){b.then(null,a)};return b}var j=p(j,{addCallback:function(a){this.then(a)},addErrback:function(a){this.then(null,a)}}),z=p("dijit._TreeNode",[w,x,y,I,J],{item:null,isTreeNode:!0,label:"",_setLabelAttr:{node:"labelNode",type:"innerText"},isExpandable:null,isExpanded:!1,state:"UNCHECKED",templateString:K,baseClass:"dijitTreeNode",cssStateNodes:{rowNode:"dijitTreeRow"},
_setTooltipAttr:{node:"rowNode",type:"attribute",attribute:"title"},buildRendering:function(){this.inherited(arguments);this._setExpando();this._updateItemClasses(this.item);this.isExpandable&&this.labelNode.setAttribute("aria-expanded",this.isExpanded);this.setSelected(!1)},_setIndentAttr:function(a){var b=Math.max(a,0)*this.tree._nodePixelIndent+"px";r.set(this.domNode,"backgroundPosition",b+" 0px");r.set(this.indentNode,this.isLeftToRight()?"paddingLeft":"paddingRight",b);f.forEach(this.getChildren(),
function(b){b.set("indent",a+1)});this._set("indent",a)},markProcessing:function(){this.state="LOADING";this._setExpando(!0)},unmarkProcessing:function(){this._setExpando(!1)},_updateItemClasses:function(a){var b=this.tree,c=b.model;b._v10Compat&&a===c.root&&(a=null);this._applyClassAndStyle(a,"icon","Icon");this._applyClassAndStyle(a,"label","Label");this._applyClassAndStyle(a,"row","Row");this.tree._startPaint(!0)},_applyClassAndStyle:function(a,b,c){var e="_"+b+"Class",b=b+"Node",h=this[e];this[e]=
this.tree["get"+c+"Class"](a,this.isExpanded);k.replace(this[b],this[e]||"",h||"");r.set(this[b],this.tree["get"+c+"Style"](a,this.isExpanded)||{})},_updateLayout:function(){var a=this.getParent();!a||!a.rowNode||"none"==a.rowNode.style.display?k.add(this.domNode,"dijitTreeIsRoot"):k.toggle(this.domNode,"dijitTreeIsLast",!this.getNextSibling())},_setExpando:function(a){var b=["dijitTreeExpandoLoading","dijitTreeExpandoOpened","dijitTreeExpandoClosed","dijitTreeExpandoLeaf"],a=a?0:this.isExpandable?
this.isExpanded?1:2:3;k.replace(this.expandoNode,b[a],b);this.expandoNodeText.innerHTML=["*","-","+","*"][a]},expand:function(){if(this._expandDeferred)return this._expandDeferred;this._collapseDeferred&&(this._collapseDeferred.cancel(),delete this._collapseDeferred);this.isExpanded=!0;this.labelNode.setAttribute("aria-expanded","true");(this.tree.showRoot||this!==this.tree.rootNode)&&this.containerNode.setAttribute("role","group");k.add(this.contentNode,"dijitTreeContentExpanded");this._setExpando();
this._updateItemClasses(this.item);this==this.tree.rootNode&&this.tree.showRoot&&this.tree.domNode.setAttribute("aria-expanded","true");var a,b=t.wipeIn({node:this.containerNode,duration:v.defaultDuration,onEnd:function(){a.resolve(!0)}});a=this._expandDeferred=new j(function(){b.stop()});b.play();return a},collapse:function(){if(this._collapseDeferred)return this._collapseDeferred;this._expandDeferred&&(this._expandDeferred.cancel(),delete this._expandDeferred);this.isExpanded=!1;this.labelNode.setAttribute("aria-expanded",
"false");this==this.tree.rootNode&&this.tree.showRoot&&this.tree.domNode.setAttribute("aria-expanded","false");k.remove(this.contentNode,"dijitTreeContentExpanded");this._setExpando();this._updateItemClasses(this.item);var a,b=t.wipeOut({node:this.containerNode,duration:v.defaultDuration,onEnd:function(){a.resolve(!0)}});a=this._collapseDeferred=new j(function(){b.stop()});b.play();return a},indent:0,setChildItems:function(a){var b=this.tree,c=b.model,e=[],h=this.getChildren();f.forEach(h,function(a){y.prototype.removeChild.call(this,
a)},this);this.defer(function(){f.forEach(h,function(a){if(!a._destroyed&&!a.getParent()){b.dndController.removeTreeNode(a);var e=function(a){var h=c.getIdentity(a.item),d=b._itemNodesMap[h];1==d.length?delete b._itemNodesMap[h]:(h=f.indexOf(d,a),-1!=h&&d.splice(h,1));f.forEach(a.getChildren(),e)};e(a);if(b.persist){var h=f.map(a.getTreePath(),function(a){return b.model.getIdentity(a)}).join("/"),d;for(d in b._openedNodes)d.substr(0,h.length)==h&&delete b._openedNodes[d];b._saveExpandedNodes()}a.destroyRecursive()}})});
this.state="LOADED";a&&0<a.length?(this.isExpandable=!0,f.forEach(a,function(a){var h=c.getIdentity(a),f=b._itemNodesMap[h],d;if(f)for(var g=0;g<f.length;g++)if(f[g]&&!f[g].getParent()){d=f[g];d.set("indent",this.indent+1);break}d||(d=this.tree._createTreeNode({item:a,tree:b,isExpandable:c.mayHaveChildren(a),label:b.getLabel(a),tooltip:b.getTooltip(a),ownerDocument:b.ownerDocument,dir:b.dir,lang:b.lang,textDir:b.textDir,indent:this.indent+1}),f?f.push(d):b._itemNodesMap[h]=[d]);this.addChild(d);(this.tree.autoExpand||
this.tree._state(d))&&e.push(b._expandNode(d))},this),f.forEach(this.getChildren(),function(a){a._updateLayout()})):this.isExpandable=!1;this._setExpando&&this._setExpando(!1);this._updateItemClasses(this.item);if(this==b.rootNode)(a=this.tree.showRoot?this:this.getChildren()[0])?(a.setFocusable(!0),b.lastFocused=a):b.domNode.setAttribute("tabIndex","0");a=o(e);this.tree._startPaint(a);return a},getTreePath:function(){for(var a=this,b=[];a&&a!==this.tree.rootNode;)b.unshift(a.item),a=a.getParent();
b.unshift(this.tree.rootNode.item);return b},getIdentity:function(){return this.tree.model.getIdentity(this.item)},removeChild:function(a){this.inherited(arguments);var b=this.getChildren();if(0==b.length)this.isExpandable=!1,this.collapse();f.forEach(b,function(a){a._updateLayout()})},makeExpandable:function(){this.isExpandable=!0;this._setExpando(!1)},setSelected:function(a){this.labelNode.setAttribute("aria-selected",a?"true":"false");k.toggle(this.rowNode,"dijitTreeRowSelected",a)},setFocusable:function(a){this.labelNode.setAttribute("tabIndex",
a?"0":"-1")},_setTextDirAttr:function(a){if(a&&(this.textDir!=a||!this._created))this._set("textDir",a),this.applyTextDir(this.labelNode),f.forEach(this.getChildren(),function(b){b.set("textDir",a)},this)}}),m=p("dijit.Tree",[w,x],{store:null,model:null,query:null,label:"",showRoot:!0,childrenAttr:["children"],paths:[],path:[],selectedItems:null,selectedItem:null,openOnClick:!1,openOnDblClick:!1,templateString:L,persist:!0,autoExpand:!1,dndController:N,dndParams:"onDndDrop,itemCreator,onDndCancel,checkAcceptance,checkItemAcceptance,dragThreshold,betweenThreshold".split(","),
onDndDrop:null,itemCreator:null,onDndCancel:null,checkAcceptance:null,checkItemAcceptance:null,dragThreshold:5,betweenThreshold:0,_nodePixelIndent:19,_publish:function(a,b){F.publish(this.id,d.mixin({tree:this,event:a},b||{}))},postMixInProperties:function(){this.tree=this;if(this.autoExpand)this.persist=!1;this._itemNodesMap={};if(!this.cookieName&&this.id)this.cookieName=this.id+"SaveStateCookie";this.expandChildrenDeferred=new j;this.pendingCommandsPromise=this.expandChildrenDeferred.promise;this.inherited(arguments)},
postCreate:function(){this._initState();var a=this;this.own(g(this.domNode,g.selector(".dijitTreeNode",u.enter),function(b){a._onNodeMouseEnter(l.byNode(this),b)}),g(this.domNode,g.selector(".dijitTreeNode",u.leave),function(b){a._onNodeMouseLeave(l.byNode(this),b)}),g(this.domNode,g.selector(".dijitTreeNode","click"),function(b){a._onClick(l.byNode(this),b)}),g(this.domNode,g.selector(".dijitTreeNode","dblclick"),function(b){a._onDblClick(l.byNode(this),b)}),g(this.domNode,g.selector(".dijitTreeNode",
"keypress"),function(b){a._onKeyPress(l.byNode(this),b)}),g(this.domNode,g.selector(".dijitTreeNode","keydown"),function(b){a._onKeyDown(l.byNode(this),b)}),g(this.domNode,g.selector(".dijitTreeRow","focusin"),function(b){a._onNodeFocus(l.getEnclosingWidget(this),b)}));this.model||this._store2model();this.connect(this.model,"onChange","_onItemChange");this.connect(this.model,"onChildrenChange","_onItemChildrenChange");this.connect(this.model,"onDelete","_onItemDelete");this.inherited(arguments);if(this.dndController){if(d.isString(this.dndController))this.dndController=
d.getObject(this.dndController);for(var b={},c=0;c<this.dndParams.length;c++)this[this.dndParams[c]]&&(b[this.dndParams[c]]=this[this.dndParams[c]]);this.dndController=new this.dndController(this,b)}this._load();!this.params.path&&!this.params.paths&&this.persist&&this.set("paths",this.dndController._getSavedPaths());this.onLoadDeferred=this.pendingCommandsPromise;this.onLoadDeferred.then(d.hitch(this,"onLoad"))},_store2model:function(){this._v10Compat=!0;E.deprecated("Tree: from version 2.0, should specify a model object rather than a store/query");
var a={id:this.id+"_ForestStoreModel",store:this.store,query:this.query,childrenAttrs:this.childrenAttr};if(this.params.mayHaveChildren)a.mayHaveChildren=d.hitch(this,"mayHaveChildren");if(this.params.getItemChildren)a.getChildren=d.hitch(this,function(a,c,e){this.getItemChildren(this._v10Compat&&a===this.model.root?null:a,c,e)});this.model=new M(a);this.showRoot=Boolean(this.label)},onLoad:function(){},_load:function(){this.model.getRoot(d.hitch(this,function(a){var b=this.rootNode=this.tree._createTreeNode({item:a,
tree:this,isExpandable:!0,label:this.label||this.getLabel(a),textDir:this.textDir,indent:this.showRoot?0:-1});this.showRoot?this.domNode.setAttribute("aria-multiselectable",!this.dndController.singular):(b.rowNode.style.display="none",this.domNode.setAttribute("role","presentation"),this.domNode.removeAttribute("aria-expanded"),this.domNode.removeAttribute("aria-multiselectable"),b.labelNode.setAttribute("role","presentation"),b.containerNode.setAttribute("role","tree"),b.containerNode.setAttribute("aria-expanded",
"true"),b.containerNode.setAttribute("aria-multiselectable",!this.dndController.singular));this.domNode.appendChild(b.domNode);a=this.model.getIdentity(a);this._itemNodesMap[a]?this._itemNodesMap[a].push(b):this._itemNodesMap[a]=[b];b._updateLayout();this._expandNode(b).then(d.hitch(this,function(){this.expandChildrenDeferred.resolve(!0)}))}),d.hitch(this,function(){}))},getNodesByItem:function(a){return!a?[]:[].concat(this._itemNodesMap[d.isString(a)?a:this.model.getIdentity(a)])},_setSelectedItemAttr:function(a){this.set("selectedItems",
[a])},_setSelectedItemsAttr:function(a){var b=this;return this.pendingCommandsPromise=this.pendingCommandsPromise.always(d.hitch(this,function(){var c=f.map(a,function(a){return!a||d.isString(a)?a:b.model.getIdentity(a)}),e=[];f.forEach(c,function(a){e=e.concat(b._itemNodesMap[a]||[])});this.set("selectedNodes",e)}))},_setPathAttr:function(a){return a.length?this.set("paths",[a]):this.set("paths",[])},_setPathsAttr:function(a){function b(a,h,d){var g=a.shift(),i=f.filter(h,function(a){return a.getIdentity()==
g})[0];i?a.length?c._expandNode(i).then(function(){b(a,i.getChildren(),d)}):d.resolve(i):d.reject(new m.PathError("Could not expand path at "+g))}var c=this;return this.pendingCommandsPromise=this.pendingCommandsPromise.always(function(){return o(f.map(a,function(a){var h=new j,a=f.map(a,function(a){return d.isString(a)?a:c.model.getIdentity(a)});a.length?b(a,[c.rootNode],h):h.reject(new m.PathError("Empty path"));return h}))}).then(function(a){c.set("selectedNodes",a)})},_setSelectedNodeAttr:function(a){this.set("selectedNodes",
[a])},_setSelectedNodesAttr:function(a){this.dndController.setSelection(a)},expandAll:function(){function a(c){var e=new dojo.Deferred;b._expandNode(c).then(function(){var b=f.filter(c.getChildren()||[],function(a){return a.isExpandable}),b=f.map(b,a);o(b).then(function(){e.resolve(!0)})});return e}var b=this;return a(this.rootNode)},collapseAll:function(){function a(c){var e=new dojo.Deferred;e.label="collapseAllDeferred";var d=f.filter(c.getChildren()||[],function(a){return a.isExpandable}),d=f.map(d,
a);o(d).then(function(){!c.isExpanded||c==b.rootNode&&!b.showRoot?e.resolve(!0):b._collapseNode(c).then(function(){e.resolve(!0)})});return e}var b=this;return a(this.rootNode)},mayHaveChildren:function(){},getItemChildren:function(){},getLabel:function(a){return this.model.getLabel(a)},getIconClass:function(a,b){return!a||this.model.mayHaveChildren(a)?b?"dijitFolderOpened":"dijitFolderClosed":"dijitLeaf"},getLabelClass:function(){},getRowClass:function(){},getIconStyle:function(){},getLabelStyle:function(){},
getRowStyle:function(){},getTooltip:function(){return""},_onKeyPress:function(a,b){if(!(32>=b.charCode)&&!b.altKey&&!b.ctrlKey&&!b.shiftKey&&!b.metaKey){var c=String.fromCharCode(b.charCode);this._onLetterKeyNav({node:a,key:c.toLowerCase()});n.stop(b)}},_onKeyDown:function(a,b){var c=b.keyCode,e=this._keyHandlerMap;if(!e)e={},e[i.ENTER]=e[i.SPACE]=e[" "]="_onEnterKey",e[this.isLeftToRight()?i.LEFT_ARROW:i.RIGHT_ARROW]="_onLeftArrow",e[this.isLeftToRight()?i.RIGHT_ARROW:i.LEFT_ARROW]="_onRightArrow",
e[i.UP_ARROW]="_onUpArrow",e[i.DOWN_ARROW]="_onDownArrow",e[i.HOME]="_onHomeKey",e[i.END]="_onEndKey",this._keyHandlerMap=e;this._keyHandlerMap[c]&&(this._curSearch&&(this._curSearch.timer.remove(),delete this._curSearch),this[this._keyHandlerMap[c]]({node:a,item:a.item,evt:b}),n.stop(b))},_onEnterKey:function(a){this._publish("execute",{item:a.item,node:a.node});this.dndController.userSelect(a.node,A.isCopyKey(a.evt),a.evt.shiftKey);this.onClick(a.item,a.node,a.evt)},_onDownArrow:function(a){(a=
this._getNextNode(a.node))&&a.isTreeNode&&this.focusNode(a)},_onUpArrow:function(a){var a=a.node,b=a.getPreviousSibling();if(b)for(a=b;a.isExpandable&&a.isExpanded&&a.hasChildren();)a=a.getChildren(),a=a[a.length-1];else if(b=a.getParent(),this.showRoot||b!==this.rootNode)a=b;a&&a.isTreeNode&&this.focusNode(a)},_onRightArrow:function(a){a=a.node;a.isExpandable&&!a.isExpanded?this._expandNode(a):a.hasChildren()&&(a=a.getChildren()[0])&&a.isTreeNode&&this.focusNode(a)},_onLeftArrow:function(a){a=a.node;
a.isExpandable&&a.isExpanded?this._collapseNode(a):(a=a.getParent())&&a.isTreeNode&&(this.showRoot||a!==this.rootNode)&&this.focusNode(a)},_onHomeKey:function(){var a=this._getRootOrFirstNode();a&&this.focusNode(a)},_onEndKey:function(){for(var a=this.rootNode;a.isExpanded;)a=a.getChildren(),a=a[a.length-1];a&&a.isTreeNode&&this.focusNode(a)},multiCharSearchDuration:250,_onLetterKeyNav:function(a){var b=this._curSearch;b?(b.pattern+=a.key,b.timer.remove()):b=this._curSearch={pattern:a.key,startNode:a.node};
b.timer=this.defer(function(){delete this._curSearch},this.multiCharSearchDuration);a=b.startNode;do(a=this._getNextNode(a))||(a=this._getRootOrFirstNode());while(a!==b.startNode&&a.label.toLowerCase().substr(0,b.pattern.length)!=b.pattern);a&&a.isTreeNode&&a!==b.startNode&&this.focusNode(a)},isExpandoNode:function(a,b){return C.isDescendant(a,b.expandoNode)},_onClick:function(a,b){var c=this.isExpandoNode(b.target,a);this.openOnClick&&a.isExpandable||c?a.isExpandable&&this._onExpandoClick({node:a}):
(this._publish("execute",{item:a.item,node:a,evt:b}),this.onClick(a.item,a,b),this.focusNode(a));n.stop(b)},_onDblClick:function(a,b){var c=b.target,c=c==a.expandoNode||c==a.expandoNodeText;this.openOnDblClick&&a.isExpandable||c?a.isExpandable&&this._onExpandoClick({node:a}):(this._publish("execute",{item:a.item,node:a,evt:b}),this.onDblClick(a.item,a,b),this.focusNode(a));n.stop(b)},_onExpandoClick:function(a){a=a.node;this.focusNode(a);a.isExpanded?this._collapseNode(a):this._expandNode(a)},onClick:function(){},
onDblClick:function(){},onOpen:function(){},onClose:function(){},_getNextNode:function(a){if(a.isExpandable&&a.isExpanded&&a.hasChildren())return a.getChildren()[0];for(;a&&a.isTreeNode;){var b=a.getNextSibling();if(b)return b;a=a.getParent()}return null},_getRootOrFirstNode:function(){return this.showRoot?this.rootNode:this.rootNode.getChildren()[0]},_collapseNode:function(a){a._expandNodeDeferred&&delete a._expandNodeDeferred;if("LOADING"!=a.state&&a.isExpanded){var b=a.collapse();this.onClose(a.item,
a);this._state(a,!1);this._startPaint(b);return b}},_expandNode:function(a){var b=new j;if(a._expandNodeDeferred)return a._expandNodeDeferred;var c=this.model,e=a.item;if(!a._loadDeferred)a.markProcessing(),a._loadDeferred=new j,c.getChildren(e,function(b){a.unmarkProcessing();a.setChildItems(b).then(function(){a._loadDeferred.resolve(b)})},function(b){a._loadDeferred.reject(b)});a._loadDeferred.then(d.hitch(this,function(){a.expand().then(function(){b.resolve(!0)});this.onOpen(a.item,a);this._state(a,
!0)}));this._startPaint(b);return b},focusNode:function(a){H.focus(a.labelNode)},_onNodeFocus:function(a){if(a&&a!=this.lastFocused)this.lastFocused&&!this.lastFocused._destroyed&&this.lastFocused.setFocusable(!1),a.setFocusable(!0),this.lastFocused=a},_onNodeMouseEnter:function(){},_onNodeMouseLeave:function(){},_onItemChange:function(a){var b=this._itemNodesMap[this.model.getIdentity(a)];if(b){var c=this.getLabel(a),e=this.getTooltip(a);f.forEach(b,function(b){b.set({item:a,label:c,tooltip:e});
b._updateItemClasses(a)})}},_onItemChildrenChange:function(a,b){var c=this._itemNodesMap[this.model.getIdentity(a)];c&&f.forEach(c,function(a){a.setChildItems(b)})},_onItemDelete:function(a){var a=this.model.getIdentity(a),b=this._itemNodesMap[a];b&&(f.forEach(b,function(a){this.dndController.removeTreeNode(a);var b=a.getParent();b&&b.removeChild(a);a.destroyRecursive()},this),delete this._itemNodesMap[a])},_initState:function(){this._openedNodes={};if(this.persist&&this.cookieName){var a=s(this.cookieName);
a&&f.forEach(a.split(","),function(a){this._openedNodes[a]=!0},this)}},_state:function(a,b){if(!this.persist)return!1;var c=f.map(a.getTreePath(),function(a){return this.model.getIdentity(a)},this).join("/");if(1===arguments.length)return this._openedNodes[c];b?this._openedNodes[c]=!0:delete this._openedNodes[c];this._saveExpandedNodes()},_saveExpandedNodes:function(){if(this.persist&&this.cookieName){var a=[],b;for(b in this._openedNodes)a.push(b);s(this.cookieName,a.join(","),{expires:365})}},destroy:function(){this._curSearch&&
(this._curSearch.timer.remove(),delete this._curSearch);this.rootNode&&this.rootNode.destroyRecursive();this.dndController&&!d.isString(this.dndController)&&this.dndController.destroy();this.rootNode=null;this.inherited(arguments)},destroyRecursive:function(){this.destroy()},resize:function(a){a&&q.setMarginBox(this.domNode,a);this._nodePixelIndent=q.position(this.tree.indentDetector).w||this._nodePixelIndent;this.expandChildrenDeferred.then(d.hitch(this,function(){this.rootNode.set("indent",this.showRoot?
0:-1);this._adjustWidths()}))},_outstandingPaintOperations:0,_startPaint:function(a){this._outstandingPaintOperations++;this._adjustWidthsTimer&&(this._adjustWidthsTimer.remove(),delete this._adjustWidthsTimer);var b=d.hitch(this,function(){this._outstandingPaintOperations--;if(0>=this._outstandingPaintOperations&&!this._adjustWidthsTimer&&this._started)this._adjustWidthsTimer=this.defer("_adjustWidths")});G(a,b,b)},_adjustWidths:function(){function a(e){var d=e.rowNode;d.style.width="auto";b=Math.max(b,
d.clientWidth);c.push(d);e.isExpanded&&f.forEach(e.getChildren(),a)}this._adjustWidthsTimer&&(this._adjustWidthsTimer.remove(),delete this._adjustWidthsTimer);var b=0,c=[];a(this.rootNode);b=Math.max(b,q.getContentBox(this.domNode).w);f.forEach(c,function(a){a.style.width=b+"px"})},_createTreeNode:function(a){return new z(a)},_setTextDirAttr:function(a){a&&this.textDir!=a&&(this._set("textDir",a),this.rootNode.set("textDir",a))}});m.PathError=D("TreePathError");m._TreeNode=z;return m});