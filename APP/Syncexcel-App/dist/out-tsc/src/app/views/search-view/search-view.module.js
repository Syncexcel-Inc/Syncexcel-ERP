"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var search_view_routing_module_1 = require("./search-view-routing.module");
var result_page_component_1 = require("./result-page/result-page.component");
var material_1 = require("@angular/material");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var SearchViewModule = /** @class */ (function () {
    function SearchViewModule() {
    }
    SearchViewModule = __decorate([
        core_1.NgModule({
            declarations: [result_page_component_1.ResultPageComponent],
            imports: [material_1.MatCardModule, common_1.CommonModule, ngx_datatable_1.NgxDatatableModule, search_view_routing_module_1.SearchViewRoutingModule]
        })
    ], SearchViewModule);
    return SearchViewModule;
}());
exports.SearchViewModule = SearchViewModule;
//# sourceMappingURL=search-view.module.js.map