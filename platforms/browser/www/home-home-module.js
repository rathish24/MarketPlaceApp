(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-row>\n      <ion-col size=\"4\" (click)=\"showPopup()\" fxLayoutAlign=\"start center\">\n        <mat-icon style=\"font-size:22px;color:white;position:fixed;left:10px;cursor: pointer;margin-top:2px\">room</mat-icon>\n        <label style=\"color:white;margin-left:28px;font-size:15px;cursor: pointer;margin-top:2px\">{{cityName}}</label>\n\n      </ion-col>\n      <ion-col size=\"6\" fxLayoutAlign=\"start center\">\n        <label style=\"color:white; font-size:22px; margin-left: 20px ;margin-top:2px\">Holyhub</label>\n      </ion-col>\n\n      <ion-col size=\"2\" fxLayoutAlign=\"center center\">\n        <img src=\"{{languageImage}}\" [matMenuTriggerFor]=\"menu\" class=\"languageImg\" />\n        <!-- <mat-icon [matMenuTriggerFor]=\"menu\"\n      style=\"position: fixed; right:22px;color:white;font-size:20px; bottom : 15px;cursor: pointer;\">\n      g_translate</mat-icon> -->\n        <mat-menu #menu=\"matMenu\">\n          <div fxLayout=\"row\" style=\"margin-top:10px;\" *ngFor=\"let language of Languages\"\n            [ngClass]=\"language.image == languageImage ? 'selected-category-back' : 'category-back' \"\n            (click)=\"getLanguage(language)\">\n            <button fxLayout=\"row\" mat-button style=\"padding:5px;\">\n              <ion-row>\n                <img src=\"{{language.image}}\" style=\"width:20px; height:20px\" />\n                <label style=\"height: 30px;\" mat-menu-item>{{language.name}}</label>\n              </ion-row>\n            </button>\n          </div>\n        </mat-menu>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-row>\n      <ion-col size=\"10\" fxLayoutAlign=\"center center\">\n        <ion-searchbar \n        (click)=\"ISO=true\"\n        [formControl]=\"searchControl\" \n        showCancelButton=\"focus\" \n        (ionCancel)=\"ISO=false\"\n        ></ion-searchbar>\n      </ion-col>\n      <ion-col size=\"2\" (click)=\"notifications()\"  fxLayoutAlign=\"center center\">\n        <!-- <img src=\"{{languageImage}}\" [matMenuTriggerFor]=\"menu\" class=\"notifImg\" /> -->\n      <ion-icon class=\"notifImg\"  name=\"notifications-outline\"></ion-icon>\n    </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <div *ngIf=\"loadingBlock\">\n  <div class=\"loadingBlockAuth-wrapper\">\n    <div class=\"loadingBlock-box\">\n\n     \n      <div class=\"loaderrr\"></div>\n      <div class=\"text\">\n         &nbsp;&nbsp;Please Wait\n      </div>\n\n    </div>\n  </div>\n</div> -->\n\n<ion-content padding *ngIf=\"ISO\">\n  \n  <ion-list>\n    <ion-item (click)=\"showAdvertisementDetail(item.categoryId,item.id,item.isBookmarked,item.name)\" *ngFor=\"let item of items\">\n      {{ item.title }}\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n\n<ion-content [fullscreen]=\"true\" *ngIf=\"!ISO\">\n \n  <div style=\"background-color:white\" class=\"cl_margin100\">\n\n    <div>\n      <ion-slides [options]=\"slideOptions\"  (ionSlideDidChange)=\"onSlideChanged(slider)\"   pager=\"true\" #slider (ionSlidesDidLoad)=\"slidesDidLoad(slider)\"\n        class=\"half-black\"   >\n        <ion-slide *ngFor=\"let item of bannerArray\"   \n          (click)=\"showAdvertisementDetail(item.categoryId, item.advertisementId, item.isBookmarked,item.id)\">\n         \n          <div *ngIf=\"bannerCount != 0 \" class=\"cl_img_div\">\n            <img src=\"{{item.image}}\" class=\"cl_margin100\" />\n\n            <div fxLayout=\"column\" fxLayoutAlign=\"end end\" class=\"checkBack\"\n              style=\"background-image: linear-gradient(to bottom, transparent 15%, rgb(0, 0, 0,1)) ;\">\n\n\n              <div fxLayout=\"row\" fxLayoutAlign=\"start start\" class=\"cl_name_css\">\n                <label style=\"font-size:18px;\">{{item.title}}</label>\n              </div>\n              <div class=\"sub_div\">\n                <ion-row>\n                  <ion-col size=\"8\" fxLayoutAlign=\"start end\">\n\n\n                    <div fxLayoutAlign=\"start start\">\n                      <label class=\"check_width\" style=\"font-size:15px\">{{item.description}}</label>\n                    </div>\n                  </ion-col>\n                  <ion-col size=\"4\" fxLayoutAlign=\"end center\">\n                    <div class=\"show_width\">\n                      <label style=\"font-size:15px\">{{item.city}}</label>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </div>\n          <!-- <div *ngIf=\"showNoBanner == 1 \" class=\"cl_img_div\">\n            <h3 align=\"center\">No banners available</h3>\n          </div> -->\n        </ion-slide>\n      </ion-slides>\n\n\n      <div fxLayoutAlign=\"center center\" *ngIf=\"showNoBanner == 1 \" class=\"cl_img_div\" style=\"background-color:rgb(175, 171, 171);\">\n        <h5 align=\"center\">No banners posted</h5>\n      </div>\n\n    </div>\n\n\n\n    <div style=\"width:100%; background-color:white;margin-top:10px; height:auto\">\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between\" style=\"margin-bottom:10px;width:100%;\">\n        <div style=\"width:10%;\" fxLayoutAlign=\"end center\" (click)=\"filter()\">\n          <!-- <mat-icon  *ngIf=\"noInternet == '0' \"  style=\"font-size:40px;color:#fb7645;margin-top:-30px;\">filter_list</mat-icon> -->\n          <!-- <ion-icon *ngIf=\"noInternet == '0' \" name=\"options\" style=\"width:35px;height:50px;color:#fb7645;margin-top:-10px\" (click)=\"filter()\"></ion-icon> -->\n          <img *ngIf=\"noInternet == '0' \" src=\"../../assets/newimgfilter.png\"\n            style=\"width:25px;height:35px;color:#fb7645;\"  />\n        </div>\n        <div  style=\"overflow-x: scroll;width:87%\" fxLayout=\"row\" id=\"container1\">\n          <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:145px;\" *ngFor=\"let item of categoryArray\"\n            (click)=\"checkType(item.name, item.id)\" [ngClass]=\"(displayCategory == item.id) ? 'even' : 'odd' \">\n            <img fxLayoutAlign=\"center center\" src=\"{{item.image}}\" style=\"width:30px;height:30px\" />\n            <div fxLayoutAlign=\"center center\">\n              <label class=\"categoty-width\">{{item.name}}</label>\n            </div>\n          </div>\n        </div>\n\n        <div style=\"width:10%;\" fxLayoutAlign=\"center center\" (click)=\"scrollHorizontal()\">\n          <!-- <mat-icon  *ngIf=\"noInternet == '0' \"  style=\"font-size:40px;color:#fb7645;margin-top:-30px;\">filter_list</mat-icon> -->\n          <!-- <ion-icon *ngIf=\"noInternet == '0' \" name=\"options\" style=\"width:35px;height:50px;color:#fb7645;margin-top:-10px\" (click)=\"filter()\"></ion-icon> -->\n          <!-- <img *ngIf=\"noInternet == '0' \" src=\"../../assets/newimgfilter.png\"\n            style=\"width:25px;height:35px;color:#fb7645;\"  /> -->\n\n            <!-- <div fxFlex=\"20\" fxLayoutAlign=\"center start\"> -->\n              <ion-icon class=\"arrow-icon-css\" style=\"width:25px;height:35px;color:#fb7645;\" name=\"chevron-forward-outline\"></ion-icon>\n           \n\n              <!-- <ion-icon class=\"arrow-icon-css\" style=\"width:25px;height:35px;color:#fb7645;\" name=\"chevron-back-outline\"></ion-icon> -->\n           \n           \n              <!-- </div> -->\n\n\n        </div>\n\n\n      </div>\n\n\n\n      <div *ngIf=\"countAdvertisement > 0\" style=\"width:98%;margin-left:1%\">\n\n        <div class=\"row\" *ngFor=\"let item of advertisementArray\">\n          <div>\n            <div class=\"column\" style=\"position:relative\">\n              <img src={{item.images[0]}} style=\"border-radius: 5px;width:100%; height:100%;\"\n                (click)=\"showAdvertisementDetail(item.categoryId, item.id, item.isBookmarked)\" />\n\n\n\n                \n              <div style=\"position:absolute;top:7px;right:8px;width:30px;height:30px;\"\n                (click)=\"bookmarkAdvertisement(item.id,item.isBookmarked,item)\">\n\n              \n                <ion-icon *ngIf=\"item.isBookmarked == 1 \"\n                style=\"color:#fb7645;width:24px;height:24px; margin-left:5px\" name=\"heart\"></ion-icon>\n              <ion-icon *ngIf=\"item.isBookmarked == 0 \"\n                style=\"color:#fb7645;width:24px;height:24px; margin-left:5px\" name=\"heart-outline\"></ion-icon>\n\n                <ion-icon *ngIf=\"item.gender == 1 \" name=\"male-outline\" style=\"color:#fb7645;width:23px;height:23px; margin-left:5px\"></ion-icon>\n                <ion-icon *ngIf=\"item.gender == 0 \" name=\"female-outline\" style=\"color:#fb7645;width:23px;height:23px; margin-left:5px\"></ion-icon>\n\n                \n                <!-- <img *ngIf=\"item.gender == 1 \" src=\"../../assets/maleicon.png\" style=\"width:18px; height:18px\" />\n                <img *ngIf=\"item.gender == 0 \" src=\"../../assets/femaleicon.png\" style=\"width:18px; height:18px\" /> -->\n\n                <!-- <ion-icon *ngIf=\"postBookmarkObj [item.id] == true \"\n                  style=\"color:#fb7645;width:24px;height:24px; margin-left:5px\" name=\"heart\"></ion-icon>\n                <ion-icon *ngIf=\"postBookmarkObj [item.id] != true \"\n                  style=\"color:#fb7645;width:24px;height:24px; margin-left:5px\" name=\"heart-outline\"></ion-icon> -->\n              </div>\n\n              <div fxLayoutAlign=\"end end\" fxLayout=\"column\" (click)=\"showAdvertisementDetail(item.categoryId, item.id,item.isBookmarked)\"\n                style=\"position:absolute;background-image: linear-gradient(to bottom, transparent -15%, rgb(0, 0, 0,1)) ;bottom:8px;width:96%;  border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;;\">\n\n                <div fxLayout=\"row\" style=\"width:100%; color:white;padding-top:2px;\">\n                  <div fxFlex=\"100\" fxLayoutAlign=\"start start\">\n                    <div class=\"b\">\n                      <label style=\"font-size:16px;padding-left:5px; font-weight:700\">{{item.title}}</label>\n                    </div>\n                  </div>\n\n                </div>\n\n                <div fxLayout=\"row\" style=\"width:100%; color:white;padding-top:2px; padding-bottom:2px\">\n                  <div fxFlex=\"50\" fxLayoutAlign=\"start start\" *ngIf=\"item.adPriceType == 0\">\n                    <label style=\"font-size:15px;padding-left:5px;font-weight:normal\">₹ {{item.price | number}}</label>\n                  </div>\n                  <div fxFlex=\"50\" fxLayoutAlign=\"start start\" *ngIf=\"item.adPriceType == 1\">\n                    <label style=\"font-size:15px;padding-left:5px;font-weight:normal\">$ {{item.price | number}}</label>\n                  </div>\n        \n                  <div fxFlex=\"50\" fxLayoutAlign=\"end end\">\n                    <div class=\"b\" style=\"margin-top:-5px\">\n                      <label\n                        style=\"font-size:15px; color:white;font-weight:normal;padding-right:3px;\">{{item.address}}</label>\n                    </div>\n                  </div>\n\n                </div>\n\n\n\n              </div>\n\n\n            </div>\n\n          </div>\n\n\n        </div>\n        <div style=\"width:100%; margin-top:30px;\" fxLayoutAlign=\"center center\" *ngIf=\"lastPage-1 > currentPage\">\n          <button mat-button (click)=\"viewMore()\">View More</button>\n        </div>\n\n      </div>\n      <div fxLayout=\"column\">\n\n      \n      <img *ngIf=\"countAdvertisement == 0 \" style=\"width:100%; height:100%; visibility: visible;\" src=\"../../assets/bright-sale-presentation-slide-template_1262-19198.jpg\" />\n      <div *ngIf=\"countAdvertisement == 0 \" style=\"margin-top:2%\">\n        <h2 align=\"center\" style=\"color:#fb7645\">Coming Soon</h2>\n        \n        <h4 align=\"center\" style=\"color:#fb7645;\">To enjoy our Services</h4>\n        <h5 align=\"center\" style=\"color:#fb7645\">Change your Location,</h5>\n        <h5 align=\"center\" style=\"color:#fb7645\">Language Or Category.</h5>\n      </div>\n    </div>\n\n    </div>\n\n      <div class=\"cl_bottom_fix\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"margin-top:10px\">\n      \n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n        (click)=\"home()\">\n        <ion-icon name=\"home\" class=\"cl_post_css\" ></ion-icon>\n        <label fxLayoutAlign=\"center center\" class=\"cl_selected-text_font\">HOME</label>\n        </div>\n\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n        (click)=\"openChatList()\">\n        <ion-icon class=\"cl_bottom_nav_css\" name=\"document\" ></ion-icon>\n        <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">CHATS</label>\n        </div>\n\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n          (click)=\"postAdvertisement()\">\n        <ion-icon class=\"cl_bottom_nav_css\"  name=\"add-circle\" >\n        </ion-icon>\n        <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">SELL</label>\n        </div>\n      \n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n        (click)=\"openFavourite()\">\n        <ion-icon class=\"cl_bottom_nav_css\" name=\"heart\"  ></ion-icon>\n        <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">MY ADS</label>\n        </div>\n\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n          (click)=\"openProfile()\">\n          <ion-icon class=\"cl_bottom_nav_css\" name=\"person\"  ></ion-icon>\n          <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">PROFILE</label>\n        </div>\n\n      </div>\n   \n\n\n\n  </div>\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__);











