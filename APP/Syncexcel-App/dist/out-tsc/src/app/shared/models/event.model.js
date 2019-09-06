"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var EgretCalendarEvent = /** @class */ (function () {
    function EgretCalendarEvent(data) {
        data = data || {};
        this.start = new Date(data.start) || date_fns_1.startOfDay(new Date());
        this.end = data.end ? new Date(data.end) : null;
        this._id = data._id || '';
        this.title = data.title || '';
        this.color = {
            primary: data.color && data.color.primary || '#247ba0',
            secondary: data.color && data.color.secondary || '#D1E8FF'
        };
        this.draggable = data.draggable || true;
        this.resizable = {
            beforeStart: data.resizable && data.resizable.beforeStart || true,
            afterEnd: data.resizable && data.resizable.afterEnd || true
        };
        this.actions = data.actions || [];
        this.allDay = data.allDay || false;
        this.cssClass = data.cssClass || '';
        this.meta = {
            location: data.meta && data.meta.location || '',
            notes: data.meta && data.meta.notes || ''
        };
    }
    return EgretCalendarEvent;
}());
exports.EgretCalendarEvent = EgretCalendarEvent;
//# sourceMappingURL=event.model.js.map