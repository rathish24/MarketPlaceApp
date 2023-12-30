(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-showfilterdata-showfilterdata-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/showfilterdata/showfilterdata.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/showfilterdata/showfilterdata.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-row>\n      <ion-col size=\"2\">\n        <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button>\n      </ion-col>\n      <ion-col size=\"10\" class=\"TitleHeader TitleText\">\n        <ion-label style=\"color:white; margin-left:-15px\">Filter</ion-label>\n      </ion-col>\n  \n    </ion-row>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <div style=\"width:100%; height:100%\">\n    <div style=\"width:96%;margin-left:2%; margin-right:2%\">\n\n      <div class=\"row\" *ngFor=\"let item of categoryArray\" >\n        <div class=\"column\" style=\"position:relative\">\n          \n        <ion-card style=\"border-radius: 5px;width:100%; height:100%; margin:auto; margin-top:10px\" (click)=\"applyFilter(item.id, item.name)\"  [ngClass]=\"(categoryName == item.id) ? 'card-one' : 'card-two' \" fxLayoutAlign=\"center center\">\n          <!-- <div >\n            <mat-checkbox slot=\"end\"\n            [(ngModel)]=\"item.isChecked\" \n            (ionChange)=\"checkEvent()\"></mat-checkbox>\n          </div> -->\n          <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"margin-top:20px\">\n          \n            <img src={{item.image}} style=\"border-radius: 5px;width:50px; height:50px\"/>\n            <h5 align=\"center\">{{item.name}}</h5>\n          </div>\n         \n        </ion-card>\n        </div>\n  \n      </div>\n  \n  \n    </div>\n  \n  </div>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/showfilterdata/showfilterdata-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/showfilterdata/showfilterdata-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ShowfilterdataPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowfilterdataPageRoutingModule", function() { return ShowfilterdataPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _showfilterdata_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showfilterdata.page */ "./src/app/pages/showfilterdata/showfilterdata.page.ts");




var routes = [
    {
        path: '',
        component: _showfilterdata_page__WEBPACK_IMPORTED_MODULE_3__["ShowfilterdataPage"]
    }
];
var ShowfilterdataPageRoutingModule = /** @class */ (function () {
    function ShowfilterdataPageRoutingModule() {
    }
    ShowfilterdataPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ShowfilterdataPageRoutingModule);
    return ShowfilterdataPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/showfilterdata/showfilterdata.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/showfilterdata/showfilterdata.module.ts ***!
  \***************************************************************/
/*! exports provided: ShowfilterdataPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowfilterdataPageModule", function() { return ShowfilterdataPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _showfilterdata_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showfilterdata-routing.module */ "./src/app/pages/showfilterdata/showfilterdata-routing.module.ts");
/* harmony import */ var _showfilterdata_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./showfilterdata.page */ "./src/app/pages/showfilterdata/showfilterdata.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









var ShowfilterdataPageModule = /** @class */ (function () {
    function ShowfilterdataPageModule() {
    }
    ShowfilterdataPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _showfilterdata_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShowfilterdataPageRoutingModule"]
            ],
            declarations: [_showfilterdata_page__WEBPACK_IMPORTED_MODULE_6__["ShowfilterdataPage"]]
        })
    ], ShowfilterdataPageModule);
    return ShowfilterdataPageModule;
}());



/***/ }),

