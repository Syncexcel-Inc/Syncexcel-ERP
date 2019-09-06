"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
// SERVICES
var theme_service_1 = require("./services/theme.service");
var navigation_service_1 = require("./services/navigation.service");
var route_parts_service_1 = require("./services/route-parts.service");
var auth_guard_1 = require("./services/auth/auth.guard");
var app_confirm_service_1 = require("./services/app-confirm/app-confirm.service");
var app_loader_service_1 = require("./services/app-loader/app-loader.service");
var shared_components_module_1 = require("./components/shared-components.module");
var shared_pipes_module_1 = require("./pipes/shared-pipes.module");
var shared_directives_module_1 = require("./directives/shared-directives.module");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                shared_components_module_1.SharedComponentsModule,
                shared_pipes_module_1.SharedPipesModule,
                shared_directives_module_1.SharedDirectivesModule
            ],
            providers: [
                theme_service_1.ThemeService,
                navigation_service_1.NavigationService,
                route_parts_service_1.RoutePartsService,
                auth_guard_1.AuthGuard,
                app_confirm_service_1.AppConfirmService,
                app_loader_service_1.AppLoaderService
            ],
            exports: [
                shared_components_module_1.SharedComponentsModule,
                shared_pipes_module_1.SharedPipesModule,
                shared_directives_module_1.SharedDirectivesModule
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map