var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["GooglePlaceModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n::ng-deep.mat-menu-content:not(:empty) {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  max-height: 300px;\n}\n\n::ng-deep.mat-menu-item {\n  line-height: 30px !important;\n}\n\n::ng-deep.mat-button .mat-ripple-element, .mat-icon-button .mat-ripple-element, .mat-stroked-button .mat-ripple-element {\n  opacity: 0.1;\n  background-color: transparent !important;\n}\n\n::ng-deep.mat-menu-item-highlighted:not([disabled]), .mat-menu-item.cdk-keyboard-focused:not([disabled]), .mat-menu-item.cdk-program-focused:not([disabled]), .mat-menu-item:hover:not([disabled]) {\n  background: transparent !important;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\n.column {\n  float: left;\n  border-radius: 5px;\n  width: 50%;\n  height: 150px;\n  padding-left: 4px;\n  padding-right: 4px;\n  padding-bottom: 9px;\n}\n\n.backimg {\n  background-image: url(http://fish.socialflix.in/wp-content/uploads/2020/02/orange-mercedes-benz-g63-164654.jpg);\n  height: 20%;\n  width: 20%;\n}\n\n.background-image {\n  --background: url('user.png') 0 0/100% 100% no-repeat;\n}\n\n.background {\n  --background: url('user.png') 0 0/100% 100% no-repeat;\n}\n\n.half-black {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.sub_div {\n  width: 100%;\n  margin-top: -10px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.checkBack {\n  width: 100%;\n  color: white;\n  position: absolute;\n  bottom: 0;\n  padding-top: 10px;\n}\n\n.cl_name_css {\n  width: 100%;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.cl_margin100 {\n  width: 100%;\n  height: 100%;\n}\n\n.cl_img_div {\n  width: 100%;\n  height: 200px;\n  position: relative;\n}\n\n.cl_bottom_nav_css {\n  width: 24px;\n  height: 24px;\n  width: 100%;\n  color: gray;\n  background-color: #ffffff;\n}\n\n.cl_bottom_fix {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  padding: 8px;\n  border-top: 1px solid #f1f4f9;\n  background-color: white;\n}\n\n.cl_post_css {\n  width: 100%;\n  width: 24px;\n  height: 24px;\n  color: #fb7645;\n  background-color: #ffffff;\n}\n\n.cl_text_font {\n  padding-top: 4px;\n  font-size: 14px;\n}\n\n.cl_selected-text_font {\n  padding-top: 4px;\n  font-size: 14px;\n  color: #fb7645;\n}\n\n.cl_icon {\n  width: 25px;\n  margin: 5px;\n  height: 20px;\n}\n\ndiv.show_width {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\ndiv.b {\n  white-space: nowrap;\n  margin-right: 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\nlabel.categoty-width {\n  white-space: nowrap;\n  width: 75px;\n  text-align: center;\n  margin-top: 5px;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\nlabel.check_width {\n  white-space: nowrap;\n  width: 95px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.odd {\n  color: black;\n}\n\n.even {\n  color: #fb7645;\n}\n\n.languageImg {\n  width: 27px;\n  height: 27px;\n  right: 10px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.notifImg {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  cursor: pointer;\n  color: #ffffff;\n}\n\n.selected-category-back {\n  background-color: #f1f4f9;\n}\n\n.category-back {\n  background-color: white;\n}\n\n.loadingBlockAuth-wrapper {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 10000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.loadingBlockAuth-wrapper .loadingBlock-box {\n  width: 174px;\n  height: 64px;\n  background-color: white;\n  border-radius: 2px;\n  box-shadow: 3px 3px 10px 0px black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n}\n\n.loadingBlockAuth-wrapper .loadingBlock-box .spinner-layer {\n  border-color: #303F9F;\n}\n\n.loadingBlockAuth-wrapper .loadingBlock-box .text p {\n  padding-left: 10px;\n  font-size: 14px;\n}\n\n.loadingBlockAuth-wrapper .spinner-layer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  border-color: #26a69a;\n}\n\n.loadingBlockAuth-wrapper .spinner-blue,\n.loadingBlockAuth-wrapper .spinner-blue-only {\n  border-color: #4285f4;\n}\n\n.loadingBlockAuth-wrapper .spinner-red,\n.loadingBlockAuth-wrapper .spinner-red-only {\n  border-color: #db4437;\n}\n\n.loadingBlockAuth-wrapper .spinner-yellow,\n.loadingBlockAuth-wrapper .spinner-yellow-only {\n  border-color: #f4b400;\n}\n\n.loadingBlockAuth-wrapper .spinner-green,\n.loadingBlockAuth-wrapper .spinner-green-only {\n  border-color: #0f9d58;\n}\n\n.loadingBlockAuth-wrapper .gap-patch {\n  position: absolute;\n  top: 0;\n  left: 45%;\n  width: 10%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit;\n}\n\n.loadingBlockAuth-wrapper .gap-patch .circle {\n  width: 1000%;\n  left: -450%;\n}\n\n.loadingBlockAuth-wrapper .circle-clipper {\n  display: inline-block;\n  position: relative;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit;\n}\n\n.loadingBlockAuth-wrapper .circle-clipper .circle {\n  width: 200%;\n  height: 100%;\n  border-width: 3px;\n  /* STROKEWIDTH */\n  border-style: solid;\n  border-color: inherit;\n  border-bottom-color: transparent !important;\n  border-radius: 50%;\n  -webkit-animation: none;\n  animation: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.loadingBlockAuth-wrapper .circle-clipper.left .circle {\n  left: 0;\n  border-right-color: transparent !important;\n  transform: rotate(129deg);\n}\n\n.loadingBlockAuth-wrapper .circle-clipper.right .circle {\n  left: -100%;\n  border-left-color: transparent !important;\n  transform: rotate(-129deg);\n}\n\n.loadingBlockAuth-wrapper .active .circle-clipper.left .circle {\n  /* duration: ARCTIME */\n  -webkit-animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.loadingBlockAuth-wrapper .active .circle-clipper.right .circle {\n  /* duration: ARCTIME */\n  -webkit-animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.loadingBlockAuth-wrapper .icon-css {\n  height: 20px;\n  width: 20px;\n  margin: 2px;\n  color: #fb7645;\n}\n\n.loadingBlockAuth-wrapper .arrow-icon-css {\n  height: 25px;\n  width: 25px;\n  margin: 2px;\n  color: #fb7645;\n}\n\n@-webkit-keyframes left-spin {\n  from {\n    -webkit-transform: rotate(130deg);\n  }\n  50% {\n    -webkit-transform: rotate(-5deg);\n  }\n  to {\n    -webkit-transform: rotate(130deg);\n  }\n}\n\n@keyframes left-spin {\n  from {\n    transform: rotate(130deg);\n  }\n  50% {\n    transform: rotate(-5deg);\n  }\n  to {\n    transform: rotate(130deg);\n  }\n}\n\n@-webkit-keyframes right-spin {\n  from {\n    -webkit-transform: rotate(-130deg);\n  }\n  50% {\n    -webkit-transform: rotate(5deg);\n  }\n  to {\n    -webkit-transform: rotate(-130deg);\n  }\n}\n\n@keyframes right-spin {\n  from {\n    transform: rotate(-130deg);\n  }\n  50% {\n    transform: rotate(5deg);\n  }\n  to {\n    transform: rotate(-130deg);\n  }\n}\n\n.loaderrr {\n  border: 2px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 2px solid #357DF6;\n  width: 40px;\n  height: 40px;\n  -webkit-animation: spin 1s linear infinite;\n  /* Safari */\n  animation: spin 1s linear infinite;\n}\n\n/* Safari */\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByYXRpay9tYXJrZXRwbGFjZWlvbmljL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSw0QkFBQTtBQ0FGOztBRFFBO0VBQ0UsWUFBQTtFQUNBLHdDQUFBO0FDTEY7O0FET0E7RUFDRyxrQ0FBQTtBQ0pIOztBRFFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDTEY7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQ1BGOztBRFVBO0VBQ0UscUJBQUE7QUNQRjs7QURVQTtFQUNFLHlCQUFBO0FDUEY7O0FEVUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxtQkFBQTtBQ1JGOztBRFlBO0VBQ0UsK0dBQUE7RUFDQSxXQUFBO0VBQ0MsVUFBQTtBQ1RIOztBRFdBO0VBQ0UscURBQUE7QUNSRjs7QURXQTtFQUNFLHFEQUFBO0FDUkY7O0FEVUE7RUFDRSw4QkFBQTtBQ1BGOztBRFVBO0VBQ0UsV0FBQTtFQUNDLGlCQUFBO0VBQ0MsaUJBQUE7RUFDQyxrQkFBQTtBQ1BMOztBRFlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ1RGOztBRGFBO0VBQ0UsV0FBQTtFQUNDLGtCQUFBO0VBQ0MsbUJBQUE7QUNWSjs7QURhQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDVkY7O0FEYUE7RUFDRSxXQUFBO0VBQ0MsYUFBQTtFQUNELGtCQUFBO0FDVkY7O0FEYUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUdBLFdBQUE7RUFDQSxXQUFBO0VBR0EseUJBQUE7QUNkRjs7QURpQkE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0MsNkJBQUE7RUFDQyx1QkFBQTtBQ2RKOztBRGlCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFHQSx5QkFBQTtBQ2hCRjs7QURvQkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNqQkY7O0FEb0JBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ2pCRjs7QURvQkE7RUFFRSxXQUFBO0VBQ0EsV0FBQTtFQUNDLFlBQUE7QUNsQkg7O0FEdUNBO0VBQ0UsbUJBQUE7RUFFQSxnQkFBQTtFQUNBLHVCQUFBO0FDckNGOztBRHlDQTtFQUNFLG1CQUFBO0VBRUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDdkNGOztBRDRDQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDekNGOztBRDRDQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUN6Q0Y7O0FENkNBO0VBR0UsWUFBQTtBQzVDRjs7QURpREE7RUFJRSxjQUFBO0FDakRGOztBRG9EQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUMsV0FBQTtFQUNBLGtCQUFBO0VBQ0QsZUFBQTtBQ2xERjs7QURxREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNDLGtCQUFBO0VBQ0QsZUFBQTtFQUNBLGNBQUE7QUNsREY7O0FEcURBO0VBQ0UseUJBQUE7QUNsREY7O0FEcURFO0VBQ0EsdUJBQUE7QUNsREY7O0FEdURBO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3BERjs7QURxREU7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNuRE47O0FEcURNO0VBQ0kscUJBQUE7QUNuRFY7O0FEdURVO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDckRkOztBRHlERTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUN2RE47O0FEMERJOztFQUVFLHFCQUFBO0FDeEROOztBRDJESTs7RUFFRSxxQkFBQTtBQ3pETjs7QUQ0REk7O0VBRUUscUJBQUE7QUMxRE47O0FENkRJOztFQUVFLHFCQUFBO0FDM0ROOztBRDZESTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUMzRE47O0FEOERJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUM1RE47O0FEK0RJO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQzdETjs7QURnRUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDOUROOztBRGlFSTtFQUNFLE9BQUE7RUFDQSwwQ0FBQTtFQUVBLHlCQUFBO0FDL0ROOztBRGtFSTtFQUNFLFdBQUE7RUFDQSx5Q0FBQTtFQUVBLDBCQUFBO0FDaEVOOztBRG1FSTtFQUNFLHNCQUFBO0VBQ0EsOEVBQUE7RUFDQSxzRUFBQTtBQ2pFTjs7QURvRUk7RUFDRSxzQkFBQTtFQUNBLCtFQUFBO0VBQ0EsdUVBQUE7QUNsRU47O0FEcUVJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQyxXQUFBO0VBQ0EsY0FBQTtBQ25FUDs7QURzRUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNDLFdBQUE7RUFDQSxjQUFBO0FDcEVQOztBRHdFSTtFQUNFO0lBQ0UsaUNBQUE7RUN0RU47RUR3RUk7SUFDRSxnQ0FBQTtFQ3RFTjtFRHdFSTtJQUNFLGlDQUFBO0VDdEVOO0FBQ0Y7O0FEeUVJO0VBQ0U7SUFFVSx5QkFBQTtFQ3ZFZDtFRHlFSTtJQUVVLHdCQUFBO0VDdkVkO0VEeUVJO0lBRVUseUJBQUE7RUN2RWQ7QUFDRjs7QUQwRUk7RUFDRTtJQUNFLGtDQUFBO0VDeEVOO0VEMEVJO0lBQ0UsK0JBQUE7RUN4RU47RUQwRUk7SUFDRSxrQ0FBQTtFQ3hFTjtBQUNGOztBRDJFSTtFQUNFO0lBRVUsMEJBQUE7RUN6RWQ7RUQyRUk7SUFFVSx1QkFBQTtFQ3pFZDtFRDJFSTtJQUVVLDBCQUFBO0VDekVkO0FBQ0Y7O0FEOEVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUE0QyxXQUFBO0VBQzVDLGtDQUFBO0FDMUVGOztBRDZFQSxXQUFBOztBQUNBO0VBQ0U7SUFBSywrQkFBQTtFQ3pFTDtFRDBFQTtJQUFPLGlDQUFBO0VDdkVQO0FBQ0Y7O0FEeUVBO0VBQ0U7SUFBSyx1QkFBQTtFQ3RFTDtFRHVFQTtJQUFPLHlCQUFBO0VDcEVQO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG46Om5nLWRlZXAubWF0LW1lbnUtY29udGVudDpub3QoOmVtcHR5KSB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xufVxuXG46Om5nLWRlZXAubWF0LW1lbnUtaXRlbSB7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8vIDo6bmctZGVlcC5tYXQtYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtaWNvbi1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1zdHJva2VkLWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50IHtcbi8vICAgb3BhY2l0eTogLjE7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4vLyB9XG5cbjo6bmctZGVlcC5tYXQtYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtaWNvbi1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1zdHJva2VkLWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgb3BhY2l0eTogLjE7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7IFxufVxuOjpuZy1kZWVwLm1hdC1tZW51LWl0ZW0taGlnaGxpZ2h0ZWQ6bm90KFtkaXNhYmxlZF0pLCAubWF0LW1lbnUtaXRlbS5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoW2Rpc2FibGVkXSksIC5tYXQtbWVudS1pdGVtLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KFtkaXNhYmxlZF0pLCAubWF0LW1lbnUtaXRlbTpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuLmNvbHVtbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDoxNTBweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgLy8gcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDlweDtcbiAgLy8gbWFyZ2luLXRvcDotNXB4O1xufVxuXG4uYmFja2ltZ3tcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHA6Ly9maXNoLnNvY2lhbGZsaXguaW4vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDIvb3JhbmdlLW1lcmNlZGVzLWJlbnotZzYzLTE2NDY1NC5qcGcpO1xuICBoZWlnaHQ6MjAlO1xuICAgd2lkdGg6IDIwJTtcbn1cbi5iYWNrZ3JvdW5kLWltYWdle1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvdXNlci5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuXG4uYmFja2dyb3VuZHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL3VzZXIucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn1cbi5oYWxmLWJsYWNrIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uc3ViX2RpdntcbiAgd2lkdGg6MTAwJTtcbiAgIG1hcmdpbi10b3A6LTEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OjVweDtcbiAgICAgcGFkZGluZy1yaWdodDo1cHg7XG4gICAgIFxufVxuXG5cbi5jaGVja0JhY2t7XG4gIHdpZHRoOjEwMCU7XG4gIGNvbG9yOndoaXRlO1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgYm90dG9tOjA7IFxuICBwYWRkaW5nLXRvcDoxMHB4O1xufVxuXG5cbi5jbF9uYW1lX2Nzc3tcbiAgd2lkdGg6MTAwJTtcbiAgIHBhZGRpbmctbGVmdDoxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcbn1cblxuLmNsX21hcmdpbjEwMHtcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OjEwMCU7XG59XG5cbi5jbF9pbWdfZGl2e1xuICB3aWR0aDoxMDAlO1xuICAgaGVpZ2h0OjIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jbF9ib3R0b21fbmF2X2Nzc3tcbiAgd2lkdGg6MjRweDtcbiAgaGVpZ2h0OjI0cHg7XG4gIC8vIGNvbG9yOmdyYXk7XG5cbiAgd2lkdGg6MTAwJTtcbiAgY29sb3I6Z3JheTtcbiAgLy8gcGFkZGluZy10b3A6NXB4O1xuICAvLyBwYWRkaW5nLWJvdHRvbTo1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jbF9ib3R0b21fZml4e1xuICBwb3NpdGlvbjogZml4ZWQ7IFxuICBib3R0b206MHB4O1xuICB3aWR0aDoxMDAlO1xuICBwYWRkaW5nOjhweDtcbiAgIGJvcmRlci10b3A6MXB4IHNvbGlkICNmMWY0Zjk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jbF9wb3N0X2Nzc3tcbiAgd2lkdGg6MTAwJTtcbiAgd2lkdGg6MjRweDtcbiAgaGVpZ2h0OjI0cHg7XG4gIGNvbG9yOiAjZmI3NjQ1O1xuICAvLyBwYWRkaW5nLXRvcDo1cHg7XG4gIC8vIHBhZGRpbmctYm90dG9tOjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiBcbn1cblxuLmNsX3RleHRfZm9udHtcbiAgcGFkZGluZy10b3A6NHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jbF9zZWxlY3RlZC10ZXh0X2ZvbnR7XG4gIHBhZGRpbmctdG9wOjRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2ZiNzY0NTtcbn1cblxuLmNsX2ljb257XG4gIC8vIGZvbnQtc2l6ZToyNXB4O1xuICB3aWR0aDoyNXB4O1xuICBtYXJnaW46NXB4O1xuICAgaGVpZ2h0OjIwcHg7XG59XG5cblxuLy8gLmNsX2JvdHRvbV9maXh7XG4vLyAgIHBvc2l0aW9uOiBmaXhlZDsgXG4vLyAgIGJvdHRvbTowcHg7XG4vLyAgIG1hcmdpbjoxMHB4O1xuLy8gICBoZWlnaHQ6NTBweDtcbi8vICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuLy8gICAgIGJvcmRlci10b3A6MXB4IHNvbGlkICNmMWY0Zjk7XG4vLyB9XG5cbi8vIC5jbF9wb3N0X2Nzc3tcbiAgLy8gd2lkdGg6MzBweDtcbiAgLy8gaGVpZ2h0OjMwcHg7XG4vLyAgIGNvbG9yOiNmYjc2NDU7XG4vLyB9XG5cblxuZGl2LnNob3dfd2lkdGgge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwOyBcbiAgLy8gd2lkdGg6IDk1cHg7IFxuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG59XG5cbmRpdi5iIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgXG4gIC8vIHdpZHRoOiA3NXB4OyBcbiAgbWFyZ2luLXJpZ2h0OjRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IFxuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xufVxuXG5cbmxhYmVsLmNhdGVnb3R5LXdpZHRoe1xuICB3aGl0ZS1zcGFjZTogbm93cmFwOyBcbiAgd2lkdGg6IDc1cHg7IFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6NXB4O1xuICBmb250LXNpemU6MTRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IFxufVxuXG5sYWJlbC5jaGVja193aWR0aCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxuICB3aWR0aDogOTVweDsgXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyBcbn1cblxuXG4ub2RkIHtcblxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOmJsYWNrO1xuICAvLyB3aWR0aDoxNyU7XG4gIFxufVxuXG4uZXZlbiB7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IGdyYXkgIWltcG9ydGFudDtcbiAgLy8gd2lkdGg6MTclO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyYTNmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiNmYjc2NDU7XG59XG5cbi5sYW5ndWFnZUltZ3tcbiAgd2lkdGg6MjdweDtcbiAgaGVpZ2h0OjI3cHg7XG4gIC8vIHBvc2l0aW9uOiBmaXhlZDtcbiAgIHJpZ2h0OjEwcHg7XG4gICBib3JkZXItcmFkaXVzOjUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubm90aWZJbWd7XG4gIHdpZHRoOjI4cHg7XG4gIGhlaWdodDoyOHB4O1xuICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6I2ZmZmZmZjs7XG59XG5cbi5zZWxlY3RlZC1jYXRlZ29yeS1iYWNre1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNGY5O1xuICB9XG4gIFxuICAuY2F0ZWdvcnktYmFja3tcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7O1xuICB9XG5cblxuXG4ubG9hZGluZ0Jsb2NrQXV0aC13cmFwcGVye1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgMC41KTtcbiAgei1pbmRleDogMTAwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAubG9hZGluZ0Jsb2NrLWJveHtcbiAgICAgIHdpZHRoOiAxNzRweDtcbiAgICAgIGhlaWdodDogNjRweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IDBweCBibGFjaztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgICAuc3Bpbm5lci1sYXllcntcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMzMDNGOUY7XG4gICAgICB9XG5cbiAgICAgIC50ZXh0e1xuICAgICAgICAgIHB7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuICAuc3Bpbm5lci1sYXllciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBib3JkZXItY29sb3I6ICMyNmE2OWE7XG4gICAgfVxuICAgIFxuICAgIC5zcGlubmVyLWJsdWUsXG4gICAgLnNwaW5uZXItYmx1ZS1vbmx5IHtcbiAgICAgIGJvcmRlci1jb2xvcjogIzQyODVmNDtcbiAgICB9XG4gICAgXG4gICAgLnNwaW5uZXItcmVkLFxuICAgIC5zcGlubmVyLXJlZC1vbmx5IHtcbiAgICAgIGJvcmRlci1jb2xvcjogI2RiNDQzNztcbiAgICB9XG4gICAgXG4gICAgLnNwaW5uZXIteWVsbG93LFxuICAgIC5zcGlubmVyLXllbGxvdy1vbmx5IHtcbiAgICAgIGJvcmRlci1jb2xvcjogI2Y0YjQwMDtcbiAgICB9XG4gICAgXG4gICAgLnNwaW5uZXItZ3JlZW4sXG4gICAgLnNwaW5uZXItZ3JlZW4tb25seSB7XG4gICAgICBib3JkZXItY29sb3I6ICMwZjlkNTg7XG4gICAgfVxuICAgIC5nYXAtcGF0Y2gge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogNDUlO1xuICAgICAgd2lkdGg6IDEwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuICAgIFxuICAgIC5nYXAtcGF0Y2ggLmNpcmNsZSB7XG4gICAgICB3aWR0aDogMTAwMCU7XG4gICAgICBsZWZ0OiAtNDUwJTtcbiAgICB9XG4gICAgXG4gICAgLmNpcmNsZS1jbGlwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xuICAgIH1cbiAgICBcbiAgICAuY2lyY2xlLWNsaXBwZXIgLmNpcmNsZSB7XG4gICAgICB3aWR0aDogMjAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlci13aWR0aDogM3B4O1xuICAgICAgLyogU1RST0tFV0lEVEggKi9cbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgLXdlYmtpdC1hbmltYXRpb246IG5vbmU7XG4gICAgICBhbmltYXRpb246IG5vbmU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gICAgXG4gICAgLmNpcmNsZS1jbGlwcGVyLmxlZnQgLmNpcmNsZSB7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMjlkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTI5ZGVnKTtcbiAgICB9XG4gICAgXG4gICAgLmNpcmNsZS1jbGlwcGVyLnJpZ2h0IC5jaXJjbGUge1xuICAgICAgbGVmdDogLTEwMCU7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEyOWRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTI5ZGVnKTtcbiAgICB9XG4gICAgXG4gICAgLmFjdGl2ZSAuY2lyY2xlLWNsaXBwZXIubGVmdCAuY2lyY2xlIHtcbiAgICAgIC8qIGR1cmF0aW9uOiBBUkNUSU1FICovXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogbGVmdC1zcGluIDEzMzNtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIGluZmluaXRlIGJvdGg7XG4gICAgICBhbmltYXRpb246IGxlZnQtc3BpbiAxMzMzbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSBpbmZpbml0ZSBib3RoO1xuICAgIH1cbiAgICBcbiAgICAuYWN0aXZlIC5jaXJjbGUtY2xpcHBlci5yaWdodCAuY2lyY2xlIHtcbiAgICAgIC8qIGR1cmF0aW9uOiBBUkNUSU1FICovXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogcmlnaHQtc3BpbiAxMzMzbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSBpbmZpbml0ZSBib3RoO1xuICAgICAgYW5pbWF0aW9uOiByaWdodC1zcGluIDEzMzNtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIGluZmluaXRlIGJvdGg7XG4gICAgfVxuXG4gICAgLmljb24tY3Nze1xuICAgICAgaGVpZ2h0OjIwcHg7XG4gICAgICB3aWR0aDoyMHB4O1xuICAgICAgIG1hcmdpbjoycHg7XG4gICAgICAgY29sb3I6I2ZiNzY0NTtcbiAgICB9XG4gICAgXG4gICAgLmFycm93LWljb24tY3Nze1xuICAgICAgaGVpZ2h0OjI1cHg7XG4gICAgICB3aWR0aDoyNXB4O1xuICAgICAgIG1hcmdpbjoycHg7XG4gICAgICAgY29sb3I6I2ZiNzY0NTtcbiAgICB9XG5cblxuICAgIEAtd2Via2l0LWtleWZyYW1lcyBsZWZ0LXNwaW4ge1xuICAgICAgZnJvbSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTMwZGVnKTtcbiAgICAgIH1cbiAgICAgIDUwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICAgICAgfVxuICAgICAgdG8ge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzMGRlZyk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIEBrZXlmcmFtZXMgbGVmdC1zcGluIHtcbiAgICAgIGZyb20ge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzMGRlZyk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTMwZGVnKTtcbiAgICAgIH1cbiAgICAgIDUwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzBkZWcpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzMGRlZyk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIEAtd2Via2l0LWtleWZyYW1lcyByaWdodC1zcGluIHtcbiAgICAgIGZyb20ge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzBkZWcpO1xuICAgICAgfVxuICAgICAgNTAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTMwZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgQGtleWZyYW1lcyByaWdodC1zcGluIHtcbiAgICAgIGZyb20ge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzBkZWcpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzBkZWcpO1xuICAgICAgfVxuICAgICAgNTAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTMwZGVnKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTMwZGVnKTtcbiAgICAgIH1cbiAgICB9XG5cbn1cblxuLmxvYWRlcnJyIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzM1N0RGNjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlOyAvKiBTYWZhcmkgKi9cbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLyogU2FmYXJpICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn0iLCIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG46Om5nLWRlZXAubWF0LW1lbnUtY29udGVudDpub3QoOmVtcHR5KSB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xufVxuXG46Om5nLWRlZXAubWF0LW1lbnUtaXRlbSB7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtaWNvbi1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1zdHJva2VkLWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgb3BhY2l0eTogMC4xO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LW1lbnUtaXRlbS1oaWdobGlnaHRlZDpub3QoW2Rpc2FibGVkXSksIC5tYXQtbWVudS1pdGVtLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdChbZGlzYWJsZWRdKSwgLm1hdC1tZW51LWl0ZW0uY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoW2Rpc2FibGVkXSksIC5tYXQtbWVudS1pdGVtOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbi5jb2x1bW4ge1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOXB4O1xufVxuXG4uYmFja2ltZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwOi8vZmlzaC5zb2NpYWxmbGl4LmluL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzAyL29yYW5nZS1tZXJjZWRlcy1iZW56LWc2My0xNjQ2NTQuanBnKTtcbiAgaGVpZ2h0OiAyMCU7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL3VzZXIucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn1cblxuLmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvdXNlci5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuXG4uaGFsZi1ibGFjayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnN1Yl9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5jaGVja0JhY2sge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5jbF9uYW1lX2NzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5jbF9tYXJnaW4xMDAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2xfaW1nX2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jbF9ib3R0b21fbmF2X2NzcyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogZ3JheTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNsX2JvdHRvbV9maXgge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjRmOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jbF9wb3N0X2NzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogI2ZiNzY0NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNsX3RleHRfZm9udCB7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNsX3NlbGVjdGVkLXRleHRfZm9udCB7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmYjc2NDU7XG59XG5cbi5jbF9pY29uIHtcbiAgd2lkdGg6IDI1cHg7XG4gIG1hcmdpbjogNXB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbmRpdi5zaG93X3dpZHRoIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbmRpdi5iIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5sYWJlbC5jYXRlZ290eS13aWR0aCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiA3NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxubGFiZWwuY2hlY2tfd2lkdGgge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogOTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5vZGQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5ldmVuIHtcbiAgY29sb3I6ICNmYjc2NDU7XG59XG5cbi5sYW5ndWFnZUltZyB7XG4gIHdpZHRoOiAyN3B4O1xuICBoZWlnaHQ6IDI3cHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5vdGlmSW1nIHtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc2VsZWN0ZWQtY2F0ZWdvcnktYmFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWY0Zjk7XG59XG5cbi5jYXRlZ29yeS1iYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5sb2FkaW5nQmxvY2tBdXRoLXdyYXBwZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB6LWluZGV4OiAxMDAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubG9hZGluZ0Jsb2NrQXV0aC13cmFwcGVyIC5sb2FkaW5nQmxvY2stYm94IHtcbiAgd2lkdGg6IDE3NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCAwcHggYmxhY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmxvYWRpbmdCbG9ja0F1dGgtd3JhcHBlciAubG9hZGluZ0Jsb2NrLWJveCAuc3Bpbm5lci1sYXllciB7XG4gIGJvcmRlci1jb2xvcjogIzMwM0Y5Rjtcbn1cbi5sb2FkaW5nQmxvY2tBdXRoLXdyYXBwZXIgLmxvYWRpbmdCbG9jay1ib3ggLnRleHQgcCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmxvYWRpbmdCbG9ja0F1dGgtd3JhcHBlciAuc3Bpbm5lci1sYXllciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgYm9yZGVyLWNvbG9yOiAjMjZhNjlhO1xufVxuLmxvYWRpbmdCbG9ja0F1dGgtd3JhcHBlciAuc3Bpbm5lci1ibHVlLFxuLmxvYWRpbmdCbG9ja0F1dGgtd3JhcHBlciAuc3Bpbm5lci1ibHVlLW9ubHkge1xuICBib3JkZXItY29sb3I6ICM0Mjg1ZjQ7XG59XG4ubG9hZGluZ0Jsb2NrQXV0aC13cmFwcGVyIC5zcGlubmVyLXJlZCxcbi5sb2FkaW5nQmxvY2tBdXRoLXdyYXBwZXIgLnNwaW5uZXItcmVkLW9ubHkge1xuICBib3JkZXItY29sb3I6ICNkYjQ0Mzc7XG59XG4ubG9hZGluZ0Jsb2NrQXV0aC13cmFwcGVyIC5zcGlubmVyLXllbGxvdyxcbi5sb2FkaW5nQmxvY2tBdXRoLXdyYXBwZXIgLnNwaW5uZXIteWVsbG93LW9ubHkge1xuICBib3JkZXItY29sb3I6ICNmNGI0MDA7XG59XG4ubG9hZGluZ0Jsb2NrQXV0aC13cmFwcGVyIC5zcGlubmVyLWdyZWVuLFxuLmxvYWRpbmdCbG9ja0F1dGgtd3JhcHBlciAuc3Bpbm5lci1ncmVlbi1vbmx5IHtcbiAgYm9yZGVyLWNvbG9yOiAjMGY5ZDU4O1xufVxuLmxvYWRpbmdCbG9ja0F1dGgtd3JhcHBlciAuZ2FwLXBhdGNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDQ1JTtcbiAgd2lkdGg6IDEwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XG59XG4ubG9hZGluZ0Jsb2NrQXV0aC13cmFwcGVyIC5nYXAtcGF0Y2ggLmNpcmNsZSB7XG4gIHdpZHRoOiAxMDAwJTtcbiAgbGVmdDogLTQ1MCU7XG59XG4ubG9hZGluZ0Jsb2NrQXV0aC13cmFwcGVyIC5jaXJjbGUtY2xpcHBlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcbn1cbi5sb2FkaW5nQmxvY2tBdXRoLXdyYXBwZXIgLmNpcmNsZS1jbGlwcGVyIC5jaXJjbGUge1xuICB3aWR0aDogMjAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItd2lkdGg6IDNweDtcbiAgLyogU1RST0tFV0lEVEggKi9cbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBub25lO1xuICBhbmltYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuLmxvYWRpbmdCbG9ja0F1dGgtd3JhcHBlciAuY2lyY2xlLWNsaXBwZXIubGVmdCAuY2lyY2xlIHtcbiAgbGVmdDogMDtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEyOWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEyOWRlZyk7XG59XG4ubG9hZGluZ0Jsb2NrQXV0aC13cmFwcGVyIC5jaXJjbGUtY2xpcHBlci5yaWdodCAuY2lyY2xlIHtcbiAgbGVmdDogLTEwMCU7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMjlkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTI5ZGVnKTtcbn1cbi5sb2FkaW5nQmxvY2tBdXRoLXdyYXBwZXIgLmFjdGl2ZSAuY2lyY2xlLWNsaXBwZXIubGVmdCAuY2lyY2xlIHtcbiAgLyogZHVyYXRpb246IEFSQ1RJTUUgKi9cbiAgLXdlYmtpdC1hbmltYXRpb246IGxlZnQtc3BpbiAxMzMzbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSBpbmZpbml0ZSBib3RoO1xuICBhbmltYXRpb246IGxlZnQtc3BpbiAxMzMzbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSBpbmZpbml0ZSBib3RoO1xufVxuLmxvYWRpbmdCbG9ja0F1dGgtd3JhcHBlciAuYWN0aXZlIC5jaXJjbGUtY2xpcHBlci5yaWdodCAuY2lyY2xlIHtcbiAgLyogZHVyYXRpb246IEFSQ1RJTUUgKi9cbiAgLXdlYmtpdC1hbmltYXRpb246IHJpZ2h0LXNwaW4gMTMzM21zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgaW5maW5pdGUgYm90aDtcbiAgYW5pbWF0aW9uOiByaWdodC1zcGluIDEzMzNtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIGluZmluaXRlIGJvdGg7XG59XG4ubG9hZGluZ0Jsb2NrQXV0aC13cmFwcGVyIC5pY29uLWNzcyB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbjogMnB4O1xuICBjb2xvcjogI2ZiNzY0NTtcbn1cbi5sb2FkaW5nQmxvY2tBdXRoLXdyYXBwZXIgLmFycm93LWljb24tY3NzIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgbWFyZ2luOiAycHg7XG4gIGNvbG9yOiAjZmI3NjQ1O1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGxlZnQtc3BpbiB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTMwZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICB9XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzMGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbGVmdC1zcGluIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEzMGRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTMwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzBkZWcpO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcmlnaHQtc3BpbiB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzMGRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICB9XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJpZ2h0LXNwaW4ge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbiAgfVxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTMwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTMwZGVnKTtcbiAgfVxufVxuXG4ubG9hZGVycnIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjNmM2YzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMzU3REY2O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIC8qIFNhZmFyaSAqL1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG4vKiBTYWZhcmkgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _pages_popup_popup_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/popup/popup.page */ "./src/app/pages/popup/popup.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/apiservice/api.service */ "./src/app/service/apiservice/api.service.ts");
/* harmony import */ var _service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/loaderservice/loader.service */ "./src/app/service/loaderservice/loader.service.ts");
/* harmony import */ var _service_network_network_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/network/network.service */ "./src/app/service/network/network.service.ts");
/* harmony import */ var _pages_filtercategory_filtercategory_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/filtercategory/filtercategory.page */ "./src/app/pages/filtercategory/filtercategory.page.ts");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _pages_adplansimage_adplansimage_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/adplansimage/adplansimage.page */ "./src/app/pages/adplansimage/adplansimage.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");















