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

    // إضافة عنصر في البداية
    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head; // اللي جديد يشاور على القديم
        this.head = newNode; // وبعدين نخلي الجديد هو head
    }

    // عرض القائمة
    printList() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
}

// تجربة
let list = new LinkedList();
list.prepend(30); // 30
list.prepend(20); // 20 -> 30
list.prepend(10); // 10 -> 20 -> 30

list.printList();