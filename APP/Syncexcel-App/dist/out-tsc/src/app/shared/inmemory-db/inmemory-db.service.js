"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chat_db_1 = require("./chat-db");
var invoices_1 = require("./invoices");
var todo_1 = require("./todo");
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        return {
            'contacts': chat_db_1.ChatDB.contacts,
            'chat-collections': chat_db_1.ChatDB.chatCollection,
            'chat-user': chat_db_1.ChatDB.user,
            'invoices': invoices_1.InvoiceDB.invoices,
            'todoList': todo_1.Todo.todoList,
            'todoTag': todo_1.TodoTag.tag
        };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=inmemory-db.service.js.map