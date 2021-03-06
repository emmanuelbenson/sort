"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCollection = void 0;
const BubbleSort_1 = require("../BubbleSort/BubbleSort");
class StringCollection extends BubbleSort_1.BubbleSort {
    constructor(data) {
        super();
        this.data = data;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const characters = this.data.split('');
        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        this.data = characters.join('');
    }
    get length() {
        return this.data.length;
    }
}
exports.StringCollection = StringCollection;
