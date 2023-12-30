(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"MainLoginClass\">\n  <div fxLayout=\"column\"  style=\"height:100%\">\n<div style=\"height:60%;width:100%;position: relative;\" >\n  <img src=\"./assets/loginbg.png\" style=\"width:100%; height:100%;\"/>\n<label fxLayoutAlign=\"center center\" class=\"app-title-css\">HOLYHUB</label>\n</div>\n\n<div class=\"sociallogin-container\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n  <label fxLayoutAlign=\"center center\" class=\"desc-text\">Sign in with Social Networks</label>\n\n<div  fxLayout=\"row\" style=\"width:90%;margin-top:15px\">\n\n\n<div fxFlex=\"48\" fxLayout=\"row\"  (click)=\"fbLogin()\" >\n  <button mat-raised-button class=\"loginFbButton\">\n    <span style=\"font-size:22px\">f</span> &nbsp;&nbsp;&nbsp;   FACEBOOK\n  </button>\n \n</div>\n\n<div fxFlex=\"4\"></div>\n\n\n<div fxFlex=\"48\" fxLayout=\"row\"  (click)=\"loginWithGmail()\">\n  <!-- <div fxFlex=\"48\" fxLayout=\"row\"  (click)=\"login()\"> -->\n\n  <button mat-raised-button class=\"loginGmailButton\">\n    <span style=\"font-size:20px\">G</span> &nbsp;&nbsp;&nbsp;   GOOGLE\n  </button>\n \n</div>\n\n\n    \n\n</div>\n<div  fxLayout=\"row\"  style=\"width:90%;margin-top:15px;margin-right:15p\">\n\n\n  <div fxFlex=\"48\" fxLayout=\"row\" fxLayoutAlign=\"end center\" (click)=\"loginClick()\" >\n    <div  style=\"color: #FF6464;background: transparent; font-size: 20px;\" >\n      Login   \n    </div>\n   \n  </div>\n  \n  <div  style=\"color: #FF6464;font-size:20px\" >\n    &nbsp;/&nbsp;  \n  </div>\n  \n  \n  <div fxFlex=\"49\" style=\"marker-start: 2px;\" fxLayout=\"row\" fxLayoutAlign=\"start center\" (click)=\"signupClick()\">\n    <!-- <div fxFlex=\"48\" fxLayout=\"row\"  (click)=\"login()\"> -->\n  \n    <div  style=\"color: #FF6464;background:transparent; font-size: 20px;\" >\n    Register\n    </div>\n   \n  </div>\n  \n  \n      \n  \n  </div>\n<label fxLayoutAlign=\"center center\" class=\"desc-text-signin\">By sign in you agree to the &nbsp;<span class=\"color-change\">Terms </span>&nbsp; and the &nbsp;<span class=\"color-change\"> Conditions </span></label>\n\n</div>\n  \n  </div>\n\n \n</div>\n\n\n  <!-- <button fxLayout=\"row\" fxFlex=\"100\"  mat-raised-button class=\"loginFbButton\" (click)=\"fbLogin()\"><label fxFlex=\"50\" fxLayoutAlign=\"start center\">f</label><label fxFlex=\"50\" fxLayoutAlign=\"center center\">LOGIN WITH FACEBOOK</label></button>\n  <button fxLayout=\"row\" mat-raised-button class=\"loginGmailButton\" (click)=\"loginWithGmail()\"><label fxLayoutAlign=\"start center\">G</label><label fxLayoutAlign=\"center center\">LOGIN WITH GMAIL</label></button> -->\n\n        <!-- <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:100%\">\n          <mat-form-field style=\"width:92%; margin-top:5%;margin-left:4%;color:black; margin-right:4%\"\n            appearance=\"outline\">\n            <mat-label style=\"color:gray\">Phone Number</mat-label>\n            <input matInput type=\"tel\" id=\"mobile\" class=\"form-control\" required minlength=\"10\" appearance=\"outline\"\n              maxlength=\"10\" [(ngModel)]=\"loginModel.mobile\" #mobile=\"ngModel\" />\n            <mat-error>\n              <div class=\"form-group\">\n                <div *ngIf=\"mobile.invalid && (mobile.dirty || mobile.touched)\" class=\"alert alert-danger\">\n                  <div class=\"LoginError\" *ngIf=\"mobile.errors.required\">\n                    Please Enter Phone Number\n                  </div>\n                  <div class=\"LoginError\" *ngIf=\"mobile.errors.minlength\">\n                    Phone Number must be at least 10 digits long.\n                  </div>\n  \n  \n                </div>\n              </div>\n            </mat-error>\n          </mat-form-field>\n  \n          <mat-form-field style=\"width:92%;color:black ;margin-top:5px\" appearance=\"outline\">\n            <mat-label style=\"color:gray\">Password</mat-label>\n            <input matInput [type]=\"hide ? 'password' : 'text'\" id=\"password\" class=\"form-control\"\n              required [(ngModel)]=\"loginModel.password\" #password=\"ngModel\" style=\"color:black\"/>\n            <mat-icon matSuffix (click)=\"hide = !hide\" style=\"color:gray\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n            <mat-error>\n              <div class=\"form-group\">\n                <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n                  <div class=\"LoginError\" *ngIf=\"password.errors.required\">\n                    Please Enter Password\n                  </div>\n  \n  \n  \n                </div>\n              </div>\n            </mat-error>\n          </mat-form-field>\n          <div *ngIf=\"is_error\" class=\"LoginError\">\n            {{message}}\n          </div>\n        </div>\n          <button [disabled]=\"mobile.invalid || password.invalid\" mat-raised-button class=\"loginButton\" (click)=\"login(loginModel)\">LOGIN</button> -->\n  \n  ");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
var LoginPageRoutingModule = /** @class */ (function () {
    function LoginPageRoutingModule() {
    }
    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LoginPageRoutingModule);
    return LoginPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _signuppopup_signuppopup_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../signuppopup/signuppopup.page */ "./src/app/pages/signuppopup/signuppopup.page.ts");
