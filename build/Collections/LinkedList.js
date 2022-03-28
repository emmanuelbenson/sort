"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const BubbleSort_1 = require("../BubbleSort/BubbleSort");
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList extends BubbleSort_1.BubbleSort {
    constructor() {
        super();
        this.head = null;
        this.IndexOutOfBoundsErrorMessage = "Index out of bounds";
        this.ListIsEmptyErrorMessage = "List is empty";
    }
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }
    get length() {
        if (!this.head) {
            return 0;
        }
        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }
    at(index) {
        if (!this.head) {
            throw new Error(this.IndexOutOfBoundsErrorMessage);
        }
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error(this.IndexOutOfBoundsErrorMessage);
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error(this.ListIsEmptyErrorMessage);
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    swap(leftIndex, rightIndex) {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        const leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }
    print() {
        if (!this.head) {
            return;
        }
        let node = this.head;
        let availableNodeData = "";
        while (node) {
            availableNodeData += " " + node.data;
            node = node.next;
        }
        console.log(availableNodeData);
    }
}
exports.LinkedList = LinkedList;
