"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
    }
}
exports.Sorter = Sorter;
const sorter = new Sorter([10, 3, -5, 0, 50]);
sorter.sort();
console.log(sorter.collection);
