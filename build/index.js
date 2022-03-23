"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./BubbleSort/Sorter");
const NumbersCollection_1 = require("./Collections/NumbersCollection");
const numberCollection = new NumbersCollection_1.NumberCollection([10, 3, -5, 0]);
const sorter = new Sorter_1.Sorter(numberCollection);
sorter.sort();
console.log(numberCollection);
