(this["webpackJsonpcloudreve-frontend"]=this["webpackJsonpcloudreve-frontend"]||[]).push([[1],{6453:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"MonacoDiffEditor",{enumerable:!0,get:function(){return o.default}});var r=i(n(7161)),o=i(n(7273));function i(e){return e&&e.__esModule?e:{default:e}}},6538:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(159);function o(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(r.a)(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i,u=!0,a=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return u=e.done,e},e:function(e){a=!0,i=e},f:function(){try{u||null==o.return||o.return()}finally{if(a)throw i}}}}},6541:function(e,t,n){"use strict";var r=n(201);function o(e,t,n){return(o="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(r.a)(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}n.d(t,"a",(function(){return o}))},6703:function(e,t,n){"use strict";var r=n(201),o=n(245);var i=n(6883);function u(e){var t="function"===typeof Map?new Map:void 0;return(u=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,u)}function u(){return Object(i.a)(e,arguments,Object(r.a)(this).constructor)}return u.prototype=Object.create(e.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),Object(o.a)(u,e)})(e)}n.d(t,"a",(function(){return u}))},6883:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(245),o=n(257);function i(e,t,n){return(i=Object(o.a)()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&Object(r.a)(i,n.prototype),i}).apply(null,arguments)}},6922:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.processSize=function(e){return/^\d+$/.test(e)?"".concat(e,"px"):e},t.noop=function(){}},7161:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(6593)),o=a(n(5)),i=a(n(0)),u=n(6922);function a(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(l,e);var t,n,o,a,c=(t=l,function(){var e,n=g(t);if(y()){var r=g(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return d(this,e)});function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),v(h(t=c.call(this,e)),"assignRef",(function(e){t.containerElement=e})),t.containerElement=void 0,t}return n=l,(o=[{key:"componentDidMount",value:function(){this.initMonaco()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.value,o=t.language,i=t.theme,u=t.height,a=t.options,c=t.width,l=this.editor,f=l.getModel();null!=this.props.value&&this.props.value!==f.getValue()&&(this.__prevent_trigger_change_event=!0,this.editor.pushUndoStop(),f.pushEditOperations([],[{range:f.getFullModelRange(),text:n}]),this.editor.pushUndoStop(),this.__prevent_trigger_change_event=!1),e.language!==o&&r.editor.setModelLanguage(f,o),e.theme!==i&&r.editor.setTheme(i),!l||c===e.width&&u===e.height||l.layout(),e.options!==a&&l.updateOptions(a)}},{key:"componentWillUnmount",value:function(){this.destroyMonaco()}},{key:"destroyMonaco",value:function(){if(this.editor){this.editor.dispose();var e=this.editor.getModel();e&&e.dispose()}this._subscription&&this._subscription.dispose()}},{key:"initMonaco",value:function(){var e=null!=this.props.value?this.props.value:this.props.defaultValue,t=this.props,n=t.language,o=t.theme,i=t.options,u=t.overrideServices;this.containerElement&&(Object.assign(i,this.editorWillMount()),this.editor=r.editor.create(this.containerElement,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({value:e,language:n},i,{},o?{theme:o}:{}),u),this.editorDidMount(this.editor))}},{key:"editorWillMount",value:function(){var e=this.props.editorWillMount;return e(r)||{}}},{key:"editorDidMount",value:function(e){var t=this;this.props.editorDidMount(e,r),this._subscription=e.onDidChangeModelContent((function(n){t.__prevent_trigger_change_event||t.props.onChange(e.getValue(),n)}))}},{key:"render",value:function(){var e=this.props,t=e.width,n=e.height,r={width:(0,u.processSize)(t),height:(0,u.processSize)(n)};return i.default.createElement("div",{ref:this.assignRef,style:r,className:"react-monaco-editor-container"})}}])&&s(n.prototype,o),a&&s(n,a),l}(i.default.Component);b.propTypes={width:o.default.oneOfType([o.default.string,o.default.number]),height:o.default.oneOfType([o.default.string,o.default.number]),value:o.default.string,defaultValue:o.default.string,language:o.default.string,theme:o.default.string,options:o.default.object,overrideServices:o.default.object,editorDidMount:o.default.func,editorWillMount:o.default.func,onChange:o.default.func},b.defaultProps={width:"100%",height:"100%",value:null,defaultValue:"",language:"javascript",theme:null,options:{},overrideServices:{},editorDidMount:u.noop,editorWillMount:u.noop,onChange:u.noop};var O=b;t.default=O},7207:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(297),o=n(258),i=n(159),u=n(298);function a(e){return Object(r.a)(e)||Object(o.a)(e)||Object(i.a)(e)||Object(u.a)()}},7251:function(e,t){(function(t){e.exports=t}).call(this,{})},7273:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(6593)),o=a(n(5)),i=a(n(0)),u=n(6922);function a(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(l,e);var t,n,o,a,c=(t=l,function(){var e,n=g(t);if(y()){var r=g(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return d(this,e)});function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),v(h(t=c.call(this,e)),"assignRef",(function(e){t.containerElement=e})),t.containerElement=void 0,t}return n=l,(o=[{key:"componentDidMount",value:function(){this.initMonaco()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.language,o=t.theme,i=t.height,u=t.options,a=t.width,c=this.editor.getModel(),l=c.original,f=c.modified;this.props.original!==l.getValue()&&l.setValue(this.props.original),null!=this.props.value&&this.props.value!==f.getValue()&&(this.__prevent_trigger_change_event=!0,this.editor.modifiedEditor.pushUndoStop(),f.pushEditOperations([],[{range:f.getFullModelRange(),text:this.props.value}]),this.editor.modifiedEditor.pushUndoStop(),this.__prevent_trigger_change_event=!1),e.language!==n&&(r.editor.setModelLanguage(l,n),r.editor.setModelLanguage(f,n)),e.theme!==o&&r.editor.setTheme(o),!this.editor||a===e.width&&i===e.height||this.editor.layout(),e.options!==u&&this.editor.updateOptions(u)}},{key:"componentWillUnmount",value:function(){this.destroyMonaco()}},{key:"editorWillMount",value:function(){var e=this.props.editorWillMount;return e(r)||{}}},{key:"editorDidMount",value:function(e){var t=this;this.props.editorDidMount(e,r);var n=e.getModel().modified;this._subscription=n.onDidChangeContent((function(e){t.__prevent_trigger_change_event||t.props.onChange(n.getValue(),e)}))}},{key:"initModels",value:function(e,t){var n=this.props.language,o=r.editor.createModel(t,n),i=r.editor.createModel(e,n);this.editor.setModel({original:o,modified:i})}},{key:"initMonaco",value:function(){var e=null!=this.props.value?this.props.value:this.props.defaultValue,t=this.props,n=t.original,o=t.theme,i=t.options,u=t.overrideServices;this.containerElement&&(this.editorWillMount(),this.editor=r.editor.createDiffEditor(this.containerElement,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},i,{},o?{theme:o}:{}),u),this.initModels(e,n),this.editorDidMount(this.editor))}},{key:"destroyMonaco",value:function(){if(this.editor){this.editor.dispose();var e=this.editor.getModel(),t=e.original,n=e.modified;t&&t.dispose(),n&&n.dispose()}this._subscription&&this._subscription.dispose()}},{key:"render",value:function(){var e=this.props,t=e.width,n=e.height,r={width:(0,u.processSize)(t),height:(0,u.processSize)(n)};return i.default.createElement("div",{ref:this.assignRef,style:r,className:"react-monaco-editor-container"})}}])&&s(n.prototype,o),a&&s(n,a),l}(i.default.Component);b.propTypes={width:o.default.oneOfType([o.default.string,o.default.number]),height:o.default.oneOfType([o.default.string,o.default.number]),original:o.default.string,value:o.default.string,defaultValue:o.default.string,language:o.default.string,theme:o.default.string,options:o.default.object,overrideServices:o.default.object,editorDidMount:o.default.func,editorWillMount:o.default.func,onChange:o.default.func},b.defaultProps={width:"100%",height:"100%",original:null,value:null,defaultValue:"",language:"javascript",theme:null,options:{},overrideServices:{},editorDidMount:u.noop,editorWillMount:u.noop,onChange:u.noop};var O=b;t.default=O}}]);
//# sourceMappingURL=codeEditor.63db42f1.chunk.js.map