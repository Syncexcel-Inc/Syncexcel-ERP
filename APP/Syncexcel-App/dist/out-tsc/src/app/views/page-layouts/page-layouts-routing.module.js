"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var left_sidebar_card_component_1 = require("./left-sidebar-card/left-sidebar-card.component");
var full_width_card_component_1 = require("./full-width-card/full-width-card.component");
var right_sidebar_card_component_1 = require("./right-sidebar-card/right-sidebar-card.component");
var full_width_plain_component_1 = require("./full-width-plain/full-width-plain.component");
var left_sidebar_plain_component_1 = require("./left-sidebar-plain/left-sidebar-plain.component");
var full_width_card_tab_component_1 = require("./full-width-card-tab/full-width-card-tab.component");
var routes = [
    {
        path: 'full-width-card',
        component: full_width_card_component_1.FullWidthCardComponent
    },
    {
        path: 'full-width-card-tab',
        component: full_width_card_tab_component_1.FullWidthCardTabComponent
    },
    {
        path: 'left-sidebar-card',
        component: left_sidebar_card_component_1.LeftSidebarCardComponent
    },
    {
        path: 'right-sidebar-card',
        component: right_sidebar_card_component_1.RightSidebarCardComponent
    },
    {
        path: 'full-width-plain',
        component: full_width_plain_component_1.FullWidthPlainComponent
    },
    {
        path: 'left-sidebar-plain',
        component: left_sidebar_plain_component_1.LeftSidebarPlainComponent
    },
];
var PageLayoutsRoutingModule = /** @class */ (function () {
    function PageLayoutsRoutingModule() {
    }
    PageLayoutsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], PageLayoutsRoutingModule);
    return PageLayoutsRoutingModule;
}());
exports.PageLayoutsRoutingModule = PageLayoutsRoutingModule;
//# sourceMappingURL=page-layouts-routing.module.js.map