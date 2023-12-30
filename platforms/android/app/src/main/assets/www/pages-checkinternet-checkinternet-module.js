(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkinternet-checkinternet-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkinternet/checkinternet.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkinternet/checkinternet.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header class=\"new-background-color\">\n    <ion-toolbar class=\"new-background-color\">\n  \n      <label style=\"color:white; font-size:17px; margin-left:10px\">No Internet</label>\n  \n    </ion-toolbar>\n  </ion-header>\n<ion-content>\n<div style=\"width:100%; height:100%\" (click)=\"reconnect()\">\n<img src=\"../../../assets/reconnect.png\" style=\"width:100%; height:100%\" />\n</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/checkinternet/checkinternet-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/checkinternet/checkinternet-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: CheckinternetPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinternetPageRoutingModule", function() { return CheckinternetPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _checkinternet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkinternet.page */ "./src/app/pages/checkinternet/checkinternet.page.ts");




var routes = [
    {
        path: '',
        component: _checkinternet_page__WEBPACK_IMPORTED_MODULE_3__["CheckinternetPage"]
    }
];
var CheckinternetPageRoutingModule = /** @class */ (function () {
    function CheckinternetPageRoutingModule() {
    }
    CheckinternetPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CheckinternetPageRoutingModule);
    return CheckinternetPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/checkinternet/checkinternet.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/checkinternet/checkinternet.module.ts ***!
  \*************************************************************/
/*! exports provided: CheckinternetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinternetPageModule", function() { return CheckinternetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _checkinternet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkinternet-routing.module */ "./src/app/pages/checkinternet/checkinternet-routing.module.ts");
/* harmony import */ var _checkinternet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkinternet.page */ "./src/app/pages/checkinternet/checkinternet.page.ts");







var CheckinternetPageModule = /** @class */ (function () {
    function CheckinternetPageModule() {
    }
    CheckinternetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _checkinternet_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckinternetPageRoutingModule"]
            ],
            declarations: [_checkinternet_page__WEBPACK_IMPORTED_MODULE_6__["CheckinternetPage"]]
        })
    ], CheckinternetPageModule);
    return CheckinternetPageModule;
}());



/***/ }),

/***/ "./src/app/pages/checkinternet/checkinternet.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/checkinternet/checkinternet.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZWNraW50ZXJuZXQvY2hlY2tpbnRlcm5ldC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/checkinternet/checkinternet.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/checkinternet/checkinternet.page.ts ***!
  \***********************************************************/
/*! exports provided: CheckinternetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinternetPage", function() { return CheckinternetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/apiservice/api.service */ "./src/app/service/apiservice/api.service.ts");
/* harmony import */ var src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/loaderservice/loader.service */ "./src/app/service/loaderservice/loader.service.ts");




var CheckinternetPage = /** @class */ (function () {
    function CheckinternetPage(apiService, loader) {
        this.apiService = apiService;
        this.loader = loader;
    }
    CheckinternetPage.prototype.ngOnInit = function () {
    };
    CheckinternetPage.prototype.reconnect = function () {
        // this.loader.showBlockingLoaderAuth();
        var url = "http://15.207.0.34:17700/api/test";
        this.apiService.get(url).subscribe(function (MyResponse) {
            window.history.back();
            // this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            // this.loader.hideBlockingLoaderAuth();
        });
    };
    CheckinternetPage.ctorParameters = function () { return [
        { type: src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }
    ]; };
    CheckinternetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkinternet',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkinternet.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkinternet/checkinternet.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkinternet.page.scss */ "./src/app/pages/checkinternet/checkinternet.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
    ], CheckinternetPage);
    return CheckinternetPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-checkinternet-checkinternet-module.js.map