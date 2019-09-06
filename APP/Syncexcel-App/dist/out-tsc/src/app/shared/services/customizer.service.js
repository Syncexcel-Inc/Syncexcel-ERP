"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var layout_service_1 = require("./layout.service");
var CustomizerService = /** @class */ (function () {
    function CustomizerService(router, layout) {
        this.router = router;
        this.layout = layout;
        this.colors = [
            {
                class: "black",
                active: false
            },
            {
                class: "white",
                active: false
            },
            {
                class: "dark-blue",
                active: false
            },
            {
                class: "grey",
                active: false
            },
            {
                class: "brown",
                active: false
            },
            {
                class: "gray",
                active: false
            },
            {
                class: "purple",
                active: false
            },
            {
                class: "blue",
                active: false
            },
            {
                class: "indigo",
                active: false
            },
            {
                class: "yellow",
                active: false
            },
            {
                class: "green",
                active: false
            },
            {
                class: "pink",
                active: false
            },
            {
                class: "red",
                active: false
            }
        ];
        this.topbarColors = this.getTopbarColors();
        this.sidebarColors = this.getSidebarColors();
    }
    CustomizerService.prototype.getSidebarColors = function () {
        var _this = this;
        var sidebarColors = ['black', 'white', 'grey', 'brown', 'purple', 'dark-blue',];
        return this.colors.filter(function (color) {
            return sidebarColors.includes(color.class);
        })
            .map(function (c) {
            c.active = c.class === _this.layout.layoutConf.sidebarColor;
            return __assign({}, c);
        });
    };
    CustomizerService.prototype.getTopbarColors = function () {
        var _this = this;
        var topbarColors = ['black', 'white', 'dark-gray', 'purple', 'dark-blue', 'indigo', 'pink', 'red', 'yellow', 'green'];
        return this.colors.filter(function (color) {
            return topbarColors.includes(color.class);
        })
            .map(function (c) {
            c.active = c.class === _this.layout.layoutConf.topbarColor;
            return __assign({}, c);
        });
    };
    CustomizerService.prototype.changeSidebarColor = function (color) {
        this.layout.publishLayoutChange({ sidebarColor: color.class });
        this.sidebarColors = this.getSidebarColors();
    };
    CustomizerService.prototype.changeTopbarColor = function (color) {
        this.layout.publishLayoutChange({ topbarColor: color.class });
        this.topbarColors = this.getTopbarColors();
    };
    CustomizerService.prototype.removeClass = function (el, className) {
        if (!el || el.length === 0)
            return;
        if (!el.length) {
            el.classList.remove(className);
        }
        else {
            for (var i = 0; i < el.length; i++) {
                el[i].classList.remove(className);
            }
        }
    };
    CustomizerService.prototype.addClass = function (el, className) {
        if (!el)
            return;
        if (!el.length) {
            el.classList.add(className);
        }
        else {
            for (var i = 0; i < el.length; i++) {
                el[i].classList.add(className);
            }
        }
    };
    CustomizerService.prototype.findClosest = function (el, className) {
        if (!el)
            return;
        while (el) {
            var parent = el.parentElement;
            if (parent && this.hasClass(parent, className)) {
                return parent;
            }
            el = parent;
        }
    };
    CustomizerService.prototype.hasClass = function (el, className) {
        if (!el)
            return;
        return ((" " + el.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + className + " ") > -1);
    };
    CustomizerService.prototype.toggleClass = function (el, className) {
        if (!el)
            return;
        if (this.hasClass(el, className)) {
            this.removeClass(el, className);
        }
        else {
            this.addClass(el, className);
        }
    };
    CustomizerService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [router_1.Router,
            layout_service_1.LayoutService])
    ], CustomizerService);
    return CustomizerService;
}());
exports.CustomizerService = CustomizerService;
//# sourceMappingURL=customizer.service.js.map