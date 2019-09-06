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
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var flex_layout_1 = require("@angular/flex-layout");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var ng2_charts_1 = require("ng2-charts");
var ng2_file_upload_1 = require("ng2-file-upload/ng2-file-upload");
var shared_module_1 = require("./../../shared/shared.module");
var app_gallery_component_1 = require("./app-gallery/app-gallery.component");
var app_pricing_component_1 = require("./app-pricing/app-pricing.component");
var app_users_component_1 = require("./app-users/app-users.component");
var app_blank_component_1 = require("./app-blank/app-blank.component");
var others_routing_1 = require("./others.routing");
var nested1_component_1 = require("./nested1/nested1.component");
var nested2_component_1 = require("./nested2/nested2.component");
var nested3_component_1 = require("./nested3/nested3.component");
var OthersModule = /** @class */ (function () {
    function OthersModule() {
    }
    OthersModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                material_1.MatListModule,
                material_1.MatIconModule,
                material_1.MatButtonModule,
                material_1.MatCardModule,
                material_1.MatMenuModule,
                material_1.MatSlideToggleModule,
                material_1.MatGridListModule,
                material_1.MatChipsModule,
                material_1.MatCheckboxModule,
                material_1.MatRadioModule,
                material_1.MatTabsModule,
                material_1.MatInputModule,
                material_1.MatProgressBarModule,
                flex_layout_1.FlexLayoutModule,
                ngx_datatable_1.NgxDatatableModule,
                ng2_charts_1.ChartsModule,
                ng2_file_upload_1.FileUploadModule,
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(others_routing_1.OthersRoutes)
            ],
            declarations: [
                app_gallery_component_1.AppGalleryComponent,
                app_pricing_component_1.AppPricingComponent,
                app_users_component_1.AppUsersComponent,
                app_blank_component_1.AppBlankComponent, nested1_component_1.Nested1Component, nested2_component_1.Nested2Component, nested3_component_1.Nested3Component
            ]
        })
    ], OthersModule);
    return OthersModule;
}());
exports.OthersModule = OthersModule;
//# sourceMappingURL=others.module.js.map