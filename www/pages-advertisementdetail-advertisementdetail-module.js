(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-advertisementdetail-advertisementdetail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisementdetail/advertisementdetail.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisementdetail/advertisementdetail.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <div fxLayoutAlign=\"start center\">\n  <ion-slides [options]=\"slideOptions\" pager=\"true\" #slider (ionSlidesDidLoad)=\"slidesDidLoad(slider)\" \n    class=\"half-black\">\n    <ion-slide *ngFor=\"let item of advertisementImages\" >\n      <div style=\"width:100%;height:250px;position: relative;margin-bottom:5px\" >\n        <img src=\"{{item}}\" style=\"width:100%; height:100%\"/>\n      </div>\n\n    </ion-slide>\n  </ion-slides>\n  \n\n    <div fxLayout=\"row\" class=\"cl_header\">\n      <ion-row style=\"width:100%\">\n        <ion-col size=\"2\">\n          <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button>\n        </ion-col>\n\n        <ion-col size=\"8\" align=\"center\">\n        </ion-col>\n        <!-- <ion-col size=\"2\" fxLayoutAlign=\"end center\" (click)=\"editAdvertisement()\" *ngIf=\"advertisementType == 0 \">\n          <mat-icon style=\"color:white;font-size:20px;margin-top:-5px;cursor:pointer \">edit</mat-icon>\n        </ion-col>\n        <ion-col size=\"2\" fxLayoutAlign=\"center center\" *ngIf=\"advertisementType != 0 \">\n        </ion-col> -->\n        <ion-col size=\"2\" fxLayoutAlign=\"center center\" (click)=\"sharePicker(advertisementImages[0])\">\n          <img src=\"../../../assets/sharewhitee.png\" class=\"cl_share_icon\" />\n\n        </ion-col>\n     \n      </ion-row>\n    </div>\n    <ion-row class=\"cl_middle_arrow\" style=\"width:100%\">\n      <ion-col size=\"2\" fxLayoutAlign=\"center center\">\n      <mat-icon  class=\"cl_middle_arrow_left\" (click)=\"prevSlide(slider)\">keyboard_arrow_left</mat-icon>\n        </ion-col>\n\n        <ion-col size=\"8\">\n        </ion-col>\n\n        <ion-col size=\"2\" fxLayoutAlign=\"center center\">\n      <mat-icon  class=\"cl_middle_arrow_right\"  (click)=\"nextSlide(slider)\">keyboard_arrow_right</mat-icon>\n        </ion-col>\n    </ion-row>\n\n    <!-- <div fxLayout=\"row\"  class=\"cl_middle_arrow\" style=\"width:100%\">\n     \n     \n     \n    </div> -->\n  </div>\n\n\n\n  <div fxLayout=\"row\" style=\"margin-top:10px;\" class=\"cl_margin\">\n    <div fxLayoutAlign=\"start start\" style=\"width:85%; color:black\">\n      <div fxLayout=\"column\" style=\"color:black; margin-left:4px\" *ngIf=\"priceType == 0\">\n        <label style=\"font-size:18px;\">{{title}}</label>\n        <label style=\"margin-top:5px;font-size: 16;\">₹ {{price | number}}</label>\n      </div>\n      <div fxLayout=\"column\" style=\"color:black; margin-left:4px\" *ngIf=\"priceType == 1\">\n        <label style=\"font-size:18px;\">{{title}}</label>\n        <label style=\"margin-top:5px;font-size: 16;\">$ {{price | number}}</label>\n      </div>\n\n    </div>\n\n    <div fxLayoutGap=\"15px\" fxLayoutAlign=\"end center\" style=\"width:6%;\">\n      <div fxLayout=\"column\" fxLayoutAlign=\"end start\" (click)=\"editAdvertisement()\" *ngIf=\"advertisementType == 0 \">\n        <mat-icon style=\"color:rgb(87, 85, 85);font-size:20px;margin-top:-2px;cursor:pointer \">edit</mat-icon>\n        <label style=\"color:rgb(87, 85, 85);font-size:10px;margin-top:-2px;cursor:pointer \">Edit</label>\n      </div>\n      <!-- <div fxLayoutAlign=\"end start\" (click)=\"sharePicker(advertisementImages[0])\">\n        <ion-icon name=\"share-social-outline\" class=\"cl_share_icon\"></ion-icon>\n      </div> -->\n      <div fxLayout=\"column\" fxLayoutAlign=\"end center\" (click)=\"AskdeleteAdvertisement()\" *ngIf=\"advertisementType == 0 \">\n        <mat-icon style=\"color:rgb(87, 85, 85);font-size:20px;margin-top:-2px;cursor:pointer \">delete</mat-icon>\n        <label style=\"color:rgb(87, 85, 85);font-size:10px;margin-top:-2px;cursor:pointer \">Delete</label>\n      </div>\n    </div>\n    <div fxLayoutAlign=\"end start\" style=\"width:9%;\" fxLayout=\"column\">\n\n      <div (click)=\"bookmarkAdvertisement(advertisementId,isBookmarked)\">\n    \n      <ion-icon *ngIf=\"isBookmarked == 1 \" style=\"color:#fb7645; margin-left:5px;width:23px; height:23px;\" name=\"heart\"></ion-icon>\n      <ion-icon *ngIf=\"isBookmarked == 0 \" style=\"color:#fb7645; margin-left:5px;width:23px; height:23px;\" name=\"heart-outline\"></ion-icon>\n      </div>\n      <ion-icon *ngIf=\"gender == 1 \" name=\"male-outline\" style=\"color:#fb7645;width:22px;height:22px; margin-left:5px\"></ion-icon>\n      <ion-icon *ngIf=\"gender == 0 \" name=\"female-outline\" style=\"color:#fb7645;width:22px;height:22px; margin-left:5px\"></ion-icon>\n\n      <!-- <ion-icon fxLayoutAlign=\"end start\" name=\"heart-outline\" style=\"width:23px; height:23px;\"></ion-icon> -->\n    </div>\n  </div>\n\n  <div fxLayout=\"row\" style=\"margin-top:10px;\" class=\"cl_margin\">\n    <div fxLayoutAlign=\"start start\" style=\"width:75%; color:black\">\n      <mat-icon style=\"color:black;font-size:17px\">place</mat-icon>\n      <label style=\"margin-left:-3px\" class=\"cl_gray_label cl_font_14\">{{address}} </label>\n    </div>\n\n    <div fxLayoutAlign=\"end start\" style=\"width:25%;\">\n      <label class=\"cl_gray_label cl_font_13\">{{date | date}}</label>\n    </div>\n  </div>\n  <!-- <ion-item-divider style=\"width:100%;margin-top:-15px\">\n\n  </ion-item-divider>\n\n  <div class=\"cl_margin\" style=\"margin-top:5px\">\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <label class=\"cl_gray_title cl_font_13\"><b>Details</b></label>\n\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top:-5px\">\n      <ion-col size=\"6\">\n        <label class=\"cl_gray_label cl_font_14\">YEAR</label>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <label class=\"cl_gray_label cl_font_13\">2009</label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top:-5px\">\n      <ion-col size=\"6\">\n        <label class=\"cl_gray_label cl_font_13\">KM DRIVEN</label>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <label class=\"cl_gray_label cl_font_13\">200,000 KM</label>\n      </ion-col>\n    </ion-row>\n  </div> -->\n  <ion-item-divider style=\"width:100%;margin-top:-20px; color:black\"></ion-item-divider>\n\n  <div style=\"width:96%;margin-left:2%; margin-top:5px\">\n    <label style=\"font-size:18px; color : rgb(78, 77, 77); margin-left:5px\"><b>Description</b></label>\n  </div>\n  <ion-item-divider style=\"margin-left:-2px; padding-bottom :8px; margin-top:4px\">\n    <label class=\"cl_gray_label cl_font_14\">{{description}}</label>\n  </ion-item-divider>\n\n  <ion-item-divider style=\"padding-bottom:10px\" (click)=\"viewProfile()\">\n    <div style=\"margin-top:10px\" class=\"cl_margin\" fxLayout=\"row\">\n      <div style=\"width:20%; margin-left:-7px\">\n        <img *ngIf=\"userImg == '' \" src=\"../../../assets/defaultprofilepic.png\" fxLayoutAlign=\"start start\" class=\"cl_default_pic\" />\n        <img *ngIf=\"userImg != '' \" src=\"{{userImg}}\" fxLayoutAlign=\"start start\" class=\"cl_default_pic\" style=\"border-radius:100%\"/>\n   \n      </div>\n\n      <div style=\"width:75%\">\n        <label class=\"cl_gray_title cl_font_13\"><b>{{userName}}</b></label><br />\n        <label class=\"cl_gray_label cl_font_14\">Member since {{userCreated | date}}</label><br />\n        <label class=\"cl_font_13\" style=\"color : #fe4f14\">SEE PROFILE</label>\n      </div>\n\n      <div fxLayoutAlign=\"center center\">\n\n        <mat-icon class=\"cl_arrow_right\">keyboard_arrow_right</mat-icon>\n      </div>\n\n    </div>\n\n  </ion-item-divider>\n\n\n  <ion-item-divider fxLayout=\"row\" style=\"margin-left:-10px; padding-bottom :8px; margin-top:4px\" (click)=\"viewPaymentLogs()\" *ngIf=\"advertisementType == 0 \">\n   \n    <div style=\"margin-top:10px\" class=\"cl_margin\" fxLayout=\"row\" fxFlex=\"100\">\n      <div fxFlex=\"95\">\n        <label  style=\"font-size:15px;color:black; font-weight:500\">Payment history</label>\n      </div>\n    <div fxLayoutAlign=\"center center\" fxFlex=\"5\">\n\n      <mat-icon class=\"cl_arrow_right\">keyboard_arrow_right</mat-icon>\n    </div>\n    </div>\n  </ion-item-divider>\n  <div class=\"cl_margin\" style=\"margin-top:5px\">\n    <label class=\"cl_adpost\"><b>Add posted at</b></label>\n  </div>\n  <div id=\"map_canvas\" style=\" margin-bottom:20%;margin-top:10px;\"></div>\n\n\n\n\n\n  <div class=\"cl_call_message_maindiv\" fxLayout=\"row\">\n    <div class=\"cl_message_div\" fxLayout=\"row\" (click)=\"sendMessage()\" style=\"cursor: pointer\">\n      <div fxFlex=\"50\" fxLayoutAlign=\"center center\">\n        <!-- <ion-icon name=\"call\" ></ion-icon> -->\n        <mat-icon class=\"cl_chat_icon\">chat</mat-icon>\n      </div>\n      <div fxFlex=\"50\" fxLayoutAlign=\"start center\">\n        <label class=\"cl_font_14\">CHAT</label>\n      </div>\n    </div>\n    <div class=\"cl_call_div\" fxLayout=\"row\" (click)=\"makeCall()\" style=\"cursor: pointer\">\n      <div fxFlex=\"50\" fxLayoutAlign=\"center center\">\n        <mat-icon class=\"cl_chat_icon\">call</mat-icon>\n      </div>\n      <div fxFlex=\"50\" fxLayoutAlign=\"start center\">\n        <label class=\"cl_font_14\">CALL</label>\n      </div>\n    </div>\n\n    <!-- <div style=\"width:50%;\" fxLayout=\"row\" (click)=\"makeCall()\" style=\"cursor: pointer\">\n      <div fxFlex=\"50\" align=\"center\">\n        <ion-icon name=\"call\"  class=\"cl_call_icon\"></ion-icon>\n      </div>\n      <div fxFlex=\"50\" align=\"center\">\n        <label class=\"cl_font_14\" >CALL</label>\n      </div>\n    </div> -->\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/advertisementdetail/advertisementdetail-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/advertisementdetail/advertisementdetail-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AdvertisementdetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementdetailPageRoutingModule", function() { return AdvertisementdetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _advertisementdetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advertisementdetail.page */ "./src/app/pages/advertisementdetail/advertisementdetail.page.ts");




var routes = [
    {
        path: '',
        component: _advertisementdetail_page__WEBPACK_IMPORTED_MODULE_3__["AdvertisementdetailPage"]
    }
];
var AdvertisementdetailPageRoutingModule = /** @class */ (function () {
    function AdvertisementdetailPageRoutingModule() {
    }
    AdvertisementdetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AdvertisementdetailPageRoutingModule);
    return AdvertisementdetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/advertisementdetail/advertisementdetail.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/advertisementdetail/advertisementdetail.module.ts ***!
  \*************************************************************************/
/*! exports provided: AdvertisementdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementdetailPageModule", function() { return AdvertisementdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _advertisementdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./advertisementdetail-routing.module */ "./src/app/pages/advertisementdetail/advertisementdetail-routing.module.ts");
/* harmony import */ var _advertisementdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./advertisementdetail.page */ "./src/app/pages/advertisementdetail/advertisementdetail.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");















