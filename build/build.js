!function e(t,n,i){function a(r,s){if(!n[r]){if(!t[r]){var l="function"==typeof require&&require;if(!s&&l)return l(r,!0);if(o)return o(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[r]={exports:{}};t[r][0].call(u.exports,function(e){var n=t[r][1][e];return a(n?n:e)},u,u.exports,e,t,n,i)}return n[r].exports}for(var o="function"==typeof require&&require,r=0;r<i.length;r++)a(i[r]);return a}({1:[function(e,t,n){t.exports=function(e){return function(t){var n,i,a=t.slides.map(function(t){return[].slice.call(t.querySelectorAll("string"==typeof e?e:"[data-bespoke-bullet]"),0)}),o=function(){var e=n+1;return l(1)?(s(n,i+1),!1):void(a[e]&&s(e,0))},r=function(){var e=n-1;return l(-1)?(s(n,i-1),!1):void(a[e]&&s(e,a[e].length-1))},s=function(e,t){n=e,i=t,a.forEach(function(n,i){n.forEach(function(n,a){n.classList.add("bespoke-bullet"),i<e||i===e&&a<=t?(n.classList.add("bespoke-bullet-active"),n.classList.remove("bespoke-bullet-inactive")):(n.classList.add("bespoke-bullet-inactive"),n.classList.remove("bespoke-bullet-active")),i===e&&a===t?n.classList.add("bespoke-bullet-current"):n.classList.remove("bespoke-bullet-current")})})},l=function(e){return void 0!==a[n][i+e]};t.on("next",o),t.on("prev",r),t.on("slide",function(e){s(e.index,0)}),s(0,0)}}},{}],2:[function(e,t,n){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},i=function(i,a){var o=e.slides[e.slide()],r=a-e.slide(),s=r>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,i)),i!==o&&["inactive",s,s+"-"+Math.abs(r)].map(t.bind(null,i))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(a){e.slides.map(i),t(a.slide,"active"),n(a.slide,"inactive")})}}},{}],3:[function(e,t,n){t.exports=function(e){return function(t){e=e&&(e.object||e.name||e.scope)?e:{object:e};var n=e.object,i=e.name||"bespoke",a=e.scope||window;n?a[i]=n:n=a[i]?a[i]:a[i]={},(Array.isArray(n.decks)?n.decks:n.decks=[]).push(n.deck=t),t.on("destroy",function(){var e=n.decks.indexOf(t);e>=0&&n.decks.splice(e,1),delete n.deck})}}},{}],4:[function(e,t,n){t.exports=function(){return function(e){var t=function(t){var n=-1<t&&t<e.slides.length?t:0;n!==e.slide()&&e.slide(n)},n=function(){var n=window.location.hash.slice(1),i=parseInt(n,10);n&&(i?t(i-1):e.slides.forEach(function(e,i){e.getAttribute("data-bespoke-hash")!==n&&e.id!==n||t(i)}))};setTimeout(function(){n(),e.on("activate",function(e){var t=e.slide.getAttribute("data-bespoke-hash")||e.slide.id;window.location.hash=t||e.index+1}),window.addEventListener("hashchange",n)},0)}}},{}],5:[function(e,t,n){t.exports=function(){return function(e){var t=/\/\/player\.vimeo\.com\//,n=/\/\/www\.youtube\.com\/embed\//,i="command",a="file:"===location.protocol,o=function(e,t,n,i){for(var a=-1,o=t.querySelectorAll(e+(i||"")),r=o.length;++a<r;n(o[a]));},r=function(e,t){e.contentWindow.postMessage(JSON.stringify(t),"*")},s=function(e){var o=e.hasAttribute("data-rewind"),s=Math.min(Math.max(parseFloat(e.getAttribute("data-volume")),0),10);if(e.play)o&&e.readyState&&(e.currentTime=0),s>=0&&(e.volume=s/10),e.play();else if(n.test(e.src))o&&r(e,{event:i,func:"seekTo",args:[0]}),s>=0&&r(e,{event:i,func:"setVolume",args:[10*s]}),r(e,{event:i,func:"playVideo"});else if(t.test(e.src)){if(a)return console.warn("WARNING: Cannot play Vimeo video when deck is loaded via file://.");o&&r(e,{method:"seekTo",value:0}),s>=0&&r(e,{method:"setVolume",value:s/10}),r(e,{method:"play"})}},l=function(e){e.pause?e.pause():n.test(e.src)?r(e,{event:i,func:"pauseVideo"}):!a&&t.test(e.src)&&r(e,{method:"pause"})},c=function(e,t){e[t||"src"]=e.getAttribute(t||"src")},u=function(e){try{return e.contentDocument.rootElement}catch(t){}},p=function(e,t){(u(e)||e).classList[t||"add"]("active")},d=function(t){t.hasAttribute("data-reload")?c(t,"data"):u(t)?p(t):t.onload=function(){e.slides[e.slide()].contains(t)&&p(t)}},f=function(e){p(e,"remove")},g=o.bind(null,"audio,video,iframe"),m=o.bind(null,'object[type="image/svg+xml"]'),h=function(e){g(e,s)},b=function(e){g(e,l)},k=function(e){m(e,d)},v=function(e){m(e,f,":not([data-reload])")},y=function(e){return e.preview?b(e.slide):(h(e.slide),k(e.slide),void o('img[data-reload][src$=".gif"]',e.slide,c))},x=function(e){b(e.slide),v(e.slide)};e.on("activate",y),e.on("deactivate",x)}}},{}],6:[function(e,t,n){t.exports=function(t){t=t||{};var n=e("bespoke-nav-kbd")(t.kbd),i=e("bespoke-nav-touch")(t.touch);return function(e){n(e),i(e)}}},{"bespoke-nav-kbd":7,"bespoke-nav-touch":8}],7:[function(e,t,n){t.exports=function(){return function(e){var t=32,n=33,i=34,a=35,o=36,r=37,s=39,l=72,c=76,u="keydown",p=function(e,t){return e.ctrlKey||e.shiftKey&&(t===o||t===a)||e.altKey||e.metaKey},d=function(u){if(!p(u,u.which))switch(u.which){case t:return(u.shiftKey?e.prev:e.next)();case s:case i:case c:return e.next();case r:case n:case l:return e.prev();case o:return e.slide(0);case a:return e.slide(e.slides.length-1)}};e.on("destroy",function(){document.removeEventListener(u,d)}),document.addEventListener(u,d)}}},{}],8:[function(e,t,n){t.exports=function(e){return function(t){var n=e||{},i="touchstart",a="touchmove",o="addEventListener",r="removeEventListener",s=t.parent,l=null,c=null,u="page"+("y"===n.axis?"Y":"X"),p="number"==typeof n.threshold?n.threshold:50/window.devicePixelRatio,d=function(e){l=1===e.touches.length?e.touches[0][u]:null},f=function(e){if(null!==l)return void 0===l?e.preventDefault():void(Math.abs(c=e.touches[0][u]-l)>p&&((c>0?t.prev:t.next)(),l=e.preventDefault()))};t.on("destroy",function(){s[r](i,d),s[r](a,f)}),s[o](i,d),s[o](a,f)}}},{}],9:[function(e,t,n){(function(i){!function(e){if("object"==typeof n&&"undefined"!=typeof t)t.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var a;a="undefined"!=typeof window?window:"undefined"!=typeof i?i:"undefined"!=typeof self?self:this,a=a.bespoke||(a.bespoke={}),a=a.plugins||(a.plugins={}),a.prism=e()}}(function(){return function t(n,i,a){function o(s,l){if(!i[s]){if(!n[s]){var c="function"==typeof e&&e;if(!l&&c)return c(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var p=i[s]={exports:{}};n[s][0].call(p.exports,function(e){var t=n[s][1][e];return o(t?t:e)},p,p.exports,t,n,i,a)}return i[s].exports}for(var r="function"==typeof e&&e,s=0;s<a.length;s++)o(a[s]);return o}({1:[function(e,t,n){var i=e("insert-css"),a=e("prism-themes/themes/prism-ghcolors.css");t.exports=function(){var t=e("prismjs");return e("prismjs/plugins/unescaped-markup/prism-unescaped-markup"),e("prismjs/plugins/normalize-whitespace/prism-normalize-whitespace"),i(a,{prepend:!0}),function(){t.highlightAll()}}},{"insert-css":2,"prism-themes/themes/prism-ghcolors.css":3,prismjs:6,"prismjs/plugins/normalize-whitespace/prism-normalize-whitespace":4,"prismjs/plugins/unescaped-markup/prism-unescaped-markup":5}],2:[function(e,t,n){var i={};t.exports=function(e,t){if(!i[e]){i[e]=!0;var n=document.createElement("style");n.setAttribute("type","text/css"),"textContent"in n?n.textContent=e:n.styleSheet.cssText=e;var a=document.getElementsByTagName("head")[0];t&&t.prepend?a.insertBefore(n,a.childNodes[0]):a.appendChild(n)}}},{}],3:[function(e,t,n){t.exports='/**\n * GHColors theme by Avi Aryan (http://aviaryan.in)\n * Inspired by Github syntax coloring\n */\n\ncode[class*="language-"],\npre[class*="language-"] {\n    color: #393A34;\n    font-family: "Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace;\n    direction: ltr;\n    text-align: left;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    font-size: 0.95em;\n    line-height: 1.2em;\n\n    -moz-tab-size: 4;\n    -o-tab-size: 4;\n    tab-size: 4;\n\n    -webkit-hyphens: none;\n    -moz-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n}\n\npre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,\ncode[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {\n    background: #b3d4fc;\n}\n\npre[class*="language-"]::selection, pre[class*="language-"] ::selection,\ncode[class*="language-"]::selection, code[class*="language-"] ::selection {\n    background: #b3d4fc;\n}\n\n/* Code blocks */\npre[class*="language-"] {\n    padding: 1em;\n    margin: .5em 0;\n    overflow: auto;\n    border: 1px solid #dddddd;\n    background-color: white;\n}\n\n:not(pre) > code[class*="language-"],\npre[class*="language-"] {\n}\n\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n    padding: .2em;\n    padding-top: 1px; padding-bottom: 1px;\n    background: #f8f8f8;\n    border: 1px solid #dddddd;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n    color: #999988; font-style: italic;\n}\n\n.token.namespace {\n    opacity: .7;\n}\n\n.token.string,\n.token.attr-value {\n    color: #e3116c;\n}\n.token.punctuation,\n.token.operator {\n    color: #393A34; /* no highlight */\n}\n\n.token.entity,\n.token.url,\n.token.symbol,\n.token.number,\n.token.boolean,\n.token.variable,\n.token.constant,\n.token.property,\n.token.regex,\n.token.inserted {\n    color: #36acaa;\n}\n\n.token.atrule,\n.token.keyword,\n.token.attr-name,\n.language-autohotkey .token.selector {\n    color: #00a4db;\n}\n\n.token.function,\n.token.deleted,\n.language-autohotkey .token.tag {\n    color: #9a050f;\n}\n\n.token.tag,\n.token.selector,\n.language-autohotkey .token.keyword {\n    color: #00009f;\n}\n\n.token.important,\n.token.function,\n.token.bold {\n    font-weight: bold;\n}\n\n.token.italic {\n    font-style: italic;\n}'},{}],4:[function(e,t,n){!function(){function e(e){this.defaults=i({},e)}function t(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})}function n(e){for(var t=0,n=0;n<e.length;++n)e.charCodeAt(n)=="\t".charCodeAt(0)&&(t+=3);return e.length+t}if("undefined"!=typeof self&&self.Prism&&self.document){var i=Object.assign||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e};e.prototype={setDefaults:function(e){this.defaults=i(this.defaults,e)},normalize:function(e,n){n=i(this.defaults,n);for(var a in n){var o=t(a);"normalize"!==a&&"setDefaults"!==o&&n[a]&&this[o]&&(e=this[o].call(this,e,n[a]))}return e},leftTrim:function(e){return e.replace(/^\s+/,"")},rightTrim:function(e){return e.replace(/\s+$/,"")},tabsToSpaces:function(e,t){return t=0|t||4,e.replace(/\t/g,new Array((++t)).join(" "))},spacesToTabs:function(e,t){return t=0|t||4,e.replace(new RegExp(" {"+t+"}","g"),"\t")},removeTrailing:function(e){return e.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(e){return e.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(e){var t=e.match(/^[^\S\n\r]*(?=\S)/gm);return t&&t[0].length?(t.sort(function(e,t){return e.length-t.length}),t[0].length?e.replace(new RegExp("^"+t[0],"gm"),""):e):e},indent:function(e,t){return e.replace(/^[^\S\n\r]*(?=\S)/gm,new Array((++t)).join("\t")+"$&")},breakLines:function(e,t){t=t===!0?80:0|t||80;for(var i=e.split("\n"),a=0;a<i.length;++a)if(!(n(i[a])<=t)){for(var o=i[a].split(/(\s+)/g),r=0,s=0;s<o.length;++s){var l=n(o[s]);r+=l,r>t&&(o[s]="\n"+o[s],r=l)}i[a]=o.join("")}return i.join("\n")}},Prism.plugins.NormalizeWhitespace=new e({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-highlight",function(e){var t=e.element.parentNode,n=/\bno-whitespace-normalization\b/;if(!(!e.code||!t||"pre"!==t.nodeName.toLowerCase()||e.settings&&e.settings["whitespace-normalization"]===!1||n.test(t.className)||n.test(e.element.className))){for(var i=t.childNodes,a="",o="",r=!1,s=Prism.plugins.NormalizeWhitespace,l=0;l<i.length;++l){var c=i[l];c==e.element?r=!0:"#text"===c.nodeName&&(r?o+=c.nodeValue:a+=c.nodeValue,t.removeChild(c),--l)}if(e.element.children.length&&Prism.plugins.KeepMarkup){var u=a+e.element.innerHTML+o;e.element.innerHTML=s.normalize(u,e.settings),e.code=e.element.textContent}else e.code=a+e.code+o,e.code=s.normalize(e.code,e.settings)}})}}()},{}],5:[function(e,t,n){!function(){"undefined"!=typeof self&&self.Prism&&self.document&&Prism.languages.markup&&(Prism.plugins.UnescapedMarkup=!0,Prism.hooks.add("before-highlightall",function(e){e.selector+=", .lang-markup script[type='text/plain'], .language-markup script[type='text/plain'], script[type='text/plain'].lang-markup, script[type='text/plain'].language-markup"}),Prism.hooks.add("before-sanity-check",function(e){if("markup"==e.language){if(e.element.matches("script[type='text/plain']")){var t=document.createElement("code"),n=document.createElement("pre");return n.className=t.className=e.element.className,e.code=e.code.replace(/&lt;\/script(>|&gt;)/gi,"</script>"),t.textContent=e.code,n.appendChild(t),e.element.parentNode.replaceChild(n,e.element),void(e.element=t)}var n=e.element.parentNode;!e.code&&n&&"pre"==n.nodeName.toLowerCase()&&e.element.childNodes.length&&"#comment"==e.element.childNodes[0].nodeName&&(e.element.textContent=e.code=e.element.childNodes[0].textContent)}}))}()},{}],6:[function(e,t,n){(function(e){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},i=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,i=n.Prism={util:{encode:function(e){return e instanceof a?new a(e.type,i.util.encode(e.content),e.alias):"Array"===i.util.type(e)?e.map(i.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){var t=i.util.type(e);switch(t){case"Object":var n={};for(var a in e)e.hasOwnProperty(a)&&(n[a]=i.util.clone(e[a]));return n;case"Array":return e.map&&e.map(function(e){return i.util.clone(e)})}return e}},languages:{extend:function(e,t){var n=i.util.clone(i.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){a=a||i.languages;var o=a[e];if(2==arguments.length){n=arguments[1];for(var r in n)n.hasOwnProperty(r)&&(o[r]=n[r]);return o}var s={};for(var l in o)if(o.hasOwnProperty(l)){if(l==t)for(var r in n)n.hasOwnProperty(r)&&(s[r]=n[r]);s[l]=o[l]}return i.languages.DFS(i.languages,function(t,n){n===a[e]&&t!=e&&(this[t]=s)}),a[e]=s},DFS:function(e,t,n,a){a=a||{};for(var o in e)e.hasOwnProperty(o)&&(t.call(e,o,e[o],n||o),"Object"!==i.util.type(e[o])||a[i.util.objId(e[o])]?"Array"!==i.util.type(e[o])||a[i.util.objId(e[o])]||(a[i.util.objId(e[o])]=!0,i.languages.DFS(e[o],t,o,a)):(a[i.util.objId(e[o])]=!0,i.languages.DFS(e[o],t,null,a)))}},plugins:{},highlightAll:function(e,t){var n={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",n);for(var a,o=n.elements||document.querySelectorAll(n.selector),r=0;a=o[r++];)i.highlightElement(a,e===!0,n.callback)},highlightElement:function(t,a,o){for(var r,s,l=t;l&&!e.test(l.className);)l=l.parentNode;l&&(r=(l.className.match(e)||[,""])[1].toLowerCase(),s=i.languages[r]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,l=t.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var c=t.textContent,u={element:t,language:r,grammar:s,code:c};if(i.hooks.run("before-sanity-check",u),!u.code||!u.grammar)return void i.hooks.run("complete",u);if(i.hooks.run("before-highlight",u),a&&n.Worker){var p=new Worker(i.filename);p.onmessage=function(e){u.highlightedCode=e.data,i.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,o&&o.call(u.element),i.hooks.run("after-highlight",u),i.hooks.run("complete",u)},p.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=i.highlight(u.code,u.grammar,u.language),i.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,o&&o.call(t),i.hooks.run("after-highlight",u),i.hooks.run("complete",u)},highlight:function(e,t,n){var o=i.tokenize(e,t);return a.stringify(i.util.encode(o),n)},tokenize:function(e,t,n){var a=i.Token,o=[e],r=t.rest;if(r){for(var s in r)t[s]=r[s];delete t.rest}e:for(var s in t)if(t.hasOwnProperty(s)&&t[s]){var l=t[s];l="Array"===i.util.type(l)?l:[l];for(var c=0;c<l.length;++c){var u=l[c],p=u.inside,d=!!u.lookbehind,f=!!u.greedy,g=0,m=u.alias;u=u.pattern||u;for(var h=0;h<o.length;h++){var b=o[h];if(o.length>e.length)break e;if(!(b instanceof a)){u.lastIndex=0;var k=u.exec(b),v=1;if(!k&&f&&h!=o.length-1){var y=o[h+1].matchedStr||o[h+1],x=b+y;if(h<o.length-2&&(x+=o[h+2].matchedStr||o[h+2]),u.lastIndex=0,k=u.exec(x),!k)continue;var w=k.index+(d?k[1].length:0);if(w>=b.length)continue;var N=k.index+k[0].length,C=b.length+y.length;if(v=3,N<=C){if(o[h+1].greedy)continue;v=2,x=x.slice(0,C)}b=x}if(k){d&&(g=k[1].length);var w=k.index+g,k=k[0].slice(g),N=w+k.length,A=b.slice(0,w),E=b.slice(N),z=[h,v];A&&z.push(A);var j=new a(s,p?i.tokenize(k,p):k,m,k,f);z.push(j),E&&z.push(E),Array.prototype.splice.apply(o,z)}}}}}return o},hooks:{all:{},add:function(e,t){var n=i.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=i.hooks.all[e];if(n&&n.length)for(var a,o=0;a=n[o++];)a(t)}}},a=i.Token=function(e,t,n,i,a){this.type=e,this.content=t,this.alias=n,this.matchedStr=i||null,this.greedy=!!a};if(a.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===i.util.type(e))return e.map(function(n){return a.stringify(n,t,e)}).join("");var o={type:e.type,content:a.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if("comment"==o.type&&(o.attributes.spellcheck="true"),e.alias){var r="Array"===i.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(o.classes,r)}i.hooks.run("wrap",o);var s="";for(var l in o.attributes)s+=(s?" ":"")+l+'="'+(o.attributes[l]||"")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'" '+s+">"+o.content+"</"+o.tag+">"},!n.document)return n.addEventListener?(n.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,o=t.code,r=t.immediateClose;n.postMessage(i.highlight(o,i.languages[a],a)),r&&n.close()},!1),n.Prism):n.Prism;var o=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return o&&(i.filename=o.src,document.addEventListener&&!o.hasAttribute("data-manual")&&("loading"!==document.readyState?requestAnimationFrame(i.highlightAll,0):document.addEventListener("DOMContentLoaded",i.highlightAll))),n.Prism}();"undefined"!=typeof t&&t.exports&&(t.exports=i),"undefined"!=typeof e&&(e.Prism=i),i.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},i.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),i.languages.xml=i.languages.markup,i.languages.html=i.languages.markup,i.languages.mathml=i.languages.markup,i.languages.svg=i.languages.markup,i.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},i.languages.css.atrule.inside.rest=i.util.clone(i.languages.css),i.languages.markup&&(i.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:i.languages.css,alias:"language-css"}}),i.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:i.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:i.languages.css}},alias:"language-css"}},i.languages.markup.tag)),i.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},i.languages.javascript=i.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),i.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),i.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:i.languages.javascript}},string:/[\s\S]+/}}}),i.languages.markup&&i.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:i.languages.javascript,alias:"language-javascript"}}),i.languages.js=i.languages.javascript,function(){"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.forEach&&Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var n,a=t.getAttribute("data-src"),o=t,r=/\blang(?:uage)?-(?!\*)(\w+)\b/i;o&&!r.test(o.className);)o=o.parentNode;if(o&&(n=(t.className.match(r)||[,""])[1]),!n){var s=(a.match(/\.(\w+)$/)||[,""])[1];n=e[s]||s}var l=document.createElement("code");l.className="language-"+n,t.textContent="",l.textContent="Loading…",t.appendChild(l);var c=new XMLHttpRequest;c.open("GET",a,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(l.textContent=c.responseText,i.highlightElement(l)):c.status>=400?l.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:l.textContent="✖ Error: File does not exist or is empty")},c.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}()}).call(this,"undefined"!=typeof i?i:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],10:[function(e,t,n){t.exports=function(e){return function(t){var n=t.parent,i=t.slides[0],a=i.offsetHeight,o=i.offsetWidth,r="zoom"===e||"zoom"in n.style&&"transform"!==e,s=function(e){var t=document.createElement("div");return t.className="bespoke-scale-parent",e.parentNode.insertBefore(t,e),t.appendChild(e),t},l=r?t.slides:t.slides.map(s),c=function(e){var t="Moz Webkit O ms".split(" ");return t.reduce(function(t,i){return i+e in n.style?i+e:t},e.toLowerCase())}("Transform"),u=r?function(e,t){t.style.zoom=e}:function(e,t){t.style[c]="scale("+e+")"},p=function(){var e=n.offsetWidth/o,t=n.offsetHeight/a;l.forEach(u.bind(null,Math.min(e,t)))};window.addEventListener("resize",p),p()}}},{}],11:[function(e,t,n){(function(i){!function(e){if("object"==typeof n)t.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var a;"undefined"!=typeof window?a=window:"undefined"!=typeof i?a=i:"undefined"!=typeof self&&(a=self);var o=a;o=o.bespoke||(o.bespoke={}),o=o.themes||(o.themes={}),o.cube=e()}}(function(){return function t(n,i,a){function o(s,l){if(!i[s]){if(!n[s]){var c="function"==typeof e&&e;if(!l&&c)return c(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+s+"'")}var u=i[s]={exports:{}};n[s][0].call(u.exports,function(e){var t=n[s][1][e];return o(t?t:e)},u,u.exports,t,n,i,a)}return i[s].exports}for(var r="function"==typeof e&&e,s=0;s<a.length;s++)o(a[s]);return o}({1:[function(e,t,n){var i=e("bespoke-classes"),a=e("insert-css");t.exports=function(){var e="*{-moz-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}@media print{*{-webkit-print-color-adjust:exact}}@page{size:landscape;margin:0}.bespoke-parent{-webkit-transition:background .6s ease;transition:background .6s ease;position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden}@media print{.bespoke-parent{overflow:visible;position:static}}.bespoke-theme-cube-slide-parent{position:absolute;top:0;left:0;right:0;bottom:0;-webkit-perspective:600px;perspective:600px;pointer-events:none}.bespoke-slide{pointer-events:auto;-webkit-transition:-webkit-transform .6s ease,opacity .6s ease,background .6s ease;transition:transform .6s ease,opacity .6s ease,background .6s ease;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-backface-visibility:hidden;backface-visibility:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center;width:640px;height:480px;position:absolute;top:50%;margin-top:-240px;left:50%;margin-left:-320px;background:#eaeaea;padding:40px;border-radius:0}@media print{.bespoke-slide{zoom:1!important;height:743px;width:100%;page-break-before:always;position:static;margin:0;-webkit-transition:none;transition:none}}.bespoke-before{-webkit-transform:translateX(100px)translateX(-320px)rotateY(-90deg)translateX(-320px);transform:translateX(100px)translateX(-320px)rotateY(-90deg)translateX(-320px)}@media print{.bespoke-before{-webkit-transform:none;transform:none}}.bespoke-after{-webkit-transform:translateX(-100px)translateX(320px)rotateY(90deg)translateX(320px);transform:translateX(-100px)translateX(320px)rotateY(90deg)translateX(320px)}@media print{.bespoke-after{-webkit-transform:none;transform:none}}.bespoke-inactive{opacity:0;pointer-events:none}@media print{.bespoke-inactive{opacity:1}}.bespoke-active{opacity:1}.bespoke-bullet{-webkit-transition:all .3s ease;transition:all .3s ease}@media print{.bespoke-bullet{-webkit-transition:none;transition:none}}.bespoke-bullet-inactive{opacity:0}li.bespoke-bullet-inactive{-webkit-transform:translateX(16px);transform:translateX(16px)}@media print{li.bespoke-bullet-inactive{-webkit-transform:none;transform:none}}@media print{.bespoke-bullet-inactive{opacity:1}}.bespoke-bullet-active{opacity:1}.bespoke-scale-parent{-webkit-perspective:600px;perspective:600px;position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none}.bespoke-scale-parent .bespoke-active{pointer-events:auto}@media print{.bespoke-scale-parent{-webkit-transform:none!important;transform:none!important}}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:2px}@media only screen and (min-width:1366px){.bespoke-progress-parent{height:4px}}@media print{.bespoke-progress-parent{display:none}}.bespoke-progress-bar{-webkit-transition:width .6s ease;transition:width .6s ease;position:absolute;height:100%;background:#0089f3;border-radius:0 4px 4px 0}.emphatic{background:#eaeaea}.bespoke-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:opacity .6s ease;transition:opacity .6s ease;opacity:0;z-index:-1}.bespoke-backdrop-active{opacity:1}pre{padding:26px!important;border-radius:8px}body{font-family:helvetica,arial,sans-serif;font-size:18px;color:#404040}h1{font-size:72px;line-height:82px;letter-spacing:-2px;margin-bottom:16px}h2{font-size:42px;letter-spacing:-1px;margin-bottom:8px}h3{font-size:24px;font-weight:400;margin-bottom:24px;color:#606060}hr{visibility:hidden;height:20px}ul{list-style:none}li{margin-bottom:12px}p{margin:0 100px 12px;line-height:22px}a{color:#0089f3;text-decoration:none}";return a(e,{prepend:!0}),function(e){i()(e);var t=function(e){var t=document.createElement("div");t.className="bespoke-theme-cube-slide-parent",e.parentNode.insertBefore(t,e),t.appendChild(e)};e.slides.forEach(t)}}},{"bespoke-classes":2,"insert-css":3}],2:[function(e,t,n){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},i=function(i,a){var o=e.slides[e.slide()],r=a-e.slide(),s=r>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,i)),i!==o&&["inactive",s,s+"-"+Math.abs(r)].map(t.bind(null,i))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(a){e.slides.map(i),t(a.slide,"active"),n(a.slide,"inactive")})}}},{}],3:[function(e,t,n){var i={};t.exports=function(e,t){if(!i[e]){i[e]=!0;var n=document.createElement("style");n.setAttribute("type","text/css"),"textContent"in n?n.textContent=e:n.styleSheet.cssText=e;var a=document.getElementsByTagName("head")[0];t&&t.prepend?a.insertBefore(n,a.childNodes[0]):a.appendChild(n)}}},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],12:[function(e,t,n){var i=function(e,t){var n=1===(e.parent||e).nodeType?e.parent||e:document.querySelector(e.parent||e),i=[].filter.call("string"==typeof e.slides?n.querySelectorAll(e.slides):e.slides||n.children,function(e){return"SCRIPT"!==e.nodeName}),a=i[0],o={},r=function(e,t){i[e]&&(p("deactivate",d(a,t)),a=i[e],p("activate",d(a,t)))},s=function(e,t){return arguments.length?void(p("slide",d(i[e],t))&&r(e,t)):i.indexOf(a)},l=function(e,t){var n=i.indexOf(a)+e;p(e>0?"next":"prev",d(a,t))&&r(n,t)},c=function(e,t){return(o[e]||(o[e]=[])).push(t),u.bind(null,e,t)},u=function(e,t){o[e]=(o[e]||[]).filter(function(e){return e!==t})},p=function(e,t){return(o[e]||[]).reduce(function(e,n){return e&&n(t)!==!1},!0)},d=function(e,t){return t=t||{},t.index=i.indexOf(e),t.slide=e,t},f={on:c,off:u,fire:p,slide:s,next:l.bind(null,1),prev:l.bind(null,-1),parent:n,slides:i};return(t||[]).forEach(function(e){e(f)}),r(0),f};t.exports={from:i}},{}],13:[function(e,t,n){var i=e("bespoke"),a=e("bespoke-classes"),o=e("bespoke-nav"),r=e("bespoke-scale"),s=e("bespoke-bullets"),l=e("bespoke-hash"),c=e("bespoke-prism"),u=e("bespoke-multimedia"),p=e("bespoke-extern"),d=e("bespoke-theme-cube");i.from({parent:"article.deck",slides:"section"},[a(),o(),r(),s(".build, .build-items > *:not(.build-items)"),l(),c(),u(),p(i),d(i)])},{bespoke:12,"bespoke-bullets":1,"bespoke-classes":2,"bespoke-extern":3,"bespoke-hash":4,"bespoke-multimedia":5,"bespoke-nav":6,"bespoke-prism":9,"bespoke-scale":10,"bespoke-theme-cube":11}]},{},[13]);