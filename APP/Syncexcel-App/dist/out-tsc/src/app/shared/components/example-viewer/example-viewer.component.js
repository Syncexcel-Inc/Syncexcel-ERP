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
// import { EXAMPLE_COMPONENTS } from "assets/examples/examples";
var EgretExampleViewerComponent = /** @class */ (function () {
    function EgretExampleViewerComponent(cfr) {
        this.cfr = cfr;
    }
    Object.defineProperty(EgretExampleViewerComponent.prototype, "exampleId", {
        get: function () {
            return this._exampleId;
        },
        // Component ID
        set: function (exampleId) {
            if (exampleId) {
                this._exampleId = exampleId;
            }
            else {
                console.log("EXAMPLE ID MISSING");
            }
        },
        enumerable: true,
        configurable: true
    });
    EgretExampleViewerComponent.prototype.ngOnInit = function () {
        this.componentPath = this.path + this.exampleId + '/' + this.exampleId + '.component';
    };
    EgretExampleViewerComponent.prototype.ngAfterViewInit = function () {
        if (!this.data) {
            console.log('EXAMPLE COMPONENT MISSING');
            return;
        }
        var componentFactory = this.cfr.resolveComponentFactory(this.data.component);
        this.exampleViewRef = this.exampleContainer.createComponent(componentFactory);
    };
    EgretExampleViewerComponent.prototype.ngOnDestroy = function () {
        if (this.exampleViewRef) {
            this.exampleViewRef.destroy();
        }
    };
    __decorate([
        core_1.Input("exampleId"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], EgretExampleViewerComponent.prototype, "exampleId", null);
    __decorate([
        core_1.Input('data'),
        __metadata("design:type", Object)
    ], EgretExampleViewerComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input('path'),
        __metadata("design:type", Object)
    ], EgretExampleViewerComponent.prototype, "path", void 0);
    __decorate([
        core_1.ViewChild('exampleContainer', { read: core_1.ViewContainerRef }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], EgretExampleViewerComponent.prototype, "exampleContainer", void 0);
    EgretExampleViewerComponent = __decorate([
        core_1.Component({
            selector: "egret-example-viewer",
            templateUrl: "./example-viewer.component.html",
            styleUrls: ["./example-viewer.component.scss"]
        }),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
    ], EgretExampleViewerComponent);
    return EgretExampleViewerComponent;
}());
exports.EgretExampleViewerComponent = EgretExampleViewerComponent;
//# sourceMappingURL=example-viewer.component.js.map