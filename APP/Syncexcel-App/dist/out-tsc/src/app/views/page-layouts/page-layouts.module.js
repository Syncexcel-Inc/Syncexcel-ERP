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
var page_layouts_routing_module_1 = require("./page-layouts-routing.module");
var left_sidebar_card_component_1 = require("./left-sidebar-card/left-sidebar-card.component");
var shared_directives_module_1 = require("app/shared/directives/shared-directives.module");
var shared_material_module_1 = require("app/shared/shared-material.module");
var shared_components_module_1 = require("app/shared/components/shared-components.module");
var flex_layout_1 = require("@angular/flex-layout");
var full_width_card_component_1 = require("./full-width-card/full-width-card.component");
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var right_sidebar_card_component_1 = require("./right-sidebar-card/right-sidebar-card.component");
var full_width_plain_component_1 = require("./full-width-plain/full-width-plain.component");
var left_sidebar_plain_component_1 = require("./left-sidebar-plain/left-sidebar-plain.component");
var full_width_card_tab_component_1 = require("./full-width-card-tab/full-width-card-tab.component");
var PageLayoutsModule = /** @class */ (function () {
    function PageLayoutsModule() {
    }
    PageLayoutsModule = __decorate([
        core_1.NgModule({
            declarations: [left_sidebar_card_component_1.LeftSidebarCardComponent, full_width_card_component_1.FullWidthCardComponent, right_sidebar_card_component_1.RightSidebarCardComponent, full_width_plain_component_1.FullWidthPlainComponent, left_sidebar_plain_component_1.LeftSidebarPlainComponent, full_width_card_tab_component_1.FullWidthCardTabComponent],
            imports: [
                shared_material_module_1.SharedMaterialModule,
                shared_directives_module_1.SharedDirectivesModule,
                shared_components_module_1.SharedComponentsModule,
                flex_layout_1.FlexLayoutModule,
                common_1.CommonModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                page_layouts_routing_module_1.PageLayoutsRoutingModule
            ]
        })
    ], PageLayoutsModule);
    return PageLayoutsModule;
}());
exports.PageLayoutsModule = PageLayoutsModule;
//# sourceMappingURL=page-layouts.module.js.map