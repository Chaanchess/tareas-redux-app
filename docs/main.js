(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\proyectos\curso-reduxyangular\todoapp\src\main.ts */"zUnb");


/***/ }),

/***/ "2O3x":
/*!******************************************!*\
  !*** ./src/app/todo/model/todo.model.ts ***!
  \******************************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
class Todo {
    constructor(texto) {
        this.texto = texto.charAt(0).toUpperCase() + texto.slice(1);
        this.completado = false;
        this.id = Math.random();
    }
}


/***/ }),

/***/ "3QiC":
/*!******************************************!*\
  !*** ./src/app/filter/filter.reducer.ts ***!
  \******************************************/
/*! exports provided: filtroReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filtroReducer", function() { return filtroReducer; });
/* harmony import */ var _filter_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.actions */ "jFSk");

const estadoInicial = 'Todas';
function filtroReducer(state = estadoInicial, action) {
    switch (action.type) {
        case _filter_actions__WEBPACK_IMPORTED_MODULE_0__["SET_FILTRO"]:
            return action.filtro;
        default:
            return state;
    }
}


/***/ }),

/***/ "9wjQ":
/*!**************************************!*\
  !*** ./src/app/todo/todo.reducer.ts ***!
  \**************************************/
/*! exports provided: todoReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoReducer", function() { return todoReducer; });
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.actions */ "i2az");
/* harmony import */ var _model_todo_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/todo.model */ "2O3x");


const todo1 = new _model_todo_model__WEBPACK_IMPORTED_MODULE_1__["Todo"]('Destruir el mundo');
const todo2 = new _model_todo_model__WEBPACK_IMPORTED_MODULE_1__["Todo"]('Ir al cine');
const todo3 = new _model_todo_model__WEBPACK_IMPORTED_MODULE_1__["Todo"]('Bailar apasionadamente');
const todo4 = new _model_todo_model__WEBPACK_IMPORTED_MODULE_1__["Todo"]('Estudiar');
const todo5 = new _model_todo_model__WEBPACK_IMPORTED_MODULE_1__["Todo"]('Jugar al fútbol');
todo2.completado = true;
const estadoInicial = [todo1, todo2, todo3, todo4, todo5];
function todoReducer(state = estadoInicial, action) {
    switch (action.type) {
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["AGREGAR_TODO"]:
            const todo = new _model_todo_model__WEBPACK_IMPORTED_MODULE_1__["Todo"](action.texto);
            return [...state, todo];
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_TODO"]:
            return state.map((todoEdit) => {
                if (todoEdit.id === action.id) {
                    return Object.assign(Object.assign({}, todoEdit), { completado: !todoEdit.completado });
                }
                else {
                    return todoEdit;
                }
            });
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["EDITAR_TODO"]:
            return state.map((todoEdit) => {
                if (todoEdit.id === action.id) {
                    return Object.assign(Object.assign({}, todoEdit), { texto: action.texto });
                }
                else {
                    return todoEdit;
                }
            });
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["BORRAR_TODO"]:
            return state.filter(todoEdit => todoEdit.id !== action.id);
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["BORRAR_ALL_TODO"]:
            return state.filter(todoEdit => !todoEdit.completado);
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_ALL_TODO"]:
            return state.map(todoEdit => {
                return Object.assign(Object.assign({}, todoEdit), { completado: action.completado });
            });
        default:
            return state;
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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

/***/ "G1N2":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.actions */ "i2az");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-add/todo-add.component */ "q3/K");
/* harmony import */ var _todos_list_todos_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todos-list/todos-list.component */ "fBbu");
/* harmony import */ var _todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-footer/todo-footer.component */ "aG+2");