/* harmony import */ var _loginpopup_loginpopup_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../loginpopup/loginpopup.page */ "./src/app/pages/loginpopup/loginpopup.page.ts");














var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoginPageRoutingModule"]
            ],
            entryComponents: [_signuppopup_signuppopup_page__WEBPACK_IMPORTED_MODULE_12__["SignuppopupPage"], _loginpopup_loginpopup_page__WEBPACK_IMPORTED_MODULE_13__["LoginpopupPage"]],
            providers: [_ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__["GooglePlus"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_11__["Facebook"]],
            declarations: [_signuppopup_signuppopup_page__WEBPACK_IMPORTED_MODULE_12__["SignuppopupPage"], _loginpopup_loginpopup_page__WEBPACK_IMPORTED_MODULE_13__["LoginpopupPage"], _login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".LoginFormClass {\n  width: 100%;\n}\n\n.FullWidth {\n  width: 96%;\n  margin-top: 20px;\n}\n\n.LoginError {\n  color: #FF6464;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 0.4px;\n  line-height: 16px;\n  text-align: right;\n}\n\n.LogoutBtn {\n  box-sizing: border-box;\n  height: 48px;\n  width: 131px;\n  border-radius: 25px;\n  background-color: linear-gradient(to right, #3672f6, #52caf9);\n  color: #FFFFFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.8px;\n  line-height: 19px;\n  margin-bottom: 25px;\n}\n\n.LoginClass {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  margin-top: 40px;\n}\n\n.centerImg {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 140px;\n  color: grey;\n  height: 120px;\n  top: 25%;\n  position: relative;\n}\n\n.outerWrapper {\n  width: 100%;\n  height: 100vh;\n}\n\n.innerWrapper {\n  width: 100%;\n  height: 50vh;\n}\n\n.blueGradient {\n  width: 100%;\n  height: 100%;\n  background-color: #3672f6;\n  background-image: linear-gradient(to right, #3672f6, #52caf9);\n}\n\n.loginCurveOverlay {\n  width: 100%;\n  height: 50vh;\n  border-radius: 15% 15% 0 0;\n  border: 2px solid #FFF;\n  background: #FFF;\n  position: absolute;\n  top: calc(50% - (15vh / 2));\n}\n\n.loginOverlay {\n  width: 80%;\n  height: auto;\n  background-color: #FFF;\n  margin: 0 auto;\n  border: 1px solid #FFF;\n  position: relative;\n  padding: 5px;\n  top: -38px;\n}\n\n.loginOverlayNew {\n  width: 80%;\n  height: auto;\n  background-color: #FFF;\n  box-shadow: 1px 1px 1px 1px #CCC;\n  margin: 0 auto;\n  height: 325px;\n  border: 1px solid #FFF;\n  border-radius: 5px;\n  top: -100px;\n  position: relative;\n  padding: 5px;\n}\n\n.logo {\n  width: 150px;\n  height: 150px;\n  position: relative;\n  top: 15%;\n  margin: 0 auto;\n  border-radius: 100%;\n}\n\n.FullWidth {\n  width: 100%;\n}\n\n.MainLoginClass {\n  background-size: cover;\n  height: 100%;\n  background: linear-gradient(to bottom, #f35b28, #f7906e, #feae93);\n  background-repeat: no-repeat;\n  position: relative;\n  overflow-y: scroll;\n  width: 100%;\n}\n\n.social-login-button {\n  width: 80%;\n}\n\n.sociallogin-container {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  height: 30%;\n  background-color: white;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n}\n\n.loginButton {\n  background-color: #fbb5da;\n  color: white;\n  width: 80%;\n  padding: 4px;\n  border-radius: 5px;\n  font-size: 14px;\n}\n\n.loginFbButton {\n  background-color: #395696;\n  color: white;\n  width: 100%;\n  font-size: 12px;\n  padding: 4px;\n  border-radius: 25px;\n}\n\n.loginGmailButton {\n  background-color: #ca4d45;\n  color: white;\n  width: 100%;\n  font-size: 12px;\n  padding: 4px;\n  border-radius: 25px;\n}\n\n.sub-text-css {\n  color: white;\n  font-size: 10px;\n  text-align: justify;\n  width: 75%;\n  text-justify: inter-word;\n}\n\n.text-size-f-css {\n  font-size: 22px;\n  font-weight: bold;\n}\n\n.text-size-G-css {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.desc-text {\n  color: gray;\n  font-size: 12px;\n  width: 80%;\n  padding: 8px;\n  margin-top: 30px;\n}\n\n.desc-text-signin {\n  color: gray;\n  font-size: 10px;\n  width: 95%;\n  padding: 8px;\n  position: fixed;\n  bottom: 5px;\n  text-justify: inter-word;\n}\n\n.app-title-css {\n  position: absolute;\n  bottom: 20px;\n  width: 100%;\n  font-size: 1.6em;\n  font-family: sans-serif;\n  font-weight: 470;\n  color: white;\n}\n\n.color-change {\n  color: #f35b28;\n}\n\n.socialMediaIcon {\n  width: 30px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByYXRpay9tYXJrZXRwbGFjZWlvbmljL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0VGOztBREFBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLG1CQUFBO0VBQ0EsNkRBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURDQTtFQUVFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FES0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw2REFBQTtBQ0ZGOztBRFNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDTkY7O0FEU0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ05GOztBRFVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ1BGOztBRFdBO0VBR0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNWQTs7QURlQTtFQUNBLFdBQUE7QUNaQTs7QURlQTtFQUlBLHNCQUFBO0VBQ0EsWUFBQTtFQUVBLGlFQUFBO0VBRUEsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ2pCQTs7QURvQkE7RUFDRSxVQUFBO0FDakJGOztBRG9CQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFHQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNuQkY7O0FEc0JBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNuQkY7O0FEc0JBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNwQkY7O0FEdUJBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNyQkY7O0FEd0JBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDRixtQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQ3JCQTs7QUR1QkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNwQkY7O0FEdUJBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDcEJGOztBRHVCQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNDLFlBQUE7RUFDRixnQkFBQTtBQ3BCRDs7QURzQkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQyxZQUFBO0VBQ0QsZUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtBQ25CRjs7QURzQkE7RUFDRSxrQkFBQTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNDLGdCQUFBO0VBQ0EsWUFBQTtBQ25CSjs7QURzQkE7RUFDRSxjQUFBO0FDbkJGOztBRGlDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDOUJGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkxvZ2luRm9ybUNsYXNze1xuICB3aWR0aDogMTAwJTtcbiAgLy8gbWFyZ2luOiAzMHB4IDAgMCAwO1xufVxuLkZ1bGxXaWR0aHtcbiAgd2lkdGg6OTYlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLkxvZ2luRXJyb3J7XG4gIGNvbG9yOiAjRkY2NDY0O1x0XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1x0XG4gIGZvbnQtc2l6ZTogMTJweDtcdFxuICBmb250LXdlaWdodDogNTAwO1x0XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcdFxuICBsaW5lLWhlaWdodDogMTZweDtcdFxuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5Mb2dvdXRCdG57XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHRcbiAgaGVpZ2h0OiA0OHB4O1x0XG4gIHdpZHRoOiAxMzFweDtcdFxuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjRkZGRkZGO1x0XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHRcbiAgYmFja2dyb3VuZC1jb2xvcjogIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM2NzJmNiAsICM1MmNhZjkpO1xuICBjb2xvcjogI0ZGRkZGRjtcdFxuICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcdFxuICBmb250LXNpemU6IDE1cHg7XHRcbiAgZm9udC13ZWlnaHQ6IDUwMDtcdFxuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XHRcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIC8vIGJveC1zaGFkb3c6IDAgNHB4IDhweCAycHggI0ZGRjNFMCwgMCAycHggMnB4IDAgI0ZGRjNFMDtcbn1cbi5Mb2dpbkNsYXNze1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5jZW50ZXJJbWcge1xuICAvLyBib3JkZXIgOiAxcHggc29saWQgI2JkYWZhZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxNDBweDtcbiAgY29sb3I6Z3JleTtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgdG9wOjI1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyBtYXJnaW4tdG9wOjIwJTtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2YwMzJmMDtcbiAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ub3V0ZXJXcmFwcGVye1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmlubmVyV3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwdmg7XG59XG5cbi5ibHVlR3JhZGllbnR7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IzM2NzJmNjsgXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM2NzJmNiAsICM1MmNhZjkpOyBcbn1cblxuLnNlY29uZEhhbGYge1xuICBcbn1cblxuLmxvZ2luQ3VydmVPdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTB2aDtcbiAgYm9yZGVyLXJhZGl1czogMTUlIDE1JSAwIDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRkY7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDUwJSAtICgxNXZoIC8gMikpO1xufVxuXG4ubG9naW5PdmVybGF5e1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkZGO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweDtcbiAgdG9wOiAtMzhweDtcbn1cblxuXG4ubG9naW5PdmVybGF5TmV3e1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCAjQ0NDO1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAzMjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGRjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0b3A6IC0xMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cblxuLmxvZ28ge1xuLy8gYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvYXBwbG9nby5wbmcnKSBjZW50ZXI7XG4vLyBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG53aWR0aDogMTUwcHg7XG5oZWlnaHQ6IDE1MHB4O1xucG9zaXRpb246IHJlbGF0aXZlO1xudG9wOiAxNSU7XG5tYXJnaW46IDAgYXV0bztcbmJvcmRlci1yYWRpdXM6IDEwMCU7XG4vLyBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLkZ1bGxXaWR0aHtcbndpZHRoOiAxMDAlO1xufVxuXG4uTWFpbkxvZ2luQ2xhc3N7XG4gIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmMzViMjgsI2ZlODg2MCwjZmVhZTkzKTtcbi8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9uYXR1cmUuanBlZ1wiKTtcbi8vIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9sb2dpbmJnLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5oZWlnaHQ6MTAwJTtcblxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwjZjM1YjI4LCAjZjc5MDZlLCNmZWFlOTMpO1xuLy8gYmFja2dyb3VuZC1jb2xvcjogI2Y3OTA2ZTtcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG5vdmVyZmxvdy15OiBzY3JvbGw7XG53aWR0aDoxMDAlO1xufVxuXG4uc29jaWFsLWxvZ2luLWJ1dHRvbntcbiAgd2lkdGg6ODAlO1xufVxuXG4uc29jaWFsbG9naW4tY29udGFpbmVye1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTowcHg7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDozMCU7XG4vLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvQkcucG5nXCIpO1xuLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2Y3OTA2ZSwjZmVhZTkzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xufVxuXG4ubG9naW5CdXR0b257XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmI1ZGE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6ODAlO1xuICBwYWRkaW5nOjRweDtcbiAgYm9yZGVyLXJhZGl1czo1cHg7XG4gIGZvbnQtc2l6ZToxNHB4O1xufVxuXG4ubG9naW5GYkJ1dHRvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5NTY5NjtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDoxMDAlO1xuICAvLyBtYXJnaW4tdG9wOjI1cHg7XG4gIGZvbnQtc2l6ZToxMnB4O1xuICBwYWRkaW5nOjRweDtcbiAgYm9yZGVyLXJhZGl1czoyNXB4O1xufVxuXG4ubG9naW5HbWFpbEJ1dHRvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhNGQ0NTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDoxMDAlO1xuICAvLyBtYXJnaW4tdG9wOjI1cHg7XG4gIGZvbnQtc2l6ZToxMnB4O1xuICBwYWRkaW5nOjRweDtcbiAgYm9yZGVyLXJhZGl1czoyNXB4O1xufVxuXG4uc3ViLXRleHQtY3Nze1xuICBjb2xvcjp3aGl0ZTtcbiAgZm9udC1zaXplOjEwcHg7XG50ZXh0LWFsaWduOiBqdXN0aWZ5O1xud2lkdGg6NzUlO1xudGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xufVxuLnRleHQtc2l6ZS1mLWNzc3tcbiAgZm9udC1zaXplOjIycHg7XG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG5cbi50ZXh0LXNpemUtRy1jc3N7XG4gIGZvbnQtc2l6ZToyMHB4O1xuICBmb250LXdlaWdodDpib2xkO1xufVxuXG4uZGVzYy10ZXh0e1xuICBjb2xvcjpncmF5OyBcbiAgZm9udC1zaXplOjEycHg7XG4gIHdpZHRoOjgwJTtcbiAgIHBhZGRpbmc6OHB4O1xuIG1hcmdpbi10b3A6MzBweDtcbn1cbi5kZXNjLXRleHQtc2lnbmlue1xuICBjb2xvcjpncmF5OyBcbiAgZm9udC1zaXplOjEwcHg7XG4gIHdpZHRoOjk1JTtcbiAgIHBhZGRpbmc6OHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTo1cHg7XG4gIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcbn1cblxuLmFwcC10aXRsZS1jc3N7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIGJvdHRvbToyMHB4O1xuICAgd2lkdGg6MTAwJTtcbiAgIGZvbnQtc2l6ZToxLjZlbTtcbiAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6NDcwO1xuICAgIGNvbG9yOndoaXRlO1xufVxuXG4uY29sb3ItY2hhbmdle1xuICBjb2xvcjojZjM1YjI4O1xufVxuLy8gaW9uLWNhcmR7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4vLyB9XG5cbi8vIDo6bmctZGVlcCB7XG5cbi8vICAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICBcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4vLyAgIH1cbi8vIH1cblxuLnNvY2lhbE1lZGlhSWNvbntcbiAgd2lkdGg6MzBweDtcbiAgaGVpZ2h0OjMwcHg7XG59XG5cbiIsIi5Mb2dpbkZvcm1DbGFzcyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uRnVsbFdpZHRoIHtcbiAgd2lkdGg6IDk2JTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLkxvZ2luRXJyb3Ige1xuICBjb2xvcjogI0ZGNjQ2NDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5Mb2dvdXRCdG4ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMzFweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzY3MmY2LCAjNTJjYWY5KTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjhweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5Mb2dpbkNsYXNzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uY2VudGVySW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxNDBweDtcbiAgY29sb3I6IGdyZXk7XG4gIGhlaWdodDogMTIwcHg7XG4gIHRvcDogMjUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5vdXRlcldyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmlubmVyV3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwdmg7XG59XG5cbi5ibHVlR3JhZGllbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY3MmY2O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzNjcyZjYsICM1MmNhZjkpO1xufVxuXG4ubG9naW5DdXJ2ZU92ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHZoO1xuICBib3JkZXItcmFkaXVzOiAxNSUgMTUlIDAgMDtcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGRjtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoNTAlIC0gKDE1dmggLyAyKSk7XG59XG5cbi5sb2dpbk92ZXJsYXkge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkZGO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweDtcbiAgdG9wOiAtMzhweDtcbn1cblxuLmxvZ2luT3ZlcmxheU5ldyB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4ICNDQ0M7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDMyNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkZGO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRvcDogLTEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxNSU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4uRnVsbFdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5NYWluTG9naW5DbGFzcyB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2YzNWIyOCwgI2Y3OTA2ZSwgI2ZlYWU5Myk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNvY2lhbC1sb2dpbi1idXR0b24ge1xuICB3aWR0aDogODAlO1xufVxuXG4uc29jaWFsbG9naW4tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG59XG5cbi5sb2dpbkJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmI1ZGE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmxvZ2luRmJCdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk1Njk2O1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmxvZ2luR21haWxCdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2E0ZDQ1O1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLnN1Yi10ZXh0LWNzcyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB3aWR0aDogNzUlO1xuICB0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XG59XG5cbi50ZXh0LXNpemUtZi1jc3Mge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dC1zaXplLUctY3NzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRlc2MtdGV4dCB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmRlc2MtdGV4dC1zaWduaW4ge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB3aWR0aDogOTUlO1xuICBwYWRkaW5nOiA4cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA1cHg7XG4gIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcbn1cblxuLmFwcC10aXRsZS1jc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS42ZW07XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDcwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb2xvci1jaGFuZ2Uge1xuICBjb2xvcjogI2YzNWIyODtcbn1cblxuLnNvY2lhbE1lZGlhSWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/apiservice/api.service */ "./src/app/service/apiservice/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/loaderservice/loader.service */ "./src/app/service/loaderservice/loader.service.ts");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _signuppopup_signuppopup_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../signuppopup/signuppopup.page */ "./src/app/pages/signuppopup/signuppopup.page.ts");
