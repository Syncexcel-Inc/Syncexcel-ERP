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
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var search_service_1 = require("../search.service");
var router_1 = require("@angular/router");
var SearchInputOverComponent = /** @class */ (function () {
    function SearchInputOverComponent(searchService, router, route) {
        this.searchService = searchService;
        this.router = router;
        this.route = route;
        this.placeholder = "Search here";
        this.search = new core_1.EventEmitter();
        this.searchCtrl = new forms_1.FormControl();
    }
    SearchInputOverComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchCtrl.valueChanges.pipe(operators_1.debounceTime(200))
            .subscribe(function (value) {
            _this.search.emit(value);
            _this.searchService.searchTerm.next(value);
        });
    };
    SearchInputOverComponent.prototype.ngOnDestroy = function () {
        if (this.searchCtrlSub) {
            this.searchCtrlSub.unsubscribe();
        }
    };
    SearchInputOverComponent.prototype.navigateToResult = function () {
        if (this.resultPage) {
            this.router.navigateByUrl(this.resultPage);
        }
    };
    SearchInputOverComponent.prototype.open = function () {
        this.isOpen = true;
        this.navigateToResult();
    };
    SearchInputOverComponent.prototype.close = function () {
        this.isOpen = false;
    };
    SearchInputOverComponent.prototype.toggle = function () {
        this.isOpen = !this.isOpen;
    };
    __decorate([
        core_1.Input('resultPage'),
        __metadata("design:type", String)
    ], SearchInputOverComponent.prototype, "resultPage", void 0);
    __decorate([
        core_1.Input('placeholder'),
        __metadata("design:type", String)
    ], SearchInputOverComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Output("search"),
        __metadata("design:type", Object)
    ], SearchInputOverComponent.prototype, "search", void 0);
    SearchInputOverComponent = __decorate([
        core_1.Component({
            selector: "egret-search-input-over",
            templateUrl: "./search-input-over.component.html",
            styleUrls: ["./search-input-over.component.scss"]
        }),
        __metadata("design:paramtypes", [search_service_1.SearchService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], SearchInputOverComponent);
    return SearchInputOverComponent;
}());
exports.SearchInputOverComponent = SearchInputOverComponent;
//# sourceMappingURL=search-input-over.component.js.map