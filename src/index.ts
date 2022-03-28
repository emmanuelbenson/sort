import { BubbleSort } from "./BubbleSort/BubbleSort";
import { LinkedList } from "./Collections/LinkedList";
import { NumberCollection } from "./Collections/NumbersCollection";
import { StringCollection } from "./Collections/StringCollection";

// const numberCollection = new NumberCollection([1000,3,-5,0, -1]);
const stringCollection = new StringCollection('xXaayb');
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