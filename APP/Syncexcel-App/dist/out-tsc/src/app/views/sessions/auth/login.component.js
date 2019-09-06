"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ng2_validation_1 = require("ng2-validation");
var auth_guard_1 = require("../../../shared/services/auth/auth.guard");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var user_model_1 = require("app/models/enterprises/user.model");
var error_service_1 = require("app/services/error.service");
var auth_service_1 = require("app/services/auth.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(ref, fb, authGaurd, router, authService, errorService, http) {
        this.ref = ref;
        this.fb = fb;
        this.authGaurd = authGaurd;
        this.router = router;
        this.authService = authService;
        this.errorService = errorService;
        this.http = http;
        this.headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
        this.user = new user_model_1.User();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var password = new forms_1.FormControl('', forms_1.Validators.required);
        var confirmPassword = new forms_1.FormControl('', ng2_validation_1.CustomValidators.equalTo(password));
        this.user.email = 'shakil@email.com';
        this.signupForm = this.fb.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: password,
            agreed: [false, forms_1.Validators.required]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        alert('AAAAAAAA');
        this.login();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.signupForm.valid) {
            // const user = new User(this.signupForm.value.email,
            //   this.signupForm.value.password, this.signupForm.value.firstName, this.signupForm.value.lastName);
            this.assignUser(this.signupForm.value);
            this.authService.signin(this.user)
                .subscribe(function (data) { return _this.redirect(data); }, function (error) { return console.error(error); });
        }
    };
    LoginComponent.prototype.redirect = function (data) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);
        this.authService.isLoggedIn = true;
        this.router.navigate(['/dashboard']);
    };
    LoginComponent.prototype.assignUser = function (formValue) {
        this.user.email = formValue.email;
        this.user.password = formValue.password;
        this.user.firstName = formValue.firstName;
        this.user.termsAgreed = formValue.termsAgreed;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, forms_1.FormBuilder, auth_guard_1.AuthGuard, router_1.Router,
            auth_service_1.AuthService, error_service_1.ErrorService, http_1.HttpClient])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map