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
/*
  Only Required if you want to use Angular Landing
  (https://themeforest.net/item/angular-landing-material-design-angular-app-landing-page/21198258)
*/
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var LandingPageService = /** @class */ (function () {
    function LandingPageService(document) {
        this.document = document;
    }
    LandingPageService.prototype.addFix = function () {
        this.document.documentElement.classList.add('landing');
        this.document.body.classList.add('landing');
    };
    LandingPageService.prototype.removeFix = function () {
        this.document.documentElement.classList.remove('landing');
        this.document.body.classList.remove('landing');
    };
    LandingPageService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(platform_browser_1.DOCUMENT)),
        __metadata("design:paramtypes", [Document])
    ], LandingPageService);
    return LandingPageService;
}());
exports.LandingPageService = LandingPageService;
//# sourceMappingURL=landing-page.service.js.map