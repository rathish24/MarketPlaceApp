(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-postadvertisement-postadvertisement-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/postadvertisement/postadvertisement.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/postadvertisement/postadvertisement.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-row>\n      <ion-col size=\"3\">\n        <label style=\"color:white; font-size:17px; margin-left:10px\">Logo</label>\n      </ion-col>\n      <ion-col size=\"6\"></ion-col>\n      <ion-col size=\"3\">\n        <label style=\"color:white;margin-right:10px;font-size:17px;\">Pune</label>\n        <mat-icon style=\"width:15px;height:18px; color:white;position:fixed;right:10\">room</mat-icon>\n       \n      </ion-col>\n    </ion-row>\n\n  </ion-toolbar>\n</ion-header>\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  \n<ion-content >\n \n  <form #userForm=\"ngForm\" style=\"width:100%\">\n \n  \n\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%;margin-top:20px\">\n    <mat-form-field style=\"width:96%;\" appearance=\"outline\">\n      <mat-label>Title</mat-label>\n          <input matInput class=\"form-control\" type=\"text\" name=\"title\" [(ngModel)]=\"advertisementModel.title\" #title=\"ngModel\"\n            align=\"center\" required pattern=\"[a-zA-Z0-9,.  ]+$\">\n            <mat-error>\n              <div class=\"form-group\" style=\"margin-bottom:10px\">\n                <div *ngIf=\"title.invalid && (title.dirty || title.touched)\">\n                  Title Is Requird\n                </div>\n              </div>\n            </mat-error>\n    </mat-form-field>\n  </div>\n\n\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%;margin-top:5px\">\n    <mat-form-field style=\"width:96%\" appearance=\"outline\">\n      <mat-label>Description</mat-label>\n          <input matInput class=\"form-control\" type=\"text\" name=\"description\" [(ngModel)]=\"advertisementModel.description\" #description=\"ngModel\"\n            align=\"center\" required >\n            <mat-error>\n              <div class=\"form-group\">\n                <div *ngIf=\"description.invalid && (description.dirty || description.touched)\">\n                  Description Is Requird\n                </div>\n              </div>\n            </mat-error>\n    </mat-form-field>\n  </div>\n</form>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-top:5px\">\n  <mat-form-field style=\"width:96%\" appearance=\"outline\">\n    <mat-label>Select Category</mat-label>\n   \n    <mat-select \n    name=\"type\" \n    (selectionChange)=\"selectCategoryType(categoryId)\"\n    class=\"filter-select\" \n    [(value)]=\"categoryId\">\n      <mat-option *ngFor=\"let type of categoryArray\" [value]=\"type.id\">\n        {{type.name}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n\n\n<ion-row style=\"border: 1px solid #d3d5da;border-radius: 5px;height:64px; padding-left:8px; width:96%; margin-left: 2% ; margin-right: 2%; margin-top:5px\">\n  <ion-col size=\"4\" fxLayoutAlign=\"start center\">\n<label fxLayoutAlign=\"start center\">Gender</label>\n\n  </ion-col>\n\n  <ion-col size=\"8\" fxLayoutAlign=\"center center\">\n    <ion-radio-group (ionChange)=\"radioGroupChange($event)\" [(ngModel)]=\"checkRadioButton\">\n\n    <div fxLayout=\"row\">\n        <div style=\"margin-right:20px\" fxLayoutAlign=\"center center\">\n          <ion-radio  value=\"male\" ></ion-radio>\n          <ion-label fxLayoutAlign=\"center center\" style=\"margin-left:10px\">Male</ion-label>\n        </div>\n  \n        <div fxLayoutAlign=\"center center\">\n          <ion-radio  value=\"female\"></ion-radio>\n        <ion-label style=\"margin-left:10px\">Female</ion-label>\n        \n      </div>\n     \n    </div>\n  </ion-radio-group>\n\n  \n  </ion-col>\n</ion-row>\n\n\n\n\n\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%;margin-top:25px\">\n  <mat-form-field style=\"width:96%; margin-left: 2% ; margin-right: 2%;\" appearance=\"outline\">\n    <mat-label style=\"color:black; background-color: white;\">Email</mat-label>\n    <input matInput class=\"form-control \" name=\"email\" [(ngModel)]=\"advertisementModel.email\" #email=\"ngModel\"\n      pattern=\"[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" />\n    <mat-error>\n      <div class=\"form-group\">\n        <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" >\n         Invalid email address\n        </div>\n      </div>\n    </mat-error>\n\n  </mat-form-field>\n</div>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%;\">\n  <mat-form-field style=\"width:20%; height:82px; margin-right:10px; \" appearance=\"outline\">\n  \n    <mat-select \n    name=\"type\" \n    (selectionChange)=\"selectCountryCode(selectedCode)\"\n    class=\"filter-select\" \n    [(value)]=\"selectedCode\">\n      <mat-option *ngFor=\"let code of countryCode\" [value]=\"code.code\">\n        +{{code.code}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field style=\"width:72%; margin-top:10px\" appearance=\"outline\">\n    <mat-label>Mobile</mat-label>\n        <input matInput class=\"form-control\" type=\"tel\" name=\"contact\" minlength=\"10\" maxlength=\"10\" [(ngModel)]=\"advertisementModel.contact\" #contact=\"ngModel\"\n          align=\"center\" required pattern=\"[0-9]+$\">\n          <mat-error>\n            <div class=\"form-group\">\n              <div *ngIf=\"contact.invalid && (contact.dirty || contact.touched)\">\n                Mobile Is Requird\n              </div>\n            </div>\n          </mat-error>\n  </mat-form-field>\n</div>\n\n\n\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%;margin-top:5px\">\n    <mat-form-field style=\"width:96%;\" appearance=\"outline\">\n    <mat-label>Languages you support</mat-label>\n      <mat-select \n      name=\"year\" \n      (selectionChange)=\"selectedChanged(selectedLanguages)\"\n      class=\"filter-select\" \n      [(value)]=\"selectedLanguages\" \n     \n      multiple >\n        <mat-option *ngFor=\"let year of languageArray\" [value]=\"year.name\">\n          {{year.name}}\n        </mat-option>\n      </mat-select>\n  </mat-form-field>\n</div>\n\n\n\n    <button mat-raised-button class=\"loginButton\" [disabled]=\"email.invalid ||  description.invalid || title.invalid\"\n      (click)=\"addAdvertisementData(advertisementModel)\"><b>Next</b></button>\n\n<div class=\"cl_bottom_fix\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"margin-top:10px\">\n      \n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n  (click)=\"home()\">\n  <ion-icon name=\"home\" class=\"cl_bottom_nav_css\" (click)=\"home()\"></ion-icon>\n  <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">HOME</label>\n  </div>\n\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n  (click)=\"openChatList()\">\n  <ion-icon class=\"cl_bottom_nav_css\" name=\"document\" (click)=\"openChatList()\"></ion-icon>\n  <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">CHATS</label>\n  </div>\n\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n    (click)=\"postAdvertisement()\">\n  <ion-icon class=\"cl_post_css\"  name=\"add-circle\" (click)=\"postAdvertisement()\">\n  </ion-icon>\n  <label fxLayoutAlign=\"center center\" class=\"cl_selected-text_font\">SELL</label>\n  </div>\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n  (click)=\"openFavourite()\">\n  <ion-icon class=\"cl_bottom_nav_css\" name=\"heart\"  (click)=\"openFavourite()\"></ion-icon>\n  <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">MY ADS</label>\n  </div>\n\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n    (click)=\"openProfile()\">\n    <ion-icon class=\"cl_bottom_nav_css\" name=\"person\"  (click)=\"openProfile()\"></ion-icon>\n    <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">PROFILE</label>\n  </div>\n\n</div>\n\n</ion-content>\n");

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

/***/ "./src/app/pages/postadvertisement/postadvertisement-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/postadvertisement/postadvertisement-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: PostadvertisementPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostadvertisementPageRoutingModule", function() { return PostadvertisementPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _postadvertisement_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postadvertisement.page */ "./src/app/pages/postadvertisement/postadvertisement.page.ts");




var routes = [
    {
        path: '',
        component: _postadvertisement_page__WEBPACK_IMPORTED_MODULE_3__["PostadvertisementPage"]
    }
];
var PostadvertisementPageRoutingModule = /** @class */ (function () {
    function PostadvertisementPageRoutingModule() {
    }
    PostadvertisementPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PostadvertisementPageRoutingModule);
    return PostadvertisementPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/postadvertisement/postadvertisement.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/postadvertisement/postadvertisement.module.ts ***!
  \*********************************************************************/
/*! exports provided: PostadvertisementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostadvertisementPageModule", function() { return PostadvertisementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _postadvertisement_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./postadvertisement-routing.module */ "./src/app/pages/postadvertisement/postadvertisement-routing.module.ts");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _postadvertisement_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./postadvertisement.page */ "./src/app/pages/postadvertisement/postadvertisement.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");










