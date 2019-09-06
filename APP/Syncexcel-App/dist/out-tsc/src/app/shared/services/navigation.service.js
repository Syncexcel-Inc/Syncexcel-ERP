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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var NavigationService = /** @class */ (function () {
    function NavigationService() {
        this.iconMenuItems = new Array();
        this.separatorMenuItems = new Array();
        this.plainMenuItems = new Array();
        this.iconMenu = this.iconMenuItems;
        this.separatorMenu = this.separatorMenuItems;
        this.plainMenu = this.plainMenuItems;
        /*iconMenu: IMenuItem[] = [
          {
            name: "HOME",
            type: "icon",
            tooltip: "Home",
            icon: "home",
            state: "home"
          }]
          /*,
          {
            name: "PROFILE",
            type: "icon",
            tooltip: "Profile",
            icon: "person",
            state: "profile/overview"
          },
          {
            name: "TOUR",
            type: "icon",
            tooltip: "Tour",
            icon: "flight_takeoff",
            state: "tour"
          },
          {
            type: "separator",
            name: "Admin Console"
          },
          {
            name: "User",
            type: "link",
            tooltip: "Dashboard",
            icon: "dashboard",
            state: "others/blank"
          },
          {
            name: "BLANK",
            type: "link",
            tooltip: "Dashboard",
            icon: "dashboard",
            state: "others/blank"
          },
          {
            name: "DOC",
            type: "extLink",
            tooltip: "Documentation",
            icon: "library_books",
            state: "http://demos.ui-lib.com/egret-doc/"
          }
        ];*/
        /*separatorMenu: IMenuItem[] = [
          {
            type: "separator",
            name: "Custom components"
          },
          {
            name: "DASHBOARD",
            type: "link",
            tooltip: "Dashboard",
            icon: "dashboard",
            state: "dashboard"
          },
          {
            name: "INBOX",
            type: "link",
            tooltip: "Inbox",
            icon: "inbox",
            state: "inbox"
          },
          {
            name: "CHAT",
            type: "link",
            tooltip: "Chat",
            icon: "chat",
            state: "chat"
          },
          {
            name: "CRUD Table",
            type: "link",
            tooltip: "CRUD Table",
            icon: "format_list_bulleted",
            state: "cruds/ngx-table"
          },
          {
            name: "DIALOGS",
            type: "dropDown",
            tooltip: "Dialogs",
            icon: "filter_none",
            state: "dialogs",
            sub: [
              { name: "CONFIRM", state: "confirm" },
              { name: "LOADER", state: "loader" }
            ]
          },
          {
            name: "PROFILE",
            type: "dropDown",
            tooltip: "Profile",
            icon: "person",
            state: "profile",
            sub: [
              { name: "OVERVIEW", state: "overview" },
              { name: "SETTINGS", state: "settings" },
              { name: "BLANK", state: "blank" }
            ]
          },
          {
            name: "TOUR",
            type: "link",
            tooltip: "Tour",
            icon: "flight_takeoff",
            state: "tour"
          },
          {
            type: "separator",
            name: "Integrated components"
          },
          {
            name: "CALENDAR",
            type: "link",
            tooltip: "Calendar",
            icon: "date_range",
            state: "calendar"
          },
          {
            name: "MATERIAL",
            type: "dropDown",
            tooltip: "Material",
            icon: "favorite",
            state: "material",
            sub: [
              { name: "BUTTONS", state: "buttons" },
              { name: "Button Toggle", state: "button-toggle" },
              { name: "Buttons Loading", state: "loading-buttons" },
              { name: "CARDS", state: "cards" },
              { name: "GRIDS", state: "grids" },
              { name: "LISTS", state: "lists" },
              { name: "MENU", state: "menu" },
              { name: "TABS", state: "tabs" },
              { name: "SELECT", state: "select" },
              { name: "RADIO", state: "radio" },
              { name: "AUTOCOMPLETE", state: "autocomplete" },
              { name: "SLIDER", state: "slider" },
              { name: "PROGRESS", state: "progress" },
              { name: "SNACKBAR", state: "snackbar" }
            ]
          },
          {
            name: "FORMS",
            type: "dropDown",
            tooltip: "Forms",
            icon: "description",
            state: "forms",
            sub: [
              { name: "BASIC", state: "basic" },
              { name: "EDITOR", state: "editor" },
              { name: "UPLOAD", state: "upload" },
              { name: "WIZARD", state: "wizard" }
            ]
          },
          {
            name: "TABLES",
            type: "dropDown",
            tooltip: "Tables",
            icon: "format_line_spacing",
            state: "tables",
            sub: [
              { name: "FULLSCREEN", state: "fullscreen" },
              { name: "PAGING", state: "paging" },
              { name: "FILTER", state: "filter" }
            ]
          },
          {
            name: "MAP",
            type: "link",
            tooltip: "Map",
            icon: "add_location",
            state: "map"
          },
          {
            name: "CHARTS",
            type: "link",
            tooltip: "Charts",
            icon: "show_chart",
            state: "charts"
          },
          {
            name: "DND",
            type: "link",
            tooltip: "Drag and Drop",
            icon: "adjust",
            state: "dragndrop"
          },
          {
            type: "separator",
            name: "Other components"
          },
          {
            name: "SESSIONS",
            type: "dropDown",
            tooltip: "Pages",
            icon: "view_carousel",
            state: "sessions",
            sub: [
              { name: "SIGNUP", state: "signup" },
              { name: "SIGNIN", state: "signin" },
              { name: "FORGOT", state: "forgot-password" },
              { name: "LOCKSCREEN", state: "lockscreen" },
              { name: "NOTFOUND", state: "404" },
              { name: "ERROR", state: "error" }
            ]
          },
          {
            name: "OTHERS",
            type: "dropDown",
            tooltip: "Others",
            icon: "blur_on",
            state: "others",
            sub: [
              { name: "GALLERY", state: "gallery" },
              { name: "PRICINGS", state: "pricing" },
              { name: "USERS", state: "users" },
              { name: "BLANK", state: "blank" }
            ]
          },
          {
            name: "MATICONS",
            type: "link",
            tooltip: "Material Icons",
            icon: "store",
            state: "icons"
          },
          {
            name: "DOC",
            type: "extLink",
            tooltip: "Documentation",
            icon: "library_books",
            state: "http://demos.ui-lib.com/egret-doc/"
          }
        ];
      
        plainMenu: IMenuItem[] = [
          {
            name: "DASHBOARD",
            type: "link",
            tooltip: "Dashboard",
            icon: "dashboard",
            state: "dashboard"
          },
          {
            name: "INBOX",
            type: "link",
            tooltip: "Inbox",
            icon: "inbox",
            state: "inbox"
          },
          {
            name: "CHAT",
            type: "link",
            tooltip: "Chat",
            icon: "chat",
            state: "chat"
          },
          {
            name: "CRUD Table",
            type: "link",
            tooltip: "CRUD Table",
            icon: "format_list_bulleted",
            state: "cruds/ngx-table"
          },
          {
            name: "CALENDAR",
            type: "link",
            tooltip: "Calendar",
            icon: "date_range",
            state: "calendar"
          },
          {
            name: "DIALOGS",
            type: "dropDown",
            tooltip: "Dialogs",
            icon: "filter_none",
            state: "dialogs",
            sub: [
              { name: "CONFIRM", state: "confirm" },
              { name: "LOADER", state: "loader" }
            ]
          },
          {
            name: "MATERIAL",
            type: "dropDown",
            icon: "favorite",
            state: "component",
            sub: [
              { name: "BUTTONS", state: "buttons" },
              { name: "Button Toggle", state: "button-toggle" },
              { name: "Buttons Loading", state: "loading-buttons" },
              { name: "CARDS", state: "cards" },
              { name: "GRIDS", state: "grids" },
              { name: "LISTS", state: "lists" },
              { name: "MENU", state: "menu" },
              { name: "TABS", state: "tabs" },
              { name: "SELECT", state: "select" },
              { name: "RADIO", state: "radio" },
              { name: "AUTOCOMPLETE", state: "autocomplete" },
              { name: "SLIDER", state: "slider" },
              { name: "PROGRESS", state: "progress" },
              { name: "SNACKBAR", state: "snackbar" }
            ]
          },
          {
            name: "FORMS",
            type: "dropDown",
            tooltip: "Forms",
            icon: "description",
            state: "forms",
            sub: [
              { name: "BASIC", state: "basic" },
              { name: "EDITOR", state: "editor" },
              { name: "UPLOAD", state: "upload" },
              { name: "WIZARD", state: "wizard" }
            ]
          },
          {
            name: "TABLES",
            type: "dropDown",
            tooltip: "Tables",
            icon: "format_line_spacing",
            state: "tables",
            sub: [
              { name: "FULLSCREEN", state: "fullscreen" },
              { name: "PAGING", state: "paging" },
              { name: "FILTER", state: "filter" }
            ]
          },
          {
            name: "PROFILE",
            type: "dropDown",
            tooltip: "Profile",
            icon: "person",
            state: "profile",
            sub: [
              { name: "OVERVIEW", state: "overview" },
              { name: "SETTINGS", state: "settings" },
              { name: "BLANK", state: "blank" }
            ]
          },
          {
            name: "TOUR",
            type: "link",
            tooltip: "Tour",
            icon: "flight_takeoff",
            state: "tour"
          },
          {
            name: "MAP",
            type: "link",
            tooltip: "Map",
            icon: "add_location",
            state: "map"
          },
          {
            name: "CHARTS",
            type: "link",
            tooltip: "Charts",
            icon: "show_chart",
            state: "charts"
          },
          {
            name: "DND",
            type: "link",
            tooltip: "Drag and Drop",
            icon: "adjust",
            state: "dragndrop"
          },
          {
            name: "SESSIONS",
            type: "dropDown",
            tooltip: "Pages",
            icon: "view_carousel",
            state: "sessions",
            sub: [
              { name: "SIGNUP", state: "signup" },
              { name: "SIGNIN", state: "signin" },
              { name: "FORGOT", state: "forgot-password" },
              { name: "LOCKSCREEN", state: "lockscreen" },
              { name: "NOTFOUND", state: "404" },
              { name: "ERROR", state: "error" }
            ]
          },
          {
            name: "OTHERS",
            type: "dropDown",
            tooltip: "Others",
            icon: "blur_on",
            state: "others",
            sub: [
              { name: "GALLERY", state: "gallery" },
              { name: "PRICINGS", state: "pricing" },
              { name: "USERS", state: "users" },
              { name: "BLANK", state: "blank" }
            ]
          },
          {
            name: "MATICONS",
            type: "link",
            tooltip: "Material Icons",
            icon: "store",
            state: "icons"
          },
          {
            name: "DOC",
            type: "extLink",
            tooltip: "Documentation",
            icon: "library_books",
            state: "http://demos.ui-lib.com/egret-doc/"
          }
        ];*/
        // Icon menu TITLE at the very top of navigation.
        // This title will appear if any icon type item is present in menu.
        this.iconTypeMenuTitle = "Frequently Accessed";
        // sets iconMenu as default;
        this.menuItems = new rxjs_1.BehaviorSubject(this.separatorMenu);
        // navigation component has subscribed to this Observable
        this.menuItems$ = this.menuItems.asObservable();
        this.getIconMenuItems();
        this.getSeparatorMenuItems();
        this.getPlainMenuItems();
    }
    NavigationService.prototype.getIconMenuItems = function () {
        this.iconMenuItems.push({ name: "HOME", type: "icon", tooltip: "Home", icon: "home", state: "others/blank" });
        this.iconMenuItems.push({ name: "PROFILE", type: "icon", tooltip: "Profile", icon: "person", state: "profile/overview" });
        this.iconMenuItems.push({ name: "TOUR", type: "icon", tooltip: "Tour", icon: "flight_takeoff", state: "tour" });
        this.iconMenuItems.push({ name: "Admin Console", type: "separator" });
        this.iconMenuItems.push({ name: "Enterprise", type: "dropDown", tooltip: "Enterprise", icon: "blur_on", state: "others",
            sub: [
                { name: "GALLERY", state: "gallery" },
                { name: "PRICINGS", state: "pricing" },
                { name: "USERS", state: "users" },
                { name: "BLANK", state: "blank" }
            ] });
        this.iconMenuItems.push({ name: "HOME", type: "link", tooltip: "Home", icon: "home", state: "others/blank" });
    };
    NavigationService.prototype.getSeparatorMenuItems = function () {
        this.separatorMenuItems.push({
            type: "separator",
            name: "Admin components"
        });
        this.separatorMenuItems.push({
            name: "DASHBOARD",
            type: "link",
            tooltip: "Dashboard",
            icon: "dashboard",
            state: "dashboard"
        });
        this.separatorMenuItems.push({
            name: "INBOX",
            type: "link",
            tooltip: "Inbox",
            icon: "inbox",
            state: "inbox"
        });
        this.separatorMenuItems.push({
            name: "CHAT",
            type: "link",
            tooltip: "Chat",
            icon: "chat",
            state: "chat"
        });
        this.separatorMenuItems.push({
            name: "CRUD Table",
            type: "link",
            tooltip: "CRUD Table",
            icon: "format_list_bulleted",
            state: "cruds/ngx-table"
        });
        this.separatorMenuItems.push({
            name: "DIALOGS",
            type: "dropDown",
            tooltip: "Dialogs",
            icon: "filter_none",
            state: "dialogs",
            sub: [
                { name: "CONFIRM", state: "confirm" },
                { name: "LOADER", state: "loader" }
            ]
        });
        this.separatorMenuItems.push({
            name: "PROFILE",
            type: "dropDown",
            tooltip: "Profile",
            icon: "person",
            state: "profile",
            sub: [
                { name: "OVERVIEW", state: "overview" },
                { name: "SETTINGS", state: "settings" },
                { name: "BLANK", state: "blank" }
            ]
        });
        this.separatorMenuItems.push({
            name: "TOUR",
            type: "link",
            tooltip: "Tour",
            icon: "flight_takeoff",
            state: "tour"
        });
        this.separatorMenuItems.push({
            type: "separator",
            name: "Integrated components"
        });
        this.separatorMenuItems.push({
            name: "CALENDAR",
            type: "link",
            tooltip: "Calendar",
            icon: "date_range",
            state: "calendar"
        });
        this.separatorMenuItems.push({
            name: "MATERIAL",
            type: "dropDown",
            tooltip: "Material",
            icon: "favorite",
            state: "material",
            sub: [
                { name: "BUTTONS", state: "buttons" },
                { name: "Button Toggle", state: "button-toggle" },
                { name: "Buttons Loading", state: "loading-buttons" },
                { name: "CARDS", state: "cards" },
                { name: "GRIDS", state: "grids" },
                { name: "LISTS", state: "lists" },
                { name: "MENU", state: "menu" },
                { name: "TABS", state: "tabs" },
                { name: "SELECT", state: "select" },
                { name: "RADIO", state: "radio" },
                { name: "AUTOCOMPLETE", state: "autocomplete" },
                { name: "SLIDER", state: "slider" },
                { name: "PROGRESS", state: "progress" },
                { name: "SNACKBAR", state: "snackbar" }
            ]
        });
        this.separatorMenuItems.push({
            name: "FORMS",
            type: "dropDown",
            tooltip: "Forms",
            icon: "description",
            state: "forms",
            sub: [
                { name: "BASIC", state: "basic" },
                { name: "EDITOR", state: "editor" },
                { name: "UPLOAD", state: "upload" },
                { name: "WIZARD", state: "wizard" }
            ]
        });
        this.separatorMenuItems.push({
            name: "TABLES",
            type: "dropDown",
            tooltip: "Tables",
            icon: "format_line_spacing",
            state: "tables",
            sub: [
                { name: "FULLSCREEN", state: "fullscreen" },
                { name: "PAGING", state: "paging" },
                { name: "FILTER", state: "filter" }
            ]
        });
        this.separatorMenuItems.push({
            name: "MAP",
            type: "link",
            tooltip: "Map",
            icon: "add_location",
            state: "map"
        });
        this.separatorMenuItems.push({
            name: "CHARTS",
            type: "link",
            tooltip: "Charts",
            icon: "show_chart",
            state: "charts"
        });
        this.separatorMenuItems.push({
            name: "DND",
            type: "link",
            tooltip: "Drag and Drop",
            icon: "adjust",
            state: "dragndrop"
        });
        this.separatorMenuItems.push({
            type: "separator",
            name: "Other components"
        });
        this.separatorMenuItems.push({
            name: "SESSIONS",
            type: "dropDown",
            tooltip: "Pages",
            icon: "view_carousel",
            state: "sessions",
            sub: [
                { name: "SIGNUP", state: "signup" },
                { name: "SIGNIN", state: "signin" },
                { name: "FORGOT", state: "forgot-password" },
                { name: "LOCKSCREEN", state: "lockscreen" },
                { name: "NOTFOUND", state: "404" },
                { name: "ERROR", state: "error" }
            ]
        });
        this.separatorMenuItems.push({
            name: "OTHERS",
            type: "dropDown",
            tooltip: "Others",
            icon: "blur_on",
            state: "others",
            sub: [
                { name: "GALLERY", state: "gallery" },
                { name: "PRICINGS", state: "pricing" },
                { name: "USERS", state: "users" },
                { name: "BLANK", state: "blank" }
            ]
        });
        this.separatorMenuItems.push({
            name: "MATICONS",
            type: "link",
            tooltip: "Material Icons",
            icon: "store",
            state: "icons"
        });
        this.separatorMenuItems.push({
            name: "DOC",
            type: "extLink",
            tooltip: "Documentation",
            icon: "library_books",
            state: "http://demos.ui-lib.com/egret-doc/"
        });
    };
    NavigationService.prototype.getPlainMenuItems = function () {
        this.plainMenuItems.push({ name: "HOME", type: "icon", tooltip: "Home", icon: "home", state: "others/blank" });
        this.plainMenuItems.push({ name: "PROFILE", type: "icon", tooltip: "Profile", icon: "person", state: "profile/overview" });
        this.plainMenuItems.push({ name: "TOUR", type: "icon", tooltip: "Tour", icon: "flight_takeoff", state: "tour" });
        this.plainMenuItems.push({ name: "Admin Console", type: "separator" });
        this.plainMenuItems.push({ name: "Enterprise", type: "dropDown", tooltip: "Enterprise", icon: "blur_on", state: "others",
            sub: [
                { name: "GALLERY", state: "gallery" },
                { name: "PRICINGS", state: "pricing" },
                { name: "USERS", state: "users" },
                { name: "BLANK", state: "blank" }
            ] });
        this.plainMenuItems.push({ name: "HOME", type: "link", tooltip: "Home", icon: "home", state: "others/blank" });
    };
    // Customizer component uses this method to change menu.
    // You can remove this method and customizer component.
    // Or you can customize this method to supply different menu for
    // different user type.
    NavigationService.prototype.publishNavigationChange = function (menuType) {
        switch (menuType) {
            case "separator-menu":
                this.menuItems.next(this.separatorMenu);
                break;
            case "icon-menu":
                this.menuItems.next(this.iconMenu);
                break;
            default:
                this.menuItems.next(this.plainMenu);
        }
    };
    NavigationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], NavigationService);
    return NavigationService;
}());
exports.NavigationService = NavigationService;
//# sourceMappingURL=navigation.service.js.map