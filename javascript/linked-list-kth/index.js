'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListKth {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
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

  kthFromEnd(k) {
    if (k < 0 || !this.head) {
      return null;
    }

    let slow = this.head;
    let fast = this.head;

    // Move fast k nodes ahead
    for (let i = 0; i < k; i++) {
      if (fast.next) {
        fast = fast.next;
      } else {
        // k is greater than the length of the list
        return null;
      }
    }

    // Move both slow and fast pointers until fast reaches the end
    while (fast.next) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow.value;
  }

  traversal() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  toStr() {
    let result = '';
    let current = this.head;
    while (current) {
      result += `{ ${current.value} } -> `;
      current = current.next;
    }
    result += 'NULL';
    return result;
  }
}

let list = new LinkedListKth();
list.append('a');
list.append('b');
list.append('c');
list.append('d');

console.log(JSON.stringify(list));

module.exports = LinkedListKth;
