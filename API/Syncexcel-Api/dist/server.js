"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var user_service_1 = require("./../lib/services/user.service");
var auth_service_1 = require("./../lib/services/securities/auth.service");
require("dotenv/config");
var validate_environment_1 = __importDefault(require("./utils/validate.environment"));
validate_environment_1.default();
var app = new app_1.App([
    new user_service_1.UserService(),
    new auth_service_1.AuthService(),
], 5000);
app.listen();
//# sourceMappingURL=server.js.map