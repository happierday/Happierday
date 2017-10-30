webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_nonauth_service__ = __webpack_require__("../../../../../src/app/services/nonauth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_verify_verify_component__ = __webpack_require__("../../../../../src/app/components/verify/verify.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__["a" /* RegisterComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_nonauth_service__["a" /* NonauthService */]]
    },
    {
        path: 'verify/:id',
        component: __WEBPACK_IMPORTED_MODULE_8__components_verify_verify_component__["a" /* VerifyComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_nonauth_service__["a" /* NonauthService */]]
    },
    {
        path: 'profile/:username',
        component: __WEBPACK_IMPORTED_MODULE_5__components_profile_profile_component__["a" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuardService */]]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */],
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-navbar></app-navbar>\r\n<div class = \"container\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_signup_service__ = __webpack_require__("../../../../../src/app/services/signup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_nonauth_service__ = __webpack_require__("../../../../../src/app/services/nonauth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_verify_verify_component__ = __webpack_require__("../../../../../src/app/components/verify/verify.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_verify_verify_component__["a" /* VerifyComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__services_signup_service__["a" /* SignUpService */],
            __WEBPACK_IMPORTED_MODULE_11__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_14__services_auth_guard_service__["a" /* AuthGuardService */],
            __WEBPACK_IMPORTED_MODULE_15__services_nonauth_service__["a" /* NonauthService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#form {\r\n    height: 500px;\r\n    border: 2px solid rgb(255, 200, 0);\r\n    width: 50%; \r\n    margin: 0 auto;\r\n    margin-top: 5%;\r\n    padding: 3%;\r\n}\r\n\r\n.shadowButtons {\r\n    height: 35px;\r\n    width: 100px;\r\n    box-shadow: 0 3px 5px 0 rgba(0,0,0,0.2), 0 6px 90px 0 rgba(0,0,0,0.19);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\r\n    <a class=\"navbar-brand\" routerLink = \"\">Happierday</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item active\" routerLinkActive = \"active\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n            <a class=\"nav-link\" routerLink = \"/\">Home <span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n            <li class=\"nav-item active\" routerLinkActive = \"active\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n            <a class=\"nav-link\" routerLink = \"/dashboard\">dashboard <span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"navbar-nav navbar-right\">\r\n            <li class=\"nav-item active\" routerLinkActive = \"active\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n            <a class=\"nav-link\" routerLink = \"/signup\">Signup <span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n            <li class=\"nav-item active\" routerLinkActive = \"active\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n            <a class=\"nav-link\" routerLink = \"/login\">Login <span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"jumbotron\">\n        <h1 class= \"page-header\">Login</h1>\n\n        <div class = \"row  show-hide-message\">\n            <div [ngClass] =\"messageClass\">\n                {{ message }}\n            </div>\n        </div>\n\n        <form [formGroup] = \"userForm\" (submit) = \"onLoginSubmit()\">\n            <div class=\"form-group\" [ngClass]=\"{'has-error':userForm.controls.username.errors&&userForm.controls.username.dirty,'has-success':!userForm.controls.username.errors}\">\n                <label for=\"username\" >Username</label>\n                <input type=\"text\"  id=\"username\" class=\"form-control\"  placeholder=\"username\" formControlName=\"username\">\n                <div *ngIf=\"(userForm.controls.username.errors && userForm.controls.username.dirty)\" class=\"alert alert-danger\">\n                    <div *ngIf=\"userForm.controls.username.errors?.required\">\n                        Userame is required.\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\" [ngClass]=\"{'has-error':userForm.controls.password.errors&&userForm.controls.password.dirty,'has-success':!userForm.controls.password.errors}\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" class=\"form-control\" id=\"password\"   placeholder=\"password\" formControlName=\"password\">\n                <div *ngIf=\"userForm.controls.password.errors && userForm.controls.password.dirty\" class=\"alert alert-danger\">\n                    <div *ngIf=\"userForm.controls.password.errors?.required\">\n                        Password is required.\n                    </div>\n                </div>\n            </div>\n            <button [disabled] = \"!userForm.valid || logedIn\" type=\"submit\" class=\"btn btn-success\">Submit</button>\n        </form>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(formBuilder, router, loginService, authGuardService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.loginService = loginService;
        this.authGuardService = authGuardService;
        this.logedIn = false;
        this.createForm();
    }
    LoginComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authGuardService.redirectUrl) {
            this.message = 'You must log in before viewing that page';
            this.messageClass = 'alert alert-danger';
            this.url = this.authGuardService.redirectUrl;
            this.authGuardService.redirectUrl = undefined;
        }
    };
    LoginComponent.prototype.disableForm = function () {
        this.userForm.controls['username'].disable();
        this.userForm.controls['password'].disable();
    };
    LoginComponent.prototype.enableForm = function () {
        this.userForm.controls['username'].enable();
        this.userForm.controls['password'].enable();
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.logedIn = true;
        this.disableForm();
        var user = {
            username: this.userForm.get('username').value,
            password: this.userForm.get('password').value
        };
        this.loginService.Login(user).subscribe(function (res) {
            _this.response = JSON.parse(JSON.stringify(res));
            _this.message = _this.response.message;
            if (_this.response.success) {
                _this.messageClass = 'alert alert-success';
                _this.loginService.storeUser(_this.response.token, user.username);
                setTimeout(function () {
                    if (_this.url) {
                        _this.router.navigate([_this.url]);
                    }
                    else {
                        _this.router.navigate(['/profile/' + user.username]);
                    }
                }, 1000);
            }
            else {
                _this.logedIn = false;
                _this.messageClass = 'alert alert-danger';
                _this.enableForm();
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_guard_service__["a" /* AuthGuardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_guard_service__["a" /* AuthGuardService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"container\">\r\n        <a class=\"navbar-brand\" routerLink = \"/\">Happierday</a>\r\n        <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-main\">\r\n            <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <div class=\"navbar-collapse collapse\" id=\"navbar-main\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li class=\"nav-item\" routerLinkActive = \"active\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                    <a class=\"nav-link\" routerLink = \"/\">Home</a>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li class=\"nav-item \"  *ngIf= \"!authService.loggedIn()\" routerLinkActive = \"active\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                    <a class=\"nav-link\"  routerLink = \"/login\">Login</a>\r\n                </li>\r\n                <li class=\"nav-item \" *ngIf= \"!authService.loggedIn()\" routerLinkActive = \"active\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                    <a class=\"nav-link\"  routerLink = \"/signup\">Signup</a>\r\n                </li>\r\n                <li class=\"nav-item \"  *ngIf= \"authService.loggedIn()\" routerLinkActive = \"active\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                    <a class=\"nav-link\"  routerLink = \"/profile/{{authService.username}}\">{{authService.username}}</a>\r\n                </li>\r\n                <li class=\"nav-item \"  *ngIf= \"authService.loggedIn()\" routerLinkActive = \"active\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                    <a class=\"nav-link\" (click)=\"onLogOut()\" >Logout</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogOut = function () {
        this.authService.logOut();
        this.router.navigate(['/']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"jumbotron\">\n        <h1 class = \"page-header\">profile</h1>\n            <p>username: {{username}}</p>\n            <p>Email: {{email}}</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/']);
        }
        else {
            this.authService.getProfile().subscribe(function (res) {
                _this.result = JSON.parse(JSON.stringify(res));
                if (_this.result.success) {
                    _this.username = _this.result.username;
                    _this.email = _this.result.email;
                }
                else {
                    setTimeout(function () {
                        _this.router.navigate(['/']);
                    }, 4000);
                }
            });
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"jumbotron\">\r\n        <h1 class= \"page-header\">Sign up</h1>\r\n\r\n        <div class = \"row  show-hide-message\">\r\n            <div [ngClass] =\"messageClass\">\r\n                {{ message }}\r\n            </div>\r\n        </div>\r\n\r\n        <form [formGroup] = \"userForm\" (submit) = \"onRegisterSubmit()\">\r\n            <div class=\"form-group\" [ngClass]=\"{'has-error':userForm.controls.username.errors&&userForm.controls.username.dirty,'has-success':!userForm.controls.username.errors}\">\r\n                <label for=\"username\" >Username</label>\r\n                <input type=\"text\"  id=\"username\" class=\"form-control\"  placeholder=\"username\" formControlName=\"username\">\r\n                <div *ngIf=\"(userForm.controls.username.errors && userForm.controls.username.dirty)\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"userForm.controls.username.errors?.required\">\r\n                        Userame is required.\r\n                    </div>\r\n                    <div *ngIf=\"userForm.controls.username.errors?.minlength && !userForm.controls.username.errors?.required\">\r\n                        Userame must have at least 5 characters.\r\n                    </div>\r\n                    <div *ngIf=\"userForm.controls.username.errors?.maxlength && !userForm.controls.username.errors?.required\">\r\n                        Userame must be no longer than 20 characters.\r\n                    </div>\r\n                    <div *ngIf=\"userForm.controls.username.errors?.validateUsername && !userForm.controls.username.errors?.required\">\r\n                        Username should not contain any special characters.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" [ngClass]=\"{'has-error':userForm.controls.email.errors&&userForm.controls.email.dirty,'has-success':!userForm.controls.email.errors}\">\r\n                <label for=\"email\">Email</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"email\"  placeholder=\"email\" formControlName=\"email\">\r\n                <div *ngIf=\"userForm.controls.email.errors && userForm.controls.email.dirty\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"userForm.controls.email.errors?.required\">\r\n                        Email is required.\r\n                    </div>\r\n                    <div *ngIf=\"userForm.controls.email.errors?.minlength && !userForm.controls.email.errors?.required\">\r\n                        Email must have at least 10 characters.\r\n                    </div>\r\n                    <div *ngIf=\"userForm.controls.email.errors?.maxlength && !userForm.controls.email.errors?.required\" >\r\n                        Email is too long.\r\n                    </div>\r\n                    <div *ngIf=\"userForm.controls.email.errors?.validateEmail && !userForm.controls.email.errors?.required\">\r\n                        Must be a valid email.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" [ngClass]=\"{'has-error':userForm.controls.password.errors&&userForm.controls.password.dirty,'has-success':!userForm.controls.password.errors}\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"password\"   placeholder=\"password\" formControlName=\"password\">\r\n                <div *ngIf=\"userForm.controls.password.errors && userForm.controls.password.dirty\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"userForm.controls.password.errors?.required\">\r\n                        Password is required.\r\n                    </div>\r\n                    <div *ngIf=\"userForm.controls.password.errors?.minlength && !userForm.controls.password.errors?.required\">\r\n                        Password must have at least 8 characters.\r\n                    </div>\r\n                    <div *ngIf=\"userForm.controls.password.errors?.validatePassword && !userForm.controls.password.errors?.required\">\r\n                        Password should contain at least one lower,upper case and number.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" [ngClass]=\"{'has-error':userForm.controls.confirmPassword.errors&&userForm.controls.confirmPassword.dirty,'has-success':!userForm.controls.confirmPassword.errors}\">\r\n                <label for=\"confirmPassword\">Confirm Password</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"confirmPassword\"  placeholder=\"confirmPassword\" formControlName=\"confirmPassword\"\r\n                [ngClass]=\"{'is-invalid':(userForm.controls.confirmPassword.errors || userForm.errors) &&userForm.controls.confirmPassword.dirty,'is-valid':!userForm.controls.confirmPassword.errors && !userForm.errors}\">\r\n                <div *ngIf=\"userForm.controls.confirmPassword.dirty && userForm.errors\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"userForm.controls.confirmPassword.errors?.required\">\r\n                        Confirm Password is required.\r\n                    </div>\r\n                    <div *ngIf=\"!userForm.controls.confirmPassword.errors?.required && userForm.errors?.matchPassword\">\r\n                        Password doesn't match.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <button [disabled] = \"!userForm.valid || signedUp\" type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n        </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_signup_service__ = __webpack_require__("../../../../../src/app/services/signup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(formBuilder, signUpService, router) {
        this.formBuilder = formBuilder;
        this.signUpService = signUpService;
        this.router = router;
        this.signedUp = false;
        this.createForm();
    }
    RegisterComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(20),
                    this.validateUsername
                ])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(10),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(50),
                    this.validateEmail
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(8),
                    this.validatePassword
                ])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required
            ]
        }, { validator: this.matchPassword('password', 'confirmPassword') });
    };
    //disable/enable forms
    RegisterComponent.prototype.disableForm = function () {
        this.userForm.controls['username'].disable();
        this.userForm.controls['email'].disable();
        this.userForm.controls['password'].disable();
        this.userForm.controls['confirmPassword'].disable();
    };
    RegisterComponent.prototype.enableForm = function () {
        this.userForm.controls['username'].enable();
        this.userForm.controls['email'].enable();
        this.userForm.controls['password'].enable();
        this.userForm.controls['confirmPassword'].enable();
    };
    //validate user inputs
    RegisterComponent.prototype.validateEmail = function (controls) {
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validateEmail': true };
        }
    };
    RegisterComponent.prototype.validatePassword = function (controls) {
        var regExp = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validatePassword': true };
        }
    };
    RegisterComponent.prototype.validateUsername = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validateUsername': true };
        }
    };
    RegisterComponent.prototype.matchPassword = function (password, confirmPassword) {
        return function (group) {
            if (group.controls[password].value && group.controls[password].value) {
                if (group.controls[password].value === group.controls[confirmPassword].value) {
                    return null;
                }
                else {
                    return { 'matchPassword': true };
                }
            }
            else {
                return { 'matchPassword': true };
            }
        };
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.signedUp = true;
        this.disableForm();
        var user = {
            username: this.userForm.get('username').value,
            email: this.userForm.get('email').value,
            password: this.userForm.get('password').value
        };
        this.signUpService.registerUser(user).subscribe(function (res) {
            _this.registerResponse = JSON.parse(JSON.stringify(res));
            if (_this.registerResponse.success) {
                _this.messageClass = 'alert alert-success';
                localStorage.setItem('hash', _this.registerResponse.hash);
            }
            else {
                _this.messageClass = 'alert alert-danger';
                _this.signedUp = false;
                _this.enableForm();
            }
            _this.message = _this.registerResponse.message;
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_signup_service__["a" /* SignUpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_signup_service__["a" /* SignUpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/verify/verify.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/verify/verify.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"jumbotron\">\n        <h1 class= \"page-header\">Verify</h1>\n        <div class = \"row  show-hide-message\">\n            <div [ngClass] =\"messageClass\">\n                {{ message }}\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/verify/verify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_signup_service__ = __webpack_require__("../../../../../src/app/services/signup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerifyComponent = (function () {
    function VerifyComponent(router, signUpService) {
        this.router = router;
        this.signUpService = signUpService;
        this.verify();
    }
    VerifyComponent.prototype.ngOnInit = function () {
    };
    VerifyComponent.prototype.verify = function () {
        var _this = this;
        this.signUpService.verifyUser(localStorage.getItem('hash')).subscribe(function (res) {
            _this.response = JSON.parse(JSON.stringify(res));
            _this.message = _this.response.message;
            if (_this.response.success) {
                _this.signUpService.storeUser(_this.response.username, _this.response.token);
                localStorage.removeItem('hash');
                _this.messageClass = 'alert alert-success';
                setTimeout(function () {
                    _this.router.navigate(['/profile/' + _this.response.username]);
                }, 2000);
            }
            else {
                _this.messageClass = 'alert alert-danger';
            }
        });
    };
    return VerifyComponent;
}());
VerifyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-verify',
        template: __webpack_require__("../../../../../src/app/components/verify/verify.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/verify/verify.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_signup_service__["a" /* SignUpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_signup_service__["a" /* SignUpService */]) === "function" && _b || Object])
], VerifyComponent);

