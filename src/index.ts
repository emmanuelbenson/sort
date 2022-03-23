import { Sorter } from "./BubbleSort/Sorter";
import { NumberCollection } from "./Collections/NumbersCollection";

const numberCollection = new NumberCollection([10,3,-5,0]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection);
