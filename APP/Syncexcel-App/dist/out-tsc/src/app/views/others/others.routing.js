"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_gallery_component_1 = require("./app-gallery/app-gallery.component");
var app_pricing_component_1 = require("./app-pricing/app-pricing.component");
var app_users_component_1 = require("./app-users/app-users.component");
var app_blank_component_1 = require("./app-blank/app-blank.component");
var nested1_component_1 = require("./nested1/nested1.component");
var nested2_component_1 = require("./nested2/nested2.component");
var nested3_component_1 = require("./nested3/nested3.component");
exports.OthersRoutes = [
    {
        path: '',
        children: [{
                path: 'gallery',
                component: app_gallery_component_1.AppGalleryComponent,
                data: { title: 'Gallery', breadcrumb: 'GALLERY' }
            }, {
                path: 'pricing',
                component: app_pricing_component_1.AppPricingComponent,
                data: { title: 'Pricing', breadcrumb: 'PRICINGS' }
            }, {
                path: 'users',
                component: app_users_component_1.AppUsersComponent,
                data: { title: 'Users', breadcrumb: 'USERS' }
            }, {
                path: 'blank',
                component: app_blank_component_1.AppBlankComponent,
                data: { title: 'Blank', breadcrumb: 'BLANK' }
            }, {
                path: 'n1',
                component: nested1_component_1.Nested1Component,
                data: { title: '1', breadcrumb: '1' }
            }, {
                path: 'n1/n2',
                component: nested2_component_1.Nested2Component,
                data: { title: '2', breadcrumb: '2' }
            }, {
                path: 'n1/n3',
                component: nested3_component_1.Nested3Component,
                data: { title: '3', breadcrumb: '3' }
            }]
    }
];
//# sourceMappingURL=others.routing.js.map