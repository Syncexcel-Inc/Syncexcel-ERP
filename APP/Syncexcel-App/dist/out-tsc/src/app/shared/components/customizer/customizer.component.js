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
var navigation_service_1 = require("../../../shared/services/navigation.service");
var layout_service_1 = require("../../../shared/services/layout.service");
var customizer_service_1 = require("app/shared/services/customizer.service");
var theme_service_1 = require("app/shared/services/theme.service");
var CustomizerComponent = /** @class */ (function () {
    function CustomizerComponent(navService, layout, themeService, customizer, renderer) {
        this.navService = navService;
        this.layout = layout;
        this.themeService = themeService;
        this.customizer = customizer;
        this.renderer = renderer;
        this.isCustomizerOpen = false;
        this.viewMode = 'options';
        this.sidenavTypes = [
            {
                name: "Default Menu",
                value: "default-menu"
            },
            {
                name: "Separator Menu",
                value: "separator-menu"
            },
            {
                name: "Icon Menu",
                value: "icon-menu"
            }
        ];
        this.selectedMenu = "icon-menu";
        this.isTopbarFixed = false;
        this.isRTL = false;
        this.perfectScrollbarEnabled = true;
    }
    CustomizerComponent.prototype.ngOnInit = function () {
        this.layoutConf = this.layout.layoutConf;
        this.selectedLayout = this.layoutConf.navigationPos;
        this.isTopbarFixed = this.layoutConf.topbarFixed;
        this.isRTL = this.layoutConf.dir === "rtl";
        this.egretThemes = this.themeService.egretThemes;
    };
    CustomizerComponent.prototype.changeTheme = function (theme) {
        // this.themeService.changeTheme(theme);
        this.layout.publishLayoutChange({ matTheme: theme.name });
    };
    CustomizerComponent.prototype.changeLayoutStyle = function (data) {
        this.layout.publishLayoutChange({ navigationPos: this.selectedLayout });
    };
    CustomizerComponent.prototype.changeSidenav = function (data) {
        this.navService.publishNavigationChange(data.value);
    };
    CustomizerComponent.prototype.toggleBreadcrumb = function (data) {
        this.layout.publishLayoutChange({ useBreadcrumb: data.checked });
    };
    CustomizerComponent.prototype.toggleTopbarFixed = function (data) {
        this.layout.publishLayoutChange({ topbarFixed: data.checked });
    };
    CustomizerComponent.prototype.toggleDir = function (data) {
        var dir = data.checked ? "rtl" : "ltr";
        this.layout.publishLayoutChange({ dir: dir });
    };
    CustomizerComponent.prototype.tooglePerfectScrollbar = function (data) {
        this.layout.publishLayoutChange({ perfectScrollbar: this.perfectScrollbarEnabled });
    };
    CustomizerComponent = __decorate([
        core_1.Component({
            selector: "app-customizer",
            templateUrl: "./customizer.component.html",
            styleUrls: ["./customizer.component.scss"]
        }),
        __metadata("design:paramtypes", [navigation_service_1.NavigationService,
            layout_service_1.LayoutService,
            theme_service_1.ThemeService,
            customizer_service_1.CustomizerService,
            core_1.Renderer2])
    ], CustomizerComponent);
    return CustomizerComponent;
}());
exports.CustomizerComponent = CustomizerComponent;
//# sourceMappingURL=customizer.component.js.map