(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-favourite-favourite-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favourite/favourite.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favourite/favourite.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n    <!-- <ion-buttons slot=\"start\" style=\"color:white\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons> -->\n    <label style=\"color:white; font-size:17px; margin-left:10px\">Favourite</label>\n\n    <!-- <ion-title style=\"color:white; margin-left:10px\">\n      Favourite\n    </ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-item-divider>\n  <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"myadds\" [(ngModel)]=\"segment\">\n    <ion-segment-button value=\"0\" style=\"--background: white;\">\n      <ion-label >My Adds</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"1\" style=\"--background: white;\">\n      <ion-label >Bookmarks</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-item-divider>\n\n<ion-slides #slides pager=\"false\" [options]=\"sliderOptions\" (ionSlideDidChange)=\"slideChanged(slides)\" (ionSlidesDidLoad)=\"slideChanged(slides)\" style=\"width:100%\">\n\n  <ion-slide style=\"height:100%;width:100%\">\n    <div  *ngIf=\"tabTitle == '0' \" style=\"width:100%\">\n\n      <div *ngIf=\"arrayLength > 0\" style=\"width:98%; margin-left:1%; margin-top:10px\">\n  \n      \n        <div class=\"row\" *ngFor=\"let item of advertisementArray\">\n          <div  style=\"width:100%\">\n            <div class=\"column\" style=\"position:relative\">\n              <img src={{item.images[0]}} style=\"border-radius: 5px;width:100%; height:100%\" (click)=\"showAdvertisementDetail(image,item.id,0,item.isActive)\"/>\n              <div  style=\"position:absolute;top:7px;left:8px;width:30px;height:30px;\"\n              (click)=\"activeInactiveAd(item)\">\n              <ion-icon  *ngIf=\"item.isActive == 1 \" name=\"checkmark-circle-outline\"  style=\"color:#fb7645;width:23px;height:23px; margin-left:5px\"></ion-icon>\n              <ion-icon  *ngIf=\"item.isActive == 0 \" name=\"close-circle-outline\"  style=\"color:#fb7645;width:23px;height:23px; margin-left:5px\"></ion-icon>\n              </div>\n              <div style=\"position:absolute;top:7px;right:8px;width:30px;height:30px;\"\n              (click)=\"bookmarkAdvertisement(item.id)\">\n              <!-- <img *ngIf=\"item.gender == 1 \" src=\"../../../assets/newmicon.png\" class=\"width:18px; height:18px\" />\n              <img *ngIf=\"item.gender == 0 \" src=\"../../../assets/newficon.png\" class=\"width:18px; height:18px\" /> -->\n\n              <ion-icon *ngIf=\"item.isBookmarked == 1 || getBookmarkObj [item.id] == true \"\n              style=\"color:#fb7645;width:24px;height:24px; margin-left:5px\" name=\"heart\"></ion-icon>\n            <ion-icon *ngIf=\"item.isBookmarked == 0 || getBookmarkObj [item.id] != true \"\n              style=\"color:#fb7645;width:24px;height:24px; margin-left:5px\" name=\"heart-outline\"></ion-icon>\n         \n\n              <ion-icon *ngIf=\"item.gender == 1 \" name=\"male-outline\"  style=\"color:#fb7645;width:23px;height:23px; margin-left:5px\"></ion-icon>\n              <ion-icon *ngIf=\"item.gender == 0 \" name=\"female-outline\"  style=\"color:#fb7645;width:23px;height:23px; margin-left:5px\"></ion-icon>\n\n             \n           \n              </div>\n            \n                <div fxLayoutAlign=\"end end\" fxLayout=\"column\" (click)=\"showAdvertisementDetail(item.categoryId, item.id,0)\"\n                style=\"position:absolute;background-image: linear-gradient(to bottom, transparent -15%, rgb(0, 0, 0,1)) ;bottom:8px;width:96%;  border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;;\">\n  \n  \n  \n                <div fxLayout=\"row\" style=\"width:100%; color:white;padding-top:2px;\">\n                  <div fxFlex=\"100\" fxLayoutAlign=\"start start\">\n                    <div class=\"b\">\n                    <label style=\"font-size:18px;padding-left:5px; font-weight:500\">{{item.title}}</label>\n                    </div>\n                  </div>\n  \n  \n                </div>\n  \n                <div fxLayout=\"row\" style=\"width:100%; color:white; padding-bottom:2px\">\n                  <div fxFlex=\"50\" fxLayoutAlign=\"start center\" *ngIf=\"item.adPriceType == 0\">\n                    <label style=\"font-size:15px;padding-left:5px;font-weight:normal\">₹ {{item.price | number}}</label>\n                  </div>\n                  <div fxFlex=\"50\" fxLayoutAlign=\"start center\" *ngIf=\"item.adPriceType == 1\">\n                    <label style=\"font-size:15px;padding-left:5px;font-weight:normal\">$ {{item.price | number}}</label>\n                  </div>\n        \n                  <div fxFlex=\"50\" fxLayoutAlign=\"end start\">\n                    <div class=\"b\" style=\"margin-top:-5px\">\n                      <label style=\"font-size:15px; color:white;padding-right: 5px;\">{{item.address}}</label>\n                    </div>\n                  </div>\n  \n                </div>\n  \n               \n  \n  \n              </div>\n            </div>\n  \n          </div>\n  \n  \n        </div>\n    \n    \n      </div>\n      <img style=\"width:100%; height:60px; visibility: hidden;\" />\n      <div *ngIf=\"arrayLength == 0 \" style=\"margin-top:20%;\">\n        <h3 align=\"center\">No records found.</h3>\n      </div>\n  \n  \n    </div></ion-slide>\n\n\n  <ion-slide style=\"height:100vh;width:100%; overflow-y: scroll;\" >\n  \n    <div  *ngIf=\"tabTitle == '1' \" style=\"width:100%\">\n      <div *ngIf=\"bookmarkLength > 0\" style=\"width:98%; margin-left:1%; margin-top:10px\" fxLayoutALign=\"start start\">\n  \n      \n        <div class=\"row\" *ngFor=\"let item of advertisementArray\">\n          <div (click)=\"showBookmarkAdvertisementDetail(item.categoryId, item.id,item.isBookmarked)\">\n            <div class=\"column\" style=\"position:relative\">\n              <img src={{item.images[0]}} style=\"border-radius: 5px;width:100%; height:100%\" />\n              <div\n                style=\"position:absolute; bottom:8px;width:96%;background-image: linear-gradient(to bottom, transparent -15%, rgb(0, 0, 0,1)) ;bottom:8px;width:96%;; border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;;\">\n  \n                <div fxLayout=\"row\" style=\"width:100%; color:white;padding-top:2px;\">\n                  <div fxFlex=\"100\" fxLayoutAlign=\"start start\">\n                    <div class=\"b\">\n                    <label style=\"font-size:18px;padding-left:5px;font-weight:500\">{{item.title}}</label>\n                    </div>\n                  </div>\n  \n  \n                </div>\n  \n                <div fxLayout=\"row\" style=\"width:100%; color:white;padding-top:2px; padding-bottom:2px\">\n                  <div fxFlex=\"50\" fxLayoutAlign=\"start center\" *ngIf=\"item.adPriceType == 0\">\n                    <label style=\"font-size:15px;padding-left:5px\">₹ {{item.price | number}}</label>\n                  </div>\n                  <div fxFlex=\"50\" fxLayoutAlign=\"start center\" *ngIf=\"item.adPriceType == 1\">\n                    <label style=\"font-size:15px;padding-left:5px;\">$ {{item.price | number}}</label>\n                  </div>\n                  \n\n                  <div fxFlex=\"50\" fxLayoutAlign=\"end start\">\n                    <div class=\"b\" style=\"margin-top:-5px\">\n                      <label style=\"font-size:15px; color:white;padding-right: 5px;\">{{item.address}}\n                          </label>\n                    </div>\n                  </div>\n  \n                </div>\n  \n  \n  \n  \n              </div>\n            </div>\n  \n          </div>\n  \n  \n        </div>\n    \n    \n      </div>\n      <img style=\"width:100%; height:60px; visibility: hidden;\" />\n      <div *ngIf=\"bookmarkLength == 0 \" style=\"margin-top:20%;\">\n        <h3 align=\"center\">No records found.</h3>\n      </div>\n  \n    </div>\n  </ion-slide>\n</ion-slides>\n \n \n\n \n\n\n  <div class=\"cl_bottom_fix\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"margin-top:10px\">\n      \n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n    (click)=\"home()\">\n    <ion-icon name=\"home\" class=\"cl_bottom_nav_css\" (click)=\"home()\"></ion-icon>\n    <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">HOME</label>\n    </div>\n\n\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n    (click)=\"openChatList()\">\n    <ion-icon class=\"cl_bottom_nav_css\" name=\"document\" (click)=\"openChatList()\"></ion-icon>\n    <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">CHATS</label>\n    </div>\n\n\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n      (click)=\"postAdvertisement()\">\n    <ion-icon class=\"cl_bottom_nav_css\"  name=\"add-circle\" >\n    </ion-icon>\n    <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">SELL</label>\n    </div>\n  \n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n    (click)=\"openFavourite()\">\n    <ion-icon class=\"cl_post_css\" name=\"heart\"  (click)=\"openFavourite()\"></ion-icon>\n    <label fxLayoutAlign=\"center center\" class=\"cl_selected-text_font\">MY ADS</label>\n    </div>\n\n\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n      (click)=\"openProfile()\">\n      <ion-icon class=\"cl_bottom_nav_css\" name=\"person\"  (click)=\"openProfile()\"></ion-icon>\n      <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">PROFILE</label>\n    </div>\n\n  </div>\n\n</ion-content>\n");

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

/***/ "./src/app/pages/favourite/favourite-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/favourite/favourite-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: FavouritePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritePageRoutingModule", function() { return FavouritePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _favourite_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favourite.page */ "./src/app/pages/favourite/favourite.page.ts");




var routes = [
    {
        path: '',
        component: _favourite_page__WEBPACK_IMPORTED_MODULE_3__["FavouritePage"]
    }
];
var FavouritePageRoutingModule = /** @class */ (function () {
    function FavouritePageRoutingModule() {
    }
    FavouritePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], FavouritePageRoutingModule);
    return FavouritePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/favourite/favourite.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/favourite/favourite.module.ts ***!
  \*****************************************************/
/*! exports provided: FavouritePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritePageModule", function() { return FavouritePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _favourite_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favourite-routing.module */ "./src/app/pages/favourite/favourite-routing.module.ts");
/* harmony import */ var _favourite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favourite.page */ "./src/app/pages/favourite/favourite.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");









