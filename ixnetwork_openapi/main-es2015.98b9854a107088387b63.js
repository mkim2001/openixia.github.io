(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"app-container\">\n    <div class='title'>\n        IxNetwork ResourceManager OpenAPI Specification\n        <div style=\"float:right; padding-right: 10px; margin-bottom: 3px;\">\n            <span class='link' (click)=onNotes($event)>overview</span>\n            <span class='link' (click)=onImportConfig($event)>importConfig schema</span>\n            <span class='link' (click)=onDownload($event)>download specification</span>\n        </div>\n    </div>\n    <div class=\"header\">\n        <div style=\"float: left; font-weight: bold;\">Schema Objects</div>\n        <div style=\"float:right; padding-right: 10px; margin-top: 3px;\">\n            <span class='link' (click)=onOpenApi($event)>schema object</span>\n            <span class='link' (click)=onRestpy($event)>ixnetwork-restpy sample</span>\n            <span class='link' (click)=onRequests($event)>python requests sample</span>\n        </div>\n    </div>\n    <as-split #splitter class=\"split\">\n        <as-split-area size=\"20\">\n            <div class=\"tree\">\n                <tree-root #tree [focused]=\"true\" [options]=\"options\" [nodes]=\"nodes\" (activate)=\"onActivate($event)\">\n                    <!-- <ng-template #treeNodeTemplate let-node let-index=\"index\">\n                        </ng-template> -->\n                </tree-root>\n            </div>\n        </as-split-area>\n        <as-split-area size=\"80\" style=\"height: 90%;\">\n            <ace *ngIf=\"isEditor\" [config]=\"config\" [value]=\"sample\" #editor class=\"sample-code\"></ace>\n            <markdown *ngIf=\"!isEditor\" class=\"notes\" [data]=\"overview\">\n            </markdown>\n        </as-split-area>\n    </as-split>\n</div>\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tree-children.tree-children-no-padding { padding-left: 0 }\n.tree-children { padding-left: 20px; overflow: hidden }\n.node-drop-slot { display: block; height: 2px }\n.node-drop-slot.is-dragging-over { background: #ddffee; height: 20px; border: 2px dotted #888; }\n.toggle-children-wrapper-expanded .toggle-children { -webkit-transform: rotate(90deg); transform: rotate(90deg) }\n.toggle-children-wrapper-collapsed .toggle-children { -webkit-transform: rotate(0); transform: rotate(0); }\n.toggle-children-wrapper {\n  padding: 2px 3px 5px 1px;\n}\n/* tslint:disable */\n.toggle-children {\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzRkRFQjcxODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzRkRFQjcwODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTk5NzA1OGEtZDI3OC00NDZkLWE4ODgtNGM4MGQ4YWI1NzNmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRkZmQxMGMtY2NlNS0xMTc4LWE5OGQtY2NkZmM5ODk5YWYwIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uczwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5iogFwAAAGhJREFUeNpiYGBgKABigf///zOQg0EARH4A4gZyDIIZ8B/JoAJKDIDhB0CcQIkBRBtEyABkgxwoMQCGD6AbRKoBGAYxQgXIBRuZGKgAKPIC3QLxArnRSHZCIjspk52ZKMrOFBUoAAEGAKnq593MQAZtAAAAAElFTkSuQmCC');\n  height: 8px;\n  width: 9px;\n  background-size: contain;\n  display: inline-block;\n  position: relative;\n  top: 1px;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.toggle-children-placeholder {\n  display: inline-block;\n  height: 10px;\n  width: 10px;\n  position: relative;\n  top: 1px;\n  padding-right: 3px;\n}\n.node-content-wrapper {\n  display: inline-block;\n  padding: 2px 5px;\n  border-radius: 2px;\n  -webkit-transition: background-color .15s,box-shadow .15s;\n  transition: background-color .15s,box-shadow .15s;\n}\n.node-wrapper {display: -webkit-box;display: flex; -webkit-box-align: start; align-items: flex-start;}\n.node-content-wrapper-active,\n.node-content-wrapper.node-content-wrapper-active:hover,\n.node-content-wrapper-active.node-content-wrapper-focused {\n  background: #beebff;\n}\n.node-content-wrapper-focused { background: #e7f4f9 }\n.node-content-wrapper:hover { background: #f7fbff }\n.node-content-wrapper-active, .node-content-wrapper-focused, .node-content-wrapper:hover {\n  box-shadow: inset 0 0 1px #999;\n}\n.node-content-wrapper.is-dragging-over { background: #ddffee; box-shadow: inset 0 0 1px #999; }\n.node-content-wrapper.is-dragging-over-disabled { opacity: 0.5 }\ntree-viewport {\n  -webkit-tap-highlight-color: transparent;\n  height: 100%;\n  overflow: auto;\n  display: block;\n}\n.tree-children { padding-left: 20px }\n.empty-tree-drop-slot .node-drop-slot { height: 20px; min-width: 100px }\n.angular-tree-component {\n  width: 100%;\n  position:relative;\n  display: inline-block;\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none;   /* Chrome/Safari/Opera */    /* Konqueror */\n  -moz-user-select: none;      /* Firefox */\n  -ms-user-select: none;       /* IE/Edge */\n  user-select: none;           /* non-prefixed version, currently not supported by any browser */\n}\ntree-root .angular-tree-component-rtl {\n  direction: rtl;\n}\ntree-root .angular-tree-component-rtl .toggle-children-wrapper-collapsed .toggle-children {\n  -webkit-transform: rotate(180deg) !important;\n          transform: rotate(180deg) !important;\n}\ntree-root .angular-tree-component-rtl .tree-children {\n  padding-right: 20px;\n  padding-left: 0;\n}\ntree-node-checkbox {\n  padding: 1px;\n}\n/* You can add global styles to this file, and also import other style files */\nhtml, body {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n}\n.app-container {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.link {\n  cursor: pointer;\n  font: normal 16px arial;\n  color: #005ae6;\n  background-color: lightgray;\n  margin-right: 5px;\n  border-style: solid;\n  border-radius: 5px;\n  border-color: black;\n  padding: 3px 3px 3px 3px;\n}\npre {\n  margin: 0;\n  background-color: white;\n  font: normal 14px arial;\n  white-space: pre-wrap !important;\n  word-wrap: break-word;\n}\n.scrolling-outer-container {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.scrolling-inner-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n}\n.split {\n  padding-right: 5px;\n}\n.title {\n  font: normal 28px arial;\n  background-color: orange;\n  padding-left: 5px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n.header {\n  font: normal 16px arial;\n  height: 30px;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-top: 10px;\n}\n.tree {\n  font: normal 14px arial;\n  height: 90%;\n  width: 100%;\n  padding-left: 10px;\n}\n.sample-code {\n  width: 100%;\n}\n.notes {\n  font: normal 16px arial;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9hbmd1bGFyLXRyZWUtY29tcG9uZW50L2Rpc3QvYW5ndWxhci10cmVlLWNvbXBvbmVudC5jc3MiLCJzcmMvYXBwL0M6XFxVc2Vyc1xcYW5iYWxvZ2hcXERvY3VtZW50c1xcZ2l0c3dhcm1cXGl4bmV0d29yay1vcGVuYXBpXFx3ZWJhcHAvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9DOlxcVXNlcnNcXGFuYmFsb2doXFxEb2N1bWVudHNcXGdpdHN3YXJtXFxpeG5ldHdvcmstb3BlbmFwaVxcd2ViYXBwL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMENBQTBDLGdCQUFnQjtBQUMxRCxpQkFBaUIsa0JBQWtCLEVBQUUsaUJBQWlCO0FBQ3RELGtCQUFrQixjQUFjLEVBQUUsWUFBWTtBQUM5QyxtQ0FBbUMsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixFQUFFO0FBQy9GLHFEQUFxRCxnQ0FBdUIsRUFBdkIseUJBQXlCO0FBQzlFLHNEQUFzRCw0QkFBb0IsRUFBcEIsb0JBQW9CLEVBQUU7QUFDNUU7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQSxtQkFBbUI7QUFDbkI7RUFDRSx1cURBQXVxRDtFQUN2cUQsV0FBVztFQUNYLFVBQVU7RUFDVix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsNEJBQTRCO0VBQzVCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlEQUFpRDtFQUFqRCxpREFBaUQ7QUFDbkQ7QUFDQSxlQUFlLG9CQUFhLENBQWIsYUFBYSxFQUFFLHdCQUF1QixFQUF2Qix1QkFBdUIsQ0FBQztBQUN0RDs7O0VBR0UsbUJBQW1CO0FBQ3JCO0FBQ0EsZ0NBQWdDLG9CQUFvQjtBQUNwRCw4QkFBOEIsb0JBQW9CO0FBQ2xEO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0EseUNBQXlDLG1CQUFtQixFQUFFLDhCQUE4QixFQUFFO0FBQzlGLGtEQUFrRCxhQUFhO0FBRS9EO0VBQ0Usd0NBQXdDO0VBQ3hDLFlBQVk7RUFDWixjQUFjO0VBQ2QsY0FBYztBQUNoQjtBQUNBLGlCQUFpQixtQkFBbUI7QUFDcEMsd0NBQXdDLFlBQVksRUFBRSxpQkFBaUI7QUFDdkU7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsMkJBQTJCLEVBQUUsZUFBZTtFQUM1Qyx5QkFBeUIsSUFBSSx3QkFBd0IsS0FDeEIsY0FBYztFQUMzQyxzQkFBc0IsT0FBTyxZQUFZO0VBQ3pDLHFCQUFxQixRQUFRLFlBQVk7RUFDekMsaUJBQWlCLFlBQVksaUVBQWlFO0FBQ2hHO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSw0Q0FBb0M7VUFBcEMsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FDakZBLDhFQUFBO0FBK0NBO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDOUNEO0FDSkE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FET0Q7QUNKQTtFQUNDLGVBQUE7RUFDRyx1QkFBQTtFQUNBLGNGbUNTO0VFbENULDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBRE9KO0FDSkE7RUFFQyxTQUFBO0VBQ0EsdUJBQUE7RUFJQSx1QkZLVztFRUpYLGdDQUFBO0VBQ0EscUJBQUE7QURHRDtBQ0FBO0VBQ0MscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FER0Q7QUNBQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBREdEO0FDQUE7RUFDSSxrQkFBQTtBREdKO0FDQUE7RUFDSSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FER0o7QUNBQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBREdKO0FDQUE7RUFDQyx1QkFBQTtFQUNHLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QURHSjtBQ0FBO0VBQ0ksV0FBQTtBREdKO0FDQUE7RUFDSSx1QkFBQTtFQUNBLFdBQUE7QURHSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmVlLWNoaWxkcmVuLnRyZWUtY2hpbGRyZW4tbm8tcGFkZGluZyB7IHBhZGRpbmctbGVmdDogMCB9XG4udHJlZS1jaGlsZHJlbiB7IHBhZGRpbmctbGVmdDogMjBweDsgb3ZlcmZsb3c6IGhpZGRlbiB9XG4ubm9kZS1kcm9wLXNsb3QgeyBkaXNwbGF5OiBibG9jazsgaGVpZ2h0OiAycHggfVxuLm5vZGUtZHJvcC1zbG90LmlzLWRyYWdnaW5nLW92ZXIgeyBiYWNrZ3JvdW5kOiAjZGRmZmVlOyBoZWlnaHQ6IDIwcHg7IGJvcmRlcjogMnB4IGRvdHRlZCAjODg4OyB9XG4udG9nZ2xlLWNoaWxkcmVuLXdyYXBwZXItZXhwYW5kZWQgLnRvZ2dsZS1jaGlsZHJlbiB7IHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB9XG4udG9nZ2xlLWNoaWxkcmVuLXdyYXBwZXItY29sbGFwc2VkIC50b2dnbGUtY2hpbGRyZW4geyB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfVxuLnRvZ2dsZS1jaGlsZHJlbi13cmFwcGVyIHtcbiAgcGFkZGluZzogMnB4IDNweCA1cHggMXB4O1xufVxuLyogdHNsaW50OmRpc2FibGUgKi9cbi50b2dnbGUtY2hpbGRyZW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBU0NBWUFBQUJTTzE1cUFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFCQWhwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOaTFqTURZM0lEYzVMakUxTnpjME55d2dNakF4TlM4d015OHpNQzB5TXpvME1EbzBNaUFnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdUVTA5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5dGJTOGlJSGh0Ykc1ek9uTjBVbVZtUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmMxUjVjR1V2VW1WemIzVnlZMlZTWldZaklpQjRiV3h1Y3pwNGJYQTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhpSUhodGJHNXpPbVJqUFNKb2RIUndPaTh2Y0hWeWJDNXZjbWN2WkdNdlpXeGxiV1Z1ZEhNdk1TNHhMeUlnZUcxd1RVMDZUM0pwWjJsdVlXeEViMk4xYldWdWRFbEVQU0oxZFdsa09qWTFSVFl6T1RBMk9EWkRSakV4UkVKQk5rVXlSRGc0TjBORlFVTkNOREEzSWlCNGJYQk5UVHBFYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2tZelJrUkZRamN4T0RVek5URXhSVFU0UlRRd1JrUXdPREZFT1VaRU1FRTNJaUI0YlhCTlRUcEpibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPa1l6UmtSRlFqY3dPRFV6TlRFeFJUVTRSVFF3UmtRd09ERkVPVVpFTUVFM0lpQjRiWEE2UTNKbFlYUnZjbFJ2YjJ3OUlrRmtiMkpsSUZCb2IzUnZjMmh2Y0NCRFF5QXlNREUxSUNoTllXTnBiblJ2YzJncElqNGdQSGh0Y0UxTk9rUmxjbWwyWldSR2NtOXRJSE4wVW1WbU9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZNVGs1TnpBMU9HRXRaREkzT0MwME5EWmtMV0U0T0RndE5HTTRNR1E0WVdJMU56Tm1JaUJ6ZEZKbFpqcGtiMk4xYldWdWRFbEVQU0poWkc5aVpUcGtiMk5wWkRwd2FHOTBiM05vYjNBNll6UmtabVF4TUdNdFkyTmxOUzB4TVRjNExXRTVPR1F0WTJOa1ptTTVPRGs1WVdZd0lpOCtJRHhrWXpwMGFYUnNaVDRnUEhKa1pqcEJiSFErSUR4eVpHWTZiR2tnZUcxc09teGhibWM5SW5ndFpHVm1ZWFZzZENJK1oyeDVjR2hwWTI5dWN6d3ZjbVJtT214cFBpQThMM0prWmpwQmJIUStJRHd2WkdNNmRHbDBiR1UrSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGlBOEwzSmtaanBTUkVZK0lEd3ZlRHA0YlhCdFpYUmhQaUE4UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrNWlvZ0Z3QUFBR2hKUkVGVWVOcGlZR0JnS0FCaWdmLy8vek9RZzBFQVJINEE0Z1p5RElJWjhCL0pvQUpLRElEaEIwQ2NRSWtCUkJ0RXlBQmtneHdvTVFDR0Q2QWJSS29CR0FZeFFnWElCUnVaR0tnQUtQSUMzUUx4QXJuUlNIWkNJanNwazUyWktNck9GQlVvQUFFR0FLbnE1OTNNUUFadEFBQUFBRWxGVGtTdVFtQ0MnKTtcbiAgaGVpZ2h0OiA4cHg7XG4gIHdpZHRoOiA5cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4udG9nZ2xlLWNoaWxkcmVuLXBsYWNlaG9sZGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG59XG4ubm9kZS1jb250ZW50LXdyYXBwZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMTVzLGJveC1zaGFkb3cgLjE1cztcbn1cbi5ub2RlLXdyYXBwZXIge2Rpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O31cbi5ub2RlLWNvbnRlbnQtd3JhcHBlci1hY3RpdmUsXG4ubm9kZS1jb250ZW50LXdyYXBwZXIubm9kZS1jb250ZW50LXdyYXBwZXItYWN0aXZlOmhvdmVyLFxuLm5vZGUtY29udGVudC13cmFwcGVyLWFjdGl2ZS5ub2RlLWNvbnRlbnQtd3JhcHBlci1mb2N1c2VkIHtcbiAgYmFja2dyb3VuZDogI2JlZWJmZjtcbn1cbi5ub2RlLWNvbnRlbnQtd3JhcHBlci1mb2N1c2VkIHsgYmFja2dyb3VuZDogI2U3ZjRmOSB9XG4ubm9kZS1jb250ZW50LXdyYXBwZXI6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZjdmYmZmIH1cbi5ub2RlLWNvbnRlbnQtd3JhcHBlci1hY3RpdmUsIC5ub2RlLWNvbnRlbnQtd3JhcHBlci1mb2N1c2VkLCAubm9kZS1jb250ZW50LXdyYXBwZXI6aG92ZXIge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICM5OTk7XG59XG4ubm9kZS1jb250ZW50LXdyYXBwZXIuaXMtZHJhZ2dpbmctb3ZlciB7IGJhY2tncm91bmQ6ICNkZGZmZWU7IGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggIzk5OTsgfVxuLm5vZGUtY29udGVudC13cmFwcGVyLmlzLWRyYWdnaW5nLW92ZXItZGlzYWJsZWQgeyBvcGFjaXR5OiAwLjUgfVxuXG50cmVlLXZpZXdwb3J0IHtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udHJlZS1jaGlsZHJlbiB7IHBhZGRpbmctbGVmdDogMjBweCB9XG4uZW1wdHktdHJlZS1kcm9wLXNsb3QgLm5vZGUtZHJvcC1zbG90IHsgaGVpZ2h0OiAyMHB4OyBtaW4td2lkdGg6IDEwMHB4IH1cbi5hbmd1bGFyLXRyZWUtY29tcG9uZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7ICAgLyogQ2hyb21lL1NhZmFyaS9PcGVyYSAqL1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7ICAgIC8qIEtvbnF1ZXJvciAqL1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAgICAgIC8qIEZpcmVmb3ggKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgICAvKiBJRS9FZGdlICovXG4gIHVzZXItc2VsZWN0OiBub25lOyAgICAgICAgICAgLyogbm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseSBub3Qgc3VwcG9ydGVkIGJ5IGFueSBicm93c2VyICovXG59XG5cbnRyZWUtcm9vdCAuYW5ndWxhci10cmVlLWNvbXBvbmVudC1ydGwge1xuICBkaXJlY3Rpb246IHJ0bDtcbn1cbnRyZWUtcm9vdCAuYW5ndWxhci10cmVlLWNvbXBvbmVudC1ydGwgLnRvZ2dsZS1jaGlsZHJlbi13cmFwcGVyLWNvbGxhcHNlZCAudG9nZ2xlLWNoaWxkcmVuIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKSAhaW1wb3J0YW50O1xufVxudHJlZS1yb290IC5hbmd1bGFyLXRyZWUtY29tcG9uZW50LXJ0bCAudHJlZS1jaGlsZHJlbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxudHJlZS1ub2RlLWNoZWNrYm94IHtcbiAgcGFkZGluZzogMXB4O1xufVxuIiwiQGltcG9ydCAnfmFuZ3VsYXItdHJlZS1jb21wb25lbnQvZGlzdC9hbmd1bGFyLXRyZWUtY29tcG9uZW50LmNzcyc7XG5cbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbiRhcHAtYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4kYXBwLWJhY2tncm91bmQtY29sb3IxOiB3aGl0ZTtcbi8vICRhcHAtaGVhZGVyLWJhY2tncm91bmQ6IHdoaXRlO1xuJGFwcC1oZWFkZXItYmFja2dyb3VuZDogcmdiKDQzLDQzLDQzKTtcbi8vICRhcHAtaGVhZGVyLWJhY2tncm91bmQ6ICM5MTkxOTE7XG5cbiRhcHAtaGVhZGVyLWNvbG9yOiB3aGl0ZXNtb2tlO1xuXG4kd2lkZ2V0LWNvbnRhaW5lci1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiR3aWRnZXQtYm9yZGVyLWNvbG9yOiBsaWdodGdyYXk7XG4kZmx5b3V0LXBhbmVsLWNvbG9yOiByZ2IoMjQ1LDI0OCwyNDgpO1xuXG4kb2stYmstY29sb3I6IGdyZWVuO1xuJGVycm9yLWJrLWNvbG9yOiByZWQ7XG4kd2FybmluZy1iay1jb2xvcjogeWVsbG93O1xuXG4kZG9jdW1lbnQtYmstY29sb3I6IHdoaXRlO1xuJHNlY29uZGFyeS1iay1jb2xvcjogYmxhY2s7XG4kc2Vjb25kYXJ5LWNvbG9yOiBncmF5O1xuJHNlY29uZGFyeS1oaWdobGlnaHQtY29sb3I6IGRhcmtncmF5O1xuXG4kYXBwLXRleHQtY29sb3I6IHJnYig3NCw3NCw3NCk7XG4kZGFya2VyLWFwcC10ZXh0LWNvbG9yOiBsaWdodGdyYXk7XG4kbGFyZ2UtZm9udDogYm9sZCAzNXB4IGNvbnNvbGFzO1xuJG1lZGl1bS1mb250OiBub3JtYWwgMjhweCBhcmlhbDtcbiRzbWFsbC1mb250OiBub3JtYWwgMThweCBhcmlhbDtcbiRzbWFsbC1mb250LWJvbGQ6IGJvbGQgMThweCBhcmlhbDtcbiRzbWFsbGVyLWZvbnQ6IG5vcm1hbCAxNnB4IGFyaWFsO1xuJHNtYWxsZXItZm9udC1jb25zb2xlOiBub3JtYWwgMTRweCBjb25zb2xhcztcbiR0aW55LWZvbnQ6IG5vcm1hbCAxNHB4IGFyaWFsO1xuJHRpbnktZm9udC1pdGFsaWM6IGl0YWxpYyAxNHB4IGFyaWFsO1xuJHRpbnktZm9udC1ib2xkOiBib2xkIDE0cHggYXJpYWw7XG4kdmVyeS10aW55LWZvbnQ6IG5vcm1hbCAxMnB4IGFyaWFsO1xuJHZlcnktdGlueS1mb250LWJvbGQ6IGJvbGQgMTJweCBhcmlhbDtcbiRoZWFkZXItZm9udDogMjRweCBjb25zb2xhcztcblxuJHNtYWxsLWZvbnQtZml4ZWQ6IG5vcm1hbCAxNnB4ICdDb3VyaWVyIE5ldycgbW9ub3NwYWNlO1xuJGZvbnQtdGl0bGU6IG5vcm1hbCAxLjVlbSBcIm9wZW5fc2Fuc3JlZ3VsYXJcIjtcdFxuXG5cbiRkYXJrZXItYmFja2dyb3VuZC1jb2xvcjogcmdiKDI3LDI3LDI3KTs7XG4kZGFya2VyLWhpZ2hsaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDIsIDQxLCA0MSk7XG4kZGFya2VyLXRleHQtY29sb3I6IHJnYig4NSwgODUsIDg1KTtcbiRsaW5rLWNvbG9yOiByZ2IoMCwgOTAsIDIzMCk7XG4kYXR0cmlidXRlLW5hbWU6IGJsYWNrO1xuXG5odG1sLCBib2R5IHtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luOiAwO1xufVxuIiwiQGltcG9ydCAnfmFuZ3VsYXItdHJlZS1jb21wb25lbnQvZGlzdC9hbmd1bGFyLXRyZWUtY29tcG9uZW50LmNzcyc7XG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLCBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYXBwLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5saW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250OiBub3JtYWwgMTZweCBhcmlhbDtcbiAgY29sb3I6ICMwMDVhZTY7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogM3B4IDNweCAzcHggM3B4O1xufVxuXG5wcmUge1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250OiBub3JtYWwgMTRweCBhcmlhbDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLnNjcm9sbGluZy1vdXRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNjcm9sbGluZy1pbm5lci1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5zcGxpdCB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udDogbm9ybWFsIDI4cHggYXJpYWw7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5oZWFkZXIge1xuICBmb250OiBub3JtYWwgMTZweCBhcmlhbDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnRyZWUge1xuICBmb250OiBub3JtYWwgMTRweCBhcmlhbDtcbiAgaGVpZ2h0OiA5MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5zYW1wbGUtY29kZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubm90ZXMge1xuICBmb250OiBub3JtYWwgMTZweCBhcmlhbDtcbiAgd2lkdGg6IDEwMCU7XG59IiwiQGltcG9ydCAnLi4vc3R5bGVzLnNjc3MnO1xuXG4uYXBwLWNvbnRhaW5lciB7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5saW5rIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQ6IG5vcm1hbCAxNnB4IGFyaWFsO1xuICAgIGNvbG9yOiAkbGluay1jb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAzcHggM3B4IDNweCAzcHg7XG59XG5cbnByZSB7XG5cdC8vcGFkZGluZzogNXB4IDEwcHggMHB4IDVweDtcblx0bWFyZ2luOiAwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuXHQvLyBib3JkZXI6IDFwdCBzb2xpZCAjZGJkYmRiO1xuXHQvLyBib3JkZXItcmFkaXVzOiA0cHg7XG5cdC8vZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcblx0Zm9udDogJHRpbnktZm9udDtcblx0d2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XG5cdHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLnNjcm9sbGluZy1vdXRlci1jb250YWluZXIge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHdpZHRoOjEwMCU7XG5cdGhlaWdodDoxMDAlO1xuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cblxuLnNjcm9sbGluZy1pbm5lci1jb250YWluZXIge1xuXHRwb3NpdGlvbjphYnNvbHV0ZTsgXG5cdHdpZHRoOiAxMDAlOyBcblx0aGVpZ2h0OiAxMDAlO1xuXHRvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uc3BsaXQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250OiBub3JtYWwgMjhweCBhcmlhbDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uaGVhZGVyIHtcbiAgICBmb250OiBub3JtYWwgMTZweCBhcmlhbDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4udHJlZSB7XG5cdGZvbnQ6IG5vcm1hbCAxNHB4IGFyaWFsO1xuICAgIGhlaWdodDogOTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLnNhbXBsZS1jb2RlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm5vdGVzIHtcbiAgICBmb250OiBub3JtYWwgMTZweCBhcmlhbDtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _assets_resourcemanager_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/resourcemanager.json */ "./src/assets/resourcemanager.json");
var _assets_resourcemanager_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/resourcemanager.json */ "./src/assets/resourcemanager.json", 1);
/* harmony import */ var brace_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! brace/index */ "./node_modules/brace/index.js");
/* harmony import */ var brace_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(brace_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var brace_theme_eclipse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! brace/theme/eclipse */ "./node_modules/brace/theme/eclipse.js");
/* harmony import */ var brace_theme_eclipse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(brace_theme_eclipse__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var brace_mode_yaml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! brace/mode/yaml */ "./node_modules/brace/mode/yaml.js");
/* harmony import */ var brace_mode_yaml__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(brace_mode_yaml__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var brace_mode_python__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! brace/mode/python */ "./node_modules/brace/mode/python.js");
/* harmony import */ var brace_mode_python__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(brace_mode_python__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var brace_mode_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! brace/mode/markdown */ "./node_modules/brace/mode/markdown.js");
/* harmony import */ var brace_mode_markdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(brace_mode_markdown__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








const yaml = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");

var Views;
(function (Views) {
    Views[Views["openapi"] = 0] = "openapi";
    Views[Views["ixnetwork_restpy"] = 1] = "ixnetwork_restpy";
    Views[Views["python_requests"] = 2] = "python_requests";
})(Views || (Views = {}));
;
let AppComponent = class AppComponent {
    constructor(_http) {
        // POST {{host}}/api/v1/sessions/1/ixnetwork/resourceManager/operations/exportconfig
        // content-type: application/json
        this._http = _http;
        this._nextId = 1;
        this._view = Views.openapi;
        this._readme = '';
        this.config = {
            mode: 'yaml',
            theme: 'eclipse',
            readOnly: true,
            showPrintMargin: false,
            fontSize: 14
        };
        this.isEditor = true;
        this.overview = '';
        this.selectedNodeName = '';
        // {
        //     "arg1": "/resourceManager",
        //     "arg2": [
        //         "/vport/descendant-or-self::*",
        //         "/topology/descendant-or-self::*",
        //         "/traffic/descendant-or-self::*"
        //     ],
        //     "arg3": "false",
        //     "arg4": "json"
        // }       
        this._openapi_doc = _assets_resourcemanager_json__WEBPACK_IMPORTED_MODULE_2__;
        this._treeOptions = {
            getChildren: this.getChildren.bind(this),
            animateSpeed: 0,
            animateAcceleration: 0,
            animateExpand: false,
            useVirtualScroll: false,
            useCheckbox: false,
            useTriState: false
        };
        this._nodes = this.getNodes('#/components/schemas/ixnetwork');
    }
    getChildren(node) {
        let children = this.getNodes(node.data.ref);
        return new Promise((resolve, reject) => {
            setTimeout(() => { resolve(children); }, 0);
        });
    }
    get options() {
        return this._treeOptions;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    ngAfterViewInit() {
        this._splitterComponent.direction = 'horizontal';
        this._splitterComponent.disabled = false;
        console.log(this._editor);
        setTimeout(() => {
            this._treeComponent.treeModel.getFirstRoot().setActiveAndVisible();
            this.onNotes(null);
        });
    }
    get nextId() {
        return this._nextId++;
    }
    onActivate(event) {
        if (event.node) {
            if (this._editor) {
                this._editor.directiveRef.ace.call(this._editor, 'scrollToLine', 1, true);
            }
            event.node.expand();
            this.selectedNodeName = event.node.data.name;
            switch (this._view) {
                case Views.openapi:
                    this.onOpenApi(null);
                    break;
                case Views.ixnetwork_restpy:
                    this.onRestpy(null);
                    break;
                case Views.python_requests:
                    this.onRequests(null);
                    break;
            }
        }
        // this._cdref.detectChanges();
    }
    get nodes() {
        return this._nodes;
    }
    getNode(path) {
        let currentNode = this._openapi_doc;
        for (let piece of path.slice(2).split('/')) {
            currentNode = currentNode[piece];
        }
        return currentNode;
    }
    getNodes(path) {
        let currentNode = this.getNode(path);
        let nodes = [];
        if (Object.keys(currentNode).indexOf('properties') === -1) {
            return;
        }
        for (let name in currentNode.properties) {
            if (name !== 'xpath') {
                let node = currentNode.properties[name];
                let ref = null;
                if (node['$ref']) {
                    ref = node['$ref'];
                    node = this.getNode(ref);
                }
                else if (node['items'] && node['items']['$ref']) {
                    ref = node['items']['$ref'];
                    node = this.getNode(ref);
                }
                else {
                    continue;
                }
                let hasChildren = false;
                for (let key in node.properties) {
                    if (node.properties[key]['$ref']
                        || (node.properties[key].type == 'object' && node.properties[key].xpath)
                        || node.properties[key].type == 'array' && node.properties[key].items && node.properties[key].items['$ref']) {
                        hasChildren = true;
                        break;
                    }
                }
                let data = {
                    id: this.nextId,
                    path: `${path}.properties.${name}`,
                    ref: ref,
                    multiples: node['x-multiplicity'].indexOf('zeroOrMany') !== -1,
                    name: name,
                    hasChildren: hasChildren
                };
                if (!hasChildren) {
                    data['children'] = [];
                }
                nodes.push(data);
            }
        }
        return nodes.sort((a, b) => a.name > b.name ? 1 : -1);
    }
    onDownload(event) {
        window.open('../assets/resourcemanager.yaml', '_blank');
    }
    sort(object) {
        var sortedObj = {}, keys = Object.keys(object);
        keys.sort(function (key1, key2) {
            key1 = key1.toLowerCase(), key2 = key2.toLowerCase();
            if (key1 < key2)
                return -1;
            if (key1 > key2)
                return 1;
            return 0;
        });
        for (var index in keys) {
            var key = keys[index];
            if (typeof object[key] == 'object' && !(object[key] instanceof Array)) {
                sortedObj[key] = this.sort(object[key]);
            }
            else {
                sortedObj[key] = object[key];
            }
        }
        return sortedObj;
    }
    get sample() {
        return this._sample;
    }
    onOpenApi(event) {
        if (event) {
            this._view = Views.openapi;
        }
        this.isEditor = true;
        let node = this._treeComponent.treeModel.focusedNode;
        this.config.mode = 'yaml';
        let yamlNode = this.getNode(node.data.ref);
        this._sample = `// ${node.data.name} OpenAPI Schema Object\n`;
        this._sample += `// resourcemanager.yaml${node.data.ref}\n\n`;
        let tempNode = {};
        tempNode[node.data.name] = yamlNode;
        tempNode = this.sort(tempNode);
        this._sample += yaml.safeDump(tempNode);
        return;
    }
    getXpathExample(node) {
        let nameNode = node;
        let xpathExample = '';
        while (nameNode.data.name) {
            let index = '';
            if (nameNode.data.multiples) {
                index = '[1]';
            }
            if (nameNode.data.name == 'stack') {
                index = `[@alias='<stackTypeId property value>-<index in the stack list>']`;
            }
            else if (nameNode.data.name === 'field') {
                index = `[@alias='<fieldTypeId property value>-<index in the field list>']`;
            }
            xpathExample = `/${nameNode.data.name}${index}${xpathExample}`;
            nameNode = nameNode.parent;
        }
        return xpathExample;
    }
    onRestpy(event) {
        if (event) {
            this._view = Views.ixnetwork_restpy;
        }
        this.isEditor = true;
        let node = this._treeComponent.treeModel.focusedNode;
        this.config.mode = 'python';
        this._sample = `"""ixnetwork-restpy\n\n`;
        this._sample += `\tSchema object source is resourcemanager.yaml${node.data.ref}\n\n`;
        this._sample += `\tthe importConfig API uses the xpath property in each object to lookup a resource on the server\n`;
        this._sample += `\tIF the ${node.data.name} resource exists\n`;
        this._sample += `\t\tthe existing resource will be updated\n`;
        this._sample += `\tELSE IF create is defined in the x-crud property\n`;
        this._sample += `\t\ta new ${node.data.name} resource will be created\n`;
        this._sample += `\tELSE\n`;
        this._sample += `\t\tan errata item will be returned\n`;
        this._sample += '"""\n';
        this._sample += 'import json\n';
        this._sample += 'from ixnetwork_restpy import SessionAssistant\n';
        this._sample += '\n';
        this._sample += `session = SessionAssistant(IpAddress='127.0.0.1')\n`;
        let schema = this.getNode(node.data.ref);
        let sampleProperties = {};
        this.addSampleProperties(node, schema, sampleProperties);
        this._sample += `${node.data.name} = ${JSON.stringify(this.sort(sampleProperties), null, 4)}\n`;
        this._sample += `session.Ixnetwork.ResourceManager.ImportConfig(json.dumps(${node.data.name}), True)`;
    }
    addSampleProperties(node, schema, sampleProperties) {
        for (let key in schema.properties) {
            let property = schema.properties[key];
            switch (property.type) {
                case "string":
                    let stringValue = '';
                    if (property.default) {
                        stringValue = property.default;
                    }
                    else if (property.enum) {
                        stringValue = property.enum[0];
                    }
                    else if (key == 'xpath') {
                        stringValue = this.getXpathExample(node);
                    }
                    sampleProperties[key] = stringValue;
                    //this._sample += `\t'${key}': '${stringValue}',\n`;
                    break;
                case "boolean":
                    let boolValue = true;
                    if (property.default) {
                        boolValue = property.default.toLowerCase();
                    }
                    sampleProperties[key] = boolValue;
                    //this._sample += `\t'${key}': ${boolValue},\n`;
                    break;
                case "number":
                    let numberValue = 0;
                    if (property.default) {
                        numberValue = property.default;
                    }
                    sampleProperties[key] = numberValue;
                    //this._sample += `\t'${key}': ${numberValue},\n`;
                    break;
                case "object":
                    if (property.additionalProperties) {
                        let objProperties = {};
                        objProperties['xpath'] = `/multivalue[@source='${sampleProperties['xpath']} ${key}']`;
                        objProperties['clearOverlays'] = true;
                        objProperties['pattern'] = 'singleValue';
                        objProperties['singleValue'] = {
                            'xpath': objProperties['xpath'] + '/singleValue',
                            'value': ""
                        };
                        sampleProperties[key] = objProperties;
                    }
                    else {
                        sampleProperties[key] = {};
                    }
                    break;
                case "array":
                    sampleProperties[key] = [];
                    break;
            }
        }
    }
    onRequests(event) {
        if (event) {
            this._view = Views.python_requests;
        }
        this.isEditor = true;
        let node = this._treeComponent.treeModel.focusedNode;
        this.config.mode = 'python';
        this._sample = `"""python requests\n\n`;
        this._sample += `\tSchema object source is resourcemanager.yaml${node.data.ref}\n\n`;
        this._sample += `\tthe importConfig API uses the xpath property in each object to lookup a resource on the server\n`;
        this._sample += `\tIF the ${node.data.name} resource exists\n`;
        this._sample += `\t\tthe existing resource will be updated\n`;
        this._sample += `\tELSE IF create is defined in the x-crud property\n`;
        this._sample += `\t\ta new ${node.data.name} resource will be created\n`;
        this._sample += `\tELSE\n`;
        this._sample += `\t\tan errata item will be returned\n`;
        this._sample += '"""\n';
        this._sample += 'import requests, json\n';
        this._sample += '\n';
        let schema = this.getNode(node.data.ref);
        let sampleProperties = {};
        this.addSampleProperties(node, schema, sampleProperties);
        this._sample += `${node.data.name} = ${JSON.stringify(this.sort(sampleProperties), null, 4)}\n`;
        this._sample += `payload = {\n`;
        this._sample += `\t'arg1': '/resourceManager',\n`;
        this._sample += `\t'arg2': json.dumps(${node.data.name}),\n`;
        this._sample += `\t'arg3': True\n`;
        this._sample += `}\n`;
        this._sample += `url = 'http://127.0.0.1:11009/api/v1/sessions/1/ixnetwork/resourceManager/operations/importConfig'\n`;
        this._sample += `response = requests.request('POST', url, json=payload)\n`;
    }
    onImportConfig(event) {
        this.isEditor = true;
        let node = this._treeComponent.treeModel.focusedNode;
        this.config.mode = 'yaml';
        this._sample = `// /resourceManager/operations/importConfig OpenAPI Path Object\n`;
        this._sample += `// resourcemanager.yaml#paths\n\n`;
        let tempNode = {};
        tempNode['paths'] = this._openapi_doc.paths;
        tempNode = this.sort(tempNode);
        this._sample += yaml.safeDump(tempNode);
    }
    onNotes(event) {
        this.isEditor = false;
        this._http.get('assets/README.md', { responseType: 'text' }).subscribe(data => {
            this.overview = data;
        });
        return;
        this.overview = `
        # Overview

        Tests executed using IxNetwork are focused on API's that target three main areas:
        - configuration
          - the **resourcemanager importConfig API can create and update** an IxNetwork configuration
          - ports
          - protocols
          - traffic
        - control
          - connect ports
          - start/stop protocols
          - start/stop traffic
        - state
          - port statistics
          - protocol statistics
          - traffic statistics

        The resourcemanager importConfig API is an important part of using IxNetwork effectively.
        It is used to efficiently configure the IxNetwork test tool in one call.
        
        It configures the test tool using the objects laid out in this specification.
        
        ## Usage
        - view the structure and details of the importConfig API
        - look at a sample to see how the importConfig operation is called
        - locate specific objects to import using the OpenAPI Schema Objects tree
        - view sample code to see how the json object and specifically the xpath is constructed
        - use the API Browser to view resources and their structure
        
        ## Notes
        - objects can be imported one at a time
        \`\`\`python
        import json
        from ixnetwork_restpy import SessionAssistant
        session = SessionAssistant(IpAddress='127.0.0.1')
        vport = {
            'xpath': '/vport[1]
        }
        session.Ixnetwork.ResourceManager.ImportConfig(json.dumps(vport), True)        
        \`\`\`
        - multiple objects can be imported at the same time
        \`\`\`python
        from ixnetwork_restpy import SessionAssistant
        session = SessionAssistant(IpAddress='127.0.0.1')
        vport1 = {
            'xpath': '/vport[1]
        }
        vport2 = {
            'xpath': '/vport[2]
        }
        trafficItem = {
            'xpath': '/traffic/trafficItem[1]'
        }
        session.Ixnetwork.ResourceManager.ImportConfig(json.dumps([vport1, vport2, trafficItem]), True)        
        \`\`\`
        - the list of objects or nested object must be encoded as a json string
        - every object must have an xpath if the schema object required property indicates 
        `;
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('splitter', { static: false })
], AppComponent.prototype, "_splitterComponent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tree', { static: false })
], AppComponent.prototype, "_treeComponent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editor', { static: false })
], AppComponent.prototype, "_editor", void 0);
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-tree-component */ "./node_modules/angular-tree-component/__ivy_ngcc__/dist/angular-tree-component.js");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-split */ "./node_modules/angular-split/__ivy_ngcc__/fesm2015/angular-split.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/__ivy_ngcc__/fesm2015/ngx-markdown.js");
/* harmony import */ var ngx_ace_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-ace-wrapper */ "./node_modules/ngx-ace-wrapper/__ivy_ngcc__/fesm2015/ngx-ace-wrapper.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");










const DEFAULT_ACE_CONFIG = {};

let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ngx_ace_wrapper__WEBPACK_IMPORTED_MODULE_8__["AceModule"],
            angular_tree_component__WEBPACK_IMPORTED_MODULE_5__["TreeModule"].forRoot(),
            angular_split__WEBPACK_IMPORTED_MODULE_6__["AngularSplitModule"].forRoot(),
            ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
        ],
        providers: [
            {
                provide: ngx_ace_wrapper__WEBPACK_IMPORTED_MODULE_8__["ACE_CONFIG"],
                useValue: DEFAULT_ACE_CONFIG
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/assets/resourcemanager.json":
/*!*****************************************!*\
  !*** ./src/assets/resourcemanager.json ***!
  \*****************************************/
/*! exports provided: info, paths, openapi, components, servers, default */
/***/ (function(module) {


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\anbalogh\Documents\gitswarm\ixnetwork-openapi\webapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.98b9854a107088387b63.js.map