"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var NgEgretPage = /** @class */ (function () {
    function NgEgretPage() {
    }
    NgEgretPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    NgEgretPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return NgEgretPage;
}());
exports.NgEgretPage = NgEgretPage;
//# sourceMappingURL=app.po.js.map