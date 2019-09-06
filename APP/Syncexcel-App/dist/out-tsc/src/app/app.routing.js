"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var admin_layout_component_1 = require("./shared/components/layouts/admin-layout/admin-layout.component");
var auth_layout_component_1 = require("./shared/components/layouts/auth-layout/auth-layout.component");
var auth_guard_1 = require("./shared/services/auth/auth.guard");
exports.rootRouterConfig = [
    {
        path: '',
        redirectTo: 'sessions/login',
        pathMatch: 'full'
    },
    {
        path: '',
        component: auth_layout_component_1.AuthLayoutComponent,
        children: [
            {
                path: 'sessions',
                loadChildren: './views/sessions/sessions.module#SessionsModule',
                data: { title: 'Session' }
            }
        ]
    },
    {
        path: '',
        component: admin_layout_component_1.AdminLayoutComponent,
        canActivate: [auth_guard_1.AuthGuard],
        children: [
            {
                path: 'others',
                loadChildren: './views/others/others.module#OthersModule',
                data: { title: 'Others', breadcrumb: 'OTHERS' }
            },
            {
                path: 'page-layouts',
                loadChildren: './views/page-layouts/page-layouts.module#PageLayoutsModule'
            },
            {
                path: 'search',
                loadChildren: './views/search-view/search-view.module#SearchViewModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'sessions/404'
    }
];
//# sourceMappingURL=app.routing.js.map