var FavouritePageModule = /** @class */ (function () {
    function FavouritePageModule() {
    }
    FavouritePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _favourite_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavouritePageRoutingModule"]
            ],
            declarations: [_favourite_page__WEBPACK_IMPORTED_MODULE_6__["FavouritePage"]]
        })
    ], FavouritePageModule);
    return FavouritePageModule;
}());



/***/ }),

/***/ "./src/app/pages/favourite/favourite.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/favourite/favourite.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cl_bottom_nav_css {\n  width: 24px;\n  height: 24px;\n  width: 100%;\n  color: gray;\n  background-color: #ffffff;\n}\n\n.cl_bottom_fix {\n  position: fixed;\n  bottom: 0px;\n  z-index: 1;\n  width: 100%;\n  padding: 8px;\n  border-top: 1px solid #f1f4f9;\n  background-color: white;\n}\n\n.cl_post_css {\n  width: 100%;\n  width: 24px;\n  height: 24px;\n  color: #fb7645;\n  background-color: #ffffff;\n}\n\n.cl_text_font {\n  padding-top: 4px;\n  font-size: 14px;\n}\n\n.cl_selected-text_font {\n  padding-top: 4px;\n  font-size: 14px;\n  color: #fb7645;\n}\n\n.column {\n  float: left;\n  border-radius: 5px;\n  width: 50%;\n  height: 150px;\n  padding-left: 4px;\n  padding-right: 4px;\n  padding-bottom: 9px;\n}\n\n.swipe-area {\n  height: 100%;\n  width: 100%;\n}\n\ndiv.b {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.swiper-slide {\n  align-items: start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByYXRpay9tYXJrZXRwbGFjZWlvbmljL3NyYy9hcHAvcGFnZXMvZmF2b3VyaXRlL2Zhdm91cml0ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Zhdm91cml0ZS9mYXZvdXJpdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFHQSxXQUFBO0VBQ0EsV0FBQTtFQUdBLHlCQUFBO0FDSkY7O0FET0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNDLDZCQUFBO0VBQ0MsdUJBQUE7QUNKSjs7QURPQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFHQSx5QkFBQTtBQ05GOztBRFVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDUEY7O0FEVUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDUEY7O0FEVUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxtQkFBQTtBQ1JKOztBRFlFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNUSjs7QUR3QkU7RUFDRSxtQkFBQTtFQUVBLGdCQUFBO0VBRUEsdUJBQUE7QUN2Qko7O0FEMkJFO0VBRUUsa0JBQUE7QUN6QkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mYXZvdXJpdGUvZmF2b3VyaXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNsX2JvdHRvbV9uYXZfY3Nze1xuICB3aWR0aDoyNHB4O1xuICBoZWlnaHQ6MjRweDtcbiAgLy8gY29sb3I6Z3JheTtcblxuICB3aWR0aDoxMDAlO1xuICBjb2xvcjpncmF5O1xuICAvLyBwYWRkaW5nLXRvcDo1cHg7XG4gIC8vIHBhZGRpbmctYm90dG9tOjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNsX2JvdHRvbV9maXh7XG4gIHBvc2l0aW9uOiBmaXhlZDsgXG4gIGJvdHRvbTowcHg7XG4gIHotaW5kZXg6MTtcbiAgd2lkdGg6MTAwJTtcbiAgcGFkZGluZzo4cHg7XG4gICBib3JkZXItdG9wOjFweCBzb2xpZCAjZjFmNGY5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uY2xfcG9zdF9jc3N7XG4gIHdpZHRoOjEwMCU7XG4gIHdpZHRoOjI0cHg7XG4gIGhlaWdodDoyNHB4O1xuICBjb2xvcjogI2ZiNzY0NTtcbiAgLy8gcGFkZGluZy10b3A6NXB4O1xuICAvLyBwYWRkaW5nLWJvdHRvbTo1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gXG59XG5cbi5jbF90ZXh0X2ZvbnR7XG4gIHBhZGRpbmctdG9wOjRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2xfc2VsZWN0ZWQtdGV4dF9mb250e1xuICBwYWRkaW5nLXRvcDo0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmYjc2NDU7XG59XG5cbiAgLmNvbHVtbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OjE1MHB4O1xuICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgICAvLyBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA5cHg7XG4gICAgLy8gbWFyZ2luLXRvcDotNXB4O1xuICB9XG5cbiAgLnN3aXBlLWFyZWEge1xuICAgIGhlaWdodDoxMDAlO1xuICAgIHdpZHRoOjEwMCU7XG4gIH1cbiAgLy8gLnRhYi1vbmUge1xuXG4gIC8vICAgLS1iYWNrZ3JvdW5kOiAjMTUyYTNmICFpbXBvcnRhbnQ7XG4gIC8vICAgLS1jb2xvcjp3aGl0ZTtcbiAgICBcbiAgLy8gfVxuXG4gIC8vIC50YWItdHdvIHtcblxuICAvLyAgIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgLy8gICAtLWNvbG9yOiMxNTJhM2Y7XG4gIC8vIH1cblxuICBkaXYuYiB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgXG4gICAgLy8gd2lkdGg6IDgwcHg7IFxuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLy8gbWFyZ2luLXJpZ2h0OjdweDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgfVxuICBcbiAgLnN3aXBlci1zbGlkZSB7XG4gICBcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICBcbn0iLCIuY2xfYm90dG9tX25hdl9jc3Mge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IGdyYXk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jbF9ib3R0b21fZml4IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWY0Zjk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uY2xfcG9zdF9jc3Mge1xuICB3aWR0aDogMTAwJTtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgY29sb3I6ICNmYjc2NDU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jbF90ZXh0X2ZvbnQge1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jbF9zZWxlY3RlZC10ZXh0X2ZvbnQge1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZmI3NjQ1O1xufVxuXG4uY29sdW1uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgcGFkZGluZy1ib3R0b206IDlweDtcbn1cblxuLnN3aXBlLWFyZWEge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5kaXYuYiB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/favourite/favourite.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/favourite/favourite.page.ts ***!
  \***************************************************/
