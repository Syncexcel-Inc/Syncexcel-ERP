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
var material_1 = require("@angular/material");
var LockscreenComponent = /** @class */ (function () {
    function LockscreenComponent() {
        this.lockscreenData = {
            password: ''
        };
    }
    LockscreenComponent.prototype.ngOnInit = function () {
    };
    LockscreenComponent.prototype.unlock = function () {
        console.log(this.lockscreenData);
        this.submitButton.disabled = true;
        this.progressBar.mode = 'indeterminate';
    };
    __decorate([
        core_1.ViewChild(material_1.MatProgressBar),
        __metadata("design:type", material_1.MatProgressBar)
    ], LockscreenComponent.prototype, "progressBar", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatButton),
        __metadata("design:type", material_1.MatButton)
    ], LockscreenComponent.prototype, "submitButton", void 0);
    LockscreenComponent = __decorate([
        core_1.Component({
            selector: 'app-lockscreen',
            templateUrl: './lockscreen.component.html',
            styleUrls: ['./lockscreen.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], LockscreenComponent);
    return LockscreenComponent;
}());
exports.LockscreenComponent = LockscreenComponent;
//# sourceMappingURL=lockscreen.component.js.map