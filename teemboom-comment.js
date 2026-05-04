var clear_land = (function (exports) {
	'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var react = {exports: {}};

	var react_production_min = {};

	/**
	 * @license React
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReact_production_min;

	function requireReact_production_min () {
		if (hasRequiredReact_production_min) return react_production_min;
		hasRequiredReact_production_min = 1;
	var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return "function"===typeof a?a:null}
		var B={isMounted:function(){return  false},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}E.prototype.isReactComponent={};
		E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}var H=G.prototype=new F;
		H.constructor=G;C(H,E.prototype);H.isPureReactComponent=true;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:true,ref:true,__self:true,__source:true};
		function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g) void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
		function N(a,b){return {$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
		function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=false;if(null===a)h=true;else switch(k){case "string":case "number":h=true;break;case "object":switch(a.$$typeof){case l:case n:h=true;}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
		a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c);}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
		function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
		var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
		react_production_min.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S(a,function(){b++;});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E;react_production_min.Fragment=p;react_production_min.Profiler=r;react_production_min.PureComponent=G;react_production_min.StrictMode=q;react_production_min.Suspense=w;
		react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;react_production_min.act=X;
		react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){ void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
		for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M;react_production_min.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
		react_production_min.forwardRef=function(a){return {$$typeof:v,render:a}};react_production_min.isValidElement=O;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V.transition;V.transition={};try{a();}finally{V.transition=b;}};react_production_min.unstable_act=X;react_production_min.useCallback=function(a,b){return U.current.useCallback(a,b)};react_production_min.useContext=function(a){return U.current.useContext(a)};
		react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U.current.useEffect(a,b)};react_production_min.useId=function(){return U.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};react_production_min.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};
		react_production_min.useMemo=function(a,b){return U.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U.current.useRef(a)};react_production_min.useState=function(a){return U.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};react_production_min.useTransition=function(){return U.current.useTransition()};react_production_min.version="18.3.1";
		return react_production_min;
	}

	var hasRequiredReact;

	function requireReact () {
		if (hasRequiredReact) return react.exports;
		hasRequiredReact = 1;

		{
		  react.exports = requireReact_production_min();
		}
		return react.exports;
	}

	var reactExports = requireReact();
	var React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

	var client = {};

	var reactDom = {exports: {}};

	var reactDom_production_min = {};

	var scheduler = {exports: {}};

	var scheduler_production_min = {};

	/**
	 * @license React
	 * scheduler.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredScheduler_production_min;

	function requireScheduler_production_min () {
		if (hasRequiredScheduler_production_min) return scheduler_production_min;
		hasRequiredScheduler_production_min = 1;
		(function (exports$1) {
	function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
			function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports$1.unstable_now=function(){return l.now()};}else {var p=Date,q=p.now();exports$1.unstable_now=function(){return p.now()-q};}var r=[],t=[],u=1,v=null,y=3,z=false,A=false,B=false,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
			"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t);}}function H(a){B=false;G(a);if(!A)if(null!==h(r))A=true,I(J);else {var b=h(t);null!==b&&K(H,b.startTime-a);}}
			function J(a,b){A=false;B&&(B=false,E(L),L=-1);z=true;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports$1.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b);}else k(r);v=h(r);}if(null!==v)var w=!0;else {var m=h(t);null!==m&&K(H,m.startTime-b);w=!1;}return w}finally{v=null,y=c,z=false;}}var N=false,O=null,L=-1,P=5,Q=-1;
			function M(){return exports$1.unstable_now()-Q<P?false:true}function R(){if(null!==O){var a=exports$1.unstable_now();Q=a;var b=true;try{b=O(!0,a);}finally{b?S():(N=false,O=null);}}else N=false;}var S;if("function"===typeof F)S=function(){F(R);};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null);};}else S=function(){D(R,0);};function I(a){O=a;N||(N=true,S());}function K(a,b){L=D(function(){a(exports$1.unstable_now());},b);}
			exports$1.unstable_IdlePriority=5;exports$1.unstable_ImmediatePriority=1;exports$1.unstable_LowPriority=4;exports$1.unstable_NormalPriority=3;exports$1.unstable_Profiling=null;exports$1.unstable_UserBlockingPriority=2;exports$1.unstable_cancelCallback=function(a){a.callback=null;};exports$1.unstable_continueExecution=function(){A||z||(A=true,I(J));};
			exports$1.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5;};exports$1.unstable_getCurrentPriorityLevel=function(){return y};exports$1.unstable_getFirstCallbackNode=function(){return h(r)};exports$1.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y;}var c=y;y=b;try{return a()}finally{y=c;}};exports$1.unstable_pauseExecution=function(){};
			exports$1.unstable_requestPaint=function(){};exports$1.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=y;y=a;try{return b()}finally{y=c;}};
			exports$1.unstable_scheduleCallback=function(a,b,c){var d=exports$1.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3;}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=true,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=true,I(J)));return a};
			exports$1.unstable_shouldYield=M;exports$1.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c;}}}; 
		} (scheduler_production_min));
		return scheduler_production_min;
	}

	var hasRequiredScheduler;

	function requireScheduler () {
		if (hasRequiredScheduler) return scheduler.exports;
		hasRequiredScheduler = 1;

		{
		  scheduler.exports = requireScheduler_production_min();
		}
		return scheduler.exports;
	}

	/**
	 * @license React
	 * react-dom.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReactDom_production_min;

	function requireReactDom_production_min () {
		if (hasRequiredReactDom_production_min) return reactDom_production_min;
		hasRequiredReactDom_production_min = 1;
	var aa=requireReact(),ca=requireScheduler();function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b);}
		function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a]);}
		var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
		{},ma={};function oa(a){if(ja.call(ma,a))return  true;if(ja.call(la,a))return  false;if(ka.test(a))return ma[a]=true;la[a]=true;return  false}function pa(a,b,c,d){if(null!==c&&0===c.type)return  false;switch(typeof b){case "function":case "symbol":return  true;case "boolean":if(d)return  false;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return  false}}
		function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return  true;if(d)return  false;if(null!==c)switch(c.type){case 3:return !b;case 4:return  false===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return  false}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g;}var z={};
		"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,false,a,null,false,false);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,false,a[1],null,false,false);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,false,a.toLowerCase(),null,false,false);});
		["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,false,a,null,false,false);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,false,a.toLowerCase(),null,false,false);});
		["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,true,a,null,false,false);});["capture","download"].forEach(function(a){z[a]=new v(a,4,false,a,null,false,false);});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,false,a,null,false,false);});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,false,a.toLowerCase(),null,false,false);});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
		"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
		sa);z[b]=new v(b,1,false,a,null,false,false);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,false,a,"http://www.w3.org/1999/xlink",false,false);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,false,a,"http://www.w3.org/XML/1998/namespace",false,false);});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,false,a.toLowerCase(),null,false,false);});
		z.xlinkHref=new v("xlinkHref",1,false,"xlink:href","http://www.w3.org/1999/xlink",true,false);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,false,a.toLowerCase(),null,true,true);});
		function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?false:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&true===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)));}
		var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");	var Ia=Symbol.for("react.offscreen");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return "function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||"";}return "\n"+La+a}var Na=false;
		function Oa(a,b){if(!a||Na)return "";Na=true;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[]);}catch(l){var d=l;}Reflect.construct(a,[],b);}else {try{b.call();}catch(l){d=l;}a.call(b.prototype);}else {try{throw Error();}catch(l){d=l;}a();}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
		f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=false,Error.prepareStackTrace=c;}return (a=a?a.displayName||a.name:"")?Ma(a):""}
		function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,false),a;case 11:return a=Oa(a.type.render,false),a;case 1:return a=Oa(a.type,true),a;default:return ""}}
		function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return "Fragment";case wa:return "Portal";case Aa:return "Profiler";case za:return "StrictMode";case Ea:return "Suspense";case Fa:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return (a.displayName||"Context")+".Consumer";case Ba:return (a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
		b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
		function Ra(a){var b=a.type;switch(a.tag){case 24:return "Cache";case 9:return (b.displayName||"Context")+".Consumer";case 10:return (b._context.displayName||"Context")+".Provider";case 18:return "DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return "Fragment";case 5:return b;case 4:return "Portal";case 3:return "Root";case 6:return "Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return "Offscreen";
		case 12:return "Profiler";case 21:return "Scope";case 13:return "Suspense";case 19:return "SuspenseList";case 25:return "TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return ""}}
		function Ta(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
		function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:true,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
		null;delete a[b];}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a));}function Wa(a){if(!a)return  false;var b=a._valueTracker;if(!b)return  true;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),true):false}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
		function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,false);}
		function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
		function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
		function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}var eb=Array.isArray;
		function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=true;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=true);}else {c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=true;d&&(a[e].defaultSelected=true);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=true);}}
		function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:Sa(c)};}
		function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}function kb(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}
		function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
		var mb,nb=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else {mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
		function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
		var pb={animationIterationCount:true,aspectRatio:true,borderImageOutset:true,borderImageSlice:true,borderImageWidth:true,boxFlex:true,boxFlexGroup:true,boxOrdinalGroup:true,columnCount:true,columns:true,flex:true,flexGrow:true,flexPositive:true,flexShrink:true,flexNegative:true,flexOrder:true,gridArea:true,gridRow:true,gridRowEnd:true,gridRowSpan:true,gridRowStart:true,gridColumn:true,gridColumnEnd:true,gridColumnSpan:true,gridColumnStart:true,fontWeight:true,lineClamp:true,lineHeight:true,opacity:true,order:true,orphans:true,tabSize:true,widows:true,zIndex:true,
		zoom:true,fillOpacity:true,floodOpacity:true,stopOpacity:true,strokeDasharray:true,strokeDashoffset:true,strokeMiterlimit:true,strokeOpacity:true,strokeWidth:true},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a];});});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
		function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var tb=A({menuitem:true},{area:true,base:true,br:true,col:true,embed:true,hr:true,img:true,input:true,keygen:true,link:true,meta:true,param:true,source:true,track:true,wbr:true});
		function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
		function vb(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return  false;default:return  true}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
		function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b));}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a;}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a]);}}function Gb(a,b){return a(b)}function Hb(){}var Ib=false;function Jb(a,b,c){if(Ib)return a(b,c);Ib=true;try{return Gb(a,b,c)}finally{if(Ib=false,null!==zb||null!==Ab)Hb(),Fb();}}
		function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=false;}if(a)return null;if(c&&"function"!==
		typeof c)throw Error(p(231,b,typeof c));return c}var Lb=false;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0;}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb);}catch(a){Lb=false;}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(m){this.onError(m);}}var Ob=false,Pb=null,Qb=false,Rb=null,Sb={onError:function(a){Ob=true;Pb=a;}};function Tb(a,b,c,d,e,f,g,h,k){Ob=false;Pb=null;Nb.apply(Sb,arguments);}
		function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=false;Pb=null;}else throw Error(p(198));Qb||(Qb=true,Rb=l);}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
		function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling;}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=false,h=e.child;h;){if(h===c){g=true;c=e;d=f;break}if(h===d){g=true;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
		c){g=true;c=f;d=e;break}if(h===d){g=true;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling;}return null}
		var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128));}catch(b){}}
		var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
		function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
		default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)));}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
		function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return  -1;case 134217728:case 268435456:case 536870912:case 1073741824:return  -1;default:return  -1}}
		function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b);}else k<=b&&(a.expiredLanes|=h);f&=~h;}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
		function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c;}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f;}}
		function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e;}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=false,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
		function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId);}}
		function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
		function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),true;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),true;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),true;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return  true;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),true}return  false}
		function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c);});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}
		function Xc(a){if(null!==a.blockedOn)return  false;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null;}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,false;b.shift();}return  true}function Zc(a,b,c){Xc(a)&&c.delete(b);}function $c(){Jc=false;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc);}
		function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=true,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)));}
		function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift();}var cd=ua.ReactCurrentBatchConfig,dd=true;
		function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d);}finally{C=e,cd.transition=f;}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d);}finally{C=e,cd.transition=f;}}
		function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f;}null!==e&&d.stopPropagation();}else hd(a,b,d,null,c);}}var id=null;
		function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null;}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null;}else b!==a&&(a=null);id=a;return null}
		function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
		case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
		function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return  true}function qd(){return  false}
		function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:false===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=true;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
		(a.returnValue=false),this.isDefaultPrevented=pd);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=true),this.isPropagationStopped=pd);},persist:function(){},isPersistent:pd});return b}
		var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
		a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return "movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
		Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
		119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:false}function zd(){return Pd}
		var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return "keypress"===a.type?od(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===
		a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
		deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=false;
		function ge(a,b){switch(a){case "keyup":return  -1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return  true;default:return  false}}function he(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var ie=false;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=true;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
		function ke(a,b){if(ie)return "compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=false,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
		var le={color:true,date:true,datetime:true,"datetime-local":true,email:true,month:true,number:true,password:true,range:true,search:true,tel:true,text:true,time:true,url:true,week:true};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!le[a.type]:"textarea"===b?true:false}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}));}var pe=null,qe=null;function re(a){se(a,0);}function te(a){var b=ue(a);if(Wa(b))return a}
		function ve(a,b){if("change"===a)return b}var we=false;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput;}xe=ye;}else xe=false;we=xe&&(!document.documentMode||9<document.documentMode);}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null);}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b);}}
		function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae();}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
		function Ie(a,b){if(He(a,b))return  true;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return  false;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return  false;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return  false}return  true}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
		function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Je(c);}}function Le(a,b){return a&&b?a===b?true:a&&3===a.nodeType?false:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):false:false}
		function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=false;}if(c)a=b.contentWindow;else break;b=Xa(a.document);}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
		function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
		d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)));}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top;}}
		var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=false;
		function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)));}
		function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
		ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
		function ff(a,b){df.set(a,b);fa(b,[a]);}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf);}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
		ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
		fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
		function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null;}
		function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}}}if(Qb)throw a=Rb,Qb=false,Rb=null,a;}
		function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,false),c.add(d));}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b);}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=true;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,false,a),qf(b,true,a));});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=true,qf("selectionchange",false,b));}}
		function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd;}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=true);d?void 0!==e?a.addEventListener(b,c,{capture:true,passive:e}):a.addEventListener(b,c,true):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,false);}
		function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return;}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode;}}d=d.return;}Jb(function(){var d=f,e=xb(c),g=[];
		a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
		Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td;}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
		w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return;}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}));}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
		n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null;}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
		vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x);}t=null;}else t=null;null!==k&&wf(g,h,k,t,false);null!==n&&null!==J&&wf(g,J,n,t,true);}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else {na=De;var xa=Ce;}else (k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
		xa.controlled&&"number"===h.type&&cb(h,"number",h.value);}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=true;break;case "contextmenu":case "mouseup":case "dragend":Te=false;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e);}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
		break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0;}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=true)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
		0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a);}se(g,b);});}function tf(a,b,c){return {instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return;}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
		function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return;}0!==g.length&&a.push({event:b,listeners:g});}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return ("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
		var Cf=null,Df=null;function Ef(a,b){return "textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
		var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;});}
		function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--;}else "$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e;}while(c);bd(b);}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
		function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--;}else "/$"===c&&b++;}a=a.previousSibling;}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
		function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a);}return b}a=c;c=a.parentNode;}return null}function Cb(a){a=a[Of]||a[uf];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return {current:a}}
		function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--);}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b;}var Vf={},H=Uf(Vf),Wf=Uf(false),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
		function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H);}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c);}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
		function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return  true}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c);}var eg=null,fg=false,gg=false;function hg(a){null===eg?eg=[a]:eg.push(a);}function ig(a){fg=true;hg(a);}
		function jg(){if(!gg&&null!==eg){gg=true;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1;}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=false;}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b;}
		function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a;}else rg=1<<f|c<<e|d,sg=a;}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0));}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null;}var xg=null,yg=null,I=false,zg=null;
		function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c);}
		function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),true):false;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,true):false;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
		null,true):false;default:return  false}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=false,xg=a);}}else {if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=false;xg=a;}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a;}
		function Gg(a){if(a!==xg)return  false;if(!I)return Fg(a),I=true,false;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling);}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--;}else "$"!==c&&"$!"!==c&&"$?"!==c||b++;}a=a.nextSibling;}yg=
		null;}}else yg=xg?Lf(a.stateNode.nextSibling):null;return  true}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling);}function Ig(){yg=xg=null;I=false;}function Jg(a){null===zg?zg=[a]:zg.push(a);}var Kg=ua.ReactCurrentBatchConfig;
		function Lg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode;}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;null===a?delete b[f]:b[f]=a;};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
		function Mg(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function Ng(a){var b=a._init;return b(a._payload)}
		function Og(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c);}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Pg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
		null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Qg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&Ng(f)===b.type))return d=e(b,c.props),d.ref=Lg(a,b,c),d.return=a,d;d=Rg(c.type,c.key,c.props,null,a.mode,d);d.ref=Lg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
		b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=Sg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Tg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=Qg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=Rg(b.type,b.key,b.props,null,a.mode,c),
		c.ref=Lg(a,null,b),c.return=a,c;case wa:return b=Sg(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Tg(b,a.mode,c,null),b.return=a,b;Mg(a,b);}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
		b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);Mg(a,c);}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);Mg(b,d);}return null}
		function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x;}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
		x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x;}if(n.done)return c(e,
		m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
		f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&Ng(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=Lg(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling;}f.type===ya?(d=Tg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Rg(f.type,f.key,f.props,null,a.mode,h),h.ref=Lg(a,d,f),h.return=a,a=h);}return g(a);case wa:a:{for(l=f.key;null!==
		d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=d.sibling;}d=Sg(f,a.mode,h);d.return=a;a=d;}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);Mg(a,f);}return "string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
		(c(a,d),d=Qg(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Ug=Og(true),Vg=Og(false),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null;}function ah(a){var b=Wg.current;E(Wg);a._currentValue=b;}function bh(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return;}}
		function ch(a,b){Xg=a;Zg=Yg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(dh=true),a.firstContext=null);}function eh(a){var b=a._currentValue;if(Zg!==a)if(a={context:a,memoizedValue:b,next:null},null===Yg){if(null===Xg)throw Error(p(308));Yg=a;Xg.dependencies={lanes:0,firstContext:a};}else Yg=Yg.next=a;return b}var fh=null;function gh(a){null===fh?fh=[a]:fh.push(a);}
		function hh(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,gh(b)):(c.next=e.next,e.next=c);b.interleaved=c;return ih(a,d)}function ih(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var jh=false;function kh(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null};}
		function lh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects});}function mh(a,b){return {eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
		function nh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return ih(a,c)}e=d.interleaved;null===e?(b.next=b,gh(d)):(b.next=e.next,e.next=b);d.interleaved=b;return ih(a,c)}function oh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
		function ph(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next;}while(null!==c);null===f?e=f=b:f=f.next=b;}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
		b;c.lastBaseUpdate=b;}
		function qh(a,b,c,d){var e=a.updateQueue;jh=false;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k));}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
		next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:jh=true;}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h));}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
		h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null;}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);rh|=g;a.lanes=g;a.memoizedState=q;}}
		function sh(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d);}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(a){if(a===th)throw Error(p(174));return a}
		function yh(a,b){G(wh,b);G(vh,a);G(uh,th);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a);}E(uh);G(uh,b);}function zh(){E(uh);E(vh);E(wh);}function Ah(a){xh(wh.current);var b=xh(uh.current);var c=lb(b,a.type);b!==c&&(G(vh,a),G(uh,c));}function Bh(a){vh.current===a&&(E(uh),E(vh));}var L=Uf(0);
		function Ch(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}var Dh=[];
		function Eh(){for(var a=0;a<Dh.length;a++)Dh[a]._workInProgressVersionPrimary=null;Dh.length=0;}var Fh=ua.ReactCurrentDispatcher,Gh=ua.ReactCurrentBatchConfig,Hh=0,M=null,N=null,O=null,Ih=false,Jh=false,Kh=0,Lh=0;function P(){throw Error(p(321));}function Mh(a,b){if(null===b)return  false;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return  false;return  true}
		function Nh(a,b,c,d,e,f){Hh=f;M=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Fh.current=null===a||null===a.memoizedState?Oh:Ph;a=c(d,e);if(Jh){f=0;do{Jh=false;Kh=0;if(25<=f)throw Error(p(301));f+=1;O=N=null;b.updateQueue=null;Fh.current=Qh;a=c(d,e);}while(Jh)}Fh.current=Rh;b=null!==N&&null!==N.next;Hh=0;O=N=M=null;Ih=false;if(b)throw Error(p(300));return a}function Sh(){var a=0!==Kh;Kh=0;return a}
		function Th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===O?M.memoizedState=O=a:O=O.next=a;return O}function Uh(){if(null===N){var a=M.alternate;a=null!==a?a.memoizedState:null;}else a=N.next;var b=null===O?M.memoizedState:O.next;if(null!==b)O=b,N=a;else {if(null===a)throw Error(p(310));N=a;a={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null};null===O?M.memoizedState=O=a:O=O.next=a;}return O}
		function Vh(a,b){return "function"===typeof b?b(a):b}
		function Wh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=N,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Hh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else {var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
		eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;M.lanes|=m;rh|=m;}l=l.next;}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(dh=true);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d;}a=c.interleaved;if(null!==a){e=a;do f=e.lane,M.lanes|=f,rh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return [b.memoizedState,c.dispatch]}
		function Xh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(dh=true);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}function Yh(){}
		function Zh(a,b){var c=M,d=Uh(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,dh=true);d=d.queue;$h(ai.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==O&&O.memoizedState.tag&1){c.flags|=2048;bi(9,ci.bind(null,c,d,e,b),void 0,null);if(null===Q)throw Error(p(349));0!==(Hh&30)||di(c,b,e);}return e}function di(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a));}
		function ci(a,b,c,d){b.value=c;b.getSnapshot=d;ei(b)&&fi(a);}function ai(a,b,c){return c(function(){ei(b)&&fi(a);})}function ei(a){var b=a.getSnapshot;a=a.value;try{var c=b();return !He(a,c)}catch(d){return  true}}function fi(a){var b=ih(a,1);null!==b&&gi(b,a,1,-1);}
		function hi(a){var b=Th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:a};b.queue=a;a=a.dispatch=ii.bind(null,M,a);return [b.memoizedState,a]}
		function bi(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function ji(){return Uh().memoizedState}function ki(a,b,c,d){var e=Th();M.flags|=a;e.memoizedState=bi(1|b,c,void 0,void 0===d?null:d);}
		function li(a,b,c,d){var e=Uh();d=void 0===d?null:d;var f=void 0;if(null!==N){var g=N.memoizedState;f=g.destroy;if(null!==d&&Mh(d,g.deps)){e.memoizedState=bi(b,c,f,d);return}}M.flags|=a;e.memoizedState=bi(1|b,c,f,d);}function mi(a,b){return ki(8390656,8,a,b)}function $h(a,b){return li(2048,8,a,b)}function ni(a,b){return li(4,2,a,b)}function oi(a,b){return li(4,4,a,b)}
		function pi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}function qi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return li(4,4,pi.bind(null,b,a),c)}function ri(){}function si(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
		function ti(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function ui(a,b,c){if(0===(Hh&21))return a.baseState&&(a.baseState=false,dh=true),a.memoizedState=c;He(c,b)||(c=yc(),M.lanes|=c,rh|=c,a.baseState=true);return b}function vi(a,b){var c=C;C=0!==c&&4>c?c:4;a(true);var d=Gh.transition;Gh.transition={};try{a(!1),b();}finally{C=c,Gh.transition=d;}}function wi(){return Uh().memoizedState}
		function xi(a,b,c){var d=yi(a);c={lane:d,action:c,hasEagerState:false,eagerState:null,next:null};if(zi(a))Ai(b,c);else if(c=hh(a,b,c,d),null!==c){var e=R();gi(c,a,d,e);Bi(c,b,d);}}
		function ii(a,b,c){var d=yi(a),e={lane:d,action:c,hasEagerState:false,eagerState:null,next:null};if(zi(a))Ai(b,e);else {var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,gh(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=hh(a,b,e,d);null!==c&&(e=R(),gi(c,a,d,e),Bi(c,b,d));}}
		function zi(a){var b=a.alternate;return a===M||null!==b&&b===M}function Ai(a,b){Jh=Ih=true;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}function Bi(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
		var Rh={readContext:eh,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useInsertionEffect:P,useLayoutEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useDeferredValue:P,useTransition:P,useMutableSource:P,useSyncExternalStore:P,useId:P,unstable_isNewReconciler:false},Oh={readContext:eh,useCallback:function(a,b){Th().memoizedState=[a,void 0===b?null:b];return a},useContext:eh,useEffect:mi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ki(4194308,
		4,pi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ki(4194308,4,a,b)},useInsertionEffect:function(a,b){return ki(4,2,a,b)},useMemo:function(a,b){var c=Th();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=xi.bind(null,M,a);return [d.memoizedState,a]},useRef:function(a){var b=
		Th();a={current:a};return b.memoizedState=a},useState:hi,useDebugValue:ri,useDeferredValue:function(a){return Th().memoizedState=a},useTransition:function(){var a=hi(false),b=a[0];a=vi.bind(null,a[1]);Th().memoizedState=a;return [b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=M,e=Th();if(I){if(void 0===c)throw Error(p(407));c=c();}else {c=b();if(null===Q)throw Error(p(349));0!==(Hh&30)||di(d,b,c);}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;mi(ai.bind(null,d,
		f,a),[a]);d.flags|=2048;bi(9,ci.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Th(),b=Q.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Kh++;0<c&&(b+="H"+c.toString(32));b+=":";}else c=Lh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:false},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh)},
		useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return ui(b,N.memoizedState,a)},useTransition:function(){var a=Wh(Vh)[0],b=Uh().memoizedState;return [a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:false},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return null===
		N?b.memoizedState=a:ui(b,N.memoizedState,a)},useTransition:function(){var a=Xh(Vh)[0],b=Uh().memoizedState;return [a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:false};function Ci(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a) void 0===b[c]&&(b[c]=a[c]);return b}return b}function Di(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c);}
		var Ei={isMounted:function(a){return (a=a._reactInternals)?Vb(a)===a:false},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e));},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e));},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=R(),d=
		yi(a),e=mh(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=nh(a,e,d);null!==b&&(gi(b,a,d,c),oh(b,a,d));}};function Fi(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):true}
		function Gi(a,b,c){var d=false,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=eh(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Ei;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
		function Hi(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Ei.enqueueReplaceState(b,b.state,null);}
		function Ii(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs={};kh(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=eh(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Di(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
		"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Ei.enqueueReplaceState(e,e.state,null),qh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308);}function Ji(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c;}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack;}return {value:a,source:b,stack:e,digest:null}}
		function Ki(a,b,c){return {value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function Li(a,b){try{console.error(b.value);}catch(c){setTimeout(function(){throw c;});}}var Mi="function"===typeof WeakMap?WeakMap:Map;function Ni(a,b,c){c=mh(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Oi||(Oi=true,Pi=d);Li(a,b);};return c}
		function Qi(a,b,c){c=mh(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Li(a,b);};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Li(a,b);"function"!==typeof d&&(null===Ri?Ri=new Set([this]):Ri.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}
		function Si(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Mi;var e=new Set;d.set(b,e);}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ti.bind(null,a,b,c),b.then(a,a));}function Ui(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?true:false:true;if(b)return a;a=a.return;}while(null!==a);return null}
		function Vi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=mh(-1,1),b.tag=2,nh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Wi=ua.ReactCurrentOwner,dh=false;function Xi(a,b,c,d){b.child=null===a?Vg(b,null,c,d):Ug(b,a.child,c,d);}
		function Yi(a,b,c,d,e){c=c.render;var f=b.ref;ch(b,e);d=Nh(a,b,c,d,f,e);c=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&c&&vg(b);b.flags|=1;Xi(a,b,d,e);return b.child}
		function $i(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!aj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,bj(a,b,f,d,e);a=Rg(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return Zi(a,b,e)}b.flags|=1;a=Pg(f,d);a.ref=b.ref;a.return=b;return b.child=a}
		function bj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(dh=false,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(dh=true);else return b.lanes=a.lanes,Zi(a,b,e)}return cj(a,b,c,d,e)}
		function dj(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ej,fj),fj|=c;else {if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(ej,fj),fj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(ej,fj);fj|=d;}else null!==
		f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(ej,fj),fj|=d;Xi(a,b,e,c);return b.child}function gj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152;}function cj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);ch(b,e);c=Nh(a,b,c,d,f,e);d=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&d&&vg(b);b.flags|=1;Xi(a,b,c,e);return b.child}
		function hj(a,b,c,d,e){if(Zf(c)){var f=true;cg(b);}else f=false;ch(b,e);if(null===b.stateNode)ij(a,b),Gi(b,c,d),Ii(b,c,d,e),d=true;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=eh(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
		(h!==d||k!==l)&&Hi(b,g,d,l);jh=false;var r=b.memoizedState;g.state=r;qh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||jh?("function"===typeof m&&(Di(b,c,m,d),k=b.memoizedState),(h=jh||Fi(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
		("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=false);}else {g=b.stateNode;lh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Ci(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=eh(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
		"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&Hi(b,g,d,k);jh=false;r=b.memoizedState;g.state=r;qh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||jh?("function"===typeof y&&(Di(b,c,y,d),n=b.memoizedState),(l=jh||Fi(b,c,l,d,r,n,k)||false)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
		g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
		a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=false);}return jj(a,b,c,d,f,e)}
		function jj(a,b,c,d,e,f){gj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,false),Zi(a,b,f);d=b.stateNode;Wi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Ug(b,a.child,null,f),b.child=Ug(b,null,h,f)):Xi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,true);return b.child}function kj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,false);yh(a,b.containerInfo);}
		function lj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Xi(a,b,c,d);return b.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(a){return {baseLanes:a,cachePool:null,transitions:null}}
		function oj(a,b,c){var d=b.pendingProps,e=L.current,f=false,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?false:0!==(e&2));if(h)f=true,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(L,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
		g):f=pj(g,d,0,null),a=Tg(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=nj(c),b.memoizedState=mj,a):qj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return rj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=Pg(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=Pg(h,f):(f=Tg(f,g,c,null),f.flags|=2);f.return=
		b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?nj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=mj;return d}f=a.child;a=f.sibling;d=Pg(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
		function qj(a,b){b=pj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function sj(a,b,c,d){null!==d&&Jg(d);Ug(b,a.child,null,c);a=qj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
		function rj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Ki(Error(p(422))),sj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=pj({mode:"visible",children:d.children},e,0,null);f=Tg(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Ug(b,a.child,null,g);b.child.memoizedState=nj(g);b.memoizedState=mj;return f}if(0===(b.mode&1))return sj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
		if(d)var h=d.dgst;d=h;f=Error(p(419));d=Ki(f,d,void 0);return sj(a,b,g,d)}h=0!==(g&a.childLanes);if(dh||h){d=Q;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0;}e=0!==(e&(d.suspendedLanes|g))?0:e;
		0!==e&&e!==f.retryLane&&(f.retryLane=e,ih(a,e),gi(d,a,e,-1));}tj();d=Ki(Error(p(421)));return sj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=uj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=true;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=qj(b,d.children);b.flags|=4096;return b}function vj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);bh(a.return,b,c);}
		function wj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e);}
		function xj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Xi(a,b,d.children,c);d=L.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else {if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&vj(a,c,b);else if(19===a.tag)vj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}G(L,d);if(0===(b.mode&1))b.memoizedState=
		null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Ch(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);wj(b,false,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Ch(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}wj(b,true,c,null,f);break;case "together":wj(b,false,null,null,void 0);break;default:b.memoizedState=null;}return b.child}
		function ij(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);}function Zi(a,b,c){null!==a&&(b.dependencies=a.dependencies);rh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=Pg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Pg(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}
		function yj(a,b,c){switch(b.tag){case 3:kj(b);Ig();break;case 5:Ah(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:yh(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Wg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(L,L.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return oj(a,b,c);G(L,L.current&1);a=Zi(a,b,c);return null!==a?a.sibling:null}G(L,L.current&1);break;case 19:d=0!==(c&
		b.childLanes);if(0!==(a.flags&128)){if(d)return xj(a,b,c);b.flags|=128;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(L,L.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,dj(a,b,c)}return Zi(a,b,c)}var zj,Aj,Bj,Cj;
		zj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};Aj=function(){};
		Bj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;xh(uh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf);}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
		(c||(c={}),c[g]="");}else "dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g]);}else c||(f||(f=[]),f.push(l,
		c)),c=k;else "dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k));}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4;}};Cj=function(a,b,c,d){c!==d&&(b.flags|=4);};
		function Dj(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
		function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
		function Ej(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;zh();E(Wf);E(H);Eh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Fj(zg),zg=null));Aj(a,b);S(b);return null;case 5:Bh(b);var e=xh(wh.current);
		c=b.type;if(null!==a&&null!=b.stateNode)Bj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else {if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
		d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d);}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(true!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(true!==f.suppressHydrationWarning&&Af(d.textContent,
		h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d);}switch(c){case "input":Va(d);db(d,f,true);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf);}d=e;b.updateQueue=d;null!==d&&(b.flags|=4);}else {g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
		"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=true:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;zj(a,b,false,false);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
		a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d;}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
		c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g));}switch(c){case "input":Va(a);db(a,d,false);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,false):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
		true);break;default:"function"===typeof e.onClick&&(a.onclick=Bf);}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=true;break a;default:d=false;}}d&&(b.flags|=4);}null!==b.ref&&(b.flags|=512,b.flags|=2097152);}S(b);return null;case 6:if(a&&null!=b.stateNode)Cj(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=xh(wh.current);xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
		xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:true!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1));}f&&(b.flags|=4);}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d;}S(b);return null;case 13:E(L);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=false;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
		a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b;}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=false;}else null!==zg&&(Fj(zg),zg=null),f=true;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(L.current&1)?0===T&&(T=3):tj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return zh(),
		Aj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return ah(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(L);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Dj(f,false);else {if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Ch(a);if(null!==g){b.flags|=128;Dj(f,false);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
		g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(L,L.current&1|2);return b.child}a=
		a.sibling;}null!==f.tail&&B()>Gj&&(b.flags|=128,d=true,Dj(f,false),b.lanes=4194304);}else {if(!d)if(a=Ch(g),null!==a){if(b.flags|=128,d=true,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Dj(f,true),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Gj&&1073741824!==c&&(b.flags|=128,d=true,Dj(f,false),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g);}if(null!==f.tail)return b=f.tail,f.rendering=
		b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=L.current,G(L,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Hj(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(fj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
		function Ij(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return zh(),E(Wf),E(H),Eh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Bh(b),null;case 13:E(L);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig();}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(L),null;case 4:return zh(),null;case 10:return ah(b.type._context),null;case 22:case 23:return Hj(),
		null;case 24:return null;default:return null}}var Jj=false,U=false,Kj="function"===typeof WeakSet?WeakSet:Set,V=null;function Lj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null);}catch(d){W(a,b,d);}else c.current=null;}function Mj(a,b,c){try{c();}catch(d){W(a,b,d);}}var Nj=false;
		function Oj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType;}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
		q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y;}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode;}q=y;}c=-1===h||-1===k?null:{start:h,end:k};}else c=null;}c=c||{start:0,end:0};}else c=null;Df={focusedElem:a,selectionRange:c};dd=false;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
		case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Ci(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w;}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F);}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return;}n=Nj;Nj=false;return n}
		function Pj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Mj(b,c,f);}e=e.next;}while(e!==d)}}function Qj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d();}c=c.next;}while(c!==b)}}function Rj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c;}"function"===typeof b?b(a):b.current=a;}}
		function Sj(a){var b=a.alternate;null!==b&&(a.alternate=null,Sj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null;}function Tj(a){return 5===a.tag||3===a.tag||4===a.tag}
		function Uj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Tj(a.return))return null;a=a.return;}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child;}if(!(a.flags&2))return a.stateNode}}
		function Vj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Vj(a,b,c),a=a.sibling;null!==a;)Vj(a,b,c),a=a.sibling;}
		function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling;}var X=null,Xj=false;function Yj(a,b,c){for(c=c.child;null!==c;)Zj(a,b,c),c=c.sibling;}
		function Zj(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c);}catch(h){}switch(c.tag){case 5:U||Lj(c,b);case 6:var d=X,e=Xj;X=null;Yj(a,b,c);X=d;Xj=e;null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Xj;X=c.stateNode.containerInfo;Xj=true;
		Yj(a,b,c);X=d;Xj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Mj(c,b,g):0!==(f&4)&&Mj(c,b,g));e=e.next;}while(e!==d)}Yj(a,b,c);break;case 1:if(!U&&(Lj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount();}catch(h){W(c,b,h);}Yj(a,b,c);break;case 21:Yj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
		c.memoizedState,Yj(a,b,c),U=d):Yj(a,b,c);break;default:Yj(a,b,c);}}function ak(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Kj);b.forEach(function(b){var d=bk.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}
		function ck(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Xj=!1;break a;case 3:X=h.stateNode.containerInfo;Xj=!0;break a;case 4:X=h.stateNode.containerInfo;Xj=!0;break a}h=h.return;}if(null===X)throw Error(p(160));Zj(f,g,e);X=null;Xj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null;}catch(l){W(e,b,l);}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)dk(b,a),b=b.sibling;}
		function dk(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:ck(b,a);ek(a);if(d&4){try{Pj(3,a,a.return),Qj(3,a);}catch(t){W(a,a.return,t);}try{Pj(5,a,a.return);}catch(t){W(a,a.return,t);}}break;case 1:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);break;case 5:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"");}catch(t){W(a,a.return,t);}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
		a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l);}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
		f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1));}e[Pf]=f;}catch(t){W(a,a.return,t);}}break;case 6:ck(b,a);ek(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f;}catch(t){W(a,a.return,t);}}break;case 3:ck(b,a);ek(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo);}catch(t){W(a,a.return,t);}break;case 4:ck(b,a);ek(a);break;case 13:ck(b,a);ek(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
		null!==e.alternate&&null!==e.alternate.memoizedState||(fk=B()));d&4&&ak(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,ck(b,a),U=l):ck(b,a);ek(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Pj(4,r,r.return);break;case 1:Lj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
		b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount();}catch(t){W(d,c,t);}}break;case 5:Lj(r,r.return);break;case 22:if(null!==r.memoizedState){gk(q);continue}}null!==y?(y.return=r,V=y):gk(q);}m=m.sibling;}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
		rb("display",g));}catch(t){W(a,a.return,t);}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps;}catch(t){W(a,a.return,t);}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return;}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling;}}break;case 19:ck(b,a);ek(a);d&4&&ak(a);break;case 21:break;default:ck(b,
		a),ek(a);}}function ek(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Tj(c)){var d=c;break a}c=c.return;}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Uj(a);Wj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Uj(a);Vj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k);}a.flags&=-3;}b&4096&&(a.flags&=-4097);}function hk(a,b,c){V=a;ik(a);}
		function ik(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Jj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Jj;var l=U;Jj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?jk(e):null!==k?(k.return=g,V=k):jk(e);for(;null!==f;)V=f,ik(f),f=f.sibling;V=e;Jj=h;U=l;}kk(a);}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):kk(a);}}
		function kk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Qj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else {var e=b.elementType===b.type?c.memoizedProps:Ci(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate);}var f=b.updateQueue;null!==f&&sh(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
		b.child.stateNode;break;case 1:c=b.child.stateNode;}sh(b,g,c);}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src);}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q);}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
		default:throw Error(p(163));}U||b.flags&512&&Rj(b);}catch(r){W(b,b.return,r);}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return;}}function gk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return;}}
		function jk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Qj(4,b);}catch(k){W(b,c,k);}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount();}catch(k){W(b,e,k);}}var f=b.return;try{Rj(b);}catch(k){W(b,f,k);}break;case 5:var g=b.return;try{Rj(b);}catch(k){W(b,g,k);}}}catch(k){W(b,b.return,k);}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return;}}
		var lk=Math.ceil,mk=ua.ReactCurrentDispatcher,nk=ua.ReactCurrentOwner,ok=ua.ReactCurrentBatchConfig,K=0,Q=null,Y=null,Z=0,fj=0,ej=Uf(0),T=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=Infinity,uk=null,Oi=false,Pi=null,Ri=null,vk=false,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R(){return 0!==(K&6)?B():-1!==Ak?Ak:Ak=B()}
		function yi(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Bk&&(Bk=yc()),Bk;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function gi(a,b,c,d){if(50<yk)throw yk=0,zk=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==Q)a===Q&&(0===(K&2)&&(qk|=c),4===T&&Ck(a,Z)),Dk(a,d),1===c&&0===K&&0===(b.mode&1)&&(Gj=B()+500,fg&&jg());}
		function Dk(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===Q?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Ek.bind(null,a)):hg(Ek.bind(null,a)),Jf(function(){0===(K&6)&&jg();}),c=null;else {switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc;}c=Fk(c,Gk.bind(null,a));}a.callbackPriority=b;a.callbackNode=c;}}
		function Gk(a,b){Ak=-1;Bk=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Hk()&&a.callbackNode!==c)return null;var d=uc(a,a===Q?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Ik(a,d);else {b=d;var e=K;K|=2;var f=Jk();if(Q!==a||Z!==b)uk=null,Gj=B()+500,Kk(a,b);do try{Lk();break}catch(h){Mk(a,h);}while(1);$g();mk.current=f;K=e;null!==Y?b=0:(Q=null,Z=0,b=T);}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Nk(a,e)));if(1===b)throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;if(6===b)Ck(a,d);
		else {e=a.current.alternate;if(0===(d&30)&&!Ok(e)&&(b=Ik(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Nk(a,f))),1===b))throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Pk(a,tk,uk);break;case 3:Ck(a,d);if((d&130023424)===d&&(b=fk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){R();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),b);break}Pk(a,tk,uk);break;case 4:Ck(a,d);if((d&4194240)===
		d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f;}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*lk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),d);break}Pk(a,tk,uk);break;case 5:Pk(a,tk,uk);break;default:throw Error(p(329));}}}Dk(a,B());return a.callbackNode===c?Gk.bind(null,a):null}
		function Nk(a,b){var c=sk;a.current.memoizedState.isDehydrated&&(Kk(a,b).flags|=256);a=Ik(a,b);2!==a&&(b=tk,tk=c,null!==b&&Fj(b));return a}function Fj(a){null===tk?tk=a:tk.push.apply(tk,a);}
		function Ok(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return !1}catch(g){return  false}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else {if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return  true;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return  true}
		function Ck(a,b){b&=~rk;b&=~qk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d;}}function Ek(a){if(0!==(K&6))throw Error(p(327));Hk();var b=uc(a,0);if(0===(b&1))return Dk(a,B()),null;var c=Ik(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Nk(a,d));}if(1===c)throw c=pk,Kk(a,0),Ck(a,b),Dk(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Pk(a,tk,uk);Dk(a,B());return null}
		function Qk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Gj=B()+500,fg&&jg());}}function Rk(a){null!==wk&&0===wk.tag&&0===(K&6)&&Hk();var b=K;K|=1;var c=ok.transition,d=C;try{if(ok.transition=null,C=1,a)return a()}finally{C=d,ok.transition=c,K=b,0===(K&6)&&jg();}}function Hj(){fj=ej.current;E(ej);}
		function Kk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:zh();E(Wf);E(H);Eh();break;case 5:Bh(d);break;case 4:zh();break;case 13:E(L);break;case 19:E(L);break;case 10:ah(d.type._context);break;case 22:case 23:Hj();}c=c.return;}Q=a;Y=a=Pg(a.current,null);Z=fj=b;T=0;pk=null;rk=qk=rh=0;tk=sk=null;if(null!==fh){for(b=
		0;b<fh.length;b++)if(c=fh[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g;}c.pending=d;}fh=null;}return a}
		function Mk(a,b){do{var c=Y;try{$g();Fh.current=Rh;if(Ih){for(var d=M.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next;}Ih=!1;}Hh=0;O=N=M=null;Jh=!1;Kh=0;nk.current=null;if(null===c||null===c.return){T=1;pk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
		m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null);}var y=Ui(g);if(null!==y){y.flags&=-257;Vi(y,g,h,f,b);y.mode&1&&Si(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t;}else n.add(k);break a}else {if(0===(b&1)){Si(f,l,b);tj();break a}k=Error(p(426));}}else if(I&&h.mode&1){var J=Ui(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Vi(J,g,h,f,b);Jg(Ji(k,h));break a}}f=k=Ji(k,h);4!==T&&(T=2);null===sk?sk=[f]:sk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
		b&=-b;f.lanes|=b;var x=Ni(f,k,b);ph(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Ri||!Ri.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Qi(f,h,b);ph(f,F);break a}}f=f.return;}while(null!==f)}Sk(c);}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Jk(){var a=mk.current;mk.current=Rh;return null===a?Rh:a}
		function tj(){if(0===T||3===T||2===T)T=4;null===Q||0===(rh&268435455)&&0===(qk&268435455)||Ck(Q,Z);}function Ik(a,b){var c=K;K|=2;var d=Jk();if(Q!==a||Z!==b)uk=null,Kk(a,b);do try{Tk();break}catch(e){Mk(a,e);}while(1);$g();K=c;mk.current=d;if(null!==Y)throw Error(p(261));Q=null;Z=0;return T}function Tk(){for(;null!==Y;)Uk(Y);}function Lk(){for(;null!==Y&&!cc();)Uk(Y);}function Uk(a){var b=Vk(a.alternate,a,fj);a.memoizedProps=a.pendingProps;null===b?Sk(a):Y=b;nk.current=null;}
		function Sk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Ej(c,b,fj),null!==c){Y=c;return}}else {c=Ij(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else {T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a;}while(null!==b);0===T&&(T=5);}function Pk(a,b,c){var d=C,e=ok.transition;try{ok.transition=null,C=1,Wk(a,b,c,d);}finally{ok.transition=e,C=d;}return null}
		function Wk(a,b,c,d){do Hk();while(null!==wk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===Q&&(Y=Q=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||vk||(vk=true,Fk(hc,function(){Hk();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=ok.transition;ok.transition=null;
		var g=C;C=1;var h=K;K|=4;nk.current=null;Oj(a,c);dk(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;hk(c);dc();K=h;C=g;ok.transition=f;}else a.current=c;vk&&(vk=false,wk=a,xk=e);f=a.pendingLanes;0===f&&(Ri=null);mc(c.stateNode);Dk(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Oi)throw Oi=false,a=Pi,Pi=null,a;0!==(xk&1)&&0!==a.tag&&Hk();f=a.pendingLanes;0!==(f&1)?a===zk?yk++:(yk=0,zk=a):yk=0;jg();return null}
		function Hk(){if(null!==wk){var a=Dc(xk),b=ok.transition,c=C;try{ok.transition=null;C=16>a?16:a;if(null===wk)var d=!1;else {a=wk;wk=null;xk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Pj(8,m,f);}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Sj(m);if(m===
		l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y;}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J;}while(null!==t)}}V=f;}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Pj(9,f,f.return);}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return;}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
		u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Qj(9,h);}}catch(na){W(h,h.return,na);}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return;}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a);}catch(na){}d=!0;}return d}finally{C=c,ok.transition=b;}}return  false}function Xk(a,b,c){b=Ji(c,b);b=Ni(a,b,1);a=nh(a,b,1);b=R();null!==a&&(Ac(a,1,b),Dk(a,b));}
		function W(a,b,c){if(3===a.tag)Xk(a,a,c);else for(;null!==b;){if(3===b.tag){Xk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ri||!Ri.has(d))){a=Ji(c,a);a=Qi(b,a,1);b=nh(b,a,1);a=R();null!==b&&(Ac(b,1,a),Dk(b,a));break}}b=b.return;}}
		function Ti(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=R();a.pingedLanes|=a.suspendedLanes&c;Q===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-fk?Kk(a,0):rk|=c);Dk(a,b);}function Yk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=R();a=ih(a,b);null!==a&&(Ac(a,b,c),Dk(a,c));}function uj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Yk(a,c);}
		function bk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Yk(a,c);}var Vk;
		Vk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)dh=true;else {if(0===(a.lanes&c)&&0===(b.flags&128))return dh=false,yj(a,b,c);dh=0!==(a.flags&131072)?true:false;}else dh=false,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;ij(a,b);a=b.pendingProps;var e=Yf(b,H.current);ch(b,c);e=Nh(null,b,d,a,e,c);var f=Sh();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
		null,Zf(d)?(f=true,cg(b)):f=false,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,kh(b),e.updater=Ei,b.stateNode=e,e._reactInternals=b,Ii(b,d,a,c),b=jj(null,b,d,true,f,c)):(b.tag=0,I&&f&&vg(b),Xi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{ij(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Zk(d);a=Ci(d,a);switch(e){case 0:b=cj(null,b,d,a,c);break a;case 1:b=hj(null,b,d,a,c);break a;case 11:b=Yi(null,b,d,a,c);break a;case 14:b=$i(null,b,d,Ci(d.type,a),c);break a}throw Error(p(306,
		d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),cj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),hj(a,b,d,e,c);case 3:a:{kj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;lh(a,b);qh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:false,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
		f,b.memoizedState=f,b.flags&256){e=Ji(Error(p(423)),b);b=lj(a,b,d,c,e);break a}else if(d!==e){e=Ji(Error(p(424)),b);b=lj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=true,zg=null,c=Vg(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else {Ig();if(d===e){b=Zi(a,b,c);break a}Xi(a,b,d,c);}b=b.child;}return b;case 5:return Ah(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
		gj(a,b),Xi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return oj(a,b,c);case 4:return yh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Ug(b,null,d,c):Xi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),Yi(a,b,d,e,c);case 7:return Xi(a,b,b.pendingProps,c),b.child;case 8:return Xi(a,b,b.pendingProps.children,c),b.child;case 12:return Xi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
		g=e.value;G(Wg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=Zi(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=mh(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k;}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);bh(f.return,
		c,b);h.lanes|=c;break}k=k.next;}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);bh(g,c,b);g=f.sibling;}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return;}f=g;}Xi(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,d=b.pendingProps.children,ch(b,c),e=eh(e),d=d(e),b.flags|=1,Xi(a,b,d,c),
		b.child;case 14:return d=b.type,e=Ci(d,b.pendingProps),e=Ci(d.type,e),$i(a,b,d,e,c);case 15:return bj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),ij(a,b),b.tag=1,Zf(d)?(a=true,cg(b)):a=false,ch(b,c),Gi(b,d,e),Ii(b,d,e,c),jj(null,b,d,true,a,c);case 19:return xj(a,b,c);case 22:return dj(a,b,c)}throw Error(p(156,b.tag));};function Fk(a,b){return ac(a,b)}
		function $k(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null;}function Bg(a,b,c,d){return new $k(a,b,c,d)}function aj(a){a=a.prototype;return !(!a||!a.isReactComponent)}
		function Zk(a){if("function"===typeof a)return aj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
		function Pg(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
		c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
		function Rg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)aj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Tg(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return pj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
		break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Tg(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function pj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:false};return a}function Qg(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
		function Sg(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
		function al(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
		null;}function bl(a,b,c,d,e,f,g,h,k){a=new al(a,b,c,h,k);1===b?(b=1,true===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};kh(f);return a}function cl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
		function dl(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return;}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
		function el(a,b,c,d,e,f,g,h,k){a=bl(c,d,true,a,e,f,g,h,k);a.context=dl(null);c=a.current;d=R();e=yi(c);f=mh(d,e);f.callback=void 0!==b&&null!==b?b:null;nh(c,f,e);a.current.lanes=e;Ac(a,e,d);Dk(a,d);return a}function fl(a,b,c,d){var e=b.current,f=R(),g=yi(e);c=dl(c);null===b.context?b.context=c:b.pendingContext=c;b=mh(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=nh(e,b,g);null!==a&&(gi(a,e,g,f),oh(a,e,g));return g}
		function gl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function hl(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b;}}function il(a,b){hl(a,b);(a=a.alternate)&&hl(a,b);}function jl(){return null}var kl="function"===typeof reportError?reportError:function(a){console.error(a);};function ll(a){this._internalRoot=a;}
		ml.prototype.render=ll.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));fl(a,b,null,null);};ml.prototype.unmount=ll.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Rk(function(){fl(null,a,null,null);});b[uf]=null;}};function ml(a){this._internalRoot=a;}
		ml.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a);}};function nl(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function ol(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function pl(){}
		function ql(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=gl(g);f.call(a);};}var g=el(b,d,a,0,null,false,false,"",pl);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Rk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=gl(k);h.call(a);};}var k=bl(a,0,false,null,null,false,false,"",pl);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Rk(function(){fl(b,k,c,d);});return k}
		function rl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=gl(g);h.call(a);};}fl(b,g,a,e);}else g=ql(c,b,a,e,d);return gl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Dk(b,B()),0===(K&6)&&(Gj=B()+500,jg()));}break;case 13:Rk(function(){var b=ih(a,1);if(null!==b){var c=R();gi(b,a,1,c);}}),il(a,1);}};
		Fc=function(a){if(13===a.tag){var b=ih(a,134217728);if(null!==b){var c=R();gi(b,a,134217728,c);}il(a,134217728);}};Gc=function(a){if(13===a.tag){var b=yi(a),c=ih(a,b);if(null!==c){var d=R();gi(c,a,b,d);}il(a,b);}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c;}};
		yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e);}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,false);}};Gb=Qk;Hb=Rk;
		var sl={usingClientEntryPoint:false,Events:[Cb,ue,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"};
		var ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||
		jl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{kc=vl.inject(ul),lc=vl;}catch(a){}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl;
		reactDom_production_min.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!nl(b))throw Error(p(200));return cl(a,b,null,c)};reactDom_production_min.createRoot=function(a,b){if(!nl(a))throw Error(p(299));var c=false,d="",e=kl;null!==b&&void 0!==b&&(true===b.unstable_strictMode&&(c=true),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=bl(a,1,false,null,null,c,false,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ll(b)};
		reactDom_production_min.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};reactDom_production_min.flushSync=function(a){return Rk(a)};reactDom_production_min.hydrate=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,true,c)};
		reactDom_production_min.hydrateRoot=function(a,b,c){if(!nl(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=false,f="",g=kl;null!==c&&void 0!==c&&(true===c.unstable_strictMode&&(e=true),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=el(b,null,a,1,null!=c?c:null,e,false,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
		e);return new ml(b)};reactDom_production_min.render=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,false,c)};reactDom_production_min.unmountComponentAtNode=function(a){if(!ol(a))throw Error(p(40));return a._reactRootContainer?(Rk(function(){rl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null;});}),true):false};reactDom_production_min.unstable_batchedUpdates=Qk;
		reactDom_production_min.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!ol(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return rl(a,b,c,false,d)};reactDom_production_min.version="18.3.1-next-f1338f8080-20240426";
		return reactDom_production_min;
	}

	var hasRequiredReactDom;

	function requireReactDom () {
		if (hasRequiredReactDom) return reactDom.exports;
		hasRequiredReactDom = 1;

		function checkDCE() {
		  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		  if (
		    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
		    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
		  ) {
		    return;
		  }
		  try {
		    // Verify that the code above has been dead code eliminated (DCE'd).
		    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
		  } catch (err) {
		    // DevTools shouldn't crash React, no matter what.
		    // We should still report in case we break this code.
		    console.error(err);
		  }
		}

		{
		  // DCE check should happen before ReactDOM bundle executes so that
		  // DevTools can report bad minification during injection.
		  checkDCE();
		  reactDom.exports = requireReactDom_production_min();
		}
		return reactDom.exports;
	}

	var hasRequiredClient;

	function requireClient () {
		if (hasRequiredClient) return client;
		hasRequiredClient = 1;

		var m = requireReactDom();
		{
		  client.createRoot = m.createRoot;
		  client.hydrateRoot = m.hydrateRoot;
		}
		return client;
	}

	var clientExports = requireClient();

	/**
	 * API utilities for communicating with the Teemboom Comments API
	 */

	function generateUUID$1() {
	  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
	    return crypto.randomUUID();
	  }
	  // Fallback for older browsers
	  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
	    const r = Math.random() * 16 | 0;
	    return (c === "x" ? r : r & 0x3 | 0x8).toString(16);
	  });
	}
	function getDefaultApiUrl() {
	  if (typeof window !== "undefined") {
	    const host = window.location.host || "";
	    if (host.startsWith("localhost") || host.startsWith("127.0.0.")) {
	      return "http://localhost:5003";
	    }
	  }
	  return "https://comments-api.teemboom.com";
	}
	const TEEMBOOM_API_BASE_URL = getDefaultApiUrl();
	const USER_ID_STORAGE_KEY = "teemboom_user_id";
	const USERNAME_STORAGE_KEY = "teemboom_username";
	class CommentAPI {
	  constructor() {
	    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    this.apiUrl = (options.apiUrl || TEEMBOOM_API_BASE_URL).replace(/\/$/, "");
	  }

	  /**
	   * Get site configuration for a page
	   */
	  async getConfig(pageId) {
	    try {
	      const response = await fetch(`${this.apiUrl}/teemboom_config`, {
	        method: "POST",
	        headers: {
	          "Content-Type": "application/json"
	        },
	        body: JSON.stringify({
	          page_id: pageId
	        })
	      });
	      const data = await response.json();
	      return data.status ? data.data : null;
	    } catch (error) {
	      console.error("Error fetching config:", error);
	      return null;
	    }
	  }

	  /**
	   * Get comments for a page
	   */
	  async getComments(pageId) {
	    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    try {
	      const response = await fetch(`${this.apiUrl}/get_comments`, {
	        method: "POST",
	        headers: {
	          "Content-Type": "application/json"
	        },
	        body: JSON.stringify({
	          page_id: pageId,
	          filter: options.filter || "oldest",
	          page: options.page || 1,
	          per_page: options.perPage || 50,
	          user_id: options.userId || undefined
	        })
	      });
	      const data = await response.json();
	      return data.status ? data.data : [];
	    } catch (error) {
	      console.error("Error fetching comments:", error);
	      return [];
	    }
	  }

	  /**
	   * Get nested comments (replies to a comment)
	   */
	  async getNestedComments(parentId) {
	    let userId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	    let page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
	    let perPage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;
	    try {
	      const response = await fetch(`${this.apiUrl}/get_nested_comments`, {
	        method: "POST",
	        headers: {
	          "Content-Type": "application/json"
	        },
	        body: JSON.stringify({
	          parent_id: parentId,
	          user_id: userId || undefined,
	          page,
	          per_page: perPage
	        })
	      });
	      const data = await response.json();
	      if (!data.status) return {
	        comments: [],
	        has_more: false,
	        page
	      };
	      // Support both paginated shape { comments, has_more } and legacy flat array
	      if (Array.isArray(data.data)) return {
	        comments: data.data,
	        has_more: false,
	        page
	      };
	      return data.data;
	    } catch (error) {
	      console.error("Error fetching nested comments:", error);
	      return {
	        comments: [],
	        has_more: false,
	        page
	      };
	    }
	  }

	  /**
	   * Post a new comment
	   */
	  async postComment(pageId, content, user) {
	    let parentId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	    try {
	      const response = await fetch(`${this.apiUrl}/new_comment`, {
	        method: "POST",
	        headers: {
	          "Content-Type": "application/json"
	        },
	        body: JSON.stringify({
	          page_id: pageId,
	          content,
	          user,
	          parent_id: parentId
	        })
	      });
	      const data = await response.json();
	      return data.status ? data.data : null;
	    } catch (error) {
	      console.error("Error posting comment:", error);
	      return null;
	    }
	  }

	  /**
	   * Like a comment
	   */
	  async reactComment(userId, commentId, reaction) {
	    try {
	      const response = await fetch(`${this.apiUrl}/react_comment`, {
	        method: "POST",
	        headers: {
	          "Content-Type": "application/json"
	        },
	        body: JSON.stringify({
	          user_id: userId,
	          comment_id: commentId,
	          reaction
	        })
	      });
	      const data = await response.json();
	      return data.status ? data.data : null;
	    } catch (error) {
	      console.error("Error reacting to comment:", error);
	      return null;
	    }
	  }
	  async likeComment(userId, commentId) {
	    return this.reactComment(userId, commentId, "like");
	  }

	  /**
	   * Dislike a comment
	   */
	  async dislikeComment(userId, commentId) {
	    return this.reactComment(userId, commentId, "dislike");
	  }

	  /**
	   * Report a comment
	   */
	  async reportComment(commentId, userId) {
	    let content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	    try {
	      const response = await fetch(`${this.apiUrl}/report_comment`, {
	        method: "POST",
	        headers: {
	          "Content-Type": "application/json"
	        },
	        body: JSON.stringify({
	          comment_id: commentId,
	          user_id: userId,
	          content
	        })
	      });
	      const data = await response.json();
	      return data.status;
	    } catch (error) {
	      console.error("Error reporting comment:", error);
	      return false;
	    }
	  }

	  /**
	   * Edit a comment
	   */
	  async editComment(commentId, userId, content) {
	    try {
	      const response = await fetch(`${this.apiUrl}/edit_comment`, {
	        method: "POST",
	        headers: {
	          "Content-Type": "application/json"
	        },
	        body: JSON.stringify({
	          comment_id: commentId,
	          user_id: userId,
	          content
	        })
	      });
	      const data = await response.json();
	      return data.status;
	    } catch (error) {
	      console.error("Error editing comment:", error);
	      return false;
	    }
	  }
	}

	/**
	 * Get or create a user ID stored in localStorage
	 */
	function getUserId() {
	  let userId = localStorage.getItem(USER_ID_STORAGE_KEY);
	  if (!userId) {
	    userId = generateUUID$1();
	    localStorage.setItem(USER_ID_STORAGE_KEY, userId);
	  }
	  return userId;
	}
	function getStoredUsername() {
	  const username = localStorage.getItem(USERNAME_STORAGE_KEY);
	  return username ? username.trim() : "";
	}
	function setStoredUsername(username) {
	  const normalizedUsername = typeof username === "string" ? username.trim() : "";
	  if (!normalizedUsername) {
	    localStorage.removeItem(USERNAME_STORAGE_KEY);
	    return "";
	  }
	  localStorage.setItem(USERNAME_STORAGE_KEY, normalizedUsername);
	  return normalizedUsername;
	}
	function clearStoredUsername() {
	  localStorage.removeItem(USERNAME_STORAGE_KEY);
	}

	/**
	 * Get default user object for comment posting
	 */
	function getDefaultUser() {
	  let authenticationType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "guest";
	  const fallbackUsername = authenticationType === "username" ? getStoredUsername() || "Anonymous" : "Anonymous";
	  return {
	    _id: getUserId(),
	    username: fallbackUsername,
	    profile_pic: null
	  };
	}
	function getUsernameUser() {
	  const username = getStoredUsername();
	  return {
	    _id: getUserId(),
	    username: username || "Anonymous",
	    profile_pic: null
	  };
	}

	/**
	 * WebSocket client for live comment updates
	 * Connects to the Go socket server and manages real-time events
	 */

	class CommentWebSocket {
	  constructor() {
	    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    this.wsUrl = options.wsUrl || this.getDefaultWsUrl();
	    this.clientId = options.clientId || (typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()));
	    this.ws = null;
	    this.messageHandlers = {};
	    this.reconnectAttempts = 0;
	    this.maxReconnectAttempts = Number(options.maxReconnectAttempts ?? 10);
	    this.reconnectDelay = Number(options.reconnectDelay ?? 1000); // ms
	    this.maxReconnectDelay = Number(options.maxReconnectDelay ?? 30000); // ms
	    this.connectionTimeout = Number(options.connectionTimeout ?? 10000); // ms
	    this.maxQueueSize = Number(options.maxQueueSize ?? 1000);
	    this.isIntentionallyClosed = false;
	    this.joinedRooms = new Set();
	    this.messageQueue = [];
	    this.reconnectTimer = null;
	    this.connectPromise = null;
	    this.connectTimeoutTimer = null;
	    this.eventDescriptions = {
	      comment_created: "A new comment was created in this room",
	      reply_created: "A new reply was added to a comment in this room",
	      reaction_updated: "A reaction was added, removed, or changed",
	      comment_edited: "A comment was edited",
	      comment_deleted: "A comment was deleted",
	      moderation_updated: "A moderation state changed for a comment",
	      thread_updated: "The thread metadata changed",
	      room_updated: "The room metadata changed"
	    };
	  }
	  getDefaultWsUrl() {
	    if (typeof window !== "undefined") {
	      const host = window.location.host || "";
	      const hostname = window.location.hostname || "";
	      if (host.startsWith("localhost") || host.startsWith("127.0.0.") || hostname === "::1") {
	        return "ws://localhost:5900";
	      }
	      return "ws://socket.teemboom.com";
	    }
	    return "ws://localhost:5900";
	  }

	  /**
	   * Connect to the WebSocket server
	   */
	  connect() {
	    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
	      return Promise.resolve();
	    }
	    if (this.connectPromise) {
	      return this.connectPromise;
	    }
	    this.isIntentionallyClosed = false;
	    this.connectPromise = new Promise((resolve, reject) => {
	      let settled = false;
	      const settleResolve = () => {
	        if (settled) {
	          return;
	        }
	        settled = true;
	        this.clearConnectTimeout();
	        this.connectPromise = null;
	        resolve();
	      };
	      const settleReject = error => {
	        if (settled) {
	          return;
	        }
	        settled = true;
	        this.clearConnectTimeout();
	        this.connectPromise = null;
	        reject(error);
	      };
	      try {
	        this.ws = new WebSocket(this.wsUrl);
	        this.connectTimeoutTimer = setTimeout(() => {
	          const timeoutError = new Error(`WebSocket connection timeout after ${this.connectionTimeout}ms`);
	          if (this.ws && this.ws.readyState !== WebSocket.OPEN) {
	            this.ws.close();
	          }
	          settleReject(timeoutError);
	        }, this.connectionTimeout);
	        this.ws.onopen = () => {
	          console.log("WebSocket connected");
	          this.reconnectAttempts = 0;
	          this.clearReconnectTimer();
	          this.rejoinRooms();
	          this.processMessageQueue();
	          settleResolve();
	        };
	        this.ws.onmessage = event => {
	          this.handleRawMessage(event?.data);
	        };
	        this.ws.onerror = error => {
	          console.error("WebSocket error:", error);
	          if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
	            settleReject(error);
	          }
	        };
	        this.ws.onclose = () => {
	          console.log("WebSocket disconnected");
	          if (!settled) {
	            settleReject(new Error("WebSocket closed before connection established"));
	          }
	          this.attemptReconnect();
	        };
	      } catch (error) {
	        console.error("Failed to create WebSocket:", error);
	        settleReject(error);
	      }
	    });
	    return this.connectPromise;
	  }

	  /**
	   * Attempt to reconnect with exponential backoff
	   */
	  attemptReconnect() {
	    if (this.isIntentionallyClosed) {
	      return;
	    }
	    if (this.reconnectTimer) {
	      return;
	    }
	    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
	      console.error("Max reconnection attempts reached");
	      return;
	    }
	    this.reconnectAttempts++;
	    const delay = Math.min(this.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1), this.maxReconnectDelay);
	    console.log(`Attempting to reconnect in ${delay}ms (attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
	    this.reconnectTimer = setTimeout(() => {
	      this.reconnectTimer = null;
	      this.connect().catch(error => {
	        console.error("Reconnection failed:", error);
	        this.attemptReconnect();
	      });
	    }, delay);
	  }

	  /**
	   * Send a message to the server
	   */
	  send(type, payload) {
	    const message = {
	      type,
	      payload
	    };
	    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
	      this.ws.send(JSON.stringify(message));
	      return true;
	    } else {
	      // Queue the message if not connected
	      this.enqueueMessage(message);
	      return false;
	    }
	  }
	  enqueueMessage(message) {
	    if (this.messageQueue.length >= this.maxQueueSize) {
	      this.messageQueue.shift();
	      console.warn("WebSocket queue full; dropping oldest queued message");
	    }
	    this.messageQueue.push(message);
	  }

	  /**
	   * Process any queued messages once connected
	   */
	  processMessageQueue() {
	    while (this.messageQueue.length > 0 && this.ws && this.ws.readyState === WebSocket.OPEN) {
	      const message = this.messageQueue.shift();
	      this.ws.send(JSON.stringify(message));
	    }
	  }

	  /**
	   * Join a room to receive updates for that page/room
	   */
	  joinRoom(roomId) {
	    const normalizedRoomId = String(roomId || "").trim();
	    if (!normalizedRoomId) {
	      return;
	    }
	    if (this.joinedRooms.has(normalizedRoomId)) {
	      return; // Already joined
	    }
	    this.send("join_room", {
	      room_id: normalizedRoomId
	    });
	    this.joinedRooms.add(normalizedRoomId);
	  }
	  broadcastComment(roomId, comment) {
	    if (!roomId || !comment) {
	      return;
	    }
	    const eventKey = comment.parent_id ? "reply_created" : "comment_created";
	    this.broadcastEvent(roomId, "comment_created", {
	      comment,
	      parent_id: comment.parent_id || null,
	      key: eventKey
	    });
	  }
	  broadcastReaction(roomId, reactionData) {
	    if (!roomId || !reactionData) {
	      return;
	    }
	    this.broadcastEvent(roomId, "reaction_updated", {
	      reaction: reactionData,
	      comment_id: reactionData.comment_id || null
	    });
	  }
	  broadcastReply(roomId, reply) {
	    let parentCommentId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	    if (!roomId || !reply) {
	      return;
	    }
	    this.broadcastEvent(roomId, "comment_created", {
	      comment: reply,
	      parent_id: parentCommentId || reply.parent_id || null,
	      key: "reply_created"
	    });
	  }
	  broadcastCommentEdit(roomId, comment) {
	    if (!roomId || !comment?._id) {
	      return;
	    }
	    this.broadcastEvent(roomId, "comment_edited", {
	      comment,
	      comment_id: comment._id
	    });
	  }
	  broadcastCommentDelete(roomId, commentId) {
	    let parentId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	    if (!roomId || !commentId) {
	      return;
	    }
	    this.broadcastEvent(roomId, "comment_deleted", {
	      comment_id: commentId,
	      parent_id: parentId
	    });
	  }
	  broadcastModerationUpdate(roomId, moderationData) {
	    if (!roomId || !moderationData) {
	      return;
	    }
	    this.broadcastEvent(roomId, "moderation_updated", {
	      moderation: moderationData,
	      comment_id: moderationData.comment_id || null
	    });
	  }
	  broadcastEvent(roomId, eventKey) {
	    let payload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	    const normalizedRoomId = String(roomId || "").trim();
	    const normalizedKey = String(eventKey || "").trim();
	    if (!normalizedRoomId || !normalizedKey) {
	      return;
	    }
	    const normalizedPayload = payload && typeof payload === "object" ? payload : {
	      value: payload
	    };
	    const payloadKey = typeof normalizedPayload.key === "string" && normalizedPayload.key.trim() ? normalizedPayload.key.trim() : normalizedKey;
	    const description = options.description || this.eventDescriptions[payloadKey] || "Live room update";
	    this.send("send_message", {
	      room_id: normalizedRoomId,
	      data: {
	        ...normalizedPayload,
	        payload: normalizedPayload,
	        key: payloadKey,
	        description,
	        event: normalizedKey,
	        origin_client_id: this.clientId,
	        timestamp: Date.now()
	      }
	    });
	  }

	  /**
	   * Leave a room
	   */
	  leaveRoom(roomId) {
	    // Currently the Go server doesn't support leaving,
	    // but we track it here for future implementation
	    this.joinedRooms.delete(roomId);
	  }

	  /**
	   * Register a handler for a specific message type
	   */
	  on(type, handler) {
	    if (typeof handler !== "function") {
	      return;
	    }
	    if (!this.messageHandlers[type]) {
	      this.messageHandlers[type] = new Set();
	    }
	    this.messageHandlers[type].add(handler);
	  }

	  /**
	   * Remove a handler for a specific message type
	   */
	  off(type, handler) {
	    if (!this.messageHandlers[type]) {
	      return;
	    }
	    if (typeof handler !== "function") {
	      this.messageHandlers[type].clear();
	      return;
	    }
	    this.messageHandlers[type].delete(handler);
	    if (this.messageHandlers[type].size === 0) {
	      delete this.messageHandlers[type];
	    }
	  }
	  handleRawMessage(rawData) {
	    if (typeof rawData !== "string") {
	      return;
	    }
	    const chunks = rawData.split("\n").map(entry => entry.trim()).filter(Boolean);
	    for (const chunk of chunks) {
	      try {
	        const message = JSON.parse(chunk);
	        this.handleMessage(message);
	      } catch (error) {
	        console.error("Failed to parse WebSocket message chunk:", error, chunk);
	      }
	    }
	  }

	  /**
	   * Handle incoming messages from the server
	   */
	  handleMessage(message) {
	    const {
	      type,
	      data
	    } = message;
	    if (!type) {
	      console.warn("Received message without type");
	      return;
	    }

	    // Call registered handlers for this type
	    if (this.messageHandlers[type]) {
	      this.messageHandlers[type].forEach(handler => {
	        try {
	          handler(data);
	        } catch (error) {
	          console.error(`Error in ${type} handler:`, error);
	        }
	      });
	    }

	    // Also log unknown types for debugging
	    if (!this.messageHandlers[type]) {
	      console.log(`Received message of type: ${type}`, data);
	    }
	  }

	  /**
	   * Disconnect from the server
	   */
	  disconnect() {
	    this.isIntentionallyClosed = true;
	    this.reconnectAttempts = 0;
	    this.joinedRooms.clear();
	    this.clearReconnectTimer();
	    this.clearConnectTimeout();
	    this.connectPromise = null;
	    if (this.ws) {
	      this.ws.close();
	      this.ws = null;
	    }
	  }
	  clearReconnectTimer() {
	    if (this.reconnectTimer) {
	      clearTimeout(this.reconnectTimer);
	      this.reconnectTimer = null;
	    }
	  }
	  clearConnectTimeout() {
	    if (this.connectTimeoutTimer) {
	      clearTimeout(this.connectTimeoutTimer);
	      this.connectTimeoutTimer = null;
	    }
	  }
	  rejoinRooms() {
	    if (this.joinedRooms.size === 0) {
	      return;
	    }
	    for (const roomId of this.joinedRooms) {
	      this.send("join_room", {
	        room_id: roomId
	      });
	    }
	  }

	  /**
	   * Check if connected
	   */
	  isConnected() {
	    return this.ws && this.ws.readyState === WebSocket.OPEN;
	  }
	}

	function assertNonEmptyString (str) {
	  if (typeof str !== 'string' || !str) {
	    throw new Error('expected a non-empty string, got: ' + str)
	  }
	}

	function assertNumber (number) {
	  if (typeof number !== 'number') {
	    throw new Error('expected a number, got: ' + number)
	  }
	}

	const DB_VERSION_CURRENT = 1;
	const DB_VERSION_INITIAL = 1;
	const STORE_EMOJI = 'emoji';
	const STORE_KEYVALUE = 'keyvalue';
	const STORE_FAVORITES = 'favorites';
	const FIELD_TOKENS = 'tokens';
	const INDEX_TOKENS = 'tokens';
	const FIELD_UNICODE = 'unicode';
	const INDEX_COUNT = 'count';
	const FIELD_GROUP = 'group';
	const FIELD_ORDER = 'order';
	const INDEX_GROUP_AND_ORDER = 'group-order';
	const KEY_ETAG = 'eTag';
	const KEY_URL = 'url';
	const KEY_PREFERRED_SKINTONE = 'skinTone';
	const MODE_READONLY = 'readonly';
	const MODE_READWRITE = 'readwrite';
	const INDEX_SKIN_UNICODE = 'skinUnicodes';
	const FIELD_SKIN_UNICODE = 'skinUnicodes';

	const DEFAULT_DATA_SOURCE$1 = 'https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json';
	const DEFAULT_LOCALE$1 = 'en';

	// like lodash's uniqBy but much smaller
	function uniqBy$1 (arr, func) {
	  const set = new Set();
	  const res = [];
	  for (const item of arr) {
	    const key = func(item);
	    if (!set.has(key)) {
	      set.add(key);
	      res.push(item);
	    }
	  }
	  return res
	}

	function uniqEmoji (emojis) {
	  return uniqBy$1(emojis, _ => _.unicode)
	}

	function initialMigration (db) {
	  function createObjectStore (name, keyPath, indexes) {
	    const store = keyPath
	      ? db.createObjectStore(name, { keyPath })
	      : db.createObjectStore(name);
	    if (indexes) {
	      for (const [indexName, [keyPath, multiEntry]] of Object.entries(indexes)) {
	        store.createIndex(indexName, keyPath, { multiEntry });
	      }
	    }
	    return store
	  }

	  createObjectStore(STORE_KEYVALUE);
	  createObjectStore(STORE_EMOJI, /* keyPath */ FIELD_UNICODE, {
	    [INDEX_TOKENS]: [FIELD_TOKENS, /* multiEntry */ true],
	    [INDEX_GROUP_AND_ORDER]: [[FIELD_GROUP, FIELD_ORDER]],
	    [INDEX_SKIN_UNICODE]: [FIELD_SKIN_UNICODE, /* multiEntry */ true]
	  });
	  createObjectStore(STORE_FAVORITES, undefined, {
	    [INDEX_COUNT]: ['']
	  });
	}

	const openIndexedDBRequests = {};
	const databaseCache = {};
	const onCloseListeners = {};

	function handleOpenOrDeleteReq (resolve, reject, req) {
	  // These things are almost impossible to test with fakeIndexedDB sadly
	  /* istanbul ignore next */
	  req.onerror = () => reject(req.error);
	  /* istanbul ignore next */
	  req.onblocked = () => reject(new Error('IDB blocked'));
	  req.onsuccess = () => resolve(req.result);
	}

	async function createDatabase (dbName) {
	  const db = await new Promise((resolve, reject) => {
	    const req = indexedDB.open(dbName, DB_VERSION_CURRENT);
	    openIndexedDBRequests[dbName] = req;
	    req.onupgradeneeded = e => {
	      // Technically there is only one version, so we don't need this `if` check
	      // But if an old version of the JS is in another browser tab
	      // and it gets upgraded in the future and we have a new DB version, well...
	      // better safe than sorry.
	      /* istanbul ignore else */
	      if (e.oldVersion < DB_VERSION_INITIAL) {
	        initialMigration(req.result);
	      }
	    };
	    handleOpenOrDeleteReq(resolve, reject, req);
	  });
	  // Handle abnormal closes, e.g. "delete database" in chrome dev tools.
	  // No need for removeEventListener, because once the DB can no longer
	  // fire "close" events, it will auto-GC.
	  db.onclose = () => closeDatabase(dbName);
	  return db
	}

	function openDatabase (dbName) {
	  if (!databaseCache[dbName]) {
	    databaseCache[dbName] = createDatabase(dbName);
	  }
	  return databaseCache[dbName]
	}

	function dbPromise (db, storeName, readOnlyOrReadWrite, cb) {
	  return new Promise((resolve, reject) => {
	    // Use relaxed durability because neither the emoji data nor the favorites/preferred skin tone
	    // are really irreplaceable data. IndexedDB is just a cache in this case.
	    const txn = db.transaction(storeName, readOnlyOrReadWrite, { durability: 'relaxed' });
	    const store = typeof storeName === 'string'
	      ? txn.objectStore(storeName)
	      : storeName.map(name => txn.objectStore(name));
	    let res;
	    cb(store, txn, (result) => {
	      res = result;
	    });

	    txn.oncomplete = () => resolve(res);
	    /* istanbul ignore next */
	    txn.onerror = () => reject(txn.error);
	  })
	}

	function closeDatabase (dbName) {
	  // close any open requests
	  const req = openIndexedDBRequests[dbName];
	  const db = req && req.result;
	  if (db) {
	    db.close();
	    const listeners = onCloseListeners[dbName];
	    /* istanbul ignore else */
	    if (listeners) {
	      for (const listener of listeners) {
	        listener();
	      }
	    }
	  }
	  delete openIndexedDBRequests[dbName];
	  delete databaseCache[dbName];
	  delete onCloseListeners[dbName];
	}

	function deleteDatabase (dbName) {
	  return new Promise((resolve, reject) => {
	    // close any open requests
	    closeDatabase(dbName);
	    const req = indexedDB.deleteDatabase(dbName);
	    handleOpenOrDeleteReq(resolve, reject, req);
	  })
	}

	// The "close" event occurs during an abnormal shutdown, e.g. a user clearing their browser data.
	// However, it doesn't occur with the normal "close" event, so we handle that separately.
	// https://www.w3.org/TR/IndexedDB/#close-a-database-connection
	function addOnCloseListener (dbName, listener) {
	  let listeners = onCloseListeners[dbName];
	  if (!listeners) {
	    listeners = onCloseListeners[dbName] = [];
	  }
	  listeners.push(listener);
	}

	// list of emoticons that don't match a simple \W+ regex
	// extracted using:
	// require('emoji-picker-element-data/en/emojibase/data.json').map(_ => _.emoticon).filter(Boolean).filter(_ => !/^\W+$/.test(_))
	const irregularEmoticons = new Set([
	  ':D', 'XD', ":'D", 'O:)',
	  ':X', ':P', ';P', 'XP',
	  ':L', ':Z', ':j', '8D',
	  'XO', '8)', ':B', ':O',
	  ':S', ":'o", 'Dx', 'X(',
	  'D:', ':C', '>0)', ':3',
	  '</3', '<3', '\\M/', ':E',
	  '8#'
	]);

	function extractTokens (str) {
	  return str
	    .split(/[\s_]+/)
	    .map(word => {
	      if (!word.match(/\w/) || irregularEmoticons.has(word)) {
	        // for pure emoticons like :) or :-), just leave them as-is
	        return word.toLowerCase()
	      }

	      return word
	        .replace(/[)(:,]/g, '')
	        .replace(/’/g, "'")
	        .toLowerCase()
	    }).filter(Boolean)
	}

	const MIN_SEARCH_TEXT_LENGTH$1 = 2;

	// This is an extra step in addition to extractTokens(). The difference here is that we expect
	// the input to have already been run through extractTokens(). This is useful for cases like
	// emoticons, where we don't want to do any tokenization (because it makes no sense to split up
	// ">:)" by the colon) but we do want to lowercase it to have consistent search results, so that
	// the user can type ':P' or ':p' and still get the same result.
	function normalizeTokens (str) {
	  return str
	    .filter(Boolean)
	    .map(_ => _.toLowerCase())
	    .filter(_ => _.length >= MIN_SEARCH_TEXT_LENGTH$1)
	}

	// Transform emoji data for storage in IDB
	function transformEmojiData (emojiData) {
	  const res = emojiData.map(({ annotation, emoticon, group, order, shortcodes, skins, tags, emoji, version }) => {
	    const tokens = [...new Set(
	      normalizeTokens([
	        ...(shortcodes || []).map(extractTokens).flat(),
	        ...(tags || []).map(extractTokens).flat(),
	        ...extractTokens(annotation),
	        emoticon
	      ])
	    )].sort();
	    const res = {
	      annotation,
	      group,
	      order,
	      tags,
	      tokens,
	      unicode: emoji,
	      version
	    };
	    if (emoticon) {
	      res.emoticon = emoticon;
	    }
	    if (shortcodes) {
	      res.shortcodes = shortcodes;
	    }
	    if (skins) {
	      res.skinTones = [];
	      res.skinUnicodes = [];
	      res.skinVersions = [];
	      for (const { tone, emoji, version } of skins) {
	        res.skinTones.push(tone);
	        res.skinUnicodes.push(emoji);
	        res.skinVersions.push(version);
	      }
	    }
	    return res
	  });
	  return res
	}

	// helper functions that help compress the code better

	function callStore (store, method, key, cb) {
	  store[method](key).onsuccess = e => (cb && cb(e.target.result));
	}

	function getIDB (store, key, cb) {
	  callStore(store, 'get', key, cb);
	}

	function getAllIDB (store, key, cb) {
	  callStore(store, 'getAll', key, cb);
	}

	function commit (txn) {
	  /* istanbul ignore else */
	  if (txn.commit) {
	    txn.commit();
	  }
	}

	// like lodash's minBy
	function minBy (array, func) {
	  let minItem = array[0];
	  for (let i = 1; i < array.length; i++) {
	    const item = array[i];
	    if (func(minItem) > func(item)) {
	      minItem = item;
	    }
	  }
	  return minItem
	}

	// return an array of results representing all items that are found in each one of the arrays
	//

	function findCommonMembers (arrays, uniqByFunc) {
	  const shortestArray = minBy(arrays, _ => _.length);
	  const results = [];
	  for (const item of shortestArray) {
	    // if this item is included in every array in the intermediate results, add it to the final results
	    if (!arrays.some(array => array.findIndex(_ => uniqByFunc(_) === uniqByFunc(item)) === -1)) {
	      results.push(item);
	    }
	  }
	  return results
	}

	async function isEmpty (db) {
	  return !(await get(db, STORE_KEYVALUE, KEY_URL))
	}

	async function hasData (db, url, eTag) {
	  const [oldETag, oldUrl] = await Promise.all([KEY_ETAG, KEY_URL]
	    .map(key => get(db, STORE_KEYVALUE, key)));
	  return (oldETag === eTag && oldUrl === url)
	}

	async function doFullDatabaseScanForSingleResult (db, predicate) {
	  // This batching algorithm is just a perf improvement over a basic
	  // cursor. The BATCH_SIZE is an estimate of what would give the best
	  // perf for doing a full DB scan (worst case).
	  //
	  // Mini-benchmark for determining the best batch size:
	  //
	  // PERF=1 pnpm build:rollup && pnpm test:adhoc
	  //
	  // (async () => {
	  //   performance.mark('start')
	  //   await $('emoji-picker').database.getEmojiByShortcode('doesnotexist')
	  //   performance.measure('total', 'start')
	  //   console.log(performance.getEntriesByName('total').slice(-1)[0].duration)
	  // })()
	  const BATCH_SIZE = 50; // Typically around 150ms for 6x slowdown in Chrome for above benchmark
	  return dbPromise(db, STORE_EMOJI, MODE_READONLY, (emojiStore, txn, cb) => {
	    let lastKey;

	    const processNextBatch = () => {
	      emojiStore.getAll(lastKey && IDBKeyRange.lowerBound(lastKey, true), BATCH_SIZE).onsuccess = e => {
	        const results = e.target.result;
	        for (const result of results) {
	          lastKey = result.unicode;
	          if (predicate(result)) {
	            return cb(result)
	          }
	        }
	        if (results.length < BATCH_SIZE) {
	          return cb()
	        }
	        processNextBatch();
	      };
	    };
	    processNextBatch();
	  })
	}

	async function loadData (db, emojiData, url, eTag) {
	  try {
	    const transformedData = transformEmojiData(emojiData);
	    await dbPromise(db, [STORE_EMOJI, STORE_KEYVALUE], MODE_READWRITE, ([emojiStore, metaStore], txn) => {
	      let oldETag;
	      let oldUrl;
	      let todo = 0;

	      function checkFetched () {
	        if (++todo === 2) { // 2 requests made
	          onFetched();
	        }
	      }

	      function onFetched () {
	        if (oldETag === eTag && oldUrl === url) {
	          // check again within the transaction to guard against concurrency, e.g. multiple browser tabs
	          return
	        }
	        // delete old data
	        emojiStore.clear();
	        // insert new data
	        for (const data of transformedData) {
	          emojiStore.put(data);
	        }
	        metaStore.put(eTag, KEY_ETAG);
	        metaStore.put(url, KEY_URL);
	        commit(txn);
	      }

	      getIDB(metaStore, KEY_ETAG, result => {
	        oldETag = result;
	        checkFetched();
	      });

	      getIDB(metaStore, KEY_URL, result => {
	        oldUrl = result;
	        checkFetched();
	      });
	    });
	  } finally {
	  }
	}

	async function getEmojiByGroup (db, group) {
	  return dbPromise(db, STORE_EMOJI, MODE_READONLY, (emojiStore, txn, cb) => {
	    const range = IDBKeyRange.bound([group, 0], [group + 1, 0], false, true);
	    getAllIDB(emojiStore.index(INDEX_GROUP_AND_ORDER), range, cb);
	  })
	}

	async function getEmojiBySearchQuery (db, query) {
	  const tokens = normalizeTokens(extractTokens(query));

	  if (!tokens.length) {
	    return []
	  }

	  return dbPromise(db, STORE_EMOJI, MODE_READONLY, (emojiStore, txn, cb) => {
	    // get all results that contain all tokens (i.e. an AND query)
	    const intermediateResults = [];

	    const checkDone = () => {
	      if (intermediateResults.length === tokens.length) {
	        onDone();
	      }
	    };

	    const onDone = () => {
	      const results = findCommonMembers(intermediateResults, _ => _.unicode);
	      cb(results.sort((a, b) => a.order < b.order ? -1 : 1));
	    };

	    for (let i = 0; i < tokens.length; i++) {
	      const token = tokens[i];
	      const range = i === tokens.length - 1
	        ? IDBKeyRange.bound(token, token + '\uffff', false, true) // treat last token as a prefix search
	        : IDBKeyRange.only(token); // treat all other tokens as an exact match
	      getAllIDB(emojiStore.index(INDEX_TOKENS), range, result => {
	        intermediateResults.push(result);
	        checkDone();
	      });
	    }
	  })
	}

	// This could have been implemented as an IDB index on shortcodes, but it seemed wasteful to do that
	// when we can already query by tokens and this will give us what we're looking for 99.9% of the time
	async function getEmojiByShortcode (db, shortcode) {
	  const emojis = await getEmojiBySearchQuery(db, shortcode);

	  // In very rare cases (e.g. the shortcode "v" as in "v for victory"), we cannot search because
	  // there are no usable tokens (too short in this case). In that case, we have to do an inefficient
	  // full-database scan, which I believe is an acceptable tradeoff for not having to have an extra
	  // index on shortcodes.

	  if (!emojis.length) {
	    const predicate = _ => ((_.shortcodes || []).includes(shortcode.toLowerCase()));
	    return (await doFullDatabaseScanForSingleResult(db, predicate)) || null
	  }

	  return emojis.filter(_ => {
	    const lowerShortcodes = (_.shortcodes || []).map(_ => _.toLowerCase());
	    return lowerShortcodes.includes(shortcode.toLowerCase())
	  })[0] || null
	}

	async function getEmojiByUnicode (db, unicode) {
	  return dbPromise(db, STORE_EMOJI, MODE_READONLY, (emojiStore, txn, cb) => (
	    getIDB(emojiStore, unicode, result => {
	      if (result) {
	        return cb(result)
	      }
	      getIDB(emojiStore.index(INDEX_SKIN_UNICODE), unicode, result => cb(result || null));
	    })
	  ))
	}

	function get (db, storeName, key) {
	  return dbPromise(db, storeName, MODE_READONLY, (store, txn, cb) => (
	    getIDB(store, key, cb)
	  ))
	}

	function set (db, storeName, key, value) {
	  return dbPromise(db, storeName, MODE_READWRITE, (store, txn) => {
	    store.put(value, key);
	    commit(txn);
	  })
	}

	function incrementFavoriteEmojiCount (db, unicode) {
	  return dbPromise(db, STORE_FAVORITES, MODE_READWRITE, (store, txn) => (
	    getIDB(store, unicode, result => {
	      store.put((result || 0) + 1, unicode);
	      commit(txn);
	    })
	  ))
	}

	function getTopFavoriteEmoji (db, customEmojiIndex, limit) {
	  if (limit === 0) {
	    return []
	  }
	  return dbPromise(db, [STORE_FAVORITES, STORE_EMOJI], MODE_READONLY, ([favoritesStore, emojiStore], txn, cb) => {
	    const results = [];
	    favoritesStore.index(INDEX_COUNT).openCursor(undefined, 'prev').onsuccess = e => {
	      const cursor = e.target.result;
	      if (!cursor) { // no more results
	        return cb(results)
	      }

	      function addResult (result) {
	        results.push(result);
	        if (results.length === limit) {
	          return cb(results) // done, reached the limit
	        }
	        cursor.continue();
	      }

	      const unicodeOrName = cursor.primaryKey;
	      const custom = customEmojiIndex.byName(unicodeOrName);
	      if (custom) {
	        return addResult(custom)
	      }
	      // This could be done in parallel (i.e. make the cursor and the get()s parallelized),
	      // but my testing suggests it's not actually faster.
	      getIDB(emojiStore, unicodeOrName, emoji => {
	        if (emoji) {
	          return addResult(emoji)
	        }
	        // emoji not found somehow, ignore (may happen if custom emoji change)
	        cursor.continue();
	      });
	    };
	  })
	}

	// trie data structure for prefix searches
	// loosely based on https://github.com/nolanlawson/substring-trie

	const CODA_MARKER = ''; // marks the end of the string

	function trie (arr, itemToTokens) {
	  const map = new Map();
	  for (const item of arr) {
	    const tokens = itemToTokens(item);
	    for (const token of tokens) {
	      let currentMap = map;
	      for (let i = 0; i < token.length; i++) {
	        const char = token.charAt(i);
	        let nextMap = currentMap.get(char);
	        if (!nextMap) {
	          nextMap = new Map();
	          currentMap.set(char, nextMap);
	        }
	        currentMap = nextMap;
	      }
	      let valuesAtCoda = currentMap.get(CODA_MARKER);
	      if (!valuesAtCoda) {
	        valuesAtCoda = [];
	        currentMap.set(CODA_MARKER, valuesAtCoda);
	      }
	      valuesAtCoda.push(item);
	    }
	  }

	  const search = (query, exact) => {
	    let currentMap = map;
	    for (let i = 0; i < query.length; i++) {
	      const char = query.charAt(i);
	      const nextMap = currentMap.get(char);
	      if (nextMap) {
	        currentMap = nextMap;
	      } else {
	        return []
	      }
	    }

	    if (exact) {
	      const results = currentMap.get(CODA_MARKER);
	      return results || []
	    }

	    const results = [];
	    // traverse
	    const queue = [currentMap];
	    while (queue.length) {
	      const currentMap = queue.shift();
	      const entriesSortedByKey = [...currentMap.entries()].sort((a, b) => a[0] < b[0] ? -1 : 1);
	      for (const [key, value] of entriesSortedByKey) {
	        if (key === CODA_MARKER) { // CODA_MARKER always comes first; it's the empty string
	          results.push(...value);
	        } else {
	          queue.push(value);
	        }
	      }
	    }
	    return results
	  };

	  return search
	}

	const requiredKeys$1 = [
	  'name',
	  'url'
	];

	function assertCustomEmojis (customEmojis) {
	  const isArray = customEmojis && Array.isArray(customEmojis);
	  const firstItemIsFaulty = isArray &&
	    customEmojis.length &&
	    (!customEmojis[0] || requiredKeys$1.some(key => !(key in customEmojis[0])));
	  if (!isArray || firstItemIsFaulty) {
	    throw new Error('Custom emojis are in the wrong format')
	  }
	}

	function customEmojiIndex (customEmojis) {
	  assertCustomEmojis(customEmojis);

	  const sortByName = (a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;

	  //
	  // all()
	  //
	  const all = customEmojis.sort(sortByName);

	  //
	  // search()
	  //
	  const emojiToTokens = emoji => {
	    const set = new Set();
	    if (emoji.shortcodes) {
	      for (const shortcode of emoji.shortcodes) {
	        for (const token of extractTokens(shortcode)) {
	          set.add(token);
	        }
	      }
	    }
	    return set
	  };
	  const searchTrie = trie(customEmojis, emojiToTokens);
	  const searchByExactMatch = _ => searchTrie(_, true);
	  const searchByPrefix = _ => searchTrie(_, false);

	  // Search by query for custom emoji. Similar to how we do this in IDB, the last token
	  // is treated as a prefix search, but every other one is treated as an exact match.
	  // Then we AND the results together
	  const search = query => {
	    const tokens = extractTokens(query);
	    const intermediateResults = tokens.map((token, i) => (
	      (i < tokens.length - 1 ? searchByExactMatch : searchByPrefix)(token)
	    ));
	    return findCommonMembers(intermediateResults, _ => _.name).sort(sortByName)
	  };

	  //
	  // byShortcode, byName
	  //
	  const shortcodeToEmoji = new Map();
	  const nameToEmoji = new Map();
	  for (const customEmoji of customEmojis) {
	    nameToEmoji.set(customEmoji.name.toLowerCase(), customEmoji);
	    for (const shortcode of (customEmoji.shortcodes || [])) {
	      shortcodeToEmoji.set(shortcode.toLowerCase(), customEmoji);
	    }
	  }

	  const byShortcode = shortcode => shortcodeToEmoji.get(shortcode.toLowerCase());
	  const byName = name => nameToEmoji.get(name.toLowerCase());

	  return {
	    all,
	    search,
	    byShortcode,
	    byName
	  }
	}

	const isFirefoxContentScript = typeof wrappedJSObject !== 'undefined';

	// remove some internal implementation details, i.e. the "tokens" array on the emoji object
	// essentially, convert the emoji from the version stored in IDB to the version used in-memory
	function cleanEmoji (emoji) {
	  if (!emoji) {
	    return emoji
	  }
	  // if inside a Firefox content script, need to clone the emoji object to prevent Firefox from complaining about
	  // cross-origin object. See: https://github.com/nolanlawson/emoji-picker-element/issues/356
	  /* istanbul ignore if */
	  if (isFirefoxContentScript) {
	    emoji = structuredClone(emoji);
	  }
	  delete emoji.tokens;
	  if (emoji.skinTones) {
	    const len = emoji.skinTones.length;
	    emoji.skins = Array(len);
	    for (let i = 0; i < len; i++) {
	      emoji.skins[i] = {
	        tone: emoji.skinTones[i],
	        unicode: emoji.skinUnicodes[i],
	        version: emoji.skinVersions[i]
	      };
	    }
	    delete emoji.skinTones;
	    delete emoji.skinUnicodes;
	    delete emoji.skinVersions;
	  }
	  return emoji
	}

	function warnETag (eTag) {
	  if (!eTag) {
	    console.warn('emoji-picker-element is more efficient if the dataSource server exposes an ETag header.');
	  }
	}

	const requiredKeys = [
	  'annotation',
	  'emoji',
	  'group',
	  'order',
	  'version'
	];

	function assertEmojiData (emojiData) {
	  if (!emojiData ||
	    !Array.isArray(emojiData) ||
	    !emojiData[0] ||
	    (typeof emojiData[0] !== 'object') ||
	    requiredKeys.some(key => (!(key in emojiData[0])))) {
	    throw new Error('Emoji data is in the wrong format')
	  }
	}

	function assertStatus (response, dataSource) {
	  if (Math.floor(response.status / 100) !== 2) {
	    throw new Error('Failed to fetch: ' + dataSource + ':  ' + response.status)
	  }
	}

	async function getETag (dataSource) {
	  const response = await fetch(dataSource, { method: 'HEAD' });
	  assertStatus(response, dataSource);
	  const eTag = response.headers.get('etag');
	  warnETag(eTag);
	  return eTag
	}

	async function getETagAndData (dataSource) {
	  const response = await fetch(dataSource);
	  assertStatus(response, dataSource);
	  const eTag = response.headers.get('etag');
	  warnETag(eTag);
	  const emojiData = await response.json();
	  assertEmojiData(emojiData);
	  return [eTag, emojiData]
	}

	// TODO: including these in blob-util.ts causes typedoc to generate docs for them,
	// even with --excludePrivate ¯\_(ツ)_/¯
	/** @private */
	/**
	 * Convert an `ArrayBuffer` to a binary string.
	 *
	 * Example:
	 *
	 * ```js
	 * var myString = blobUtil.arrayBufferToBinaryString(arrayBuff)
	 * ```
	 *
	 * @param buffer - array buffer
	 * @returns binary string
	 */
	function arrayBufferToBinaryString(buffer) {
	    var binary = '';
	    var bytes = new Uint8Array(buffer);
	    var length = bytes.byteLength;
	    var i = -1;
	    while (++i < length) {
	        binary += String.fromCharCode(bytes[i]);
	    }
	    return binary;
	}
	/**
	 * Convert a binary string to an `ArrayBuffer`.
	 *
	 * ```js
	 * var myBuffer = blobUtil.binaryStringToArrayBuffer(binaryString)
	 * ```
	 *
	 * @param binary - binary string
	 * @returns array buffer
	 */
	function binaryStringToArrayBuffer(binary) {
	    var length = binary.length;
	    var buf = new ArrayBuffer(length);
	    var arr = new Uint8Array(buf);
	    var i = -1;
	    while (++i < length) {
	        arr[i] = binary.charCodeAt(i);
	    }
	    return buf;
	}

	// generate a checksum based on the stringified JSON
	async function jsonChecksum (object) {
	  const inString = JSON.stringify(object);
	  let inBuffer = binaryStringToArrayBuffer(inString);

	  // this does not need to be cryptographically secure, SHA-1 is fine
	  const outBuffer = await crypto.subtle.digest('SHA-1', inBuffer);
	  const outBinString = arrayBufferToBinaryString(outBuffer);
	  const res = btoa(outBinString);
	  return res
	}

	async function doCheckForUpdates (db, dataSource) {
	  // just do a simple HEAD request first to see if the eTags match
	  let emojiData;
	  let eTag = await getETag(dataSource);
	  if (!eTag) { // work around lack of ETag/Access-Control-Expose-Headers
	    const eTagAndData = await getETagAndData(dataSource);
	    eTag = eTagAndData[0];
	    emojiData = eTagAndData[1];
	    if (!eTag) {
	      eTag = await jsonChecksum(emojiData);
	    }
	  }
	  if (await hasData(db, dataSource, eTag)) ; else {
	    if (!emojiData) {
	      const eTagAndData = await getETagAndData(dataSource);
	      emojiData = eTagAndData[1];
	    }
	    await loadData(db, emojiData, dataSource, eTag);
	  }
	}

	async function loadDataForFirstTime (db, dataSource) {
	  let [eTag, emojiData] = await getETagAndData(dataSource);
	  if (!eTag) {
	    // Handle lack of support for ETag or Access-Control-Expose-Headers
	    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers#Browser_compatibility
	    eTag = await jsonChecksum(emojiData);
	  }

	  await loadData(db, emojiData, dataSource, eTag);
	}

	async function checkForUpdates (db, dataSource) {
	  try {
	    await doCheckForUpdates(db, dataSource);
	  } catch (err) {
	    // Checking for updates is not a critical operation, and it can fail if e.g. the picker is quickly removed and
	    // re-added to the DOM. In those cases, we may get an IndexedDB InvalidStateError because we are attempting to close
	    // the database connection, possibly while another request is inflight. So there's effectively no way to prevent
	    // InvalidStateErrors unless we were to carefully sequence our IndexedDB operations. Much more simply, we can just
	    // ignore IndexedDB InvalidStateErrors here and give users one less useless error message in their console.
	    if (err.name !== 'InvalidStateError') {
	      throw err
	    }
	  }
	}

	class Database {
	  constructor ({ dataSource = DEFAULT_DATA_SOURCE$1, locale = DEFAULT_LOCALE$1, customEmoji = [] } = {}) {
	    this.dataSource = dataSource;
	    this.locale = locale;
	    this._dbName = `emoji-picker-element-${this.locale}`;
	    this._db = undefined;
	    this._lazyUpdate = undefined;
	    this._custom = customEmojiIndex(customEmoji);

	    this._clear = this._clear.bind(this);
	    this._ready = this._init();
	  }

	  async _init () {
	    const db = this._db = await openDatabase(this._dbName);

	    addOnCloseListener(this._dbName, this._clear);
	    const dataSource = this.dataSource;
	    const empty = await isEmpty(db);

	    if (empty) {
	      await loadDataForFirstTime(db, dataSource);
	    } else { // offline-first - do an update asynchronously
	      this._lazyUpdate = checkForUpdates(db, dataSource);
	    }
	  }

	  async ready () {
	    const checkReady = async () => {
	      if (!this._ready) {
	        this._ready = this._init();
	      }
	      return this._ready
	    };
	    await checkReady();
	    // There's a possibility of a race condition where the element gets added, removed, and then added again
	    // with a particular timing, which would set the _db to undefined.
	    // We *could* do a while loop here, but that seems excessive and could lead to an infinite loop.
	    if (!this._db) {
	      await checkReady();
	    }
	  }

	  async getEmojiByGroup (group) {
	    assertNumber(group);
	    await this.ready();
	    return uniqEmoji(await getEmojiByGroup(this._db, group)).map(cleanEmoji)
	  }

	  async getEmojiBySearchQuery (query) {
	    assertNonEmptyString(query);
	    await this.ready();
	    const customs = this._custom.search(query);
	    const natives = uniqEmoji(await getEmojiBySearchQuery(this._db, query)).map(cleanEmoji);
	    return [
	      ...customs,
	      ...natives
	    ]
	  }

	  async getEmojiByShortcode (shortcode) {
	    assertNonEmptyString(shortcode);
	    await this.ready();
	    const custom = this._custom.byShortcode(shortcode);
	    if (custom) {
	      return custom
	    }
	    return cleanEmoji(await getEmojiByShortcode(this._db, shortcode))
	  }

	  async getEmojiByUnicodeOrName (unicodeOrName) {
	    assertNonEmptyString(unicodeOrName);
	    await this.ready();
	    const custom = this._custom.byName(unicodeOrName);
	    if (custom) {
	      return custom
	    }
	    return cleanEmoji(await getEmojiByUnicode(this._db, unicodeOrName))
	  }

	  async getPreferredSkinTone () {
	    await this.ready();
	    return (await get(this._db, STORE_KEYVALUE, KEY_PREFERRED_SKINTONE)) || 0
	  }

	  async setPreferredSkinTone (skinTone) {
	    assertNumber(skinTone);
	    await this.ready();
	    return set(this._db, STORE_KEYVALUE, KEY_PREFERRED_SKINTONE, skinTone)
	  }

	  async incrementFavoriteEmojiCount (unicodeOrName) {
	    assertNonEmptyString(unicodeOrName);
	    await this.ready();
	    return incrementFavoriteEmojiCount(this._db, unicodeOrName)
	  }

	  async getTopFavoriteEmoji (limit) {
	    assertNumber(limit);
	    await this.ready();
	    return (await getTopFavoriteEmoji(this._db, this._custom, limit)).map(cleanEmoji)
	  }

	  set customEmoji (customEmojis) {
	    this._custom = customEmojiIndex(customEmojis);
	  }

	  get customEmoji () {
	    return this._custom.all
	  }

	  async _shutdown () {
	    await this.ready(); // reopen if we've already been closed/deleted
	    try {
	      await this._lazyUpdate; // allow any lazy updates to process before closing/deleting
	    } catch (err) { /* ignore network errors (offline-first) */ }
	  }

	  // clear references to IDB, e.g. during a close event
	  _clear () {
	    // We don't need to call removeEventListener or remove the manual "close" listeners.
	    // The memory leak tests prove this is unnecessary. It's because:
	    // 1) IDBDatabases that can no longer fire "close" automatically have listeners GCed
	    // 2) we clear the manual close listeners in databaseLifecycle.js.
	    this._db = this._ready = this._lazyUpdate = undefined;
	  }

	  async close () {
	    await this._shutdown();
	    await closeDatabase(this._dbName);
	  }

	  async delete () {
	    await this._shutdown();
	    await deleteDatabase(this._dbName);
	  }
	}

	// via https://unpkg.com/browse/emojibase-data@6.0.0/meta/groups.json
	const allGroups = [
	  [-1, '✨', 'custom'],
	  [0, '😀', 'smileys-emotion'],
	  [1, '👋', 'people-body'],
	  [3, '🐱', 'animals-nature'],
	  [4, '🍎', 'food-drink'],
	  [5, '🏠️', 'travel-places'],
	  [6, '⚽', 'activities'],
	  [7, '📝', 'objects'],
	  [8, '⛔️', 'symbols'],
	  [9, '🏁', 'flags']
	].map(([id, emoji, name]) => ({ id, emoji, name }));

	const groups = allGroups.slice(1);

	const MIN_SEARCH_TEXT_LENGTH = 2;
	const NUM_SKIN_TONES = 6;

	/* istanbul ignore next */
	const rIC = typeof requestIdleCallback === 'function' ? requestIdleCallback : setTimeout;

	// check for ZWJ (zero width joiner) character
	function hasZwj (emoji) {
	  return emoji.unicode.includes('\u200d')
	}

	// Find one good representative emoji from each version to test by checking its color.
	// Ideally it should have color in the center. For some inspiration, see:
	// https://about.gitlab.com/blog/2018/05/30/journey-in-native-unicode-emoji/
	//
	// Note that for certain versions (12.1, 13.1), there is no point in testing them explicitly, because
	// all the emoji from this version are compound-emoji from previous versions. So they would pass a color
	// test, even in browsers that display them as double emoji. (E.g. "face in clouds" might render as
	// "face without mouth" plus "fog".) These emoji can only be filtered using the width test,
	// which happens in checkZwjSupport.js.
	const versionsAndTestEmoji = {
	  '🫪': 17, // distorted face
	  '🫩': 16, // face with bags under eyes
	  '🫨': 15.1, // shaking head, technically from v15 but see note above
	  '🫠': 14,
	  '🥲': 13.1, // smiling face with tear, technically from v13 but see note above
	  '🥻': 12.1, // sari, technically from v12 but see note above
	  '🥰': 11,
	  '🤩': 5,
	  '👱‍♀️': 4,
	  '🤣': 3,
	  '👁️‍🗨️': 2,
	  '😀': 1,
	  '😐️': 0.7,
	  '😃': 0.6
	};

	const TIMEOUT_BEFORE_LOADING_MESSAGE = 1000; // 1 second
	const DEFAULT_SKIN_TONE_EMOJI = '🖐️';
	const DEFAULT_NUM_COLUMNS = 8;

	// Based on https://fivethirtyeight.com/features/the-100-most-used-emojis/ and
	// https://blog.emojipedia.org/facebook-reveals-most-and-least-used-emojis/ with
	// a bit of my own curation. (E.g. avoid the "OK" gesture because of connotations:
	// https://emojipedia.org/ok-hand/)
	const MOST_COMMONLY_USED_EMOJI = [
	  '😊',
	  '😒',
	  '❤️',
	  '👍️',
	  '😍',
	  '😂',
	  '😭',
	  '☺️',
	  '😔',
	  '😩',
	  '😏',
	  '💕',
	  '🙌',
	  '😘'
	];

	// It's important to list Twemoji Mozilla before everything else, because Mozilla bundles their
	// own font on some platforms (notably Windows and Linux as of this writing). Typically, Mozilla
	// updates faster than the underlying OS, and we don't want to render older emoji in one font and
	// newer emoji in another font:
	// https://github.com/nolanlawson/emoji-picker-element/pull/268#issuecomment-1073347283
	const FONT_FAMILY = '"Twemoji Mozilla","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",' +
	  '"Noto Color Emoji","EmojiOne Color","Android Emoji",sans-serif';

	/* istanbul ignore next */
	const DEFAULT_CATEGORY_SORTING = (a, b) => a < b ? -1 : a > b ? 1 : 0;

	// Test if an emoji is supported by rendering it to canvas and checking that the color is not black
	// See https://about.gitlab.com/blog/2018/05/30/journey-in-native-unicode-emoji/
	// and https://www.npmjs.com/package/if-emoji for inspiration
	// This implementation is largely borrowed from if-emoji, adding the font-family


	const getTextFeature = (text, color) => {
	  const canvas = document.createElement('canvas');
	  canvas.width = canvas.height = 1;

	  const ctx = canvas.getContext('2d', {
	    // Improves the performance of `getImageData()`
	    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getContextAttributes#willreadfrequently
	    willReadFrequently: true
	  });
	  ctx.textBaseline = 'top';
	  ctx.font = `100px ${FONT_FAMILY}`;
	  ctx.fillStyle = color;
	  ctx.scale(0.01, 0.01);
	  ctx.fillText(text, 0, 0);

	  return ctx.getImageData(0, 0, 1, 1).data
	};

	const compareFeatures = (feature1, feature2) => {
	  const feature1Str = [...feature1].join(',');
	  const feature2Str = [...feature2].join(',');
	  // This is RGBA, so for 0,0,0, we are checking that the first RGB is not all zeroes.
	  // Most of the time when unsupported this is 0,0,0,0, but on Chrome on Mac it is
	  // 0,0,0,61 - there is a transparency here.
	  return feature1Str === feature2Str && !feature1Str.startsWith('0,0,0,')
	};

	function testColorEmojiSupported (text) {
	  // Render white and black and then compare them to each other and ensure they're the same
	  // color, and neither one is black. This shows that the emoji was rendered in color.
	  const feature1 = getTextFeature(text, '#000');
	  const feature2 = getTextFeature(text, '#fff');
	  return feature1 && feature2 && compareFeatures(feature1, feature2)
	}

	// rather than check every emoji ever, which would be expensive, just check some representatives from the
	// different emoji releases to determine what the font supports

	function determineEmojiSupportLevel () {
	  const entries = Object.entries(versionsAndTestEmoji);
	  try {
	    // start with latest emoji and work backwards
	    for (const [emoji, version] of entries) {
	      if (testColorEmojiSupported(emoji)) {
	        return version
	      }
	    }
	  } catch (e) { // canvas error
	  } finally {
	  }
	  // In case of an error, be generous and just assume all emoji are supported (e.g. for canvas errors
	  // due to anti-fingerprinting add-ons). Better to show some gray boxes than nothing at all.
	  return entries[0][1] // first one in the list is the most recent version
	}

	// Check which emojis we know for sure aren't supported, based on Unicode version level
	let promise;
	const detectEmojiSupportLevel = () => {
	  if (!promise) {
	    // Delay so it can run while the IDB database is being created by the browser (on another thread).
	    // This helps especially with first load – we want to start pre-populating the database on the main thread,
	    // and then wait for IDB to commit everything, and while waiting we run this check.
	    promise = new Promise(resolve => (
	      rIC(() => (
	        resolve(determineEmojiSupportLevel()) // delay so ideally this can run while IDB is first populating
	      ))
	    ));
	  }
	  return promise
	};
	// determine which emojis containing ZWJ (zero width joiner) characters
	// are supported (rendered as one glyph) rather than unsupported (rendered as two or more glyphs)
	const supportedZwjEmojis = new Map();

	const VARIATION_SELECTOR = '\ufe0f';
	const SKINTONE_MODIFIER = '\ud83c';
	const ZWJ = '\u200d';
	const LIGHT_SKIN_TONE = 0x1F3FB;
	const LIGHT_SKIN_TONE_MODIFIER = 0xdffb;

	// TODO: this is a naive implementation, we can improve it later
	// It's only used for the skintone picker, so as long as people don't customize with
	// really exotic emoji then it should work fine
	function applySkinTone (str, skinTone) {
	  if (skinTone === 0) {
	    return str
	  }
	  const zwjIndex = str.indexOf(ZWJ);
	  if (zwjIndex !== -1) {
	    return str.substring(0, zwjIndex) +
	      String.fromCodePoint(LIGHT_SKIN_TONE + skinTone - 1) +
	      str.substring(zwjIndex)
	  }
	  if (str.endsWith(VARIATION_SELECTOR)) {
	    str = str.substring(0, str.length - 1);
	  }
	  return str + SKINTONE_MODIFIER + String.fromCodePoint(LIGHT_SKIN_TONE_MODIFIER + skinTone - 1)
	}

	function halt (event) {
	  event.preventDefault();
	  event.stopPropagation();
	}

	// Implementation left/right or up/down navigation, circling back when you
	// reach the start/end of the list
	function incrementOrDecrement (decrement, val, arr) {
	  val += (decrement ? -1 : 1);
	  if (val < 0) {
	    val = arr.length - 1;
	  } else if (val >= arr.length) {
	    val = 0;
	  }
	  return val
	}

	// like lodash's uniqBy but much smaller
	function uniqBy (arr, func) {
	  const set = new Set();
	  const res = [];
	  for (const item of arr) {
	    const key = func(item);
	    if (!set.has(key)) {
	      set.add(key);
	      res.push(item);
	    }
	  }
	  return res
	}

	// We don't need all the data on every emoji, and there are specific things we need
	// for the UI, so build a "view model" from the emoji object we got from the database

	function summarizeEmojisForUI (emojis, emojiSupportLevel) {
	  const toSimpleSkinsMap = skins => {
	    const res = {};
	    for (const skin of skins) {
	      // ignore arrays like [1, 2] with multiple skin tones
	      // also ignore variants that are in an unsupported emoji version
	      // (these do exist - variants from a different version than their base emoji)
	      if (typeof skin.tone === 'number' && skin.version <= emojiSupportLevel) {
	        res[skin.tone] = skin.unicode;
	      }
	    }
	    return res
	  };

	  return emojis.map(({ unicode, skins, shortcodes, url, name, category, annotation }) => ({
	    unicode,
	    name,
	    shortcodes,
	    url,
	    category,
	    annotation,
	    id: unicode || name,
	    skins: skins && toSimpleSkinsMap(skins)
	  }))
	}

	// import rAF from one place so that the bundle size is a bit smaller
	const rAF = requestAnimationFrame;

	// "Svelte action"-like utility to detect layout changes via ResizeObserver.
	// If ResizeObserver is unsupported, we just use rAF once and don't bother to update.


	let resizeObserverSupported = typeof ResizeObserver === 'function';

	function resizeObserverAction (node, abortSignal, onUpdate) {
	  let resizeObserver;
	  if (resizeObserverSupported) {
	    resizeObserver = new ResizeObserver(onUpdate);
	    resizeObserver.observe(node);
	  } else { // just run once, don't bother trying to track it
	    rAF(onUpdate);
	  }

	  // cleanup function (called on destroy)
	  abortSignal.addEventListener('abort', () => {
	    if (resizeObserver) {
	      resizeObserver.disconnect();
	    }
	  });
	}

	// get the width of the text inside of a DOM node, via https://stackoverflow.com/a/59525891/680742
	function calculateTextWidth (node) {
	  // skip running this in jest/vitest because we don't need to check for emoji support in that environment
	  /* istanbul ignore else */
	  {
	    const range = document.createRange();
	    range.selectNode(node.firstChild);
	    return range.getBoundingClientRect().width
	  }
	}

	const BASELINE_EMOJI = '😀';

	let baselineEmojiWidth;
	let fallbackNode;

	function calculateTextWidthWithFallback (unicode, domNode, baselineEmojiNode) {
	  const result = calculateTextWidth(domNode);
	  /* istanbul ignore if */
	  if (!result) {
	    // If result is 0 then very likely the emoji-picker has `display:none` or equivalent. In that case, we fall back to
	    // cloning the baseline emoji, putting that in the `document.body`, and measuring that instead. This is a perf hit,
	    // but it's better than mistakenly filtering emoji: https://github.com/nolanlawson/emoji-picker-element/issues/514
	    if (!fallbackNode) {
	      fallbackNode = baselineEmojiNode.cloneNode(true);
	      // We have to copy styles because we're copying from an element in the shadow DOM to the light DOM
	      // We can't use the shadow DOM because it's likely the entire picker is `display:none`
	      const styles = getComputedStyle(baselineEmojiNode);
	      // probably don't need display/align-items/justify-content but let's play it safe
	      for (const prop of ['font-family', 'line-height', 'width', 'height', 'font-size', 'display', 'align-items', 'justify-content']) {
	        // set `!important` just in case some global styles might try to overwrite this
	        fallbackNode.style.setProperty(prop, styles.getPropertyValue(prop), 'important');
	      }
	    }
	    try {
	      document.body.appendChild(fallbackNode);
	      fallbackNode.firstChild.nodeValue = unicode;
	      return calculateTextWidth(fallbackNode)
	    } finally {
	      // avoid actually rendering the test emoji
	      fallbackNode.remove();
	    }
	  }
	  return result
	}

	/**
	 * Check if the given emojis containing ZWJ characters are supported by the current browser (don't render
	 * as double characters) and return true if all are supported.
	 * @param zwjEmojisToCheck
	 * @param baselineEmojiNode
	 * @param emojiToDomNode
	 */
	function checkZwjSupport (zwjEmojisToCheck, baselineEmojiNode, emojiToDomNode) {
	  let allSupported = true;
	  for (const emoji of zwjEmojisToCheck) {
	    const domNode = emojiToDomNode(emoji);
	    // sanity check to make sure the node is defined properly
	    /* istanbul ignore if */
	    if (!domNode) {
	      // This is a race condition that can occur when the component is unmounted/remounted
	      // It doesn't really matter what we do here since the old context is not going to render anymore.
	      // Just bail out of emoji support detection and return `allSupported=true` since the rendering context is gone
	      continue
	    }
	    if (typeof baselineEmojiWidth === 'undefined') { // calculate the baseline emoji width only once
	      baselineEmojiWidth = calculateTextWidthWithFallback(BASELINE_EMOJI, baselineEmojiNode, baselineEmojiNode);
	    }
	    const emojiWidth = calculateTextWidthWithFallback(emoji.unicode, domNode, baselineEmojiNode);
	    // On Windows, some supported emoji are ~50% bigger than the baseline emoji, but what we really want to guard
	    // against are the ones that are 2x the size, because those are truly broken (person with red hair = person with
	    // floating red wig, black cat = cat with black square, polar bear = bear with snowflake, etc.)
	    // So here we set the threshold at 1.8 times the size of the baseline emoji.
	    const supported = emojiWidth / 1.8 < baselineEmojiWidth;
	    supportedZwjEmojis.set(emoji.unicode, supported);

	    if (!supported) {
	      allSupported = false;
	    }
	  }
	  return allSupported
	}

	// like lodash's uniq

	function uniq (arr) {
	  return uniqBy(arr, _ => _)
	}

	// Note we put this in its own function outside Picker.js to avoid Svelte doing an invalidation on the "setter" here.
	// At best the invalidation is useless, at worst it can cause infinite loops:
	// https://github.com/nolanlawson/emoji-picker-element/pull/180
	// https://github.com/sveltejs/svelte/issues/6521
	// Also note tabpanelElement can be null if the element is disconnected immediately after connected
	function resetScrollTopIfPossible (element) {
	  /* istanbul ignore else */
	  if (element) { // Makes me nervous not to have this `if` guard
	    element.scrollTop = 0;
	  }
	}

	function getFromMap (cache, key, func) {
	  let cached = cache.get(key);
	  if (!cached) {
	    cached = func();
	    cache.set(key, cached);
	  }
	  return cached
	}

	function toString (value) {
	  return '' + value
	}

	function parseTemplate (htmlString) {
	  const template = document.createElement('template');
	  template.innerHTML = htmlString;
	  return template
	}

	const parseCache = new WeakMap();
	const domInstancesCache = new WeakMap();
	// This needs to be a symbol because it needs to be different from any possible output of a key function
	const unkeyedSymbol = Symbol('un-keyed');

	// Not supported in Safari <=13
	const hasReplaceChildren = 'replaceChildren' in Element.prototype;
	function replaceChildren (parentNode, newChildren) {
	  /* istanbul ignore else */
	  if (hasReplaceChildren) {
	    parentNode.replaceChildren(...newChildren);
	  } else { // minimal polyfill for Element.prototype.replaceChildren
	    parentNode.innerHTML = '';
	    parentNode.append(...newChildren);
	  }
	}

	function doChildrenNeedRerender (parentNode, newChildren) {
	  let oldChild = parentNode.firstChild;
	  let oldChildrenCount = 0;
	  // iterate using firstChild/nextSibling because browsers use a linked list under the hood
	  while (oldChild) {
	    const newChild = newChildren[oldChildrenCount];
	    // check if the old child and new child are the same
	    if (newChild !== oldChild) {
	      return true
	    }
	    oldChild = oldChild.nextSibling;
	    oldChildrenCount++;
	  }
	  // if new children length is different from old, we must re-render
	  return oldChildrenCount !== newChildren.length
	}

	function patchChildren (newChildren, instanceBinding) {
	  const { targetNode } = instanceBinding;
	  let { targetParentNode } = instanceBinding;

	  let needsRerender = false;

	  if (targetParentNode) { // already rendered once
	    needsRerender = doChildrenNeedRerender(targetParentNode, newChildren);
	  } else { // first render of list
	    needsRerender = true;
	    instanceBinding.targetNode = undefined; // placeholder node not needed anymore, free memory
	    instanceBinding.targetParentNode = targetParentNode = targetNode.parentNode;
	  }
	  // avoid re-rendering list if the dom nodes are exactly the same before and after
	  if (needsRerender) {
	    replaceChildren(targetParentNode, newChildren);
	  }
	}

	function patch (expressions, instanceBindings) {
	  for (const instanceBinding of instanceBindings) {
	    const {
	      targetNode,
	      currentExpression,
	      binding: {
	        expressionIndex,
	        attributeName,
	        attributeValuePre,
	        attributeValuePost
	      }
	    } = instanceBinding;

	    const expression = expressions[expressionIndex];

	    if (currentExpression === expression) {
	      // no need to update, same as before
	      continue
	    }

	    instanceBinding.currentExpression = expression;

	    if (attributeName) { // attribute replacement
	      if (expression === null) {
	        // null is treated as a special case by the framework - we don't render an attribute at all in this case
	        targetNode.removeAttribute(attributeName);
	      } else {
	        // attribute value is not null; set a new attribute
	        const newValue = attributeValuePre + toString(expression) + attributeValuePost;
	        targetNode.setAttribute(attributeName, newValue);
	      }
	    } else { // text node / child element / children replacement
	      let newNode;
	      if (Array.isArray(expression)) { // array of DOM elements produced by tag template literals
	        patchChildren(expression, instanceBinding);
	      } else if (expression instanceof Element) { // html tag template returning a DOM element
	        newNode = expression;
	        targetNode.replaceWith(newNode);
	      } else { // primitive - string, number, etc
	        // nodeValue is faster than textContent supposedly https://www.youtube.com/watch?v=LY6y3HbDVmg
	        // note we may be replacing the value in a placeholder text node
	        targetNode.nodeValue = toString(expression);
	      }
	      if (newNode) {
	        instanceBinding.targetNode = newNode;
	      }
	    }
	  }
	}

	function parse (tokens) {
	  let htmlString = '';

	  let withinTag = false;
	  let withinAttribute = false;
	  let elementIndexCounter = -1; // depth-first traversal order

	  const elementsToBindings = new Map();
	  const elementIndexes = [];

	  let skipTokenChars = 0;
	  for (let i = 0, len = tokens.length; i < len; i++) {
	    const token = tokens[i];
	    htmlString += token.slice(skipTokenChars);

	    if (i === len - 1) {
	      break // no need to process characters - no more expressions to be found
	    }

	    for (let j = 0; j < token.length; j++) {
	      const char = token.charAt(j);
	      switch (char) {
	        case '<': {
	          const nextChar = token.charAt(j + 1);
	          if (nextChar === '/') { // closing tag
	            // leaving an element
	            elementIndexes.pop();
	          } else { // not a closing tag
	            withinTag = true;
	            elementIndexes.push(++elementIndexCounter);
	          }
	          break
	        }
	        case '>': {
	          withinTag = false;
	          withinAttribute = false;
	          break
	        }
	        case '=': {
	          withinAttribute = true;
	          break
	        }
	      }
	    }

	    const elementIndex = elementIndexes[elementIndexes.length - 1];
	    const bindings = getFromMap(elementsToBindings, elementIndex, () => []);

	    let attributeName;
	    let attributeValuePre;
	    let attributeValuePost;
	    if (withinAttribute) {
	      // I never use single-quotes for attribute values in HTML, so just support double-quotes or no-quotes
	      const attributePreMatch = /(\S+)="?([^"=]*)$/.exec(token);
	      attributeName = attributePreMatch[1];
	      attributeValuePre = attributePreMatch[2];
	      const attributePostMatch = /^([^">]*)("?)/.exec(tokens[i + 1]);
	      attributeValuePost = attributePostMatch[1];
	      // Optimization: remove the attribute itself, so we don't create a default attribute which is either empty or just
	      // the "pre" text, e.g. `<div foo>` or `<div foo="prefix">`. It will be replaced by the expression anyway.
	      htmlString = htmlString.slice(0, -1 * attributePreMatch[0].length);
	      skipTokenChars = attributePostMatch[0].length;
	    } else {
	      skipTokenChars = 0;
	    }

	    const binding = {
	      attributeName,
	      attributeValuePre,
	      attributeValuePost,
	      expressionIndex: i
	    };

	    bindings.push(binding);

	    if (!withinTag && !withinAttribute) {
	      // Add a placeholder text node, so we can find it later. Note we only support one dynamic child text node
	      htmlString += ' ';
	    }
	  }

	  const template = parseTemplate(htmlString);

	  return {
	    template,
	    elementsToBindings
	  }
	}

	function applyBindings (bindings, element, instanceBindings) {
	  for (let i = 0; i < bindings.length; i++) {
	    const binding = bindings[i];

	    const targetNode = binding.attributeName
	      ? element // attribute binding, just use the element itself
	      : element.firstChild; // not an attribute binding, so has a placeholder text node

	    const instanceBinding = {
	      binding,
	      targetNode,
	      targetParentNode: undefined,
	      currentExpression: undefined
	    };

	    instanceBindings.push(instanceBinding);
	  }
	}

	function traverseAndSetupBindings (rootElement, elementsToBindings) {
	  const instanceBindings = [];

	  let topLevelBindings;
	  if (elementsToBindings.size === 1 && (topLevelBindings = elementsToBindings.get(0))) {
	    // Optimization for the common case where there's only one element and one binding
	    // Skip creating a TreeWalker entirely and just handle the root DOM element
	    applyBindings(topLevelBindings, rootElement, instanceBindings);
	  } else {
	    // traverse dom
	    const treeWalker = document.createTreeWalker(rootElement, NodeFilter.SHOW_ELEMENT);

	    let element = rootElement;
	    let elementIndex = -1;
	    do {
	      const bindings = elementsToBindings.get(++elementIndex);
	      if (bindings) {
	        applyBindings(bindings, element, instanceBindings);
	      }
	    } while ((element = treeWalker.nextNode()))
	  }

	  return instanceBindings
	}

	function parseHtml (tokens) {
	  // All templates and bound expressions are unique per tokens array
	  const { template, elementsToBindings } = getFromMap(parseCache, tokens, () => parse(tokens));

	  // When we parseHtml, we always return a fresh DOM instance ready to be updated
	  const dom = template.cloneNode(true).content.firstElementChild;
	  const instanceBindings = traverseAndSetupBindings(dom, elementsToBindings);

	  return function updateDomInstance (expressions) {
	    patch(expressions, instanceBindings);
	    return dom
	  }
	}

	function createFramework (state) {
	  const domInstances = getFromMap(domInstancesCache, state, () => new Map());
	  let domInstanceCacheKey = unkeyedSymbol;

	  function html (tokens, ...expressions) {
	    // Each unique lexical usage of map() is considered unique due to the html`` tagged template call it makes,
	    // which has lexically unique tokens. The unkeyed symbol is just used for html`` usage outside of a map().
	    const domInstancesForTokens = getFromMap(domInstances, tokens, () => new Map());
	    const updateDomInstance = getFromMap(domInstancesForTokens, domInstanceCacheKey, () => parseHtml(tokens));

	    return updateDomInstance(expressions) // update with expressions
	  }

	  function map (array, callback, keyFunction) {
	    return array.map((item, index) => {
	      const originalCacheKey = domInstanceCacheKey;
	      domInstanceCacheKey = keyFunction(item);
	      try {
	        return callback(item, index)
	      } finally {
	        domInstanceCacheKey = originalCacheKey;
	      }
	    })
	  }

	  return { map, html }
	}

	function render (container, state, helpers, events, actions, refs, abortSignal, actionContext, firstRender) {
	  const { labelWithSkin, titleForEmoji, unicodeWithSkin } = helpers;
	  const { html, map } = createFramework(state);

	  function emojiList (emojis, searchMode, prefix) {
	    return map(emojis, (emoji, i) => {
	      return html`<button role="${searchMode ? 'option' : 'menuitem'}" aria-selected="${searchMode ? i === state.activeSearchItem : null}" aria-label="${labelWithSkin(emoji, state.currentSkinTone)}" title="${titleForEmoji(emoji)}" class="${
                'emoji' +
                (searchMode && i === state.activeSearchItem ? ' active' : '') +
                (emoji.unicode ? '' : ' custom-emoji')
              }" id="${`${prefix}-${emoji.id}`}" style="${emoji.unicode ? null : `--custom-emoji-background: url(${JSON.stringify(emoji.url)})`}">${
        emoji.unicode
          ? unicodeWithSkin(emoji, state.currentSkinTone)
          : ''
      }</button>`
	      // It's important for the cache key to be unique based on the prefix, because the framework caches based on the
	      // unique tokens + cache key, and the same emoji may be used in the tab as well as in the fav bar
	    }, emoji => `${prefix}-${emoji.id}`)
	  }

	  const section = () => {
	    return html`<section data-ref="rootElement" class="picker" aria-label="${state.i18n.regionLabel}" style="${state.pickerStyle || ''}"><div class="pad-top"></div><div class="search-row"><div class="search-wrapper"><input id="search" class="search" type="search" role="combobox" enterkeyhint="search" placeholder="${state.i18n.searchLabel}" autocapitalize="none" autocomplete="off" spellcheck="true" aria-expanded="${!!(state.searchMode && state.currentEmojis.length)}" aria-controls="search-results" aria-describedby="search-description" aria-autocomplete="list" aria-activedescendant="${state.activeSearchItemId ? `emo-${state.activeSearchItemId}` : null}" data-ref="searchElement" data-on-input="onSearchInput" data-on-keydown="onSearchKeydown"><label class="sr-only" for="search">${state.i18n.searchLabel}</label> <span id="search-description" class="sr-only">${state.i18n.searchDescription}</span></div><div class="skintone-button-wrapper ${state.skinTonePickerExpandedAfterAnimation ? 'expanded' : ''}"><button id="skintone-button" class="emoji ${state.skinTonePickerExpanded ? 'hide-focus' : ''}" aria-label="${state.skinToneButtonLabel}" title="${state.skinToneButtonLabel}" aria-describedby="skintone-description" aria-haspopup="listbox" aria-expanded="${state.skinTonePickerExpanded}" aria-controls="skintone-list" data-on-click="onClickSkinToneButton">${state.skinToneButtonText || ''}</button></div><span id="skintone-description" class="sr-only">${state.i18n.skinToneDescription}</span><div data-ref="skinToneDropdown" id="skintone-list" class="skintone-list hide-focus ${state.skinTonePickerExpanded ? '' : 'hidden no-animate'}" style="transform:translateY(${state.skinTonePickerExpanded ? 0 : 'calc(-1 * var(--num-skintones) * var(--total-emoji-size))'})" role="listbox" aria-label="${state.i18n.skinTonesLabel}" aria-activedescendant="skintone-${state.activeSkinTone}" aria-hidden="${!state.skinTonePickerExpanded}" tabIndex="-1" data-on-focusout="onSkinToneOptionsFocusOut" data-on-click="onSkinToneOptionsClick" data-on-keydown="onSkinToneOptionsKeydown" data-on-keyup="onSkinToneOptionsKeyup">${
    map(state.skinTones, (skinTone, i) => {
    return html`<div id="skintone-${i}" class="emoji ${i === state.activeSkinTone ? 'active' : ''}" aria-selected="${i === state.activeSkinTone}" role="option" title="${state.i18n.skinTones[i]}" aria-label="${state.i18n.skinTones[i]}">${skinTone}</div>`
    }, skinTone => skinTone)
        }</div></div><div class="nav" role="tablist" style="grid-template-columns:repeat(${state.groups.length},1fr)" aria-label="${state.i18n.categoriesLabel}" data-on-keydown="onNavKeydown" data-on-click="onNavClick">${
            map(state.groups, (group) => {
              return html`<button role="tab" class="nav-button" aria-controls="tab-${group.id}" aria-label="${state.i18n.categories[group.name]}" aria-selected="${!state.searchMode && state.currentGroup.id === group.id}" title="${state.i18n.categories[group.name]}" data-group-id="${group.id}"><div class="nav-emoji emoji">${group.emoji}</div></button>`
            }, group => group.id)
          }</div><div class="indicator-wrapper"><div class="indicator" style="transform:translateX(${(/* istanbul ignore next */ (state.isRtl ? -1 : 1)) * state.currentGroupIndex * 100}%)"></div></div><div class="message ${state.message ? '' : 'gone'}" role="alert" aria-live="polite">${state.message || ''}</div><div data-ref="tabpanelElement" class="tabpanel ${(!state.databaseLoaded || state.message) ? 'gone' : ''}" role="${state.searchMode ? 'region' : 'tabpanel'}" aria-label="${state.searchMode ? state.i18n.searchResultsLabel : state.i18n.categories[state.currentGroup.name]}" id="${state.searchMode ? null : `tab-${state.currentGroup.id}`}" tabIndex="0" data-on-click="onEmojiClick"><div data-action="calculateEmojiGridStyle">${
              map(state.currentEmojisWithCategories, (emojiWithCategory, i) => {
                return html`<div><div id="menu-label-${i}" class="category ${state.currentEmojisWithCategories.length === 1 && state.currentEmojisWithCategories[0].category === '' ? 'gone' : ''}" aria-hidden="true">${
                  state.searchMode
                    ? state.i18n.searchResultsLabel
                    : (
                      emojiWithCategory.category
                        ? emojiWithCategory.category
                        : (
                          state.currentEmojisWithCategories.length > 1
                            ? state.i18n.categories.custom
                            : state.i18n.categories[state.currentGroup.name]
                        )
                    )
                }</div><div class="emoji-menu ${i !== 0 && !state.searchMode && state.currentGroup.id === -1 ? 'visibility-auto' : ''}" style="${`--num-rows: ${Math.ceil(emojiWithCategory.emojis.length / state.numColumns)}`}" data-action="updateOnIntersection" role="${state.searchMode ? 'listbox' : 'menu'}" aria-labelledby="menu-label-${i}" id="${state.searchMode ? 'search-results' : null}">${
              emojiList(emojiWithCategory.emojis, state.searchMode, /* prefix */ 'emo')
            }</div></div>`
              }, emojiWithCategory => emojiWithCategory.category)
            }</div></div><div class="favorites onscreen emoji-menu ${state.message ? 'gone' : ''}" role="menu" aria-label="${state.i18n.favoritesLabel}" data-on-click="onEmojiClick">${
            emojiList(state.currentFavorites, /* searchMode */ false, /* prefix */ 'fav')
          }</div><button data-ref="baselineEmoji" aria-hidden="true" tabindex="-1" class="abs-pos hidden emoji baseline-emoji">😀</button></section>`
	  };

	  const rootDom = section();

	  // helper for traversing the dom, finding elements by an attribute, and getting the attribute value
	  const forElementWithAttribute = (attributeName, callback) => {
	    for (const element of container.querySelectorAll(`[${attributeName}]`)) {
	      callback(element, element.getAttribute(attributeName));
	    }
	  };

	  if (firstRender) { // not a re-render
	    container.appendChild(rootDom);

	    // we only bind events/refs once - there is no need to find them again given this component structure

	    // bind events
	    for (const eventName of ['click', 'focusout', 'input', 'keydown', 'keyup']) {
	      forElementWithAttribute(`data-on-${eventName}`, (element, listenerName) => {
	        element.addEventListener(eventName, events[listenerName]);
	      });
	    }

	    // find refs
	    forElementWithAttribute('data-ref', (element, ref) => {
	      refs[ref] = element;
	    });

	    // destroy/abort logic
	    abortSignal.addEventListener('abort', () => {
	      container.removeChild(rootDom);
	    });
	  }

	  // set up actions - these are re-bound on every render
	  forElementWithAttribute('data-action', (element, action) => {
	    let boundActions = actionContext.get(action);
	    if (!boundActions) {
	      actionContext.set(action, (boundActions = new WeakSet()));
	    }

	    // avoid applying the same action to the same element multiple times
	    if (!boundActions.has(element)) {
	      boundActions.add(element);
	      actions[action](element);
	    }
	  });
	}

	/* istanbul ignore next */
	const qM = typeof queueMicrotask === 'function' ? queueMicrotask : callback => Promise.resolve().then(callback);

	function createState (abortSignal) {
	  let destroyed = false;
	  let currentObserver;

	  const propsToObservers = new Map();
	  const dirtyObservers = new Set();

	  let queued;

	  const flush = () => {
	    if (destroyed) {
	      return
	    }
	    const observersToRun = [...dirtyObservers];
	    dirtyObservers.clear(); // clear before running to force any new updates to run in another tick of the loop
	    try {
	      for (const observer of observersToRun) {
	        observer();
	      }
	    } finally {
	      queued = false;
	      if (dirtyObservers.size) { // new updates, queue another one
	        queued = true;
	        qM(flush);
	      }
	    }
	  };

	  const state = new Proxy({}, {
	    get (target, prop) {
	      if (currentObserver) {
	        let observers = propsToObservers.get(prop);
	        if (!observers) {
	          observers = new Set();
	          propsToObservers.set(prop, observers);
	        }
	        observers.add(currentObserver);
	      }
	      return target[prop]
	    },
	    set (target, prop, newValue) {
	      if (target[prop] !== newValue) {
	        target[prop] = newValue;
	        const observers = propsToObservers.get(prop);
	        if (observers) {
	          for (const observer of observers) {
	            dirtyObservers.add(observer);
	          }
	          if (!queued) {
	            queued = true;
	            qM(flush);
	          }
	        }
	      }
	      return true
	    }
	  });

	  const createEffect = (callback) => {
	    const runnable = () => {
	      const oldObserver = currentObserver;
	      currentObserver = runnable;
	      try {
	        return callback()
	      } finally {
	        currentObserver = oldObserver;
	      }
	    };
	    return runnable()
	  };

	  // destroy logic
	  abortSignal.addEventListener('abort', () => {
	    destroyed = true;
	  });

	  return {
	    state,
	    createEffect
	  }
	}

	// Compare two arrays, with a function called on each item in the two arrays that returns true if the items are equal
	function arraysAreEqualByFunction (left, right, areEqualFunc) {
	  if (left.length !== right.length) {
	    return false
	  }
	  for (let i = 0; i < left.length; i++) {
	    if (!areEqualFunc(left[i], right[i])) {
	      return false
	    }
	  }
	  return true
	}

	const intersectionObserverCache = new WeakMap();

	function intersectionObserverAction (node, abortSignal, listener) {
	  /* istanbul ignore else */
	  {
	    // The scroll root is always `.tabpanel`
	    const root = node.closest('.tabpanel');

	    let observer = intersectionObserverCache.get(root);
	    if (!observer) {
	      // TODO: replace this with the contentvisibilityautostatechange event when all supported browsers support it.
	      // For now we use IntersectionObserver because it has better cross-browser support, and it would be bad for
	      // old Safari versions if they eagerly downloaded all custom emoji all at once.
	      observer = new IntersectionObserver(listener, {
	        root,
	        // trigger if we are 1/2 scroll container height away so that the images load a bit quicker while scrolling
	        rootMargin: '50% 0px 50% 0px',
	        // trigger if any part of the emoji grid is intersecting
	        threshold: 0
	      });

	      // avoid creating a new IntersectionObserver for every category; just use one for the whole root
	      intersectionObserverCache.set(root, observer);

	      // assume that the abortSignal is always the same for this root node; just add one event listener
	      abortSignal.addEventListener('abort', () => {
	        observer.disconnect();
	      });
	    }

	    observer.observe(node);
	  }
	}

	/* eslint-disable prefer-const,no-labels,no-inner-declarations */

	// constants
	const EMPTY_ARRAY = [];

	const { assign } = Object;

	function createRoot (shadowRoot, props) {
	  const refs = {};
	  const abortController = new AbortController();
	  const abortSignal = abortController.signal;
	  const { state, createEffect } = createState(abortSignal);
	  const actionContext = new Map();

	  // initial state
	  assign(state, {
	    skinToneEmoji: undefined,
	    i18n: undefined,
	    database: undefined,
	    customEmoji: undefined,
	    customCategorySorting: undefined,
	    emojiVersion: undefined
	  });

	  // public props
	  assign(state, props);

	  // private props
	  assign(state, {
	    initialLoad: true,
	    currentEmojis: [],
	    currentEmojisWithCategories: [],
	    rawSearchText: '',
	    searchText: '',
	    searchMode: false,
	    activeSearchItem: -1,
	    message: undefined,
	    skinTonePickerExpanded: false,
	    skinTonePickerExpandedAfterAnimation: false,
	    currentSkinTone: 0,
	    activeSkinTone: 0,
	    skinToneButtonText: undefined,
	    pickerStyle: undefined,
	    skinToneButtonLabel: '',
	    skinTones: [],
	    currentFavorites: [],
	    defaultFavoriteEmojis: undefined,
	    numColumns: DEFAULT_NUM_COLUMNS,
	    isRtl: false,
	    currentGroupIndex: 0,
	    groups: groups,
	    databaseLoaded: false,
	    activeSearchItemId: undefined
	  });

	  //
	  // Update the current group based on the currentGroupIndex
	  //
	  createEffect(() => {
	    if (state.currentGroup !== state.groups[state.currentGroupIndex]) {
	      state.currentGroup = state.groups[state.currentGroupIndex];
	    }
	  });

	  //
	  // Utils/helpers
	  //

	  const focus = id => {
	    shadowRoot.getElementById(id).focus();
	  };

	  const emojiToDomNode = emoji => shadowRoot.getElementById(`emo-${emoji.id}`);

	  // fire a custom event that crosses the shadow boundary
	  const fireEvent = (name, detail) => {
	    refs.rootElement.dispatchEvent(new CustomEvent(name, {
	      detail,
	      bubbles: true,
	      composed: true
	    }));
	  };

	  //
	  // Comparison utils
	  //

	  const compareEmojiArrays = (a, b) => a.id === b.id;

	  const compareCurrentEmojisWithCategories = (a, b) => {
	    const { category: aCategory, emojis: aEmojis } = a;
	    const { category: bCategory, emojis: bEmojis } = b;

	    if (aCategory !== bCategory) {
	      return false
	    }

	    return arraysAreEqualByFunction(aEmojis, bEmojis, compareEmojiArrays)
	  };

	  //
	  // Update utils to avoid excessive re-renders
	  //

	  // avoid excessive re-renders by checking the value before setting
	  const updateCurrentEmojis = (newEmojis) => {
	    if (!arraysAreEqualByFunction(state.currentEmojis, newEmojis, compareEmojiArrays)) {
	      state.currentEmojis = newEmojis;
	    }
	  };

	  // avoid excessive re-renders
	  const updateSearchMode = (newSearchMode) => {
	    if (state.searchMode !== newSearchMode) {
	      state.searchMode = newSearchMode;
	    }
	  };

	  // avoid excessive re-renders
	  const updateCurrentEmojisWithCategories = (newEmojisWithCategories) => {
	    if (!arraysAreEqualByFunction(state.currentEmojisWithCategories, newEmojisWithCategories, compareCurrentEmojisWithCategories)) {
	      state.currentEmojisWithCategories = newEmojisWithCategories;
	    }
	  };

	  // Helpers used by PickerTemplate

	  const unicodeWithSkin = (emoji, currentSkinTone) => (
	    (currentSkinTone && emoji.skins && emoji.skins[currentSkinTone]) || emoji.unicode
	  );

	  const labelWithSkin = (emoji, currentSkinTone) => (
	    uniq([
	      (emoji.name || unicodeWithSkin(emoji, currentSkinTone)),
	      emoji.annotation,
	      ...(emoji.shortcodes || EMPTY_ARRAY)
	    ].filter(Boolean)).join(', ')
	  );

	  const titleForEmoji = (emoji) => (
	    emoji.annotation || (emoji.shortcodes || EMPTY_ARRAY).join(', ')
	  );

	  const helpers = {
	    labelWithSkin, titleForEmoji, unicodeWithSkin
	  };
	  const events = {
	    onClickSkinToneButton,
	    onEmojiClick,
	    onNavClick,
	    onNavKeydown,
	    onSearchKeydown,
	    onSkinToneOptionsClick,
	    onSkinToneOptionsFocusOut,
	    onSkinToneOptionsKeydown,
	    onSkinToneOptionsKeyup,
	    onSearchInput
	  };
	  const actions = {
	    calculateEmojiGridStyle,
	    updateOnIntersection
	  };

	  let firstRender = true;
	  createEffect(() => {
	    render(shadowRoot, state, helpers, events, actions, refs, abortSignal, actionContext, firstRender);
	    firstRender = false;
	  });

	  //
	  // Determine the emoji support level (in requestIdleCallback)
	  //

	  // mount logic
	  if (!state.emojiVersion) {
	    detectEmojiSupportLevel().then(level => {
	      // Can't actually test emoji support in Jest/Vitest/JSDom, emoji never render in color in Cairo
	      /* istanbul ignore next */
	      if (!level) {
	        state.message = state.i18n.emojiUnsupportedMessage;
	      }
	    });
	  }

	  //
	  // Set or update the database object
	  //

	  createEffect(() => {
	    // show a Loading message if it takes a long time, or show an error if there's a network/IDB error
	    async function handleDatabaseLoading () {
	      let showingLoadingMessage = false;
	      const timeoutHandle = setTimeout(() => {
	        showingLoadingMessage = true;
	        state.message = state.i18n.loadingMessage;
	      }, TIMEOUT_BEFORE_LOADING_MESSAGE);
	      try {
	        await state.database.ready();
	        state.databaseLoaded = true; // eslint-disable-line no-unused-vars
	      } catch (err) {
	        console.error(err);
	        state.message = state.i18n.networkErrorMessage;
	      } finally {
	        clearTimeout(timeoutHandle);
	        if (showingLoadingMessage) { // Seems safer than checking the i18n string, which may change
	          showingLoadingMessage = false;
	          state.message = ''; // eslint-disable-line no-unused-vars
	        }
	      }
	    }

	    if (state.database) {
	      /* no await */
	      handleDatabaseLoading();
	    }
	  });

	  //
	  // Global styles for the entire picker
	  //

	  createEffect(() => {
	    state.pickerStyle = `
      --num-groups: ${state.groups.length}; 
      --indicator-opacity: ${state.searchMode ? 0 : 1}; 
      --num-skintones: ${NUM_SKIN_TONES};`;
	  });

	  //
	  // Set or update the customEmoji
	  //

	  createEffect(() => {
	    if (state.customEmoji && state.database) {
	      updateCustomEmoji(); // re-run whenever customEmoji change
	    }
	  });

	  createEffect(() => {
	    if (state.customEmoji && state.customEmoji.length) {
	      if (state.groups !== allGroups) { // don't update unnecessarily
	        state.groups = allGroups;
	      }
	    } else if (state.groups !== groups) {
	      if (state.currentGroupIndex) {
	        // If the current group is anything other than "custom" (which is first), decrement.
	        // This fixes the odd case where you set customEmoji, then pick a category, then unset customEmoji
	        state.currentGroupIndex--;
	      }
	      state.groups = groups;
	    }
	  });

	  //
	  // Set or update the preferred skin tone
	  //

	  createEffect(() => {
	    async function updatePreferredSkinTone () {
	      if (state.databaseLoaded) {
	        state.currentSkinTone = await state.database.getPreferredSkinTone();
	      }
	    }

	    /* no await */ updatePreferredSkinTone();
	  });

	  createEffect(() => {
	    state.skinTones = Array(NUM_SKIN_TONES).fill().map((_, i) => applySkinTone(state.skinToneEmoji, i));
	  });

	  createEffect(() => {
	    state.skinToneButtonText = state.skinTones[state.currentSkinTone];
	  });

	  createEffect(() => {
	    state.skinToneButtonLabel = state.i18n.skinToneLabel.replace('{skinTone}', state.i18n.skinTones[state.currentSkinTone]);
	  });

	  //
	  // Set or update the favorites emojis
	  //

	  createEffect(() => {
	    async function updateDefaultFavoriteEmojis () {
	      const { database } = state;
	      const favs = (await Promise.all(MOST_COMMONLY_USED_EMOJI.map(unicode => (
	        database.getEmojiByUnicodeOrName(unicode)
	      )))).filter(Boolean); // filter because in Jest/Vitest tests we don't have all the emoji in the DB
	      state.defaultFavoriteEmojis = favs;
	    }

	    if (state.databaseLoaded) {
	      /* no await */ updateDefaultFavoriteEmojis();
	    }
	  });

	  function updateCustomEmoji () {
	    // Certain effects have an implicit dependency on customEmoji since it affects the database
	    // Getting it here on the state ensures this effect re-runs when customEmoji change.
	    const { customEmoji, database } = state;
	    const databaseCustomEmoji = customEmoji || EMPTY_ARRAY;
	    if (database.customEmoji !== databaseCustomEmoji) {
	      // Avoid setting this if the customEmoji have _not_ changed, because the setter triggers a re-computation of the
	      // `customEmojiIndex`. Note we don't bother with deep object changes.
	      database.customEmoji = databaseCustomEmoji;
	    }
	  }

	  createEffect(() => {
	    async function updateFavorites () {
	      updateCustomEmoji(); // re-run whenever customEmoji change
	      const { database, defaultFavoriteEmojis, numColumns } = state;
	      const dbFavorites = await database.getTopFavoriteEmoji(numColumns);
	      const favorites = await summarizeEmojis(uniqBy([
	        ...dbFavorites,
	        ...defaultFavoriteEmojis
	      ], _ => (_.unicode || _.name)).slice(0, numColumns));
	      state.currentFavorites = favorites;
	    }

	    if (state.databaseLoaded && state.defaultFavoriteEmojis) {
	      /* no await */ updateFavorites();
	    }
	  });

	  //
	  // Re-run whenever the emoji grid changes size, and re-calc style/layout-related state variables:
	  // 1) Re-calculate the --num-columns var because it may have changed
	  // 2) Re-calculate whether we're in RTL mode or not.
	  //
	  // The benefit of doing this in one place is to align with rAF/ResizeObserver
	  // and do all the calculations in one go. RTL vs LTR is not strictly layout-related,
	  // but since we're already reading the style here, and since it's already aligned with
	  // the rAF loop, this is the most appropriate place to do it perf-wise.
	  //

	  function calculateEmojiGridStyle (node) {
	    resizeObserverAction(node, abortSignal, () => {
	      /* istanbul ignore next */
	      { // jsdom throws errors for this kind of fancy stuff
	        // read all the style/layout calculations we need to make
	        const style = getComputedStyle(refs.rootElement);
	        const newNumColumns = parseInt(style.getPropertyValue('--num-columns'), 10);
	        const newIsRtl = style.getPropertyValue('direction') === 'rtl';

	        // write to state variables
	        state.numColumns = newNumColumns;
	        state.isRtl = newIsRtl;
	      }
	    });
	  }

	  // Re-run whenever the custom emoji in a category are shown/hidden. This is an optimization that simulates
	  // what we'd get from `<img loading=lazy>` but without rendering an `<img>`.
	  function updateOnIntersection (node) {
	    intersectionObserverAction(node, abortSignal, (entries) => {
	      for (const { target, isIntersecting } of entries) {
	        target.classList.toggle('onscreen', isIntersecting);
	      }
	    });
	  }

	  //
	  // Set or update the currentEmojis. Check for invalid ZWJ renderings
	  // (i.e. double emoji).
	  //

	  createEffect(() => {
	    async function updateEmojis () {
	      const { searchText, currentGroup, databaseLoaded, customEmoji } = state;
	      if (!databaseLoaded) {
	        state.currentEmojis = [];
	        state.searchMode = false;
	      } else if (searchText.length >= MIN_SEARCH_TEXT_LENGTH) {
	        const newEmojis = await getEmojisBySearchQuery(searchText);
	        if (state.searchText === searchText) { // if the situation changes asynchronously, do not update
	          updateCurrentEmojis(newEmojis);
	          updateSearchMode(true);
	        }
	      } else { // database is loaded and we're not in search mode, so we're in normal category mode
	        const { id: currentGroupId } = currentGroup;
	        // avoid race condition where currentGroupId is -1 and customEmoji is undefined/empty
	        if (currentGroupId !== -1 || (customEmoji && customEmoji.length)) {
	          const newEmojis = await getEmojisByGroup(currentGroupId);
	          if (state.currentGroup.id === currentGroupId) { // if the situation changes asynchronously, do not update
	            updateCurrentEmojis(newEmojis);
	            updateSearchMode(false);
	          }
	        }
	      }
	    }

	    /* no await */ updateEmojis();
	  });

	  const resetScrollTopInRaf = () => {
	    rAF(() => resetScrollTopIfPossible(refs.tabpanelElement));
	  };

	  // Some emojis have their ligatures rendered as two or more consecutive emojis
	  // We want to treat these the same as unsupported emojis, so we compare their
	  // widths against the baseline widths and remove them as necessary
	  createEffect(() => {
	    const { currentEmojis, emojiVersion } = state;
	    const zwjEmojisToCheck = currentEmojis
	      .filter(emoji => emoji.unicode) // filter custom emoji
	      .filter(emoji => hasZwj(emoji) && !supportedZwjEmojis.has(emoji.unicode));
	    if (!emojiVersion && zwjEmojisToCheck.length) {
	      // render now, check their length later
	      updateCurrentEmojis(currentEmojis);
	      rAF(() => checkZwjSupportAndUpdate(zwjEmojisToCheck));
	    } else {
	      const newEmojis = emojiVersion ? currentEmojis : currentEmojis.filter(isZwjSupported);
	      updateCurrentEmojis(newEmojis);
	      // Reset scroll top to 0 when emojis change
	      resetScrollTopInRaf();
	    }
	  });

	  function checkZwjSupportAndUpdate (zwjEmojisToCheck) {
	    const allSupported = checkZwjSupport(zwjEmojisToCheck, refs.baselineEmoji, emojiToDomNode);
	    if (allSupported) {
	      // Even if all emoji are supported, we still need to reset the scroll top to 0 when emojis change
	      resetScrollTopInRaf();
	    } else {
	      // Force update. We only do this if there are any unsupported ZWJ characters since otherwise,
	      // for browsers that support all emoji, it would be an unnecessary extra re-render.
	      state.currentEmojis = [...state.currentEmojis];
	    }
	  }

	  function isZwjSupported (emoji) {
	    return !emoji.unicode || !hasZwj(emoji) || supportedZwjEmojis.get(emoji.unicode)
	  }

	  async function filterEmojisByVersion (emojis) {
	    const emojiSupportLevel = state.emojiVersion || await detectEmojiSupportLevel();
	    // !version corresponds to custom emoji
	    return emojis.filter(({ version }) => !version || version <= emojiSupportLevel)
	  }

	  async function summarizeEmojis (emojis) {
	    return summarizeEmojisForUI(emojis, state.emojiVersion || await detectEmojiSupportLevel())
	  }

	  async function getEmojisByGroup (group) {
	    // -1 is custom emoji
	    const emoji = group === -1 ? state.customEmoji : await state.database.getEmojiByGroup(group);
	    return summarizeEmojis(await filterEmojisByVersion(emoji))
	  }

	  async function getEmojisBySearchQuery (query) {
	    return summarizeEmojis(await filterEmojisByVersion(await state.database.getEmojiBySearchQuery(query)))
	  }

	  createEffect(() => {
	  });

	  //
	  // Derive currentEmojisWithCategories from currentEmojis. This is always done even if there
	  // are no categories, because it's just easier to code the HTML this way.
	  //

	  createEffect(() => {
	    function calculateCurrentEmojisWithCategories () {
	      const { searchMode, currentEmojis } = state;
	      if (searchMode) {
	        return [
	          {
	            category: '',
	            emojis: currentEmojis
	          }
	        ]
	      }
	      const categoriesToEmoji = new Map();
	      for (const emoji of currentEmojis) {
	        const category = emoji.category || '';
	        let emojis = categoriesToEmoji.get(category);
	        if (!emojis) {
	          emojis = [];
	          categoriesToEmoji.set(category, emojis);
	        }
	        emojis.push(emoji);
	      }
	      return [...categoriesToEmoji.entries()]
	        .map(([category, emojis]) => ({ category, emojis }))
	        .sort((a, b) => state.customCategorySorting(a.category, b.category))
	    }

	    const newEmojisWithCategories = calculateCurrentEmojisWithCategories();
	    updateCurrentEmojisWithCategories(newEmojisWithCategories);
	  });

	  //
	  // Handle active search item (i.e. pressing up or down while searching)
	  //

	  createEffect(() => {
	    state.activeSearchItemId = state.activeSearchItem !== -1 && state.currentEmojis[state.activeSearchItem].id;
	  });

	  //
	  // Handle user input on the search input
	  //

	  createEffect(() => {
	    const { rawSearchText } = state;
	    rIC(() => {
	      state.searchText = (rawSearchText || '').trim(); // defer to avoid input delays, plus we can trim here
	      state.activeSearchItem = -1;
	    });
	  });

	  function onSearchKeydown (event) {
	    if (!state.searchMode || !state.currentEmojis.length) {
	      return
	    }

	    const goToNextOrPrevious = (previous) => {
	      halt(event);
	      state.activeSearchItem = incrementOrDecrement(previous, state.activeSearchItem, state.currentEmojis);
	    };

	    switch (event.key) {
	      case 'ArrowDown':
	        return goToNextOrPrevious(false)
	      case 'ArrowUp':
	        return goToNextOrPrevious(true)
	      case 'Enter':
	        if (state.activeSearchItem === -1) {
	          // focus the first option in the list since the list must be non-empty at this point (it's verified above)
	          state.activeSearchItem = 0;
	        } else { // there is already an active search item
	          halt(event);
	          return clickEmoji(state.currentEmojis[state.activeSearchItem].id)
	        }
	    }
	  }

	  //
	  // Handle user input on nav
	  //

	  function onNavClick (event) {
	    const { target } = event;
	    const closestTarget = target.closest('.nav-button');
	    /* istanbul ignore if */
	    if (!closestTarget) {
	      return // This should never happen, but makes me nervous not to have it
	    }
	    const groupId = parseInt(closestTarget.dataset.groupId, 10);
	    refs.searchElement.value = ''; // clear search box input
	    state.rawSearchText = '';
	    state.searchText = '';
	    state.activeSearchItem = -1;
	    state.currentGroupIndex = state.groups.findIndex(_ => _.id === groupId);
	  }

	  function onNavKeydown (event) {
	    const { target, key } = event;

	    const doFocus = el => {
	      if (el) {
	        halt(event);
	        el.focus();
	      }
	    };

	    switch (key) {
	      case 'ArrowLeft':
	        return doFocus(target.previousElementSibling)
	      case 'ArrowRight':
	        return doFocus(target.nextElementSibling)
	      case 'Home':
	        return doFocus(target.parentElement.firstElementChild)
	      case 'End':
	        return doFocus(target.parentElement.lastElementChild)
	    }
	  }

	  async function getDetailForClickEvent (unicodeOrName) {
	    const emoji = await state.database.getEmojiByUnicodeOrName(unicodeOrName);
	    const emojiSummary = [...state.currentEmojis, ...state.currentFavorites]
	      .find(_ => (_.id === unicodeOrName));
	    const skinTonedUnicode = emojiSummary.unicode && unicodeWithSkin(emojiSummary, state.currentSkinTone);
	    await state.database.incrementFavoriteEmojiCount(unicodeOrName);
	    return {
	      emoji,
	      skinTone: state.currentSkinTone,
	      ...(skinTonedUnicode && { unicode: skinTonedUnicode }),
	      ...(emojiSummary.name && { name: emojiSummary.name })
	    }
	  }

	  //
	  // Handle user input on an emoji
	  //
	  async function clickEmoji (unicodeOrName) {
	    const promiseForDetail = getDetailForClickEvent(unicodeOrName);
	    // sync event to work around a safari bug: https://bugs.webkit.org/show_bug.cgi?id=222262
	    fireEvent('emoji-click-sync', promiseForDetail);
	    // async event for most normal use cases that don't need to work around the safari bug
	    fireEvent('emoji-click', await promiseForDetail);
	  }

	  function onEmojiClick (event) {
	    const { target } = event;
	    /* istanbul ignore if */
	    if (!target.classList.contains('emoji')) {
	      // This should never happen, but makes me nervous not to have it
	      return
	    }
	    halt(event);
	    const id = target.id.substring(4); // replace 'emo-' or 'fav-' prefix

	    /* no await */ clickEmoji(id);
	  }

	  //
	  // Handle user input on the skintone picker
	  //

	  function changeSkinTone (skinTone) {
	    state.currentSkinTone = skinTone;
	    state.skinTonePickerExpanded = false;
	    focus('skintone-button');
	    fireEvent('skin-tone-change', { skinTone });
	    /* no await */ state.database.setPreferredSkinTone(skinTone);
	  }

	  function onSkinToneOptionsClick (event) {
	    const { target: { id } } = event;
	    const match = id && id.match(/^skintone-(\d)/); // skintone option format
	    /* istanbul ignore if */
	    if (!match) { // not a skintone option
	      return // This should never happen, but makes me nervous not to have it
	    }
	    halt(event);
	    const skinTone = parseInt(match[1], 10); // remove 'skintone-' prefix
	    changeSkinTone(skinTone);
	  }

	  function onClickSkinToneButton (event) {
	    state.skinTonePickerExpanded = !state.skinTonePickerExpanded;
	    state.activeSkinTone = state.currentSkinTone;
	    // this should always be true, since the button is obscured by the listbox, so this `if` is just to be sure
	    if (state.skinTonePickerExpanded) {
	      halt(event);
	      rAF(() => focus('skintone-list'));
	    }
	  }

	  // To make the animation nicer, change the z-index of the skintone picker button
	  // *after* the animation has played. This makes it appear that the picker box
	  // is expanding "below" the button
	  createEffect(() => {
	    if (state.skinTonePickerExpanded) {
	      refs.skinToneDropdown.addEventListener('transitionend', () => {
	        state.skinTonePickerExpandedAfterAnimation = true; // eslint-disable-line no-unused-vars
	      }, { once: true });
	    } else {
	      state.skinTonePickerExpandedAfterAnimation = false; // eslint-disable-line no-unused-vars
	    }
	  });

	  function onSkinToneOptionsKeydown (event) {
	    // this should never happen, but makes me nervous not to have it
	    /* istanbul ignore if */
	    if (!state.skinTonePickerExpanded) {
	      return
	    }
	    const changeActiveSkinTone = async nextSkinTone => {
	      halt(event);
	      state.activeSkinTone = nextSkinTone;
	    };

	    switch (event.key) {
	      case 'ArrowUp':
	        return changeActiveSkinTone(incrementOrDecrement(true, state.activeSkinTone, state.skinTones))
	      case 'ArrowDown':
	        return changeActiveSkinTone(incrementOrDecrement(false, state.activeSkinTone, state.skinTones))
	      case 'Home':
	        return changeActiveSkinTone(0)
	      case 'End':
	        return changeActiveSkinTone(state.skinTones.length - 1)
	      case 'Enter':
	        // enter on keydown, space on keyup. this is just how browsers work for buttons
	        // https://lists.w3.org/Archives/Public/w3c-wai-ig/2019JanMar/0086.html
	        halt(event);
	        return changeSkinTone(state.activeSkinTone)
	      case 'Escape':
	        halt(event);
	        state.skinTonePickerExpanded = false;
	        return focus('skintone-button')
	    }
	  }

	  function onSkinToneOptionsKeyup (event) {
	    // this should never happen, but makes me nervous not to have it
	    /* istanbul ignore if */
	    if (!state.skinTonePickerExpanded) {
	      return
	    }
	    switch (event.key) {
	      case ' ':
	        // enter on keydown, space on keyup. this is just how browsers work for buttons
	        // https://lists.w3.org/Archives/Public/w3c-wai-ig/2019JanMar/0086.html
	        halt(event);
	        return changeSkinTone(state.activeSkinTone)
	    }
	  }

	  async function onSkinToneOptionsFocusOut (event) {
	    // On blur outside of the skintone listbox, collapse the skintone picker.
	    const { relatedTarget } = event;
	    // The `else` should never happen, but makes me nervous not to have it
	    /* istanbul ignore else */
	    if (!relatedTarget || relatedTarget.id !== 'skintone-list') {
	      state.skinTonePickerExpanded = false;
	    }
	  }

	  function onSearchInput (event) {
	    state.rawSearchText = event.target.value;
	  }

	  return {
	    $set (newState) {
	      assign(state, newState);
	    },
	    $destroy () {
	      abortController.abort();
	    }
	  }
	}

	const DEFAULT_DATA_SOURCE = 'https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json';
	const DEFAULT_LOCALE = 'en';

	var enI18n = {
	  categoriesLabel: 'Categories',
	  emojiUnsupportedMessage: 'Your browser does not support color emoji.',
	  favoritesLabel: 'Favorites',
	  loadingMessage: 'Loading…',
	  networkErrorMessage: 'Could not load emoji.',
	  regionLabel: 'Emoji picker',
	  searchDescription: 'When search results are available, press up or down to select and enter to choose.',
	  searchLabel: 'Search',
	  searchResultsLabel: 'Search results',
	  skinToneDescription: 'When expanded, press up or down to select and enter to choose.',
	  skinToneLabel: 'Choose a skin tone (currently {skinTone})',
	  skinTonesLabel: 'Skin tones',
	  skinTones: [
	    'Default',
	    'Light',
	    'Medium-Light',
	    'Medium',
	    'Medium-Dark',
	    'Dark'
	  ],
	  categories: {
	    custom: 'Custom',
	    'smileys-emotion': 'Smileys and emoticons',
	    'people-body': 'People and body',
	    'animals-nature': 'Animals and nature',
	    'food-drink': 'Food and drink',
	    'travel-places': 'Travel and places',
	    activities: 'Activities',
	    objects: 'Objects',
	    symbols: 'Symbols',
	    flags: 'Flags'
	  }
	};

	var baseStyles = ":host{--emoji-size:1.375rem;--emoji-padding:0.5rem;--category-emoji-size:var(--emoji-size);--category-emoji-padding:var(--emoji-padding);--indicator-height:3px;--input-border-radius:0.5rem;--input-border-size:1px;--input-font-size:1rem;--input-line-height:1.5;--input-padding:0.25rem;--num-columns:8;--outline-size:2px;--border-size:1px;--border-radius:0;--skintone-border-radius:1rem;--category-font-size:1rem;display:flex;width:min-content;height:400px}:host,:host(.light){color-scheme:light;--background:#fff;--border-color:#e0e0e0;--indicator-color:#385ac1;--input-border-color:#999;--input-font-color:#111;--input-placeholder-color:#999;--outline-color:#999;--category-font-color:#111;--button-active-background:#e6e6e6;--button-hover-background:#d9d9d9}:host(.dark){color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}@media (prefers-color-scheme:dark){:host{color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}}:host([hidden]){display:none}button{margin:0;padding:0;border:0;background:0 0;box-shadow:none;-webkit-tap-highlight-color:transparent}button::-moz-focus-inner{border:0}input{padding:0;margin:0;line-height:1.15;font-family:inherit}input[type=search]{-webkit-appearance:none}:focus{outline:var(--outline-color) solid var(--outline-size);outline-offset:calc(-1*var(--outline-size))}:host([data-js-focus-visible]) :focus:not([data-focus-visible-added]){outline:0}:focus:not(:focus-visible){outline:0}.hide-focus{outline:0}*{box-sizing:border-box}.picker{contain:content;display:flex;flex-direction:column;background:var(--background);border:var(--border-size) solid var(--border-color);border-radius:var(--border-radius);width:100%;height:100%;overflow:hidden;--total-emoji-size:calc(var(--emoji-size) + (2 * var(--emoji-padding)));--total-category-emoji-size:calc(var(--category-emoji-size) + (2 * var(--category-emoji-padding)))}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.hidden{opacity:0;pointer-events:none}.abs-pos{position:absolute;left:0;top:0}.gone{display:none!important}.skintone-button-wrapper,.skintone-list{background:var(--background);z-index:3}.skintone-button-wrapper.expanded{z-index:1}.skintone-list{position:absolute;inset-inline-end:0;top:0;z-index:2;overflow:visible;border-bottom:var(--border-size) solid var(--border-color);border-radius:0 0 var(--skintone-border-radius) var(--skintone-border-radius);will-change:transform;transition:transform .2s ease-in-out;transform-origin:center 0}@media (prefers-reduced-motion:reduce){.skintone-list{transition-duration:.001s}}@supports not (inset-inline-end:0){.skintone-list{right:0}}.skintone-list.no-animate{transition:none}.tabpanel{overflow-y:auto;scrollbar-gutter:stable;-webkit-overflow-scrolling:touch;will-change:transform;min-height:0;flex:1;contain:content}.emoji-menu{display:grid;grid-template-columns:repeat(var(--num-columns),var(--total-emoji-size));justify-content:space-around;align-items:flex-start;width:100%}.emoji-menu.visibility-auto{content-visibility:auto;contain-intrinsic-size:calc(var(--num-columns)*var(--total-emoji-size)) calc(var(--num-rows)*var(--total-emoji-size))}.category{padding:var(--emoji-padding);font-size:var(--category-font-size);color:var(--category-font-color)}.emoji,button.emoji{font-size:var(--emoji-size);display:flex;align-items:center;justify-content:center;border-radius:100%;height:var(--total-emoji-size);width:var(--total-emoji-size);line-height:1;overflow:hidden;font-family:var(--emoji-font-family);cursor:pointer}@media (hover:hover) and (pointer:fine){.emoji:hover,button.emoji:hover{background:var(--button-hover-background)}}.emoji.active,.emoji:active,button.emoji.active,button.emoji:active{background:var(--button-active-background)}.onscreen .custom-emoji::after{content:\"\";width:var(--emoji-size);height:var(--emoji-size);background-repeat:no-repeat;background-position:center center;background-size:contain;background-image:var(--custom-emoji-background)}.nav,.nav-button{align-items:center}.nav{display:grid;justify-content:space-between;contain:content}.nav-button{display:flex;justify-content:center}.nav-emoji{font-size:var(--category-emoji-size);width:var(--total-category-emoji-size);height:var(--total-category-emoji-size)}.indicator-wrapper{display:flex;border-bottom:1px solid var(--border-color)}.indicator{width:calc(100%/var(--num-groups));height:var(--indicator-height);opacity:var(--indicator-opacity);background-color:var(--indicator-color);will-change:transform,opacity;transition:opacity .1s linear,transform .25s ease-in-out}@media (prefers-reduced-motion:reduce){.indicator{will-change:opacity;transition:opacity .1s linear}}.pad-top,input.search{background:var(--background);width:100%}.pad-top{height:var(--emoji-padding);z-index:3}.search-row{display:flex;align-items:center;position:relative;padding-inline-start:var(--emoji-padding);padding-bottom:var(--emoji-padding)}.search-wrapper{flex:1;min-width:0}input.search{padding:var(--input-padding);border-radius:var(--input-border-radius);border:var(--input-border-size) solid var(--input-border-color);color:var(--input-font-color);font-size:var(--input-font-size);line-height:var(--input-line-height)}input.search::placeholder{color:var(--input-placeholder-color)}.favorites{overflow-y:auto;scrollbar-gutter:stable;display:flex;flex-direction:row;border-top:var(--border-size) solid var(--border-color);contain:content}.message{padding:var(--emoji-padding)}";

	const PROPS = [
	  'customEmoji',
	  'customCategorySorting',
	  'database',
	  'dataSource',
	  'i18n',
	  'locale',
	  'skinToneEmoji',
	  'emojiVersion'
	];

	// Styles injected ourselves, so we can declare the FONT_FAMILY variable in one place
	const EXTRA_STYLES = `:host{--emoji-font-family:${FONT_FAMILY}}`;

	class PickerElement extends HTMLElement {
	  constructor (props) {
	    super();
	    this.attachShadow({ mode: 'open' });
	    const style = document.createElement('style');
	    style.textContent = baseStyles + EXTRA_STYLES;
	    this.shadowRoot.appendChild(style);
	    this._ctx = {
	      // Set defaults
	      locale: DEFAULT_LOCALE,
	      dataSource: DEFAULT_DATA_SOURCE,
	      skinToneEmoji: DEFAULT_SKIN_TONE_EMOJI,
	      customCategorySorting: DEFAULT_CATEGORY_SORTING,
	      customEmoji: null,
	      i18n: enI18n,
	      emojiVersion: null,
	      ...props
	    };
	    // Handle properties set before the element was upgraded
	    for (const prop of PROPS) {
	      if (prop !== 'database' && Object.prototype.hasOwnProperty.call(this, prop)) {
	        this._ctx[prop] = this[prop];
	        delete this[prop];
	      }
	    }
	    this._dbFlush(); // wait for a flush before creating the db, in case the user calls e.g. a setter or setAttribute
	  }

	  connectedCallback () {
	    rescueElementPrototype(this);
	    // The _cmp may be defined if the component was immediately disconnected and then reconnected. In that case,
	    // do nothing (preserve the state)
	    if (!this._cmp) {
	      this._cmp = createRoot(this.shadowRoot, this._ctx);
	    }
	  }

	  disconnectedCallback () {
	    rescueElementPrototype(this);
	    // Check in a microtask if the element is still connected. If so, treat this as a "move" rather than a disconnect
	    // Inspired by Vue: https://vuejs.org/guide/extras/web-components.html#building-custom-elements-with-vue
	    qM(() => {
	      // this._cmp may be defined if connect-disconnect-connect-disconnect occurs synchronously
	      if (!this.isConnected && this._cmp) {
	        this._cmp.$destroy();
	        this._cmp = undefined;

	        const { database } = this._ctx;
	        database.close()
	          // only happens if the database failed to load in the first place, so we don't care
	          .catch(err => console.error(err));
	      }
	    });
	  }

	  static get observedAttributes () {
	    return ['locale', 'data-source', 'skin-tone-emoji', 'emoji-version'] // complex objects aren't supported, also use kebab-case
	  }

	  attributeChangedCallback (attrName, oldValue, newValue) {
	    this._set(
	      // convert from kebab-case to camelcase
	      // see https://github.com/sveltejs/svelte/issues/3852#issuecomment-665037015
	      attrName.replace(/-([a-z])/g, (_, up) => up.toUpperCase()),
	      // convert string attribute to float if necessary
	      attrName === 'emoji-version' ? parseFloat(newValue) : newValue
	    );
	  }

	  _set (prop, newValue) {
	    this._ctx[prop] = newValue;
	    if (this._cmp) {
	      this._cmp.$set({ [prop]: newValue });
	    }
	    if (['locale', 'dataSource'].includes(prop)) {
	      this._dbFlush();
	    }
	  }

	  _dbCreate () {
	    const { locale, dataSource, database } = this._ctx;
	    // only create a new database if we really need to
	    if (!database || database.locale !== locale || database.dataSource !== dataSource) {
	      this._set('database', new Database({ locale, dataSource }));
	    }
	  }

	  // Update the Database in one microtask if the locale/dataSource change. We do one microtask
	  // so we don't create two Databases if e.g. both the locale and the dataSource change
	  _dbFlush () {
	    qM(() => (
	      this._dbCreate()
	    ));
	  }
	}

	const definitions = {};

	for (const prop of PROPS) {
	  definitions[prop] = {
	    get () {
	      if (prop === 'database') {
	        // in rare cases, the microtask may not be flushed yet, so we need to instantiate the DB
	        // now if the user is asking for it
	        this._dbCreate();
	      }
	      return this._ctx[prop]
	    },
	    set (val) {
	      if (prop === 'database') {
	        throw new Error('database is read-only')
	      }
	      this._set(prop, val);
	    }
	  };
	}

	Object.defineProperties(PickerElement.prototype, definitions);

	// See https://jakearchibald.com/2025/firefox-custom-elements-iframes-bug/
	// TODO: remove when the Firefox bug is fixed: https://bugzilla.mozilla.org/show_bug.cgi?id=1502814
	function rescueElementPrototype (element) {
	  /* istanbul ignore if */
	  if (!(element instanceof PickerElement)) {
	    Object.setPrototypeOf(element, customElements.get(element.tagName.toLowerCase()).prototype);
	  }
	}

	/* istanbul ignore else */
	if (!customElements.get('emoji-picker')) { // if already defined, do nothing (e.g. same script imported twice)
	  customElements.define('emoji-picker', PickerElement);
	}

	var jsxRuntime = {exports: {}};

	var reactJsxRuntime_production_min = {};

	/**
	 * @license React
	 * react-jsx-runtime.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReactJsxRuntime_production_min;

	function requireReactJsxRuntime_production_min () {
		if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
		hasRequiredReactJsxRuntime_production_min = 1;
	var f=requireReact(),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:true,ref:true,__self:true,__source:true};
		function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a) void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
		return reactJsxRuntime_production_min;
	}

	var hasRequiredJsxRuntime;

	function requireJsxRuntime () {
		if (hasRequiredJsxRuntime) return jsxRuntime.exports;
		hasRequiredJsxRuntime = 1;

		{
		  jsxRuntime.exports = requireReactJsxRuntime_production_min();
		}
		return jsxRuntime.exports;
	}

	var jsxRuntimeExports = requireJsxRuntime();

	function EmojiPickerElement(_ref) {
	  let {
	    onEmojiSelect
	  } = _ref;
	  const ref = reactExports.useRef(null);
	  reactExports.useEffect(() => {
	    const el = ref.current;
	    if (!el) return;
	    const handler = e => onEmojiSelect({
	      native: e.detail.unicode
	    });
	    el.addEventListener("emoji-click", handler);
	    return () => el.removeEventListener("emoji-click", handler);
	  }, [onEmojiSelect]);
	  return /*#__PURE__*/jsxRuntimeExports.jsx("emoji-picker", {
	    ref: ref,
	    class: "light",
	    style: {
	      width: "100%"
	    }
	  });
	}
	const DEFAULT_REACTION_OPTIONS = ["👍", "❤️", "😂", "🎉", "😮", "😢", "👏", "🔥", "👀", "😡"];
	function toCount(value) {
	  const parsed = Number(value);
	  if (!Number.isFinite(parsed) || parsed <= 0) {
	    return 0;
	  }
	  return parsed;
	}
	function sortReactionEntries(reactions, options, myReaction) {
	  const optionOrder = new Map(options.map((emoji, index) => [emoji, index]));
	  const entries = Object.entries(reactions || {}).map(_ref2 => {
	    let [emoji, value] = _ref2;
	    return [emoji, toCount(value)];
	  }).filter(_ref3 => {
	    let [, count] = _ref3;
	    return count > 0;
	  });
	  if (myReaction && !entries.some(_ref4 => {
	    let [emoji] = _ref4;
	    return emoji === myReaction;
	  })) {
	    entries.push([myReaction, 1]);
	  }
	  entries.sort((left, right) => {
	    if (right[1] !== left[1]) {
	      return right[1] - left[1];
	    }
	    const leftIndex = optionOrder.has(left[0]) ? optionOrder.get(left[0]) : Number.MAX_SAFE_INTEGER;
	    const rightIndex = optionOrder.has(right[0]) ? optionOrder.get(right[0]) : Number.MAX_SAFE_INTEGER;
	    if (leftIndex !== rightIndex) {
	      return leftIndex - rightIndex;
	    }
	    return left[0].localeCompare(right[0]);
	  });
	  return entries;
	}
	function ReactionsBar(_ref5) {
	  let {
	    reactions,
	    myReaction,
	    onReact,
	    disabled = false,
	    options = DEFAULT_REACTION_OPTIONS,
	    showPicker = true,
	    showPills = true,
	    className = ""
	  } = _ref5;
	  const [isPickerOpen, setIsPickerOpen] = reactExports.useState(false);
	  const [isFullPickerOpen, setIsFullPickerOpen] = reactExports.useState(false);
	  const pickerContainerRef = reactExports.useRef(null);
	  const pickerPopupRef = reactExports.useRef(null);
	  const fullPickerPopupRef = reactExports.useRef(null);
	  const reactionEntries = reactExports.useMemo(() => sortReactionEntries(reactions, options, myReaction), [reactions, options, myReaction]);
	  reactExports.useEffect(() => {
	    if (!isPickerOpen && !isFullPickerOpen) {
	      return undefined;
	    }
	    const handleOutsideClick = event => {
	      const containerElement = pickerContainerRef.current;
	      const popupElement = pickerPopupRef.current;
	      const fullPopupElement = fullPickerPopupRef.current;
	      const eventPath = typeof event.composedPath === "function" ? event.composedPath() : [];
	      const clickedInsideContainer = containerElement ? eventPath.length > 0 ? eventPath.includes(containerElement) : containerElement.contains(event.target) : false;
	      const clickedInsidePopup = popupElement ? eventPath.length > 0 ? eventPath.includes(popupElement) : popupElement.contains(event.target) : false;
	      const clickedInsideFullPopup = fullPopupElement ? eventPath.length > 0 ? eventPath.includes(fullPopupElement) : fullPopupElement.contains(event.target) : false;
	      if (!clickedInsideContainer && !clickedInsidePopup && !clickedInsideFullPopup) {
	        setIsPickerOpen(false);
	        setIsFullPickerOpen(false);
	      }
	    };
	    const handleEscape = event => {
	      if (event.key === "Escape") {
	        if (isFullPickerOpen) {
	          setIsFullPickerOpen(false);
	          return;
	        }
	        setIsPickerOpen(false);
	      }
	    };
	    window.addEventListener("mousedown", handleOutsideClick);
	    window.addEventListener("keydown", handleEscape);
	    return () => {
	      window.removeEventListener("mousedown", handleOutsideClick);
	      window.removeEventListener("keydown", handleEscape);
	    };
	  }, [isPickerOpen, isFullPickerOpen]);
	  const triggerReaction = async emoji => {
	    if (disabled || !emoji || !onReact) {
	      return;
	    }
	    await onReact(emoji);
	  };
	  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	    className: `teemboomReactions${className ? ` ${className}` : ""}`,
	    ref: pickerContainerRef,
	    children: [showPills && reactionEntries.map(_ref6 => {
	      let [emoji, count] = _ref6;
	      return /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
	        type: "button",
	        className: `teemboomReactionPill ${myReaction === emoji ? "active" : ""}`,
	        onClick: () => triggerReaction(emoji),
	        disabled: disabled,
	        "aria-label": `React with ${emoji} (${count})`,
	        title: myReaction === emoji ? `Remove your ${emoji} reaction` : `React with ${emoji}`,
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
	          className: "teemboomReactionEmoji",
	          children: emoji
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	          className: "teemboomReactionCount",
	          children: count
	        })]
	      }, emoji);
	    }), showPicker && /*#__PURE__*/jsxRuntimeExports.jsx("button", {
	      type: "button",
	      className: `teemboomReactionPickerButton ${isPickerOpen ? "open" : ""}`,
	      onClick: () => {
	        setIsPickerOpen(previous => {
	          const nextOpen = !previous;
	          if (!nextOpen) {
	            setIsFullPickerOpen(false);
	          }
	          return nextOpen;
	        });
	      },
	      disabled: disabled,
	      "aria-label": "Add reaction",
	      title: "Add reaction",
	      children: /*#__PURE__*/jsxRuntimeExports.jsx("svg", {
	        viewBox: "0 0 24 24",
	        version: "1.1",
	        xmlns: "http://www.w3.org/2000/svg",
	        "aria-hidden": "true",
	        focusable: "false",
	        width: 23,
	        height: 21,
	        children: /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	          fill: "var(--teemboom-text)",
	          fillRule: "nonzero",
	          d: "M17.5,12 C20.5375661,12 23,14.4624339 23,17.5 C23,20.5375661 20.5375661,23 17.5,23 C14.4624339,23 12,20.5375661 12,17.5 C12,14.4624339 14.4624339,12 17.5,12 Z M12.0000002,1.99896738 C17.523704,1.99896738 22.0015507,6.47681407 22.0015507,12.0005179 C22.0015507,12.2637452 21.9913819,12.5245975 21.9714157,12.7827034 C21.5335438,12.3671164 21.0376367,12.012094 20.4972374,11.7307716 C20.3551544,7.16057357 16.6051843,3.49896738 12.0000002,3.49896738 C7.30472352,3.49896738 3.49844971,7.30524119 3.49844971,12.0005179 C3.49844971,16.6060394 7.16059249,20.3562216 11.7317296,20.4979161 C12.0124658,21.0381559 12.3673338,21.5337732 12.7825138,21.9716342 C12.5247521,21.9918733 12.2635668,22.0020684 12.0000002,22.0020684 C6.47629639,22.0020684 1.99844971,17.5242217 1.99844971,12.0005179 C1.99844971,6.47681407 6.47629639,1.99896738 12.0000002,1.99896738 Z M17.5,13.9992349 L17.4101244,14.0072906 C17.2060313,14.0443345 17.0450996,14.2052662 17.0080557,14.4093593 L17,14.4992349 L16.9996498,16.9992349 L14.4976498,17 L14.4077742,17.0080557 C14.2036811,17.0450996 14.0427494,17.2060313 14.0057055,17.4101244 L13.9976498,17.5 L14.0057055,17.5898756 C14.0427494,17.7939687 14.2036811,17.9549004 14.4077742,17.9919443 L14.4976498,18 L17.0006498,17.9992349 L17.0011076,20.5034847 L17.0091633,20.5933603 C17.0462073,20.7974534 17.207139,20.9583851 17.411232,20.995429 L17.5011076,21.0034847 L17.5909833,20.995429 C17.7950763,20.9583851 17.956008,20.7974534 17.993052,20.5933603 L18.0011076,20.5034847 L18.0006498,17.9992349 L20.5045655,18 L20.5944411,17.9919443 C20.7985342,17.9549004 20.9594659,17.7939687 20.9965098,17.5898756 L21.0045655,17.5 L20.9965098,17.4101244 C20.9594659,17.2060313 20.7985342,17.0450996 20.5944411,17.0080557 L20.5045655,17 L17.9996498,16.9992349 L18,14.4992349 L17.9919443,14.4093593 C17.9549004,14.2052662 17.7939687,14.0443345 17.5898756,14.0072906 L17.5,13.9992349 Z M8.46174078,14.7838355 C9.12309331,15.6232213 10.0524954,16.1974014 11.0917655,16.4103066 C11.0312056,16.7638158 11,17.1282637 11,17.5 C11,17.6408778 11.0044818,17.7807089 11.0133105,17.9193584 C9.53812034,17.6766509 8.21128537,16.8896809 7.28351576,15.7121597 C7.02716611,15.3868018 7.08310832,14.9152347 7.40846617,14.6588851 C7.73382403,14.4025354 8.20539113,14.4584777 8.46174078,14.7838355 Z M9.00044779,8.75115873 C9.69041108,8.75115873 10.2497368,9.3104845 10.2497368,10.0004478 C10.2497368,10.6904111 9.69041108,11.2497368 9.00044779,11.2497368 C8.3104845,11.2497368 7.75115873,10.6904111 7.75115873,10.0004478 C7.75115873,9.3104845 8.3104845,8.75115873 9.00044779,8.75115873 Z M15.0004478,8.75115873 C15.6904111,8.75115873 16.2497368,9.3104845 16.2497368,10.0004478 C16.2497368,10.6904111 15.6904111,11.2497368 15.0004478,11.2497368 C14.3104845,11.2497368 13.7511587,10.6904111 13.7511587,10.0004478 C13.7511587,9.3104845 14.3104845,8.75115873 15.0004478,8.75115873 Z"
	        })
	      })
	    }), showPicker && isPickerOpen && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	      className: "teemboomReactionPicker",
	      role: "menu",
	      "aria-label": "Choose reaction",
	      ref: pickerPopupRef,
	      children: [options.map(emoji => /*#__PURE__*/jsxRuntimeExports.jsx("button", {
	        type: "button",
	        role: "menuitem",
	        className: `teemboomReactionPickerItem ${myReaction === emoji ? "active" : ""}`,
	        onClick: async () => {
	          await triggerReaction(emoji);
	          setIsPickerOpen(false);
	        },
	        title: `React with ${emoji}`,
	        children: emoji
	      }, emoji)), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
	        type: "button",
	        role: "menuitem",
	        className: "teemboomReactionPickerItem teemboomReactionPickerMoreButton",
	        onClick: () => setIsFullPickerOpen(true),
	        title: "More emojis",
	        "aria-label": "Open full emoji list",
	        children: "\u22EF"
	      })]
	    }), showPicker && isFullPickerOpen && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	      className: "teemboomReactionFullPicker",
	      ref: fullPickerPopupRef,
	      children: /*#__PURE__*/jsxRuntimeExports.jsx(EmojiPickerElement, {
	        onEmojiSelect: async emojiObj => {
	          await triggerReaction(emojiObj.native);
	          setIsFullPickerOpen(false);
	          setIsPickerOpen(false);
	        }
	      })
	    })]
	  });
	}

	const MAX_COMMENT_LENGTH = 5000;
	const MAX_USERNAME_LENGTH = 40;
	function getProfileAvatarColor(name) {
	  const defaultHex = ["FFCC66", "99CCCC", "FF6666", "CC99FF", "4285F4", "FF6666", "66CCCC", "FF9966", "5555FF", "66CC99"];
	  const username = name || "Anonymous";
	  const colorIndex = username.charCodeAt(0) % defaultHex.length;
	  return defaultHex[colorIndex];
	}
	function ProfileAvatar(_ref) {
	  let {
	    name,
	    size = 40
	  } = _ref;
	  const color = getProfileAvatarColor(name);
	  const initial = (name || "A")[0].toUpperCase();
	  return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	    className: "teemboom_profile_avatar",
	    style: {
	      width: `${size}px`,
	      height: `${size}px`,
	      backgroundColor: `#${color}`,
	      display: "flex",
	      alignItems: "center",
	      justifyContent: "center",
	      borderRadius: "50%",
	      color: "#ffffff",
	      fontWeight: "bold",
	      fontSize: `${Math.max(12, size / 2)}px`,
	      flexShrink: 0
	    },
	    children: initial
	  });
	}
	function getUsername(user) {
	  return user?.username || user?.name || "Anonymous";
	}
	function getUserIdentifier(user) {
	  return user?._id || user?.id || user?.user_id || null;
	}
	function normalizeComments() {
	  let comments = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  return [...comments].sort((left, right) => {
	    const leftPinned = Boolean(left?.pinned);
	    const rightPinned = Boolean(right?.pinned);
	    if (leftPinned === rightPinned) {
	      return 0;
	    }
	    return leftPinned ? -1 : 1;
	  });
	}
	const COMMENT_PREVIEW_WORD_LIMIT = 45;
	function buildCommentPreview(content) {
	  let wordLimit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : COMMENT_PREVIEW_WORD_LIMIT;
	  const text = typeof content === "string" ? content.trim() : "";
	  if (!text) {
	    return {
	      previewText: "",
	      hasHiddenText: false
	    };
	  }
	  const wordTokens = text.match(/\S+\s*/g) || [];
	  if (wordTokens.length <= wordLimit) {
	    return {
	      previewText: text,
	      hasHiddenText: false
	    };
	  }
	  return {
	    previewText: `${wordTokens.slice(0, wordLimit).join("").trimEnd()}...`,
	    hasHiddenText: true
	  };
	}
	function ProfileMenu(_ref2) {
	  let {
	    user,
	    authenticationType,
	    onSignIn,
	    onLogout,
	    onClose
	  } = _ref2;
	  const signedIn = authenticationType === "guest" ? true : Boolean(getUserIdentifier(user) && getUsername(user) !== "Anonymous");
	  const heading = signedIn ? getUsername(user) : authenticationType === "username" ? "Set a username" : authenticationType === "guest" ? "Anonymous" : "Not Signed in";
	  const actionLabel = authenticationType === "username" ? "Set username" : "Sign in";
	  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	    className: "teemboom_popup_main",
	    children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
	      className: "teemboom_popup_partition",
	      onClick: onClose
	    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	      className: "teemboom_popup",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
	        className: "teemboom_popup_close",
	        onClick: onClose,
	        children: "x"
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	        id: "teemboom_profile_popup_pfp",
	        style: {
	          marginBottom: "8px"
	        },
	        children: /*#__PURE__*/jsxRuntimeExports.jsx(ProfileAvatar, {
	          name: getUsername(user),
	          size: 48
	        })
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("h6", {
	        style: {
	          margin: "0 0 10px 0",
	          fontSize: "14px"
	        },
	        children: heading
	      }), signedIn && authenticationType !== "guest" ? /*#__PURE__*/jsxRuntimeExports.jsx("button", {
	        type: "button",
	        onClick: onLogout,
	        children: "Log Out"
	      }) : authenticationType !== "guest" ? /*#__PURE__*/jsxRuntimeExports.jsx("button", {
	        type: "button",
	        onClick: onSignIn,
	        children: actionLabel
	      }) : null]
	    })]
	  });
	}
	function AuthFrame(_ref3) {
	  let {
	    url,
	    onClose,
	    hidden = false
	  } = _ref3;
	  return /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
	    children: [!hidden && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	      className: "teemboom_iframe_cover",
	      onClick: onClose
	    }), /*#__PURE__*/jsxRuntimeExports.jsx("iframe", {
	      className: "teemboom_iframe",
	      src: url,
	      title: "teemboom-auth",
	      style: hidden ? {
	        display: "none"
	      } : undefined
	    })]
	  });
	}
	function UsernamePopup(_ref4) {
	  let {
	    value,
	    onChange,
	    onSave,
	    onClose
	  } = _ref4;
	  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	    className: "teemboom_popup_main",
	    children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
	      className: "teemboom_popup_partition",
	      onClick: onClose
	    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	      className: "teemboom_popup",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
	        className: "teemboom_popup_close",
	        onClick: onClose,
	        children: "x"
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("h6", {
	        style: {
	          margin: "0 0 10px 0",
	          fontSize: "14px"
	        },
	        children: "Choose a username"
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
	        type: "text",
	        value: value,
	        maxLength: MAX_USERNAME_LENGTH,
	        placeholder: "Enter username",
	        onChange: event => onChange(event.target.value),
	        onKeyDown: event => {
	          if (event.key === "Enter") {
	            event.preventDefault();
	            onSave();
	          }
	        },
	        style: {
	          width: "100%",
	          marginBottom: "12px",
	          boxSizing: "border-box"
	        },
	        autoFocus: true
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
	        type: "button",
	        onClick: onSave,
	        children: "Save username"
	      })]
	    })]
	  });
	}
	function CommentItem(_ref6) {
	  let {
	    comment,
	    replies,
	    repliesLoaded,
	    hasMoreReplies,
	    loadingMoreReplies,
	    config,
	    userId,
	    onReact,
	    onReplySubmit,
	    onLoadReplies,
	    onLoadMoreReplies
	  } = _ref6;
	  const [showReplies, setShowReplies] = reactExports.useState(false);
	  const [loadingReplies, setLoadingReplies] = reactExports.useState(false);
	  const [replyInput, setReplyInput] = reactExports.useState("");
	  const [sendingReply, setSendingReply] = reactExports.useState(false);
	  const [reactionCounts, setReactionCounts] = reactExports.useState(comment?.reactions || {});
	  const [myReaction, setMyReaction] = reactExports.useState(comment?.my_reaction || null);
	  const [isExpanded, setIsExpanded] = reactExports.useState(false);
	  const commentContent = typeof comment?.content === "string" ? comment.content : "";
	  const {
	    previewText,
	    hasHiddenText
	  } = reactExports.useMemo(() => buildCommentPreview(commentContent), [commentContent]);
	  const canExpand = hasHiddenText;
	  const isCommentExpanded = isExpanded || showReplies;
	  reactExports.useEffect(() => {
	    setReactionCounts(comment?.reactions || {});
	    setMyReaction(comment?.my_reaction || null);
	  }, [comment]);
	  reactExports.useEffect(() => {
	    setIsExpanded(false);
	  }, [comment?._id, commentContent]);
	  const handleToggleReplies = async () => {
	    if (!showReplies && !repliesLoaded) {
	      setLoadingReplies(true);
	      if (onLoadReplies) {
	        await onLoadReplies(comment._id);
	      }
	      setLoadingReplies(false);
	    }
	    setShowReplies(prev => !prev);
	  };
	  const handleReactionClick = async reaction => {
	    if (!onReact) return;
	    const previousReaction = myReaction;
	    const reactionState = await onReact(comment._id, reaction);
	    if (!reactionState) return;
	    setMyReaction(reactionState.reaction || null);
	    if (reactionState.counts && typeof reactionState.counts === "object") {
	      setReactionCounts(reactionState.counts);
	      return;
	    }
	    setReactionCounts(currentCounts => {
	      const nextCounts = {
	        ...(currentCounts || {})
	      };
	      if (reactionState.action === "added") {
	        nextCounts[reaction] = Number(nextCounts[reaction] || 0) + 1;
	      }
	      if (reactionState.action === "removed" && previousReaction) {
	        const updatedCount = Number(nextCounts[previousReaction] || 0) - 1;
	        if (updatedCount > 0) {
	          nextCounts[previousReaction] = updatedCount;
	        } else {
	          delete nextCounts[previousReaction];
	        }
	      }
	      if (reactionState.action === "updated") {
	        if (previousReaction) {
	          const previousCount = Number(nextCounts[previousReaction] || 0) - 1;
	          if (previousCount > 0) {
	            nextCounts[previousReaction] = previousCount;
	          } else {
	            delete nextCounts[previousReaction];
	          }
	        }
	        nextCounts[reaction] = Number(nextCounts[reaction] || 0) + 1;
	      }
	      return nextCounts;
	    });
	  };
	  const handleReplySend = async () => {
	    const content = replyInput.trim();
	    if (!content || sendingReply || !onReplySubmit) return;
	    setSendingReply(true);
	    const createdReply = await onReplySubmit(comment._id, content);
	    setSendingReply(false);
	    if (!createdReply) return;
	    setReplyInput("");
	    setShowReplies(true);
	  };
	  const hasReactions = reactionCounts && Object.values(reactionCounts).some(v => Number(v) > 0);
	  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	    className: `teemboomComment${hasReactions ? " has-reactions" : ""}`,
	    id: comment._id,
	    children: [comment.pinned && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	      className: "teemboomPinned",
	      children: "\uD83D\uDCCC Pinned"
	    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	      className: "teemboomCommentMeta",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
	        className: "teemboomcommentProfilePic",
	        children: /*#__PURE__*/jsxRuntimeExports.jsx(ProfileAvatar, {
	          name: getUsername(comment.user),
	          size: 40
	        })
	      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	        className: "teemboomCommentTitle",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("p", {
	          style: {
	            margin: 0
	          },
	          children: getUsername(comment.user)
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	          children: comment.elasped_time
	        })]
	      }), config?.showReactions && /*#__PURE__*/jsxRuntimeExports.jsx(ReactionsBar, {
	        reactions: reactionCounts,
	        myReaction: myReaction,
	        onReact: handleReactionClick
	      })]
	    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	      className: `teemboomcommentText ${canExpand && !isCommentExpanded ? "collapsed" : ""}`.trim(),
	      children: isCommentExpanded ? commentContent : previewText
	    }), config?.showReactions && hasReactions && /*#__PURE__*/jsxRuntimeExports.jsx(ReactionsBar, {
	      reactions: reactionCounts,
	      myReaction: myReaction,
	      onReact: handleReactionClick,
	      showPicker: false,
	      className: "teemboomReactionsPillsBar"
	    }), canExpand && !showReplies && /*#__PURE__*/jsxRuntimeExports.jsx("button", {
	      type: "button",
	      className: "teemboomReadMoreToggle",
	      onClick: () => setIsExpanded(previous => !previous),
	      "aria-expanded": isExpanded,
	      children: isExpanded ? "Read less" : "Read more..."
	    }), !comment.parent_id && config?.showReplies && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	      className: "teemboomCommentEngage",
	      children: /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	        className: "teemboomReplyButton",
	        onClick: handleToggleReplies,
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("p", {
	          children: "Reply"
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("svg", {
	          width: "16",
	          height: "16",
	          viewBox: "0 0 24 24",
	          fill: "none",
	          children: /*#__PURE__*/jsxRuntimeExports.jsx("path", {
	            d: "M21.0039 12C21.0039 16.9706 16.9745 21 12.0039 21C9.9675 21 3.00463 21 3.00463 21C3.00463 21 4.56382 17.2561 3.93982 16.0008C3.34076 14.7956 3.00391 13.4372 3.00391 12C3.00391 7.02944 7.03334 3 12.0039 3C16.9745 3 21.0039 7.02944 21.0039 12Z",
	            stroke: "var(--teemboom-text)",
	            strokeWidth: "2"
	          })
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	          className: "teemboomReplyNumber",
	          children: comment.replies || 0
	        })]
	      })
	    }), !comment.parent_id && config?.showReplies && showReplies && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	      className: "teemboomReplies",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	        className: "teemboomRepliesInput",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("textarea", {
	          className: "teemboomReplyInput",
	          placeholder: "Leave a reply...",
	          value: replyInput,
	          onChange: event => setReplyInput(event.target.value),
	          onInput: event => {
	            const el = event.target;
	            el.style.height = "auto";
	            const next = Math.min(el.scrollHeight, 100);
	            el.style.height = `${next}px`;
	            el.style.overflowY = el.scrollHeight > 100 ? "auto" : "hidden";
	          },
	          onKeyDown: event => {
	            if (event.key === "Enter" && !event.shiftKey) {
	              event.preventDefault();
	              handleReplySend();
	            }
	          }
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
	          className: "teemboomReplySend",
	          onClick: handleReplySend,
	          disabled: sendingReply,
	          children: "Reply"
	        })]
	      }), loadingReplies ? /*#__PURE__*/jsxRuntimeExports.jsx("p", {
	        className: "teemboomLoading",
	        children: "Loading replies..."
	      }) : replies.length > 0 ? replies.map(reply => /*#__PURE__*/jsxRuntimeExports.jsx(CommentItem, {
	        comment: reply,
	        replies: [],
	        repliesLoaded: false,
	        config: config,
	        userId: userId,
	        onReact: onReact,
	        onReplySubmit: onReplySubmit,
	        onLoadReplies: onLoadReplies,
	        onLoadMoreReplies: onLoadMoreReplies
	      }, reply._id)) : /*#__PURE__*/jsxRuntimeExports.jsx("p", {
	        className: "teemboomNoReplies",
	        children: "No replies yet"
	      }), hasMoreReplies && /*#__PURE__*/jsxRuntimeExports.jsx("button", {
	        type: "button",
	        className: "teemboomLoadMoreReplies",
	        onClick: () => onLoadMoreReplies && onLoadMoreReplies(comment._id),
	        disabled: loadingMoreReplies,
	        children: loadingMoreReplies ? "Loading..." : "Load more replies"
	      })]
	    })]
	  });
	}
	function Widget(_ref7) {
	  let {
	    pageId = "unknown",
	    apiUrl,
	    authUrl,
	    colorMode
	  } = _ref7;
	  const [commentsById, setCommentsById] = reactExports.useState({});
	  const commentsByIdRef = reactExports.useRef({});
	  const [topLevelIds, setTopLevelIds] = reactExports.useState([]);
	  const [replyIdsByParent, setReplyIdsByParent] = reactExports.useState({});
	  const [hasMoreRepliesByParent, setHasMoreRepliesByParent] = reactExports.useState({});
	  const [loadingMoreRepliesByParent, setLoadingMoreRepliesByParent] = reactExports.useState({});
	  const [config, setConfig] = reactExports.useState(null);
	  const [loading, setLoading] = reactExports.useState(true);
	  const [user, setUser] = reactExports.useState(getDefaultUser());
	  const [api, setApi] = reactExports.useState(null);
	  const [webSocket, setWebSocket] = reactExports.useState(null);
	  const [authIframeUrl, setAuthIframeUrl] = reactExports.useState(null);
	  const [authIframeHidden, setAuthIframeHidden] = reactExports.useState(false);
	  const [profileOpen, setProfileOpen] = reactExports.useState(false);
	  const [usernamePopupOpen, setUsernamePopupOpen] = reactExports.useState(false);
	  const [usernameDraft, setUsernameDraft] = reactExports.useState("");
	  const commentInputRef = reactExports.useRef(null);
	  const webSocketRef = reactExports.useRef(null);
	  const rootRef = reactExports.useRef(null);

	  // Resolve the active color mode:
	  // 1. If an explicit colorMode prop is provided, use it.
	  // 2. Fall back to "light".
	  const resolveSystemMode = () => {
	    if (colorMode === "light" || colorMode === "dark") return colorMode;
	    return "light";
	  };
	  const [activeMode, setActiveMode] = reactExports.useState(resolveSystemMode);

	  // Helper: update commentsById state and keep the ref in sync for synchronous reads
	  const updateCommentsById = reactExports.useCallback(updater => {
	    setCommentsById(prev => {
	      const next = typeof updater === "function" ? updater(prev) : updater;
	      commentsByIdRef.current = next;
	      return next;
	    });
	  }, []);

	  // Helper: apply a patch to a single comment in the flat map (top-level or reply)
	  const patchComment = reactExports.useCallback((id, patchFnOrObj) => {
	    updateCommentsById(prev => {
	      if (!prev[id]) return prev;
	      const existing = prev[id];
	      const patched = typeof patchFnOrObj === "function" ? patchFnOrObj(existing) : {
	        ...existing,
	        ...patchFnOrObj
	      };
	      return {
	        ...prev,
	        [id]: patched
	      };
	    });
	  }, [updateCommentsById]);
	  const authenticationType = config?.authentication_type || config?.identification || "guest";
	  const hasAuthenticatedIdentity = authenticationType === "guest" || Boolean(getUserIdentifier(user)) && getUsername(user) !== "Anonymous";
	  const resolvedAuthUrl = reactExports.useMemo(() => {
	    if (authUrl) {
	      return authUrl.replace(/\/$/, "");
	    }
	    if (typeof window !== "undefined") {
	      const host = window.location.host || "";
	      if (host.startsWith("localhost") || host.startsWith("127.0.0.")) {
	        return "http://localhost:5000";
	      }
	    }
	    return "https://auth.teemboom.com";
	  }, [authUrl]);
	  const resolvedApiUrl = reactExports.useMemo(() => {
	    if (apiUrl) {
	      return apiUrl.replace(/\/$/, "");
	    }
	    if (typeof window !== "undefined") {
	      const host = window.location.host || "";
	      if (host.startsWith("localhost") || host.startsWith("127.0.0.")) {
	        return "http://localhost:5003";
	      }
	    }
	    return "https://comments.teemboom.com";
	  }, [apiUrl]);

	  // Initialize API and fetch config
	  reactExports.useEffect(() => {
	    const apiInstance = new CommentAPI({
	      apiUrl
	    });
	    setApi(apiInstance);
	    window.teemboomApi = apiInstance;
	    const fetchConfig = async () => {
	      const cfg = await apiInstance.getConfig(pageId);
	      setConfig(cfg);
	    };
	    fetchConfig();
	  }, [pageId, apiUrl]);

	  // Initialize WebSocket connection if live chat is enabled
	  reactExports.useEffect(() => {
	    if (!config || !config.live_chat) {
	      if (webSocketRef.current) {
	        webSocketRef.current.disconnect();
	        webSocketRef.current = null;
	        setWebSocket(null);
	      }
	      return; // Live chat not enabled
	    }
	    let wsInstance = null;
	    const initializeWebSocket = async () => {
	      try {
	        wsInstance = new CommentWebSocket();
	        await wsInstance.connect();
	        webSocketRef.current = wsInstance;
	        setWebSocket(wsInstance);

	        // Join the room for this page
	        wsInstance.joinRoom(pageId);
	        console.log("WebSocket connected and joined room:", pageId);
	      } catch (error) {
	        console.error("Failed to initialize WebSocket:", error);
	      }
	    };
	    initializeWebSocket();

	    // Cleanup on unmount
	    return () => {
	      if (wsInstance) {
	        wsInstance.disconnect();
	      }
	      if (webSocketRef.current === wsInstance) {
	        webSocketRef.current = null;
	        setWebSocket(null);
	      }
	    };
	  }, [config?.live_chat, pageId]);

	  // Set up WebSocket event handlers for live updates
	  reactExports.useEffect(() => {
	    if (!webSocket) {
	      return;
	    }

	    // Handler for new comments / reactions sent through Go `send_message`
	    const handleReceiveMessage = data => {
	      if (data?.origin_client_id && data.origin_client_id === webSocketRef.current?.clientId) {
	        return;
	      }
	      const eventType = data?.event;
	      if (eventType === "comment_created") {
	        const incomingComment = data?.comment;
	        if (!incomingComment?._id) {
	          return;
	        }
	        if (incomingComment.parent_id) {
	          const parentId = incomingComment.parent_id;
	          // Register the reply object in the flat map
	          updateCommentsById(prev => {
	            if (prev[incomingComment._id]) return prev;
	            return {
	              ...prev,
	              [incomingComment._id]: incomingComment
	            };
	          });
	          // Add to replyIdsByParent only if that parent's replies are already loaded
	          setReplyIdsByParent(prev => {
	            const existing = prev[parentId];
	            if (!Array.isArray(existing)) return prev; // replies not yet loaded — skip list update
	            if (existing.includes(incomingComment._id)) return prev;
	            return {
	              ...prev,
	              [parentId]: [...existing, incomingComment._id]
	            };
	          });
	          // Always increment the visible reply count on the parent
	          patchComment(parentId, c => {
	            const alreadyCounted = Array.isArray(c.live_reply_ids) && c.live_reply_ids.includes(incomingComment._id);
	            if (alreadyCounted) return c;
	            return {
	              ...c,
	              replies: Number(c.replies || 0) + 1,
	              live_reply_ids: [...(c.live_reply_ids || []), incomingComment._id]
	            };
	          });
	          return;
	        }

	        // Top-level comment
	        updateCommentsById(prev => {
	          if (prev[incomingComment._id]) return prev;
	          return {
	            ...prev,
	            [incomingComment._id]: incomingComment
	          };
	        });
	        setTopLevelIds(prev => {
	          if (prev.includes(incomingComment._id)) return prev;
	          // Insert after any pinned comments (new comments are never pinned)
	          const byId = commentsByIdRef.current;
	          const firstNonPinnedIdx = prev.findIndex(id => !byId[id]?.pinned);
	          if (firstNonPinnedIdx === -1) return [...prev, incomingComment._id];
	          const next = [...prev];
	          next.splice(firstNonPinnedIdx, 0, incomingComment._id);
	          return next;
	        });
	        return;
	      }
	      if (eventType === "reaction_updated") {
	        const reactionPayload = data?.reaction;
	        const reactionCommentId = reactionPayload?.comment_id;
	        if (!reactionCommentId) {
	          return;
	        }
	        // patchComment works for both top-level and nested comments
	        patchComment(reactionCommentId, entry => {
	          const nextReactions = reactionPayload?.counts && typeof reactionPayload.counts === "object" ? reactionPayload.counts : entry.reactions;
	          return {
	            ...entry,
	            reactions: nextReactions,
	            my_reaction: reactionPayload?.reaction ?? entry.my_reaction
	          };
	        });
	        return;
	      }
	      if (eventType === "comment_edited") {
	        const commentId = data?.comment_id || data?.comment?._id;
	        const newContent = data?.comment?.content ?? data?.content;
	        if (commentId && newContent !== undefined) {
	          patchComment(commentId, {
	            content: newContent
	          });
	        }
	        return;
	      }
	      if (eventType === "comment_deleted") {
	        const commentId = data?.comment_id;
	        const parentId = data?.parent_id;
	        if (!commentId) return;
	        updateCommentsById(prev => {
	          if (!prev[commentId]) return prev;
	          const next = {
	            ...prev
	          };
	          delete next[commentId];
	          return next;
	        });
	        if (parentId) {
	          setReplyIdsByParent(prev => {
	            if (!Array.isArray(prev[parentId])) return prev;
	            return {
	              ...prev,
	              [parentId]: prev[parentId].filter(id => id !== commentId)
	            };
	          });
	          patchComment(parentId, c => ({
	            ...c,
	            replies: Math.max(0, Number(c.replies || 0) - 1)
	          }));
	        } else {
	          setTopLevelIds(prev => prev.filter(id => id !== commentId));
	        }
	        return;
	      }
	    };

	    // Handler for new rooms (shouldn't be needed typically, but kept for compatibility)
	    const handleNewRoom = data => {
	      console.log("Received new room notification:", data);
	    };

	    // Handler for comment edits (direct message type)
	    const handleEditMessage = data => {
	      console.log("Received comment edit via WebSocket:", data);
	      const commentId = data?._id || data?.comment_id;
	      if (commentId) {
	        patchComment(commentId, {
	          content: data.content
	        });
	      }
	    };

	    // Handler for comment deletions (direct message type)
	    const handleDeleteMessage = data => {
	      console.log("Received comment deletion via WebSocket:", data);
	      const commentId = data?._id || data?.comment_id;
	      const parentId = data?.parent_id || null;
	      if (!commentId) return;
	      updateCommentsById(prev => {
	        if (!prev[commentId]) return prev;
	        const next = {
	          ...prev
	        };
	        delete next[commentId];
	        return next;
	      });
	      if (parentId) {
	        setReplyIdsByParent(prev => {
	          if (!Array.isArray(prev[parentId])) return prev;
	          return {
	            ...prev,
	            [parentId]: prev[parentId].filter(id => id !== commentId)
	          };
	        });
	        patchComment(parentId, c => ({
	          ...c,
	          replies: Math.max(0, Number(c.replies || 0) - 1)
	        }));
	      } else {
	        setTopLevelIds(prev => prev.filter(id => id !== commentId));
	      }
	    };

	    // Register handlers
	    webSocket.on("receive_message", handleReceiveMessage);
	    webSocket.on("new_room", handleNewRoom);
	    webSocket.on("edit_message", handleEditMessage);
	    webSocket.on("delete_message", handleDeleteMessage);

	    // Cleanup handlers on unmount
	    return () => {
	      webSocket.off("receive_message", handleReceiveMessage);
	      webSocket.off("new_room", handleNewRoom);
	      webSocket.off("edit_message", handleEditMessage);
	      webSocket.off("delete_message", handleDeleteMessage);
	    };
	  }, [webSocket]);
	  reactExports.useEffect(() => {
	    const onMessage = event => {
	      if (event?.data?.type === "user_data") {
	        const raw = event.data.payload;
	        if (raw) {
	          // Payload may be a plain string (cookie value) or a full user object
	          if (typeof raw === "string") {
	            setUser({
	              _id: getUserId(),
	              username: raw,
	              profile_pic: null
	            });
	          } else if (raw.username) {
	            setUser({
	              _id: raw._id || getUserId(),
	              username: raw.username,
	              profile_pic: raw.profile_pic || null
	            });
	          }
	        }
	      }
	      if (event?.data?.type === "logout") {
	        if (authenticationType === "username") {
	          setUser(getUsernameUser());
	        } else {
	          setUser(getDefaultUser(authenticationType));
	        }
	      }
	      if (event?.data?.type === "user_data" || event?.data?.type === "logout") {
	        setAuthIframeUrl(null);
	        setProfileOpen(false);
	      }
	    };
	    window.addEventListener("message", onMessage);
	    return () => window.removeEventListener("message", onMessage);
	  }, [authenticationType]);
	  reactExports.useEffect(() => {
	    if (authenticationType === "username") {
	      // Probe username cookie on page load
	      setAuthIframeHidden(true);
	      setAuthIframeUrl(`${resolvedApiUrl}/auth/provide_data?cookie_key=username_auth`);
	      const storedUsername = getStoredUsername();
	      setUsernameDraft(storedUsername);
	      setUser(getUsernameUser());
	      return;
	    }
	    if (authenticationType === "signin") {
	      // Probe signin session on page load
	      setAuthIframeHidden(true);
	      setAuthIframeUrl(`${resolvedApiUrl}/auth/provide_data?cookie_key=signin_auth`);
	      setUser(currentUser => {
	        if (getUserIdentifier(currentUser) && getUsername(currentUser) !== "Anonymous") {
	          return currentUser;
	        }
	        return getDefaultUser("signin");
	      });
	      return;
	    }
	    setAuthIframeUrl(null);
	    setUser(getDefaultUser("guest"));
	  }, [authenticationType, resolvedApiUrl, resolvedAuthUrl]);

	  // Get default user and load comments
	  reactExports.useEffect(() => {
	    if (!api) return;
	    const loadComments = async () => {
	      setLoading(true);
	      const activeUserId = getUserIdentifier(user);
	      const data = await api.getComments(pageId, {
	        filter: config?.filter_by || "oldest",
	        userId: activeUserId
	      });
	      const normalized = normalizeComments(data);
	      const byId = {};
	      const ids = [];
	      normalized.forEach(c => {
	        byId[c._id] = c;
	        ids.push(c._id);
	      });
	      commentsByIdRef.current = byId;
	      setCommentsById(byId);
	      setTopLevelIds(ids);
	      setReplyIdsByParent({});
	      setHasMoreRepliesByParent({});
	      setLoadingMoreRepliesByParent({});
	      setLoading(false);
	    };
	    loadComments();
	  }, [api, pageId, config?.filter_by, user]);

	  // Default to light mode.
	  reactExports.useEffect(() => {
	    if (colorMode === "light" || colorMode === "dark") return;
	    if (typeof window === "undefined" || !window.matchMedia) return;
	    const mq = window.matchMedia("(prefers-color-scheme: dark)");
	    const handler = e => setActiveMode(e.matches ? "dark" : "light");
	    mq.addEventListener("change", handler);
	    return () => mq.removeEventListener("change", handler);
	  }, [colorMode]);

	  // Sync activeMode when the colorMode prop changes from outside.
	  reactExports.useEffect(() => {
	    if (colorMode === "light" || colorMode === "dark") {
	      setActiveMode(colorMode);
	    }
	  }, [colorMode]);
	  reactExports.useEffect(() => {
	    if (!config) {
	      return;
	    }
	    const root = rootRef.current;
	    if (!root) {
	      return;
	    }

	    // Pick the palette for the active mode; fall back to light, then to a flat
	    // colours object for backwards compatibility with pre-dual-theme configs.
	    const allColors = config.colors || {};
	    const palette = allColors[activeMode] || allColors["light"] || allColors;
	    const font = config.font || {};
	    Object.entries(palette).forEach(_ref8 => {
	      let [key, value] = _ref8;
	      root.style.setProperty(`--teemboom-${key}`, String(value));
	    });

	    // Stamp the current mode as a data attribute so CSS can target it if needed.
	    root.setAttribute("data-color-mode", activeMode);
	    if (font.font_family) {
	      root.style.setProperty("--teemboom-font-family", String(font.font_family));
	    }
	    if (font.mobile_font_size) {
	      root.style.setProperty("--teemboom-mobile-font-size", `${font.mobile_font_size}px`);
	    }
	    if (font.tablet_font_size) {
	      root.style.setProperty("--teemboom-tablet-font-size", `${font.tablet_font_size}px`);
	    }
	    if (font.pc_font_size) {
	      root.style.setProperty("--teemboom-pc-font-size", `${font.pc_font_size}px`);
	    }
	  }, [config, activeMode]);
	  const requestSignIn = () => {
	    if (authenticationType === "username") {
	      // Open the username auth page in a visible iframe
	      setAuthIframeHidden(false);
	      setAuthIframeUrl(`${resolvedApiUrl}/auth/username`);
	      return;
	    }
	    if (authenticationType === "signin") {
	      setAuthIframeHidden(false);
	      setAuthIframeUrl(`${resolvedApiUrl}/auth/signin`);
	    }
	  };
	  const requestLogout = () => {
	    if (authenticationType === "username") {
	      // Clear the cookie from the browser directly (it's httponly=false)
	      document.cookie = "username_auth=; Max-Age=0; path=/; SameSite=Lax";
	      clearStoredUsername();
	      setUsernameDraft("");
	      setUser({
	        _id: getUserId(),
	        username: "Anonymous",
	        profile_pic: null
	      });
	      setProfileOpen(false);
	      return;
	    }
	    if (authenticationType === "signin") {
	      setAuthIframeHidden(true);
	      setAuthIframeUrl(`${resolvedApiUrl}/auth/signout`);
	    }
	  };
	  const saveUsername = () => {
	    const normalizedUsername = setStoredUsername(usernameDraft);
	    setUser({
	      _id: user?._id || getDefaultUser("username")._id,
	      username: normalizedUsername || "Anonymous",
	      profile_pic: null
	    });
	    setUsernameDraft(normalizedUsername);
	    setUsernamePopupOpen(false);
	    setProfileOpen(false);
	  };
	  const ensureCanAct = () => {
	    if (authenticationType === "username") {
	      if (getUsername(user) === "Anonymous") {
	        requestSignIn();
	        return false;
	      }
	      return true;
	    }
	    if (authenticationType !== "signin") {
	      return true;
	    }
	    if (hasAuthenticatedIdentity) {
	      return true;
	    }
	    requestSignIn();
	    return false;
	  };
	  const resolveActingUser = () => {
	    if (authenticationType === "username") {
	      return {
	        _id: getUserIdentifier(user) || getUserId(),
	        username: getUsername(user) !== "Anonymous" ? getUsername(user) : getStoredUsername() || "Anonymous",
	        profile_pic: user?.profile_pic || null
	      };
	    }
	    if (authenticationType === "guest") {
	      return getDefaultUser("guest");
	    }
	    if (hasAuthenticatedIdentity) {
	      const userId = getUserIdentifier(user);
	      return {
	        _id: userId,
	        username: getUsername(user),
	        profile_pic: user.profile_pic || null
	      };
	    }
	    return null;
	  };

	  // Lazily load replies for a parent comment (first page)
	  const handleRepliesLoad = reactExports.useCallback(async parentId => {
	    const activeUserId = getUserIdentifier(user);
	    const result = await window.teemboomApi.getNestedComments(parentId, activeUserId, 1, 10);
	    const fetchedReplies = result?.comments || [];
	    const hasMore = Boolean(result?.has_more);
	    updateCommentsById(prev => {
	      const next = {
	        ...prev
	      };
	      fetchedReplies.forEach(r => {
	        next[r._id] = r;
	      });
	      return next;
	    });
	    setReplyIdsByParent(prev => {
	      if (Array.isArray(prev[parentId])) return prev; // already loaded (race guard)
	      return {
	        ...prev,
	        [parentId]: fetchedReplies.map(r => r._id)
	      };
	    });
	    setHasMoreRepliesByParent(prev => ({
	      ...prev,
	      [parentId]: hasMore
	    }));
	  }, [user, updateCommentsById]);

	  // Load the next page of replies for a parent comment
	  const handleLoadMoreReplies = reactExports.useCallback(async parentId => {
	    setLoadingMoreRepliesByParent(prev => ({
	      ...prev,
	      [parentId]: true
	    }));
	    const activeUserId = getUserIdentifier(user);
	    const existingIds = replyIdsByParent[parentId] || [];
	    // Calculate which page to fetch based on how many we already have (10 per page)
	    const nextPage = Math.floor(existingIds.length / 10) + 1;
	    const result = await window.teemboomApi.getNestedComments(parentId, activeUserId, nextPage, 10);
	    const fetchedReplies = result?.comments || [];
	    const hasMore = Boolean(result?.has_more);
	    updateCommentsById(prev => {
	      const next = {
	        ...prev
	      };
	      fetchedReplies.forEach(r => {
	        next[r._id] = r;
	      });
	      return next;
	    });
	    setReplyIdsByParent(prev => {
	      const existing = Array.isArray(prev[parentId]) ? prev[parentId] : [];
	      const newIds = fetchedReplies.map(r => r._id).filter(id => !existing.includes(id));
	      return {
	        ...prev,
	        [parentId]: [...existing, ...newIds]
	      };
	    });
	    setHasMoreRepliesByParent(prev => ({
	      ...prev,
	      [parentId]: hasMore
	    }));
	    setLoadingMoreRepliesByParent(prev => ({
	      ...prev,
	      [parentId]: false
	    }));
	  }, [user, replyIdsByParent, updateCommentsById]);
	  const resizeCommentInput = reactExports.useCallback(textareaElement => {
	    if (!textareaElement) {
	      return;
	    }
	    textareaElement.style.height = "auto";
	    const nextHeight = Math.min(textareaElement.scrollHeight, 100);
	    textareaElement.style.height = `${nextHeight}px`;
	    textareaElement.style.overflowY = textareaElement.scrollHeight > 100 ? "auto" : "hidden";
	  }, []);
	  const handleSend = async function (textarea) {
	    let parentId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	    if (!textarea?.value?.trim() || !api) {
	      return;
	    }
	    const comment = textarea.value;
	    if (comment.length > MAX_COMMENT_LENGTH) {
	      window.alert(`Comments can be up to ${MAX_COMMENT_LENGTH} characters.`);
	      return;
	    }
	    if (!/[A-Za-z0-9]/.test(comment)) {
	      return;
	    }
	    if (!ensureCanAct()) {
	      return;
	    }
	    const actingUser = resolveActingUser();
	    if (!actingUser) {
	      return;
	    }
	    const newComment = await api.postComment(pageId, comment, actingUser, parentId);
	    if (newComment) {
	      if (config?.live_chat && webSocketRef.current?.isConnected()) {
	        webSocketRef.current.broadcastComment(pageId, newComment);
	      }
	      if (!parentId) {
	        updateCommentsById(prev => ({
	          ...prev,
	          [newComment._id]: newComment
	        }));
	        setTopLevelIds(prev => {
	          if (prev.includes(newComment._id)) return prev;
	          const byId = commentsByIdRef.current;
	          if (newComment.pinned) return [newComment._id, ...prev];
	          const firstNonPinnedIdx = prev.findIndex(id => !byId[id]?.pinned);
	          if (firstNonPinnedIdx === -1) return [...prev, newComment._id];
	          const next = [...prev];
	          next.splice(firstNonPinnedIdx, 0, newComment._id);
	          return next;
	        });
	      }
	      // Note: reply additions are handled by handleReplySubmit
	      textarea.value = "";
	      resizeCommentInput(textarea);
	      if (config?.comment_approval && !newComment?.approved) {
	        window.alert("Thank you! Your comment has been submitted and will be reviewed.");
	      }
	    }
	  };
	  const handleReact = async (commentId, reaction) => {
	    if (!api) return null;
	    if (!ensureCanAct()) return null;
	    const actingUser = resolveActingUser();
	    if (!actingUser) return null;
	    const actingUserId = getUserIdentifier(actingUser);
	    if (!actingUserId) return null;
	    const response = await api.reactComment(actingUserId, commentId, reaction);
	    if (!response) return null;

	    // patchComment works for both top-level and nested comments
	    patchComment(commentId, entry => {
	      if (response.counts && typeof response.counts === "object") {
	        return {
	          ...entry,
	          reactions: response.counts,
	          my_reaction: response.reaction || null
	        };
	      }
	      const updatedReactions = {
	        ...(entry.reactions || {})
	      };
	      const previousReaction = entry.my_reaction;
	      if (response.action === "added") {
	        updatedReactions[reaction] = Number(updatedReactions[reaction] || 0) + 1;
	      } else if (response.action === "removed") {
	        if (previousReaction) {
	          const count = Number(updatedReactions[previousReaction] || 0) - 1;
	          if (count > 0) {
	            updatedReactions[previousReaction] = count;
	          } else {
	            delete updatedReactions[previousReaction];
	          }
	        }
	      } else if (response.action === "updated") {
	        if (previousReaction) {
	          const previousCount = Number(updatedReactions[previousReaction] || 0) - 1;
	          if (previousCount > 0) {
	            updatedReactions[previousReaction] = previousCount;
	          } else {
	            delete updatedReactions[previousReaction];
	          }
	        }
	        updatedReactions[reaction] = Number(updatedReactions[reaction] || 0) + 1;
	      }
	      return {
	        ...entry,
	        reactions: updatedReactions,
	        my_reaction: response.reaction || null
	      };
	    });
	    if (config?.live_chat && webSocketRef.current?.isConnected()) {
	      webSocketRef.current.broadcastReaction(pageId, {
	        comment_id: commentId,
	        counts: response?.counts,
	        reaction: response?.reaction,
	        action: response?.action
	      });
	    }
	    return response;
	  };
	  const handleReplySubmit = async (parentId, content) => {
	    if (!content || !api) return null;
	    if (content.length > MAX_COMMENT_LENGTH) {
	      window.alert(`Comments can be up to ${MAX_COMMENT_LENGTH} characters.`);
	      return null;
	    }
	    if (!ensureCanAct()) {
	      return null;
	    }
	    const actingUser = resolveActingUser();
	    if (!actingUser) {
	      return null;
	    }
	    const reply = await api.postComment(pageId, content, actingUser, parentId);
	    if (!reply) return null;
	    if (config?.live_chat && webSocketRef.current?.isConnected()) {
	      webSocketRef.current.broadcastComment(pageId, reply);
	    }

	    // Register the new reply in the flat map
	    updateCommentsById(prev => ({
	      ...prev,
	      [reply._id]: reply
	    }));
	    setReplyIdsByParent(prev => {
	      const existing = Array.isArray(prev[parentId]) ? prev[parentId] : [];
	      if (existing.includes(reply._id)) return prev;
	      return {
	        ...prev,
	        [parentId]: [...existing, reply._id]
	      };
	    });
	    patchComment(parentId, c => ({
	      ...c,
	      replies: Number(c.replies || 0) + 1
	    }));
	    return reply;
	  };
	  if (!config) {
	    return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	      className: "teemboom_container",
	      children: /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	        className: "teemboom_root",
	        children: "Loading configuration..."
	      })
	    });
	  }
	  return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	    className: "teemboom_container",
	    ref: rootRef,
	    children: /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	      className: "teemboom_root",
	      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	        id: "teemboomWriteComment",
	        className: "teemboomWriteComment",
	        children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
	          id: "teemboomMainProfilePic",
	          className: "teemboomMainProfilePic",
	          onClick: () => setProfileOpen(current => !current),
	          children: /*#__PURE__*/jsxRuntimeExports.jsx(ProfileAvatar, {
	            name: getUsername(user),
	            size: 28
	          })
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("textarea", {
	          ref: commentInputRef,
	          id: "teemboomCommentInput",
	          rows: 1,
	          placeholder: authenticationType === "signin" && !hasAuthenticatedIdentity ? "Sign in to leave a comment..." : "Leave a comment...",
	          onInput: event => resizeCommentInput(event.target),
	          onKeyDown: e => {
	            if (e.key === "Enter" && !e.shiftKey) {
	              e.preventDefault();
	              handleSend(e.target);
	            }
	          }
	        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	          className: "teemboomWriteActions",
	          children: /*#__PURE__*/jsxRuntimeExports.jsx("button", {
	            type: "button",
	            className: "teemboomWriteActionSubmit",
	            onClick: () => handleSend(commentInputRef.current),
	            children: "Comment"
	          })
	        })]
	      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	        id: "teemboomCommentsBox",
	        className: "teemboomCommentsBox",
	        children: loading ? /*#__PURE__*/jsxRuntimeExports.jsx("p", {
	          className: "teemboomLoading",
	          children: "Loading comments..."
	        }) : topLevelIds.length > 0 ? topLevelIds.map(commentId => {
	          const comment = commentsById[commentId];
	          if (!comment) return null;
	          const commentReplies = (replyIdsByParent[commentId] || []).map(id => commentsById[id]).filter(Boolean);
	          return /*#__PURE__*/jsxRuntimeExports.jsx(CommentItem, {
	            comment: comment,
	            replies: commentReplies,
	            repliesLoaded: Array.isArray(replyIdsByParent[commentId]),
	            hasMoreReplies: Boolean(hasMoreRepliesByParent[commentId]),
	            loadingMoreReplies: Boolean(loadingMoreRepliesByParent[commentId]),
	            config: config,
	            userId: getUserIdentifier(user),
	            onReact: handleReact,
	            onReplySubmit: handleReplySubmit,
	            onLoadReplies: handleRepliesLoad,
	            onLoadMoreReplies: handleLoadMoreReplies
	          }, commentId);
	        }) : /*#__PURE__*/jsxRuntimeExports.jsx("p", {
	          className: "teemboomNoComments",
	          children: "No comments yet"
	        })
	      }), profileOpen && /*#__PURE__*/jsxRuntimeExports.jsx(ProfileMenu, {
	        user: user,
	        authenticationType: authenticationType,
	        onSignIn: requestSignIn,
	        onLogout: requestLogout,
	        onClose: () => setProfileOpen(false)
	      }), usernamePopupOpen && /*#__PURE__*/jsxRuntimeExports.jsx(UsernamePopup, {
	        value: usernameDraft,
	        onChange: setUsernameDraft,
	        onSave: saveUsername,
	        onClose: () => setUsernamePopupOpen(false)
	      }), authIframeUrl && /*#__PURE__*/jsxRuntimeExports.jsx(AuthFrame, {
	        url: authIframeUrl,
	        hidden: authIframeHidden,
	        onClose: () => setAuthIframeUrl(null)
	      })]
	    })
	  });
	}

	var css_248z = ":host{all:initial}.teemboom_container{container-name:teemboom-widget;container-type:inline-size;display:block;width:100%}.teemboom_root,.teemboom_root *{box-sizing:border-box;font-family:var(--teemboom-font-family,\"Inter\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif)}.teemboom_root{--tb-accent:var(--teemboom-primary,#4f46e5);--tb-accent-soft:color-mix(in srgb,var(--tb-accent) 14%,#fff);--tb-bg:var(--teemboom-main,#fff);--tb-surface:color-mix(in srgb,var(--tb-bg) 96%,#f6f8fb);--tb-surface-strong:color-mix(in srgb,var(--tb-bg) 90%,#eef2ff);--tb-border:color-mix(in srgb,var(--teemboom-border,#cbd5e1) 50%,transparent);--tb-border-strong:color-mix(in srgb,var(--teemboom-border,#94a3b8) 40%,transparent);--tb-text:var(--teemboom-text,#0f172a);--tb-text-muted:var(--teemboom-text_muted,#64748b);--tb-comment-bg:var(--teemboom-comment_bg,#fff);--tb-input-bg:var(--teemboom-input_bg,#fff);--tb-picker-bg:var(--teemboom-picker_bg,#fff);--tb-popup-bg:var(--teemboom-popup_bg,#fff);--tb-comment-text:var(--teemboom-comment_text,#1e293b);--tb-placeholder:var(--teemboom-placeholder,#6b7280);--tb-send-btn-bg:var(--teemboom-send_button_bg,#2563eb);--tb-send-btn-hover:var(--teemboom-send_button_hover_bg,#1d4ed8);--tb-send-btn-text:var(--teemboom-send_button_text,#fff);--tb-cancel-text:var(--teemboom-cancel_text,#374151);--tb-cancel-hover-bg:var(--teemboom-cancel_hover_bg,#f3f4f6);--tb-pinned-text:var(--teemboom-pinned_text,#b45309);--tb-pinned-bg:var(--teemboom-pinned_bg,#fffbeb);--tb-pinned-border:var(--teemboom-pinned_border,#fde68a);border-radius:16px;color:var(--tb-text);display:flex;flex-direction:column;font-size:var(--teemboom-pc-font-size,15px);line-height:1.45;position:relative;width:100%}#teemboomWriteComment,.teemboomWriteComment{align-items:center;background:var(--tb-input-bg);border-bottom:1px solid var(--tb-border);border:1px solid color-mix(in srgb,var(--tb-border) 88%,#d1d5db);border-radius:3px;box-shadow:0 2px 10px rgba(15,23,42,.12);display:flex;gap:10px;margin:14px 0;padding:10px 12px}.teemboomMainProfilePic{cursor:pointer;flex-shrink:0;transition:transform .2s ease}.teemboomMainProfilePic:hover{transform:translateY(-1px)}#teemboomCommentInput{align-self:center;background:transparent;border:none;border-radius:0;flex:1;font-family:inherit;line-height:1.35;margin:0;max-height:100px;min-height:28px;overflow-y:hidden;padding:6px 0;resize:none;transition:color .2s ease,height .08s ease}#teemboomCommentInput,.teemboomUsernameInput{color:var(--tb-text);font-size:.8em;outline:none}.teemboomUsernameInput{background:var(--tb-input-bg);border:1px solid var(--tb-border);border-radius:10px;min-width:0;padding:8px 10px;transition:border-color .15s ease,box-shadow .15s ease;width:140px}.teemboomUsernameInput:focus{border-color:color-mix(in srgb,var(--tb-accent) 45%,#cbd5e1);box-shadow:0 0 0 3px color-mix(in srgb,var(--tb-accent) 12%,transparent)}.teemboomUsernameInput::placeholder{color:var(--tb-placeholder)}#teemboomCommentInput:focus{border:none;box-shadow:none}#teemboomCommentInput::placeholder,.teemboomReplyInput::placeholder{color:var(--tb-placeholder)}.teemboomWriteActions{align-items:center;display:flex;gap:6px;margin-left:auto}.teemboomWriteActionCancel,.teemboomWriteActionSubmit{background:transparent;border:0;border-radius:2px;cursor:pointer;font-size:.67em;font-weight:700;letter-spacing:.02em;padding:6px 8px;text-transform:uppercase;transition:background-color .15s ease,color .15s ease}.teemboomWriteActionCancel{color:var(--tb-cancel-text)}.teemboomWriteActionCancel:hover{background:var(--tb-cancel-hover-bg)}.teemboomWriteActionSubmit{background:var(--tb-send-btn-bg);color:var(--tb-send-btn-text)}.teemboomWriteActionSubmit:hover{background:var(--tb-send-btn-hover)}#teemboomCommentsBox,.teemboomCommentsBox{background:transparent;flex:1;overflow-y:auto;padding:10px 0}.teemboomComment{background:var(--tb-comment-bg);border:1px solid var(--tb-border);border-radius:14px;display:flex;flex-direction:column;gap:9px;margin:0 0 10px;padding:12px;transition:border-color .2s ease,box-shadow .2s ease}.teemboomComment:hover{box-shadow:0 6px 16px rgba(2,8,23,.05)}.teemboomComment:last-child{margin-bottom:12px}.teemboomPinned{background:var(--tb-pinned-bg);border:1px solid var(--tb-pinned-border);border-radius:999px;color:var(--tb-pinned-text);font-size:.8em;font-weight:600;margin-bottom:2px;padding:3px 10px;width:fit-content}.teemboomCommentMeta{align-items:flex-start;display:flex;gap:10px}.teemboomcommentProfilePic{flex-shrink:0}.teemboomCommentTitle{display:flex;flex:1;flex-direction:column;gap:3px}.teemboomCommentTitle p{color:var(--tb-text);font-size:.87em;font-weight:700;margin:0}.teemboomCommentTitle span{color:var(--tb-text-muted);font-size:.8em}.teemboomReactions{align-items:center;display:flex;flex-wrap:wrap;gap:6px;justify-content:flex-end;margin-left:auto;position:relative}.teemboomReactionPickerButton,.teemboomReactionPickerItem,.teemboomReactionPill{background:var(--tb-comment-bg);border:1px solid var(--tb-border);border-radius:999px;cursor:pointer;transition:border-color .2s ease,background-color .2s ease,transform .12s ease}.teemboomReactionPill{align-items:center;display:inline-flex;gap:6px;min-height:30px;padding:4px 8px}.teemboomReactionPickerButton:hover,.teemboomReactionPickerItem:hover,.teemboomReactionPill:hover{background:var(--tb-surface-strong);border-color:color-mix(in srgb,var(--tb-accent) 35%,#cbd5e1)}.teemboomReactionPickerItem.active,.teemboomReactionPill.active{background:color-mix(in srgb,var(--tb-accent) 15%,var(--tb-comment-bg));border-color:color-mix(in srgb,var(--tb-accent) 55%,#cbd5e1)}.teemboomReactionEmoji{font-size:1em;line-height:1}.teemboomReactionCount{color:var(--tb-text-muted);font-size:.8em;font-weight:700;line-height:1}.teemboomReactionPill.active .teemboomReactionCount{color:color-mix(in srgb,var(--tb-accent) 75%,#0f172a)}.teemboomReactionPickerButton{align-items:center;display:inline-flex;font-size:.87em;gap:3px;justify-content:center;min-height:30px;min-width:36px;padding:4px 8px}.teemboomReactionPickerButton.open{background:color-mix(in srgb,var(--tb-accent) 10%,#fff);border-color:color-mix(in srgb,var(--tb-accent) 55%,#cbd5e1)}.teemboomReactionPickerPlus{color:var(--tb-text-muted);font-size:.73em;font-weight:700}.teemboomReactionPicker{background:var(--tb-picker-bg);border:1px solid var(--tb-border);border-radius:12px;box-shadow:0 14px 34px rgba(2,8,23,.18);display:grid;gap:6px;grid-template-columns:repeat(5,minmax(0,1fr));min-width:220px;padding:8px;position:absolute;right:0;top:calc(100% + 8px);z-index:20}.teemboomReactionPickerItem{align-items:center;border-radius:10px;display:inline-flex;font-size:1.2em;height:32px;justify-content:center;width:36px}.teemboomReactionPickerMoreButton{color:var(--tb-text-muted);font-size:1.2em;font-weight:700}.teemboomReactionFullPicker{border-radius:16px;box-shadow:0 16px 48px rgba(2,8,23,.22),0 2px 8px rgba(2,8,23,.08);max-width:min(90vw,360px);overflow:hidden;position:absolute;right:0;top:calc(100% + 8px);z-index:25}.teemboomReactionFullPicker em-emoji-picker{--border-radius:16px;--category-icon-size:18px;--font-family:inherit;--font-size:13px;--shadow:none;border:1px solid var(--tb-border);border-radius:16px;height:400px;max-width:min(90vw,360px);width:100%}.teemboomReactionPickerButton:disabled,.teemboomReactionPickerItem:disabled,.teemboomReactionPill:disabled{cursor:not-allowed;opacity:.5;transform:none}.teemboomReactionsPillsBar{display:none}.teemboomcommentText{color:var(--tb-comment-text);font-size:1em;line-height:1.6;overflow-wrap:anywhere;padding:0 0 0 50px;white-space:pre-wrap;word-break:break-word}.teemboomcommentText.collapsed{max-height:180px;overflow:hidden}.teemboomReadMoreToggle{align-self:flex-start;background:transparent;border:none;color:var(--tb-accent);cursor:pointer;font-size:.8em;font-weight:600;margin-left:50px;padding:0}.teemboomReadMoreToggle:hover{text-decoration:underline}.teemboomCommentEngage{display:flex;gap:12px;margin-top:4px;padding:0 0 0 50px}.teemboomReplyButton{align-items:center;color:var(--tb-text-muted);cursor:pointer;display:flex;font-size:.8em;gap:5px;transition:color .2s ease}.teemboomReplyButton:hover{color:var(--tb-accent)}.teemboomReplyButton p{font-size:1em;font-weight:600;margin:0}.teemboomReplyButton svg{height:14px;width:14px}.teemboomReplyNumber{font-size:1em;font-weight:600;margin-left:2px}.teemboomReplies{border-top:1px dashed var(--tb-border);display:flex;flex-direction:column;gap:8px;margin-left:50px;margin-top:10px;padding:12px 0 0;position:relative}.teemboomRepliesInput{align-items:center;background:var(--tb-input-bg);border:1px solid color-mix(in srgb,var(--tb-border) 88%,#d1d5db);border-radius:3px;box-shadow:0 2px 10px rgba(15,23,42,.12);display:flex;gap:10px;padding:2px 12px;transition:border-color .2s ease,box-shadow .2s ease}.teemboomRepliesInput:focus-within{border-color:color-mix(in srgb,var(--tb-accent) 48%,#94a3b8)}.teemboomReplyInput{align-self:center;background:transparent;border:none;border-radius:0;color:var(--tb-text);flex:1;font-family:inherit;font-size:.8em;height:30px;line-height:1.35;margin:0;max-height:100px;min-height:15px;outline:none;overflow-y:hidden;padding:6px 0;resize:none;transition:color .2s ease,height .08s ease}.teemboomReplyInput:focus{border:none;box-shadow:none}.teemboomReplySend{align-self:center;background:var(--tb-send-btn-bg);border:0;border-radius:2px;color:var(--tb-send-btn-text);cursor:pointer;flex-shrink:0;font-size:.67em;font-weight:700;letter-spacing:.02em;padding:6px 8px;text-transform:uppercase;transition:background-color .15s ease,color .15s ease}.teemboomReplySend:hover{background:var(--tb-send-btn-hover)}.teemboomReplySend:disabled{cursor:not-allowed;opacity:.5}.teemboomComment .teemboomComment{margin:8px 0 0}.teemboomLoadMoreReplies{align-self:flex-start;background:transparent;border:none;color:var(--tb-accent);cursor:pointer;font-size:.8em;font-weight:600;padding:0}.teemboomLoading,.teemboomNoComments,.teemboomNoReplies{color:var(--tb-text-muted);font-size:.87em;margin:0;padding:20px;text-align:center}.teemboom_profile_avatar{align-items:center;border-radius:50%;box-shadow:inset 0 0 0 1px hsla(0,0%,100%,.2),0 4px 12px rgba(0,0,0,.18);color:#fff;display:inline-flex;font-weight:700;justify-content:center;user-select:none}.teemboom_popup_main{inset:0;position:absolute;z-index:200}.teemboom_popup_partition{background:transparent;inset:0;position:absolute}.teemboom_popup{background:var(--tb-popup-bg);border:1px solid var(--tb-border);border-radius:14px;box-shadow:0 18px 40px rgba(2,8,23,.18);left:10px;padding:14px;position:absolute;top:64px;width:240px;z-index:210}.teemboom_popup_close{color:var(--tb-text-muted);cursor:pointer;font-size:1.07em;line-height:1;margin-bottom:8px;text-align:right}.teemboom_popup button{background:var(--tb-surface-strong);border:1px solid color-mix(in srgb,var(--tb-accent) 30%,#cbd5e1);border-radius:10px;color:#111827;cursor:pointer;font-weight:600;padding:8px 12px}.teemboom_iframe_cover{backdrop-filter:blur(2px);background:rgba(15,23,42,.22);inset:0;position:fixed;z-index:998}.teemboom_iframe{background:var(--tb-popup-bg);border:none;border-radius:14px;box-shadow:0 24px 60px rgba(2,8,23,.35);height:500px;left:50%;max-height:90vh;max-width:90vw;position:fixed;top:50%;transform:translate(-50%,-50%);width:400px;z-index:999}#teemboomCommentsBox::-webkit-scrollbar{width:8px}#teemboomCommentsBox::-webkit-scrollbar-track{background:transparent}#teemboomCommentsBox::-webkit-scrollbar-thumb{background:color-mix(in srgb,var(--tb-accent) 28%,#cbd5e1);border-radius:999px}#teemboomCommentsBox::-webkit-scrollbar-thumb:hover{background:color-mix(in srgb,var(--tb-accent) 40%,#94a3b8)}@container teemboom-widget (641px <= width <= 1024px){.teemboom_root{font-size:var(--teemboom-tablet-font-size,14px)}}@container teemboom-widget (width <= 600px){.teemboom_root{border-radius:12px;font-size:var(--teemboom-mobile-font-size,13px)}#teemboomWriteComment,.teemboomWriteComment{align-items:flex-start;flex-wrap:wrap;gap:5px;padding:12px 12px 5px}#teemboomCommentInput{border-bottom:1px solid var(--tb-border);flex:1 1 0;min-width:0}.teemboomWriteActions{display:flex;flex-basis:100%;justify-content:flex-end;padding-left:36px}.teemboomRepliesInput{align-items:flex-start;flex-wrap:wrap;gap:4px;padding-bottom:5px}.teemboomReplyInput{border-bottom:1px solid var(--tb-border);flex:1 1 100%;min-width:0}.teemboomReplySend{margin-left:auto}.teemboomComment{margin:0 0 10px;overflow:visible;padding:10px;position:relative}.teemboomComment.has-reactions{margin-bottom:32px}.teemboomComment.has-reactions:last-child{margin-bottom:52px}.teemboomComment .teemboomComment{margin:8px 0 0;overflow:visible}.teemboomComment .teemboomComment.has-reactions,.teemboomReplies{margin-bottom:15px}.teemboomReplies{margin-left:0;padding-left:0}.teemboomReplies:before{display:none}.teemboomRepliesInput{border-radius:3px}.teemboom_iframe{height:min(85vh,560px);width:calc(100vw - 20px)}.teemboomCommentMeta .teemboomReactions .teemboomReactionPill{display:none}.teemboomReactionsPillsBar{display:flex}.teemboomCommentMeta .teemboomReactions{background:transparent;border:none;border-radius:0;box-shadow:none;flex-wrap:nowrap;margin-left:auto;overflow-x:visible;padding:0}.teemboomReactionsPillsBar{background:var(--tb-comment-bg);border:1px solid var(--tb-border);border-radius:999px;box-shadow:0 2px 10px rgba(2,8,23,.12);flex-wrap:nowrap;justify-content:flex-start;margin-left:0;max-width:calc(100% - 20px);overflow-x:auto;padding:2px 4px;position:absolute;right:0;scrollbar-width:none;top:calc(100% - 13px);z-index:5}.teemboomReactionsPillsBar::-webkit-scrollbar{display:none}.teemboomReactionFullPicker,.teemboomReactionPicker{bottom:auto;left:auto;right:0;top:calc(100% + 8px)}.teemboomReactionFullPicker{max-width:min(90vw,320px)}}@media (prefers-reduced-motion:reduce){.teemboom_root,.teemboom_root *{animation:none!important;transition:none!important}}";

	function generateUUID() {
	  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
	    return crypto.randomUUID();
	  }
	  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
	    const r = Math.random() * 16 | 0;
	    return (c === "x" ? r : r & 0x3 | 0x8).toString(16);
	  });
	}
	let widgetInstance = null;
	function injectShadowStyles(shadowRoot, options) {
	  if (shadowRoot.querySelector("style[data-teem-widget-style]")) {
	    return;
	  }
	  const styleTag = document.createElement("style");
	  styleTag.setAttribute("data-teem-widget-style", "true");
	  styleTag.textContent = options.cssText || css_248z;
	  shadowRoot.appendChild(styleTag);
	}
	function getWidgetInstance() {
	  return widgetInstance;
	}
	function unmountWidget() {
	  if (!widgetInstance) {
	    return;
	  }
	  widgetInstance.root.unmount();
	  widgetInstance.host.remove();
	  widgetInstance = null;
	}
	function generatePageId() {
	  let page_url = `${location.host}${location.pathname}`;
	  if (location.host.startsWith('localhost') || location.host.startsWith('127.0.0.') || location.host.startsWith('file')) {
	    let unique_id = localStorage.getItem('teemboomlocalhost');
	    if (!unique_id) {
	      unique_id = generateUUID();
	      localStorage.setItem('teemboomlocalhost', unique_id);
	    }
	    page_url = `localhost@${unique_id}${location.pathname}`;
	  }
	  return page_url;
	}
	function mountWidget() {
	  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  const target = document.querySelector(options.selector);
	  if (!target) {
	    throw new Error(`TeemWidget: selector not found: ${options.selector}`);
	  }
	  const host = document.createElement("div");
	  host.setAttribute("data-teem-widget-host", "true");
	  target.appendChild(host);
	  const shadowRoot = host.attachShadow({
	    mode: "open"
	  });
	  injectShadowStyles(shadowRoot, options);
	  const appRoot = document.createElement("div");
	  appRoot.setAttribute("data-teem-widget-root", "true");
	  shadowRoot.appendChild(appRoot);
	  const pageId = options.page_id || generatePageId();
	  const root = clientExports.createRoot(appRoot);
	  root.render(/*#__PURE__*/React.createElement(Widget, {
	    pageId: pageId,
	    apiUrl: options.api_url,
	    authUrl: options.auth_url,
	    colorMode: options.color_mode // "light" | "dark" | undefined (default to light)
	  }));
	  widgetInstance = {
	    root,
	    host,
	    shadowRoot,
	    appRoot,
	    options
	  };
	  return widgetInstance;
	}

	/**
	 * Initialize and mount the Teemboom widget
	 * @param {Object} options - Configuration options
	 * @param {string} options.selector - Required: CSS selector for element to mount widget into
	 * @param {string} [options.page_id] - Optional: Unique page identifier. If not provided, auto-generated from URL
	 * @param {"light"|"dark"} [options.color_mode] - Optional: Force a color mode. Omit to auto-detect from system preference (prefers-color-scheme).
	 * @returns {Object} Widget instance
	 */
	function init() {
	  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  if (!options.selector || typeof options.selector !== "string") {
	    throw new Error("TeemboomComments.init requires a valid selector string.");
	  }
	  if (getWidgetInstance()) {
	    unmountWidget();
	  }
	  return mountWidget(options);
	}

	function destroy() {
	  unmountWidget();
	}

	const sdk = {
	  init,
	  destroy
	};
	if (typeof window !== "undefined") {
	  window.TeemboomComments = sdk;
	}

	exports.default = sdk;
	exports.destroy = destroy;
	exports.init = init;

	Object.defineProperty(exports, '__esModule', { value: true });

	return exports;

})({});
