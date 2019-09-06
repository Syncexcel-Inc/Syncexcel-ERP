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
var theme_service_1 = require("../../services/theme.service");
var layout_service_1 = require("../../services/layout.service");
var core_2 = require("@ngx-translate/core");
var HeaderSideComponent = /** @class */ (function () {
    function HeaderSideComponent(themeService, layout, translate, renderer) {
        this.themeService = themeService;
        this.layout = layout;
        this.translate = translate;
        this.renderer = renderer;
        this.availableLangs = [{
                name: 'EN',
                code: 'en',
                flag: 'flag-icon-us'
            }, {
                name: 'ES',
                code: 'es',
                flag: 'flag-icon-es'
            }];
        this.currentLang = this.availableLangs[0];
    }
    HeaderSideComponent.prototype.ngOnInit = function () {
        this.egretThemes = this.themeService.egretThemes;
        this.layoutConf = this.layout.layoutConf;
        this.translate.use(this.currentLang.code);
    };
    HeaderSideComponent.prototype.setLang = function (lng) {
        this.currentLang = lng;
        this.translate.use(lng.code);
    };
    HeaderSideComponent.prototype.changeTheme = function (theme) {
        // this.themeService.changeTheme(theme);
    };
    HeaderSideComponent.prototype.toggleNotific = function () {
        this.notificPanel.toggle();
    };
    HeaderSideComponent.prototype.toggleSidenav = function () {
        if (this.layoutConf.sidebarStyle === 'closed') {
            return this.layout.publishLayoutChange({
                sidebarStyle: 'full'
            });
        }
        this.layout.publishLayoutChange({
            sidebarStyle: 'closed'
        });
    };
    HeaderSideComponent.prototype.toggleCollapse = function () {
        // compact --> full
        if (this.layoutConf.sidebarStyle === 'compact') {
            return this.layout.publishLayoutChange({
                sidebarStyle: 'full',
                sidebarCompactToggle: false
            }, { transitionClass: true });
        }
        // * --> compact
        this.layout.publishLayoutChange({
            sidebarStyle: 'compact',
            sidebarCompactToggle: true
        }, { transitionClass: true });
    };
    HeaderSideComponent.prototype.onSearch = function (e) {
        //   console.log(e)
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HeaderSideComponent.prototype, "notificPanel", void 0);
    HeaderSideComponent = __decorate([
        core_1.Component({
            selector: 'app-header-side',
            templateUrl: './header-side.template.html'
        }),
        __metadata("design:paramtypes", [theme_service_1.ThemeService,
            layout_service_1.LayoutService,
            core_2.TranslateService,
            core_1.Renderer2])
    ], HeaderSideComponent);
    return HeaderSideComponent;
}());
exports.HeaderSideComponent = HeaderSideComponent;
//# sourceMappingURL=header-side.component.js.map