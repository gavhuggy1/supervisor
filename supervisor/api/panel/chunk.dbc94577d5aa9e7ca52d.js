/*! For license information please see chunk.dbc94577d5aa9e7ca52d.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[0],{135:function(t,e,r){"use strict";var n=r(17),o=r(97),i=r(55);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=p(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(r):o.value}})(t,e,r||t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){return function(){var e,r=p(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=p(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return function(t,e){if(e&&("object"===c(e)||"function"==typeof e))return e;return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,e)}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(c,i["a"]);var e,r,n,o=l(c);function c(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),o.apply(this,arguments)}return e=c,(r=[{key:"createRenderRoot",value:function(){return this.attachShadow({mode:"open",delegatesFocus:!0})}},{key:"click",value:function(){this.formElement&&(this.formElement.focus(),this.formElement.click())}},{key:"setAriaLabel",value:function(t){this.formElement&&this.formElement.setAttribute("aria-label",t)}},{key:"firstUpdated",value:function(){var t=this;u(p(c.prototype),"firstUpdated",this).call(this),this.mdcRoot.addEventListener("change",function(e){t.dispatchEvent(new Event("change",e))})}}])&&a(e.prototype,r),n&&a(e,n),c}(),d=r(119),h=r(59),y=r(80),m={CHECKED:"mdc-switch--checked",DISABLED:"mdc-switch--disabled"},b={ARIA_CHECKED_ATTR:"aria-checked",NATIVE_CONTROL_SELECTOR:".mdc-switch__native-control",RIPPLE_SURFACE_SELECTOR:".mdc-switch__thumb-underlay"},_=function(t){function e(r){return t.call(this,n.a({},e.defaultAdapter,r))||this}return n.c(e,t),Object.defineProperty(e,"strings",{get:function(){return b},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return m},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlChecked:function(){},setNativeControlDisabled:function(){},setNativeControlAttr:function(){}}},enumerable:!0,configurable:!0}),e.prototype.setChecked=function(t){this.adapter_.setNativeControlChecked(t),this.updateAriaChecked_(t),this.updateCheckedStyling_(t)},e.prototype.setDisabled=function(t){this.adapter_.setNativeControlDisabled(t),t?this.adapter_.addClass(m.DISABLED):this.adapter_.removeClass(m.DISABLED)},e.prototype.handleChange=function(t){var e=t.target;this.updateAriaChecked_(e.checked),this.updateCheckedStyling_(e.checked)},e.prototype.updateCheckedStyling_=function(t){t?this.adapter_.addClass(m.CHECKED):this.adapter_.removeClass(m.CHECKED)},e.prototype.updateAriaChecked_=function(t){this.adapter_.setNativeControlAttr(b.ARIA_CHECKED_ATTR,""+!!t)},e}(y.a);function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(['\n      <div class="mdc-switch">\n        <div class="mdc-switch__track"></div>\n        <div class="mdc-switch__thumb-underlay" .ripple="','">\n          <div class="mdc-switch__thumb">\n            <input\n              type="checkbox"\n              id="basic-switch"\n              class="mdc-switch__native-control"\n              role="switch"\n              @change="','">\n          </div>\n        </div>\n      </div>\n      <slot></slot>']);return w=function(){return t},t}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function S(t,e){return(S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function k(t){return function(){var e,r=O(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=O(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return function(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,e)}}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}(a,f);var e,r,n,c=k(a);function a(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(t=c.apply(this,arguments)).checked=!1,t.disabled=!1,t.mdcFoundationClass=_,t}return e=a,(r=[{key:"_changeHandler",value:function(t){this.mdcFoundation.handleChange(t),this.checked=this.formElement.checked}},{key:"createAdapter",value:function(){var t=this;return Object.assign(Object.assign({},Object(i.b)(this.mdcRoot)),{setNativeControlChecked:function(e){t.formElement.checked=e},setNativeControlDisabled:function(e){t.formElement.disabled=e},setNativeControlAttr:function(e,r){t.formElement.setAttribute(e,r)}})}},{key:"render",value:function(){return Object(o.c)(w(),Object(h.a)({interactionNode:this}),this._changeHandler)}},{key:"ripple",get:function(){return this.rippleNode.ripple}}])&&g(e.prototype,r),n&&g(e,n),a}();Object(n.b)([Object(o.d)({type:Boolean}),Object(d.a)(function(t){this.mdcFoundation.setChecked(t)})],P.prototype,"checked",void 0),Object(n.b)([Object(o.d)({type:Boolean}),Object(d.a)(function(t){this.mdcFoundation.setDisabled(t)})],P.prototype,"disabled",void 0),Object(n.b)([Object(o.e)(".mdc-switch")],P.prototype,"mdcRoot",void 0),Object(n.b)([Object(o.e)("input")],P.prototype,"formElement",void 0),Object(n.b)([Object(o.e)(".mdc-switch__thumb-underlay")],P.prototype,"rippleNode",void 0);var C=r(96);function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function R(t,e){return(R=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function x(t){return function(){var e,r=E(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=E(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return function(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,e)}}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&R(t,e)}(r,P);var e=x(r);function r(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),e.apply(this,arguments)}return r}();A.styles=C.a,A=Object(n.b)([Object(o.b)("mwc-switch")],A)},96:function(t,e,r){"use strict";r.d(e,"a",function(){return i});var n=r(97);function o(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(['.mdc-switch__thumb-underlay{left:-18px;right:initial;top:-17px;width:48px;height:48px}[dir=rtl] .mdc-switch__thumb-underlay,.mdc-switch__thumb-underlay[dir=rtl]{left:initial;right:-18px}.mdc-switch__native-control{width:68px;height:48px}.mdc-switch{display:inline-block;position:relative;outline:none;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;border-color:#fff}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;margin:0;opacity:0;cursor:pointer;pointer-events:auto;transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-switch__native-control,.mdc-switch__native-control[dir=rtl]{left:initial;right:0}.mdc-switch__track{box-sizing:border-box;width:32px;height:14px;border:1px solid;border-radius:7px;opacity:.38;transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1);border-color:transparent}.mdc-switch__thumb-underlay{display:flex;position:absolute;align-items:center;justify-content:center;transform:translateX(0);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:.54}.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(20px)}[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay,.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl]{transform:translateX(-20px)}.mdc-switch--checked .mdc-switch__native-control{transform:translateX(-20px)}[dir=rtl] .mdc-switch--checked .mdc-switch__native-control,.mdc-switch--checked .mdc-switch__native-control[dir=rtl]{transform:translateX(20px)}.mdc-switch--disabled{opacity:.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay::before,.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay::after{background-color:#9e9e9e}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:hover::before{opacity:.08}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused::before,.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-switch__thumb-underlay{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-switch__thumb-underlay::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::before,.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch__thumb-underlay:hover::before{opacity:.04}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused::before,.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}:host{outline:none}']);return o=function(){return t},t}var i=Object(n.a)(o())},97:function(t,e,r){"use strict";var n=r(33);function o(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||i(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){if(t){if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e,r,n,o,i,c){try{var a=t[i](c),u=a.value}catch(s){return void r(s)}a.done?e(u):Promise.resolve(u).then(n,o)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function l(t){return function(){var e,r=y(t);if(d()){var n=y(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return function(t,e){if(e&&("object"===a(e)||"function"==typeof e))return e;return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,e)}}function p(t){var e="function"==typeof Map?new Map:void 0;return(p=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return f(t,arguments,y(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),h(n,t)})(t)}function f(t,e,r){return(f=d()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&h(o,r.prototype),o}).apply(null,arguments)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}window.JSCompiler_renameProperty=function(t,e){return t};var m={toAttribute:function(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute:function(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},b=function(t,e){return e!==t&&(e==e||t==t)},_={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:b},v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(f,p(HTMLElement));var e,r,n,c=l(f);function f(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),(t=c.call(this))._updateState=0,t._instanceProperties=void 0,t._updatePromise=new Promise(function(e){return t._enableUpdatingResolver=e}),t._changedProperties=new Map,t._reflectingProperties=void 0,t.initialize(),t}return e=f,r=[{key:"initialize",value:function(){this._saveInstanceProperties(),this._requestUpdate()}},{key:"_saveInstanceProperties",value:function(){var t=this;this.constructor._classProperties.forEach(function(e,r){if(t.hasOwnProperty(r)){var n=t[r];delete t[r],t._instanceProperties||(t._instanceProperties=new Map),t._instanceProperties.set(r,n)}})}},{key:"_applyInstanceProperties",value:function(){var t=this;this._instanceProperties.forEach(function(e,r){return t[r]=e}),this._instanceProperties=void 0}},{key:"connectedCallback",value:function(){this.enableUpdating()}},{key:"enableUpdating",value:function(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}},{key:"disconnectedCallback",value:function(){}},{key:"attributeChangedCallback",value:function(t,e,r){e!==r&&this._attributeToProperty(t,r)}},{key:"_propertyToAttribute",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:_,n=this.constructor,o=n._attributeNameForProperty(t,r);if(void 0!==o){var i=n._propertyValueToAttribute(e,r);if(void 0===i)return;this._updateState=8|this._updateState,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._updateState=-9&this._updateState}}},{key:"_attributeToProperty",value:function(t,e){if(!(8&this._updateState)){var r=this.constructor,n=r._attributeToPropertyMap.get(t);if(void 0!==n){var o=r.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=r._propertyValueFromAttribute(e,o),this._updateState=-17&this._updateState}}}},{key:"_requestUpdate",value:function(t,e){var r=!0;if(void 0!==t){var n=this.constructor,o=n.getPropertyOptions(t);n._valueHasChanged(this[t],e,o.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,o))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}},{key:"requestUpdate",value:function(t,e){return this._requestUpdate(t,e),this.updateComplete}},{key:"_enqueueUpdate",value:function(){var t,e=(t=regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._updateState=4|this._updateState,t.prev=1,t.next=4,this._updatePromise;case 4:t.next=8;break;case 6:t.prev=6,t.t0=t.catch(1);case 8:if(null==(e=this.performUpdate())){t.next=12;break}return t.next=12,e;case 12:return t.abrupt("return",!this._hasRequestedUpdate);case 13:case"end":return t.stop()}},t,this,[[1,6]])}),function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function c(t){u(i,n,o,c,a,"next",t)}function a(t){u(i,n,o,c,a,"throw",t)}c(void 0)})});return function(){return e.apply(this,arguments)}}()},{key:"performUpdate",value:function(){this._instanceProperties&&this._applyInstanceProperties();var t=!1,e=this._changedProperties;try{(t=this.shouldUpdate(e))?this.update(e):this._markUpdated()}catch(r){throw t=!1,this._markUpdated(),r}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}},{key:"_markUpdated",value:function(){this._changedProperties=new Map,this._updateState=-5&this._updateState}},{key:"_getUpdateComplete",value:function(){return this._updatePromise}},{key:"shouldUpdate",value:function(t){return!0}},{key:"update",value:function(t){var e=this;void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(function(t,r){return e._propertyToAttribute(r,e[r],t)}),this._reflectingProperties=void 0),this._markUpdated()}},{key:"updated",value:function(t){}},{key:"firstUpdated",value:function(t){}},{key:"_hasRequestedUpdate",get:function(){return 4&this._updateState}},{key:"hasUpdated",get:function(){return 1&this._updateState}},{key:"updateComplete",get:function(){return this._getUpdateComplete()}}],n=[{key:"_ensureClassProperties",value:function(){var t=this;if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;var e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(function(e,r){return t._classProperties.set(r,e)})}}},{key:"createProperty",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_;if(this._ensureClassProperties(),this._classProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){var r="symbol"===a(t)?Symbol():"__".concat(t),n=this.getPropertyDescriptor(t,r,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}},{key:"getPropertyDescriptor",value:function(t,e,r){return{get:function(){return this[e]},set:function(r){var n=this[t];this[e]=r,this._requestUpdate(t,n)},configurable:!0,enumerable:!0}}},{key:"getPropertyOptions",value:function(t){return this._classProperties&&this._classProperties.get(t)||_}},{key:"finalize",value:function(){var t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){var e,r=this.properties,n=function(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=i(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,c=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){a=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(a)throw o}}}}([].concat(o(Object.getOwnPropertyNames(r)),o("function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(r):[])));try{for(n.s();!(e=n.n()).done;){var c=e.value;this.createProperty(c,r[c])}}catch(a){n.e(a)}finally{n.f()}}}},{key:"_attributeNameForProperty",value:function(t,e){var r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}},{key:"_valueHasChanged",value:function(t,e){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:b)(t,e)}},{key:"_propertyValueFromAttribute",value:function(t,e){var r=e.type,n=e.converter||m,o="function"==typeof n?n:n.fromAttribute;return o?o(t,r):t}},{key:"_propertyValueToAttribute",value:function(t,e){if(void 0!==e.reflect){var r=e.type,n=e.converter;return(n&&n.toAttribute||m.toAttribute)(t,r)}}},{key:"observedAttributes",get:function(){var t=this;this.finalize();var e=[];return this._classProperties.forEach(function(r,n){var o=t._attributeNameForProperty(n,r);void 0!==o&&(t._attributeToPropertyMap.set(o,n),e.push(o))}),e}}],r&&s(e.prototype,r),n&&s(e,n),f}();v.finalized=!0;var w=function(t){return function(e){return"function"==typeof e?function(t,e){return window.customElements.define(t,e),e}(t,e):function(t,e){return{kind:e.kind,elements:e.elements,finisher:function(e){window.customElements.define(t,e)}}}(t,e)}},g=function(t,e){return"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer:function(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher:function(r){r.createProperty(e.key,t)}}:Object.assign(Object.assign({},e),{finisher:function(r){r.createProperty(e.key,t)}})},S=function(t,e,r){e.constructor.createProperty(r,t)};function k(t){return function(e,r){return void 0!==r?S(t,e,r):g(t,e)}}function O(t){return function(e,r){var n={get:function(){return this.renderRoot.querySelector(t)},enumerable:!0,configurable:!0};return void 0!==r?P(n,e,r):C(n,e)}}var P=function(t,e,r){Object.defineProperty(e,r,t)},C=function(t,e){return{kind:"method",placement:"prototype",key:e.key,descriptor:t}};var j=r(6);function R(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var x="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,E=Symbol(),A=function(){function t(e,r){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r!==E)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}var e,r,n;return e=t,(r=[{key:"toString",value:function(){return this.cssText}},{key:"styleSheet",get:function(){return void 0===this._styleSheet&&(x?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}}])&&R(e.prototype,r),n&&R(e,n),t}(),T=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var o=r.reduce(function(e,r,n){return e+function(t){if(t instanceof A)return t.cssText;if("number"==typeof t)return t;throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(t,". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."))}(r)+t[n+1]},t[0]);return new A(o,E)};function U(t){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function z(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function D(t,e,r){return(D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=q(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(r):o.value}})(t,e,r||t)}function N(t,e){return(N=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function I(t){return function(){var e,r=q(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=q(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return function(t,e){if(e&&("object"===U(e)||"function"==typeof e))return e;return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,e)}}function q(t){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r.d(e,"b",function(){return w}),r.d(e,"d",function(){return k}),r.d(e,"e",function(){return O}),r.d(e,"c",function(){return j.f}),r.d(e,"a",function(){return T}),(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");var F={},M=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&N(t,e)}(i,v);var e,r,n,o=I(i);function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),o.apply(this,arguments)}return e=i,n=[{key:"getStyles",value:function(){return this.styles}},{key:"_getUniqueStyles",value:function(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_styles",this))){var t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){var e=function t(e,r){return e.reduceRight(function(e,r){return Array.isArray(r)?t(r,e):(e.add(r),e)},r)}(t,new Set),r=[];e.forEach(function(t){return r.unshift(t)}),this._styles=r}else this._styles=[t]}}}],(r=[{key:"initialize",value:function(){D(q(i.prototype),"initialize",this).call(this),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}},{key:"createRenderRoot",value:function(){return this.attachShadow({mode:"open"})}},{key:"adoptStyles",value:function(){var t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?x?this.renderRoot.adoptedStyleSheets=t.map(function(t){return t.styleSheet}):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(function(t){return t.cssText}),this.localName))}},{key:"connectedCallback",value:function(){D(q(i.prototype),"connectedCallback",this).call(this),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}},{key:"update",value:function(t){var e=this,r=this.render();D(q(i.prototype),"update",this).call(this,t),r!==F&&this.constructor.render(r,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(function(t){var r=document.createElement("style");r.textContent=t.cssText,e.renderRoot.appendChild(r)}))}},{key:"render",value:function(){return F}}])&&z(e.prototype,r),n&&z(e,n),i}();M.finalized=!0,M.render=n.a}}]);
//# sourceMappingURL=chunk.dbc94577d5aa9e7ca52d.js.map