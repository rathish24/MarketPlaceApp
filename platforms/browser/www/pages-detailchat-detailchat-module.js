(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detailchat-detailchat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detailchat/detailchat.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detailchat/detailchat.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\" fxLayoutAlign=\"center center\">\n    <ion-row fxLayoutAlign=\"center center\" style=\"padding:5px; margin-top:5px;\">\n      <ion-col size=\"1\">\n        <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button>\n      </ion-col>\n      <ion-col size=\"11\" fxLayoutAlign=\"start center\" fxLayout=\"row\" >\n        <img *ngIf=\"image == '' \" src=\"../../../assets/agent.png\" class=\"img-css\" style=\"margin-left:2px;\" />\n        <img *ngIf=\"image != '' \" src=\"{{image}}\" class=\"img-css\" style=\"margin-left:2px;\" />\n        <ion-label style=\"color:white;\" class=\"TitleText\">{{name}}</ion-label>\n      </ion-col>\n\n    </ion-row>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"width:100%;height:100%;padding-bottom:1200px\">\n  <div style=\"height:15px; width:100%\">\n  </div>\n  <div style=\"color:black;margin-bottom:200px;\">\n    <div *ngFor=\"let item of chatArray\">\n      <div *ngIf=\"msgCount != '0' \">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" *ngIf=\"item.senderId != userId \"\n          style=\"width:100%;\">\n\n          <ion-card\n            style=\"border-radius:7px;width:auto;min-width:40%; max-width: 60%;margin-top:8px;margin-left:13px; padding:10px; background-color: white;color:black\">\n           \n            <!-- <ion-card-header> -->\n              <ion-card-title><label style=\"font-size: 17px;\">{{item.message}}</label></ion-card-title>\n              \n              <ion-card-title fxLayoutAlign=\"end end\" > <label style=\"font-size: 13px;align-content: flex-end;align-self:end;\">{{item.created}}</label></ion-card-title>\n             \n            <!-- </ion-card-header> -->\n        \n          </ion-card>\n\n         \n\n\n        </div>\n      </div>\n\n      <div *ngIf=\"msgCount != '0' \">\n        <div fxLayout=\"column\" fxLayoutAlign=\"end end\" *ngIf=\"item.senderId == userId \" >\n          <ion-card\n            style=\"border-radius:7px;width:auto;min-width:40%; max-width: 70%;margin-top:8px; margin-right:13px; padding:8px; background-color: #fe4f14;color:white\">\n            <ion-card-title><label style=\"font-size: 17px;color: white;\">{{item.message}}</label></ion-card-title>\n              \n            <ion-card-title fxLayoutAlign=\"end end\" style=\"color: white;\"> <label style=\"font-size:13px;align-content: flex-end;align-self:end;\">{{item.created}}</label></ion-card-title>\n  \n          </ion-card>\n        </div>\n\n      </div>\n\n    </div>\n\n\n    <div *ngIf=\"msgCount == '0' \" fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:100%; margin-top:40%\">\n\n      <h1> No chat present.</h1>\n    </div>\n\n\n    <div\n      style=\"position: fixed; height:70px; bottom:0;width:100%; margin:auto; margin-bottom:-5px; border-top:1px solid #f1f4f9; \">\n      <ion-card style=\"width:100%;margin: auto\">\n        <ion-row>\n          <ion-col size=\"9\">\n            <ion-textarea placeholder=\"Type a message\" style=\"color:black\" [(ngModel)]=\"chatModel.message\"></ion-textarea>\n          </ion-col>\n\n          <ion-col size=\"3\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <ion-row>\n\n              <!-- <ion-icon name=\"attach\"\n                style=\"color:rgb(121, 111, 111); width:30px; height:35px; margin-top:-5px; margin-right:5px\"></ion-icon> -->\n              <ion-icon name=\"send\" style=\"color:#fe4f14; width:25px; height:25px\" (click)=\"sendMessage()\">\n              </ion-icon>\n            </ion-row>\n\n          </ion-col>\n        </ion-row>\n      </ion-card>\n\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/detailchat/detailchat-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/detailchat/detailchat-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DetailchatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailchatPageRoutingModule", function() { return DetailchatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detailchat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detailchat.page */ "./src/app/pages/detailchat/detailchat.page.ts");




var routes = [
    {
        path: '',
        component: _detailchat_page__WEBPACK_IMPORTED_MODULE_3__["DetailchatPage"]
    }
];
var DetailchatPageRoutingModule = /** @class */ (function () {
    function DetailchatPageRoutingModule() {
    }
    DetailchatPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DetailchatPageRoutingModule);
    return DetailchatPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/detailchat/detailchat.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/detailchat/detailchat.module.ts ***!
  \*******************************************************/
/*! exports provided: DetailchatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailchatPageModule", function() { return DetailchatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _detailchat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detailchat-routing.module */ "./src/app/pages/detailchat/detailchat-routing.module.ts");
/* harmony import */ var _detailchat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detailchat.page */ "./src/app/pages/detailchat/detailchat.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");