var AdvertisementdetailPageModule = /** @class */ (function () {
    function AdvertisementdetailPageModule() {
    }
    AdvertisementdetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__["GooglePlaceModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _advertisementdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdvertisementdetailPageRoutingModule"]
            ],
            providers: [_ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_11__["NativeGeocoder"], _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_10__["GoogleMaps"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__["Geolocation"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_13__["CallNumber"], _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_14__["Base64"]],
            declarations: [_advertisementdetail_page__WEBPACK_IMPORTED_MODULE_6__["AdvertisementdetailPage"]]
        })
    ], AdvertisementdetailPageModule);
    return AdvertisementdetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/advertisementdetail/advertisementdetail.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/advertisementdetail/advertisementdetail.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 27px;\n  height: 27px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n}\n\n#map_canvas {\n  margin-top: 10px;\n  width: 100%;\n  margin: auto;\n  height: 25vh;\n}\n\n.cl_call_icon {\n  width: 18px;\n  height: 18px;\n}\n\n.cl_font_14 {\n  font-size: 14px;\n}\n\n.cl_font_13 {\n  font-size: 13px;\n}\n\n.cl_chat_icon {\n  font-size: 16px;\n  margin-top: 7px;\n}\n\n.cl_message_div {\n  width: 50%;\n  border-right: 2px solid white;\n}\n\n.cl_call_div {\n  width: 50%;\n}\n\n.cl_call_message_maindiv {\n  width: 100%;\n  position: fixed;\n  bottom: 0px;\n  height: 45px;\n  background-color: #fe4f14;\n  color: white;\n}\n\n.cl_canvas {\n  margin-bottom: 20%;\n  margin-top: 10px;\n}\n\n.cl_adpost {\n  font-size: 14px;\n  color: #4e4d4d;\n  margin-left: 5px;\n}\n\n.cl_gray_title {\n  color: #4e4d4d;\n}\n\n.cl_gray_label {\n  color: #5c5a5a;\n}\n\n.cl_margin {\n  width: 96%;\n  margin-left: 2%;\n  margin-right: 2%;\n}\n\n.cl_arrow_right {\n  color: black;\n  width: 30px;\n  height: 30px;\n}\n\n.cl_middle_arrow_left {\n  background: rgba(0, 0, 0, 0.3);\n  color: white;\n  width: 30px;\n  height: 30px;\n  margin: 6px;\n}\n\n.cl_middle_arrow_right {\n  color: white;\n  width: 30px;\n  height: 30px;\n  background: rgba(0, 0, 0, 0.3);\n  margin: 7px;\n}\n\n.cl_default_pic {\n  width: 50px;\n  height: 50px;\n  color: #fe4f14;\n}\n\n.cl_img_div {\n  position: relative;\n  height: 250px;\n  width: 100%;\n  margin: auto;\n}\n\n.cl_header {\n  position: absolute;\n  top: 0px;\n  height: 55px;\n  width: 100%;\n  z-index: 1;\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.cl_middle_arrow {\n  position: absolute;\n  top: 120px;\n  height: 55px;\n  width: 100%;\n  z-index: 1;\n}\n\n.cl_share_icon {\n  width: 30px;\n  height: 32px;\n  margin-top: -5px;\n  color: #4b4949;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByYXRpay9tYXJrZXRwbGFjZWlvbmljL3NyYy9hcHAvcGFnZXMvYWR2ZXJ0aXNlbWVudGRldGFpbC9hZHZlcnRpc2VtZW50ZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWR2ZXJ0aXNlbWVudGRldGFpbC9hZHZlcnRpc2VtZW50ZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURNQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDSEo7O0FEWUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ1RGOztBRFlBO0VBQ0UsZUFBQTtBQ1RGOztBRGFBO0VBQ0UsZUFBQTtBQ1ZGOztBRGFBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNWRjs7QURhQTtFQUNFLFVBQUE7RUFDQSw2QkFBQTtBQ1ZGOztBRGNBO0VBQ0UsVUFBQTtBQ1hGOztBRGNBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ1hIOztBRGNBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ1hGOztBRGNBO0VBQ0UsZUFBQTtFQUNDLGNBQUE7RUFDQSxnQkFBQTtBQ1hIOztBRGVBO0VBQ0UsY0FBQTtBQ1pGOztBRGVBO0VBQ0UsY0FBQTtBQ1pGOztBRGVBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1pGOztBRGVBO0VBQ0UsWUFBQTtFQUNDLFdBQUE7RUFDQyxZQUFBO0FDWko7O0FEZUE7RUFDRSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0MsWUFBQTtFQUNBLFdBQUE7QUNaSDs7QURnQkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNDLFlBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUNiSDs7QURrQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNmRjs7QURrQkE7RUFDRSxrQkFBQTtFQUNDLGFBQUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ2ZKOztBRGtCQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNDLDhCQUFBO0FDZkg7O0FEbUJBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDaEJGOztBRHFCQTtFQUNFLFdBQUE7RUFDQyxZQUFBO0VBRUQsZ0JBQUE7RUFDQSxjQUFBO0FDbkJGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWR2ZXJ0aXNlbWVudGRldGFpbC9hZHZlcnRpc2VtZW50ZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uY2wtYmFjay1idXR0b257XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmcnKSBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMjdweDtcbiAgICBoZWlnaHQ6IDI3cHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICAgIC8vIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuXG4jbWFwX2NhbnZhc3tcbiAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXJnaW46YXV0bztcbiAgICBoZWlnaHQ6IDI1dmg7XG4gIH1cblxuLy8gICAubWF0ZXJpYWwtaWNvbnMge1xuICBcbi8vICAgICBmb250LXNpemU6IDE0cHg7XG4gIFxuLy8gfVxuXG4uY2xfY2FsbF9pY29ue1xuICB3aWR0aDoxOHB4OyBcbiAgaGVpZ2h0OjE4cHg7XG59XG5cbi5jbF9mb250XzE0e1xuICBmb250LXNpemU6MTRweDtcbn1cblxuXG4uY2xfZm9udF8xM3tcbiAgZm9udC1zaXplOjEzcHg7XG59XG5cbi5jbF9jaGF0X2ljb257XG4gIGZvbnQtc2l6ZToxNnB4OyBcbiAgbWFyZ2luLXRvcDo3cHg7XG59XG5cbi5jbF9tZXNzYWdlX2RpdntcbiAgd2lkdGg6NTAlOyBcbiAgYm9yZGVyLXJpZ2h0OjJweCBzb2xpZCB3aGl0ZTtcbn1cblxuXG4uY2xfY2FsbF9kaXZ7XG4gIHdpZHRoOjUwJTsgXG59XG5cbi5jbF9jYWxsX21lc3NhZ2VfbWFpbmRpdntcbiAgd2lkdGg6MTAwJTsgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgIGJvdHRvbSA6MHB4OyBcbiAgIGhlaWdodDo0NXB4OyBcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmZTRmMTQ7XG4gICBjb2xvcjp3aGl0ZTtcbn1cblxuLmNsX2NhbnZhc3tcbiAgbWFyZ2luLWJvdHRvbToyMCU7XG4gIG1hcmdpbi10b3A6MTBweDtcbn1cblxuLmNsX2FkcG9zdHtcbiAgZm9udC1zaXplOjE0cHg7XG4gICBjb2xvciA6IHJnYig3OCwgNzcsIDc3KTtcbiAgIG1hcmdpbi1sZWZ0OjVweDtcbn1cblxuXG4uY2xfZ3JheV90aXRsZXtcbiAgY29sb3IgOiByZ2IoNzgsIDc3LCA3Nyk7XG59XG5cbi5jbF9ncmF5X2xhYmVse1xuICBjb2xvciA6IHJnYig5MiwgOTAsIDkwKTtcbn1cblxuLmNsX21hcmdpbntcbiAgd2lkdGg6OTYlO1xuICBtYXJnaW4tbGVmdDoyJTtcbiAgbWFyZ2luLXJpZ2h0OjIlO1xufVxuXG4uY2xfYXJyb3dfcmlnaHR7XG4gIGNvbG9yOmJsYWNrO1xuICAgd2lkdGg6MzBweDtcbiAgICBoZWlnaHQ6MzBweDtcbn1cblxuLmNsX21pZGRsZV9hcnJvd19sZWZ0e1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGNvbG9yOndoaXRlO1xuICB3aWR0aDozMHB4O1xuICAgaGVpZ2h0OjMwcHg7XG4gICBtYXJnaW46NnB4O1xufVxuXG5cbi5jbF9taWRkbGVfYXJyb3dfcmlnaHR7XG4gIGNvbG9yOndoaXRlO1xuICB3aWR0aDozMHB4O1xuICAgaGVpZ2h0OjMwcHg7XG4gICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICBtYXJnaW46N3B4O1xufVxuXG5cblxuLmNsX2RlZmF1bHRfcGlje1xuICB3aWR0aDo1MHB4OyBcbiAgaGVpZ2h0OjUwcHg7XG4gIGNvbG9yOiNmZTRmMTQ7XG59XG5cbi5jbF9pbWdfZGl2e1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICBoZWlnaHQ6MjUwcHg7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXJnaW46YXV0bztcbn1cblxuLmNsX2hlYWRlcntcbiAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgdG9wOjBweDsgXG4gIGhlaWdodDo1NXB4OyBcbiAgd2lkdGg6MTAwJTtcbiAgei1pbmRleCA6IDE7XG4gICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cblxuLmNsX21pZGRsZV9hcnJvd3tcbiAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgdG9wOjEyMHB4OyBcbiAgaGVpZ2h0OjU1cHg7IFxuICB3aWR0aDoxMDAlO1xuICB6LWluZGV4IDogMTtcbn1cblxuXG5cbi5jbF9zaGFyZV9pY29ue1xuICB3aWR0aDozMHB4O1xuICAgaGVpZ2h0OjMycHg7XG4gIC8vIG1hcmdpbi1yaWdodDoxMHB4O1xuICBtYXJnaW4tdG9wOi01cHg7XG4gIGNvbG9yOnJnYig3NSwgNzMsIDczKTtcbn0iLCIuY2wtYmFjay1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmdcIikgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAyN3B4O1xuICBoZWlnaHQ6IDI3cHg7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDA7XG59XG5cbiNtYXBfY2FudmFzIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAyNXZoO1xufVxuXG4uY2xfY2FsbF9pY29uIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbn1cblxuLmNsX2ZvbnRfMTQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jbF9mb250XzEzIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uY2xfY2hhdF9pY29uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiA3cHg7XG59XG5cbi5jbF9tZXNzYWdlX2RpdiB7XG4gIHdpZHRoOiA1MCU7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHdoaXRlO1xufVxuXG4uY2xfY2FsbF9kaXYge1xuICB3aWR0aDogNTAlO1xufVxuXG4uY2xfY2FsbF9tZXNzYWdlX21haW5kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU0ZjE0O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jbF9jYW52YXMge1xuICBtYXJnaW4tYm90dG9tOiAyMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jbF9hZHBvc3Qge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNGU0ZDRkO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uY2xfZ3JheV90aXRsZSB7XG4gIGNvbG9yOiAjNGU0ZDRkO1xufVxuXG4uY2xfZ3JheV9sYWJlbCB7XG4gIGNvbG9yOiAjNWM1YTVhO1xufVxuXG4uY2xfbWFyZ2luIHtcbiAgd2lkdGg6IDk2JTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBtYXJnaW4tcmlnaHQ6IDIlO1xufVxuXG4uY2xfYXJyb3dfcmlnaHQge1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5jbF9taWRkbGVfYXJyb3dfbGVmdCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDZweDtcbn1cblxuLmNsX21pZGRsZV9hcnJvd19yaWdodCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBtYXJnaW46IDdweDtcbn1cblxuLmNsX2RlZmF1bHRfcGljIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgY29sb3I6ICNmZTRmMTQ7XG59XG5cbi5jbF9pbWdfZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2xfaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgaGVpZ2h0OiA1NXB4O1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uY2xfbWlkZGxlX2Fycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEyMHB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY2xfc2hhcmVfaWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIGNvbG9yOiAjNGI0OTQ5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/advertisementdetail/advertisementdetail.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/advertisementdetail/advertisementdetail.page.ts ***!
  \***********************************************************************/
