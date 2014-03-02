/** 
 * @Description: common 
 * @author: wangjun 
 * @Update: 2014-02-27 15:02 
 */ 
(function(win){function timeNow(){return+new Date}var hp=hp||{},_win=window,_doc=document,_docEl=_doc.documentElement,_head=_doc.getElementsByTagName("head")[0]||_docEl,_userAgent=navigator.userAgent.toLowerCase(),_expando="hp"+timeNow(),_parseInt=parseInt;hp.ready=function(t){function e(){hp.browser.msie?("complete"===_doc.readyState||"interactive"===_doc.readyState)&&(hp.unbind(_doc,"readystatechange",e),o()):(hp.unbind(_win,"DOMContentLoaded",e),o())}function o(){for(var t=0,e=a.length;e>t;t++)setTimeout(a[t],25)}var a=[];a.push(t),hp.browser.msie?(hp.unbind(_doc,"readystatechange",e),hp.bind(_doc,"readystatechange",e)):hp.bind(_win,"DOMContentLoaded",e)},hp.bind=function(t,e,o){function a(t){var t=t||_win.event,e=this.events[t.type];for(var o in e)e[o].call(this,t)}var n=1;if(_win.addEventListener)return t.addEventListener(e,o,!1),void 0;n||(o.guid=n++),t.events||(t.events={});var i=t.events[e];i||(i=t.events[e]={},t["on"+e]&&(i[0]=t["on"+e])),i[o.guid]=o,t["on"+e]=a},hp.unbind=function(t,e,o){if(_win.removeEventListener)return t.removeEventListener(e,o),void 0;if(t.events){var a=t.events[e];a&&delete a[o._id]}},hp.dom={byId:function(t,e){return("string"==typeof t?(e||_doc).getElementById(t):t)||null},byName:function(t,e){return(e||_doc).getElementsByTagName(t)},byClass:function(t,e){var o,a=RegExp("(^|\\s)"+t+"(\\s|$)"),n=[],i=hp.dom.byName("*",e);for(o=0;i.length>o;o++)a.test(i[o].className)&&n.push(i[o]);return n},$:function(t,e){switch(t.charAt(0)){case"#":return hp.dom.byId(t.substring(1),e);case".":return hp.dom.byClass(t.substring(1),e);default:return hp.dom.byName(t,e)}},parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},children:function(t){for(var e=t.firstChild,o=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&o.push(e);return o},next:function(t){return hp.dom._brother(t,"nextSibling")},prev:function(t){return hp.dom._brother(t,"previousSibling")},first:function(t){return t=t.firstChild,t&&1!=t.nodeType?hp.dom.next(t):t},last:function(t){return t=t.lastChild,t&&1!=t.nodeType?hp.dom.prev(t):t},_brother:function(t,e){do t=t[e];while(t&&1!=t.nodeType);return t},append:function(t,e){return hp.dom._domManip(t,e,function(t){1==this.nodeType&&this.appendChild(t)})},prepend:function(t,e){return hp.dom._domManip(t,e,function(t){1==this.nodeType&&this.insertBefore(t,this.firstChild)})},before:function(t,e){return hp.dom._domManip(t,e,function(e){this.parentNode.insertBefore(e,t)})},after:function(t,e){return hp.dom._domManip(t,e,function(e){this.parentNode.insertBefore(e,hp.dom.next(t))})},getText:function(t){var e,o,a=t.nodeType,n="";if(a){if(1===a){if("string"==typeof t.textContent)return t.textContent;if("string"==typeof t.innerText)return t.innerText.replace(rReturn,"");for(t=t.firstChild;t;t=t.nextSibling)n+=t}else if(3===a||4===a)return t.nodeValue}else for(e=0;o=t[e];e++)8!==o.nodeType&&(n+=getText(o));return n},_domManip:function(t,e,o){var a=_doc.createElement("div"),n=_doc.createDocumentFragment();"string"==typeof e?a.innerHTML=e:a.appendChild(e);for(var i=a.firstChild;i;i=i.nextSibling)1!==i.nodeType&&3!==i.nodeType||i===a||n.appendChild(i);return o.call(t,n),t},attr:function(t,e,o){return 2==arguments.length?t.attributes[e]?t.attributes[e].nodeValue:void 0:(3==arguments.length&&t.setAttribute(e,o),void 0)},remove:function(t){var e=this.parent(t);e&&e.removeChild(t)},css:function(t,e){if(t){var o,a,n,i;n=t,o=n.style;for(var s in e)switch(i=e[s],a=i+"px",s){case"d":o.display=i;break;case"p":o.position=i;break;case"w":o.width=a;break;case"h":o.height=a;break;case"t":o.top=a;break;case"l":o.left=a;break;case"r":o.right=a;break;case"b":o.bottom=a;break;case"o":o.overflow=i;break;case"bac":o.background=i;break;case"border":o.border=i;break;case"opacity":o.filter="alpha(opacity="+i+")",o.opacity=i/100;break;default:o[s]=i}}},getStyle:function(t){var e;return e=_doc.defaultView&&_doc.defaultView.getComputedStyle?_doc.defaultView.getComputedStyle(t,null):t.currentStyle},show:function(t){hp.dom.css(t,{d:"block"})},hide:function(t){hp.dom.css(t,{d:"none"})},toggle:function(t){t.style.display="none"==t.style.display?"block":"none"},hasClass:function(t,e){return RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className)},addClass:function(t,e){var o=t.className.split(/\s+/);hp.dom.hasClass(t,e)||o.push(e),t.className=o.join(" ").replace(/(^\s*)|(\s*$)/,"")},removeClass:function(t,e){t.className=t.className.replace(RegExp("(^|\\s)"+e+"(\\s|$)","g"),"").split(/\s+/).join(" ")},toggleClass:function(t,e){this.hasClass(t,e)?this.removeClass(t,e):this.addClass(t,e)},getOffsetPos:function(t){if(t){var e=0,o=0;if("getBoundingClientRect"in _docEl)var a=t.getBoundingClientRect(),n=t.ownerDocument,i=n.clientTop||_doc.body.clientTop||0,s=n.clientLeft||_doc.body.clientLeft||0,e=a.left+(self.pageXOffset||_docEl&&_docEl.scrollLeft||_doc.body.scrollTop)-s,o=a.top+(self.pageYOffset||_docEl&&_docEl.scrollTop||_doc.body.scrollTop)-i;else do o+=t.offsetTop,e+=t.offsetLeft,t=t.offsetParent;while(t);return{left:e,top:o}}},getView:function(){var t=_docEl.clientHeight||_doc.body.clientHeight,e=_docEl.clientWidth||_doc.body.clientWidth,o=_docEl.scrollTop||_doc.body.scrollTop,a=_docEl.scrollLeft||_doc.body.scrollLeft;return{width:e,height:t,scrollTop:o,scrollLeft:a}}},hp.id=hp.dom.byId,hp.name=hp.dom.byName,hp.byClass=hp.dom.byClass,hp.$=hp.dom.$,hp.parent=hp.dom.parent,hp.children=hp.dom.children,hp.next=hp.dom.next,hp.prev=hp.dom.prev,hp.first=hp.dom.first,hp.last=hp.dom.last,hp.append=hp.dom.append,hp.prepend=hp.dom.prepend,hp.before=hp.dom.before,hp.after=hp.dom.after,hp.getText=hp.dom.getText,hp.attr=hp.dom.attr,hp.remove=hp.dom.remove,hp.css=hp.dom.css,hp.show=hp.dom.show,hp.hide=hp.dom.hide,hp.toggle=hp.dom.toggle,hp.getStyle=hp.dom.getStyle,hp.hasClass=hp.dom.hasClass,hp.addClass=hp.dom.addClass,hp.removeClass=hp.dom.removeClass,hp.toggleClass=hp.dom.toggleClass,hp.getOffsetPos=hp.dom.getOffsetPos,hp.getView=hp.dom.getView,hp.browser={version:(_userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1],chrome:/chrome/.test(_userAgent),safari:/webkit/.test(_userAgent),opera:/opera/.test(_userAgent),msie:/msie/.test(_userAgent)&&!/opera/.test(_userAgent),mozilla:/mozilla/.test(_userAgent)&&!/(compatible|webkit)/.test(_userAgent),mobile:/Mobile/i.test(_userAgent),ios:/\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(_userAgent),iphone:/iphone/i.test(_userAgent),ipad:/ipad/i.test(_userAgent),android:/android/i.test(_userAgent)||/Linux/i.test(_userAgent)},hp.each=function(t,e){if("function"==typeof e){var o,a,n=t.length;for(a=0;n>a&&(o=e.call(t[a],a,t[a]),o!==!1);a++);}return t},hp.extend=function(t,e){for(var o in e)t[o]=e[o];return t},hp.isArray=function(t){return"[object Array]"==Object.prototype.toString.call(t)},hp.isFunction=function(t){return"[object Function]"==Object.prototype.toString.call(t)},hp.trim=function(t){var e=RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)","g");return t.replace(e,"")},hp.parseJSON=function(t){if("string"!=typeof t||!t)return null;var e=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,a=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,n=/(?:^|:|,)(?:\s*\[)+/g;if(t=hp.trim(t),e.test(t.replace(o,"@").replace(a,"]").replace(n,"")))return window.JSON&&window.JSON.parse?window.JSON.parse(t):Function("return "+t)();throw"Invalid JSON: "+t},hp.globalEval=function(t){var t=hp.trim(t);if(t){var e=document.createElement("script");e.type="text/javascript",hp.browser.msie?e.text=t:e.appendChild(document.createTextNode(t)),_head.insertBefore(e,_head.firstChild),_head.removeChild(e)}},hp.loadStyle=function(t){var e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("type","text/css"),e.setAttribute("href",t),_head.appendChild(e)},hp.loadScript=function(t,e,o){var a,n=document.createElement("script"),i=!0,t=t||"",s=e||function(){},r=o||{},p=r.timeout,c=r.charset;p&&(a=setTimeout(function(){n.onload=n.onreadystatechange=null},p)),n.onload=n.onreadystatechange=function(){if(i&&(!this.readyState||"loaded"==this.readyState||"complete"==this.readyState)){i=!1;try{s(),p&&clearTimeout(a)}catch(t){}_head.removeChild(n)}},n.src=t,n.type="text/javascript",c&&(n.charset=c),_head.appendChild(n)},hp.ajax=function(options){function _getXHR(){if(window.ActiveXObject)try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}return window.XMLHttpRequest?new XMLHttpRequest:void 0}function httpData(httpRequest,dataType){var dataType=(dataType||httpRequest.getResponseHeader("Content-Type").split(";")[0]).toLowerCase(),data=dataType.indexOf("xml")>=0?httpRequest.responseXML:httpRequest.responseText;if(dataType.indexOf("json")>=0&&(data=eval("("+data+")")),dataType.indexOf("script")>=0&&(data=hp.globalEval(data)),dataType.indexOf("xml")>=0&&"parsererror"==data.documentElement.tagName)throw"parsererror";return data}function param(t){var e=[];if(t.constructor!=Array&&!t.jquery){for(var o in t)t[o]&&t[o].constructor==Array?hp.each(t[o],function(){e.push(encodeURIComponent(o)+"="+encodeURIComponent(this))}):e.push(encodeURIComponent(o)+"="+encodeURIComponent(hp.isFunction(t[o])?t[o]():t[o]));return e.join("&").replace(/%20/g,"+")}hp.each(t,function(){e.push(encodeURIComponent(this.name)+"="+encodeURIComponent(this.value))})}var httpRequest,httpSuccess,timer,status,statusText,opt=options||{},url=opt.url||"",type=(opt.type||"GET").toUpperCase(),data=opt.data||null,async=opt.async||!0,timeout=opt.timeout,onTimeout=opt.onTimeout||function(){},timeoutFn=opt.timeoutFn||function(){},success=opt.success||function(){},complete=opt.complete||function(){},error=opt.error||function(){},contentType=opt.contentType||"application/x-www-form-urlencoded ",dataType=opt.dataType||"",cache=opt.cache||!0,jsonp=opt.jsonp||"callback";httpRequest=new _getXHR;var callbackName,jsre=/=\?(&|$)/g,jsc=timeNow();if(data&&"string"!=typeof data&&(data=param(data)),"jsonp"==dataType&&"GET"==type&&(url.match(jsre)?data&&data.match(jsre)||(data=(data?data+"&":"")+jsonp+"=?",dataType="json"):url+=(url.indexOf("?")>=0?"&":"?")+jsonp+"=?"),"json"==dataType&&(callbackName="jsonp"+jsc++,data&&(data=(data+"").replace(jsre,"="+callbackName+"$1")),url=url.replace(jsre,"="+callbackName+"$1"),dataType="script",window[callbackName]=function(t){data=t;try{success&&success(data,status),complete&&complete(httpRequest,statusText)}catch(e){}window[callbackName]=void 0;try{delete window[callbackName]}catch(e){}}),data&&"GET"==type&&(url+=(url.match(/\?/)?"&":"?")+data,data=null),cache===!1&&"GET"==type){var ts=timeNow(),ret=url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+ts+"$2");url=ret+(ret==url?(url.match(/\?/)?"&":"?")+"_="+ts:"")}var remote=/^(?:\w+:)?\/\/([^\/?#]+)/;if("script"==dataType&&"GET"==type&&remote.test(url)&&remote.exec(url)[1]!=location.host)return hp.loadScript(url,function(){callbackName||(success&&success(data,status),complete&&complete(httpRequest,statusText))}),void 0;httpSuccess=function(t){try{return!t.status&&"file:"==location.protocol||t.status>=200&&300>t.status||304==t.status||hp.browser.safari&&t.status===void 0}catch(e){}return!1},timeout&&(timer=setTimeout(function(){httpRequest.abort(),onTimeout&&timeoutFn(url)},timeout)),httpRequest.onreadystatechange=function(){if(4==httpRequest.readyState){timer&&clearTimeout(timer),status=httpRequest.status,statusText=httpRequest.statusText;try{var t=httpData(httpRequest,dataType);success(t)}catch(e){error(httpRequest,status,statusText)}complete&&complete(httpRequest,statusText),httpRequest=null}},httpRequest.open(type,url,async);try{data&&httpRequest.setRequestHeader("Content-Type",contentType),httpRequest.setRequestHeader("X-Requested-With","XMLHttpRequest")}catch(e){}return httpRequest.send(data),httpRequest},hp.get=function(t,e,o,a){hp.isFunction(e)&&(a=o,o=e,e=null),hp.ajax({url:t,type:"GET",data:e,success:o,dataType:a||"text/plain"})},hp.post=function(t,e,o,a){hp.isFunction(e)&&(a=o,o=e,e=null),hp.ajax({url:t,type:"POST",data:e,success:o,dataType:a||"text/plain"})},hp.getJSON=function(t,e,o,a){hp.isFunction(e)&&(a=o,o=e,e=null),hp.ajax({url:t,data:e,success:o,dataType:a||"json"})},hp.getScript=function(t,e){return hp.get(t,void 0,e,"script")},hp.cookie={getRaw:function(t){if(hp.cookie._isValidKey(t)){var e=RegExp("(^| )"+t+"=([^;]*)(;|$)"),o=e.exec(document.cookie);if(o)return o[2]||null}return null},get:function(t){var e=hp.cookie.getRaw(t);return"string"==typeof e?e=decodeURIComponent(e):null},setRaw:function(t,e,o){if(hp.cookie._isValidKey(t)){o=o||{};var a=o.expires;"number"==typeof o.expires&&(a=new Date,a.setTime(a.getTime()+o.expires)),document.cookie=t+"="+e+(o.path?"; path="+o.path:"")+(a?"; expires="+a.toGMTString():"")+(o.domain?"; domain="+o.domain:"")+(o.secure?"; secure":"")}},set:function(t,e,o){hp.cookie.setRaw(t,encodeURIComponent(e),o)},remove:function(t,e){e=e||{},e.expires=new Date(0),hp.cookie.setRaw(t,"",e)},_isValidKey:function(t){return RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(t)}},hp.event=function(t){if(t=t||_win.event,1==t[_expando])return t;var e=t;return t[_expando]=!0,t={originalEvent:e},t.stopPropagation=function(){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},t.preventDefault=function(){e.preventDefault?e.preventDefault():e.returnValue=!1},"string"==typeof t&&(t.type=t),t.target||(t.target=e.target||e.srcElement),3==t.target.nodeType&&(t.target=t.target.parentNode),!t.relatedTarget&&t.fromElement&&(t.relatedTarget=t.fromElement==t.target?t.toElement:t.fromElement),null==t.pageX&&null!=e.clientX&&(t.pageX=e.clientX+(_docEl&&_docEl.scrollLeft||_doc.body&&_doc.body.scrollLeft||0)-(_docEl.clientLeft||0),t.pageY=e.clientY+(_docEl&&_docEl.scrollTop||_doc.body&&_doc.body.scrollTop||0)-(_docEl.clientTop||0)),t},win.hp=hp})(window);var _win=window,_doc=document,_docEl=_doc.documentElement,_parseInt=parseInt,_data=+new Date,_topIframe=top==this,_gaq=_gaq||[],pageTracker=pageTracker||[],_common={init:function(t){var e=this,t=hp.extend({project:"sports",topbarLoginInfo:!0,ifRemind:!0,ifCount:!0,ifCountIframe:!1,countGASetVar:"",countGATrackPageview:""},t);this.project="hupu"==t.project?"sports":t.project,this.project="nba"==t.project||"cba"==t.project?"basketball":t.project,this.topbarLoginInfo=t.topbarLoginInfo,this.ifRemind=t.ifRemind,this.ifCount=t.ifCount,this.ifCountIframe=t.ifCountIframe,this.countGASetVar=t.countGASetVar,this.countGATrackPageview=t.countGATrackPageview,this.countGAUser="not login",this.urlName="hupu",this.userId="",this.subDomain=window.location.host.split(".")[0]||"nba",this.shihuoHost=/shihuo./.test(location.host),this.myDomain="http://my."+this.urlName+".com",this.setTopbarLogin(function(t){e.setMenuOn(),e.isLogin()&&(e.countGAUser=t.level+"_"+t.uid),e.countVisits()}),this.dropDownMenu(),this.searchWebsite(),this.followBlog()},user:{isLogin:function(){var t=document.cookie.match(RegExp("(^| )ua=([^;]*)(;|$)"));return t&&t[2]?!0:void 0}},isLogin:function(){var t=document.cookie.match(RegExp("(^| )ua=([^;]*)(;|$)"));return t&&t[2]?!0:void 0},setMenuOn:function(){function t(t,e){return e.l-t.l}var e,o,a,n,i,s=hp.$(".hp-subNav")[0],r=null,p=[];if(s){if(e=hp.$("a",s),"bbs"==this.subDomain)return n=hp.$("#level2header"),null==n?!1:(i=hp.attr(n,"title"),hp.each(e,function(){return this.innerHTML==i?(hp.addClass(this,"on"),!1):void 0}),!1);hp.each(e,function(t){var e=this.href;e="/"==e.charAt(e.length-1)?e.slice(0,e.length-1):e,r={u:e,n:t,h:this.innerHTML,l:this.href.length},p.push(r)}),o=p.sort(t),hp.each(o,function(){var t=this.u;if(window.location.href.match(t)){var o=this.n;return a=hp.parent(e[o]),"hp-drapDown"!=a.className?(hp.addClass(e[o],"on"),!1):(a=hp.prev(a),hp.addClass(a,"on"),!1)}})}},dropDownMenu:function(t){var e,o,t=hp.extend({elem:"hp-dropDownMenu",a:"hp-set",hover:"hp-setH",drapDown:"hp-drapDown",delay:!1},t),a=hp.$("."+t.elem),n=null;return a?(hp.each(a,function(){hp.bind(this,"mouseover",function(){return t.delay&&n&&clearTimeout(n),e=hp.$("."+t.a,this)[0],o=hp.$("."+t.drapDown,this)[0],e&&o?(hp.browser.mobile&&hp.bind(e,"click",function(t){return t.preventDefault(),!1}),hp.addClass(e,t.hover),hp.show(o),!1):!1}),hp.bind(this,"mouseout",function(){return e=hp.$("."+t.a,this)[0],o=hp.$("."+t.drapDown,this)[0],e&&o?(t.delay?n=setTimeout(function(){hp.removeClass(e,t.hover),hp.hide(o)},300):(hp.removeClass(e,t.hover),hp.hide(o)),!1):!1})}),void 0):!1},setTopbarLogin:function(t){t=t||function(){};var e=this,o=hp.$(".hp-topLogin-info")[0],a="\u6b22\u8fce\u8bbf\u95ee\u864e\u6251\u4f53\u80b2\u7f51",n=null;this.shihuoHost&&(a='<a href="http://www.shihuo.cn/submit" class="red" onclick="commonLogin(); return false;">+ \u6211\u8981\u7206\u6599</a>&nbsp;\u6b22\u8fce\u8bbf\u95ee\u8bc6\u8d27');var i='<div class="notLogin">'+a+'\uff0c\u8bf7\u5148&nbsp;<a class="btn-login" href="http://passport.'+this.urlName+".com/login?from="+this.subDomain+'Top" class="btn-login">\u767b\u5f55</a>&nbsp;\u6216\u8005&nbsp;<a href="http://passport.'+this.urlName+".com/register?project="+this.project+"&from="+this.subDomain+'Top" class="btn-reg">\u6ce8\u518c</a></div>';if(o){if(!this.isLogin()){hp.append(o,i);var e=this,s=hp.$(".btn-login",o)[0];hp.bind(s,"click",function(t){return hp.event(t).preventDefault(),e.popLogin(),!1}),t()}hp.getScript("http://remind."+this.urlName+".com/api/getRemindNum.api.php?contenttype=js&url="+encodeURIComponent(window.location.href),function(){function a(t,e,o,a){void 0!=e&&"0"!=e&&hp.attr(t,"href").replace(/\/*$/g,"")==a&&(hp.attr(t,"title",""+o+"\u65b0\u589e"+e+"\u6761\u66f4\u65b0\uff0c\u70b9\u51fb\u53bb\u770b\u770b\u5427"),hp.after(t,'<i class="hp-tip-bubble hp-tip-bubble-'+e.length+'">'+e+'<s class="arrow-bottom"></s><i class="hp-roundPoint-br-tl"></i><i class="hp-roundPoint-br-tr"></i><i class="hp-roundPoint-br-bl"></i><i class="hp-roundPoint-br-br"></i></i>'))}if("undefined"!=typeof toolbarpic&&toolbarpic&&e.topAdTextLink(toolbarpic),"undefined"!=typeof commonNav&&e.isLogin()){var i=commonNav.notification;if(e.userId=i.uid,e.userName=i.username,t(i),!e.topbarLoginInfo)return!1;var s="";if(e.shihuoHost&&(s='<a href="http://www.shihuo.cn/submit" class="red">+ \u6211\u8981\u7206\u6599</a>&nbsp;'),n='<ul class="hasLogin">',n+='<li class="userImports">'+s+'\u4f60\u597d\uff0c<a href="'+e.myDomain+"/"+i.uid+'" id="g_m" iUserName="'+i.username+'" iUid="'+i.uid+'">'+i.username+'</a></li><li class="line">|</li>',n+='<li class="myHome"><a href="'+e.myDomain+'">\u6211\u7684\u9996\u9875</a></li><li class="line">|</li>',n+='<li id="hp-topNotificat" class="hp-topNotificat"><a class="hp-set" href="'+e.myDomain+'/notifications"><span class="notificatText">\u6d88\u606f</span>',i.notifications&&0!=_parseInt(i.notifications)&&(n+='<i class="tip-topBubble tip-topBubble-'+i.notifications.length+'"><i>'+i.notifications+'</i><s class="hp-roundPoint-br-tl"></s><s class="hp-roundPoint-br-tr"></s><s class="hp-roundPoint-br-bl"></s><s class="hp-roundPoint-br-br"></s></i> '),n+="</a>",n+='<ul class="hp-drapDown hp-topNotificatLayer"><li class="hp-loading">\u6b63\u5728\u52a0\u8f7d...</li></ul>',n+="</li>",n+='<li class="line">|</li><li class="top-userSetUp"><a href="'+e.myDomain+'/set.php" class="hp-set">\u8bbe\u7f6e<s class="setArrow"></s></a><div class="hp-drapDown top-userSetUp-drapDown"><a href="'+e.myDomain+'/set.php">\u8bbe\u7f6e</a><a href="'+e.myDomain+'/bank.php">\u94f6\u884c</a><a href="'+e.myDomain+'/help.php">\u5e2e\u52a9</a><a href="http://passport.'+e.urlName+'.com/logout">\u9000\u51fa</a></div></li>',n+="</ul>",hp.append(o,n),e.topNotificat=hp.$("#hp-topNotificat"),e.topNotificationsData(),e.dropDownMenu({elem:"hp-topNotificat"}),e.dropDownMenu({elem:"top-userSetUp"}),"my"==e.subDomain){var r=hp.$("#my-subNav-uid"),p=e.myDomain+"/"+i.uid;r&&hp.attr(r,"href",p)}if(0==e.ifRemind)return;try{var c=hp.$(".hp-subNav")[0];if(c){var h=hp.$("a",c);hp.each(h,function(){a(this,i.group,"\u7fa4\u7ec4",e.myDomain+"/group"),"basketball"==e.project?(a(this,"99+","\u8bc6\u8d27","http://shihuo."+e.urlName+".com"),a(this,i.basketball_public,"\u70ed\u699c",e.myDomain+"/public/nba")):"soccer"==e.project&&a(this,i.soccer_public,"\u70ed\u699c",e.myDomain+"/public/soccer")})}}catch(l){}}})}},topNotificationsData:function(){var t,e,o=this,a=hp.$(".hp-topNotificatLayer",this.topNotificat)[0],n=hp.$("i",this.topNotificat),i="";hp.getJSON(this.myDomain+"/notifications/json/?jsoncallback=?",function(s){s.notifications>0||"99+"==s.notifications?(n[1].innerHTML=s.notifications,hp.show(n[0])):(hp.addClass(a,"hp-topNotificatLayer-none"),hp.hide(n[0])),s.notificationsinfo.length>0&&hp.each(s.notificationsinfo,function(){i+='<li class="commonNotificationsInfo">'+this.title,this.id>0&&(i+='<a title="\u5ffd\u7565\u8fd9\u4e2a\u63d0\u9192" class="fn-close" mid="'+this.id+'" href="javascript:void(0)">X</a>'),i+="</li>"}),s.notificationsinfo.length>1&&(i+='<li class="notificatTip">',s.remind-5>0&&(i+='<a id="commonMoreRemind" href="'+o.myDomain+'/notifications">\u5176\u4ed6'+(s.remind-5)+'\u4e2a\u63d0\u9192</a><em class="line">|</em>'),i+='<a href="javascript:void(0)" id="hp-readAllRemind">\u5ffd\u7565\u5168\u90e8\u63d0\u9192</a></li>'),i+='<li class="shortInfo"><a href="'+o.myDomain+"/mymsg.php"+(0==s.msg?"":"?action=new")+'">\u77ed\u6d88\u606f'+(0!=s.msg?'<span class="red">('+s.msg+"\u6761\u672a\u8bfb)</span>":"")+"</a></li>",i+='<li class="mentionMy"><a href="'+o.myDomain+'/notifications/mentions">@\u63d0\u5230\u6211\u7684</a></li>',a.innerHTML=i,o.lgnoreSingleRemind(),t=hp.$(".remind_recers",o.topNotificat),t.length>0&&hp.each(t,function(){hp.bind(this,"click",function(){o.remindRecers(this)})}),e=hp.$("#hp-readAllRemind"),e&&hp.bind(e,"click",function(){o.popConfirmTip({content:"\u5ffd\u7565\u5168\u90e8\u63d0\u9192\u5417\uff1f",defineValue:"\u5ffd \u7565",defineEvent:"_common.reminDelAll()"})})})},lgnoreSingleRemind:function(){function t(t){return i=_parseInt(hp.attr(t,"mid")),s&&i>0&&(s=!1,hp.getJSON(e.myDomain+"/include/remind_act.php?jsoncallback=?",{id:i},function(t){1==t.statu&&(e.topNotificationsData(),e.countGa("common-notifications-read"))})),!1}var e=this,o=hp.$(".commonNotificationsInfo",this.topNotificat),a=hp.$(".common_remind_read",this.topNotificat),n=null,i=0,s=!0;o.length>0&&hp.each(o,function(){hp.bind(this,"mouseover",function(){n=hp.$(".fn-close",this)[0],hp.show(n),hp.bind(n,"click",function(){t(this)})}),hp.bind(this,"mouseout",function(){n=hp.$(".fn-close",this)[0],hp.hide(n)})}),a.length>0&&hp.each(a,function(){hp.bind(this,"click",function(){t(this)})})},reminDelAll:function(){var t=this;hp.getJSON(""+this.myDomain+"/ajax/remind_all_del.php?jsoncallback=?",{act:2},function(e){2==e.statu&&t.topNotificationsData()})},remindRecers:function(t){var e=this,o=t,a=_parseInt(hp.attr(o,"mid")),n=!0;hp.next(o),hp.getJSON(this.myDomain+"/ajax/remind_ajax.php?jsoncallback=?",{mid:a,act:1},function(t){return n&&(n=!1,hp.after(o,'<span class="remindRecersName">'+t+"</span>"),hp.unbind(o,"click"),hp.getJSON(e.myDomain+"/include/remind_act.php?jsoncallback=?",{id:a},function(){}),e.countGa("common-notifications-recers")),!1})},popMask:function(){this.mask=hp.$(".hp-mask")[0];var t=Math.max(document.body.clientHeight,document.body.offsetHeight,document.documentElement.clientHeight);this.mask||(hp.append(_doc.body,'<div class="hp-mask"></div>'),this.mask=hp.$(".hp-mask")[0]),hp.css(this.mask,{d:"block",width:"100%",h:t})},popConfirmTip:function(t){function e(){hp.hide(n),hp.hide(o.mask)}var o=this,a="",t=hp.extend({className:"",title:"\u63d0\u793a",content:"\u786e\u5b9a\u5220\u9664\uff1f",defineValue:"\u786e\u5b9a",defineEvent:"return ;",cancel:"\u53d6\u6d88"},t);try{var n=hp.$(".hp-popTip-A")[0];if(n)hp.show(n);else{a+='<div class="hp-popTip-A '+t.className+'">',a+='<div class="hd"><h2>'+t.title+'</h2><a href="javascript:void(0)" title="\u5173\u95ed" class="close">X</a></div>',a+='<div class="bd"><div class="item">'+t.content+'</div><div class="btn"><input type="button" class="hp-btn-A" value="'+t.defineValue+'" onclick="'+t.defineEvent+'" /><input type="button" class="hp-btn-B" value="'+t.cancel+'" /></div></div>',a+="</div>",hp.append(_doc.body,a),n=hp.$(".hp-popTip-A")[0];var i=hp.$(".hp-btn-A",n)[0],s=hp.$(".hp-btn-B",n)[0],r=hp.$(".close",n)[0];hp.show(n),i.focus(),hp.bind(r,"click",function(){e()}),hp.bind(i,"click",function(){e()}),hp.bind(s,"click",function(){e()})}this.popMask(),this.setPosCenter(n)}catch(p){}},popLogin:function(t){function e(){hp.hide(n),hp.hide(o.mask)}var o=this,a="";if(t&&void 0!==t||(t=this.urlName||"hupu"),hp.browser.mobile||hp.browser.android)return location="http://passport."+t+".com/login?from="+this.subDomain+"Top",!1;var n=hp.$(".hp-popLogin")[0];n?hp.show(n):(a+='<div class="hp-popLogin">',a+='<div class="hd"><h2>\u4f60\u597d\uff0c\u8bf7\u767b\u5f55</h2><a href="javascript:void(0)" title="\u5173\u95ed" class="close">X</a></div>',a+='<div class="bd"><iframe frameborder="0" height="205" width="400" scrolling="no" src="http://passport.'+t+".com/loginframe?project="+this.project+"&parent="+encodeURIComponent(top.location.href)+'"></iframe></div>',a+="</div>",hp.append(_doc.body,a),n=hp.$(".hp-popLogin")[0],hp.show(n));var i=hp.$(".close",n)[0];hp.bind(i,"click",function(){e()}),this.popMask(),this.setPosCenter(n,{height:280})},setPosCenter:function(t,e){var e=hp.extend({width:0,height:0},e),o=hp.getView().width,a=hp.getView().height,n=e.width||parseInt(hp.getStyle(t).width)||0,i=e.height||parseInt(hp.getStyle(t).height)||0,s=0,r=(o-n)/2;s=hp.browser.msie&&"6.0"==hp.browser.version?(a-i)/2+hp.getView().scrollTop:(a-i)/2,hp.css(t,{d:"block",p:"fixed",t:s,l:r}),hp.browser.msie&&"6.0"==hp.browser.version&&hp.css(t,{p:"absolute"}),hp.bind(window,"resize",function(){setTimeout(function(){o=hp.getView().width,a=hp.getView().height,s=hp.browser.msie&&"6.0"==hp.browser.version?(a-i)/2+hp.getView().scrollTop:(a-i)/2,r=(o-n)/2,hp.css(t,{t:s,l:r})},30)})},searchWebsite:function(){function t(t){if("block"==hp.getStyle(r).display)switch(t.keyCode){case 38:0==c?c=l-1:c-=1;break;case 40:c==l-1?c=0:c+=1;break;case 13:e.searchUrlPath(n,p);break;default:}0!=l&&r&&""!=n.value&&n.value!=p&&(hp.each(a,function(){hp.removeClass(this,"hover")}),hp.addClass(a[c],"hover"))}var e=this,o=hp.$(".hp-search")[0];if(!o)return!1;var a,n=hp.$(".it-search",o)[0],i=hp.$(".btn-search",o)[0],s=hp.$("#hp-form-search"),r=hp.$("#hp-search-choose"),p=n.defaultValue,c=0,h="",l=0;switch(!r&&hp.append(o,'<div id="hp-search-choose" class="hp-search-choose"></div>'),r=hp.$("#hp-search-choose"),this.project){case"basketball":h="http://v."+this.urlName+".com/nba/s_";break;case"soccer":h="http://v."+this.urlName+".com/soccer/s_";break;case"f1":case"racing":h="http://v."+this.urlName+".com/f1/s_";break;default:h="http://v."+this.urlName+".com/s_"}hp.bind(n,"focus",function(){this.value==p&&(this.value="",hp.css(this,{color:"#444"}))}),hp.bind(n,"blur",function(){""==this.value&&(this.value=p,hp.css(this,{color:"#999"}))}),hp.bind(n,"keyup",function(o){var n=this.value,i=hp.getStyle(r).display;if("none"==i&&hp.show(r),n&&n!=p&&13!=o.keyCode){var s="<ul>";"v"==e.subDomain?(s+='<li data-searchNum="0" class="hover"><a id="hp-search-videoItem" href="'+h+n+'"><span class="red">\u89c6\u9891</span>\u641c\u7d22\uff1a'+n+"</a></li>",s+='<li data-searchNum="1"><a id="hp-search-bbsItem" href="'+e.myDomain+"/search?q="+n+'"><span class="red">\u5e16\u5b50</span>\u641c\u7d22\uff1a'+n+"</a></li>"):(s+='<li data-searchNum="0" class="hover"><a id="hp-search-bbsItem" href="'+e.myDomain+"/search?q="+n+'"><span class="red">\u5e16\u5b50</span>\u641c\u7d22\uff1a'+n+"</a></li>",s+='<li data-searchNum="1"><a id="hp-search-videoItem" href="'+h+n+'"><span class="red">\u89c6\u9891</span>\u641c\u7d22\uff1a'+n+"</a></li>"),s+='<li data-searchNum="2"><a id="hp-search-noteItem" href="'+e.myDomain+"/search/note-"+n+'-5000"><span class="red">\u788e\u788e\u5ff5</span>\u641c\u7d22\uff1a'+n+"</a></li>",s+='<li data-searchNum="3"><a id="hp-search-blogItem" href="'+e.myDomain+"/search/blog-"+n+'-5000"><span class="red">\u65e5\u5fd7</span>\u641c\u7d22\uff1a'+n+"</a></li>",s+='<li data-searchNum="4"><a id="hp-search-albumItem" href="'+e.myDomain+"/search/photo-"+n+'-5000"><span class="red">\u76f8\u518c</span>\u641c\u7d22\uff1a'+n+"</a></li>",s+='<li data-searchNum="5"><a id="hp-search-userItem" href="'+e.myDomain+"/search/member-0-2---"+n+'-5000"><span class="red">\u6210\u5458</span>\u641c\u7d22\uff1a'+n+"</a></li>",s+='<li data-searchNum="6"><a id="hp-search-shihuoItem" href="http://shihuo.'+e.urlName+".com/search?w="+n+'"><span class="red">\u8bc6\u8d27</span>\u641c\u7d22\uff1a'+n+"</a></li>",s+="</ul>",r.innerHTML=s,a=hp.$("li",r),l=a.length;for(var d=0;l>d;d++)hp.bind(a[d],"mouseover",function(){for(var t=0;l>t;t++)hp.removeClass(a[t],"hover");c=parseInt(hp.attr(this,"data-searchNum")),hp.addClass(this,"hover")})}n||hp.hide(r),t(o)}),s.onsubmit=function(){return!1},hp.bind(i,"click",function(){e.searchUrlPath(n,p)}),_doc.body&&hp.bind(_doc.body,"click",function(){hp.hide(r)})},searchUrlPath:function(t,e){var o="",a=hp.$("#hp-search-choose"),n=hp.$("li",a);return 0!=n.length&&""!=t.value&&t.value!=e?hp.each(n,function(){"hover"==hp.attr(this,"class")&&(o=hp.first(this).href)}):o="v"==this.subDomain?"http://v."+this.urlName+".com/s_":this.myDomain+"/search?q=",location=o,!1},countVisits:function(){if((1==_topIframe||1==this.ifCountIframe)&&1==this.ifCount){var t=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js",e=("https:"==document.location.protocol?"https://":"http://")+"hm.baidu.com/h.js";switch(_gaq.push(["_setAccount","UA-887303-1"],["_setDomainName","."+this.urlName+".com"],["_setAllowHash",!1],["_setCustomVar",1,"User Info",this.countGAUser,2],["_trackPageview",this.countGATrackPageview],["_setVar",this.countGASetVar],["_addOrganic","soso","w"],["_addOrganic","sogou","query"],["_addOrganic","youdao","q"]),hp.loadScript(t),pageTracker._trackPageview=function(t){void 0!=t&&t&&_common.countGa(t)},hp.loadScript("http://w.cnzz.com/c.php?id=30020080"),this.subDomain){case"www":e+="?8d98e81376cb1127f63576d438957ced",hp.loadScript(e);break;case"nba":e+="?4c94cb14fa811cabd881619bb1885035",hp.loadScript(e);break;case"soccer":e+="?cdc27407e2d9f3d5f430d44e11595661",hp.loadScript(e);break;case"voice":e+="?39a791871d59961d8b910963c16d5500",hp.loadScript(e);break;case"g":e+="?4614428b88236f0338c241111362614d",hp.loadScript(e);break;case"shihuo":e+="?4847659c7b5fc6a359a7b022de51cdc5",hp.loadScript(e)}}},countGa:function(t){1==this.ifCount&&_gaq.push(["_trackPageview","/from/"+this.subDomain+"-"+t])},countClickLog:function(t,e){var t=t||"",e=e||"";hp.getScript("http://my.hupu.com/ajax/ga.php?url="+encodeURIComponent(t)+"&type="+encodeURIComponent(e))},shareTo:function(t,e){var e=hp.extend({title:"\u864e\u6251\u4f53\u80b2 - \u4f60\u7684\u4f53\u80b2\u5168\u4e16\u754c\uff01",url:"http://www.hupu.com",pic:"",summary:"",type:""},e),o=600,a=500,n=(window.screen.availHeight-30-o)/2,i=(window.screen.availWidth-10-a)/2,s=encodeURIComponent(e.title),r=e.url,p=encodeURIComponent(e.pic),c=e.summary,h=e.type,l="\u864e\u6251\u4f53\u80b2",d="http://www.hupu.com",u="@the_real_hoopchina",m="abe3b0bfec0044ea852fbf1456497950",f="2175967801",b="1937280734",g=r.indexOf("?")>0?"&":"?",v="",y="scrollbars=no,width="+o+",height="+a+",left="+i+",top="+n+",status=no,resizable=yes";switch(a="qzone"==t||"renren"==t?500:450,this.project){case"basketball":l="\u864e\u6251\u7bee\u7403",d="http://nba.hupu.com",u="@the_real_hoopchina",m="abe3b0bfec0044ea852fbf1456497950",f="2175967801",b="1642292081";break;case"soccer":l="\u864e\u6251\u8db3\u7403",d="http://soccer.hupu.com",u="@goalhi4u",m="3a152727fa2d4926bf9e82bc76e32360",f="1104732554",b="1698513182";break;case"f1":case"racing":l="\u864e\u6251F1",d="http://f1.hupu.com",m="788d3087f3844146af2a051dfcaa9ceb",b="1750778357";break;default:}switch(r=encodeURIComponent(r+g+"utm_source="+t+"&utm_medium=share&utm_content="+h+"&utm_campaign=share"),t){case"weibo":v="service.weibo.com/share/share.php?title="+s+"&url="+r+"&pic="+p+"&appkey="+f+"&ralateUid="+b;
break;case"qqt":v="v.t.qq.com/share/share.php?title="+s+"&url="+r+"&site="+d+"&pic="+p;break;case"qzone":v="sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title="+s+"&url="+r+"&pics="+p+"&summary="+c+"&site="+encodeURIComponent(l);break;case"renren":v="widget.renren.com/dialog/share?link="+r+"&title="+s+"&sharepic="+p;break;case"kaixin":v="www.kaixin001.com/repaste/share.php?rurl="+r+"&rcontent="+s+"&pic="+p;break;default:}window.open("http://"+v,t,y),this.countClickLog(this.project+"-"+h+"-"+t+"-"+s,"share")},followBlog:function(){var t=hp.$(".topFollowBlog")[0],e=null,o="",a="",n="";if(t){switch(this.project){case"basketball":o="http://e.weibo.com/hoopchina";break;case"soccer":o="http://e.weibo.com/goalhi4u",a="http://user.qzone.qq.com/1828044486",n="http://t.qq.com/goalhi4u";break;default:}e=hp.$("a",t),hp.each(e,function(){switch(hp.attr(this,"class")){case"weibo":o&&(this.href=o);break;case"qq":n&&(this.href=n);break;case"qzone":a&&(this.href=a);break;default:}})}},topAdTextLink:function(t){var e=hp.$(".hp-topbarNav-bd")[0],o=hp.$(".hp-quickNav",e)[0],a=hp.$(".hp-topLogin-info",e)[0].offsetWidth||330,n=e.offsetWidth||980,i=o.offsetWidth||250,s=(n-a-i-260)/2;hp.after(o,'<a href="'+t.link+'" target="_blank" class="red hp-top-adTextLink" style="float:left;margin-left:'+s+'px">'+t.title+"</a>")},topTipsMes:function(){var t=new Date,e=t.getDate(),o=t.getHours();if(29!=e||o>8)return!1;if(hp.cookie.getRaw("topTipsMes"))return!1;var a=hp.$("#hp-topbarNav");hp.before(a,'<div id="hp-topbar-tipsMes" style="height:20px;line-height:20px;background:#faffc4;text-align:center;"><div class="hp-w" style="position:relative;"><i style="display:inline-block;width:12px;height:10px;margin-right:10px;overflow:hidden;background:url(http://i1.hoopchina.com.cn/u/1310/25/981/5365981/beb792eabig.png) no-repeat 0 0;vertical-align:0px;"></i>\u4e3a\u63d0\u9ad8hooper\u8bbf\u95ee\u4f53\u9a8c\uff0c\u864e\u6251\u793e\u533a\u5c06\u4e8e10\u670829\u65e5\u51cc\u66680:00-\u4e0a\u53488:00\u8fdb\u884c\u5347\u7ea7\u7ef4\u62a4\uff0c\u671f\u95f4\u7ed9\u60a8\u8bbf\u95ee\u9020\u6210\u4e0d\u4fbf\u8fd8\u8bf7\u8c05\u89e3\u3002<a herf="javascript:" class="hp-topbar-tipsMes-close" style="position:absolute;top:3px;right:25px;width:14px;height:14px;overflow:hidden;background:url(http://i1.hoopchina.com.cn/u/1310/25/981/5365981/beb792eabig.png) no-repeat -12px 0;text-indent:-99em;" title="\u5173\u95ed" >X</a></div></div>');var n=hp.$("#hp-topbar-tipsMes"),i=hp.$(".hp-topbar-tipsMes-close",n)[0];hp.bind(i,"click",function(){hp.hide(n),hp.cookie.setRaw("topTipsMes","1",{domain:".hupu.com",expires:864e5,path:"/"})})}};commonLogin=popLogin=show_login=function(t){_common.popLogin(t)},commonGa=countGa=function(t){_common.countGa(t)},commonClickLog=countClickLog=function(t,e){_common.countClickLog(t,e)},commonShareTo=function(t,e){_common.shareTo(t,e)};