"use strict";if(!window.jscolor){window.jscolor=(function(){var a={register:function(){a.attachDOMReadyEvent(a.init);a.attachEvent(document,"mousedown",a.onDocumentMouseDown);a.attachEvent(document,"touchstart",a.onDocumentTouchStart);a.attachEvent(window,"resize",a.onWindowResize)},init:function(){if(a.jscolor.lookupClass){a.jscolor.installByClassName(a.jscolor.lookupClass)}},tryInstallOnElements:function(c,j){var g=new RegExp("(^|\\s)("+j+")(\\s*(\\{[^}]*\\})|\\s|$)","i");for(var f=0;f<c.length;f+=1){if(c[f].type!==undefined&&c[f].type.toLowerCase()=="color"){if(a.isColorAttrSupported){continue}}var e;if(!c[f].jscolor&&c[f].className&&(e=c[f].className.match(g))){var k=c[f];var d=null;var l=a.getDataAttr(k,"jscolor");if(l!==null){d=l}else{if(e[4]){d=e[4]}}var b={};if(d){try{b=(new Function("return ("+d+")"))()}catch(h){a.warn("Error parsing jscolor options: "+h+":\n"+d)}}k.jscolor=new a.jscolor(k,b)}}},isColorAttrSupported:(function(){var b=document.createElement("input");if(b.setAttribute){b.setAttribute("type","color");if(b.type.toLowerCase()=="color"){return true}}return false})(),isCanvasSupported:(function(){var b=document.createElement("canvas");return !!(b.getContext&&b.getContext("2d"))})(),fetchElement:function(b){return typeof b==="string"?document.getElementById(b):b},isElementType:function(c,b){return c.nodeName.toLowerCase()===b.toLowerCase()},getDataAttr:function(d,b){var c="data-"+b;var e=d.getAttribute(c);if(e!==null){return e}return null},attachEvent:function(b,d,c){if(b.addEventListener){b.addEventListener(d,c,false)}else{if(b.attachEvent){b.attachEvent("on"+d,c)}}},detachEvent:function(b,d,c){if(b.removeEventListener){b.removeEventListener(d,c,false)}else{if(b.detachEvent){b.detachEvent("on"+d,c)}}},_attachedGroupEvents:{},attachGroupEvent:function(e,b,d,c){if(!a._attachedGroupEvents.hasOwnProperty(e)){a._attachedGroupEvents[e]=[]}a._attachedGroupEvents[e].push([b,d,c]);a.attachEvent(b,d,c)},detachGroupEvents:function(d){if(a._attachedGroupEvents.hasOwnProperty(d)){for(var c=0;c<a._attachedGroupEvents[d].length;c+=1){var b=a._attachedGroupEvents[d][c];a.detachEvent(b[0],b[1],b[2])}delete a._attachedGroupEvents[d]}},attachDOMReadyEvent:function(c){var d=false;var b=function(){if(!d){d=true;c()}};if(document.readyState==="complete"){setTimeout(b,1);return}if(document.addEventListener){document.addEventListener("DOMContentLoaded",b,false);window.addEventListener("load",b,false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);b()}});window.attachEvent("onload",b);if(document.documentElement.doScroll&&window==window.top){var e=function(){if(!document.body){return}try{document.documentElement.doScroll("left");b()}catch(f){setTimeout(e,1)}};e()}}}},warn:function(b){if(window.console&&window.console.warn){window.console.warn(b)}},preventDefault:function(b){if(b.preventDefault){b.preventDefault()}b.returnValue=false},captureTarget:function(b){if(b.setCapture){a._capturedTarget=b;a._capturedTarget.setCapture()}},releaseTarget:function(){if(a._capturedTarget){a._capturedTarget.releaseCapture();a._capturedTarget=null}},fireEvent:function(b,d){if(!b){return}if(document.createEvent){var c=document.createEvent("HTMLEvents");c.initEvent(d,true,true);b.dispatchEvent(c)}else{if(document.createEventObject){var c=document.createEventObject();b.fireEvent("on"+d,c)}else{if(b["on"+d]){b["on"+d]()}}}},classNameToList:function(b){return b.replace(/^\s+|\s+$/g,"").split(/\s+/)},hasClass:function(c,b){if(!b){return false}return -1!=(" "+c.className.replace(/\s+/g," ")+" ").indexOf(" "+b+" ")},setClass:function(e,c){var d=a.classNameToList(c);for(var b=0;b<d.length;b+=1){if(!a.hasClass(e,d[b])){e.className+=(e.className?" ":"")+d[b]}}},unsetClass:function(f,c){var e=a.classNameToList(c);for(var b=0;b<e.length;b+=1){var d=new RegExp("^\\s*"+e[b]+"\\s*|\\s*"+e[b]+"\\s*$|\\s+"+e[b]+"(\\s+)","g");f.className=f.className.replace(d,"$1")}},getStyle:function(b){return window.getComputedStyle?window.getComputedStyle(b):b.currentStyle},setStyle:(function(){var d=document.createElement("div");var b=function(f){for(var e=0;e<f.length;e+=1){if(f[e] in d.style){return f[e]}}};var c={borderRadius:b(["borderRadius","MozBorderRadius","webkitBorderRadius"]),boxShadow:b(["boxShadow","MozBoxShadow","webkitBoxShadow"])};return function(h,g,f){switch(g.toLowerCase()){case"opacity":var e=Math.round(parseFloat(f)*100);h.style.opacity=f;h.style.filter="alpha(opacity="+e+")";break;default:h.style[c[g]]=f;break}}})(),setBorderRadius:function(c,b){a.setStyle(c,"borderRadius",b||"0")},setBoxShadow:function(c,b){a.setStyle(c,"boxShadow",b||"none")},getElementPos:function(g,d){var b=0,h=0;var f=g.getBoundingClientRect();b=f.left;h=f.top;if(!d){var c=a.getViewPos();b+=c[0];h+=c[1]}return[b,h]},getElementSize:function(b){return[b.offsetWidth,b.offsetHeight]},getAbsPointerPos:function(c){if(!c){c=window.event}var b=0,d=0;if(typeof c.changedTouches!=="undefined"&&c.changedTouches.length){b=c.changedTouches[0].clientX;d=c.changedTouches[0].clientY}else{if(typeof c.clientX==="number"){b=c.clientX;d=c.clientY}}return{x:b,y:d}},getRelPointerPos:function(h){if(!h){h=window.event}var g=h.target||h.srcElement;var f=g.getBoundingClientRect();var b=0,i=0;var d=0,c=0;if(typeof h.changedTouches!=="undefined"&&h.changedTouches.length){d=h.changedTouches[0].clientX;c=h.changedTouches[0].clientY}else{if(typeof h.clientX==="number"){d=h.clientX;c=h.clientY}}b=d-f.left;i=c-f.top;return{x:b,y:i}},getViewPos:function(){var b=document.documentElement;return[(window.pageXOffset||b.scrollLeft)-(b.clientLeft||0),(window.pageYOffset||b.scrollTop)-(b.clientTop||0)]},getViewSize:function(){var b=document.documentElement;return[(window.innerWidth||b.clientWidth),(window.innerHeight||b.clientHeight)]},redrawPosition:function(){if(a.picker&&a.picker.owner){var g=a.picker.owner;var q,e;if(g.fixed){q=a.getElementPos(g.targetElement,true);e=[0,0]}else{q=a.getElementPos(g.targetElement);e=a.getViewPos()}var j=a.getElementSize(g.targetElement);var s=a.getViewSize();var d=a.getPickerOuterDims(g);var r,n,k;switch(g.position.toLowerCase()){case"left":r=1;n=0;k=-1;break;case"right":r=1;n=0;k=1;break;case"top":r=0;n=1;k=-1;break;default:r=0;n=1;k=1;break}var h=(j[n]+d[n])/2;if(!g.smartPosition){var f=[q[r],q[n]+j[n]-h+h*k]}else{var f=[-e[r]+q[r]+d[r]>s[r]?(-e[r]+q[r]+j[r]/2>s[r]/2&&q[r]+j[r]-d[r]>=0?q[r]+j[r]-d[r]:q[r]):q[r],-e[n]+q[n]+j[n]+d[n]-h+h*k>s[n]?(-e[n]+q[n]+j[n]/2>s[n]/2&&q[n]+j[n]-h-h*k>=0?q[n]+j[n]-h-h*k:q[n]+j[n]-h+h*k):(q[n]+j[n]-h+h*k>=0?q[n]+j[n]-h+h*k:q[n]+j[n]-h-h*k)]}var p=f[r];var m=f[n];var o=g.fixed?"fixed":"absolute";var i=(f[0]+d[0]>q[0]||f[0]<q[0]+j[0])&&(f[1]+d[1]<q[1]+j[1]);a._drawPosition(g,p,m,o,i)}},_drawPosition:function(f,c,g,e,d){var b=d?0:f.shadowBlur;a.picker.wrap.style.position=e;a.picker.wrap.style.left=c+"px";a.picker.wrap.style.top=g+"px";a.setBoxShadow(a.picker.boxS,f.shadow?new a.BoxShadow(0,b,f.shadowBlur,0,f.shadowColor):null)},getPickerDims:function(d){var b=!!a.getSliderComponent(d);var c=[2*d.insetWidth+2*d.padding+d.width+(b?2*d.insetWidth+a.getPadToSliderPadding(d)+d.sliderSize:0),2*d.insetWidth+2*d.padding+d.height+(d.closable?2*d.insetWidth+d.padding+d.buttonHeight:0)];return c},getPickerOuterDims:function(c){var b=a.getPickerDims(c);return[b[0]+2*c.borderWidth,b[1]+2*c.borderWidth]},getPadToSliderPadding:function(b){return Math.max(b.padding,1.5*(2*b.pointerBorderWidth+b.pointerThickness))},getPadYComponent:function(b){switch(b.mode.charAt(1).toLowerCase()){case"v":return"v";break}return"s"},getSliderComponent:function(b){if(b.mode.length>2){switch(b.mode.charAt(2).toLowerCase()){case"s":return"s";break;case"v":return"v";break}}return null},onDocumentMouseDown:function(c){if(!c){c=window.event}var b=c.target||c.srcElement;if(b._jscLinkedInstance){if(b._jscLinkedInstance.showOnClick){b._jscLinkedInstance.show()}}else{if(b._jscControlName){a.onControlPointerStart(c,b,b._jscControlName,"mouse")}else{if(a.picker&&a.picker.owner){a.picker.owner.hide()}}}},onDocumentTouchStart:function(c){if(!c){c=window.event}var b=c.target||c.srcElement;if(b._jscLinkedInstance){if(b._jscLinkedInstance.showOnClick){b._jscLinkedInstance.show()}}else{if(b._jscControlName){a.onControlPointerStart(c,b,b._jscControlName,"touch")}else{if(a.picker&&a.picker.owner){a.picker.owner.hide()}}}},onWindowResize:function(b){a.redrawPosition()},onParentScroll:function(b){if(a.picker&&a.picker.owner){a.picker.owner.hide()}},_pointerMoveEvent:{mouse:"mousemove",touch:"touchmove"},_pointerEndEvent:{mouse:"mouseup",touch:"touchend"},_pointerOrigin:null,_capturedTarget:null,onControlPointerStart:function(f,g,d,b){var c=g._jscInstance;a.preventDefault(f);a.captureTarget(g);var i=function(e,m){a.attachGroupEvent("drag",e,a._pointerMoveEvent[b],a.onDocumentPointerMove(f,g,d,b,m));a.attachGroupEvent("drag",e,a._pointerEndEvent[b],a.onDocumentPointerEnd(f,g,d,b))};i(document,[0,0]);if(window.parent&&window.frameElement){var j=window.frameElement.getBoundingClientRect();var h=[-j.left,-j.top];i(window.parent.window.document,h)}var l=a.getAbsPointerPos(f);var k=a.getRelPointerPos(f);a._pointerOrigin={x:l.x-k.x,y:l.y-k.y};switch(d){case"pad":switch(a.getSliderComponent(c)){case"s":if(c.hsv[1]===0){c.fromHSV(null,100,null)}break;case"v":if(c.hsv[2]===0){c.fromHSV(null,null,100)}break}a.setPad(c,f,0,0);break;case"sld":a.setSld(c,f,0);break}a.dispatchFineChange(c)},onDocumentPointerMove:function(f,d,c,b,g){return function(h){var i=d._jscInstance;switch(c){case"pad":if(!h){h=window.event}a.setPad(i,h,g[0],g[1]);a.dispatchFineChange(i);break;case"sld":if(!h){h=window.event}a.setSld(i,h,g[1]);a.dispatchFineChange(i);break}}},onDocumentPointerEnd:function(f,d,c,b){return function(g){var h=d._jscInstance;a.detachGroupEvents("drag");a.releaseTarget();a.dispatchChange(h)}},dispatchChange:function(b){if(b.valueElement){if(a.isElementType(b.valueElement,"input")){a.fireEvent(b.valueElement,"change")}}},dispatchFineChange:function(b){if(b.onFineChange){var c;if(typeof b.onFineChange==="string"){c=new Function(b.onFineChange)}else{c=b.onFineChange}c.call(b)}},setPad:function(b,f,d,c){var k=a.getAbsPointerPos(f);var i=d+k.x-a._pointerOrigin.x-b.padding-b.insetWidth;var h=c+k.y-a._pointerOrigin.y-b.padding-b.insetWidth;var j=i*(360/(b.width-1));var g=100-(h*(100/(b.height-1)));switch(a.getPadYComponent(b)){case"s":b.fromHSV(j,g,null,a.leaveSld);break;case"v":b.fromHSV(j,null,g,a.leaveSld);break}},setSld:function(g,f,c){var b=a.getAbsPointerPos(f);var h=c+b.y-a._pointerOrigin.y-g.padding-g.insetWidth;var d=100-(h*(100/(g.height-1)));switch(a.getSliderComponent(g)){case"s":g.fromHSV(null,d,null,a.leavePad);break;case"v":g.fromHSV(null,null,d,a.leavePad);break}},_vmlNS:"jsc_vml_",_vmlCSS:"jsc_vml_css_",_vmlReady:false,initVML:function(){if(!a._vmlReady){var e=document;if(!e.namespaces[a._vmlNS]){e.namespaces.add(a._vmlNS,"urn:schemas-microsoft-com:vml")}if(!e.styleSheets[a._vmlCSS]){var b=["shape","shapetype","group","background","path","formulas","handles","fill","stroke","shadow","textbox","textpath","imagedata","line","polyline","curve","rect","roundrect","oval","arc","image"];var d=e.createStyleSheet();d.owningElement.id=a._vmlCSS;for(var c=0;c<b.length;c+=1){d.addRule(a._vmlNS+"\\:"+b[c],"behavior:url(#default#VML);")}}a._vmlReady=true}},createPalette:function(){var c={elm:null,draw:null};if(a.isCanvasSupported){var e=document.createElement("canvas");var j=e.getContext("2d");var h=function(o,l,n){e.width=o;e.height=l;j.clearRect(0,0,e.width,e.height);var m=j.createLinearGradient(0,0,e.width,0);m.addColorStop(0/6,"#F00");m.addColorStop(1/6,"#FF0");m.addColorStop(2/6,"#0F0");m.addColorStop(3/6,"#0FF");m.addColorStop(4/6,"#00F");m.addColorStop(5/6,"#F0F");m.addColorStop(6/6,"#F00");j.fillStyle=m;j.fillRect(0,0,e.width,e.height);var k=j.createLinearGradient(0,0,0,e.height);switch(n.toLowerCase()){case"s":k.addColorStop(0,"rgba(255,255,255,0)");k.addColorStop(1,"rgba(255,255,255,1)");break;case"v":k.addColorStop(0,"rgba(0,0,0,0)");k.addColorStop(1,"rgba(0,0,0,1)");break}j.fillStyle=k;j.fillRect(0,0,e.width,e.height)};c.elm=e;c.draw=h}else{a.initVML();var f=document.createElement("div");f.style.position="relative";f.style.overflow="hidden";var d=document.createElement(a._vmlNS+":fill");d.type="gradient";d.method="linear";d.angle="90";d.colors="16.67% #F0F, 33.33% #00F, 50% #0FF, 66.67% #0F0, 83.33% #FF0";var b=document.createElement(a._vmlNS+":rect");b.style.position="absolute";b.style.left=-1+"px";b.style.top=-1+"px";b.stroked=false;b.appendChild(d);f.appendChild(b);var i=document.createElement(a._vmlNS+":fill");i.type="gradient";i.method="linear";i.angle="180";i.opacity="0";var g=document.createElement(a._vmlNS+":rect");g.style.position="absolute";g.style.left=-1+"px";g.style.top=-1+"px";g.stroked=false;g.appendChild(i);f.appendChild(g);var h=function(m,k,l){f.style.width=m+"px";f.style.height=k+"px";b.style.width=g.style.width=(m+1)+"px";b.style.height=g.style.height=(k+1)+"px";d.color="#F00";d.color2="#F00";switch(l.toLowerCase()){case"s":i.color=i.color2="#FFF";break;case"v":i.color=i.color2="#000";break}};c.elm=f;c.draw=h}return c},createSliderGradient:function(){var g={elm:null,draw:null};if(a.isCanvasSupported){var d=document.createElement("canvas");var b=d.getContext("2d");var e=function(l,j,k,i){d.width=l;d.height=j;b.clearRect(0,0,d.width,d.height);var m=b.createLinearGradient(0,0,0,d.height);m.addColorStop(0,k);m.addColorStop(1,i);b.fillStyle=m;b.fillRect(0,0,d.width,d.height)};g.elm=d;g.draw=e}else{a.initVML();var c=document.createElement("div");c.style.position="relative";c.style.overflow="hidden";var h=document.createElement(a._vmlNS+":fill");h.type="gradient";h.method="linear";h.angle="180";var f=document.createElement(a._vmlNS+":rect");f.style.position="absolute";f.style.left=-1+"px";f.style.top=-1+"px";f.stroked=false;f.appendChild(h);c.appendChild(f);var e=function(l,j,k,i){c.style.width=l+"px";c.style.height=j+"px";f.style.width=(l+1)+"px";f.style.height=(j+1)+"px";h.color=k;h.color2=i};g.elm=c;g.draw=e}return g},leaveValue:1<<0,leaveStyle:1<<1,leavePad:1<<2,leaveSld:1<<3,BoxShadow:(function(){var b=function(g,c,h,f,e,d){this.hShadow=g;this.vShadow=c;this.blur=h;this.spread=f;this.color=e;this.inset=!!d};b.prototype.toString=function(){var c=[Math.round(this.hShadow)+"px",Math.round(this.vShadow)+"px",Math.round(this.blur)+"px",Math.round(this.spread)+"px",this.color];if(this.inset){c.push("inset")}return c.join(" ")};return b})(),jscolor:function(j,d){this.value=null;this.valueElement=j;this.styleElement=j;this.required=true;this.refine=true;this.hash=false;this.uppercase=true;this.onFineChange=null;this.activeClass="jscolor-active";this.minS=0;this.maxS=100;this.minV=0;this.maxV=100;this.hsv=[0,0,100];this.rgb=[255,255,255];this.width=181;this.height=101;this.showOnClick=true;this.mode="HSV";this.position="bottom";this.smartPosition=true;this.sliderSize=16;this.crossSize=8;this.closable=false;this.closeText="Close";this.buttonColor="#000000";this.buttonHeight=18;this.padding=12;this.backgroundColor="#FFFFFF";this.borderWidth=1;this.borderColor="#BBBBBB";this.borderRadius=8;this.insetWidth=1;this.insetColor="#BBBBBB";this.shadow=true;this.shadowBlur=15;this.shadowColor="rgba(0,0,0,0.2)";this.pointerColor="#4C4C4C";this.pointerBorderColor="#FFFFFF";this.pointerBorderWidth=1;this.pointerThickness=2;this.zIndex=1000;this.container=null;for(var b in d){if(d.hasOwnProperty(b)){this[b]=d[b]}}this.hide=function(){if(n()){o()}};this.show=function(){g()};this.redraw=function(){if(n()){g()}};this.importColor=function(){if(!this.valueElement){this.exportColor()}else{if(a.isElementType(this.valueElement,"input")){if(!this.refine){if(!this.fromString(this.valueElement.value,a.leaveValue)){if(this.styleElement){this.styleElement.style.backgroundImage=this.styleElement._jscOrigStyle.backgroundImage;this.styleElement.style.backgroundColor=this.styleElement._jscOrigStyle.backgroundColor;this.styleElement.style.color=this.styleElement._jscOrigStyle.color}this.exportColor(a.leaveValue|a.leaveStyle)}}else{if(!this.required&&/^\s*$/.test(this.valueElement.value)){this.valueElement.value="";if(this.styleElement){this.styleElement.style.backgroundImage=this.styleElement._jscOrigStyle.backgroundImage;this.styleElement.style.backgroundColor=this.styleElement._jscOrigStyle.backgroundColor;this.styleElement.style.color=this.styleElement._jscOrigStyle.color}this.exportColor(a.leaveValue|a.leaveStyle)}else{if(this.fromString(this.valueElement.value)){}else{this.exportColor()}}}}else{this.exportColor()}}};this.exportColor=function(t){if(!(t&a.leaveValue)&&this.valueElement){var u=this.toString();if(this.uppercase){u=u.toUpperCase()}if(this.hash){u="#"+u}if(a.isElementType(this.valueElement,"input")){this.valueElement.value=u}else{this.valueElement.innerHTML=u}}if(!(t&a.leaveStyle)){if(this.styleElement){this.styleElement.style.backgroundImage="none";this.styleElement.style.backgroundColor="#"+this.toString();this.styleElement.style.color=this.isLight()?"#000":"#FFF"}}if(!(t&a.leavePad)&&n()){l()}if(!(t&a.leaveSld)&&n()){s()}};this.fromHSV=function(x,w,u,t){if(x!==null){if(isNaN(x)){return false}x=Math.max(0,Math.min(360,x))}if(w!==null){if(isNaN(w)){return false}w=Math.max(0,Math.min(100,this.maxS,w),this.minS)}if(u!==null){if(isNaN(u)){return false}u=Math.max(0,Math.min(100,this.maxV,u),this.minV)}this.rgb=e(x===null?this.hsv[0]:(this.hsv[0]=x),w===null?this.hsv[1]:(this.hsv[1]=w),u===null?this.hsv[2]:(this.hsv[2]=u));this.exportColor(t)};this.fromRGB=function(y,x,t,u){if(y!==null){if(isNaN(y)){return false}y=Math.max(0,Math.min(255,y))}if(x!==null){if(isNaN(x)){return false}x=Math.max(0,Math.min(255,x))}if(t!==null){if(isNaN(t)){return false}t=Math.max(0,Math.min(255,t))}var w=q(y===null?this.rgb[0]:y,x===null?this.rgb[1]:x,t===null?this.rgb[2]:t);if(w[0]!==null){this.hsv[0]=Math.max(0,Math.min(360,w[0]))}if(w[2]!==0){this.hsv[1]=w[1]===null?null:Math.max(0,this.minS,Math.min(100,this.maxS,w[1]))}this.hsv[2]=w[2]===null?null:Math.max(0,this.minV,Math.min(100,this.maxV,w[2]));var v=e(this.hsv[0],this.hsv[1],this.hsv[2]);this.rgb[0]=v[0];this.rgb[1]=v[1];this.rgb[2]=v[2];this.exportColor(u)};this.fromString=function(A,v){var w;if(w=A.match(/^\W*([0-9A-F]{3}([0-9A-F]{3})?)\W*$/i)){if(w[1].length===6){this.fromRGB(parseInt(w[1].substr(0,2),16),parseInt(w[1].substr(2,2),16),parseInt(w[1].substr(4,2),16),v)}else{this.fromRGB(parseInt(w[1].charAt(0)+w[1].charAt(0),16),parseInt(w[1].charAt(1)+w[1].charAt(1),16),parseInt(w[1].charAt(2)+w[1].charAt(2),16),v)}return true}else{if(w=A.match(/^\W*rgba?\(([^)]*)\)\W*$/i)){var x=w[1].split(",");var C=/^\s*(\d*)(\.\d+)?\s*$/;var z,D,u;if(x.length>=3&&(z=x[0].match(C))&&(D=x[1].match(C))&&(u=x[2].match(C))){var t=parseFloat((z[1]||"0")+(z[2]||""));var y=parseFloat((D[1]||"0")+(D[2]||""));var B=parseFloat((u[1]||"0")+(u[2]||""));this.fromRGB(t,y,B,v);return true}}}return false};this.toString=function(){return((256|Math.round(this.rgb[0])).toString(16).substr(1)+(256|Math.round(this.rgb[1])).toString(16).substr(1)+(256|Math.round(this.rgb[2])).toString(16).substr(1))};this.toHEXString=function(){return"#"+this.toString().toUpperCase()};this.toRGBString=function(){return("rgb("+Math.round(this.rgb[0])+","+Math.round(this.rgb[1])+","+Math.round(this.rgb[2])+")")};this.isLight=function(){return(0.213*this.rgb[0]+0.715*this.rgb[1]+0.072*this.rgb[2]>255/2)};this._processParentElementsInDOM=function(){if(this._linkedElementsProcessed){return}this._linkedElementsProcessed=true;var u=this.targetElement;do{var t=a.getStyle(u);if(t&&t.position.toLowerCase()==="fixed"){this.fixed=true}if(u!==this.targetElement){if(!u._jscEventsAttached){a.attachEvent(u,"scroll",a.onParentScroll);u._jscEventsAttached=true}}}while((u=u.parentNode)&&!a.isElementType(u,"body"))};function q(z,y,u){z/=255;y/=255;u/=255;var A=Math.min(Math.min(z,y),u);var w=Math.max(Math.max(z,y),u);var t=w-A;if(t===0){return[null,0,100*w]}var x=z===A?3+(u-y)/t:(y===A?5+(z-u)/t:1+(y-z)/t);return[60*(x===6?0:x),100*(t/w),100*w]}function e(A,z,w){var x=255*(w/100);if(A===null){return[x,x,x]}A/=60;z/=100;var y=Math.floor(A);var B=y%2?A-y:1-(A-y);var t=x*(1-z);var C=x*(1-z*B);switch(y){case 6:case 0:return[x,C,t];case 1:return[C,x,t];case 2:return[t,x,C];case 3:return[t,C,x];case 4:return[C,t,x];case 5:return[x,t,C]}}function o(){a.unsetClass(h.targetElement,h.activeClass);a.picker.wrap.parentNode.removeChild(a.picker.wrap);delete a.picker.owner}function g(){h._processParentElementsInDOM();if(!a.picker){a.picker={owner:null,wrap:document.createElement("div"),box:document.createElement("div"),boxS:document.createElement("div"),boxB:document.createElement("div"),pad:document.createElement("div"),padB:document.createElement("div"),padM:document.createElement("div"),padPal:a.createPalette(),cross:document.createElement("div"),crossBY:document.createElement("div"),crossBX:document.createElement("div"),crossLY:document.createElement("div"),crossLX:document.createElement("div"),sld:document.createElement("div"),sldB:document.createElement("div"),sldM:document.createElement("div"),sldGrad:a.createSliderGradient(),sldPtrS:document.createElement("div"),sldPtrIB:document.createElement("div"),sldPtrMB:document.createElement("div"),sldPtrOB:document.createElement("div"),btn:document.createElement("div"),btnT:document.createElement("span")};a.picker.pad.appendChild(a.picker.padPal.elm);a.picker.padB.appendChild(a.picker.pad);a.picker.cross.appendChild(a.picker.crossBY);a.picker.cross.appendChild(a.picker.crossBX);a.picker.cross.appendChild(a.picker.crossLY);a.picker.cross.appendChild(a.picker.crossLX);a.picker.padB.appendChild(a.picker.cross);a.picker.box.appendChild(a.picker.padB);a.picker.box.appendChild(a.picker.padM);a.picker.sld.appendChild(a.picker.sldGrad.elm);a.picker.sldB.appendChild(a.picker.sld);a.picker.sldB.appendChild(a.picker.sldPtrOB);a.picker.sldPtrOB.appendChild(a.picker.sldPtrMB);a.picker.sldPtrMB.appendChild(a.picker.sldPtrIB);a.picker.sldPtrIB.appendChild(a.picker.sldPtrS);a.picker.box.appendChild(a.picker.sldB);a.picker.box.appendChild(a.picker.sldM);a.picker.btn.appendChild(a.picker.btnT);a.picker.box.appendChild(a.picker.btn);a.picker.boxB.appendChild(a.picker.box);a.picker.wrap.appendChild(a.picker.boxS);a.picker.wrap.appendChild(a.picker.boxB)}var t=a.picker;var y=!!a.getSliderComponent(h);var A=a.getPickerDims(h);var z=(2*h.pointerBorderWidth+h.pointerThickness+2*h.crossSize);var u=a.getPadToSliderPadding(h);var v=Math.min(h.borderRadius,Math.round(h.padding*Math.PI));var w="crosshair";t.wrap.style.clear="both";t.wrap.style.width=(A[0]+2*h.borderWidth)+"px";t.wrap.style.height=(A[1]+2*h.borderWidth)+"px";t.wrap.style.zIndex=h.zIndex;t.box.style.width=A[0]+"px";t.box.style.height=A[1]+"px";t.boxS.style.position="absolute";t.boxS.style.left="0";t.boxS.style.top="0";t.boxS.style.width="100%";t.boxS.style.height="100%";a.setBorderRadius(t.boxS,v+"px");t.boxB.style.position="relative";t.boxB.style.border=h.borderWidth+"px solid";t.boxB.style.borderColor=h.borderColor;t.boxB.style.background=h.backgroundColor;a.setBorderRadius(t.boxB,v+"px");t.padM.style.background=t.sldM.style.background="#FFF";a.setStyle(t.padM,"opacity","0");a.setStyle(t.sldM,"opacity","0");t.pad.style.position="relative";t.pad.style.width=h.width+"px";t.pad.style.height=h.height+"px";t.padPal.draw(h.width,h.height,a.getPadYComponent(h));t.padB.style.position="absolute";t.padB.style.left=h.padding+"px";t.padB.style.top=h.padding+"px";t.padB.style.border=h.insetWidth+"px solid";t.padB.style.borderColor=h.insetColor;t.padM._jscInstance=h;t.padM._jscControlName="pad";t.padM.style.position="absolute";t.padM.style.left="0";t.padM.style.top="0";t.padM.style.width=(h.padding+2*h.insetWidth+h.width+u/2)+"px";t.padM.style.height=A[1]+"px";t.padM.style.cursor=w;t.cross.style.position="absolute";t.cross.style.left=t.cross.style.top="0";t.cross.style.width=t.cross.style.height=z+"px";t.crossBY.style.position=t.crossBX.style.position="absolute";t.crossBY.style.background=t.crossBX.style.background=h.pointerBorderColor;t.crossBY.style.width=t.crossBX.style.height=(2*h.pointerBorderWidth+h.pointerThickness)+"px";t.crossBY.style.height=t.crossBX.style.width=z+"px";t.crossBY.style.left=t.crossBX.style.top=(Math.floor(z/2)-Math.floor(h.pointerThickness/2)-h.pointerBorderWidth)+"px";t.crossBY.style.top=t.crossBX.style.left="0";t.crossLY.style.position=t.crossLX.style.position="absolute";t.crossLY.style.background=t.crossLX.style.background=h.pointerColor;t.crossLY.style.height=t.crossLX.style.width=(z-2*h.pointerBorderWidth)+"px";t.crossLY.style.width=t.crossLX.style.height=h.pointerThickness+"px";t.crossLY.style.left=t.crossLX.style.top=(Math.floor(z/2)-Math.floor(h.pointerThickness/2))+"px";t.crossLY.style.top=t.crossLX.style.left=h.pointerBorderWidth+"px";t.sld.style.overflow="hidden";t.sld.style.width=h.sliderSize+"px";t.sld.style.height=h.height+"px";t.sldGrad.draw(h.sliderSize,h.height,"#000","#000");t.sldB.style.display=y?"block":"none";t.sldB.style.position="absolute";t.sldB.style.right=h.padding+"px";t.sldB.style.top=h.padding+"px";t.sldB.style.border=h.insetWidth+"px solid";t.sldB.style.borderColor=h.insetColor;t.sldM._jscInstance=h;t.sldM._jscControlName="sld";t.sldM.style.display=y?"block":"none";t.sldM.style.position="absolute";t.sldM.style.right="0";t.sldM.style.top="0";t.sldM.style.width=(h.sliderSize+u/2+h.padding+2*h.insetWidth)+"px";t.sldM.style.height=A[1]+"px";t.sldM.style.cursor="default";t.sldPtrIB.style.border=t.sldPtrOB.style.border=h.pointerBorderWidth+"px solid "+h.pointerBorderColor;t.sldPtrOB.style.position="absolute";t.sldPtrOB.style.left=-(2*h.pointerBorderWidth+h.pointerThickness)+"px";t.sldPtrOB.style.top="0";t.sldPtrMB.style.border=h.pointerThickness+"px solid "+h.pointerColor;t.sldPtrS.style.width=h.sliderSize+"px";t.sldPtrS.style.height=p+"px";function B(){var C=h.insetColor.split(/\s+/);var D=C.length<2?C[0]:C[1]+" "+C[0]+" "+C[0]+" "+C[1];t.btn.style.borderColor=D}t.btn.style.display=h.closable?"block":"none";t.btn.style.position="absolute";t.btn.style.left=h.padding+"px";t.btn.style.bottom=h.padding+"px";t.btn.style.padding="0 15px";t.btn.style.height=h.buttonHeight+"px";t.btn.style.border=h.insetWidth+"px solid";B();t.btn.style.color=h.buttonColor;t.btn.style.font="12px sans-serif";t.btn.style.textAlign="center";try{t.btn.style.cursor="pointer"}catch(x){t.btn.style.cursor="hand"}t.btn.onmousedown=function(){h.hide()};t.btnT.style.lineHeight=h.buttonHeight+"px";t.btnT.innerHTML="";t.btnT.appendChild(document.createTextNode(h.closeText));l();s();if(a.picker.owner&&a.picker.owner!==h){a.unsetClass(a.picker.owner.targetElement,h.activeClass)}a.picker.owner=h;if(a.isElementType(k,"body")){a.redrawPosition()}else{a._drawPosition(h,0,0,"relative",false)}if(t.wrap.parentNode!=k){k.appendChild(t.wrap)}a.setClass(h.targetElement,h.activeClass)}function l(){switch(a.getPadYComponent(h)){case"s":var w=1;break;case"v":var w=2;break}var C=Math.round((h.hsv[0]/360)*(h.width-1));var B=Math.round((1-h.hsv[w]/100)*(h.height-1));var A=(2*h.pointerBorderWidth+h.pointerThickness+2*h.crossSize);var v=-Math.floor(A/2);a.picker.cross.style.left=(C+v)+"px";a.picker.cross.style.top=(B+v)+"px";switch(a.getSliderComponent(h)){case"s":var u=e(h.hsv[0],100,h.hsv[2]);var t=e(h.hsv[0],0,h.hsv[2]);var E="rgb("+Math.round(u[0])+","+Math.round(u[1])+","+Math.round(u[2])+")";var D="rgb("+Math.round(t[0])+","+Math.round(t[1])+","+Math.round(t[2])+")";a.picker.sldGrad.draw(h.sliderSize,h.height,E,D);break;case"v":var z=e(h.hsv[0],h.hsv[1],100);var E="rgb("+Math.round(z[0])+","+Math.round(z[1])+","+Math.round(z[2])+")";var D="#000";a.picker.sldGrad.draw(h.sliderSize,h.height,E,D);break}}function s(){var u=a.getSliderComponent(h);if(u){switch(u){case"s":var t=1;break;case"v":var t=2;break}var v=Math.round((1-h.hsv[t]/100)*(h.height-1));a.picker.sldPtrOB.style.top=(v-(2*h.pointerBorderWidth+h.pointerThickness)-Math.floor(p/2))+"px"}}function n(){return a.picker&&a.picker.owner===h}function i(){h.importColor()}if(typeof j==="string"){var m=j;var f=document.getElementById(m);if(f){this.targetElement=f}else{a.warn("Could not find target element with ID '"+m+"'")}}else{if(j){this.targetElement=j}else{a.warn("Invalid target element: '"+j+"'")}}if(this.targetElement._jscLinkedInstance){a.warn("Cannot link jscolor twice to the same element. Skipping.");return}this.targetElement._jscLinkedInstance=this;this.valueElement=a.fetchElement(this.valueElement);this.styleElement=a.fetchElement(this.styleElement);var h=this;var k=this.container?a.fetchElement(this.container):document.getElementsByTagName("body")[0];var p=3;if(a.isElementType(this.targetElement,"button")){if(this.targetElement.onclick){var c=this.targetElement.onclick;this.targetElement.onclick=function(t){c.call(this,t);return false}}else{this.targetElement.onclick=function(){return false}}}if(this.valueElement){if(a.isElementType(this.valueElement,"input")){var r=function(){h.fromString(h.valueElement.value,a.leaveValue);a.dispatchFineChange(h)};a.attachEvent(this.valueElement,"keyup",r);a.attachEvent(this.valueElement,"input",r);a.attachEvent(this.valueElement,"blur",i);this.valueElement.setAttribute("autocomplete","off")}}if(this.styleElement){this.styleElement._jscOrigStyle={backgroundImage:this.styleElement.style.backgroundImage,backgroundColor:this.styleElement.style.backgroundColor,color:this.styleElement.style.color}}if(this.value){this.fromString(this.value)||this.exportColor()}else{this.importColor()}}};a.jscolor.lookupClass="jscolor";a.jscolor.installByClassName=function(d){var c=document.getElementsByTagName("input");var b=document.getElementsByTagName("button");a.tryInstallOnElements(c,d);a.tryInstallOnElements(b,d)};a.register();return a.jscolor})()};