/*! exports provided: FavouritePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritePage", function() { return FavouritePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/loaderservice/loader.service */ "./src/app/service/loaderservice/loader.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/apiservice/api.service */ "./src/app/service/apiservice/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _adplansimage_adplansimage_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../adplansimage/adplansimage.page */ "./src/app/pages/adplansimage/adplansimage.page.ts");









var FavouritePage = /** @class */ (function () {
    function FavouritePage(dialog, router, apiCall, toast, menuController, loader) {
        this.dialog = dialog;
        this.router = router;
        this.apiCall = apiCall;
        this.toast = toast;
        this.menuController = menuController;
        this.loader = loader;
        this.categoryId = 0;
        this.tabTitle = "0";
        this.advertisementModel = {};
        this.selectedTab = 0;
        this.getBookmarkObj = {};
        // imageArray = [
        //   {
        //     "image": "http://fish.socialflix.in/wp-content/uploads/2020/02/orange-mercedes-benz-g63-164654.jpg"
        //   },
        //   {
        //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXeBX1noYQ2ohp9RRcj6almCOdV1gxfom6IC8IU6rVTq5qMxEN&usqp=CAU"
        //   },
        //   {
        //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTk6eFBj7WsT3CA-hXtm1XIXyrOl_4VGM7KeeRyOwrxlWImybUs&usqp=CAU"
        //   },
        //   {
        //     "image": "http://fish.socialflix.in/wp-content/uploads/2020/02/orange-mercedes-benz-g63-164654.jpg"
        //   },
        //   {
        //     "image": "https://i.pinimg.com/564x/54/c9/9b/54c99b01a6e6574724eda35b4ced31a8.jpg"
        //   },
        //   {
        //     "image": "https://i.pinimg.com/564x/54/c9/9b/54c99b01a6e6574724eda35b4ced31a8.jpg"
        //   },
        //   {
        //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPbANJ346aMhq6fHmxibMF3nWG4PZ-RYurGwBLXz0J-I2h26s8&usqp=CAU"
        //   },
        //   {
        //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRToTUk2HOJ-99u3Mv4qRCO6V3lq5AC6-J7KVA4mRBOh_2moumu&usqp=CAU"
        //   },
        //   {
        //     "image": "http://fish.socialflix.in/wp-content/uploads/2020/02/orange-mercedes-benz-g63-164654.jpg"
        //   },
        //   {
        //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcO627ajsCYsf_HE5L8MXfugvvUe8ouCm8A6688WXreyA73dVf&usqp=CAU"
        //   },
        //   {
        //     "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEg8QEBAQDxAPDw0PDw8QDxAPDw8PFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFyAzOTMtNygtLisBCgoKDg0OFxAQGC0dHR0rLS0tKysrLS0tLS0rLSstLS0tLSstLS0tLS0tLSstLS0tLS0rLS0tLS0tLSstLS0tK//AABEIALcBEwMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAgADBAUGB//EAD4QAAIBAgQDBAcHAgQHAAAAAAABAgMRBBIhMQVBUQYTYXEVIlKBkaGxBxQyQnLB0WKSM8Lh8BYjQ1NjsvH/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QALREAAgIBAwMEAQQCAwEAAAAAAAECEQMEEiExQVEFExQVYSIjQnEygTOx8CT/2gAMAwEAAhEDEQA/AOsmYn0QyYMaDckYUxDoNyWiwXEUg3JZaImSUg3JZVBTJZSIQ2UkG5LCiXJYDENiCiGwCjNskclsQUiXIRLE7gJYe4LBYakFgaLUhpiNGikUBlqQxWWmMBaYELTAA7FQDRMloBSZDQGUmQ0KUmS0BlJkNCtDTJaEKFQyYxDpiGgpiGg3EUS5LKJckpBuSyyElINyGUiJkspDXJZQbkMCIhsBiGyRkZtiHRm2Sx0ZORNjJGbkKw5Sd4rJlHvCxWi1IditFxZQkjWLKEZomMVmiZQDRDA2WALlIGC5aIYCyWC5SIYGUiWC5RDFbKRLEKJoCZRAyYhoKYmikMmSUG4mholyaLQbk0UiXJaLDchopHOwPF41a+Kw6WWeGdO+qeeM43zJcrPQcoUk/JlizqeScO8TpJmLOoZMhgFMhiGRlITHRmyWWIxbJY6MZMhliRjKRI6Rm5k2BoamFiSRrGRSYjNospFcjaJaK2bRKEbNEUkLc0RQGzRAC5SEwXLSJBctIhguWiGBspEsDZSIYrY0SLcoQikWzMbMIaImIpDJiaKCmSMNySkFMktEuSykG5DNEfMeE8XcuMyqJ+rVq1aHnBRcY/OMWdU4/tngYc3/ANt+XR9QTOBn0iGRDGFGbJY8TKQmWIxkQWRMJMhlsUc85GbLoo5MmSiGy1QOSWbkjcCUSo5rGmVTR2QmWimR1wZaKZHRE0RXI3iWitmyLQpohgLQCs0QmAtEMFy0QwXKIYGykQxWykSxWykQLcYgItkDIllIKEMYTKISUgksoJJaCSykcHtP2npYKNvx15K9Oknt0lN8l82VDG5HLqtZHAq6y8HzmGGxVB0uJyoxySr95FWajdttPKvwxetmdNxdxPEUMuOs7XFn1jgvFaeLpRrUno9JRf4qc1vCXj/9POyQcHTPptNnjngpROgYs6BkZsQ8TKRLLUYSZDLYmEmZsvgjjySM2acPTu0urSPPncpKK7mOSW1Nnq8LwqnBK8VJ829fgfaaT0XTYoLfHdLvZ4eTUzk+pl4twuGVzgsrirtLZrmcHqvo+KOKWXCtrj2NtNqpKSjJ3Z5qoj57DNnsxZnmj0IM1RTM64M0RVI3iy0Vs2iy0KzVFCloAFoTAaIhistEMUtEMDKRmwMpEiMpEMUqyaIUSG5LGhriKDcTKQUSUEllIJJaOd2g4l91w9WvlUnBLLFuycnJRV/iEY7nRlqMvtY3Ndj512b4U8fVq4zFzXcU5OdacnbPJK+Twila/hojectv6V1PF02L35vLlf6V1PU1u1/DcSpYWeeNKpHJnlTy01053jbTW3QxWKcXuPRlrtNkXtu0nwef7P4ipwvHPDTeelWnTg2tpRl/h1V8Vf3l5EskLXU49NklpdR7b6P/AMmfUkeaz6WhkZsTHizOSEyxMwkiC2DMZIhouhI5MkTNo1Yerlaa5NM8+acJqS7MwyR3JryeywmPp1EmpJPmm7NM+30nqmDNBPdT7pnz+TBODpoycY4jCMJQTTlJWsnsjh9W9UxLFLFje6UvHY20unlKabXCPKVJHzWHHSPdijPJnfBGqKZM6oo0RXJm8S0Vs1RSFZoigM0QCloGK2WjNgZZDAWiGBlIhissgVlIQgyCItkBRLKQwikMhWMhJSCSykEks8t9pNbLgmvbrUYfWX+UvF/kcPqT/ZPHUMy4RVs9J46Kl+lU46fFI0f/ACf6PNimtI/zI8wanCdfi7nkwNZ7zwyjGXP/AJNWcIv4RiRGuUdGXdUJPuv+j7Rw7FKtSpVVtVp06nlminb5nlZFUmj63DPfjjLyjUjBmjHiZyJZZExkQWRMZEstic8zNlsWcmSKZDRYpnLLEiHFAlIqGNIaVFcmdkEi0VSOmBaKZHRFmiEkbRKRWzZFoRmiGRloYrLQhGaIzYCyGAtEsDKRmxWWiWBjRAhQgoZKChDQyJbKCIYSSwkspEJbKR5j7RqWbBTfsVaMvnl/zF4f8ji9Sj+w3+Tzn2fd1XpYvBVrZaijVjd7NLLKa8V6j9xpmtNSRw6DZOM8U+/J5LB0IyrU6cpLI60ISktsudJy8rG0n+mzzoRW9RfSz0n2jV6fe0MPStlwtHI1G1oyk75dOiUTHAnTb7nd6lKDnGEOkUfQ+yU82Dwb/wDBTXwVv2PPz/8AIz3tC708P6OyjlbOljxM2yWWIykSPExkSy2LOeSM2WRZztEhTM3FiojY1EKEbNoxKSK5M3iikVyOiJoitm0SkVs1RSFZqihWWhgLQmKzREClogDKTJYpSZDRGWiGKyiWKMkhRCChFIYTGEQyEssJJaJchjOT2swyq4PExfKlKa/VD11/6lY3UkYayG7BJfg+LqTWza8nyO6kfLpgCgHpUpTlGMVeUpKMVzcm7JfFjktqsaTbpH3bg2B+70KNC+buqcYt9Zc38bniZpbpNn2Wmxe3ijDwjemYNGzHTM2iR0zNokdMyaJodTMpQJoZVDJ4kS4hzC9sNpHIPbChXM0UB0I5GiiUkI2apFISTNUikI2aJFCtmiQwXLQxbloTFbNEQApEMW5aIYLlohgKRLFbKIYpRJExkINwKQUyWUNcQyXJZSYbklohLKK8TSU4Tg9VOE4P3pr9xLhinHdFryfBpwcW09Gm010a3O+z5JquBAEeo+zzh/fYuMpL1aEXWf6lpBfF39xlqJ1Cjv8ATcPuZ14XJ9eR5LPqx0yGgGTIaJoZMzaFQyZDRNDZiXEKCmQ4iaJmJ2iomYe0KA5FKI6Fci1EdCtlpFUK2aJDoW5aQ6FuaIYGykJitmiJbFbKSIsVsshsFykSwNlIhgbLRDFbGSwXKJFuWzOwpklphuIdjJiooNyRpkzEsuw3JKTJcllWfFO0lNRxWKitu/rW98m/3O2PRHy2oVZZf2zmFGJ9D+yiKti3+a9Be713/vyOTVdEe36Olc2fQUzhaPesdMhoYUyWgCmS0KhsxDiKg5idoqDmJ2hQcwtoqBmDaFAzFKI6FcilEdAuWolUBstIBWyqAFykhMVs0SJbFbLolsFykjNsVyKRLYrZVENguWkS2S5RFitlJEti3HRNnIXGV0+TO74kjylr4h9NR6fUl6SRX2ESem10+ovhyH9hEnp2PR/MT0civsYjLjkej+YvhyK+xiMuOR6P5i+HMf2UQ+m4dPqT8KZX2UCnF9oYU4Tm1fJFy5q7toiZaNpWwfqUa4R8kxNeVSc6ktZVJSnL9Und/UdHkyk5Nt9yoCT1HYDiqw9ecZfhrQtz/FF3XyzEzw+7wjs0WpWCbb6M+grj8Oj+Zk/T5nrfa4w/8RQ9li+vmUvVcfgZdoqfRkP07IV9riGXaGl0ZP12QPtcQ64/S6MX12Qr7PEMuPUvEn67IV9lhGXG6T6kP0/INa/Ex1xin4/An4MzRazEF8Xp9QWhmJ6zEI+N0upf1+Qn5+FC+nKXUf1+QX2OEHpyl1KWgyB9lhFfHaPUfwMgvssPkHp2j1H8HJ4F9lh8gfHKPtfQpaLJ4J+xxeQem6PtfQr4eTwT9hi8g9NUva+aK+Jk8C+wxeSel6XtfND+Lk8CeuxeSelqXtL4r+R/GyeCfm4vJPSlL2vmilpp+CXrMfknpOl7S+KH8efgXzMfkD4lT9pfFFLBPwJ6vH5A+IU/aXxQ/Yn4J+Vj8g9IU/aXxQ/Yn4J+TDycTufFHs8HztMKpXEUkT7v5CtBtYO4Cwph+7E2NQZHhgsra0TuBWFM4vaxuNDT804Rflq/2OfUP9JSR4k4SiABp4dXVOpCb1UZJvy2fyKhLbJMD39DLOKlBqUXs09D0VJPlCplqoPoOx0ydy+grCmCVJ9A4DkHdvoAWwxpiZcbNNOg3sYykkdWOLfQ008JPmjnllidcNPk8Aq4SQ4ZIiyYJoyyob6M6FI43FlEqb6M0TRi00VTpy6FKiHuK8jHwRyK6bK4Jdiypj4E2xHTHwQ7JkALYHECW2LlKFbJYKFuYWmMLZLMOBbmBXCkG5hsOhbmdSHmKxpDOL6hY9rIk+oiqfkOR9RWG1jOL6ibKp+SR8WKykALA43ayhmoSevqyjL3bP6nPqOYlRR4c4Czr+hXPDwr07yl63eQ30Ums0f4NvabhuQrOQYjNnDOJVKEs0Xp+aD/AAyX7PxLhNxfAHvOH42FaCqQlpzT3i+jO6ElNWgNObxHQJhzoKK3kVgYLkMZxTJabRUZRTNeHrJO6sc+SHHJ24cqTtHTo41Pojz56c9rHrFLwLi8Tb2WPFi7EajUVyqORWxN29j0oY6R4mXPbsonifI1UDneUV4nwHsF7tlUq/kWoGbyCd/5D2k+4RzXgFCcxXVXgOhe4B1F4DoTmgOS8B0TuQuaPUdMVxIpw6hyJSiFOPUOQuPkN49Q5HcQ5Y+0g5HUfJMsfaQxUvJa3yGZMezS1EVyiRECJmYBbD3lhMpMRzfQQrYsZvpYYk2V4xZ4Si1dSTT95Eo2milN2fPakMsnF7xbT80eW1To6Uew4BjqcaFOLqQUle6ckmtWd2GcVFWzOV3wc7jiwkryU7VH/wBq0k34rb5mWb23ymEdx545TQ6XAMZOnVglfLNxhJdU3o/caYpNSQme5jN9D0KJTGbYD6gu143FVgm0W05p8rsiSaNoSUuxogl0OeTdnXCMa6GqlSjZ9TCeR2dePFHa7KcRUglZ89LlwUrsxzShVGSNFW2b6M6d/JyLGqKq1JGsZGM8aooi0UYqgaMfIcMjih2TSEcYhbFtiRxgO2PbEZ0o9RbmDxxoHdR2uPcyfbiJ3Udrodsn24+QSpLkx7mS8URJQS5oqyHCgWAmiZAsNor8h2RRvda/Ik2bDneqAE2NGruIaYqqeADTElPTYRLY17+SBlKwqYiue5VOS11Ak8VxyFq07fmyy+K1+dzzcyqbOmHQzYTDSqyUIrV/BLqyIxcnSG3R2Ydm/aqa9FFfuzoWm8sz9w0LsxBbzm/7V+xS0y7se9mzB8IpUnmjFuXKUndryNYYYxdkuTOlCp7jVoUWGUun1JLCl1YN0NRT6jxVr2vqS3ZcYuPCLKNTK/Wb8EYz5XB0Y2k+S+tNpq2bxJgvJrOTviympNc436alpMzlJeCVYy3bsraJMUavgJ7urMMK93s/edG3g4vcbYJPovIpEP8ABW4tDI/UCVSXIA3SBnYxbgSq8uYxOQWxUDdEU+g6FuKpVH0GQ5DRmxgpAkAOQE30Amwyk9kwHbFbkFC3G/ne6EaMSer31CxURyUdW0IfQaGJi9mm+ghqSYYvW2jEAXLq9gKBKq+SALFnLTS1wDg8l2g/xF+hfVnBqf8AM3xu0aezVL8c/KKfhu7fI00serIzS6I9DHKtf9TqIjQ8ptrYYWxFJ8wCyZny18BMcW7pDZ3s7J9BItvyNTevgKXI4NJlqrpNWM3Hjk39zngueKv+W7J9tJGnvO+hKeJldL4+BnLHfJcMz6FlSu7uyjKy9xKhxyzSeTnhWZqlWersldWNopI55Sm020ZW5LdX8Tbg5nuXYolVd7XsXRi5MVy5NsCbZHXXi7ADkJGonrZoZO4nfa6JjJcuRqkvEB7gd4A+RVNvcogN7beACGbktdwDkrjOb5WAVse7GFgzgKzdOGl4u/NoizVqitK+oxAUk9HZrmIOAZaa/Kl4oAqI1KcVsmIpUPC1/wCRFJCzb2y+TvoAv9FT8V8wEcHtFS/BNf1Rf1X7nFqVymdOJ8UauzaTpy/pm9fcjTTP9LJyrmzr0lbyOgz6CVKz219wh7gqS5trzGLgt7yKa1sJlqSXIk62uqb8QSpA8ibsenVvtsJouMr6FtOUdW3Z9GQ2awrqa01ptfzMGzrirVlVSUPzOwRcvBM1j7slKVPXLUT6obcu6CGzmpFFSe6Sur6O5aszlRRUq1E9ctuW7+JqvBhJyuzHUc5Nu3PktC0qOWe6Tsd7a6NLmNA15ZKST56gJUI1v6z3GS0HMub1GhWgSYwtjy1WjEPlopmltdsoyoemrXtcClwB1HruAbmFz6poYPkEpK27AVIr7xeIE8HVjqmsxmmdLVAdtVd9Lchk9ivuIpq7smS2gjANTK1aLTtzumg3LyNwfQzd/SjpKrFdVmiS8kfILG0UVMRC/q1FLwUkG+PkTi0yxN2dpX6ajtCpminT0V2r+Y7KUWzJxfBOVKbtssyd97f6XMcyuBpjTTM3ZmpFQnmdln3XkjHTvhm067nWnWpp6TZ07jDbHyJHE0Vd52vMneWow7FdfEU5JO7fRoreiXC2ULiNGOjqfJv6GfvRXcpY2aYY6hPSNVO62d0/gwjmTNJYolmH4cpv1arByfgI4YvoyyvgErpybtvqXCVk5cVdHZnXDZL1kpa+OhDpPqVHHKrpllXh7UVKfeK90rbMW620maSxOk5JpMSphlFWh3jk+Tj8xRk/5BkxxSrH1NVGNRRV6ajbm92K05cSLW+MVcSqeGrSbtLR8ro0TSRhKM5Mkk6cbOazXtbmvEae5ia9uFt8mT7w5StKLtor8mWvBhKSZoaSeifjcoaSXQSNJu+q8gJXJVOnJX9W/jsFicK5FpJ7fsUibLoQd7fXYAjd0P3WuiGPbzSEmmtgoGNTi5b6AC5BOL5K6CwcGUV6bVtrdBmU7F7lgTsODQ4pVgsqaaW102/I8qOecVR6UsaZc+O1nvk/tf8AJXyZk+1EwYjESqNyk9X52RjKTk7ZokkitSfXfcQyCAgANGpJbNrybQ1JruKkPPEzdrzk7bXb0G5N9wpFlPiNaMciqSy66b/UaySSqw2oTD4udO6i7J7ppMIzcegNJiTrSk7uTfvE5N9QpCOTFYxo1JK6TaT3SdkwTaAUQETAD0XZ3iKlJU6kmm/wS6/0vxOnHnl0Ylji/wAHp5YCL17xctG9zT5NfxNfg91MvxOArQS9X1ZaJqV0TDU4cjrua5NFqMKuuGZp4atJRzWcYvS8yt+OLfkzUM84q+UvyMpyzXjBR2WbNewq45dltu7Uaf8AZZWwrlo56LXV3BZYwX+IS08sjrcUToJRco1LOLtbW8jRTtpV1MZYtsXJS5RnVJT1dn1b3Nr2nK4b+Wxa+FV/VbkrBGXkWXEv4goQvylppYcuBY4tjSdlbI79Rde5o7roZo1ajlqlbyGl+TBzlfQsnm8Il8EvcHu5NbITaKjCT5K7OOjl8xohtruRUVvmT99h3ROzvY7oNWs9Ogtxp7birRLRXi77AHQSW+qKRlLddi+4A58Hizwz0yABAAgAQAIAEACABAAgAQAIAEACABAAaEmmmt0015jTrkD6FwzFYarGmpU5JtJuUdbqxq5ZuWmqO3CtLKMU4u+50MfCilCMJ1rLX13PLHwsc+njlblKcUn+Dpz+0lGEZOv9j1uGUMqarOSt+VaI1xavJJtPHX9mWT0/Co2srMMMPRSy97bXZaHXLJPtA4I4cXSWSha2Jo0dXVcmtElr9CN031jRr+1BusllX3mnPWM3Z6tNczbHu8HNlljl0kSp3fKbfX1S1OV1Rk8WKrUjK8dThpmcV42RM3XUrFJdh6NXN60JLx1Qt8f7NFF9YujVCEp/9SK9wb0uxWyUv5C1aUo9ZLroWskTKWKa7lVXCN7svejF6eTdtiqglbV28w3DWJIsnTWuiXnqw3MbhFlKjGN+duq1LXJjSh3Fp4mEr3dkHI1KL6iKNN6pJ+/UCXtGqKN7t9BiUY3dl6iuhNm2xHgTxjqIAEACABAAgAQAIAEACABAAgAQAIAEACABu4fxKpRfqu66X28jSM2gtrod5dqnGKes37LVrebKlLHVpcmsc+RdeTHLtdirSUXTgn0ppteVzCUdztmsdZkiml3OTXx9WbvKcn77fQvfLycr5dsfDcSqQad1NLlNZl/JXuy8iUY3dHXwfaOEX69BWfsS29z/AJL+ROqKjHEnbibsRx6i4SlCyajpC1pXLWWldjltfRHka1WU25Sd23c5pScnbISSFjNrZteTsCbGdDC8YqR/E80ed9HbwZtDO115JcbO3DGxqZVGbS/Vz8jtjKD5TOeTldMvcHC8lN+K1K48C/UlxIFG71bl4XL4M/3C+UZ2v9WForZPqVTpWv67u7a7h24JcOeWURw6X4prXk0CsThHyaPu0VZpRd+dwTLeJJDfck9lz1eb5BY/a44RZ3X6v7ia/JfPg8GeQdJAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAIAa8JxOrS0jL1fZklJfPY0jklHoxUjv4LjneJxcbVEuX4Wuq6HVhyb+GRlltj0NdLGb3jfQ6nE51nXdGfv4z/JZ33uON2ROUWuhKmXdq7KZFIXMna0fnYViaNGGtshscOpouv8AbINz/9k="
        //   },
        //   {
        //     "image": "http://fish.socialflix.in/wp-content/uploads/2020/02/orange-mercedes-benz-g63-164654.jpg"
        //   }
        // ];
        this.segment = 0;
        this.sliderOptions = {
            initialSlide: 0,
            slidesPerView: 1,
            speed: 400
        };
        this.menuController.enable(false);
    }
    FavouritePage.prototype.ngOnInit = function () {
        if (this.tabTitle == "0") {
            this.selectedTab = 0;
            this.getAdvertisement();
        }
        else {
            this.selectedTab = 1;
            this.getBookmarks();
        }
        // this.arrayLength = this.imageArray.length;
    };
    FavouritePage.prototype.ionViewWillEnter = function () {
        if (this.tabTitle == "0") {
            var jsonString = localStorage.getItem("BOOKMARK");
            this.getBookmarkObj = JSON.parse(jsonString);
            if (this.getBookmarkObj == null || this.getBookmarkObj == "" || this.getBookmarkObj == undefined) {
                this.getBookmarkObj = {};
            }
            else {
            }
            console.log("show retrieved object:" + this.getBookmarkObj);
            this.selectedTab = 0;
            this.getAdvertisement();
        }
        else {
            this.selectedTab = 1;
            this.getBookmarks();
        }
    };
    FavouritePage.prototype.activeInactiveAd = function (item) {
        var _this = this;
        var isActive = 0;
        if (item.isActive) {
            isActive = 0;
            console.log();
        }
        else {
            isActive = 1;
        }
        console.log("check", "" + JSON.stringify(item));
        // /api/v1.0.0/users/{userId}/advertisementsActiveInactive/{id}
        var send_date = {};
        send_date['userId'] = item.userId;
        // send_date['isActive'] = isActive;
        send_date['id'] = item.id;
        // /api/v1.0.0/users/{userId}/advertisementsActiveInactive/{id}
        // /api/v1.0.0/users/{userId}/advertisementsActiveInactive/{id}
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].version + "users/" + item.userId + "/advertisementsActiveInactive/" + item.id;
        this.apiCall.putOnlyUrl(url).subscribe(function (MyResponse) {
            if (MyResponse['isSuccess']) {
                _this.changeActiveStatus(MyResponse['result'][0]);
            }
            // console.log("checking",""+JSON.stringify(MyResponse));
            // this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            _this.presentToast("Please try again");
            _this.loader.hideBlockingLoaderAuth();
        });
    };
    FavouritePage.prototype.changeActiveStatus = function (item) {
        for (var k = 0; k < this.advertisementArray.length; k++) {
            if (item.id == this.advertisementArray[k].id) {
                this.advertisementArray[k].isActive = item.isActive;
            }
        }
    };
    FavouritePage.prototype.bookmarkAdvertisement = function (advertisementid) {
        var _this = this;
        this.checkStatus = this.getBookmarkObj.hasOwnProperty(advertisementid);
        console.log("check for status:" + this.checkStatus);
        if (this.checkStatus) {
            console.log("before delete:" + (this.getBookmarkObj));
            delete this.getBookmarkObj[advertisementid];
            localStorage.setItem("BOOKMARK", JSON.stringify(this.getBookmarkObj));
            this.removeBookmark(advertisementid);
        }
        else {
            this.getBookmarkObj[advertisementid] = true;
            localStorage.setItem("BOOKMARK", JSON.stringify(this.getBookmarkObj));
            console.log("display object:" + (this.getBookmarkObj));
            // this.loader.showBlockingLoaderAuth();
            var send_date = {};
            this.advertisementModel['userId'] = localStorage.getItem("userId");
            send_date['userId'] = this.advertisementModel['userId'];
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].version + "categories/" + this.categoryId + "/advertisements/" + advertisementid + "/bookmark";
            this.apiCall.postAuth(url, send_date).subscribe(function (MyResponse) {
                // this.loader.hideBlockingLoaderAuth();
            }, function (error) {
                _this.presentToast("Please try again");
                _this.loader.hideBlockingLoaderAuth();
            });
        }
    };
    FavouritePage.prototype.removeBookmark = function (advertisementId) {
        var _this = this;
        this.userId = localStorage.getItem("userId");
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].version + "users/" + this.userId + "/bookmarks?" + "size=" + 1000;
        this.apiCall.getAd(url).subscribe(function (MyResponse) {
            _this.getBookMarkArray = MyResponse['result']['list'];
            for (var i = 0; i < _this.getBookMarkArray.length; i++) {
                console.log("show advertisement id:" + advertisementId);
                if (_this.getBookMarkArray[i]['id'] == advertisementId) {
                    console.log("show advertisement bookmark id:" + _this.getBookMarkArray[i]['bookmarkId']);
                    _this.bookmarkId = _this.getBookMarkArray[i]['bookmarkId'];
                    console.log("check ------ bookmark id:" + _this.bookmarkId);
                }
                else {
                    console.log("show advertisement bookmark id failure ::" + _this.getBookMarkArray[i]['bookmarkId']);
                }
            }
            console.log("show advertisement bookmark id:" + _this.bookmarkId);
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].version + "users/" + _this.userId + "/bookmarks/" + _this.bookmarkId;
            _this.apiCall.deleteAuth(url).subscribe(function (MyResponse) {
                _this.loader.hideBlockingLoaderAuth();
            }, function (error) {
                _this.presentToast("Please try again");
                _this.loader.hideBlockingLoaderAuth();
            });
        }, function (error) {
        });
    };
    FavouritePage.prototype.presentToast = function (message) {
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
    FavouritePage.prototype.segmentChanged = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectedSlide.slideTo(this.segment)];
                    case 1:
                        _a.sent();
                        this.tabTitle = ev.detail.value;
                        if (this.tabTitle == "0") {
                            this.selectedTab = 0;
                            this.getAdvertisement();
                        }
                        else {
                            this.selectedTab = 1;
                            this.getBookmarks();
                        }
                        console.log('Segment changed', ev.detail.value);
                        return [2 /*return*/];
                }
            });
        });
    };
    FavouritePage.prototype.slideChanged = function (slides) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loader.showBlockingLoaderAuth();
                this.selectedSlide = slides;
                slides.getActiveIndex().then(function (selectedIndex) {
                    _this.segment = selectedIndex;
                    console.log("show index:" + _this.segment);
                });
                this.loader.hideBlockingLoaderAuth();
                return [2 /*return*/];
            });
        });
    };
    FavouritePage.prototype.getBookmarks = function () {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        var userId = localStorage.getItem("userId");
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].version + "users/" + userId + "/bookmarks?" + "size=" + 1000;
        this.apiCall.getAd(url).subscribe(function (MyResponse) {
            _this.advertisementArray = MyResponse['result']['list'];
            _this.bookmarkLength = MyResponse['result']['count'];
            // this.arrayLength = 0;
            //  console.log("advertisement data::"+JSON.stringify(this.advertisementArray));
            _this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
        });
    };
    FavouritePage.prototype.getAdvertisement = function () {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        var userId = localStorage.getItem("userId");
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].version + "users/" + userId + "/advertisements?" + "size=" + 1000;
        this.apiCall.getAd(url).subscribe(function (MyResponse) {
            _this.advertisementArray = MyResponse['result']['list'];
            _this.arrayLength = MyResponse['result']['count'];
            // this.arrayLength = 0;
            //  console.log("advertisement data::"+JSON.stringify(this.advertisementArray));
            _this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
        });
    };
    FavouritePage.prototype.openChatList = function () {
        this.router.navigate(['/chatlist']);
    };
    FavouritePage.prototype.postAdvertisement = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_adplansimage_adplansimage_page__WEBPACK_IMPORTED_MODULE_8__["AdplansimagePage"], {
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
    FavouritePage.prototype.home = function () {
        this.router.navigate(['/home']);
    };
    FavouritePage.prototype.openFavourite = function () {
        this.router.navigate(['/favourite']);
    };
    FavouritePage.prototype.openProfile = function () {
        this.router.navigate(['/profile']);
    };
    FavouritePage.prototype.showAdvertisementDetail = function (data, id, isBookmarked, isActive) {
        if (isActive) {
            console.log("check myadd bookmarked:" + isBookmarked);
            var sendId = {
                "id": id,
                "categoryId": this.categoryId,
                "status": "users",
                "adType": 0,
                "isBookmarked": isBookmarked
            };
            // alert("show data::"+JSON.stringify(data));
            localStorage.setItem("url", data);
            console.log("send image::" + id);
            this.router.navigate(['/advertisementdetail', { sendId: JSON.stringify(sendId) }]);
        }
        else {
            this.presentToast("Advertise is inactive");
        }
    };
    FavouritePage.prototype.showBookmarkAdvertisementDetail = function (categoryId, adId, isBookmarked) {
        console.log("check bookmark bookmarked:" + isBookmarked);
        var sendId = {
            "id": adId,
            "categoryId": categoryId,
            "status": "category",
            "adType": 1,
            "isBookmarked": isBookmarked
        };
        // alert("show data::"+JSON.stringify(data));
        // localStorage.setItem("url", data);
        // console.log("send image::" + id);
        this.router.navigate(['/advertisementdetail', { sendId: JSON.stringify(sendId) }]);
    };
    FavouritePage.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] },
        { type: src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }
    ]; };
    FavouritePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favourite',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favourite.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favourite/favourite.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favourite.page.scss */ "./src/app/pages/favourite/favourite.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"],
            src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]])
    ], FavouritePage);
    return FavouritePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-favourite-favourite-module.js.map