var _a, _b;
//# sourceMappingURL=verify.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (router, state) {
        if (localStorage.getItem('token')) {
            return true;
        }
        else {
            if (localStorage.getItem('username')) {
                this.redirectUrl = undefined;
            }
            else {
                this.redirectUrl = state.url;
                this.router.navigate(['/login']);
            }
            return false;
        }
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthGuardService);

var _a;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.serverDomain = "http://localhost:8000";
    }
    AuthService.prototype.authUser = function () {
        this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'authtoken': localStorage.getItem('token')
        });
    };
    AuthService.prototype.getProfile = function () {
        this.authUser();
        return this.http.get(this.serverDomain + "/profile/" + localStorage.getItem('username'), { headers: this.header });
    };
    AuthService.prototype.loggedIn = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])()) {
            this.username = localStorage.getItem('username');
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.logOut = function () {
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.serverDomain = "https://happierday.herokuapp.com";
    }
    LoginService.prototype.Login = function (user) {
        return this.http.post(this.serverDomain + '/login', user);
    };
    LoginService.prototype.storeUser = function (token, username) {
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/nonauth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NonauthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NonauthService = (function () {
    function NonauthService(router) {
        this.router = router;
    }
    NonauthService.prototype.canActivate = function () {
        if (localStorage.getItem('token')) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    };
    return NonauthService;
}());
NonauthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], NonauthService);

var _a;
//# sourceMappingURL=nonauth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/signup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignUpService = (function () {
    function SignUpService(http) {
        this.http = http;
        this.serverDomain = "https://happierday.herokuapp.com";
    }
    SignUpService.prototype.registerUser = function (user) {
        return this.http.post(this.serverDomain + '/signup', user);
    };
    SignUpService.prototype.verifyUser = function (id) {
        return this.http.get(this.serverDomain + '/verify/' + id);
    };
    SignUpService.prototype.storeUser = function (username, token) {
        localStorage.setItem('username', username);
        localStorage.setItem('token', token);
    };
    return SignUpService;
}());
SignUpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], SignUpService);

var _a;
//# sourceMappingURL=signup.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map