/*! exports provided: AdvertisementdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementdetailPage", function() { return AdvertisementdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/loaderservice/loader.service */ "./src/app/service/loaderservice/loader.service.ts");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/service/apiservice/api.service */ "./src/app/service/apiservice/api.service.ts");
/* harmony import */ var src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/service/network/network.service */ "./src/app/service/network/network.service.ts");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");

















var AdvertisementdetailPage = /** @class */ (function () {
    function AdvertisementdetailPage(activatedRoute, platform, networkServices, apiCall, networkService, callNumber, googlemaps, router, fileChooser, base64, file, actionSheetCtrl, socialSharing, nativeGeocoder, filePath, toast, loader, alertController) {
        this.activatedRoute = activatedRoute;
        this.platform = platform;
        this.networkServices = networkServices;
        this.apiCall = apiCall;
        this.networkService = networkService;
        this.callNumber = callNumber;
        this.googlemaps = googlemaps;
        this.router = router;
        this.fileChooser = fileChooser;
        this.base64 = base64;
        this.file = file;
        this.actionSheetCtrl = actionSheetCtrl;
        this.socialSharing = socialSharing;
        this.nativeGeocoder = nativeGeocoder;
        this.filePath = filePath;
        this.toast = toast;
        this.loader = loader;
        this.alertController = alertController;
        this.displayfavourite = "0";
        this.lattitude = 0;
        this.longitude = 0;
        this.advertisementImages = [];
        this.loc = {};
        this.getImage = localStorage.getItem("url");
        this.advertisementArray = [];
        this.userImg = "";
        this.getBookmarkObj = {};
        this.keysObject = [];
        this.isBookmarked = 0;
        this.userMobile = "";
        this.advertisementModel = {};
        this.subject = 'Message from Marketplace App';
        this.message = 'Marketplace App .';
        // public image : string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcO627ajsCYsf_HE5L8MXfugvvUe8ouCm8A6688WXreyA73dVf&usqp=CAU';
        // public image: string = "data:image/jpeg;base64,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";
        // public uri: string = 'https://marketplace.arraypointer.com/advertisementDetails?id=';
        this.uri = 'marketplaceapp://marketplace.arraypointer.com/?id=';
        this.deleteAd = 0;
    }
    AdvertisementdetailPage.prototype.slidesDidLoad = function (slides) {
        // slides.startAutoplay();
    };
    AdvertisementdetailPage.prototype.nextSlide = function (slides) {
        slides.slideNext();
    };
    AdvertisementdetailPage.prototype.prevSlide = function (slides) {
        slides.slidePrev();
    };
    AdvertisementdetailPage.prototype.ngOnInit = function () {
        // var data={"id" : 1, "second" : "abcd"};
    };
    AdvertisementdetailPage.prototype.getDetailAdvertisement = function () {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        this.apiCall.getAd(this.url).subscribe(function (MyResponse) {
            _this.advertisementArray = MyResponse['result'];
            _this.advertisementId = _this.advertisementArray['id'];
            _this.address = _this.advertisementArray['address'];
            _this.description = _this.advertisementArray['description'];
            _this.title = _this.advertisementArray['title'];
            _this.lattitude = _this.advertisementArray['latitude'];
            _this.longitude = _this.advertisementArray['longitude'];
            _this.price = _this.advertisementArray['price'];
            _this.priceType = _this.advertisementArray['adPriceType'];
            _this.gender = _this.advertisementArray['gender'];
            _this.mobile = _this.advertisementArray['mobile'];
            _this.date = _this.advertisementArray['modified'];
            _this.userId = _this.advertisementArray['userId'];
            _this.categoryId = _this.advertisementArray['categoryId'];
            _this.advertisementImages = _this.advertisementArray['images'];
            console.log("show first image of advertisement:" + _this.advertisementImages[0]);
            var getFirstImage = _this.advertisementImages[0];
            localStorage.setItem("ADVERTISEMENTDATA", JSON.stringify(_this.advertisementArray));
            _this.getpathofimage = 'https://cors-anywhere.herokuapp.com/' + getFirstImage;
            var checkBase64 = _this.convertToDataURLviaCanvas(_this.getpathofimage, "image/jpeg").then(function (base64) {
                return console.log(_this.getBase64Image = base64);
            });
            _this.image = _this.getBase64Image;
            console.log("show final base64Image:" + _this.getBase64Image);
            _this.getProfileDetail();
            _this.loadMap();
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
            _this.networkService.checkInternetConnection();
            _this.networkService.onPageLoadCheckInternet();
        });
    };
    AdvertisementdetailPage.prototype.ionViewWillEnter = function () {
        this.loader.showBlockingLoaderAuth();
        this.userId = localStorage.getItem('userId');
        this.getIds = JSON.parse(this.activatedRoute.snapshot.params['sendId']);
        this.advertisementType = this.getIds.adType;
        this.isBookmarked = this.getIds.isBookmarked;
        var getStatus = this.getIds.status;
        console.log("get status in ad detail::" + getStatus);
        // this.getIds = JSON.parse(getdata);
        if (this.getIds.status == "users") {
            this.advertisementId = this.getIds.id;
            this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].version + "users/" + this.userId + "/advertisements/" + this.advertisementId;
            this.getDetailAdvertisement();
        }
        else {
            this.advertisementId = this.getIds.id;
            this.categoryId = this.getIds.categoryId;
            console.log("show categoryId::" + this.categoryId);
            this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].version + "categories/" + this.categoryId + "/advertisements/" + this.advertisementId;
            this.getDetailAdvertisement();
        }
        var jsonString = localStorage.getItem("BOOKMARK");
        this.getBookmarkObj = JSON.parse(jsonString);
        if (this.getBookmarkObj == null || this.getBookmarkObj == "" || this.getBookmarkObj == undefined) {
            this.getBookmarkObj = {};
        }
        else {
        }
        console.log("show retrieved object:" + this.getBookmarkObj);
        // let data = localStorage.getItem("BOOKMARK");
        // this.getBookmarkObj = JSON.parse(data);
        // console.log("getBookmarkObj::" + this.getBookmarkObj);
        // this.keysObject = Object.keys(this.getBookmarkObj);
        // for(let i=0; i< this.keysObject.length; i++){
        //   if(this.advertisementId == this.keysObject[i]){
        //     this.displayfavourite = "0";
        //   }
        //   else{
        //     this.displayfavourite = "1";
        //   }
        // }
        this.loader.hideBlockingLoaderAuth();
    };
    AdvertisementdetailPage.prototype.presentActionSheet = function (image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var checkBase64, actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("image:" + image);
                        checkBase64 = this.convertToDataURLviaCanvas(image, "image/jpeg").then(function (base64) {
                            return console.log(_this.getBase64Image = base64);
                        });
                        this.image = this.getBase64Image;
                        return [4 /*yield*/, this.actionSheetCtrl.create({
                                buttons: [
                                    {
                                        text: "Share on Whatsup",
                                        role: "destructive",
                                        icon: 'logo-whatsup',
                                        handler: function () {
                                            _this.socialSharing
                                                .shareViaWhatsApp(_this.message + "\n", _this.image, "https://marketplace.arraypointer.com/?id=" + _this.advertisementId + "&categoryId=" + _this.categoryId)
                                                .catch(function (err) {
                                            })
                                                .catch(function (err) {
                                            });
                                        }
                                    },
                                    // {
                                    //   text: "Share on Email",
                                    //   role: "destructive",
                                    //   icon: 'mail',
                                    //   handler: () => {
                                    //     this.socialSharing.shareViaEmail(this.uri, this.message, this.sendTo)
                                    //       .then((data) => {
                                    //         console.log('Shared via Email');
                                    //       })
                                    //       .catch((err) => {
                                    //         console.log('Not able to be shared via Email');
                                    //       });
                                    //   }
                                    // },
                                    {
                                        text: "Share",
                                        role: "destructive",
                                        icon: 'share',
                                        handler: function () {
                                            _this.socialSharing.share("marketplaceapp://marketplace.arraypointer.com/?id=" + _this.advertisementId + "&categoryId=" + _this.categoryId, _this.message, _this.image)
                                                .then(function () {
                                            })
                                                .catch(function () {
                                            });
                                        }
                                    },
                                ]
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        actionSheet.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvertisementdetailPage.prototype.AskdeleteAdvertisement = function () {
        var _this = this;
        this.alertController.create({
            header: "Delete Advertisement !",
            subHeader: "Are you sure ?",
            buttons: [
                {
                    text: "No",
                    role: 'cancel',
                    handler: function (data) {
                        console.log(data);
                    }
                },
                {
                    text: "Yes",
                    handler: function (data) {
                        _this.deleteAdvertisement(1);
                    }
                }
            ]
        }).then(function (confirmElement) {
            confirmElement.present();
        });
    };
    AdvertisementdetailPage.prototype.deleteAdvertisement = function (value) {
        if (value == 1) {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].version + "advertisements/" + this.advertisementId;
            this.apiCall.deleteAdvertisement(url).subscribe(function (res) {
                window.history.back();
            }, function (err) {
                console.log(err);
            });
        }
    };
    AdvertisementdetailPage.prototype.bookmarkAdvertisement = function (advertisementid, isBookmarked) {
        var _this = this;
        console.log("show isBookmarked:" + isBookmarked);
        console.log("show advertisementid:" + advertisementid);
        // console.log("show advertisement object:" + JSON.stringify(item));
        // let getObj = item;
        if (isBookmarked == 1) {
            this.isBookmarked = 0;
            this.removeBookmark(advertisementid);
        }
        else {
            // for (let i = 0; i < this.advertisementArray.length; i++) {
            //   if (advertisementid == this.advertisementArray[i]['id']) {
            //     this.advertisementArray[i]['isBookmarked'] = 1;
            //   }
            // }
            var send_date = {};
            this.advertisementModel['userId'] = localStorage.getItem("userId");
            send_date['userId'] = this.advertisementModel['userId'];
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].version + "categories/" + this.categoryId + "/advertisements/" + advertisementid + "/bookmark";
            this.apiCall.postAuth(url, send_date).subscribe(function (MyResponse) {
                console.log("checking", "" + JSON.stringify(MyResponse));
                console.log(MyResponse["isSuccess"]);
                if (MyResponse["isSuccess"]) {
                    _this.isBookmarked = 1;
                }
                // this.getAdvertisement(this.categoryId);
                _this.loader.hideBlockingLoaderAuth();
            }, function (error) {
                _this.presentToast("Please try again");
                _this.loader.hideBlockingLoaderAuth();
            });
        }
    };
    AdvertisementdetailPage.prototype.removeBookmark = function (advertisementId) {
        var _this = this;
        this.userId = localStorage.getItem("userId");
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].version + "users/" + this.userId + "/bookmarks?" + "size=" + 1000;
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
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].version + "users/" + _this.userId + "/bookmarks/" + _this.bookmarkId;
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
    //  removeBookmark(advertisementId) {
    //   this.userId = localStorage.getItem("userId");
    // let url = environment.base_url + environment.version + "users/" + this.userId + "/bookmarks?" + "size=" + 1000;
    // this.apiCall.getAd(url).subscribe(MyResponse => {
    // this.getBookMarkArray = MyResponse['result']['list'];
    // for (let i = 0; i < this.getBookMarkArray.length; i++) {
    //   console.log("show advertisement id:" + advertisementId);
    //   if (this.getBookMarkArray[i]['id'] == advertisementId) {
    //     console.log("show advertisement bookmark id:" + this.getBookMarkArray[i]['bookmarkId']);
    //     this.bookmarkId = this.getBookMarkArray[i]['bookmarkId'];
    //     console.log("check ------ bookmark id:" + this.bookmarkId);
    //   } else {
    //     console.log("show advertisement bookmark id failure ::" + this.getBookMarkArray[i]['bookmarkId']);
    //   }
    // }
    // console.log("show advertisement bookmark id:" + this.bookmarkId);
    // let url = environment.base_url + environment.version + "users/" + this.userId + "/bookmarks/" + advertisementId;
    // this.apiCall.deleteAuth(url).subscribe(MyResponse => {
    //   // this.getAdvertisement(this.categoryId);
    //   this.loader.hideBlockingLoaderAuth();
    // }, error => {
    //   this.presentToast("Please try again");
    //   this.loader.hideBlockingLoaderAuth();
    // })
    // },
    //   error => {
    //   })
    // }
    AdvertisementdetailPage.prototype.sharePicker = function (image) {
        var _this = this;
        var str = image;
        var dotIndex = str.lastIndexOf('.');
        var ext = str.substring(dotIndex);
        console.log("show first image:" + ext);
        if (ext == ".jpg" || ext == ".png" || ext == ".jpeg") {
            console.log("match image");
            this.image = image;
        }
        else {
            console.log("not match image");
        }
        this.platform.ready()
            .then(function () {
            _this.socialSharing.share("", "", _this.image, "https://marketplace.arraypointer.com/?id=" + _this.advertisementId + "&categoryId=" + _this.categoryId)
                .then(function (data) {
                console.log('Shared via SharePicker');
            })
                .catch(function (err) {
                console.log('Was not shared via SharePicker');
            });
        });
        console.log("share image:" + this.image);
        // this.platform.ready()
        //   .then(() => {
        //     this.socialSharing.share("https://marketplace.arraypointer.com/?id=" + this.advertisementId + "&categoryId=" + this.categoryId,this.image)
        //       .then(() => {
        //       })
        //       .catch(() => {
        //       });
        //   });
    };
    AdvertisementdetailPage.prototype.convertToDataURLviaCanvas = function (url, outputFormat) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.img = new Image();
            _this.img.crossOrigin = 'anonymous';
            _this.img.onload = function () {
                var canvas = document.createElement('CANVAS'), ctx = canvas.getContext('2d'), dataURL;
                canvas.height = _this.img.height;
                canvas.width = _this.img.width;
                ctx.drawImage(_this.img, 0, 0);
                dataURL = canvas.toDataURL(outputFormat);
                resolve(dataURL);
                canvas = null;
            };
            _this.img.src = url;
        });
    };
    AdvertisementdetailPage.prototype.getDataUrl = function (img) {
        console.log("show img in getdata function:" + img);
        // this.fileChooser.open().then((fileUri) => {
        //   console.log("show image uri:"+fileUri);
        //   this.filePath.resolveNativePath(fileUri).then((filePath) =>
        //   this.base64.encodeFile("filePath").then((base64String) => {
        //     alert("base64String:" + base64String);
        //   })
        // )
        //   .catch(err => console.log(err));
        // })
    };
    AdvertisementdetailPage.prototype.goBackword = function () {
        if (this.advertisementType == '0') {
            this.router.navigate(['/favourite']);
        }
        else {
            this.router.navigate(['/home', { categoryId: this.categoryId }]);
        }
    };
    AdvertisementdetailPage.prototype.getProfileDetail = function () {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].version + "users/" + this.userId;
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.profileDetail = MyResponse['result'];
            _this.userName = _this.profileDetail.name;
            // this.userMobile = this.profileDetail.mobile;
            localStorage.setItem("getName", _this.userName);
            _this.userId = _this.profileDetail.id;
            if (_this.profileDetail.image == "" || _this.profileDetail.image == null) {
                _this.userImg = "";
            }
            else {
                _this.userImg = _this.profileDetail.image;
            }
            _this.userCreated = _this.profileDetail.created;
            _this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    AdvertisementdetailPage.prototype.loadMap = function () {
        var _this = this;
        // this.loader.showBlockingLoaderAuth();
        try {
            this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_10__["GoogleMaps"].create('map_canvas', {
                camera: {
                    target: {
                        lat: this.lattitude,
                        lng: this.longitude
                    },
                    zoom: 18,
                    tilt: 30
                }
            });
            this.map.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_10__["GoogleMapsEvent"].MAP_READY).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var marker;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log("Click MAP", data);
                            return [4 /*yield*/, this.map.animateCamera({
                                    target: {
                                        lat: this.lattitude,
                                        lng: this.longitude
                                    },
                                    zoom: 17,
                                    duration: 2000
                                })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.map.addMarker({
                                    title: 'Move pin to adjust',
                                    icon: 'red',
                                    animation: 'DROP',
                                    draggable: true,
                                    visible: true,
                                    position: {
                                        lat: this.lattitude,
                                        lng: this.longitude
                                    },
                                })];
                        case 2:
                            marker = _a.sent();
                            this.getAddressFromCoords(event[0]['lat'], event[0]['lng']);
                            return [2 /*return*/];
                    }
                });
            }); });
        }
        catch (err) {
            console.log("loadmap function", err);
        }
    };
    AdvertisementdetailPage.prototype.getAddressFromCoords = function (lattitude, longitude) {
        var _this = this;
        try {
            console.log("getAddressFromCoords " + lattitude + " " + longitude);
            var options = {
                useLocale: true,
                maxResults: 5
            };
            this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
                .then(function (result) {
                _this.address = "";
                var responseAddress = [];
                console.log("result", result);
                _this.loc = {};
                _this.loc['location'] = result[0]['subLocality'] + ", " + result[0]['locality'] + ", " + result[0]['subAdministrativeArea'];
                _this.loc['address'] = result[0]['thoroughfare'];
                _this.cityName = result[0]['subAdministrativeArea'] == "" ? result[0]['locality'] : result[0]['subAdministrativeArea'];
                _this.stateName = result[0]['administrativeArea'];
                _this.countryName = result[0]['countryName'];
                console.log("address", _this.loc);
                _this.loader.hideBlockingLoaderAuth();
            })
                .catch(function (error) {
                _this.loader.hideBlockingLoaderAuth();
                _this.address = "Address Not Available!";
                // this.loader.hideBlockingLoaderAuth();
            });
        }
        catch (err) {
            console.log("get address function", err);
            // this.loader.hideBlockingLoaderAuth();
        }
    };
    AdvertisementdetailPage.prototype.makeCall = function () {
        this.userMobile = this.mobile;
        if (this.userMobile == "" || this.userMobile == "null" || this.userMobile == undefined) {
            console.log("show number empty::::" + this.userMobile);
            this.presentToast("Sorry, you don't have number for call");
        }
        else {
            console.log("show number:" + this.userMobile);
            this.callNumber.callNumber(this.userMobile, true);
        }
    };
    AdvertisementdetailPage.prototype.presentToast = function (message) {
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
    AdvertisementdetailPage.prototype.sendMessage = function () {
        var userDetail = {
            "name": this.userName,
            "id": this.userId,
            "image": this.userImg
        };
        this.router.navigate(['/detailchat', { userDetail: JSON.stringify(userDetail) }]);
        // this.router.navigate(['/detailchat', { name: "Asmita Belhekar" }]);
    };
    AdvertisementdetailPage.prototype.viewProfile = function () {
        this.router.navigate(['/profile', { userId: this.userId }]);
    };
    AdvertisementdetailPage.prototype.editAdvertisement = function () {
        var status = "1";
        localStorage.setItem("postStatus", status);
        this.router.navigate(['/newadvertisementform']);
    };
    AdvertisementdetailPage.prototype.viewPaymentLogs = function () {
        var senData = {};
        senData['userId'] = this.userId;
        senData['advertisementId'] = this.advertisementId;
        senData['status'] = "add";
        this.router.navigate(['/paymentlogs', { senPaymentLogData: JSON.stringify(senData) }]);
    };
    AdvertisementdetailPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_13__["NetworkService"] },
        { type: src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"] },
        { type: src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_13__["NetworkService"] },
        { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"] },
        { type: _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_10__["GoogleMaps"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_14__["FileChooser"] },
        { type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_8__["Base64"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__["File"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"] },
        { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"] },
        { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_9__["FilePath"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AdvertisementdetailPage.prototype, "mapElement", void 0);
    AdvertisementdetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-advertisementdetail',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./advertisementdetail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisementdetail/advertisementdetail.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./advertisementdetail.page.scss */ "./src/app/pages/advertisementdetail/advertisementdetail.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_13__["NetworkService"],
            src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"],
            src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_13__["NetworkService"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"],
            _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_10__["GoogleMaps"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_14__["FileChooser"],
            _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_8__["Base64"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__["File"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_9__["FilePath"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], AdvertisementdetailPage);
    return AdvertisementdetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-advertisementdetail-advertisementdetail-module.js.map