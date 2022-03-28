"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StringCollection_1 = require("./Collections/StringCollection");
// const numberCollection = new NumberCollection([1000,3,-5,0, -1]);
const stringCollection = new StringCollection_1.StringCollection('xXaayb');
// const sorter = new BubbleSort(stringCollection);
stringCollection.sort();
// numberCollection.sort();
console.log(stringCollection.data);
// const linkedList = new LinkedList();
// linkedList.add(500);
// linkedList.add(-10);
// linkedList.add(-3);
// linkedList.add(4);
// linkedList.sort()
// linkedList.print();
