(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signuppopup-signuppopup-module"],{

/***/ "./src/app/pages/signuppopup/signuppopup-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/signuppopup/signuppopup-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SignuppopupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignuppopupPageRoutingModule", function() { return SignuppopupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signuppopup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signuppopup.page */ "./src/app/pages/signuppopup/signuppopup.page.ts");




var routes = [
    {
        path: '',
        component: _signuppopup_page__WEBPACK_IMPORTED_MODULE_3__["SignuppopupPage"]
    }
];
var SignuppopupPageRoutingModule = /** @class */ (function () {
    function SignuppopupPageRoutingModule() {
    }
    SignuppopupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SignuppopupPageRoutingModule);
    return SignuppopupPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/signuppopup/signuppopup.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/signuppopup/signuppopup.module.ts ***!
  \*********************************************************/
/*! exports provided: SignuppopupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignuppopupPageModule", function() { return SignuppopupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _signuppopup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signuppopup-routing.module */ "./src/app/pages/signuppopup/signuppopup-routing.module.ts");
/* harmony import */ var _signuppopup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signuppopup.page */ "./src/app/pages/signuppopup/signuppopup.page.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var SignuppopupPageModule = /** @class */ (function () {
    function SignuppopupPageModule() {
    }
    SignuppopupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_signuppopup_page__WEBPACK_IMPORTED_MODULE_6__["SignuppopupPage"]],
            entryComponents: [_signuppopup_page__WEBPACK_IMPORTED_MODULE_6__["SignuppopupPage"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _signuppopup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignuppopupPageRoutingModule"]
            ],
        })
    ], SignuppopupPageModule);
    return SignuppopupPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-signuppopup-signuppopup-module.js.map