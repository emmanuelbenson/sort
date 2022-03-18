export class Sorter {
    constructor(public collection: number[]) {}

    sort(): void {

    }
}

const sorter = new Sorter([10, 3, -5, 0, 50]);
sorter.sort();
console.log(sorter.collection);
