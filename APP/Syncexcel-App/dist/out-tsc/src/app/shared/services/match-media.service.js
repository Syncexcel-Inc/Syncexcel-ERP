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
var flex_layout_1 = require("@angular/flex-layout");
var rxjs_1 = require("rxjs");
var MatchMediaService = /** @class */ (function () {
    function MatchMediaService(media) {
        this.media = media;
        this.onMediaChange = new rxjs_1.BehaviorSubject('');
        this.activeMediaQuery = '';
        this.init();
    }
    MatchMediaService.prototype.init = function () {
        var _this = this;
        this.media
            .subscribe(function (change) {
            if (_this.activeMediaQuery !== change.mqAlias) {
                _this.activeMediaQuery = change.mqAlias;
                _this.onMediaChange.next(change.mqAlias);
            }
        });
    };
    MatchMediaService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [flex_layout_1.ObservableMedia])
    ], MatchMediaService);
    return MatchMediaService;
}());
exports.MatchMediaService = MatchMediaService;
//# sourceMappingURL=match-media.service.js.map