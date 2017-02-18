!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=22)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.pluginName="vue-i18n-manager",a=t.warn=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&console.warn("["+r+"] "+e)};t.error=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&console.error("["+r+"] "+e)},t.getNamespace=function(e){return r+"/"+e},t.mapGetters=function(e){var t={};return e.forEach(function(e){t[e]=function(){return"undefined"==typeof this.$store.getters[e]&&a('Unknown getter: "'+e+'"'),this.$store.getters[e]}}),t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default={REMOVE_LANGUAGE_PERSISTENCY:(0,r.getNamespace)("REMOVE_LANGUAGE_PERSISTENCY"),UPDATE_CONFIGURATION:(0,r.getNamespace)("UPDATE_CONFIGURATION"),SET_LANGUAGE:(0,r.getNamespace)("SET_LANGUAGE"),SET_TRANSLATION:(0,r.getNamespace)("SET_TRANSLATION"),GET_TRANSLATION:(0,r.getNamespace)("GET_TRANSLATION"),SET_FORCE_TRANSLATION:(0,r.getNamespace)("SET_FORCE_TRANSLATION"),ADD_LANGUAGE:(0,r.getNamespace)("ADD_LANGUAGE"),ADD_TRANSLATION:(0,r.getNamespace)("ADD_TRANSLATION"),FILTER_LANGUAGES:(0,r.getNamespace)("FILTER_LANGUAGES")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defineKeys=t.defineLanguages=t.defineLanguage=t.defineUniqueLanguage=void 0;var r=n(0),a=function(e,t){return e.filter(function(e){return t.indexOf(e)<0})};t.defineUniqueLanguage=function(e,t){var n=e.find(function(e){return e.code===t.code});return!n||((0,r.warn)('"'+t.code+'" already exists in the list of languages'),!1)},t.defineLanguage=function(e){var t=["code","translateTo","urlPrefix"],n=Object.keys(e),o=a(t,n);return!o.length||((0,r.warn)("Invalid language definition. Property "+o.join(", ")+" missing."),!1)},t.defineLanguages=function(e,t){var n=e.find(function(e){return e.code===t});return!!n||((0,r.warn)("The default code must matches at least one language in the provided list"),!1)},t.defineKeys=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],u=a(e,t);return!u.length||(u.forEach(function(e){var t=o.find(function(t){return t.old===e});return t?void(0,r.warn)('"'+e+'" is a deprecated parameter. Please use "'+t.new+'"'):void(0,r.warn)('"'+e+'" is not a valid parameter to pass to '+n)}),!1)}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.routeParser=t.registerRouter=t.updateURLPrefix=t.localize=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(e,t,n){e.prototype.$localize=function(e){return f(e,n.getters.currentLanguage.urlPrefix)}};var u=n(1),i=r(u),f=t.localize=function(e,t){var n=e.params||{},r=o({},e),a=r.path;return delete r.path,Object.assign({},r,{path:a,params:o({},n,{lang:t})})},c=t.updateURLPrefix=function(e,t){var n=e.currentRoute;e&&n&&e.replace(f(n,t))},l=function(e,t){return t.find(function(t){return t.urlPrefix===e})};t.registerRouter=function(e,t){if(e){var n=t.getters.currentLanguage.urlPrefix,r=e.currentRoute.params.lang,a=l(r,t.getters.languages);a&&t.getters.trustURL&&(n=a.urlPrefix,t.dispatch(i.default.SET_LANGUAGE,n)),c(e,n),e.beforeEach(function(e,n,r){var a=t.getters,o=a.availableLanguages,u=a.currentLanguage,c=a.forceTranslation,l=a.languages,s=e.params.lang,d=c?l:o,g=d.find(function(e){return e.urlPrefix===s});if(!g||!n.name)return r(f(e,u.urlPrefix));var v=g&&g.urlPrefix!==u.urlPrefix;return v?t.dispatch(i.default.SET_LANGUAGE,g.code).then(function(){return r()}):void r()})}},t.routeParser=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en";return e.forEach(function(e){var t=e.path;e.path="/:lang"+t}),[].concat(a(e),[{path:"/*",name:"redirect",redirect:{path:"/"+t}}])}},function(e,t,n){!function(t,n){e.exports=n()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(5)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.debug=!1;t.setDebug=function(e){t.debug=n=e}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=[],r=function(e,t){n[e]="string"==typeof t?t:JSON.stringify(t)},a=function(e){return n[e]||null},o=function(){n=[]},u=function(e){n[e]&&delete n[e]};t.default={setItem:r,getItem:a,removeItem:u,clear:o}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(n){var r="padding: 2px; background: #219621; color: #ffffff",a="padding: 2px; background: #f1e05a; color: #333333",o="padding: 2px; background: #b9090b; color: #ffffff",u={error:o,success:r,warning:a};console.log("%c [Storage Helper] "+e+" ",u[t])}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),o=r(a),u=n(6),i=r(u),f=n(3),c=n(1),l=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return window.navigator&&!window.navigator.cookieEnabled?(o.default.setItem(e,t),void(0,f.log)("I've saved \""+e+'" in a plain object :)',"warning",c.debug)):(i.default.set(e,t,{expires:n}),void(0,f.log)("I've saved \""+e+'" in a cookie :)',"warning",c.debug))},s=function(e){return i.default.get(e)},d=function(e){i.default.remove(e)},g=function(){var e=document.cookie.split(";");if(e.length)for(var t=0,n=e.length;t<n;t++){var r=e[t],a=r.split("=")[0];i.default.remove(a)}};t.default={setItem:l,getItem:s,removeItem:d,clear:g}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.showStorageLogger=t.removeItem=t.clear=t.getItem=t.setItem=void 0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(2),u=r(o),i=n(4),f=r(i),c=n(3),l=n(1),s=navigator&&navigator.cookieEnabled,d=s?window.localStorage:void 0,g=void 0,v=function(){if(d||(g=!1),"undefined"!=typeof g)return g;try{d.setItem("0",""),d.removeItem("0"),g=!0}catch(e){g=!1}return g},p=t.setItem=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(!v()||!n)return n?void f.default.setItem(e,t):void u.default.setItem(e,t);try{d.setItem(e,t)}catch(n){var r=n.code;22!==r&&1014!==r||((0,c.log)('Quota exceeded for "'+e+'"!',"error",l.debug),f.default.setItem(e,t))}},m=t.getItem=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=f.default.getItem(e),r=u.default.getItem(e),o=void 0;o=v()?d.getItem(e)||n||r:n||r;try{return t?JSON.parse(o):o}catch(e){t?(0,c.log)("Oops! Some problems parsing this "+("undefined"==typeof o?"undefined":a(o))+".","error",l.debug):(0,c.log)(e,"error",l.debug)}return null},_=t.clear=function(){f.default.clear(),u.default.clear(),v()&&d.clear()},A=t.removeItem=function(e){f.default.removeItem(e),u.default.removeItem(e),v()&&d.removeItem(e)};t.showStorageLogger=function(e){(0,l.setDebug)(!!e)},t.default={setItem:p,getItem:m,removeItem:A,clear:_}},function(e,t,n){var r,a;!function(o){var u=!1;if(r=o,a="function"==typeof r?r.call(t,n,t,e):r,!(void 0!==a&&(e.exports=a)),u=!0,e.exports=o(),u=!0,!u){var i=window.Cookies,f=window.Cookies=o();f.noConflict=function(){return window.Cookies=i,f}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(n){function r(t,a,o){var u;if("undefined"!=typeof document){if(arguments.length>1){if(o=e({path:"/"},r.defaults,o),"number"==typeof o.expires){var i=new Date;i.setMilliseconds(i.getMilliseconds()+864e5*o.expires),o.expires=i}try{u=JSON.stringify(a),/^[\{\[]/.test(u)&&(a=u)}catch(e){}return a=n.write?n.write(a,t):encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)),t=t.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),t=t.replace(/[\(\)]/g,escape),document.cookie=[t,"=",a,o.expires?"; expires="+o.expires.toUTCString():"",o.path?"; path="+o.path:"",o.domain?"; domain="+o.domain:"",o.secure?"; secure":""].join("")}t||(u={});for(var f=document.cookie?document.cookie.split("; "):[],c=/(%[0-9A-Z]{2})+/g,l=0;l<f.length;l++){var s=f[l].split("="),d=s.slice(1).join("=");'"'===d.charAt(0)&&(d=d.slice(1,-1));try{var g=s[0].replace(c,decodeURIComponent);if(d=n.read?n.read(d,g):n(d,g)||d.replace(c,decodeURIComponent),this.json)try{d=JSON.parse(d)}catch(e){}if(t===g){u=d;break}t||(u[g]=d)}catch(e){}}return u}}return r.set=r,r.get=function(e){return r.call(r,e)},r.getJSON=function(){return r.apply({json:!0},[].slice.call(arguments))},r.defaults={},r.remove=function(t,n){r(t,"",e(n,{expires:-1}))},r.withConverter=t,r}return t(function(){})})}])})},,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.router,r=t.store;(0,f.default)(r),(0,l.default)(e,n,r),(0,d.default)(e,n,r),e.initI18nManager=g(e,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.events=t.routeParser=void 0,t.default=a;var o=n(1),u=r(o),i=n(10),f=r(i),c=n(8),l=r(c),s=n(3),d=r(s),g=function(e,t){var n=t.store,r=t.router,a=t.config;return function(){return Promise.all([n.dispatch(u.default.UPDATE_CONFIGURATION,a),n.dispatch(u.default.SET_LANGUAGE,n.getters.defaultCode)]).then(function(){(0,s.registerRouter)(r,n)})}};t.routeParser=s.routeParser,t.events=u.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.translate=void 0,t.default=function(e,t,n){e.prototype.$setLanguage=l(t,n),e.prototype.$t=s(n)};var a=n(1),o=r(a),u=n(3),i=n(0),f=function(e,t){e.length>0&&(e=e.map(function(e){return'"'+e+'"'}),(0,i.warn)("No match found for "+e.join(", ")+' in "'+t+'"'))},c=function(e,t){if(!t)return e;var n=e,r=[],a=new RegExp(/\{.*?}s?/g),o=e.match(a),u=Object.keys(t);return o.forEach(function(n,a){var o=n.slice(1,-1),i=t[o],f=u[a];return!i&&f?void r.push(f):void(e=e.replace(n,i))}),f(r,n),e},l=function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.getters.defaultCode,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.dispatch(o.default.SET_LANGUAGE,n).then(function(){r&&e&&(0,u.updateURLPrefix)(e,t.getters.currentLanguage.urlPrefix)})}},s=t.translate=function(e){return function(t,n){for(var r=e.getters.translation,a=t.split("."),o=r;a.length;){var u=a.shift();o[u]&&(o=o[u])}return"string"!=typeof o&&(o=null),r&&o?c(o,n):t}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getTranslation=function(e,t){return new Promise(function(e){e({message:"hello"})})}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e?void e.registerModule(u.pluginName,o.default):void(0,u.warn)("You need to add the VuexStore instance in the plugin options")};var a=n(13),o=r(a),u=n(0)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var o,u=n(9),i=n(0),f=n(2),c=n(1),l=r(c);t.default=(o={},a(o,l.default.REMOVE_LANGUAGE_PERSISTENCY,function(e){var t=e.commit;t(l.default.REMOVE_LANGUAGE_PERSISTENCY)}),a(o,l.default.SET_FORCE_TRANSLATION,function(e,t){var n=e.commit;n(l.default.SET_FORCE_TRANSLATION,t)}),a(o,l.default.UPDATE_CONFIGURATION,function(e){var t=e.commit,n=(e.state,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{});return n&&n.then?n.then(function(e){t(l.default.UPDATE_CONFIGURATION,e)}):void t(l.default.UPDATE_CONFIGURATION,n)}),a(o,l.default.GET_TRANSLATION,function(e,t){var n=e.dispatch,r=(e.commit,e.state),a=r.forceTranslation,o=r.availableLanguages,f=r.languages,c=r.currentLanguage,s=r.translations,d=a?f:o,g=d.find(function(e){return e.code===t}),v=s[c.translateTo];return g?v?v:(0,u.getTranslation)(r,g).then(function(e){return n(l.default.SET_TRANSLATION,{translation:e,code:t}),e}):void(0,i.warn)('A language with code "'+t+"\" doesn't exist or it's filtered")}),a(o,l.default.SET_TRANSLATION,function(e,t){var n=e.commit;n(l.default.SET_TRANSLATION,t)}),a(o,l.default.ADD_TRANSLATION,function(e,t){var n=e.commit;n(l.default.ADD_TRANSLATION,t)}),a(o,l.default.ADD_LANGUAGE,function(e,t){var n=(e.dispatch,e.commit);(0,f.defineLanguage)(t)&&n(l.default.ADD_LANGUAGE,t)}),a(o,l.default.SET_LANGUAGE,function(e,t){var n=e.dispatch,r=e.commit,a=e.state,o=a.languages.find(function(e){return e.code===t}),u=o?t:a.defaultCode;return r(l.default.SET_LANGUAGE,u),n(l.default.GET_TRANSLATION,u)}),o)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(4),o=r(a),u=n(0);t.default={availableLanguages:function(e){return e.availableLanguages},trustURL:function(e){return e.trustURL},languages:function(e){return e.languages},currentLanguage:function(e){return e.currentLanguage},urlPrefix:function(e){return e.currentLanguage.urlPrefix},languageFilter:function(e){return e.languageFilter},translation:function e(t){var e=t.translation,n=t.translations,r=t.currentLanguage;if(!r)return{};var a=n[r.translateTo];return a?a:e},forceTranslation:function(e){return e.forceTranslation},defaultCode:function e(t){var n=t.persistent,e=t.defaultCode,r=t.storageKey,a=t.forceTranslation,i=t.availableLanguages,f=t.languages,c=o.default.getItem(r);if(n&&c){var l=a?f:i,s=l.find(function(e){return e.code===c});if(e!==c&&(0,u.warn)("The code in the localStorage doesn't match with the defaultCode. Try to remve it."),s)return c}return e}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(14),o=r(a),u=n(15),i=r(u),f=n(12),c=r(f),l=n(11),s=r(l);t.default={state:i.default,mutations:o.default,getters:c.default,actions:s.default}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var o,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(4),f=r(i),c=n(2),l=n(1),s=r(l),d=(o={},a(o,s.default.REMOVE_LANGUAGE_PERSISTENCY,function(e){e.persistent=!1}),a(o,s.default.SET_FORCE_TRANSLATION,function(e,t){e.forceTranslation=t}),a(o,s.default.SET_TRANSLATION,function(e,t){var n=t.translation,r=t.code,o=e.languages,i=e.currentLanguage.translateTo,f=o.find(function(e){return e.code===r}),c=f&&f.translateTo||i;e.translations=u({},e.translations,a({},c,n)),e.translation=n}),a(o,s.default.ADD_TRANSLATION,function(e,t){var n=t.translation,r=t.code,o=e.languages,i=o.find(function(e){return e.code===r});i&&(e.translations=u({},e.translations,a({},i.translateTo,n)))}),a(o,s.default.UPDATE_CONFIGURATION,function(e,t){var n=Object.keys(t),r=Object.keys(e),a={};r.forEach(function(e){"undefined"!=typeof t[e]&&(a[e]=t[e])}),e=Object.assign(e,a),e.availableLanguages=e.languages,e.languageFilter.length>0&&e.availableLanguages.length>1&&(e.availableLanguages=e.availableLanguages.filter(function(t){return e.languageFilter.indexOf(t.code)!==-1})),(0,c.defineKeys)(n,r,"config"),(0,c.defineLanguages)(e.availableLanguages,e.defaultCode)}),a(o,s.default.ADD_LANGUAGE,function(e,t){(0,c.defineUniqueLanguage)(e.languages,t)&&e.languages.push(t)}),a(o,s.default.SET_LANGUAGE,function(e,t){var n=e.persistent,r=e.storageKey,a=e.forceTranslation,o=e.languages,u=e.availableLanguages,i=a?o:u,c=i.find(function(e){return e.code===t});c&&(n&&f.default.setItem(r,c.code),e.currentLanguage=c)}),o);t.default=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={name:"English",code:"en_GB",urlPrefix:"en",translateTo:"en_GB"},a={currentLanguage:r,translation:{},translations:{},forceTranslation:!1,persistent:!0,storageKey:"language_key",path:"static/i18n",defaultCode:r.code,availableLanguages:[r],languages:[r],languageFilter:[],trustURL:!1};t.default=a},,,,,,,function(e,t,n){e.exports=n(7)}])});