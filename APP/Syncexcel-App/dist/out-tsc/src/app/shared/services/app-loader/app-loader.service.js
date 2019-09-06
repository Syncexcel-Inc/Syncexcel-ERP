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
var app_loader_component_1 = require("./app-loader.component");
var AppLoaderService = /** @class */ (function () {
    function AppLoaderService(dialog) {
        this.dialog = dialog;
    }
    AppLoaderService.prototype.open = function (title) {
        if (title === void 0) { title = 'Please wait'; }
        this.dialogRef = this.dialog.open(app_loader_component_1.AppLoaderComponent, { disableClose: true, backdropClass: 'light-backdrop' });
        this.dialogRef.updateSize('200px');
        this.dialogRef.componentInstance.title = title;
        return this.dialogRef.afterClosed();
    };
    AppLoaderService.prototype.close = function () {
        if (this.dialogRef)
            this.dialogRef.close();
    };
    AppLoaderService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [material_1.MatDialog])
    ], AppLoaderService);
    return AppLoaderService;
}());
exports.AppLoaderService = AppLoaderService;
//# sourceMappingURL=app-loader.service.js.map