"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bodyParser = __importStar(require("body-parser"));
var mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
var error_middleware_1 = __importDefault(require("./middleware/error.middleware"));
var cors_1 = __importDefault(require("cors"));
var App = /** @class */ (function () {
    function App(services, port) {
        this.app = express_1.default();
        this.port = port;
        var corsOptions = {
            origin: ' http://localhost:4200',
            optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
        };
        this.app.use(cors_1.default(corsOptions));
        // const options:cors.CorsOptions = {
        //     allowedHeaders: ["Access-Control-Allow-Origin: *","Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
        //     credentials: true,
        //     methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
        //     origin: " http://localhost:4200",
        //     preflightContinue: false
        //   };
        //   this.app.use(cors(options));
        //   //add your routes
        //   //enable pre-flight
        //   this.app.options("*", cors(options));
        this.connectDatabase();
        this.initializeMiddlewares();
        this.initializeServices(services);
        this.initializeErrorHandling();
    }
    App.prototype.initializeMiddlewares = function () {
        this.app.use(bodyParser.json());
    };
    App.prototype.initializeServices = function (services) {
        var _this = this;
        services.forEach(function (service) {
            _this.app.use('/', service.router);
        });
    };
    App.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("App listening on the port " + _this.port);
        });
    };
    App.prototype.initializeErrorHandling = function () {
        this.app.use(error_middleware_1.default);
    };
    App.prototype.connectDatabase = function () {
        var 
        //MONGO_USER,
        //MONGO_PASSWORD,
        MONGO_PATH = process.env.MONGO_PATH;
        mongoose_1.default.connect("mongodb://" + MONGO_PATH);
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map