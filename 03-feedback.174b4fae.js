!function(){function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return s.Date.now()};function m(t,e,n){var o,i,u,f,a,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof t)throw new TypeError(r);function j(e){var n=o,r=i;return o=i=void 0,l=e,f=t.apply(r,n)}function S(t){return l=t,a=setTimeout(h,e),s?j(t):f}function T(t){var n=t-c;return void 0===c||n>=e||n<0||d&&t-l>=u}function h(){var t=p();if(T(t))return w(t);a=setTimeout(h,function(t){var n=e-(t-c);return d?g(n,u-(t-l)):n}(t))}function w(t){return a=void 0,m&&o?j(t):(o=i=void 0,f)}function O(){var t=p(),n=T(t);if(o=arguments,i=this,c=t,n){if(void 0===a)return S(c);if(d)return a=setTimeout(h,e),j(c)}return void 0===a&&(a=setTimeout(h,e)),f}return e=b(e)||0,y(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(b(n.maxWait)||0,e):u,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=i=a=void 0},O.flush=function(){return void 0===a?f:w(p())},O}function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=u.test(t);return n||f.test(t)?a(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var o=!0,i=!0;if("function"!=typeof t)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),m(t,e,{leading:o,maxWait:e,trailing:i})};const j=document.querySelector(".feedback-form"),S=document.querySelector(".feedback-form textarea"),T="feedback-form-state";let h={};j.addEventListener("submit",(function(t){t.preventDefault(),console.log(h),t.currentTarget.reset(),localStorage.removeItem(T),h={}})),S.addEventListener("input",t(e)((function(t){let e=t.target.value;localStorage.setItem(T,e)}),500)),j.addEventListener("input",t(e)((function(t){h[t.target.name]=t.target.value,localStorage.setItem(T,JSON.stringify(h))}),500)),function(){let t=JSON.parse(localStorage.getItem(T));for(const e in t)e&&(j[e].value=t[e],h=t)}()}();
//# sourceMappingURL=03-feedback.174b4fae.js.map