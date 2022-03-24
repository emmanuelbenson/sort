"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BubbleSort_1 = require("./BubbleSort/BubbleSort");
const StringCollection_1 = require("./Collections/StringCollection");
// const numberCollection = new NumberCollection([1000,3,-5,0, -1]);
const stringCollection = new StringCollection_1.StringCollection('xXaayb');
const sorter = new BubbleSort_1.BubbleSort(stringCollection);
sorter.sort();
console.log(stringCollection.data);
