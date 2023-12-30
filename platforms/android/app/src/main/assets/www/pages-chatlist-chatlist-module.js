(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chatlist-chatlist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chatlist/chatlist.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chatlist/chatlist.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"new-background-color\" *ngIf=\"showSearch == 0 \">\n  <ion-toolbar class=\"new-background-color\">\n    <div fxFlex=\"100\" fxLayout=\"row\" >\n      <div fxFlex=\"85\" fxLayoutAlign=\"start center\">\n        <label style=\"color:white; font-size:17px; margin-left:10px;\">Chat</label>\n      </div>\n\n      <div fxFlex=\"15\" (click)=\"searchShow()\" fxLayoutAlign=\"end center\">\n        <ion-icon name=\"search\" style=\"color:white; height:25px; width: 26px; margin-right:10px;\"></ion-icon>\n      </div>\n    </div>\n\n   \n\n  </ion-toolbar>\n</ion-header>\n\n<ion-header class=\"new-toolbar-background-color\" *ngIf=\"showSearch == 1 \">\n  <ion-toolbar class=\"new-toolbar-background-color\">\n   \n\n    <div  fxFlex=\"100\" fxLayout=\"row\" style=\"background-color: white;width:100%;\">\n      <div fxFlex=\"15\" fxLayoutAlign=\"center center\">\n        <ion-icon class=\"back-icon-css\" (click)=\"goBackword()\" name=\"arrow-back-outline\"></ion-icon>\n         <!-- <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button> -->\n      </div>\n      <div fxLayoutAlign=\"start center\" style=\"width: 70%;\">\n        <input placeholder=\"Search..\" (input)=\"search($event)\"\n          style=\"background: white;width: 87%;font-size:13px;color:rgb(61, 60, 60)\" />\n      </div>\n      <div fxLayoutAlign=\"start center\" *ngIf=\"showClose == 1\" style=\"width: 15%;\">\n        <ion-icon class=\"close-icon-css\" (click)=\"clearSearch()\" name=\"close\"></ion-icon>\n      </div>\n    </div>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n \n  <div style=\"width:100%;height:100%;\">\n    <div *ngIf=\"usersCount > 0 \">\n      <div *ngFor=\"let item of usersArray\" style=\"margin-top:10px\">\n        <div *ngIf=\"item.id != userId\">\n            \n          <div fxLayout=\"row\" (click)=\"detailChat(item.name, item.id, item.image)\" style=\"margin-left:10px; width:100%;padding:5px;\">\n            <div style=\"width:16%\">\n              <img *ngIf=\"item.image == null || item.image == '' \" src=\"../../../assets/agent.png\"\n              style=\"border-radius: 50%;width:65px; height:62px; border:1px solid rgb(240, 234, 234);background-color:#f1f4f9\" />\n              <img *ngIf=\"item.image != null || item.image != '' \" src=\"{{item.image}}\"\n                style=\"border-radius: 50%;width:65px; height:62px; border:1px solid rgb(240, 234, 234);background-color:#f1f4f9\" />\n            </div>\n            <div style=\"margin-top:5px;width:84%\">\n              <ion-item style=\"margin-top:2px;background-color: transparent;\">\n                <div fxLayout=\"column\">\n                  <label style=\"color:rgb(49, 49, 49);font-size:16px;font-weight:420\">{{item.name}}</label>\n                  <label class=\"text\" style=\"color:rgb(110, 108, 108); font-size:11px;margin:2px;\">{{item.lastMessage}}</label>\n                </div>\n              </ion-item>\n            </div>\n\n          \n         \n          </div>\n\n        \n      \n\n        </div>\n\n\n      </div>\n    </div>\n    <div *ngIf=\"usersCount == 0 \" fxLayoutAlign=\"center center\">\n      <h4 style=\"margin-top:25%;\">No records found</h4>\n    </div>\n\n    <div class=\"cl_bottom_fix\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"margin-top:10px\">\n\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" (click)=\"home()\">\n        <ion-icon name=\"home\" class=\"cl_bottom_nav_css\" (click)=\"home()\"></ion-icon>\n        <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">HOME</label>\n      </div>\n\n\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" (click)=\"openChatList()\">\n        <ion-icon class=\"cl_post_css\" name=\"document\" (click)=\"openChatList()\"></ion-icon>\n        <label fxLayoutAlign=\"center center\" class=\"cl_selected-text_font\">CHATS</label>\n      </div>\n\n\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" (click)=\"postAdvertisement()\">\n        <ion-icon class=\"cl_bottom_nav_css\" name=\"add-circle\" >\n        </ion-icon>\n        <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">SELL</label>\n      </div>\n\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" (click)=\"openFavourite()\">\n        <ion-icon class=\"cl_bottom_nav_css\" name=\"heart\" (click)=\"openFavourite()\"></ion-icon>\n        <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">MY ADS</label>\n      </div>\n\n\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" (click)=\"openProfile()\">\n        <ion-icon class=\"cl_bottom_nav_css\" name=\"person\" (click)=\"openProfile()\"></ion-icon>\n        <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">PROFILE</label>\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>");

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

/***/ "./src/app/pages/chatlist/chatlist-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/chatlist/chatlist-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ChatlistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatlistPageRoutingModule", function() { return ChatlistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chatlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chatlist.page */ "./src/app/pages/chatlist/chatlist.page.ts");




var routes = [
    {
        path: '',
        component: _chatlist_page__WEBPACK_IMPORTED_MODULE_3__["ChatlistPage"]
    }
];
var ChatlistPageRoutingModule = /** @class */ (function () {
    function ChatlistPageRoutingModule() {
    }
    ChatlistPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ChatlistPageRoutingModule);
    return ChatlistPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/chatlist/chatlist.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/chatlist/chatlist.module.ts ***!
  \***************************************************/
/*! exports provided: ChatlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatlistPageModule", function() { return ChatlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _chatlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chatlist-routing.module */ "./src/app/pages/chatlist/chatlist-routing.module.ts");
/* harmony import */ var _chatlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chatlist.page */ "./src/app/pages/chatlist/chatlist.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");