var PostadvertisementPageModule = /** @class */ (function () {
    function PostadvertisementPageModule() {
    }
    PostadvertisementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["GooglePlaceModule"],
                _postadvertisement_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostadvertisementPageRoutingModule"]
            ],
            declarations: [_postadvertisement_page__WEBPACK_IMPORTED_MODULE_7__["PostadvertisementPage"]]
        })
    ], PostadvertisementPageModule);
    return PostadvertisementPageModule;
}());



/***/ }),

/***/ "./src/app/pages/postadvertisement/postadvertisement.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/postadvertisement/postadvertisement.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".masters {\n  --background: #f1f4f9;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: inline-flex;\n  align-items: center;\n}\n\n.TitleText {\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  align-items: center;\n}\n\n.cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.loginButton {\n  background-color: #152a3f;\n  color: white;\n  width: 28%;\n  margin-left: 35%;\n  margin-right: 35%;\n  margin-top: 5%;\n  padding-top: 5px;\n  margin-bottom: 15%;\n  padding-bottom: 5px;\n  font-size: 18px;\n}\n\n.cl_bottom_nav_css {\n  width: 24px;\n  height: 24px;\n  width: 100%;\n  color: gray;\n  background-color: #ffffff;\n}\n\n.cl_bottom_fix {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  padding: 8px;\n  border-top: 1px solid #f1f4f9;\n  background-color: white;\n}\n\n.cl_post_css {\n  width: 100%;\n  width: 24px;\n  height: 24px;\n  color: #fb7645;\n  background-color: #ffffff;\n}\n\n.cl_text_font {\n  padding-top: 4px;\n  font-size: 11px;\n}\n\n.cl_selected-text_font {\n  padding-top: 4px;\n  font-size: 11px;\n  color: #fb7645;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByYXRpay9tYXJrZXRwbGFjZWlvbmljL3NyYy9hcHAvcGFnZXMvcG9zdGFkdmVydGlzZW1lbnQvcG9zdGFkdmVydGlzZW1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wb3N0YWR2ZXJ0aXNlbWVudC9wb3N0YWR2ZXJ0aXNlbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxxQkFBQTtBQ0FKOztBREdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FERUE7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURHQTtFQUNJLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBRElBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNDLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0YsZUFBQTtBQ0RKOztBREtFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFHQSxXQUFBO0VBQ0EsV0FBQTtFQUdBLHlCQUFBO0FDTko7O0FEU0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0MsNkJBQUE7RUFDQyx1QkFBQTtBQ05OOztBRFNFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUdBLHlCQUFBO0FDUko7O0FEWUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNUSjs7QURZRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNUSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bvc3RhZHZlcnRpc2VtZW50L3Bvc3RhZHZlcnRpc2VtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1hc3RlcnMge1xuICAgIC0tYmFja2dyb3VuZDogI2YxZjRmOTtcbiAgfVxuXG4gIC5UaXRsZUhlYWRlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5UaXRsZVRleHR7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICB3aWR0aDogODElO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLmNsLWJhY2stYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nJykgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cblxuLmxvZ2luQnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTJhM2Y7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOjI4JTtcbiAgICAgbWFyZ2luLWxlZnQ6MzUlOyBcbiAgICAgbWFyZ2luLXJpZ2h0OjM1JTtcbiAgICAgbWFyZ2luLXRvcDo1JTtcbiAgICAgIHBhZGRpbmctdG9wOjVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206MTUlO1xuICAgICAgcGFkZGluZy1ib3R0b206IDVweDsgXG4gICAgZm9udC1zaXplOjE4cHg7XG4gIH1cblxuXG4gIC5jbF9ib3R0b21fbmF2X2Nzc3tcbiAgICB3aWR0aDoyNHB4O1xuICAgIGhlaWdodDoyNHB4O1xuICAgIC8vIGNvbG9yOmdyYXk7XG4gIFxuICAgIHdpZHRoOjEwMCU7XG4gICAgY29sb3I6Z3JheTtcbiAgICAvLyBwYWRkaW5nLXRvcDo1cHg7XG4gICAgLy8gcGFkZGluZy1ib3R0b206NXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIH1cbiAgXG4gIC5jbF9ib3R0b21fZml4e1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgYm90dG9tOjBweDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIHBhZGRpbmc6OHB4O1xuICAgICBib3JkZXItdG9wOjFweCBzb2xpZCAjZjFmNGY5O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC5jbF9wb3N0X2Nzc3tcbiAgICB3aWR0aDoxMDAlO1xuICAgIHdpZHRoOjI0cHg7XG4gICAgaGVpZ2h0OjI0cHg7XG4gICAgY29sb3I6ICNmYjc2NDU7XG4gICAgLy8gcGFkZGluZy10b3A6NXB4O1xuICAgIC8vIHBhZGRpbmctYm90dG9tOjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgXG4gIH1cbiAgXG4gIC5jbF90ZXh0X2ZvbnR7XG4gICAgcGFkZGluZy10b3A6NHB4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuICBcbiAgLmNsX3NlbGVjdGVkLXRleHRfZm9udHtcbiAgICBwYWRkaW5nLXRvcDo0cHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiAjZmI3NjQ1O1xuICB9XG5cbiAgLy8gaW9uLWNvbnRlbnR7XG4gIC8vICAgLS1iYWNrZ3JvdW5kOiAjZjFmNGY5ICFpbXBvcnRhbnQ7ICAgXG4gIC8vIH1cbiAgXG5cbi8vIDo6bmctZGVlcCB7XG4vLyAgIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuLy8gICB9XG4vLyB9XG5cblxuLy8gaW9uLWNvbnRlbnR7XG5cbiAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvQkcucG5nXCIpO1xuICAvLyAtLWJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4vLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjOTgyNmY1IDAlLCAjY2E5NWY2IDc0JSk7XG4vLyB9IiwiLm1hc3RlcnMge1xuICAtLWJhY2tncm91bmQ6ICNmMWY0Zjk7XG59XG5cbi5UaXRsZUhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uVGl0bGVUZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgd2lkdGg6IDgxJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jbC1iYWNrLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZ1wiKSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4ubG9naW5CdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyYTNmO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAyOCU7XG4gIG1hcmdpbi1sZWZ0OiAzNSU7XG4gIG1hcmdpbi1yaWdodDogMzUlO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTUlO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jbF9ib3R0b21fbmF2X2NzcyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogZ3JheTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNsX2JvdHRvbV9maXgge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjRmOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jbF9wb3N0X2NzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogI2ZiNzY0NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNsX3RleHRfZm9udCB7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmNsX3NlbGVjdGVkLXRleHRfZm9udCB7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICNmYjc2NDU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/postadvertisement/postadvertisement.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/postadvertisement/postadvertisement.page.ts ***!
  \*******************************************************************/
/*! exports provided: PostadvertisementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostadvertisementPage", function() { return PostadvertisementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/apiservice/api.service */ "./src/app/service/apiservice/api.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");







