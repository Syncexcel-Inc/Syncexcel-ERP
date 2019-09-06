"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var inmemory_db_service_1 = require("./shared/inmemory-db/inmemory-db.service");
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
var shared_module_1 = require("./shared/shared.module");
var app_component_1 = require("./app.component");
var http_2 = require("@angular/common/http");
var core_2 = require("@ngx-translate/core");
var http_loader_1 = require("@ngx-translate/http-loader");
var error_handler_service_1 = require("./shared/services/error-handler.service");
var app_Config_Service_1 = require("./app.Config.Service");
var auth_service_1 = require("../app/services/auth.service");
var error_service_1 = require("./services/error.service");
// AoT requires an exported function for factories
function HttpLoaderFactory(httpClient) {
    return new http_loader_1.TranslateHttpLoader(httpClient);
}
exports.HttpLoaderFactory = HttpLoaderFactory;
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                shared_module_1.SharedModule,
                http_2.HttpClientModule,
                http_1.HttpModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_2.HttpClient]
                    }
                }),
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(inmemory_db_service_1.InMemoryDataService, { passThruUnknownUrl: true }),
                router_1.RouterModule.forRoot(app_routing_1.rootRouterConfig, { useHash: false })
            ],
            declarations: [app_component_1.AppComponent],
            providers: [app_Config_Service_1.AppConfigService, auth_service_1.AuthService, error_service_1.ErrorService,
                { provide: core_1.ErrorHandler, useClass: error_handler_service_1.ErrorHandlerService },
                { provide: platform_browser_1.HAMMER_GESTURE_CONFIG, useClass: material_1.GestureConfig },
                { provide: ngx_perfect_scrollbar_1.PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map