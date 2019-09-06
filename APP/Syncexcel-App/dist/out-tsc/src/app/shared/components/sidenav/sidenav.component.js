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
var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
        this.menuItems = [];
    }
    SidenavComponent.prototype.ngOnInit = function () { };
    // Only for demo purpose
    SidenavComponent.prototype.addMenuItem = function () {
        this.menuItems.push({
            name: 'ITEM',
            type: 'dropDown',
            tooltip: 'Item',
            icon: 'done',
            state: 'material',
            sub: [
                { name: 'SUBITEM', state: 'cards' },
                { name: 'SUBITEM', state: 'buttons' }
            ]
        });
    };
    __decorate([
        core_1.Input('items'),
        __metadata("design:type", Array)
    ], SidenavComponent.prototype, "menuItems", void 0);
    __decorate([
        core_1.Input('hasIconMenu'),
        __metadata("design:type", Boolean)
    ], SidenavComponent.prototype, "hasIconTypeMenuItem", void 0);
    __decorate([
        core_1.Input('iconMenuTitle'),
        __metadata("design:type", String)
    ], SidenavComponent.prototype, "iconTypeMenuTitle", void 0);
    SidenavComponent = __decorate([
        core_1.Component({
            selector: 'app-sidenav',
            templateUrl: './sidenav.template.html'
        }),
        __metadata("design:paramtypes", [])
    ], SidenavComponent);
    return SidenavComponent;
}());
exports.SidenavComponent = SidenavComponent;
//# sourceMappingURL=sidenav.component.js.map