class TodoComponent {
    constructor(store) {
        this.store = store;
        this.completado = false;
    }
    ngOnInit() {
    }
    toggleAll() {
        this.completado = !this.completado;
        const accion = new _todo_actions__WEBPACK_IMPORTED_MODULE_1__["ToggleAllTodoAction"](this.completado);
        this.store.dispatch(accion);
    }
}
TodoComponent.ɵfac = function TodoComponent_Factory(t) { return new (t || TodoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
TodoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoComponent, selectors: [["app-todo"]], decls: 8, vars: 0, consts: [[1, "todoapp"], [1, "main"], ["id", "toggle-all", "type", "checkbox", 1, "toggle-all"], ["for", "toggle-all", 3, "click"]], template: function TodoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-todo-add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoComponent_Template_label_click_4_listener() { return ctx.toggleAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mark all as complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-todos-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-todo-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_3__["TodoAddComponent"], _todos_list_todos_list_component__WEBPACK_IMPORTED_MODULE_4__["TodosListComponent"], _todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_5__["TodoFooterComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo',
                templateUrl: './todo.component.html',
                styles: []
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "SnE4":
/*!***************************************!*\
  !*** ./src/app/filter/filter.pipe.ts ***!
  \***************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FilterPipe {
    transform(todos, filtro) {
        switch (filtro) {
            case 'Completadas':
                return todos.filter(todo => todo.completado);
            case 'Activas':
                return todos.filter(todo => !todo.completado);
            default:
                return todos;
        }
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filterTodo", type: FilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filterTodo'
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo/todo.component */ "G1N2");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");




class AppComponent {
    constructor() {
        this.title = 'todoapp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer");
    } }, directives: [_todo_todo_component__WEBPACK_IMPORTED_MODULE_1__["TodoComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo/todo.component */ "G1N2");
/* harmony import */ var _todo_todos_list_todos_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo/todos-list/todos-list.component */ "fBbu");
/* harmony import */ var _todo_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todo/todo-item/todo-item.component */ "o+6X");
/* harmony import */ var _todo_todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./todo/todo-footer/todo-footer.component */ "aG+2");
/* harmony import */ var _todo_todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./todo/todo-add/todo-add.component */ "q3/K");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_reducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.reducers */ "xxnn");
/* harmony import */ var _filter_filter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./filter/filter.pipe */ "SnE4");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot(_app_reducers__WEBPACK_IMPORTED_MODULE_12__["appReducers"]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: false
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _todo_todo_component__WEBPACK_IMPORTED_MODULE_5__["TodoComponent"],
        _todo_todos_list_todos_list_component__WEBPACK_IMPORTED_MODULE_6__["TodosListComponent"],
        _todo_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_7__["TodoItemComponent"],
        _todo_todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_8__["TodoFooterComponent"],
        _todo_todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_9__["TodoAddComponent"],
        _filter_filter_pipe__WEBPACK_IMPORTED_MODULE_13__["FilterPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                    _todo_todo_component__WEBPACK_IMPORTED_MODULE_5__["TodoComponent"],
                    _todo_todos_list_todos_list_component__WEBPACK_IMPORTED_MODULE_6__["TodosListComponent"],
                    _todo_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_7__["TodoItemComponent"],
                    _todo_todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_8__["TodoFooterComponent"],
                    _todo_todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_9__["TodoAddComponent"],
                    _filter_filter_pipe__WEBPACK_IMPORTED_MODULE_13__["FilterPipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot(_app_reducers__WEBPACK_IMPORTED_MODULE_12__["appReducers"]),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument({
                        maxAge: 25,
                        logOnly: false
                    })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aG+2":
/*!***********************************************************!*\
  !*** ./src/app/todo/todo-footer/todo-footer.component.ts ***!
  \***********************************************************/
/*! exports provided: TodoFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoFooterComponent", function() { return TodoFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _filter_filter_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../filter/filter.actions */ "jFSk");
/* harmony import */ var _todo_todo_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../todo/todo.actions */ "i2az");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function (a0) { return { "selected": a0 }; };
function TodoFooterComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoFooterComponent_li_6_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const filtro_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.cambiarFiltro(filtro_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filtro_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, filtro_r1 === ctx_r0.filtroACtual));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](filtro_r1);
} }
class TodoFooterComponent {
    constructor(store) {
        this.store = store;
        this.filtrosValidos = ["Todas", "Activas", "Completadas"];
    }
    ngOnInit() {
        this.store.subscribe(state => {
            this.contarPendientes(state.todos);
            this.filtroACtual = state.filtro;
        });
    }
    cambiarFiltro(nuevoFiltro) {
        const accion = new _filter_filter_actions__WEBPACK_IMPORTED_MODULE_1__["SetFiltroAction"](nuevoFiltro);
        this.store.dispatch(accion);
    }
    contarPendientes(todos) {
        this.pendientes = todos.filter(tarea => !tarea.completado).length;
    }
    borrarAllTodo() {
        const accion = new _todo_todo_actions__WEBPACK_IMPORTED_MODULE_2__["BorrarAllTodoAction"];
        this.store.dispatch(accion);
    }
}
TodoFooterComponent.ɵfac = function TodoFooterComponent_Factory(t) { return new (t || TodoFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
TodoFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoFooterComponent, selectors: [["app-todo-footer"]], decls: 9, vars: 2, consts: [[1, "footer"], [1, "todo-count"], [1, "filters"], [3, "click", 4, "ngFor", "ngForOf"], [1, "clear-completed", 3, "click"], [3, "click"], [3, "ngClass"]], template: function TodoFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " tareas activas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TodoFooterComponent_li_6_Template, 3, 4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoFooterComponent_Template_button_click_7_listener() { return ctx.borrarAllTodo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Limpiar completadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pendientes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filtrosValidos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-footer',
                templateUrl: './todo-footer.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "fBbu":
/*!*********************************************************!*\
  !*** ./src/app/todo/todos-list/todos-list.component.ts ***!
  \*********************************************************/
/*! exports provided: TodosListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosListComponent", function() { return TodosListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todo-item/todo-item.component */ "o+6X");
/* harmony import */ var _filter_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../filter/filter.pipe */ "SnE4");






