webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__singup_singup__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.goToSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__singup_singup__["a" /* SingupPage */]);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\venkat\Projects\Simplifid\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar class="height-50">\n        <ion-navbar hideBackButton>\n            <ion-title class="login-title">Login into SimpliFid Profile</ion-title>\n        </ion-navbar>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-row class="height-50">\n        <ion-col>\n            <ion-label style="margin-top: 15%;" class="login-label">Login with any existing profiles</ion-label>\n\n            <ion-row style="margin-top: 10%">\n                <ion-col col-4>\n                    <img class="icon-social-network" src="./assets/imgs/ic_fb1.png">\n                </ion-col>\n\n                <ion-col col-4>\n                    <img class="icon-social-network" src="./assets/imgs/ic_gp1.png">\n                </ion-col>\n\n                <ion-col col-4>\n                    <img class="icon-social-network" src="./assets/imgs/ic_twitter1.png">\n                </ion-col>\n\n                <ion-label style="margin-top: 12%;" class="login-label">or Login with Email</ion-label>\n\n            </ion-row>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class="height-50" style="margin-left: 5%; margin-right: 5%; margin-top: 10%">\n        <ion-col>\n            <ion-list>\n                <ion-item>\n                    <ion-input no-margin class="login-input" type="email" placeholder="Email"></ion-input>\n                </ion-item>\n\n                <ion-item style="margin-top: 5%">\n                    <ion-input no-margin class="login-input" type="password" placeholder="Password"></ion-input>\n                </ion-item>\n            </ion-list>\n        </ion-col>\n    </ion-row>\n</ion-content>\n\n<ion-footer class="login-footer">\n    <ion-row no-padding no-margin>\n        <ion-col col-6 no-padding>\n            <button ion-button full class="login-footer-btn" (click)="goToSignUp()">SIGN UP\n            </button>\n        </ion-col>\n        <ion-col col-6 no-padding>\n            <button ion-button full class="login-footer-btn">CONTINUE</button>\n        </ion-col>\n    </ion-row>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\venkat\Projects\Simplifid\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SingupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SingupPage = /** @class */ (function () {
    function SingupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SingupPage.prototype.goToLogin = function () {
        this.navCtrl.pop();
    };
    SingupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SingupPage');
    };
    SingupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-singup',template:/*ion-inline-start:"C:\Users\venkat\Projects\Simplifid\src\pages\singup\singup.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar class="height-50">\n        <ion-navbar hideBackButton>\n            <ion-title class="login-title">Create your SimpliFid profile</ion-title>\n        </ion-navbar>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-row class="height-50">\n        <ion-col>\n            <ion-label style="margin-top: 15%;" class="login-label">Use any of your existing profiles</ion-label>\n\n            <ion-row style="margin-top: 10%">\n                <ion-col col-4>\n                    <img class="icon-social-network" src="./assets/imgs/ic_fb1.png">\n                </ion-col>\n\n                <ion-col col-4>\n                    <img class="icon-social-network" src="./assets/imgs/ic_twitter1.png">\n                </ion-col>\n                \n                <ion-col col-4>\n                    <img class="icon-social-network" src="./assets/imgs/ic_gp1.png">\n                </ion-col>\n\n                <!-- <ion-col col-12 class="icon-social-network">\n                    <img  src="./assets/imgs/ic_fb1.png">\n                \n                    <img  src="./assets/imgs/ic_twitter1.png">\n\n                    <img  src="./assets/imgs/ic_gp1.png">\n                </ion-col> -->\n                \n\n                <ion-label style="margin-top: 12%;" class="login-label">or create one on SimpliFid</ion-label>\n\n            </ion-row>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class="height-50" style="margin-left: 5%; margin-right: 5%; margin-top: 10%">\n        <ion-col>\n            <ion-list>\n                <ion-item>\n                    <ion-input no-margin class="login-input" type="email" placeholder="Email"></ion-input>\n                </ion-item>\n\n                <ion-item style="margin-top: 5%">\n                    <ion-input no-margin class="login-input" type="password" placeholder="Password"></ion-input>\n                </ion-item>\n\n                <ion-item style="margin-top: 5%">\n                    <ion-input no-margin class="login-input" type="password" placeholder="Confirm password"></ion-input>\n                </ion-item>\n\n            </ion-list>\n        </ion-col>\n    </ion-row>\n</ion-content>\n\n<ion-footer class="login-footer">\n    <ion-row no-padding no-margin>\n        <ion-col col-6 no-padding>\n            <button ion-button full class="login-footer-btn" (click)="goToLogin()">BACK\n            </button>\n        </ion-col>\n        <ion-col col-6 no-padding>\n            <button ion-button full class="login-footer-btn">CONTINUE</button>\n        </ion-col>\n    </ion-row>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\venkat\Projects\Simplifid\src\pages\singup\singup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SingupPage);
    return SingupPage;
}());

//# sourceMappingURL=singup.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/intro/intro.module": [
		270,
		2
	],
	"../pages/login/login.module": [
		271,
		1
	],
	"../pages/singup/singup.module": [
		272,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_intro_intro__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_singup_singup__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_singup_singup__["a" /* SingupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    scrollAssist: false,
                    autoFocusAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/singup/singup.module#SingupPageModule', name: 'SingupPage', segment: 'singup', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_singup_singup__["a" /* SingupPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_intro_intro__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_intro_intro__["a" /* IntroPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\venkat\Projects\Simplifid\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\venkat\Projects\Simplifid\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sliderOptions = {
            initialSlide: 0,
            pager: true
        };
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroPage');
    };
    IntroPage.prototype.goToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"C:\Users\venkat\Projects\Simplifid\src\pages\intro\intro.html"*/'<ion-navbar *navbar>\n  <ion-title>\n    Ionic 2\n  </ion-title>\n</ion-navbar>\n\n<ion-content class="has-header textcolor">\n  <ion-slides pager class="holder">\n \n      <ion-slide >\n          <h1> Welcome to SimpiFid</h1>\n          <img src="./assets/imgs/ic_logo.png"> \n\n          <!-- <video controls  width="320" height="250">\n              <source src="./assets/videos/intro_video.mp4" type="video/mp4" > </video> -->\n    \n          <h3 > SimpliFid charges a flat monthly fee of $1, with no hidden charges. Open an account and start investing.</h3>\n\n          <button class="btn-skip" (click)="goToLogin()">Skip</button>\n\n        </ion-slide>\n    \n    <ion-slide >\n        <h1> Money to Invest</h1>\n        <img src="./assets/imgs/ic_contribution.png">\n  \n        <h3> Investment is done to generate more money, but do not invest all your emergency funds in the stock market.</h3>\n        <button class="btn-skip" (click)="goToLogin()">Skip</button>\n      </ion-slide>\n\n    <ion-slide>\n        <h1> Any Time, Any Where</h1>\n        <img src="./assets/imgs/ic_time2.png">\n        \n        <h3> User can view the real time market data and their portfolio on anytime anywhere using this app</h3>\n        <button class="btn-skip" (click)="goToLogin();">Skip</button>\n    </ion-slide>\n      \n    <ion-slide>\n        <h1>Money Transfer</h1>\n        <img src="./assets/imgs/ic_wallet.png">\n  \n        <h3> Investment is done to generate more money, but do not invest all your emergency funds in the stock market.</h3>\n        <button class="btn-skip" (click)="goToLogin()">Got It</button>\n      </ion-slide>\n\n  </ion-slides>\n  </ion-content>'/*ion-inline-end:"C:\Users\venkat\Projects\Simplifid\src\pages\intro\intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map