var HomePage = /** @class */ (function () {
    function HomePage(dialog, apiCall, toast, alertCtrl, loader, google, geolocation, networkServices, menuController, activatedRoute, platform, routerOutlet, router) {
        var _this = this;
        this.dialog = dialog;
        this.apiCall = apiCall;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.loader = loader;
        this.google = google;
        this.geolocation = geolocation;
        this.networkServices = networkServices;
        this.menuController = menuController;
        this.activatedRoute = activatedRoute;
        this.platform = platform;
        this.routerOutlet = routerOutlet;
        this.router = router;
        this.showNoBanner = 0;
        this.categoryId = "clear";
        this.categoryName = "";
        this.noInternet = "0";
        this.displayCategory = "clear";
        this.languageImage = "";
        this.cityName = "";
        this.distance = "";
        this.currentPage = 0;
        this.parentArray = [];
        this.keysObject = [];
        this.bannerArray = [];
        this.categoryArray = [];
        this.advertisementArray = [];
        this.getBookmarkObj = {};
        this.postBookmarkObj = {};
        this.advertisementModel = {};
        this.firstView = 1;
        this.currentLat = 18.5204;
        this.currentLong = 73.8567;
        this.selectedLanguage = "English";
        this.ISO = false;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControl"]();
        this.menuController.enable(false);
        this.getCategory();
        this.getLanguages();
        this.platform = platform;
        this.platform.backButton.subscribeWithPriority(-1, function () {
            if (!_this.routerOutlet.canGoBack()) {
                navigator['app'].exitApp();
            }
        });
        // this.getBannerData(this.categoryId);
        // this.advertisementArray = [];
        // this.currentPage = 0;
        // this.getAdvertisement(this.categoryId);
    }
    HomePage.prototype.ngOnInit = function () {
        // this.loader.blockingLoaderAuth.subscribe(event => {
        //   this.loadingBlock = event;
        // });
        var _this = this;
        // this.advertisementArray = [];
        // this.currentPage = 0;
        // this.getAdvertisement(this.categoryId);
        // var data={"id" : 1, "second" : "abcd"};
        this.getLocation();
        this.setFilteredItems("");
        this.searchControl.valueChanges
            .pipe()
            .subscribe(function (search) {
            _this.setFilteredItems(search);
        });
    };
    HomePage.prototype.setFilteredItems = function (searchTerm) {
        var _this = this;
        var url;
        if (searchTerm.length > 2) {
            url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "advertisements" + "?" + ("search=" + searchTerm);
        }
        else {
            url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "advertisements";
        }
        console.log("This is url", url);
        console.log("This is search item we are going to send to service", searchTerm);
        this.apiCall.getAd(url).subscribe(function (res) {
            console.log(res, " raw Data we get from server");
            _this.items = _this.prepareData(res, searchTerm);
            console.log(_this.items, "This is data we want finially");
        });
        // this.items = this.dataService.filterItems(searchTerm);
    };
    HomePage.prototype.prepareData = function (data, searchTerm) {
        var itemData = data.result.list;
        return itemData.filter(function (item) {
            return item.title.toLowerCase().includes(searchTerm.toLowerCase());
        });
    };
    HomePage.prototype.updateCatagory = function (event) {
        // let query = this.queryText;
        console.log(event.target.value);
    };
    HomePage.prototype.ionViewWillLeave = function () {
        // this.navCtrl.popToRoot();
        console.log("Looks like I’m about to leave :11");
    };
    HomePage.prototype.getLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.currentLat = resp.coords.latitude;
            _this.currentLong = resp.coords.longitude;
            console.log(" hh" + resp);
            console.log("kk" + _this.currentLong);
            // let obj = {};
            // obj['lat'] = this.latt;
            // obj['lng'] = this.lng;
            // this.storage.set("current_location", obj).then(() => {
            // })
            _this.getAdvertisement(_this.categoryId);
            _this.getBannerData(_this.categoryId);
            console.log(resp);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        document.getElementById('container1').scrollLeft += 30;
        if (this.activatedRoute.snapshot.params['categoryId'] == null) {
            this.categoryId = localStorage.getItem('categoryId');
            localStorage.removeItem('categoryId');
            this.displayCategory = "clear";
        }
        else {
            this.categoryId = this.activatedRoute.snapshot.params['categoryId'];
        }
        // this.categoryId = "clear";
        this.advertisementArray = [];
        // this.currentPage = 0;
        // this.getAdvertisement(this.categoryId);
        var city = localStorage.getItem("cityname");
        var distance = localStorage.getItem('distance');
        if (city == "" || city == "undefined" || city == null) {
            this.cityName = "";
            this.distance = "";
            console.log("city name display undefined:" + city);
        }
        else {
            this.cityName = city;
            this.distance = distance;
            console.log("city name display:" + city);
        }
        // var jsonString = localStorage.getItem("BOOKMARK");
        // this.postBookmarkObj = JSON.parse(jsonString);
        // if (this.postBookmarkObj == null || this.postBookmarkObj == "" || this.postBookmarkObj == undefined) {
        //   this.postBookmarkObj = {};
        // } else {
        // }
        // console.log("show retrieved object:" + this.postBookmarkObj);
        if (this.categoryId == undefined) {
            this.categoryId = "clear";
            console.log("check ::0");
            this.advertisementArray = [];
            this.currentPage = 0;
            this.getAdvertisement(this.categoryId);
            this.getBannerData(this.categoryId);
        }
        else {
            // if (this.categoryId == 1) {
            //   this.categoryName = "Dance";
            //   console.log("check ::1");
            // } else if (this.categoryId == 2) {
            //   this.categoryName = "Yoga";
            //   console.log("check ::2");
            // } else if (this.categoryId == 3) {
            //   this.categoryName = "Meditation";
            //   console.log("check ::3");
            // } else if (this.categoryId == 4) {
            //   this.categoryName = "Massage";
            //   console.log("check ::4");
            // } else if (this.categoryId == 5) {
            //   this.categoryName = "Music";
            //   console.log("check ::5");
            // } else {
            //   this.categoryName = "Music";
            //   console.log("check ::6");
            // }
            this.checkType(this.categoryName, this.categoryId);
        }
        console.log("get categoryId::" + this.categoryId);
        // this.getBannerData(this.categoryId);
    };
    HomePage.prototype.getCategory = function () {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "category/" + 0 + "/sub-category";
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.parentArray = MyResponse['result']['list'];
            for (var i = 0; i < _this.parentArray.length; i++) {
                // this.displayCategory = this.parentArray[0]['id'];
                if (_this.parentArray[i]['name'] == "Parent Category") {
                }
                else {
                    _this.categoryArray.push(_this.parentArray[i]);
                }
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
    HomePage.prototype.onSlideChanged = function (slides) {
        var _this = this;
        slides.getActiveIndex().then(function (index) {
            var item = _this.bannerArray[index];
            _this.callViewBannerCount(item.id, item.categoryId);
        });
    };
    HomePage.prototype.getAdvertisement = function (categoryId) {
        var _this = this;
        console.log("check fb ads::");
        if (this.currentPage == 0) {
            this.advertisementArray = [];
        }
        this.loader.showBlockingLoaderAuth();
        var url;
        if (this.cityName.length > 0) {
            var parseDistance = parseInt(this.distance);
            if (parseDistance > 0) {
                if (categoryId == "clear") {
                    url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "advertisements?page=" + this.currentPage + "&size=10&latitude=" + this.currentLat + "&longitude=" + this.currentLong + "&language=" + this.selectedLanguage + "&city=" + this.cityName.trim() + "&distance=" + this.distance;
                }
                else {
                    url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "categories/" + categoryId + "/advertisements?page=" + this.currentPage + "&size=10&latitude=" + this.currentLat + "&longitude=" + this.currentLong + "&language=" + this.selectedLanguage + "&city=" + this.cityName.trim() + "&distance=" + this.distance;
                }
            }
            else {
                if (categoryId == "clear") {
                    url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "advertisements?page=" + this.currentPage + "&size=10&latitude=" + this.currentLat + "&longitude=" + this.currentLong + "&language=" + this.selectedLanguage + "&city=" + this.cityName.trim();
                }
                else {
                    url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "categories/" + categoryId + "/advertisements?page=" + this.currentPage + "&size=10&latitude=" + this.currentLat + "&longitude=" + this.currentLong + "&language=" + this.selectedLanguage + "&city=" + this.cityName.trim();
                }
            }
        }
        else {
            if (categoryId == "clear") {
                url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "advertisements?page=" + this.currentPage + "&size=10&latitude=" + this.currentLat + "&longitude=" + this.currentLong + "&language=" + this.selectedLanguage;
            }
            else {
                url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "categories/" + categoryId + "/advertisements?page=" + this.currentPage + "&size=10&latitude=" + this.currentLat + "&longitude=" + this.currentLong + "&language=" + this.selectedLanguage;
            }
        }
        console.log("url", "" + url);
        this.apiCall.getAd(url).subscribe(function (MyResponse) {
            _this.advertisementArray = _this.advertisementArray.concat(MyResponse['result']['list']);
            console.log("This is advertizement", _this.advertisementArray);
            _this.countAdvertisement = MyResponse['result']['count'];
            _this.lastPage = Math.ceil(_this.countAdvertisement / 10);
            console.log("show total count:" + _this.lastPage);
            _this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    HomePage.prototype.getAdvertisementWithSubcategory = function (categoryId, subCategoryId) {
        var _this = this;
        console.log("check fb ads::");
        if (this.currentPage == 0) {
            this.advertisementArray = [];
        }
        // /api/v1.0.0/categories/{categoryId}/subcategories/{subcategoryId}/advertisements
        this.loader.showBlockingLoaderAuth();
        var url;
        if (categoryId == "clear") {
            url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "advertisements?page=" + this.currentPage + "&size=10";
        }
        else {
            url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "categories/" + categoryId + "/subcategories/" + subCategoryId + "/advertisements?page=" + this.currentPage + "&size=10";
        }
        this.apiCall.getAd(url).subscribe(function (MyResponse) {
            _this.advertisementArray = _this.advertisementArray.concat(MyResponse['result']['list']);
            _this.countAdvertisement = MyResponse['result']['count'];
            _this.lastPage = Math.ceil(_this.countAdvertisement / 10);
            console.log("show total count:" + _this.lastPage);
            _this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    HomePage.prototype.viewMore = function () {
        this.currentPage += 1;
        this.getAdvertisement(this.categoryId);
        // let url = environment.base_url + environment.version + "categories/" + categoryId + "/advertisements?page=" + this.currentPage + "&size=1";
    };
    HomePage.prototype.getBannerData = function (categoryId) {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        var url;
        if (this.cityName.length > 0) {
            var parseDistance = parseInt(this.distance);
            if (parseDistance > 0) {
                if (categoryId == "clear") {
                    url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "banners?" + "size=1000&latitude=" + this.currentLat + "&longitude=" + this.currentLong + "&language=" + this.selectedLanguage + "&city=" + this.cityName.trim() + "&distance=" + this.distance;
                }
                else {
                    url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "category/" + categoryId + "/banners?" + "size=1000&latitude=" + this.currentLat + "&longitude=" + this.currentLong + "&language=" + this.selectedLanguage + "&city=" + this.cityName.trim() + "&distance=" + this.distance;
                }
            }
            else {
                if (categoryId == "clear") {
                    url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "banners?" + "size=1000&latitude=" + this.currentLat + "&longitude=" + this.currentLong + "&language=" + this.selectedLanguage + "&city=" + this.cityName.trim();
                }
                else {
                    url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "category/" + categoryId + "/banners?" + "size=1000&latitude=" + this.currentLat + "&longitude=" + this.currentLong + "&language=" + this.selectedLanguage + "&city=" + this.cityName.trim();
                }
            }
        }
        else {
            if (categoryId == "clear") {
                url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "banners?" + "size=1000&latitude=" + this.currentLat + "&longitude=" + this.currentLong + "&language=" + this.selectedLanguage;
            }
            else {
                url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "category/" + categoryId + "/banners?" + "size=1000&latitude=" + this.currentLat + "&longitude=" + this.currentLong + "&language=" + this.selectedLanguage;
            }
        }
        //  url = environment.base_url + environment.version + "category/" + categoryId + "/banners?" + "size=" + 1000;
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.bannerArray = MyResponse['result']['list'];
            _this.bannerCount = MyResponse['result']['count'];
            if (_this.bannerCount == 0) {
                _this.showNoBanner = 0;
            }
            else {
                _this.showNoBanner = 0;
            }
            _this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    HomePage.prototype.slidesDidLoad = function (slides) {
        slides.startAutoplay();
    };
    HomePage.prototype.getLanguages = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "languages?" + "size=" + 1000;
        ;
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.Languages = MyResponse['result']['list'];
            _this.languageImage = _this.Languages[0]['image'];
            _this.selectedLanguage = _this.Languages[0]['name'];
            console.log("checkinglanguage", "" + _this.selectedLanguage);
            _this.loader.hideBlockingLoaderAuth();
            _this.noInternet = '0';
        }, function (error) {
            _this.noInternet = '1';
            _this.loader.hideBlockingLoaderAuth();
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    HomePage.prototype.scrollHorizontal = function () {
        // let  p = this.categoryArray.length -4;
        // let n = p * 60;
        document.getElementById('container1').scrollLeft += 30;
    };
    HomePage.prototype.filter = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_pages_filtercategory_filtercategory_page__WEBPACK_IMPORTED_MODULE_10__["FiltercategoryPage"], {
            width: '200px',
            panelClass: "show-filter-category-dialogue"
        });
        dialogRef.afterClosed().subscribe(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log("show filter category:" + result);
                console.log("show filtered data:" + JSON.stringify(result));
                if (result.categoryId == "clear") {
                    this.currentPage = 0;
                }
                this.categoryId = result.categoryId;
                this.getBannerData(result.categoryId);
                this.getAdvertisement(result.categoryId);
                // this.getAdvertisement(result.subCategoryId);
                this.getAdvertisementWithSubcategory(result.categoryId, result.subCategoryId);
                this.displayCategory = result.categoryId;
                localStorage.setItem("categoryId", result.subCategoryId);
                localStorage.setItem("filterOpen", "0");
                return [2 /*return*/];
            });
        }); });
        // this.router.navigate(['/showfilterdata']);
    };
    HomePage.prototype.checkType = function (title, id) {
        console.log("check title id ::" + title + "   " + "id" + id);
        this.categoryId = id;
        this.displayCategory = id;
        this.getBannerData(id);
        this.advertisementArray = [];
        this.currentPage = 0;
        this.getAdvertisement(id);
        // if (title == "Dance") {
        //   this.getBannerData(id);
        //   this.advertisementArray = [];
        //   this.currentPage = 0;
        //   this.getAdvertisement(id);
        // } else if (title == "Yoga") {
        //   this.getBannerData(id);
        //   this.advertisementArray = [];
        //   this.currentPage = 0;
        //   this.getAdvertisement(id);
        // } else if (title == "Meditation") {
        //   this.getBannerData(id);
        //   this.advertisementArray = [];
        //   this.currentPage = 0;
        //   this.getAdvertisement(id);
        // }
        // else if (title == "Massage") {
        //   this.getBannerData(id);
        //   this.advertisementArray = [];
        //   this.currentPage = 0;
        //   this.getAdvertisement(id);
        // }
        // else if (title == "Music") {
        //   this.getBannerData(id);
        //   this.advertisementArray = [];
        //   this.currentPage = 0;
        //   this.getAdvertisement(id);
        // }
    };
    HomePage.prototype.presentPrompt = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            inputs: [
                                {
                                    name: 'location',
                                    placeholder: 'Location'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function (data) {
                                        console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Login',
                                    handler: function (data) {
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.showPopup = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_pages_popup_popup_page__WEBPACK_IMPORTED_MODULE_4__["PopupPage"], {
            width: '800px',
            panelClass: "add-city-dialog-container"
        });
        dialogRef.afterClosed().subscribe(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log("show city name:" + JSON.stringify(result));
                // this.cityName = result.city_name;
                if (result == "" || result == "undefined" || result == null) {
                    // this.cityName = "";
                    //  this.distance="";
                }
                else {
                    this.cityName = result.city_name;
                    this.currentLat = result.latitude;
                    this.currentLong = result.longitude;
                    this.distance = result.distance;
                }
                this.getAdvertisement(this.categoryId);
                this.getBannerData(this.categoryId);
                localStorage.setItem("cityname", this.cityName);
                localStorage.setItem("distance", this.distance);
                return [2 /*return*/];
            });
        }); });
    };
    HomePage.prototype.openChatList = function () {
        this.router.navigate(['/chatlist']);
    };
    HomePage.prototype.postAdvertisement = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_pages_adplansimage_adplansimage_page__WEBPACK_IMPORTED_MODULE_13__["AdplansimagePage"], {
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
    HomePage.prototype.home = function () {
        this.router.navigate(['/home']);
    };
    HomePage.prototype.openFavourite = function () {
        this.router.navigate(['/favourite']);
    };
    HomePage.prototype.openProfile = function () {
        // this.router.navigate(['/razorpay']);
        this.router.navigate(['/profile']);
    };
    HomePage.prototype.showAdvertisementDetail = function (categoryId, id, isBookmarked, bannerId) {
        console.log("check bookmarked:" + isBookmarked);
        var sendId = {
            "id": id,
            "categoryId": categoryId,
            "status": "category",
            "adType": 1,
            "isBookmarked": isBookmarked
        };
        // this.callViewBannerCount(bannerId,categoryId);
        console.log("send image::" + id);
        this.currentPage = 0;
        this.advertisementArray = [];
        this.router.navigate(['/advertisementdetail', { sendId: JSON.stringify(sendId) }]);
    };
    HomePage.prototype.callViewBannerCount = function (bannerId, categoryId) {
        // console.log("dddddd",""+bannerId);
        var _this = this;
        var send_data = {
            "userId": localStorage.getItem("userId"),
            "bannerId": bannerId,
            "categoryId": categoryId,
        };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "banners/view_count";
        // console.log("my url",""+url);
        this.apiCall.post(url, send_data).subscribe(function (MyResponse) {
            // this.getAdvertisement(this.categoryId);
            _this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            _this.presentToast("Please try again");
            _this.loader.hideBlockingLoaderAuth();
        });
    };
    HomePage.prototype.bookmarkAdvertisement = function (advertisementid, isBookmarked, item) {
        var _this = this;
        console.log("show isBookmarked:" + isBookmarked);
        console.log("show advertisementid:" + advertisementid);
        console.log("show advertisement object:" + JSON.stringify(item));
        var getObj = item;
        if (isBookmarked == 1) {
            for (var i = 0; i < this.advertisementArray.length; i++) {
                if (advertisementid == this.advertisementArray[i]['id']) {
                    console.log("show advertisementid inside if:" + this.advertisementArray[i]['id']);
                    this.advertisementArray[i]['isBookmarked'] = 0;
                }
            }
            this.removeBookmark(advertisementid);
        }
        else {
            for (var i = 0; i < this.advertisementArray.length; i++) {
                if (advertisementid == this.advertisementArray[i]['id']) {
                    this.advertisementArray[i]['isBookmarked'] = 1;
                }
            }
            var send_date = {};
            this.advertisementModel['userId'] = localStorage.getItem("userId");
            send_date['userId'] = this.advertisementModel['userId'];
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "categories/" + this.categoryId + "/advertisements/" + advertisementid + "/bookmark";
            this.apiCall.postAuth(url, send_date).subscribe(function (MyResponse) {
                // this.getAdvertisement(this.categoryId);
                _this.loader.hideBlockingLoaderAuth();
            }, function (error) {
                _this.presentToast("Please try again");
                _this.loader.hideBlockingLoaderAuth();
            });
        }
    };
    // bookmarkAdvertisement(advertisementid) {
    //   this.checkStatus = this.postBookmarkObj.hasOwnProperty(advertisementid);
    //   console.log("check for status:" + this.checkStatus);
    //   if (this.checkStatus) {
    //     console.log("before delete:" + (this.postBookmarkObj));
    //     delete this.postBookmarkObj[advertisementid];
    //     localStorage.setItem("BOOKMARK", JSON.stringify(this.postBookmarkObj));
    //     this.removeBookmark(advertisementid);
    //     console.log("after delete:" + (this.postBookmarkObj));
    //   } else {
    //     this.postBookmarkObj[advertisementid] = true;
    //     localStorage.setItem("BOOKMARK", JSON.stringify(this.postBookmarkObj));
    //     console.log("display object:" + (this.postBookmarkObj));
    //     this.loader.showBlockingLoaderAuth();
    //     let send_date = {};
    //     this.advertisementModel['userId'] = localStorage.getItem("userId");
    //     send_date['userId'] = this.advertisementModel['userId'];
    //     let url = environment.base_url + environment.version + "categories/" + this.categoryId + "/advertisements/" + advertisementid + "/bookmark";
    //     this.apiCall.postAuth(url, send_date).subscribe(MyResponse => {
    //       this.getAdvertisement(this.categoryId);
    //       this.loader.hideBlockingLoaderAuth();
    //     }, error => {
    //       this.presentToast("Please try again");
    //       this.loader.hideBlockingLoaderAuth();
    //     })
    //   }
    // }
    HomePage.prototype.removeBookmark = function (advertisementId) {
        var _this = this;
        this.userId = localStorage.getItem("userId");
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "users/" + this.userId + "/bookmarks?" + "size=" + 1000;
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
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "users/" + _this.userId + "/bookmarks/" + _this.bookmarkId;
            _this.apiCall.deleteAuth(url).subscribe(function (MyResponse) {
                // this.getAdvertisement(this.categoryId);
                _this.loader.hideBlockingLoaderAuth();
            }, function (error) {
                _this.presentToast("Please try again");
                _this.loader.hideBlockingLoaderAuth();
            });
        }, function (error) {
        });
    };
    HomePage.prototype.presentToast = function (message) {
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
    HomePage.prototype.notifications = function () {
        var senData = {};
        senData['userId'] = this.userId;
        senData['status'] = "all";
        this.router.navigate(['/notificationlistall', { senPaymentLogData: JSON.stringify(senData) }]);
    };
    HomePage.prototype.getLanguage = function (data) {
        this.languageImage = data.image;
        this.selectedLanguage = data.name;
        this.getAdvertisement(this.categoryId);
        this.getBannerData(this.categoryId);
        console.log("language image show:" + data.image);
    };
    HomePage.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"] },
        { type: _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_11__["GoogleMaps"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__["Geolocation"] },
        { type: _service_network_network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"],
            _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_11__["GoogleMaps"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__["Geolocation"],
            _service_network_network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], HomePage);
    return HomePage;
}());



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



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map