function TodosListComponent_app_todo_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-todo-item", 2);
} if (rf & 2) {
    const todo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("todo", todo_r1);
} }
class TodosListComponent {
    constructor(store) {
        this.store = store;
        this.todos = [];
    }
    ngOnInit() {
        this.store.subscribe(state => {
            this.todos = state.todos;
            this.filtro = state.filtro;
        });
    }
}
TodosListComponent.ɵfac = function TodosListComponent_Factory(t) { return new (t || TodosListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
TodosListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodosListComponent, selectors: [["app-todos-list"]], decls: 3, vars: 4, consts: [[1, "todo-list"], [3, "todo", 4, "ngFor", "ngForOf"], [3, "todo"]], template: function TodosListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodosListComponent_app_todo_item_1_Template, 1, 1, "app-todo-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "filterTodo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx.todos, ctx.filtro));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_3__["TodoItemComponent"]], pipes: [_filter_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodosListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todos-list',
                templateUrl: './todos-list.component.html',
                styles: []
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 7, vars: 0, consts: [[1, "info"], ["href", "http://github.com/Chaanchess"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Doble click para editar una tarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Created by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Francisco Jos\u00E9 S\u00E1nchez Romero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "i2az":
/*!**************************************!*\
  !*** ./src/app/todo/todo.actions.ts ***!
  \**************************************/
/*! exports provided: AGREGAR_TODO, TOGGLE_TODO, EDITAR_TODO, BORRAR_TODO, BORRAR_ALL_TODO, TOGGLE_ALL_TODO, AgregarTodoAction, ToggleTodoAction, EditarTodoAction, BorrarTodoAction, BorrarAllTodoAction, ToggleAllTodoAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGREGAR_TODO", function() { return AGREGAR_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_TODO", function() { return TOGGLE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITAR_TODO", function() { return EDITAR_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BORRAR_TODO", function() { return BORRAR_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BORRAR_ALL_TODO", function() { return BORRAR_ALL_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_ALL_TODO", function() { return TOGGLE_ALL_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarTodoAction", function() { return AgregarTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleTodoAction", function() { return ToggleTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarTodoAction", function() { return EditarTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorrarTodoAction", function() { return BorrarTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorrarAllTodoAction", function() { return BorrarAllTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleAllTodoAction", function() { return ToggleAllTodoAction; });
const AGREGAR_TODO = '[TODO] Agregar todo';
const TOGGLE_TODO = '[TODO] Toggle todo';
const EDITAR_TODO = '[TODO] Editar todo';
const BORRAR_TODO = '[TODO] Borrar todo';
const BORRAR_ALL_TODO = '[TODO] Borrar All todo';
const TOGGLE_ALL_TODO = '[TODO] Toggle All todo';
class AgregarTodoAction {
    constructor(texto) {
        this.texto = texto;
        this.type = AGREGAR_TODO;
    }
}
class ToggleTodoAction {
    constructor(id) {
        this.id = id;
        this.type = TOGGLE_TODO;
    }
}
class EditarTodoAction {
    constructor(id, texto) {
        this.id = id;
        this.texto = texto;
        this.type = EDITAR_TODO;
    }
}
class BorrarTodoAction {
    constructor(id) {
        this.id = id;
        this.type = BORRAR_TODO;
    }
}
class BorrarAllTodoAction {
    constructor() {
        this.type = BORRAR_ALL_TODO;
    }
}
class ToggleAllTodoAction {
    constructor(completado) {
        this.completado = completado;
        this.type = TOGGLE_ALL_TODO;
    }
}


/***/ }),

/***/ "jFSk":
/*!******************************************!*\
  !*** ./src/app/filter/filter.actions.ts ***!
  \******************************************/
/*! exports provided: SET_FILTRO, SetFiltroAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FILTRO", function() { return SET_FILTRO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetFiltroAction", function() { return SetFiltroAction; });
const SET_FILTRO = '[Filter] Set Filtro';
class SetFiltroAction {
    constructor(filtro) {
        this.filtro = filtro;
        this.type = SET_FILTRO;
    }
}


/***/ }),

