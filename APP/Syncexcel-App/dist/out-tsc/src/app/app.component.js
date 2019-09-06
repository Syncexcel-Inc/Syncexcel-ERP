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
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var route_parts_service_1 = require("./shared/services/route-parts.service");
var theme_service_1 = require("./shared/services/theme.service");
var operators_1 = require("rxjs/operators");
var layout_service_1 = require("./shared/services/layout.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(title, router, activeRoute, routePartsService, themeService, layout, renderer) {
        this.title = title;
        this.router = router;
        this.activeRoute = activeRoute;
        this.routePartsService = routePartsService;
        this.themeService = themeService;
        this.layout = layout;
        this.renderer = renderer;
        this.appTitle = 'Syncexcel';
        this.pageTitle = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.changePageTitle();
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.layout.applyMatTheme(this.renderer);
    };
    AppComponent.prototype.changePageTitle = function () {
        var _this = this;
        this.router.events.pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; })).subscribe(function (routeChange) {
            var routeParts = _this.routePartsService.generateRouteParts(_this.activeRoute.snapshot);
            if (!routeParts.length)
                return _this.title.setTitle(_this.appTitle);
            // Extract title from parts;
            _this.pageTitle = routeParts
                .reverse()
                .map(function (part) { return part.title; })
                .reduce(function (partA, partI) { return partA + " > " + partI; });
            _this.pageTitle += " | " + _this.appTitle;
            _this.title.setTitle(_this.pageTitle);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [platform_browser_1.Title,
            router_1.Router,
            router_1.ActivatedRoute,
            route_parts_service_1.RoutePartsService,
            theme_service_1.ThemeService,
            layout_service_1.LayoutService,
            core_1.Renderer2])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map