function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,g=function(){return l.Date.now()};function v(e,t,n){var o,r,i,a,f,u,c=0,l=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,f=setTimeout(j,t),l?y(e):a}function k(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=i}function j(){var e=g();if(k(e))return I(e);f=setTimeout(j,function(e){var n=t-(e-u);return d?m(n,i-(e-c)):n}(e))}function I(e){return f=void 0,v&&o?y(e):(o=r=void 0,a)}function T(){var e=g(),n=k(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return S(u);if(d)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=p(t)||0,b(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(p(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},T.flush=function(){return void 0===f?a:I(g())},T}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form"),S=document.querySelector(".feedback-form textarea"),k=document.querySelector(".feedback-form input"),j={};y.addEventListener("submit",(function(e){e.preventDefault(),console.log("Отправка формы"),e.currentTarget.reset();const t=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(t),localStorage.removeItem("feedback-msg"),localStorage.removeItem("feedback-email"),localStorage.removeItem("feedback-form-state")})),S.addEventListener("input",e(t)((function(e){const t=e.target.value;localStorage.setItem("feedback-msg",t)}),500)),k.addEventListener("input",e(t)((function(e){const t=e.target.value;localStorage.setItem("feedback-email",t)}),500)),y.addEventListener("input",(e=>{j[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))})),k.addEventListener("input",(e=>{}));!function(){const e=localStorage.getItem("feedback-msg"),t=localStorage.getItem("feedback-email");t&&console.log(e,t);S.value=e,k.value=t}();
//# sourceMappingURL=03-feedback.4a2bf525.js.map
