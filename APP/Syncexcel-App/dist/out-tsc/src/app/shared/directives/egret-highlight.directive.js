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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hl = __importStar(require("highlight.js"));
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var EgretHighlightDirective = /** @class */ (function () {
    function EgretHighlightDirective(el, cdr, _zone, http) {
        this.el = el;
        this.cdr = cdr;
        this._zone = _zone;
        this.http = http;
        this.unsubscribeAll = new rxjs_1.Subject();
    }
    EgretHighlightDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.code) {
            this.highlightElement(this.code);
        }
        if (this.path) {
            this.highlightedCode = "Loading...";
            this.http
                .get(this.path, { responseType: "text" })
                .pipe(operators_1.takeUntil(this.unsubscribeAll))
                .subscribe(function (response) {
                _this.highlightElement(response, _this.languages);
            });
        }
    };
    EgretHighlightDirective.prototype.ngOnDestroy = function () {
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    };
    EgretHighlightDirective.prototype.ngOnChanges = function (changes) {
        if (changes["code"] &&
            changes["code"].currentValue &&
            changes["code"].currentValue !== changes["code"].previousValue) {
            this.highlightElement(this.code);
            // console.log('hljs on change', changes)
        }
    };
    EgretHighlightDirective.prototype.highlightElement = function (code, languages) {
        var _this = this;
        this._zone.runOutsideAngular(function () {
            var res = hl.highlightAuto(code);
            _this.highlightedCode = res.value;
            // this.cdr.detectChanges();
            // console.log(languages)
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], EgretHighlightDirective.prototype, "path", void 0);
    __decorate([
        core_1.Input("egretHighlight"),
        __metadata("design:type", String)
    ], EgretHighlightDirective.prototype, "code", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], EgretHighlightDirective.prototype, "languages", void 0);
    EgretHighlightDirective = __decorate([
        core_1.Directive({
            host: {
                "[class.hljs]": "true",
                "[innerHTML]": "highlightedCode"
            },
            selector: "[egretHighlight]"
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            core_1.ChangeDetectorRef,
            core_1.NgZone,
            http_1.HttpClient])
    ], EgretHighlightDirective);
    return EgretHighlightDirective;
}());
exports.EgretHighlightDirective = EgretHighlightDirective;
//# sourceMappingURL=egret-highlight.directive.js.map