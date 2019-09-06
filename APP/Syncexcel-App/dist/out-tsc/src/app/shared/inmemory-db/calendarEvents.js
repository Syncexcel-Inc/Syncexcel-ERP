"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var CalendarEventDB = /** @class */ (function () {
    function CalendarEventDB() {
        this.colors = {
            red: {
                primary: '#f44336',
                secondary: '#FAE3E3'
            },
            blue: {
                primary: '#247ba0 ',
                secondary: '#D1E8FF'
            },
            yellow: {
                primary: '#ffd97d',
                secondary: '#FDF1BA'
            }
        };
        this.events = [{
                _id: '100',
                start: date_fns_1.subDays(date_fns_1.startOfDay(new Date()), 1),
                end: date_fns_1.addDays(new Date(), 1),
                title: 'A 3 day event',
                color: this.colors.red
            }, {
                _id: '101',
                start: date_fns_1.startOfDay(new Date()),
                title: 'An event with no end date',
                color: this.colors.yellow
            }, {
                _id: '102',
                start: date_fns_1.subDays(date_fns_1.endOfMonth(new Date()), 3),
                end: date_fns_1.addDays(date_fns_1.endOfMonth(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: this.colors.blue
            }, {
                _id: '103',
                start: date_fns_1.addHours(date_fns_1.startOfDay(new Date()), 2),
                end: new Date(),
                title: 'A draggable and resizable event',
                color: this.colors.yellow,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }];
    }
    return CalendarEventDB;
}());
exports.CalendarEventDB = CalendarEventDB;
//# sourceMappingURL=calendarEvents.js.map