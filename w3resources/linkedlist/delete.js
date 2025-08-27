class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // حذف عنصر بقيمة معينة
    delete(value) {
        if (!this.head) return;

        // لو العنصر المحذوف هو head
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
        }
    }

    printList() {
        let result = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
}

// تجربة
let list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);

console.log("قبل الحذف:");
list.printList(); // 10 -> 20 -> 30 -> 40

list.delete(20);
console.log("بعد حذف 20:");
list.printList(); // 10 -> 30 -> 40

list.delete(10);
console.log("بعد حذف 10:");
list.printList(); // 30 -> 40