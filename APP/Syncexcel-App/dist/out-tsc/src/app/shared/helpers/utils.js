"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getIndexBy(array, _a) {
    var name = _a.name, value = _a.value;
    for (var i = 0; i < array.length; i++) {
        if (array[i][name] === value) {
            return i;
        }
    }
    return -1;
}
exports.getIndexBy = getIndexBy;
//# sourceMappingURL=utils.js.map