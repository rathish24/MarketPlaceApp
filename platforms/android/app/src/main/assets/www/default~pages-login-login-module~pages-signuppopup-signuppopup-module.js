(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-login-login-module~pages-signuppopup-signuppopup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signuppopup/signuppopup.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signuppopup/signuppopup.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <ion-toolbar >\n    <ion-title style=\"color:#fb7645\">Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n<form #userForm=\"ngForm\" style=\"width:100%;margin-top:10px\">\n \n\n  <div fxLayout=\"column\" fxLayoutAlign=\"  center center\" style=\"width:100%;margin-top:5px\">\n    <mat-form-field style=\"width:96%; margin-left: 2% ; margin-right: 2%;margin-top:10px\" appearance=\"outline\">\n      <mat-label>Email</mat-label>\n      <input matInput placeholder=\"\" [(ngModel)]=\"email\" \n          name=\"email\" required pattern=\"[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" >\n        <mat-error>\n          <div class=\"form-group\">\n            <div *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n              Email Is Requird\n            </div>\n          </div>\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field style=\"width:96%; margin-left: 2% ; margin-right: 2%;margin-top:5px\" appearance=\"outline\">\n      <mat-label>Name</mat-label>\n      <input matInput placeholder=\"\" [(ngModel)]=\"name\" \n          name=\"name\" required  \n        >\n        <mat-error>\n          <div class=\"form-group\">\n            <div *ngIf=\"name.invalid && (name.dirty || name.touched)\">\n               Name Is Requird\n            </div>\n          </div>\n        </mat-error>\n    </mat-form-field>\n\n    <ion-row\n    style=\"border: 1px solid #d3d5da;border-radius: 5px;height:55px; padding-left:8px; width:100%; margin-top:5px;margin-bottom:15px\">\n    <ion-col size=\"4\" fxLayoutAlign=\"start center\">\n      <label class=\"floating-label-css\" fxLayoutAlign=\"start center\">Gender</label>\n\n    </ion-col>\n\n    <ion-col size=\"8\" fxLayoutAlign=\"center center\">\n      <ion-radio-group (ionChange)=\"radioGroupChange($event)\" [(ngModel)]=\"gender\" >\n        <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n          <div *ngFor=\"let item of genderArray\" fxLayoutAlign=\"center center\">\n            <ion-radio  checked=\"true\" value=\"{{item.value}}\"></ion-radio>\n            <ion-label fxLayoutAlign=\"center center\" class=\"floating-label-css\" style=\"margin-left:10px\">\n              {{item.name}}</ion-label>\n          </div>\n        </div>\n      </ion-radio-group>\n\n\n    </ion-col>\n  </ion-row>\n\n\n    <mat-form-field style=\"width:96%; margin-left: 2% ; margin-right: 2%;margin-top:5px\" appearance=\"outline\">\n      <mat-label>Password</mat-label>\n      <input matInput placeholder=\"\" type=\"password\" [(ngModel)]=\"password\" \n          name=\"password\" required  \n        >\n        <mat-error>\n          <div class=\"form-group\">\n            <div *ngIf=\"password.invalid && (password.dirty || password.touched)\">\n               Password Is Requird\n            </div>\n          </div>\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field style=\"width:96%; margin-left: 2% ; margin-right: 2%;margin-top:5px\" appearance=\"outline\">\n      <mat-label>Confirm Password</mat-label>\n      <input matInput placeholder=\"\" type=\"password\" [(ngModel)]=\"confirmPassword\" \n          name=\"confirmPassword\" required  \n        >\n        <mat-error>\n          <div class=\"form-group\">\n            <div *ngIf=\"confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched)\">\n               Confirm password Is Requird\n            </div>\n          </div>\n        </mat-error>\n    </mat-form-field>\n    \n  </div>\n\n  \n  </form>\n\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-top:10px;width:100%\">\n    <button fxFlex=\"45\" mat-raised-button (click)=\"closeDialog()\" style=\"margin-right:15px;font-size:13px\">CANCEL</button>\n    <button fxFlex=\"45\" mat-raised-button (click)=\"submit()\" class=\"loginButton\" style=\"font-size:13px\" [disabled]=\"name.invalid\">SUBMIT</button>\n \n\n  </div>\n\n\n\n\n");

