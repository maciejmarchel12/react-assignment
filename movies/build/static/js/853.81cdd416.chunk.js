/*! For license information please see 853.81cdd416.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[853],{3853:(e,r,n)=>{n.d(r,{F_:()=>s});var t=n(7660),u=n(390);function o(e,r,n,t){return new(n||(n=Promise))((function(u,o){function a(e){try{i(t.next(e))}catch(r){o(r)}}function l(e){try{i(t.throw(e))}catch(r){o(r)}}function i(e){var r;e.done?u(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(a,l)}i((t=t.apply(e,r||[])).next())}))}function a(e,r){var n,t,u,o,a={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,t&&(u=2&o[0]?t.return:o[0]?t.throw||((u=t.return)&&u.call(t),0):t.next)&&!(u=u.call(t,o[1])).done)return u;switch(t=0,u&&(o=[2&o[0],u.value]),o[0]){case 0:case 1:u=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,t=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(u=(u=a.trys).length>0&&u[u.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!u||o[1]>u[0]&&o[1]<u[3])){a.label=o[1];break}if(6===o[0]&&a.label<u[1]){a.label=u[1],u=o;break}if(u&&a.label<u[2]){a.label=u[2],a.ops.push(o);break}u[2]&&a.ops.pop(),a.trys.pop();continue}o=r.call(e,a)}catch(l){o=[6,l],t=0}finally{n=u=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}var l=function(){return l=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var u in r=arguments[n])Object.prototype.hasOwnProperty.call(r,u)&&(e[u]=r[u]);return e},l.apply(this,arguments)},i=function(e){return{loading:void 0===e||null===e,value:e}},c=function(e){var r=e?e():void 0,n=(0,u.useReducer)((function(e,r){switch(r.type){case"error":return l(l({},e),{error:r.error,loading:!1,value:void 0});case"reset":return i(r.defaultValue);case"value":return l(l({},e),{error:void 0,loading:!1,value:r.value});default:return e}}),i(r)),t=n[0],o=n[1],a=(0,u.useCallback)((function(){var r=e?e():void 0;o({type:"reset",defaultValue:r})}),[e]),c=(0,u.useCallback)((function(e){o({type:"error",error:e})}),[]),s=(0,u.useCallback)((function(e){o({type:"value",value:e})}),[]);return(0,u.useMemo)((function(){return{error:t.error,loading:t.loading,reset:a,setError:c,setValue:s,value:t.value}}),[t.error,t.loading,a,c,s,t.value])},s=function(e,r){var n=c((function(){return e.currentUser})),l=n.error,i=n.loading,s=n.setError,f=n.setValue,v=n.value;return(0,u.useEffect)((function(){var n=(0,t.Aj)(e,(function(e){return o(void 0,void 0,void 0,(function(){var n;return a(this,(function(t){switch(t.label){case 0:if(!(null===r||void 0===r?void 0:r.onUserChanged))return[3,4];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,r.onUserChanged(e)];case 2:return t.sent(),[3,4];case 3:return n=t.sent(),s(n),[3,4];case 4:return f(e),[2]}}))}))}),s);return function(){n()}}),[e]),[v,i,l]}}}]);
//# sourceMappingURL=853.81cdd416.chunk.js.map