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
var route_parts_service_1 = require("../../../shared/services/route-parts.service");
var layout_service_1 = require("../../../shared/services/layout.service");
var operators_1 = require("rxjs/operators");
var BreadcrumbComponent = /** @class */ (function () {
    // public isEnabled: boolean = true;
    function BreadcrumbComponent(router, routePartsService, activeRoute, layout) {
        var _this = this;
        this.router = router;
        this.routePartsService = routePartsService;
        this.activeRoute = activeRoute;
        this.layout = layout;
        this.routerEventSub = this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(function (routeChange) {
            _this.routeParts = _this.routePartsService.generateRouteParts(_this.activeRoute.snapshot);
            // generate url from parts
            _this.routeParts.reverse().map(function (item, i) {
                item.breadcrumb = _this.parseText(item);
                item.urlSegments.forEach(function (urlSegment, j) {
                    if (j === 0)
                        return item.url = "" + urlSegment.path;
                    item.url += "/" + urlSegment.path;
                });
                if (i === 0) {
                    return item;
                }
                // prepend previous part to current part
                item.url = _this.routeParts[i - 1].url + "/" + item.url;
                return item;
            });
        });
    }
    BreadcrumbComponent.prototype.ngOnInit = function () { };
    BreadcrumbComponent.prototype.ngOnDestroy = function () {
        if (this.routerEventSub) {
            this.routerEventSub.unsubscribe();
        }
    };
    BreadcrumbComponent.prototype.parseText = function (part) {
        if (!part.breadcrumb) {
            return '';
        }
        part.breadcrumb = part.breadcrumb.replace(/{{([^{}]*)}}/g, function (a, b) {
            var r = part.params[b];
            return typeof r === 'string' ? r : a;
        });
        return part.breadcrumb;
    };
    BreadcrumbComponent = __decorate([
        core_1.Component({
            selector: 'app-breadcrumb',
            templateUrl: './breadcrumb.component.html',
            styleUrls: ['./breadcrumb.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            route_parts_service_1.RoutePartsService,
            router_1.ActivatedRoute,
            layout_service_1.LayoutService])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());
exports.BreadcrumbComponent = BreadcrumbComponent;
//# sourceMappingURL=breadcrumb.component.js.map