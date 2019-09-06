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
var common_1 = require("@angular/common");
var url_helper_1 = require("../helpers/url.helper");
var ThemeService = /** @class */ (function () {
    function ThemeService(document) {
        this.document = document;
        this.egretThemes = [{
                "name": "egret-dark-purple",
                "baseColor": "#9c27b0",
                "isActive": false
            }, {
                "name": "egret-dark-pink",
                "baseColor": "#e91e63",
                "isActive": false
            }, {
                "name": "egret-blue",
                "baseColor": "#03a9f4",
                "isActive": true
            }, {
                "name": "egret-navy",
                "baseColor": "#10174c",
                "isActive": false
            }];
    }
    // Invoked in AppComponent and apply 'activatedTheme' on startup
    ThemeService.prototype.applyMatTheme = function (r, themeName) {
        this.renderer = r;
        this.activatedTheme = this.egretThemes[2];
        // *********** ONLY FOR DEMO **********
        this.setThemeFromQuery();
        // ************************************
        // this.changeTheme(themeName);
        this.renderer.addClass(this.document.body, themeName);
    };
    ThemeService.prototype.changeTheme = function (prevTheme, themeName) {
        this.renderer.removeClass(this.document.body, prevTheme);
        this.renderer.addClass(this.document.body, themeName);
        this.flipActiveFlag(themeName);
    };
    ThemeService.prototype.flipActiveFlag = function (themeName) {
        var _this = this;
        this.egretThemes.forEach(function (t) {
            t.isActive = false;
            if (t.name === themeName) {
                t.isActive = true;
                _this.activatedTheme = t;
            }
        });
    };
    // *********** ONLY FOR DEMO **********
    ThemeService.prototype.setThemeFromQuery = function () {
        var themeStr = url_helper_1.getQueryParam('theme');
        try {
            this.activatedTheme = JSON.parse(themeStr);
            this.flipActiveFlag(this.activatedTheme.name);
        }
        catch (e) { }
    };
    ThemeService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(common_1.DOCUMENT)),
        __metadata("design:paramtypes", [Document])
    ], ThemeService);
    return ThemeService;
}());
exports.ThemeService = ThemeService;
//# sourceMappingURL=theme.service.js.map