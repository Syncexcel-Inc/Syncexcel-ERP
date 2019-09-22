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
var user_model_1 = __importDefault(require("../../models/enterprises/user.model"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.path = '/auth';
        this.router = express.Router();
        this.signup = function (request, response) {
            var usr = request.body;
            user_model_1.default.find({ email: usr.email })
                .then(function (user) {
                if (!!user && user.length > 0)
                    response.status(200).send("usersAAAAAAAAAAAAAAA");
                else
                    response.status(200).send("You are not a registered user, please register.");
            })
                .catch(function (err) {
                response.status(400).send(err);
            });
            //      const user: any = request.body;
            // //this.users.push(user);
            // response.send(user);
        };
        this.signin = function (request, response) {
            user_model_1.default.findOne({ email: request.body.email }, function (err, user) {
                if (err) {
                    return response.status(500).json({
                        title: 'An error Occured',
                        error: err
                    });
                }
                if (!user) {
                    return response.status(401).json({
                        title: 'Login Failed',
                        error: { message: 'Invalid Login Credientials' }
                    });
                }
                if (!bcrypt_1.default.compareSync(request.body.password, user.password)) {
                    return response.status(401).json({
                        title: 'Login Failed',
                        error: { message: 'Invalid Login Credientials' }
                    });
                }
                var token = jsonwebtoken_1.default.sign({ user: user }, 'secretkey', { expiresIn: 7200 });
                response.status(201).json({
                    title: 'Successfully Login',
                    token: token,
                    userId: user._id
                });
            });
        };
        this.intializeRoutes();
    }
    AuthService.prototype.intializeRoutes = function () {
        this.router.post(this.path + '/signup', this.signup);
        this.router.post(this.path + '/signin', this.signin);
    };
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map