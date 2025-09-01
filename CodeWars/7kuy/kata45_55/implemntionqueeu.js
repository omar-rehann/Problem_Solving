/*
Queues are linear collections of objects that can be inserted
and removed in a FIFO (first in, first out) manner.
*/


class Queue {
    constructor() {
        this.items = []
    }

    enqueue(item) {
        return this.items.push(item);
    }

    dequeue() {

        return this.items.shift();

    }

    size() {
        return this.items.length;
    }
}