var DetailchatPageModule = /** @class */ (function () {
    function DetailchatPageModule() {
    }
    DetailchatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _detailchat_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailchatPageRoutingModule"]
            ],
            declarations: [_detailchat_page__WEBPACK_IMPORTED_MODULE_6__["DetailchatPage"]]
        })
    ], DetailchatPageModule);
    return DetailchatPageModule;
}());



/***/ }),

/***/ "./src/app/pages/detailchat/detailchat.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/detailchat/detailchat.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".innermsg.left {\n  float: left;\n  background-color: #F1F0F0;\n  color: black;\n  clear: both;\n}\n\n.innermsg.right {\n  float: right;\n  background-color: #0084FF;\n  color: white;\n  clear: both;\n}\n\n.placeholder-css {\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  background-color: #9badc0;\n}\n\n.masters {\n  --background: #f1f4f9;\n}\n\n.cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 25px;\n  height: 25px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: inline-flex;\n  align-items: center;\n}\n\n.TitleText {\n  font-size: 16px;\n  width: 81%;\n  margin-left: 10px;\n  color: #ffffff;\n}\n\n.img-css {\n  width: 43px;\n  border-radius: 100%;\n  height: 43px;\n  background-color: #f1f4f9;\n}\n\n.main-div {\n  width: 100%;\n  height: 100%;\n}\n\n.header-css {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  margin: auto;\n  padding: 10px;\n  background-color: #f88863;\n}\n\n.left-div-msg {\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  width: auto;\n  min-width: 40%;\n  max-width: 60%;\n  margin-left: 10px;\n  padding: 10px;\n  background-color: #ebeff3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByYXRpay9tYXJrZXRwbGFjZWlvbmljL3NyYy9hcHAvcGFnZXMvZGV0YWlsY2hhdC9kZXRhaWxjaGF0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGV0YWlsY2hhdC9kZXRhaWxjaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBRUEseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0FKOztBRE9BO0VBQ0Usa0JBQUE7RUFDQyxXQUFBO0VBQ0MsWUFBQTtFQUNDLHlCQUFBO0FDSkw7O0FET0E7RUFDSSxxQkFBQTtBQ0pKOztBRFNBO0VBQ0ksd0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ05KOztBRFdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDUko7O0FEV0U7RUFHRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ1ZKOztBRGNFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBR0EsWUFBQTtFQUNBLHlCQUFBO0FDYko7O0FEZ0JFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNiSjs7QURpQkU7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQyxZQUFBO0VBRUEsYUFBQTtFQUNBLHlCQUFBO0FDZkw7O0FEc0JFO0VBQ0UsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQyxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNuQkwiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZXRhaWxjaGF0L2RldGFpbGNoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVybXNnLmxlZnQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUYwRjA7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGNsZWFyOiBib3RoO1xufVxuXG4uaW5uZXJtc2cucmlnaHQge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICAvL21hcmdpbi1yaWdodDogMTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDg0RkY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGNsZWFyOiBib3RoO1xufVxuXG4vLyAubWFzdGVycyB7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMTUyYTNmIDAlLCAjNjZjY2ZmIDEwMCUpO1xuLy8gICB9XG5cbi5wbGFjZWhvbGRlci1jc3N7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgIHdpZHRoOjUwcHg7XG4gICAgaGVpZ2h0OjUwcHg7XG4gICAgIGJhY2tncm91bmQtY29sb3I6ICM5YmFkYzA7IFxufVxuXG4ubWFzdGVycyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjFmNGY5O1xuICB9XG5cbiBcblxuLmNsLWJhY2stYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nJykgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMDtcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIH1cbiAgXG4gIFxuICAuVGl0bGVIZWFkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5UaXRsZVRleHR7XG4gICAgLy8gZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgLy8gdGV4dC1hbGlnbjpsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB3aWR0aDogODElO1xuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5pbWctY3Nze1xuICAgIHdpZHRoOjQzcHg7IFxuICAgIGJvcmRlci1yYWRpdXM6MTAwJTtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAvLyBwYWRkaW5nOjVweDtcbiAgICBoZWlnaHQ6NDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNGY5O1xuICB9XG5cbiAgLm1haW4tZGl2e1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgLy8gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sI2Y4ODg2MywjZmNiMjlhKTtcbiAgfVxuXG4gIC5oZWFkZXItY3Nze1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgdG9wOjA7XG4gICAgd2lkdGg6MTAwJTtcbiAgICAgbWFyZ2luOmF1dG87IFxuICAgIC8vICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZjFmNGY5O1xuICAgICBwYWRkaW5nOjEwcHg7IFxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmODg4NjM7XG4gIH1cblxuICAvLyBpb24tY29udGVudHtcbiAgLy8gICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sI2Y4ODg2MywjZmNiMjlhKTtcbiAgLy8gfVxuXG4gIC5sZWZ0LWRpdi1tc2d7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbiAgICB3aWR0aDphdXRvO1xuICAgIG1pbi13aWR0aDo0MCU7XG4gICAgIG1heC13aWR0aDogNjAlO1xuICAgICBtYXJnaW4tbGVmdDoxMHB4OyBcbiAgICAgcGFkZGluZzoxMHB4OyBcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWZmMztcbiAgfSIsIi5pbm5lcm1zZy5sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUYwRjA7XG4gIGNvbG9yOiBibGFjaztcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5pbm5lcm1zZy5yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODRGRjtcbiAgY29sb3I6IHdoaXRlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLnBsYWNlaG9sZGVyLWNzcyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzliYWRjMDtcbn1cblxuLm1hc3RlcnMge1xuICAtLWJhY2tncm91bmQ6ICNmMWY0Zjk7XG59XG5cbi5jbC1iYWNrLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZ1wiKSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMDtcbn1cblxuLlRpdGxlSGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5UaXRsZVRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiA4MSU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmltZy1jc3Mge1xuICB3aWR0aDogNDNweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgaGVpZ2h0OiA0M3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNGY5O1xufVxuXG4ubWFpbi1kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVhZGVyLWNzcyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjg4ODYzO1xufVxuXG4ubGVmdC1kaXYtbXNnIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xuICB3aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiA0MCU7XG4gIG1heC13aWR0aDogNjAlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWZmMztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/detailchat/detailchat.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/detailchat/detailchat.page.ts ***!
  \*****************************************************/
/*! exports provided: DetailchatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailchatPage", function() { return DetailchatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/apiservice/api.service */ "./src/app/service/apiservice/api.service.ts");
/* harmony import */ var src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/loaderservice/loader.service */ "./src/app/service/loaderservice/loader.service.ts");
/* harmony import */ var src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/network/network.service */ "./src/app/service/network/network.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");








