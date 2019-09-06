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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var flex_layout_1 = require("@angular/flex-layout");
var material_1 = require("@angular/material");
var EgretSideNavToggleDirective = /** @class */ (function () {
    function EgretSideNavToggleDirective(media, sideNav) {
        this.media = media;
        this.sideNav = sideNav;
    }
    EgretSideNavToggleDirective.prototype.ngOnInit = function () {
        this.initSideNav();
    };
    EgretSideNavToggleDirective.prototype.ngOnDestroy = function () {
        if (this.screenSizeWatcher) {
            this.screenSizeWatcher.unsubscribe();
        }
    };
    EgretSideNavToggleDirective.prototype.updateSidenav = function () {
        var self = this;
        setTimeout(function () {
            self.sideNav.opened = !self.isMobile;
            self.sideNav.mode = self.isMobile ? 'over' : 'side';
        });
    };
    EgretSideNavToggleDirective.prototype.initSideNav = function () {
        var _this = this;
        this.isMobile = this.media.isActive('xs') || this.media.isActive('sm');
        // console.log(this.isMobile)
        this.updateSidenav();
        this.screenSizeWatcher = this.media.subscribe(function (change) {
            _this.isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');
            _this.updateSidenav();
        });
    };
    EgretSideNavToggleDirective = __decorate([
        core_1.Directive({
            selector: '[EgretSideNavToggle]'
        }),
        __param(1, core_1.Host()), __param(1, core_1.Self()), __param(1, core_1.Optional()),
        __metadata("design:paramtypes", [flex_layout_1.ObservableMedia,
            material_1.MatSidenav])
    ], EgretSideNavToggleDirective);
    return EgretSideNavToggleDirective;
}());
exports.EgretSideNavToggleDirective = EgretSideNavToggleDirective;
//# sourceMappingURL=egret-side-nav-toggle.directive.js.map