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
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var match_media_service_1 = require("app/shared/services/match-media.service");
var egret_sidenav_helper_service_1 = require("./egret-sidenav-helper.service");
var material_1 = require("@angular/material");
var flex_layout_1 = require("@angular/flex-layout");
var EgretSidenavHelperDirective = /** @class */ (function () {
    function EgretSidenavHelperDirective(matchMediaService, egretSidenavHelperService, matSidenav, media) {
        this.matchMediaService = matchMediaService;
        this.egretSidenavHelperService = egretSidenavHelperService;
        this.matSidenav = matSidenav;
        this.media = media;
        // Set the default value
        this.isOpen = true;
        this.unsubscribeAll = new rxjs_1.Subject();
    }
    EgretSidenavHelperDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.egretSidenavHelperService.setSidenav(this.id, this.matSidenav);
        if (this.media.isActive(this.isOpenBreakpoint)) {
            this.isOpen = true;
            this.matSidenav.mode = "side";
            this.matSidenav.toggle(true);
        }
        else {
            this.isOpen = false;
            this.matSidenav.mode = "over";
            this.matSidenav.toggle(false);
        }
        this.matchMediaService.onMediaChange
            .pipe(operators_1.takeUntil(this.unsubscribeAll))
            .subscribe(function () {
            if (_this.media.isActive(_this.isOpenBreakpoint)) {
                _this.isOpen = true;
                _this.matSidenav.mode = "side";
                _this.matSidenav.toggle(true);
            }
            else {
                _this.isOpen = false;
                _this.matSidenav.mode = "over";
                _this.matSidenav.toggle(false);
            }
        });
    };
    EgretSidenavHelperDirective.prototype.ngOnDestroy = function () {
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    };
    __decorate([
        core_1.HostBinding("class.is-open"),
        __metadata("design:type", Boolean)
    ], EgretSidenavHelperDirective.prototype, "isOpen", void 0);
    __decorate([
        core_1.Input("egretSidenavHelper"),
        __metadata("design:type", String)
    ], EgretSidenavHelperDirective.prototype, "id", void 0);
    __decorate([
        core_1.Input("isOpen"),
        __metadata("design:type", String)
    ], EgretSidenavHelperDirective.prototype, "isOpenBreakpoint", void 0);
    EgretSidenavHelperDirective = __decorate([
        core_1.Directive({
            selector: "[egretSidenavHelper]"
        }),
        __metadata("design:paramtypes", [match_media_service_1.MatchMediaService,
            egret_sidenav_helper_service_1.EgretSidenavHelperService,
            material_1.MatSidenav,
            flex_layout_1.ObservableMedia])
    ], EgretSidenavHelperDirective);
    return EgretSidenavHelperDirective;
}());
exports.EgretSidenavHelperDirective = EgretSidenavHelperDirective;
var EgretSidenavTogglerDirective = /** @class */ (function () {
    function EgretSidenavTogglerDirective(egretSidenavHelperService) {
        this.egretSidenavHelperService = egretSidenavHelperService;
    }
    EgretSidenavTogglerDirective.prototype.onClick = function () {
        // console.log(this.egretSidenavHelperService.getSidenav(this.id))
        this.egretSidenavHelperService.getSidenav(this.id).toggle();
    };
    __decorate([
        core_1.Input("egretSidenavToggler"),
        __metadata("design:type", Object)
    ], EgretSidenavTogglerDirective.prototype, "id", void 0);
    __decorate([
        core_1.HostListener("click"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EgretSidenavTogglerDirective.prototype, "onClick", null);
    EgretSidenavTogglerDirective = __decorate([
        core_1.Directive({
            selector: "[egretSidenavToggler]"
        }),
        __metadata("design:paramtypes", [egret_sidenav_helper_service_1.EgretSidenavHelperService])
    ], EgretSidenavTogglerDirective);
    return EgretSidenavTogglerDirective;
}());
exports.EgretSidenavTogglerDirective = EgretSidenavTogglerDirective;
//# sourceMappingURL=egret-sidenav-helper.directive.js.map