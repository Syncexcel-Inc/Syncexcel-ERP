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
var router_1 = require("@angular/router");
var core_2 = require("@ngx-translate/core");
var theme_service_1 = require("../../../services/theme.service");
var layout_service_1 = require("../../../services/layout.service");
var operators_1 = require("rxjs/operators");
var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(router, translate, themeService, layout, cdr) {
        var _this = this;
        this.router = router;
        this.translate = translate;
        this.themeService = themeService;
        this.layout = layout;
        this.cdr = cdr;
        this.isModuleLoading = false;
        this.scrollConfig = {};
        this.layoutConf = {};
        // Close sidenav after route change in mobile
        this.routerEventSub = router.events.pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(function (routeChange) {
            _this.layout.adjustLayout({ route: routeChange.url });
        });
        // Translator init
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.layoutConf = this.layout.layoutConf;
        this.layoutConfSub = this.layout.layoutConf$.subscribe(function (layoutConf) {
            _this.layoutConf = layoutConf;
            _this.cdr.markForCheck();
        });
        // FOR MODULE LOADER FLAG
        this.moduleLoaderSub = this.router.events.subscribe(function (event) {
            if (event instanceof router_1.RouteConfigLoadStart || event instanceof router_1.ResolveStart) {
                _this.isModuleLoading = true;
            }
            if (event instanceof router_1.RouteConfigLoadEnd || event instanceof router_1.ResolveEnd) {
                _this.isModuleLoading = false;
            }
        });
    };
    AdminLayoutComponent.prototype.onResize = function (event) {
        this.layout.adjustLayout(event);
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
    };
    AdminLayoutComponent.prototype.scrollToTop = function (selector) {
        if (document) {
            var element = document.querySelector(selector);
            element.scrollTop = 0;
        }
    };
    AdminLayoutComponent.prototype.ngOnDestroy = function () {
        if (this.moduleLoaderSub) {
            this.moduleLoaderSub.unsubscribe();
        }
        if (this.layoutConfSub) {
            this.layoutConfSub.unsubscribe();
        }
        if (this.routerEventSub) {
            this.routerEventSub.unsubscribe();
        }
    };
    AdminLayoutComponent.prototype.closeSidebar = function () {
        this.layout.publishLayoutChange({
            sidebarStyle: 'closed'
        });
    };
    AdminLayoutComponent.prototype.sidebarMouseenter = function (e) {
        // console.log(this.layoutConf);
        if (this.layoutConf.sidebarStyle === 'compact') {
            this.layout.publishLayoutChange({ sidebarStyle: 'full' }, { transitionClass: true });
        }
    };
    AdminLayoutComponent.prototype.sidebarMouseleave = function (e) {
        // console.log(this.layoutConf);
        if (this.layoutConf.sidebarStyle === 'full' &&
            this.layoutConf.sidebarCompactToggle) {
            this.layout.publishLayoutChange({ sidebarStyle: 'compact' }, { transitionClass: true });
        }
    };
    __decorate([
        core_1.HostListener('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AdminLayoutComponent.prototype, "onResize", null);
    AdminLayoutComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-layout',
            templateUrl: './admin-layout.template.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [router_1.Router,
            core_2.TranslateService,
            theme_service_1.ThemeService,
            layout_service_1.LayoutService,
            core_1.ChangeDetectorRef])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());
exports.AdminLayoutComponent = AdminLayoutComponent;
//# sourceMappingURL=admin-layout.component.js.map