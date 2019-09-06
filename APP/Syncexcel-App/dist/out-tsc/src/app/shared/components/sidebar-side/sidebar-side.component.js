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
var theme_service_1 = require("../../services/theme.service");
var layout_service_1 = require("app/shared/services/layout.service");
var SidebarSideComponent = /** @class */ (function () {
    function SidebarSideComponent(navService, themeService, layout) {
        this.navService = navService;
        this.themeService = themeService;
        this.layout = layout;
    }
    SidebarSideComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.iconTypeMenuTitle = this.navService.iconTypeMenuTitle;
        this.menuItemsSub = this.navService.menuItems$.subscribe(function (menuItem) {
            _this.menuItems = menuItem;
            //Checks item list has any icon type.
            _this.hasIconTypeMenuItem = !!_this.menuItems.filter(function (item) { return item.type === "icon"; }).length;
        });
        this.layoutConf = this.layout.layoutConf;
    };
    SidebarSideComponent.prototype.ngAfterViewInit = function () { };
    SidebarSideComponent.prototype.ngOnDestroy = function () {
        if (this.menuItemsSub) {
            this.menuItemsSub.unsubscribe();
        }
    };
    SidebarSideComponent.prototype.toggleCollapse = function () {
        if (this.layoutConf.sidebarCompactToggle) {
            this.layout.publishLayoutChange({
                sidebarCompactToggle: false
            });
        }
        else {
            this.layout.publishLayoutChange({
                // sidebarStyle: "compact",
                sidebarCompactToggle: true
            });
        }
    };
    SidebarSideComponent = __decorate([
        core_1.Component({
            selector: "app-sidebar-side",
            templateUrl: "./sidebar-side.component.html"
        }),
        __metadata("design:paramtypes", [navigation_service_1.NavigationService,
            theme_service_1.ThemeService,
            layout_service_1.LayoutService])
    ], SidebarSideComponent);
    return SidebarSideComponent;
}());
exports.SidebarSideComponent = SidebarSideComponent;
//# sourceMappingURL=sidebar-side.component.js.map