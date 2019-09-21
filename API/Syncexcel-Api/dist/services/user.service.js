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
var express = __importStar(require("express"));
var user_model_1 = __importDefault(require("../models/enterprises/user.model"));
var UserService = /** @class */ (function () {
    // private users: User[] = [
    //     {
    //         id: 100001,
    //         Name: 'Jamil Akhtar',
    //         title:'Dev'
    //     }
    // ];
    function UserService() {
        this.path = '/user';
        this.router = express.Router();
        this.createUser = function (request, response) {
            var user = request.body;
            //this.users.push(user);
            response.send(user);
        };
        this.intializeRoutes();
    }
    UserService.prototype.intializeRoutes = function () {
        this.router.get(this.path + '/getAllUsers', this.getAllUsers);
        this.router.post(this.path, this.createUser);
    };
    UserService.prototype.getAllUsers = function (request, response) {
        user_model_1.default.find({ "email": "admin@email.com" })
            .then(function (users) {
            if (!!users && users.length > 0)
                response.status(200).send(users);
            else
                response.status(201).send("No record.");
        })
            .catch(function (err) {
            response.status(400).send('Failed to create new record');
        });
    };
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map