var DetailchatPage = /** @class */ (function () {
    function DetailchatPage(activatedRoute, apiCall, networkServices, loader, toast) {
        this.activatedRoute = activatedRoute;
        this.apiCall = apiCall;
        this.networkServices = networkServices;
        this.loader = loader;
        this.toast = toast;
        this.chatModel = {};
        this.chatArray = [];
        this.noInternet = "0";
        this.image = "";
    }
    DetailchatPage.prototype.ScrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.myContent.scrollToBottom(300);
        }, 1000);
    };
    DetailchatPage.prototype.ngOnInit = function () {
        this.detailData = JSON.parse(this.activatedRoute.snapshot.params['userDetail']);
        this.name = this.detailData.name;
        this.id = this.detailData.id;
        console.log(this.name);
        console.log("pp " + this.id);
        if (this.detailData.image == null || this.detailData.image == "") {
            this.image = "";
        }
        else {
            this.image = this.detailData.image;
        }
        this.getChatMassages();
    };
    DetailchatPage.prototype.ionViewWillEnter = function () {
        this.getChatMassages();
    };
    DetailchatPage.prototype.ionViewDidLoad = function () {
        this.ScrollToBottom();
    };
    DetailchatPage.prototype.goBackword = function () {
        window.history.back();
    };
    DetailchatPage.prototype.sendMessage = function () {
        var _this = this;
        console.log("show msg :" + this.chatModel['message']);
        if (this.chatModel['message'] == undefined || this.chatModel['message'] == null || this.chatModel['message'] == "") {
        }
        else {
            this.loader.showBlockingLoaderAuth();
            var send_date = {};
            send_date['message'] = this.chatModel['message'];
            this.userId = localStorage.getItem("userId");
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + "sender/" + this.userId + "/receive/" + this.id + "?" + "size=" + 1000;
            this.apiCall.post(url, send_date).subscribe(function (MyResponse) {
                _this.getChatMassages();
                _this.chatModel['message'] = "";
                _this.loader.hideBlockingLoaderAuth();
            }, function (error) {
                _this.presentToast("Please try again");
                _this.loader.hideBlockingLoaderAuth();
            });
        }
    };
    DetailchatPage.prototype.presentToast = function (message) {
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
    DetailchatPage.prototype.getChatMassages = function () {
        var _this = this;
        // this.loader.showBlockingLoaderAuth();
        this.userId = localStorage.getItem("userId");
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + "sender/" + this.userId + "/receive/" + this.id + "?" + "size=" + 1000;
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.chatArray = MyResponse['result']['list'];
            _this.msgCount = MyResponse['result']['count'];
            console.log("show users:" + JSON.stringify(_this.chatArray));
            for (var k = 0; k < _this.chatArray.length; k++) {
                // toLocaleString(); 
                _this.chatArray[k].created = new Date(_this.chatArray[k].created).toLocaleDateString() + " " + new Date(_this.chatArray[k].created).toLocaleTimeString();
                // var localDate = new Date(utcDate);
            }
            _this.loader.hideBlockingLoaderAuth();
            _this.noInternet = '0';
        }, function (error) {
            _this.noInternet = '1';
            _this.loader.hideBlockingLoaderAuth();
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    DetailchatPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"] },
        { type: src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"])
    ], DetailchatPage.prototype, "myContent", void 0);
    DetailchatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detailchat',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detailchat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detailchat/detailchat.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detailchat.page.scss */ "./src/app/pages/detailchat/detailchat.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"],
            src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]])
    ], DetailchatPage);
    return DetailchatPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-detailchat-detailchat-module.js.map