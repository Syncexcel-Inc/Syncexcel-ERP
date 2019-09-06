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
var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(router) {
        this.router = router;
        // Dummy notifications
        this.notifications = [{
                message: 'New contact added',
                icon: 'assignment_ind',
                time: '1 min ago',
                route: '/inbox',
                color: 'primary'
            }, {
                message: 'New message',
                icon: 'chat',
                time: '4 min ago',
                route: '/chat',
                color: 'accent'
            }, {
                message: 'Server rebooted',
                icon: 'settings_backup_restore',
                time: '12 min ago',
                route: '/charts',
                color: 'warn'
            }];
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (routeChange) {
            if (routeChange instanceof router_1.NavigationEnd) {
                _this.notificPanel.close();
            }
        });
    };
    NotificationsComponent.prototype.clearAll = function (e) {
        e.preventDefault();
        this.notifications = [];
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NotificationsComponent.prototype, "notificPanel", void 0);
    NotificationsComponent = __decorate([
        core_1.Component({
            selector: 'app-notifications',
            templateUrl: './notifications.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], NotificationsComponent);
    return NotificationsComponent;
}());
exports.NotificationsComponent = NotificationsComponent;
//# sourceMappingURL=notifications.component.js.map