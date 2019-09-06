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
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var EgretExampleViewerTemplateComponent = /** @class */ (function () {
    function EgretExampleViewerTemplateComponent(route) {
        this.route = route;
        this.exampleComponents = {};
        this.unsubscribeAll = new rxjs_1.Subject();
    }
    EgretExampleViewerTemplateComponent.prototype.ngOnInit = function () {
        var _this = this;
        rxjs_1.combineLatest(this.route.params, this.route.data)
            .pipe(operators_1.takeUntil(this.unsubscribeAll))
            .subscribe(function (_a) {
            var params = _a[0], data = _a[1];
            _this.id = params["id"];
            _this.examples = data.map[_this.id];
            _this.exampleComponents = data.components;
            _this.componentDirPath = data.path;
            var title = _this.id.replace("-", " ");
            _this.title = title.charAt(0).toUpperCase() + title.substring(1);
            // console.log(params, data);
        });
    };
    EgretExampleViewerTemplateComponent.prototype.ngOnDestroy = function () {
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    };
    EgretExampleViewerTemplateComponent = __decorate([
        core_1.Component({
            selector: "egret-example-viewer-template",
            templateUrl: "./example-viewer-template.component.html",
            styleUrls: ["./example-viewer-template.component.scss"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], EgretExampleViewerTemplateComponent);
    return EgretExampleViewerTemplateComponent;
}());
exports.EgretExampleViewerTemplateComponent = EgretExampleViewerTemplateComponent;
//# sourceMappingURL=example-viewer-template.component.js.map