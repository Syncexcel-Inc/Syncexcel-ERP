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
var router_1 = require("@angular/router");
var Nested3Component = /** @class */ (function () {
    function Nested3Component(r) {
        this.r = r;
    }
    Nested3Component.prototype.ngOnInit = function () {
    };
    Nested3Component.prototype.go = function () {
        this.r.navigate(['/dashboard']);
    };
    Nested3Component = __decorate([
        core_1.Component({
            selector: 'app-nested3',
            templateUrl: './nested3.component.html',
            styleUrls: ['./nested3.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], Nested3Component);
    return Nested3Component;
}());
exports.Nested3Component = Nested3Component;
//# sourceMappingURL=nested3.component.js.map