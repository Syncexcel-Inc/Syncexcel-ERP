"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var ErrorHandlerService = /** @class */ (function (_super) {
    __extends(ErrorHandlerService, _super);
    function ErrorHandlerService(injector) {
        var _this = _super.call(this) || this;
        _this.injector = injector;
        _this.errorCount = 0;
        return _this;
    }
    // https://github.com/angular/angular/issues/17010
    ErrorHandlerService.prototype.handleError = function (error) {
        var increment = 5;
        var max = 50;
        // Prevents change detection
        var debugCtx = error['ngDebugContext'];
        var changeDetectorRef = debugCtx && debugCtx.injector.get(core_1.ChangeDetectorRef);
        if (changeDetectorRef)
            changeDetectorRef.detach();
        this.errorCount = this.errorCount + 1;
        if (this.errorCount % increment === 0) {
            console.log(' ');
            console.log("errorHandler() was called " + this.errorCount + " times.");
            console.log(' ');
            _super.prototype.handleError.call(this, error);
            if (this.errorCount === max) {
                console.log(' ');
                console.log("Preventing recursive error after " + this.errorCount + " recursive errors.");
                console.log(' ');
                var appRef = this.injector.get(core_1.ApplicationRef);
                appRef.tick();
            }
        }
        else if (this.errorCount === 1) {
            _super.prototype.handleError.call(this, error);
        }
    };
    ErrorHandlerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.Injector])
    ], ErrorHandlerService);
    return ErrorHandlerService;
}(core_1.ErrorHandler));
exports.ErrorHandlerService = ErrorHandlerService;
//# sourceMappingURL=error-handler.service.js.map