/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/pages/signuppopup/signuppopup.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/signuppopup/signuppopup.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loginButton {\n  background-color: #fb7645;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByYXRpay9tYXJrZXRwbGFjZWlvbmljL3NyYy9hcHAvcGFnZXMvc2lnbnVwcG9wdXAvc2lnbnVwcG9wdXAucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaWdudXBwb3B1cC9zaWdudXBwb3B1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cHBvcHVwL3NpZ251cHBvcHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ubG9naW5CdXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiNzY0NTtcbiAgICBjb2xvcjogd2hpdGU7XG4gXG4gIH0iLCIubG9naW5CdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI3NjQ1O1xuICBjb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/signuppopup/signuppopup.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/signuppopup/signuppopup.page.ts ***!
  \*******************************************************/
/*! exports provided: SignuppopupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignuppopupPage", function() { return SignuppopupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");




var SignuppopupPage = /** @class */ (function () {
    function SignuppopupPage(dialogRef, data, changeDetectorRef, toast) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.changeDetectorRef = changeDetectorRef;
        this.toast = toast;
        this.genderArray = [
            {
                "id": "0",
                "value": "male",
                "name": "Male"
            },
            {
                "id": "1",
                "value": "female",
                "name": "Female"
            }
        ];
        this.cityName = "";
        this.name = "";
        this.email = "";
        this.password = "";
        this.gender = "male";
        this.confirmPassword = "";
        this.addressModel = {};
        this.getFilterName = "";
        this.popupModel = {};
    }
    SignuppopupPage.prototype.ngOnInit = function () {
        var getCityName = localStorage.getItem('cityname');
        if (getCityName == "undefined" || getCityName == "" || getCityName == null) {
            this.popupModel['filterName'] = "";
        }
        else {
            this.cityName = getCityName;
        }
    };
    SignuppopupPage.prototype.closeDialog = function () {
        var city = localStorage.getItem("cityname");
        if (city == undefined || city == "" || city == null) {
            var cityname = "";
            localStorage.setItem("cityname", cityname);
            this.dialogRef.close(city);
        }
        else {
            localStorage.setItem("cityname", city);
            this.dialogRef.close(city);
        }
    };
    SignuppopupPage.prototype.radioGroupChange = function (event) {
        console.log("radioGroupChange", event.detail.value);
        this.selectedRadioGroup = event.detail.value;
        if (this.selectedRadioGroup == 'male') {
            this.gender = "male";
        }
        else if (this.selectedRadioGroup == 'female') {
            this.gender = "female";
        }
    };
    SignuppopupPage.prototype.applyFilter = function (titleName) {
        this.dialogRef.close(titleName);
    };
    SignuppopupPage.prototype.submit = function () {
        //  console.log(this.name);
        // this.popupModel['filterName'] = this.cityName;
        if (this.name == "" || this.name == undefined) {
            this.presentToast("Please enter name");
        }
        else if (this.email == "" || this.email == undefined) {
            this.presentToast("Please enter email");
        }
        else if (this.password == "" || this.password == undefined) {
            this.presentToast("Please enter password");
        }
        else if (this.confirmPassword == "" || this.confirmPassword == undefined) {
            this.presentToast("Please enter confirm password");
        }
        else if (this.confirmPassword != this.password) {
            this.presentToast("Password and confirm password is not matching");
        }
        else {
            console.log(this.name);
            console.log(this.email);
            console.log(this.password);
            console.log(this.confirmPassword);
            //  console.log(this.name);
            var obj = {
                "name": this.name,
                "email": this.email,
                "password": this.password,
                "confirmPassword": this.confirmPassword,
                "gender": this.gender
            };
            console.log("my signup obj", "" + obj);
            this.dialogRef.close(obj);
        }
    };
    SignuppopupPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: message,
                            duration: 4000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SignuppopupPage.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
    ]; };
    SignuppopupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signuppopup',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signuppopup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signuppopup/signuppopup.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signuppopup.page.scss */ "./src/app/pages/signuppopup/signuppopup.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], SignuppopupPage);
    return SignuppopupPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-login-login-module~pages-signuppopup-signuppopup-module.js.map