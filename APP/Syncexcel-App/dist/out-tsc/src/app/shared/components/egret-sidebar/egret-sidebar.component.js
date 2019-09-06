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
var match_media_service_1 = require("app/shared/services/match-media.service");
var flex_layout_1 = require("@angular/flex-layout");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var egret_sidebar_helper_service_1 = require("./egret-sidebar-helper.service");
var EgretSidebarComponent = /** @class */ (function () {
    function EgretSidebarComponent(matchMediaService, media, sidebarHelperService, _renderer, _elementRef, cdr) {
        this.matchMediaService = matchMediaService;
        this.media = media;
        this.sidebarHelperService = sidebarHelperService;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.cdr = cdr;
        this.backdrop = null;
        this.lockedBreakpoint = "gt-sm";
        this.unsubscribeAll = new rxjs_1.Subject();
    }
    EgretSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sidebarHelperService.setSidebar(this.name, this);
        if (this.media.isActive(this.lockedBreakpoint)) {
            this.sidebarLockedOpen = true;
            this.opened = true;
        }
        else {
            this.sidebarLockedOpen = false;
            this.opened = false;
        }
        this.matchMediaService.onMediaChange
            .pipe(operators_1.takeUntil(this.unsubscribeAll))
            .subscribe(function () {
            // console.log("medua sub");
            if (_this.media.isActive(_this.lockedBreakpoint)) {
                _this.sidebarLockedOpen = true;
                _this.opened = true;
            }
            else {
                _this.sidebarLockedOpen = false;
                _this.opened = false;
            }
        });
    };
    EgretSidebarComponent.prototype.open = function () {
        this.opened = true;
        if (!this.sidebarLockedOpen && !this.backdrop) {
            this.showBackdrop();
        }
    };
    EgretSidebarComponent.prototype.close = function () {
        this.opened = false;
        this.hideBackdrop();
    };
    EgretSidebarComponent.prototype.toggle = function () {
        if (this.opened) {
            this.close();
        }
        else {
            this.open();
        }
    };
    EgretSidebarComponent.prototype.showBackdrop = function () {
        var _this = this;
        this.backdrop = this._renderer.createElement("div");
        this.backdrop.classList.add("egret-sidebar-overlay");
        this._renderer.appendChild(this._elementRef.nativeElement.parentElement, this.backdrop);
        // Close sidebar onclick
        this.backdrop.addEventListener("click", function () {
            _this.close();
        });
        this.cdr.markForCheck();
    };
    EgretSidebarComponent.prototype.hideBackdrop = function () {
        if (this.backdrop) {
            this.backdrop.parentNode.removeChild(this.backdrop);
            this.backdrop = null;
        }
        this.cdr.markForCheck();
    };
    EgretSidebarComponent.prototype.ngOnDestroy = function () {
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
        this.sidebarHelperService.removeSidebar(this.name);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], EgretSidebarComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        core_1.HostBinding("class.position-right"),
        __metadata("design:type", Boolean)
    ], EgretSidebarComponent.prototype, "right", void 0);
    __decorate([
        core_1.HostBinding("class.open"),
        __metadata("design:type", Boolean)
    ], EgretSidebarComponent.prototype, "opened", void 0);
    __decorate([
        core_1.HostBinding("class.sidebar-locked-open"),
        __metadata("design:type", Boolean)
    ], EgretSidebarComponent.prototype, "sidebarLockedOpen", void 0);
    __decorate([
        core_1.HostBinding("class.is-over"),
        __metadata("design:type", Boolean)
    ], EgretSidebarComponent.prototype, "isOver", void 0);
    EgretSidebarComponent = __decorate([
        core_1.Component({
            selector: "egret-sidebar",
            templateUrl: "./egret-sidebar.component.html",
            styleUrls: ["./egret-sidebar.component.scss"]
        }),
        __metadata("design:paramtypes", [match_media_service_1.MatchMediaService,
            flex_layout_1.ObservableMedia,
            egret_sidebar_helper_service_1.EgretSidebarHelperService,
            core_1.Renderer2,
            core_1.ElementRef,
            core_1.ChangeDetectorRef])
    ], EgretSidebarComponent);
    return EgretSidebarComponent;
}());
exports.EgretSidebarComponent = EgretSidebarComponent;
var EgretSidebarTogglerDirective = /** @class */ (function () {
    function EgretSidebarTogglerDirective(egretSidebarHelperService) {
        this.egretSidebarHelperService = egretSidebarHelperService;
    }
    EgretSidebarTogglerDirective.prototype.onClick = function () {
        this.egretSidebarHelperService.getSidebar(this.id).toggle();
    };
    __decorate([
        core_1.Input("egretSidebarToggler"),
        __metadata("design:type", Object)
    ], EgretSidebarTogglerDirective.prototype, "id", void 0);
    __decorate([
        core_1.HostListener("click"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EgretSidebarTogglerDirective.prototype, "onClick", null);
    EgretSidebarTogglerDirective = __decorate([
        core_1.Directive({
            selector: "[egretSidebarToggler]"
        }),
        __metadata("design:paramtypes", [egret_sidebar_helper_service_1.EgretSidebarHelperService])
    ], EgretSidebarTogglerDirective);
    return EgretSidebarTogglerDirective;
}());
exports.EgretSidebarTogglerDirective = EgretSidebarTogglerDirective;
//# sourceMappingURL=egret-sidebar.component.js.map