var ChatlistPageModule = /** @class */ (function () {
    function ChatlistPageModule() {
    }
    ChatlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _chatlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatlistPageRoutingModule"]
            ],
            declarations: [_chatlist_page__WEBPACK_IMPORTED_MODULE_6__["ChatlistPage"]]
        })
    ], ChatlistPageModule);
    return ChatlistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/chatlist/chatlist.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/chatlist/chatlist.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".masters {\n  --background: linear-gradient(to bottom, #152a3f 0%, #66ccff 100%);\n}\n\n.cl_bottom_nav_css {\n  width: 24px;\n  height: 24px;\n  width: 100%;\n  color: gray;\n  background-color: #ffffff;\n}\n\n.cl_bottom_fix {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  padding: 8px;\n  border-top: 1px solid #f1f4f9;\n  background-color: white;\n}\n\n.cl_post_css {\n  width: 100%;\n  width: 24px;\n  height: 24px;\n  color: #fb7645;\n  background-color: #ffffff;\n}\n\n.cl_text_font {\n  padding-top: 4px;\n  font-size: 14px;\n}\n\n.cl_selected-text_font {\n  padding-top: 4px;\n  font-size: 14px;\n  color: #fb7645;\n}\n\n.back-div {\n  background-size: cover;\n  height: 100%;\n  background-repeat: no-repeat;\n  width: 100%;\n  background: linear-gradient(to bottom, #f35b28, #f7906e, #feae93);\n}\n\n.item-content {\n  background-color: #000000;\n}\n\nion-item {\n  --background:transparent;\n}\n\ninput {\n  border: none;\n}\n\ninput:focus {\n  outline: none;\n}\n\n.cl_add_course_css {\n  border: 1px solid grey;\n  border-radius: 22px;\n  padding-left: 15px;\n  margin: 20px;\n  cursor: pointer;\n}\n\n.text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  /* number of lines to show */\n  -webkit-box-orient: vertical;\n}\n\n.cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 25px;\n  height: 25px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n}\n\n.back-icon-css {\n  width: 28px;\n  color: #f35b28;\n  height: 28px;\n}\n\n.close-icon-css {\n  width: 34px;\n  color: gray;\n  height: 34px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByYXRpay9tYXJrZXRwbGFjZWlvbmljL3NyYy9hcHAvcGFnZXMvY2hhdGxpc3QvY2hhdGxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGF0bGlzdC9jaGF0bGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrRUFBQTtBQ0NKOztBREdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFHQSxXQUFBO0VBQ0EsV0FBQTtFQUdBLHlCQUFBO0FDSko7O0FET0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0MsNkJBQUE7RUFDQyx1QkFBQTtBQ0pOOztBRE9FO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUdBLHlCQUFBO0FDTko7O0FEVUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNQSjs7QURVRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNQSjs7QURVQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBRUEsV0FBQTtFQUNBLGlFQUFBO0FDUko7O0FEYUU7RUFDRSx5QkFBQTtBQ1ZKOztBRGFFO0VBQ0Usd0JBQUE7QUNWSjs7QURjQTtFQUNFLFlBQUE7QUNYRjs7QURlQTtFQUNFLGFBQUE7QUNaRjs7QURnQkE7RUFDRSxzQkFBQTtFQUtBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDRSxZQUFBO0VBQ0csZUFBQTtBQ2pCUDs7QURtQkE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUF1Qiw0QkFBQTtFQUN2Qiw0QkFBQTtBQ2ZGOztBRG1CQTtFQUNFLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNoQkY7O0FEb0JBO0VBQ0UsV0FBQTtFQUNELGNBQUE7RUFDQyxZQUFBO0FDakJGOztBRG9CQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0MsWUFBQTtBQ2pCSCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXRsaXN0L2NoYXRsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXN0ZXJzIHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMxNTJhM2YgMCUsICM2NmNjZmYgMTAwJSk7XG4gIH1cblxuXG4gIC5jbF9ib3R0b21fbmF2X2Nzc3tcbiAgICB3aWR0aDoyNHB4O1xuICAgIGhlaWdodDoyNHB4O1xuICAgIC8vIGNvbG9yOmdyYXk7XG4gIFxuICAgIHdpZHRoOjEwMCU7XG4gICAgY29sb3I6Z3JheTtcbiAgICAvLyBwYWRkaW5nLXRvcDo1cHg7XG4gICAgLy8gcGFkZGluZy1ib3R0b206NXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIH1cbiAgXG4gIC5jbF9ib3R0b21fZml4e1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgYm90dG9tOjBweDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIHBhZGRpbmc6OHB4O1xuICAgICBib3JkZXItdG9wOjFweCBzb2xpZCAjZjFmNGY5O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC5jbF9wb3N0X2Nzc3tcbiAgICB3aWR0aDoxMDAlO1xuICAgIHdpZHRoOjI0cHg7XG4gICAgaGVpZ2h0OjI0cHg7XG4gICAgY29sb3I6ICNmYjc2NDU7XG4gICAgLy8gcGFkZGluZy10b3A6NXB4O1xuICAgIC8vIHBhZGRpbmctYm90dG9tOjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgXG4gIH1cbiAgXG4gIC5jbF90ZXh0X2ZvbnR7XG4gICAgcGFkZGluZy10b3A6NHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICBcbiAgLmNsX3NlbGVjdGVkLXRleHRfZm9udHtcbiAgICBwYWRkaW5nLXRvcDo0cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjZmI3NjQ1O1xuICB9XG5cbi5iYWNrLWRpdntcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwjZjM1YjI4LCAjZjc5MDZlLCNmZWFlOTMpO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9sb2dpbmJnLnBuZ1wiKTtcbiAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbG9naW5iZy5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gIH1cblxuICAuaXRlbS1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDAwMDA7XG4gIH1cblxuICBpb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gIH1cblxuXG5pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cblxuLmNsX2FkZF9jb3Vyc2VfY3Nze1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAvLyBwYWRkaW5nLXRvcDoxMHB4O1xuICAvLyBwYWRkaW5nLWJvdHRvbToxMHB4O1xuICAvLyBwYWRkaW5nLWxlZnQ6MTNweDtcbiAgLy8gcGFkZGluZy1yaWdodDoxM3B4O1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBwYWRkaW5nLWxlZnQ6MTVweDtcbiAgICBtYXJnaW46MjBweDtcbiAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGV4dCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxOyAvKiBudW1iZXIgb2YgbGluZXMgdG8gc2hvdyAqL1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG5cbi5jbC1iYWNrLWJ1dHRvbntcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmcnKSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMDtcbiAgLy8gbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uYmFjay1pY29uLWNzc3tcbiAgd2lkdGg6MjhweDtcbiBjb2xvcjojZjM1YjI4O1xuICBoZWlnaHQ6MjhweDtcbn1cblxuLmNsb3NlLWljb24tY3Nze1xuICB3aWR0aDozNHB4O1xuICBjb2xvcjpncmF5O1xuICAgaGVpZ2h0OjM0cHg7XG59IiwiLm1hc3RlcnMge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMxNTJhM2YgMCUsICM2NmNjZmYgMTAwJSk7XG59XG5cbi5jbF9ib3R0b21fbmF2X2NzcyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogZ3JheTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNsX2JvdHRvbV9maXgge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjRmOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jbF9wb3N0X2NzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogI2ZiNzY0NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNsX3RleHRfZm9udCB7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNsX3NlbGVjdGVkLXRleHRfZm9udCB7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmYjc2NDU7XG59XG5cbi5iYWNrLWRpdiB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmMzViMjgsICNmNzkwNmUsICNmZWFlOTMpO1xufVxuXG4uaXRlbS1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5jbF9hZGRfY291cnNlX2NzcyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50ZXh0IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XG4gIC8qIG51bWJlciBvZiBsaW5lcyB0byBzaG93ICovXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG5cbi5jbC1iYWNrLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZ1wiKSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMDtcbn1cblxuLmJhY2staWNvbi1jc3Mge1xuICB3aWR0aDogMjhweDtcbiAgY29sb3I6ICNmMzViMjg7XG4gIGhlaWdodDogMjhweDtcbn1cblxuLmNsb3NlLWljb24tY3NzIHtcbiAgd2lkdGg6IDM0cHg7XG4gIGNvbG9yOiBncmF5O1xuICBoZWlnaHQ6IDM0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/chatlist/chatlist.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/chatlist/chatlist.page.ts ***!
  \*************************************************/