/***/ "./src/app/pages/showfilterdata/showfilterdata.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/showfilterdata/showfilterdata.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".masters {\n  --background: #f1f4f9;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: inline-flex;\n  align-items: center;\n}\n\n.TitleText {\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  align-items: center;\n}\n\n.cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.column {\n  float: left;\n  border-radius: 5px;\n  width: 50%;\n  height: 170px;\n  margin: auto;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-bottom: 8px;\n}\n\n.card-one {\n  --background: #152a3f !important;\n  --color:white;\n}\n\n.card-two {\n  --background: white !important;\n  --color:black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByYXRpay9tYXJrZXRwbGFjZWlvbmljL3NyYy9hcHAvcGFnZXMvc2hvd2ZpbHRlcmRhdGEvc2hvd2ZpbHRlcmRhdGEucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaG93ZmlsdGVyZGF0YS9zaG93ZmlsdGVyZGF0YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURFQTtFQUNJLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREdBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0FDREo7O0FET0U7RUFFRSxnQ0FBQTtFQUNBLGFBQUE7QUNMSjs7QURTRTtFQUVFLDhCQUFBO0VBQ0EsYUFBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2hvd2ZpbHRlcmRhdGEvc2hvd2ZpbHRlcmRhdGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hc3RlcnMge1xuICAgIC0tYmFja2dyb3VuZDogI2YxZjRmOTtcbiAgfVxuXG4gIC5UaXRsZUhlYWRlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5UaXRsZVRleHR7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICB3aWR0aDogODElO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLmNsLWJhY2stYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nJykgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cblxuLmNvbHVtbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OjE3MHB4O1xuICAgIG1hcmdpbjphdXRvO1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAvLyBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgLy8gbWFyZ2luLXRvcDotNXB4O1xuICB9XG4gIC8vIGlvbi1jb250ZW50e1xuICAvLyAgIC0tYmFja2dyb3VuZDogIzE1MmEzZiAhaW1wb3J0YW50OyAgIFxuICAvLyB9XG4gIC5jYXJkLW9uZSB7XG5cbiAgICAtLWJhY2tncm91bmQ6ICMxNTJhM2YgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOndoaXRlO1xuICAgIFxuICB9XG5cbiAgLmNhcmQtdHdvIHtcblxuICAgIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOmJsYWNrO1xuICB9IiwiLm1hc3RlcnMge1xuICAtLWJhY2tncm91bmQ6ICNmMWY0Zjk7XG59XG5cbi5UaXRsZUhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uVGl0bGVUZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgd2lkdGg6IDgxJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jbC1iYWNrLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZ1wiKSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uY29sdW1uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuXG4uY2FyZC1vbmUge1xuICAtLWJhY2tncm91bmQ6ICMxNTJhM2YgIWltcG9ydGFudDtcbiAgLS1jb2xvcjp3aGl0ZTtcbn1cblxuLmNhcmQtdHdvIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAtLWNvbG9yOmJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/showfilterdata/showfilterdata.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/showfilterdata/showfilterdata.page.ts ***!
  \*************************************************************/
/*! exports provided: ShowfilterdataPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowfilterdataPage", function() { return ShowfilterdataPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/loaderservice/loader.service */ "./src/app/service/loaderservice/loader.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/apiservice/api.service */ "./src/app/service/apiservice/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/network/network.service */ "./src/app/service/network/network.service.ts");







var ShowfilterdataPage = /** @class */ (function () {
    function ShowfilterdataPage(loader, networkServices, router, apiCall) {
        this.loader = loader;
        this.networkServices = networkServices;
        this.router = router;
        this.apiCall = apiCall;
    }
    ShowfilterdataPage.prototype.ngOnInit = function () {
        this.getCategory();
    };
    ShowfilterdataPage.prototype.ionViewWillEnter = function () {
        this.categoryName = localStorage.getItem("categoryName");
        if (this.categoryName == undefined || this.categoryName == null || this.categoryName == "") {
        }
        else {
        }
    };
    ShowfilterdataPage.prototype.getCategory = function () {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + "category/" + 0 + "/sub-category";
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.categoryArray = MyResponse['result']['list'];
            _this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    ShowfilterdataPage.prototype.goBackword = function () {
        window.history.back();
    };
    ShowfilterdataPage.prototype.applyFilter = function (id, name) {
        console.log("get id::" + id);
        localStorage.setItem("categoryName", id);
        this.router.navigate(['/home', { categoryId: id }]);
    };
    ShowfilterdataPage.ctorParameters = function () { return [
        { type: src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] },
        { type: src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
    ]; };
    ShowfilterdataPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-showfilterdata',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./showfilterdata.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/showfilterdata/showfilterdata.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./showfilterdata.page.scss */ "./src/app/pages/showfilterdata/showfilterdata.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"],
            src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], ShowfilterdataPage);
    return ShowfilterdataPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-showfilterdata-showfilterdata-module.js.map