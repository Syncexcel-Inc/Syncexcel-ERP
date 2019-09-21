"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var envalid_1 = require("envalid");
function validateEnvironment() {
    envalid_1.cleanEnv(process.env, {
        //MONGO_PASSWORD: str(),
        MONGO_PATH: envalid_1.str(),
        //MONGO_USER: str(),
        PORT: envalid_1.port(),
    });
}
exports.default = validateEnvironment;
//# sourceMappingURL=validate.environment.js.map