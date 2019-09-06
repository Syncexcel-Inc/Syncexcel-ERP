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
var font_size_directive_1 = require("./font-size.directive");
var scroll_to_directive_1 = require("./scroll-to.directive");
var dropdown_directive_1 = require("./dropdown.directive");
var dropdown_anchor_directive_1 = require("./dropdown-anchor.directive");
var dropdown_link_directive_1 = require("./dropdown-link.directive");
var egret_side_nav_toggle_directive_1 = require("./egret-side-nav-toggle.directive");
var egret_sidenav_helper_directive_1 = require("./egret-sidenav-helper/egret-sidenav-helper.directive");
var egret_highlight_directive_1 = require("./egret-highlight.directive");
var directives = [
    font_size_directive_1.FontSizeDirective,
    scroll_to_directive_1.ScrollToDirective,
    dropdown_directive_1.AppDropdownDirective,
    dropdown_anchor_directive_1.DropdownAnchorDirective,
    dropdown_link_directive_1.DropdownLinkDirective,
    egret_side_nav_toggle_directive_1.EgretSideNavToggleDirective,
    egret_sidenav_helper_directive_1.EgretSidenavHelperDirective,
    egret_sidenav_helper_directive_1.EgretSidenavTogglerDirective,
    egret_highlight_directive_1.EgretHighlightDirective
];
var SharedDirectivesModule = /** @class */ (function () {
    function SharedDirectivesModule() {
    }
    SharedDirectivesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: directives,
            exports: directives
        })
    ], SharedDirectivesModule);
    return SharedDirectivesModule;
}());
exports.SharedDirectivesModule = SharedDirectivesModule;
//# sourceMappingURL=shared-directives.module.js.map