/* harmony import */ var _loginpopup_loginpopup_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../loginpopup/loginpopup.page */ "./src/app/pages/loginpopup/loginpopup.page.ts");














var LoginPage = /** @class */ (function () {
    function LoginPage(dialog, router, toast, menuController, loader, facebook, googlePlus, nativeStorage, loadingController, platform, routerOutlet, fcm, apiCall) {
        var _this = this;
        this.dialog = dialog;
        this.router = router;
        this.toast = toast;
        this.menuController = menuController;
        this.loader = loader;
        this.facebook = facebook;
        this.googlePlus = googlePlus;
        this.nativeStorage = nativeStorage;
        this.loadingController = loadingController;
        this.platform = platform;
        this.routerOutlet = routerOutlet;
        this.fcm = fcm;
        this.apiCall = apiCall;
        this.hide = true;
        this.loginModel = {};
        this.gmailId = "";
        this.fbId = "";
        this.password = "password";
        this.gender = -1;
        this.isLoggedIn = false;
        this.imageUrl = "";
        this.users = { id: '', name: '', email: '', picture: { data: { url: '' } } };
        this.platform = platform;
        this.platform.backButton.subscribeWithPriority(-1, function () {
            if (_this.routerOutlet.canGoBack()) {
                navigator['app'].exitApp();
            }
        });
        this.menuController.enable(false);
        // let initParams: InitParams = {
        //   appId: '293072848530685',
        //   xfbml: true,
        //   version: 'v2.8'
        // };
        // fb.init(initParams);
        facebook.getLoginStatus()
            .then(function (res) {
            console.log(res.status);
            if (res.status === 'connect') {
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
            }
        })
            .catch(function (e) { return console.log(e); });
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.fbLogin = function () {
        var _this = this;
        // this.fbLogout();
        this.facebook.login(['public_profile', 'email'])
            .then(function (res) {
            if (res.status === 'connected') {
                _this.isLoggedIn = true;
                localStorage.setItem("loginType", "fb");
                _this.getUserDetail(res.authResponse.userID);
            }
            else {
                _this.isLoggedIn = false;
            }
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    LoginPage.prototype.getUserDetail = function (userid) {
        var _this = this;
        this.facebook.api('/' + userid + '/?fields=id,email,name,picture', ['public_profile'])
            .then(function (res) {
            // this.router.navigate(['/home']);
            _this.users = res;
            _this.imageUrl = _this.users.picture.data.url;
            console.log("show fb url:" + _this.imageUrl);
            _this.gmailId = "";
            _this.fbId = res.id;
            _this.userName = res.name;
            _this.userEmail = res.email;
            _this.login();
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    LoginPage.prototype.loginClick = function () {
        var _this = this;
        console.log("login");
        var dialogRef = this.dialog.open(_loginpopup_loginpopup_page__WEBPACK_IMPORTED_MODULE_13__["LoginpopupPage"], {
            width: '500px',
        });
        dialogRef.afterClosed().subscribe(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log("show  name:" + JSON.stringify(result));
                if (result == "" || result == "undefined" || result == null) {
                }
                else {
                    this.userEmail = result.email;
                    this.password = result.password;
                    this.getUserlogin();
                }
                return [2 /*return*/];
            });
        }); });
    };
    LoginPage.prototype.getUserlogin = function () {
        var _this = this;
        var send_data = {
            "email": this.userEmail,
            "password": this.password
        };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + "users/login";
        this.apiCall.post(url, send_data).subscribe(function (MyResponse) {
            if (MyResponse['result']['isActive'] == 1) {
                localStorage.setItem("userId", MyResponse['result']['id']);
                // localStorage.setItem("loginType","email");
                localStorage.setItem("loginStatus", 'yes');
                localStorage.setItem("authToken", MyResponse['result']['jwt-token']);
                if (MyResponse['result']['image'] == null || MyResponse['result']['image'] == "" || MyResponse['result']['image'] == undefined) {
                    localStorage.setItem("profilePic", MyResponse['result']['image']);
                }
                else {
                    localStorage.setItem("profilePic", MyResponse['result']['image']);
                }
                localStorage.setItem("userRole", MyResponse['result']['userRole']);
                localStorage.setItem("userName", MyResponse['result']['name']);
                localStorage.setItem("userCreated", MyResponse['result']['created']);
                _this.router.navigate(['/home', { categoryId: "73" }], { replaceUrl: true });
                // this.router.navigateByUrl('/profile', { replaceUrl: true }) 
                console.log("show login data:" + JSON.stringify(MyResponse['result']));
            }
            else {
                _this.presentToast("Please try again");
            }
            _this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            _this.presentToast("Please try again");
            _this.loader.hideBlockingLoaderAuth();
        });
    };
    LoginPage.prototype.signupClick = function () {
        var _this = this;
        console.log("signup");
        var dialogRef = this.dialog.open(_signuppopup_signuppopup_page__WEBPACK_IMPORTED_MODULE_12__["SignuppopupPage"], {
            width: '500px',
        });
        dialogRef.afterClosed().subscribe(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log("show  name:" + JSON.stringify(result));
                if (result == "" || result == "undefined" || result == null) {
                }
                else {
                    this.userName = result.name;
                    this.userEmail = result.email;
                    if (result.gender == "male") {
                        this.gender = 0;
                    }
                    if (result.gender == "female") {
                        this.gender = 1;
                    }
                    this.password = result.password;
                    this.login();
                }
                return [2 /*return*/];
            });
        }); });
    };
    LoginPage.prototype.fbLogout = function () {
        var _this = this;
        this.facebook.logout()
            .then(function (res) { return _this.isLoggedIn = false; })
            .catch(function (e) { return console.log('Error logout from Facebook', e); });
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        // this.navCtrl.popToRoot();
        console.log("Looks like I’m about to leave :11");
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.fcm.getToken().then(function (token) {
            console.log("TOKEN: " + token);
            localStorage.setItem("fcmToken", token);
            // alert("show token:"+token);
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        var send_date = {};
        send_date['name'] = this.userName;
        // send_date['mobile'] = this.loginModel.mobile;
        send_date['userRole'] = 0;
        if (this.imageUrl == "" || this.imageUrl == null) {
        }
        else {
            send_date['image'] = this.imageUrl;
        }
        send_date['email'] = this.userEmail;
        if (this.gmailId != "") {
            send_date['gmailId'] = this.gmailId;
        }
        if (this.fbId != "") {
            send_date['facebookId'] = this.fbId;
        }
        send_date['gender'] = this.gender;
        send_date['password'] = this.password;
        // send_date['name'] = "Akshay Madake";
        // send_date['userRole'] = 0;
        // send_date['image'] = "http://d3lgrseqpnv6xt.cloudfront.net/1593068644973.jpg";
        // send_date['email'] = "akshaymadake1@gmail.com";
        // send_date['gmailId'] = "108308451660503119865";
        // send_date['name'] = "Asmita Belhekar";
        // send_date['userRole'] = 0;
        // send_date['image'] = "https://lh3.googleusercontent.com/a-/AOh14GgUQz70Tw0LjfLiFy0I7C-6RmtV2mdG5j9PEIX9Ww";
        // send_date['email'] = "asmita.belhekar@gmail.com";
        // send_date['gmailId'] = "110231677548942846776";
        send_date['fcmToken'] = localStorage.getItem("fcmToken");
        console.log("my token", "" + JSON.stringify(send_date));
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + "users";
        this.apiCall.post(url, send_date).subscribe(function (MyResponse) {
            if (MyResponse['result']['isActive'] == 1) {
                if (_this.gmailId == "" && _this.fbId == "") {
                    _this.presentToast("Registration done successfully");
                }
                else {
                    localStorage.setItem("userId", MyResponse['result']['id']);
                    // localStorage.setItem("loginType","email");
                    localStorage.setItem("loginStatus", 'yes');
                    localStorage.setItem("authToken", MyResponse['result']['jwt-token']);
                    if (MyResponse['result']['image'] == null || MyResponse['result']['image'] == "" || MyResponse['result']['image'] == undefined) {
                        localStorage.setItem("profilePic", MyResponse['result']['image']);
                    }
                    else {
                        localStorage.setItem("profilePic", MyResponse['result']['image']);
                    }
                    localStorage.setItem("userRole", MyResponse['result']['userRole']);
                    localStorage.setItem("userName", MyResponse['result']['name']);
                    localStorage.setItem("userCreated", MyResponse['result']['created']);
                    _this.router.navigate(['/home', { categoryId: "73" }], { replaceUrl: true });
                    // this.router.navigateByUrl('/profile', { replaceUrl: true }) 
                    console.log("show login data:" + JSON.stringify(MyResponse['result']));
                }
            }
            else {
                _this.presentToast("Please try again");
            }
            _this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            _this.presentToast("Please try again");
            _this.loader.hideBlockingLoaderAuth();
        });
    };
    LoginPage.prototype.presentToast = function (message) {
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
    LoginPage.prototype.loginWithGmail = function () {
        var _this = this;
        console.log("login with gmail clicked");
        this.googlePlus.login({})
            .then(function (res) {
            _this.loginDetails = res;
            console.log("show gmail login detail:" + JSON.stringify(_this.loginDetails));
            // localStorage.setItem("profileImage",res.imageUrl);
            _this.gmailId = res.userId;
            _this.imageUrl = res.imageUrl;
            if (_this.imageUrl == null) {
                _this.imageUrl = "";
            }
            _this.fbId = "";
            _this.userName = res.displayName;
            _this.userEmail = res.email;
            localStorage.setItem("loginType", "gmail");
            _this.login();
        }, function (err) {
            console.log("Error :: ", err);
        });
    };
    LoginPage.prototype.logOut = function () {
        this.googlePlus.logout();
        alert("logged out");
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
        { type: src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
        { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_10__["Facebook"] },
        { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__["GooglePlus"] },
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_9__["NativeStorage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRouterOutlet"] },
        { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_11__["FCM"] },
        { type: src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"],
            src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"],
            _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_10__["Facebook"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__["GooglePlus"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_9__["NativeStorage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRouterOutlet"],
            _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_11__["FCM"],
            src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map