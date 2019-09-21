"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __importStar(require("mongoose"));
var mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
var Schema = mongoose.Schema;
var schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    termsAgreed: { type: Boolean, required: true },
    isActive: { type: String, required: true }
});
schema.plugin(mongoose_unique_validator_1.default);
exports.default = mongoose.model('User', schema);
//# sourceMappingURL=user.model.js.map