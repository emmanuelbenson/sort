import {IBubbleSortable} from './IBubbleSortable';

export class BubbleSort {
    constructor(public collection: IBubbleSortable){}

    sort() {
        for (let i = 0; i < this.collection.length; i++) {
            for( let j = 0; j < this.collection.length - i - 1; j++) {
                if(this.collection.compare(j, j+1)) {
                    this.collection.swap(j, j+1);
                }
            }
        }
    }
}