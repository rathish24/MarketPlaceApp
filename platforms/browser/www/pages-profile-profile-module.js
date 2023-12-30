(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div fxLayout=\"column\">\n\n    <div class=\"img-div\" fxLayoutAlign=\"center center\" fxLayout=\"column\">\n\n      <ion-row style=\"position: absolute;top:0px;width:100%\">\n        <ion-col size=\"1\">\n          <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button>\n        </ion-col>\n        <ion-col size=\"9\" fxLayoutAlign=\"start center\">\n          <ion-label style=\"color:white;\" class=\"TitleText\">Profile</ion-label>\n        </ion-col>\n        <ion-col size=\"2\" fxLayoutAlign=\"center center\">\n          <ion-icon style=\"color: white;width:30px;height:30px;\" name=\"exit-outline\" (click)=\"presentAlert()\">\n          </ion-icon>\n        </ion-col>\n      </ion-row>\n\n      <img *ngIf=\"profileImg == '' \" src=\"../../../assets/agent.png\" class=\"img-css\" />\n      <img *ngIf=\"profileImg != '' \" src=\"{{profileImg}}\" class=\"img-css\" />\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <label style=\"margin-top:10px; color: white;font-size: 20px;\">{{name}}</label>\n        <mat-icon (click)=\"updateProfile()\" *ngIf=\"updateStatus == 0 \" class=\"cl_edit_css\">edit</mat-icon>\n\n      </div>\n\n      <div style=\" position: absolute;bottom:-55px;width:100%\" fxLayoutAlign=\"center center\">\n        <ion-card class=\"show-count-css\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n          <div fxFlex=\"50\" class=\"first-subcount-div\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <label class=\"count-css\">{{advertisementCount}}</label>\n            <label class=\"type-text-css\">Advertisement</label>\n          </div>\n          <div fxFlex=\"50\" class=\"second-subcount-div\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <label class=\"count-css\">{{bannersCount}}</label>\n            <label class=\"type-text-css\">Banner</label>\n          </div>\n\n        </ion-card>\n      </div>\n\n    </div>\n\n\n    <div fxLayout=\"column\" style=\"margin-top:50px;\">\n      <div style=\"width:100%;padding:5px;margin-top: 15px;\" fxLayout=\"row\" *ngIf=\"showMobile == 0 \" (click)=\"callSupport(mobile)\">\n        <div fxFlex=\"20\" fxLayoutAlign=\"center start\">\n          <ion-icon class=\"icon-css\" name=\"call\"></ion-icon>\n        </div>\n        <div fxFlex=\"80\" fxLayoutAlign=\"start center\">\n          <ion-label class=\"cl_content_fontsize\" >{{mobile}}</ion-label>\n        </div>\n        \n      </div>\n      <div style=\"width:80;padding:5px;margin-top: 1px;\" fxLayout=\"row\">\n        <hr class=\"solid\">\n      </div>\n\n      <div style=\"width:100%;padding:5px;\" fxLayout=\"row\" (click)=\"emailSupport(email)\">\n        <div fxFlex=\"20\" fxLayoutAlign=\"center start\">\n          <ion-icon class=\"icon-css\" name=\"mail\"></ion-icon>\n        </div>\n        <div fxFlex=\"80\" fxLayoutAlign=\"start center\">\n          <ion-label class=\"cl_content_fontsize\" >{{email}}</ion-label>\n        </div>\n      </div>\n\n      <div style=\"width:80;padding:5px;margin-top: 1px;\" fxLayout=\"row\">\n        <hr class=\"solid\">\n      </div>\n\n      <div *ngIf=\"gender != 'not updated'\" style=\"width:100%;padding:5px;\" fxLayout=\"row\">\n        <div fxFlex=\"20\" fxLayoutAlign=\"center center\">\n          <ion-icon class=\"icon-css\" name=\"person\"></ion-icon>\n        </div>\n        <div fxFlex=\"80\" fxLayoutAlign=\"start start\">\n          <ion-label class=\"cl_content_fontsize\">{{gender}}</ion-label>\n        </div>\n      </div>\n\n      <div style=\"width:80;padding:5px;margin-top: 1px;\" fxLayout=\"row\" *ngIf=\"gender != 'not updated'\">\n        <hr class=\"solid\">\n      </div>\n\n      <div style=\"width:100%;padding:5px;\" *ngIf=\"updateStatus == 0 \" fxLayout=\"row\"\n        (click)=\"viewPaymentLogs()()\">\n        <div fxFlex=\"20\" fxLayoutAlign=\"center start\">\n          <ion-icon class=\"icon-css\" name=\"document\"></ion-icon>\n        </div>\n        <div fxFlex=\"60\" fxLayoutAlign=\"start center\">\n          <ion-label class=\"cl_content_fontsize\">Payment History</ion-label>\n        </div>\n        <div fxFlex=\"20\" fxLayoutAlign=\"center start\">\n          <ion-icon class=\"arrow-icon-css\" name=\"chevron-forward-outline\"></ion-icon>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"cl_bottom_fix\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"margin-top:10px\">\n\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" (click)=\"home()\">\n      <ion-icon name=\"home\" class=\"cl_bottom_nav_css\" (click)=\"home()\"></ion-icon>\n      <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">HOME</label>\n    </div>\n\n\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" (click)=\"openChatList()\">\n      <ion-icon class=\"cl_bottom_nav_css\" name=\"document\" (click)=\"openChatList()\"></ion-icon>\n      <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">CHATS</label>\n    </div>\n\n\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" (click)=\"postAdvertisement()\">\n      <ion-icon class=\"cl_bottom_nav_css\" name=\"add-circle\">\n      </ion-icon>\n      <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">SELL</label>\n    </div>\n\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" (click)=\"openFavourite()\">\n      <ion-icon class=\"cl_bottom_nav_css\" name=\"heart\" (click)=\"openFavourite()\"></ion-icon>\n      <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">MY ADS</label>\n    </div>\n\n\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" (click)=\"openProfile()\">\n      <ion-icon class=\"cl_post_css\" name=\"person\" (click)=\"openProfile()\"></ion-icon>\n      <label fxLayoutAlign=\"center center\" class=\"cl_selected-text_font\">PROFILE</label>\n    </div>\n\n  </div>\n\n\n\n</ion-content>");

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

