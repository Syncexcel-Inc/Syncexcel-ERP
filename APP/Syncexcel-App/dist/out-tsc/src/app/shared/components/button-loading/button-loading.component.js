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
var ButtonLoadingComponent = /** @class */ (function () {
    function ButtonLoadingComponent() {
        this.raised = true;
        this.loadingText = 'Please wait';
        this.type = 'submit';
    }
    ButtonLoadingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input('loading'),
        __metadata("design:type", Boolean)
    ], ButtonLoadingComponent.prototype, "loading", void 0);
    __decorate([
        core_1.Input('btnClass'),
        __metadata("design:type", String)
    ], ButtonLoadingComponent.prototype, "btnClass", void 0);
    __decorate([
        core_1.Input('raised'),
        __metadata("design:type", Boolean)
    ], ButtonLoadingComponent.prototype, "raised", void 0);
    __decorate([
        core_1.Input('loadingText'),
        __metadata("design:type", Object)
    ], ButtonLoadingComponent.prototype, "loadingText", void 0);
    __decorate([
        core_1.Input('type'),
        __metadata("design:type", String)
    ], ButtonLoadingComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input('color'),
        __metadata("design:type", String)
    ], ButtonLoadingComponent.prototype, "color", void 0);
    ButtonLoadingComponent = __decorate([
        core_1.Component({
            selector: 'button-loading',
            templateUrl: './button-loading.component.html',
            styleUrls: ['./button-loading.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ButtonLoadingComponent);
    return ButtonLoadingComponent;
}());
exports.ButtonLoadingComponent = ButtonLoadingComponent;
//# sourceMappingURL=button-loading.component.js.map