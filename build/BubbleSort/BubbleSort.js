"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleSort = void 0;
class BubbleSort {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        for (let i = 0; i < this.collection.length; i++) {
            for (let j = 0; j < this.collection.length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
exports.BubbleSort = BubbleSort;
