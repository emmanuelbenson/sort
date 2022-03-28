"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollection = void 0;
const BubbleSort_1 = require("../BubbleSort/BubbleSort");
class NumberCollection extends BubbleSort_1.BubbleSort {
    constructor(data) {
        super();
        this.data = data;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
    get length() {
        return this.data.length;
    }
}
exports.NumberCollection = NumberCollection;
