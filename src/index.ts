import { BubbleSort } from "./BubbleSort/BubbleSort";
import { NumberCollection } from "./Collections/NumbersCollection";
import { StringCollection } from "./Collections/StringCollection";

// const numberCollection = new NumberCollection([1000,3,-5,0, -1]);
const stringCollection = new StringCollection('xXaayb');
const sorter = new BubbleSort(stringCollection);
sorter.sort();
console.log(stringCollection.data);
