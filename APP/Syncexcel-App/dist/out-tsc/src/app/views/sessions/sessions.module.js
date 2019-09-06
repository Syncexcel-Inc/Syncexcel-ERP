"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var shared_material_module_1 = require("app/shared/shared-material.module");
var flex_layout_1 = require("@angular/flex-layout");
// import { CommonDirectivesModule } from './sdirectives/common/common-directives.module';
var forgot_password_component_1 = require("./forgot-password/forgot-password.component");
var lockscreen_component_1 = require("./lockscreen/lockscreen.component");
var login_component_1 = require("./auth/login.component");
var sessions_routing_1 = require("./sessions.routing");
var not_found_component_1 = require("./not-found/not-found.component");
var error_component_1 = require("../error/error.component");
var SessionsModule = /** @class */ (function () {
    function SessionsModule() {
    }
    SessionsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                shared_material_module_1.SharedMaterialModule,
                flex_layout_1.FlexLayoutModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                router_1.RouterModule.forChild(sessions_routing_1.SessionsRoutes)
            ],
            declarations: [forgot_password_component_1.ForgotPasswordComponent, lockscreen_component_1.LockscreenComponent, login_component_1.LoginComponent, not_found_component_1.NotFoundComponent, error_component_1.ErrorComponent]
        })
    ], SessionsModule);
    return SessionsModule;
}());
exports.SessionsModule = SessionsModule;
//# sourceMappingURL=sessions.module.js.map