/***/ "./src/app/pages/profile/profile-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");




var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
var ProfilePageRoutingModule = /** @class */ (function () {
    function ProfilePageRoutingModule() {
    }
    ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProfilePageRoutingModule);
    return ProfilePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");










var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__["GooglePlaceModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cl_bottom_nav_css {\n  width: 24px;\n  height: 24px;\n  width: 100%;\n  color: gray;\n  background-color: #ffffff;\n}\n\n.cl_bottom_fix {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  padding: 8px;\n  border-top: 1px solid #f1f4f9;\n  background-color: white;\n}\n\n.cl_post_css {\n  width: 100%;\n  width: 24px;\n  height: 24px;\n  color: #fb7645;\n  background-color: #ffffff;\n}\n\n.cl_text_font {\n  padding-top: 4px;\n  font-size: 14px;\n}\n\n.cl_selected-text_font {\n  padding-top: 4px;\n  font-size: 14px;\n  color: #fb7645;\n}\n\n.cl_title_fontsize {\n  width: 18px;\n  height: 18px;\n  color: grey;\n}\n\n.cl_content_fontsize {\n  font-size: 16px;\n  color: black;\n}\n\n#map_canvas {\n  width: 100%;\n  margin: auto;\n  height: 35vh;\n}\n\n.cl_card_css {\n  width: 100%;\n  box-shadow: none !important;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  padding-bottom: 20px;\n  margin: 0px;\n  margin-top: -30px;\n}\n\n.cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 25px;\n  height: 25px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: inline-flex;\n  align-items: center;\n}\n\n.TitleText {\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  margin-left: 10px;\n}\n\n.cl_edit_css {\n  font-size: 19px;\n  color: white;\n  margin-left: 5px;\n  margin-top: 12px;\n}\n\n.img-div {\n  position: relative;\n  padding-bottom: 70px;\n  background: linear-gradient(to bottom, #fe4f14, #fe8860, #feae93);\n  width: 100%;\n  border-radius: 0px 0px 16px 16px;\n}\n\n.img-css {\n  width: 200px;\n  height: 200px;\n  border-radius: 100%;\n  display: block;\n  color: white;\n  margin-top: 100px;\n  background: #f1f4f9;\n  border: 0.5px solid #9b9999;\n  -o-object-position: center;\n     object-position: center;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.show-count-css {\n  width: 90%;\n  border-radius: 30px;\n  padding: 2px;\n}\n\n.first-subcount-div {\n  padding: 5px;\n}\n\n.second-subcount-div {\n  padding: 5px;\n}\n\n.count-css {\n  color: #fb7645;\n  font-size: 25px;\n  padding: 3px;\n  font-weight: 450;\n}\n\n.type-text-css {\n  color: gray;\n  font-size: 14px;\n  padding: 3px;\n}\n\n.icon-css {\n  height: 20px;\n  width: 20px;\n  margin: 2px;\n  color: #fb7645;\n}\n\n.arrow-icon-css {\n  height: 25px;\n  width: 25px;\n  margin: 2px;\n  color: gray;\n}\n\n.row-css {\n  margin: 5px;\n  width: 100%;\n}\n\nhr.solid {\n  border-top: 1px solid #bbb;\n  width: 80%;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByYXRpay9tYXJrZXRwbGFjZWlvbmljL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBR0EsV0FBQTtFQUNBLFdBQUE7RUFHQSx5QkFBQTtBQ0xGOztBRFFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNDLDZCQUFBO0VBQ0MsdUJBQUE7QUNMSjs7QURRQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFHQSx5QkFBQTtBQ1BGOztBRFdBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDUkY7O0FEV0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDUkY7O0FEWUE7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNWRjs7QURjRTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDWEY7O0FEZ0JBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDYkY7O0FEZ0JBO0VBQ0UsV0FBQTtFQUdBLDJCQUFBO0VBRUEsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDaEJGOztBRHFCQTtFQUNFLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNsQkY7O0FEdUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDcEJGOztBRHVCQTtFQUdFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDdEJGOztBRDBCQTtFQUNFLGVBQUE7RUFHQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ3pCRjs7QUQ0QkE7RUFFRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUVBQUE7RUFHQSxXQUFBO0VBQ0EsZ0NBQUE7QUM1QkY7O0FEK0JBO0VBQ0csWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7S0FBQSx1QkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUM1Qkg7O0FEK0JBO0VBR0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0QsWUFBQTtBQzlCRDs7QURtQ0E7RUFHQSxZQUFBO0FDbENBOztBRHFDQTtFQUdFLFlBQUE7QUNwQ0Y7O0FEdUNBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNwQ0E7O0FEdUNBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDcENGOztBRHVDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0MsV0FBQTtFQUNBLGNBQUE7QUNwQ0g7O0FEdUNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQyxXQUFBO0VBQ0EsV0FBQTtBQ3BDSDs7QUR1Q0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQ3BDRjs7QUR1Q0E7RUFDRSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDcENGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uY2xfYm90dG9tX25hdl9jc3N7XG4gIHdpZHRoOjI0cHg7XG4gIGhlaWdodDoyNHB4O1xuICAvLyBjb2xvcjpncmF5O1xuXG4gIHdpZHRoOjEwMCU7XG4gIGNvbG9yOmdyYXk7XG4gIC8vIHBhZGRpbmctdG9wOjVweDtcbiAgLy8gcGFkZGluZy1ib3R0b206NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY2xfYm90dG9tX2ZpeHtcbiAgcG9zaXRpb246IGZpeGVkOyBcbiAgYm90dG9tOjBweDtcbiAgd2lkdGg6MTAwJTtcbiAgcGFkZGluZzo4cHg7XG4gICBib3JkZXItdG9wOjFweCBzb2xpZCAjZjFmNGY5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uY2xfcG9zdF9jc3N7XG4gIHdpZHRoOjEwMCU7XG4gIHdpZHRoOjI0cHg7XG4gIGhlaWdodDoyNHB4O1xuICBjb2xvcjogI2ZiNzY0NTtcbiAgLy8gcGFkZGluZy10b3A6NXB4O1xuICAvLyBwYWRkaW5nLWJvdHRvbTo1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gXG59XG5cbi5jbF90ZXh0X2ZvbnR7XG4gIHBhZGRpbmctdG9wOjRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2xfc2VsZWN0ZWQtdGV4dF9mb250e1xuICBwYWRkaW5nLXRvcDo0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmYjc2NDU7XG59XG5cblxuLmNsX3RpdGxlX2ZvbnRzaXple1xuICAvLyBtYXJnaW46LTFweDs7XG4gIHdpZHRoOjE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgY29sb3I6IGdyZXk7XG4gIC8vIG1hcmdpbi1yaWdodDoxMHB4O1xuICB9XG4gIFxuICAuY2xfY29udGVudF9mb250c2l6ZXtcbiAgZm9udC1zaXplOjE2cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgLy8gcGFkZGluZzozcHg7XG4gIH1cbiAgXG5cbiNtYXBfY2FudmFze1xuICB3aWR0aDoxMDAlO1xuICBtYXJnaW46YXV0bztcbiAgaGVpZ2h0OiAzNXZoO1xufVxuXG4uY2xfY2FyZF9jc3N7XG4gIHdpZHRoOjEwMCU7XG4gIC8vIGhlaWdodDo4MCU7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xuICBwYWRkaW5nLWJvdHRvbToyMHB4O1xuICBtYXJnaW46MHB4O1xuICBtYXJnaW4tdG9wOi0zMHB4O1xufVxuXG5cblxuLmNsLWJhY2stYnV0dG9ue1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZycpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICAvLyBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cblxuLlRpdGxlSGVhZGVye1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLlRpdGxlVGV4dHtcbiAgLy8gZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIC8vIHRleHQtYWxpZ246bGVmdDtcbiAgZm9udC1zaXplOiAxOXB4O1xuICB3aWR0aDogODElO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWxlZnQ6MTBweDtcbiAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNsX2VkaXRfY3Nze1xuICBmb250LXNpemU6MTlweDtcbiAgLy8gbWFyZ2luLXRvcDoxMHB4O1xuICAvLyBtYXJnaW4tbGVmdDozcHg7XG4gIGNvbG9yOndoaXRlO1xuICBtYXJnaW4tbGVmdDo1cHg7XG4gIG1hcmdpbi10b3A6MTJweDtcbn1cblxuLmltZy1kaXZ7XG4gIC8vIGhlaWdodDoyNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTo3MHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmU0ZjE0LCNmZTg4NjAsI2ZlYWU5Myk7XG4gIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sI2Y4ODg2MywjZmNiMjlhKTtcbiAgLy8gYm9yZGVyOjFweCBzb2xpZCBncmF5O1xuICB3aWR0aDoxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDE2cHggMTZweDtcbn1cblxuLmltZy1jc3N7XG4gICB3aWR0aDoyMDBweDtcbiAgIGhlaWdodDoyMDBweDsgXG4gICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgZGlzcGxheTogYmxvY2s7XG4gICBjb2xvcjp3aGl0ZTtcbiAgIG1hcmdpbi10b3A6MTAwcHg7XG4gICBiYWNrZ3JvdW5kOiNmMWY0Zjk7XG4gICBib3JkZXI6MC41cHggc29saWQgcmdiKDE1NSwgMTUzLCAxNTMpIDtcbiAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5zaG93LWNvdW50LWNzc3tcbiAgLy8gYm9yZGVyLXRvcDoxcHggc29saWQgcmdiKDE2OCwgMTY1LCAxNjUpO1xuICAvLyBib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2IoMTY4LCAxNjUsIDE2NSk7XG4gIHdpZHRoOjkwJTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiBwYWRkaW5nOjJweDtcblxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNGY5O1xufVxuXG4uZmlyc3Qtc3ViY291bnQtZGl2e1xuLy8gYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCBncmF5O1xuLy8gaGVpZ2h0OjUwcHg7XG5wYWRkaW5nOjVweDtcbn1cblxuLnNlY29uZC1zdWJjb3VudC1kaXZ7XG4gIC8vIGJvcmRlcjoxcHggc29saWQgZ3JheTtcbiAgLy8gaGVpZ2h0OjUwcHg7XG4gIHBhZGRpbmc6NXB4O1xufVxuXG4uY291bnQtY3Nze1xuY29sb3I6I2ZiNzY0NTtcbmZvbnQtc2l6ZToyNXB4O1xucGFkZGluZzozcHg7XG5mb250LXdlaWdodDo0NTA7XG59XG5cbi50eXBlLXRleHQtY3Nze1xuICBjb2xvcjpncmF5O1xuICBmb250LXNpemU6MTRweDtcbiAgcGFkZGluZzozcHg7XG59XG5cbi5pY29uLWNzc3tcbiAgaGVpZ2h0OjIwcHg7XG4gIHdpZHRoOjIwcHg7XG4gICBtYXJnaW46MnB4O1xuICAgY29sb3I6I2ZiNzY0NTtcbn1cblxuLmFycm93LWljb24tY3Nze1xuICBoZWlnaHQ6MjVweDtcbiAgd2lkdGg6MjVweDtcbiAgIG1hcmdpbjoycHg7XG4gICBjb2xvcjpncmF5O1xufVxuXG4ucm93LWNzc3tcbiAgbWFyZ2luOjVweDtcbiAgd2lkdGg6MTAwJTtcbn1cblxuaHIuc29saWQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2JiYjtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbiIsIi5jbF9ib3R0b21fbmF2X2NzcyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogZ3JheTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNsX2JvdHRvbV9maXgge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjRmOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jbF9wb3N0X2NzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogI2ZiNzY0NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNsX3RleHRfZm9udCB7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNsX3NlbGVjdGVkLXRleHRfZm9udCB7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmYjc2NDU7XG59XG5cbi5jbF90aXRsZV9mb250c2l6ZSB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4uY2xfY29udGVudF9mb250c2l6ZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4jbWFwX2NhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMzV2aDtcbn1cblxuLmNsX2NhcmRfY3NzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG5cbi5jbC1iYWNrLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZ1wiKSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMDtcbn1cblxuLlRpdGxlSGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5UaXRsZVRleHQge1xuICBmb250LXNpemU6IDE5cHg7XG4gIHdpZHRoOiA4MSU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmNsX2VkaXRfY3NzIHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5pbWctZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZlNGYxNCwgI2ZlODg2MCwgI2ZlYWU5Myk7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDE2cHggMTZweDtcbn1cblxuLmltZy1jc3Mge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjFmNGY5O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICM5Yjk5OTk7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnNob3ctY291bnQtY3NzIHtcbiAgd2lkdGg6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4uZmlyc3Qtc3ViY291bnQtZGl2IHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uc2Vjb25kLXN1YmNvdW50LWRpdiB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmNvdW50LWNzcyB7XG4gIGNvbG9yOiAjZmI3NjQ1O1xuICBmb250LXNpemU6IDI1cHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgZm9udC13ZWlnaHQ6IDQ1MDtcbn1cblxuLnR5cGUtdGV4dC1jc3Mge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi5pY29uLWNzcyB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbjogMnB4O1xuICBjb2xvcjogI2ZiNzY0NTtcbn1cblxuLmFycm93LWljb24tY3NzIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgbWFyZ2luOiAycHg7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4ucm93LWNzcyB7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaHIuc29saWQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2JiYjtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/apiservice/api.service */ "./src/app/service/apiservice/api.service.ts");
/* harmony import */ var src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/network/network.service */ "./src/app/service/network/network.service.ts");
/* harmony import */ var src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/loaderservice/loader.service */ "./src/app/service/loaderservice/loader.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _adplansimage_adplansimage_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../adplansimage/adplansimage.page */ "./src/app/pages/adplansimage/adplansimage.page.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/ngx/index.js");














var ProfilePage = /** @class */ (function () {
    function ProfilePage(dialog, router, alertCtrl, networkServices, activatedRoute, loader, facebook, googlePlus, menuController, apiCall, callNumber, emailComposer) {
        this.dialog = dialog;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.networkServices = networkServices;
        this.activatedRoute = activatedRoute;
        this.loader = loader;
        this.facebook = facebook;
        this.googlePlus = googlePlus;
        this.menuController = menuController;
        this.apiCall = apiCall;
        this.callNumber = callNumber;
        this.emailComposer = emailComposer;
        this.showMobile = 0;
        this.noInternet = 1;
        this.updateStatus = 0;
        this.isLoggedIn = false;
        this.profileImg = "";
        this.bannersCount = 0;
        this.advertisementCount = 0;
        this.menuController.enable(false);
    }
    ProfilePage.prototype.ngOnInit = function () {
        // this.profileImg = localStorage.getItem("profileImage");
        // this.userId = this.activatedRoute.snapshot.params['userId'];
        // console.log("user id:" + this.userId);
        // this.getProfileInfo();
        // this.getCountryCode();
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.userId = this.activatedRoute.snapshot.params['userId'];
        console.log("user id:" + this.userId);
        this.loginType = localStorage.getItem("loginType");
        // if (this.userId == undefined || this.userId == "" || this.userId == null) {
        //   this.userId = localStorage.getItem('userId');
        //   this.updateStatus = 0;
        // } else {
        //   this.updateStatus = 1;
        // }
        this.getProfileInfo();
    };
    ProfilePage.prototype.getCountryCode = function () {
        var _this = this;
        var url = "https://www.universal-tutorial.com/api/countries";
        this.apiCall.get(url).subscribe(function (MyResponse) {
            console.log("display::" + MyResponse);
        }, function (error) {
            console.log("display::" + error);
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    ProfilePage.prototype.getProfileInfo = function () {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        this.noInternet = 1;
        if (this.userId == undefined || this.userId == "" || this.userId == null) {
            this.userId = localStorage.getItem('userId');
            // this.updateStatus = 0;
        }
        else {
            // this.updateStatus = 1;
        }
        this.loginUserId = localStorage.getItem('userId');
        if (this.loginUserId == this.userId) {
            this.updateStatus = 0;
            console.log("match id:");
        }
        else {
            this.updateStatus = 1;
            console.log("id not match");
        }
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].version + "users/" + this.userId;
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.profileDetail = MyResponse['result'];
            console.log("checking profile info", "" + JSON.stringify(_this.profileDetail));
            _this.name = _this.profileDetail.name;
            localStorage.setItem("getName", _this.name);
            if (_this.profileDetail.mobile == null || _this.profileDetail.mobile == "null" || _this.profileDetail.mobile == "") {
                _this.mobile = "";
                _this.showMobile = 1;
                console.log("ger profile mobile null:");
            }
            else {
                _this.showMobile = 0;
                console.log("ger profile mobile:" + _this.mobile);
                _this.mobile = _this.profileDetail.mobile;
            }
            // this.mobile = this.profileDetail.mobile;
            _this.email = _this.profileDetail.email;
            if (_this.profileDetail.gender == 0) {
                _this.gender = "Male";
            }
            else if (_this.profileDetail.gender == 1) {
                _this.gender = "Female";
            }
            else {
                _this.gender = "not updated";
            }
            _this.profileImg = _this.profileDetail.image;
            if (_this.profileImg == null || _this.profileImg == undefined || _this.profileImg == "") {
                console.log("ger profile empty");
                _this.profileImg = "";
            }
            else {
                console.log("ger profileimage:" + _this.profileImg);
                _this.profileImg = _this.profileDetail.image;
            }
            _this.bannersCount = _this.profileDetail.bannersCount;
            _this.advertisementCount = _this.profileDetail.advertisementCount;
            _this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
            _this.noInternet = 0;
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    ProfilePage.prototype.callSupport = function (mobile) {
        this.callNumber.callNumber(mobile, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    ProfilePage.prototype.emailSupport = function (email) {
        console.log("Email open", email);
        var emailData = {
            to: email,
        };
        this.emailComposer.open(emailData);
        //  .then(res => console.log("Launched email app",res))
        //  .catch(err => console.log("Error while opening email app",err))
    };
    ProfilePage.prototype.openChatList = function () {
        this.router.navigate(['/chatlist']);
    };
    ProfilePage.prototype.postAdvertisement = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_adplansimage_adplansimage_page__WEBPACK_IMPORTED_MODULE_11__["AdplansimagePage"], {
            width: '500px',
        });
        dialogRef.afterClosed().subscribe(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var status_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (result) {
                    status_1 = "0";
                    localStorage.setItem("postStatus", status_1);
                    this.router.navigate(['/newadvertisementform']);
                }
                return [2 /*return*/];
            });
        }); });
    };
    ProfilePage.prototype.home = function () {
        this.router.navigate(['/home']);
    };
    ProfilePage.prototype.openFavourite = function () {
        this.router.navigate(['/favourite']);
    };
    ProfilePage.prototype.openProfile = function () {
        this.router.navigate(['/profile']);
    };
    ProfilePage.prototype.logOut = function () {
        var _this = this;
        localStorage.setItem("cityname", "");
        if (this.loginType == "fb") {
            this.facebook.logout()
                .then(function (res) { return _this.isLoggedIn = false; })
                .catch(function (e) { return console.log('Error logout from Facebook', e); });
            localStorage.clear();
            this.router.navigate(['/login'], { replaceUrl: true });
            localStorage.setItem("loginStatus", "no");
        }
        else if (this.loginType == "gmail") {
            this.googlePlus.logout();
            localStorage.clear();
            this.router.navigate(['/login'], { replaceUrl: true });
            localStorage.setItem("loginStatus", "no");
        }
        else {
            localStorage.clear();
            this.router.navigate(['/login'], { replaceUrl: true });
            localStorage.setItem("loginStatus", "no");
        }
    };
    ProfilePage.prototype.goBackword = function () {
        window.history.back();
    };
    ProfilePage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: '',
                            message: 'Are you sure you want to logout?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Yes',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.logOut();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.setAttribute('role', 'alert');
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.updateProfile = function () {
        var profileData = {
            "name": this.name,
            "email": this.email,
            "mobile": this.mobile,
            "image": this.profileImg
        };
        this.router.navigate(['/updateprofile', { profileData: JSON.stringify(this.profileDetail) }]);
    };
    ProfilePage.prototype.viewPaymentLogs = function () {
        var senData = {};
        senData['userId'] = this.userId;
        senData['status'] = "all";
        this.router.navigate(['/paymentlogs', { senPaymentLogData: JSON.stringify(senData) }]);
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
        { type: src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
        { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__["Facebook"] },
        { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_10__["GooglePlus"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"] },
        { type: src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_12__["CallNumber"] },
        { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_13__["EmailComposer"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"],
            src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__["Facebook"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_10__["GooglePlus"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"],
            src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_12__["CallNumber"],
            _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_13__["EmailComposer"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module.js.map