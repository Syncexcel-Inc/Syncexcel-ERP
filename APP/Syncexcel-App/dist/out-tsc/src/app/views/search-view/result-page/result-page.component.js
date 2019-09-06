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
var search_service_1 = require("app/shared/search/search.service");
var country_service_1 = require("../country.service");
var ResultPageComponent = /** @class */ (function () {
    function ResultPageComponent(searchService, countryService) {
        this.searchService = searchService;
        this.countryService = countryService;
    }
    ResultPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchTermSub = this.searchService.searchTerm$.subscribe(function (term) {
            _this.countries$ = _this.countryService.getCountries(term);
        });
    };
    ResultPageComponent.prototype.ngOnDestroy = function () {
        if (this.searchTermSub) {
            this.searchTermSub.unsubscribe();
        }
    };
    ResultPageComponent = __decorate([
        core_1.Component({
            selector: "app-result-page",
            templateUrl: "./result-page.component.html",
            styleUrls: ["./result-page.component.scss"]
        }),
        __metadata("design:paramtypes", [search_service_1.SearchService,
            country_service_1.CountryService])
    ], ResultPageComponent);
    return ResultPageComponent;
}());
exports.ResultPageComponent = ResultPageComponent;
//# sourceMappingURL=result-page.component.js.map