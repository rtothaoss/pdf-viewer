/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[8],{435:function(ia,da,e){e.r(da);var ca=e(1);ia=e(50);var y=e(164),ha=e(371),ea=e(229),fa=window;e=function(){function e(e,y){this.vU=function(e){e=e.split(".");return e[e.length-1].match(/(jpg|jpeg|png|gif)$/i)};y=y||{};this.url=e;this.filename=y.filename||e;this.ef=y.customHeaders;this.ula=!!y.useDownloader;this.withCredentials=!!y.withCredentials}e.prototype.eE=function(e){this.ef=e};e.prototype.getCustomHeaders=function(){return this.ef};
e.prototype.getFileData=function(w){var aa=this,r=this,h=new XMLHttpRequest,n=0===this.url.indexOf("blob:")?"blob":"arraybuffer";h.open("GET",this.url,!0);h.withCredentials=this.withCredentials;h.responseType=n;this.ef&&Object.keys(this.ef).forEach(function(e){h.setRequestHeader(e,aa.ef[e])});var f=/^https?:/i.test(this.url);h.addEventListener("load",function(h){return Object(ca.b)(this,void 0,void 0,function(){var n,z,aa,ba,da,fa;return Object(ca.d)(this,function(x){switch(x.label){case 0:if(200!==
this.status&&(f||0!==this.status))return[3,10];r.trigger(e.Events.DOCUMENT_LOADING_PROGRESS,[h.loaded,h.loaded]);if("blob"!==this.responseType)return[3,4];n=this.response;return r.vU(r.filename)?[4,Object(ea.b)(n)]:[3,2];case 1:return z=x.ea(),r.fileSize=z.byteLength,w(new Uint8Array(z)),[3,3];case 2:aa=new FileReader,aa.onload=function(e){e=new Uint8Array(e.target.result);r.fileSize=e.length;w(e)},aa.readAsArrayBuffer(n),x.label=3;case 3:return[3,9];case 4:x.ei.push([4,8,,9]);ba=new Uint8Array(this.response);
if(!r.vU(r.filename))return[3,6];n=new Blob([ba.buffer]);return[4,Object(ea.b)(n)];case 5:return z=x.ea(),r.fileSize=z.byteLength,w(new Uint8Array(z)),[3,7];case 6:r.fileSize=ba.length,w(ba),x.label=7;case 7:return[3,9];case 8:return x.ea(),r.trigger(e.Events.ERROR,["pdfLoad","Out of memory"]),[3,9];case 9:return[3,11];case 10:da=h.currentTarget,fa=Object(y.b)(da),r.trigger(e.Events.ERROR,["pdfLoad",this.status+" "+da.statusText,fa]),x.label=11;case 11:return r.Dy=null,[2]}})})},!1);h.onprogress=
function(f){r.trigger(e.Events.DOCUMENT_LOADING_PROGRESS,[f.loaded,0<f.total?f.total:0])};h.addEventListener("error",function(){r.trigger(e.Events.ERROR,["pdfLoad","Network failure"]);r.Dy=null},!1);h.send();this.Dy=h};e.prototype.getFile=function(){var e=this;return new Promise(function(w){fa.utils.isJSWorker&&w(e.url);if(e.ula){var r=Object(ca.a)({url:e.url},e.ef?{customHeaders:e.ef}:{});w(r)}w(null)})};e.prototype.abort=function(){this.Dy&&(this.Dy.abort(),this.Dy=null)};e.Events={DOCUMENT_LOADING_PROGRESS:"documentLoadingProgress",
ERROR:"error"};return e}();Object(ia.a)(e);Object(ha.a)(e);Object(ha.b)(e);da["default"]=e}}]);}).call(this || window)