/*! exports provided: ChatlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatlistPage", function() { return ChatlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/loaderservice/loader.service */ "./src/app/service/loaderservice/loader.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/apiservice/api.service */ "./src/app/service/apiservice/api.service.ts");
/* harmony import */ var src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/network/network.service */ "./src/app/service/network/network.service.ts");
/* harmony import */ var src_app_pages_adplansimage_adplansimage_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pages/adplansimage/adplansimage.page */ "./src/app/pages/adplansimage/adplansimage.page.ts");










var ChatlistPage = /** @class */ (function () {
    function ChatlistPage(dialog, router, loader, apiCall, networkServices, menuController) {
        this.dialog = dialog;
        this.router = router;
        this.loader = loader;
        this.apiCall = apiCall;
        this.networkServices = networkServices;
        this.menuController = menuController;
        this.profileImg = "";
        this.usersCount = 0;
        this.noInternet = "0";
        this.usersArray = [];
        this.showSearch = 0;
        this.showClose = 0;
        this.menuController.enable(false);
        this.userId = localStorage.getItem("userId");
    }
    ChatlistPage.prototype.ngOnInit = function () {
        this.profileImg = localStorage.getItem("profileImage");
        // this.getUsers();
        this.userId = localStorage.getItem("userId");
    };
    ChatlistPage.prototype.ionViewWillEnter = function () {
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "users/" + this.userId + "/chat-users";
        this.userId = localStorage.getItem("userId");
        console.log("get userId:" + this.userId);
        this.getUsers(this.url);
        console.log("show page : Chat List");
    };
    ChatlistPage.prototype.detailChat = function (name, id, image) {
        if (image == null) {
            image = "";
        }
        console.log("show image as abc::::" + image);
        var userDetail = {
            "name": name,
            "id": id,
            "image": image
        };
        this.router.navigate(['/detailchat', { userDetail: JSON.stringify(userDetail) }]);
    };
    ChatlistPage.prototype.openChatList = function () {
        this.router.navigate(['/chatlist']);
    };
    ChatlistPage.prototype.postAdvertisement = function () {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_pages_adplansimage_adplansimage_page__WEBPACK_IMPORTED_MODULE_9__["AdplansimagePage"], {
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
                else {
                    dialogRef.close();
                }
                return [2 /*return*/];
            });
        }); });
    };
    ChatlistPage.prototype.home = function () {
        this.router.navigate(['/home']);
    };
    ChatlistPage.prototype.openFavourite = function () {
        this.router.navigate(['/favourite']);
    };
    ChatlistPage.prototype.openProfile = function () {
        this.router.navigate(['/profile']);
    };
    ChatlistPage.prototype.getUsers = function (url) {
        var _this = this;
        // this.loader.showBlockingLoaderAuth();
        // let url = environment.base_url + environment.version + "users/" + this.userId + "/chat-users";
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.usersArray = MyResponse['result']['list'];
            _this.usersCount = MyResponse['result']['count'];
            console.log("show users:" + _this.usersArray);
            // this.loader.hideBlockingLoaderAuth();
            _this.noInternet = '0';
        }, function (error) {
            _this.noInternet = '1';
            // this.loader.hideBlockingLoaderAuth();
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    ChatlistPage.prototype.searchShow = function () {
        this.showSearch = 1;
    };
    ChatlistPage.prototype.goBackword = function () {
        this.showSearch = 0;
    };
    ChatlistPage.prototype.clearSearch = function () {
        this.showSearch = 0;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "users/" + this.userId + "/chat-users";
        this.getUsers(this.url);
    };
    ChatlistPage.prototype.search = function ($event) {
        console.log("show key search:" + $event.data);
        var getKey = $event.data;
        if (getKey.length > 0) {
            this.showClose = 1;
            this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "users/" + this.userId + "/chat-users?" + "search=" + getKey;
            this.getUsers(this.url);
        }
        else {
            this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "users/" + this.userId + "/chat-users";
            this.getUsers(this.url);
        }
    };
    ChatlistPage.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
        { type: src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_8__["NetworkService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
    ]; };
    ChatlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chatlist',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chatlist.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chatlist/chatlist.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chatlist.page.scss */ "./src/app/pages/chatlist/chatlist.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"],
            src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_8__["NetworkService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
    ], ChatlistPage);
    return ChatlistPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-chatlist-chatlist-module.js.map