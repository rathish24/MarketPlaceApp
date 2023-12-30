(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-orderhistory-orderhistory-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orderhistory/orderhistory.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orderhistory/orderhistory.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>orderhistory</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/orderhistory/orderhistory-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/orderhistory/orderhistory-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: OrderhistoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderhistoryPageRoutingModule", function() { return OrderhistoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _orderhistory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orderhistory.page */ "./src/app/pages/orderhistory/orderhistory.page.ts");




var routes = [
    {
        path: '',
        component: _orderhistory_page__WEBPACK_IMPORTED_MODULE_3__["OrderhistoryPage"]
    }
];
var OrderhistoryPageRoutingModule = /** @class */ (function () {
    function OrderhistoryPageRoutingModule() {
    }
    OrderhistoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], OrderhistoryPageRoutingModule);
    return OrderhistoryPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/orderhistory/orderhistory.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/orderhistory/orderhistory.module.ts ***!
  \***********************************************************/
/*! exports provided: OrderhistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderhistoryPageModule", function() { return OrderhistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _orderhistory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orderhistory-routing.module */ "./src/app/pages/orderhistory/orderhistory-routing.module.ts");
/* harmony import */ var _orderhistory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orderhistory.page */ "./src/app/pages/orderhistory/orderhistory.page.ts");







var OrderhistoryPageModule = /** @class */ (function () {
    function OrderhistoryPageModule() {
    }
    OrderhistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _orderhistory_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderhistoryPageRoutingModule"]
            ],
            declarations: [_orderhistory_page__WEBPACK_IMPORTED_MODULE_6__["OrderhistoryPage"]]
        })
    ], OrderhistoryPageModule);
    return OrderhistoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/orderhistory/orderhistory.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/orderhistory/orderhistory.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyaGlzdG9yeS9vcmRlcmhpc3RvcnkucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/orderhistory/orderhistory.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/orderhistory/orderhistory.page.ts ***!
  \*********************************************************/
/*! exports provided: OrderhistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderhistoryPage", function() { return OrderhistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderhistoryPage = /** @class */ (function () {
    function OrderhistoryPage() {
    }
    OrderhistoryPage.prototype.ngOnInit = function () {
    };
    OrderhistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orderhistory',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./orderhistory.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orderhistory/orderhistory.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./orderhistory.page.scss */ "./src/app/pages/orderhistory/orderhistory.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrderhistoryPage);
    return OrderhistoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-orderhistory-orderhistory-module.js.map