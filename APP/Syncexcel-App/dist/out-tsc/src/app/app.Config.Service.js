"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_config_json_1 = __importDefault(require("../../app.config.json"));
var AppConfigService = /** @class */ (function () {
    function AppConfigService(http) {
        this.http = http;
        this.jsonObj = app_config_json_1.default;
    }
    AppConfigService.prototype.getActionUrl = function () {
        if (this.jsonObj != null) {
            return this.jsonObj[0].server + this.jsonObj[0].apiUrl;
        }
    };
    AppConfigService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AppConfigService);
    return AppConfigService;
}());
exports.AppConfigService = AppConfigService;
//# sourceMappingURL=app.Config.Service.js.map