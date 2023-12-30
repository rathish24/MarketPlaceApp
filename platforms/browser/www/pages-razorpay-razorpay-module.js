(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-razorpay-razorpay-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/razorpay/razorpay.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/razorpay/razorpay.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      RazorPay\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid text-center>\n    <ion-row>\n      <ion-col>\n        Use this Pay button with the attached logic in your app's payment page.\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-card class=\"welcome-card\">\n    <img src=\"../../../assets/razorpay.jpeg\" />\n    <ion-card-header>\n      <ion-card-subtitle>Get Started</ion-card-subtitle>\n      <ion-card-title>Razorpay Sample</ion-card-title>\n      <ion-row>\n        <ion-col>\n          Total Payment\n        </ion-col>\n        <ion-col>\n          {{currencyIcon}}{{paymentAmount}}\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-button expand=\"full\" style=\"background-color: #fb7645;\" (click)=\"payWithRazor()\">Pay with RazorPay</ion-button>\n    </ion-card-content>\n  </ion-card>\n \n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/razorpay/razorpay-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/razorpay/razorpay-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RazorpayPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RazorpayPageRoutingModule", function() { return RazorpayPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _razorpay_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./razorpay.page */ "./src/app/pages/razorpay/razorpay.page.ts");




var routes = [
    {
        path: '',
        component: _razorpay_page__WEBPACK_IMPORTED_MODULE_3__["RazorpayPage"]
    }
];
var RazorpayPageRoutingModule = /** @class */ (function () {
    function RazorpayPageRoutingModule() {
    }
    RazorpayPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RazorpayPageRoutingModule);
    return RazorpayPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/razorpay/razorpay.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/razorpay/razorpay.module.ts ***!
  \***************************************************/
/*! exports provided: RazorpayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RazorpayPageModule", function() { return RazorpayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _razorpay_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./razorpay-routing.module */ "./src/app/pages/razorpay/razorpay-routing.module.ts");
/* harmony import */ var _razorpay_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./razorpay.page */ "./src/app/pages/razorpay/razorpay.page.ts");







var RazorpayPageModule = /** @class */ (function () {
    function RazorpayPageModule() {
    }
    RazorpayPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _razorpay_routing_module__WEBPACK_IMPORTED_MODULE_5__["RazorpayPageRoutingModule"]
            ],
            declarations: [_razorpay_page__WEBPACK_IMPORTED_MODULE_6__["RazorpayPage"]]
        })
    ], RazorpayPageModule);
    return RazorpayPageModule;
}());



/***/ }),

/***/ "./src/app/pages/razorpay/razorpay.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/razorpay/razorpay.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jhem9ycGF5L3Jhem9ycGF5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/razorpay/razorpay.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/razorpay/razorpay.page.ts ***!
  \*************************************************/
/*! exports provided: RazorpayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RazorpayPage", function() { return RazorpayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RazorpayPage = /** @class */ (function () {
    function RazorpayPage() {
        this.paymentAmount = 333;
        this.currency = 'USD';
        this.razor_key = 'rzp_test_IA8F5OYVBMKeQw';
    }
    RazorpayPage.prototype.ngOnInit = function () {
    };
    RazorpayPage.prototype.payWithRazor = function () {
        var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: this.currency,
            key: this.razor_key,
            amount: this.paymentAmount,
            name: 'foo',
            prefill: {
                email: 'admin@enappd.com',
                contact: '9621323231',
                name: 'Enappd'
            },
            theme: {
                color: '#F37254'
            },
            modal: {
                ondismiss: function () {
                    alert('dismissed');
                }
            }
        };
        var successCallback = function (payment_id) {
            alert('payment_id: ' + payment_id);
        };
        var cancelCallback = function (error) {
            alert(error.description + ' (Error ' + error.code + ')');
        };
        RazorpayCheckout.open(options, successCallback, cancelCallback);
    };
    RazorpayPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-razorpay',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./razorpay.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/razorpay/razorpay.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./razorpay.page.scss */ "./src/app/pages/razorpay/razorpay.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RazorpayPage);
    return RazorpayPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-razorpay-razorpay-module.js.map