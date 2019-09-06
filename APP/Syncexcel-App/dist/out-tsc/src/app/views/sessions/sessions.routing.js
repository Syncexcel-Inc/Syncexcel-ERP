"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forgot_password_component_1 = require("./forgot-password/forgot-password.component");
var lockscreen_component_1 = require("./lockscreen/lockscreen.component");
var not_found_component_1 = require("./not-found/not-found.component");
var error_component_1 = require("../error/error.component");
var login_component_1 = require("./auth/login.component");
exports.SessionsRoutes = [
    {
        path: "",
        children: [
            {
                path: "login",
                component: login_component_1.LoginComponent,
                data: { title: "Login" }
            },
            {
                path: "forgot-password",
                component: forgot_password_component_1.ForgotPasswordComponent,
                data: { title: "Forgot password" }
            },
            {
                path: "lockscreen",
                component: lockscreen_component_1.LockscreenComponent,
                data: { title: "Lockscreen" }
            },
            {
                path: "404",
                component: not_found_component_1.NotFoundComponent,
                data: { title: "Not Found" }
            },
            {
                path: "error",
                component: error_component_1.ErrorComponent,
                data: { title: "Error" }
            }
        ]
    }
];
//# sourceMappingURL=sessions.routing.js.map