var PostadvertisementPage = /** @class */ (function () {
    function PostadvertisementPage(router, apiCall, toast, activatedRoute, changeDetectorRef) {
        this.router = router;
        this.apiCall = apiCall;
        this.toast = toast;
        this.activatedRoute = activatedRoute;
        this.changeDetectorRef = changeDetectorRef;
        this.selectedCode = "91";
        this.countryCode = [{ "code": "91", "name": "India" },
            { "code": "39", "name": "Italy" },
            { "code": "81", "name": "Japan" },
            { "code": "52", "name": "Mexico" }];
        this.languagesArray = [];
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.advertisementModel = {};
        this.advertisementArray = [];
        this.advertisementObject = {};
        this.categoryArray = [
            {
                "categoryName": "abc",
                "categoryId": "1"
            },
            {
                "categoryName": "abcd",
                "categoryId": "2"
            },
            {
                "categoryName": "abce",
                "categoryId": "3"
            },
            {
                "categoryName": "abcf",
                "categoryId": "4"
            }
        ];
        this.genderArray = [
            {
                "gender": "Male",
                "genderId": "0"
            },
            {
                "gender": "Female",
                "genderId": "1"
            }
        ];
    }
    //toCheck: boolean =  false;
    PostadvertisementPage.prototype.equals = function (objOne, objTwo) {
        // if (typeof objOne !== 'undefined' && typeof objTwo !== 'undefined') {
        //   return objTwo.id === objOne.id;
        // }
    };
    PostadvertisementPage.prototype.selectAll = function (checkAll, select, values) {
        console.log("selected languages:" + select);
        console.log("selected values:" + values);
        console.log("selected values:" + this.selectedLanguages);
        if (checkAll) {
            select.update.emit(values);
        }
        else {
            select.update.emit([]);
        }
    };
    PostadvertisementPage.prototype.ionViewWillEnter = function () {
        this.getCategory();
        this.getLanguages();
        // this.advertisementModel['categoryId']= "2";
        this.postStatus = localStorage.getItem("postStatus");
        // this.status = this.activatedRoute.snapshot.params['advertisementStatus'];
        if (this.postStatus == "1") {
            var advertisementDetail = localStorage.getItem("ADVERTISEMENTDATA");
            this.advertisementObject = JSON.parse(advertisementDetail);
            console.log("advertisementObject:" + this.advertisementObject['address']);
            this.advertisementModel['description'] = this.advertisementObject['description'];
            this.advertisementModel['title'] = this.advertisementObject['title'];
            this.selectedCode = this.advertisementObject['countryCode'];
            var checkType = this.advertisementObject['gender'];
            if (checkType == 0) {
                this.checkRadioButton = "male";
            }
            else {
                this.checkRadioButton = "female";
            }
            this.categoryId = this.advertisementObject['categoryId'];
            this.advertisementModel['email'] = this.advertisementObject['email'];
            this.advertisementModel['contact'] = this.advertisementObject['mobile'];
            this.selectedLanguages = this.advertisementObject['languages'];
            this.languagesArray = this.advertisementObject['languages'];
            console.log("languagesArray ::" + this.selectedLanguages);
        }
        else {
            this.advertisementModel['description'] = "";
            this.advertisementModel['title'] = "";
            this.advertisementModel['email'] = "";
            this.advertisementModel['contact'] = "";
            this.languagesArray = [];
            this.selectedLanguages = [];
            this.checkRadioButton = "check";
            this.categoryId = 0;
        }
    };
    PostadvertisementPage.prototype.ngOnInit = function () {
    };
    PostadvertisementPage.prototype.getLanguages = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].version + "languages";
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.languageArray = MyResponse['result']['list'];
            // this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            // this.loader.hideBlockingLoaderAuth();
            // this.networkServices.checkInternetConnection();
            // this.networkServices.onPageLoadCheckInternet();
        });
    };
    PostadvertisementPage.prototype.getCategory = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].version + "category/" + 0 + "/sub-category";
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.categoryArray = MyResponse['result']['list'];
        }, function (error) {
        });
    };
    PostadvertisementPage.prototype.addAdvertisementData = function (data) {
        // category, languages, gender
        // let languageArray = data.languages;
        // this.languagesArray = languageArray.split(',');
        if (this.languagesArray.length == 0) {
            this.presentToast("Please select languages");
        }
        else {
            if (this.advertisementModel['gender'] == '0' || this.advertisementModel['gender'] == '1') {
                if (this.categoryId == undefined || this.categoryId == null || this.categoryId == "") {
                    this.presentToast("Please select category id");
                }
                else {
                    var advertisemntInfo = {
                        "title": data.title,
                        "description": data.description,
                        "contact": this.advertisementModel['contact'],
                        "gender": this.advertisementModel['gender'],
                        "languages": this.languagesArray,
                        "email": this.advertisementModel['email'],
                        "countryCode": this.selectedCode,
                        "categoryId": this.categoryId
                    };
                    console.log("data:" + JSON.stringify(advertisemntInfo));
                    this.router.navigate(['/nextadvertisement', { advertisementData: JSON.stringify(advertisemntInfo) }]);
                    // this.router.navigate(['/nextadvertisement']);
                }
            }
            else {
                this.presentToast("Please select gender");
            }
        }
    };
    PostadvertisementPage.prototype.radioGroupChange = function (event) {
        console.log("radioGroupChange", event.detail);
        this.selectedRadioGroup = event.detail.value;
        if (this.selectedRadioGroup == 'male') {
            this.advertisementModel['gender'] = 0;
            this.checkRadioButton = "male";
        }
        else if (this.selectedRadioGroup == 'female') {
            this.advertisementModel['gender'] = 1;
            this.checkRadioButton = "female";
        }
        else {
            this.advertisementModel['gender'] = 1;
            this.checkRadioButton = "female";
        }
    };
    PostadvertisementPage.prototype.selectCountryCode = function (data) {
        this.selectedCode = data;
        console.log("countryCode:" + (this.selectedCode));
    };
    PostadvertisementPage.prototype.presentToast = function (message) {
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
    PostadvertisementPage.prototype.selectCategoryType = function (data) {
        // alert("check data:"+data);
        console.log("show id:" + data);
        this.categoryId = data;
    };
    PostadvertisementPage.prototype.selectGenderType = function (id) {
        this.advertisementModel['gender'] = id;
    };
    PostadvertisementPage.prototype.selectedChanged = function (selectedLanguage) {
        // alert("selectedLanguage:"+JSON.stringify(selectedLanguage));
        this.languagesArray = (selectedLanguage);
    };
    PostadvertisementPage.prototype.openChatList = function () {
        this.router.navigate(['/chatlist']);
    };
    PostadvertisementPage.prototype.postAdvertisement = function () {
        this.router.navigate(['/postadvertisement']);
        // this.router.navigate(['/secondpageadvertisement']);
    };
    PostadvertisementPage.prototype.home = function () {
        this.router.navigate(['/home']);
    };
    PostadvertisementPage.prototype.openFavourite = function () {
        this.router.navigate(['/favourite']);
    };
    PostadvertisementPage.prototype.openProfile = function () {
        this.router.navigate(['/profile']);
    };
    PostadvertisementPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    PostadvertisementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-postadvertisement',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./postadvertisement.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/postadvertisement/postadvertisement.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./postadvertisement.page.scss */ "./src/app/pages/postadvertisement/postadvertisement.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], PostadvertisementPage);
    return PostadvertisementPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-postadvertisement-postadvertisement-module.js.map