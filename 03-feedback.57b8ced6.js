!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),m=Object.prototype.toString,d=Math.max,g=Math.min,v=function(){return s.Date.now()};function p(e,t,n){var i,o,a,u,f,l,c=0,s=!1,m=!1,p=!0;if("function"!=typeof e)throw new TypeError(r);function T(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,f=setTimeout(w,t),s?T(e):u}function h(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function w(){var e=v();if(h(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-l);return m?g(n,a-(e-c)):n}(e))}function O(e){return f=void 0,p&&i?T(e):(i=o=void 0,u)}function S(){var e=v(),n=h(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(m)return f=setTimeout(w,t),T(l)}return void 0===f&&(f=setTimeout(w,t)),u}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(m="maxWait"in n)?d(b(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},S.flush=function(){return void 0===f?u:O(v())},S}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=a.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:i,maxWait:t,trailing:o})};const T={form:document.querySelector(".feedback-form")},j="feedback-form-state",h={};T.form.addEventListener("submit",(function(e){if(e.preventDefault(),!e.target.message.value||!e.target.email.value)return void Notify.failure("Error. All fields must be filled");const t={email:e.currentTarget.email.value,message:e.currentTarget.message.value};console.log("Send form"),console.log(t),e.currentTarget.reset(),localStorage.removeItem(j)})),T.form.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value;const t=JSON.stringify(h);localStorage.setItem(j,t)}),500)),T.form.addEventListener("input",(e=>{h[e.target.name]=e.target.value})),function(){const e=JSON.parse(localStorage.getItem(j));if(!e)return;e.message&&(T.form.message.value=e.message);e.email&&(T.form.email.value=e.email)}()}();
//# sourceMappingURL=03-feedback.57b8ced6.js.map
