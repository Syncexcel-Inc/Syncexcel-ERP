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
var rxjs_1 = require("rxjs");
var url_helper_1 = require("../helpers/url.helper");
var theme_service_1 = require("./theme.service");
var LayoutService = /** @class */ (function () {
    function LayoutService(themeService) {
        this.themeService = themeService;
        this.layoutConfSubject = new rxjs_1.BehaviorSubject(this.layoutConf);
        this.layoutConf$ = this.layoutConfSubject.asObservable();
        this.fullWidthRoutes = ['shop'];
        this.setAppLayout();
    }
    LayoutService.prototype.setAppLayout = function () {
        //******** SET YOUR LAYOUT OPTIONS HERE *********
        this.layoutConf = {
            "navigationPos": "side",
            "sidebarStyle": "full",
            "sidebarColor": "dark-blue",
            "sidebarCompactToggle": false,
            "dir": "ltr",
            "useBreadcrumb": true,
            "topbarFixed": true,
            "topbarColor": "white",
            "matTheme": "egret-blue",
            "breadcrumb": "simple",
            "perfectScrollbar": true
        };
        //******* Only for demo purpose ***
        this.setLayoutFromQuery();
        //**********************
    };
    LayoutService.prototype.publishLayoutChange = function (lc, opt) {
        if (opt === void 0) { opt = {}; }
        if (this.layoutConf.matTheme !== lc.matTheme && lc.matTheme) {
            this.themeService.changeTheme(this.layoutConf.matTheme, lc.matTheme);
        }
        this.layoutConf = Object.assign(this.layoutConf, lc);
        this.layoutConfSubject.next(this.layoutConf);
    };
    LayoutService.prototype.applyMatTheme = function (r) {
        this.themeService.applyMatTheme(r, this.layoutConf.matTheme);
    };
    LayoutService.prototype.setLayoutFromQuery = function () {
        var layoutConfString = url_helper_1.getQueryParam('layout');
        try {
            this.layoutConf = JSON.parse(layoutConfString);
            // this.publishLayoutChange(this.layoutConf);
        }
        catch (e) { }
    };
    LayoutService.prototype.adjustLayout = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var sidebarStyle;
        this.isMobile = this.isSm();
        this.currentRoute = options.route || this.currentRoute;
        sidebarStyle = this.isMobile ? 'closed' : this.layoutConf.sidebarStyle;
        if (this.currentRoute) {
            this.fullWidthRoutes.forEach(function (route) {
                if (_this.currentRoute.indexOf(route) !== -1) {
                    sidebarStyle = 'closed';
                }
            });
        }
        this.publishLayoutChange({
            isMobile: this.isMobile,
            sidebarStyle: sidebarStyle
        });
    };
    LayoutService.prototype.isSm = function () {
        return window.matchMedia("(max-width: 959px)").matches;
    };
    LayoutService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [theme_service_1.ThemeService])
    ], LayoutService);
    return LayoutService;
}());
exports.LayoutService = LayoutService;
//# sourceMappingURL=layout.service.js.map