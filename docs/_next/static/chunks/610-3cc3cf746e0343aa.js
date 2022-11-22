(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[610],{449:function(__unused_webpack_module,exports){!function(exports){function BibtexParser(){this.months=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],this.notKey=[",","{","}"," ","="],this.pos=0,this.input="",this.entries=[],this.currentEntry="",this.setInput=function(t){this.input=t},this.getEntries=function(){return this.entries},this.isWhitespace=function(s){return" "==s||"\r"==s||"	"==s||"\n"==s},this.match=function(s,canCommentOut){if((void 0==canCommentOut||null==canCommentOut)&&(canCommentOut=!0),this.skipWhitespace(canCommentOut),this.input.substring(this.pos,this.pos+s.length)==s)this.pos+=s.length;else throw"Token mismatch, expected "+s+", found "+this.input.substring(this.pos);this.skipWhitespace(canCommentOut)},this.tryMatch=function(s,canCommentOut){return(void 0==canCommentOut||null==canCommentOut)&&(canCommentOut=!0),this.skipWhitespace(canCommentOut),this.input.substring(this.pos,this.pos+s.length)==s},this.matchAt=function(){for(;this.input.length>this.pos&&"@"!=this.input[this.pos];)this.pos++;return"@"==this.input[this.pos]},this.skipWhitespace=function(canCommentOut){for(;this.isWhitespace(this.input[this.pos]);)this.pos++;if("%"==this.input[this.pos]&&!0==canCommentOut){for(;"\n"!=this.input[this.pos];)this.pos++;this.skipWhitespace(canCommentOut)}},this.value_braces=function(){var bracecount=0;this.match("{",!1);for(var start1=this.pos,escaped=!1;;){if(!escaped){if("}"==this.input[this.pos]){if(bracecount>0)bracecount--;else{var end=this.pos;return this.match("}",!1),this.input.substring(start1,end)}}else if("{"==this.input[this.pos])bracecount++;else if(this.pos>=this.input.length-1)throw"Unterminated value"}escaped="\\"==this.input[this.pos]&&!1==escaped,this.pos++}},this.value_comment=function(){for(var str="",brcktCnt=0;!(this.tryMatch("}",!1)&&0==brcktCnt);){if(str+=this.input[this.pos],"{"==this.input[this.pos]&&brcktCnt++,"}"==this.input[this.pos]&&brcktCnt--,this.pos>=this.input.length-1)throw"Unterminated value:"+this.input.substring(start);this.pos++}return str},this.value_quotes=function(){this.match('"',!1);for(var start1=this.pos,escaped=!1;;){if(!escaped){if('"'==this.input[this.pos]){var end=this.pos;return this.match('"',!1),this.input.substring(start1,end)}if(this.pos>=this.input.length-1)throw"Unterminated value:"+this.input.substring(start1)}escaped="\\"==this.input[this.pos]&&!1==escaped,this.pos++}},this.single_value=function(){var start1=this.pos;if(this.tryMatch("{"))return this.value_braces();if(this.tryMatch('"'))return this.value_quotes();var k=this.key();if(k.match("^[0-9]+$"))return k;if(this.months.indexOf(k.toLowerCase())>=0)return k.toLowerCase();throw"Value expected:"+this.input.substring(start1)+" for key: "+k},this.value=function(){var values=[];for(values.push(this.single_value());this.tryMatch("#");)this.match("#"),values.push(this.single_value());return values.join("")},this.key=function(optional){for(var start1=this.pos;;){if(this.pos>=this.input.length)throw"Runaway key";if(this.notKey.indexOf(this.input[this.pos])>=0){if(optional&&","!=this.input[this.pos])return this.pos=start1,null;return this.input.substring(start1,this.pos)}this.pos++}},this.key_equals_value=function(){var key=this.key();if(this.tryMatch("=")){this.match("=");var val=this.value();return[key=key.trim(),val]}throw"... = value expected, equals sign missing:"+this.input.substring(this.pos)},this.key_value_list=function(){var kv=this.key_equals_value();for(this.currentEntry.entryTags={},this.currentEntry.entryTags[kv[0]]=kv[1];this.tryMatch(",")&&(this.match(","),!this.tryMatch("}"));)kv=this.key_equals_value(),this.currentEntry.entryTags[kv[0]]=kv[1]},this.entry_body=function(d){this.currentEntry={},this.currentEntry.citationKey=this.key(!0),this.currentEntry.entryType=d.substring(1),null!=this.currentEntry.citationKey&&this.match(","),this.key_value_list(),this.entries.push(this.currentEntry)},this.directive=function(){return this.match("@"),"@"+this.key()},this.preamble=function(){this.currentEntry={},this.currentEntry.entryType="PREAMBLE",this.currentEntry.entry=this.value_comment(),this.entries.push(this.currentEntry)},this.comment=function(){this.currentEntry={},this.currentEntry.entryType="COMMENT",this.currentEntry.entry=this.value_comment(),this.entries.push(this.currentEntry)},this.entry=function(d){this.entry_body(d)},this.alernativeCitationKey=function(){this.entries.forEach(function(entry){!entry.citationKey&&entry.entryTags&&(entry.citationKey="",entry.entryTags.author&&(entry.citationKey+=entry.entryTags.author.split(",")[0]+=", "),entry.citationKey+=entry.entryTags.year)})},this.bibtex=function(){for(;this.matchAt();){var d=this.directive();this.match("{"),"@STRING"==d.toUpperCase()?this.string():"@PREAMBLE"==d.toUpperCase()?this.preamble():"@COMMENT"==d.toUpperCase()?this.comment():this.entry(d),this.match("}")}this.alernativeCitationKey()}}exports.toJSON=function(bibtex){var b=new BibtexParser;return b.setInput(bibtex),b.bibtex(),b.entries},exports.toBibtex=function(json){var out="";for(var i in json){if(out="@"+json[i].entryType+"{",json[i].citationKey&&(out+=json[i].citationKey+", "),json[i].entry&&(out+=json[i].entry),json[i].entryTags){var tags="";for(var jdx in json[i].entryTags)0!=tags.length&&(tags+=", "),tags+=jdx+"= {"+json[i].entryTags[jdx]+"}";out+=tags}out+="}\n\n"}return out}}(exports)},2350:function(){},7285:function(__unused_webpack_module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AmpStateContext=void 0;var AmpStateContext=(0,__webpack_require__(2648).Z)(__webpack_require__(7294)).default.createContext({});exports.AmpStateContext=AmpStateContext},354:function(__unused_webpack_module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isInAmpMode=function(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$ampFirst=_ref.ampFirst,_ref$hybrid=_ref.hybrid,_ref$hasQuery=_ref.hasQuery;return void 0!==_ref$ampFirst&&_ref$ampFirst||void 0!==_ref$hybrid&&_ref$hybrid&&void 0!==_ref$hasQuery&&_ref$hasQuery}},6505:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.defaultHead=defaultHead,exports.default=void 0;var _extends=__webpack_require__(6495).Z,_interop_require_default=__webpack_require__(2648).Z,_react=(0,__webpack_require__(1598).Z)(__webpack_require__(7294)),_sideEffect=_interop_require_default(__webpack_require__(148)),_ampContext=__webpack_require__(7285),_headManagerContext=__webpack_require__(523),_ampMode=__webpack_require__(354);function defaultHead(){var inAmpMode=arguments.length>0&&void 0!==arguments[0]&&arguments[0],head=[_react.default.createElement("meta",{charSet:"utf-8"})];return inAmpMode||head.push(_react.default.createElement("meta",{name:"viewport",content:"width=device-width"})),head}function onlyReactElement(list,child){return"string"==typeof child||"number"==typeof child?list:child.type===_react.default.Fragment?list.concat(_react.default.Children.toArray(child.props.children).reduce(function(fragmentList,fragmentChild){return"string"==typeof fragmentChild||"number"==typeof fragmentChild?fragmentList:fragmentList.concat(fragmentChild)},[])):list.concat(child)}__webpack_require__(2783);var METATYPES=["name","httpEquiv","charSet","itemProp"];function reduceComponents(headChildrenElements,props){var keys,tags,metaTypes,metaCategories,inAmpMode=props.inAmpMode;return headChildrenElements.reduce(onlyReactElement,[]).reverse().concat(defaultHead(inAmpMode).reverse()).filter((keys=new Set,tags=new Set,metaTypes=new Set,metaCategories={},function(h){var isUnique=!0,hasKey=!1;if(h.key&&"number"!=typeof h.key&&h.key.indexOf("$")>0){hasKey=!0;var key=h.key.slice(h.key.indexOf("$")+1);keys.has(key)?isUnique=!1:keys.add(key)}switch(h.type){case"title":case"base":tags.has(h.type)?isUnique=!1:tags.add(h.type);break;case"meta":for(var i=0,len=METATYPES.length;i<len;i++){var metatype=METATYPES[i];if(h.props.hasOwnProperty(metatype)){if("charSet"===metatype)metaTypes.has(metatype)?isUnique=!1:metaTypes.add(metatype);else{var category=h.props[metatype],categories=metaCategories[metatype]||new Set;("name"!==metatype||!hasKey)&&categories.has(category)?isUnique=!1:(categories.add(category),metaCategories[metatype]=categories)}}}}return isUnique})).reverse().map(function(c,i){var key=c.key||i;if(!inAmpMode&&"link"===c.type&&c.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(url){return c.props.href.startsWith(url)})){var newProps=_extends({},c.props||{});return newProps["data-href"]=newProps.href,newProps.href=void 0,newProps["data-optimized-fonts"]=!0,_react.default.cloneElement(c,newProps)}return _react.default.cloneElement(c,{key:key})})}exports.default=function(_ref){var children=_ref.children,ampState=_react.useContext(_ampContext.AmpStateContext),headManager=_react.useContext(_headManagerContext.HeadManagerContext);return _react.default.createElement(_sideEffect.default,{reduceComponentsToState:reduceComponents,headManager:headManager,inAmpMode:_ampMode.isInAmpMode(ampState)},children)},("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},148:function(__unused_webpack_module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(props){var ref,headManager=props.headManager,reduceComponentsToState=props.reduceComponentsToState;function emitChange(){if(headManager&&headManager.mountedInstances){var headElements=_react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));headManager.updateHead(reduceComponentsToState(headElements,props))}}return isServer&&(null==headManager||null==(ref=headManager.mountedInstances)||ref.add(props.children),emitChange()),useClientOnlyLayoutEffect(function(){var ref1;return null==headManager||null==(ref1=headManager.mountedInstances)||ref1.add(props.children),function(){var ref;null==headManager||null==(ref=headManager.mountedInstances)||ref.delete(props.children)}}),useClientOnlyLayoutEffect(function(){return headManager&&(headManager._pendingUpdate=emitChange),function(){headManager&&(headManager._pendingUpdate=emitChange)}}),useClientOnlyEffect(function(){return headManager&&headManager._pendingUpdate&&(headManager._pendingUpdate(),headManager._pendingUpdate=null),function(){headManager&&headManager._pendingUpdate&&(headManager._pendingUpdate(),headManager._pendingUpdate=null)}}),null};var _react=(0,__webpack_require__(1598).Z)(__webpack_require__(7294)),isServer=!1,useClientOnlyLayoutEffect=_react.useLayoutEffect,useClientOnlyEffect=isServer?function(){}:_react.useEffect},2783:function(__unused_webpack_module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.warnOnce=void 0,exports.warnOnce=function(_){}},3395:function(__unused_webpack_module,exports,__webpack_require__){var process=__webpack_require__(3454);__webpack_require__(2350);var React=__webpack_require__(7294),React__default=React&&"object"==typeof React&&"default"in React?React:{default:React};function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var isProd=void 0!==process&&process.env&&!0,isString=function(o){return"[object String]"===Object.prototype.toString.call(o)},StyleSheet=function(){function StyleSheet(param){var ref=void 0===param?{}:param,_name=ref.name,name=void 0===_name?"stylesheet":_name,_optimizeForSpeed=ref.optimizeForSpeed,optimizeForSpeed=void 0===_optimizeForSpeed?isProd:_optimizeForSpeed;invariant$1(isString(name),"`name` must be a string"),this._name=name,this._deletedRulePlaceholder="#"+name+"-deleted-rule____{}",invariant$1("boolean"==typeof optimizeForSpeed,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=optimizeForSpeed,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var node=document.querySelector('meta[property="csp-nonce"]');this._nonce=node?node.getAttribute("content"):null}var staticProps,_proto=StyleSheet.prototype;return _proto.setOptimizeForSpeed=function(bool){invariant$1("boolean"==typeof bool,"`setOptimizeForSpeed` accepts a boolean"),invariant$1(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=bool,this.inject()},_proto.isOptimizeForSpeed=function(){return this._optimizeForSpeed},_proto.inject=function(){var _this=this;if(invariant$1(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(isProd||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(rule,index){return"number"==typeof index?_this._serverSheet.cssRules[index]={cssText:rule}:_this._serverSheet.cssRules.push({cssText:rule}),index},deleteRule:function(index){_this._serverSheet.cssRules[index]=null}}},_proto.getSheetForTag=function(tag){if(tag.sheet)return tag.sheet;for(var i=0;i<document.styleSheets.length;i++)if(document.styleSheets[i].ownerNode===tag)return document.styleSheets[i]},_proto.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},_proto.insertRule=function(rule,index){if(invariant$1(isString(rule),"`insertRule` accepts only strings"),this._optimizeForSpeed){var sheet=this.getSheet();"number"!=typeof index&&(index=sheet.cssRules.length);try{sheet.insertRule(rule,index)}catch(error){return isProd||console.warn("StyleSheet: illegal rule: \n\n"+rule+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var insertionPoint=this._tags[index];this._tags.push(this.makeStyleTag(this._name,rule,insertionPoint))}return this._rulesCount++},_proto.replaceRule=function(index,rule){if(this._optimizeForSpeed){var sheet=this.getSheet();if(rule.trim()||(rule=this._deletedRulePlaceholder),!sheet.cssRules[index])return index;sheet.deleteRule(index);try{sheet.insertRule(rule,index)}catch(error){isProd||console.warn("StyleSheet: illegal rule: \n\n"+rule+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),sheet.insertRule(this._deletedRulePlaceholder,index)}}else{var tag=this._tags[index];invariant$1(tag,"old rule at index `"+index+"` not found"),tag.textContent=rule}return index},_proto.deleteRule=function(index){if(this._optimizeForSpeed)this.replaceRule(index,"");else{var tag=this._tags[index];invariant$1(tag,"rule at index `"+index+"` not found"),tag.parentNode.removeChild(tag),this._tags[index]=null}},_proto.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(tag){return tag&&tag.parentNode.removeChild(tag)}),this._tags=[]},_proto.cssRules=function(){var _this=this;return this._tags.reduce(function(rules,tag){return tag?rules=rules.concat(Array.prototype.map.call(_this.getSheetForTag(tag).cssRules,function(rule){return rule.cssText===_this._deletedRulePlaceholder?null:rule})):rules.push(null),rules},[])},_proto.makeStyleTag=function(name,cssString,relativeToTag){cssString&&invariant$1(isString(cssString),"makeStyleTag accepts only strings as second parameter");var tag=document.createElement("style");this._nonce&&tag.setAttribute("nonce",this._nonce),tag.type="text/css",tag.setAttribute("data-"+name,""),cssString&&tag.appendChild(document.createTextNode(cssString));var head=document.head||document.getElementsByTagName("head")[0];return relativeToTag?head.insertBefore(tag,relativeToTag):head.appendChild(tag),tag},_defineProperties(StyleSheet.prototype,[{key:"length",get:function(){return this._rulesCount}}]),staticProps&&_defineProperties(StyleSheet,staticProps),StyleSheet}();function invariant$1(condition,message){if(!condition)throw Error("StyleSheet: "+message+".")}var stringHash=function(str){for(var _$hash=5381,i=str.length;i;)_$hash=33*_$hash^str.charCodeAt(--i);return _$hash>>>0},cache={};function computeId(baseId,props){if(!props)return"jsx-"+baseId;var propsToString=String(props),key=baseId+propsToString;return cache[key]||(cache[key]="jsx-"+stringHash(baseId+"-"+propsToString)),cache[key]}function computeSelector(id,css){var idcss=id+css;return cache[idcss]||(cache[idcss]=css.replace(/__jsx-style-dynamic-selector/g,id)),cache[idcss]}var StyleSheetRegistry=function(){function StyleSheetRegistry(param){var ref=void 0===param?{}:param,_styleSheet=ref.styleSheet,styleSheet=void 0===_styleSheet?null:_styleSheet,_optimizeForSpeed=ref.optimizeForSpeed,optimizeForSpeed=void 0!==_optimizeForSpeed&&_optimizeForSpeed;this._sheet=styleSheet||new StyleSheet({name:"styled-jsx",optimizeForSpeed:optimizeForSpeed}),this._sheet.inject(),styleSheet&&"boolean"==typeof optimizeForSpeed&&(this._sheet.setOptimizeForSpeed(optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var _proto=StyleSheetRegistry.prototype;return _proto.add=function(props){var _this=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(props.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(acc,tagName){return acc[tagName]=0,acc},{}));var ref=this.getIdAndRules(props),styleId=ref.styleId,rules=ref.rules;if(styleId in this._instancesCounts){this._instancesCounts[styleId]+=1;return}var indices=rules.map(function(rule){return _this._sheet.insertRule(rule)}).filter(function(index){return -1!==index});this._indices[styleId]=indices,this._instancesCounts[styleId]=1},_proto.remove=function(props){var _this=this,styleId=this.getIdAndRules(props).styleId;if(function(condition,message){if(!condition)throw Error("StyleSheetRegistry: "+message+".")}(styleId in this._instancesCounts,"styleId: `"+styleId+"` not found"),this._instancesCounts[styleId]-=1,this._instancesCounts[styleId]<1){var tagFromServer=this._fromServer&&this._fromServer[styleId];tagFromServer?(tagFromServer.parentNode.removeChild(tagFromServer),delete this._fromServer[styleId]):(this._indices[styleId].forEach(function(index){return _this._sheet.deleteRule(index)}),delete this._indices[styleId]),delete this._instancesCounts[styleId]}},_proto.update=function(props,nextProps){this.add(nextProps),this.remove(props)},_proto.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},_proto.cssRules=function(){var _this=this,fromServer=this._fromServer?Object.keys(this._fromServer).map(function(styleId){return[styleId,_this._fromServer[styleId]]}):[],cssRules=this._sheet.cssRules();return fromServer.concat(Object.keys(this._indices).map(function(styleId){return[styleId,_this._indices[styleId].map(function(index){return cssRules[index].cssText}).join(_this._optimizeForSpeed?"":"\n")]}).filter(function(rule){return Boolean(rule[1])}))},_proto.styles=function(options){var cssRules,options1;return cssRules=this.cssRules(),void 0===(options1=options)&&(options1={}),cssRules.map(function(args){var id=args[0],css=args[1];return React__default.default.createElement("style",{id:"__"+id,key:"__"+id,nonce:options1.nonce?options1.nonce:void 0,dangerouslySetInnerHTML:{__html:css}})})},_proto.getIdAndRules=function(props){var css=props.children,dynamic=props.dynamic,id=props.id;if(dynamic){var styleId=computeId(id,dynamic);return{styleId:styleId,rules:Array.isArray(css)?css.map(function(rule){return computeSelector(styleId,rule)}):[computeSelector(styleId,css)]}}return{styleId:computeId(id),rules:Array.isArray(css)?css:[css]}},_proto.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(acc,element){return acc[element.id.slice(2)]=element,acc},{})},StyleSheetRegistry}(),StyleSheetContext=React.createContext(null);StyleSheetContext.displayName="StyleSheetContext";var useInsertionEffect=React__default.default.useInsertionEffect||React__default.default.useLayoutEffect,defaultRegistry=new StyleSheetRegistry;function JSXStyle(props){var registry=defaultRegistry||React.useContext(StyleSheetContext);return registry&&useInsertionEffect(function(){return registry.add(props),function(){registry.remove(props)}},[props.id,String(props.dynamic)]),null}JSXStyle.dynamic=function(info){return info.map(function(tagInfo){return computeId(tagInfo[0],tagInfo[1])}).join(" ")},exports.style=JSXStyle},7521:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(3395).style},3454:function(module,__unused_webpack_exports,__webpack_require__){"use strict";var ref,ref1;module.exports=(null==(ref=__webpack_require__.g.process)?void 0:ref.env)&&"object"==typeof(null==(ref1=__webpack_require__.g.process)?void 0:ref1.env)?__webpack_require__.g.process:__webpack_require__(7663)},7663:function(module){!function(){var e={229:function(e){var r,n,u,t=e.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(e){if(r===setTimeout)return setTimeout(e,0);if((r===defaultSetTimout||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t1){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){r=defaultSetTimout}try{n="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e1){n=defaultClearTimeout}}();var i=[],o=!1,a=-1;function cleanUpNextTick(){o&&u&&(o=!1,u.length?i=u.concat(i):a=-1,i.length&&drainQueue())}function drainQueue(){if(!o){var e=runTimeout(cleanUpNextTick);o=!0;for(var t=i.length;t;){for(u=i,i=[];++a<t;)u&&u[a].run();a=-1,t=i.length}u=null,o=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===defaultClearTimeout||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t1){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}t.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];i.push(new Item(e,t)),1!==i.length||o||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},t.title="browser",t.browser=!0,t.env={},t.argv=[],t.version="",t.versions={},t.on=noop,t.addListener=noop,t.once=noop,t.off=noop,t.removeListener=noop,t.removeAllListeners=noop,t.emit=noop,t.prependListener=noop,t.prependOnceListener=noop,t.listeners=function(e){return[]},t.binding=function(e){throw Error("process.binding is not supported")},t.cwd=function(){return"/"},t.chdir=function(e){throw Error("process.chdir is not supported")},t.umask=function(){return 0}}},t={};function __nccwpck_require__(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}},o=!0;try{e[r](i,i.exports,__nccwpck_require__),o=!1}finally{o&&delete t[r]}return i.exports}__nccwpck_require__.ab="//";var r=__nccwpck_require__(229);module.exports=r}()},9008:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(6505)},4298:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(7829)},2640:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _slicedToArray(arr,i){return function(arr){if(Array.isArray(arr))return arr}(arr)||function(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}}(arr,i)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}})}}]);