var removeNthFromEnd = function (head, n) {
    let listNode = head.splice(head.length - n, 1);
    return head;
};