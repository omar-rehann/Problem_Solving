function ListNode(value, next = null) {
    this.value = value;
    this.next = next;
}

var removeNthFromEnd = function(head, n) {
    let length = 0;
    let current = head;
    while (current !== null) {
        length++;
        current = current.next;
    }

    if (n === length) {
        return head.next;
    }

    let step = length - n - 1; // العقدة اللي قبل العنصر
    current = head;
    for (let i = 0; i <= step; i++) {
        if (i === step) break;
        current = current.next;
    }

    current.next = current.next.next;

    return head;
};