/***/ "o+6X":
/*!*******************************************************!*\
  !*** ./src/app/todo/todo-item/todo-item.component.ts ***!
  \*******************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo.actions */ "i2az");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["txtInputFisico"];
const _c1 = function (a0, a1) { return { "completed": a0, "editing": a1 }; };
class TodoItemComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.chkField = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.todo.completado);
        this.txtInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.todo.texto, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.chkField.valueChanges.subscribe(() => {
            const accion = new _todo_actions__WEBPACK_IMPORTED_MODULE_2__["ToggleTodoAction"](this.todo.id);
            this.store.dispatch(accion);
        });
    }
    editar() {
        this.editando = true;
        setTimeout(() => {
            this.txtInputFisico.nativeElement.select();
        }, 1);
    }
    terminarEdicion() {
        this.editando = false;
        if (this.txtInput.invalid) {
            return;
        }
        if (this.txtInput.value === this.todo.texto) {
            return;
        }
        const accion = new _todo_actions__WEBPACK_IMPORTED_MODULE_2__["EditarTodoAction"](this.todo.id, this.txtInput.value);
        this.store.dispatch(accion);
    }
    borrarTodo() {
        const accion = new _todo_actions__WEBPACK_IMPORTED_MODULE_2__["BorrarTodoAction"](this.todo.id);
        this.store.dispatch(accion);
    }
}
TodoItemComponent.ɵfac = function TodoItemComponent_Factory(t) { return new (t || TodoItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
TodoItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoItemComponent, selectors: [["app-todo-item"]], viewQuery: function TodoItemComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.txtInputFisico = _t.first);
    } }, inputs: { todo: "todo" }, decls: 8, vars: 9, consts: [[3, "ngClass"], [1, "view"], ["type", "checkbox", 1, "toggle", 3, "formControl", "checked"], [3, "dblclick"], [1, "destroy", 3, "click"], [1, "edit", 3, "value", "formControl", "blur"], ["txtInputFisico", ""]], template: function TodoItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function TodoItemComponent_Template_label_dblclick_3_listener() { return ctx.editar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_button_click_5_listener() { return ctx.borrarTodo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function TodoItemComponent_Template_input_blur_6_listener() { return ctx.terminarEdicion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c1, ctx.todo.completado, ctx.editando));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.chkField)("checked", ctx.todo.completado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.todo.texto);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.todo.texto)("formControl", ctx.txtInput);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-item',
                templateUrl: './todo-item.component.html',
                styles: []
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, { todo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], txtInputFisico: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['txtInputFisico']
        }] }); })();


/***/ }),

/***/ "q3/K":
/*!*****************************************************!*\
  !*** ./src/app/todo/todo-add/todo-add.component.ts ***!
  \*****************************************************/
/*! exports provided: TodoAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoAddComponent", function() { return TodoAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo.actions */ "i2az");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");






class TodoAddComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.txtInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    }
    agregarTodo() {
        if (this.txtInput.invalid) {
            return;
        }
        const accion = new _todo_actions__WEBPACK_IMPORTED_MODULE_2__["AgregarTodoAction"](this.txtInput.value);
        this.store.dispatch(accion);
        this.txtInput.setValue("");
    }
}
TodoAddComponent.ɵfac = function TodoAddComponent_Factory(t) { return new (t || TodoAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
TodoAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoAddComponent, selectors: [["app-todo-add"]], decls: 4, vars: 1, consts: [[1, "header"], ["placeholder", "\u00BFQu\u00E9 vas a hacer?", "autofocus", "", 1, "new-todo", 3, "formControl", "keyup.enter"]], template: function TodoAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tareas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function TodoAddComponent_Template_input_keyup_enter_3_listener() { return ctx.agregarTodo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.txtInput);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-add',
                templateUrl: './todo-add.component.html',
                styles: []
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "xxnn":
/*!*********************************!*\
  !*** ./src/app/app.reducers.ts ***!
  \*********************************/
/*! exports provided: appReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducers", function() { return appReducers; });
/* harmony import */ var _todo_todo_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo/todo.reducer */ "9wjQ");
/* harmony import */ var _filter_filter_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter/filter.reducer */ "3QiC");


const appReducers = {
    todos: _todo_todo_reducer__WEBPACK_IMPORTED_MODULE_0__["todoReducer"],
    filtro: _filter_filter_reducer__WEBPACK_IMPORTED_MODULE_1__["filtroReducer"]
};


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map