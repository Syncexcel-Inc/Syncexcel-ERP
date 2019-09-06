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
var shared_material_module_1 = require("../shared-material.module");
var core_2 = require("@ngx-translate/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var search_module_1 = require("../search/search.module");
var shared_pipes_module_1 = require("../pipes/shared-pipes.module");
var flex_layout_1 = require("@angular/flex-layout");
var shared_directives_module_1 = require("../directives/shared-directives.module");
// ONLY REQUIRED FOR **SIDE** NAVIGATION LAYOUT
var header_side_component_1 = require("./header-side/header-side.component");
var sidebar_side_component_1 = require("./sidebar-side/sidebar-side.component");
// ONLY REQUIRED FOR **TOP** NAVIGATION LAYOUT
var header_top_component_1 = require("./header-top/header-top.component");
var sidebar_top_component_1 = require("./sidebar-top/sidebar-top.component");
// ONLY FOR DEMO
var customizer_component_1 = require("./customizer/customizer.component");
// ALWAYS REQUIRED 
var admin_layout_component_1 = require("./layouts/admin-layout/admin-layout.component");
var auth_layout_component_1 = require("./layouts/auth-layout/auth-layout.component");
var notifications_component_1 = require("./notifications/notifications.component");
var sidenav_component_1 = require("./sidenav/sidenav.component");
var breadcrumb_component_1 = require("./breadcrumb/breadcrumb.component");
var app_confirm_component_1 = require("../services/app-confirm/app-confirm.component");
var app_loader_component_1 = require("../services/app-loader/app-loader.component");
var button_loading_component_1 = require("./button-loading/button-loading.component");
var egret_sidebar_component_1 = require("./egret-sidebar/egret-sidebar.component");
var bottom_sheet_share_component_1 = require("./bottom-sheet-share/bottom-sheet-share.component");
var example_viewer_component_1 = require("./example-viewer/example-viewer.component");
var example_viewer_template_component_1 = require("./example-viewer-template/example-viewer-template.component");
var components = [
    header_top_component_1.HeaderTopComponent,
    sidebar_top_component_1.SidebarTopComponent,
    sidenav_component_1.SidenavComponent,
    notifications_component_1.NotificationsComponent,
    sidebar_side_component_1.SidebarSideComponent,
    header_side_component_1.HeaderSideComponent,
    admin_layout_component_1.AdminLayoutComponent,
    auth_layout_component_1.AuthLayoutComponent,
    breadcrumb_component_1.BreadcrumbComponent,
    app_confirm_component_1.AppComfirmComponent,
    app_loader_component_1.AppLoaderComponent,
    customizer_component_1.CustomizerComponent,
    button_loading_component_1.ButtonLoadingComponent,
    egret_sidebar_component_1.EgretSidebarComponent,
    egret_sidebar_component_1.EgretSidebarTogglerDirective,
    bottom_sheet_share_component_1.BottomSheetShareComponent,
    example_viewer_component_1.EgretExampleViewerComponent,
    example_viewer_template_component_1.EgretExampleViewerTemplateComponent
];
var SharedComponentsModule = /** @class */ (function () {
    function SharedComponentsModule() {
    }
    SharedComponentsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                core_2.TranslateModule,
                flex_layout_1.FlexLayoutModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                search_module_1.SearchModule,
                shared_pipes_module_1.SharedPipesModule,
                shared_directives_module_1.SharedDirectivesModule,
                shared_material_module_1.SharedMaterialModule
            ],
            declarations: components,
            entryComponents: [app_confirm_component_1.AppComfirmComponent, app_loader_component_1.AppLoaderComponent, bottom_sheet_share_component_1.BottomSheetShareComponent],
            exports: components
        })
    ], SharedComponentsModule);
    return SharedComponentsModule;
}());
exports.SharedComponentsModule = SharedComponentsModule;
//# sourceMappingURL=shared-components.module.js.map